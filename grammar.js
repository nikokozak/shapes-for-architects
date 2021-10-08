import { actions } from './actions.js'

export const grammar = ohm.grammar(`
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

export const semantics = grammar.createSemantics()

// Bind our actions to internal methods
semantics.addOperation('parse()', actions)
// This method carries an argument, used to pass down an index value
semantics.addOperation('parse_w_idx(curr_idx)', actions)

