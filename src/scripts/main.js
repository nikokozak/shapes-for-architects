import Parser from './parser/parser.js'
import Viewer from './viewer.js'
import Editor from './editor/editor.js'
import LineMaker from './line_maker.js'
import SETTINGS from './settings.js'
import './selektah.js'
import { populateExamplesDropdown } from '../examples/examples.js'

const default_text = 
`/* You can change settings like so: */ 
# color rgb(255, 0, 255)

/* Declare a range like so: */ 
{ u | 0 <= u <= 2*PI }

/* Declare x, y, and z formulas like so: */ 
x = cos(u)
y = sin(u)
`

const editor = new Editor()
const viewer = new Viewer()
const lmaker = new LineMaker()
const parser = new Parser()

populateExamplesDropdown(editor, parseAndRender, () => {
    document.getElementById(SETTINGS.DROPDOWN_PANE).style.display = "none"
})

editor.set_contents(default_text)
parseAndRender()

// -------------------- Listen to Changes

editor.on_change(parseAndRender)

function parseAndRender(_e = false) {
    try {
        //const match = parser.match(editor.get_contents())
        const parsed = parser.parse(editor.get_contents())
        //if (match.succeeded()){
        if (parser.matched) {
            //const parsed = parser.parse()
            const sampling = parsed.options.sampling
            const line_color = 
                testColor(parsed.options.color) ? parsed.options.color : SETTINGS.VIEWER_LINE_COLOR
            const background_color = 
                testColor(parsed.options.bgcolor) ? parsed.options.bgcolor : SETTINGS.VIEWER_BG_COLOR
            viewer.clear()
            viewer.set_bg(background_color)
            viewer.add(lmaker.make_lines(parsed.points, 
                { sample_rate: sampling, color: line_color }))
        }
    } catch (error) {
        console.error(error)
    }
}

function testColor(color)
{
    return /rgb\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*\)/.test(color)
}

// -------------------- DRAW

function run() {
    requestAnimationFrame(run)
    viewer.update()
    viewer.render()
}

run()

