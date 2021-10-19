/* ===================== PARSER ========================
 * The Parser class - really all this does is wrap our 
 * "parse" functionality exported by the peggy grammar
 * in a try,catch block, as well as define some convenience
 * variables to track the state of the parse attempt.
 */

import { parse } from './grammar.js'
import SETTINGS from '../settings.js'

export default class Parser
{
    constructor ()
    {
        this.matched = false
        this.error = null
        this.editorIndicator = document.querySelector("#status-indicator")
    }

    parse (str)
    {
        try {
            const result = parse(str)
            this.matched = true
            this.__set_indicator(true)
            this.error = null
            return result
        } catch (e) {
            console.error(e)
            this.matched = false
            this.__set_indicator(false)
            this.error = e
            return null
        }
    }

    __set_indicator (bool)
    {
        const color = bool ? SETTINGS.EDITOR_CORRECT_INDICATOR_COLOR : SETTINGS.EDITOR_INCORRECT_INDICATOR_COLOR
        this.editorIndicator.style.backgroundColor = color
    }
}
