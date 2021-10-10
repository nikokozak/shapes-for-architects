// Generate points for THREE Line based on parse results
const SAMPLE_RATE = 20
const MATERIAL = { color: 0x000000 }

export default (function () {

    function makeLinesFromParse(parse_result, options = {})
    {
        const sample_rate = options.sample_rate || SAMPLE_RATE
        const material = new THREE.LineBasicMaterial( options.material || MATERIAL )

        const lines = makeCRomCurvesFromPoints(parse_result.points)

        return lines.map((line) => {
            const sample_points = line.getPoints(sample_rate)
            const geometry = new THREE.BufferGeometry().setFromPoints(sample_points)
            return new THREE.Line( geometry, material )
        })
    }

    function makeCRomCurvesFromPoints(points)
    {
        if (Array.isArray(points[0])) {
            return points.map(v => {
                return makeCRomCurvesFromPoints(v)
            }).flat()
        } else {
            return [ new THREE.CatmullRomCurve3(points) ]
        }
    }

    return {
        makeLinesFromParse
    }

})()
