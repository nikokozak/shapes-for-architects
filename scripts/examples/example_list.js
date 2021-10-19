export default {
    "Shaping": [
        { 
            name: 'Circle',
            code: `{ u | 0 <= u <= 2*PI }
            
x = cos(u)
y = sin(u)`
        },
        {
            name: 'Short Cylinder',
            code: `{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI/3 }

x = cos(u)
y = sin(u)
z = v`
        },
        {
            name: 'Tall Cylinder',
            code: `{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = cos(u)
y = sin(u)
z = v`
        },
        {
            name: 'Twisting Line',
            code: `{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = cos(u)
y = sin(u)
z = u`
        },
        {
            name: 'Twisting Lines',
            code: `{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = v * cos(u)
y = v * sin(u)
z = u`
        },
        {
            name: 'Cone',
            code: `{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = v * cos(u)
y = v * sin(u)
z = v`
        },
        {
            name: 'Sphere',
            code: `{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = sin(v) * cos(u)
y = sin(v) * sin(u)
z = cos(v)`
        },
        {
            name: 'Pointy Sphere',
            code: `{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = sin(v) * cos(u)
y = sin(v) * sin(u)
z = v`
        },
    ],
    "Cutting": [
        {
            name: '3/4 Cylinder',
            code: `{ u, v | 0 <= u <= 3*PI/2, 0 <= v <= PI }

x = cos(u)
y = sin(u)
z = v`
        },
        {
            name: '1/2 Cylinder',
            code: `{ u, v | 0 <= u <= PI, 0 <= v <= PI }

x = cos(u)
y = sin(u)
z = v`
        },
        {
            name: 'Cylinder Segment',
            code: `{ u, v | 0 <= u <= PI/2, 0 <= v <= PI }

x = cos(u)
y = sin(u)
z = v`
        },
        {
            name: '3/4 Sphere',
            code: `{ u, v | 0 <= u <= 3*PI/2, 0 <= v <= PI }

x = sin(v) * cos(u)
y = sin(v) * sin(u)
z = cos(v)`
        },
        {
            name: '1/2 Sphere',
            code: `{ u, v | 0 <= u <= PI, 0 <= v <= PI }

x = sin(v) * cos(u)
y = sin(v) * sin(u)
z = cos(v)`
        },
        {
            name: 'Sphere Segment',
            code: `{ u, v | 0 <= u <= PI, 0 <= v <= PI }

x = sin(v) * cos(u)
y = sin(v) * sin(u)
z = cos(v)`
        },
    ],
    'Scaling': [
        {
            name: 'Squished Y Cylinder',
            code: `{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = cos(u)
y = sin(u)/2
z = v`
        },
        {
            name: 'Squished X Cylinder',
            code: `{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = cos(u)/2
y = sin(u)
z = v`
        },
        {
            name: 'Narrow Cylinder',
            code: `{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = cos(u)/2
y = sin(u)/2
z = v`
        },
        {
            name: 'Squished Y Sphere',
            code: `{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = sin(v) * cos(u)
y = (sin(v) * sin(u))/2
z = cos(v)`
        },
        {
            name: 'Narrow Sphere',
            code: `{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = (sin(v) * cos(u))/2
y = (sin(v) * sin(u))/2
z = cos(v)`
        },
    ],
    'Modulating': [
        {
            name: 'Sine Wave',
            code: `{ u | 0 <= u <= 2*PI }

x = u
y = sin(u)`
        },
        {
            name: 'Wave Circle',
            code: `{ u | 0 <= u <= 2*PI }

x = cos(u)*4
y = sin(4 * u)`
        },
        {
            name: 'Infinity Cylinder',
            code: `{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = cos(u)
y = sin(2*u)
z = v`
        },
        {
            name: 'Three Wave Cylinder',
            code: `{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = cos(u)
y = sin(3*u)
z = v`
        },
        {
            name: 'Four Wave Cylinder',
            code: `{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = cos(u)
y = sin(4*u)
z = v`
        },
        {
            name: 'Infinity Sphere',
            code: `{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = sin(v) * cos(u)
y = sin(v) * sin(2*u)
z = cos(v)`
        },
        {
            name: 'Three Wave Sphere',
            code: `{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = sin(v) * cos(u)
y = sin(v) * sin(3*u)
z = cos(v)`
        },
        {
            name: 'Four Wave Sphere',
            code: `{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = sin(v) * cos(u)
y = sin(v) * sin(4*u)
z = cos(v)`
        },
    ]
}

