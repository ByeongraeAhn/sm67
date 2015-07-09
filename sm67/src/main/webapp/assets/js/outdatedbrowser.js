var outdatedBrowser = function(t) {
    function o(t) {
        s.style.opacity = t / 100, s.style.filter = "alpha(opacity=" + t + ")"
    }

    function e(t) {
        o(t), 1 == t && (s.style.display = "block"), 100 == t && (u = !0)
    }

    function r() {
        var t = document.getElementById("btnUpdateBrowser");
        s.style.backgroundColor = bkgColor, s.style.color = txtColor, s.children[0].style.color = txtColor, s.children[1].style.color = txtColor, t.style.color = txtColor, t.style.borderColor = txtColor, t.onmouseover = function() {
            this.style.color = bkgColor, this.style.backgroundColor = txtColor
        }, t.onmouseout = function() {
            this.style.color = txtColor, this.style.backgroundColor = bkgColor
        }
    }

    function a() {
        var t = !1;
        if (window.XMLHttpRequest) t = new XMLHttpRequest;
        else if (window.ActiveXObject) try {
            t = new ActiveXObject("Msxml2.XMLHTTP")
        } catch (o) {
            try {
                t = new ActiveXObject("Microsoft.XMLHTTP")
            } catch (o) {
                t = !1
            }
        }
        return t
    }

    function l(t) {
        var o = a();
        return o && (o.onreadystatechange = function() {
            n(o)
        }, o.open("GET", t, !0), o.send(null)), !1
    }

    function n(t) {
        var o = document.getElementById("outdated");
        return 4 == t.readyState && (o.innerHTML = 200 == t.status || 304 == t.status ? t.responseText : c, r()), !1
    }
    var s = document.getElementById("outdated");
    this.defaultOpts = {
        bgColor: "#f25648",
        color: "#ffffff",
        lowerThan: "transform",
        languagePath: "../outdatedbrowser/lang/en.html"
    }, t ? ("IE8" == t.lowerThan || "borderSpacing" == t.lowerThan ? t.lowerThan = "borderSpacing" : "IE9" == t.lowerThan || "boxShadow" == t.lowerThan ? t.lowerThan = "boxShadow" : "IE10" == t.lowerThan || "transform" == t.lowerThan || "" == t.lowerThan || "undefined" == typeof t.lowerThan ? t.lowerThan = "transform" : ("IE11" == t.lowerThan || "borderImage" == t.lowerThan) && (t.lowerThan = "borderImage"), this.defaultOpts.bgColor = t.bgColor, this.defaultOpts.color = t.color, this.defaultOpts.lowerThan = t.lowerThan, this.defaultOpts.languagePath = t.languagePath, bkgColor = this.defaultOpts.bgColor, txtColor = this.defaultOpts.color, cssProp = this.defaultOpts.lowerThan, languagePath = this.defaultOpts.languagePath) : (bkgColor = this.defaultOpts.bgColor, txtColor = this.defaultOpts.color, cssProp = this.defaultOpts.lowerThan, languagePath = this.defaultOpts.languagePath);
    var u = !0,
        i = function() {
            var t = document.createElement("div"),
                o = "Khtml Ms O Moz Webkit".split(" "),
                e = o.length;
            return function(r) {
                if (r in t.style) return !0;
                for (r = r.replace(/^[a-z]/, function(t) {
                        return t.toUpperCase()
                    }); e--;)
                    if (o[e] + r in t.style) return !0;
                return !1
            }
        }();
    if (!i("" + cssProp) && u && "1" !== s.style.opacity) {
        u = !1;
        for (var h = 1; 100 >= h; h++) setTimeout(function(t) {
            return function() {
                e(t)
            }
        }(h), 8 * h)
    }
    " " === languagePath || 0 == languagePath.length ? r() : l(languagePath);
    var c = '<h6>Your browser is out-of-date!</h6><p>Update your browser to view this website correctly. <a id="btnUpdateBrowser" href="http://outdatedbrowser.com/">Update my browser now </a></p>'
};