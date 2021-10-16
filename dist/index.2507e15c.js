!function(u, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.ohm = t() : u.ohm = t();
}(window, function() {
    return (function(u) {
        var t = {
        };
        function e(r) {
            if (t[r]) return t[r].exports;
            var n = t[r] = {
                i: r,
                l: !1,
                exports: {
                }
            };
            return u[r].call(n.exports, n, n.exports, e), n.l = !0, n.exports;
        }
        return e.m = u, e.c = t, e.d = function(u, t, r) {
            e.o(u, t) || Object.defineProperty(u, t, {
                enumerable: !0,
                get: r
            });
        }, e.r = function(u) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(u, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(u, "__esModule", {
                value: !0
            });
        }, e.t = function(u, t) {
            if (1 & t && (u = e(u)), 8 & t) return u;
            if (4 & t && "object" == typeof u && u && u.__esModule) return u;
            var r = Object.create(null);
            if (e.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: u
            }), 2 & t && "string" != typeof u) for(var n in u)e.d(r, n, (function(t) {
                return u[t];
            }).bind(null, n));
            return r;
        }, e.n = function(u) {
            var t = u && u.__esModule ? function() {
                return u.default;
            } : function() {
                return u;
            };
            return e.d(t, "a", t), t;
        }, e.o = function(u, t) {
            return Object.prototype.hasOwnProperty.call(u, t);
        }, e.p = "", e(e.s = 4);
    })([
        function(u, t, e) {
            "use strict";
            const r = {
            };
            for(let u1 = 0; u1 < 128; u1++)r[u1] = String.fromCharCode(u1);
            r["'".charCodeAt(0)] = "\\'", r['"'.charCodeAt(0)] = '\\"', r["\\".charCodeAt(0)] = "\\\\", r["\b".charCodeAt(0)] = "\\b", r["\f".charCodeAt(0)] = "\\f", r["\n".charCodeAt(0)] = "\\n", r["\r".charCodeAt(0)] = "\\r", r["\t".charCodeAt(0)] = "\\t", r["\v".charCodeAt(0)] = "\\v", t.abstract = function(u) {
                const t = u || "";
                return function() {
                    throw new Error("this method " + t + " is abstract! (it has no implementation in class " + this.constructor.name + ")");
                };
            }, t.assert = function(u, t) {
                if (!u) throw new Error(t);
            }, t.defineLazyProperty = function(u, t, e) {
                let r;
                Object.defineProperty(u, t, {
                    get () {
                        return r || (r = e.call(this)), r;
                    }
                });
            }, t.clone = function(u) {
                return u ? Object.assign({
                }, u) : u;
            }, t.repeatFn = function(u, t) {
                const e = [];
                for(; t-- > 0;)e.push(u());
                return e;
            }, t.repeatStr = function(u, t) {
                return new Array(t + 1).join(u);
            }, t.repeat = function(u, e) {
                return t.repeatFn(()=>u
                , e);
            }, t.getDuplicates = function(u) {
                const t = [];
                for(let e = 0; e < u.length; e++){
                    const r = u[e];
                    u.lastIndexOf(r) !== e && t.indexOf(r) < 0 && t.push(r);
                }
                return t;
            }, t.copyWithoutDuplicates = function(u) {
                const t = [];
                return u.forEach((u)=>{
                    t.indexOf(u) < 0 && t.push(u);
                }), t;
            }, t.isSyntactic = function(u) {
                const t = u[0];
                return t === t.toUpperCase();
            }, t.isLexical = function(u) {
                return !t.isSyntactic(u);
            }, t.padLeft = function(u, e, r) {
                const n = r || " ";
                return u.length < e ? t.repeatStr(n, e - u.length) + u : u;
            }, t.StringBuffer = function() {
                this.strings = [];
            }, t.StringBuffer.prototype.append = function(u) {
                this.strings.push(u);
            }, t.StringBuffer.prototype.contents = function() {
                return this.strings.join("");
            }, t.escapeChar = function(u, e) {
                const n = u.charCodeAt(0);
                return '"' !== u && "'" !== u || !e || u === e ? n < 128 ? r[n] : 128 <= n && n < 256 ? "\\x" + t.padLeft(n.toString(16), 2, "0") : "\\u" + t.padLeft(n.toString(16), 4, "0") : u;
            }, t.unescapeChar = function(u) {
                if ("\\" !== u.charAt(0)) return u;
                switch(u.charAt(1)){
                    case "b":
                        return "\b";
                    case "f":
                        return "\f";
                    case "n":
                        return "\n";
                    case "r":
                        return "\r";
                    case "t":
                        return "\t";
                    case "v":
                        return "\v";
                    case "x":
                        return String.fromCharCode(parseInt(u.substring(2, 4), 16));
                    case "u":
                        return String.fromCharCode(parseInt(u.substring(2, 6), 16));
                    default:
                        return u.charAt(1);
                }
            }, t.unexpectedObjToString = function(u) {
                if (null == u) return String(u);
                const t = Object.prototype.toString.call(u);
                try {
                    let e;
                    return e = u.constructor && u.constructor.name ? u.constructor.name : 0 === t.indexOf("[object ") ? t.slice(8, -1) : typeof u, e + ": " + JSON.stringify(String(u));
                } catch (u2) {
                    return t;
                }
            };
        },
        function(u, t, e) {
            "use strict";
            const r = e(16), n = e(0);
            class i {
                constructor(){
                    if (this.constructor === i) throw new Error("PExpr cannot be instantiated -- it's abstract");
                }
                withSource(u) {
                    return u && (this.source = u.trimmed()), this;
                }
            }
            const s = Object.create(i.prototype), o = Object.create(i.prototype);
            class a extends i {
                constructor(u){
                    super(), this.terms = u;
                }
            }
            class c extends i {
                constructor(u){
                    super(), this.expr = u;
                }
            }
            class l extends c {
            }
            class D extends c {
            }
            class p extends c {
            }
            l.prototype.operator = "*", D.prototype.operator = "+", p.prototype.operator = "?", l.prototype.minNumMatches = 0, D.prototype.minNumMatches = 1, p.prototype.minNumMatches = 0, l.prototype.maxNumMatches = Number.POSITIVE_INFINITY, D.prototype.maxNumMatches = Number.POSITIVE_INFINITY, p.prototype.maxNumMatches = 1;
            t.PExpr = i, t.any = s, t.end = o, t.Terminal = class extends i {
                constructor(u){
                    super(), this.obj = u;
                }
            }, t.Range = class extends i {
                constructor(u, t){
                    super(), this.from = u, this.to = t;
                }
            }, t.Param = class extends i {
                constructor(u){
                    super(), this.index = u;
                }
            }, t.Alt = a, t.Extend = class extends a {
                constructor(u, t, e){
                    super([
                        e,
                        u.rules[t].body
                    ]), this.superGrammar = u, this.name = t, this.body = e;
                }
            }, t.Splice = class extends a {
                constructor(u, t, e, r){
                    const n = u.rules[t].body;
                    super([
                        ...e,
                        n,
                        ...r
                    ]), this.superGrammar = u, this.ruleName = t, this.expansionPos = e.length;
                }
            }, t.Seq = class extends i {
                constructor(u){
                    super(), this.factors = u;
                }
            }, t.Iter = c, t.Star = l, t.Plus = D, t.Opt = p, t.Not = class extends i {
                constructor(u){
                    super(), this.expr = u;
                }
            }, t.Lookahead = class extends i {
                constructor(u){
                    super(), this.expr = u;
                }
            }, t.Lex = class extends i {
                constructor(u){
                    super(), this.expr = u;
                }
            }, t.Apply = class extends i {
                constructor(u, t = []){
                    super(), this.ruleName = u, this.args = t;
                }
                isSyntactic() {
                    return n.isSyntactic(this.ruleName);
                }
                toMemoKey() {
                    return this._memoKey || Object.defineProperty(this, "_memoKey", {
                        value: this.toString()
                    }), this._memoKey;
                }
            }, t.UnicodeChar = class extends i {
                constructor(u){
                    super(), this.category = u, this.pattern = r[u];
                }
            }, e(17), e(18), e(19), e(20), e(21), e(22), e(23), e(24), e(25), e(26), e(27), e(28), e(29), e(30);
        },
        function(u1, t, e) {
            "use strict";
            const r = e(1), n = e(11);
            function i(u, t) {
                let e;
                return t ? (e = new Error(t.getLineAndColumnMessage() + u), e.shortMessage = u, e.interval = t) : e = new Error(u), e;
            }
            u1.exports = {
                applicationOfSyntacticRuleFromLexicalContext: function(u, t) {
                    return i("Cannot apply syntactic rule " + u + " from here (inside a lexical context)", t.source);
                },
                cannotExtendUndeclaredRule: function(u, t, e) {
                    return i("Cannot extend rule " + u + " because it is not declared in " + t, e);
                },
                cannotOverrideUndeclaredRule: function(u, t, e) {
                    return i("Cannot override rule " + u + " because it is not declared in " + t, e);
                },
                duplicateGrammarDeclaration: function(u, t) {
                    return i("Grammar " + u.name + " is already declared in this namespace");
                },
                duplicateParameterNames: function(u, t, e) {
                    return i("Duplicate parameter names in rule " + u + ": " + t.join(", "), e);
                },
                duplicatePropertyNames: function(u) {
                    return i("Object pattern has duplicate property names: " + u.join(", "));
                },
                duplicateRuleDeclaration: function(u, t, e, r) {
                    let n = "Duplicate declaration for rule '" + u + "' in grammar '" + t + "'";
                    return t !== e && (n += " (originally declared in '" + e + "')"), i(n, r);
                },
                inconsistentArity: function(u, t, e, r) {
                    return i("Rule " + u + " involves an alternation which has inconsistent arity (expected " + t + ", got " + e + ")", r.source);
                },
                incorrectArgumentType: function(u, t) {
                    return i("Incorrect argument type: expected " + u, t.source);
                },
                intervalSourcesDontMatch: function() {
                    return i("Interval sources don't match");
                },
                invalidConstructorCall: function(u, t, e) {
                    return i("Attempt to invoke constructor " + t + " with invalid or unexpected arguments");
                },
                invalidParameter: function(u, t) {
                    return i("Invalid parameter to rule " + u + ": " + t + " has arity " + t.getArity() + ", but parameter expressions must have arity 1", t.source);
                },
                grammarSyntaxError: function(u) {
                    const t = new Error;
                    return Object.defineProperty(t, "message", {
                        enumerable: !0,
                        get: ()=>u.message
                    }), Object.defineProperty(t, "shortMessage", {
                        enumerable: !0,
                        get: ()=>"Expected " + u.getExpectedText()
                    }), t.interval = u.getInterval(), t;
                },
                kleeneExprHasNullableOperand: function(u, t) {
                    const e = t.length > 0 ? t[t.length - 1].args : [];
                    let n = "Nullable expression " + u.expr.substituteParams(e) + " is not allowed inside '" + u.operator + "' (possible infinite loop)";
                    if (t.length > 0) n += "\nApplication stack (most recent application last):\n" + t.map((u)=>new r.Apply(u.ruleName, u.args)
                    ).join("\n");
                    return i(n, u.expr.source);
                },
                missingSemanticAction: function(u, t, e, r) {
                    let n = r.slice(0, -1).map((u)=>{
                        const t = "  " + u[0].name + " > " + u[1];
                        return 3 === u.length ? t + " for '" + u[2] + "'" : t;
                    }).join("\n");
                    n += "\n  " + t + " > " + u;
                    let s = "";
                    "_iter" === u && (s = [
                        "\nNOTE: as of Ohm v16, there is no default action for iteration nodes — see ",
                        "  https://git.io/JRwtG for details."
                    ].join("\n"));
                    const o = i([
                        `Missing semantic action for '${u}' in ${e} '${t}'.${s}`,
                        "Action stack (most recent call last):",
                        n
                    ].join("\n"));
                    return o.name = "missingSemanticAction", o;
                },
                multipleSuperSplices: function(u) {
                    return i("'...' can appear at most once in a rule body", u.source);
                },
                undeclaredGrammar: function(u, t, e) {
                    return i(t ? "Grammar " + u + " is not declared in namespace " + n.toString(t) : "Undeclared grammar " + u, e);
                },
                undeclaredRule: function(u, t, e) {
                    return i("Rule " + u + " is not declared in grammar " + t, e);
                },
                wrongNumberOfArguments: function(u, t, e, r) {
                    return i("Wrong number of arguments for rule " + u + " (expected " + t + ", got " + e + ")", r.source);
                },
                wrongNumberOfParameters: function(u, t, e, r) {
                    return i("Wrong number of parameters for rule " + u + " (expected " + t + ", got " + e + ")", r);
                },
                throwErrors (u) {
                    if (1 === u.length) throw u[0];
                    if (u.length > 1) throw (function(u) {
                        const t = u.map((u)=>u.message
                        );
                        return i([
                            "Errors:"
                        ].concat(t).join("\n- "), u[0].interval);
                    })(u);
                }
            };
        },
        function(u, t, e) {
            "use strict";
            const r = e(0);
            function n(u, t, e) {
                const r = u.length;
                return (u.slice(0, e) + t + u.slice(e + t.length)).substr(0, r);
            }
            function i(...u) {
                const t = this, e = t.offset, i = r.repeatStr, s = new r.StringBuffer;
                s.append("Line " + t.lineNum + ", col " + t.colNum + ":\n");
                const o = function(u) {
                    let t = 0;
                    return u.map((u)=>{
                        const e = u.toString();
                        return t = Math.max(t, e.length), e;
                    }).map((u)=>r.padLeft(u, t)
                    );
                }([
                    null == t.prevLine ? 0 : t.lineNum - 1,
                    t.lineNum,
                    null == t.nextLine ? 0 : t.lineNum + 1
                ]), a = (u, t, e)=>{
                    s.append(e + o[u] + " | " + t + "\n");
                };
                null != t.prevLine && a(0, t.prevLine, "  "), a(1, t.line, "> ");
                const c = t.line.length;
                let l = i(" ", c + 1);
                for(let s1 = 0; s1 < u.length; ++s1){
                    let o = u[s1][0], a = u[s1][1];
                    r.assert(o >= 0 && o <= a, "range start must be >= 0 and <= end");
                    const D = e - t.colNum + 1;
                    o = Math.max(0, o - D), a = Math.min(a - D, c), l = n(l, i("~", a - o), o);
                }
                const D = 2 + o[1].length + 3;
                return s.append(i(" ", D)), l = n(l, "^", t.colNum - 1), s.append(l.replace(/ +$/, "") + "\n"), null != t.nextLine && a(2, t.nextLine, "  "), s.contents();
            }
            let s = [];
            t.awaitBuiltInRules = (u)=>{
                s.push(u);
            }, t.announceBuiltInRules = (u)=>{
                s.forEach((t)=>{
                    t(u);
                }), s = null;
            }, t.getLineAndColumn = (u, t)=>{
                let e = 1, r = 1, n = 0, s = 0, o = null, a = null, c = -1;
                for(; n < t;){
                    const t = u.charAt(n++);
                    "\n" === t ? (e++, r = 1, c = s, s = n) : "\r" !== t && r++;
                }
                let l = u.indexOf("\n", s);
                if (-1 === l) l = u.length;
                else {
                    const t = u.indexOf("\n", l + 1);
                    o = -1 === t ? u.slice(l) : u.slice(l, t), o = o.replace(/^\r?\n/, "").replace(/\r$/, "");
                }
                c >= 0 && (a = u.slice(c, s).replace(/\r?\n$/, ""));
                return {
                    offset: t,
                    lineNum: e,
                    colNum: r,
                    line: u.slice(s, l).replace(/\r$/, ""),
                    prevLine: a,
                    nextLine: o,
                    toString: i
                };
            }, t.getLineAndColumnMessage = function(u, e, ...r) {
                return t.getLineAndColumn(u, e).toString(...r);
            }, t.uniqueId = (()=>{
                let u = 0;
                return (t)=>"" + t + u++
                ;
            })();
        },
        function(u2, t2, e2) {
            "use strict";
            const r1 = e2(14), n = e2(5), i2 = e2(11), s = e2(0), o = e2(2), a = e2(1), c = e2(3), l = e2(37);
            let D;
            const p = Object.create(a.PExpr.prototype);
            function A(u1, t1, e1) {
                const i1 = new r1;
                let c, l, A, h = !1;
                return (e1 || D).createSemantics().addOperation("visit", {
                    Grammars: (u)=>u.children.map((u)=>u.visit()
                        )
                    ,
                    Grammar (u, e, r, n, s) {
                        const a = u.visit();
                        c = i1.newGrammar(a, t1), e.child(0) && e.child(0).visit(), n.children.map((u)=>u.visit()
                        );
                        const l = c.build();
                        if (l.source = this.source.trimmed(), a in t1) throw o.duplicateGrammarDeclaration(l, t1);
                        return t1[a] = l, l;
                    },
                    SuperGrammar (u, e) {
                        const r = e.visit();
                        if ("null" === r) c.withSuperGrammar(null);
                        else {
                            if (!t1 || !(r in t1)) throw o.undeclaredGrammar(r, t1, e.source);
                            c.withSuperGrammar(t1[r]);
                        }
                    },
                    Rule_define (u, t, e, r, i) {
                        l = u.visit(), A = t.children.map((u)=>u.visit()
                        )[0] || [], c.defaultStartRule || c.ensureSuperGrammar() === n.ProtoBuiltInRules || c.withDefaultStartRule(l);
                        const s = i.visit(), o = e.children.map((u)=>u.visit()
                        )[0], a = this.source.trimmed();
                        return c.define(l, A, s, o, a);
                    },
                    Rule_override (u, t, e, r) {
                        l = u.visit(), A = t.children.map((u)=>u.visit()
                        )[0] || [];
                        const n = this.source.trimmed();
                        c.ensureSuperGrammarRuleForOverriding(l, n), h = !0;
                        const i = r.visit();
                        return h = !1, c.override(l, A, i, null, n);
                    },
                    Rule_extend (u, t, e, r) {
                        l = u.visit(), A = t.children.map((u)=>u.visit()
                        )[0] || [];
                        const n = r.visit(), i = this.source.trimmed();
                        return c.extend(l, A, n, null, i);
                    },
                    RuleBody (u, t) {
                        const e = t.visit();
                        return i1.alt.apply(i1, e).withSource(this.source);
                    },
                    OverrideRuleBody (u, t) {
                        const e = t.visit(), r = e.indexOf(p);
                        if (r >= 0) {
                            const u = e.slice(0, r), t = e.slice(r + 1);
                            return t.forEach((u)=>{
                                if (u === p) throw o.multipleSuperSplices(u);
                            }), new a.Splice(c.superGrammar, l, u, t).withSource(this.source);
                        }
                        return i1.alt.apply(i1, e).withSource(this.source);
                    },
                    Formals: (u, t, e)=>t.visit()
                    ,
                    Params: (u, t, e)=>t.visit()
                    ,
                    Alt (u) {
                        const t = u.visit();
                        return i1.alt.apply(i1, t).withSource(this.source);
                    },
                    TopLevelTerm_inline (u, t) {
                        const e = l + "_" + t.visit(), r = u.visit(), n = this.source.trimmed(), s = !(c.superGrammar && c.superGrammar.rules[e]);
                        h && !s ? c.override(e, A, r, null, n) : c.define(e, A, r, null, n);
                        const o = A.map((u)=>i1.app(u)
                        );
                        return i1.app(e, o).withSource(r.source);
                    },
                    OverrideTopLevelTerm_superSplice: (u)=>p
                    ,
                    Seq (u) {
                        return i1.seq.apply(i1, u.children.map((u)=>u.visit()
                        )).withSource(this.source);
                    },
                    Iter_star (u, t) {
                        return i1.star(u.visit()).withSource(this.source);
                    },
                    Iter_plus (u, t) {
                        return i1.plus(u.visit()).withSource(this.source);
                    },
                    Iter_opt (u, t) {
                        return i1.opt(u.visit()).withSource(this.source);
                    },
                    Pred_not (u, t) {
                        return i1.not(t.visit()).withSource(this.source);
                    },
                    Pred_lookahead (u, t) {
                        return i1.lookahead(t.visit()).withSource(this.source);
                    },
                    Lex_lex (u, t) {
                        return i1.lex(t.visit()).withSource(this.source);
                    },
                    Base_application (u, t) {
                        const e = t.children.map((u)=>u.visit()
                        )[0] || [];
                        return i1.app(u.visit(), e).withSource(this.source);
                    },
                    Base_range (u, t, e) {
                        return i1.range(u.visit(), e.visit()).withSource(this.source);
                    },
                    Base_terminal (u) {
                        return i1.terminal(u.visit()).withSource(this.source);
                    },
                    Base_paren: (u, t, e)=>t.visit()
                    ,
                    ruleDescr: (u, t, e)=>t.visit()
                    ,
                    ruleDescrText (u) {
                        return this.sourceString.trim();
                    },
                    caseName: (u, t, e, r, n)=>e.visit()
                    ,
                    name (u, t) {
                        return this.sourceString;
                    },
                    nameFirst (u) {
                    },
                    nameRest (u) {
                    },
                    terminal: (u, t, e)=>t.children.map((u)=>u.visit()
                        ).join("")
                    ,
                    oneCharTerminal: (u, t, e)=>t.visit()
                    ,
                    terminalChar (u) {
                        return s.unescapeChar(this.sourceString);
                    },
                    escapeChar (u) {
                        return this.sourceString;
                    },
                    NonemptyListOf: (u, t, e)=>[
                            u.visit()
                        ].concat(e.children.map((u)=>u.visit()
                        ))
                    ,
                    EmptyListOf: ()=>[]
                    ,
                    _terminal () {
                        return this.sourceString;
                    }
                })(u1).visit();
            }
            function h(u, t) {
                const e = i2.extend(i2.asNamespace(t));
                if ("string" != typeof u) {
                    if (!(r = u).constructor || "function" != typeof r.constructor.isBuffer || !r.constructor.isBuffer(r)) throw new TypeError("Expected string as first argument, got " + s.unexpectedObjToString(u));
                    u = u.toString();
                }
                var r;
                return (function(u, t) {
                    const e = D.match(u, "Grammars");
                    if (e.failed()) throw o.grammarSyntaxError(e);
                    A(e, t);
                })(u, e), e;
            }
            u2.exports = {
                createNamespace: i2.createNamespace,
                grammar: function(u, t) {
                    const e = h(u, t), r = Object.keys(e);
                    if (0 === r.length) throw new Error("Missing grammar definition");
                    if (r.length > 1) {
                        const u = e[r[1]].source;
                        throw new Error(c.getLineAndColumnMessage(u.sourceString, u.startIdx) + "Found more than one grammar definition -- use ohm.grammars() instead.");
                    }
                    return e[r[0]];
                },
                grammars: h,
                grammarFromScriptElement: function(u) {
                    throw new Error("grammarFromScriptElement was removed in Ohm v16.0. See https://git.io/J0gnK for more info.");
                },
                grammarsFromScriptElements: function(u) {
                    throw new Error("grammarsFromScriptElements was removed in Ohm v16.0. See https://git.io/J0gnK for more info.");
                },
                makeRecipe: function(u) {
                    return "function" == typeof u ? u.call(new r1) : ("string" == typeof u && (u = JSON.parse(u)), (new r1).fromRecipe(u));
                },
                ohmGrammar: null,
                pexprs: a,
                util: c,
                extras: e2(38),
                version: l
            }, u2.exports._buildGrammar = A, n.BuiltInRules = e2(40), c.announceBuiltInRules(n.BuiltInRules), u2.exports.ohmGrammar = D = e2(41), n.initApplicationParser(D, A);
        },
        function(u1, t1, e1) {
            "use strict";
            const r = e1(15), n = e1(31), i = e1(34), s = e1(0), o = e1(2), a = e1(1), c = [
                "_iter",
                "_terminal",
                "_nonterminal",
                "_default"
            ];
            function l(u) {
                return Object.keys(u.rules).sort().map((t)=>u.rules[t]
                );
            }
            function D(u, t, e, r) {
                if (this.name = u, this.superGrammar = t, this.rules = e, r) {
                    if (!(r in e)) throw new Error("Invalid start rule: '" + r + "' is not a rule in grammar '" + u + "'");
                    this.defaultStartRule = r;
                }
            }
            let p, A;
            D.initApplicationParser = function(u, t) {
                p = u, A = t;
            }, D.prototype = {
                matcher () {
                    return new n(this);
                },
                isBuiltIn () {
                    return this === D.ProtoBuiltInRules || this === D.BuiltInRules;
                },
                equals (u) {
                    if (this === u) return !0;
                    if (null == u || this.name !== u.name || this.defaultStartRule !== u.defaultStartRule || this.superGrammar !== u.superGrammar && !this.superGrammar.equals(u.superGrammar)) return !1;
                    const t = l(this), e = l(u);
                    return t.length === e.length && t.every((u, t)=>u.description === e[t].description && u.formals.join(",") === e[t].formals.join(",") && u.body.toString() === e[t].body.toString()
                    );
                },
                match (u, t) {
                    const e = this.matcher();
                    return e.replaceInputRange(0, 0, u), e.match(t);
                },
                trace (u, t) {
                    const e = this.matcher();
                    return e.replaceInputRange(0, 0, u), e.trace(t);
                },
                createSemantics () {
                    return i.createSemantics(this);
                },
                extendSemantics (u) {
                    return i.createSemantics(this, u._getSemantics());
                },
                _checkTopDownActionDict (u, t, e) {
                    const r = [];
                    for(const u in e){
                        const t = e[u];
                        if (!c.includes(u) && !(u in this.rules)) {
                            r.push(`'${u}' is not a valid semantic action for '${this.name}'`);
                            continue;
                        }
                        if ("function" != typeof t) {
                            r.push(`'${u}' must be a function in an action dictionary for '${this.name}'`);
                            continue;
                        }
                        const n = t.length, i = this._topDownActionArity(u);
                        if (n !== i) {
                            let t;
                            t = "_iter" === u || "_nonterminal" === u ? `it should use a rest parameter, e.g. \`${u}(...children) {}\`. NOTE: this is new in Ohm v16 — see https://git.io/Jz4CI for details.` : `expected ${i}, got ${n}`, r.push(`Semantic action '${u}' has the wrong arity: ${t}`);
                        }
                    }
                    if (r.length > 0) {
                        const e = r.map((u)=>"- " + u
                        ), n = new Error([
                            `Found errors in the action dictionary of the '${t}' ${u}:`,
                            ...e
                        ].join("\n"));
                        throw n.problems = r, n;
                    }
                },
                _topDownActionArity (u) {
                    return c.includes(u) ? 0 : this.rules[u].body.getArity();
                },
                _inheritsFrom (u) {
                    let t = this.superGrammar;
                    for(; t;){
                        if (t.equals(u, !0)) return !0;
                        t = t.superGrammar;
                    }
                    return !1;
                },
                toRecipe (u) {
                    const t = {
                    };
                    this.source && (t.source = this.source.contents);
                    let e = null;
                    this.defaultStartRule && (e = this.defaultStartRule);
                    const r = {
                    };
                    Object.keys(this.rules).forEach((u)=>{
                        const t = this.rules[u], e = t.body, n = !this.superGrammar || !this.superGrammar.rules[u];
                        let i;
                        i = n ? "define" : e instanceof a.Extend ? "extend" : "override";
                        const s = {
                        };
                        if (t.source && this.source) {
                            const u = t.source.relativeTo(this.source);
                            s.sourceInterval = [
                                u.startIdx,
                                u.endIdx
                            ];
                        }
                        const o = n ? t.description : null, c = e.outputRecipe(t.formals, this.source);
                        r[u] = [
                            i,
                            s,
                            o,
                            t.formals,
                            c
                        ];
                    });
                    let n = "null";
                    u ? n = u : this.superGrammar && !this.superGrammar.isBuiltIn() && (n = this.superGrammar.toRecipe());
                    const i = [
                        ...[
                            "grammar",
                            t,
                            this.name
                        ].map(JSON.stringify),
                        n,
                        ...[
                            e,
                            r
                        ].map(JSON.stringify)
                    ];
                    return `[${i.join(",")}]`.replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
                },
                toOperationActionDictionaryTemplate () {
                    return this._toOperationOrAttributeActionDictionaryTemplate();
                },
                toAttributeActionDictionaryTemplate () {
                    return this._toOperationOrAttributeActionDictionaryTemplate();
                },
                _toOperationOrAttributeActionDictionaryTemplate () {
                    const u = new s.StringBuffer;
                    u.append("{");
                    let t = !0;
                    for(const e in this.rules){
                        const r = this.rules[e].body;
                        t ? t = !1 : u.append(","), u.append("\n"), u.append("  "), this.addSemanticActionTemplate(e, r, u);
                    }
                    return u.append("\n}"), u.contents();
                },
                addSemanticActionTemplate (u, t, e) {
                    e.append(u), e.append(": function(");
                    const r = this._topDownActionArity(u);
                    e.append(s.repeat("_", r).join(", ")), e.append(") {\n"), e.append("  }");
                },
                parseApplication (u) {
                    let t;
                    if (-1 === u.indexOf("<")) t = new a.Apply(u);
                    else {
                        const e = p.match(u, "Base_application");
                        t = A(e, {
                        });
                    }
                    if (!(t.ruleName in this.rules)) throw o.undeclaredRule(t.ruleName, this.name);
                    const e = this.rules[t.ruleName].formals;
                    if (e.length !== t.args.length) {
                        const u = this.rules[t.ruleName].source;
                        throw o.wrongNumberOfParameters(t.ruleName, e.length, t.args.length, u);
                    }
                    return t;
                }
            }, D.ProtoBuiltInRules = new D("ProtoBuiltInRules", void 0, {
                any: {
                    body: a.any,
                    formals: [],
                    description: "any character",
                    primitive: !0
                },
                end: {
                    body: a.end,
                    formals: [],
                    description: "end of input",
                    primitive: !0
                },
                caseInsensitive: {
                    body: new r(new a.Param(0)),
                    formals: [
                        "str"
                    ],
                    primitive: !0
                },
                lower: {
                    body: new a.UnicodeChar("Ll"),
                    formals: [],
                    description: "a lowercase letter",
                    primitive: !0
                },
                upper: {
                    body: new a.UnicodeChar("Lu"),
                    formals: [],
                    description: "an uppercase letter",
                    primitive: !0
                },
                unicodeLtmo: {
                    body: new a.UnicodeChar("Ltmo"),
                    formals: [],
                    description: "a Unicode character in Lt, Lm, or Lo",
                    primitive: !0
                },
                spaces: {
                    body: new a.Star(new a.Apply("space")),
                    formals: []
                },
                space: {
                    body: new a.Range("\0", " "),
                    formals: [],
                    description: "a space"
                }
            }), u1.exports = D;
        },
        function(u, t, e) {
            "use strict";
            const r = e(0);
            let n = !1;
            class i {
                constructor(u, t, e){
                    this.grammar = u, this.ctorName = t, this.matchLength = e;
                }
                numChildren() {
                    return this.children ? this.children.length : 0;
                }
                childAt(u) {
                    if (this.children) return this.children[u];
                }
                indexOfChild(u) {
                    return this.children.indexOf(u);
                }
                hasChildren() {
                    return this.numChildren() > 0;
                }
                hasNoChildren() {
                    return !this.hasChildren();
                }
                onlyChild() {
                    if (1 !== this.numChildren()) throw new Error("cannot get only child of a node of type " + this.ctorName + " (it has " + this.numChildren() + " children)");
                    return this.firstChild();
                }
                firstChild() {
                    if (this.hasNoChildren()) throw new Error("cannot get first child of a " + this.ctorName + " node, which has no children");
                    return this.childAt(0);
                }
                lastChild() {
                    if (this.hasNoChildren()) throw new Error("cannot get last child of a " + this.ctorName + " node, which has no children");
                    return this.childAt(this.numChildren() - 1);
                }
                childBefore(u) {
                    const t = this.indexOfChild(u);
                    if (t < 0) throw new Error("Node.childBefore() called w/ an argument that is not a child");
                    if (0 === t) throw new Error("cannot get child before first child");
                    return this.childAt(t - 1);
                }
                childAfter(u) {
                    const t = this.indexOfChild(u);
                    if (t < 0) throw new Error("Node.childAfter() called w/ an argument that is not a child");
                    if (t === this.numChildren() - 1) throw new Error("cannot get child after last child");
                    return this.childAt(t + 1);
                }
                isTerminal() {
                    return !1;
                }
                isNonterminal() {
                    return !1;
                }
                isIteration() {
                    return !1;
                }
                isOptional() {
                    return !1;
                }
                toJSON() {
                    return {
                        [this.ctorName]: this.children
                    };
                }
            }
            u.exports = {
                Node: i,
                TerminalNode: class extends i {
                    constructor(u, t){
                        super(u, "_terminal", t ? t.length : 0), this._value = t;
                    }
                    isTerminal() {
                        return !0;
                    }
                    toJSON() {
                        return {
                            [this.ctorName]: this._value
                        };
                    }
                    get primitiveValue() {
                        return n || (console.warn("Warning: primitiveValue is deprecated and will be removed in a future version of Ohm. Use sourceString instead."), n = !0), this._value;
                    }
                },
                NonterminalNode: class extends i {
                    constructor(u, t, e, r, n){
                        super(u, t, n), this.children = e, this.childOffsets = r;
                    }
                    isNonterminal() {
                        return !0;
                    }
                    isLexical() {
                        return r.isLexical(this.ctorName);
                    }
                    isSyntactic() {
                        return r.isSyntactic(this.ctorName);
                    }
                },
                IterationNode: class extends i {
                    constructor(u, t, e, r, n){
                        super(u, "_iter", r), this.children = t, this.childOffsets = e, this.optional = n;
                    }
                    isIteration() {
                        return !0;
                    }
                    isOptional() {
                        return this.optional;
                    }
                }
            };
        },
        function(u1, t1, e) {
            "use strict";
            const r = e(0).assert, n = e(2), i = e(3);
            function s(u, t, e) {
                this.sourceString = u, this.startIdx = t, this.endIdx = e;
            }
            s.coverage = function() {
                const u = arguments[0].sourceString;
                let t = arguments[0].startIdx, e = arguments[0].endIdx;
                for(let r = 1; r < arguments.length; r++){
                    if (arguments[r].sourceString !== u) throw n.intervalSourcesDontMatch();
                    t = Math.min(t, arguments[r].startIdx), e = Math.max(e, arguments[r].endIdx);
                }
                return new s(u, t, e);
            }, s.prototype = {
                coverageWith () {
                    const u = Array.prototype.slice.call(arguments);
                    return u.push(this), s.coverage.apply(void 0, u);
                },
                collapsedLeft () {
                    return new s(this.sourceString, this.startIdx, this.startIdx);
                },
                collapsedRight () {
                    return new s(this.sourceString, this.endIdx, this.endIdx);
                },
                getLineAndColumn () {
                    return i.getLineAndColumn(this.sourceString, this.startIdx);
                },
                getLineAndColumnMessage () {
                    const u = [
                        this.startIdx,
                        this.endIdx
                    ];
                    return i.getLineAndColumnMessage(this.sourceString, this.startIdx, u);
                },
                minus (u) {
                    if (this.sourceString !== u.sourceString) throw n.intervalSourcesDontMatch();
                    return this.startIdx === u.startIdx && this.endIdx === u.endIdx ? [] : this.startIdx < u.startIdx && u.endIdx < this.endIdx ? [
                        new s(this.sourceString, this.startIdx, u.startIdx),
                        new s(this.sourceString, u.endIdx, this.endIdx)
                    ] : this.startIdx < u.endIdx && u.endIdx < this.endIdx ? [
                        new s(this.sourceString, u.endIdx, this.endIdx)
                    ] : this.startIdx < u.startIdx && u.startIdx < this.endIdx ? [
                        new s(this.sourceString, this.startIdx, u.startIdx)
                    ] : [
                        this
                    ];
                },
                relativeTo (u) {
                    if (this.sourceString !== u.sourceString) throw n.intervalSourcesDontMatch();
                    return r(this.startIdx >= u.startIdx && this.endIdx <= u.endIdx, "other interval does not cover this one"), new s(this.sourceString, this.startIdx - u.startIdx, this.endIdx - u.startIdx);
                },
                trimmed () {
                    const u = this.contents, t = this.startIdx + u.match(/^\s*/)[0].length, e = this.endIdx - u.match(/\s*$/)[0].length;
                    return new s(this.sourceString, t, e);
                },
                subInterval (u, t) {
                    const e = this.startIdx + u;
                    return new s(this.sourceString, e, e + t);
                }
            }, Object.defineProperties(s.prototype, {
                contents: {
                    get () {
                        return void 0 === this._contents && (this._contents = this.sourceString.slice(this.startIdx, this.endIdx)), this._contents;
                    },
                    enumerable: !0
                },
                length: {
                    get () {
                        return this.endIdx - this.startIdx;
                    },
                    enumerable: !0
                }
            }), u1.exports = s;
        },
        function(u1, t1, e) {
            "use strict";
            const r = e(7);
            function n(u) {
                this.source = u, this.pos = 0, this.examinedLength = 0;
            }
            n.prototype = {
                atEnd () {
                    const u = this.pos === this.source.length;
                    return this.examinedLength = Math.max(this.examinedLength, this.pos + 1), u;
                },
                next () {
                    const u = this.source[this.pos++];
                    return this.examinedLength = Math.max(this.examinedLength, this.pos), u;
                },
                matchString (u, t) {
                    let e;
                    if (t) {
                        for(e = 0; e < u.length; e++){
                            const t = this.next(), r = u[e];
                            if (null == t || t.toUpperCase() !== r.toUpperCase()) return !1;
                        }
                        return !0;
                    }
                    for(e = 0; e < u.length; e++)if (this.next() !== u[e]) return !1;
                    return !0;
                },
                sourceSlice (u, t) {
                    return this.source.slice(u, t);
                },
                interval (u, t) {
                    return new r(this.source, u, t || this.pos);
                }
            }, u1.exports = n;
        },
        function(u, t, e) {
            "use strict";
            const r = e(0), n = e(3), i = e(7);
            function s(u, t, e, i, s, o, a) {
                this.matcher = u, this.input = t, this.startExpr = e, this._cst = i, this._cstOffset = s, this._rightmostFailurePosition = o, this._rightmostFailures = a, this.failed() && (r.defineLazyProperty(this, "message", function() {
                    const u = "Expected " + this.getExpectedText();
                    return n.getLineAndColumnMessage(this.input, this.getRightmostFailurePosition()) + u;
                }), r.defineLazyProperty(this, "shortMessage", function() {
                    const u = "expected " + this.getExpectedText(), t = n.getLineAndColumn(this.input, this.getRightmostFailurePosition());
                    return "Line " + t.lineNum + ", col " + t.colNum + ": " + u;
                }));
            }
            s.prototype.succeeded = function() {
                return !!this._cst;
            }, s.prototype.failed = function() {
                return !this.succeeded();
            }, s.prototype.getRightmostFailurePosition = function() {
                return this._rightmostFailurePosition;
            }, s.prototype.getRightmostFailures = function() {
                if (!this._rightmostFailures) {
                    this.matcher.setInput(this.input);
                    const u = this.matcher._match(this.startExpr, !1, this.getRightmostFailurePosition());
                    this._rightmostFailures = u.getRightmostFailures();
                }
                return this._rightmostFailures;
            }, s.prototype.toString = function() {
                return this.succeeded() ? "[match succeeded]" : "[match failed at position " + this.getRightmostFailurePosition() + "]";
            }, s.prototype.getExpectedText = function() {
                if (this.succeeded()) throw new Error("cannot get expected text of a successful MatchResult");
                const u = new r.StringBuffer;
                let t = this.getRightmostFailures();
                t = t.filter((u)=>!u.isFluffy()
                );
                for(let e = 0; e < t.length; e++)e > 0 && (e === t.length - 1 ? u.append(t.length > 2 ? ", or " : " or ") : u.append(", ")), u.append(t[e].toString());
                return u.contents();
            }, s.prototype.getInterval = function() {
                const u = this.getRightmostFailurePosition();
                return new i(this.input, u, u);
            }, u.exports = s;
        },
        function(u, t, e) {
            "use strict";
            function r(u, t, e) {
                if (!function(u) {
                    return "description" === u || "string" === u || "code" === u;
                }(e)) throw new Error("invalid Failure type: " + e);
                this.pexpr = u, this.text = t, this.type = e, this.fluffy = !1;
            }
            r.prototype.getPExpr = function() {
                return this.pexpr;
            }, r.prototype.getText = function() {
                return this.text;
            }, r.prototype.getType = function() {
                return this.type;
            }, r.prototype.isDescription = function() {
                return "description" === this.type;
            }, r.prototype.isStringTerminal = function() {
                return "string" === this.type;
            }, r.prototype.isCode = function() {
                return "code" === this.type;
            }, r.prototype.isFluffy = function() {
                return this.fluffy;
            }, r.prototype.makeFluffy = function() {
                this.fluffy = !0;
            }, r.prototype.clearFluffy = function() {
                this.fluffy = !1;
            }, r.prototype.subsumes = function(u) {
                return this.getText() === u.getText() && this.type === u.type && (!this.isFluffy() || this.isFluffy() && u.isFluffy());
            }, r.prototype.toString = function() {
                return "string" === this.type ? JSON.stringify(this.getText()) : this.getText();
            }, r.prototype.clone = function() {
                const u = new r(this.pexpr, this.text, this.type);
                return this.isFluffy() && u.makeFluffy(), u;
            }, r.prototype.toKey = function() {
                return this.toString() + "#" + this.type;
            }, u.exports = r;
        },
        function(u, t, e) {
            "use strict";
            function r() {
            }
            r.prototype = Object.create(null), r.asNamespace = function(u) {
                return u instanceof r ? u : r.createNamespace(u);
            }, r.createNamespace = function(u) {
                return r.extend(r.prototype, u);
            }, r.extend = function(u, t) {
                if (u !== r.prototype && !(u instanceof r)) throw new TypeError("not a Namespace object: " + u);
                const e = Object.create(u, {
                    constructor: {
                        value: r,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                });
                return Object.assign(e, t);
            }, r.toString = function(u) {
                return Object.prototype.toString.call(u);
            }, u.exports = r;
        },
        function(u2, t, e) {
            "use strict";
            const r = e(7), n = e(0), i = {
                succeeded: 1,
                isRootNode: 2,
                isImplicitSpaces: 4,
                isMemoized: 8,
                isHeadOfLeftRecursion: 16,
                terminatesLR: 32
            };
            function s(u) {
                return "string" == typeof u ? u.replace(/ /g, "⋅").replace(/\t/g, "␉").replace(/\n/g, "␊").replace(/\r/g, "␍") : String(u);
            }
            function o(u, t, e, n, s, o, a) {
                this.input = u, this.pos = this.pos1 = t, this.pos2 = e, this.source = new r(u, t, e), this.expr = n, this.bindings = o, this.children = a || [], this.terminatingLREntry = null, this._flags = s ? i.succeeded : 0;
            }
            o.prototype.SKIP = {
            }, Object.defineProperty(o.prototype, "displayString", {
                get () {
                    return this.expr.toDisplayString();
                }
            }), Object.keys(i).forEach((u1)=>{
                const t = i[u1];
                Object.defineProperty(o.prototype, u1, {
                    get () {
                        return 0 != (this._flags & t);
                    },
                    set (u) {
                        u ? this._flags |= t : this._flags &= ~t;
                    }
                });
            }), o.prototype.clone = function() {
                return this.cloneWithExpr(this.expr);
            }, o.prototype.cloneWithExpr = function(u) {
                const t = new o(this.input, this.pos, this.pos2, u, this.succeeded, this.bindings, this.children);
                return t.isHeadOfLeftRecursion = this.isHeadOfLeftRecursion, t.isImplicitSpaces = this.isImplicitSpaces, t.isMemoized = this.isMemoized, t.isRootNode = this.isRootNode, t.terminatesLR = this.terminatesLR, t.terminatingLREntry = this.terminatingLREntry, t;
            }, o.prototype.recordLRTermination = function(u, t) {
                this.terminatingLREntry = new o(this.input, this.pos, this.pos2, this.expr, !1, [
                    t
                ], [
                    u
                ]), this.terminatingLREntry.terminatesLR = !0;
            }, o.prototype.walk = function(u, t) {
                let e = u;
                function r(u, n, i) {
                    let s = !0;
                    e.enter && e.enter.call(t, u, n, i) === o.prototype.SKIP && (s = !1), s && (u.children.forEach((t)=>{
                        r(t, u, i + 1);
                    }), e.exit && e.exit.call(t, u, n, i));
                }
                "function" == typeof e && (e = {
                    enter: e
                }), this.isRootNode ? this.children.forEach((u)=>{
                    r(u, null, 0);
                }) : r(this, null, 0);
            }, o.prototype.toString = function() {
                const u = new n.StringBuffer;
                return this.walk((t, e, r)=>{
                    if (!t) return this.SKIP;
                    if ("Alt" !== t.expr.constructor.name) {
                        var i;
                        if (u.append(function(u, t, e) {
                            const r = s(u.slice(t, t + e));
                            return r.length < e ? r + n.repeat(" ", e - r.length).join("") : r;
                        }(t.input, t.pos, 10) + (i = 2 * r + 1, n.repeat(" ", i).join(""))), u.append((t.succeeded ? "✓" : "✗") + " " + t.displayString), t.isHeadOfLeftRecursion && u.append(" (LR)"), t.succeeded) {
                            const e = s(t.source.contents);
                            u.append(" ⇒  "), u.append("string" == typeof e ? '"' + e + '"' : e);
                        }
                        u.append("\n");
                    }
                }), u.contents();
            }, u2.exports = o;
        },
        function(u1, t1, e1) {
            "use strict";
            const r = e1(1), n = e1(9), i = e1(5), s = {
                _terminal () {
                    return this.sourceString;
                },
                _nonterminal (...u) {
                    const t = this._node.ctorName, e = this.args.mapping;
                    if (!e.hasOwnProperty(t)) {
                        if (this._node instanceof r.Alt || this._node instanceof r.Apply) return u[0].toAST(e);
                        if (this.isLexical()) return this.sourceString;
                        const t = u.filter((u)=>!u.isTerminal()
                        );
                        if (1 === t.length) return t[0].toAST(e);
                    }
                    if ("number" == typeof e[t]) return u[e[t]].toAST(e);
                    const n = e[t] || u, i = {
                        type: t
                    };
                    for(const r1 in n){
                        const n = e[t] && e[t][r1];
                        "number" == typeof n ? i[r1] = u[n].toAST(e) : "string" == typeof n || "boolean" == typeof n || null === n ? i[r1] = n : "object" == typeof n && n instanceof Number ? i[r1] = Number(n) : "function" == typeof n ? i[r1] = n.call(this, u) : void 0 === n && (u[r1] && !u[r1].isTerminal() ? i[r1] = u[r1].toAST(e) : delete i[r1]);
                    }
                    return i;
                },
                _iter (...u) {
                    return this._node.isOptional() ? 0 === this.numChildren ? null : u[0].toAST(this.args.mapping) : u.map(function(u) {
                        return u.toAST(this.args.mapping);
                    }, this);
                },
                NonemptyListOf (u, t, e) {
                    return [
                        u.toAST(this.args.mapping)
                    ].concat(e.toAST(this.args.mapping));
                },
                EmptyListOf: ()=>[]
            };
            u1.exports = {
                helper: function(u, t) {
                    if (!(u instanceof n) || u.failed()) throw new Error("toAST() expects a succesfull MatchResult as first parameter");
                    t = Object.assign({
                    }, t);
                    const e = Object.assign({
                    }, s);
                    for(const u2 in t)"function" == typeof t[u2] && (e[u2] = t[u2], delete t[u2]);
                    return u._cst.grammar.createSemantics().addOperation("toAST(mapping)", e)(u).toAST(t);
                },
                semantics: function(u) {
                    if (!(u instanceof i)) throw new Error("semanticsToAST() expects a Grammar as parameter");
                    return u.createSemantics().addOperation("toAST(mapping)", s);
                }
            };
        },
        function(u1, t1, e1) {
            "use strict";
            const r = e1(5), n = e1(36), i1 = e1(1);
            function s1() {
            }
            s1.prototype = {
                currentDecl: null,
                currentRuleName: null,
                newGrammar: (u)=>new n(u)
                ,
                grammar (u, t, e, i, s) {
                    const o = new n(t);
                    return e && o.withSuperGrammar(e instanceof r ? e : this.fromRecipe(e)), i && o.withDefaultStartRule(i), u && u.source && o.withSource(u.source), this.currentDecl = o, Object.keys(s).forEach((u)=>{
                        this.currentRuleName = u;
                        const t = s[u], e = t[0], r = t[1], n = t[2], i = t[3], a = this.fromRecipe(t[4]);
                        let c;
                        o.source && r && r.sourceInterval && (c = o.source.subInterval(r.sourceInterval[0], r.sourceInterval[1] - r.sourceInterval[0])), o[e](u, i, a, n, c);
                    }), this.currentRuleName = this.currentDecl = null, o.build();
                },
                terminal: (u)=>new i1.Terminal(u)
                ,
                range: (u, t)=>new i1.Range(u, t)
                ,
                param: (u)=>new i1.Param(u)
                ,
                alt () {
                    let u = [];
                    for(let t = 0; t < arguments.length; t++){
                        let e = arguments[t];
                        e instanceof i1.PExpr || (e = this.fromRecipe(e)), e instanceof i1.Alt ? u = u.concat(e.terms) : u.push(e);
                    }
                    return 1 === u.length ? u[0] : new i1.Alt(u);
                },
                seq () {
                    let u = [];
                    for(let t = 0; t < arguments.length; t++){
                        let e = arguments[t];
                        e instanceof i1.PExpr || (e = this.fromRecipe(e)), e instanceof i1.Seq ? u = u.concat(e.factors) : u.push(e);
                    }
                    return 1 === u.length ? u[0] : new i1.Seq(u);
                },
                star (u) {
                    return u instanceof i1.PExpr || (u = this.fromRecipe(u)), new i1.Star(u);
                },
                plus (u) {
                    return u instanceof i1.PExpr || (u = this.fromRecipe(u)), new i1.Plus(u);
                },
                opt (u) {
                    return u instanceof i1.PExpr || (u = this.fromRecipe(u)), new i1.Opt(u);
                },
                not (u) {
                    return u instanceof i1.PExpr || (u = this.fromRecipe(u)), new i1.Not(u);
                },
                la (u) {
                    return this.lookahead(u);
                },
                lookahead (u) {
                    return u instanceof i1.PExpr || (u = this.fromRecipe(u)), new i1.Lookahead(u);
                },
                lex (u) {
                    return u instanceof i1.PExpr || (u = this.fromRecipe(u)), new i1.Lex(u);
                },
                app (u, t) {
                    return t && t.length > 0 && (t = t.map(function(u) {
                        return u instanceof i1.PExpr ? u : this.fromRecipe(u);
                    }, this)), new i1.Apply(u, t);
                },
                splice (u, t) {
                    return new i1.Splice(this.currentDecl.superGrammar, this.currentRuleName, u.map((u)=>this.fromRecipe(u)
                    ), t.map((u)=>this.fromRecipe(u)
                    ));
                },
                fromRecipe (u) {
                    const t = this[u[0]].apply(this, "grammar" === u[0] ? u.slice(1) : u.slice(2)), e = u[1];
                    return e && e.sourceInterval && this.currentDecl && t.withSource(this.currentDecl.sourceInterval.apply(this.currentDecl, e.sourceInterval)), t;
                }
            }, u1.exports = s1;
        },
        function(u, t, e) {
            "use strict";
            const r = e(10), n = e(6).TerminalNode, i = e(0).assert, { PExpr: s , Terminal: o  } = e(1);
            class a extends s {
                constructor(u){
                    super(), this.obj = u;
                }
                _getString(u) {
                    const t = u.currentApplication().args[this.obj.index];
                    return i(t instanceof o, "expected a Terminal expression"), t.obj;
                }
                allowsSkippingPrecedingSpace() {
                    return !0;
                }
                eval(u) {
                    const t = u.inputStream, e = t.pos, r = this._getString(u);
                    return t.matchString(r, !0) ? (u.pushBinding(new n(u.grammar, r), e), !0) : (u.processFailure(e, this), !1);
                }
                getArity() {
                    return 1;
                }
                substituteParams(u) {
                    return new a(this.obj.substituteParams(u));
                }
                toDisplayString() {
                    return this.obj.toDisplayString() + " (case-insensitive)";
                }
                toFailure(u) {
                    return new r(this, this.obj.toFailure(u) + " (case-insensitive)", "description");
                }
                _isNullable(u, t) {
                    return this.obj._isNullable(u, t);
                }
            }
            u.exports = a;
        },
        function(u, t) {
            u.exports = {
                Lu: /[A-Z\xC0-\xD6\xD8-\xDE\u0100\u0102\u0104\u0106\u0108\u010A\u010C\u010E\u0110\u0112\u0114\u0116\u0118\u011A\u011C\u011E\u0120\u0122\u0124\u0126\u0128\u012A\u012C\u012E\u0130\u0132\u0134\u0136\u0139\u013B\u013D\u013F\u0141\u0143\u0145\u0147\u014A\u014C\u014E\u0150\u0152\u0154\u0156\u0158\u015A\u015C\u015E\u0160\u0162\u0164\u0166\u0168\u016A\u016C\u016E\u0170\u0172\u0174\u0176\u0178\u0179\u017B\u017D\u0181\u0182\u0184\u0186\u0187\u0189-\u018B\u018E-\u0191\u0193\u0194\u0196-\u0198\u019C\u019D\u019F\u01A0\u01A2\u01A4\u01A6\u01A7\u01A9\u01AC\u01AE\u01AF\u01B1-\u01B3\u01B5\u01B7\u01B8\u01BC\u01C4\u01C7\u01CA\u01CD\u01CF\u01D1\u01D3\u01D5\u01D7\u01D9\u01DB\u01DE\u01E0\u01E2\u01E4\u01E6\u01E8\u01EA\u01EC\u01EE\u01F1\u01F4\u01F6-\u01F8\u01FA\u01FC\u01FE\u0200\u0202\u0204\u0206\u0208\u020A\u020C\u020E\u0210\u0212\u0214\u0216\u0218\u021A\u021C\u021E\u0220\u0222\u0224\u0226\u0228\u022A\u022C\u022E\u0230\u0232\u023A\u023B\u023D\u023E\u0241\u0243-\u0246\u0248\u024A\u024C\u024E\u0370\u0372\u0376\u037F\u0386\u0388-\u038A\u038C\u038E\u038F\u0391-\u03A1\u03A3-\u03AB\u03CF\u03D2-\u03D4\u03D8\u03DA\u03DC\u03DE\u03E0\u03E2\u03E4\u03E6\u03E8\u03EA\u03EC\u03EE\u03F4\u03F7\u03F9\u03FA\u03FD-\u042F\u0460\u0462\u0464\u0466\u0468\u046A\u046C\u046E\u0470\u0472\u0474\u0476\u0478\u047A\u047C\u047E\u0480\u048A\u048C\u048E\u0490\u0492\u0494\u0496\u0498\u049A\u049C\u049E\u04A0\u04A2\u04A4\u04A6\u04A8\u04AA\u04AC\u04AE\u04B0\u04B2\u04B4\u04B6\u04B8\u04BA\u04BC\u04BE\u04C0\u04C1\u04C3\u04C5\u04C7\u04C9\u04CB\u04CD\u04D0\u04D2\u04D4\u04D6\u04D8\u04DA\u04DC\u04DE\u04E0\u04E2\u04E4\u04E6\u04E8\u04EA\u04EC\u04EE\u04F0\u04F2\u04F4\u04F6\u04F8\u04FA\u04FC\u04FE\u0500\u0502\u0504\u0506\u0508\u050A\u050C\u050E\u0510\u0512\u0514\u0516\u0518\u051A\u051C\u051E\u0520\u0522\u0524\u0526\u0528\u052A\u052C\u052E\u0531-\u0556\u10A0-\u10C5\u10C7\u10CD\u13A0-\u13F5\u1E00\u1E02\u1E04\u1E06\u1E08\u1E0A\u1E0C\u1E0E\u1E10\u1E12\u1E14\u1E16\u1E18\u1E1A\u1E1C\u1E1E\u1E20\u1E22\u1E24\u1E26\u1E28\u1E2A\u1E2C\u1E2E\u1E30\u1E32\u1E34\u1E36\u1E38\u1E3A\u1E3C\u1E3E\u1E40\u1E42\u1E44\u1E46\u1E48\u1E4A\u1E4C\u1E4E\u1E50\u1E52\u1E54\u1E56\u1E58\u1E5A\u1E5C\u1E5E\u1E60\u1E62\u1E64\u1E66\u1E68\u1E6A\u1E6C\u1E6E\u1E70\u1E72\u1E74\u1E76\u1E78\u1E7A\u1E7C\u1E7E\u1E80\u1E82\u1E84\u1E86\u1E88\u1E8A\u1E8C\u1E8E\u1E90\u1E92\u1E94\u1E9E\u1EA0\u1EA2\u1EA4\u1EA6\u1EA8\u1EAA\u1EAC\u1EAE\u1EB0\u1EB2\u1EB4\u1EB6\u1EB8\u1EBA\u1EBC\u1EBE\u1EC0\u1EC2\u1EC4\u1EC6\u1EC8\u1ECA\u1ECC\u1ECE\u1ED0\u1ED2\u1ED4\u1ED6\u1ED8\u1EDA\u1EDC\u1EDE\u1EE0\u1EE2\u1EE4\u1EE6\u1EE8\u1EEA\u1EEC\u1EEE\u1EF0\u1EF2\u1EF4\u1EF6\u1EF8\u1EFA\u1EFC\u1EFE\u1F08-\u1F0F\u1F18-\u1F1D\u1F28-\u1F2F\u1F38-\u1F3F\u1F48-\u1F4D\u1F59\u1F5B\u1F5D\u1F5F\u1F68-\u1F6F\u1FB8-\u1FBB\u1FC8-\u1FCB\u1FD8-\u1FDB\u1FE8-\u1FEC\u1FF8-\u1FFB\u2102\u2107\u210B-\u210D\u2110-\u2112\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u2130-\u2133\u213E\u213F\u2145\u2183\u2C00-\u2C2E\u2C60\u2C62-\u2C64\u2C67\u2C69\u2C6B\u2C6D-\u2C70\u2C72\u2C75\u2C7E-\u2C80\u2C82\u2C84\u2C86\u2C88\u2C8A\u2C8C\u2C8E\u2C90\u2C92\u2C94\u2C96\u2C98\u2C9A\u2C9C\u2C9E\u2CA0\u2CA2\u2CA4\u2CA6\u2CA8\u2CAA\u2CAC\u2CAE\u2CB0\u2CB2\u2CB4\u2CB6\u2CB8\u2CBA\u2CBC\u2CBE\u2CC0\u2CC2\u2CC4\u2CC6\u2CC8\u2CCA\u2CCC\u2CCE\u2CD0\u2CD2\u2CD4\u2CD6\u2CD8\u2CDA\u2CDC\u2CDE\u2CE0\u2CE2\u2CEB\u2CED\u2CF2\uA640\uA642\uA644\uA646\uA648\uA64A\uA64C\uA64E\uA650\uA652\uA654\uA656\uA658\uA65A\uA65C\uA65E\uA660\uA662\uA664\uA666\uA668\uA66A\uA66C\uA680\uA682\uA684\uA686\uA688\uA68A\uA68C\uA68E\uA690\uA692\uA694\uA696\uA698\uA69A\uA722\uA724\uA726\uA728\uA72A\uA72C\uA72E\uA732\uA734\uA736\uA738\uA73A\uA73C\uA73E\uA740\uA742\uA744\uA746\uA748\uA74A\uA74C\uA74E\uA750\uA752\uA754\uA756\uA758\uA75A\uA75C\uA75E\uA760\uA762\uA764\uA766\uA768\uA76A\uA76C\uA76E\uA779\uA77B\uA77D\uA77E\uA780\uA782\uA784\uA786\uA78B\uA78D\uA790\uA792\uA796\uA798\uA79A\uA79C\uA79E\uA7A0\uA7A2\uA7A4\uA7A6\uA7A8\uA7AA-\uA7AE\uA7B0-\uA7B4\uA7B6\uFF21-\uFF3A]|\uD801[\uDC00-\uDC27\uDCB0-\uDCD3]|\uD803[\uDC80-\uDCB2]|\uD806[\uDCA0-\uDCBF]|\uD835[\uDC00-\uDC19\uDC34-\uDC4D\uDC68-\uDC81\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB5\uDCD0-\uDCE9\uDD04\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD38\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD6C-\uDD85\uDDA0-\uDDB9\uDDD4-\uDDED\uDE08-\uDE21\uDE3C-\uDE55\uDE70-\uDE89\uDEA8-\uDEC0\uDEE2-\uDEFA\uDF1C-\uDF34\uDF56-\uDF6E\uDF90-\uDFA8\uDFCA]|\uD83A[\uDD00-\uDD21]/,
                Ll: /[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0561-\u0587\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5E\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7B5\uA7B7\uA7FA\uAB30-\uAB5A\uAB60-\uAB65\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A]|\uD801[\uDC28-\uDC4F\uDCD8-\uDCFB]|\uD803[\uDCC0-\uDCF2]|\uD806[\uDCC0-\uDCDF]|\uD835[\uDC1A-\uDC33\uDC4E-\uDC54\uDC56-\uDC67\uDC82-\uDC9B\uDCB6-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDCCF\uDCEA-\uDD03\uDD1E-\uDD37\uDD52-\uDD6B\uDD86-\uDD9F\uDDBA-\uDDD3\uDDEE-\uDE07\uDE22-\uDE3B\uDE56-\uDE6F\uDE8A-\uDEA5\uDEC2-\uDEDA\uDEDC-\uDEE1\uDEFC-\uDF14\uDF16-\uDF1B\uDF36-\uDF4E\uDF50-\uDF55\uDF70-\uDF88\uDF8A-\uDF8F\uDFAA-\uDFC2\uDFC4-\uDFC9\uDFCB]|\uD83A[\uDD22-\uDD43]/,
                Lt: /[\u01C5\u01C8\u01CB\u01F2\u1F88-\u1F8F\u1F98-\u1F9F\u1FA8-\u1FAF\u1FBC\u1FCC\u1FFC]/,
                Lm: /[\u02B0-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0374\u037A\u0559\u0640\u06E5\u06E6\u07F4\u07F5\u07FA\u081A\u0824\u0828\u0971\u0E46\u0EC6\u10FC\u17D7\u1843\u1AA7\u1C78-\u1C7D\u1D2C-\u1D6A\u1D78\u1D9B-\u1DBF\u2071\u207F\u2090-\u209C\u2C7C\u2C7D\u2D6F\u2E2F\u3005\u3031-\u3035\u303B\u309D\u309E\u30FC-\u30FE\uA015\uA4F8-\uA4FD\uA60C\uA67F\uA69C\uA69D\uA717-\uA71F\uA770\uA788\uA7F8\uA7F9\uA9CF\uA9E6\uAA70\uAADD\uAAF3\uAAF4\uAB5C-\uAB5F\uFF70\uFF9E\uFF9F]|\uD81A[\uDF40-\uDF43]|\uD81B[\uDF93-\uDF9F\uDFE0]/,
                Lo: /[\xAA\xBA\u01BB\u01C0-\u01C3\u0294\u05D0-\u05EA\u05F0-\u05F2\u0620-\u063F\u0641-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u0800-\u0815\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0972-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E45\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10D0-\u10FA\u10FD-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17DC\u1820-\u1842\u1844-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C77\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u2135-\u2138\u2D30-\u2D67\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3006\u303C\u3041-\u3096\u309F\u30A1-\u30FA\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA014\uA016-\uA48C\uA4D0-\uA4F7\uA500-\uA60B\uA610-\uA61F\uA62A\uA62B\uA66E\uA6A0-\uA6E5\uA78F\uA7F7\uA7FB-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9E0-\uA9E4\uA9E7-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA6F\uAA71-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB\uAADC\uAAE0-\uAAEA\uAAF2\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF66-\uFF6F\uFF71-\uFF9D\uFFA0-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF30-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC50-\uDC9D\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCFF\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD83A[\uDC00-\uDCC4]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]/,
                Nl: /[\u16EE-\u16F0\u2160-\u2182\u2185-\u2188\u3007\u3021-\u3029\u3038-\u303A\uA6E6-\uA6EF]|\uD800[\uDD40-\uDD74\uDF41\uDF4A\uDFD1-\uDFD5]|\uD809[\uDC00-\uDC6E]/,
                Nd: /[0-9\u0660-\u0669\u06F0-\u06F9\u07C0-\u07C9\u0966-\u096F\u09E6-\u09EF\u0A66-\u0A6F\u0AE6-\u0AEF\u0B66-\u0B6F\u0BE6-\u0BEF\u0C66-\u0C6F\u0CE6-\u0CEF\u0D66-\u0D6F\u0DE6-\u0DEF\u0E50-\u0E59\u0ED0-\u0ED9\u0F20-\u0F29\u1040-\u1049\u1090-\u1099\u17E0-\u17E9\u1810-\u1819\u1946-\u194F\u19D0-\u19D9\u1A80-\u1A89\u1A90-\u1A99\u1B50-\u1B59\u1BB0-\u1BB9\u1C40-\u1C49\u1C50-\u1C59\uA620-\uA629\uA8D0-\uA8D9\uA900-\uA909\uA9D0-\uA9D9\uA9F0-\uA9F9\uAA50-\uAA59\uABF0-\uABF9\uFF10-\uFF19]|\uD801[\uDCA0-\uDCA9]|\uD804[\uDC66-\uDC6F\uDCF0-\uDCF9\uDD36-\uDD3F\uDDD0-\uDDD9\uDEF0-\uDEF9]|[\uD805\uD807][\uDC50-\uDC59\uDCD0-\uDCD9\uDE50-\uDE59\uDEC0-\uDEC9\uDF30-\uDF39]|\uD806[\uDCE0-\uDCE9]|\uD81A[\uDE60-\uDE69\uDF50-\uDF59]|\uD835[\uDFCE-\uDFFF]|\uD83A[\uDD50-\uDD59]/,
                Mn: /[\u0300-\u036F\u0483-\u0487\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D4-\u08E1\u08E3-\u0902\u093A\u093C\u0941-\u0948\u094D\u0951-\u0957\u0962\u0963\u0981\u09BC\u09C1-\u09C4\u09CD\u09E2\u09E3\u0A01\u0A02\u0A3C\u0A41\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81\u0A82\u0ABC\u0AC1-\u0AC5\u0AC7\u0AC8\u0ACD\u0AE2\u0AE3\u0B01\u0B3C\u0B3F\u0B41-\u0B44\u0B4D\u0B56\u0B62\u0B63\u0B82\u0BC0\u0BCD\u0C00\u0C3E-\u0C40\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81\u0CBC\u0CBF\u0CC6\u0CCC\u0CCD\u0CE2\u0CE3\u0D01\u0D41-\u0D44\u0D4D\u0D62\u0D63\u0DCA\u0DD2-\u0DD4\u0DD6\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F71-\u0F7E\u0F80-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102D-\u1030\u1032-\u1037\u1039\u103A\u103D\u103E\u1058\u1059\u105E-\u1060\u1071-\u1074\u1082\u1085\u1086\u108D\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4\u17B5\u17B7-\u17BD\u17C6\u17C9-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193B\u1A17\u1A18\u1A1B\u1A56\u1A58-\u1A5E\u1A60\u1A62\u1A65-\u1A6C\u1A73-\u1A7C\u1A7F\u1AB0-\u1ABD\u1B00-\u1B03\u1B34\u1B36-\u1B3A\u1B3C\u1B42\u1B6B-\u1B73\u1B80\u1B81\u1BA2-\u1BA5\u1BA8\u1BA9\u1BAB-\u1BAD\u1BE6\u1BE8\u1BE9\u1BED\u1BEF-\u1BF1\u1C2C-\u1C33\u1C36\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE0\u1CE2-\u1CE8\u1CED\u1CF4\u1CF8\u1CF9\u1DC0-\u1DF5\u1DFB-\u1DFF\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302D\u3099\u309A\uA66F\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA825\uA826\uA8C4\uA8C5\uA8E0-\uA8F1\uA926-\uA92D\uA947-\uA951\uA980-\uA982\uA9B3\uA9B6-\uA9B9\uA9BC\uA9E5\uAA29-\uAA2E\uAA31\uAA32\uAA35\uAA36\uAA43\uAA4C\uAA7C\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEC\uAAED\uAAF6\uABE5\uABE8\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F]|\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD804[\uDC01\uDC38-\uDC46\uDC7F-\uDC81\uDCB3-\uDCB6\uDCB9\uDCBA\uDD00-\uDD02\uDD27-\uDD2B\uDD2D-\uDD34\uDD73\uDD80\uDD81\uDDB6-\uDDBE\uDDCA-\uDDCC\uDE2F-\uDE31\uDE34\uDE36\uDE37\uDE3E\uDEDF\uDEE3-\uDEEA\uDF00\uDF01\uDF3C\uDF40\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC38-\uDC3F\uDC42-\uDC44\uDC46\uDCB3-\uDCB8\uDCBA\uDCBF\uDCC0\uDCC2\uDCC3\uDDB2-\uDDB5\uDDBC\uDDBD\uDDBF\uDDC0\uDDDC\uDDDD\uDE33-\uDE3A\uDE3D\uDE3F\uDE40\uDEAB\uDEAD\uDEB0-\uDEB5\uDEB7\uDF1D-\uDF1F\uDF22-\uDF25\uDF27-\uDF2B]|\uD807[\uDC30-\uDC36\uDC38-\uDC3D\uDC3F\uDC92-\uDCA7\uDCAA-\uDCB0\uDCB2\uDCB3\uDCB5\uDCB6]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF8F-\uDF92]|\uD82F[\uDC9D\uDC9E]|\uD834[\uDD67-\uDD69\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD4A]|\uDB40[\uDD00-\uDDEF]/,
                Mc: /[\u0903-\u0903]|[\u093E-\u0940]|[\u0949-\u094C]|[\u0982-\u0983]|[\u09BE-\u09C0]|[\u09C7-\u09C8]|[\u09CB-\u09CC]|[\u09D7-\u09D7]|[\u0A3E-\u0A40]|[\u0A83-\u0A83]|[\u0ABE-\u0AC0]|[\u0AC9-\u0AC9]|[\u0ACB-\u0ACC]|[\u0B02-\u0B03]|[\u0B3E-\u0B3E]|[\u0B40-\u0B40]|[\u0B47-\u0B48]|[\u0B4B-\u0B4C]|[\u0B57-\u0B57]|[\u0B83-\u0B83]|[\u0BBE-\u0BBF]|[\u0BC1-\u0BC2]|[\u0BC6-\u0BC8]|[\u0BCA-\u0BCC]|[\u0BD7-\u0BD7]|[\u0C01-\u0C03]|[\u0C41-\u0C44]|[\u0C82-\u0C83]|[\u0CBE-\u0CBE]|[\u0CC0-\u0CC4]|[\u0CC7-\u0CC8]|[\u0CCA-\u0CCB]|[\u0CD5-\u0CD6]|[\u0D02-\u0D03]|[\u0D3E-\u0D40]|[\u0D46-\u0D48]|[\u0D4A-\u0D4C]|[\u0D57-\u0D57]|[\u0F3E-\u0F3F]|[\u0F7F-\u0F7F]/,
                Pc: /[_\u203F\u2040\u2054\uFE33\uFE34\uFE4D-\uFE4F\uFF3F]/,
                Zs: /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,
                L: /[A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF30-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]/,
                Ltmo: /[\u01C5\u01C8\u01CB\u01F2\u1F88-\u1F8F\u1F98-\u1F9F\u1FA8-\u1FAF\u1FBC\u1FCC\u1FFC]|[\u02B0-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0374\u037A\u0559\u0640\u06E5\u06E6\u07F4\u07F5\u07FA\u081A\u0824\u0828\u0971\u0E46\u0EC6\u10FC\u17D7\u1843\u1AA7\u1C78-\u1C7D\u1D2C-\u1D6A\u1D78\u1D9B-\u1DBF\u2071\u207F\u2090-\u209C\u2C7C\u2C7D\u2D6F\u2E2F\u3005\u3031-\u3035\u303B\u309D\u309E\u30FC-\u30FE\uA015\uA4F8-\uA4FD\uA60C\uA67F\uA69C\uA69D\uA717-\uA71F\uA770\uA788\uA7F8\uA7F9\uA9CF\uA9E6\uAA70\uAADD\uAAF3\uAAF4\uAB5C-\uAB5F\uFF70\uFF9E\uFF9F]|\uD81A[\uDF40-\uDF43]|\uD81B[\uDF93-\uDF9F\uDFE0]|[\xAA\xBA\u01BB\u01C0-\u01C3\u0294\u05D0-\u05EA\u05F0-\u05F2\u0620-\u063F\u0641-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u0800-\u0815\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0972-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E45\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10D0-\u10FA\u10FD-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17DC\u1820-\u1842\u1844-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C77\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u2135-\u2138\u2D30-\u2D67\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3006\u303C\u3041-\u3096\u309F\u30A1-\u30FA\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA014\uA016-\uA48C\uA4D0-\uA4F7\uA500-\uA60B\uA610-\uA61F\uA62A\uA62B\uA66E\uA6A0-\uA6E5\uA78F\uA7F7\uA7FB-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9E0-\uA9E4\uA9E7-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA6F\uAA71-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB\uAADC\uAAE0-\uAAEA\uAAF2\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF66-\uFF6F\uFF71-\uFF9D\uFFA0-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF30-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC50-\uDC9D\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCFF\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD83A[\uDC00-\uDCC4]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]/
            };
        },
        function(u, t, e) {
            "use strict";
            const r = e(0), n = e(1);
            n.PExpr.prototype.allowsSkippingPrecedingSpace = r.abstract("allowsSkippingPrecedingSpace"), n.any.allowsSkippingPrecedingSpace = n.end.allowsSkippingPrecedingSpace = n.Apply.prototype.allowsSkippingPrecedingSpace = n.Terminal.prototype.allowsSkippingPrecedingSpace = n.Range.prototype.allowsSkippingPrecedingSpace = n.UnicodeChar.prototype.allowsSkippingPrecedingSpace = function() {
                return !0;
            }, n.Alt.prototype.allowsSkippingPrecedingSpace = n.Iter.prototype.allowsSkippingPrecedingSpace = n.Lex.prototype.allowsSkippingPrecedingSpace = n.Lookahead.prototype.allowsSkippingPrecedingSpace = n.Not.prototype.allowsSkippingPrecedingSpace = n.Param.prototype.allowsSkippingPrecedingSpace = n.Seq.prototype.allowsSkippingPrecedingSpace = function() {
                return !1;
            };
        },
        function(u, t, e) {
            "use strict";
            const r = e(0), n = e(2), i = e(1);
            let s, o;
            e(3).awaitBuiltInRules((u)=>{
                s = u;
            }), i.PExpr.prototype.assertAllApplicationsAreValid = function(u, t) {
                o = 0, this._assertAllApplicationsAreValid(u, t);
            }, i.PExpr.prototype._assertAllApplicationsAreValid = r.abstract("_assertAllApplicationsAreValid"), i.any._assertAllApplicationsAreValid = i.end._assertAllApplicationsAreValid = i.Terminal.prototype._assertAllApplicationsAreValid = i.Range.prototype._assertAllApplicationsAreValid = i.Param.prototype._assertAllApplicationsAreValid = i.UnicodeChar.prototype._assertAllApplicationsAreValid = function(u, t) {
            }, i.Lex.prototype._assertAllApplicationsAreValid = function(u, t) {
                o++, this.expr._assertAllApplicationsAreValid(u, t), o--;
            }, i.Alt.prototype._assertAllApplicationsAreValid = function(u, t) {
                for(let e = 0; e < this.terms.length; e++)this.terms[e]._assertAllApplicationsAreValid(u, t);
            }, i.Seq.prototype._assertAllApplicationsAreValid = function(u, t) {
                for(let e = 0; e < this.factors.length; e++)this.factors[e]._assertAllApplicationsAreValid(u, t);
            }, i.Iter.prototype._assertAllApplicationsAreValid = i.Not.prototype._assertAllApplicationsAreValid = i.Lookahead.prototype._assertAllApplicationsAreValid = function(u, t) {
                this.expr._assertAllApplicationsAreValid(u, t);
            }, i.Apply.prototype._assertAllApplicationsAreValid = function(u, t) {
                const e = t.rules[this.ruleName];
                if (!e) throw n.undeclaredRule(this.ruleName, t.name, this.source);
                if (r.isSyntactic(this.ruleName) && (!r.isSyntactic(u) || o > 0)) throw n.applicationOfSyntacticRuleFromLexicalContext(this.ruleName, this);
                const a = this.args.length, c = e.formals.length;
                if (a !== c) throw n.wrongNumberOfArguments(this.ruleName, c, a, this.source);
                if (this.args.forEach((e)=>{
                    if (e._assertAllApplicationsAreValid(u, t), 1 !== e.getArity()) throw n.invalidParameter(this.ruleName, e);
                }), s && e === s.rules.caseInsensitive && !(this.args[0] instanceof i.Terminal)) throw n.incorrectArgumentType('a Terminal (e.g. "abc")', this.args[0]);
            };
        },
        function(u, t, e) {
            "use strict";
            const r = e(0), n = e(2), i = e(1);
            i.PExpr.prototype.assertChoicesHaveUniformArity = r.abstract("assertChoicesHaveUniformArity"), i.any.assertChoicesHaveUniformArity = i.end.assertChoicesHaveUniformArity = i.Terminal.prototype.assertChoicesHaveUniformArity = i.Range.prototype.assertChoicesHaveUniformArity = i.Param.prototype.assertChoicesHaveUniformArity = i.Lex.prototype.assertChoicesHaveUniformArity = i.UnicodeChar.prototype.assertChoicesHaveUniformArity = function(u) {
            }, i.Alt.prototype.assertChoicesHaveUniformArity = function(u) {
                if (0 === this.terms.length) return;
                const t = this.terms[0].getArity();
                for(let e = 0; e < this.terms.length; e++){
                    const r = this.terms[e];
                    r.assertChoicesHaveUniformArity();
                    const i = r.getArity();
                    if (t !== i) throw n.inconsistentArity(u, t, i, r);
                }
            }, i.Extend.prototype.assertChoicesHaveUniformArity = function(u) {
                const t = this.terms[0].getArity(), e = this.terms[1].getArity();
                if (t !== e) throw n.inconsistentArity(u, e, t, this.terms[0]);
            }, i.Seq.prototype.assertChoicesHaveUniformArity = function(u) {
                for(let t = 0; t < this.factors.length; t++)this.factors[t].assertChoicesHaveUniformArity(u);
            }, i.Iter.prototype.assertChoicesHaveUniformArity = function(u) {
                this.expr.assertChoicesHaveUniformArity(u);
            }, i.Not.prototype.assertChoicesHaveUniformArity = function(u) {
            }, i.Lookahead.prototype.assertChoicesHaveUniformArity = function(u) {
                this.expr.assertChoicesHaveUniformArity(u);
            }, i.Apply.prototype.assertChoicesHaveUniformArity = function(u) {
            };
        },
        function(u, t, e) {
            "use strict";
            const r = e(0), n = e(2), i = e(1);
            i.PExpr.prototype.assertIteratedExprsAreNotNullable = r.abstract("assertIteratedExprsAreNotNullable"), i.any.assertIteratedExprsAreNotNullable = i.end.assertIteratedExprsAreNotNullable = i.Terminal.prototype.assertIteratedExprsAreNotNullable = i.Range.prototype.assertIteratedExprsAreNotNullable = i.Param.prototype.assertIteratedExprsAreNotNullable = i.UnicodeChar.prototype.assertIteratedExprsAreNotNullable = function(u) {
            }, i.Alt.prototype.assertIteratedExprsAreNotNullable = function(u) {
                for(let t = 0; t < this.terms.length; t++)this.terms[t].assertIteratedExprsAreNotNullable(u);
            }, i.Seq.prototype.assertIteratedExprsAreNotNullable = function(u) {
                for(let t = 0; t < this.factors.length; t++)this.factors[t].assertIteratedExprsAreNotNullable(u);
            }, i.Iter.prototype.assertIteratedExprsAreNotNullable = function(u) {
                if (this.expr.assertIteratedExprsAreNotNullable(u), this.expr.isNullable(u)) throw n.kleeneExprHasNullableOperand(this, []);
            }, i.Opt.prototype.assertIteratedExprsAreNotNullable = i.Not.prototype.assertIteratedExprsAreNotNullable = i.Lookahead.prototype.assertIteratedExprsAreNotNullable = i.Lex.prototype.assertIteratedExprsAreNotNullable = function(u) {
                this.expr.assertIteratedExprsAreNotNullable(u);
            }, i.Apply.prototype.assertIteratedExprsAreNotNullable = function(u) {
                this.args.forEach((t)=>{
                    t.assertIteratedExprsAreNotNullable(u);
                });
            };
        },
        function(u, t, e) {
            "use strict";
            const r = e(12), n = e(0), i = e(2), s = e(6), o = e(1), a = s.TerminalNode, c = s.NonterminalNode, l = s.IterationNode;
            o.PExpr.prototype.eval = n.abstract("eval"), o.any.eval = function(u) {
                const t = u.inputStream, e = t.pos, r = t.next();
                return r ? (u.pushBinding(new a(u.grammar, r), e), !0) : (u.processFailure(e, this), !1);
            }, o.end.eval = function(u) {
                const t = u.inputStream, e = t.pos;
                return t.atEnd() ? (u.pushBinding(new a(u.grammar, void 0), e), !0) : (u.processFailure(e, this), !1);
            }, o.Terminal.prototype.eval = function(u) {
                const t = u.inputStream, e = t.pos;
                return t.matchString(this.obj) ? (u.pushBinding(new a(u.grammar, this.obj), e), !0) : (u.processFailure(e, this), !1);
            }, o.Range.prototype.eval = function(u) {
                const t = u.inputStream, e = t.pos, r = t.next();
                return r && this.from <= r && r <= this.to ? (u.pushBinding(new a(u.grammar, r), e), !0) : (u.processFailure(e, this), !1);
            }, o.Param.prototype.eval = function(u) {
                return u.eval(u.currentApplication().args[this.index]);
            }, o.Lex.prototype.eval = function(u) {
                u.enterLexifiedContext();
                const t = u.eval(this.expr);
                return u.exitLexifiedContext(), t;
            }, o.Alt.prototype.eval = function(u) {
                for(let t = 0; t < this.terms.length; t++)if (u.eval(this.terms[t])) return !0;
                return !1;
            }, o.Seq.prototype.eval = function(u) {
                for(let t = 0; t < this.factors.length; t++){
                    const e = this.factors[t];
                    if (!u.eval(e)) return !1;
                }
                return !0;
            }, o.Iter.prototype.eval = function(u) {
                const t = u.inputStream, e = t.pos, r = this.getArity(), n = [], s = [];
                for(; n.length < r;)n.push([]), s.push([]);
                let a, c = 0, D = e;
                for(; c < this.maxNumMatches && u.eval(this.expr);){
                    if (t.pos === D) throw i.kleeneExprHasNullableOperand(this, u._applicationStack);
                    D = t.pos, c++;
                    const e = u._bindings.splice(u._bindings.length - r, r), o = u._bindingOffsets.splice(u._bindingOffsets.length - r, r);
                    for(a = 0; a < e.length; a++)n[a].push(e[a]), s[a].push(o[a]);
                }
                if (c < this.minNumMatches) return !1;
                let p = u.posToOffset(e), A = 0;
                if (c > 0) {
                    const u = n[r - 1], t = s[r - 1], e = t[t.length - 1] + u[u.length - 1].matchLength;
                    p = s[0][0], A = e - p;
                }
                const h = this instanceof o.Opt;
                for(a = 0; a < n.length; a++)u._bindings.push(new l(u.grammar, n[a], s[a], A, h)), u._bindingOffsets.push(p);
                return !0;
            }, o.Not.prototype.eval = function(u) {
                const t = u.inputStream, e = t.pos;
                u.pushFailuresInfo();
                const r = u.eval(this.expr);
                return u.popFailuresInfo(), r ? (u.processFailure(e, this), !1) : (t.pos = e, !0);
            }, o.Lookahead.prototype.eval = function(u) {
                const t = u.inputStream, e = t.pos;
                return !!u.eval(this.expr) && (t.pos = e, !0);
            }, o.Apply.prototype.eval = function(u) {
                const t = u.currentApplication(), e = t ? t.args : [], r = this.substituteParams(e), n = u.getCurrentPosInfo();
                if (n.isActive(r)) return r.handleCycle(u);
                const i = r.toMemoKey(), s = n.memo[i];
                if (s && n.shouldUseMemoizedResult(s)) {
                    if (u.hasNecessaryInfo(s)) return u.useMemoizedResult(u.inputStream.pos, s);
                    delete n.memo[i];
                }
                return r.reallyEval(u);
            }, o.Apply.prototype.handleCycle = function(u) {
                const t = u.getCurrentPosInfo(), e = t.currentLeftRecursion, r = this.toMemoKey();
                let n = t.memo[r];
                return e && e.headApplication.toMemoKey() === r ? n.updateInvolvedApplicationMemoKeys() : n || (n = t.memoize(r, {
                    matchLength: 0,
                    examinedLength: 0,
                    value: !1,
                    rightmostFailureOffset: -1
                }), t.startLeftRecursion(this, n)), u.useMemoizedResult(u.inputStream.pos, n);
            }, o.Apply.prototype.reallyEval = function(u) {
                const t = u.inputStream, e = t.pos, r = u.getCurrentPosInfo(), i = u.grammar.rules[this.ruleName], s = i.body, o = i.description;
                u.enterApplication(r, this), o && u.pushFailuresInfo();
                const a = t.examinedLength;
                t.examinedLength = 0;
                let c = this.evalOnce(s, u);
                const l = r.currentLeftRecursion, D = this.toMemoKey(), p = l && l.headApplication.toMemoKey() === D;
                let A;
                p ? (c = this.growSeedResult(s, u, e, l, c), r.endLeftRecursion(), A = l, A.examinedLength = t.examinedLength - e, A.rightmostFailureOffset = u._getRightmostFailureOffset(), r.memoize(D, A)) : l && l.isInvolved(D) || (A = r.memoize(D, {
                    matchLength: t.pos - e,
                    examinedLength: t.examinedLength - e,
                    value: c,
                    failuresAtRightmostPosition: u.cloneRecordedFailures(),
                    rightmostFailureOffset: u._getRightmostFailureOffset()
                }));
                const h = !!c;
                if (o && (u.popFailuresInfo(), h || u.processFailure(e, this), A && (A.failuresAtRightmostPosition = u.cloneRecordedFailures())), u.isTracing() && A) {
                    const t = u.getTraceEntry(e, this, h, h ? [
                        c
                    ] : []);
                    p && (n.assert(null != t.terminatingLREntry || !h), t.isHeadOfLeftRecursion = !0), A.traceEntry = t;
                }
                return t.examinedLength = Math.max(t.examinedLength, a), u.exitApplication(r, c), h;
            }, o.Apply.prototype.evalOnce = function(u, t) {
                const e = t.inputStream, r = e.pos;
                if (t.eval(u)) {
                    const n = u.getArity(), i = t._bindings.splice(t._bindings.length - n, n), s = t._bindingOffsets.splice(t._bindingOffsets.length - n, n);
                    return new c(t.grammar, this.ruleName, i, s, e.pos - r);
                }
                return !1;
            }, o.Apply.prototype.growSeedResult = function(u, t, e, n, i) {
                if (!i) return !1;
                const s = t.inputStream;
                for(;;){
                    if (n.matchLength = s.pos - e, n.value = i, n.failuresAtRightmostPosition = t.cloneRecordedFailures(), t.isTracing()) {
                        const u = t.trace[t.trace.length - 1];
                        n.traceEntry = new r(t.input, e, s.pos, this, !0, [
                            i
                        ], [
                            u.clone()
                        ]);
                    }
                    if (s.pos = e, i = this.evalOnce(u, t), s.pos - e <= n.matchLength) break;
                    t.isTracing() && t.trace.splice(-2, 1);
                }
                return t.isTracing() && n.traceEntry.recordLRTermination(t.trace.pop(), i), s.pos = e + n.matchLength, n.value;
            }, o.UnicodeChar.prototype.eval = function(u) {
                const t = u.inputStream, e = t.pos, r = t.next();
                return r && this.pattern.test(r) ? (u.pushBinding(new a(u.grammar, r), e), !0) : (u.processFailure(e, this), !1);
            };
        },
        function(u, t, e) {
            "use strict";
            const r = e(0), n = e(1);
            n.PExpr.prototype.getArity = r.abstract("getArity"), n.any.getArity = n.end.getArity = n.Terminal.prototype.getArity = n.Range.prototype.getArity = n.Param.prototype.getArity = n.Apply.prototype.getArity = n.UnicodeChar.prototype.getArity = function() {
                return 1;
            }, n.Alt.prototype.getArity = function() {
                return 0 === this.terms.length ? 0 : this.terms[0].getArity();
            }, n.Seq.prototype.getArity = function() {
                let u = 0;
                for(let t = 0; t < this.factors.length; t++)u += this.factors[t].getArity();
                return u;
            }, n.Iter.prototype.getArity = function() {
                return this.expr.getArity();
            }, n.Not.prototype.getArity = function() {
                return 0;
            }, n.Lookahead.prototype.getArity = n.Lex.prototype.getArity = function() {
                return this.expr.getArity();
            };
        },
        function(u, t, e) {
            "use strict";
            const r = e(0), n = e(1);
            function i(u, t) {
                const e = {
                };
                if (u.source && t) {
                    const r = u.source.relativeTo(t);
                    e.sourceInterval = [
                        r.startIdx,
                        r.endIdx
                    ];
                }
                return e;
            }
            n.PExpr.prototype.outputRecipe = r.abstract("outputRecipe"), n.any.outputRecipe = function(u, t) {
                return [
                    "any",
                    i(this, t)
                ];
            }, n.end.outputRecipe = function(u, t) {
                return [
                    "end",
                    i(this, t)
                ];
            }, n.Terminal.prototype.outputRecipe = function(u, t) {
                return [
                    "terminal",
                    i(this, t),
                    this.obj
                ];
            }, n.Range.prototype.outputRecipe = function(u, t) {
                return [
                    "range",
                    i(this, t),
                    this.from,
                    this.to
                ];
            }, n.Param.prototype.outputRecipe = function(u, t) {
                return [
                    "param",
                    i(this, t),
                    this.index
                ];
            }, n.Alt.prototype.outputRecipe = function(u, t) {
                return [
                    "alt",
                    i(this, t)
                ].concat(this.terms.map((e)=>e.outputRecipe(u, t)
                ));
            }, n.Extend.prototype.outputRecipe = function(u, t) {
                return this.terms[0].outputRecipe(u, t);
            }, n.Splice.prototype.outputRecipe = function(u, t) {
                const e = this.terms.slice(0, this.expansionPos), r = this.terms.slice(this.expansionPos + 1);
                return [
                    "splice",
                    i(this, t),
                    e.map((e)=>e.outputRecipe(u, t)
                    ),
                    r.map((e)=>e.outputRecipe(u, t)
                    )
                ];
            }, n.Seq.prototype.outputRecipe = function(u, t) {
                return [
                    "seq",
                    i(this, t)
                ].concat(this.factors.map((e)=>e.outputRecipe(u, t)
                ));
            }, n.Star.prototype.outputRecipe = n.Plus.prototype.outputRecipe = n.Opt.prototype.outputRecipe = n.Not.prototype.outputRecipe = n.Lookahead.prototype.outputRecipe = n.Lex.prototype.outputRecipe = function(u, t) {
                return [
                    this.constructor.name.toLowerCase(),
                    i(this, t),
                    this.expr.outputRecipe(u, t)
                ];
            }, n.Apply.prototype.outputRecipe = function(u, t) {
                return [
                    "app",
                    i(this, t),
                    this.ruleName,
                    this.args.map((e)=>e.outputRecipe(u, t)
                    )
                ];
            }, n.UnicodeChar.prototype.outputRecipe = function(u, t) {
                return [
                    "unicodeChar",
                    i(this, t),
                    this.category
                ];
            };
        },
        function(u, t, e) {
            "use strict";
            const r = e(0), n = e(1);
            n.PExpr.prototype.introduceParams = r.abstract("introduceParams"), n.any.introduceParams = n.end.introduceParams = n.Terminal.prototype.introduceParams = n.Range.prototype.introduceParams = n.Param.prototype.introduceParams = n.UnicodeChar.prototype.introduceParams = function(u) {
                return this;
            }, n.Alt.prototype.introduceParams = function(u) {
                return this.terms.forEach((t, e, r)=>{
                    r[e] = t.introduceParams(u);
                }), this;
            }, n.Seq.prototype.introduceParams = function(u) {
                return this.factors.forEach((t, e, r)=>{
                    r[e] = t.introduceParams(u);
                }), this;
            }, n.Iter.prototype.introduceParams = n.Not.prototype.introduceParams = n.Lookahead.prototype.introduceParams = n.Lex.prototype.introduceParams = function(u) {
                return this.expr = this.expr.introduceParams(u), this;
            }, n.Apply.prototype.introduceParams = function(u) {
                const t = u.indexOf(this.ruleName);
                if (t >= 0) {
                    if (this.args.length > 0) throw new Error("Parameterized rules cannot be passed as arguments to another rule.");
                    return new n.Param(t).withSource(this.source);
                }
                return this.args.forEach((t, e, r)=>{
                    r[e] = t.introduceParams(u);
                }), this;
            };
        },
        function(u, t, e) {
            "use strict";
            const r = e(0), n = e(1);
            n.PExpr.prototype.isNullable = function(u) {
                return this._isNullable(u, Object.create(null));
            }, n.PExpr.prototype._isNullable = r.abstract("_isNullable"), n.any._isNullable = n.Range.prototype._isNullable = n.Param.prototype._isNullable = n.Plus.prototype._isNullable = n.UnicodeChar.prototype._isNullable = function(u, t) {
                return !1;
            }, n.end._isNullable = function(u, t) {
                return !0;
            }, n.Terminal.prototype._isNullable = function(u, t) {
                return "string" == typeof this.obj && "" === this.obj;
            }, n.Alt.prototype._isNullable = function(u, t) {
                return 0 === this.terms.length || this.terms.some((e)=>e._isNullable(u, t)
                );
            }, n.Seq.prototype._isNullable = function(u, t) {
                return this.factors.every((e)=>e._isNullable(u, t)
                );
            }, n.Star.prototype._isNullable = n.Opt.prototype._isNullable = n.Not.prototype._isNullable = n.Lookahead.prototype._isNullable = function(u, t) {
                return !0;
            }, n.Lex.prototype._isNullable = function(u, t) {
                return this.expr._isNullable(u, t);
            }, n.Apply.prototype._isNullable = function(u, t) {
                const e = this.toMemoKey();
                if (!Object.prototype.hasOwnProperty.call(t, e)) {
                    const r = u.rules[this.ruleName].body.substituteParams(this.args);
                    t[e] = !1, t[e] = r._isNullable(u, t);
                }
                return t[e];
            };
        },
        function(u, t, e) {
            "use strict";
            const r = e(0), n = e(1);
            n.PExpr.prototype.substituteParams = r.abstract("substituteParams"), n.any.substituteParams = n.end.substituteParams = n.Terminal.prototype.substituteParams = n.Range.prototype.substituteParams = n.UnicodeChar.prototype.substituteParams = function(u) {
                return this;
            }, n.Param.prototype.substituteParams = function(u) {
                return u[this.index];
            }, n.Alt.prototype.substituteParams = function(u) {
                return new n.Alt(this.terms.map((t)=>t.substituteParams(u)
                ));
            }, n.Seq.prototype.substituteParams = function(u) {
                return new n.Seq(this.factors.map((t)=>t.substituteParams(u)
                ));
            }, n.Iter.prototype.substituteParams = n.Not.prototype.substituteParams = n.Lookahead.prototype.substituteParams = n.Lex.prototype.substituteParams = function(u) {
                return new this.constructor(this.expr.substituteParams(u));
            }, n.Apply.prototype.substituteParams = function(u) {
                if (0 === this.args.length) return this;
                {
                    const t = this.args.map((t)=>t.substituteParams(u)
                    );
                    return new n.Apply(this.ruleName, t);
                }
            };
        },
        function(u, t, e) {
            "use strict";
            const r2 = e(0), n = e(1), { copyWithoutDuplicates: i  } = r2;
            function s(u) {
                return /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(u);
            }
            function o(u) {
                const t = Object.create(null);
                u.forEach((u)=>{
                    t[u] = (t[u] || 0) + 1;
                }), Object.keys(t).forEach((e)=>{
                    if (t[e] <= 1) return;
                    let r = 1;
                    u.forEach((t, n)=>{
                        t === e && (u[n] = t + "_" + r++);
                    });
                });
            }
            n.PExpr.prototype.toArgumentNameList = r2.abstract("toArgumentNameList"), n.any.toArgumentNameList = function(u, t) {
                return [
                    "any"
                ];
            }, n.end.toArgumentNameList = function(u, t) {
                return [
                    "end"
                ];
            }, n.Terminal.prototype.toArgumentNameList = function(u, t) {
                return "string" == typeof this.obj && /^[_a-zA-Z0-9]+$/.test(this.obj) ? [
                    "_" + this.obj
                ] : [
                    "$" + u
                ];
            }, n.Range.prototype.toArgumentNameList = function(u, t) {
                let e = this.from + "_to_" + this.to;
                return s(e) || (e = "_" + e), s(e) || (e = "$" + u), [
                    e
                ];
            }, n.Alt.prototype.toArgumentNameList = function(u, t) {
                const e = this.terms.map((t)=>t.toArgumentNameList(u, !0)
                ), r = [], n = e[0].length;
                for(let u1 = 0; u1 < n; u1++){
                    const t = [];
                    for(let r1 = 0; r1 < this.terms.length; r1++)t.push(e[r1][u1]);
                    const n = i(t);
                    r.push(n.join("_or_"));
                }
                return t || o(r), r;
            }, n.Seq.prototype.toArgumentNameList = function(u, t) {
                let e = [];
                return this.factors.forEach((t)=>{
                    const r = t.toArgumentNameList(u, !0);
                    e = e.concat(r), u += r.length;
                }), t || o(e), e;
            }, n.Iter.prototype.toArgumentNameList = function(u, t) {
                const e = this.expr.toArgumentNameList(u, t).map((u)=>"s" === u[u.length - 1] ? u + "es" : u + "s"
                );
                return t || o(e), e;
            }, n.Opt.prototype.toArgumentNameList = function(u, t) {
                return this.expr.toArgumentNameList(u, t).map((u)=>"opt" + u[0].toUpperCase() + u.slice(1)
                );
            }, n.Not.prototype.toArgumentNameList = function(u, t) {
                return [];
            }, n.Lookahead.prototype.toArgumentNameList = n.Lex.prototype.toArgumentNameList = function(u, t) {
                return this.expr.toArgumentNameList(u, t);
            }, n.Apply.prototype.toArgumentNameList = function(u, t) {
                return [
                    this.ruleName
                ];
            }, n.UnicodeChar.prototype.toArgumentNameList = function(u, t) {
                return [
                    "$" + u
                ];
            }, n.Param.prototype.toArgumentNameList = function(u, t) {
                return [
                    "param" + this.index
                ];
            };
        },
        function(u, t, e) {
            "use strict";
            const r = e(0), n = e(1);
            n.PExpr.prototype.toDisplayString = r.abstract("toDisplayString"), n.Alt.prototype.toDisplayString = n.Seq.prototype.toDisplayString = function() {
                return this.source ? this.source.trimmed().contents : "[" + this.constructor.name + "]";
            }, n.any.toDisplayString = n.end.toDisplayString = n.Iter.prototype.toDisplayString = n.Not.prototype.toDisplayString = n.Lookahead.prototype.toDisplayString = n.Lex.prototype.toDisplayString = n.Terminal.prototype.toDisplayString = n.Range.prototype.toDisplayString = n.Param.prototype.toDisplayString = function() {
                return this.toString();
            }, n.Apply.prototype.toDisplayString = function() {
                if (this.args.length > 0) {
                    const u = this.args.map((u)=>u.toDisplayString()
                    );
                    return this.ruleName + "<" + u.join(",") + ">";
                }
                return this.ruleName;
            }, n.UnicodeChar.prototype.toDisplayString = function() {
                return "Unicode [" + this.category + "] character";
            };
        },
        function(u, t, e) {
            "use strict";
            const r = e(10), n = e(0), i = e(1);
            i.PExpr.prototype.toFailure = n.abstract("toFailure"), i.any.toFailure = function(u) {
                return new r(this, "any object", "description");
            }, i.end.toFailure = function(u) {
                return new r(this, "end of input", "description");
            }, i.Terminal.prototype.toFailure = function(u) {
                return new r(this, this.obj, "string");
            }, i.Range.prototype.toFailure = function(u) {
                return new r(this, JSON.stringify(this.from) + ".." + JSON.stringify(this.to), "code");
            }, i.Not.prototype.toFailure = function(u) {
                const t = this.expr === i.any ? "nothing" : "not " + this.expr.toFailure(u);
                return new r(this, t, "description");
            }, i.Lookahead.prototype.toFailure = function(u) {
                return this.expr.toFailure(u);
            }, i.Apply.prototype.toFailure = function(u) {
                let t = u.rules[this.ruleName].description;
                if (!t) t = (/^[aeiouAEIOU]/.test(this.ruleName) ? "an" : "a") + " " + this.ruleName;
                return new r(this, t, "description");
            }, i.UnicodeChar.prototype.toFailure = function(u) {
                return new r(this, "a Unicode [" + this.category + "] character", "description");
            }, i.Alt.prototype.toFailure = function(u) {
                const t = "(" + this.terms.map((t)=>t.toFailure(u)
                ).join(" or ") + ")";
                return new r(this, t, "description");
            }, i.Seq.prototype.toFailure = function(u) {
                const t = "(" + this.factors.map((t)=>t.toFailure(u)
                ).join(" ") + ")";
                return new r(this, t, "description");
            }, i.Iter.prototype.toFailure = function(u) {
                const t = "(" + this.expr.toFailure(u) + this.operator + ")";
                return new r(this, t, "description");
            };
        },
        function(u, t, e) {
            "use strict";
            const r = e(0), n = e(1);
            n.PExpr.prototype.toString = r.abstract("toString"), n.any.toString = function() {
                return "any";
            }, n.end.toString = function() {
                return "end";
            }, n.Terminal.prototype.toString = function() {
                return JSON.stringify(this.obj);
            }, n.Range.prototype.toString = function() {
                return JSON.stringify(this.from) + ".." + JSON.stringify(this.to);
            }, n.Param.prototype.toString = function() {
                return "$" + this.index;
            }, n.Lex.prototype.toString = function() {
                return "#(" + this.expr.toString() + ")";
            }, n.Alt.prototype.toString = function() {
                return 1 === this.terms.length ? this.terms[0].toString() : "(" + this.terms.map((u)=>u.toString()
                ).join(" | ") + ")";
            }, n.Seq.prototype.toString = function() {
                return 1 === this.factors.length ? this.factors[0].toString() : "(" + this.factors.map((u)=>u.toString()
                ).join(" ") + ")";
            }, n.Iter.prototype.toString = function() {
                return this.expr + this.operator;
            }, n.Not.prototype.toString = function() {
                return "~" + this.expr;
            }, n.Lookahead.prototype.toString = function() {
                return "&" + this.expr;
            }, n.Apply.prototype.toString = function() {
                if (this.args.length > 0) {
                    const u = this.args.map((u)=>u.toString()
                    );
                    return this.ruleName + "<" + u.join(",") + ">";
                }
                return this.ruleName;
            }, n.UnicodeChar.prototype.toString = function() {
                return "\\p{" + this.category + "}";
            };
        },
        function(u2, t, e) {
            "use strict";
            const r = e(32), n = e(1);
            function i(u) {
                this.grammar = u, this.memoTable = [], this.input = "";
            }
            i.prototype.getInput = function() {
                return this.input;
            }, i.prototype.setInput = function(u) {
                return this.input !== u && this.replaceInputRange(0, this.input.length, u), this;
            }, i.prototype.replaceInputRange = function(u, t, e) {
                const r = this.input;
                if (u < 0 || u > r.length || t < 0 || t > r.length || u > t) throw new Error("Invalid indices: " + u + " and " + t);
                this.input = r.slice(0, u) + e + r.slice(t);
                const n = this.memoTable.slice(t);
                this.memoTable.length = u;
                for(let u1 = 0; u1 < e.length; u1++)this.memoTable.push(void 0);
                n.forEach(function(u) {
                    this.memoTable.push(u);
                }, this);
                for(let t1 = 0; t1 < u; t1++){
                    const e = this.memoTable[t1];
                    e && e.clearObsoleteEntries(t1, u);
                }
                return this;
            }, i.prototype.match = function(u) {
                return this._match(this._getStartExpr(u), !1);
            }, i.prototype.trace = function(u) {
                return this._match(this._getStartExpr(u), !0);
            }, i.prototype._match = function(u, t, e) {
                const n = new r(this, u, e);
                return t ? n.getTrace() : n.getMatchResult();
            }, i.prototype._getStartExpr = function(u) {
                const t = u || this.grammar.defaultStartRule;
                if (!t) throw new Error("Missing start rule argument -- the grammar has no default start rule.");
                const e = this.grammar.parseApplication(t);
                return new n.Seq([
                    e,
                    n.end
                ]);
            }, u2.exports = i;
        },
        function(u1, t1, e1) {
            "use strict";
            const r1 = e1(8), n = e1(9), i = e1(33), s = e1(12), o = e1(1), a = new o.Apply("spaces");
            function c(u, t, e) {
                this.matcher = u, this.startExpr = t, this.grammar = u.grammar, this.input = u.input, this.inputStream = new r1(u.input), this.memoTable = u.memoTable, this._bindings = [], this._bindingOffsets = [], this._applicationStack = [], this._posStack = [
                    0
                ], this.inLexifiedContextStack = [
                    !1
                ], this.rightmostFailurePosition = -1, this._rightmostFailurePositionStack = [], this._recordedFailuresStack = [], void 0 !== e && (this.positionToRecordFailures = e, this.recordedFailures = Object.create(null));
            }
            c.prototype = {
                posToOffset (u) {
                    return u - this._posStack[this._posStack.length - 1];
                },
                enterApplication (u, t) {
                    this._posStack.push(this.inputStream.pos), this._applicationStack.push(t), this.inLexifiedContextStack.push(!1), u.enter(t), this._rightmostFailurePositionStack.push(this.rightmostFailurePosition), this.rightmostFailurePosition = -1;
                },
                exitApplication (u, t) {
                    const e = this._posStack.pop();
                    this._applicationStack.pop(), this.inLexifiedContextStack.pop(), u.exit(), this.rightmostFailurePosition = Math.max(this.rightmostFailurePosition, this._rightmostFailurePositionStack.pop()), t && this.pushBinding(t, e);
                },
                enterLexifiedContext () {
                    this.inLexifiedContextStack.push(!0);
                },
                exitLexifiedContext () {
                    this.inLexifiedContextStack.pop();
                },
                currentApplication () {
                    return this._applicationStack[this._applicationStack.length - 1];
                },
                inSyntacticContext () {
                    if ("string" != typeof this.inputStream.source) return !1;
                    const u = this.currentApplication();
                    return u ? u.isSyntactic() && !this.inLexifiedContext() : this.startExpr.factors[0].isSyntactic();
                },
                inLexifiedContext () {
                    return this.inLexifiedContextStack[this.inLexifiedContextStack.length - 1];
                },
                skipSpaces () {
                    return this.pushFailuresInfo(), this.eval(a), this.popBinding(), this.popFailuresInfo(), this.inputStream.pos;
                },
                skipSpacesIfInSyntacticContext () {
                    return this.inSyntacticContext() ? this.skipSpaces() : this.inputStream.pos;
                },
                maybeSkipSpacesBefore (u) {
                    return u instanceof o.Apply && u.isSyntactic() ? this.skipSpaces() : u.allowsSkippingPrecedingSpace() && u !== a ? this.skipSpacesIfInSyntacticContext() : this.inputStream.pos;
                },
                pushBinding (u, t) {
                    this._bindings.push(u), this._bindingOffsets.push(this.posToOffset(t));
                },
                popBinding () {
                    this._bindings.pop(), this._bindingOffsets.pop();
                },
                numBindings () {
                    return this._bindings.length;
                },
                truncateBindings (u) {
                    for(; this._bindings.length > u;)this.popBinding();
                },
                getCurrentPosInfo () {
                    return this.getPosInfo(this.inputStream.pos);
                },
                getPosInfo (u) {
                    let t = this.memoTable[u];
                    return t || (t = this.memoTable[u] = new i), t;
                },
                processFailure (u, t) {
                    if (this.rightmostFailurePosition = Math.max(this.rightmostFailurePosition, u), this.recordedFailures && u === this.positionToRecordFailures) {
                        const u = this.currentApplication();
                        u && (t = t.substituteParams(u.args)), this.recordFailure(t.toFailure(this.grammar), !1);
                    }
                },
                recordFailure (u, t) {
                    const e = u.toKey();
                    this.recordedFailures[e] ? this.recordedFailures[e].isFluffy() && !u.isFluffy() && this.recordedFailures[e].clearFluffy() : this.recordedFailures[e] = t ? u.clone() : u;
                },
                recordFailures (u, t) {
                    Object.keys(u).forEach((e)=>{
                        this.recordFailure(u[e], t);
                    });
                },
                cloneRecordedFailures () {
                    if (!this.recordedFailures) return;
                    const u = Object.create(null);
                    return Object.keys(this.recordedFailures).forEach((t)=>{
                        u[t] = this.recordedFailures[t].clone();
                    }), u;
                },
                getRightmostFailurePosition () {
                    return this.rightmostFailurePosition;
                },
                _getRightmostFailureOffset () {
                    return this.rightmostFailurePosition >= 0 ? this.posToOffset(this.rightmostFailurePosition) : -1;
                },
                getMemoizedTraceEntry (u, t) {
                    const e = this.memoTable[u];
                    if (e && t.ruleName) {
                        const u = e.memo[t.toMemoKey()];
                        if (u && u.traceEntry) {
                            const e = u.traceEntry.cloneWithExpr(t);
                            return e.isMemoized = !0, e;
                        }
                    }
                    return null;
                },
                getTraceEntry (u, t, e, r) {
                    if (t instanceof o.Apply) {
                        const u = this.currentApplication(), e = u ? u.args : [];
                        t = t.substituteParams(e);
                    }
                    return this.getMemoizedTraceEntry(u, t) || new s(this.input, u, this.inputStream.pos, t, e, r, this.trace);
                },
                isTracing () {
                    return !!this.trace;
                },
                hasNecessaryInfo (u) {
                    return !(this.trace && !u.traceEntry) && (!this.recordedFailures || this.inputStream.pos + u.rightmostFailureOffset !== this.positionToRecordFailures || !!u.failuresAtRightmostPosition);
                },
                useMemoizedResult (u, t) {
                    this.trace && this.trace.push(t.traceEntry);
                    const e = this.inputStream.pos + t.rightmostFailureOffset;
                    return this.rightmostFailurePosition = Math.max(this.rightmostFailurePosition, e), this.recordedFailures && this.positionToRecordFailures === e && t.failuresAtRightmostPosition && this.recordFailures(t.failuresAtRightmostPosition, !0), this.inputStream.examinedLength = Math.max(this.inputStream.examinedLength, t.examinedLength + u), !!t.value && (this.inputStream.pos += t.matchLength, this.pushBinding(t.value, u), !0);
                },
                eval (u) {
                    const t = this.inputStream, e = this._bindings.length;
                    let r;
                    this.recordedFailures && (r = this.recordedFailures, this.recordedFailures = Object.create(null));
                    const n = t.pos, i = this.maybeSkipSpacesBefore(u);
                    let s;
                    this.trace && (s = this.trace, this.trace = []);
                    const o = u.eval(this);
                    if (this.trace) {
                        const t = this._bindings.slice(e), r = this.getTraceEntry(i, u, o, t);
                        r.isImplicitSpaces = u === a, r.isRootNode = u === this.startExpr, s.push(r), this.trace = s;
                    }
                    return o ? this.recordedFailures && t.pos === this.positionToRecordFailures && Object.keys(this.recordedFailures).forEach((u)=>{
                        this.recordedFailures[u].makeFluffy();
                    }) : (t.pos = n, this.truncateBindings(e)), this.recordedFailures && this.recordFailures(r, !1), o;
                },
                getMatchResult () {
                    let u;
                    return this.eval(this.startExpr), this.recordedFailures && (u = Object.keys(this.recordedFailures).map((u)=>this.recordedFailures[u]
                    )), new n(this.matcher, this.input, this.startExpr, this._bindings[0], this._bindingOffsets[0], this.rightmostFailurePosition, u);
                },
                getTrace () {
                    this.trace = [];
                    const u = this.getMatchResult(), t = this.trace[this.trace.length - 1];
                    return t.result = u, t;
                },
                pushFailuresInfo () {
                    this._rightmostFailurePositionStack.push(this.rightmostFailurePosition), this._recordedFailuresStack.push(this.recordedFailures);
                },
                popFailuresInfo () {
                    this.rightmostFailurePosition = this._rightmostFailurePositionStack.pop(), this.recordedFailures = this._recordedFailuresStack.pop();
                }
            }, u1.exports = c;
        },
        function(u1, t1, e) {
            "use strict";
            function r() {
                this.applicationMemoKeyStack = [], this.memo = {
                }, this.maxExaminedLength = 0, this.maxRightmostFailureOffset = -1, this.currentLeftRecursion = void 0;
            }
            r.prototype = {
                isActive (u) {
                    return this.applicationMemoKeyStack.indexOf(u.toMemoKey()) >= 0;
                },
                enter (u) {
                    this.applicationMemoKeyStack.push(u.toMemoKey());
                },
                exit () {
                    this.applicationMemoKeyStack.pop();
                },
                startLeftRecursion (u, t) {
                    t.isLeftRecursion = !0, t.headApplication = u, t.nextLeftRecursion = this.currentLeftRecursion, this.currentLeftRecursion = t;
                    const e = this.applicationMemoKeyStack, r = e.indexOf(u.toMemoKey()) + 1, n = e.slice(r);
                    t.isInvolved = function(u) {
                        return n.indexOf(u) >= 0;
                    }, t.updateInvolvedApplicationMemoKeys = function() {
                        for(let u = r; u < e.length; u++){
                            const t = e[u];
                            this.isInvolved(t) || n.push(t);
                        }
                    };
                },
                endLeftRecursion () {
                    this.currentLeftRecursion = this.currentLeftRecursion.nextLeftRecursion;
                },
                shouldUseMemoizedResult (u) {
                    if (!u.isLeftRecursion) return !0;
                    const t = this.applicationMemoKeyStack;
                    for(let e = 0; e < t.length; e++){
                        const r = t[e];
                        if (u.isInvolved(r)) return !1;
                    }
                    return !0;
                },
                memoize (u, t) {
                    return this.memo[u] = t, this.maxExaminedLength = Math.max(this.maxExaminedLength, t.examinedLength), this.maxRightmostFailureOffset = Math.max(this.maxRightmostFailureOffset, t.rightmostFailureOffset), t;
                },
                clearObsoleteEntries (u, t) {
                    if (u + this.maxExaminedLength <= t) return;
                    const e = this.memo;
                    this.maxExaminedLength = 0, this.maxRightmostFailureOffset = -1, Object.keys(e).forEach((r)=>{
                        const n = e[r];
                        u + n.examinedLength > t ? delete e[r] : (this.maxExaminedLength = Math.max(this.maxExaminedLength, n.examinedLength), this.maxRightmostFailureOffset = Math.max(this.maxRightmostFailureOffset, n.rightmostFailureOffset));
                    });
                }
            }, u1.exports = r;
        },
        function(u3, t1, e) {
            "use strict";
            const r = e(8), n = e(6).IterationNode, i = e(9), s = e(0), o = e(2), a = e(3), c = [];
            let l, D;
            class p {
                constructor(u, t, e){
                    this._node = u, this.source = t, this._baseInterval = e, u.isNonterminal() && s.assert(t === e), this._childWrappers = [];
                }
                toString() {
                    return "[semantics wrapper for " + this._node.grammar.name + "]";
                }
                toJSON() {
                    return this.toString();
                }
                _forgetMemoizedResultFor(u) {
                    delete this._node[this._semantics.attributeKeys[u]], this.children.forEach((t)=>{
                        t._forgetMemoizedResultFor(u);
                    });
                }
                child(u) {
                    if (!(0 <= u && u < this._node.numChildren())) return;
                    let t = this._childWrappers[u];
                    if (!t) {
                        const e = this._node.childAt(u), r = this._node.childOffsets[u], n = this._baseInterval.subInterval(r, e.matchLength), i = e.isNonterminal() ? n : this._baseInterval;
                        t = this._childWrappers[u] = this._semantics.wrap(e, n, i);
                    }
                    return t;
                }
                _children() {
                    for(let u = 0; u < this._node.numChildren(); u++)this.child(u);
                    return this._childWrappers;
                }
                isIteration() {
                    return this._node.isIteration();
                }
                isTerminal() {
                    return this._node.isTerminal();
                }
                isNonterminal() {
                    return this._node.isNonterminal();
                }
                isSyntactic() {
                    return this.isNonterminal() && this._node.isSyntactic();
                }
                isLexical() {
                    return this.isNonterminal() && this._node.isLexical();
                }
                isOptional() {
                    return this._node.isOptional();
                }
                iteration(u) {
                    const t = u || [], e = t.map((u)=>u._node
                    ), r = new n(this._node.grammar, e, [], -1, !1), i = this._semantics.wrap(r, null, null);
                    return i._childWrappers = t, i;
                }
                get children() {
                    return this._children();
                }
                get ctorName() {
                    return this._node.ctorName;
                }
                get interval() {
                    throw new Error("The `interval` property is deprecated -- use `source` instead");
                }
                get numChildren() {
                    return this._node.numChildren();
                }
                get primitiveValue() {
                    if (this.isTerminal()) return this._node.primitiveValue;
                    throw new TypeError("tried to access the 'primitiveValue' attribute of a non-terminal CST node");
                }
                get sourceString() {
                    return this.source.contents;
                }
            }
            function A(u, t) {
                const e = this;
                if (this.grammar = u, this.checkedActionDicts = !1, this.Wrapper = class extends t ? t.Wrapper : p {
                    constructor(u, t, r){
                        super(u, t, r), e.checkActionDictsIfHaventAlready(), this._semantics = e;
                    }
                }, this.super = t, t) {
                    if (!u.equals(this.super.grammar) && !u._inheritsFrom(this.super.grammar)) throw new Error("Cannot extend a semantics for grammar '" + this.super.grammar.name + "' for use with grammar '" + u.name + "' (not a sub-grammar)");
                    this.operations = Object.create(this.super.operations), this.attributes = Object.create(this.super.attributes), this.attributeKeys = Object.create(null);
                    for(const u1 in this.attributes)Object.defineProperty(this.attributeKeys, u1, {
                        value: a.uniqueId(u1)
                    });
                } else this.operations = Object.create(null), this.attributes = Object.create(null), this.attributeKeys = Object.create(null);
            }
            function h(u, t) {
                if (!l) return s.assert(-1 === u.indexOf("(")), {
                    name: u,
                    formals: []
                };
                const e = l.match(u, "operation" === t ? "OperationSignature" : "AttributeSignature");
                if (e.failed()) throw new Error(e.message);
                return D(e).parse();
            }
            A.prototype.toString = function() {
                return "[semantics for " + this.grammar.name + "]";
            }, A.prototype.checkActionDictsIfHaventAlready = function() {
                this.checkedActionDicts || (this.checkActionDicts(), this.checkedActionDicts = !0);
            }, A.prototype.checkActionDicts = function() {
                let u;
                for(u in this.operations)this.operations[u].checkActionDict(this.grammar);
                for(u in this.attributes)this.attributes[u].checkActionDict(this.grammar);
            }, A.prototype.toRecipe = function(u) {
                function t(u) {
                    return u.super !== A.BuiltInSemantics._getSemantics();
                }
                let e = "(function(g) {\n";
                if (t(this)) {
                    e += "  var semantics = " + this.super.toRecipe(!0) + "(g";
                    const u = this.super.grammar;
                    let t = this.grammar;
                    for(; t !== u;)e += ".superGrammar", t = t.superGrammar;
                    e += ");\n", e += "  return g.extendSemantics(semantics)";
                } else e += "  return g.createSemantics()";
                return [
                    "Operation",
                    "Attribute"
                ].forEach((u)=>{
                    const r = this[u.toLowerCase() + "s"];
                    Object.keys(r).forEach((n)=>{
                        const { actionDict: i , formals: s , builtInDefault: o  } = r[n];
                        let a, c = n;
                        s.length > 0 && (c += "(" + s.join(", ") + ")"), a = t(this) && this.super[u.toLowerCase() + "s"][n] ? "extend" + u : "add" + u, e += "\n    ." + a + "(" + JSON.stringify(c) + ", {";
                        const l = [];
                        Object.keys(i).forEach((u)=>{
                            if (i[u] !== o) {
                                let t = i[u].toString().trim();
                                t = t.replace(/^.*\(/, "function("), l.push("\n      " + JSON.stringify(u) + ": " + t);
                            }
                        }), e += l.join(",") + "\n    })";
                    });
                }), e += ";\n  })", u || (e = "(function() {\n  var grammar = this.fromRecipe(" + this.grammar.toRecipe() + ");\n  var semantics = " + e + "(grammar);\n  return semantics;\n});\n"), e;
            }, A.prototype.addOperationOrAttribute = function(u, t, e) {
                const r = u + "s", n = h(t, u), i = n.name, s = n.formals;
                this.assertNewName(i, u);
                const l = function(u, t, e) {
                    return function(...r) {
                        const n = (this._semantics.operations[t] || this._semantics.attributes[t]).formals.map((u)=>this.args[u]
                        );
                        if (this.isIteration() || 1 !== r.length) throw o.missingSemanticAction(this.ctorName, t, u, c);
                        return e.apply(r[0], n);
                    };
                }(u, i, A), D = {
                    _default: l
                };
                Object.keys(e).forEach((u)=>{
                    D[u] = e[u];
                });
                const p = "operation" === u ? new m(i, s, D, l) : new E(i, D, l);
                function A() {
                    const t = this._semantics[r][i];
                    if (arguments.length !== t.formals.length) throw new Error("Invalid number of arguments passed to " + i + " " + u + " (expected " + t.formals.length + ", got " + arguments.length + ")");
                    const e = Object.create(null);
                    for(let u1 = 0; u1 < arguments.length; u1++)e[t.formals[u1]] = arguments[u1];
                    const n = this.args;
                    this.args = e;
                    const s = t.execute(this._semantics, this);
                    return this.args = n, s;
                }
                p.checkActionDict(this.grammar), this[r][i] = p, "operation" === u ? (this.Wrapper.prototype[i] = A, this.Wrapper.prototype[i].toString = function() {
                    return "[" + i + " operation]";
                }) : (Object.defineProperty(this.Wrapper.prototype, i, {
                    get: A,
                    configurable: !0
                }), Object.defineProperty(this.attributeKeys, i, {
                    value: a.uniqueId(i)
                }));
            }, A.prototype.extendOperationOrAttribute = function(u, t, e) {
                const r = u + "s";
                if (h(t, "attribute"), !this.super || !(t in this.super[r])) throw new Error("Cannot extend " + u + " '" + t + "': did not inherit an " + u + " with that name");
                if (Object.prototype.hasOwnProperty.call(this[r], t)) throw new Error("Cannot extend " + u + " '" + t + "' again");
                const n = this[r][t].formals, i = this[r][t].actionDict, s = Object.create(i);
                Object.keys(e).forEach((u)=>{
                    s[u] = e[u];
                }), this[r][t] = "operation" === u ? new m(t, n, s) : new E(t, s), this[r][t].checkActionDict(this.grammar);
            }, A.prototype.assertNewName = function(u, t) {
                if (p.prototype.hasOwnProperty(u)) throw new Error("Cannot add " + t + " '" + u + "': that's a reserved name");
                if (u in this.operations) throw new Error("Cannot add " + t + " '" + u + "': an operation with that name already exists");
                if (u in this.attributes) throw new Error("Cannot add " + t + " '" + u + "': an attribute with that name already exists");
            }, A.prototype.wrap = function(u, t, e) {
                const r = e || t;
                return u instanceof this.Wrapper ? u : new this.Wrapper(u, t, r);
            }, A.createSemantics = function(u, t) {
                const e = new A(u, void 0 !== t ? t : A.BuiltInSemantics._getSemantics()), n = function(t) {
                    if (!(t instanceof i)) throw new TypeError("Semantics expected a MatchResult, but got " + s.unexpectedObjToString(t));
                    if (t.failed()) throw new TypeError("cannot apply Semantics to " + t.toString());
                    const n = t._cst;
                    if (n.grammar !== u) throw new Error("Cannot use a MatchResult from grammar '" + n.grammar.name + "' with a semantics for '" + u.name + "'");
                    const o = new r(t.input);
                    return e.wrap(n, o.interval(t._cstOffset, t.input.length));
                };
                return n.addOperation = function(u, t) {
                    return e.addOperationOrAttribute("operation", u, t), n;
                }, n.extendOperation = function(u, t) {
                    return e.extendOperationOrAttribute("operation", u, t), n;
                }, n.addAttribute = function(u, t) {
                    return e.addOperationOrAttribute("attribute", u, t), n;
                }, n.extendAttribute = function(u, t) {
                    return e.extendOperationOrAttribute("attribute", u, t), n;
                }, n._getActionDict = function(t) {
                    const r = e.operations[t] || e.attributes[t];
                    if (!r) throw new Error('"' + t + '" is not a valid operation or attribute name in this semantics for "' + u.name + '"');
                    return r.actionDict;
                }, n._remove = function(u) {
                    let t;
                    return u in e.operations ? (t = e.operations[u], delete e.operations[u]) : u in e.attributes && (t = e.attributes[u], delete e.attributes[u]), delete e.Wrapper.prototype[u], t;
                }, n.getOperationNames = function() {
                    return Object.keys(e.operations);
                }, n.getAttributeNames = function() {
                    return Object.keys(e.attributes);
                }, n.getGrammar = function() {
                    return e.grammar;
                }, n.toRecipe = function(u) {
                    return e.toRecipe(u);
                }, n.toString = e.toString.bind(e), n._getSemantics = function() {
                    return e;
                }, n;
            };
            class m {
                constructor(u, t, e, r){
                    this.name = u, this.formals = t, this.actionDict = e, this.builtInDefault = r;
                }
                checkActionDict(u) {
                    u._checkTopDownActionDict(this.typeName, this.name, this.actionDict);
                }
                execute(u, t) {
                    try {
                        const u = t._node.ctorName;
                        let e = this.actionDict[u];
                        return e ? (c.push([
                            this,
                            u
                        ]), e.apply(t, t._children())) : t.isNonterminal() && (e = this.actionDict._nonterminal, e) ? (c.push([
                            this,
                            "_nonterminal",
                            u
                        ]), e.apply(t, t._children())) : (c.push([
                            this,
                            "default action",
                            u
                        ]), this.actionDict._default.apply(t, t._children()));
                    } finally{
                        c.pop();
                    }
                }
            }
            m.prototype.typeName = "operation";
            class E extends m {
                constructor(u, t, e){
                    super(u, [], t, e);
                }
                execute(u, t) {
                    const e = t._node, r = u.attributeKeys[this.name];
                    return e.hasOwnProperty(r) || (e[r] = m.prototype.execute.call(this, u, t)), e[r];
                }
            }
            E.prototype.typeName = "attribute", a.awaitBuiltInRules((u2)=>{
                const t2 = e(35);
                var r;
                !function(u1) {
                    const t1 = {
                        empty () {
                            return this.iteration();
                        },
                        nonEmpty (u, t, e) {
                            return this.iteration([
                                u
                            ].concat(e.children));
                        }
                    };
                    A.BuiltInSemantics = A.createSemantics(u1, null).addOperation("asIteration", {
                        emptyListOf: t1.empty,
                        nonemptyListOf: t1.nonEmpty,
                        EmptyListOf: t1.empty,
                        NonemptyListOf: t1.nonEmpty
                    });
                }(u2), D = (r = t2).createSemantics().addOperation("parse", {
                    AttributeSignature: (u)=>({
                            name: u.parse(),
                            formals: []
                        })
                    ,
                    OperationSignature: (u, t)=>({
                            name: u.parse(),
                            formals: t.children.map((u)=>u.parse()
                            )[0] || []
                        })
                    ,
                    Formals: (u, t, e)=>t.asIteration().children.map((u)=>u.parse()
                        )
                    ,
                    name (u, t) {
                        return this.sourceString;
                    }
                }), l = r;
            }), u3.exports = A;
        },
        function(u, t, e) {
            var r = e(4);
            u.exports = r.makeRecipe([
                "grammar",
                {
                    source: 'OperationsAndAttributes {\n\n  AttributeSignature =\n    name\n\n  OperationSignature =\n    name Formals?\n\n  Formals\n    = "(" ListOf<name, ","> ")"\n\n  name  (a name)\n    = nameFirst nameRest*\n\n  nameFirst\n    = "_"\n    | letter\n\n  nameRest\n    = "_"\n    | alnum\n\n}'
                },
                "OperationsAndAttributes",
                null,
                "AttributeSignature",
                {
                    AttributeSignature: [
                        "define",
                        {
                            sourceInterval: [
                                29,
                                58
                            ]
                        },
                        null,
                        [],
                        [
                            "app",
                            {
                                sourceInterval: [
                                    54,
                                    58
                                ]
                            },
                            "name",
                            []
                        ]
                    ],
                    OperationSignature: [
                        "define",
                        {
                            sourceInterval: [
                                62,
                                100
                            ]
                        },
                        null,
                        [],
                        [
                            "seq",
                            {
                                sourceInterval: [
                                    87,
                                    100
                                ]
                            },
                            [
                                "app",
                                {
                                    sourceInterval: [
                                        87,
                                        91
                                    ]
                                },
                                "name",
                                []
                            ],
                            [
                                "opt",
                                {
                                    sourceInterval: [
                                        92,
                                        100
                                    ]
                                },
                                [
                                    "app",
                                    {
                                        sourceInterval: [
                                            92,
                                            99
                                        ]
                                    },
                                    "Formals",
                                    []
                                ]
                            ]
                        ]
                    ],
                    Formals: [
                        "define",
                        {
                            sourceInterval: [
                                104,
                                143
                            ]
                        },
                        null,
                        [],
                        [
                            "seq",
                            {
                                sourceInterval: [
                                    118,
                                    143
                                ]
                            },
                            [
                                "terminal",
                                {
                                    sourceInterval: [
                                        118,
                                        121
                                    ]
                                },
                                "("
                            ],
                            [
                                "app",
                                {
                                    sourceInterval: [
                                        122,
                                        139
                                    ]
                                },
                                "ListOf",
                                [
                                    [
                                        "app",
                                        {
                                            sourceInterval: [
                                                129,
                                                133
                                            ]
                                        },
                                        "name",
                                        []
                                    ],
                                    [
                                        "terminal",
                                        {
                                            sourceInterval: [
                                                135,
                                                138
                                            ]
                                        },
                                        ","
                                    ]
                                ]
                            ],
                            [
                                "terminal",
                                {
                                    sourceInterval: [
                                        140,
                                        143
                                    ]
                                },
                                ")"
                            ]
                        ]
                    ],
                    name: [
                        "define",
                        {
                            sourceInterval: [
                                147,
                                187
                            ]
                        },
                        "a name",
                        [],
                        [
                            "seq",
                            {
                                sourceInterval: [
                                    168,
                                    187
                                ]
                            },
                            [
                                "app",
                                {
                                    sourceInterval: [
                                        168,
                                        177
                                    ]
                                },
                                "nameFirst",
                                []
                            ],
                            [
                                "star",
                                {
                                    sourceInterval: [
                                        178,
                                        187
                                    ]
                                },
                                [
                                    "app",
                                    {
                                        sourceInterval: [
                                            178,
                                            186
                                        ]
                                    },
                                    "nameRest",
                                    []
                                ]
                            ]
                        ]
                    ],
                    nameFirst: [
                        "define",
                        {
                            sourceInterval: [
                                191,
                                223
                            ]
                        },
                        null,
                        [],
                        [
                            "alt",
                            {
                                sourceInterval: [
                                    207,
                                    223
                                ]
                            },
                            [
                                "terminal",
                                {
                                    sourceInterval: [
                                        207,
                                        210
                                    ]
                                },
                                "_"
                            ],
                            [
                                "app",
                                {
                                    sourceInterval: [
                                        217,
                                        223
                                    ]
                                },
                                "letter",
                                []
                            ]
                        ]
                    ],
                    nameRest: [
                        "define",
                        {
                            sourceInterval: [
                                227,
                                257
                            ]
                        },
                        null,
                        [],
                        [
                            "alt",
                            {
                                sourceInterval: [
                                    242,
                                    257
                                ]
                            },
                            [
                                "terminal",
                                {
                                    sourceInterval: [
                                        242,
                                        245
                                    ]
                                },
                                "_"
                            ],
                            [
                                "app",
                                {
                                    sourceInterval: [
                                        252,
                                        257
                                    ]
                                },
                                "alnum",
                                []
                            ]
                        ]
                    ]
                }
            ]);
        },
        function(u2, t, e) {
            "use strict";
            const r = e(5), n = e(8), i = e(0), s = e(2), o = e(1);
            function a(u) {
                this.name = u;
            }
            a.prototype.sourceInterval = function(u, t) {
                return this.source.subInterval(u, t - u);
            }, a.prototype.ensureSuperGrammar = function() {
                return this.superGrammar || this.withSuperGrammar("BuiltInRules" === this.name ? r.ProtoBuiltInRules : r.BuiltInRules), this.superGrammar;
            }, a.prototype.ensureSuperGrammarRuleForOverriding = function(u, t) {
                const e = this.ensureSuperGrammar().rules[u];
                if (!e) throw s.cannotOverrideUndeclaredRule(u, this.superGrammar.name, t);
                return e;
            }, a.prototype.installOverriddenOrExtendedRule = function(u, t, e, r) {
                const n = i.getDuplicates(t);
                if (n.length > 0) throw s.duplicateParameterNames(u, n, r);
                const o = this.ensureSuperGrammar().rules[u], a = o.formals, c = a ? a.length : 0;
                if (t.length !== c) throw s.wrongNumberOfParameters(u, c, t.length, r);
                return this.install(u, t, e, o.description, r);
            }, a.prototype.install = function(u, t, e, r, n) {
                return this.rules[u] = {
                    body: e.introduceParams(t),
                    formals: t,
                    description: r,
                    source: n
                }, this;
            }, a.prototype.withSuperGrammar = function(u) {
                if (this.superGrammar) throw new Error("the super grammar of a GrammarDecl cannot be set more than once");
                return this.superGrammar = u, this.rules = Object.create(u.rules), u.isBuiltIn() || (this.defaultStartRule = u.defaultStartRule), this;
            }, a.prototype.withDefaultStartRule = function(u) {
                return this.defaultStartRule = u, this;
            }, a.prototype.withSource = function(u) {
                return this.source = new n(u).interval(0, u.length), this;
            }, a.prototype.build = function() {
                const u = new r(this.name, this.ensureSuperGrammar(), this.rules, this.defaultStartRule), t = [];
                let e = !1;
                return Object.keys(u.rules).forEach((r)=>{
                    const n = u.rules[r].body;
                    try {
                        n.assertChoicesHaveUniformArity(r);
                    } catch (u1) {
                        t.push(u1);
                    }
                    try {
                        n.assertAllApplicationsAreValid(r, u);
                    } catch (u3) {
                        t.push(u3), e = !0;
                    }
                }), e || Object.keys(u.rules).forEach((e)=>{
                    const r = u.rules[e].body;
                    try {
                        r.assertIteratedExprsAreNotNullable(u, []);
                    } catch (u1) {
                        t.push(u1);
                    }
                }), t.length > 0 && s.throwErrors(t), this.source && (u.source = this.source), u;
            }, a.prototype.define = function(u, t, e, r, n) {
                if (this.ensureSuperGrammar(), this.superGrammar.rules[u]) throw s.duplicateRuleDeclaration(u, this.name, this.superGrammar.name, n);
                if (this.rules[u]) throw s.duplicateRuleDeclaration(u, this.name, this.name, n);
                const o = i.getDuplicates(t);
                if (o.length > 0) throw s.duplicateParameterNames(u, o, n);
                return this.install(u, t, e, r, n);
            }, a.prototype.override = function(u, t, e, r, n) {
                return this.ensureSuperGrammarRuleForOverriding(u, n), this.installOverriddenOrExtendedRule(u, t, e, n), this;
            }, a.prototype.extend = function(u, t, e, r, n) {
                if (!this.ensureSuperGrammar().rules[u]) throw s.cannotExtendUndeclaredRule(u, this.superGrammar.name, n);
                const i = new o.Extend(this.superGrammar, u, e);
                return i.source = e.source, this.installOverriddenOrExtendedRule(u, t, i, n), this;
            }, u2.exports = a;
        },
        function(u, t, e) {
            "use strict";
            u.exports = "16.0.0";
        },
        function(u, t, e) {
            "use strict";
            u.exports = {
                VisitorFamily: e(39),
                semanticsForToAST: e(13).semantics,
                toAST: e(13).helper
            };
        },
        function(u3, t, e) {
            "use strict";
            const r = e(0).assert;
            function n(u, t, e) {
                return e(t[u]);
            }
            function i(u, t, e) {
                return t[u].map(e);
            }
            function s(u) {
                const t = u.split(/ ?\[\]/);
                return 2 === t.length ? i.bind(null, t[0]) : n.bind(null, u);
            }
            function o(u, t, e) {
                return u.map((u)=>u(t, e)
                );
            }
            function a(u) {
                return /^[a-zA-Z_][0-9a-zA-Z_]*$/.test(u);
            }
            function c(u) {
                return u.trim();
            }
            function l(u) {
                this._shapes = u.shapes, this._getTag = u.getTag, this.Adapter = function(u, t) {
                    this._adaptee = u, this._family = t;
                }, this.Adapter.prototype.valueOf = function() {
                    throw new Error("heeey!");
                }, this.operations = {
                }, this._arities = Object.create(null), this._getChildren = Object.create(null), Object.keys(this._shapes).forEach((u)=>{
                    const t = this._shapes[u];
                    this._getChildren[u] = (function(u) {
                        return "string" == typeof u ? o.bind(null, [
                            s(u)
                        ]) : Array.isArray(u) ? o.bind(null, u.map(s)) : (r("function" == typeof u, "Expected a string, Array, or function"), r(2 === u.length, "Expected a function of arity 2, got " + u.length), u);
                    })(t), "function" != typeof t && (this._arities[u] = Array.isArray(t) ? t.length : 1);
                }), this._wrap = (u)=>new this.Adapter(u, this)
                ;
            }
            l.prototype.wrap = function(u) {
                return this._wrap(u);
            }, l.prototype._checkActionDict = function(u) {
                Object.keys(u).forEach((t)=>{
                    r(t in this._getChildren, "Unrecognized action name '" + t + "'");
                    const e = u[t];
                    if (r("function" == typeof e, "Key '" + t + "': expected function, got " + e), t in this._arities) {
                        const e = this._arities[t], n = u[t].length;
                        r(n === e, "Action '" + t + "' has the wrong arity: expected " + e + ", got " + n);
                    }
                });
            }, l.prototype.addOperation = function(u2, t) {
                const e = function(u) {
                    const t = u.split(/[()]/).map(c);
                    if (3 === t.length && "" === t[2]) {
                        const u = t[0];
                        let e = [];
                        if (t[1].length > 0 && (e = t[1].split(",").map(c)), a(u) && e.every(a)) return {
                            name: u,
                            formals: e
                        };
                    }
                    throw new Error("Invalid operation signature: " + u);
                }(u2), n = e.name;
                this._checkActionDict(t), this.operations[n] = {
                    name: n,
                    formals: e.formals,
                    actions: t
                };
                const i = this;
                return this.Adapter.prototype[n] = function() {
                    const u = i._getTag(this._adaptee);
                    r(u in i._getChildren, "getTag returned unrecognized tag '" + u + "'"), r(u in t, "No action for '" + u + "' in operation '" + n + "'");
                    const s = Object.create(null);
                    for(let u1 = 0; u1 < arguments.length; u1++)s[e.formals[u1]] = arguments[u1];
                    const o = this.args;
                    this.args = s;
                    const a = t[u].apply(this, i._getChildren[u](this._adaptee, i._wrap));
                    return this.args = o, a;
                }, this;
            }, u3.exports = l;
        },
        function(u, t, e) {
            var r = e(4);
            u.exports = r.makeRecipe([
                "grammar",
                {
                    source: 'BuiltInRules {\n\n  alnum  (an alpha-numeric character)\n    = letter\n    | digit\n\n  letter  (a letter)\n    = lower\n    | upper\n    | unicodeLtmo\n\n  digit  (a digit)\n    = "0".."9"\n\n  hexDigit  (a hexadecimal digit)\n    = digit\n    | "a".."f"\n    | "A".."F"\n\n  ListOf<elem, sep>\n    = NonemptyListOf<elem, sep>\n    | EmptyListOf<elem, sep>\n\n  NonemptyListOf<elem, sep>\n    = elem (sep elem)*\n\n  EmptyListOf<elem, sep>\n    = /* nothing */\n\n  listOf<elem, sep>\n    = nonemptyListOf<elem, sep>\n    | emptyListOf<elem, sep>\n\n  nonemptyListOf<elem, sep>\n    = elem (sep elem)*\n\n  emptyListOf<elem, sep>\n    = /* nothing */\n\n}'
                },
                "BuiltInRules",
                null,
                null,
                {
                    alnum: [
                        "define",
                        {
                            sourceInterval: [
                                18,
                                78
                            ]
                        },
                        "an alpha-numeric character",
                        [],
                        [
                            "alt",
                            {
                                sourceInterval: [
                                    60,
                                    78
                                ]
                            },
                            [
                                "app",
                                {
                                    sourceInterval: [
                                        60,
                                        66
                                    ]
                                },
                                "letter",
                                []
                            ],
                            [
                                "app",
                                {
                                    sourceInterval: [
                                        73,
                                        78
                                    ]
                                },
                                "digit",
                                []
                            ]
                        ]
                    ],
                    letter: [
                        "define",
                        {
                            sourceInterval: [
                                82,
                                142
                            ]
                        },
                        "a letter",
                        [],
                        [
                            "alt",
                            {
                                sourceInterval: [
                                    107,
                                    142
                                ]
                            },
                            [
                                "app",
                                {
                                    sourceInterval: [
                                        107,
                                        112
                                    ]
                                },
                                "lower",
                                []
                            ],
                            [
                                "app",
                                {
                                    sourceInterval: [
                                        119,
                                        124
                                    ]
                                },
                                "upper",
                                []
                            ],
                            [
                                "app",
                                {
                                    sourceInterval: [
                                        131,
                                        142
                                    ]
                                },
                                "unicodeLtmo",
                                []
                            ]
                        ]
                    ],
                    digit: [
                        "define",
                        {
                            sourceInterval: [
                                146,
                                177
                            ]
                        },
                        "a digit",
                        [],
                        [
                            "range",
                            {
                                sourceInterval: [
                                    169,
                                    177
                                ]
                            },
                            "0",
                            "9"
                        ]
                    ],
                    hexDigit: [
                        "define",
                        {
                            sourceInterval: [
                                181,
                                254
                            ]
                        },
                        "a hexadecimal digit",
                        [],
                        [
                            "alt",
                            {
                                sourceInterval: [
                                    219,
                                    254
                                ]
                            },
                            [
                                "app",
                                {
                                    sourceInterval: [
                                        219,
                                        224
                                    ]
                                },
                                "digit",
                                []
                            ],
                            [
                                "range",
                                {
                                    sourceInterval: [
                                        231,
                                        239
                                    ]
                                },
                                "a",
                                "f"
                            ],
                            [
                                "range",
                                {
                                    sourceInterval: [
                                        246,
                                        254
                                    ]
                                },
                                "A",
                                "F"
                            ]
                        ]
                    ],
                    ListOf: [
                        "define",
                        {
                            sourceInterval: [
                                258,
                                336
                            ]
                        },
                        null,
                        [
                            "elem",
                            "sep"
                        ],
                        [
                            "alt",
                            {
                                sourceInterval: [
                                    282,
                                    336
                                ]
                            },
                            [
                                "app",
                                {
                                    sourceInterval: [
                                        282,
                                        307
                                    ]
                                },
                                "NonemptyListOf",
                                [
                                    [
                                        "param",
                                        {
                                            sourceInterval: [
                                                297,
                                                301
                                            ]
                                        },
                                        0
                                    ],
                                    [
                                        "param",
                                        {
                                            sourceInterval: [
                                                303,
                                                306
                                            ]
                                        },
                                        1
                                    ]
                                ]
                            ],
                            [
                                "app",
                                {
                                    sourceInterval: [
                                        314,
                                        336
                                    ]
                                },
                                "EmptyListOf",
                                [
                                    [
                                        "param",
                                        {
                                            sourceInterval: [
                                                326,
                                                330
                                            ]
                                        },
                                        0
                                    ],
                                    [
                                        "param",
                                        {
                                            sourceInterval: [
                                                332,
                                                335
                                            ]
                                        },
                                        1
                                    ]
                                ]
                            ]
                        ]
                    ],
                    NonemptyListOf: [
                        "define",
                        {
                            sourceInterval: [
                                340,
                                388
                            ]
                        },
                        null,
                        [
                            "elem",
                            "sep"
                        ],
                        [
                            "seq",
                            {
                                sourceInterval: [
                                    372,
                                    388
                                ]
                            },
                            [
                                "param",
                                {
                                    sourceInterval: [
                                        372,
                                        376
                                    ]
                                },
                                0
                            ],
                            [
                                "star",
                                {
                                    sourceInterval: [
                                        377,
                                        388
                                    ]
                                },
                                [
                                    "seq",
                                    {
                                        sourceInterval: [
                                            378,
                                            386
                                        ]
                                    },
                                    [
                                        "param",
                                        {
                                            sourceInterval: [
                                                378,
                                                381
                                            ]
                                        },
                                        1
                                    ],
                                    [
                                        "param",
                                        {
                                            sourceInterval: [
                                                382,
                                                386
                                            ]
                                        },
                                        0
                                    ]
                                ]
                            ]
                        ]
                    ],
                    EmptyListOf: [
                        "define",
                        {
                            sourceInterval: [
                                392,
                                434
                            ]
                        },
                        null,
                        [
                            "elem",
                            "sep"
                        ],
                        [
                            "seq",
                            {
                                sourceInterval: [
                                    438,
                                    438
                                ]
                            }
                        ]
                    ],
                    listOf: [
                        "define",
                        {
                            sourceInterval: [
                                438,
                                516
                            ]
                        },
                        null,
                        [
                            "elem",
                            "sep"
                        ],
                        [
                            "alt",
                            {
                                sourceInterval: [
                                    462,
                                    516
                                ]
                            },
                            [
                                "app",
                                {
                                    sourceInterval: [
                                        462,
                                        487
                                    ]
                                },
                                "nonemptyListOf",
                                [
                                    [
                                        "param",
                                        {
                                            sourceInterval: [
                                                477,
                                                481
                                            ]
                                        },
                                        0
                                    ],
                                    [
                                        "param",
                                        {
                                            sourceInterval: [
                                                483,
                                                486
                                            ]
                                        },
                                        1
                                    ]
                                ]
                            ],
                            [
                                "app",
                                {
                                    sourceInterval: [
                                        494,
                                        516
                                    ]
                                },
                                "emptyListOf",
                                [
                                    [
                                        "param",
                                        {
                                            sourceInterval: [
                                                506,
                                                510
                                            ]
                                        },
                                        0
                                    ],
                                    [
                                        "param",
                                        {
                                            sourceInterval: [
                                                512,
                                                515
                                            ]
                                        },
                                        1
                                    ]
                                ]
                            ]
                        ]
                    ],
                    nonemptyListOf: [
                        "define",
                        {
                            sourceInterval: [
                                520,
                                568
                            ]
                        },
                        null,
                        [
                            "elem",
                            "sep"
                        ],
                        [
                            "seq",
                            {
                                sourceInterval: [
                                    552,
                                    568
                                ]
                            },
                            [
                                "param",
                                {
                                    sourceInterval: [
                                        552,
                                        556
                                    ]
                                },
                                0
                            ],
                            [
                                "star",
                                {
                                    sourceInterval: [
                                        557,
                                        568
                                    ]
                                },
                                [
                                    "seq",
                                    {
                                        sourceInterval: [
                                            558,
                                            566
                                        ]
                                    },
                                    [
                                        "param",
                                        {
                                            sourceInterval: [
                                                558,
                                                561
                                            ]
                                        },
                                        1
                                    ],
                                    [
                                        "param",
                                        {
                                            sourceInterval: [
                                                562,
                                                566
                                            ]
                                        },
                                        0
                                    ]
                                ]
                            ]
                        ]
                    ],
                    emptyListOf: [
                        "define",
                        {
                            sourceInterval: [
                                572,
                                614
                            ]
                        },
                        null,
                        [
                            "elem",
                            "sep"
                        ],
                        [
                            "seq",
                            {
                                sourceInterval: [
                                    616,
                                    616
                                ]
                            }
                        ]
                    ]
                }
            ]);
        },
        function(u, t, e) {
            var r = e(4);
            u.exports = r.makeRecipe([
                "grammar",
                {
                    source: 'Ohm {\n\n  Grammars\n    = Grammar*\n\n  Grammar\n    = ident SuperGrammar? "{" Rule* "}"\n\n  SuperGrammar\n    = "<:" ident\n\n  Rule\n    = ident Formals? ruleDescr? "="  RuleBody  -- define\n    | ident Formals?            ":=" OverrideRuleBody  -- override\n    | ident Formals?            "+=" RuleBody  -- extend\n\n  RuleBody\n    = "|"? NonemptyListOf<TopLevelTerm, "|">\n\n  TopLevelTerm\n    = Seq caseName  -- inline\n    | Seq\n\n  OverrideRuleBody\n    = "|"? NonemptyListOf<OverrideTopLevelTerm, "|">\n\n  OverrideTopLevelTerm\n    = "..."  -- superSplice\n    | TopLevelTerm\n\n  Formals\n    = "<" ListOf<ident, ","> ">"\n\n  Params\n    = "<" ListOf<Seq, ","> ">"\n\n  Alt\n    = NonemptyListOf<Seq, "|">\n\n  Seq\n    = Iter*\n\n  Iter\n    = Pred "*"  -- star\n    | Pred "+"  -- plus\n    | Pred "?"  -- opt\n    | Pred\n\n  Pred\n    = "~" Lex  -- not\n    | "&" Lex  -- lookahead\n    | Lex\n\n  Lex\n    = "#" Base  -- lex\n    | Base\n\n  Base\n    = ident Params? ~(ruleDescr? "=" | ":=" | "+=")  -- application\n    | oneCharTerminal ".." oneCharTerminal           -- range\n    | terminal                                       -- terminal\n    | "(" Alt ")"                                    -- paren\n\n  ruleDescr  (a rule description)\n    = "(" ruleDescrText ")"\n\n  ruleDescrText\n    = (~")" any)*\n\n  caseName\n    = "--" (~"\\n" space)* name (~"\\n" space)* ("\\n" | &"}")\n\n  name  (a name)\n    = nameFirst nameRest*\n\n  nameFirst\n    = "_"\n    | letter\n\n  nameRest\n    = "_"\n    | alnum\n\n  ident  (an identifier)\n    = name\n\n  terminal\n    = "\\"" terminalChar* "\\""\n\n  oneCharTerminal\n    = "\\"" terminalChar "\\""\n\n  terminalChar\n    = escapeChar\n    | ~"\\\\" ~"\\"" ~"\\n" any\n\n  escapeChar  (an escape sequence)\n    = "\\\\\\\\"                                     -- backslash\n    | "\\\\\\""                                     -- doubleQuote\n    | "\\\\\\\'"                                     -- singleQuote\n    | "\\\\b"                                      -- backspace\n    | "\\\\n"                                      -- lineFeed\n    | "\\\\r"                                      -- carriageReturn\n    | "\\\\t"                                      -- tab\n    | "\\\\u" hexDigit hexDigit hexDigit hexDigit  -- unicodeEscape\n    | "\\\\x" hexDigit hexDigit                    -- hexEscape\n\n  space\n   += comment\n\n  comment\n    = "//" (~"\\n" any)* &("\\n" | end)  -- singleLine\n    | "/*" (~"*/" any)* "*/"  -- multiLine\n\n  tokens = token*\n\n  token = caseName | comment | ident | operator | punctuation | terminal | any\n\n  operator = "<:" | "=" | ":=" | "+=" | "*" | "+" | "?" | "~" | "&"\n\n  punctuation = "<" | ">" | "," | "--"\n}'
                },
                "Ohm",
                null,
                "Grammars",
                {
                    Grammars: [
                        "define",
                        {
                            sourceInterval: [
                                9,
                                32
                            ]
                        },
                        null,
                        [],
                        [
                            "star",
                            {
                                sourceInterval: [
                                    24,
                                    32
                                ]
                            },
                            [
                                "app",
                                {
                                    sourceInterval: [
                                        24,
                                        31
                                    ]
                                },
                                "Grammar",
                                []
                            ]
                        ]
                    ],
                    Grammar: [
                        "define",
                        {
                            sourceInterval: [
                                36,
                                83
                            ]
                        },
                        null,
                        [],
                        [
                            "seq",
                            {
                                sourceInterval: [
                                    50,
                                    83
                                ]
                            },
                            [
                                "app",
                                {
                                    sourceInterval: [
                                        50,
                                        55
                                    ]
                                },
                                "ident",
                                []
                            ],
                            [
                                "opt",
                                {
                                    sourceInterval: [
                                        56,
                                        69
                                    ]
                                },
                                [
                                    "app",
                                    {
                                        sourceInterval: [
                                            56,
                                            68
                                        ]
                                    },
                                    "SuperGrammar",
                                    []
                                ]
                            ],
                            [
                                "terminal",
                                {
                                    sourceInterval: [
                                        70,
                                        73
                                    ]
                                },
                                "{"
                            ],
                            [
                                "star",
                                {
                                    sourceInterval: [
                                        74,
                                        79
                                    ]
                                },
                                [
                                    "app",
                                    {
                                        sourceInterval: [
                                            74,
                                            78
                                        ]
                                    },
                                    "Rule",
                                    []
                                ]
                            ],
                            [
                                "terminal",
                                {
                                    sourceInterval: [
                                        80,
                                        83
                                    ]
                                },
                                "}"
                            ]
                        ]
                    ],
                    SuperGrammar: [
                        "define",
                        {
                            sourceInterval: [
                                87,
                                116
                            ]
                        },
                        null,
                        [],
                        [
                            "seq",
                            {
                                sourceInterval: [
                                    106,
                                    116
                                ]
                            },
                            [
                                "terminal",
                                {
                                    sourceInterval: [
                                        106,
                                        110
                                    ]
                                },
                                "<:"
                            ],
                            [
                                "app",
                                {
                                    sourceInterval: [
                                        111,
                                        116
                                    ]
                                },
                                "ident",
                                []
                            ]
                        ]
                    ],
                    Rule_define: [
                        "define",
                        {
                            sourceInterval: [
                                131,
                                181
                            ]
                        },
                        null,
                        [],
                        [
                            "seq",
                            {
                                sourceInterval: [
                                    131,
                                    170
                                ]
                            },
                            [
                                "app",
                                {
                                    sourceInterval: [
                                        131,
                                        136
                                    ]
                                },
                                "ident",
                                []
                            ],
                            [
                                "opt",
                                {
                                    sourceInterval: [
                                        137,
                                        145
                                    ]
                                },
                                [
                                    "app",
                                    {
                                        sourceInterval: [
                                            137,
                                            144
                                        ]
                                    },
                                    "Formals",
                                    []
                                ]
                            ],
                            [
                                "opt",
                                {
                                    sourceInterval: [
                                        146,
                                        156
                                    ]
                                },
                                [
                                    "app",
                                    {
                                        sourceInterval: [
                                            146,
                                            155
                                        ]
                                    },
                                    "ruleDescr",
                                    []
                                ]
                            ],
                            [
                                "terminal",
                                {
                                    sourceInterval: [
                                        157,
                                        160
                                    ]
                                },
                                "="
                            ],
                            [
                                "app",
                                {
                                    sourceInterval: [
                                        162,
                                        170
                                    ]
                                },
                                "RuleBody",
                                []
                            ]
                        ]
                    ],
                    Rule_override: [
                        "define",
                        {
                            sourceInterval: [
                                188,
                                248
                            ]
                        },
                        null,
                        [],
                        [
                            "seq",
                            {
                                sourceInterval: [
                                    188,
                                    235
                                ]
                            },
                            [
                                "app",
                                {
                                    sourceInterval: [
                                        188,
                                        193
                                    ]
                                },
                                "ident",
                                []
                            ],
                            [
                                "opt",
                                {
                                    sourceInterval: [
                                        194,
                                        202
                                    ]
                                },
                                [
                                    "app",
                                    {
                                        sourceInterval: [
                                            194,
                                            201
                                        ]
                                    },
                                    "Formals",
                                    []
                                ]
                            ],
                            [
                                "terminal",
                                {
                                    sourceInterval: [
                                        214,
                                        218
                                    ]
                                },
                                ":="
                            ],
                            [
                                "app",
                                {
                                    sourceInterval: [
                                        219,
                                        235
                                    ]
                                },
                                "OverrideRuleBody",
                                []
                            ]
                        ]
                    ],
                    Rule_extend: [
                        "define",
                        {
                            sourceInterval: [
                                255,
                                305
                            ]
                        },
                        null,
                        [],
                        [
                            "seq",
                            {
                                sourceInterval: [
                                    255,
                                    294
                                ]
                            },
                            [
                                "app",
                                {
                                    sourceInterval: [
                                        255,
                                        260
                                    ]
                                },
                                "ident",
                                []
                            ],
                            [
                                "opt",
                                {
                                    sourceInterval: [
                                        261,
                                        269
                                    ]
                                },
                                [
                                    "app",
                                    {
                                        sourceInterval: [
                                            261,
                                            268
                                        ]
                                    },
                                    "Formals",
                                    []
                                ]
                            ],
                            [
                                "terminal",
                                {
                                    sourceInterval: [
                                        281,
                                        285
                                    ]
                                },
                                "+="
                            ],
                            [
                                "app",
                                {
                                    sourceInterval: [
                                        286,
                                        294
                                    ]
                                },
                                "RuleBody",
                                []
                            ]
                        ]
                    ],
                    Rule: [
                        "define",
                        {
                            sourceInterval: [
                                120,
                                305
                            ]
                        },
                        null,
                        [],
                        [
                            "alt",
                            {
                                sourceInterval: [
                                    131,
                                    305
                                ]
                            },
                            [
                                "app",
                                {
                                    sourceInterval: [
                                        131,
                                        170
                                    ]
                                },
                                "Rule_define",
                                []
                            ],
                            [
                                "app",
                                {
                                    sourceInterval: [
                                        188,
                                        235
                                    ]
                                },
                                "Rule_override",
                                []
                            ],
                            [
                                "app",
                                {
                                    sourceInterval: [
                                        255,
                                        294
                                    ]
                                },
                                "Rule_extend",
                                []
                            ]
                        ]
                    ],
                    RuleBody: [
                        "define",
                        {
                            sourceInterval: [
                                309,
                                362
                            ]
                        },
                        null,
                        [],
                        [
                            "seq",
                            {
                                sourceInterval: [
                                    324,
                                    362
                                ]
                            },
                            [
                                "opt",
                                {
                                    sourceInterval: [
                                        324,
                                        328
                                    ]
                                },
                                [
                                    "terminal",
                                    {
                                        sourceInterval: [
                                            324,
                                            327
                                        ]
                                    },
                                    "|"
                                ]
                            ],
                            [
                                "app",
                                {
                                    sourceInterval: [
                                        329,
                                        362
                                    ]
                                },
                                "NonemptyListOf",
                                [
                                    [
                                        "app",
                                        {
                                            sourceInterval: [
                                                344,
                                                356
                                            ]
                                        },
                                        "TopLevelTerm",
                                        []
                                    ],
                                    [
                                        "terminal",
                                        {
                                            sourceInterval: [
                                                358,
                                                361
                                            ]
                                        },
                                        "|"
                                    ]
                                ]
                            ]
                        ]
                    ],
                    TopLevelTerm_inline: [
                        "define",
                        {
                            sourceInterval: [
                                385,
                                408
                            ]
                        },
                        null,
                        [],
                        [
                            "seq",
                            {
                                sourceInterval: [
                                    385,
                                    397
                                ]
                            },
                            [
                                "app",
                                {
                                    sourceInterval: [
                                        385,
                                        388
                                    ]
                                },
                                "Seq",
                                []
                            ],
                            [
                                "app",
                                {
                                    sourceInterval: [
                                        389,
                                        397
                                    ]
                                },
                                "caseName",
                                []
                            ]
                        ]
                    ],
                    TopLevelTerm: [
                        "define",
                        {
                            sourceInterval: [
                                366,
                                418
                            ]
                        },
                        null,
                        [],
                        [
                            "alt",
                            {
                                sourceInterval: [
                                    385,
                                    418
                                ]
                            },
                            [
                                "app",
                                {
                                    sourceInterval: [
                                        385,
                                        397
                                    ]
                                },
                                "TopLevelTerm_inline",
                                []
                            ],
                            [
                                "app",
                                {
                                    sourceInterval: [
                                        415,
                                        418
                                    ]
                                },
                                "Seq",
                                []
                            ]
                        ]
                    ],
                    OverrideRuleBody: [
                        "define",
                        {
                            sourceInterval: [
                                422,
                                491
                            ]
                        },
                        null,
                        [],
                        [
                            "seq",
                            {
                                sourceInterval: [
                                    445,
                                    491
                                ]
                            },
                            [
                                "opt",
                                {
                                    sourceInterval: [
                                        445,
                                        449
                                    ]
                                },
                                [
                                    "terminal",
                                    {
                                        sourceInterval: [
                                            445,
                                            448
                                        ]
                                    },
                                    "|"
                                ]
                            ],
                            [
                                "app",
                                {
                                    sourceInterval: [
                                        450,
                                        491
                                    ]
                                },
                                "NonemptyListOf",
                                [
                                    [
                                        "app",
                                        {
                                            sourceInterval: [
                                                465,
                                                485
                                            ]
                                        },
                                        "OverrideTopLevelTerm",
                                        []
                                    ],
                                    [
                                        "terminal",
                                        {
                                            sourceInterval: [
                                                487,
                                                490
                                            ]
                                        },
                                        "|"
                                    ]
                                ]
                            ]
                        ]
                    ],
                    OverrideTopLevelTerm_superSplice: [
                        "define",
                        {
                            sourceInterval: [
                                522,
                                543
                            ]
                        },
                        null,
                        [],
                        [
                            "terminal",
                            {
                                sourceInterval: [
                                    522,
                                    527
                                ]
                            },
                            "..."
                        ]
                    ],
                    OverrideTopLevelTerm: [
                        "define",
                        {
                            sourceInterval: [
                                495,
                                562
                            ]
                        },
                        null,
                        [],
                        [
                            "alt",
                            {
                                sourceInterval: [
                                    522,
                                    562
                                ]
                            },
                            [
                                "app",
                                {
                                    sourceInterval: [
                                        522,
                                        527
                                    ]
                                },
                                "OverrideTopLevelTerm_superSplice",
                                []
                            ],
                            [
                                "app",
                                {
                                    sourceInterval: [
                                        550,
                                        562
                                    ]
                                },
                                "TopLevelTerm",
                                []
                            ]
                        ]
                    ],
                    Formals: [
                        "define",
                        {
                            sourceInterval: [
                                566,
                                606
                            ]
                        },
                        null,
                        [],
                        [
                            "seq",
                            {
                                sourceInterval: [
                                    580,
                                    606
                                ]
                            },
                            [
                                "terminal",
                                {
                                    sourceInterval: [
                                        580,
                                        583
                                    ]
                                },
                                "<"
                            ],
                            [
                                "app",
                                {
                                    sourceInterval: [
                                        584,
                                        602
                                    ]
                                },
                                "ListOf",
                                [
                                    [
                                        "app",
                                        {
                                            sourceInterval: [
                                                591,
                                                596
                                            ]
                                        },
                                        "ident",
                                        []
                                    ],
                                    [
                                        "terminal",
                                        {
                                            sourceInterval: [
                                                598,
                                                601
                                            ]
                                        },
                                        ","
                                    ]
                                ]
                            ],
                            [
                                "terminal",
                                {
                                    sourceInterval: [
                                        603,
                                        606
                                    ]
                                },
                                ">"
                            ]
                        ]
                    ],
                    Params: [
                        "define",
                        {
                            sourceInterval: [
                                610,
                                647
                            ]
                        },
                        null,
                        [],
                        [
                            "seq",
                            {
                                sourceInterval: [
                                    623,
                                    647
                                ]
                            },
                            [
                                "terminal",
                                {
                                    sourceInterval: [
                                        623,
                                        626
                                    ]
                                },
                                "<"
                            ],
                            [
                                "app",
                                {
                                    sourceInterval: [
                                        627,
                                        643
                                    ]
                                },
                                "ListOf",
                                [
                                    [
                                        "app",
                                        {
                                            sourceInterval: [
                                                634,
                                                637
                                            ]
                                        },
                                        "Seq",
                                        []
                                    ],
                                    [
                                        "terminal",
                                        {
                                            sourceInterval: [
                                                639,
                                                642
                                            ]
                                        },
                                        ","
                                    ]
                                ]
                            ],
                            [
                                "terminal",
                                {
                                    sourceInterval: [
                                        644,
                                        647
                                    ]
                                },
                                ">"
                            ]
                        ]
                    ],
                    Alt: [
                        "define",
                        {
                            sourceInterval: [
                                651,
                                685
                            ]
                        },
                        null,
                        [],
                        [
                            "app",
                            {
                                sourceInterval: [
                                    661,
                                    685
                                ]
                            },
                            "NonemptyListOf",
                            [
                                [
                                    "app",
                                    {
                                        sourceInterval: [
                                            676,
                                            679
                                        ]
                                    },
                                    "Seq",
                                    []
                                ],
                                [
                                    "terminal",
                                    {
                                        sourceInterval: [
                                            681,
                                            684
                                        ]
                                    },
                                    "|"
                                ]
                            ]
                        ]
                    ],
                    Seq: [
                        "define",
                        {
                            sourceInterval: [
                                689,
                                704
                            ]
                        },
                        null,
                        [],
                        [
                            "star",
                            {
                                sourceInterval: [
                                    699,
                                    704
                                ]
                            },
                            [
                                "app",
                                {
                                    sourceInterval: [
                                        699,
                                        703
                                    ]
                                },
                                "Iter",
                                []
                            ]
                        ]
                    ],
                    Iter_star: [
                        "define",
                        {
                            sourceInterval: [
                                719,
                                736
                            ]
                        },
                        null,
                        [],
                        [
                            "seq",
                            {
                                sourceInterval: [
                                    719,
                                    727
                                ]
                            },
                            [
                                "app",
                                {
                                    sourceInterval: [
                                        719,
                                        723
                                    ]
                                },
                                "Pred",
                                []
                            ],
                            [
                                "terminal",
                                {
                                    sourceInterval: [
                                        724,
                                        727
                                    ]
                                },
                                "*"
                            ]
                        ]
                    ],
                    Iter_plus: [
                        "define",
                        {
                            sourceInterval: [
                                743,
                                760
                            ]
                        },
                        null,
                        [],
                        [
                            "seq",
                            {
                                sourceInterval: [
                                    743,
                                    751
                                ]
                            },
                            [
                                "app",
                                {
                                    sourceInterval: [
                                        743,
                                        747
                                    ]
                                },
                                "Pred",
                                []
                            ],
                            [
                                "terminal",
                                {
                                    sourceInterval: [
                                        748,
                                        751
                                    ]
                                },
                                "+"
                            ]
                        ]
                    ],
                    Iter_opt: [
                        "define",
                        {
                            sourceInterval: [
                                767,
                                783
                            ]
                        },
                        null,
                        [],
                        [
                            "seq",
                            {
                                sourceInterval: [
                                    767,
                                    775
                                ]
                            },
                            [
                                "app",
                                {
                                    sourceInterval: [
                                        767,
                                        771
                                    ]
                                },
                                "Pred",
                                []
                            ],
                            [
                                "terminal",
                                {
                                    sourceInterval: [
                                        772,
                                        775
                                    ]
                                },
                                "?"
                            ]
                        ]
                    ],
                    Iter: [
                        "define",
                        {
                            sourceInterval: [
                                708,
                                794
                            ]
                        },
                        null,
                        [],
                        [
                            "alt",
                            {
                                sourceInterval: [
                                    719,
                                    794
                                ]
                            },
                            [
                                "app",
                                {
                                    sourceInterval: [
                                        719,
                                        727
                                    ]
                                },
                                "Iter_star",
                                []
                            ],
                            [
                                "app",
                                {
                                    sourceInterval: [
                                        743,
                                        751
                                    ]
                                },
                                "Iter_plus",
                                []
                            ],
                            [
                                "app",
                                {
                                    sourceInterval: [
                                        767,
                                        775
                                    ]
                                },
                                "Iter_opt",
                                []
                            ],
                            [
                                "app",
                                {
                                    sourceInterval: [
                                        790,
                                        794
                                    ]
                                },
                                "Pred",
                                []
                            ]
                        ]
                    ],
                    Pred_not: [
                        "define",
                        {
                            sourceInterval: [
                                809,
                                824
                            ]
                        },
                        null,
                        [],
                        [
                            "seq",
                            {
                                sourceInterval: [
                                    809,
                                    816
                                ]
                            },
                            [
                                "terminal",
                                {
                                    sourceInterval: [
                                        809,
                                        812
                                    ]
                                },
                                "~"
                            ],
                            [
                                "app",
                                {
                                    sourceInterval: [
                                        813,
                                        816
                                    ]
                                },
                                "Lex",
                                []
                            ]
                        ]
                    ],
                    Pred_lookahead: [
                        "define",
                        {
                            sourceInterval: [
                                831,
                                852
                            ]
                        },
                        null,
                        [],
                        [
                            "seq",
                            {
                                sourceInterval: [
                                    831,
                                    838
                                ]
                            },
                            [
                                "terminal",
                                {
                                    sourceInterval: [
                                        831,
                                        834
                                    ]
                                },
                                "&"
                            ],
                            [
                                "app",
                                {
                                    sourceInterval: [
                                        835,
                                        838
                                    ]
                                },
                                "Lex",
                                []
                            ]
                        ]
                    ],
                    Pred: [
                        "define",
                        {
                            sourceInterval: [
                                798,
                                862
                            ]
                        },
                        null,
                        [],
                        [
                            "alt",
                            {
                                sourceInterval: [
                                    809,
                                    862
                                ]
                            },
                            [
                                "app",
                                {
                                    sourceInterval: [
                                        809,
                                        816
                                    ]
                                },
                                "Pred_not",
                                []
                            ],
                            [
                                "app",
                                {
                                    sourceInterval: [
                                        831,
                                        838
                                    ]
                                },
                                "Pred_lookahead",
                                []
                            ],
                            [
                                "app",
                                {
                                    sourceInterval: [
                                        859,
                                        862
                                    ]
                                },
                                "Lex",
                                []
                            ]
                        ]
                    ],
                    Lex_lex: [
                        "define",
                        {
                            sourceInterval: [
                                876,
                                892
                            ]
                        },
                        null,
                        [],
                        [
                            "seq",
                            {
                                sourceInterval: [
                                    876,
                                    884
                                ]
                            },
                            [
                                "terminal",
                                {
                                    sourceInterval: [
                                        876,
                                        879
                                    ]
                                },
                                "#"
                            ],
                            [
                                "app",
                                {
                                    sourceInterval: [
                                        880,
                                        884
                                    ]
                                },
                                "Base",
                                []
                            ]
                        ]
                    ],
                    Lex: [
                        "define",
                        {
                            sourceInterval: [
                                866,
                                903
                            ]
                        },
                        null,
                        [],
                        [
                            "alt",
                            {
                                sourceInterval: [
                                    876,
                                    903
                                ]
                            },
                            [
                                "app",
                                {
                                    sourceInterval: [
                                        876,
                                        884
                                    ]
                                },
                                "Lex_lex",
                                []
                            ],
                            [
                                "app",
                                {
                                    sourceInterval: [
                                        899,
                                        903
                                    ]
                                },
                                "Base",
                                []
                            ]
                        ]
                    ],
                    Base_application: [
                        "define",
                        {
                            sourceInterval: [
                                918,
                                979
                            ]
                        },
                        null,
                        [],
                        [
                            "seq",
                            {
                                sourceInterval: [
                                    918,
                                    963
                                ]
                            },
                            [
                                "app",
                                {
                                    sourceInterval: [
                                        918,
                                        923
                                    ]
                                },
                                "ident",
                                []
                            ],
                            [
                                "opt",
                                {
                                    sourceInterval: [
                                        924,
                                        931
                                    ]
                                },
                                [
                                    "app",
                                    {
                                        sourceInterval: [
                                            924,
                                            930
                                        ]
                                    },
                                    "Params",
                                    []
                                ]
                            ],
                            [
                                "not",
                                {
                                    sourceInterval: [
                                        932,
                                        963
                                    ]
                                },
                                [
                                    "alt",
                                    {
                                        sourceInterval: [
                                            934,
                                            962
                                        ]
                                    },
                                    [
                                        "seq",
                                        {
                                            sourceInterval: [
                                                934,
                                                948
                                            ]
                                        },
                                        [
                                            "opt",
                                            {
                                                sourceInterval: [
                                                    934,
                                                    944
                                                ]
                                            },
                                            [
                                                "app",
                                                {
                                                    sourceInterval: [
                                                        934,
                                                        943
                                                    ]
                                                },
                                                "ruleDescr",
                                                []
                                            ]
                                        ],
                                        [
                                            "terminal",
                                            {
                                                sourceInterval: [
                                                    945,
                                                    948
                                                ]
                                            },
                                            "="
                                        ]
                                    ],
                                    [
                                        "terminal",
                                        {
                                            sourceInterval: [
                                                951,
                                                955
                                            ]
                                        },
                                        ":="
                                    ],
                                    [
                                        "terminal",
                                        {
                                            sourceInterval: [
                                                958,
                                                962
                                            ]
                                        },
                                        "+="
                                    ]
                                ]
                            ]
                        ]
                    ],
                    Base_range: [
                        "define",
                        {
                            sourceInterval: [
                                986,
                                1041
                            ]
                        },
                        null,
                        [],
                        [
                            "seq",
                            {
                                sourceInterval: [
                                    986,
                                    1022
                                ]
                            },
                            [
                                "app",
                                {
                                    sourceInterval: [
                                        986,
                                        1001
                                    ]
                                },
                                "oneCharTerminal",
                                []
                            ],
                            [
                                "terminal",
                                {
                                    sourceInterval: [
                                        1002,
                                        1006
                                    ]
                                },
                                ".."
                            ],
                            [
                                "app",
                                {
                                    sourceInterval: [
                                        1007,
                                        1022
                                    ]
                                },
                                "oneCharTerminal",
                                []
                            ]
                        ]
                    ],
                    Base_terminal: [
                        "define",
                        {
                            sourceInterval: [
                                1048,
                                1106
                            ]
                        },
                        null,
                        [],
                        [
                            "app",
                            {
                                sourceInterval: [
                                    1048,
                                    1056
                                ]
                            },
                            "terminal",
                            []
                        ]
                    ],
                    Base_paren: [
                        "define",
                        {
                            sourceInterval: [
                                1113,
                                1168
                            ]
                        },
                        null,
                        [],
                        [
                            "seq",
                            {
                                sourceInterval: [
                                    1113,
                                    1124
                                ]
                            },
                            [
                                "terminal",
                                {
                                    sourceInterval: [
                                        1113,
                                        1116
                                    ]
                                },
                                "("
                            ],
                            [
                                "app",
                                {
                                    sourceInterval: [
                                        1117,
                                        1120
                                    ]
                                },
                                "Alt",
                                []
                            ],
                            [
                                "terminal",
                                {
                                    sourceInterval: [
                                        1121,
                                        1124
                                    ]
                                },
                                ")"
                            ]
                        ]
                    ],
                    Base: [
                        "define",
                        {
                            sourceInterval: [
                                907,
                                1168
                            ]
                        },
                        null,
                        [],
                        [
                            "alt",
                            {
                                sourceInterval: [
                                    918,
                                    1168
                                ]
                            },
                            [
                                "app",
                                {
                                    sourceInterval: [
                                        918,
                                        963
                                    ]
                                },
                                "Base_application",
                                []
                            ],
                            [
                                "app",
                                {
                                    sourceInterval: [
                                        986,
                                        1022
                                    ]
                                },
                                "Base_range",
                                []
                            ],
                            [
                                "app",
                                {
                                    sourceInterval: [
                                        1048,
                                        1056
                                    ]
                                },
                                "Base_terminal",
                                []
                            ],
                            [
                                "app",
                                {
                                    sourceInterval: [
                                        1113,
                                        1124
                                    ]
                                },
                                "Base_paren",
                                []
                            ]
                        ]
                    ],
                    ruleDescr: [
                        "define",
                        {
                            sourceInterval: [
                                1172,
                                1231
                            ]
                        },
                        "a rule description",
                        [],
                        [
                            "seq",
                            {
                                sourceInterval: [
                                    1210,
                                    1231
                                ]
                            },
                            [
                                "terminal",
                                {
                                    sourceInterval: [
                                        1210,
                                        1213
                                    ]
                                },
                                "("
                            ],
                            [
                                "app",
                                {
                                    sourceInterval: [
                                        1214,
                                        1227
                                    ]
                                },
                                "ruleDescrText",
                                []
                            ],
                            [
                                "terminal",
                                {
                                    sourceInterval: [
                                        1228,
                                        1231
                                    ]
                                },
                                ")"
                            ]
                        ]
                    ],
                    ruleDescrText: [
                        "define",
                        {
                            sourceInterval: [
                                1235,
                                1266
                            ]
                        },
                        null,
                        [],
                        [
                            "star",
                            {
                                sourceInterval: [
                                    1255,
                                    1266
                                ]
                            },
                            [
                                "seq",
                                {
                                    sourceInterval: [
                                        1256,
                                        1264
                                    ]
                                },
                                [
                                    "not",
                                    {
                                        sourceInterval: [
                                            1256,
                                            1260
                                        ]
                                    },
                                    [
                                        "terminal",
                                        {
                                            sourceInterval: [
                                                1257,
                                                1260
                                            ]
                                        },
                                        ")"
                                    ]
                                ],
                                [
                                    "app",
                                    {
                                        sourceInterval: [
                                            1261,
                                            1264
                                        ]
                                    },
                                    "any",
                                    []
                                ]
                            ]
                        ]
                    ],
                    caseName: [
                        "define",
                        {
                            sourceInterval: [
                                1270,
                                1338
                            ]
                        },
                        null,
                        [],
                        [
                            "seq",
                            {
                                sourceInterval: [
                                    1285,
                                    1338
                                ]
                            },
                            [
                                "terminal",
                                {
                                    sourceInterval: [
                                        1285,
                                        1289
                                    ]
                                },
                                "--"
                            ],
                            [
                                "star",
                                {
                                    sourceInterval: [
                                        1290,
                                        1304
                                    ]
                                },
                                [
                                    "seq",
                                    {
                                        sourceInterval: [
                                            1291,
                                            1302
                                        ]
                                    },
                                    [
                                        "not",
                                        {
                                            sourceInterval: [
                                                1291,
                                                1296
                                            ]
                                        },
                                        [
                                            "terminal",
                                            {
                                                sourceInterval: [
                                                    1292,
                                                    1296
                                                ]
                                            },
                                            "\n"
                                        ]
                                    ],
                                    [
                                        "app",
                                        {
                                            sourceInterval: [
                                                1297,
                                                1302
                                            ]
                                        },
                                        "space",
                                        []
                                    ]
                                ]
                            ],
                            [
                                "app",
                                {
                                    sourceInterval: [
                                        1305,
                                        1309
                                    ]
                                },
                                "name",
                                []
                            ],
                            [
                                "star",
                                {
                                    sourceInterval: [
                                        1310,
                                        1324
                                    ]
                                },
                                [
                                    "seq",
                                    {
                                        sourceInterval: [
                                            1311,
                                            1322
                                        ]
                                    },
                                    [
                                        "not",
                                        {
                                            sourceInterval: [
                                                1311,
                                                1316
                                            ]
                                        },
                                        [
                                            "terminal",
                                            {
                                                sourceInterval: [
                                                    1312,
                                                    1316
                                                ]
                                            },
                                            "\n"
                                        ]
                                    ],
                                    [
                                        "app",
                                        {
                                            sourceInterval: [
                                                1317,
                                                1322
                                            ]
                                        },
                                        "space",
                                        []
                                    ]
                                ]
                            ],
                            [
                                "alt",
                                {
                                    sourceInterval: [
                                        1326,
                                        1337
                                    ]
                                },
                                [
                                    "terminal",
                                    {
                                        sourceInterval: [
                                            1326,
                                            1330
                                        ]
                                    },
                                    "\n"
                                ],
                                [
                                    "lookahead",
                                    {
                                        sourceInterval: [
                                            1333,
                                            1337
                                        ]
                                    },
                                    [
                                        "terminal",
                                        {
                                            sourceInterval: [
                                                1334,
                                                1337
                                            ]
                                        },
                                        "}"
                                    ]
                                ]
                            ]
                        ]
                    ],
                    name: [
                        "define",
                        {
                            sourceInterval: [
                                1342,
                                1382
                            ]
                        },
                        "a name",
                        [],
                        [
                            "seq",
                            {
                                sourceInterval: [
                                    1363,
                                    1382
                                ]
                            },
                            [
                                "app",
                                {
                                    sourceInterval: [
                                        1363,
                                        1372
                                    ]
                                },
                                "nameFirst",
                                []
                            ],
                            [
                                "star",
                                {
                                    sourceInterval: [
                                        1373,
                                        1382
                                    ]
                                },
                                [
                                    "app",
                                    {
                                        sourceInterval: [
                                            1373,
                                            1381
                                        ]
                                    },
                                    "nameRest",
                                    []
                                ]
                            ]
                        ]
                    ],
                    nameFirst: [
                        "define",
                        {
                            sourceInterval: [
                                1386,
                                1418
                            ]
                        },
                        null,
                        [],
                        [
                            "alt",
                            {
                                sourceInterval: [
                                    1402,
                                    1418
                                ]
                            },
                            [
                                "terminal",
                                {
                                    sourceInterval: [
                                        1402,
                                        1405
                                    ]
                                },
                                "_"
                            ],
                            [
                                "app",
                                {
                                    sourceInterval: [
                                        1412,
                                        1418
                                    ]
                                },
                                "letter",
                                []
                            ]
                        ]
                    ],
                    nameRest: [
                        "define",
                        {
                            sourceInterval: [
                                1422,
                                1452
                            ]
                        },
                        null,
                        [],
                        [
                            "alt",
                            {
                                sourceInterval: [
                                    1437,
                                    1452
                                ]
                            },
                            [
                                "terminal",
                                {
                                    sourceInterval: [
                                        1437,
                                        1440
                                    ]
                                },
                                "_"
                            ],
                            [
                                "app",
                                {
                                    sourceInterval: [
                                        1447,
                                        1452
                                    ]
                                },
                                "alnum",
                                []
                            ]
                        ]
                    ],
                    ident: [
                        "define",
                        {
                            sourceInterval: [
                                1456,
                                1489
                            ]
                        },
                        "an identifier",
                        [],
                        [
                            "app",
                            {
                                sourceInterval: [
                                    1485,
                                    1489
                                ]
                            },
                            "name",
                            []
                        ]
                    ],
                    terminal: [
                        "define",
                        {
                            sourceInterval: [
                                1493,
                                1531
                            ]
                        },
                        null,
                        [],
                        [
                            "seq",
                            {
                                sourceInterval: [
                                    1508,
                                    1531
                                ]
                            },
                            [
                                "terminal",
                                {
                                    sourceInterval: [
                                        1508,
                                        1512
                                    ]
                                },
                                '"'
                            ],
                            [
                                "star",
                                {
                                    sourceInterval: [
                                        1513,
                                        1526
                                    ]
                                },
                                [
                                    "app",
                                    {
                                        sourceInterval: [
                                            1513,
                                            1525
                                        ]
                                    },
                                    "terminalChar",
                                    []
                                ]
                            ],
                            [
                                "terminal",
                                {
                                    sourceInterval: [
                                        1527,
                                        1531
                                    ]
                                },
                                '"'
                            ]
                        ]
                    ],
                    oneCharTerminal: [
                        "define",
                        {
                            sourceInterval: [
                                1535,
                                1579
                            ]
                        },
                        null,
                        [],
                        [
                            "seq",
                            {
                                sourceInterval: [
                                    1557,
                                    1579
                                ]
                            },
                            [
                                "terminal",
                                {
                                    sourceInterval: [
                                        1557,
                                        1561
                                    ]
                                },
                                '"'
                            ],
                            [
                                "app",
                                {
                                    sourceInterval: [
                                        1562,
                                        1574
                                    ]
                                },
                                "terminalChar",
                                []
                            ],
                            [
                                "terminal",
                                {
                                    sourceInterval: [
                                        1575,
                                        1579
                                    ]
                                },
                                '"'
                            ]
                        ]
                    ],
                    terminalChar: [
                        "define",
                        {
                            sourceInterval: [
                                1583,
                                1640
                            ]
                        },
                        null,
                        [],
                        [
                            "alt",
                            {
                                sourceInterval: [
                                    1602,
                                    1640
                                ]
                            },
                            [
                                "app",
                                {
                                    sourceInterval: [
                                        1602,
                                        1612
                                    ]
                                },
                                "escapeChar",
                                []
                            ],
                            [
                                "seq",
                                {
                                    sourceInterval: [
                                        1619,
                                        1640
                                    ]
                                },
                                [
                                    "not",
                                    {
                                        sourceInterval: [
                                            1619,
                                            1624
                                        ]
                                    },
                                    [
                                        "terminal",
                                        {
                                            sourceInterval: [
                                                1620,
                                                1624
                                            ]
                                        },
                                        "\\"
                                    ]
                                ],
                                [
                                    "not",
                                    {
                                        sourceInterval: [
                                            1625,
                                            1630
                                        ]
                                    },
                                    [
                                        "terminal",
                                        {
                                            sourceInterval: [
                                                1626,
                                                1630
                                            ]
                                        },
                                        '"'
                                    ]
                                ],
                                [
                                    "not",
                                    {
                                        sourceInterval: [
                                            1631,
                                            1636
                                        ]
                                    },
                                    [
                                        "terminal",
                                        {
                                            sourceInterval: [
                                                1632,
                                                1636
                                            ]
                                        },
                                        "\n"
                                    ]
                                ],
                                [
                                    "app",
                                    {
                                        sourceInterval: [
                                            1637,
                                            1640
                                        ]
                                    },
                                    "any",
                                    []
                                ]
                            ]
                        ]
                    ],
                    escapeChar_backslash: [
                        "define",
                        {
                            sourceInterval: [
                                1683,
                                1738
                            ]
                        },
                        null,
                        [],
                        [
                            "terminal",
                            {
                                sourceInterval: [
                                    1683,
                                    1689
                                ]
                            },
                            "\\\\"
                        ]
                    ],
                    escapeChar_doubleQuote: [
                        "define",
                        {
                            sourceInterval: [
                                1745,
                                1802
                            ]
                        },
                        null,
                        [],
                        [
                            "terminal",
                            {
                                sourceInterval: [
                                    1745,
                                    1751
                                ]
                            },
                            '\\"'
                        ]
                    ],
                    escapeChar_singleQuote: [
                        "define",
                        {
                            sourceInterval: [
                                1809,
                                1866
                            ]
                        },
                        null,
                        [],
                        [
                            "terminal",
                            {
                                sourceInterval: [
                                    1809,
                                    1815
                                ]
                            },
                            "\\'"
                        ]
                    ],
                    escapeChar_backspace: [
                        "define",
                        {
                            sourceInterval: [
                                1873,
                                1928
                            ]
                        },
                        null,
                        [],
                        [
                            "terminal",
                            {
                                sourceInterval: [
                                    1873,
                                    1878
                                ]
                            },
                            "\\b"
                        ]
                    ],
                    escapeChar_lineFeed: [
                        "define",
                        {
                            sourceInterval: [
                                1935,
                                1989
                            ]
                        },
                        null,
                        [],
                        [
                            "terminal",
                            {
                                sourceInterval: [
                                    1935,
                                    1940
                                ]
                            },
                            "\\n"
                        ]
                    ],
                    escapeChar_carriageReturn: [
                        "define",
                        {
                            sourceInterval: [
                                1996,
                                2056
                            ]
                        },
                        null,
                        [],
                        [
                            "terminal",
                            {
                                sourceInterval: [
                                    1996,
                                    2001
                                ]
                            },
                            "\\r"
                        ]
                    ],
                    escapeChar_tab: [
                        "define",
                        {
                            sourceInterval: [
                                2063,
                                2112
                            ]
                        },
                        null,
                        [],
                        [
                            "terminal",
                            {
                                sourceInterval: [
                                    2063,
                                    2068
                                ]
                            },
                            "\\t"
                        ]
                    ],
                    escapeChar_unicodeEscape: [
                        "define",
                        {
                            sourceInterval: [
                                2119,
                                2178
                            ]
                        },
                        null,
                        [],
                        [
                            "seq",
                            {
                                sourceInterval: [
                                    2119,
                                    2160
                                ]
                            },
                            [
                                "terminal",
                                {
                                    sourceInterval: [
                                        2119,
                                        2124
                                    ]
                                },
                                "\\u"
                            ],
                            [
                                "app",
                                {
                                    sourceInterval: [
                                        2125,
                                        2133
                                    ]
                                },
                                "hexDigit",
                                []
                            ],
                            [
                                "app",
                                {
                                    sourceInterval: [
                                        2134,
                                        2142
                                    ]
                                },
                                "hexDigit",
                                []
                            ],
                            [
                                "app",
                                {
                                    sourceInterval: [
                                        2143,
                                        2151
                                    ]
                                },
                                "hexDigit",
                                []
                            ],
                            [
                                "app",
                                {
                                    sourceInterval: [
                                        2152,
                                        2160
                                    ]
                                },
                                "hexDigit",
                                []
                            ]
                        ]
                    ],
                    escapeChar_hexEscape: [
                        "define",
                        {
                            sourceInterval: [
                                2185,
                                2240
                            ]
                        },
                        null,
                        [],
                        [
                            "seq",
                            {
                                sourceInterval: [
                                    2185,
                                    2208
                                ]
                            },
                            [
                                "terminal",
                                {
                                    sourceInterval: [
                                        2185,
                                        2190
                                    ]
                                },
                                "\\x"
                            ],
                            [
                                "app",
                                {
                                    sourceInterval: [
                                        2191,
                                        2199
                                    ]
                                },
                                "hexDigit",
                                []
                            ],
                            [
                                "app",
                                {
                                    sourceInterval: [
                                        2200,
                                        2208
                                    ]
                                },
                                "hexDigit",
                                []
                            ]
                        ]
                    ],
                    escapeChar: [
                        "define",
                        {
                            sourceInterval: [
                                1644,
                                2240
                            ]
                        },
                        "an escape sequence",
                        [],
                        [
                            "alt",
                            {
                                sourceInterval: [
                                    1683,
                                    2240
                                ]
                            },
                            [
                                "app",
                                {
                                    sourceInterval: [
                                        1683,
                                        1689
                                    ]
                                },
                                "escapeChar_backslash",
                                []
                            ],
                            [
                                "app",
                                {
                                    sourceInterval: [
                                        1745,
                                        1751
                                    ]
                                },
                                "escapeChar_doubleQuote",
                                []
                            ],
                            [
                                "app",
                                {
                                    sourceInterval: [
                                        1809,
                                        1815
                                    ]
                                },
                                "escapeChar_singleQuote",
                                []
                            ],
                            [
                                "app",
                                {
                                    sourceInterval: [
                                        1873,
                                        1878
                                    ]
                                },
                                "escapeChar_backspace",
                                []
                            ],
                            [
                                "app",
                                {
                                    sourceInterval: [
                                        1935,
                                        1940
                                    ]
                                },
                                "escapeChar_lineFeed",
                                []
                            ],
                            [
                                "app",
                                {
                                    sourceInterval: [
                                        1996,
                                        2001
                                    ]
                                },
                                "escapeChar_carriageReturn",
                                []
                            ],
                            [
                                "app",
                                {
                                    sourceInterval: [
                                        2063,
                                        2068
                                    ]
                                },
                                "escapeChar_tab",
                                []
                            ],
                            [
                                "app",
                                {
                                    sourceInterval: [
                                        2119,
                                        2160
                                    ]
                                },
                                "escapeChar_unicodeEscape",
                                []
                            ],
                            [
                                "app",
                                {
                                    sourceInterval: [
                                        2185,
                                        2208
                                    ]
                                },
                                "escapeChar_hexEscape",
                                []
                            ]
                        ]
                    ],
                    space: [
                        "extend",
                        {
                            sourceInterval: [
                                2244,
                                2263
                            ]
                        },
                        null,
                        [],
                        [
                            "app",
                            {
                                sourceInterval: [
                                    2256,
                                    2263
                                ]
                            },
                            "comment",
                            []
                        ]
                    ],
                    comment_singleLine: [
                        "define",
                        {
                            sourceInterval: [
                                2281,
                                2327
                            ]
                        },
                        null,
                        [],
                        [
                            "seq",
                            {
                                sourceInterval: [
                                    2281,
                                    2312
                                ]
                            },
                            [
                                "terminal",
                                {
                                    sourceInterval: [
                                        2281,
                                        2285
                                    ]
                                },
                                "//"
                            ],
                            [
                                "star",
                                {
                                    sourceInterval: [
                                        2286,
                                        2298
                                    ]
                                },
                                [
                                    "seq",
                                    {
                                        sourceInterval: [
                                            2287,
                                            2296
                                        ]
                                    },
                                    [
                                        "not",
                                        {
                                            sourceInterval: [
                                                2287,
                                                2292
                                            ]
                                        },
                                        [
                                            "terminal",
                                            {
                                                sourceInterval: [
                                                    2288,
                                                    2292
                                                ]
                                            },
                                            "\n"
                                        ]
                                    ],
                                    [
                                        "app",
                                        {
                                            sourceInterval: [
                                                2293,
                                                2296
                                            ]
                                        },
                                        "any",
                                        []
                                    ]
                                ]
                            ],
                            [
                                "lookahead",
                                {
                                    sourceInterval: [
                                        2299,
                                        2312
                                    ]
                                },
                                [
                                    "alt",
                                    {
                                        sourceInterval: [
                                            2301,
                                            2311
                                        ]
                                    },
                                    [
                                        "terminal",
                                        {
                                            sourceInterval: [
                                                2301,
                                                2305
                                            ]
                                        },
                                        "\n"
                                    ],
                                    [
                                        "app",
                                        {
                                            sourceInterval: [
                                                2308,
                                                2311
                                            ]
                                        },
                                        "end",
                                        []
                                    ]
                                ]
                            ]
                        ]
                    ],
                    comment_multiLine: [
                        "define",
                        {
                            sourceInterval: [
                                2334,
                                2370
                            ]
                        },
                        null,
                        [],
                        [
                            "seq",
                            {
                                sourceInterval: [
                                    2334,
                                    2356
                                ]
                            },
                            [
                                "terminal",
                                {
                                    sourceInterval: [
                                        2334,
                                        2338
                                    ]
                                },
                                "/*"
                            ],
                            [
                                "star",
                                {
                                    sourceInterval: [
                                        2339,
                                        2351
                                    ]
                                },
                                [
                                    "seq",
                                    {
                                        sourceInterval: [
                                            2340,
                                            2349
                                        ]
                                    },
                                    [
                                        "not",
                                        {
                                            sourceInterval: [
                                                2340,
                                                2345
                                            ]
                                        },
                                        [
                                            "terminal",
                                            {
                                                sourceInterval: [
                                                    2341,
                                                    2345
                                                ]
                                            },
                                            "*/"
                                        ]
                                    ],
                                    [
                                        "app",
                                        {
                                            sourceInterval: [
                                                2346,
                                                2349
                                            ]
                                        },
                                        "any",
                                        []
                                    ]
                                ]
                            ],
                            [
                                "terminal",
                                {
                                    sourceInterval: [
                                        2352,
                                        2356
                                    ]
                                },
                                "*/"
                            ]
                        ]
                    ],
                    comment: [
                        "define",
                        {
                            sourceInterval: [
                                2267,
                                2370
                            ]
                        },
                        null,
                        [],
                        [
                            "alt",
                            {
                                sourceInterval: [
                                    2281,
                                    2370
                                ]
                            },
                            [
                                "app",
                                {
                                    sourceInterval: [
                                        2281,
                                        2312
                                    ]
                                },
                                "comment_singleLine",
                                []
                            ],
                            [
                                "app",
                                {
                                    sourceInterval: [
                                        2334,
                                        2356
                                    ]
                                },
                                "comment_multiLine",
                                []
                            ]
                        ]
                    ],
                    tokens: [
                        "define",
                        {
                            sourceInterval: [
                                2374,
                                2389
                            ]
                        },
                        null,
                        [],
                        [
                            "star",
                            {
                                sourceInterval: [
                                    2383,
                                    2389
                                ]
                            },
                            [
                                "app",
                                {
                                    sourceInterval: [
                                        2383,
                                        2388
                                    ]
                                },
                                "token",
                                []
                            ]
                        ]
                    ],
                    token: [
                        "define",
                        {
                            sourceInterval: [
                                2393,
                                2469
                            ]
                        },
                        null,
                        [],
                        [
                            "alt",
                            {
                                sourceInterval: [
                                    2401,
                                    2469
                                ]
                            },
                            [
                                "app",
                                {
                                    sourceInterval: [
                                        2401,
                                        2409
                                    ]
                                },
                                "caseName",
                                []
                            ],
                            [
                                "app",
                                {
                                    sourceInterval: [
                                        2412,
                                        2419
                                    ]
                                },
                                "comment",
                                []
                            ],
                            [
                                "app",
                                {
                                    sourceInterval: [
                                        2422,
                                        2427
                                    ]
                                },
                                "ident",
                                []
                            ],
                            [
                                "app",
                                {
                                    sourceInterval: [
                                        2430,
                                        2438
                                    ]
                                },
                                "operator",
                                []
                            ],
                            [
                                "app",
                                {
                                    sourceInterval: [
                                        2441,
                                        2452
                                    ]
                                },
                                "punctuation",
                                []
                            ],
                            [
                                "app",
                                {
                                    sourceInterval: [
                                        2455,
                                        2463
                                    ]
                                },
                                "terminal",
                                []
                            ],
                            [
                                "app",
                                {
                                    sourceInterval: [
                                        2466,
                                        2469
                                    ]
                                },
                                "any",
                                []
                            ]
                        ]
                    ],
                    operator: [
                        "define",
                        {
                            sourceInterval: [
                                2473,
                                2538
                            ]
                        },
                        null,
                        [],
                        [
                            "alt",
                            {
                                sourceInterval: [
                                    2484,
                                    2538
                                ]
                            },
                            [
                                "terminal",
                                {
                                    sourceInterval: [
                                        2484,
                                        2488
                                    ]
                                },
                                "<:"
                            ],
                            [
                                "terminal",
                                {
                                    sourceInterval: [
                                        2491,
                                        2494
                                    ]
                                },
                                "="
                            ],
                            [
                                "terminal",
                                {
                                    sourceInterval: [
                                        2497,
                                        2501
                                    ]
                                },
                                ":="
                            ],
                            [
                                "terminal",
                                {
                                    sourceInterval: [
                                        2504,
                                        2508
                                    ]
                                },
                                "+="
                            ],
                            [
                                "terminal",
                                {
                                    sourceInterval: [
                                        2511,
                                        2514
                                    ]
                                },
                                "*"
                            ],
                            [
                                "terminal",
                                {
                                    sourceInterval: [
                                        2517,
                                        2520
                                    ]
                                },
                                "+"
                            ],
                            [
                                "terminal",
                                {
                                    sourceInterval: [
                                        2523,
                                        2526
                                    ]
                                },
                                "?"
                            ],
                            [
                                "terminal",
                                {
                                    sourceInterval: [
                                        2529,
                                        2532
                                    ]
                                },
                                "~"
                            ],
                            [
                                "terminal",
                                {
                                    sourceInterval: [
                                        2535,
                                        2538
                                    ]
                                },
                                "&"
                            ]
                        ]
                    ],
                    punctuation: [
                        "define",
                        {
                            sourceInterval: [
                                2542,
                                2578
                            ]
                        },
                        null,
                        [],
                        [
                            "alt",
                            {
                                sourceInterval: [
                                    2556,
                                    2578
                                ]
                            },
                            [
                                "terminal",
                                {
                                    sourceInterval: [
                                        2556,
                                        2559
                                    ]
                                },
                                "<"
                            ],
                            [
                                "terminal",
                                {
                                    sourceInterval: [
                                        2562,
                                        2565
                                    ]
                                },
                                ">"
                            ],
                            [
                                "terminal",
                                {
                                    sourceInterval: [
                                        2568,
                                        2571
                                    ]
                                },
                                ","
                            ],
                            [
                                "terminal",
                                {
                                    sourceInterval: [
                                        2574,
                                        2578
                                    ]
                                },
                                "--"
                            ]
                        ]
                    ]
                }
            ]);
        }
    ]);
});

//# sourceMappingURL=index.2507e15c.js.map
