// ----------------- ACTIONS ------------------------ //

const RESOLUTION = 20 // Default resolution for ranges

const actions = {
    // These actions define how the parse tree emitted by the grammar
    // is further processed. Each function matches a grammar rule
    // and receives as many arguments.

    Program(options, ranges, formulas)
    {
        options = parseOptions(options)
        ranges = parseRanges(ranges, options)
        // Nested arrays of values from our ranges:
        const sagara = combineRangeValues(ranges) 
        // ThreeJS Point results from formula evaluation:
        const points = genPointsWithFormulas(formulas, sagara)

        return { options, ranges, sagara, points }
    },

    Options(_, option, number)
    {
        return { 
            option: option.parse(),
            value: number.child(0)?.parse()
        }
    },

    Formula(axis, _, exp) 
    {
        return { [axis.sourceString]: exp.parse_w_env(this.args.env) }
    },

    Ranges(_a, identifiers, _b, bounds, _c) 
    {
        identifiers = identifiers.parse()
        bounds = bounds.parse()

        // Ensures variables in { u, v | ... }
        // match variables in declared bounds.
        ensureIdentifierParity(identifiers, bounds)

        const resolution = this.args.env?.resolution || RESOLUTION

        // We return an array instead of an object because we need
        // a guarantee that order is maintained according to the declaration.
        return bounds.map(b => generateNamedRangeValues(b, resolution))
    },

    Identifiers(list) 
    {
        return list.asIteration().children.map(c => c.parse())
    },

    identifier(val) 
    {
        if (this.args.env) {
           return this.args.env[val.sourceString]
        } else {
            return val.sourceString
        }
    },

    Bounds(list) 
    {
        return list.asIteration().children.map(c => c.parse())
    },

    Bound(lower, ruleLeft, identifier, ruleRight, upper) 
    {
        return {
            low: lower.parse(),
            ruleLeft: ruleLeft.sourceString,
            identifier: identifier.parse(),
            ruleRight: ruleRight.sourceString,
            high: upper.parse()
        }
    },

    AddExpression_plus(expl, _, expr) 
    {
        return expl.parse_w_env(this.args.env) + expr.parse_w_env(this.args.env)
    },

    AddExpression_minus(expl, _, expr) 
    {
        return expl.parse_w_env(this.args.env) - expr.parse_w_env(this.args.env)
    },

    MultExpression_times(expl, _, expr) 
    {
        return expl.parse_w_env(this.args.env) * expr.parse_w_env(this.args.env)
    },

    MultExpression_divide(expl, _, expr) 
    {
        return expl.parse_w_env(this.args.env) / expr.parse_w_env(this.args.env)
    },

    ExpExpression_power(expl, _, expr) 
    {
        return Math.pow(expl.parse_w_env(this.args.env), expr.parse_w_env(this.args.env))
    },

    PriExpression_paren(_l, expr, _r)
    {
        return expr.parse_w_env(this.args.env)
    },

    PriExpression_pos(_, expr)
    {
        return expr.parse_w_env(this.args.env)
    },

    PriExpression_neg(_, expr)
    {
        return -1 * expr.parse_w_env(this.args.env)
    },

    FnExpression(fn, _a, expr, _b) 
    {
        const fn_name = fn.sourceString
        switch (fn_name) {
            case "cos":
                return Math.cos(expr.parse_w_env(this.args.env))
            case "sin":
                return Math.sin(expr.parse_w_env(this.args.env))
            case "atan":
                return Math.atan(expr.parse_w_env(this.args.env))
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

export default actions

// ----------------- ACTION HELPERS ------------------------ //

function parseOptions(options)
{
    return options.children.reduce((result, curr) => {
        const option_token = curr.parse()
        result[option_token.option] = option_token.value || true
        return result
    }, {})
}

function parseRanges(ranges, options)
{
    return ranges.parse_w_env(options)
}

function combineRangeValues(parsed_ranges)
{
    return combineArrays(parsed_ranges, (v1, v2) => { return { ...v1, ...v2 } })
}

function genPointsWithFormulas(formulas, sagara)
{
    function applyFormulasTo(range_values)
    {
        return range_values.map(range_value => {
            // Recurse over nested arrays
            if (Array.isArray(range_value)) { return applyFormulasTo(range_value) }

            // { x: ..., y: ..., z: ... }
            let formula_results = 
                formulas
                .children
                .map(f => f.parse_w_env(range_value))
                .reduce((result, curr) => { return { ...result, ...curr } }, {})

            return new THREE.Vector3 (
                formula_results.x,
                formula_results.y,
                formula_results.z || 0
            )
        })
    }

    return applyFormulasTo(sagara)
}

function generateNamedRangeValues(bound, resolution)
{
    const step = (bound.high - bound.low) / resolution

    const result = Array(resolution + 1) // Otherwise we don't get to 2*PI
    
    for (let val = bound.low, i = 0; i <= resolution; val += step, i++)
    {
        result[i] = { [bound.identifier]: val }
    }

    return result
}


function combineArrays([car, ...[cadr, ...cddr]], combineFn)
{
    if (!cadr || cadr.length == 0) {
        return car
    }

    const combined = cadr.map(cadr_v => {
        return car.map(car_v => combineFn(car_v, cadr_v))
    })

    return combineArrays([combined, cddr], combineFn)
}

function ensureIdentifierParity(identifiers, bounds_array)
{
    const bounds_identifiers = 
        bounds_array.map(b => b.identifier)

    const b1 = identifiers.sort().join('')
    const b2 = bounds_identifiers.sort().join('')

    if (b1 !== b2) { throw "Identifiers and Bound Identifiers do not match!" }
}

