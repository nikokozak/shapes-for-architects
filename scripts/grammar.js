// Grammar + Semantics
const grammar = ohm.grammar(`
    Shape {
        Program = Options* Ranges Formula+
        Options = "#" word number?
        Ranges = "{" Identifiers "|" Bounds "}"
        Formula = Axis "=" Expression
        Expression = AddExpression
        AddExpression 
            = AddExpression "+" MultExpression -- plus
            | AddExpression "-" MultExpression -- minus
            | MultExpression 
        MultExpression
            = MultExpression "*" ExpExpression -- times
            | MultExpression "/" ExpExpression -- divide
            | ExpExpression
        ExpExpression
            = PriExpression "^" ExpExpression -- power
            | PriExpression
        PriExpression
            = "(" Expression ")" -- paren
            | "+" PriExpression -- pos
            | "-" PriExpression -- neg
            | FnExpression
            | Constant
            | number
            | identifier
        FnExpression
            = lower+ "(" Expression ")"
        Constant = "PI"
        Bounds = NonemptyListOf<Bound, ",">
        Bound = Expression Rule identifier Rule Expression 
        Rule = "<=" | ">=" | "<" | ">"
        Identifiers = NonemptyListOf<identifier, ",">
        Axis = "x" | "y" | "z" 
        word = lower+
        identifier = lower
        number = digit+
}`)
export default grammar