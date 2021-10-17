
{
    function parseOptions(options)
    {
        return options.reduce((result, curr) => {
            const option_token = curr
            result[option_token.option] = option_token.value || true
            return result
        }, {})
    }

    function evalExpressions(start, rest)
    {
        return rest.reduce((accum, curr) => {
            const operation = curr.op
            const nextValue = curr.value
            return operation.apply(null, [accum, nextValue])
        }, start)
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
        const { low, ruleLeft, identifier, ruleRight, high } = bound
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

    const ENV = {}
}

program 
    = opts:option* _ range:range _ formulas:formula+
    { return { 
        options: parseOptions(opts), 
        range,
        formulas: formulas.reduce((result, curr) => { return {...result, ...curr} }, {}),
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
        return combineArrays( bounds.map(b => generateNamedRangeValues(b, resolution)), (v1, v2) => { return { ...v1, ...v2 } } )
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
    { return { [axis]: expression } }

expression 
    = addExpression

addExpression 
    = start:multExpression _ rest:nextAddExpression+
    { return { op: evalExpressions, args: [start, rest] } }
    / multExpression

nextAddExpression
    = op:addOp _ value:addExpression { return { op, value } }

multExpression
    = start:expExpression _ rest:nextMultExpression+
    { return { op: evalExpressions, args: [start, rest] } }
    / expExpression

nextMultExpression
    = op:multOp _ value:multExpression { return { op, value } }

expExpression
    = start:priExpression _ rest:nextExpExpression+
    { return { op: evalExpressions, args: [start, rest] } }
    / priExpression

nextExpExpression
    = op:powerOp _ value:expExpression { return { op, value } }

priExpression
    = '(' _ expression:expression _ ')' { return expression }
    / '+' expression:priExpression { return expression }
    / '-' expression:priExpression { return { op: (e) => -1 * e, args: expression } }
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
        return () => {
            const fetched = this.env[id]
            if (fetched == undefined) { throw `Undefined variable ${ id }` }
            return fetched
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
