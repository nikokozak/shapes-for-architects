import grammar from './grammar.js'
import eval_actions from './eval_actions.js'
import debug_actions from './debug_actions.js'
import { parse } from './peggy_grammar.js'

console.log(parse(`# color rgb(255, 0, 255)
{ u, v | 0 <= u <= PI, 0 <= v <= PI }
x = cos(v)`))

export default class Parser
{
    constructor () 
    {
        this.grammar = grammar
        this.actions = {
            eval: eval_actions,
            debug: debug_actions
        }
        this.matcher = grammar.matcher()

        this.semantics = grammar.createSemantics()
        this.semantics.addOperation('parse()', this.actions.eval)
        this.semantics.addOperation('parse_w_env(env)', this.actions.eval)
        this.semantics.addOperation('debug()', this.actions.debug)

        this.match_cache = {}
    }

    match (str)
    {
        this.matcher.setInput(str)
        this.match_cache = this.matcher.match()
        return this.match_cache
    }

    match_incremental (start_idx, end_idx, str)
    {
        this.matcher.replaceInputRange(start_idx, end_idx, str)
        this.match_cache = this.matcher.match()
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

    parse_incremental (start_idx, end_idx, str = null)
    {
        const match = str ? this.match_incremental(start_idx, end_idx, str) : this.match_cache
        return this.semantics(match).parse()
    }
}
