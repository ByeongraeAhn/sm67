function shuffle(t) {
    for (var e, n, i = t.length; i; e = Math.floor(Math.random() * i), n = t[--i], t[i] = t[e], t[e] = n);
    return t
}! function(t, e) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
        if (!t.document) throw new Error("jQuery requires a window with a document");
        return e(t)
    } : e(t)
}("undefined" != typeof window ? window : this, function(t, e) {
    function n(t) {
        var e = t.length,
            n = J.type(t);
        return "function" === n || J.isWindow(t) ? !1 : 1 === t.nodeType && e ? !0 : "array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t
    }

    function i(t, e, n) {
        if (J.isFunction(e)) return J.grep(t, function(t, i) {
            return !!e.call(t, i, t) !== n
        });
        if (e.nodeType) return J.grep(t, function(t) {
            return t === e !== n
        });
        if ("string" == typeof e) {
            if (ae.test(e)) return J.filter(e, t, n);
            e = J.filter(e, t)
        }
        return J.grep(t, function(t) {
            return B.call(e, t) >= 0 !== n
        })
    }

    function r(t, e) {
        for (;
            (t = t[e]) && 1 !== t.nodeType;);
        return t
    }

    function o(t) {
        var e = de[t] = {};
        return J.each(t.match(fe) || [], function(t, n) {
            e[n] = !0
        }), e
    }

    function s() {
        G.removeEventListener("DOMContentLoaded", s, !1), t.removeEventListener("load", s, !1), J.ready()
    }

    function a() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function() {
                return {}
            }
        }), this.expando = J.expando + Math.random()
    }

    function u(t, e, n) {
        var i;
        if (void 0 === n && 1 === t.nodeType)
            if (i = "data-" + e.replace(we, "-$1").toLowerCase(), n = t.getAttribute(i), "string" == typeof n) {
                try {
                    n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : _e.test(n) ? J.parseJSON(n) : n
                } catch (r) {}
                ye.set(t, e, n)
            } else n = void 0;
        return n
    }

    function l() {
        return !0
    }

    function c() {
        return !1
    }

    function h() {
        try {
            return G.activeElement
        } catch (t) {}
    }

    function p(t, e) {
        return J.nodeName(t, "table") && J.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
    }

    function f(t) {
        return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
    }

    function d(t) {
        var e = Le.exec(t.type);
        return e ? t.type = e[1] : t.removeAttribute("type"), t
    }

    function m(t, e) {
        for (var n = 0, i = t.length; i > n; n++) ve.set(t[n], "globalEval", !e || ve.get(e[n], "globalEval"))
    }

    function g(t, e) {
        var n, i, r, o, s, a, u, l;
        if (1 === e.nodeType) {
            if (ve.hasData(t) && (o = ve.access(t), s = ve.set(e, o), l = o.events)) {
                delete s.handle, s.events = {};
                for (r in l)
                    for (n = 0, i = l[r].length; i > n; n++) J.event.add(e, r, l[r][n])
            }
            ye.hasData(t) && (a = ye.access(t), u = J.extend({}, a), ye.set(e, u))
        }
    }

    function v(t, e) {
        var n = t.getElementsByTagName ? t.getElementsByTagName(e || "*") : t.querySelectorAll ? t.querySelectorAll(e || "*") : [];
        return void 0 === e || e && J.nodeName(t, e) ? J.merge([t], n) : n
    }

    function y(t, e) {
        var n = e.nodeName.toLowerCase();
        "input" === n && ke.test(t.type) ? e.checked = t.checked : ("input" === n || "textarea" === n) && (e.defaultValue = t.defaultValue)
    }

    function _(e, n) {
        var i, r = J(n.createElement(e)).appendTo(n.body),
            o = t.getDefaultComputedStyle && (i = t.getDefaultComputedStyle(r[0])) ? i.display : J.css(r[0], "display");
        return r.detach(), o
    }

    function w(t) {
        var e = G,
            n = ze[t];
        return n || (n = _(t, e), "none" !== n && n || (Fe = (Fe || J("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), e = Fe[0].contentDocument, e.write(), e.close(), n = _(t, e), Fe.detach()), ze[t] = n), n
    }

    function x(t, e, n) {
        var i, r, o, s, a = t.style;
        return n = n || qe(t), n && (s = n.getPropertyValue(e) || n[e]), n && ("" !== s || J.contains(t.ownerDocument, t) || (s = J.style(t, e)), He.test(s) && Xe.test(e) && (i = a.width, r = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = r, a.maxWidth = o)), void 0 !== s ? s + "" : s
    }

    function b(t, e) {
        return {
            get: function() {
                return t() ? void delete this.get : (this.get = e).apply(this, arguments)
            }
        }
    }

    function T(t, e) {
        if (e in t) return e;
        for (var n = e[0].toUpperCase() + e.slice(1), i = e, r = Qe.length; r--;)
            if (e = Qe[r] + n, e in t) return e;
        return i
    }

    function k(t, e, n) {
        var i = We.exec(e);
        return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : e
    }

    function C(t, e, n, i, r) {
        for (var o = n === (i ? "border" : "content") ? 4 : "width" === e ? 1 : 0, s = 0; 4 > o; o += 2) "margin" === n && (s += J.css(t, n + be[o], !0, r)), i ? ("content" === n && (s -= J.css(t, "padding" + be[o], !0, r)), "margin" !== n && (s -= J.css(t, "border" + be[o] + "Width", !0, r))) : (s += J.css(t, "padding" + be[o], !0, r), "padding" !== n && (s += J.css(t, "border" + be[o] + "Width", !0, r)));
        return s
    }

    function P(t, e, n) {
        var i = !0,
            r = "width" === e ? t.offsetWidth : t.offsetHeight,
            o = qe(t),
            s = "border-box" === J.css(t, "boxSizing", !1, o);
        if (0 >= r || null == r) {
            if (r = x(t, e, o), (0 > r || null == r) && (r = t.style[e]), He.test(r)) return r;
            i = s && (Z.boxSizingReliable() || r === t.style[e]), r = parseFloat(r) || 0
        }
        return r + C(t, e, n || (s ? "border" : "content"), i, o) + "px"
    }

    function E(t, e) {
        for (var n, i, r, o = [], s = 0, a = t.length; a > s; s++) i = t[s], i.style && (o[s] = ve.get(i, "olddisplay"), n = i.style.display, e ? (o[s] || "none" !== n || (i.style.display = ""), "" === i.style.display && Te(i) && (o[s] = ve.access(i, "olddisplay", w(i.nodeName)))) : (r = Te(i), "none" === n && r || ve.set(i, "olddisplay", r ? n : J.css(i, "display"))));
        for (s = 0; a > s; s++) i = t[s], i.style && (e && "none" !== i.style.display && "" !== i.style.display || (i.style.display = e ? o[s] || "" : "none"));
        return t
    }

    function S(t, e, n, i, r) {
        return new S.prototype.init(t, e, n, i, r)
    }

    function O() {
        return setTimeout(function() {
            Ze = void 0
        }), Ze = J.now()
    }

    function A(t, e) {
        var n, i = 0,
            r = {
                height: t
            };
        for (e = e ? 1 : 0; 4 > i; i += 2 - e) n = be[i], r["margin" + n] = r["padding" + n] = t;
        return e && (r.opacity = r.width = t), r
    }

    function N(t, e, n) {
        for (var i, r = (nn[e] || []).concat(nn["*"]), o = 0, s = r.length; s > o; o++)
            if (i = r[o].call(n, e, t)) return i
    }

    function j(t, e, n) {
        var i, r, o, s, a, u, l, c, h = this,
            p = {}, f = t.style,
            d = t.nodeType && Te(t),
            m = ve.get(t, "fxshow");
        n.queue || (a = J._queueHooks(t, "fx"), null == a.unqueued && (a.unqueued = 0, u = a.empty.fire, a.empty.fire = function() {
            a.unqueued || u()
        }), a.unqueued++, h.always(function() {
            h.always(function() {
                a.unqueued--, J.queue(t, "fx").length || a.empty.fire()
            })
        })), 1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [f.overflow, f.overflowX, f.overflowY], l = J.css(t, "display"), c = "none" === l ? ve.get(t, "olddisplay") || w(t.nodeName) : l, "inline" === c && "none" === J.css(t, "float") && (f.display = "inline-block")), n.overflow && (f.overflow = "hidden", h.always(function() {
            f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
        }));
        for (i in e)
            if (r = e[i], Ke.exec(r)) {
                if (delete e[i], o = o || "toggle" === r, r === (d ? "hide" : "show")) {
                    if ("show" !== r || !m || void 0 === m[i]) continue;
                    d = !0
                }
                p[i] = m && m[i] || J.style(t, i)
            } else l = void 0;
        if (J.isEmptyObject(p)) "inline" === ("none" === l ? w(t.nodeName) : l) && (f.display = l);
        else {
            m ? "hidden" in m && (d = m.hidden) : m = ve.access(t, "fxshow", {}), o && (m.hidden = !d), d ? J(t).show() : h.done(function() {
                J(t).hide()
            }), h.done(function() {
                var e;
                ve.remove(t, "fxshow");
                for (e in p) J.style(t, e, p[e])
            });
            for (i in p) s = N(d ? m[i] : 0, i, h), i in m || (m[i] = s.start, d && (s.end = s.start, s.start = "width" === i || "height" === i ? 1 : 0))
        }
    }

    function M(t, e) {
        var n, i, r, o, s;
        for (n in t)
            if (i = J.camelCase(n), r = e[i], o = t[n], J.isArray(o) && (r = o[1], o = t[n] = o[0]), n !== i && (t[i] = o, delete t[n]), s = J.cssHooks[i], s && "expand" in s) {
                o = s.expand(o), delete t[i];
                for (n in o) n in t || (t[n] = o[n], e[n] = r)
            } else e[i] = r
    }

    function D(t, e, n) {
        var i, r, o = 0,
            s = en.length,
            a = J.Deferred().always(function() {
                delete u.elem
            }),
            u = function() {
                if (r) return !1;
                for (var e = Ze || O(), n = Math.max(0, l.startTime + l.duration - e), i = n / l.duration || 0, o = 1 - i, s = 0, u = l.tweens.length; u > s; s++) l.tweens[s].run(o);
                return a.notifyWith(t, [l, o, n]), 1 > o && u ? n : (a.resolveWith(t, [l]), !1)
            }, l = a.promise({
                elem: t,
                props: J.extend({}, e),
                opts: J.extend(!0, {
                    specialEasing: {}
                }, n),
                originalProperties: e,
                originalOptions: n,
                startTime: Ze || O(),
                duration: n.duration,
                tweens: [],
                createTween: function(e, n) {
                    var i = J.Tween(t, l.opts, e, n, l.opts.specialEasing[e] || l.opts.easing);
                    return l.tweens.push(i), i
                },
                stop: function(e) {
                    var n = 0,
                        i = e ? l.tweens.length : 0;
                    if (r) return this;
                    for (r = !0; i > n; n++) l.tweens[n].run(1);
                    return e ? a.resolveWith(t, [l, e]) : a.rejectWith(t, [l, e]), this
                }
            }),
            c = l.props;
        for (M(c, l.opts.specialEasing); s > o; o++)
            if (i = en[o].call(l, t, c, l.opts)) return i;
        return J.map(c, N, l), J.isFunction(l.opts.start) && l.opts.start.call(t, l), J.fx.timer(J.extend(u, {
            elem: t,
            anim: l,
            queue: l.opts.queue
        })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
    }

    function R(t) {
        return function(e, n) {
            "string" != typeof e && (n = e, e = "*");
            var i, r = 0,
                o = e.toLowerCase().match(fe) || [];
            if (J.isFunction(n))
                for (; i = o[r++];) "+" === i[0] ? (i = i.slice(1) || "*", (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n)
        }
    }

    function L(t, e, n, i) {
        function r(a) {
            var u;
            return o[a] = !0, J.each(t[a] || [], function(t, a) {
                var l = a(e, n, i);
                return "string" != typeof l || s || o[l] ? s ? !(u = l) : void 0 : (e.dataTypes.unshift(l), r(l), !1)
            }), u
        }
        var o = {}, s = t === bn;
        return r(e.dataTypes[0]) || !o["*"] && r("*")
    }

    function I(t, e) {
        var n, i, r = J.ajaxSettings.flatOptions || {};
        for (n in e) void 0 !== e[n] && ((r[n] ? t : i || (i = {}))[n] = e[n]);
        return i && J.extend(!0, t, i), t
    }

    function $(t, e, n) {
        for (var i, r, o, s, a = t.contents, u = t.dataTypes;
            "*" === u[0];) u.shift(), void 0 === i && (i = t.mimeType || e.getResponseHeader("Content-Type"));
        if (i)
            for (r in a)
                if (a[r] && a[r].test(i)) {
                    u.unshift(r);
                    break
                }
        if (u[0] in n) o = u[0];
        else {
            for (r in n) {
                if (!u[0] || t.converters[r + " " + u[0]]) {
                    o = r;
                    break
                }
                s || (s = r)
            }
            o = o || s
        }
        return o ? (o !== u[0] && u.unshift(o), n[o]) : void 0
    }

    function F(t, e, n, i) {
        var r, o, s, a, u, l = {}, c = t.dataTypes.slice();
        if (c[1])
            for (s in t.converters) l[s.toLowerCase()] = t.converters[s];
        for (o = c.shift(); o;)
            if (t.responseFields[o] && (n[t.responseFields[o]] = e), !u && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), u = o, o = c.shift())
                if ("*" === o) o = u;
                else if ("*" !== u && u !== o) {
            if (s = l[u + " " + o] || l["* " + o], !s)
                for (r in l)
                    if (a = r.split(" "), a[1] === o && (s = l[u + " " + a[0]] || l["* " + a[0]])) {
                        s === !0 ? s = l[r] : l[r] !== !0 && (o = a[0], c.unshift(a[1]));
                        break
                    }
            if (s !== !0)
                if (s && t["throws"]) e = s(e);
                else try {
                    e = s(e)
                } catch (h) {
                    return {
                        state: "parsererror",
                        error: s ? h : "No conversion from " + u + " to " + o
                    }
                }
        }
        return {
            state: "success",
            data: e
        }
    }

    function z(t, e, n, i) {
        var r;
        if (J.isArray(e)) J.each(e, function(e, r) {
            n || Pn.test(t) ? i(t, r) : z(t + "[" + ("object" == typeof r ? e : "") + "]", r, n, i)
        });
        else if (n || "object" !== J.type(e)) i(t, e);
        else
            for (r in e) z(t + "[" + r + "]", e[r], n, i)
    }

    function X(t) {
        return J.isWindow(t) ? t : 9 === t.nodeType && t.defaultView
    }
    var H = [],
        q = H.slice,
        Y = H.concat,
        W = H.push,
        B = H.indexOf,
        U = {}, V = U.toString,
        Q = U.hasOwnProperty,
        Z = {}, G = t.document,
        K = "2.1.1",
        J = function(t, e) {
            return new J.fn.init(t, e)
        }, te = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        ee = /^-ms-/,
        ne = /-([\da-z])/gi,
        ie = function(t, e) {
            return e.toUpperCase()
        };
    J.fn = J.prototype = {
        jquery: K,
        constructor: J,
        selector: "",
        length: 0,
        toArray: function() {
            return q.call(this)
        },
        get: function(t) {
            return null != t ? 0 > t ? this[t + this.length] : this[t] : q.call(this)
        },
        pushStack: function(t) {
            var e = J.merge(this.constructor(), t);
            return e.prevObject = this, e.context = this.context, e
        },
        each: function(t, e) {
            return J.each(this, t, e)
        },
        map: function(t) {
            return this.pushStack(J.map(this, function(e, n) {
                return t.call(e, n, e)
            }))
        },
        slice: function() {
            return this.pushStack(q.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(t) {
            var e = this.length,
                n = +t + (0 > t ? e : 0);
            return this.pushStack(n >= 0 && e > n ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: W,
        sort: H.sort,
        splice: H.splice
    }, J.extend = J.fn.extend = function() {
        var t, e, n, i, r, o, s = arguments[0] || {}, a = 1,
            u = arguments.length,
            l = !1;
        for ("boolean" == typeof s && (l = s, s = arguments[a] || {}, a++), "object" == typeof s || J.isFunction(s) || (s = {}), a === u && (s = this, a--); u > a; a++)
            if (null != (t = arguments[a]))
                for (e in t) n = s[e], i = t[e], s !== i && (l && i && (J.isPlainObject(i) || (r = J.isArray(i))) ? (r ? (r = !1, o = n && J.isArray(n) ? n : []) : o = n && J.isPlainObject(n) ? n : {}, s[e] = J.extend(l, o, i)) : void 0 !== i && (s[e] = i));
        return s
    }, J.extend({
        expando: "jQuery" + (K + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(t) {
            throw new Error(t)
        },
        noop: function() {},
        isFunction: function(t) {
            return "function" === J.type(t)
        },
        isArray: Array.isArray,
        isWindow: function(t) {
            return null != t && t === t.window
        },
        isNumeric: function(t) {
            return !J.isArray(t) && t - parseFloat(t) >= 0
        },
        isPlainObject: function(t) {
            return "object" !== J.type(t) || t.nodeType || J.isWindow(t) ? !1 : t.constructor && !Q.call(t.constructor.prototype, "isPrototypeOf") ? !1 : !0
        },
        isEmptyObject: function(t) {
            var e;
            for (e in t) return !1;
            return !0
        },
        type: function(t) {
            return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? U[V.call(t)] || "object" : typeof t
        },
        globalEval: function(t) {
            var e, n = eval;
            t = J.trim(t), t && (1 === t.indexOf("use strict") ? (e = G.createElement("script"), e.text = t, G.head.appendChild(e).parentNode.removeChild(e)) : n(t))
        },
        camelCase: function(t) {
            return t.replace(ee, "ms-").replace(ne, ie)
        },
        nodeName: function(t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
        },
        each: function(t, e, i) {
            var r, o = 0,
                s = t.length,
                a = n(t);
            if (i) {
                if (a)
                    for (; s > o && (r = e.apply(t[o], i), r !== !1); o++);
                else
                    for (o in t)
                        if (r = e.apply(t[o], i), r === !1) break
            } else if (a)
                for (; s > o && (r = e.call(t[o], o, t[o]), r !== !1); o++);
            else
                for (o in t)
                    if (r = e.call(t[o], o, t[o]), r === !1) break; return t
        },
        trim: function(t) {
            return null == t ? "" : (t + "").replace(te, "")
        },
        makeArray: function(t, e) {
            var i = e || [];
            return null != t && (n(Object(t)) ? J.merge(i, "string" == typeof t ? [t] : t) : W.call(i, t)), i
        },
        inArray: function(t, e, n) {
            return null == e ? -1 : B.call(e, t, n)
        },
        merge: function(t, e) {
            for (var n = +e.length, i = 0, r = t.length; n > i; i++) t[r++] = e[i];
            return t.length = r, t
        },
        grep: function(t, e, n) {
            for (var i, r = [], o = 0, s = t.length, a = !n; s > o; o++) i = !e(t[o], o), i !== a && r.push(t[o]);
            return r
        },
        map: function(t, e, i) {
            var r, o = 0,
                s = t.length,
                a = n(t),
                u = [];
            if (a)
                for (; s > o; o++) r = e(t[o], o, i), null != r && u.push(r);
            else
                for (o in t) r = e(t[o], o, i), null != r && u.push(r);
            return Y.apply([], u)
        },
        guid: 1,
        proxy: function(t, e) {
            var n, i, r;
            return "string" == typeof e && (n = t[e], e = t, t = n), J.isFunction(t) ? (i = q.call(arguments, 2), r = function() {
                return t.apply(e || this, i.concat(q.call(arguments)))
            }, r.guid = t.guid = t.guid || J.guid++, r) : void 0
        },
        now: Date.now,
        support: Z
    }), J.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(t, e) {
        U["[object " + e + "]"] = e.toLowerCase()
    });
    var re = function(t) {
        function e(t, e, n, i) {
            var r, o, s, a, u, l, h, f, d, m;
            if ((e ? e.ownerDocument || e : z) !== j && N(e), e = e || j, n = n || [], !t || "string" != typeof t) return n;
            if (1 !== (a = e.nodeType) && 9 !== a) return [];
            if (D && !i) {
                if (r = ye.exec(t))
                    if (s = r[1]) {
                        if (9 === a) {
                            if (o = e.getElementById(s), !o || !o.parentNode) return n;
                            if (o.id === s) return n.push(o), n
                        } else if (e.ownerDocument && (o = e.ownerDocument.getElementById(s)) && $(e, o) && o.id === s) return n.push(o), n
                    } else {
                        if (r[2]) return J.apply(n, e.getElementsByTagName(t)), n;
                        if ((s = r[3]) && x.getElementsByClassName && e.getElementsByClassName) return J.apply(n, e.getElementsByClassName(s)), n
                    }
                if (x.qsa && (!R || !R.test(t))) {
                    if (f = h = F, d = e, m = 9 === a && t, 1 === a && "object" !== e.nodeName.toLowerCase()) {
                        for (l = C(t), (h = e.getAttribute("id")) ? f = h.replace(we, "\\$&") : e.setAttribute("id", f), f = "[id='" + f + "'] ", u = l.length; u--;) l[u] = f + p(l[u]);
                        d = _e.test(t) && c(e.parentNode) || e, m = l.join(",")
                    }
                    if (m) try {
                        return J.apply(n, d.querySelectorAll(m)), n
                    } catch (g) {} finally {
                        h || e.removeAttribute("id")
                    }
                }
            }
            return E(t.replace(ue, "$1"), e, n, i)
        }

        function n() {
            function t(n, i) {
                return e.push(n + " ") > b.cacheLength && delete t[e.shift()], t[n + " "] = i
            }
            var e = [];
            return t
        }

        function i(t) {
            return t[F] = !0, t
        }

        function r(t) {
            var e = j.createElement("div");
            try {
                return !!t(e)
            } catch (n) {
                return !1
            } finally {
                e.parentNode && e.parentNode.removeChild(e), e = null
            }
        }

        function o(t, e) {
            for (var n = t.split("|"), i = t.length; i--;) b.attrHandle[n[i]] = e
        }

        function s(t, e) {
            var n = e && t,
                i = n && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || V) - (~t.sourceIndex || V);
            if (i) return i;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === e) return -1;
            return t ? 1 : -1
        }

        function a(t) {
            return function(e) {
                var n = e.nodeName.toLowerCase();
                return "input" === n && e.type === t
            }
        }

        function u(t) {
            return function(e) {
                var n = e.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && e.type === t
            }
        }

        function l(t) {
            return i(function(e) {
                return e = +e, i(function(n, i) {
                    for (var r, o = t([], n.length, e), s = o.length; s--;) n[r = o[s]] && (n[r] = !(i[r] = n[r]))
                })
            })
        }

        function c(t) {
            return t && typeof t.getElementsByTagName !== U && t
        }

        function h() {}

        function p(t) {
            for (var e = 0, n = t.length, i = ""; n > e; e++) i += t[e].value;
            return i
        }

        function f(t, e, n) {
            var i = e.dir,
                r = n && "parentNode" === i,
                o = H++;
            return e.first ? function(e, n, o) {
                for (; e = e[i];)
                    if (1 === e.nodeType || r) return t(e, n, o)
            } : function(e, n, s) {
                var a, u, l = [X, o];
                if (s) {
                    for (; e = e[i];)
                        if ((1 === e.nodeType || r) && t(e, n, s)) return !0
                } else
                    for (; e = e[i];)
                        if (1 === e.nodeType || r) {
                            if (u = e[F] || (e[F] = {}), (a = u[i]) && a[0] === X && a[1] === o) return l[2] = a[2];
                            if (u[i] = l, l[2] = t(e, n, s)) return !0
                        }
            }
        }

        function d(t) {
            return t.length > 1 ? function(e, n, i) {
                for (var r = t.length; r--;)
                    if (!t[r](e, n, i)) return !1;
                return !0
            } : t[0]
        }

        function m(t, n, i) {
            for (var r = 0, o = n.length; o > r; r++) e(t, n[r], i);
            return i
        }

        function g(t, e, n, i, r) {
            for (var o, s = [], a = 0, u = t.length, l = null != e; u > a; a++)(o = t[a]) && (!n || n(o, i, r)) && (s.push(o), l && e.push(a));
            return s
        }

        function v(t, e, n, r, o, s) {
            return r && !r[F] && (r = v(r)), o && !o[F] && (o = v(o, s)), i(function(i, s, a, u) {
                var l, c, h, p = [],
                    f = [],
                    d = s.length,
                    v = i || m(e || "*", a.nodeType ? [a] : a, []),
                    y = !t || !i && e ? v : g(v, p, t, a, u),
                    _ = n ? o || (i ? t : d || r) ? [] : s : y;
                if (n && n(y, _, a, u), r)
                    for (l = g(_, f), r(l, [], a, u), c = l.length; c--;)(h = l[c]) && (_[f[c]] = !(y[f[c]] = h));
                if (i) {
                    if (o || t) {
                        if (o) {
                            for (l = [], c = _.length; c--;)(h = _[c]) && l.push(y[c] = h);
                            o(null, _ = [], l, u)
                        }
                        for (c = _.length; c--;)(h = _[c]) && (l = o ? ee.call(i, h) : p[c]) > -1 && (i[l] = !(s[l] = h))
                    }
                } else _ = g(_ === s ? _.splice(d, _.length) : _), o ? o(null, s, _, u) : J.apply(s, _)
            })
        }

        function y(t) {
            for (var e, n, i, r = t.length, o = b.relative[t[0].type], s = o || b.relative[" "], a = o ? 1 : 0, u = f(function(t) {
                    return t === e
                }, s, !0), l = f(function(t) {
                    return ee.call(e, t) > -1
                }, s, !0), c = [
                    function(t, n, i) {
                        return !o && (i || n !== S) || ((e = n).nodeType ? u(t, n, i) : l(t, n, i))
                    }
                ]; r > a; a++)
                if (n = b.relative[t[a].type]) c = [f(d(c), n)];
                else {
                    if (n = b.filter[t[a].type].apply(null, t[a].matches), n[F]) {
                        for (i = ++a; r > i && !b.relative[t[i].type]; i++);
                        return v(a > 1 && d(c), a > 1 && p(t.slice(0, a - 1).concat({
                            value: " " === t[a - 2].type ? "*" : ""
                        })).replace(ue, "$1"), n, i > a && y(t.slice(a, i)), r > i && y(t = t.slice(i)), r > i && p(t))
                    }
                    c.push(n)
                }
            return d(c)
        }

        function _(t, n) {
            var r = n.length > 0,
                o = t.length > 0,
                s = function(i, s, a, u, l) {
                    var c, h, p, f = 0,
                        d = "0",
                        m = i && [],
                        v = [],
                        y = S,
                        _ = i || o && b.find.TAG("*", l),
                        w = X += null == y ? 1 : Math.random() || .1,
                        x = _.length;
                    for (l && (S = s !== j && s); d !== x && null != (c = _[d]); d++) {
                        if (o && c) {
                            for (h = 0; p = t[h++];)
                                if (p(c, s, a)) {
                                    u.push(c);
                                    break
                                }
                            l && (X = w)
                        }
                        r && ((c = !p && c) && f--, i && m.push(c))
                    }
                    if (f += d, r && d !== f) {
                        for (h = 0; p = n[h++];) p(m, v, s, a);
                        if (i) {
                            if (f > 0)
                                for (; d--;) m[d] || v[d] || (v[d] = G.call(u));
                            v = g(v)
                        }
                        J.apply(u, v), l && !i && v.length > 0 && f + n.length > 1 && e.uniqueSort(u)
                    }
                    return l && (X = w, S = y), m
                };
            return r ? i(s) : s
        }
        var w, x, b, T, k, C, P, E, S, O, A, N, j, M, D, R, L, I, $, F = "sizzle" + -new Date,
            z = t.document,
            X = 0,
            H = 0,
            q = n(),
            Y = n(),
            W = n(),
            B = function(t, e) {
                return t === e && (A = !0), 0
            }, U = "undefined",
            V = 1 << 31,
            Q = {}.hasOwnProperty,
            Z = [],
            G = Z.pop,
            K = Z.push,
            J = Z.push,
            te = Z.slice,
            ee = Z.indexOf || function(t) {
                for (var e = 0, n = this.length; n > e; e++)
                    if (this[e] === t) return e;
                return -1
            }, ne = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ie = "[\\x20\\t\\r\\n\\f]",
            re = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            oe = re.replace("w", "w#"),
            se = "\\[" + ie + "*(" + re + ")(?:" + ie + "*([*^$|!~]?=)" + ie + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + oe + "))|)" + ie + "*\\]",
            ae = ":(" + re + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + se + ")*)|.*)\\)|)",
            ue = new RegExp("^" + ie + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ie + "+$", "g"),
            le = new RegExp("^" + ie + "*," + ie + "*"),
            ce = new RegExp("^" + ie + "*([>+~]|" + ie + ")" + ie + "*"),
            he = new RegExp("=" + ie + "*([^\\]'\"]*?)" + ie + "*\\]", "g"),
            pe = new RegExp(ae),
            fe = new RegExp("^" + oe + "$"),
            de = {
                ID: new RegExp("^#(" + re + ")"),
                CLASS: new RegExp("^\\.(" + re + ")"),
                TAG: new RegExp("^(" + re.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + se),
                PSEUDO: new RegExp("^" + ae),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ie + "*(even|odd|(([+-]|)(\\d*)n|)" + ie + "*(?:([+-]|)" + ie + "*(\\d+)|))" + ie + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + ne + ")$", "i"),
                needsContext: new RegExp("^" + ie + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ie + "*((?:-\\d)?\\d*)" + ie + "*\\)|)(?=[^-]|$)", "i")
            }, me = /^(?:input|select|textarea|button)$/i,
            ge = /^h\d$/i,
            ve = /^[^{]+\{\s*\[native \w/,
            ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            _e = /[+~]/,
            we = /'|\\/g,
            xe = new RegExp("\\\\([\\da-f]{1,6}" + ie + "?|(" + ie + ")|.)", "ig"),
            be = function(t, e, n) {
                var i = "0x" + e - 65536;
                return i !== i || n ? e : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
            };
        try {
            J.apply(Z = te.call(z.childNodes), z.childNodes), Z[z.childNodes.length].nodeType
        } catch (Te) {
            J = {
                apply: Z.length ? function(t, e) {
                    K.apply(t, te.call(e))
                } : function(t, e) {
                    for (var n = t.length, i = 0; t[n++] = e[i++];);
                    t.length = n - 1
                }
            }
        }
        x = e.support = {}, k = e.isXML = function(t) {
            var e = t && (t.ownerDocument || t).documentElement;
            return e ? "HTML" !== e.nodeName : !1
        }, N = e.setDocument = function(t) {
            var e, n = t ? t.ownerDocument || t : z,
                i = n.defaultView;
            return n !== j && 9 === n.nodeType && n.documentElement ? (j = n, M = n.documentElement, D = !k(n), i && i !== i.top && (i.addEventListener ? i.addEventListener("unload", function() {
                N()
            }, !1) : i.attachEvent && i.attachEvent("onunload", function() {
                N()
            })), x.attributes = r(function(t) {
                return t.className = "i", !t.getAttribute("className")
            }), x.getElementsByTagName = r(function(t) {
                return t.appendChild(n.createComment("")), !t.getElementsByTagName("*").length
            }), x.getElementsByClassName = ve.test(n.getElementsByClassName) && r(function(t) {
                return t.innerHTML = "<div class='a'></div><div class='a i'></div>", t.firstChild.className = "i", 2 === t.getElementsByClassName("i").length
            }), x.getById = r(function(t) {
                return M.appendChild(t).id = F, !n.getElementsByName || !n.getElementsByName(F).length
            }), x.getById ? (b.find.ID = function(t, e) {
                if (typeof e.getElementById !== U && D) {
                    var n = e.getElementById(t);
                    return n && n.parentNode ? [n] : []
                }
            }, b.filter.ID = function(t) {
                var e = t.replace(xe, be);
                return function(t) {
                    return t.getAttribute("id") === e
                }
            }) : (delete b.find.ID, b.filter.ID = function(t) {
                var e = t.replace(xe, be);
                return function(t) {
                    var n = typeof t.getAttributeNode !== U && t.getAttributeNode("id");
                    return n && n.value === e
                }
            }), b.find.TAG = x.getElementsByTagName ? function(t, e) {
                return typeof e.getElementsByTagName !== U ? e.getElementsByTagName(t) : void 0
            } : function(t, e) {
                var n, i = [],
                    r = 0,
                    o = e.getElementsByTagName(t);
                if ("*" === t) {
                    for (; n = o[r++];) 1 === n.nodeType && i.push(n);
                    return i
                }
                return o
            }, b.find.CLASS = x.getElementsByClassName && function(t, e) {
                return typeof e.getElementsByClassName !== U && D ? e.getElementsByClassName(t) : void 0
            }, L = [], R = [], (x.qsa = ve.test(n.querySelectorAll)) && (r(function(t) {
                t.innerHTML = "<select msallowclip=''><option selected=''></option></select>", t.querySelectorAll("[msallowclip^='']").length && R.push("[*^$]=" + ie + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || R.push("\\[" + ie + "*(?:value|" + ne + ")"), t.querySelectorAll(":checked").length || R.push(":checked")
            }), r(function(t) {
                var e = n.createElement("input");
                e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && R.push("name" + ie + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || R.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), R.push(",.*:")
            })), (x.matchesSelector = ve.test(I = M.matches || M.webkitMatchesSelector || M.mozMatchesSelector || M.oMatchesSelector || M.msMatchesSelector)) && r(function(t) {
                x.disconnectedMatch = I.call(t, "div"), I.call(t, "[s!='']:x"), L.push("!=", ae)
            }), R = R.length && new RegExp(R.join("|")), L = L.length && new RegExp(L.join("|")), e = ve.test(M.compareDocumentPosition), $ = e || ve.test(M.contains) ? function(t, e) {
                var n = 9 === t.nodeType ? t.documentElement : t,
                    i = e && e.parentNode;
                return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
            } : function(t, e) {
                if (e)
                    for (; e = e.parentNode;)
                        if (e === t) return !0;
                return !1
            }, B = e ? function(t, e) {
                if (t === e) return A = !0, 0;
                var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
                return i ? i : (i = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & i || !x.sortDetached && e.compareDocumentPosition(t) === i ? t === n || t.ownerDocument === z && $(z, t) ? -1 : e === n || e.ownerDocument === z && $(z, e) ? 1 : O ? ee.call(O, t) - ee.call(O, e) : 0 : 4 & i ? -1 : 1)
            } : function(t, e) {
                if (t === e) return A = !0, 0;
                var i, r = 0,
                    o = t.parentNode,
                    a = e.parentNode,
                    u = [t],
                    l = [e];
                if (!o || !a) return t === n ? -1 : e === n ? 1 : o ? -1 : a ? 1 : O ? ee.call(O, t) - ee.call(O, e) : 0;
                if (o === a) return s(t, e);
                for (i = t; i = i.parentNode;) u.unshift(i);
                for (i = e; i = i.parentNode;) l.unshift(i);
                for (; u[r] === l[r];) r++;
                return r ? s(u[r], l[r]) : u[r] === z ? -1 : l[r] === z ? 1 : 0
            }, n) : j
        }, e.matches = function(t, n) {
            return e(t, null, null, n)
        }, e.matchesSelector = function(t, n) {
            if ((t.ownerDocument || t) !== j && N(t), n = n.replace(he, "='$1']"), !(!x.matchesSelector || !D || L && L.test(n) || R && R.test(n))) try {
                var i = I.call(t, n);
                if (i || x.disconnectedMatch || t.document && 11 !== t.document.nodeType) return i
            } catch (r) {}
            return e(n, j, null, [t]).length > 0
        }, e.contains = function(t, e) {
            return (t.ownerDocument || t) !== j && N(t), $(t, e)
        }, e.attr = function(t, e) {
            (t.ownerDocument || t) !== j && N(t);
            var n = b.attrHandle[e.toLowerCase()],
                i = n && Q.call(b.attrHandle, e.toLowerCase()) ? n(t, e, !D) : void 0;
            return void 0 !== i ? i : x.attributes || !D ? t.getAttribute(e) : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
        }, e.error = function(t) {
            throw new Error("Syntax error, unrecognized expression: " + t)
        }, e.uniqueSort = function(t) {
            var e, n = [],
                i = 0,
                r = 0;
            if (A = !x.detectDuplicates, O = !x.sortStable && t.slice(0), t.sort(B), A) {
                for (; e = t[r++];) e === t[r] && (i = n.push(r));
                for (; i--;) t.splice(n[i], 1)
            }
            return O = null, t
        }, T = e.getText = function(t) {
            var e, n = "",
                i = 0,
                r = t.nodeType;
            if (r) {
                if (1 === r || 9 === r || 11 === r) {
                    if ("string" == typeof t.textContent) return t.textContent;
                    for (t = t.firstChild; t; t = t.nextSibling) n += T(t)
                } else if (3 === r || 4 === r) return t.nodeValue
            } else
                for (; e = t[i++];) n += T(e);
            return n
        }, b = e.selectors = {
            cacheLength: 50,
            createPseudo: i,
            match: de,
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
                ATTR: function(t) {
                    return t[1] = t[1].replace(xe, be), t[3] = (t[3] || t[4] || t[5] || "").replace(xe, be), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                },
                CHILD: function(t) {
                    return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
                },
                PSEUDO: function(t) {
                    var e, n = !t[6] && t[2];
                    return de.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && pe.test(n) && (e = C(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
                }
            },
            filter: {
                TAG: function(t) {
                    var e = t.replace(xe, be).toLowerCase();
                    return "*" === t ? function() {
                        return !0
                    } : function(t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e
                    }
                },
                CLASS: function(t) {
                    var e = q[t + " "];
                    return e || (e = new RegExp("(^|" + ie + ")" + t + "(" + ie + "|$)")) && q(t, function(t) {
                        return e.test("string" == typeof t.className && t.className || typeof t.getAttribute !== U && t.getAttribute("class") || "")
                    })
                },
                ATTR: function(t, n, i) {
                    return function(r) {
                        var o = e.attr(r, t);
                        return null == o ? "!=" === n : n ? (o += "", "=" === n ? o === i : "!=" === n ? o !== i : "^=" === n ? i && 0 === o.indexOf(i) : "*=" === n ? i && o.indexOf(i) > -1 : "$=" === n ? i && o.slice(-i.length) === i : "~=" === n ? (" " + o + " ").indexOf(i) > -1 : "|=" === n ? o === i || o.slice(0, i.length + 1) === i + "-" : !1) : !0
                    }
                },
                CHILD: function(t, e, n, i, r) {
                    var o = "nth" !== t.slice(0, 3),
                        s = "last" !== t.slice(-4),
                        a = "of-type" === e;
                    return 1 === i && 0 === r ? function(t) {
                        return !!t.parentNode
                    } : function(e, n, u) {
                        var l, c, h, p, f, d, m = o !== s ? "nextSibling" : "previousSibling",
                            g = e.parentNode,
                            v = a && e.nodeName.toLowerCase(),
                            y = !u && !a;
                        if (g) {
                            if (o) {
                                for (; m;) {
                                    for (h = e; h = h[m];)
                                        if (a ? h.nodeName.toLowerCase() === v : 1 === h.nodeType) return !1;
                                    d = m = "only" === t && !d && "nextSibling"
                                }
                                return !0
                            }
                            if (d = [s ? g.firstChild : g.lastChild], s && y) {
                                for (c = g[F] || (g[F] = {}), l = c[t] || [], f = l[0] === X && l[1], p = l[0] === X && l[2], h = f && g.childNodes[f]; h = ++f && h && h[m] || (p = f = 0) || d.pop();)
                                    if (1 === h.nodeType && ++p && h === e) {
                                        c[t] = [X, f, p];
                                        break
                                    }
                            } else if (y && (l = (e[F] || (e[F] = {}))[t]) && l[0] === X) p = l[1];
                            else
                                for (;
                                    (h = ++f && h && h[m] || (p = f = 0) || d.pop()) && ((a ? h.nodeName.toLowerCase() !== v : 1 !== h.nodeType) || !++p || (y && ((h[F] || (h[F] = {}))[t] = [X, p]), h !== e)););
                            return p -= r, p === i || p % i === 0 && p / i >= 0
                        }
                    }
                },
                PSEUDO: function(t, n) {
                    var r, o = b.pseudos[t] || b.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                    return o[F] ? o(n) : o.length > 1 ? (r = [t, t, "", n], b.setFilters.hasOwnProperty(t.toLowerCase()) ? i(function(t, e) {
                        for (var i, r = o(t, n), s = r.length; s--;) i = ee.call(t, r[s]), t[i] = !(e[i] = r[s])
                    }) : function(t) {
                        return o(t, 0, r)
                    }) : o
                }
            },
            pseudos: {
                not: i(function(t) {
                    var e = [],
                        n = [],
                        r = P(t.replace(ue, "$1"));
                    return r[F] ? i(function(t, e, n, i) {
                        for (var o, s = r(t, null, i, []), a = t.length; a--;)(o = s[a]) && (t[a] = !(e[a] = o))
                    }) : function(t, i, o) {
                        return e[0] = t, r(e, null, o, n), !n.pop()
                    }
                }),
                has: i(function(t) {
                    return function(n) {
                        return e(t, n).length > 0
                    }
                }),
                contains: i(function(t) {
                    return function(e) {
                        return (e.textContent || e.innerText || T(e)).indexOf(t) > -1
                    }
                }),
                lang: i(function(t) {
                    return fe.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(xe, be).toLowerCase(),
                    function(e) {
                        var n;
                        do
                            if (n = D ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return n = n.toLowerCase(), n === t || 0 === n.indexOf(t + "-"); while ((e = e.parentNode) && 1 === e.nodeType);
                        return !1
                    }
                }),
                target: function(e) {
                    var n = t.location && t.location.hash;
                    return n && n.slice(1) === e.id
                },
                root: function(t) {
                    return t === M
                },
                focus: function(t) {
                    return t === j.activeElement && (!j.hasFocus || j.hasFocus()) && !! (t.type || t.href || ~t.tabIndex)
                },
                enabled: function(t) {
                    return t.disabled === !1
                },
                disabled: function(t) {
                    return t.disabled === !0
                },
                checked: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && !! t.checked || "option" === e && !! t.selected
                },
                selected: function(t) {
                    return t.parentNode && t.parentNode.selectedIndex, t.selected === !0
                },
                empty: function(t) {
                    for (t = t.firstChild; t; t = t.nextSibling)
                        if (t.nodeType < 6) return !1;
                    return !0
                },
                parent: function(t) {
                    return !b.pseudos.empty(t)
                },
                header: function(t) {
                    return ge.test(t.nodeName)
                },
                input: function(t) {
                    return me.test(t.nodeName)
                },
                button: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && "button" === t.type || "button" === e
                },
                text: function(t) {
                    var e;
                    return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                },
                first: l(function() {
                    return [0]
                }),
                last: l(function(t, e) {
                    return [e - 1]
                }),
                eq: l(function(t, e, n) {
                    return [0 > n ? n + e : n]
                }),
                even: l(function(t, e) {
                    for (var n = 0; e > n; n += 2) t.push(n);
                    return t
                }),
                odd: l(function(t, e) {
                    for (var n = 1; e > n; n += 2) t.push(n);
                    return t
                }),
                lt: l(function(t, e, n) {
                    for (var i = 0 > n ? n + e : n; --i >= 0;) t.push(i);
                    return t
                }),
                gt: l(function(t, e, n) {
                    for (var i = 0 > n ? n + e : n; ++i < e;) t.push(i);
                    return t
                })
            }
        }, b.pseudos.nth = b.pseudos.eq;
        for (w in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) b.pseudos[w] = a(w);
        for (w in {
            submit: !0,
            reset: !0
        }) b.pseudos[w] = u(w);
        return h.prototype = b.filters = b.pseudos, b.setFilters = new h, C = e.tokenize = function(t, n) {
            var i, r, o, s, a, u, l, c = Y[t + " "];
            if (c) return n ? 0 : c.slice(0);
            for (a = t, u = [], l = b.preFilter; a;) {
                (!i || (r = le.exec(a))) && (r && (a = a.slice(r[0].length) || a), u.push(o = [])), i = !1, (r = ce.exec(a)) && (i = r.shift(), o.push({
                    value: i,
                    type: r[0].replace(ue, " ")
                }), a = a.slice(i.length));
                for (s in b.filter)!(r = de[s].exec(a)) || l[s] && !(r = l[s](r)) || (i = r.shift(), o.push({
                    value: i,
                    type: s,
                    matches: r
                }), a = a.slice(i.length));
                if (!i) break
            }
            return n ? a.length : a ? e.error(t) : Y(t, u).slice(0)
        }, P = e.compile = function(t, e) {
            var n, i = [],
                r = [],
                o = W[t + " "];
            if (!o) {
                for (e || (e = C(t)), n = e.length; n--;) o = y(e[n]), o[F] ? i.push(o) : r.push(o);
                o = W(t, _(r, i)), o.selector = t
            }
            return o
        }, E = e.select = function(t, e, n, i) {
            var r, o, s, a, u, l = "function" == typeof t && t,
                h = !i && C(t = l.selector || t);
            if (n = n || [], 1 === h.length) {
                if (o = h[0] = h[0].slice(0), o.length > 2 && "ID" === (s = o[0]).type && x.getById && 9 === e.nodeType && D && b.relative[o[1].type]) {
                    if (e = (b.find.ID(s.matches[0].replace(xe, be), e) || [])[0], !e) return n;
                    l && (e = e.parentNode), t = t.slice(o.shift().value.length)
                }
                for (r = de.needsContext.test(t) ? 0 : o.length; r-- && (s = o[r], !b.relative[a = s.type]);)
                    if ((u = b.find[a]) && (i = u(s.matches[0].replace(xe, be), _e.test(o[0].type) && c(e.parentNode) || e))) {
                        if (o.splice(r, 1), t = i.length && p(o), !t) return J.apply(n, i), n;
                        break
                    }
            }
            return (l || P(t, h))(i, e, !D, n, _e.test(t) && c(e.parentNode) || e), n
        }, x.sortStable = F.split("").sort(B).join("") === F, x.detectDuplicates = !! A, N(), x.sortDetached = r(function(t) {
            return 1 & t.compareDocumentPosition(j.createElement("div"))
        }), r(function(t) {
            return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
        }) || o("type|href|height|width", function(t, e, n) {
            return n ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
        }), x.attributes && r(function(t) {
            return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
        }) || o("value", function(t, e, n) {
            return n || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
        }), r(function(t) {
            return null == t.getAttribute("disabled")
        }) || o(ne, function(t, e, n) {
            var i;
            return n ? void 0 : t[e] === !0 ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
        }), e
    }(t);
    J.find = re, J.expr = re.selectors, J.expr[":"] = J.expr.pseudos, J.unique = re.uniqueSort, J.text = re.getText, J.isXMLDoc = re.isXML, J.contains = re.contains;
    var oe = J.expr.match.needsContext,
        se = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        ae = /^.[^:#\[\.,]*$/;
    J.filter = function(t, e, n) {
        var i = e[0];
        return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? J.find.matchesSelector(i, t) ? [i] : [] : J.find.matches(t, J.grep(e, function(t) {
            return 1 === t.nodeType
        }))
    }, J.fn.extend({
        find: function(t) {
            var e, n = this.length,
                i = [],
                r = this;
            if ("string" != typeof t) return this.pushStack(J(t).filter(function() {
                for (e = 0; n > e; e++)
                    if (J.contains(r[e], this)) return !0
            }));
            for (e = 0; n > e; e++) J.find(t, r[e], i);
            return i = this.pushStack(n > 1 ? J.unique(i) : i), i.selector = this.selector ? this.selector + " " + t : t, i
        },
        filter: function(t) {
            return this.pushStack(i(this, t || [], !1))
        },
        not: function(t) {
            return this.pushStack(i(this, t || [], !0))
        },
        is: function(t) {
            return !!i(this, "string" == typeof t && oe.test(t) ? J(t) : t || [], !1).length
        }
    });
    var ue, le = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        ce = J.fn.init = function(t, e) {
            var n, i;
            if (!t) return this;
            if ("string" == typeof t) {
                if (n = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : le.exec(t), !n || !n[1] && e) return !e || e.jquery ? (e || ue).find(t) : this.constructor(e).find(t);
                if (n[1]) {
                    if (e = e instanceof J ? e[0] : e, J.merge(this, J.parseHTML(n[1], e && e.nodeType ? e.ownerDocument || e : G, !0)), se.test(n[1]) && J.isPlainObject(e))
                        for (n in e) J.isFunction(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
                    return this
                }
                return i = G.getElementById(n[2]), i && i.parentNode && (this.length = 1, this[0] = i), this.context = G, this.selector = t, this
            }
            return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : J.isFunction(t) ? "undefined" != typeof ue.ready ? ue.ready(t) : t(J) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), J.makeArray(t, this))
        };
    ce.prototype = J.fn, ue = J(G);
    var he = /^(?:parents|prev(?:Until|All))/,
        pe = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    J.extend({
        dir: function(t, e, n) {
            for (var i = [], r = void 0 !== n;
                (t = t[e]) && 9 !== t.nodeType;)
                if (1 === t.nodeType) {
                    if (r && J(t).is(n)) break;
                    i.push(t)
                }
            return i
        },
        sibling: function(t, e) {
            for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
            return n
        }
    }), J.fn.extend({
        has: function(t) {
            var e = J(t, this),
                n = e.length;
            return this.filter(function() {
                for (var t = 0; n > t; t++)
                    if (J.contains(this, e[t])) return !0
            })
        },
        closest: function(t, e) {
            for (var n, i = 0, r = this.length, o = [], s = oe.test(t) || "string" != typeof t ? J(t, e || this.context) : 0; r > i; i++)
                for (n = this[i]; n && n !== e; n = n.parentNode)
                    if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && J.find.matchesSelector(n, t))) {
                        o.push(n);
                        break
                    }
            return this.pushStack(o.length > 1 ? J.unique(o) : o)
        },
        index: function(t) {
            return t ? "string" == typeof t ? B.call(J(t), this[0]) : B.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(t, e) {
            return this.pushStack(J.unique(J.merge(this.get(), J(t, e))))
        },
        addBack: function(t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }
    }), J.each({
        parent: function(t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null
        },
        parents: function(t) {
            return J.dir(t, "parentNode")
        },
        parentsUntil: function(t, e, n) {
            return J.dir(t, "parentNode", n)
        },
        next: function(t) {
            return r(t, "nextSibling")
        },
        prev: function(t) {
            return r(t, "previousSibling")
        },
        nextAll: function(t) {
            return J.dir(t, "nextSibling")
        },
        prevAll: function(t) {
            return J.dir(t, "previousSibling")
        },
        nextUntil: function(t, e, n) {
            return J.dir(t, "nextSibling", n)
        },
        prevUntil: function(t, e, n) {
            return J.dir(t, "previousSibling", n)
        },
        siblings: function(t) {
            return J.sibling((t.parentNode || {}).firstChild, t)
        },
        children: function(t) {
            return J.sibling(t.firstChild)
        },
        contents: function(t) {
            return t.contentDocument || J.merge([], t.childNodes)
        }
    }, function(t, e) {
        J.fn[t] = function(n, i) {
            var r = J.map(this, e, n);
            return "Until" !== t.slice(-5) && (i = n), i && "string" == typeof i && (r = J.filter(i, r)), this.length > 1 && (pe[t] || J.unique(r), he.test(t) && r.reverse()), this.pushStack(r)
        }
    });
    var fe = /\S+/g,
        de = {};
    J.Callbacks = function(t) {
        t = "string" == typeof t ? de[t] || o(t) : J.extend({}, t);
        var e, n, i, r, s, a, u = [],
            l = !t.once && [],
            c = function(o) {
                for (e = t.memory && o, n = !0, a = r || 0, r = 0, s = u.length, i = !0; u && s > a; a++)
                    if (u[a].apply(o[0], o[1]) === !1 && t.stopOnFalse) {
                        e = !1;
                        break
                    }
                i = !1, u && (l ? l.length && c(l.shift()) : e ? u = [] : h.disable())
            }, h = {
                add: function() {
                    if (u) {
                        var n = u.length;
                        ! function o(e) {
                            J.each(e, function(e, n) {
                                var i = J.type(n);
                                "function" === i ? t.unique && h.has(n) || u.push(n) : n && n.length && "string" !== i && o(n)
                            })
                        }(arguments), i ? s = u.length : e && (r = n, c(e))
                    }
                    return this
                },
                remove: function() {
                    return u && J.each(arguments, function(t, e) {
                        for (var n;
                            (n = J.inArray(e, u, n)) > -1;) u.splice(n, 1), i && (s >= n && s--, a >= n && a--)
                    }), this
                },
                has: function(t) {
                    return t ? J.inArray(t, u) > -1 : !(!u || !u.length)
                },
                empty: function() {
                    return u = [], s = 0, this
                },
                disable: function() {
                    return u = l = e = void 0, this
                },
                disabled: function() {
                    return !u
                },
                lock: function() {
                    return l = void 0, e || h.disable(), this
                },
                locked: function() {
                    return !l
                },
                fireWith: function(t, e) {
                    return !u || n && !l || (e = e || [], e = [t, e.slice ? e.slice() : e], i ? l.push(e) : c(e)), this
                },
                fire: function() {
                    return h.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!n
                }
            };
        return h
    }, J.extend({
        Deferred: function(t) {
            var e = [
                ["resolve", "done", J.Callbacks("once memory"), "resolved"],
                ["reject", "fail", J.Callbacks("once memory"), "rejected"],
                ["notify", "progress", J.Callbacks("memory")]
            ],
                n = "pending",
                i = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        return r.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var t = arguments;
                        return J.Deferred(function(n) {
                            J.each(e, function(e, o) {
                                var s = J.isFunction(t[e]) && t[e];
                                r[o[1]](function() {
                                    var t = s && s.apply(this, arguments);
                                    t && J.isFunction(t.promise) ? t.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o[0] + "With"](this === i ? n.promise() : this, s ? [t] : arguments)
                                })
                            }), t = null
                        }).promise()
                    },
                    promise: function(t) {
                        return null != t ? J.extend(t, i) : i
                    }
                }, r = {};
            return i.pipe = i.then, J.each(e, function(t, o) {
                var s = o[2],
                    a = o[3];
                i[o[1]] = s.add, a && s.add(function() {
                    n = a
                }, e[1 ^ t][2].disable, e[2][2].lock), r[o[0]] = function() {
                    return r[o[0] + "With"](this === r ? i : this, arguments), this
                }, r[o[0] + "With"] = s.fireWith
            }), i.promise(r), t && t.call(r, r), r
        },
        when: function(t) {
            var e, n, i, r = 0,
                o = q.call(arguments),
                s = o.length,
                a = 1 !== s || t && J.isFunction(t.promise) ? s : 0,
                u = 1 === a ? t : J.Deferred(),
                l = function(t, n, i) {
                    return function(r) {
                        n[t] = this, i[t] = arguments.length > 1 ? q.call(arguments) : r, i === e ? u.notifyWith(n, i) : --a || u.resolveWith(n, i)
                    }
                };
            if (s > 1)
                for (e = new Array(s), n = new Array(s), i = new Array(s); s > r; r++) o[r] && J.isFunction(o[r].promise) ? o[r].promise().done(l(r, i, o)).fail(u.reject).progress(l(r, n, e)) : --a;
            return a || u.resolveWith(i, o), u.promise()
        }
    });
    var me;
    J.fn.ready = function(t) {
        return J.ready.promise().done(t), this
    }, J.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(t) {
            t ? J.readyWait++ : J.ready(!0)
        },
        ready: function(t) {
            (t === !0 ? --J.readyWait : J.isReady) || (J.isReady = !0, t !== !0 && --J.readyWait > 0 || (me.resolveWith(G, [J]), J.fn.triggerHandler && (J(G).triggerHandler("ready"), J(G).off("ready"))))
        }
    }), J.ready.promise = function(e) {
        return me || (me = J.Deferred(), "complete" === G.readyState ? setTimeout(J.ready) : (G.addEventListener("DOMContentLoaded", s, !1), t.addEventListener("load", s, !1))), me.promise(e)
    }, J.ready.promise();
    var ge = J.access = function(t, e, n, i, r, o, s) {
        var a = 0,
            u = t.length,
            l = null == n;
        if ("object" === J.type(n)) {
            r = !0;
            for (a in n) J.access(t, e, a, n[a], !0, o, s)
        } else if (void 0 !== i && (r = !0, J.isFunction(i) || (s = !0), l && (s ? (e.call(t, i), e = null) : (l = e, e = function(t, e, n) {
            return l.call(J(t), n)
        })), e))
            for (; u > a; a++) e(t[a], n, s ? i : i.call(t[a], a, e(t[a], n)));
        return r ? t : l ? e.call(t) : u ? e(t[0], n) : o
    };
    J.acceptData = function(t) {
        return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
    }, a.uid = 1, a.accepts = J.acceptData, a.prototype = {
        key: function(t) {
            if (!a.accepts(t)) return 0;
            var e = {}, n = t[this.expando];
            if (!n) {
                n = a.uid++;
                try {
                    e[this.expando] = {
                        value: n
                    }, Object.defineProperties(t, e)
                } catch (i) {
                    e[this.expando] = n, J.extend(t, e)
                }
            }
            return this.cache[n] || (this.cache[n] = {}), n
        },
        set: function(t, e, n) {
            var i, r = this.key(t),
                o = this.cache[r];
            if ("string" == typeof e) o[e] = n;
            else if (J.isEmptyObject(o)) J.extend(this.cache[r], e);
            else
                for (i in e) o[i] = e[i];
            return o
        },
        get: function(t, e) {
            var n = this.cache[this.key(t)];
            return void 0 === e ? n : n[e]
        },
        access: function(t, e, n) {
            var i;
            return void 0 === e || e && "string" == typeof e && void 0 === n ? (i = this.get(t, e), void 0 !== i ? i : this.get(t, J.camelCase(e))) : (this.set(t, e, n), void 0 !== n ? n : e)
        },
        remove: function(t, e) {
            var n, i, r, o = this.key(t),
                s = this.cache[o];
            if (void 0 === e) this.cache[o] = {};
            else {
                J.isArray(e) ? i = e.concat(e.map(J.camelCase)) : (r = J.camelCase(e), e in s ? i = [e, r] : (i = r, i = i in s ? [i] : i.match(fe) || [])), n = i.length;
                for (; n--;) delete s[i[n]]
            }
        },
        hasData: function(t) {
            return !J.isEmptyObject(this.cache[t[this.expando]] || {})
        },
        discard: function(t) {
            t[this.expando] && delete this.cache[t[this.expando]]
        }
    };
    var ve = new a,
        ye = new a,
        _e = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        we = /([A-Z])/g;
    J.extend({
        hasData: function(t) {
            return ye.hasData(t) || ve.hasData(t)
        },
        data: function(t, e, n) {
            return ye.access(t, e, n)
        },
        removeData: function(t, e) {
            ye.remove(t, e)
        },
        _data: function(t, e, n) {
            return ve.access(t, e, n)
        },
        _removeData: function(t, e) {
            ve.remove(t, e)
        }
    }), J.fn.extend({
        data: function(t, e) {
            var n, i, r, o = this[0],
                s = o && o.attributes;
            if (void 0 === t) {
                if (this.length && (r = ye.get(o), 1 === o.nodeType && !ve.get(o, "hasDataAttrs"))) {
                    for (n = s.length; n--;) s[n] && (i = s[n].name, 0 === i.indexOf("data-") && (i = J.camelCase(i.slice(5)), u(o, i, r[i])));
                    ve.set(o, "hasDataAttrs", !0)
                }
                return r
            }
            return "object" == typeof t ? this.each(function() {
                ye.set(this, t)
            }) : ge(this, function(e) {
                var n, i = J.camelCase(t);
                if (o && void 0 === e) {
                    if (n = ye.get(o, t), void 0 !== n) return n;
                    if (n = ye.get(o, i), void 0 !== n) return n;
                    if (n = u(o, i, void 0), void 0 !== n) return n
                } else this.each(function() {
                    var n = ye.get(this, i);
                    ye.set(this, i, e), -1 !== t.indexOf("-") && void 0 !== n && ye.set(this, t, e)
                })
            }, null, e, arguments.length > 1, null, !0)
        },
        removeData: function(t) {
            return this.each(function() {
                ye.remove(this, t)
            })
        }
    }), J.extend({
        queue: function(t, e, n) {
            var i;
            return t ? (e = (e || "fx") + "queue", i = ve.get(t, e), n && (!i || J.isArray(n) ? i = ve.access(t, e, J.makeArray(n)) : i.push(n)), i || []) : void 0
        },
        dequeue: function(t, e) {
            e = e || "fx";
            var n = J.queue(t, e),
                i = n.length,
                r = n.shift(),
                o = J._queueHooks(t, e),
                s = function() {
                    J.dequeue(t, e)
                };
            "inprogress" === r && (r = n.shift(), i--), r && ("fx" === e && n.unshift("inprogress"), delete o.stop, r.call(t, s, o)), !i && o && o.empty.fire()
        },
        _queueHooks: function(t, e) {
            var n = e + "queueHooks";
            return ve.get(t, n) || ve.access(t, n, {
                empty: J.Callbacks("once memory").add(function() {
                    ve.remove(t, [e + "queue", n])
                })
            })
        }
    }), J.fn.extend({
        queue: function(t, e) {
            var n = 2;
            return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? J.queue(this[0], t) : void 0 === e ? this : this.each(function() {
                var n = J.queue(this, t, e);
                J._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && J.dequeue(this, t)
            })
        },
        dequeue: function(t) {
            return this.each(function() {
                J.dequeue(this, t)
            })
        },
        clearQueue: function(t) {
            return this.queue(t || "fx", [])
        },
        promise: function(t, e) {
            var n, i = 1,
                r = J.Deferred(),
                o = this,
                s = this.length,
                a = function() {
                    --i || r.resolveWith(o, [o])
                };
            for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; s--;) n = ve.get(o[s], t + "queueHooks"), n && n.empty && (i++, n.empty.add(a));
            return a(), r.promise(e)
        }
    });
    var xe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        be = ["Top", "Right", "Bottom", "Left"],
        Te = function(t, e) {
            return t = e || t, "none" === J.css(t, "display") || !J.contains(t.ownerDocument, t)
        }, ke = /^(?:checkbox|radio)$/i;
    ! function() {
        var t = G.createDocumentFragment(),
            e = t.appendChild(G.createElement("div")),
            n = G.createElement("input");
        n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), e.appendChild(n), Z.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", Z.noCloneChecked = !! e.cloneNode(!0).lastChild.defaultValue
    }();
    var Ce = "undefined";
    Z.focusinBubbles = "onfocusin" in t;
    var Pe = /^key/,
        Ee = /^(?:mouse|pointer|contextmenu)|click/,
        Se = /^(?:focusinfocus|focusoutblur)$/,
        Oe = /^([^.]*)(?:\.(.+)|)$/;
    J.event = {
        global: {},
        add: function(t, e, n, i, r) {
            var o, s, a, u, l, c, h, p, f, d, m, g = ve.get(t);
            if (g)
                for (n.handler && (o = n, n = o.handler, r = o.selector), n.guid || (n.guid = J.guid++), (u = g.events) || (u = g.events = {}), (s = g.handle) || (s = g.handle = function(e) {
                    return typeof J !== Ce && J.event.triggered !== e.type ? J.event.dispatch.apply(t, arguments) : void 0
                }), e = (e || "").match(fe) || [""], l = e.length; l--;) a = Oe.exec(e[l]) || [], f = m = a[1], d = (a[2] || "").split(".").sort(), f && (h = J.event.special[f] || {}, f = (r ? h.delegateType : h.bindType) || f, h = J.event.special[f] || {}, c = J.extend({
                    type: f,
                    origType: m,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: r,
                    needsContext: r && J.expr.match.needsContext.test(r),
                    namespace: d.join(".")
                }, o), (p = u[f]) || (p = u[f] = [], p.delegateCount = 0, h.setup && h.setup.call(t, i, d, s) !== !1 || t.addEventListener && t.addEventListener(f, s, !1)), h.add && (h.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), r ? p.splice(p.delegateCount++, 0, c) : p.push(c), J.event.global[f] = !0)
        },
        remove: function(t, e, n, i, r) {
            var o, s, a, u, l, c, h, p, f, d, m, g = ve.hasData(t) && ve.get(t);
            if (g && (u = g.events)) {
                for (e = (e || "").match(fe) || [""], l = e.length; l--;)
                    if (a = Oe.exec(e[l]) || [], f = m = a[1], d = (a[2] || "").split(".").sort(), f) {
                        for (h = J.event.special[f] || {}, f = (i ? h.delegateType : h.bindType) || f, p = u[f] || [], a = a[2] && new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = p.length; o--;) c = p[o], !r && m !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || i && i !== c.selector && ("**" !== i || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, h.remove && h.remove.call(t, c));
                        s && !p.length && (h.teardown && h.teardown.call(t, d, g.handle) !== !1 || J.removeEvent(t, f, g.handle), delete u[f])
                    } else
                        for (f in u) J.event.remove(t, f + e[l], n, i, !0);
                J.isEmptyObject(u) && (delete g.handle, ve.remove(t, "events"))
            }
        },
        trigger: function(e, n, i, r) {
            var o, s, a, u, l, c, h, p = [i || G],
                f = Q.call(e, "type") ? e.type : e,
                d = Q.call(e, "namespace") ? e.namespace.split(".") : [];
            if (s = a = i = i || G, 3 !== i.nodeType && 8 !== i.nodeType && !Se.test(f + J.event.triggered) && (f.indexOf(".") >= 0 && (d = f.split("."), f = d.shift(), d.sort()), l = f.indexOf(":") < 0 && "on" + f, e = e[J.expando] ? e : new J.Event(f, "object" == typeof e && e), e.isTrigger = r ? 2 : 3, e.namespace = d.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = i), n = null == n ? [e] : J.makeArray(n, [e]), h = J.event.special[f] || {}, r || !h.trigger || h.trigger.apply(i, n) !== !1)) {
                if (!r && !h.noBubble && !J.isWindow(i)) {
                    for (u = h.delegateType || f, Se.test(u + f) || (s = s.parentNode); s; s = s.parentNode) p.push(s), a = s;
                    a === (i.ownerDocument || G) && p.push(a.defaultView || a.parentWindow || t)
                }
                for (o = 0;
                    (s = p[o++]) && !e.isPropagationStopped();) e.type = o > 1 ? u : h.bindType || f, c = (ve.get(s, "events") || {})[e.type] && ve.get(s, "handle"), c && c.apply(s, n), c = l && s[l], c && c.apply && J.acceptData(s) && (e.result = c.apply(s, n), e.result === !1 && e.preventDefault());
                return e.type = f, r || e.isDefaultPrevented() || h._default && h._default.apply(p.pop(), n) !== !1 || !J.acceptData(i) || l && J.isFunction(i[f]) && !J.isWindow(i) && (a = i[l], a && (i[l] = null), J.event.triggered = f, i[f](), J.event.triggered = void 0, a && (i[l] = a)), e.result
            }
        },
        dispatch: function(t) {
            t = J.event.fix(t);
            var e, n, i, r, o, s = [],
                a = q.call(arguments),
                u = (ve.get(this, "events") || {})[t.type] || [],
                l = J.event.special[t.type] || {};
            if (a[0] = t, t.delegateTarget = this, !l.preDispatch || l.preDispatch.call(this, t) !== !1) {
                for (s = J.event.handlers.call(this, t, u), e = 0;
                    (r = s[e++]) && !t.isPropagationStopped();)
                    for (t.currentTarget = r.elem, n = 0;
                        (o = r.handlers[n++]) && !t.isImmediatePropagationStopped();)(!t.namespace_re || t.namespace_re.test(o.namespace)) && (t.handleObj = o, t.data = o.data, i = ((J.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, a), void 0 !== i && (t.result = i) === !1 && (t.preventDefault(), t.stopPropagation()));
                return l.postDispatch && l.postDispatch.call(this, t), t.result
            }
        },
        handlers: function(t, e) {
            var n, i, r, o, s = [],
                a = e.delegateCount,
                u = t.target;
            if (a && u.nodeType && (!t.button || "click" !== t.type))
                for (; u !== this; u = u.parentNode || this)
                    if (u.disabled !== !0 || "click" !== t.type) {
                        for (i = [], n = 0; a > n; n++) o = e[n], r = o.selector + " ", void 0 === i[r] && (i[r] = o.needsContext ? J(r, this).index(u) >= 0 : J.find(r, this, null, [u]).length), i[r] && i.push(o);
                        i.length && s.push({
                            elem: u,
                            handlers: i
                        })
                    }
            return a < e.length && s.push({
                elem: this,
                handlers: e.slice(a)
            }), s
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(t, e) {
                return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(t, e) {
                var n, i, r, o = e.button;
                return null == t.pageX && null != e.clientX && (n = t.target.ownerDocument || G, i = n.documentElement, r = n.body, t.pageX = e.clientX + (i && i.scrollLeft || r && r.scrollLeft || 0) - (i && i.clientLeft || r && r.clientLeft || 0), t.pageY = e.clientY + (i && i.scrollTop || r && r.scrollTop || 0) - (i && i.clientTop || r && r.clientTop || 0)), t.which || void 0 === o || (t.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), t
            }
        },
        fix: function(t) {
            if (t[J.expando]) return t;
            var e, n, i, r = t.type,
                o = t,
                s = this.fixHooks[r];
            for (s || (this.fixHooks[r] = s = Ee.test(r) ? this.mouseHooks : Pe.test(r) ? this.keyHooks : {}), i = s.props ? this.props.concat(s.props) : this.props, t = new J.Event(o), e = i.length; e--;) n = i[e], t[n] = o[n];
            return t.target || (t.target = G), 3 === t.target.nodeType && (t.target = t.target.parentNode), s.filter ? s.filter(t, o) : t
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== h() && this.focus ? (this.focus(), !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === h() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && J.nodeName(this, "input") ? (this.click(), !1) : void 0
                },
                _default: function(t) {
                    return J.nodeName(t.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(t) {
                    void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                }
            }
        },
        simulate: function(t, e, n, i) {
            var r = J.extend(new J.Event, n, {
                type: t,
                isSimulated: !0,
                originalEvent: {}
            });
            i ? J.event.trigger(r, null, e) : J.event.dispatch.call(e, r), r.isDefaultPrevented() && n.preventDefault()
        }
    }, J.removeEvent = function(t, e, n) {
        t.removeEventListener && t.removeEventListener(e, n, !1)
    }, J.Event = function(t, e) {
        return this instanceof J.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && t.returnValue === !1 ? l : c) : this.type = t, e && J.extend(this, e), this.timeStamp = t && t.timeStamp || J.now(), void(this[J.expando] = !0)) : new J.Event(t, e)
    }, J.Event.prototype = {
        isDefaultPrevented: c,
        isPropagationStopped: c,
        isImmediatePropagationStopped: c,
        preventDefault: function() {
            var t = this.originalEvent;
            this.isDefaultPrevented = l, t && t.preventDefault && t.preventDefault()
        },
        stopPropagation: function() {
            var t = this.originalEvent;
            this.isPropagationStopped = l, t && t.stopPropagation && t.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var t = this.originalEvent;
            this.isImmediatePropagationStopped = l, t && t.stopImmediatePropagation && t.stopImmediatePropagation(), this.stopPropagation()
        }
    }, J.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(t, e) {
        J.event.special[t] = {
            delegateType: e,
            bindType: e,
            handle: function(t) {
                var n, i = this,
                    r = t.relatedTarget,
                    o = t.handleObj;
                return (!r || r !== i && !J.contains(i, r)) && (t.type = o.origType, n = o.handler.apply(this, arguments), t.type = e), n
            }
        }
    }), Z.focusinBubbles || J.each({
        focus: "focusin",
        blur: "focusout"
    }, function(t, e) {
        var n = function(t) {
            J.event.simulate(e, t.target, J.event.fix(t), !0)
        };
        J.event.special[e] = {
            setup: function() {
                var i = this.ownerDocument || this,
                    r = ve.access(i, e);
                r || i.addEventListener(t, n, !0), ve.access(i, e, (r || 0) + 1)
            },
            teardown: function() {
                var i = this.ownerDocument || this,
                    r = ve.access(i, e) - 1;
                r ? ve.access(i, e, r) : (i.removeEventListener(t, n, !0), ve.remove(i, e))
            }
        }
    }), J.fn.extend({
        on: function(t, e, n, i, r) {
            var o, s;
            if ("object" == typeof t) {
                "string" != typeof e && (n = n || e, e = void 0);
                for (s in t) this.on(s, e, n, t[s], r);
                return this
            }
            if (null == n && null == i ? (i = e, n = e = void 0) : null == i && ("string" == typeof e ? (i = n, n = void 0) : (i = n, n = e, e = void 0)), i === !1) i = c;
            else if (!i) return this;
            return 1 === r && (o = i, i = function(t) {
                return J().off(t), o.apply(this, arguments)
            }, i.guid = o.guid || (o.guid = J.guid++)), this.each(function() {
                J.event.add(this, t, i, n, e)
            })
        },
        one: function(t, e, n, i) {
            return this.on(t, e, n, i, 1)
        },
        off: function(t, e, n) {
            var i, r;
            if (t && t.preventDefault && t.handleObj) return i = t.handleObj, J(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof t) {
                for (r in t) this.off(r, e, t[r]);
                return this
            }
            return (e === !1 || "function" == typeof e) && (n = e, e = void 0), n === !1 && (n = c), this.each(function() {
                J.event.remove(this, t, n, e)
            })
        },
        trigger: function(t, e) {
            return this.each(function() {
                J.event.trigger(t, e, this)
            })
        },
        triggerHandler: function(t, e) {
            var n = this[0];
            return n ? J.event.trigger(t, e, n, !0) : void 0
        }
    });
    var Ae = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Ne = /<([\w:]+)/,
        je = /<|&#?\w+;/,
        Me = /<(?:script|style|link)/i,
        De = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Re = /^$|\/(?:java|ecma)script/i,
        Le = /^true\/(.*)/,
        Ie = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        $e = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    $e.optgroup = $e.option, $e.tbody = $e.tfoot = $e.colgroup = $e.caption = $e.thead, $e.th = $e.td, J.extend({
        clone: function(t, e, n) {
            var i, r, o, s, a = t.cloneNode(!0),
                u = J.contains(t.ownerDocument, t);
            if (!(Z.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || J.isXMLDoc(t)))
                for (s = v(a), o = v(t), i = 0, r = o.length; r > i; i++) y(o[i], s[i]);
            if (e)
                if (n)
                    for (o = o || v(t), s = s || v(a), i = 0, r = o.length; r > i; i++) g(o[i], s[i]);
                else g(t, a);
            return s = v(a, "script"), s.length > 0 && m(s, !u && v(t, "script")), a
        },
        buildFragment: function(t, e, n, i) {
            for (var r, o, s, a, u, l, c = e.createDocumentFragment(), h = [], p = 0, f = t.length; f > p; p++)
                if (r = t[p], r || 0 === r)
                    if ("object" === J.type(r)) J.merge(h, r.nodeType ? [r] : r);
                    else if (je.test(r)) {
                for (o = o || c.appendChild(e.createElement("div")), s = (Ne.exec(r) || ["", ""])[1].toLowerCase(), a = $e[s] || $e._default, o.innerHTML = a[1] + r.replace(Ae, "<$1></$2>") + a[2], l = a[0]; l--;) o = o.lastChild;
                J.merge(h, o.childNodes), o = c.firstChild, o.textContent = ""
            } else h.push(e.createTextNode(r));
            for (c.textContent = "", p = 0; r = h[p++];)
                if ((!i || -1 === J.inArray(r, i)) && (u = J.contains(r.ownerDocument, r), o = v(c.appendChild(r), "script"), u && m(o), n))
                    for (l = 0; r = o[l++];) Re.test(r.type || "") && n.push(r);
            return c
        },
        cleanData: function(t) {
            for (var e, n, i, r, o = J.event.special, s = 0; void 0 !== (n = t[s]); s++) {
                if (J.acceptData(n) && (r = n[ve.expando], r && (e = ve.cache[r]))) {
                    if (e.events)
                        for (i in e.events) o[i] ? J.event.remove(n, i) : J.removeEvent(n, i, e.handle);
                    ve.cache[r] && delete ve.cache[r]
                }
                delete ye.cache[n[ye.expando]]
            }
        }
    }), J.fn.extend({
        text: function(t) {
            return ge(this, function(t) {
                return void 0 === t ? J.text(this) : this.empty().each(function() {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = t)
                })
            }, null, t, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = p(this, t);
                    e.appendChild(t)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = p(this, t);
                    e.insertBefore(t, e.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
            })
        },
        remove: function(t, e) {
            for (var n, i = t ? J.filter(t, this) : this, r = 0; null != (n = i[r]); r++) e || 1 !== n.nodeType || J.cleanData(v(n)), n.parentNode && (e && J.contains(n.ownerDocument, n) && m(v(n, "script")), n.parentNode.removeChild(n));
            return this
        },
        empty: function() {
            for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (J.cleanData(v(t, !1)), t.textContent = "");
            return this
        },
        clone: function(t, e) {
            return t = null == t ? !1 : t, e = null == e ? t : e, this.map(function() {
                return J.clone(this, t, e)
            })
        },
        html: function(t) {
            return ge(this, function(t) {
                var e = this[0] || {}, n = 0,
                    i = this.length;
                if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                if ("string" == typeof t && !Me.test(t) && !$e[(Ne.exec(t) || ["", ""])[1].toLowerCase()]) {
                    t = t.replace(Ae, "<$1></$2>");
                    try {
                        for (; i > n; n++) e = this[n] || {}, 1 === e.nodeType && (J.cleanData(v(e, !1)), e.innerHTML = t);
                        e = 0
                    } catch (r) {}
                }
                e && this.empty().append(t)
            }, null, t, arguments.length)
        },
        replaceWith: function() {
            var t = arguments[0];
            return this.domManip(arguments, function(e) {
                t = this.parentNode, J.cleanData(v(this)), t && t.replaceChild(e, this)
            }), t && (t.length || t.nodeType) ? this : this.remove()
        },
        detach: function(t) {
            return this.remove(t, !0)
        },
        domManip: function(t, e) {
            t = Y.apply([], t);
            var n, i, r, o, s, a, u = 0,
                l = this.length,
                c = this,
                h = l - 1,
                p = t[0],
                m = J.isFunction(p);
            if (m || l > 1 && "string" == typeof p && !Z.checkClone && De.test(p)) return this.each(function(n) {
                var i = c.eq(n);
                m && (t[0] = p.call(this, n, i.html())), i.domManip(t, e)
            });
            if (l && (n = J.buildFragment(t, this[0].ownerDocument, !1, this), i = n.firstChild, 1 === n.childNodes.length && (n = i), i)) {
                for (r = J.map(v(n, "script"), f), o = r.length; l > u; u++) s = n, u !== h && (s = J.clone(s, !0, !0), o && J.merge(r, v(s, "script"))), e.call(this[u], s, u);
                if (o)
                    for (a = r[r.length - 1].ownerDocument, J.map(r, d), u = 0; o > u; u++) s = r[u], Re.test(s.type || "") && !ve.access(s, "globalEval") && J.contains(a, s) && (s.src ? J._evalUrl && J._evalUrl(s.src) : J.globalEval(s.textContent.replace(Ie, "")))
            }
            return this
        }
    }), J.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(t, e) {
        J.fn[t] = function(t) {
            for (var n, i = [], r = J(t), o = r.length - 1, s = 0; o >= s; s++) n = s === o ? this : this.clone(!0), J(r[s])[e](n), W.apply(i, n.get());
            return this.pushStack(i)
        }
    });
    var Fe, ze = {}, Xe = /^margin/,
        He = new RegExp("^(" + xe + ")(?!px)[a-z%]+$", "i"),
        qe = function(t) {
            return t.ownerDocument.defaultView.getComputedStyle(t, null)
        };
    ! function() {
        function e() {
            s.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", s.innerHTML = "", r.appendChild(o);
            var e = t.getComputedStyle(s, null);
            n = "1%" !== e.top, i = "4px" === e.width, r.removeChild(o)
        }
        var n, i, r = G.documentElement,
            o = G.createElement("div"),
            s = G.createElement("div");
        s.style && (s.style.backgroundClip = "content-box", s.cloneNode(!0).style.backgroundClip = "", Z.clearCloneStyle = "content-box" === s.style.backgroundClip, o.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", o.appendChild(s), t.getComputedStyle && J.extend(Z, {
            pixelPosition: function() {
                return e(), n
            },
            boxSizingReliable: function() {
                return null == i && e(), i
            },
            reliableMarginRight: function() {
                var e, n = s.appendChild(G.createElement("div"));
                return n.style.cssText = s.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", n.style.marginRight = n.style.width = "0", s.style.width = "1px", r.appendChild(o), e = !parseFloat(t.getComputedStyle(n, null).marginRight), r.removeChild(o), e
            }
        }))
    }(), J.swap = function(t, e, n, i) {
        var r, o, s = {};
        for (o in e) s[o] = t.style[o], t.style[o] = e[o];
        r = n.apply(t, i || []);
        for (o in e) t.style[o] = s[o];
        return r
    };
    var Ye = /^(none|table(?!-c[ea]).+)/,
        We = new RegExp("^(" + xe + ")(.*)$", "i"),
        Be = new RegExp("^([+-])=(" + xe + ")", "i"),
        Ue = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        }, Ve = {
            letterSpacing: "0",
            fontWeight: "400"
        }, Qe = ["Webkit", "O", "Moz", "ms"];
    J.extend({
        cssHooks: {
            opacity: {
                get: function(t, e) {
                    if (e) {
                        var n = x(t, "opacity");
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
        style: function(t, e, n, i) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var r, o, s, a = J.camelCase(e),
                    u = t.style;
                return e = J.cssProps[a] || (J.cssProps[a] = T(u, a)), s = J.cssHooks[e] || J.cssHooks[a], void 0 === n ? s && "get" in s && void 0 !== (r = s.get(t, !1, i)) ? r : u[e] : (o = typeof n, "string" === o && (r = Be.exec(n)) && (n = (r[1] + 1) * r[2] + parseFloat(J.css(t, e)), o = "number"), void(null != n && n === n && ("number" !== o || J.cssNumber[a] || (n += "px"), Z.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (u[e] = "inherit"), s && "set" in s && void 0 === (n = s.set(t, n, i)) || (u[e] = n))))
            }
        },
        css: function(t, e, n, i) {
            var r, o, s, a = J.camelCase(e);
            return e = J.cssProps[a] || (J.cssProps[a] = T(t.style, a)), s = J.cssHooks[e] || J.cssHooks[a], s && "get" in s && (r = s.get(t, !0, n)), void 0 === r && (r = x(t, e, i)), "normal" === r && e in Ve && (r = Ve[e]), "" === n || n ? (o = parseFloat(r), n === !0 || J.isNumeric(o) ? o || 0 : r) : r
        }
    }), J.each(["height", "width"], function(t, e) {
        J.cssHooks[e] = {
            get: function(t, n, i) {
                return n ? Ye.test(J.css(t, "display")) && 0 === t.offsetWidth ? J.swap(t, Ue, function() {
                    return P(t, e, i)
                }) : P(t, e, i) : void 0
            },
            set: function(t, n, i) {
                var r = i && qe(t);
                return k(t, n, i ? C(t, e, i, "border-box" === J.css(t, "boxSizing", !1, r), r) : 0)
            }
        }
    }), J.cssHooks.marginRight = b(Z.reliableMarginRight, function(t, e) {
        return e ? J.swap(t, {
            display: "inline-block"
        }, x, [t, "marginRight"]) : void 0
    }), J.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(t, e) {
        J.cssHooks[t + e] = {
            expand: function(n) {
                for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) r[t + be[i] + e] = o[i] || o[i - 2] || o[0];
                return r
            }
        }, Xe.test(t) || (J.cssHooks[t + e].set = k)
    }), J.fn.extend({
        css: function(t, e) {
            return ge(this, function(t, e, n) {
                var i, r, o = {}, s = 0;
                if (J.isArray(e)) {
                    for (i = qe(t), r = e.length; r > s; s++) o[e[s]] = J.css(t, e[s], !1, i);
                    return o
                }
                return void 0 !== n ? J.style(t, e, n) : J.css(t, e)
            }, t, e, arguments.length > 1)
        },
        show: function() {
            return E(this, !0)
        },
        hide: function() {
            return E(this)
        },
        toggle: function(t) {
            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                Te(this) ? J(this).show() : J(this).hide()
            })
        }
    }), J.Tween = S, S.prototype = {
        constructor: S,
        init: function(t, e, n, i, r, o) {
            this.elem = t, this.prop = n, this.easing = r || "swing", this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = o || (J.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var t = S.propHooks[this.prop];
            return t && t.get ? t.get(this) : S.propHooks._default.get(this)
        },
        run: function(t) {
            var e, n = S.propHooks[this.prop];
            return this.pos = e = this.options.duration ? J.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : S.propHooks._default.set(this), this
        }
    }, S.prototype.init.prototype = S.prototype, S.propHooks = {
        _default: {
            get: function(t) {
                var e;
                return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = J.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0) : t.elem[t.prop]
            },
            set: function(t) {
                J.fx.step[t.prop] ? J.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[J.cssProps[t.prop]] || J.cssHooks[t.prop]) ? J.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now
            }
        }
    }, S.propHooks.scrollTop = S.propHooks.scrollLeft = {
        set: function(t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }
    }, J.easing = {
        linear: function(t) {
            return t
        },
        swing: function(t) {
            return .5 - Math.cos(t * Math.PI) / 2
        }
    }, J.fx = S.prototype.init, J.fx.step = {};
    var Ze, Ge, Ke = /^(?:toggle|show|hide)$/,
        Je = new RegExp("^(?:([+-])=|)(" + xe + ")([a-z%]*)$", "i"),
        tn = /queueHooks$/,
        en = [j],
        nn = {
            "*": [
                function(t, e) {
                    var n = this.createTween(t, e),
                        i = n.cur(),
                        r = Je.exec(e),
                        o = r && r[3] || (J.cssNumber[t] ? "" : "px"),
                        s = (J.cssNumber[t] || "px" !== o && +i) && Je.exec(J.css(n.elem, t)),
                        a = 1,
                        u = 20;
                    if (s && s[3] !== o) {
                        o = o || s[3], r = r || [], s = +i || 1;
                        do a = a || ".5", s /= a, J.style(n.elem, t, s + o); while (a !== (a = n.cur() / i) && 1 !== a && --u)
                    }
                    return r && (s = n.start = +s || +i || 0, n.unit = o, n.end = r[1] ? s + (r[1] + 1) * r[2] : +r[2]), n
                }
            ]
        };
    J.Animation = J.extend(D, {
        tweener: function(t, e) {
            J.isFunction(t) ? (e = t, t = ["*"]) : t = t.split(" ");
            for (var n, i = 0, r = t.length; r > i; i++) n = t[i], nn[n] = nn[n] || [], nn[n].unshift(e)
        },
        prefilter: function(t, e) {
            e ? en.unshift(t) : en.push(t)
        }
    }), J.speed = function(t, e, n) {
        var i = t && "object" == typeof t ? J.extend({}, t) : {
            complete: n || !n && e || J.isFunction(t) && t,
            duration: t,
            easing: n && e || e && !J.isFunction(e) && e
        };
        return i.duration = J.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in J.fx.speeds ? J.fx.speeds[i.duration] : J.fx.speeds._default, (null == i.queue || i.queue === !0) && (i.queue = "fx"), i.old = i.complete, i.complete = function() {
            J.isFunction(i.old) && i.old.call(this), i.queue && J.dequeue(this, i.queue)
        }, i
    }, J.fn.extend({
        fadeTo: function(t, e, n, i) {
            return this.filter(Te).css("opacity", 0).show().end().animate({
                opacity: e
            }, t, n, i)
        },
        animate: function(t, e, n, i) {
            var r = J.isEmptyObject(t),
                o = J.speed(e, n, i),
                s = function() {
                    var e = D(this, J.extend({}, t), o);
                    (r || ve.get(this, "finish")) && e.stop(!0)
                };
            return s.finish = s, r || o.queue === !1 ? this.each(s) : this.queue(o.queue, s)
        },
        stop: function(t, e, n) {
            var i = function(t) {
                var e = t.stop;
                delete t.stop, e(n)
            };
            return "string" != typeof t && (n = e, e = t, t = void 0), e && t !== !1 && this.queue(t || "fx", []), this.each(function() {
                var e = !0,
                    r = null != t && t + "queueHooks",
                    o = J.timers,
                    s = ve.get(this);
                if (r) s[r] && s[r].stop && i(s[r]);
                else
                    for (r in s) s[r] && s[r].stop && tn.test(r) && i(s[r]);
                for (r = o.length; r--;) o[r].elem !== this || null != t && o[r].queue !== t || (o[r].anim.stop(n), e = !1, o.splice(r, 1));
                (e || !n) && J.dequeue(this, t)
            })
        },
        finish: function(t) {
            return t !== !1 && (t = t || "fx"), this.each(function() {
                var e, n = ve.get(this),
                    i = n[t + "queue"],
                    r = n[t + "queueHooks"],
                    o = J.timers,
                    s = i ? i.length : 0;
                for (n.finish = !0, J.queue(this, t, []), r && r.stop && r.stop.call(this, !0), e = o.length; e--;) o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), o.splice(e, 1));
                for (e = 0; s > e; e++) i[e] && i[e].finish && i[e].finish.call(this);
                delete n.finish
            })
        }
    }), J.each(["toggle", "show", "hide"], function(t, e) {
        var n = J.fn[e];
        J.fn[e] = function(t, i, r) {
            return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(A(e, !0), t, i, r)
        }
    }), J.each({
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
    }, function(t, e) {
        J.fn[t] = function(t, n, i) {
            return this.animate(e, t, n, i)
        }
    }), J.timers = [], J.fx.tick = function() {
        var t, e = 0,
            n = J.timers;
        for (Ze = J.now(); e < n.length; e++) t = n[e], t() || n[e] !== t || n.splice(e--, 1);
        n.length || J.fx.stop(), Ze = void 0
    }, J.fx.timer = function(t) {
        J.timers.push(t), t() ? J.fx.start() : J.timers.pop()
    }, J.fx.interval = 13, J.fx.start = function() {
        Ge || (Ge = setInterval(J.fx.tick, J.fx.interval))
    }, J.fx.stop = function() {
        clearInterval(Ge), Ge = null
    }, J.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, J.fn.delay = function(t, e) {
        return t = J.fx ? J.fx.speeds[t] || t : t, e = e || "fx", this.queue(e, function(e, n) {
            var i = setTimeout(e, t);
            n.stop = function() {
                clearTimeout(i)
            }
        })
    },
    function() {
        var t = G.createElement("input"),
            e = G.createElement("select"),
            n = e.appendChild(G.createElement("option"));
        t.type = "checkbox", Z.checkOn = "" !== t.value, Z.optSelected = n.selected, e.disabled = !0, Z.optDisabled = !n.disabled, t = G.createElement("input"), t.value = "t", t.type = "radio", Z.radioValue = "t" === t.value
    }();
    var rn, on, sn = J.expr.attrHandle;
    J.fn.extend({
        attr: function(t, e) {
            return ge(this, J.attr, t, e, arguments.length > 1)
        },
        removeAttr: function(t) {
            return this.each(function() {
                J.removeAttr(this, t)
            })
        }
    }), J.extend({
        attr: function(t, e, n) {
            var i, r, o = t.nodeType;
            return t && 3 !== o && 8 !== o && 2 !== o ? typeof t.getAttribute === Ce ? J.prop(t, e, n) : (1 === o && J.isXMLDoc(t) || (e = e.toLowerCase(), i = J.attrHooks[e] || (J.expr.match.bool.test(e) ? on : rn)), void 0 === n ? i && "get" in i && null !== (r = i.get(t, e)) ? r : (r = J.find.attr(t, e), null == r ? void 0 : r) : null !== n ? i && "set" in i && void 0 !== (r = i.set(t, n, e)) ? r : (t.setAttribute(e, n + ""), n) : void J.removeAttr(t, e)) : void 0
        },
        removeAttr: function(t, e) {
            var n, i, r = 0,
                o = e && e.match(fe);
            if (o && 1 === t.nodeType)
                for (; n = o[r++];) i = J.propFix[n] || n, J.expr.match.bool.test(n) && (t[i] = !1), t.removeAttribute(n)
        },
        attrHooks: {
            type: {
                set: function(t, e) {
                    if (!Z.radioValue && "radio" === e && J.nodeName(t, "input")) {
                        var n = t.value;
                        return t.setAttribute("type", e), n && (t.value = n), e
                    }
                }
            }
        }
    }), on = {
        set: function(t, e, n) {
            return e === !1 ? J.removeAttr(t, n) : t.setAttribute(n, n), n
        }
    }, J.each(J.expr.match.bool.source.match(/\w+/g), function(t, e) {
        var n = sn[e] || J.find.attr;
        sn[e] = function(t, e, i) {
            var r, o;
            return i || (o = sn[e], sn[e] = r, r = null != n(t, e, i) ? e.toLowerCase() : null, sn[e] = o), r
        }
    });
    var an = /^(?:input|select|textarea|button)$/i;
    J.fn.extend({
        prop: function(t, e) {
            return ge(this, J.prop, t, e, arguments.length > 1)
        },
        removeProp: function(t) {
            return this.each(function() {
                delete this[J.propFix[t] || t]
            })
        }
    }), J.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(t, e, n) {
            var i, r, o, s = t.nodeType;
            return t && 3 !== s && 8 !== s && 2 !== s ? (o = 1 !== s || !J.isXMLDoc(t), o && (e = J.propFix[e] || e, r = J.propHooks[e]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(t, n, e)) ? i : t[e] = n : r && "get" in r && null !== (i = r.get(t, e)) ? i : t[e]) : void 0
        },
        propHooks: {
            tabIndex: {
                get: function(t) {
                    return t.hasAttribute("tabindex") || an.test(t.nodeName) || t.href ? t.tabIndex : -1
                }
            }
        }
    }), Z.optSelected || (J.propHooks.selected = {
        get: function(t) {
            var e = t.parentNode;
            return e && e.parentNode && e.parentNode.selectedIndex, null
        }
    }), J.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        J.propFix[this.toLowerCase()] = this
    });
    var un = /[\t\r\n\f]/g;
    J.fn.extend({
        addClass: function(t) {
            var e, n, i, r, o, s, a = "string" == typeof t && t,
                u = 0,
                l = this.length;
            if (J.isFunction(t)) return this.each(function(e) {
                J(this).addClass(t.call(this, e, this.className))
            });
            if (a)
                for (e = (t || "").match(fe) || []; l > u; u++)
                    if (n = this[u], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(un, " ") : " ")) {
                        for (o = 0; r = e[o++];) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                        s = J.trim(i), n.className !== s && (n.className = s)
                    }
            return this
        },
        removeClass: function(t) {
            var e, n, i, r, o, s, a = 0 === arguments.length || "string" == typeof t && t,
                u = 0,
                l = this.length;
            if (J.isFunction(t)) return this.each(function(e) {
                J(this).removeClass(t.call(this, e, this.className))
            });
            if (a)
                for (e = (t || "").match(fe) || []; l > u; u++)
                    if (n = this[u], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(un, " ") : "")) {
                        for (o = 0; r = e[o++];)
                            for (; i.indexOf(" " + r + " ") >= 0;) i = i.replace(" " + r + " ", " ");
                        s = t ? J.trim(i) : "", n.className !== s && (n.className = s)
                    }
            return this
        },
        toggleClass: function(t, e) {
            var n = typeof t;
            return "boolean" == typeof e && "string" === n ? e ? this.addClass(t) : this.removeClass(t) : this.each(J.isFunction(t) ? function(n) {
                J(this).toggleClass(t.call(this, n, this.className, e), e)
            } : function() {
                if ("string" === n)
                    for (var e, i = 0, r = J(this), o = t.match(fe) || []; e = o[i++];) r.hasClass(e) ? r.removeClass(e) : r.addClass(e);
                else(n === Ce || "boolean" === n) && (this.className && ve.set(this, "__className__", this.className), this.className = this.className || t === !1 ? "" : ve.get(this, "__className__") || "")
            })
        },
        hasClass: function(t) {
            for (var e = " " + t + " ", n = 0, i = this.length; i > n; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(un, " ").indexOf(e) >= 0) return !0;
            return !1
        }
    });
    var ln = /\r/g;
    J.fn.extend({
        val: function(t) {
            var e, n, i, r = this[0];
            return arguments.length ? (i = J.isFunction(t), this.each(function(n) {
                var r;
                1 === this.nodeType && (r = i ? t.call(this, n, J(this).val()) : t, null == r ? r = "" : "number" == typeof r ? r += "" : J.isArray(r) && (r = J.map(r, function(t) {
                    return null == t ? "" : t + ""
                })), e = J.valHooks[this.type] || J.valHooks[this.nodeName.toLowerCase()], e && "set" in e && void 0 !== e.set(this, r, "value") || (this.value = r))
            })) : r ? (e = J.valHooks[r.type] || J.valHooks[r.nodeName.toLowerCase()], e && "get" in e && void 0 !== (n = e.get(r, "value")) ? n : (n = r.value, "string" == typeof n ? n.replace(ln, "") : null == n ? "" : n)) : void 0
        }
    }), J.extend({
        valHooks: {
            option: {
                get: function(t) {
                    var e = J.find.attr(t, "value");
                    return null != e ? e : J.trim(J.text(t))
                }
            },
            select: {
                get: function(t) {
                    for (var e, n, i = t.options, r = t.selectedIndex, o = "select-one" === t.type || 0 > r, s = o ? null : [], a = o ? r + 1 : i.length, u = 0 > r ? a : o ? r : 0; a > u; u++)
                        if (n = i[u], !(!n.selected && u !== r || (Z.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && J.nodeName(n.parentNode, "optgroup"))) {
                            if (e = J(n).val(), o) return e;
                            s.push(e)
                        }
                    return s
                },
                set: function(t, e) {
                    for (var n, i, r = t.options, o = J.makeArray(e), s = r.length; s--;) i = r[s], (i.selected = J.inArray(i.value, o) >= 0) && (n = !0);
                    return n || (t.selectedIndex = -1), o
                }
            }
        }
    }), J.each(["radio", "checkbox"], function() {
        J.valHooks[this] = {
            set: function(t, e) {
                return J.isArray(e) ? t.checked = J.inArray(J(t).val(), e) >= 0 : void 0
            }
        }, Z.checkOn || (J.valHooks[this].get = function(t) {
            return null === t.getAttribute("value") ? "on" : t.value
        })
    }), J.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, e) {
        J.fn[e] = function(t, n) {
            return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
        }
    }), J.fn.extend({
        hover: function(t, e) {
            return this.mouseenter(t).mouseleave(e || t)
        },
        bind: function(t, e, n) {
            return this.on(t, null, e, n)
        },
        unbind: function(t, e) {
            return this.off(t, null, e)
        },
        delegate: function(t, e, n, i) {
            return this.on(e, t, n, i)
        },
        undelegate: function(t, e, n) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
        }
    });
    var cn = J.now(),
        hn = /\?/;
    J.parseJSON = function(t) {
        return JSON.parse(t + "")
    }, J.parseXML = function(t) {
        var e, n;
        if (!t || "string" != typeof t) return null;
        try {
            n = new DOMParser, e = n.parseFromString(t, "text/xml")
        } catch (i) {
            e = void 0
        }
        return (!e || e.getElementsByTagName("parsererror").length) && J.error("Invalid XML: " + t), e
    };
    var pn, fn, dn = /#.*$/,
        mn = /([?&])_=[^&]*/,
        gn = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        vn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        yn = /^(?:GET|HEAD)$/,
        _n = /^\/\//,
        wn = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        xn = {}, bn = {}, Tn = "*/".concat("*");
    try {
        fn = location.href
    } catch (kn) {
        fn = G.createElement("a"), fn.href = "", fn = fn.href
    }
    pn = wn.exec(fn.toLowerCase()) || [], J.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: fn,
            type: "GET",
            isLocal: vn.test(pn[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Tn,
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
                "text json": J.parseJSON,
                "text xml": J.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(t, e) {
            return e ? I(I(t, J.ajaxSettings), e) : I(J.ajaxSettings, t)
        },
        ajaxPrefilter: R(xn),
        ajaxTransport: R(bn),
        ajax: function(t, e) {
            function n(t, e, n, s) {
                var u, c, v, y, w, b = e;
                2 !== _ && (_ = 2, a && clearTimeout(a), i = void 0, o = s || "", x.readyState = t > 0 ? 4 : 0, u = t >= 200 && 300 > t || 304 === t, n && (y = $(h, x, n)), y = F(h, y, x, u), u ? (h.ifModified && (w = x.getResponseHeader("Last-Modified"), w && (J.lastModified[r] = w), w = x.getResponseHeader("etag"), w && (J.etag[r] = w)), 204 === t || "HEAD" === h.type ? b = "nocontent" : 304 === t ? b = "notmodified" : (b = y.state, c = y.data, v = y.error, u = !v)) : (v = b, (t || !b) && (b = "error", 0 > t && (t = 0))), x.status = t, x.statusText = (e || b) + "", u ? d.resolveWith(p, [c, b, x]) : d.rejectWith(p, [x, b, v]), x.statusCode(g), g = void 0, l && f.trigger(u ? "ajaxSuccess" : "ajaxError", [x, h, u ? c : v]), m.fireWith(p, [x, b]), l && (f.trigger("ajaxComplete", [x, h]), --J.active || J.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (e = t, t = void 0), e = e || {};
            var i, r, o, s, a, u, l, c, h = J.ajaxSetup({}, e),
                p = h.context || h,
                f = h.context && (p.nodeType || p.jquery) ? J(p) : J.event,
                d = J.Deferred(),
                m = J.Callbacks("once memory"),
                g = h.statusCode || {}, v = {}, y = {}, _ = 0,
                w = "canceled",
                x = {
                    readyState: 0,
                    getResponseHeader: function(t) {
                        var e;
                        if (2 === _) {
                            if (!s)
                                for (s = {}; e = gn.exec(o);) s[e[1].toLowerCase()] = e[2];
                            e = s[t.toLowerCase()]
                        }
                        return null == e ? null : e
                    },
                    getAllResponseHeaders: function() {
                        return 2 === _ ? o : null
                    },
                    setRequestHeader: function(t, e) {
                        var n = t.toLowerCase();
                        return _ || (t = y[n] = y[n] || t, v[t] = e), this
                    },
                    overrideMimeType: function(t) {
                        return _ || (h.mimeType = t), this
                    },
                    statusCode: function(t) {
                        var e;
                        if (t)
                            if (2 > _)
                                for (e in t) g[e] = [g[e], t[e]];
                            else x.always(t[x.status]);
                        return this
                    },
                    abort: function(t) {
                        var e = t || w;
                        return i && i.abort(e), n(0, e), this
                    }
                };
            if (d.promise(x).complete = m.add, x.success = x.done, x.error = x.fail, h.url = ((t || h.url || fn) + "").replace(dn, "").replace(_n, pn[1] + "//"), h.type = e.method || e.type || h.method || h.type, h.dataTypes = J.trim(h.dataType || "*").toLowerCase().match(fe) || [""], null == h.crossDomain && (u = wn.exec(h.url.toLowerCase()), h.crossDomain = !(!u || u[1] === pn[1] && u[2] === pn[2] && (u[3] || ("http:" === u[1] ? "80" : "443")) === (pn[3] || ("http:" === pn[1] ? "80" : "443")))), h.data && h.processData && "string" != typeof h.data && (h.data = J.param(h.data, h.traditional)), L(xn, h, e, x), 2 === _) return x;
            l = h.global, l && 0 === J.active++ && J.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !yn.test(h.type), r = h.url, h.hasContent || (h.data && (r = h.url += (hn.test(r) ? "&" : "?") + h.data, delete h.data), h.cache === !1 && (h.url = mn.test(r) ? r.replace(mn, "$1_=" + cn++) : r + (hn.test(r) ? "&" : "?") + "_=" + cn++)), h.ifModified && (J.lastModified[r] && x.setRequestHeader("If-Modified-Since", J.lastModified[r]), J.etag[r] && x.setRequestHeader("If-None-Match", J.etag[r])), (h.data && h.hasContent && h.contentType !== !1 || e.contentType) && x.setRequestHeader("Content-Type", h.contentType), x.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Tn + "; q=0.01" : "") : h.accepts["*"]);
            for (c in h.headers) x.setRequestHeader(c, h.headers[c]);
            if (h.beforeSend && (h.beforeSend.call(p, x, h) === !1 || 2 === _)) return x.abort();
            w = "abort";
            for (c in {
                success: 1,
                error: 1,
                complete: 1
            }) x[c](h[c]);
            if (i = L(bn, h, e, x)) {
                x.readyState = 1, l && f.trigger("ajaxSend", [x, h]), h.async && h.timeout > 0 && (a = setTimeout(function() {
                    x.abort("timeout")
                }, h.timeout));
                try {
                    _ = 1, i.send(v, n)
                } catch (b) {
                    if (!(2 > _)) throw b;
                    n(-1, b)
                }
            } else n(-1, "No Transport");
            return x
        },
        getJSON: function(t, e, n) {
            return J.get(t, e, n, "json")
        },
        getScript: function(t, e) {
            return J.get(t, void 0, e, "script")
        }
    }), J.each(["get", "post"], function(t, e) {
        J[e] = function(t, n, i, r) {
            return J.isFunction(n) && (r = r || i, i = n, n = void 0), J.ajax({
                url: t,
                type: e,
                dataType: r,
                data: n,
                success: i
            })
        }
    }), J.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
        J.fn[e] = function(t) {
            return this.on(e, t)
        }
    }), J._evalUrl = function(t) {
        return J.ajax({
            url: t,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, J.fn.extend({
        wrapAll: function(t) {
            var e;
            return J.isFunction(t) ? this.each(function(e) {
                J(this).wrapAll(t.call(this, e))
            }) : (this[0] && (e = J(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                for (var t = this; t.firstElementChild;) t = t.firstElementChild;
                return t
            }).append(this)), this)
        },
        wrapInner: function(t) {
            return this.each(J.isFunction(t) ? function(e) {
                J(this).wrapInner(t.call(this, e))
            } : function() {
                var e = J(this),
                    n = e.contents();
                n.length ? n.wrapAll(t) : e.append(t)
            })
        },
        wrap: function(t) {
            var e = J.isFunction(t);
            return this.each(function(n) {
                J(this).wrapAll(e ? t.call(this, n) : t)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                J.nodeName(this, "body") || J(this).replaceWith(this.childNodes)
            }).end()
        }
    }), J.expr.filters.hidden = function(t) {
        return t.offsetWidth <= 0 && t.offsetHeight <= 0
    }, J.expr.filters.visible = function(t) {
        return !J.expr.filters.hidden(t)
    };
    var Cn = /%20/g,
        Pn = /\[\]$/,
        En = /\r?\n/g,
        Sn = /^(?:submit|button|image|reset|file)$/i,
        On = /^(?:input|select|textarea|keygen)/i;
    J.param = function(t, e) {
        var n, i = [],
            r = function(t, e) {
                e = J.isFunction(e) ? e() : null == e ? "" : e, i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
            };
        if (void 0 === e && (e = J.ajaxSettings && J.ajaxSettings.traditional), J.isArray(t) || t.jquery && !J.isPlainObject(t)) J.each(t, function() {
            r(this.name, this.value)
        });
        else
            for (n in t) z(n, t[n], e, r);
        return i.join("&").replace(Cn, "+")
    }, J.fn.extend({
        serialize: function() {
            return J.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var t = J.prop(this, "elements");
                return t ? J.makeArray(t) : this
            }).filter(function() {
                var t = this.type;
                return this.name && !J(this).is(":disabled") && On.test(this.nodeName) && !Sn.test(t) && (this.checked || !ke.test(t))
            }).map(function(t, e) {
                var n = J(this).val();
                return null == n ? null : J.isArray(n) ? J.map(n, function(t) {
                    return {
                        name: e.name,
                        value: t.replace(En, "\r\n")
                    }
                }) : {
                    name: e.name,
                    value: n.replace(En, "\r\n")
                }
            }).get()
        }
    }), J.ajaxSettings.xhr = function() {
        try {
            return new XMLHttpRequest
        } catch (t) {}
    };
    var An = 0,
        Nn = {}, jn = {
            0: 200,
            1223: 204
        }, Mn = J.ajaxSettings.xhr();
    t.ActiveXObject && J(t).on("unload", function() {
        for (var t in Nn) Nn[t]()
    }), Z.cors = !! Mn && "withCredentials" in Mn, Z.ajax = Mn = !! Mn, J.ajaxTransport(function(t) {
        var e;
        return Z.cors || Mn && !t.crossDomain ? {
            send: function(n, i) {
                var r, o = t.xhr(),
                    s = ++An;
                if (o.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                    for (r in t.xhrFields) o[r] = t.xhrFields[r];
                t.mimeType && o.overrideMimeType && o.overrideMimeType(t.mimeType), t.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                for (r in n) o.setRequestHeader(r, n[r]);
                e = function(t) {
                    return function() {
                        e && (delete Nn[s], e = o.onload = o.onerror = null, "abort" === t ? o.abort() : "error" === t ? i(o.status, o.statusText) : i(jn[o.status] || o.status, o.statusText, "string" == typeof o.responseText ? {
                            text: o.responseText
                        } : void 0, o.getAllResponseHeaders()))
                    }
                }, o.onload = e(), o.onerror = e("error"), e = Nn[s] = e("abort");
                try {
                    o.send(t.hasContent && t.data || null)
                } catch (a) {
                    if (e) throw a
                }
            },
            abort: function() {
                e && e()
            }
        } : void 0
    }), J.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(t) {
                return J.globalEval(t), t
            }
        }
    }), J.ajaxPrefilter("script", function(t) {
        void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
    }), J.ajaxTransport("script", function(t) {
        if (t.crossDomain) {
            var e, n;
            return {
                send: function(i, r) {
                    e = J("<script>").prop({
                        async: !0,
                        charset: t.scriptCharset,
                        src: t.url
                    }).on("load error", n = function(t) {
                        e.remove(), n = null, t && r("error" === t.type ? 404 : 200, t.type)
                    }), G.head.appendChild(e[0])
                },
                abort: function() {
                    n && n()
                }
            }
        }
    });
    var Dn = [],
        Rn = /(=)\?(?=&|$)|\?\?/;
    J.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var t = Dn.pop() || J.expando + "_" + cn++;
            return this[t] = !0, t
        }
    }), J.ajaxPrefilter("json jsonp", function(e, n, i) {
        var r, o, s, a = e.jsonp !== !1 && (Rn.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && Rn.test(e.data) && "data");
        return a || "jsonp" === e.dataTypes[0] ? (r = e.jsonpCallback = J.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Rn, "$1" + r) : e.jsonp !== !1 && (e.url += (hn.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function() {
            return s || J.error(r + " was not called"), s[0]
        }, e.dataTypes[0] = "json", o = t[r], t[r] = function() {
            s = arguments
        }, i.always(function() {
            t[r] = o, e[r] && (e.jsonpCallback = n.jsonpCallback, Dn.push(r)), s && J.isFunction(o) && o(s[0]), s = o = void 0
        }), "script") : void 0
    }), J.parseHTML = function(t, e, n) {
        if (!t || "string" != typeof t) return null;
        "boolean" == typeof e && (n = e, e = !1), e = e || G;
        var i = se.exec(t),
            r = !n && [];
        return i ? [e.createElement(i[1])] : (i = J.buildFragment([t], e, r), r && r.length && J(r).remove(), J.merge([], i.childNodes))
    };
    var Ln = J.fn.load;
    J.fn.load = function(t, e, n) {
        if ("string" != typeof t && Ln) return Ln.apply(this, arguments);
        var i, r, o, s = this,
            a = t.indexOf(" ");
        return a >= 0 && (i = J.trim(t.slice(a)), t = t.slice(0, a)), J.isFunction(e) ? (n = e, e = void 0) : e && "object" == typeof e && (r = "POST"), s.length > 0 && J.ajax({
            url: t,
            type: r,
            dataType: "html",
            data: e
        }).done(function(t) {
            o = arguments, s.html(i ? J("<div>").append(J.parseHTML(t)).find(i) : t)
        }).complete(n && function(t, e) {
            s.each(n, o || [t.responseText, e, t])
        }), this
    }, J.expr.filters.animated = function(t) {
        return J.grep(J.timers, function(e) {
            return t === e.elem
        }).length
    };
    var In = t.document.documentElement;
    J.offset = {
        setOffset: function(t, e, n) {
            var i, r, o, s, a, u, l, c = J.css(t, "position"),
                h = J(t),
                p = {};
            "static" === c && (t.style.position = "relative"), a = h.offset(), o = J.css(t, "top"), u = J.css(t, "left"), l = ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1, l ? (i = h.position(), s = i.top, r = i.left) : (s = parseFloat(o) || 0, r = parseFloat(u) || 0), J.isFunction(e) && (e = e.call(t, n, a)), null != e.top && (p.top = e.top - a.top + s), null != e.left && (p.left = e.left - a.left + r), "using" in e ? e.using.call(t, p) : h.css(p)
        }
    }, J.fn.extend({
        offset: function(t) {
            if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                J.offset.setOffset(this, t, e)
            });
            var e, n, i = this[0],
                r = {
                    top: 0,
                    left: 0
                }, o = i && i.ownerDocument;
            return o ? (e = o.documentElement, J.contains(e, i) ? (typeof i.getBoundingClientRect !== Ce && (r = i.getBoundingClientRect()), n = X(o), {
                top: r.top + n.pageYOffset - e.clientTop,
                left: r.left + n.pageXOffset - e.clientLeft
            }) : r) : void 0
        },
        position: function() {
            if (this[0]) {
                var t, e, n = this[0],
                    i = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === J.css(n, "position") ? e = n.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), J.nodeName(t[0], "html") || (i = t.offset()), i.top += J.css(t[0], "borderTopWidth", !0), i.left += J.css(t[0], "borderLeftWidth", !0)), {
                    top: e.top - i.top - J.css(n, "marginTop", !0),
                    left: e.left - i.left - J.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var t = this.offsetParent || In; t && !J.nodeName(t, "html") && "static" === J.css(t, "position");) t = t.offsetParent;
                return t || In
            })
        }
    }), J.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, n) {
        var i = "pageYOffset" === n;
        J.fn[e] = function(r) {
            return ge(this, function(e, r, o) {
                var s = X(e);
                return void 0 === o ? s ? s[n] : e[r] : void(s ? s.scrollTo(i ? t.pageXOffset : o, i ? o : t.pageYOffset) : e[r] = o)
            }, e, r, arguments.length, null)
        }
    }), J.each(["top", "left"], function(t, e) {
        J.cssHooks[e] = b(Z.pixelPosition, function(t, n) {
            return n ? (n = x(t, e), He.test(n) ? J(t).position()[e] + "px" : n) : void 0
        })
    }), J.each({
        Height: "height",
        Width: "width"
    }, function(t, e) {
        J.each({
            padding: "inner" + t,
            content: e,
            "": "outer" + t
        }, function(n, i) {
            J.fn[i] = function(i, r) {
                var o = arguments.length && (n || "boolean" != typeof i),
                    s = n || (i === !0 || r === !0 ? "margin" : "border");
                return ge(this, function(e, n, i) {
                    var r;
                    return J.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + t], r["scroll" + t], e.body["offset" + t], r["offset" + t], r["client" + t])) : void 0 === i ? J.css(e, n, s) : J.style(e, n, i, s)
                }, e, o ? i : void 0, o, null)
            }
        })
    }), J.fn.size = function() {
        return this.length
    }, J.fn.andSelf = J.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return J
    });
    var $n = t.jQuery,
        Fn = t.$;
    return J.noConflict = function(e) {
        return t.$ === J && (t.$ = Fn), e && t.jQuery === J && (t.jQuery = $n), J
    }, typeof e === Ce && (t.jQuery = t.$ = J), J
}),
function() {
    "use strict";
    window.copy = function(t) {
        var e = null;
        if (!t || "object" != typeof t || "undefined" != typeof HTMLElement && t instanceof HTMLElement || t instanceof Class || "undefined" != typeof THREE && t instanceof THREE.Object3D || "undefined" != typeof jQuery && t instanceof jQuery) return t;
        if (t instanceof Array) {
            e = [];
            for (var n = 0, i = t.length; i > n; n++) e[n] = copy(t[n]);
            return e
        }
        e = {};
        for (var n in t) e[n] = copy(t[n]);
        return e
    }, window.merge = function(t, e) {
        for (var n in e) {
            var i = e[n];
            "object" != typeof i || i instanceof HTMLElement || i instanceof Class || "undefined" != typeof THREE && i instanceof THREE.Object3D || "undefined" != typeof i && i instanceof jQuery ? t[n] = i : (t[n] && "object" == typeof t[n] || (t[n] = i instanceof Array ? [] : {}), merge(t[n], i))
        }
        return t
    };
    var t = !1,
        e = /xyz/.test(function() {
            xyz
        }) ? /\b_super\b/ : /.*/;
    window.Class = function() {};
    var n = function(t) {
        var n = this.prototype,
            i = {};
        for (var r in t) "function" == typeof t[r] && "function" == typeof n[r] && e.test(t[r]) ? (i[r] = n[r], n[r] = function(t, e) {
            return function() {
                var n = this._super;
                this._super = i[t];
                var r = e.apply(this, arguments);
                return this._super = n, r
            }
        }(r, t[r])) : n[r] = t[r]
    };
    window.Class.extend = function(i) {
        function r() {
            if (!t) {
                if (this.staticInstantiate) {
                    var e = this.staticInstantiate.apply(this, arguments);
                    if (e) return e
                }
                for (var n in this) "object" == typeof this[n] && (this[n] = copy(this[n]));
                this.init && this.init.apply(this, arguments)
            }
            return this
        }
        var o = this.prototype;
        t = !0;
        var s = new this;
        t = !1;
        for (var a in i) s[a] = "function" == typeof i[a] && "function" == typeof o[a] && e.test(i[a]) ? function(t, e) {
            return function() {
                var n = this._super;
                this._super = o[t];
                var i = e.apply(this, arguments);
                return this._super = n, i
            }
        }(a, i[a]) : i[a];
        return r.prototype = s, r.prototype.constructor = r, r.extend = window.Class.extend, r.inject = n, r
    }
}(),
function(t) {
    "use strict";
    if ("function" == typeof bootstrap) bootstrap("promise", t);
    else if ("object" == typeof exports && "object" == typeof module) module.exports = t();
    else if ("function" == typeof define && define.amd) define(t);
    else if ("undefined" != typeof ses) {
        if (!ses.ok()) return;
        ses.makeQ = t
    } else {
        if ("undefined" == typeof self) throw new Error("This environment was not anticiapted by Q. Please file a bug.");
        self.Q = t()
    }
}(function() {
    "use strict";

    function t(t) {
        return function() {
            return U.apply(t, arguments)
        }
    }

    function e(t) {
        return t === Object(t)
    }

    function n(t) {
        return "[object StopIteration]" === ee(t) || t instanceof q
    }

    function i(t, e) {
        if (z && e.stack && "object" == typeof t && null !== t && t.stack && -1 === t.stack.indexOf(ne)) {
            for (var n = [], i = e; i; i = i.source) i.stack && n.unshift(i.stack);
            n.unshift(t.stack);
            var o = n.join("\n" + ne + "\n");
            t.stack = r(o)
        }
    }

    function r(t) {
        for (var e = t.split("\n"), n = [], i = 0; i < e.length; ++i) {
            var r = e[i];
            a(r) || o(r) || !r || n.push(r)
        }
        return n.join("\n")
    }

    function o(t) {
        return -1 !== t.indexOf("(module.js:") || -1 !== t.indexOf("(node.js:")
    }

    function s(t) {
        var e = /at .+ \((.+):(\d+):(?:\d+)\)$/.exec(t);
        if (e) return [e[1], Number(e[2])];
        var n = /at ([^ ]+):(\d+):(?:\d+)$/.exec(t);
        if (n) return [n[1], Number(n[2])];
        var i = /.*@(.+):(\d+)$/.exec(t);
        return i ? [i[1], Number(i[2])] : void 0
    }

    function a(t) {
        var e = s(t);
        if (!e) return !1;
        var n = e[0],
            i = e[1];
        return n === H && i >= Y && se >= i
    }

    function u() {
        if (z) try {
            throw new Error
        } catch (t) {
            var e = t.stack.split("\n"),
                n = e[0].indexOf("@") > 0 ? e[1] : e[2],
                i = s(n);
            if (!i) return;
            return H = i[0], i[1]
        }
    }

    function l(t, e, n) {
        return function() {
            return "undefined" != typeof console && "function" == typeof console.warn && console.warn(e + " is deprecated, use " + n + " instead.", new Error("").stack), t.apply(t, arguments)
        }
    }

    function c(t) {
        return t instanceof d ? t : y(t) ? E(t) : P(t)
    }

    function h() {
        function t(t) {
            e = t, o.source = t, Q(n, function(e, n) {
                c.nextTick(function() {
                    t.promiseDispatch.apply(t, n)
                })
            }, void 0), n = void 0, i = void 0
        }
        var e, n = [],
            i = [],
            r = K(h.prototype),
            o = K(d.prototype);
        if (o.promiseDispatch = function(t, r, o) {
            var s = V(arguments);
            n ? (n.push(s), "when" === r && o[1] && i.push(o[1])) : c.nextTick(function() {
                e.promiseDispatch.apply(e, s)
            })
        }, o.valueOf = function() {
            if (n) return o;
            var t = g(e);
            return v(t) && (e = t), t
        }, o.inspect = function() {
            return e ? e.inspect() : {
                state: "pending"
            }
        }, c.longStackSupport && z) try {
            throw new Error
        } catch (s) {
            o.stack = s.stack.substring(s.stack.indexOf("\n") + 1)
        }
        return r.promise = o, r.resolve = function(n) {
            e || t(c(n))
        }, r.fulfill = function(n) {
            e || t(P(n))
        }, r.reject = function(n) {
            e || t(C(n))
        }, r.notify = function(t) {
            e || Q(i, function(e, n) {
                c.nextTick(function() {
                    n(t)
                })
            }, void 0)
        }, r
    }

    function p(t) {
        if ("function" != typeof t) throw new TypeError("resolver must be a function.");
        var e = h();
        try {
            t(e.resolve, e.reject, e.notify)
        } catch (n) {
            e.reject(n)
        }
        return e.promise
    }

    function f(t) {
        return p(function(e, n) {
            for (var i = 0, r = t.length; r > i; i++) c(t[i]).then(e, n)
        })
    }

    function d(t, e, n) {
        void 0 === e && (e = function(t) {
            return C(new Error("Promise does not support operation: " + t))
        }), void 0 === n && (n = function() {
            return {
                state: "unknown"
            }
        });
        var i = K(d.prototype);
        if (i.promiseDispatch = function(n, r, o) {
            var s;
            try {
                s = t[r] ? t[r].apply(i, o) : e.call(i, r, o)
            } catch (a) {
                s = C(a)
            }
            n && n(s)
        }, i.inspect = n, n) {
            var r = n();
            "rejected" === r.state && (i.exception = r.reason), i.valueOf = function() {
                var t = n();
                return "pending" === t.state || "rejected" === t.state ? i : t.value
            }
        }
        return i
    }

    function m(t, e, n, i) {
        return c(t).then(e, n, i)
    }

    function g(t) {
        if (v(t)) {
            var e = t.inspect();
            if ("fulfilled" === e.state) return e.value
        }
        return t
    }

    function v(t) {
        return t instanceof d
    }

    function y(t) {
        return e(t) && "function" == typeof t.then
    }

    function _(t) {
        return v(t) && "pending" === t.inspect().state
    }

    function w(t) {
        return !v(t) || "fulfilled" === t.inspect().state
    }

    function x(t) {
        return v(t) && "rejected" === t.inspect().state
    }

    function b() {
        ie.length = 0, re.length = 0, oe || (oe = !0)
    }

    function T(t, e) {
        oe && (re.push(t), ie.push(e && "undefined" != typeof e.stack ? e.stack : "(no stack) " + e))
    }

    function k(t) {
        if (oe) {
            var e = Z(re, t); - 1 !== e && (re.splice(e, 1), ie.splice(e, 1))
        }
    }

    function C(t) {
        var e = d({
            when: function(e) {
                return e && k(this), e ? e(t) : this
            }
        }, function() {
            return this
        }, function() {
            return {
                state: "rejected",
                reason: t
            }
        });
        return T(e, t), e
    }

    function P(t) {
        return d({
            when: function() {
                return t
            },
            get: function(e) {
                return t[e]
            },
            set: function(e, n) {
                t[e] = n
            },
            "delete": function(e) {
                delete t[e]
            },
            post: function(e, n) {
                return null === e || void 0 === e ? t.apply(void 0, n) : t[e].apply(t, n)
            },
            apply: function(e, n) {
                return t.apply(e, n)
            },
            keys: function() {
                return te(t)
            }
        }, void 0, function() {
            return {
                state: "fulfilled",
                value: t
            }
        })
    }

    function E(t) {
        var e = h();
        return c.nextTick(function() {
            try {
                t.then(e.resolve, e.reject, e.notify)
            } catch (n) {
                e.reject(n)
            }
        }), e.promise
    }

    function S(t) {
        return d({
            isDef: function() {}
        }, function(e, n) {
            return D(t, e, n)
        }, function() {
            return c(t).inspect()
        })
    }

    function O(t, e, n) {
        return c(t).spread(e, n)
    }

    function A(t) {
        return function() {
            function e(t, e) {
                var s;
                if ("undefined" == typeof StopIteration) {
                    try {
                        s = i[t](e)
                    } catch (a) {
                        return C(a)
                    }
                    return s.done ? c(s.value) : m(s.value, r, o)
                }
                try {
                    s = i[t](e)
                } catch (a) {
                    return n(a) ? c(a.value) : C(a)
                }
                return m(s, r, o)
            }
            var i = t.apply(this, arguments),
                r = e.bind(e, "next"),
                o = e.bind(e, "throw");
            return r()
        }
    }

    function N(t) {
        c.done(c.async(t)())
    }

    function j(t) {
        throw new q(t)
    }

    function M(t) {
        return function() {
            return O([this, R(arguments)], function(e, n) {
                return t.apply(e, n)
            })
        }
    }

    function D(t, e, n) {
        return c(t).dispatch(e, n)
    }

    function R(t) {
        return m(t, function(t) {
            var e = 0,
                n = h();
            return Q(t, function(i, r, o) {
                var s;
                v(r) && "fulfilled" === (s = r.inspect()).state ? t[o] = s.value : (++e, m(r, function(i) {
                    t[o] = i, 0 === --e && n.resolve(t)
                }, n.reject, function(t) {
                    n.notify({
                        index: o,
                        value: t
                    })
                }))
            }, void 0), 0 === e && n.resolve(t), n.promise
        })
    }

    function L(t) {
        return m(t, function(t) {
            return t = G(t, c), m(R(G(t, function(t) {
                return m(t, W, W)
            })), function() {
                return t
            })
        })
    }

    function I(t) {
        return c(t).allSettled()
    }

    function $(t, e) {
        return c(t).then(void 0, void 0, e)
    }

    function F(t, e) {
        return c(t).nodeify(e)
    }
    var z = !1;
    try {
        throw new Error
    } catch (X) {
        z = !! X.stack
    }
    var H, q, Y = u(),
        W = function() {}, B = function() {
            function t() {
                for (; e.next;) {
                    e = e.next;
                    var n = e.task;
                    e.task = void 0;
                    var r = e.domain;
                    r && (e.domain = void 0, r.enter());
                    try {
                        n()
                    } catch (s) {
                        if (o) throw r && r.exit(), setTimeout(t, 0), r && r.enter(), s;
                        setTimeout(function() {
                            throw s
                        }, 0)
                    }
                    r && r.exit()
                }
                i = !1
            }
            var e = {
                task: void 0,
                next: null
            }, n = e,
                i = !1,
                r = void 0,
                o = !1;
            if (B = function(t) {
                n = n.next = {
                    task: t,
                    domain: o && process.domain,
                    next: null
                }, i || (i = !0, r())
            }, "undefined" != typeof process && process.nextTick) o = !0, r = function() {
                process.nextTick(t)
            };
            else if ("function" == typeof setImmediate) r = "undefined" != typeof window ? setImmediate.bind(window, t) : function() {
                setImmediate(t)
            };
            else if ("undefined" != typeof MessageChannel) {
                var s = new MessageChannel;
                s.port1.onmessage = function() {
                    r = a, s.port1.onmessage = t, t()
                };
                var a = function() {
                    s.port2.postMessage(0)
                };
                r = function() {
                    setTimeout(t, 0), a()
                }
            } else r = function() {
                setTimeout(t, 0)
            };
            return B
        }(),
        U = Function.call,
        V = t(Array.prototype.slice),
        Q = t(Array.prototype.reduce || function(t, e) {
            var n = 0,
                i = this.length;
            if (1 === arguments.length)
                for (;;) {
                    if (n in this) {
                        e = this[n++];
                        break
                    }
                    if (++n >= i) throw new TypeError
                }
            for (; i > n; n++) n in this && (e = t(e, this[n], n));
            return e
        }),
        Z = t(Array.prototype.indexOf || function(t) {
            for (var e = 0; e < this.length; e++)
                if (this[e] === t) return e;
            return -1
        }),
        G = t(Array.prototype.map || function(t, e) {
            var n = this,
                i = [];
            return Q(n, function(r, o, s) {
                i.push(t.call(e, o, s, n))
            }, void 0), i
        }),
        K = Object.create || function(t) {
            function e() {}
            return e.prototype = t, new e
        }, J = t(Object.prototype.hasOwnProperty),
        te = Object.keys || function(t) {
            var e = [];
            for (var n in t) J(t, n) && e.push(n);
            return e
        }, ee = t(Object.prototype.toString);
    q = "undefined" != typeof ReturnValue ? ReturnValue : function(t) {
        this.value = t
    };
    var ne = "From previous event:";
    c.resolve = c, c.nextTick = B, c.longStackSupport = !1, "object" == typeof process && process && process.env && process.env.Q_DEBUG && (c.longStackSupport = !0), c.defer = h, h.prototype.makeNodeResolver = function() {
        var t = this;
        return function(e, n) {
            e ? t.reject(e) : t.resolve(arguments.length > 2 ? V(arguments, 1) : n)
        }
    }, c.Promise = p, c.promise = p, p.race = f, p.all = R, p.reject = C, p.resolve = c, c.passByCopy = function(t) {
        return t
    }, d.prototype.passByCopy = function() {
        return this
    }, c.join = function(t, e) {
        return c(t).join(e)
    }, d.prototype.join = function(t) {
        return c([this, t]).spread(function(t, e) {
            if (t === e) return t;
            throw new Error("Can't join: not the same: " + t + " " + e)
        })
    }, c.race = f, d.prototype.race = function() {
        return this.then(c.race)
    }, c.makePromise = d, d.prototype.toString = function() {
        return "[object Promise]"
    }, d.prototype.then = function(t, e, n) {
        function r(e) {
            try {
                return "function" == typeof t ? t(e) : e
            } catch (n) {
                return C(n)
            }
        }

        function o(t) {
            if ("function" == typeof e) {
                i(t, a);
                try {
                    return e(t)
                } catch (n) {
                    return C(n)
                }
            }
            return C(t)
        }

        function s(t) {
            return "function" == typeof n ? n(t) : t
        }
        var a = this,
            u = h(),
            l = !1;
        return c.nextTick(function() {
            a.promiseDispatch(function(t) {
                l || (l = !0, u.resolve(r(t)))
            }, "when", [
                function(t) {
                    l || (l = !0, u.resolve(o(t)))
                }
            ])
        }), a.promiseDispatch(void 0, "when", [void 0,
            function(t) {
                var e, n = !1;
                try {
                    e = s(t)
                } catch (i) {
                    if (n = !0, !c.onerror) throw i;
                    c.onerror(i)
                }
                n || u.notify(e)
            }
        ]), u.promise
    }, c.tap = function(t, e) {
        return c(t).tap(e)
    }, d.prototype.tap = function(t) {
        return t = c(t), this.then(function(e) {
            return t.fcall(e).thenResolve(e)
        })
    }, c.when = m, d.prototype.thenResolve = function(t) {
        return this.then(function() {
            return t
        })
    }, c.thenResolve = function(t, e) {
        return c(t).thenResolve(e)
    }, d.prototype.thenReject = function(t) {
        return this.then(function() {
            throw t
        })
    }, c.thenReject = function(t, e) {
        return c(t).thenReject(e)
    }, c.nearer = g, c.isPromise = v, c.isPromiseAlike = y, c.isPending = _, d.prototype.isPending = function() {
        return "pending" === this.inspect().state
    }, c.isFulfilled = w, d.prototype.isFulfilled = function() {
        return "fulfilled" === this.inspect().state
    }, c.isRejected = x, d.prototype.isRejected = function() {
        return "rejected" === this.inspect().state
    };
    var ie = [],
        re = [],
        oe = !0;
    c.resetUnhandledRejections = b, c.getUnhandledReasons = function() {
        return ie.slice()
    }, c.stopUnhandledRejectionTracking = function() {
        b(), oe = !1
    }, b(), c.reject = C, c.fulfill = P, c.master = S, c.spread = O, d.prototype.spread = function(t, e) {
        return this.all().then(function(e) {
            return t.apply(void 0, e)
        }, e)
    }, c.async = A, c.spawn = N, c["return"] = j, c.promised = M, c.dispatch = D, d.prototype.dispatch = function(t, e) {
        var n = this,
            i = h();
        return c.nextTick(function() {
            n.promiseDispatch(i.resolve, t, e)
        }), i.promise
    }, c.get = function(t, e) {
        return c(t).dispatch("get", [e])
    }, d.prototype.get = function(t) {
        return this.dispatch("get", [t])
    }, c.set = function(t, e, n) {
        return c(t).dispatch("set", [e, n])
    }, d.prototype.set = function(t, e) {
        return this.dispatch("set", [t, e])
    }, c.del = c["delete"] = function(t, e) {
        return c(t).dispatch("delete", [e])
    }, d.prototype.del = d.prototype["delete"] = function(t) {
        return this.dispatch("delete", [t])
    }, c.mapply = c.post = function(t, e, n) {
        return c(t).dispatch("post", [e, n])
    }, d.prototype.mapply = d.prototype.post = function(t, e) {
        return this.dispatch("post", [t, e])
    }, c.send = c.mcall = c.invoke = function(t, e) {
        return c(t).dispatch("post", [e, V(arguments, 2)])
    }, d.prototype.send = d.prototype.mcall = d.prototype.invoke = function(t) {
        return this.dispatch("post", [t, V(arguments, 1)])
    }, c.fapply = function(t, e) {
        return c(t).dispatch("apply", [void 0, e])
    }, d.prototype.fapply = function(t) {
        return this.dispatch("apply", [void 0, t])
    }, c["try"] = c.fcall = function(t) {
        return c(t).dispatch("apply", [void 0, V(arguments, 1)])
    }, d.prototype.fcall = function() {
        return this.dispatch("apply", [void 0, V(arguments)])
    }, c.fbind = function(t) {
        var e = c(t),
            n = V(arguments, 1);
        return function() {
            return e.dispatch("apply", [this, n.concat(V(arguments))])
        }
    }, d.prototype.fbind = function() {
        var t = this,
            e = V(arguments);
        return function() {
            return t.dispatch("apply", [this, e.concat(V(arguments))])
        }
    }, c.keys = function(t) {
        return c(t).dispatch("keys", [])
    }, d.prototype.keys = function() {
        return this.dispatch("keys", [])
    }, c.all = R, d.prototype.all = function() {
        return R(this)
    }, c.allResolved = l(L, "allResolved", "allSettled"), d.prototype.allResolved = function() {
        return L(this)
    }, c.allSettled = I, d.prototype.allSettled = function() {
        return this.then(function(t) {
            return R(G(t, function(t) {
                function e() {
                    return t.inspect()
                }
                return t = c(t), t.then(e, e)
            }))
        })
    }, c.fail = c["catch"] = function(t, e) {
        return c(t).then(void 0, e)
    }, d.prototype.fail = d.prototype["catch"] = function(t) {
        return this.then(void 0, t)
    }, c.progress = $, d.prototype.progress = function(t) {
        return this.then(void 0, void 0, t)
    }, c.fin = c["finally"] = function(t, e) {
        return c(t)["finally"](e)
    }, d.prototype.fin = d.prototype["finally"] = function(t) {
        return t = c(t), this.then(function(e) {
            return t.fcall().then(function() {
                return e
            })
        }, function(e) {
            return t.fcall().then(function() {
                throw e
            })
        })
    }, c.done = function(t, e, n, i) {
        return c(t).done(e, n, i)
    }, d.prototype.done = function(t, e, n) {
        var r = function(t) {
            c.nextTick(function() {
                if (i(t, o), !c.onerror) throw t;
                c.onerror(t)
            })
        }, o = t || e || n ? this.then(t, e, n) : this;
        "object" == typeof process && process && process.domain && (r = process.domain.bind(r)), o.then(void 0, r)
    }, c.timeout = function(t, e, n) {
        return c(t).timeout(e, n)
    }, d.prototype.timeout = function(t, e) {
        var n = h(),
            i = setTimeout(function() {
                e && "string" != typeof e || (e = new Error(e || "Timed out after " + t + " ms"), e.code = "ETIMEDOUT"), n.reject(e)
            }, t);
        return this.then(function(t) {
            clearTimeout(i), n.resolve(t)
        }, function(t) {
            clearTimeout(i), n.reject(t)
        }, n.notify), n.promise
    }, c.delay = function(t, e) {
        return void 0 === e && (e = t, t = void 0), c(t).delay(e)
    }, d.prototype.delay = function(t) {
        return this.then(function(e) {
            var n = h();
            return setTimeout(function() {
                n.resolve(e)
            }, t), n.promise
        })
    }, c.nfapply = function(t, e) {
        return c(t).nfapply(e)
    }, d.prototype.nfapply = function(t) {
        var e = h(),
            n = V(t);
        return n.push(e.makeNodeResolver()), this.fapply(n).fail(e.reject), e.promise
    }, c.nfcall = function(t) {
        var e = V(arguments, 1);
        return c(t).nfapply(e)
    }, d.prototype.nfcall = function() {
        var t = V(arguments),
            e = h();
        return t.push(e.makeNodeResolver()), this.fapply(t).fail(e.reject), e.promise
    }, c.nfbind = c.denodeify = function(t) {
        var e = V(arguments, 1);
        return function() {
            var n = e.concat(V(arguments)),
                i = h();
            return n.push(i.makeNodeResolver()), c(t).fapply(n).fail(i.reject), i.promise
        }
    }, d.prototype.nfbind = d.prototype.denodeify = function() {
        var t = V(arguments);
        return t.unshift(this), c.denodeify.apply(void 0, t)
    }, c.nbind = function(t, e) {
        var n = V(arguments, 2);
        return function() {
            function i() {
                return t.apply(e, arguments)
            }
            var r = n.concat(V(arguments)),
                o = h();
            return r.push(o.makeNodeResolver()), c(i).fapply(r).fail(o.reject), o.promise
        }
    }, d.prototype.nbind = function() {
        var t = V(arguments, 0);
        return t.unshift(this), c.nbind.apply(void 0, t)
    }, c.nmapply = c.npost = function(t, e, n) {
        return c(t).npost(e, n)
    }, d.prototype.nmapply = d.prototype.npost = function(t, e) {
        var n = V(e || []),
            i = h();
        return n.push(i.makeNodeResolver()), this.dispatch("post", [t, n]).fail(i.reject), i.promise
    }, c.nsend = c.nmcall = c.ninvoke = function(t, e) {
        var n = V(arguments, 2),
            i = h();
        return n.push(i.makeNodeResolver()), c(t).dispatch("post", [e, n]).fail(i.reject), i.promise
    }, d.prototype.nsend = d.prototype.nmcall = d.prototype.ninvoke = function(t) {
        var e = V(arguments, 1),
            n = h();
        return e.push(n.makeNodeResolver()), this.dispatch("post", [t, e]).fail(n.reject), n.promise
    }, c.nodeify = F, d.prototype.nodeify = function(t) {
        return t ? void this.then(function(e) {
            c.nextTick(function() {
                t(null, e)
            })
        }, function(e) {
            c.nextTick(function() {
                t(e)
            })
        }) : this
    };
    var se = u();
    return c
}),
function() {
    "use strict";

    function t(e, i) {
        function r(t, e) {
            return function() {
                return t.apply(e, arguments)
            }
        }
        var o;
        if (i = i || {}, this.trackingClick = !1, this.trackingClickStart = 0, this.targetElement = null, this.touchStartX = 0, this.touchStartY = 0, this.lastTouchIdentifier = 0, this.touchBoundary = i.touchBoundary || 10, this.layer = e, this.tapDelay = i.tapDelay || 200, this.tapTimeout = i.tapTimeout || 700, !t.notNeeded(e)) {
            for (var s = ["onMouse", "onClick", "onTouchStart", "onTouchMove", "onTouchEnd", "onTouchCancel"], a = this, u = 0, l = s.length; l > u; u++) a[s[u]] = r(a[s[u]], a);
            n && (e.addEventListener("mouseover", this.onMouse, !0), e.addEventListener("mousedown", this.onMouse, !0), e.addEventListener("mouseup", this.onMouse, !0)), e.addEventListener("click", this.onClick, !0), e.addEventListener("touchstart", this.onTouchStart, !1), e.addEventListener("touchmove", this.onTouchMove, !1), e.addEventListener("touchend", this.onTouchEnd, !1), e.addEventListener("touchcancel", this.onTouchCancel, !1), Event.prototype.stopImmediatePropagation || (e.removeEventListener = function(t, n, i) {
                var r = Node.prototype.removeEventListener;
                "click" === t ? r.call(e, t, n.hijacked || n, i) : r.call(e, t, n, i)
            }, e.addEventListener = function(t, n, i) {
                var r = Node.prototype.addEventListener;
                "click" === t ? r.call(e, t, n.hijacked || (n.hijacked = function(t) {
                    t.propagationStopped || n(t)
                }), i) : r.call(e, t, n, i)
            }), "function" == typeof e.onclick && (o = e.onclick, e.addEventListener("click", function(t) {
                o(t)
            }, !1), e.onclick = null)
        }
    }
    var e = navigator.userAgent.indexOf("Windows Phone") >= 0,
        n = navigator.userAgent.indexOf("Android") > 0 && !e,
        i = /iP(ad|hone|od)/.test(navigator.userAgent) && !e,
        r = i && /OS 4_\d(_\d)?/.test(navigator.userAgent),
        o = i && /OS [6-7]_\d/.test(navigator.userAgent),
        s = navigator.userAgent.indexOf("BB10") > 0;
    t.prototype.needsClick = function(t) {
        switch (t.nodeName.toLowerCase()) {
            case "button":
            case "select":
            case "textarea":
                if (t.disabled) return !0;
                break;
            case "input":
                if (i && "file" === t.type || t.disabled) return !0;
                break;
            case "label":
            case "iframe":
            case "video":
                return !0
        }
        return /\bneedsclick\b/.test(t.className)
    }, t.prototype.needsFocus = function(t) {
        switch (t.nodeName.toLowerCase()) {
            case "textarea":
                return !0;
            case "select":
                return !n;
            case "input":
                switch (t.type) {
                    case "button":
                    case "checkbox":
                    case "file":
                    case "image":
                    case "radio":
                    case "submit":
                        return !1
                }
                return !t.disabled && !t.readOnly;
            default:
                return /\bneedsfocus\b/.test(t.className)
        }
    }, t.prototype.sendClick = function(t, e) {
        var n, i;
        document.activeElement && document.activeElement !== t && document.activeElement.blur(), i = e.changedTouches[0], n = document.createEvent("MouseEvents"), n.initMouseEvent(this.determineEventType(t), !0, !0, window, 1, i.screenX, i.screenY, i.clientX, i.clientY, !1, !1, !1, !1, 0, null), n.forwardedTouchEvent = !0, t.dispatchEvent(n)
    }, t.prototype.determineEventType = function(t) {
        return n && "select" === t.tagName.toLowerCase() ? "mousedown" : "click"
    }, t.prototype.focus = function(t) {
        var e;
        i && t.setSelectionRange && 0 !== t.type.indexOf("date") && "time" !== t.type && "month" !== t.type ? (e = t.value.length, t.setSelectionRange(e, e)) : t.focus()
    }, t.prototype.updateScrollParent = function(t) {
        var e, n;
        if (e = t.fastClickScrollParent, !e || !e.contains(t)) {
            n = t;
            do {
                if (n.scrollHeight > n.offsetHeight) {
                    e = n, t.fastClickScrollParent = n;
                    break
                }
                n = n.parentElement
            } while (n)
        }
        e && (e.fastClickLastScrollTop = e.scrollTop)
    }, t.prototype.getTargetElementFromEventTarget = function(t) {
        return t.nodeType === Node.TEXT_NODE ? t.parentNode : t
    }, t.prototype.onTouchStart = function(t) {
        var e, n, o;
        if (t.targetTouches.length > 1) return !0;
        if (e = this.getTargetElementFromEventTarget(t.target), n = t.targetTouches[0], i) {
            if (o = window.getSelection(), o.rangeCount && !o.isCollapsed) return !0;
            if (!r) {
                if (n.identifier && n.identifier === this.lastTouchIdentifier) return t.preventDefault(), !1;
                this.lastTouchIdentifier = n.identifier, this.updateScrollParent(e)
            }
        }
        return this.trackingClick = !0, this.trackingClickStart = t.timeStamp, this.targetElement = e, this.touchStartX = n.pageX, this.touchStartY = n.pageY, t.timeStamp - this.lastClickTime < this.tapDelay && t.preventDefault(), !0
    }, t.prototype.touchHasMoved = function(t) {
        var e = t.changedTouches[0],
            n = this.touchBoundary;
        return Math.abs(e.pageX - this.touchStartX) > n || Math.abs(e.pageY - this.touchStartY) > n ? !0 : !1
    }, t.prototype.onTouchMove = function(t) {
        return this.trackingClick ? ((this.targetElement !== this.getTargetElementFromEventTarget(t.target) || this.touchHasMoved(t)) && (this.trackingClick = !1, this.targetElement = null), !0) : !0
    }, t.prototype.findControl = function(t) {
        return void 0 !== t.control ? t.control : t.htmlFor ? document.getElementById(t.htmlFor) : t.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")
    }, t.prototype.onTouchEnd = function(t) {
        var e, s, a, u, l, c = this.targetElement;
        if (!this.trackingClick) return !0;
        if (t.timeStamp - this.lastClickTime < this.tapDelay) return this.cancelNextClick = !0, !0;
        if (t.timeStamp - this.trackingClickStart > this.tapTimeout) return !0;
        if (this.cancelNextClick = !1, this.lastClickTime = t.timeStamp, s = this.trackingClickStart, this.trackingClick = !1, this.trackingClickStart = 0, o && (l = t.changedTouches[0], c = document.elementFromPoint(l.pageX - window.pageXOffset, l.pageY - window.pageYOffset) || c, c.fastClickScrollParent = this.targetElement.fastClickScrollParent), a = c.tagName.toLowerCase(), "label" === a) {
            if (e = this.findControl(c)) {
                if (this.focus(c), n) return !1;
                c = e
            }
        } else if (this.needsFocus(c)) return t.timeStamp - s > 100 || i && window.top !== window && "input" === a ? (this.targetElement = null, !1) : (this.focus(c), this.sendClick(c, t), i && "select" === a || (this.targetElement = null, t.preventDefault()), !1);
        return i && !r && (u = c.fastClickScrollParent, u && u.fastClickLastScrollTop !== u.scrollTop) ? !0 : (this.needsClick(c) || (t.preventDefault(), this.sendClick(c, t)), !1)
    }, t.prototype.onTouchCancel = function() {
        this.trackingClick = !1, this.targetElement = null
    }, t.prototype.onMouse = function(t) {
        return this.targetElement ? t.forwardedTouchEvent ? !0 : t.cancelable && (!this.needsClick(this.targetElement) || this.cancelNextClick) ? (t.stopImmediatePropagation ? t.stopImmediatePropagation() : t.propagationStopped = !0, t.stopPropagation(), t.preventDefault(), !1) : !0 : !0
    }, t.prototype.onClick = function(t) {
        var e;
        return this.trackingClick ? (this.targetElement = null, this.trackingClick = !1, !0) : "submit" === t.target.type && 0 === t.detail ? !0 : (e = this.onMouse(t), e || (this.targetElement = null), e)
    }, t.prototype.destroy = function() {
        var t = this.layer;
        n && (t.removeEventListener("mouseover", this.onMouse, !0), t.removeEventListener("mousedown", this.onMouse, !0), t.removeEventListener("mouseup", this.onMouse, !0)), t.removeEventListener("click", this.onClick, !0), t.removeEventListener("touchstart", this.onTouchStart, !1), t.removeEventListener("touchmove", this.onTouchMove, !1), t.removeEventListener("touchend", this.onTouchEnd, !1), t.removeEventListener("touchcancel", this.onTouchCancel, !1)
    }, t.notNeeded = function(t) {
        var e, i, r, o;
        if ("undefined" == typeof window.ontouchstart) return !0;
        if (i = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1]) {
            if (!n) return !0;
            if (e = document.querySelector("meta[name=viewport]")) {
                if (-1 !== e.content.indexOf("user-scalable=no")) return !0;
                if (i > 31 && document.documentElement.scrollWidth <= window.outerWidth) return !0
            }
        }
        if (s && (r = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/), r[1] >= 10 && r[2] >= 3 && (e = document.querySelector("meta[name=viewport]")))) {
            if (-1 !== e.content.indexOf("user-scalable=no")) return !0;
            if (document.documentElement.scrollWidth <= window.outerWidth) return !0
        }
        return "none" === t.style.msTouchAction || "manipulation" === t.style.touchAction ? !0 : (o = +(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1], o >= 27 && (e = document.querySelector("meta[name=viewport]"), e && (-1 !== e.content.indexOf("user-scalable=no") || document.documentElement.scrollWidth <= window.outerWidth)) ? !0 : "none" === t.style.touchAction || "manipulation" === t.style.touchAction ? !0 : !1)
    }, t.attach = function(e, n) {
        return new t(e, n)
    }, "function" == typeof define && "object" == typeof define.amd && define.amd ? define(function() {
        return t
    }) : "undefined" != typeof module && module.exports ? (module.exports = t.attach, module.exports.FastClick = t) : window.FastClick = t
}(), window.Modernizr = function(t, e, n) {
    function i(t) {
        d.cssText = t
    }

    function r(t, e) {
        return typeof t === e
    }
    var o, s, a, u = "2.8.3",
        l = {}, c = !0,
        h = e.documentElement,
        p = "modernizr",
        f = e.createElement(p),
        d = f.style,
        m = ({}.toString, " -webkit- -moz- -o- -ms- ".split(" ")),
        g = {}, v = [],
        y = v.slice,
        _ = function(t, n, i, r) {
            var o, s, a, u, l = e.createElement("div"),
                c = e.body,
                f = c || e.createElement("body");
            if (parseInt(i, 10))
                for (; i--;) a = e.createElement("div"), a.id = r ? r[i] : p + (i + 1), l.appendChild(a);
            return o = ["&#173;", '<style id="s', p, '">', t, "</style>"].join(""), l.id = p, (c ? l : f).innerHTML += o, f.appendChild(l), c || (f.style.background = "", f.style.overflow = "hidden", u = h.style.overflow, h.style.overflow = "hidden", h.appendChild(f)), s = n(l, t), c ? l.parentNode.removeChild(l) : (f.parentNode.removeChild(f), h.style.overflow = u), !! s
        }, w = {}.hasOwnProperty;
    a = r(w, "undefined") || r(w.call, "undefined") ? function(t, e) {
        return e in t && r(t.constructor.prototype[e], "undefined")
    } : function(t, e) {
        return w.call(t, e)
    }, Function.prototype.bind || (Function.prototype.bind = function(t) {
        var e = this;
        if ("function" != typeof e) throw new TypeError;
        var n = y.call(arguments, 1),
            i = function() {
                if (this instanceof i) {
                    var r = function() {};
                    r.prototype = e.prototype;
                    var o = new r,
                        s = e.apply(o, n.concat(y.call(arguments)));
                    return Object(s) === s ? s : o
                }
                return e.apply(t, n.concat(y.call(arguments)))
            };
        return i
    }), g.touch = function() {
        var n;
        return "ontouchstart" in t || t.DocumentTouch && e instanceof DocumentTouch ? n = !0 : _(["@media (", m.join("touch-enabled),("), p, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function(t) {
            n = 9 === t.offsetTop
        }), n
    };
    for (var x in g) a(g, x) && (s = x.toLowerCase(), l[s] = g[x](), v.push((l[s] ? "" : "no-") + s));
    return l.addTest = function(t, e) {
        if ("object" == typeof t)
            for (var i in t) a(t, i) && l.addTest(i, t[i]);
        else {
            if (t = t.toLowerCase(), l[t] !== n) return l;
            e = "function" == typeof e ? e() : e, "undefined" != typeof c && c && (h.className += " " + (e ? "" : "no-") + t), l[t] = e
        }
        return l
    }, i(""), f = o = null,
    function(t, e) {
        function n(t, e) {
            var n = t.createElement("p"),
                i = t.getElementsByTagName("head")[0] || t.documentElement;
            return n.innerHTML = "x<style>" + e + "</style>", i.insertBefore(n.lastChild, i.firstChild)
        }

        function i() {
            var t = y.elements;
            return "string" == typeof t ? t.split(" ") : t
        }

        function r(t) {
            var e = v[t[m]];
            return e || (e = {}, g++, t[m] = g, v[g] = e), e
        }

        function o(t, n, i) {
            if (n || (n = e), c) return n.createElement(t);
            i || (i = r(n));
            var o;
            return o = i.cache[t] ? i.cache[t].cloneNode() : d.test(t) ? (i.cache[t] = i.createElem(t)).cloneNode() : i.createElem(t), !o.canHaveChildren || f.test(t) || o.tagUrn ? o : i.frag.appendChild(o)
        }

        function s(t, n) {
            if (t || (t = e), c) return t.createDocumentFragment();
            n = n || r(t);
            for (var o = n.frag.cloneNode(), s = 0, a = i(), u = a.length; u > s; s++) o.createElement(a[s]);
            return o
        }

        function a(t, e) {
            e.cache || (e.cache = {}, e.createElem = t.createElement, e.createFrag = t.createDocumentFragment, e.frag = e.createFrag()), t.createElement = function(n) {
                return y.shivMethods ? o(n, t, e) : e.createElem(n)
            }, t.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + i().join().replace(/[\w\-]+/g, function(t) {
                return e.createElem(t), e.frag.createElement(t), 'c("' + t + '")'
            }) + ");return n}")(y, e.frag)
        }

        function u(t) {
            t || (t = e);
            var i = r(t);
            return y.shivCSS && !l && !i.hasCSS && (i.hasCSS = !! n(t, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), c || a(t, i), t
        }
        var l, c, h = "3.7.0",
            p = t.html5 || {}, f = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
            d = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
            m = "_html5shiv",
            g = 0,
            v = {};
        ! function() {
            try {
                var t = e.createElement("a");
                t.innerHTML = "<xyz></xyz>", l = "hidden" in t, c = 1 == t.childNodes.length || function() {
                    e.createElement("a");
                    var t = e.createDocumentFragment();
                    return "undefined" == typeof t.cloneNode || "undefined" == typeof t.createDocumentFragment || "undefined" == typeof t.createElement
                }()
            } catch (n) {
                l = !0, c = !0
            }
        }();
        var y = {
            elements: p.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
            version: h,
            shivCSS: p.shivCSS !== !1,
            supportsUnknownElements: c,
            shivMethods: p.shivMethods !== !1,
            type: "default",
            shivDocument: u,
            createElement: o,
            createDocumentFragment: s
        };
        t.html5 = y, u(e)
    }(this, e), l._version = u, l._prefixes = m, l.testStyles = _, h.className = h.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (c ? " js " + v.join(" ") : ""), l
}(this, this.document), ! function(t, e, n, i) {
    "use strict";

    function r(t, e, n) {
        return setTimeout(c(t, n), e)
    }

    function o(t, e, n) {
        return Array.isArray(t) ? (s(t, n[e], n), !0) : !1
    }

    function s(t, e, n) {
        var r;
        if (t)
            if (t.forEach) t.forEach(e, n);
            else if (t.length !== i)
            for (r = 0; r < t.length;) e.call(n, t[r], r, t), r++;
        else
            for (r in t) t.hasOwnProperty(r) && e.call(n, t[r], r, t)
    }

    function a(t, e, n) {
        for (var r = Object.keys(e), o = 0; o < r.length;)(!n || n && t[r[o]] === i) && (t[r[o]] = e[r[o]]), o++;
        return t
    }

    function u(t, e) {
        return a(t, e, !0)
    }

    function l(t, e, n) {
        var i, r = e.prototype;
        i = t.prototype = Object.create(r), i.constructor = t, i._super = r, n && a(i, n)
    }

    function c(t, e) {
        return function() {
            return t.apply(e, arguments)
        }
    }

    function h(t, e) {
        return typeof t == ce ? t.apply(e ? e[0] || i : i, e) : t
    }

    function p(t, e) {
        return t === i ? e : t
    }

    function f(t, e, n) {
        s(v(e), function(e) {
            t.addEventListener(e, n, !1)
        })
    }

    function d(t, e, n) {
        s(v(e), function(e) {
            t.removeEventListener(e, n, !1)
        })
    }

    function m(t, e) {
        for (; t;) {
            if (t == e) return !0;
            t = t.parentNode
        }
        return !1
    }

    function g(t, e) {
        return t.indexOf(e) > -1
    }

    function v(t) {
        return t.trim().split(/\s+/g)
    }

    function y(t, e, n) {
        if (t.indexOf && !n) return t.indexOf(e);
        for (var i = 0; i < t.length;) {
            if (n && t[i][n] == e || !n && t[i] === e) return i;
            i++
        }
        return -1
    }

    function _(t) {
        return Array.prototype.slice.call(t, 0)
    }

    function w(t, e, n) {
        for (var i = [], r = [], o = 0; o < t.length;) {
            var s = e ? t[o][e] : t[o];
            y(r, s) < 0 && i.push(t[o]), r[o] = s, o++
        }
        return n && (i = e ? i.sort(function(t, n) {
            return t[e] > n[e]
        }) : i.sort()), i
    }

    function x(t, e) {
        for (var n, r, o = e[0].toUpperCase() + e.slice(1), s = 0; s < ue.length;) {
            if (n = ue[s], r = n ? n + o : e, r in t) return r;
            s++
        }
        return i
    }

    function b() {
        return de++
    }

    function T(t) {
        var e = t.ownerDocument;
        return e.defaultView || e.parentWindow
    }

    function k(t, e) {
        var n = this;
        this.manager = t, this.callback = e, this.element = t.element, this.target = t.options.inputTarget, this.domHandler = function(e) {
            h(t.options.enable, [t]) && n.handler(e)
        }, this.init()
    }

    function C(t) {
        var e, n = t.options.inputClass;
        return new(e = n ? n : ve ? F : ye ? H : ge ? Y : $)(t, P)
    }

    function P(t, e, n) {
        var i = n.pointers.length,
            r = n.changedPointers.length,
            o = e & ke && i - r === 0,
            s = e & (Pe | Ee) && i - r === 0;
        n.isFirst = !! o, n.isFinal = !! s, o && (t.session = {}), n.eventType = e, E(t, n), t.emit("hammer.input", n), t.recognize(n), t.session.prevInput = n
    }

    function E(t, e) {
        var n = t.session,
            i = e.pointers,
            r = i.length;
        n.firstInput || (n.firstInput = A(e)), r > 1 && !n.firstMultiple ? n.firstMultiple = A(e) : 1 === r && (n.firstMultiple = !1);
        var o = n.firstInput,
            s = n.firstMultiple,
            a = s ? s.center : o.center,
            u = e.center = N(i);
        e.timeStamp = fe(), e.deltaTime = e.timeStamp - o.timeStamp, e.angle = R(a, u), e.distance = D(a, u), S(n, e), e.offsetDirection = M(e.deltaX, e.deltaY), e.scale = s ? I(s.pointers, i) : 1, e.rotation = s ? L(s.pointers, i) : 0, O(n, e);
        var l = t.element;
        m(e.srcEvent.target, l) && (l = e.srcEvent.target), e.target = l
    }

    function S(t, e) {
        var n = e.center,
            i = t.offsetDelta || {}, r = t.prevDelta || {}, o = t.prevInput || {};
        (e.eventType === ke || o.eventType === Pe) && (r = t.prevDelta = {
                x: o.deltaX || 0,
                y: o.deltaY || 0
            }, i = t.offsetDelta = {
                x: n.x,
                y: n.y
            }), e.deltaX = r.x + (n.x - i.x), e.deltaY = r.y + (n.y - i.y)
    }

    function O(t, e) {
        var n, r, o, s, a = t.lastInterval || e,
            u = e.timeStamp - a.timeStamp;
        if (e.eventType != Ee && (u > Te || a.velocity === i)) {
            var l = a.deltaX - e.deltaX,
                c = a.deltaY - e.deltaY,
                h = j(u, l, c);
            r = h.x, o = h.y, n = pe(h.x) > pe(h.y) ? h.x : h.y, s = M(l, c), t.lastInterval = e
        } else n = a.velocity, r = a.velocityX, o = a.velocityY, s = a.direction;
        e.velocity = n, e.velocityX = r, e.velocityY = o, e.direction = s
    }

    function A(t) {
        for (var e = [], n = 0; n < t.pointers.length;) e[n] = {
            clientX: he(t.pointers[n].clientX),
            clientY: he(t.pointers[n].clientY)
        }, n++;
        return {
            timeStamp: fe(),
            pointers: e,
            center: N(e),
            deltaX: t.deltaX,
            deltaY: t.deltaY
        }
    }

    function N(t) {
        var e = t.length;
        if (1 === e) return {
            x: he(t[0].clientX),
            y: he(t[0].clientY)
        };
        for (var n = 0, i = 0, r = 0; e > r;) n += t[r].clientX, i += t[r].clientY, r++;
        return {
            x: he(n / e),
            y: he(i / e)
        }
    }

    function j(t, e, n) {
        return {
            x: e / t || 0,
            y: n / t || 0
        }
    }

    function M(t, e) {
        return t === e ? Se : pe(t) >= pe(e) ? t > 0 ? Oe : Ae : e > 0 ? Ne : je
    }

    function D(t, e, n) {
        n || (n = Le);
        var i = e[n[0]] - t[n[0]],
            r = e[n[1]] - t[n[1]];
        return Math.sqrt(i * i + r * r)
    }

    function R(t, e, n) {
        n || (n = Le);
        var i = e[n[0]] - t[n[0]],
            r = e[n[1]] - t[n[1]];
        return 180 * Math.atan2(r, i) / Math.PI
    }

    function L(t, e) {
        return R(e[1], e[0], Ie) - R(t[1], t[0], Ie)
    }

    function I(t, e) {
        return D(e[0], e[1], Ie) / D(t[0], t[1], Ie)
    }

    function $() {
        this.evEl = Fe, this.evWin = ze, this.allow = !0, this.pressed = !1, k.apply(this, arguments)
    }

    function F() {
        this.evEl = qe, this.evWin = Ye, k.apply(this, arguments), this.store = this.manager.session.pointerEvents = []
    }

    function z() {
        this.evTarget = Be, this.evWin = Ue, this.started = !1, k.apply(this, arguments)
    }

    function X(t, e) {
        var n = _(t.touches),
            i = _(t.changedTouches);
        return e & (Pe | Ee) && (n = w(n.concat(i), "identifier", !0)), [n, i]
    }

    function H() {
        this.evTarget = Qe, this.targetIds = {}, k.apply(this, arguments)
    }

    function q(t, e) {
        var n = _(t.touches),
            i = this.targetIds;
        if (e & (ke | Ce) && 1 === n.length) return i[n[0].identifier] = !0, [n, n];
        var r, o, s = _(t.changedTouches),
            a = [],
            u = this.target;
        if (o = n.filter(function(t) {
            return m(t.target, u)
        }), e === ke)
            for (r = 0; r < o.length;) i[o[r].identifier] = !0, r++;
        for (r = 0; r < s.length;) i[s[r].identifier] && a.push(s[r]), e & (Pe | Ee) && delete i[s[r].identifier], r++;
        return a.length ? [w(o.concat(a), "identifier", !0), a] : void 0
    }

    function Y() {
        k.apply(this, arguments);
        var t = c(this.handler, this);
        this.touch = new H(this.manager, t), this.mouse = new $(this.manager, t)
    }

    function W(t, e) {
        this.manager = t, this.set(e)
    }

    function B(t) {
        if (g(t, en)) return en;
        var e = g(t, nn),
            n = g(t, rn);
        return e && n ? nn + " " + rn : e || n ? e ? nn : rn : g(t, tn) ? tn : Je
    }

    function U(t) {
        this.id = b(), this.manager = null, this.options = u(t || {}, this.defaults), this.options.enable = p(this.options.enable, !0), this.state = on, this.simultaneous = {}, this.requireFail = []
    }

    function V(t) {
        return t & cn ? "cancel" : t & un ? "end" : t & an ? "move" : t & sn ? "start" : ""
    }

    function Q(t) {
        return t == je ? "down" : t == Ne ? "up" : t == Oe ? "left" : t == Ae ? "right" : ""
    }

    function Z(t, e) {
        var n = e.manager;
        return n ? n.get(t) : t
    }

    function G() {
        U.apply(this, arguments)
    }

    function K() {
        G.apply(this, arguments), this.pX = null, this.pY = null
    }

    function J() {
        G.apply(this, arguments)
    }

    function te() {
        U.apply(this, arguments), this._timer = null, this._input = null
    }

    function ee() {
        G.apply(this, arguments)
    }

    function ne() {
        G.apply(this, arguments)
    }

    function ie() {
        U.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0
    }

    function re(t, e) {
        return e = e || {}, e.recognizers = p(e.recognizers, re.defaults.preset), new oe(t, e)
    }

    function oe(t, e) {
        e = e || {}, this.options = u(e, re.defaults), this.options.inputTarget = this.options.inputTarget || t, this.handlers = {}, this.session = {}, this.recognizers = [], this.element = t, this.input = C(this), this.touchAction = new W(this, this.options.touchAction), se(this, !0), s(e.recognizers, function(t) {
            var e = this.add(new t[0](t[1]));
            t[2] && e.recognizeWith(t[2]), t[3] && e.requireFailure(t[3])
        }, this)
    }

    function se(t, e) {
        var n = t.element;
        s(t.options.cssProps, function(t, i) {
            n.style[x(n.style, i)] = e ? t : ""
        })
    }

    function ae(t, n) {
        var i = e.createEvent("Event");
        i.initEvent(t, !0, !0), i.gesture = n, n.target.dispatchEvent(i)
    }
    var ue = ["", "webkit", "moz", "MS", "ms", "o"],
        le = e.createElement("div"),
        ce = "function",
        he = Math.round,
        pe = Math.abs,
        fe = Date.now,
        de = 1,
        me = /mobile|tablet|ip(ad|hone|od)|android/i,
        ge = "ontouchstart" in t,
        ve = x(t, "PointerEvent") !== i,
        ye = ge && me.test(navigator.userAgent),
        _e = "touch",
        we = "pen",
        xe = "mouse",
        be = "kinect",
        Te = 25,
        ke = 1,
        Ce = 2,
        Pe = 4,
        Ee = 8,
        Se = 1,
        Oe = 2,
        Ae = 4,
        Ne = 8,
        je = 16,
        Me = Oe | Ae,
        De = Ne | je,
        Re = Me | De,
        Le = ["x", "y"],
        Ie = ["clientX", "clientY"];
    k.prototype = {
        handler: function() {},
        init: function() {
            this.evEl && f(this.element, this.evEl, this.domHandler), this.evTarget && f(this.target, this.evTarget, this.domHandler), this.evWin && f(T(this.element), this.evWin, this.domHandler)
        },
        destroy: function() {
            this.evEl && d(this.element, this.evEl, this.domHandler), this.evTarget && d(this.target, this.evTarget, this.domHandler), this.evWin && d(T(this.element), this.evWin, this.domHandler)
        }
    };
    var $e = {
        mousedown: ke,
        mousemove: Ce,
        mouseup: Pe
    }, Fe = "mousedown",
        ze = "mousemove mouseup";
    l($, k, {
        handler: function(t) {
            var e = $e[t.type];
            e & ke && 0 === t.button && (this.pressed = !0), e & Ce && 1 !== t.which && (e = Pe), this.pressed && this.allow && (e & Pe && (this.pressed = !1), this.callback(this.manager, e, {
                pointers: [t],
                changedPointers: [t],
                pointerType: xe,
                srcEvent: t
            }))
        }
    });
    var Xe = {
        pointerdown: ke,
        pointermove: Ce,
        pointerup: Pe,
        pointercancel: Ee,
        pointerout: Ee
    }, He = {
            2: _e,
            3: we,
            4: xe,
            5: be
        }, qe = "pointerdown",
        Ye = "pointermove pointerup pointercancel";
    t.MSPointerEvent && (qe = "MSPointerDown", Ye = "MSPointerMove MSPointerUp MSPointerCancel"), l(F, k, {
        handler: function(t) {
            var e = this.store,
                n = !1,
                i = t.type.toLowerCase().replace("ms", ""),
                r = Xe[i],
                o = He[t.pointerType] || t.pointerType,
                s = o == _e,
                a = y(e, t.pointerId, "pointerId");
            r & ke && (0 === t.button || s) ? 0 > a && (e.push(t), a = e.length - 1) : r & (Pe | Ee) && (n = !0), 0 > a || (e[a] = t, this.callback(this.manager, r, {
                pointers: e,
                changedPointers: [t],
                pointerType: o,
                srcEvent: t
            }), n && e.splice(a, 1))
        }
    });
    var We = {
        touchstart: ke,
        touchmove: Ce,
        touchend: Pe,
        touchcancel: Ee
    }, Be = "touchstart",
        Ue = "touchstart touchmove touchend touchcancel";
    l(z, k, {
        handler: function(t) {
            var e = We[t.type];
            if (e === ke && (this.started = !0), this.started) {
                var n = X.call(this, t, e);
                e & (Pe | Ee) && n[0].length - n[1].length === 0 && (this.started = !1), this.callback(this.manager, e, {
                    pointers: n[0],
                    changedPointers: n[1],
                    pointerType: _e,
                    srcEvent: t
                })
            }
        }
    });
    var Ve = {
        touchstart: ke,
        touchmove: Ce,
        touchend: Pe,
        touchcancel: Ee
    }, Qe = "touchstart touchmove touchend touchcancel";
    l(H, k, {
        handler: function(t) {
            var e = Ve[t.type],
                n = q.call(this, t, e);
            n && this.callback(this.manager, e, {
                pointers: n[0],
                changedPointers: n[1],
                pointerType: _e,
                srcEvent: t
            })
        }
    }), l(Y, k, {
        handler: function(t, e, n) {
            var i = n.pointerType == _e,
                r = n.pointerType == xe;
            if (i) this.mouse.allow = !1;
            else if (r && !this.mouse.allow) return;
            e & (Pe | Ee) && (this.mouse.allow = !0), this.callback(t, e, n)
        },
        destroy: function() {
            this.touch.destroy(), this.mouse.destroy()
        }
    });
    var Ze = x(le.style, "touchAction"),
        Ge = Ze !== i,
        Ke = "compute",
        Je = "auto",
        tn = "manipulation",
        en = "none",
        nn = "pan-x",
        rn = "pan-y";
    W.prototype = {
        set: function(t) {
            t == Ke && (t = this.compute()), Ge && (this.manager.element.style[Ze] = t), this.actions = t.toLowerCase().trim()
        },
        update: function() {
            this.set(this.manager.options.touchAction)
        },
        compute: function() {
            var t = [];
            return s(this.manager.recognizers, function(e) {
                h(e.options.enable, [e]) && (t = t.concat(e.getTouchAction()))
            }), B(t.join(" "))
        },
        preventDefaults: function(t) {
            if (!Ge) {
                var e = t.srcEvent,
                    n = t.offsetDirection;
                if (this.manager.session.prevented) return void e.preventDefault();
                var i = this.actions,
                    r = g(i, en),
                    o = g(i, rn),
                    s = g(i, nn);
                return r || o && n & Me || s && n & De ? this.preventSrc(e) : void 0
            }
        },
        preventSrc: function(t) {
            this.manager.session.prevented = !0, t.preventDefault()
        }
    };
    var on = 1,
        sn = 2,
        an = 4,
        un = 8,
        ln = un,
        cn = 16,
        hn = 32;
    U.prototype = {
        defaults: {},
        set: function(t) {
            return a(this.options, t), this.manager && this.manager.touchAction.update(), this
        },
        recognizeWith: function(t) {
            if (o(t, "recognizeWith", this)) return this;
            var e = this.simultaneous;
            return t = Z(t, this), e[t.id] || (e[t.id] = t, t.recognizeWith(this)), this
        },
        dropRecognizeWith: function(t) {
            return o(t, "dropRecognizeWith", this) ? this : (t = Z(t, this), delete this.simultaneous[t.id], this)
        },
        requireFailure: function(t) {
            if (o(t, "requireFailure", this)) return this;
            var e = this.requireFail;
            return t = Z(t, this), -1 === y(e, t) && (e.push(t), t.requireFailure(this)), this
        },
        dropRequireFailure: function(t) {
            if (o(t, "dropRequireFailure", this)) return this;
            t = Z(t, this);
            var e = y(this.requireFail, t);
            return e > -1 && this.requireFail.splice(e, 1), this
        },
        hasRequireFailures: function() {
            return this.requireFail.length > 0
        },
        canRecognizeWith: function(t) {
            return !!this.simultaneous[t.id]
        },
        emit: function(t) {
            function e(e) {
                n.manager.emit(n.options.event + (e ? V(i) : ""), t)
            }
            var n = this,
                i = this.state;
            un > i && e(!0), e(), i >= un && e(!0)
        },
        tryEmit: function(t) {
            return this.canEmit() ? this.emit(t) : void(this.state = hn)
        },
        canEmit: function() {
            for (var t = 0; t < this.requireFail.length;) {
                if (!(this.requireFail[t].state & (hn | on))) return !1;
                t++
            }
            return !0
        },
        recognize: function(t) {
            var e = a({}, t);
            return h(this.options.enable, [this, e]) ? (this.state & (ln | cn | hn) && (this.state = on), this.state = this.process(e), void(this.state & (sn | an | un | cn) && this.tryEmit(e))) : (this.reset(), void(this.state = hn))
        },
        process: function() {},
        getTouchAction: function() {},
        reset: function() {}
    }, l(G, U, {
        defaults: {
            pointers: 1
        },
        attrTest: function(t) {
            var e = this.options.pointers;
            return 0 === e || t.pointers.length === e
        },
        process: function(t) {
            var e = this.state,
                n = t.eventType,
                i = e & (sn | an),
                r = this.attrTest(t);
            return i && (n & Ee || !r) ? e | cn : i || r ? n & Pe ? e | un : e & sn ? e | an : sn : hn
        }
    }), l(K, G, {
        defaults: {
            event: "pan",
            threshold: 10,
            pointers: 1,
            direction: Re
        },
        getTouchAction: function() {
            var t = this.options.direction,
                e = [];
            return t & Me && e.push(rn), t & De && e.push(nn), e
        },
        directionTest: function(t) {
            var e = this.options,
                n = !0,
                i = t.distance,
                r = t.direction,
                o = t.deltaX,
                s = t.deltaY;
            return r & e.direction || (e.direction & Me ? (r = 0 === o ? Se : 0 > o ? Oe : Ae, n = o != this.pX, i = Math.abs(t.deltaX)) : (r = 0 === s ? Se : 0 > s ? Ne : je, n = s != this.pY, i = Math.abs(t.deltaY))), t.direction = r, n && i > e.threshold && r & e.direction
        },
        attrTest: function(t) {
            return G.prototype.attrTest.call(this, t) && (this.state & sn || !(this.state & sn) && this.directionTest(t))
        },
        emit: function(t) {
            this.pX = t.deltaX, this.pY = t.deltaY;
            var e = Q(t.direction);
            e && this.manager.emit(this.options.event + e, t), this._super.emit.call(this, t)
        }
    }), l(J, G, {
        defaults: {
            event: "pinch",
            threshold: 0,
            pointers: 2
        },
        getTouchAction: function() {
            return [en]
        },
        attrTest: function(t) {
            return this._super.attrTest.call(this, t) && (Math.abs(t.scale - 1) > this.options.threshold || this.state & sn)
        },
        emit: function(t) {
            if (this._super.emit.call(this, t), 1 !== t.scale) {
                var e = t.scale < 1 ? "in" : "out";
                this.manager.emit(this.options.event + e, t)
            }
        }
    }), l(te, U, {
        defaults: {
            event: "press",
            pointers: 1,
            time: 500,
            threshold: 5
        },
        getTouchAction: function() {
            return [Je]
        },
        process: function(t) {
            var e = this.options,
                n = t.pointers.length === e.pointers,
                i = t.distance < e.threshold,
                o = t.deltaTime > e.time;
            if (this._input = t, !i || !n || t.eventType & (Pe | Ee) && !o) this.reset();
            else if (t.eventType & ke) this.reset(), this._timer = r(function() {
                this.state = ln, this.tryEmit()
            }, e.time, this);
            else if (t.eventType & Pe) return ln;
            return hn
        },
        reset: function() {
            clearTimeout(this._timer)
        },
        emit: function(t) {
            this.state === ln && (t && t.eventType & Pe ? this.manager.emit(this.options.event + "up", t) : (this._input.timeStamp = fe(), this.manager.emit(this.options.event, this._input)))
        }
    }), l(ee, G, {
        defaults: {
            event: "rotate",
            threshold: 0,
            pointers: 2
        },
        getTouchAction: function() {
            return [en]
        },
        attrTest: function(t) {
            return this._super.attrTest.call(this, t) && (Math.abs(t.rotation) > this.options.threshold || this.state & sn)
        }
    }), l(ne, G, {
        defaults: {
            event: "swipe",
            threshold: 10,
            velocity: .65,
            direction: Me | De,
            pointers: 1
        },
        getTouchAction: function() {
            return K.prototype.getTouchAction.call(this)
        },
        attrTest: function(t) {
            var e, n = this.options.direction;
            return n & (Me | De) ? e = t.velocity : n & Me ? e = t.velocityX : n & De && (e = t.velocityY), this._super.attrTest.call(this, t) && n & t.direction && t.distance > this.options.threshold && pe(e) > this.options.velocity && t.eventType & Pe
        },
        emit: function(t) {
            var e = Q(t.direction);
            e && this.manager.emit(this.options.event + e, t), this.manager.emit(this.options.event, t)
        }
    }), l(ie, U, {
        defaults: {
            event: "tap",
            pointers: 1,
            taps: 1,
            interval: 300,
            time: 250,
            threshold: 2,
            posThreshold: 10
        },
        getTouchAction: function() {
            return [tn]
        },
        process: function(t) {
            var e = this.options,
                n = t.pointers.length === e.pointers,
                i = t.distance < e.threshold,
                o = t.deltaTime < e.time;
            if (this.reset(), t.eventType & ke && 0 === this.count) return this.failTimeout();
            if (i && o && n) {
                if (t.eventType != Pe) return this.failTimeout();
                var s = this.pTime ? t.timeStamp - this.pTime < e.interval : !0,
                    a = !this.pCenter || D(this.pCenter, t.center) < e.posThreshold;
                this.pTime = t.timeStamp, this.pCenter = t.center, a && s ? this.count += 1 : this.count = 1, this._input = t;
                var u = this.count % e.taps;
                if (0 === u) return this.hasRequireFailures() ? (this._timer = r(function() {
                    this.state = ln, this.tryEmit()
                }, e.interval, this), sn) : ln
            }
            return hn
        },
        failTimeout: function() {
            return this._timer = r(function() {
                this.state = hn
            }, this.options.interval, this), hn
        },
        reset: function() {
            clearTimeout(this._timer)
        },
        emit: function() {
            this.state == ln && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input))
        }
    }), re.VERSION = "2.0.4", re.defaults = {
        domEvents: !1,
        touchAction: Ke,
        enable: !0,
        inputTarget: null,
        inputClass: null,
        preset: [
            [ee, {
                enable: !1
            }],
            [J, {
                    enable: !1
                },
                ["rotate"]
            ],
            [ne, {
                direction: Me
            }],
            [K, {
                    direction: Me
                },
                ["swipe"]
            ],
            [ie],
            [ie, {
                    event: "doubletap",
                    taps: 2
                },
                ["tap"]
            ],
            [te]
        ],
        cssProps: {
            userSelect: "none",
            touchSelect: "none",
            touchCallout: "none",
            contentZooming: "none",
            userDrag: "none",
            tapHighlightColor: "rgba(0,0,0,0)"
        }
    };
    var pn = 1,
        fn = 2;
    oe.prototype = {
        set: function(t) {
            return a(this.options, t), t.touchAction && this.touchAction.update(), t.inputTarget && (this.input.destroy(), this.input.target = t.inputTarget, this.input.init()), this
        },
        stop: function(t) {
            this.session.stopped = t ? fn : pn
        },
        recognize: function(t) {
            var e = this.session;
            if (!e.stopped) {
                this.touchAction.preventDefaults(t);
                var n, i = this.recognizers,
                    r = e.curRecognizer;
                (!r || r && r.state & ln) && (r = e.curRecognizer = null);
                for (var o = 0; o < i.length;) n = i[o], e.stopped === fn || r && n != r && !n.canRecognizeWith(r) ? n.reset() : n.recognize(t), !r && n.state & (sn | an | un) && (r = e.curRecognizer = n), o++
            }
        },
        get: function(t) {
            if (t instanceof U) return t;
            for (var e = this.recognizers, n = 0; n < e.length; n++)
                if (e[n].options.event == t) return e[n];
            return null
        },
        add: function(t) {
            if (o(t, "add", this)) return this;
            var e = this.get(t.options.event);
            return e && this.remove(e), this.recognizers.push(t), t.manager = this, this.touchAction.update(), t
        },
        remove: function(t) {
            if (o(t, "remove", this)) return this;
            var e = this.recognizers;
            return t = this.get(t), e.splice(y(e, t), 1), this.touchAction.update(), this
        },
        on: function(t, e) {
            var n = this.handlers;
            return s(v(t), function(t) {
                n[t] = n[t] || [], n[t].push(e)
            }), this
        },
        off: function(t, e) {
            var n = this.handlers;
            return s(v(t), function(t) {
                e ? n[t].splice(y(n[t], e), 1) : delete n[t]
            }), this
        },
        emit: function(t, e) {
            this.options.domEvents && ae(t, e);
            var n = this.handlers[t] && this.handlers[t].slice();
            if (n && n.length) {
                e.type = t, e.preventDefault = function() {
                    e.srcEvent.preventDefault()
                };
                for (var i = 0; i < n.length;) n[i](e), i++
            }
        },
        destroy: function() {
            this.element && se(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null
        }
    }, a(re, {
        INPUT_START: ke,
        INPUT_MOVE: Ce,
        INPUT_END: Pe,
        INPUT_CANCEL: Ee,
        STATE_POSSIBLE: on,
        STATE_BEGAN: sn,
        STATE_CHANGED: an,
        STATE_ENDED: un,
        STATE_RECOGNIZED: ln,
        STATE_CANCELLED: cn,
        STATE_FAILED: hn,
        DIRECTION_NONE: Se,
        DIRECTION_LEFT: Oe,
        DIRECTION_RIGHT: Ae,
        DIRECTION_UP: Ne,
        DIRECTION_DOWN: je,
        DIRECTION_HORIZONTAL: Me,
        DIRECTION_VERTICAL: De,
        DIRECTION_ALL: Re,
        Manager: oe,
        Input: k,
        TouchAction: W,
        TouchInput: H,
        MouseInput: $,
        PointerEventInput: F,
        TouchMouseInput: Y,
        SingleTouchInput: z,
        Recognizer: U,
        AttrRecognizer: G,
        Tap: ie,
        Pan: K,
        Swipe: ne,
        Pinch: J,
        Rotate: ee,
        Press: te,
        on: f,
        off: d,
        each: s,
        merge: u,
        extend: a,
        inherit: l,
        bindFn: c,
        prefixed: x
    }), typeof define == ce && define.amd ? define(function() {
        return re
    }) : "undefined" != typeof module && module.exports ? module.exports = re : t[n] = re
}(window, document, "Hammer"),
function(t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : t("object" == typeof exports ? require("jquery") : jQuery)
}(function(t) {
    "use strict";

    function e(e, r) {
        function o() {
            return d.update(), a(), d
        }

        function s() {
            _.css(k, d.thumbPosition), g.css(k, -d.contentPosition), v.css(T, d.trackSize), y.css(T, d.trackSize), _.css(T, d.thumbSize)
        }

        function a() {
            w ? m[0].ontouchstart = function(t) {
                1 === t.touches.length && (t.stopPropagation(), c(t.touches[0]))
            } : (_.bind("mousedown", function(t) {
                t.stopPropagation(), c(t)
            }), y.bind("mousedown", function(t) {
                c(t, !0)
            })), t(window).resize(function() {
                d.update("relative")
            }), d.options.wheel && window.addEventListener ? e[0].addEventListener(x, h, !1) : d.options.wheel && (e[0].onmousewheel = h)
        }

        function u() {
            return d.contentPosition > 0
        }

        function l() {
            return d.contentPosition <= d.contentSize - d.viewportSize - 5
        }

        function c(e, n) {
            d.hasContentToSroll && (t("body").addClass("noSelect"), C = n ? _.offset()[k] : b ? e.pageX : e.pageY, w ? (document.ontouchmove = function(t) {
                (d.options.touchLock || u() && l()) && t.preventDefault(), p(t.touches[0])
            }, document.ontouchend = f) : (t(document).bind("mousemove", p), t(document).bind("mouseup", f), _.bind("mouseup", f), y.bind("mouseup", f)), p(e))
        }

        function h(n) {
            if (d.hasContentToSroll) {
                var i = n || window.event,
                    r = -(i.deltaY || i.detail || -1 / 3 * i.wheelDelta) / 40,
                    o = 1 === i.deltaMode ? d.options.wheelSpeed : 1;
                d.contentPosition -= r * o * d.options.wheelSpeed, d.contentPosition = Math.min(d.contentSize - d.viewportSize, Math.max(0, d.contentPosition)), d.thumbPosition = d.contentPosition / d.trackRatio, e.trigger("move"), _.css(k, d.thumbPosition), g.css(k, -d.contentPosition), (d.options.wheelLock || u() && l()) && (i = t.event.fix(i), i.preventDefault())
            }
        }

        function p(t) {
            if (d.hasContentToSroll) {
                var n = b ? t.pageX : t.pageY,
                    i = w ? C - n : n - C,
                    r = Math.min(d.trackSize - d.thumbSize, Math.max(0, d.thumbPosition + i));
                d.contentPosition = r * d.trackRatio, e.trigger("move"), _.css(k, r), g.css(k, -d.contentPosition)
            }
        }

        function f() {
            d.thumbPosition = parseInt(_.css(k), 10) || 0, t("body").removeClass("noSelect"), t(document).unbind("mousemove", p), t(document).unbind("mouseup", f), _.unbind("mouseup", f), y.unbind("mouseup", f), document.ontouchmove = document.ontouchend = null
        }
        this.options = t.extend({}, i, r), this._defaults = i, this._name = n;
        var d = this,
            m = e.find(".viewport"),
            g = e.find(".overview"),
            v = e.find(".scrollbar"),
            y = v.find(".track"),
            _ = v.find(".thumb"),
            w = "ontouchstart" in document.documentElement,
            x = "onwheel" in document.createElement("div") ? "wheel" : void 0 !== document.onmousewheel ? "mousewheel" : "DOMMouseScroll",
            b = "x" === this.options.axis,
            T = b ? "width" : "height",
            k = b ? "left" : "top",
            C = 0;
        return this.contentPosition = 0, this.viewportSize = 0, this.contentSize = 0, this.contentRatio = 0, this.trackSize = 0, this.trackRatio = 0, this.thumbSize = 0, this.thumbPosition = 0, this.hasContentToSroll = 0, this.update = function(t) {
            var e = T.charAt(0).toUpperCase() + T.slice(1).toLowerCase();
            switch (this.viewportSize = m[0]["offset" + e], this.contentSize = g[0]["scroll" + e], this.contentRatio = this.viewportSize / this.contentSize, this.trackSize = this.options.trackSize || this.viewportSize, this.thumbSize = Math.min(this.trackSize, Math.max(this.options.thumbSizeMin, this.options.thumbSize || this.trackSize * this.contentRatio)), this.trackRatio = (this.contentSize - this.viewportSize) / (this.trackSize - this.thumbSize), this.hasContentToSroll = this.contentRatio < 1, v.toggleClass("disable", !this.hasContentToSroll), t) {
                case "bottom":
                    this.contentPosition = Math.max(this.contentSize - this.viewportSize, 0);
                    break;
                case "relative":
                    this.contentPosition = Math.min(Math.max(this.contentSize - this.viewportSize, 0), Math.max(0, this.contentPosition));
                    break;
                default:
                    this.contentPosition = parseInt(t, 10) || 0
            }
            return this.thumbPosition = this.contentPosition / this.trackRatio, s(), d
        }, o()
    }
    var n = "tinyscrollbar",
        i = {
            axis: "y",
            wheel: !0,
            wheelSpeed: 40,
            wheelLock: !0,
            touchLock: !0,
            trackSize: !1,
            thumbSize: !1,
            thumbSizeMin: 20
        };
    t.fn[n] = function(i) {
        return this.each(function() {
            t.data(this, "plugin_" + n) || t.data(this, "plugin_" + n, new e(t(this), i))
        })
    }
}),
function(t) {
    "use strict";
    var e, n, i, r, o, s = t.GreenSockGlobals || t,
        a = function(t) {
            var e, n = t.split("."),
                i = s;
            for (e = 0; n.length > e; e++) i[n[e]] = i = i[n[e]] || {};
            return i
        }, u = a("com.greensock"),
        l = [].slice,
        c = function() {}, h = {}, p = function(e, n, i, r) {
            this.sc = h[e] ? h[e].sc : [], h[e] = this, this.gsClass = null, this.func = i;
            var o = [];
            this.check = function(u) {
                for (var l, c, f, d, m = n.length, g = m; --m > -1;)(l = h[n[m]] || new p(n[m], [])).gsClass ? (o[m] = l.gsClass, g--) : u && l.sc.push(this);
                if (0 === g && i)
                    for (c = ("com.greensock." + e).split("."), f = c.pop(), d = a(c.join("."))[f] = this.gsClass = i.apply(i, o), r && (s[f] = d, "function" == typeof define && define.amd ? define((t.GreenSockAMDPath ? t.GreenSockAMDPath + "/" : "") + e.split(".").join("/"), [], function() {
                        return d
                    }) : "undefined" != typeof module && module.exports && (module.exports = d)), m = 0; this.sc.length > m; m++) this.sc[m].check()
            }, this.check(!0)
        }, f = t._gsDefine = function(t, e, n, i) {
            return new p(t, e, n, i)
        }, d = u._class = function(t, e, n) {
            return e = e || function() {}, f(t, [], function() {
                return e
            }, n), e
        };
    f.globals = s;
    var m = [0, 0, 1, 1],
        g = [],
        v = d("easing.Ease", function(t, e, n, i) {
            this._func = t, this._type = n || 0, this._power = i || 0, this._params = e ? m.concat(e) : m
        }, !0),
        y = v.map = {}, _ = v.register = function(t, e, n, i) {
            for (var r, o, s, a, l = e.split(","), c = l.length, h = (n || "easeIn,easeOut,easeInOut").split(","); --c > -1;)
                for (o = l[c], r = i ? d("easing." + o, null, !0) : u.easing[o] || {}, s = h.length; --s > -1;) a = h[s], y[o + "." + a] = y[a + o] = r[a] = t.getRatio ? t : t[a] || new t
        };
    for (i = v.prototype, i._calcEnd = !1, i.getRatio = function(t) {
        if (this._func) return this._params[0] = t, this._func.apply(null, this._params);
        var e = this._type,
            n = this._power,
            i = 1 === e ? 1 - t : 2 === e ? t : .5 > t ? 2 * t : 2 * (1 - t);
        return 1 === n ? i *= i : 2 === n ? i *= i * i : 3 === n ? i *= i * i * i : 4 === n && (i *= i * i * i * i), 1 === e ? 1 - i : 2 === e ? i : .5 > t ? i / 2 : 1 - i / 2
    }, e = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], n = e.length; --n > -1;) i = e[n] + ",Power" + n, _(new v(null, null, 1, n), i, "easeOut", !0), _(new v(null, null, 2, n), i, "easeIn" + (0 === n ? ",easeNone" : "")), _(new v(null, null, 3, n), i, "easeInOut");
    y.linear = u.easing.Linear.easeIn, y.swing = u.easing.Quad.easeInOut;
    var w = d("events.EventDispatcher", function(t) {
        this._listeners = {}, this._eventTarget = t || this
    });
    i = w.prototype, i.addEventListener = function(t, e, n, i, s) {
        s = s || 0;
        var a, u, l = this._listeners[t],
            c = 0;
        for (null == l && (this._listeners[t] = l = []), u = l.length; --u > -1;) a = l[u], a.c === e && a.s === n ? l.splice(u, 1) : 0 === c && s > a.pr && (c = u + 1);
        l.splice(c, 0, {
            c: e,
            s: n,
            up: i,
            pr: s
        }), this !== r || o || r.wake()
    }, i.removeEventListener = function(t, e) {
        var n, i = this._listeners[t];
        if (i)
            for (n = i.length; --n > -1;)
                if (i[n].c === e) return void i.splice(n, 1)
    }, i.dispatchEvent = function(t) {
        var e, n, i, r = this._listeners[t];
        if (r)
            for (e = r.length, n = this._eventTarget; --e > -1;) i = r[e], i.up ? i.c.call(i.s || n, {
                type: t,
                target: n
            }) : i.c.call(i.s || n)
    };
    var x = t.requestAnimationFrame,
        b = t.cancelAnimationFrame,
        T = Date.now || function() {
            return (new Date).getTime()
        }, k = T();
    for (e = ["ms", "moz", "webkit", "o"], n = e.length; --n > -1 && !x;) x = t[e[n] + "RequestAnimationFrame"], b = t[e[n] + "CancelAnimationFrame"] || t[e[n] + "CancelRequestAnimationFrame"];
    d("Ticker", function(t, e) {
        var n, i, s, a, u, l = this,
            h = T(),
            p = e !== !1 && x,
            f = function(t) {
                k = T(), l.time = (k - h) / 1e3;
                var e, r = l.time - u;
                (!n || r > 0 || t === !0) && (l.frame++, u += r + (r >= a ? .004 : a - r), e = !0), t !== !0 && (s = i(f)), e && l.dispatchEvent("tick")
            };
        w.call(l), this.time = this.frame = 0, this.tick = function() {
            f(!0)
        }, this.sleep = function() {
            null != s && (p && b ? b(s) : clearTimeout(s), i = c, s = null, l === r && (o = !1))
        }, this.wake = function() {
            null !== s && l.sleep(), i = 0 === n ? c : p && x ? x : function(t) {
                return setTimeout(t, 0 | 1e3 * (u - l.time) + 1)
            }, l === r && (o = !0), f(2)
        }, this.fps = function(t) {
            return arguments.length ? (n = t, a = 1 / (n || 60), u = this.time + a, void l.wake()) : n
        }, this.useRAF = function(t) {
            return arguments.length ? (l.sleep(), p = t, void l.fps(n)) : p
        }, l.fps(t), setTimeout(function() {
            p && (!s || 5 > l.frame) && l.useRAF(!1)
        }, 1500)
    }), i = u.Ticker.prototype = new u.events.EventDispatcher, i.constructor = u.Ticker;
    var C = d("core.Animation", function(t, e) {
        if (this.vars = e = e || {}, this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = e.immediateRender === !0, this.data = e.data, this._reversed = e.reversed === !0, $) {
            o || r.wake();
            var n = this.vars.useFrames ? I : $;
            n.add(this, n._time), this.vars.paused && this.paused(!0)
        }
    });
    r = C.ticker = new u.Ticker, i = C.prototype, i._dirty = i._gc = i._initted = i._paused = !1, i._totalTime = i._time = 0, i._rawPrevTime = -1, i._next = i._last = i._onUpdate = i._timeline = i.timeline = null, i._paused = !1;
    var P = function() {
        T() - k > 2e3 && r.wake(), setTimeout(P, 2e3)
    };
    P(), i.play = function(t, e) {
        return arguments.length && this.seek(t, e), this.reversed(!1).paused(!1)
    }, i.pause = function(t, e) {
        return arguments.length && this.seek(t, e), this.paused(!0)
    }, i.resume = function(t, e) {
        return arguments.length && this.seek(t, e), this.paused(!1)
    }, i.seek = function(t, e) {
        return this.totalTime(Number(t), e !== !1)
    }, i.restart = function(t, e) {
        return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, e !== !1, !0)
    }, i.reverse = function(t, e) {
        return arguments.length && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
    }, i.render = function() {}, i.invalidate = function() {
        return this
    }, i._enabled = function(t, e) {
        return o || r.wake(), this._gc = !t, this._active = t && !this._paused && this._totalTime > 0 && this._totalTime < this._totalDuration, e !== !0 && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1
    }, i._kill = function() {
        return this._enabled(!1, !1)
    }, i.kill = function(t, e) {
        return this._kill(t, e), this
    }, i._uncache = function(t) {
        for (var e = t ? this : this.timeline; e;) e._dirty = !0, e = e.timeline;
        return this
    }, i._swapSelfInParams = function(t) {
        for (var e = t.length, n = t.concat(); --e > -1;) "{self}" === t[e] && (n[e] = this);
        return n
    }, i.eventCallback = function(t, e, n, i) {
        if ("on" === (t || "").substr(0, 2)) {
            var r = this.vars;
            if (1 === arguments.length) return r[t];
            null == e ? delete r[t] : (r[t] = e, r[t + "Params"] = n instanceof Array && -1 !== n.join("").indexOf("{self}") ? this._swapSelfInParams(n) : n, r[t + "Scope"] = i), "onUpdate" === t && (this._onUpdate = e)
        }
        return this
    }, i.delay = function(t) {
        return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay
    }, i.duration = function(t) {
        return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration)
    }, i.totalDuration = function(t) {
        return this._dirty = !1, arguments.length ? this.duration(t) : this._totalDuration
    }, i.time = function(t, e) {
        return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time
    }, i.totalTime = function(t, e, n) {
        if (o || r.wake(), !arguments.length) return this._totalTime;
        if (this._timeline) {
            if (0 > t && !n && (t += this.totalDuration()), this._timeline.smoothChildTiming) {
                this._dirty && this.totalDuration();
                var i = this._totalDuration,
                    s = this._timeline;
                if (t > i && !n && (t = i), this._startTime = (this._paused ? this._pauseTime : s._time) - (this._reversed ? i - t : t) / this._timeScale, s._dirty || this._uncache(!1), s._timeline)
                    for (; s._timeline;) s._timeline._time !== (s._startTime + s._totalTime) / s._timeScale && s.totalTime(s._totalTime, !0), s = s._timeline
            }
            this._gc && this._enabled(!0, !1), this._totalTime !== t && this.render(t, e, !1)
        }
        return this
    }, i.startTime = function(t) {
        return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime
    }, i.timeScale = function(t) {
        if (!arguments.length) return this._timeScale;
        if (t = t || 1e-6, this._timeline && this._timeline.smoothChildTiming) {
            var e = this._pauseTime,
                n = e || 0 === e ? e : this._timeline.totalTime();
            this._startTime = n - (n - this._startTime) * this._timeScale / t
        }
        return this._timeScale = t, this._uncache(!1)
    }, i.reversed = function(t) {
        return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._totalTime, !0)), this) : this._reversed
    }, i.paused = function(t) {
        if (!arguments.length) return this._paused;
        if (t != this._paused && this._timeline) {
            o || t || r.wake();
            var e = this._timeline,
                n = e.rawTime(),
                i = n - this._pauseTime;
            !t && e.smoothChildTiming && (this._startTime += i, this._uncache(!1)), this._pauseTime = t ? n : null, this._paused = t, this._active = !t && this._totalTime > 0 && this._totalTime < this._totalDuration, t || 0 === i || 0 === this._duration || this.render(e.smoothChildTiming ? this._totalTime : (n - this._startTime) / this._timeScale, !0, !0)
        }
        return this._gc && !t && this._enabled(!0, !1), this
    };
    var E = d("core.SimpleTimeline", function(t) {
        C.call(this, 0, t), this.autoRemoveChildren = this.smoothChildTiming = !0
    });
    i = E.prototype = new C, i.constructor = E, i.kill()._gc = !1, i._first = i._last = null, i._sortChildren = !1, i.add = i.insert = function(t, e) {
        var n, i;
        if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), n = this._last, this._sortChildren)
            for (i = t._startTime; n && n._startTime > i;) n = n._prev;
        return n ? (t._next = n._next, n._next = t) : (t._next = this._first, this._first = t), t._next ? t._next._prev = t : this._last = t, t._prev = n, this._timeline && this._uncache(!0), this
    }, i._remove = function(t, e) {
        return t.timeline === this && (e || t._enabled(!1, !0), t.timeline = null, t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev), this._timeline && this._uncache(!0)), this
    }, i.render = function(t, e, n) {
        var i, r = this._first;
        for (this._totalTime = this._time = this._rawPrevTime = t; r;) i = r._next, (r._active || t >= r._startTime && !r._paused) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, n) : r.render((t - r._startTime) * r._timeScale, e, n)), r = i
    }, i.rawTime = function() {
        return o || r.wake(), this._totalTime
    };
    var S = d("TweenLite", function(e, n, i) {
        if (C.call(this, n, i), this.render = S.prototype.render, null == e) throw "Cannot tween a null target.";
        this.target = e = "string" != typeof e ? e : S.selector(e) || e;
        var r, o, s, a = e.jquery || e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType),
            u = this.vars.overwrite;
        if (this._overwrite = u = null == u ? L[S.defaultOverwrite] : "number" == typeof u ? u >> 0 : L[u], (a || e instanceof Array) && "number" != typeof e[0])
            for (this._targets = s = l.call(e, 0), this._propLookup = [], this._siblings = [], r = 0; s.length > r; r++) o = s[r], o ? "string" != typeof o ? o.length && o !== t && o[0] && (o[0] === t || o[0].nodeType && o[0].style && !o.nodeType) ? (s.splice(r--, 1), this._targets = s = s.concat(l.call(o, 0))) : (this._siblings[r] = F(o, this, !1), 1 === u && this._siblings[r].length > 1 && z(o, this, null, 1, this._siblings[r])) : (o = s[r--] = S.selector(o), "string" == typeof o && s.splice(r + 1, 1)) : s.splice(r--, 1);
        else this._propLookup = {}, this._siblings = F(e, this, !1), 1 === u && this._siblings.length > 1 && z(e, this, null, 1, this._siblings);
        (this.vars.immediateRender || 0 === n && 0 === this._delay && this.vars.immediateRender !== !1) && this.render(-this._delay, !1, !0)
    }, !0),
        O = function(e) {
            return e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType)
        }, A = function(t, e) {
            var n, i = {};
            for (n in t) R[n] || n in e && "x" !== n && "y" !== n && "width" !== n && "height" !== n && "className" !== n && "border" !== n || !(!j[n] || j[n] && j[n]._autoCSS) || (i[n] = t[n], delete t[n]);
            t.css = i
        };
    i = S.prototype = new C, i.constructor = S, i.kill()._gc = !1, i.ratio = 0, i._firstPT = i._targets = i._overwrittenProps = i._startAt = null, i._notifyPluginsOfEnabled = !1, S.version = "1.10.2", S.defaultEase = i._ease = new v(null, null, 1, 1), S.defaultOverwrite = "auto", S.ticker = r, S.autoSleep = !0, S.selector = t.$ || t.jQuery || function(e) {
        return t.$ ? (S.selector = t.$, t.$(e)) : t.document ? t.document.getElementById("#" === e.charAt(0) ? e.substr(1) : e) : e
    };
    var N = S._internals = {}, j = S._plugins = {}, M = S._tweenLookup = {}, D = 0,
        R = N.reservedProps = {
            ease: 1,
            delay: 1,
            overwrite: 1,
            onComplete: 1,
            onCompleteParams: 1,
            onCompleteScope: 1,
            useFrames: 1,
            runBackwards: 1,
            startAt: 1,
            onUpdate: 1,
            onUpdateParams: 1,
            onUpdateScope: 1,
            onStart: 1,
            onStartParams: 1,
            onStartScope: 1,
            onReverseComplete: 1,
            onReverseCompleteParams: 1,
            onReverseCompleteScope: 1,
            onRepeat: 1,
            onRepeatParams: 1,
            onRepeatScope: 1,
            easeParams: 1,
            yoyo: 1,
            immediateRender: 1,
            repeat: 1,
            repeatDelay: 1,
            data: 1,
            paused: 1,
            reversed: 1,
            autoCSS: 1
        }, L = {
            none: 0,
            all: 1,
            auto: 2,
            concurrent: 3,
            allOnStart: 4,
            preexisting: 5,
            "true": 1,
            "false": 0
        }, I = C._rootFramesTimeline = new E,
        $ = C._rootTimeline = new E;
    $._startTime = r.time, I._startTime = r.frame, $._active = I._active = !0, C._updateRoot = function() {
        if ($.render((r.time - $._startTime) * $._timeScale, !1, !1), I.render((r.frame - I._startTime) * I._timeScale, !1, !1), !(r.frame % 120)) {
            var t, e, n;
            for (n in M) {
                for (e = M[n].tweens, t = e.length; --t > -1;) e[t]._gc && e.splice(t, 1);
                0 === e.length && delete M[n]
            }
            if (n = $._first, (!n || n._paused) && S.autoSleep && !I._first && 1 === r._listeners.tick.length) {
                for (; n && n._paused;) n = n._next;
                n || r.sleep()
            }
        }
    }, r.addEventListener("tick", C._updateRoot);
    var F = function(t, e, n) {
        var i, r, o = t._gsTweenID;
        if (M[o || (t._gsTweenID = o = "t" + D++)] || (M[o] = {
            target: t,
            tweens: []
        }), e && (i = M[o].tweens, i[r = i.length] = e, n))
            for (; --r > -1;) i[r] === e && i.splice(r, 1);
        return M[o].tweens
    }, z = function(t, e, n, i, r) {
            var o, s, a, u;
            if (1 === i || i >= 4) {
                for (u = r.length, o = 0; u > o; o++)
                    if ((a = r[o]) !== e) a._gc || a._enabled(!1, !1) && (s = !0);
                    else if (5 === i) break;
                return s
            }
            var l, c = e._startTime + 1e-10,
                h = [],
                p = 0,
                f = 0 === e._duration;
            for (o = r.length; --o > -1;)(a = r[o]) === e || a._gc || a._paused || (a._timeline !== e._timeline ? (l = l || X(e, 0, f), 0 === X(a, l, f) && (h[p++] = a)) : c >= a._startTime && a._startTime + a.totalDuration() / a._timeScale + 1e-10 > c && ((f || !a._initted) && 2e-10 >= c - a._startTime || (h[p++] = a)));
            for (o = p; --o > -1;) a = h[o], 2 === i && a._kill(n, t) && (s = !0), (2 !== i || !a._firstPT && a._initted) && a._enabled(!1, !1) && (s = !0);
            return s
        }, X = function(t, e, n) {
            for (var i = t._timeline, r = i._timeScale, o = t._startTime, s = 1e-10; i._timeline;) {
                if (o += i._startTime, r *= i._timeScale, i._paused) return -100;
                i = i._timeline
            }
            return o /= r, o > e ? o - e : n && o === e || !t._initted && 2 * s > o - e ? s : (o += t.totalDuration() / t._timeScale / r) > e + s ? 0 : o - e - s
        };
    i._init = function() {
        var t, e, n, i, r = this.vars,
            o = this._overwrittenProps,
            s = this._duration,
            a = r.immediateRender,
            u = r.ease;
        if (r.startAt) {
            if (this._startAt && this._startAt.render(-1, !0), r.startAt.overwrite = 0, r.startAt.immediateRender = !0, this._startAt = S.to(this.target, 0, r.startAt), a)
                if (this._time > 0) this._startAt = null;
                else if (0 !== s) return
        } else if (r.runBackwards && r.immediateRender && 0 !== s)
            if (this._startAt) this._startAt.render(-1, !0), this._startAt = null;
            else if (0 === this._time) {
            n = {};
            for (i in r) R[i] && "autoCSS" !== i || (n[i] = r[i]);
            return n.overwrite = 0, void(this._startAt = S.to(this.target, 0, n))
        }
        if (this._ease = u ? u instanceof v ? r.easeParams instanceof Array ? u.config.apply(u, r.easeParams) : u : "function" == typeof u ? new v(u, r.easeParams) : y[u] || S.defaultEase : S.defaultEase, this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
            for (t = this._targets.length; --t > -1;) this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], o ? o[t] : null) && (e = !0);
        else e = this._initProps(this.target, this._propLookup, this._siblings, o); if (e && S._onPluginEvent("_onInitAllProps", this), o && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), r.runBackwards)
            for (n = this._firstPT; n;) n.s += n.c, n.c = -n.c, n = n._next;
        this._onUpdate = r.onUpdate, this._initted = !0
    }, i._initProps = function(e, n, i, r) {
        var o, s, a, u, l, c;
        if (null == e) return !1;
        this.vars.css || e.style && e !== t && e.nodeType && j.css && this.vars.autoCSS !== !1 && A(this.vars, e);
        for (o in this.vars) {
            if (c = this.vars[o], R[o]) c instanceof Array && -1 !== c.join("").indexOf("{self}") && (this.vars[o] = c = this._swapSelfInParams(c, this));
            else if (j[o] && (u = new j[o])._onInitTween(e, this.vars[o], this)) {
                for (this._firstPT = l = {
                    _next: this._firstPT,
                    t: u,
                    p: "setRatio",
                    s: 0,
                    c: 1,
                    f: !0,
                    n: o,
                    pg: !0,
                    pr: u._priority
                }, s = u._overwriteProps.length; --s > -1;) n[u._overwriteProps[s]] = this._firstPT;
                (u._priority || u._onInitAllProps) && (a = !0), (u._onDisable || u._onEnable) && (this._notifyPluginsOfEnabled = !0)
            } else this._firstPT = n[o] = l = {
                _next: this._firstPT,
                t: e,
                p: o,
                f: "function" == typeof e[o],
                n: o,
                pg: !1,
                pr: 0
            }, l.s = l.f ? e[o.indexOf("set") || "function" != typeof e["get" + o.substr(3)] ? o : "get" + o.substr(3)]() : parseFloat(e[o]), l.c = "string" == typeof c && "=" === c.charAt(1) ? parseInt(c.charAt(0) + "1", 10) * Number(c.substr(2)) : Number(c) - l.s || 0;
            l && l._next && (l._next._prev = l)
        }
        return r && this._kill(r, e) ? this._initProps(e, n, i, r) : this._overwrite > 1 && this._firstPT && i.length > 1 && z(e, this, n, this._overwrite, i) ? (this._kill(n, e), this._initProps(e, n, i, r)) : a
    }, i.render = function(t, e, n) {
        var i, r, o, s = this._time;
        if (t >= this._duration) this._totalTime = this._time = this._duration, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (i = !0, r = "onComplete"), 0 === this._duration && ((0 === t || 0 > this._rawPrevTime) && this._rawPrevTime !== t && (n = !0, this._rawPrevTime > 0 && (r = "onReverseComplete", e && (t = -1))), this._rawPrevTime = t);
        else if (1e-7 > t) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== s || 0 === this._duration && this._rawPrevTime > 0) && (r = "onReverseComplete", i = this._reversed), 0 > t ? (this._active = !1, 0 === this._duration && (this._rawPrevTime >= 0 && (n = !0), this._rawPrevTime = t)) : this._initted || (n = !0);
        else if (this._totalTime = this._time = t, this._easeType) {
            var a = t / this._duration,
                u = this._easeType,
                l = this._easePower;
            (1 === u || 3 === u && a >= .5) && (a = 1 - a), 3 === u && (a *= 2), 1 === l ? a *= a : 2 === l ? a *= a * a : 3 === l ? a *= a * a * a : 4 === l && (a *= a * a * a * a), this.ratio = 1 === u ? 1 - a : 2 === u ? a : .5 > t / this._duration ? a / 2 : 1 - a / 2
        } else this.ratio = this._ease.getRatio(t / this._duration); if (this._time !== s || n) {
            if (!this._initted) {
                if (this._init(), !this._initted) return;
                this._time && !i ? this.ratio = this._ease.getRatio(this._time / this._duration) : i && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
            }
            for (this._active || !this._paused && this._time !== s && t >= 0 && (this._active = !0), 0 === s && (this._startAt && (t >= 0 ? this._startAt.render(t, e, n) : r || (r = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === this._duration) && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || g))), o = this._firstPT; o;) o.f ? o.t[o.p](o.c * this.ratio + o.s) : o.t[o.p] = o.c * this.ratio + o.s, o = o._next;
            this._onUpdate && (0 > t && this._startAt && this._startAt.render(t, e, n), e || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || g)), r && (this._gc || (0 > t && this._startAt && !this._onUpdate && this._startAt.render(t, e, n), i && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this.vars[r].apply(this.vars[r + "Scope"] || this, this.vars[r + "Params"] || g)))
        }
    }, i._kill = function(t, e) {
        if ("all" === t && (t = null), null == t && (null == e || e === this.target)) return this._enabled(!1, !1);
        e = "string" != typeof e ? e || this._targets || this.target : S.selector(e) || e;
        var n, i, r, o, s, a, u, l;
        if ((e instanceof Array || O(e)) && "number" != typeof e[0])
            for (n = e.length; --n > -1;) this._kill(t, e[n]) && (a = !0);
        else {
            if (this._targets) {
                for (n = this._targets.length; --n > -1;)
                    if (e === this._targets[n]) {
                        s = this._propLookup[n] || {}, this._overwrittenProps = this._overwrittenProps || [], i = this._overwrittenProps[n] = t ? this._overwrittenProps[n] || {} : "all";
                        break
                    }
            } else {
                if (e !== this.target) return !1;
                s = this._propLookup, i = this._overwrittenProps = t ? this._overwrittenProps || {} : "all"
            } if (s) {
                u = t || s, l = t !== i && "all" !== i && t !== s && (null == t || t._tempKill !== !0);
                for (r in u)(o = s[r]) && (o.pg && o.t._kill(u) && (a = !0), o.pg && 0 !== o.t._overwriteProps.length || (o._prev ? o._prev._next = o._next : o === this._firstPT && (this._firstPT = o._next), o._next && (o._next._prev = o._prev), o._next = o._prev = null), delete s[r]), l && (i[r] = 1);
                !this._firstPT && this._initted && this._enabled(!1, !1)
            }
        }
        return a
    }, i.invalidate = function() {
        return this._notifyPluginsOfEnabled && S._onPluginEvent("_onDisable", this), this._firstPT = null, this._overwrittenProps = null, this._onUpdate = null, this._startAt = null, this._initted = this._active = this._notifyPluginsOfEnabled = !1, this._propLookup = this._targets ? {} : [], this
    }, i._enabled = function(t, e) {
        if (o || r.wake(), t && this._gc) {
            var n, i = this._targets;
            if (i)
                for (n = i.length; --n > -1;) this._siblings[n] = F(i[n], this, !0);
            else this._siblings = F(this.target, this, !0)
        }
        return C.prototype._enabled.call(this, t, e), this._notifyPluginsOfEnabled && this._firstPT ? S._onPluginEvent(t ? "_onEnable" : "_onDisable", this) : !1
    }, S.to = function(t, e, n) {
        return new S(t, e, n)
    }, S.from = function(t, e, n) {
        return n.runBackwards = !0, n.immediateRender = 0 != n.immediateRender, new S(t, e, n)
    }, S.fromTo = function(t, e, n, i) {
        return i.startAt = n, i.immediateRender = 0 != i.immediateRender && 0 != n.immediateRender, new S(t, e, i)
    }, S.delayedCall = function(t, e, n, i, r) {
        return new S(e, 0, {
            delay: t,
            onComplete: e,
            onCompleteParams: n,
            onCompleteScope: i,
            onReverseComplete: e,
            onReverseCompleteParams: n,
            onReverseCompleteScope: i,
            immediateRender: !1,
            useFrames: r,
            overwrite: 0
        })
    }, S.set = function(t, e) {
        return new S(t, 0, e)
    }, S.killTweensOf = S.killDelayedCallsTo = function(t, e) {
        for (var n = S.getTweensOf(t), i = n.length; --i > -1;) n[i]._kill(e, t)
    }, S.getTweensOf = function(t) {
        if (null == t) return [];
        t = "string" != typeof t ? t : S.selector(t) || t;
        var e, n, i, r;
        if ((t instanceof Array || O(t)) && "number" != typeof t[0]) {
            for (e = t.length, n = []; --e > -1;) n = n.concat(S.getTweensOf(t[e]));
            for (e = n.length; --e > -1;)
                for (r = n[e], i = e; --i > -1;) r === n[i] && n.splice(e, 1)
        } else
            for (n = F(t).concat(), e = n.length; --e > -1;) n[e]._gc && n.splice(e, 1);
        return n
    };
    var H = d("plugins.TweenPlugin", function(t, e) {
        this._overwriteProps = (t || "").split(","), this._propName = this._overwriteProps[0], this._priority = e || 0, this._super = H.prototype
    }, !0);
    if (i = H.prototype, H.version = "1.10.1", H.API = 2, i._firstPT = null, i._addTween = function(t, e, n, i, r, o) {
        var s, a;
        return null != i && (s = "number" == typeof i || "=" !== i.charAt(1) ? Number(i) - n : parseInt(i.charAt(0) + "1", 10) * Number(i.substr(2))) ? (this._firstPT = a = {
            _next: this._firstPT,
            t: t,
            p: e,
            s: n,
            c: s,
            f: "function" == typeof t[e],
            n: r || e,
            r: o
        }, a._next && (a._next._prev = a), a) : void 0
    }, i.setRatio = function(t) {
        for (var e, n = this._firstPT, i = 1e-6; n;) e = n.c * t + n.s, n.r ? e = 0 | e + (e > 0 ? .5 : -.5) : i > e && e > -i && (e = 0), n.f ? n.t[n.p](e) : n.t[n.p] = e, n = n._next
    }, i._kill = function(t) {
        var e, n = this._overwriteProps,
            i = this._firstPT;
        if (null != t[this._propName]) this._overwriteProps = [];
        else
            for (e = n.length; --e > -1;) null != t[n[e]] && n.splice(e, 1);
        for (; i;) null != t[i.n] && (i._next && (i._next._prev = i._prev), i._prev ? (i._prev._next = i._next, i._prev = null) : this._firstPT === i && (this._firstPT = i._next)), i = i._next;
        return !1
    }, i._roundProps = function(t, e) {
        for (var n = this._firstPT; n;)(t[this._propName] || null != n.n && t[n.n.split(this._propName + "_").join("")]) && (n.r = e), n = n._next
    }, S._onPluginEvent = function(t, e) {
        var n, i, r, o, s, a = e._firstPT;
        if ("_onInitAllProps" === t) {
            for (; a;) {
                for (s = a._next, i = r; i && i.pr > a.pr;) i = i._next;
                (a._prev = i ? i._prev : o) ? a._prev._next = a : r = a, (a._next = i) ? i._prev = a : o = a, a = s
            }
            a = e._firstPT = r
        }
        for (; a;) a.pg && "function" == typeof a.t[t] && a.t[t]() && (n = !0), a = a._next;
        return n
    }, H.activate = function(t) {
        for (var e = t.length; --e > -1;) t[e].API === H.API && (j[(new t[e])._propName] = t[e]);
        return !0
    }, f.plugin = function(t) {
        if (!(t && t.propName && t.init && t.API)) throw "illegal plugin definition.";
        var e, n = t.propName,
            i = t.priority || 0,
            r = t.overwriteProps,
            o = {
                init: "_onInitTween",
                set: "setRatio",
                kill: "_kill",
                round: "_roundProps",
                initAll: "_onInitAllProps"
            }, s = d("plugins." + n.charAt(0).toUpperCase() + n.substr(1) + "Plugin", function() {
                H.call(this, n, i), this._overwriteProps = r || []
            }, t.global === !0),
            a = s.prototype = new H(n);
        a.constructor = s, s.API = t.API;
        for (e in o) "function" == typeof t[e] && (a[o[e]] = t[e]);
        return s.version = t.version, H.activate([s]), s
    }, e = t._gsQueue) {
        for (n = 0; e.length > n; n++) e[n]();
        for (i in h) h[i].func || t.console.log("GSAP encountered missing dependency: com.greensock." + i)
    }
    o = !1
}(window), (window._gsQueue || (window._gsQueue = [])).push(function() {
    "use strict";
    window._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(t, e) {
        var n, i, r, o, s = function() {
                t.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = s.prototype.setRatio
            }, a = {}, u = s.prototype = new t("css");
        u.constructor = s, s.version = "1.10.2", s.API = 2, s.defaultTransformPerspective = 0, u = "px", s.suffixMap = {
            top: u,
            right: u,
            bottom: u,
            left: u,
            width: u,
            height: u,
            fontSize: u,
            padding: u,
            margin: u,
            perspective: u
        };
        var l, c, h, p, f, d, m = /(?:\d|\-\d|\.\d|\-\.\d)+/g,
            g = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
            v = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
            y = /[^\d\-\.]/g,
            _ = /(?:\d|\-|\+|=|#|\.)*/g,
            w = /opacity *= *([^)]*)/,
            x = /opacity:([^;]*)/,
            b = /alpha\(opacity *=.+?\)/i,
            T = /^(rgb|hsl)/,
            k = /([A-Z])/g,
            C = /-([a-z])/gi,
            P = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
            E = function(t, e) {
                return e.toUpperCase()
            }, S = /(?:Left|Right|Width)/i,
            O = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
            A = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
            N = /,(?=[^\)]*(?:\(|$))/gi,
            j = Math.PI / 180,
            M = 180 / Math.PI,
            D = {}, R = document,
            L = R.createElement("div"),
            I = R.createElement("img"),
            $ = s._internals = {
                _specialProps: a
            }, F = navigator.userAgent,
            z = function() {
                var t, e = F.indexOf("Android"),
                    n = R.createElement("div");
                return h = -1 !== F.indexOf("Safari") && -1 === F.indexOf("Chrome") && (-1 === e || Number(F.substr(e + 8, 1)) > 3), f = h && 6 > Number(F.substr(F.indexOf("Version/") + 8, 1)), p = -1 !== F.indexOf("Firefox"), /MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(F), d = parseFloat(RegExp.$1), n.innerHTML = "<a style='top:1px;opacity:.55;'>a</a>", t = n.getElementsByTagName("a")[0], t ? /^0.55/.test(t.style.opacity) : !1
            }(),
            X = function(t) {
                return w.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
            }, H = function(t) {
                window.console && console.log(t)
            }, q = "",
            Y = "",
            W = function(t, e) {
                e = e || L;
                var n, i, r = e.style;
                if (void 0 !== r[t]) return t;
                for (t = t.charAt(0).toUpperCase() + t.substr(1), n = ["O", "Moz", "ms", "Ms", "Webkit"], i = 5; --i > -1 && void 0 === r[n[i] + t];);
                return i >= 0 ? (Y = 3 === i ? "ms" : n[i], q = "-" + Y.toLowerCase() + "-", Y + t) : null
            }, B = R.defaultView ? R.defaultView.getComputedStyle : function() {}, U = s.getStyle = function(t, e, n, i, r) {
                var o;
                return z || "opacity" !== e ? (!i && t.style[e] ? o = t.style[e] : (n = n || B(t, null)) ? (t = n.getPropertyValue(e.replace(k, "-$1").toLowerCase()), o = t || n.length ? t : n[e]) : t.currentStyle && (o = t.currentStyle[e]), null == r || o && "none" !== o && "auto" !== o && "auto auto" !== o ? o : r) : X(t)
            }, V = function(t, e, n, i, r) {
                if ("px" === i || !i) return n;
                if ("auto" === i || !n) return 0;
                var o, s = S.test(e),
                    a = t,
                    u = L.style,
                    l = 0 > n;
                return l && (n = -n), "%" === i && -1 !== e.indexOf("border") ? o = n / 100 * (s ? t.clientWidth : t.clientHeight) : (u.cssText = "border-style:solid; border-width:0; position:absolute; line-height:0;", "%" !== i && a.appendChild ? u[s ? "borderLeftWidth" : "borderTopWidth"] = n + i : (a = t.parentNode || R.body, u[s ? "width" : "height"] = n + i), a.appendChild(L), o = parseFloat(L[s ? "offsetWidth" : "offsetHeight"]), a.removeChild(L), 0 !== o || r || (o = V(t, e, n, i, !0))), l ? -o : o
            }, Q = function(t, e, n) {
                if ("absolute" !== U(t, "position", n)) return 0;
                var i = "left" === e ? "Left" : "Top",
                    r = U(t, "margin" + i, n);
                return t["offset" + i] - (V(t, e, parseFloat(r), r.replace(_, "")) || 0)
            }, Z = function(t, e) {
                var n, i, r = {};
                if (e = e || B(t, null))
                    if (n = e.length)
                        for (; --n > -1;) r[e[n].replace(C, E)] = e.getPropertyValue(e[n]);
                    else
                        for (n in e) r[n] = e[n];
                    else if (e = t.currentStyle || t.style)
                    for (n in e) r[n.replace(C, E)] = e[n];
                return z || (r.opacity = X(t)), i = Te(t, e, !1), r.rotation = i.rotation * M, r.skewX = i.skewX * M, r.scaleX = i.scaleX, r.scaleY = i.scaleY, r.x = i.x, r.y = i.y, be && (r.z = i.z, r.rotationX = i.rotationX * M, r.rotationY = i.rotationY * M, r.scaleZ = i.scaleZ), r.filters && delete r.filters, r
            }, G = function(t, e, n, i, r) {
                var o, s, a, u = {}, l = t.style;
                for (s in n) "cssText" !== s && "length" !== s && isNaN(s) && (e[s] !== (o = n[s]) || r && r[s]) && -1 === s.indexOf("Origin") && ("number" == typeof o || "string" == typeof o) && (u[s] = "auto" !== o || "left" !== s && "top" !== s ? "" !== o && "auto" !== o && "none" !== o || "string" != typeof e[s] || "" === e[s].replace(y, "") ? o : 0 : Q(t, s), void 0 !== l[s] && (a = new he(l, s, l[s], a)));
                if (i)
                    for (s in i) "className" !== s && (u[s] = i[s]);
                return {
                    difs: u,
                    firstMPT: a
                }
            }, K = {
                width: ["Left", "Right"],
                height: ["Top", "Bottom"]
            }, J = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
            te = function(t, e, n) {
                var i = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight),
                    r = K[e],
                    o = r.length;
                for (n = n || B(t, null); --o > -1;) i -= parseFloat(U(t, "padding" + r[o], n, !0)) || 0, i -= parseFloat(U(t, "border" + r[o] + "Width", n, !0)) || 0;
                return i
            }, ee = function(t, e) {
                (null == t || "" === t || "auto" === t || "auto auto" === t) && (t = "0 0");
                var n = t.split(" "),
                    i = -1 !== t.indexOf("left") ? "0%" : -1 !== t.indexOf("right") ? "100%" : n[0],
                    r = -1 !== t.indexOf("top") ? "0%" : -1 !== t.indexOf("bottom") ? "100%" : n[1];
                return null == r ? r = "0" : "center" === r && (r = "50%"), ("center" === i || isNaN(parseFloat(i)) && -1 === (i + "").indexOf("=")) && (i = "50%"), e && (e.oxp = -1 !== i.indexOf("%"), e.oyp = -1 !== r.indexOf("%"), e.oxr = "=" === i.charAt(1), e.oyr = "=" === r.charAt(1), e.ox = parseFloat(i.replace(y, "")), e.oy = parseFloat(r.replace(y, ""))), i + " " + r + (n.length > 2 ? " " + n[2] : "")
            }, ne = function(t, e) {
                return "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e)
            }, ie = function(t, e) {
                return null == t ? e : "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * Number(t.substr(2)) + e : parseFloat(t)
            }, re = function(t, e, n, i) {
                var r, o, s, a, u = 1e-6;
                return null == t ? a = e : "number" == typeof t ? a = t * j : (r = 2 * Math.PI, o = t.split("_"), s = Number(o[0].replace(y, "")) * (-1 === t.indexOf("rad") ? j : 1) - ("=" === t.charAt(1) ? 0 : e), o.length && (i && (i[n] = e + s), -1 !== t.indexOf("short") && (s %= r, s !== s % (r / 2) && (s = 0 > s ? s + r : s - r)), -1 !== t.indexOf("_cw") && 0 > s ? s = (s + 9999999999 * r) % r - (0 | s / r) * r : -1 !== t.indexOf("ccw") && s > 0 && (s = (s - 9999999999 * r) % r - (0 | s / r) * r)), a = e + s), u > a && a > -u && (a = 0), a
            }, oe = {
                aqua: [0, 255, 255],
                lime: [0, 255, 0],
                silver: [192, 192, 192],
                black: [0, 0, 0],
                maroon: [128, 0, 0],
                teal: [0, 128, 128],
                blue: [0, 0, 255],
                navy: [0, 0, 128],
                white: [255, 255, 255],
                fuchsia: [255, 0, 255],
                olive: [128, 128, 0],
                yellow: [255, 255, 0],
                orange: [255, 165, 0],
                gray: [128, 128, 128],
                purple: [128, 0, 128],
                green: [0, 128, 0],
                red: [255, 0, 0],
                pink: [255, 192, 203],
                cyan: [0, 255, 255],
                transparent: [255, 255, 255, 0]
            }, se = function(t, e, n) {
                return t = 0 > t ? t + 1 : t > 1 ? t - 1 : t, 0 | 255 * (1 > 6 * t ? e + 6 * (n - e) * t : .5 > t ? n : 2 > 3 * t ? e + 6 * (n - e) * (2 / 3 - t) : e) + .5
            }, ae = function(t) {
                var e, n, i, r, o, s;
                return t && "" !== t ? "number" == typeof t ? [t >> 16, 255 & t >> 8, 255 & t] : ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)), oe[t] ? oe[t] : "#" === t.charAt(0) ? (4 === t.length && (e = t.charAt(1), n = t.charAt(2), i = t.charAt(3), t = "#" + e + e + n + n + i + i), t = parseInt(t.substr(1), 16), [t >> 16, 255 & t >> 8, 255 & t]) : "hsl" === t.substr(0, 3) ? (t = t.match(m), r = Number(t[0]) % 360 / 360, o = Number(t[1]) / 100, s = Number(t[2]) / 100, n = .5 >= s ? s * (o + 1) : s + o - s * o, e = 2 * s - n, t.length > 3 && (t[3] = Number(t[3])), t[0] = se(r + 1 / 3, e, n), t[1] = se(r, e, n), t[2] = se(r - 1 / 3, e, n), t) : (t = t.match(m) || oe.transparent, t[0] = Number(t[0]), t[1] = Number(t[1]), t[2] = Number(t[2]), t.length > 3 && (t[3] = Number(t[3])), t)) : oe.black
            }, ue = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";
        for (u in oe) ue += "|" + u + "\\b";
        ue = RegExp(ue + ")", "gi");
        var le = function(t, e, n, i) {
            if (null == t) return function(t) {
                return t
            };
            var r, o = e ? (t.match(ue) || [""])[0] : "",
                s = t.split(o).join("").match(v) || [],
                a = t.substr(0, t.indexOf(s[0])),
                u = ")" === t.charAt(t.length - 1) ? ")" : "",
                l = -1 !== t.indexOf(" ") ? " " : ",",
                c = s.length,
                h = c > 0 ? s[0].replace(m, "") : "";
            return c ? r = e ? function(t) {
                var e, p, f, d;
                if ("number" == typeof t) t += h;
                else if (i && N.test(t)) {
                    for (d = t.replace(N, "|").split("|"), f = 0; d.length > f; f++) d[f] = r(d[f]);
                    return d.join(",")
                }
                if (e = (t.match(ue) || [o])[0], p = t.split(e).join("").match(v) || [], f = p.length, c > f--)
                    for (; c > ++f;) p[f] = n ? p[0 | (f - 1) / 2] : s[f];
                return a + p.join(l) + l + e + u + (-1 !== t.indexOf("inset") ? " inset" : "")
            } : function(t) {
                var e, o, p;
                if ("number" == typeof t) t += h;
                else if (i && N.test(t)) {
                    for (o = t.replace(N, "|").split("|"), p = 0; o.length > p; p++) o[p] = r(o[p]);
                    return o.join(",")
                }
                if (e = t.match(v) || [], p = e.length, c > p--)
                    for (; c > ++p;) e[p] = n ? e[0 | (p - 1) / 2] : s[p];
                return a + e.join(l) + u
            } : function(t) {
                return t
            }
        }, ce = function(t) {
                return t = t.split(","),
                function(e, n, i, r, o, s, a) {
                    var u, l = (n + "").split(" ");
                    for (a = {}, u = 0; 4 > u; u++) a[t[u]] = l[u] = l[u] || l[(u - 1) / 2 >> 0];
                    return r.parse(e, a, o, s)
                }
            }, he = ($._setPluginRatio = function(t) {
                this.plugin.setRatio(t);
                for (var e, n, i, r, o = this.data, s = o.proxy, a = o.firstMPT, u = 1e-6; a;) e = s[a.v], a.r ? e = e > 0 ? 0 | e + .5 : 0 | e - .5 : u > e && e > -u && (e = 0), a.t[a.p] = e, a = a._next;
                if (o.autoRotate && (o.autoRotate.rotation = s.rotation), 1 === t)
                    for (a = o.firstMPT; a;) {
                        if (n = a.t, n.type) {
                            if (1 === n.type) {
                                for (r = n.xs0 + n.s + n.xs1, i = 1; n.l > i; i++) r += n["xn" + i] + n["xs" + (i + 1)];
                                n.e = r
                            }
                        } else n.e = n.s + n.xs0;
                        a = a._next
                    }
            }, function(t, e, n, i, r) {
                this.t = t, this.p = e, this.v = n, this.r = r, i && (i._prev = this, this._next = i)
            }),
            pe = ($._parseToProxy = function(t, e, n, i, r, o) {
                var s, a, u, l, c, h = i,
                    p = {}, f = {}, d = n._transform,
                    m = D;
                for (n._transform = null, D = e, i = c = n.parse(t, e, i, r), D = m, o && (n._transform = d, h && (h._prev = null, h._prev && (h._prev._next = null))); i && i !== h;) {
                    if (1 >= i.type && (a = i.p, f[a] = i.s + i.c, p[a] = i.s, o || (l = new he(i, "s", a, l, i.r), i.c = 0), 1 === i.type))
                        for (s = i.l; --s > 0;) u = "xn" + s, a = i.p + "_" + u, f[a] = i.data[u], p[a] = i[u], o || (l = new he(i, u, a, l, i.rxp[u]));
                    i = i._next
                }
                return {
                    proxy: p,
                    end: f,
                    firstMPT: l,
                    pt: c
                }
            }, $.CSSPropTween = function(t, e, i, r, s, a, u, l, c, h, p) {
                this.t = t, this.p = e, this.s = i, this.c = r, this.n = u || e, t instanceof pe || o.push(this.n), this.r = l, this.type = a || 0, c && (this.pr = c, n = !0), this.b = void 0 === h ? i : h, this.e = void 0 === p ? i + r : p, s && (this._next = s, s._prev = this)
            }),
            fe = s.parseComplex = function(t, e, n, i, r, o, s, a, u, c) {
                n = n || o || "", s = new pe(t, e, 0, 0, s, c ? 2 : 1, null, !1, a, n, i), i += "";
                var h, p, f, d, v, y, _, w, x, b, k, C, P = n.split(", ").join(",").split(" "),
                    E = i.split(", ").join(",").split(" "),
                    S = P.length,
                    O = l !== !1;
                for ((-1 !== i.indexOf(",") || -1 !== n.indexOf(",")) && (P = P.join(" ").replace(N, ", ").split(" "), E = E.join(" ").replace(N, ", ").split(" "), S = P.length), S !== E.length && (P = (o || "").split(" "), S = P.length), s.plugin = u, s.setRatio = c, h = 0; S > h; h++)
                    if (d = P[h], v = E[h], w = parseFloat(d), w || 0 === w) s.appendXtra("", w, ne(v, w), v.replace(g, ""), O && -1 !== v.indexOf("px"), !0);
                    else if (r && ("#" === d.charAt(0) || oe[d] || T.test(d))) C = "," === v.charAt(v.length - 1) ? ")," : ")", d = ae(d), v = ae(v), x = d.length + v.length > 6, x && !z && 0 === v[3] ? (s["xs" + s.l] += s.l ? " transparent" : "transparent", s.e = s.e.split(E[h]).join("transparent")) : (z || (x = !1), s.appendXtra(x ? "rgba(" : "rgb(", d[0], v[0] - d[0], ",", !0, !0).appendXtra("", d[1], v[1] - d[1], ",", !0).appendXtra("", d[2], v[2] - d[2], x ? "," : C, !0), x && (d = 4 > d.length ? 1 : d[3], s.appendXtra("", d, (4 > v.length ? 1 : v[3]) - d, C, !1)));
                else if (y = d.match(m)) {
                    if (_ = v.match(g), !_ || _.length !== y.length) return s;
                    for (f = 0, p = 0; y.length > p; p++) k = y[p], b = d.indexOf(k, f), s.appendXtra(d.substr(f, b - f), Number(k), ne(_[p], k), "", O && "px" === d.substr(b + k.length, 2), 0 === p), f = b + k.length;
                    s["xs" + s.l] += d.substr(f)
                } else s["xs" + s.l] += s.l ? " " + d : d; if (-1 !== i.indexOf("=") && s.data) {
                    for (C = s.xs0 + s.data.s, h = 1; s.l > h; h++) C += s["xs" + h] + s.data["xn" + h];
                    s.e = C + s["xs" + h]
                }
                return s.l || (s.type = -1, s.xs0 = s.e), s.xfirst || s
            }, de = 9;
        for (u = pe.prototype, u.l = u.pr = 0; --de > 0;) u["xn" + de] = 0, u["xs" + de] = "";
        u.xs0 = "", u._next = u._prev = u.xfirst = u.data = u.plugin = u.setRatio = u.rxp = null, u.appendXtra = function(t, e, n, i, r, o) {
            var s = this,
                a = s.l;
            return s["xs" + a] += o && a ? " " + t : t || "", n || 0 === a || s.plugin ? (s.l++, s.type = s.setRatio ? 2 : 1, s["xs" + s.l] = i || "", a > 0 ? (s.data["xn" + a] = e + n, s.rxp["xn" + a] = r, s["xn" + a] = e, s.plugin || (s.xfirst = new pe(s, "xn" + a, e, n, s.xfirst || s, 0, s.n, r, s.pr), s.xfirst.xs0 = 0), s) : (s.data = {
                s: e + n
            }, s.rxp = {}, s.s = e, s.c = n, s.r = r, s)) : (s["xs" + a] += e + (i || ""), s)
        };
        var me = function(t, e) {
            e = e || {}, this.p = e.prefix ? W(t) || t : t, a[t] = a[this.p] = this, this.format = e.formatter || le(e.defaultValue, e.color, e.collapsible, e.multi), e.parser && (this.parse = e.parser), this.clrs = e.color, this.multi = e.multi, this.keyword = e.keyword, this.dflt = e.defaultValue, this.pr = e.priority || 0
        }, ge = $._registerComplexSpecialProp = function(t, e, n) {
                "object" != typeof e && (e = {
                    parser: n
                });
                var i, r, o = t.split(","),
                    s = e.defaultValue;
                for (n = n || [s], i = 0; o.length > i; i++) e.prefix = 0 === i && e.prefix, e.defaultValue = n[i] || s, r = new me(o[i], e)
            }, ve = function(t) {
                if (!a[t]) {
                    var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
                    ge(t, {
                        parser: function(t, n, i, r, o, s, u) {
                            var l = (window.GreenSockGlobals || window).com.greensock.plugins[e];
                            return l ? (l._cssRegister(), a[i].parse(t, n, i, r, o, s, u)) : (H("Error: " + e + " js file not loaded."), o)
                        }
                    })
                }
            };
        u = me.prototype, u.parseComplex = function(t, e, n, i, r, o) {
            var s, a, u, l, c, h, p = this.keyword;
            if (this.multi && (N.test(n) || N.test(e) ? (a = e.replace(N, "|").split("|"), u = n.replace(N, "|").split("|")) : p && (a = [e], u = [n])), u) {
                for (l = u.length > a.length ? u.length : a.length, s = 0; l > s; s++) e = a[s] = a[s] || this.dflt, n = u[s] = u[s] || this.dflt, p && (c = e.indexOf(p), h = n.indexOf(p), c !== h && (n = -1 === h ? u : a, n[s] += " " + p));
                e = a.join(", "), n = u.join(", ")
            }
            return fe(t, this.p, e, n, this.clrs, this.dflt, i, this.pr, r, o)
        }, u.parse = function(t, e, n, i, o, s) {
            return this.parseComplex(t.style, this.format(U(t, this.p, r, !1, this.dflt)), this.format(e), o, s)
        }, s.registerSpecialProp = function(t, e, n) {
            ge(t, {
                parser: function(t, i, r, o, s, a) {
                    var u = new pe(t, r, 0, 0, s, 2, r, !1, n);
                    return u.plugin = a, u.setRatio = e(t, i, o._tween, r), u
                },
                priority: n
            })
        };
        var ye = "scaleX,scaleY,scaleZ,x,y,z,skewX,rotation,rotationX,rotationY,perspective".split(","),
            _e = W("transform"),
            we = q + "transform",
            xe = W("transformOrigin"),
            be = null !== W("perspective"),
            Te = function(t, e, n, i) {
                if (t._gsTransform && n && !i) return t._gsTransform;
                var r, o, a, u, l, c, h, p, f, d, m, g, v, y = n ? t._gsTransform || {
                        skewY: 0
                    } : {
                        skewY: 0
                    }, _ = 0 > y.scaleX,
                    w = 2e-5,
                    x = 1e5,
                    b = -Math.PI + 1e-4,
                    T = Math.PI - 1e-4,
                    k = be ? parseFloat(U(t, xe, e, !1, "0 0 0").split(" ")[2]) || y.zOrigin || 0 : 0;
                for (_e ? r = U(t, we, e, !0) : t.currentStyle && (r = t.currentStyle.filter.match(O), r = r && 4 === r.length ? [r[0].substr(4), Number(r[2].substr(4)), Number(r[1].substr(4)), r[3].substr(4), y.x || 0, y.y || 0].join(",") : ""), o = (r || "").match(/(?:\-|\b)[\d\-\.e]+\b/gi) || [], a = o.length; --a > -1;) u = Number(o[a]), o[a] = (l = u - (u |= 0)) ? (0 | l * x + (0 > l ? -.5 : .5)) / x + u : u;
                if (16 === o.length) {
                    var C = o[8],
                        P = o[9],
                        E = o[10],
                        S = o[12],
                        A = o[13],
                        N = o[14];
                    if (y.zOrigin && (N = -y.zOrigin, S = C * N - o[12], A = P * N - o[13], N = E * N + y.zOrigin - o[14]), !n || i || null == y.rotationX) {
                        var j, M, D, R, L, I, $, F = o[0],
                            z = o[1],
                            X = o[2],
                            H = o[3],
                            q = o[4],
                            Y = o[5],
                            W = o[6],
                            B = o[7],
                            V = o[11],
                            Q = y.rotationX = Math.atan2(W, E),
                            Z = b > Q || Q > T;
                        Q && (R = Math.cos(-Q), L = Math.sin(-Q), j = q * R + C * L, M = Y * R + P * L, D = W * R + E * L, C = q * -L + C * R, P = Y * -L + P * R, E = W * -L + E * R, V = B * -L + V * R, q = j, Y = M, W = D), Q = y.rotationY = Math.atan2(C, F), Q && (I = b > Q || Q > T, R = Math.cos(-Q), L = Math.sin(-Q), j = F * R - C * L, M = z * R - P * L, D = X * R - E * L, P = z * L + P * R, E = X * L + E * R, V = H * L + V * R, F = j, z = M, X = D), Q = y.rotation = Math.atan2(z, Y), Q && ($ = b > Q || Q > T, R = Math.cos(-Q), L = Math.sin(-Q), F = F * R + q * L, M = z * R + Y * L, Y = z * -L + Y * R, W = X * -L + W * R, z = M), $ && Z ? y.rotation = y.rotationX = 0 : $ && I ? y.rotation = y.rotationY = 0 : I && Z && (y.rotationY = y.rotationX = 0), y.scaleX = (0 | Math.sqrt(F * F + z * z) * x + .5) / x, y.scaleY = (0 | Math.sqrt(Y * Y + P * P) * x + .5) / x, y.scaleZ = (0 | Math.sqrt(W * W + E * E) * x + .5) / x, y.skewX = 0, y.perspective = V ? 1 / (0 > V ? -V : V) : 0, y.x = S, y.y = A, y.z = N
                    }
                } else if (!(be && !i && o.length && y.x === o[4] && y.y === o[5] && (y.rotationX || y.rotationY) || void 0 !== y.x && "none" === U(t, "display", e))) {
                    var G = o.length >= 6,
                        K = G ? o[0] : 1,
                        J = o[1] || 0,
                        te = o[2] || 0,
                        ee = G ? o[3] : 1;
                    y.x = o[4] || 0, y.y = o[5] || 0, c = Math.sqrt(K * K + J * J), h = Math.sqrt(ee * ee + te * te), p = K || J ? Math.atan2(J, K) : y.rotation || 0, f = te || ee ? Math.atan2(te, ee) + p : y.skewX || 0, d = c - Math.abs(y.scaleX || 0), m = h - Math.abs(y.scaleY || 0), Math.abs(f) > Math.PI / 2 && Math.abs(f) < 1.5 * Math.PI && (_ ? (c *= -1, f += 0 >= p ? Math.PI : -Math.PI, p += 0 >= p ? Math.PI : -Math.PI) : (h *= -1, f += 0 >= f ? Math.PI : -Math.PI)), g = (p - y.rotation) % Math.PI, v = (f - y.skewX) % Math.PI, (void 0 === y.skewX || d > w || -w > d || m > w || -w > m || g > b && T > g && !1 | g * x || v > b && T > v && !1 | v * x) && (y.scaleX = c, y.scaleY = h, y.rotation = p, y.skewX = f), be && (y.rotationX = y.rotationY = y.z = 0, y.perspective = parseFloat(s.defaultTransformPerspective) || 0, y.scaleZ = 1)
                }
                y.zOrigin = k;
                for (a in y) w > y[a] && y[a] > -w && (y[a] = 0);
                return n && (t._gsTransform = y), y
            }, ke = function(t) {
                var e, n, i = this.data,
                    r = -i.rotation,
                    o = r + i.skewX,
                    s = 1e5,
                    a = (0 | Math.cos(r) * i.scaleX * s) / s,
                    u = (0 | Math.sin(r) * i.scaleX * s) / s,
                    l = (0 | Math.sin(o) * -i.scaleY * s) / s,
                    c = (0 | Math.cos(o) * i.scaleY * s) / s,
                    h = this.t.style,
                    p = this.t.currentStyle;
                if (p) {
                    n = u, u = -l, l = -n, e = p.filter, h.filter = "";
                    var f, m, g = this.t.offsetWidth,
                        v = this.t.offsetHeight,
                        y = "absolute" !== p.position,
                        x = "progid:DXImageTransform.Microsoft.Matrix(M11=" + a + ", M12=" + u + ", M21=" + l + ", M22=" + c,
                        b = i.x,
                        T = i.y;
                    if (null != i.ox && (f = (i.oxp ? .01 * g * i.ox : i.ox) - g / 2, m = (i.oyp ? .01 * v * i.oy : i.oy) - v / 2, b += f - (f * a + m * u), T += m - (f * l + m * c)), y) f = g / 2, m = v / 2, x += ", Dx=" + (f - (f * a + m * u) + b) + ", Dy=" + (m - (f * l + m * c) + T) + ")";
                    else {
                        var k, C, P, E = 8 > d ? 1 : -1;
                        for (f = i.ieOffsetX || 0, m = i.ieOffsetY || 0, i.ieOffsetX = Math.round((g - ((0 > a ? -a : a) * g + (0 > u ? -u : u) * v)) / 2 + b), i.ieOffsetY = Math.round((v - ((0 > c ? -c : c) * v + (0 > l ? -l : l) * g)) / 2 + T), de = 0; 4 > de; de++) C = J[de], k = p[C], n = -1 !== k.indexOf("px") ? parseFloat(k) : V(this.t, C, parseFloat(k), k.replace(_, "")) || 0, P = n !== i[C] ? 2 > de ? -i.ieOffsetX : -i.ieOffsetY : 2 > de ? f - i.ieOffsetX : m - i.ieOffsetY, h[C] = (i[C] = Math.round(n - P * (0 === de || 2 === de ? 1 : E))) + "px";
                        x += ", sizingMethod='auto expand')"
                    }
                    h.filter = -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? e.replace(A, x) : x + " " + e, (0 === t || 1 === t) && 1 === a && 0 === u && 0 === l && 1 === c && (y && -1 === x.indexOf("Dx=0, Dy=0") || w.test(e) && 100 !== parseFloat(RegExp.$1) || -1 === e.indexOf("gradient(") && h.removeAttribute("filter"))
                }
            }, Ce = function() {
                var t, e, n, i, r, o, s, a, u, l, c, h, f, d, m, g, v, y, _, w, x, b, T, k, C, P, E, S = this.data,
                    O = this.t.style,
                    A = S.rotation,
                    N = S.scaleX,
                    j = S.scaleY,
                    M = S.scaleZ;
                if (p && (C = O.top ? "top" : O.bottom ? "bottom" : parseFloat(U(this.t, "top", null, !1)) ? "bottom" : "top", x = U(this.t, C, null, !1), P = parseFloat(x) || 0, E = x.substr((P + "").length) || "px", S._ffFix = !S._ffFix, O[C] = (S._ffFix ? P + .05 : P - .05) + E), A || S.skewX) _ = Math.cos(A), w = Math.sin(A), t = _, r = w, S.skewX && (A -= S.skewX, _ = Math.cos(A), w = Math.sin(A)), e = -w, o = _;
                else {
                    if (!S.rotationY && !S.rotationX && 1 === M) return void(O[_e] = "translate3d(" + S.x + "px," + S.y + "px," + S.z + "px)" + (1 !== N || 1 !== j ? " scale(" + N + "," + j + ")" : ""));
                    t = o = 1, e = r = 0
                }
                c = 1, n = i = s = a = u = l = h = f = d = 0, g = S.perspective, m = g ? -1 / g : 0, v = S.zOrigin, y = 1e5, A = S.rotationY, A && (_ = Math.cos(A), w = Math.sin(A), u = c * -w, f = m * -w, n = t * w, s = r * w, c *= _, m *= _, t *= _, r *= _), A = S.rotationX, A && (_ = Math.cos(A), w = Math.sin(A), x = e * _ + n * w, b = o * _ + s * w, T = l * _ + c * w, k = d * _ + m * w, n = e * -w + n * _, s = o * -w + s * _, c = l * -w + c * _, m = d * -w + m * _, e = x, o = b, l = T, d = k), 1 !== M && (n *= M, s *= M, c *= M, m *= M), 1 !== j && (e *= j, o *= j, l *= j, d *= j), 1 !== N && (t *= N, r *= N, u *= N, f *= N), v && (h -= v, i = n * h, a = s * h, h = c * h + v), i = (x = (i += S.x) - (i |= 0)) ? (0 | x * y + (0 > x ? -.5 : .5)) / y + i : i, a = (x = (a += S.y) - (a |= 0)) ? (0 | x * y + (0 > x ? -.5 : .5)) / y + a : a, h = (x = (h += S.z) - (h |= 0)) ? (0 | x * y + (0 > x ? -.5 : .5)) / y + h : h, O[_e] = "matrix3d(" + [(0 | t * y) / y, (0 | r * y) / y, (0 | u * y) / y, (0 | f * y) / y, (0 | e * y) / y, (0 | o * y) / y, (0 | l * y) / y, (0 | d * y) / y, (0 | n * y) / y, (0 | s * y) / y, (0 | c * y) / y, (0 | m * y) / y, i, a, h, g ? 1 + -h / g : 1].join(",") + ")"
            }, Pe = function() {
                var t, e, n, i, r, o, s, a, u, l = this.data,
                    c = this.t,
                    h = c.style;
                p && (t = h.top ? "top" : h.bottom ? "bottom" : parseFloat(U(c, "top", null, !1)) ? "bottom" : "top", e = U(c, t, null, !1), n = parseFloat(e) || 0, i = e.substr((n + "").length) || "px", l._ffFix = !l._ffFix, h[t] = (l._ffFix ? n + .05 : n - .05) + i), l.rotation || l.skewX ? (r = l.rotation, o = r - l.skewX, s = 1e5, a = l.scaleX * s, u = l.scaleY * s, h[_e] = "matrix(" + (0 | Math.cos(r) * a) / s + "," + (0 | Math.sin(r) * a) / s + "," + (0 | Math.sin(o) * -u) / s + "," + (0 | Math.cos(o) * u) / s + "," + l.x + "," + l.y + ")") : h[_e] = "matrix(" + l.scaleX + ",0,0," + l.scaleY + "," + l.x + "," + l.y + ")"
            };
        ge("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,transformPerspective,directionalRotation,parseTransform,force3D", {
            parser: function(t, e, n, i, o, s, a) {
                if (i._transform) return o;
                var u, l, c, h, p, f, d, m = i._transform = Te(t, r, !0, a.parseTransform),
                    g = t.style,
                    v = 1e-6,
                    y = ye.length,
                    _ = a,
                    w = {};
                if ("string" == typeof _.transform && _e) c = g.cssText, g[_e] = _.transform, g.display = "block", u = Te(t, null, !1), g.cssText = c;
                else if ("object" == typeof _) {
                    if (u = {
                        scaleX: ie(null != _.scaleX ? _.scaleX : _.scale, m.scaleX),
                        scaleY: ie(null != _.scaleY ? _.scaleY : _.scale, m.scaleY),
                        scaleZ: ie(null != _.scaleZ ? _.scaleZ : _.scale, m.scaleZ),
                        x: ie(_.x, m.x),
                        y: ie(_.y, m.y),
                        z: ie(_.z, m.z),
                        perspective: ie(_.transformPerspective, m.perspective)
                    }, d = _.directionalRotation, null != d)
                        if ("object" == typeof d)
                            for (c in d) _[c] = d[c];
                        else _.rotation = d;
                    u.rotation = re("rotation" in _ ? _.rotation : "shortRotation" in _ ? _.shortRotation + "_short" : "rotationZ" in _ ? _.rotationZ : m.rotation * M, m.rotation, "rotation", w), be && (u.rotationX = re("rotationX" in _ ? _.rotationX : "shortRotationX" in _ ? _.shortRotationX + "_short" : m.rotationX * M || 0, m.rotationX, "rotationX", w), u.rotationY = re("rotationY" in _ ? _.rotationY : "shortRotationY" in _ ? _.shortRotationY + "_short" : m.rotationY * M || 0, m.rotationY, "rotationY", w)), u.skewX = null == _.skewX ? m.skewX : re(_.skewX, m.skewX), u.skewY = null == _.skewY ? m.skewY : re(_.skewY, m.skewY), (l = u.skewY - m.skewY) && (u.skewX += l, u.rotation += l)
                }
                for (null != _.force3D && (m.force3D = _.force3D, f = !0), p = m.force3D || m.z || m.rotationX || m.rotationY || u.z || u.rotationX || u.rotationY || u.perspective, p || null == _.scale || (u.scaleZ = 1); --y > -1;) n = ye[y], h = u[n] - m[n], (h > v || -v > h || null != D[n]) && (f = !0, o = new pe(m, n, m[n], h, o), n in w && (o.e = w[n]), o.xs0 = 0, o.plugin = s, i._overwriteProps.push(o.n));
                return h = _.transformOrigin, (h || be && p && m.zOrigin) && (_e ? (f = !0, n = xe, h = (h || U(t, n, r, !1, "50% 50%")) + "", o = new pe(g, n, 0, 0, o, -1, "transformOrigin"), o.b = g[n], o.plugin = s, be ? (c = m.zOrigin, h = h.split(" "), m.zOrigin = (h.length > 2 && (0 === c || "0px" !== h[2]) ? parseFloat(h[2]) : c) || 0, o.xs0 = o.e = g[n] = h[0] + " " + (h[1] || "50%") + " 0px", o = new pe(m, "zOrigin", 0, 0, o, -1, o.n), o.b = c, o.xs0 = o.e = m.zOrigin) : o.xs0 = o.e = g[n] = h) : ee(h + "", m)), f && (i._transformType = p || 3 === this._transformType ? 3 : 2), o
            },
            prefix: !0
        }), ge("boxShadow", {
            defaultValue: "0px 0px 0px 0px #999",
            prefix: !0,
            color: !0,
            multi: !0,
            keyword: "inset"
        }), ge("borderRadius", {
            defaultValue: "0px",
            parser: function(t, e, n, o, s) {
                e = this.format(e);
                var a, u, l, c, h, p, f, d, m, g, v, y, _, w, x, b, T = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                    k = t.style;
                for (m = parseFloat(t.offsetWidth), g = parseFloat(t.offsetHeight), a = e.split(" "), u = 0; T.length > u; u++) this.p.indexOf("border") && (T[u] = W(T[u])), h = c = U(t, T[u], r, !1, "0px"), -1 !== h.indexOf(" ") && (c = h.split(" "), h = c[0], c = c[1]), p = l = a[u], f = parseFloat(h), y = h.substr((f + "").length), _ = "=" === p.charAt(1), _ ? (d = parseInt(p.charAt(0) + "1", 10), p = p.substr(2), d *= parseFloat(p), v = p.substr((d + "").length - (0 > d ? 1 : 0)) || "") : (d = parseFloat(p), v = p.substr((d + "").length)), "" === v && (v = i[n] || y), v !== y && (w = V(t, "borderLeft", f, y), x = V(t, "borderTop", f, y), "%" === v ? (h = 100 * (w / m) + "%", c = 100 * (x / g) + "%") : "em" === v ? (b = V(t, "borderLeft", 1, "em"), h = w / b + "em", c = x / b + "em") : (h = w + "px", c = x + "px"), _ && (p = parseFloat(h) + d + v, l = parseFloat(c) + d + v)), s = fe(k, T[u], h + " " + c, p + " " + l, !1, "0px", s);
                return s
            },
            prefix: !0,
            formatter: le("0px 0px 0px 0px", !1, !0)
        }), ge("backgroundPosition", {
            defaultValue: "0 0",
            parser: function(t, e, n, i, o, s) {
                var a, u, l, c, h, p, f = "background-position",
                    m = r || B(t, null),
                    g = this.format((m ? d ? m.getPropertyValue(f + "-x") + " " + m.getPropertyValue(f + "-y") : m.getPropertyValue(f) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"),
                    v = this.format(e);
                if (-1 !== g.indexOf("%") != (-1 !== v.indexOf("%")) && (p = U(t, "backgroundImage").replace(P, ""), p && "none" !== p)) {
                    for (a = g.split(" "), u = v.split(" "), I.setAttribute("src", p), l = 2; --l > -1;) g = a[l], c = -1 !== g.indexOf("%"), c !== (-1 !== u[l].indexOf("%")) && (h = 0 === l ? t.offsetWidth - I.width : t.offsetHeight - I.height, a[l] = c ? parseFloat(g) / 100 * h + "px" : 100 * (parseFloat(g) / h) + "%");
                    g = a.join(" ")
                }
                return this.parseComplex(t.style, g, v, o, s)
            },
            formatter: ee
        }), ge("backgroundSize", {
            defaultValue: "0 0",
            formatter: ee
        }), ge("perspective", {
            defaultValue: "0px",
            prefix: !0
        }), ge("perspectiveOrigin", {
            defaultValue: "50% 50%",
            prefix: !0
        }), ge("transformStyle", {
            prefix: !0
        }), ge("backfaceVisibility", {
            prefix: !0
        }), ge("margin", {
            parser: ce("marginTop,marginRight,marginBottom,marginLeft")
        }), ge("padding", {
            parser: ce("paddingTop,paddingRight,paddingBottom,paddingLeft")
        }), ge("clip", {
            defaultValue: "rect(0px,0px,0px,0px)",
            parser: function(t, e, n, i, o, s) {
                var a, u, l;
                return 9 > d ? (u = t.currentStyle, l = 8 > d ? " " : ",", a = "rect(" + u.clipTop + l + u.clipRight + l + u.clipBottom + l + u.clipLeft + ")", e = this.format(e).split(",").join(l)) : (a = this.format(U(t, this.p, r, !1, this.dflt)), e = this.format(e)), this.parseComplex(t.style, a, e, o, s)
            }
        }), ge("textShadow", {
            defaultValue: "0px 0px 0px #999",
            color: !0,
            multi: !0
        }), ge("autoRound,strictUnits", {
            parser: function(t, e, n, i, r) {
                return r
            }
        }), ge("border", {
            defaultValue: "0px solid #000",
            parser: function(t, e, n, i, o, s) {
                return this.parseComplex(t.style, this.format(U(t, "borderTopWidth", r, !1, "0px") + " " + U(t, "borderTopStyle", r, !1, "solid") + " " + U(t, "borderTopColor", r, !1, "#000")), this.format(e), o, s)
            },
            color: !0,
            formatter: function(t) {
                var e = t.split(" ");
                return e[0] + " " + (e[1] || "solid") + " " + (t.match(ue) || ["#000"])[0]
            }
        }), ge("float,cssFloat,styleFloat", {
            parser: function(t, e, n, i, r) {
                var o = t.style,
                    s = "cssFloat" in o ? "cssFloat" : "styleFloat";
                return new pe(o, s, 0, 0, r, -1, n, !1, 0, o[s], e)
            }
        });
        var Ee = function(t) {
            var e, n = this.t,
                i = n.filter || U(this.data, "filter"),
                r = 0 | this.s + this.c * t;
            100 === r && (-1 === i.indexOf("atrix(") && -1 === i.indexOf("radient(") ? (n.removeAttribute("filter"), e = !U(this.data, "filter")) : (n.filter = i.replace(b, ""), e = !0)), e || (this.xn1 && (n.filter = i = i || "alpha(opacity=" + r + ")"), -1 === i.indexOf("opacity") ? 0 === r && this.xn1 || (n.filter += " alpha(opacity=" + r + ")") : n.filter = i.replace(w, "opacity=" + r))
        };
        ge("opacity,alpha,autoAlpha", {
            defaultValue: "1",
            parser: function(t, e, n, i, o, s) {
                var a = parseFloat(U(t, "opacity", r, !1, "1")),
                    u = t.style,
                    l = "autoAlpha" === n;
                return e = parseFloat(e), l && 1 === a && "hidden" === U(t, "visibility", r) && 0 !== e && (a = 0), z ? o = new pe(u, "opacity", a, e - a, o) : (o = new pe(u, "opacity", 100 * a, 100 * (e - a), o), o.xn1 = l ? 1 : 0, u.zoom = 1, o.type = 2, o.b = "alpha(opacity=" + o.s + ")", o.e = "alpha(opacity=" + (o.s + o.c) + ")", o.data = t, o.plugin = s, o.setRatio = Ee), l && (o = new pe(u, "visibility", 0, 0, o, -1, null, !1, 0, 0 !== a ? "inherit" : "hidden", 0 === e ? "hidden" : "inherit"), o.xs0 = "inherit", i._overwriteProps.push(o.n)), o
            }
        });
        var Se = function(t, e) {
            e && (t.removeProperty ? t.removeProperty(e.replace(k, "-$1").toLowerCase()) : t.removeAttribute(e))
        }, Oe = function(t) {
                if (this.t._gsClassPT = this, 1 === t || 0 === t) {
                    this.t.className = 0 === t ? this.b : this.e;
                    for (var e = this.data, n = this.t.style; e;) e.v ? n[e.p] = e.v : Se(n, e.p), e = e._next;
                    1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                } else this.t.className !== this.e && (this.t.className = this.e)
            };
        ge("className", {
            parser: function(t, e, i, o, s, a, u) {
                var l, c, h, p, f, d = t.className,
                    m = t.style.cssText;
                if (s = o._classNamePT = new pe(t, i, 0, 0, s, 2), s.setRatio = Oe, s.pr = -11, n = !0, s.b = d, c = Z(t, r), h = t._gsClassPT) {
                    for (p = {}, f = h.data; f;) p[f.p] = 1, f = f._next;
                    h.setRatio(1)
                }
                return t._gsClassPT = s, s.e = "=" !== e.charAt(1) ? e : d.replace(RegExp("\\s*\\b" + e.substr(2) + "\\b"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""), o._tween._duration && (t.className = s.e, l = G(t, c, Z(t), u, p), t.className = d, s.data = l.firstMPT, t.style.cssText = m, s = s.xfirst = o.parse(t, l.difs, s, a)), s
            }
        });
        var Ae = function(t) {
            if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration) {
                if ("all" === this.e) return this.t.style.cssText = "", void(this.t._gsTransform && delete this.t._gsTransform);
                for (var e, n = this.t.style, i = this.e.split(","), r = i.length, o = a.transform.parse; --r > -1;) e = i[r], a[e] && (e = a[e].parse === o ? _e : a[e].p), Se(n, e)
            }
        };
        for (ge("clearProps", {
            parser: function(t, e, i, r, o) {
                return o = new pe(t, i, 0, 0, o, 2), o.setRatio = Ae, o.e = e, o.pr = -10, o.data = r._tween, n = !0, o
            }
        }), u = "bezier,throwProps,physicsProps,physics2D".split(","), de = u.length; de--;) ve(u[de]);
        u = s.prototype, u._firstPT = null, u._onInitTween = function(t, e, a) {
            if (!t.nodeType) return !1;
            this._target = t, this._tween = a, this._vars = e, l = e.autoRound, n = !1, i = e.suffixMap || s.suffixMap, r = B(t, ""), o = this._overwriteProps;
            var u, p, d, m, g, v, y, _, w, b = t.style;
            if (c && "" === b.zIndex && (u = U(t, "zIndex", r), ("auto" === u || "" === u) && (b.zIndex = 0)), "string" == typeof e && (m = b.cssText, u = Z(t, r), b.cssText = m + ";" + e, u = G(t, u, Z(t)).difs, !z && x.test(e) && (u.opacity = parseFloat(RegExp.$1)), e = u, b.cssText = m), this._firstPT = p = this.parse(t, e, null), this._transformType) {
                for (w = 3 === this._transformType, _e ? h && (c = !0, "" === b.zIndex && (y = U(t, "zIndex", r), ("auto" === y || "" === y) && (b.zIndex = 0)), f && (b.WebkitBackfaceVisibility = this._vars.WebkitBackfaceVisibility || (w ? "visible" : "hidden"))) : b.zoom = 1, d = p; d && d._next;) d = d._next;
                _ = new pe(t, "transform", 0, 0, null, 2), this._linkCSSP(_, null, d), _.setRatio = w && be ? Ce : _e ? Pe : ke, _.data = this._transform || Te(t, r, !0), o.pop()
            }
            if (n) {
                for (; p;) {
                    for (v = p._next, d = m; d && d.pr > p.pr;) d = d._next;
                    (p._prev = d ? d._prev : g) ? p._prev._next = p : m = p, (p._next = d) ? d._prev = p : g = p, p = v
                }
                this._firstPT = m
            }
            return !0
        }, u.parse = function(t, e, n, o) {
            var s, u, c, h, p, f, d, m, g, v, y = t.style;
            for (s in e) f = e[s], u = a[s], u ? n = u.parse(t, f, s, this, n, o, e) : (p = U(t, s, r) + "", g = "string" == typeof f, "color" === s || "fill" === s || "stroke" === s || -1 !== s.indexOf("Color") || g && T.test(f) ? (g || (f = ae(f), f = (f.length > 3 ? "rgba(" : "rgb(") + f.join(",") + ")"), n = fe(y, s, p, f, !0, "transparent", n, 0, o)) : !g || -1 === f.indexOf(" ") && -1 === f.indexOf(",") ? (c = parseFloat(p), d = c || 0 === c ? p.substr((c + "").length) : "", ("" === p || "auto" === p) && ("width" === s || "height" === s ? (c = te(t, s, r), d = "px") : "left" === s || "top" === s ? (c = Q(t, s, r), d = "px") : (c = "opacity" !== s ? 0 : 1, d = "")), v = g && "=" === f.charAt(1), v ? (h = parseInt(f.charAt(0) + "1", 10), f = f.substr(2), h *= parseFloat(f), m = f.replace(_, "")) : (h = parseFloat(f), m = g ? f.substr((h + "").length) || "" : ""), "" === m && (m = i[s] || d), f = h || 0 === h ? (v ? h + c : h) + m : e[s], d !== m && "" !== m && (h || 0 === h) && (c || 0 === c) && (c = V(t, s, c, d), "%" === m ? (c /= V(t, s, 100, "%") / 100, c > 100 && (c = 100), e.strictUnits !== !0 && (p = c + "%")) : "em" === m ? c /= V(t, s, 1, "em") : (h = V(t, s, h, m), m = "px"), v && (h || 0 === h) && (f = h + c + m)), v && (h += c), !c && 0 !== c || !h && 0 !== h ? void 0 !== y[s] && (f || "NaN" != f + "" && null != f) ? (n = new pe(y, s, h || c || 0, 0, n, -1, s, !1, 0, p, f), n.xs0 = "none" !== f || "display" !== s && -1 === s.indexOf("Style") ? f : p) : H("invalid " + s + " tween value: " + e[s]) : (n = new pe(y, s, c, h - c, n, 0, s, l !== !1 && ("px" === m || "zIndex" === s), 0, p, f), n.xs0 = m)) : n = fe(y, s, p, f, !0, null, n, 0, o)), o && n && !n.plugin && (n.plugin = o);
            return n
        }, u.setRatio = function(t) {
            var e, n, i, r = this._firstPT,
                o = 1e-6;
            if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -1e-6)
                    for (; r;) {
                        if (e = r.c * t + r.s, r.r ? e = e > 0 ? 0 | e + .5 : 0 | e - .5 : o > e && e > -o && (e = 0), r.type)
                            if (1 === r.type)
                                if (i = r.l, 2 === i) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2;
                                else if (3 === i) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3;
                        else if (4 === i) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4;
                        else if (5 === i) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4 + r.xn4 + r.xs5;
                        else {
                            for (n = r.xs0 + e + r.xs1, i = 1; r.l > i; i++) n += r["xn" + i] + r["xs" + (i + 1)];
                            r.t[r.p] = n
                        } else -1 === r.type ? r.t[r.p] = r.xs0 : r.setRatio && r.setRatio(t);
                        else r.t[r.p] = e + r.xs0;
                        r = r._next
                    } else
                        for (; r;) 2 !== r.type ? r.t[r.p] = r.b : r.setRatio(t), r = r._next;
                else
                    for (; r;) 2 !== r.type ? r.t[r.p] = r.e : r.setRatio(t), r = r._next
        }, u._enableTransforms = function(t) {
            this._transformType = t || 3 === this._transformType ? 3 : 2, this._transform = this._transform || Te(this._target, r, !0)
        }, u._linkCSSP = function(t, e, n, i) {
            return t && (e && (e._prev = t), t._next && (t._next._prev = t._prev), t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next, i = !0), n ? n._next = t : i || null !== this._firstPT || (this._firstPT = t), t._next = e, t._prev = n), t
        }, u._kill = function(e) {
            var n, i, r, o = e;
            if (e.autoAlpha || e.alpha) {
                o = {};
                for (i in e) o[i] = e[i];
                o.opacity = 1, o.autoAlpha && (o.visibility = 1)
            }
            return e.className && (n = this._classNamePT) && (r = n.xfirst, r && r._prev ? this._linkCSSP(r._prev, n._next, r._prev._prev) : r === this._firstPT && (this._firstPT = n._next), n._next && this._linkCSSP(n._next, n._next._next, r._prev), this._classNamePT = null), t.prototype._kill.call(this, o)
        };
        var Ne = function(t, e, n) {
            var i, r, o, s;
            if (t.slice)
                for (r = t.length; --r > -1;) Ne(t[r], e, n);
            else
                for (i = t.childNodes, r = i.length; --r > -1;) o = i[r], s = o.type, o.style && (e.push(Z(o)), n && n.push(o)), 1 !== s && 9 !== s && 11 !== s || !o.childNodes.length || Ne(o, e, n)
        };
        return s.cascadeTo = function(t, n, i) {
            var r, o, s, a = e.to(t, n, i),
                u = [a],
                l = [],
                c = [],
                h = [],
                p = e._internals.reservedProps;
            for (t = a._targets || a.target, Ne(t, l, h), a.render(n, !0), Ne(t, c), a.render(0, !0), a._enabled(!0), r = h.length; --r > -1;)
                if (o = G(h[r], l[r], c[r]), o.firstMPT) {
                    o = o.difs;
                    for (s in i) p[s] && (o[s] = i[s]);
                    u.push(e.to(h[r], n, o))
                }
            return u
        }, t.activate([s]), s
    }, !0)
}), window._gsDefine && window._gsQueue.pop()(), (window._gsQueue || (window._gsQueue = [])).push(function() {
    "use strict";
    var t = document.documentElement,
        e = window,
        n = function(n, i) {
            var r = "x" === i ? "Width" : "Height",
                o = "scroll" + r,
                s = "client" + r,
                a = document.body;
            return n === e || n === t || n === a ? Math.max(t[o], a[o]) - (e["inner" + r] || Math.max(t[s], a[s])) : n[o] - n["offset" + r]
        }, i = window._gsDefine.plugin({
            propName: "scrollTo",
            API: 2,
            init: function(t, i, r) {
                return this._wdw = t === e, this._target = t, this._tween = r, "object" != typeof i && (i = {
                    y: i
                }), this._autoKill = i.autoKill !== !1, this.x = this.xPrev = this.getX(), this.y = this.yPrev = this.getY(), null != i.x ? this._addTween(this, "x", this.x, "max" === i.x ? n(t, "x") : i.x, "scrollTo_x", !0) : this.skipX = !0, null != i.y ? this._addTween(this, "y", this.y, "max" === i.y ? n(t, "y") : i.y, "scrollTo_y", !0) : this.skipY = !0, !0
            },
            set: function(t) {
                this._super.setRatio.call(this, t);
                var n = this._wdw || !this.skipX ? this.getX() : this.xPrev,
                    i = this._wdw || !this.skipY ? this.getY() : this.yPrev,
                    r = i - this.yPrev,
                    o = n - this.xPrev;
                this._autoKill && (!this.skipX && (o > 7 || -7 > o) && (this.skipX = !0), !this.skipY && (r > 7 || -7 > r) && (this.skipY = !0), this.skipX && this.skipY && this._tween.kill()), this._wdw ? e.scrollTo(this.skipX ? n : this.x, this.skipY ? i : this.y) : (this.skipY || (this._target.scrollTop = this.y), this.skipX || (this._target.scrollLeft = this.x)), this.xPrev = this.x, this.yPrev = this.y
            }
        }),
        r = i.prototype;
    i.max = n, r.getX = function() {
        return this._wdw ? null != e.pageXOffset ? e.pageXOffset : null != t.scrollLeft ? t.scrollLeft : document.body.scrollLeft : this._target.scrollLeft
    }, r.getY = function() {
        return this._wdw ? null != e.pageYOffset ? e.pageYOffset : null != t.scrollTop ? t.scrollTop : document.body.scrollTop : this._target.scrollTop
    }, r._kill = function(t) {
        return t.scrollTo_x && (this.skipX = !0), t.scrollTo_y && (this.skipY = !0), this._super._kill.call(this, t)
    }
}), window._gsDefine && window._gsQueue.pop()(), (window._gsQueue || (window._gsQueue = [])).push(function() {
    "use strict";
    window._gsDefine("easing.Back", ["easing.Ease"], function(t) {
        var e, n, i, r = window.GreenSockGlobals || window,
            o = r.com.greensock,
            s = 2 * Math.PI,
            a = Math.PI / 2,
            u = o._class,
            l = function(e, n) {
                var i = u("easing." + e, function() {}, !0),
                    r = i.prototype = new t;
                return r.constructor = i, r.getRatio = n, i
            }, c = t.register || function() {}, h = function(t, e, n, i) {
                var r = u("easing." + t, {
                    easeOut: new e,
                    easeIn: new n,
                    easeInOut: new i
                }, !0);
                return c(r, t), r
            }, p = function(t, e, n) {
                this.t = t, this.v = e, n && (this.next = n, n.prev = this, this.c = n.v - e, this.gap = n.t - t)
            }, f = function(e, n) {
                var i = u("easing." + e, function(t) {
                    this._p1 = t || 0 === t ? t : 1.70158, this._p2 = 1.525 * this._p1
                }, !0),
                    r = i.prototype = new t;
                return r.constructor = i, r.getRatio = n, r.config = function(t) {
                    return new i(t)
                }, i
            }, d = h("Back", f("BackOut", function(t) {
                return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1
            }), f("BackIn", function(t) {
                return t * t * ((this._p1 + 1) * t - this._p1)
            }), f("BackInOut", function(t) {
                return 1 > (t *= 2) ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2)
            })),
            m = u("easing.SlowMo", function(t, e, n) {
                e = e || 0 === e ? e : .7, null == t ? t = .7 : t > 1 && (t = 1), this._p = 1 !== t ? e : 0, this._p1 = (1 - t) / 2, this._p2 = t, this._p3 = this._p1 + this._p2, this._calcEnd = n === !0
            }, !0),
            g = m.prototype = new t;
        return g.constructor = m, g.getRatio = function(t) {
            var e = t + (.5 - t) * this._p;
            return this._p1 > t ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 - (t = (t - this._p3) / this._p1) * t : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : e
        }, m.ease = new m(.7, .7), g.config = m.config = function(t, e, n) {
            return new m(t, e, n)
        }, e = u("easing.SteppedEase", function(t) {
            t = t || 1, this._p1 = 1 / t, this._p2 = t + 1
        }, !0), g = e.prototype = new t, g.constructor = e, g.getRatio = function(t) {
            return 0 > t ? t = 0 : t >= 1 && (t = .999999999), (this._p2 * t >> 0) * this._p1
        }, g.config = e.config = function(t) {
            return new e(t)
        }, n = u("easing.RoughEase", function(e) {
            e = e || {};
            for (var n, i, r, o, s, a, u = e.taper || "none", l = [], c = 0, h = 0 | (e.points || 20), f = h, d = e.randomize !== !1, m = e.clamp === !0, g = e.template instanceof t ? e.template : null, v = "number" == typeof e.strength ? .4 * e.strength : .4; --f > -1;) n = d ? Math.random() : 1 / h * f, i = g ? g.getRatio(n) : n, "none" === u ? r = v : "out" === u ? (o = 1 - n, r = o * o * v) : "in" === u ? r = n * n * v : .5 > n ? (o = 2 * n, r = .5 * o * o * v) : (o = 2 * (1 - n), r = .5 * o * o * v), d ? i += Math.random() * r - .5 * r : f % 2 ? i += .5 * r : i -= .5 * r, m && (i > 1 ? i = 1 : 0 > i && (i = 0)), l[c++] = {
                x: n,
                y: i
            };
            for (l.sort(function(t, e) {
                return t.x - e.x
            }), a = new p(1, 1, null), f = h; --f > -1;) s = l[f], a = new p(s.x, s.y, a);
            this._prev = new p(0, 0, 0 !== a.t ? a : a.next)
        }, !0), g = n.prototype = new t, g.constructor = n, g.getRatio = function(t) {
            var e = this._prev;
            if (t > e.t) {
                for (; e.next && t >= e.t;) e = e.next;
                e = e.prev
            } else
                for (; e.prev && e.t >= t;) e = e.prev;
            return this._prev = e, e.v + (t - e.t) / e.gap * e.c
        }, g.config = function(t) {
            return new n(t)
        }, n.ease = new n, h("Bounce", l("BounceOut", function(t) {
            return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
        }), l("BounceIn", function(t) {
            return 1 / 2.75 > (t = 1 - t) ? 1 - 7.5625 * t * t : 2 / 2.75 > t ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : 2.5 / 2.75 > t ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
        }), l("BounceInOut", function(t) {
            var e = .5 > t;
            return t = e ? 1 - 2 * t : 2 * t - 1, t = 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375, e ? .5 * (1 - t) : .5 * t + .5
        })), h("Circ", l("CircOut", function(t) {
            return Math.sqrt(1 - (t -= 1) * t)
        }), l("CircIn", function(t) {
            return -(Math.sqrt(1 - t * t) - 1)
        }), l("CircInOut", function(t) {
            return 1 > (t *= 2) ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
        })), i = function(e, n, i) {
            var r = u("easing." + e, function(t, e) {
                this._p1 = t || 1, this._p2 = e || i, this._p3 = this._p2 / s * (Math.asin(1 / this._p1) || 0)
            }, !0),
                o = r.prototype = new t;
            return o.constructor = r, o.getRatio = n, o.config = function(t, e) {
                return new r(t, e)
            }, r
        }, h("Elastic", i("ElasticOut", function(t) {
            return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * s / this._p2) + 1
        }, .3), i("ElasticIn", function(t) {
            return -(this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * s / this._p2))
        }, .3), i("ElasticInOut", function(t) {
            return 1 > (t *= 2) ? -.5 * this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * s / this._p2) : .5 * this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * s / this._p2) + 1
        }, .45)), h("Expo", l("ExpoOut", function(t) {
            return 1 - Math.pow(2, -10 * t)
        }), l("ExpoIn", function(t) {
            return Math.pow(2, 10 * (t - 1)) - .001
        }), l("ExpoInOut", function(t) {
            return 1 > (t *= 2) ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
        })), h("Sine", l("SineOut", function(t) {
            return Math.sin(t * a)
        }), l("SineIn", function(t) {
            return -Math.cos(t * a) + 1
        }), l("SineInOut", function(t) {
            return -.5 * (Math.cos(Math.PI * t) - 1)
        })), u("easing.EaseLookup", {
            find: function(e) {
                return t.map[e]
            }
        }, !0), c(r.SlowMo, "SlowMo", "ease,"), c(n, "RoughEase", "ease,"), c(e, "SteppedEase", "ease,"), d
    }, !0)
}), window._gsDefine && window._gsQueue.pop()();
var APP = {};
APP.CORE = {}, APP.TOOLS = {}, APP.COMPONENTS = {},
function() {
    for (var t = 0, e = ["webkit", "moz"], n = 0; n < e.length && !window.requestAnimationFrame; ++n) window.requestAnimationFrame = window[e[n] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[e[n] + "CancelAnimationFrame"] || window[e[n] + "CancelRequestAnimationFrame"];
    window.requestAnimationFrame || (window.requestAnimationFrame = function(e) {
        var n = (new Date).getTime(),
            i = Math.max(0, 16 - (n - t)),
            r = window.setTimeout(function() {
                e(n + i)
            }, i);
        return t = n + i, r
    }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(t) {
        clearTimeout(t)
    })
}(), Array.prototype.indexOf || (Array.prototype.indexOf = function(t, e) {
    var n;
    if (null == this) throw new TypeError('"this" is null or not defined');
    var i = Object(this),
        r = i.length >>> 0;
    if (0 === r) return -1;
    var o = +e || 0;
    if (1 / 0 === Math.abs(o) && (o = 0), o >= r) return -1;
    for (n = Math.max(o >= 0 ? o : r - Math.abs(o), 0); r > n;) {
        if (n in i && i[n] === t) return n;
        n++
    }
    return -1
}), Object.keys || (Object.keys = function() {
    "use strict";
    var t = Object.prototype.hasOwnProperty,
        e = !{
            toString: null
        }.propertyIsEnumerable("toString"),
        n = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
        i = n.length;
    return function(r) {
        if ("object" != typeof r && ("function" != typeof r || null === r)) throw new TypeError("Object.keys called on non-object");
        var o, s, a = [];
        for (o in r) t.call(r, o) && a.push(o);
        if (e)
            for (s = 0; i > s; s++) t.call(r, n[s]) && a.push(n[s]);
        return a
    }
}()),
function() {
    "use strict";
    APP.CORE.Abstract = Class.extend({
        options: {},
        init: function(t) {
            "undefined" == typeof t && (t = {}), this.$ = {}, this.options = merge(this.options, t)
        },
        start: function() {},
        ignite: function() {
            return this.start()
        },
        destroy: function() {}
    })
}(),
function() {
    "use strict";
    APP.CORE.Event_Emitter = APP.CORE.Abstract.extend({
        options: {},
        init: function(t) {
            this._super(t), this.callbacks = {}, this.callbacks.base = {}
        },
        on: function(t, e) {
            if ("undefined" == typeof t || "" === t) return console.warn("Wrong name"), !1;
            if ("undefined" == typeof e) return console.warn("Wrong action"), !1;
            var n = this,
                i = [];
            return t = t.replace(/[^a-zA-Z0-9 ,\/.]/g, ""), t = t.replace(/[,\/]+/g, " "), i = t.split(" "), i.forEach(function(t) {
                t = n.resolve_name(t), n.callbacks[t.tag] instanceof Object || (n.callbacks[t.tag] = {}), n.callbacks[t.tag][t.value] instanceof Array || (n.callbacks[t.tag][t.value] = []), n.callbacks[t.tag][t.value].push(e)
            }), this
        },
        off: function(t) {
            if ("undefined" == typeof t || "" === t) return console.warn("Wrong name"), !1;
            var e = this,
                n = [];
            return t = t.replace(/[^a-zA-Z0-9 ,\/.]/g, ""), t = t.replace(/[,\/]+/g, " "), n = t.split(" "), n.forEach(function(t) {
                if (t = e.resolve_name(t), "base" !== t.tag && "" === t.value) delete e.callbacks[t.tag];
                else if ("base" === t.tag)
                    for (var n in e.callbacks) e.callbacks[n] instanceof Object && e.callbacks[n][t.value] instanceof Array && (delete e.callbacks[n][t.value], 0 === Object.keys(e.callbacks[n]).length && delete e.callbacks[n]);
                else e.callbacks[t.tag] instanceof Object && e.callbacks[t.tag][t.value] instanceof Array && (delete e.callbacks[t.tag][t.value], 0 === Object.keys(e.callbacks[t.tag]).length && delete e.callbacks[t.tag])
            }), this
        },
        trigger: function(t, e) {
            if ("undefined" == typeof t || "" === t) return console.warn("Wrong name"), !1;
            var n = this,
                i = void 0,
                r = void 0;
            if (e instanceof Array || (e = []), t = n.resolve_name(t), t.value = t.value.replace(/[^a-zA-Z0-9 ,\/.]/g, ""), t.value = t.value.replace(/[,\/]+/g, " "), "base" === t.tag)
                for (var o in n.callbacks) n.callbacks[o] instanceof Object && n.callbacks[o][t.value] instanceof Array && n.callbacks[o][t.value].forEach(function(t) {
                    r = t.apply(n, e), "undefined" == typeof i && (i = r)
                });
            else if (this.callbacks[t.tag] instanceof Object) {
                if ("" === t.value) return console.warn("Wrong name"), this;
                n.callbacks[t.tag][t.value].forEach(function(t) {
                    r = t.apply(n, e), "undefined" == typeof i && (i = r)
                })
            }
            return i
        },
        trigga: function(t, e) {
            return this.trigger(t, e)
        },
        clean_name: function(t) {
            return t = t.toLowerCase(), t = t.replace("-", "_")
        },
        resolve_name: function(t) {
            var e = {}, n = t.split(".");
            return e.original = t, e.value = n[0], e.tag = "base", n.length > 1 && "" !== n[1] && (e.tag = n[1]), e
        }
    })
}(),
function() {
    "use strict";
    APP.CORE.App = APP.CORE.Abstract.extend({
        options: {
            page: "home"
        },
        init: function(t) {
            this._super(t), this.page = null, this.can_navigate = !0, this.ticker = new APP.TOOLS.Ticker, this.browser = new APP.TOOLS.Browser({
                initial_triggers: ["resize"]
            }), this.css = new APP.TOOLS.Css, this.mouse = new APP.TOOLS.Mouse, this.keyboard = new APP.TOOLS.Keyboard, this.navigation = new APP.TOOLS.Navigation, this.$.title = $("head title"), this.init_password(), this.init_page(this.options.page), this.init_ajax(), this.init_columns(), this.init_lines(), this.init_header(), this.init_keyboard(), this.init_hammer(), this.update_images()
        },
        start: function() {
            this.browser.start(), this.ticker.start(!0)
        },
        init_hammer: function() {
            var t = this,
                e = new Hammer(document.body);
            e.on("swipe", function(e) {
                var n = t.index;
                "home" === t.page.type ? (0 === window.orientation || 180 === window.orientation) && e.direction === Hammer.DIRECTION_RIGHT || (-90 === window.orientation || 90 === window.orientation) && e.direction === Hammer.DIRECTION_DOWN ? t.go_to_line(n - 1) : ((0 === window.orientation || 180 === window.orientation) && e.direction === Hammer.DIRECTION_LEFT || (-90 === window.orientation || 90 === window.orientation) && e.direction === Hammer.DIRECTION_UP) && t.go_to_line(n + 1) : "project" === t.page.type && (e.direction === Hammer.DIRECTION_UP ? t.go_to_line(n + 1) : e.direction === Hammer.DIRECTION_DOWN && t.go_to_line(n - 1))
            }), this.browser.on("breakpoint", function(t) {
                e.get("swipe").set("small" === t.name ? {
                    direction: Hammer.DIRECTION_ALL,
                    enable: !1
                } : {
                    direction: Hammer.DIRECTION_ALL
                })
            })
        },
        init_keyboard: function() {
            var t = this;
            this.keyboard.on("down", function(e, n) {
                switch (n) {
                    case "down":
                    case "j":
                        t.go_to_line(t.index + 1);
                        break;
                    case "esc":
                        t.header.active ? t.header.deactivate() : "project" === t.page.type && t.page.$.main.find("a.close").first().trigger("click");
                        break;
                    case "up":
                    case "k":
                        t.go_to_line(t.index - 1);
                        break;
                    case "space":
                    case "enter":
                    case "right":
                        if (t.can_navigate && "home" === t.page.type && !t.password.active) {
                            var i = t.$.lines.filter(".current");
                            i.length && i.hasClass("project") && i.find("a").first().trigger("click")
                        }
                        break;
                    case "left":
                        t.can_navigate && "project" === t.page.type && t.page.$.main.find("a.close").first().trigger("click")
                }
                return -1 !== ["down", "j", "esc", "up", "k", "space", "right", "left"].indexOf(n) || "enter" === n && !t.password.active ? !1 : void 0
            })
        },
        init_page: function(t) {
            var e = this,
                n = null;
            switch (t) {
                case "home":
                    n = new APP.COMPONENTS.Home;
                    break;
                case "project":
                    n = new APP.COMPONENTS.Project;
                    break;
                case "password":
                    this.password.activate()
            }
            n && n.on("gotoline", function(t) {
                e.go_to_line(t)
            }), this.page = n, FastClick.attach(document.body)
        },
        init_password: function() {
            var t = this;
            this.password = new APP.COMPONENTS.Password, this.password.on("ok", function(e, n) {
                e = e || window.location, n = n || "from-right", t.load(e, n)
            })
        },
        init_header: function() {
            var t = this;
            this.header = new APP.COMPONENTS.Header, this.header.on("project-click", function(e, n) {
                t.load(e, n)
            }), this.header.on("activate", function() {
                t.can_scroll = !1
            }), this.header.on("deactivate", function() {
                t.can_scroll = !0
            })
        },
        init_ajax: function() {
            var t = this;
            this.ajax = {}, this.ajax.$links = $(), this.ajax.instance = null, this.update_ajax(), t.navigation.on("pop", function(e, n) {
                t.load(n, "backward" === e.direction ? "from-left" : "from-right", !0)
            })
        },
        update_ajax: function(t) {
            var e = this;
            t = t || $("body"), this.ajax.$links.off("click.ajax"), this.ajax.$links = t.find("a.ajax"), this.ajax.$links.on("click.ajax", function() {
                if (!e.ajax.instance) {
                    var t = $(this);
                    e.load(t.attr("href"), t.data("direction"))
                }
                return !1
            })
        },
        update_images: function(t) {
            t = t || $("body");
            var e = t.find(".to-load:not(.loaded)");
            e.each(function() {
                var t = $(this),
                    e = $("<span />"),
                    n = t.data("image-url"),
                    i = new Image;
                t.append(e), i.onload = function() {
                    window.setTimeout(function() {
                        e.css({
                            backgroundImage: "url(" + n + ")"
                        }), t.addClass("loaded")
                    }, 30)
                }, i.src = n
            })
        },
        load: function(t, e, n) {
            var i = this;
            if (this.header.active && this.header.deactivate(), t === window.location.href && !n) return ("home" === this.page.type || "project" === this.page.type) && this.go_to_line(0), !1;
            this.can_navigate = !1, e = e || "from-right";
            var r = $('<div class="column">');
            r.css({
                left: "from-right" === e ? "100%" : "-100%"
            });
            var o = Q.defer();
            this.ajax.instance = $.ajax({
                url: t,
                success: function(t) {
                    i.ajax.instance = null, o.resolve(t)
                },
                error: function(n) {
                    i.ajax.instance = null, 403 === n.status && i.password.activate(t, e), o.resolve("error")
                }
            }), Q.allSettled([o.promise]).then(function(o) {
                o = o[0].value, "error" !== o ? (i.$.columns.addClass("animated"), window.setTimeout(function() {
                    r.append(o), i.$.columns.append(r), i.update_ajax(), i.update_images(r), i.page && (i.page.active = !1);
                    var s = r.find("input[type=text].title").val();
                    document.title = s, n || i.navigation.push({
                        title: s
                    }, t);
                    var a = r.find("input[type=text].page").val();
                    if (i.init_page(a), i.$.lines = r.find(".line"), window.location.hash) {
                        var u = i.$.lines.filter(".line-" + window.location.hash.replace("#", ""));
                        if (u.length) {
                            var l = u.index();
                            window.location.hash = "", i.go_to_line(l)
                        }
                    } else i.go_to_line(n && i.navigation.history.state.line ? i.navigation.history.state.line : 0);
                    i.$.columns.css({
                        transform: "translateX( " + ("from-right" === e ? "-100%" : "100%") + " ) translateZ(0)"
                    }), window.setTimeout(function() {
                        i.$.columns.removeClass("animated"), i.$.columns.css({
                            transform: "translateX( 0 ) translateZ(0)"
                        }), r.css({
                            left: 0
                        }), i.$.columns.find(".column").not(r).remove(), i.can_navigate = !0
                    }, 1050)
                }, 30)) : console.log("error")
            })
        },
        init_columns: function() {
            this.$.columns = $(".columns")
        },
        init_lines: function() {
            var t = this;
            if (this.can_scroll = !0, this.$.lines = $(".line"), this.index = 0, window.location.hash) {
                var e = this.$.lines.filter(".line-" + window.location.hash.replace("#", ""));
                e.length && (this.index = e.index(), window.location.hash = "")
            }
            this.go_to_line(this.index, 30), this.mouse.on("wheel", function(e) {
                var n = t.index + (0 > e ? 1 : -1);
                t.go_to_line(n)
            })
        },
        go_to_line: function(t, e) {
            if (e = e || 1060, !(!this.can_scroll || 0 > t || t > this.$.lines.length - 1)) {
                var n = this,
                    i = n.index < t ? "down" : "up";
                this.navigation.update_state({
                    line: t
                }), this.can_scroll = !1, this.$.lines.show(), window.setTimeout(function() {
                    n.$.lines.removeClass("before current after going-down going-up");
                    var r = 0;
                    n.$.lines.each(function() {
                        var e = $(this),
                            n = null;
                        t > r ? n = "before" : r > t ? n = "after" : (n = "current", e.hasClass("dark") ? $("body").addClass("dark") : $("body").removeClass("dark")), n += "down" === i ? " going-up" : " going-down", e.addClass(n), r++
                    }), window.setTimeout(function() {
                        n.$.lines.filter(":not(.current)").hide(), n.can_scroll = !0
                    }, e), n.page && n.page.active && n.page.update_line(t, n.$.lines.length, i), n.index = t
                }, 60)
            }
        }
    })
}(),
function() {
    "use strict";
    APP.COMPONENTS.Header = APP.CORE.Event_Emitter.extend({
        options: {},
        init: function(t) {
            this._super(t), this.active = !1, this.timeout = null, this.$.main = $("header"), this.$.main_title = $("a.main-title"), this.$.toggle = $("a.toggle-header"), this.$.left = this.$.main.find(".left"), this.$.right = this.$.main.find(".right"), this.$.projects = this.$.main.find("a.project"), this.$.button_contact = this.$.main.find("a.contact"), this.$.button_projects = this.$.main.find("a.projects"), this.init_events(), this.init_scrollbar()
        },
        init_events: function() {
            var t = this;
            this.$.toggle.on("click", function() {
                return t.toggle(), !1
            }), this.$.projects.on("click", function() {
                var e = $(this);
                return t.deactivate(), t.trigger("project-click", [e.attr("href"), e.data("direction")]), !1
            }), this.$.button_contact.on("click", function() {
                return t.$.button_contact.addClass("active"), t.$.button_projects.removeClass("active"), t.$.left.removeClass("hidden"), t.$.right.addClass("hidden"), !1
            }), this.$.button_projects.on("click", function() {
                return t.$.button_contact.removeClass("active"), t.$.button_projects.addClass("active"), t.$.left.addClass("hidden"), t.$.right.removeClass("hidden"), !1
            })
        },
        init_scrollbar: function() {
            this.scrollbar = {}, this.scrollbar.timeout = null, this.scrollbar.instance = null, this.$.right.tinyscrollbar(), this.scrollbar.instance = this.$.right.data("plugin_tinyscrollbar"), this.$.right.bind("move", function() {})
        },
        toggle: function() {
            this.active ? this.deactivate() : this.activate()
        },
        activate: function() {
            var t = this;
            this.$.main.css({
                display: "block"
            }), this.timeout = window.setTimeout(function() {
                t.$.main.addClass("active"), t.scrollbar.instance.update()
            }, 100), this.active = !0, this.trigger("activate")
        },
        deactivate: function() {
            var t = this;
            this.$.main.removeClass("active"), this.timeout = window.setTimeout(function() {
                t.$.main.css({
                    display: "none"
                })
            }, 500), this.active = !1, this.trigger("deactivate")
        },
        start: function() {}
    })
}(),
function() {
    "use strict";
    APP.COMPONENTS.Password = APP.CORE.Event_Emitter.extend({
        options: {},
        init: function(t) {
            this._super(t), this.active = !1, this.ajax = null, this.saved = {}, this.saved.url = null, this.saved.direction = null, this.$.main = $(".password"), this.$.close = this.$.main.find(".close"), this.$.form = this.$.main.find("form"), this.$.input = this.$.form.find("input[type=password]"), this.init_events()
        },
        init_events: function() {
            var t = this;
            this.$.close.on("click", function() {
                return t.saved.url ? t.deactivate() : (t.trigger("ok", ["http://nicolas-bussiere.dev/", "from-right"]), t.deactivate()), !1
            }), this.$.form.on("submit", function() {
                return null === t.ajax && (t.ajax = $.ajax({
                    url: t.$.form.attr("action"),
                    data: t.$.form.serialize(),
                    type: "post",
                    success: function(e) {
                        "ok" === e ? (t.trigger("ok", [t.saved.url, t.saved.direction]), t.$.input.blur(), t.deactivate()) : window.setTimeout(function() {
                            t.$.input.addClass("error")
                        }, 200), t.ajax = null
                    },
                    error: function() {
                        t.ajax = null, console.log("error")
                    }
                })), !1
            }), this.$.input.on("keyup", function() {
                t.$.input.removeClass("error")
            })
        },
        toggle: function() {
            this.active ? this.deactivate() : this.activate()
        },
        activate: function(t, e) {
            var n = this;
            this.saved.url = t, this.saved.direction = e, this.$.main.css({
                display: "block"
            }), this.timeout = window.setTimeout(function() {
                n.$.main.addClass("active")
            }, 100), this.active = !0, this.trigger("activate")
        },
        deactivate: function() {
            var t = this;
            this.active = !1, this.$.main.removeClass("active"), this.timeout = window.setTimeout(function() {
                t.$.main.css({
                    display: "none"
                })
            }, 500), this.trigger("deactivate")
        },
        start: function() {}
    })
}(),
function() {
    "use strict";
    APP.COMPONENTS.Home = APP.CORE.Event_Emitter.extend({
        options: {},
        init: function(t) {
            this._super(t), this.browser = new APP.TOOLS.Browser, this.navigation = new APP.TOOLS.Navigation, this.type = "home", this.active = !0, this.updates_count = 0, this.$.main = $(".page.home"), this.$.projects = this.$.main.find(".line.project"), this.$.list = this.$.main.find(".projects-list"), this.$.list_items = this.$.list.find("a"), this.$.to_top = this.$.main.find("a.to-top"), this.$.illustrations_container = this.$.main.find(".illustrations-container"), this.$.illustrations = this.$.main.find(".illustrations"), this.$.illustrations_items = this.$.illustrations_container.find(".illustration"), this.wave = {}, this.wave.timeout = null, this.wave.interval = null, this.$.illustrations_container.removeClass("hidden"), this.init_events()
        },
        init_events: function() {
            var t = this;
            this.$.illustrations_container.on("click mouseenter mouseleave", function(e) {
                var n = t.$.projects.filter(".current");
                if (n.length) switch (e.type) {
                    case "click":
                        n.find("a").trigger("click");
                        break;
                    case "mouseenter":
                        n.find("a").addClass("hover");
                        break;
                    case "mouseleave":
                        n.find("a").removeClass("hover")
                }
                return !1
            }), this.$.projects.each(function() {
                var e = $(this),
                    n = e.index();
                e.find(".left a").on("mouseenter mouseleave", function(e) {
                    "mouseenter" === e.type ? t.$.illustrations_items.eq(n).addClass("hover") : t.$.illustrations_items.eq(n).removeClass("hover")
                })
            }), this.$.list_items.on("click", function() {
                return t.trigger("gotoline", [$(this).index()]), !1
            }), this.$.to_top.on("click", function() {
                return t.trigger("gotoline", [0]), !1
            }), window.addEventListener("orientationchange", function() {
                var e = t.$.projects.filter(".current");
                if (e.length) {
                    var n = e.index(),
                        i = 100 * -n;
                    t.$.illustrations.removeClass("animated"), window.setTimeout(function() {
                        t.$.illustrations.addClass("animated")
                    }, 100);
                    var r = t.browser.match_media("(max-width:900px)");
                    t.$.illustrations.css({
                        transform: r ? "translateX( " + i + "% ) translateZ(0)" : "translateY( " + i + "% ) translateZ(0)"
                    }), t.$.illustrations_container.removeClass("hidden")
                }
            }, !1)
        },
        update_line: function(t) {
            var e = this;
            if (this.wave.timeout && window.clearTimeout(this.wave.timeout), this.wave.interval && window.clearInterval(this.wave.interval), 0 === t && (this.wave.count++, this.wave.timeout = window.setTimeout(function() {
                e.play_wave(), e.wave.interval = window.setInterval(function() {
                    e.play_wave()
                }, 5e3)
            }, 2e3)), t < this.$.projects.length) {
                var n = 100 * -t;
                0 === this.updates_count && (this.$.illustrations.removeClass("animated"), window.setTimeout(function() {
                    e.$.illustrations.addClass("animated")
                }, 100));
                var i = this.browser.match_media("(max-width:900px)");
                this.$.illustrations.css({
                    transform: i ? "translateX( " + n + "% ) translateZ(0)" : "translateY( " + n + "% ) translateZ(0)"
                }), this.$.illustrations_container.removeClass("hidden")
            } else this.$.illustrations_container.addClass("hidden");
            this.$.list_items.removeClass("active"), this.$.list_items.eq(t).addClass("active"), this.updates_count++
        },
        play_wave: function() {
            var t = this;
            this.$.list.removeClass("wave"), window.setTimeout(function() {
                t.$.list.addClass("wave")
            }, 30)
        }
    })
}(),
function() {
    "use strict";
    APP.COMPONENTS.Project = APP.CORE.Event_Emitter.extend({
        options: {},
        init: function(t) {
            this._super(t), this.browser = new APP.TOOLS.Browser, this.type = "project", this.active = !0, this.$.main = $(".page.project"), this.$.links = this.$.main.find(".links"), this.$.to_top = this.$.links.find(".to-top"), this.$.to_down = this.$.main.find(".intro .arrow"), this.$.lines = this.$.main.find(".line"), this.$.lines_resize = this.$.lines.not(".line-to-screen-size"), this.resize(), this.init_events()
        },
        init_events: function() {
            var t = this;
            this.$.to_top.on("click", function() {
                return t.trigger("gotoline", [0]), !1
            }), this.$.to_down.on("click", function() {
                return t.trigger("gotoline", [1]), !1
            }), this.browser.on("resize", function() {
                t.resize()
            })
        },
        resize: function() {
            if (this.browser.width < 900) {
                var t = this.$.main.width(),
                    e = t,
                    n = e / 1.8 + 120;
                this.$.lines_resize.css({
                    height: Math.round(n),
                    top: "50%",
                    marginTop: Math.round(-n / 2)
                })
            } else this.$.lines_resize.css({
                height: "100%",
                top: 0,
                marginTop: 0
            })
        },
        update_line: function(t) {
            t > 0 ? this.$.to_top.removeClass("hidden") : this.$.to_top.addClass("hidden")
        }
    })
}(),
function() {
    "use strict";
    APP.TOOLS.Mouse = APP.CORE.Event_Emitter.extend({
        staticInstantiate: function() {
            return null === APP.TOOLS.Mouse.prototype.instance ? null : APP.TOOLS.Mouse.prototype.instance
        },
        init: function(t) {
            this._super(t), this.ticker = new APP.TOOLS.Ticker, this.browser = new APP.TOOLS.Browser, this.shall_trigger = {}, this.down = !1, this.x = 0, this.y = 0, this.ratio = {}, this.ratio.x = 0, this.ratio.y = 0, this.wheel = {}, this.wheel.delta = 0, this.init_events(), APP.TOOLS.Mouse.prototype.instance = this
        },
        init_events: function() {
            var t = this;
            this.ticker.on("tick", function() {
                t.frame()
            }), window.onmousedown = function(e) {
                t.down = !0, t.trigger("down", [e.target])
            }, window.onmouseup = function(e) {
                t.down = !1, t.trigger("up", [e.target])
            }, window.onmousemove = function(e) {
                t.x = e.clientX, t.y = e.clientY, t.ratio.x = t.x / t.browser.width, t.ratio.y = t.y / t.browser.height, t.trigger("move", [e.target])
            };
            var e = function(e) {
                return t.wheel.delta = e.wheelDeltaY || e.wheelDelta || -e.detail, t.trigger("wheel", [t.wheel.delta]) === !1 ? (e.preventDefault(), !1) : void 0
            };
            document.addEventListener("mousewheel", e, !1), document.addEventListener("DOMMouseScroll", e, !1)
        },
        frame: function() {
            for (var t = Object.keys(this.shall_trigger), e = 0; e < t.length; e++) this.trigger(t[e], [this.shall_trigger[t[e]]]);
            t.length && (this.shall_trigger = {})
        }
    })
}(),
function() {
    "use strict";
    APP.TOOLS.Keyboard = APP.CORE.Event_Emitter.extend({
        options: {
            keycode_names: {
                91: "cmd",
                17: "ctrl",
                32: "space",
                16: "shift",
                18: "alt",
                20: "caps",
                9: "tab",
                13: "enter",
                8: "backspace",
                38: "up",
                39: "right",
                40: "down",
                37: "left",
                27: "esc"
            }
        },
        static_instantiate: function() {
            return null === APP.TOOLS.Keyboard.prototype.instance ? null : APP.TOOLS.Keyboard.prototype.instance
        },
        init: function(t) {
            this._super(t), this.browser = new APP.TOOLS.Browser, this.downs = [], this.init_events(), APP.TOOLS.Keyboard.prototype.instance = this
        },
        init_events: function() {
            var t = this;
            window.onkeydown = function(e) {
                var n = t.keycode_to_character(e.keyCode); - 1 === t.downs.indexOf(n) && t.downs.push(n), t.trigger("down", [e.keyCode, n]) === !1 && e.preventDefault()
            }, window.onkeyup = function(e) {
                var n = t.keycode_to_character(e.keyCode); - 1 !== t.downs.indexOf(n) && t.downs.splice(t.downs.indexOf(n), 1), t.trigger("up", [e.keyCode, n])
            }
        },
        keycode_to_character: function(t) {
            var e = this.options.keycode_names[t];
            return e || (e = String.fromCharCode(t).toLowerCase()), e
        },
        are_down: function(t) {
            for (var e = !0, n = 0; n < t.length; n++) {
                var i = t[n];
                "number" == typeof i && (i = this.keycode_to_character(i)), -1 === this.downs.indexOf(i) && (e = !1)
            }
            return e
        },
        is_down: function(t) {
            return this.are_down([t])
        }
    })
}(),
function() {
    "use strict";
    APP.TOOLS.Browser = APP.CORE.Event_Emitter.extend({
        options: {
            disable_hover_on_scroll: !1,
            disable_hover_on_scroll_duration: 300,
            add_classes_to: ["body"],
            listen_to: ["resize", "scroll"],
            breakpoints: [{
                name: "large",
                limits: {
                    width: {
                        value: 900,
                        extreme: "min",
                        included: !1
                    }
                }
            }, {
                name: "medium",
                limits: {
                    width: {
                        value: 900,
                        extreme: "max",
                        included: !0
                    }
                }
            }, {
                name: "small",
                limits: {
                    width: {
                        value: 540,
                        extreme: "max",
                        included: !0
                    }
                }
            }]
        },
        staticInstantiate: function() {
            return null === APP.TOOLS.Browser.prototype.instance ? null : APP.TOOLS.Browser.prototype.instance
        },
        init: function(t) {
            this._super(t), this.ticker = new APP.TOOLS.Ticker, this.top = 0, this.left = 0, this.direction = {}, this.direction.x = null, this.direction.y = null, this.mouse = {}, this.mouse.x = 0, this.mouse.y = 0, this.mouse.ratio = {}, this.mouse.ratio.x = 0, this.mouse.ratio.y = 0, this.is = null, this.version = null, this.mobile = this.mobile_detection(), this.window = $(window), this.width = this.window.width(), this.height = this.window.height(), this.pixel_ratio = window.devicePixelRatio || 1, this.shall_trigger = {}, this.set_browser(), this.set_browser_version(), this.listening_to = {}, this.listening_to.resize = -1 !== this.options.listen_to.indexOf("resize"), this.listening_to.scroll = -1 !== this.options.listen_to.indexOf("scroll"), this.init_events(), this.init_breakpoints(), this.options.add_classes_to.length && this.add_classes(), this.options.disable_hover_on_scroll && this.disable_hover_on_scroll(), APP.TOOLS.Browser.prototype.instance = this
        },
        start: function() {
            this.listening_to.scroll && this.window.trigger("scroll"), this.listening_to.resize && this.window.trigger("resize")
        },
        init_breakpoints: function() {
            this.breakpoints = {}, this.breakpoints.items = [], this.breakpoints.current = null, this.add_breakpoints(this.options.breakpoints)
        },
        add_breakpoint: function(t) {
            this.breakpoints.items.push(t)
        },
        add_breakpoints: function(t) {
            for (var e = 0; e < t.length; e++) this.add_breakpoint(t[e])
        },
        test_breakpoints: function() {
            for (var t = null, e = 0, n = this.breakpoints.items.length; n > e; e++) {
                var i = this.breakpoints.items[e],
                    r = !i.limits.width,
                    o = !i.limits.height;
                r || ("min" === i.limits.width.extreme ? (i.limits.width.included && this.width >= i.limits.width.value || !i.limits.width.included && this.width > i.limits.width.value) && (r = !0) : (i.limits.width.included && this.width <= i.limits.width.value || !i.limits.width.included && this.width < i.limits.width.value) && (r = !0)), o || ("min" === i.limits.height.extreme ? (i.limits.height.included && this.height >= i.limits.height.value || !i.limits.height.included && this.height > i.limits.height.value) && (o = !0) : (i.limits.height.included && this.height <= i.limits.height.value || !i.limits.height.included && this.height < i.limits.height.value) && (o = !0)), r && o && (t = i)
            }
            if (t !== this.breakpoints.current) {
                var s = this.breakpoints.current;
                this.breakpoints.current = t, this.shall_trigger.breakpoint = [this.breakpoints.current, s]
            }
        },
        disable_hover_on_scroll: function() {
            var t = this,
                e = $("body");
            this.body = document.body, this.timer = null;
            var n = function() {
                clearTimeout(t.timer), e.hasClass("disable-hover") || e.addClass("disable-hover"), t.timer = setTimeout(function() {
                    e.removeClass("disable-hover")
                }, t.options.disable_hover_on_scroll_duration)
            };
            window.addEventListener ? window.addEventListener("scroll", n, !1) : window.attachEvent("scroll", n, !1)
        },
        set_browser: function() {
            var t = {}, e = navigator.userAgent.toLowerCase();
            t.opera = !! window.opera || navigator.userAgent.indexOf(" OPR/") >= 0, t.firefox = "undefined" != typeof InstallTrigger, t.safari = Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor") > 0, t.chrome = !! window.chrome && !t.opera, t.internet_explorer = -1 !== e.indexOf("msie") && -1 === e.indexOf("opera"), t.ipad = -1 !== e.indexOf("ipad"), t.O = t.opera, t.FF = t.firefox, t.SAF = t.safari, t.CH = t.chrome, t.IE = t.internet_explorer, t.MSIE = t.internet_explorer, t.IPAD = t.ipad, this.is = t
        },
        set_browser_version: function() {
            if (this.version = !1, this.is.IE) {
                var t = navigator.userAgent.toLowerCase();
                this.version = -1 !== t.indexOf("msie") ? parseInt(t.split("msie")[1], 10) : !1, this.is["internet_explorer_" + this.version] = !0, this.is["IE_" + this.version] = !0
            }
        },
        mobile_detection: function() {
            var t = {};
            return t.iphone = navigator.userAgent.match(/(iPhone|iPod|iPad)/), t.blackberry = navigator.userAgent.match(/BlackBerry/), t.android = navigator.userAgent.match(/Android/), t.opera = navigator.userAgent.match(/Opera Mini/i), t.windows = navigator.userAgent.match(/IEMobile/i), t.all = t.iphone || t.blackberry || t.android || t.opera || t.windows, t
        },
        add_classes: function() {
            for (var t = null, e = 0, n = this.options.add_classes_to.length; n > e; e++)
                if (t = $(this.options.add_classes_to[e]), t.length)
                    for (var i in this.is) this.is[i] && (t.addClass(i), this.is.IE && this.version && t.addClass(i + "-" + this.version))
        },
        init_events: function() {
            var t = this;
            this.ticker.on("tick", function() {
                t.frame()
            }), this.listening_to.scroll && this.window.on("scroll touchmove", function() {
                t.is.IE && "CSS1Compat" === document.compatMode ? (t.direction.y = window.document.documentElement.scrollTop > t.top ? "down" : "up", t.direction.x = window.document.documentElement.scrollLeft > t.top ? "right" : "left", t.top = window.document.documentElement.scrollTop, t.left = window.document.documentElement.scrollLeft) : (t.direction.y = window.pageYOffset > t.top ? "down" : "up", t.direction.x = window.pageXOffset > t.top ? "right" : "left", t.top = window.pageYOffset, t.left = window.pageXOffset), t.shall_trigger.scroll = [t.top, t.left]
            }), this.listening_to.resize && this.window.on("resize", function() {
                t.width = window.innerWidth, t.height = window.innerHeight, t.test_breakpoints(), t.shall_trigger.resize = [t.width, t.height]
            })
        },
        match_media: function(t) {
            return "matchMedia" in window && "string" == typeof t && "" !== t ? !! window.matchMedia(t).matches : !1
        },
        frame: function() {
            for (var t = Object.keys(this.shall_trigger), e = 0; e < t.length; e++) this.trigger(t[e], this.shall_trigger[t[e]]);
            t.length && (this.shall_trigger = {})
        }
    })
}(),
function() {
    "use strict";
    APP.TOOLS.Css = APP.CORE.Abstract.extend({
        staticInstantiate: function() {
            return null === APP.TOOLS.Css.prototype.instance ? null : APP.TOOLS.Css.prototype.instance
        },
        init: function(t) {
            this._super(t), this.prefixes = ["webkit", "moz", "o", "ms", ""], this.browser = new APP.TOOLS.Browser, APP.TOOLS.Css.prototype.instance = this
        },
        apply: function(t, e, n) {
            ("undefined" == typeof e || "" === e) && console.warn("Wrong property"), ("undefined" == typeof n || "" === n) && console.warn("Wrong value"), "undefined" != typeof t && t.length || console.warn("Wrong target"), this.browser.is.IE && this.browser.version < 10 && (n = n.replace("translateZ(0)", ""));
            for (var i = {}, r = 0, o = this.prefixes.length; o > r; r++) {
                var s = this.prefixes[r];
                "" !== s ? s += this.capitalize_first_letter(e) : s = e, i[s] = n
            }
            t.each(function() {
                for (var t = Object.keys(i), e = 0, n = t.length; n > e; e++) this.style[t[e]] = i[t[e]]
            })
        },
        capitalize_first_letter: function(t) {
            return t.charAt(0).toUpperCase() + t.slice(1)
        }
    })
}(),
function() {
    "use strict";
    APP.TOOLS.Images = APP.CORE.Abstract.extend({
        staticInstantiate: function() {
            return null === APP.TOOLS.Images.prototype.instance ? null : APP.TOOLS.Images.prototype.instance
        },
        init: function(t) {
            this._super(t), this.urls = [], this.images = [], this.length = 0, this.loaded = 0, APP.TOOLS.Images.prototype.instance = this
        },
        load: function(t, e) {
            var n = this;
            "string" == typeof t ? this.urls.push(t) : t instanceof Array && (this.urls = t), this.images = [], this.length = this.urls.length, this.loaded = 0;
            for (var i = 0; i < this.length; i++)! function() {
                var t = new Image;
                n.images.push(t), t.onload = function() {
                    n.loaded++, n.loaded === n.length && e.call(n, n.images)
                }, t.src = n.urls[i]
            }()
        },
        add: function(t) {
            "string" == typeof t ? this.urls.push(t) : t instanceof Array && (this.urls = t)
        },
        get_proportions: function(t) {
            var e = [];
            if (("undefined" == typeof t.image_width || 0 === parseInt(t.image_width, 10)) && e.push("Image width must be specified"), ("undefined" == typeof t.image_height || 0 === parseInt(t.image_height, 10)) && e.push("Image height must be specified"), ("undefined" == typeof t.container_width || 0 === parseInt(t.container_width, 10)) && e.push("Container width must be specified"), ("undefined" == typeof t.container_height || 0 === parseInt(t.container_height, 10)) && e.push("Container height must be specified"), e.length) return !1;
            t.fit_type = t.fit_type || "fill", t.alignment_x = t.alignment_x || "center", t.alignment_y = t.alignment_y || "middle", t.rounding = t.rounding || "ceil", t.coordinates = t.coordinates || "css";
            var n = {}, i = t.image_width / t.image_height,
                r = t.container_width / t.container_height,
                o = 0,
                s = 0,
                a = 0,
                u = 0,
                l = null;
            t.fit_type = t.fit_type.toLowerCase(), t.alignment_x = t.alignment_x.toLowerCase(), t.alignment_y = t.alignment_y.toLowerCase(), t.rounding = t.rounding.toLowerCase(), t.coordinates = t.coordinates.toLowerCase(), (void 0 === typeof t.alignment_x || "left" !== t.alignment_x && "center" !== t.alignment_x && "right" !== t.alignment_x) && (t.alignment_x = "center"), (void 0 === typeof t.alignment_y || "top" !== t.alignment_y && "middle" !== t.alignment_y && "bottom" !== t.alignment_y) && (t.alignment_y = "middle");
            var c = function() {
                switch (o = t.container_width, s = t.container_width / t.image_width * t.image_height, a = 0, l = "width", t.alignment_y) {
                    case "top":
                        u = 0;
                        break;
                    case "middle":
                        u = (t.container_height - s) / 2;
                        break;
                    case "bottom":
                        u = t.container_height - s
                }
            }, h = function() {
                    switch (s = t.container_height, o = t.container_height / t.image_height * t.image_width, u = 0, l = "height", t.alignment_x) {
                        case "left":
                            a = 0;
                            break;
                        case "center":
                            a = (t.container_width - o) / 2;
                            break;
                        case "right":
                            a = t.container_width - o
                    }
                };
            return "fill" === t.fit_type || "full" === t.fit_type ? r > i ? c() : h() : ("fit" === t.fit_type || "i sits" === t.fit_type) && (r > i ? h() : c()), ("ceil" === t.rounding || "round" === t.rounding || "floor" === t.rounding) && (o = Math[t.rounding].call(this, o), s = Math[t.rounding].call(this, s), a = Math[t.rounding].call(this, a), u = Math[t.rounding].call(this, u)), "cartesian" === t.coordinates ? (n.width = o, n.height = s, n.x = a, n.y = u) : (n.width = o, n.height = s, n.left = a, n.top = u), n.fit_in = l, n
        }
    })
}(),
function() {
    "use strict";
    APP.TOOLS.Ticker = APP.CORE.Event_Emitter.extend({
        staticInstantiate: function() {
            return null === APP.TOOLS.Ticker.prototype.instance ? null : APP.TOOLS.Ticker.prototype.instance
        },
        init: function(t) {
            this._super(t), this.started = !1, this.running = !1, this.start_time = 0, this.time = 0, this.elapsed_time = 0, APP.TOOLS.Ticker.prototype.instance = this
        },
        start: function(t) {
            this.started = !0, this.start_time = +new Date, this.time = 0, this.elapsed_time = 0, t && this.run()
        },
        run: function() {
            var t = this;
            this.running = !0;
            var e = function() {
                t.running && window.requestAnimationFrame(e), t.tick()
            };
            e()
        },
        stop: function() {
            this.running = !1
        },
        tick: function() {
            this.started || this.start(), this.time = +new Date, this.delta = this.time - this.start_time - this.elapsed_time, this.elapsed_time = this.time - this.start_time, this.trigger("tick", [this.elapsed_time, this.time, this.start_time])
        }
    })
}(),
function() {
    "use strict";
    APP.TOOLS.Navigation = APP.CORE.Event_Emitter.extend({
        options: {},
        staticInstantiate: function() {
            return null === APP.TOOLS.Navigation.prototype.instance ? null : APP.TOOLS.Navigation.prototype.instance
        },
        init: function(t) {
            this._super(t), this.history = history.pushState ? window.history : !1, this.state_id = 0, this.history && this.update_state({
                _prevent_default_tag: 1,
                title: document.title,
                id: this.state_id
            }), this.init_events(), APP.TOOLS.Navigation.prototype.instance = this
        },
        init_events: function() {
            if (this.history) {
                var t = this;
                window.onpopstate = function(e) {
                    var n = Object.create(e.state);
                    n._prevent_default_tag && (n.title && (document.title = n.title), n.direction = n.id < t.state_id ? "backward" : "frontward", t.state_id = n.id, t.trigger("pop", [n, window.location.href]))
                }
            }
        },
        update_state: function(t, e) {
            if (this.history)
                if (t._prevent_default_tag = 1, e || !this.history.state) {
                    this.history.replaceState(t, document.title, window.location.href);
                    try {
                        this.history.state = t
                    } catch (n) {
                        console.log("catch")
                    }
                } else {
                    for (var i in t) try {
                        this.history.state[i] = t[i]
                    } catch (n) {
                        console.log("catch")
                    }
                    this.history.replaceState(this.history.state, document.title, window.location.href)
                }
        },
        push: function(t, e) {
            this.history && (t.title && (document.title = t.title), t.id = ++this.state_id, t.tag = "test", this.history.pushState(t, t.title, e), this.trigger("push", [t, e]))
        }
    })
}();
