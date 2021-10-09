// Generate points for THREE Line based on parse results

export default (function () {

    const defaults = {
        sample_rate: 20,
        material: new THREE.LineBasicMaterial( { color: 0x000000 } )
    }

    function defaultOr(option, options_object) {
        return options_object[option] ? options_object[option] : defaults[option]
    }

    function makeLinesFromParse(parse_result, options = {})
    {
        const sample_rate = defaultOr('sample_rate', options)
        const material = defaultOr('material', options)
        const lines = makeCRomCurvesFromParse(parse_result)

        return lines.map((line) => {
            const sample_points = line.getPoints(sample_rate)
            const geometry = new THREE.BufferGeometry().setFromPoints(sample_points)
            return new THREE.Line( geometry, material )
        })
    }

    function makeCRomCurvesFromParse(parse_result)
    {
        const { options, test } = parse_result

       // switch (option[0]) {
       //     case "continuous":
       //         return [ makeContinuousLine(values) ]
       //     default:
       //         return makePermutedLines(values)
       // }
        
        return makePermutedLines(test)
    }

    function makeContinuousLine(axis_values)
    {
        const has_z_values = axis_values.z ? true : false

        const points = axis_values.x.map((x_val, i) => {
            return new THREE.Vector3(
                x_val,
                axis_values.y[i],
                has_z_values ? axis_values.z[i] : 0
            )
        })


        return new THREE.CatmullRomCurve3(points)
    }

    function makePermutedLines(axis_values)
    {
        if (Array.isArray(axis_values[0])) {
            return axis_values.map(v => {
                return makePermutedLines(v)
            }).flat()
        } else {
            return [ new THREE.CatmullRomCurve3(axis_values) ]
        }
    }

    return {
        makeLinesFromParse
    }

})()
