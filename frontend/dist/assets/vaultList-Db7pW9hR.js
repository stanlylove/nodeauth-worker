const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-DZYvMiSj.js","assets/pdf-utils-r4RjNe6V.js","assets/compression-utils-CXh1ITwj.js","assets/vue-core-Daban9YF.js","assets/element-plus-Dh0klhaa.js","assets/element-plus-Dh61In7b.css","assets/simplewebauthn-3qpiAaRi.js","assets/tanstack-query-C-OQsQoR.js","assets/index-qRUhVORo.css"])))=>i.map(i=>d[i]);
import { d as Qt, H as An, e as On, V as Dn, f as yn, M as _n, ac as Ln, aM as Vn, at as Fn, aN as Bn, aO as Hn, aP as tn, aQ as Ct, X as nn, Y as ut, Q as Pn, aD as Wn, l as Et, S as Un, E as Fe, o as ln, i as Xn, h as Yn, a1 as Nn, y as qn, ak as Kn, aR as Qn, aS as jn, u as Gn, aT as Zn, Z as Jn, R as el, F as tl, G as nl, aU as ll, aV as il, aW as ol, ad as sl, aX as al } from "./element-plus-Dh0klhaa.js";
import { D as St, I as S, J as _e, P as h, H as Qe, X as Lt, e as U, ab as rl, aj as cl, ak as ul, U as Ot, u as n, x as on, k as rt, f as we, ae as b, v as Vt, m as dl, n as bt, K as wn, L as fl, a3 as kt, W as jt, M as G, Y as ge, F as ot, ac as At, ar as ml, S as at, R as ft, O as v, c as ae, as as vl, s as Mt, a8 as pl, aw as gl, A as yt, az as hl, $ as yl, _ as N, Q as R, Z as ze, aa as st, a0 as _l, l as Bt, T as wl } from "./vue-core-Daban9YF.js";
import { _ as bn, b as bl, u as Dt, p as Gt, t as kl, a as kn, i as Sl, l as xt, q as Sn, f as zl, __tla as __tla_0 } from "./index-DZYvMiSj.js";
import { j as sn, k as Ht, u as zn, v as ct, t as _t, b as an, __tla as __tla_1 } from "./vaultService-BkytAzO0.js";
import { _ as rn } from "./responsiveOverlay-BcqRhXIp.js";
import { u as $l } from "./useVaultList-Cym-qTE9.js";
import { _ as cn, __tla as __tla_2 } from "./pdf-utils-r4RjNe6V.js";
import { Q as Tl } from "./qr-utils-DSii33i3.js";
import { c as Pt } from "./common-DJZ4Xh9q.js";
import "./simplewebauthn-3qpiAaRi.js";
import "./tanstack-query-C-OQsQoR.js";
import "./compression-utils-CXh1ITwj.js";
import { __tla as __tla_3 } from "./resourceRegistry-COxFgigF.js";
let zo;
let __tla = Promise.all([
    (()=>{
        try {
            return __tla_0;
        } catch  {}
    })(),
    (()=>{
        try {
            return __tla_1;
        } catch  {}
    })(),
    (()=>{
        try {
            return __tla_2;
        } catch  {}
    })(),
    (()=>{
        try {
            return __tla_3;
        } catch  {}
    })()
]).then(async ()=>{
    function Cl(e) {
        return {
            all: e = e || new Map,
            on: function(t, i) {
                var l = e.get(t);
                l && l.push(i) || e.set(t, [
                    i
                ]);
            },
            off: function(t, i) {
                var l = e.get(t);
                l && l.splice(l.indexOf(i) >>> 0, 1);
            },
            emit: function(t, i) {
                (e.get(t) || []).slice().map(function(l) {
                    l(i);
                }), (e.get("*") || []).slice().map(function(l) {
                    l(t, i);
                });
            }
        };
    }
    function Zt(e, t, i) {
        if (!i) return t;
        const l = e?.[i];
        if (l == null) throw new Error(`Key is ${l} on item (keyField is '${i}')`);
        return l;
    }
    function dt(e, t) {
        return e.map((i, l)=>Zt(i, l, t));
    }
    function Ml(e, t, i) {
        const l = [], c = [];
        for(let s = 0; s < e.length; s++){
            const I = e[s], P = Zt(I, s, t), g = i(I, s, P);
            l.push(P), c.push(typeof g == "number" && g > 0 ? g : null);
        }
        return {
            keys: l,
            sizes: c
        };
    }
    function xl(e, t, i) {
        if (!e || e.keys.length !== t.length || e.sizes.length !== t.length) return !1;
        for(let l = 0; l < t.length; l++)if (e.keys[l] !== Zt(t[l], l, i)) return !1;
        return !0;
    }
    function Nt(e, t, i) {
        if (!xl(e, t, i)) return {};
        const l = {};
        for(let c = 0; c < e.keys.length; c++){
            const s = e.sizes[c];
            typeof s == "number" && s > 0 && (l[e.keys[c]] = s);
        }
        return l;
    }
    function $n(e, t) {
        if (!e.length || t.length <= e.length) return 0;
        const i = e[0], l = t.indexOf(i);
        if (l <= 0 || l + e.length < t.length && e.length > t.length - l) return 0;
        for(let c = 0; c < e.length; c++)if (t[l + c] !== e[c]) return 0;
        return l;
    }
    function un(e, t, i, l, c, s = 0) {
        const I = c ?? "start";
        if (I === "nearest") {
            const P = i + l, g = e + t;
            return e >= i && g <= P ? null : e < i ? e + s : g - l + s;
        }
        return I === "end" ? e + t - l + s : I === "center" ? e + (t - l) / 2 + s : e + s;
    }
    function Tn(e, t, i, l) {
        let c = null, s = null, I = null, P = !1, g = null;
        const x = [], D = i.resizeObserver ? ()=>{} : i.onVscrollUpdate(ue), k = ae(()=>{
            const p = b(e);
            if (i.vscrollData.simpleArray) {
                if (p.index == null) throw new Error("index is required when using simple-array mode with dynamic item measurement");
                return p.index;
            }
            if (i.vscrollData.keyField in p.item) return p.item[i.vscrollData.keyField];
            throw new Error(`keyField '${i.vscrollData.keyField}' not found in your item. You should set a valid keyField prop on your Scroller`);
        }), B = ae(()=>i.vscrollData.sizes[k.value] || 0), X = ae(()=>b(e).active && i.vscrollData.active);
        function L() {
            X.value ? s !== k.value && (s = k.value, c = null, I = null, Q(k.value)) : c = k.value;
        }
        function ie() {
            b(e).watchData && !i.resizeObserver ? g = we(()=>b(e).item, ()=>{
                re();
            }, {
                deep: !0
            }) : g && (g(), g = null);
        }
        function ue({ force: p }) {
            !X.value && p && (I = k.value), (c === k.value || p || !B.value) && L();
        }
        function re() {
            L();
        }
        function z(p) {
            i.undefinedMap[p] && i.undefinedSizeCount.value--, i.undefinedMap[p] = void 0;
        }
        function W(p, a) {
            if (i.vscrollData.sizes[p]) {
                z(p);
                return;
            }
            if (a) {
                i.undefinedMap[p] || i.undefinedSizeCount.value++, i.undefinedMap[p] = !0;
                return;
            }
            i.undefinedMap[p] && (i.undefinedSizeCount.value--, i.undefinedMap[p] = !1);
        }
        function Q(p) {
            bt(()=>{
                if (k.value === p) {
                    const a = b(t);
                    if (!a) return;
                    const m = a.offsetWidth, E = a.offsetHeight;
                    ee(m, E);
                }
                s = null;
            });
        }
        function ee(p, a) {
            const m = ~~(i.direction.value === "vertical" ? a : p);
            m && B.value !== m && j(m);
        }
        function j(p) {
            var a, m;
            z(k.value), i.vscrollData.sizes[k.value] = p, b(e).emitResize && ((m = (a = b(l)) == null ? void 0 : a.onResize) == null || m.call(a, k.value));
        }
        function oe() {
            if (!i.resizeObserver || P) return;
            const p = b(t);
            p && (i.resizeObserver.observe(p), p.$_vs_id = k.value, p.$_vs_onResize = me, P = !0);
        }
        function ne() {
            if (!i.resizeObserver || !P) return;
            const p = b(t);
            p && (i.resizeObserver.unobserve(p), p.$_vs_onResize = void 0, P = !1);
        }
        function me(p, a, m) {
            k.value === p && ee(a, m);
        }
        x.push(we(()=>b(e).watchData, ()=>{
            ie();
        })), i.resizeObserver || x.push(we(()=>b(e).sizeDependencies, ()=>{
            re();
        }, {
            deep: !0
        })), x.push(we(k, (p, a)=>{
            const m = b(t);
            m && (m.$_vs_id = p), z(a), W(p, X.value);
            const E = i.vscrollData.sizes[p];
            if (!E) {
                c = p, re();
                return;
            }
            z(p), P && (i.vscrollData.sizes[p] = E);
        })), x.push(we(X, (p)=>{
            W(k.value, p), i.resizeObserver ? p ? oe() : ne() : p && I === k.value && L();
        })), ie();
        function ce() {
            X.value && (L(), oe());
        }
        function $() {
            D(), ne(), z(k.value);
            const p = b(t);
            p && (p.$_vs_id = void 0, p.$_vs_onResize = void 0), g && (g(), g = null);
            for (const a of x)a();
            x.length = 0;
        }
        return {
            id: k,
            size: B,
            finalActive: X,
            updateSize: L,
            mount: ce,
            unmount: $
        };
    }
    const Rl = {
        itemsLimit: 1e3
    };
    function Cn(e) {
        return typeof window < "u" && e === window;
    }
    const Il = (()=>{
        if (typeof document > "u") return "negative";
        const e = document.createElement("div"), t = document.createElement("div");
        e.style.width = "4px", e.style.height = "1px", e.style.overflow = "auto", e.style.direction = "rtl", t.style.width = "8px", t.style.height = "1px", e.appendChild(t), document.body.appendChild(e), e.scrollLeft = -1;
        const i = e.scrollLeft < 0;
        return document.body.removeChild(e), i ? "negative" : "default";
    })();
    function gt(e, t, i) {
        return t !== "horizontal" || !i || Cn(i) || getComputedStyle(i).direction !== "rtl" ? e : Il === "negative" ? -e : e;
    }
    function El(e, t, i) {
        return gt(e, t, i);
    }
    function Wt(e, t, i, l) {
        const c = El(i, t, e), s = !!(l != null && l.smooth);
        if (Cn(e)) {
            t === "vertical" ? e.scrollTo({
                top: c,
                behavior: s ? "smooth" : "auto"
            }) : e.scrollTo({
                left: c,
                behavior: s ? "smooth" : "auto"
            });
            return;
        }
        if (typeof e.scrollTo == "function") {
            e.scrollTo(t === "vertical" ? {
                top: c,
                behavior: s ? "smooth" : "auto"
            } : {
                left: c,
                behavior: s ? "smooth" : "auto"
            });
            return;
        }
        t === "vertical" ? e.scrollTop = c : e.scrollLeft = c;
    }
    function Al(e, t, i) {
        return i ? t === "vertical" ? window.innerHeight : window.innerWidth : t === "vertical" ? e.clientHeight : e.clientWidth;
    }
    const Ol = /auto|scroll/;
    function Mn(e, t) {
        return e.parentNode === null ? t : Mn(e.parentNode, [
            ...t,
            e
        ]);
    }
    function Ut(e, t) {
        return getComputedStyle(e, null).getPropertyValue(t);
    }
    function Dl(e) {
        return Ut(e, "overflow") + Ut(e, "overflow-y") + Ut(e, "overflow-x");
    }
    function Ll(e) {
        return Ol.test(Dl(e));
    }
    function Rt(e) {
        if (!(e instanceof HTMLElement || e instanceof SVGElement)) return;
        const t = Mn(e.parentNode, []);
        for(let i = 0; i < t.length; i += 1)if (t[i] instanceof Element && Ll(t[i])) return t[i];
        return document.scrollingElement || document.documentElement;
    }
    let qt = !1;
    function Vl() {
        return qt;
    }
    if (typeof window < "u") {
        qt = !1;
        try {
            const e = Object.defineProperty({}, "passive", {
                get () {
                    qt = !0;
                }
            });
            window.addEventListener("test", null, e);
        } catch  {}
    }
    let Fl = 0;
    function Xt(e) {
        const t = e;
        t._vs_styleStamp++;
    }
    function Bl(e, t, i) {
        const l = e?.[i];
        if (l == null) throw new Error(`Key is ${l} on item (keyField is '${i}')`);
        return l;
    }
    function xn(e, t, i, l, c) {
        const s = U([]), I = U(0), P = U(!1);
        let g = 0, x = 0;
        const D = new Map, k = new Map;
        let B = !1, X = 0, L = 0, ie = !1, ue = null, re = null, z = null, W = 0, Q = null, ee = [], j = null, oe = null, ne = null, me = !1;
        const ce = new Set, $ = U({}), p = ae(()=>{
            const o = b(e);
            return o.items.length > 0 && typeof o.items[0] != "object";
        }), a = ae(()=>{
            const o = b(e);
            if (o.itemSize === null) {
                const u = {
                    [-1]: {
                        accumulator: 0
                    }
                }, _ = o.items, Y = o.sizeField ?? "size", F = o.minItemSize, q = $.value;
                let J = 1e4, ve = 0, We;
                for(let Ae = 0, Le = _.length; Ae < Le; Ae++){
                    const Ue = p.value ? Ae : Bl(_[Ae], Ae, o.keyField);
                    We = q[Ue] || _[Ae][Y] || F, We < J && (J = We), ve += We, u[Ae] = {
                        accumulator: ve,
                        size: We
                    };
                }
                return W = J, u;
            }
            return [];
        }), m = ae(()=>s.value.filter((o)=>o.nr.used).sort((o, u)=>o.nr.index - u.nr.index)), E = ae(()=>{
            const o = b(e), u = p.value ? null : o.keyField;
            return Ml(o.items, u, (_, Y, F)=>o.itemSize != null ? o.itemSize : $.value[F] || _?.[o.sizeField ?? "size"] || void 0);
        });
        function fe(o) {
            const u = b(e);
            return $.value = Nt(o, u.items, p.value ? null : u.keyField), Object.keys($.value).length > 0;
        }
        function De(o) {
            let u = k.get(o);
            return u || (u = [], k.set(o, u)), u;
        }
        function Be(o, u, _, Y, F) {
            const q = pl({
                id: Fl++,
                index: u,
                used: !0,
                key: Y,
                type: F
            }), J = gl({
                item: _,
                position: 0,
                offset: 0,
                nr: q,
                _vs_styleStamp: 0
            });
            return o.push(J), J;
        }
        function Ie(o) {
            const u = De(o);
            if (u && u.length) {
                const _ = u.pop();
                return _.nr.used = !0, Xt(_), _;
            }
        }
        function Je(o) {
            const u = o.nr.type;
            De(u).push(o), o.nr.used = !1, o.position = -9999, Xt(o), D.delete(o.nr.key);
        }
        function Ne() {
            D.clear(), k.clear();
            for(let o = 0, u = s.value.length; o < u; o++){
                const _ = s.value[o];
                _ && Je(_);
            }
        }
        function qe(o) {
            let u = -1;
            return u = requestAnimationFrame(()=>{
                ce.delete(u), o();
            }), ce.add(u), u;
        }
        function d() {
            for (const o of ce)cancelAnimationFrame(o);
            ce.clear();
        }
        function C() {
            ue && (clearTimeout(ue), ue = null), re && (clearTimeout(re), re = null), z && (clearTimeout(z), z = null), oe && (clearTimeout(oe), oe = null), ne && (clearTimeout(ne), ne = null);
        }
        function O() {
            var o;
            (o = c?.onResize) == null || o.call(c), P.value && He(!1);
        }
        function $e() {
            j && !me && he();
            const o = b(e);
            if (!B) {
                if (B = !0, ue) return;
                const u = ()=>qe(()=>{
                        B = !1;
                        const { continuous: _ } = He(!1, !0);
                        _ || (re && clearTimeout(re), re = setTimeout($e, o.updateInterval + 100));
                    });
                u(), o.updateInterval && (ue = setTimeout(()=>{
                    ue = null, B && u();
                }, o.updateInterval));
            }
        }
        function r(o, u) {
            var _, Y;
            P.value && (o || u.boundingClientRect.width !== 0 || u.boundingClientRect.height !== 0 ? ((_ = c?.onVisible) == null || _.call(c), qe(()=>{
                He(!1);
            })) : (Y = c?.onHidden) == null || Y.call(c));
        }
        function f() {
            const o = b(t), u = o ? Rt(o) : void 0;
            return window.document && (u === window.document.documentElement || u === window.document.body) ? window : u || window;
        }
        function M() {
            const o = b(i);
            return o ? b(e).direction === "vertical" ? o.scrollHeight : o.scrollWidth : 0;
        }
        function V() {
            const o = b(t);
            if (!o) return {
                start: 0,
                end: 0
            };
            const u = b(e), _ = u.direction === "vertical";
            let Y;
            if (u.pageMode) {
                const F = o.getBoundingClientRect(), q = _ ? F.height : F.width;
                let J = -(_ ? F.top : F.left), ve = _ ? window.innerHeight : window.innerWidth;
                J < 0 && (ve += J, J = 0), J + ve > q && (ve = q - J), Y = {
                    start: J,
                    end: J + ve
                };
            } else _ ? Y = {
                start: o.scrollTop,
                end: o.scrollTop + o.clientHeight
            } : Y = {
                start: gt(o.scrollLeft, u.direction, o),
                end: gt(o.scrollLeft, u.direction, o) + o.clientWidth
            };
            return Y;
        }
        function de() {
            const o = b(t);
            if (!o) return {
                start: 0,
                end: 0
            };
            if (b(e).direction === "vertical") {
                const u = gt(o.scrollLeft, "horizontal", o);
                return {
                    start: u,
                    end: u + o.clientWidth
                };
            }
            return {
                start: o.scrollTop,
                end: o.scrollTop + o.clientHeight
            };
        }
        function H(o) {
            const u = b(e);
            if (u.itemSize != null) return u.itemSize;
            const _ = a.value[o];
            return _?.size || Number(u.minItemSize) || 0;
        }
        function te(o) {
            var u;
            const _ = b(e), Y = _.gridItems || 1;
            return o <= 0 ? 0 : _.itemSize != null ? Math.floor(o / Y) * _.itemSize : ((u = a.value[o - 1]) == null ? void 0 : u.accumulator) || 0;
        }
        function Ee(o) {
            const u = b(e), _ = u.items.length, Y = u.gridItems || 1;
            if (!_) return 0;
            if (u.itemSize != null) {
                const ve = Math.floor(o / u.itemSize) * Y;
                return Math.min(Math.max(ve, 0), _ - 1);
            }
            let F = 0, q = _ - 1, J = 0;
            for(; F <= q;){
                const ve = Math.floor((F + q) / 2);
                te(ve) <= o ? (J = ve, F = ve + 1) : q = ve - 1;
            }
            return J;
        }
        function he() {
            oe && (clearTimeout(oe), oe = null), j = null;
        }
        function Te() {
            oe && clearTimeout(oe), oe = setTimeout(()=>{
                j = null, oe = null;
            }, 150);
        }
        function be(o, u) {
            if (!o.length) {
                he();
                return;
            }
            const _ = Math.max(V().start - M(), 0), Y = Math.min(Ee(_), o.length - 1), F = o[Y], q = u ? F?.[u] : Y;
            if (q == null) {
                he();
                return;
            }
            const J = M() + te(Y);
            j = {
                key: q,
                offset: V().start - J
            };
        }
        function xe(o) {
            if (!j) return !1;
            const u = b(e), _ = o ?? u.items, Y = p.value ? null : u.keyField, F = dt(_, Y).indexOf(j.key);
            if (F === -1) return he(), !1;
            const q = M() + te(F) + j.offset, J = V().start;
            return Math.abs(q - J) < .5 ? !1 : (me = !0, tt(q), qe(()=>{
                me = !1;
            }), !0);
        }
        function et() {
            b(e).pageMode ? zt() : mt();
        }
        function zt() {
            Q = f(), Q.addEventListener("scroll", $e, Vl() ? {
                passive: !0
            } : !1), Q.addEventListener("resize", O);
        }
        function mt() {
            Q && (Q.removeEventListener("scroll", $e), Q.removeEventListener("resize", O), Q = null);
        }
        function Ft(o, u, _, Y, F, q) {
            const J = Math.ceil(o / u) * _, ve = Math.max(0, Math.floor(F.start / _)), We = Math.min(Math.ceil(F.end / _), Math.ceil(o / u)), Ae = Math.max(0, Math.floor(q.start / Y)), Le = Math.min(Math.ceil(q.end / Y), u), Ue = [];
            for(let Xe = ve; Xe < We; Xe++){
                const w = Xe * u;
                for(let y = Ae; y < Le; y++){
                    const K = w + y;
                    if (K >= o) break;
                    Ue.push(K);
                }
            }
            const ye = Ue[0] ?? 0, Oe = Ue.at(-1) ?? -1;
            return {
                renderedIndices: Ue,
                startIndex: ye,
                endIndex: Oe + 1,
                visibleStartIndex: ye,
                visibleEndIndex: Oe,
                totalSize: J
            };
        }
        function lt() {
            const o = b(e);
            if (!o.gridItems || o.itemSize == null) return !1;
            const u = b(t);
            if (!u) return !1;
            const _ = o.itemSecondarySize || o.itemSize, Y = o.direction === "vertical" ? u.clientWidth : u.clientHeight;
            return _ * o.gridItems > Y;
        }
        function He(o, u = !1) {
            var _, Y;
            const F = b(e), q = F.itemSize, J = F.gridItems || 1, ve = F.itemSecondarySize || q, We = W, Ae = F.typeField, Le = p.value ? null : F.keyField, Ue = F.items, ye = Ue.length, Oe = a.value, Xe = D, w = s.value;
            let y = null, K = null, T, le, Re, pe, Ce;
            if (!ye) T = le = pe = Ce = Re = 0;
            else if (ie) T = pe = 0, le = Ce = Math.min(F.prerender, Ue.length), Re = 0;
            else {
                const se = V(), ke = de();
                if (u) {
                    let Me = se.start - X;
                    Me < 0 && (Me = -Me);
                    let Ze = ke.start - L;
                    Ze < 0 && (Ze = -Ze);
                    const Tt = q === null && Me >= We || q !== null && Me >= q, Ye = J > 1 && q != null && Ze >= ve;
                    if (!Tt && !Ye) return {
                        continuous: !0
                    };
                }
                X = se.start, L = ke.start;
                const A = F.buffer;
                se.start -= A, se.end += A, ke.start -= A, ke.end += A;
                let Ke = 0;
                const nt = b(i);
                nt && (Ke = nt.scrollHeight, se.start -= Ke);
                const Ge = b(l);
                if (Ge) {
                    const Me = Ge.scrollHeight;
                    se.end += Me;
                }
                if (q === null) {
                    let Me, Ze = 0, Tt = ye - 1, Ye = ~~(ye / 2), en;
                    do en = Ye, Me = Oe[Ye].accumulator, Me < se.start ? Ze = Ye : Ye < ye - 1 && Oe[Ye + 1].accumulator > se.start && (Tt = Ye), Ye = ~~((Ze + Tt) / 2);
                    while (Ye !== en);
                    for(Ye < 0 && (Ye = 0), T = Ye, Re = Oe[ye - 1].accumulator, le = Ye; le < ye && Oe[le].accumulator < se.end; le++);
                    for(le === -1 ? le = Ue.length - 1 : (le++, le > ye && (le = ye)), pe = T; pe < ye && Ke + Oe[pe].accumulator < se.start; pe++);
                    for(Ce = pe; Ce < ye && Ke + Oe[Ce].accumulator < se.end; Ce++);
                } else if (J > 1) {
                    const Me = Ft(ye, J, q, ve, se, ke);
                    y = Me.renderedIndices, K = new Set(y), T = Me.startIndex, le = Me.endIndex, pe = Me.visibleStartIndex, Ce = Me.visibleEndIndex, Re = Me.totalSize;
                } else {
                    T = ~~(se.start / q * J);
                    const Me = T % J;
                    T -= Me, le = Math.ceil(se.end / q * J), pe = Math.max(0, Math.floor((se.start - Ke) / q * J)), Ce = Math.floor((se.end - Ke) / q * J), T < 0 && (T = 0), le > ye && (le = ye), pe < 0 && (pe = 0), Ce > ye && (Ce = ye), Re = Math.ceil(ye / J) * q;
                }
            }
            le - T > Rl.itemsLimit && vt(), I.value = Re;
            let Z;
            const je = T <= x && le >= g;
            if (!je || o) Ne();
            else for(let se = 0, ke = w.length; se < ke; se++){
                const A = w[se];
                if (A && (Z = A, Z.nr.used)) {
                    const Ke = K ? K.has(Z.nr.index) : Z.nr.index >= T && Z.nr.index < le, nt = q || Oe[Z.nr.index] && Oe[Z.nr.index].size;
                    (!Ke || !nt) && Je(Z);
                }
            }
            let Se, Ve;
            const pt = y ?? Array.from({
                length: Math.max(0, le - T)
            }, (se, ke)=>T + ke);
            for (const se of pt){
                if (!(q || Oe[se] && Oe[se].size)) continue;
                Se = Ue[se];
                const ke = Le ? Se[Le] : se;
                if (ke == null) throw new Error(`Key is ${ke} on item (keyField is '${Le}')`);
                if (Z = Xe.get(ke), Z) Z.item !== Se && (Z.item = Se), Z.nr.used || console.warn(`Expected existing view's used flag to be true, got ${Z.nr.used}`);
                else {
                    if (Ve = Se[Ae], Z = Ie(Ve), Z) {
                        const A = Z.nr.index !== se || Z.nr.key !== ke;
                        Z.item = Se, Z.nr.index = se, Z.nr.key = ke, Z.nr.type !== Ve && console.warn("Reused view's type does not match pool's type"), A && Xt(Z);
                    } else Z = Be(w, se, Se, ke, Ve);
                    Xe.set(ke, Z);
                }
                q === null ? (Z.position = ((_ = Oe[se - 1]) == null ? void 0 : _.accumulator) || 0, Z.offset = 0) : (Z.position = Math.floor(se / J) * q, Z.offset = se % J * ve);
            }
            return g = T, x = le, F.emitUpdate && ((Y = c?.onUpdate) == null || Y.call(c, T, le, pe, Ce)), z && clearTimeout(z), z = setTimeout(it, F.updateInterval + 300), {
                continuous: je
            };
        }
        function vt() {
            throw ne = setTimeout(()=>{
                ne = null, console.warn("It seems the scroller element isn't scrolling, so it tries to render all the items at once.", "Scroller:", b(t)), console.warn("Make sure the scroller has a fixed height (or width) and 'overflow-y' (or 'overflow-x') set to 'auto' so it can scroll correctly and only render the items visible in the scroll viewport.");
            }), new Error("Rendered items limit reached");
        }
        function $t() {
            if (lt()) return !1;
            const o = s.value.filter(({ nr: u })=>u.used);
            for(let u = 1; u < o.length; u++)if (o[u].nr.index !== o[u - 1].nr.index + 1) return !0;
            return !1;
        }
        function it() {
            s.value.sort((o, u)=>o.nr.index - u.nr.index), $t() && (He(!1), z && clearTimeout(z));
        }
        function ht(o, u) {
            const _ = b(e), Y = b(t);
            if (!Y) return;
            const F = Math.max(0, Math.min(o, _.items.length - 1)), q = V().start, J = Al(Y, _.direction, _.pageMode), ve = te(F), We = H(F), Ae = un(ve, We, q, J, u?.align, u?.offset ?? 0);
            if (Ae != null && (tt(Ae, u), _.gridItems && _.itemSize != null)) {
                const Le = b(t);
                if (!Le) return;
                const Ue = _.gridItems, ye = _.itemSecondarySize || _.itemSize, Oe = F % Ue * ye, Xe = _.direction === "vertical" ? "horizontal" : "vertical", w = Xe === "horizontal" ? gt(Le.scrollLeft, "horizontal", Le) : Le.scrollTop, y = Xe === "horizontal" ? Le.clientWidth : Le.clientHeight, K = un(Oe, ye, w, y, u?.align, u?.offset ?? 0);
                K != null && Wt(Le, Xe, K, u);
            }
        }
        function tt(o, u) {
            const _ = b(e), Y = b(t);
            if (Y) if (_.pageMode) {
                const F = Rt(Y), q = F.getBoundingClientRect(), J = Y.getBoundingClientRect(), ve = _.direction === "vertical" ? "top" : "left", We = Rt(Y) === document.documentElement || Rt(Y) === document.body ? _.direction === "vertical" ? window.scrollY : window.scrollX : gt(_.direction === "vertical" ? F.scrollTop : F.scrollLeft, _.direction, F), Ae = J[ve] - q[ve];
                Wt(F.tagName === "HTML" ? window : F, _.direction, o + We + Ae, u);
            } else Wt(Y, _.direction, o, u);
        }
        const Pe = b(e);
        return ee = dt(Pe.items, Pe.items.length > 0 && typeof Pe.items[0] != "object" ? null : Pe.keyField), Pe.cache && fe(Pe.cache), Pe.prerender && (ie = !0, He(!1)), Pe.gridItems && !Pe.itemSize && console.error("[vue-recycle-scroller] You must provide an itemSize when using gridItems"), rt(()=>{
            et(), bt(()=>{
                ie = !1, He(!0), P.value = !0;
            });
        }), wn(()=>{
            const o = X;
            typeof o == "number" && bt(()=>{
                tt(o);
            });
        }), Vt(()=>{
            C(), d(), mt();
        }), we(()=>b(e).cache, (o)=>{
            fe(o), He(!0);
        }), we(()=>b(e).items, (o, u)=>{
            const _ = b(e), Y = p.value ? null : _.keyField, F = dt(o, Y);
            if (_.shift) {
                const q = u ? dt(u, Y) : ee;
                $n(q, F) > 0 ? be(u ?? [], Y) : he();
            } else he();
            ee = F, xe(o), He(!0);
        }), we(()=>b(e).pageMode, ()=>{
            et(), He(!1);
        }), we(a, ()=>{
            xe() && Te(), He(!1);
        }, {
            deep: !0
        }), we(()=>b(e).gridItems, ()=>{
            He(!0);
        }), we(()=>b(e).itemSecondarySize, ()=>{
            He(!0);
        }), {
            pool: s,
            visiblePool: m,
            totalSize: I,
            ready: P,
            sizes: a,
            simpleArray: p,
            scrollToItem: ht,
            scrollToPosition: tt,
            getScroll: V,
            findItemIndex: Ee,
            getItemOffset: te,
            getItemSize: H,
            cacheSnapshot: E,
            restoreCache: fe,
            updateVisibleItems: He,
            handleScroll: $e,
            handleResize: O,
            handleVisibilityChange: r,
            sortViews: it
        };
    }
    function Kt(e) {
        return e.item;
    }
    function Hl(e) {
        return e._vs_styleStamp ?? 0;
    }
    const Rn = [
        "position",
        "top",
        "left",
        "transform",
        "willChange",
        "visibility",
        "pointerEvents"
    ];
    function dn(e) {
        const t = {};
        for (const i of Rn)t[i] = e.style[i];
        return t;
    }
    function In(e, t) {
        for (const i of Rn)e.style[i] = t[i] ?? "";
    }
    function fn(e, t, i, l) {
        if (!("view" in t)) {
            In(e, l);
            return;
        }
        const c = i === "vertical", s = e.tagName === "TR", I = c ? `translateY(${t.view.position}px) translateX(${t.view.offset}px)` : `translateX(${t.view.position}px) translateY(${t.view.offset}px)`;
        e.style.position = "absolute", e.style.top = c && s ? `${t.view.position}px` : "0px", e.style.left = !c && s ? `${t.view.position}px` : "0px", e.style.transform = s ? "" : I, e.style.willChange = s ? "unset" : "transform", e.style.visibility = t.view.nr.used ? "visible" : "hidden", e.style.pointerEvents = t.view.nr.used ? "" : "none";
    }
    function mn(e) {
        return "view" in e ? {
            item: Kt(e.view).item,
            active: e.view.nr.used,
            index: e.view.nr.index,
            watchData: e.watchData ?? !1,
            emitResize: e.emitResize ?? !1,
            sizeDependencies: e.sizeDependencies ?? null,
            onResize: e.onResize
        } : {
            watchData: !1,
            emitResize: !1,
            sizeDependencies: null,
            ...e
        };
    }
    function vn(e, t, i, l) {
        return i ? l ?? null : e?.[t] ?? null;
    }
    function Pl(e) {
        let t = 0, i = {};
        const l = Cl();
        let c = !1, s, I = !1, P = [], g = null, x = null;
        const D = new Set, k = dl({
            active: !0,
            sizes: {},
            keyField: b(e).keyField,
            simpleArray: !1
        }), B = ae(()=>b(e).direction), X = ae(()=>b(b(e).el)), L = ae(()=>b(b(e).before)), ie = ae(()=>b(b(e).after)), ue = new Map;
        function re(r) {
            let f = -1;
            return f = requestAnimationFrame(()=>{
                D.delete(f), r();
            }), D.add(f), f;
        }
        function z() {
            for (const r of D)cancelAnimationFrame(r);
            D.clear();
        }
        typeof ResizeObserver < "u" && (s = new ResizeObserver((r)=>{
            re(()=>{
                if (Array.isArray(r)) {
                    for (const f of r)if (f.target && f.target.$_vs_onResize) {
                        let M, V;
                        if (f.borderBoxSize) {
                            const de = f.borderBoxSize[0];
                            M = de.inlineSize, V = de.blockSize;
                        } else M = f.contentRect.width, V = f.contentRect.height;
                        f.target.$_vs_onResize(f.target.$_vs_id, M, V);
                    }
                }
            });
        }));
        const W = {
            vscrollData: k,
            resizeObserver: s,
            direction: B,
            undefinedMap: i,
            undefinedSizeCount: {
                get value () {
                    return t;
                },
                set value (r){
                    t = r;
                }
            },
            onVscrollUpdate (r) {
                const f = (M)=>{
                    r(M);
                };
                return l.on("vscroll:update", f), ()=>l.off("vscroll:update", f);
            }
        };
        yt("vscrollData", k), yt("vscrollParent", {
            get $_undefinedSizes () {
                return t;
            },
            set $_undefinedSizes (r){
                t = r;
            },
            get $_undefinedMap () {
                return i;
            },
            set $_undefinedMap (r){
                i = r;
            },
            $_events: l,
            direction: B
        }), yt("vscrollResizeObserver", s), yt("vscrollMeasurementContext", W), yt("vscrollAnchorRegistry", {
            delete (r) {
                ue.delete(r);
            },
            set (r, f) {
                ue.set(r, f);
            }
        });
        const Q = ae(()=>{
            const r = b(e);
            return r.items.length > 0 && typeof r.items[0] != "object";
        }), ee = ae(()=>{
            const r = [], f = b(e), { items: M, keyField: V } = f, de = Q.value, H = k.sizes, te = M.length;
            for(let Ee = 0; Ee < te; Ee++){
                const he = M[Ee], Te = de ? Ee : he[V];
                let be = H[Te];
                typeof be > "u" && !i[Te] && (be = 0), r.push({
                    item: he,
                    id: Te,
                    size: be
                });
            }
            return r;
        }), j = b(e);
        P = dt(j.items, Q.value ? null : j.keyField), j.cache && (k.sizes = Nt(j.cache, j.items, Q.value ? null : j.keyField));
        const oe = ae(()=>{
            const r = b(e);
            return {
                items: ee.value,
                keyField: "id",
                direction: r.direction,
                itemSize: null,
                gridItems: void 0,
                itemSecondarySize: void 0,
                minItemSize: r.minItemSize,
                sizeField: "size",
                typeField: "type",
                buffer: r.buffer ?? 200,
                pageMode: r.pageMode ?? !1,
                shift: !1,
                cache: r.cache,
                prerender: r.prerender ?? 0,
                emitUpdate: r.emitUpdate ?? !1,
                updateInterval: r.updateInterval ?? 0
            };
        });
        function ne() {
            var r, f;
            Ne(), (f = (r = b(e)).onResize) == null || f.call(r);
        }
        function me() {
            var r, f;
            l.emit("vscroll:update", {
                force: !1
            }), (f = (r = b(e)).onVisible) == null || f.call(r);
        }
        const ce = xn(oe, X, L, ie, {
            onResize: ne,
            onVisible: me,
            onHidden: ()=>{
                var r, f;
                return (f = (r = b(e)).onHidden) == null ? void 0 : f.call(r);
            },
            onUpdate: (r, f, M, V)=>{
                var de, H;
                return (H = (de = b(e)).onUpdate) == null ? void 0 : H.call(de, r, f, M, V);
            }
        }), $ = new WeakMap;
        function p() {
            x != null && (cancelAnimationFrame(x), D.delete(x), x = null);
        }
        function a() {
            p(), g = null;
        }
        function m() {
            g == null || x != null || (x = re(()=>{
                x = null, Be();
            }));
        }
        function E() {
            const r = X.value;
            if (!r) return null;
            const f = r.getBoundingClientRect();
            let M = null;
            for (const [V, de] of ue.entries()){
                if (!de.active || getComputedStyle(V).visibility === "hidden") continue;
                const H = V.getBoundingClientRect();
                if (H.bottom <= f.top || H.top >= f.bottom) continue;
                const te = Math.max(H.top, f.top) - f.top;
                (!M || te < M.score) && (M = {
                    key: de.id,
                    offset: H.top - f.top,
                    score: te
                });
            }
            return M;
        }
        function fe(r) {
            const f = X.value;
            if (!f) {
                a();
                return;
            }
            const M = f.scrollTop, V = Math.min(ce.findItemIndex(M), r.length - 1), de = r[V];
            if (de == null) {
                a();
                return;
            }
            const H = E();
            g = {
                logicalKey: de,
                logicalOffset: M - ce.getItemOffset(V),
                pendingKeys: new Set,
                stableFrames: 0,
                visualKey: H?.key ?? null,
                visualOffset: H?.offset ?? 0
            };
        }
        function De(r) {
            const f = X.value;
            return !f || Math.abs(f.scrollTop - r) < .5 ? !1 : (I = !0, f.scrollTop = r, f.dispatchEvent(new Event("scroll")), re(()=>{
                I = !1;
            }), !0);
        }
        function Be() {
            const r = g, f = X.value;
            if (!r || !f) return;
            const M = ee.value.findIndex((te)=>te.id === r.logicalKey);
            if (M === -1) {
                a();
                return;
            }
            let V = !1;
            const de = ce.getItemOffset(M) + r.logicalOffset;
            if (V = De(de) || V, r.visualKey != null) for (const [te, Ee] of ue.entries()){
                if (!Ee.active || Ee.id !== r.visualKey || getComputedStyle(te).visibility === "hidden") continue;
                const he = te.getBoundingClientRect().top - f.getBoundingClientRect().top - r.visualOffset;
                V = De(f.scrollTop + he) || V;
                break;
            }
            let H = !0;
            for (const te of r.pendingKeys)if (!(typeof k.sizes[te] == "number" && k.sizes[te] > 0)) {
                H = !1;
                break;
            }
            if (!V && H) {
                if (r.stableFrames++, r.stableFrames >= 2) {
                    a();
                    return;
                }
            } else r.stableFrames = 0;
            m();
        }
        function Ie(r, f, M, V) {
            const de = vl(), H = Mt(f), te = Mt(M), Ee = Mt({
                onResize: M.onResize
            }), he = Mt(r), Te = de.run(()=>(we(()=>{
                    const be = H.value;
                    if (!("view" in be)) return {
                        active: te.value.active,
                        direction: B.value,
                        id: vn(te.value.item, b(e).keyField, k.simpleArray, te.value.index),
                        legacy: !0
                    };
                    const { view: xe } = be;
                    return {
                        active: xe.nr.used,
                        direction: B.value,
                        id: Kt(xe).id,
                        legacy: !1,
                        position: xe.position,
                        offset: xe.offset,
                        styleStamp: Hl(xe)
                    };
                }, ()=>{
                    const be = he.value;
                    if (be) {
                        const xe = H.value, et = "view" in xe ? Kt(xe.view).id : vn(te.value.item, b(e).keyField, k.simpleArray, te.value.index);
                        et != null && ue.set(be, {
                            active: te.value.active && k.active,
                            id: et
                        }), fn(be, H.value, B.value, V);
                    }
                }, {
                    immediate: !0
                }), Tn(te, he, W, Ee)));
            Te.mount(), $.set(r, {
                binding: H,
                scope: de,
                options: te,
                callbacks: Ee,
                el: he,
                controller: Te,
                restoreStyles: V
            });
        }
        const Je = {
            mounted (r, f) {
                const M = dn(r);
                Ie(r, f.value, mn(f.value), M);
            },
            updated (r, f) {
                const M = $.get(r), V = mn(f.value);
                if (!M) {
                    const de = dn(r);
                    Ie(r, f.value, V, de);
                    return;
                }
                M.binding.value = f.value, M.options.value = V, M.callbacks.value = {
                    onResize: V.onResize
                }, M.el.value = r, fn(r, f.value, B.value, M.restoreStyles);
            },
            unmounted (r) {
                const f = $.get(r);
                f && (f.controller.unmount(), f.scope.stop(), In(r, f.restoreStyles), ue.delete(r), $.delete(r));
            }
        };
        function Ne(r = !1) {
            (r || Q.value) && (k.sizes = {}), l.emit("vscroll:update", {
                force: !0
            });
        }
        function qe(r, f) {
            ce.scrollToItem(r, f);
        }
        function d(r) {
            const f = b(e);
            return k.sizes = Nt(r, f.items, Q.value ? null : f.keyField), ce.restoreCache(r);
        }
        function C(r, f) {
            const M = b(e), V = Q.value ? f ?? M.items.indexOf(r) : r[M.keyField];
            return k.sizes[V] || 0;
        }
        function O() {
            const r = X.value;
            r && (c || (c = !0, bt(()=>{
                r.scrollTop = r.scrollHeight + 5e3;
                const f = ()=>{
                    r.scrollTop = r.scrollHeight + 5e3, re(()=>{
                        r.scrollTop = r.scrollHeight + 5e3, t === 0 ? c = !1 : re(f);
                    });
                };
                re(f);
            })));
        }
        function $e() {
            g && !I && a();
        }
        return we(()=>b(e).items, (r, f)=>{
            const M = b(e), V = Q.value ? null : M.keyField, de = dt(r, V);
            if (M.shift) {
                const H = f ? dt(f, V) : P, te = $n(H, de);
                te > 0 ? (fe(H), g && (g.pendingKeys = new Set(de.slice(0, te)), g.stableFrames = 0, bt(()=>{
                    g && Be();
                }))) : a();
            } else a();
            P = de, Ne();
        }, {
            flush: "sync"
        }), we(()=>b(e).cache, (r)=>{
            r && d(r);
        }), we(Q, (r)=>{
            k.simpleArray = r;
        }, {
            immediate: !0
        }), we(()=>b(e).direction, ()=>{
            a(), Ne(!0);
        }), we(X, (r, f)=>{
            f?.removeEventListener("scroll", $e), r?.addEventListener("scroll", $e);
        }, {
            immediate: !0
        }), we(ee, (r, f)=>{
            const M = X.value;
            if (!M) return;
            if (g) {
                Be();
                return;
            }
            const V = M.scrollTop, de = b(e);
            let H = 0, te = 0;
            const Ee = Math.min(r.length, f.length);
            for(let Te = 0; Te < Ee && !(H >= V); Te++)H += f[Te].size || de.minItemSize, te += r[Te].size || de.minItemSize;
            const he = te - H;
            he !== 0 && (M.scrollTop += he);
        }, {
            flush: "post"
        }), wn(()=>{
            k.active = !0;
        }), fl(()=>{
            k.active = !1;
        }), kt(()=>{
            var r;
            p(), z(), (r = X.value) == null || r.removeEventListener("scroll", $e), l.all.clear();
        }), {
            vscrollData: k,
            itemsWithSize: ee,
            resizeObserver: s,
            measurementContext: W,
            vDynamicScrollerItem: Je,
            ...ce,
            simpleArray: Q,
            forceUpdate: Ne,
            scrollToItem: qe,
            restoreCache: d,
            getItemSize: C,
            scrollToBottom: O,
            onScrollerResize: ne,
            onScrollerVisible: me
        };
    }
    const Jt = new WeakMap;
    function Wl(e) {
        return typeof e == "function" ? {
            callback: e,
            observer: null,
            intersection: void 0,
            visible: null
        } : {
            callback: e.callback,
            observer: null,
            intersection: e.intersection,
            visible: null
        };
    }
    function pn(e, t) {
        En(e);
        const i = Wl(t.value);
        if (Jt.set(e, i), typeof IntersectionObserver > "u") {
            const l = e.getBoundingClientRect();
            i.visible = !0, i.callback(!0, {
                boundingClientRect: l
            });
            return;
        }
        i.observer = new IntersectionObserver((l)=>{
            const c = l[0], s = !!(c != null && c.isIntersecting);
            i.visible !== null && i.visible === s || (i.visible = s, i.callback(s, c));
        }, i.intersection), i.observer.observe(e);
    }
    function En(e) {
        const t = Jt.get(e);
        t != null && t.observer && (t.observer.disconnect(), t.observer = null);
    }
    const Ul = {
        mounted (e, t) {
            pn(e, t);
        },
        updated (e, t) {
            t.value !== t.oldValue && pn(e, t);
        },
        unmounted (e) {
            En(e), Jt.delete(e);
        }
    }, Xl = St({
        __name: "ItemView",
        props: {
            view: {},
            itemTag: {}
        },
        setup (e) {
            const t = e;
            return (i, l)=>(S(), _e(Lt(t.itemTag), {
                    class: "vue-recycle-scroller__item-view"
                }, {
                    default: h(()=>[
                            Qe(i.$slots, "default", {
                                item: t.view.item,
                                index: t.view.nr.index,
                                active: t.view.nr.used
                            })
                        ]),
                    _: 3
                }));
        }
    }), Yl = St({
        __name: "ResizeObserver",
        emits: [
            "notify"
        ],
        setup (e, { emit: t }) {
            const i = t, l = U();
            let c = null, s = null;
            function I() {
                i("notify");
            }
            return rt(()=>{
                var P;
                const g = (P = l.value) == null ? void 0 : P.parentElement;
                if (g) {
                    if (typeof ResizeObserver < "u") {
                        c = new ResizeObserver(()=>{
                            I();
                        }), c.observe(g);
                        return;
                    }
                    s = ()=>I(), window.addEventListener("resize", s);
                }
            }), Vt(()=>{
                c && (c.disconnect(), c = null), s && (window.removeEventListener("resize", s), s = null);
            }), (P, g)=>(S(), G("div", {
                    ref_key: "el",
                    ref: l,
                    class: "vue-recycle-scroller__resize-observer",
                    "aria-hidden": "true"
                }, null, 512));
        }
    }), Nl = (e, t)=>{
        const i = e.__vccOpts || e;
        for (const [l, c] of t)i[l] = c;
        return i;
    }, ql = Nl(Yl, [
        [
            "__scopeId",
            "data-v-08cc04ab"
        ]
    ]), Kl = St({
        __name: "RecycleScroller",
        props: {
            items: {},
            keyField: {
                default: "id"
            },
            direction: {
                default: "vertical"
            },
            listTag: {
                default: "div"
            },
            itemTag: {
                default: "div"
            },
            itemSize: {
                default: null
            },
            gridItems: {
                default: void 0
            },
            itemSecondarySize: {
                default: void 0
            },
            minItemSize: {
                default: null
            },
            sizeField: {
                default: "size"
            },
            typeField: {
                default: "type"
            },
            buffer: {
                default: 200
            },
            pageMode: {
                type: Boolean,
                default: !1
            },
            shift: {
                type: Boolean,
                default: !1
            },
            cache: {
                default: void 0
            },
            prerender: {
                default: 0
            },
            emitUpdate: {
                type: Boolean,
                default: !1
            },
            disableTransform: {
                type: Boolean,
                default: !1
            },
            updateInterval: {
                default: 0
            },
            skipHover: {
                type: Boolean,
                default: !1
            },
            listClass: {
                default: ""
            },
            itemClass: {
                default: ""
            }
        },
        emits: [
            "resize",
            "visible",
            "hidden",
            "update",
            "scrollStart",
            "scrollEnd"
        ],
        setup (e, { expose: t, emit: i }) {
            const l = e, c = i, s = Ul, I = U(), P = U(), g = U(), x = U(null), D = xn(l, I, P, g, {
                onResize: ()=>c("resize"),
                onVisible: ()=>c("visible"),
                onHidden: ()=>c("hidden"),
                onUpdate: (m, E, fe, De)=>{
                    c("update", m, E, fe, De), fe <= 0 && c("scrollStart"), De >= l.items.length - 1 && c("scrollEnd");
                }
            }), { pool: k, visiblePool: B, totalSize: X, ready: L, scrollToItem: ie, scrollToPosition: ue, getScroll: re, findItemIndex: z, getItemOffset: W, getItemSize: Q, cacheSnapshot: ee, restoreCache: j, updateVisibleItems: oe, handleScroll: ne, handleResize: me, handleVisibilityChange: ce } = D;
            function $(m) {
                x.value = m;
            }
            function p() {
                x.value = null;
            }
            const a = ae(()=>{
                const m = {
                    [l.direction === "vertical" ? "minHeight" : "minWidth"]: `${X.value}px`
                };
                if (l.gridItems && l.itemSize != null) {
                    const E = (l.itemSecondarySize || l.itemSize) * l.gridItems;
                    m[l.direction === "vertical" ? "minWidth" : "minHeight"] = `${E}px`;
                }
                return m;
            });
            return t({
                el: I,
                visiblePool: B,
                scrollToItem: ie,
                scrollToPosition: ue,
                getScroll: re,
                findItemIndex: z,
                getItemOffset: W,
                getItemSize: Q,
                cacheSnapshot: ee,
                restoreCache: j,
                updateVisibleItems: oe
            }), (m, E)=>jt((S(), G("div", {
                    ref_key: "el",
                    ref: I,
                    class: at([
                        "vue-recycle-scroller",
                        {
                            "grid-mode": l.gridItems,
                            ready: n(L),
                            "page-mode": l.pageMode,
                            [`direction-${l.direction}`]: !0
                        }
                    ]),
                    onScrollPassive: E[0] || (E[0] = (...fe)=>n(ne) && n(ne)(...fe))
                }, [
                    m.$slots.before ? (S(), G("div", {
                        key: 0,
                        ref_key: "before",
                        ref: P,
                        class: "vue-recycle-scroller__slot"
                    }, [
                        Qe(m.$slots, "before")
                    ], 512)) : ge("", !0),
                    (S(), _e(Lt(l.listTag), {
                        style: ft(a.value),
                        class: at([
                            "vue-recycle-scroller__item-wrapper",
                            l.listClass
                        ])
                    }, {
                        default: h(()=>[
                                (S(!0), G(ot, null, At(n(k), (fe)=>(S(), _e(Xl, Ot({
                                        key: fe.nr.id,
                                        view: fe,
                                        "item-tag": l.itemTag,
                                        style: n(L) ? [
                                            l.disableTransform ? {
                                                [l.direction === "vertical" ? "top" : "left"]: `${fe.position}px`,
                                                willChange: "unset"
                                            } : {
                                                transform: `translate${l.direction === "vertical" ? "Y" : "X"}(${fe.position}px) translate${l.direction === "vertical" ? "X" : "Y"}(${fe.offset}px)`
                                            },
                                            {
                                                width: l.gridItems ? `${l.direction === "vertical" && l.itemSecondarySize || l.itemSize}px` : void 0,
                                                height: l.gridItems ? `${l.direction === "horizontal" && l.itemSecondarySize || l.itemSize}px` : void 0,
                                                visibility: fe.nr.used ? "visible" : "hidden"
                                            }
                                        ] : null,
                                        class: [
                                            "vue-recycle-scroller__item-view",
                                            [
                                                l.itemClass,
                                                {
                                                    hover: !l.skipHover && x.value === fe.nr.key
                                                }
                                            ]
                                        ]
                                    }, ml(l.skipHover ? {} : {
                                        mouseenter: ()=>{
                                            $(fe.nr.key);
                                        },
                                        mouseleave: ()=>{
                                            p();
                                        }
                                    })), {
                                        default: h((De)=>[
                                                Qe(m.$slots, "default", Ot({
                                                    ref_for: !0
                                                }, De))
                                            ]),
                                        _: 2
                                    }, 1040, [
                                        "view",
                                        "item-tag",
                                        "style",
                                        "class"
                                    ]))), 128)),
                                l.items.length === 0 ? Qe(m.$slots, "empty", {
                                    key: 0
                                }) : ge("", !0)
                            ]),
                        _: 3
                    }, 8, [
                        "style",
                        "class"
                    ])),
                    m.$slots.after ? (S(), G("div", {
                        key: 1,
                        ref_key: "after",
                        ref: g,
                        class: "vue-recycle-scroller__slot"
                    }, [
                        Qe(m.$slots, "after")
                    ], 512)) : ge("", !0),
                    v(ql, {
                        onNotify: n(me)
                    }, null, 8, [
                        "onNotify"
                    ])
                ], 34)), [
                    [
                        n(s),
                        n(ce)
                    ]
                ]);
        }
    }), Ql = St({
        inheritAttrs: !1,
        __name: "DynamicScroller",
        props: {
            items: {},
            keyField: {
                default: "id"
            },
            direction: {
                default: "vertical"
            },
            listTag: {
                default: "div"
            },
            itemTag: {
                default: "div"
            },
            minItemSize: {},
            shift: {
                type: Boolean,
                default: !1
            },
            cache: {
                default: void 0
            }
        },
        emits: [
            "resize",
            "visible"
        ],
        setup (e, { expose: t, emit: i }) {
            const l = e, c = i, s = U(), I = ae(()=>{
                var j;
                const oe = (j = s.value) == null ? void 0 : j.el;
                return oe && typeof oe == "object" && "value" in oe ? oe.value : oe;
            }), P = ae(()=>({
                    items: l.items,
                    keyField: l.keyField,
                    direction: l.direction,
                    minItemSize: l.minItemSize,
                    shift: l.shift,
                    cache: l.cache,
                    el: I.value,
                    onResize: ()=>c("resize"),
                    onVisible: ()=>c("visible")
                })), g = Pl(P), { itemsWithSize: x, forceUpdate: D, scrollToItem: k, scrollToPosition: B, findItemIndex: X, getItemOffset: L, getItemSize: ie, cacheSnapshot: ue, restoreCache: re, scrollToBottom: z, onScrollerResize: W, onScrollerVisible: Q } = g;
            function ee(j, oe, ne) {
                return {
                    item: j.item,
                    index: oe,
                    active: ne,
                    itemWithSize: j
                };
            }
            return t({
                scrollToItem: k,
                scrollToPosition: B,
                findItemIndex: X,
                getItemOffset: L,
                scrollToBottom: z,
                getItemSize: ie,
                cacheSnapshot: ue,
                restoreCache: re,
                forceUpdate: D
            }), (j, oe)=>(S(), _e(Kl, Ot({
                    ref_key: "scroller",
                    ref: s,
                    items: n(x),
                    "min-item-size": l.minItemSize,
                    direction: l.direction,
                    cache: l.cache,
                    "key-field": "id",
                    "list-tag": l.listTag,
                    "item-tag": l.itemTag
                }, j.$attrs, {
                    onResize: n(W),
                    onVisible: n(Q)
                }), rl({
                    default: h(({ item: ne, index: me, active: ce })=>[
                            Qe(j.$slots, "default", cl(ul(ee(ne, me, ce))))
                        ]),
                    empty: h(()=>[
                            Qe(j.$slots, "empty")
                        ]),
                    _: 2
                }, [
                    j.$slots.before ? {
                        name: "before",
                        fn: h(()=>[
                                Qe(j.$slots, "before")
                            ]),
                        key: "0"
                    } : void 0,
                    j.$slots.after ? {
                        name: "after",
                        fn: h(()=>[
                                Qe(j.$slots, "after")
                            ]),
                        key: "1"
                    } : void 0
                ]), 1040, [
                    "items",
                    "min-item-size",
                    "direction",
                    "cache",
                    "list-tag",
                    "item-tag",
                    "onResize",
                    "onVisible"
                ]));
        }
    });
    function jl(e, t, i) {
        const l = on("vscrollMeasurementContext"), c = on("vscrollAnchorRegistry", null), s = Tn(e, t, l, i);
        return rt(()=>{
            s.mount();
        }), c && we([
            s.id,
            s.finalActive,
            ()=>b(t)
        ], ([I, P, g], [x, D, k])=>{
            k && k !== g && c.delete(k), g && c.set(g, {
                active: P,
                id: I
            });
        }, {
            immediate: !0
        }), Vt(()=>{
            const I = b(t);
            c && I && c.delete(I), s.unmount();
        }), {
            id: s.id,
            size: s.size,
            finalActive: s.finalActive,
            updateSize: s.updateSize
        };
    }
    const Gl = St({
        __name: "DynamicScrollerItem",
        props: {
            item: {},
            watchData: {
                type: Boolean,
                default: !1
            },
            active: {
                type: Boolean
            },
            index: {
                default: void 0
            },
            sizeDependencies: {
                default: null
            },
            emitResize: {
                type: Boolean,
                default: !1
            },
            tag: {
                default: "div"
            }
        },
        emits: [
            "resize"
        ],
        setup (e, { emit: t }) {
            const i = e, l = t, c = U();
            return jl(i, c, {
                onResize: (s)=>l("resize", s)
            }), (s, I)=>(S(), _e(Lt(i.tag), {
                    ref_key: "el",
                    ref: c
                }, {
                    default: h(()=>[
                            Qe(s.$slots, "default")
                        ]),
                    _: 3
                }, 512));
        }
    }), Zl = hl("vaultIcon", ()=>{
        const e = U(JSON.parse(localStorage.getItem("app_vault_icon_cache") || "{}"));
        return {
            iconCache: e,
            getCachedIcon: (l)=>e.value[l] || null,
            setCachedIcon: (l, c)=>{
                e.value[l] = c, localStorage.setItem("app_vault_icon_cache", JSON.stringify(e.value));
            }
        };
    }), Jl = {
        key: 0,
        class: "loading-spinner"
    }, ei = [
        "src"
    ], ti = {
        __name: "vaultIcon",
        props: {
            service: {
                type: String,
                default: ""
            },
            size: {
                type: Number,
                default: 32
            }
        },
        setup (e) {
            const t = Zl(), i = e, l = U(!1), c = U(!0), s = U(""), I = U(null), P = U(null), g = (z)=>{
                const W = z.target, Q = s.value.includes("google") && W.naturalWidth === 16, ee = s.value.includes("bitwarden") && W.naturalWidth === 19;
                if (Q || ee) {
                    console.warn(`[VaultIcon] Loaded icon found as placeholder (${W.naturalWidth}px), clearing cache...`), k.value && t.clearCachedIcon(k.value), x();
                    return;
                }
                c.value = !1, clearTimeout(I.value), clearTimeout(P.value);
            }, x = ()=>{
                l.value = !0, c.value = !1, clearTimeout(I.value), clearTimeout(P.value);
            }, D = {
                google: "google.com",
                github: "github.com",
                microsoft: "microsoft.com",
                apple: "apple.com",
                amazon: "amazon.com",
                facebook: "facebook.com",
                twitter: "twitter.com",
                discord: "discord.com",
                slack: "slack.com",
                telegram: "telegram.org",
                dropbox: "dropbox.com",
                cloudflare: "cloudflare.com",
                gitlab: "gitlab.com",
                bitbucket: "bitbucket.org",
                digitalocean: "digitalocean.com",
                heroku: "heroku.com",
                vercel: "vercel.com",
                netlify: "netlify.com",
                stripe: "stripe.com",
                paypal: "paypal.com",
                spotify: "spotify.com",
                netflix: "netflix.com",
                steam: "steampowered.com",
                battle: "battle.net",
                blizzard: "battle.net"
            }, k = ae(()=>{
                if (!i.service) return "";
                const z = i.service.toLowerCase().trim();
                return z.includes(".") ? z : D[z] || `${z}.com`;
            }), B = ae(()=>i.service ? i.service.charAt(0).toUpperCase() : "");
            let X = 0;
            const L = async ()=>{
                const z = k.value;
                if (!z) {
                    c.value = !1, l.value = !1;
                    return;
                }
                const W = ++X, Q = t.getCachedIcon(z);
                if (Q) {
                    s.value = Q, c.value = !1, l.value = !1, P.value = setTimeout(()=>{
                        W === X && (console.warn(`[VaultIcon] Cache response slow for ${z}, starting backup race...`), ie(z, W));
                    }, 2e3);
                    return;
                }
                if (typeof navigator < "u" && !navigator.onLine) {
                    x();
                    return;
                }
                ie(z, W);
            }, ie = (z, W)=>{
                if (W !== X) return;
                c.value = !0, l.value = !1;
                const Q = [
                    {
                        name: "google",
                        url: `https://www.google.com/s2/favicons?domain=${z}&sz=64`
                    },
                    {
                        name: "bitwarden",
                        url: `https://icons.bitwarden.net/${z}/icon.png`
                    },
                    {
                        name: "favicon",
                        url: `https://favicon.im/zh/${z}?throw-error-on-404=true`
                    }
                ];
                let ee = !1;
                const j = 6e3, oe = (me, ce)=>new Promise(($, p)=>{
                        const a = new Image, m = setTimeout(()=>{
                            a.src = "", p("timeout");
                        }, 3e3);
                        a.onload = ()=>{
                            if (clearTimeout(m), a.naturalWidth <= 1) {
                                p("placeholder_1x1");
                                return;
                            }
                            if (ce === "google" && a.naturalWidth === 16) {
                                console.warn(`[VaultIcon] Google returned default 16px globe for ${z}`), p("google_default");
                                return;
                            }
                            if (ce === "bitwarden" && a.naturalWidth === 19) {
                                console.warn(`[VaultIcon] Bitwarden returned default 19px globe for ${z}`), p("bitwarden_default");
                                return;
                            }
                            $(me);
                        }, a.onerror = ()=>{
                            clearTimeout(m), p("network_error");
                        }, a.src = me;
                    });
                (async ()=>{
                    const me = Q[0], ce = async ()=>{
                        if (!(W !== X || ee)) try {
                            const $ = Q.map((a)=>oe(a.url, a.name)), p = await Promise.any($);
                            !ee && W === X && (ee = !0, s.value = p, t.setCachedIcon(z, p));
                        } catch  {
                            !ee && W === X && (console.error(`[VaultIcon] All race sources failed for ${z}`), x());
                        }
                    };
                    try {
                        const $ = await Promise.race([
                            oe(me.url, me.name),
                            new Promise((p, a)=>setTimeout(()=>a("timeout"), 1500))
                        ]);
                        !ee && W === X && (ee = !0, s.value = $, t.setCachedIcon(z, $), g());
                    } catch  {
                        ce();
                    }
                })(), I.value = setTimeout(()=>{
                    W === X && !ee && c.value && (console.error(`[VaultIcon] Race absolute timeout for ${z}`), x());
                }, j);
            };
            rt(()=>{
                L();
            }), Vt(()=>{
                clearTimeout(I.value), clearTimeout(P.value);
            }), we(()=>i.service, ()=>{
                s.value = "", c.value = !0, l.value = !1, L();
            });
            const ue = ae(()=>({
                    width: `${i.size}px`,
                    height: `${i.size}px`
                })), re = ae(()=>{
                const z = [
                    "#409EFF",
                    "#67C23A",
                    "#E6A23C",
                    "#F56C6C",
                    "#909399",
                    "#7232dd",
                    "#ee0a24",
                    "#07c160",
                    "#ff976a",
                    "#1989fa"
                ];
                let W = 0;
                for(let ee = 0; ee < (i.service || "").length; ee++)W = (i.service || "").charCodeAt(ee) + ((W << 5) - W);
                return {
                    backgroundColor: z[Math.abs(W) % z.length],
                    fontSize: `${Math.floor(i.size * .5)}px`
                };
            });
            return (z, W)=>(S(), G("div", {
                    class: "service-icon-wrapper",
                    style: ft(ue.value)
                }, [
                    c.value && !l.value ? (S(), G("div", Jl)) : ge("", !0),
                    s.value && !l.value ? jt((S(), G("img", {
                        key: 1,
                        src: s.value,
                        class: "service-icon-img",
                        onError: x,
                        onLoad: g
                    }, null, 40, ei)), [
                        [
                            yl,
                            !c.value
                        ]
                    ]) : ge("", !0),
                    l.value && !c.value ? (S(), G("div", {
                        key: 2,
                        class: "service-icon-fallback",
                        style: ft(re.value)
                    }, N(B.value), 5)) : ge("", !0)
                ], 4));
        }
    }, ni = bn(ti, [
        [
            "__scopeId",
            "data-v-a60dac5e"
        ]
    ]), li = {
        __name: "swipeAction",
        props: {
            id: {
                type: [
                    String,
                    Number
                ],
                default: null
            },
            disabled: {
                type: Boolean,
                default: !1
            },
            threshold: {
                type: Number,
                default: .3
            }
        },
        emits: [
            "open",
            "close"
        ],
        setup (e, { expose: t, emit: i }) {
            const l = e, c = i, s = U(null), I = U(null), P = U(null), g = U(0), x = U(!1), D = U(!1), k = U(null);
            let B = 0, X = 0, L = 0, ie = 0, ue = null;
            const re = ae(()=>I.value?.offsetWidth || 0), z = ae(()=>P.value?.offsetWidth || 0), W = ae(()=>({
                    transform: `translateX(${g.value}px)`,
                    transition: x.value ? "none" : "transform 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.15)"
                })), Q = ($)=>{
                if (l.disabled) return;
                const p = $.touches[0];
                B = p.clientX, X = p.clientY, L = g.value, ie = Date.now(), x.value = !0, ue = null;
            }, ee = ($)=>{
                if (l.disabled || !x.value) return;
                const p = $.touches[0], a = p.clientX - B, m = p.clientY - X;
                if (ue === null && (Math.abs(a) > 15 || Math.abs(m) > 15) && (ue = Math.abs(a) > Math.abs(m)), ue) {
                    $.cancelable && $.preventDefault();
                    let E = L + a;
                    E > re.value ? E = re.value + (E - re.value) * .2 : E < -z.value && (E = -z.value + (E + z.value) * .2), g.value = E;
                }
            }, j = ()=>{
                if (l.disabled) return;
                x.value = !1;
                const $ = Math.abs(g.value), p = Date.now() - ie;
                g.value > 0 ? g.value > re.value * l.threshold || p < 250 && g.value > 20 ? (g.value = re.value, D.value = !0, k.value = "left", c("open", "left"), oe()) : ce() : g.value < 0 && ($ > z.value * l.threshold || p < 250 && $ > 20) ? (g.value = -z.value, D.value = !0, k.value = "right", c("open", "right"), oe()) : ce();
            }, oe = ()=>{
                if ("vibrate" in navigator) try {
                    navigator.vibrate(10);
                } catch  {}
                l.id && window.dispatchEvent(new CustomEvent("swipe-action:opened", {
                    detail: {
                        id: l.id
                    }
                }));
            }, ne = ($)=>{
                D.value && $.detail.id !== l.id && ce();
            }, me = ($)=>{
                D.value && !s.value?.contains($.target) && ce();
            };
            rt(()=>{
                window.addEventListener("swipe-action:opened", ne), window.addEventListener("touchstart", me, {
                    passive: !0
                });
            }), kt(()=>{
                window.removeEventListener("swipe-action:opened", ne), window.removeEventListener("touchstart", me);
            });
            const ce = ()=>{
                g.value = 0, D.value = !1, k.value = null, c("close");
            };
            return t({
                reset: ce
            }), ($, p)=>(S(), G("div", {
                    class: at([
                        "swipe-action-container",
                        {
                            "is-open": D.value,
                            "is-swiping": x.value
                        }
                    ]),
                    ref_key: "containerRef",
                    ref: s
                }, [
                    R("div", {
                        class: "swipe-actions left-actions",
                        ref_key: "leftActionsRef",
                        ref: I,
                        style: ft({
                            opacity: g.value > 0 ? 1 : 0,
                            visibility: g.value > 0 ? "visible" : "hidden"
                        })
                    }, [
                        Qe($.$slots, "left-actions")
                    ], 4),
                    R("div", {
                        class: "swipe-actions right-actions",
                        ref_key: "rightActionsRef",
                        ref: P,
                        style: ft({
                            opacity: g.value < 0 ? 1 : 0,
                            visibility: g.value < 0 ? "visible" : "hidden"
                        })
                    }, [
                        Qe($.$slots, "right-actions")
                    ], 4),
                    R("div", {
                        class: "swipe-action-content",
                        style: ft(W.value),
                        onTouchstart: Q,
                        onTouchmove: ee,
                        onTouchend: j,
                        onTouchcancel: j
                    }, [
                        Qe($.$slots, "default")
                    ], 36)
                ], 2));
        }
    }, ii = {
        class: "conflict-overlay"
    }, oi = {
        class: "conflict-content"
    }, si = {
        class: "conflict-text"
    }, ai = {
        class: "conflict-actions"
    }, ri = {
        __name: "conflictOverlay",
        emits: [
            "resolve"
        ],
        setup (e) {
            return (t, i)=>{
                const l = Qt;
                return S(), G("div", ii, [
                    R("div", oi, [
                        R("p", si, N(t.$t("vault.conflict_notice")), 1),
                        R("div", ai, [
                            v(l, {
                                size: "small",
                                type: "primary",
                                plain: "",
                                onClick: i[0] || (i[0] = st((c)=>t.$emit("resolve", "force"), [
                                    "stop"
                                ]))
                            }, {
                                default: h(()=>[
                                        ze(N(t.$t("vault.force_sync")), 1)
                                    ]),
                                _: 1
                            }),
                            v(l, {
                                size: "small",
                                type: "danger",
                                plain: "",
                                onClick: i[1] || (i[1] = st((c)=>t.$emit("resolve", "discard"), [
                                    "stop"
                                ]))
                            }, {
                                default: h(()=>[
                                        ze(N(t.$t("vault.discard_local")), 1)
                                    ]),
                                _: 1
                            })
                        ])
                    ])
                ]);
            };
        }
    }, Yt = U(Date.now() / 1e3);
    let wt = null, It = 0, gn = !1;
    function ci() {
        return {
            currentTime: Yt,
            startTimer: ()=>{
                if (It++, gn || (Yt.value = sn() / 1e3, gn = !0), !wt) {
                    const i = ()=>{
                        Yt.value = sn() / 1e3;
                    };
                    i(), wt = setInterval(i, 1e3);
                }
            },
            stopTimer: ()=>{
                It--, It <= 0 && wt && (clearInterval(wt), wt = null, It = 0);
            }
        };
    }
    const ui = {
        class: "card-inner-content"
    }, di = {
        class: "card-header"
    }, fi = {
        class: "service-info"
    }, mi = [
        "title"
    ], vi = {
        class: "vault-name"
    }, pi = {
        class: "code-left"
    }, gi = [
        "data-digits"
    ], hi = [
        "data-digits"
    ], yi = {
        key: 0,
        class: "code-right flex flex-items-center"
    }, _i = {
        key: 1,
        class: "code-right"
    }, wi = {
        class: "timer-text"
    }, bi = {
        key: 2,
        class: "code-right"
    }, ki = {
        key: 3,
        class: "code-right"
    }, hn = {
        __name: "vaultItemCard",
        props: {
            item: {
                type: Object,
                required: !0
            },
            isSelected: {
                type: Boolean,
                default: !1
            },
            isDragging: {
                type: Boolean,
                default: !1
            },
            isPressing: {
                type: Boolean,
                default: !1
            },
            isCompact: {
                type: Boolean,
                default: !1
            },
            isPending: {
                type: Boolean,
                default: !1
            },
            isMobile: {
                type: Boolean,
                default: !1
            },
            isIncrementing: {
                type: Boolean,
                default: !1
            }
        },
        emits: [
            "toggle-selection",
            "command",
            "copy-code",
            "resolve-conflict",
            "increment"
        ],
        setup (e) {
            const t = bl(), i = Dt(), l = Gt(), c = U(!1);
            let s = null, I = 0, P = 0;
            const g = (a)=>{
                if (i.appGhostMode) if (a.type === "touchstart" && a.touches && a.touches.length > 0) {
                    const m = a.touches[0];
                    I = m.clientX, P = m.clientY;
                } else a.type === "mousedown" && (I = a.clientX, P = a.clientY);
            }, x = (a)=>{
                if (i.appGhostMode) {
                    if (a && a.type.startsWith("touch") && a.changedTouches && a.changedTouches.length > 0) {
                        const m = a.changedTouches[0], E = Math.abs(m.clientX - I), fe = Math.abs(m.clientY - P);
                        if (E > 15 || fe > 15) return;
                    }
                    if (a.type === "mouseup") {
                        const m = Math.abs(a.clientX - I), E = Math.abs(a.clientY - P);
                        if (m > 10 || E > 10) return;
                    }
                    c.value = !0, s && clearTimeout(s), s = setTimeout(()=>{
                        c.value = !1, s = null;
                    }, 3e4);
                }
            };
            kt(()=>{
                s && clearTimeout(s), X();
            });
            const D = e, { currentTime: k, startTimer: B, stopTimer: X } = ci(), L = U("------"), ie = U(null), ue = U(null), re = U(null), z = ae(()=>D.item.period || 30), W = ae(()=>D.item.digits || 6), Q = ae(()=>D.item.algorithm || "SHA1"), ee = ae(()=>Math.ceil(z.value - k.value % z.value)), j = ae(()=>ee.value / z.value * 100), oe = ae(()=>ee.value > 10 ? "#67C23A" : ee.value > 5 ? "#E6A23C" : "#F56C6C"), ne = ae(()=>D.item.account?.includes(":") ? D.item.account.split(":").pop() : D.item.account), me = (a, m)=>{
                if (!a || a === "------" || a === "ERROR") return [
                    a,
                    ""
                ];
                const E = Math.floor(m / 2);
                return [
                    a.substring(0, E),
                    a.substring(E)
                ];
            }, ce = ae(()=>me(L.value, W.value)), $ = ae(()=>me(ie.value, W.value)), p = async ()=>{
                if (t.isLocked || !t.isInitialized) {
                    L.value = "------";
                    return;
                }
                if (!D.item.secret) {
                    L.value = "ERROR";
                    return;
                }
                let a = D.item.secret;
                if (a && a.startsWith("nodeauth:")) {
                    const E = await t.getMaskingKey();
                    if (!E) {
                        L.value = "------";
                        return;
                    }
                    try {
                        a = await kl(a, E);
                    } catch  {
                        L.value = "ERROR";
                        return;
                    }
                }
                if (D.item.type === "hotp") {
                    L.value = await Ht(a, D.item.counter || 0, W.value, Q.value, "hotp"), ie.value = null, a = null;
                    return;
                }
                const m = Math.floor(k.value / z.value);
                (ue.value !== m || L.value === "------") && (L.value = await Ht(a, z.value, W.value, Q.value, D.item.type), ue.value = m), ee.value <= 5 && D.isMobile ? (!ie.value || re.value !== m + 1) && (ie.value = await Ht(a, z.value, W.value, Q.value, D.item.type, 1), re.value = m + 1) : ie.value = null, a = null;
            };
            return we(k, ()=>{
                D.item.type !== "hotp" && p();
            }), we(()=>D.item.counter, ()=>{
                D.item.type === "hotp" && p();
            }), we(()=>D.item.secret, ()=>{
                L.value = "------", ue.value = null, p();
            }), we(()=>t.isLocked, (a)=>{
                a ? (L.value = "------", c.value = !1) : p();
            }), we(()=>D.item.id, ()=>{
                c.value = !1, s && (clearTimeout(s), s = null);
            }), rt(()=>{
                B(), p();
            }), (a, m)=>{
                const E = yn, fe = An, De = On, Be = Dn, Ie = Hn, Je = Bn, Ne = Vn, qe = Qt, d = Pn, C = Un;
                return S(), _e(C, {
                    shadow: "hover",
                    class: at([
                        "vault-card",
                        {
                            "is-selected": e.isSelected,
                            "is-dragging": e.isDragging,
                            "is-pressing": e.isPressing,
                            "is-compact": e.isCompact,
                            "is-pending": e.isPending,
                            "is-ghost-mode": n(i).appGhostMode,
                            "is-revealed": c.value
                        }
                    ])
                }, {
                    default: h(()=>[
                            v(li, {
                                id: e.item.id,
                                disabled: !n(i).isMobile || e.item.status === "conflict" || n(l).isItemInConflict(e.item.id) || e.isDragging || e.isPressing,
                                onOpen: m[14] || (m[14] = ()=>c.value = !1)
                            }, {
                                "left-actions": h(()=>[
                                        e.item.deletedAt != null ? (S(), G("div", {
                                            key: 0,
                                            class: "swipe-btn bg-success",
                                            onClick: m[0] || (m[0] = (O)=>a.$emit("command", "restore", e.item))
                                        }, [
                                            v(E, null, {
                                                default: h(()=>[
                                                        v(n(Ct))
                                                    ]),
                                                _: 1
                                            }),
                                            R("span", null, N(a.$t("vault.restore")), 1)
                                        ])) : (S(), G("div", {
                                            key: 1,
                                            class: "swipe-btn bg-primary",
                                            onClick: m[1] || (m[1] = (O)=>a.$emit("command", "qr", e.item))
                                        }, [
                                            v(E, null, {
                                                default: h(()=>[
                                                        v(n(tn))
                                                    ]),
                                                _: 1
                                            }),
                                            R("span", null, N(a.$t("vault.export_account")), 1)
                                        ]))
                                    ]),
                                "right-actions": h(()=>[
                                        e.item.deletedAt != null ? (S(), G("div", {
                                            key: 0,
                                            class: "swipe-btn bg-danger",
                                            onClick: m[2] || (m[2] = (O)=>a.$emit("command", "delete", e.item))
                                        }, [
                                            v(E, null, {
                                                default: h(()=>[
                                                        v(n(ut))
                                                    ]),
                                                _: 1
                                            }),
                                            R("span", null, N(a.$t("vault.hard_delete")), 1)
                                        ])) : (S(), G(ot, {
                                            key: 1
                                        }, [
                                            R("div", {
                                                class: "swipe-btn bg-warning",
                                                onClick: m[3] || (m[3] = (O)=>a.$emit("command", "edit", e.item))
                                            }, [
                                                v(E, null, {
                                                    default: h(()=>[
                                                            v(n(nn))
                                                        ]),
                                                    _: 1
                                                }),
                                                R("span", null, N(a.$t("common.edit")), 1)
                                            ]),
                                            R("div", {
                                                class: "swipe-btn bg-danger",
                                                onClick: m[4] || (m[4] = (O)=>a.$emit("command", "delete", e.item))
                                            }, [
                                                v(E, null, {
                                                    default: h(()=>[
                                                            v(n(ut))
                                                        ]),
                                                    _: 1
                                                }),
                                                R("span", null, N(a.$t("common.delete")), 1)
                                            ])
                                        ], 64))
                                    ]),
                                default: h(()=>[
                                        R("div", ui, [
                                            R("div", di, [
                                                R("div", fi, [
                                                    v(fe, {
                                                        "model-value": e.isSelected,
                                                        onChange: m[5] || (m[5] = (O)=>a.$emit("toggle-selection", e.item.id)),
                                                        onClick: m[6] || (m[6] = st(()=>{}, [
                                                            "stop"
                                                        ]))
                                                    }, null, 8, [
                                                        "model-value"
                                                    ]),
                                                    v(ni, {
                                                        service: e.item.service,
                                                        size: e.isCompact ? 20 : 24
                                                    }, null, 8, [
                                                        "service",
                                                        "size"
                                                    ]),
                                                    R("h3", {
                                                        class: "service-name",
                                                        title: e.item.service
                                                    }, N(e.item.service), 9, mi),
                                                    e.item.category ? (S(), _e(De, {
                                                        key: 0,
                                                        size: "small",
                                                        effect: "light"
                                                    }, {
                                                        default: h(()=>[
                                                                ze(N(e.item.category), 1)
                                                            ]),
                                                        _: 1
                                                    })) : ge("", !0),
                                                    e.isPending && e.item.status !== "conflict" && !n(l).isItemInConflict(e.item.id) ? (S(), _e(Be, {
                                                        key: 1,
                                                        content: a.$t("vault.pending_sync_tip")
                                                    }, {
                                                        default: h(()=>[
                                                                v(E, {
                                                                    class: "pending-icon ml-5"
                                                                }, {
                                                                    default: h(()=>[
                                                                            v(n(_n))
                                                                        ]),
                                                                    _: 1
                                                                })
                                                            ]),
                                                        _: 1
                                                    }, 8, [
                                                        "content"
                                                    ])) : ge("", !0),
                                                    e.item.status === "conflict" || n(l).isItemInConflict(e.item.id) ? (S(), _e(Be, {
                                                        key: 2,
                                                        content: a.$t("vault.conflict_detected_tip")
                                                    }, {
                                                        default: h(()=>[
                                                                v(E, {
                                                                    class: "conflict-icon ml-5",
                                                                    color: "#F56C6C"
                                                                }, {
                                                                    default: h(()=>[
                                                                            v(n(Ln))
                                                                        ]),
                                                                    _: 1
                                                                })
                                                            ]),
                                                        _: 1
                                                    }, 8, [
                                                        "content"
                                                    ])) : ge("", !0)
                                                ]),
                                                n(i).isMobile ? ge("", !0) : (S(), _e(Ne, {
                                                    key: 0,
                                                    trigger: "click",
                                                    onCommand: m[8] || (m[8] = (O)=>a.$emit("command", O, e.item))
                                                }, {
                                                    dropdown: h(()=>[
                                                            v(Je, null, {
                                                                default: h(()=>[
                                                                        e.item.deletedAt == null ? (S(), _e(Ie, {
                                                                            key: 0,
                                                                            command: "qr"
                                                                        }, {
                                                                            default: h(()=>[
                                                                                    v(E, null, {
                                                                                        default: h(()=>[
                                                                                                v(n(tn))
                                                                                            ]),
                                                                                        _: 1
                                                                                    }),
                                                                                    ze(" " + N(a.$t("vault.export_account")), 1)
                                                                                ]),
                                                                            _: 1
                                                                        })) : ge("", !0),
                                                                        e.item.deletedAt != null ? (S(), _e(Ie, {
                                                                            key: 1,
                                                                            command: "restore"
                                                                        }, {
                                                                            default: h(()=>[
                                                                                    v(E, null, {
                                                                                        default: h(()=>[
                                                                                                v(n(Ct))
                                                                                            ]),
                                                                                        _: 1
                                                                                    }),
                                                                                    ze(" " + N(a.$t("vault.restore")), 1)
                                                                                ]),
                                                                            _: 1
                                                                        })) : ge("", !0),
                                                                        e.item.deletedAt == null ? (S(), _e(Ie, {
                                                                            key: 2,
                                                                            command: "edit"
                                                                        }, {
                                                                            default: h(()=>[
                                                                                    v(E, null, {
                                                                                        default: h(()=>[
                                                                                                v(n(nn))
                                                                                            ]),
                                                                                        _: 1
                                                                                    }),
                                                                                    ze(" " + N(a.$t("common.edit")), 1)
                                                                                ]),
                                                                            _: 1
                                                                        })) : ge("", !0),
                                                                        v(Ie, {
                                                                            command: "delete",
                                                                            class: "text-danger"
                                                                        }, {
                                                                            default: h(()=>[
                                                                                    v(E, null, {
                                                                                        default: h(()=>[
                                                                                                v(n(ut))
                                                                                            ]),
                                                                                        _: 1
                                                                                    }),
                                                                                    ze(" " + N(e.item.deletedAt != null ? a.$t("vault.hard_delete") : a.$t("common.delete")), 1)
                                                                                ]),
                                                                            _: 1
                                                                        })
                                                                    ]),
                                                                _: 1
                                                            })
                                                        ]),
                                                    default: h(()=>[
                                                            v(E, {
                                                                class: "more-icon",
                                                                onClick: m[7] || (m[7] = st(()=>{}, [
                                                                    "stop"
                                                                ]))
                                                            }, {
                                                                default: h(()=>[
                                                                        v(n(Fn))
                                                                    ]),
                                                                _: 1
                                                            })
                                                        ]),
                                                    _: 1
                                                }))
                                            ]),
                                            R("p", vi, N(ne.value), 1),
                                            R("div", {
                                                class: "code-display-area",
                                                onClick: m[12] || (m[12] = st((O)=>a.$emit("copy-code", e.item, L.value), [
                                                    "stop"
                                                ])),
                                                onMousedown: g,
                                                onMouseup: x,
                                                onMouseleave: x,
                                                onTouchstart: g,
                                                onTouchend: x,
                                                onTouchcancel: x
                                            }, [
                                                R("div", pi, [
                                                    R("div", {
                                                        class: "current-code",
                                                        "data-digits": W.value
                                                    }, [
                                                        L.value && L.value !== "------" && L.value !== "ERROR" ? (S(), G(ot, {
                                                            key: 0
                                                        }, [
                                                            R("span", null, N(ce.value[0]), 1),
                                                            m[15] || (m[15] = R("span", {
                                                                class: "code-divider"
                                                            }, null, -1)),
                                                            R("span", null, N(ce.value[1]), 1)
                                                        ], 64)) : L.value === "ERROR" ? (S(), G(ot, {
                                                            key: 1
                                                        }, [
                                                            ze("ERROR")
                                                        ], 64)) : (S(), G(ot, {
                                                            key: 2
                                                        }, [
                                                            ze("------")
                                                        ], 64))
                                                    ], 8, gi),
                                                    e.isMobile && ie.value && e.item.deletedAt == null ? (S(), G("div", {
                                                        key: 0,
                                                        class: "next-code",
                                                        "data-digits": W.value
                                                    }, [
                                                        R("span", null, N($.value[0]), 1),
                                                        m[16] || (m[16] = R("span", {
                                                            class: "code-divider is-next"
                                                        }, null, -1)),
                                                        R("span", null, N($.value[1]), 1)
                                                    ], 8, hi)) : ge("", !0)
                                                ]),
                                                e.item.deletedAt != null ? (S(), G("div", yi, [
                                                    v(qe, {
                                                        type: "success",
                                                        plain: "",
                                                        circle: "",
                                                        size: "small",
                                                        onClick: m[9] || (m[9] = st((O)=>a.$emit("command", "restore", e.item), [
                                                            "stop"
                                                        ])),
                                                        title: a.$t("vault.restore")
                                                    }, {
                                                        icon: h(()=>[
                                                                v(E, null, {
                                                                    default: h(()=>[
                                                                            v(n(Ct))
                                                                        ]),
                                                                    _: 1
                                                                })
                                                            ]),
                                                        _: 1
                                                    }, 8, [
                                                        "title"
                                                    ]),
                                                    v(qe, {
                                                        type: "danger",
                                                        plain: "",
                                                        circle: "",
                                                        size: "small",
                                                        onClick: m[10] || (m[10] = st((O)=>a.$emit("command", "delete", e.item), [
                                                            "stop"
                                                        ])),
                                                        title: a.$t("vault.hard_delete")
                                                    }, {
                                                        icon: h(()=>[
                                                                v(E, null, {
                                                                    default: h(()=>[
                                                                            v(n(ut))
                                                                        ]),
                                                                    _: 1
                                                                })
                                                            ]),
                                                        _: 1
                                                    }, 8, [
                                                        "title"
                                                    ])
                                                ])) : L.value !== "------" && L.value !== "ERROR" ? (S(), G("div", _i, [
                                                    e.item.type === "hotp" ? (S(), _e(qe, {
                                                        key: 0,
                                                        type: "primary",
                                                        plain: "",
                                                        circle: "",
                                                        size: e.isCompact ? "small" : "default",
                                                        loading: e.isIncrementing,
                                                        onClick: m[11] || (m[11] = st((O)=>a.$emit("increment", e.item), [
                                                            "stop"
                                                        ])),
                                                        title: a.$t("vault.increment")
                                                    }, {
                                                        icon: h(()=>[
                                                                v(E, null, {
                                                                    default: h(()=>[
                                                                            v(n(Ct))
                                                                        ]),
                                                                    _: 1
                                                                })
                                                            ]),
                                                        _: 1
                                                    }, 8, [
                                                        "size",
                                                        "loading",
                                                        "title"
                                                    ])) : (S(), _e(d, {
                                                        key: 1,
                                                        type: "circle",
                                                        percentage: j.value,
                                                        width: e.isCompact ? 24 : 30,
                                                        "stroke-width": e.isCompact ? 2 : 3,
                                                        color: oe.value
                                                    }, {
                                                        default: h(()=>[
                                                                R("span", wi, N(ee.value), 1)
                                                            ]),
                                                        _: 1
                                                    }, 8, [
                                                        "percentage",
                                                        "width",
                                                        "stroke-width",
                                                        "color"
                                                    ]))
                                                ])) : L.value === "ERROR" ? (S(), G("div", bi, [
                                                    v(Be, {
                                                        content: a.$t("vault.compute_error")
                                                    }, {
                                                        default: h(()=>[
                                                                v(E, {
                                                                    color: "#F56C6C",
                                                                    size: "18"
                                                                }, {
                                                                    default: h(()=>[
                                                                            v(n(Wn))
                                                                        ]),
                                                                    _: 1
                                                                })
                                                            ]),
                                                        _: 1
                                                    }, 8, [
                                                        "content"
                                                    ])
                                                ])) : (S(), G("div", ki, [
                                                    v(E, {
                                                        class: "is-loading"
                                                    }, {
                                                        default: h(()=>[
                                                                v(n(Et))
                                                            ]),
                                                        _: 1
                                                    })
                                                ]))
                                            ], 32),
                                            e.item.status === "conflict" || n(l).isItemInConflict(e.item.id) ? (S(), _e(ri, {
                                                key: 0,
                                                onResolve: m[13] || (m[13] = (O)=>a.$emit("resolve-conflict", e.item.id, O))
                                            })) : ge("", !0)
                                        ])
                                    ]),
                                _: 1
                            }, 8, [
                                "id",
                                "disabled"
                            ])
                        ]),
                    _: 1
                }, 8, [
                    "class"
                ]);
            };
        }
    };
    function Si(e, t, i, l = null) {
        const c = kn(), s = Gt(), { updateTrashMetadata: I, fetchTrash: P } = zn(), { t: g } = Sl.global, x = U([]), D = U(!1), k = U(!1), B = U(!1), X = U({
            id: "",
            service: "",
            account: "",
            category: ""
        }), L = U(!1), ie = U(null), ue = U(!1), re = U(""), z = async ()=>{
            if (x.value.length) try {
                await ln.confirm(g("vault.delete_batch_confirm", {
                    count: x.value.length
                }), g("common.delete"), {
                    type: "warning",
                    confirmButtonText: g("common.delete"),
                    cancelButtonText: g("common.cancel")
                }), D.value = !0;
                const d = Dt(), C = t?.value?.length > 0 && t.value[0]?.deletedAt != null || !d.appTrashMode;
                if (!s.isManualOffline && (!navigator.onLine || s.isOffline)) {
                    Fe.warning(g("security.offline_network_blocked")), D.value = !1;
                    return;
                }
                C ? (s.isManualOffline ? await ct.batchDelete(x.value) : await Promise.all(x.value.map((O)=>_t.hardDelete(O))), I(-x.value.length)) : (await _t.batchMoveToTrash(x.value), I(x.value.length)), await c.deleteItems(x.value), !s.isOffline && !C && await c.updateMetadata({
                    delta: -x.value.length
                }), Fe.success(g("vault.delete_batch_success", {
                    count: x.value.length
                })), x.value = [], c.markDirty(), e(), P();
            } catch (d) {
                d !== "cancel" && xt.error(d);
            } finally{
                D.value = !1;
            }
        }, W = (d)=>{
            const C = x.value.indexOf(d);
            C > -1 ? x.value.splice(C, 1) : x.value.push(d);
        }, Q = ()=>{
            t?.value && (x.value = t.value.map((d)=>d.id));
        }, ee = async (d, C)=>{
            const O = C || d?.currentCode;
            if (!O || O === "------") return Fe.warning(g("vault.not_generated_yet"));
            await Pt(O, g("common.copy_success"));
        }, j = (d)=>{
            X.value = {
                id: d.id,
                service: d.service,
                account: d.account,
                category: d.category || "",
                updatedAt: d.updatedAt
            }, k.value = !0;
        }, oe = async ()=>{
            B.value = !0;
            try {
                const { id: d, ...C } = X.value;
                (await ct.updateAccount(d, C)).success && (Fe.success(g("vault.update_success")), k.value = !1, c.markDirty(), e(), P());
            } catch  {} finally{
                B.value = !1;
            }
        };
        let ne = null;
        const me = async (d, C)=>{
            if (!d.some((H, te)=>H.id !== C[te]?.id)) return;
            const $e = Fe.success({
                message: g("vault.sort_updated"),
                duration: 1500,
                customClass: "message-success-blur"
            }), f = (l?.value || d).filter((H)=>!H.id.startsWith("tmp_"));
            let M = null;
            const V = d.findIndex((H, te)=>H.id !== C[te]?.id);
            if (V !== -1 && (C[V]?.id === d[V + 1]?.id ? M = d[V] : d[V]?.id === C[V + 1]?.id ? M = d.find((H)=>H.id === C[V].id) : M = d[V]), M) {
                const H = f.findIndex((xe)=>xe.id === M.id), te = H > 0 ? f[H - 1] : null, Ee = H < f.length - 1 ? f[H + 1] : null, he = te?.sortOrder ?? null, Te = Ee?.sortOrder ?? null;
                let be = null;
                if (he === null && Te === null) be = 1e3;
                else if (he === null) be = (Te ?? 0) + 1e3;
                else if (Te === null) be = Math.max(0, (he ?? 0) - 1e3);
                else {
                    const xe = Math.floor((he + Te) / 2);
                    xe > Te && xe < he && (be = xe);
                }
                if (be !== null) {
                    M.sortOrder = be;
                    try {
                        await ct.moveSortOrder(M.id, be), ne && clearTimeout(ne), ne = setTimeout(()=>{
                            c.markDirty(), e();
                        }, 1e3);
                    } catch  {
                        $e?.close(), t.value = C, ne && clearTimeout(ne), e();
                    }
                    return;
                }
            }
            const de = f.map((H)=>H.id);
            try {
                await ct.reorder(de), ne && clearTimeout(ne), ne = setTimeout(()=>{
                    c.markDirty(), e();
                }, 1e3);
            } catch  {
                $e?.close(), t.value = C, ne && clearTimeout(ne), e();
            }
        }, ce = async (d)=>{
            try {
                const C = Dt(), O = d.deletedAt != null || !C.appTrashMode;
                if (!s.isManualOffline && (!navigator.onLine || s.isOffline)) {
                    Fe.warning(g("security.offline_network_blocked"));
                    return;
                }
                const $e = g(O ? "vault.hard_delete" : "common.delete"), r = O ? g("vault.hard_delete_confirm", {
                    service: d.service
                }) : g("vault.delete_confirm", {
                    service: d.service
                });
                await ln.confirm(r, $e, {
                    type: "warning",
                    confirmButtonText: $e,
                    cancelButtonText: g("common.cancel")
                }), O ? (s.isManualOffline ? await ct.deleteAccount(d.id) : await _t.hardDelete(d.id), I(-1)) : (await _t.moveToTrash(d.id), I(1)), await c.deleteItems([
                    d.id
                ]);
                const f = d.deletedAt == null;
                !s.isOffline && f && await c.updateMetadata({
                    delta: -1
                }), Fe.success(g("vault.delete_success")), c.markDirty(), e();
            } catch (C) {
                C !== "cancel" && xt.error(C);
            }
        }, $ = U(!1), p = async (d)=>{
            if (!$.value) {
                $.value = !0;
                try {
                    const C = await ct.incrementCounter(d.id, d.updatedAt);
                    C.success && (c.markDirty(), e(), C.pending ? Fe.info(g("vault.increment_offline_queued")) : Fe.success(g("vault.increment_success")));
                } catch (C) {
                    xt.error(C), Fe.error(g("vault.increment_failed"));
                } finally{
                    $.value = !1;
                }
            }
        }, a = async (d)=>{
            if (!d || !d.startsWith("nodeauth:")) return d;
            const { useAppLockStore: C } = await cn(async ()=>{
                const { useAppLockStore: f } = await import("./index-DZYvMiSj.js").then(async (m)=>{
                    await m.__tla;
                    return m;
                }).then((M)=>M.D);
                return {
                    useAppLockStore: f
                };
            }, __vite__mapDeps([0,1,2,3,4,5,6,7,8])), { unmaskSecretFront: O } = await cn(async ()=>{
                const { unmaskSecretFront: f } = await import("./index-DZYvMiSj.js").then(async (m)=>{
                    await m.__tla;
                    return m;
                }).then((M)=>M.C);
                return {
                    unmaskSecretFront: f
                };
            }, __vite__mapDeps([0,1,2,3,4,5,6,7,8])), r = await C().getMaskingKey();
            return await O(d, r);
        }, m = async (d)=>{
            const C = await a(d.secret);
            ie.value = {
                ...d,
                secret: C
            }, ue.value = !1, L.value = !0;
            const O = an({
                service: d.service,
                account: d.account,
                secret: C,
                type: d.type,
                algorithm: d.algorithm,
                digits: d.digits,
                period: d.period,
                counter: d.counter
            });
            re.value = await Tl.toDataURL(O, {
                width: 240,
                margin: 1
            });
        }, E = async ()=>{
            ie.value && await Pt(ie.value.secret);
        }, fe = async ()=>{
            if (ie.value) {
                const d = ie.value, C = an({
                    service: d.service,
                    account: d.account,
                    secret: d.secret,
                    type: d.type,
                    algorithm: d.algorithm,
                    digits: d.digits,
                    period: d.period,
                    counter: d.counter
                });
                await Pt(C);
            }
        }, De = (d)=>(d || "").match(/.{1,4}/g)?.join(" ") || d, Be = (d, C)=>{
            if (!d || d === "------" || typeof d != "string") return d;
            const O = d.replace(/\s/g, "");
            return C === 6 && O.length === 6 ? `${O.slice(0, 3)} ${O.slice(3)}` : C === 8 && O.length === 8 ? `${O.slice(0, 4)} ${O.slice(4)}` : O;
        }, Ie = (d, C)=>{
            if (!d || d === "------" || typeof d != "string") return [
                d,
                ""
            ];
            const O = d.replace(/\s/g, "");
            return C === 6 && O.length === 6 ? [
                O.slice(0, 3),
                O.slice(3)
            ] : C === 8 && O.length === 8 ? [
                O.slice(0, 4),
                O.slice(4)
            ] : [
                O,
                ""
            ];
        }, Je = (d, C)=>{
            d === "edit" ? j(C) : d === "qr" ? m(C) : d === "delete" ? ce(C) : d === "restore" && Ne(C);
        }, Ne = async (d)=>{
            if (!navigator.onLine || s.isOffline) {
                Fe.warning(g("security.offline_network_restore_blocked"));
                return;
            }
            try {
                await _t.restoreItem(d.id), I(-1), Fe.success(g("vault.restore_success")), s.isOffline || await c.updateMetadata({
                    delta: 1
                }), await c.deleteItems([
                    d.id
                ]), c.markDirty(), e();
            } catch (C) {
                xt.error(C), Fe.error("恢复失败");
            }
        }, qe = async (d, C)=>{
            await Sn().resolveConflict(d, C), C === "force" ? (Fe.success(g("vault.conflict_force_applied")), ct.syncOfflineActions().then(()=>e())) : (Fe.info(g("vault.conflict_discarded")), e());
        };
        return {
            selectedIds: x,
            isBulkDeleting: D,
            showEditDialog: k,
            isEditing: B,
            editVaultData: X,
            showQrDialog: L,
            currentQrItem: ie,
            showSecret: ue,
            qrCodeUrl: re,
            categoryOptions: ae(()=>(i?.value || []).filter((d)=>d.category).map((d)=>d.category)),
            toggleSelection: W,
            selectAllLoaded: Q,
            handleBulkDelete: z,
            copyCode: ee,
            openEditDialog: j,
            submitEditVault: oe,
            deleteVault: ce,
            openQrDialog: m,
            copySecret: E,
            copyOtpUrl: fe,
            formatSecret: De,
            formatCode: Be,
            getCodeGroups: Ie,
            handleCommand: Je,
            performReorder: me,
            handleResolveConflict: qe,
            restoreVault: Ne,
            handleIncrement: p,
            isIncrementing: $
        };
    }
    let zi, $i, Ti, Ci, Mi, xi, Ri, Ii, Ei, Ai, Oi, Di, Li, Vi, Fi, Bi, Hi, Pi, Wi, Ui, Xi, Yi, Ni, qi, Ki, Qi, ji, Gi, Zi, Ji, eo, to, no, lo, io, oo, so, ao, ro, co;
    zi = {
        class: "vault-list-wrapper min-h-400"
    };
    $i = {
        key: 0,
        class: "offline-sync-banner px-16 py-8 mb-10"
    };
    Ti = {
        class: "text-12"
    };
    Ci = {
        class: "vault-content"
    };
    Mi = {
        key: 0,
        class: "vault-list-toolbar mb-10 flex gap-15 flex-items-center flex-between px-16 py-12"
    };
    xi = {
        class: "batch-actions flex flex-items-center gap-10 flex-1"
    };
    Ri = {
        class: "batch-text"
    };
    Ii = {
        key: 1,
        class: "vault-list-toolbar mb-10 flex gap-15 flex-items-center flex-between flex-wrap"
    };
    Ei = {
        class: "flex flex-items-center gap-10 flex-1"
    };
    Ai = {
        class: "batch-actions flex flex-items-center gap-10"
    };
    Oi = {
        class: "batch-text"
    };
    Di = {
        key: 2,
        class: "category-filter-container"
    };
    Li = {
        class: "category-chips"
    };
    Vi = {
        class: "tag-count"
    };
    Fi = {
        key: 0,
        class: "tag-loading-track"
    };
    Bi = [
        "onClick"
    ];
    Hi = {
        class: "tag-count"
    };
    Pi = {
        key: 0,
        class: "tag-loading-track"
    };
    Wi = {
        class: "tag-count"
    };
    Ui = {
        key: 0,
        class: "tag-loading-track"
    };
    Xi = {
        key: 0,
        class: "flex-column flex-center min-h-400 text-secondary"
    };
    Yi = {
        class: "text-16 ls-1"
    };
    Ni = {
        key: 1,
        class: "empty-state"
    };
    qi = [
        "infinite-scroll-disabled"
    ];
    Ki = {
        key: 0,
        class: "text-center p-20 text-secondary"
    };
    Qi = {
        key: 1,
        class: "text-center p-20 text-secondary text-12"
    };
    ji = {
        class: "dialog-footer"
    };
    Gi = {
        key: 0,
        class: "qr-container"
    };
    Zi = {
        class: "qr-info"
    };
    Ji = {
        class: "qr-service"
    };
    eo = {
        class: "qr-account"
    };
    to = {
        class: "qr-image-wrapper"
    };
    no = [
        "src"
    ];
    lo = {
        class: "qr-tip"
    };
    io = {
        class: "secret-section"
    };
    oo = {
        class: "secret-box"
    };
    so = {
        class: "secret-text"
    };
    ao = {
        class: "secret-actions"
    };
    ro = {
        class: "uri-link-wrapper"
    };
    co = {
        __name: "vaultList",
        emits: [
            "switch-tab"
        ],
        setup (e, { expose: t, emit: i }) {
            const l = Sn(), { t: c } = zl(), s = Dt(), I = Gt(), P = kn(), g = U(null), { serverVault: x, vault: D, searchQuery: k, selectedCategory: B, isLoading: X, isFetching: L, isFetchingNextPage: ie, hasNextPage: ue, absoluteTotalItems: re, categoryStats: z, localCategoryStats: W, fetchVault: Q, handleLoadMore: ee, isLoadMoreDisabled: j } = $l(g), { trashCount: oe, isFetchingTrash: ne, fetchTrash: me, filteredTrash: ce } = zn(), $ = ae({
                get () {
                    return B.value === "____TRASH____" ? ce(k.value) : D.value;
                },
                set (w) {
                    B.value !== "____TRASH____" && (D.value = w);
                }
            }), p = ()=>{
                Q(), s.isOffline || me();
            };
            we(()=>s.searchQuery, (w)=>{
                s.isMobile && (k.value = w);
            }), we([
                L,
                k
            ], ([w, y])=>{
                s.isLoadingSearching = w && !!y;
            });
            const { selectedIds: a, isBulkDeleting: m, toggleSelection: E, selectAllLoaded: fe, handleBulkDelete: De, showEditDialog: Be, editVaultData: Ie, isEditing: Je, handleCommand: Ne, submitEditVault: qe, showQrDialog: d, currentQrItem: C, qrCodeUrl: O, showSecret: $e, formatSecret: r, copyCode: f, copySecret: M, copyOtpUrl: V, categoryOptions: de, performReorder: H, handleResolveConflict: te, handleIncrement: Ee, isIncrementing: he } = Si(p, $, z, x), Te = [
                {
                    value: "card",
                    icon: qn
                },
                {
                    value: "compact",
                    icon: Kn
                }
            ], be = U(!1), xe = {
                xs: 24,
                sm: 12,
                md: 8,
                lg: 6
            }, et = U(typeof window < "u" ? window.innerWidth : 1200), zt = ()=>{
                et.value = window.innerWidth;
            };
            rt(()=>window.addEventListener("resize", zt)), kt(()=>window.removeEventListener("resize", zt));
            const mt = ae(()=>s.isMobile ? 1 : et.value >= 1200 ? 4 : et.value >= 992 ? 3 : et.value >= 768 ? 2 : 1), Ft = ae(()=>{
                const w = [], y = $.value, K = mt.value;
                for(let T = 0; T < y.length; T += K)w.push({
                    id: `row_${T}`,
                    items: y.slice(T, T + K)
                });
                return w;
            }), lt = U(null), He = ae(()=>$.value.find((w)=>w.id === lt.value)), vt = U({
                x: 0,
                y: 0
            }), $t = U({
                w: 0
            }), it = U(null);
            let ht = {
                x: 0,
                y: 0
            }, tt = !1, Pe = null, o = 0, u = 1, _ = {
                x: 0,
                y: 0
            };
            const Y = ae(()=>({
                    left: `${vt.value.x}px`,
                    top: `${vt.value.y}px`,
                    width: `${$t.value.w}px`
                }));
            let F = [];
            const q = (w, y)=>{
                const K = document.querySelector(".vault-scroller");
                if (!K) return;
                const T = K.getBoundingClientRect();
                if (w >= T.left && w <= T.right && y >= T.top && y <= T.bottom) {
                    const le = y - T.top, Re = w - T.left, pe = document.querySelector(".vue-recycle-scroller__item-view"), Ce = pe ? pe.offsetHeight : s.appVaultViewMode === "compact" ? 95 : 135, Z = Math.floor(le / Ce), je = Math.floor(Re / (T.width / mt.value));
                    let Se = Z * mt.value + je;
                    const Ve = $.value.length - 1;
                    Se > Ve && (Se = Ve), Se < 0 && (Se = 0);
                    const pt = $.value[Se]?.id;
                    if (pt && pt !== lt.value) {
                        const se = [
                            ...$.value
                        ], ke = se.findIndex((A)=>A.id === lt.value);
                        if (ke !== -1 && ke !== Se) {
                            const [A] = se.splice(ke, 1);
                            se.splice(Se, 0, A), $.value = se;
                        }
                    }
                }
            }, J = (w, y, K, T)=>{
                lt.value = K, tt = !0, _ = {
                    x: w,
                    y
                }, F = [
                    ...$.value
                ];
                const le = T.getBoundingClientRect();
                if (ht = {
                    x: w - le.left,
                    y: y - le.top
                }, $t.value.w = le.width, vt.value = {
                    x: le.left,
                    y: le.top
                }, s.isMobile && "vibrate" in navigator) try {
                    navigator.vibrate([
                        20
                    ]);
                } catch  {}
                s.isMobile && (document.body.style.overflow = "hidden", document.documentElement.style.overflow = "hidden", document.body.style.touchAction = "none"), window.getSelection()?.removeAllRanges(), document.body.style.userSelect = "none", document.body.style.webkitUserSelect = "none";
            }, ve = (w, y)=>{
                if (!tt) return;
                _ = {
                    x: w,
                    y
                }, vt.value = {
                    x: w - ht.x,
                    y: y - ht.y
                };
                const K = 80;
                if (y < K) {
                    const T = Math.max(-25, Math.floor((y - K) / 2.5));
                    Ue(T);
                } else if (y > window.innerHeight - K) {
                    const T = Math.min(25, Math.floor((y - (window.innerHeight - K)) / 2.5));
                    Ue(T);
                } else ye();
                q(w, y);
            }, We = ()=>{
                tt && (ye(), H([
                    ...$.value
                ], F), tt = !1, lt.value = null, document.body.style.overflow = "", document.documentElement.style.overflow = "", document.body.style.touchAction = "", document.body.style.userSelect = "", document.body.style.webkitUserSelect = "");
            }, Ae = (w, y)=>{
                if (w.target.closest(".el-checkbox, .el-dropdown, .el-button, .more-icon")) return;
                const K = w.clientX, T = w.clientY, le = w.currentTarget;
                let Re = !1;
                const pe = ()=>{
                    Re && We(), window.removeEventListener("mousemove", Ce), window.removeEventListener("mouseup", pe);
                }, Ce = (Z)=>{
                    if (!Re && Math.sqrt(Math.pow(Z.clientX - K, 2) + Math.pow(Z.clientY - T, 2)) > 5) {
                        if (I.isOffline) {
                            Fe.warning(c("vault.reorder_offline_disabled")), pe();
                            return;
                        }
                        Re = !0, J(K, T, y, le);
                    }
                    Re && ve(Z.clientX, Z.clientY);
                };
                window.addEventListener("mousemove", Ce), window.addEventListener("mouseup", pe);
            }, Le = (w, y)=>{
                if (w.target.closest(".el-checkbox, .el-dropdown, .el-button, .more-icon, .code-display-area")) return;
                const K = w.touches[0], T = K.clientX, le = K.clientY, Re = w.currentTarget;
                it.value = y;
                let pe = !1;
                const Ce = setTimeout(()=>{
                    if (I.isOffline) {
                        Fe.warning(c("vault.reorder_offline_disabled")), it.value = null;
                        return;
                    }
                    pe = !0, it.value = null, J(T, le, y, Re);
                }, 250), Z = (Se)=>{
                    if (pe) {
                        Se.cancelable && Se.preventDefault();
                        const Ve = Se.touches[0];
                        ve(Ve.clientX, Ve.clientY);
                    } else {
                        const Ve = Se.touches[0];
                        (Math.abs(Ve.clientX - T) > 10 || Math.abs(Ve.clientY - le) > 10) && (clearTimeout(Ce), it.value = null);
                    }
                }, je = ()=>{
                    clearTimeout(Ce), it.value = null, pe && We(), window.removeEventListener("touchmove", Z), window.removeEventListener("touchend", je), window.removeEventListener("touchcancel", je);
                };
                window.addEventListener("touchmove", Z, {
                    passive: !1
                }), window.addEventListener("touchend", je), window.addEventListener("touchcancel", je);
            }, Ue = (w)=>{
                if (o = w, Pe) return;
                u = 1;
                const y = ()=>{
                    if (!tt) return ye();
                    const K = o * u;
                    let T = document.getElementById("app") || document.documentElement;
                    if (!s.isMobile && T.scrollHeight <= T.clientHeight) {
                        const pe = document.querySelector(".main-content");
                        pe && (T = pe);
                    }
                    const le = T.scrollTop;
                    T.scrollTop += K;
                    const Re = T.scrollTop;
                    Math.abs(Re - le) < .1 && K !== 0 && T !== document.documentElement && (document.documentElement.scrollTop += K), u < 4 && (u += .03), q(_.x, _.y), Pe = requestAnimationFrame(y);
                };
                Pe = requestAnimationFrame(y);
            }, ye = ()=>{
                Pe && (cancelAnimationFrame(Pe), Pe = null, u = 1, o = 0);
            }, Oe = async ()=>{
                try {
                    if (P.isDirty) {
                        Q();
                        return;
                    }
                    const w = await P.getData();
                    w && w.categoryStats && (W.value = w.categoryStats);
                } finally{
                    Xe.value = !1;
                }
            }, Xe = U(!0);
            return rt(()=>{
                Oe();
            }), kt(()=>{
                ye();
            }), t({
                fetchVault: Q
            }), (w, y)=>{
                const K = yn, T = Qt, le = Xn, Re = Qn, pe = Nn, Ce = jn, Z = Gn, je = el, Se = Jn, Ve = nl, pt = ll, se = tl, ke = Zn;
                return S(), G("div", zi, [
                    v(_l, {
                        name: "el-zoom-in-top"
                    }, {
                        default: h(()=>[
                                n(l).hasPendingChanges ? (S(), G("div", $i, [
                                    v(K, {
                                        class: "mr-8"
                                    }, {
                                        default: h(()=>[
                                                v(n(_n))
                                            ]),
                                        _: 1
                                    }),
                                    R("span", Ti, N(w.$t("vault.offline_pending_sync", {
                                        count: n(l).syncQueue.length
                                    })), 1)
                                ])) : ge("", !0)
                            ]),
                        _: 1
                    }),
                    R("div", Ci, [
                        v(Ce, {
                            offset: n(s).isMobile ? 58 : 60,
                            disabled: n(s).isMobile && n(a).length === 0,
                            onChange: y[6] || (y[6] = (A)=>be.value = A)
                        }, {
                            default: h(()=>[
                                    R("div", {
                                        class: at([
                                            "affix-container",
                                            {
                                                "is-affixed": be.value
                                            }
                                        ])
                                    }, [
                                        n(s).isMobile && n(a).length > 0 ? (S(), G("div", Mi, [
                                            R("div", xi, [
                                                R("span", Ri, N(w.$t("search.selected_items", {
                                                    count: n(a).length
                                                })), 1),
                                                y[16] || (y[16] = R("div", {
                                                    class: "flex-1"
                                                }, null, -1)),
                                                v(T, {
                                                    size: "small",
                                                    onClick: n(fe),
                                                    plain: "",
                                                    disabled: n(m)
                                                }, {
                                                    default: h(()=>[
                                                            ze(N(w.$t("search.select_all_loaded")), 1)
                                                        ]),
                                                    _: 1
                                                }, 8, [
                                                    "onClick",
                                                    "disabled"
                                                ]),
                                                v(T, {
                                                    type: "danger",
                                                    plain: "",
                                                    size: "small",
                                                    onClick: n(De),
                                                    loading: n(m)
                                                }, {
                                                    default: h(()=>[
                                                            v(K, null, {
                                                                default: h(()=>[
                                                                        v(n(ut))
                                                                    ]),
                                                                _: 1
                                                            })
                                                        ]),
                                                    _: 1
                                                }, 8, [
                                                    "onClick",
                                                    "loading"
                                                ]),
                                                v(T, {
                                                    size: "small",
                                                    onClick: y[0] || (y[0] = (A)=>a.value = []),
                                                    plain: "",
                                                    disabled: n(m)
                                                }, {
                                                    default: h(()=>[
                                                            ze(N(w.$t("common.cancel")), 1)
                                                        ]),
                                                    _: 1
                                                }, 8, [
                                                    "disabled"
                                                ])
                                            ])
                                        ])) : ge("", !0),
                                        n(s).isMobile ? ge("", !0) : (S(), G("div", Ii, [
                                            R("div", Ei, [
                                                v(le, {
                                                    modelValue: n(k),
                                                    "onUpdate:modelValue": y[1] || (y[1] = (A)=>Bt(k) ? k.value = A : null),
                                                    placeholder: w.$t("search.placeholder"),
                                                    clearable: "",
                                                    class: "max-w-400"
                                                }, {
                                                    prefix: h(()=>[
                                                            n(L) && n(k) ? (S(), _e(K, {
                                                                key: 0,
                                                                class: "is-loading"
                                                            }, {
                                                                default: h(()=>[
                                                                        v(n(Et))
                                                                    ]),
                                                                _: 1
                                                            })) : (S(), _e(K, {
                                                                key: 1
                                                            }, {
                                                                default: h(()=>[
                                                                        v(n(Yn))
                                                                    ]),
                                                                _: 1
                                                            }))
                                                        ]),
                                                    _: 1
                                                }, 8, [
                                                    "modelValue",
                                                    "placeholder"
                                                ])
                                            ]),
                                            R("div", Ai, [
                                                n(a).length > 0 ? (S(), G(ot, {
                                                    key: 0
                                                }, [
                                                    R("span", Oi, N(w.$t("search.selected_items", {
                                                        count: n(a).length
                                                    })), 1),
                                                    v(T, {
                                                        type: "danger",
                                                        plain: "",
                                                        onClick: n(De),
                                                        loading: n(m)
                                                    }, {
                                                        default: h(()=>[
                                                                v(K, null, {
                                                                    default: h(()=>[
                                                                            v(n(ut))
                                                                        ]),
                                                                    _: 1
                                                                }),
                                                                ze(" " + N(w.$t("common.delete")), 1)
                                                            ]),
                                                        _: 1
                                                    }, 8, [
                                                        "onClick",
                                                        "loading"
                                                    ]),
                                                    v(T, {
                                                        onClick: y[2] || (y[2] = (A)=>a.value = []),
                                                        plain: "",
                                                        disabled: n(m)
                                                    }, {
                                                        default: h(()=>[
                                                                ze(N(w.$t("common.cancel")), 1)
                                                            ]),
                                                        _: 1
                                                    }, 8, [
                                                        "disabled"
                                                    ])
                                                ], 64)) : (S(), _e(T, {
                                                    key: 1,
                                                    onClick: n(fe),
                                                    plain: "",
                                                    disabled: n(m)
                                                }, {
                                                    default: h(()=>[
                                                            ze(N(w.$t("search.select_all_loaded")), 1)
                                                        ]),
                                                    _: 1
                                                }, 8, [
                                                    "onClick",
                                                    "disabled"
                                                ])),
                                                v(pe, {
                                                    modelValue: n(s).appVaultViewMode,
                                                    "onUpdate:modelValue": y[3] || (y[3] = (A)=>n(s).appVaultViewMode = A),
                                                    class: "ml-10",
                                                    onChange: n(s).setVaultViewMode
                                                }, {
                                                    default: h(()=>[
                                                            (S(), G(ot, null, At(Te, (A)=>v(Re, {
                                                                    key: A.value,
                                                                    label: A.value
                                                                }, {
                                                                    default: h(()=>[
                                                                            v(K, {
                                                                                size: "16"
                                                                            }, {
                                                                                default: h(()=>[
                                                                                        (S(), _e(Lt(A.icon)))
                                                                                    ]),
                                                                                _: 2
                                                                            }, 1024)
                                                                        ]),
                                                                    _: 2
                                                                }, 1032, [
                                                                    "label"
                                                                ])), 64))
                                                        ]),
                                                    _: 1
                                                }, 8, [
                                                    "modelValue",
                                                    "onChange"
                                                ])
                                            ])
                                        ])),
                                        !Xe.value && (!n(s).isMobile || !n(s).isSearchVisible) ? (S(), G("div", Di, [
                                            R("div", Li, [
                                                R("div", {
                                                    class: at([
                                                        "category-tag",
                                                        {
                                                            "is-active": n(B) === "",
                                                            "is-loading": n(L) && n(B) === "" && !n(ie)
                                                        }
                                                    ]),
                                                    onClick: y[4] || (y[4] = (A)=>B.value = "")
                                                }, [
                                                    ze(N(w.$t("common.all")) + " ", 1),
                                                    R("span", Vi, "(" + N(n(re)) + ")", 1),
                                                    n(L) && n(B) === "" && !n(ie) ? (S(), G("div", Fi, [
                                                        ...y[17] || (y[17] = [
                                                            R("div", {
                                                                class: "tag-loading-bar"
                                                            }, null, -1)
                                                        ])
                                                    ])) : ge("", !0)
                                                ], 2),
                                                (S(!0), G(ot, null, At(n(z), (A)=>(S(), G("div", {
                                                        key: A.id,
                                                        class: at([
                                                            "category-tag",
                                                            {
                                                                "is-active": n(B) === A.id,
                                                                "is-loading": n(L) && n(B) === A.id && !n(ie)
                                                            }
                                                        ]),
                                                        onClick: (Ke)=>B.value = A.id
                                                    }, [
                                                        ze(N(A.category || w.$t("common.uncategorized")) + " ", 1),
                                                        R("span", Hi, "(" + N(A.count) + ")", 1),
                                                        n(L) && n(B) === A.id && !n(ie) ? (S(), G("div", Pi, [
                                                            ...y[18] || (y[18] = [
                                                                R("div", {
                                                                    class: "tag-loading-bar"
                                                                }, null, -1)
                                                            ])
                                                        ])) : ge("", !0)
                                                    ], 10, Bi))), 128)),
                                                n(s).appTrashMode && (n(oe) > 0 || n(B) === "____TRASH____") ? (S(), G("div", {
                                                    key: 0,
                                                    class: at([
                                                        "category-tag trash-tag",
                                                        {
                                                            "is-active": n(B) === "____TRASH____",
                                                            "is-loading": n(L) && n(B) === "____TRASH____" && !n(ie)
                                                        }
                                                    ]),
                                                    onClick: y[5] || (y[5] = (A)=>B.value = "____TRASH____")
                                                }, [
                                                    v(K, {
                                                        class: "mr-4"
                                                    }, {
                                                        default: h(()=>[
                                                                v(n(ut))
                                                            ]),
                                                        _: 1
                                                    }),
                                                    ze(" " + N(w.$t("vault.trash")) + " ", 1),
                                                    R("span", Wi, "(" + N(n(oe)) + ")", 1),
                                                    n(ne) && n(B) === "____TRASH____" ? (S(), G("div", Ui, [
                                                        ...y[19] || (y[19] = [
                                                            R("div", {
                                                                class: "tag-loading-bar bg-danger"
                                                            }, null, -1)
                                                        ])
                                                    ])) : ge("", !0)
                                                ], 2)) : ge("", !0)
                                            ])
                                        ])) : ge("", !0)
                                    ], 2)
                                ]),
                            _: 1
                        }, 8, [
                            "offset",
                            "disabled"
                        ]),
                        Xe.value || (n(X) || n(ne) && n(B) === "____TRASH____") && $.value.length === 0 ? (S(), G("div", Xi, [
                            v(K, {
                                class: "is-loading mb-20 text-primary",
                                size: 48
                            }, {
                                default: h(()=>[
                                        v(n(Et))
                                    ]),
                                _: 1
                            }),
                            R("p", Yi, N(w.$t("common.loading_data")), 1)
                        ])) : !(n(X) || n(ne) && n(B) === "____TRASH____") && !n(L) && $.value.length === 0 && !n(k) ? (S(), G("div", Ni, [
                            n(B) === "____TRASH____" ? (S(), _e(Z, {
                                key: 0,
                                description: w.$t("security.trash_already_empty")
                            }, null, 8, [
                                "description"
                            ])) : (S(), _e(Z, {
                                key: 1,
                                description: w.$t("vault.empty_vault")
                            }, {
                                default: h(()=>[
                                        v(T, {
                                            type: "primary",
                                            onClick: y[7] || (y[7] = (A)=>w.$emit("switch-tab", "add-vault"))
                                        }, {
                                            default: h(()=>[
                                                    ze(N(w.$t("vault.go_add_vault")), 1)
                                                ]),
                                            _: 1
                                        })
                                    ]),
                                _: 1
                            }, 8, [
                                "description"
                            ]))
                        ])) : jt((S(), G("div", {
                            key: 2,
                            class: "list-container min-h-200",
                            "infinite-scroll-disabled": n(j),
                            "infinite-scroll-distance": 300
                        }, [
                            v(n(Ql), {
                                class: "vault-scroller",
                                items: Ft.value,
                                "min-item-size": 80,
                                "key-field": "id"
                            }, {
                                default: h(({ item: A, index: Ke, active: nt })=>[
                                        v(n(Gl), {
                                            item: A,
                                            active: nt,
                                            "size-dependencies": [
                                                A.items
                                            ],
                                            "data-index": Ke
                                        }, {
                                            default: h(()=>[
                                                    v(Se, {
                                                        gutter: 20
                                                    }, {
                                                        default: h(()=>[
                                                                (S(!0), G(ot, null, At(A.items, (Ge, Me)=>(S(), _e(je, Ot({
                                                                        key: Me
                                                                    }, {
                                                                        ref_for: !0
                                                                    }, xe, {
                                                                        class: [
                                                                            n(s).appVaultViewMode === "compact" ? "mb-15" : "mb-20"
                                                                        ],
                                                                        "data-id": Ge.id
                                                                    }), {
                                                                        default: h(()=>[
                                                                                v(hn, {
                                                                                    item: Ge,
                                                                                    "is-selected": n(a).includes(Ge.id),
                                                                                    "is-dragging": lt.value === Ge.id,
                                                                                    "is-pressing": it.value === Ge.id,
                                                                                    "is-compact": n(s).appVaultViewMode === "compact",
                                                                                    "is-pending": n(l).isItemPending(Ge.id) || Ge.pending,
                                                                                    "is-mobile": n(s).isMobile,
                                                                                    "is-incrementing": n(he),
                                                                                    onToggleSelection: n(E),
                                                                                    onCommand: n(Ne),
                                                                                    onIncrement: n(Ee),
                                                                                    onCopyCode: n(f),
                                                                                    onResolveConflict: n(te),
                                                                                    onMousedown: (Ze)=>Ae(Ze, Ge.id),
                                                                                    onTouchstart: (Ze)=>Le(Ze, Ge.id)
                                                                                }, null, 8, [
                                                                                    "item",
                                                                                    "is-selected",
                                                                                    "is-dragging",
                                                                                    "is-pressing",
                                                                                    "is-compact",
                                                                                    "is-pending",
                                                                                    "is-mobile",
                                                                                    "is-incrementing",
                                                                                    "onToggleSelection",
                                                                                    "onCommand",
                                                                                    "onIncrement",
                                                                                    "onCopyCode",
                                                                                    "onResolveConflict",
                                                                                    "onMousedown",
                                                                                    "onTouchstart"
                                                                                ])
                                                                            ]),
                                                                        _: 2
                                                                    }, 1040, [
                                                                        "class",
                                                                        "data-id"
                                                                    ]))), 128))
                                                            ]),
                                                        _: 2
                                                    }, 1024)
                                                ]),
                                            _: 2
                                        }, 1032, [
                                            "item",
                                            "active",
                                            "size-dependencies",
                                            "data-index"
                                        ])
                                    ]),
                                _: 1
                            }, 8, [
                                "items"
                            ]),
                            (S(), _e(wl, {
                                to: "body"
                            }, [
                                lt.value && He.value ? (S(), G("div", {
                                    key: 0,
                                    class: "drag-floating-card",
                                    style: ft(Y.value)
                                }, [
                                    v(hn, {
                                        style: {
                                            "pointer-events": "none"
                                        },
                                        item: He.value,
                                        "is-compact": n(s).appVaultViewMode === "compact",
                                        "is-dragging": !1,
                                        "is-incrementing": n(he)
                                    }, null, 8, [
                                        "item",
                                        "is-compact",
                                        "is-incrementing"
                                    ])
                                ], 4)) : ge("", !0)
                            ])),
                            n(ie) ? (S(), G("div", Ki, [
                                v(K, {
                                    class: "is-loading"
                                }, {
                                    default: h(()=>[
                                            v(n(Et))
                                        ]),
                                    _: 1
                                }),
                                ze(" " + N(w.$t("vault.loading_more")), 1)
                            ])) : ge("", !0),
                            !n(ue) && $.value.length > 0 ? (S(), G("div", Qi, N(w.$t("vault.no_more_accounts")), 1)) : ge("", !0),
                            !(n(X) || n(ne) && n(B) === "____TRASH____") && $.value.length === 0 && n(k) ? (S(), _e(Z, {
                                key: 2,
                                description: w.$t("search.no_matching_accounts")
                            }, null, 8, [
                                "description"
                            ])) : ge("", !0)
                        ], 8, qi)), [
                            [
                                ke,
                                n(ee)
                            ]
                        ])
                    ]),
                    v(rn, {
                        modelValue: n(Be),
                        "onUpdate:modelValue": y[12] || (y[12] = (A)=>Bt(Be) ? Be.value = A : null),
                        title: w.$t("vault.edit_account"),
                        width: "400px"
                    }, {
                        footer: h(()=>[
                                R("span", ji, [
                                    v(T, {
                                        onClick: y[11] || (y[11] = (A)=>Be.value = !1)
                                    }, {
                                        default: h(()=>[
                                                ze(N(w.$t("common.cancel")), 1)
                                            ]),
                                        _: 1
                                    }),
                                    v(T, {
                                        type: "primary",
                                        loading: n(Je),
                                        onClick: n(qe)
                                    }, {
                                        default: h(()=>[
                                                ze(N(w.$t("common.save")), 1)
                                            ]),
                                        _: 1
                                    }, 8, [
                                        "loading",
                                        "onClick"
                                    ])
                                ])
                            ]),
                        default: h(()=>[
                                v(se, {
                                    model: n(Ie),
                                    "label-position": "top"
                                }, {
                                    default: h(()=>[
                                            v(Ve, {
                                                label: w.$t("vault.service_name")
                                            }, {
                                                default: h(()=>[
                                                        v(le, {
                                                            modelValue: n(Ie).service,
                                                            "onUpdate:modelValue": y[8] || (y[8] = (A)=>n(Ie).service = A)
                                                        }, null, 8, [
                                                            "modelValue"
                                                        ])
                                                    ]),
                                                _: 1
                                            }, 8, [
                                                "label"
                                            ]),
                                            v(Ve, {
                                                label: w.$t("vault.account_identifier")
                                            }, {
                                                default: h(()=>[
                                                        v(le, {
                                                            modelValue: n(Ie).account,
                                                            "onUpdate:modelValue": y[9] || (y[9] = (A)=>n(Ie).account = A)
                                                        }, null, 8, [
                                                            "modelValue"
                                                        ])
                                                    ]),
                                                _: 1
                                            }, 8, [
                                                "label"
                                            ]),
                                            v(Ve, {
                                                label: w.$t("vault.category_optional")
                                            }, {
                                                default: h(()=>[
                                                        v(pt, {
                                                            modelValue: n(Ie).category,
                                                            "onUpdate:modelValue": y[10] || (y[10] = (A)=>n(Ie).category = A),
                                                            "fetch-suggestions": (A, Ke)=>Ke(n(de).filter((nt)=>nt.toLowerCase().includes(A.toLowerCase())).map((nt)=>({
                                                                        value: nt
                                                                    }))),
                                                            placeholder: w.$t("vault.category_optional"),
                                                            style: {
                                                                width: "100%"
                                                            },
                                                            clearable: "",
                                                            teleported: !1
                                                        }, null, 8, [
                                                            "modelValue",
                                                            "fetch-suggestions",
                                                            "placeholder"
                                                        ])
                                                    ]),
                                                _: 1
                                            }, 8, [
                                                "label"
                                            ])
                                        ]),
                                    _: 1
                                }, 8, [
                                    "model"
                                ])
                            ]),
                        _: 1
                    }, 8, [
                        "modelValue",
                        "title"
                    ]),
                    v(rn, {
                        modelValue: n(d),
                        "onUpdate:modelValue": y[14] || (y[14] = (A)=>Bt(d) ? d.value = A : null),
                        title: w.$t("vault.export_account"),
                        width: "350px",
                        onClosed: y[15] || (y[15] = (A)=>$e.value = !1)
                    }, {
                        default: h(()=>[
                                n(C) ? (S(), G("div", Gi, [
                                    R("div", Zi, [
                                        R("h3", Ji, N(n(C).service), 1),
                                        R("p", eo, N(n(C).account), 1)
                                    ]),
                                    R("div", to, [
                                        R("img", {
                                            src: n(O),
                                            class: "qr-code-img"
                                        }, null, 8, no)
                                    ]),
                                    R("p", lo, N(w.$t("vault.export_qr_tip")), 1),
                                    R("div", io, [
                                        R("div", oo, [
                                            R("div", so, N(n($e) ? n(r)(n(C).secret) : "•••• •••• •••• ••••"), 1),
                                            R("div", ao, [
                                                v(K, {
                                                    class: "action-icon",
                                                    onClick: y[13] || (y[13] = (A)=>$e.value = !n($e))
                                                }, {
                                                    default: h(()=>[
                                                            n($e) ? (S(), _e(n(ol), {
                                                                key: 1
                                                            })) : (S(), _e(n(il), {
                                                                key: 0
                                                            }))
                                                        ]),
                                                    _: 1
                                                }),
                                                v(K, {
                                                    class: "action-icon",
                                                    onClick: n(M)
                                                }, {
                                                    default: h(()=>[
                                                            v(n(sl))
                                                        ]),
                                                    _: 1
                                                }, 8, [
                                                    "onClick"
                                                ])
                                            ])
                                        ])
                                    ]),
                                    R("div", ro, [
                                        v(T, {
                                            link: "",
                                            type: "primary",
                                            class: "otp-url-btn",
                                            onClick: n(V)
                                        }, {
                                            default: h(()=>[
                                                    v(K, {
                                                        class: "mr-4"
                                                    }, {
                                                        default: h(()=>[
                                                                v(n(al))
                                                            ]),
                                                        _: 1
                                                    }),
                                                    ze(" " + N(w.$t("vault.copy_otp_url")), 1)
                                                ]),
                                            _: 1
                                        }, 8, [
                                            "onClick"
                                        ])
                                    ])
                                ])) : ge("", !0)
                            ]),
                        _: 1
                    }, 8, [
                        "modelValue",
                        "title"
                    ])
                ]);
            };
        }
    };
    zo = bn(co, [
        [
            "__scopeId",
            "data-v-c3ee4d98"
        ]
    ]);
});
export { zo as default, __tla };
