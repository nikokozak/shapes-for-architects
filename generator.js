// Makes an Iterator that will spit out <resolution> values from <lowBound> to <highBound>
export class Range {
    constructor(resolution, ...bound_pairs) {
        this.resolution = resolution + 1
        this.bounds = this.injectStepSizeInto(this.makeBoundObjectsFrom(bound_pairs))
    }

    [Symbol.iterator]() {
        let index = 0
        return {
            next: () => {
                const currentValues = this.bounds.map((bound) => this.getCurrentStep(bound, index))
                index++
                return index < this.resolution ? {
                    value: currentValues, 
                    done: false
                } : {
                    done: true
                }
            }
        }
    }

    injectStepSizeInto(bounds_array) {
        return bounds_array.map((bounds_object) => {
            bounds_object.stepSize = this.stepSize(bounds_object)
            return bounds_object
        })
    }

    stepSize(bounds_object) {
       return (bounds_object.high - bounds_object.low) / this.resolution
    }

    getCurrentStep(bound, index) {
        return bound.low + (bound.stepSize * index)
    }

    makeBoundObjectsFrom(boundPairs) {
        boundPairs = boundPairs.map(([low, high]) => this.makeBoundObject(low, high))
        console.log(boundPairs)
        return boundPairs
    }

    makeBoundObject(low, high) {
        return { low, high }
    }

}

export function makeCurvePoints(rangeObj, xFn, yFn, zFn = false) {
    let points = []
    for (const range of rangeObj) {
        points.push(zFn ? new THREE.Vector3(xFn(range), yFn(range), zFn(range))
                        : new THREE.Vector2(xFn(range), yFn(range), 0))
    }
    return points
}
