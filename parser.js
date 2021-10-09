// Grammar + Semantics

export default (function () {

    // ----------------- GRAMMAR ------------------------ //
   
    const grammar = ohm.grammar(`
        Shape {
            Program = Options* Ranges Formula+
            Options = "#" word number?
            Ranges = "{" Identifiers "|" Bounds "}"
            Formula = Axis "=" Expression
            Expression = AddExpression
            AddExpression 
                = AddExpression "+" MultExpression -- plus
                | AddExpression "-" MultExpression -- minus
                | MultExpression 
            MultExpression
                = MultExpression "*" ExpExpression -- times
                | MultExpression "/" ExpExpression -- divide
                | ExpExpression
            ExpExpression
                = PriExpression "^" ExpExpression -- power
                | PriExpression
            PriExpression
                = "(" Expression ")" -- paren
                | "+" PriExpression -- pos
                | "-" PriExpression -- neg
                | FnExpression
                | Constant
                | number
                | identifier
            FnExpression
                = lower+ "(" Expression ")"
            Constant = "PI"
            Bounds = NonemptyListOf<Bound, ",">
            Bound = Expression Rule identifier Rule Expression 
            Rule = "<=" | ">=" | "<" | ">"
            Identifiers = NonemptyListOf<identifier, ",">
            Axis = "x" | "y" | "z" 
            word = lower+
            identifier = lower
            number = digit+
    }`)


    const semantics = grammar.createSemantics()


    // ----------------- ACTIONS ------------------------ //

    const actions = {
        // These actions define how the parse tree emitted by the above
        // grammar is further processed. Each function matches a grammar rule
        // and receives as many arguments.

        Program(options, ranges, formulas)
        {
            options = options.children.map(o => o.parse())
            ranges = ranges.parse() // Populates bindings as a side effect
            formulas = formulas.children.map(f => f.parse())

            return { 
                options,
                ranges,
                formulas,
            }
        },

        Options(_, option, number)
        {
            return { 
                type: "OPTION-TOKEN",
                option: option.parse(),
                value: number.child(0)?.parse()
            }
        },

        Formula(axis, _, exp) 
        {
            return { 
                type: "FORMULA-TOKEN",
                axis: axis.sourceString,
                exp: exp.parse()
            }
        },

        Ranges(_a, identifiers, _b, bounds, _c) 
        {
            identifiers = 
                extractRangeIdentifiers(identifiers.parse())
            bounds = 
                bounds.parse()

            ensureIdentifierParity(identifiers, bounds)

            return { 
                type: "RANGES-TOKEN",
                identifiers, 
                bounds }
        },

        Identifiers(list) 
        // Only present in initial range variable declaration
        {
            const identifiers = list.asIteration().children.map(c => c.parse())
            return identifiers
        },

        identifier(val) 
        // All identifiers
        {
            return {
                type: "IDENTIFIER-TOKEN",
                value: val.sourceString
            }
            // return val.sourceString
        },

        Bounds(list) 
        {
            const bounds = list.asIteration().children.map(c => c.parse())
            return bounds
        },

        Bound(lower, ruleLeft, identifier, ruleRight, upper) 
        {
            return {
                type: "BOUND-TOKEN",
                low: lower.parse(),
                ruleLeft: ruleLeft.sourceString,
                identifier: identifier.parse(),
                ruleRight: ruleRight.sourceString,
                high: upper.parse()
            }
        },

        AddExpression_plus(expr_left, _, expr_right) 
        {
            const token = {
                type: "PLUS-TOKEN",
                op: (a, b) => a + b, 
                args: [expr_left.parse(),
                    expr_right.parse()]
            }
            return token
        },

        AddExpression_minus(expr_left, _, expr_right) 
        {
            const token = {
                type: "MINUS-TOKEN",
                op: (a, b) => a - b,
                args: [expr_left.parse(),
                    expr_right.parse()]
            }
            return token
        },

        MultExpression_times(expr_left, _, expr_right) 
        {
            const token = {
                type: "TIMES-TOKEN",
                op: (a, b) => a * b,
                args: [expr_left.parse(),
                    expr_right.parse()]
            }
            return token
        },

        MultExpression_divide(expr_left, _, expr_right) 
        {
            const token = {
                type: "DIVIDE-TOKEN",
                op: (a, b) => a / b,
                args: [expr_left.parse(),
                    expr_right.parse()]
            }
            return token
        },

        ExpExpression_power(expr_left, _, expr_right) 
        {
            const token = {
                type: "POWER-TOKEN",
                op: (a, b) => Math.pow(a, b),
                args: [expr_left.parse(),
                    expr_right.parse()]
            }
            return token
        },

        PriExpression_paren(_l, expr, _r)
        {
            return expr.parse()
        },

        PriExpression_pos(_, expr)
        {
            return expr.parse()
        },

        PriExpression_neg(_, expr)
        {
            return {
                type: "NEG-TOKEN",
                op: (a, b) => a * b,
                args: [-1, expr.parse()]
            }
        },

        FnExpression(fn, _a, expr, _b) 
        {
            const fn_name = fn.sourceString
            let token
            switch (fn_name) {
                case "cos":
                    token = {
                        type: "FUN-TOKEN",
                        op: (a) => Math.cos(a),
                        args: [expr.parse_w_idx(this.args.curr_idx)]
                    }
                    //return token.op.apply(null, token.args)
                    return token
                case "sin":
                    token = {
                        type: "FUN-TOKEN",
                        op: (a) => Math.sin(a),
                        args: [expr.parse_w_idx(this.args.curr_idx)]
                    }
                    //return token.op.apply(null, token.args)
                    return token
                case "atan":
                    token = {
                        type: "FUN-TOKEN",
                        op: (a) => Math.sin(a),
                        args: [expr.parse_w_idx(this.args.curr_idx)]
                    }
                    //return token.op.apply(null, token.args)
                    return token
                default:
                    throw `Unknown function \"${fn}\"`
            }
        },

        Constant(_pi) 
        {
            return Math.PI
        },

        number(_) 
        {
            return parseInt(this.sourceString)
        },

        word(_)
        {
            return this.sourceString
        }
    }

    // Bind our actions to internal methods
    semantics.addOperation('parse()', actions)
    // This method carries an argument, used to pass down an index value
    semantics.addOperation('parse_w_idx(curr_idx)', actions)

    // ----------------- ACTION HELPERS ------------------------ //

    function ensureIdentifierParity(identifiers, bounds_array)
    {
        const bounds_identifiers = 
            bounds_array.map(b => extractIdentifier(b.identifier))
        
        const b1 = identifiers.sort().join('')
        const b2 = bounds_identifiers.sort().join('')

        if (b1 !== b2) { throw "Identifiers and Bound Identifiers do not match!" }
    }

    function extractRangeIdentifiers (range_identifiers)
    {
        return range_identifiers.map(i => extractIdentifier(i))
    }

    function extractIdentifier (identifier_token)
    {
        if (identifier_token.type != "IDENTIFIER-TOKEN") {
            throw "Expected an Identifier"
        } else if (identifier_token.value == undefined) {
            throw "Undefined identifier"
        }

        return identifier_token.value
    }


    function populateBindingsFor(identifiers, bounds, bindings)
    // Ensures range identifiers have been populated in the global bindings
    // with their respective arrays of values.
    {
        // The number of steps between low/high vals in range.
        bindings.resolution = resolution

        // Populate the values for a given range variable in our global bindings.
        identifiers.forEach(i => {
            const bound = getBoundsCorrespondingToIdentifier(i, bounds)
            if (bound == undefined) { throw "Ident not in Bounds" }
            bindings[i] = makeRangeValuesForBinding(bound.low, bound.high, resolution)
        })

    }

    // Into lines now, for every v, u
    function parseFormulasIntoPointValues(raw_formulas, bindings)
    // Based on the current resolution (number of available "step" values),
    // iterate as many times, allowing the parsed formulas to return values
    // accordingly by extracting any bindings present in their definitions from the
    // global bindings object.
    {
        const result = {}
        raw_formulas.children.forEach(rf => {
            const xyz_axis = rf.parse().axis
            const iterations = bindings.resolution + 1
            result[xyz_axis] = Array(iterations)
            for (let idx = 0; idx < iterations; idx++) {
                result[xyz_axis][idx] = rf.parse_w_idx(idx).exp
            }
        })
        return result
    }

    function makeRangeValuesForBinding(low, high, resolution)
    // Return a range of values from low to high, in <resolution> steps.
    {
        const step = (high - low) / resolution
        const result = Array(resolution)
        for (let val = low, i = 0; val <= high; val += step, i++) {
            result[i] = val
        }
        return result
    }

    function getBoundsCorrespondingToIdentifier(identifier, bounds)
    // Deals only with range identifiers.
    {
        return bounds.find(b => b.identifier == identifier)
    }

    // ------------------ REVEALED -------------------------- //
    
    return {
        
        grammar,
        semantics,
        match: (str) => grammar.match(str),
        parse: (str) => semantics(grammar.match(str)).parse()

    }

})()


