// ----------------- ACTIONS ------------------------ //

const debug_actions = {
    // These actions define how the parse tree emitted by the grammar
    // is further processed. Each function matches a grammar rule
    // and receives as many arguments.

    Program(options, ranges, formulas)
    {
        options = options.children.map(o => o.debug())
        ranges = ranges.debug()
        formulas = formulas.children.map(f => f.debug())

        return { options, ranges, formulas, }
    },

    Options(_, option, number)
    {
        return { 
            option: option.debug(),
            value: number.child(0)?.debug()
        }
    },

    Formula(axis, _, exp) 
    {
        return { [axis.sourceString]: exp.debug }
    },

    Ranges(_a, identifiers, _b, bounds, _c) 
    {
        return {
            type: "RANGES",
            identifiers: identifiers.debug(),
            bounds: bounds.debug()
        }
    },

    Identifiers(list) 
    {
        return list.asIteration().children.map(c => c.debug())
    },

    identifier(val) 
    {
        return {
            type: "IDENTIFIER",
            value: val.sourceString
        }
    },

    Bounds(list) 
    {
        return list.asIteration().children.map(c => c.debug())
    },

    Bound(lower, ruleLeft, identifier, ruleRight, upper) 
    {
        return {
            low: lower.debug(),
            ruleLeft: ruleLeft.sourceString,
            identifier: identifier.debug(),
            ruleRight: ruleRight.sourceString,
            high: upper.debug()
        }
    },

    AddExpression_plus(expr_left, _, expr_right) 
    {
        const token = {
            type: "PLUS-TOKEN",
            op: (a, b) => a + b, 
            args: [expr_left.debug(),
                expr_right.debug()]
        }
        return token
    },

    AddExpression_minus(expr_left, _, expr_right) 
    {
        const token = {
            type: "MINUS-TOKEN",
            op: (a, b) => a - b,
            args: [expr_left.debug(),
                expr_right.debug()]
        }
        return token
    },

    MultExpression_times(expr_left, _, expr_right) 
    {
        const token = {
            type: "TIMES-TOKEN",
            op: (a, b) => a * b,
            args: [expr_left.debug(),
                expr_right.debug()]
        }
        return token
    },

    MultExpression_divide(expr_left, _, expr_right) 
    {
        const token = {
            type: "DIVIDE-TOKEN",
            op: (a, b) => a / b,
            args: [expr_left.debug(),
                expr_right.debug()]
        }
        return token
    },

    ExpExpression_power(expr_left, _, expr_right) 
    {
        const token = {
            type: "POWER-TOKEN",
            op: (a, b) => Math.pow(a, b),
            args: [expr_left.debug(),
                expr_right.debug()]
        }
        return token
    },

    PriExpression_paren(_l, expr, _r)
    {
        return expr.debug()
    },

    PriExpression_pos(_, expr)
    {
        return expr.debug()
    },

    PriExpression_neg(_, expr)
    {
        return {
            type: "NEG-TOKEN",
            op: (a, b) => a * b,
            args: [-1, expr.debug()]
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
                    args: [expr.debug()]
                }
                return token
            case "sin":
                token = {
                    type: "FUN-TOKEN",
                    op: (a) => Math.sin(a),
                    args: [expr.debug()]
                }
                return token
            case "atan":
                token = {
                    type: "FUN-TOKEN",
                    op: (a) => Math.sin(a),
                    args: [expr.debug()]
                }
                return token
            default:
                throw `Unknown function \"${fn}\"`
        }
    },

    Constant(_pi) 
    {
        return {
            type: "PI-CONSTANT",
            value: Math.PI
        }
    },

    number(_) 
    {
        return {
            type: "NUMBER",
            value: parseInt(this.sourceString)
        }
    },

    word(_)
    {
        return {
            type: "WORD",
            value: this.sourceString
        }
    }
}

export default debug_actions

