program 
    = _ opts:option* _ range:range _ formulas:formula+ _
    { 
        opts = helpers.parseOptions(opts)
        range = helpers.parseRange(range, opts)
        const sagara = helpers.combineArrays(range, (v1, v2) => { return { ...v1, ...v2 } })
        const points = helpers.genPointsWithFormulas(formulas, sagara)
        return { 
            options: opts,
            range,
            sagara,
            points,
            formulas,
            }
    }

option
    = _ '#' _ option:word _ value:(whole_number / color)? _
    { return { option, value } }

range 
    = _ '{' _ ids:rangeIdentifiers _ '|' _ bounds:bounds _ '}' _
    { return { ids, bounds } }

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
    = '^' { return helpers.safePow }
    / '**' { return helpers.safePow }

rule 
    = ('<=' / '≤') { return (a, b) => a <= b }
    / ('>=' / '≥') { return (a, b) => a >= b }
    / ('<' / '<')  { return (a, b) => a < b }
    / ('>' / '>')  { return (a, b) => a > b }

color 
    = 'rgb(' _ red:whole_number _ ',' _ green:whole_number _ ',' _ blue:whole_number ')'
    { return `rgb(${red}, ${green}, ${blue})` }

axis 
    = 'x' / 'y' / 'z'

rangeIdentifier
    = id:[a-z] { return id }

identifier 
    = id:[a-z] 
    { 
        return {
            op: helpers.makeIDFetcher(id),
            args: []
        }
    }

comment
    = '/*' (!'*/' .)* '*/'

constant 
    = ('PI' / 'π') { return Math.PI }

number 
    = head:([0-9]+)? '.' tail:[0-9]+ { return parseFloat((head || []).join('') + '.' + tail.join('')) }
    / num:[0-9]+ { return parseInt(num.join('')) }

whole_number
    = num:[0-9]+ { return parseInt(num.join('')) }

lower
    = lower:[a-z]+ { return lower.join("") }

word
    = word:[a-zA-Z]+ { return word.join("") }

_ = ([ \t\n] / comment)*
__ = [\n]?
