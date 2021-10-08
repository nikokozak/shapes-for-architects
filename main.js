import parser from './parser.js'

// --------------------  SCENE SETUP


const WIDTH = 300
const HEIGHT = 300

const scene = new THREE.Scene()
scene.background = new THREE.Color( 0xffffff )
const camera = new THREE.PerspectiveCamera(75, WIDTH / HEIGHT, 0.1, 1000)

const renderer = new THREE.WebGLRenderer({antialias: true})
const controls = new THREE.OrbitControls(camera, renderer.domElement)
renderer.setSize(WIDTH, HEIGHT)

document.body.appendChild(renderer.domElement)


// -------------------- POINTS


let to_match = `
# flat world
{ u, v | 0 <= u <= PI^5, 0 <= v <= PI }

x = sin(sin(sin(sin(v) * cos(u))))
y = sin(sin(sin(sin(v) * sin(u))))
z = sin(sin(sin(cos(v))))
`

const matched = parser.parse(to_match)
console.log(matched)

const parse_points = matched.formula_values.x.map((x_val, i) => {
    return new THREE.Vector3(
        x_val,
        matched.formula_values.y[i],
        matched.formula_values.z ? matched.formula_values.z[i] : 0
    )
})

const parse_curve = new THREE.CatmullRomCurve3(parse_points)
const sample_points = parse_curve.getPoints(1000)
const parse_geometry = new THREE.BufferGeometry().setFromPoints(sample_points)
const parse_material = new THREE.LineBasicMaterial( { color: 0x000000 })
const parse_spline = new THREE.Line( parse_geometry, parse_material )
scene.add(parse_spline)


// --------------------  Manual Curve Setup


//   Manual generation method
//
//   const cylinderGenerator = new Range(400, [0, 80*Math.PI], [0, Math.PI])
//   const curve = new THREE.CatmullRomCurve3(
//       makeCurvePoints(cylinderGenerator, 
//           ([u, v]) => Math.sin(v) * Math.cos(u),
//           ([u, v]) => Math.sin(v) * Math.sin(u),
//           ([_u, v]) => v))
//   const points = curve.getPoints(800)
//   const geometry = new THREE.BufferGeometry().setFromPoints(points)
//   const material = new THREE.LineBasicMaterial( { color: 0x000000 })
//   const splineObject = new THREE.Line( geometry, material )
//   scene.add(splineObject)


// -------------------- DRAW


camera.position.set(0, -3, 3)
camera.lookAt(new THREE.Vector3(0, 0, 0))

function run() {
    requestAnimationFrame(run)
    controls.update()
    renderer.render(scene, camera)
}

run()

