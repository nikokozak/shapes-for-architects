export default [
    { 
        id: 't1',
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
    }
]
