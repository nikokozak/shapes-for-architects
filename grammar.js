const shapeGrammar = ohm.grammar(`
Shape {
    Program = Ranges Formula+
    Ranges = "{" Identifiers "|" Bounds "}"
    Formula = Axis "=" Expression
    Expression = lower+ "(" Expression ")" -- fn
                | Expression "*" Expression -- mult
                | Expression "/" Expression -- div
                | Expression "+" Expression -- plus
                | Expression "-" Expression -- minus
                | Expression "^" Expression -- power
                | Constant
                | number
                | identifier -- ident
    Constant = "PI"
    Bounds = NonemptyListOf<Bound, ",">
    Bound = number Rule identifier Rule number 
    Rule = "<=" | ">=" | "<" | ">"
    Identifiers = NonemptyListOf<identifier, ",">
    Axis = "x" | "y" | "z" 
    identifier = lower
    number = digit+
}`)

function populateBindingsFor(identifiers, bounds, bindings)
{
    const resolution = 20
    bindings.resolution = resolution

    identifiers.forEach(i => {
        const bound = getBoundsCorrespondingToIdentifier(i, bounds)
        if (bound == undefined) { throw "Ident not in Bounds" }
        bindings[i] = makeRangeValuesForBinding(bound.low, bound.high, resolution)
    })

}

function makeRangeValuesForBinding(low, high, resolution)
{
    const step = (high - low) / resolution
    const result = Array(resolution)
    for (let val = low, i = 0; val <= high; val += step, i++) {
        result[i] = val
    }
    return result
}

function getBoundsCorrespondingToIdentifier(identifier, bounds)
{
    return bounds.find(b => b.identifier == identifier)
}

function parseFormulasIntoPoints(raw_formulas, bindings)
{
    const result = {}
    raw_formulas.children.forEach(rf => {
        const axis = rf.parse().axis
        const iterations = bindings.resolution
        result[axis] = Array(iterations)
        for (let idx = 0; idx < iterations; idx++) {
            result[axis][idx] = rf.parse_w_idx(idx)
        }
    })
    return result
}

const bindings = {}
let current_index = 0

const shapeActions = 
    {
        Program(ranges, formulas) {
            ranges = ranges.parse() // populates bindings
            const formula_results = parseFormulasIntoPoints(formulas, bindings)

            return { 
                ranges,
                formula_values: formula_results
            }
        },
        Formula(axis, _, exp) {
            return { 
                axis: axis.sourceString,
                exp: exp.parse_w_idx(this.args.curr_idx)
            }
        },
        Ranges(_a, idents, _b, bounds, _c) {
            identifiers = idents.parse()
            bounds = bounds.parse()
            
            populateBindingsFor(identifiers, bounds, bindings)

            return { identifiers, bounds }
        },
        Identifiers(list) {
            console.log("vals: ")
            const identifiers = list.asIteration().children.map(c => c.parse())
            return identifiers
        },
        identifier(val) {
            return val.sourceString
        },
        Bounds(list) {
            const bounds = list.asIteration().children.map(c => c.parse())
            return bounds
        },
        Bound(lower, ruleLower, identifier, ruleUpper, upper) {
            return {
                low: lower.parse(),
                ruleLower: ruleLower.sourceString,
                identifier: identifier.parse()[0],
                ruleUpper: ruleUpper.sourceString,
                high: upper.parse()
            }
        },
        Expression_plus(expr_left, _, expr_right) {
            const token = {
                type: "arithmetic-token",
                op: (a, b) => a + b, 
                args: [expr_left.parse_w_idx(this.args.curr_idx),
                    expr_right.parse_w_idx(this.args.curr_idx)]
            }
            return token.op.apply(null, token.args)
        },
        Expression_minus(expr_left, _, expr_right) {
            const token = {
                type: "arithmetic-token",
                op: (a, b) => a - b,
                args: [expr_left.parse_w_idx(this.args.curr_idx),
                    expr_right.parse_w_idx(this.args.curr_idx)]
            }
            return token.op.apply(null, token.args)
        },
        Expression_mult(expr_left, _, expr_right) {
            const token = {
                type: "arithmetic-token",
                op: (a, b) => a * b,
                args: [expr_left.parse_w_idx(this.args.curr_idx),
                    expr_right.parse_w_idx(this.args.curr_idx)]
            }
            return token.op.apply(null, token.args)
        },
        Expression_div(expr_left, _, expr_right) {
            const token = {
                type: "arithmetic-token",
                op: (a, b) => a / b,
                args: [expr_left.parse_w_idx(this.args.curr_idx),
                    expr_right.parse_w_idx(this.args.curr_idx)]
            }
            return token.op.apply(null, token.args)
        },
        Expression_power(expr_left, _, expr_right) {
            const token = {
                type: "arithmetic-token",
                op: (a, b) => Math.pow(a, b),
                args: [expr_left.parse_w_idx(this.args.curr_idx),
                    expr_right.parse_w_idx(this.args.curr_idx)]
            }
            return token.op.apply(null, token.args)
        },
        Expression_fn(fn, _a, expr, _b) {
            fn = fn.sourceString
            let token
            switch (fn) {
                case "cos":
                    token = {
                        type: "util-token",
                        op: (a) => Math.cos(a),
                        args: [expr.parse_w_idx(this.args.curr_idx)]
                    }
                    return token.op.apply(null, token.args)
                case "sin":
                    token = {
                        type: "util-token",
                        op: (a) => Math.sin(a),
                        args: [expr.parse_w_idx(this.args.curr_idx)]
                    }
                    return token.op.apply(null, token.args)
                case "atan":
                    token = {
                        type: "util-token",
                        op: (a) => Math.sin(a),
                        args: [expr.parse_w_idx(this.args.curr_idx)]
                    }
                    return token.op.apply(null, token.args)
                default:
                    throw `Unknown function \"${fn}\"`
            }
        },
        Expression_ident(ident) {
            const token = {
                type: "ident-token",
                name: ident.sourceString,
                val: bindings[ident.sourceString][this.args.curr_idx]
            }
            return token.val
        },
        Constant(_pi) {
            return Math.PI
        },
        number(_) {
            return parseInt(this.sourceString)
        }
    }

const shapeSemantics = shapeGrammar.createSemantics()
shapeSemantics.addOperation('parse()', shapeActions)
shapeSemantics.addOperation('parse_w_idx(curr_idx)', shapeActions)

