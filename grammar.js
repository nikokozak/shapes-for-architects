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

const makeRangeForBinding = (low, high, resolution) =>
{
    const step = (high - low) / resolution
    const result = Array(resolution)
    for (let val = low, i = 0; val <= high; val += step, i++) {
        result[i] = val
    }
    return result
}

const getBoundsForIdentifier = (identifier, bounds) =>
{
    return bounds.find(b => b.identifier == identifier)
}

const bindings = {}

const shapeActions = 
    {
        Program(ranges, formulas) {
            return { ranges: ranges.parse(),
                formulas: formulas.children.map(c => c.parse()) 
            }
        },
        Formula(axis, _, exp) {
            return { 
                axis: axis.sourceString,
                exp: exp.parse()
            }
        },
        Ranges(_a, idents, _b, bounds, _c) {
            idents = idents.parse()
            bounds = bounds.parse()
            
            idents.forEach(i => {
                const bound = getBoundsForIdentifier(i, bounds)
                if (bound == undefined) { throw "Ident not in Bounds" }
                bindings[i] = makeRangeForBinding(bound.low, bound.high, 20)
                console.log(bindings)
            })

            return { 
                identifiers: idents,
                bounds
            }
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
            return {
                type: "arithmetic-token",
                op: (a, b) => a + b, 
                args: [expr_left.parse(), expr_right.parse()]
            }
        },
        Expression_minus(expr_left, _, expr_right) {
            return {
                type: "arithmetic-token",
                op: (a, b) => a - b,
                args: [expr_left.parse(), expr_right.parse()]
            }
        },
        Expression_mult(expr_left, _, expr_right) {
            return {
                type: "arithmetic-token",
                op: (a, b) => a * b,
                args: [expr_left.parse(), expr_right.parse()]
            }
        },
        Expression_div(expr_left, _, expr_right) {
            return {
                type: "arithmetic-token",
                op: (a, b) => a / b,
                args: [expr_left.parse(), expr_right.parse()]
            }
        },
        Expression_power(expr_left, _, expr_right) {
            return {
                type: "arithmetic-token",
                op: (a, b) => Math.pow(a, b),
                args: [expr_left.parse(), expr_right.parse()]
            }
        },
        Expression_fn(fn, _a, expr, _b) {
            fn = fn.sourceString
            switch (fn) {
                case "cos":
                    return {
                        type: "util-token",
                        op: (a) => Math.cos(a),
                        args: [expr.parse()]
                    }
                case "sin":
                    return {
                        type: "util-token",
                        op: (a) => Math.sin(a),
                        args: [expr.parse()]
                    }
                case "atan":
                    return {
                        type: "util-token",
                        op: (a) => Math.sin(a),
                        args: [expr.parse()]
                    }
                default:
                    return expr.parse()
            }
        },
        Expression_ident(ident) {
            return {
                type: "ident-token",
                name: ident.sourceString
            }
        },
        Constant(_pi) {
            return Math.PI
        },
        number(_) {
            return parseInt(this.sourceString)
        }
    }

const shapeSemantics = shapeGrammar.createSemantics()
shapeSemantics.addOperation('parse', shapeActions)

