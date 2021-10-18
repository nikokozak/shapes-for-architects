import test from 'ava'
import actions from './actions.js'
import { Vector3 } from 'three'

const { 
    ensureIdentifierParity,
    parseOptions,
    genPointsWithFormulas,
    generateNamedRangeValues,
    combineArrays,
    evalWithEnv,
    evalArithmeticExprs 
} = actions

// ensureIdentifierParity

test('ensureIdentifierParity correctly detects parity', t => {
    const identifiers = ['u', 'v']
    const bounds_array = [{identifier: 'v'}, {identifier: 'u'}]

    t.notThrows(() => { ensureIdentifierParity(identifiers, bounds_array) })
})

test('ensureIdentifierParity throws if no parity', t => {
    const identifiers = ['u']
    const bounds_array = [{identifier: 'v'}, {identifier: 'u'}]

    t.throws(() => { ensureIdentifierParity(identifiers, bounds_array) })
})

test('ensureIdentifierParity throws if no parity 2', t => {
    const identifiers = ['u', 'v']
    const bounds_array = [{identifier: 'u'}]

    t.throws(() => { ensureIdentifierParity(identifiers, bounds_array) })
})

// parseOptions

test('parseOptions returns an object with options', t => {
    const options = [{option: "a", value: undefined}, {option: "b", value: 2}]
    
    t.like(parseOptions(options), { a: true, b: 2 })
})

test('parseOptions returns an empty object if no options', t => {
    const options = []

    t.deepEqual(parseOptions(options), {})
})

test('generateNamedRangeValues generates an array of named values', t => {
    const bound = { 
        low: 0, 
        ruleLeft: (a, b) => a <= b, 
        identifier: 'u',
        ruleRight: (a, b) => a <= b,
        high: 20
    }
    const resolution = 20

    const result = generateNamedRangeValues(bound, resolution)

    t.deepEqual(result[0], { u: 0 })
    t.deepEqual(result[result.length - 1], {u: 20})
    t.is(result.length, resolution + 1) // The plus 1 is necessary to complete the "loop"
})

test('generateNamedRangeValues throws on infinite positive ranges', t => {
    const bound = { 
        low: 0, 
        ruleLeft: (a, b) => a <= b, 
        identifier: 'u',
        ruleRight: (a, b) => a >= b,
        high: 20
    }
    const resolution = 20

    t.throws(() => { generateNamedRangeValues(bound, resolution) })
})

test('generateNamedRangeValues throws on infinite negative ranges', t => {
    const bound = { 
        low: 10, 
        ruleLeft: (a, b) => a >= b, 
        identifier: 'u',
        ruleRight: (a, b) => a <= b,
        high: 0 
    }
    const resolution = 20

    t.throws(() => { generateNamedRangeValues(bound, resolution) })
})

test('generateNamedRangeValues throws on 0-0 ranges', t => {
    const bound = { 
        low: 0, 
        ruleLeft: (a, b) => a <= b, 
        identifier: 'u',
        ruleRight: (a, b) => a <= b,
        high: 0 
    }
    const resolution = 20

    t.throws(() => { generateNamedRangeValues(bound, resolution) })
})

test('generateNamedRangeValues throws on invalid resolutions', t => {
    const bound = { 
        low: 0, 
        ruleLeft: (a, b) => a <= b, 
        identifier: 'u',
        ruleRight: (a, b) => a <= b,
        high: 10 
    }

    t.throws(() => { generateNamedRangeValues(bound, 0) })
    t.throws(() => { generateNamedRangeValues(bound, -10) })
})

test('combineArrays correctly permutes arrays', t => {
    const arr1 = ["a", "b"]
    const arr2 = [1, 2]

    const mix1 = combineArrays([arr1], (a, b) => [a, b])
    const mix2 = combineArrays([arr1, arr2], (a, b) => [a, b])

    t.deepEqual(mix1, arr1)
    t.deepEqual(mix2, [[["a", 1], ["b", 1]], [["a", 2], ["b", 2]]])
})

test('evalWithEnv evaluates tokens with environment object', t => {
    const expr_bare = { op: function() { return this }, args: [] }
    const expr_calc = { op: function(a) { return a + this}, args: [1] }

    t.is(evalWithEnv(expr_bare, 'a'), 'a')
    t.is(evalWithEnv(expr_calc, 1), 2)
})

test('evalWithEnv evaluates nested tokens with environment object', t => {
    const expr_nested = { op: function(a) { return a }, args: [{ op: function() { return this }, args: []}] }

    t.is(evalWithEnv(expr_nested, 'a'), 'a')
})

test('evalArithmeticExprs correctly evaluates arith expressions', t => {
    // 1 + 1 + 2
    const exprs = [[(a, b) => a + b, , {op: (a, b) => a + b, args: [1, 2]}]]

    t.is(evalArithmeticExprs(1, exprs), 4)
})

test('evalArithmeticExprs correctly evaluates order of ops in expressions', t => {
    // 1 + 1 - 2
    const exprs = [[(a, b) => a + b, , {op: (a, b) => a - b, args: [1, 2]}]]

    t.is(evalArithmeticExprs(1, exprs), 0)
})

test('getPointsWithFormulas returns an array of Vector3 points', t => {
    const sagara = [{u: 0}, {u: 1}, {u: 2}]
    const functions = [{axis: 'x', 
        expression: { op: Math.sin, 
            args: [ { op: () => this['u'], args: [] } ] 
        }}]

    const result = genPointsWithFormulas(functions, sagara)

    t.true(result[0] instanceof Vector3)
    t.is(result.length, 3)
})

test('getPointsWithFormulas returns a nested array of Vector3 points', t => {
    const sagara = [[{u: 0, v: 0}, {u: 1, v: 0}], [{u: 0, v: 1}, {u: 1, v: 1}]]
    const functions = [{axis: 'x', 
        expression: { op: Math.sin, 
            args: [ { op: () => this['u'], args: [] } ] 
        }}]

    const result = genPointsWithFormulas(functions, sagara)

    t.true(result[0][0] instanceof Vector3)
    t.is(result.length, 2)
    t.is(result[0].length, 2)
})

