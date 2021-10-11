import grammar from './grammar.js'
import eval_actions from './eval_actions.js'
import debug_actions from './debug_actions.js'

console.log(grammar)

const semantics = grammar.createSemantics()

// Bind our actions to internal methods
semantics.addOperation('parse()', eval_actions)
// This method carries an argument, used to pass down an index value
semantics.addOperation('parse_w_env(env)', eval_actions)
semantics.addOperation('debug()', debug_actions)


export default {
    grammar,
    semantics,
    match: str => grammar.match(str),
    debug: str => semantics(grammar.match(str)).debug(),
    parse: str => semantics(grammar.match(str)).parse()
}
