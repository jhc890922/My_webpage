/*!
 * VERSION: 1.6.4
 * DATE: 2020-03-29
 * https://leon-sans.com
 *
 * @license Copyright (c) 2019-2020, Jongmin Kim. All rights reserved.
 **/

var LeonSans = function(t) {
    var r = {};

    function e(n) { if (r[n]) return r[n].exports; var i = r[n] = { i: n, l: !1, exports: {} }; return t[n].call(i.exports, i, i.exports, e), i.l = !0, i.exports }
    return e.m = t, e.c = r, e.d = function(t, r, n) { e.o(t, r) || Object.defineProperty(t, r, { enumerable: !0, get: n }) }, e.r = function(t) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 }) }, e.t = function(t, r) {
        if (1 & r && (t = e(t)), 8 & r) return t;
        if (4 & r && "object" == typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        if (e.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: t }), 2 & r && "string" != typeof t)
            for (var i in t) e.d(n, i, function(r) { return t[r] }.bind(null, i));
        return n
    }, e.n = function(t) { var r = t && t.__esModule ? function() { return t.default } : function() { return t }; return e.d(r, "a", r), r }, e.o = function(t, r) { return Object.prototype.hasOwnProperty.call(t, r) }, e.p = "", e(e.s = 0)
}([function(t, r, e) {
    var n = e(1).default;
    t.exports = n
}, function(t, r, e) {
    "use strict";

    function n(t) { return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) { return typeof t } : function(t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t })(t) }

    function i(t, r) {
        for (var e = 0; e < r.length; e++) {
            var n = r[e];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }
    e.r(r), e.d(r, "default", (function() { return hr }));
    var a = function() {
            function t() {! function(t, r) { if (!(t instanceof r)) throw new TypeError("Cannot call a class as a function") }(this, t), this.handlers_ = { update: { listeners: [] } } }
            var r, e, a;
            return r = t, (e = [{ key: "on", value: function(t, r) { return "function" != typeof r ? (console.error("The listener callback must be a function, the given type is ".concat(n(r))), !1) : "string" != typeof t ? (console.error("The event name must be a string, the given type is ".concat(n(t))), !1) : (void 0 === this.handlers_[t] && (this.handlers_[t] = { listeners: [] }), void this.handlers_[t].listeners.push(r)) } }, {
                key: "off",
                value: function(t, r) {
                    if (void 0 === this.handlers_[t]) return console.error("This event: ".concat(t, " does not exist")), !1;
                    this.handlers_[t].listeners = this.handlers_[t].listeners.filter((function(t) { return t.toString() !== r.toString() }))
                }
            }, { key: "dispatch", value: function(t, r) { this.handlers_[t].listeners.forEach((function(t) { t(r) })) } }]) && i(r.prototype, e), a && i(r, a), t
        }(),
        s = 2 * Math.PI;

    function o(t, r) {
        var e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
            i = .49 * t.rect.w * r,
            a = .49 * (t.rect.h + 220) * r;
        return { x: e, y: n, w: i, h: a }
    }

    function f(t, r, e) { return { x: t / 2, y: (r - 130 * .49 * e) / 2 } }

    function l(t, r, e) { return { r: r, cr: e, fr1: 1, fr2: .78, gx1: t.ratio.x1, gx2: t.ratio.x2, gy1: t.ratio.y1, gy2: t.ratio.y2 } }

    function y(t, r, e, n, i) { var a = (n - i) / (r - e) * (t - e) + i; return a < i ? a = i : a > n && (a = n), a }

    function c(t) {
        var r, e, n, i, a, s, o, f, l, c, h, u = t.typo.p.length,
            d = [];
        for (r = 0; r < u; r++)
            for (i = (a = t.typo.p[r]).cv.length, e = 0; e < i; e++) {
                if (o = (s = a.cv[e]).addRect(t.rect), f = a.d, c = (l = t.pointsLength.lengths[r]) / t.pointsLength.max, h = 0, r > 0)
                    for (n = 0; n < r; n++) h += t.pointsLength.lengths[n] / t.pointsLength.max;
                c += h, d.push({
                    pos: o,
                    drawing: t.drawing,
                    direction: f,
                    lengths: l,
                    maxDrawing: c,
                    minDrawing: h,
                    closePath: s.ratio.c,
                    stroke: function(t, r) {
                        var e = y(r.drawing.value, r.maxDrawing, r.minDrawing, 1, 0);
                        if (e > 0 && "a" != r.pos.type) {
                            var n = r.lengths * e;
                            t.setLineDash([r.lengths]), t.lineDashOffset = r.direction * (n + r.lengths), t.stroke()
                        }
                    }
                })
            }
        return d
    }

    function h(t, r) {
        var e, n, i = t.length,
            a = [];
        for (e = 0; e < i; e++) n = t[e].addRect(r.rect), a.push(n);
        return a
    }

    function u(t) { for (var r, e, n = t.slice(), i = n.length, a = i; a--;) r = Math.random() * i | 0, e = n[a], n[a] = n[r], n[r] = e; return n }

    function d(t, r) { var e, n, i, a = r.lines.length; for (e = 0; e < a; e++) "a" == (i = (n = r.lines[e]).pos).type ? (t.beginPath(), t.arc(i.x, i.y, i.radius * n.drawing.value, 0, s), t.fill(), t.closePath()) : "m" == i.type ? (t.beginPath(), t.moveTo(i.x, i.y)) : "l" == i.type ? t.lineTo(i.x, i.y) : "b" == i.type && t.bezierCurveTo(i.x, i.y, i.x2, i.y2, i.x3, i.y3), n.stroke(t, n) }

    function p(t, r) {
        t.save(), t.lineWidth = 1;
        var e, n = r.lines.length;
        for (e = 0; e < n; e++) g(t, r.lines[e]);
        for (t.restore(), t.save(), t.lineWidth = 1, n = r.typo.p.length, e = 0; e < n; e++) v(t, r.typo.p[e], r);
        t.restore()
    }

    function v(t, r, e) { var n, i, a, o = r.v.length; for (n = 0; n < o; n++) a = (i = r.cv[n]).addRect(e.rect), "b" == i.type ? (t.fillStyle = "#ff2a00", t.beginPath(), t.arc(a.x3 + (a.x3 - a.x2), a.y3 + (a.y3 - a.y2), 1.5, 0, s), t.fill(), t.beginPath(), t.arc(a.x2, a.y2, 1.5, 0, s), t.fill(), t.beginPath(), t.moveTo(a.x2, a.y2), t.lineTo(a.x3, a.y3), t.lineTo(a.x3 + (a.x3 - a.x2), a.y3 + (a.y3 - a.y2)), t.stroke(), t.beginPath(), t.fillStyle = "#ffffff", t.arc(a.x3, a.y3, 2.5, 0, s), t.fill(), t.stroke()) : (t.beginPath(), t.fillStyle = "#ffffff", t.strokeStyle = "#ff2a00", t.arc(a.x, a.y, 2.5, 0, s), t.fill(), t.stroke()) }

    function g(t, r) { var e = r.pos; "a" != e.type && ("m" == e.type ? (t.strokeStyle = "#ff2a00", t.beginPath(), t.moveTo(e.x, e.y)) : "l" == e.type ? t.lineTo(e.x, e.y) : "b" == e.type && t.bezierCurveTo(e.x, e.y, e.x2, e.y2, e.x3, e.y3), t.stroke()) }

    function x(t, r) {
        t.save(), t.beginPath(), t.lineWidth = 1, t.strokeStyle = "#aaaaaa";
        var e, n, i = r.guide.length;
        for (e = 0; e < i; e++) n = r.rect.y + r.grid[e], t.moveTo(r.rect.x, n), t.lineTo(r.rect.x + r.rect.w, n);
        t.stroke(), t.lineWidth = 1, t.beginPath(), t.strokeStyle = "#aaaaaa", t.rect(r.rect.x, r.rect.y, r.rect.w, r.rect.h), t.stroke(), t.restore()
    }
    var b, S = Math.cos,
        m = Math.sin;

    function O(t, r, e, n, i, a) {
        var o, f, l, y, c, h = r.wavePaths.length,
            u = function(t, r) { return 120 * t * r }(n, e),
            d = [];
        for (t.beginPath(), o = 0; o < h; o++) {
            if (f = r.wavePaths[o], a) {
                var p = Math.random() * u - u / 2,
                    v = Math.random() * u - u / 2;
                f.rx = f.x + p * S(f.rotation), f.ry = f.y + p * m(f.rotation), f.sx = f.x + p, f.sy = f.y + v
            }
            "a" == f.type ? d.push(f) : 1 == f.start ? t.moveTo(f.x, f.y) : f.fix ? t.lineTo(f.x, f.y) : i < 110 ? (l = r.wavePaths[o - 1]) && (y = l.x + .5 * (f.x - l.x), c = l.y + .5 * (f.y - l.y), t.quadraticCurveTo(y, c, f.rx, f.ry)) : t.lineTo(f.rx, f.ry)
        }
        for (t.stroke(), o = 0; o < d.length; o++) f = d[o], t.beginPath(), t.arc(f.x, f.y, f.radius, 0, s), t.fill()
    }

    function J(t, r, e, n) {
        var i, a, o = Math.round(r.paths.length * r.drawing.value),
            f = e / 2,
            l = e / 3,
            y = n / 2;
        for (i = 0; i < o; i++) 1 == (a = r.paths[i]).num ? t.fillStyle = "#ff00c5" : t.fillStyle = "#ff95f8", "a" == a.type ? (t.beginPath(), t.arc(a.x, a.y, l, 0, s), t.fill()) : (t.beginPath(), t.save(), t.translate(a.x, a.y), t.rotate(a.rotation), t.fillRect(-f, -y, e, n), t.restore())
    }

    function N(t, r, e, n) {
        var i = n.length,
            a = (r + i * (Math.abs(r / 10 | 0) + 1)) % i;
        if (Array.isArray(n[a])) {
            var s, o = 1 / ((i = n[a].length) + 1),
                f = t.createLinearGradient(e.rect.x, e.rect.y, e.rect.x, e.rect.y + e.rect.h);
            for (f.addColorStop(o, n[a][0]), s = 0; s < i; s++) f.addColorStop(o * (s + 1), n[a][s]);
            f.addColorStop(o * (i + 1), n[a][i - 1]), t.strokeStyle = f, t.fillStyle = f
        } else t.strokeStyle = n[a], t.fillStyle = n[a]
    }

    function _(t, r) {
        var e, n, i = t.typo.p.length,
            a = [],
            s = [],
            o = 0;
        for (n = 0; n < i; n++) o += (e = w(t, t.typo.p[n].v, r)).l, a.push(e.v), s.push(e.l);
        return { max: o, lines: a, lengths: s }
    }

    function w(t, r, e) {
        var n, i, a, s, o, f, l = r.length,
            y = [],
            c = 0;
        for (n = 0; n < l; n++) a = {}, o = (i = r[n]).convert(t, e), 0 == n || "a" == i.type ? (a.x1 = o.x, a.y1 = o.y, a.distance = 0, a.radius = o.radius) : (s = f.convert(t, e), "b" == f.type ? (a.x1 = s.x3, a.y1 = s.y3) : (a.x1 = s.x, a.y1 = s.y), a.x2 = o.x, a.y2 = o.y, "b" == i.type ? (a.x3 = o.x2, a.y3 = o.y2, a.x4 = o.x3, a.y4 = o.y3, a.distance = P(a.x1, a.y1, a.x2, a.y2, a.x3, a.y3, a.x4, a.y4)) : a.distance = W(a.x1, a.y1, a.x2, a.y2)), a.type = i.type, a.rotation = i.ratio.r, a.pat = i.ratio.p, a.fix = i.ratio.f, a.vt = i.ratio.v, y.push(a), c += a.distance, f = i;
        return { v: y, l: c }
    }

    function P(t, r, e, n, i, a, s, o, f) {
        var l, y, c, h, u = f || 40,
            d = 0,
            p = t,
            v = r;
        for (c = 1; c < u; c++) l = (h = k(c / u, t, r, e, n, i, a, s, o)).x - p, y = h.y - v, d += Math.sqrt(l * l + y * y), p = h.x, v = h.y;
        return l = s - p, y = o - v, d += Math.sqrt(l * l + y * y)
    }

    function k(t, r, e, n, i, a, s, o, f) { return r += (n - r) * t, e += (i - e) * t, { x: (r += ((n += (a - n) * t) - r) * t) + ((n += ((a += (o - a) * t) - n) * t) - r) * t, y: (e += ((i += (s - i) * t) - e) * t) + ((i += ((s += (f - s) * t) - i) * t) - e) * t } }

    function W(t, r, e, n) {
        var i = e - t,
            a = n - r;
        return Math.sqrt(i * i + a * a)
    }
    var D, T = -1;

    function I(t) {
        var r = function() {++T == D && (T = 0); return b[T] }();
        t.fillStyle = r, t.strokeStyle = r
    }

    function R(t, r, e, n, i, a) {
        var s = e / n,
            o = y(i.drawing.value, a + s, a, 1, 0);
        if (1 == r.direction && (o = y(1 - i.drawing.value, a, a + s, 1, 0)), o > 0) {
            var f = e * o;
            t.setLineDash([e]), t.lineDashOffset = r.direction * (f + e), t.stroke()
        }
        return s
    }

    function j(t, r, e, n) {
        var i, a;
        if (1 == r.drawing.value)
            for (i = r.lines.length, a = 0; a < i; a++) M(t, r.lines[a], e, n);
        else
            for (i = r.drawingPaths.length * r.drawing.value, a = 0; a < i; a++) F(t, r.drawingPaths[a], e, n, r.drawing.value)
    }

    function M(t, r, e, n) { var i = r.pos; "a" == i.type ? (t.lineStyle(0, n, 0), t.beginFill(n), t.drawCircle(i.x, i.y, i.radius), t.endFill()) : "m" == i.type ? (t.lineStyle(e, n, 1), t.moveTo(i.x, i.y)) : "l" == i.type ? t.lineTo(i.x, i.y) : "b" == i.type && t.bezierCurveTo(i.x, i.y, i.x2, i.y2, i.x3, i.y3), r.closePath && t.closePath() }

    function F(t, r, e, n, i) { "a" == r.type ? (t.lineStyle(0, n, 0), t.beginFill(n), t.drawCircle(r.x, r.y, r.radius * i), t.endFill()) : 1 == r.start ? (t.lineStyle(e, n, 1), t.moveTo(r.x, r.y)) : t.lineTo(r.x, r.y, 1) }

    function G(t, r, e) {
        var n = e.length,
            i = (t + n * (Math.abs(t / 10 | 0) + 1)) % n;
        if (!Array.isArray(e[i])) return e[i]
    }

    function C(t, r) { var e, n, i, a = []; for (e = 0; e < 6; e++) n = 10 * e + 20, i = 10 * e + 90, a[e] = { x1: .49 * n * r, x2: .49 * (t.rect.w - 2 * n) * r, y1: .49 * i * r, y2: .49 * (t.rect.h - i) * r - 10 * e * .49 * r }; return a }

    function L(t, r) {
        var e, n = [],
            i = [98, 340, 815];
        for (e = 0; e < 3; e++) n[e] = .49 * i[e] * r;
        return n
    }

    function z(t) { Object.assign(this, t) }

    function A(t) { this.type = t[0], this.x = t[1] || 0, this.y = t[2] || 0, "b" == this.type ? (this.x2 = t[3] || 0, this.y2 = t[4] || 0, this.x3 = t[5] || 0, this.y3 = t[6] || 0, null == t[7] ? this.ratio = { x: 1, y: 1, r: 0, p: 0, f: 0, c: 0, v: 0 } : (this.ratio = {}, this.ratio.x = null == t[7].x ? 1 : t[7].x, this.ratio.y = null == t[7].y ? 1 : t[7].y, this.ratio.r = t[7].r || 0, this.ratio.p = t[7].p || 0, this.ratio.f = t[7].f || 0, this.ratio.c = t[7].c || 0, this.ratio.v = t[7].v || 0)) : null == t[3] ? this.ratio = { x: 1, y: 1, r: 0, p: 0, f: 0, c: 0, v: 0 } : (this.ratio = {}, this.ratio.x = null == t[3].x ? 1 : t[3].x, this.ratio.y = null == t[3].y ? 1 : t[3].y, this.ratio.r = t[3].r || 0, this.ratio.p = t[3].p || 0, this.ratio.f = t[3].f || 0, this.ratio.c = t[3].c || 0, this.ratio.v = t[3].v || 0) }

    function E(t, r, e, n) {
        var i = r.range.r * e.x,
            a = (r.range.gx2 - r.range.gx1) * i + r.range.gx1,
            s = (r.range.fr2 - r.range.fr1) * i + r.range.fr1;
        return r.center.x + (t - a) * n.scale * s
    }

    function q(t, r, e, n) {
        var i = r.range.r * e.y,
            a = (r.range.gy2 - r.range.gy1) * i + r.range.gy1,
            s = (r.range.fr2 - r.range.fr1) * i + r.range.fr1;
        return r.center.y + (t - a) * n.scale * s
    }
    Object.assign(z.prototype, { addRect: function(t) { var r = new z(this); return r.x = this.x + t.x, r.y = this.y + t.y, r.x2 = this.x2 + t.x, r.y2 = this.y2 + t.y, r.x3 = this.x3 + t.x, r.y3 = this.y3 + t.y, r.rx = this.rx + t.x, r.ry = this.ry + t.y, r.sx = this.sx + t.x, r.sy = this.sy + t.y, r.radius < .5 && (r.radius = .5), r } }), Object.assign(A.prototype, {
        convert: function(t, r) {
            var e = E(this.x, t, this.ratio, r),
                n = q(this.y, t, this.ratio, r),
                i = E(this.x2, t, this.ratio, r),
                a = q(this.y2, t, this.ratio, r),
                s = E(this.x3, t, this.ratio, r),
                o = q(this.y3, t, this.ratio, r),
                f = function(t, r, e) { var n = 0; "a" == t && (n = r.range.cr * e.scale * e.fontRatio); return n }(this.type, t, r),
                l = new z(this);
            return l.x = e, l.y = n, l.x2 = i, l.y2 = a, l.x3 = s, l.y3 = o, l.radius = f, l
        }
    });
    var X = null;

    function U(t, r, e, n) {
        var i, a, s, o, f, l = r.pointsLength.lines,
            y = t.scale,
            c = l.length,
            h = [],
            u = [],
            d = [];
        for (i = 0; i < c; i++) o = l[i], X = null, h.push($(o, e, y));
        for (c = h.length, i = 0; i < c; i++) {
            for (a = (f = h[i]).length, d = [], s = 0; s < a; s++)(o = f[s]).rotation != Z && (n && o.pat || d.push(o));
            1 == r.typo.p[i].d && d.reverse(), d.length > 0 && (d[0].start = 1, Array.prototype.push.apply(u, d))
        }
        return u
    }

    function $(t, r, e) {
        var n, i, a, s, o, f, l, c = t.length,
            h = [],
            u = 1,
            d = 1;
        for (r > -1 && (d = y(r, 1, 0, 80, 10) * e), n = 0; n < c; n++)
            if ("a" == (s = t[n]).type) h.push(new z({ x: s.x1, y: s.y1, rotation: 0, type: "a", pat: s.pat, fix: s.fix, radius: s.radius }));
            else if (0 == s.distance) null != (l = B(o = new z({ x: s.x1, y: s.y1, rotation: s.rotation, type: s.type, pat: s.pat, fix: s.fix }), X, s, 1)) && (u && (l.type = "m", u = 0), h.push(l)), X = new z(o);
        else
            for ((a = Math.ceil(s.distance / d)) < 3 && (a = 3), s.vt && (a = 2), i = 1; i < a; i++) f = i / (a - 1), o = "b" == s.type ? H(s, f) : new z({ x: s.x1 + (s.x2 - s.x1) * f, y: s.y1 + (s.y2 - s.y1) * f, type: s.type }), 0 != s.rotation && 1 == f && (o.rotation = s.rotation), s.pat && 1 == f && (o.pat = s.pat), s.fix && 1 == f && (o.fix = s.fix), a > 0 && null != (l = B(o, X, s, f)) && (u && (l.type = "m", u = 0), h.push(l)), X = new z(o);
        return h
    }

    function B(t, r, e, n) {
        if (t.type = e.type, t.distance = e.distance, t.num = n, r && null == t.rotation) {
            var i = t.x - r.x,
                a = t.y - r.y,
                s = Math.atan2(i, a);
            t.rotation = -s
        } else t.rotation = t.rotation;
        return t.rotation == Z ? null : t
    }

    function H(t, r) {
        var e = K(t.x1, t.x2, t.x3, t.x4, r),
            n = K(t.y1, t.y2, t.y3, t.y4, r),
            i = Q(t.x1, t.x2, t.x3, t.x4, r),
            a = Q(t.y1, t.y2, t.y3, t.y4, r);
        return new z({ x: e, y: n, rotation: -Math.atan2(i, a) })
    }

    function K(t, r, e, n, i) { var a = i * i; return t + (3 * -t + i * (3 * t - t * i)) * i + (3 * r + i * (-6 * r + 3 * r * i)) * i + (3 * e - 3 * e * i) * a + n * (a * i) }

    function Q(t, r, e, n, i) { return 3 * i * i * (3 * r - t - 3 * e + n) + 6 * i * (t - 2 * r + e) + 3 * (-t + r) }
    var V = Math.PI / 180 * 180,
        Y = Math.PI / 180 * 90,
        Z = -100;

    function tt(t, r, e, n, i, a, s, o) {
        var f, l = [],
            y = o.length;
        for (f = 0; f < y; f++) l.push({ d: o[f].d, v: rt(o[f].v, r, e) });
        return { rect: { w: t, h: 824, fw: r, fh: e }, ratio: { x1: n, x2: i, y1: a, y2: s }, p: l, clone: function() { for (var o = [], f = 0; f < l.length; f++) o[f] = { d: l[f].d, v: l[f].v }; return { rect: { w: t, h: 824, fw: r, fh: e }, ratio: { x1: n, x2: i, y1: a, y2: s }, p: o } } }
    }

    function rt(t, r, e) {
        var n, i, a = t.length,
            s = r / 2,
            o = e / 2,
            f = [];
        for (i = 0; i < a; i++)(n = t[i])[1] -= s, n[2] -= o, "b" == n[0] && (n[3] -= s, n[4] -= o, n[5] -= s, n[6] -= o), f.push(new A(n));
        return f
    }

    function et(t, r, e, n) {
        var i = t - e,
            a = r - n;
        return -Math.atan2(i, a)
    }

    function nt(t, r, e, n, i, a, s, o, f) {
        var l = Q(t, e, i, s, f),
            y = Q(r, n, a, o, f);
        return -Math.atan2(l, y)
    }
    var it = [{
            d: -1,
            v: [
                ["m", 0, 352, { x: .55, y: .3, r: et(0, 352, 143.5, 0) }],
                ["l", 143.5, 0, { r: et(0, 352, 143.5, 0), f: 1 }],
                ["l", 146.5, 0, { r: et(290, 352, 146.5, 0), f: 1, v: 1 }],
                ["l", 290, 352, { x: .55, y: .3, f: 1 }]
            ]
        }, {
            d: -1,
            v: [
                ["m", 47, 237, { r: Y, p: 1 }],
                ["l", 243, 237, { r: Y, p: 1, f: 1 }]
            ]
        }],
        at = [{
            d: 1,
            v: [
                ["m", 293.1, 320.1, { r: nt(293.1, 320.1, 262.2, 345, 222.8, 360, 180, 360, 0), f: 1 }],
                ["b", 262.2, 345, 222.8, 360, 180, 360],
                ["b", 80.6, 360, 0, 279.4, 0, 180],
                ["b", 0, 80.6, 80.6, 0, 180, 0],
                ["b", 222.8, 0, 262.2, 15, 293.1, 39.9]
            ]
        }],
        st = [{
            d: -1,
            v: [
                ["m", 95, 352, { r: Y, f: 1 }],
                ["b", 191.6, 352, 270, 271.6, 270, 175, { r: V }],
                ["b", 270, 78.4, 191.6, 0, 95, 0, { r: Y }],
                ["l", 0, 0, { r: V, f: 1 }],
                ["l", 0, 352, { r: V, f: 1 }],
                ["l", 95, 352, { r: Y, f: 1 }]
            ]
        }],
        ot = [{
            d: -1,
            v: [
                ["m", 192, 0, { x: 0, r: Y }],
                ["l", 0, 0, { r: V, f: 1, x: .5 }],
                ["l", 0, 352, { f: 1, x: .5 }],
                ["l", 192, 352, { x: 0, r: Y, f: 1 }]
            ]
        }, {
            d: -1,
            v: [
                ["m", 0, 164, { r: Y, p: 1, x: .5 }],
                ["l", 180, 164, { x: 0, r: Y, f: 1 }]
            ]
        }],
        ft = [{
            d: 1,
            v: [
                ["m", 202, 180, { r: Y, f: 1 }],
                ["l", 352, 180, { f: 1 }],
                ["b", 352, 279.4, 279.4, 360, 180, 360, { r: Y }],
                ["b", 80.6, 360, 0, 279.4, 0, 180, { r: V }],
                ["b", 0, 80.6, 80.6, 0, 180, 0, { r: Y }],
                ["b", 222.8, 0, 262.1, 14.9, 293, 39.9]
            ]
        }],
        lt = [{
            d: -1,
            v: [
                ["m", 0, 0, { y: 0, r: V }],
                ["l", 0, 352, { y: 0, r: V, f: 1 }]
            ]
        }, {
            d: -1,
            v: [
                ["m", 232, 0, { y: 0, r: V }],
                ["l", 232, 352, { y: 0, r: V, f: 1 }]
            ]
        }, {
            d: -1,
            v: [
                ["m", 0, 164, { r: Y, p: 1 }],
                ["l", 232, 164, { r: Y, f: 1, p: 1 }]
            ]
        }],
        yt = [{
            d: 1,
            v: [
                ["m", 0, 352, { y: 0, r: V, f: 1 }],
                ["l", 0, 0, { y: 0, r: V }]
            ]
        }],
        ct = [{
            d: 1,
            v: [
                ["m", 0, 311, { r: nt(0, 311, 16.2, 341.6, 49.3, 356, 86, 356, 0), f: 1 }],
                ["b", 16.2, 341.6, 49.3, 356, 86, 356, { r: Y }],
                ["b", 133.5, 356, 172, 317.5, 172, 270],
                ["l", 172.5, 0, { y: 0, r: V }]
            ]
        }],
        ht = [{
            d: -1,
            v: [
                ["m", 0, 352, { y: 0, r: V }],
                ["l", 0, 0, { r: V, f: 1 }],
                ["l", 3, 0, { r: V, p: 1, f: 1, v: 1 }],
                ["l", 247, 351, { r: V, p: 1, f: 1 }],
                ["l", 250, 351, { r: V, f: 1, v: 1 }],
                ["l", 250, 0, { y: 0, r: V, f: 1 }]
            ]
        }],
        ut = [{
            d: 1,
            v: [
                ["m", 360, 180, { r: V, p: 1, f: 1 }],
                ["b", 360, 279.4, 279.4, 360, 180, 360, { r: Y }],
                ["b", 80.6, 360, 0, 279.4, 0, 180, { r: V }],
                ["b", 0, 80.6, 80.6, 0, 180, 0, { r: Y }],
                ["b", 279.4, 0, 360, 80.6, 360, 180, { r: V, c: 1 }]
            ]
        }],
        dt = [{
            d: 1,
            v: [
                ["m", 0, 295.4, { r: nt(0, 295.4, 17.6, 332.1, 58.3, 360, 110.3, 360, 0), f: 1 }],
                ["b", 17.6, 332.1, 58.3, 360, 110.3, 360],
                ["b", 173.9, 360, 223.8, 329.6, 224, 271],
                ["b", 224.2, 214.7, 180.7, 189.6, 112.4, 173.3],
                ["b", 47.3, 157.7, 10.9, 130.6, 12, 84.4],
                ["b", 13.3, 29.8, 57.3, 0, 114.8, 0],
                ["b", 158.4, 0, 196.5, 20.5, 212, 51.3]
            ]
        }],
        pt = [{
            d: 1,
            v: [
                ["m", 250, 0, { y: 0, r: V }],
                ["l", 250, 231, { r: V }],
                ["b", 250, 300, 194, 356, 125, 356, { r: Y }],
                ["b", 56, 356, 0, 300, 0, 231, { r: V }],
                ["l", 0, 0, { y: 0, r: V }]
            ]
        }],
        vt = [{
            d: -1,
            v: [
                ["m", 0, 0, { x: .6, y: .3, r: et(0, 0, 135, 186) }],
                ["l", 135, 186, { r: V, f: 1 }],
                ["l", 270, 0, { x: .6, y: .3, f: 1 }]
            ]
        }, {
            d: -1,
            v: [
                ["m", 135, 186, { r: V, p: 1 }],
                ["l", 135, 352, { y: 0, f: 1 }]
            ]
        }],
        gt = {
            A: tt(620, 290, 352, 0, 0, 0, 0, JSON.parse(JSON.stringify(it))),
            B: tt(596, 209, 352, -10, -10, 0, 0, [{
                d: 1,
                v: [
                    ["m", 0, 164, { r: Y, p: 1 }],
                    ["l", 116, 164, { r: Y, p: 1, f: 1 }],
                    ["b", 167.4, 164, 209, 205.6, 209, 257, { r: V }],
                    ["b", 209, 308.4, 167.4, 352, 116, 352, { r: Y }],
                    ["l", 0, 352, { r: V, f: 1 }],
                    ["l", 0, 0, { r: V, f: 1 }],
                    ["l", 116, 0, { r: Y }],
                    ["b", 161.3, 0, 198, 36.7, 198, 82, { r: V }],
                    ["b", 198, 127.3, 161.3, 164, 116, 164, { r: Y }]
                ]
            }]),
            C: tt(700, 293.1, 360, 0, 0, 0, 0, JSON.parse(JSON.stringify(at))),
            D: tt(721, 270, 352, -10, -10, 0, 0, JSON.parse(JSON.stringify(st))),
            E: tt(520, 192, 352, -5, -80, 0, 0, JSON.parse(JSON.stringify(ot))),
            F: tt(510, 192, 352, -5, -80, 0, 0, [{
                d: -1,
                v: [
                    ["m", 192, 0, { x: 0, r: Y }],
                    ["l", 0, 0, { r: V, f: 1, x: .5 }],
                    ["l", 0, 352, { y: 0, f: 1, x: .5 }]
                ]
            }, {
                d: -1,
                v: [
                    ["m", 0, 164, { r: Y, p: 1, x: .5 }],
                    ["l", 180, 164, { x: 0, r: Y, f: 1 }]
                ]
            }]),
            G: tt(840, 352, 360, 0, 0, 0, 0, JSON.parse(JSON.stringify(ft))),
            H: tt(684, 232, 352, 0, 0, 0, 0, JSON.parse(JSON.stringify(lt))),
            I: tt(249, 0, 352, 0, 0, 0, 0, JSON.parse(JSON.stringify(yt))),
            J: tt(472, 172.5, 355.5, 10, 20, -2, -2, JSON.parse(JSON.stringify(ct))),
            K: tt(616, 232, 352, -10, -20, 0, 0, [{
                d: -1,
                v: [
                    ["m", 0, 0, { y: 0, r: V }],
                    ["l", 0, 352, { y: 0, r: V, f: 1 }]
                ]
            }, {
                d: -1,
                v: [
                    ["m", 212, 0, { x: .7, y: .7, r: et(212, 0, 0, 162.5) }],
                    ["l", 0, 162.5, { r: Y, p: 1 }],
                    ["l", 0, 165.5, { r: Y, p: 1, v: 1 }],
                    ["l", 232, 352, { x: .7, y: .7, f: 1 }]
                ]
            }]),
            L: tt(529, 192, 352, -10, -20, 0, 0, [{
                d: -1,
                v: [
                    ["m", 0, 0, { y: 0 }],
                    ["l", 0, 352, { f: 1 }],
                    ["l", 192, 352, { x: 0, f: 1 }]
                ]
            }]),
            M: tt(885, 330, 352, 0, 0, 0, 0, [{
                d: -1,
                v: [
                    ["m", 0, 352, { y: 0, r: V }],
                    ["l", 0, 0, { r: V, f: 1 }],
                    ["l", 3, 0, { r: V, p: 1, f: 1, v: 1 }],
                    ["l", 163.5, 330, { r: et(163.5, 330, 163.5, 330), f: 1 }],
                    ["l", 166.5, 330, { r: et(166.5, 330, 327, 0), f: 1, v: 1 }],
                    ["l", 327, 0, { r: V, p: 1, f: 1 }],
                    ["l", 330, 0, { r: V, f: 1, v: 1 }],
                    ["l", 330, 352, { y: 0, r: V, f: 1 }]
                ]
            }]),
            N: tt(721, 250, 352, 0, 0, 0, 0, JSON.parse(JSON.stringify(ht))),
            O: tt(850, 360, 360, 0, 0, 0, 0, JSON.parse(JSON.stringify(ut))),
            P: tt(568, 210, 352, -10, -10, -.5, -.5, [{
                d: 1,
                v: [
                    ["m", 0, 352, { y: 0, f: 1 }],
                    ["l", 0, 0, { f: 1 }],
                    ["l", 117, 0, { r: Y }],
                    ["b", 168.4, 0, 210, 41.6, 210, 93, { r: V }],
                    ["b", 210, 144.4, 168.4, 186, 117, 186, { r: Y }],
                    ["l", 0, 186, { r: Y, p: 1 }]
                ]
            }]),
            Q: tt(850, 360, 360, 0, 0, 0, 0, [{
                d: -1,
                v: [
                    ["m", 360, 180, { r: Y, p: 1, f: 1 }],
                    ["b", 360, 80.6, 279.4, 0, 180, 0, { r: Y }],
                    ["b", 80.6, 0, 0, 80.6, 0, 180, { r: V }],
                    ["b", 0, 279.4, 80.6, 360, 180, 360, { r: Y }],
                    ["b", 279.4, 360, 360, 279.4, 360, 180, { r: V, c: 1, f: 1 }]
                ]
            }, {
                d: -1,
                v: [
                    ["m", 222, 222, { x: .5, y: .5, r: et(222, 222, 360, 360) }],
                    ["l", 360, 360, { x: .5, y: .5, f: 1 }]
                ]
            }]),
            R: tt(634, 232, 352, -10, -10, -.5, -.5, [{
                d: -1,
                v: [
                    ["m", 0, 186, { r: Y, p: 1 }],
                    ["l", 139, 186, { r: Y }],
                    ["b", 190.4, 186, 232, 144.4, 232, 93, { r: V }],
                    ["b", 232, 41.6, 190.4, 0, 139, 0, { r: Y }],
                    ["l", 0, 0, { r: V, f: 1 }],
                    ["l", 0, 352, { y: 0, f: 1 }]
                ]
            }, {
                d: -1,
                v: [
                    ["m", 139, 186, { p: 1, r: et(139, 186, 232, 352) }],
                    ["l", 232, 352, { x: .5, y: .39, f: 1 }]
                ]
            }]),
            S: tt(560, 224, 360, 0, 0, 0, 0, JSON.parse(JSON.stringify(dt))),
            T: tt(568, 232, 352, 0, 0, -.5, -.5, [{
                d: -1,
                v: [
                    ["m", 0, 0, { x: 0, r: Y }],
                    ["l", 232, 0, { x: 0, r: Y, f: 1 }]
                ]
            }, {
                d: -1,
                v: [
                    ["m", 116, 0, { r: V, p: 1 }],
                    ["l", 116, 352, { y: 0, r: V, f: 1 }]
                ]
            }]),
            U: tt(712, 250, 355, 0, 0, -.5, -.5, JSON.parse(JSON.stringify(pt))),
            V: tt(650, 270, 352, 0, 0, 0, 0, [{
                d: -1,
                v: [
                    ["m", 0, 0, { x: .6, y: .1, r: et(0, 0, 133.5, 352) }],
                    ["l", 133.5, 352, { r: et(0, 0, 133.5, 352), f: 1 }],
                    ["l", 136.5, 352, { r: et(136.5, 352, 270, 0), f: 1, v: 1 }],
                    ["l", 270, 0, { x: .6, y: .1, f: 1 }]
                ]
            }]),
            W: tt(894, 390, 352, 0, 0, 0, 0, [{
                d: -1,
                v: [
                    ["m", 0, 0, { x: .6, y: .05, r: et(0, 0, 84.5, 352) }],
                    ["l", 84.5, 352, { r: et(0, 0, 84.5, 352), f: 1 }],
                    ["l", 87.5, 352, { r: et(87.5, 352, 193.5, 0), f: 1, v: 1 }],
                    ["l", 193.5, 0, { r: et(87.5, 352, 193.5, 0), f: 1 }],
                    ["l", 196.5, 0, { r: et(196.5, 0, 302.5, 352), f: 1, v: 1 }],
                    ["l", 302.5, 352, { r: et(196.5, 0, 302.5, 352), f: 1 }],
                    ["l", 305.5, 352, { r: et(305.5, 352, 390, 0), f: 1, v: 1 }],
                    ["l", 390, 0, { x: .6, y: .05, f: 1 }]
                ]
            }]),
            X: tt(660, 270, 352, 0, 0, 0, -7, [{
                d: -1,
                v: [
                    ["m", 10, 0, { x: .5, y: .3, r: et(10, 0, 270, 352) }],
                    ["l", 270, 352, { x: .5, y: .5, f: 1 }]
                ]
            }, {
                d: -1,
                v: [
                    ["m", 260, 0, { x: .5, y: .3, r: et(260, 0, 0, 352) }],
                    ["l", 0, 352, { x: .5, y: .5, f: 1 }]
                ]
            }]),
            Y: tt(673, 270, 352, 0, 0, 0, 0, JSON.parse(JSON.stringify(vt))),
            Z: tt(558, 232, 352, 0, -5, 0, 0, [{
                d: -1,
                v: [
                    ["m", 8, 0, { x: 0, r: Y }],
                    ["l", 224, 0, { r: Y, f: 1 }],
                    ["l", 224, 3, { r: V, p: 1, v: 1 }],
                    ["l", 0, 349, { r: V, p: 1 }],
                    ["l", 0, 352, { r: Y, f: 1, v: 1 }],
                    ["l", 232, 352, { x: 0, r: Y, f: 1 }]
                ]
            }])
        },
        xt = [{
            d: -1,
            v: [
                ["m", 232, 8, { y: -3.4, r: V }],
                ["l", 232, 116, { r: Z }],
                ["b", 232, 180.1, 180.1, 232, 116, 232, { r: Y }],
                ["b", 51.9, 232, 0, 180.1, 0, 116, { r: V }],
                ["b", 0, 51.9, 51.9, 0, 116, 0, { r: Y }],
                ["b", 180.1, 0, 232, 51.9, 232, 116, { r: V }],
                ["l", 232, 224, { y: -.1, r: V, f: 1 }]
            ]
        }],
        bt = [{
            d: 1,
            v: [
                ["m", 212.1, 182.9, { r: nt(212.1, 182.9, 191.1, 213.2, 156.1, 233.1, 116.5, 233.1, 0), f: 1 }],
                ["b", 191.1, 213.2, 156.1, 233.1, 116.5, 233.1, { r: Y }],
                ["b", 52.4, 233.1, .5, 181.2, .5, 117.1, { r: V }],
                ["b", .5, 53, 52.4, 1.1, 116.5, 1.1, { r: Y }],
                ["b", 156.1, 1.1, 191.1, 21, 212.1, 51.3]
            ]
        }],
        St = [{
            d: -1,
            v: [
                ["m", 232, 0, { y: 0 }],
                ["l", 232, 239, { r: Z }],
                ["b", 232, 303.1, 180.1, 355, 116, 355, { r: Y }],
                ["b", 51.9, 355, 0, 303.1, 0, 239, { r: V }],
                ["b", 0, 174.9, 51.9, 123, 116, 123, { r: Y }],
                ["b", 180.1, 123, 232, 174.9, 232, 239, { r: V }],
                ["l", 232, 352, { y: 0, f: 1 }]
            ]
        }],
        mt = [{
            d: 1,
            v: [
                ["m", 211.6, 182.9, { r: nt(211.6, 182.9, 191.1, 213.2, 156.1, 233.1, 116.5, 233.1, 0), f: 1 }],
                ["b", 191.1, 213.2, 156.1, 233.1, 116.5, 233.1, { r: Y }],
                ["b", 52.4, 233.1, .5, 181.2, .5, 117.1, { r: V }],
                ["b", .5, 53, 52.4, 1.1, 116.5, 1.1, { r: Y }],
                ["b", 176.4, 1.1, 224.9, 47.2, 225.5, 106.1, { r: V }],
                ["l", .5, 106.1, { r: V, p: 1 }]
            ]
        }],
        Ot = [{
            d: -1,
            v: [
                ["m", 232, 5, { y: -2.8 }],
                ["l", 232, 116, { r: Z }],
                ["b", 232, 180.1, 180.1, 232, 116, 232, { r: Y }],
                ["b", 51.9, 232, 0, 180.1, 0, 116, { r: V }],
                ["b", 0, 51.9, 51.9, 0, 116, 0, { r: Y }],
                ["b", 180.1, 0, 232, 51.9, 232, 116, { r: V }],
                ["l", 232, 222],
                ["b", 234.5, 300.3, 180.2, 338.5, 116, 338, { y: .64, r: Y }],
                ["b", 76.2, 337.7, 36.6, 320.7, 15.7, 290.1, { y: .64, f: 1 }]
            ]
        }],
        Jt = [{
            d: -1,
            v: [
                ["m", 0, 0, { y: 0, r: V }],
                ["l", 0, 352, { y: 0, f: 1 }]
            ]
        }, {
            d: -1,
            v: [
                ["m", 0, 214, { r: Z }],
                ["b", 0, 163.7, 40.7, 123, 91, 123, { r: Y }],
                ["b", 141.3, 123, 182, 163.7, 182, 214, { r: V }],
                ["l", 182, 352, { y: 0, f: 1 }]
            ]
        }],
        Nt = [{
            d: -1,
            v: [
                ["m", 0, 130, { y: -3.3 }],
                ["l", 0, 352, { y: 0, f: 1 }]
            ]
        }, {
            d: -1,
            v: [
                ["m", 0, 214, { y: 0, r: V, p: 1 }],
                ["b", 0, 163.7, 40.7, 123, 91, 123, { r: Y }],
                ["b", 141.3, 123, 182, 163.7, 182, 214, { r: V }],
                ["l", 182, 352, { y: 0, f: 1 }]
            ]
        }],
        _t = [{
            d: 1,
            v: [
                ["m", 232, 116, { r: V, p: 1, f: 1 }],
                ["b", 232, 180.1, 180.1, 232, 116, 232, { r: Y }],
                ["b", 51.9, 232, 0, 180.1, 0, 116, { r: V }],
                ["b", 0, 51.9, 51.9, 0, 116, 0, { r: Y }],
                ["b", 180.1, 0, 232, 51.9, 232, 116, { r: V, c: 1 }]
            ]
        }],
        wt = [{
            d: 1,
            v: [
                ["m", 0, 295.4 * .642, { r: nt(0, 295.4 * .642, 11.2992, 332.1 * .642, 58.3 * .642, 231.12, 70.8126, 231.12, 0), f: 1 }],
                ["b", 11.2992, 332.1 * .642, 58.3 * .642, 231.12, 70.8126, 231.12],
                ["b", 173.9 * .642, 231.12, 223.8 * .642, 329.6 * .642, 143.808, 173.982],
                ["b", 143.9364, 137.8374, 116.0094, 121.7232, 112.4 * .642, 173.3 * .642],
                ["b", 30.3666, 101.2434, 10.9 * .642, 130.6 * .642, 12 * .642, 54.1848],
                ["b", 8.5386, 29.8 * .642, 36.7866, 0, 73.7016, 0],
                ["b", 101.6928, 0, 126.153, 13.161, 136.104, 51.3 * .642]
            ]
        }],
        Pt = [{
            d: -1,
            v: [
                ["m", 0, 130, { y: -3 }],
                ["l", 0, 265, { r: V }],
                ["b", 0, 315.3, 40.7, 356, 91, 356, { r: Y }],
                ["b", 141.3, 356, 182, 315.3, 182, 265, { r: V, p: 1, f: 1 }]
            ]
        }, {
            d: -1,
            v: [
                ["m", 182, 130, { y: -3 }],
                ["l", 182, 352, { y: 0, f: 1 }]
            ]
        }],
        kt = [{
            d: -1,
            v: [
                ["m", 225.5, 0, { y: -3, r: et(225.5, 0, 116.3, 248.8) }],
                ["l", 116.3, 248.8, { x: .5, y: .64 }],
                ["b", 71.8, 349.6, 0, 331.5, 0, 331.5, { x: .5, y: .64, r: nt(0, 331.5, 71.8, 349.6, 116.3, 248.8, 0, 331.5, 0), f: 1 }]
            ]
        }, {
            d: -1,
            v: [
                ["m", 3.2, 0, { y: -3, r: et(3.2, 0, 125.7, 226.6) }],
                ["l", 125.7, 226.6, { p: 1, f: 1 }]
            ]
        }],
        Wt = {
            a: tt(600, 232, 232, 10, 2, -64, -64, JSON.parse(JSON.stringify(xt))),
            b: tt(600, 232, 352, -10, -2, 0, 0, [{
                d: -1,
                v: [
                    ["m", 0, 0, { y: 0, r: V }],
                    ["l", 0, 239, { r: Z }],
                    ["b", 0, 303.1, 51.9, 355, 116, 355, { r: Y }],
                    ["b", 180.1, 355, 232, 303.1, 232, 239, { r: V }],
                    ["b", 232, 174.9, 180.1, 123, 116, 123, { r: Y }],
                    ["b", 51.9, 123, 0, 174.9, 0, 239, { r: V }],
                    ["l", 0, 352, { y: 0, r: V, f: 1 }]
                ]
            }]),
            c: tt(520, 212.1, 233.1, 2, -10, -64, -64, JSON.parse(JSON.stringify(bt))),
            d: tt(600, 232, 352, 10, 2, 0, 0, JSON.parse(JSON.stringify(St))),
            e: tt(570, 225.5, 233.1, 0, 0, -64, -64, JSON.parse(JSON.stringify(mt))),
            f: tt(356, 232, 352, -40, -40, 0, 0, [{
                d: -1,
                v: [
                    ["m", 166.6, 33, { x: .5, r: nt(166.6, 33, 159.3, 13.1, 139.2, 0, 116.9, 0, 0) }],
                    ["b", 159.3, 13.1, 139.2, 0, 116.9, 0, { r: Y }],
                    ["b", 88.2, 0, 65, 23.2, 65, 51.9, { r: V }],
                    ["l", 65, 352, { y: 0, f: 1 }]
                ]
            }, {
                d: -1,
                v: [
                    ["m", 0, 130, { x: 0, r: Y }],
                    ["l", 154, 130, { x: 0, f: 1 }]
                ]
            }]),
            g: tt(600, 232, 338, 10, 2, -117, -117, JSON.parse(JSON.stringify(Ot))),
            h: tt(520, 182, 352, 0, 0, 0, 0, JSON.parse(JSON.stringify(Jt))),
            i: tt(200, 0, 352, 0, 0, 0, 0, [{
                d: 1,
                v: [
                    ["a", 0, 90, { y: -3 }]
                ]
            }, {
                d: 1,
                v: [
                    ["m", 0, 352, { y: 0, f: 1 }],
                    ["l", 0, 130, { y: -3 }]
                ]
            }]),
            j: tt(220, 115.9, 352, -60, -60, 0, 0, [{
                d: 1,
                v: [
                    ["a", 0, 90, { y: -3 }]
                ]
            }, {
                d: 1,
                v: [
                    ["m", -115.9, 444, { x: .4, y: .63, r: nt(-115.9, 444, 12.6 - 115.9, 454.4, 29.6 - 115.9, 460.2, -70, 461.2, 0), f: 1 }],
                    ["b", 12.6 - 115.9, 454.4, 29.6 - 115.9, 460.2, -70, 461.2, { x: .4, y: .63, r: Y }],
                    ["b", 84.5 - 115.9, 463.5, 0, 435.1, 0, 396.4, { x: .4, y: .63, r: V }],
                    ["l", 0, 130, { y: -3 }]
                ]
            }]),
            k: tt(450, 164, 352, -10, -10, 0, 0, [{
                d: -1,
                v: [
                    ["m", 0, 0, { y: 0, r: V }],
                    ["l", 0, 352, { y: 0, f: 1 }]
                ]
            }, {
                d: -1,
                v: [
                    ["m", 160, 130, { x: .7, y: 0, r: et(164, 130, 0, 234.5), f: 1 }],
                    ["l", 0, 234.5, { r: Y, p: 1 }],
                    ["l", 0, 237.5, { r: Y, p: 1, v: 1 }],
                    ["l", 164, 352, { x: .7, y: .7, f: 1 }]
                ]
            }]),
            l: tt(200, 0, 352, 0, 0, 0, 0, [{
                d: 1,
                v: [
                    ["m", 0, 352, { y: 0, f: 1 }],
                    ["l", 0, 0, { y: 0 }]
                ]
            }]),
            m: tt(740, 300, 352, 0, 0, 0, 0, [{
                d: -1,
                v: [
                    ["m", 0, 130, { y: -3.6 }],
                    ["l", 0, 352, { y: 0, f: 1 }]
                ]
            }, {
                d: -1,
                v: [
                    ["m", 0, 198, { y: 0, r: V, p: 1 }],
                    ["b", 0, 156.6, 33.6, 123, 75, 123, { r: Y }],
                    ["b", 116.4, 123, 150, 156.6, 150, 198, { r: V }],
                    ["l", 150, 352, { y: 0, f: 1 }]
                ]
            }, {
                d: -1,
                v: [
                    ["m", 150, 198, { y: 0, r: V, p: 1 }],
                    ["b", 150, 156.6, 183.6, 123, 225, 123, { r: Y }],
                    ["b", 266.4, 123, 300, 156.6, 300, 198, { r: V }],
                    ["l", 300, 352, { y: 0, f: 1 }]
                ]
            }]),
            n: tt(520, 182, 352, 0, 0, 0, 0, JSON.parse(JSON.stringify(Nt))),
            o: tt(580, 232, 232, 0, 0, -64, -64, JSON.parse(JSON.stringify(_t))),
            p: tt(600, 232, 338, -10, -2, -117, -117, [{
                d: -1,
                v: [
                    ["m", 0, 5, { y: -2.8 }],
                    ["l", 0, 116, { r: Z }],
                    ["b", 0, 180.1, 51.9, 232, 116, 232, { r: Y }],
                    ["b", 180.1, 232, 232, 180.1, 232, 116, { r: V }],
                    ["b", 232, 51.9, 180.1, 0, 116, 0, { r: Y }],
                    ["b", 51.9, 0, 0, 51.9, 0, 116, { r: V }],
                    ["l", 0, 338, { y: 0, f: 1 }]
                ]
            }]),
            q: tt(600, 232, 338, 10, 2, -117, -117, [{
                d: -1,
                v: [
                    ["m", 232, 5, { y: -2.8 }],
                    ["l", 232, 116, { r: Z }],
                    ["b", 232, 180.1, 180.1, 232, 116, 232, { r: Y }],
                    ["b", 51.9, 232, 0, 180.1, 0, 116, { r: V }],
                    ["b", 0, 51.9, 51.9, 0, 116, 0, { r: Y }],
                    ["b", 180.1, 0, 232, 51.9, 232, 116, { r: V }],
                    ["l", 232, 338, { y: 0, f: 1 }]
                ]
            }]),
            r: tt(340, 119.2, 352, -20, -20, 0, 0, [{
                d: -1,
                v: [
                    ["m", 0, 130, { y: -3.3 }],
                    ["l", 0, 352, { y: 0, f: 1 }]
                ]
            }, {
                d: -1,
                v: [
                    ["m", 0, 181, { r: V, p: 1 }],
                    ["b", 0, 181, 41.9, 101.2, 119.2, 128.5, { x: 0, y: 2, r: nt(119.2, 128.5, 41.9, 101.2, 0, 181, 119.2, 128.5, 0), f: 1 }]
                ]
            }]),
            s: tt(400, 143.808, 231.12, 0, 0, -64, -64, JSON.parse(JSON.stringify(wt))),
            t: tt(356, 232, 352, -30, -30, 0, 0, [{
                d: -1,
                v: [
                    ["m", 65, 0, { y: 0 }],
                    ["l", 65, 304.2],
                    ["b", 65, 332.9, 88.2, 356.1, 116.9, 356.1, { r: Y }],
                    ["b", 139.2, 356.1, 159.3, 343, 166.6, 317.1, { x: 0, f: 1 }]
                ]
            }, {
                d: -1,
                v: [
                    ["m", 0, 130, { x: 0, r: Y }],
                    ["l", 154, 130, { x: 0, f: 1 }]
                ]
            }]),
            u: tt(520, 182, 352, 0, 0, 0, 0, JSON.parse(JSON.stringify(Pt))),
            v: tt(500, 200, 352, 0, 0, 0, 0, [{
                d: -1,
                v: [
                    ["m", 0, 130, { x: .6, y: -3, r: et(0, 130, 98.5, 352) }],
                    ["l", 98.5, 352, { r: et(0, 130, 98.5, 352), f: 1 }],
                    ["l", 101.5, 352, { r: et(101.5, 352, 200, 130), f: 1, v: 1 }],
                    ["l", 200, 130, { x: .6, y: -3, f: 1 }]
                ]
            }]),
            w: tt(700, 310, 352, 0, 0, 0, 0, [{
                d: -1,
                v: [
                    ["m", 0, 130, { x: .6, y: -3, r: et(0, 130, 76.5, 352) }],
                    ["l", 76.5, 352, { r: et(0, 130, 76.5, 352), f: 1 }],
                    ["l", 79.5, 352, { r: et(79.5, 352, 153.5, 130), f: 1, v: 1 }],
                    ["l", 153.5, 130, { y: 1, r: et(79.5, 352, 153.5, 130), f: 1 }],
                    ["l", 156.5, 130, { y: 1, r: et(156.5, 130, 231.5, 352), f: 1, v: 1 }],
                    ["l", 231.5, 352, { r: et(156.5, 130, 231.5, 352), f: 1 }],
                    ["l", 234.5, 352, { r: et(234.5, 352, 310, 130), f: 1, v: 1 }],
                    ["l", 310, 130, { x: .6, y: -3, f: 1 }]
                ]
            }]),
            x: tt(490, 210, 352, 0, 0, 0, -7, [{
                d: -1,
                v: [
                    ["m", 10, 130, { x: .5, y: -1, r: et(10, 130, 210, 352) }],
                    ["l", 210, 352, { x: .5, y: .5, f: 1 }]
                ]
            }, {
                d: -1,
                v: [
                    ["m", 200, 130, { x: .5, y: -1, r: et(200, 130, 0, 352) }],
                    ["l", 0, 352, { x: .5, y: .5, f: 1 }]
                ]
            }]),
            y: tt(500, 225.5, 331.5, 10, 10, -119, -119, JSON.parse(JSON.stringify(kt))),
            z: tt(420, 172, 352, 0, 0, 0, 0, [{
                d: -1,
                v: [
                    ["m", 6, 130, { x: -.5, y: 1, r: Y }],
                    ["l", 166, 130, { x: 1.8, y: 1, r: Y, f: 1 }],
                    ["l", 166, 133, { x: 1.8, y: 1, r: V, p: 1, v: 1 }],
                    ["l", 0, 349, { x: 1.7, r: V, p: 1 }],
                    ["l", 0, 352, { x: 1.7, r: Y, f: 1, v: 1 }],
                    ["l", 172, 352, { x: -.4, r: Y, f: 1 }]
                ]
            }])
        },
        Dt = {
            0: tt(660, 270, 360, 0, 0, 0, 0, [{
                d: 1,
                v: [
                    ["m", 270, 180, { r: V, p: 1, f: 1 }],
                    ["b", 270, 279.4, 209.6, 360, 135, 360, { r: Y }],
                    ["b", 60.4, 360, 0, 279.4, 0, 180, { r: V }],
                    ["b", 0, 80.6, 60.4, 0, 135, 0, { r: Y }],
                    ["b", 209.6, 0, 270, 80.6, 270, 180, { r: V, c: 1 }]
                ]
            }]),
            1: tt(380, 76, 352, 15, 15, 0, 0, [{
                d: -1,
                v: [
                    ["m", 0, 51, { x: -2, y: 2, r: et(0, 51, 73, 0) }],
                    ["l", 73, 0, { r: V, p: 1 }],
                    ["l", 76, 0, { r: V, f: 1, v: 1 }],
                    ["l", 76, 352, { y: 0, f: 1 }]
                ]
            }]),
            2: tt(580, 210, 356, 0, 0, 2, 2, [{
                d: -1,
                v: [
                    ["m", 3.9, 68.8, { x: 1.2, y: 1.2, r: nt(3.9, 68.8, 16.7, 29, 54.2, 3.1, 98.2, .2, 0) }],
                    ["b", 16.7, 29, 54.2, 3.1, 98.2, .2],
                    ["b", 151.8, -3.3, 208.5, 38.3, 198.9, 100.1],
                    ["b", 197.1, 111.8, 196.4, 142.4, 101.5, 235.2],
                    ["b", 11.4, 323.2, 0, 353, 0, 353, { r: Z }],
                    ["l", 0, 353, { r: Y, p: 1 }],
                    ["l", 0, 356, { r: Y, f: 1, v: 1 }],
                    ["l", 210, 356, { x: -.5, f: 1 }]
                ]
            }]),
            3: tt(580, 222.1, 360, 0, 0, 0, 0, [{
                d: -1,
                v: [
                    ["m", 10.7, 66.3, { r: nt(10.7, 66.3, 11.2, 64.8, 11.7, 63.3, 12.3, 61.8, 0) }],
                    ["b", 11.2, 64.8, 11.7, 63.3, 12.3, 61.8, { r: Z }],
                    ["b", 25.8, 25.9, 64.5, 0, 110.1, 0, { r: Y }],
                    ["b", 167, 0, 213.1, 40.3, 213.1, 90, { r: V }],
                    ["b", 213.1, 139.7, 167, 180, 110.1, 179.9, { r: Y, f: 1 }],
                    ["l", 100.1, 179.9, { x: -5, y: 1, r: Y, f: 1 }],
                    ["l", 110.1, 180, { r: Y, p: 1 }],
                    ["b", 172, 180, 222.1, 220.3, 222.1, 270, { r: V }],
                    ["b", 222.1, 319.7, 172, 360, 110.1, 360, { r: Y }],
                    ["b", 56.9, 360, 12.4, 330.2, 1, 290.3, { f: 1 }]
                ]
            }]),
            4: tt(596, 236, 352, 0, 0, 0, 0, [{
                d: 1,
                v: [
                    ["m", 175, 352, { y: 0, f: 1 }],
                    ["l", 175, 0, { f: 1 }],
                    ["l", 172, 0, { r: Y, p: 1, v: 1 }],
                    ["l", 0, 273, { r: V, p: 1 }],
                    ["l", 0, 276, { r: Y, f: 1, v: 1 }],
                    ["l", 236, 276, { x: -.5 }]
                ]
            }]),
            5: tt(596, 208.5, 356, 0, -5, -2, -2, [{
                d: 1,
                v: [
                    ["m", 0, 295.7, { r: nt(0, 295.7, 15.3, 333.8, 52.2, 356.2, 97.5, 356, 0), f: 1 }],
                    ["b", 15.3, 333.8, 52.2, 356.2, 97.5, 356, { r: Y }],
                    ["b", 159.1, 355.7, 206.1, 306.9, 208.5, 240.8, { r: V }],
                    ["b", 210.9, 173.9, 162.7, 120.8, 97.5, 125.6, { r: Y }],
                    ["b", 59.4, 128.4, 25.5, 145.8, 5.6, 176.4, { f: 1 }],
                    ["l", 5.6, 176.4, { r: Z }],
                    ["l", 5.6 - 3, 176.4, { r: V, p: 1, v: 1 }],
                    ["l", 11.5, 0, { r: Y, f: 1 }],
                    ["l", 193.5, 0, { x: -.5 }]
                ]
            }]),
            6: tt(596, 215.8, 360, 0, -2, 0, 0, [{
                d: 1,
                v: [
                    ["m", 7.6, 272.3, { r: V, p: 1, f: 1 }],
                    ["b", 6.4, 265.8, 5.8, 259.1, 5.8, 252.2, { r: V }],
                    ["b", 5.8, 192.6, 52.8, 144.2, 110.8, 144.2, { r: Y }],
                    ["b", 168.7, 144.2, 215.8, 192.6, 215.8, 252.2, { r: V }],
                    ["b", 215.8, 311.9, 168.7, 360, 110.8, 360, { r: Y }],
                    ["b", 59.5, 360, 16.8, 322.4, 7.6, 272.4, { r: Z }],
                    ["b", 7.6, 272.4, -44.1, 8.8, 122.2, .2],
                    ["b", 165.5, -2.1, 193.8, 21, 212.1, 56.4]
                ]
            }]),
            7: tt(540, 213, 352, 0, 0, 0, 0, [{
                d: -1,
                v: [
                    ["m", 0, 0, { x: 0, r: Y }],
                    ["l", 213, 0, { r: Y, f: 1 }],
                    ["l", 213, .1, { r: Z }],
                    ["l", 72.7, 352, { y: .1, f: 1 }]
                ]
            }]),
            8: tt(596, 224, 360, 0, 0, 0, 0, [{
                d: 1,
                v: [
                    ["m", 112, 180, { r: V, p: 1, f: 1 }],
                    ["b", 50.1, 180, 0, 220.3, 0, 270, { r: V }],
                    ["b", 0, 319.7, 50.1, 360, 112, 360, { r: Y }],
                    ["b", 173.9, 360, 224, 319.7, 224, 270, { r: V }],
                    ["b", 224, 220.3, 173.9, 180, 112, 180, { r: Y }],
                    ["b", 55.1, 180, 9, 139.7, 9, 90, { r: V }],
                    ["b", 9, 40.3, 55.1, 0, 112, 0, { r: Y }],
                    ["b", 168.9, 0, 215, 40.3, 215, 90, { r: V }],
                    ["b", 215, 139.7, 168.9, 180, 112, 180, { r: V, p: 1, f: 1 }]
                ]
            }]),
            9: tt(596, 215.8, 360, 0, -2, 0, 0, [{
                d: -1,
                v: [
                    ["m", 208.2, 88, { r: V, p: 1, f: 1 }],
                    ["b", 209.4, 94.5, 210, 101.2, 210, 108, { r: V }],
                    ["b", 210, 167.6, 163, 216, 105, 216, { r: Y }],
                    ["b", 47, 216, -0, 167.6, 0, 108, { r: V }],
                    ["b", 0, 48.4, 47, -0, 105, 0, { r: Y }],
                    ["b", 156.3, 0, 199, 37.8, 208.2, 87.8, { r: Z }],
                    ["b", 208.2, 87.8, 259.8, 351.4, 93.5, 360],
                    ["b", 50.3, 362.3, 21.9, 339.2, 3.6, 303.8, { f: 1 }]
                ]
            }])
        },
        Tt = {
            " ": tt(336, 0, 0, 0, 0, 0, 0, [{ d: 1, v: [] }]),
            tofu: tt(672, 232, 352, 0, 0, 0, 0, [{
                d: -1,
                v: [
                    ["m", 0, 0, { r: V }],
                    ["l", 232, 0, { r: V, f: 1 }],
                    ["l", 232, 352, { r: V, f: 1 }],
                    ["l", 0, 352, { r: V, f: 1 }],
                    ["l", 0, 0, { r: V, p: 1, f: 1, c: 1 }]
                ]
            }, {
                d: 1,
                v: [
                    ["m", 0, 0, { r: V, p: 1, f: 1 }],
                    ["l", 232, 352, { r: Z }]
                ]
            }]),
            "?": tt(520, 190.348, 360, 0, -5, 0, 0, [{
                d: 1,
                v: [
                    ["a", 89.174, 356]
                ]
            }, {
                d: -1,
                v: [
                    ["m", 0, 87.8, { r: nt(0, 87.8, 12, -2.3, 99.1, 0, 0, 87.8, 0) }],
                    ["b", 0, 87.8, 12, -2.3, 99.1, 0, { r: Y }],
                    ["b", 186.2, 2.4, 204.5, 75.2, 180.9, 121.4],
                    ["b", 157.3, 167.6, 119.7, 178.3, 97.4, 223.2],
                    ["b", 90.5, 237.1, 88.1, 249.8, 88, 260.8, { r: V, f: 1 }]
                ]
            }]),
            "¿": tt(520, 190.348, 360, 0, -5, 0, 0, [{
                d: 1,
                v: [
                    ["a", 101.174, 93]
                ]
            }, {
                d: -1,
                v: [
                    ["m", 190.3, 361, { r: nt(190.3, 361, 178.3, 451.1, 91.2, 448.8, 190.3, 361, 0) }],
                    ["b", 190.3, 361, 178.3, 451.1, 91.2, 448.8, { r: Y }],
                    ["b", 4.1, 446.4, -14.2, 373.6, 9.4, 327.4],
                    ["b", 33, 281.2, 70.6, 270.5, 92.9, 225.6],
                    ["b", 99.8, 211.7, 102.2, 199, 102.3, 188, { r: V, f: 1 }]
                ]
            }]),
            "!": tt(465, 8, 355, 0, -5, 0, 0, [{
                d: 1,
                v: [
                    ["a", 4, 356]
                ]
            }, {
                d: -1,
                v: [
                    ["m", 4, 0, { y: 0 }],
                    ["l", 4, 260.8, { f: 1 }]
                ]
            }]),
            "¡": tt(465, 8, 355, 0, -5, 0, 0, [{
                d: 1,
                v: [
                    ["a", 4, 93]
                ]
            }, {
                d: -1,
                v: [
                    ["m", 4, 188],
                    ["l", 4, 448.8, { f: 1, y: .3 }]
                ]
            }]),
            $: tt(568, 224, 360, 0, 0, 0, 0, [{
                d: -1,
                v: [
                    ["m", 212, 51.3, { r: nt(0, 295.4, 17.6, 332.1, 58.3, 360, 110.3, 360, 0), f: 1 }],
                    ["b", 196.5, 20.5, 158.4, 0, 114.8, 0],
                    ["b", 57.3, 0, 13.3, 29.8, 12, 84.4],
                    ["b", 10.9, 130.6, 47.3, 157.7, 112.4, 173.3],
                    ["b", 180.7, 189.6, 224.2, 214.7, 224, 271],
                    ["b", 223.8, 329.6, 173.9, 360, 110.3, 360],
                    ["b", 58.3, 360, 17.6, 332.1, 0, 295.4, { f: 1 }]
                ]
            }, {
                d: -1,
                v: [
                    ["m", 112, -30, { y: 0 }],
                    ["l", 112, 390, { y: 0, f: 1 }]
                ]
            }]),
            "@": tt(820, 343.425, 360, 0, 0, -30, -30, [{
                d: -1,
                v: [
                    ["m", 251.9, 92.9, { r: et(251.9, 92.9, 238.5, 181.7) }],
                    ["l", 238.5, 181.7, { r: Z }],
                    ["b", 227.8, 236, 194.7, 267.2, 143.7, 259.2],
                    ["b", 99.1, 252.2, 87.7, 208.5, 90.1, 177.5],
                    ["b", 92.5, 148.4, 118.1, 91, 183.3, 99.1],
                    ["b", 251, 107.5, 238.5, 181.7, 238.5, 181.7, { r: Z }],
                    ["l", 232.5, 221.5],
                    ["b", 232.5, 221.5, 227.2, 257.6, 256, 263.6],
                    ["b", 284.9, 269.7, 309, 241.3, 309, 241.3, { r: Z }],
                    ["b", 309, 241.3, 343.4, 209, 343.4, 146.7],
                    ["b", 343.4, 84.3, 297.4, 3.5, 178.6, .1],
                    ["b", 59.7, -3.4, -5.3, 105.2, .3, 203.4],
                    ["b", 6.1, 303.7, 93.2, 354.5, 175.5, 359.5],
                    ["b", 175.5, 359.5, 246.5, 364.9, 302.7, 339.8, { f: 1 }]
                ]
            }]),
            "#": tt(760, 314, 352, 0, 0, 0, 0, [{
                d: -1,
                v: [
                    ["m", 117, 0, { y: 0, r: et(117, 0, 47, 352) }],
                    ["l", 47, 352, { y: 0, f: 1 }]
                ]
            }, {
                d: -1,
                v: [
                    ["m", 267, 0, { y: 0, r: et(267, 0, 197, 352) }],
                    ["l", 197, 352, { y: 0, f: 1 }]
                ]
            }, {
                d: -1,
                v: [
                    ["m", 24, 117, { x: 0, r: Y }],
                    ["l", 314, 117, { x: 0, f: 1 }]
                ]
            }, {
                d: -1,
                v: [
                    ["m", 0, 235, { x: 0, r: Y }],
                    ["l", 290, 235, { x: 0, f: 1 }]
                ]
            }]),
            "%": tt(920, 388, 360, 0, 0, 0, 0, [{
                d: -1,
                v: [
                    ["m", 307.1, 5.1, { x: 0, y: 0, r: et(307.1, 5.1, 80.9, 354.9) }],
                    ["l", 80.9, 354.9, { x: 0, y: 0, f: 1 }]
                ]
            }, {
                d: -1,
                v: [
                    ["m", 146, 73, { r: V, p: 1 }],
                    ["b", 146, 113.3, 113.3, 146, 73, 146, { r: Y }],
                    ["b", 32.7, 146, 0, 113.3, 0, 73, { r: V }],
                    ["b", 0, 32.7, 32.7, 0, 73, 0, { r: Y }],
                    ["b", 113.3, 0, 146, 32.7, 146, 73, { r: V, c: 1, f: 1 }]
                ]
            }, {
                d: -1,
                v: [
                    ["m", 388, 287, { r: V, p: 1 }],
                    ["b", 388, 327.3, 355.3, 360, 315, 360, { r: Y }],
                    ["b", 274.7, 360, 242, 327.3, 242, 287, { r: V }],
                    ["b", 242, 246.7, 274.7, 214, 315, 214, { r: Y }],
                    ["b", 355.3, 214, 388, 246.7, 388, 287, { r: V, c: 1, f: 1 }]
                ]
            }]),
            "^": tt(596, 176, 352, 0, 0, 0, 0, [{
                d: -1,
                v: [
                    ["m", 0, 150, { r: et(0, 150, 86.5, 0) }],
                    ["l", 86.5, 0, { r: et(0, 150, 86.5, 0), f: 1 }],
                    ["l", 89.5, 0, { r: et(89.5, 0, 176, 150), f: 1, v: 1 }],
                    ["l", 176, 150, { f: 1 }]
                ]
            }]),
            "·": tt(231, 8, 355, 0, 0, 0, 0, [{
                d: 1,
                v: [
                    ["a", 4, 183.5]
                ]
            }]),
            "×": tt(712, 176.8, 176.8, 0, 0, 0, 0, [{
                d: -1,
                v: [
                    ["m", 0, 0, { x: 0, y: 0, r: et(0, 0, 176.8, 176.8) }],
                    ["l", 176.8, 176.8, { x: 0, y: 0, f: 1 }]
                ]
            }, {
                d: -1,
                v: [
                    ["m", 176.8, 0, { x: 0, y: 0, r: et(176.8, 0, 0, 176.88) }],
                    ["l", 0, 176.8, { x: 0, y: 0, f: 1 }]
                ]
            }]),
            "÷": tt(712, 188, 0, 0, 0, 0, 0, [{
                d: 1,
                v: [
                    ["a", 94, 110]
                ]
            }, {
                d: 1,
                v: [
                    ["a", 94, -110]
                ]
            }, {
                d: -1,
                v: [
                    ["m", 0, 0, { x: 0, y: 0, r: Y }],
                    ["l", 188, 0, { x: 0, y: 0, f: 1 }]
                ]
            }]),
            "«": tt(896, 310, 236, 0, 0, 0, 0, [{
                d: 1,
                v: [
                    ["m", 150, 236, { r: et(150, 236, 0, 119.5), f: 1 }],
                    ["l", 0, 119.5, { r: et(150, 236, 0, 119.5), f: 1 }],
                    ["l", 0, 116.5, { r: et(0, 116.5, 150, 0), f: 1, v: 1 }],
                    ["l", 150, 0]
                ]
            }, {
                d: 1,
                v: [
                    ["m", 310, 236, { r: et(310, 236, 160, 119.5), f: 1 }],
                    ["l", 160, 119.5, { r: et(310, 236, 160, 119.5), f: 1 }],
                    ["l", 160, 116.5, { r: et(160, 116.5, 310, 0), f: 1, v: 1 }],
                    ["l", 310, 0]
                ]
            }]),
            "»": tt(896, 310, 236, 0, 0, 0, 0, [{
                d: 1,
                v: [
                    ["m", 0, 236, { r: et(0, 236, 150, 119.5), f: 1 }],
                    ["l", 150, 119.5, { r: et(0, 236, 0, 119.5), f: 1 }],
                    ["l", 150, 116.5, { r: et(150, 116.5, 0, 0), f: 1, v: 1 }],
                    ["l", 0, 0]
                ]
            }, {
                d: 1,
                v: [
                    ["m", 160, 236, { r: et(160, 236, 310, 119.5), f: 1 }],
                    ["l", 310, 119.5, { r: et(0, 236, 0, 119.5), f: 1 }],
                    ["l", 310, 116.5, { r: et(310, 116.5, 160, 0), f: 1, v: 1 }],
                    ["l", 160, 0]
                ]
            }]),
            "&": tt(660, 259.191, 360, 0, 0, 0, 0, [{
                d: 1,
                v: [
                    ["m", 257.9, 355, { x: .5, y: .5, r: et(257.9, 355, 52.8, 135.3), f: 1 }],
                    ["l", 52.8, 135.3],
                    ["b", 52.8, 135.3, -2.2, 79.5, 46.6, 26.7],
                    ["b", 46.6, 26.7, 68.1, 0, 101.8, 0, { r: Y }],
                    ["b", 137.2, 0, 174.1, 21.1, 181.2, 65.3],
                    ["b", 188.6, 111.7, 142.6, 142.9, 108.9, 162.9],
                    ["b", 75.2, 182.8, 40.8, 211.4, 40.8, 211.4, { r: Z }],
                    ["b", 35, 217.1, -34.7, 273.7, 22.2, 330.5],
                    ["b", 22.2, 330.5, 48.1, 360, 93.4, 360, { r: Y }],
                    ["b", 138.6, 360, 212.2, 322, 259.2, 200.5]
                ]
            }]),
            "*": tt(558, 183.597, 212, 0, 0, 0, 0, [{
                d: -1,
                v: [
                    ["m", 91.8, 0, { x: 0, y: 0 }],
                    ["l", 91.8, 212, { x: 0, y: 0, f: 1 }]
                ]
            }, {
                d: -1,
                v: [
                    ["m", 0, 53, { x: 0, y: 0, r: et(0, 53, 183.6, 159) }],
                    ["l", 183.6, 159, { x: 0, y: 0, f: 1 }]
                ]
            }, {
                d: -1,
                v: [
                    ["m", 0, 159, { x: 0, y: 0, r: et(0, 159, 183.6, 53) }],
                    ["l", 183.6, 53, { x: 0, y: 0, f: 1 }]
                ]
            }]),
            "+": tt(712, 250, 250, 0, 0, 0, 0, [{
                d: -1,
                v: [
                    ["m", 125, 0, { x: 0, y: 0 }],
                    ["l", 125, 250, { x: 0, y: 0, f: 1 }]
                ]
            }, {
                d: -1,
                v: [
                    ["m", 0, 125, { x: 0, y: 0, r: Y }],
                    ["l", 250, 125, { x: 0, y: 0, f: 1 }]
                ]
            }]),
            "=": tt(712, 216, 86, 0, 0, 0, 0, [{
                d: -1,
                v: [
                    ["m", 0, 0, { x: 0, y: 0, r: Y }],
                    ["l", 216, 0, { x: 0, y: 0, f: 1 }]
                ]
            }, {
                d: -1,
                v: [
                    ["m", 0, 86, { x: 0, y: 0, r: Y }],
                    ["l", 216, 86, { x: 0, y: 0, f: 1 }]
                ]
            }]),
            "-": tt(712, 188, 0, 0, 0, 0, 0, [{
                d: -1,
                v: [
                    ["m", 0, 0, { x: 0, y: 0, r: Y }],
                    ["l", 188, 0, { x: 0, y: 0, f: 1 }]
                ]
            }]),
            _: tt(481, 235, 400, 0, 0, 0, 0, [{
                d: -1,
                v: [
                    ["m", 0, 400, { x: 0, y: 0, r: Y }],
                    ["l", 235, 400, { x: 0, y: 0, f: 1 }]
                ]
            }]),
            ":": tt(231, 8, 355, 0, 0, 0, 0, [{
                d: 1,
                v: [
                    ["a", 4, 183.5]
                ]
            }, {
                d: 1,
                v: [
                    ["a", 4, 353.5]
                ]
            }]),
            ";": tt(231, 8, 355, 0, 0, 0, 0, [{
                d: 1,
                v: [
                    ["a", 4, 183.5]
                ]
            }, {
                d: -1,
                v: [
                    ["m", 4, 350, { x: 0, y: 2, r: et(4, 350, -6, 430) }],
                    ["l", -6, 430, { x: 0, y: .5, f: 1 }]
                ]
            }]),
            ".": tt(231, 8, 355, 0, 0, 0, 0, [{
                d: 1,
                v: [
                    ["a", 4, 353.5]
                ]
            }]),
            ",": tt(231, 10, 355, 10, 10, 0, 0, [{
                d: -1,
                v: [
                    ["m", 10, 350, { x: 0, y: 2, r: et(10, 350, 0, 430) }],
                    ["l", 0, 430, { x: 0, y: .5, f: 1 }]
                ]
            }]),
            "'": tt(173, 0, 360, 0, 0, 0, 0, [{
                d: -1,
                v: [
                    ["m", 0, 0, { x: 0, y: 0 }],
                    ["l", 0, 80, { x: 0, y: 0, f: 1 }]
                ]
            }]),
            '"': tt(297, 60, 360, 0, 0, 0, 0, [{
                d: -1,
                v: [
                    ["m", 0, 0, { x: -1.5, y: 0 }],
                    ["l", 0, 80, { x: -1.5, y: 0, f: 1 }]
                ]
            }, {
                d: -1,
                v: [
                    ["m", 60, 0, { x: -1.5, y: 0 }],
                    ["l", 60, 80, { x: -1.5, y: 0, f: 1 }]
                ]
            }]),
            "~": tt(731, 199.391, 47.063, 0, 0, 0, 0, [{
                d: 1,
                v: [
                    ["m", 199.4, 20.7, { x: 0, y: 0, r: nt(199.4, 20.7, 187.6, 36.6, 168.2, 47.1, 148.2, 47.1, 0), f: 1 }],
                    ["b", 187.6, 36.6, 168.2, 47.1, 148.2, 47.1, { x: 0, y: 0, r: Y }],
                    ["b", 129.1, 47.1, 112.1, 36.6, 95.3, 25.5, { x: 0, y: 0 }],
                    ["b", 76.8, 13.2, 59.1, 0, 39.6, 0, { x: 0, y: 0, r: Y }],
                    ["b", 22.3, 0, 10.9, 8.9, 0, 20, { x: 0, y: 0 }]
                ]
            }]),
            "(": tt(365, 107.865, 360, 0, 0, 0, 0, [{
                d: 1,
                v: [
                    ["m", 107.9, 360, { y: .8, r: nt(107.9, 360, 39.7, 321.1, 0, 259.8, 0, 182.9, 0), f: 1 }],
                    ["b", 39.7, 321.1, 0, 259.8, 0, 182.9, { y: .8, r: V }],
                    ["b", 0, 100.2, 39.7, 38.9, 107.9, 0, { y: .8 }]
                ]
            }]),
            ")": tt(365, 107.865, 360, 0, 0, 0, 0, [{
                d: -1,
                v: [
                    ["m", 0, 0, { y: .8, r: nt(0, 0, 68.2, 38.9, 107.9, 100.2, 107.9, 177, 0) }],
                    ["b", 68.2, 38.9, 107.9, 100.2, 107.9, 177, { y: .8, r: V }],
                    ["b", 107.9, 259.8, 68.2, 321.1, 0, 360, { y: .8, f: 1 }]
                ]
            }]),
            "{": tt(385, 107.865, 360, 0, 0, 0, 0, [{
                d: 1,
                v: [
                    ["m", 94.5, 360, { x: -.5, r: Y }],
                    ["l", 77.9, 360, { x: -.5 }],
                    ["b", 57.4, 360, 37, 343, 37, 310.7, { x: -.5 }],
                    ["l", 37, 233.4, { x: -.5 }],
                    ["b", 37, 207.9, 24.3, 183.7, 3.8, 180.7, { x: -.5, r: Y }],
                    ["l", 3.8, 179.8, { x: -.5, r: Y, p: 1 }],
                    ["b", 24.3, 176.8, 37, 153.1, 37, 126.7, { x: -.5 }],
                    ["l", 37, 49.4, { x: -.5 }],
                    ["b", 37, 17.1, 57.4, .1, 77.9, .1, { x: -.5 }],
                    ["l", 94.5, .1, { x: -.5 }]
                ]
            }]),
            "}": tt(385, 107.865, 360, 0, 0, 0, 0, [{
                d: -1,
                v: [
                    ["m", 13.4, .1, { x: -.5, r: Y }],
                    ["l", 30, .1, { x: -.5 }],
                    ["b", 50.4, .1, 70.8, 17.1, 70.8, 49.4, { x: -.5 }],
                    ["l", 70.8, 126.7, { x: -.5 }],
                    ["b", 70.8, 153.1, 83.6, 176.8, 104, 179.8, { x: -.5, r: Y }],
                    ["l", 104, 180.7, { x: -.5, r: Y, p: 1 }],
                    ["b", 83.6, 183.7, 70.8, 207.9, 70.8, 233.4, { x: -.5 }],
                    ["l", 70.8, 310.7, { x: -.5 }],
                    ["b", 70.8, 343, 50.4, 360, 30, 360, { x: -.5 }],
                    ["l", 13.4, 360, { x: -.5 }]
                ]
            }]),
            "[": tt(365, 66, 352, 0, 0, 0, 0, [{
                d: -1,
                v: [
                    ["m", 66, 0, { x: -1, r: Y }],
                    ["l", 0, 0, { r: V, f: 1 }],
                    ["l", 0, 352, { r: V, f: 1 }],
                    ["l", 66, 352, { x: -1, f: 1 }]
                ]
            }]),
            "]": tt(365, 66, 352, 0, 0, 0, 0, [{
                d: -1,
                v: [
                    ["m", 0, 0, { x: -1, r: Y }],
                    ["l", 66, 0, { r: V, f: 1 }],
                    ["l", 66, 352, { r: V, f: 1 }],
                    ["l", 0, 352, { x: -1, f: 1 }]
                ]
            }]),
            "<": tt(423, 90, 352, 0, 0, 0, 0, [{
                d: -1,
                v: [
                    ["m", 90, 0, { x: -1, y: .3, r: et(90, 0, 0, 176) }],
                    ["l", 0, 176, { r: V, f: 1 }],
                    ["l", 90, 352, { x: -1, y: .3, f: 1 }]
                ]
            }]),
            ">": tt(423, 90, 352, 0, 0, 0, 0, [{
                d: -1,
                v: [
                    ["m", 0, 0, { x: -1, y: .3, r: et(0, 0, 90, 176) }],
                    ["l", 90, 176, { r: V, f: 1 }],
                    ["l", 0, 352, { x: -1, y: .3, f: 1 }]
                ]
            }]),
            "/": tt(433, 130, 352, 0, 0, 0, 0, [{
                d: 1,
                v: [
                    ["m", 0, 352, { r: et(0, 352, 130, 0), f: 1, y: 0 }],
                    ["l", 130, 0, { y: 0 }]
                ]
            }]),
            "þ": tt(600, 232, 338, -10, -2, -117, -117, [{
                d: -1,
                v: [
                    ["m", 0, -106, { y: 0 }],
                    ["l", 0, 116, { r: Z }],
                    ["b", 0, 180.1, 51.9, 232, 116, 232, { r: Y }],
                    ["b", 180.1, 232, 232, 180.1, 232, 116, { r: V }],
                    ["b", 232, 51.9, 180.1, 0, 116, 0, { r: Y }],
                    ["b", 51.9, 0, 0, 51.9, 0, 116, { r: V }],
                    ["l", 0, 338, { y: 0, f: 1 }]
                ]
            }]),
            "Þ": tt(520, 162, 352, -5, -70, 0, 0, [{
                d: -1,
                v: [
                    ["m", 0, 0, { x: 0, y: 0, r: V }],
                    ["l", 0, 352, { x: 0, y: 0, r: V, f: 1 }]
                ]
            }, {
                d: 1,
                v: [
                    ["m", 0, 281.6, { x: 0, r: Y, f: 1, p: 1 }],
                    ["l", 57, 281.6, { x: -.5, r: Y, f: 1 }],
                    ["b", 115, 281.6, 162, 233.4, 162, 175.4, { x: -.5, r: V }],
                    ["b", 162, 117.4, 115, 70.4, 57, 70.4, { x: -.5, r: Y }],
                    ["l", 0, 70.4, { x: 0, r: Y, f: 1, p: 1 }]
                ]
            }]),
            "ß": tt(596, 209, 352, -10, -10, 0, 0, [{
                d: 1,
                v: [
                    ["m", 0, 348.3, { r: V, f: 1, x: 0, y: 0 }],
                    ["l", 0, 104.3, { x: 0 }],
                    ["b", 0, 46, 36, 0, 98.9, 0, { x: 0 }],
                    ["b", 145.2, 0, 191, 27.9, 191, 81, { x: 1 }],
                    ["b", 191, 110.7, 165.6, 131.8, 151.8, 140.9],
                    ["l", 140, 148.8],
                    ["b", 120.6, 161.7, 110.8, 172.8, 110.8, 185.5],
                    ["b", 110.8, 206.7, 131.6, 213.8, 140, 217.5],
                    ["b", 190.6, 241.1, 211, 262.7, 211, 289.6],
                    ["b", 211, 329.5, 174.8, 352, 142.5, 352],
                    ["b", 97.3, 352, 75.2, 319.7, 72.3, 289.3]
                ]
            }])
        };

    function It(t, r) {
        var e = t,
            n = -60 + r;
        return [{
            d: -1,
            v: [
                ["m", -40 + e, n, { x: 0, y: 0, r: et(-40 + e, n, 0 + e, 60 + n) }],
                ["l", 0 + e, 60 + n, { x: 0, y: 0, f: 1 }]
            ]
        }]
    }

    function Rt(t, r) {
        var e = t,
            n = -60 + r;
        return [{
            d: -1,
            v: [
                ["m", 40 + e, n, { x: 0, y: 0, r: et(40 + e, n, 0 + e, 60 + n) }],
                ["l", 0 + e, 60 + n, { x: 0, y: 0, f: 1 }]
            ]
        }]
    }

    function jt(t, r) {
        var e = -68 + t,
            n = 0 + r;
        return [{
            d: -1,
            v: [
                ["m", 0 + e, 50 + n, { r: et(0 + e, 50 + n, 66.5 + e, 0 + n), y: 0, x: 0 }],
                ["l", 66.5 + e, 0 + n, { r: et(0 + e, 50 + n, 66.5 + e, 0 + n), y: 0, x: 0, f: 1 }],
                ["l", 69.5 + e, 0 + n, { r: et(69.5 + e, 0 + n, 136 + e, 50 + n), y: 0, x: 0, f: 1, v: 1 }],
                ["l", 136 + e, 50 + n, { y: 0, x: 0, f: 1 }]
            ]
        }]
    }

    function Mt(t, r) {
        var e = t - 76.24,
            n = r;
        return [{
            d: 1,
            v: [
                ["m", 159.52 + e, 16.56 + n, { x: -1, y: -.2, r: nt(159.52 + e, 16.56 + n, 150.08 + e, 29.28 + n, 134.56 + e, 37.68 + n, 118.56 + e, 37.68 + n, 0), f: 1 }],
                ["b", 150.08 + e, 29.28 + n, 134.56 + e, 37.68 + n, 118.56 + e, 37.68 + n, { x: -1, y: -.2, r: Y }],
                ["b", 103.28 + e, 37.68 + n, 89.68 + e, 29.28 + n, 76.24 + e, 20.4 + n, { x: -1, y: -.2 }],
                ["b", 61.44 + e, 10.56 + n, 47.28 + e, 0 + n, 31.68 + e, 0 + n, { x: -1, y: -.2, r: Y }],
                ["b", 17.84 + e, 0 + n, 8.72 + e, 7.12 + n, 0 + e, 16 + n, { x: -1, y: -.2 }]
            ]
        }]
    }

    function Ft(t, r) {
        return [{
            d: 1,
            v: [
                ["a", -50 + t, r, { x: 0, y: 0 }]
            ]
        }, {
            d: 1,
            v: [
                ["a", 50 + t, r, { x: 0, y: 0 }]
            ]
        }]
    }

    function Gt(t, r) {
        var e = t - 57,
            n = r;
        return [{
            d: 1,
            v: [
                ["m", 112.7 + e, 0 + n, { r: nt(112.7 + e, 0 + n + e, 10.1 + n, 110.1 + e, 19.3 + n, 105 + e, 27.7 + n, 0), x: 0, y: 0, f: 1 }],
                ["b", 112.7 + e, 10.1 + n, 110.1 + e, 19.3 + n, 105 + e, 27.7 + n, { x: 0, y: 0 }],
                ["b", 99.8 + e, 36.1 + n, 92.9 + e, 42.8 + n, 84.3 + e, 47.7 + n, { x: 0, y: 0 }],
                ["b", 75.7 + e, 52.6 + n, 66.7 + e, 55 + n, 57.3 + e, 55 + n, { x: 0, y: 0 }],
                ["b", 47.5 + e, 55 + n, 38.3 + e, 52.6 + n, 29.6 + e, 47.7 + n, { x: 0, y: 0 }],
                ["b", 20.8 + e, 42.8 + n, 13.8 + e, 36.1 + n, 8.5 + e, 27.7 + n, { x: 0, y: 0 }],
                ["b", 3.2 + e, 19.3 + n, .5 + e, 10.1 + n, .5 + e, 0 + n, { x: 0, y: 0 }]
            ]
        }]
    }

    function Ct(t, r) {
        var e = 88 + t,
            n = -116 + r;
        return [{
            d: 1,
            v: [
                ["m", 116 + e, 58 + n, { r: V, p: 1, f: 1 }],
                ["b", 116 + e, 90.05 + n, 90.05 + e, 116 + n, 58 + e, 116 + n, { r: Y }],
                ["b", 25.95 + e, 116 + n, 0 + e, 90.05 + n, 0 + e, 58 + n, { r: V }],
                ["b", 0 + e, 25.95 + n, 25.95 + e, 0 + n, 58 + e, 0 + n, { r: Y }],
                ["b", 90.05 + e, 0 + n, 116 + e, 25.95 + n, 116 + e, 58 + n, { r: V, c: 1 }]
            ]
        }]
    }

    function Lt(t, r) {
        return [{
            d: 1,
            v: [
                ["m", t - 40, r, { x: 0, y: 1, r: Y }],
                ["l", 100 + t, r, { x: 0, y: 1, f: 1 }]
            ]
        }]
    }

    function zt(t, r) {
        return [{
            d: -1,
            v: [
                ["m", t, r, { p: 1 }],
                ["b", 9.3 + t, 11.6 + r, 15.6 + t, 27.1 + r, 15.6 + t, 40.9 + r],
                ["b", 15.6 + t, 83.3 + r, -18.2 + t, 107.8 + r, -59.5 + t, 107.8 + r],
                ["b", -70.9 + t, 107.8 + r, -82.9 + t, 106.2 + r, -93.7 + t, 102.7 + r, { x: .5, f: 1 }]
            ]
        }]
    }

    function At(t, r) {
        return [{
            d: -1,
            v: [
                ["m", t, r, { p: 1 }],
                ["b", -19.6 + t, 14.8 + r, -42.2 + t, 37.9 + r, -42.2 + t, 64.1 + r],
                ["b", -42.2 + t, 100.3 + r, 30.2 - 42.2 + t, 118.8 + r, 21.4 + t, 118.8 + r],
                ["b", 68.3 - 42.2 + t, 118.8 + r, 72.9 - 42.2 + t, 118.4 + r, 35.2 + t, 117.6 + r, { x: .5, f: 1 }]
            ]
        }]
    }

    function Et(t, r) {
        return [{
            d: 1,
            v: [
                ["a", t, r, { x: 0, y: 0 }]
            ]
        }]
    }

    function qt(t, r) {
        var e = -68 + t,
            n = r;
        return [{
            d: -1,
            v: [
                ["m", 0 + e, n, { r: et(0 + e, n, 66.5 + e, 50 + n), y: 0, x: 0 }],
                ["l", 66.5 + e, 50 + n, { r: et(0 + e, n, 66.5 + e, 50 + n), y: 0, x: 0, f: 1 }],
                ["l", 69.5 + e, 50 + n, { r: et(69.5 + e, 50 + n, 136 + e, n), y: 0, x: 0, f: 1, v: 1 }],
                ["l", 136 + e, n, { y: 0, x: 0, f: 1 }]
            ]
        }]
    }

    function Xt(t, r) {
        return [{
            d: 1,
            v: [
                ["m", t - 50, r, { x: 0, y: 0 }],
                ["l", t + 50, r, { x: 0, y: 0, f: 1 }]
            ]
        }]
    }
    var Ut, $t, Bt = [{
            d: 1,
            v: [
                ["m", 0, 352, { y: 0, f: 1 }],
                ["l", 0, 130, { y: -3 }]
            ]
        }],
        Ht = [{
            d: 1,
            v: [
                ["m", -115.9, 444, { x: .4, y: .63, r: nt(-115.9, 444, 12.6 - 115.9, 454.4, 29.6 - 115.9, 460.2, -70, 461.2, 0), f: 1 }],
                ["b", 12.6 - 115.9, 454.4, 29.6 - 115.9, 460.2, -70, 461.2, { x: .4, y: .63, r: Y }],
                ["b", 84.5 - 115.9, 463.5, 0, 435.1, 0, 396.4, { x: .4, y: .63, r: V }],
                ["l", 0, 130, { y: -3 }]
            ]
        }],
        Kt = {
            "Æ": tt(996, 426, 352, 0, 0, 0, 0, [{
                d: -1,
                v: [
                    ["m", 426, 0, { x: 0, r: Y }],
                    ["l", 234, 0, { x: .5, f: 1, r: et(234, 0, 0, 352) }],
                    ["l", 0, 352, { x: .5, y: .5, f: 1 }]
                ]
            }, {
                d: -1,
                v: [
                    ["m", 234, 0, { x: .5, p: 1 }],
                    ["l", 234, 352, { f: 1, x: .5 }],
                    ["l", 426, 352, { f: 1, x: 0 }]
                ]
            }, {
                d: -1,
                v: [
                    ["m", 76.4, 237, { r: Y, p: 1 }],
                    ["l", 234, 237, { f: 1, r: Y, p: 1 }]
                ]
            }, {
                d: -1,
                v: [
                    ["m", 234, 164, { r: Y, p: 1, x: .5 }],
                    ["l", 414, 164, { f: 1, x: 0 }]
                ]
            }]),
            "æ": tt(1e3, 457.5, 232, 0, 0, -64, -64, [{
                d: -1,
                v: [
                    ["m", 232, 8, { y: -3.4, r: V }],
                    ["l", 232, 116, { r: Z }],
                    ["b", 232, 180.1, 180.1, 232, 116, 232, { r: Y }],
                    ["b", 51.9, 232, 0, 180.1, 0, 116, { r: V }],
                    ["b", 0, 51.9, 51.9, 0, 116, 0, { r: Y }],
                    ["b", 180.1, 0, 232, 51.9, 232, 116, { r: V }],
                    ["l", 232, 224, { y: -.1, r: V, f: 1 }]
                ]
            }, {
                d: 1,
                v: [
                    ["m", 443.6, 182.9, { r: nt(443.6, 182.9, 423.1, 213.2, 388.1, 233.1, 348.5, 233.1, 0), f: 1 }],
                    ["b", 423.1, 213.2, 388.1, 233.1, 348.5, 233.1, { r: Y }],
                    ["b", 284.4, 233.1, 232.5, 181.2, 232.5, 117.1, { r: V }],
                    ["b", 232.5, 53, 284.4, 1.1, 348.5, 1.1, { r: Y }],
                    ["b", 408.4, 1.1, 456.9, 47.2, 457.5, 106.1, { r: V }],
                    ["l", 232.5, 106.1, { r: V, p: 1 }]
                ]
            }]),
            "À": tt(620, 290, 352, 0, 0, 0, 0, JSON.parse(JSON.stringify(it)).concat(It(145, -50))),
            "Á": tt(620, 290, 352, 0, 0, 0, 0, JSON.parse(JSON.stringify(it)).concat(Rt(145, -50))),
            "Â": tt(620, 290, 352, 0, 0, 0, 0, JSON.parse(JSON.stringify(it)).concat(jt(145, -100))),
            "Ã": tt(620, 290, 352, 0, 0, 0, 0, JSON.parse(JSON.stringify(it)).concat(Mt(145, -90))),
            "Ä": tt(620, 290, 352, 0, 0, 0, 0, JSON.parse(JSON.stringify(it)).concat(Ft(145, -70))),
            "Å": tt(620, 290, 352, 0, 0, 0, 0, JSON.parse(JSON.stringify(it)).concat(Ct(0, 0))),
            "Ă": tt(620, 290, 352, 0, 0, 0, 0, JSON.parse(JSON.stringify(it)).concat(Gt(145, -110))),
            "Ą": tt(620, 290, 352, 0, 0, 0, 0, JSON.parse(JSON.stringify(it)).concat(At(290, 352))),
            "à": tt(600, 232, 232, 10, 2, -64, -64, JSON.parse(JSON.stringify(xt)).concat(It(116, -60))),
            "á": tt(600, 232, 232, 10, 2, -64, -64, JSON.parse(JSON.stringify(xt)).concat(Rt(116, -60))),
            "â": tt(600, 232, 232, 10, 2, -64, -64, JSON.parse(JSON.stringify(xt)).concat(jt(116, -110))),
            "ã": tt(600, 232, 232, 10, 2, -64, -64, JSON.parse(JSON.stringify(xt)).concat(Mt(116, -100))),
            "ä": tt(600, 232, 232, 10, 2, -64, -64, JSON.parse(JSON.stringify(xt)).concat(Ft(116, -80))),
            "å": tt(600, 232, 232, 10, 2, -64, -64, JSON.parse(JSON.stringify(xt)).concat(Ct(-30, 0))),
            "ă": tt(600, 232, 232, 10, 2, -64, -64, JSON.parse(JSON.stringify(xt)).concat(Gt(116, -120))),
            "ą": tt(600, 232, 232, 10, 2, -64, -64, JSON.parse(JSON.stringify(xt)).concat(At(232, 224))),
            "Ć": tt(700, 293.1, 360, 0, 0, 0, 0, JSON.parse(JSON.stringify(at)).concat(It(180, -60))),
            "Ĉ": tt(700, 293.1, 360, 0, 0, 0, 0, JSON.parse(JSON.stringify(at)).concat(jt(180, -110))),
            "Ċ": tt(700, 293.1, 360, 0, 0, 0, 0, JSON.parse(JSON.stringify(at)).concat(Et(180, -80))),
            "Č": tt(700, 293.1, 360, 0, 0, 0, 0, JSON.parse(JSON.stringify(at)).concat(qt(180, -110))),
            "Ç": tt(700, 293.1, 360, 0, 0, 0, 0, JSON.parse(JSON.stringify(at)).concat(zt(180, 360))),
            "ć": tt(520, 212.1, 233.1, 2, -10, -64, -64, JSON.parse(JSON.stringify(bt)).concat(It(116.5, -68.9))),
            "ĉ": tt(520, 212.1, 233.1, 2, -10, -64, -64, JSON.parse(JSON.stringify(bt)).concat(jt(116.5, -118.9))),
            "ċ": tt(520, 212.1, 233.1, 2, -10, -64, -64, JSON.parse(JSON.stringify(bt)).concat(Et(116.5, -88.9))),
            "č": tt(520, 212.1, 233.1, 2, -10, -64, -64, JSON.parse(JSON.stringify(bt)).concat(qt(116.5, -118.9))),
            "ç": tt(520, 212.1, 233.1, 2, -10, -64, -64, JSON.parse(JSON.stringify(bt)).concat(zt(116.5, 233.1))),
            "Đ": tt(721, 270, 352, -10, -10, 0, 0, JSON.parse(JSON.stringify(st)).concat(Lt(0, 176))),
            "Ď": tt(721, 270, 352, -10, -10, 0, 0, JSON.parse(JSON.stringify(st)).concat(qt(100, -110))),
            "ď": tt(600, 232, 352, 10, 2, 0, 0, JSON.parse(JSON.stringify(St)).concat((Ut = 300, $t = 0, [{
                d: -1,
                v: [
                    ["m", Ut, $t, { x: 0, y: 0 }],
                    ["l", Ut, 80 + $t, { x: 0, y: 0, f: 1 }]
                ]
            }]))),
            "đ": tt(600, 232, 352, 10, 2, 0, 0, JSON.parse(JSON.stringify(St)).concat(Lt(180, 40))),
            "È": tt(520, 192, 352, -5, -80, 0, 0, JSON.parse(JSON.stringify(ot)).concat(It(96, -60))),
            "É": tt(520, 192, 352, -5, -80, 0, 0, JSON.parse(JSON.stringify(ot)).concat(Rt(96, -60))),
            "Ê": tt(520, 192, 352, -5, -80, 0, 0, JSON.parse(JSON.stringify(ot)).concat(jt(96, -110))),
            "Ë": tt(520, 192, 352, -5, -80, 0, 0, JSON.parse(JSON.stringify(ot)).concat(Ft(96, -80))),
            "Ē": tt(520, 192, 352, -5, -80, 0, 0, JSON.parse(JSON.stringify(ot)).concat(Xt(96, -80))),
            "Ĕ": tt(520, 192, 352, -5, -80, 0, 0, JSON.parse(JSON.stringify(ot)).concat(Gt(96, -120))),
            "Ė": tt(520, 192, 352, -5, -80, 0, 0, JSON.parse(JSON.stringify(ot)).concat(Et(96, -80))),
            "Ě": tt(520, 192, 352, -5, -80, 0, 0, JSON.parse(JSON.stringify(ot)).concat(qt(96, -110))),
            "è": tt(570, 225.5, 233.1, 0, 0, -64, -64, JSON.parse(JSON.stringify(mt)).concat(It(112, -60))),
            "é": tt(570, 225.5, 233.1, 0, 0, -64, -64, JSON.parse(JSON.stringify(mt)).concat(Rt(112, -60))),
            "ê": tt(570, 225.5, 233.1, 0, 0, -64, -64, JSON.parse(JSON.stringify(mt)).concat(jt(112, -110))),
            "ë": tt(570, 225.5, 233.1, 0, 0, -64, -64, JSON.parse(JSON.stringify(mt)).concat(Ft(112, -80))),
            "ē": tt(570, 225.5, 233.1, 0, 0, -64, -64, JSON.parse(JSON.stringify(mt)).concat(Xt(112, -80))),
            "ĕ": tt(570, 225.5, 233.1, 0, 0, -64, -64, JSON.parse(JSON.stringify(mt)).concat(Gt(112, -120))),
            "ė": tt(570, 225.5, 233.1, 0, 0, -64, -64, JSON.parse(JSON.stringify(mt)).concat(Et(112, -90))),
            "ě": tt(570, 225.5, 233.1, 0, 0, -64, -64, JSON.parse(JSON.stringify(mt)).concat(qt(112, -120))),
            "Ĝ": tt(840, 352, 360, 0, 0, 0, 0, JSON.parse(JSON.stringify(ft)).concat(jt(180, -110))),
            "Ğ": tt(840, 352, 360, 0, 0, 0, 0, JSON.parse(JSON.stringify(ft)).concat(Gt(180, -120))),
            "Ġ": tt(840, 352, 360, 0, 0, 0, 0, JSON.parse(JSON.stringify(ft)).concat(Et(180, -80))),
            "Ģ": tt(840, 352, 360, 0, 0, 0, 0, JSON.parse(JSON.stringify(ft)).concat(zt(180, 360))),
            "ĝ": tt(600, 232, 338, 10, 2, -117, -117, JSON.parse(JSON.stringify(Ot)).concat(jt(116, -118.9))),
            "ğ": tt(600, 232, 338, 10, 2, -117, -117, JSON.parse(JSON.stringify(Ot)).concat(Gt(116, -120))),
            "ġ": tt(600, 232, 338, 10, 2, -117, -117, JSON.parse(JSON.stringify(Ot)).concat(Et(116, -90))),
            "ģ": tt(600, 232, 338, 10, 2, -117, -117, JSON.parse(JSON.stringify(Ot)).concat(Rt(116, -70))),
            "Ĥ": tt(684, 232, 352, 0, 0, 0, 0, JSON.parse(JSON.stringify(lt)).concat(jt(116, -110))),
            "ĥ": tt(520, 182, 352, 0, 0, 0, 0, JSON.parse(JSON.stringify(Jt)).concat(jt(91, -110))),
            "Ì": tt(249, 0, 352, 0, 0, 0, 0, JSON.parse(JSON.stringify(yt)).concat(It(0, -60))),
            "Í": tt(249, 0, 352, 0, 0, 0, 0, JSON.parse(JSON.stringify(yt)).concat(Rt(0, -60))),
            "Î": tt(249, 0, 352, 0, 0, 0, 0, JSON.parse(JSON.stringify(yt)).concat(jt(0, -110))),
            "Ï": tt(249, 0, 352, 0, 0, 0, 0, JSON.parse(JSON.stringify(yt)).concat(Ft(0, -80))),
            "ì": tt(200, 0, 352, 0, 0, 0, 0, JSON.parse(JSON.stringify(Bt)).concat(It(0, 70))),
            "í": tt(200, 0, 352, 0, 0, 0, 0, JSON.parse(JSON.stringify(Bt)).concat(Rt(0, 70))),
            "î": tt(200, 0, 352, 0, 0, 0, 0, JSON.parse(JSON.stringify(Bt)).concat(jt(0, 10))),
            "ï": tt(200, 0, 352, 0, 0, 0, 0, JSON.parse(JSON.stringify(Bt)).concat(Ft(0, 50))),
            "Ĵ": tt(472, 172.5, 355.5, 10, 20, -2, -2, JSON.parse(JSON.stringify(ct)).concat(jt(172.5, -110))),
            "ĵ": tt(220, 115.9, 352, -60, -60, 0, 0, JSON.parse(JSON.stringify(Ht)).concat(jt(0, 20))),
            "Ñ": tt(721, 250, 352, 0, 0, 0, 0, JSON.parse(JSON.stringify(ht)).concat(Mt(125, -100))),
            "ñ": tt(520, 182, 352, 0, 0, 0, 0, JSON.parse(JSON.stringify(Nt)).concat(Mt(91, 30))),
            "Ò": tt(850, 360, 360, 0, 0, 0, 0, JSON.parse(JSON.stringify(ut)).concat(It(180, -60))),
            "Ó": tt(850, 360, 360, 0, 0, 0, 0, JSON.parse(JSON.stringify(ut)).concat(Rt(180, -60))),
            "Ô": tt(850, 360, 360, 0, 0, 0, 0, JSON.parse(JSON.stringify(ut)).concat(jt(180, -110))),
            "Õ": tt(850, 360, 360, 0, 0, 0, 0, JSON.parse(JSON.stringify(ut)).concat(Mt(180, -100))),
            "Ö": tt(850, 360, 360, 0, 0, 0, 0, JSON.parse(JSON.stringify(ut)).concat(Ft(180, -80))),
            "Ø": tt(850, 360, 360, 0, 0, 0, 0, JSON.parse(JSON.stringify(ut)).concat([{
                d: 1,
                v: [
                    ["m", 0, 360, { r: et(0, 360, 360, 0), f: 1, x: 0, y: 1 }],
                    ["l", 360, 0, { x: 0, y: 1 }]
                ]
            }])),
            "ò": tt(580, 232, 232, 0, 0, -64, -64, JSON.parse(JSON.stringify(_t)).concat(It(116, -60))),
            "ó": tt(580, 232, 232, 0, 0, -64, -64, JSON.parse(JSON.stringify(_t)).concat(Rt(116, -60))),
            "ô": tt(580, 232, 232, 0, 0, -64, -64, JSON.parse(JSON.stringify(_t)).concat(jt(116, -110))),
            "õ": tt(580, 232, 232, 0, 0, -64, -64, JSON.parse(JSON.stringify(_t)).concat(Mt(116, -100))),
            "ö": tt(580, 232, 232, 0, 0, -64, -64, JSON.parse(JSON.stringify(_t)).concat(Ft(116, -80))),
            "ø": tt(580, 232, 232, 0, 0, -64, -64, JSON.parse(JSON.stringify(_t)).concat([{
                d: 1,
                v: [
                    ["m", 0, 232, { r: et(0, 232, 232, 0), f: 1, x: 0, y: 1 }],
                    ["l", 232, 0, { x: 0, y: 1 }]
                ]
            }])),
            "Ŝ": tt(560, 224, 360, 0, 0, 0, 0, JSON.parse(JSON.stringify(dt)).concat(jt(112.4, -110))),
            "ŝ": tt(400, 143.808, 231.12, 0, 0, -64, -64, JSON.parse(JSON.stringify(wt)).concat(jt(112.4 * .642, -110))),
            "Ş": tt(560, 224, 360, 0, 0, 0, 0, JSON.parse(JSON.stringify(dt)).concat(zt(110.3, 360))),
            "ş": tt(400, 143.808, 231.12, 0, 0, -64, -64, JSON.parse(JSON.stringify(wt)).concat(zt(70.8126, 231.12))),
            "Ù": tt(712, 250, 355, 0, 0, -.5, -.5, JSON.parse(JSON.stringify(pt)).concat(It(125, -50))),
            "Ú": tt(712, 250, 355, 0, 0, -.5, -.5, JSON.parse(JSON.stringify(pt)).concat(Rt(125, -50))),
            "Û": tt(712, 250, 355, 0, 0, -.5, -.5, JSON.parse(JSON.stringify(pt)).concat(jt(125, -100))),
            "Ŭ": tt(712, 250, 355, 0, 0, -.5, -.5, JSON.parse(JSON.stringify(pt)).concat(Gt(125, -110))),
            "Ü": tt(712, 250, 355, 0, 0, -.5, -.5, JSON.parse(JSON.stringify(pt)).concat(Ft(125, -70))),
            "ù": tt(520, 182, 352, 0, 0, 0, 0, JSON.parse(JSON.stringify(Pt)).concat(It(91, 70))),
            "ú": tt(520, 182, 352, 0, 0, 0, 0, JSON.parse(JSON.stringify(Pt)).concat(Rt(91, 70))),
            "û": tt(520, 182, 352, 0, 0, 0, 0, JSON.parse(JSON.stringify(Pt)).concat(jt(91, 20))),
            "ŭ": tt(520, 182, 352, 0, 0, 0, 0, JSON.parse(JSON.stringify(Pt)).concat(Gt(91, 10))),
            "ü": tt(520, 182, 352, 0, 0, 0, 0, JSON.parse(JSON.stringify(Pt)).concat(Ft(91, 50))),
            "Ý": tt(673, 270, 352, 0, 0, 0, 0, JSON.parse(JSON.stringify(vt)).concat(Rt(135, -60))),
            "ý": tt(500, 225.5, 331.5, 10, 10, -119, -119, JSON.parse(JSON.stringify(kt)).concat(Rt(116.3, -60))),
            "ÿ": tt(500, 225.5, 331.5, 10, 10, -119, -119, JSON.parse(JSON.stringify(kt)).concat(Ft(116.3, -90)))
        },
        Qt = Object.assign({}, gt, Wt, Dt, Tt, Kt);

    function Vt(t) { var r = (Qt[t] || Qt.tofu).clone(); return r.v = t, r }

    function Yt(t, r, e, n) {
        var i;
        return i = t.indexOf("\n") > 0 ? t.split("\n") : t.indexOf("\\n") > 0 ? t.split("\\n") : [t], 0 == e ? function(t) {
            var r, e = [],
                n = t.length;
            for (r = 0; r < n; r++) e[r] = t[r].split("");
            return e
        }(i) : n ? function(t, r, e) {
            var n, i, a, s, f, l, y, c, h = 0,
                u = 0,
                d = [];
            for (a = t.length, i = 0; i < a; i++) {
                for (y = t[i], h = 0, 0, d[u] = [], f = y.length, s = 0; s < f; s++) c = y[s], n = Vt(c), l = o(n, r), h += l.w, d[u].push(c), h >= e && (u += 1, h = l.w, d[u] = []);
                u += 1
            }
            var p = [];
            for (a = d.length, i = 0; i < a; i++)(n = d[i]).length > 0 && (" " == n[0] && n.shift(), " " == n[n.length - 1] && n.pop(), n.length > 0 && p.push(n));
            return p
        }(i, r, e) : function(t, r, e) {
            var n, i, a, s, f, l, y, c, h, u, d = 0,
                p = 0,
                v = 0,
                g = [];
            for (c = t.length, f = 0; f < c; f++) {
                for (n = t[f].split(" "), g[v] = [], h = n.length, l = 0; l < h; l++) {
                    for (p = 0, i = n[l], u = i.length, y = 0; y < u; y++) a = Vt(i[y]), s = o(a, r), p += s.w;
                    a = Vt(" "), s = o(a, r), p += s.w, (d += p) > e && (d = p, g[v += 1] = []), g[v].push(i)
                }
                v += 1, d = 0
            }
            c = g.length;
            var x = [];
            for (f = 0; f < c; f++)(a = g[f].join(" ").split("")).length > 0 && x.push(a);
            return x
        }(i, r, e)
    }

    function Zt(t, r) { return { c: (t - r) / 2, r: t - r, l: 0 } }

    function tr(t) {
        if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
            if (Array.isArray(t) || (t = function(t, r) { if (!t) return; if ("string" == typeof t) return rr(t, r); var e = Object.prototype.toString.call(t).slice(8, -1); "Object" === e && t.constructor && (e = t.constructor.name); if ("Map" === e || "Set" === e) return Array.from(e); if ("Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return rr(t, r) }(t))) {
                var r = 0,
                    e = function() {};
                return { s: e, n: function() { return r >= t.length ? { done: !0 } : { done: !1, value: t[r++] } }, e: function(t) { throw t }, f: e }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var n, i, a = !0,
            s = !1;
        return { s: function() { n = t[Symbol.iterator]() }, n: function() { var t = n.next(); return a = t.done, t }, e: function(t) { s = !0, i = t }, f: function() { try { a || null == n.return || n.return() } finally { if (s) throw i } } }
    }

    function rr(t, r) {
        (null == r || r > t.length) && (r = t.length);
        for (var e = 0, n = new Array(r); e < r; e++) n[e] = t[e];
        return n
    }

    function er(t, r) {
        for (var e = 0; e < r.length; e++) {
            var n = r[e];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }
    var nr = function() {
        function t() {! function(t, r) { if (!(t instanceof r)) throw new TypeError("Cannot call a class as a function") }(this, t), this.lineWidth_ = 1, this.drawing_ = [], this.data_ = null, this.paths_ = null, this.lines_ = null, this.rect_ = { x: 0, y: 0, w: 0, h: 0 }, this.align_ = "left", this.scale_ = 1, this.fontRatio_ = 1 }
        var r, e, n;
        return r = t, (e = [{ key: "position", value: function(t, r) { return (this.rect_.x != t || this.rect_.y != r) && (this.rect_.x = t, this.rect_.y = r, this.setPosition(), !0) } }, { key: "setPosition", value: function() { var t, r, e, n, i = this.data_.length; for (t = 0; t < i; t++)(r = this.data_[t]).rect.x = r.originPos.x + this.rect_.x + (e = this.align_, n = r.alignGapX, "center" == e ? n.c : "right" == e ? n.r : n.l), r.rect.y = r.originPos.y + this.rect_.y } }, { key: "updateDrawingPaths", value: function() { var t, r, e = this.data_.length; for (t = 0; t < e; t++)(r = this.data_[t]).drawingPaths = h(U(this, r, -1, !1), r) } }, { key: "updatePatternPaths", value: function(t) { var r, e, n = this.data_.length; for (r = 0; r < n; r++)(e = this.data_[r]).rawPaths = U(this, e, t, !0) } }, { key: "updateWavePaths", value: function(t) { var r, e, n = this.data_.length; for (r = 0; r < n; r++)(e = this.data_[r]).rawWavePaths = U(this, e, t, !1) } }, { key: "updateGuide", value: function() { var t, r, e = this.data_.length; for (t = 0; t < e; t++)(r = this.data_[t]).guide = C(r.typo, this.scale), r.grid = L(r.typo, this.scale) } }, {
            key: "update",
            value: function(t, r, e, n, i, a, s) {
                var y = function(t) { return 69 / 899 * (t - 1) + 1 }(n),
                    c = function(t) { return 1 / 79 * (t - 1) }(y),
                    h = function(t) { return 54 / 79 * (t - 1) + 4 }(y),
                    u = function(t) { return t / 500 }(i),
                    d = function(t, r) { return 50 * t * r }(a, u),
                    p = function(t, r) { return 50 * t * r }(s, u),
                    v = function(t) { return (.78 - 1) * t + 1 }(c);
                this.fontRatio_ = v, this.scale_ = u, this.lineWidth_ = function(t, r) { var e = t * r; return e < 1 && (e = 1), e }(y, u);
                var g, x, b, S, m, O, J, N, w, P = Yt(t, u, r, e),
                    k = P.length,
                    W = k - 1,
                    D = 0,
                    T = 0,
                    I = 0,
                    R = 0,
                    j = 0,
                    M = 0,
                    F = [];
                for (g = 0; g < k; g++) {
                    for (S = (b = (m = P[g]).length) - 1, D = 0, I = 0, F[g] = { tw: 0, arr: [] }, x = 0; x < b; x++) D += (N = o(O = Vt(J = m[x]), u)).w, T = N.h, x < S && (D += d), g < W && (T += p), N.x = I, N.y = R, w = { x: I, y: R }, F[g].arr[x] = { str: J, typo: O, rect: N, originPos: w, center: f(N.w, N.h, u), range: l(O, c, h) }, I = D;
                    R += T, F[g].tw = D, j = Math.max(j, D), M += T
                }
                this.rect_.w = j, this.rect_.h = M, this.drawing_ = [];
                for (var G, C, L = [], z = 0, A = F; z < A.length; z++) {
                    var E = A[z];
                    G = Zt(j, E.tw);
                    var q, X = tr(E.arr);
                    try {
                        for (X.s(); !(q = X.n()).done;) {
                            var U = q.value;
                            U.alignGapX = G, U.pointsLength = _(U, this), L.push(U), C = { value: 1 }, this.drawing_.push(C), U.drawing = C;
                            var $, B = tr(U.typo.p);
                            try {
                                for (B.s(); !($ = B.n()).done;) {
                                    var H = $.value;
                                    H.cv = [];
                                    var K, Q = tr(H.v);
                                    try {
                                        for (Q.s(); !(K = Q.n()).done;) {
                                            var V = K.value;
                                            H.cv.push(V.convert(U, this))
                                        }
                                    } catch (t) { Q.e(t) } finally { Q.f() }
                                }
                            } catch (t) { B.e(t) } finally { B.f() }
                        }
                    } catch (t) { X.e(t) } finally { X.f() }
                }
                this.data_ = L, this.setPosition()
            }
        }, {
            key: "updatePathsForRect",
            value: function() {
                var t, r, e = this.data_.length,
                    n = [];
                for (t = 0; t < e; t++)(r = this.data_[t]).rawWavePaths && (r.wavePaths = h(r.rawWavePaths, r)), r.rawPaths && (r.paths = h(r.rawPaths, r), Array.prototype.push.apply(n, r.paths));
                this.paths_ = n
            }
        }, { key: "updateLinesForRect", value: function() { var t, r, e = this.data_.length; for (t = 0; t < e; t++)(r = this.data_[t]).lines = c(r) } }, { key: "reset", value: function() { this.lineWidth_ = 1, this.drawing_ = [], this.data_ = null, this.paths_ = null, this.lines_ = null, this.rect_ = { x: 0, y: 0, w: 0, h: 0 }, this.align_ = "left", this.scale_ = 1, this.fontRatio_ = 1 } }, { key: "data", get: function() { return this.data_ } }, { key: "paths", get: function() { return this.paths_ } }, { key: "lines", get: function() { return this.lines_ }, set: function(t) { this.lines_ = t } }, { key: "lineWidth", get: function() { return this.lineWidth_ } }, { key: "fontRatio", get: function() { return this.fontRatio_ } }, { key: "scale", get: function() { return this.scale_ } }, { key: "rect", get: function() { return this.rect_ } }, { key: "drawing", get: function() { return this.drawing_ } }, { key: "align", set: function(t) { this.align_ != t && (this.align_ = t, this.setPosition()) }, get: function() { return this.align_ } }]) && er(r.prototype, e), n && er(r, n), t
    }();

    function ir(t) { return (ir = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) { return typeof t } : function(t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t })(t) }

    function ar(t, r) { if (!(t instanceof r)) throw new TypeError("Cannot call a class as a function") }

    function sr(t, r) {
        for (var e = 0; e < r.length; e++) {
            var n = r[e];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }

    function or(t, r, e) { return (or = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t, r, e) { var n = function(t, r) { for (; !Object.prototype.hasOwnProperty.call(t, r) && null !== (t = yr(t));); return t }(t, r); if (n) { var i = Object.getOwnPropertyDescriptor(n, r); return i.get ? i.get.call(e) : i.value } })(t, r, e || t) }

    function fr(t, r) { return !r || "object" !== ir(r) && "function" != typeof r ? function(t) { if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return t }(t) : r }

    function lr() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0 } catch (t) { return !1 } }

    function yr(t) { return (yr = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) { return t.__proto__ || Object.getPrototypeOf(t) })(t) }

    function cr(t, r) { return (cr = Object.setPrototypeOf || function(t, r) { return t.__proto__ = r, t })(t, r) }
    var hr = function(t) {
        ! function(t, r) {
            if ("function" != typeof r && null !== r) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(r && r.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), r && cr(t, r)
        }(o, t);
        var r, e, n, i, a = (r = o, function() {
            var t, e = yr(r);
            if (lr()) {
                var n = yr(this).constructor;
                t = Reflect.construct(e, arguments, n)
            } else t = e.apply(this, arguments);
            return fr(this, t)
        });

        function o() {
            var t, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                e = r.text,
                n = void 0 === e ? "" : e,
                i = r.size,
                s = void 0 === i ? 500 : i,
                f = r.weight,
                l = void 0 === f ? 1 : f,
                y = r.color,
                c = void 0 === y ? ["#000000"] : y,
                h = r.colorful,
                d = void 0 === h ? ["#c5d73f", "#9d529c", "#49a9db", "#fec330", "#5eb96e", "#fc5356", "#f38f31"] : h,
                p = r.tracking,
                v = void 0 === p ? 0 : p,
                g = r.leading,
                x = void 0 === g ? 0 : g,
                b = r.align,
                S = void 0 === b ? "left" : b,
                m = r.pathGap,
                O = void 0 === m ? .5 : m,
                J = r.amplitude,
                N = void 0 === J ? .5 : J,
                _ = r.width,
                w = void 0 === _ ? 0 : _,
                P = r.breakWord,
                k = void 0 !== P && P,
                W = r.fps,
                D = void 0 === W ? 30 : W,
                T = r.isPath,
                I = void 0 !== T && T,
                R = r.isWave,
                j = void 0 !== R && R;
            return ar(this, o), (t = a.call(this)).size_ = s, t.weight_ = l, t.color_ = c, t.colorful_ = u(d), t.tracking_ = v, t.leading_ = x, t.pathGap_ = O, t.amplitude_ = N, t.width_ = w, t.breakWord_ = k, t.fps_ = D, t.fpsTime_ = 1e3 / t.fps_, t.isPath_ = I, t.isWave_ = j, t.model = new nr, t.str_ = null, t.time_ = null, t.isFps_ = !1, t.isForceRander_ = !1, t.updateID_ = 0, t.dPathsID_ = null, t.pPathsID_ = null, t.wPathsID_ = null, t.guideID_ = null, t.text = n, t.model.align = S, t
        }
        return e = o, (n = [{ key: "on", value: function(t, r) { or(yr(o.prototype), "on", this).call(this, t, r), this.update() } }, { key: "off", value: function(t, r) { or(yr(o.prototype), "off", this).call(this, t, r) } }, {
            key: "position",
            value: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                    r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                this.model.position(t, r) && (this.updateID_++, this.updateSignal())
            }
        }, { key: "update", value: function() { this.updateID_++, this.model.update(this.str_, this.width_, this.breakWord_, this.weight_, this.size_, this.tracking_, this.leading_), this.isPath_ || this.isWave_ ? (this.updatePatternPaths(), this.updateWavePaths()) : this.updateSignal() } }, { key: "updateGuide", value: function() { this.guideID_ != this.updateID_ && (this.guideID_ = this.updateID_, this.model.updateGuide()) } }, { key: "updateDrawingPaths", value: function() { this.dPathsID_ != this.updateID_ && (this.dPathsID_ = this.updateID_, this.model.updateDrawingPaths()) } }, { key: "updatePatternPaths", value: function(t) { this.isPath_ && (t || this.pPathsID_ != this.updateID_) && (this.pPathsID_ = this.updateID_, this.model.updatePatternPaths(this.pathGap_), this.isForceRander_ = !0, this.updateSignal()) } }, { key: "updateWavePaths", value: function(t) { this.isWave_ && (t || this.wPathsID_ != this.updateID_) && (this.wPathsID_ = this.updateID_, this.model.updateWavePaths(this.pathGap_), this.isForceRander_ = !0, this.updateSignal()) } }, { key: "updateSignal", value: function() { this.model.updateLinesForRect(), this.model.updatePathsForRect(), this.dispatch("update", this.model) } }, { key: "reset", value: function() { this.size_ = 500, this.weight_ = 1, this.color_ = ["#000000"], this.tracking_ = 0, this.leading_ = 0, this.pathGap_ = .5, this.amplitude_ = .5, this.width_ = 0, this.breakWord_ = !1, this.fps_ = 30, this.fpsTime_ = 1e3 / this.fps_, this.isPath_ = !1, this.isWave_ = !1, this.str_ = null, this.time_ = null, this.isFps_ = !1, this.isForceRander_ = !1, this.updateID_ = 0, this.dPathsID_ = null, this.pPathsID_ = null, this.wPathsID_ = null, this.guideID_ = null, this.model.reset() } }, { key: "dispose", value: function() { this.reset(), this.model = null } }, { key: "drawPixi", value: function(t) { var r, e, n, i = this.model.data.length; for (r = 0; r < i; r++) e = this.model.data[r], n = G(r, 0, this.color_), j(t, e, this.lineWidth, n) } }, { key: "draw", value: function(t) { t.lineWidth = this.lineWidth; var r, e, n = this.model.data.length; for (r = 0; r < n; r++) N(t, r, e = this.model.data[r], this.color_), d(t, e) } }, {
            key: "drawColorful",
            value: function(t) {
                t.lineWidth = this.lineWidth,
                    function(t, r, e) {
                        T = -1, D = (b = e).length;
                        var n, i, a, o, f, l, y, c, h, u, d = r.data.length;
                        for (n = 0; n < d; n++)
                            for (c = (i = r.data[n]).pointsLength.max, u = 0, o = i.lines.length, y = null, a = 0; a < o; a++) "a" == (l = (f = i.lines[a]).pos).type ? (I(t), t.beginPath(), t.arc(l.x, l.y, l.radius * i.drawing.value, 0, s), t.fill(), t.closePath()) : "m" == l.type ? y = l : "l" == l.type ? ((h = W(y.x, y.y, l.x, l.y)) / r.scale > 10 && (I(t), t.beginPath(), y && t.moveTo(y.x, y.y), t.lineTo(l.x, l.y), u += R(t, f, h, c, i, u)), y = l) : "b" == l.type && ((h = P(y.x, y.y, l.x, l.y, l.x2, l.y2, l.x3, l.y3)) / r.scale > 10 && (I(t), t.beginPath(), y && t.moveTo(y.x, y.y), t.bezierCurveTo(l.x, l.y, l.x2, l.y2, l.x3, l.y3), u += R(t, f, h, c, i, u)), y = { x: l.x3, y: l.y3 })
                    }(t, this.model, this.colorful_)
            }
        }, { key: "wave", value: function(t, r) { t.lineWidth = this.lineWidth, r && (this.time_ || (this.time_ = r), r - this.time_ > this.fpsTime_ || this.isForceRander_ ? (this.time_ = r, this.isFps_ = !0) : this.isFps_ = !1), this.isForceRander_ = !1; var e, n, i = this.model.data.length; for (e = 0; e < i; e++) N(t, e, n = this.model.data[e], this.color_), O(t, n, this.model.scale, this.amplitude_, this.weight_, this.isFps_) } }, {
            key: "pattern",
            value: function(t, r, e) {
                var n, i = r * this.model.scale,
                    a = e * this.model.scale,
                    s = this.model.data.length;
                for (n = 0; n < s; n++) J(t, this.model.data[n], i, a)
            }
        }, { key: "grid", value: function(t) { this.updateGuide(); var r, e = this.model.data.length; for (r = 0; r < e; r++) x(t, this.model.data[r]) } }, { key: "point", value: function(t) { var r, e = this.model.data.length; for (r = 0; r < e; r++) p(t, this.model.data[r]) } }, { key: "box", value: function(t) { t.lineWidth = 1, t.beginPath(), t.strokeStyle = "#0b90dc", t.rect(this.model.rect.x, this.model.rect.y, this.model.rect.w, this.model.rect.h), t.stroke() } }, { key: "text", get: function() { return this.str_ }, set: function(t) { this.str_ != t && (this.str_ = t, this.update()) } }, { key: "size", get: function() { return this.size_ }, set: function(t) { this.size_ != t && (this.size_ = t, this.update(), this.isForceRander_ = !0) } }, { key: "weight", get: function() { return this.weight_ }, set: function(t) { t < 1 ? t = 1 : t > 900 && (t = 900), this.weight_ != t && (this.weight_ = t, this.update(), this.isForceRander_ = !0) } }, { key: "color", get: function() { return this.color_ }, set: function(t) { this.color_ != t && (this.color_ = t) } }, { key: "tracking", get: function() { return this.tracking_ }, set: function(t) { this.tracking_ != t && (this.tracking_ = t, this.update(), this.isForceRander_ = !0) } }, { key: "leading", get: function() { return this.leading_ }, set: function(t) { this.leading_ != t && (this.leading_ = t, this.update(), this.isForceRander_ = !0) } }, { key: "align", get: function() { return this.model.align }, set: function(t) { this.model.align != t && (this.model.align = t, this.updateID_++, this.updateSignal()) } }, { key: "pathGap", get: function() { return this.pathGap_ }, set: function(t) { this.pathGap_ != t && (this.pathGap_ = t, this.updatePatternPaths(!0), this.updateWavePaths(!0), this.isForceRander_ = !0) } }, { key: "amplitude", get: function() { return this.amplitude_ }, set: function(t) { this.amplitude_ = t } }, { key: "rect", get: function() { return this.model.rect } }, { key: "maxWidth", set: function(t) { this.width_ != t && (this.width_ = t, this.update()) }, get: function() { return this.width_ } }, { key: "breakWord", set: function(t) { this.breakWord_ != t && (this.breakWord_ = t, this.update()) }, get: function() { return this.breakWord_ } }, { key: "isPath", get: function() { return this.isPath_ }, set: function(t) { this.isPath_ = t, this.updatePatternPaths(!0) } }, { key: "isWave", get: function() { return this.isWave_ }, set: function(t) { this.isWave_ = t, this.updateWavePaths(!0) } }, { key: "fps", get: function() { return this.fps_ }, set: function(t) { this.fps_ = t, this.fpsTime_ = 1e3 / this.fps_ } }, { key: "lineWidth", get: function() { return this.model.lineWidth } }, { key: "scale", get: function() { return this.model.scale } }, { key: "drawing", get: function() { return this.model.drawing } }, { key: "data", get: function() { return this.model.data } }, { key: "paths", get: function() { return this.model.paths } }, { key: "drawingPaths", get: function() { return this.model.drawingPaths } }, { key: "wavePaths", get: function() { return this.model.wavePaths } }]) && sr(e.prototype, n), i && sr(e, i), o
    }(a)
}]);