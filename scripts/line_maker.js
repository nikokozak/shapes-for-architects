import SETTINGS from './settings.js'

export default class LineMaker
{
    constructor(options = {})
    {
        this.sample_rate = options.sample_rate || SETTINGS.SAMPLE_RATE
        this.line_color = options.color || SETTINGS.VIEWER_LINE_COLOR
        this.line_material = new THREE.LineBasicMaterial( { color: options.color || SETTINGS.VIEWER_LINE_COLOR } )

        this.curves = []
        this.lines = []
    }

    make_curves(points)
    {
        if (Array.isArray(points[0])) {
            return points.map( p => this.make_curves(p) ).flat()
        } else {
            return [ new THREE.CatmullRomCurve3(points) ]
        }
    }

    make_lines(points, sample_rate = this.sample_rate)
    {
        if (sample_rate < 2 || !sample_rate) { sample_rate = this.sample_rate }
        return this.make_curves(points).map( curve => {
            const sample_points = curve.getPoints(sample_rate)
            const geometry = new THREE.BufferGeometry().setFromPoints(sample_points)
            return new THREE.Line( geometry, this.line_material )
        })
    }
}
