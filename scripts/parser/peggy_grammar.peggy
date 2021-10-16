//   program = option* _ range _ formula+
//   option = '#' _ [a-zA-Z]+ _ ([0-9]+ / color)?
//   range = '{' _ identifiers _ '|' _ bounds _ '}'
//   identifiers = first:identifier rest:(_ ',' _ @identifier)*
//   bounds = first:bound rest:(_ ',' _ @bound)*
//   bound = expression _ rule _ identifier _ rule _ expression
//   formula = axis _ '=' _ expression

{
    function evalExpressions(start, rest)
    {
        return rest.reduce((accum, curr) => {
            const operation = curr.op
            const nextValue = curr.value
            return operation.apply(null, [accum, nextValue])
        }, start)
    }
}

expression 
    = addExpression
addExpression 
    = start:multExpression _ rest:nextAddExpression+
    { return evalExpressions(start, rest) }
    / multExpression
nextAddExpression
    = op:addOp _ value:addExpression { return { op, value } }
multExpression
    = start:expExpression _ rest:nextMultExpression+
    { return evalExpressions(start, rest) }
    / expExpression
nextMultExpression
    = op:multOp _ value:multExpression { return { op, value } }
expExpression
    = start:priExpression _ rest:nextExpExpression+
    { return evalExpressions(start, rest) }
    / priExpression
nextExpExpression
    = op:powerOp _ value:expExpression { return { op, value } }
priExpression
    = '(' _ expression:expression _ ')' { return expression }
    / '+' expression:priExpression { return expression }
    / '-' expression:priExpression { return -1 * expression }
    / fnExpression
    / constant
    / number
    / identifier
fnExpression
    = [a-z]+ '(' _ expression _ ')'

addOp 
    = '+' { return (a, b) => a + b }
    / '-' { return (a, b) => a - b }

multOp
    = '*' { return (a, b) => a * b }
    / '/' { return (a, b) => a / b }

powerOp
    = '^' { return (a, b) => Math.pow(a, b) }
    / '**' { return (a, b) => Math.pow(a, b) }

//rule = '<=' / '>=' / '<' / '>'
//color = 'rgb(' _ [0-9]+ _ ',' _ [0-9]+ _ ',' _ [0-9]+ ')'
//axis = 'x' / 'y' / 'z'
identifier = id:[a-z] { return id }
//comment = '/*' (!'*/' .)* '*/'
constant 
    = 'PI' { return Math.PI }
number 
    = num:[0-9]+ { return parseInt(num) }

_ = [ \t]*
