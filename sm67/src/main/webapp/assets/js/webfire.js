! function(e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    function n(e) {
        var t = e.length,
            n = Z.type(e);
        return "function" === n || Z.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
    }

    function r(e, t, n) {
        if (Z.isFunction(t)) return Z.grep(e, function(e, r) {
            return !!t.call(e, r, e) !== n
        });
        if (t.nodeType) return Z.grep(e, function(e) {
            return e === t !== n
        });
        if ("string" == typeof t) {
            if (at.test(t)) return Z.filter(t, e, n);
            t = Z.filter(t, e)
        }
        return Z.grep(e, function(e) {
            return U.call(t, e) >= 0 !== n
        })
    }

    function i(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }

    function o(e) {
        var t = ht[e] = {};
        return Z.each(e.match(dt) || [], function(e, n) {
            t[n] = !0
        }), t
    }

    function s() {
        J.removeEventListener("DOMContentLoaded", s, !1), e.removeEventListener("load", s, !1), Z.ready()
    }

    function a() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function() {
                return {}
            }
        }), this.expando = Z.expando + Math.random()
    }

    function u(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(bt, "-$1").toLowerCase(), n = e.getAttribute(r), "string" == typeof n) {
                try {
                    n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : xt.test(n) ? Z.parseJSON(n) : n
                } catch (i) {}
                yt.set(e, t, n)
            } else n = void 0;
        return n
    }

    function l() {
        return !0
    }

    function c() {
        return !1
    }

    function f() {
        try {
            return J.activeElement
        } catch (e) {}
    }

    function p(e, t) {
        return Z.nodeName(e, "table") && Z.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function d(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function h(e) {
        var t = Pt.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function g(e, t) {
        for (var n = 0, r = e.length; r > n; n++) vt.set(e[n], "globalEval", !t || vt.get(t[n], "globalEval"))
    }

    function m(e, t) {
        var n, r, i, o, s, a, u, l;
        if (1 === t.nodeType) {
            if (vt.hasData(e) && (o = vt.access(e), s = vt.set(t, o), l = o.events)) {
                delete s.handle, s.events = {};
                for (i in l)
                    for (n = 0, r = l[i].length; r > n; n++) Z.event.add(t, i, l[i][n])
            }
            yt.hasData(e) && (a = yt.access(e), u = Z.extend({}, a), yt.set(t, u))
        }
    }

    function v(e, t) {
        var n = e.getElementsByTagName ? e.getElementsByTagName(t || "*") : e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
        return void 0 === t || t && Z.nodeName(e, t) ? Z.merge([e], n) : n
    }

    function y(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && Nt.test(e.type) ? t.checked = e.checked : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
    }

    function x(t, n) {
        var r, i = Z(n.createElement(t)).appendTo(n.body),
            o = e.getDefaultComputedStyle && (r = e.getDefaultComputedStyle(i[0])) ? r.display : Z.css(i[0], "display");
        return i.detach(), o
    }

    function b(e) {
        var t = J,
            n = $t[e];
        return n || (n = x(e, t), "none" !== n && n || (Wt = (Wt || Z("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = Wt[0].contentDocument, t.write(), t.close(), n = x(e, t), Wt.detach()), $t[e] = n), n
    }

    function w(e, t, n) {
        var r, i, o, s, a = e.style;
        return n = n || _t(e), n && (s = n.getPropertyValue(t) || n[t]), n && ("" !== s || Z.contains(e.ownerDocument, e) || (s = Z.style(e, t)), It.test(s) && Bt.test(t) && (r = a.width, i = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = r, a.minWidth = i, a.maxWidth = o)), void 0 !== s ? s + "" : s
    }

    function T(e, t) {
        return {
            get: function() {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }

    function C(e, t) {
        if (t in e) return t;
        for (var n = t[0].toUpperCase() + t.slice(1), r = t, i = Gt.length; i--;)
            if (t = Gt[i] + n, t in e) return t;
        return r
    }

    function N(e, t, n) {
        var r = Xt.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }

    function k(e, t, n, r, i) {
        for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; 4 > o; o += 2) "margin" === n && (s += Z.css(e, n + Tt[o], !0, i)), r ? ("content" === n && (s -= Z.css(e, "padding" + Tt[o], !0, i)), "margin" !== n && (s -= Z.css(e, "border" + Tt[o] + "Width", !0, i))) : (s += Z.css(e, "padding" + Tt[o], !0, i), "padding" !== n && (s += Z.css(e, "border" + Tt[o] + "Width", !0, i)));
        return s
    }

    function E(e, t, n) {
        var r = !0,
            i = "width" === t ? e.offsetWidth : e.offsetHeight,
            o = _t(e),
            s = "border-box" === Z.css(e, "boxSizing", !1, o);
        if (0 >= i || null == i) {
            if (i = w(e, t, o), (0 > i || null == i) && (i = e.style[t]), It.test(i)) return i;
            r = s && (Q.boxSizingReliable() || i === e.style[t]), i = parseFloat(i) || 0
        }
        return i + k(e, t, n || (s ? "border" : "content"), r, o) + "px"
    }

    function S(e, t) {
        for (var n, r, i, o = [], s = 0, a = e.length; a > s; s++) r = e[s], r.style && (o[s] = vt.get(r, "olddisplay"), n = r.style.display, t ? (o[s] || "none" !== n || (r.style.display = ""), "" === r.style.display && Ct(r) && (o[s] = vt.access(r, "olddisplay", b(r.nodeName)))) : (i = Ct(r), "none" === n && i || vt.set(r, "olddisplay", i ? n : Z.css(r, "display"))));
        for (s = 0; a > s; s++) r = e[s], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[s] || "" : "none"));
        return e
    }

    function j(e, t, n, r, i) {
        return new j.prototype.init(e, t, n, r, i)
    }

    function D() {
        return setTimeout(function() {
            Qt = void 0
        }), Qt = Z.now()
    }

    function A(e, t) {
        var n, r = 0,
            i = {
                height: e
            };
        for (t = t ? 1 : 0; 4 > r; r += 2 - t) n = Tt[r], i["margin" + n] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function L(e, t, n) {
        for (var r, i = (nn[t] || []).concat(nn["*"]), o = 0, s = i.length; s > o; o++)
            if (r = i[o].call(n, t, e)) return r
    }

    function q(e, t, n) {
        var r, i, o, s, a, u, l, c, f = this,
            p = {},
            d = e.style,
            h = e.nodeType && Ct(e),
            g = vt.get(e, "fxshow");
        n.queue || (a = Z._queueHooks(e, "fx"), null == a.unqueued && (a.unqueued = 0, u = a.empty.fire, a.empty.fire = function() {
            a.unqueued || u()
        }), a.unqueued++, f.always(function() {
            f.always(function() {
                a.unqueued--, Z.queue(e, "fx").length || a.empty.fire()
            })
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [d.overflow, d.overflowX, d.overflowY], l = Z.css(e, "display"), c = "none" === l ? vt.get(e, "olddisplay") || b(e.nodeName) : l, "inline" === c && "none" === Z.css(e, "float") && (d.display = "inline-block")), n.overflow && (d.overflow = "hidden", f.always(function() {
            d.overflow = n.overflow[0], d.overflowX = n.overflow[1], d.overflowY = n.overflow[2]
        }));
        for (r in t)
            if (i = t[r], Kt.exec(i)) {
                if (delete t[r], o = o || "toggle" === i, i === (h ? "hide" : "show")) {
                    if ("show" !== i || !g || void 0 === g[r]) continue;
                    h = !0
                }
                p[r] = g && g[r] || Z.style(e, r)
            } else l = void 0;
        if (Z.isEmptyObject(p)) "inline" === ("none" === l ? b(e.nodeName) : l) && (d.display = l);
        else {
            g ? "hidden" in g && (h = g.hidden) : g = vt.access(e, "fxshow", {}), o && (g.hidden = !h), h ? Z(e).show() : f.done(function() {
                Z(e).hide()
            }), f.done(function() {
                var t;
                vt.remove(e, "fxshow");
                for (t in p) Z.style(e, t, p[t])
            });
            for (r in p) s = L(h ? g[r] : 0, r, f), r in g || (g[r] = s.start, h && (s.end = s.start, s.start = "width" === r || "height" === r ? 1 : 0))
        }
    }

    function H(e, t) {
        var n, r, i, o, s;
        for (n in e)
            if (r = Z.camelCase(n), i = t[r], o = e[n], Z.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), s = Z.cssHooks[r], s && "expand" in s) {
                o = s.expand(o), delete e[r];
                for (n in o) n in e || (e[n] = o[n], t[n] = i)
            } else t[r] = i
    }

    function O(e, t, n) {
        var r, i, o = 0,
            s = tn.length,
            a = Z.Deferred().always(function() {
                delete u.elem
            }),
            u = function() {
                if (i) return !1;
                for (var t = Qt || D(), n = Math.max(0, l.startTime + l.duration - t), r = n / l.duration || 0, o = 1 - r, s = 0, u = l.tweens.length; u > s; s++) l.tweens[s].run(o);
                return a.notifyWith(e, [l, o, n]), 1 > o && u ? n : (a.resolveWith(e, [l]), !1)
            },
            l = a.promise({
                elem: e,
                props: Z.extend({}, t),
                opts: Z.extend(!0, {
                    specialEasing: {}
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: Qt || D(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var r = Z.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                    return l.tweens.push(r), r
                },
                stop: function(t) {
                    var n = 0,
                        r = t ? l.tweens.length : 0;
                    if (i) return this;
                    for (i = !0; r > n; n++) l.tweens[n].run(1);
                    return t ? a.resolveWith(e, [l, t]) : a.rejectWith(e, [l, t]), this
                }
            }),
            c = l.props;
        for (H(c, l.opts.specialEasing); s > o; o++)
            if (r = tn[o].call(l, e, c, l.opts)) return r;
        return Z.map(c, L, l), Z.isFunction(l.opts.start) && l.opts.start.call(e, l), Z.fx.timer(Z.extend(u, {
            elem: e,
            anim: l,
            queue: l.opts.queue
        })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
    }

    function F(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0,
                o = t.toLowerCase().match(dt) || [];
            if (Z.isFunction(n))
                for (; r = o[i++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }

    function P(e, t, n, r) {
        function i(a) {
            var u;
            return o[a] = !0, Z.each(e[a] || [], function(e, a) {
                var l = a(t, n, r);
                return "string" != typeof l || s || o[l] ? s ? !(u = l) : void 0 : (t.dataTypes.unshift(l), i(l), !1)
            }), u
        }
        var o = {},
            s = e === Tn;
        return i(t.dataTypes[0]) || !o["*"] && i("*")
    }

    function M(e, t) {
        var n, r, i = Z.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && Z.extend(!0, e, r), e
    }

    function R(e, t, n) {
        for (var r, i, o, s, a = e.contents, u = e.dataTypes;
            "*" === u[0];) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
        if (r)
            for (i in a)
                if (a[i] && a[i].test(r)) {
                    u.unshift(i);
                    break
                }
        if (u[0] in n) o = u[0];
        else {
            for (i in n) {
                if (!u[0] || e.converters[i + " " + u[0]]) {
                    o = i;
                    break
                }
                s || (s = i)
            }
            o = o || s
        }
        return o ? (o !== u[0] && u.unshift(o), n[o]) : void 0
    }

    function W(e, t, n, r) {
        var i, o, s, a, u, l = {},
            c = e.dataTypes.slice();
        if (c[1])
            for (s in e.converters) l[s.toLowerCase()] = e.converters[s];
        for (o = c.shift(); o;)
            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
                if ("*" === o) o = u;
                else if ("*" !== u && u !== o) {
            if (s = l[u + " " + o] || l["* " + o], !s)
                for (i in l)
                    if (a = i.split(" "), a[1] === o && (s = l[u + " " + a[0]] || l["* " + a[0]])) {
                        s === !0 ? s = l[i] : l[i] !== !0 && (o = a[0], c.unshift(a[1]));
                        break
                    }
            if (s !== !0)
                if (s && e["throws"]) t = s(t);
                else try {
                    t = s(t)
                } catch (f) {
                    return {
                        state: "parsererror",
                        error: s ? f : "No conversion from " + u + " to " + o
                    }
                }
        }
        return {
            state: "success",
            data: t
        }
    }

    function $(e, t, n, r) {
        var i;
        if (Z.isArray(t)) Z.each(t, function(t, i) {
            n || En.test(e) ? r(e, i) : $(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
        });
        else if (n || "object" !== Z.type(t)) r(e, t);
        else
            for (i in t) $(e + "[" + i + "]", t[i], n, r)
    }

    function B(e) {
        return Z.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
    }
    var I = [],
        _ = I.slice,
        z = I.concat,
        X = I.push,
        U = I.indexOf,
        V = {},
        Y = V.toString,
        G = V.hasOwnProperty,
        Q = {},
        J = e.document,
        K = "2.1.1",
        Z = function(e, t) {
            return new Z.fn.init(e, t)
        },
        et = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        tt = /^-ms-/,
        nt = /-([\da-z])/gi,
        rt = function(e, t) {
            return t.toUpperCase()
        };
    Z.fn = Z.prototype = {
        jquery: K,
        constructor: Z,
        selector: "",
        length: 0,
        toArray: function() {
            return _.call(this)
        },
        get: function(e) {
            return null != e ? 0 > e ? this[e + this.length] : this[e] : _.call(this)
        },
        pushStack: function(e) {
            var t = Z.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function(e, t) {
            return Z.each(this, e, t)
        },
        map: function(e) {
            return this.pushStack(Z.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(_.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: X,
        sort: I.sort,
        splice: I.splice
    }, Z.extend = Z.fn.extend = function() {
        var e, t, n, r, i, o, s = arguments[0] || {},
            a = 1,
            u = arguments.length,
            l = !1;
        for ("boolean" == typeof s && (l = s, s = arguments[a] || {}, a++), "object" == typeof s || Z.isFunction(s) || (s = {}), a === u && (s = this, a--); u > a; a++)
            if (null != (e = arguments[a]))
                for (t in e) n = s[t], r = e[t], s !== r && (l && r && (Z.isPlainObject(r) || (i = Z.isArray(r))) ? (i ? (i = !1, o = n && Z.isArray(n) ? n : []) : o = n && Z.isPlainObject(n) ? n : {}, s[t] = Z.extend(l, o, r)) : void 0 !== r && (s[t] = r));
        return s
    }, Z.extend({
        expando: "jQuery" + (K + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === Z.type(e)
        },
        isArray: Array.isArray,
        isWindow: function(e) {
            return null != e && e === e.window
        },
        isNumeric: function(e) {
            return !Z.isArray(e) && e - parseFloat(e) >= 0
        },
        isPlainObject: function(e) {
            return "object" !== Z.type(e) || e.nodeType || Z.isWindow(e) ? !1 : e.constructor && !G.call(e.constructor.prototype, "isPrototypeOf") ? !1 : !0
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? V[Y.call(e)] || "object" : typeof e
        },
        globalEval: function(e) {
            var t, n = eval;
            e = Z.trim(e), e && (1 === e.indexOf("use strict") ? (t = J.createElement("script"), t.text = e, J.head.appendChild(t).parentNode.removeChild(t)) : n(e))
        },
        camelCase: function(e) {
            return e.replace(tt, "ms-").replace(nt, rt)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t, r) {
            var i, o = 0,
                s = e.length,
                a = n(e);
            if (r) {
                if (a)
                    for (; s > o && (i = t.apply(e[o], r), i !== !1); o++);
                else
                    for (o in e)
                        if (i = t.apply(e[o], r), i === !1) break
            } else if (a)
                for (; s > o && (i = t.call(e[o], o, e[o]), i !== !1); o++);
            else
                for (o in e)
                    if (i = t.call(e[o], o, e[o]), i === !1) break; return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(et, "")
        },
        makeArray: function(e, t) {
            var r = t || [];
            return null != e && (n(Object(e)) ? Z.merge(r, "string" == typeof e ? [e] : e) : X.call(r, e)), r
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : U.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; n > r; r++) e[i++] = t[r];
            return e.length = i, e
        },
        grep: function(e, t, n) {
            for (var r, i = [], o = 0, s = e.length, a = !n; s > o; o++) r = !t(e[o], o), r !== a && i.push(e[o]);
            return i
        },
        map: function(e, t, r) {
            var i, o = 0,
                s = e.length,
                a = n(e),
                u = [];
            if (a)
                for (; s > o; o++) i = t(e[o], o, r), null != i && u.push(i);
            else
                for (o in e) i = t(e[o], o, r), null != i && u.push(i);
            return z.apply([], u)
        },
        guid: 1,
        proxy: function(e, t) {
            var n, r, i;
            return "string" == typeof t && (n = e[t], t = e, e = n), Z.isFunction(e) ? (r = _.call(arguments, 2), i = function() {
                return e.apply(t || this, r.concat(_.call(arguments)))
            }, i.guid = e.guid = e.guid || Z.guid++, i) : void 0
        },
        now: Date.now,
        support: Q
    }), Z.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
        V["[object " + t + "]"] = t.toLowerCase()
    });
    var it = function(e) {
        function t(e, t, n, r) {
            var i, o, s, a, u, l, f, d, h, g;
            if ((t ? t.ownerDocument || t : $) !== q && L(t), t = t || q, n = n || [], !e || "string" != typeof e) return n;
            if (1 !== (a = t.nodeType) && 9 !== a) return [];
            if (O && !r) {
                if (i = yt.exec(e))
                    if (s = i[1]) {
                        if (9 === a) {
                            if (o = t.getElementById(s), !o || !o.parentNode) return n;
                            if (o.id === s) return n.push(o), n
                        } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(s)) && R(t, o) && o.id === s) return n.push(o), n
                    } else {
                        if (i[2]) return Z.apply(n, t.getElementsByTagName(e)), n;
                        if ((s = i[3]) && w.getElementsByClassName && t.getElementsByClassName) return Z.apply(n, t.getElementsByClassName(s)), n
                    }
                if (w.qsa && (!F || !F.test(e))) {
                    if (d = f = W, h = t, g = 9 === a && e, 1 === a && "object" !== t.nodeName.toLowerCase()) {
                        for (l = k(e), (f = t.getAttribute("id")) ? d = f.replace(bt, "\\$&") : t.setAttribute("id", d), d = "[id='" + d + "'] ", u = l.length; u--;) l[u] = d + p(l[u]);
                        h = xt.test(e) && c(t.parentNode) || t, g = l.join(",")
                    }
                    if (g) try {
                        return Z.apply(n, h.querySelectorAll(g)), n
                    } catch (m) {} finally {
                        f || t.removeAttribute("id")
                    }
                }
            }
            return S(e.replace(ut, "$1"), t, n, r)
        }

        function n() {
            function e(n, r) {
                return t.push(n + " ") > T.cacheLength && delete e[t.shift()], e[n + " "] = r
            }
            var t = [];
            return e
        }

        function r(e) {
            return e[W] = !0, e
        }

        function i(e) {
            var t = q.createElement("div");
            try {
                return !!e(t)
            } catch (n) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function o(e, t) {
            for (var n = e.split("|"), r = e.length; r--;) T.attrHandle[n[r]] = t
        }

        function s(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || Y) - (~e.sourceIndex || Y);
            if (r) return r;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function a(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }

        function u(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function l(e) {
            return r(function(t) {
                return t = +t, r(function(n, r) {
                    for (var i, o = e([], n.length, t), s = o.length; s--;) n[i = o[s]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }

        function c(e) {
            return e && typeof e.getElementsByTagName !== V && e
        }

        function f() {}

        function p(e) {
            for (var t = 0, n = e.length, r = ""; n > t; t++) r += e[t].value;
            return r
        }

        function d(e, t, n) {
            var r = t.dir,
                i = n && "parentNode" === r,
                o = I++;
            return t.first ? function(t, n, o) {
                for (; t = t[r];)
                    if (1 === t.nodeType || i) return e(t, n, o)
            } : function(t, n, s) {
                var a, u, l = [B, o];
                if (s) {
                    for (; t = t[r];)
                        if ((1 === t.nodeType || i) && e(t, n, s)) return !0
                } else
                    for (; t = t[r];)
                        if (1 === t.nodeType || i) {
                            if (u = t[W] || (t[W] = {}), (a = u[r]) && a[0] === B && a[1] === o) return l[2] = a[2];
                            if (u[r] = l, l[2] = e(t, n, s)) return !0
                        }
            }
        }

        function h(e) {
            return e.length > 1 ? function(t, n, r) {
                for (var i = e.length; i--;)
                    if (!e[i](t, n, r)) return !1;
                return !0
            } : e[0]
        }

        function g(e, n, r) {
            for (var i = 0, o = n.length; o > i; i++) t(e, n[i], r);
            return r
        }

        function m(e, t, n, r, i) {
            for (var o, s = [], a = 0, u = e.length, l = null != t; u > a; a++)(o = e[a]) && (!n || n(o, r, i)) && (s.push(o), l && t.push(a));
            return s
        }

        function v(e, t, n, i, o, s) {
            return i && !i[W] && (i = v(i)), o && !o[W] && (o = v(o, s)), r(function(r, s, a, u) {
                var l, c, f, p = [],
                    d = [],
                    h = s.length,
                    v = r || g(t || "*", a.nodeType ? [a] : a, []),
                    y = !e || !r && t ? v : m(v, p, e, a, u),
                    x = n ? o || (r ? e : h || i) ? [] : s : y;
                if (n && n(y, x, a, u), i)
                    for (l = m(x, d), i(l, [], a, u), c = l.length; c--;)(f = l[c]) && (x[d[c]] = !(y[d[c]] = f));
                if (r) {
                    if (o || e) {
                        if (o) {
                            for (l = [], c = x.length; c--;)(f = x[c]) && l.push(y[c] = f);
                            o(null, x = [], l, u)
                        }
                        for (c = x.length; c--;)(f = x[c]) && (l = o ? tt.call(r, f) : p[c]) > -1 && (r[l] = !(s[l] = f))
                    }
                } else x = m(x === s ? x.splice(h, x.length) : x), o ? o(null, s, x, u) : Z.apply(s, x)
            })
        }

        function y(e) {
            for (var t, n, r, i = e.length, o = T.relative[e[0].type], s = o || T.relative[" "], a = o ? 1 : 0, u = d(function(e) {
                    return e === t
                }, s, !0), l = d(function(e) {
                    return tt.call(t, e) > -1
                }, s, !0), c = [function(e, n, r) {
                    return !o && (r || n !== j) || ((t = n).nodeType ? u(e, n, r) : l(e, n, r))
                }]; i > a; a++)
                if (n = T.relative[e[a].type]) c = [d(h(c), n)];
                else {
                    if (n = T.filter[e[a].type].apply(null, e[a].matches), n[W]) {
                        for (r = ++a; i > r && !T.relative[e[r].type]; r++);
                        return v(a > 1 && h(c), a > 1 && p(e.slice(0, a - 1).concat({
                            value: " " === e[a - 2].type ? "*" : ""
                        })).replace(ut, "$1"), n, r > a && y(e.slice(a, r)), i > r && y(e = e.slice(r)), i > r && p(e))
                    }
                    c.push(n)
                }
            return h(c)
        }

        function x(e, n) {
            var i = n.length > 0,
                o = e.length > 0,
                s = function(r, s, a, u, l) {
                    var c, f, p, d = 0,
                        h = "0",
                        g = r && [],
                        v = [],
                        y = j,
                        x = r || o && T.find.TAG("*", l),
                        b = B += null == y ? 1 : Math.random() || .1,
                        w = x.length;
                    for (l && (j = s !== q && s); h !== w && null != (c = x[h]); h++) {
                        if (o && c) {
                            for (f = 0; p = e[f++];)
                                if (p(c, s, a)) {
                                    u.push(c);
                                    break
                                }
                            l && (B = b)
                        }
                        i && ((c = !p && c) && d--, r && g.push(c))
                    }
                    if (d += h, i && h !== d) {
                        for (f = 0; p = n[f++];) p(g, v, s, a);
                        if (r) {
                            if (d > 0)
                                for (; h--;) g[h] || v[h] || (v[h] = J.call(u));
                            v = m(v)
                        }
                        Z.apply(u, v), l && !r && v.length > 0 && d + n.length > 1 && t.uniqueSort(u)
                    }
                    return l && (B = b, j = y), g
                };
            return i ? r(s) : s
        }
        var b, w, T, C, N, k, E, S, j, D, A, L, q, H, O, F, P, M, R, W = "sizzle" + -new Date,
            $ = e.document,
            B = 0,
            I = 0,
            _ = n(),
            z = n(),
            X = n(),
            U = function(e, t) {
                return e === t && (A = !0), 0
            },
            V = "undefined",
            Y = 1 << 31,
            G = {}.hasOwnProperty,
            Q = [],
            J = Q.pop,
            K = Q.push,
            Z = Q.push,
            et = Q.slice,
            tt = Q.indexOf || function(e) {
                for (var t = 0, n = this.length; n > t; t++)
                    if (this[t] === e) return t;
                return -1
            },
            nt = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            rt = "[\\x20\\t\\r\\n\\f]",
            it = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            ot = it.replace("w", "w#"),
            st = "\\[" + rt + "*(" + it + ")(?:" + rt + "*([*^$|!~]?=)" + rt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ot + "))|)" + rt + "*\\]",
            at = ":(" + it + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + st + ")*)|.*)\\)|)",
            ut = new RegExp("^" + rt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + rt + "+$", "g"),
            lt = new RegExp("^" + rt + "*," + rt + "*"),
            ct = new RegExp("^" + rt + "*([>+~]|" + rt + ")" + rt + "*"),
            ft = new RegExp("=" + rt + "*([^\\]'\"]*?)" + rt + "*\\]", "g"),
            pt = new RegExp(at),
            dt = new RegExp("^" + ot + "$"),
            ht = {
                ID: new RegExp("^#(" + it + ")"),
                CLASS: new RegExp("^\\.(" + it + ")"),
                TAG: new RegExp("^(" + it.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + st),
                PSEUDO: new RegExp("^" + at),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + rt + "*(even|odd|(([+-]|)(\\d*)n|)" + rt + "*(?:([+-]|)" + rt + "*(\\d+)|))" + rt + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + nt + ")$", "i"),
                needsContext: new RegExp("^" + rt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + rt + "*((?:-\\d)?\\d*)" + rt + "*\\)|)(?=[^-]|$)", "i")
            },
            gt = /^(?:input|select|textarea|button)$/i,
            mt = /^h\d$/i,
            vt = /^[^{]+\{\s*\[native \w/,
            yt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            xt = /[+~]/,
            bt = /'|\\/g,
            wt = new RegExp("\\\\([\\da-f]{1,6}" + rt + "?|(" + rt + ")|.)", "ig"),
            Tt = function(e, t, n) {
                var r = "0x" + t - 65536;
                return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
            };
        try {
            Z.apply(Q = et.call($.childNodes), $.childNodes), Q[$.childNodes.length].nodeType
        } catch (Ct) {
            Z = {
                apply: Q.length ? function(e, t) {
                    K.apply(e, et.call(t))
                } : function(e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++];);
                    e.length = n - 1
                }
            }
        }
        w = t.support = {}, N = t.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? "HTML" !== t.nodeName : !1
        }, L = t.setDocument = function(e) {
            var t, n = e ? e.ownerDocument || e : $,
                r = n.defaultView;
            return n !== q && 9 === n.nodeType && n.documentElement ? (q = n, H = n.documentElement, O = !N(n), r && r !== r.top && (r.addEventListener ? r.addEventListener("unload", function() {
                L()
            }, !1) : r.attachEvent && r.attachEvent("onunload", function() {
                L()
            })), w.attributes = i(function(e) {
                return e.className = "i", !e.getAttribute("className")
            }), w.getElementsByTagName = i(function(e) {
                return e.appendChild(n.createComment("")), !e.getElementsByTagName("*").length
            }), w.getElementsByClassName = vt.test(n.getElementsByClassName) && i(function(e) {
                return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length
            }), w.getById = i(function(e) {
                return H.appendChild(e).id = W, !n.getElementsByName || !n.getElementsByName(W).length
            }), w.getById ? (T.find.ID = function(e, t) {
                if (typeof t.getElementById !== V && O) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : []
                }
            }, T.filter.ID = function(e) {
                var t = e.replace(wt, Tt);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete T.find.ID, T.filter.ID = function(e) {
                var t = e.replace(wt, Tt);
                return function(e) {
                    var n = typeof e.getAttributeNode !== V && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), T.find.TAG = w.getElementsByTagName ? function(e, t) {
                return typeof t.getElementsByTagName !== V ? t.getElementsByTagName(e) : void 0
            } : function(e, t) {
                var n, r = [],
                    i = 0,
                    o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            }, T.find.CLASS = w.getElementsByClassName && function(e, t) {
                return typeof t.getElementsByClassName !== V && O ? t.getElementsByClassName(e) : void 0
            }, P = [], F = [], (w.qsa = vt.test(n.querySelectorAll)) && (i(function(e) {
                e.innerHTML = "<select msallowclip=''><option selected=''></option></select>", e.querySelectorAll("[msallowclip^='']").length && F.push("[*^$]=" + rt + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || F.push("\\[" + rt + "*(?:value|" + nt + ")"), e.querySelectorAll(":checked").length || F.push(":checked")
            }), i(function(e) {
                var t = n.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && F.push("name" + rt + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || F.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), F.push(",.*:")
            })), (w.matchesSelector = vt.test(M = H.matches || H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && i(function(e) {
                w.disconnectedMatch = M.call(e, "div"), M.call(e, "[s!='']:x"), P.push("!=", at)
            }), F = F.length && new RegExp(F.join("|")), P = P.length && new RegExp(P.join("|")), t = vt.test(H.compareDocumentPosition), R = t || vt.test(H.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                    r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            } : function(e, t) {
                if (t)
                    for (; t = t.parentNode;)
                        if (t === e) return !0;
                return !1
            }, U = t ? function(e, t) {
                if (e === t) return A = !0, 0;
                var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return r ? r : (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & r || !w.sortDetached && t.compareDocumentPosition(e) === r ? e === n || e.ownerDocument === $ && R($, e) ? -1 : t === n || t.ownerDocument === $ && R($, t) ? 1 : D ? tt.call(D, e) - tt.call(D, t) : 0 : 4 & r ? -1 : 1)
            } : function(e, t) {
                if (e === t) return A = !0, 0;
                var r, i = 0,
                    o = e.parentNode,
                    a = t.parentNode,
                    u = [e],
                    l = [t];
                if (!o || !a) return e === n ? -1 : t === n ? 1 : o ? -1 : a ? 1 : D ? tt.call(D, e) - tt.call(D, t) : 0;
                if (o === a) return s(e, t);
                for (r = e; r = r.parentNode;) u.unshift(r);
                for (r = t; r = r.parentNode;) l.unshift(r);
                for (; u[i] === l[i];) i++;
                return i ? s(u[i], l[i]) : u[i] === $ ? -1 : l[i] === $ ? 1 : 0
            }, n) : q
        }, t.matches = function(e, n) {
            return t(e, null, null, n)
        }, t.matchesSelector = function(e, n) {
            if ((e.ownerDocument || e) !== q && L(e), n = n.replace(ft, "='$1']"), !(!w.matchesSelector || !O || P && P.test(n) || F && F.test(n))) try {
                var r = M.call(e, n);
                if (r || w.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
            } catch (i) {}
            return t(n, q, null, [e]).length > 0
        }, t.contains = function(e, t) {
            return (e.ownerDocument || e) !== q && L(e), R(e, t)
        }, t.attr = function(e, t) {
            (e.ownerDocument || e) !== q && L(e);
            var n = T.attrHandle[t.toLowerCase()],
                r = n && G.call(T.attrHandle, t.toLowerCase()) ? n(e, t, !O) : void 0;
            return void 0 !== r ? r : w.attributes || !O ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }, t.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, t.uniqueSort = function(e) {
            var t, n = [],
                r = 0,
                i = 0;
            if (A = !w.detectDuplicates, D = !w.sortStable && e.slice(0), e.sort(U), A) {
                for (; t = e[i++];) t === e[i] && (r = n.push(i));
                for (; r--;) e.splice(n[r], 1)
            }
            return D = null, e
        }, C = t.getText = function(e) {
            var t, n = "",
                r = 0,
                i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += C(e)
                } else if (3 === i || 4 === i) return e.nodeValue
            } else
                for (; t = e[r++];) n += C(t);
            return n
        }, T = t.selectors = {
            cacheLength: 50,
            createPseudo: r,
            match: ht,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(wt, Tt), e[3] = (e[3] || e[4] || e[5] || "").replace(wt, Tt), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return ht.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && pt.test(n) && (t = k(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(wt, Tt).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    } : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = _[e + " "];
                    return t || (t = new RegExp("(^|" + rt + ")" + e + "(" + rt + "|$)")) && _(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== V && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, n, r) {
                    return function(i) {
                        var o = t.attr(i, e);
                        return null == o ? "!=" === n : n ? (o += "", "=" === n ? o === r : "!=" === n ? o !== r : "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice(-r.length) === r : "~=" === n ? (" " + o + " ").indexOf(r) > -1 : "|=" === n ? o === r || o.slice(0, r.length + 1) === r + "-" : !1) : !0
                    }
                },
                CHILD: function(e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3),
                        s = "last" !== e.slice(-4),
                        a = "of-type" === t;
                    return 1 === r && 0 === i ? function(e) {
                        return !!e.parentNode
                    } : function(t, n, u) {
                        var l, c, f, p, d, h, g = o !== s ? "nextSibling" : "previousSibling",
                            m = t.parentNode,
                            v = a && t.nodeName.toLowerCase(),
                            y = !u && !a;
                        if (m) {
                            if (o) {
                                for (; g;) {
                                    for (f = t; f = f[g];)
                                        if (a ? f.nodeName.toLowerCase() === v : 1 === f.nodeType) return !1;
                                    h = g = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [s ? m.firstChild : m.lastChild], s && y) {
                                for (c = m[W] || (m[W] = {}), l = c[e] || [], d = l[0] === B && l[1], p = l[0] === B && l[2], f = d && m.childNodes[d]; f = ++d && f && f[g] || (p = d = 0) || h.pop();)
                                    if (1 === f.nodeType && ++p && f === t) {
                                        c[e] = [B, d, p];
                                        break
                                    }
                            } else if (y && (l = (t[W] || (t[W] = {}))[e]) && l[0] === B) p = l[1];
                            else
                                for (;
                                    (f = ++d && f && f[g] || (p = d = 0) || h.pop()) && ((a ? f.nodeName.toLowerCase() !== v : 1 !== f.nodeType) || !++p || (y && ((f[W] || (f[W] = {}))[e] = [B, p]), f !== t)););
                            return p -= i, p === r || p % r === 0 && p / r >= 0
                        }
                    }
                },
                PSEUDO: function(e, n) {
                    var i, o = T.pseudos[e] || T.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return o[W] ? o(n) : o.length > 1 ? (i = [e, e, "", n], T.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function(e, t) {
                        for (var r, i = o(e, n), s = i.length; s--;) r = tt.call(e, i[s]), e[r] = !(t[r] = i[s])
                    }) : function(e) {
                        return o(e, 0, i)
                    }) : o
                }
            },
            pseudos: {
                not: r(function(e) {
                    var t = [],
                        n = [],
                        i = E(e.replace(ut, "$1"));
                    return i[W] ? r(function(e, t, n, r) {
                        for (var o, s = i(e, null, r, []), a = e.length; a--;)(o = s[a]) && (e[a] = !(t[a] = o))
                    }) : function(e, r, o) {
                        return t[0] = e, i(t, null, o, n), !n.pop()
                    }
                }),
                has: r(function(e) {
                    return function(n) {
                        return t(e, n).length > 0
                    }
                }),
                contains: r(function(e) {
                    return function(t) {
                        return (t.textContent || t.innerText || C(t)).indexOf(e) > -1
                    }
                }),
                lang: r(function(e) {
                    return dt.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(wt, Tt).toLowerCase(),
                        function(t) {
                            var n;
                            do
                                if (n = O ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
                            while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === H
                },
                focus: function(e) {
                    return e === q.activeElement && (!q.hasFocus || q.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function(e) {
                    return e.disabled === !1
                },
                disabled: function(e) {
                    return e.disabled === !0
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6) return !1;
                    return !0
                },
                parent: function(e) {
                    return !T.pseudos.empty(e)
                },
                header: function(e) {
                    return mt.test(e.nodeName)
                },
                input: function(e) {
                    return gt.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: l(function() {
                    return [0]
                }),
                last: l(function(e, t) {
                    return [t - 1]
                }),
                eq: l(function(e, t, n) {
                    return [0 > n ? n + t : n]
                }),
                even: l(function(e, t) {
                    for (var n = 0; t > n; n += 2) e.push(n);
                    return e
                }),
                odd: l(function(e, t) {
                    for (var n = 1; t > n; n += 2) e.push(n);
                    return e
                }),
                lt: l(function(e, t, n) {
                    for (var r = 0 > n ? n + t : n; --r >= 0;) e.push(r);
                    return e
                }),
                gt: l(function(e, t, n) {
                    for (var r = 0 > n ? n + t : n; ++r < t;) e.push(r);
                    return e
                })
            }
        }, T.pseudos.nth = T.pseudos.eq;
        for (b in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) T.pseudos[b] = a(b);
        for (b in {
                submit: !0,
                reset: !0
            }) T.pseudos[b] = u(b);
        return f.prototype = T.filters = T.pseudos, T.setFilters = new f, k = t.tokenize = function(e, n) {
            var r, i, o, s, a, u, l, c = z[e + " "];
            if (c) return n ? 0 : c.slice(0);
            for (a = e, u = [], l = T.preFilter; a;) {
                (!r || (i = lt.exec(a))) && (i && (a = a.slice(i[0].length) || a), u.push(o = [])), r = !1, (i = ct.exec(a)) && (r = i.shift(), o.push({
                    value: r,
                    type: i[0].replace(ut, " ")
                }), a = a.slice(r.length));
                for (s in T.filter) !(i = ht[s].exec(a)) || l[s] && !(i = l[s](i)) || (r = i.shift(), o.push({
                    value: r,
                    type: s,
                    matches: i
                }), a = a.slice(r.length));
                if (!r) break
            }
            return n ? a.length : a ? t.error(e) : z(e, u).slice(0)
        }, E = t.compile = function(e, t) {
            var n, r = [],
                i = [],
                o = X[e + " "];
            if (!o) {
                for (t || (t = k(e)), n = t.length; n--;) o = y(t[n]), o[W] ? r.push(o) : i.push(o);
                o = X(e, x(i, r)), o.selector = e
            }
            return o
        }, S = t.select = function(e, t, n, r) {
            var i, o, s, a, u, l = "function" == typeof e && e,
                f = !r && k(e = l.selector || e);
            if (n = n || [], 1 === f.length) {
                if (o = f[0] = f[0].slice(0), o.length > 2 && "ID" === (s = o[0]).type && w.getById && 9 === t.nodeType && O && T.relative[o[1].type]) {
                    if (t = (T.find.ID(s.matches[0].replace(wt, Tt), t) || [])[0], !t) return n;
                    l && (t = t.parentNode), e = e.slice(o.shift().value.length)
                }
                for (i = ht.needsContext.test(e) ? 0 : o.length; i-- && (s = o[i], !T.relative[a = s.type]);)
                    if ((u = T.find[a]) && (r = u(s.matches[0].replace(wt, Tt), xt.test(o[0].type) && c(t.parentNode) || t))) {
                        if (o.splice(i, 1), e = r.length && p(o), !e) return Z.apply(n, r), n;
                        break
                    }
            }
            return (l || E(e, f))(r, t, !O, n, xt.test(e) && c(t.parentNode) || t), n
        }, w.sortStable = W.split("").sort(U).join("") === W, w.detectDuplicates = !!A, L(), w.sortDetached = i(function(e) {
            return 1 & e.compareDocumentPosition(q.createElement("div"))
        }), i(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || o("type|href|height|width", function(e, t, n) {
            return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), w.attributes && i(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || o("value", function(e, t, n) {
            return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
        }), i(function(e) {
            return null == e.getAttribute("disabled")
        }) || o(nt, function(e, t, n) {
            var r;
            return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }), t
    }(e);
    Z.find = it, Z.expr = it.selectors, Z.expr[":"] = Z.expr.pseudos, Z.unique = it.uniqueSort, Z.text = it.getText, Z.isXMLDoc = it.isXML, Z.contains = it.contains;
    var ot = Z.expr.match.needsContext,
        st = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        at = /^.[^:#\[\.,]*$/;
    Z.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? Z.find.matchesSelector(r, e) ? [r] : [] : Z.find.matches(e, Z.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, Z.fn.extend({
        find: function(e) {
            var t, n = this.length,
                r = [],
                i = this;
            if ("string" != typeof e) return this.pushStack(Z(e).filter(function() {
                for (t = 0; n > t; t++)
                    if (Z.contains(i[t], this)) return !0
            }));
            for (t = 0; n > t; t++) Z.find(e, i[t], r);
            return r = this.pushStack(n > 1 ? Z.unique(r) : r), r.selector = this.selector ? this.selector + " " + e : e, r
        },
        filter: function(e) {
            return this.pushStack(r(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(r(this, e || [], !0))
        },
        is: function(e) {
            return !!r(this, "string" == typeof e && ot.test(e) ? Z(e) : e || [], !1).length
        }
    });
    var ut, lt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        ct = Z.fn.init = function(e, t) {
            var n, r;
            if (!e) return this;
            if ("string" == typeof e) {
                if (n = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : lt.exec(e), !n || !n[1] && t) return !t || t.jquery ? (t || ut).find(e) : this.constructor(t).find(e);
                if (n[1]) {
                    if (t = t instanceof Z ? t[0] : t, Z.merge(this, Z.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : J, !0)), st.test(n[1]) && Z.isPlainObject(t))
                        for (n in t) Z.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                    return this
                }
                return r = J.getElementById(n[2]), r && r.parentNode && (this.length = 1, this[0] = r), this.context = J, this.selector = e, this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : Z.isFunction(e) ? "undefined" != typeof ut.ready ? ut.ready(e) : e(Z) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), Z.makeArray(e, this))
        };
    ct.prototype = Z.fn, ut = Z(J);
    var ft = /^(?:parents|prev(?:Until|All))/,
        pt = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    Z.extend({
        dir: function(e, t, n) {
            for (var r = [], i = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (i && Z(e).is(n)) break;
                    r.push(e)
                }
            return r
        },
        sibling: function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    }), Z.fn.extend({
        has: function(e) {
            var t = Z(e, this),
                n = t.length;
            return this.filter(function() {
                for (var e = 0; n > e; e++)
                    if (Z.contains(this, t[e])) return !0
            })
        },
        closest: function(e, t) {
            for (var n, r = 0, i = this.length, o = [], s = ot.test(e) || "string" != typeof e ? Z(e, t || this.context) : 0; i > r; r++)
                for (n = this[r]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && Z.find.matchesSelector(n, e))) {
                        o.push(n);
                        break
                    }
            return this.pushStack(o.length > 1 ? Z.unique(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? U.call(Z(e), this[0]) : U.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(Z.unique(Z.merge(this.get(), Z(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), Z.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return Z.dir(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return Z.dir(e, "parentNode", n)
        },
        next: function(e) {
            return i(e, "nextSibling")
        },
        prev: function(e) {
            return i(e, "previousSibling")
        },
        nextAll: function(e) {
            return Z.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return Z.dir(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return Z.dir(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return Z.dir(e, "previousSibling", n)
        },
        siblings: function(e) {
            return Z.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return Z.sibling(e.firstChild)
        },
        contents: function(e) {
            return e.contentDocument || Z.merge([], e.childNodes)
        }
    }, function(e, t) {
        Z.fn[e] = function(n, r) {
            var i = Z.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = Z.filter(r, i)), this.length > 1 && (pt[e] || Z.unique(i), ft.test(e) && i.reverse()), this.pushStack(i)
        }
    });
    var dt = /\S+/g,
        ht = {};
    Z.Callbacks = function(e) {
        e = "string" == typeof e ? ht[e] || o(e) : Z.extend({}, e);
        var t, n, r, i, s, a, u = [],
            l = !e.once && [],
            c = function(o) {
                for (t = e.memory && o, n = !0, a = i || 0, i = 0, s = u.length, r = !0; u && s > a; a++)
                    if (u[a].apply(o[0], o[1]) === !1 && e.stopOnFalse) {
                        t = !1;
                        break
                    }
                r = !1, u && (l ? l.length && c(l.shift()) : t ? u = [] : f.disable())
            },
            f = {
                add: function() {
                    if (u) {
                        var n = u.length;
                        ! function o(t) {
                            Z.each(t, function(t, n) {
                                var r = Z.type(n);
                                "function" === r ? e.unique && f.has(n) || u.push(n) : n && n.length && "string" !== r && o(n)
                            })
                        }(arguments), r ? s = u.length : t && (i = n, c(t))
                    }
                    return this
                },
                remove: function() {
                    return u && Z.each(arguments, function(e, t) {
                        for (var n;
                            (n = Z.inArray(t, u, n)) > -1;) u.splice(n, 1), r && (s >= n && s--, a >= n && a--)
                    }), this
                },
                has: function(e) {
                    return e ? Z.inArray(e, u) > -1 : !(!u || !u.length)
                },
                empty: function() {
                    return u = [], s = 0, this
                },
                disable: function() {
                    return u = l = t = void 0, this
                },
                disabled: function() {
                    return !u
                },
                lock: function() {
                    return l = void 0, t || f.disable(), this
                },
                locked: function() {
                    return !l
                },
                fireWith: function(e, t) {
                    return !u || n && !l || (t = t || [], t = [e, t.slice ? t.slice() : t], r ? l.push(t) : c(t)), this
                },
                fire: function() {
                    return f.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!n
                }
            };
        return f
    }, Z.extend({
        Deferred: function(e) {
            var t = [
                    ["resolve", "done", Z.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", Z.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", Z.Callbacks("memory")]
                ],
                n = "pending",
                r = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        return i.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var e = arguments;
                        return Z.Deferred(function(n) {
                            Z.each(t, function(t, o) {
                                var s = Z.isFunction(e[t]) && e[t];
                                i[o[1]](function() {
                                    var e = s && s.apply(this, arguments);
                                    e && Z.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o[0] + "With"](this === r ? n.promise() : this, s ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? Z.extend(e, r) : r
                    }
                },
                i = {};
            return r.pipe = r.then, Z.each(t, function(e, o) {
                var s = o[2],
                    a = o[3];
                r[o[1]] = s.add, a && s.add(function() {
                    n = a
                }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function() {
                    return i[o[0] + "With"](this === i ? r : this, arguments), this
                }, i[o[0] + "With"] = s.fireWith
            }), r.promise(i), e && e.call(i, i), i
        },
        when: function(e) {
            var t, n, r, i = 0,
                o = _.call(arguments),
                s = o.length,
                a = 1 !== s || e && Z.isFunction(e.promise) ? s : 0,
                u = 1 === a ? e : Z.Deferred(),
                l = function(e, n, r) {
                    return function(i) {
                        n[e] = this, r[e] = arguments.length > 1 ? _.call(arguments) : i, r === t ? u.notifyWith(n, r) : --a || u.resolveWith(n, r)
                    }
                };
            if (s > 1)
                for (t = new Array(s), n = new Array(s), r = new Array(s); s > i; i++) o[i] && Z.isFunction(o[i].promise) ? o[i].promise().done(l(i, r, o)).fail(u.reject).progress(l(i, n, t)) : --a;
            return a || u.resolveWith(r, o), u.promise()
        }
    });
    var gt;
    Z.fn.ready = function(e) {
        return Z.ready.promise().done(e), this
    }, Z.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? Z.readyWait++ : Z.ready(!0)
        },
        ready: function(e) {
            (e === !0 ? --Z.readyWait : Z.isReady) || (Z.isReady = !0, e !== !0 && --Z.readyWait > 0 || (gt.resolveWith(J, [Z]), Z.fn.triggerHandler && (Z(J).triggerHandler("ready"), Z(J).off("ready"))))
        }
    }), Z.ready.promise = function(t) {
        return gt || (gt = Z.Deferred(), "complete" === J.readyState ? setTimeout(Z.ready) : (J.addEventListener("DOMContentLoaded", s, !1), e.addEventListener("load", s, !1))), gt.promise(t)
    }, Z.ready.promise();
    var mt = Z.access = function(e, t, n, r, i, o, s) {
        var a = 0,
            u = e.length,
            l = null == n;
        if ("object" === Z.type(n)) {
            i = !0;
            for (a in n) Z.access(e, t, a, n[a], !0, o, s)
        } else if (void 0 !== r && (i = !0, Z.isFunction(r) || (s = !0), l && (s ? (t.call(e, r), t = null) : (l = t, t = function(e, t, n) {
                return l.call(Z(e), n)
            })), t))
            for (; u > a; a++) t(e[a], n, s ? r : r.call(e[a], a, t(e[a], n)));
        return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
    };
    Z.acceptData = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    }, a.uid = 1, a.accepts = Z.acceptData, a.prototype = {
        key: function(e) {
            if (!a.accepts(e)) return 0;
            var t = {},
                n = e[this.expando];
            if (!n) {
                n = a.uid++;
                try {
                    t[this.expando] = {
                        value: n
                    }, Object.defineProperties(e, t)
                } catch (r) {
                    t[this.expando] = n, Z.extend(e, t)
                }
            }
            return this.cache[n] || (this.cache[n] = {}), n
        },
        set: function(e, t, n) {
            var r, i = this.key(e),
                o = this.cache[i];
            if ("string" == typeof t) o[t] = n;
            else if (Z.isEmptyObject(o)) Z.extend(this.cache[i], t);
            else
                for (r in t) o[r] = t[r];
            return o
        },
        get: function(e, t) {
            var n = this.cache[this.key(e)];
            return void 0 === t ? n : n[t]
        },
        access: function(e, t, n) {
            var r;
            return void 0 === t || t && "string" == typeof t && void 0 === n ? (r = this.get(e, t), void 0 !== r ? r : this.get(e, Z.camelCase(t))) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, r, i, o = this.key(e),
                s = this.cache[o];
            if (void 0 === t) this.cache[o] = {};
            else {
                Z.isArray(t) ? r = t.concat(t.map(Z.camelCase)) : (i = Z.camelCase(t), t in s ? r = [t, i] : (r = i, r = r in s ? [r] : r.match(dt) || [])), n = r.length;
                for (; n--;) delete s[r[n]]
            }
        },
        hasData: function(e) {
            return !Z.isEmptyObject(this.cache[e[this.expando]] || {})
        },
        discard: function(e) {
            e[this.expando] && delete this.cache[e[this.expando]]
        }
    };
    var vt = new a,
        yt = new a,
        xt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        bt = /([A-Z])/g;
    Z.extend({
        hasData: function(e) {
            return yt.hasData(e) || vt.hasData(e)
        },
        data: function(e, t, n) {
            return yt.access(e, t, n)
        },
        removeData: function(e, t) {
            yt.remove(e, t)
        },
        _data: function(e, t, n) {
            return vt.access(e, t, n)
        },
        _removeData: function(e, t) {
            vt.remove(e, t)
        }
    }), Z.fn.extend({
        data: function(e, t) {
            var n, r, i, o = this[0],
                s = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (i = yt.get(o), 1 === o.nodeType && !vt.get(o, "hasDataAttrs"))) {
                    for (n = s.length; n--;) s[n] && (r = s[n].name, 0 === r.indexOf("data-") && (r = Z.camelCase(r.slice(5)), u(o, r, i[r])));
                    vt.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof e ? this.each(function() {
                yt.set(this, e)
            }) : mt(this, function(t) {
                var n, r = Z.camelCase(e);
                if (o && void 0 === t) {
                    if (n = yt.get(o, e), void 0 !== n) return n;
                    if (n = yt.get(o, r), void 0 !== n) return n;
                    if (n = u(o, r, void 0), void 0 !== n) return n
                } else this.each(function() {
                    var n = yt.get(this, r);
                    yt.set(this, r, t), -1 !== e.indexOf("-") && void 0 !== n && yt.set(this, e, t)
                })
            }, null, t, arguments.length > 1, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                yt.remove(this, e)
            })
        }
    }), Z.extend({
        queue: function(e, t, n) {
            var r;
            return e ? (t = (t || "fx") + "queue", r = vt.get(e, t), n && (!r || Z.isArray(n) ? r = vt.access(e, t, Z.makeArray(n)) : r.push(n)), r || []) : void 0
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = Z.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = Z._queueHooks(e, t),
                s = function() {
                    Z.dequeue(e, t)
                };
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, s, o)), !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return vt.get(e, n) || vt.access(e, n, {
                empty: Z.Callbacks("once memory").add(function() {
                    vt.remove(e, [t + "queue", n])
                })
            })
        }
    }), Z.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? Z.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = Z.queue(this, e, t);
                Z._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && Z.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                Z.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1,
                i = Z.Deferred(),
                o = this,
                s = this.length,
                a = function() {
                    --r || i.resolveWith(o, [o])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;) n = vt.get(o[s], e + "queueHooks"), n && n.empty && (r++, n.empty.add(a));
            return a(), i.promise(t)
        }
    });
    var wt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Tt = ["Top", "Right", "Bottom", "Left"],
        Ct = function(e, t) {
            return e = t || e, "none" === Z.css(e, "display") || !Z.contains(e.ownerDocument, e)
        },
        Nt = /^(?:checkbox|radio)$/i;
    ! function() {
        var e = J.createDocumentFragment(),
            t = e.appendChild(J.createElement("div")),
            n = J.createElement("input");
        n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), Q.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", Q.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
    }();
    var kt = "undefined";
    Q.focusinBubbles = "onfocusin" in e;
    var Et = /^key/,
        St = /^(?:mouse|pointer|contextmenu)|click/,
        jt = /^(?:focusinfocus|focusoutblur)$/,
        Dt = /^([^.]*)(?:\.(.+)|)$/;
    Z.event = {
        global: {},
        add: function(e, t, n, r, i) {
            var o, s, a, u, l, c, f, p, d, h, g, m = vt.get(e);
            if (m)
                for (n.handler && (o = n, n = o.handler, i = o.selector), n.guid || (n.guid = Z.guid++), (u = m.events) || (u = m.events = {}), (s = m.handle) || (s = m.handle = function(t) {
                        return typeof Z !== kt && Z.event.triggered !== t.type ? Z.event.dispatch.apply(e, arguments) : void 0
                    }), t = (t || "").match(dt) || [""], l = t.length; l--;) a = Dt.exec(t[l]) || [], d = g = a[1], h = (a[2] || "").split(".").sort(), d && (f = Z.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = Z.event.special[d] || {}, c = Z.extend({
                    type: d,
                    origType: g,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && Z.expr.match.needsContext.test(i),
                    namespace: h.join(".")
                }, o), (p = u[d]) || (p = u[d] = [], p.delegateCount = 0, f.setup && f.setup.call(e, r, h, s) !== !1 || e.addEventListener && e.addEventListener(d, s, !1)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), Z.event.global[d] = !0)
        },
        remove: function(e, t, n, r, i) {
            var o, s, a, u, l, c, f, p, d, h, g, m = vt.hasData(e) && vt.get(e);
            if (m && (u = m.events)) {
                for (t = (t || "").match(dt) || [""], l = t.length; l--;)
                    if (a = Dt.exec(t[l]) || [], d = g = a[1], h = (a[2] || "").split(".").sort(), d) {
                        for (f = Z.event.special[d] || {}, d = (r ? f.delegateType : f.bindType) || d, p = u[d] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = p.length; o--;) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                        s && !p.length && (f.teardown && f.teardown.call(e, h, m.handle) !== !1 || Z.removeEvent(e, d, m.handle), delete u[d])
                    } else
                        for (d in u) Z.event.remove(e, d + t[l], n, r, !0);
                Z.isEmptyObject(u) && (delete m.handle, vt.remove(e, "events"))
            }
        },
        trigger: function(t, n, r, i) {
            var o, s, a, u, l, c, f, p = [r || J],
                d = G.call(t, "type") ? t.type : t,
                h = G.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = a = r = r || J, 3 !== r.nodeType && 8 !== r.nodeType && !jt.test(d + Z.event.triggered) && (d.indexOf(".") >= 0 && (h = d.split("."), d = h.shift(), h.sort()), l = d.indexOf(":") < 0 && "on" + d, t = t[Z.expando] ? t : new Z.Event(d, "object" == typeof t && t), t.isTrigger = i ? 2 : 3, t.namespace = h.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : Z.makeArray(n, [t]), f = Z.event.special[d] || {}, i || !f.trigger || f.trigger.apply(r, n) !== !1)) {
                if (!i && !f.noBubble && !Z.isWindow(r)) {
                    for (u = f.delegateType || d, jt.test(u + d) || (s = s.parentNode); s; s = s.parentNode) p.push(s), a = s;
                    a === (r.ownerDocument || J) && p.push(a.defaultView || a.parentWindow || e)
                }
                for (o = 0;
                    (s = p[o++]) && !t.isPropagationStopped();) t.type = o > 1 ? u : f.bindType || d, c = (vt.get(s, "events") || {})[t.type] && vt.get(s, "handle"), c && c.apply(s, n), c = l && s[l], c && c.apply && Z.acceptData(s) && (t.result = c.apply(s, n), t.result === !1 && t.preventDefault());
                return t.type = d, i || t.isDefaultPrevented() || f._default && f._default.apply(p.pop(), n) !== !1 || !Z.acceptData(r) || l && Z.isFunction(r[d]) && !Z.isWindow(r) && (a = r[l], a && (r[l] = null), Z.event.triggered = d, r[d](), Z.event.triggered = void 0, a && (r[l] = a)), t.result
            }
        },
        dispatch: function(e) {
            e = Z.event.fix(e);
            var t, n, r, i, o, s = [],
                a = _.call(arguments),
                u = (vt.get(this, "events") || {})[e.type] || [],
                l = Z.event.special[e.type] || {};
            if (a[0] = e, e.delegateTarget = this, !l.preDispatch || l.preDispatch.call(this, e) !== !1) {
                for (s = Z.event.handlers.call(this, e, u), t = 0;
                    (i = s[t++]) && !e.isPropagationStopped();)
                    for (e.currentTarget = i.elem, n = 0;
                        (o = i.handlers[n++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(o.namespace)) && (e.handleObj = o, e.data = o.data, r = ((Z.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, a), void 0 !== r && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()));
                return l.postDispatch && l.postDispatch.call(this, e), e.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, s = [],
                a = t.delegateCount,
                u = e.target;
            if (a && u.nodeType && (!e.button || "click" !== e.type))
                for (; u !== this; u = u.parentNode || this)
                    if (u.disabled !== !0 || "click" !== e.type) {
                        for (r = [], n = 0; a > n; n++) o = t[n], i = o.selector + " ", void 0 === r[i] && (r[i] = o.needsContext ? Z(i, this).index(u) >= 0 : Z.find(i, this, null, [u]).length), r[i] && r.push(o);
                        r.length && s.push({
                            elem: u,
                            handlers: r
                        })
                    }
            return a < t.length && s.push({
                elem: this,
                handlers: t.slice(a)
            }), s
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var n, r, i, o = t.button;
                return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || J, r = n.documentElement, i = n.body, e.pageX = t.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
            }
        },
        fix: function(e) {
            if (e[Z.expando]) return e;
            var t, n, r, i = e.type,
                o = e,
                s = this.fixHooks[i];
            for (s || (this.fixHooks[i] = s = St.test(i) ? this.mouseHooks : Et.test(i) ? this.keyHooks : {}), r = s.props ? this.props.concat(s.props) : this.props, e = new Z.Event(o), t = r.length; t--;) n = r[t], e[n] = o[n];
            return e.target || (e.target = J), 3 === e.target.nodeType && (e.target = e.target.parentNode), s.filter ? s.filter(e, o) : e
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== f() && this.focus ? (this.focus(), !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === f() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && Z.nodeName(this, "input") ? (this.click(), !1) : void 0
                },
                _default: function(e) {
                    return Z.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function(e, t, n, r) {
            var i = Z.extend(new Z.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            r ? Z.event.trigger(i, null, t) : Z.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
        }
    }, Z.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    }, Z.Event = function(e, t) {
        return this instanceof Z.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? l : c) : this.type = e, t && Z.extend(this, t), this.timeStamp = e && e.timeStamp || Z.now(), void(this[Z.expando] = !0)) : new Z.Event(e, t)
    }, Z.Event.prototype = {
        isDefaultPrevented: c,
        isPropagationStopped: c,
        isImmediatePropagationStopped: c,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = l, e && e.preventDefault && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = l, e && e.stopPropagation && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = l, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, Z.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        Z.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = this,
                    i = e.relatedTarget,
                    o = e.handleObj;
                return (!i || i !== r && !Z.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), Q.focusinBubbles || Z.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            Z.event.simulate(t, e.target, Z.event.fix(e), !0)
        };
        Z.event.special[t] = {
            setup: function() {
                var r = this.ownerDocument || this,
                    i = vt.access(r, t);
                i || r.addEventListener(e, n, !0), vt.access(r, t, (i || 0) + 1)
            },
            teardown: function() {
                var r = this.ownerDocument || this,
                    i = vt.access(r, t) - 1;
                i ? vt.access(r, t, i) : (r.removeEventListener(e, n, !0), vt.remove(r, t))
            }
        }
    }), Z.fn.extend({
        on: function(e, t, n, r, i) {
            var o, s;
            if ("object" == typeof e) {
                "string" != typeof t && (n = n || t, t = void 0);
                for (s in e) this.on(s, t, n, e[s], i);
                return this
            }
            if (null == n && null == r ? (r = t, n = t = void 0) : null == r && ("string" == typeof t ? (r = n, n = void 0) : (r = n, n = t, t = void 0)), r === !1) r = c;
            else if (!r) return this;
            return 1 === i && (o = r, r = function(e) {
                return Z().off(e), o.apply(this, arguments)
            }, r.guid = o.guid || (o.guid = Z.guid++)), this.each(function() {
                Z.event.add(this, e, r, n, t)
            })
        },
        one: function(e, t, n, r) {
            return this.on(e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, Z(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (i in e) this.off(i, t, e[i]);
                return this
            }
            return (t === !1 || "function" == typeof t) && (n = t, t = void 0), n === !1 && (n = c), this.each(function() {
                Z.event.remove(this, e, n, t)
            })
        },
        trigger: function(e, t) {
            return this.each(function() {
                Z.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            return n ? Z.event.trigger(e, t, n, !0) : void 0
        }
    });
    var At = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Lt = /<([\w:]+)/,
        qt = /<|&#?\w+;/,
        Ht = /<(?:script|style|link)/i,
        Ot = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ft = /^$|\/(?:java|ecma)script/i,
        Pt = /^true\/(.*)/,
        Mt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Rt = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    Rt.optgroup = Rt.option, Rt.tbody = Rt.tfoot = Rt.colgroup = Rt.caption = Rt.thead, Rt.th = Rt.td, Z.extend({
        clone: function(e, t, n) {
            var r, i, o, s, a = e.cloneNode(!0),
                u = Z.contains(e.ownerDocument, e);
            if (!(Q.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || Z.isXMLDoc(e)))
                for (s = v(a), o = v(e), r = 0, i = o.length; i > r; r++) y(o[r], s[r]);
            if (t)
                if (n)
                    for (o = o || v(e), s = s || v(a), r = 0, i = o.length; i > r; r++) m(o[r], s[r]);
                else m(e, a);
            return s = v(a, "script"), s.length > 0 && g(s, !u && v(e, "script")), a
        },
        buildFragment: function(e, t, n, r) {
            for (var i, o, s, a, u, l, c = t.createDocumentFragment(), f = [], p = 0, d = e.length; d > p; p++)
                if (i = e[p], i || 0 === i)
                    if ("object" === Z.type(i)) Z.merge(f, i.nodeType ? [i] : i);
                    else if (qt.test(i)) {
                for (o = o || c.appendChild(t.createElement("div")), s = (Lt.exec(i) || ["", ""])[1].toLowerCase(), a = Rt[s] || Rt._default, o.innerHTML = a[1] + i.replace(At, "<$1></$2>") + a[2], l = a[0]; l--;) o = o.lastChild;
                Z.merge(f, o.childNodes), o = c.firstChild, o.textContent = ""
            } else f.push(t.createTextNode(i));
            for (c.textContent = "", p = 0; i = f[p++];)
                if ((!r || -1 === Z.inArray(i, r)) && (u = Z.contains(i.ownerDocument, i), o = v(c.appendChild(i), "script"), u && g(o), n))
                    for (l = 0; i = o[l++];) Ft.test(i.type || "") && n.push(i);
            return c
        },
        cleanData: function(e) {
            for (var t, n, r, i, o = Z.event.special, s = 0; void 0 !== (n = e[s]); s++) {
                if (Z.acceptData(n) && (i = n[vt.expando], i && (t = vt.cache[i]))) {
                    if (t.events)
                        for (r in t.events) o[r] ? Z.event.remove(n, r) : Z.removeEvent(n, r, t.handle);
                    vt.cache[i] && delete vt.cache[i]
                }
                delete yt.cache[n[yt.expando]]
            }
        }
    }), Z.fn.extend({
        text: function(e) {
            return mt(this, function(e) {
                return void 0 === e ? Z.text(this) : this.empty().each(function() {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = p(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = p(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        remove: function(e, t) {
            for (var n, r = e ? Z.filter(e, this) : this, i = 0; null != (n = r[i]); i++) t || 1 !== n.nodeType || Z.cleanData(v(n)), n.parentNode && (t && Z.contains(n.ownerDocument, n) && g(v(n, "script")), n.parentNode.removeChild(n));
            return this
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (Z.cleanData(v(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
                return Z.clone(this, e, t)
            })
        },
        html: function(e) {
            return mt(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !Ht.test(e) && !Rt[(Lt.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = e.replace(At, "<$1></$2>");
                    try {
                        for (; r > n; n++) t = this[n] || {}, 1 === t.nodeType && (Z.cleanData(v(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (i) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = arguments[0];
            return this.domManip(arguments, function(t) {
                e = this.parentNode, Z.cleanData(v(this)), e && e.replaceChild(t, this)
            }), e && (e.length || e.nodeType) ? this : this.remove()
        },
        detach: function(e) {
            return this.remove(e, !0)
        },
        domManip: function(e, t) {
            e = z.apply([], e);
            var n, r, i, o, s, a, u = 0,
                l = this.length,
                c = this,
                f = l - 1,
                p = e[0],
                g = Z.isFunction(p);
            if (g || l > 1 && "string" == typeof p && !Q.checkClone && Ot.test(p)) return this.each(function(n) {
                var r = c.eq(n);
                g && (e[0] = p.call(this, n, r.html())), r.domManip(e, t)
            });
            if (l && (n = Z.buildFragment(e, this[0].ownerDocument, !1, this), r = n.firstChild, 1 === n.childNodes.length && (n = r), r)) {
                for (i = Z.map(v(n, "script"), d), o = i.length; l > u; u++) s = n, u !== f && (s = Z.clone(s, !0, !0), o && Z.merge(i, v(s, "script"))), t.call(this[u], s, u);
                if (o)
                    for (a = i[i.length - 1].ownerDocument, Z.map(i, h), u = 0; o > u; u++) s = i[u], Ft.test(s.type || "") && !vt.access(s, "globalEval") && Z.contains(a, s) && (s.src ? Z._evalUrl && Z._evalUrl(s.src) : Z.globalEval(s.textContent.replace(Mt, "")))
            }
            return this
        }
    }), Z.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        Z.fn[e] = function(e) {
            for (var n, r = [], i = Z(e), o = i.length - 1, s = 0; o >= s; s++) n = s === o ? this : this.clone(!0), Z(i[s])[t](n), X.apply(r, n.get());
            return this.pushStack(r)
        }
    });
    var Wt, $t = {},
        Bt = /^margin/,
        It = new RegExp("^(" + wt + ")(?!px)[a-z%]+$", "i"),
        _t = function(e) {
            return e.ownerDocument.defaultView.getComputedStyle(e, null)
        };
    ! function() {
        function t() {
            s.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", s.innerHTML = "", i.appendChild(o);
            var t = e.getComputedStyle(s, null);
            n = "1%" !== t.top, r = "4px" === t.width, i.removeChild(o)
        }
        var n, r, i = J.documentElement,
            o = J.createElement("div"),
            s = J.createElement("div");
        s.style && (s.style.backgroundClip = "content-box", s.cloneNode(!0).style.backgroundClip = "", Q.clearCloneStyle = "content-box" === s.style.backgroundClip, o.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", o.appendChild(s), e.getComputedStyle && Z.extend(Q, {
            pixelPosition: function() {
                return t(), n
            },
            boxSizingReliable: function() {
                return null == r && t(), r
            },
            reliableMarginRight: function() {
                var t, n = s.appendChild(J.createElement("div"));
                return n.style.cssText = s.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", n.style.marginRight = n.style.width = "0", s.style.width = "1px", i.appendChild(o), t = !parseFloat(e.getComputedStyle(n, null).marginRight), i.removeChild(o), t
            }
        }))
    }(), Z.swap = function(e, t, n, r) {
        var i, o, s = {};
        for (o in t) s[o] = e.style[o], e.style[o] = t[o];
        i = n.apply(e, r || []);
        for (o in t) e.style[o] = s[o];
        return i
    };
    var zt = /^(none|table(?!-c[ea]).+)/,
        Xt = new RegExp("^(" + wt + ")(.*)$", "i"),
        Ut = new RegExp("^([+-])=(" + wt + ")", "i"),
        Vt = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Yt = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Gt = ["Webkit", "O", "Moz", "ms"];
    Z.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = w(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, s, a = Z.camelCase(t),
                    u = e.style;
                return t = Z.cssProps[a] || (Z.cssProps[a] = C(u, a)), s = Z.cssHooks[t] || Z.cssHooks[a], void 0 === n ? s && "get" in s && void 0 !== (i = s.get(e, !1, r)) ? i : u[t] : (o = typeof n, "string" === o && (i = Ut.exec(n)) && (n = (i[1] + 1) * i[2] + parseFloat(Z.css(e, t)), o = "number"), null != n && n === n && ("number" !== o || Z.cssNumber[a] || (n += "px"), Q.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, r)) || (u[t] = n)), void 0)
            }
        },
        css: function(e, t, n, r) {
            var i, o, s, a = Z.camelCase(t);
            return t = Z.cssProps[a] || (Z.cssProps[a] = C(e.style, a)), s = Z.cssHooks[t] || Z.cssHooks[a], s && "get" in s && (i = s.get(e, !0, n)), void 0 === i && (i = w(e, t, r)), "normal" === i && t in Yt && (i = Yt[t]), "" === n || n ? (o = parseFloat(i), n === !0 || Z.isNumeric(o) ? o || 0 : i) : i
        }
    }), Z.each(["height", "width"], function(e, t) {
        Z.cssHooks[t] = {
            get: function(e, n, r) {
                return n ? zt.test(Z.css(e, "display")) && 0 === e.offsetWidth ? Z.swap(e, Vt, function() {
                    return E(e, t, r)
                }) : E(e, t, r) : void 0
            },
            set: function(e, n, r) {
                var i = r && _t(e);
                return N(e, n, r ? k(e, t, r, "border-box" === Z.css(e, "boxSizing", !1, i), i) : 0)
            }
        }
    }), Z.cssHooks.marginRight = T(Q.reliableMarginRight, function(e, t) {
        return t ? Z.swap(e, {
            display: "inline-block"
        }, w, [e, "marginRight"]) : void 0
    }), Z.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        Z.cssHooks[e + t] = {
            expand: function(n) {
                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++) i[e + Tt[r] + t] = o[r] || o[r - 2] || o[0];
                return i
            }
        }, Bt.test(e) || (Z.cssHooks[e + t].set = N)
    }), Z.fn.extend({
        css: function(e, t) {
            return mt(this, function(e, t, n) {
                var r, i, o = {},
                    s = 0;
                if (Z.isArray(t)) {
                    for (r = _t(e), i = t.length; i > s; s++) o[t[s]] = Z.css(e, t[s], !1, r);
                    return o
                }
                return void 0 !== n ? Z.style(e, t, n) : Z.css(e, t)
            }, e, t, arguments.length > 1)
        },
        show: function() {
            return S(this, !0)
        },
        hide: function() {
            return S(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                Ct(this) ? Z(this).show() : Z(this).hide()
            })
        }
    }), Z.Tween = j, j.prototype = {
        constructor: j,
        init: function(e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (Z.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = j.propHooks[this.prop];
            return e && e.get ? e.get(this) : j.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = j.propHooks[this.prop];
            return this.pos = t = this.options.duration ? Z.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : j.propHooks._default.set(this), this
        }
    }, j.prototype.init.prototype = j.prototype, j.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = Z.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
            },
            set: function(e) {
                Z.fx.step[e.prop] ? Z.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[Z.cssProps[e.prop]] || Z.cssHooks[e.prop]) ? Z.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, j.propHooks.scrollTop = j.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, Z.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, Z.fx = j.prototype.init, Z.fx.step = {};
    var Qt, Jt, Kt = /^(?:toggle|show|hide)$/,
        Zt = new RegExp("^(?:([+-])=|)(" + wt + ")([a-z%]*)$", "i"),
        en = /queueHooks$/,
        tn = [q],
        nn = {
            "*": [function(e, t) {
                var n = this.createTween(e, t),
                    r = n.cur(),
                    i = Zt.exec(t),
                    o = i && i[3] || (Z.cssNumber[e] ? "" : "px"),
                    s = (Z.cssNumber[e] || "px" !== o && +r) && Zt.exec(Z.css(n.elem, e)),
                    a = 1,
                    u = 20;
                if (s && s[3] !== o) {
                    o = o || s[3], i = i || [], s = +r || 1;
                    do a = a || ".5", s /= a, Z.style(n.elem, e, s + o); while (a !== (a = n.cur() / r) && 1 !== a && --u)
                }
                return i && (s = n.start = +s || +r || 0, n.unit = o, n.end = i[1] ? s + (i[1] + 1) * i[2] : +i[2]), n
            }]
        };
    Z.Animation = Z.extend(O, {
            tweener: function(e, t) {
                Z.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
                for (var n, r = 0, i = e.length; i > r; r++) n = e[r], nn[n] = nn[n] || [], nn[n].unshift(t)
            },
            prefilter: function(e, t) {
                t ? tn.unshift(e) : tn.push(e)
            }
        }), Z.speed = function(e, t, n) {
            var r = e && "object" == typeof e ? Z.extend({}, e) : {
                complete: n || !n && t || Z.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !Z.isFunction(t) && t
            };
            return r.duration = Z.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in Z.fx.speeds ? Z.fx.speeds[r.duration] : Z.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function() {
                Z.isFunction(r.old) && r.old.call(this), r.queue && Z.dequeue(this, r.queue)
            }, r
        }, Z.fn.extend({
            fadeTo: function(e, t, n, r) {
                return this.filter(Ct).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, r)
            },
            animate: function(e, t, n, r) {
                var i = Z.isEmptyObject(e),
                    o = Z.speed(t, n, r),
                    s = function() {
                        var t = O(this, Z.extend({}, e), o);
                        (i || vt.get(this, "finish")) && t.stop(!0)
                    };
                return s.finish = s, i || o.queue === !1 ? this.each(s) : this.queue(o.queue, s)
            },
            stop: function(e, t, n) {
                var r = function(e) {
                    var t = e.stop;
                    delete e.stop, t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                    var t = !0,
                        i = null != e && e + "queueHooks",
                        o = Z.timers,
                        s = vt.get(this);
                    if (i) s[i] && s[i].stop && r(s[i]);
                    else
                        for (i in s) s[i] && s[i].stop && en.test(i) && r(s[i]);
                    for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
                    (t || !n) && Z.dequeue(this, e)
                })
            },
            finish: function(e) {
                return e !== !1 && (e = e || "fx"), this.each(function() {
                    var t, n = vt.get(this),
                        r = n[e + "queue"],
                        i = n[e + "queueHooks"],
                        o = Z.timers,
                        s = r ? r.length : 0;
                    for (n.finish = !0, Z.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                    for (t = 0; s > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
                    delete n.finish
                })
            }
        }), Z.each(["toggle", "show", "hide"], function(e, t) {
            var n = Z.fn[t];
            Z.fn[t] = function(e, r, i) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(A(t, !0), e, r, i)
            }
        }), Z.each({
            slideDown: A("show"),
            slideUp: A("hide"),
            slideToggle: A("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, t) {
            Z.fn[e] = function(e, n, r) {
                return this.animate(t, e, n, r)
            }
        }), Z.timers = [], Z.fx.tick = function() {
            var e, t = 0,
                n = Z.timers;
            for (Qt = Z.now(); t < n.length; t++) e = n[t], e() || n[t] !== e || n.splice(t--, 1);
            n.length || Z.fx.stop(), Qt = void 0
        }, Z.fx.timer = function(e) {
            Z.timers.push(e), e() ? Z.fx.start() : Z.timers.pop()
        }, Z.fx.interval = 13, Z.fx.start = function() {
            Jt || (Jt = setInterval(Z.fx.tick, Z.fx.interval))
        }, Z.fx.stop = function() {
            clearInterval(Jt), Jt = null
        }, Z.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, Z.fn.delay = function(e, t) {
            return e = Z.fx ? Z.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
                var r = setTimeout(t, e);
                n.stop = function() {
                    clearTimeout(r)
                }
            })
        },
        function() {
            var e = J.createElement("input"),
                t = J.createElement("select"),
                n = t.appendChild(J.createElement("option"));
            e.type = "checkbox", Q.checkOn = "" !== e.value, Q.optSelected = n.selected, t.disabled = !0, Q.optDisabled = !n.disabled, e = J.createElement("input"), e.value = "t", e.type = "radio", Q.radioValue = "t" === e.value
        }();
    var rn, on, sn = Z.expr.attrHandle;
    Z.fn.extend({
        attr: function(e, t) {
            return mt(this, Z.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                Z.removeAttr(this, e)
            })
        }
    }), Z.extend({
        attr: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (e && 3 !== o && 8 !== o && 2 !== o) return typeof e.getAttribute === kt ? Z.prop(e, t, n) : (1 === o && Z.isXMLDoc(e) || (t = t.toLowerCase(), r = Z.attrHooks[t] || (Z.expr.match.bool.test(t) ? on : rn)), void 0 === n ? r && "get" in r && null !== (i = r.get(e, t)) ? i : (i = Z.find.attr(e, t), null == i ? void 0 : i) : null !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : void Z.removeAttr(e, t))
        },
        removeAttr: function(e, t) {
            var n, r, i = 0,
                o = t && t.match(dt);
            if (o && 1 === e.nodeType)
                for (; n = o[i++];) r = Z.propFix[n] || n, Z.expr.match.bool.test(n) && (e[r] = !1), e.removeAttribute(n)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!Q.radioValue && "radio" === t && Z.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        }
    }), on = {
        set: function(e, t, n) {
            return t === !1 ? Z.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, Z.each(Z.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = sn[t] || Z.find.attr;
        sn[t] = function(e, t, r) {
            var i, o;
            return r || (o = sn[t], sn[t] = i, i = null != n(e, t, r) ? t.toLowerCase() : null, sn[t] = o), i
        }
    });
    var an = /^(?:input|select|textarea|button)$/i;
    Z.fn.extend({
        prop: function(e, t) {
            return mt(this, Z.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[Z.propFix[e] || e]
            })
        }
    }), Z.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(e, t, n) {
            var r, i, o, s = e.nodeType;
            if (e && 3 !== s && 8 !== s && 2 !== s) return o = 1 !== s || !Z.isXMLDoc(e), o && (t = Z.propFix[t] || t, i = Z.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    return e.hasAttribute("tabindex") || an.test(e.nodeName) || e.href ? e.tabIndex : -1
                }
            }
        }
    }), Q.optSelected || (Z.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        }
    }), Z.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        Z.propFix[this.toLowerCase()] = this
    });
    var un = /[\t\r\n\f]/g;
    Z.fn.extend({
        addClass: function(e) {
            var t, n, r, i, o, s, a = "string" == typeof e && e,
                u = 0,
                l = this.length;
            if (Z.isFunction(e)) return this.each(function(t) {
                Z(this).addClass(e.call(this, t, this.className))
            });
            if (a)
                for (t = (e || "").match(dt) || []; l > u; u++)
                    if (n = this[u], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(un, " ") : " ")) {
                        for (o = 0; i = t[o++];) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                        s = Z.trim(r), n.className !== s && (n.className = s)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, r, i, o, s, a = 0 === arguments.length || "string" == typeof e && e,
                u = 0,
                l = this.length;
            if (Z.isFunction(e)) return this.each(function(t) {
                Z(this).removeClass(e.call(this, t, this.className))
            });
            if (a)
                for (t = (e || "").match(dt) || []; l > u; u++)
                    if (n = this[u], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(un, " ") : "")) {
                        for (o = 0; i = t[o++];)
                            for (; r.indexOf(" " + i + " ") >= 0;) r = r.replace(" " + i + " ", " ");
                        s = e ? Z.trim(r) : "", n.className !== s && (n.className = s)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : this.each(Z.isFunction(e) ? function(n) {
                Z(this).toggleClass(e.call(this, n, this.className, t), t)
            } : function() {
                if ("string" === n)
                    for (var t, r = 0, i = Z(this), o = e.match(dt) || []; t = o[r++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                else(n === kt || "boolean" === n) && (this.className && vt.set(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : vt.get(this, "__className__") || "")
            })
        },
        hasClass: function(e) {
            for (var t = " " + e + " ", n = 0, r = this.length; r > n; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(un, " ").indexOf(t) >= 0) return !0;
            return !1
        }
    });
    var ln = /\r/g;
    Z.fn.extend({
        val: function(e) {
            var t, n, r, i = this[0]; {
                if (arguments.length) return r = Z.isFunction(e), this.each(function(n) {
                    var i;
                    1 === this.nodeType && (i = r ? e.call(this, n, Z(this).val()) : e, null == i ? i = "" : "number" == typeof i ? i += "" : Z.isArray(i) && (i = Z.map(i, function(e) {
                        return null == e ? "" : e + ""
                    })), t = Z.valHooks[this.type] || Z.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
                });
                if (i) return t = Z.valHooks[i.type] || Z.valHooks[i.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : (n = i.value, "string" == typeof n ? n.replace(ln, "") : null == n ? "" : n)
            }
        }
    }), Z.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = Z.find.attr(e, "value");
                    return null != t ? t : Z.trim(Z.text(e))
                }
            },
            select: {
                get: function(e) {
                    for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || 0 > i, s = o ? null : [], a = o ? i + 1 : r.length, u = 0 > i ? a : o ? i : 0; a > u; u++)
                        if (n = r[u], !(!n.selected && u !== i || (Q.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && Z.nodeName(n.parentNode, "optgroup"))) {
                            if (t = Z(n).val(), o) return t;
                            s.push(t)
                        }
                    return s
                },
                set: function(e, t) {
                    for (var n, r, i = e.options, o = Z.makeArray(t), s = i.length; s--;) r = i[s], (r.selected = Z.inArray(r.value, o) >= 0) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), Z.each(["radio", "checkbox"], function() {
        Z.valHooks[this] = {
            set: function(e, t) {
                return Z.isArray(t) ? e.checked = Z.inArray(Z(e).val(), t) >= 0 : void 0
            }
        }, Q.checkOn || (Z.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }), Z.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        Z.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), Z.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        },
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    });
    var cn = Z.now(),
        fn = /\?/;
    Z.parseJSON = function(e) {
        return JSON.parse(e + "")
    }, Z.parseXML = function(e) {
        var t, n;
        if (!e || "string" != typeof e) return null;
        try {
            n = new DOMParser, t = n.parseFromString(e, "text/xml")
        } catch (r) {
            t = void 0
        }
        return (!t || t.getElementsByTagName("parsererror").length) && Z.error("Invalid XML: " + e), t
    };
    var pn, dn, hn = /#.*$/,
        gn = /([?&])_=[^&]*/,
        mn = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        vn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        yn = /^(?:GET|HEAD)$/,
        xn = /^\/\//,
        bn = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        wn = {},
        Tn = {},
        Cn = "*/".concat("*");
    try {
        dn = location.href
    } catch (Nn) {
        dn = J.createElement("a"), dn.href = "", dn = dn.href
    }
    pn = bn.exec(dn.toLowerCase()) || [], Z.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: dn,
            type: "GET",
            isLocal: vn.test(pn[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Cn,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": Z.parseJSON,
                "text xml": Z.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? M(M(e, Z.ajaxSettings), t) : M(Z.ajaxSettings, e)
        },
        ajaxPrefilter: F(wn),
        ajaxTransport: F(Tn),
        ajax: function(e, t) {
            function n(e, t, n, s) {
                var u, c, v, y, b, T = t;
                2 !== x && (x = 2, a && clearTimeout(a), r = void 0, o = s || "", w.readyState = e > 0 ? 4 : 0, u = e >= 200 && 300 > e || 304 === e, n && (y = R(f, w, n)), y = W(f, y, w, u), u ? (f.ifModified && (b = w.getResponseHeader("Last-Modified"), b && (Z.lastModified[i] = b), b = w.getResponseHeader("etag"), b && (Z.etag[i] = b)), 204 === e || "HEAD" === f.type ? T = "nocontent" : 304 === e ? T = "notmodified" : (T = y.state, c = y.data, v = y.error, u = !v)) : (v = T, (e || !T) && (T = "error", 0 > e && (e = 0))), w.status = e, w.statusText = (t || T) + "", u ? h.resolveWith(p, [c, T, w]) : h.rejectWith(p, [w, T, v]), w.statusCode(m), m = void 0, l && d.trigger(u ? "ajaxSuccess" : "ajaxError", [w, f, u ? c : v]), g.fireWith(p, [w, T]), l && (d.trigger("ajaxComplete", [w, f]), --Z.active || Z.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var r, i, o, s, a, u, l, c, f = Z.ajaxSetup({}, t),
                p = f.context || f,
                d = f.context && (p.nodeType || p.jquery) ? Z(p) : Z.event,
                h = Z.Deferred(),
                g = Z.Callbacks("once memory"),
                m = f.statusCode || {},
                v = {},
                y = {},
                x = 0,
                b = "canceled",
                w = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (2 === x) {
                            if (!s)
                                for (s = {}; t = mn.exec(o);) s[t[1].toLowerCase()] = t[2];
                            t = s[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return 2 === x ? o : null
                    },
                    setRequestHeader: function(e, t) {
                        var n = e.toLowerCase();
                        return x || (e = y[n] = y[n] || e, v[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return x || (f.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (2 > x)
                                for (t in e) m[t] = [m[t], e[t]];
                            else w.always(e[w.status]);
                        return this
                    },
                    abort: function(e) {
                        var t = e || b;
                        return r && r.abort(t), n(0, t), this
                    }
                };
            if (h.promise(w).complete = g.add, w.success = w.done, w.error = w.fail, f.url = ((e || f.url || dn) + "").replace(hn, "").replace(xn, pn[1] + "//"), f.type = t.method || t.type || f.method || f.type, f.dataTypes = Z.trim(f.dataType || "*").toLowerCase().match(dt) || [""], null == f.crossDomain && (u = bn.exec(f.url.toLowerCase()), f.crossDomain = !(!u || u[1] === pn[1] && u[2] === pn[2] && (u[3] || ("http:" === u[1] ? "80" : "443")) === (pn[3] || ("http:" === pn[1] ? "80" : "443")))), f.data && f.processData && "string" != typeof f.data && (f.data = Z.param(f.data, f.traditional)), P(wn, f, t, w), 2 === x) return w;
            l = f.global, l && 0 === Z.active++ && Z.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !yn.test(f.type), i = f.url, f.hasContent || (f.data && (i = f.url += (fn.test(i) ? "&" : "?") + f.data, delete f.data), f.cache === !1 && (f.url = gn.test(i) ? i.replace(gn, "$1_=" + cn++) : i + (fn.test(i) ? "&" : "?") + "_=" + cn++)), f.ifModified && (Z.lastModified[i] && w.setRequestHeader("If-Modified-Since", Z.lastModified[i]), Z.etag[i] && w.setRequestHeader("If-None-Match", Z.etag[i])), (f.data && f.hasContent && f.contentType !== !1 || t.contentType) && w.setRequestHeader("Content-Type", f.contentType), w.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Cn + "; q=0.01" : "") : f.accepts["*"]);
            for (c in f.headers) w.setRequestHeader(c, f.headers[c]);
            if (f.beforeSend && (f.beforeSend.call(p, w, f) === !1 || 2 === x)) return w.abort();
            b = "abort";
            for (c in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) w[c](f[c]);
            if (r = P(Tn, f, t, w)) {
                w.readyState = 1, l && d.trigger("ajaxSend", [w, f]), f.async && f.timeout > 0 && (a = setTimeout(function() {
                    w.abort("timeout")
                }, f.timeout));
                try {
                    x = 1, r.send(v, n)
                } catch (T) {
                    if (!(2 > x)) throw T;
                    n(-1, T)
                }
            } else n(-1, "No Transport");
            return w
        },
        getJSON: function(e, t, n) {
            return Z.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return Z.get(e, void 0, t, "script")
        }
    }), Z.each(["get", "post"], function(e, t) {
        Z[t] = function(e, n, r, i) {
            return Z.isFunction(n) && (i = i || r, r = n, n = void 0), Z.ajax({
                url: e,
                type: t,
                dataType: i,
                data: n,
                success: r
            })
        }
    }), Z.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        Z.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), Z._evalUrl = function(e) {
        return Z.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, Z.fn.extend({
        wrapAll: function(e) {
            var t;
            return Z.isFunction(e) ? this.each(function(t) {
                Z(this).wrapAll(e.call(this, t))
            }) : (this[0] && (t = Z(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this)
        },
        wrapInner: function(e) {
            return this.each(Z.isFunction(e) ? function(t) {
                Z(this).wrapInner(e.call(this, t))
            } : function() {
                var t = Z(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = Z.isFunction(e);
            return this.each(function(n) {
                Z(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                Z.nodeName(this, "body") || Z(this).replaceWith(this.childNodes)
            }).end()
        }
    }), Z.expr.filters.hidden = function(e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0
    }, Z.expr.filters.visible = function(e) {
        return !Z.expr.filters.hidden(e)
    };
    var kn = /%20/g,
        En = /\[\]$/,
        Sn = /\r?\n/g,
        jn = /^(?:submit|button|image|reset|file)$/i,
        Dn = /^(?:input|select|textarea|keygen)/i;
    Z.param = function(e, t) {
        var n, r = [],
            i = function(e, t) {
                t = Z.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (void 0 === t && (t = Z.ajaxSettings && Z.ajaxSettings.traditional), Z.isArray(e) || e.jquery && !Z.isPlainObject(e)) Z.each(e, function() {
            i(this.name, this.value)
        });
        else
            for (n in e) $(n, e[n], t, i);
        return r.join("&").replace(kn, "+")
    }, Z.fn.extend({
        serialize: function() {
            return Z.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = Z.prop(this, "elements");
                return e ? Z.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !Z(this).is(":disabled") && Dn.test(this.nodeName) && !jn.test(e) && (this.checked || !Nt.test(e))
            }).map(function(e, t) {
                var n = Z(this).val();
                return null == n ? null : Z.isArray(n) ? Z.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Sn, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Sn, "\r\n")
                }
            }).get()
        }
    }), Z.ajaxSettings.xhr = function() {
        try {
            return new XMLHttpRequest
        } catch (e) {}
    };
    var An = 0,
        Ln = {},
        qn = {
            0: 200,
            1223: 204
        },
        Hn = Z.ajaxSettings.xhr();
    e.ActiveXObject && Z(e).on("unload", function() {
        for (var e in Ln) Ln[e]()
    }), Q.cors = !!Hn && "withCredentials" in Hn, Q.ajax = Hn = !!Hn, Z.ajaxTransport(function(e) {
        var t;
        return Q.cors || Hn && !e.crossDomain ? {
            send: function(n, r) {
                var i, o = e.xhr(),
                    s = ++An;
                if (o.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                    for (i in e.xhrFields) o[i] = e.xhrFields[i];
                e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                for (i in n) o.setRequestHeader(i, n[i]);
                t = function(e) {
                    return function() {
                        t && (delete Ln[s], t = o.onload = o.onerror = null, "abort" === e ? o.abort() : "error" === e ? r(o.status, o.statusText) : r(qn[o.status] || o.status, o.statusText, "string" == typeof o.responseText ? {
                            text: o.responseText
                        } : void 0, o.getAllResponseHeaders()))
                    }
                }, o.onload = t(), o.onerror = t("error"), t = Ln[s] = t("abort");
                try {
                    o.send(e.hasContent && e.data || null)
                } catch (a) {
                    if (t) throw a
                }
            },
            abort: function() {
                t && t()
            }
        } : void 0
    }), Z.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(e) {
                return Z.globalEval(e), e
            }
        }
    }), Z.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), Z.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t, n;
            return {
                send: function(r, i) {
                    t = Z("<script>").prop({
                        async: !0,
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function(e) {
                        t.remove(), n = null, e && i("error" === e.type ? 404 : 200, e.type)
                    }), J.head.appendChild(t[0])
                },
                abort: function() {
                    n && n()
                }
            }
        }
    });
    var On = [],
        Fn = /(=)\?(?=&|$)|\?\?/;
    Z.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = On.pop() || Z.expando + "_" + cn++;
            return this[e] = !0, e
        }
    }), Z.ajaxPrefilter("json jsonp", function(t, n, r) {
        var i, o, s, a = t.jsonp !== !1 && (Fn.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && Fn.test(t.data) && "data");
        return a || "jsonp" === t.dataTypes[0] ? (i = t.jsonpCallback = Z.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(Fn, "$1" + i) : t.jsonp !== !1 && (t.url += (fn.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function() {
            return s || Z.error(i + " was not called"), s[0]
        }, t.dataTypes[0] = "json", o = e[i], e[i] = function() {
            s = arguments
        }, r.always(function() {
            e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, On.push(i)), s && Z.isFunction(o) && o(s[0]), s = o = void 0
        }), "script") : void 0
    }), Z.parseHTML = function(e, t, n) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (n = t, t = !1), t = t || J;
        var r = st.exec(e),
            i = !n && [];
        return r ? [t.createElement(r[1])] : (r = Z.buildFragment([e], t, i), i && i.length && Z(i).remove(), Z.merge([], r.childNodes))
    };
    var Pn = Z.fn.load;
    Z.fn.load = function(e, t, n) {
        if ("string" != typeof e && Pn) return Pn.apply(this, arguments);
        var r, i, o, s = this,
            a = e.indexOf(" ");
        return a >= 0 && (r = Z.trim(e.slice(a)), e = e.slice(0, a)), Z.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), s.length > 0 && Z.ajax({
            url: e,
            type: i,
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments, s.html(r ? Z("<div>").append(Z.parseHTML(e)).find(r) : e)
        }).complete(n && function(e, t) {
            s.each(n, o || [e.responseText, t, e])
        }), this
    }, Z.expr.filters.animated = function(e) {
        return Z.grep(Z.timers, function(t) {
            return e === t.elem
        }).length
    };
    var Mn = e.document.documentElement;
    Z.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, s, a, u, l, c = Z.css(e, "position"),
                f = Z(e),
                p = {};
            "static" === c && (e.style.position = "relative"), a = f.offset(), o = Z.css(e, "top"), u = Z.css(e, "left"), l = ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1, l ? (r = f.position(), s = r.top, i = r.left) : (s = parseFloat(o) || 0, i = parseFloat(u) || 0), Z.isFunction(t) && (t = t.call(e, n, a)), null != t.top && (p.top = t.top - a.top + s), null != t.left && (p.left = t.left - a.left + i), "using" in t ? t.using.call(e, p) : f.css(p)
        }
    }, Z.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                Z.offset.setOffset(this, e, t)
            });
            var t, n, r = this[0],
                i = {
                    top: 0,
                    left: 0
                },
                o = r && r.ownerDocument;
            if (o) return t = o.documentElement, Z.contains(t, r) ? (typeof r.getBoundingClientRect !== kt && (i = r.getBoundingClientRect()), n = B(o), {
                top: i.top + n.pageYOffset - t.clientTop,
                left: i.left + n.pageXOffset - t.clientLeft
            }) : i
        },
        position: function() {
            if (this[0]) {
                var e, t, n = this[0],
                    r = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === Z.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), Z.nodeName(e[0], "html") || (r = e.offset()), r.top += Z.css(e[0], "borderTopWidth", !0), r.left += Z.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - r.top - Z.css(n, "marginTop", !0),
                    left: t.left - r.left - Z.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent || Mn; e && !Z.nodeName(e, "html") && "static" === Z.css(e, "position");) e = e.offsetParent;
                return e || Mn
            })
        }
    }), Z.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, n) {
        var r = "pageYOffset" === n;
        Z.fn[t] = function(i) {
            return mt(this, function(t, i, o) {
                var s = B(t);
                return void 0 === o ? s ? s[n] : t[i] : void(s ? s.scrollTo(r ? e.pageXOffset : o, r ? o : e.pageYOffset) : t[i] = o)
            }, t, i, arguments.length, null)
        }
    }), Z.each(["top", "left"], function(e, t) {
        Z.cssHooks[t] = T(Q.pixelPosition, function(e, n) {
            return n ? (n = w(e, t), It.test(n) ? Z(e).position()[t] + "px" : n) : void 0
        })
    }), Z.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        Z.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, r) {
            Z.fn[r] = function(r, i) {
                var o = arguments.length && (n || "boolean" != typeof r),
                    s = n || (r === !0 || i === !0 ? "margin" : "border");
                return mt(this, function(t, n, r) {
                    var i;
                    return Z.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === r ? Z.css(t, n, s) : Z.style(t, n, r, s)
                }, t, o ? r : void 0, o, null)
            }
        })
    }), Z.fn.size = function() {
        return this.length
    }, Z.fn.andSelf = Z.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return Z
    });
    var Rn = e.jQuery,
        Wn = e.$;
    return Z.noConflict = function(t) {
        return e.$ === Z && (e.$ = Wn), t && e.jQuery === Z && (e.jQuery = Rn), Z
    }, typeof t === kt && (e.jQuery = e.$ = Z), Z
});;
! function(t, e) {
    "function" == typeof define && define.amd ? define(e) : t.Dragdealer = e()
}(this, function() {
    function t(t) {
        var e = "Webkit Moz ms O".split(" "),
            s = document.documentElement.style;
        if (void 0 !== s[t]) return t;
        t = t.charAt(0).toUpperCase() + t.substr(1);
        for (var i = 0; i < e.length; i++)
            if (void 0 !== s[e[i] + t]) return e[i] + t
    }
    var e = function(t, e) {
        this.bindMethods(), this.options = this.applyDefaults(e || {}), this.wrapper = this.getWrapperElement(t), this.wrapper && (this.handle = this.getHandleElement(this.wrapper, this.options.handleClass), this.handle && (this.init(), this.bindEventListeners()))
    };
    e.prototype = {
        defaults: {
            disabled: !1,
            horizontal: !0,
            vertical: !1,
            slide: !0,
            steps: 0,
            snap: !1,
            loose: !1,
            speed: .1,
            xPrecision: 0,
            yPrecision: 0,
            handleClass: "handle",
            css3: !0,
            activeClass: "active",
            tapping: !0
        },
        init: function() {
            this.value = {
                prev: [-1, -1],
                current: [this.options.x || 0, this.options.y || 0],
                target: [this.options.x || 0, this.options.y || 0]
            }, this.offset = {
                wrapper: [0, 0],
                mouse: [0, 0],
                prev: [-999999, -999999],
                current: [0, 0],
                target: [0, 0]
            }, this.change = [0, 0], this.stepRatios = this.calculateStepRatios(), this.activity = !1, this.dragging = !1, this.tapping = !1, this.reflow(), this.options.disabled && this.disable()
        },
        applyDefaults: function(t) {
            for (var e in this.defaults) t.hasOwnProperty(e) || (t[e] = this.defaults[e]);
            return t
        },
        getWrapperElement: function(t) {
            return "string" == typeof t ? document.getElementById(t) : t
        },
        getHandleElement: function(t, e) {
            var s, i, o;
            if (t.getElementsByClassName) {
                if (s = t.getElementsByClassName(e), s.length > 0) return s[0]
            } else
                for (i = new RegExp("(^|\\s)" + e + "(\\s|$)"), s = t.getElementsByTagName("*"), o = 0; o < s.length; o++)
                    if (i.test(s[o].className)) return s[o]
        },
        calculateStepRatios: function() {
            var t = [];
            if (this.options.steps > 1)
                for (var e = 0; e <= this.options.steps - 1; e++) t[e] = e / (this.options.steps - 1);
            return t
        },
        setWrapperOffset: function() {
            this.offset.wrapper = r.get(this.wrapper)
        },
        calculateBounds: function() {
            var t = {
                top: this.options.top || 0,
                bottom: -(this.options.bottom || 0) + this.wrapper.offsetHeight,
                left: this.options.left || 0,
                right: -(this.options.right || 0) + this.wrapper.offsetWidth
            };
            return t.availWidth = t.right - t.left - this.handle.offsetWidth, t.availHeight = t.bottom - t.top - this.handle.offsetHeight, t
        },
        calculateValuePrecision: function() {
            var t = this.options.xPrecision || Math.abs(this.bounds.availWidth),
                e = this.options.yPrecision || Math.abs(this.bounds.availHeight);
            return [t ? 1 / t : 0, e ? 1 / e : 0]
        },
        bindMethods: function() {
            this.onHandleMouseDown = s(this.onHandleMouseDown, this), this.onHandleTouchStart = s(this.onHandleTouchStart, this), this.onDocumentMouseMove = s(this.onDocumentMouseMove, this), this.onWrapperTouchMove = s(this.onWrapperTouchMove, this), this.onWrapperMouseDown = s(this.onWrapperMouseDown, this), this.onWrapperTouchStart = s(this.onWrapperTouchStart, this), this.onDocumentMouseUp = s(this.onDocumentMouseUp, this), this.onDocumentTouchEnd = s(this.onDocumentTouchEnd, this), this.onHandleClick = s(this.onHandleClick, this), this.onWindowResize = s(this.onWindowResize, this)
        },
        bindEventListeners: function() {
            i(this.handle, "mousedown", this.onHandleMouseDown), i(this.handle, "touchstart", this.onHandleTouchStart), i(document, "mousemove", this.onDocumentMouseMove), i(this.wrapper, "touchmove", this.onWrapperTouchMove), i(this.wrapper, "mousedown", this.onWrapperMouseDown), i(this.wrapper, "touchstart", this.onWrapperTouchStart), i(document, "mouseup", this.onDocumentMouseUp), i(document, "touchend", this.onDocumentTouchEnd), i(this.handle, "click", this.onHandleClick), i(window, "resize", this.onWindowResize);
            var t = this;
            this.interval = setInterval(function() {
                t.animate()
            }, 25), this.animate(!1, !0)
        },
        unbindEventListeners: function() {
            o(this.handle, "mousedown", this.onHandleMouseDown), o(this.handle, "touchstart", this.onHandleTouchStart), o(document, "mousemove", this.onDocumentMouseMove), o(this.wrapper, "touchmove", this.onWrapperTouchMove), o(this.wrapper, "mousedown", this.onWrapperMouseDown), o(this.wrapper, "touchstart", this.onWrapperTouchStart), o(document, "mouseup", this.onDocumentMouseUp), o(document, "touchend", this.onDocumentTouchEnd), o(this.handle, "click", this.onHandleClick), o(window, "resize", this.onWindowResize), clearInterval(this.interval)
        },
        onHandleMouseDown: function(t) {
            h.refresh(t), n(t), a(t), this.activity = !1, this.startDrag()
        },
        onHandleTouchStart: function(t) {
            h.refresh(t), a(t), this.activity = !1, this.startDrag()
        },
        onDocumentMouseMove: function(t) {
            h.refresh(t), this.dragging && (this.activity = !0)
        },
        onWrapperTouchMove: function(t) {
            return h.refresh(t), !this.activity && this.draggingOnDisabledAxis() ? void(this.dragging && this.stopDrag()) : (n(t), void(this.activity = !0))
        },
        onWrapperMouseDown: function(t) {
            h.refresh(t), n(t), this.startTap()
        },
        onWrapperTouchStart: function(t) {
            h.refresh(t), n(t), this.startTap()
        },
        onDocumentMouseUp: function() {
            this.stopDrag(), this.stopTap()
        },
        onDocumentTouchEnd: function() {
            this.stopDrag(), this.stopTap()
        },
        onHandleClick: function(t) {
            this.activity && (n(t), a(t))
        },
        onWindowResize: function() {
            this.reflow()
        },
        enable: function() {
            this.disabled = !1, this.handle.className = this.handle.className.replace(/\s?disabled/g, "")
        },
        disable: function() {
            this.disabled = !0, this.handle.className += " disabled"
        },
        reflow: function() {
            this.setWrapperOffset(), this.bounds = this.calculateBounds(), this.valuePrecision = this.calculateValuePrecision(), this.updateOffsetFromValue()
        },
        getStep: function() {
            return [this.getStepNumber(this.value.target[0]), this.getStepNumber(this.value.target[1])]
        },
        getValue: function() {
            return this.value.target
        },
        setStep: function(t, e, s) {
            this.setValue(this.options.steps && t > 1 ? (t - 1) / (this.options.steps - 1) : 0, this.options.steps && e > 1 ? (e - 1) / (this.options.steps - 1) : 0, s)
        },
        setValue: function(t, e, s) {
            this.setTargetValue([t, e || 0]), s && (this.groupCopy(this.value.current, this.value.target), this.updateOffsetFromValue(), this.callAnimationCallback())
        },
        startTap: function() {
            !this.disabled && this.options.tapping && (this.tapping = !0, this.setWrapperOffset(), this.setTargetValueByOffset([h.x - this.offset.wrapper[0] - this.handle.offsetWidth / 2, h.y - this.offset.wrapper[1] - this.handle.offsetHeight / 2]))
        },
        stopTap: function() {
            !this.disabled && this.tapping && (this.tapping = !1, this.setTargetValue(this.value.current))
        },
        startDrag: function() {
            this.disabled || (this.dragging = !0, this.setWrapperOffset(), this.offset.mouse = [h.x - r.get(this.handle)[0], h.y - r.get(this.handle)[1]], this.wrapper.className.match(this.options.activeClass) || (this.wrapper.className += " " + this.options.activeClass), this.wrapper.className.match("img-dragger-large") && $("#arrow").addClass("arrow-hide"))
        },
        stopDrag: function() {
            if (!this.disabled && this.dragging) {
                this.dragging = !1;
                var t = this.groupClone(this.value.current);
                if (this.options.slide) {
                    var e = this.change;
                    t[0] += 4 * e[0], t[1] += 4 * e[1]
                }
                this.setTargetValue(t), this.wrapper.className = this.wrapper.className.replace(" " + this.options.activeClass, ""), $("#arrow").removeClass("arrow-hide")
            }
        },
        callAnimationCallback: function() {
            var t = this.value.current;
            this.options.snap && this.options.steps > 1 && (t = this.getClosestSteps(t)), this.groupCompare(t, this.value.prev) || ("function" == typeof this.options.animationCallback && this.options.animationCallback.call(this, t[0], t[1]), this.groupCopy(this.value.prev, t))
        },
        callTargetCallback: function() {
            "function" == typeof this.options.callback && this.options.callback.call(this, this.value.target[0], this.value.target[1])
        },
        animate: function(t, e) {
            if (!t || this.dragging) {
                if (this.dragging) {
                    var s = this.groupClone(this.value.target),
                        i = [h.x - this.offset.wrapper[0] - this.offset.mouse[0], h.y - this.offset.wrapper[1] - this.offset.mouse[1]];
                    this.setTargetValueByOffset(i, this.options.loose), this.change = [this.value.target[0] - s[0], this.value.target[1] - s[1]]
                }(this.dragging || e) && this.groupCopy(this.value.current, this.value.target), (this.dragging || this.glide() || e) && (this.updateOffsetFromValue(), this.callAnimationCallback())
            }
        },
        glide: function() {
            var t = [this.value.target[0] - this.value.current[0], this.value.target[1] - this.value.current[1]];
            return t[0] || t[1] ? (Math.abs(t[0]) > this.valuePrecision[0] || Math.abs(t[1]) > this.valuePrecision[1] ? (this.value.current[0] += t[0] * this.options.speed, this.value.current[1] += t[1] * this.options.speed) : this.groupCopy(this.value.current, this.value.target), !0) : !1
        },
        updateOffsetFromValue: function() {
            this.offset.current = this.getOffsetsByRatios(this.options.snap ? this.getClosestSteps(this.value.current) : this.value.current), this.groupCompare(this.offset.current, this.offset.prev) || (this.renderHandlePosition(), this.groupCopy(this.offset.prev, this.offset.current))
        },
        renderHandlePosition: function() {
            var t = "";
            return this.options.css3 && u.transform ? (this.options.horizontal && (t += "translate3d(" + this.offset.current[0] + "px, 0, 0)"), this.options.vertical && (t += " translate3d(0, " + this.offset.current[1] + "px, 0)"), void(this.handle.style[u.transform] = t)) : (this.options.horizontal && (this.handle.style.left = this.offset.current[0] + "px"), void(this.options.vertical && (this.handle.style.top = this.offset.current[1] + "px")))
        },
        setTargetValue: function(t, e) {
            var s = e ? this.getLooseValue(t) : this.getProperValue(t);
            this.groupCopy(this.value.target, s), this.offset.target = this.getOffsetsByRatios(s), this.callTargetCallback()
        },
        setTargetValueByOffset: function(t, e) {
            var s = this.getRatiosByOffsets(t),
                i = e ? this.getLooseValue(s) : this.getProperValue(s);
            this.groupCopy(this.value.target, i), this.offset.target = this.getOffsetsByRatios(i)
        },
        getLooseValue: function(t) {
            var e = this.getProperValue(t);
            return [e[0] + (t[0] - e[0]) / 4, e[1] + (t[1] - e[1]) / 4]
        },
        getProperValue: function(t) {
            var e = this.groupClone(t);
            return e[0] = Math.max(e[0], 0), e[1] = Math.max(e[1], 0), e[0] = Math.min(e[0], 1), e[1] = Math.min(e[1], 1), (!this.dragging && !this.tapping || this.options.snap) && this.options.steps > 1 && (e = this.getClosestSteps(e)), e
        },
        getRatiosByOffsets: function(t) {
            return [this.getRatioByOffset(t[0], this.bounds.availWidth, this.bounds.left), this.getRatioByOffset(t[1], this.bounds.availHeight, this.bounds.top)]
        },
        getRatioByOffset: function(t, e, s) {
            return e ? (t - s) / e : 0
        },
        getOffsetsByRatios: function(t) {
            return [this.getOffsetByRatio(t[0], this.bounds.availWidth, this.bounds.left), this.getOffsetByRatio(t[1], this.bounds.availHeight, this.bounds.top)]
        },
        getOffsetByRatio: function(t, e, s) {
            return Math.round(t * e) + s
        },
        getStepNumber: function(t) {
            return this.getClosestStep(t) * (this.options.steps - 1) + 1
        },
        getClosestSteps: function(t) {
            return [this.getClosestStep(t[0]), this.getClosestStep(t[1])]
        },
        getClosestStep: function(t) {
            for (var e = 0, s = 1, i = 0; i <= this.options.steps - 1; i++) Math.abs(this.stepRatios[i] - t) < s && (s = Math.abs(this.stepRatios[i] - t), e = i);
            return this.stepRatios[e]
        },
        groupCompare: function(t, e) {
            return t[0] == e[0] && t[1] == e[1]
        },
        groupCopy: function(t, e) {
            t[0] = e[0], t[1] = e[1]
        },
        groupClone: function(t) {
            return [t[0], t[1]]
        },
        draggingOnDisabledAxis: function() {
            return !this.options.horizontal && h.xDiff > h.yDiff || !this.options.vertical && h.yDiff > h.xDiff
        }
    };
    var s = function(t, e) {
            return function() {
                return t.apply(e, arguments)
            }
        },
        i = function(t, e, s) {
            t.addEventListener ? t.addEventListener(e, s, !1) : t.attachEvent && t.attachEvent("on" + e, s)
        },
        o = function(t, e, s) {
            t.removeEventListener ? t.removeEventListener(e, s, !1) : t.detachEvent && t.detachEvent("on" + e, s)
        },
        n = function(t) {
            t || (t = window.event), t.preventDefault && t.preventDefault(), t.returnValue = !1
        },
        a = function(t) {
            t || (t = window.event), t.stopPropagation && t.stopPropagation(), t.cancelBubble = !0
        },
        h = {
            x: 0,
            y: 0,
            xDiff: 0,
            yDiff: 0,
            refresh: function(t) {
                t || (t = window.event), "mousemove" == t.type ? this.set(t) : t.touches && this.set(t.touches[0])
            },
            set: function(t) {
                var e = this.x,
                    s = this.y;
                t.clientX || t.clientY ? (this.x = t.clientX, this.y = t.clientY) : (t.pageX || t.pageY) && (this.x = t.pageX - document.body.scrollLeft - document.documentElement.scrollLeft, this.y = t.pageY - document.body.scrollTop - document.documentElement.scrollTop), this.xDiff = Math.abs(this.x - e), this.yDiff = Math.abs(this.y - s)
            }
        },
        r = {
            get: function(t) {
                var e = {
                    left: 0,
                    top: 0
                };
                return void 0 !== t.getBoundingClientRect && (e = t.getBoundingClientRect()), [e.left, e.top]
            }
        },
        u = {
            transform: t("transform")
        };
    return e
});;
! function(t) {
    var e, n, r = "0.4.2",
        i = "hasOwnProperty",
        a = /[\.\/]/,
        o = /\s*,\s*/,
        s = "*",
        u = function(t, e) {
            return t - e
        },
        l = {
            n: {}
        },
        c = function() {
            for (var t = 0, e = this.length; e > t; t++)
                if ("undefined" != typeof this[t]) return this[t]
        },
        f = function() {
            for (var t = this.length; --t;)
                if ("undefined" != typeof this[t]) return this[t]
        },
        h = function(t, r) {
            t = String(t);
            var i, a = n,
                o = Array.prototype.slice.call(arguments, 2),
                s = h.listeners(t),
                l = 0,
                d = [],
                p = {},
                g = [],
                v = e;
            g.firstDefined = c, g.lastDefined = f, e = t, n = 0;
            for (var m = 0, y = s.length; y > m; m++) "zIndex" in s[m] && (d.push(s[m].zIndex), s[m].zIndex < 0 && (p[s[m].zIndex] = s[m]));
            for (d.sort(u); d[l] < 0;)
                if (i = p[d[l++]], g.push(i.apply(r, o)), n) return n = a, g;
            for (m = 0; y > m; m++)
                if (i = s[m], "zIndex" in i)
                    if (i.zIndex == d[l]) {
                        if (g.push(i.apply(r, o)), n) break;
                        do
                            if (l++, i = p[d[l]], i && g.push(i.apply(r, o)), n) break;
                        while (i)
                    } else p[i.zIndex] = i;
            else if (g.push(i.apply(r, o)), n) break;
            return n = a, e = v, g
        };
    h._events = l, h.listeners = function(t) {
        var e, n, r, i, o, u, c, f, h = t.split(a),
            d = l,
            p = [d],
            g = [];
        for (i = 0, o = h.length; o > i; i++) {
            for (f = [], u = 0, c = p.length; c > u; u++)
                for (d = p[u].n, n = [d[h[i]], d[s]], r = 2; r--;) e = n[r], e && (f.push(e), g = g.concat(e.f || []));
            p = f
        }
        return g
    }, h.on = function(t, e) {
        if (t = String(t), "function" != typeof e) return function() {};
        for (var n = t.split(o), r = 0, i = n.length; i > r; r++) ! function(t) {
            for (var n, r = t.split(a), i = l, o = 0, s = r.length; s > o; o++) i = i.n, i = i.hasOwnProperty(r[o]) && i[r[o]] || (i[r[o]] = {
                n: {}
            });
            for (i.f = i.f || [], o = 0, s = i.f.length; s > o; o++)
                if (i.f[o] == e) {
                    n = !0;
                    break
                }!n && i.f.push(e)
        }(n[r]);
        return function(t) {
            +t == +t && (e.zIndex = +t)
        }
    }, h.f = function(t) {
        var e = [].slice.call(arguments, 1);
        return function() {
            h.apply(null, [t, null].concat(e).concat([].slice.call(arguments, 0)))
        }
    }, h.stop = function() {
        n = 1
    }, h.nt = function(t) {
        return t ? new RegExp("(?:\\.|\\/|^)" + t + "(?:\\.|\\/|$)").test(e) : e
    }, h.nts = function() {
        return e.split(a)
    }, h.off = h.unbind = function(t, e) {
        if (!t) return void(h._events = l = {
            n: {}
        });
        var n = t.split(o);
        if (n.length > 1)
            for (var r = 0, u = n.length; u > r; r++) h.off(n[r], e);
        else {
            n = t.split(a);
            var c, f, d, r, u, p, g, v = [l];
            for (r = 0, u = n.length; u > r; r++)
                for (p = 0; p < v.length; p += d.length - 2) {
                    if (d = [p, 1], c = v[p].n, n[r] != s) c[n[r]] && d.push(c[n[r]]);
                    else
                        for (f in c) c[i](f) && d.push(c[f]);
                    v.splice.apply(v, d)
                }
            for (r = 0, u = v.length; u > r; r++)
                for (c = v[r]; c.n;) {
                    if (e) {
                        if (c.f) {
                            for (p = 0, g = c.f.length; g > p; p++)
                                if (c.f[p] == e) {
                                    c.f.splice(p, 1);
                                    break
                                }!c.f.length && delete c.f
                        }
                        for (f in c.n)
                            if (c.n[i](f) && c.n[f].f) {
                                var m = c.n[f].f;
                                for (p = 0, g = m.length; g > p; p++)
                                    if (m[p] == e) {
                                        m.splice(p, 1);
                                        break
                                    }!m.length && delete c.n[f].f
                            }
                    } else {
                        delete c.f;
                        for (f in c.n) c.n[i](f) && c.n[f].f && delete c.n[f].f
                    }
                    c = c.n
                }
        }
    }, h.once = function(t, e) {
        var n = function() {
            return h.unbind(t, n), e.apply(this, arguments)
        };
        return h.on(t, n)
    }, h.version = r, h.toString = function() {
        return "You are running Eve " + r
    }, "undefined" != typeof module && module.exports ? module.exports = h : "function" == typeof define && define.amd ? define("eve", [], function() {
        return h
    }) : t.eve = h
}(this),
function(t, e) {
    "function" == typeof define && define.amd ? define(["eve"], function(n) {
        return e(t, n)
    }) : e(t, t.eve)
}(this, function(t, e) {
    var n = function(e) {
            var n = {},
                r = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || t.msRequestAnimationFrame || function(t) {
                    setTimeout(t, 16)
                },
                i = Array.isArray || function(t) {
                    return t instanceof Array || "[object Array]" == Object.prototype.toString.call(t)
                },
                a = 0,
                o = "M" + (+new Date).toString(36),
                s = function() {
                    return o + (a++).toString(36)
                },
                u = Date.now || function() {
                    return +new Date
                },
                l = function(t) {
                    var e = this;
                    if (null == t) return e.s;
                    var n = e.s - t;
                    e.b += e.dur * n, e.B += e.dur * n, e.s = t
                },
                c = function(t) {
                    var e = this;
                    return null == t ? e.spd : void(e.spd = t)
                },
                f = function(t) {
                    var e = this;
                    return null == t ? e.dur : (e.s = e.s * t / e.dur, void(e.dur = t))
                },
                h = function() {
                    var t = this;
                    delete n[t.id], t.update(), e("mina.stop." + t.id, t)
                },
                d = function() {
                    var t = this;
                    t.pdif || (delete n[t.id], t.update(), t.pdif = t.get() - t.b)
                },
                p = function() {
                    var t = this;
                    t.pdif && (t.b = t.get() - t.pdif, delete t.pdif, n[t.id] = t)
                },
                g = function() {
                    var t, e = this;
                    if (i(e.start)) {
                        t = [];
                        for (var n = 0, r = e.start.length; r > n; n++) t[n] = +e.start[n] + (e.end[n] - e.start[n]) * e.easing(e.s)
                    } else t = +e.start + (e.end - e.start) * e.easing(e.s);
                    e.set(t)
                },
                v = function() {
                    var t = 0;
                    for (var i in n)
                        if (n.hasOwnProperty(i)) {
                            var a = n[i],
                                o = a.get();
                            t++, a.s = (o - a.b) / (a.dur / a.spd), a.s >= 1 && (delete n[i], a.s = 1, t--, function(t) {
                                setTimeout(function() {
                                    e("mina.finish." + t.id, t)
                                })
                            }(a)), a.update()
                        }
                    t && r(v)
                },
                m = function(t, e, i, a, o, u, y) {
                    var x = {
                        id: s(),
                        start: t,
                        end: e,
                        b: i,
                        s: 0,
                        dur: a - i,
                        spd: 1,
                        get: o,
                        set: u,
                        easing: y || m.linear,
                        status: l,
                        speed: c,
                        duration: f,
                        stop: h,
                        pause: d,
                        resume: p,
                        update: g
                    };
                    n[x.id] = x;
                    var b, w = 0;
                    for (b in n)
                        if (n.hasOwnProperty(b) && (w++, 2 == w)) break;
                    return 1 == w && r(v), x
                };
            return m.time = u, m.getById = function(t) {
                return n[t] || null
            }, m.linear = function(t) {
                return t
            }, m.easeout = function(t) {
                return Math.pow(t, 1.7)
            }, m.easein = function(t) {
                return Math.pow(t, .48)
            }, m.easeinout = function(t) {
                if (1 == t) return 1;
                if (0 == t) return 0;
                var e = .48 - t / 1.04,
                    n = Math.sqrt(.1734 + e * e),
                    r = n - e,
                    i = Math.pow(Math.abs(r), 1 / 3) * (0 > r ? -1 : 1),
                    a = -n - e,
                    o = Math.pow(Math.abs(a), 1 / 3) * (0 > a ? -1 : 1),
                    s = i + o + .5;
                return 3 * (1 - s) * s * s + s * s * s
            }, m.backin = function(t) {
                if (1 == t) return 1;
                var e = 1.70158;
                return t * t * ((e + 1) * t - e)
            }, m.backout = function(t) {
                if (0 == t) return 0;
                t -= 1;
                var e = 1.70158;
                return t * t * ((e + 1) * t + e) + 1
            }, m.elastic = function(t) {
                return t == !!t ? t : Math.pow(2, -10 * t) * Math.sin(2 * (t - .075) * Math.PI / .3) + 1
            }, m.bounce = function(t) {
                var e, n = 7.5625,
                    r = 2.75;
                return 1 / r > t ? e = n * t * t : 2 / r > t ? (t -= 1.5 / r, e = n * t * t + .75) : 2.5 / r > t ? (t -= 2.25 / r, e = n * t * t + .9375) : (t -= 2.625 / r, e = n * t * t + .984375), e
            }, t.mina = m, m
        }("undefined" == typeof e ? function() {} : e),
        r = function() {
            function r(t, e) {
                if (t) {
                    if (t.tagName) return k(t);
                    if (a(t, "array") && r.set) return r.set.apply(r, t);
                    if (t instanceof b) return t;
                    if (null == e) return t = M.doc.querySelector(t), k(t)
                }
                return t = null == t ? "100%" : t, e = null == e ? "100%" : e, new S(t, e)
            }

            function i(t, e) {
                if (e) {
                    if ("#text" == t && (t = M.doc.createTextNode(e.text || "")), "string" == typeof t && (t = i(t)), "string" == typeof e) return "xlink:" == e.substring(0, 6) ? t.getAttributeNS(Y, e.substring(6)) : "xml:" == e.substring(0, 4) ? t.getAttributeNS(W, e.substring(4)) : t.getAttribute(e);
                    for (var n in e)
                        if (e[T](n)) {
                            var r = _(e[n]);
                            r ? "xlink:" == n.substring(0, 6) ? t.setAttributeNS(Y, n.substring(6), r) : "xml:" == n.substring(0, 4) ? t.setAttributeNS(W, n.substring(4), r) : t.setAttribute(n, r) : t.removeAttribute(n)
                        }
                } else t = M.doc.createElementNS(W, t);
                return t
            }

            function a(t, e) {
                return e = _.prototype.toLowerCase.call(e), "finite" == e ? isFinite(t) : "array" == e && (t instanceof Array || Array.isArray && Array.isArray(t)) ? !0 : "null" == e && null === t || e == typeof t && null !== t || "object" == e && t === Object(t) || V.call(t).slice(8, -1).toLowerCase() == e
            }

            function o(t) {
                if ("function" == typeof t || Object(t) !== t) return t;
                var e = new t.constructor;
                for (var n in t) t[T](n) && (e[n] = o(t[n]));
                return e
            }

            function s(t, e) {
                for (var n = 0, r = t.length; r > n; n++)
                    if (t[n] === e) return t.push(t.splice(n, 1)[0])
            }

            function u(t, e, n) {
                function r() {
                    var i = Array.prototype.slice.call(arguments, 0),
                        a = i.join("␀"),
                        o = r.cache = r.cache || {},
                        u = r.count = r.count || [];
                    return o[T](a) ? (s(u, a), n ? n(o[a]) : o[a]) : (u.length >= 1e3 && delete o[u.shift()], u.push(a), o[a] = t.apply(e, i), n ? n(o[a]) : o[a])
                }
                return r
            }

            function l(t, e, n, r, i, a) {
                if (null == i) {
                    var o = t - n,
                        s = e - r;
                    return o || s ? (180 + 180 * F.atan2(-s, -o) / P + 360) % 360 : 0
                }
                return l(t, e, i, a) - l(n, r, i, a)
            }

            function c(t) {
                return t % 360 * P / 180
            }

            function f(t) {
                return 180 * t / P % 360
            }

            function h(t) {
                var e = [];
                return t = t.replace(/(?:^|\s)(\w+)\(([^)]+)\)/g, function(t, n, r) {
                    return r = r.split(/\s*,\s*|\s+/), "rotate" == n && 1 == r.length && r.push(0, 0), "scale" == n && (r.length > 2 ? r = r.slice(0, 2) : 2 == r.length && r.push(0, 0), 1 == r.length && r.push(r[0], 0, 0)), e.push("skewX" == n ? ["m", 1, 0, F.tan(c(r[0])), 1, 0, 0] : "skewY" == n ? ["m", 1, F.tan(c(r[0])), 0, 1, 0, 0] : [n.charAt(0)].concat(r)), t
                }), e
            }

            function d(t, e) {
                var n = ie(t),
                    i = new r.Matrix;
                if (n)
                    for (var a = 0, o = n.length; o > a; a++) {
                        var s, u, l, c, f, h = n[a],
                            d = h.length,
                            p = _(h[0]).toLowerCase(),
                            g = h[0] != p,
                            v = g ? i.invert() : 0;
                        "t" == p && 2 == d ? i.translate(h[1], 0) : "t" == p && 3 == d ? g ? (s = v.x(0, 0), u = v.y(0, 0), l = v.x(h[1], h[2]), c = v.y(h[1], h[2]), i.translate(l - s, c - u)) : i.translate(h[1], h[2]) : "r" == p ? 2 == d ? (f = f || e, i.rotate(h[1], f.x + f.width / 2, f.y + f.height / 2)) : 4 == d && (g ? (l = v.x(h[2], h[3]), c = v.y(h[2], h[3]), i.rotate(h[1], l, c)) : i.rotate(h[1], h[2], h[3])) : "s" == p ? 2 == d || 3 == d ? (f = f || e, i.scale(h[1], h[d - 1], f.x + f.width / 2, f.y + f.height / 2)) : 4 == d ? g ? (l = v.x(h[2], h[3]), c = v.y(h[2], h[3]), i.scale(h[1], h[1], l, c)) : i.scale(h[1], h[1], h[2], h[3]) : 5 == d && (g ? (l = v.x(h[3], h[4]), c = v.y(h[3], h[4]), i.scale(h[1], h[2], l, c)) : i.scale(h[1], h[2], h[3], h[4])) : "m" == p && 7 == d && i.add(h[1], h[2], h[3], h[4], h[5], h[6])
                    }
                return i
            }

            function p(t, e) {
                if (null == e) {
                    var n = !0;
                    if (e = t.node.getAttribute("linearGradient" == t.type || "radialGradient" == t.type ? "gradientTransform" : "pattern" == t.type ? "patternTransform" : "transform"), !e) return new r.Matrix;
                    e = h(e)
                } else e = r._.rgTransform.test(e) ? _(e).replace(/\.{3}|\u2026/g, t._.transform || q) : h(e), a(e, "array") && (e = r.path ? r.path.toString.call(e) : _(e)), t._.transform = e;
                var i = d(e, t.getBBox(1));
                return n ? i : void(t.matrix = i)
            }

            function v(t) {
                var e = t.node.ownerSVGElement && k(t.node.ownerSVGElement) || t.node.parentNode && k(t.node.parentNode) || r.select("svg") || r(0, 0),
                    n = e.select("defs"),
                    i = null == n ? !1 : n.node;
                return i || (i = C("defs", e.node).node), i
            }

            function m(t) {
                return t.node.ownerSVGElement && k(t.node.ownerSVGElement) || r.select("svg")
            }

            function y(t, e, n) {
                function r(t) {
                    if (null == t) return q;
                    if (t == +t) return t;
                    i(l, {
                        width: t
                    });
                    try {
                        return l.getBBox().width
                    } catch (e) {
                        return 0
                    }
                }

                function a(t) {
                    if (null == t) return q;
                    if (t == +t) return t;
                    i(l, {
                        height: t
                    });
                    try {
                        return l.getBBox().height
                    } catch (e) {
                        return 0
                    }
                }

                function o(r, i) {
                    null == e ? u[r] = i(t.attr(r) || 0) : r == e && (u = i(null == n ? t.attr(r) || 0 : n))
                }
                var s = m(t).node,
                    u = {},
                    l = s.querySelector(".svg---mgr");
                switch (l || (l = i("rect"), i(l, {
                    x: -9e9,
                    y: -9e9,
                    width: 10,
                    height: 10,
                    "class": "svg---mgr",
                    fill: "none"
                }), s.appendChild(l)), t.type) {
                    case "rect":
                        o("rx", r), o("ry", a);
                    case "image":
                        o("width", r), o("height", a);
                    case "text":
                        o("x", r), o("y", a);
                        break;
                    case "circle":
                        o("cx", r), o("cy", a), o("r", r);
                        break;
                    case "ellipse":
                        o("cx", r), o("cy", a), o("rx", r), o("ry", a);
                        break;
                    case "line":
                        o("x1", r), o("x2", r), o("y1", a), o("y2", a);
                        break;
                    case "marker":
                        o("refX", r), o("markerWidth", r), o("refY", a), o("markerHeight", a);
                        break;
                    case "radialGradient":
                        o("fx", r), o("fy", a);
                        break;
                    case "tspan":
                        o("dx", r), o("dy", a);
                        break;
                    default:
                        o(e, r)
                }
                return s.removeChild(l), u
            }

            function x(t) {
                a(t, "array") || (t = Array.prototype.slice.call(arguments, 0));
                for (var e = 0, n = 0, r = this.node; this[e];) delete this[e++];
                for (e = 0; e < t.length; e++) "set" == t[e].type ? t[e].forEach(function(t) {
                    r.appendChild(t.node)
                }) : r.appendChild(t[e].node);
                var i = r.childNodes;
                for (e = 0; e < i.length; e++) this[n++] = k(i[e]);
                return this
            }

            function b(t) {
                if (t.snap in Z) return Z[t.snap];
                var e, n = this.id = H();
                try {
                    e = t.ownerSVGElement
                } catch (r) {}
                if (this.node = t, e && (this.paper = new S(e)), this.type = t.tagName, this.anims = {}, this._ = {
                        transform: []
                    }, t.snap = n, Z[n] = this, "g" == this.type && (this.add = x), this.type in {
                        g: 1,
                        mask: 1,
                        pattern: 1
                    })
                    for (var i in S.prototype) S.prototype[T](i) && (this[i] = S.prototype[i])
            }

            function w(t) {
                this.node = t
            }

            function C(t, e) {
                var n = i(t);
                e.appendChild(n);
                var r = k(n);
                return r
            }

            function S(t, e) {
                var n, r, a, o = S.prototype;
                if (t && "svg" == t.tagName) {
                    if (t.snap in Z) return Z[t.snap];
                    var s = t.ownerDocument;
                    n = new b(t), r = t.getElementsByTagName("desc")[0], a = t.getElementsByTagName("defs")[0], r || (r = i("desc"), r.appendChild(s.createTextNode("Created with Snap")), n.node.appendChild(r)), a || (a = i("defs"), n.node.appendChild(a)), n.defs = a;
                    for (var u in o) o[T](u) && (n[u] = o[u]);
                    n.paper = n.root = n
                } else n = C("svg", M.doc.body), i(n.node, {
                    height: e,
                    version: 1.1,
                    width: t,
                    xmlns: W
                });
                return n
            }

            function k(t) {
                return t ? t instanceof b || t instanceof w ? t : t.tagName && "svg" == t.tagName.toLowerCase() ? new S(t) : t.tagName && "object" == t.tagName.toLowerCase() && "image/svg+xml" == t.type ? new S(t.contentDocument.getElementsByTagName("svg")[0]) : new b(t) : t
            }
            r.version = "0.3.0", r.toString = function() {
                return "Snap v" + this.version
            }, r._ = {};
            var M = {
                win: t,
                doc: t.document
            };
            r._.glob = M;
            var T = "hasOwnProperty",
                _ = String,
                B = parseFloat,
                A = parseInt,
                F = Math,
                N = F.max,
                j = F.min,
                E = F.abs,
                P = (F.pow, F.PI),
                q = (F.round, ""),
                L = " ",
                V = Object.prototype.toString,
                D = /^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\))\s*$/i,
                G = "	\n\f\r   ᠎             　\u2028\u2029",
                R = (r._.separator = new RegExp("[," + G + "]+"), new RegExp("[" + G + "]", "g"), new RegExp("[" + G + "]*,[" + G + "]*")),
                O = {
                    hs: 1,
                    rg: 1
                },
                z = new RegExp("([a-z])[" + G + ",]*((-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?[" + G + "]*,?[" + G + "]*)+)", "ig"),
                I = new RegExp("([rstm])[" + G + ",]*((-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?[" + G + "]*,?[" + G + "]*)+)", "ig"),
                U = new RegExp("(-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?)[" + G + "]*,?[" + G + "]*", "ig"),
                X = 0,
                $ = "S" + (+new Date).toString(36),
                H = function() {
                    return $ + (X++).toString(36)
                },
                Y = "http://www.w3.org/1999/xlink",
                W = "http://www.w3.org/2000/svg",
                Z = {},
                Q = r.url = function(t) {
                    return "url('#" + t + "')"
                };
            r._.$ = i, r._.id = H, r.format = function() {
                var t = /\{([^\}]+)\}/g,
                    e = /(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g,
                    n = function(t, n, r) {
                        var i = r;
                        return n.replace(e, function(t, e, n, r, a) {
                            e = e || r, i && (e in i && (i = i[e]), "function" == typeof i && a && (i = i()))
                        }), i = (null == i || i == r ? t : i) + ""
                    };
                return function(e, r) {
                    return _(e).replace(t, function(t, e) {
                        return n(t, e, r)
                    })
                }
            }(), r._.clone = o, r._.cacher = u, r.rad = c, r.deg = f, r.angle = l, r.is = a, r.snapTo = function(t, e, n) {
                if (n = a(n, "finite") ? n : 10, a(t, "array")) {
                    for (var r = t.length; r--;)
                        if (E(t[r] - e) <= n) return t[r]
                } else {
                    t = +t;
                    var i = e % t;
                    if (n > i) return e - i;
                    if (i > t - n) return e - i + t
                }
                return e
            }, r.getRGB = u(function(t) {
                if (!t || (t = _(t)).indexOf("-") + 1) return {
                    r: -1,
                    g: -1,
                    b: -1,
                    hex: "none",
                    error: 1,
                    toString: ee
                };
                if ("none" == t) return {
                    r: -1,
                    g: -1,
                    b: -1,
                    hex: "none",
                    toString: ee
                };
                if (!(O[T](t.toLowerCase().substring(0, 2)) || "#" == t.charAt()) && (t = J(t)), !t) return {
                    r: -1,
                    g: -1,
                    b: -1,
                    hex: "none",
                    error: 1,
                    toString: ee
                };
                var e, n, i, o, s, u, l = t.match(D);
                return l ? (l[2] && (i = A(l[2].substring(5), 16), n = A(l[2].substring(3, 5), 16), e = A(l[2].substring(1, 3), 16)), l[3] && (i = A((s = l[3].charAt(3)) + s, 16), n = A((s = l[3].charAt(2)) + s, 16), e = A((s = l[3].charAt(1)) + s, 16)), l[4] && (u = l[4].split(R), e = B(u[0]), "%" == u[0].slice(-1) && (e *= 2.55), n = B(u[1]), "%" == u[1].slice(-1) && (n *= 2.55), i = B(u[2]), "%" == u[2].slice(-1) && (i *= 2.55), "rgba" == l[1].toLowerCase().slice(0, 4) && (o = B(u[3])), u[3] && "%" == u[3].slice(-1) && (o /= 100)), l[5] ? (u = l[5].split(R), e = B(u[0]), "%" == u[0].slice(-1) && (e /= 100), n = B(u[1]), "%" == u[1].slice(-1) && (n /= 100), i = B(u[2]), "%" == u[2].slice(-1) && (i /= 100), ("deg" == u[0].slice(-3) || "°" == u[0].slice(-1)) && (e /= 360), "hsba" == l[1].toLowerCase().slice(0, 4) && (o = B(u[3])), u[3] && "%" == u[3].slice(-1) && (o /= 100), r.hsb2rgb(e, n, i, o)) : l[6] ? (u = l[6].split(R), e = B(u[0]), "%" == u[0].slice(-1) && (e /= 100), n = B(u[1]), "%" == u[1].slice(-1) && (n /= 100), i = B(u[2]), "%" == u[2].slice(-1) && (i /= 100), ("deg" == u[0].slice(-3) || "°" == u[0].slice(-1)) && (e /= 360), "hsla" == l[1].toLowerCase().slice(0, 4) && (o = B(u[3])), u[3] && "%" == u[3].slice(-1) && (o /= 100), r.hsl2rgb(e, n, i, o)) : (e = j(F.round(e), 255), n = j(F.round(n), 255), i = j(F.round(i), 255), o = j(N(o, 0), 1), l = {
                    r: e,
                    g: n,
                    b: i,
                    toString: ee
                }, l.hex = "#" + (16777216 | i | n << 8 | e << 16).toString(16).slice(1), l.opacity = a(o, "finite") ? o : 1, l)) : {
                    r: -1,
                    g: -1,
                    b: -1,
                    hex: "none",
                    error: 1,
                    toString: ee
                }
            }, r), r.hsb = u(function(t, e, n) {
                return r.hsb2rgb(t, e, n).hex
            }), r.hsl = u(function(t, e, n) {
                return r.hsl2rgb(t, e, n).hex
            }), r.rgb = u(function(t, e, n, r) {
                if (a(r, "finite")) {
                    var i = F.round;
                    return "rgba(" + [i(t), i(e), i(n), +r.toFixed(2)] + ")"
                }
                return "#" + (16777216 | n | e << 8 | t << 16).toString(16).slice(1)
            });
            var J = function(t) {
                    var e = M.doc.getElementsByTagName("head")[0] || M.doc.getElementsByTagName("svg")[0],
                        n = "rgb(255, 0, 0)";
                    return (J = u(function(t) {
                        if ("red" == t.toLowerCase()) return n;
                        e.style.color = n, e.style.color = t;
                        var r = M.doc.defaultView.getComputedStyle(e, q).getPropertyValue("color");
                        return r == n ? null : r
                    }))(t)
                },
                K = function() {
                    return "hsb(" + [this.h, this.s, this.b] + ")"
                },
                te = function() {
                    return "hsl(" + [this.h, this.s, this.l] + ")"
                },
                ee = function() {
                    return 1 == this.opacity || null == this.opacity ? this.hex : "rgba(" + [this.r, this.g, this.b, this.opacity] + ")"
                },
                ne = function(t, e, n) {
                    if (null == e && a(t, "object") && "r" in t && "g" in t && "b" in t && (n = t.b, e = t.g, t = t.r), null == e && a(t, string)) {
                        var i = r.getRGB(t);
                        t = i.r, e = i.g, n = i.b
                    }
                    return (t > 1 || e > 1 || n > 1) && (t /= 255, e /= 255, n /= 255), [t, e, n]
                },
                re = function(t, e, n, i) {
                    t = F.round(255 * t), e = F.round(255 * e), n = F.round(255 * n);
                    var o = {
                        r: t,
                        g: e,
                        b: n,
                        opacity: a(i, "finite") ? i : 1,
                        hex: r.rgb(t, e, n),
                        toString: ee
                    };
                    return a(i, "finite") && (o.opacity = i), o
                };
            r.color = function(t) {
                var e;
                return a(t, "object") && "h" in t && "s" in t && "b" in t ? (e = r.hsb2rgb(t), t.r = e.r, t.g = e.g, t.b = e.b, t.opacity = 1, t.hex = e.hex) : a(t, "object") && "h" in t && "s" in t && "l" in t ? (e = r.hsl2rgb(t), t.r = e.r, t.g = e.g, t.b = e.b, t.opacity = 1, t.hex = e.hex) : (a(t, "string") && (t = r.getRGB(t)), a(t, "object") && "r" in t && "g" in t && "b" in t && !("error" in t) ? (e = r.rgb2hsl(t), t.h = e.h, t.s = e.s, t.l = e.l, e = r.rgb2hsb(t), t.v = e.b) : (t = {
                    hex: "none"
                }, t.r = t.g = t.b = t.h = t.s = t.v = t.l = -1, t.error = 1)), t.toString = ee, t
            }, r.hsb2rgb = function(t, e, n, r) {
                a(t, "object") && "h" in t && "s" in t && "b" in t && (n = t.b, e = t.s, t = t.h, r = t.o), t *= 360;
                var i, o, s, u, l;
                return t = t % 360 / 60, l = n * e, u = l * (1 - E(t % 2 - 1)), i = o = s = n - l, t = ~~t, i += [l, u, 0, 0, u, l][t], o += [u, l, l, u, 0, 0][t], s += [0, 0, u, l, l, u][t], re(i, o, s, r)
            }, r.hsl2rgb = function(t, e, n, r) {
                a(t, "object") && "h" in t && "s" in t && "l" in t && (n = t.l, e = t.s, t = t.h), (t > 1 || e > 1 || n > 1) && (t /= 360, e /= 100, n /= 100), t *= 360;
                var i, o, s, u, l;
                return t = t % 360 / 60, l = 2 * e * (.5 > n ? n : 1 - n), u = l * (1 - E(t % 2 - 1)), i = o = s = n - l / 2, t = ~~t, i += [l, u, 0, 0, u, l][t], o += [u, l, l, u, 0, 0][t], s += [0, 0, u, l, l, u][t], re(i, o, s, r)
            }, r.rgb2hsb = function(t, e, n) {
                n = ne(t, e, n), t = n[0], e = n[1], n = n[2];
                var r, i, a, o;
                return a = N(t, e, n), o = a - j(t, e, n), r = 0 == o ? null : a == t ? (e - n) / o : a == e ? (n - t) / o + 2 : (t - e) / o + 4, r = (r + 360) % 6 * 60 / 360, i = 0 == o ? 0 : o / a, {
                    h: r,
                    s: i,
                    b: a,
                    toString: K
                }
            }, r.rgb2hsl = function(t, e, n) {
                n = ne(t, e, n), t = n[0], e = n[1], n = n[2];
                var r, i, a, o, s, u;
                return o = N(t, e, n), s = j(t, e, n), u = o - s, r = 0 == u ? null : o == t ? (e - n) / u : o == e ? (n - t) / u + 2 : (t - e) / u + 4, r = (r + 360) % 6 * 60 / 360, a = (o + s) / 2, i = 0 == u ? 0 : .5 > a ? u / (2 * a) : u / (2 - 2 * a), {
                    h: r,
                    s: i,
                    l: a,
                    toString: te
                }
            }, r.parsePathString = function(t) {
                if (!t) return null;
                var e = r.path(t);
                if (e.arr) return r.path.clone(e.arr);
                var n = {
                        a: 7,
                        c: 6,
                        o: 2,
                        h: 1,
                        l: 2,
                        m: 2,
                        r: 4,
                        q: 4,
                        s: 4,
                        t: 2,
                        v: 1,
                        u: 3,
                        z: 0
                    },
                    i = [];
                return a(t, "array") && a(t[0], "array") && (i = r.path.clone(t)), i.length || _(t).replace(z, function(t, e, r) {
                    var a = [],
                        o = e.toLowerCase();
                    if (r.replace(U, function(t, e) {
                            e && a.push(+e)
                        }), "m" == o && a.length > 2 && (i.push([e].concat(a.splice(0, 2))), o = "l", e = "m" == e ? "l" : "L"), "o" == o && 1 == a.length && i.push([e, a[0]]), "r" == o) i.push([e].concat(a));
                    else
                        for (; a.length >= n[o] && (i.push([e].concat(a.splice(0, n[o]))), n[o]););
                }), i.toString = r.path.toString, e.arr = r.path.clone(i), i
            };
            var ie = r.parseTransformString = function(t) {
                if (!t) return null;
                var e = [];
                return a(t, "array") && a(t[0], "array") && (e = r.path.clone(t)), e.length || _(t).replace(I, function(t, n, r) {
                    {
                        var i = [];
                        n.toLowerCase()
                    }
                    r.replace(U, function(t, e) {
                        e && i.push(+e)
                    }), e.push([n].concat(i))
                }), e.toString = r.path.toString, e
            };
            r._.svgTransform2string = h, r._.rgTransform = new RegExp("^[a-z][" + G + "]*-?\\.?\\d", "i"), r._.transform2matrix = d, r._unit2px = y;
            M.doc.contains || M.doc.compareDocumentPosition ? function(t, e) {
                var n = 9 == t.nodeType ? t.documentElement : t,
                    r = e && e.parentNode;
                return t == r || !(!r || 1 != r.nodeType || !(n.contains ? n.contains(r) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(r)))
            } : function(t, e) {
                if (e)
                    for (; e;)
                        if (e = e.parentNode, e == t) return !0;
                return !1
            };
            r._.getSomeDefs = v, r._.getSomeSVG = m, r.select = function(t) {
                    return k(M.doc.querySelector(t))
                }, r.selectAll = function(t) {
                    for (var e = M.doc.querySelectorAll(t), n = (r.set || Array)(), i = 0; i < e.length; i++) n.push(k(e[i]));
                    return n
                }, setInterval(function() {
                    for (var t in Z)
                        if (Z[T](t)) {
                            var e = Z[t],
                                n = e.node;
                            ("svg" != e.type && !n.ownerSVGElement || "svg" == e.type && (!n.parentNode || "ownerSVGElement" in n.parentNode && !n.ownerSVGElement)) && delete Z[t]
                        }
                }, 1e4),
                function(t) {
                    function o(t) {
                        function e(t, e) {
                            var n = i(t.node, e);
                            n = n && n.match(o), n = n && n[2], n && "#" == n.charAt() && (n = n.substring(1), n && (u[n] = (u[n] || []).concat(function(n) {
                                var r = {};
                                r[e] = Q(n), i(t.node, r)
                            })))
                        }

                        function n(t) {
                            var e = i(t.node, "xlink:href");
                            e && "#" == e.charAt() && (e = e.substring(1), e && (u[e] = (u[e] || []).concat(function(e) {
                                t.attr("xlink:href", "#" + e)
                            })))
                        }
                        for (var r, a = t.selectAll("*"), o = /^\s*url\(("|'|)(.*)\1\)\s*$/, s = [], u = {}, l = 0, c = a.length; c > l; l++) {
                            r = a[l], e(r, "fill"), e(r, "stroke"), e(r, "filter"), e(r, "mask"), e(r, "clip-path"), n(r);
                            var f = i(r.node, "id");
                            f && (i(r.node, {
                                id: r.id
                            }), s.push({
                                old: f,
                                id: r.id
                            }))
                        }
                        for (l = 0, c = s.length; c > l; l++) {
                            var h = u[s[l].old];
                            if (h)
                                for (var d = 0, p = h.length; p > d; d++) h[d](s[l].id)
                        }
                    }

                    function s(t, e, n) {
                        return function(r) {
                            var i = r.slice(t, e);
                            return 1 == i.length && (i = i[0]), n ? n(i) : i
                        }
                    }

                    function u(t) {
                        return function() {
                            var e = t ? "<" + this.type : "",
                                n = this.node.attributes,
                                r = this.node.childNodes;
                            if (t)
                                for (var i = 0, a = n.length; a > i; i++) e += " " + n[i].name + '="' + n[i].value.replace(/"/g, '\\"') + '"';
                            if (r.length) {
                                for (t && (e += ">"), i = 0, a = r.length; a > i; i++) 3 == r[i].nodeType ? e += r[i].nodeValue : 1 == r[i].nodeType && (e += k(r[i]).toString());
                                t && (e += "</" + this.type + ">")
                            } else t && (e += "/>");
                            return e
                        }
                    }
                    t.attr = function(t, n) {
                        {
                            var r = this;
                            r.node
                        }
                        if (!t) return r;
                        if (a(t, "string")) {
                            if (!(arguments.length > 1)) return e("snap.util.getattr." + t, r).firstDefined();
                            var i = {};
                            i[t] = n, t = i
                        }
                        for (var o in t) t[T](o) && e("snap.util.attr." + o, r, t[o]);
                        return r
                    }, t.getBBox = function(t) {
                        if (!r.Matrix || !r.path) return this.node.getBBox();
                        var e = this,
                            n = new r.Matrix;
                        if (e.removed) return r._.box();
                        for (;
                            "use" == e.type;)
                            if (t || (n = n.add(e.transform().localMatrix.translate(e.attr("x") || 0, e.attr("y") || 0))), e.original) e = e.original;
                            else {
                                var i = e.attr("xlink:href");
                                e = e.original = e.node.ownerDocument.getElementById(i.substring(i.indexOf("#") + 1))
                            }
                        var a = e._,
                            o = r.path.get[e.type] || r.path.get.deflt;
                        try {
                            return t ? (a.bboxwt = o ? r.path.getBBox(e.realPath = o(e)) : r._.box(e.node.getBBox()), r._.box(a.bboxwt)) : (e.realPath = o(e), e.matrix = e.transform().localMatrix, a.bbox = r.path.getBBox(r.path.map(e.realPath, n.add(e.matrix))), r._.box(a.bbox))
                        } catch (s) {
                            return r._.box()
                        }
                    };
                    var l = function() {
                        return this.string
                    };
                    t.transform = function(t) {
                        var e = this._;
                        if (null == t) {
                            for (var n, a = this, o = new r.Matrix(this.node.getCTM()), s = p(this), u = [s], c = new r.Matrix, f = s.toTransformString(), h = _(s) == _(this.matrix) ? _(e.transform) : f;
                                "svg" != a.type && (a = a.parent());) u.push(p(a));
                            for (n = u.length; n--;) c.add(u[n]);
                            return {
                                string: h,
                                globalMatrix: o,
                                totalMatrix: c,
                                localMatrix: s,
                                diffMatrix: o.clone().add(s.invert()),
                                global: o.toTransformString(),
                                total: c.toTransformString(),
                                local: f,
                                toString: l
                            }
                        }
                        return t instanceof r.Matrix ? this.matrix = t : p(this, t), this.node && ("linearGradient" == this.type || "radialGradient" == this.type ? i(this.node, {
                            gradientTransform: this.matrix
                        }) : "pattern" == this.type ? i(this.node, {
                            patternTransform: this.matrix
                        }) : i(this.node, {
                            transform: this.matrix
                        })), this
                    }, t.parent = function() {
                        return k(this.node.parentNode)
                    }, t.append = t.add = function(t) {
                        if (t) {
                            if ("set" == t.type) {
                                var e = this;
                                return t.forEach(function(t) {
                                    e.add(t)
                                }), this
                            }
                            t = k(t), this.node.appendChild(t.node), t.paper = this.paper
                        }
                        return this
                    }, t.appendTo = function(t) {
                        return t && (t = k(t), t.append(this)), this
                    }, t.prepend = function(t) {
                        if (t) {
                            if ("set" == t.type) {
                                var e, n = this;
                                return t.forEach(function(t) {
                                    e ? e.after(t) : n.prepend(t), e = t
                                }), this
                            }
                            t = k(t);
                            var r = t.parent();
                            this.node.insertBefore(t.node, this.node.firstChild), this.add && this.add(), t.paper = this.paper, this.parent() && this.parent().add(), r && r.add()
                        }
                        return this
                    }, t.prependTo = function(t) {
                        return t = k(t), t.prepend(this), this
                    }, t.before = function(t) {
                        if ("set" == t.type) {
                            var e = this;
                            return t.forEach(function(t) {
                                var n = t.parent();
                                e.node.parentNode.insertBefore(t.node, e.node), n && n.add()
                            }), this.parent().add(), this
                        }
                        t = k(t);
                        var n = t.parent();
                        return this.node.parentNode.insertBefore(t.node, this.node), this.parent() && this.parent().add(), n && n.add(), t.paper = this.paper, this
                    }, t.after = function(t) {
                        t = k(t);
                        var e = t.parent();
                        return this.node.nextSibling ? this.node.parentNode.insertBefore(t.node, this.node.nextSibling) : this.node.parentNode.appendChild(t.node), this.parent() && this.parent().add(), e && e.add(), t.paper = this.paper, this
                    }, t.insertBefore = function(t) {
                        t = k(t);
                        var e = this.parent();
                        return t.node.parentNode.insertBefore(this.node, t.node), this.paper = t.paper, e && e.add(), t.parent() && t.parent().add(), this
                    }, t.insertAfter = function(t) {
                        t = k(t);
                        var e = this.parent();
                        return t.node.parentNode.insertBefore(this.node, t.node.nextSibling), this.paper = t.paper, e && e.add(), t.parent() && t.parent().add(), this
                    }, t.remove = function() {
                        var t = this.parent();
                        return this.node.parentNode && this.node.parentNode.removeChild(this.node), delete this.paper, this.removed = !0, t && t.add(), this
                    }, t.select = function(t) {
                        return k(this.node.querySelector(t))
                    }, t.selectAll = function(t) {
                        for (var e = this.node.querySelectorAll(t), n = (r.set || Array)(), i = 0; i < e.length; i++) n.push(k(e[i]));
                        return n
                    }, t.asPX = function(t, e) {
                        return null == e && (e = this.attr(t)), +y(this, t, e)
                    }, t.use = function() {
                        var t, e = this.node.id;
                        return e || (e = this.id, i(this.node, {
                            id: e
                        })), t = "linearGradient" == this.type || "radialGradient" == this.type || "pattern" == this.type ? C(this.type, this.node.parentNode) : C("use", this.node.parentNode), i(t.node, {
                            "xlink:href": "#" + e
                        }), t.original = this, t
                    };
                    var c = /\S+/g;
                    t.addClass = function(t) {
                        var e, n, r, i, a = (t || "").match(c) || [],
                            o = this.node,
                            s = o.className.baseVal,
                            u = s.match(c) || [];
                        if (a.length) {
                            for (e = 0; r = a[e++];) n = u.indexOf(r), ~n || u.push(r);
                            i = u.join(" "), s != i && (o.className.baseVal = i)
                        }
                        return this
                    }, t.removeClass = function(t) {
                        var e, n, r, i, a = (t || "").match(c) || [],
                            o = this.node,
                            s = o.className.baseVal,
                            u = s.match(c) || [];
                        if (u.length) {
                            for (e = 0; r = a[e++];) n = u.indexOf(r), ~n && u.splice(n, 1);
                            i = u.join(" "), s != i && (o.className.baseVal = i)
                        }
                        return this
                    }, t.hasClass = function(t) {
                        var e = this.node,
                            n = e.className.baseVal,
                            r = n.match(c) || [];
                        return !!~r.indexOf(t)
                    }, t.toggleClass = function(t, e) {
                        if (null != e) return e ? this.addClass(t) : this.removeClass(t);
                        var n, r, i, a, o = (t || "").match(c) || [],
                            s = this.node,
                            u = s.className.baseVal,
                            l = u.match(c) || [];
                        for (n = 0; i = o[n++];) r = l.indexOf(i), ~r ? l.splice(r, 1) : l.push(i);
                        return a = l.join(" "), u != a && (s.className.baseVal = a), this
                    }, t.clone = function() {
                        var t = k(this.node.cloneNode(!0));
                        return i(t.node, "id") && i(t.node, {
                            id: t.id
                        }), o(t), t.insertAfter(this), t
                    }, t.toDefs = function() {
                        var t = v(this);
                        return t.appendChild(this.node), this
                    }, t.pattern = t.toPattern = function(t, e, n, r) {
                        var o = C("pattern", v(this));
                        return null == t && (t = this.getBBox()), a(t, "object") && "x" in t && (e = t.y, n = t.width, r = t.height, t = t.x), i(o.node, {
                            x: t,
                            y: e,
                            width: n,
                            height: r,
                            patternUnits: "userSpaceOnUse",
                            id: o.id,
                            viewBox: [t, e, n, r].join(" ")
                        }), o.node.appendChild(this.node), o
                    }, t.marker = function(t, e, n, r, o, s) {
                        var u = C("marker", v(this));
                        return null == t && (t = this.getBBox()), a(t, "object") && "x" in t && (e = t.y, n = t.width, r = t.height, o = t.refX || t.cx, s = t.refY || t.cy, t = t.x), i(u.node, {
                            viewBox: [t, e, n, r].join(L),
                            markerWidth: n,
                            markerHeight: r,
                            orient: "auto",
                            refX: o || 0,
                            refY: s || 0,
                            id: u.id
                        }), u.node.appendChild(this.node), u
                    };
                    var f = function(t, e, r, i) {
                        "function" != typeof r || r.length || (i = r, r = n.linear), this.attr = t, this.dur = e, r && (this.easing = r), i && (this.callback = i)
                    };
                    r._.Animation = f, r.animation = function(t, e, n, r) {
                        return new f(t, e, n, r)
                    }, t.inAnim = function() {
                        var t = this,
                            e = [];
                        for (var n in t.anims) t.anims[T](n) && ! function(t) {
                            e.push({
                                anim: new f(t._attrs, t.dur, t.easing, t._callback),
                                mina: t,
                                curStatus: t.status(),
                                status: function(e) {
                                    return t.status(e)
                                },
                                stop: function() {
                                    t.stop()
                                }
                            })
                        }(t.anims[n]);
                        return e
                    }, r.animate = function(t, r, i, a, o, s) {
                        "function" != typeof o || o.length || (s = o, o = n.linear);
                        var u = n.time(),
                            l = n(t, r, u, u + a, n.time, i, o);
                        return s && e.once("mina.finish." + l.id, s), l
                    }, t.stop = function() {
                        for (var t = this.inAnim(), e = 0, n = t.length; n > e; e++) t[e].stop();
                        return this
                    }, t.animate = function(t, r, i, o) {
                        "function" != typeof i || i.length || (o = i, i = n.linear), t instanceof f && (o = t.callback, i = t.easing, r = i.dur, t = t.attr);
                        var u, l, c, h, d = [],
                            p = [],
                            g = {},
                            v = this;
                        for (var m in t)
                            if (t[T](m)) {
                                v.equal ? (h = v.equal(m, _(t[m])), u = h.from, l = h.to, c = h.f) : (u = +v.attr(m), l = +t[m]);
                                var y = a(u, "array") ? u.length : 1;
                                g[m] = s(d.length, d.length + y, c), d = d.concat(u), p = p.concat(l)
                            }
                        var x = n.time(),
                            b = n(d, p, x, x + r, n.time, function(t) {
                                var e = {};
                                for (var n in g) g[T](n) && (e[n] = g[n](t));
                                v.attr(e)
                            }, i);
                        return v.anims[b.id] = b, b._attrs = t, b._callback = o, e("snap.animcreated." + v.id, b), e.once("mina.finish." + b.id, function() {
                            delete v.anims[b.id], o && o.call(v)
                        }), e.once("mina.stop." + b.id, function() {
                            delete v.anims[b.id]
                        }), v
                    };
                    var h = {};
                    t.data = function(t, n) {
                        var i = h[this.id] = h[this.id] || {};
                        if (0 == arguments.length) return e("snap.data.get." + this.id, this, i, null), i;
                        if (1 == arguments.length) {
                            if (r.is(t, "object")) {
                                for (var a in t) t[T](a) && this.data(a, t[a]);
                                return this
                            }
                            return e("snap.data.get." + this.id, this, i[t], t), i[t]
                        }
                        return i[t] = n, e("snap.data.set." + this.id, this, n, t), this
                    }, t.removeData = function(t) {
                        return null == t ? h[this.id] = {} : h[this.id] && delete h[this.id][t], this
                    }, t.outerSVG = t.toString = u(1), t.innerSVG = u()
                }(b.prototype), r.parse = function(t) {
                    var e = M.doc.createDocumentFragment(),
                        n = !0,
                        r = M.doc.createElement("div");
                    if (t = _(t), t.match(/^\s*<\s*svg(?:\s|>)/) || (t = "<svg>" + t + "</svg>", n = !1), r.innerHTML = t, t = r.getElementsByTagName("svg")[0])
                        if (n) e = t;
                        else
                            for (; t.firstChild;) e.appendChild(t.firstChild);
                    return r.innerHTML = q, new w(e)
                }, w.prototype.select = b.prototype.select, w.prototype.selectAll = b.prototype.selectAll, r.fragment = function() {
                    for (var t = Array.prototype.slice.call(arguments, 0), e = M.doc.createDocumentFragment(), n = 0, i = t.length; i > n; n++) {
                        var a = t[n];
                        a.node && a.node.nodeType && e.appendChild(a.node), a.nodeType && e.appendChild(a), "string" == typeof a && e.appendChild(r.parse(a).node)
                    }
                    return new w(e)
                }, r._.make = C, r._.wrap = k, S.prototype.el = function(t, e) {
                    var n = C(t, this.node);
                    return e && n.attr(e), n
                }, e.on("snap.util.getattr", function() {
                    var t = e.nt();
                    t = t.substring(t.lastIndexOf(".") + 1);
                    var n = t.replace(/[A-Z]/g, function(t) {
                        return "-" + t.toLowerCase()
                    });
                    return ae[T](n) ? this.node.ownerDocument.defaultView.getComputedStyle(this.node, null).getPropertyValue(n) : i(this.node, t)
                });
            var ae = {
                "alignment-baseline": 0,
                "baseline-shift": 0,
                clip: 0,
                "clip-path": 0,
                "clip-rule": 0,
                color: 0,
                "color-interpolation": 0,
                "color-interpolation-filters": 0,
                "color-profile": 0,
                "color-rendering": 0,
                cursor: 0,
                direction: 0,
                display: 0,
                "dominant-baseline": 0,
                "enable-background": 0,
                fill: 0,
                "fill-opacity": 0,
                "fill-rule": 0,
                filter: 0,
                "flood-color": 0,
                "flood-opacity": 0,
                font: 0,
                "font-family": 0,
                "font-size": 0,
                "font-size-adjust": 0,
                "font-stretch": 0,
                "font-style": 0,
                "font-variant": 0,
                "font-weight": 0,
                "glyph-orientation-horizontal": 0,
                "glyph-orientation-vertical": 0,
                "image-rendering": 0,
                kerning: 0,
                "letter-spacing": 0,
                "lighting-color": 0,
                marker: 0,
                "marker-end": 0,
                "marker-mid": 0,
                "marker-start": 0,
                mask: 0,
                opacity: 0,
                overflow: 0,
                "pointer-events": 0,
                "shape-rendering": 0,
                "stop-color": 0,
                "stop-opacity": 0,
                stroke: 0,
                "stroke-dasharray": 0,
                "stroke-dashoffset": 0,
                "stroke-linecap": 0,
                "stroke-linejoin": 0,
                "stroke-miterlimit": 0,
                "stroke-opacity": 0,
                "stroke-width": 0,
                "text-anchor": 0,
                "text-decoration": 0,
                "text-rendering": 0,
                "unicode-bidi": 0,
                visibility: 0,
                "word-spacing": 0,
                "writing-mode": 0
            };
            e.on("snap.util.attr", function(t) {
                    var n = e.nt(),
                        r = {};
                    n = n.substring(n.lastIndexOf(".") + 1), r[n] = t;
                    var a = n.replace(/-(\w)/gi, function(t, e) {
                            return e.toUpperCase()
                        }),
                        o = n.replace(/[A-Z]/g, function(t) {
                            return "-" + t.toLowerCase()
                        });
                    ae[T](o) ? this.node.style[a] = null == t ? q : t : i(this.node, r)
                }),
                function() {}(S.prototype), r.ajax = function(t, n, r, i) {
                    var o = new XMLHttpRequest,
                        s = H();
                    if (o) {
                        if (a(n, "function")) i = r, r = n, n = null;
                        else if (a(n, "object")) {
                            var u = [];
                            for (var l in n) n.hasOwnProperty(l) && u.push(encodeURIComponent(l) + "=" + encodeURIComponent(n[l]));
                            n = u.join("&")
                        }
                        return o.open(n ? "POST" : "GET", t, !0), n && (o.setRequestHeader("X-Requested-With", "XMLHttpRequest"), o.setRequestHeader("Content-type", "application/x-www-form-urlencoded")), r && (e.once("snap.ajax." + s + ".0", r), e.once("snap.ajax." + s + ".200", r), e.once("snap.ajax." + s + ".304", r)), o.onreadystatechange = function() {
                            4 == o.readyState && e("snap.ajax." + s + "." + o.status, i, o)
                        }, 4 == o.readyState ? o : (o.send(n), o)
                    }
                }, r.load = function(t, e, n) {
                    r.ajax(t, function(t) {
                        var i = r.parse(t.responseText);
                        n ? e.call(n, i) : e(i)
                    })
                };
            var oe = function(t) {
                var e = t.getBoundingClientRect(),
                    n = t.ownerDocument,
                    r = n.body,
                    i = n.documentElement,
                    a = i.clientTop || r.clientTop || 0,
                    o = i.clientLeft || r.clientLeft || 0,
                    s = e.top + (g.win.pageYOffset || i.scrollTop || r.scrollTop) - a,
                    u = e.left + (g.win.pageXOffset || i.scrollLeft || r.scrollLeft) - o;
                return {
                    y: s,
                    x: u
                }
            };
            return r.getElementByPoint = function(t, e) {
                var n = this,
                    r = (n.canvas, M.doc.elementFromPoint(t, e));
                if (M.win.opera && "svg" == r.tagName) {
                    var i = oe(r),
                        a = r.createSVGRect();
                    a.x = t - i.x, a.y = e - i.y, a.width = a.height = 1;
                    var o = r.getIntersectionList(a, null);
                    o.length && (r = o[o.length - 1])
                }
                return r ? k(r) : null
            }, r.plugin = function(t) {
                t(r, b, S, M, w)
            }, M.win.Snap = r, r
        }();
    return r.plugin(function(t) {
        function e(t, e, r, i, a, o) {
            return null == e && "[object SVGMatrix]" == n.call(t) ? (this.a = t.a, this.b = t.b, this.c = t.c, this.d = t.d, this.e = t.e, void(this.f = t.f)) : void(null != t ? (this.a = +t, this.b = +e, this.c = +r, this.d = +i, this.e = +a, this.f = +o) : (this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.e = 0, this.f = 0))
        }
        var n = Object.prototype.toString,
            r = String,
            i = Math,
            a = "";
        ! function(n) {
            function o(t) {
                return t[0] * t[0] + t[1] * t[1]
            }

            function s(t) {
                var e = i.sqrt(o(t));
                t[0] && (t[0] /= e), t[1] && (t[1] /= e)
            }
            n.add = function(t, n, r, i, a, o) {
                var s, u, l, c, f = [
                        [],
                        [],
                        []
                    ],
                    h = [
                        [this.a, this.c, this.e],
                        [this.b, this.d, this.f],
                        [0, 0, 1]
                    ],
                    d = [
                        [t, r, a],
                        [n, i, o],
                        [0, 0, 1]
                    ];
                for (t && t instanceof e && (d = [
                        [t.a, t.c, t.e],
                        [t.b, t.d, t.f],
                        [0, 0, 1]
                    ]), s = 0; 3 > s; s++)
                    for (u = 0; 3 > u; u++) {
                        for (c = 0, l = 0; 3 > l; l++) c += h[s][l] * d[l][u];
                        f[s][u] = c
                    }
                return this.a = f[0][0], this.b = f[1][0], this.c = f[0][1], this.d = f[1][1], this.e = f[0][2], this.f = f[1][2], this
            }, n.invert = function() {
                var t = this,
                    n = t.a * t.d - t.b * t.c;
                return new e(t.d / n, -t.b / n, -t.c / n, t.a / n, (t.c * t.f - t.d * t.e) / n, (t.b * t.e - t.a * t.f) / n)
            }, n.clone = function() {
                return new e(this.a, this.b, this.c, this.d, this.e, this.f)
            }, n.translate = function(t, e) {
                return this.add(1, 0, 0, 1, t, e)
            }, n.scale = function(t, e, n, r) {
                return null == e && (e = t), (n || r) && this.add(1, 0, 0, 1, n, r), this.add(t, 0, 0, e, 0, 0), (n || r) && this.add(1, 0, 0, 1, -n, -r), this
            }, n.rotate = function(e, n, r) {
                e = t.rad(e), n = n || 0, r = r || 0;
                var a = +i.cos(e).toFixed(9),
                    o = +i.sin(e).toFixed(9);
                return this.add(a, o, -o, a, n, r), this.add(1, 0, 0, 1, -n, -r)
            }, n.x = function(t, e) {
                return t * this.a + e * this.c + this.e
            }, n.y = function(t, e) {
                return t * this.b + e * this.d + this.f
            }, n.get = function(t) {
                return +this[r.fromCharCode(97 + t)].toFixed(4)
            }, n.toString = function() {
                return "matrix(" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)].join() + ")"
            }, n.offset = function() {
                return [this.e.toFixed(4), this.f.toFixed(4)]
            }, n.determinant = function() {
                return this.a * this.d - this.b * this.c
            }, n.split = function() {
                var e = {};
                e.dx = this.e, e.dy = this.f;
                var n = [
                    [this.a, this.c],
                    [this.b, this.d]
                ];
                e.scalex = i.sqrt(o(n[0])), s(n[0]), e.shear = n[0][0] * n[1][0] + n[0][1] * n[1][1], n[1] = [n[1][0] - n[0][0] * e.shear, n[1][1] - n[0][1] * e.shear], e.scaley = i.sqrt(o(n[1])), s(n[1]), e.shear /= e.scaley, this.determinant() < 0 && (e.scalex = -e.scalex);
                var r = -n[0][1],
                    a = n[1][1];
                return 0 > a ? (e.rotate = t.deg(i.acos(a)), 0 > r && (e.rotate = 360 - e.rotate)) : e.rotate = t.deg(i.asin(r)), e.isSimple = !(+e.shear.toFixed(9) || e.scalex.toFixed(9) != e.scaley.toFixed(9) && e.rotate), e.isSuperSimple = !+e.shear.toFixed(9) && e.scalex.toFixed(9) == e.scaley.toFixed(9) && !e.rotate, e.noRotation = !+e.shear.toFixed(9) && !e.rotate, e
            }, n.toTransformString = function(t) {
                var e = t || this.split();
                return +e.shear.toFixed(9) ? "m" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)] : (e.scalex = +e.scalex.toFixed(4), e.scaley = +e.scaley.toFixed(4), e.rotate = +e.rotate.toFixed(4), (e.dx || e.dy ? "t" + [+e.dx.toFixed(4), +e.dy.toFixed(4)] : a) + (1 != e.scalex || 1 != e.scaley ? "s" + [e.scalex, e.scaley, 0, 0] : a) + (e.rotate ? "r" + [+e.rotate.toFixed(4), 0, 0] : a))
            }
        }(e.prototype), t.Matrix = e, t.matrix = function(t, n, r, i, a, o) {
            return new e(t, n, r, i, a, o)
        }
    }), r.plugin(function(t, n, r, i, a) {
        function o(r) {
            return function(i) {
                if (e.stop(), i instanceof a && 1 == i.node.childNodes.length && ("radialGradient" == i.node.firstChild.tagName || "linearGradient" == i.node.firstChild.tagName || "pattern" == i.node.firstChild.tagName) && (i = i.node.firstChild, d(this).appendChild(i), i = f(i)), i instanceof n)
                    if ("radialGradient" == i.type || "linearGradient" == i.type || "pattern" == i.type) {
                        i.node.id || g(i.node, {
                            id: i.id
                        });
                        var o = v(i.node.id)
                    } else o = i.attr(r);
                else if (o = t.color(i), o.error) {
                    var s = t(d(this).ownerSVGElement).gradient(i);
                    s ? (s.node.id || g(s.node, {
                        id: s.id
                    }), o = v(s.node.id)) : o = i
                } else o = m(o);
                var u = {};
                u[r] = o, g(this.node, u), this.node.style[r] = x
            }
        }

        function s(t) {
            e.stop(), t == +t && (t += "px"), this.node.style.fontSize = t
        }

        function u(t) {
            for (var e = [], n = t.childNodes, r = 0, i = n.length; i > r; r++) {
                var a = n[r];
                3 == a.nodeType && e.push(a.nodeValue), "tspan" == a.tagName && e.push(1 == a.childNodes.length && 3 == a.firstChild.nodeType ? a.firstChild.nodeValue : u(a))
            }
            return e
        }

        function l() {
            return e.stop(), this.node.style.fontSize
        }
        var c = t._.make,
            f = t._.wrap,
            h = t.is,
            d = t._.getSomeDefs,
            p = /^url\(#?([^)]+)\)$/,
            g = t._.$,
            v = t.url,
            m = String,
            y = t._.separator,
            x = "";
        e.on("snap.util.attr.mask", function(t) {
                if (t instanceof n || t instanceof a) {
                    if (e.stop(), t instanceof a && 1 == t.node.childNodes.length && (t = t.node.firstChild, d(this).appendChild(t), t = f(t)), "mask" == t.type) var r = t;
                    else r = c("mask", d(this)), r.node.appendChild(t.node);
                    !r.node.id && g(r.node, {
                        id: r.id
                    }), g(this.node, {
                        mask: v(r.id)
                    })
                }
            }),
            function(t) {
                e.on("snap.util.attr.clip", t), e.on("snap.util.attr.clip-path", t), e.on("snap.util.attr.clipPath", t)
            }(function(t) {
                if (t instanceof n || t instanceof a) {
                    if (e.stop(), "clipPath" == t.type) var r = t;
                    else r = c("clipPath", d(this)), r.node.appendChild(t.node), !r.node.id && g(r.node, {
                        id: r.id
                    });
                    g(this.node, {
                        "clip-path": v(r.id)
                    })
                }
            }), e.on("snap.util.attr.fill", o("fill")), e.on("snap.util.attr.stroke", o("stroke"));
        var b = /^([lr])(?:\(([^)]*)\))?(.*)$/i;
        e.on("snap.util.grad.parse", function(t) {
                t = m(t);
                var e = t.match(b);
                if (!e) return null;
                var n = e[1],
                    r = e[2],
                    i = e[3];
                return r = r.split(/\s*,\s*/).map(function(t) {
                    return +t == t ? +t : t
                }), 1 == r.length && 0 == r[0] && (r = []), i = i.split("-"), i = i.map(function(t) {
                    t = t.split(":");
                    var e = {
                        color: t[0]
                    };
                    return t[1] && (e.offset = parseFloat(t[1])), e
                }), {
                    type: n,
                    params: r,
                    stops: i
                }
            }), e.on("snap.util.attr.d", function(n) {
                e.stop(), h(n, "array") && h(n[0], "array") && (n = t.path.toString.call(n)), n = m(n), n.match(/[ruo]/i) && (n = t.path.toAbsolute(n)), g(this.node, {
                    d: n
                })
            })(-1), e.on("snap.util.attr.#text", function(t) {
                e.stop(), t = m(t);
                for (var n = i.doc.createTextNode(t); this.node.firstChild;) this.node.removeChild(this.node.firstChild);
                this.node.appendChild(n)
            })(-1), e.on("snap.util.attr.path", function(t) {
                e.stop(), this.attr({
                    d: t
                })
            })(-1), e.on("snap.util.attr.class", function(t) {
                e.stop(), this.node.className.baseVal = t
            })(-1), e.on("snap.util.attr.viewBox", function(t) {
                var n;
                n = h(t, "object") && "x" in t ? [t.x, t.y, t.width, t.height].join(" ") : h(t, "array") ? t.join(" ") : t, g(this.node, {
                    viewBox: n
                }), e.stop()
            })(-1), e.on("snap.util.attr.transform", function(t) {
                this.transform(t), e.stop()
            })(-1), e.on("snap.util.attr.r", function(t) {
                "rect" == this.type && (e.stop(), g(this.node, {
                    rx: t,
                    ry: t
                }))
            })(-1), e.on("snap.util.attr.textpath", function(t) {
                if (e.stop(), "text" == this.type) {
                    var r, i, a;
                    if (!t && this.textPath) {
                        for (i = this.textPath; i.node.firstChild;) this.node.appendChild(i.node.firstChild);
                        return i.remove(), void delete this.textPath
                    }
                    if (h(t, "string")) {
                        var o = d(this),
                            s = f(o.parentNode).path(t);
                        o.appendChild(s.node), r = s.id, s.attr({
                            id: r
                        })
                    } else t = f(t), t instanceof n && (r = t.attr("id"), r || (r = t.id, t.attr({
                        id: r
                    })));
                    if (r)
                        if (i = this.textPath, a = this.node, i) i.attr({
                            "xlink:href": "#" + r
                        });
                        else {
                            for (i = g("textPath", {
                                    "xlink:href": "#" + r
                                }); a.firstChild;) i.appendChild(a.firstChild);
                            a.appendChild(i), this.textPath = f(i)
                        }
                }
            })(-1), e.on("snap.util.attr.text", function(t) {
                if ("text" == this.type) {
                    for (var n = this.node, r = function(t) {
                            var e = g("tspan");
                            if (h(t, "array"))
                                for (var n = 0; n < t.length; n++) e.appendChild(r(t[n]));
                            else e.appendChild(i.doc.createTextNode(t));
                            return e.normalize && e.normalize(), e
                        }; n.firstChild;) n.removeChild(n.firstChild);
                    for (var a = r(t); a.firstChild;) n.appendChild(a.firstChild)
                }
                e.stop()
            })(-1), e.on("snap.util.attr.fontSize", s)(-1), e.on("snap.util.attr.font-size", s)(-1), e.on("snap.util.getattr.transform", function() {
                return e.stop(), this.transform()
            })(-1), e.on("snap.util.getattr.textpath", function() {
                return e.stop(), this.textPath
            })(-1),
            function() {
                function n(n) {
                    return function() {
                        e.stop();
                        var r = i.doc.defaultView.getComputedStyle(this.node, null).getPropertyValue("marker-" + n);
                        return "none" == r ? r : t(i.doc.getElementById(r.match(p)[1]))
                    }
                }

                function r(t) {
                    return function(n) {
                        e.stop();
                        var r = "marker" + t.charAt(0).toUpperCase() + t.substring(1);
                        if ("" == n || !n) return void(this.node.style[r] = "none");
                        if ("marker" == n.type) {
                            var i = n.node.id;
                            return i || g(n.node, {
                                id: n.id
                            }), void(this.node.style[r] = v(i))
                        }
                    }
                }
                e.on("snap.util.getattr.marker-end", n("end"))(-1), e.on("snap.util.getattr.markerEnd", n("end"))(-1), e.on("snap.util.getattr.marker-start", n("start"))(-1), e.on("snap.util.getattr.markerStart", n("start"))(-1), e.on("snap.util.getattr.marker-mid", n("mid"))(-1), e.on("snap.util.getattr.markerMid", n("mid"))(-1), e.on("snap.util.attr.marker-end", r("end"))(-1), e.on("snap.util.attr.markerEnd", r("end"))(-1), e.on("snap.util.attr.marker-start", r("start"))(-1), e.on("snap.util.attr.markerStart", r("start"))(-1), e.on("snap.util.attr.marker-mid", r("mid"))(-1), e.on("snap.util.attr.markerMid", r("mid"))(-1)
            }(), e.on("snap.util.getattr.r", function() {
                return "rect" == this.type && g(this.node, "rx") == g(this.node, "ry") ? (e.stop(), g(this.node, "rx")) : void 0
            })(-1), e.on("snap.util.getattr.text", function() {
                if ("text" == this.type || "tspan" == this.type) {
                    e.stop();
                    var t = u(this.node);
                    return 1 == t.length ? t[0] : t
                }
            })(-1), e.on("snap.util.getattr.#text", function() {
                return this.node.textContent
            })(-1), e.on("snap.util.getattr.viewBox", function() {
                e.stop();
                var n = g(this.node, "viewBox");
                return n ? (n = n.split(y), t._.box(+n[0], +n[1], +n[2], +n[3])) : void 0
            })(-1), e.on("snap.util.getattr.points", function() {
                var t = g(this.node, "points");
                return e.stop(), t ? t.split(y) : void 0
            })(-1), e.on("snap.util.getattr.path", function() {
                var t = g(this.node, "d");
                return e.stop(), t
            })(-1), e.on("snap.util.getattr.class", function() {
                return this.node.className.baseVal
            })(-1), e.on("snap.util.getattr.fontSize", l)(-1), e.on("snap.util.getattr.font-size", l)(-1)
    }), r.plugin(function() {
        function t(t) {
            return t
        }

        function n(t) {
            return function(e) {
                return +e.toFixed(3) + t
            }
        }
        var r = {
                "+": function(t, e) {
                    return t + e
                },
                "-": function(t, e) {
                    return t - e
                },
                "/": function(t, e) {
                    return t / e
                },
                "*": function(t, e) {
                    return t * e
                }
            },
            i = String,
            a = /[a-z]+$/i,
            o = /^\s*([+\-\/*])\s*=\s*([\d.eE+\-]+)\s*([^\d\s]+)?\s*$/;
        e.on("snap.util.attr", function(t) {
            var n = i(t).match(o);
            if (n) {
                var s = e.nt(),
                    u = s.substring(s.lastIndexOf(".") + 1),
                    l = this.attr(u),
                    c = {};
                e.stop();
                var f = n[3] || "",
                    h = l.match(a),
                    d = r[n[1]];
                if (h && h == f ? t = d(parseFloat(l), +n[2]) : (l = this.asPX(u), t = d(this.asPX(u), this.asPX(u, n[2] + f))), isNaN(l) || isNaN(t)) return;
                c[u] = t, this.attr(c)
            }
        })(-10), e.on("snap.util.equal", function(s, u) {
            var l = i(this.attr(s) || ""),
                c = i(u).match(o);
            if (c) {
                e.stop();
                var f = c[3] || "",
                    h = l.match(a),
                    d = r[c[1]];
                return h && h == f ? {
                    from: parseFloat(l),
                    to: d(parseFloat(l), +c[2]),
                    f: n(h)
                } : (l = this.asPX(s), {
                    from: l,
                    to: d(l, this.asPX(s, c[2] + f)),
                    f: t
                })
            }
        })(-10)
    }), r.plugin(function(t, n, r, i) {
        var a = r.prototype,
            o = t.is;
        a.rect = function(t, e, n, r, i, a) {
            var s;
            return null == a && (a = i), o(t, "object") && "[object Object]" == t ? s = t : null != t && (s = {
                x: t,
                y: e,
                width: n,
                height: r
            }, null != i && (s.rx = i, s.ry = a)), this.el("rect", s)
        }, a.circle = function(t, e, n) {
            var r;
            return o(t, "object") && "[object Object]" == t ? r = t : null != t && (r = {
                cx: t,
                cy: e,
                r: n
            }), this.el("circle", r)
        };
        var s = function() {
            function t() {
                this.parentNode.removeChild(this)
            }
            return function(e, n) {
                var r = i.doc.createElement("img"),
                    a = i.doc.body;
                r.style.cssText = "position:absolute;left:-9999em;top:-9999em", r.onload = function() {
                    n.call(r), r.onload = r.onerror = null, a.removeChild(r)
                }, r.onerror = t, a.appendChild(r), r.src = e
            }
        }();
        a.image = function(e, n, r, i, a) {
                var u = this.el("image");
                if (o(e, "object") && "src" in e) u.attr(e);
                else if (null != e) {
                    var l = {
                        "xlink:href": e,
                        preserveAspectRatio: "none"
                    };
                    null != n && null != r && (l.x = n, l.y = r), null != i && null != a ? (l.width = i, l.height = a) : s(e, function() {
                        t._.$(u.node, {
                            width: this.offsetWidth,
                            height: this.offsetHeight
                        })
                    }), t._.$(u.node, l)
                }
                return u
            }, a.ellipse = function(t, e, n, r) {
                var i;
                return o(t, "object") && "[object Object]" == t ? i = t : null != t && (i = {
                    cx: t,
                    cy: e,
                    rx: n,
                    ry: r
                }), this.el("ellipse", i)
            }, a.path = function(t) {
                var e;
                return o(t, "object") && !o(t, "array") ? e = t : t && (e = {
                    d: t
                }), this.el("path", e)
            }, a.group = a.g = function(t) {
                var e = this.el("g");
                return 1 == arguments.length && t && !t.type ? e.attr(t) : arguments.length && e.add(Array.prototype.slice.call(arguments, 0)), e
            }, a.svg = function(t, e, n, r, i, a, s, u) {
                var l = {};
                return o(t, "object") && null == e ? l = t : (null != t && (l.x = t), null != e && (l.y = e), null != n && (l.width = n), null != r && (l.height = r), null != i && null != a && null != s && null != u && (l.viewBox = [i, a, s, u])), this.el("svg", l)
            }, a.mask = function(t) {
                var e = this.el("mask");
                return 1 == arguments.length && t && !t.type ? e.attr(t) : arguments.length && e.add(Array.prototype.slice.call(arguments, 0)), e
            }, a.ptrn = function(t, e, n, r, i, a, s, u) {
                if (o(t, "object")) var l = t;
                else arguments.length ? (l = {}, null != t && (l.x = t), null != e && (l.y = e), null != n && (l.width = n), null != r && (l.height = r), null != i && null != a && null != s && null != u && (l.viewBox = [i, a, s, u])) : l = {
                    patternUnits: "userSpaceOnUse"
                };
                return this.el("pattern", l)
            }, a.use = function(t) {
                if (null != t) {
                    {
                        make("use", this.node)
                    }
                    return t instanceof n && (t.attr("id") || t.attr({
                        id: ID()
                    }), t = t.attr("id")), this.el("use", {
                        "xlink:href": t
                    })
                }
                return n.prototype.use.call(this)
            }, a.text = function(t, e, n) {
                var r = {};
                return o(t, "object") ? r = t : null != t && (r = {
                    x: t,
                    y: e,
                    text: n || ""
                }), this.el("text", r)
            }, a.line = function(t, e, n, r) {
                var i = {};
                return o(t, "object") ? i = t : null != t && (i = {
                    x1: t,
                    x2: n,
                    y1: e,
                    y2: r
                }), this.el("line", i)
            }, a.polyline = function(t) {
                arguments.length > 1 && (t = Array.prototype.slice.call(arguments, 0));
                var e = {};
                return o(t, "object") && !o(t, "array") ? e = t : null != t && (e = {
                    points: t
                }), this.el("polyline", e)
            }, a.polygon = function(t) {
                arguments.length > 1 && (t = Array.prototype.slice.call(arguments, 0));
                var e = {};
                return o(t, "object") && !o(t, "array") ? e = t : null != t && (e = {
                    points: t
                }), this.el("polygon", e)
            },
            function() {
                function n() {
                    return this.selectAll("stop")
                }

                function r(e, n) {
                    var r = l("stop"),
                        i = {
                            offset: +n + "%"
                        };
                    return e = t.color(e), i["stop-color"] = e.hex, e.opacity < 1 && (i["stop-opacity"] = e.opacity), l(r, i), this.node.appendChild(r), this
                }

                function i() {
                    if ("linearGradient" == this.type) {
                        var e = l(this.node, "x1") || 0,
                            n = l(this.node, "x2") || 1,
                            r = l(this.node, "y1") || 0,
                            i = l(this.node, "y2") || 0;
                        return t._.box(e, r, math.abs(n - e), math.abs(i - r))
                    }
                    var a = this.node.cx || .5,
                        o = this.node.cy || .5,
                        s = this.node.r || 0;
                    return t._.box(a - s, o - s, 2 * s, 2 * s)
                }

                function o(t, n) {
                    function r(t, e) {
                        for (var n = (e - f) / (t - h), r = h; t > r; r++) o[r].offset = +(+f + n * (r - h)).toFixed(2);
                        h = t, f = e
                    }
                    var i, a = e("snap.util.grad.parse", null, n).firstDefined();
                    if (!a) return null;
                    a.params.unshift(t), i = "l" == a.type.toLowerCase() ? s.apply(0, a.params) : u.apply(0, a.params), a.type != a.type.toLowerCase() && l(i.node, {
                        gradientUnits: "userSpaceOnUse"
                    });
                    var o = a.stops,
                        c = o.length,
                        f = 0,
                        h = 0;
                    c--;
                    for (var d = 0; c > d; d++) "offset" in o[d] && r(d, o[d].offset);
                    for (o[c].offset = o[c].offset || 100, r(c, o[c].offset), d = 0; c >= d; d++) {
                        var p = o[d];
                        i.addStop(p.color, p.offset)
                    }
                    return i
                }

                function s(e, a, o, s, u) {
                    var c = t._.make("linearGradient", e);
                    return c.stops = n, c.addStop = r, c.getBBox = i, null != a && l(c.node, {
                        x1: a,
                        y1: o,
                        x2: s,
                        y2: u
                    }), c
                }

                function u(e, a, o, s, u, c) {
                    var f = t._.make("radialGradient", e);
                    return f.stops = n, f.addStop = r, f.getBBox = i, null != a && l(f.node, {
                        cx: a,
                        cy: o,
                        r: s
                    }), null != u && null != c && l(f.node, {
                        fx: u,
                        fy: c
                    }), f
                }
                var l = t._.$;
                a.gradient = function(t) {
                    return o(this.defs, t)
                }, a.gradientLinear = function(t, e, n, r) {
                    return s(this.defs, t, e, n, r)
                }, a.gradientRadial = function(t, e, n, r, i) {
                    return u(this.defs, t, e, n, r, i)
                }, a.toString = function() {
                    var e, n = this.node.ownerDocument,
                        r = n.createDocumentFragment(),
                        i = n.createElement("div"),
                        a = this.node.cloneNode(!0);
                    return r.appendChild(i), i.appendChild(a), t._.$(a, {
                        xmlns: "http://www.w3.org/2000/svg"
                    }), e = i.innerHTML, r.removeChild(r.firstChild), e
                }, a.clear = function() {
                    for (var t, e = this.node.firstChild; e;) t = e.nextSibling, "defs" != e.tagName ? e.parentNode.removeChild(e) : a.clear.call({
                        node: e
                    }), e = t
                }
            }()
    }), r.plugin(function(t, e) {
        function n(t) {
            var e = n.ps = n.ps || {};
            return e[t] ? e[t].sleep = 100 : e[t] = {
                sleep: 100
            }, setTimeout(function() {
                for (var n in e) e[L](n) && n != t && (e[n].sleep--, !e[n].sleep && delete e[n])
            }), e[t]
        }

        function r(t, e, n, r) {
            return null == t && (t = e = n = r = 0), null == e && (e = t.y, n = t.width, r = t.height, t = t.x), {
                x: t,
                y: e,
                width: n,
                w: n,
                height: r,
                h: r,
                x2: t + n,
                y2: e + r,
                cx: t + n / 2,
                cy: e + r / 2,
                r1: G.min(n, r) / 2,
                r2: G.max(n, r) / 2,
                r0: G.sqrt(n * n + r * r) / 2,
                path: C(t, e, n, r),
                vb: [t, e, n, r].join(" ")
            }
        }

        function i() {
            return this.join(",").replace(V, "$1")
        }

        function a(t) {
            var e = q(t);
            return e.toString = i, e
        }

        function o(t, e, n, r, i, a, o, s, l) {
            return null == l ? d(t, e, n, r, i, a, o, s) : u(t, e, n, r, i, a, o, s, p(t, e, n, r, i, a, o, s, l))
        }

        function s(n, r) {
            function i(t) {
                return +(+t).toFixed(3)
            }
            return t._.cacher(function(t, a, s) {
                t instanceof e && (t = t.attr("d")), t = F(t);
                for (var l, c, f, h, d, p = "", g = {}, v = 0, m = 0, y = t.length; y > m; m++) {
                    if (f = t[m], "M" == f[0]) l = +f[1], c = +f[2];
                    else {
                        if (h = o(l, c, f[1], f[2], f[3], f[4], f[5], f[6]), v + h > a) {
                            if (r && !g.start) {
                                if (d = o(l, c, f[1], f[2], f[3], f[4], f[5], f[6], a - v), p += ["C" + i(d.start.x), i(d.start.y), i(d.m.x), i(d.m.y), i(d.x), i(d.y)], s) return p;
                                g.start = p, p = ["M" + i(d.x), i(d.y) + "C" + i(d.n.x), i(d.n.y), i(d.end.x), i(d.end.y), i(f[5]), i(f[6])].join(), v += h, l = +f[5], c = +f[6];
                                continue
                            }
                            if (!n && !r) return d = o(l, c, f[1], f[2], f[3], f[4], f[5], f[6], a - v)
                        }
                        v += h, l = +f[5], c = +f[6]
                    }
                    p += f.shift() + f
                }
                return g.end = p, d = n ? v : r ? g : u(l, c, f[0], f[1], f[2], f[3], f[4], f[5], 1)
            }, null, t._.clone)
        }

        function u(t, e, n, r, i, a, o, s, u) {
            var l = 1 - u,
                c = I(l, 3),
                f = I(l, 2),
                h = u * u,
                d = h * u,
                p = c * t + 3 * f * u * n + 3 * l * u * u * i + d * o,
                g = c * e + 3 * f * u * r + 3 * l * u * u * a + d * s,
                v = t + 2 * u * (n - t) + h * (i - 2 * n + t),
                m = e + 2 * u * (r - e) + h * (a - 2 * r + e),
                y = n + 2 * u * (i - n) + h * (o - 2 * i + n),
                x = r + 2 * u * (a - r) + h * (s - 2 * a + r),
                b = l * t + u * n,
                w = l * e + u * r,
                C = l * i + u * o,
                S = l * a + u * s,
                k = 90 - 180 * G.atan2(v - y, m - x) / R;
            return {
                x: p,
                y: g,
                m: {
                    x: v,
                    y: m
                },
                n: {
                    x: y,
                    y: x
                },
                start: {
                    x: b,
                    y: w
                },
                end: {
                    x: C,
                    y: S
                },
                alpha: k
            }
        }

        function l(e, n, i, a, o, s, u, l) {
            t.is(e, "array") || (e = [e, n, i, a, o, s, u, l]);
            var c = A.apply(null, e);
            return r(c.min.x, c.min.y, c.max.x - c.min.x, c.max.y - c.min.y)
        }

        function c(t, e, n) {
            return e >= t.x && e <= t.x + t.width && n >= t.y && n <= t.y + t.height
        }

        function f(t, e) {
            return t = r(t), e = r(e), c(e, t.x, t.y) || c(e, t.x2, t.y) || c(e, t.x, t.y2) || c(e, t.x2, t.y2) || c(t, e.x, e.y) || c(t, e.x2, e.y) || c(t, e.x, e.y2) || c(t, e.x2, e.y2) || (t.x < e.x2 && t.x > e.x || e.x < t.x2 && e.x > t.x) && (t.y < e.y2 && t.y > e.y || e.y < t.y2 && e.y > t.y)
        }

        function h(t, e, n, r, i) {
            var a = -3 * e + 9 * n - 9 * r + 3 * i,
                o = t * a + 6 * e - 12 * n + 6 * r;
            return t * o - 3 * e + 3 * n
        }

        function d(t, e, n, r, i, a, o, s, u) {
            null == u && (u = 1), u = u > 1 ? 1 : 0 > u ? 0 : u;
            for (var l = u / 2, c = 12, f = [-.1252, .1252, -.3678, .3678, -.5873, .5873, -.7699, .7699, -.9041, .9041, -.9816, .9816], d = [.2491, .2491, .2335, .2335, .2032, .2032, .1601, .1601, .1069, .1069, .0472, .0472], p = 0, g = 0; c > g; g++) {
                var v = l * f[g] + l,
                    m = h(v, t, n, i, o),
                    y = h(v, e, r, a, s),
                    x = m * m + y * y;
                p += d[g] * G.sqrt(x)
            }
            return l * p
        }

        function p(t, e, n, r, i, a, o, s, u) {
            if (!(0 > u || d(t, e, n, r, i, a, o, s) < u)) {
                var l, c = 1,
                    f = c / 2,
                    h = c - f,
                    p = .01;
                for (l = d(t, e, n, r, i, a, o, s, h); U(l - u) > p;) f /= 2, h += (u > l ? 1 : -1) * f, l = d(t, e, n, r, i, a, o, s, h);
                return h
            }
        }

        function g(t, e, n, r, i, a, o, s) {
            if (!(z(t, n) < O(i, o) || O(t, n) > z(i, o) || z(e, r) < O(a, s) || O(e, r) > z(a, s))) {
                var u = (t * r - e * n) * (i - o) - (t - n) * (i * s - a * o),
                    l = (t * r - e * n) * (a - s) - (e - r) * (i * s - a * o),
                    c = (t - n) * (a - s) - (e - r) * (i - o);
                if (c) {
                    var f = u / c,
                        h = l / c,
                        d = +f.toFixed(2),
                        p = +h.toFixed(2);
                    if (!(d < +O(t, n).toFixed(2) || d > +z(t, n).toFixed(2) || d < +O(i, o).toFixed(2) || d > +z(i, o).toFixed(2) || p < +O(e, r).toFixed(2) || p > +z(e, r).toFixed(2) || p < +O(a, s).toFixed(2) || p > +z(a, s).toFixed(2))) return {
                        x: f,
                        y: h
                    }
                }
            }
        }

        function v(t, e, n) {
            var r = l(t),
                i = l(e);
            if (!f(r, i)) return n ? 0 : [];
            for (var a = d.apply(0, t), o = d.apply(0, e), s = ~~(a / 8), c = ~~(o / 8), h = [], p = [], v = {}, m = n ? 0 : [], y = 0; s + 1 > y; y++) {
                var x = u.apply(0, t.concat(y / s));
                h.push({
                    x: x.x,
                    y: x.y,
                    t: y / s
                })
            }
            for (y = 0; c + 1 > y; y++) x = u.apply(0, e.concat(y / c)), p.push({
                x: x.x,
                y: x.y,
                t: y / c
            });
            for (y = 0; s > y; y++)
                for (var b = 0; c > b; b++) {
                    var w = h[y],
                        C = h[y + 1],
                        S = p[b],
                        k = p[b + 1],
                        M = U(C.x - w.x) < .001 ? "y" : "x",
                        T = U(k.x - S.x) < .001 ? "y" : "x",
                        _ = g(w.x, w.y, C.x, C.y, S.x, S.y, k.x, k.y);
                    if (_) {
                        if (v[_.x.toFixed(4)] == _.y.toFixed(4)) continue;
                        v[_.x.toFixed(4)] = _.y.toFixed(4);
                        var B = w.t + U((_[M] - w[M]) / (C[M] - w[M])) * (C.t - w.t),
                            A = S.t + U((_[T] - S[T]) / (k[T] - S[T])) * (k.t - S.t);
                        B >= 0 && 1 >= B && A >= 0 && 1 >= A && (n ? m++ : m.push({
                            x: _.x,
                            y: _.y,
                            t1: B,
                            t2: A
                        }))
                    }
                }
            return m
        }

        function m(t, e) {
            return x(t, e)
        }

        function y(t, e) {
            return x(t, e, 1)
        }

        function x(t, e, n) {
            t = F(t), e = F(e);
            for (var r, i, a, o, s, u, l, c, f, h, d = n ? 0 : [], p = 0, g = t.length; g > p; p++) {
                var m = t[p];
                if ("M" == m[0]) r = s = m[1], i = u = m[2];
                else {
                    "C" == m[0] ? (f = [r, i].concat(m.slice(1)), r = f[6], i = f[7]) : (f = [r, i, r, i, s, u, s, u], r = s, i = u);
                    for (var y = 0, x = e.length; x > y; y++) {
                        var b = e[y];
                        if ("M" == b[0]) a = l = b[1], o = c = b[2];
                        else {
                            "C" == b[0] ? (h = [a, o].concat(b.slice(1)), a = h[6], o = h[7]) : (h = [a, o, a, o, l, c, l, c], a = l, o = c);
                            var w = v(f, h, n);
                            if (n) d += w;
                            else {
                                for (var C = 0, S = w.length; S > C; C++) w[C].segment1 = p, w[C].segment2 = y, w[C].bez1 = f, w[C].bez2 = h;
                                d = d.concat(w)
                            }
                        }
                    }
                }
            }
            return d
        }

        function b(t, e, n) {
            var r = w(t);
            return c(r, e, n) && x(t, [
                ["M", e, n],
                ["H", r.x2 + 10]
            ], 1) % 2 == 1
        }

        function w(t) {
            var e = n(t);
            if (e.bbox) return q(e.bbox);
            if (!t) return r();
            t = F(t);
            for (var i, a = 0, o = 0, s = [], u = [], l = 0, c = t.length; c > l; l++)
                if (i = t[l], "M" == i[0]) a = i[1], o = i[2], s.push(a), u.push(o);
                else {
                    var f = A(a, o, i[1], i[2], i[3], i[4], i[5], i[6]);
                    s = s.concat(f.min.x, f.max.x), u = u.concat(f.min.y, f.max.y), a = i[5], o = i[6]
                }
            var h = O.apply(0, s),
                d = O.apply(0, u),
                p = z.apply(0, s),
                g = z.apply(0, u),
                v = r(h, d, p - h, g - d);
            return e.bbox = q(v), v
        }

        function C(t, e, n, r, a) {
            if (a) return [
                ["M", +t + +a, e],
                ["l", n - 2 * a, 0],
                ["a", a, a, 0, 0, 1, a, a],
                ["l", 0, r - 2 * a],
                ["a", a, a, 0, 0, 1, -a, a],
                ["l", 2 * a - n, 0],
                ["a", a, a, 0, 0, 1, -a, -a],
                ["l", 0, 2 * a - r],
                ["a", a, a, 0, 0, 1, a, -a],
                ["z"]
            ];
            var o = [
                ["M", t, e],
                ["l", n, 0],
                ["l", 0, r],
                ["l", -n, 0],
                ["z"]
            ];
            return o.toString = i, o
        }

        function S(t, e, n, r, a) {
            if (null == a && null == r && (r = n), t = +t, e = +e, n = +n, r = +r, null != a) var o = Math.PI / 180,
                s = t + n * Math.cos(-r * o),
                u = t + n * Math.cos(-a * o),
                l = e + n * Math.sin(-r * o),
                c = e + n * Math.sin(-a * o),
                f = [
                    ["M", s, l],
                    ["A", n, n, 0, +(a - r > 180), 0, u, c]
                ];
            else f = [
                ["M", t, e],
                ["m", 0, -r],
                ["a", n, r, 0, 1, 1, 0, 2 * r],
                ["a", n, r, 0, 1, 1, 0, -2 * r],
                ["z"]
            ];
            return f.toString = i, f
        }

        function k(e) {
            var r = n(e),
                o = String.prototype.toLowerCase;
            if (r.rel) return a(r.rel);
            t.is(e, "array") && t.is(e && e[0], "array") || (e = t.parsePathString(e));
            var s = [],
                u = 0,
                l = 0,
                c = 0,
                f = 0,
                h = 0;
            "M" == e[0][0] && (u = e[0][1], l = e[0][2], c = u, f = l, h++, s.push(["M", u, l]));
            for (var d = h, p = e.length; p > d; d++) {
                var g = s[d] = [],
                    v = e[d];
                if (v[0] != o.call(v[0])) switch (g[0] = o.call(v[0]), g[0]) {
                    case "a":
                        g[1] = v[1], g[2] = v[2], g[3] = v[3], g[4] = v[4], g[5] = v[5], g[6] = +(v[6] - u).toFixed(3), g[7] = +(v[7] - l).toFixed(3);
                        break;
                    case "v":
                        g[1] = +(v[1] - l).toFixed(3);
                        break;
                    case "m":
                        c = v[1], f = v[2];
                    default:
                        for (var m = 1, y = v.length; y > m; m++) g[m] = +(v[m] - (m % 2 ? u : l)).toFixed(3)
                } else {
                    g = s[d] = [], "m" == v[0] && (c = v[1] + u, f = v[2] + l);
                    for (var x = 0, b = v.length; b > x; x++) s[d][x] = v[x]
                }
                var w = s[d].length;
                switch (s[d][0]) {
                    case "z":
                        u = c, l = f;
                        break;
                    case "h":
                        u += +s[d][w - 1];
                        break;
                    case "v":
                        l += +s[d][w - 1];
                        break;
                    default:
                        u += +s[d][w - 2], l += +s[d][w - 1]
                }
            }
            return s.toString = i, r.rel = a(s), s
        }

        function M(e) {
            var r = n(e);
            if (r.abs) return a(r.abs);
            if (P(e, "array") && P(e && e[0], "array") || (e = t.parsePathString(e)), !e || !e.length) return [
                ["M", 0, 0]
            ];
            var o, s = [],
                u = 0,
                l = 0,
                c = 0,
                f = 0,
                h = 0;
            "M" == e[0][0] && (u = +e[0][1], l = +e[0][2], c = u, f = l, h++, s[0] = ["M", u, l]);
            for (var d, p, g = 3 == e.length && "M" == e[0][0] && "R" == e[1][0].toUpperCase() && "Z" == e[2][0].toUpperCase(), v = h, m = e.length; m > v; v++) {
                if (s.push(d = []), p = e[v], o = p[0], o != o.toUpperCase()) switch (d[0] = o.toUpperCase(), d[0]) {
                        case "A":
                            d[1] = p[1], d[2] = p[2], d[3] = p[3], d[4] = p[4], d[5] = p[5], d[6] = +p[6] + u, d[7] = +p[7] + l;
                            break;
                        case "V":
                            d[1] = +p[1] + l;
                            break;
                        case "H":
                            d[1] = +p[1] + u;
                            break;
                        case "R":
                            for (var y = [u, l].concat(p.slice(1)), x = 2, b = y.length; b > x; x++) y[x] = +y[x] + u, y[++x] = +y[x] + l;
                            s.pop(), s = s.concat(j(y, g));
                            break;
                        case "O":
                            s.pop(), y = S(u, l, p[1], p[2]), y.push(y[0]), s = s.concat(y);
                            break;
                        case "U":
                            s.pop(), s = s.concat(S(u, l, p[1], p[2], p[3])), d = ["U"].concat(s[s.length - 1].slice(-2));
                            break;
                        case "M":
                            c = +p[1] + u, f = +p[2] + l;
                        default:
                            for (x = 1, b = p.length; b > x; x++) d[x] = +p[x] + (x % 2 ? u : l)
                    } else if ("R" == o) y = [u, l].concat(p.slice(1)), s.pop(), s = s.concat(j(y, g)), d = ["R"].concat(p.slice(-2));
                    else if ("O" == o) s.pop(), y = S(u, l, p[1], p[2]), y.push(y[0]), s = s.concat(y);
                else if ("U" == o) s.pop(), s = s.concat(S(u, l, p[1], p[2], p[3])), d = ["U"].concat(s[s.length - 1].slice(-2));
                else
                    for (var w = 0, C = p.length; C > w; w++) d[w] = p[w];
                if (o = o.toUpperCase(), "O" != o) switch (d[0]) {
                    case "Z":
                        u = +c, l = +f;
                        break;
                    case "H":
                        u = d[1];
                        break;
                    case "V":
                        l = d[1];
                        break;
                    case "M":
                        c = d[d.length - 2], f = d[d.length - 1];
                    default:
                        u = d[d.length - 2], l = d[d.length - 1]
                }
            }
            return s.toString = i, r.abs = a(s), s
        }

        function T(t, e, n, r) {
            return [t, e, n, r, n, r]
        }

        function _(t, e, n, r, i, a) {
            var o = 1 / 3,
                s = 2 / 3;
            return [o * t + s * n, o * e + s * r, o * i + s * n, o * a + s * r, i, a]
        }

        function B(e, n, r, i, a, o, s, u, l, c) {
            var f, h = 120 * R / 180,
                d = R / 180 * (+a || 0),
                p = [],
                g = t._.cacher(function(t, e, n) {
                    var r = t * G.cos(n) - e * G.sin(n),
                        i = t * G.sin(n) + e * G.cos(n);
                    return {
                        x: r,
                        y: i
                    }
                });
            if (c) k = c[0], M = c[1], C = c[2], S = c[3];
            else {
                f = g(e, n, -d), e = f.x, n = f.y, f = g(u, l, -d), u = f.x, l = f.y;
                var v = (G.cos(R / 180 * a), G.sin(R / 180 * a), (e - u) / 2),
                    m = (n - l) / 2,
                    y = v * v / (r * r) + m * m / (i * i);
                y > 1 && (y = G.sqrt(y), r = y * r, i = y * i);
                var x = r * r,
                    b = i * i,
                    w = (o == s ? -1 : 1) * G.sqrt(U((x * b - x * m * m - b * v * v) / (x * m * m + b * v * v))),
                    C = w * r * m / i + (e + u) / 2,
                    S = w * -i * v / r + (n + l) / 2,
                    k = G.asin(((n - S) / i).toFixed(9)),
                    M = G.asin(((l - S) / i).toFixed(9));
                k = C > e ? R - k : k, M = C > u ? R - M : M, 0 > k && (k = 2 * R + k), 0 > M && (M = 2 * R + M), s && k > M && (k -= 2 * R), !s && M > k && (M -= 2 * R)
            }
            var T = M - k;
            if (U(T) > h) {
                var _ = M,
                    A = u,
                    F = l;
                M = k + h * (s && M > k ? 1 : -1), u = C + r * G.cos(M), l = S + i * G.sin(M), p = B(u, l, r, i, a, 0, s, A, F, [M, _, C, S])
            }
            T = M - k;
            var N = G.cos(k),
                j = G.sin(k),
                E = G.cos(M),
                P = G.sin(M),
                q = G.tan(T / 4),
                L = 4 / 3 * r * q,
                V = 4 / 3 * i * q,
                D = [e, n],
                O = [e + L * j, n - V * N],
                z = [u + L * P, l - V * E],
                I = [u, l];
            if (O[0] = 2 * D[0] - O[0], O[1] = 2 * D[1] - O[1], c) return [O, z, I].concat(p);
            p = [O, z, I].concat(p).join().split(",");
            for (var X = [], $ = 0, H = p.length; H > $; $++) X[$] = $ % 2 ? g(p[$ - 1], p[$], d).y : g(p[$], p[$ + 1], d).x;
            return X
        }

        function A(t, e, n, r, i, a, o, s) {
            for (var u, l, c, f, h, d, p, g, v = [], m = [
                    [],
                    []
                ], y = 0; 2 > y; ++y)
                if (0 == y ? (l = 6 * t - 12 * n + 6 * i, u = -3 * t + 9 * n - 9 * i + 3 * o, c = 3 * n - 3 * t) : (l = 6 * e - 12 * r + 6 * a, u = -3 * e + 9 * r - 9 * a + 3 * s, c = 3 * r - 3 * e), U(u) < 1e-12) {
                    if (U(l) < 1e-12) continue;
                    f = -c / l, f > 0 && 1 > f && v.push(f)
                } else p = l * l - 4 * c * u, g = G.sqrt(p), 0 > p || (h = (-l + g) / (2 * u), h > 0 && 1 > h && v.push(h), d = (-l - g) / (2 * u), d > 0 && 1 > d && v.push(d));
            for (var x, b = v.length, w = b; b--;) f = v[b], x = 1 - f, m[0][b] = x * x * x * t + 3 * x * x * f * n + 3 * x * f * f * i + f * f * f * o, m[1][b] = x * x * x * e + 3 * x * x * f * r + 3 * x * f * f * a + f * f * f * s;
            return m[0][w] = t, m[1][w] = e, m[0][w + 1] = o, m[1][w + 1] = s, m[0].length = m[1].length = w + 2, {
                min: {
                    x: O.apply(0, m[0]),
                    y: O.apply(0, m[1])
                },
                max: {
                    x: z.apply(0, m[0]),
                    y: z.apply(0, m[1])
                }
            }
        }

        function F(t, e) {
            var r = !e && n(t);
            if (!e && r.curve) return a(r.curve);
            for (var i = M(t), o = e && M(e), s = {
                    x: 0,
                    y: 0,
                    bx: 0,
                    by: 0,
                    X: 0,
                    Y: 0,
                    qx: null,
                    qy: null
                }, u = {
                    x: 0,
                    y: 0,
                    bx: 0,
                    by: 0,
                    X: 0,
                    Y: 0,
                    qx: null,
                    qy: null
                }, l = (function(t, e, n) {
                    var r, i;
                    if (!t) return ["C", e.x, e.y, e.x, e.y, e.x, e.y];
                    switch (!(t[0] in {
                        T: 1,
                        Q: 1
                    }) && (e.qx = e.qy = null), t[0]) {
                        case "M":
                            e.X = t[1], e.Y = t[2];
                            break;
                        case "A":
                            t = ["C"].concat(B.apply(0, [e.x, e.y].concat(t.slice(1))));
                            break;
                        case "S":
                            "C" == n || "S" == n ? (r = 2 * e.x - e.bx, i = 2 * e.y - e.by) : (r = e.x, i = e.y), t = ["C", r, i].concat(t.slice(1));
                            break;
                        case "T":
                            "Q" == n || "T" == n ? (e.qx = 2 * e.x - e.qx, e.qy = 2 * e.y - e.qy) : (e.qx = e.x, e.qy = e.y), t = ["C"].concat(_(e.x, e.y, e.qx, e.qy, t[1], t[2]));
                            break;
                        case "Q":
                            e.qx = t[1], e.qy = t[2], t = ["C"].concat(_(e.x, e.y, t[1], t[2], t[3], t[4]));
                            break;
                        case "L":
                            t = ["C"].concat(T(e.x, e.y, t[1], t[2]));
                            break;
                        case "H":
                            t = ["C"].concat(T(e.x, e.y, t[1], e.y));
                            break;
                        case "V":
                            t = ["C"].concat(T(e.x, e.y, e.x, t[1]));
                            break;
                        case "Z":
                            t = ["C"].concat(T(e.x, e.y, e.X, e.Y))
                    }
                    return t
                }), c = function(t, e) {
                    if (t[e].length > 7) {
                        t[e].shift();
                        for (var n = t[e]; n.length;) h[e] = "A", o && (d[e] = "A"), t.splice(e++, 0, ["C"].concat(n.splice(0, 6)));
                        t.splice(e, 1), m = z(i.length, o && o.length || 0)
                    }
                }, f = function(t, e, n, r, a) {
                    t && e && "M" == t[a][0] && "M" != e[a][0] && (e.splice(a, 0, ["M", r.x, r.y]), n.bx = 0, n.by = 0, n.x = t[a][1], n.y = t[a][2], m = z(i.length, o && o.length || 0))
                }, h = [], d = [], p = "", g = "", v = 0, m = z(i.length, o && o.length || 0); m > v; v++) {
                i[v] && (p = i[v][0]), "C" != p && (h[v] = p, v && (g = h[v - 1])), i[v] = l(i[v], s, g), "A" != h[v] && "C" == p && (h[v] = "C"), c(i, v), o && (o[v] && (p = o[v][0]), "C" != p && (d[v] = p, v && (g = d[v - 1])), o[v] = l(o[v], u, g), "A" != d[v] && "C" == p && (d[v] = "C"), c(o, v)), f(i, o, s, u, v), f(o, i, u, s, v);
                var y = i[v],
                    x = o && o[v],
                    b = y.length,
                    w = o && x.length;
                s.x = y[b - 2], s.y = y[b - 1], s.bx = D(y[b - 4]) || s.x, s.by = D(y[b - 3]) || s.y, u.bx = o && (D(x[w - 4]) || u.x), u.by = o && (D(x[w - 3]) || u.y), u.x = o && x[w - 2], u.y = o && x[w - 1]
            }
            return o || (r.curve = a(i)), o ? [i, o] : i
        }

        function N(t, e) {
            if (!e) return t;
            var n, r, i, a, o, s, u;
            for (t = F(t), i = 0, o = t.length; o > i; i++)
                for (u = t[i], a = 1, s = u.length; s > a; a += 2) n = e.x(u[a], u[a + 1]), r = e.y(u[a], u[a + 1]), u[a] = n, u[a + 1] = r;
            return t
        }

        function j(t, e) {
            for (var n = [], r = 0, i = t.length; i - 2 * !e > r; r += 2) {
                var a = [{
                    x: +t[r - 2],
                    y: +t[r - 1]
                }, {
                    x: +t[r],
                    y: +t[r + 1]
                }, {
                    x: +t[r + 2],
                    y: +t[r + 3]
                }, {
                    x: +t[r + 4],
                    y: +t[r + 5]
                }];
                e ? r ? i - 4 == r ? a[3] = {
                    x: +t[0],
                    y: +t[1]
                } : i - 2 == r && (a[2] = {
                    x: +t[0],
                    y: +t[1]
                }, a[3] = {
                    x: +t[2],
                    y: +t[3]
                }) : a[0] = {
                    x: +t[i - 2],
                    y: +t[i - 1]
                } : i - 4 == r ? a[3] = a[2] : r || (a[0] = {
                    x: +t[r],
                    y: +t[r + 1]
                }), n.push(["C", (-a[0].x + 6 * a[1].x + a[2].x) / 6, (-a[0].y + 6 * a[1].y + a[2].y) / 6, (a[1].x + 6 * a[2].x - a[3].x) / 6, (a[1].y + 6 * a[2].y - a[3].y) / 6, a[2].x, a[2].y])
            }
            return n
        }
        var E = e.prototype,
            P = t.is,
            q = t._.clone,
            L = "hasOwnProperty",
            V = /,?([a-z]),?/gi,
            D = parseFloat,
            G = Math,
            R = G.PI,
            O = G.min,
            z = G.max,
            I = G.pow,
            U = G.abs,
            X = s(1),
            $ = s(),
            H = s(0, 1),
            Y = t._unit2px,
            W = {
                path: function(t) {
                    return t.attr("path")
                },
                circle: function(t) {
                    var e = Y(t);
                    return S(e.cx, e.cy, e.r)
                },
                ellipse: function(t) {
                    var e = Y(t);
                    return S(e.cx || 0, e.cy || 0, e.rx, e.ry)
                },
                rect: function(t) {
                    var e = Y(t);
                    return C(e.x || 0, e.y || 0, e.width, e.height, e.rx, e.ry)
                },
                image: function(t) {
                    var e = Y(t);
                    return C(e.x || 0, e.y || 0, e.width, e.height)
                },
                line: function(t) {
                    return "M" + [t.attr("x1") || 0, t.attr("y1") || 0, t.attr("x2"), t.attr("y2")]
                },
                polyline: function(t) {
                    return "M" + t.attr("points")
                },
                polygon: function(t) {
                    return "M" + t.attr("points") + "z"
                },
                deflt: function(t) {
                    var e = t.node.getBBox();
                    return C(e.x, e.y, e.width, e.height)
                }
            };
        t.path = n, t.path.getTotalLength = X, t.path.getPointAtLength = $, t.path.getSubpath = function(t, e, n) {
            if (this.getTotalLength(t) - n < 1e-6) return H(t, e).end;
            var r = H(t, n, 1);
            return e ? H(r, e).end : r
        }, E.getTotalLength = function() {
            return this.node.getTotalLength ? this.node.getTotalLength() : void 0
        }, E.getPointAtLength = function(t) {
            return $(this.attr("d"), t)
        }, E.getSubpath = function(e, n) {
            return t.path.getSubpath(this.attr("d"), e, n)
        }, t._.box = r, t.path.findDotsAtSegment = u, t.path.bezierBBox = l, t.path.isPointInsideBBox = c, t.path.isBBoxIntersect = f, t.path.intersection = m, t.path.intersectionNumber = y, t.path.isPointInside = b, t.path.getBBox = w, t.path.get = W, t.path.toRelative = k, t.path.toAbsolute = M, t.path.toCubic = F, t.path.map = N, t.path.toString = i, t.path.clone = a
    }), r.plugin(function(t) {
        var r = Math.max,
            i = Math.min,
            a = function(t) {
                if (this.items = [], this.bindings = {}, this.length = 0, this.type = "set", t)
                    for (var e = 0, n = t.length; n > e; e++) t[e] && (this[this.items.length] = this.items[this.items.length] = t[e], this.length++)
            },
            o = a.prototype;
        o.push = function() {
            for (var t, e, n = 0, r = arguments.length; r > n; n++) t = arguments[n], t && (e = this.items.length, this[e] = this.items[e] = t, this.length++);
            return this
        }, o.pop = function() {
            return this.length && delete this[this.length--], this.items.pop()
        }, o.forEach = function(t, e) {
            for (var n = 0, r = this.items.length; r > n; n++)
                if (t.call(e, this.items[n], n) === !1) return this;
            return this
        }, o.animate = function(r, i, a, o) {
            "function" != typeof a || a.length || (o = a, a = n.linear), r instanceof t._.Animation && (o = r.callback, a = r.easing, i = a.dur, r = r.attr);
            var s = arguments;
            if (t.is(r, "array") && t.is(s[s.length - 1], "array")) var u = !0;
            var l, c = function() {
                    l ? this.b = l : l = this.b
                },
                f = 0,
                h = o && function() {
                    f++ == this.length && o.call(this)
                };
            return this.forEach(function(t, n) {
                e.once("snap.animcreated." + t.id, c), u ? s[n] && t.animate.apply(t, s[n]) : t.animate(r, i, a, h)
            })
        }, o.remove = function() {
            for (; this.length;) this.pop().remove();
            return this
        }, o.bind = function(t, e, n) {
            var r = {};
            if ("function" == typeof e) this.bindings[t] = e;
            else {
                var i = n || t;
                this.bindings[t] = function(t) {
                    r[i] = t, e.attr(r)
                }
            }
            return this
        }, o.attr = function(t) {
            var e = {};
            for (var n in t) this.bindings[n] ? this.bindings[n](t[n]) : e[n] = t[n];
            for (var r = 0, i = this.items.length; i > r; r++) this.items[r].attr(e);
            return this
        }, o.clear = function() {
            for (; this.length;) this.pop()
        }, o.splice = function(t, e) {
            t = 0 > t ? r(this.length + t, 0) : t, e = r(0, i(this.length - t, e));
            var n, o = [],
                s = [],
                u = [];
            for (n = 2; n < arguments.length; n++) u.push(arguments[n]);
            for (n = 0; e > n; n++) s.push(this[t + n]);
            for (; n < this.length - t; n++) o.push(this[t + n]);
            var l = u.length;
            for (n = 0; n < l + o.length; n++) this.items[t + n] = this[t + n] = l > n ? u[n] : o[n - l];
            for (n = this.items.length = this.length -= e - l; this[n];) delete this[n++];
            return new a(s)
        }, o.exclude = function(t) {
            for (var e = 0, n = this.length; n > e; e++)
                if (this[e] == t) return this.splice(e, 1), !0;
            return !1
        }, o.insertAfter = function(t) {
            for (var e = this.items.length; e--;) this.items[e].insertAfter(t);
            return this
        }, o.getBBox = function() {
            for (var t = [], e = [], n = [], a = [], o = this.items.length; o--;)
                if (!this.items[o].removed) {
                    var s = this.items[o].getBBox();
                    t.push(s.x), e.push(s.y), n.push(s.x + s.width), a.push(s.y + s.height)
                }
            return t = i.apply(0, t), e = i.apply(0, e), n = r.apply(0, n), a = r.apply(0, a), {
                x: t,
                y: e,
                x2: n,
                y2: a,
                width: n - t,
                height: a - e,
                cx: t + (n - t) / 2,
                cy: e + (a - e) / 2
            }
        }, o.clone = function(t) {
            t = new a;
            for (var e = 0, n = this.items.length; n > e; e++) t.push(this.items[e].clone());
            return t
        }, o.toString = function() {
            return "Snap‘s set"
        }, o.type = "set", t.set = function() {
            var t = new a;
            return arguments.length && t.push.apply(t, Array.prototype.slice.call(arguments, 0)), t
        }
    }), r.plugin(function(t, n) {
        function r(t) {
            var e = t[0];
            switch (e.toLowerCase()) {
                case "t":
                    return [e, 0, 0];
                case "m":
                    return [e, 1, 0, 0, 1, 0, 0];
                case "r":
                    return 4 == t.length ? [e, 0, t[2], t[3]] : [e, 0];
                case "s":
                    return 5 == t.length ? [e, 1, 1, t[3], t[4]] : 3 == t.length ? [e, 1, 1] : [e, 1]
            }
        }

        function i(e, n, i) {
            n = h(n).replace(/\.{3}|\u2026/g, e), e = t.parseTransformString(e) || [], n = t.parseTransformString(n) || [];
            for (var a, o, s, c, f = Math.max(e.length, n.length), d = [], p = [], g = 0; f > g; g++) {
                if (s = e[g] || r(n[g]), c = n[g] || r(s), s[0] != c[0] || "r" == s[0].toLowerCase() && (s[2] != c[2] || s[3] != c[3]) || "s" == s[0].toLowerCase() && (s[3] != c[3] || s[4] != c[4])) {
                    e = t._.transform2matrix(e, i()), n = t._.transform2matrix(n, i()), d = [
                        ["m", e.a, e.b, e.c, e.d, e.e, e.f]
                    ], p = [
                        ["m", n.a, n.b, n.c, n.d, n.e, n.f]
                    ];
                    break
                }
                for (d[g] = [], p[g] = [], a = 0, o = Math.max(s.length, c.length); o > a; a++) a in s && (d[g][a] = s[a]), a in c && (p[g][a] = c[a])
            }
            return {
                from: l(d),
                to: l(p),
                f: u(d)
            }
        }

        function a(t) {
            return t
        }

        function o(t) {
            return function(e) {
                return +e.toFixed(3) + t
            }
        }

        function s(e) {
            return t.rgb(e[0], e[1], e[2])
        }

        function u(t) {
            var e, n, r, i, a, o, s = 0,
                u = [];
            for (e = 0, n = t.length; n > e; e++) {
                for (a = "[", o = ['"' + t[e][0] + '"'], r = 1, i = t[e].length; i > r; r++) o[r] = "val[" + s++ +"]";
                a += o + "]", u[e] = a
            }
            return Function("val", "return Snap.path.toString.call([" + u + "])")
        }

        function l(t) {
            for (var e = [], n = 0, r = t.length; r > n; n++)
                for (var i = 1, a = t[n].length; a > i; i++) e.push(t[n][i]);
            return e
        }
        var c = {},
            f = /[a-z]+$/i,
            h = String;
        c.stroke = c.fill = "colour", n.prototype.equal = function(t, n) {
            return e("snap.util.equal", this, t, n).firstDefined()
        }, e.on("snap.util.equal", function(e, n) {
            var r, d, p = h(this.attr(e) || ""),
                g = this;
            if (p == +p && n == +n) return {
                from: +p,
                to: +n,
                f: a
            };
            if ("colour" == c[e]) return r = t.color(p), d = t.color(n), {
                from: [r.r, r.g, r.b, r.opacity],
                to: [d.r, d.g, d.b, d.opacity],
                f: s
            };
            if ("transform" == e || "gradientTransform" == e || "patternTransform" == e) return n instanceof t.Matrix && (n = n.toTransformString()), t._.rgTransform.test(n) || (n = t._.svgTransform2string(n)), i(p, n, function() {
                return g.getBBox(1)
            });
            if ("d" == e || "path" == e) return r = t.path.toCubic(p, n), {
                from: l(r[0]),
                to: l(r[1]),
                f: u(r[0])
            };
            if ("points" == e) return r = h(p).split(t._.separator), d = h(n).split(t._.separator), {
                from: r,
                to: d,
                f: function(t) {
                    return t
                }
            };
            aUnit = p.match(f);
            var v = h(n).match(f);
            return aUnit && aUnit == v ? {
                from: parseFloat(p),
                to: parseFloat(n),
                f: o(aUnit)
            } : {
                from: this.asPX(e),
                to: this.asPX(e, n),
                f: a
            }
        })
    }), r.plugin(function(t, n, r, i) {
        for (var a = n.prototype, o = "hasOwnProperty", s = ("createTouch" in i.doc), u = ["click", "dblclick", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "touchstart", "touchmove", "touchend", "touchcancel"], l = {
                mousedown: "touchstart",
                mousemove: "touchmove",
                mouseup: "touchend"
            }, c = (function(t, e) {
                var n = "y" == t ? "scrollTop" : "scrollLeft",
                    r = e && e.node ? e.node.ownerDocument : i.doc;
                return r[n in r.documentElement ? "documentElement" : "body"][n]
            }), f = function() {
                this.returnValue = !1
            }, h = function() {
                return this.originalEvent.preventDefault()
            }, d = function() {
                this.cancelBubble = !0
            }, p = function() {
                return this.originalEvent.stopPropagation()
            }, g = function() {
                return i.doc.addEventListener ? function(t, e, n, r) {
                    var i = s && l[e] ? l[e] : e,
                        a = function(i) {
                            var a = c("y", r),
                                u = c("x", r);
                            if (s && l[o](e))
                                for (var f = 0, d = i.targetTouches && i.targetTouches.length; d > f; f++)
                                    if (i.targetTouches[f].target == t || t.contains(i.targetTouches[f].target)) {
                                        var g = i;
                                        i = i.targetTouches[f], i.originalEvent = g, i.preventDefault = h, i.stopPropagation = p;
                                        break
                                    }
                            var v = i.clientX + u,
                                m = i.clientY + a;
                            return n.call(r, i, v, m)
                        };
                    return e !== i && t.addEventListener(e, a, !1), t.addEventListener(i, a, !1),
                        function() {
                            return e !== i && t.removeEventListener(e, a, !1), t.removeEventListener(i, a, !1), !0
                        }
                } : i.doc.attachEvent ? function(t, e, n, r) {
                    var i = function(t) {
                        t = t || r.node.ownerDocument.window.event;
                        var e = c("y", r),
                            i = c("x", r),
                            a = t.clientX + i,
                            o = t.clientY + e;
                        return t.preventDefault = t.preventDefault || f, t.stopPropagation = t.stopPropagation || d, n.call(r, t, a, o)
                    };
                    t.attachEvent("on" + e, i);
                    var a = function() {
                        return t.detachEvent("on" + e, i), !0
                    };
                    return a
                } : void 0
            }(), v = [], m = function(t) {
                for (var n, r = t.clientX, i = t.clientY, a = c("y"), o = c("x"), u = v.length; u--;) {
                    if (n = v[u], s) {
                        for (var l, f = t.touches && t.touches.length; f--;)
                            if (l = t.touches[f], l.identifier == n.el._drag.id || n.el.node.contains(l.target)) {
                                r = l.clientX, i = l.clientY, (t.originalEvent ? t.originalEvent : t).preventDefault();
                                break
                            }
                    } else t.preventDefault(); {
                        var h = n.el.node;
                        h.nextSibling, h.parentNode, h.style.display
                    }
                    r += o, i += a, e("snap.drag.move." + n.el.id, n.move_scope || n.el, r - n.el._drag.x, i - n.el._drag.y, r, i, t)
                }
            }, y = function(n) {
                t.unmousemove(m).unmouseup(y);
                for (var r, i = v.length; i--;) r = v[i], r.el._drag = {}, e("snap.drag.end." + r.el.id, r.end_scope || r.start_scope || r.move_scope || r.el, n);
                v = []
            }, x = u.length; x--;) ! function(e) {
            t[e] = a[e] = function(n, r) {
                return t.is(n, "function") && (this.events = this.events || [], this.events.push({
                    name: e,
                    f: n,
                    unbind: g(this.node || document, e, n, r || this)
                })), this
            }, t["un" + e] = a["un" + e] = function(t) {
                for (var n = this.events || [], r = n.length; r--;)
                    if (n[r].name == e && (n[r].f == t || !t)) return n[r].unbind(), n.splice(r, 1), !n.length && delete this.events, this;
                return this
            }
        }(u[x]);
        a.hover = function(t, e, n, r) {
            return this.mouseover(t, n).mouseout(e, r || n)
        }, a.unhover = function(t, e) {
            return this.unmouseover(t).unmouseout(e)
        };
        var b = [];
        a.drag = function(n, r, i, a, o, s) {
            function u(u, l, c) {
                (u.originalEvent || u).preventDefault(), this._drag.x = l, this._drag.y = c, this._drag.id = u.identifier, !v.length && t.mousemove(m).mouseup(y), v.push({
                    el: this,
                    move_scope: a,
                    start_scope: o,
                    end_scope: s
                }), r && e.on("snap.drag.start." + this.id, r), n && e.on("snap.drag.move." + this.id, n), i && e.on("snap.drag.end." + this.id, i), e("snap.drag.start." + this.id, o || a || this, l, c, u)
            }
            if (!arguments.length) {
                var l;
                return this.drag(function(t, e) {
                    this.attr({
                        transform: l + (l ? "T" : "t") + [t, e]
                    })
                }, function() {
                    l = this.transform().local
                })
            }
            return this._drag = {}, b.push({
                el: this,
                start: u
            }), this.mousedown(u), this
        }, a.undrag = function() {
            for (var n = b.length; n--;) b[n].el == this && (this.unmousedown(b[n].start), b.splice(n, 1), e.unbind("snap.drag.*." + this.id));
            return !b.length && t.unmousemove(m).unmouseup(y), this
        }
    }), r.plugin(function(t, n, r) {
        var i = (n.prototype, r.prototype),
            a = /^\s*url\((.+)\)/,
            o = String,
            s = t._.$;
        t.filter = {}, i.filter = function(e) {
            var r = this;
            "svg" != r.type && (r = r.paper);
            var i = t.parse(o(e)),
                a = t._.id(),
                u = (r.node.offsetWidth, r.node.offsetHeight, s("filter"));
            return s(u, {
                id: a,
                filterUnits: "userSpaceOnUse"
            }), u.appendChild(i.node), r.defs.appendChild(u), new n(u)
        }, e.on("snap.util.getattr.filter", function() {
            e.stop();
            var n = s(this.node, "filter");
            if (n) {
                var r = o(n).match(a);
                return r && t.select(r[1])
            }
        }), e.on("snap.util.attr.filter", function(r) {
            if (r instanceof n && "filter" == r.type) {
                e.stop();
                var i = r.node.id;
                i || (s(r.node, {
                    id: r.id
                }), i = r.id), s(this.node, {
                    filter: t.url(i)
                })
            }
            r && "none" != r || (e.stop(), this.node.removeAttribute("filter"))
        }), t.filter.blur = function(e, n) {
            null == e && (e = 2);
            var r = null == n ? e : [e, n];
            return t.format('<feGaussianBlur stdDeviation="{def}"/>', {
                def: r
            })
        }, t.filter.blur.toString = function() {
            return this()
        }, t.filter.shadow = function(e, n, r, i, a) {
            return "string" == typeof r && (i = r, a = i, r = 4), "string" != typeof i && (a = i, i = "#000"), i = i || "#000", null == r && (r = 4), null == a && (a = 1), null == e && (e = 0, n = 2), null == n && (n = e), i = t.color(i), t.format('<feGaussianBlur in="SourceAlpha" stdDeviation="{blur}"/><feOffset dx="{dx}" dy="{dy}" result="offsetblur"/><feFlood flood-color="{color}"/><feComposite in2="offsetblur" operator="in"/><feComponentTransfer><feFuncA type="linear" slope="{opacity}"/></feComponentTransfer><feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>', {
                color: i,
                dx: e,
                dy: n,
                blur: r,
                opacity: a
            })
        }, t.filter.shadow.toString = function() {
            return this()
        }, t.filter.grayscale = function(e) {
            return null == e && (e = 1), t.format('<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {b} {h} 0 0 0 0 0 1 0"/>', {
                a: .2126 + .7874 * (1 - e),
                b: .7152 - .7152 * (1 - e),
                c: .0722 - .0722 * (1 - e),
                d: .2126 - .2126 * (1 - e),
                e: .7152 + .2848 * (1 - e),
                f: .0722 - .0722 * (1 - e),
                g: .2126 - .2126 * (1 - e),
                h: .0722 + .9278 * (1 - e)
            })
        }, t.filter.grayscale.toString = function() {
            return this()
        }, t.filter.sepia = function(e) {
            return null == e && (e = 1), t.format('<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {h} {i} 0 0 0 0 0 1 0"/>', {
                a: .393 + .607 * (1 - e),
                b: .769 - .769 * (1 - e),
                c: .189 - .189 * (1 - e),
                d: .349 - .349 * (1 - e),
                e: .686 + .314 * (1 - e),
                f: .168 - .168 * (1 - e),
                g: .272 - .272 * (1 - e),
                h: .534 - .534 * (1 - e),
                i: .131 + .869 * (1 - e)
            })
        }, t.filter.sepia.toString = function() {
            return this()
        }, t.filter.saturate = function(e) {
            return null == e && (e = 1), t.format('<feColorMatrix type="saturate" values="{amount}"/>', {
                amount: 1 - e
            })
        }, t.filter.saturate.toString = function() {
            return this()
        }, t.filter.hueRotate = function(e) {
            return e = e || 0, t.format('<feColorMatrix type="hueRotate" values="{angle}"/>', {
                angle: e
            })
        }, t.filter.hueRotate.toString = function() {
            return this()
        }, t.filter.invert = function(e) {
            return null == e && (e = 1), t.format('<feComponentTransfer><feFuncR type="table" tableValues="{amount} {amount2}"/><feFuncG type="table" tableValues="{amount} {amount2}"/><feFuncB type="table" tableValues="{amount} {amount2}"/></feComponentTransfer>', {
                amount: e,
                amount2: 1 - e
            })
        }, t.filter.invert.toString = function() {
            return this()
        }, t.filter.brightness = function(e) {
            return null == e && (e = 1), t.format('<feComponentTransfer><feFuncR type="linear" slope="{amount}"/><feFuncG type="linear" slope="{amount}"/><feFuncB type="linear" slope="{amount}"/></feComponentTransfer>', {
                amount: e
            })
        }, t.filter.brightness.toString = function() {
            return this()
        }, t.filter.contrast = function(e) {
            return null == e && (e = 1), t.format('<feComponentTransfer><feFuncR type="linear" slope="{amount}" intercept="{amount2}"/><feFuncG type="linear" slope="{amount}" intercept="{amount2}"/><feFuncB type="linear" slope="{amount}" intercept="{amount2}"/></feComponentTransfer>', {
                amount: e,
                amount2: .5 - e / 2
            })
        }, t.filter.contrast.toString = function() {
            return this()
        }
    }), r
});;
var svgIconConfig = {
    webfire: {
        url: "assets/svg/webfire.svg"
    },
    plus: {
        url: "assets/svg/plus.svg"
    },
    menu: {
        url: "assets/svg/hamburger.svg",
        animation: [{
            el: "path:nth-child(1)",
            animProperties: {
                from: {
                    val: '{"path" : "m 5.0916789,17.818994 53.8166421,0"}'
                },
                to: {
                    val: '{"path" : "M 12.972944,50.936147 51.027056,12.882035"}'
                }
            }
        }, {
            el: "path:nth-child(2)",
            animProperties: {
                from: {
                    val: '{"transform" : "s1 1", "opacity" : 1}',
                    before: '{"transform" : "s0 0"}'
                },
                to: {
                    val: '{"opacity" : 0}'
                }
            }
        }, {
            el: "path:nth-child(3)",
            animProperties: {
                from: {
                    val: '{"path" : "m 5.0916788,45.95698 53.8166422,0"}'
                },
                to: {
                    val: '{"path" : "M 12.972944,12.882035 51.027056,50.936147"}'
                }
            }
        }]
    },
    arrow: {
        url: "assets/svg/nav-right-arrow.svg"
    },
    mail: {
        url: "assets/svg/mail.svg"
    }
};;

function mobilecheck() {
    var t = !1;
    return function(e) {
        (/(android|ipad|playbook|silk|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0, 4))) && (t = !0)
    }(navigator.userAgent || navigator.vendor || window.opera), t
}! function(t) {
    "use strict";

    function e(t) {
        return new RegExp("(^|\\s+)" + t + "(\\s+|$)")
    }

    function i(t, i) {
        return "classList" in document.documentElement ? t.classList.contains(i) : e(i).test(t.className)
    }

    function o(t, e) {
        for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
        return t
    }

    function s(t, e) {
        if ("mouseout" != t.type && "mouseover" != t.type) return !1;
        for (var i = t.relatedTarget ? t.relatedTarget : "mouseout" == t.type ? t.toElement : t.fromElement; i && i != e;) i = i.parentNode;
        return i != e
    }

    function n(t, e, s) {
        if (this.el = t, this.options = o({}, this.options), o(this.options, s), this.svg = Snap(this.options.size.w, this.options.size.h), this.svg.attr("viewBox", "0 0 64 64"), this.el.appendChild(this.svg.node), this.toggled = !1, this.clickevent = mobilecheck() ? "touchstart" : "click", this.config = e[this.el.getAttribute("data-icon")], i(this.el, "si-icon-reverse") && (this.reverse = !0), this.config) {
            var n = this;
            Snap.load(this.config.url, function(t) {
                var e = t.select("g");
                n.svg.append(e), n.options.onLoad(), n._initEvents(), n.reverse && n.toggle()
            })
        }
    }

    function a(t, e, s) {
        if (this.el = t, this.options = o({}, this.options), o(this.options, s), this.svg = Snap(this.options.size.w, this.options.size.h), this.svg.attr("viewBox", "0 0 288 64"), this.el.appendChild(this.svg.node), this.toggled = !1, this.clickevent = mobilecheck() ? "touchstart" : "click", this.config = e[this.el.getAttribute("data-icon")], i(this.el, "si-icon-reverse") && (this.reverse = !0), this.config) {
            var n = this;
            Snap.load(this.config.url, function(t) {
                var e = t.select("g");
                n.svg.append(e), n.options.onLoad(), n._initEvents(), n.reverse && n.toggle()
            })
        }
    }
    n.prototype.options = {
        speed: 300,
        easing: mina.linear,
        evtoggle: "click",
        size: {
            w: 64,
            h: 64
        },
        onLoad: function() {
            return !1
        },
        onToggle: function() {
            return !1
        }
    }, a.prototype.options = {
        speed: 200,
        easing: mina.linear,
        evtoggle: "click",
        size: {
            w: 288,
            h: 64
        },
        onLoad: function() {
            return !1
        },
        onToggle: function() {
            return !1
        }
    }, n.prototype._initEvents = function() {
        var t = this,
            e = function(e) {
                (("mouseover" === e.type.toLowerCase() || "mouseout" === e.type.toLowerCase()) && s(e, this) || e.type.toLowerCase() === t.clickevent) && (t.toggle(!0), t.options.onToggle())
            };
        "mouseover" === this.options.evtoggle ? (this.el.addEventListener("mouseover", e), this.el.addEventListener("mouseout", e)) : this.el.addEventListener(this.clickevent, e)
    }, a.prototype._initEvents = function() {
        var t = this,
            e = function(e) {
                (("mouseover" === e.type.toLowerCase() || "mouseout" === e.type.toLowerCase()) && s(e, this) || e.type.toLowerCase() === t.clickevent) && t.options.onToggle()
            };
        "mouseover" === this.options.evtoggle ? (this.el.addEventListener("mouseover", e), this.el.addEventListener("mouseout", e)) : this.el.addEventListener(this.clickevent, e)
    }, n.prototype.toggle = function(t) {
        if (this.config.animation) {
            for (var e = this, i = 0, o = this.config.animation.length; o > i; ++i) {
                var s = this.config.animation[i],
                    n = this.svg.select(s.el),
                    a = this.toggled ? s.animProperties.from : s.animProperties.to,
                    r = a.val,
                    c = t && a.delayFactor ? a.delayFactor : 0;
                a.before && n.attr(JSON.parse(a.before)), t ? setTimeout(function(t, i, o) {
                    return function() {
                        t.animate(JSON.parse(i), e.options.speed, e.options.easing, function() {
                            o.after && this.attr(JSON.parse(o.after)), o.animAfter && this.animate(JSON.parse(o.animAfter), e.options.speed, e.options.easing)
                        })
                    }
                }(n, r, a), c * e.options.speed) : n.attr(JSON.parse(r))
            }
            this.toggled = !this.toggled
        }
    }, t.svgIcon = n, t.svgLogo = a
}(window);;
! function(t) {
    "use strict";

    function e(t, e) {
        for (var s in e) e.hasOwnProperty(s) && (t[s] = e[s]);
        return t
    }

    function s(t, s) {
        this.el = t, this.options = e({}, this.options), e(this.options, s), this._init()
    }
    var i = (t.document.documentElement, document.getElementById("pages-op")),
        n = (document.getElementById("legalLink"), $('div.content[data-content = "page"]')),
        n = (document.getElementById("arrow"), $('div.content[data-content = "page"]')),
        o = mobilecheck() ? "touchstart" : "click",
        r = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd",
            msTransition: "MSTransitionEnd",
            transition: "transitionend"
        },
        a = r[Modernizr.prefixed("transition")],
        l = {
            transitions: Modernizr.csstransitions
        };
    s.prototype.options = {
        perspective: "1200",
        slideshowRatio: .3,
        onToggle: function() {
            return !1
        },
        onToggleContent: function() {
            return !1
        },
        onToggleContentComplete: function() {
            return !1
        }
    }, s.prototype._init = function() {
        var t = this;
        this.current = 0, this.isFullscreen = !0, this.imgDragger = this.el.querySelector("section.dragdealer"), this.handle = this.imgDragger.querySelector("div.handle"), this.slides = [].slice.call(this.handle.children), this.slidesCount = this.slides.length, this.slidesCount < 1 || (this.slideshowRatio = this.options.slideshowRatio, $(this.slides[this.current]).addClass("current"), this.pages = i.querySelector("div.pages"), this.handle.style.width = 100 * this.slidesCount + "%", this.slides.forEach(function(e) {
            e.style.width = 100 / t.slidesCount + "%"
        }), this._initDragDealer(), this.el.style.WebkitPerspective = this.options.perspective + "px", this.el.style.perspective = this.options.perspective + "px", this._initEvents())
    }, s.prototype._initEvents = function() {
        var t = this;
        this.slides.forEach(function(e) {
            e.addEventListener("click", function() {
                return t.isFullscreen || t.dd.activity || t.isAnimating ? !1 : void(t.slides.indexOf(e) === t.current ? t.toggle() : t.dd.setStep(t.slides.indexOf(e) + 1))
            })
        }), [].slice.call(document.querySelectorAll(".reveal")).forEach(function(e) {
            e.addEventListener(o, function(e) {
                var s = $(this).attr("href");
                e.preventDefault(), t._toggleContent(s)
            })
        }), document.addEventListener("keydown", function(e) {
            var s = e.keyCode || e.which,
                i = t.slides[t.current],
                o = (t.dd.getStep()[0] - 1, i.getAttribute("data-content"));
            if (t.isContent) switch (s) {
                case 38:
                    0 === n.scrollTop && t._toggleContent(o)
            } else switch (s) {
                case 40:
                    if (!t.isFullscreen || t.dd.getStep()[0] - 1 == 0 || t.dd.getStep()[0] - 1 == 3 || t.dd.getStep()[0] - 1 == 9) return;
                    t._toggleContent(o);
                    break;
                case 37:
                    t.dd.setStep(t.current);
                    break;
                case 39:
                    t.dd.setStep(t.current + 2)
            }
        })
    }, s.prototype._toggleContent = function(t) {
        if (this.isAnimating) return !1;
        this.isAnimating = !0, this.options.onToggleContent(), this.isContent ? (this.dd.enable(), $(this.el).removeClass("show-content"), $(i).removeClass("show-content-op")) : (n.scrollTop = 0, this.dd.disable(), $("#overlay-2").removeClass("hide"), $(this.el).addClass("show-content"), $.ajax({
            url: t,
            dataType: "html",
            data: "s_notpl",
            success: function(e) {
                if ("legal-stuff" == t && $("body").addClass("legal-modal"), $(n).html(e), $(i).addClass("show-content-op"), "contact-us" == t || "contact" == t || "legal-stuff" == t) {
                    if ("contact-us" == t) {
                        var s = document.getElementById("webform"),
                            o = s.querySelector(".webform-inner");
                        new stepsForm(s, {
                            onSubmit: function() {
                                var t = $("#webform").serialize();
                                return $.ajax({
                                    type: "POST",
                                    url: "assets/contact_form/contact_process.php",
                                    data: t,
                                    success: function() {
                                        $(o).addClass("hide");
                                        var t = s.querySelector(".final-message");
                                        t.innerHTML = "Thank you! We&rsquo;ll be in touch.", $(t).addClass("show")
                                    }
                                }), !1
                            }
                        })
                    }
                    setTimeout(function() {
                        $(n).addClass("show"), $("#overlay-2").addClass("hide")
                    }, 1e3)
                } else {
                    var r = 0,
                        a = $("img.lazy").length;
                    $("img.lazy").load(function() {
                        ++r, r === a && setTimeout(function() {
                            $(n).addClass("show"), $("#overlay-2").addClass("hide"), n.scrollTop = 100
                        }, 1e3)
                    }), setTimeout(function() {
                        $("img.lazy").css("visibility", "visible")
                    }, 1500)
                }
            }
        }));
        var e = this,
            s = function(t) {
                if (l.transitions) {
                    if (-1 === t.propertyName.indexOf("transform") || t.target !== this) return;
                    this.removeEventListener(a, s)
                }
                e.isContent && $(n).html(""), e.isContent = !e.isContent, e.isAnimating = !1, e.options.onToggleContentComplete()
            };
        l.transitions ? this.el.addEventListener(a, s) : s()
    }, s.prototype.pageToggle = function() {
        var t = this,
            e = t.slides[t.current];
        t._toggleContent(e)
    }, s.prototype._initDragDealer = function() {
        var t = this;
        this.dd = new Dragdealer(this.imgDragger, {
            steps: this.slidesCount,
            speed: .4,
            loose: !0,
            requestAnimationFrame: !0,
            callback: function(e, s) {
                t._navigate(e, s)
            }
        })
    }, s.prototype._navigate = function() {
    	// slide 이동
        $(this.slides[this.current || 0]).removeClass("current"), this.current = this.dd.getStep()[0] - 1, $(this.slides[this.current]).addClass("current"), $("body")[0].className = $("body")[0].className.replace(/\bviewing-page-\d.*?\b/g, ""), $("body").addClass("viewing-page-" + this.current);
        var t = this.dd.getStep()[0] - 1,
            e = null,
            s = "0%";
        0 === t ? (s = "0%", history.pushState(null, "0", ""),speechTextKorean("")
        		) : 1 === t ? (s = "10%", history.pushState(null, "1", ""),speechTextKorean($('#bio_msg').text())) : 2 === t ? (s = "20%", history.pushState(null, "2", ""), speechTextKorean($('#weather_msg').text()) ) : 3 === t ? (s = "30%", history.pushState(null, "3", ""),speechTextKorean($('#news_msg').text())) : 4 === t ? (s = "40%", history.pushState(null, "4", ""),speechTextKorean("")) : 5 === t ? (s = "50%", history.pushState(null, "5", ""),speechTextKorean($('#traffic_msg').text())) : 6 === t ? (s = "60%", history.pushState(null, "6", ""),speechTextKorean("")) : 7 === t ? (e = "7", s = "70%", history.pushState(null, "7", "")) : 8 === t ? (e = "8", s = "80%", history.pushState(null, "8", "")) : 9 === t ? (e = "9", s = "90%", history.pushState(null, "App Agency London | The Future", "")) : 10 === t && (s = "100%", history.pushState(null, "App Agency London | Contact Us", "")), $(".stage").stop().animate({
            width: s
        })
    }, s.prototype.toggle = function() {
        if (this.isAnimating) return !1;
        this.isAnimating = !0, this.options.onToggle(), $(this.el).removeClass(this.isFullscreen ? "switch-max" : "switch-min"), $(this.el).addClass(this.isFullscreen ? "switch-min" : "switch-max");
        var t = this,
            e = this.options.perspective,
            s = this.options.slideshowRatio,
            i = this.isFullscreen ? e - e / s : e - e * s;
        this.imgDragger.style.WebkitTransform = "translate3d( -50%, -50%, " + i + "px )", this.imgDragger.style.transform = "translate3d( -50%, -50%, " + i + "px )";
        var n = function(e) {
            if (l.transitions) {
                if (-1 === e.propertyName.indexOf("transform")) return;
                this.removeEventListener(a, n)
            }!t.isFullscreen, $(this).removeClass(t.isFullscreen ? "img-dragger-large" : "img-dragger-small"), $(this).addClass(t.isFullscreen ? "img-dragger-small" : "img-dragger-large"), t.imgDragger.style.WebkitTransform = "translate3d( -50%, -50%, 0px )", t.imgDragger.style.transform = "translate3d( -50%, -50%, 0px )", this.style.width = t.isFullscreen ? 100 * t.options.slideshowRatio + "%" : "100%", this.style.height = t.isFullscreen ? 100 * t.options.slideshowRatio + "%" : "100%", t.dd.reflow(), t.isFullscreen = !t.isFullscreen, t.isAnimating = !1
        };
        l.transitions ? this.imgDragger.addEventListener(a, n) : n()
    }, s.prototype._preserve3dSlides = function(t) {
        this.slides.forEach(function(e) {
            e.style.transformStyle = t ? "preserve-3d" : ""
        })
    }, t.DragSlideshow = s
}(window);;
! function(t) {
    t.fx.step.textShadowBlur = function(n) {
        t(n.elem).prop("textShadowBlur", n.now).css({
            textShadow: "0 0 " + Math.floor(n.now) + "px rgb(34,34,34)"
        })
    }, t.fn.textrotator = function() {
        return this.each(function() {
            var n = t(this),
                e = [];
            t.each(n.text().split(","), function(t, n) {
                e.push(n)
            }), n.text(e[0]);
            var o = function() {
                n.animate({
                    textShadowBlur: 20,
                    opacity: 0
                }, 500, function() {
                    index = t.inArray(n.text(), e), index + 1 == e.length && (index = -1), n.text(e[index + 1]).animate({
                        textShadowBlur: 0,
                        opacity: 1
                    }, 500)
                })
            };
            setInterval(o, 2e3)
        })
    }
}(window.jQuery);;
! function(t) {
    t.fx.step.textShadowBlurHome = function(e) {
        t(e.elem).prop("textShadowBlurHome", e.now).css({
            textShadow: "0 0 " + Math.floor(e.now) + "px rgb(255,255,255)"
        })
    }, t.fn.textrotatorHome = function() {
        return this.each(function() {
            var e = t(this),
                n = [];
            t.each(e.text().split(","), function(t, e) {
                n.push(e)
            }), e.text(n[0]);
            var o = function() {
                e.animate({
                    textShadowBlurHome: 20,
                    opacity: 0
                }, 500, function() {
                    index = t.inArray(e.text(), n), index + 1 == n.length && (index = -1), e.text(n[index + 1]).animate({
                        textShadowBlurHome: 0,
                        opacity: 1
                    }, 500)
                })
            };
            setInterval(o, 2e3)
        })
    }
}(window.jQuery);;
! function(t) {
    "use strict";

    function e(t, e) {
        for (var s in e) e.hasOwnProperty(s) && (t[s] = e[s]);
        return t
    }

    function s(t, s) {
        this.el = t, this.options = e({}, this.options), e(this.options, s), this._init()
    }
    var n = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd",
            msTransition: "MSTransitionEnd",
            transition: "transitionend"
        },
        i = n[Modernizr.prefixed("transition")],
        r = {
            transitions: Modernizr.csstransitions
        };
    s.prototype.options = {
        onSubmit: function() {
            return !1
        }
    }, s.prototype._init = function() {
        this.current = 0, this.questions = [].slice.call(this.el.querySelectorAll("ol.questions > li")), this.questionsCount = this.questions.length, $(this.questions[0]).addClass("current"), this.ctrlNext = this.el.querySelector("button.next"), this.progress = this.el.querySelector("div.progress"), this.questionStatus = this.el.querySelector("span.number"), this.currentNum = this.questionStatus.querySelector("span.number-current"), this.currentNum.innerHTML = Number(this.current + 1), this.totalQuestionNum = this.questionStatus.querySelector("span.number-total"), this.totalQuestionNum.innerHTML = this.questionsCount, this.error = this.el.querySelector("span.error-message"), this._initEvents()
    }, s.prototype._initEvents = function() {
        var t = this,
            e = this.questions[this.current].querySelector("input"),
            s = function() {
                e.removeEventListener("focus", s), $(t.ctrlNext).addClass("show")
            };
        e.addEventListener("focus", s), this.ctrlNext.addEventListener("click", function(e) {
            e.preventDefault(), t._nextQuestion()
        }), document.addEventListener("keydown", function(e) {
            var s = e.keyCode || e.which;
            13 === s && (e.preventDefault(), t._nextQuestion())
        }), this.el.addEventListener("keydown", function(t) {
            var e = t.keyCode || t.which;
            9 === e && t.preventDefault()
        })
    }, s.prototype._nextQuestion = function() {
        if (!this._validade()) return !1;
        this.current === this.questionsCount - 1 && (this.isFilled = !0), this._clearError();
        var t = this.questions[this.current];
        if (++this.current, this._progress(), !this.isFilled) {
            this._updateQuestionNumber(), $(this.el).addClass("show-next");
            var e = this.questions[this.current];
            $(t).removeClass("current"), $(e).addClass("current")
        }
        var s = this,
            n = function() {
                r.transitions && this.removeEventListener(i, n), s.isFilled ? s._submit() : ($(s.el).removeClass("show-next"), s.currentNum.innerHTML = s.nextQuestionNum.innerHTML, s.questionStatus.removeChild(s.nextQuestionNum), e.querySelector("input").focus())
            };
        r.transitions ? this.progress.addEventListener(i, n) : n()
    }, s.prototype._progress = function() {
        this.progress.style.width = this.current * (100 / this.questionsCount) + "%"
    }, s.prototype._updateQuestionNumber = function() {
        this.nextQuestionNum = document.createElement("span"), this.nextQuestionNum.className = "number-next", this.nextQuestionNum.innerHTML = Number(this.current + 1), this.questionStatus.appendChild(this.nextQuestionNum)
    }, s.prototype._submit = function() {
        this.options.onSubmit(this.el)
    }, s.prototype._validade = function() {
        var t = this.questions[this.current].querySelector("input").value,
            e = this.questions[this.current].querySelector("input").name;
        if ("email" === e) {
            var s = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i),
                n = s.test(t);
            return n ? !0 : (this._showError("INVALIDEMAIL"), !1)
        }
        return "phone" === e || "company" === e || "message" === e || "budget" === e ? !0 : "" === t ? (this._showError("EMPTYSTR"), !1) : !0
    }, s.prototype._showError = function(t) {
        var e = "";
        switch (t) {
            case "EMPTYSTR":
                e = "Please enter your name before continuing";
                break;
            case "INVALIDEMAIL":
                e = "Please enter a valid email address"
        }
        this.error.innerHTML = e, $(this.error).addClass("show")
    }, s.prototype._clearError = function() {
        $(this.error).removeClass("show")
    }, t.stepsForm = s
}(window);;
! function() {
    toggleBtnn = function() {
        slideshow.isContent ? (slideshow.pageToggle(), menu.toggle(!0)) : slideshow.isFullscreen ? ($("#arrow").addClass("hide"), $("#footer").removeClass("hide"), slideshow.toggle()) : (menu.toggle(!0), $("#arrow").removeClass("hide"), $("#footer").addClass("hide"), slideshow.toggle())
    }, toggleCtrls = function() {
        slideshow.isContent || $("#arrow").addClass("hide")
    }, toggleCompleteCtrls = function() {
        slideshow.isContent || ($("#slideshow").hasClass("switch-min") || $("#arrow").removeClass("hide"), $("body").hasClass("legal-modal") && $("body").removeClass("legal-modal")), $("#slideshow").hasClass("switch-min") || menu.toggle(!0)
    }, slideshow = new DragSlideshow(document.getElementById("slideshow"), {
        onToggle: toggleBtnn,
        onToggleContent: toggleCtrls,
        onToggleContentComplete: toggleCompleteCtrls
    }), closeOverlay = function() {
        $("#overlay").addClass("hide"), setTimeout(function() {
            $("#swipe").addClass("hide")
        }, 5e3)
    }, slideshow.dd.setStep(page_num);
    var e = !0;
    $(window).bind("popstate", function() {
        var s = event.state;
        if (e && !s) e = !1;
        else if (s) e = !1;
        else {
            e = !1;
            var o = slideshow.dd.getStep()[0] - 1;
            0 === o ? slideshow.dd.setStep(0) : 1 === o ? slideshow.dd.setStep(1) : 2 === o ? slideshow.dd.setStep(2) : 3 === o ? slideshow.dd.setStep(3) : 4 === o ? slideshow.dd.setStep(4) : 5 === o ? slideshow.dd.setStep(5) : 6 === o ? slideshow.dd.setStep(6) : 7 === o ? slideshow.dd.setStep(7) : 8 === o ? slideshow.dd.setStep(8) : 9 === o ? slideshow.dd.setStep(9) : 10 === o && slideshow.dd.setStep(10)
        }
    }), document.addEventListener("keydown", function(e) {
        var s = e.keyCode || e.which;
        switch (s) {
            case 38:
                slideshow.isFullscreen && (toggleBtnn(), menu.toggle(!0));
                break;
            case 40:
                slideshow.isFullscreen || (toggleBtnn(), menu.toggle(!0))
        }
    }), menu = new svgIcon(document.querySelector(".svg-icon.svg-menu"), svgIconConfig, {
        onToggle: toggleBtnn
    }), arrow = new svgIcon(document.querySelector(".svg-icon.svg-arrow"), svgIconConfig, {
        onToggle: function() {
            var e = slideshow.dd.getStep()[0] - 1;
            slideshow.dd.setStep(e + 2)
        }
    }), new svgLogo(document.querySelector(".svg-icon.svg-logo"), svgIconConfig, {
        onToggle: function() {
            slideshow.isContent || slideshow.dd.setStep(0)
        }
    }), $(".textrotator_home").textrotatorHome(), $(".textrotator").textrotator(), window.addEventListener("load", closeOverlay)
}();

function regexpTts(msg) {
	var ttsMsg = msg.replace( /<br>/gi, " ");
	return ttsMsg;
}


