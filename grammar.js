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
            return { identifiers: idents.parse(),
            bounds: bounds.parse()}
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
            return { bounds }
        },
        Bound(lower, ruleLower, identifier, ruleUpper, upper) {
            return {
                low: lower.parse(),
                ruleLower: ruleLower.sourceString,
                identifier: identifier.parse()[0],
                ruleUpper: ruleUpper.sourceString,
                upper: upper.parse()
            }
        },
        Expression_plus(expr_left, _, expr_right) {
            return expr_left.parse() + expr_right.parse()
        },
        Expression_minus(expr_left, _, expr_right) {
            return expr_left.parse() - expr_right.parse()
        },
        Expression_mult(expr_left, _, expr_right) {
            return expr_left.parse() * expr_right.parse()
        },
        Expression_div(expr_left, _, expr_right) {
            return expr_left.parse() / expr_right.parse()
        },
        Expression_power(expr_left, _, expr_right) {
            return Math.pow(expr_left.parse(), expr_right.parse())
        },
        Expression_fn(fn, _a, expr, _b) {
            fn = fn.sourceString
            switch (fn) {
                case "cos":
                    return Math.cos(expr.parse())
                case "sin":
                    return Math.sin(expr.parse())
                case "atan":
                    return Math.atan(expr.parse())
                default:
                    return expr.parse()
            }
        },
        Expression_ident(_ident) {
            return {
                
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

