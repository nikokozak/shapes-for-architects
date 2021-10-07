// --------------------  SCENE SETUP

const WIDTH = 300
const HEIGHT = 300

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, WIDTH / HEIGHT, 0.1, 1000)

const renderer = new THREE.WebGLRenderer({antialias: true})
renderer.setSize(WIDTH, HEIGHT)

document.body.appendChild(renderer.domElement)

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

scene.add(splineObject)
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

//console.log("It's working?")
let to_match = "{ u, x, z | 0 <= u <= 9, 0 <= x <= 20 } \n x = 2 + u"
console.log(shapeGrammar.match(to_match))
console.log(shapeGrammar.match(to_match).succeeded())
console.log(shapeSemantics(shapeGrammar.match(to_match)).parse())
