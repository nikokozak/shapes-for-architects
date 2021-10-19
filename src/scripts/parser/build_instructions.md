To build the grammar file, run:

`peggy --format es -d helpers:./actions.js grammar.peggy`

This will:
- Build the grammar to support es-module imports
- import helpers from 'actions.js'
- Save the resulting file as 'grammar.js'
