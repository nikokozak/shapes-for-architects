import parser from './parser.js'
import line_maker from './line_maker.js'

// -------------------- EDITOR

const editor = ace.edit("editor")
editor.setOptions({
    fontFamily: "monospace",
    fontSize: "18px"
})
editor.renderer.setPadding(20)

// --------------------  SCENE SETUP

const WIDTH = window.innerWidth * 0.5
const HEIGHT = 500

const scene = new THREE.Scene()
scene.background = new THREE.Color( 0xe3e3e3 )
const camera = new THREE.PerspectiveCamera(75, WIDTH / HEIGHT, 0.1, 1000)

const renderer = new THREE.WebGLRenderer({antialias: true})
const controls = new THREE.OrbitControls(camera, renderer.domElement)
renderer.setSize(WIDTH, HEIGHT)

const target = document.getElementById("three")
target.appendChild(renderer.domElement)


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

const matched = parser.parse(to_match2)
const sample_rate = matched.options.sampling || 20
const line_color = 0x000000
console.log(matched)

const lines = line_maker.makeLinesFromParse(matched, {sample_rate,
material: line_color})

for (const line of lines) {
    scene.add(line)
}


// -------------------- Listen to Changes

editor.session.on('change', (_e) => {
    try {
        const match = parser.match(editor.session.getValue())
        if (match.succeeded()){
            const parsed = parser.semantics(match).parse()
            const sampling = parsed.options.sampling || 20
            const lines = line_maker.makeLinesFromParse(parsed, { sample_rate: sampling,
            material: line_color})
            while (scene.children.length) { scene.remove(scene.children[0]) }
            for (const line of lines) {
                scene.add(line)
            }
        }
    } catch (error) {
        console.log(error)
    }
})

// -------------------- DRAW


camera.position.set(0, -3, 3)
camera.lookAt(new THREE.Vector3(0, 0, 0))

function run() {
    requestAnimationFrame(run)
    controls.update()
    renderer.render(scene, camera)
}

run()

