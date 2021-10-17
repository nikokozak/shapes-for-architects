import SETTINGS from '../settings.js'
import { Vector3 } from 'three'
import { 
    RangeIdentifierParityError,
    InfiniteRangeError,
    InvalidResolutionError} from './errors.js'

export function ensureIdentifierParity(identifiers, bounds_array)
{
    const bounds_identifiers = 
        bounds_array.map(b => b.identifier)

    const b1 = identifiers.sort().join('')
    const b2 = bounds_identifiers.sort().join('')

    if (b1 !== b2) { throw new RangeIdentifierParityError(identifiers) }
}

export function parseOptions(options)
{
    return options.reduce((result, curr) => {
        const option_token = curr
        result[option_token.option] = option_token.value || true
        return result
    }, {})
}

export function parseRange(range, options)
{
    const { ids, bounds } = range
    ensureIdentifierParity(ids, bounds)
    const resolution = !isNaN(options.resolution) && (options.resolution > 2) ? options.resolution : SETTINGS.RESOLUTION
    return bounds.map(b => generateNamedRangeValues(b, resolution))
}

export function combineRangeValues(parsed_ranges)
{
    return combineArrays(parsed_ranges, (v1, v2) => { return { ...v1, ...v2 } })
}

export function genPointsWithFormulas(formulas, sagara)
{
    function applyFormulasTo(range_values)
    {
        return range_values.map(range_value => {
            // Recurse over nested arrays
            if (Array.isArray(range_value)) { return applyFormulasTo(range_value) }

            // { x: ..., y: ..., z: ... }
            let formula_results = 
                formulas
                .map(f => { return { [f.axis]: evalWithEnv(f.expression, range_value) } })
                .reduce((result, curr) => { return { ...result, ...curr } }, {})

            return new Vector3 (
                formula_results.x,
                formula_results.y,
                formula_results.z || 0
            )
        })
    }

    return applyFormulasTo(sagara)
}

export function generateNamedRangeValues(bound, resolution)
{
    // Check the resolution is correct
    if (resolution < 1) { throw new InvalidResolutionError(resolution) }

    const { ruleLeft, identifier, ruleRight } = bound
    const low = evalWithEnv(bound.low, {})
    const high = evalWithEnv(bound.high, {})
    const step = (high - low) / resolution
    const result = []
    const MAX = 100_000
    const MIN = -100_000

    // Check we don't have an infinite range
    if ((ruleLeft(low, MAX) && ruleRight(MAX, high)) || 
        (ruleLeft(low, MIN) && ruleRight(MIN, high)) ||
        (low == high)) { throw new InfiniteRangeError(identifier) }

    let curr_val = low

    // Adjust for <, > starts
    if (!ruleLeft(low, low)) { curr_val += step }

    while (ruleRight(curr_val, high)) {
        result.push({ [identifier]: curr_val })
        curr_val += step
    }
    return result
}

export function combineArrays([car, ...[cadr, ...cddr]], combineFn)
{
    if (!cadr || cadr.length == 0) { return car }

    const combined = cadr.map(cadr_v => {
        return car.map(car_v => combineFn(car_v, cadr_v))
    })

    return combineArrays([combined, cddr], combineFn)
}

export function evalWithEnv(expr, env)
{
    if (expr.args && expr.op) {
        return expr.op.apply(env, expr.args.map(arg => evalWithEnv(arg, env))) 
    } else {
        return expr
    }
}

export function evalArithmeticExprs(start, rest)
{
    return rest.reduce((accum, curr) => {
        const operation = curr[0]
        const nextValue = curr[2]
        // "this" is bound because this expression is invoked with an environment
        return operation.apply(this, [accum, evalWithEnv(nextValue, this)])
    }, start)
}

export default {
    ensureIdentifierParity,
    parseOptions,
    parseRange,
    combineRangeValues,
    combineArrays,
    genPointsWithFormulas,
    generateNamedRangeValues,
    evalArithmeticExprs,
    evalWithEnv,
}
