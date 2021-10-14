import SETTINGS from "./settings.js"

export default class Viewer
{
    constructor (options = {}) 
    {
        this.dom_element = options.dom_element || SETTINGS.VIEWER_DOM_ELEMENT
        this.width = options.width || SETTINGS.VIEWER_WIDTH
        this.height = options.height || SETTINGS.VIEWER_HEIGHT
        this.line_color = options.line_color || SETTINGS.VIEWER_LINE_COLOR
        this.bg_color = options.bg_color || SETTINGS.VIEWER_BG_COLOR
        this.camera_init_pos = options.camera_pos || SETTINGS.VIEWER_CAMERA_POSITION
        this.debug = options.debug || false

        this.scene = new THREE.Scene()
        this.scene.background = new THREE.Color( this.bg_color )
        this.camera = new THREE.PerspectiveCamera( 75, this.width / this.height, 0.1, 1000 )
        this.camera.position.set( ...this.camera_init_pos )
        //this.camera.lookAt( new THREE.Vector3( 0, 0, 0 ) )
        this.renderer = new THREE.WebGLRenderer( { antialias: true } )
        this.renderer.setSize( this.width, this.height ) 
        this.controls = new THREE.OrbitControls( this.camera, this.renderer.domElement )
        this.controls.saveState();

        this.center_button = document.getElementById("viewer-center-button")
        this.center_button.addEventListener('click', (_e) => { this.center_cam() })

        const target = document.getElementById(this.dom_element)
        target.appendChild(this.renderer.domElement)
    }

    add (scene_element) // scene_element: Any | Array
    {
        this.__debugPrint(`In Viewer.instance.add(): starting to add elements to scene`)
        // Recursively add nested arrays of elements
        if (Array.isArray(scene_element)) {
            this.__debugPrint(`In Viewer.instance.add(): array detected, beginning add loop`)
            for (const el of scene_element) {
                if (Array.isArray(el)) { 
                    this.add(el) 
                    this.__debugPrint(`In Viewer.instance.add(): recursively called add() for ${ el }`)
                }
                else {
                    this.scene.add(el) 
                    this.__debugPrint(`In Viewer.instance.add(): added ${ el } to scene`)
                }
            }
            this.__debugPrint(`In Viewer.instance.add(): finished adding array of elements`)
            return this.scene
        } else {
            this.scene.add(scene_element)
            this.__debugPrint(`In Viewer.instance.add(): added ${ scene_element } to scene`)
            return this.scene
        }
    }

    clear ()
    {
        while (this.scene.children.length) {
            this.__debugPrint(`In Viewer.instance.clear(): removing ${ this.scene.children[0] } from scene`)
            this.scene.remove(this.scene.children[0])
        }
        this.__debugPrint(`In Viewer.instance.clear(): finished removing children from scene`)
        return this.scene
    }

    update ()
    {
        this.__debugPrint(`In Viewer.instance.update(): started updating controls`)
        this.controls.update()
        this.__debugPrint(`In Viewer.instance.update(): finished updating controls`)
    }

    render ()
    {
        this.__debugPrint(`In Viewer.instance.render(): started rendering scene`)
        this.renderer.render( this.scene, this.camera )
        this.__debugPrint(`In Viewer.instance.render(): finished rendering scene`)
    }

    set_bg(color)
    {
        this.bg_color = color
        this.scene.background = new THREE.Color( this.bg_color )
        return this.scene
    }

    center_cam()
    {
        this.controls.reset()
    }

    __debugPrint (message)
    {
        if (this.debug) { console.warn(message) }
    }
}
