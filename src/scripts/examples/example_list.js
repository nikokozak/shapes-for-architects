export default {
    "Shaping": [
        {
            name: 'TUTORIAL',
            code: `/* This is the editor status --> */

/* You can change settings like so: */ 

# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

/* Declare ranges like so: */ 

{ u, v | 0 <= u <= 2*PI, -1 <= v <= 2 }

/* Declare x, y, and z formulas like so: */ 

x = cos(u)
y = sin(u)
z = v 

/* The order of settings, then ranges, then formulas must be respected! */`
        },
        { 
            name: 'Circle',
            code: `# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u | 0 <= u <= 2*PI }
            
x = cos(u)
y = sin(u)`
        },
        {
            name: 'Short Cylinder',
            code: `# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI/3 }

x = cos(u)
y = sin(u)
z = v`
        },
        {
            name: 'Tall Cylinder',
            code: `# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = cos(u)
y = sin(u)
z = v`
        },
        {
            name: 'Twisting Line',
            code: `# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = cos(u)
y = sin(u)
z = u`
        },
        {
            name: 'Twisting Lines',
            code: `# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = v * cos(u)
y = v * sin(u)
z = u`
        },
        {
            name: 'Cone',
            code: `# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = v * cos(u)
y = v * sin(u)
z = v`
        },
        {
            name: 'Sphere',
            code: `# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = sin(v) * cos(u)
y = sin(v) * sin(u)
z = cos(v)`
        },
        {
            name: 'Pointy Sphere',
            code: `# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = sin(v) * cos(u)
y = sin(v) * sin(u)
z = v`
        },
    ],
    "Cutting": [
        {
            name: '3/4 Cylinder',
            code: `# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= 3*PI/2, 0 <= v <= PI }

x = cos(u)
y = sin(u)
z = v`
        },
        {
            name: '1/2 Cylinder',
            code: `# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= PI, 0 <= v <= PI }

x = cos(u)
y = sin(u)
z = v`
        },
        {
            name: 'Cylinder Segment',
            code: `# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= PI/2, 0 <= v <= PI }

x = cos(u)
y = sin(u)
z = v`
        },
        {
            name: '3/4 Sphere',
            code: `# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= 3*PI/2, 0 <= v <= PI }

x = sin(v) * cos(u)
y = sin(v) * sin(u)
z = cos(v)`
        },
        {
            name: '1/2 Sphere',
            code: `# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= PI, 0 <= v <= PI }

x = sin(v) * cos(u)
y = sin(v) * sin(u)
z = cos(v)`
        },
        {
            name: 'Sphere Segment',
            code: `# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= PI, 0 <= v <= PI }

x = sin(v) * cos(u)
y = sin(v) * sin(u)
z = cos(v)`
        },
    ],
    'Scaling': [
        {
            name: 'Squished Y Cylinder',
            code: `# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = cos(u)
y = sin(u)/2
z = v`
        },
        {
            name: 'Squished X Cylinder',
            code: `# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = cos(u)/2
y = sin(u)
z = v`
        },
        {
            name: 'Narrow Cylinder',
            code: `# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = cos(u)/2
y = sin(u)/2
z = v`
        },
        {
            name: 'Squished Y Sphere',
            code: `# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = sin(v) * cos(u)
y = (sin(v) * sin(u))/2
z = cos(v)`
        },
        {
            name: 'Narrow Sphere',
            code: `# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = (sin(v) * cos(u))/2
y = (sin(v) * sin(u))/2
z = cos(v)`
        },
    ],
    'Modulating': [
        {
            name: 'Sine Wave',
            code: `# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u | 0 <= u <= 2*PI }

x = u
y = sin(u)`
        },
        {
            name: 'Wave Circle',
            code: `# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u | 0 <= u <= 2*PI }

x = cos(u)*4
y = sin(4 * u)`
        },
        {
            name: 'Infinity Cylinder',
            code: `# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = cos(u)
y = sin(2*u)
z = v`
        },
        {
            name: 'Three Wave Cylinder',
            code: `# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = cos(u)
y = sin(3*u)
z = v`
        },
        {
            name: 'Four Wave Cylinder',
            code: `# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = cos(u)
y = sin(4*u)
z = v`
        },
        {
            name: 'Infinity Sphere',
            code: `# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = sin(v) * cos(u)
y = sin(v) * sin(2*u)
z = cos(v)`
        },
        {
            name: 'Three Wave Sphere',
            code: `# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = sin(v) * cos(u)
y = sin(v) * sin(3*u)
z = cos(v)`
        },
        {
            name: 'Four Wave Sphere',
            code: `# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = sin(v) * cos(u)
y = sin(v) * sin(4*u)
z = cos(v)`
        },
    ],
    'Ascending': [
        {
            name: 'Y Open Pipe',
            code: `# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = cos(u)
y = u + sin(u)
z = v`
        },
        {
            name: 'X Open Pipe',
            code: `# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = u + cos(u)
y = sin(u)
z = v`
        },
        {
            name: 'Ascending Open Pipe',
            code: `# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = u + cos(u)
y = u + sin(u)
z = v`
        },
        {
            name: 'Y Open Sphere',
            code: `# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = sin(v) * cos(u)
y = u + sin(v) * sin(u)
z = cos(v)`
        },
        {
            name: 'X Open Sphere',
            code: `# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = u + sin(v) * cos(u)
y = sin(v) * sin(u)
z = cos(v)`
        },
        {
            name: 'Ascending Sphere',
            code: `# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = u + sin(v) * cos(u)
y = u + sin(v) * sin(u)
z = cos(v)`
        },
    ],
    'Spiraling': [
        {
            name: 'Pre-Spiral Pipe',
            code: `# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = cos(u)
y = u * sin(u)
z = v`
        },
        {
            name: 'Uneven Spiral Pipe',
            code: `# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = u * cos(u)
y = sin(u)
z = v`
        },
        {
            name: 'Spiral Pipe',
            code: `# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = u * cos(u)
y = u * sin(u)
z = v`
        },
        {
            name: 'Pre-Spiral Sphere',
            code: `# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = sin(v) * cos(u)
y = u * sin(v) * sin(u)
z = cos(v)`
        },
        {
            name: 'Uneven Spiral Sphere',
            code: `# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = u * sin(v) * cos(u)
y = sin(v) * sin(u)
z = cos(v)`
        },
        {
            name: 'Spiral Sphere',
            code: `# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = u * sin(v) * cos(u)
y = u * sin(v) * sin(u)
z = cos(v)`
        },
    ],
    'Texturing': [
        {
            name: 'Single Notch Pipe',
            code: `# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = cos(2*u) / 2 + cos(u)
y = sin(2*u) / 2 + sin(u)
z = v`
        },
        {
            name: 'Double Notch Pipe',
            code: `# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = cos(3*u) / 3 + cos(u)
y = sin(3*u) / 3 + sin(u)
z = v`
        },
        {
            name: 'Clover Notch Pipe',
            code: `# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = cos(4*u) / 4 + cos(u)
y = sin(4*u) / 4 + sin(u)
z = v`
        },
        {
            name: 'Single Notch Sphere',
            code: `# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = cos(2*u) / 2 + sin(v) * cos(u)
y = sin(2*u) / 2 + sin(v) * sin(u)
z = cos(v)`
        },
        {
            name: 'Double Notch Sphere',
            code: `# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = cos(3*u) / 3 + sin(v) * cos(u)
y = sin(3*u) / 3 + sin(v) * sin(u)
z = cos(v)`
        },
        {
            name: 'Triple Notch Sphere',
            code: `# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = cos(4*u) / 4 + sin(v) * cos(u)
y = sin(4*u) / 4 + sin(v) * sin(u)
z = cos(v)`
        },
    ],
    'Bending':
    [
        {
            name: 'Simple Wave',
            code: `# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = u
y = sin(v) * sin(u)
`
        },
        {
            name: 'Complex Wave',
            code: `# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = cos(v) + u
y = sin(u)
`
        },
        {
            name: 'Uneven Wave',
            code: `# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = cos(v) + u
y = sin(v) + sin(u)
`
        },
        {
            name: 'Displaced Sphere',
            code: `# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = cos(u)
y = sin(v) + sin(u)
`
        },
        {
            name: 'Merged Circles',
            code: `# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = cos(v) + cos(u)
y = sin(u)
`
        },
        {
            name: 'Rainbow Circles',
            code: `# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = cos(v) + cos(u)
y = sin(v) + sin(u)
`
        },
        {
            name: 'Squiggly Pipe Y',
            code: `# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = cos(u)
y = sin(v) + sin(u)
z = v
`
        },
        {
            name: 'Squiggly Pipe X',
            code: `# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = cos(v) + cos(u)
y = sin(u)
z = v
`
        },
        {
            name: 'Squiggly Pipe',
            code: `# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = cos(v) + cos(u)
y = sin(v) + sin(u)
z = v
`
        },
        {
            name: 'Deformed Sphere Y',
            code: `# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = sin(v) + cos(u)
y = sin(v) + sin(v) * sin(u)
z = cos(v)
`
        },
        {
            name: 'Deformed Sphere X',
            code: `# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = cos(v) + sin(v) * cos(u)
y = sin(v) * sin(u)
z = cos(v)
`
        },
        {
            name: 'Deformed Sphere',
            code: `# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = cos(v) + sin(v) * cos(u)
y = sin(v) + sin(v) * sin(u)
z = cos(v)
`
        },
    ],
    'Pinching': [
        {
            name: 'Pipe Pinch Subtle',
            code: `# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = cos(u)^3
y = sin(u)^3
z = v
`
        },
        {
            name: 'Pipe Pinch Medium',
            code: `# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = cos(u)^5
y = sin(u)^5
z = v
`
        },
        {
            name: 'Pipe Pinch Extreme',
            code: `# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = cos(u)^7
y = sin(u)^7
z = v
`
        },
        {
            name: 'Sphere Pinch Subtle',
            code: `# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = sin(v)*cos(u)^3
y = sin(v)*sin(u)^3
z = cos(v)
`
        },
        {
            name: 'Sphere Pinch Medium',
            code: `# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = sin(v)*cos(u)^5
y = sin(v)*sin(u)^5
z = cos(v)
`
        },
        {
            name: 'Sphere Pinch Extreme',
            code: `# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = sin(v)*cos(u)^7
y = sin(v)*sin(u)^7
z = cos(v)
`
        },
    ],
    'Flattening': [
        {
            name: 'Pipe Flatten Subtle',
            code: `# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = sin(cos(u))
y = sin(sin(u))
z = v
`
        },
        {
            name: 'Pipe Flatten Medium',
            code: `# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = sin(sin(cos(u)))
y = sin(sin(sin(u)))
z = v
`
        },
        {
            name: 'Pipe Flatten Heavy',
            code: `# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = sin(sin(sin(cos(u))))
y = sin(sin(sin(sin(u))))
z = v
`
        },
        {
            name: 'Sphere Flatten Subtle',
            code: `# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = sin(sin(v) * cos(u))
y = sin(sin(v) * sin(u))
z = sin(cos(v))
`
        },
        {
            name: 'Sphere Flatten Medium',
            code: `# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = sin(sin(sin(v) * cos(u)))
y = sin(sin(sin(v) * sin(u)))
z = sin(sin(cos(v)))
`
        },
        {
            name: 'Sphere Flatten Heavy',
            code: `# resolution 35 
# sampling 50
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = sin(sin(sin(sin(v) * cos(u))))
y = sin(sin(sin(sin(v) * sin(u))))
z = sin(sin(sin(cos(v))))
`
        },
    ]
}

