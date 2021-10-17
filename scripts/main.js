import Parser from './parser/parser.js'
import Viewer from './viewer.js'
import Editor from './editor/editor.js'
import LineMaker from './line_maker.js'
import SETTINGS from './settings.js'
import './selektah.js'
import { populateExamplesDropdown } from '../examples/examples.js'

// -------------------- POINTS

let to_match = `

{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = sin(sin(sin(sin(v) * cos(u))))
y = sin(sin(sin(sin(v) * sin(u))))
z = sin(sin(sin(cos(v))))
`

let four_slopes = `
{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = sin(v) * cos(u)
y = sin(v) * sin(4 * u)
z = cos(v)
`

let kein = `
# resolution 70
# sampling 100
{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = (cos(4*u) / 2) + (sin(v) * cos(u))
y = (sin(4*u) / 2) + (sin(v) * sin(u))
z = cos(v)
`

let shell = `
# resolution 70
# sampling 200
{ u, v | 0 <= u <= PI*8, 0 <= v <= PI }

x = u * ( sin(v) * cos(u))
y = u * (sin(v) * sin(u))
z = 8*cos(v)
`

let to_match2 = 
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

editor.set_contents(to_match2)
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

