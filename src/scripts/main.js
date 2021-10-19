import Parser from './parser/parser.js'
import Viewer from './viewer.js'
import Editor from './editor/editor.js'
import LineMaker from './line_maker.js'
import SETTINGS from './settings.js'
import { populateExamplesDropdown } from './examples/example_dropdown.js'

/* =================== SETUP =================== */

const editor = new Editor()
const viewer = new Viewer()
const lmaker = new LineMaker()
const parser = new Parser()

populateExamplesDropdown(editor, parseAndRender)

editor.set_contents(SETTINGS.DEFAULT_TEXT)
parseAndRender()

/* ================== EDITOR / RENDERER INTERACTION ================ */

editor.on_change(parseAndRender)

function parseAndRender(_e = false) {
    try {
        const parsed = parser.parse(editor.get_contents())
        if (parser.matched) {
            renderScene(parsed, viewer)
        }
    } catch (error) {
        console.error(error)
    }
}

function renderScene(parsed, viewer)
{
    const sampling = safeSampling(parsed.options.sampling)
    const line_color = 
        sanitizeColor(parsed.options.color, SETTINGS.VIEWER_LINE_COLOR)
    const background_color = 
        sanitizeColor(parsed.options.bgcolor, SETTINGS.VIEWER_BG_COLOR)
    viewer.clear()
    viewer.set_bg(background_color)
    viewer.add(lmaker.make_lines(parsed.points, 
        { sample_rate: sampling, color: line_color }))
}

function sanitizeColor(color, dfault)
{
    return /rgb\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*\)/.test(color) ? color : dfault
}

function safeSampling(rate)
{
    return (rate > SETTINGS.MAX_SAMPLING) || (rate < 1) ? SETTINGS.MAX_SAMPLING : rate
}

/* ================== DRAW CYCLE ===================== */

function run() {
    requestAnimationFrame(run)
    viewer.update()
    viewer.render()
}

run()

