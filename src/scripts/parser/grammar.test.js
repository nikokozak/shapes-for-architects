import { parse } from './grammar.js'
import test from 'ava'

test('grammar parses options + ranges + functions', t => {
    const to_match = `
    # option
    # anotherOption 20

    { u | 0 <= u <= 3 }

    x = cos(u)
    `
    const to_match2 = `
    # anotherOption 20

    { u, v | 0 <= u <= 3, 10 >= v >= 1 }

    x = cos(u)
    y = sin(v)
    `
    const to_match3 = `

    { u, v | 0 <= u <= 3, 10 >= v >= 1 }

    x = cos(u)
    y = sin(v)
    `
    const to_match4 = `

    { u, v | 0 <= u <= 3,

    10 >= v >= 1 }

    x = cos(  u  )
    y = sin( v
    )
    `
    const to_match5 = `
    {u,v|0<=u<=3,10>=v>=1}x=cos(u)y=sin(v)
    `
    t.notThrows(() => { parse(to_match) })
    t.notThrows(() => { parse(to_match2) })
    t.notThrows(() => { parse(to_match3) })
    t.notThrows(() => { parse(to_match4) })
    t.notThrows(() => { parse(to_match5) })
})

test('grammar parses comments correctly', t => {
    const to_match = `
    /* Starts with a comment */
    # option /* A comment here */
    # anotherOption /* a comment as well */ 20
    /* A coment there */
    { /**/ u | 0 <= /* here! */ u <= 3 } /* and
    there as 
    well */

    x = cos(u /* how about in here? */)
    `
    t.notThrows(() => { parse(to_match) })
})

test('grammar fails when expected', t => {
    const to_match = `
    # noBody
    `
    const to_match2 = `
    { u | 0 <= u <= PI }
    `
    const to_match3 = `
    x = cos(u)
    `
    const to_match4 = `
    { u | 0 <= u <= PI }
    x = cos(v)
    `
    const to_match5 = `
    { u | 0 <= u <= PI }
    a = cos(u)
    `
    const to_match6 = `
    x = cos(u)
    { u | 0 <= u <= PI }
    `
    t.throws(() => { parse(to_match) })
    t.throws(() => { parse(to_match2) })
    t.throws(() => { parse(to_match3) })
    t.throws(() => { parse(to_match4) })
    t.throws(() => { parse(to_match5) })
    t.throws(() => { parse(to_match6) })
})
