import parser from './parser.js'
import Viewer from './viewer.js'
import Editor from './editor.js'
import LineMaker from './line_maker.js'

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

let to_match2 = `
    # sampling 40
    # resolution 40
    { u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

    x = cos(u)
    y = sin(u)
`

const editor = new Editor()
const viewer = new Viewer()
const lmaker = new LineMaker()

const matched = parser.parse(to_match2)
const lines = lmaker.make_lines(matched.points)
viewer.add(lines)

// ==================== DEBUG

const debug = parser.debug(to_match2)
console.dir(debug, {depth: null, colors: true})

// -------------------- Listen to Changes

editor.on_change(_e => {
    try {
        const match = parser.match(editor.get_contents())
        if (match.succeeded()){
            const parsed = parser.semantics(match).parse()
            const sampling = parsed.options.sampling
            viewer.clear()
            viewer.add(lmaker.make_lines(parsed.points, sampling))
        }
    } catch (error) {
        console.error(error)
    }
})

// -------------------- DRAW

function run() {
    requestAnimationFrame(run)
    viewer.update()
    viewer.render()
}

run()

