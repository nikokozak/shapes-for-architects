export default (function(Prism) {
    
    Prism.languages.morphing = {
        'comment': /\/\*[\s\S]*?\*\//,
        'option': /#.*\n/,
        'axis': /[xyz]/,
        'range': {
            pattern: /\{.*\}/,
            inside: {
                'identifier': /([a-zA-Z])(?=.*\1.*})/,
            }
        },
        'function': /([a-zA-Z]+)(?=\(.*\))/,
}

    return Prism

})(Prism)
