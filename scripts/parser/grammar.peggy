program 
    = _ opts:option* _ range:range _ formulas:formula+ _
    { 
    const sagara = helpers.combineArrays(range, (v1, v2) => { return { ...v1, ...v2 } })
    const points = helpers.genPointsWithFormulas(formulas, sagara)
    return { 
        options: helpers.parseOptions(opts), 
        range,
        sagara,
        points,
        formulas,
        }
    }

option
    = _ '#' _ option:word _ value:(number / color)? _
    { return { option, value } }

range 
    = _ '{' _ ids:rangeIdentifiers _ '|' _ bounds:bounds _ '}' _
    {
        helpers.ensureIdentifierParity(ids, bounds)
        const resolution = 20
        return bounds.map(b => helpers.generateNamedRangeValues(b, resolution))
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
    = axis:axis _ '=' _ expression:expression _
    { return { axis, expression } }

expression 
    = addExpression

addExpression 
    = start:multExpression _ rest:(op:addOp _ expr:addExpression)*
    { return { op: helpers.evalArithmeticExprs, args: [start, rest] } }
    / multExpression

multExpression
    = start:expExpression _ rest:(op:multOp _ expr:multExpression)*
    { return { op: helpers.evalArithmeticExprs, args: [start, rest] } }
    / expExpression

expExpression
    = start:priExpression _ rest:(op:powerOp _ expr:expExpression)* 
    { return { op: helpers.evalArithmeticExprs, args: [start, rest] } }
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

_ = ([ \t\n] / comment)*
__ = [\n]?
