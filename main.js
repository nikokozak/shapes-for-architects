import parser from './parser.js'
import { makeCurvePoints, Range } from './generator.js'
// --------------------  SCENE SETUP

const WIDTH = 300
const HEIGHT = 300

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, WIDTH / HEIGHT, 0.1, 1000)

const renderer = new THREE.WebGLRenderer({antialias: true})
renderer.setSize(WIDTH, HEIGHT)

document.body.appendChild(renderer.domElement)

// -------------------- POINTS

let to_match = "{ u, v | 0 <= u <= 80*PI, 0 <= v <= PI } \n x = sin(v) * cos(u) \n y = sin(u) \n z = v"
const matched = parser.parse(to_match)
console.log(matched)

const parse_points = matched.formula_values.x.map((x_val, i) => {
    return new THREE.Vector3(
        x_val,
        matched.formula_values.y[i],
        matched.formula_values.z[i]
    )
})

const parse_curve = new THREE.CatmullRomCurve3(parse_points)
const sample_points = parse_curve.getPoints(800)
const parse_geometry = new THREE.BufferGeometry().setFromPoints(sample_points)
const parse_material = new THREE.LineBasicMaterial( { color: 0xff0000 })
const parse_spline = new THREE.Line( parse_geometry, parse_material )

// --------------------  SCENE SETUP

// const cylinderGenerator = new Range(400, [0, 40*Math.PI], [0, Math.PI/3])
const cylinderGenerator = new Range(400, [0, 80*Math.PI], [0, Math.PI])

const curve = new THREE.CatmullRomCurve3(
    makeCurvePoints(cylinderGenerator, 
        ([u, v]) => Math.sin(v) * Math.cos(u),
        ([u, v]) => Math.sin(v) * Math.sin(u),
        ([_u, v]) => v))


const points = curve.getPoints(800)
const geometry = new THREE.BufferGeometry().setFromPoints(points)

const material = new THREE.LineBasicMaterial( { color: 0xff0000 })

const splineObject = new THREE.Line( geometry, material )

//scene.add(splineObject)
scene.add(parse_spline)
    camera.position.z = 3 
    camera.position.x = 0
    camera.position.y = -2 
    camera.lookAt(new THREE.Vector3(0, 0, 0))

//   camera.position.z = 3 
//   camera.position.x = 0

function run() {
    requestAnimationFrame(run)
    renderer.render(scene, camera)
}

run()

