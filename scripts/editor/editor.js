import SETTINGS from '../settings.js'
import { CodeJar } from '../../lib/codejar.js'
import p from './highlighter.js'

export default class Editor 
{
    constructor (options = {})
    {
        this.dom_element = options.dom_element || SETTINGS.EDITOR_DOM_ELEMENT
        this.font_family = options.font_family || SETTINGS.EDITOR_FONT_FAMILY
        this.font_size = options.font_size || SETTINGS.EDITOR_FONT_SIZE
        this.padding = options.padding || SETTINGS.EDITOR_PADDING

        const entry = document.getElementById(this.dom_element)

        this.editor = CodeJar(entry, p.highlightElement)
    }

    on_change (callback)
    {
        this.editor.onUpdate(callback)
    }

    get_contents ()
    {
        return this.editor.toString()
    }

    set_contents (string)
    {
        return this.editor.updateCode(string)
    }
}
