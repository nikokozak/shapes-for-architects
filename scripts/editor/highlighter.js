export default (function(Prism) {
    
    Prism.languages.morphing = {
        'comment': /\/\*[\s\S]*?\*\//,
        'option': /#.*\n/,
        'axis': /[xyz]/,
        'range': {
            pattern: /\{.*\}/,
            inside: {
                'identifier': /([a-z])(?=.*\1.*})/,
            }
        },
        'function': /([a-zA-Z]+)(?=\(.*\))/,
    }

    //Prism.languages.morphing['range'].inside.rest = Prism.languages.morphing

    return Prism

}(Prism))
