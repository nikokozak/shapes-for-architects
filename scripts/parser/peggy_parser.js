import { parse } from './peggy_grammar.js'

export default class Parser
{
    constructor ()
    {
        this.matched = false
        this.error = null
    }

    parse (str)
    {
        try {
            const result = parse(str)
            this.matched = true
            this.error = null
            return result
        } catch (e) {
            console.error(e)
            this.matched = false
            this.error = e
            return null
        }
    }
}
