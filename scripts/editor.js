import SETTINGS from './settings.js'

export default class Editor 
{
    constructor (options = {})
    {
        this.dom_element = options.dom_element || SETTINGS.EDITOR_DOM_ELEMENT
        this.font_family = options.font_family || SETTINGS.EDITOR_FONT_FAMILY
        this.font_size = options.font_size || SETTINGS.EDITOR_FONT_SIZE
        this.padding = options.padding || SETTINGS.EDITOR_PADDING

        this.editor = ace.edit( this.dom_element )
        this.editor.setOptions({
            fontFamily: this.font_family,
            fontSize: this.font_size,
        })
        this.editor.renderer.setPadding( this.padding )
    }

    on_change (callback)
    {
        this.editor.session.on('change', callback)
    }

    get_contents ()
    {
        this.editor.session.getValue()
    }
}
