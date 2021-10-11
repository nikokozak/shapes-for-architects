import SETTINGS from "./settings.js"

export default class Viewer
{
    constructor (options = {}) 
    {
        this.dom_element = options.dom_element || SETTINGS.VIEWER_DOM_ELEMENT
        this.width = options.width || SETTINGS.VIEWER_WIDTH
        this.height = options.height || SETTINGS.VIEWER_HEIGHT
        this.bg_color = options.bg_color || SETTINGS.VIEWER_BG_COLOR
        this.camera_init_pos = options.camera_pos || SETTINGS.VIEWER_CAMERA_POSITION
        this.line_color = options.line_color || SETTINGS.VIEWER_LINE_COLOR

        this.scene = new THREE.Scene()
        this.scene.background = new THREE.Color( this.bg_color )
        this.camera = new THREE.PerspectiveCamera( 75, this.width / this.height, 0.1, 1000 )
        this.camera.position.set( ...this.camera_init_pos )
        this.camera.lookAt( new THREE.Vector3( 0, 0, 0 ) )
        this.renderer = new THREE.WebGLRenderer( { antialias: true } )
        this.renderer.setSize( this.width, this.height ) 
        this.controls = new THREE.OrbitControls( this.camera, this.renderer.domElement )

        const target = document.getElementById(this.dom_element)
        target.appendChild(this.renderer.domElement)
    }

    add (scene_element) // scene_element: Any | Array
    {
        // Recursively add nested arrays of elements
        if (Array.isArray(scene_element)) {
            for (const el of scene_element) {
                if (Array.isArray(el)) { this.add(el) }
                else { this.scene.add(el) }
            }
            return this.scene
        } else {
            this.scene.add(scene_element)
            return this.scene
        }
    }

    clear ()
    {
        while (this.scene.children.length) {
            this.scene.remove(scene.children[0])
        }
        return this.scene
    }

    update ()
    {
        this.controls.update()
    }

    render ()
    {
        this.renderer.render( this.scene, this.camera )
    }
}
