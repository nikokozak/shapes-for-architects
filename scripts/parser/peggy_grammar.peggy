{
    function parseOptions(options)
    {
        return options.reduce((result, curr) => {
            const option_token = curr
            result[option_token.option] = option_token.value || true
            return result
        }, {})
    }

    function ensureIdentifierParity(identifiers, bounds_array)
    {
        const bounds_identifiers = 
            bounds_array.map(b => b.identifier)

        const b1 = identifiers.sort().join('')
        const b2 = bounds_identifiers.sort().join('')

        if (b1 !== b2) { throw "Identifiers and Bound Identifiers do not match!" }
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
                    .map(f => { return { [f.axis]: evalWithEnv(f.expression, range_value) } })
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
        const { ruleLeft, identifier, ruleRight } = bound
        const low = evalWithEnv(bound.low, {})
        const high = evalWithEnv(bound.high, {})
        const step = (high - low) / resolution
        const result = []
        const MAX = 100_000
        const MIN = -100_000

        // Check we don't have an infinite range
        if ((ruleLeft(low, MAX) && ruleRight(MAX, high)) || 
            (ruleLeft(low, MIN) && ruleRight(MIN, high))) { throw new InfiniteRangeException(identifier) }

        let curr_val = low

        // Adjust for <, > starts
        if (!ruleLeft(low, low)) { curr_val += step }

        while (ruleRight(curr_val, high)) {
            result.push({ [identifier]: curr_val })
            curr_val += step
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

    function isDelayedOp(entity) { return typeof entity == 'object' && entity.op != undefined }

    function evalWithEnv(expr, env)
    {
        if (expr.args && expr.op) {
            return expr.op.apply(env, expr.args.map(arg => evalWithEnv(arg, env))) 
        } else {
            return expr
        }
    }

    function evalArithmeticExprs(start, rest)
    {
        return rest.reduce((accum, curr) => {
            const operation = curr[0]
            const nextValue = curr[2]
            // "this" is bound because this expression is invoked with an environment
            return operation.apply(this, [accum, evalWithEnv(nextValue, this)])
        }, start)
    }

}

program 
    = opts:option* _ range:range _ formulas:formula+
    { 
    const sagara = combineArrays(range, (v1, v2) => { return { ...v1, ...v2 } })
    const points = genPointsWithFormulas(formulas, sagara)
    return { 
        options: parseOptions(opts), 
        range,
        sagara,
        points,
        formulas,
        }
    }

option
    = '#' _ option:word _ value:(number / color)? _ __
    { return { option, value } }

range 
    = '{' _ ids:rangeIdentifiers _ '|' _ bounds:bounds _ '}' _ __
    {
        ensureIdentifierParity(ids, bounds)
        const resolution = 20
        return bounds.map(b => generateNamedRangeValues(b, resolution))
        //return combineArrays(ranges, (v1, v2) => { return {...v1, ...v2} })
    }

rangeIdentifiers 
    = first:rangeIdentifier rest:(_ ',' _ @rangeIdentifier)*
    { return [first, ...rest] }

bounds 
    = first:bound rest:(_ ',' _ @bound)*
    { return [first, ...rest] }

bound 
    = low:expression _ ruleLeft:rule _ id:rangeIdentifier _ ruleRight:rule _ high:expression
    { return { low, ruleLeft, identifier: id, ruleRight, high } }

formula 
    = axis:axis _ '=' _ expression:expression
    { return { axis, expression } }

expression 
    = addExpression

addExpression 
    = start:multExpression _ rest:(op:addOp _ expr:addExpression)*
    { return { op: evalArithmeticExprs, args: [start, rest] } }
    / multExpression

multExpression
    = start:expExpression _ rest:(op:multOp _ expr:multExpression)*
    { return { op: evalArithmeticExprs, args: [start, rest] } }
    / expExpression

expExpression
    = start:priExpression _ rest:(op:powerOp _ expr:expExpression)* 
    { return { op: evalArithmeticExprs, args: [start, rest] } }
    / priExpression

priExpression
    = '(' _ expression:expression _ ')' { return expression }
    / '+' expression:priExpression { return expression }
    / '-' expression:priExpression { return { op: (e) => -1 * e, args: [expression] } }
    / fnExpression
    / constant
    / number
    / identifier

fnExpression
    = fn:word '(' _ expr:expression _ ')'
    {
        switch (fn) {
            case 'cos':
                return { op: Math.cos, args: [expr] }
            case 'sin':
                return { op: Math.sin, args: [expr] }
            case 'atan':
                return { op: Math.atan, args: [expr] }
            default:
                throw `Unknown function ${ fn }`
        }
    }

addOp 
    = '+' { return (a, b) => a + b }
    / '-' { return (a, b) => a - b }

multOp
    = '*' { return (a, b) => a * b }
    / '/' { return (a, b) => a / b }

powerOp
    = '^' { return (a, b) => Math.pow(a, b) }
    / '**' { return (a, b) => Math.pow(a, b) }

rule 
    = '<=' { return (a, b) => a <= b }
    / '>=' { return (a, b) => a >= b }
    / '<'  { return (a, b) => a < b }
    / '>'  { return (a, b) => a > b }

color 
    = 'rgb(' _ red:number _ ',' _ green:number _ ',' _ blue:number ')'
    { return `rgb(${red}, ${green}, ${blue})` }

axis 
    = 'x' / 'y' / 'z'

rangeIdentifier
    = id:[a-z] { return id }

identifier 
    = id:[a-z] 
    { 
        return {
            op: function () {
                const fetched = this[id]
                if (fetched == undefined) { throw `Undefined variable ${ id }` }
                console.log(`id: ${ id }, fetched: ${ fetched }`)
                return fetched
            },
            args: []
        }
    }

comment
    = '/*' (!'*/' .)* '*/'

constant 
    = 'PI' { return Math.PI }

number 
    = num:[0-9]+ { return parseInt(num.join('')) }

lower
    = lower:[a-z]+ { return lower.join("") }

word
    = word:[a-zA-Z]+ { return word.join("") }

_ = [ \t]*
__ = [\n]?
