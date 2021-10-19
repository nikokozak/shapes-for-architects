/* ======================= LINE MAKER.JS ======================
 * Quite self explanatory - the LineMaker class takes a series
 * of points as an array or nested array (if multiple lines are desired,
 * and creates corresponding CatmullRomCurve3's (in make_curves), which
 * then get sampled in order to create the BufferGeometry necessary for
 * a Line object to be returned in make_lines.
 */

import SETTINGS from './settings.js'
import { LineBasicMaterial, CatmullRomCurve3, BufferGeometry, Line } from 'three'

export default class LineMaker
{
    constructor(options = {})
    {
        this.sample_rate = options.sample_rate || SETTINGS.SAMPLE_RATE
        this.line_color = options.color || SETTINGS.VIEWER_LINE_COLOR
        this.line_material = new LineBasicMaterial( { color: options.color || SETTINGS.VIEWER_LINE_COLOR } )

        this.curves = []
        this.lines = []
    }

    make_curves(points)
    {
        if (Array.isArray(points[0])) {
            return points.map( p => this.make_curves(p) ).flat()
        } else {
            return [ new CatmullRomCurve3(points) ]
        }
    }

    make_lines(points, options = {})
    {
        let sample_rate = options.sample_rate || this.sample_rate
        this.line_color = options.color || SETTINGS.VIEWER_LINE_COLOR
        this.line_material = new LineBasicMaterial( { color: this.line_color } )

       if (sample_rate < 2 || !sample_rate) { sample_rate = this.sample_rate }
       return this.make_curves(points).map( curve => {
           const sample_points = curve.getPoints(sample_rate)
           const geometry = new BufferGeometry().setFromPoints(sample_points)
           return new Line( geometry, this.line_material )
       })
    }
}
