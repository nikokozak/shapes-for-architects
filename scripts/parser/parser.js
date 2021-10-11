import grammar from './grammar.js'
import eval_actions from './eval_actions.js'
import debug_actions from './debug_actions.js'

export default class Parser
{
    constructor () 
    {
        this.grammar = grammar
        this.actions = {
            eval: eval_actions,
            debug: debug_actions
        }

        this.semantics = grammar.createSemantics()
        this.semantics.addOperation('parse()', this.actions.eval)
        this.semantics.addOperation('parse_w_env(env)', this.actions.eval)
        this.semantics.addOperation('debug()', this.actions.debug)

        this.match_cache = {}
    }

    match (str)
    {
        this.match_cache = this.grammar.match(str)
        return this.match_cache
    }

    debug (str = null)
    {
        const match = str ? this.match(str) : this.match_cache
        return this.semantics(match).debug()
    }

    parse (str = null)
    {
        const match = str ? this.match(str) : this.match_cache
        return this.semantics(match).parse()
    }
}
