// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"aW2rT":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "4a236f9275d0a351";
module.bundle.HMR_BUNDLE_ID = "3d3c2bfad6acdb22";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    var parents = getParents(module.bundle.root, id); // If no parents, the asset is new. Prevent reloading the page.
    if (!parents.length) return true;
    return parents.some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"7ylHC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _parserJs = require("./parser/parser.js");
var _parserJsDefault = parcelHelpers.interopDefault(_parserJs);
var _viewerJs = require("./viewer.js");
var _viewerJsDefault = parcelHelpers.interopDefault(_viewerJs);
var _editorJs = require("./editor/editor.js");
var _editorJsDefault = parcelHelpers.interopDefault(_editorJs);
var _lineMakerJs = require("./line_maker.js");
var _lineMakerJsDefault = parcelHelpers.interopDefault(_lineMakerJs);
var _settingsJs = require("./settings.js");
var _settingsJsDefault = parcelHelpers.interopDefault(_settingsJs);
var _selektahJs = require("./selektah.js");
var _examplesJs = require("../examples/examples.js");
// -------------------- POINTS
let to_match = `

{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = sin(sin(sin(sin(v) * cos(u))))
y = sin(sin(sin(sin(v) * sin(u))))
z = sin(sin(sin(cos(v))))
`;
let four_slopes = `
{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = sin(v) * cos(u)
y = sin(v) * sin(4 * u)
z = cos(v)
`;
let kein = `
# resolution 70
# sampling 100
{ u, v | 0 <= u <= 2*PI, 0 <= v <= PI }

x = (cos(4*u) / 2) + (sin(v) * cos(u))
y = (sin(4*u) / 2) + (sin(v) * sin(u))
z = cos(v)
`;
let shell = `
# resolution 70
# sampling 200
{ u, v | 0 <= u <= PI*8, 0 <= v <= PI }

x = u * ( sin(v) * cos(u))
y = u * (sin(v) * sin(u))
z = 8*cos(v)
`;
let to_match2 = `/* You can change settings like so: */ 
# color rgb(255, 0, 255)

/* Declare a range like so: */ 
{ u | 0 <= u <= 2*PI }

/* Declare x, y, and z formulas like so: */ 
x = cos(u)
y = sin(u)
`;
const editor = new _editorJsDefault.default();
const viewer = new _viewerJsDefault.default();
const lmaker = new _lineMakerJsDefault.default();
const parser = new _parserJsDefault.default();
_examplesJs.populateExamplesDropdown(editor, parseAndRender, ()=>{
    document.getElementById(_settingsJsDefault.default.DROPDOWN_PANE).style.display = "none";
});
editor.set_contents(to_match2);
parseAndRender();
// ==================== DEBUG
const debug = parser.debug(to_match2);
console.dir(debug, {
    depth: null,
    colors: true
});
// -------------------- Listen to Changes
editor.on_change(parseAndRender);
function parseAndRender(_e = false) {
    try {
        const match = parser.match(editor.get_contents());
        if (match.succeeded()) {
            const parsed = parser.parse();
            const sampling = parsed.options.sampling;
            const line_color = testColor(parsed.options.color) ? parsed.options.color : _settingsJsDefault.default.VIEWER_LINE_COLOR;
            const background_color = testColor(parsed.options.bgcolor) ? parsed.options.bgcolor : _settingsJsDefault.default.VIEWER_BG_COLOR;
            viewer.clear();
            viewer.set_bg(background_color);
            viewer.add(lmaker.make_lines(parsed.points, {
                sample_rate: sampling,
                color: line_color
            }));
        }
    } catch (error) {
        console.error(error);
    }
}
function testColor(color) {
    return /rgb\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*\)/.test(color);
}
// -------------------- DRAW
function run() {
    requestAnimationFrame(run);
    viewer.update();
    viewer.render();
}
run();

},{"./parser/parser.js":"7v7f8","./viewer.js":"dbmJb","./editor/editor.js":"9In44","./line_maker.js":"1O3RE","./settings.js":"aWjXO","./selektah.js":"kQ1ls","../examples/examples.js":"2PJ0Y","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"7v7f8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _grammarJs = require("./grammar.js");
var _grammarJsDefault = parcelHelpers.interopDefault(_grammarJs);
var _evalActionsJs = require("./eval_actions.js");
var _evalActionsJsDefault = parcelHelpers.interopDefault(_evalActionsJs);
var _debugActionsJs = require("./debug_actions.js");
var _debugActionsJsDefault = parcelHelpers.interopDefault(_debugActionsJs);
class Parser {
    constructor(){
        this.grammar = _grammarJsDefault.default;
        this.actions = {
            eval: _evalActionsJsDefault.default,
            debug: _debugActionsJsDefault.default
        };
        this.matcher = _grammarJsDefault.default.matcher();
        this.semantics = _grammarJsDefault.default.createSemantics();
        this.semantics.addOperation('parse()', this.actions.eval);
        this.semantics.addOperation('parse_w_env(env)', this.actions.eval);
        this.semantics.addOperation('debug()', this.actions.debug);
        this.match_cache = {
        };
    }
    match(str) {
        this.matcher.setInput(str);
        this.match_cache = this.matcher.match();
        return this.match_cache;
    }
    match_incremental(start_idx, end_idx, str) {
        this.matcher.replaceInputRange(start_idx, end_idx, str);
        this.match_cache = this.matcher.match();
        return this.match_cache;
    }
    debug(str = null) {
        const match = str ? this.match(str) : this.match_cache;
        return this.semantics(match).debug();
    }
    parse(str = null) {
        const match = str ? this.match(str) : this.match_cache;
        return this.semantics(match).parse();
    }
    parse_incremental(start_idx, end_idx, str = null) {
        const match = str ? this.match_incremental(start_idx, end_idx, str) : this.match_cache;
        return this.semantics(match).parse();
    }
}
exports.default = Parser;

},{"./grammar.js":"dXrNJ","./eval_actions.js":"32MIm","./debug_actions.js":"4XQ81","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"dXrNJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// Grammar + Semantics
const grammar = ohm.grammar(`
    Shape {
        Program = Options* Ranges Formula+
        Options = "#" word ( number | Color )?
        Ranges = "{" Identifiers "|" Bounds "}"
        Formula = Axis "=" Expression
        Expression = AddExpression
        AddExpression 
            = AddExpression "+" MultExpression -- plus
            | AddExpression "-" MultExpression -- minus
            | MultExpression 
        MultExpression
            = MultExpression "*" ExpExpression -- times
            | MultExpression "/" ExpExpression -- divide
            | ExpExpression
        ExpExpression
            = PriExpression "^" ExpExpression -- power
            | PriExpression
        PriExpression
            = "(" Expression ")" -- paren
            | "+" PriExpression -- pos
            | "-" PriExpression -- neg
            | FnExpression
            | Constant
            | number
            | identifier
        FnExpression
            = lower+ "(" Expression ")"
        Constant = "PI"
        Bounds = NonemptyListOf<Bound, ",">
        Bound = Expression Rule identifier Rule Expression 
        Rule = "<=" | ">=" | "<" | ">"
        Identifiers = NonemptyListOf<identifier, ",">
        Color = "rgb(" number "," number "," number ")"
        Axis = "x" | "y" | "z" 
        word = lower+
        identifier = lower
        number = digit+
        comment = "/*" (~"*/" any)* "*/"
        space += comment
}`);
exports.default = grammar;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"ciiiV":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"32MIm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// ----------------- ACTIONS ------------------------ //
var _errorsJs = require("./errors.js");
var _settingsJs = require("../settings.js");
var _settingsJsDefault = parcelHelpers.interopDefault(_settingsJs);
const actions = {
    Program (options, ranges, formulas) {
        options = parseOptions(options);
        ranges = parseRanges(ranges, options);
        // Nested arrays of values from our ranges:
        const sagara = combineRangeValues(ranges);
        // ThreeJS Point results from formula evaluation:
        const points = genPointsWithFormulas(formulas, sagara);
        return {
            options,
            ranges,
            sagara,
            points
        };
    },
    Options (_, option, number) {
        return {
            option: option.parse(),
            value: number.child(0)?.parse()
        };
    },
    Formula (axis, _, exp) {
        return {
            [axis.sourceString]: exp.parse_w_env(this.args.env)
        };
    },
    Ranges (_a, identifiers, _b, bounds, _c) {
        identifiers = identifiers.parse();
        bounds = bounds.parse();
        // Ensures variables in { u, v | ... }
        // match variables in declared bounds.
        ensureIdentifierParity(identifiers, bounds);
        const resolution = this.args.env?.resolution || _settingsJsDefault.default.RESOLUTION;
        // We return an array instead of an object because we need
        // a guarantee that order is maintained according to the declaration.
        return bounds.map((b)=>generateNamedRangeValues(b, resolution)
        );
    },
    Identifiers (list) {
        return list.asIteration().children.map((c)=>c.parse()
        );
    },
    identifier (val) {
        val = val.sourceString;
        if (val == "x" || val == "y" || val == "z") throw new _errorsJs.DisallowedIdentifierException(val);
        else if (this.args.env) {
            const fetched = this.args.env[val];
            if (fetched == undefined) throw new _errorsJs.UndeclaredIdentifierException(val);
            return fetched;
        } else return val;
    },
    Bounds (list) {
        return list.asIteration().children.map((c)=>c.parse()
        );
    },
    Bound (lower, ruleLeft, identifier, ruleRight, upper) {
        return {
            low: lower.parse(),
            ruleLeft: ruleLeft.parse(),
            identifier: identifier.parse(),
            ruleRight: ruleRight.parse(),
            high: upper.parse()
        };
    },
    Rule (_val) {
        const rule = this.sourceString;
        switch(rule){
            case "<":
                return (a, b)=>a < b
                ;
            case ">":
                return (a, b)=>a > b
                ;
            case "<=":
                return (a, b)=>a <= b
                ;
            case ">=":
                return (a, b)=>a >= b
                ;
        }
    },
    AddExpression_plus (expl, _, expr) {
        return expl.parse_w_env(this.args.env) + expr.parse_w_env(this.args.env);
    },
    AddExpression_minus (expl, _, expr) {
        return expl.parse_w_env(this.args.env) - expr.parse_w_env(this.args.env);
    },
    MultExpression_times (expl, _, expr) {
        return expl.parse_w_env(this.args.env) * expr.parse_w_env(this.args.env);
    },
    MultExpression_divide (expl, _, expr) {
        return expl.parse_w_env(this.args.env) / expr.parse_w_env(this.args.env);
    },
    ExpExpression_power (expl, _, expr) {
        return Math.pow(expl.parse_w_env(this.args.env), expr.parse_w_env(this.args.env));
    },
    PriExpression_paren (_l, expr, _r) {
        return expr.parse_w_env(this.args.env);
    },
    PriExpression_pos (_, expr) {
        return expr.parse_w_env(this.args.env);
    },
    PriExpression_neg (_, expr) {
        return -1 * expr.parse_w_env(this.args.env);
    },
    FnExpression (fn, _a, expr, _b) {
        const fn_name = fn.sourceString;
        switch(fn_name){
            case "cos":
                return Math.cos(expr.parse_w_env(this.args.env));
            case "sin":
                return Math.sin(expr.parse_w_env(this.args.env));
            case "atan":
                return Math.atan(expr.parse_w_env(this.args.env));
            default:
                throw new _errorsJs.UnknownFunctionException(fn_name);
        }
    },
    Constant (_pi) {
        return Math.PI;
    },
    Color (_rgb, _num, _c, _num2, _c2, _num3, _rp) {
        return this.sourceString;
    },
    number (_) {
        return parseInt(this.sourceString);
    },
    word (_) {
        return this.sourceString;
    }
};
exports.default = actions;
// ----------------- ACTION HELPERS ------------------------ //
function parseOptions(options) {
    return options.children.reduce((result, curr)=>{
        const option_token = curr.parse();
        result[option_token.option] = option_token.value || true;
        return result;
    }, {
    });
}
function parseRanges(ranges, options) {
    return ranges.parse_w_env(options);
}
function combineRangeValues(parsed_ranges) {
    return combineArrays(parsed_ranges, (v1, v2)=>{
        return {
            ...v1,
            ...v2
        };
    });
}
function genPointsWithFormulas(formulas, sagara) {
    function applyFormulasTo(range_values) {
        return range_values.map((range_value)=>{
            // Recurse over nested arrays
            if (Array.isArray(range_value)) return applyFormulasTo(range_value);
            // { x: ..., y: ..., z: ... }
            let formula_results = formulas.children.map((f)=>f.parse_w_env(range_value)
            ).reduce((result, curr)=>{
                return {
                    ...result,
                    ...curr
                };
            }, {
            });
            return new THREE.Vector3(formula_results.x, formula_results.y, formula_results.z || 0);
        });
    }
    return applyFormulasTo(sagara);
}
function generateNamedRangeValues(bound, resolution) {
    const { low , ruleLeft , identifier , ruleRight , high  } = bound;
    const step = (high - low) / resolution;
    const result = [];
    const MAX = _settingsJsDefault.default.MAX_RANGE_NUM;
    const MIN = _settingsJsDefault.default.MIN_RANGE_NUM;
    // Check we don't have an infinite range
    if (ruleLeft(low, MAX) && ruleRight(MAX, high) || ruleLeft(low, MIN) && ruleRight(MIN, high)) throw new _errorsJs.InfiniteRangeException(identifier);
    let curr_val = low;
    // Adjust for <, > starts
    if (!ruleLeft(low, low)) curr_val += step;
    while(ruleRight(curr_val, high)){
        result.push({
            [identifier]: curr_val
        });
        curr_val += step;
    }
    return result;
}
function combineArrays([car, ...[cadr, ...cddr]], combineFn) {
    if (!cadr || cadr.length == 0) return car;
    const combined = cadr.map((cadr_v)=>{
        return car.map((car_v)=>combineFn(car_v, cadr_v)
        );
    });
    return combineArrays([
        combined,
        cddr
    ], combineFn);
}
function ensureIdentifierParity(identifiers, bounds_array) {
    const bounds_identifiers = bounds_array.map((b)=>b.identifier
    );
    const b1 = identifiers.sort().join('');
    const b2 = bounds_identifiers.sort().join('');
    if (b1 !== b2) throw "Identifiers and Bound Identifiers do not match!";
}

},{"./errors.js":"bbAuD","../settings.js":"aWjXO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"bbAuD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "UnknownFunctionException", ()=>UnknownFunctionException
);
parcelHelpers.export(exports, "DisallowedIdentifierException", ()=>DisallowedIdentifierException
);
parcelHelpers.export(exports, "UndeclaredIdentifierException", ()=>UndeclaredIdentifierException
);
parcelHelpers.export(exports, "InfiniteRangeException", ()=>InfiniteRangeException
);
function UnknownFunctionException(value) {
    this.value = value;
    this.message = `Unknown function "${value}"`;
    this.toString = ()=>this.message
    ;
}
function DisallowedIdentifierException(value) {
    this.value = value;
    this.message = `Cannot use "${value}" as an identifier!`;
    this.toString = ()=>this.message
    ;
}
function UndeclaredIdentifierException(value) {
    this.value = value;
    this.message = `Identifier "${value}" has not been declared in a range!`;
    this.toString = ()=>this.message
    ;
}
function InfiniteRangeException(value) {
    this.value = value;
    this.message = `The range for identifier ${value} is infinite!`;
    this.toString = ()=>this.message
    ;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"aWjXO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    /* =============  THREE JS  =============== */ VIEWER_BG_COLOR: 14935011,
    VIEWER_LINE_COLOR: 0,
    VIEWER_WIDTH: window.innerWidth * 0.5,
    VIEWER_HEIGHT: 500,
    VIEWER_DOM_ELEMENT: "three",
    VIEWER_CAMERA_POSITION: [
        0,
        -3,
        3
    ],
    VIEWER_CENTER_BUTTON_ID: "viewer-center-button",
    VIEWER_DOWNLOAD_BUTTON_ID: "viewer-save-button",
    /* ============ EDITOR  ========== */ EDITOR_DOM_ELEMENT: "jar",
    EDITOR_FONT_FAMILY: "monospace",
    EDITOR_FONT_SIZE: "18px",
    EDITOR_PADDING: 20,
    /* ============ SHAPE CREATION  ========== */ SAMPLE_RATE: 20,
    RESOLUTION: 20,
    /* ============ GENERAL ========== */ MAX_RANGE_NUM: 100000,
    MIN_RANGE_NUM: -100000,
    /* ============ SELEKTAAAAH ========== */ DROPDOWN_BUTTON: "example-dd",
    DROPDOWN_PANE: "example-dd-body",
    DROPDOWN_LIST: "example-dd-list"
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"4XQ81":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// ----------------- ACTIONS ------------------------ //
const debug_actions = {
    // These actions define how the parse tree emitted by the grammar
    // is further processed. Each function matches a grammar rule
    // and receives as many arguments.
    Program (options, ranges, formulas) {
        options = options.children.map((o)=>o.debug()
        );
        ranges = ranges.debug();
        formulas = formulas.children.map((f)=>f.debug()
        );
        return {
            options,
            ranges,
            formulas
        };
    },
    Options (_, option, number) {
        return {
            option: option.debug(),
            value: number.child(0)?.debug()
        };
    },
    Formula (axis, _, exp) {
        return {
            [axis.sourceString]: exp.debug
        };
    },
    Ranges (_a, identifiers, _b, bounds, _c) {
        return {
            type: "RANGES",
            identifiers: identifiers.debug(),
            bounds: bounds.debug()
        };
    },
    Identifiers (list) {
        return list.asIteration().children.map((c)=>c.debug()
        );
    },
    identifier (val) {
        return {
            type: "IDENTIFIER",
            value: val.sourceString
        };
    },
    Bounds (list) {
        return list.asIteration().children.map((c)=>c.debug()
        );
    },
    Bound (lower, ruleLeft, identifier, ruleRight, upper) {
        return {
            low: lower.debug(),
            ruleLeft: ruleLeft.sourceString,
            identifier: identifier.debug(),
            ruleRight: ruleRight.sourceString,
            high: upper.debug()
        };
    },
    AddExpression_plus (expr_left, _, expr_right) {
        const token = {
            type: "PLUS-TOKEN",
            op: (a, b)=>a + b
            ,
            args: [
                expr_left.debug(),
                expr_right.debug()
            ]
        };
        return token;
    },
    AddExpression_minus (expr_left, _, expr_right) {
        const token = {
            type: "MINUS-TOKEN",
            op: (a, b)=>a - b
            ,
            args: [
                expr_left.debug(),
                expr_right.debug()
            ]
        };
        return token;
    },
    MultExpression_times (expr_left, _, expr_right) {
        const token = {
            type: "TIMES-TOKEN",
            op: (a, b)=>a * b
            ,
            args: [
                expr_left.debug(),
                expr_right.debug()
            ]
        };
        return token;
    },
    MultExpression_divide (expr_left, _, expr_right) {
        const token = {
            type: "DIVIDE-TOKEN",
            op: (a, b)=>a / b
            ,
            args: [
                expr_left.debug(),
                expr_right.debug()
            ]
        };
        return token;
    },
    ExpExpression_power (expr_left, _, expr_right) {
        const token = {
            type: "POWER-TOKEN",
            op: (a, b)=>Math.pow(a, b)
            ,
            args: [
                expr_left.debug(),
                expr_right.debug()
            ]
        };
        return token;
    },
    PriExpression_paren (_l, expr, _r) {
        return expr.debug();
    },
    PriExpression_pos (_, expr) {
        return expr.debug();
    },
    PriExpression_neg (_, expr) {
        return {
            type: "NEG-TOKEN",
            op: (a, b)=>a * b
            ,
            args: [
                -1,
                expr.debug()
            ]
        };
    },
    FnExpression (fn, _a, expr, _b) {
        const fn_name = fn.sourceString;
        let token;
        switch(fn_name){
            case "cos":
                token = {
                    type: "FUN-TOKEN",
                    op: (a)=>Math.cos(a)
                    ,
                    args: [
                        expr.debug()
                    ]
                };
                return token;
            case "sin":
                token = {
                    type: "FUN-TOKEN",
                    op: (a)=>Math.sin(a)
                    ,
                    args: [
                        expr.debug()
                    ]
                };
                return token;
            case "atan":
                token = {
                    type: "FUN-TOKEN",
                    op: (a)=>Math.sin(a)
                    ,
                    args: [
                        expr.debug()
                    ]
                };
                return token;
            default:
                throw `Unknown function \"${fn}\"`;
        }
    },
    Constant (_pi) {
        return {
            type: "PI-CONSTANT",
            value: Math.PI
        };
    },
    Color (_rgb, _num, _c, _num2, _c2, _num3, _rp) {
        return {
            type: "RGB-COLOR",
            value: this.sourceString
        };
    },
    number (_) {
        return {
            type: "NUMBER",
            value: parseInt(this.sourceString)
        };
    },
    word (_) {
        return {
            type: "WORD",
            value: this.sourceString
        };
    }
};
exports.default = debug_actions;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"dbmJb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _settingsJs = require("./settings.js");
var _settingsJsDefault = parcelHelpers.interopDefault(_settingsJs);
class Viewer {
    constructor(options = {
    }){
        this.dom_element = options.dom_element || _settingsJsDefault.default.VIEWER_DOM_ELEMENT;
        this.width = options.width || _settingsJsDefault.default.VIEWER_WIDTH;
        this.height = options.height || _settingsJsDefault.default.VIEWER_HEIGHT;
        this.line_color = options.line_color || _settingsJsDefault.default.VIEWER_LINE_COLOR;
        this.bg_color = options.bg_color || _settingsJsDefault.default.VIEWER_BG_COLOR;
        this.camera_init_pos = options.camera_pos || _settingsJsDefault.default.VIEWER_CAMERA_POSITION;
        this.debug = options.debug || false;
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(this.bg_color);
        this.camera = new THREE.PerspectiveCamera(75, this.width / this.height, 0.1, 1000);
        this.camera.position.set(...this.camera_init_pos);
        //this.camera.lookAt( new THREE.Vector3( 0, 0, 0 ) )
        this.renderer = new THREE.WebGLRenderer({
            antialias: true,
            preserveDrawingBuffer: true
        });
        this.renderer.setSize(this.width, this.height);
        this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);
        this.controls.saveState();
        this.center_button = document.getElementById(_settingsJsDefault.default.VIEWER_CENTER_BUTTON_ID);
        this.center_button.addEventListener('click', (_e)=>{
            this.center_cam();
        });
        this.save_button = document.getElementById(_settingsJsDefault.default.VIEWER_DOWNLOAD_BUTTON_ID);
        this.save_button.addEventListener('click', (_e)=>{
            this.download_img();
        });
        const target = document.getElementById(this.dom_element);
        target.appendChild(this.renderer.domElement);
    }
    add(scene_element) {
        this.__debugPrint(`In Viewer.instance.add(): starting to add elements to scene`);
        // Recursively add nested arrays of elements
        if (Array.isArray(scene_element)) {
            this.__debugPrint(`In Viewer.instance.add(): array detected, beginning add loop`);
            for (const el of scene_element)if (Array.isArray(el)) {
                this.add(el);
                this.__debugPrint(`In Viewer.instance.add(): recursively called add() for ${el}`);
            } else {
                this.scene.add(el);
                this.__debugPrint(`In Viewer.instance.add(): added ${el} to scene`);
            }
            this.__debugPrint(`In Viewer.instance.add(): finished adding array of elements`);
            return this.scene;
        } else {
            this.scene.add(scene_element);
            this.__debugPrint(`In Viewer.instance.add(): added ${scene_element} to scene`);
            return this.scene;
        }
    }
    clear() {
        while(this.scene.children.length){
            this.__debugPrint(`In Viewer.instance.clear(): removing ${this.scene.children[0]} from scene`);
            this.scene.remove(this.scene.children[0]);
        }
        this.__debugPrint(`In Viewer.instance.clear(): finished removing children from scene`);
        return this.scene;
    }
    update() {
        this.__debugPrint(`In Viewer.instance.update(): started updating controls`);
        this.controls.update();
        this.__debugPrint(`In Viewer.instance.update(): finished updating controls`);
    }
    render() {
        this.__debugPrint(`In Viewer.instance.render(): started rendering scene`);
        this.renderer.render(this.scene, this.camera);
        this.__debugPrint(`In Viewer.instance.render(): finished rendering scene`);
    }
    set_bg(color) {
        this.bg_color = color;
        this.scene.background = new THREE.Color(this.bg_color);
        return this.scene;
    }
    center_cam() {
        this.controls.reset();
    }
    download_img() {
        const link = document.createElement('a');
        const url = this.renderer.domElement.toDataURL();
        link.setAttribute('href', url);
        link.setAttribute('target', '_blank');
        link.setAttribute('download', 'morph.png');
        link.click();
        link.remove();
    }
    __debugPrint(message) {
        if (this.debug) console.warn(message);
    }
}
exports.default = Viewer;

},{"./settings.js":"aWjXO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"9In44":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _settingsJs = require("../settings.js");
var _settingsJsDefault = parcelHelpers.interopDefault(_settingsJs);
var _codejarJs = require("../../lib/codejar.js");
var _highlighterJs = require("./highlighter.js");
var _highlighterJsDefault = parcelHelpers.interopDefault(_highlighterJs);
class Editor {
    constructor(options = {
    }){
        this.dom_element = options.dom_element || _settingsJsDefault.default.EDITOR_DOM_ELEMENT;
        this.font_family = options.font_family || _settingsJsDefault.default.EDITOR_FONT_FAMILY;
        this.font_size = options.font_size || _settingsJsDefault.default.EDITOR_FONT_SIZE;
        this.padding = options.padding || _settingsJsDefault.default.EDITOR_PADDING;
        this.entry = document.getElementById(this.dom_element);
        this.editor = _codejarJs.CodeJar(this.entry, (editor)=>{
            _highlighterJsDefault.default.highlightElement(editor);
        });
    }
    on_change(callback) {
        this.editor.onUpdate(callback);
    }
    get_contents() {
        return this.editor.toString();
    }
    set_contents(string) {
        return this.editor.updateCode(string);
    }
}
exports.default = Editor;

},{"../settings.js":"aWjXO","../../lib/codejar.js":"9PCpN","./highlighter.js":"e1sFx","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"9PCpN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CodeJar", ()=>CodeJar
);
const globalWindow = window;
function CodeJar(editor, highlight, opt = {
}) {
    const options1 = Object.assign({
        tab: '\t',
        indentOn: /{$/,
        spellcheck: false,
        catchTab: true,
        preserveIdent: true,
        addClosing: true,
        history: true,
        window: globalWindow
    }, opt);
    const window = options1.window;
    const document = window.document;
    let listeners = [];
    let history = [];
    let at = -1;
    let focus = false;
    let callback;
    let prev; // code content prior keydown event
    let isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
    editor.setAttribute('contentEditable', isFirefox ? 'true' : 'plaintext-only');
    editor.setAttribute('spellcheck', options1.spellcheck ? 'true' : 'false');
    editor.style.outline = 'none';
    editor.style.overflowWrap = 'break-word';
    editor.style.overflowY = 'auto';
    editor.style.resize = 'vertical';
    editor.style.whiteSpace = 'pre-wrap';
    highlight(editor);
    const debounceHighlight = debounce(()=>{
        const pos = save();
        highlight(editor, pos);
        restore(pos);
    }, 30);
    let recording = false;
    const shouldRecord = (event)=>{
        return !isUndo(event) && !isRedo(event) && event.key !== 'Meta' && event.key !== 'Control' && event.key !== 'Alt' && !event.key.startsWith('Arrow');
    };
    const debounceRecordHistory = debounce((event)=>{
        if (shouldRecord(event)) {
            recordHistory();
            recording = false;
        }
    }, 300);
    const on = (type, fn)=>{
        listeners.push([
            type,
            fn
        ]);
        editor.addEventListener(type, fn);
    };
    on('keydown', (event)=>{
        if (event.defaultPrevented) return;
        prev = toString();
        if (options1.preserveIdent) handleNewLine(event);
        else firefoxNewLineFix(event);
        if (options1.catchTab) handleTabCharacters(event);
        if (options1.addClosing) handleSelfClosingCharacters(event);
        if (options1.history) {
            handleUndoRedo(event);
            if (shouldRecord(event) && !recording) {
                recordHistory();
                recording = true;
            }
        }
    });
    on('keyup', (event)=>{
        if (event.defaultPrevented) return;
        if (event.isComposing) return;
        if (prev !== toString()) debounceHighlight();
        debounceRecordHistory(event);
        if (callback) callback(toString());
    });
    on('focus', (_event)=>{
        focus = true;
    });
    on('blur', (_event)=>{
        focus = false;
    });
    on('paste', (event)=>{
        recordHistory();
        handlePaste(event);
        recordHistory();
        if (callback) callback(toString());
    });
    function save() {
        const s = getSelection();
        const pos = {
            start: 0,
            end: 0,
            dir: undefined
        };
        visit(editor, (el)=>{
            if (el === s.anchorNode && el === s.focusNode) {
                pos.start += s.anchorOffset;
                pos.end += s.focusOffset;
                pos.dir = s.anchorOffset <= s.focusOffset ? '->' : '<-';
                return 'stop';
            }
            if (el === s.anchorNode) {
                pos.start += s.anchorOffset;
                if (!pos.dir) pos.dir = '->';
                else return 'stop';
            } else if (el === s.focusNode) {
                pos.end += s.focusOffset;
                if (!pos.dir) pos.dir = '<-';
                else return 'stop';
            }
            if (el.nodeType === Node.TEXT_NODE) {
                if (pos.dir != '->') pos.start += el.nodeValue.length;
                if (pos.dir != '<-') pos.end += el.nodeValue.length;
            }
        });
        return pos;
    }
    function restore(pos) {
        const s = getSelection();
        let startNode, startOffset = 0;
        let endNode, endOffset = 0;
        if (!pos.dir) pos.dir = '->';
        if (pos.start < 0) pos.start = 0;
        if (pos.end < 0) pos.end = 0;
        // Flip start and end if the direction reversed
        if (pos.dir == '<-') {
            const { start , end  } = pos;
            pos.start = end;
            pos.end = start;
        }
        let current = 0;
        visit(editor, (el)=>{
            if (el.nodeType !== Node.TEXT_NODE) return;
            const len = (el.nodeValue || '').length;
            if (current + len >= pos.start) {
                if (!startNode) {
                    startNode = el;
                    startOffset = pos.start - current;
                }
                if (current + len >= pos.end) {
                    endNode = el;
                    endOffset = pos.end - current;
                    return 'stop';
                }
            }
            current += len;
        });
        // If everything deleted place cursor at editor
        if (!startNode) startNode = editor;
        if (!endNode) endNode = editor;
        // Flip back the selection
        if (pos.dir == '<-') [startNode, startOffset, endNode, endOffset] = [
            endNode,
            endOffset,
            startNode,
            startOffset
        ];
        s.setBaseAndExtent(startNode, startOffset, endNode, endOffset);
    }
    function beforeCursor() {
        const s = getSelection();
        const r0 = s.getRangeAt(0);
        const r = document.createRange();
        r.selectNodeContents(editor);
        r.setEnd(r0.startContainer, r0.startOffset);
        return r.toString();
    }
    function afterCursor() {
        const s = getSelection();
        const r0 = s.getRangeAt(0);
        const r = document.createRange();
        r.selectNodeContents(editor);
        r.setStart(r0.endContainer, r0.endOffset);
        return r.toString();
    }
    function handleNewLine(event) {
        if (event.key === 'Enter') {
            const before = beforeCursor();
            const after = afterCursor();
            let [padding] = findPadding(before);
            let newLinePadding = padding;
            // If last symbol is "{" ident new line
            // Allow user defines indent rule
            if (options1.indentOn.test(before)) newLinePadding += options1.tab;
            // Preserve padding
            if (newLinePadding.length > 0) {
                preventDefault(event);
                event.stopPropagation();
                insert('\n' + newLinePadding);
            } else firefoxNewLineFix(event);
            // Place adjacent "}" on next line
            if (newLinePadding !== padding && after[0] === '}') {
                const pos = save();
                insert('\n' + padding);
                restore(pos);
            }
        }
    }
    function firefoxNewLineFix(event) {
        // Firefox does not support plaintext-only mode
        // and puts <div><br></div> on Enter. Let's help.
        if (isFirefox && event.key === 'Enter') {
            preventDefault(event);
            event.stopPropagation();
            if (afterCursor() == '') {
                insert('\n ');
                const pos = save();
                pos.start = --pos.end;
                restore(pos);
            } else insert('\n');
        }
    }
    function handleSelfClosingCharacters(event) {
        const open = `([{'"`;
        const close = `)]}'"`;
        const codeAfter = afterCursor();
        const codeBefore = beforeCursor();
        const escapeCharacter = codeBefore.substr(codeBefore.length - 1) === '\\';
        const charAfter = codeAfter.substr(0, 1);
        if (close.includes(event.key) && !escapeCharacter && charAfter === event.key) {
            // We already have closing char next to cursor.
            // Move one char to right.
            const pos = save();
            preventDefault(event);
            pos.start = ++pos.end;
            restore(pos);
        } else if (open.includes(event.key) && !escapeCharacter && (`"'`.includes(event.key) || [
            '',
            ' ',
            '\n'
        ].includes(charAfter))) {
            preventDefault(event);
            const pos = save();
            const wrapText = pos.start == pos.end ? '' : getSelection().toString();
            const text = event.key + wrapText + close[open.indexOf(event.key)];
            insert(text);
            pos.start++;
            pos.end++;
            restore(pos);
        }
    }
    function handleTabCharacters(event) {
        if (event.key === 'Tab') {
            preventDefault(event);
            if (event.shiftKey) {
                const before = beforeCursor();
                let [padding, start, ] = findPadding(before);
                if (padding.length > 0) {
                    const pos = save();
                    // Remove full length tab or just remaining padding
                    const len = Math.min(options1.tab.length, padding.length);
                    restore({
                        start,
                        end: start + len
                    });
                    document.execCommand('delete');
                    pos.start -= len;
                    pos.end -= len;
                    restore(pos);
                }
            } else insert(options1.tab);
        }
    }
    function handleUndoRedo(event) {
        if (isUndo(event)) {
            preventDefault(event);
            at--;
            const record = history[at];
            if (record) {
                editor.innerHTML = record.html;
                restore(record.pos);
            }
            if (at < 0) at = 0;
        }
        if (isRedo(event)) {
            preventDefault(event);
            at++;
            const record = history[at];
            if (record) {
                editor.innerHTML = record.html;
                restore(record.pos);
            }
            if (at >= history.length) at--;
        }
    }
    function recordHistory() {
        if (!focus) return;
        const html = editor.innerHTML;
        const pos = save();
        const lastRecord = history[at];
        if (lastRecord) {
            if (lastRecord.html === html && lastRecord.pos.start === pos.start && lastRecord.pos.end === pos.end) return;
        }
        at++;
        history[at] = {
            html,
            pos
        };
        history.splice(at + 1);
        const maxHistory = 300;
        if (at > maxHistory) {
            at = maxHistory;
            history.splice(0, 1);
        }
    }
    function handlePaste(event) {
        preventDefault(event);
        const text = (event.originalEvent || event).clipboardData.getData('text/plain').replace(/\r/g, '');
        const pos = save();
        insert(text);
        highlight(editor);
        restore({
            start: pos.start + text.length,
            end: pos.start + text.length
        });
    }
    function visit(editor, visitor) {
        const queue = [];
        if (editor.firstChild) queue.push(editor.firstChild);
        let el = queue.pop();
        while(el){
            if (visitor(el) === 'stop') break;
            if (el.nextSibling) queue.push(el.nextSibling);
            if (el.firstChild) queue.push(el.firstChild);
            el = queue.pop();
        }
    }
    function isCtrl(event) {
        return event.metaKey || event.ctrlKey;
    }
    function isUndo(event) {
        return isCtrl(event) && !event.shiftKey && event.key === 'z';
    }
    function isRedo(event) {
        return isCtrl(event) && event.shiftKey && event.key === 'z';
    }
    function insert(text) {
        text = text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;');
        document.execCommand('insertHTML', false, text);
    }
    function debounce(cb, wait) {
        let timeout = 0;
        return (...args)=>{
            clearTimeout(timeout);
            timeout = window.setTimeout(()=>cb(...args)
            , wait);
        };
    }
    function findPadding(text) {
        // Find beginning of previous line.
        let i = text.length - 1;
        while(i >= 0 && text[i] !== '\n')i--;
        i++;
        // Find padding of the line.
        let j = i;
        while(j < text.length && /[ \t]/.test(text[j]))j++;
        return [
            text.substring(i, j) || '',
            i,
            j
        ];
    }
    function toString() {
        return editor.textContent || '';
    }
    function preventDefault(event) {
        event.preventDefault();
    }
    function getSelection() {
        var _a;
        if (((_a = editor.parentNode) === null || _a === void 0 ? void 0 : _a.nodeType) == Node.DOCUMENT_FRAGMENT_NODE) return editor.parentNode.getSelection();
        return window.getSelection();
    }
    return {
        updateOptions (options) {
            options = Object.assign(Object.assign({
            }, options), options);
        },
        updateCode (code) {
            editor.textContent = code;
            highlight(editor);
        },
        onUpdate (cb) {
            callback = cb;
        },
        toString,
        save,
        restore,
        recordHistory,
        destroy () {
            for (let [type, fn] of listeners)editor.removeEventListener(type, fn);
        }
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"e1sFx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = (function(Prism) {
    Prism.languages.morphing = {
        'comment': /\/\*[\s\S]*?\*\//,
        'option': /#.*\n/,
        'axis': /[xyz]/,
        'range': {
            pattern: /\{.*\}/,
            inside: {
                'identifier': /([a-z])(?=.*\1.*})/
            }
        },
        'function': /([a-zA-Z]+)(?=\(.*\))/
    };
    //Prism.languages.morphing['range'].inside.rest = Prism.languages.morphing
    return Prism;
})(Prism);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"1O3RE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _settingsJs = require("./settings.js");
var _settingsJsDefault = parcelHelpers.interopDefault(_settingsJs);
class LineMaker {
    constructor(options = {
    }){
        this.sample_rate = options.sample_rate || _settingsJsDefault.default.SAMPLE_RATE;
        this.line_color = options.color || _settingsJsDefault.default.VIEWER_LINE_COLOR;
        this.line_material = new THREE.LineBasicMaterial({
            color: options.color || _settingsJsDefault.default.VIEWER_LINE_COLOR
        });
        this.curves = [];
        this.lines = [];
    }
    make_curves(points) {
        if (Array.isArray(points[0])) return points.map((p)=>this.make_curves(p)
        ).flat();
        else return [
            new THREE.CatmullRomCurve3(points)
        ];
    }
    make_lines(points, options = {
    }) {
        const sample_rate = options.sample_rate || this.sample_rate;
        this.line_color = options.color || _settingsJsDefault.default.VIEWER_LINE_COLOR;
        this.line_material = new THREE.LineBasicMaterial({
            color: this.line_color
        });
        if (sample_rate < 2 || !sample_rate) sample_rate = this.sample_rate;
        return this.make_curves(points).map((curve)=>{
            const sample_points = curve.getPoints(sample_rate);
            const geometry = new THREE.BufferGeometry().setFromPoints(sample_points);
            return new THREE.Line(geometry, this.line_material);
        });
    }
}
exports.default = LineMaker;

},{"./settings.js":"aWjXO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"kQ1ls":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _settingsJs = require("./settings.js");
var _settingsJsDefault = parcelHelpers.interopDefault(_settingsJs);
const dropdown_button = document.getElementById(_settingsJsDefault.default.DROPDOWN_BUTTON);
const dropdown_pane = document.getElementById(_settingsJsDefault.default.DROPDOWN_PANE);
dropdown_pane.style.display = "none";
dropdown_button.addEventListener('click', (_e)=>{
    const display_prop = dropdown_pane.style.display;
    dropdown_pane.style.display = display_prop == "none" ? "" : "none";
});

},{"./settings.js":"aWjXO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"2PJ0Y":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "populateExamplesDropdown", ()=>populateExamplesDropdown
);
var _exampleListJs = require("./example_list.js");
var _exampleListJsDefault = parcelHelpers.interopDefault(_exampleListJs);
var _settingsJs = require("../scripts/settings.js");
var _settingsJsDefault = parcelHelpers.interopDefault(_settingsJs);
const list_wrapper = document.getElementById(_settingsJsDefault.default.DROPDOWN_LIST);
function make_title_li(section_title) {
    const title_li = document.createElement('li');
    title_li.classList.add('example-dd-list-title');
    const title = document.createElement('h1');
    title.classList.add('list-title');
    title.innerText = section_title;
    title_li.appendChild(title);
    return title_li;
}
function make_item_li(item) {
    const item_li = document.createElement('li');
    item_li.classList.add('example-dd-list-item');
    const item_thumb = document.createElement('div');
    item_thumb.classList.add('example-thumb');
    const item_info = document.createElement('div');
    item_info.classList.add('example-info');
    const item_name = document.createElement('h3');
    item_name.classList.add('example-name');
    item_name.innerText = item.name;
    const item_category = document.createElement('h5');
    item_category.classList.add('example-category');
    item_category.innerText = 'Bending';
    item_info.appendChild(item_name);
    item_info.appendChild(item_category);
    item_li.appendChild(item_thumb);
    item_li.appendChild(item_info);
    return item_li;
}
function populateExamplesDropdown(editor, ...callbacks) {
    for (const [section, items] of Object.entries(_exampleListJsDefault.default)){
        const title_li = make_title_li(section);
        list_wrapper.appendChild(title_li);
        for (const item of items){
            const item_li = make_item_li(item);
            item_li.addEventListener('click', (_e)=>{
                editor.set_contents(item.code);
                for (const cb of callbacks)cb();
            });
            list_wrapper.appendChild(item_li);
        }
    }
}

},{"./example_list.js":"fPYzu","../scripts/settings.js":"aWjXO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"fPYzu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
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
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}]},["aW2rT","7ylHC"], "7ylHC", "parcelRequire5357")

//# sourceMappingURL=index.d6acdb22.js.map
