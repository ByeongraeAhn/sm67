function PxLoaderImage(a, b, c) {
    var d = this,
        e = null;
    this.img = new Image, this.tags = b, this.priority = c;
    var f = function() {
            "complete" === d.img.readyState && (i(), e.onLoad(d))
        },
        g = function() {
            i(), e.onLoad(d)
        },
        h = function() {
            i(), e.onError(d)
        },
        i = function() {
            d.unbind("load", g), d.unbind("readystatechange", f), d.unbind("error", h)
        };
    this.start = function(b) {
        e = b, d.bind("load", g), d.bind("readystatechange", f), d.bind("error", h), d.img.src = a
    }, this.checkStatus = function() {
        d.img.complete && (i(), e.onLoad(d))
    }, this.onTimeout = function() {
        i(), d.img.complete ? e.onLoad(d) : e.onTimeout(d)
    }, this.getName = function() {
        return a
    }, this.bind = function(a, b) {
        d.img.addEventListener ? d.img.addEventListener(a, b, !1) : d.img.attachEvent && d.img.attachEvent("on" + a, b)
    }, this.unbind = function(a, b) {
        d.img.removeEventListener ? d.img.removeEventListener(a, b, !1) : d.img.detachEvent && d.img.detachEvent("on" + a, b)
    }
}

function PxLoaderSound(a, b, c, d) {
    var e = this,
        f = null,
        g = navigator.userAgent.match(/(ipad|iphone|ipod)/i),
        h = navigator.userAgent.match(/android/i);
    this.useGlobalHTML5Audio = g || h, this.tags = c, this.priority = d, this.sound = soundManager.createSound({
        id: a,
        url: b,
        autoLoad: !1,
        onload: function() {
            f.onLoad(e)
        },
        onsuspend: function() {
            f.onTimeout(e)
        },
        whileloading: function() {
            var a = this.bytesLoaded,
                b = this.bytesTotal;
            a > 0 && a === b && f.onLoad(e)
        }
    }), this.start = function(a) {
        f = a, this.useGlobalHTML5Audio ? f.onTimeout(e) : this.sound.load()
    }, this.checkStatus = function() {
        switch (e.sound.readyState) {
            case 0:
                break;
            case 1:
                break;
            case 2:
                f.onError(e);
                break;
            case 3:
                f.onLoad(e)
        }
    }, this.onTimeout = function() {
        f.onTimeout(e)
    }, this.getName = function() {
        return b
    }
}! function(a) {
    function b(a) {
        a = a || {}, this.settings = a, null == a.statusInterval && (a.statusInterval = 5e3), null == a.loggingDelay && (a.loggingDelay = 2e4), null == a.noProgressTimeout && (a.noProgressTimeout = 1 / 0);
        var b, d = [],
            e = [],
            f = Date.now(),
            g = {
                QUEUED: 0,
                WAITING: 1,
                LOADED: 2,
                ERROR: 3,
                TIMEOUT: 4
            },
            h = function(a) {
                return null == a ? [] : Array.isArray(a) ? a : [a]
            };
        this.add = function(a) {
            a.tags = new c(a.tags), null == a.priority && (a.priority = 1 / 0), d.push({
                resource: a,
                status: g.QUEUED
            })
        }, this.addProgressListener = function(a, b) {
            e.push({
                callback: a,
                tags: new c(b)
            })
        }, this.addCompletionListener = function(a, b) {
            e.push({
                tags: new c(b),
                callback: function(b) {
                    b.completedCount === b.totalCount && a(b)
                }
            })
        };
        var i = function(a) {
            a = h(a);
            var b = function(b) {
                for (var c = b.resource, d = 1 / 0, e = 0; e < c.tags.length; e++)
                    for (var f = 0; f < Math.min(a.length, d) && !(c.tags.all[e] === a[f] && d > f && (d = f, 0 === d)) && 0 !== d; f++);
                return d
            };
            return function(a, c) {
                var d = b(a),
                    e = b(c);
                return e > d ? -1 : d > e ? 1 : a.priority < c.priority ? -1 : a.priority > c.priority ? 1 : 0
            }
        };
        this.start = function(a) {
            b = Date.now();
            var c = i(a);
            d.sort(c);
            for (var e = 0, f = d.length; f > e; e++) {
                var h = d[e];
                h.status = g.WAITING, h.resource.start(this)
            }
            setTimeout(j, 100)
        };
        var j = function() {
            for (var b = !1, c = Date.now() - f, e = c >= a.noProgressTimeout, h = c >= a.loggingDelay, i = 0, k = d.length; k > i; i++) {
                var l = d[i];
                l.status === g.WAITING && (l.resource.checkStatus && l.resource.checkStatus(), l.status === g.WAITING && (e ? l.resource.onTimeout() : b = !0))
            }
            h && b && m(), b && setTimeout(j, a.statusInterval)
        };
        this.isBusy = function() {
            for (var a = 0, b = d.length; b > a; a++)
                if (d[a].status === g.QUEUED || d[a].status === g.WAITING) return !0;
            return !1
        };
        var k = function(a, b) {
            var c, h, i, j, k, m = null;
            for (c = 0, h = d.length; h > c; c++)
                if (d[c].resource === a) {
                    m = d[c];
                    break
                }
            if (null != m && m.status === g.WAITING)
                for (m.status = b, f = Date.now(), i = a.tags.length, c = 0, h = e.length; h > c; c++) j = e[c], k = 0 === j.tags.length ? !0 : a.tags.intersects(j.tags), k && l(m, j)
        };
        this.onLoad = function(a) {
            k(a, g.LOADED)
        }, this.onError = function(a) {
            k(a, g.ERROR)
        }, this.onTimeout = function(a) {
            k(a, g.TIMEOUT)
        };
        var l = function(a, b) {
                var c, e, f, h, i = 0,
                    j = 0;
                for (c = 0, e = d.length; e > c; c++) f = d[c], h = !1, h = 0 === b.tags.length ? !0 : f.resource.tags.intersects(b.tags), h && (j++, (f.status === g.LOADED || f.status === g.ERROR || f.status === g.TIMEOUT) && i++);
                b.callback({
                    resource: a.resource,
                    loaded: a.status === g.LOADED,
                    error: a.status === g.ERROR,
                    timeout: a.status === g.TIMEOUT,
                    completedCount: i,
                    totalCount: j
                })
            },
            m = this.log = function(a) {
                if (window.console) {
                    var c = Math.round((Date.now() - b) / 1e3);
                    window.console.log("PxLoader elapsed: " + c + " sec");
                    for (var e = 0, f = d.length; f > e; e++) {
                        var h = d[e];
                        if (a || h.status === g.WAITING) {
                            var i = "PxLoader: #" + e + " " + h.resource.getName();
                            switch (h.status) {
                                case g.QUEUED:
                                    i += " (Not Started)";
                                    break;
                                case g.WAITING:
                                    i += " (Waiting)";
                                    break;
                                case g.LOADED:
                                    i += " (Loaded)";
                                    break;
                                case g.ERROR:
                                    i += " (Error)";
                                    break;
                                case g.TIMEOUT:
                                    i += " (Timeout)"
                            }
                            h.resource.tags.length > 0 && (i += " Tags: [" + h.resource.tags.all.join(",") + "]"), window.console.log(i)
                        }
                    }
                }
            }
    }

    function c(a) {
        if (this.all = [], this.first = null, this.length = 0, this.lookup = {}, a) {
            if (Array.isArray(a)) this.all = a.slice(0);
            else if ("object" == typeof a)
                for (var b in a) a.hasOwnProperty(b) && this.all.push(b);
            else this.all.push(a);
            this.length = this.all.length, this.length > 0 && (this.first = this.all[0]);
            for (var c = 0; c < this.length; c++) this.lookup[this.all[c]] = !0
        }
    }
    c.prototype.intersects = function(a) {
        if (0 === this.length || 0 === a.length) return !1;
        if (1 === this.length && 1 === a.length) return this.first === a.first;
        if (a.length < this.length) return a.intersects(this);
        for (var b in this.lookup)
            if (a.lookup[b]) return !0;
        return !1
    }, "function" == typeof define && define.amd && define("PxLoader", [], function() {
        return b
    }), a.PxLoader = b
}(this), Date.now || (Date.now = function() {
        return (new Date).getTime()
    }), Array.isArray || (Array.isArray = function(a) {
        return "[object Array]" === Object.prototype.toString.call(a)
    }), PxLoader.prototype.addImage = function(a, b, c) {
        var d = new PxLoaderImage(a, b, c);
        return this.add(d), d.img
    }, "function" == typeof define && define.amd && define("PxLoaderImage", [], function() {
        return PxLoaderImage
    }), PxLoader.prototype.addSound = function(a, b, c, d) {
        var e = new PxLoaderSound(a, b, c, d);
        return this.add(e), e.sound
    }, "function" == typeof define && define.amd && define("PxLoaderSound", [], function() {
        return PxLoaderSound
    }),
    function(a) {
        "use strict";
        "function" == typeof define && define.amd ? define(["jquery"], a) : "undefined" != typeof exports ? module.exports = a(require("jquery")) : a(jQuery)
    }(function(a) {
        "use strict";
        var b = window.Slick || {};
        b = function() {
            function b(b, d) {
                var e, f, g, h = this;
                if (h.defaults = {
                        accessibility: !0,
                        adaptiveHeight: !1,
                        appendArrows: a(b),
                        appendDots: a(b),
                        arrows: !0,
                        asNavFor: null,
                        prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="previous">Previous</button>',
                        nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="next">Next</button>',
                        autoplay: !1,
                        autoplaySpeed: 3e3,
                        centerMode: !1,
                        centerPadding: "50px",
                        cssEase: "ease",
                        customPaging: function(a, b) {
                            return '<button type="button" data-role="none">' + (b + 1) + "</button>"
                        },
                        dots: !1,
                        dotsClass: "slick-dots",
                        draggable: !0,
                        easing: "linear",
                        edgeFriction: .35,
                        fade: !1,
                        focusOnSelect: !1,
                        infinite: !0,
                        initialSlide: 0,
                        lazyLoad: "ondemand",
                        mobileFirst: !1,
                        pauseOnHover: !0,
                        pauseOnDotsHover: !1,
                        respondTo: "window",
                        responsive: null,
                        rtl: !1,
                        slide: "",
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        speed: 500,
                        swipe: !0,
                        swipeToSlide: !1,
                        touchMove: !0,
                        touchThreshold: 5,
                        useCSS: !0,
                        variableWidth: !1,
                        vertical: !1,
                        waitForAnimate: !0
                    }, h.initials = {
                        animating: !1,
                        dragging: !1,
                        autoPlayTimer: null,
                        currentDirection: 0,
                        currentLeft: null,
                        currentSlide: 0,
                        direction: 1,
                        $dots: null,
                        listWidth: null,
                        listHeight: null,
                        loadIndex: 0,
                        $nextArrow: null,
                        $prevArrow: null,
                        slideCount: null,
                        slideWidth: null,
                        $slideTrack: null,
                        $slides: null,
                        sliding: !1,
                        slideOffset: 0,
                        swipeLeft: null,
                        $list: null,
                        touchObject: {},
                        transformsEnabled: !1
                    }, a.extend(h, h.initials), h.activeBreakpoint = null, h.animType = null, h.animProp = null, h.breakpoints = [], h.breakpointSettings = [], h.cssTransitions = !1, h.hidden = "hidden", h.paused = !1, h.positionProp = null, h.respondTo = null, h.shouldClick = !0, h.$slider = a(b), h.$slidesCache = null, h.transformType = null, h.transitionType = null, h.visibilityChange = "visibilitychange", h.windowWidth = 0, h.windowTimer = null, e = a(b).data("slick") || {}, h.options = a.extend({}, h.defaults, e, d), h.currentSlide = h.options.initialSlide, h.originalSettings = h.options, f = h.options.responsive || null, f && f.length > -1) {
                    h.respondTo = h.options.respondTo || "window";
                    for (g in f) f.hasOwnProperty(g) && (h.breakpoints.push(f[g].breakpoint), h.breakpointSettings[f[g].breakpoint] = f[g].settings);
                    h.breakpoints.sort(function(a, b) {
                        return h.options.mobileFirst === !0 ? a - b : b - a
                    })
                }
                "undefined" != typeof document.mozHidden ? (h.hidden = "mozHidden", h.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.msHidden ? (h.hidden = "msHidden", h.visibilityChange = "msvisibilitychange") : "undefined" != typeof document.webkitHidden && (h.hidden = "webkitHidden", h.visibilityChange = "webkitvisibilitychange"), h.autoPlay = a.proxy(h.autoPlay, h), h.autoPlayClear = a.proxy(h.autoPlayClear, h), h.changeSlide = a.proxy(h.changeSlide, h), h.clickHandler = a.proxy(h.clickHandler, h), h.selectHandler = a.proxy(h.selectHandler, h), h.setPosition = a.proxy(h.setPosition, h), h.swipeHandler = a.proxy(h.swipeHandler, h), h.dragHandler = a.proxy(h.dragHandler, h), h.keyHandler = a.proxy(h.keyHandler, h), h.autoPlayIterator = a.proxy(h.autoPlayIterator, h), h.instanceUid = c++, h.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, h.init(), h.checkResponsive(!0)
            }
            var c = 0;
            return b
        }(), b.prototype.addSlide = b.prototype.slickAdd = function(b, c, d) {
            var e = this;
            if ("boolean" == typeof c) d = c, c = null;
            else if (0 > c || c >= e.slideCount) return !1;
            e.unload(), "number" == typeof c ? 0 === c && 0 === e.$slides.length ? a(b).appendTo(e.$slideTrack) : d ? a(b).insertBefore(e.$slides.eq(c)) : a(b).insertAfter(e.$slides.eq(c)) : d === !0 ? a(b).prependTo(e.$slideTrack) : a(b).appendTo(e.$slideTrack), e.$slides = e.$slideTrack.children(this.options.slide), e.$slideTrack.children(this.options.slide).detach(), e.$slideTrack.append(e.$slides), e.$slides.each(function(b, c) {
                a(c).attr("data-slick-index", b)
            }), e.$slidesCache = e.$slides, e.reinit()
        }, b.prototype.animateHeight = function() {
            var a = this;
            if (1 === a.options.slidesToShow && a.options.adaptiveHeight === !0 && a.options.vertical === !1) {
                var b = a.$slides.eq(a.currentSlide).outerHeight(!0);
                a.$list.animate({
                    height: b
                }, a.options.speed)
            }
        }, b.prototype.animateSlide = function(b, c) {
            var d = {},
                e = this;
            e.animateHeight(), e.options.rtl === !0 && e.options.vertical === !1 && (b = -b), e.transformsEnabled === !1 ? e.options.vertical === !1 ? e.$slideTrack.animate({
                left: b
            }, e.options.speed, e.options.easing, c) : e.$slideTrack.animate({
                top: b
            }, e.options.speed, e.options.easing, c) : e.cssTransitions === !1 ? (e.options.rtl === !0 && (e.currentLeft = -e.currentLeft), a({
                animStart: e.currentLeft
            }).animate({
                animStart: b
            }, {
                duration: e.options.speed,
                easing: e.options.easing,
                step: function(a) {
                    a = Math.ceil(a), e.options.vertical === !1 ? (d[e.animType] = "translate(" + a + "px, 0px)", e.$slideTrack.css(d)) : (d[e.animType] = "translate(0px," + a + "px)", e.$slideTrack.css(d))
                },
                complete: function() {
                    c && c.call()
                }
            })) : (e.applyTransition(), b = Math.ceil(b), d[e.animType] = e.options.vertical === !1 ? "translate3d(" + b + "px, 0px, 0px)" : "translate3d(0px," + b + "px, 0px)", e.$slideTrack.css(d), c && setTimeout(function() {
                e.disableTransition(), c.call()
            }, e.options.speed))
        }, b.prototype.asNavFor = function(b) {
            var c = this,
                d = null !== c.options.asNavFor ? a(c.options.asNavFor).slick("getSlick") : null;
            null !== d && d.slideHandler(b, !0)
        }, b.prototype.applyTransition = function(a) {
            var b = this,
                c = {};
            c[b.transitionType] = b.options.fade === !1 ? b.transformType + " " + b.options.speed + "ms " + b.options.cssEase : "opacity " + b.options.speed + "ms " + b.options.cssEase, b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c)
        }, b.prototype.autoPlay = function() {
            var a = this;
            a.autoPlayTimer && clearInterval(a.autoPlayTimer), a.slideCount > a.options.slidesToShow && a.paused !== !0 && (a.autoPlayTimer = setInterval(a.autoPlayIterator, a.options.autoplaySpeed))
        }, b.prototype.autoPlayClear = function() {
            var a = this;
            a.autoPlayTimer && clearInterval(a.autoPlayTimer)
        }, b.prototype.autoPlayIterator = function() {
            var a = this;
            a.options.infinite === !1 ? 1 === a.direction ? (a.currentSlide + 1 === a.slideCount - 1 && (a.direction = 0), a.slideHandler(a.currentSlide + a.options.slidesToScroll)) : (a.currentSlide - 1 === 0 && (a.direction = 1), a.slideHandler(a.currentSlide - a.options.slidesToScroll)) : a.slideHandler(a.currentSlide + a.options.slidesToScroll)
        }, b.prototype.buildArrows = function() {
            var b = this;
            b.options.arrows === !0 && b.slideCount > b.options.slidesToShow && (b.$prevArrow = a(b.options.prevArrow), b.$nextArrow = a(b.options.nextArrow), b.htmlExpr.test(b.options.prevArrow) && b.$prevArrow.appendTo(b.options.appendArrows), b.htmlExpr.test(b.options.nextArrow) && b.$nextArrow.appendTo(b.options.appendArrows), b.options.infinite !== !0 && b.$prevArrow.addClass("slick-disabled"))
        }, b.prototype.buildDots = function() {
            var b, c, d = this;
            if (d.options.dots === !0 && d.slideCount > d.options.slidesToShow) {
                for (c = '<ul class="' + d.options.dotsClass + '">', b = 0; b <= d.getDotCount(); b += 1) c += "<li>" + d.options.customPaging.call(this, d, b) + "</li>";
                c += "</ul>", d.$dots = a(c).appendTo(d.options.appendDots), d.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
            }
        }, b.prototype.buildOut = function() {
            var b = this;
            b.$slides = b.$slider.children(b.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), b.slideCount = b.$slides.length, b.$slides.each(function(b, c) {
                a(c).attr("data-slick-index", b)
            }), b.$slidesCache = b.$slides, b.$slider.addClass("slick-slider"), b.$slideTrack = 0 === b.slideCount ? a('<div class="slick-track"/>').appendTo(b.$slider) : b.$slides.wrapAll('<div class="slick-track"/>').parent(), b.$list = b.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), b.$slideTrack.css("opacity", 0), (b.options.centerMode === !0 || b.options.swipeToSlide === !0) && (b.options.slidesToScroll = 1), a("img[data-lazy]", b.$slider).not("[src]").addClass("slick-loading"), b.setupInfinite(), b.buildArrows(), b.buildDots(), b.updateDots(), b.options.accessibility === !0 && b.$list.prop("tabIndex", 0), b.setSlideClasses("number" == typeof this.currentSlide ? this.currentSlide : 0), b.options.draggable === !0 && b.$list.addClass("draggable")
        }, b.prototype.checkResponsive = function(b) {
            var c, d, e, f = this,
                g = f.$slider.width(),
                h = window.innerWidth || a(window).width();
            if ("window" === f.respondTo ? e = h : "slider" === f.respondTo ? e = g : "min" === f.respondTo && (e = Math.min(h, g)), f.originalSettings.responsive && f.originalSettings.responsive.length > -1 && null !== f.originalSettings.responsive) {
                d = null;
                for (c in f.breakpoints) f.breakpoints.hasOwnProperty(c) && (f.originalSettings.mobileFirst === !1 ? e < f.breakpoints[c] && (d = f.breakpoints[c]) : e > f.breakpoints[c] && (d = f.breakpoints[c]));
                null !== d ? null !== f.activeBreakpoint ? d !== f.activeBreakpoint && (f.activeBreakpoint = d, "unslick" === f.breakpointSettings[d] ? f.unslick() : (f.options = a.extend({}, f.originalSettings, f.breakpointSettings[d]), b === !0 && (f.currentSlide = f.options.initialSlide), f.refresh())) : (f.activeBreakpoint = d, "unslick" === f.breakpointSettings[d] ? f.unslick() : (f.options = a.extend({}, f.originalSettings, f.breakpointSettings[d]), b === !0 && (f.currentSlide = f.options.initialSlide), f.refresh())) : null !== f.activeBreakpoint && (f.activeBreakpoint = null, f.options = f.originalSettings, b === !0 && (f.currentSlide = f.options.initialSlide), f.refresh())
            }
        }, b.prototype.changeSlide = function(b, c) {
            var d, e, f, g = this,
                h = a(b.target);
            switch (h.is("a") && b.preventDefault(), f = g.slideCount % g.options.slidesToScroll !== 0, d = f ? 0 : (g.slideCount - g.currentSlide) % g.options.slidesToScroll, b.data.message) {
                case "previous":
                    e = 0 === d ? g.options.slidesToScroll : g.options.slidesToShow - d, g.slideCount > g.options.slidesToShow && g.slideHandler(g.currentSlide - e, !1, c);
                    break;
                case "next":
                    e = 0 === d ? g.options.slidesToScroll : d, g.slideCount > g.options.slidesToShow && g.slideHandler(g.currentSlide + e, !1, c);
                    break;
                case "index":
                    var i = 0 === b.data.index ? 0 : b.data.index || a(b.target).parent().index() * g.options.slidesToScroll;
                    g.slideHandler(g.checkNavigable(i), !1, c);
                    break;
                default:
                    return
            }
        }, b.prototype.checkNavigable = function(a) {
            var b, c, d = this;
            if (b = d.getNavigableIndexes(), c = 0, a > b[b.length - 1]) a = b[b.length - 1];
            else
                for (var e in b) {
                    if (a < b[e]) {
                        a = c;
                        break
                    }
                    c = b[e]
                }
            return a
        }, b.prototype.clickHandler = function(a) {
            var b = this;
            b.shouldClick === !1 && (a.stopImmediatePropagation(), a.stopPropagation(), a.preventDefault())
        }, b.prototype.destroy = function() {
            var b = this;
            b.autoPlayClear(), b.touchObject = {}, a(".slick-cloned", b.$slider).remove(), b.$dots && b.$dots.remove(), b.$prevArrow && "object" != typeof b.options.prevArrow && b.$prevArrow.remove(), b.$nextArrow && "object" != typeof b.options.nextArrow && b.$nextArrow.remove(), b.$slides.removeClass("slick-slide slick-active slick-center slick-visible").attr("aria-hidden", "true").removeAttr("data-slick-index").css({
                position: "",
                left: "",
                top: "",
                zIndex: "",
                opacity: "",
                width: ""
            }), b.$slider.removeClass("slick-slider"), b.$slider.removeClass("slick-initialized"), b.$list.off(".slick"), a(window).off(".slick-" + b.instanceUid), a(document).off(".slick-" + b.instanceUid), b.$slider.html(b.$slides)
        }, b.prototype.disableTransition = function(a) {
            var b = this,
                c = {};
            c[b.transitionType] = "", b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c)
        }, b.prototype.fadeSlide = function(a, b) {
            var c = this;
            c.cssTransitions === !1 ? (c.$slides.eq(a).css({
                zIndex: 1e3
            }), c.$slides.eq(a).animate({
                opacity: 1
            }, c.options.speed, c.options.easing, b)) : (c.applyTransition(a), c.$slides.eq(a).css({
                opacity: 1,
                zIndex: 1e3
            }), b && setTimeout(function() {
                c.disableTransition(a), b.call()
            }, c.options.speed))
        }, b.prototype.filterSlides = b.prototype.slickFilter = function(a) {
            var b = this;
            null !== a && (b.unload(), b.$slideTrack.children(this.options.slide).detach(), b.$slidesCache.filter(a).appendTo(b.$slideTrack), b.reinit())
        }, b.prototype.getCurrent = b.prototype.slickCurrentSlide = function() {
            var a = this;
            return a.currentSlide
        }, b.prototype.getDotCount = function() {
            var a = this,
                b = 0,
                c = 0,
                d = 0;
            if (a.options.infinite === !0) d = Math.ceil(a.slideCount / a.options.slidesToScroll);
            else if (a.options.centerMode === !0) d = a.slideCount;
            else
                for (; b < a.slideCount;) ++d, b = c + a.options.slidesToShow, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
            return d - 1
        }, b.prototype.getLeft = function(a) {
            var b, c, d, e = this,
                f = 0;
            return e.slideOffset = 0, c = e.$slides.first().outerHeight(), e.options.infinite === !0 ? (e.slideCount > e.options.slidesToShow && (e.slideOffset = e.slideWidth * e.options.slidesToShow * -1, f = c * e.options.slidesToShow * -1), e.slideCount % e.options.slidesToScroll !== 0 && a + e.options.slidesToScroll > e.slideCount && e.slideCount > e.options.slidesToShow && (a > e.slideCount ? (e.slideOffset = (e.options.slidesToShow - (a - e.slideCount)) * e.slideWidth * -1, f = (e.options.slidesToShow - (a - e.slideCount)) * c * -1) : (e.slideOffset = e.slideCount % e.options.slidesToScroll * e.slideWidth * -1, f = e.slideCount % e.options.slidesToScroll * c * -1))) : a + e.options.slidesToShow > e.slideCount && (e.slideOffset = (a + e.options.slidesToShow - e.slideCount) * e.slideWidth, f = (a + e.options.slidesToShow - e.slideCount) * c), e.slideCount <= e.options.slidesToShow && (e.slideOffset = 0, f = 0), e.options.centerMode === !0 && e.options.infinite === !0 ? e.slideOffset += e.slideWidth * Math.floor(e.options.slidesToShow / 2) - e.slideWidth : e.options.centerMode === !0 && (e.slideOffset = 0, e.slideOffset += e.slideWidth * Math.floor(e.options.slidesToShow / 2)), b = e.options.vertical === !1 ? a * e.slideWidth * -1 + e.slideOffset : a * c * -1 + f, e.options.variableWidth === !0 && (d = e.$slideTrack.children(".slick-slide").eq(e.slideCount <= e.options.slidesToShow || e.options.infinite === !1 ? a : a + e.options.slidesToShow), b = d[0] ? -1 * d[0].offsetLeft : 0, e.options.centerMode === !0 && (d = e.$slideTrack.children(".slick-slide").eq(e.options.infinite === !1 ? a : a + e.options.slidesToShow + 1), b = d[0] ? -1 * d[0].offsetLeft : 0, b += (e.$list.width() - d.outerWidth()) / 2)), b
        }, b.prototype.getOption = b.prototype.slickGetOption = function(a) {
            var b = this;
            return b.options[a]
        }, b.prototype.getNavigableIndexes = function() {
            var a, b = this,
                c = 0,
                d = 0,
                e = [];
            for (b.options.infinite === !1 ? (a = b.slideCount - b.options.slidesToShow + 1, b.options.centerMode === !0 && (a = b.slideCount)) : (c = -1 * b.slideCount, d = -1 * b.slideCount, a = 2 * b.slideCount); a > c;) e.push(c), c = d + b.options.slidesToScroll, d += b.options.slidesToScroll <= b.options.slidesToShow ? b.options.slidesToScroll : b.options.slidesToShow;
            return e
        }, b.prototype.getSlick = function() {
            return this
        }, b.prototype.getSlideCount = function() {
            var b, c, d, e = this;
            return d = e.options.centerMode === !0 ? e.slideWidth * Math.floor(e.options.slidesToShow / 2) : 0, e.options.swipeToSlide === !0 ? (e.$slideTrack.find(".slick-slide").each(function(b, f) {
                return f.offsetLeft - d + a(f).outerWidth() / 2 > -1 * e.swipeLeft ? (c = f, !1) : void 0
            }), b = Math.abs(a(c).attr("data-slick-index") - e.currentSlide) || 1) : e.options.slidesToScroll
        }, b.prototype.goTo = b.prototype.slickGoTo = function(a, b) {
            var c = this;
            c.changeSlide({
                data: {
                    message: "index",
                    index: parseInt(a)
                }
            }, b)
        }, b.prototype.init = function() {
            var b = this;
            a(b.$slider).hasClass("slick-initialized") || (a(b.$slider).addClass("slick-initialized"), b.buildOut(), b.setProps(), b.startLoad(), b.loadSlider(), b.initializeEvents(), b.updateArrows(), b.updateDots()), b.$slider.trigger("init", [b])
        }, b.prototype.initArrowEvents = function() {
            var a = this;
            a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.on("click.slick", {
                message: "previous"
            }, a.changeSlide), a.$nextArrow.on("click.slick", {
                message: "next"
            }, a.changeSlide))
        }, b.prototype.initDotEvents = function() {
            var b = this;
            b.options.dots === !0 && b.slideCount > b.options.slidesToShow && a("li", b.$dots).on("click.slick", {
                message: "index"
            }, b.changeSlide), b.options.dots === !0 && b.options.pauseOnDotsHover === !0 && b.options.autoplay === !0 && a("li", b.$dots).on("mouseenter.slick", function() {
                b.paused = !0, b.autoPlayClear()
            }).on("mouseleave.slick", function() {
                b.paused = !1, b.autoPlay()
            })
        }, b.prototype.initializeEvents = function() {
            var b = this;
            b.initArrowEvents(), b.initDotEvents(), b.$list.on("touchstart.slick mousedown.slick", {
                action: "start"
            }, b.swipeHandler), b.$list.on("touchmove.slick mousemove.slick", {
                action: "move"
            }, b.swipeHandler), b.$list.on("touchend.slick mouseup.slick", {
                action: "end"
            }, b.swipeHandler), b.$list.on("touchcancel.slick mouseleave.slick", {
                action: "end"
            }, b.swipeHandler), b.$list.on("click.slick", b.clickHandler), b.options.autoplay === !0 && (a(document).on(b.visibilityChange, function() {
                b.visibility()
            }), b.options.pauseOnHover === !0 && (b.$list.on("mouseenter.slick", function() {
                b.paused = !0, b.autoPlayClear()
            }), b.$list.on("mouseleave.slick", function() {
                b.paused = !1, b.autoPlay()
            }))), b.options.accessibility === !0 && b.$list.on("keydown.slick", b.keyHandler), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().on("click.slick", b.selectHandler), a(window).on("orientationchange.slick.slick-" + b.instanceUid, function() {
                b.checkResponsive(), b.setPosition()
            }), a(window).on("resize.slick.slick-" + b.instanceUid, function() {
                a(window).width() !== b.windowWidth && (clearTimeout(b.windowDelay), b.windowDelay = window.setTimeout(function() {
                    b.windowWidth = a(window).width(), b.checkResponsive(), b.setPosition()
                }, 50))
            }), a("*[draggable!=true]", b.$slideTrack).on("dragstart", function(a) {
                a.preventDefault()
            }), a(window).on("load.slick.slick-" + b.instanceUid, b.setPosition), a(document).on("ready.slick.slick-" + b.instanceUid, b.setPosition)
        }, b.prototype.initUI = function() {
            var a = this;
            a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.show(), a.$nextArrow.show()), a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.show(), a.options.autoplay === !0 && a.autoPlay()
        }, b.prototype.keyHandler = function(a) {
            var b = this;
            37 === a.keyCode && b.options.accessibility === !0 ? b.changeSlide({
                data: {
                    message: "previous"
                }
            }) : 39 === a.keyCode && b.options.accessibility === !0 && b.changeSlide({
                data: {
                    message: "next"
                }
            })
        }, b.prototype.lazyLoad = function() {
            function b(b) {
                a("img[data-lazy]", b).each(function() {
                    var b = a(this),
                        c = a(this).attr("data-lazy");
                    b.load(function() {
                        b.animate({
                            opacity: 1
                        }, 200)
                    }).css({
                        opacity: 0
                    }).attr("src", c).removeAttr("data-lazy").removeClass("slick-loading")
                })
            }
            var c, d, e, f, g = this;
            g.options.centerMode === !0 ? g.options.infinite === !0 ? (e = g.currentSlide + (g.options.slidesToShow / 2 + 1), f = e + g.options.slidesToShow + 2) : (e = Math.max(0, g.currentSlide - (g.options.slidesToShow / 2 + 1)), f = 2 + (g.options.slidesToShow / 2 + 1) + g.currentSlide) : (e = g.options.infinite ? g.options.slidesToShow + g.currentSlide : g.currentSlide, f = e + g.options.slidesToShow, g.options.fade === !0 && (e > 0 && e--, f <= g.slideCount && f++)), c = g.$slider.find(".slick-slide").slice(e, f), b(c), g.slideCount <= g.options.slidesToShow ? (d = g.$slider.find(".slick-slide"), b(d)) : g.currentSlide >= g.slideCount - g.options.slidesToShow ? (d = g.$slider.find(".slick-cloned").slice(0, g.options.slidesToShow), b(d)) : 0 === g.currentSlide && (d = g.$slider.find(".slick-cloned").slice(-1 * g.options.slidesToShow), b(d))
        }, b.prototype.loadSlider = function() {
            var a = this;
            a.setPosition(), a.$slideTrack.css({
                opacity: 1
            }), a.$slider.removeClass("slick-loading"), a.initUI(), "progressive" === a.options.lazyLoad && a.progressiveLazyLoad()
        }, b.prototype.next = b.prototype.slickNext = function() {
            var a = this;
            a.changeSlide({
                data: {
                    message: "next"
                }
            })
        }, b.prototype.pause = b.prototype.slickPause = function() {
            var a = this;
            a.autoPlayClear(), a.paused = !0
        }, b.prototype.play = b.prototype.slickPlay = function() {
            var a = this;
            a.paused = !1, a.autoPlay()
        }, b.prototype.postSlide = function(a) {
            var b = this;
            b.$slider.trigger("afterChange", [b, a]), b.animating = !1, b.setPosition(), b.swipeLeft = null, b.options.autoplay === !0 && b.paused === !1 && b.autoPlay()
        }, b.prototype.prev = b.prototype.slickPrev = function() {
            var a = this;
            a.changeSlide({
                data: {
                    message: "previous"
                }
            })
        }, b.prototype.progressiveLazyLoad = function() {
            var b, c, d = this;
            b = a("img[data-lazy]", d.$slider).length, b > 0 && (c = a("img[data-lazy]", d.$slider).first(), c.attr("src", c.attr("data-lazy")).removeClass("slick-loading").load(function() {
                c.removeAttr("data-lazy"), d.progressiveLazyLoad(), d.options.adaptiveHeight === !0 && d.setPosition()
            }).error(function() {
                c.removeAttr("data-lazy"), d.progressiveLazyLoad()
            }))
        }, b.prototype.refresh = function() {
            var b = this,
                c = b.currentSlide;
            b.destroy(), a.extend(b, b.initials), b.init(), b.changeSlide({
                data: {
                    message: "index",
                    index: c
                }
            }, !0)
        }, b.prototype.reinit = function() {
            var b = this;
            b.$slides = b.$slideTrack.children(b.options.slide).addClass("slick-slide"), b.slideCount = b.$slides.length, b.currentSlide >= b.slideCount && 0 !== b.currentSlide && (b.currentSlide = b.currentSlide - b.options.slidesToScroll), b.slideCount <= b.options.slidesToShow && (b.currentSlide = 0), b.setProps(), b.setupInfinite(), b.buildArrows(), b.updateArrows(), b.initArrowEvents(), b.buildDots(), b.updateDots(), b.initDotEvents(), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().on("click.slick", b.selectHandler), b.setSlideClasses(0), b.setPosition(), b.$slider.trigger("reInit", [b])
        }, b.prototype.removeSlide = b.prototype.slickRemove = function(a, b, c) {
            var d = this;
            return "boolean" == typeof a ? (b = a, a = b === !0 ? 0 : d.slideCount - 1) : a = b === !0 ? --a : a, d.slideCount < 1 || 0 > a || a > d.slideCount - 1 ? !1 : (d.unload(), c === !0 ? d.$slideTrack.children().remove() : d.$slideTrack.children(this.options.slide).eq(a).remove(), d.$slides = d.$slideTrack.children(this.options.slide), d.$slideTrack.children(this.options.slide).detach(), d.$slideTrack.append(d.$slides), d.$slidesCache = d.$slides, void d.reinit())
        }, b.prototype.setCSS = function(a) {
            var b, c, d = this,
                e = {};
            d.options.rtl === !0 && (a = -a), b = "left" == d.positionProp ? Math.ceil(a) + "px" : "0px", c = "top" == d.positionProp ? Math.ceil(a) + "px" : "0px", e[d.positionProp] = a, d.transformsEnabled === !1 ? d.$slideTrack.css(e) : (e = {}, d.cssTransitions === !1 ? (e[d.animType] = "translate(" + b + ", " + c + ")", d.$slideTrack.css(e)) : (e[d.animType] = "translate3d(" + b + ", " + c + ", 0px)", d.$slideTrack.css(e)))
        }, b.prototype.setDimensions = function() {
            var a = this;
            if (a.options.vertical === !1 ? a.options.centerMode === !0 && a.$list.css({
                    padding: "0px " + a.options.centerPadding
                }) : (a.$list.height(a.$slides.first().outerHeight(!0) * a.options.slidesToShow), a.options.centerMode === !0 && a.$list.css({
                    padding: a.options.centerPadding + " 0px"
                })), a.listWidth = a.$list.width(), a.listHeight = a.$list.height(), a.options.vertical === !1 && a.options.variableWidth === !1) a.slideWidth = Math.ceil(a.listWidth / a.options.slidesToShow), a.$slideTrack.width(Math.ceil(a.slideWidth * a.$slideTrack.children(".slick-slide").length));
            else if (a.options.variableWidth === !0) {
                var b = 0;
                a.slideWidth = Math.ceil(a.listWidth / a.options.slidesToShow), a.$slideTrack.children(".slick-slide").each(function() {
                    b += a.listWidth
                }), a.$slideTrack.width(Math.ceil(b) + 1)
            } else a.slideWidth = Math.ceil(a.listWidth), a.$slideTrack.height(Math.ceil(a.$slides.first().outerHeight(!0) * a.$slideTrack.children(".slick-slide").length));
            var c = a.$slides.first().outerWidth(!0) - a.$slides.first().width();
            a.options.variableWidth === !1 && a.$slideTrack.children(".slick-slide").width(a.slideWidth - c)
        }, b.prototype.setFade = function() {
            var b, c = this;
            c.$slides.each(function(d, e) {
                b = c.slideWidth * d * -1, a(e).css(c.options.rtl === !0 ? {
                    position: "relative",
                    right: b,
                    top: 0,
                    zIndex: 800,
                    opacity: 0
                } : {
                    position: "relative",
                    left: b,
                    top: 0,
                    zIndex: 800,
                    opacity: 0
                })
            }), c.$slides.eq(c.currentSlide).css({
                zIndex: 900,
                opacity: 1
            })
        }, b.prototype.setHeight = function() {
            var a = this;
            if (1 === a.options.slidesToShow && a.options.adaptiveHeight === !0 && a.options.vertical === !1) {
                var b = a.$slides.eq(a.currentSlide).outerHeight(!0);
                a.$list.css("height", b)
            }
        }, b.prototype.setOption = b.prototype.slickSetOption = function(a, b, c) {
            var d = this;
            d.options[a] = b, c === !0 && (d.unload(), d.reinit())
        }, b.prototype.setPosition = function() {
            var a = this;
            a.setDimensions(), a.setHeight(), a.options.fade === !1 ? a.setCSS(a.getLeft(a.currentSlide)) : a.setFade(), a.$slider.trigger("setPosition", [a])
        }, b.prototype.setProps = function() {
            var a = this,
                b = document.body.style;
            a.positionProp = a.options.vertical === !0 ? "top" : "left", "top" === a.positionProp ? a.$slider.addClass("slick-vertical") : a.$slider.removeClass("slick-vertical"), (void 0 !== b.WebkitTransition || void 0 !== b.MozTransition || void 0 !== b.msTransition) && a.options.useCSS === !0 && (a.cssTransitions = !0), void 0 !== b.OTransform && (a.animType = "OTransform", a.transformType = "-o-transform", a.transitionType = "OTransition", void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)), void 0 !== b.MozTransform && (a.animType = "MozTransform", a.transformType = "-moz-transform", a.transitionType = "MozTransition", void 0 === b.perspectiveProperty && void 0 === b.MozPerspective && (a.animType = !1)), void 0 !== b.webkitTransform && (a.animType = "webkitTransform", a.transformType = "-webkit-transform", a.transitionType = "webkitTransition", void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)), void 0 !== b.msTransform && (a.animType = "msTransform", a.transformType = "-ms-transform", a.transitionType = "msTransition", void 0 === b.msTransform && (a.animType = !1)), void 0 !== b.transform && a.animType !== !1 && (a.animType = "transform", a.transformType = "transform", a.transitionType = "transition"), a.transformsEnabled = null !== a.animType && a.animType !== !1
        }, b.prototype.setSlideClasses = function(a) {
            var b, c, d, e, f = this;
            f.$slider.find(".slick-slide").removeClass("slick-active").attr("aria-hidden", "true").removeClass("slick-center"), c = f.$slider.find(".slick-slide"), f.options.centerMode === !0 ? (b = Math.floor(f.options.slidesToShow / 2), f.options.infinite === !0 && (a >= b && a <= f.slideCount - 1 - b ? f.$slides.slice(a - b, a + b + 1).addClass("slick-active").attr("aria-hidden", "false") : (d = f.options.slidesToShow + a, c.slice(d - b + 1, d + b + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === a ? c.eq(c.length - 1 - f.options.slidesToShow).addClass("slick-center") : a === f.slideCount - 1 && c.eq(f.options.slidesToShow).addClass("slick-center")), f.$slides.eq(a).addClass("slick-center")) : a >= 0 && a <= f.slideCount - f.options.slidesToShow ? f.$slides.slice(a, a + f.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : c.length <= f.options.slidesToShow ? c.addClass("slick-active").attr("aria-hidden", "false") : (e = f.slideCount % f.options.slidesToShow, d = f.options.infinite === !0 ? f.options.slidesToShow + a : a, f.options.slidesToShow == f.options.slidesToScroll && f.slideCount - a < f.options.slidesToShow ? c.slice(d - (f.options.slidesToShow - e), d + e).addClass("slick-active").attr("aria-hidden", "false") : c.slice(d, d + f.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" === f.options.lazyLoad && f.lazyLoad()
        }, b.prototype.setupInfinite = function() {
            var b, c, d, e = this;
            if (e.options.fade === !0 && (e.options.centerMode = !1), e.options.infinite === !0 && e.options.fade === !1 && (c = null, e.slideCount > e.options.slidesToShow)) {
                for (d = e.options.centerMode === !0 ? e.options.slidesToShow + 1 : e.options.slidesToShow, b = e.slideCount; b > e.slideCount - d; b -= 1) c = b - 1, a(e.$slides[c]).clone(!0).attr("id", "").attr("data-slick-index", c - e.slideCount).prependTo(e.$slideTrack).addClass("slick-cloned");
                for (b = 0; d > b; b += 1) c = b, a(e.$slides[c]).clone(!0).attr("id", "").attr("data-slick-index", c + e.slideCount).appendTo(e.$slideTrack).addClass("slick-cloned");
                e.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                    a(this).attr("id", "")
                })
            }
        }, b.prototype.selectHandler = function(b) {
            var c = this,
                d = parseInt(a(b.target).parents(".slick-slide").attr("data-slick-index"));
            return d || (d = 0), c.slideCount <= c.options.slidesToShow ? (c.$slider.find(".slick-slide").removeClass("slick-active").attr("aria-hidden", "true"), c.$slides.eq(d).addClass("slick-active").attr("aria-hidden", "false"), c.options.centerMode === !0 && (c.$slider.find(".slick-slide").removeClass("slick-center"), c.$slides.eq(d).addClass("slick-center")), void c.asNavFor(d)) : void c.slideHandler(d)
        }, b.prototype.slideHandler = function(a, b, c) {
            var d, e, f, g, h = null,
                i = this;
            return b = b || !1, i.animating === !0 && i.options.waitForAnimate === !0 || i.options.fade === !0 && i.currentSlide === a || i.slideCount <= i.options.slidesToShow ? void 0 : (b === !1 && i.asNavFor(a), d = a, h = i.getLeft(d), g = i.getLeft(i.currentSlide), i.currentLeft = null === i.swipeLeft ? g : i.swipeLeft, i.options.infinite === !1 && i.options.centerMode === !1 && (0 > a || a > i.getDotCount() * i.options.slidesToScroll) ? void(i.options.fade === !1 && (d = i.currentSlide, c !== !0 ? i.animateSlide(g, function() {
                i.postSlide(d)
            }) : i.postSlide(d))) : i.options.infinite === !1 && i.options.centerMode === !0 && (0 > a || a > i.slideCount - i.options.slidesToScroll) ? void(i.options.fade === !1 && (d = i.currentSlide, c !== !0 ? i.animateSlide(g, function() {
                i.postSlide(d)
            }) : i.postSlide(d))) : (i.options.autoplay === !0 && clearInterval(i.autoPlayTimer), e = 0 > d ? i.slideCount % i.options.slidesToScroll !== 0 ? i.slideCount - i.slideCount % i.options.slidesToScroll : i.slideCount + d : d >= i.slideCount ? i.slideCount % i.options.slidesToScroll !== 0 ? 0 : d - i.slideCount : d, i.animating = !0, i.$slider.trigger("beforeChange", [i, i.currentSlide, e]), f = i.currentSlide, i.currentSlide = e, i.setSlideClasses(i.currentSlide), i.updateDots(), i.updateArrows(), i.options.fade === !0 ? (c !== !0 ? i.fadeSlide(e, function() {
                i.postSlide(e)
            }) : i.postSlide(e), void i.animateHeight()) : void(c !== !0 ? i.animateSlide(h, function() {
                i.postSlide(e)
            }) : i.postSlide(e))))
        }, b.prototype.startLoad = function() {
            var a = this;
            a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.hide(), a.$nextArrow.hide()), a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.hide(), a.$slider.addClass("slick-loading")
        }, b.prototype.swipeDirection = function() {
            var a, b, c, d, e = this;
            return a = e.touchObject.startX - e.touchObject.curX, b = e.touchObject.startY - e.touchObject.curY, c = Math.atan2(b, a), d = Math.round(180 * c / Math.PI), 0 > d && (d = 360 - Math.abs(d)), 45 >= d && d >= 0 ? e.options.rtl === !1 ? "left" : "right" : 360 >= d && d >= 315 ? e.options.rtl === !1 ? "left" : "right" : d >= 135 && 225 >= d ? e.options.rtl === !1 ? "right" : "left" : "vertical"
        }, b.prototype.swipeEnd = function() {
            var a, b = this;
            if (b.dragging = !1, b.shouldClick = b.touchObject.swipeLength > 10 ? !1 : !0, void 0 === b.touchObject.curX) return !1;
            if (b.touchObject.edgeHit === !0 && b.$slider.trigger("edge", [b, b.swipeDirection()]), b.touchObject.swipeLength >= b.touchObject.minSwipe) switch (b.swipeDirection()) {
                case "left":
                    a = b.options.swipeToSlide ? b.checkNavigable(b.currentSlide + b.getSlideCount()) : b.currentSlide + b.getSlideCount(), b.slideHandler(a), b.currentDirection = 0, b.touchObject = {}, b.$slider.trigger("swipe", [b, "left"]);
                    break;
                case "right":
                    a = b.options.swipeToSlide ? b.checkNavigable(b.currentSlide - b.getSlideCount()) : b.currentSlide - b.getSlideCount(), b.slideHandler(a), b.currentDirection = 1, b.touchObject = {}, b.$slider.trigger("swipe", [b, "right"])
            } else b.touchObject.startX !== b.touchObject.curX && (b.slideHandler(b.currentSlide), b.touchObject = {})
        }, b.prototype.swipeHandler = function(a) {
            var b = this;
            if (!(b.options.swipe === !1 || "ontouchend" in document && b.options.swipe === !1 || b.options.draggable === !1 && -1 !== a.type.indexOf("mouse"))) switch (b.touchObject.fingerCount = a.originalEvent && void 0 !== a.originalEvent.touches ? a.originalEvent.touches.length : 1, b.touchObject.minSwipe = b.listWidth / b.options.touchThreshold, a.data.action) {
                case "start":
                    b.swipeStart(a);
                    break;
                case "move":
                    b.swipeMove(a);
                    break;
                case "end":
                    b.swipeEnd(a)
            }
        }, b.prototype.swipeMove = function(a) {
            var b, c, d, e, f, g = this;
            return f = void 0 !== a.originalEvent ? a.originalEvent.touches : null, !g.dragging || f && 1 !== f.length ? !1 : (b = g.getLeft(g.currentSlide), g.touchObject.curX = void 0 !== f ? f[0].pageX : a.clientX, g.touchObject.curY = void 0 !== f ? f[0].pageY : a.clientY, g.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(g.touchObject.curX - g.touchObject.startX, 2))), c = g.swipeDirection(), "vertical" !== c ? (void 0 !== a.originalEvent && g.touchObject.swipeLength > 4 && a.preventDefault(), e = (g.options.rtl === !1 ? 1 : -1) * (g.touchObject.curX > g.touchObject.startX ? 1 : -1), d = g.touchObject.swipeLength, g.touchObject.edgeHit = !1, g.options.infinite === !1 && (0 === g.currentSlide && "right" === c || g.currentSlide >= g.getDotCount() && "left" === c) && (d = g.touchObject.swipeLength * g.options.edgeFriction, g.touchObject.edgeHit = !0), g.swipeLeft = g.options.vertical === !1 ? b + d * e : b + d * (g.$list.height() / g.listWidth) * e, g.options.fade === !0 || g.options.touchMove === !1 ? !1 : g.animating === !0 ? (g.swipeLeft = null, !1) : void g.setCSS(g.swipeLeft)) : void 0)
        }, b.prototype.swipeStart = function(a) {
            var b, c = this;
            return 1 !== c.touchObject.fingerCount || c.slideCount <= c.options.slidesToShow ? (c.touchObject = {}, !1) : (void 0 !== a.originalEvent && void 0 !== a.originalEvent.touches && (b = a.originalEvent.touches[0]), c.touchObject.startX = c.touchObject.curX = void 0 !== b ? b.pageX : a.clientX, c.touchObject.startY = c.touchObject.curY = void 0 !== b ? b.pageY : a.clientY, void(c.dragging = !0))
        }, b.prototype.unfilterSlides = b.prototype.slickUnfilter = function() {
            var a = this;
            null !== a.$slidesCache && (a.unload(), a.$slideTrack.children(this.options.slide).detach(), a.$slidesCache.appendTo(a.$slideTrack), a.reinit())
        }, b.prototype.unload = function() {
            var b = this;
            a(".slick-cloned", b.$slider).remove(), b.$dots && b.$dots.remove(), b.$prevArrow && "object" != typeof b.options.prevArrow && b.$prevArrow.remove(), b.$nextArrow && "object" != typeof b.options.nextArrow && b.$nextArrow.remove(), b.$slides.removeClass("slick-slide slick-active slick-visible").attr("aria-hidden", "true").css("width", "")
        }, b.prototype.unslick = function() {
            var a = this;
            a.destroy()
        }, b.prototype.updateArrows = function() {
            var a, b = this;
            a = Math.floor(b.options.slidesToShow / 2), b.options.arrows === !0 && b.options.infinite !== !0 && b.slideCount > b.options.slidesToShow && (b.$prevArrow.removeClass("slick-disabled"), b.$nextArrow.removeClass("slick-disabled"), 0 === b.currentSlide ? (b.$prevArrow.addClass("slick-disabled"), b.$nextArrow.removeClass("slick-disabled")) : b.currentSlide >= b.slideCount - b.options.slidesToShow && b.options.centerMode === !1 ? (b.$nextArrow.addClass("slick-disabled"), b.$prevArrow.removeClass("slick-disabled")) : b.currentSlide >= b.slideCount - 1 && b.options.centerMode === !0 && (b.$nextArrow.addClass("slick-disabled"), b.$prevArrow.removeClass("slick-disabled")))
        }, b.prototype.updateDots = function() {
            var a = this;
            null !== a.$dots && (a.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), a.$dots.find("li").eq(Math.floor(a.currentSlide / a.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
        }, b.prototype.visibility = function() {
            var a = this;
            document[a.hidden] ? (a.paused = !0, a.autoPlayClear()) : (a.paused = !1, a.autoPlay())
        }, a.fn.slick = function() {
            var a, c = this,
                d = arguments[0],
                e = Array.prototype.slice.call(arguments, 1),
                f = c.length,
                g = 0;
            for (g; f > g; g++)
                if ("object" == typeof d || "undefined" == typeof d ? c[g].slick = new b(c[g], d) : a = c[g].slick[d].apply(c[g].slick, e), "undefined" != typeof a) return a;
            return c
        }, a(function() {
            a("[data-slick]").slick()
        })
    }),
    function(a, b, c) {
        "use strict";
        var d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x;
        w = {
            paneClass: "pane",
            sliderClass: "slider",
            contentClass: "content",
            iOSNativeScrolling: !1,
            preventPageScrolling: !1,
            disableResize: !1,
            alwaysVisible: !1,
            flashDelay: 1500,
            sliderMinHeight: 20,
            sliderMaxHeight: null,
            documentContext: null,
            windowContext: null
        }, s = "scrollbar", r = "scroll", k = "mousedown", l = "mousemove", n = "mousewheel", m = "mouseup", q = "resize", h = "drag", u = "up", p = "panedown", f = "DOMMouseScroll", g = "down", v = "wheel", i = "keydown", j = "keyup", t = "touchmove", d = "Microsoft Internet Explorer" === b.navigator.appName && /msie 7./i.test(b.navigator.appVersion) && b.ActiveXObject, e = null, x = function() {
            var a, b, d;
            return a = c.createElement("div"), b = a.style, b.position = "absolute", b.width = "100px", b.height = "100px", b.overflow = r, b.top = "-9999px", c.body.appendChild(a), d = a.offsetWidth - a.clientWidth, c.body.removeChild(a), d
        }, o = function() {
            function i(d, f) {
                this.el = d, this.options = f, e || (e = x()), this.$el = a(this.el), this.doc = a(this.options.documentContext || c), this.win = a(this.options.windowContext || b), this.$content = this.$el.children("." + f.contentClass), this.$content.attr("tabindex", 0), this.content = this.$content[0], this.options.iOSNativeScrolling && null != this.el.style.WebkitOverflowScrolling ? this.nativeScrolling() : this.generate(), this.createEvents(), this.addEvents(), this.reset()
            }
            return i.prototype.preventScrolling = function(a, b) {
                if (this.isActive)
                    if (a.type === f)(b === g && a.originalEvent.detail > 0 || b === u && a.originalEvent.detail < 0) && a.preventDefault();
                    else if (a.type === n) {
                    if (!a.originalEvent || !a.originalEvent.wheelDelta) return;
                    (b === g && a.originalEvent.wheelDelta < 0 || b === u && a.originalEvent.wheelDelta > 0) && a.preventDefault()
                }
            }, i.prototype.nativeScrolling = function() {
                this.$content.css({
                    WebkitOverflowScrolling: "touch"
                }), this.iOSNativeScrolling = !0, this.isActive = !0
            }, i.prototype.updateScrollValues = function() {
                var a;
                a = this.content, this.maxScrollTop = a.scrollHeight - a.clientHeight, this.contentScrollTop = a.scrollTop, this.iOSNativeScrolling || (this.maxSliderTop = this.paneHeight - this.sliderHeight, this.sliderTop = this.contentScrollTop * this.maxSliderTop / this.maxScrollTop)
            }, i.prototype.createEvents = function() {
                var a = this;
                this.events = {
                    down: function(b) {
                        return a.isBeingDragged = !0, a.offsetY = b.pageY - a.slider.offset().top, a.pane.addClass("active"), a.doc.bind(l, a.events[h]).bind(m, a.events[u]), !1
                    },
                    drag: function(b) {
                        return a.sliderY = b.pageY - a.$el.offset().top - a.offsetY, a.scroll(), a.updateScrollValues(), a.contentScrollTop >= a.maxScrollTop ? a.$el.trigger("scrollend") : 0 === a.contentScrollTop && a.$el.trigger("scrolltop"), !1
                    },
                    up: function() {
                        return a.isBeingDragged = !1, a.pane.removeClass("active"), a.doc.unbind(l, a.events[h]).unbind(m, a.events[u]), !1
                    },
                    resize: function() {
                        a.reset()
                    },
                    panedown: function(b) {
                        return a.sliderY = (b.offsetY || b.originalEvent.layerY) - .5 * a.sliderHeight, a.scroll(), a.events.down(b), !1
                    },
                    scroll: function(b) {
                        a.isBeingDragged || (a.updateScrollValues(), a.iOSNativeScrolling || (a.sliderY = a.sliderTop, a.slider.css({
                            top: a.sliderTop
                        })), null != b && (a.contentScrollTop >= a.maxScrollTop ? (a.options.preventPageScrolling && a.preventScrolling(b, g), a.$el.trigger("scrollend")) : 0 === a.contentScrollTop && (a.options.preventPageScrolling && a.preventScrolling(b, u), a.$el.trigger("scrolltop"))))
                    },
                    wheel: function(b) {
                        var c;
                        if (null != b) return c = b.delta || b.wheelDelta || b.originalEvent && b.originalEvent.wheelDelta || -b.detail || b.originalEvent && -b.originalEvent.detail, c && (a.sliderY += -c / 3), a.scroll(), !1
                    }
                }
            }, i.prototype.addEvents = function() {
                var a;
                this.removeEvents(), a = this.events, this.options.disableResize || this.win.bind(q, a[q]), this.iOSNativeScrolling || (this.slider.bind(k, a[g]), this.pane.bind(k, a[p]).bind("" + n + " " + f, a[v])), this.$content.bind("" + r + " " + n + " " + f + " " + t, a[r])
            }, i.prototype.removeEvents = function() {
                var a;
                a = this.events, this.win.unbind(q, a[q]), this.iOSNativeScrolling || (this.slider.unbind(), this.pane.unbind()), this.$content.unbind("" + r + " " + n + " " + f + " " + t, a[r])
            }, i.prototype.generate = function() {
                var a, b, c, d, f;
                return c = this.options, d = c.paneClass, f = c.sliderClass, a = c.contentClass, !this.$el.find("" + d).length && !this.$el.find("" + f).length && this.$el.append('<div class="' + d + '"><div class="' + f + '" /></div>'), this.pane = this.$el.children("." + d), this.slider = this.pane.find("." + f), e && (b = {
                    right: -e
                }, this.$el.addClass("has-scrollbar")), null != b && this.$content.css(b), this
            }, i.prototype.restore = function() {
                this.stopped = !1, this.pane.show(), this.addEvents()
            }, i.prototype.reset = function() {
                var a, b, c, f, g, h, i, j, k;
                return this.iOSNativeScrolling ? void(this.contentHeight = this.content.scrollHeight) : (this.$el.find("." + this.options.paneClass).length || this.generate().stop(), this.stopped && this.restore(), a = this.content, c = a.style, f = c.overflowY, d && this.$content.css({
                    height: this.$content.height()
                }), b = a.scrollHeight + e, h = this.pane.outerHeight(), j = parseInt(this.pane.css("top"), 10), g = parseInt(this.pane.css("bottom"), 10), i = h + j + g, k = Math.round(i / b * i), k < this.options.sliderMinHeight ? k = this.options.sliderMinHeight : null != this.options.sliderMaxHeight && k > this.options.sliderMaxHeight && (k = this.options.sliderMaxHeight), f === r && c.overflowX !== r && (k += e), this.maxSliderTop = i - k, this.contentHeight = b, this.paneHeight = h, this.paneOuterHeight = i, this.sliderHeight = k, this.slider.height(k), this.events.scroll(), this.pane.show(), this.isActive = !0, a.scrollHeight === a.clientHeight || this.pane.outerHeight(!0) >= a.scrollHeight && f !== r ? (this.pane.hide(), this.isActive = !1) : this.el.clientHeight === a.scrollHeight && f === r ? this.slider.hide() : this.slider.show(), this.pane.css({
                    opacity: this.options.alwaysVisible ? 1 : "",
                    visibility: this.options.alwaysVisible ? "visible" : ""
                }), this)
            }, i.prototype.scroll = function() {
                return this.isActive ? (this.sliderY = Math.max(0, this.sliderY), this.sliderY = Math.min(this.maxSliderTop, this.sliderY), this.$content.scrollTop((this.paneHeight - this.contentHeight + e) * this.sliderY / this.maxSliderTop * -1), this.iOSNativeScrolling || this.slider.css({
                    top: this.sliderY
                }), this) : void 0
            }, i.prototype.scrollBottom = function(a) {
                return this.isActive ? (this.reset(), this.$content.scrollTop(this.contentHeight - this.$content.height() - a).trigger(n), this) : void 0
            }, i.prototype.scrollTop = function(a) {
                return this.isActive ? (this.reset(), this.$content.scrollTop(+a).trigger(n), this) : void 0
            }, i.prototype.scrollTo = function(b) {
                return this.isActive ? (this.reset(), this.scrollTop(a(b).get(0).offsetTop), this) : void 0
            }, i.prototype.stop = function() {
                return this.stopped = !0, this.removeEvents(), this.pane.hide(), this
            }, i.prototype.destroy = function() {
                return this.stopped || this.stop(), this.pane.length && this.pane.remove(), d && this.$content.height(""), this.$content.removeAttr("tabindex"), this.$el.hasClass("has-scrollbar") && (this.$el.removeClass("has-scrollbar"), this.$content.css({
                    right: ""
                })), this
            }, i.prototype.flash = function() {
                var a = this;
                if (this.isActive) return this.reset(), this.pane.addClass("flashed"), setTimeout(function() {
                    a.pane.removeClass("flashed")
                }, this.options.flashDelay), this
            }, i
        }(), a.fn.nanoScroller = function(b) {
            return this.each(function() {
                var c, d;
                if ((d = this.nanoscroller) || (c = a.extend({}, w, b), this.nanoscroller = d = new o(this, c)), b && "object" == typeof b) {
                    if (a.extend(d.options, b), b.scrollBottom) return d.scrollBottom(b.scrollBottom);
                    if (b.scrollTop) return d.scrollTop(b.scrollTop);
                    if (b.scrollTo) return d.scrollTo(b.scrollTo);
                    if ("bottom" === b.scroll) return d.scrollBottom(0);
                    if ("top" === b.scroll) return d.scrollTop(0);
                    if (b.scroll && b.scroll instanceof a) return d.scrollTo(b.scroll);
                    if (b.stop) return d.stop();
                    if (b.destroy) return d.destroy();
                    if (b.flash) return d.flash()
                }
                return d.reset()
            })
        }
    }(jQuery, window, document),
    function(a, b, c) {
        "use strict";

        function d() {
            z = new b, a("img").each(function() {
                var b = a(this).prop("src");
                z.add(new c(b))
            }), z.addProgressListener(function(b) {
                var c = parseInt(b.completedCount / b.totalCount * 100);
                a("#loader span").text(c + "%"), 100 === c && (e(), setTimeout(function() {
                    i(), f()
                }, 1500))
            }), z.start()
        }

        function e() {
            a("#loader").addClass("loaded")
        }

        function f() {
            A = 1, a("#loader").remove(), a("#index").show(), a(".clouds").addClass("out"), a(".clouds .cloud").addClass("wc-opacity-transform"), a(".brain-front").addClass("show wc-opacity-transform"), a(".brain-front img").addClass("wc-opacity-transform"), a(".app-title").addClass("show"), a(".app-title h1").addClass("show"), a(".start-btn").addClass("show")
        }

        function g(b) {
            b.preventDefault(), A = 2, a(".clouds").addClass("step2"), a(".clouds").removeClass("out"), a(".brain-front").addClass("hide"), a(".app-title").addClass("hide"), a(".start").addClass("hide"), a(".brain-front").removeClass("wc-opacity-transform")
        }

        function h() {
            A = 3, a(".clouds").removeClass("step2"), a(".clouds").addClass("step3"), a("#index").addClass("hide")
        }

        function i() {
            a(".brain").on("click", q), a(".close-btn").on("click", r), a(".tab").on("click", s), a(".tab").on("click", l), a(".option").on("click", t), a(".start-btn").on("click", g), a(".levels").on("animationend webkitAnimationEnd", v), a(".brain-front").on("transitionend webkitTransitionEnd", w), a(".splash-screen").on("transitionend webkitTransitionEnd", x), a(".app-title").on("transitionend webkitTransitionEnd", x), a(".app-title h1").on("transitionend webkitTransitionEnd", x), a(".start-btn").on("transitionend webkitTransitionEnd", x), a(".toggle-menu").on("click", m), a(".research-menu").on("click", o), a(".close-modal-btn").on("click", p), a(".menu-item").on("click", n), a(".close-info-btn").on("click", k), a(".killer").on("click", j)
        }

        function j() {
            a("head").append('<link rel="stylesheet" type="text/css" href="css/killer.css">'), a(this).fadeOut(1e3)
        }

        function k() {
            a(".info-block").fadeOut(1e3), a(".tab").removeClass("active"), a(this).fadeOut()
        }

        function l() {
            a(".info-block").fadeIn(1e3), a(".close-info-btn").fadeIn(1e3)
        }

        function m() {
            a(".menu").toggleClass("active"), a(".toggle-menu").toggleClass("active"), a(".toggle-menu span").toggleClass("toggle-menu-move"), a(".toggle-menu span:first-child").toggleClass("toggle-menu-close"), a(".toggle-menu span:last-child").toggleClass("toggle-menu-close-2"), a(".toggle-menu span:nth-child(2)").toggleClass("toggle-menu-close-3")
        }

        function n() {
            a(".menu").removeClass("active"), a(".toggle-menu").removeClass("active"), a(".toggle-menu span").toggleClass("toggle-menu-move"), a(".toggle-menu span:first-child").removeClass("toggle-menu-close"), a(".toggle-menu span:last-child").removeClass("toggle-menu-close-2"), a(".toggle-menu span:nth-child(2)").removeClass("toggle-menu-close-3")
        }

        function o() {
            a(".modal-windows").addClass("show"), a(".close-modal-btn").addClass("show"), a(".modal-windows").nanoScroller();
            var b = a(".option.slick-center").data("id");
            y(b)
        }

        function p() {
            a(".modal-windows").removeClass("show"), a(this).removeClass("show"), y("intro")
        }

        function q() {
            a(this).removeClass("non-active").addClass("active").siblings(".brain").addClass("non-active").removeClass("active"), a(".levels").addClass("active"), a(".information").fadeIn(2e3), u()
        }

        function r() {
            a(".brain").removeClass("active"), a(".brain").removeClass("non-active"), a(".levels").removeClass("active"), a(".information").fadeOut(400);
            var b = a(".option.slick-center").data("id");
            y(b)
        }

        function s(b) {
            a(b.target).addClass("active").siblings(".tab").removeClass("active");
            var c = a(b.target).data("show");
            if (a("#" + c).fadeIn(1e3).siblings().fadeOut(300), !a(this).hasClass("play")) {
                var d = a(".option.slick-center").data("id");
                y(d)
            }
        }

        function t() {
            r();
            var b = parseInt(a(this).data("slick-index"));
            a("#stages-list").slick("slickGoTo", b), u()
        }

        function u() {
            var b = a(".option.slick-center").data("id"),
                c = a(".brain.active");
            if (c.length) {
                var d = c.prop("id");
                a("." + d + "." + b).addClass("active").siblings().removeClass("active")
            }
            a(".changeable." + b).addClass("active").siblings().removeClass("active")
        }

        function v() {
            a(this).addClass("ready"), u()
        }

        function w(a) {
            setTimeout(function() {
                a.originalEvent.propertyName.indexOf("transform") > -1 && 2 === A && h()
            }, 5e3)
        }

        function x(b) {
            "opacity" === b.originalEvent.propertyName && 3 === A && (a(this).remove(), a(".clouds").addClass("out"), setTimeout(function() {
                a("#show").show(), a("#stages-list").slick({
                    slidesToShow: 5,
                    infinite: !0,
                    centerMode: !0,
                    draggable: !1,
                    centerPadding: "0"
                }), a("#stages-list").on("afterChange", function() {
                    r(), u()
                }), u()
            }, 500))
        }

        function y(a) {
            var b = JSON.stringify({
                    event: "command",
                    func: "pauseVideo"
                }),
                c = document.getElementById("video-" + a);
            c && document.getElementById("video-" + a).contentWindow.postMessage(b, "https://www.youtube.com")
        }
        var z, A = 0;
        d()
    }(jQuery, PxLoader, PxLoaderImage);
//# sourceMappingURL=app.min.js.map