/*
    这段脚本可能是用于前端进行页面分割和填充的脚本
 */
(function () {
    var aa = '" style="background-image:url(', ba = "-disabled", ca = "-document.getElementById('",
        da = "/translate_a/t", fa = "/translate_suggestion?client=", ha = '</button></div></div></td></tr><tr id="',
        ia = '</span></td><td class="goog-te-banner-margin"></td><td nowrap><div class="goog-te-button"><div><button id="',
        ja = '<head><meta http-equiv="Content-Type" content="text/html; charset=UTF8"><link rel="stylesheet" type="text/css" href="',
        ka = "Component already rendered", g = "DIV", la = "Edge", ma = "Google Website Translator",
        na = "IFRAME", oa = "INPUT", pa = "INTERNAL_SERVER_ERROR", qa = "OPTION", ra = "Opera", sa = "POST",
        ta = "SCRIPT", ua = "SPAN", va = "TEXTAREA", wa = "TITLE", xa = "Unable to set parent component",
        ya = "[goog.net.IframeIo] Unable to send, already active.", za = "about:blank", Aa = "about:invalid#zClosurez",
        Ba = "about:invalid#zSoyz", Ca = "absolute", Da = "action", Ea = "activedescendant",
        Fa = "activity-form-container", Ga = "alt-edited", Ha = "array", Ia = "auto", Ja = "backgroundImage",
        Ka = "backgroundPosition", La = "blur", Ma = "border-box", Na = "button", Oa = "cancelled",
        Pa = "change", Qa = "character", Ra = "checked", Sa = "chg_tgt_lang", Ta = "click", Ua = "clk_no_ap_site",
        Va = "complete", Wa = "container", Xa = "contextmenu", Ya = "dblclick", Za = "direction", $a = "div",
        ab = "finish", bb = "finishSourceLang", cb = "finishTargetLang", db = "focus", eb = "focusin", fb = "focusout",
        p = "function", gb = "goog-float-bottom", hb = "goog-float-top", ib = "goog-inline-block ",
        jb = "goog-menuheader", kb = "goog-menuseparator", lb = "goog-option", mb = "goog-option-selected",
        nb = "goog-te-menu-value", ob = "goog-te-menu2-item-selected", pb = "goog-te-spinner-animation-show",
        qb = "goog-te-spinner-pos-show", rb = "hidden", sb = "hide", ub = "horizontal",
        vb = "https://translate.google.com", wb = "https://www.google.com/images/cleardot.gif",
        xb = "javascript:void(0)", yb = "keydown", zb = "keypress", Ab = "load", Bb = "mousedown", Cb = "mousemove",
        Db = "mouseout", Eb = "mouseover", Fb = "mouseup", Gb = "move_offscreen", Hb = "none", Ib = "number",
        Jb = "object", Kb = "opacity 1s linear", Lb = "paddingLeft", Mb = "paddingRight", Nb = "position",
        Ob = "progressSection", Pb = "promptSourceLang", Qb = "promptTargetLang", Rb = "ready", Sb = "readystatechange",
        Tb = "rtl", Ub = "selected", Vb = "skiptranslate", Wb = "status-message", Xb = "string", Yb = "submitted",
        Zb = "targetLanguage", $b = "textarea-placeholder-input", ac = "toggle_display", bc = "trans-target-empty",
        cc = "trans-target-highlight", dc = "transition", ec = "translate", fc = "vertical", gc = "visible",
        hc = "withCredentials";

    function ic() {
        return function () {
        }
    }

    function jc(a) {
        return function (b) {
            this[a] = b
        }
    }

    function q(a) {
        return function () {
            return this[a]
        }
    }

    function t(a) {
        return function () {
            return a
        }
    }

    var u, kc = typeof Object.create == p ? Object.create : function (a) {
        function b() {
        }

        b.prototype = a;
        return new b
    }, lc;
    if (typeof Object.setPrototypeOf == p) lc = Object.setPrototypeOf; else {
        var mc;
        a:{
            var nc = {Oh: !0}, oc = {};
            try {
                oc.__proto__ = nc;
                mc = oc.Oh;
                break a
            } catch (a) {
            }
            mc = !1
        }
        lc = mc ? function (a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var pc = lc;

    function qc(a, b) {
        a.prototype = kc(b.prototype);
        a.prototype.constructor = a;
        if (pc) pc(a, b); else for (var c in b) if ("prototype" != c) if (Object.defineProperties) {
            var d = Object.getOwnPropertyDescriptor(b, c);
            d && Object.defineProperty(a, c, d)
        } else a[c] = b[c];
        a.m = b.prototype
    }

    var rc = rc || {}, v = this || self;

    function x(a) {
        return void 0 !== a
    }

    function y(a) {
        return typeof a == Xb
    }

    function sc(a) {
        return typeof a == Ib
    }

    var tc = /^[\w+/_-]+[=]{0,2}$/, uc = null;

    function z() {
    }

    function vc(a) {
        a.Ye = void 0;
        a.X = function () {
            return a.Ye ? a.Ye : a.Ye = new a
        }
    }

    function A(a) {
        var b = typeof a;
        if (b == Jb) if (a) {
            if (a instanceof Array) return Ha;
            if (a instanceof Object) return b;
            var c = Object.prototype.toString.call(a);
            if ("[object Window]" == c) return Jb;
            if ("[object Array]" == c || typeof a.length == Ib && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return Ha;
            if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return p
        } else return "null";
        else if (b == p && "undefined" == typeof a.call) return Jb;
        return b
    }

    function B(a) {
        return A(a) == Ha
    }

    function wc(a) {
        var b = A(a);
        return b == Ha || b == Jb && typeof a.length == Ib
    }

    function xc(a) {
        return A(a) == p
    }

    function yc(a) {
        var b = typeof a;
        return b == Jb && null != a || b == p
    }

    function zc(a) {
        return a[Ac] || (a[Ac] = ++Bc)
    }

    var Ac = "closure_uid_" + (1E9 * Math.random() >>> 0), Bc = 0;

    function Cc(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }

    function Dc(a, b, c) {
        if (!a) throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function () {
                var e = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(e, d);
                return a.apply(b, e)
            }
        }
        return function () {
            return a.apply(b, arguments)
        }
    }

    function C(a, b, c) {
        Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? C = Cc : C = Dc;
        return C.apply(null, arguments)
    }

    function Ec(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function () {
            var d = c.slice();
            d.push.apply(d, arguments);
            return a.apply(this, d)
        }
    }

    var Fc = Date.now || function () {
        return +new Date
    };

    function Gc(a, b) {
        a = a.split(".");
        var c = v;
        a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
        for (var d; a.length && (d = a.shift());) !a.length && x(b) ? c[d] = b : c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {}
    }

    function D(a, b) {
        function c() {
        }

        c.prototype = b.prototype;
        a.m = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a;
        a.Kk = function (d, e, f) {
            for (var h = Array(arguments.length - 2), k = 2; k < arguments.length; k++) h[k - 2] = arguments[k];
            return b.prototype[e].apply(d, h)
        }
    };

    function Hc(a) {
        if (Error.captureStackTrace) Error.captureStackTrace(this, Hc); else {
            var b = Error().stack;
            b && (this.stack = b)
        }
        a && (this.message = String(a))
    }

    D(Hc, Error);
    Hc.prototype.name = "CustomError";
    var Ic, Jc = {ek: 1, Uj: 2, Ak: 3, Xj: 4, gk: 5, fk: 6, sk: 7, Zj: 8, $j: 9, bk: 10, ak: 11, pk: 12};

    function Kc(a, b) {
        a = a.split("%s");
        for (var c = "", d = a.length - 1, e = 0; e < d; e++) c += a[e] + (e < b.length ? b[e] : "%s");
        Hc.call(this, c + a[d])
    }

    D(Kc, Hc);
    Kc.prototype.name = "AssertionError";

    function Lc(a) {
        return a[a.length - 1]
    }

    var Mc = Array.prototype.indexOf ? function (a, b) {
        return Array.prototype.indexOf.call(a, b, void 0)
    } : function (a, b) {
        if (y(a)) return y(b) && 1 == b.length ? a.indexOf(b, 0) : -1;
        for (var c = 0; c < a.length; c++) if (c in a && a[c] === b) return c;
        return -1
    }, Nc = Array.prototype.forEach ? function (a, b, c) {
        Array.prototype.forEach.call(a, b, c)
    } : function (a, b, c) {
        for (var d = a.length, e = y(a) ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a)
    }, Oc = Array.prototype.filter ? function (a, b) {
        return Array.prototype.filter.call(a, b, void 0)
    } : function (a, b) {
        for (var c =
            a.length, d = [], e = 0, f = y(a) ? a.split("") : a, h = 0; h < c; h++) if (h in f) {
            var k = f[h];
            b.call(void 0, k, h, a) && (d[e++] = k)
        }
        return d
    }, Pc = Array.prototype.map ? function (a, b) {
        return Array.prototype.map.call(a, b, void 0)
    } : function (a, b) {
        for (var c = a.length, d = Array(c), e = y(a) ? a.split("") : a, f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f], f, a));
        return d
    }, Qc = Array.prototype.some ? function (a, b) {
        return Array.prototype.some.call(a, b, void 0)
    } : function (a, b) {
        for (var c = a.length, d = y(a) ? a.split("") : a, e = 0; e < c; e++) if (e in d && b.call(void 0, d[e],
            e, a)) return !0;
        return !1
    }, Rc = Array.prototype.every ? function (a, b) {
        return Array.prototype.every.call(a, b, void 0)
    } : function (a, b) {
        for (var c = a.length, d = y(a) ? a.split("") : a, e = 0; e < c; e++) if (e in d && !b.call(void 0, d[e], e, a)) return !1;
        return !0
    };

    function Sc(a, b) {
        a:{
            for (var c = a.length, d = y(a) ? a.split("") : a, e = 0; e < c; e++) if (e in d && b.call(void 0, d[e], e, a)) {
                b = e;
                break a
            }
            b = -1
        }
        return 0 > b ? null : y(a) ? a.charAt(b) : a[b]
    }

    function Tc(a, b) {
        return 0 <= Mc(a, b)
    }

    function Uc(a, b) {
        b = Mc(a, b);
        var c;
        (c = 0 <= b) && Array.prototype.splice.call(a, b, 1);
        return c
    }

    function Vc(a) {
        return Array.prototype.concat.apply([], arguments)
    }

    function Wc(a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    }

    function Xc(a, b, c, d) {
        Array.prototype.splice.apply(a, Yc(arguments, 1))
    }

    function Yc(a, b, c) {
        return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c)
    };

    function Zc(a) {
        var b = !1, c;
        return function () {
            b || (c = a(), b = !0);
            return c
        }
    };

    function $c(a, b, c) {
        for (var d in a) b.call(c, a[d], d, a)
    }

    function ad(a, b) {
        for (var c in a) if (b.call(void 0, a[c], c, a)) return !0;
        return !1
    }

    function bd(a) {
        var b = [], c = 0, d;
        for (d in a) b[c++] = d;
        return b
    }

    function cd(a, b) {
        return null !== a && b in a
    }

    function dd() {
        var a = ed, b;
        for (b in a) return !1;
        return !0
    }

    function fd(a, b, c) {
        if (null !== a && b in a) throw Error('The object already contains the key "' + b + '"');
        a[b] = c
    }

    function gd(a) {
        var b = {}, c;
        for (c in a) b[c] = a[c];
        return b
    }

    var hd = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

    function id(a, b) {
        for (var c, d, e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d) a[c] = d[c];
            for (var f = 0; f < hd.length; f++) c = hd[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    }

    function jd(a) {
        var b = arguments.length;
        if (1 == b && B(arguments[0])) return jd.apply(null, arguments[0]);
        for (var c = {}, d = 0; d < b; d++) c[arguments[d]] = !0;
        return c
    };var kd = {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        command: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
    };

    function ld(a, b) {
        this.a = a === md && b || "";
        this.b = nd
    }

    ld.prototype.gb = !0;
    ld.prototype.La = q("a");
    ld.prototype.toString = function () {
        return "Const{" + this.a + "}"
    };

    function od(a) {
        return a instanceof ld && a.constructor === ld && a.b === nd ? a.a : "type_error:Const"
    }

    var nd = {}, md = {}, pd = new ld(md, "");
    var qd = /^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;

    function rd() {
        this.b = "";
        this.c = sd
    }

    rd.prototype.gb = !0;
    rd.prototype.La = function () {
        return this.b.toString()
    };
    rd.prototype.Ve = !0;
    rd.prototype.a = t(1);

    function td(a) {
        if (a instanceof rd && a.constructor === rd && a.c === sd) return a.b;
        A(a);
        return "type_error:TrustedResourceUrl"
    }

    var ud = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/, sd = {};

    function vd(a) {
        var b = new rd;
        b.b = a;
        return b
    }

    function wd(a, b, c) {
        if (null == c) return b;
        if (y(c)) return c ? a + encodeURIComponent(c) : "";
        for (var d in c) {
            var e = c[d];
            e = B(e) ? e : [e];
            for (var f = 0; f < e.length; f++) {
                var h = e[f];
                null != h && (b || (b = a), b += (b.length > a.length ? "&" : "") + encodeURIComponent(d) + "=" + encodeURIComponent(String(h)))
            }
        }
        return b
    };var xd = String.prototype.trim ? function (a) {
        return a.trim()
    } : function (a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    };

    function yd(a, b) {
        if (b) a = a.replace(zd, "&amp;").replace(Ad, "&lt;").replace(Bd, "&gt;").replace(Cd, "&quot;").replace(Dd, "&#39;").replace(Ed, "&#0;"); else {
            if (!Fd.test(a)) return a;
            -1 != a.indexOf("&") && (a = a.replace(zd, "&amp;"));
            -1 != a.indexOf("<") && (a = a.replace(Ad, "&lt;"));
            -1 != a.indexOf(">") && (a = a.replace(Bd, "&gt;"));
            -1 != a.indexOf('"') && (a = a.replace(Cd, "&quot;"));
            -1 != a.indexOf("'") && (a = a.replace(Dd, "&#39;"));
            -1 != a.indexOf("\x00") && (a = a.replace(Ed, "&#0;"))
        }
        return a
    }

    var zd = /&/g, Ad = /</g, Bd = />/g, Cd = /"/g, Dd = /'/g, Ed = /\x00/g, Fd = /[\x00&<>"']/;

    function Gd(a, b) {
        var c = 0;
        a = xd(String(a)).split(".");
        b = xd(String(b)).split(".");
        for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
            var f = a[e] || "", h = b[e] || "";
            do {
                f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                h = /(\d*)(\D*)(.*)/.exec(h) || ["", "", "", ""];
                if (0 == f[0].length && 0 == h[0].length) break;
                c = Hd(0 == f[1].length ? 0 : parseInt(f[1], 10), 0 == h[1].length ? 0 : parseInt(h[1], 10)) || Hd(0 == f[2].length, 0 == h[2].length) || Hd(f[2], h[2]);
                f = f[3];
                h = h[3]
            } while (0 == c)
        }
        return c
    }

    function Hd(a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    };

    function Id() {
        this.b = "";
        this.c = Jd
    }

    Id.prototype.gb = !0;
    Id.prototype.La = function () {
        return this.b.toString()
    };
    Id.prototype.Ve = !0;
    Id.prototype.a = t(1);

    function Kd(a) {
        if (a instanceof Id && a.constructor === Id && a.c === Jd) return a.b;
        A(a);
        return "type_error:SafeUrl"
    }

    var Ld = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;

    function Md(a) {
        if (a instanceof Id) return a;
        a = typeof a == Jb && a.gb ? a.La() : String(a);
        Ld.test(a) || (a = Aa);
        return Nd(a)
    }

    var Jd = {};

    function Nd(a) {
        var b = new Id;
        b.b = a;
        return b
    }

    Nd(za);

    function Od() {
        this.a = "";
        this.b = Pd
    }

    Od.prototype.gb = !0;
    var Pd = {};
    Od.prototype.La = q("a");

    function Qd(a) {
        if (a instanceof Od && a.constructor === Od && a.b === Pd) return a.a;
        A(a);
        return "type_error:SafeStyle"
    }

    function Rd(a) {
        var b = new Od;
        b.a = a;
        return b
    }

    var Sd = Rd("");

    function Td(a) {
        if (a instanceof Id) return 'url("' + Kd(a).toString().replace(/</g, "%3c").replace(/[\\"]/g, "\\$&") + '")';
        if (a instanceof ld) a = od(a); else {
            a = String(a);
            var b = a.replace(Ud, "$1").replace(Ud, "$1").replace(Vd, "url");
            if (Wd.test(b)) {
                if (b = !Xd.test(a)) {
                    for (var c = b = !0, d = 0; d < a.length; d++) {
                        var e = a.charAt(d);
                        "'" == e && c ? b = !b : '"' == e && b && (c = !c)
                    }
                    b = b && c && Yd(a)
                }
                a = b ? Zd(a) : "zClosurez"
            } else a = "zClosurez"
        }
        if (/[{;}]/.test(a)) throw new Kc("Value does not allow [{;}], got: %s.", [a]);
        return a
    }

    function Yd(a) {
        for (var b = !0, c = /^[-_a-zA-Z0-9]$/, d = 0; d < a.length; d++) {
            var e = a.charAt(d);
            if ("]" == e) {
                if (b) return !1;
                b = !0
            } else if ("[" == e) {
                if (!b) return !1;
                b = !1
            } else if (!b && !c.test(e)) return !1
        }
        return b
    }

    var Wd = /^[-,."'%_!# a-zA-Z0-9\[\]]+$/,
        Vd = /\b(url\([ \t\n]*)('[ -&(-\[\]-~]*'|"[ !#-\[\]-~]*"|[!#-&*-\[\]-~]*)([ \t\n]*\))/g,
        Ud = /\b(hsl|hsla|rgb|rgba|matrix|calc|minmax|fit-content|repeat|(rotate|scale|translate)(X|Y|Z|3d)?)\([-+*/0-9a-z.%\[\], ]+\)/g,
        Xd = /\/\*/;

    function Zd(a) {
        return a.replace(Vd, function (b, c, d, e) {
            var f = "";
            d = d.replace(/^(['"])(.*)\1$/, function (h, k, l) {
                f = k;
                return l
            });
            b = Md(d).La();
            return c + f + b + f + e
        })
    };

    function $d() {
        this.a = "";
        this.b = ae
    }

    $d.prototype.gb = !0;
    var ae = {};
    $d.prototype.La = q("a");

    function be(a) {
        if (a instanceof $d && a.constructor === $d && a.b === ae) return a.a;
        A(a);
        return "type_error:SafeStyleSheet"
    }

    function ce(a) {
        var b = new $d;
        b.a = a;
        return b
    }

    ce("");
    var de;
    a:{
        var ee = v.navigator;
        if (ee) {
            var fe = ee.userAgent;
            if (fe) {
                de = fe;
                break a
            }
        }
        de = ""
    }

    function E(a) {
        return -1 != de.indexOf(a)
    }

    function ge(a) {
        for (var b = /(\w[\w ]+)\/([^\s]+)\s*(?:\((.*?)\))?/g, c = [], d; d = b.exec(a);) c.push([d[1], d[2], d[3] || void 0]);
        return c
    };

    function he() {
        return E("Trident") || E("MSIE")
    }

    function ie() {
        return E("Firefox") || E("FxiOS")
    }

    function je() {
        return (E("Chrome") || E("CriOS")) && !E(la)
    }

    function ke() {
        function a(e) {
            e = Sc(e, d);
            return c[e] || ""
        }

        var b = de;
        if (!he()) {
            b = ge(b);
            var c = {};
            Nc(b, function (e) {
                c[e[0]] = e[1]
            });
            var d = Ec(cd, c);
            E(ra) ? a(["Version", ra]) : E(la) ? a([la]) : je() && a(["Chrome", "CriOS"])
        }
    };

    function le() {
        this.b = "";
        this.f = me;
        this.c = null
    }

    le.prototype.Ve = !0;
    le.prototype.a = q("c");
    le.prototype.gb = !0;
    le.prototype.La = function () {
        return this.b.toString()
    };

    function ne(a) {
        if (a instanceof le && a.constructor === le && a.f === me) return a.b;
        A(a);
        return "type_error:SafeHtml"
    }

    function oe(a) {
        if (a instanceof le) return a;
        var b = typeof a == Jb, c = null;
        b && a.Ve && (c = a.a());
        return pe(yd(b && a.gb ? a.La() : String(a)), c)
    }

    var qe = /^[a-zA-Z0-9-]+$/,
        re = {action: !0, cite: !0, data: !0, formaction: !0, href: !0, manifest: !0, poster: !0, src: !0}, se = {
            APPLET: !0,
            BASE: !0,
            EMBED: !0,
            IFRAME: !0,
            LINK: !0,
            MATH: !0,
            META: !0,
            OBJECT: !0,
            SCRIPT: !0,
            STYLE: !0,
            SVG: !0,
            TEMPLATE: !0
        };

    function te(a, b) {
        var c = String(a);
        if (!qe.test(c)) throw Error("Invalid tag name <" + c + ">.");
        if (c.toUpperCase() in se) throw Error("Tag name <" + c + "> is not allowed for SafeHtml.");
        a = String(a);
        c = null;
        var d = "<" + a, e = "";
        if (b) for (n in b) {
            if (!qe.test(n)) throw Error('Invalid attribute name "' + n + '".');
            var f = b[n];
            if (null != f) {
                var h = a;
                var k = n;
                var l = f;
                if (l instanceof ld) l = od(l); else if ("style" == k.toLowerCase()) {
                    f = void 0;
                    h = l;
                    if (!yc(h)) throw Error('The "style" attribute requires goog.html.SafeStyle or map of style properties, ' +
                        typeof h + " given: " + h);
                    if (!(h instanceof Od)) {
                        l = "";
                        for (f in h) {
                            if (!/^[-_a-zA-Z0-9]+$/.test(f)) throw Error("Name allows only [-_a-zA-Z0-9], got: " + f);
                            var m = h[f];
                            null != m && (m = B(m) ? Pc(m, Td).join(" ") : Td(m), l += f + ":" + m + ";")
                        }
                        h = l ? Rd(l) : Sd
                    }
                    l = Qd(h)
                } else {
                    if (/^on/i.test(k)) throw Error('Attribute "' + k + '" requires goog.string.Const value, "' + l + '" given.');
                    if (k.toLowerCase() in re) if (l instanceof rd) l = td(l).toString(); else if (l instanceof Id) l = Kd(l).toString(); else if (y(l)) l = Md(l).La(); else throw Error('Attribute "' +
                        k + '" on tag "' + h + '" requires goog.html.SafeUrl, goog.string.Const, or string, value "' + l + '" given.');
                }
                l.gb && (l = l.La());
                k = k + '="' + yd(String(l)) + '"';
                e += " " + k
            }
        }
        var n = d + e;
        d = void 0;
        null != d ? B(d) || (d = [d]) : d = [];
        !0 === kd[a.toLowerCase()] ? n += ">" : (c = ue(d), n += ">" + ne(c).toString() + "</" + a + ">", c = c.a());
        (b = b && b.dir) && (/^(ltr|rtl|auto)$/i.test(b) ? c = 0 : c = null);
        return ve(n, c)
    }

    function we(a) {
        function b(f) {
            B(f) ? Nc(f, b) : (f = oe(f), e.push(ne(f).toString()), f = f.a(), 0 == d ? d = f : 0 != f && d != f && (d = null))
        }

        var c = oe(xe), d = c.a(), e = [];
        Nc(a, b);
        return pe(e.join(ne(c).toString()), d)
    }

    function ue(a) {
        return we(Array.prototype.slice.call(arguments))
    }

    var me = {};

    function pe(a, b) {
        return ve(a, b)
    }

    function ve(a, b) {
        var c = new le;
        c.b = a;
        c.c = b;
        return c
    }

    ve("<!DOCTYPE html>", 0);
    var xe = ve("", 0), ye = ve("<br>", 0);
    var ze = Zc(function () {
        var a = document.createElement($a), b = document.createElement($a);
        b.appendChild(document.createElement($a));
        a.appendChild(b);
        b = a.firstChild.firstChild;
        a.innerHTML = ne(xe);
        return !b.parentElement
    });

    function Ae(a, b) {
        if (ze()) for (; a.lastChild;) a.removeChild(a.lastChild);
        a.innerHTML = ne(b)
    }

    function Be(a, b) {
        b instanceof Id || b instanceof Id || (b = typeof b == Jb && b.gb ? b.La() : String(b), Ld.test(b) || (b = Aa), b = Nd(b));
        a.action = Kd(b)
    }

    function Ce(a) {
        var b = vd(od(pd));
        a.src = td(b).toString()
    }

    function De(a, b) {
        a.src = td(b);
        if (null === uc) b:{
            b = v.document;
            if ((b = b.querySelector && b.querySelector("script[nonce]")) && (b = b.nonce || b.getAttribute("nonce")) && tc.test(b)) {
                uc = b;
                break b
            }
            uc = ""
        }
        b = uc;
        b && a.setAttribute("nonce", b)
    };

    function Ee(a) {
        return a.replace(/\xa0|[ \t]+/g, " ")
    }

    function Fe(a) {
        return a.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "")
    }

    function Ge(a) {
        return a.replace(/^[\s\xa0]+/, "")
    }

    function He(a) {
        return a.replace(/[\s\xa0]+$/, "")
    }

    function Ie(a) {
        return encodeURIComponent(String(a))
    }

    function Je(a) {
        return decodeURIComponent(a.replace(/\+/g, " "))
    }

    function Ke(a) {
        return a = yd(a, void 0)
    }

    function Le(a) {
        return -1 != a.indexOf("&") ? "document" in v ? Me(a) : Ne(a) : a
    }

    function Me(a) {
        var b = {"&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"'};
        var c = v.document.createElement($a);
        return a.replace(Oe, function (d, e) {
            var f = b[d];
            if (f) return f;
            "#" == e.charAt(0) && (e = Number("0" + e.substr(1)), isNaN(e) || (f = String.fromCharCode(e)));
            f || (f = ve(d + " ", null), Ae(c, f), f = c.firstChild.nodeValue.slice(0, -1));
            return b[d] = f
        })
    }

    function Ne(a) {
        return a.replace(/&([^;]+);/g, function (b, c) {
            switch (c) {
                case "amp":
                    return "&";
                case "lt":
                    return "<";
                case "gt":
                    return ">";
                case "quot":
                    return '"';
                default:
                    return "#" != c.charAt(0) || (c = Number("0" + c.substr(1)), isNaN(c)) ? b : String.fromCharCode(c)
            }
        })
    }

    var Oe = /&([^;\s<&]+);?/g;

    function Pe(a) {
        return String(a).replace(/\-([a-z])/g, function (b, c) {
            return c.toUpperCase()
        })
    }

    function Qe(a) {
        var b = y(void 0) ? "undefined".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08") : "\\s";
        return a.replace(new RegExp("(^" + (b ? "|[" + b + "]+" : "") + ")([a-z])", "g"), function (c, d, e) {
            return d + e.toUpperCase()
        })
    };

    function Re() {
        return E("iPhone") && !E("iPod") && !E("iPad")
    }

    function Se() {
        return Re() || E("iPad") || E("iPod")
    };

    function Te(a) {
        Te[" "](a);
        return a
    }

    Te[" "] = z;

    function Ue(a, b) {
        try {
            return Te(a[b]), !0
        } catch (c) {
        }
        return !1
    }

    function Ve(a, b) {
        var c = We;
        return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a)
    };var Xe = E(ra), F = he(), Ye = E(la), Ze = Ye || F,
        I = E("Gecko") && !(-1 != de.toLowerCase().indexOf("webkit") && !E(la)) && !(E("Trident") || E("MSIE")) && !E(la),
        J = -1 != de.toLowerCase().indexOf("webkit") && !E(la), $e = J && E("Mobile"), af = E("Macintosh"),
        bf = E("Windows"), cf = E("Android"), df = Re(), ef = E("iPad"), gf = E("iPod"), hf = Se();

    function jf() {
        var a = v.document;
        return a ? a.documentMode : void 0
    }

    var kf;
    a:{
        var lf = "", mf = function () {
            var a = de;
            if (I) return /rv:([^\);]+)(\)|;)/.exec(a);
            if (Ye) return /Edge\/([\d\.]+)/.exec(a);
            if (F) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
            if (J) return /WebKit\/(\S+)/.exec(a);
            if (Xe) return /(?:Version)[ \/]?(\S+)/.exec(a)
        }();
        mf && (lf = mf ? mf[1] : "");
        if (F) {
            var nf = jf();
            if (null != nf && nf > parseFloat(lf)) {
                kf = String(nf);
                break a
            }
        }
        kf = lf
    }
    var of = kf, We = {};

    function K(a) {
        return Ve(a, function () {
            return 0 <= Gd(of, a)
        })
    }

    function pf(a) {
        return Number(qf) >= a
    }

    var rf;
    var sf = v.document;
    rf = sf && F ? jf() || ("CSS1Compat" == sf.compatMode ? parseInt(of, 10) : 5) : void 0;
    var qf = rf;
    var tf = ie(), uf = Re() || E("iPod"), vf = E("iPad"), wf = E("Android") && !(je() || ie() || E(ra) || E("Silk")),
        xf = je(),
        yf = E("Safari") && !(je() || E("Coast") || E(ra) || E(la) || ie() || E("Silk") || E("Android")) && !Se();
    var L = {uc: null, fd: null, pe: null, he: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"};
    L.Mf = L.he + "+/=";
    L.Nf = L.he + "-_.";
    L.Jf = I || J && !yf || Xe;
    L.xh = L.Jf || typeof v.btoa == p;
    L.wh = L.Jf || !yf && !F && typeof v.atob == p;
    L.Yh = function (a, b) {
        wc(a);
        L.Ld();
        b = b ? L.pe : L.uc;
        for (var c = [], d = 0; d < a.length; d += 3) {
            var e = a[d], f = d + 1 < a.length, h = f ? a[d + 1] : 0, k = d + 2 < a.length, l = k ? a[d + 2] : 0,
                m = e >> 2;
            e = (e & 3) << 4 | h >> 4;
            h = (h & 15) << 2 | l >> 6;
            l &= 63;
            k || (l = 64, f || (h = 64));
            c.push(b[m], b[e], b[h], b[l])
        }
        return c.join("")
    };
    L.Pk = function (a, b) {
        if (L.xh && !b) a = v.btoa(a); else {
            for (var c = [], d = 0, e = 0; e < a.length; e++) {
                var f = a.charCodeAt(e);
                255 < f && (c[d++] = f & 255, f >>= 8);
                c[d++] = f
            }
            a = L.Yh(c, b)
        }
        return a
    };
    L.Vh = function (a) {
        if (L.wh) return v.atob(a);
        var b = "";
        L.te(a, function (c) {
            b += String.fromCharCode(c)
        });
        return b
    };
    L.Mk = function (a) {
        var b = [];
        L.te(a, function (c) {
            b.push(c)
        });
        return b
    };
    L.Nk = function (a) {
        var b = a.length, c = 0;
        "=" === a[b - 2] ? c = 2 : "=" === a[b - 1] && (c = 1);
        var d = new Uint8Array(Math.ceil(3 * b / 4) - c), e = 0;
        L.te(a, function (f) {
            d[e++] = f
        });
        return d.subarray(0, e)
    };
    L.te = function (a, b) {
        function c(l) {
            for (; d < a.length;) {
                var m = a.charAt(d++), n = L.fd[m];
                if (null != n) return n;
                if (!/^[\s\xa0]*$/.test(m)) throw Error("Unknown base64 encoding at char: " + m);
            }
            return l
        }

        L.Ld();
        for (var d = 0; ;) {
            var e = c(-1), f = c(0), h = c(64), k = c(64);
            if (64 === k && -1 === e) break;
            b(e << 2 | f >> 4);
            64 != h && (b(f << 4 & 240 | h >> 2), 64 != k && b(h << 6 & 192 | k))
        }
    };
    L.Ld = function () {
        if (!L.uc) {
            L.uc = {};
            L.fd = {};
            L.pe = {};
            for (var a = 0; a < L.Mf.length; a++) L.uc[a] = L.Mf.charAt(a), L.fd[L.uc[a]] = a, L.pe[a] = L.Nf.charAt(a), a >= L.he.length && (L.fd[L.Nf.charAt(a)] = a)
        }
    };

    function zf() {
    }

    var Af = typeof Uint8Array == p;

    function Bf(a, b, c) {
        a.a = null;
        b || (b = []);
        a.l = void 0;
        a.f = -1;
        a.b = b;
        a:{
            if (b = a.b.length) {
                --b;
                var d = a.b[b];
                if (!(null === d || typeof d != Jb || B(d) || Af && d instanceof Uint8Array)) {
                    a.g = b - a.f;
                    a.c = d;
                    break a
                }
            }
            a.g = Number.MAX_VALUE
        }
        a.h = {};
        if (c) for (b = 0; b < c.length; b++) d = c[b], d < a.g ? (d += a.f, a.b[d] = a.b[d] || Cf) : (Df(a), a.c[d] = a.c[d] || Cf)
    }

    var Cf = [];

    function Df(a) {
        var b = a.g + a.f;
        a.b[b] || (a.c = a.b[b] = {})
    }

    function Ef(a, b) {
        if (b < a.g) {
            b += a.f;
            var c = a.b[b];
            return c === Cf ? a.b[b] = [] : c
        }
        if (a.c) return c = a.c[b], c === Cf ? a.c[b] = [] : c
    }

    function Ff(a, b, c) {
        b < a.g ? a.b[b + a.f] = c : (Df(a), a.c[b] = c)
    }

    function Gf(a, b, c) {
        a.a || (a.a = {});
        var d = c ? c.Gb() : c;
        a.a[b] = c;
        Ff(a, b, d)
    }

    function Hf(a, b, c) {
        a.a || (a.a = {});
        if (!a.a[b]) {
            for (var d = Ef(a, b), e = [], f = 0; f < d.length; f++) e[f] = new c(d[f]);
            a.a[b] = e
        }
        (d = a.a[b]) || (d = a.a[b] = []);
        c = new c;
        a = Ef(a, b);
        d.push(c);
        a.push(c.Gb());
        return c
    }

    function If(a) {
        if (a.a) for (var b in a.a) {
            var c = a.a[b];
            if (B(c)) for (var d = 0; d < c.length; d++) c[d] && c[d].Gb(); else c && c.Gb()
        }
    }

    zf.prototype.Gb = function () {
        If(this);
        return this.b
    };
    zf.prototype.toString = function () {
        If(this);
        return this.b.toString()
    };

    function Jf(a) {
        if (a.classList) return a.classList;
        a = a.className;
        return y(a) && a.match(/\S+/g) || []
    }

    function Kf(a, b) {
        return a.classList ? a.classList.contains(b) : Tc(Jf(a), b)
    }

    function M(a, b) {
        a.classList ? a.classList.add(b) : Kf(a, b) || (a.className += 0 < a.className.length ? " " + b : b)
    }

    function Lf(a, b) {
        if (a.classList) Nc(b, function (e) {
            M(a, e)
        }); else {
            var c = {};
            Nc(Jf(a), function (e) {
                c[e] = !0
            });
            Nc(b, function (e) {
                c[e] = !0
            });
            a.className = "";
            for (var d in c) a.className += 0 < a.className.length ? " " + d : d
        }
    }

    function Mf(a, b) {
        a.classList ? a.classList.remove(b) : Kf(a, b) && (a.className = Oc(Jf(a), function (c) {
            return c != b
        }).join(" "))
    }

    function Nf(a, b) {
        a.classList ? Nc(b, function (c) {
            Mf(a, c)
        }) : a.className = Oc(Jf(a), function (c) {
            return !Tc(b, c)
        }).join(" ")
    };var Of = !F || pf(9), Pf = !I && !F || F && pf(9) || I && K("1.9.1"), Qf = F && !K("9"), Rf = F || Xe || J,
        Sf = F && !pf(9);

    function N(a, b) {
        this.x = x(a) ? a : 0;
        this.y = x(b) ? b : 0
    }

    function Tf(a) {
        return new N(a.x, a.y)
    }

    function Uf(a, b) {
        return new N(a.x - b.x, a.y - b.y)
    }

    N.prototype.ceil = function () {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    };
    N.prototype.floor = function () {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    };
    N.prototype.round = function () {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    };
    N.prototype.translate = function (a, b) {
        a instanceof N ? (this.x += a.x, this.y += a.y) : (this.x += Number(a), sc(b) && (this.y += b));
        return this
    };

    function Vf(a, b) {
        this.width = a;
        this.height = b
    }

    Vf.prototype.aspectRatio = function () {
        return this.width / this.height
    };
    Vf.prototype.ceil = function () {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    Vf.prototype.floor = function () {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    Vf.prototype.round = function () {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };

    function Wf(a) {
        return a ? new Xf(O(a)) : Ic || (Ic = new Xf)
    }

    function Yf(a, b) {
        return y(b) ? a.getElementById(b) : b
    }

    function Zf(a, b) {
        return (b || document).getElementsByTagName(String(a))
    }

    function $f() {
        var a = document;
        return a.querySelectorAll && a.querySelector ? a.querySelectorAll(".alt-edited") : ag(document, "*", Ga, void 0)
    }

    function bg(a, b) {
        var c = b || document;
        if (c.getElementsByClassName) a = c.getElementsByClassName(a)[0]; else {
            c = document;
            var d = b || c;
            a = d.querySelectorAll && d.querySelector && a ? d.querySelector(a ? "." + a : "") : ag(c, "*", a, b)[0] || null
        }
        return a || null
    }

    function ag(a, b, c, d) {
        a = d || a;
        b = b && "*" != b ? String(b).toUpperCase() : "";
        if (a.querySelectorAll && a.querySelector && (b || c)) return a.querySelectorAll(b + (c ? "." + c : ""));
        if (c && a.getElementsByClassName) {
            a = a.getElementsByClassName(c);
            if (b) {
                d = {};
                for (var e = 0, f = 0, h; h = a[f]; f++) b == h.nodeName && (d[e++] = h);
                d.length = e;
                return d
            }
            return a
        }
        a = a.getElementsByTagName(b || "*");
        if (c) {
            d = {};
            for (f = e = 0; h = a[f]; f++) b = h.className, typeof b.split == p && Tc(b.split(/\s+/), c) && (d[e++] = h);
            d.length = e;
            return d
        }
        return a
    }

    function cg(a, b) {
        $c(b, function (c, d) {
            c && typeof c == Jb && c.gb && (c = c.La());
            "style" == d ? a.style.cssText = c : "class" == d ? a.className = c : "for" == d ? a.htmlFor = c : dg.hasOwnProperty(d) ? a.setAttribute(dg[d], c) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, c) : a[d] = c
        })
    }

    var dg = {
        cellpadding: "cellPadding",
        cellspacing: "cellSpacing",
        colspan: "colSpan",
        frameborder: "frameBorder",
        height: "height",
        maxlength: "maxLength",
        nonce: "nonce",
        role: "role",
        rowspan: "rowSpan",
        type: "type",
        usemap: "useMap",
        valign: "vAlign",
        width: "width"
    };

    function eg(a) {
        a = a.document;
        a = fg(a) ? a.documentElement : a.body;
        return new Vf(a.clientWidth, a.clientHeight)
    }

    function gg(a) {
        var b = hg(a);
        a = a.parentWindow || a.defaultView;
        return F && K("10") && a.pageYOffset != b.scrollTop ? new N(b.scrollLeft, b.scrollTop) : new N(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop)
    }

    function hg(a) {
        return a.scrollingElement ? a.scrollingElement : !J && fg(a) ? a.documentElement : a.body || a.documentElement
    }

    function ig(a) {
        return a ? a.parentWindow || a.defaultView : window
    }

    function jg(a, b, c) {
        return kg(document, arguments)
    }

    function kg(a, b) {
        var c = String(b[0]), d = b[1];
        if (!Of && d && (d.name || d.type)) {
            c = ["<", c];
            d.name && c.push(' name="', Ke(d.name), '"');
            if (d.type) {
                c.push(' type="', Ke(d.type), '"');
                var e = {};
                id(e, d);
                delete e.type;
                d = e
            }
            c.push(">");
            c = c.join("")
        }
        c = a.createElement(c);
        d && (y(d) ? c.className = d : B(d) ? c.className = d.join(" ") : cg(c, d));
        2 < b.length && lg(a, c, b, 2);
        return c
    }

    function lg(a, b, c, d) {
        function e(h) {
            h && b.appendChild(y(h) ? a.createTextNode(h) : h)
        }

        for (; d < c.length; d++) {
            var f = c[d];
            !wc(f) || yc(f) && 0 < f.nodeType ? e(f) : Nc(mg(f) ? Wc(f) : f, e)
        }
    }

    function ng() {
        var a = te("WBR"), b = document, c = b.createElement(g);
        F ? (a = ue(ye, a), Ae(c, a), c.removeChild(c.firstChild)) : Ae(c, a);
        if (1 == c.childNodes.length) c = c.removeChild(c.firstChild); else {
            for (b = b.createDocumentFragment(); c.firstChild;) b.appendChild(c.firstChild);
            c = b
        }
        return c
    }

    function fg(a) {
        return "CSS1Compat" == a.compatMode
    }

    function og(a) {
        if (1 != a.nodeType) return !1;
        switch (a.tagName) {
            case "APPLET":
            case "AREA":
            case "BASE":
            case "BR":
            case "COL":
            case "COMMAND":
            case "EMBED":
            case "FRAME":
            case "HR":
            case "IMG":
            case oa:
            case na:
            case "ISINDEX":
            case "KEYGEN":
            case "LINK":
            case "NOFRAMES":
            case "NOSCRIPT":
            case "META":
            case "OBJECT":
            case "PARAM":
            case ta:
            case "SOURCE":
            case "STYLE":
            case "TRACK":
            case "WBR":
                return !1
        }
        return !0
    }

    function pg(a, b) {
        lg(O(a), a, arguments, 1)
    }

    function qg(a) {
        for (var b; b = a.firstChild;) a.removeChild(b)
    }

    function rg(a, b) {
        b.parentNode && b.parentNode.insertBefore(a, b)
    }

    function sg(a, b) {
        b.parentNode && b.parentNode.insertBefore(a, b.nextSibling)
    }

    function tg(a) {
        a && a.parentNode && a.parentNode.removeChild(a)
    }

    function ug(a) {
        return Pf && void 0 != a.children ? a.children : Oc(a.childNodes, function (b) {
            return 1 == b.nodeType
        })
    }

    function vg(a) {
        return x(a.firstElementChild) ? a.firstElementChild : wg(a.firstChild, !0)
    }

    function wg(a, b) {
        for (; a && 1 != a.nodeType;) a = b ? a.nextSibling : a.previousSibling;
        return a
    }

    function xg(a) {
        return yc(a) && 1 == a.nodeType
    }

    function yg(a, b) {
        if (!a || !b) return !1;
        if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
        if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
        for (; b && a != b;) b = b.parentNode;
        return b == a
    }

    function zg(a, b) {
        if (a == b) return 0;
        if (a.compareDocumentPosition) return a.compareDocumentPosition(b) & 2 ? 1 : -1;
        if (F && !pf(9)) {
            if (9 == a.nodeType) return -1;
            if (9 == b.nodeType) return 1
        }
        if ("sourceIndex" in a || a.parentNode && "sourceIndex" in a.parentNode) {
            var c = 1 == a.nodeType, d = 1 == b.nodeType;
            if (c && d) return a.sourceIndex - b.sourceIndex;
            var e = a.parentNode, f = b.parentNode;
            return e == f ? Ag(a, b) : !c && yg(e, b) ? -1 * Bg(a, b) : !d && yg(f, a) ? Bg(b, a) : (c ? a.sourceIndex : e.sourceIndex) - (d ? b.sourceIndex : f.sourceIndex)
        }
        d = O(a);
        c = d.createRange();
        c.selectNode(a);
        c.collapse(!0);
        a = d.createRange();
        a.selectNode(b);
        a.collapse(!0);
        return c.compareBoundaryPoints(v.Range.START_TO_END, a)
    }

    function Bg(a, b) {
        var c = a.parentNode;
        if (c == b) return -1;
        for (; b.parentNode != c;) b = b.parentNode;
        return Ag(b, a)
    }

    function Ag(a, b) {
        for (; b = b.previousSibling;) if (b == a) return -1;
        return 1
    }

    function Cg(a) {
        var b, c = arguments.length;
        if (!c) return null;
        if (1 == c) return arguments[0];
        var d = [], e = Infinity;
        for (b = 0; b < c; b++) {
            for (var f = [], h = arguments[b]; h;) f.unshift(h), h = h.parentNode;
            d.push(f);
            e = Math.min(e, f.length)
        }
        f = null;
        for (b = 0; b < e; b++) {
            h = d[0][b];
            for (var k = 1; k < c; k++) if (h != d[k][b]) return f;
            f = h
        }
        return f
    }

    function O(a) {
        return 9 == a.nodeType ? a : a.ownerDocument || a.document
    }

    function Dg(a) {
        return a.contentDocument || a.contentWindow.document
    }

    function Eg(a) {
        try {
            return a.contentWindow || (a.contentDocument ? ig(a.contentDocument) : null)
        } catch (b) {
        }
        return null
    }

    function Fg(a, b) {
        if ("textContent" in a) a.textContent = b; else if (3 == a.nodeType) a.data = String(b); else if (a.firstChild && 3 == a.firstChild.nodeType) {
            for (; a.lastChild != a.firstChild;) a.removeChild(a.lastChild);
            a.firstChild.data = String(b)
        } else qg(a), a.appendChild(O(a).createTextNode(String(b)))
    }

    var Gg = {SCRIPT: 1, STYLE: 1, HEAD: 1, IFRAME: 1, OBJECT: 1}, Hg = {IMG: " ", BR: "\n"};

    function Ig(a, b) {
        b ? a.tabIndex = 0 : (a.tabIndex = -1, a.removeAttribute("tabIndex"))
    }

    function Jg(a) {
        return F && !K("9") ? (a = a.getAttributeNode("tabindex"), null != a && a.specified) : a.hasAttribute("tabindex")
    }

    function Kg(a) {
        a = a.tabIndex;
        return sc(a) && 0 <= a && 32768 > a
    }

    function Lg(a) {
        if (Qf && null !== a && "innerText" in a) a = a.innerText.replace(/(\r\n|\r|\n)/g, "\n"); else {
            var b = [];
            Mg(a, b, !0);
            a = b.join("")
        }
        a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
        a = a.replace(/\u200B/g, "");
        Qf || (a = a.replace(/ +/g, " "));
        " " != a && (a = a.replace(/^\s*/, ""));
        return a
    }

    function Ng(a) {
        var b = [];
        Mg(a, b, !1);
        return b.join("")
    }

    function Mg(a, b, c) {
        if (!(a.nodeName in Gg)) if (3 == a.nodeType) c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue); else if (a.nodeName in Hg) b.push(Hg[a.nodeName]); else for (a = a.firstChild; a;) Mg(a, b, c), a = a.nextSibling
    }

    function mg(a) {
        if (a && typeof a.length == Ib) {
            if (yc(a)) return typeof a.item == p || typeof a.item == Xb;
            if (xc(a)) return typeof a.item == p
        }
        return !1
    }

    function Xf(a) {
        this.a = a || v.document || document
    }

    u = Xf.prototype;
    u.j = function (a) {
        return Yf(this.a, a)
    };
    u.D = function (a, b, c) {
        return kg(this.a, arguments)
    };

    function Og(a, b) {
        return a.a.createElement(String(b))
    }

    function Pg(a) {
        a = a.a;
        return a.parentWindow || a.defaultView
    }

    u.appendChild = function (a, b) {
        a.appendChild(b)
    };
    u.Qc = qg;
    u.di = ug;
    u.hg = vg;
    u.contains = yg;
    u.ib = Fg;
    u.jg = Lg;

    function Qg(a, b, c, d) {
        this.top = a;
        this.right = b;
        this.bottom = c;
        this.left = d
    }

    u = Qg.prototype;
    u.contains = function (a) {
        return this && a ? a instanceof Qg ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
    };
    u.ceil = function () {
        this.top = Math.ceil(this.top);
        this.right = Math.ceil(this.right);
        this.bottom = Math.ceil(this.bottom);
        this.left = Math.ceil(this.left);
        return this
    };
    u.floor = function () {
        this.top = Math.floor(this.top);
        this.right = Math.floor(this.right);
        this.bottom = Math.floor(this.bottom);
        this.left = Math.floor(this.left);
        return this
    };
    u.round = function () {
        this.top = Math.round(this.top);
        this.right = Math.round(this.right);
        this.bottom = Math.round(this.bottom);
        this.left = Math.round(this.left);
        return this
    };
    u.translate = function (a, b) {
        a instanceof N ? (this.left += a.x, this.right += a.x, this.top += a.y, this.bottom += a.y) : (this.left += a, this.right += a, sc(b) && (this.top += b, this.bottom += b));
        return this
    };

    function Rg(a, b, c, d) {
        this.left = a;
        this.top = b;
        this.width = c;
        this.height = d
    }

    u = Rg.prototype;
    u.contains = function (a) {
        return a instanceof N ? a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height : this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height
    };
    u.ceil = function () {
        this.left = Math.ceil(this.left);
        this.top = Math.ceil(this.top);
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    u.floor = function () {
        this.left = Math.floor(this.left);
        this.top = Math.floor(this.top);
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    u.round = function () {
        this.left = Math.round(this.left);
        this.top = Math.round(this.top);
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    u.translate = function (a, b) {
        a instanceof N ? (this.left += a.x, this.top += a.y) : (this.left += a, sc(b) && (this.top += b));
        return this
    };

    function P(a, b, c) {
        if (y(b)) (b = Sg(a, b)) && (a.style[b] = c); else for (var d in b) {
            c = a;
            var e = b[d], f = Sg(c, d);
            f && (c.style[f] = e)
        }
    }

    var Tg = {};

    function Sg(a, b) {
        var c = Tg[b];
        if (!c) {
            var d = Pe(b);
            c = d;
            void 0 === a.style[d] && (d = (J ? "Webkit" : I ? "Moz" : F ? "ms" : Xe ? "O" : null) + Qe(d), void 0 !== a.style[d] && (c = d));
            Tg[b] = c
        }
        return c
    }

    function Ug(a, b) {
        var c = O(a);
        return c.defaultView && c.defaultView.getComputedStyle && (a = c.defaultView.getComputedStyle(a, null)) ? a[b] || a.getPropertyValue(b) || "" : ""
    }

    function Vg(a, b) {
        return Ug(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b]
    }

    function Wg(a, b, c) {
        if (b instanceof N) {
            var d = b.x;
            b = b.y
        } else d = b, b = c;
        a.style.left = Xg(d);
        a.style.top = Xg(b)
    }

    function Yg(a) {
        a = a ? O(a) : document;
        return !F || pf(9) || fg(Wf(a).a) ? a.documentElement : a.body
    }

    function Zg(a) {
        try {
            var b = a.getBoundingClientRect()
        } catch (c) {
            return {left: 0, top: 0, right: 0, bottom: 0}
        }
        F && a.ownerDocument.body && (a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop);
        return b
    }

    function $g(a) {
        if (F && !pf(8)) return a.offsetParent;
        var b = O(a), c = Vg(a, Nb), d = "fixed" == c || c == Ca;
        for (a = a.parentNode; a && a != b; a = a.parentNode) if (11 == a.nodeType && a.host && (a = a.host), c = Vg(a, Nb), d = d && "static" == c && a != b.documentElement && a != b.body, !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || c == Ca || "relative" == c)) return a;
        return null
    }

    function ah(a) {
        for (var b = new Qg(0, Infinity, Infinity, 0), c = Wf(a), d = c.a.body, e = c.a.documentElement, f = hg(c.a); a = $g(a);) if (!(F && 0 == a.clientWidth || J && 0 == a.clientHeight && a == d) && a != d && a != e && Vg(a, "overflow") != gc) {
            var h = bh(a), k = new N(a.clientLeft, a.clientTop);
            h.x += k.x;
            h.y += k.y;
            b.top = Math.max(b.top, h.y);
            b.right = Math.min(b.right, h.x + a.clientWidth);
            b.bottom = Math.min(b.bottom, h.y + a.clientHeight);
            b.left = Math.max(b.left, h.x)
        }
        d = f.scrollLeft;
        f = f.scrollTop;
        b.left = Math.max(b.left, d);
        b.top = Math.max(b.top, f);
        c = eg(Pg(c) ||
            window);
        b.right = Math.min(b.right, d + c.width);
        b.bottom = Math.min(b.bottom, f + c.height);
        return 0 <= b.top && 0 <= b.left && b.bottom > b.top && b.right > b.left ? b : null
    }

    function bh(a) {
        var b = O(a), c = new N(0, 0), d = Yg(b);
        if (a == d) return c;
        a = Zg(a);
        b = gg(Wf(b).a);
        c.x = a.left + b.x;
        c.y = a.top + b.y;
        return c
    }

    function ch(a, b) {
        var c = new N(0, 0), d = ig(O(a));
        if (!Ue(d, "parent")) return c;
        do {
            if (d == b) var e = bh(a); else e = Zg(a), e = new N(e.left, e.top);
            c.x += e.x;
            c.y += e.y
        } while (d && d != b && d != d.parent && (a = d.frameElement) && (d = d.parent));
        return c
    }

    function Xg(a) {
        typeof a == Ib && (a += "px");
        return a
    }

    function dh(a) {
        var b = eh;
        if (Vg(a, "display") != Hb) return b(a);
        var c = a.style, d = c.display, e = c.visibility, f = c.position;
        c.visibility = rb;
        c.position = Ca;
        c.display = "inline";
        a = b(a);
        c.display = d;
        c.position = f;
        c.visibility = e;
        return a
    }

    function eh(a) {
        var b = a.offsetWidth, c = a.offsetHeight, d = J && !b && !c;
        return x(b) && !d || !a.getBoundingClientRect ? new Vf(b, c) : (a = Zg(a), new Vf(a.right - a.left, a.bottom - a.top))
    }

    function Q(a, b) {
        a.style.display = b ? "" : Hb
    }

    function fh(a, b) {
        b = Wf(b);
        var c = b.a;
        if (F && c.createStyleSheet) b = c.createStyleSheet(), gh(b, a); else {
            c = ag(b.a, "HEAD", void 0, void 0)[0];
            if (!c) {
                var d = ag(b.a, "BODY", void 0, void 0)[0];
                c = b.D("HEAD");
                d.parentNode.insertBefore(c, d)
            }
            d = b.D("STYLE");
            gh(d, a);
            b.appendChild(c, d)
        }
    }

    function gh(a, b) {
        b = be(b);
        F && x(a.cssText) ? a.cssText = b : a.innerHTML = b
    }

    function hh(a) {
        return Tb == Vg(a, Za)
    }

    var ih = I ? "MozUserSelect" : J || Ye ? "WebkitUserSelect" : null;

    function jh(a, b, c) {
        c = c ? null : a.getElementsByTagName("*");
        if (ih) {
            if (b = b ? Hb : "", a.style && (a.style[ih] = b), c) {
                a = 0;
                for (var d; d = c[a]; a++) d.style && (d.style[ih] = b)
            }
        } else if (F || Xe) if (b = b ? "on" : "", a.setAttribute("unselectable", b), c) for (a = 0; d = c[a]; a++) d.setAttribute("unselectable", b)
    }

    function kh(a) {
        return new Vf(a.offsetWidth, a.offsetHeight)
    }

    function lh(a, b) {
        var c = fg(Wf(O(a)).a);
        if (!F || K("10") || c && K("8")) mh(a, b, "content-box"); else {
            var d = a.style;
            c ? (d.pixelWidth = b.width, d.pixelHeight = b.height) : (c = nh(a), a = oh(a), d.pixelWidth = b.width + a.left + c.left + c.right + a.right, d.pixelHeight = b.height + a.top + c.top + c.bottom + a.bottom)
        }
    }

    function mh(a, b, c) {
        a = a.style;
        I ? a.MozBoxSizing = c : J ? a.WebkitBoxSizing = c : a.boxSizing = c;
        a.width = Math.max(b.width, 0) + "px";
        a.height = Math.max(b.height, 0) + "px"
    }

    function ph(a, b, c, d) {
        if (/^\d+px?$/.test(b)) return parseInt(b, 10);
        var e = a.style[c], f = a.runtimeStyle[c];
        a.runtimeStyle[c] = a.currentStyle[c];
        a.style[c] = b;
        b = a.style[d];
        a.style[c] = e;
        a.runtimeStyle[c] = f;
        return +b
    }

    function qh(a, b) {
        return (b = a.currentStyle ? a.currentStyle[b] : null) ? ph(a, b, "left", "pixelLeft") : 0
    }

    function nh(a) {
        if (F) {
            var b = qh(a, Lb), c = qh(a, Mb), d = qh(a, "paddingTop");
            a = qh(a, "paddingBottom");
            return new Qg(d, c, a, b)
        }
        b = Ug(a, Lb);
        c = Ug(a, Mb);
        d = Ug(a, "paddingTop");
        a = Ug(a, "paddingBottom");
        return new Qg(parseFloat(d), parseFloat(c), parseFloat(a), parseFloat(b))
    }

    var rh = {thin: 2, medium: 4, thick: 6};

    function sh(a, b) {
        if ((a.currentStyle ? a.currentStyle[b + "Style"] : null) == Hb) return 0;
        b = a.currentStyle ? a.currentStyle[b + "Width"] : null;
        return b in rh ? rh[b] : ph(a, b, "left", "pixelLeft")
    }

    function oh(a) {
        if (F && !pf(9)) {
            var b = sh(a, "borderLeft"), c = sh(a, "borderRight"), d = sh(a, "borderTop");
            a = sh(a, "borderBottom");
            return new Qg(d, c, a, b)
        }
        b = Ug(a, "borderLeftWidth");
        c = Ug(a, "borderRightWidth");
        d = Ug(a, "borderTopWidth");
        a = Ug(a, "borderBottomWidth");
        return new Qg(parseFloat(d), parseFloat(c), parseFloat(a), parseFloat(b))
    };var th;
    jd(["A", "AREA", "BUTTON", "HEAD", oa, "LINK", "MENU", "META", "OPTGROUP", qa, "PROGRESS", "STYLE", "SELECT", "SOURCE", va, wa, "TRACK"]);

    function uh(a, b) {
        b ? a.setAttribute("role", b) : a.removeAttribute("role")
    }

    function vh(a, b, c) {
        B(c) && (c = c.join(" "));
        var d = "aria-" + b;
        "" === c || void 0 == c ? (th || (th = {
            atomic: !1,
            autocomplete: Hb,
            dropeffect: Hb,
            haspopup: !1,
            live: "off",
            multiline: !1,
            multiselectable: !1,
            orientation: fc,
            readonly: !1,
            relevant: "additions text",
            required: !1,
            sort: Hb,
            busy: !1,
            disabled: !1,
            hidden: !1,
            invalid: "false"
        }), c = th, b in c ? a.setAttribute(d, c[b]) : a.removeAttribute(d)) : a.setAttribute(d, c)
    };

    function R() {
        this.vb = this.vb;
        this.xa = this.xa
    }

    R.prototype.vb = !1;
    R.prototype.M = function () {
        this.vb || (this.vb = !0, this.F())
    };

    function wh(a, b) {
        a.vb ? x(void 0) ? b.call(void 0) : b() : (a.xa || (a.xa = []), a.xa.push(x(void 0) ? C(b, void 0) : b))
    }

    R.prototype.F = function () {
        if (this.xa) for (; this.xa.length;) this.xa.shift()()
    };

    function xh(a) {
        a && typeof a.M == p && a.M()
    };var yh = !F || pf(9), zh = !F || pf(9), Ah = F && !K("9"), Bh = function () {
        if (!v.addEventListener || !Object.defineProperty) return !1;
        var a = !1, b = Object.defineProperty({}, "passive", {
            get: function () {
                a = !0
            }
        });
        try {
            v.addEventListener("test", z, b), v.removeEventListener("test", z, b)
        } catch (c) {
        }
        return a
    }();

    function Ch(a, b) {
        this.type = a;
        this.currentTarget = this.target = b;
        this.c = !1;
        this.ah = !0
    }

    Ch.prototype.stopPropagation = function () {
        this.c = !0
    };
    Ch.prototype.b = function () {
        this.ah = !1
    };
    var Dh = {pc: Bb, qc: Fb, oc: "mousecancel", lk: Cb, nk: Eb, mk: Db, jk: "mouseenter", kk: "mouseleave"};

    function Eh(a, b) {
        Ch.call(this, a ? a.type : "");
        this.relatedTarget = this.currentTarget = this.target = null;
        this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
        this.key = "";
        this.keyCode = 0;
        this.f = this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
        this.pointerId = 0;
        this.pointerType = "";
        this.a = null;
        if (a) {
            var c = this.type = a.type, d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
            this.target = a.target || a.srcElement;
            this.currentTarget = b;
            (b = a.relatedTarget) ? I && (Ue(b, "nodeName") || (b =
                null)) : c == Eb ? b = a.fromElement : c == Db && (b = a.toElement);
            this.relatedTarget = b;
            d ? (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY = d.screenY || 0) : (this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0);
            this.button = a.button;
            this.keyCode = a.keyCode || 0;
            this.key = a.key || "";
            this.ctrlKey = a.ctrlKey;
            this.altKey = a.altKey;
            this.shiftKey =
                a.shiftKey;
            this.metaKey = a.metaKey;
            this.f = af ? a.metaKey : a.ctrlKey;
            this.pointerId = a.pointerId || 0;
            this.pointerType = y(a.pointerType) ? a.pointerType : Fh[a.pointerType] || "";
            this.a = a;
            a.defaultPrevented && this.b()
        }
    }

    D(Eh, Ch);
    var Gh = [1, 4, 2], Fh = {2: "touch", 3: "pen", 4: "mouse"};

    function Hh(a) {
        return yh ? 0 == a.a.button : a.type == Ta ? !0 : !!(a.a.button & Gh[0])
    }

    Eh.prototype.stopPropagation = function () {
        Eh.m.stopPropagation.call(this);
        this.a.stopPropagation ? this.a.stopPropagation() : this.a.cancelBubble = !0
    };
    Eh.prototype.b = function () {
        Eh.m.b.call(this);
        var a = this.a;
        if (a.preventDefault) a.preventDefault(); else if (a.returnValue = !1, Ah) try {
            if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1
        } catch (b) {
        }
    };
    var Ih = "closure_listenable_" + (1E6 * Math.random() | 0);

    function Jh(a) {
        return !(!a || !a[Ih])
    }

    var Kh = 0;

    function Lh(a, b, c, d, e) {
        this.listener = a;
        this.a = null;
        this.src = b;
        this.type = c;
        this.capture = !!d;
        this.Id = e;
        this.key = ++Kh;
        this.mc = this.dd = !1
    }

    function Mh(a) {
        a.mc = !0;
        a.listener = null;
        a.a = null;
        a.src = null;
        a.Id = null
    };

    function Nh(a) {
        this.src = a;
        this.a = {};
        this.b = 0
    }

    Nh.prototype.add = function (a, b, c, d, e) {
        var f = a.toString();
        a = this.a[f];
        a || (a = this.a[f] = [], this.b++);
        var h = Oh(a, b, d, e);
        -1 < h ? (b = a[h], c || (b.dd = !1)) : (b = new Lh(b, this.src, f, !!d, e), b.dd = c, a.push(b));
        return b
    };
    Nh.prototype.remove = function (a, b, c, d) {
        a = a.toString();
        if (!(a in this.a)) return !1;
        var e = this.a[a];
        b = Oh(e, b, c, d);
        return -1 < b ? (Mh(e[b]), Array.prototype.splice.call(e, b, 1), 0 == e.length && (delete this.a[a], this.b--), !0) : !1
    };

    function Ph(a, b) {
        var c = b.type;
        if (!(c in a.a)) return !1;
        var d = Uc(a.a[c], b);
        d && (Mh(b), 0 == a.a[c].length && (delete a.a[c], a.b--));
        return d
    }

    function Qh(a, b) {
        b = b && b.toString();
        var c = 0, d;
        for (d in a.a) if (!b || d == b) {
            for (var e = a.a[d], f = 0; f < e.length; f++) ++c, Mh(e[f]);
            delete a.a[d];
            a.b--
        }
        return c
    }

    Nh.prototype.Ec = function (a, b, c, d) {
        a = this.a[a.toString()];
        var e = -1;
        a && (e = Oh(a, b, c, d));
        return -1 < e ? a[e] : null
    };
    Nh.prototype.hasListener = function (a, b) {
        var c = x(a), d = c ? a.toString() : "", e = x(b);
        return ad(this.a, function (f) {
            for (var h = 0; h < f.length; ++h) if (!(c && f[h].type != d || e && f[h].capture != b)) return !0;
            return !1
        })
    };

    function Oh(a, b, c, d) {
        for (var e = 0; e < a.length; ++e) {
            var f = a[e];
            if (!f.mc && f.listener == b && f.capture == !!c && f.Id == d) return e
        }
        return -1
    };var Rh = "closure_lm_" + (1E6 * Math.random() | 0), Sh = {}, Th = 0;

    function S(a, b, c, d, e) {
        if (d && d.once) return Uh(a, b, c, d, e);
        if (B(b)) {
            for (var f = 0; f < b.length; f++) S(a, b[f], c, d, e);
            return null
        }
        c = Vh(c);
        return Jh(a) ? a.w(b, c, yc(d) ? !!d.capture : !!d, e) : Wh(a, b, c, !1, d, e)
    }

    function Wh(a, b, c, d, e, f) {
        if (!b) throw Error("Invalid event type");
        var h = yc(e) ? !!e.capture : !!e, k = Xh(a);
        k || (a[Rh] = k = new Nh(a));
        c = k.add(b, c, d, h, f);
        if (c.a) return c;
        d = Yh();
        c.a = d;
        d.src = a;
        d.listener = c;
        if (a.addEventListener) Bh || (e = h), void 0 === e && (e = !1), a.addEventListener(b.toString(), d, e); else if (a.attachEvent) a.attachEvent(Zh(b.toString()), d); else if (a.addListener && a.removeListener) a.addListener(d); else throw Error("addEventListener and attachEvent are unavailable.");
        Th++;
        return c
    }

    function Yh() {
        var a = $h, b = zh ? function (c) {
            return a.call(b.src, b.listener, c)
        } : function (c) {
            c = a.call(b.src, b.listener, c);
            if (!c) return c
        };
        return b
    }

    function Uh(a, b, c, d, e) {
        if (B(b)) {
            for (var f = 0; f < b.length; f++) Uh(a, b[f], c, d, e);
            return null
        }
        c = Vh(c);
        return Jh(a) ? a.Bb(b, c, yc(d) ? !!d.capture : !!d, e) : Wh(a, b, c, !0, d, e)
    }

    function ai(a, b, c, d, e) {
        if (B(b)) for (var f = 0; f < b.length; f++) ai(a, b[f], c, d, e); else d = yc(d) ? !!d.capture : !!d, c = Vh(c), Jh(a) ? a.ca(b, c, d, e) : a && (a = Xh(a)) && (b = a.Ec(b, c, d, e)) && bi(b)
    }

    function bi(a) {
        if (sc(a) || !a || a.mc) return !1;
        var b = a.src;
        if (Jh(b)) return Ph(b.Ka, a);
        var c = a.type, d = a.a;
        b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent ? b.detachEvent(Zh(c), d) : b.addListener && b.removeListener && b.removeListener(d);
        Th--;
        (c = Xh(b)) ? (Ph(c, a), 0 == c.b && (c.src = null, b[Rh] = null)) : Mh(a);
        return !0
    }

    function ci(a, b) {
        if (!a) return 0;
        if (Jh(a)) return a.Ka ? Qh(a.Ka, b) : 0;
        a = Xh(a);
        if (!a) return 0;
        var c = 0;
        b = b && b.toString();
        for (var d in a.a) if (!b || d == b) for (var e = a.a[d].concat(), f = 0; f < e.length; ++f) bi(e[f]) && ++c;
        return c
    }

    function Zh(a) {
        return a in Sh ? Sh[a] : Sh[a] = "on" + a
    }

    function di(a, b, c, d) {
        var e = !0;
        if (a = Xh(a)) if (b = a.a[b.toString()]) for (b = b.concat(), a = 0; a < b.length; a++) {
            var f = b[a];
            f && f.capture == c && !f.mc && (f = ei(f, d), e = e && !1 !== f)
        }
        return e
    }

    function ei(a, b) {
        var c = a.listener, d = a.Id || a.src;
        a.dd && bi(a);
        return c.call(d, b)
    }

    function $h(a, b) {
        if (a.mc) return !0;
        if (!zh) {
            if (!b) a:{
                b = ["window", "event"];
                for (var c = v, d = 0; d < b.length; d++) if (c = c[b[d]], null == c) {
                    b = null;
                    break a
                }
                b = c
            }
            d = b;
            b = new Eh(d, this);
            c = !0;
            if (!(0 > d.keyCode || void 0 != d.returnValue)) {
                a:{
                    var e = !1;
                    if (0 == d.keyCode) try {
                        d.keyCode = -1;
                        break a
                    } catch (h) {
                        e = !0
                    }
                    if (e || void 0 == d.returnValue) d.returnValue = !0
                }
                d = [];
                for (e = b.currentTarget; e; e = e.parentNode) d.push(e);
                a = a.type;
                for (e = d.length - 1; !b.c && 0 <= e; e--) {
                    b.currentTarget = d[e];
                    var f = di(d[e], a, !0, b);
                    c = c && f
                }
                for (e = 0; !b.c && e < d.length; e++) b.currentTarget =
                    d[e], f = di(d[e], a, !1, b), c = c && f
            }
            return c
        }
        return ei(a, new Eh(b, this))
    }

    function Xh(a) {
        a = a[Rh];
        return a instanceof Nh ? a : null
    }

    var fi = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);

    function Vh(a) {
        if (xc(a)) return a;
        a[fi] || (a[fi] = function (b) {
            return a.handleEvent(b)
        });
        return a[fi]
    };

    function gi(a) {
        R.call(this);
        this.b = a;
        this.a = {}
    }

    D(gi, R);
    var hi = [];
    u = gi.prototype;
    u.w = function (a, b, c, d) {
        return ii(this, a, b, c, d)
    };

    function ji(a, b, c, d) {
        ii(a, b, Ta, c, !1, d)
    }

    function ii(a, b, c, d, e, f) {
        B(c) || (c && (hi[0] = c.toString()), c = hi);
        for (var h = 0; h < c.length; h++) {
            var k = S(b, c[h], d || a.handleEvent, e || !1, f || a.b || a);
            if (!k) break;
            a.a[k.key] = k
        }
        return a
    }

    u.Bb = function (a, b, c, d) {
        return ki(this, a, b, c, d)
    };

    function ki(a, b, c, d, e, f) {
        if (B(c)) for (var h = 0; h < c.length; h++) ki(a, b, c[h], d, e, f); else {
            b = Uh(b, c, d || a.handleEvent, e, f || a.b || a);
            if (!b) return a;
            a.a[b.key] = b
        }
        return a
    }

    u.ca = function (a, b, c, d, e) {
        if (B(b)) for (var f = 0; f < b.length; f++) this.ca(a, b[f], c, d, e); else c = c || this.handleEvent, d = yc(d) ? !!d.capture : !!d, e = e || this.b || this, c = Vh(c), d = !!d, b = Jh(a) ? a.Ec(b, c, d, e) : a ? (a = Xh(a)) ? a.Ec(b, c, d, e) : null : null, b && (bi(b), delete this.a[b.key]);
        return this
    };

    function li(a) {
        $c(a.a, function (b, c) {
            this.a.hasOwnProperty(c) && bi(b)
        }, a);
        a.a = {}
    }

    u.F = function () {
        gi.m.F.call(this);
        li(this)
    };
    u.handleEvent = function () {
        throw Error("EventHandler.handleEvent not implemented");
    };

    function mi() {
        R.call(this);
        this.Ka = new Nh(this);
        this.Qh = this;
        this.qf = null
    }

    D(mi, R);
    mi.prototype[Ih] = !0;
    u = mi.prototype;
    u.nd = q("qf");
    u.xf = jc("qf");
    u.addEventListener = function (a, b, c, d) {
        S(this, a, b, c, d)
    };
    u.removeEventListener = function (a, b, c, d) {
        ai(this, a, b, c, d)
    };
    u.dispatchEvent = function (a) {
        var b = this.nd();
        if (b) {
            var c = [];
            for (var d = 1; b; b = b.nd()) c.push(b), ++d
        }
        b = this.Qh;
        d = a.type || a;
        if (y(a)) a = new Ch(a, b); else if (a instanceof Ch) a.target = a.target || b; else {
            var e = a;
            a = new Ch(d, b);
            id(a, e)
        }
        e = !0;
        if (c) for (var f = c.length - 1; !a.c && 0 <= f; f--) {
            var h = a.currentTarget = c[f];
            e = ni(h, d, !0, a) && e
        }
        a.c || (h = a.currentTarget = b, e = ni(h, d, !0, a) && e, a.c || (e = ni(h, d, !1, a) && e));
        if (c) for (f = 0; !a.c && f < c.length; f++) h = a.currentTarget = c[f], e = ni(h, d, !1, a) && e;
        return e
    };
    u.F = function () {
        mi.m.F.call(this);
        this.Ka && Qh(this.Ka, void 0);
        this.qf = null
    };
    u.w = function (a, b, c, d) {
        return this.Ka.add(String(a), b, !1, c, d)
    };
    u.Bb = function (a, b, c, d) {
        return this.Ka.add(String(a), b, !0, c, d)
    };
    u.ca = function (a, b, c, d) {
        return this.Ka.remove(String(a), b, c, d)
    };

    function ni(a, b, c, d) {
        b = a.Ka.a[String(b)];
        if (!b) return !0;
        b = b.concat();
        for (var e = !0, f = 0; f < b.length; ++f) {
            var h = b[f];
            if (h && !h.mc && h.capture == c) {
                var k = h.listener, l = h.Id || h.src;
                h.dd && Ph(a.Ka, h);
                e = !1 !== k.call(l, d) && e
            }
        }
        return e && 0 != d.ah
    }

    u.Ec = function (a, b, c, d) {
        return this.Ka.Ec(String(a), b, c, d)
    };
    u.hasListener = function (a, b) {
        return this.Ka.hasListener(x(a) ? String(a) : void 0, b)
    };

    function oi() {
    }

    vc(oi);
    oi.prototype.a = 0;

    function T(a) {
        mi.call(this);
        this.b = a || Wf();
        this.la = pi;
        this.ia = null;
        this.U = !1;
        this.A = null;
        this.I = void 0;
        this.G = this.s = this.B = this.ra = null;
        this.jb = !1
    }

    D(T, mi);
    T.prototype.tb = oi.X();
    var pi = null;

    function qi(a, b) {
        switch (a) {
            case 1:
                return b ? "disable" : "enable";
            case 2:
                return b ? "highlight" : "unhighlight";
            case 4:
                return b ? "activate" : "deactivate";
            case 8:
                return b ? "select" : "unselect";
            case 16:
                return b ? "check" : "uncheck";
            case 32:
                return b ? db : La;
            case 64:
                return b ? "open" : "close"
        }
        throw Error("Invalid component state");
    }

    function ri(a) {
        return a.ia || (a.ia = ":" + (a.tb.a++).toString(36))
    }

    function si(a, b) {
        if (a.B && a.B.G) {
            var c = a.B.G, d = a.ia;
            d in c && delete c[d];
            fd(a.B.G, b, a)
        }
        a.ia = b
    }

    u = T.prototype;
    u.j = q("A");

    function ti(a, b) {
        return a.A ? bg(b, a.A || a.b.a) : null
    }

    function U(a) {
        a.I || (a.I = new gi(a));
        return a.I
    }

    function ui(a, b) {
        if (a == b) throw Error(xa);
        if (b && a.B && a.ia && vi(a.B, a.ia) && a.B != b) throw Error(xa);
        a.B = b;
        T.m.xf.call(a, b)
    }

    u.xb = q("B");
    u.xf = function (a) {
        if (this.B && this.B != a) throw Error("Method not supported");
        T.m.xf.call(this, a)
    };
    u.D = function () {
        this.A = Og(this.b, g)
    };
    u.fa = function (a) {
        wi(this, a)
    };

    function wi(a, b, c) {
        if (a.U) throw Error(ka);
        a.A || a.D();
        b ? b.insertBefore(a.A, c || null) : a.b.a.body.appendChild(a.A);
        a.B && !a.B.U || a.O()
    }

    function xi(a, b) {
        if (a.U) throw Error(ka);
        if (b && a.Ge(b)) {
            a.jb = !0;
            var c = O(b);
            a.b && a.b.a == c || (a.b = Wf(b));
            a.S(b);
            a.O()
        } else throw Error("Invalid element to decorate");
    }

    u.Ge = t(!0);
    u.S = jc("A");
    u.O = function () {
        this.U = !0;
        yi(this, function (a) {
            !a.U && a.j() && a.O()
        })
    };
    u.Z = function () {
        yi(this, function (a) {
            a.U && a.Z()
        });
        this.I && li(this.I);
        this.U = !1
    };
    u.F = function () {
        this.U && this.Z();
        this.I && (this.I.M(), delete this.I);
        yi(this, function (a) {
            a.M()
        });
        !this.jb && this.A && tg(this.A);
        this.B = this.ra = this.A = this.G = this.s = null;
        T.m.F.call(this)
    };

    function V(a, b) {
        return ri(a) + "." + b
    }

    u.rc = function (a, b) {
        this.je(a, zi(this), b)
    };
    u.je = function (a, b, c) {
        if (a.U && (c || !this.U)) throw Error(ka);
        if (0 > b || b > zi(this)) throw Error("Child component index out of bounds");
        this.G && this.s || (this.G = {}, this.s = []);
        if (a.xb() == this) {
            var d = ri(a);
            this.G[d] = a;
            Uc(this.s, a)
        } else fd(this.G, ri(a), a);
        ui(a, this);
        Xc(this.s, b, 0, a);
        a.U && this.U && a.xb() == this ? (c = this.ud(), b = c.childNodes[b] || null, b != a.j() && c.insertBefore(a.j(), b)) : c ? (this.A || this.D(), b = Ai(this, b + 1), wi(a, this.ud(), b ? b.A : null)) : this.U && !a.U && a.A && a.A.parentNode && 1 == a.A.parentNode.nodeType && a.O()
    };
    u.ud = q("A");

    function Bi(a) {
        null == a.la && (a.la = hh(a.U ? a.A : a.b.a.body));
        return a.la
    }

    function zi(a) {
        return a.s ? a.s.length : 0
    }

    function vi(a, b) {
        a.G && b ? (a = a.G, b = (null !== a && b in a ? a[b] : void 0) || null) : b = null;
        return b
    }

    function Ai(a, b) {
        return a.s ? a.s[b] || null : null
    }

    function yi(a, b, c) {
        a.s && Nc(a.s, b, c)
    }

    function Ci(a, b) {
        return a.s && b ? Mc(a.s, b) : -1
    }

    u.removeChild = function (a, b) {
        if (a) {
            var c = y(a) ? a : ri(a);
            a = vi(this, c);
            if (c && a) {
                var d = this.G;
                c in d && delete d[c];
                Uc(this.s, a);
                b && (a.Z(), a.A && tg(a.A));
                ui(a, null)
            }
        }
        if (!a) throw Error("Child is not in parent component");
        return a
    };
    u.Qc = function (a) {
        for (var b = []; this.s && 0 != this.s.length;) b.push(this.removeChild(Ai(this, 0), a));
        return b
    };

    function Di() {
    }

    var Ei;
    vc(Di);
    var Gi = {
        button: "pressed",
        checkbox: Ra,
        menuitem: Ub,
        menuitemcheckbox: Ra,
        menuitemradio: Ra,
        radio: Ra,
        tab: Ub,
        treeitem: Ub
    };
    u = Di.prototype;
    u.Yb = ic();
    u.D = function (a) {
        return a.b.D(g, Hi(this, a).join(" "), a.$())
    };
    u.Ab = function (a) {
        return a
    };

    function Ii(a, b, c) {
        if (a = a.j ? a.j() : a) {
            var d = [b];
            F && !K("7") && (d = Ji(Jf(a), b), d.push(b));
            (c ? Lf : Nf)(a, d)
        }
    }

    u.xd = t(!0);
    u.Oa = function (a, b) {
        b.id && si(a, b.id);
        var c = this.Ab(b);
        c && c.firstChild ? Ki(a, c.firstChild.nextSibling ? Wc(c.childNodes) : c.firstChild) : a.Mb = null;
        var d = 0, e = this.ea(), f = this.ea(), h = !1, k = !1, l = !1, m = Wc(Jf(b));
        Nc(m, function (r) {
            h || r != e ? k || r != f ? d |= this.pd(r) : k = !0 : (h = !0, f == e && (k = !0));
            1 == this.pd(r) && Jg(c) && Kg(c) && Ig(c, !1)
        }, this);
        a.V = d;
        h || (m.push(e), f == e && (k = !0));
        k || m.push(f);
        (a = a.ze) && m.push.apply(m, a);
        if (F && !K("7")) {
            var n = Ji(m);
            0 < n.length && (m.push.apply(m, n), l = !0)
        }
        if (!h || !k || a || l) b.className = m.join(" ");
        return b
    };
    u.mg = function (a) {
        Bi(a) && this.Le(a.j(), !0);
        a.isEnabled() && this.Zb(a, a.isVisible())
    };

    function Li(a, b, c) {
        if (a = c || a.Yb()) c = b.getAttribute("role") || null, a != c && uh(b, a)
    }

    function Mi(a, b, c) {
        b.isVisible() || vh(c, rb, !b.isVisible());
        b.isEnabled() || a.Wa(c, 1, !b.isEnabled());
        b.ba & 8 && a.Wa(c, 8, !!(b.V & 8));
        b.ba & 16 && a.Wa(c, 16, !!(b.V & 16));
        b.ba & 64 && a.Wa(c, 64, !!(b.V & 64))
    }

    u.yd = function (a, b) {
        jh(a, !b, !F && !Xe)
    };
    u.Le = function (a, b) {
        Ii(a, this.ea() + "-rtl", b)
    };
    u.Ke = function (a) {
        var b;
        return a.ba & 32 && (b = a.j()) ? Jg(b) && Kg(b) : !1
    };
    u.Zb = function (a, b) {
        var c;
        if (a.ba & 32 && (c = a.j())) {
            if (!b && a.V & 32) {
                try {
                    c.blur()
                } catch (d) {
                }
                a.V & 32 && a.ng(null)
            }
            (Jg(c) && Kg(c)) != b && Ig(c, b)
        }
    };
    u.J = function (a, b) {
        Q(a, b);
        a && vh(a, rb, !b)
    };
    u.Jc = function (a, b, c) {
        var d = a.j();
        if (d) {
            var e = this.Dc(b);
            e && Ii(a, e, c);
            this.Wa(d, b, c)
        }
    };
    u.Wa = function (a, b, c) {
        Ei || (Ei = {1: "disabled", 8: Ub, 16: Ra, 64: "expanded"});
        b = Ei[b];
        var d = a.getAttribute("role") || null;
        d && (d = Gi[d] || b, b = b == Ra || b == Ub ? d : b);
        b && vh(a, b, c)
    };
    u.Ic = function (a, b) {
        var c = this.Ab(a);
        c && (qg(c), b && (y(b) ? Fg(c, b) : (a = function (d) {
            if (d) {
                var e = O(c);
                c.appendChild(y(d) ? e.createTextNode(d) : d)
            }
        }, B(b) ? Nc(b, a) : !wc(b) || "nodeType" in b ? a(b) : Nc(Wc(b), a))))
    };
    u.ea = t("goog-control");

    function Hi(a, b) {
        var c = a.ea(), d = [c], e = a.ea();
        e != c && d.push(e);
        c = b.V;
        for (e = []; c;) {
            var f = c & -c;
            e.push(a.Dc(f));
            c &= ~f
        }
        d.push.apply(d, e);
        (a = b.ze) && d.push.apply(d, a);
        F && !K("7") && d.push.apply(d, Ji(d));
        return d
    }

    function Ji(a, b) {
        var c = [];
        b && (a = Vc(a, [b]));
        Nc([], function (d) {
            !Rc(d, Ec(Tc, a)) || b && !Tc(d, b) || c.push(d.join("_"))
        });
        return c
    }

    u.Dc = function (a) {
        this.a || Ni(this);
        return this.a[a]
    };
    u.pd = function (a) {
        if (!this.c) {
            this.a || Ni(this);
            var b = this.a, c = {}, d;
            for (d in b) c[b[d]] = d;
            this.c = c
        }
        a = parseInt(this.c[a], 10);
        return isNaN(a) ? 0 : a
    };

    function Ni(a) {
        var b = a.ea();
        b.replace(/\xa0|\s/g, " ");
        a.a = {
            1: b + ba,
            2: b + "-hover",
            4: b + "-active",
            8: b + "-selected",
            16: b + "-checked",
            32: b + "-focused",
            64: b + "-open"
        }
    };

    function Oi() {
    }

    D(Oi, Di);
    vc(Oi);
    u = Oi.prototype;
    u.Yb = t(Na);
    u.Wa = function (a, b, c) {
        switch (b) {
            case 8:
            case 16:
                vh(a, "pressed", c);
                break;
            default:
            case 64:
            case 1:
                Oi.m.Wa.call(this, a, b, c)
        }
    };
    u.D = function (a) {
        var b = Oi.m.D.call(this, a), c = a.l;
        b && (c ? b.title = c : b.removeAttribute("title"));
        (c = a.Ba()) && this.za(b, c);
        a.ba & 16 && this.Wa(b, 16, !!(a.V & 16));
        return b
    };
    u.Oa = function (a, b) {
        b = Oi.m.Oa.call(this, a, b);
        var c = this.Ba(b);
        a.g = c;
        a.l = b.title;
        a.ba & 16 && this.Wa(b, 16, !!(a.V & 16));
        return b
    };
    u.Ba = z;
    u.za = z;
    u.ea = t("goog-button");

    function Pi(a) {
        if (a.altKey && !a.ctrlKey || a.metaKey || 112 <= a.keyCode && 123 >= a.keyCode) return !1;
        if (Qi(a.keyCode)) return !0;
        switch (a.keyCode) {
            case 18:
            case 20:
            case 93:
            case 17:
            case 40:
            case 35:
            case 27:
            case 36:
            case 45:
            case 37:
            case 224:
            case 91:
            case 144:
            case 12:
            case 34:
            case 33:
            case 19:
            case 255:
            case 44:
            case 39:
            case 145:
            case 16:
            case 38:
            case 252:
            case 224:
            case 92:
                return !1;
            case 0:
                return !I;
            default:
                return 166 > a.keyCode || 183 < a.keyCode
        }
    }

    function Ri(a, b, c, d, e, f) {
        if (J && !K("525")) return !0;
        if (af && e) return Qi(a);
        if (e && !d) return !1;
        if (!I) {
            sc(b) && (b = Si(b));
            var h = 17 == b || 18 == b || af && 91 == b;
            if ((!c || af) && h || af && 16 == b && (d || f)) return !1
        }
        if ((J || Ye) && d && c) switch (a) {
            case 220:
            case 219:
            case 221:
            case 192:
            case 186:
            case 189:
            case 187:
            case 188:
            case 190:
            case 191:
            case 192:
            case 222:
                return !1
        }
        if (F && d && b == a) return !1;
        switch (a) {
            case 13:
                return I ? f || e ? !1 : !(c && d) : !0;
            case 27:
                return !(J || Ye || I)
        }
        return I && (d || e || f) ? !1 : Qi(a)
    }

    function Qi(a) {
        if (48 <= a && 57 >= a || 96 <= a && 106 >= a || 65 <= a && 90 >= a || (J || Ye) && 0 == a) return !0;
        switch (a) {
            case 32:
            case 43:
            case 63:
            case 64:
            case 107:
            case 109:
            case 110:
            case 111:
            case 186:
            case 59:
            case 189:
            case 187:
            case 61:
            case 188:
            case 190:
            case 191:
            case 192:
            case 222:
            case 219:
            case 220:
            case 221:
            case 163:
                return !0;
            case 173:
                return I;
            default:
                return !1
        }
    }

    function Si(a) {
        if (I) a = Ti(a); else if (af && J) switch (a) {
            case 93:
                a = 91
        }
        return a
    }

    function Ti(a) {
        switch (a) {
            case 61:
                return 187;
            case 59:
                return 186;
            case 173:
                return 189;
            case 224:
                return 91;
            case 0:
                return 224;
            default:
                return a
        }
    };

    function Ui(a, b) {
        mi.call(this);
        a && Vi(this, a, b)
    }

    D(Ui, mi);
    u = Ui.prototype;
    u.A = null;
    u.Od = null;
    u.$e = null;
    u.Pd = null;
    u.Fa = -1;
    u.hb = -1;
    u.me = !1;
    var Wi = {
        3: 13,
        12: 144,
        63232: 38,
        63233: 40,
        63234: 37,
        63235: 39,
        63236: 112,
        63237: 113,
        63238: 114,
        63239: 115,
        63240: 116,
        63241: 117,
        63242: 118,
        63243: 119,
        63244: 120,
        63245: 121,
        63246: 122,
        63247: 123,
        63248: 44,
        63272: 46,
        63273: 36,
        63275: 35,
        63276: 33,
        63277: 34,
        63289: 144,
        63302: 45
    }, Xi = {
        Up: 38,
        Down: 40,
        Left: 37,
        Right: 39,
        Enter: 13,
        F1: 112,
        F2: 113,
        F3: 114,
        F4: 115,
        F5: 116,
        F6: 117,
        F7: 118,
        F8: 119,
        F9: 120,
        F10: 121,
        F11: 122,
        F12: 123,
        "U+007F": 46,
        Home: 36,
        End: 35,
        PageUp: 33,
        PageDown: 34,
        Insert: 45
    }, Yi = !J || K("525"), Zi = af && I;
    u = Ui.prototype;
    u.yi = function (a) {
        if (J || Ye) if (17 == this.Fa && !a.ctrlKey || 18 == this.Fa && !a.altKey || af && 91 == this.Fa && !a.metaKey) this.hb = this.Fa = -1;
        -1 == this.Fa && (a.ctrlKey && 17 != a.keyCode ? this.Fa = 17 : a.altKey && 18 != a.keyCode ? this.Fa = 18 : a.metaKey && 91 != a.keyCode && (this.Fa = 91));
        Yi && !Ri(a.keyCode, this.Fa, a.shiftKey, a.ctrlKey, a.altKey, a.metaKey) ? this.handleEvent(a) : (this.hb = Si(a.keyCode), Zi && (this.me = a.altKey))
    };
    u.zi = function (a) {
        this.hb = this.Fa = -1;
        this.me = a.altKey
    };
    u.handleEvent = function (a) {
        var b = a.a, c = b.altKey;
        if (F && a.type == zb) {
            var d = this.hb;
            var e = 13 != d && 27 != d ? b.keyCode : 0
        } else (J || Ye) && a.type == zb ? (d = this.hb, e = 0 <= b.charCode && 63232 > b.charCode && Qi(d) ? b.charCode : 0) : Xe && !J ? (d = this.hb, e = Qi(d) ? b.keyCode : 0) : (a.type == zb ? (Zi && (c = this.me), b.keyCode == b.charCode ? 32 > b.keyCode ? (d = b.keyCode, e = 0) : (d = this.hb, e = b.charCode) : (d = b.keyCode || this.hb, e = b.charCode || 0)) : (d = b.keyCode || this.hb, e = b.charCode || 0), af && 63 == e && 224 == d && (d = 191));
        var f = d = Si(d);
        d ? 63232 <= d && d in Wi ? f = Wi[d] : 25 == d &&
            a.shiftKey && (f = 9) : b.keyIdentifier && b.keyIdentifier in Xi && (f = Xi[b.keyIdentifier]);
        I && Yi && a.type == zb && !Ri(f, this.Fa, a.shiftKey, a.ctrlKey, c, a.metaKey) || (a = f == this.Fa, this.Fa = f, b = new $i(f, e, a, b), b.altKey = c, this.dispatchEvent(b))
    };
    u.j = q("A");

    function Vi(a, b, c) {
        a.Pd && aj(a);
        a.A = b;
        a.Od = S(a.A, zb, a, c);
        a.$e = S(a.A, yb, a.yi, c, a);
        a.Pd = S(a.A, "keyup", a.zi, c, a)
    }

    function aj(a) {
        a.Od && (bi(a.Od), bi(a.$e), bi(a.Pd), a.Od = null, a.$e = null, a.Pd = null);
        a.A = null;
        a.Fa = -1;
        a.hb = -1
    }

    u.F = function () {
        Ui.m.F.call(this);
        aj(this)
    };

    function $i(a, b, c, d) {
        Eh.call(this, d);
        this.type = "key";
        this.keyCode = a;
        this.repeat = c
    }

    D($i, Eh);

    function bj(a, b) {
        if (!a) throw Error("Invalid class name " + a);
        if (!xc(b)) throw Error("Invalid decorator function " + b);
        cj[a] = b
    }

    var dj = {}, cj = {};

    function W(a, b, c) {
        T.call(this, c);
        if (!b) {
            b = this.constructor;
            for (var d; b;) {
                d = zc(b);
                if (d = dj[d]) break;
                b = b.m ? b.m.constructor : null
            }
            b = d ? xc(d.X) ? d.X() : new d : null
        }
        this.a = b;
        this.Mb = x(a) ? a : null
    }

    D(W, T);
    u = W.prototype;
    u.Mb = null;
    u.V = 0;
    u.ba = 39;
    u.kb = 255;
    u.Uc = 0;
    u.ga = !0;
    u.ze = null;
    u.Se = !0;
    u.$c = !1;

    function ej(a, b) {
        a.U && b != a.Se && fj(a, b);
        a.Se = b
    }

    u.D = function () {
        var a = this.a.D(this);
        this.A = a;
        Li(this.a, a, this.Fc());
        this.$c || this.a.yd(a, !1);
        this.isVisible() || this.a.J(a, !1)
    };
    u.Fc = t(null);
    u.ud = function () {
        return this.a.Ab(this.j())
    };
    u.Ge = function (a) {
        return this.a.xd(a)
    };
    u.S = function (a) {
        this.A = a = this.a.Oa(this, a);
        Li(this.a, a, this.Fc());
        this.$c || this.a.yd(a, !1);
        this.ga = a.style.display != Hb
    };
    u.O = function () {
        W.m.O.call(this);
        Mi(this.a, this, this.A);
        this.a.mg(this);
        if (this.ba & -2 && (this.Se && fj(this, !0), this.ba & 32)) {
            var a = this.j();
            if (a) {
                var b = this.f || (this.f = new Ui);
                Vi(b, a);
                U(this).w(b, "key", this.Ga).w(a, db, this.hi).w(a, La, this.ng)
            }
        }
    };

    function fj(a, b) {
        var c = U(a), d = a.j();
        b ? (c.w(d, Dh.pc, a.Lc).w(d, [Dh.qc, Dh.oc], a.bc).w(d, Eb, a.Me).w(d, Db, a.Te), a.Nc != z && c.w(d, Xa, a.Nc), F && (K(9) || c.w(d, Ya, a.rg), a.h || (a.h = new gj(a), wh(a, Ec(xh, a.h))))) : (c.ca(d, Dh.pc, a.Lc).ca(d, [Dh.qc, Dh.oc], a.bc).ca(d, Eb, a.Me).ca(d, Db, a.Te), a.Nc != z && c.ca(d, Xa, a.Nc), F && (K(9) || c.ca(d, Ya, a.rg), xh(a.h), a.h = null))
    }

    u.Z = function () {
        W.m.Z.call(this);
        this.f && aj(this.f);
        this.isVisible() && this.isEnabled() && this.a.Zb(this, !1)
    };
    u.F = function () {
        W.m.F.call(this);
        this.f && (this.f.M(), delete this.f);
        delete this.a;
        this.h = this.ze = this.Mb = null
    };
    u.$ = q("Mb");
    u.Nb = function (a) {
        this.a.Ic(this.j(), a);
        this.Mb = a
    };

    function Ki(a, b) {
        a.Mb = b
    }

    u.bb = function () {
        var a = this.$();
        if (!a) return "";
        a = y(a) ? a : B(a) ? Pc(a, Ng).join("") : Lg(a);
        return Fe(a)
    };
    u.fh = function (a) {
        this.Nb(a)
    };
    u.isVisible = q("ga");
    u.J = function (a, b) {
        return b || this.ga != a && this.dispatchEvent(a ? "show" : sb) ? ((b = this.j()) && this.a.J(b, a), this.isEnabled() && this.a.Zb(this, a), this.ga = a, !0) : !1
    };
    u.isEnabled = function () {
        return !(this.V & 1)
    };
    u.ka = function (a) {
        var b = this.xb();
        b && typeof b.isEnabled == p && !b.isEnabled() || !hj(this, 1, !a) || (a || (ij(this, !1), jj(this, !1)), this.isVisible() && this.a.Zb(this, a), kj(this, 1, !a, !0))
    };

    function jj(a, b) {
        hj(a, 2, b) && kj(a, 2, b)
    }

    u.dc = function () {
        return !!(this.V & 4)
    };

    function ij(a, b) {
        hj(a, 4, b) && kj(a, 4, b)
    }

    function lj(a, b) {
        hj(a, 64, b) && kj(a, 64, b)
    }

    function kj(a, b, c, d) {
        d || 1 != b ? a.ba & b && c != !!(a.V & b) && (a.a.Jc(a, b, c), a.V = c ? a.V | b : a.V & ~b) : a.ka(!c)
    }

    u.ta = function (a, b) {
        if (this.U && this.V & a && !b) throw Error(ka);
        !b && this.V & a && kj(this, a, !1);
        this.ba = b ? this.ba | a : this.ba & ~a
    };

    function mj(a, b) {
        return !!(a.kb & b) && !!(a.ba & b)
    }

    function hj(a, b, c) {
        return !!(a.ba & b) && !!(a.V & b) != c && (!(a.Uc & b) || a.dispatchEvent(qi(b, c))) && !a.vb
    }

    u.Me = function (a) {
        (!a.relatedTarget || !yg(this.j(), a.relatedTarget)) && this.dispatchEvent("enter") && this.isEnabled() && mj(this, 2) && jj(this, !0)
    };
    u.Te = function (a) {
        a.relatedTarget && yg(this.j(), a.relatedTarget) || !this.dispatchEvent("leave") || (mj(this, 4) && ij(this, !1), mj(this, 2) && jj(this, !1))
    };
    u.Nc = z;
    u.Lc = function (a) {
        this.isEnabled() && (mj(this, 2) && jj(this, !0), !Hh(a) || J && af && a.ctrlKey || (mj(this, 4) && ij(this, !0), this.a && this.a.Ke(this) && this.j().focus()));
        this.$c || !Hh(a) || J && af && a.ctrlKey || a.b()
    };
    u.bc = function (a) {
        this.isEnabled() && (mj(this, 2) && jj(this, !0), this.dc() && this.kc(a) && mj(this, 4) && ij(this, !1))
    };
    u.rg = function (a) {
        this.isEnabled() && this.kc(a)
    };
    u.kc = function (a) {
        if (mj(this, 16)) {
            var b = !(this.V & 16);
            hj(this, 16, b) && kj(this, 16, b)
        }
        mj(this, 8) && hj(this, 8, !0) && kj(this, 8, !0);
        mj(this, 64) && lj(this, !(this.V & 64));
        b = new Ch(Da, this);
        a && (b.altKey = a.altKey, b.ctrlKey = a.ctrlKey, b.metaKey = a.metaKey, b.shiftKey = a.shiftKey, b.f = a.f);
        return this.dispatchEvent(b)
    };
    u.hi = function () {
        mj(this, 32) && hj(this, 32, !0) && kj(this, 32, !0)
    };
    u.ng = function () {
        mj(this, 4) && ij(this, !1);
        mj(this, 32) && hj(this, 32, !1) && kj(this, 32, !1)
    };
    u.Ga = function (a) {
        return this.isVisible() && this.isEnabled() && this.Kc(a) ? (a.b(), a.stopPropagation(), !0) : !1
    };
    u.Kc = function (a) {
        return 13 == a.keyCode && this.kc(a)
    };
    if (!xc(W)) throw Error("Invalid component class " + W);
    if (!xc(Di)) throw Error("Invalid renderer class " + Di);
    var nj = zc(W);
    dj[nj] = Di;
    bj("goog-control", function () {
        return new W(null)
    });

    function gj(a) {
        R.call(this);
        this.b = a;
        this.a = !1;
        this.c = new gi(this);
        wh(this, Ec(xh, this.c));
        a = this.b.A;
        this.c.w(a, Bb, this.g).w(a, Fb, this.h).w(a, Ta, this.f)
    }

    D(gj, R);
    var oj = !F || pf(9);
    gj.prototype.g = function () {
        this.a = !1
    };
    gj.prototype.h = function () {
        this.a = !0
    };

    function pj(a, b) {
        if (!oj) return a.button = 0, a.type = b, a;
        var c = document.createEvent("MouseEvents");
        c.initMouseEvent(b, a.bubbles, a.cancelable, a.view || null, a.detail, a.screenX, a.screenY, a.clientX, a.clientY, a.ctrlKey, a.altKey, a.shiftKey, a.metaKey, 0, a.relatedTarget || null);
        return c
    }

    gj.prototype.f = function (a) {
        if (this.a) this.a = !1; else {
            var b = a.a, c = b.button, d = b.type, e = pj(b, Bb);
            this.b.Lc(new Eh(e, a.currentTarget));
            e = pj(b, Fb);
            this.b.bc(new Eh(e, a.currentTarget));
            oj || (b.button = c, b.type = d)
        }
    };
    gj.prototype.F = function () {
        this.b = null;
        gj.m.F.call(this)
    };

    function qj() {
    }

    D(qj, Oi);
    vc(qj);
    u = qj.prototype;
    u.Yb = ic();
    u.D = function (a) {
        ej(a, !1);
        a.kb &= -256;
        a.ta(32, !1);
        return a.b.D("BUTTON", {
            "class": Hi(this, a).join(" "),
            disabled: !a.isEnabled(),
            title: a.l || "",
            value: a.Ba() || ""
        }, a.bb() || "")
    };
    u.xd = function (a) {
        return "BUTTON" == a.tagName || a.tagName == oa && (a.type == Na || "submit" == a.type || "reset" == a.type)
    };
    u.Oa = function (a, b) {
        ej(a, !1);
        a.kb &= -256;
        a.ta(32, !1);
        if (b.disabled) {
            var c = this.Dc(1);
            M(b, c)
        }
        return qj.m.Oa.call(this, a, b)
    };
    u.mg = function (a) {
        U(a).w(a.j(), Ta, a.kc)
    };
    u.yd = z;
    u.Le = z;
    u.Ke = function (a) {
        return a.isEnabled()
    };
    u.Zb = z;
    u.Jc = function (a, b, c) {
        qj.m.Jc.call(this, a, b, c);
        (a = a.j()) && 1 == b && (a.disabled = c)
    };
    u.Ba = function (a) {
        return a.value
    };
    u.za = function (a, b) {
        a && (a.value = b)
    };
    u.Wa = z;

    function rj(a, b, c) {
        W.call(this, a, b || qj.X(), c)
    }

    D(rj, W);
    u = rj.prototype;
    u.Ba = q("g");
    u.za = function (a) {
        this.g = a;
        this.a.za(this.j(), a)
    };
    u.F = function () {
        rj.m.F.call(this);
        delete this.g;
        delete this.l
    };
    u.O = function () {
        rj.m.O.call(this);
        if (this.ba & 32) {
            var a = this.j();
            a && U(this).w(a, "keyup", this.Kc)
        }
    };
    u.Kc = function (a) {
        return 13 == a.keyCode && "key" == a.type || 32 == a.keyCode && "keyup" == a.type ? this.kc(a) : 32 == a.keyCode
    };
    bj("goog-button", function () {
        return new rj(null)
    });

    function sj() {
    }

    D(sj, Oi);
    vc(sj);
    u = sj.prototype;
    u.D = function (a) {
        var b = Hi(this, a);
        b = a.b.D(g, ib + b.join(" "), tj(this, a.$(), a.b));
        a = a.l;
        b && (a ? b.title = a : b.removeAttribute("title"));
        return b
    };
    u.Yb = t(Na);
    u.Ab = function (a) {
        return a && a.firstChild && a.firstChild.firstChild
    };

    function tj(a, b, c) {
        return c.D(g, ib + (a.ea() + "-outer-box"), c.D(g, ib + (a.ea() + "-inner-box"), b))
    }

    u.xd = function (a) {
        return a.tagName == g
    };
    u.Oa = function (a, b) {
        uj(b, !0);
        uj(b, !1);
        a:{
            var c = a.b.hg(b);
            var d = this.ea() + "-outer-box";
            if (c && Kf(c, d) && (c = a.b.hg(c), d = this.ea() + "-inner-box", c && Kf(c, d))) {
                c = !0;
                break a
            }
            c = !1
        }
        c || b.appendChild(tj(this, b.childNodes, a.b));
        Lf(b, ["goog-inline-block", this.ea()]);
        return sj.m.Oa.call(this, a, b)
    };
    u.ea = t("goog-custom-button");

    function uj(a, b) {
        if (a) for (var c = b ? a.firstChild : a.lastChild, d; c && c.parentNode == a;) {
            d = b ? c.nextSibling : c.previousSibling;
            if (3 == c.nodeType) {
                var e = c.nodeValue;
                if ("" == xd(e)) a.removeChild(c); else {
                    c.nodeValue = b ? Ge(e) : He(e);
                    break
                }
            } else break;
            c = d
        }
    };

    function vj(a, b, c) {
        rj.call(this, a, b || sj.X(), c);
        this.ta(16, !0)
    }

    D(vj, rj);
    bj("goog-toggle-button", function () {
        return new vj(null)
    });
    var wj = "StopIteration" in v ? v.StopIteration : {message: "StopIteration", stack: ""};

    function xj() {
    }

    xj.prototype.next = function () {
        throw wj;
    };
    xj.prototype.Ja = function () {
        return this
    };

    function yj(a) {
        if (a instanceof xj) return a;
        if (typeof a.Ja == p) return a.Ja(!1);
        if (wc(a)) {
            var b = 0, c = new xj;
            c.next = function () {
                for (; ;) {
                    if (b >= a.length) throw wj;
                    if (b in a) return a[b++];
                    b++
                }
            };
            return c
        }
        throw Error("Not implemented");
    }

    function zj(a, b, c) {
        a = yj(a);
        try {
            for (; b.call(c, a.next(), void 0, a);) ;
        } catch (d) {
            if (d !== wj) throw d;
        }
    };

    function Aj(a, b) {
        this.b = {};
        this.a = [];
        this.f = this.c = 0;
        var c = arguments.length;
        if (1 < c) {
            if (c % 2) throw Error("Uneven number of arguments");
            for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1])
        } else if (a) if (a instanceof Aj) for (c = a.Ra(), d = 0; d < c.length; d++) this.set(c[d], a.get(c[d])); else for (d in a) this.set(d, a[d])
    }

    u = Aj.prototype;
    u.Ea = function () {
        Bj(this);
        for (var a = [], b = 0; b < this.a.length; b++) a.push(this.b[this.a[b]]);
        return a
    };
    u.Ra = function () {
        Bj(this);
        return this.a.concat()
    };

    function Cj(a, b) {
        return Dj(a.b, b)
    }

    function Ej(a) {
        a.b = {};
        a.a.length = 0;
        a.c = 0;
        a.f = 0
    }

    u.remove = function (a) {
        return Dj(this.b, a) ? (delete this.b[a], this.c--, this.f++, this.a.length > 2 * this.c && Bj(this), !0) : !1
    };

    function Bj(a) {
        if (a.c != a.a.length) {
            for (var b = 0, c = 0; b < a.a.length;) {
                var d = a.a[b];
                Dj(a.b, d) && (a.a[c++] = d);
                b++
            }
            a.a.length = c
        }
        if (a.c != a.a.length) {
            var e = {};
            for (c = b = 0; b < a.a.length;) d = a.a[b], Dj(e, d) || (a.a[c++] = d, e[d] = 1), b++;
            a.a.length = c
        }
    }

    u.get = function (a, b) {
        return Dj(this.b, a) ? this.b[a] : b
    };
    u.set = function (a, b) {
        Dj(this.b, a) || (this.c++, this.a.push(a), this.f++);
        this.b[a] = b
    };
    u.forEach = function (a, b) {
        for (var c = this.Ra(), d = 0; d < c.length; d++) {
            var e = c[d], f = this.get(e);
            a.call(b, f, e, this)
        }
    };
    u.Ja = function (a) {
        Bj(this);
        var b = 0, c = this.f, d = this, e = new xj;
        e.next = function () {
            if (c != d.f) throw Error("The map has changed since the iterator was created");
            if (b >= d.a.length) throw wj;
            var f = d.a[b++];
            return a ? f : d.b[f]
        };
        return e
    };

    function Dj(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    };

    function Fj(a) {
        if (a.Ea && typeof a.Ea == p) return a.Ea();
        if (y(a)) return a.split("");
        if (wc(a)) {
            for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
            return b
        }
        b = [];
        c = 0;
        for (d in a) b[c++] = a[d];
        return b
    }

    function Gj(a, b, c) {
        if (a.forEach && typeof a.forEach == p) a.forEach(b, c); else if (wc(a) || y(a)) Nc(a, b, c); else {
            if (a.Ra && typeof a.Ra == p) var d = a.Ra(); else if (a.Ea && typeof a.Ea == p) d = void 0; else if (wc(a) || y(a)) {
                d = [];
                for (var e = a.length, f = 0; f < e; f++) d.push(f)
            } else d = bd(a);
            e = Fj(a);
            f = e.length;
            for (var h = 0; h < f; h++) b.call(c, e[h], d && d[h], a)
        }
    };var Hj = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;

    function Ij(a, b) {
        if (a) {
            a = a.split("&");
            for (var c = 0; c < a.length; c++) {
                var d = a[c].indexOf("="), e = null;
                if (0 <= d) {
                    var f = a[c].substring(0, d);
                    e = a[c].substring(d + 1)
                } else f = a[c];
                b(f, e ? Je(e) : "")
            }
        }
    };

    function Jj(a) {
        this.f = this.s = this.c = "";
        this.l = null;
        this.g = this.h = "";
        this.b = !1;
        if (a instanceof Jj) {
            this.b = x(void 0) ? void 0 : a.b;
            Kj(this, a.c);
            this.s = a.s;
            this.f = a.f;
            Lj(this, a.l);
            this.h = a.h;
            var b = a.a;
            var c = new Mj;
            c.c = b.c;
            b.a && (c.a = new Aj(b.a), c.b = b.b);
            Nj(this, c);
            this.g = a.g
        } else a && (b = String(a).match(Hj)) ? (this.b = !1, Kj(this, b[1] || "", !0), this.s = Oj(b[2] || ""), this.f = Oj(b[3] || "", !0), Lj(this, b[4]), this.h = Oj(b[5] || "", !0), Nj(this, b[6] || "", !0), this.g = Oj(b[7] || "")) : (this.b = !1, this.a = new Mj(null, this.b))
    }

    Jj.prototype.toString = function () {
        var a = [], b = this.c;
        b && a.push(Pj(b, Qj, !0), ":");
        var c = this.f;
        if (c || "file" == b) a.push("//"), (b = this.s) && a.push(Pj(b, Qj, !0), "@"), a.push(Ie(c).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.l, null != c && a.push(":", String(c));
        if (c = this.h) this.f && "/" != c.charAt(0) && a.push("/"), a.push(Pj(c, "/" == c.charAt(0) ? Rj : Sj, !0));
        (c = this.a.toString()) && a.push("?", c);
        (c = this.g) && a.push("#", Pj(c, Tj));
        return a.join("")
    };

    function Kj(a, b, c) {
        a.c = c ? Oj(b, !0) : b;
        a.c && (a.c = a.c.replace(/:$/, ""))
    }

    function Lj(a, b) {
        if (b) {
            b = Number(b);
            if (isNaN(b) || 0 > b) throw Error("Bad port number " + b);
            a.l = b
        } else a.l = null
    }

    function Nj(a, b, c) {
        b instanceof Mj ? (a.a = b, Uj(a.a, a.b)) : (c || (b = Pj(b, Vj)), a.a = new Mj(b, a.b))
    }

    function Oj(a, b) {
        return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : ""
    }

    function Pj(a, b, c) {
        return y(a) ? (a = encodeURI(a).replace(b, Wj), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null
    }

    function Wj(a) {
        a = a.charCodeAt(0);
        return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
    }

    var Qj = /[#\/\?@]/g, Sj = /[#\?:]/g, Rj = /[#\?]/g, Vj = /[#\?@]/g, Tj = /#/g;

    function Mj(a, b) {
        this.b = this.a = null;
        this.c = a || null;
        this.f = !!b
    }

    function Xj(a) {
        a.a || (a.a = new Aj, a.b = 0, a.c && Ij(a.c, function (b, c) {
            a.add(Je(b), c)
        }))
    }

    u = Mj.prototype;
    u.add = function (a, b) {
        Xj(this);
        this.c = null;
        a = Yj(this, a);
        var c = this.a.get(a);
        c || this.a.set(a, c = []);
        c.push(b);
        this.b = this.b + 1;
        return this
    };
    u.remove = function (a) {
        Xj(this);
        a = Yj(this, a);
        return Cj(this.a, a) ? (this.c = null, this.b = this.b - this.a.get(a).length, this.a.remove(a)) : !1
    };

    function Zj(a, b) {
        Xj(a);
        b = Yj(a, b);
        return Cj(a.a, b)
    }

    u.forEach = function (a, b) {
        Xj(this);
        this.a.forEach(function (c, d) {
            Nc(c, function (e) {
                a.call(b, e, d, this)
            }, this)
        }, this)
    };
    u.Ra = function () {
        Xj(this);
        for (var a = this.a.Ea(), b = this.a.Ra(), c = [], d = 0; d < b.length; d++) for (var e = a[d], f = 0; f < e.length; f++) c.push(b[d]);
        return c
    };
    u.Ea = function (a) {
        Xj(this);
        var b = [];
        if (y(a)) Zj(this, a) && (b = Vc(b, this.a.get(Yj(this, a)))); else {
            a = this.a.Ea();
            for (var c = 0; c < a.length; c++) b = Vc(b, a[c])
        }
        return b
    };
    u.set = function (a, b) {
        Xj(this);
        this.c = null;
        a = Yj(this, a);
        Zj(this, a) && (this.b = this.b - this.a.get(a).length);
        this.a.set(a, [b]);
        this.b = this.b + 1;
        return this
    };
    u.get = function (a, b) {
        if (!a) return b;
        a = this.Ea(a);
        return 0 < a.length ? String(a[0]) : b
    };

    function ak(a, b, c) {
        a.remove(b);
        0 < c.length && (a.c = null, a.a.set(Yj(a, b), Wc(c)), a.b = a.b + c.length)
    }

    u.toString = function () {
        if (this.c) return this.c;
        if (!this.a) return "";
        for (var a = [], b = this.a.Ra(), c = 0; c < b.length; c++) {
            var d = b[c], e = Ie(d);
            d = this.Ea(d);
            for (var f = 0; f < d.length; f++) {
                var h = e;
                "" !== d[f] && (h += "=" + Ie(d[f]));
                a.push(h)
            }
        }
        return this.c = a.join("&")
    };

    function Yj(a, b) {
        b = String(b);
        a.f && (b = b.toLowerCase());
        return b
    }

    function Uj(a, b) {
        b && !a.f && (Xj(a), a.c = null, a.a.forEach(function (c, d) {
            var e = d.toLowerCase();
            d != e && (this.remove(d), ak(this, e, c))
        }, a));
        a.f = b
    }

    u.ig = function (a) {
        for (var b = 0; b < arguments.length; b++) Gj(arguments[b], function (c, d) {
            this.add(d, c)
        }, this)
    };
    var bk = {}, ck = {}, dk = {}, ek = {}, fk = {};

    function gk() {
        throw Error("Do not instantiate directly");
    }

    gk.prototype.gd = null;
    gk.prototype.$ = q("a");
    gk.prototype.toString = q("a");

    function hk(a) {
        if (a.ub === fk) return oe(a.toString());
        if (a.ub !== bk) throw Error("Sanitized content was not of kind TEXT or HTML.");
        return ve(a.toString(), a.gd || null)
    }

    function ik() {
        gk.call(this)
    }

    D(ik, gk);
    ik.prototype.ub = bk;

    function jk() {
        gk.call(this)
    }

    D(jk, gk);
    jk.prototype.ub = ek;
    jk.prototype.gd = 1;

    function kk(a, b) {
        b = a(b || lk, void 0, void 0);
        a = Og(Wf(), g);
        b = mk(b);
        Ae(a, ve(b, null));
        1 == a.childNodes.length && (b = a.firstChild, 1 == b.nodeType && (a = b));
        return a
    }

    function mk(a) {
        if (!yc(a)) return Ke(String(a));
        if (a instanceof gk) {
            if (a.ub === bk) return a.$();
            if (a.ub === fk) return Ke(a.$())
        }
        return "zSoyz"
    }

    var lk = {};

    function nk(a, b) {
        return null != a && a.ub === b
    };

    function ok(a) {
        if (null != a) switch (a.gd) {
            case 1:
                return 1;
            case -1:
                return -1;
            case 0:
                return 0
        }
        return null
    }

    function pk(a) {
        return nk(a, bk) ? a : a instanceof le ? qk(ne(a).toString(), a.a()) : qk(Ke(String(String(a))), ok(a))
    }

    var qk = function (a) {
        function b(c) {
            this.a = c
        }

        b.prototype = a.prototype;
        return function (c, d) {
            c = new b(String(c));
            void 0 !== d && (c.gd = d);
            return c
        }
    }(ik), rk = function (a) {
        function b(c) {
            this.a = c
        }

        b.prototype = a.prototype;
        return function (c) {
            return new b(String(c))
        }
    }(jk);

    function sk(a) {
        return a.replace(/<\//g, "<\\/").replace(/\]\]>/g, "]]\\>")
    }

    function X(a) {
        return nk(a, bk) ? String(String(a.$()).replace(tk, "").replace(uk, "&lt;")).replace(vk, wk) : Ke(String(a))
    }

    function xk(a) {
        nk(a, ck) || nk(a, dk) ? a = yk(a) : a instanceof Id ? a = yk(Kd(a).toString()) : a instanceof rd ? a = yk(td(a).toString()) : (a = String(a), a = zk.test(a) ? a.replace(Ak, Bk) : Ba);
        return a
    }

    function Ck(a) {
        nk(a, ck) || nk(a, dk) ? a = yk(a) : a instanceof Id ? a = yk(Kd(a).toString()) : a instanceof rd ? a = yk(td(a).toString()) : (a = String(a), a = Dk.test(a) ? a.replace(Ak, Bk) : Ba);
        return a
    }

    function Ek(a) {
        return nk(a, dk) ? a.$() : a instanceof rd ? td(a).toString() : Ba
    }

    function Fk(a) {
        nk(a, ek) ? a = sk(a.$()) : null == a ? a = "" : a instanceof Od ? a = sk(Qd(a)) : a instanceof $d ? a = sk(be(a)) : (a = String(a), a = Gk.test(a) ? a : "zSoyz");
        return a
    }

    var Hk = {
        "\x00": "&#0;",
        "\t": "&#9;",
        "\n": "&#10;",
        "\x0B": "&#11;",
        "\f": "&#12;",
        "\r": "&#13;",
        " ": "&#32;",
        '"': "&quot;",
        "&": "&amp;",
        "'": "&#39;",
        "-": "&#45;",
        "/": "&#47;",
        "<": "&lt;",
        "=": "&#61;",
        ">": "&gt;",
        "`": "&#96;",
        "\u0085": "&#133;",
        "\u00a0": "&#160;",
        "\u2028": "&#8232;",
        "\u2029": "&#8233;"
    };

    function wk(a) {
        return Hk[a]
    }

    var Ik = {
        "\x00": "\\0 ",
        "\b": "\\8 ",
        "\t": "\\9 ",
        "\n": "\\a ",
        "\x0B": "\\b ",
        "\f": "\\c ",
        "\r": "\\d ",
        '"': "\\22 ",
        "&": "\\26 ",
        "'": "\\27 ",
        "(": "\\28 ",
        ")": "\\29 ",
        "*": "\\2a ",
        "/": "\\2f ",
        ":": "\\3a ",
        ";": "\\3b ",
        "<": "\\3c ",
        "=": "\\3d ",
        ">": "\\3e ",
        "@": "\\40 ",
        "\\": "\\5c ",
        "{": "\\7b ",
        "}": "\\7d ",
        "\u0085": "\\85 ",
        "\u00a0": "\\a0 ",
        "\u2028": "\\2028 ",
        "\u2029": "\\2029 "
    };

    function Jk(a) {
        return Ik[a]
    }

    var Kk = {
        "\x00": "%00",
        "\u0001": "%01",
        "\u0002": "%02",
        "\u0003": "%03",
        "\u0004": "%04",
        "\u0005": "%05",
        "\u0006": "%06",
        "\u0007": "%07",
        "\b": "%08",
        "\t": "%09",
        "\n": "%0A",
        "\x0B": "%0B",
        "\f": "%0C",
        "\r": "%0D",
        "\u000e": "%0E",
        "\u000f": "%0F",
        "\u0010": "%10",
        "\u0011": "%11",
        "\u0012": "%12",
        "\u0013": "%13",
        "\u0014": "%14",
        "\u0015": "%15",
        "\u0016": "%16",
        "\u0017": "%17",
        "\u0018": "%18",
        "\u0019": "%19",
        "\u001a": "%1A",
        "\u001b": "%1B",
        "\u001c": "%1C",
        "\u001d": "%1D",
        "\u001e": "%1E",
        "\u001f": "%1F",
        " ": "%20",
        '"': "%22",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "<": "%3C",
        ">": "%3E",
        "\\": "%5C",
        "{": "%7B",
        "}": "%7D",
        "\u007f": "%7F",
        "\u0085": "%C2%85",
        "\u00a0": "%C2%A0",
        "\u2028": "%E2%80%A8",
        "\u2029": "%E2%80%A9",
        "\uff01": "%EF%BC%81",
        "\uff03": "%EF%BC%83",
        "\uff04": "%EF%BC%84",
        "\uff06": "%EF%BC%86",
        "\uff07": "%EF%BC%87",
        "\uff08": "%EF%BC%88",
        "\uff09": "%EF%BC%89",
        "\uff0a": "%EF%BC%8A",
        "\uff0b": "%EF%BC%8B",
        "\uff0c": "%EF%BC%8C",
        "\uff0f": "%EF%BC%8F",
        "\uff1a": "%EF%BC%9A",
        "\uff1b": "%EF%BC%9B",
        "\uff1d": "%EF%BC%9D",
        "\uff1f": "%EF%BC%9F",
        "\uff20": "%EF%BC%A0",
        "\uff3b": "%EF%BC%BB",
        "\uff3d": "%EF%BC%BD"
    };

    function Bk(a) {
        return Kk[a]
    }

    var vk = /[\x00\x22\x27\x3c\x3e]/g, Lk = /[\x00\x08-\x0d\x22\x26-\x2a\/\x3a-\x3e@\\\x7b\x7d\x85\xa0\u2028\u2029]/g,
        Ak = /[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,
        Gk = /^(?!-*(?:expression|(?:moz-)?binding))(?:(?:[.#]?-?(?:[_a-z0-9-]+)(?:-[_a-z0-9-]+)*-?|(?:rgb|hsl)a?\([0-9.%,\u0020]+\)|-?(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:[a-z]{1,4}|%)?|!important)(?:\s+|$))*$/i,
        zk = /^(?![^#?]*\/(?:\.|%2E){2}(?:[\/?#]|$))(?:(?:https?|mailto):|[^&:\/?#]*(?:[\/?#]|$))/i,
        Dk = /^[^&:\/?#]*(?:[\/?#]|$)|^https?:|^data:image\/[a-z0-9+]+;base64,[a-z0-9+\/]+=*$|^blob:/i;

    function yk(a) {
        return String(a).replace(Ak, Bk)
    }

    var tk = /<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]|"[^"]*"|'[^']*')*>/g, uk = /</g;

    function Mk(a, b) {
        this.c = a;
        this.f = b;
        this.b = 0;
        this.a = null
    }

    Mk.prototype.get = function () {
        if (0 < this.b) {
            this.b--;
            var a = this.a;
            this.a = a.next;
            a.next = null
        } else a = this.c();
        return a
    };

    function Nk(a, b) {
        a.f(b);
        100 > a.b && (a.b++, b.next = a.a, a.a = b)
    };

    function Ok(a) {
        v.setTimeout(function () {
            throw a;
        }, 0)
    }

    var Pk;

    function Qk() {
        var a = v.MessageChannel;
        "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !E("Presto") && (a = function () {
            var e = document.createElement(na);
            e.style.display = Hb;
            Ce(e);
            document.documentElement.appendChild(e);
            var f = e.contentWindow;
            e = f.document;
            e.open();
            e.write(ne(xe));
            e.close();
            var h = "callImmediate" + Math.random(),
                k = "file:" == f.location.protocol ? "*" : f.location.protocol + "//" + f.location.host;
            e = C(function (l) {
                    if (("*" == k || l.origin == k) && l.data == h) this.port1.onmessage()
                },
                this);
            f.addEventListener("message", e, !1);
            this.port1 = {};
            this.port2 = {
                postMessage: function () {
                    f.postMessage(h, k)
                }
            }
        });
        if ("undefined" !== typeof a && !he()) {
            var b = new a, c = {}, d = c;
            b.port1.onmessage = function () {
                if (x(c.next)) {
                    c = c.next;
                    var e = c.Xf;
                    c.Xf = null;
                    e()
                }
            };
            return function (e) {
                d.next = {Xf: e};
                d = d.next;
                b.port2.postMessage(0)
            }
        }
        return "undefined" !== typeof document && "onreadystatechange" in document.createElement(ta) ? function (e) {
            var f = document.createElement(ta);
            f.onreadystatechange = function () {
                f.onreadystatechange = null;
                f.parentNode.removeChild(f);
                f = null;
                e();
                e = null
            };
            document.documentElement.appendChild(f)
        } : function (e) {
            v.setTimeout(e, 0)
        }
    };

    function Rk() {
        this.b = this.a = null
    }

    var Tk = new Mk(function () {
        return new Sk
    }, function (a) {
        a.reset()
    });
    Rk.prototype.add = function (a, b) {
        var c = Tk.get();
        c.set(a, b);
        this.b ? this.b.next = c : this.a = c;
        this.b = c
    };
    Rk.prototype.remove = function () {
        var a = null;
        this.a && (a = this.a, this.a = this.a.next, this.a || (this.b = null), a.next = null);
        return a
    };

    function Sk() {
        this.next = this.b = this.a = null
    }

    Sk.prototype.set = function (a, b) {
        this.a = a;
        this.b = b;
        this.next = null
    };
    Sk.prototype.reset = function () {
        this.next = this.b = this.a = null
    };

    function Uk(a, b) {
        Vk || Wk();
        Xk || (Vk(), Xk = !0);
        Yk.add(a, b)
    }

    var Vk;

    function Wk() {
        if (v.Promise && v.Promise.resolve) {
            var a = v.Promise.resolve(void 0);
            Vk = function () {
                a.then(Zk)
            }
        } else Vk = function () {
            var b = Zk;
            !xc(v.setImmediate) || v.Window && v.Window.prototype && !E(la) && v.Window.prototype.setImmediate == v.setImmediate ? (Pk || (Pk = Qk()), Pk(b)) : v.setImmediate(b)
        }
    }

    var Xk = !1, Yk = new Rk;

    function Zk() {
        for (var a; a = Yk.remove();) {
            try {
                a.a.call(a.b)
            } catch (b) {
                Ok(b)
            }
            Nk(Tk, a)
        }
        Xk = !1
    };

    function $k(a) {
        if (!a) return !1;
        try {
            return !!a.$goog_Thenable
        } catch (b) {
            return !1
        }
    };

    function al(a, b) {
        this.a = 0;
        this.l = void 0;
        this.f = this.b = this.c = null;
        this.g = this.h = !1;
        if (a != z) try {
            var c = this;
            a.call(b, function (d) {
                bl(c, 2, d)
            }, function (d) {
                bl(c, 3, d)
            })
        } catch (d) {
            bl(this, 3, d)
        }
    }

    function cl() {
        this.next = this.c = this.b = this.f = this.a = null;
        this.g = !1
    }

    cl.prototype.reset = function () {
        this.c = this.b = this.f = this.a = null;
        this.g = !1
    };
    var dl = new Mk(function () {
        return new cl
    }, function (a) {
        a.reset()
    });

    function el(a, b, c) {
        var d = dl.get();
        d.f = a;
        d.b = b;
        d.c = c;
        return d
    }

    function fl(a) {
        if (a instanceof al) return a;
        var b = new al(z);
        bl(b, 2, a);
        return b
    }

    function gl() {
        var a = hl[5];
        return new al(function (b, c) {
            c(a)
        })
    }

    al.prototype.then = function (a, b, c) {
        return il(this, xc(a) ? a : null, xc(b) ? b : null, c)
    };
    al.prototype.$goog_Thenable = !0;
    al.prototype.cancel = function (a) {
        0 == this.a && Uk(function () {
            var b = new jl(a);
            kl(this, b)
        }, this)
    };

    function kl(a, b) {
        if (0 == a.a) if (a.c) {
            var c = a.c;
            if (c.b) {
                for (var d = 0, e = null, f = null, h = c.b; h && (h.g || (d++, h.a == a && (e = h), !(e && 1 < d))); h = h.next) e || (f = h);
                e && (0 == c.a && 1 == d ? kl(c, b) : (f ? (d = f, d.next == c.f && (c.f = d), d.next = d.next.next) : ll(c), ml(c, e, 3, b)))
            }
            a.c = null
        } else bl(a, 3, b)
    }

    function nl(a, b) {
        a.b || 2 != a.a && 3 != a.a || ol(a);
        a.f ? a.f.next = b : a.b = b;
        a.f = b
    }

    function il(a, b, c, d) {
        var e = el(null, null, null);
        e.a = new al(function (f, h) {
            e.f = b ? function (k) {
                try {
                    var l = b.call(d, k);
                    f(l)
                } catch (m) {
                    h(m)
                }
            } : f;
            e.b = c ? function (k) {
                try {
                    var l = c.call(d, k);
                    !x(l) && k instanceof jl ? h(k) : f(l)
                } catch (m) {
                    h(m)
                }
            } : h
        });
        e.a.c = a;
        nl(a, e);
        return e.a
    }

    al.prototype.o = function (a) {
        this.a = 0;
        bl(this, 2, a)
    };
    al.prototype.B = function (a) {
        this.a = 0;
        bl(this, 3, a)
    };

    function bl(a, b, c) {
        if (0 == a.a) {
            a === c && (b = 3, c = new TypeError("Promise cannot resolve to itself"));
            a.a = 1;
            a:{
                var d = c, e = a.o, f = a.B;
                if (d instanceof al) {
                    nl(d, el(e || z, f || null, a));
                    var h = !0
                } else if ($k(d)) d.then(e, f, a), h = !0; else {
                    if (yc(d)) try {
                        var k = d.then;
                        if (xc(k)) {
                            pl(d, k, e, f, a);
                            h = !0;
                            break a
                        }
                    } catch (l) {
                        f.call(a, l);
                        h = !0;
                        break a
                    }
                    h = !1
                }
            }
            h || (a.l = c, a.a = b, a.c = null, ol(a), 3 != b || c instanceof jl || ql(a, c))
        }
    }

    function pl(a, b, c, d, e) {
        function f(l) {
            k || (k = !0, d.call(e, l))
        }

        function h(l) {
            k || (k = !0, c.call(e, l))
        }

        var k = !1;
        try {
            b.call(a, h, f)
        } catch (l) {
            f(l)
        }
    }

    function ol(a) {
        a.h || (a.h = !0, Uk(a.s, a))
    }

    function ll(a) {
        var b = null;
        a.b && (b = a.b, a.b = b.next, b.next = null);
        a.b || (a.f = null);
        return b
    }

    al.prototype.s = function () {
        for (var a; a = ll(this);) ml(this, a, this.a, this.l);
        this.h = !1
    };

    function ml(a, b, c, d) {
        if (3 == c && b.b && !b.g) for (; a && a.g; a = a.c) a.g = !1;
        if (b.a) b.a.c = null, rl(b, c, d); else try {
            b.g ? b.f.call(b.c) : rl(b, c, d)
        } catch (e) {
            sl.call(null, e)
        }
        Nk(dl, b)
    }

    function rl(a, b, c) {
        2 == b ? a.f.call(a.c, c) : a.b && a.b.call(a.c, c)
    }

    function ql(a, b) {
        a.g = !0;
        Uk(function () {
            a.g && sl.call(null, b)
        })
    }

    var sl = Ok;

    function jl(a) {
        Hc.call(this, a)
    }

    D(jl, Hc);
    jl.prototype.name = "cancel";

    function tl(a, b, c) {
        if (xc(a)) c && (a = C(a, c)); else if (a && typeof a.handleEvent == p) a = C(a.handleEvent, a); else throw Error("Invalid listener argument");
        return 2147483647 < Number(b) ? -1 : v.setTimeout(a, b || 0)
    }

    function ul(a) {
        v.clearTimeout(a)
    };

    function vl(a, b, c) {
        R.call(this);
        this.b = a;
        this.f = b || 0;
        this.c = c;
        this.a = C(this.fi, this)
    }

    D(vl, R);
    u = vl.prototype;
    u.ia = 0;
    u.F = function () {
        vl.m.F.call(this);
        this.stop();
        delete this.b;
        delete this.c
    };
    u.start = function (a) {
        this.stop();
        this.ia = tl(this.a, x(a) ? a : this.f)
    };
    u.stop = function () {
        this.dc() && ul(this.ia);
        this.ia = 0
    };
    u.dc = function () {
        return 0 != this.ia
    };
    u.fi = function () {
        this.ia = 0;
        this.b && this.b.call(this.c)
    };
    var wl = function () {
        if (bf) {
            var a = /Windows NT ([0-9.]+)/;
            return (a = a.exec(de)) ? a[1] : "0"
        }
        return af ? (a = /10[_.][0-9_.]+/, (a = a.exec(de)) ? a[0].replace(/_/g, ".") : "10") : cf ? (a = /Android\s+([^\);]+)(\)|;)/, (a = a.exec(de)) ? a[1] : "") : df || ef || gf ? (a = /(?:iPhone|CPU)\s+OS\s+(\S+)/, (a = a.exec(de)) ? a[1].replace(/_/g, ".") : "") : ""
    }();

    function xl(a) {
        return (a = a.exec(de)) ? a[1] : ""
    }

    var yl = function () {
        if (tf) return xl(/Firefox\/([0-9.]+)/);
        if (F || Ye || Xe) return of;
        if (xf) return Se() ? xl(/CriOS\/([0-9.]+)/) : xl(/Chrome\/([0-9.]+)/);
        if (yf && !Se()) return xl(/Version\/([0-9.]+)/);
        if (uf || vf) {
            var a = /Version\/(\S+).*Mobile\/(\S+)/.exec(de);
            if (a) return a[1] + "." + a[2]
        } else if (wf) return (a = xl(/Android\s+([0-9.]+)/)) ? a : xl(/Version\/([0-9.]+)/);
        return ""
    }();

    function zl(a, b, c, d, e, f, h, k, l) {
        var m = Al(c);
        var n = bh(a);
        var r = dh(a);
        n = new Rg(n.x, n.y, r.width, r.height);
        if (r = ah(a)) {
            var w = new Rg(r.left, r.top, r.right - r.left, r.bottom - r.top);
            r = Math.max(n.left, w.left);
            var H = Math.min(n.left + n.width, w.left + w.width);
            if (r <= H) {
                var G = Math.max(n.top, w.top);
                w = Math.min(n.top + n.height, w.top + w.height);
                G <= w && (n.left = r, n.top = G, n.width = H - r, n.height = w - G)
            }
        }
        r = Wf(a);
        G = Wf(c);
        r.a != G.a && (H = r.a.body, G = ch(H, Pg(G)), G = Uf(G, bh(H)), !F || pf(9) || fg(r.a) || (G = Uf(G, gg(r.a))), n.left += G.x, n.top += G.y);
        a = Bl(a, b);
        b = n.left;
        a & 4 ? b += n.width : a & 2 && (b += n.width / 2);
        b = new N(b, n.top + (a & 1 ? n.height : 0));
        b = Uf(b, m);
        e && (b.x += (a & 4 ? -1 : 1) * e.x, b.y += (a & 1 ? -1 : 1) * e.y);
        if (h) if (l) var ea = l; else if (ea = ah(c)) ea.top -= m.y, ea.right -= m.x, ea.bottom -= m.y, ea.left -= m.x;
        return Cl(b, c, d, f, ea, h, k)
    }

    function Al(a) {
        if (a = a.offsetParent) {
            var b = "HTML" == a.tagName || "BODY" == a.tagName;
            if (!b || "static" != Vg(a, Nb)) {
                var c = bh(a);
                if (!b) {
                    b = hh(a);
                    var d;
                    if (d = b) {
                        d = yf && 0 <= Gd(yl, 10);
                        var e;
                        if (e = hf) e = 0 <= Gd(wl, 10);
                        d = I || d || e
                    }
                    b = d ? -a.scrollLeft : !b || Ze && K("8") || Vg(a, "overflowX") == gc ? a.scrollLeft : a.scrollWidth - a.clientWidth - a.scrollLeft;
                    c = Uf(c, new N(b, a.scrollTop))
                }
            }
        }
        return c || new N
    }

    function Cl(a, b, c, d, e, f, h) {
        a = Tf(a);
        var k = Bl(b, c);
        c = dh(b);
        h = h ? new Vf(h.width, h.height) : new Vf(c.width, c.height);
        a = Tf(a);
        h = new Vf(h.width, h.height);
        var l = 0;
        if (d || 0 != k) k & 4 ? a.x -= h.width + (d ? d.right : 0) : k & 2 ? a.x -= h.width / 2 : d && (a.x += d.left), k & 1 ? a.y -= h.height + (d ? d.bottom : 0) : d && (a.y += d.top);
        if (f) {
            if (e) {
                d = a;
                k = h;
                l = 0;
                65 == (f & 65) && (d.x < e.left || d.x >= e.right) && (f &= -2);
                132 == (f & 132) && (d.y < e.top || d.y >= e.bottom) && (f &= -5);
                d.x < e.left && f & 1 && (d.x = e.left, l |= 1);
                if (f & 16) {
                    var m = d.x;
                    d.x < e.left && (d.x = e.left, l |= 4);
                    d.x + k.width > e.right &&
                    (k.width = Math.min(e.right - d.x, m + k.width - e.left), k.width = Math.max(k.width, 0), l |= 4)
                }
                d.x + k.width > e.right && f & 1 && (d.x = Math.max(e.right - k.width, e.left), l |= 1);
                f & 2 && (l |= (d.x < e.left ? 16 : 0) | (d.x + k.width > e.right ? 32 : 0));
                d.y < e.top && f & 4 && (d.y = e.top, l |= 2);
                f & 32 && (m = d.y, d.y < e.top && (d.y = e.top, l |= 8), d.y + k.height > e.bottom && (k.height = Math.min(e.bottom - d.y, m + k.height - e.top), k.height = Math.max(k.height, 0), l |= 8));
                d.y + k.height > e.bottom && f & 4 && (d.y = Math.max(e.bottom - k.height, e.top), l |= 2);
                f & 8 && (l |= (d.y < e.top ? 64 : 0) | (d.y + k.height >
                e.bottom ? 128 : 0));
                e = l
            } else e = 256;
            l = e
        }
        f = new Rg(0, 0, 0, 0);
        f.left = a.x;
        f.top = a.y;
        f.width = h.width;
        f.height = h.height;
        e = l;
        if (e & 496) return e;
        Wg(b, new N(f.left, f.top));
        h = new Vf(f.width, f.height);
        c == h || c && h && c.width == h.width && c.height == h.height || (c = h, a = fg(Wf(O(b)).a), !F || K("10") || a && K("8") ? mh(b, c, Ma) : (h = b.style, a ? (a = nh(b), b = oh(b), h.pixelWidth = c.width - b.left - a.left - a.right - b.right, h.pixelHeight = c.height - b.top - a.top - a.bottom - b.bottom) : (h.pixelWidth = c.width, h.pixelHeight = c.height)));
        return e
    }

    function Bl(a, b) {
        return (b & 8 && hh(a) ? b ^ 4 : b) & -9
    };

    function Dl() {
    }

    Dl.prototype.b = ic();

    function El() {
    }

    El.prototype.a = null;

    function Fl(a) {
        var b;
        (b = a.a) || (b = {}, Gl(a) && (b[0] = !0, b[1] = !0), b = a.a = b);
        return b
    };var Hl;

    function Il() {
    }

    D(Il, El);

    function Jl(a) {
        return (a = Gl(a)) ? new ActiveXObject(a) : new XMLHttpRequest
    }

    function Gl(a) {
        if (!a.b && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
            for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0; c < b.length; c++) {
                var d = b[c];
                try {
                    return new ActiveXObject(d), a.b = d
                } catch (e) {
                }
            }
            throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
        }
        return a.b
    }

    Hl = new Il;

    function Kl(a) {
        mi.call(this);
        this.headers = new Aj;
        this.ge = a || null;
        this.ma = !1;
        this.fe = this.N = null;
        this.rb = "";
        this.Ha = 0;
        this.Qd = "";
        this.Qb = this.We = this.Kd = this.xe = !1;
        this.Vc = 0;
        this.ce = null;
        this.$g = "";
        this.Gf = this.uh = !1
    }

    D(Kl, mi);
    Kl.prototype.wa = null;
    var Ll = /^https?$/i, Ml = [sa, "PUT"], Nl = [];

    function Ol(a, b, c, d, e) {
        var f = new Kl;
        Nl.push(f);
        b && f.w(Va, b);
        f.Bb(Rb, f.Th);
        e && (f.Vc = Math.max(0, e));
        f.send(a, c, d, void 0)
    }

    u = Kl.prototype;
    u.Th = function () {
        this.M();
        Uc(Nl, this)
    };
    u.send = function (a, b, c, d) {
        if (this.N) throw Error("[goog.net.XhrIo] Object is active with another request=" + this.rb + "; newUri=" + a);
        b = b ? b.toUpperCase() : "GET";
        this.rb = a;
        this.Qd = "";
        this.Ha = 0;
        this.xe = !1;
        this.ma = !0;
        this.N = this.ge ? Jl(this.ge) : Jl(Hl);
        this.fe = this.ge ? Fl(this.ge) : Fl(Hl);
        this.N.onreadystatechange = C(this.Sg, this);
        try {
            this.ya(), this.We = !0, this.N.open(b, String(a), !0), this.We = !1
        } catch (f) {
            this.ya();
            this.kd(5, f);
            return
        }
        a = c || "";
        var e = new Aj(this.headers);
        d && Gj(d, function (f, h) {
            e.set(h, f)
        });
        d = Sc(e.Ra(),
            Pl);
        c = v.FormData && a instanceof v.FormData;
        !Tc(Ml, b) || d || c || e.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
        e.forEach(function (f, h) {
            this.N.setRequestHeader(h, f)
        }, this);
        this.$g && (this.N.responseType = this.$g);
        hc in this.N && this.N.withCredentials !== this.uh && (this.N.withCredentials = this.uh);
        try {
            Ql(this), 0 < this.Vc && (this.Gf = Rl(this.N), this.ya(), this.Gf ? (this.N.timeout = this.Vc, this.N.ontimeout = C(this.Fb, this)) : this.ce = tl(this.Fb, this.Vc, this)), this.ya(), this.Kd = !0, this.N.send(a),
                this.Kd = !1
        } catch (f) {
            this.ya(), this.kd(5, f)
        }
    };

    function Rl(a) {
        return F && K(9) && sc(a.timeout) && x(a.ontimeout)
    }

    function Pl(a) {
        return "content-type" == a.toLowerCase()
    }

    u.Fb = function () {
        "undefined" != typeof rc && this.N && (this.Qd = "Timed out after " + this.Vc + "ms, aborting", this.Ha = 8, this.ya(), this.dispatchEvent("timeout"), this.abort(8))
    };
    u.kd = function (a, b) {
        this.ma = !1;
        this.N && (this.Qb = !0, this.N.abort(), this.Qb = !1);
        this.Qd = b;
        this.Ha = a;
        Sl(this);
        Tl(this)
    };

    function Sl(a) {
        a.xe || (a.xe = !0, a.dispatchEvent(Va), a.dispatchEvent("error"))
    }

    u.abort = function (a) {
        this.N && this.ma && (this.ya(), this.ma = !1, this.Qb = !0, this.N.abort(), this.Qb = !1, this.Ha = a || 7, this.dispatchEvent(Va), this.dispatchEvent("abort"), Tl(this))
    };
    u.F = function () {
        this.N && (this.ma && (this.ma = !1, this.Qb = !0, this.N.abort(), this.Qb = !1), Tl(this, !0));
        Kl.m.F.call(this)
    };
    u.Sg = function () {
        this.vb || (this.We || this.Kd || this.Qb ? Ul(this) : this.lj())
    };
    u.lj = function () {
        Ul(this)
    };

    function Ul(a) {
        if (a.ma && "undefined" != typeof rc) if (a.fe[1] && 4 == Vl(a) && 2 == a.ya()) a.ya(); else if (a.Kd && 4 == Vl(a)) tl(a.Sg, 0, a); else if (a.dispatchEvent(Sb), a.Nd()) {
            a.ya();
            a.ma = !1;
            try {
                if (a.Pc()) a.dispatchEvent(Va), a.dispatchEvent("success"); else {
                    a.Ha = 6;
                    try {
                        var b = 2 < Vl(a) ? a.N.statusText : ""
                    } catch (c) {
                        b = ""
                    }
                    a.Qd = b + " [" + a.ya() + "]";
                    Sl(a)
                }
            } finally {
                Tl(a)
            }
        }
    }

    function Tl(a, b) {
        if (a.N) {
            Ql(a);
            var c = a.N, d = a.fe[0] ? z : null;
            a.N = null;
            a.fe = null;
            b || a.dispatchEvent(Rb);
            try {
                c.onreadystatechange = d
            } catch (e) {
            }
        }
    }

    function Ql(a) {
        a.N && a.Gf && (a.N.ontimeout = null);
        a.ce && (ul(a.ce), a.ce = null)
    }

    u.dc = function () {
        return !!this.N
    };
    u.Nd = function () {
        return 4 == Vl(this)
    };
    u.Pc = function () {
        var a = this.ya();
        a:switch (a) {
            case 200:
            case 201:
            case 202:
            case 204:
            case 206:
            case 304:
            case 1223:
                var b = !0;
                break a;
            default:
                b = !1
        }
        if (!b) {
            if (a = 0 === a) a = String(this.rb).match(Hj)[1] || null, !a && v.self && v.self.location && (a = v.self.location.protocol, a = a.substr(0, a.length - 1)), a = !Ll.test(a ? a.toLowerCase() : "");
            b = a
        }
        return b
    };

    function Vl(a) {
        return a.N ? a.N.readyState : 0
    }

    u.ya = function () {
        try {
            return 2 < Vl(this) ? this.N.status : -1
        } catch (a) {
            return -1
        }
    };
    u.Ee = function () {
        return String(this.rb)
    };
    u.Lb = function () {
        try {
            return this.N ? this.N.responseText : ""
        } catch (a) {
            return ""
        }
    };
    u.getResponseHeader = function (a) {
        if (this.N && this.Nd()) return a = this.N.getResponseHeader(a), null === a ? void 0 : a
    };
    u.getAllResponseHeaders = function () {
        return this.N && this.Nd() ? this.N.getAllResponseHeaders() || "" : ""
    };
    u.De = q("Ha");

    function Xl() {
        this.b = [];
        this.a = {};
        this.c = !1;
        this.B = 1;
        this.g = {};
        this.f = null;
        this.s = "";
        S(window, "beforeunload", this.o, !1, this)
    }

    vc(Xl);

    function Yl(a, b, c) {
        if (null == b) return "1";
        switch (A(b)) {
            case Xb:
                return a = b, !(64 < a.length) || null != c && c || (a = a.substr(0, 64)), Ie(a);
            case Ib:
                return "" + b;
            case "boolean":
                return b ? "1" : "0";
            case Ha:
                var d = [], e;
                for (e in b) d.push(Yl(a, b[e], c));
                return d.join(",");
            case Jb:
                d = [];
                for (e in b) d.push(Zl(a, e, b[e], c));
                return d.join(",");
            default:
                return ""
        }
    }

    function Zl(a, b, c, d) {
        return [Ie(b), Yl(a, c, d || "smtalt" == b)].join("=")
    }

    Xl.prototype.log = function (a, b) {
        this.b.push([a, b]);
        this.c || (this.c = !0, tl(this.h, 0, this))
    };
    Xl.prototype.h = function () {
        for (var a = 0; a < this.b.length; a++) {
            var b = this.b[a];
            $l(this, b[0], b[1])
        }
        this.b = [];
        this.c = !1
    };

    function $l(a, b, c) {
        am(a, a.s + "/gen204?" + (a.f ? ["client=", a.f, "&"].join("") : "") + Zl(a, b, c))
    }

    function am(a, b) {
        var c = new Image, d = a.B++;
        a.g[d] = c;
        c.onload = c.onerror = function () {
            delete Xl.X().g[d]
        };
        c.src = b;
        c = null
    }

    function bm(a, b) {
        var c = 0, d = null;
        b in a.a && (d = a.a[b], c = d[0], d = d[1]);
        if (A(1) == Jb) {
            A(d) != Jb && (d = {});
            for (var e in 1) d[e] = cm(e in d ? d[e] : null, 1[e])
        } else d = cm(d, 1);
        a.a[b] = [c, d];
        ul(a.a[b][0]);
        c = tl(C(a.l, a, b), 2E3);
        a.a[b][0] = c
    }

    Xl.prototype.l = function (a) {
        $l(this, a, this.a[a][1]);
        a in this.a && (ul(this.a[a][0]), delete this.a[a])
    };

    function cm(a, b) {
        null != b || (b = 1);
        isNaN(a) && (a = parseInt(a, 10));
        isNaN(b) && (b = parseInt(b, 10));
        return a + b
    }

    Xl.prototype.o = function () {
        this.h();
        for (var a in this.a) 0 != this.a[a] && this.l(a)
    };

    function dm() {
    }

    vc(dm);

    function em(a) {
        Bf(this, a, fm)
    }

    D(em, zf);

    function gm(a) {
        Bf(this, a, hm)
    }

    D(gm, zf);

    function im(a) {
        Bf(this, a, jm)
    }

    D(im, zf);

    function km(a) {
        Bf(this, a, lm)
    }

    D(km, zf);

    function mm(a) {
        Bf(this, a, null)
    }

    D(mm, zf);
    var fm = [3, 4], hm = [3], jm = [2], lm = [26, 80];
    km.prototype.cb = function () {
        return Ef(this, 16)
    };
    km.prototype.Tb = function (a) {
        Ff(this, 16, a)
    };
    km.prototype.na = function () {
        return Ef(this, 1)
    };
    km.prototype.ua = function (a) {
        Ff(this, 1, a)
    };

    function nm() {
        this.c = this.a = "";
        dm.X()
    }

    vc(nm);
    nm.prototype.Tb = jc("a");
    nm.prototype.ua = jc("c");
    nm.prototype.store = function (a) {
        Ff(a, 65, 0);
        a.Tb(this.a);
        Ff(a, 14, "");
        a.ua(this.c);
        Ff(a, 50, "");
        Ff(a, 52, "");
        Ff(a, 32, 0)
    };

    function om(a, b) {
        if (null == a || null == b) return null == a == (null == b);
        if (a.constructor != Array && a.constructor != Object) throw Error("Invalid object type passed into jsproto.areObjectsEqual()");
        if (a === b) return !0;
        if (a.constructor != b.constructor) return !1;
        for (var c in a) if (!(c in b && pm(a[c], b[c]))) return !1;
        for (var d in b) if (!(d in a)) return !1;
        return !0
    }

    function pm(a, b) {
        if (a === b || !(!0 !== a && 1 !== a || !0 !== b && 1 !== b) || !(!1 !== a && 0 !== a || !1 !== b && 0 !== b)) return !0;
        if (a instanceof Object && b instanceof Object) {
            if (!om(a, b)) return !1
        } else return !1;
        return !0
    };

    function qm(a) {
        this.oa = a || []
    }

    function rm(a, b, c) {
        a = a.oa[b];
        return null != a ? a : c
    }

    function sm(a, b) {
        return !!rm(a, b, void 0)
    }

    function tm(a, b) {
        return rm(a, b, 0)
    }

    function um(a, b) {
        return rm(a, b, "")
    }

    function vm(a, b, c) {
        a = a.oa;
        a[b] || (a[b] = []);
        return a[b][c]
    }

    function Y(a, b) {
        return a.oa[b] ? a.oa[b].length : 0
    }

    qm.prototype.Gb = q("oa");
    qm.prototype.Ej = function (a) {
        var b = this.oa;
        this.oa = a.oa;
        a.oa = b
    };

    function wm(a) {
        this.oa = a || []
    }

    D(wm, qm);

    function xm() {
        this.b = nm.X()
    }

    D(xm, R);
    vc(xm);
    xm.prototype.a = function () {
        ym(this, 25)
    };

    function ym(a, b) {
        var c = new km;
        a.b.store(c);
        Ff(c, 31, b);
        return c
    };

    function zm() {
        this.a = []
    }

    zm.prototype.add = function (a) {
        this.a.push(a)
    };

    function Am() {
        this.a = []
    }

    D(Am, zm);
    vc(Am);
    Am.prototype.add = function (a) {
        if (a) for (; a();) ;
    };

    function Bm(a) {
        this.a = [];
        this.b = .5;
        Cm(this, a);
        this.f = 0;
        this.c = !0;
        this.g = C(this.h, this)
    }

    D(Bm, zm);

    function Cm(a, b) {
        1 < b ? a.b = 1 : .001 > b ? a.b = .001 : b && (a.b = b)
    }

    Bm.prototype.add = function (a) {
        Bm.m.add.call(this, a);
        this.c && Dm(this)
    };

    function Dm(a) {
        a.c = !1;
        window.setTimeout(a.g, Math.min(a.f, 5E3))
    }

    Bm.prototype.h = function () {
        var a = (new Date).getTime();
        do {
            this.a.length && (this.a[0] && this.a[0]() || this.a.shift());
            var b = !!this.a.length;
            var c = 95 * this.b + 5;
            var d = (new Date).getTime() - a
        } while (b && d < c);
        this.f = Math.ceil(d * (1 / this.b - 1)) + 1;
        b ? Dm(this) : this.c = !0
    };

    function Em(a, b) {
        this.o = a || null;
        this.C = b || Am.X();
        this.l = this.h = this.G = null;
        this.f = this.c = !1;
        this.g = null;
        this.a = [];
        this.b = 0
    }

    function Fm() {
    }

    function Gm() {
    }

    function Hm(a, b) {
        a.c || (a.G = b)
    }

    function Im(a, b, c) {
        a.h = c ? C(b, c) : b
    }

    function Jm(a, b, c) {
        a.l = c ? C(b, c) : b
    }

    function Km(a, b) {
        a.c || (a.c = !0, a.B = b, a.b++, a.g = a.G, a.s())
    }

    Em.prototype.stop = function () {
        this.b++;
        this.c = !1;
        this.a = []
    };

    function Lm(a) {
        if (!a.c) return null;
        for (var b = !1, c = 0; c < a.a.length; ++c) if (a.a[c].target === a) {
            a.a[c].ready = !1;
            a.a[c].sh = a.b + 1;
            b = !0;
            break
        }
        b || a.a.push({target: a, ready: !1, sh: a.b + 1});
        return C(a.s, a, a, a.b + 1)
    }

    function Mm(a) {
        if (!a.c) return !0;
        for (var b = 0; b < a.a.length; ++b) if (a.a[b].target === a && a.a[b].sh == a.b) return a.a[b].ready;
        return !0
    }

    Em.prototype.s = function (a, b) {
        if (this.c) {
            if (a) for (var c = 0; c < this.a.length; ++c) if (this.a[c].target === a) {
                this.a[c].ready = !0;
                break
            }
            this.f || this.C.add(C(this.I, this, b || this.b))
        }
    };
    Em.prototype.I = function (a) {
        if (this.b != a) return !1;
        a = this.g;
        if (a == Gm) return this.stop(), this.h && this.h.call(this.o, this, this.B), !1;
        this.f = !0;
        try {
            var b = a.call(this.o, this, this.B);
            if (!b) throw Error();
        } catch (c) {
            this.stop();
            a = c;
            if (this.l) this.l.call(this.o, a, this, this.B); else throw a;
            return !1
        } finally {
            this.f = !1
        }
        b != Fm && (this.g = b, this.b++, this.s());
        return !1
    };

    function Nm() {
        mi.call(this);
        this.a = 0;
        this.endTime = this.b = null
    }

    D(Nm, mi);
    Nm.prototype.c = function () {
        this.Qa("begin")
    };
    Nm.prototype.f = function () {
        this.Qa("end")
    };
    Nm.prototype.Cb = function () {
        this.Qa("stop")
    };
    Nm.prototype.Qa = function (a) {
        this.dispatchEvent(a)
    };

    function Om(a, b) {
        B(b) || (b = [b]);
        b = Pc(b, function (c) {
            return y(c) ? c : c.Sk + " " + c.duration + "s " + c.timing + " " + c.delay + "s"
        });
        P(a, dc, b.join(","))
    }

    var Pm = Zc(function () {
        if (F) return K("10.0");
        var a = document.createElement(g), b = J ? "-webkit" : I ? "-moz" : F ? "-ms" : Xe ? "-o" : null,
            c = {transition: Kb};
        b && (c[b + "-transition"] = Kb);
        b = te($a, {style: c});
        Ae(a, b);
        a = a.firstChild;
        b = a.style[Pe(dc)];
        return "" != ("undefined" !== typeof b ? b : a.style[Sg(a, dc)] || "")
    });

    function Qm(a, b, c, d, e) {
        Nm.call(this);
        this.A = a;
        this.l = b;
        this.s = c;
        this.g = d;
        this.o = B(e) ? e : [e]
    }

    D(Qm, Nm);
    u = Qm.prototype;
    u.play = function () {
        if (1 == this.a) return !1;
        this.c();
        this.Qa("play");
        this.b = Fc();
        this.a = 1;
        if (Pm()) return P(this.A, this.s), this.h = tl(this.rj, void 0, this), !0;
        this.Df(!1);
        return !1
    };
    u.rj = function () {
        dh(this.A);
        Om(this.A, this.o);
        P(this.A, this.g);
        this.h = tl(C(this.Df, this, !1), 1E3 * this.l)
    };
    u.stop = function () {
        1 == this.a && this.Df(!0)
    };
    u.Df = function (a) {
        P(this.A, dc, "");
        ul(this.h);
        P(this.A, this.g);
        this.endTime = Fc();
        this.a = 0;
        a ? this.Cb() : this.Qa(ab);
        this.f()
    };
    u.F = function () {
        this.stop();
        Qm.m.F.call(this)
    };

    function Rm(a, b) {
        mi.call(this);
        this.h = new gi(this);
        this.$b(a || null);
        b && (this.nc = b)
    }

    D(Rm, mi);
    u = Rm.prototype;
    u.A = null;
    u.sc = !0;
    u.Vf = null;
    u.fc = !1;
    u.bf = -1;
    u.nc = ac;
    u.j = q("A");
    u.$b = function (a) {
        Sm(this);
        this.A = a
    };
    u.Sc = function (a) {
        Sm(this);
        this.sc = a
    };

    function Sm(a) {
        if (a.fc) throw Error("Can not change this state of the popup while showing.");
    }

    u.isVisible = q("fc");
    u.J = function (a) {
        this.va && this.va.stop();
        this.qa && this.qa.stop();
        if (a) {
            if (!this.fc && this.Ne()) {
                if (!this.A) throw Error("Caller must call setElement before trying to show the popup");
                this.ob();
                a = O(this.A);
                if (this.sc) if (this.h.w(a, Bb, this.lf, !0), F) {
                    try {
                        var b = a.activeElement
                    } catch (d) {
                    }
                    for (; b && b.nodeName == na;) {
                        try {
                            var c = Dg(b)
                        } catch (d) {
                            break
                        }
                        a = c;
                        b = a.activeElement
                    }
                    this.h.w(a, Bb, this.lf, !0);
                    this.h.w(a, "deactivate", this.Rg)
                } else this.h.w(a, La, this.Rg);
                this.nc == ac ? (this.A.style.visibility = gc, Q(this.A, !0)) : this.nc ==
                    Gb && this.ob();
                this.fc = !0;
                this.bf = Fc();
                this.va ? (Uh(this.va, "end", this.Tg, !1, this), this.va.play()) : this.Tg()
            }
        } else Tm(this)
    };
    u.ob = z;

    function Tm(a, b) {
        a.fc && a.dispatchEvent({
            type: "beforehide",
            target: b
        }) && (a.h && li(a.h), a.fc = !1, Fc(), a.qa ? (Uh(a.qa, "end", Ec(a.Yf, b), !1, a), a.qa.play()) : a.Yf(b))
    }

    u.Yf = function (a) {
        this.nc == ac ? this.Qi() : this.nc == Gb && (this.A.style.top = "-10000px");
        this.mf(a)
    };
    u.Qi = function () {
        this.A.style.visibility = rb;
        Q(this.A, !1)
    };
    u.Ne = function () {
        return this.dispatchEvent("beforeshow")
    };
    u.Tg = function () {
        this.dispatchEvent("show")
    };
    u.mf = function (a) {
        this.dispatchEvent({type: sb, target: a})
    };
    u.lf = function (a) {
        a = a.target;
        yg(this.A, a) || Um(this, a) || 150 > Fc() - this.bf || Tm(this, a)
    };
    u.Rg = function (a) {
        var b = O(this.A);
        if ("undefined" != typeof document.activeElement) {
            if (a = b.activeElement, !a || yg(this.A, a) || "BODY" == a.tagName) return
        } else if (a.target != b) return;
        150 > Fc() - this.bf || Tm(this)
    };

    function Um(a, b) {
        return Qc(a.Vf || [], function (c) {
            return b === c || yg(c, b)
        })
    }

    u.F = function () {
        Rm.m.F.call(this);
        this.h.M();
        xh(this.va);
        xh(this.qa);
        delete this.A;
        delete this.h;
        delete this.Vf
    };

    function Vm(a, b) {
        this.s = b || void 0;
        Rm.call(this, a)
    }

    D(Vm, Rm);
    Vm.prototype.ob = function () {
        if (this.s) {
            var a = !this.isVisible() && this.nc != Gb, b = this.j();
            a && (b.style.visibility = rb, Q(b, !0));
            this.s.b(b, 8, this.ef);
            a && Q(b, !1)
        }
    };

    function Wm(a, b) {
        Vm.call(this, a);
        this.c = b;
        this.a = 0;
        this.b = null;
        this.f = 0;
        this.J(!0);
        this.J(!1);
        M(this.j(), "round-trip-popup");
        M(this.c, "round-trip-content")
    }

    D(Wm, Vm);
    Wm.prototype.o = function () {
        ul(this.f);
        1 == this.a ? Uh(this.b, ab, C(this.o, this)) : 0 == this.a && (this.f = tl(C(this.l, this, -1), 200))
    };
    Wm.prototype.l = function (a) {
        if (this.a != a && (0 != this.a || !(this.isVisible() && 1 == a || !this.isVisible() && -1 == a))) {
            var b = this.isVisible();
            this.J(!0);
            var c = -Math.ceil(dh(this.c).width);
            hh(this.j()) && (c = -c);
            var d = 1 == a ? c : 0;
            c = 1 == a ? 0 : c;
            this.J(b);
            if (Pm()) {
                b = .2;
                if (0 != this.a) {
                    var e = parseInt(Ug(this.c, "left"), 10);
                    this.g();
                    b *= (c - e) / (c - d);
                    d = e
                }
                this.a = a;
                this.b = new Qm(this.c, b, {left: d + "px"}, {left: c + "px"}, "left " + b + "s");
                this.b.play();
                Uh(this.b, ab, C(this.g, this));
                -1 == a ? Uh(this.b, ab, C(this.J, this, !1)) : this.J(!0)
            } else P(this.c,
                "left", c + "px"), this.J(1 == a ? !0 : !1)
        }
    };
    Wm.prototype.g = function () {
        0 != this.a && (this.b.stop(), tl(C(ci, this, this.b)), this.a = 0, this.b = null)
    };

    function Xm(a) {
        this.oa = a || []
    }

    D(Xm, qm);

    function Ym(a) {
        this.oa = a || []
    }

    D(Ym, qm);

    function Zm(a) {
        this.oa = a || []
    }

    D(Zm, qm);

    function $m(a, b) {
        return new Xm(vm(a, 2, b))
    };

    function an(a) {
        this.oa = a || []
    }

    D(an, qm);

    function bn(a, b) {
        return new Zm(vm(a, 5, b))
    };

    function cn() {
        this.A = null;
        this.a = jg(g, "gt-hl-layer", document.createTextNode(""));
        this.b = null;
        this.A && (rg(this.a, this.A), dn(this))
    }

    function en(a, b, c, d, e) {
        var f = d || "gt-hl-text";
        d = a.A && (a.A.value || Lg(a.A));
        dn(a);
        qg(a.a);
        if (b != c || e) {
            if (0 < b) {
                var h = d.substring(0, b);
                fn(a.a, h, 0, e)
            }
            b < c && (h = d.substring(b, c), f = jg(ua, f), fn(f, h, b, e), a.a.appendChild(f));
            c < d.length && (h = d.substring(c), fn(a.a, h, c, e))
        }
    }

    function dn(a) {
        var b = a.A;
        var c = O(b), d = F && b.currentStyle;
        d && fg(Wf(c).a) && d.width != Ia && d.height != Ia && !d.boxSizing ? (c = ph(b, d.width, "width", "pixelWidth"), b = ph(b, d.height, "height", "pixelHeight"), b = new Vf(c, b)) : (d = kh(b), c = nh(b), b = oh(b), b = new Vf(d.width - b.left - c.left - c.right - b.right, d.height - b.top - c.top - c.bottom - b.bottom));
        lh(a.a, b);
        c = bh(a.A);
        b = a.a;
        d = c.x;
        c = c.y;
        var e = bh(b);
        d instanceof N && (c = d.y, d = d.x);
        Wg(b, b.offsetLeft + (d - e.x), b.offsetTop + (Number(c) - e.y));
        b = nh(a.A);
        P(a.a, Lb, b.left + "px");
        P(a.a, Mb, b.right +
            "px");
        a.a.dir = a.A.dir
    }

    function fn(a, b, c, d) {
        d = d || [];
        for (var e = 0, f; f = d[e]; e++) if (!(0 > f.Bc - c)) {
            if (f.Bc - c >= b.length) break;
            if (0 < f.Bc - c) {
                var h = b.substring(0, f.Bc - c);
                gn(a, h)
            }
            var k = f.className || "gt-hl-text";
            h = b.substring(f.Bc - c, f.Ef - c);
            k = jg(ua, k);
            gn(k, h);
            a.appendChild(k);
            b = b.substring(f.Ef - c);
            c = f.Ef
        }
        b && gn(a, b)
    }

    function gn(a, b) {
        b = b.replace(/(\r\n|\r|\n)/g, "\n").split("\n");
        for (var c = 0, d = b.length; c < d; c++) {
            if (0 < c) {
                var e = jg("BR");
                a.appendChild(e)
            }
            a.appendChild(document.createTextNode(String(b[c])))
        }
    };

    function hn(a, b, c, d, e) {
        this.f = !!b;
        this.node = null;
        this.c = 0;
        this.o = !1;
        this.C = !c;
        a && jn(this, a, d);
        this.depth = void 0 != e ? e : this.c || 0;
        this.f && (this.depth *= -1)
    }

    D(hn, xj);

    function jn(a, b, c, d) {
        if (a.node = b) a.c = sc(c) ? c : 1 != a.node.nodeType ? 0 : a.f ? -1 : 1;
        sc(d) && (a.depth = d)
    }

    hn.prototype.g = function () {
        var a = this.f ? -1 : 1;
        this.c == a && (this.c = -1 * a, this.depth += this.c * (this.f ? -1 : 1))
    };
    hn.prototype.next = function () {
        if (this.o) {
            if (!this.node || this.C && 0 == this.depth) throw wj;
            var a = this.node;
            var b = this.f ? -1 : 1;
            if (this.c == b) {
                var c = this.f ? a.lastChild : a.firstChild;
                c ? jn(this, c) : jn(this, a, -1 * b)
            } else (c = this.f ? a.previousSibling : a.nextSibling) ? jn(this, c) : jn(this, a.parentNode, -1 * b);
            this.depth += this.c * (this.f ? -1 : 1)
        } else this.o = !0;
        a = this.node;
        if (!this.node) throw wj;
        return a
    };
    hn.prototype.splice = function (a) {
        var b = this.node, c = this.f ? 1 : -1;
        this.c == c && (this.c = -1 * c, this.depth += this.c * (this.f ? -1 : 1));
        this.f = !this.f;
        hn.prototype.next.call(this);
        this.f = !this.f;
        c = wc(arguments[0]) ? arguments[0] : arguments;
        for (var d = c.length - 1; 0 <= d; d--) sg(c[d], b);
        tg(b)
    };

    function kn() {
    }

    function ln(a) {
        if (a.getSelection) return a.getSelection();
        a = a.document;
        var b = a.selection;
        if (b) {
            try {
                var c = b.createRange();
                if (c.parentElement) {
                    if (c.parentElement().document != a) return null
                } else if (!c.length || c.item(0).document != a) return null
            } catch (d) {
                return null
            }
            return b
        }
        return null
    }

    function mn(a) {
        for (var b = [], c = 0, d = a.Gc(); c < d; c++) b.push(a.Xb(c));
        return b
    }

    function nn(a) {
        return a.Ze() ? a.Ma() : a.eb()
    }

    kn.prototype.Ze = t(!1);

    function on(a, b) {
        hn.call(this, a, b, !0)
    }

    D(on, hn);

    function pn(a, b, c, d, e) {
        this.b = this.a = null;
        this.B = this.G = 0;
        this.h = !!e;
        if (a) {
            this.a = a;
            this.G = b;
            this.b = c;
            this.B = d;
            if (1 == a.nodeType && "BR" != a.tagName) if (a = a.childNodes, b = a[b]) this.a = b, this.G = 0; else {
                a.length && (this.a = Lc(a));
                var f = !0
            }
            1 == c.nodeType && ((this.b = c.childNodes[d]) ? this.B = 0 : this.b = c)
        }
        hn.call(this, this.h ? this.b : this.a, this.h, !0);
        if (f) try {
            this.next()
        } catch (h) {
            if (h != wj) throw h;
        }
    }

    D(pn, on);
    pn.prototype.s = q("a");
    pn.prototype.l = function () {
        return this.o && (this.node != (this.h ? this.a : this.b) ? !1 : this.h ? this.G ? -1 != this.c : 1 == this.c : !this.B || 1 != this.c)
    };
    pn.prototype.next = function () {
        if (this.l()) throw wj;
        return pn.m.next.call(this)
    };
    pn.prototype.g = function () {
        pn.m.g.apply(this);
        if (yg(this.node, this.h ? this.a : this.b)) throw wj;
    };

    function qn() {
    }

    function rn(a, b) {
        b = b.Cc();
        try {
            return 0 <= a.ab(b, 0, 0) && 0 >= a.ab(b, 1, 1)
        } catch (c) {
            if (!F) throw c;
            return !1
        }
    }

    qn.prototype.Ja = function () {
        return new pn(this.Sa(), this.nb(), this.mb(), this.wb())
    };

    function sn(a) {
        this.a = a
    }

    D(sn, qn);

    function tn(a) {
        var b = O(a).createRange();
        if (3 == a.nodeType) b.setStart(a, 0), b.setEnd(a, a.length); else if (un(a)) {
            for (var c, d = a; (c = d.firstChild) && un(c);) d = c;
            b.setStart(d, 0);
            for (d = a; (c = d.lastChild) && un(c);) d = c;
            b.setEnd(d, 1 == d.nodeType ? d.childNodes.length : d.length)
        } else c = a.parentNode, a = Mc(c.childNodes, a), b.setStart(c, a), b.setEnd(c, a + 1);
        return b
    }

    function vn(a, b, c, d) {
        var e = O(a).createRange();
        e.setStart(a, b);
        e.setEnd(c, d);
        return e
    }

    u = sn.prototype;
    u.Cc = q("a");
    u.Fe = function () {
        return this.a.commonAncestorContainer
    };
    u.Sa = function () {
        return this.a.startContainer
    };
    u.nb = function () {
        return this.a.startOffset
    };
    u.mb = function () {
        return this.a.endContainer
    };
    u.wb = function () {
        return this.a.endOffset
    };
    u.ab = function (a, b, c) {
        return this.a.compareBoundaryPoints(1 == c ? 1 == b ? v.Range.START_TO_START : v.Range.START_TO_END : 1 == b ? v.Range.END_TO_START : v.Range.END_TO_END, a)
    };
    u.Ta = function () {
        return this.a.collapsed
    };
    u.kg = function () {
        return this.a.toString()
    };
    u.select = function (a) {
        var b = ig(O(this.Sa()));
        this.Rc(b.getSelection(), a)
    };
    u.Rc = function (a) {
        a.removeAllRanges();
        a.addRange(this.a)
    };

    function wn(a) {
        this.a = a
    }

    D(wn, sn);
    wn.prototype.Rc = function (a, b) {
        !b || this.Ta() ? wn.m.Rc.call(this, a, b) : (a.collapse(this.mb(), this.wb()), a.extend(this.Sa(), this.nb()))
    };

    function xn(a) {
        this.b = this.a = this.h = null;
        this.g = this.f = -1;
        this.c = a
    }

    D(xn, qn);

    function yn(a) {
        var b = O(a).body.createTextRange();
        if (1 == a.nodeType) b.moveToElementText(a), un(a) && !a.childNodes.length && b.collapse(!1); else {
            for (var c = 0, d = a; d = d.previousSibling;) {
                var e = d.nodeType;
                if (3 == e) c += d.length; else if (1 == e) {
                    b.moveToElementText(d);
                    break
                }
            }
            d || b.moveToElementText(a.parentNode);
            b.collapse(!d);
            c && b.move(Qa, c);
            b.moveEnd(Qa, a.length)
        }
        return b
    }

    u = xn.prototype;
    u.Cc = q("c");
    u.Fe = function () {
        if (!this.h) {
            var a = this.c.text, b = this.c.duplicate(), c = a.replace(/ +$/, "");
            (c = a.length - c.length) && b.moveEnd(Qa, -c);
            c = b.parentElement();
            b = b.htmlText.replace(/(\r\n|\r|\n)+/g, " ").length;
            if (this.Ta() && 0 < b) return this.h = c;
            for (; b > c.outerHTML.replace(/(\r\n|\r|\n)+/g, " ").length;) c = c.parentNode;
            for (; 1 == c.childNodes.length && c.innerText == zn(c.firstChild) && un(c.firstChild);) c = c.firstChild;
            0 == a.length && (c = An(this, c));
            this.h = c
        }
        return this.h
    };

    function An(a, b) {
        for (var c = b.childNodes, d = 0, e = c.length; d < e; d++) {
            var f = c[d];
            if (un(f)) {
                var h = yn(f), k = h.htmlText != f.outerHTML;
                if (a.Ta() && k ? 0 <= a.ab(h, 1, 1) && 0 >= a.ab(h, 1, 0) : a.c.inRange(h)) return An(a, f)
            }
        }
        return b
    }

    u.Sa = function () {
        this.a || (this.a = Bn(this, 1), this.Ta() && (this.b = this.a));
        return this.a
    };
    u.nb = function () {
        0 > this.f && (this.f = Cn(this, 1), this.Ta() && (this.g = this.f));
        return this.f
    };
    u.mb = function () {
        if (this.Ta()) return this.Sa();
        this.b || (this.b = Bn(this, 0));
        return this.b
    };
    u.wb = function () {
        if (this.Ta()) return this.nb();
        0 > this.g && (this.g = Cn(this, 0), this.Ta() && (this.f = this.g));
        return this.g
    };
    u.ab = function (a, b, c) {
        return this.c.compareEndPoints((1 == b ? "Start" : "End") + "To" + (1 == c ? "Start" : "End"), a)
    };

    function Bn(a, b, c) {
        c = c || a.Fe();
        if (!c || !c.firstChild) return c;
        for (var d = 1 == b, e = 0, f = c.childNodes.length; e < f; e++) {
            var h = d ? e : f - e - 1, k = c.childNodes[h];
            try {
                var l = Dn(k)
            } catch (n) {
                continue
            }
            var m = l.Cc();
            if (a.Ta()) if (!un(k)) {
                if (0 == a.ab(m, 1, 1)) {
                    a.f = a.g = h;
                    break
                }
            } else {
                if (rn(l, a)) return Bn(a, b, k)
            } else {
                if (rn(a, l)) {
                    if (!un(k)) {
                        d ? a.f = h : a.g = h + 1;
                        break
                    }
                    return Bn(a, b, k)
                }
                if (0 > a.ab(m, 1, 0) && 0 < a.ab(m, 0, 1)) return Bn(a, b, k)
            }
        }
        return c
    }

    function Cn(a, b) {
        var c = 1 == b, d = c ? a.Sa() : a.mb();
        if (1 == d.nodeType) {
            d = d.childNodes;
            for (var e = d.length, f = c ? 1 : -1, h = c ? 0 : e - 1; 0 <= h && h < e; h += f) {
                var k = d[h];
                if (!un(k) && 0 == a.c.compareEndPoints((1 == b ? "Start" : "End") + "To" + (1 == b ? "Start" : "End"), Dn(k).Cc())) return c ? h : h + 1
            }
            return -1 == h ? 0 : h
        }
        a = a.c.duplicate();
        b = yn(d);
        a.setEndPoint(c ? "EndToEnd" : "StartToStart", b);
        a = a.text.length;
        return c ? d.length - a : a
    }

    function zn(a) {
        return 3 == a.nodeType ? a.nodeValue : a.innerText
    }

    u.Ta = function () {
        return 0 == this.c.compareEndPoints("StartToEnd", this.c)
    };
    u.kg = function () {
        return this.c.text
    };
    u.select = function () {
        this.c.select()
    };

    function En(a) {
        this.a = a
    }

    D(En, sn);
    En.prototype.Rc = function (a) {
        a.collapse(this.Sa(), this.nb());
        this.mb() == this.Sa() && this.wb() == this.nb() || a.extend(this.mb(), this.wb());
        0 == a.rangeCount && a.addRange(this.a)
    };

    function Fn(a) {
        this.a = a
    }

    D(Fn, sn);
    Fn.prototype.ab = function (a, b, c) {
        return K("528") ? Fn.m.ab.call(this, a, b, c) : this.a.compareBoundaryPoints(1 == c ? 1 == b ? v.Range.START_TO_START : v.Range.END_TO_START : 1 == b ? v.Range.START_TO_END : v.Range.END_TO_END, a)
    };
    Fn.prototype.Rc = function (a, b) {
        b ? a.setBaseAndExtent(this.mb(), this.wb(), this.Sa(), this.nb()) : a.setBaseAndExtent(this.Sa(), this.nb(), this.mb(), this.wb())
    };

    function Gn(a) {
        return Sf ? new xn(a, O(a.parentElement())) : J ? new Fn(a) : I ? new wn(a) : Xe ? new En(a) : new sn(a)
    }

    function Dn(a) {
        if (F && !pf(9)) {
            var b = new xn(yn(a), O(a));
            if (un(a)) {
                for (var c, d = a; (c = d.firstChild) && un(c);) d = c;
                b.a = d;
                b.f = 0;
                for (d = a; (c = d.lastChild) && un(c);) d = c;
                b.b = d;
                b.g = 1 == d.nodeType ? d.childNodes.length : d.length;
                b.h = a
            } else b.a = b.b = b.h = a.parentNode, b.f = Mc(b.h.childNodes, a), b.g = b.f + 1;
            a = b
        } else a = J ? new Fn(tn(a)) : I ? new wn(tn(a)) : Xe ? new En(tn(a)) : new sn(tn(a));
        return a
    }

    function un(a) {
        return og(a) || 3 == a.nodeType
    };

    function Hn() {
        this.c = this.b = this.g = this.a = this.h = null;
        this.f = !1
    }

    D(Hn, kn);

    function In(a, b) {
        var c = new Hn;
        c.h = a;
        c.f = !!b;
        return c
    }

    u = Hn.prototype;
    u.Be = function () {
        return Jn(this).Cc()
    };
    u.Gc = t(1);
    u.Xb = function () {
        return this
    };

    function Jn(a) {
        var b;
        if (!(b = a.h)) {
            b = a.Ma();
            var c = a.Na(), d = a.eb(), e = a.fb();
            if (F && !pf(9)) {
                var f = b, h = c, k = d, l = e, m = !1;
                1 == f.nodeType && (h = f.childNodes[h], m = !h, f = h || f.lastChild || f, h = 0);
                var n = yn(f);
                h && n.move(Qa, h);
                f == k && h == l ? n.collapse(!0) : (m && n.collapse(!1), m = !1, 1 == k.nodeType && (k = (h = k.childNodes[l]) || k.lastChild || k, l = 0, m = !h), f = yn(k), f.collapse(!m), l && f.moveEnd(Qa, l), n.setEndPoint("EndToEnd", f));
                l = new xn(n, O(b));
                l.a = b;
                l.f = c;
                l.b = d;
                l.g = e;
                b = l
            } else b = J ? new Fn(vn(b, c, d, e)) : I ? new wn(vn(b, c, d, e)) : Xe ? new En(vn(b,
                c, d, e)) : new sn(vn(b, c, d, e));
            b = a.h = b
        }
        return b
    }

    u.rd = function () {
        return Jn(this).Fe()
    };
    u.Ma = function () {
        return this.a || (this.a = Jn(this).Sa())
    };
    u.Na = function () {
        return null != this.g ? this.g : this.g = Jn(this).nb()
    };
    u.eb = function () {
        return this.b || (this.b = Jn(this).mb())
    };
    u.fb = function () {
        return null != this.c ? this.c : this.c = Jn(this).wb()
    };
    u.Ze = q("f");
    u.td = function () {
        return Jn(this).Ta()
    };
    u.sd = function () {
        return Jn(this).kg()
    };
    u.Ja = function () {
        return new pn(this.Ma(), this.Na(), this.eb(), this.fb())
    };
    u.select = function () {
        Jn(this).select(this.f)
    };

    function Kn() {
    }

    D(Kn, kn);

    function Ln() {
        this.c = this.b = this.a = null
    }

    D(Ln, Kn);
    u = Ln.prototype;
    u.Be = function () {
        return this.a || document.body.createControlRange()
    };
    u.Gc = function () {
        return this.a ? this.a.length : 0
    };
    u.Xb = function (a) {
        a = this.a.item(a);
        return In(Dn(a), void 0)
    };
    u.rd = function () {
        return Cg.apply(null, Mn(this))
    };
    u.Ma = function () {
        return Nn(this)[0]
    };
    u.Na = t(0);
    u.eb = function () {
        var a = Nn(this), b = Lc(a);
        return Sc(a, function (c) {
            return yg(c, b)
        })
    };
    u.fb = function () {
        return this.eb().childNodes.length
    };

    function Mn(a) {
        if (!a.b && (a.b = [], a.a)) for (var b = 0; b < a.a.length; b++) a.b.push(a.a.item(b));
        return a.b
    }

    function Nn(a) {
        a.c || (a.c = Mn(a).concat(), a.c.sort(function (b, c) {
            return b.sourceIndex - c.sourceIndex
        }));
        return a.c
    }

    u.td = function () {
        return !this.a || !this.a.length
    };
    u.sd = t("");
    u.Ja = function () {
        return new On(this)
    };
    u.select = function () {
        this.a && this.a.select()
    };

    function On(a) {
        this.h = this.b = this.a = null;
        a && (this.h = Nn(a), this.a = this.h.shift(), this.b = Lc(this.h) || this.a);
        hn.call(this, this.a, !1, !0)
    }

    D(On, on);
    On.prototype.s = q("a");
    On.prototype.l = function () {
        return !this.depth && !this.h.length
    };
    On.prototype.next = function () {
        if (this.l()) throw wj;
        if (!this.depth) {
            var a = this.h.shift();
            jn(this, a, 1, 1);
            return a
        }
        return On.m.next.call(this)
    };

    function Pn() {
        this.wa = null;
        this.a = [];
        this.f = [];
        this.c = this.b = null
    }

    D(Pn, Kn);
    u = Pn.prototype;
    u.Be = function () {
        return this.a[0]
    };
    u.Gc = function () {
        return this.a.length
    };
    u.Xb = function (a) {
        this.f[a] || (this.f[a] = In(Gn(this.a[a]), void 0));
        return this.f[a]
    };
    u.rd = function () {
        if (!this.c) {
            for (var a = [], b = 0, c = this.Gc(); b < c; b++) a.push(this.Xb(b).rd());
            this.c = Cg.apply(null, a)
        }
        return this.c
    };

    function Qn(a) {
        a.b || (a.b = mn(a), a.b.sort(function (b, c) {
            var d = b.Ma();
            b = b.Na();
            var e = c.Ma();
            c = c.Na();
            return d == e && b == c ? 0 : Rn(d, b, e, c) ? 1 : -1
        }));
        return a.b
    }

    u.Ma = function () {
        return Qn(this)[0].Ma()
    };
    u.Na = function () {
        return Qn(this)[0].Na()
    };
    u.eb = function () {
        return Lc(Qn(this)).eb()
    };
    u.fb = function () {
        return Lc(Qn(this)).fb()
    };
    u.td = function () {
        return 0 == this.a.length || 1 == this.a.length && this.Xb(0).td()
    };
    u.sd = function () {
        return Pc(mn(this), function (a) {
            return a.sd()
        }).join("")
    };
    u.Ja = function () {
        return new Sn(this)
    };
    u.select = function () {
        var a = ln(ig(O(F ? this.rd() : this.Ma())));
        a.removeAllRanges();
        for (var b = 0, c = this.Gc(); b < c; b++) a.addRange(this.Xb(b).Be())
    };

    function Sn(a) {
        this.a = null;
        this.b = 0;
        a && (this.a = Pc(Qn(a), function (b) {
            return yj(b)
        }));
        hn.call(this, a ? this.s() : null, !1, !0)
    }

    D(Sn, on);
    Sn.prototype.s = function () {
        return this.a[0].s()
    };
    Sn.prototype.l = function () {
        return this.a[this.b].l()
    };
    Sn.prototype.next = function () {
        try {
            var a = this.a[this.b], b = a.next();
            jn(this, a.node, a.c, a.depth);
            return b
        } catch (c) {
            if (c !== wj || this.a.length - 1 == this.b) throw c;
            this.b++;
            return this.next()
        }
    };

    function Tn() {
        var a = ln(window);
        return a && Un(a)
    }

    function Un(a) {
        var b = !1;
        if (a.createRange) try {
            var c = a.createRange()
        } catch (e) {
            return null
        } else if (a.rangeCount) {
            if (1 < a.rangeCount) {
                b = new Pn;
                c = 0;
                for (var d = a.rangeCount; c < d; c++) b.a.push(a.getRangeAt(c));
                return b
            }
            c = a.getRangeAt(0);
            b = Rn(a.anchorNode, a.anchorOffset, a.focusNode, a.focusOffset)
        } else return null;
        (a = c) && a.addElement ? (b = new Ln, b.a = a, a = b) : a = In(Gn(a), b);
        return a
    }

    function Rn(a, b, c, d) {
        if (a == c) return d < b;
        var e;
        if (1 == a.nodeType && b) if (e = a.childNodes[b]) a = e, b = 0; else if (yg(a, c)) return !0;
        if (1 == c.nodeType && d) if (e = c.childNodes[d]) c = e, d = 0; else if (yg(c, a)) return !1;
        return 0 < (zg(a, c) || b - d)
    };

    function Vn() {
        var a = Tn();
        return null != a && !a.td() && 0 < a.sd().length
    };

    function Wn() {
        this.b = []
    }

    D(Wn, Di);
    vc(Wn);

    function Xn(a, b) {
        var c = a.b[b];
        if (!c) {
            switch (b) {
                case 0:
                    c = a.ea() + "-highlight";
                    break;
                case 1:
                    c = a.ea() + "-checkbox";
                    break;
                case 2:
                    c = a.ea() + "-content"
            }
            a.b[b] = c
        }
        return c
    }

    u = Wn.prototype;
    u.Yb = t("menuitem");
    u.D = function (a) {
        var b = a.b.D(g, Hi(this, a).join(" "), Yn(this, a.$(), a.b));
        Zn(this, a, b, !!(a.ba & 8) || !!(a.ba & 16));
        return b
    };
    u.Ab = function (a) {
        return a && a.firstChild
    };
    u.Oa = function (a, b) {
        var c = vg(b), d = Xn(this, 2);
        c && Kf(c, d) || b.appendChild(Yn(this, b.childNodes, a.b));
        Kf(b, lb) && (a.ta(16, !0), a && b && Zn(this, a, b, !0));
        return Wn.m.Oa.call(this, a, b)
    };
    u.Ic = function (a, b) {
        var c = this.Ab(a), d = $n(this, a) ? c.firstChild : null;
        Wn.m.Ic.call(this, a, b);
        d && !$n(this, a) && c.insertBefore(d, c.firstChild || null)
    };

    function Yn(a, b, c) {
        a = Xn(a, 2);
        return c.D(g, a, b)
    }

    function $n(a, b) {
        return (b = a.Ab(b)) ? (b = b.firstChild, a = Xn(a, 1), !!b && xg(b) && Kf(b, a)) : !1
    }

    function Zn(a, b, c, d) {
        Li(a, c, b.Fc());
        Mi(a, b, c);
        d != $n(a, c) && (d ? M(c, lb) : Mf(c, lb), c = a.Ab(c), d ? (a = Xn(a, 1), c.insertBefore(b.b.D(g, a), c.firstChild || null)) : c.removeChild(c.firstChild))
    }

    u.Dc = function (a) {
        switch (a) {
            case 2:
                return Xn(this, 0);
            case 16:
            case 8:
                return mb;
            default:
                return Wn.m.Dc.call(this, a)
        }
    };
    u.pd = function (a) {
        var b = Xn(this, 0);
        switch (a) {
            case mb:
                return 16;
            case b:
                return 2;
            default:
                return Wn.m.pd.call(this, a)
        }
    };
    u.ea = t("goog-menuitem");

    function ao(a, b, c, d) {
        W.call(this, a, d || Wn.X(), c);
        this.za(b)
    }

    D(ao, W);
    u = ao.prototype;
    u.Ba = function () {
        var a = this.ra;
        return null != a ? a : this.bb()
    };
    u.za = jc("ra");
    u.ta = function (a, b) {
        ao.m.ta.call(this, a, b);
        switch (a) {
            case 8:
                this.V & 16 && !b && hj(this, 16, !1) && kj(this, 16, !1);
                (a = this.j()) && this && a && Zn(this.a, this, a, b);
                break;
            case 16:
                (a = this.j()) && this && a && Zn(this.a, this, a, b)
        }
    };
    u.bb = function () {
        var a = this.$();
        return B(a) ? (a = Pc(a, function (b) {
            return xg(b) && (Kf(b, "goog-menuitem-accel") || Kf(b, "goog-menuitem-mnemonic-separator")) ? "" : Ng(b)
        }).join(""), Fe(a)) : ao.m.bb.call(this)
    };
    u.bc = function (a) {
        var b = this.xb();
        if (b) {
            var c = b.K;
            b.K = null;
            if (b = c && sc(a.clientX)) b = new N(a.clientX, a.clientY), b = c == b ? !0 : c && b ? c.x == b.x && c.y == b.y : !1;
            if (b) return
        }
        ao.m.bc.call(this, a)
    };
    u.Kc = function (a) {
        return a.keyCode == this.Pg && this.kc(a) ? !0 : ao.m.Kc.call(this, a)
    };
    u.ei = q("Pg");
    bj("goog-menuitem", function () {
        return new ao(null)
    });
    ao.prototype.Fc = function () {
        return this.ba & 16 ? "menuitemcheckbox" : this.ba & 8 ? "menuitemradio" : ao.m.Fc.call(this)
    };
    ao.prototype.xb = function () {
        return W.prototype.xb.call(this)
    };
    ao.prototype.nd = function () {
        return W.prototype.nd.call(this)
    };

    function bo(a) {
        this.a = a
    }

    vc(bo);

    function co(a, b) {
        a && (a.tabIndex = b ? 0 : -1)
    }

    u = bo.prototype;
    u.D = function (a) {
        return a.b.D(g, eo(this, a).join(" "))
    };
    u.He = function (a) {
        return a.tagName == g
    };

    function fo(a, b, c) {
        c.id && si(b, c.id);
        var d = a.vd(), e = !1, f = Jf(c);
        f && Nc(f, function (h) {
            h == d ? e = !0 : h && (h == d + ba ? b.ka(!1) : h == d + "-horizontal" ? go(b, ub) : h == d + "-vertical" && go(b, fc))
        }, a);
        e || M(c, d);
        ho(a, b, c);
        return c
    }

    function ho(a, b, c) {
        if (c) for (var d = c.firstChild, e; d && d.parentNode == c;) {
            e = d.nextSibling;
            if (1 == d.nodeType) {
                var f = a.Ce(d);
                f && (f.A = d, b.isEnabled() || f.ka(!1), b.rc(f), xi(f, d))
            } else d.nodeValue && "" != xd(d.nodeValue) || c.removeChild(d);
            d = e
        }
    }

    u.Ce = function (a) {
        a:{
            a = Jf(a);
            for (var b = 0, c = a.length; b < c; b++) {
                var d = a[b];
                if (d = d in cj ? cj[d]() : null) {
                    a = d;
                    break a
                }
            }
            a = null
        }
        return a
    };
    u.Ie = function (a) {
        a = a.j();
        jh(a, !0, I);
        F && (a.hideFocus = !0);
        var b = this.a;
        b && uh(a, b)
    };
    u.vd = t("goog-container");

    function eo(a, b) {
        a = a.vd();
        var c = [a, b.Sb == ub ? a + "-horizontal" : a + "-vertical"];
        b.isEnabled() || c.push(a + ba);
        return c
    };

    function io() {
    }

    D(io, Di);
    vc(io);
    io.prototype.D = function (a) {
        return a.b.D(g, this.ea())
    };
    io.prototype.Oa = function (a, b) {
        b.id && si(a, b.id);
        if ("HR" == b.tagName) {
            var c = b;
            b = this.D(a);
            rg(b, c);
            tg(c)
        } else M(b, this.ea());
        return b
    };
    io.prototype.Ic = ic();
    io.prototype.ea = t(kb);

    function jo(a, b) {
        W.call(this, null, a || io.X(), b);
        this.ta(1, !1);
        this.ta(2, !1);
        this.ta(4, !1);
        this.ta(32, !1);
        this.V = 1
    }

    D(jo, W);
    jo.prototype.O = function () {
        jo.m.O.call(this);
        uh(this.j(), "separator")
    };
    bj(kb, function () {
        return new jo
    });

    function ko(a) {
        this.a = a || "menu"
    }

    D(ko, bo);
    vc(ko);
    u = ko.prototype;
    u.He = function (a) {
        return "UL" == a.tagName || ko.m.He.call(this, a)
    };
    u.Ce = function (a) {
        return "HR" == a.tagName ? new jo : ko.m.Ce.call(this, a)
    };
    u.xc = function (a, b) {
        return yg(a.j(), b)
    };
    u.vd = t("goog-menu");
    u.Ie = function (a) {
        ko.m.Ie.call(this, a);
        vh(a.j(), "haspopup", "true")
    };

    function lo(a, b, c) {
        this.c = a;
        this.f = b;
        this.s = c
    }

    D(lo, Dl);
    lo.prototype.b = function (a, b, c) {
        zl(this.c, this.f, a, b, void 0, c, this.s)
    };

    function mo(a, b, c, d) {
        lo.call(this, a, b);
        this.l = c ? 5 : 0;
        this.g = d || void 0
    }

    D(mo, lo);
    mo.prototype.h = jc("l");
    mo.prototype.b = function (a, b, c) {
        var d = zl(this.c, this.f, a, b, null, c, 10, void 0, this.g);
        if (d & 496) {
            var e = no(d, this.f);
            b = no(d, b);
            d = zl(this.c, e, a, b, null, c, 10, void 0, this.g);
            d & 496 && (e = no(d, e), b = no(d, b), zl(this.c, e, a, b, null, c, this.l, void 0, this.g))
        }
    };

    function no(a, b) {
        a & 48 && (b ^= 4);
        a & 192 && (b ^= 1);
        return b
    };

    function oo(a, b) {
        this.a = a instanceof N ? a : new N(a, b)
    }

    D(oo, Dl);
    oo.prototype.b = function (a, b, c) {
        var d = O(a);
        var e = d.body;
        d = d.documentElement;
        d = new N(e.scrollLeft || d.scrollLeft, e.scrollTop || d.scrollTop);
        e = this.a.x + d.x;
        d = this.a.y + d.y;
        var f = Al(a);
        e -= f.x;
        d -= f.y;
        Cl(new N(e, d), a, b, c, null, null, void 0)
    };

    function po(a, b) {
        oo.call(this, a, b)
    }

    D(po, oo);
    po.prototype.c = 0;
    po.prototype.h = jc("c");
    po.prototype.b = function (a, b, c) {
        var d = Yg(a);
        d = ah(d);
        var e = hg(Wf(a).a);
        e = new N(this.a.x + e.scrollLeft, this.a.y + e.scrollTop);
        var f = b, h = Cl(e, a, f, c, d, 10, void 0);
        if (0 != (h & 496)) {
            if (h & 16 || h & 32) f ^= 4;
            if (h & 64 || h & 128) f ^= 1;
            h = Cl(e, a, f, c, d, 10, void 0);
            0 != (h & 496) && Cl(e, a, b, c, d, this.c, void 0)
        }
    };

    function qo(a, b, c) {
        T.call(this, c);
        this.zb = b || bo.X();
        this.Sb = a || fc
    }

    D(qo, T);
    u = qo.prototype;
    u.gc = null;
    u.Hc = null;
    u.zb = null;
    u.Sb = null;
    u.ga = !0;
    u.yb = !0;
    u.Jb = !0;
    u.ha = -1;
    u.pa = null;
    u.hc = !1;
    u.lb = null;

    function ro(a) {
        return a.gc || a.j()
    }

    function so(a, b) {
        if (a.Jb) {
            var c = ro(a), d = a.U;
            a.gc = b;
            var e = ro(a);
            d && (a.gc = c, to(a, !1), a.gc = b, Vi(uo(a), e), to(a, !0))
        } else throw Error("Can't set key event target for container that doesn't support keyboard focus!");
    }

    function uo(a) {
        return a.Hc || (a.Hc = new Ui(ro(a)))
    }

    u.D = function () {
        this.A = this.zb.D(this)
    };
    u.ud = function () {
        return this.j()
    };
    u.Ge = function (a) {
        return this.zb.He(a)
    };
    u.S = function (a) {
        this.A = fo(this.zb, this, a);
        a.style.display == Hb && (this.ga = !1)
    };
    u.O = function () {
        qo.m.O.call(this);
        yi(this, function (b) {
            b.U && vo(this, b)
        }, this);
        var a = this.j();
        this.zb.Ie(this);
        this.J(this.ga, !0);
        U(this).w(this, "enter", this.Qe).w(this, "highlight", this.Oc).w(this, "unhighlight", this.Ue).w(this, "open", this.Ci).w(this, "close", this.pi).w(a, Dh.pc, this.gi).w(O(a), [Dh.qc, Dh.oc], this.si).w(a, [Dh.pc, Dh.qc, Dh.oc, Eb, Db, Xa], this.ni);
        this.Jb && to(this, !0)
    };

    function to(a, b) {
        var c = U(a), d = ro(a);
        b ? c.w(d, db, a.lg).w(d, La, a.wd).w(uo(a), "key", a.Ga) : c.ca(d, db, a.lg).ca(d, La, a.wd).ca(uo(a), "key", a.Ga)
    }

    u.Z = function () {
        this.Db(-1);
        this.pa && lj(this.pa, !1);
        this.hc = !1;
        qo.m.Z.call(this)
    };
    u.F = function () {
        qo.m.F.call(this);
        this.Hc && (this.Hc.M(), this.Hc = null);
        this.zb = this.pa = this.lb = this.gc = null
    };
    u.Qe = t(!0);
    u.Oc = function (a) {
        var b = Ci(this, a.target);
        if (-1 < b && b != this.ha) {
            var c = wo(this);
            c && jj(c, !1);
            this.ha = b;
            c = wo(this);
            this.hc && ij(c, !0);
            this.pa && c != this.pa && (c.ba & 64 ? lj(c, !0) : lj(this.pa, !1))
        }
        b = this.j();
        null != a.target.j() && vh(b, Ea, a.target.j().id)
    };
    u.Ue = function (a) {
        a.target == wo(this) && (this.ha = -1);
        this.j().removeAttribute("aria-activedescendant")
    };
    u.Ci = function (a) {
        (a = a.target) && a != this.pa && a.xb() == this && (this.pa && lj(this.pa, !1), this.pa = a)
    };
    u.pi = function (a) {
        a.target == this.pa && (this.pa = null);
        var b = this.j(), c = a.target.j();
        b && a.target.V & 2 && c && (a = "", c && (a = c.id), vh(b, Ea, a))
    };
    u.gi = function (a) {
        this.yb && (this.hc = !0);
        var b = ro(this);
        b && Jg(b) && Kg(b) ? b.focus() : a.b()
    };
    u.si = function () {
        this.hc = !1
    };
    u.ni = function (a) {
        a:{
            var b = a.target;
            if (this.lb) for (var c = this.j(); b && b !== c;) {
                var d = b.id;
                if (d in this.lb) {
                    b = this.lb[d];
                    break a
                }
                b = b.parentNode
            }
            b = null
        }
        if (b) switch (a.type) {
            case Dh.pc:
                b.Lc(a);
                break;
            case Dh.qc:
            case Dh.oc:
                b.bc(a);
                break;
            case Eb:
                b.Me(a);
                break;
            case Db:
                b.Te(a);
                break;
            case Xa:
                b.Nc(a)
        }
    };
    u.lg = ic();
    u.wd = function () {
        this.Db(-1);
        this.hc = !1;
        this.pa && lj(this.pa, !1)
    };
    u.Ga = function (a) {
        return this.isEnabled() && this.isVisible() && (0 != zi(this) || this.gc) && this.Je(a) ? (a.b(), a.stopPropagation(), !0) : !1
    };
    u.Je = function (a) {
        var b = wo(this);
        if (b && typeof b.Ga == p && b.Ga(a) || this.pa && this.pa != b && typeof this.pa.Ga == p && this.pa.Ga(a)) return !0;
        if (a.shiftKey || a.ctrlKey || a.metaKey || a.altKey) return !1;
        switch (a.keyCode) {
            case 27:
                if (this.Jb) ro(this).blur(); else return !1;
                break;
            case 36:
                xo(this);
                break;
            case 35:
                yo(this);
                break;
            case 38:
                if (this.Sb == fc) zo(this); else return !1;
                break;
            case 37:
                if (this.Sb == ub) Bi(this) ? Ao(this) : zo(this); else return !1;
                break;
            case 40:
                if (this.Sb == fc) Ao(this); else return !1;
                break;
            case 39:
                if (this.Sb == ub) Bi(this) ?
                    zo(this) : Ao(this); else return !1;
                break;
            default:
                return !1
        }
        return !0
    };

    function vo(a, b) {
        var c = b.j();
        c = c.id || (c.id = ri(b));
        a.lb || (a.lb = {});
        a.lb[c] = b
    }

    u.rc = function (a, b) {
        qo.m.rc.call(this, a, b)
    };
    u.je = function (a, b, c) {
        a.Uc |= 2;
        a.Uc |= 64;
        a.ta(32, !1);
        ej(a, !1);
        var d = a.xb() == this ? Ci(this, a) : -1;
        qo.m.je.call(this, a, b, c);
        a.U && this.U && vo(this, a);
        a = d;
        -1 == a && (a = zi(this));
        a == this.ha ? this.ha = Math.min(zi(this) - 1, b) : a > this.ha && b <= this.ha ? this.ha++ : a < this.ha && b > this.ha && this.ha--
    };
    u.removeChild = function (a, b) {
        if (a = y(a) ? vi(this, a) : a) {
            var c = Ci(this, a);
            -1 != c && (c == this.ha ? (jj(a, !1), this.ha = -1) : c < this.ha && this.ha--);
            var d = a.j();
            d && d.id && this.lb && (c = this.lb, d = d.id, d in c && delete c[d])
        }
        a = qo.m.removeChild.call(this, a, b);
        ej(a, !0);
        return a
    };

    function go(a, b) {
        if (a.j()) throw Error(ka);
        a.Sb = b
    }

    u.isVisible = q("ga");
    u.J = function (a, b) {
        if (b || this.ga != a && this.dispatchEvent(a ? "show" : sb)) {
            this.ga = a;
            var c = this.j();
            c && (Q(c, a), this.Jb && co(ro(this), this.yb && this.ga), b || this.dispatchEvent(this.ga ? "aftershow" : "afterhide"));
            return !0
        }
        return !1
    };
    u.isEnabled = q("yb");
    u.ka = function (a) {
        this.yb != a && this.dispatchEvent(a ? "enable" : "disable") && (a ? (this.yb = !0, yi(this, function (b) {
            b.th ? delete b.th : b.ka(!0)
        })) : (yi(this, function (b) {
            b.isEnabled() ? b.ka(!1) : b.th = !0
        }), this.hc = this.yb = !1), this.Jb && co(ro(this), a && this.ga))
    };

    function Bo(a, b) {
        b != a.Jb && a.U && to(a, b);
        a.Jb = b;
        a.yb && a.ga && co(ro(a), b)
    }

    u.Db = function (a) {
        (a = Ai(this, a)) ? jj(a, !0) : -1 < this.ha && jj(wo(this), !1)
    };

    function wo(a) {
        return Ai(a, a.ha)
    }

    function xo(a) {
        Co(a, function (b, c) {
            return (b + 1) % c
        }, zi(a) - 1)
    }

    function yo(a) {
        Co(a, function (b, c) {
            b--;
            return 0 > b ? c - 1 : b
        }, 0)
    }

    function Ao(a) {
        Co(a, function (b, c) {
            return (b + 1) % c
        }, a.ha)
    }

    function zo(a) {
        Co(a, function (b, c) {
            b--;
            return 0 > b ? c - 1 : b
        }, a.ha)
    }

    function Co(a, b, c) {
        c = 0 > c ? Ci(a, a.pa) : c;
        var d = zi(a);
        c = b.call(a, c, d);
        for (var e = 0; e <= d;) {
            var f = Ai(a, c);
            if (f && a.Wf(f)) {
                a.Db(c);
                break
            }
            e++;
            c = b.call(a, c, d)
        }
    }

    u.Wf = function (a) {
        return a.isVisible() && a.isEnabled() && !!(a.ba & 2)
    };

    function Do() {
    }

    D(Do, Di);
    vc(Do);
    Do.prototype.ea = t(jb);

    function Eo(a, b, c) {
        W.call(this, a, c || Do.X(), b);
        this.ta(1, !1);
        this.ta(2, !1);
        this.ta(4, !1);
        this.ta(32, !1);
        this.V = 1
    }

    D(Eo, W);
    bj(jb, function () {
        return new Eo(null)
    });
    bj(kb, function () {
        return new jo
    });

    function Fo(a, b) {
        qo.call(this, fc, b || ko.X(), a);
        Bo(this, !1)
    }

    D(Fo, qo);
    u = Fo.prototype;
    u.ke = !0;
    u.xc = function (a) {
        if (this.zb.xc(this, a)) return !0;
        for (var b = 0, c = zi(this); b < c; b++) {
            var d = Ai(this, b);
            if (typeof d.xc == p && d.xc(a)) return !0
        }
        return !1
    };
    u.J = function (a, b, c) {
        (b = Fo.m.J.call(this, a, b)) && a && this.U && this.ke && ro(this).focus();
        a && c && sc(c.clientX) ? this.K = new N(c.clientX, c.clientY) : this.K = null;
        return b
    };
    u.Qe = function (a) {
        this.ke && ro(this).focus();
        return Fo.m.Qe.call(this, a)
    };
    u.Wf = function (a) {
        return a.isEnabled() && a.isVisible() && !!(a.ba & 2)
    };
    u.S = function (a) {
        for (var b = this.zb, c = ag(this.b.a, g, b.vd() + "-content", a), d = c.length, e = 0; e < d; e++) ho(b, this, c[e]);
        Fo.m.S.call(this, a)
    };
    u.Je = function (a) {
        var b = Fo.m.Je.call(this, a);
        b || yi(this, function (c) {
            !b && c.ei && c.Pg == a.keyCode && (this.isEnabled() && this.Db(Ci(this, c)), b = c.Ga(a))
        }, this);
        return b
    };
    u.Db = function (a) {
        Fo.m.Db.call(this, a);
        var b = Ai(this, a);
        if (b) {
            a = this.j() || hg(document);
            var c = b.j();
            b = a || hg(document);
            var d = bh(c), e = bh(b), f = oh(b);
            if (b == hg(document)) {
                var h = d.x - b.scrollLeft;
                d = d.y - b.scrollTop;
                F && !pf(10) && (h += f.left, d += f.top)
            } else h = d.x - e.x - f.left, d = d.y - e.y - f.top;
            c = eh(c);
            f = b.clientHeight - c.height;
            e = b.scrollLeft;
            var k = b.scrollTop;
            e += Math.min(h, Math.max(h - (b.clientWidth - c.width), 0));
            k += Math.min(d, Math.max(d - f, 0));
            b = new N(e, k);
            a.scrollLeft = b.x;
            a.scrollTop = b.y
        }
    };

    function Go(a, b) {
        Fo.call(this, a, b);
        this.ke = !0;
        Bo(this, !0);
        this.J(!1, !0);
        this.a = new Aj
    }

    D(Go, Fo);
    u = Go.prototype;
    u.rh = !1;
    u.Hg = 0;
    u.Da = null;
    u.S = function (a) {
        Go.m.S.call(this, a);
        (a = a.getAttribute("for") || a.htmlFor) && Ho(this, this.b.j(a), 1)
    };
    u.O = function () {
        Go.m.O.call(this);
        this.a.forEach(this.ad, this);
        var a = U(this);
        a.w(this, Da, this.jf);
        a.w(this.b.a, Bb, this.jj, !0)
    };

    function Ho(a, b, c, d, e, f) {
        b && Cj(a.a, zc(b)) || (c = a.se(b, c, d, e, f), a.U && a.ad(c), b = Ec(a.kj, b), a.j() && U(a).w(a.j(), yb, b))
    }

    u.kj = function (a, b) {
        if (27 == b.keyCode) a.focus(); else if (a = Ai(this, this.ha)) {
            a = a.j();
            var c = new Eh(b.a, a);
            c.target = a;
            if (32 == b.keyCode || 13 == b.keyCode) Jh(a) ? ni(a, yb, !1, c) : di(a, yb, !1, c);
            32 == b.keyCode && this.pb()
        }
    };
    u.se = function (a, b, c, d, e) {
        if (!a) return null;
        b = {A: a, lh: b, gj: c, Ac: d ? Xa : Bb, ef: e};
        this.a.set(zc(a), b);
        return b
    };
    u.ad = function (a) {
        U(this).w(a.A, a.Ac, this.Vd);
        a.Ac != Xa && U(this).w(a.A, yb, this.nj)
    };
    u.jd = function () {
        if (this.U) for (var a = this.a.Ra(), b = 0; b < a.length; b++) this.ve(this.a.get(a[b]));
        Ej(this.a)
    };
    u.ve = function (a) {
        U(this).ca(a.A, a.Ac, this.Vd)
    };
    u.zd = function (a, b, c) {
        b = x(a.lh) ? new mo(a.A, a.lh, !0) : new po(b, c);
        b.h && b.h(5);
        var d = a.gj;
        c = a.ef;
        var e = a.A;
        a = this.isVisible();
        var f;
        (f = this.isVisible()) || (f = 150 > Fc() - this.Hg);
        f && this.rh ? this.pb() : (this.Da = e || null, this.dispatchEvent("beforeshow") && (d = "undefined" != typeof d ? d : 8, a || (this.j().style.visibility = rb), Q(this.j(), !0), b.b(this.j(), d, c), a || (this.j().style.visibility = gc), this.Db(-1), this.J(!0)))
    };
    u.pb = function () {
        this.isVisible() && (this.J(!1), this.isVisible() || (this.Hg = Fc(), this.Da = null))
    };
    u.jf = function () {
        this.pb()
    };
    u.Vd = function (a) {
        Io(this, a)
    };
    u.nj = function (a) {
        32 != a.keyCode && 13 != a.keyCode && 40 != a.keyCode || Io(this, a);
        40 == a.keyCode && xo(this)
    };

    function Io(a, b) {
        for (var c = a.a.Ra(), d = 0; d < c.length; d++) {
            var e = a.a.get(c[d]);
            if (e.A == b.currentTarget) {
                a.zd(e, b.clientX, b.clientY);
                b.b();
                b.stopPropagation();
                break
            }
        }
    }

    u.jj = function (a) {
        this.isVisible() && !this.xc(a.target) && this.pb()
    };
    u.wd = function (a) {
        Go.m.wd.call(this, a);
        this.pb()
    };
    u.F = function () {
        Go.m.F.call(this);
        this.a && (Ej(this.a), delete this.a)
    };

    function Jo(a) {
        mi.call(this);
        this.A = a;
        a = F ? fb : La;
        this.a = S(this.A, F ? eb : db, this, !F);
        this.b = S(this.A, a, this, !F)
    }

    D(Jo, mi);
    Jo.prototype.handleEvent = function (a) {
        var b = new Eh(a.a);
        b.type = a.type == eb || a.type == db ? eb : fb;
        this.dispatchEvent(b)
    };
    Jo.prototype.F = function () {
        Jo.m.F.call(this);
        bi(this.a);
        bi(this.b);
        delete this.A
    };

    function Ko(a, b) {
        this.a = a instanceof N ? a : new N(a, b)
    }

    D(Ko, Dl);
    Ko.prototype.b = function (a, b, c) {
        zl(Yg(a), 0, a, b, this.a, c, null, void 0)
    };

    function Lo() {
        this.a = new Aj
    }

    function Mo(a) {
        var b = typeof a;
        return b == Jb && a || b == p ? "o" + zc(a) : b.substr(0, 1) + a
    }

    u = Lo.prototype;
    u.add = function (a) {
        this.a.set(Mo(a), a)
    };
    u.remove = function (a) {
        return this.a.remove(Mo(a))
    };
    u.contains = function (a) {
        return Cj(this.a, Mo(a))
    };
    u.Ea = function () {
        return this.a.Ea()
    };
    u.Ja = function () {
        return this.a.Ja(!1)
    };

    function No(a, b, c) {
        this.da = c || (a ? Wf(Yf(document, a)) : Wf());
        Vm.call(this, this.da.D(g, {style: "position:absolute;display:none;"}));
        this.Hb = new N(1, 1);
        this.B = new Lo;
        this.G = null;
        a && Oo(this, a);
        null != b && this.Pa(b)
    }

    D(No, Vm);
    var Po = [];
    u = No.prototype;
    u.Aa = null;
    u.className = "goog-tooltip";
    u.ih = 500;
    u.Eg = 0;

    function Oo(a, b) {
        b = Yf(document, b);
        a.B.add(b);
        S(b, Eb, a.Oe, !1, a);
        S(b, Db, a.ac, !1, a);
        S(b, Cb, a.vg, !1, a);
        S(b, db, a.og, !1, a);
        S(b, La, a.ac, !1, a)
    }

    function Qo(a, b) {
        if (b) b = Yf(document, b), Ro(a, b), a.B.remove(b); else {
            for (var c = a.B.Ea(), d = 0; b = c[d]; d++) Ro(a, b);
            Ej(a.B.a)
        }
    }

    function Ro(a, b) {
        ai(b, Eb, a.Oe, !1, a);
        ai(b, Db, a.ac, !1, a);
        ai(b, Cb, a.vg, !1, a);
        ai(b, db, a.og, !1, a);
        ai(b, La, a.ac, !1, a)
    }

    u.Pa = function (a) {
        Fg(this.j(), a)
    };
    u.$b = function (a) {
        var b = this.j();
        b && tg(b);
        No.m.$b.call(this, a);
        a ? (b = this.da.a.body, b.insertBefore(a, b.lastChild), xh(this.G), this.G = new Jo(this.j()), wh(this, Ec(xh, this.G)), S(this.G, eb, this.Wb, void 0, this), S(this.G, fb, this.Zd, void 0, this)) : (xh(this.G), this.G = null)
    };
    u.Mc = function () {
        return Lg(this.j())
    };

    function So(a) {
        return a.L ? a.isVisible() ? 4 : 1 : a.la ? 3 : a.isVisible() ? 2 : 0
    }

    u.Ne = function () {
        if (!Rm.prototype.Ne.call(this)) return !1;
        if (this.b) for (var a, b = 0; a = Po[b]; b++) yg(a.j(), this.b) || a.J(!1);
        Tc(Po, this) || Po.push(this);
        a = this.j();
        a.className = this.className;
        this.Wb();
        S(a, Eb, this.Hd, !1, this);
        S(a, Db, this.Gd, !1, this);
        To(this);
        return !0
    };
    u.mf = function () {
        Uc(Po, this);
        for (var a = this.j(), b, c = 0; b = Po[c]; c++) b.b && yg(a, b.b) && b.J(!1);
        this.Zc && this.Zc.Zd();
        ai(a, Eb, this.Hd, !1, this);
        ai(a, Db, this.Gd, !1, this);
        this.b = void 0;
        0 == So(this) && (this.Ia = !1);
        Rm.prototype.mf.call(this)
    };
    u.gf = function (a, b) {
        this.b == a && this.B.contains(this.b) && (this.Ia || !this.Sf ? (this.J(!1), this.isVisible() || (this.b = a, this.s = b || new Uo(Tf(this.Hb)), this.isVisible() && this.ob(), this.J(!0))) : this.b = void 0);
        this.L = void 0
    };
    u.fj = function (a) {
        this.la = void 0;
        if (a == this.b) {
            a = this.da;
            var b = a.a;
            try {
                var c = b && b.activeElement;
                var d = c && c.nodeName ? c : null
            } catch (e) {
                d = null
            }
            d = d && this.j() && a.contains(this.j(), d);
            null != this.Aa && (this.Aa == this.j() || this.B.contains(this.Aa)) || d || this.Yc && this.Yc.Aa || this.J(!1)
        }
    };

    function Vo(a, b) {
        var c = gg(a.da.a);
        a.Hb.x = b.clientX + c.x;
        a.Hb.y = b.clientY + c.y
    }

    u.Oe = function (a) {
        var b = Wo(this, a.target);
        this.Aa = b;
        this.Wb();
        b != this.b && (this.b = b, Xo(this, b), Yo(this), Vo(this, a))
    };

    function Wo(a, b) {
        try {
            for (; b && !a.B.contains(b);) b = b.parentNode;
            return b
        } catch (c) {
            return null
        }
    }

    u.vg = function (a) {
        Vo(this, a);
        this.Ia = !0
    };
    u.og = function (a) {
        this.Aa = a = Wo(this, a.target);
        this.Ia = !0;
        if (this.b != a) {
            this.b = a;
            var b = new Zo(this.Aa);
            this.Wb();
            Xo(this, a, b);
            Yo(this)
        }
    };

    function Yo(a) {
        if (a.b) for (var b, c = 0; b = Po[c]; c++) yg(b.j(), a.b) && (b.Yc = a, a.Zc = b)
    }

    u.ac = function (a) {
        var b = Wo(this, a.target), c = Wo(this, a.relatedTarget);
        b != c && (b == this.Aa && (this.Aa = null), To(this), this.Ia = !1, !this.isVisible() || a.relatedTarget && yg(this.j(), a.relatedTarget) ? this.b = void 0 : this.Zd())
    };
    u.Hd = function () {
        var a = this.j();
        this.Aa != a && (this.Wb(), this.Aa = a)
    };
    u.Gd = function (a) {
        var b = this.j();
        this.Aa != b || a.relatedTarget && yg(b, a.relatedTarget) || (this.Aa = null, this.Zd())
    };

    function Xo(a, b, c) {
        a.L || (a.L = tl(C(a.gf, a, b, c), a.ih))
    }

    function To(a) {
        a.L && (ul(a.L), a.L = void 0)
    }

    u.Zd = function () {
        2 == So(this) && (this.la = tl(C(this.fj, this, this.b), this.Eg))
    };
    u.Wb = function () {
        this.la && (ul(this.la), this.la = void 0)
    };
    u.F = function () {
        this.J(!1);
        To(this);
        Qo(this);
        this.j() && tg(this.j());
        this.Aa = null;
        delete this.da;
        No.m.F.call(this)
    };

    function Uo(a, b) {
        Ko.call(this, a, b)
    }

    D(Uo, Ko);
    Uo.prototype.b = function (a, b, c) {
        b = Yg(a);
        b = ah(b);
        c = c ? new Qg(c.top + 10, c.right, c.bottom, c.left + 10) : new Qg(10, 0, 0, 10);
        Cl(this.a, a, 8, c, b, 9) & 496 && Cl(this.a, a, 8, c, b, 5)
    };

    function Zo(a) {
        lo.call(this, a, 5)
    }

    D(Zo, lo);
    Zo.prototype.b = function (a, b, c) {
        var d = new N(10, 0);
        zl(this.c, this.f, a, b, d, c, 9) & 496 && zl(this.c, 4, a, 1, d, c, 5)
    };

    function $o(a, b, c) {
        Go.call(this, b, c);
        this.h = new Aj;
        this.f = a || 5;
        this.l = null;
        this.o = !1;
        this.g = Array(this.f);
        this.H = Array(this.f);
        this.C = Xl.X();
        this.wa = xm.X();
        this.L = null;
        this.rh = !0
    }

    D($o, Go);
    var ap = "";
    u = $o.prototype;
    u.D = function () {
        $o.m.D.call(this);
        for (var a = 0; a < this.f; ++a) this.rc(new ao(""), !0)
    };
    u.fa = function (a) {
        $o.m.fa.call(this, a);
        M(this.j(), "alt-menu")
    };
    u.zf = function (a) {
        a = this.h.get(zc(a));
        for (var b = 0; b < Y(a, 2) && b < this.f; ++b) {
            var c = Ai(this, b);
            c.Nb(um($m(a, b), 0));
            c.za(b);
            c.J(!0, !0)
        }
        for (; b < this.f; ++b) Ai(this, b).J(!1)
    };

    function bp(a, b, c) {
        a.h.set(zc(b), c);
        Ho(a, b, 9, 8, !1, new Qg(-2, 1, -2, 1))
    }

    u.jd = function () {
        $o.m.jd.call(this);
        Ej(this.h)
    };
    u.J = function (a, b) {
        var c = this.Da;
        this.L = c;
        a && null != c ? (cp(this, c), bm(this.C, "altshow"), ym(this.wa, 207)) : null != this.l && en(this.l, 0, 0);
        null != c && (a ? this.ue(c) : this.qe(c));
        b = $o.m.J.call(this, a, b);
        a && null != this.j() && jh(this.j(), !1);
        return b
    };
    u.bb = function () {
        if (null != this.L) {
            var a = Lg(this.L);
            if (null != a) return a
        }
        return ""
    };
    u.pb = function () {
        $o.m.pb.call(this);
        if (this.o) for (var a = 0; a < this.g.length; a++) {
            var b = this.g[a];
            ul(b.f);
            b.g();
            b.l(-1);
            b.g();
            b.J(!1)
        }
    };
    u.ue = function (a) {
        M(a, "trans-target");
        a.title = ""
    };
    u.qe = function (a) {
        Mf(a, "trans-target");
        a.title = ap
    };
    u.Ga = function (a) {
        if (a.shiftKey || a.ctrlKey || a.altKey || 36 == a.keyCode || 35 == a.keyCode) return !1;
        var b = $o.m.Ga.call(this, a);
        if (!b && (37 == a.keyCode || 39 == a.keyCode)) {
            var c = hh(this.Da.parentNode.parentNode), d = null;
            if (!c && 37 == a.keyCode || c && 39 == a.keyCode) d = !1;
            if (!c && 39 == a.keyCode || c && 37 == a.keyCode) d = !0;
            if (this.le(d) && (c = this.Da, (c = d ? x(c.nextElementSibling) ? c.nextElementSibling : wg(c.nextSibling, !0) : x(c.previousElementSibling) ? c.previousElementSibling : wg(c.previousSibling, !1)) && c != this.Da)) return this.pb(), this.hh(d),
                this.zd(c ? this.a.get(zc(c)) : null, 0, 0), dp(this), a.b(), a.stopPropagation(), !0
        }
        return b
    };
    u.zd = function (a, b, c) {
        hh((a.A || this.Da).parentNode.parentNode) ? P(this.j(), Za, Tb) : P(this.j(), Za, "");
        if (this.o) for (var d = 0; d < this.g.length; d++) ep(this, d), Fg(this.g[d].c, "...");
        this.zf(a.A);
        $o.m.zd.call(this, a, b, c)
    };

    function fp(a, b, c) {
        !a.o || b >= a.f || "" == c || (Fg(a.g[b].c, c), ep(a, b))
    }

    function ep(a, b) {
        zl(Ai(a, b).j(), 12, a.g[b].j(), 8, new N(1, 0))
    }

    u.Oc = function (a) {
        $o.m.Oc.call(this, a);
        var b = this.Da;
        null != b && (bm(this.C, "altmenuhl"), ym(this.wa, 209), cp(this, b), a = this.od(a.target), -1 != a && a != this.f && (ul(this.H[a]), this.H[a] = tl(this.dj, 300, this), this.o && (b = this.g[a], hh(this.Da.parentNode.parentNode) ? (M(b.j(), Tb), P(b.j(), Za, Tb)) : (Mf(b.j(), Tb), P(b.j(), Za, "")), ep(this, a), ul(b.f), 0 == b.a ? b.f = tl(C(b.l, b, 1), 300) : b.l(1))))
    };
    u.dj = function () {
        bm(this.C, "altmenuhold");
        ym(this.wa, 208)
    };
    u.Ue = function (a) {
        $o.m.Ue.call(this, a);
        a = this.od(a.target);
        -1 != a && a != this.f && (ul(this.H[a]), this.o && this.g[a].o())
    };
    u.od = function (a) {
        return Ci(this, a)
    };
    u.le = t(!0);
    u.hh = ic();
    u.se = function (a, b, c, d, e) {
        (a = $o.m.se.call(this, a, b, c, d, e)) && a.Ac == Bb && (a.Ac = Ta);
        return a
    };
    u.ad = function (a) {
        $o.m.ad.call(this, a);
        U(this).w(a.A, Eb, this.Ag);
        U(this).w(a.A, Db, this.Ed);
        U(this).w(a.A, Xa, this.yg);
        U(this).w(a.A, Cb, this.zg)
    };
    u.ve = function (a) {
        $o.m.ve.call(this, a);
        U(this).ca(a.A, Eb, this.Ag);
        U(this).ca(a.A, Db, this.Ed);
        U(this).ca(a.A, Xa, this.yg);
        U(this).ca(a.A, Cb, this.zg)
    };

    function cp(a, b) {
        if (null != a.l && (b = a.h.get(zc(b))) && (a = a.l, a.b)) for (var c = a.A && (a.A.value || Lg(a.A)), d = -1, e = -1, f = !1, h = 0; h < Y(a.b, 5); h++) {
            var k = bn(a.b, h);
            if (0 != Y(k, 2) && (0 == tm(k, 5) && (f = c.indexOf(um(k, 4), e + 1), 0 <= f ? (d = f, e = d + um(k, 4).length, f = !0) : f = !1), bn(a.b, h).Gb() == b.Gb())) {
                if (f) {
                    c = [];
                    for (e = 0; e < Y(b, 3); ++e) c.push({
                        Bc: d + tm(new Ym(vm(b, 3, e)), 0),
                        Ef: d + tm(new Ym(vm(b, 3, e)), 1)
                    });
                    en(a, 0, 0, void 0, c)
                } else d = c.indexOf(um(b, 0)), 0 <= d && en(a, d, d + um(b, 0).length);
                break
            }
        }
    }

    function gp(a, b) {
        b ? zj(a.a.Ja(!1), function (c) {
            "" == this.b.jg(c.A) && (M(c.A, bc), this.b.ib(c.A, "_"));
            return !0
        }, a) : zj(a.a.Ja(!1), function (c) {
            Kf(c.A, bc) && (Mf(c.A, bc), this.b.ib(c.A, ""));
            return !0
        }, a)
    }

    u.Ag = function (a) {
        !Vn() && this.isEnabled() && (M(a.target, cc), cp(this, a.target), gp(this, !0), bm(this.C, "althighlight"), ym(this.wa, 206))
    };
    u.Ed = function (a) {
        Mf(a.target, cc);
        null == this.l || this.isVisible() || en(this.l, 0, 0);
        gp(this, !1)
    };
    u.zg = function (a) {
        Vn() && this.Ed(a)
    };
    u.yg = function (a) {
        Vn() || (this.Ed(a), In(Dn(a.target), void 0).select())
    };

    function dp(a) {
        zj(a.a.Ja(!1), function (b) {
            Mf(b.A, cc);
            return !0
        }, a)
    }

    u.jf = function (a) {
        a && a.currentTarget && a.currentTarget.Da && (a.g = a.currentTarget.Da);
        $o.m.jf.call(this, a)
    };
    u.Vd = function (a) {
        Vn() ? dp(this) : this.yb && $o.m.Vd.call(this, a)
    };

    function hp(a, b, c) {
        this.P = this.c = null;
        $o.call(this, a, b, c)
    }

    D(hp, $o);
    u = hp.prototype;
    u.hh = jc("c");
    u.J = function (a, b) {
        b = hp.m.J.call(this, a, b);
        this.c = null;
        a ? this.P = this.bb() : null != this.P && this.P != this.bb() && this.dispatchEvent(new Ch(Da, this));
        return b
    };
    u.ue = function (a) {
        hp.m.ue.call(this, a);
        M(a, "trans-edit");
        a.contentEditable = !0;
        so(this, a);
        ro(this).focus();
        Ig(ro(this), !0);
        U(this).w(a, yb, this.sg);
        U(this).w(a, Db, this.Fd);
        U(this).w(a, Eb, this.Fd);
        if (null != this.c) {
            a = In(Dn(a), void 0);
            var b = this.c ? a.Na() : a.fb(), c = nn(a);
            a = c;
            var d = b, e = new Hn;
            e.f = Rn(a, d, c, b);
            if (xg(a) && !og(a)) {
                var f = a.parentNode;
                d = Mc(f.childNodes, a);
                a = f
            }
            xg(c) && !og(c) && (f = c.parentNode, b = Mc(f.childNodes, c), c = f);
            e.f ? (e.a = c, e.g = b, e.b = a, e.c = d) : (e.a = a, e.g = d, e.b = c, e.c = b);
            e.select()
        }
    };
    u.qe = function (a) {
        hp.m.qe.call(this, a);
        Mf(a, "trans-edit");
        a.contentEditable = !1;
        ro(this) && Ig(ro(this), !1);
        U(this).ca(a, yb, this.sg);
        U(this).ca(a, Db, this.Fd);
        U(this).ca(a, Eb, this.Fd)
    };
    u.Fd = function () {
        var a = Tn();
        null == a || a.Ma() == a.eb() && a.Na() == a.fb() || this.J(a.Ma() == a.eb())
    };
    u.sg = function (a) {
        for (var b = 0; b < this.f; ++b) Ai(this, b).J(!1);
        if (13 == a.keyCode || 3 == a.keyCode) return null === wo(this) ? (this.pb(), a.stopPropagation(), a.b(), !0) : !1;
        null === wo(this) || !Pi(a) && 37 != a.keyCode && 39 != a.keyCode || (this.Da.focus(), this.Db(Ci(this, null)));
        return !1
    };
    u.le = function (a) {
        var b = Tn();
        if (b.Ma() == b.eb() && b.Na() == b.fb()) {
            var c = b.Ze() ? b.Na() : b.fb();
            b = In(Dn(nn(b)), void 0);
            if (!a && c == b.Na() || a && c == b.fb()) return !0
        }
        return !1
    };

    function ip(a, b, c) {
        $o.call(this, a, b, c);
        this.c = null
    }

    D(ip, $o);
    u = ip.prototype;
    u.fa = function (a) {
        ip.m.fa.call(this, a);
        this.c = new jp("");
        this.rc(this.c, !0)
    };
    u.zf = function (a) {
        ip.m.zf.call(this, a);
        this.c.j().firstChild.value = this.b.jg(a)
    };
    u.J = function (a, b) {
        b = ip.m.J.call(this, a, b);
        a && null != this.j() && (ro(this) == this.c.j().firstChild || ro(this) == this.c.j().firstChild.nextSibling) && jj(this.c, !0);
        return b
    };
    u.Oc = function (a) {
        ip.m.Oc.call(this, a);
        a.target == this.c ? so(this, this.c.j().firstChild) : so(this, this.j());
        ro(this).focus();
        ro(this).tabIndex = 0
    };
    u.od = function (a) {
        return a == this.c ? -1 : ip.m.od.call(this, a)
    };
    u.Ga = function (a) {
        return 9 == a.keyCode ? (this.c.V & 2 ? (ro(this) == this.c.j().firstChild ? so(this, this.c.j().firstChild.nextSibling) : so(this, this.c.j().firstChild), ro(this).focus(), ro(this).tabIndex = 0) : jj(this.c, !0), a.b(), a.stopPropagation(), !0) : ip.m.Ga.call(this, a)
    };
    u.le = function () {
        return null === wo(this) || !(wo(this) instanceof jp)
    };

    function jp(a, b, c) {
        W.call(this, a, c || kp.X(), b);
        this.ta(4, !1)
    }

    D(jp, W);
    jp.prototype.Lc = function (a) {
        a.target == this.j().firstChild.nextSibling && this.dispatchEvent(Da)
    };
    jp.prototype.O = function () {
        jp.m.O.call(this);
        U(this).w(this.j().firstChild, yb, function (a) {
            32 == a.keyCode && a.stopPropagation()
        })
    };
    jp.prototype.bb = function () {
        return this.j().firstChild.value
    };

    function kp() {
    }

    D(kp, Di);
    vc(kp);
    var lp = "";
    kp.prototype.D = function (a) {
        var b = a.b.D(oa, {value: a.$(), id: "alt-input-text", type: "text"}),
            c = a.b.D(oa, {value: lp, id: "alt-input-submit", "class": "", type: Na});
        return a.b.D(g, {id: "alt-input"}, b, c)
    };

    function mp() {
    }

    D(mp, Di);
    vc(mp);
    u = mp.prototype;
    u.Yb = ic();
    u.Oa = function (a, b) {
        ej(a, !1);
        a.kb &= -256;
        a.ta(32, !1);
        mp.m.Oa.call(this, a, b);
        a.Nb(b.value);
        return b
    };
    u.D = function (a) {
        ej(a, !1);
        a.kb &= -256;
        a.ta(32, !1);
        return a.b.D(va, {"class": Hi(this, a).join(" "), disabled: !a.isEnabled()}, a.$() || "")
    };
    u.xd = function (a) {
        return a.tagName == va
    };
    u.Le = z;
    u.Ke = function (a) {
        return a.isEnabled()
    };
    u.Zb = z;
    u.Jc = function (a, b, c) {
        mp.m.Jc.call(this, a, b, c);
        (a = a.j()) && 1 == b && (a.disabled = c)
    };
    u.Wa = z;
    u.Ic = function (a, b) {
        a && (a.value = b)
    };
    u.ea = t("goog-textarea");

    function np(a, b, c) {
        W.call(this, a, b || mp.X(), c);
        ej(this, !1);
        this.$c = !0;
        (b = this.j()) && this.a.yd(b, !0);
        this.cc = "" != a;
        a || (this.Mb = "")
    }

    D(np, W);
    var op = !(F && !pf(11));
    u = np.prototype;
    u.ec = !1;
    u.Jd = !1;
    u.cc = !1;
    u.qb = 0;
    u.Lg = 0;
    u.hf = 0;
    u.Dg = !1;
    u.Td = !1;
    u.wf = !1;
    u.vf = !1;
    u.lc = "";

    function pp(a) {
        return a.c.top + a.c.bottom + a.o.top + a.o.bottom
    }

    function qp(a) {
        var b = a.hf, c = a.j();
        b && c && a.Td && (b -= pp(a));
        return b
    }

    function rp(a) {
        a.hf = 50;
        sp(a)
    }

    function tp(a) {
        a.Lg = 50;
        sp(a)
    }

    u.za = function (a) {
        this.Nb(String(a))
    };
    u.Ba = function () {
        return this.j().value != this.lc || up(this) || this.cc ? this.j().value : ""
    };
    u.Nb = function (a) {
        np.m.Nb.call(this, a);
        this.cc = "" != a;
        sp(this)
    };
    u.ka = function (a) {
        np.m.ka.call(this, a);
        this.j().disabled = !a
    };

    function sp(a) {
        a.j() && a.Ad()
    }

    function up(a) {
        return "placeholder" in a.j()
    }

    function vp(a) {
        a.lc && (up(a) ? a.j().placeholder = a.lc : !a.j() || a.cc || a.Jd || (M(a.j(), $b), a.j().value = a.lc))
    }

    u.O = function () {
        np.m.O.call(this);
        var a = this.j();
        P(a, {overflowY: rb, overflowX: Ia, boxSizing: Ma, MsBoxSizing: Ma, WebkitBoxSizing: Ma, MozBoxSizing: Ma});
        this.c = nh(a);
        this.o = oh(a);
        U(this).w(a, "scroll", this.Ad).w(a, db, this.Ad).w(a, "keyup", this.Ad).w(a, Fb, this.hj).w(a, La, this.Sh);
        vp(this);
        sp(this)
    };

    function wp(a) {
        if (!a.Dg) {
            var b = a.j().cloneNode(!1);
            P(b, {
                position: Ca,
                height: Ia,
                top: "-9999px",
                margin: "0",
                padding: "1px",
                border: "1px solid #000",
                overflow: rb
            });
            a.b.a.body.appendChild(b);
            var c = b.scrollHeight;
            b.style.padding = "10px";
            var d = b.scrollHeight;
            a.wf = d > c;
            b.style.borderWidth = "10px";
            a.vf = b.scrollHeight > d;
            b.style.height = "100px";
            100 != b.offsetHeight && (a.Td = !0);
            tg(b);
            a.Dg = !0
        }
        b = a.j();
        isNaN(a.c.top) && (a.c = nh(b), a.o = oh(b));
        c = a.j().scrollHeight;
        var e = a.j();
        d = e.offsetHeight - e.clientHeight;
        if (!a.wf) {
            var f = a.c;
            d -= f.top + f.bottom
        }
        a.vf || (e = oh(e), d -= e.top + e.bottom);
        c += 0 < d ? d : 0;
        a.Td ? c -= pp(a) : (a.wf || (d = a.c, c += d.top + d.bottom), a.vf || (a = oh(b), c += a.top + a.bottom));
        return c
    }

    function xp(a, b) {
        a.qb != b && (a.qb = b, a.j().style.height = b + "px")
    }

    function yp(a) {
        var b = a.j();
        b.style.height = Ia;
        var c = b.value.match(/\n/g) || [];
        b.rows = c.length + 1;
        a.qb = 0
    }

    u.Sh = function () {
        up(this) || (this.Jd = !1, "" == this.j().value && (this.cc = !1, vp(this)))
    };
    u.Ad = function (a) {
        if (!this.ec) {
            var b = this.j();
            !up(this) && a && a.type == db && (b.value == this.lc && this.lc && !this.Jd && (Mf(b, $b), b.value = ""), this.Jd = !0, this.cc = "" != b.value);
            var c = !1;
            this.ec = !0;
            a = this.qb;
            if (b.scrollHeight) {
                var d = !1, e = !1, f = wp(this), h = b.offsetHeight, k = qp(this);
                var l = this.Lg;
                var m = this.j();
                l && m && this.Td && (l -= pp(this));
                k && f < k ? (xp(this, k), d = !0) : l && f > l ? (xp(this, l), b.style.overflowY = "", e = !0) : h != f ? xp(this, f) : this.qb || (this.qb = f);
                d || e || !op || (c = !0)
            } else yp(this);
            this.ec = !1;
            c && (b = this.j(), this.ec || (this.ec =
                !0, (e = b.scrollHeight) ? (f = wp(this), c = qp(this), c && f <= c || (d = this.c, b.style.paddingBottom = d.bottom + 1 + "px", wp(this) == f && (b.style.paddingBottom = d.bottom + e + "px", b.scrollTop = 0, e = wp(this) - e, e >= c ? xp(this, e) : xp(this, c)), b.style.paddingBottom = d.bottom + "px")) : yp(this), this.ec = !1));
            a != this.qb && this.dispatchEvent("resize")
        }
    };
    u.hj = function () {
        var a = this.j(), b = a.offsetHeight;
        a.filters && a.filters.length && (a = a.filters.item("DXImageTransform.Microsoft.DropShadow")) && (b -= a.offX);
        b != this.qb && (this.qb = this.hf = b)
    };

    function zp(a) {
        return function () {
            return a
        }
    }

    function Ap(a, b) {
        for (var c = 0; c < b.length - 2; c += 3) {
            var d = b.charAt(c + 2);
            d = "a" <= d ? d.charCodeAt(0) - 87 : Number(d);
            d = "+" == b.charAt(c + 1) ? a >>> d : a << d;
            a = "+" == b.charAt(c) ? a + d & 4294967295 : a ^ d
        }
        return a
    }

    function Bp(a, b) {
        var c = b.split(".");
        b = Number(c[0]) || 0;
        for (var d = [], e = 0, f = 0; f < a.length; f++) {
            var h = a.charCodeAt(f);
            128 > h ? d[e++] = h : (2048 > h ? d[e++] = h >> 6 | 192 : (55296 == (h & 64512) && f + 1 < a.length && 56320 == (a.charCodeAt(f + 1) & 64512) ? (h = 65536 + ((h & 1023) << 10) + (a.charCodeAt(++f) & 1023), d[e++] = h >> 18 | 240, d[e++] = h >> 12 & 63 | 128) : d[e++] = h >> 12 | 224, d[e++] = h >> 6 & 63 | 128), d[e++] = h & 63 | 128)
        }
        a = b;
        for (e = 0; e < d.length; e++) a += d[e], a = Ap(a, "+-a^+6");
        a = Ap(a, "+-3^+b+-f");
        a ^= Number(c[1]) || 0;
        0 > a && (a = (a & 2147483647) + 2147483648);
        c = a % 1E6;
        return c.toString() +
            "." + (c ^ b)
    }

    var Cp = null;

    function Dp() {
        var a = zp(String.fromCharCode(116)), b = zp(String.fromCharCode(107));
        a = [a(), a()];
        a[1] = b();
        return a.join("")
    };

    function Ep() {
        this.a = 0;
        this.wa = xm.X()
    }

    function Fp(a) {
        a = a.Ea("q").join("");
        if (null !== Cp) var b = Cp; else {
            var c = zp(String.fromCharCode(84));
            b = zp(String.fromCharCode(75));
            c = [c(), c()];
            c[1] = b();
            b = (Cp = window[c.join(b())] || "") || ""
        }
        return "&" + Dp() + "=" + Bp(a, b)
    }

    function Gp(a, b, c, d, e) {
        c = c.toString();
        c += Fp(d);
        d = d.toString();
        var f = sa;
        b += "?" + c;
        2E3 > b.length + d.length && (f = "GET", b += "&" + d, d = "");
        ++a.a;
        Ol(b, function (h) {
            --a.a;
            e(h)
        }, f, d, void 0)
    }

    Ep.prototype.b = function (a, b, c) {
        c = c.target;
        !c.Pc() || "[" != c.Lb()[0] && "{" != c.Lb()[0] ? (Hp(this, c), b && b(c.ya())) : (b = Ip(c, "handleSingleResult_"), B(b) && (b = new an(b)), a(b))
    };
    Ep.prototype.c = function (a, b, c) {
        c = c.target;
        if (c.Pc()) {
            c = Ip(c, "handleTextResult_");
            var d = [];
            if (a) d.push(B(c) ? c[0] : c); else if (B(c)) for (a = 0; a < c.length; ++a) d.push(B(c[a]) ? c[a][0] : c[a]);
            b(d)
        } else Hp(this, c), b(null, c.De())
    };

    function Ip(a, b) {
        var c = a.Lb();
        a = {"class": "trans.common.TranslationAPI", func: b, url: a.Ee()};
        try {
            var d = JSON.parse(c)
        } catch (e) {
            throw d = Xl.X(), a.js = c, a.error = e.message, d.log("jsonParseErr", a), e;
        }
        return d
    }

    var Jp = {},
        Kp = (Jp[1] = 15, Jp[2] = 16, Jp[3] = 17, Jp[4] = 18, Jp[5] = 19, Jp[6] = 20, Jp[7] = 21, Jp[8] = 22, Jp[9] = 23, Jp);

    function Hp(a, b) {
        var c = b.De();
        c = c in Kp ? Kp[c] : 0;
        a = ym(a.wa, 148);
        var d = new mm;
        Ff(d, 1, 156);
        c && Ff(d, 5, c);
        Gf(a, 63, d);
        c = Xl.X();
        a = b.Ee();
        b = b.Lb();
        c.log("invalidResponse", {q: a.substring(0, 500), ql: a.length, r: b.substring(0, 500), rl: b.length})
    };

    function Lp(a, b) {
        this.a = [];
        this.b = b;
        for (var c = !0, d = a.length - 1; 0 <= d; d--) {
            var e = a[d] | 0;
            c && e == b || (this.a[d] = e, c = !1)
        }
    }

    var Mp = {};

    function Np(a) {
        if (-128 <= a && 128 > a) {
            var b = Mp[a];
            if (b) return b
        }
        b = new Lp([a | 0], 0 > a ? -1 : 0);
        -128 <= a && 128 > a && (Mp[a] = b);
        return b
    }

    function Op(a) {
        if (isNaN(a) || !isFinite(a)) return Pp;
        if (0 > a) return Qp(Op(-a));
        for (var b = [], c = 1, d = 0; a >= c; d++) b[d] = a / c | 0, c *= 4294967296;
        return new Lp(b, 0)
    }

    var Pp = Np(0), Rp = Np(1), Sp = Np(16777216);

    function Tp(a) {
        if (-1 == a.b) return -Tp(Qp(a));
        for (var b = 0, c = 1, d = 0; d < a.a.length; d++) {
            var e = Up(a, d);
            b += (0 <= e ? e : 4294967296 + e) * c;
            c *= 4294967296
        }
        return b
    }

    u = Lp.prototype;
    u.toString = function (a) {
        a = a || 10;
        if (2 > a || 36 < a) throw Error("radix out of range: " + a);
        if (Vp(this)) return "0";
        if (-1 == this.b) return "-" + Qp(this).toString(a);
        for (var b = Op(Math.pow(a, 6)), c = this, d = ""; ;) {
            var e = Wp(c, b).a;
            c = Xp(c, Yp(e, b));
            var f = ((0 < c.a.length ? c.a[0] : c.b) >>> 0).toString(a);
            c = e;
            if (Vp(c)) return f + d;
            for (; 6 > f.length;) f = "0" + f;
            d = "" + f + d
        }
    };

    function Up(a, b) {
        return 0 > b ? 0 : b < a.a.length ? a.a[b] : a.b
    }

    function Vp(a) {
        if (0 != a.b) return !1;
        for (var b = 0; b < a.a.length; b++) if (0 != a.a[b]) return !1;
        return !0
    }

    function Zp(a, b) {
        a = Xp(a, b);
        return -1 == a.b ? -1 : Vp(a) ? 0 : 1
    }

    function Qp(a) {
        for (var b = a.a.length, c = [], d = 0; d < b; d++) c[d] = ~a.a[d];
        return (new Lp(c, ~a.b)).add(Rp)
    }

    u.abs = function () {
        return -1 == this.b ? Qp(this) : this
    };
    u.add = function (a) {
        for (var b = Math.max(this.a.length, a.a.length), c = [], d = 0, e = 0; e <= b; e++) {
            var f = d + (Up(this, e) & 65535) + (Up(a, e) & 65535),
                h = (f >>> 16) + (Up(this, e) >>> 16) + (Up(a, e) >>> 16);
            d = h >>> 16;
            f &= 65535;
            h &= 65535;
            c[e] = h << 16 | f
        }
        return new Lp(c, c[c.length - 1] & -2147483648 ? -1 : 0)
    };

    function Xp(a, b) {
        return a.add(Qp(b))
    }

    function Yp(a, b) {
        if (Vp(a) || Vp(b)) return Pp;
        if (-1 == a.b) return -1 == b.b ? Yp(Qp(a), Qp(b)) : Qp(Yp(Qp(a), b));
        if (-1 == b.b) return Qp(Yp(a, Qp(b)));
        if (0 > Zp(a, Sp) && 0 > Zp(b, Sp)) return Op(Tp(a) * Tp(b));
        for (var c = a.a.length + b.a.length, d = [], e = 0; e < 2 * c; e++) d[e] = 0;
        for (e = 0; e < a.a.length; e++) for (var f = 0; f < b.a.length; f++) {
            var h = Up(a, e) >>> 16, k = Up(a, e) & 65535, l = Up(b, f) >>> 16, m = Up(b, f) & 65535;
            d[2 * e + 2 * f] += k * m;
            $p(d, 2 * e + 2 * f);
            d[2 * e + 2 * f + 1] += h * m;
            $p(d, 2 * e + 2 * f + 1);
            d[2 * e + 2 * f + 1] += k * l;
            $p(d, 2 * e + 2 * f + 1);
            d[2 * e + 2 * f + 2] += h * l;
            $p(d, 2 * e + 2 * f + 2)
        }
        for (e = 0; e <
        c; e++) d[e] = d[2 * e + 1] << 16 | d[2 * e];
        for (e = c; e < 2 * c; e++) d[e] = 0;
        return new Lp(d, 0)
    }

    function $p(a, b) {
        for (; (a[b] & 65535) != a[b];) a[b + 1] += a[b] >>> 16, a[b] &= 65535, b++
    }

    function aq(a, b) {
        this.a = a;
        this.b = b
    }

    function Wp(a, b) {
        if (Vp(b)) throw Error("division by zero");
        if (Vp(a)) return new aq(Pp, Pp);
        if (-1 == a.b) return b = Wp(Qp(a), b), new aq(Qp(b.a), Qp(b.b));
        if (-1 == b.b) return b = Wp(a, Qp(b)), new aq(Qp(b.a), b.b);
        if (30 < a.a.length) {
            if (-1 == a.b || -1 == b.b) throw Error("slowDivide_ only works with positive integers.");
            for (var c = Rp, d = b; 0 >= Zp(d, a);) c = bq(c, 1), d = bq(d, 1);
            var e = cq(c, 1), f = cq(d, 1);
            d = cq(d, 2);
            for (c = cq(c, 2); !Vp(d);) {
                var h = f.add(d);
                0 >= Zp(h, a) && (e = e.add(c), f = h);
                d = cq(d, 1);
                c = cq(c, 1)
            }
            b = Xp(a, Yp(e, b));
            return new aq(e, b)
        }
        for (e =
                 Pp; 0 <= Zp(a, b);) {
            c = Math.max(1, Math.floor(Tp(a) / Tp(b)));
            d = Math.ceil(Math.log(c) / Math.LN2);
            d = 48 >= d ? 1 : Math.pow(2, d - 48);
            f = Op(c);
            for (h = Yp(f, b); -1 == h.b || 0 < Zp(h, a);) c -= d, f = Op(c), h = Yp(f, b);
            Vp(f) && (f = Rp);
            e = e.add(f);
            a = Xp(a, h)
        }
        return new aq(e, a)
    }

    u.and = function (a) {
        for (var b = Math.max(this.a.length, a.a.length), c = [], d = 0; d < b; d++) c[d] = Up(this, d) & Up(a, d);
        return new Lp(c, this.b & a.b)
    };
    u.or = function (a) {
        for (var b = Math.max(this.a.length, a.a.length), c = [], d = 0; d < b; d++) c[d] = Up(this, d) | Up(a, d);
        return new Lp(c, this.b | a.b)
    };
    u.xor = function (a) {
        for (var b = Math.max(this.a.length, a.a.length), c = [], d = 0; d < b; d++) c[d] = Up(this, d) ^ Up(a, d);
        return new Lp(c, this.b ^ a.b)
    };

    function bq(a, b) {
        var c = b >> 5;
        b %= 32;
        for (var d = a.a.length + c + (0 < b ? 1 : 0), e = [], f = 0; f < d; f++) e[f] = 0 < b ? Up(a, f - c) << b | Up(a, f - c - 1) >>> 32 - b : Up(a, f - c);
        return new Lp(e, a.b)
    }

    function cq(a, b) {
        var c = b >> 5;
        b %= 32;
        for (var d = a.a.length - c, e = [], f = 0; f < d; f++) e[f] = 0 < b ? Up(a, f + c) >>> b | Up(a, f + c + 1) << 32 - b : Up(a, f + c);
        return new Lp(e, a.b)
    };Xp(bq(Rp, 32), Rp);
    Np(65535);
    Xp(bq(Rp, 128), Rp);
    var dq = F || J || Xe || Ye || !1;
    xf && 0 <= Gd(yl, "4") || yf && K("533") || I && K("2.0") || F && K("10") || Xe && ke();

    function eq(a, b, c, d, e, f, h, k, l) {
        T.call(this, a);
        this.g = h || null;
        null != this.g && this.g.h(C(this.ti, this));
        this.l = null;
        this.a = Ia;
        this.da = this.c = "";
        this.Za = new Ep;
        this.Hb = !!b && dq && !F;
        this.K = null != e ? e : 0;
        this.f = null;
        this.Hb ? this.f = new hp : this.f = new ip;
        l && this.f.ka(!1);
        if (0 < this.K) for (a = this.f, a.o = !0, b = 0; b < a.f; b++) h = jg(g, "goog-menu", ""), e = jg(g, null, h), h = new Wm(e, h), a.g[b] = h, document.body.appendChild(e);
        this.f.fa(c);
        this.h = k || null;
        this.Ia = null != d ? d : -1;
        this.L = Xl.X();
        this.C = new Aj;
        this.H = null;
        this.Ya = "t";
        this.P =
            this.W = null;
        this.o = f || null;
        this.qa = !1;
        null != this.o && (this.o.c(C(this.xj, this)), this.o.a(C(this.oi, this)));
        this.va = null;
        this.wa = xm.X()
    }

    D(eq, T);

    function fq(a, b) {
        a.va = b;
        a.f.l = b
    }

    function gq(a) {
        a.H = vb;
        a.f.C.s = a.H || ""
    }

    function hq(a) {
        var b = iq;
        a.L.f = b;
        a.Ya = b
    }

    function jq(a, b) {
        null != a.o && a.o.f();
        b && (a.l = new an(b), a.P = null);
        kq(a) && (a.g.b(), null != a.h && a.h.a(!1));
        if (a.l) {
            b = 0 != $f().length;
            a.b.Qc(a.j());
            a.f.jd();
            a.va && (a.va.b = a.l);
            for (var c = "", d = 0, e = 0; e < Y(a.l, 5); e++) lq(a.l, e) && (c += " "), c += mq(a.l, e), d += Y(bn(a.l, e), 2);
            if (0 != d) {
                c = [];
                d = !1;
                e = a.l;
                for (var f = "", h = 0; h < Y(e, 5); h++) {
                    var k = bn(e, h);
                    null != k.oa[4] && 0 < um(k, 4).length ? f = um(k, 4) : (new Zm(k.Gb())).oa[4] = f
                }
                for (e = 0; e < Y(a.l, 5); e++) {
                    f = bn(a.l, e);
                    h = $m(f, 0);
                    lq(a.l, e) ? a.b.appendChild(a.j(), a.b.a.createTextNode(" ")) : ("km" ==
                        a.c || "lo" == a.c) && a.b.appendChild(a.j(), J ? ng() : Xe ? document.createTextNode("&shy;") : F ? document.createTextNode("&#8203;") : ng());
                    null != f.oa[4] && 0 < um(f, 4).length && 0 == tm(f, 5) && c.push(um(f, 4));
                    var l;
                    k = mq(a.l, e);
                    /^[\s\xa0]*$/.test(k) ? 0 == k.length || (l = nq(k)) : (l = a.b.D(ua, null, k), h = tm(h, 1), 0 <= a.Ia && h < a.Ia && M(l, "alt-low-conf"), Cj(a.C, a.a + "." + a.c + "." + um(f, 0)) && (h = a.C.get(a.a + "." + a.c + "." + um(f, 0)), h != oq(f, 0) && (a.b.ib(l, h), M(l, Ga), d = !0, pq(a, !0))), l.title = ap, bp(a.f, l, f));
                    l && a.b.appendChild(a.j(), l)
                }
                if (null != a.g) {
                    l =
                        a.a + "." + a.c;
                    for (e = 0; e < c.length; ++e) l += "." + c[e];
                    Cj(a.C, l) && (qq(a, !1), d = !0, rq(a, a.C.get(l)), null != a.h && a.h.a(!1), pq(a, !0))
                }
                d || (pq(a, !1), qq(a, !1));
                (d || b) && a.dispatchEvent(Da)
            }
        } else pq(a, !1), qq(a, !1)
    }

    function nq(a) {
        a = Ke(a).replace(/(\r\n|\r|\n)/g, "<br>").split("<br>");
        var b = document.createDocumentFragment(), c = 0;
        Nc(a, function (d) {
            0 != c && b.appendChild(jg("BR"));
            c++;
            "" != d && b.appendChild(document.createTextNode(String(Le(d))))
        });
        return b
    }

    function sq(a, b) {
        if (kq(a)) return a.g.a();
        var c = [];
        if (a.j() && a.j().childNodes) for (var d = 0; d < a.j().childNodes.length; ++d) {
            var e = a.j().childNodes[d];
            c[d] = b && "BR" == e.tagName ? "\n" : Lg(e)
        }
        return c.join("")
    }

    function tq(a, b, c, d) {
        for (a = 0; a < Y(b, 5); a++) {
            var e = bn(b, a), f = e && e;
            if (om(c.oa, e ? f.oa : null)) {
                c = b;
                b = a;
                e = -1;
                a = Y(c, 5);
                for (f = b; 0 <= f; f--) if (0 == tm(bn(c, f), 5)) {
                    e = f;
                    break
                }
                for (f = b + 1; f <= Y(c, 5); f++) if (0 == tm(bn(c, f), 5)) {
                    a = f;
                    break
                }
                if (null != d && d) b = uq(c, e, a); else if (d = c, c = e, d) {
                    e = b + 1;
                    f = b;
                    for (b = mq(d, b).length; 64 > b && (e != a || f != c);) e < a && (b += mq(d, e++).length + 1), 64 > b && f > c && (b += mq(d, --f).length + 1);
                    b = uq(d, f, e)
                } else b = "";
                return b
            }
        }
        return ""
    }

    function uq(a, b, c) {
        var d = [];
        d.push(mq(a, b));
        for (b += 1; b < c; b++) lq(a, b) && d.push(" "), d.push(mq(a, b));
        return d.join("")
    }

    function lq(a, b) {
        if (0 == b) return !1;
        var c = bn(a, b), d = bn(a, b - 1);
        if (c = sm($m(c, 0), 2) && !sm($m(d, 0), 3)) a = mq(a, b - 1), b = a.length - 1, c = !(0 <= b && a.indexOf("\n", b) == b);
        return c
    }

    u = eq.prototype;
    u.cb = q("a");
    u.na = q("c");
    u.D = function () {
        this.S(Og(this.b, "span"))
    };
    u.S = function (a) {
        eq.m.S.call(this, a);
        jq(this)
    };
    u.O = function () {
        eq.m.O.call(this);
        U(this).w(this.f, Da, this.Fi);
        null != this.h && null != this.h.b && (U(this).w(this.h.b, Ta, this.Ji), ji(U(this), this.h.b, this.wa.a, this.wa));
        U(this).w(this.f, "show", this.Ei);
        this.j() && U(this).w(this.j(), yb, function (a) {
            32 == a.keyCode && a.stopPropagation()
        }, !0)
    };
    u.F = function () {
        eq.m.F.call(this);
        this.f.M()
    };
    u.ti = function () {
        this.o.ka(this.g.c());
        pq(this, this.g.c())
    };
    u.Fi = function (a) {
        if (a.type != sb || a.target == this.f) if (null == a.target && null != this.g) this.L.log("editpopupclk"), ym(this.wa, 233), null != this.h && this.h.a(!0), this.g.l(sq(this)), this.qa = this.o.j().style.display != Hb, this.o.reset(), null != this.h ? this.o.ka(this.h.b.style.display != Hb) : this.o.ka(!1), pq(this, !1); else {
            var b = a.g;
            null == b && null != a.currentTarget && (b = a.currentTarget.Da);
            var c = a.target.bb();
            if (null != b && null != a.target) {
                var d = b, e = this.f.h.get(zc(d));
                this.b.ib(d, c);
                c == oq(e, 0) ? (Mf(d, Ga), 0 == $f().length && (pq(this,
                    !1), qq(this, !1))) : (M(d, Ga), pq(this, !0), qq(this, !0));
                null != this.C && this.C.set(this.a + "." + this.c + "." + um(e, 0), c);
                e = this.f.h.get(zc(b));
                null != this.C && this.C.set(this.a + "." + this.c + "." + um(e, 0), c);
                d = oq(e, 0);
                b = Ci(this.f, a.target);
                d = {
                    sl: this.a,
                    tl: this.c,
                    utrans: c,
                    gtrans: d,
                    index: b,
                    ophrase: um(e, 0),
                    osentence: um(e, 4),
                    tsentence: tq(this, this.l, e)
                };
                0 < Y(e, 2) && (d.confidence = tm($m(e, 0), 1));
                if (a.target instanceof jp || -1 == b) d.manual = 1, ym(this.wa, 240); else {
                    a = ym(this.wa, 239);
                    e = new im;
                    var f = Hf(Hf(e, 2, gm), 3, em);
                    Ff(f, 1, b);
                    Gf(a, 27, e)
                }
                for (var h in d) y(d[h]) && 64 < d[h].length && (d.tr = 1, d[h] = d[h].substr(0, 64));
                this.L.log("usealt", d, this.H);
                h = new Ch("usealt");
                h.text = c;
                this.dispatchEvent(h);
                this.dispatchEvent(Da)
            }
        }
    };

    function rq(a, b) {
        if (a.j()) {
            null == a.W && (a.P = Wc(a.b.di(a.j())));
            a.W = b;
            var c;
            if (c = a.j().childNodes && 0 < a.j().childNodes.length) c = (c = a.j().childNodes[0]) ? Cj(a.f.a, zc(c)) : !1;
            c ? (a.b.Qc(a.j()), a.f.jd(), b = a.b.D(ua, Ga, a.W), a.b.appendChild(a.j(), b), bp(a.f, b, new Zm)) : a.j().innerHTML = Ke(b).replace(/(\r\n|\r|\n)/g, "<br>")
        }
    }

    u.Ji = function () {
        null != this.g && kq(this) ? this.g.g() : vq(this);
        this.L.log("clkundo", void 0, this.H)
    };
    u.oi = function () {
        kq(this) && (this.g.c() && (rq(this, this.g.a()), this.qa = !0), this.g.b(), null != this.h && this.h.a(!1), this.g.c() && pq(this, !0), this.o.ka(!0), Q(this.o.j(), this.qa), this.dispatchEvent(Da));
        ym(this.wa, 215);
        this.L.log("clkcancel", void 0, this.H)
    };
    u.Ei = function () {
        var a = this.f.h.get(zc(this.f.Da));
        if (a) {
            if (0 < this.K) {
                var b = new Mj("source=baf");
                if (1 == this.K) {
                    for (var c = [], d = 0, e = Y(a, 2); d < e; d++) c.push(oq(a, d));
                    d = this.Za;
                    var f = this.c, h = this.a, k = wq(this), l = C(this.yj, this);
                    e = new Mj;
                    var m = new Mj;
                    e.set("client", "mt");
                    e.set("sl", f);
                    e.set("tl", h);
                    e.set("hl", k);
                    e.set("v", "1.0");
                    b && e.ig(b);
                    (b = !B(c) || B(c) && 1 == c.length) ? m.set("q", c) : ak(m, "q", c);
                    b = C(d.c, d, b, l);
                    Gp(d, da, e, m, b)
                } else for (d = 0, e = Y(a, 2); d < e; d++) {
                    h = oq(a, d);
                    c = this.Za;
                    m = this.c;
                    l = this.a;
                    f = wq(this);
                    k = C(this.zj,
                        this, d);
                    var n = b, r = new Mj, w = new Mj;
                    r.set("client", "mt");
                    r.set("sl", m);
                    r.set("tl", l);
                    r.set("hl", f);
                    ak(r, "dt", ["at", "t"]);
                    n && r.ig(n);
                    w.set("q", h);
                    Gp(c, "/translate_a/single", r, w, C(c.b, c, k, void 0))
                }
            }
            b = new Ch(Ta);
            b.text = this.f.bb();
            b.h = Y(this.l, 5);
            this.dispatchEvent(b);
            b = {};
            b.confidence = tm($m(a, 0), 1);
            this.a && this.c && this.da && (b.segments = Y(this.l, 5), b.sl = this.a, b.tl = this.c, b.hl = this.da);
            ym(this.wa, 238);
            this.L.log("phrsclk", b, this.H)
        }
    };
    u.zj = function (a, b) {
        if (1 == this.K || 1 < Y(b, 5)) {
            var c = um(new wm(vm(b, 0, 0)), 0);
            var d = 1;
            for (var e = Y(b, 0); d < e; d++) c += " " + um(new wm(vm(b, 0, d)), 0);
            d = c
        } else if (1 == Y(b, 5)) {
            c = [];
            b = bn(b, 0);
            d = 0;
            for (e = Math.min(this.K, Y(b, 2)); d < e; d++) c.push(oq(b, d));
            d = c.join(", ")
        } else d = "...";
        fp(this.f, a, d)
    };
    u.yj = function (a) {
        for (var b = 0; b < a.length; b++) fp(this.f, b, a[b])
    };

    function vq(a) {
        kq(a) && (null != a.h && a.h.a(!1), a.g.b());
        Ej(a.C);
        a.W = null;
        jq(a);
        a.dispatchEvent(Da)
    }

    function pq(a, b) {
        null != a.h && null != a.h.b && Q(a.h.b, b)
    }

    function qq(a, b) {
        null != a.o && (b && a.o.reset(), Q(a.o.j(), b))
    }

    u.xj = function () {
        var a = [], b;
        null != this.P ? b = this.P : b = ug(this.j());
        for (var c = {segment: []}, d = null, e = 0, f = 0; f < b.length; f++) {
            var h = bn(this.l, f);
            if (null != h) {
                var k = Lg(b[f]);
                a:{
                    var l = k;
                    var m = h;
                    if (0 == Y(m, 2)) l = 0; else {
                        for (var n = 0; n < Y(m, 2); ++n) if (l == oq(m, n)) {
                            l = n;
                            break a
                        }
                        l = -1
                    }
                }
                m = xd(um(h, 4));
                n = tq(this, this.l, h, !0);
                if (0 != m.length) {
                    if (0 == a.length || m != a[a.length - 1]) a.push(m), d = xq(this, a.length - 1), e = 0, d = {
                        source: m,
                        original_target: n,
                        segment_source: d,
                        phrase_correction: []
                    }, c.segment.push(d);
                    if (0 != l) for (m = oq(h, 0).length,
                                         l = {
                                             alternative_index: l,
                                             edited_phrase: k,
                                             source_span: [],
                                             target_span: [{start: e, end: e + m}]
                                         }, d.phrase_correction.push(l), m = 0; m < Y(h, 3); ++m) n = new Ym(vm(h, 3, m)), l.source_span.push({
                        start: tm(n, 0),
                        end: tm(n, 1)
                    });
                    e += k.length;
                    sm($m(h, 0), 2) && e++
                }
            }
        }
        if (kq(this)) {
            this.dispatchEvent(Da);
            this.g.b();
            null != this.h && this.h.a(!1);
            pq(this, !0);
            this.g.a() != sq(this) && rq(this, this.g.a());
            b = this.a + "." + this.c;
            for (f = 0; f < a.length; ++f) b += "." + a[f];
            a = this.g.a();
            this.C.set(b, a);
            c.contains_full_edit = !0
        }
        c.edited_target = sq(this, !0);
        a = new Mj;
        a.set("ue", JSON.stringify(c));
        a.set("sl", this.a);
        a.set("tl", this.c);
        Ol(fa + this.Ya, void 0, sa, a.toString(), 1E4)
    };

    function xq(a, b) {
        if (b < Y(a.l, 0)) switch (rm(new wm(vm(a.l, 0, b)), 4, 0)) {
            case 0:
                return 1;
            case 1:
                return 2;
            case 2:
                return 3;
            case 10:
                return 4;
            case 3:
                return 5
        }
        return 0
    }

    function kq(a) {
        return null != a.g && a.g.f()
    }

    function mq(a, b) {
        a = bn(a, b);
        return 0 == Y(a, 2) ? um(a, 0) : oq(a, 0)
    }

    function oq(a, b) {
        return um($m(a, b), 0)
    }

    function wq(a) {
        a = a.da;
        0 === a.length && null != Yf(document, "hl") && (a = Yf(document, "hl").value);
        return a
    };var yq = window.google && google.translate && google.translate._const;
    yq || (yq = {
        _cac: "",
        _cam: "",
        _cest: new Date,
        _cjlc: "",
        _cl: "",
        _cuc: "",
        _cnad: !1,
        _cnal: {},
        Ik: "",
        _pah: "",
        _pas: "",
        _pbi: "",
        _pci: "",
        _phf: "",
        _pli: "",
        _plla: "",
        _pmi: "",
        _ps: "",
        _pta: "",
        _puh: ""
    });
    var zq = window.google && window.google.translate && window.google.translate.v || "", Aq = yq._cl || "en",
        Bq = yq._cuc, Cq = yq._cnad, Dq = yq._cest, Eq = yq._cnal || {}, Fq = "lib" == yq._cam ? 1 : 0,
        Gq = (yq._cac || "te") + (1 == Fq ? "_lib" : ""), Hq = function () {
            function a(d) {
                return function () {
                    return d
                }
            }

            var b = String.fromCharCode(107), c = a(String.fromCharCode(116));
            b = a(b);
            c = [c(), c()];
            c[1] = b();
            return yq["_c" + c.join(b())] || ""
        }(), Iq = yq._pah || "", Jq = yq._pas || "https://", Kq = yq._pbi || "", Lq = yq._pci || "", Mq = yq._plla || "",
        Nq = yq._pli || "", Oq = yq._ps || "", Pq = yq._puh ||
        "", Qq = "//" + Pq + fa + Gq,
        Rq = "https://www.google.com/support/translate" + ("en" == Aq ? "" : "#googtrans/en/" + Aq);

    function Sq(a) {
        for (var b = {}, c = 0; c < a.length; ++c) b[a[c]] = !0;
        return b
    }

    function Tq(a) {
        this.b = a ? [a] : [];
        this.a = [0];
        this.c = !1
    }

    Tq.prototype.register = function (a) {
        if (this.c) return a || z;
        this.a.push(0);
        var b = this.a.length - 1;
        return C(function () {
            this.a[b]++;
            a && a.apply(null, arguments);
            Uq(this)
        }, this)
    };
    Tq.prototype.delay = function (a) {
        return this.c ? a : C(function () {
            if (this.c) a.apply(null, arguments); else {
                var b = arguments;
                this.b.push(function () {
                    a.apply(null, b)
                })
            }
        }, this)
    };
    Tq.prototype.finish = function () {
        this.a[0] = 1;
        Uq(this)
    };

    function Uq(a) {
        for (var b = 0; b < a.a.length; ++b) if (0 == a.a[b]) return;
        a.c = !0;
        for (b = 0; b < a.b.length; ++b) {
            var c = a.b[b];
            a.b[b] = null;
            c.call()
        }
        a.b = [];
        a.a = []
    }

    function Vq(a) {
        this.c = a;
        this.b = this.a = !1
    }

    function Wq(a, b) {
        return C(function () {
            b && b.apply(null, arguments);
            this.b ? this.a || (this.c.call(), this.a = !0) : this.a = !0
        }, a)
    }

    Vq.prototype.finish = function () {
        this.b || (this.b = !0, this.a && this.c.call())
    };

    function Xq(a, b, c) {
        this.a = b;
        this.h = a;
        this.l = c || 0;
        this.b = this.c = !1
    }

    function Yq(a) {
        a.c || a.g()
    }

    Xq.prototype.g = function () {
        (this.c = (this.b = !!this.h.call()) || 0 >= --this.l) ? (this.a.call(null, this.b), this.f = 0) : this.f = window.setTimeout(C(this.g, this), 30)
    };
    Xq.prototype.cancel = function () {
        this.f && window.clearTimeout(this.f);
        this.c = !0;
        this.a.call(null, this.b)
    };

    function Zq(a, b) {
        return function () {
            a.dispatchEvent(b)
        }
    }

    function $q(a) {
        a = xd(a).toLowerCase().replace("_", "-");
        if ("zh-cn" == a) return "zh-CN";
        if ("zh-tw" == a) return "zh-TW";
        var b = a.indexOf("-");
        a = 0 <= b ? a.substring(0, b) : a;
        return "zh" == a ? "zh-CN" : a
    }

    function ar(a) {
        var b = [], c;
        for (c in a) if (a[c] !== Object.prototype[c]) {
            var d = Ie(c);
            if (A(a[c]) == Ha) for (var e = 0; e < a[c].length; ++e) b.push(d + "=" + Ie(a[c][e])); else b.push(d + "=" + Ie(a[c]))
        }
        return b.join("&")
    }

    function br(a, b) {
        b = b || {};
        b.nca = a;
        b.client = Gq;
        zq && (b.logld = "v" + zq);
        var c = new Image;
        c.src = "//" + Pq + "/gen204?" + ar(b);
        c.onload = function () {
            c.onload = null
        }
    }

    function cr(a, b) {
        if ((F || Xe) && window.location.hostname != document.domain) {
            dr = dr ? dr + 1 : 1;
            var c = "f" + dr + "_" + Fc().toString(36);
            window[c] = function () {
                window[c] = void 0;
                a.src = xb;
                b && window.setTimeout(function () {
                    b()
                }, 0)
            };
            a.src = "javascript:void(document.write(\"<script>document.domain='" + document.domain + "';parent['" + c + "']();\x3c/script>\"))"
        } else b && b()
    }

    var dr;

    function er() {
        var a = {};
        try {
            for (var b in Object.prototype) {
                var c = Object.prototype[b];
                delete Object.prototype[b];
                a[b] = c
            }
        } catch (d) {
            return {}
        }
        return a
    }

    function fr(a) {
        for (var b in a) Object.prototype[b] = a[b]
    }

    function gr(a) {
        for (var b in a) if (a[b] !== Object.prototype[b]) return !1;
        return !0
    }

    function hr(a, b) {
        return a != Ia && "zh-CN" != a && a == b
    };var ir, jr, kr;
    (function () {
        function a(d, e, f) {
            var h = Array.prototype.slice.call(arguments);
            h.splice(0, 2);
            h = "l" + d.toString(16) + "i" + e.toString(16) + (h.length ? "-" + h.join("_") : "");
            b ? b.push(h) : br(h)
        }

        var b = null, c = null;
        ir = function (d, e, f) {
            for (var h in f) f[h] !== Object.prototype[h] && (e[h] = xc(f[h]) ? f[h] : Ec(a, d, Number(f[h])))
        };
        jr = function () {
            b && kr();
            b = [];
            c = S(window, "unload", function () {
                kr()
            })
        };
        kr = function () {
            c && (bi(c), c = null);
            b && b.length && br(b.join(""));
            b = null
        }
    })();

    function lr(a) {
        mr();
        return ve(a, null)
    }

    function nr(a) {
        mr();
        return vd(a)
    }

    var mr = z;/*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
    function or(a) {
        var b = pr;
        this.g = [];
        this.C = b;
        this.G = a || null;
        this.f = this.a = !1;
        this.c = void 0;
        this.o = this.I = this.l = !1;
        this.h = 0;
        this.b = null;
        this.s = 0
    }

    or.prototype.cancel = function (a) {
        if (this.a) this.c instanceof or && this.c.cancel(); else {
            if (this.b) {
                var b = this.b;
                delete this.b;
                a ? b.cancel(a) : (b.s--, 0 >= b.s && b.cancel())
            }
            this.C ? this.C.call(this.G, this) : this.o = !0;
            this.a || (a = new qr(this), rr(this), sr(this, !1, a))
        }
    };
    or.prototype.B = function (a, b) {
        this.l = !1;
        sr(this, a, b)
    };

    function sr(a, b, c) {
        a.a = !0;
        a.c = c;
        a.f = !b;
        tr(a)
    }

    function rr(a) {
        if (a.a) {
            if (!a.o) throw new ur(a);
            a.o = !1
        }
    }

    function vr(a, b, c, d) {
        a.g.push([b, c, d]);
        a.a && tr(a)
    }

    or.prototype.then = function (a, b, c) {
        var d, e, f = new al(function (h, k) {
            d = h;
            e = k
        });
        vr(this, d, function (h) {
            h instanceof qr ? f.cancel() : e(h)
        });
        return f.then(a, b, c)
    };
    or.prototype.$goog_Thenable = !0;

    function wr(a) {
        return Qc(a.g, function (b) {
            return xc(b[1])
        })
    }

    function tr(a) {
        if (a.h && a.a && wr(a)) {
            var b = a.h, c = xr[b];
            c && (v.clearTimeout(c.ia), delete xr[b]);
            a.h = 0
        }
        a.b && (a.b.s--, delete a.b);
        b = a.c;
        for (var d = c = !1; a.g.length && !a.l;) {
            var e = a.g.shift(), f = e[0], h = e[1];
            e = e[2];
            if (f = a.f ? h : f) try {
                var k = f.call(e || a.G, b);
                x(k) && (a.f = a.f && (k == b || k instanceof Error), a.c = b = k);
                if ($k(b) || typeof v.Promise === p && b instanceof v.Promise) d = !0, a.l = !0
            } catch (l) {
                b = l, a.f = !0, wr(a) || (c = !0)
            }
        }
        a.c = b;
        d && (k = C(a.B, a, !0), d = C(a.B, a, !1), b instanceof or ? (vr(b, k, d), b.I = !0) : b.then(k, d));
        c && (b = new yr(b), xr[b.ia] =
            b, a.h = b.ia)
    }

    function ur() {
        Hc.call(this)
    }

    D(ur, Hc);
    ur.prototype.message = "Deferred has already fired";
    ur.prototype.name = "AlreadyCalledError";

    function qr() {
        Hc.call(this)
    }

    D(qr, Hc);
    qr.prototype.message = "Deferred was canceled";
    qr.prototype.name = "CanceledError";

    function yr(a) {
        this.ia = v.setTimeout(C(this.a, this), 0);
        this.kd = a
    }

    yr.prototype.a = function () {
        delete xr[this.ia];
        throw this.kd;
    };
    var xr = {};

    function zr(a, b) {
        var c = b || {};
        b = c.document || document;
        var d = td(a).toString(), e = document.createElement(ta), f = {dh: e, Fb: void 0}, h = new or(f), k = null,
            l = null != c.timeout ? c.timeout : 5E3;
        0 < l && (k = window.setTimeout(function () {
            Ar(e, !0);
            var m = new Br(1, "Timeout reached for loading script " + d);
            rr(h);
            sr(h, !1, m)
        }, l), f.Fb = k);
        e.onload = e.onreadystatechange = function () {
            e.readyState && "loaded" != e.readyState && e.readyState != Va || (Ar(e, c.Uh || !1, k), rr(h), sr(h, !0, null))
        };
        e.onerror = function () {
            Ar(e, !0, k);
            var m = new Br(0, "Error while loading script " +
                d);
            rr(h);
            sr(h, !1, m)
        };
        f = c.attributes || {};
        id(f, {type: "text/javascript", charset: "UTF-8"});
        cg(e, f);
        De(e, a);
        Cr(b).appendChild(e);
        return h
    }

    function Cr(a) {
        var b = Zf("HEAD", a);
        return b && 0 != b.length ? b[0] : a.documentElement
    }

    function pr() {
        if (this && this.dh) {
            var a = this.dh;
            a && a.tagName == ta && Ar(a, !0, this.Fb)
        }
    }

    function Ar(a, b, c) {
        null != c && v.clearTimeout(c);
        a.onload = z;
        a.onerror = z;
        a.onreadystatechange = z;
        b && window.setTimeout(function () {
            tg(a)
        }, 0)
    }

    function Br(a, b) {
        var c = "Jsloader error (code #" + a + ")";
        b && (c += ": " + b);
        Hc.call(this, c);
        this.code = a
    }

    D(Br, Hc);

    function Dr(a, b) {
        this.b = a;
        this.a = b ? b : "callback";
        this.Fb = 5E3
    }

    var Er = 0;
    Dr.prototype.send = function (a, b, c, d) {
        a = a ? gd(a) : {};
        d = d || "_" + (Er++).toString(36) + Fc().toString(36);
        var e = "_callbacks___" + d;
        b && (v[e] = Fr(d, b), a[this.a] = e);
        b = {timeout: this.Fb, Uh: !0};
        e = td(this.b).toString();
        e = ud.exec(e);
        var f = e[3] || "";
        e = vd(e[1] + wd("?", e[2] || "", a) + wd("#", f, void 0));
        b = zr(e, b);
        vr(b, null, Gr(d, a, c), void 0);
        return {ia: d, Zf: b}
    };
    Dr.prototype.cancel = function (a) {
        a && (a.Zf && a.Zf.cancel(), a.ia && Hr(a.ia, !1))
    };

    function Gr(a, b, c) {
        return function () {
            Hr(a, !1);
            c && c(b)
        }
    }

    function Fr(a, b) {
        return function (c) {
            Hr(a, !0);
            b.apply(void 0, arguments)
        }
    }

    function Hr(a, b) {
        a = "_callbacks___" + a;
        if (v[a]) if (b) try {
            delete v[a]
        } catch (c) {
            v[a] = void 0
        } else v[a] = z
    };

    function Ir(a, b) {
        R.call(this);
        this.b = new Jj(a);
        if (b) for (var c in b) b[c] !== Object.prototype[c] && this.b.a.set(c, b[c])
    }

    D(Ir, R);
    Ir.prototype.f = t(!0);
    Ir.prototype.Ua = function () {
        return this.f()
    };
    Ir.prototype.send = t(null);
    Ir.prototype.cancel = ic();

    function Jr(a, b, c, d) {
        Ir.call(this, a, b);
        this.c = null == d || !!d;
        this.a = new Dr(nr(this.b.toString()), c)
    }

    D(Jr, Ir);
    Jr.prototype.f = q("c");
    Jr.prototype.send = function (a, b) {
        this.a.Fb = -1;
        return this.a.send(a, b)
    };
    Jr.prototype.cancel = function (a) {
        this.a.cancel(a)
    };

    function Kr(a, b) {
        Ir.call(this, a, b);
        this.c = {};
        this.a = this.g = 0;
        window.XMLHttpRequest && hc in new XMLHttpRequest && (this.a = 1);
        !this.a && window.XDomainRequest && "file:" != window.location.protocol && (this.a = 2, this.b.a.set("u", window.location.href))
    }

    D(Kr, Ir);
    ir(17170, Kr.prototype, {Kg: 1, Jg: 2});
    Kr.prototype.f = function () {
        return !!this.a
    };
    Kr.prototype.send = function (a, b) {
        var c = er(), d = ++this.g, e = {}, f = {};
        "q" in a && (f.q = a.q, delete a.q);
        a.mode = this.a;
        1 == this.a ? (e.sb = new Kl, S(e.sb, Va, C(function () {
            e.vc || (e.sb.Pc() ? b(e.sb.Lb()) : (this.Jg(), b(null, e.sb.Lb() || null)), Lr(this, d))
        }, this)), S(e.sb, "timeout", C(function () {
            e.vc || (this.Kg(), Lr(this, d))
        }, this)), e.sb.send(this.b.toString() + "&" + ar(a), sa, ar(f), {"Content-Type": "application/x-www-form-urlencoded"})) : (e.Xa = new XDomainRequest, e.Xa.timeout = 2E4, e.Xa.onload = C(function () {
            e.vc || (b(e.Xa.responseText),
                Lr(this, d))
        }, this), e.Xa.onerror = C(function () {
            e.vc || (this.Jg(), b(null), Lr(this, d))
        }, this), e.Xa.ontimeout = C(function () {
            e.vc || (this.Kg(), b(null), Lr(this, d))
        }, this), e.Xa.open(sa, this.b.toString() + "&" + ar(a)), e.Xa.send(ar(f)));
        this.c[d] = e;
        fr(c);
        return d
    };
    Kr.prototype.cancel = function (a) {
        var b = this.c[a];
        b && (b.vc = !0, b.Xa && b.Xa.abort(), Lr(this, a))
    };

    function Lr(a, b) {
        var c = a.c[b];
        c && (c.sb ? (c.sb.M(), c.sb = null) : c.Xa && (c.Xa = null), delete a.c[b])
    }

    Kr.prototype.F = function () {
        Kr.m.F.call(this);
        for (var a in this.c) this.cancel(a)
    };
    var hl = {
        0: "NO_ERROR",
        1: "UNKNOWN_ERROR",
        2: "JWT_TOKEN_CANNOT_PARSE",
        3: "JWT_TOKEN_MISS_PARAM",
        4: "JWT_TOKEN_INVALID_ISS",
        5: "JWT_TOKEN_INVALID",
        6: pa,
        7: "OUT_OF_QUOTA",
        8: pa
    };

    function Mr() {
    }

    Mr.prototype.b = ic();

    function Nr(a) {
        a = a.split(".");
        if (3 !== a.length) return !1;
        a = JSON.parse(L.Vh(a[1]));
        return null == a || !a.exp || 1E3 * a.exp < Fc() ? !1 : !0
    }

    function Or(a) {
        this.a = a
    }

    qc(Or, Mr);
    Or.prototype.b = function () {
        return Nr(this.a) ? fl(this.a) : gl()
    };

    function Pr(a) {
        this.a = null;
        this.c = a
    }

    qc(Pr, Mr);
    Pr.prototype.b = function () {
        if (null != this.a && Nr(this.a)) return fl(this.a);
        this.a = null;
        return new al(function (a, b) {
            var c = this;
            this.c(function (d) {
                c.a = d;
                Nr(c.a) ? a(d) : b(hl[5])
            }, b)
        }, this)
    };

    function Qr(a, b, c, d, e) {
        R.call(this);
        var f;
        b ? f = {client: b} : f = {anno: 3, client: Gq, format: "html", v: "1.0"};
        c && (f.sp = c);
        f.key = a;
        zq && (f.logld = "v" + zq);
        this.s = d || null;
        this.Vb = e || null;
        this.a = null;
        this.l = !0;
        this.b = {ed: C(this.I, this), Ng: 300};
        this.f = new Jr(Jq + Mq, {client: Gq}, "cb");
        this.h = f;
        a = [{
            sa: new Kr(Jq + Iq + da, f),
            ed: C(this.C, this),
            ff: 30720,
            Og: 4294967295,
            Mg: -1,
            eh: 0,
            we: !1
        }, {
            sa: new Jr(Jq + Iq + da, f, "cb", F && 7 >= of),
            ed: C(this.G, this),
            ff: 1900,
            Og: 4294967295,
            Mg: -1,
            eh: 3,
            we: !0
        }];
        this.o = new Rr(a);
        this.c = !1;
        for (b = 0; b < a.length; ++b) this.c =
            this.c || a[b].sa.f();
        this.c || this.Wi()
    }

    D(Qr, R);
    ir(7361, Qr.prototype, {
        Vi: function () {
            br("te_afbr")
        }, Wi: function () {
            br("te_au")
        }
    });

    function Sr(a, b) {
        if (!a.l) return b;
        if (A(b) != Ha) a = [[b, 200]]; else if (2 == b.length && A(b[0]) != Ha && A(b[1]) != Ha) a = [[b[0], 200, b[1]], [b[1], 200, b[1]]]; else {
            a = [];
            for (var c = 0; c < b.length; ++c) A(b[c]) != Ha ? a[c] = [b[c], 200] : a[c] = [b[c][0], 200, b[c][1]]
        }
        return a
    }

    Qr.prototype.C = function (a) {
        var b = this;
        return function (c) {
            if (c) try {
                var d = c.indexOf("\x00");
                0 <= d && (c = c.substr(0, d));
                var e = JSON.parse(c)
            } catch (f) {
                e = null, b.Vi()
            }
            e ? a(Sr(b, e), 200) : a([], 500)
        }
    };
    Qr.prototype.G = function (a) {
        var b = this;
        return function (c) {
            c ? a(Sr(b, c), 200) : a([], 500)
        }
    };
    Qr.prototype.I = function (a) {
        return function (b) {
            if (b) try {
                var c = JSON.parse(b)
            } catch (d) {
                c = null
            }
            a(c && c[1] || void 0)
        }
    };

    function Rr(a) {
        this.b = a
    }

    Rr.prototype.start = function (a) {
        this.a = a;
        this.c = 0;
        Tr(this)
    };

    function Tr(a) {
        if (a.c >= a.b.length) a.a(null); else {
            var b = a.b[a.c++];
            b.sj ? Yq(new Xq(C(b.sa.Ua, b.sa), C(function (c) {
                c ? this.a(b) : Tr(this)
            }, a), b.sj)) : b.sa.Ua() ? a.a(b) : Tr(a)
        }
    }

    Qr.prototype.g = function (a) {
        this.B || (this.B = !0, this.o.start(C(function (b) {
            b && (this.a = b, this.b.sa = b.sa);
            a()
        }, this)))
    };
    Qr.prototype.Ua = function () {
        return null !== this.a && null !== this.a.sa && this.a.sa.Ua()
    };
    Qr.prototype.translate = function (a, b, c, d, e, f, h, k) {
        var l = this, m = this.a.ed(a), n = {q: b, sl: c, tl: d};
        this.h.sp && 0 == this.h.sp.indexOf("nmt") || (n.sp = "nmt");
        n.tc = e;
        f && (n.ctt = 1);
        h && (n.dom = 1);
        k && (n.sr = 1);
        n[Dp()] = Bp(b.join(""), Hq);
        return this.s ? this.s.b().then(function (r) {
            null != r && (n.jwtt = r, n.rurl = location.hostname);
            return l.a.sa.send(n, C(Ur(m), l))
        }, function (r) {
            r && l.Vb && l.Vb(r)
        }) : this.a.sa.send(n, m)
    };

    function Ur(a) {
        return function (b, c) {
            if (c && this.Vb) {
                try {
                    var d = JSON.parse(c).error_code
                } catch (e) {
                    d = null
                }
                c = hl[1];
                this.Vb(null != d ? hl[d] || c : c)
            }
            a(b)
        }
    }

    function Vr(a, b) {
        b instanceof al ? b.then(function (c) {
            a.a.sa.cancel(c)
        }) : a.a.sa.cancel(b)
    }

    Qr.prototype.F = function () {
        Qr.m.F.call(this);
        this.a && (this.a.sa.M(), this.a.sa = null);
        this.b.sa = null;
        this.f.M();
        this.f = null
    };
    var Wr = Sq(["A", "ABBR", "ACRONYM", "B", "BASEFONT", "BDO", "BIG", "CITE", "DFN", "EM", "FONT", "I", oa, "NOBR", "LABEL", "Q", "S", "SMALL", ua, "STRIKE", "STRONG", "SUB", "SUP", va, "TT", "U", "VAR"]),
        Xr = Sq(["APPLET", "AREA", "BASE", "FRAME", "FRAMESET", "HR", "LINK", "META", "NOFRAMES", "NOSCRIPT", oa, va, wa]),
        Yr = Sq(["BR", "CODE", "IMG", "KBD", "MAP", "OBJECT", "PARAM", ta, "STYLE", "WBR", "svg"]),
        Zr = Sq(["submit", Na]);

    function $r(a, b) {
        this.a = new hn(a, !1, b, 3 == a.nodeType ? 0 : 1, 1);
        this.c = F ? [] : null;
        for (this.b = []; a = a.parentNode;) as(this, a, !0);
        this.b.push(!1);
        this.b.reverse();
        for (a = 1; a < this.b.length; ++a) null == this.b[a] && (this.b[a] = this.b[a - 1]);
        this.f = !1
    }

    ir(52754, $r.prototype, {bj: 1});

    function as(a, b, c) {
        var d = (b.style && b.style.whiteSpace || "").substring(0, 3);
        "pre" == d || !d && "PRE" == b.tagName ? a.b.push(!0) : d && "pre" != d ? a.b.push(!1) : c ? a.b.push(null) : a.b.push(a.b[a.b.length - 1])
    }

    $r.prototype.node = function () {
        return this.a.node
    };
    $r.prototype.depth = function () {
        return this.a.depth
    };
    $r.prototype.next = function () {
        try {
            this.c && 0 < this.c.length && -1 == this.a.c && this.c.length--, -1 == this.a.c && this.b.length--, this.c && 0 < this.c.length && 1 != this.a.c && !this.a.node.nextSibling ? jn(this.a, this.c[this.c.length - 1], -1, this.a.depth - 1) : (this.a.next(), this.c && 1 == this.a.c && this.c.push(this.a.node)), 1 == this.a.c && this.a.o && as(this, this.a.node)
        } catch (a) {
            a != wj && this.bj(a), this.f = !0
        }
    };

    function bs() {
        return "[msg_undefined]"
    }

    var Z = {};
    (function () {
        function a(b) {
            return function () {
                return b
            }
        }

        Z = {
            Rf: a(0),
            Kf: a(1),
            Lf: a(2),
            rk: a(3),
            Hh: a(4),
            Of: a(5),
            yh: a(45),
            zh: a(6),
            Ch: a(7),
            Wc: a(8),
            Ih: a(9),
            Ek: a(10),
            Mh: a(11),
            Dh: a(12),
            zk: a(13),
            Fh: a(14),
            yk: a(15),
            Eh: a(16),
            Gk: a(17),
            Jh: a(18),
            Tj: a(19),
            qk: a(20),
            vh: a(21),
            Gh: a(22),
            wk: a(23),
            vk: a(24),
            tk: a(25),
            Fk: a(26),
            Dk: a(27),
            uk: a(28),
            Ah: a(29),
            Kh: a(30),
            Sj: a(32),
            Rj: a(33),
            Lh: a(34),
            dk: a(35),
            Yj: a(36),
            ck: a(37),
            Qf: a(38),
            ik: a(39),
            If: a(40),
            Bh: a(41),
            Pf: a(46)
        }
    })();

    function cs(a) {
        return qk('<span id="' + X(a.id) + '"></span>')
    }

    function ds(a) {
        var b = a.id, c = a.Xg;
        return qk(pk(a.Yg) + '<div id="' + X(b) + '"></div>' + pk(c))
    }

    function es() {
        var a = F && !K("7.0");
        return qk('<span style="white-space:nowrap"><a class="goog-logo-link" href="' + X(xk(vb)) + '" target="_blank">' + (a ? "<span style=\"display:inline-block;vertical-align:middle;height:15px; width:51px;filter:progid:DXImageTransform.Microsoft.AlphaImageLoader( src='" + "https://www.gstatic.com/images/branding/googlelogo/1x/googlelogo_color_42x16dp.png".replace(Lk, Jk) + "',sizingMethod='scale');\"></span>" : '<img src="' + X(Ck("https://www.gstatic.com/images/branding/googlelogo/1x/googlelogo_color_42x16dp.png")) +
            '" width="37px" height="14px" style="padding-right: 3px" alt="Google ' + X(Z.Wc) + '">') + pk(Z.Wc) + "</a></span>")
    }

    function fs(a) {
        var b = a.ej;
        return qk('<div id="goog-gt-tt" class="skiptranslate" dir="' + X(a.dir) + '"><div style="padding: 8px;"><div><div class="logo"><img src="' + X(Ck(b)) + '" width="20" height="20" alt="Google ' + X(Z.Wc) + '"/></div></div></div><div class="top" style="padding: 8px; float: left; width: 100%;"><h1 class="title gray">' + pk(Z.Bh) + '</h1></div><div class="middle" style="padding: 8px;"><div class="original-text"></div></div><div class="bottom" style="padding: 8px;"><div class="activity-links"></div><div class="started-activity-container"><hr style="color: #CCC; background-color: #CCC; height: 1px; border: none;"/><div class="activity-root"></div></div></div><div class="status-message"></div></div>')
    }

    function gs(a) {
        var b = a.method, c = a.ci, d = a.dir;
        a = '<div class="translate-form"><div class="form-message"></div><form class="activity-form" action="' + X(xk(a.Ph)) + '" method="' + X(b) + '"><div class="form-buttons" style="text-align:';
        d = xc(d) && xc(Tb) ? d.ub !== "rtl".ub ? !1 : d.toString() === "rtl".toString() : d == Tb;
        d = a + (d ? "right" : "left") + '"><input class="activity-submit" type="button" value="' + X(Z.Gh) + '"><input class="activity-cancel" type="button" value="' + X(Z.Kf) + '"></div><div class="parameters"><input type="hidden" name="gtrans"/><input type="hidden" name="utrans"/><input type="hidden" name="hl"/><input type="hidden" name="text"/><input type="hidden" name="langpair"/><input type="hidden" name="oe" value="UTF-8"/>';
        a = c.length;
        for (b = 0; b < a; b++) d += '<input type="hidden" name="' + X(c[b]) + '"/>';
        return qk(d + "</div></form></div>")
    }

    function hs() {
        return qk('<div><textarea class="contribute-original-text"></textarea><div class="activity-form-container"></div></div>')
    }

    function is(a) {
        return qk('<div><span class="alt-translated-text"></span><div class="alt-helper-text">' + pk(a.Oi) + '</div><div class="activity-form-container"></div></div>')
    }

    function js() {
        return qk('<div class="goog-te-spinner-pos"><div class="goog-te-spinner-animation"><svg xmlns="http://www.w3.org/2000/svg" class="goog-te-spinner" width="96px" height="96px" viewBox="0 0 66 66"><circle class="goog-te-spinner-path" fill="none" stroke-width="6" stroke-linecap="round" cx="33" cy="33" r="30"/></svg></div></div>')
    };

    function ks(a) {
        T.call(this);
        a = a || {};
        this.id = a.id || ri(this);
        this.cf = a.cf || "";
        this.Rd = a.Rd || null;
        this.Sd = a.Sd || null;
        this.cd = a.cd || !1;
        this.className = a.className || null;
        this.c = null
    }

    D(ks, T);
    ks.prototype.jc = jc("c");
    ks.prototype.Ub = function () {
        if (!this.U) throw Error("Activity must be rendered before it can be resumed.");
        if (!this.c) throw Error("Activity must have a tooltip instance to be resumed");
    };
    ks.prototype.Cb = ic();
    ks.prototype.M = function () {
        this.vb || (ks.m.M.call(this), delete this.Sd)
    };

    function ls() {
        mi.call(this);
        this.c = "closure_frame" + ms++;
        this.b = [];
        ns[this.c] = this
    }

    var os;
    D(ls, mi);
    var ns = {}, ms = 0;

    function ps(a, b) {
        var c = Wf(a);
        Gj(b, function (d, e) {
            B(d) || (d = [d]);
            Nc(d, function (f) {
                f = c.D(oa, {type: rb, name: e, value: f});
                a.appendChild(f)
            })
        })
    }

    u = ls.prototype;
    u.wa = null;
    u.Y = null;
    u.ja = null;
    u.Pb = null;
    u.ij = 0;
    u.ma = !1;
    u.wc = !1;
    u.$d = !1;
    u.rb = null;
    u.af = null;
    u.Ha = 0;
    u.Ob = null;
    u.send = function (a, b, c, d) {
        if (this.ma) throw Error(ya);
        this.rb = a = new Jj(a);
        b = b ? b.toUpperCase() : "GET";
        c && (c = Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ Fc()).toString(36), a.a.set("zx", c));
        os || (os = jg("FORM"), os.acceptCharset = "utf-8", c = os.style, c.position = Ca, c.visibility = rb, c.top = c.left = "-10px", c.width = c.height = "10px", c.overflow = rb, document.body.appendChild(os));
        this.Y = os;
        "GET" == b && ps(this.Y, a.a);
        d && ps(this.Y, d);
        d = this.Y;
        a = a.toString();
        mr();
        a = Nd(a);
        Be(d,
            a);
        this.Y.method = b;
        qs(this);
        rs(this)
    };

    function ss(a, b) {
        if (a.ma) throw Error(ya);
        var c = new Jj(b.action);
        a.rb = c;
        a.Y = b;
        Be(a.Y, c.toString());
        qs(a)
    }

    u.abort = function (a) {
        this.ma && (ci(ts(this)), this.$d = this.ma = this.wc = !1, this.Ha = a || 7, this.dispatchEvent("abort"), us(this))
    };
    u.F = function () {
        this.ma && this.abort();
        ls.m.F.call(this);
        this.ja && vs(this);
        rs(this);
        delete this.f;
        this.rb = this.af = this.Y = null;
        this.Ha = 0;
        delete ns[this.c]
    };
    u.Nd = q("wc");
    u.Pc = q("$d");
    u.dc = q("ma");
    u.Lb = q("af");
    u.Ee = q("rb");
    u.De = q("Ha");

    function qs(a) {
        a.ma = !0;
        a.wc = !1;
        a.Ha = 0;
        a.Pb = a.c + "_" + (a.ij++).toString(36);
        a.ja = Wf(a.Y).D(na, {name: a.Pb, id: a.Pb});
        F && 7 > Number(of) && Be(a.ja, Nd(od(new ld(md, 'javascript:""'))));
        var b = a.ja.style;
        b.visibility = rb;
        b.width = b.height = "10px";
        b.display = Hb;
        J ? b.marginTop = b.marginLeft = "-10px" : (b.position = Ca, b.top = b.left = "-10px");
        if (F && !K("11")) {
            a.Y.target = a.Pb || "";
            Wf(a.Y).a.body.appendChild(a.ja);
            S(a.ja, Sb, a.nf, !1, a);
            try {
                a.a = !1, a.Y.submit()
            } catch (w) {
                ai(a.ja, Sb, a.nf, !1, a), ws(a, 1)
            }
        } else {
            Wf(a.Y).a.body.appendChild(a.ja);
            b = a.Pb + "_inner";
            var c = Dg(a.ja);
            if (document.baseURI) {
                var d = Ke(b);
                d = '<head><base href="' + Ke(document.baseURI) + '"></head><body><iframe id="' + d + '" name="' + d + '"></iframe>';
                d = ve(d, null)
            } else d = Ke(b), d = ve('<body><iframe id="' + d + '" name="' + d + '"></iframe>', null);
            Xe && !J ? Ae(c.documentElement, d) : c.write(ne(d));
            S(c.getElementById(b), Ab, a.Ud, !1, a);
            var e = Zf(va, a.Y);
            d = 0;
            for (var f = e.length; d < f; d++) {
                var h = e[d].value;
                Ng(e[d]) != h && (Fg(e[d], h), e[d].value = h)
            }
            e = c.importNode(a.Y, !0);
            e.target = b;
            e.action = a.Y.action;
            c.body.appendChild(e);
            h = Zf("SELECT", a.Y);
            var k = Zf("SELECT", e);
            d = 0;
            for (f = h.length; d < f; d++) for (var l = Zf(qa, h[d]), m = Zf(qa, k[d]), n = 0, r = l.length; n < r; n++) m[n].selected = l[n].selected;
            h = Zf(oa, a.Y);
            k = Zf(oa, e);
            d = 0;
            for (f = h.length; d < f; d++) if ("file" == h[d].type && h[d].value != k[d].value) {
                a.Y.target = b;
                e = a.Y;
                break
            }
            try {
                a.a = !1, e.submit(), c.close(), I && tl(a.ph, 250, a)
            } catch (w) {
                ai(c.getElementById(b), Ab, a.Ud, !1, a), c.close(), ws(a, 2)
            }
        }
    }

    u.nf = function () {
        if (this.ja.readyState == Va) {
            ai(this.ja, Sb, this.nf, !1, this);
            try {
                var a = Dg(this.ja);
                if (F && a.location == za && !navigator.onLine) {
                    ws(this, 9);
                    return
                }
            } catch (b) {
                ws(this, 1);
                return
            }
            xs(this, a)
        }
    };
    u.Ud = function () {
        if (!Xe || J || (this.ja ? Dg(ts(this)) : null).location != za) {
            ai(ts(this), Ab, this.Ud, !1, this);
            try {
                xs(this, this.ja ? Dg(ts(this)) : null)
            } catch (a) {
                ws(this, 1)
            }
        }
    };

    function xs(a, b) {
        a.wc = !0;
        a.ma = !1;
        try {
            var c = b.body;
            a.af = c.textContent || c.innerText
        } catch (e) {
            var d = 1
        }
        d || typeof a.f != p || (b = a.f(b)) && (d = 4);
        d ? ws(a, d) : (a.$d = !0, a.Ha = 0, a.dispatchEvent(Va), a.dispatchEvent("success"), us(a))
    }

    function ws(a, b) {
        a.a || (a.$d = !1, a.ma = !1, a.wc = !0, a.Ha = b, a.dispatchEvent(Va), a.dispatchEvent("error"), us(a), a.a = !0)
    }

    function us(a) {
        vs(a);
        rs(a);
        a.Y = null;
        a.dispatchEvent(Rb)
    }

    function vs(a) {
        var b = a.ja;
        b && (b.onreadystatechange = null, b.onload = null, b.onerror = null, a.b.push(b));
        a.Ob && (ul(a.Ob), a.Ob = null);
        I || Xe && !J ? a.Ob = tl(a.ag, 2E3, a) : a.ag();
        a.ja = null;
        a.Pb = null
    }

    u.ag = function () {
        this.Ob && (ul(this.Ob), this.Ob = null);
        for (; 0 != this.b.length;) {
            var a = this.b.pop();
            tg(a)
        }
    };

    function rs(a) {
        a.Y && a.Y == os && qg(a.Y)
    }

    function ts(a) {
        return a.ja ? F && !K("11") ? a.ja : Dg(a.ja).getElementById(a.Pb + "_inner") : null
    }

    u.ph = function () {
        if (this.ma) {
            var a = this.ja ? Dg(ts(this)) : null;
            a && !Ue(a, "documentUri") ? (ai(ts(this), Ab, this.Ud, !1, this), navigator.onLine ? ws(this, 3) : ws(this, 9)) : tl(this.ph, 250, this)
        }
    };

    function ys(a, b) {
        T.call(this);
        this.l = a || "";
        this.c = null;
        this.h = [];
        this.a = null;
        this.o = b || "GET";
        this.f = this.g = null
    }

    D(ys, T);
    u = ys.prototype;
    u.D = function () {
        var a = {Ph: this.l, method: this.o, ci: this.h, dir: qd.test(Aq) ? Tb : "ltr"};
        this.S(kk(gs, a))
    };
    u.S = function (a) {
        this.A = a;
        this.a = ti(this, "activity-form");
        a = ti(this, "activity-submit");
        this.f = new rj("");
        xi(this.f, a);
        a = ti(this, "activity-cancel");
        this.c = new rj("");
        xi(this.c, a)
    };
    u.O = function () {
        var a = U(this);
        a.w(this.f, Da, C(this.Dj, this));
        a.w(this.c, Da, C(this.dispatchEvent, this, Oa))
    };
    u.Dj = function () {
        var a = !0;
        this.g && (a = this.g());
        a && (a = new ls, S(a, "success", function () {
            this.dispatchEvent("successful")
        }), S(a, "error", function () {
            this.dispatchEvent("failed")
        }), ss(a, this.a));
        this.dispatchEvent(Yb)
    };

    function zs(a, b) {
        for (var c in b) a.a[c] && (a.a[c].value = b[c])
    }

    function As(a, b) {
        return a.a[b] ? a.a[b].value : ""
    }

    u.F = function () {
        this.f = this.a = this.c = null;
        ys.m.F.call(this)
    };

    function Bs(a, b) {
        a.g = b
    };

    function Cs(a, b) {
        ks.call(this, a);
        this.f = null;
        this.o = b || {};
        this.h = new cn;
        this.l = this.a = null;
        this.g = new Qr((a || {}).$a || "", iq);
        this.g.l = !1
    }

    D(Cs, ks);
    var iq = Gq.replace("_", "-") + "-alt";
    u = Cs.prototype;
    u.jc = function (a) {
        Cs.m.jc.call(this, a);
        this.g.g(C(this.Ub, this))
    };
    u.Ub = function () {
        Cs.m.Ub.call(this);
        var a = this.c.K, b = this.c.o;
        if (a && b) {
            Fg(this.l, a);
            var c = this.h;
            c.A = b;
            rg(c.a, c.A);
            dn(c);
            Q(this.h.a, !0);
            b = this.c.cb();
            c = this.c.na();
            if (this.g.Ua() && b && c) {
                var d = this.c.Mc(), e = C(this.mj, this);
                this.g && this.g.translate(e, {qj: [d], Ok: !0, Tk: !1}.qj, b, c, 0, !1);
                zs(this.a, {gtrans: a, text: this.c.Mc(), hl: Aq, langpair: b + "|" + c});
                zs(this.a, this.o);
                zs(this.a, {client: iq})
            }
            this.dispatchEvent(Rb)
        }
    };
    u.D = function () {
        this.S(kk(is, {Oi: Z.If}))
    };
    u.S = function (a) {
        this.A = a;
        this.l = ti(this, "alt-translated-text");
        var b = ti(this, Fa);
        this.a = new ys(Qq, sa);
        this.a.h = bd(this.o);
        Bs(this.a, C(function () {
            zs(this.a, {utrans: sq(this.f)});
            return As(this.a, "utrans") != As(this.a, "gtrans")
        }, this));
        this.a.fa(b);
        lp = Z.Lh;
        ap = Z.If;
        this.f = new eq(void 0, !0, a);
        fq(this.f, this.h);
        gq(this.f);
        hq(this.f);
        xi(this.f, this.l)
    };
    u.O = function () {
        Cs.m.O.call(this);
        var a = U(this);
        a.w(this.a, Oa, C(function () {
            vq(this.f);
            this.dispatchEvent(Oa)
        }, this));
        a.w(this.a, Yb, C(function () {
            var b = sq(this.f);
            this.c.K = b && xd(b);
            this.dispatchEvent(Yb);
            b = this.c.ya();
            Fg(b.j(), Z.Qf)
        }, this))
    };
    u.mj = function (a) {
        a && jq(this.f, a)
    };
    u.Cb = function () {
        Q(this.h.a, !1)
    };
    u.F = function () {
        this.f && this.f.M();
        this.l = this.h = this.f = null;
        this.g && this.g.M();
        this.g = null;
        this.a && this.a.M();
        this.a = null;
        Cs.m.F.call(this)
    };

    function Ds(a, b) {
        ks.call(this, a);
        this.h = !1;
        this.g = b || {};
        this.f = null
    }

    D(Ds, ks);
    u = Ds.prototype;
    u.jc = function (a) {
        Ds.m.jc.call(this, a);
        U(this).w(this.f.j(), yb, C(this.c.Sc, this.c, !1));
        this.h = this.c.sc;
        this.Ub()
    };
    u.Ub = function () {
        Ds.m.Ub.call(this);
        this.f.Nb(this.c.K);
        var a = this.c.cb(), b = this.c.na();
        a && b && (zs(this.a, {
            gtrans: this.c.K,
            text: this.c.Mc(),
            hl: Aq,
            langpair: a + "|" + b
        }), zs(this.a, this.g));
        this.dispatchEvent(Rb);
        this.f.j().focus()
    };
    u.Cb = function () {
        this.c.Sc(this.h)
    };
    u.D = function () {
        this.S(kk(hs))
    };
    u.S = function (a) {
        this.A = a;
        a = ti(this, "contribute-original-text");
        this.f = new np("");
        xi(this.f, a);
        tp(this.f);
        rp(this.f);
        a = ti(this, Fa);
        this.a = new ys(Qq, sa);
        this.a.h = bd(this.g);
        Bs(this.a, C(function () {
            zs(this.a, {utrans: xd(this.f.Ba())});
            return As(this.a, "utrans") != As(this.a, "gtrans")
        }, this));
        this.a.fa(a)
    };
    u.O = function () {
        Ds.m.O.call(this);
        var a = U(this);
        a.w(this.a, Oa, C(function () {
            this.dispatchEvent(Oa)
        }, this));
        a.w(this.a, Yb, C(function () {
            var b = this.f.Ba();
            this.c.K = b && xd(b);
            this.dispatchEvent(Yb);
            b = this.c.ya();
            Fg(b.j(), Z.Qf)
        }, this))
    };
    u.F = function () {
        this.f && this.f.M();
        this.f = null;
        this.a && this.a.M();
        this.a = null;
        Ds.m.F.call(this)
    };

    function Es(a) {
        mi.call(this);
        this.h = a;
        this.g = {};
        this.c = new gi(this);
        this.f = null
    }

    D(Es, mi);
    Es.prototype.nh = ic();
    Es.prototype.oh = ic();
    Es.prototype.F = function () {
        this.c.M();
        this.c = null
    };

    function Fs(a, b, c) {
        if (b = a.h.c[b]) {
            c = c || "undefined" == typeof c;
            for (var d = 0; d < b.Ca.length; ++d) b.Ca[d] && a.Fg(b.Ca[d], c)
        }
    }

    Es.prototype.Fg = function (a, b) {
        P(a, "backgroundColor", b ? "#E6ECF9" : "");
        P(a, "color", b ? "#000" : "")
    };
    var ed = {}, Gs = null;

    function Hs(a) {
        a = zc(a);
        delete ed[a];
        dd() && Gs && Gs.stop()
    }

    function Is() {
        Gs || (Gs = new vl(function () {
            Js()
        }, 20));
        var a = Gs;
        a.dc() || a.start()
    }

    function Js() {
        var a = Fc();
        $c(ed, function (b) {
            Ks(b, a)
        });
        dd() || Is()
    };

    function Ls(a, b, c, d) {
        Nm.call(this);
        if (!B(a) || !B(b)) throw Error("Start and end parameters must be arrays");
        if (a.length != b.length) throw Error("Start and end points must be the same length");
        this.g = a;
        this.B = b;
        this.duration = c;
        this.o = d;
        this.coords = [];
        this.progress = 0
    }

    D(Ls, Nm);
    u = Ls.prototype;
    u.play = function (a) {
        if (a || 0 == this.a) this.progress = 0, this.coords = this.g; else if (1 == this.a) return !1;
        Hs(this);
        this.b = a = Fc();
        -1 == this.a && (this.b -= this.duration * this.progress);
        this.endTime = this.b + this.duration;
        this.progress || this.c();
        this.Qa("play");
        -1 == this.a && this.Qa("resume");
        this.a = 1;
        var b = zc(this);
        b in ed || (ed[b] = this);
        Is();
        Ks(this, a);
        return !0
    };
    u.stop = function (a) {
        Hs(this);
        this.a = 0;
        a && (this.progress = 1);
        Ms(this, this.progress);
        this.Cb();
        this.f()
    };
    u.yf = function (a) {
        this.progress = a;
        1 == this.a && (this.b = Fc() - this.duration * this.progress, this.endTime = this.b + this.duration)
    };
    u.F = function () {
        0 == this.a || this.stop(!1);
        this.Qa("destroy");
        Ls.m.F.call(this)
    };

    function Ks(a, b) {
        b < a.b && (a.endTime = b + a.endTime - a.b, a.b = b);
        a.progress = (b - a.b) / (a.endTime - a.b);
        1 < a.progress && (a.progress = 1);
        Ms(a, a.progress);
        1 == a.progress ? (a.a = 0, Hs(a), a.Qa(ab), a.f()) : 1 == a.a && a.kf()
    }

    function Ms(a, b) {
        xc(a.o) && (b = a.o(b));
        a.coords = Array(a.g.length);
        for (var c = 0; c < a.g.length; c++) a.coords[c] = (a.B[c] - a.g[c]) * b + a.g[c]
    }

    u.kf = function () {
        this.Qa("animate")
    };
    u.Qa = function (a) {
        this.dispatchEvent(new Ns(a, this))
    };

    function Ns(a, b) {
        Ch.call(this, a);
        this.coords = b.coords;
        this.x = b.coords[0];
        this.y = b.coords[1];
        this.duration = b.duration;
        this.progress = b.progress
    }

    D(Ns, Ch);

    function Os(a, b, c, d, e) {
        Ls.call(this, b, c, d, e);
        this.h = a
    }

    D(Os, Ls);
    Os.prototype.s = z;
    Os.prototype.kf = function () {
        this.s();
        Os.m.kf.call(this)
    };
    Os.prototype.f = function () {
        this.s();
        Os.m.f.call(this)
    };
    Os.prototype.c = function () {
        this.s();
        Os.m.c.call(this)
    };

    function Ps(a, b, c, d, e) {
        sc(b) && (b = [b]);
        sc(c) && (c = [c]);
        Os.call(this, a, b, c, d, e);
        if (1 != b.length || 1 != c.length) throw Error("Start and end points must be 1D");
        this.l = -1
    }

    D(Ps, Os);
    var Qs = 1 / 1024;
    Ps.prototype.s = function () {
        var a = this.coords[0];
        if (Math.abs(a - this.l) >= Qs) {
            var b = this.h.style;
            "opacity" in b ? b.opacity = a : "MozOpacity" in b ? b.MozOpacity = a : "filter" in b && (b.filter = "" === a ? "" : "alpha(opacity=" + 100 * Number(a) + ")");
            this.l = a
        }
    };
    Ps.prototype.c = function () {
        this.l = -1;
        Ps.m.c.call(this)
    };
    Ps.prototype.f = function () {
        this.l = -1;
        Ps.m.f.call(this)
    };

    function Rs(a, b, c) {
        Ps.call(this, a, 1, 0, b, c)
    }

    D(Rs, Ps);
    Rs.prototype.c = function () {
        this.h.style.display = "";
        Rs.m.c.call(this)
    };
    Rs.prototype.f = function () {
        this.h.style.display = Hb;
        Rs.m.f.call(this)
    };

    function Ss(a, b, c) {
        Ps.call(this, a, 0, 1, b, c)
    }

    D(Ss, Ps);
    Ss.prototype.c = function () {
        this.h.style.display = "";
        Ss.m.c.call(this)
    };

    function Ts() {
        T.call(this);
        this.a = null
    }

    D(Ts, T);
    u = Ts.prototype;
    u.D = function () {
        this.S(this.b.D(g, {"class": Wb}))
    };
    u.S = function (a) {
        this.A = a;
        a.style.display = Hb
    };

    function Us(a) {
        var b = c;
        var c = C(function () {
            Fg(this.j(), "");
            b && b()
        }, a);
        c = C(a.Pi, a, 750, c);
        Vs(a, c)
    }

    function Ws(a) {
        a.a && (a.a.stop(!0), a.a = null);
        Fg(a.j(), "");
        a.J(!1)
    }

    function Vs(a, b) {
        a.a = new Ss(a.j(), 750);
        U(a).Bb(a.a, "begin", C(function () {
            this.j().style.display = "block"
        }, a));
        U(a).Bb(a.a, ab, C(function () {
            this.a = null;
            window.setTimeout(b, 2E3)
        }, a));
        a.a.play()
    }

    u.Pi = function (a, b) {
        this.isVisible() && (this.a = new Rs(this.j(), a), U(this).Bb(this.a, ab, C(function () {
            b && b()
        }, this)), this.a.play())
    };
    u.J = function (a) {
        this.j().style.display = a ? "block" : Hb;
        this.j().style.opacity = a ? "1" : "0"
    };
    u.isVisible = function () {
        return this.j().style.display !== Hb && "0" !== this.j().style.opacity
    };

    function Xs() {
        No.call(this);
        this.P = {};
        this.jb = {};
        this.I = null;
        this.Xc = !1;
        this.tb = this.f = this.H = null;
        this.W = {};
        this.l = new gi(this);
        this.o = this.c = this.g = this.Ya = this.a = this.K = this.ra = null;
        this.C = !0;
        this.Za = []
    }

    D(Xs, No);
    u = Xs.prototype;
    u.fa = function () {
        this.C = !1;
        var a = qd.test(Aq) ? Tb : "ltr";
        this.$b(kk(fs, {
            ej: "https://www.gstatic.com/images/branding/product/1x/translate_24dp.png",
            Lk: wb,
            Rk: Lq,
            dir: a
        }));
        this.className += " skiptranslate";
        this.j() && this.I && this.Ya && this.g.j() && this.H && this.o && (this.l.w(window, "resize", C(this.ob, this)), this.l.w(this, sb, C(this.oj, this)), this.Za.length && (this.ie.apply(this, this.Za), this.Za = []))
    };
    u.ie = function (a) {
        for (var b = [], c = 0; c < arguments.length; ++c) {
            var d = arguments[c];
            if (d) if (this.I || d.Sd) {
                var e = d;
                var f = jg(ua, {"class": e.className || "activity-link"});
                Fg(f, e.cf || "");
                e = f;
                b.push(e);
                pg(d.Sd || this.I, e);
                d.jc && d.Cb && (f = C(this.ii, this, d), this.l.w(e, Ta, f), d.Rd && this.l.w(this.H, d.Rd, f));
                d.id = d.id || ri(d);
                this.P[d.id] && this.Zg(d);
                this.P[d.id] = d;
                this.jb[d.id] = e
            } else this.Za.push(d)
        }
        return b
    };
    u.Zg = function (a) {
        for (var b = 0; b < arguments.length; ++b) {
            var c = y(arguments[b]) || arguments[b] instanceof String ? arguments[b] : arguments[b].id, d = this.P[c],
                e = this.jb[c];
            d && e && (this.f && this.f.id === c && this.re(), this.l.ca(d, [Yb, Oa]), d.M(), this.W[c] && delete this.W[c], delete this.P[c], delete this.jb[c], tg(e))
        }
    };
    u.ii = function (a) {
        if (this.H) {
            a != this.f && this.f && (Ws(this.g), this.f.Cb.call(this.f), this.f.j() && (this.f.j().style.display = Hb), Ys(this, !1), this.f = null);
            Ys(this, !0);
            Ws(this.g);
            this.f = a;
            if (this.W[a.id]) {
                var b = this.W[a.id];
                var c = a.Ub
            } else a.fa(), b = a.j(), c = a.jc, this.l.w(a, [Yb, Oa], C(this.re, this)), a.cd && (this.W[a.id] = b);
            pg(this.H, b);
            c.call(a, this);
            a = new Ss(b, 100);
            this.l.Bb(a, ab, C(this.ob, this, !0, !0));
            a.play()
        }
    };
    u.re = function () {
        if (this.f) if (Ws(this.g), this.f.Cb.call(this.f), this.f.j()) {
            var a = new Rs(this.f.j(), 100);
            this.l.Bb(a, ab, C(function () {
                tg(this.f.j());
                this.f = null;
                Ys(this, !1);
                Lg(this.g.j()) && (Us(this.g), this.ob(!0, !0))
            }, this));
            a.play()
        } else Ys(this, !1), this.f = null
    };
    u.gf = function (a, b) {
        this.tb = a;
        Xs.m.gf.call(this, a, b);
        this.j().style.display = "block"
    };
    u.Oe = function (a) {
        if (!this.C) {
            var b = Wo(this, a.target);
            this.Aa = b;
            this.Wb();
            b != this.b ? (this.b = b, Xo(this, b), Yo(this), Vo(this, a)) : Xo(this, b)
        }
    };
    u.oj = function () {
        Ws(this.g);
        this.Xc && this.re()
    };
    u.F = function () {
        for (var a in this.P) this.Zg(a);
        this.l && this.l.M();
        this.l = null;
        this.g && this.g.M();
        this.o = this.Ya = this.tb = this.H = this.I = this.g = null;
        Xs.m.F.call(this)
    };

    function Ys(a, b) {
        a.Xc = b;
        a.C = b;
        if (a.C) {
            var c = a.j();
            a.ra = new N(c.offsetLeft, c.offsetTop)
        } else a.ra && (null != (a.s || null) && ((a.s || null).a = a.ra), Wg(a.j(), a.ra), a.ra = null);
        a.I.style.display = b ? Hb : "inline-block";
        a.Ya.style.display = b ? "inline-block" : Hb
    }

    u.Sc = function (a) {
        this.isVisible() ? (this.sc = a, (this.sc ? this.h.w : this.h.ca).call(this.h, O(this.j()), Bb, this.lf, !0)) : Xs.m.Sc.call(this, a)
    };
    u.$b = function (a) {
        Xs.m.$b.call(this, a);
        if (a) {
            this.I = bg("activity-links", a);
            var b = bg(Wb, a);
            b && (this.g = new Ts, xi(this.g, b));
            this.Ya = bg("started-activity-container", a);
            this.H = bg("activity-root", a);
            this.o = bg("original-text", a)
        }
    };
    u.ob = function (a, b) {
        var c = bh(document.body).y;
        if (this.s) {
            (this.s || null).a.y += c;
            Xs.m.ob.call(this);
            var d = parseInt(this.j().style.left, 10);
            a = parseInt(this.j().style.top, 10) - (a ? 0 : c);
            b && (b = this.ef || {}, a -= b.top || 10, d -= b.left || 10);
            a -= c;
            (this.s || null).a.y = a;
            (this.s || null).a.x = d;
            Wg(this.j(), new N(d, a))
        }
    };
    u.J = function (a) {
        Xs.m.J.call(this, a)
    };
    u.Tb = jc("a");
    u.ua = jc("c");
    u.Pa = function (a) {
        a = a ? xd(a) : "";
        this.o ? Fg(this.o, a) : Xs.m.Pa.call(this, a)
    };
    u.cb = q("a");
    u.ya = q("g");
    u.na = q("c");
    u.Mc = function () {
        return this.o ? Lg(this.o) : Xs.m.Mc.call(this)
    };
    u.ac = function (a) {
        this.C || Xs.m.ac.call(this, a)
    };
    u.Hd = function (a) {
        this.C || Xs.m.Hd.call(this, a)
    };
    u.Gd = function (a) {
        this.C || Xs.m.Gd.call(this, a)
    };
    var Zs = {
        set: function (a, b) {
            a.className = b
        }, get: function (a) {
            a = a.className;
            return y(a) && a.match(/\S+/g) || []
        }, add: function (a, b) {
            var c = Zs.get(a), d = Yc(arguments, 1), e = c.length + d.length;
            Zs.Tf(c, d);
            Zs.set(a, c.join(" "));
            return c.length == e
        }, remove: function (a, b) {
            var c = Zs.get(a), d = Yc(arguments, 1), e = Zs.gg(c, d);
            Zs.set(a, e.join(" "));
            return e.length == c.length - d.length
        }, Tf: function (a, b) {
            for (var c = 0; c < b.length; c++) Tc(a, b[c]) || a.push(b[c])
        }, gg: function (a, b) {
            return Oc(a, function (c) {
                return !Tc(b, c)
            })
        }, Ej: function (a, b,
                         c) {
            for (var d = Zs.get(a), e = !1, f = 0; f < d.length; f++) d[f] == b && (Xc(d, f--, 1), e = !0);
            e && (d.push(c), Zs.set(a, d.join(" ")));
            return e
        }, Jk: function (a, b, c) {
            var d = Zs.get(a);
            y(b) ? Uc(d, b) : B(b) && (d = Zs.gg(d, b));
            y(c) && !Tc(d, c) ? d.push(c) : B(c) && Zs.Tf(d, c);
            Zs.set(a, d.join(" "))
        }, has: function (a, b) {
            return Tc(Zs.get(a), b)
        }, enable: function (a, b, c) {
            c ? Zs.add(a, b) : Zs.remove(a, b)
        }, toggle: function (a, b) {
            var c = !Zs.has(a, b);
            Zs.enable(a, b, c);
            return c
        }
    };

    function $s(a, b) {
        Es.call(this, a);
        b = b || {};
        this.a = {$a: b.$a || "", Kb: b.Kb || 1};
        this.b = null
    }

    D($s, Es);
    u = $s.prototype;
    u.nh = function (a, b) {
        b && (b.a = a, Oo(this.b, b))
    };
    u.oh = function (a) {
        a && Qo(this.b, a)
    };
    u.Mj = function () {
        var a = this.b.tb;
        if (a && void 0 !== a.a) {
            var b = a.a;
            a = this.h.c[b];
            Fs(this, this.f, !1);
            this.f = b;
            Fs(this, b);
            this.b.Tb(a.Cj);
            this.b.ua(a.Nj);
            b = a.T;
            this.b.K = b && xd(b);
            this.b.Pa(a.text)
        }
    };
    u.Lj = function () {
        Fs(this, this.f, !1)
    };
    u.Ug = function () {
        this.h.c[this.f].bi.dispatchEvent("updating")
    };
    u.F = function () {
        this.b.M();
        this.b = null;
        $s.m.F.call(this)
    };
    u.Fg = function (a, b) {
        Zs[b ? "add" : "remove"](a, "goog-text-highlight")
    };/*

Math.uuid.js (v1.4)
http://www.broofa.com
mailto:robert@broofa.com
Copyright (c) 2010 Robert Kieffer
Dual licensed under the MIT and GPL licenses.
*/
    var at = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");

    function bt(a) {
        this.h = a;
        this.c = this.a = this.f = this.b = -1;
        this.g = !1;
        this.s = 0;
        this.o = "";
        this.B = 0
    }

    bt.prototype.start = function () {
        if (!this.g) {
            this.g = !0;
            var a = [], b;
            var c = 62;
            for (b = 0; 15 > b; b++) a[b] = at[0 | Math.random() * c];
            this.o = a.join("");
            this.s = 0;
            this.c = this.a = this.f = this.b = -1;
            this.B = Fc();
            tl(this.l, 1E4, this)
        }
    };
    bt.prototype.stop = function () {
        this.g && (this.g = !1, ct(this))
    };
    bt.prototype.l = function () {
        this.g && (ct(this), tl(this.l, 1E3, this))
    };

    function ct(a) {
        var b = a.h.f, c = a.h.h, d = a.h.c, e = a.h.g;
        if (a.b != b || a.f != c || a.a != d || a.c != e) {
            var f = {};
            f.ct = b;
            f.cv = c;
            f.cts = d;
            f.cvs = e;
            f.sid = a.o;
            f.seq = a.s++;
            f.tat = Fc() - a.B;
            if (0 <= a.b || 0 <= a.f || 0 <= a.a || 0 <= a.c) f.pt = a.b, f.pv = a.f, f.pts = a.a, f.pvs = a.c;
            br("te_v", f);
            a.b = b;
            a.f = c;
            a.a = d;
            a.c = e
        }
    };

    function dt() {
        this.g = this.c = this.h = this.f = 0;
        this.a = [];
        this.b = null != v.IntersectionObserver ? new IntersectionObserver(C(this.l, this)) : null
    }

    ir(36546, dt.prototype, {Ig: 1});
    var et = "_gt_" + Math.random().toString(36).substr(2);
    dt.prototype.reset = function () {
        this.g = this.c = this.h = this.f = 0;
        this.a = []
    };
    dt.prototype.l = function (a) {
        for (var b = 0; b < a.length; b++) {
            var c = a[b];
            if (0 < c.intersectionRatio && null != c.target[et]) {
                this.h += Lg(c.target).length;
                var d = c.target[et];
                this.g += this.a[d];
                this.a[d] = 0;
                c.target[et] = void 0
            }
        }
    };

    function ft(a, b) {
        R.call(this);
        a = a || {};
        this.a = gd(a);
        this.a.Kb = a.Kb;
        this.a.Bf = !!a.Bf;
        this.a.Wh = parseInt(a.Wh, 10) || 300;
        this.a.tj = a.tj;
        this.a.trackVisibility = a.trackVisibility || !1;
        this.h = 0;
        this.c = {};
        this.l = new gi(this);
        this.f = new $s(this, this.a);
        b && (this.f.g = b || {});
        a = this.f;
        a.b = new Xs({Bj: a.a.Bj});
        a.b.Eg = 300;
        a.b.ih = 1E3;
        a.b.Sc(!0);
        a.c.w(a.b, "show", C(a.Mj, a));
        a.c.w(a.b, sb, C(a.Lj, a));
        b = new Cs({$a: a.a.$a, id: "alternate", cf: Z.vh, cd: !0}, a.g);
        a.b.ie(b);
        a.c.w(b, Yb, C(a.Ug, a));
        a.a.Kb && (b = new Ds({
            id: "contribute",
            Rd: Ya, cd: !0
        }, a.g), a.b.ie(b), a.c.w(b, Yb, C(a.Ug, a)));
        a.b.fa();
        this.g = this.b = null;
        this.a.trackVisibility && null != v.IntersectionObserver && (this.b = new dt, this.g = new bt(this.b))
    }

    D(ft, R);

    function gt(a, b, c, d, e, f) {
        d = a.c[++a.h] = {id: a.h.toString(), bi: f, text: c, Uk: e || c, T: d, Cj: a.s, Nj: a.o, Ca: b};
        for (e = 0; e < b.length; ++e) b[e] && a.f.nh(d.id, b[e]);
        if (a.b) for (e = a.b, f = c.length, e.c += f, c = e.a.length, e.a.push(f), f = 0; f < b.length; ++f) {
            var h = e, k = b[f];
            xg(k) ? (k[et] = c, h.f += Lg(k).length, h.b && h.b.observe(k)) : h.Ig(k.nodeType)
        }
        a.g && a.g.start();
        return d.id
    }

    function ht(a) {
        a.g && a.g.stop();
        for (var b in a.c) {
            var c = a, d = b, e = c.c[d];
            if (e) {
                if (c.b) for (var f = c.b, h = e.Ca, k = 0; k < h.length; ++k) {
                    var l = f, m = h[k];
                    xg(m) ? (m[et] = void 0, l.b && l.b.unobserve(m)) : l.Ig(m.nodeType)
                }
                for (f = 0; f < e.Ca.length; ++f) e.Ca[f] && c.f.oh(e.Ca[f]);
                delete c.c[d]
            }
        }
        a.b && a.b.reset()
    }

    ft.prototype.F = function () {
        ht(this);
        this.l.M();
        this.l = null;
        this.f.M();
        this.f = null
    };

    function it(a) {
        for (var b = 0; b < a.length; ++b) if (a[b] && a[b].node) return a[b].node;
        return null
    }

    function jt(a) {
        var b = it(a);
        if (!b) return null;
        var c = [], d = [], e = [];
        b = new $r(b, !0);
        var f = a[a.length - 1].node, h = 0, k = !1;
        do {
            b.next();
            var l = b.node();
            if (!l) break;
            var m = b.a.c, n = b.depth();
            for (1 == m && --n; h < a.length && !a[h].node;) ++h;
            l == a[h].node || !k && 1 == m && (null != l && null == l.previousSibling ? 0 : !kt(lt(l))) ? (m = mt(l), d.push({
                node: m,
                Pa: ic()
            }), e[d.length - 1] = n, rg(m, l), l == a[h].node && (c[h++] = d.length - 1, k = !0)) : k = !1
        } while (l != f);
        return {Hf: e, pj: c, Ri: d}
    }

    function kt(a) {
        return null != a && Yr[a.tagName]
    }

    function lt(a) {
        if (null == a) return null;
        for (a = a.previousSibling; null != a && null != a && 3 == a.nodeType && "" == xd(Lg(a));) a = a.previousSibling;
        return a
    }

    function nt(a, b, c, d, e, f) {
        mi.call(this);
        this.a = [];
        for (var h = 0; h < a.length; ++h) this.a.push("nodeType" in a[h] ? ot(a[h]) : a[h]), pt(a[h].node);
        this.f = b;
        this.G = d || 0;
        this.K = e || 0;
        this.l = c;
        this.s = f || null;
        this.C = this.B = this.I = !1;
        this.c = [];
        this.h = [];
        this.b = [];
        this.L = [];
        new gi(this);
        this.g = this.H = !1
    }

    var ot;
    D(nt, mi);

    function qt() {
        this.b = {};
        this.a = {}
    }

    qt.prototype.has = function (a, b) {
        return null != this.b[a] || null != this.a[a] || b && (a in this.b || a in this.a)
    };
    qt.prototype.write = function (a, b) {
        this.a[a] = b
    };
    qt.prototype.remove = function (a) {
        delete this.a[a];
        delete this.b[a]
    };
    var rt = "_gt_" + Math.random().toString(36).substr(2), st = "_gtn_" + Math.random().toString(36).substr(2);

    function tt(a) {
        if (!a) return !1;
        if (3 != a.nodeType || !F) return rt in a && !!a[rt];
        if (!a.parentNode) return !0;
        if (!(st in a.parentNode)) return !1;
        var b = a.parentNode[st];
        if (!b || !b[a.nodeValue]) return !1;
        b = b[a.nodeValue];
        for (var c = 0; c < b.length; ++c) if (b[c] == a) return !0;
        return !1
    }

    (function () {
        function a(c) {
            document.title = c
        }

        var b = {};
        ot = function (c, d) {
            if (c.tagName == wa) return {node: c, Pa: a, ee: !0, Gg: !0, Ff: !0};
            if (3 == c.nodeType) return {
                node: c, Pa: function (e, f) {
                    Fg(f, e)
                }
            };
            d || (d = "value");
            b[d] || (b[d] = function (e, f) {
                f.setAttribute && f.setAttribute(d, e);
                y(e) && (f[d] = e)
            });
            c = {node: c, Pa: b[d], ee: !0};
            "value" != d && (c.Ff = !0);
            return c
        }
    })();

    function ut(a, b) {
        if (!a) return "";
        if (a.tagName == wa) return String(document.title);
        3 == a.nodeType ? b = "nodeValue" : b || (b = "value");
        return a.getAttribute && a.getAttribute(b) ? String(a.getAttribute(b)) : y(a[b]) ? String(a[b]) : ""
    }

    nt.prototype.$ = q("f");

    function vt(a, b, c, d) {
        d = d.firstChild && 3 == d.firstChild.nodeType ? d.firstChild.nodeValue : Lg(d);
        d = {R: c, T: Le(d)};
        a.push(d);
        b[c] ? b[c].end = d : b[c] = {start: d, end: d};
        return d
    }

    function wt(a, b, c) {
        b = {Vg: b, pf: c, aa: []};
        a.b.push(b);
        return b
    }

    function xt(a) {
        if (!a.g && a.I && !a.B && !a.C) {
            a.B = !0;
            var b;
            if (b = yt(a.a)) {
                b = a.a;
                var c = a.b;
                if (1 == b.length && b[0] && b[0].Ff) {
                    for (var d = [], e = 0; e < c.length; ++e) for (var f = 0; f < c[e].aa.length; ++f) d.push(c[e].aa[f].T);
                    b[0].Pa(d.join(" "), b[0].node);
                    b = !0
                } else b = !1;
                b = !b
            }
            if (b && (b = jt(a.a))) {
                a.h = b.pj;
                a.c = b.Ri;
                d = a.a;
                e = a.h;
                f = a.c;
                var h = b.Hf;
                c = [];
                for (var k = 0; k < d.length; ++k) if (c[k] = [], d[k].node && x(e[k])) for (var l = 0; l < f.length; ++l) if (!(h[l] > h[e[k]])) {
                    if (h[l] == h[e[k]]) {
                        if (f[l].node.parentNode != f[e[k]].node.parentNode) continue
                    } else {
                        for (var m =
                            h[e[k]] - h[l], n = f[e[k]].node.parentNode; m-- && n && n != f[l].node.parentNode;) n = n.parentNode;
                        if (n != f[l].node.parentNode) continue
                    }
                    c[k].push(l)
                }
                d = a.a;
                e = a.b;
                f = -1;
                for (h = e.length - 1; 0 <= h; --h) for (k = e[h], l = k.aa.length - 1; 0 <= l; --l) if (m = k.aa[l], !(0 > m.R) && d[m.R] && d[m.R].node) if (0 > f) m.Md = Sq(c[m.R]), f = c[m.R][c[m.R].length - 1]; else for (n = c[m.R].length - 1; 0 <= n; --n) if (c[m.R][n] <= f) {
                    m.Md = Sq(c[m.R].slice(0, n + 1));
                    f = c[m.R][n];
                    break
                }
                for (c = e = 0; c < a.b.length; ++c) {
                    d = a.b[c];
                    f = a.a;
                    h = d;
                    k = b.Hf;
                    l = a.h;
                    m = "";
                    for (n = 0; n < h.aa.length; ++n) {
                        var r =
                            h.aa[n];
                        m += r.T;
                        if (0 > r.R) {
                            var w = -1, H = -1, G = l[h.aa[n - 1].R];
                            x(G) && (w = k[G]);
                            n < h.aa.length - 1 && (G = l[h.aa[n + 1].R], x(G) && (H = k[G]));
                            if (0 <= w || 0 <= H) a:if (H = (0 > w || H < w) && n < h.aa.length - 1, w = h.aa[H ? n + 1 : n - 1], !(w.R >= f.length) && null != f[w.R].node) {
                                G = r.T;
                                r.T = "";
                                if (/^ +$/.test(G) && (r = H ? w.T.charCodeAt(0) : w.T.charCodeAt(w.T.length - 1), 3584 <= r && 3711 >= r || 12288 <= r && 12351 >= r || 12352 <= r && 12543 >= r || 12784 <= r && 12799 >= r || 19968 <= r && 40959 >= r || 65280 <= r && 65519 >= r)) break a;
                                w.T = H ? G + w.T : w.T + G
                            }
                        }
                    }
                    f = m;
                    h = a.a;
                    k = d;
                    l = a.c;
                    m = b.Hf;
                    n = a.h;
                    r = [];
                    for (w = 0; w <
                    k.aa.length && !(e >= l.length); ++w) if (H = k.aa[w], H.Md && !(0 > H.R) && h[H.R].node && H.T) if (e == n[H.R] || e in H.Md && (!(e + 1 in H.Md) || e + 1 != n[H.R])) {
                        if (l[e] && l[e].node) {
                            G = mt(l[e].node);
                            r.push(G);
                            for (var ea = l[e].node, Wl = m[n[H.R]] - m[e], ff = G, tb = h[H.R].node.parentNode, Fi = ff; tb && Wl--;) Fi = tb.cloneNode(!1), Fi.appendChild(ff), tb = tb.parentNode, ff = Fi;
                            ea.appendChild(Fi);
                            ea = h[H.R].node;
                            h[H.R].ee ? h[H.R].Gg || G.appendChild(ea) : (ea = h[H.R].node.cloneNode(!1), ea.id && (ea.id = ""), G.appendChild(ea));
                            h[H.R].Pa(H.T, ea)
                        }
                    } else ++e, --w;
                    h =
                        r;
                    r = a.a;
                    k = a.l;
                    if (d.Vg) k = d.Vg; else {
                        l = r.length;
                        m = -1;
                        for (n = 0; n < d.aa.length; ++n) w = d.aa[n].R, 0 <= w && r[w] && r[w].node && (m = Math.max(m, w), l = Math.min(l, w));
                        r = "";
                        for (n = l; n <= m; ++n) k[n] && (r += k[n]);
                        k = r
                    }
                    if (a.s) 3 != a.s.a.Kb && a.L.push(gt(a.s, h, k, f, d.pf, a)); else for (d = 0; d < h.length; ++d) h[d].title = k
                }
                b = a.a;
                for (c = 0; c < b.length; ++c) b[c].node && !b[c].ee && tg(b[c].node);
                b = a.a;
                c = a.c;
                a = a.h;
                for (e = d = 0; e < c.length; ++e) if (f = c[e].node) {
                    for (; d < b.length && e > a[d];) d++;
                    (d >= b.length || e != a[d]) && !f.firstChild && (tg(f), c[e].node = null)
                }
            }
        }
    }

    nt.prototype.restore = function () {
        if (this.B) if (this.B = !1, this.s && ht(this.s), this.L = [], yt(this.c), 1 == this.a.length && this.a[0].Ff) this.a[0].Pa(this.l[0], this.a[0].node); else {
            for (var a = 0, b = 0; b < this.c.length; ++b) {
                var c = this.c[b].node;
                if (c) {
                    for (; a < this.a.length && b > this.h[a];) {
                        var d = a++;
                        this.a[d].node && (zt(this.a[d].node), this.a[d].node = null)
                    }
                    if (a < this.a.length && b == this.h[a] && this.a[a].node) {
                        this.a[a].Gg || (qg(c), c.appendChild(this.a[a].node));
                        this.a[a].Pa(this.l[a], this.a[a].node);
                        a++;
                        d = c;
                        var e = d.parentNode;
                        if (e && 11 != e.nodeType) if (d.removeNode) d.removeNode(!1); else {
                            for (; c = d.firstChild;) e.insertBefore(c, d);
                            tg(d)
                        }
                    } else tg(c)
                }
            }
            this.c = []
        }
    };
    nt.prototype.F = function () {
        nt.m.F.call(this);
        this.restore();
        for (var a = 0; a < this.a.length; ++a) this.a[a].node && zt(this.a[a].node);
        this.a = null
    };

    function pt(a) {
        if (a) if (3 == a.nodeType && F) {
            st in a.parentNode && a.parentNode[st] || (a.parentNode[st] = {});
            var b = a.parentNode[st];
            b[a.nodeValue] || (b[a.nodeValue] = []);
            b = b[a.nodeValue];
            for (var c = 0; c < b.length; ++c) if (b[c] == a) return;
            b.push(a)
        } else a[rt] = 1
    }

    function zt(a) {
        if (!a || 3 == a.nodeType && F) {
            var b = a.parentNode;
            if (b && st in b) {
                var c = b[st];
                if (c && a && c[a.nodeValue]) {
                    var d = c[a.nodeValue];
                    if (d) for (var e = 0; e < d.length; ++e) if (d[e] == a) {
                        d.splice(e, 1);
                        break
                    }
                    0 == d.length && delete c[a.nodeValue]
                }
                if (c && gr(c)) try {
                    delete b[st]
                } catch (f) {
                    b[st] = ""
                }
            }
        } else if (rt in a) try {
            delete a[rt]
        } catch (f) {
            a[rt] = ""
        }
    }

    function yt(a) {
        for (var b = 0; b < a.length; ++b) try {
            a[b].node && !a[b].node.parentNode && (a[b].node = null)
        } catch (c) {
            a[b].node = null
        }
        for (b = a.length - 1; 0 <= b && !a[b].node; --b) ;
        a.length = b + 1;
        return a.length
    }

    function mt(a) {
        a = a.ownerDocument ? a.ownerDocument.createElement("font") : document.createElement("font");
        pt(a);
        a.style.verticalAlign = "inherit";
        return a
    }

    function At(a) {
        for (var b, c = a.firstChild; c; c = b) b = c.nextSibling, 3 != c.nodeType && (c == a.firstChild ? rg(c, a) : sg(c, a), At(c))
    };

    function Bt(a, b, c, d, e) {
        b = b || {};
        this.xa = e || [];
        this.h = [];
        this.o = [];
        Ct(this, a || document.documentElement, !x(b.bh) || !!b.bh);
        this.l = c || nt;
        this.C = b.Ui;
        this.c = this.a = this.g = this.zc = null;
        this.s = !!b.Qj;
        this.H = !!b.Pj;
        this.I = this.s ? 27 : 13;
        this.G = !0;
        this.B = [];
        this.f = new Em(this, d)
    }

    ir(5762, Bt.prototype, {aj: 1});

    function Dt(a, b, c, d) {
        a.f.c || (b = {
            qh: b,
            jh: c,
            Ca: [],
            Wg: [],
            Ib: [],
            be: 0,
            size: 0,
            continuous: !0
        }, a.zc = null, Hm(a.f, a.b), Im(a.f, d), Jm(a.f, C(function (e) {
            this.aj(e);
            d()
        }, a)), Km(a.f, b))
    }

    function Et(a, b) {
        return 0 < a.Ca.length ? new b(a.Ca, a.Ib.join(""), a.Wg, a.be, a.size) : null
    }

    function Ft(a, b) {
        if (!a.c) return a.zc = Et(b, a.l), !0;
        if (!b.continuous && 0 < b.Ca.length) return a.zc = Et(b, a.l), !0;
        b.continuous = a.c.Qg;
        a:{
            var c = a.c;
            var d = a.I;
            if (b.size > b.jh || b.be > b.qh) c = !1; else {
                var e = c.size, f = c.text.length;
                if (0 != b.Ca.length && (e += 1 == b.Ca.length ? b.size + d + d : b.size + d, f += b.be, e > b.jh || f > b.qh)) {
                    c = !1;
                    break a
                }
                b.size = e;
                b.be = f;
                b.Ca.push(c.node);
                b.Wg.push(c.text);
                d = b.Ca.length - 1;
                0 == d ? b.Ib.push(c.ye) : (1 == d && (b.Ib[0] = "<a i=0>" + b.Ib[0] + "</a>"), b.Ib.push("<a i=" + d + ">"), b.Ib.push(c.ye), b.Ib.push("</a>"));
                c = !0
            }
        }
        if (c) return a.c = null, !1;
        a.zc = Et(b, a.l);
        return !0
    }

    function Gt(a, b, c) {
        var d = ut(b, c);
        d && xd(Ee(d)) && a.B.push({node: b, Rh: c, text: d})
    }

    Bt.prototype.b = function (a, b) {
        if (this.c && Ft(this, b)) return Gm;
        if (!this.a) {
            this.G = !!this.h.length;
            if (!this.h.length && (a = this.B.shift())) return this.c = {
                Qg: !1,
                node: ot(a.node, a.Rh),
                text: a.text,
                ye: Ke(a.text),
                size: this.s ? Ie(a.text).length : a.text.length
            }, b.continuous = !1, Ft(this, b), Gm;
            a = this.h.shift() || this.o.shift();
            if (!a) return this.c = null, Ft(this, b), Gm;
            this.g = [a.Oj];
            this.a = new $r(a.root)
        }
        this.a.next();
        if (this.a.f) return this.a = null, b.continuous = !1, this.b;
        a = this.a.node();
        var c = this.a.a.c;
        if (-1 == c) {
            Ht(this);
            if (!a || 3 != a.nodeType && !Wr[a.tagName]) b.continuous = !1;
            return this.b
        }
        var d = !tt(a) && (a.nodeType == Jc && It(this) || !Kf(a, "notranslate") && (Kf(a, ec) || It(this)));
        this.g.push(d);
        c = 1 == c;
        if (((d = !!a && (3 == a.nodeType && y(a.nodeValue) || a.tagName == wa && y(a.value) || a.tagName == va && Kf(a, ec) || a.tagName == oa && (Zr[a.type] || Kf(a, ec)))) || c) && this.G && !Jt(a)) return Ct(this, a, It(this), !0), this.a.a.g(), Ht(this), this.b;
        if (c && It(this)) {
            this.H && Gt(this, a, "title");
            Gt(this, a, "alt");
            Gt(this, a, "aria-label");
            Gt(this, a, "aria-placeholder");
            Gt(this, a, "aria-roledescription");
            Gt(this, a, "aria-valuetext");
            var e = this.a;
            if (e.b[e.b.length - 1]) for (e = a.firstChild; e;) {
                if (3 == e.nodeType) {
                    var f = e.nodeValue.split("\n");
                    if (2 < f.length || 2 == f.length && "" != xd(f[0]) && "" != xd(f[1])) {
                        e.nodeValue = f[0];
                        for (var h = 1; h < f.length; ++h) {
                            var k = O(a).createElement("font");
                            this.xa.push(k);
                            sg(k, e);
                            e = k;
                            sg(O(a).createTextNode("\n" + f[h]), e);
                            e = e.nextSibling
                        }
                    }
                }
                e = e.nextSibling
            }
        }
        if (d) {
            this.a.a.g();
            if (It(this)) {
                var l = ut(a);
                if (xd(Ee(l)) && (this.c = {
                    Qg: !0, node: ot(a), text: l, ye: Ke(l),
                    size: this.s ? Ie(l).length : l.length
                }, Ft(this, b))) return Ht(this), Gm
            }
            Ht(this);
            return this.b
        }
        if (c) {
            if (Kt(a) || !a.firstChild && a.tagName != na) return b.continuous = b.continuous && !!Yr[a.tagName], this.a.a.g(), Ht(this), this.b;
            if (a.tagName == na) {
                try {
                    if (!(l = !a.src.match(/https?:\/\//))) {
                        var m = a.src.match(Hj)[3] || null;
                        l = (m ? decodeURI(m) : m) == window.location.hostname
                    }
                    if (l) {
                        var n = Dg(a).documentElement;
                        n && Ct(this, n, It(this))
                    }
                } catch (r) {
                }
                b.continuous = !1;
                this.a.a.g();
                Ht(this);
                return this.b
            }
            It(this) && a && (3 == a.nodeType || Wr[a.tagName]) ?
                this.C && "A" == a.tagName && a.href && this.C(a) : b.continuous = !1;
            return this.b
        }
        this.a.a.g();
        Ht(this);
        return this.b
    };

    function Kt(a) {
        return tt(a) || 3 != a.nodeType && (!a.tagName || Xr[a.tagName] || Yr[a.tagName] || Kf(a, Vb) || "gts-order" == a.id)
    }

    function Jt(a) {
        if (3 == a.nodeType) return !0;
        if (1 != a.nodeType) return !1;
        if (!a.offsetWidth || !a.offsetHeight) {
            var b = O(a), c = null;
            b.defaultView && b.defaultView.getComputedStyle ? c = b.defaultView.getComputedStyle(a, null) : c = a.currentStyle;
            return c && c.display != Hb && c.visibility != rb
        }
        return !0
    }

    function Ct(a, b, c, d) {
        (d ? a.o : a.h).push({root: b, Oj: !x(c) || c})
    }

    function It(a) {
        return a.g[a.g.length - 1]
    }

    function Ht(a) {
        a.g.pop()
    };

    function Lt() {
        R.call(this);
        this.a = []
    }

    D(Lt, R);
    Lt.prototype.restore = function () {
        tl(this.b, 0, this)
    };
    Lt.prototype.b = function () {
        for (var a = 0; a < this.a.length; ++a) tg(this.a[a]);
        this.a = []
    };
    Lt.prototype.F = function () {
        Lt.m.F.call(this);
        this.restore()
    };

    function Mt(a) {
        var b = new Lo;
        Gj(a, function (c) {
            if (xg(c)) b.add(c); else {
                a:{
                    var d;
                    if (Rf && !(F && K("9") && !K("10") && v.SVGElement && c instanceof v.SVGElement) && (d = c.parentElement)) {
                        c = d;
                        break a
                    }
                    d = c.parentNode;
                    c = xg(d) ? d : null
                }
                null != c && b.add(c)
            }
        });
        return b
    };

    function Nt(a) {
        this.b = !0;
        this.f = a;
        this.c = !1;
        this.a = []
    }

    Nt.prototype.$ = function () {
        return this.a.join("")
    };

    function Ot(a, b) {
        this.g = a;
        this.f = !0;
        this.c = b;
        this.a = null;
        this.b = 0
    }

    function Pt(a, b) {
        return a.f ? (b(C(a.h, a), a.g, a.c ? "en" : ""), !0) : !1
    }

    Ot.prototype.h = function (a, b, c) {
        this.a = b;
        this.b = c;
        a()
    };

    function Qt(a, b) {
        this.f = a;
        this.o = !!b;
        this.b = this.s = 0;
        this.g = this.c = -1;
        this.h = this.l = this.a = 0
    }

    var Rt = Sq(". , ; : \\? !".split(" ")),
        St = Sq([34, 35, 36, 37, 38, 43, 44, 47, 58, 59, 60, 61, 62, 63, 64, 91, 92, 93, 94, 96, 123, 124, 125, 127]);

    function Tt(a, b, c) {
        a.o && (b -= 9);
        for (var d = "", e = 0, f = a.s; f < a.f.length; ++f) {
            var h = a.f.charAt(f), k = h.charCodeAt(0);
            e++;
            a.a += a.o ? 127 >= k ? 32 >= k || St[k] ? 3 : 1 : 2047 >= k || 55296 <= k && 56319 >= k || 56320 <= k && 57343 >= k ? 6 : 9 : 1;
            k = a.a >= b;
            Rt[h] ? (a.g = f, a.l = a.a, k = k || e > c) : " " == h && (a.c = f, a.h = a.a, k = k || e > c);
            if (k) return 0 <= a.g ? (d = a.f.substring(a.b, a.g + 1), a.a -= a.l, a.b = a.g + 1, a.g >= a.c ? (a.c = -1, a.h = 0) : a.h -= a.l, a.g = -1, a.l = 0) : 0 <= a.c ? (d = a.f.substring(a.b, a.c + 1), a.a -= a.h, a.b = a.c + 1, a.c = -1, a.h = 0) : (d = a.f.substring(a.b, f + 1), a.a = 0, a.b = f + 1, a.g = a.c =
                -1, a.h = a.l = 0), a.s = f + 1, d
        }
        a.b < a.f.length && (d = a.f.substring(a.b), a.b = a.f.length);
        return d
    };

    function Ut(a, b, c, d, e, f) {
        this.l = d || z;
        this.W = f || z;
        this.L = !!e;
        this.c = a.a.Og;
        this.f = 0;
        this.G = z;
        this.C = c;
        this.o = this.b = this.g = 0;
        this.a = null;
        this.I = 0;
        this.qa = !1;
        this.da = a.a.Mg;
        this.K = [];
        this.H = 0;
        this.h = (this.P = a.a.we) ? a.a.ff - (new Jj(a.a.sa.b)).toString().length : a.a.ff;
        this.va = this.L ? 1 : 6;
        this.Ia = a.a.eh;
        this.xa = b;
        this.s = [];
        this.la = a
    }

    function Vt(a, b) {
        var c = 0;
        a.G = C(function () {
            ++c == this.s.length && b()
        }, a)
    }

    function Wt(a, b, c) {
        if (0 == a.b && (a.b = b ? 860 : a.h, !c || c <= a.h)) {
            a.g = a.b;
            return
        }
        do b = a.b, a.b < a.h && (a.b *= a.va, a.b > a.h && (a.b = a.h)); while (b != a.b && c && a.b < c);
        a.g = a.b
    }

    function Xt(a, b) {
        var c = null != b, d = !c && !a.qa;
        (d || c) && a.l(100, d, b)
    }

    function Yt(a) {
        return a.P ? a.a.K : a.a.$().length
    }

    function Zt(a, b, c, d, e) {
        return new Bt(a.xa.shift(), {Qj: a.P, Ui: b, bh: !0, Pj: !!c}, function () {
            var f = Array.prototype.slice.call(arguments);
            return new nt(f.shift(), f.shift(), f.shift(), f.shift(), f.shift(), c, d)
        }, a.C, e)
    }

    function $t(a, b, c) {
        if (0 < a.da && au(b) >= a.da) return !0;
        if (Yt(a) > a.b) {
            if (0 < au(b)) return !0;
            Wt(a, c, Yt(a));
            for (var d = a.a.$(), e = new Qt(d, a.P), f; f = Tt(e, a.b, a.c);) if (b.g.push(new Ot([f], !1)), a.f += f.length, a.c -= f.length, 0 >= a.c) {
                b.B = d.substring(e.b);
                break
            } else Wt(a, c);
            bu(b, a.a, !0);
            a.a = null;
            return !0
        }
        if (Yt(a) > a.g) return !0;
        bu(b, a.a, !0);
        a.g -= Yt(a) + a.Ia;
        a.f += a.a.G;
        a.c -= a.a.G;
        a.a = null;
        return !1
    };

    function cu(a, b) {
        R.call(this);
        this.f = b;
        this.b = {rootMargin: a};
        this.a = new IntersectionObserver(C(this.c, this), this.b)
    }

    D(cu, R);
    cu.prototype.F = function () {
        cu.m.F.call(this);
        this.a = null
    };
    cu.prototype.c = function (a) {
        for (var b = 0; b < a.length; b++) if (0 < a[b].intersectionRatio) {
            this.f();
            break
        }
    };

    function du() {
        T.call(this)
    }

    D(du, T);
    du.prototype.D = function () {
        this.S(kk(js))
    };
    du.prototype.S = jc("A");

    function eu(a) {
        Mf(a.j(), qb);
        Mf(a.j().firstChild, pb)
    };

    function fu() {
        this.a = new du;
        this.a.D();
        this.a.fa();
        this.b = 0
    }

    fu.prototype.reset = function () {
        this.b = 0;
        eu(this.a)
    };

    function gu(a, b, c, d, e, f, h, k) {
        this.g = a;
        this.b = b;
        this.s = [];
        this.B = null;
        this.f = c;
        this.a = d;
        this.c = e;
        this.xa = f;
        this.H = h;
        this.o = this.h = null;
        this.l = k || null;
        this.I = this.C = !1;
        this.G = {}
    }

    function hu(a) {
        for (var b = new Lo, c = 0; c < a.length; c++) {
            for (var d = a[c], e = new Lo, f = 0; f < d.a.length; f++) {
                var h = d.a[f].node;
                null != h && e.add(h)
            }
            d = b;
            e = Fj(e);
            f = e.length;
            for (h = 0; h < f; h++) d.add(e[h])
        }
        return b
    }

    u = gu.prototype;
    u.trackVisibility = function (a) {
        a = this.h = new cu("200px", C(this.Gi, this, a));
        var b = Mt(hu([].concat(this.b, this.s)));
        Gj(b, C(a.a.observe, a.a));
        a = this.o = new cu("0px", C(this.Ki, this));
        b = Mt(hu([].concat(this.b, this.s)));
        Gj(b, C(a.a.observe, a.a))
    };
    u.Gi = function (a) {
        this.h && (this.h.a.disconnect(), this.h = null);
        a()
    };
    u.Ki = function () {
        this.C = !0;
        iu(this);
        if (!this.I && this.l) {
            var a = this.l;
            0 == a.b++ && (a = a.a, M(a.j(), qb), M(a.j().firstChild, pb))
        }
    };

    function iu(a) {
        a.o && (a.o.a.disconnect(), a.o = null)
    }

    u.mh = function () {
        if (this.C && !this.I && this.l) {
            var a = this.l;
            0 == --a.b && eu(a.a)
        }
        this.h && (this.h.a.disconnect(), this.h = null);
        iu(this)
    };

    function bu(a, b, c) {
        c ? (a.b.push(b), a.G[b.$()] = !0) : a.s.push(b)
    }

    function au(a) {
        return a.b.length + a.s.length
    }

    function ju(a) {
        if (0 == a.g.length) {
            for (var b = [], c = 0; c < a.b.length; ++c) b.push(a.b[c].$());
            a.g.push(new Ot(b, !1))
        }
    }

    u.translate = function (a) {
        function b() {
            d++;
            d == c && e()
        }

        ju(this);
        for (var c = 0, d = 0, e = z, f = this.f, h = this.a, k = this.c, l = this.xa, m = this.H, n = 0; n < this.g.length; ++n) Pt(this.g[n], function (r, w, H) {
            r = f.la.translate(Ec(r, b), w, H || h, k, ++f.H, l, m, f.L);
            f.K.push(r);
            return r
        }) && c++;
        0 != c && (e = Lm(a));
        return c
    };

    function ku(a, b) {
        R.call(this);
        this.b = [];
        this.f = [];
        this.a = a;
        this.c = b
    }

    D(ku, R);
    ku.prototype.g = function (a) {
        var b = xd(a.href);
        0 == b.indexOf("javascript:") || 0 <= b.indexOf("#") || (this.f.push(a.href), this.b.push(a), a.href = b + "#googtrans/" + this.a + "/" + this.c)
    };
    ku.prototype.F = function () {
        ku.m.F.call(this);
        this.restore()
    };
    ku.prototype.restore = function () {
        if (this.b.length) {
            for (var a = 0; a < this.b.length; ++a) this.b[a].href = this.f[a];
            this.b = [];
            this.f = []
        }
    };

    function lu(a, b) {
        R.call(this);
        this.b = a;
        this.a = qd.test(b) ? "translated-rtl" : "translated-ltr";
        a = [].concat(this.b);
        for (b = 0; b < a.length; ++b) xg(a[b]) && M(a[b], this.a)
    }

    D(lu, R);
    lu.prototype.F = function () {
        lu.m.F.call(this);
        this.restore()
    };
    lu.prototype.restore = function () {
        for (var a = [].concat(this.b), b = 0; b < a.length; ++b) xg(a[b]) && Mf(a[b], this.a)
    };

    function mu(a, b, c, d, e, f, h, k, l, m) {
        R.call(this);
        this.B = a;
        this.Nh = b;
        this.la = c || null;
        this.va = m || null;
        this.C = null;
        this.tb = !!d;
        this.Xc = e || "transparent";
        this.Hb = !!f;
        this.o = [];
        this.jb = this.G = this.b = !1;
        this.l = k || new qt;
        this.Sf = !k;
        this.ra = h || Am.X();
        this.Ia = new Lt;
        this.W = this.P = this.I = !1;
        this.Ya = this.f = .5;
        this.Za = .01;
        this.s = new Bm(this.f);
        this.K = (this.h = this.qa = !!l) ? new MutationObserver(C(this.Bi, this)) : null;
        this.c = this.a = null;
        S(window, La, this.Bg, !0, this);
        S(window, db, this.Cg, !0, this)
    }

    D(mu, R);
    ir(3046, mu.prototype, {Xi: 1, Zi: 2, Yi: 3, $i: 4});
    u = mu.prototype;
    u.cb = function () {
        return this.a ? this.a : ""
    };
    u.na = function () {
        return this.c ? this.c : ""
    };
    u.Zh = function (a) {
        this.Xi.apply(this, arguments);
        this.g && this.g(0, !1, 1)
    };
    u.cg = function (a) {
        this.Yi.apply(this, arguments);
        this.g && this.g(0, !1, 1)
    };
    u.$h = function (a) {
        this.Zi.apply(this, arguments);
        this.g && this.g(0, !1, 1)
    };
    u.ai = function (a) {
        this.$i.apply(this, arguments);
        this.g && this.g(0, !1, 1)
    };
    u.translate = function (a, b, c, d, e) {
        if (d || a != this.a || b != this.c) nu(this), this.Sf && (this.l = new qt); else if (this.b) return;
        this.g = c;
        this.Yc = e;
        this.h = this.qa && !0;
        this.K && this.K.observe(document.body, {attributes: !0, childList: !0, characterData: !0, subtree: !0});
        this.b = !0;
        this.a = a;
        this.c = b;
        this.tb && (this.C = new ku(a, b));
        this.W = this.a == Ia;
        this.la && (c = this.la, a && (c.s = a), b && (c.o = b));
        this.da = new lu(this.B, this.c);
        this.H = ou(this);
        (a = this.B instanceof Node ? this.B : null) && pu(a, this.c)
    };

    function ou(a) {
        var b = new Em(a, a.ra);
        Hm(b, a.xg);
        Jm(b, C(a.Zh, a));
        Km(b, new Ut(a.Nh, [].concat(a.B), a.ra, a.g, a.h, a.Yc));
        return b
    }

    u.restore = function () {
        nu(this);
        this.Ia.restore();
        var a = this.B instanceof Node ? this.B : null;
        a && pu(a, this.cb())
    };
    u.F = function () {
        mu.m.F.call(this);
        this.restore();
        ai(window, La, this.Bg, !0, this);
        ai(window, db, this.Cg, !0, this)
    };

    function qu(a, b, c, d) {
        var e = gr(a.l.b), f = new Em(a, b.C);
        b.s.push(f);
        Im(f, b.G);
        Wt(b, e);
        Hm(f, d || a.tg);
        b = c || new gu([], [], b, a.cb(), a.na(), a.jb, a.G, a.va);
        Jm(f, a.Hi, a);
        a.h && Im(f, b.mh, b);
        Km(f, b)
    }

    u.Hi = function (a, b, c) {
        c.mh();
        this.G ? this.ai(a) : this.$h(a);
        c.f.G()
    };
    u.Cg = function () {
        this.I = !1;
        this.L = 0;
        Cm(this.s, this.f)
    };
    u.Bg = function (a) {
        a.target == window && (this.I = !0, this.L = 0, Cm(this.s, .01))
    };
    u.Bi = function (a) {
        if (this.b && this.h) {
            for (var b = 0; b < a.length; b++) if (a[b].target && a[b].target.className && (0 <= a[b].target.className.indexOf(ec) || 0 == a[b].target.className.indexOf("goog-"))) return;
            this.ra.add(C(this.uj, this))
        }
    };
    u.uj = function () {
        this.G = !0;
        this.H.stop();
        this.H = ou(this);
        return !1
    };
    u.xg = function (a, b) {
        Vt(b, Lm(a));
        qu(this, b);
        return this.Mi
    };
    u.Mi = function (a, b) {
        if (!this.b) return Gm;
        if (!Mm(a)) return Fm;
        if (!this.h) for (a = 0; a < this.o.length; ++a) {
            var c = C(this.Uf, this, b, this.o[a]);
            b.C.add(c)
        }
        return this.Li
    };
    u.qg = function (a, b) {
        if (this.L && !this.I) {
            a = (new Date).getTime() - this.L;
            var c = this.f;
            900 > a && .01 < c ? c = Math.max(.9 * c, .01) : 1100 < a && .5 > c && (c = Math.min(1.5 * c, .5));
            this.f = c;
            this.P ? this.Za = .01 : this.Ya = this.f
        }
        this.G = this.b = !0;
        this.L = (new Date).getTime();
        this.Zc != (a = document.body.innerText || document.body.textContent || document.body.innerHTML) ? (this.Zc = a, a = !0) : a = !1;
        a ? (this.P = !1, this.f = this.Ya, this.I || Cm(this.s, this.f), a = [].concat(this.B), c = this.s, b.l = z, b.xa = a, b.a = null, b.H = 0, b.s = [], b.G = z, b.C = c, a = new Em(this, this.s),
            Hm(a, this.xg), Jm(a, C(this.cg, this)), Km(a, b), this.H = a) : (this.P = !0, this.f = this.Za, this.I || Cm(this.s, this.f), a = new Em(this, this.s), Hm(a, this.qg), Jm(a, C(this.cg, this)), Km(a, b), this.H = a);
        return Gm
    };
    u.Li = function (a, b) {
        if (!this.b) return Gm;
        this.G = this.b = !1;
        this.W ? Xt(b, !0) : (Xt(b), b.W(b.f));
        if (this.Hb) return this.qg;
        for (a = 0; a < b.s.length; ++a) b.s[a].stop();
        for (a = 0; a < b.K.length; ++a) Vr(b.la, b.K[a]);
        return Gm
    };

    function ru(a, b, c) {
        a:{
            var d = a.tb ? C(a.C.g, a.C) : z, e = a.la, f = a.Xc, h = a.Ia.a;
            b = Lm(b);
            if (!c.B) {
                if (0 == c.xa.length) {
                    0 == c.f && 0 == c.H && c.l(0, !0);
                    c = !1;
                    break a
                }
                c.B = Zt(c, d, e, f, h)
            }
            c.ra = !0;
            Dt(c.B, c.c, c.b, b);
            c = !0
        }
        return c ? a.tg : a.Dd
    }

    u.tg = function (a, b) {
        if (!this.b) return Gm;
        var c = b.f;
        if (null == c.a) {
            if (!c.ra) return ru(this, a, b.f);
            if (!Mm(a)) return Fm;
            c.ra = !1;
            c.a = c.B.zc || null;
            var d = c.a ? c.a : c.B = null;
            if (!d) return ru(this, a, b.f);
            this.o.push(d);
            var e = d.$();
            if (this.l.has(e, !this.h) || null != b.G[e] && b.G[e]) return e = c.a.G, c.f += e, c.c -= e, c.a = null, this.h && bu(b, d, !1), ru(this, a, b.f);
            this.l.a[d.$()] = null
        }
        0 < au(b) && Cm(this.s, .5);
        return $t(c, b, gr(this.l.b)) ? this.Dd : ru(this, a, b.f)
    };
    u.Dd = function (a, b) {
        if (!this.b || 0 == au(b)) return Gm;
        qu(this, b.f);
        return this.h ? (b.trackVisibility(Lm(a)), this.Ni) : 0 == b.translate(a) ? Gm : this.wg
    };
    u.Ni = function (a, b) {
        return this.b ? Mm(a) ? 0 == b.translate(a) ? Gm : this.wg : Fm : Gm
    };
    u.Uf = function (a, b) {
        b.g && this.l.remove(b.f);
        if (!this.b) return !1;
        if (this.l.has(b.$(), !1)) {
            var c = this.l;
            if (c.has(b.f, !1)) {
                var d = b.f, e = c.a[d];
                e || (e = c.b[d], c.a[d] = e);
                b.b = e;
                b.I = !0
            } else c.remove(b.f), b.g = !0;
            xt(b)
        } else if (c = this.l, b.g) c.remove(b.f); else if (b.o) {
            d = b.o.replace(/<a /g, "<span ").replace(/\/a>/g, "/span>");
            b.I = !0;
            delete b.o;
            b.o = null;
            b.b = [];
            e = document.createElement($a);
            Q(e, !1);
            e.innerHTML = 0 <= d.indexOf("<i>") ? d : "<b>" + d + "</b>";
            document.body.appendChild(e);
            d = [];
            var f;
            for (f = e.firstChild; f; f = f.nextSibling) if ("I" ==
                f.tagName) var h = wt(b, Lg(f), f.innerHTML); else if ("B" == f.tagName) {
                h || (h = wt(b, "", ""));
                if (1 == b.a.length) vt(h.aa, d, 0, f); else {
                    var k = d;
                    var l = f;
                    var m = b.a;
                    h = h.aa;
                    for (var n = [], r, w = l.firstChild; w; w = r) r = w.nextSibling, At(w);
                    for (r = l.firstChild; r; r = r.nextSibling) r.attributes && r.attributes.i ? (l = parseInt(r.attributes.i.nodeValue, 10), !isNaN(l) && 0 <= l && l < m.length && (m[l].ee && n[l] ? n[l].T += r.firstChild && 3 == r.firstChild.nodeType ? r.firstChild.nodeValue : Lg(r) : n[l] = vt(h, k, l, r))) : 3 == r.nodeType && h.push({
                        R: -1,
                        T: Le(r.nodeValue)
                    });
                    null != h && 0 < h.length && -1 == h[0].R && (1 == h.length ? h[0].R = 0 : (h[1].T = h[0].T + h[1].T, h.shift()))
                }
                h = void 0
            }
            f = b.b;
            for (k = 0; k < f.length - 1; ++k) m = f[k], h = He(m.aa[m.aa.length - 1].T), h = h.charCodeAt(h.length - 1), 12288 <= h && 12351 >= h || 65280 <= h && 65519 >= h || (m.aa[m.aa.length - 1].T += " ");
            tg(e);
            for (e = 0; e < b.a.length; ++e) e < d.length && e < b.l.length && null != d[e] && (f = b.l[e], k = d[e].start, null != k && (m = f.substring(0, f.length - Ge(f).length), " " == m && (m = ""), m && (k.T = m + Ge(k.T))), k = d[e].end, null != k && (f = f.substring(He(f).length), " " == f && (f = ""), f &&
            (k.T = He(k.T) + f)));
            1 != b.b.length || b.b[0].pf || (b.b[0].pf = b.f);
            c.write(b.f, b.b);
            xt(b)
        }
        b.H || (this.W = !1);
        c = b.g ? !0 : void 0;
        a.I += b.G;
        null != c && (a.qa = !0);
        b = Math.min(Math.floor(100 * a.I / a.f), 100);
        if (a.o != b || c) a.o = b, a.L ? (a.l(a.o, !0, c), a.W(a.I)) : a.l(a.o, !1, c);
        return !1
    };
    u.wg = function (a, b) {
        if (!this.b) return Gm;
        if (!Mm(a)) return Fm;
        if (1 < au(b)) {
            a = b.g[0];
            var c = b.b;
            if (a.c || 0 == c.length || null == a.a || 0 == a.a.length) a = null; else {
                for (var d = [], e = [], f = 0; f < a.a.length && f < c.length; ++f) {
                    var h = a.a[f];
                    h && h[0] && 200 == h[1] || (e.push(c[f]), d.push(a.g[f]))
                }
                a = 0 < e.length ? {vj: new Ot(d, !0), wj: e} : null
            }
            a = a ? new gu([a.vj], a.wj, b.f, b.a, b.c, b.xa, b.H, b.l) : null;
            null != a && qu(this, b.f, a, this.Dd)
        } else {
            a = !1;
            for (c = 0; c < b.g.length; ++c) d = b.g[c], d.c || 200 == d.b && d.a && d.a[0] ? d = d.f = !1 : (d.c = !0, d = d.f = !0), a = d || a;
            if (a) return this.Dd
        }
        d =
            this.cb();
        a = this.na();
        if (1 < b.b.length) if (c = b.g[0], e = d == Ia, d = b.b, 200 == c.b) for (f = 0; f < c.a.length && f < d.length; ++f) if ((h = c.a[f]) && 200 == h[1]) {
            var k = h[2], l = d[f], m = l, n = null != k && k == a;
            m.o = h[0];
            x(n) && (m.C = n);
            l.H = e && null == k
        } else d[f].g = !0; else for (a = 0; a < d.length; ++a) d[a].g = !0; else {
            c = new Nt(d == Ia);
            for (d = 0; d < b.g.length; ++d) h = b.g[d], e = a, f = c, 200 == h.b && h.a && h.a[0] ? (h = h.a[0], f.a.push(h[0]), h = h[2], f.b = f.b && null != h && h == e, null != h && (f.f = !1)) : 500 != h.b && (f.c = !0);
            null != b.B && (c.a.push(b.B), b.B = null);
            if (a = b.b[0]) d = c.b, a.o =
                c.$(), x(d) && (a.C = d), a.H = c.f, a.g = c.c
        }
        if (this.h) {
            a = C(this.Uf, this);
            for (c = 0; c < b.b.length; c++) a(b.f, b.b[c]);
            for (c = 0; c < b.s.length; c++) a(b.f, b.s[c]);
            iu(b);
            b.I = !0;
            b.C && b.l && (b = b.l, 0 == --b.b && eu(b.a))
        }
        return Gm
    };

    function nu(a) {
        a.K && a.K.disconnect();
        a.va && a.va.reset();
        a.b && (a.H.stop(), a.b = !1, a.G = !1);
        if (a.o.length) {
            for (var b = 0; b < a.o.length; ++b) a.o[b].M();
            a.o = []
        }
        null != a.C && (a.C.restore(), a.C = null);
        null != a.da && (a.da.restore(), a.da = null)
    }

    function pu(a, b) {
        a.getAttribute("xml:lang") && a.setAttribute("xml:lang", b);
        a.getAttribute("lang") && a.setAttribute("lang", b)
    };

    function su(a, b, c, d, e, f, h, k, l, m) {
        R.call(this);
        this.I = b || null;
        this.L = !!c;
        this.C = d || "transparent";
        this.g = f || "";
        b = h || {fetchStart: 0, Qk: 0};
        a = b.fetchStart || 0;
        b = b.fetchEnd || 0;
        this.G = a && b ? b - a : 0;
        this.K = Fc() - Dq;
        this.l = !1;
        this.b = new Qr(e || "", void 0, f, l, m);
        this.H = new Bm(1);
        this.s = new qt;
        this.f = null;
        this.h = !0;
        this.o = null != v.IntersectionObserver;
        this.B = k || null;
        new gi(this);
        e = new Tq;
        f = new Vq(C(this.b.g, this.b, e.register()));
        this.qd = Wq(f, e.delay(C(this.qd, this)));
        this.md = Wq(f, e.delay(C(this.md, this)));
        this.de = Wq(f,
            e.delay(C(this.de, this)));
        this.restore = Wq(f, e.delay(C(this.restore, this)));
        f.finish();
        e.finish()
    }

    D(su, R);
    ir(14097, su.prototype, {
        df: function () {
            br(this.b.c ? "te_afas" : "te_afau")
        }
    });
    u = su.prototype;
    u.Ua = function () {
        return this.b.c
    };
    u.qd = function (a, b) {
        if (this.b.Ua()) {
            var c = this.b, d = {alpha: !0};
            b && (d.hl = b);
            c.f.send(d, a)
        } else this.df(), a(null)
    };
    u.md = function (a) {
        var b = document.documentElement.lang;
        if (b) a(b); else if (this.b.Ua()) {
            var c = new hn(document.body, !1, !1, 1, 1);
            b = [];
            try {
                for (var d = 0, e = this.b.b.Ng; b.length + d < e;) {
                    var f = c.next();
                    if (1 == c.c && Kt(f)) c.g(); else if (3 == f.nodeType) {
                        var h = xd(Ee(f.nodeValue));
                        h && (b.push(h), d += h.length)
                    }
                }
            } catch (k) {
                if (k != wj) throw k;
            }
            e = this.b;
            b = b.join(" ");
            a = e.b.ed(a);
            e.b.sa.send({q: b.substring(0, e.b.Ng), sl: Ia, tl: "en"}, a)
        } else this.df(), a(null, !0)
    };
    u.de = function (a, b, c, d, e) {
        var f = Fc();
        jr();
        if (!a || hr(a, b)) a = Ia;
        if (e || a != this.a || b != this.c) this.s = new qt;
        this.a = a;
        this.c = b;
        this.b.Ua() ? (d = d || document.documentElement, this.f && this.f.M(), this.B.reset(), this.f = new mu(d, this.b, this.I, this.L, this.C, !0, this.H, this.s, this.o, this.B), this.f.jb = this.l, this.h = !0, this.f.translate(a, b, c, e, C(this.cj, this, f, a, b))) : (this.df(), c(0, !1, !0))
    };
    u.Fj = function () {
        return !!this.f && this.f.b
    };
    u.gh = jc("l");
    u.restore = function () {
        jr();
        this.b.Ua() && this.f && this.f.restore()
    };
    u.F = function () {
        kr();
        su.m.F.call(this);
        this.b.M();
        this.f = this.b = null;
        this.s = new qt
    };
    u.cj = function (a, b, c, d) {
        this.h && (this.h = !1, b = {
            sl: b,
            tl: c,
            textlen: d
        }, this.l && (b.ctt = "1"), "" != this.g && (b.sp = this.g), 0 != this.g.indexOf("nmt") && (b.sp = "" != this.g ? "nmt," + this.g : "nmt"), b.ttt = Fc() - a, b.ttl = this.K, this.G && (b.ttf = this.G), this.o && (b.sr = 1), br("te_time", b))
    };

    function tu(a) {
        T.call(this, a);
        this.l = new gi(this)
    }

    D(tu, T);
    u = tu.prototype;
    u.D = function () {
        var a = Og(this.b, "select");
        a.className = "goog-te-combo";
        a.setAttribute("aria-label", Z.Pf);
        this.S(a)
    };
    u.O = function () {
        tu.m.O.call(this);
        this.bg()
    };
    u.bg = function () {
        S(this.j(), Pa, Zq(this, Pa));
        this.dispatchEvent(Ab)
    };
    u.Z = function () {
        tu.m.Z.call(this);
        this.l.M();
        this.l = null
    };

    function uu(a, b) {
        a.j().parentNode != b && (a.j().parentNode.removeChild(a.j()), b.appendChild(a.j()))
    }

    u.Tc = function (a) {
        this.b.Qc(this.j());
        for (var b in a) if (a[b] !== Object.prototype[b]) {
            var c = this.b.D(qa, {value: b});
            this.b.ib(c, a[b]);
            this.j().appendChild(c)
        }
        this.j().selectedIndex = 0
    };
    u.Ba = function () {
        return this.j().value
    };
    u.za = function (a) {
        if (this.j().value != a) for (var b = 0, c; c = this.j().options.item(b); ++b) if (c.value == a) {
            this.j().selectedIndex = b;
            break
        }
    };
    u.ae = function (a) {
        if ("undefined" == A(a)) return this.j().options.item(this.j().selectedIndex).text;
        for (var b = 0, c; c = this.j().options.item(b); ++b) if (c.value == a) return c.text
    };
    u.ka = function (a) {
        this.j().disabled = !a
    };

    function vu(a) {
        tu.call(this, a)
    }

    D(vu, tu);
    vu.prototype.Eb = function (a) {
        this.Tc.call(this, a)
    };

    function wu(a, b) {
        tu.call(this, b);
        this.a = a && gd(a) || {};
        this.a.uf = this.a.uf || 11;
        this.a.Yd = 0 != this.a.Yd;
        this.a.Va || (this.a.Va = Oq)
    }

    D(wu, tu);
    u = wu.prototype;
    u.hd = function () {
        throw Error("Not implemented.");
    };
    u.D = function () {
        this.hd();
        this.o = this.j();
        this.f = jg(na, {frameBorder: 0, "class": "goog-te-menu-frame skiptranslate", title: Z.Pf});
        this.f.style.visibility = gc;
        Q(this.f, !1);
        document.body.appendChild(this.f)
    };
    u.bg = function () {
        var a = qd.test(Aq) ? Tb : "ltr", b = nr(this.a.Va), c = V(this, "menuBody");
        this.l.w(this.f, Ab, this.Kj);
        cr(this.f, C(function () {
            var d = Dg(this.f);
            var e = qk(ja + X(Ek(b)) + '"></head><body scroll="no" style="margin:0px;overflow:hidden" dir="' + X(a) + '" marginHeight=0 marginWidth=0 leftMargin=0 topMargin=0 border=0><div id="' + X(c) + '" class="goog-te-menu"></div></body>');
            e = hk(e);
            d.write(ne(e));
            d.close()
        }, this))
    };
    u.Kj = function () {
        this.c = new Xf(Dg(this.f));
        this.L = this.c.j(V(this, "menuBody"));
        this.l.w(this.o, Ta, this.Re);
        F ? this.l.w(this.f, La, this.Cd) : this.l.w(Eg(this.f), La, this.Cd);
        this.dispatchEvent(Ab)
    };
    u.Z = function () {
        wu.m.Z.call(this);
        tg(this.f);
        this.o = this.P = this.h = this.L = this.c = this.f = null
    };
    u.ug = function (a) {
        this.g != a.currentTarget.value && (this.za(a.currentTarget.value), this.dispatchEvent(Pa));
        this.Cd()
    };
    u.Re = function () {
        xu(this);
        Eg(this.f).focus();
        this.W = !0
    };
    u.Cd = function () {
        this.W && (this.W = !1, xu(this, !1), ig(O(this.o)).focus())
    };
    u.rf = ic();
    u.sf = ic();

    function xu(a, b) {
        if ("undefined" == typeof b || b) {
            a.sf();
            b = ch(a.o, window);
            var c = b.y + a.o.offsetHeight, d = b.y - a.C.height, e = b.x, f = b.x + a.o.offsetWidth - a.C.width;
            if (F && !K("7.0")) {
                var h = document.body;
                c -= h.offsetTop;
                d -= h.offsetTop;
                e -= h.offsetLeft;
                f -= h.offsetLeft
            } else h = gg(document), c -= h.y, d -= h.y, e -= h.x, f -= h.x;
            h = eg(window);
            b.y = b.y <= h.height - a.C.height ? c : d;
            b.y > h.height - a.C.height && (b.y = h.height - a.C.height);
            0 > b.y && (b.y = 0);
            qd.test(Aq) ? b.x = 0 <= f ? f : e : b.x = e <= h.width - a.C.width ? e : f;
            b.x > h.width - a.C.width && (b.x = h.width -
                a.C.width);
            0 > b.x && (b.x = 0);
            Wg(a.f, b);
            Q(a.f, !0);
            yu(a)
        } else a.rf(), Q(a.f, !1)
    }

    u.Ba = q("g");
    u.Tc = function (a) {
        this.c.Qc(this.L);
        Q(this.f, !0);
        this.da = a;
        this.h = [];
        for (var b in a) if (a[b] !== Object.prototype[b]) if ("---" == a[b]) {
            var c = {link: this.c.D(g, {className: "goog-te-menu2-separator", value: b}), Si: !0};
            this.h.push(c)
        } else {
            c = {link: this.c.D("A", {className: ob, href: xb, value: b})};
            this.h.push(c);
            var d = this.c.D(g, {style: "white-space:nowrap"});
            this.c.appendChild(c.link, d);
            this.a.Yd && this.c.appendChild(d, this.c.D(ua, {className: "indicator"}, "\u203a"));
            this.c.appendChild(d, this.c.D(ua, {className: "text"},
                a[b]));
            this.l.w(c.link, Ta, this.ug)
        }
        a = this.h.length - 1;
        a = Math.round((a - a % this.a.uf) / this.a.uf) + 1;
        this.P = this.c.D("TABLE", {cellspacing: 0, cellpadding: 0, border: 0});
        c = this.c.D("TBODY");
        b = this.c.D("TR", {valign: "top"});
        this.L.className = "goog-te-menu2";
        this.c.appendChild(this.L, this.P);
        this.c.appendChild(this.P, c);
        this.c.appendChild(c, b);
        for (d = c = 0; c < a; ++c) {
            var e = this.c.D("TD");
            this.c.appendChild(b, e);
            for (var f = 0; 11 > f && d < this.h.length; ++f, ++d) this.c.appendChild(e, this.h[d].link);
            c != a - 1 && (e = this.c.D("TD", {"class": "goog-te-menu2-colpad"},
                "\u00a0"), this.c.appendChild(b, e))
        }
        this.g = null;
        this.za(this.h[0].link.value);
        yu(this);
        Q(this.f, !1)
    };
    u.ae = function (a) {
        a = "undefined" == A(a) ? this.g : a;
        return this.da[a]
    };
    u.tf = ic();
    u.za = function (a) {
        if (this.g != a) {
            this.ae(a) && (this.g = a, this.tf());
            for (var b = 0; b < this.h.length; ++b) {
                var c = this.h[b];
                c.Si || (c.link.className = c.link.value == a && this.a.Yd ? ob : "goog-te-menu2-item")
            }
        }
    };

    function yu(a) {
        lh(a.L, kh(a.P));
        lh(a.f, kh(a.L));
        a.C = kh(a.f)
    }

    function zu(a, b) {
        wu.call(this, a, b)
    }

    D(zu, wu);
    u = zu.prototype;
    u.hd = function () {
        var a = this.b.D("a", {"aria-haspopup": "true"});
        a.className = nb;
        a.href = xb;
        this.H = this.b.D(ua);
        a.appendChild(this.H);
        this.K = this.b.D("IMG", {
            src: wb,
            alt: "",
            style: "background-image:url(" + Lq + ");background-position:-14px 0px;border:none",
            width: 14,
            height: 14
        });
        a.appendChild(this.K);
        this.S(a)
    };
    u.rf = function () {
        P(this.K, Ka, "-14px 0px")
    };
    u.sf = function () {
        P(this.K, Ka, "0px 0px")
    };
    u.Z = function () {
        zu.m.Z.call(this);
        this.K = this.H = null
    };
    u.tf = function () {
        this.b.ib(this.H, this.ae(this.g) || "")
    };
    u.Eb = function (a) {
        this.Tc.call(this, a)
    };

    function Au(a, b) {
        wu.call(this, a, b)
    }

    D(Au, wu);
    u = Au.prototype;
    u.hd = function () {
        var a = this.b.D("a", {"aria-haspopup": "true"});
        a.className = nb;
        a.href = xb;
        this.H = this.b.D(ua);
        a.appendChild(this.H);
        a.appendChild(this.b.D("IMG", {src: wb, alt: "", width: 1, height: 1}));
        a.appendChild(this.b.D(ua, {style: "border-left:1px solid #bbb"}, "\u200b"));
        a.appendChild(this.b.D("IMG", {src: wb, alt: "", width: 1, height: 1}));
        this.K = this.b.D("span", {style: "color:#767676", "aria-hidden": "true"}, "\u25bc");
        a.appendChild(this.K);
        this.S(a)
    };
    u.rf = function () {
        P(this.K, "color", "#9b9b9b")
    };
    u.sf = function () {
        P(this.K, "color", "#d5d5d5")
    };
    u.Z = function () {
        Au.m.Z.call(this);
        this.K = this.H = null
    };
    u.tf = function () {
        this.b.ib(this.H, this.ae(this.g) || "")
    };
    u.Eb = function (a) {
        this.Tc.call(this, a)
    };

    function Bu(a, b) {
        wu.call(this, a, b);
        this.a.Yd = !1
    }

    D(Bu, wu);
    Bu.prototype.hd = function () {
        var a = Og(this.b, $a);
        a.className = "goog-te-button";
        var b = this.b.D(g, {style: "background: url(" + Kq + ") repeat-x 0 -39px"});
        a.appendChild(b);
        this.H = Og(this.b, Na);
        b.appendChild(this.H);
        this.S(a)
    };
    Bu.prototype.fh = function (a) {
        qg(this.H);
        this.H.appendChild(this.b.a.createTextNode(String(a + "\u00a0\u25bc")))
    };
    Bu.prototype.Z = function () {
        Bu.m.Z.call(this);
        this.H = null
    };
    Bu.prototype.ug = function (a) {
        this.za(a.currentTarget.value);
        this.dispatchEvent(Pa);
        this.Cd()
    };

    function Cu(a, b) {
        T.call(this, b);
        this.a = a && gd(a) || {};
        this.c = new gi(this)
    }

    D(Cu, T);
    var Du = {Hk: 0, hk: 1, xk: 2};
    u = Cu.prototype;
    u.D = function () {
        var a = Og(this.b, $a);
        M(a, Vb);
        M(a, "goog-te-gadget");
        a.dir = qd.test(Aq) ? Tb : "ltr";
        Q(a, !1);
        if (2 == this.a.Rb) a.innerHTML = ds({id: V(this, Zb), Yg: "", Xg: ""}); else {
            var b = Z.Ch(es() || "");
            a.innerHTML = ds({id: V(this, Zb), Yg: "", Xg: lr(1 == this.a.Rb ? "&nbsp;&nbsp;" + b : b)})
        }
        this.S(a)
    };
    u.O = function () {
        Cu.m.O.call(this);
        this.f = 2 == this.a.Rb ? new Au(null, this.b) : new vu(this.b);
        this.c.w(this.f, Pa, Zq(this, Sa));
        this.c.w(this.f, Ab, this.Ij);
        var a = this.b.j(V(this, Zb));
        if (2 == this.a.Rb) {
            var b = this.b.D("IMG", {src: wb, "class": "goog-te-gadget-icon", alt: ""});
            b.style.backgroundImage = "url(" + Lq + ")";
            b.style.backgroundPosition = "-65px 0px";
            var c = this.b.D(ua, {style: "vertical-align: middle"});
            a.appendChild(b);
            a.appendChild(c);
            this.f.fa(c);
            a.style.whiteSpace = "nowrap";
            a.className = "goog-te-gadget-simple"
        } else this.f.fa(a),
        1 == this.a.Rb && (a.style.display = "inline")
    };
    u.Ij = function () {
        if (2 == this.a.Rb) {
            var a = this.f, b = this.b.j(V(this, Zb));
            a.l.ca(a.o, Ta, a.Re);
            a.o = b;
            a.l.w(a.o, Ta, a.Re)
        }
        this.dispatchEvent(Ab)
    };
    u.Z = function () {
        Cu.m.Z.call(this);
        this.c.M();
        this.c = null;
        this.f.M();
        this.f = null
    };
    u.na = function () {
        return this.f.Ba()
    };
    u.ua = function (a) {
        "" == a ? this.H && this.f.Eb(this.H) : this.C && this.f.Eb(this.C);
        this.f.za(a)
    };
    u.J = function (a) {
        Q(this.j(), a)
    };
    u.ka = function (a) {
        this.f.ka(a)
    };
    u.Af = function (a, b) {
        this.H = a;
        this.C = b
    };

    function Eu() {
        Wf()
    }

    Eu.prototype.fa = function (a) {
        a({}, {});
        this.a()
    };

    function Fu(a, b) {
        b = b || {};
        var c = b.top, d = b.left, e = b.bottom, f = b.right, h = b.id;
        b = rk("." + Fk(b.className) + " {z-index:9999999; overflow:visible; position:fixed; _position:absolute;" + (c || 0 == c ? "top:" + Fk(c) + "px; _top:expression((" + Fk(c) + "+(hack1=document.documentElement.scrollTop||document.body.scrollTop))+'px');" : "top:auto;") + (d || 0 == d ? "left:" + Fk(d) + "px; _left:expression((" + Fk(d) + "+(hack2=document.documentElement.scrollLeft||document.body.scrollLeft))+'px');" : "left:auto;") + (e || 0 == e ? "bottom:" + Fk(e) + "px; _top:expression((-" +
            Fk(e) + ca + String(h).replace(Lk, Jk) + "').offsetHeight+(hack3=document.documentElement.clientHeight||document.body.clientHeight)+(hack4=document.documentElement.scrollTop||document.body.scrollTop))+'px');" : "bottom:auto;") + (f || 0 == f ? "right:" + Fk(f) + "px; _left:expression((-" + Fk(f) + ca + String(h).replace(Lk, Jk) + "').offsetWidth+(hack5=document.documentElement.clientWidth||document.body.clientWidth)+(hack6=document.documentElement.scrollLeft||document.body.scrollLeft))+'px');" : "right:auto;") + "}");
        a.a();
        return ce(b.toString())
    }

    Eu.prototype.a = z;

    function Gu(a, b) {
        T.call(this, b);
        this.a = a && gd(a) || {};
        this.a.Va || (this.a.Va = Oq);
        this.c = new gi(this)
    }

    D(Gu, T);
    var Hu = {Bk: 1, Ck: 2, Wj: 3, Vj: 4};
    u = Gu.prototype;
    u.D = function () {
        var a = Og(this.b, $a);
        this.ga = !1;
        Q(a, !1);
        var b = V(this, Wa);
        a.innerHTML = qk('<iframe id="' + X(b) + '" frameBorder=0 src="javascript:\'\'" class="goog-te-ftab-frame skiptranslate" style="visibility:visible"></iframe>');
        this.S(a)
    };
    u.O = function () {
        Gu.m.O.call(this);
        var a = qd.test(Aq) ? Tb : "ltr", b = nr(this.a.Va), c = V(this, ec);
        this.j().id = V(this, "floatContainer");
        var d = {id: this.j().id, className: "goog-te-ftab-float"};
        this.j().className += " goog-te-ftab-float";
        switch (this.a.ld) {
            case 2:
                var e = hb;
                d.top = 0;
                d.right = 20;
                break;
            case 3:
                e = gb;
                d.bottom = 0;
                d.right = 20;
                break;
            case 4:
                e = gb;
                d.bottom = 0;
                d.left = 20;
                break;
            default:
                e = hb, d.top = 0, d.left = 20
        }
        fh(Fu(new Eu, d), this.j());
        this.l = this.b.j(V(this, Wa));
        this.c.w(this.l, Ab, this.Jj);
        cr(this.l, C(function () {
            var f =
                Dg(this.l);
            var h = e;
            h = qk(ja + X(Ek(b)) + '"></head><body class="goog-te-ftab ' + X(h) + '" scroll="no" style="overflow:hidden" dir="' + X(a) + '"><a id="' + X(c) + '" href="javascript:void(0)" class="goog-te-ftab-link"><img src="' + X(Ck(wb)) + aa + X(Ck(Lq)) + ');background-position:-65px 0px"><span>' + pk(Z.Rf) + "</span></a></body>");
            h = hk(h);
            f.write(ne(h));
            f.close()
        }, this))
    };
    u.Jj = function () {
        this.f = (new Xf(Dg(this.l))).j(V(this, ec));
        this.c.w(this.f, Ta, Zq(this, "clk_trans"));
        Q(this.j(), !0);
        var a = kh(this.f);
        Q(this.j(), !1);
        lh(this.l, a);
        lh(this.j(), a);
        this.dispatchEvent(Ab)
    };
    u.Z = function () {
        Gu.m.Z.call(this);
        this.c.M();
        this.c = null;
        tg(this.l);
        this.f = this.l = null
    };
    u.isVisible = q("ga");
    u.J = function (a) {
        this.ga = a;
        Q(this.j(), a)
    };

    function Iu(a, b) {
        T.call(this, b);
        this.h = new gi(this);
        this.a = a && gd(a) || {};
        this.a.Va || (this.a.Va = Oq);
        this.a.Cf = !1;
        P(this.b.a.body, Nb, "relative");
        wf || P(this.b.a.body, "minHeight", "100%");
        P(this.b.a.documentElement, "height", "100%");
        P(this.b.a.body, "top", "0px");
        F && (window._bannerquirkfixleft = -parseInt("0" + this.b.a.body.leftMargin, 10), window._bannerquirkfixtop = -parseInt("0" + this.b.a.body.topMargin, 10) - 40)
    }

    D(Iu, T);
    u = Iu.prototype;
    u.fa = function () {
        var a = this.b.a.body.firstChild;
        wi(this, a.parentNode, a)
    };
    u.D = function () {
        var a = Og(this.b, $a);
        this.ga = !1;
        Q(a, !1);
        M(a, Vb);
        var b = V(this, Wa);
        a.innerHTML = qk('<iframe id="' + X(b) + '" class="goog-te-banner-frame skiptranslate" frameBorder=0 src="javascript:\'\'" style="visibility:visible"></iframe>');
        this.S(a)
    };
    u.O = function () {
        Iu.m.O.call(this);
        var a = qd.test(Aq) ? Tb : "ltr", b = nr(this.a.Va), c = V(this, "promptSection"), d = V(this, "confirm"),
            e = V(this, Ob), f = V(this, "progressValue"), h = V(this, "cancel"), k = V(this, "finishSection"),
            l = V(this, "restore"), m = V(this, "errorSection"), n = V(this, "errorContent"), r = V(this, "close"),
            w = V(this, "noAutoPopup"), H, G = [];
        this.a.Cf && G.push(cs({id: V(this, Pb)}));
        G.push(cs({id: V(this, Qb)}));
        var ea = lr(Z.Mh.apply(null, G));
        G = [];
        this.a.Cf && G.push(cs({id: V(this, bb)}));
        G.push(cs({id: V(this, cb)}));
        var Wl =
            lr(Z.Hh.apply(null, G));
        this.a.kh && (H = this.a.kh);
        this.l = this.b.j(V(this, Wa));
        this.h.w(this.l, Ab, this.Gj);
        cr(this.l, C(function () {
            var ff = Dg(this.l);
            var tb = H;
            tb = qk(ja + X(Ek(b)) + '"></head><body class="goog-te-banner" scroll="no" border=0 dir="' + X(a) + '"><table border=0 cellspacing=0 cellpadding=0 width=100% height=100%><tr valign=middle><td width=1 nowrap><a href="' + X(xk(vb)) + '" class="goog-logo-link" target="_blank"><img src="' + X(Ck("https://www.gstatic.com/images/branding/googlelogo/1x/googlelogo_color_68x28dp.png")) +
                '" alt="Google ' + X(Z.Wc) + '"></a></td>' + (tb ? '<td width=1><img src="' + X(Ck(wb)) + '" width="9" height="15" title="' + X(tb) + '" alt="' + X(tb) + aa + X(Ck(Lq)) + ');background-position:-56px 0px;margin:0 4px"></td>' : "") + '<td class="goog-te-banner-margin"></td><td><table border=0 cellspacing=0 cellpadding=0 height=100%><tr id="' + X(c) + '" style="display:none" valign=middle><td nowrap><span class="goog-te-banner-content">' + pk(ea) + ia + X(d) + '"><b>' + pk(Z.Rf) + '</b></button></div></div></td><td class="goog-te-banner-margin"></td><td nowrap><div class="goog-te-button"><div><button id="' +
                X(w) + '"></button></div></div></td></tr><tr id="' + X(e) + '" style="display:none" valign=middle><td><span class="goog-te-banner-content">' + pk(Z.Ih) + '&nbsp;<span dir="ltr">(<b id="' + X(f) + '"></b>%)</span>&nbsp;<img src="' + X(Ck(Nq)) + '"></span></td><td class="goog-te-banner-margin"></td><td nowrap><div class="goog-te-button"><div><button id="' + X(h) + '">' + pk(Z.Kf) + ha + X(k) + '" style="display:none"><td><span class="goog-te-banner-content">' + pk(Wl) + ia + X(l) + '">' + pk(Z.Dh) + ha + X(m) + '" style="display:none" valign=middle><td><span id="' +
                X(n) + '" class="goog-te-banner-content"></span></td></tr></table></td><td><td class="goog-te-banner-margin"></td></td><td width=1 id="options"></td><td width=1><a id="' + X(r) + '" class="goog-close-link" href="javascript:void(0)" title="' + X(Z.Lf) + '"><img src="' + X(Ck(wb)) + '" width="15" height="15" alt="' + X(Z.Lf) + aa + X(Ck(Lq)) + ');background-position:-28px 0px"></a></td></tr></table></body>');
            tb = hk(tb);
            ff.write(ne(tb));
            ff.close()
        }, this))
    };
    u.Gj = function () {
        this.c = new Xf(Dg(this.l));
        Ju(this, Z.Of);
        if (this.a.Va == Oq) {
            var a = "url(" + Kq + ")";
            P(this.c.a.body, Ja, a);
            for (var b = this.c.a.getElementsByTagName(Na), c = 0; c < b.length; ++c) {
                var d = b[c].parentNode;
                P(d, Ja, a);
                P(d, "backgroundRepeat", "repeat-x");
                P(d, Ka, "0 -39px")
            }
        }
        this.a.Cf && (this.g = new zu(this.a, this.c));
        this.f = new zu(this.a, this.c);
        this.o = new Bu(this.a, this.c);
        this.h.w(this.c.j(V(this, "confirm")), Ta, Zq(this, "clk_confirm"));
        this.h.w(this.c.j(V(this, "cancel")), Ta, Zq(this, "clk_cancel"));
        this.h.w(this.c.j(V(this,
            "restore")), Ta, Zq(this, "clk_restore"));
        this.h.w(this.c.j(V(this, "close")), Ta, Zq(this, "clk_close"));
        this.L = this.c.j(V(this, "noAutoPopup"));
        this.h.w(this.L, Ta, Zq(this, "clk_no_ap"));
        this.g && this.h.w(this.g, Pa, Zq(this, "chg_src_lang"));
        this.h.w(this.f, Pa, Zq(this, Sa));
        this.h.w(this.o, Pa, this.Di);
        a = new Tq(C(this.Hj, this));
        this.g && this.h.w(this.g, Ab, a.register());
        this.h.w(this.f, Ab, a.register());
        this.h.w(this.o, Ab, a.register());
        a.finish();
        this.g && this.g.fa(this.c.j(V(this, Pb)));
        this.f.fa(this.c.j(V(this,
            Qb)));
        this.o.fa(this.c.j("options"))
    };
    u.Hj = function () {
        this.o.fh(Z.Ah);
        this.o.Tc({turn_off_site: Z.Kh, s1: "---", learn_more: Z.zh});
        this.dispatchEvent(Ab)
    };
    u.Di = function () {
        switch (this.o.Ba()) {
            case "learn_more":
                window.open(Rq, "_blank");
                break;
            case "turn_off_site":
                this.dispatchEvent(Ua)
        }
    };
    u.Z = function () {
        this.J(!1);
        Iu.m.Z.call(this);
        this.h.M();
        this.h = null;
        this.g && (this.g.M(), this.g = null);
        this.f.M();
        this.f = null;
        this.o.M();
        this.o = null;
        tg(this.l);
        this.yc = this.c = null
    };
    u.cb = function () {
        return this.g ? this.g.Ba() : ""
    };
    u.na = function () {
        return this.f.Ba()
    };
    u.Tb = function (a) {
        this.g && this.g.za(a);
        this.K && this.K[a] && this.c.ib(this.L, Z.Jh(this.K[a]))
    };
    u.ua = function (a) {
        this.f.za(a)
    };

    function Ku(a, b, c, d) {
        if (a.yc != b) {
            a.yc = b;
            if (0 == b) {
                a.g && uu(a.g, a.c.j(V(a, Pb)));
                if (a.H) {
                    var e = a.na();
                    a.f.Eb(a.H);
                    a.ua(e)
                }
                uu(a.f, a.c.j(V(a, Qb)))
            } else 2 == b && (a.g && uu(a.g, a.c.j(V(a, bb))), a.C && (e = a.na(), a.f.Eb(a.C), a.ua(e)), uu(a.f, a.c.j(V(a, cb))));
            e = {};
            e[-1] = a.c.j(V(a, "errorSection"));
            e[0] = a.c.j(V(a, "promptSection"));
            e[1] = a.c.j(V(a, Ob));
            e[2] = a.c.j(V(a, "finishSection"));
            for (var f in e) e[f] !== Object.prototype[f] && Q(e[f], f == b)
        }
        c && a.J(!0);
        a.L.parentNode.parentNode.style.display = d ? "block" : Hb
    }

    u.isVisible = q("ga");
    u.J = function (a) {
        if (this.ga != a) {
            this.ga = a;
            if (F) var b = parseInt("0" + this.b.a.body.leftMargin, 10),
                c = parseInt("0" + this.b.a.body.topMargin, 10);
            var d = "BackCompat" == this.b.a.compatMode;
            a ? (P(this.b.a.body, "top", "40px"), Q(this.j(), !0), F && (K("7.0") ? (window._bannerquirkfixleft = window._bannerquirkfixtop = 0, d && (this.b.a.body.topMargin = c + 40)) : d ? (this.b.a.body.topMargin = c + 40, window._bannerquirkfixleft = window._bannerquirkfixtop = 0) : (window._bannerquirkfixleft = -b, window._bannerquirkfixtop = -c - 40))) : (P(this.b.a.body, "top",
                "0px"), Q(this.j(), !1), d && 40 <= c && (this.b.a.body.topMargin = c - 40))
        }
    };
    u.yf = function (a) {
        this.c.ib(this.c.j(V(this, "progressValue")), a)
    };

    function Ju(a, b) {
        a.c.ib(a.c.j(V(a, "errorContent")), b)
    }

    u.Af = function (a, b) {
        this.H = a;
        this.C = b;
        this.f.Eb(a)
    };

    function Lu(a, b) {
        R.call(this);
        A(a) == Xb && (b = a, a = {});
        A(b) == Xb && (b = Yf(document, String(b)));
        this.da = b;
        this.h = new gi(this);
        this.Vb = this.W = void 0;
        a = Object(a);
        this.g = Ia;
        !(b = window.parent != window) && (b = (!window.external || !window.external.googleToolbarVersion || 6.2 > parseFloat(window.external.googleToolbarVersion)) && (!window.gtbExternal || !window.gtbExternal.isTranslateEnabled || !window.gtbExternal.isTranslateEnabled())) && (b = navigator.appVersion && navigator.appVersion.match(/\sChrome\/((\d+)\.(\d+)\.[\d\.]+)\s/),
            b = !(b && b[2] && b[3] && 4001 <= 1E3 * Number(b[2]) + Number(b[3])));
        this.a = {
            ne: b,
            eg: !1,
            oe: null,
            bd: null,
            Xe: [],
            dg: [],
            Xh: !1,
            ic: !1,
            $a: "",
            fg: !1,
            Ae: "",
            Rb: 0,
            $f: !1
        };
        this.qa = {Va: Oq, kh: "https://" == Jq ? Z.Fh : null};
        this.P = {Va: Oq, ld: null};
        a && ("autoDisplay" in a && (this.a.ne = this.a.ne && !!a.autoDisplay), "multilanguagePage" in a && (this.a.ic = !!a.multilanguagePage), "gaTrack" in a && (this.a.fg = !!a.gaTrack), "layout" in a && (this.a.Rb = a.layout), a.pageLanguage && (this.a.Wd = $q(a.pageLanguage)), a.includedLanguages && (this.a.Xe = a.includedLanguages.split(",")),
        a.excludedLanguages && (this.a.dg = a.excludedLanguages.split(",")), this.a.Wd && (this.g = this.a.Wd), a.key && (this.a.$a = a.key), a.gaId && (this.a.Ae = a.gaId), this.P.ld = Number(a.floatPosition) || this.P.ld, "disableAutoTranslation" in a && (this.a.$f = !!a.disableAutoTranslation), a.jwtToken && (this.W = new Or(a.jwtToken)), a.jwtTokenProvider && (this.W = new Pr(a.jwtTokenProvider)), a.translateErrorHandler && (this.Vb = a.translateErrorHandler));
        !this.a.$f && Mu(this) && (this.a.eg = !0);
        this.s = {};
        if ((a = document.cookie.match(/(^|; )googtransopt=(.*?)(;|$)/)) &&
            a[2]) for (this.s = {}, a = Je(a[2]).split("|"), b = 0; b < a.length; ++b) {
            var c = a[b].split("=");
            c[0] && (this.s[c[0]] = c[1])
        }
        this.va = new ft({$a: this.a.$a, Kb: 1, Bf: !0, Vk: Qq}, {client: Gq, u: window.location.href});
        this.B = new su(void 0, this.va, void 0, void 0, this.a.$a, void 0, void 0, new fu, this.W, this.Vb);
        this.G = !1;
        this.h.w(window, "unload", this.M);
        this.Ld()
    }

    D(Lu, R);

    function Mu(a) {
        function b(f, h) {
            if (f = Je(f).match("^\\((([a-zA-Z\\-_]*)\\|)?([a-zA-Z\\-_]*)\\)|^/(([a-zA-Z\\-_]*)/)?([a-zA-Z\\-_]*)")) {
                if (f[3]) return h.a.oe = f[2], h.a.bd = f[3], !0;
                if (f[6]) return h.a.oe = f[5], h.a.bd = f[6], !0
            }
            return !1
        }

        var c = {
            url: function () {
                var f = window.location.href.match(/#.*googtrans(.*)/);
                return f && f[1]
            }, cookie: function () {
                var f = document.cookie.match(/(^|; )googtrans=(.*?)(;|$)/);
                return f && f[2]
            }
        }, d;
        for (d in c) if (c[d] !== Object.prototype[d]) {
            var e = c[d]();
            if (e && b(e, a)) return d
        }
        return ""
    }

    function Nu(a, b) {
        for (var c = window.location.hostname.split("."); 2 < c.length;) c.shift();
        c = ";domain=" + c.join(".");
        null != b ? a = a + "=" + b : (b = new Date, b.setTime(b.getTime() - 1), a = a + "=none;expires=" + b.toGMTString());
        a += ";path=/";
        document.cookie = a;
        try {
            document.cookie = a + c
        } catch (d) {
        }
    }

    function Ou(a, b) {
        var c = null;
        x(b) && (c = x(a) ? "/" + a + "/" + b : "/" + b);
        Nu("googtrans", c)
    }

    u = Lu.prototype;
    u.wi = function (a) {
        this.c = $q(Aq);
        this.H = a || {};
        this.o = {};
        this.K = {};
        a = !this.a.Xe.length;
        var b = Sq(this.a.Xe), c = Sq(this.a.dg);
        this.o[Aq] = "";
        this.K[Aq] = "";
        for (var d in this.H.tl) this.H.tl[d] === Object.prototype[d] || !(a || d in b) || d in c || (this.K[d] = this.H.tl[d], d == this.a.Wd && !this.a.ic) || (this.o[d] = this.H.tl[d]);
        this.o[Aq] || delete this.o[Aq];
        this.K[Aq] || delete this.K[Aq];
        this.la = gd(this.H.sl)
    };
    u.ri = function (a) {
        a && (this.g = $q(a))
    };
    u.xi = function () {
        delete this.I;
        if (this.H) {
            this.g = this.g || this.a.oe;
            this.c = this.a.bd || this.c;
            var a = this.a.eg || this.a.ne && this.g != this.c && !(this.g in Eq) && "1" != this.s.os && "1" != this.s["o" + this.g];
            "zh-TW" == this.g && (this.g = "zh-CN");
            this.la[this.g] || (a = !1, this.g = Ia);
            if (!this.o[this.c]) if (a = !1, this.o.en) this.c = "en"; else for (var b in this.o) if (this.o[b] !== Object.prototype[b]) {
                this.c = b;
                break
            }
            if (this.f) {
                var c = this.o, d = {"": Z.Eh};
                for (b in c) c[b] !== Object.prototype[b] && (d[b] = c[b]);
                this.f.Af(d, this.K);
                this.f.ua("")
            }
            !Cq &&
            a ? this.a.bd ? Wq(this.L, this.C.delay(C(this.Xd, this, !0, !0))).call() : (this.G = !0, Wq(this.L, this.C.delay(C(this.Xd, this))).call(), br("te_ap", {sl: this.g})) : (this.l && this.l.J(!0), this.f && this.f.J(!0));
            window.google.translate.TranslateService && this.ka(!1);
            this.L.finish()
        }
    };
    u.Ld = function () {
        this.I = new Tq(C(this.xi, this));
        this.C = new Tq(C(this.Ai, this));
        this.L = new Vq(C(this.Ti, this));
        this.b = new Iu(this.qa);
        this.B.qd(this.I.register(C(this.wi, this)), Aq);
        this.da ? (this.f = new Cu(this.a), this.h.w(this.f, Ab, this.I.register()), this.h.w(this.f, Sa, Wq(this.L, this.C.delay(C(this.vi, this)))), this.f.fa(this.da)) : this.P.ld && (this.l = new Gu(this.P), this.h.w(this.l, Ab, this.I.register()), this.h.w(this.l, "clk_trans", Wq(this.L, this.C.delay(C(this.ui, this)))), this.l.fa());
        !this.a.Wd && this.a.Xh &&
        this.B.md(this.I.register(C(this.ri, this)));
        this.I.finish()
    };
    u.Ai = function () {
        var a = this.b, b = this.la;
        a.g && a.g.Eb(b);
        a.K = b;
        this.b.Af(this.o, this.K);
        this.b.Tb(this.g);
        this.b.ua(this.c);
        this.h.w(this.b, "clk_confirm", this.ki);
        this.h.w(this.b, "clk_cancel", this.ji);
        this.h.w(this.b, "clk_restore", this.Pe);
        this.h.w(this.b, "clk_close", this.Bd);
        this.h.w(this.b, "clk_no_ap", this.li);
        this.h.w(this.b, Ua, this.mi);
        this.h.w(this.b, "chg_src_lang", this.pg);
        this.h.w(this.b, Sa, this.pg);
        this.f && this.f.J(!0)
    };
    u.Ti = function () {
        this.h.w(this.b, Ab, this.C.register());
        this.b.fa();
        this.C.finish()
    };
    u.F = function () {
        this.B.restore();
        Lu.m.F.call(this);
        this.B.M();
        this.h.M();
        this.h = null;
        this.b && this.b.M();
        this.b = null;
        this.l && this.l.M();
        this.l = null;
        this.f && this.f.M();
        this.da = this.f = null
    };
    u.ki = function () {
        !this.b.isVisible() || !this.a.ic && hr(this.g, this.b.na()) || (this.G && br("te_apt", {sl: this.g}), Pu(this, !1), this.f && this.f.ua(this.b.na()))
    };
    u.ji = function () {
        this.b.isVisible() && (Qu(this), Ku(this.b, 0), this.f && this.f.ua(""))
    };
    u.Pe = function () {
        this.b.isVisible() && (Qu(this), Ku(this.b, 0));
        this.f && this.f.ua("")
    };
    u.Bd = function () {
        this.b.isVisible() && (this.G && (this.G = !1, br("te_apc", {sl: this.g})), Qu(this), this.b.J(!1), this.f && this.f.ua(""), this.l && this.l.J(!0))
    };
    u.li = function () {
        this.b.isVisible() && (this.s["o" + this.g] = "1", br("te_apr", {sl: this.g}), this.G = !1, this.Bd())
    };
    u.mi = function () {
        if (this.b.isVisible()) {
            this.G = !1;
            this.s.os = "1";
            var a = null;
            if (this.s) {
                a = [];
                for (var b in this.s) this.s[b] !== Object.prototype[b] && a.push(b + "=" + this.s[b]);
                a = a.join("|")
            }
            Nu("googtransopt", a);
            this.Bd()
        }
    };
    u.pg = function () {
        this.b.isVisible() && (!this.a.ic && hr(this.g, this.b.na()) ? this.Pe() : (this.g = this.b.cb() || this.g, this.c = this.b.na(), 2 == this.b.yc && (this.f && this.f.ua(this.b.na()), Pu(this))))
    };
    u.Xd = function (a, b) {
        this.b.isVisible() || (this.l && this.l.J(!1), a ? Pu(this, b) : Ku(this.b, 0, !0, this.G))
    };
    u.Aj = function (a, b) {
        Wq(this.L, this.C.delay(C(this.Xd, this, a, b))).call()
    };
    u.ui = function () {
        this.Xd(2 == this.b.yc)
    };
    u.vi = function () {
        this.f.na() ? !this.a.ic && hr(this.g, this.b.na()) ? this.Pe() : (this.c = this.f.na(), this.b.ua(this.c), Pu(this)) : this.f.ua(this.c)
    };

    function Pu(a, b) {
        if (window.google.translate.TranslateService) try {
            window.google.translate.TranslateService.getInstance().restore()
        } catch (c) {
        }
        Ou(a.g, a.c);
        a.G = !1;
        !b && a.g in Eq && br("te_ape", {sl: a.g});
        a.b.yf(0);
        Ku(a.b, 1, !0);
        a.B.gh(!!b);
        window.setTimeout(C(a.B.de, a.B, a.a.ic ? Ia : a.g, a.c, C(a.Ii, a), void 0, void 0), 0);
        if (a.a.fg && window._gaq && window._gat) try {
            a.a.Ae ? window._gat._getTracker(a.a.Ae)._trackEvent(ma, "Translate", a.c) : window._gat._getTrackerByName()._trackEvent(ma, "Translate", a.c)
        } catch (c) {
        }
    }

    u.Ii = function (a, b, c) {
        A(this.ra) == p && this.ra();
        this.b.isVisible() && 1 == this.b.yc && (c ? (Qu(this), Ku(this.b, -1, !0), 2 == c ? Ju(this.b, Z.yh) : Ju(this.b, Z.Of)) : (this.b.yf(a), b && (this.f && this.f.ua(this.c), this.b.Tb(this.g), Ku(this.b, 2))))
    };

    function Qu(a) {
        Ou();
        window.setTimeout(C(a.B.restore, a.B, null), 0)
    }

    u.ka = function (a) {
        a || this.Bd();
        this.f && this.f.ka(a);
        this.l && this.l.J(a)
    };

    function Ru(a) {
        if (a && (a = String(a), a = a.split("."), a.length)) {
            for (var b = window, c = 0; c < a.length; ++c) {
                var d = a[c];
                if (!(d && d in b)) return;
                b = b[d]
            }
            return b
        }
    };var Su = Ru("google.translate.m");
    if (Su) for (var Tu in Z) if (Z[Tu] !== Object.prototype[Z[Tu]] && Z[Tu]) {
        var Uu = Z[Tu]();
        Z[Tu] = Su[Uu] ? Su[Uu] : bs
    }
    if (1 == Fq) {
        var Vu = null, Wu = function (a) {
            if (!Vu) {
                var b, c, d;
                a && ("key" in a && (b = a.key), "serverParams" in a && (c = a.serverParams), "timeInfo" in a && (d = a.timeInfo), (a = (a = window.location.hash.match(/google\.translate\.element\.sp=([^&]+)/)) && a[1] ? a[1] : null) && (c = a));
                a = 0;
                if ("te_lib" == Gq || $e) a = 3;
                Vu = new su(void 0, new ft({
                    $a: b,
                    Kb: a,
                    Bf: !0,
                    trackVisibility: "tvis" == c
                }), void 0, void 0, b, c, d, new fu);
                Vu.constructor = z;
                Vu.isAvailable = Vu.Ua;
                Vu.getSupportedLanguages = Vu.qd;
                Vu.getPageLanguage = Vu.md;
                Vu.setClickThrough = Vu.gh;
                Vu.translatePage =
                    Vu.de;
                Vu.restore = Vu.restore;
                Vu.isTranslating = Vu.Fj
            }
            return Vu
        };
        Wu.getInstance = function () {
            return Vu
        };
        Gc("google.translate.TranslateService", Wu);
        br("te_li")
    } else {
        var Xu = null, Yu = function (a, b) {
            Xu || (Xu = new Lu(a, b), Xu.constructor = z);
            return Xu
        };
        Yu.getInstance = function () {
            return Xu
        };
        Gc("google.translate.TranslateElement", Yu);
        Lu.prototype.dispose = Lu.prototype.M;
        Lu.prototype.showBanner = Lu.prototype.Aj;
        Lu.prototype.setEnabled = Lu.prototype.ka;
        Gc("google.translate.TranslateElement.FloatPosition", Hu);
        Hu.TOP_LEFT =
            1;
        Hu.TOP_RIGHT = 2;
        Hu.BOTTOM_RIGHT = 3;
        Hu.BOTTOM_LEFT = 4;
        Gc("google.translate.TranslateElement.InlineLayout", Du);
        Du.VERTICAL = 0;
        Du.HORIZONTAL = 1;
        Du.SIMPLE = 2
    }
    (function () {
        for (var a in Object.prototype) {
            $c = function (d, e, f) {
                for (var h in d) d[h] !== Object.prototype[h] && e.call(f, d[h], h, d)
            };
            break
        }
        var b = Fc(), c = Ru(Bq);
        c && A(c) == p && (1 == Fq ? c() : function e() {
            var f = document.readyState;
            "undefined" == A(f) || f == Va || "interactive" == f || 2E4 <= Fc() - b ? c() : window.setTimeout(e, 500)
        }())
    })();
}).call(window)