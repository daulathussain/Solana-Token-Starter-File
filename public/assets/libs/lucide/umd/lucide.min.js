/**
 * lucide v0.284.0 - ISC
 */

(function(a, p) {
    typeof exports == "object" && typeof module < "u" ? p(exports) : typeof define == "function" && define.amd ? define(["exports"], p) : (a = typeof globalThis < "u" ? globalThis : a || self, p(a.lucide = {}))
})(this, function(a) {
    "use strict";
    const p = (t, d, c = []) => {
        const i = document.createElementNS("http://www.w3.org/2000/svg", t);
        return Object.keys(d).forEach(n => {
            i.setAttribute(n, String(d[n]))
        }), c.length && c.forEach(n => {
            const e = p(...n);
            i.appendChild(e)
        }), i
    };
    var M = ([t, d, c]) => p(t, d, c);
    const es = t => Array.from(t.attributes).reduce((d, c) => (d[c.name] = c.value, d), {}),
        Ms = t => typeof t == "string" ? t : !t || !t.class ? "" : t.class && typeof t.class == "string" ? t.class.split(" ") : t.class && Array.isArray(t.class) ? t.class : "",
        ls = t => t.flatMap(Ms).map(d => d.trim()).filter(Boolean).filter((d, c, i) => i.indexOf(d) === c).join(" "),
        vs = t => t.replace(/(\w)(\w*)(_|-|\s*)/g, (d, c, i) => c.toUpperCase() + i.toLowerCase()),
        l = (t, {
            nameAttr: d,
            icons: c,
            attrs: i
        }) => {
            const n = t.getAttribute(d);
            if (n == null) return;
            const e = vs(n),
                cs = c[e];
            if (!cs) return console.warn(`${t.outerHTML} icon name was not found in the provided icons object.`);
            const ns = es(t),
                [ss, gs, rs] = cs,
                is = { ...gs,
                    "data-lucide": n,
                    ...i,
                    ...ns
                },
                ps = ls(["lucide", `lucide-${n}`, ns, i]);
            ps && Object.assign(is, {
                class: ps
            });
            const ys = M([ss, is, rs]);
            return t.parentNode ? .replaceChild(ys, t)
        },
        h = {
            xmlns: "http://www.w3.org/2000/svg",
            width: 24,
            height: 24,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": 2,
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
        },
        v = ["svg", h, [
            ["circle", {
                cx: "16",
                cy: "4",
                r: "1"
            }],
            ["path", {
                d: "m18 19 1-7-6 1"
            }],
            ["path", {
                d: "m5 8 3-3 5.5 3-2.36 3.5"
            }],
            ["path", {
                d: "M4.24 14.5a5 5 0 0 0 6.88 6"
            }],
            ["path", {
                d: "M13.76 17.5a5 5 0 0 0-6.88-6"
            }]
        ]],
        o = ["svg", h, [
            ["rect", {
                width: "18",
                height: "18",
                x: "3",
                y: "3",
                rx: "2"
            }],
            ["path", {
                d: "M17 12h-2l-2 5-2-10-2 5H7"
            }]
        ]],
        s = ["svg", h, [
            ["path", {
                d: "M22 12h-4l-3 9L9 3l-3 9H2"
            }]
        ]],
        g = ["svg", h, [
            ["path", {
                d: "M6 12H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"
            }],
            ["path", {
                d: "M6 8h12"
            }],
            ["path", {
                d: "M18.3 17.7a2.5 2.5 0 0 1-3.16 3.83 2.53 2.53 0 0 1-1.14-2V12"
            }],
            ["path", {
                d: "M6.6 15.6A2 2 0 1 0 10 17v-5"
            }]
        ]],
        r = ["svg", h, [
            ["path", {
                d: "M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"
            }],
            ["polygon", {
                points: "12 15 17 21 7 21 12 15"
            }]
        ]],
        y = ["svg", h, [
            ["circle", {
                cx: "12",
                cy: "13",
                r: "8"
            }],
            ["path", {
                d: "M5 3 2 6"
            }],
            ["path", {
                d: "m22 6-3-3"
            }],
            ["path", {
                d: "M6.38 18.7 4 21"
            }],
            ["path", {
                d: "M17.64 18.67 20 21"
            }],
            ["path", {
                d: "m9 13 2 2 4-4"
            }]
        ]],
        $ = ["svg", h, [
            ["path", {
                d: "M6.87 6.87a8 8 0 1 0 11.26 11.26"
            }],
            ["path", {
                d: "M19.9 14.25a8 8 0 0 0-9.15-9.15"
            }],
            ["path", {
                d: "m22 6-3-3"
            }],
            ["path", {
                d: "M6.26 18.67 4 21"
            }],
            ["path", {
                d: "m2 2 20 20"
            }],
            ["path", {
                d: "M4 4 2 6"
            }]
        ]],
        m = ["svg", h, [
            ["circle", {
                cx: "12",
                cy: "13",
                r: "8"
            }],
            ["path", {
                d: "M12 9v4l2 2"
            }],
            ["path", {
                d: "M5 3 2 6"
            }],
            ["path", {
                d: "m22 6-3-3"
            }],
            ["path", {
                d: "M6.38 18.7 4 21"
            }],
            ["path", {
                d: "M17.64 18.67 20 21"
            }]
        ]],
        H = ["svg", h, [
            ["circle", {
                cx: "12",
                cy: "13",
                r: "8"
            }],
            ["path", {
                d: "M5 3 2 6"
            }],
            ["path", {
                d: "m22 6-3-3"
            }],
            ["path", {
                d: "M6.38 18.7 4 21"
            }],
            ["path", {
                d: "M17.64 18.67 20 21"
            }],
            ["path", {
                d: "M9 13h6"
            }]
        ]],
        C = ["svg", h, [
            ["circle", {
                cx: "12",
                cy: "13",
                r: "8"
            }],
            ["path", {
                d: "M5 3 2 6"
            }],
            ["path", {
                d: "m22 6-3-3"
            }],
            ["path", {
                d: "M6.38 18.7 4 21"
            }],
            ["path", {
                d: "M17.64 18.67 20 21"
            }],
            ["path", {
                d: "M12 10v6"
            }],
            ["path", {
                d: "M9 13h6"
            }]
        ]],
        u = ["svg", h, [
            ["rect", {
                width: "18",
                height: "18",
                x: "3",
                y: "3",
                rx: "2",
                ry: "2"
            }],
            ["polyline", {
                points: "11 3 11 11 14 8 17 11 17 3"
            }]
        ]],
        V = ["svg", h, [
            ["circle", {
                cx: "12",
                cy: "12",
                r: "10"
            }],
            ["line", {
                x1: "12",
                x2: "12",
                y1: "8",
                y2: "12"
            }],
            ["line", {
                x1: "12",
                x2: "12.01",
                y1: "16",
                y2: "16"
            }]
        ]],
        w = ["svg", h, [
            ["polygon", {
                points: "7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"
            }],
            ["line", {
                x1: "12",
                x2: "12",
                y1: "8",
                y2: "12"
            }],
            ["line", {
                x1: "12",
                x2: "12.01",
                y1: "16",
                y2: "16"
            }]
        ]],
        x = ["svg", h, [
            ["path", {
                d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"
            }],
            ["path", {
                d: "M12 9v4"
            }],
            ["path", {
                d: "M12 17h.01"
            }]
        ]],
        L = ["svg", h, [
            ["path", {
                d: "M2 12h20"
            }],
            ["path", {
                d: "M10 16v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-4"
            }],
            ["path", {
                d: "M10 8V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v4"
            }],
            ["path", {
                d: "M20 16v1a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-1"
            }],
            ["path", {
                d: "M14 8V7c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v1"
            }]
        ]],
        S = ["svg", h, [
            ["path", {
                d: "M12 2v20"
            }],
            ["path", {
                d: "M8 10H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h4"
            }],
            ["path", {
                d: "M16 10h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-4"
            }],
            ["path", {
                d: "M8 20H7a2 2 0 0 1-2-2v-2c0-1.1.9-2 2-2h1"
            }],
            ["path", {
                d: "M16 14h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1"
            }]
        ]],
        A = ["svg", h, [
            ["line", {
                x1: "21",
                x2: "3",
                y1: "6",
                y2: "6"
            }],
            ["line", {
                x1: "17",
                x2: "7",
                y1: "12",
                y2: "12"
            }],
            ["line", {
                x1: "19",
                x2: "5",
                y1: "18",
                y2: "18"
            }]
        ]],
        f = ["svg", h, [
            ["rect", {
                width: "6",
                height: "16",
                x: "4",
                y: "2",
                rx: "2"
            }],
            ["rect", {
                width: "6",
                height: "9",
                x: "14",
                y: "9",
                rx: "2"
            }],
            ["path", {
                d: "M22 22H2"
            }]
        ]],
        k = ["svg", h, [
            ["rect", {
                width: "16",
                height: "6",
                x: "2",
                y: "4",
                rx: "2"
            }],
            ["rect", {
                width: "9",
                height: "6",
                x: "9",
                y: "14",
                rx: "2"
            }],
            ["path", {
                d: "M22 22V2"
            }]
        ]],
        F = ["svg", h, [
            ["rect", {
                width: "6",
                height: "14",
                x: "4",
                y: "5",
                rx: "2"
            }],
            ["rect", {
                width: "6",
                height: "10",
                x: "14",
                y: "7",
                rx: "2"
            }],
            ["path", {
                d: "M17 22v-5"
            }],
            ["path", {
                d: "M17 7V2"
            }],
            ["path", {
                d: "M7 22v-3"
            }],
            ["path", {
                d: "M7 5V2"
            }]
        ]],
        Z = ["svg", h, [
            ["rect", {
                width: "6",
                height: "14",
                x: "4",
                y: "5",
                rx: "2"
            }],
            ["rect", {
                width: "6",
                height: "10",
                x: "14",
                y: "7",
                rx: "2"
            }],
            ["path", {
                d: "M10 2v20"
            }],
            ["path", {
                d: "M20 2v20"
            }]
        ]],
        P = ["svg", h, [
            ["rect", {
                width: "6",
                height: "14",
                x: "4",
                y: "5",
                rx: "2"
            }],
            ["rect", {
                width: "6",
                height: "10",
                x: "14",
                y: "7",
                rx: "2"
            }],
            ["path", {
                d: "M4 2v20"
            }],
            ["path", {
                d: "M14 2v20"
            }]
        ]],
        B = ["svg", h, [
            ["rect", {
                width: "6",
                height: "14",
                x: "2",
                y: "5",
                rx: "2"
            }],
            ["rect", {
                width: "6",
                height: "10",
                x: "16",
                y: "7",
                rx: "2"
            }],
            ["path", {
                d: "M12 2v20"
            }]
        ]],
        D = ["svg", h, [
            ["rect", {
                width: "6",
                height: "14",
                x: "2",
                y: "5",
                rx: "2"
            }],
            ["rect", {
                width: "6",
                height: "10",
                x: "12",
                y: "7",
                rx: "2"
            }],
            ["path", {
                d: "M22 2v20"
            }]
        ]],
        T = ["svg", h, [
            ["rect", {
                width: "6",
                height: "14",
                x: "6",
                y: "5",
                rx: "2"
            }],
            ["rect", {
                width: "6",
                height: "10",
                x: "16",
                y: "7",
                rx: "2"
            }],
            ["path", {
                d: "M2 2v20"
            }]
        ]],
        z = ["svg", h, [
            ["rect", {
                width: "6",
                height: "10",
                x: "9",
                y: "7",
                rx: "2"
            }],
            ["path", {
                d: "M4 22V2"
            }],
            ["path", {
                d: "M20 22V2"
            }]
        ]],
        R = ["svg", h, [
            ["rect", {
                width: "6",
                height: "14",
                x: "3",
                y: "5",
                rx: "2"
            }],
            ["rect", {
                width: "6",
                height: "10",
                x: "15",
                y: "7",
                rx: "2"
            }],
            ["path", {
                d: "M3 2v20"
            }],
            ["path", {
                d: "M21 2v20"
            }]
        ]],
        b = ["svg", h, [
            ["line", {
                x1: "3",
                x2: "21",
                y1: "6",
                y2: "6"
            }],
            ["line", {
                x1: "3",
                x2: "21",
                y1: "12",
                y2: "12"
            }],
            ["line", {
                x1: "3",
                x2: "21",
                y1: "18",
                y2: "18"
            }]
        ]],
        U = ["svg", h, [
            ["line", {
                x1: "21",
                x2: "3",
                y1: "6",
                y2: "6"
            }],
            ["line", {
                x1: "15",
                x2: "3",
                y1: "12",
                y2: "12"
            }],
            ["line", {
                x1: "17",
                x2: "3",
                y1: "18",
                y2: "18"
            }]
        ]],
        O = ["svg", h, [
            ["line", {
                x1: "21",
                x2: "3",
                y1: "6",
                y2: "6"
            }],
            ["line", {
                x1: "21",
                x2: "9",
                y1: "12",
                y2: "12"
            }],
            ["line", {
                x1: "21",
                x2: "7",
                y1: "18",
                y2: "18"
            }]
        ]],
        q = ["svg", h, [
            ["rect", {
                width: "6",
                height: "16",
                x: "4",
                y: "6",
                rx: "2"
            }],
            ["rect", {
                width: "6",
                height: "9",
                x: "14",
                y: "6",
                rx: "2"
            }],
            ["path", {
                d: "M22 2H2"
            }]
        ]],
        G = ["svg", h, [
            ["rect", {
                width: "9",
                height: "6",
                x: "6",
                y: "14",
                rx: "2"
            }],
            ["rect", {
                width: "16",
                height: "6",
                x: "6",
                y: "4",
                rx: "2"
            }],
            ["path", {
                d: "M2 2v20"
            }]
        ]],
        W = ["svg", h, [
            ["rect", {
                width: "14",
                height: "6",
                x: "5",
                y: "14",
                rx: "2"
            }],
            ["rect", {
                width: "10",
                height: "6",
                x: "7",
                y: "4",
                rx: "2"
            }],
            ["path", {
                d: "M22 7h-5"
            }],
            ["path", {
                d: "M7 7H1"
            }],
            ["path", {
                d: "M22 17h-3"
            }],
            ["path", {
                d: "M5 17H2"
            }]
        ]],
        E = ["svg", h, [
            ["rect", {
                width: "14",
                height: "6",
                x: "5",
                y: "14",
                rx: "2"
            }],
            ["rect", {
                width: "10",
                height: "6",
                x: "7",
                y: "4",
                rx: "2"
            }],
            ["path", {
                d: "M2 20h20"
            }],
            ["path", {
                d: "M2 10h20"
            }]
        ]],
        I = ["svg", h, [
            ["rect", {
                width: "14",
                height: "6",
                x: "5",
                y: "14",
                rx: "2"
            }],
            ["rect", {
                width: "10",
                height: "6",
                x: "7",
                y: "4",
                rx: "2"
            }],
            ["path", {
                d: "M2 14h20"
            }],
            ["path", {
                d: "M2 4h20"
            }]
        ]],
        X = ["svg", h, [
            ["rect", {
                width: "14",
                height: "6",
                x: "5",
                y: "16",
                rx: "2"
            }],
            ["rect", {
                width: "10",
                height: "6",
                x: "7",
                y: "2",
                rx: "2"
            }],
            ["path", {
                d: "M2 12h20"
            }]
        ]],
        N = ["svg", h, [
            ["rect", {
                width: "14",
                height: "6",
                x: "5",
                y: "12",
                rx: "2"
            }],
            ["rect", {
                width: "10",
                height: "6",
                x: "7",
                y: "2",
                rx: "2"
            }],
            ["path", {
                d: "M2 22h20"
            }]
        ]],
        K = ["svg", h, [
            ["rect", {
                width: "14",
                height: "6",
                x: "5",
                y: "16",
                rx: "2"
            }],
            ["rect", {
                width: "10",
                height: "6",
                x: "7",
                y: "6",
                rx: "2"
            }],
            ["path", {
                d: "M2 2h20"
            }]
        ]],
        J = ["svg", h, [
            ["rect", {
                width: "10",
                height: "6",
                x: "7",
                y: "9",
                rx: "2"
            }],
            ["path", {
                d: "M22 20H2"
            }],
            ["path", {
                d: "M22 4H2"
            }]
        ]],
        j = ["svg", h, [
            ["rect", {
                width: "14",
                height: "6",
                x: "5",
                y: "15",
                rx: "2"
            }],
            ["rect", {
                width: "10",
                height: "6",
                x: "7",
                y: "3",
                rx: "2"
            }],
            ["path", {
                d: "M2 21h20"
            }],
            ["path", {
                d: "M2 3h20"
            }]
        ]],
        Q = ["svg", h, [
            ["path", {
                d: "M17.5 12c0 4.4-3.6 8-8 8A4.5 4.5 0 0 1 5 15.5c0-6 8-4 8-8.5a3 3 0 1 0-6 0c0 3 2.5 8.5 12 13"
            }],
            ["path", {
                d: "M16 12h3"
            }]
        ]],
        Y = ["svg", h, [
            ["path", {
                d: "M10 17c-5-3-7-7-7-9a2 2 0 0 1 4 0c0 2.5-5 2.5-5 6 0 1.7 1.3 3 3 3 2.8 0 5-2.2 5-5"
            }],
            ["path", {
                d: "M22 17c-5-3-7-7-7-9a2 2 0 0 1 4 0c0 2.5-5 2.5-5 6 0 1.7 1.3 3 3 3 2.8 0 5-2.2 5-5"
            }]
        ]],
        _ = ["svg", h, [
            ["circle", {
                cx: "12",
                cy: "5",
                r: "3"
            }],
            ["line", {
                x1: "12",
                x2: "12",
                y1: "22",
                y2: "8"
            }],
            ["path", {
                d: "M5 12H2a10 10 0 0 0 20 0h-3"
            }]
        ]],
        a1 = ["svg", h, [
            ["circle", {
                cx: "12",
                cy: "12",
                r: "10"
            }],
            ["path", {
                d: "M16 16s-1.5-2-4-2-4 2-4 2"
            }],
            ["path", {
                d: "M7.5 8 10 9"
            }],
            ["path", {
                d: "m14 9 2.5-1"
            }],
            ["path", {
                d: "M9 10h0"
            }],
            ["path", {
                d: "M15 10h0"
            }]
        ]],
        h1 = ["svg", h, [
            ["circle", {
                cx: "12",
                cy: "12",
                r: "10"
            }],
            ["path", {
                d: "M8 15h8"
            }],
            ["path", {
                d: "M8 9h2"
            }],
            ["path", {
                d: "M14 9h2"
            }]
        ]],
        t1 = ["svg", h, [
            ["path", {
                d: "M2 12 7 2"
            }],
            ["path", {
                d: "m7 12 5-10"
            }],
            ["path", {
                d: "m12 12 5-10"
            }],
            ["path", {
                d: "m17 12 5-10"
            }],
            ["path", {
                d: "M4.5 7h15"
            }],
            ["path", {
                d: "M12 16v6"
            }]
        ]],
        d1 = ["svg", h, [
            ["circle", {
                cx: "12",
                cy: "12",
                r: "10"
            }],
            ["line", {
                x1: "14.31",
                x2: "20.05",
                y1: "8",
                y2: "17.94"
            }],
            ["line", {
                x1: "9.69",
                x2: "21.17",
                y1: "8",
                y2: "8"
            }],
            ["line", {
                x1: "7.38",
                x2: "13.12",
                y1: "12",
                y2: "2.06"
            }],
            ["line", {
                x1: "9.69",
                x2: "3.95",
                y1: "16",
                y2: "6.06"
            }],
            ["line", {
                x1: "14.31",
                x2: "2.83",
                y1: "16",
                y2: "16"
            }],
            ["line", {
                x1: "16.62",
                x2: "10.88",
                y1: "12",
                y2: "21.94"
            }]
        ]],
        c1 = ["svg", h, [
            ["rect", {
                x: "2",
                y: "4",
                width: "20",
                height: "16",
                rx: "2"
            }],
            ["path", {
                d: "M10 4v4"
            }],
            ["path", {
                d: "M2 8h20"
            }],
            ["path", {
                d: "M6 4v4"
            }]
        ]],
        n1 = ["svg", h, [
            ["path", {
                d: "M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z"
            }],
            ["path", {
                d: "M10 2c1 .5 2 2 2 5"
            }]
        ]],
        i1 = ["svg", h, [
            ["rect", {
                width: "20",
                height: "5",
                x: "2",
                y: "3",
                rx: "1"
            }],
            ["path", {
                d: "M4 8v11a2 2 0 0 0 2 2h2"
            }],
            ["path", {
                d: "M20 8v11a2 2 0 0 1-2 2h-2"
            }],
            ["path", {
                d: "m9 15 3-3 3 3"
            }],
            ["path", {
                d: "M12 12v9"
            }]
        ]],
        p1 = ["svg", h, [
            ["rect", {
                width: "20",
                height: "5",
                x: "2",
                y: "3",
                rx: "1"
            }],
            ["path", {
                d: "M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"
            }],
            ["path", {
                d: "m9.5 17 5-5"
            }],
            ["path", {
                d: "m9.5 12 5 5"
            }]
        ]],
        e1 = ["svg", h, [
            ["rect", {
                width: "20",
                height: "5",
                x: "2",
                y: "3",
                rx: "1"
            }],
            ["path", {
                d: "M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"
            }],
            ["path", {
                d: "M10 12h4"
            }]
        ]],
        M1 = ["svg", h, [
            ["path", {
                d: "M3 3v18h18"
            }],
            ["path", {
                d: "M7 12v5h12V8l-5 5-4-4Z"
            }]
        ]],
        l1 = ["svg", h, [
            ["path", {
                d: "M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3"
            }],
            ["path", {
                d: "M3 11v5a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v2H7v-2a2 2 0 0 0-4 0Z"
            }],
            ["path", {
                d: "M5 18v2"
            }],
            ["path", {
                d: "M19 18v2"
            }]
        ]],
        v1 = ["svg", h, [
            ["path", {
                d: "M15 5H9"
            }],
            ["path", {
                d: "M15 9v3h4l-7 7-7-7h4V9h6z"
            }]
        ]],
        o1 = ["svg", h, [
            ["path", {
                d: "M15 6v6h4l-7 7-7-7h4V6h6z"
            }]
        ]],
        s1 = ["svg", h, [
            ["path", {
                d: "M19 15V9"
            }],
            ["path", {
                d: "M15 15h-3v4l-7-7 7-7v4h3v6z"
            }]
        ]],
        g1 = ["svg", h, [
            ["path", {
                d: "M18 15h-6v4l-7-7 7-7v4h6v6z"
            }]
        ]],
        r1 = ["svg", h, [
            ["path", {
                d: "M5 9v6"
            }],
            ["path", {
                d: "M9 9h3V5l7 7-7 7v-4H9V9z"
            }]
        ]],
        y1 = ["svg", h, [
            ["path", {
                d: "M6 9h6V5l7 7-7 7v-4H6V9z"
            }]
        ]],
        $1 = ["svg", h, [
            ["path", {
                d: "M9 19h6"
            }],
            ["path", {
                d: "M9 15v-3H5l7-7 7 7h-4v3H9z"
            }]
        ]],
        m1 = ["svg", h, [
            ["path", {
                d: "M9 18v-6H5l7-7 7 7h-4v6H9z"
            }]
        ]],
        H1 = ["svg", h, [
            ["path", {
                d: "m3 16 4 4 4-4"
            }],
            ["path", {
                d: "M7 20V4"
            }],
            ["rect", {
                x: "15",
                y: "4",
                width: "4",
                height: "6",
                ry: "2"
            }],
            ["path", {
                d: "M17 20v-6h-2"
            }],
            ["path", {
                d: "M15 20h4"
            }]
        ]],
        C1 = ["svg", h, [
            ["path", {
                d: "m3 16 4 4 4-4"
            }],
            ["path", {
                d: "M7 20V4"
            }],
            ["path", {
                d: "M17 10V4h-2"
            }],
            ["path", {
                d: "M15 10h4"
            }],
            ["rect", {
                x: "15",
                y: "14",
                width: "4",
                height: "6",
                ry: "2"
            }]
        ]],
        u1 = ["svg", h, [
            ["path", {
                d: "m3 16 4 4 4-4"
            }],
            ["path", {
                d: "M7 20V4"
            }],
            ["path", {
                d: "M20 8h-5"
            }],
            ["path", {
                d: "M15 10V6.5a2.5 2.5 0 0 1 5 0V10"
            }],
            ["path", {
                d: "M15 14h5l-5 6h5"
            }]
        ]],
        V1 = ["svg", h, [
            ["circle", {
                cx: "12",
                cy: "12",
                r: "10"
            }],
            ["path", {
                d: "M12 8v8"
            }],
            ["path", {
                d: "m8 12 4 4 4-4"
            }]
        ]],
        w1 = ["svg", h, [
            ["path", {
                d: "M19 3H5"
            }],
            ["path", {
                d: "M12 21V7"
            }],
            ["path", {
                d: "m6 15 6 6 6-6"
            }]
        ]],
        x1 = ["svg", h, [
            ["path", {
                d: "M2 12a10 10 0 1 1 10 10"
            }],
            ["path", {
                d: "m2 22 10-10"
            }],
            ["path", {
                d: "M8 22H2v-6"
            }]
        ]],
        L1 = ["svg", h, [
            ["rect", {
                width: "18",
                height: "18",
                x: "3",
                y: "3",
                rx: "2"
            }],
            ["path", {
                d: "m16 8-8 8"
            }],
            ["path", {
                d: "M16 16H8V8"
            }]
        ]],
        S1 = ["svg", h, [
            ["path", {
                d: "M17 7 7 17"
            }],
            ["path", {
                d: "M17 17H7V7"
            }]
        ]],
        A1 = ["svg", h, [
            ["path", {
                d: "m3 16 4 4 4-4"
            }],
            ["path", {
                d: "M7 20V4"
            }],
            ["path", {
                d: "M11 4h4"
            }],
            ["path", {
                d: "M11 8h7"
            }],
            ["path", {
                d: "M11 12h10"
            }]
        ]],
        f1 = ["svg", h, [
            ["path", {
                d: "M12 22a10 10 0 1 1 10-10"
            }],
            ["path", {
                d: "M22 22 12 12"
            }],
            ["path", {
                d: "M22 16v6h-6"
            }]
        ]],
        k1 = ["svg", h, [
            ["rect", {
                width: "18",
                height: "18",
                x: "3",
                y: "3",
                rx: "2"
            }],
            ["path", {
                d: "m8 8 8 8"
            }],
            ["path", {
                d: "M16 8v8H8"
            }]
        ]],
        F1 = ["svg", h, [
            ["path", {
                d: "m7 7 10 10"
            }],
            ["path", {
                d: "M17 7v10H7"
            }]
        ]],
        Z1 = ["svg", h, [
            ["rect", {
                width: "18",
                height: "18",
                x: "3",
                y: "3",
                rx: "2"
            }],
            ["path", {
                d: "M12 8v8"
            }],
            ["path", {
                d: "m8 12 4 4 4-4"
            }]
        ]],
        P1 = ["svg", h, [
            ["path", {
                d: "M12 2v14"
            }],
            ["path", {
                d: "m19 9-7 7-7-7"
            }],
            ["circle", {
                cx: "12",
                cy: "21",
                r: "1"
            }]
        ]],
        B1 = ["svg", h, [
            ["path", {
                d: "M12 17V3"
            }],
            ["path", {
                d: "m6 11 6 6 6-6"
            }],
            ["path", {
                d: "M19 21H5"
            }]
        ]],
        D1 = ["svg", h, [
            ["path", {
                d: "m3 16 4 4 4-4"
            }],
            ["path", {
                d: "M7 20V4"
            }],
            ["path", {
                d: "m21 8-4-4-4 4"
            }],
            ["path", {
                d: "M17 4v16"
            }]
        ]],
        T1 = ["svg", h, [
            ["path", {
                d: "m3 16 4 4 4-4"
            }],
            ["path", {
                d: "M7 20V4"
            }],
            ["path", {
                d: "M11 4h10"
            }],
            ["path", {
                d: "M11 8h7"
            }],
            ["path", {
                d: "M11 12h4"
            }]
        ]],
        z1 = ["svg", h, [
            ["path", {
                d: "m3 16 4 4 4-4"
            }],
            ["path", {
                d: "M7 4v16"
            }],
            ["path", {
                d: "M15 4h5l-5 6h5"
            }],
            ["path", {
                d: "M15 20v-3.5a2.5 2.5 0 0 1 5 0V20"
            }],
            ["path", {
                d: "M20 18h-5"
            }]
        ]],
        R1 = ["svg", h, [
            ["path", {
                d: "M12 5v14"
            }],
            ["path", {
                d: "m19 12-7 7-7-7"
            }]
        ]],
        b1 = ["svg", h, [
            ["circle", {
                cx: "12",
                cy: "12",
                r: "10"
            }],
            ["path", {
                d: "M16 12H8"
            }],
            ["path", {
                d: "m12 8-4 4 4 4"
            }]
        ]],
        U1 = ["svg", h, [
            ["path", {
                d: "m9 6-6 6 6 6"
            }],
            ["path", {
                d: "M3 12h14"
            }],
            ["path", {
                d: "M21 19V5"
            }]
        ]],
        O1 = ["svg", h, [
            ["path", {
                d: "M8 3 4 7l4 4"
            }],
            ["path", {
                d: "M4 7h16"
            }],
            ["path", {
                d: "m16 21 4-4-4-4"
            }],
            ["path", {
                d: "M20 17H4"
            }]
        ]],
        q1 = ["svg", h, [
            ["rect", {
                width: "18",
                height: "18",
                x: "3",
                y: "3",
                rx: "2"
            }],
            ["path", {
                d: "m12 8-4 4 4 4"
            }],
            ["path", {
                d: "M16 12H8"
            }]
        ]],
        G1 = ["svg", h, [
            ["path", {
                d: "M3 19V5"
            }],
            ["path", {
                d: "m13 6-6 6 6 6"
            }],
            ["path", {
                d: "M7 12h14"
            }]
        ]],
        W1 = ["svg", h, [
            ["path", {
                d: "m12 19-7-7 7-7"
            }],
            ["path", {
                d: "M19 12H5"
            }]
        ]],
        E1 = ["svg", h, [
            ["circle", {
                cx: "12",
                cy: "12",
                r: "10"
            }],
            ["path", {
                d: "M8 12h8"
            }],
            ["path", {
                d: "m12 16 4-4-4-4"
            }]
        ]],
        I1 = ["svg", h, [
            ["path", {
                d: "M3 5v14"
            }],
            ["path", {
                d: "M21 12H7"
            }],
            ["path", {
                d: "m15 18 6-6-6-6"
            }]
        ]],
        X1 = ["svg", h, [
            ["path", {
                d: "m16 3 4 4-4 4"
            }],
            ["path", {
                d: "M20 7H4"
            }],
            ["path", {
                d: "m8 21-4-4 4-4"
            }],
            ["path", {
                d: "M4 17h16"
            }]
        ]],
        N1 = ["svg", h, [
            ["rect", {
                width: "18",
                height: "18",
                x: "3",
                y: "3",
                rx: "2"
            }],
            ["path", {
                d: "M8 12h8"
            }],
            ["path", {
                d: "m12 16 4-4-4-4"
            }]
        ]],
        K1 = ["svg", h, [
            ["path", {
                d: "M17 12H3"
            }],
            ["path", {
                d: "m11 18 6-6-6-6"
            }],
            ["path", {
                d: "M21 5v14"
            }]
        ]],
        J1 = ["svg", h, [
            ["path", {
                d: "M5 12h14"
            }],
            ["path", {
                d: "m12 5 7 7-7 7"
            }]
        ]],
        j1 = ["svg", h, [
            ["path", {
                d: "m3 8 4-4 4 4"
            }],
            ["path", {
                d: "M7 4v16"
            }],
            ["rect", {
                x: "15",
                y: "4",
                width: "4",
                height: "6",
                ry: "2"
            }],
            ["path", {
                d: "M17 20v-6h-2"
            }],
            ["path", {
                d: "M15 20h4"
            }]
        ]],
        Q1 = ["svg", h, [
            ["path", {
                d: "m3 8 4-4 4 4"
            }],
            ["path", {
                d: "M7 4v16"
            }],
            ["path", {
                d: "M17 10V4h-2"
            }],
            ["path", {
                d: "M15 10h4"
            }],
            ["rect", {
                x: "15",
                y: "14",
                width: "4",
                height: "6",
                ry: "2"
            }]
        ]],
        Y1 = ["svg", h, [
            ["path", {
                d: "m3 8 4-4 4 4"
            }],
            ["path", {
                d: "M7 4v16"
            }],
            ["path", {
                d: "M20 8h-5"
            }],
            ["path", {
                d: "M15 10V6.5a2.5 2.5 0 0 1 5 0V10"
            }],
            ["path", {
                d: "M15 14h5l-5 6h5"
            }]
        ]],
        _1 = ["svg", h, [
            ["circle", {
                cx: "12",
                cy: "12",
                r: "10"
            }],
            ["path", {
                d: "m16 12-4-4-4 4"
            }],
            ["path", {
                d: "M12 16V8"
            }]
        ]],
        a2 = ["svg", h, [
            ["path", {
                d: "m21 16-4 4-4-4"
            }],
            ["path", {
                d: "M17 20V4"
            }],
            ["path", {
                d: "m3 8 4-4 4 4"
            }],
            ["path", {
                d: "M7 4v16"
            }]
        ]],
        h2 = ["svg", h, [
            ["path", {
                d: "m5 9 7-7 7 7"
            }],
            ["path", {
                d: "M12 16V2"
            }],
            ["circle", {
                cx: "12",
                cy: "21",
                r: "1"
            }]
        ]],
        t2 = ["svg", h, [
            ["path", {
                d: "m18 9-6-6-6 6"
            }],
            ["path", {
                d: "M12 3v14"
            }],
            ["path", {
                d: "M5 21h14"
            }]
        ]],
        d2 = ["svg", h, [
            ["path", {
                d: "M2 8V2h6"
            }],
            ["path", {
                d: "m2 2 10 10"
            }],
            ["path", {
                d: "M12 2A10 10 0 1 1 2 12"
            }]
        ]],
        c2 = ["svg", h, [
            ["rect", {
                width: "18",
                height: "18",
                x: "3",
                y: "3",
                rx: "2"
            }],
            ["path", {
                d: "M8 16V8h8"
            }],
            ["path", {
                d: "M16 16 8 8"
            }]
        ]],
        n2 = ["svg", h, [
            ["path", {
                d: "M7 17V7h10"
            }],
            ["path", {
                d: "M17 17 7 7"
            }]
        ]],
        i2 = ["svg", h, [
            ["path", {
                d: "m3 8 4-4 4 4"
            }],
            ["path", {
                d: "M7 4v16"
            }],
            ["path", {
                d: "M11 12h4"
            }],
            ["path", {
                d: "M11 16h7"
            }],
            ["path", {
                d: "M11 20h10"
            }]
        ]],
        p2 = ["svg", h, [
            ["path", {
                d: "M22 12A10 10 0 1 1 12 2"
            }],
            ["path", {
                d: "M22 2 12 12"
            }],
            ["path", {
                d: "M16 2h6v6"
            }]
        ]],
        e2 = ["svg", h, [
            ["rect", {
                width: "18",
                height: "18",
                x: "3",
                y: "3",
                rx: "2"
            }],
            ["path", {
                d: "M8 8h8v8"
            }],
            ["path", {
                d: "m8 16 8-8"
            }]
        ]],
        M2 = ["svg", h, [
            ["path", {
                d: "M7 7h10v10"
            }],
            ["path", {
                d: "M7 17 17 7"
            }]
        ]],
        l2 = ["svg", h, [
            ["rect", {
                width: "18",
                height: "18",
                x: "3",
                y: "3",
                rx: "2"
            }],
            ["path", {
                d: "m16 12-4-4-4 4"
            }],
            ["path", {
                d: "M12 16V8"
            }]
        ]],
        v2 = ["svg", h, [
            ["path", {
                d: "M5 3h14"
            }],
            ["path", {
                d: "m18 13-6-6-6 6"
            }],
            ["path", {
                d: "M12 7v14"
            }]
        ]],
        o2 = ["svg", h, [
            ["path", {
                d: "m3 8 4-4 4 4"
            }],
            ["path", {
                d: "M7 4v16"
            }],
            ["path", {
                d: "M11 12h10"
            }],
            ["path", {
                d: "M11 16h7"
            }],
            ["path", {
                d: "M11 20h4"
            }]
        ]],
        s2 = ["svg", h, [
            ["path", {
                d: "m3 8 4-4 4 4"
            }],
            ["path", {
                d: "M7 4v16"
            }],
            ["path", {
                d: "M15 4h5l-5 6h5"
            }],
            ["path", {
                d: "M15 20v-3.5a2.5 2.5 0 0 1 5 0V20"
            }],
            ["path", {
                d: "M20 18h-5"
            }]
        ]],
        g2 = ["svg", h, [
            ["path", {
                d: "m5 12 7-7 7 7"
            }],
            ["path", {
                d: "M12 19V5"
            }]
        ]],
        r2 = ["svg", h, [
            ["path", {
                d: "m4 6 3-3 3 3"
            }],
            ["path", {
                d: "M7 17V3"
            }],
            ["path", {
                d: "m14 6 3-3 3 3"
            }],
            ["path", {
                d: "M17 17V3"
            }],
            ["path", {
                d: "M4 21h16"
            }]
        ]],
        y2 = ["svg", h, [
            ["path", {
                d: "M12 6v12"
            }],
            ["path", {
                d: "M17.196 9 6.804 15"
            }],
            ["path", {
                d: "m6.804 9 10.392 6"
            }]
        ]],
        $2 = ["svg", h, [
            ["circle", {
                cx: "12",
                cy: "12",
                r: "4"
            }],
            ["path", {
                d: "M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8"
            }]
        ]],
        m2 = ["svg", h, [
            ["circle", {
                cx: "12",
                cy: "12",
                r: "1"
            }],
            ["path", {
                d: "M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z"
            }],
            ["path", {
                d: "M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z"
            }]
        ]],
        H2 = ["svg", h, [
            ["circle", {
                cx: "12",
                cy: "8",
                r: "6"
            }],
            ["path", {
                d: "M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"
            }]
        ]],
        C2 = ["svg", h, [
            ["path", {
                d: "m14 12-8.5 8.5a2.12 2.12 0 1 1-3-3L11 9"
            }],
            ["path", {
                d: "M15 13 9 7l4-4 6 6h3a8 8 0 0 1-7 7z"
            }]
        ]],
        u2 = ["svg", h, [
            ["path", {
                d: "M4 4v16h16"
            }],
            ["path", {
                d: "m4 20 7-7"
            }]
        ]],
        V2 = ["svg", h, [
            ["path", {
                d: "M9 12h.01"
            }],
            ["path", {
                d: "M15 12h.01"
            }],
            ["path", {
                d: "M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5"
            }],
            ["path", {
                d: "M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1"
            }]
        ]],
        w2 = ["svg", h, [
            ["path", {
                d: "M4 20V10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z"
            }],
            ["path", {
                d: "M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"
            }],
            ["path", {
                d: "M8 21v-5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v5"
            }],
            ["path", {
                d: "M8 10h8"
            }],
            ["path", {
                d: "M8 18h8"
            }]
        ]],
        x2 = ["svg", h, [
            ["path", {
                d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
            }],
            ["line", {
                x1: "12",
                x2: "12",
                y1: "8",
                y2: "12"
            }],
            ["line", {
                x1: "12",
                x2: "12.01",
                y1: "16",
                y2: "16"
            }]
        ]],
        L2 = ["svg", h, [
            ["path", {
                d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
            }],
            ["path", {
                d: "M12 7v10"
            }],
            ["path", {
                d: "M15.4 10a4 4 0 1 0 0 4"
            }]
        ]],
        S2 = ["svg", h, [
            ["path", {
                d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
            }],
            ["path", {
                d: "m9 12 2 2 4-4"
            }]
        ]],
        A2 = ["svg", h, [
            ["path", {
                d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
            }],
            ["path", {
                d: "M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"
            }],
            ["path", {
                d: "M12 18V6"
            }]
        ]],
        f2 = ["svg", h, [
            ["path", {
                d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
            }],
            ["path", {
                d: "M7 12h5"
            }],
            ["path", {
                d: "M15 9.4a4 4 0 1 0 0 5.2"
            }]
        ]],
        k2 = ["svg", h, [
            ["path", {
                d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
            }],
            ["path", {
                d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"
            }],
            ["line", {
                x1: "12",
                x2: "12.01",
                y1: "17",
                y2: "17"
            }]
        ]],
        F2 = ["svg", h, [
            ["path", {
                d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
            }],
            ["path", {
                d: "M8 8h8"
            }],
            ["path", {
                d: "M8 12h8"
            }],
            ["path", {
                d: "m13 17-5-1h1a4 4 0 0 0 0-8"
            }]
        ]],
        Z2 = ["svg", h, [
            ["path", {
                d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
            }],
            ["line", {
                x1: "12",
                x2: "12",
                y1: "16",
                y2: "12"
            }],
            ["line", {
                x1: "12",
                x2: "12.01",
                y1: "8",
                y2: "8"
            }]
        ]],
        P2 = ["svg", h, [
            ["path", {
                d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
            }],
            ["path", {
                d: "m9 8 3 3v7"
            }],
            ["path", {
                d: "m12 11 3-3"
            }],
            ["path", {
                d: "M9 12h6"
            }],
            ["path", {
                d: "M9 16h6"
            }]
        ]],
        B2 = ["svg", h, [
            ["path", {
                d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
            }],
            ["line", {
                x1: "8",
                x2: "16",
                y1: "12",
                y2: "12"
            }]
        ]],
        D2 = ["svg", h, [
            ["path", {
                d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
            }],
            ["path", {
                d: "m15 9-6 6"
            }],
            ["path", {
                d: "M9 9h.01"
            }],
            ["path", {
                d: "M15 15h.01"
            }]
        ]],
        T2 = ["svg", h, [
            ["path", {
                d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
            }],
            ["line", {
                x1: "12",
                x2: "12",
                y1: "8",
                y2: "16"
            }],
            ["line", {
                x1: "8",
                x2: "16",
                y1: "12",
                y2: "12"
            }]
        ]],
        z2 = ["svg", h, [
            ["path", {
                d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
            }],
            ["path", {
                d: "M8 12h4"
            }],
            ["path", {
                d: "M10 16V9.5a2.5 2.5 0 0 1 5 0"
            }],
            ["path", {
                d: "M8 16h7"
            }]
        ]],
        R2 = ["svg", h, [
            ["path", {
                d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
            }],
            ["path", {
                d: "M9 16h5"
            }],
            ["path", {
                d: "M9 12h5a2 2 0 1 0 0-4h-3v9"
            }]
        ]],
        b2 = ["svg", h, [
            ["path", {
                d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
            }],
            ["path", {
                d: "M11 17V8h4"
            }],
            ["path", {
                d: "M11 12h3"
            }],
            ["path", {
                d: "M9 16h4"
            }]
        ]],
        U2 = ["svg", h, [
            ["path", {
                d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
            }],
            ["line", {
                x1: "15",
                x2: "9",
                y1: "9",
                y2: "15"
            }],
            ["line", {
                x1: "9",
                x2: "15",
                y1: "9",
                y2: "15"
            }]
        ]],
        O2 = ["svg", h, [
            ["path", {
                d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
            }]
        ]],
        q2 = ["svg", h, [
            ["path", {
                d: "M22 18H6a2 2 0 0 1-2-2V7a2 2 0 0 0-2-2"
            }],
            ["path", {
                d: "M17 14V4a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v10"
            }],
            ["rect", {
                width: "13",
                height: "8",
                x: "8",
                y: "6",
                rx: "1"
            }],
            ["circle", {
                cx: "18",
                cy: "20",
                r: "2"
            }],
            ["circle", {
                cx: "9",
                cy: "20",
                r: "2"
            }]
        ]],
        G2 = ["svg", h, [
            ["circle", {
                cx: "12",
                cy: "12",
                r: "10"
            }],
            ["path", {
                d: "m4.9 4.9 14.2 14.2"
            }]
        ]],
        W2 = ["svg", h, [
            ["path", {
                d: "M4 13c3.5-2 8-2 10 2a5.5 5.5 0 0 1 8 5"
            }],
            ["path", {
                d: "M5.15 17.89c5.52-1.52 8.65-6.89 7-12C11.55 4 11.5 2 13 2c3.22 0 5 5.5 5 8 0 6.5-4.2 12-10.49 12C5.11 22 2 22 2 20c0-1.5 1.14-1.55 3.15-2.11Z"
            }]
        ]],
        E2 = ["svg", h, [
            ["rect", {
                width: "20",
                height: "12",
                x: "2",
                y: "6",
                rx: "2"
            }],
            ["circle", {
                cx: "12",
                cy: "12",
                r: "2"
            }],
            ["path", {
                d: "M6 12h.01M18 12h.01"
            }]
        ]],
        I2 = ["svg", h, [
            ["line", {
                x1: "18",
                x2: "18",
                y1: "20",
                y2: "10"
            }],
            ["line", {
                x1: "12",
                x2: "12",
                y1: "20",
                y2: "4"
            }],
            ["line", {
                x1: "6",
                x2: "6",
                y1: "20",
                y2: "14"
            }]
        ]],
        X2 = ["svg", h, [
            ["path", {
                d: "M3 3v18h18"
            }],
            ["path", {
                d: "M18 17V9"
            }],
            ["path", {
                d: "M13 17V5"
            }],
            ["path", {
                d: "M8 17v-3"
            }]
        ]],
        N2 = ["svg", h, [
            ["path", {
                d: "M3 3v18h18"
            }],
            ["path", {
                d: "M13 17V9"
            }],
            ["path", {
                d: "M18 17V5"
            }],
            ["path", {
                d: "M8 17v-3"
            }]
        ]],
        K2 = ["svg", h, [
            ["path", {
                d: "M3 3v18h18"
            }],
            ["rect", {
                width: "4",
                height: "7",
                x: "7",
                y: "10",
                rx: "1"
            }],
            ["rect", {
                width: "4",
                height: "12",
                x: "15",
                y: "5",
                rx: "1"
            }]
        ]],
        J2 = ["svg", h, [
            ["path", {
                d: "M3 3v18h18"
            }],
            ["rect", {
                width: "12",
                height: "4",
                x: "7",
                y: "5",
                rx: "1"
            }],
            ["rect", {
                width: "7",
                height: "4",
                x: "7",
                y: "13",
                rx: "1"
            }]
        ]],
        j2 = ["svg", h, [
            ["path", {
                d: "M3 3v18h18"
            }],
            ["path", {
                d: "M7 16h8"
            }],
            ["path", {
                d: "M7 11h12"
            }],
            ["path", {
                d: "M7 6h3"
            }]
        ]],
        Q2 = ["svg", h, [
            ["line", {
                x1: "12",
                x2: "12",
                y1: "20",
                y2: "10"
            }],
            ["line", {
                x1: "18",
                x2: "18",
                y1: "20",
                y2: "4"
            }],
            ["line", {
                x1: "6",
                x2: "6",
                y1: "20",
                y2: "16"
            }]
        ]],
        Y2 = ["svg", h, [
            ["path", {
                d: "M3 5v14"
            }],
            ["path", {
                d: "M8 5v14"
            }],
            ["path", {
                d: "M12 5v14"
            }],
            ["path", {
                d: "M17 5v14"
            }],
            ["path", {
                d: "M21 5v14"
            }]
        ]],
        _2 = ["svg", h, [
            ["path", {
                d: "M4 20h16"
            }],
            ["path", {
                d: "m6 16 6-12 6 12"
            }],
            ["path", {
                d: "M8 12h8"
            }]
        ]],
        a0 = ["svg", h, [
            ["path", {
                d: "M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.683 3 4 3.683 4 4.5V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5"
            }],
            ["line", {
                x1: "10",
                x2: "8",
                y1: "5",
                y2: "7"
            }],
            ["line", {
                x1: "2",
                x2: "22",
                y1: "12",
                y2: "12"
            }],
            ["line", {
                x1: "7",
                x2: "7",
                y1: "19",
                y2: "21"
            }],
            ["line", {
                x1: "17",
                x2: "17",
                y1: "19",
                y2: "21"
            }]
        ]],
        h0 = ["svg", h, [
            ["path", {
                d: "M15 7h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2"
            }],
            ["path", {
                d: "M6 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h1"
            }],
            ["path", {
                d: "m11 7-3 5h4l-3 5"
            }],
            ["line", {
                x1: "22",
                x2: "22",
                y1: "11",
                y2: "13"
            }]
        ]],
        t0 = ["svg", h, [
            ["rect", {
                width: "16",
                height: "10",
                x: "2",
                y: "7",
                rx: "2",
                ry: "2"
            }],
            ["line", {
                x1: "22",
                x2: "22",
                y1: "11",
                y2: "13"
            }],
            ["line", {
                x1: "6",
                x2: "6",
                y1: "11",
                y2: "13"
            }],
            ["line", {
                x1: "10",
                x2: "10",
                y1: "11",
                y2: "13"
            }],
            ["line", {
                x1: "14",
                x2: "14",
                y1: "11",
                y2: "13"
            }]
        ]],
        d0 = ["svg", h, [
            ["rect", {
                width: "16",
                height: "10",
                x: "2",
                y: "7",
                rx: "2",
                ry: "2"
            }],
            ["line", {
                x1: "22",
                x2: "22",
                y1: "11",
                y2: "13"
            }],
            ["line", {
                x1: "6",
                x2: "6",
                y1: "11",
                y2: "13"
            }]
        ]],
        c0 = ["svg", h, [
            ["rect", {
                width: "16",
                height: "10",
                x: "2",
                y: "7",
                rx: "2",
                ry: "2"
            }],
            ["line", {
                x1: "22",
                x2: "22",
                y1: "11",
                y2: "13"
            }],
            ["line", {
                x1: "6",
                x2: "6",
                y1: "11",
                y2: "13"
            }],
            ["line", {
                x1: "10",
                x2: "10",
                y1: "11",
                y2: "13"
            }]
        ]],
        n0 = ["svg", h, [
            ["path", {
                d: "M14 7h2a2 2 0 0 1 2 2v6c0 1-1 2-2 2h-2"
            }],
            ["path", {
                d: "M6 7H4a2 2 0 0 0-2 2v6c0 1 1 2 2 2h2"
            }],
            ["line", {
                x1: "22",
                x2: "22",
                y1: "11",
                y2: "13"
            }],
            ["line", {
                x1: "10",
                x2: "10",
                y1: "7",
                y2: "13"
            }],
            ["line", {
                x1: "10",
                x2: "10",
                y1: "17",
                y2: "17.01"
            }]
        ]],
        i0 = ["svg", h, [
            ["rect", {
                width: "16",
                height: "10",
                x: "2",
                y: "7",
                rx: "2",
                ry: "2"
            }],
            ["line", {
                x1: "22",
                x2: "22",
                y1: "11",
                y2: "13"
            }]
        ]],
        p0 = ["svg", h, [
            ["path", {
                d: "M4.5 3h15"
            }],
            ["path", {
                d: "M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3"
            }],
            ["path", {
                d: "M6 14h12"
            }]
        ]],
        e0 = ["svg", h, [
            ["path", {
                d: "M9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22a13.96 13.96 0 0 0 9.9-4.1"
            }],
            ["path", {
                d: "M10.75 5.093A6 6 0 0 1 22 8c0 2.411-.61 4.68-1.683 6.66"
            }],
            ["path", {
                d: "M5.341 10.62a4 4 0 0 0 6.487 1.208M10.62 5.341a4.015 4.015 0 0 1 2.039 2.04"
            }],
            ["line", {
                x1: "2",
                x2: "22",
                y1: "2",
                y2: "22"
            }]
        ]],
        M0 = ["svg", h, [
            ["path", {
                d: "M10.165 6.598C9.954 7.478 9.64 8.36 9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22c7.732 0 14-6.268 14-14a6 6 0 0 0-11.835-1.402Z"
            }],
            ["path", {
                d: "M5.341 10.62a4 4 0 1 0 5.279-5.28"
            }]
        ]],
        l0 = ["svg", h, [
            ["path", {
                d: "M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8"
            }],
            ["path", {
                d: "M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4"
            }],
            ["path", {
                d: "M12 4v6"
            }],
            ["path", {
                d: "M2 18h20"
            }]
        ]],
        v0 = ["svg", h, [
            ["path", {
                d: "M3 20v-8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8"
            }],
            ["path", {
                d: "M5 10V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4"
            }],
            ["path", {
                d: "M3 18h18"
            }]
        ]],
        o0 = ["svg", h, [
            ["path", {
                d: "M2 4v16"
            }],
            ["path", {
                d: "M2 8h18a2 2 0 0 1 2 2v10"
            }],
            ["path", {
                d: "M2 17h20"
            }],
            ["path", {
                d: "M6 8v9"
            }]
        ]],
        s0 = ["svg", h, [
            ["circle", {
                cx: "12.5",
                cy: "8.5",
                r: "2.5"
            }],
            ["path", {
                d: "M12.5 2a6.5 6.5 0 0 0-6.22 4.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3A6.5 6.5 0 0 0 12.5 2Z"
            }],
            ["path", {
                d: "m18.5 6 2.19 4.5a6.48 6.48 0 0 1 .31 2 6.49 6.49 0 0 1-2.6 5.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5"
            }]
        ]],
        g0 = ["svg", h, [
            ["path", {
                d: "M17 11h1a3 3 0 0 1 0 6h-1"
            }],
            ["path", {
                d: "M9 12v6"
            }],
            ["path", {
                d: "M13 12v6"
            }],
            ["path", {
                d: "M14 7.5c-1 0-1.44.5-3 .5s-2-.5-3-.5-1.72.5-2.5.5a2.5 2.5 0 0 1 0-5c.78 0 1.57.5 2.5.5S9.44 2 11 2s2 1.5 3 1.5 1.72-.5 2.5-.5a2.5 2.5 0 0 1 0 5c-.78 0-1.5-.5-2.5-.5Z"
            }],
            ["path", {
                d: "M5 8v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8"
            }]
        ]],
        r0 = ["svg", h, [
            ["path", {
                d: "M19.4 14.9C20.2 16.4 21 17 21 17H3s3-2 3-9c0-3.3 2.7-6 6-6 .7 0 1.3.1 1.9.3"
            }],
            ["path", {
                d: "M10.3 21a1.94 1.94 0 0 0 3.4 0"
            }],
            ["circle", {
                cx: "18",
                cy: "8",
                r: "3"
            }]
        ]],
        y0 = ["svg", h, [
            ["path", {
                d: "M18.4 12c.8 3.8 2.6 5 2.6 5H3s3-2 3-9c0-3.3 2.7-6 6-6 1.8 0 3.4.8 4.5 2"
            }],
            ["path", {
                d: "M10.3 21a1.94 1.94 0 0 0 3.4 0"
            }],
            ["path", {
                d: "M15 8h6"
            }]
        ]],
        $0 = ["svg", h, [
            ["path", {
                d: "M8.7 3A6 6 0 0 1 18 8a21.3 21.3 0 0 0 .6 5"
            }],
            ["path", {
                d: "M17 17H3s3-2 3-9a4.67 4.67 0 0 1 .3-1.7"
            }],
            ["path", {
                d: "M10.3 21a1.94 1.94 0 0 0 3.4 0"
            }],
            ["path", {
                d: "m2 2 20 20"
            }]
        ]],
        m0 = ["svg", h, [
            ["path", {
                d: "M19.3 14.8C20.1 16.4 21 17 21 17H3s3-2 3-9c0-3.3 2.7-6 6-6 1 0 1.9.2 2.8.7"
            }],
            ["path", {
                d: "M10.3 21a1.94 1.94 0 0 0 3.4 0"
            }],
            ["path", {
                d: "M15 8h6"
            }],
            ["path", {
                d: "M18 5v6"
            }]
        ]],
        H0 = ["svg", h, [
            ["path", {
                d: "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"
            }],
            ["path", {
                d: "M10.3 21a1.94 1.94 0 0 0 3.4 0"
            }],
            ["path", {
                d: "M4 2C2.8 3.7 2 5.7 2 8"
            }],
            ["path", {
                d: "M22 8c0-2.3-.8-4.3-2-6"
            }]
        ]],
        C0 = ["svg", h, [
            ["path", {
                d: "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"
            }],
            ["path", {
                d: "M10.3 21a1.94 1.94 0 0 0 3.4 0"
            }]
        ]],
        u0 = ["svg", h, [
            ["circle", {
                cx: "18.5",
                cy: "17.5",
                r: "3.5"
            }],
            ["circle", {
                cx: "5.5",
                cy: "17.5",
                r: "3.5"
            }],
            ["circle", {
                cx: "15",
                cy: "5",
                r: "1"
            }],
            ["path", {
                d: "M12 17.5V14l-3-3 4-3 2 3h2"
            }]
        ]],
        V0 = ["svg", h, [
            ["rect", {
                x: "14",
                y: "14",
                width: "4",
                height: "6",
                rx: "2"
            }],
            ["rect", {
                x: "6",
                y: "4",
                width: "4",
                height: "6",
                rx: "2"
            }],
            ["path", {
                d: "M6 20h4"
            }],
            ["path", {
                d: "M14 10h4"
            }],
            ["path", {
                d: "M6 14h2v6"
            }],
            ["path", {
                d: "M14 4h2v6"
            }]
        ]],
        w0 = ["svg", h, [
            ["circle", {
                cx: "12",
                cy: "11.9",
                r: "2"
            }],
            ["path", {
                d: "M6.7 3.4c-.9 2.5 0 5.2 2.2 6.7C6.5 9 3.7 9.6 2 11.6"
            }],
            ["path", {
                d: "m8.9 10.1 1.4.8"
            }],
            ["path", {
                d: "M17.3 3.4c.9 2.5 0 5.2-2.2 6.7 2.4-1.2 5.2-.6 6.9 1.5"
            }],
            ["path", {
                d: "m15.1 10.1-1.4.8"
            }],
            ["path", {
                d: "M16.7 20.8c-2.6-.4-4.6-2.6-4.7-5.3-.2 2.6-2.1 4.8-4.7 5.2"
            }],
            ["path", {
                d: "M12 13.9v1.6"
            }],
            ["path", {
                d: "M13.5 5.4c-1-.2-2-.2-3 0"
            }],
            ["path", {
                d: "M17 16.4c.7-.7 1.2-1.6 1.5-2.5"
            }],
            ["path", {
                d: "M5.5 13.9c.3.9.8 1.8 1.5 2.5"
            }]
        ]],
        x0 = ["svg", h, [
            ["path", {
                d: "M16 7h.01"
            }],
            ["path", {
                d: "M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20"
            }],
            ["path", {
                d: "m20 7 2 .5-2 .5"
            }],
            ["path", {
                d: "M10 18v3"
            }],
            ["path", {
                d: "M14 17.75V21"
            }],
            ["path", {
                d: "M7 18a6 6 0 0 0 3.84-10.61"
            }]
        ]],
        L0 = ["svg", h, [
            ["path", {
                d: "M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042.348-1.97M7.48 20.364l3.126-17.727"
            }]
        ]],
        S0 = ["svg", h, [
            ["path", {
                d: "M3 3h18"
            }],
            ["path", {
                d: "M20 7H8"
            }],
            ["path", {
                d: "M20 11H8"
            }],
            ["path", {
                d: "M10 19h10"
            }],
            ["path", {
                d: "M8 15h12"
            }],
            ["path", {
                d: "M4 3v14"
            }],
            ["circle", {
                cx: "4",
                cy: "19",
                r: "2"
            }]
        ]],
        A0 = ["svg", h, [
            ["rect", {
                width: "7",
                height: "7",
                x: "14",
                y: "3",
                rx: "1"
            }],
            ["path", {
                d: "M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3"
            }]
        ]],
        f0 = ["svg", h, [
            ["path", {
                d: "m7 7 10 10-5 5V2l5 5L7 17"
            }],
            ["line", {
                x1: "18",
                x2: "21",
                y1: "12",
                y2: "12"
            }],
            ["line", {
                x1: "3",
                x2: "6",
                y1: "12",
                y2: "12"
            }]
        ]],
        k0 = ["svg", h, [
            ["path", {
                d: "m17 17-5 5V12l-5 5"
            }],
            ["path", {
                d: "m2 2 20 20"
            }],
            ["path", {
                d: "M14.5 9.5 17 7l-5-5v4.5"
            }]
        ]],
        F0 = ["svg", h, [
            ["path", {
                d: "m7 7 10 10-5 5V2l5 5L7 17"
            }],
            ["path", {
                d: "M20.83 14.83a4 4 0 0 0 0-5.66"
            }],
            ["path", {
                d: "M18 12h.01"
            }]
        ]],
        Z0 = ["svg", h, [
            ["path", {
                d: "m7 7 10 10-5 5V2l5 5L7 17"
            }]
        ]],
        P0 = ["svg", h, [
            ["path", {
                d: "M14 12a4 4 0 0 0 0-8H6v8"
            }],
            ["path", {
                d: "M15 20a4 4 0 0 0 0-8H6v8Z"
            }]
        ]],
        B0 = ["svg", h, [
            ["circle", {
                cx: "11",
                cy: "13",
                r: "9"
            }],
            ["path", {
                d: "m19.5 9.5 1.8-1.8a2.4 2.4 0 0 0 0-3.4l-1.6-1.6a2.4 2.4 0 0 0-3.4 0l-1.8 1.8"
            }],
            ["path", {
                d: "m22 2-1.5 1.5"
            }]
        ]],
        D0 = ["svg", h, [
            ["path", {
                d: "M17 10c.7-.7 1.69 0 2.5 0a2.5 2.5 0 1 0 0-5 .5.5 0 0 1-.5-.5 2.5 2.5 0 1 0-5 0c0 .81.7 1.8 0 2.5l-7 7c-.7.7-1.69 0-2.5 0a2.5 2.5 0 0 0 0 5c.28 0 .5.22.5.5a2.5 2.5 0 1 0 5 0c0-.81-.7-1.8 0-2.5Z"
            }]
        ]],
        T0 = ["svg", h, [
            ["path", {
                d: "M2 16V4a2 2 0 0 1 2-2h11"
            }],
            ["path", {
                d: "M5 14H4a2 2 0 1 0 0 4h1"
            }],
            ["path", {
                d: "M22 18H11a2 2 0 1 0 0 4h11V6H11a2 2 0 0 0-2 2v12"
            }]
        ]],
        z0 = ["svg", h, [
            ["path", {
                d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"
            }],
            ["path", {
                d: "M12 13V7"
            }],
            ["path", {
                d: "m9 10 3 3 3-3"
            }]
        ]],
        R0 = ["svg", h, [
            ["path", {
                d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H14"
            }],
            ["path", {
                d: "M20 8v14H6.5a2.5 2.5 0 0 1 0-5H20"
            }],
            ["circle", {
                cx: "14",
                cy: "8",
                r: "2"
            }],
            ["path", {
                d: "m20 2-4.5 4.5"
            }],
            ["path", {
                d: "m19 3 1 1"
            }]
        ]],
        b0 = ["svg", h, [
            ["path", {
                d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H10"
            }],
            ["path", {
                d: "M20 15v7H6.5a2.5 2.5 0 0 1 0-5H20"
            }],
            ["rect", {
                width: "8",
                height: "5",
                x: "12",
                y: "6",
                rx: "1"
            }],
            ["path", {
                d: "M18 6V4a2 2 0 1 0-4 0v2"
            }]
        ]],
        U0 = ["svg", h, [
            ["path", {
                d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"
            }],
            ["polyline", {
                points: "10 2 10 10 13 7 16 10 16 2"
            }]
        ]],
        O0 = ["svg", h, [
            ["path", {
                d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"
            }],
            ["path", {
                d: "M9 10h6"
            }]
        ]],
        q0 = ["svg", h, [
            ["path", {
                d: "M8 3H2v15h7c1.7 0 3 1.3 3 3V7c0-2.2-1.8-4-4-4Z"
            }],
            ["path", {
                d: "m16 12 2 2 4-4"
            }],
            ["path", {
                d: "M22 6V3h-6c-2.2 0-4 1.8-4 4v14c0-1.7 1.3-3 3-3h7v-2.3"
            }]
        ]],
        G0 = ["svg", h, [
            ["path", {
                d: "M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"
            }],
            ["path", {
                d: "M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"
            }]
        ]],
        W0 = ["svg", h, [
            ["path", {
                d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"
            }],
            ["path", {
                d: "M9 10h6"
            }],
            ["path", {
                d: "M12 7v6"
            }]
        ]],
        E0 = ["svg", h, [
            ["path", {
                d: "M20 22h-2"
            }],
            ["path", {
                d: "M20 15v2h-2"
            }],
            ["path", {
                d: "M4 19.5V15"
            }],
            ["path", {
                d: "M20 8v3"
            }],
            ["path", {
                d: "M18 2h2v2"
            }],
            ["path", {
                d: "M4 11V9"
            }],
            ["path", {
                d: "M12 2h2"
            }],
            ["path", {
                d: "M12 22h2"
            }],
            ["path", {
                d: "M12 17h2"
            }],
            ["path", {
                d: "M8 22H6.5a2.5 2.5 0 0 1 0-5H8"
            }],
            ["path", {
                d: "M4 5v-.5A2.5 2.5 0 0 1 6.5 2H8"
            }]
        ]],
        I0 = ["svg", h, [
            ["path", {
                d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2"
            }],
            ["path", {
                d: "M18 2h2v20H6.5a2.5 2.5 0 0 1 0-5H20"
            }],
            ["path", {
                d: "M12 13V7"
            }],
            ["path", {
                d: "m9 10 3-3 3 3"
            }],
            ["path", {
                d: "m9 5 3-3 3 3"
            }]
        ]],
        X0 = ["svg", h, [
            ["path", {
                d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"
            }],
            ["path", {
                d: "M12 13V7"
            }],
            ["path", {
                d: "m9 10 3-3 3 3"
            }]
        ]],
        N0 = ["svg", h, [
            ["path", {
                d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"
            }],
            ["path", {
                d: "m14.5 7-5 5"
            }],
            ["path", {
                d: "m9.5 7 5 5"
            }]
        ]],
        K0 = ["svg", h, [
            ["path", {
                d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"
            }]
        ]],
        J0 = ["svg", h, [
            ["path", {
                d: "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z"
            }],
            ["path", {
                d: "m9 10 2 2 4-4"
            }]
        ]],
        j0 = ["svg", h, [
            ["path", {
                d: "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"
            }],
            ["line", {
                x1: "15",
                x2: "9",
                y1: "10",
                y2: "10"
            }]
        ]],
        Q0 = ["svg", h, [
            ["path", {
                d: "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"
            }],
            ["line", {
                x1: "12",
                x2: "12",
                y1: "7",
                y2: "13"
            }],
            ["line", {
                x1: "15",
                x2: "9",
                y1: "10",
                y2: "10"
            }]
        ]],
        Y0 = ["svg", h, [
            ["path", {
                d: "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z"
            }],
            ["path", {
                d: "m14.5 7.5-5 5"
            }],
            ["path", {
                d: "m9.5 7.5 5 5"
            }]
        ]],
        _0 = ["svg", h, [
            ["path", {
                d: "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"
            }]
        ]],
        aa = ["svg", h, [
            ["path", {
                d: "M4 9V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4"
            }],
            ["path", {
                d: "M8 8v1"
            }],
            ["path", {
                d: "M12 8v1"
            }],
            ["path", {
                d: "M16 8v1"
            }],
            ["rect", {
                width: "20",
                height: "12",
                x: "2",
                y: "9",
                rx: "2"
            }],
            ["circle", {
                cx: "8",
                cy: "15",
                r: "2"
            }],
            ["circle", {
                cx: "16",
                cy: "15",
                r: "2"
            }]
        ]],
        ha = ["svg", h, [
            ["path", {
                d: "M12 8V4H8"
            }],
            ["rect", {
                width: "16",
                height: "12",
                x: "4",
                y: "8",
                rx: "2"
            }],
            ["path", {
                d: "M2 14h2"
            }],
            ["path", {
                d: "M20 14h2"
            }],
            ["path", {
                d: "M15 13v2"
            }],
            ["path", {
                d: "M9 13v2"
            }]
        ]],
        ta = ["svg", h, [
            ["path", {
                d: "M5 3a2 2 0 0 0-2 2"
            }],
            ["path", {
                d: "M19 3a2 2 0 0 1 2 2"
            }],
            ["path", {
                d: "M21 19a2 2 0 0 1-2 2"
            }],
            ["path", {
                d: "M5 21a2 2 0 0 1-2-2"
            }],
            ["path", {
                d: "M9 3h1"
            }],
            ["path", {
                d: "M9 21h1"
            }],
            ["path", {
                d: "M14 3h1"
            }],
            ["path", {
                d: "M14 21h1"
            }],
            ["path", {
                d: "M3 9v1"
            }],
            ["path", {
                d: "M21 9v1"
            }],
            ["path", {
                d: "M3 14v1"
            }],
            ["path", {
                d: "M21 14v1"
            }]
        ]],
        da = ["svg", h, [
            ["path", {
                d: "M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"
            }],
            ["path", {
                d: "m3.3 7 8.7 5 8.7-5"
            }],
            ["path", {
                d: "M12 22V12"
            }]
        ]],
        ca = ["svg", h, [
            ["path", {
                d: "M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z"
            }],
            ["path", {
                d: "m7 16.5-4.74-2.85"
            }],
            ["path", {
                d: "m7 16.5 5-3"
            }],
            ["path", {
                d: "M7 16.5v5.17"
            }],
            ["path", {
                d: "M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z"
            }],
            ["path", {
                d: "m17 16.5-5-3"
            }],
            ["path", {
                d: "m17 16.5 4.74-2.85"
            }],
            ["path", {
                d: "M17 16.5v5.17"
            }],
            ["path", {
                d: "M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z"
            }],
            ["path", {
                d: "M12 8 7.26 5.15"
            }],
            ["path", {
                d: "m12 8 4.74-2.85"
            }],
            ["path", {
                d: "M12 13.5V8"
            }]
        ]],
        na = ["svg", h, [
            ["path", {
                d: "M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1"
            }],
            ["path", {
                d: "M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1"
            }]
        ]],
        ia = ["svg", h, [
            ["path", {
                d: "M16 3h3v18h-3"
            }],
            ["path", {
                d: "M8 21H5V3h3"
            }]
        ]],
        pa = ["svg", h, [
            ["path", {
                d: "M12 4.5a2.5 2.5 0 0 0-4.96-.46 2.5 2.5 0 0 0-1.98 3 2.5 2.5 0 0 0-1.32 4.24 3 3 0 0 0 .34 5.58 2.5 2.5 0 0 0 2.96 3.08 2.5 2.5 0 0 0 4.91.05L12 20V4.5Z"
            }],
            ["path", {
                d: "M16 8V5c0-1.1.9-2 2-2"
            }],
            ["path", {
                d: "M12 13h4"
            }],
            ["path", {
                d: "M12 18h6a2 2 0 0 1 2 2v1"
            }],
            ["path", {
                d: "M12 8h8"
            }],
            ["path", {
                d: "M20.5 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"
            }],
            ["path", {
                d: "M16.5 13a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"
            }],
            ["path", {
                d: "M20.5 21a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"
            }],
            ["path", {
                d: "M18.5 3a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"
            }]
        ]],
        ea = ["svg", h, [
            ["circle", {
                cx: "12",
                cy: "12",
                r: "3"
            }],
            ["path", {
                d: "M12 4.5a2.5 2.5 0 0 0-4.96-.46 2.5 2.5 0 0 0-1.98 3 2.5 2.5 0 0 0-1.32 4.24 3 3 0 0 0 .34 5.58 2.5 2.5 0 0 0 2.96 3.08A2.5 2.5 0 0 0 12 19.5a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 12 4.5"
            }],
            ["path", {
                d: "m15.7 10.4-.9.4"
            }],
            ["path", {
                d: "m9.2 13.2-.9.4"
            }],
            ["path", {
                d: "m13.6 15.7-.4-.9"
            }],
            ["path", {
                d: "m10.8 9.2-.4-.9"
            }],
            ["path", {
                d: "m15.7 13.5-.9-.4"
            }],
            ["path", {
                d: "m9.2 10.9-.9-.4"
            }],
            ["path", {
                d: "m10.5 15.7.4-.9"
            }],
            ["path", {
                d: "m13.1 9.2.4-.9"
            }]
        ]],
        Ma = ["svg", h, [
            ["path", {
                d: "M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"
            }],
            ["path", {
                d: "M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"
            }]
        ]],
        la = ["svg", h, [
            ["rect", {
                width: "20",
                height: "14",
                x: "2",
                y: "7",
                rx: "2",
                ry: "2"
            }],
            ["path", {
                d: "M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"
            }]
        ]],
        va = ["svg", h, [
            ["rect", {
                x: "8",
                y: "8",
                width: "8",
                height: "8",
                rx: "2"
            }],
            ["path", {
                d: "M4 10a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2"
            }],
            ["path", {
                d: "M14 20a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2"
            }]
        ]],
        oa = ["svg", h, [
            ["path", {
                d: "m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08"
            }],
            ["path", {
                d: "M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z"
            }]
        ]],
        sa = ["svg", h, [
            ["path", {
                d: "M15 7.13V6a3 3 0 0 0-5.14-2.1L8 2"
            }],
            ["path", {
                d: "M14.12 3.88 16 2"
            }],
            ["path", {
                d: "M22 13h-4v-2a4 4 0 0 0-4-4h-1.3"
            }],
            ["path", {
                d: "M20.97 5c0 2.1-1.6 3.8-3.5 4"
            }],
            ["path", {
                d: "m2 2 20 20"
            }],
            ["path", {
                d: "M7.7 7.7A4 4 0 0 0 6 11v3a6 6 0 0 0 11.13 3.13"
            }],
            ["path", {
                d: "M12 20v-8"
            }],
            ["path", {
                d: "M6 13H2"
            }],
            ["path", {
                d: "M3 21c0-2.1 1.7-3.9 3.8-4"
            }]
        ]],
        ga = ["svg", h, [
            ["path", {
                d: "m8 2 1.88 1.88"
            }],
            ["path", {
                d: "M14.12 3.88 16 2"
            }],
            ["path", {
                d: "M9 7.13v-1a3.003 3.003 0 1 1 6 0v1"
            }],
            ["path", {
                d: "M18 11a4 4 0 0 0-4-4h-4a4 4 0 0 0-4 4v3a6.1 6.1 0 0 0 2 4.5"
            }],
            ["path", {
                d: "M6.53 9C4.6 8.8 3 7.1 3 5"
            }],
            ["path", {
                d: "M6 13H2"
            }],
            ["path", {
                d: "M3 21c0-2.1 1.7-3.9 3.8-4"
            }],
            ["path", {
                d: "M20.97 5c0 2.1-1.6 3.8-3.5 4"
            }],
            ["path", {
                d: "m12 12 8 5-8 5Z"
            }]
        ]],
        ra = ["svg", h, [
            ["path", {
                d: "m8 2 1.88 1.88"
            }],
            ["path", {
                d: "M14.12 3.88 16 2"
            }],
            ["path", {
                d: "M9 7.13v-1a3.003 3.003 0 1 1 6 0v1"
            }],
            ["path", {
                d: "M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6"
            }],
            ["path", {
                d: "M12 20v-9"
            }],
            ["path", {
                d: "M6.53 9C4.6 8.8 3 7.1 3 5"
            }],
            ["path", {
                d: "M6 13H2"
            }],
            ["path", {
                d: "M3 21c0-2.1 1.7-3.9 3.8-4"
            }],
            ["path", {
                d: "M20.97 5c0 2.1-1.6 3.8-3.5 4"
            }],
            ["path", {
                d: "M22 13h-4"
            }],
            ["path", {
                d: "M17.2 17c2.1.1 3.8 1.9 3.8 4"
            }]
        ]],
        ya = ["svg", h, [
            ["path", {
                d: "M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"
            }],
            ["path", {
                d: "M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"
            }],
            ["path", {
                d: "M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"
            }],
            ["path", {
                d: "M10 6h4"
            }],
            ["path", {
                d: "M10 10h4"
            }],
            ["path", {
                d: "M10 14h4"
            }],
            ["path", {
                d: "M10 18h4"
            }]
        ]],
        $a = ["svg", h, [
            ["rect", {
                width: "16",
                height: "20",
                x: "4",
                y: "2",
                rx: "2",
                ry: "2"
            }],
            ["path", {
                d: "M9 22v-4h6v4"
            }],
            ["path", {
                d: "M8 6h.01"
            }],
            ["path", {
                d: "M16 6h.01"
            }],
            ["path", {
                d: "M12 6h.01"
            }],
            ["path", {
                d: "M12 10h.01"
            }],
            ["path", {
                d: "M12 14h.01"
            }],
            ["path", {
                d: "M16 10h.01"
            }],
            ["path", {
                d: "M16 14h.01"
            }],
            ["path", {
                d: "M8 10h.01"
            }],
            ["path", {
                d: "M8 14h.01"
            }]
        ]],
        ma = ["svg", h, [
            ["path", {
                d: "M4 6 2 7"
            }],
            ["path", {
                d: "M10 6h4"
            }],
            ["path", {
                d: "m22 7-2-1"
            }],
            ["rect", {
                width: "16",
                height: "16",
                x: "4",
                y: "3",
                rx: "2"
            }],
            ["path", {
                d: "M4 11h16"
            }],
            ["path", {
                d: "M8 15h.01"
            }],
            ["path", {
                d: "M16 15h.01"
            }],
            ["path", {
                d: "M6 19v2"
            }],
            ["path", {
                d: "M18 21v-2"
            }]
        ]],
        Ha = ["svg", h, [
            ["path", {
                d: "M8 6v6"
            }],
            ["path", {
                d: "M15 6v6"
            }],
            ["path", {
                d: "M2 12h19.6"
            }],
            ["path", {
                d: "M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3"
            }],
            ["circle", {
                cx: "7",
                cy: "18",
                r: "2"
            }],
            ["path", {
                d: "M9 18h5"
            }],
            ["circle", {
                cx: "16",
                cy: "18",
                r: "2"
            }]
        ]],
        Ca = ["svg", h, [
            ["path", {
                d: "M10 3h.01"
            }],
            ["path", {
                d: "M14 2h.01"
            }],
            ["path", {
                d: "m2 9 20-5"
            }],
            ["path", {
                d: "M12 12V6.5"
            }],
            ["rect", {
                width: "16",
                height: "10",
                x: "4",
                y: "12",
                rx: "3"
            }],
            ["path", {
                d: "M9 12v5"
            }],
            ["path", {
                d: "M15 12v5"
            }],
            ["path", {
                d: "M4 17h16"
            }]
        ]],
        ua = ["svg", h, [
            ["path", {
                d: "M4 9a2 2 0 0 1-2-2V5h6v2a2 2 0 0 1-2 2Z"
            }],
            ["path", {
                d: "M3 5V3"
            }],
            ["path", {
                d: "M7 5V3"
            }],
            ["path", {
                d: "M19 15V6.5a3.5 3.5 0 0 0-7 0v11a3.5 3.5 0 0 1-7 0V9"
            }],
            ["path", {
                d: "M17 21v-2"
            }],
            ["path", {
                d: "M21 21v-2"
            }],
            ["path", {
                d: "M22 19h-6v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2Z"
            }]
        ]],
        Va = ["svg", h, [
            ["circle", {
                cx: "9",
                cy: "7",
                r: "2"
            }],
            ["path", {
                d: "M7.2 7.9 3 11v9c0 .6.4 1 1 1h16c.6 0 1-.4 1-1v-9c0-2-3-6-7-8l-3.6 2.6"
            }],
            ["path", {
                d: "M16 13H3"
            }],
            ["path", {
                d: "M16 17H3"
            }]
        ]],
        wa = ["svg", h, [
            ["path", {
                d: "M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8"
            }],
            ["path", {
                d: "M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1"
            }],
            ["path", {
                d: "M2 21h20"
            }],
            ["path", {
                d: "M7 8v2"
            }],
            ["path", {
                d: "M12 8v2"
            }],
            ["path", {
                d: "M17 8v2"
            }],
            ["path", {
                d: "M7 4h.01"
            }],
            ["path", {
                d: "M12 4h.01"
            }],
            ["path", {
                d: "M17 4h.01"
            }]
        ]],
        xa = ["svg", h, [
            ["rect", {
                width: "16",
                height: "20",
                x: "4",
                y: "2",
                rx: "2"
            }],
            ["line", {
                x1: "8",
                x2: "16",
                y1: "6",
                y2: "6"
            }],
            ["line", {
                x1: "16",
                x2: "16",
                y1: "14",
                y2: "18"
            }],
            ["path", {
                d: "M16 10h.01"
            }],
            ["path", {
                d: "M12 10h.01"
            }],
            ["path", {
                d: "M8 10h.01"
            }],
            ["path", {
                d: "M12 14h.01"
            }],
            ["path", {
                d: "M8 14h.01"
            }],
            ["path", {
                d: "M12 18h.01"
            }],
            ["path", {
                d: "M8 18h.01"
            }]
        ]],
        La = ["svg", h, [
            ["path", {
                d: "M21 14V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8"
            }],
            ["line", {
                x1: "16",
                x2: "16",
                y1: "2",
                y2: "6"
            }],
            ["line", {
                x1: "8",
                x2: "8",
                y1: "2",
                y2: "6"
            }],
            ["line", {
                x1: "3",
                x2: "21",
                y1: "10",
                y2: "10"
            }],
            ["path", {
                d: "m16 20 2 2 4-4"
            }]
        ]],
        Sa = ["svg", h, [
            ["rect", {
                width: "18",
                height: "18",
                x: "3",
                y: "4",
                rx: "2",
                ry: "2"
            }],
            ["line", {
                x1: "16",
                x2: "16",
                y1: "2",
                y2: "6"
            }],
            ["line", {
                x1: "8",
                x2: "8",
                y1: "2",
                y2: "6"
            }],
            ["line", {
                x1: "3",
                x2: "21",
                y1: "10",
                y2: "10"
            }],
            ["path", {
                d: "m9 16 2 2 4-4"
            }]
        ]],
        Aa = ["svg", h, [
            ["path", {
                d: "M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"
            }],
            ["path", {
                d: "M16 2v4"
            }],
            ["path", {
                d: "M8 2v4"
            }],
            ["path", {
                d: "M3 10h5"
            }],
            ["path", {
                d: "M17.5 17.5 16 16.25V14"
            }],
            ["path", {
                d: "M22 16a6 6 0 1 1-12 0 6 6 0 0 1 12 0Z"
            }]
        ]],
        fa = ["svg", h, [
            ["rect", {
                width: "18",
                height: "18",
                x: "3",
                y: "4",
                rx: "2",
                ry: "2"
            }],
            ["line", {
                x1: "16",
                x2: "16",
                y1: "2",
                y2: "6"
            }],
            ["line", {
                x1: "8",
                x2: "8",
                y1: "2",
                y2: "6"
            }],
            ["line", {
                x1: "3",
                x2: "21",
                y1: "10",
                y2: "10"
            }],
            ["path", {
                d: "M8 14h.01"
            }],
            ["path", {
                d: "M12 14h.01"
            }],
            ["path", {
                d: "M16 14h.01"
            }],
            ["path", {
                d: "M8 18h.01"
            }],
            ["path", {
                d: "M12 18h.01"
            }],
            ["path", {
                d: "M16 18h.01"
            }]
        ]],
        ka = ["svg", h, [
            ["path", {
                d: "M21 10V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h7"
            }],
            ["path", {
                d: "M16 2v4"
            }],
            ["path", {
                d: "M8 2v4"
            }],
            ["path", {
                d: "M3 10h18"
            }],
            ["path", {
                d: "M21.29 14.7a2.43 2.43 0 0 0-2.65-.52c-.3.12-.57.3-.8.53l-.34.34-.35-.34a2.43 2.43 0 0 0-2.65-.53c-.3.12-.56.3-.79.53-.95.94-1 2.53.2 3.74L17.5 22l3.6-3.55c1.2-1.21 1.14-2.8.19-3.74Z"
            }]
        ]],
        Fa = ["svg", h, [
            ["path", {
                d: "M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8"
            }],
            ["line", {
                x1: "16",
                x2: "16",
                y1: "2",
                y2: "6"
            }],
            ["line", {
                x1: "8",
                x2: "8",
                y1: "2",
                y2: "6"
            }],
            ["line", {
                x1: "3",
                x2: "21",
                y1: "10",
                y2: "10"
            }],
            ["line", {
                x1: "16",
                x2: "22",
                y1: "19",
                y2: "19"
            }]
        ]],
        Za = ["svg", h, [
            ["path", {
                d: "M4.18 4.18A2 2 0 0 0 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 1.82-1.18"
            }],
            ["path", {
                d: "M21 15.5V6a2 2 0 0 0-2-2H9.5"
            }],
            ["path", {
                d: "M16 2v4"
            }],
            ["path", {
                d: "M3 10h7"
            }],
            ["path", {
                d: "M21 10h-5.5"
            }],
            ["line", {
                x1: "2",
                x2: "22",
                y1: "2",
                y2: "22"
            }]
        ]],
        Pa = ["svg", h, [
            ["path", {
                d: "M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8"
            }],
            ["line", {
                x1: "16",
                x2: "16",
                y1: "2",
                y2: "6"
            }],
            ["line", {
                x1: "8",
                x2: "8",
                y1: "2",
                y2: "6"
            }],
            ["line", {
                x1: "3",
                x2: "21",
                y1: "10",
                y2: "10"
            }],
            ["line", {
                x1: "19",
                x2: "19",
                y1: "16",
                y2: "22"
            }],
            ["line", {
                x1: "16",
                x2: "22",
                y1: "19",
                y2: "19"
            }]
        ]],
        Ba = ["svg", h, [
            ["rect", {
                width: "18",
                height: "18",
                x: "3",
                y: "4",
                rx: "2",
                ry: "2"
            }],
            ["line", {
                x1: "16",
                x2: "16",
                y1: "2",
                y2: "6"
            }],
            ["line", {
                x1: "8",
                x2: "8",
                y1: "2",
                y2: "6"
            }],
            ["line", {
                x1: "3",
                x2: "21",
                y1: "10",
                y2: "10"
            }],
            ["path", {
                d: "M17 14h-6"
            }],
            ["path", {
                d: "M13 18H7"
            }],
            ["path", {
                d: "M7 14h.01"
            }],
            ["path", {
                d: "M17 18h.01"
            }]
        ]],
        Da = ["svg", h, [
            ["path", {
                d: "M21 12V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h7.5"
            }],
            ["path", {
                d: "M16 2v4"
            }],
            ["path", {
                d: "M8 2v4"
            }],
            ["path", {
                d: "M3 10h18"
            }],
            ["path", {
                d: "M18 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6v0Z"
            }],
            ["path", {
                d: "m22 22-1.5-1.5"
            }]
        ]],
        Ta = ["svg", h, [
            ["path", {
                d: "M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8"
            }],
            ["line", {
                x1: "16",
                x2: "16",
                y1: "2",
                y2: "6"
            }],
            ["line", {
                x1: "8",
                x2: "8",
                y1: "2",
                y2: "6"
            }],
            ["line", {
                x1: "3",
                x2: "21",
                y1: "10",
                y2: "10"
            }],
            ["line", {
                x1: "17",
                x2: "22",
                y1: "17",
                y2: "22"
            }],
            ["line", {
                x1: "17",
                x2: "22",
                y1: "22",
                y2: "17"
            }]
        ]],
        za = ["svg", h, [
            ["rect", {
                width: "18",
                height: "18",
                x: "3",
                y: "4",
                rx: "2",
                ry: "2"
            }],
            ["line", {
                x1: "16",
                x2: "16",
                y1: "2",
                y2: "6"
            }],
            ["line", {
                x1: "8",
                x2: "8",
                y1: "2",
                y2: "6"
            }],
            ["line", {
                x1: "3",
                x2: "21",
                y1: "10",
                y2: "10"
            }],
            ["line", {
                x1: "10",
                x2: "14",
                y1: "14",
                y2: "18"
            }],
            ["line", {
                x1: "14",
                x2: "10",
                y1: "14",
                y2: "18"
            }]
        ]],
        Ra = ["svg", h, [
            ["rect", {
                width: "18",
                height: "18",
                x: "3",
                y: "4",
                rx: "2",
                ry: "2"
            }],
            ["line", {
                x1: "16",
                x2: "16",
                y1: "2",
                y2: "6"
            }],
            ["line", {
                x1: "8",
                x2: "8",
                y1: "2",
                y2: "6"
            }],
            ["line", {
                x1: "3",
                x2: "21",
                y1: "10",
                y2: "10"
            }]
        ]],
        ba = ["svg", h, [
            ["line", {
                x1: "2",
                x2: "22",
                y1: "2",
                y2: "22"
            }],
            ["path", {
                d: "M7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16"
            }],
            ["path", {
                d: "M9.5 4h5L17 7h3a2 2 0 0 1 2 2v7.5"
            }],
            ["path", {
                d: "M14.121 15.121A3 3 0 1 1 9.88 10.88"
            }]
        ]],
        Ua = ["svg", h, [
            ["path", {
                d: "M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"
            }],
            ["circle", {
                cx: "12",
                cy: "13",
                r: "3"
            }]
        ]],
        Oa = ["svg", h, [
            ["path", {
                d: "M9 5v4"
            }],
            ["rect", {
                width: "4",
                height: "6",
                x: "7",
                y: "9",
                rx: "1"
            }],
            ["path", {
                d: "M9 15v2"
            }],
            ["path", {
                d: "M17 3v2"
            }],
            ["rect", {
                width: "4",
                height: "8",
                x: "15",
                y: "5",
                rx: "1"
            }],
            ["path", {
                d: "M17 13v3"
            }],
            ["path", {
                d: "M3 3v18h18"
            }]
        ]],
        qa = ["svg", h, [
            ["path", {
                d: "M5.7 21a2 2 0 0 1-3.5-2l8.6-14a6 6 0 0 1 10.4 6 2 2 0 1 1-3.464-2 2 2 0 1 0-3.464-2Z"
            }],
            ["path", {
                d: "M17.75 7 15 2.1"
            }],
            ["path", {
                d: "M10.9 4.8 13 9"
            }],
            ["path", {
                d: "m7.9 9.7 2 4.4"
            }],
            ["path", {
                d: "M4.9 14.7 7 18.9"
            }]
        ]],
        Ga = ["svg", h, [
            ["path", {
                d: "m8.5 8.5-1 1a4.95 4.95 0 0 0 7 7l1-1"
            }],
            ["path", {
                d: "M11.843 6.187A4.947 4.947 0 0 1 16.5 7.5a4.947 4.947 0 0 1 1.313 4.657"
            }],
            ["path", {
                d: "M14 16.5V14"
            }],
            ["path", {
                d: "M14 6.5v1.843"
            }],
            ["path", {
                d: "M10 10v7.5"
            }],
            ["path", {
                d: "m16 7 1-5 1.367.683A3 3 0 0 0 19.708 3H21v1.292a3 3 0 0 0 .317 1.341L22 7l-5 1"
            }],
            ["path", {
                d: "m8 17-1 5-1.367-.683A3 3 0 0 0 4.292 21H3v-1.292a3 3 0 0 0-.317-1.341L2 17l5-1"
            }],
            ["line", {
                x1: "2",
                x2: "22",
                y1: "2",
                y2: "22"
            }]
        ]],
        Wa = ["svg", h, [
            ["path", {
                d: "m9.5 7.5-2 2a4.95 4.95 0 1 0 7 7l2-2a4.95 4.95 0 1 0-7-7Z"
            }],
            ["path", {
                d: "M14 6.5v10"
            }],
            ["path", {
                d: "M10 7.5v10"
            }],
            ["path", {
                d: "m16 7 1-5 1.37.68A3 3 0 0 0 19.7 3H21v1.3c0 .46.1.92.32 1.33L22 7l-5 1"
            }],
            ["path", {
                d: "m8 17-1 5-1.37-.68A3 3 0 0 0 4.3 21H3v-1.3a3 3 0 0 0-.32-1.33L2 17l5-1"
            }]
        ]],
        Ea = ["svg", h, [
            ["path", {
                d: "m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8"
            }],
            ["path", {
                d: "M7 14h.01"
            }],
            ["path", {
                d: "M17 14h.01"
            }],
            ["rect", {
                width: "18",
                height: "8",
                x: "3",
                y: "10",
                rx: "2"
            }],
            ["path", {
                d: "M5 18v2"
            }],
            ["path", {
                d: "M19 18v2"
            }]
        ]],
        Ia = ["svg", h, [
            ["path", {
                d: "M10 2h4"
            }],
            ["path", {
                d: "m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8"
            }],
            ["path", {
                d: "M7 14h.01"
            }],
            ["path", {
                d: "M17 14h.01"
            }],
            ["rect", {
                width: "18",
                height: "8",
                x: "3",
                y: "10",
                rx: "2"
            }],
            ["path", {
                d: "M5 18v2"
            }],
            ["path", {
                d: "M19 18v2"
            }]
        ]],
        Xa = ["svg", h, [
            ["path", {
                d: "M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"
            }],
            ["circle", {
                cx: "7",
                cy: "17",
                r: "2"
            }],
            ["path", {
                d: "M9 17h6"
            }],
            ["circle", {
                cx: "17",
                cy: "17",
                r: "2"
            }]
        ]],
        Na = ["svg", h, [
            ["rect", {
                width: "4",
                height: "4",
                x: "2",
                y: "9"
            }],
            ["rect", {
                width: "4",
                height: "10",
                x: "10",
                y: "9"
            }],
            ["path", {
                d: "M18 19V9a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v8a2 2 0 0 0 2 2h2"
            }],
            ["circle", {
                cx: "8",
                cy: "19",
                r: "2"
            }],
            ["path", {
                d: "M10 19h12v-2"
            }]
        ]],
        Ka = ["svg", h, [
            ["path", {
                d: "M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7zM8.64 14l-2.05-2.04M15.34 15l-2.46-2.46"
            }],
            ["path", {
                d: "M22 9s-1.33-2-3.5-2C16.86 7 15 9 15 9s1.33 2 3.5 2S22 9 22 9z"
            }],
            ["path", {
                d: "M15 2s-2 1.33-2 3.5S15 9 15 9s2-1.84 2-3.5C17 3.33 15 2 15 2z"
            }]
        ]],
        Ja = ["svg", h, [
            ["circle", {
                cx: "7",
                cy: "12",
                r: "3"
            }],
            ["path", {
                d: "M10 9v6"
            }],
            ["circle", {
                cx: "17",
                cy: "12",
                r: "3"
            }],
            ["path", {
                d: "M14 7v8"
            }]
        ]],
        ja = ["svg", h, [
            ["path", {
                d: "m3 15 4-8 4 8"
            }],
            ["path", {
                d: "M4 13h6"
            }],
            ["circle", {
                cx: "18",
                cy: "12",
                r: "3"
            }],
            ["path", {
                d: "M21 9v6"
            }]
        ]],
        Qa = ["svg", h, [
            ["path", {
                d: "m3 15 4-8 4 8"
            }],
            ["path", {
                d: "M4 13h6"
            }],
            ["path", {
                d: "M15 11h4.5a2 2 0 0 1 0 4H15V7h4a2 2 0 0 1 0 4"
            }]
        ]],
        Ya = ["svg", h, [
            ["rect", {
                width: "20",
                height: "16",
                x: "2",
                y: "4",
                rx: "2"
            }],
            ["circle", {
                cx: "8",
                cy: "10",
                r: "2"
            }],
            ["path", {
                d: "M8 12h8"
            }],
            ["circle", {
                cx: "16",
                cy: "10",
                r: "2"
            }],
            ["path", {
                d: "m6 20 .7-2.9A1.4 1.4 0 0 1 8.1 16h7.8a1.4 1.4 0 0 1 1.4 1l.7 3"
            }]
        ]],
        _a = ["svg", h, [
            ["path", {
                d: "M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"
            }],
            ["path", {
                d: "M2 12a9 9 0 0 1 8 8"
            }],
            ["path", {
                d: "M2 16a5 5 0 0 1 4 4"
            }],
            ["line", {
                x1: "2",
                x2: "2.01",
                y1: "20",
                y2: "20"
            }]
        ]],
        ah = ["svg", h, [
            ["path", {
                d: "M22 20v-9H2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2Z"
            }],
            ["path", {
                d: "M18 11V4H6v7"
            }],
            ["path", {
                d: "M15 22v-4a3 3 0 0 0-3-3v0a3 3 0 0 0-3 3v4"
            }],
            ["path", {
                d: "M22 11V9"
            }],
            ["path", {
                d: "M2 11V9"
            }],
            ["path", {
                d: "M6 4V2"
            }],
            ["path", {
                d: "M18 4V2"
            }],
            ["path", {
                d: "M10 4V2"
            }],
            ["path", {
                d: "M14 4V2"
            }]
        ]],
        hh = ["svg", h, [
            ["path", {
                d: "M12 5c.67 0 1.35.09 2 .26 1.78-2 5.03-2.84 6.42-2.26 1.4.58-.42 7-.42 7 .57 1.07 1 2.24 1 3.44C21 17.9 16.97 21 12 21s-9-3-9-7.56c0-1.25.5-2.4 1-3.44 0 0-1.89-6.42-.5-7 1.39-.58 4.72.23 6.5 2.23A9.04 9.04 0 0 1 12 5Z"
            }],
            ["path", {
                d: "M8 14v.5"
            }],
            ["path", {
                d: "M16 14v.5"
            }],
            ["path", {
                d: "M11.25 16.25h1.5L12 17l-.75-.75Z"
            }]
        ]],
        th = ["svg", h, [
            ["path", {
                d: "M18 6 7 17l-5-5"
            }],
            ["path", {
                d: "m22 10-7.5 7.5L13 16"
            }]
        ]],
        dh = ["svg", h, [
            ["path", {
                d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
            }],
            ["path", {
                d: "m9 12 2 2 4-4"
            }]
        ]],
        ch = ["svg", h, [
            ["path", {
                d: "M22 11.08V12a10 10 0 1 1-5.93-9.14"
            }],
            ["polyline", {
                points: "22 4 12 14.01 9 11.01"
            }]
        ]],
        nh = ["svg", h, [
            ["polyline", {
                points: "9 11 12 14 22 4"
            }],
            ["path", {
                d: "M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"
            }]
        ]],
        ih = ["svg", h, [
            ["polyline", {
                points: "20 6 9 17 4 12"
            }]
        ]],
        ph = ["svg", h, [
            ["path", {
                d: "M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z"
            }],
            ["line", {
                x1: "6",
                x2: "18",
                y1: "17",
                y2: "17"
            }]
        ]],
        eh = ["svg", h, [
            ["path", {
                d: "M2 17a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3Z"
            }],
            ["path", {
                d: "M12 17a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3Z"
            }],
            ["path", {
                d: "M7 14c3.22-2.91 4.29-8.75 5-12 1.66 2.38 4.94 9 5 12"
            }],
            ["path", {
                d: "M22 9c-4.29 0-7.14-2.33-10-7 5.71 0 10 4.67 10 7Z"
            }]
        ]],
        Mh = ["svg", h, [
            ["circle", {
                cx: "12",
                cy: "12",
                r: "10"
            }],
            ["path", {
                d: "m16 10-4 4-4-4"
            }]
        ]],
        lh = ["svg", h, [
            ["rect", {
                width: "18",
                height: "18",
                x: "3",
                y: "3",
                rx: "2"
            }],
            ["path", {
                d: "m16 10-4 4-4-4"
            }]
        ]],
        vh = ["svg", h, [
            ["path", {
                d: "m6 9 6 6 6-6"
            }]
        ]],
        oh = ["svg", h, [
            ["path", {
                d: "m17 18-6-6 6-6"
            }],
            ["path", {
                d: "M7 6v12"
            }]
        ]],
        sh = ["svg", h, [
            ["path", {
                d: "m7 18 6-6-6-6"
            }],
            ["path", {
                d: "M17 6v12"
            }]
        ]],
        gh = ["svg", h, [
            ["circle", {
                cx: "12",
                cy: "12",
                r: "10"
            }],
            ["path", {
                d: "m14 16-4-4 4-4"
            }]
        ]],
        rh = ["svg", h, [
            ["rect", {
                width: "18",
                height: "18",
                x: "3",
                y: "3",
                rx: "2"
            }],
            ["path", {
                d: "m14 16-4-4 4-4"
            }]
        ]],
        yh = ["svg", h, [
            ["path", {
                d: "m15 18-6-6 6-6"
            }]
        ]],
        $h = ["svg", h, [
            ["circle", {
                cx: "12",
                cy: "12",
                r: "10"
            }],
            ["path", {
                d: "m10 8 4 4-4 4"
            }]
        ]],
        mh = ["svg", h, [
            ["rect", {
                width: "18",
                height: "18",
                x: "3",
                y: "3",
                rx: "2"
            }],
            ["path", {
                d: "m10 8 4 4-4 4"
            }]
        ]],
        Hh = ["svg", h, [
            ["path", {
                d: "m9 18 6-6-6-6"
            }]
        ]],
        Ch = ["svg", h, [
            ["circle", {
                cx: "12",
                cy: "12",
                r: "10"
            }],
            ["path", {
                d: "m8 14 4-4 4 4"
            }]
        ]],
        uh = ["svg", h, [
            ["rect", {
                width: "18",
                height: "18",
                x: "3",
                y: "3",
                rx: "2"
            }],
            ["path", {
                d: "m8 14 4-4 4 4"
            }]
        ]],
        Vh = ["svg", h, [
            ["path", {
                d: "m18 15-6-6-6 6"
            }]
        ]],
        wh = ["svg", h, [
            ["path", {
                d: "m7 20 5-5 5 5"
            }],
            ["path", {
                d: "m7 4 5 5 5-5"
            }]
        ]],
        xh = ["svg", h, [
            ["path", {
                d: "m7 6 5 5 5-5"
            }],
            ["path", {
                d: "m7 13 5 5 5-5"
            }]
        ]],
        Lh = ["svg", h, [
            ["path", {
                d: "m9 7-5 5 5 5"
            }],
            ["path", {
                d: "m15 7 5 5-5 5"
            }]
        ]],
        Sh = ["svg", h, [
            ["path", {
                d: "m11 17-5-5 5-5"
            }],
            ["path", {
                d: "m18 17-5-5 5-5"
            }]
        ]],
        Ah = ["svg", h, [
            ["path", {
                d: "m20 17-5-5 5-5"
            }],
            ["path", {
                d: "m4 17 5-5-5-5"
            }]
        ]],
        fh = ["svg", h, [
            ["path", {
                d: "m6 17 5-5-5-5"
            }],
            ["path", {
                d: "m13 17 5-5-5-5"
            }]
        ]],
        kh = ["svg", h, [
            ["path", {
                d: "m7 15 5 5 5-5"
            }],
            ["path", {
                d: "m7 9 5-5 5 5"
            }]
        ]],
        Fh = ["svg", h, [
            ["path", {
                d: "m17 11-5-5-5 5"
            }],
            ["path", {
                d: "m17 18-5-5-5 5"
            }]
        ]],
        Zh = ["svg", h, [
            ["circle", {
                cx: "12",
                cy: "12",
                r: "10"
            }],
            ["circle", {
                cx: "12",
                cy: "12",
                r: "4"
            }],
            ["line", {
                x1: "21.17",
                x2: "12",
                y1: "8",
                y2: "8"
            }],
            ["line", {
                x1: "3.95",
                x2: "8.54",
                y1: "6.06",
                y2: "14"
            }],
            ["line", {
                x1: "10.88",
                x2: "15.46",
                y1: "21.94",
                y2: "14"
            }]
        ]],
        Ph = ["svg", h, [
            ["path", {
                d: "m18 7 4 2v11a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9l4-2"
            }],
            ["path", {
                d: "M14 22v-4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v4"
            }],
            ["path", {
                d: "M18 22V5l-6-3-6 3v17"
            }],
            ["path", {
                d: "M12 7v5"
            }],
            ["path", {
                d: "M10 9h4"
            }]
        ]],
        Bh = ["svg", h, [
            ["line", {
                x1: "2",
                x2: "22",
                y1: "2",
                y2: "22"
            }],
            ["path", {
                d: "M12 12H2v4h14"
            }],
            ["path", {
                d: "M22 12v4"
            }],
            ["path", {
                d: "M18 12h-.5"
            }],
            ["path", {
                d: "M7 12v4"
            }],
            ["path", {
                d: "M18 8c0-2.5-2-2.5-2-5"
            }],
            ["path", {
                d: "M22 8c0-2.5-2-2.5-2-5"
            }]
        ]],
        Dh = ["svg", h, [
            ["path", {
                d: "M18 12H2v4h16"
            }],
            ["path", {
                d: "M22 12v4"
            }],
            ["path", {
                d: "M7 12v4"
            }],
            ["path", {
                d: "M18 8c0-2.5-2-2.5-2-5"
            }],
            ["path", {
                d: "M22 8c0-2.5-2-2.5-2-5"
            }]
        ]],
        Th = ["svg", h, [
            ["path", {
                d: "M10.1 2.18a9.93 9.93 0 0 1 3.8 0"
            }],
            ["path", {
                d: "M17.6 3.71a9.95 9.95 0 0 1 2.69 2.7"
            }],
            ["path", {
                d: "M21.82 10.1a9.93 9.93 0 0 1 0 3.8"
            }],
            ["path", {
                d: "M20.29 17.6a9.95 9.95 0 0 1-2.7 2.69"
            }],
            ["path", {
                d: "M13.9 21.82a9.94 9.94 0 0 1-3.8 0"
            }],
            ["path", {
                d: "M6.4 20.29a9.95 9.95 0 0 1-2.69-2.7"
            }],
            ["path", {
                d: "M2.18 13.9a9.93 9.93 0 0 1 0-3.8"
            }],
            ["path", {
                d: "M3.71 6.4a9.95 9.95 0 0 1 2.7-2.69"
            }]
        ]],
        zh = ["svg", h, [
            ["circle", {
                cx: "12",
                cy: "12",
                r: "10"
            }],
            ["path", {
                d: "M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"
            }],
            ["path", {
                d: "M12 18V6"
            }]
        ]],
        Rh = ["svg", h, [
            ["path", {
                d: "M10.1 2.18a9.93 9.93 0 0 1 3.8 0"
            }],
            ["path", {
                d: "M17.6 3.71a9.95 9.95 0 0 1 2.69 2.7"
            }],
            ["path", {
                d: "M21.82 10.1a9.93 9.93 0 0 1 0 3.8"
            }],
            ["path", {
                d: "M20.29 17.6a9.95 9.95 0 0 1-2.7 2.69"
            }],
            ["path", {
                d: "M13.9 21.82a9.94 9.94 0 0 1-3.8 0"
            }],
            ["path", {
                d: "M6.4 20.29a9.95 9.95 0 0 1-2.69-2.7"
            }],
            ["path", {
                d: "M2.18 13.9a9.93 9.93 0 0 1 0-3.8"
            }],
            ["path", {
                d: "M3.71 6.4a9.95 9.95 0 0 1 2.7-2.69"
            }],
            ["circle", {
                cx: "12",
                cy: "12",
                r: "1"
            }]
        ]],
        bh = ["svg", h, [
            ["circle", {
                cx: "12",
                cy: "12",
                r: "10"
            }],
            ["circle", {
                cx: "12",
                cy: "12",
                r: "1"
            }]
        ]],
        Uh = ["svg", h, [
            ["circle", {
                cx: "12",
                cy: "12",
                r: "10"
            }],
            ["path", {
                d: "M17 12h.01"
            }],
            ["path", {
                d: "M12 12h.01"
            }],
            ["path", {
                d: "M7 12h.01"
            }]
        ]],
        Oh = ["svg", h, [
            ["path", {
                d: "M7 10h10"
            }],
            ["path", {
                d: "M7 14h10"
            }],
            ["circle", {
                cx: "12",
                cy: "12",
                r: "10"
            }]
        ]],
        qh = ["svg", h, [
            ["path", {
                d: "m2 2 20 20"
            }],
            ["path", {
                d: "M8.35 2.69A10 10 0 0 1 21.3 15.65"
            }],
            ["path", {
                d: "M19.08 19.08A10 10 0 1 1 4.92 4.92"
            }]
        ]],
        Gh = ["svg", h, [
            ["circle", {
                cx: "12",
                cy: "12",
                r: "10"
            }],
            ["path", {
                d: "M22 2 2 22"
            }]
        ]],
        Wh = ["svg", h, [
            ["line", {
                x1: "9",
                x2: "15",
                y1: "15",
                y2: "9"
            }],
            ["circle", {
                cx: "12",
                cy: "12",
                r: "10"
            }]
        ]],
        Eh = ["svg", h, [
            ["circle", {
                cx: "12",
                cy: "12",
                r: "10"
            }]
        ]],
        Ih = ["svg", h, [
            ["rect", {
                width: "18",
                height: "18",
                x: "3",
                y: "3",
                rx: "2"
            }],
            ["path", {
                d: "M11 9h4a2 2 0 0 0 2-2V3"
            }],
            ["circle", {
                cx: "9",
                cy: "9",
                r: "2"
            }],
            ["path", {
                d: "M7 21v-4a2 2 0 0 1 2-2h4"
            }],
            ["circle", {
                cx: "15",
                cy: "15",
                r: "2"
            }]
        ]],
        Xh = ["svg", h, [
            ["path", {
                d: "M21.66 17.67a1.08 1.08 0 0 1-.04 1.6A12 12 0 0 1 4.73 2.38a1.1 1.1 0 0 1 1.61-.04z"
            }],
            ["path", {
                d: "M19.65 15.66A8 8 0 0 1 8.35 4.34"
            }],
            ["path", {
                d: "m14 10-5.5 5.5"
            }],
            ["path", {
                d: "M14 17.85V10H6.15"
            }]
        ]],
        Nh = ["svg", h, [
            ["path", {
                d: "M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z"
            }],
            ["path", {
                d: "m6.2 5.3 3.1 3.9"
            }],
            ["path", {
                d: "m12.4 3.4 3.1 4"
            }],
            ["path", {
                d: "M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"
            }]
        ]],
        Kh = ["svg", h, [
            ["rect", {
                width: "8",
                height: "4",
                x: "8",
                y: "2",
                rx: "1",
                ry: "1"
            }],
            ["path", {
                d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"
            }],
            ["path", {
                d: "m9 14 2 2 4-4"
            }]
        ]],
        Jh = ["svg", h, [
            ["rect", {
                width: "8",
                height: "4",
                x: "8",
                y: "2",
                rx: "1",
                ry: "1"
            }],
            ["path", {
                d: "M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"
            }],
            ["path", {
                d: "M16 4h2a2 2 0 0 1 2 2v4"
            }],
            ["path", {
                d: "M21 14H11"
            }],
            ["path", {
                d: "m15 10-4 4 4 4"
            }]
        ]],
        jh = ["svg", h, [
            ["rect", {
                width: "8",
                height: "4",
                x: "8",
                y: "2",
                rx: "1",
                ry: "1"
            }],
            ["path", {
                d: "M10.42 12.61a2.1 2.1 0 1 1 2.97 2.97L7.95 21 4 22l.99-3.95 5.43-5.44Z"
            }],
            ["path", {
                d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-5.5"
            }],
            ["path", {
                d: "M4 13.5V6a2 2 0 0 1 2-2h2"
            }]
        ]],
        Qh = ["svg", h, [
            ["rect", {
                width: "8",
                height: "4",
                x: "8",
                y: "2",
                rx: "1",
                ry: "1"
            }],
            ["path", {
                d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"
            }],
            ["path", {
                d: "M12 11h4"
            }],
            ["path", {
                d: "M12 16h4"
            }],
            ["path", {
                d: "M8 11h.01"
            }],
            ["path", {
                d: "M8 16h.01"
            }]
        ]],
        Yh = ["svg", h, [
            ["path", {
                d: "M15 2H9a1 1 0 0 0-1 1v2c0 .6.4 1 1 1h6c.6 0 1-.4 1-1V3c0-.6-.4-1-1-1Z"
            }],
            ["path", {
                d: "M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2M16 4h2a2 2 0 0 1 2 2v2M11 14h10"
            }],
            ["path", {
                d: "m17 10 4 4-4 4"
            }]
        ]],
        _h = ["svg", h, [
            ["rect", {
                width: "8",
                height: "4",
                x: "8",
                y: "2",
                rx: "1",
                ry: "1"
            }],
            ["path", {
                d: "M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-.5"
            }],
            ["path", {
                d: "M16 4h2a2 2 0 0 1 1.73 1"
            }],
            ["path", {
                d: "M18.42 9.61a2.1 2.1 0 1 1 2.97 2.97L16.95 17 13 18l.99-3.95 4.43-4.44Z"
            }],
            ["path", {
                d: "M8 18h1"
            }]
        ]],
        at = ["svg", h, [
            ["rect", {
                width: "8",
                height: "4",
                x: "8",
                y: "2",
                rx: "1",
                ry: "1"
            }],
            ["path", {
                d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"
            }],
            ["path", {
                d: "M9 12v-1h6v1"
            }],
            ["path", {
                d: "M11 17h2"
            }],
            ["path", {
                d: "M12 11v6"
            }]
        ]],
        ht = ["svg", h, [
            ["rect", {
                width: "8",
                height: "4",
                x: "8",
                y: "2",
                rx: "1",
                ry: "1"
            }],
            ["path", {
                d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"
            }],
            ["path", {
                d: "m15 11-6 6"
            }],
            ["path", {
                d: "m9 11 6 6"
            }]
        ]],
        tt = ["svg", h, [
            ["rect", {
                width: "8",
                height: "4",
                x: "8",
                y: "2",
                rx: "1",
                ry: "1"
            }],
            ["path", {
                d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"
            }]
        ]],
        dt = ["svg", h, [
            ["circle", {
                cx: "12",
                cy: "12",
                r: "10"
            }],
            ["polyline", {
                points: "12 6 12 12 14.5 8"
            }]
        ]],
        ct = ["svg", h, [
            ["circle", {
                cx: "12",
                cy: "12",
                r: "10"
            }],
            ["polyline", {
                points: "12 6 12 12 8 10"
            }]
        ]],
        nt = ["svg", h, [
            ["circle", {
                cx: "12",
                cy: "12",
                r: "10"
            }],
            ["polyline", {
                points: "12 6 12 12 9.5 8"
            }]
        ]],
        it = ["svg", h, [
            ["circle", {
                cx: "12",
                cy: "12",
                r: "10"
            }],
            ["polyline", {
                points: "12 6 12 12"
            }]
        ]],
        pt = ["svg", h, [
            ["circle", {
                cx: "12",
                cy: "12",
                r: "10"
            }],
            ["polyline", {
                points: "12 6 12 12 16 10"
            }]
        ]],
        et = ["svg", h, [
            ["circle", {
                cx: "12",
                cy: "12",
                r: "10"
            }],
            ["polyline", {
                points: "12 6 12 12 16.5 12"
            }]
        ]],
        Mt = ["svg", h, [
            ["circle", {
                cx: "12",
                cy: "12",
                r: "10"
            }],
            ["polyline", {
                points: "12 6 12 12 16 14"
            }]
        ]],
        lt = ["svg", h, [
            ["circle", {
                cx: "12",
                cy: "12",
                r: "10"
            }],
            ["polyline", {
                points: "12 6 12 12 14.5 16"
            }]
        ]],
        vt = ["svg", h, [
            ["circle", {
                cx: "12",
                cy: "12",
                r: "10"
            }],
            ["polyline", {
                points: "12 6 12 12 12 16.5"
            }]
        ]],
        ot = ["svg", h, [
            ["circle", {
                cx: "12",
                cy: "12",
                r: "10"
            }],
            ["polyline", {
                points: "12 6 12 12 9.5 16"
            }]
        ]],
        st = ["svg", h, [
            ["circle", {
                cx: "12",
                cy: "12",
                r: "10"
            }],
            ["polyline", {
                points: "12 6 12 12 8 14"
            }]
        ]],
        gt = ["svg", h, [
            ["circle", {
                cx: "12",
                cy: "12",
                r: "10"
            }],
            ["polyline", {
                points: "12 6 12 12 7.5 12"
            }]
        ]],
        rt = ["svg", h, [
            ["circle", {
                cx: "12",
                cy: "12",
                r: "10"
            }],
            ["polyline", {
                points: "12 6 12 12 16 14"
            }]
        ]],
        yt = ["svg", h, [
            ["circle", {
                cx: "12",
                cy: "17",
                r: "3"
            }],
            ["path", {
                d: "M4.2 15.1A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.2"
            }],
            ["path", {
                d: "m15.7 18.4-.9-.3"
            }],
            ["path", {
                d: "m9.2 15.9-.9-.3"
            }],
            ["path", {
                d: "m10.6 20.7.3-.9"
            }],
            ["path", {
                d: "m13.1 14.2.3-.9"
            }],
            ["path", {
                d: "m13.6 20.7-.4-1"
            }],
            ["path", {
                d: "m10.8 14.3-.4-1"
            }],
            ["path", {
                d: "m8.3 18.6 1-.4"
            }],
            ["path", {
                d: "m14.7 15.8 1-.4"
            }]
        ]],
        $t = ["svg", h, [
            ["path", {
                d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"
            }],
            ["path", {
                d: "M8 19v1"
            }],
            ["path", {
                d: "M8 14v1"
            }],
            ["path", {
                d: "M16 19v1"
            }],
            ["path", {
                d: "M16 14v1"
            }],
            ["path", {
                d: "M12 21v1"
            }],
            ["path", {
                d: "M12 16v1"
            }]
        ]],
        mt = ["svg", h, [
            ["path", {
                d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"
            }],
            ["path", {
                d: "M16 17H7"
            }],
            ["path", {
                d: "M17 21H9"
            }]
        ]],
        Ht = ["svg", h, [
            ["path", {
                d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"
            }],
            ["path", {
                d: "M16 14v2"
            }],
            ["path", {
                d: "M8 14v2"
            }],
            ["path", {
                d: "M16 20h.01"
            }],
            ["path", {
                d: "M8 20h.01"
            }],
            ["path", {
                d: "M12 16v2"
            }],
            ["path", {
                d: "M12 22h.01"
            }]
        ]],
        Ct = ["svg", h, [
            ["path", {
                d: "M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973"
            }],
            ["path", {
                d: "m13 12-3 5h4l-3 5"
            }]
        ]],
        ut = ["svg", h, [
            ["path", {
                d: "M10.083 9A6.002 6.002 0 0 1 16 4a4.243 4.243 0 0 0 6 6c0 2.22-1.206 4.16-3 5.197"
            }],
            ["path", {
                d: "M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24"
            }],
            ["path", {
                d: "M11 20v2"
            }],
            ["path", {
                d: "M7 19v2"
            }]
        ]],
        Vt = ["svg", h, [
            ["path", {
                d: "M13 16a3 3 0 1 1 0 6H7a5 5 0 1 1 4.9-6Z"
            }],
            ["path", {
                d: "M10.1 9A6 6 0 0 1 16 4a4.24 4.24 0 0 0 6 6 6 6 0 0 1-3 5.197"
            }]
        ]],
        wt = ["svg", h, [
            ["path", {
                d: "m2 2 20 20"
            }],
            ["path", {
                d: "M5.782 5.782A7 7 0 0 0 9 19h8.5a4.5 4.5 0 0 0 1.307-.193"
            }],
            ["path", {
                d: "M21.532 16.5A4.5 4.5 0 0 0 17.5 10h-1.79A7.008 7.008 0 0 0 10 5.07"
            }]
        ]],
        xt = ["svg", h, [
            ["path", {
                d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"
            }],
            ["path", {
                d: "m9.2 22 3-7"
            }],
            ["path", {
                d: "m9 13-3 7"
            }],
            ["path", {
                d: "m17 13-3 7"
            }]
        ]],
        Lt = ["svg", h, [
            ["path", {
                d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"
            }],
            ["path", {
                d: "M16 14v6"
            }],
            ["path", {
                d: "M8 14v6"
            }],
            ["path", {
                d: "M12 16v6"
            }]
        ]],
        St = ["svg", h, [
            ["path", {
                d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"
            }],
            ["path", {
                d: "M8 15h.01"
            }],
            ["path", {
                d: "M8 19h.01"
            }],
            ["path", {
                d: "M12 17h.01"
            }],
            ["path", {
                d: "M12 21h.01"
            }],
            ["path", {
                d: "M16 15h.01"
            }],
            ["path", {
                d: "M16 19h.01"
            }]
        ]],
        At = ["svg", h, [
            ["path", {
                d: "M12 2v2"
            }],
            ["path", {
                d: "m4.93 4.93 1.41 1.41"
            }],
            ["path", {
                d: "M20 12h2"
            }],
            ["path", {
                d: "m19.07 4.93-1.41 1.41"
            }],
            ["path", {
                d: "M15.947 12.65a4 4 0 0 0-5.925-4.128"
            }],
            ["path", {
                d: "M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24"
            }],
            ["path", {
                d: "M11 20v2"
            }],
            ["path", {
                d: "M7 19v2"
            }]
        ]],
        ft = ["svg", h, [
            ["path", {
                d: "M12 2v2"
            }],
            ["path", {
                d: "m4.93 4.93 1.41 1.41"
            }],
            ["path", {
                d: "M20 12h2"
            }],
            ["path", {
                d: "m19.07 4.93-1.41 1.41"
            }],
            ["path", {
                d: "M15.947 12.65a4 4 0 0 0-5.925-4.128"
            }],
            ["path", {
                d: "M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z"
            }]
        ]],
        kt = ["svg", h, [
            ["path", {
                d: "M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"
            }]
        ]],
        Ft = ["svg", h, [
            ["path", {
                d: "M17.5 21H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"
            }],
            ["path", {
                d: "M22 10a3 3 0 0 0-3-3h-2.207a5.502 5.502 0 0 0-10.702.5"
            }]
        ]],
        Zt = ["svg", h, [
            ["path", {
                d: "M16.2 3.8a2.7 2.7 0 0 0-3.81 0l-.4.38-.4-.4a2.7 2.7 0 0 0-3.82 0C6.73 4.85 6.67 6.64 8 8l4 4 4-4c1.33-1.36 1.27-3.15.2-4.2z"
            }],
            ["path", {
                d: "M8 8c-1.36-1.33-3.15-1.27-4.2-.2a2.7 2.7 0 0 0 0 3.81l.38.4-.4.4a2.7 2.7 0 0 0 0 3.82C4.85 17.27 6.64 17.33 8 16"
            }],
            ["path", {
                d: "M16 16c1.36 1.33 3.15 1.27 4.2.2a2.7 2.7 0 0 0 0-3.81l-.38-.4.4-.4a2.7 2.7 0 0 0 0-3.82C19.15 6.73 17.36 6.67 16 8"
            }],
            ["path", {
                d: "M7.8 20.2a2.7 2.7 0 0 0 3.81 0l.4-.38.4.4a2.7 2.7 0 0 0 3.82 0c1.06-1.06 1.12-2.85-.21-4.21l-4-4-4 4c-1.33 1.36-1.27 3.15-.2 4.2z"
            }],
            ["path", {
                d: "m7 17-5 5"
            }]
        ]],
        Pt = ["svg", h, [
            ["path", {
                d: "M17.28 9.05a5.5 5.5 0 1 0-10.56 0A5.5 5.5 0 1 0 12 17.66a5.5 5.5 0 1 0 5.28-8.6Z"
            }],
            ["path", {
                d: "M12 17.66L12 22"
            }]
        ]],
        Bt = ["svg", h, [
            ["path", {
                d: "m18 16 4-4-4-4"
            }],
            ["path", {
                d: "m6 8-4 4 4 4"
            }],
            ["path", {
                d: "m14.5 4-5 16"
            }]
        ]],
        Dt = ["svg", h, [
            ["polyline", {
                points: "16 18 22 12 16 6"
            }],
            ["polyline", {
                points: "8 6 2 12 8 18"
            }]
        ]],
        Tt = ["svg", h, [
            ["polygon", {
                points: "12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"
            }],
            ["line", {
                x1: "12",
                x2: "12",
                y1: "22",
                y2: "15.5"
            }],
            ["polyline", {
                points: "22 8.5 12 15.5 2 8.5"
            }],
            ["polyline", {
                points: "2 15.5 12 8.5 22 15.5"
            }],
            ["line", {
                x1: "12",
                x2: "12",
                y1: "2",
                y2: "8.5"
            }]
        ]],
        zt = ["svg", h, [
            ["path", {
                d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
            }],
            ["polyline", {
                points: "7.5 4.21 12 6.81 16.5 4.21"
            }],
            ["polyline", {
                points: "7.5 19.79 7.5 14.6 3 12"
            }],
            ["polyline", {
                points: "21 12 16.5 14.6 16.5 19.79"
            }],
            ["polyline", {
                points: "3.27 6.96 12 12.01 20.73 6.96"
            }],
            ["line", {
                x1: "12",
                x2: "12",
                y1: "22.08",
                y2: "12"
            }]
        ]],
        Rt = ["svg", h, [
            ["path", {
                d: "M17 8h1a4 4 0 1 1 0 8h-1"
            }],
            ["path", {
                d: "M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"
            }],
            ["line", {
                x1: "6",
                x2: "6",
                y1: "2",
                y2: "4"
            }],
            ["line", {
                x1: "10",
                x2: "10",
                y1: "2",
                y2: "4"
            }],
            ["line", {
                x1: "14",
                x2: "14",
                y1: "2",
                y2: "4"
            }]
        ]],
        bt = ["svg", h, [
            ["path", {
                d: "M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"
            }],
            ["path", {
                d: "M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
            }],
            ["path", {
                d: "M12 2v2"
            }],
            ["path", {
                d: "M12 22v-2"
            }],
            ["path", {
                d: "m17 20.66-1-1.73"
            }],
            ["path", {
                d: "M11 10.27 7 3.34"
            }],
            ["path", {
                d: "m20.66 17-1.73-1"
            }],
            ["path", {
                d: "m3.34 7 1.73 1"
            }],
            ["path", {
                d: "M14 12h8"
            }],
            ["path", {
                d: "M2 12h2"
            }],
            ["path", {
                d: "m20.66 7-1.73 1"
            }],
            ["path", {
                d: "m3.34 17 1.73-1"
            }],
            ["path", {
                d: "m17 3.34-1 1.73"
            }],
            ["path", {
                d: "m11 13.73-4 6.93"
            }]
        ]],
        Ut = ["svg", h, [
            ["circle", {
                cx: "8",
                cy: "8",
                r: "6"
            }],
            ["path", {
                d: "M18.09 10.37A6 6 0 1 1 10.34 18"
            }],
            ["path", {
                d: "M7 6h1v4"
            }],
            ["path", {
                d: "m16.71 13.88.7.71-2.82 2.82"
            }]
        ]],
        Ot = ["svg", h, [
            ["rect", {
                width: "18",
                height: "18",
                x: "3",
                y: "3",
                rx: "2",
                ry: "2"
            }],
            ["line", {
                x1: "12",
                x2: "12",
                y1: "3",
                y2: "21"
            }]
        ]],
        qt = ["svg", h, [
            ["rect", {
                width: "8",
                height: "8",
                x: "2",
                y: "2",
                rx: "2"
            }],
            ["path", {
                d: "M14 2c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2"
            }],
            ["path", {
                d: "M20 2c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2"
            }],
            ["path", {
                d: "M10 18H5c-1.7 0-3-1.3-3-3v-1"
            }],
            ["polyline", {
                points: "7 21 10 18 7 15"
            }],
            ["rect", {
                width: "8",
                height: "8",
                x: "14",
                y: "14",
                rx: "2"
            }]
        ]],
        Gt = ["svg", h, [
            ["path", {
                d: "M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3"
            }]
        ]],
        Wt = ["svg", h, [
            ["circle", {
                cx: "12",
                cy: "12",
                r: "10"
            }],
            ["polygon", {
                points: "16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"
            }]
        ]],
        Et = ["svg", h, [
            ["path", {
                d: "M5.5 8.5 9 12l-3.5 3.5L2 12l3.5-3.5Z"
            }],
            ["path", {
                d: "m12 2 3.5 3.5L12 9 8.5 5.5 12 2Z"
            }],
            ["path", {
                d: "M18.5 8.5 22 12l-3.5 3.5L15 12l3.5-3.5Z"
            }],
            ["path", {
                d: "m12 15 3.5 3.5L12 22l-3.5-3.5L12 15Z"
            }]
        ]],
        It = ["svg", h, [
            ["rect", {
                width: "14",
                height: "8",
                x: "5",
                y: "2",
                rx: "2"
            }],
            ["rect", {
                width: "20",
                height: "8",
                x: "2",
                y: "14",
                rx: "2"
            }],
            ["path", {
                d: "M6 18h2"
            }],
            ["path", {
                d: "M12 18h6"
            }]
        ]],
        Xt = ["svg", h, [
            ["path", {
                d: "M2 18a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v2H2v-2Z"
            }],
            ["path", {
                d: "M20 16a8 8 0 1 0-16 0"
            }],
            ["path", {
                d: "M12 4v4"
            }],
            ["path", {
                d: "M10 4h4"
            }]
        ]],
        Nt = ["svg", h, [
            ["path", {
                d: "m20.9 18.55-8-15.98a1 1 0 0 0-1.8 0l-8 15.98"
            }],
            ["ellipse", {
                cx: "12",
                cy: "19",
                rx: "9",
                ry: "3"
            }]
        ]],
        Kt = ["svg", h, [
            ["rect", {
                x: "2",
                y: "6",
                width: "20",
                height: "8",
                rx: "1"
            }],
            ["path", {
                d: "M17 14v7"
            }],
            ["path", {
                d: "M7 14v7"
            }],
            ["path", {
                d: "M17 3v3"
            }],
            ["path", {
                d: "M7 3v3"
            }],
            ["path", {
                d: "M10 14 2.3 6.3"
            }],
            ["path", {
                d: "m14 6 7.7 7.7"
            }],
            ["path", {
                d: "m8 6 8 8"
            }]
        ]],
        Jt = ["svg", h, [
            ["path", {
                d: "M16 18a4 4 0 0 0-8 0"
            }],
            ["circle", {
                cx: "12",
                cy: "11",
                r: "3"
            }],
            ["rect", {
                width: "18",
                height: "18",
                x: "3",
                y: "4",
                rx: "2"
            }],
            ["line", {
                x1: "8",
                x2: "8",
                y1: "2",
                y2: "4"
            }],
            ["line", {
                x1: "16",
                x2: "16",
                y1: "2",
                y2: "4"
            }]
        ]],
        jt = ["svg", h, [
            ["path", {
                d: "M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2"
            }],
            ["rect", {
                width: "18",
                height: "18",
                x: "3",
                y: "4",
                rx: "2"
            }],
            ["circle", {
                cx: "12",
                cy: "10",
                r: "2"
            }],
            ["line", {
                x1: "8",
                x2: "8",
                y1: "2",
                y2: "4"
            }],
            ["line", {
                x1: "16",
                x2: "16",
                y1: "2",
                y2: "4"
            }]
        ]],
        Qt = ["svg", h, [
            ["path", {
                d: "M22 7.7c0-.6-.4-1.2-.8-1.5l-6.3-3.9a1.72 1.72 0 0 0-1.7 0l-10.3 6c-.5.2-.9.8-.9 1.4v6.6c0 .5.4 1.2.8 1.5l6.3 3.9a1.72 1.72 0 0 0 1.7 0l10.3-6c.5-.3.9-1 .9-1.5Z"
            }],
            ["path", {
                d: "M10 21.9V14L2.1 9.1"
            }],
            ["path", {
                d: "m10 14 11.9-6.9"
            }],
            ["path", {
                d: "M14 19.8v-8.1"
            }],
            ["path", {
                d: "M18 17.5V9.4"
            }]
        ]],
        Yt = ["svg", h, [
            ["circle", {
                cx: "12",
                cy: "12",
                r: "10"
            }],
            ["path", {
                d: "M12 18a6 6 0 0 0 0-12v12z"
            }]
        ]],
        _t = ["svg", h, [
            ["path", {
                d: "M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"
            }],
            ["path", {
                d: "M8.5 8.5v.01"
            }],
            ["path", {
                d: "M16 15.5v.01"
            }],
            ["path", {
                d: "M12 12v.01"
            }],
            ["path", {
                d: "M11 17v.01"
            }],
            ["path", {
                d: "M7 14v.01"
            }]
        ]],
        a4 = ["svg", h, [
            ["path", {
                d: "m12 15 2 2 4-4"
            }],
            ["rect", {
                width: "14",
                height: "14",
                x: "8",
                y: "8",
                rx: "2",
                ry: "2"
            }],
            ["path", {
                d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"
            }]
        ]],
        h4 = ["svg", h, [
            ["line", {
                x1: "12",
                x2: "18",
                y1: "15",
                y2: "15"
            }],
            ["rect", {
                width: "14",
                height: "14",
                x: "8",
                y: "8",
                rx: "2",
                ry: "2"
            }],
            ["path", {
                d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"
            }]
        ]],
        t4 = ["svg", h, [
            ["line", {
                x1: "15",
                x2: "15",
                y1: "12",
                y2: "18"
            }],
            ["line", {
                x1: "12",
                x2: "18",
                y1: "15",
                y2: "15"
            }],
            ["rect", {
                width: "14",
                height: "14",
                x: "8",
                y: "8",
                rx: "2",
                ry: "2"
            }],
            ["path", {
                d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"
            }]
        ]],
        d4 = ["svg", h, [
            ["line", {
                x1: "12",
                x2: "18",
                y1: "18",
                y2: "12"
            }],
            ["rect", {
                width: "14",
                height: "14",
                x: "8",
                y: "8",
                rx: "2",
                ry: "2"
            }],
            ["path", {
                d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"
            }]
        ]],
        c4 = ["svg", h, [
            ["line", {
                x1: "12",
                x2: "18",
                y1: "12",
                y2: "18"
            }],
            ["line", {
                x1: "12",
                x2: "18",
                y1: "18",
                y2: "12"
            }],
            ["rect", {
                width: "14",
                height: "14",
                x: "8",
                y: "8",
                rx: "2",
                ry: "2"
            }],
            ["path", {
                d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"
            }]
        ]],
        n4 = ["svg", h, [
            ["rect", {
                width: "14",
                height: "14",
                x: "8",
                y: "8",
                rx: "2",
                ry: "2"
            }],
            ["path", {
                d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"
            }]
        ]],
        i4 = ["svg", h, [
            ["circle", {
                cx: "12",
                cy: "12",
                r: "10"
            }],
            ["path", {
                d: "M9 9.4a4 4 0 1 1 0 5.25"
            }]
        ]],
        p4 = ["svg", h, [
            ["circle", {
                cx: "12",
                cy: "12",
                r: "10"
            }],
            ["path", {
                d: "M15 9.4a4 4 0 1 0 0 5.246"
            }]
        ]],
        e4 = ["svg", h, [
            ["polyline", {
                points: "9 10 4 15 9 20"
            }],
            ["path", {
                d: "M20 4v7a4 4 0 0 1-4 4H4"
            }]
        ]],
        M4 = ["svg", h, [
            ["polyline", {
                points: "15 10 20 15 15 20"
            }],
            ["path", {
                d: "M4 4v7a4 4 0 0 0 4 4h12"
            }]
        ]],
        l4 = ["svg", h, [
            ["polyline", {
                points: "14 15 9 20 4 15"
            }],
            ["path", {
                d: "M20 4h-7a4 4 0 0 0-4 4v12"
            }]
        ]],
        v4 = ["svg", h, [
            ["polyline", {
                points: "14 9 9 4 4 9"
            }],
            ["path", {
                d: "M20 20h-7a4 4 0 0 1-4-4V4"
            }]
        ]],
        o4 = ["svg", h, [
            ["polyline", {
                points: "10 15 15 20 20 15"
            }],
            ["path", {
                d: "M4 4h7a4 4 0 0 1 4 4v12"
            }]
        ]],
        s4 = ["svg", h, [
            ["polyline", {
                points: "10 9 15 4 20 9"
            }],
            ["path", {
                d: "M4 20h7a4 4 0 0 0 4-4V4"
            }]
        ]],
        g4 = ["svg", h, [
            ["polyline", {
                points: "9 14 4 9 9 4"
            }],
            ["path", {
                d: "M20 20v-7a4 4 0 0 0-4-4H4"
            }]
        ]],
        r4 = ["svg", h, [
            ["polyline", {
                points: "15 14 20 9 15 4"
            }],
            ["path", {
                d: "M4 20v-7a4 4 0 0 1 4-4h12"
            }]
        ]],
        y4 = ["svg", h, [
            ["rect", {
                x: "4",
                y: "4",
                width: "16",
                height: "16",
                rx: "2"
            }],
            ["rect", {
                x: "9",
                y: "9",
                width: "6",
                height: "6"
            }],
            ["path", {
                d: "M15 2v2"
            }],
            ["path", {
                d: "M15 20v2"
            }],
            ["path", {
                d: "M2 15h2"
            }],
            ["path", {
                d: "M2 9h2"
            }],
            ["path", {
                d: "M20 15h2"
            }],
            ["path", {
                d: "M20 9h2"
            }],
            ["path", {
                d: "M9 2v2"
            }],
            ["path", {
                d: "M9 20v2"
            }]
        ]],
        $4 = ["svg", h, [
            ["circle", {
                cx: "12",
                cy: "12",
                r: "10"
            }],
            ["path", {
                d: "M10 9.3a2.8 2.8 0 0 0-3.5 1 3.1 3.1 0 0 0 0 3.4 2.7 2.7 0 0 0 3.5 1"
            }],
            ["path", {
                d: "M17 9.3a2.8 2.8 0 0 0-3.5 1 3.1 3.1 0 0 0 0 3.4 2.7 2.7 0 0 0 3.5 1"
            }]
        ]],
        m4 = ["svg", h, [
            ["rect", {
                width: "20",
                height: "14",
                x: "2",
                y: "5",
                rx: "2"
            }],
            ["line", {
                x1: "2",
                x2: "22",
                y1: "10",
                y2: "10"
            }]
        ]],
        H4 = ["svg", h, [
            ["path", {
                d: "m4.6 13.11 5.79-3.21c1.89-1.05 4.79 1.78 3.71 3.71l-3.22 5.81C8.8 23.16.79 15.23 4.6 13.11Z"
            }],
            ["path", {
                d: "m10.5 9.5-1-2.29C9.2 6.48 8.8 6 8 6H4.5C2.79 6 2 6.5 2 8.5a7.71 7.71 0 0 0 2 4.83"
            }],
            ["path", {
                d: "M8 6c0-1.55.24-4-2-4-2 0-2.5 2.17-2.5 4"
            }],
            ["path", {
                d: "m14.5 13.5 2.29 1c.73.3 1.21.7 1.21 1.5v3.5c0 1.71-.5 2.5-2.5 2.5a7.71 7.71 0 0 1-4.83-2"
            }],
            ["path", {
                d: "M18 16c1.55 0 4-.24 4 2 0 2-2.17 2.5-4 2.5"
            }]
        ]],
        C4 = ["svg", h, [
            ["path", {
                d: "M6 2v14a2 2 0 0 0 2 2h14"
            }],
            ["path", {
                d: "M18 22V8a2 2 0 0 0-2-2H2"
            }]
        ]],
        u4 = ["svg", h, [
            ["path", {
                d: "M11 2a2 2 0 0 0-2 2v5H4a2 2 0 0 0-2 2v2c0 1.1.9 2 2 2h5v5c0 1.1.9 2 2 2h2a2 2 0 0 0 2-2v-5h5a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-5V4a2 2 0 0 0-2-2h-2z"
            }]
        ]],
        V4 = ["svg", h, [
            ["circle", {
                cx: "12",
                cy: "12",
                r: "10"
            }],
            ["line", {
                x1: "22",
                x2: "18",
                y1: "12",
                y2: "12"
            }],
            ["line", {
                x1: "6",
                x2: "2",
                y1: "12",
                y2: "12"
            }],
            ["line", {
                x1: "12",
                x2: "12",
                y1: "6",
                y2: "2"
            }],
            ["line", {
                x1: "12",
                x2: "12",
                y1: "22",
                y2: "18"
            }]
        ]],
        w4 = ["svg", h, [
            ["path", {
                d: "m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14"
            }]
        ]],
        x4 = ["svg", h, [
            ["path", {
                d: "m21.12 6.4-6.05-4.06a2 2 0 0 0-2.17-.05L2.95 8.41a2 2 0 0 0-.95 1.7v5.82a2 2 0 0 0 .88 1.66l6.05 4.07a2 2 0 0 0 2.17.05l9.95-6.12a2 2 0 0 0 .95-1.7V8.06a2 2 0 0 0-.88-1.66Z"
            }],
            ["path", {
                d: "M10 22v-8L2.25 9.15"
            }],
            ["path", {
                d: "m10 14 11.77-6.87"
            }]
        ]],
        L4 = ["svg", h, [
            ["path", {
                d: "m6 8 1.75 12.28a2 2 0 0 0 2 1.72h4.54a2 2 0 0 0 2-1.72L18 8"
            }],
            ["path", {
                d: "M5 8h14"
            }],
            ["path", {
                d: "M7 15a6.47 6.47 0 0 1 5 0 6.47 6.47 0 0 0 5 0"
            }],
            ["path", {
                d: "m12 8 1-6h2"
            }]
        ]],
        S4 = ["svg", h, [
            ["circle", {
                cx: "12",
                cy: "12",
                r: "8"
            }],
            ["line", {
                x1: "3",
                x2: "6",
                y1: "3",
                y2: "6"
            }],
            ["line", {
                x1: "21",
                x2: "18",
                y1: "3",
                y2: "6"
            }],
            ["line", {
                x1: "3",
                x2: "6",
                y1: "21",
                y2: "18"
            }],
            ["line", {
                x1: "21",
                x2: "18",
                y1: "21",
                y2: "18"
            }]
        ]],
        A4 = ["svg", h, [
            ["ellipse", {
                cx: "12",
                cy: "5",
                rx: "9",
                ry: "3"
            }],
            ["path", {
                d: "M3 5v14a9 3 0 0 0 18 0V5"
            }]
        ]],
        f4 = ["svg", h, [
            ["ellipse", {
                cx: "12",
                cy: "5",
                rx: "9",
                ry: "3"
            }],
            ["path", {
                d: "M3 12a9 3 0 0 0 5 2.69"
            }],
            ["path", {
                d: "M21 9.3V5"
            }],
            ["path", {
                d: "M3 5v14a9 3 0 0 0 6.47 2.88"
            }],
            ["path", {
                d: "M12 12v4h4"
            }],
            ["path", {
                d: "M13 20a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L12 16"
            }]
        ]],
        k4 = ["svg", h, [
            ["ellipse", {
                cx: "12",
                cy: "5",
                rx: "9",
                ry: "3"
            }],
            ["path", {
                d: "M3 5V19A9 3 0 0 0 15 21.84"
            }],
            ["path", {
                d: "M21 5V8"
            }],
            ["path", {
                d: "M21 12L18 17H22L19 22"
            }],
            ["path", {
                d: "M3 12A9 3 0 0 0 14.59 14.87"
            }]
        ]],
        F4 = ["svg", h, [
            ["ellipse", {
                cx: "12",
                cy: "5",
                rx: "9",
                ry: "3"
            }],
            ["path", {
                d: "M3 5V19A9 3 0 0 0 21 19V5"
            }],
            ["path", {
                d: "M3 12A9 3 0 0 0 21 12"
            }]
        ]],
        Z4 = ["svg", h, [
            ["path", {
                d: "M20 5H9l-7 7 7 7h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z"
            }],
            ["line", {
                x1: "18",
                x2: "12",
                y1: "9",
                y2: "15"
            }],
            ["line", {
                x1: "12",
                x2: "18",
                y1: "9",
                y2: "15"
            }]
        ]],
        P4 = ["svg", h, [
            ["circle", {
                cx: "12",
                cy: "4",
                r: "2"
            }],
            ["path", {
                d: "M10.2 3.2C5.5 4 2 8.1 2 13a2 2 0 0 0 4 0v-1a2 2 0 0 1 4 0v4a2 2 0 0 0 4 0v-4a2 2 0 0 1 4 0v1a2 2 0 0 0 4 0c0-4.9-3.5-9-8.2-9.8"
            }],
            ["path", {
                d: "M3.2 14.8a9 9 0 0 0 17.6 0"
            }]
        ]],
        B4 = ["svg", h, [
            ["circle", {
                cx: "19",
                cy: "19",
                r: "2"
            }],
            ["circle", {
                cx: "5",
                cy: "5",
                r: "2"
            }],
            ["path", {
                d: "M6.48 3.66a10 10 0 0 1 13.86 13.86"
            }],
            ["path", {
                d: "m6.41 6.41 11.18 11.18"
            }],
            ["path", {
                d: "M3.66 6.48a10 10 0 0 0 13.86 13.86"
            }]
        ]],
        D4 = ["svg", h, [
            ["path", {
                d: "M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z"
            }]
        ]],
        T4 = ["svg", h, [
            ["rect", {
                width: "18",
                height: "18",
                x: "3",
                y: "3",
                rx: "2",
                ry: "2"
            }],
            ["path", {
                d: "M12 12h.01"
            }]
        ]],
        z4 = ["svg", h, [
            ["rect", {
                width: "18",
                height: "18",
                x: "3",
                y: "3",
                rx: "2",
                ry: "2"
            }],
            ["path", {
                d: "M15 9h.01"
            }],
            ["path", {
                d: "M9 15h.01"
            }]
        ]],
        R4 = ["svg", h, [
            ["rect", {
                width: "18",
                height: "18",
                x: "3",
                y: "3",
                rx: "2",
                ry: "2"
            }],
            ["path", {
                d: "M16 8h.01"
            }],
            ["path", {
                d: "M12 12h.01"
            }],
            ["path", {
                d: "M8 16h.01"
            }]
        ]],
        b4 = ["svg", h, [
            ["rect", {
                width: "18",
                height: "18",
                x: "3",
                y: "3",
                rx: "2",
                ry: "2"
            }],
            ["path", {
                d: "M16 8h.01"
            }],
            ["path", {
                d: "M8 8h.01"
            }],
            ["path", {
                d: "M8 16h.01"
            }],
            ["path", {
                d: "M16 16h.01"
            }]
        ]],
        U4 = ["svg", h, [
            ["rect", {
                width: "18",
                height: "18",
                x: "3",
                y: "3",
                rx: "2",
                ry: "2"
            }],
            ["path", {
                d: "M16 8h.01"
            }],
            ["path", {
                d: "M8 8h.01"
            }],
            ["path", {
                d: "M8 16h.01"
            }],
            ["path", {
                d: "M16 16h.01"
            }],
            ["path", {
                d: "M12 12h.01"
            }]
        ]],
        O4 = ["svg", h, [
            ["rect", {
                width: "18",
                height: "18",
                x: "3",
                y: "3",
                rx: "2",
                ry: "2"
            }],
            ["path", {
                d: "M16 8h.01"
            }],
            ["path", {
                d: "M16 12h.01"
            }],
            ["path", {
                d: "M16 16h.01"
            }],
            ["path", {
                d: "M8 8h.01"
            }],
            ["path", {
                d: "M8 12h.01"
            }],
            ["path", {
                d: "M8 16h.01"
            }]
        ]],
        q4 = ["svg", h, [
            ["rect", {
                width: "12",
                height: "12",
                x: "2",
                y: "10",
                rx: "2",
                ry: "2"
            }],
            ["path", {
                d: "m17.92 14 3.5-3.5a2.24 2.24 0 0 0 0-3l-5-4.92a2.24 2.24 0 0 0-3 0L10 6"
            }],
            ["path", {
                d: "M6 18h.01"
            }],
            ["path", {
                d: "M10 14h.01"
            }],
            ["path", {
                d: "M15 6h.01"
            }],
            ["path", {
                d: "M18 9h.01"
            }]
        ]],
        G4 = ["svg", h, [
            ["path", {
                d: "M12 3v14"
            }],
            ["path", {
                d: "M5 10h14"
            }],
            ["path", {
                d: "M5 21h14"
            }]
        ]],
        W4 = ["svg", h, [
            ["circle", {
                cx: "12",
                cy: "12",
                r: "10"
            }],
            ["circle", {
                cx: "12",
                cy: "12",
                r: "4"
            }],
            ["path", {
                d: "M12 12h.01"
            }]
        ]],
        E4 = ["svg", h, [
            ["circle", {
                cx: "12",
                cy: "12",
                r: "10"
            }],
            ["path", {
                d: "M6 12c0-1.7.7-3.2 1.8-4.2"
            }],
            ["circle", {
                cx: "12",
                cy: "12",
                r: "2"
            }],
            ["path", {
                d: "M18 12c0 1.7-.7 3.2-1.8 4.2"
            }]
        ]],
        I4 = ["svg", h, [
            ["circle", {
                cx: "12",
                cy: "12",
                r: "10"
            }],
            ["circle", {
                cx: "12",
                cy: "12",
                r: "2"
            }]
        ]],
        X4 = ["svg", h, [
            ["line", {
                x1: "8",
                x2: "16",
                y1: "12",
                y2: "12"
            }],
            ["line", {
                x1: "12",
                x2: "12",
                y1: "16",
                y2: "16"
            }],
            ["line", {
                x1: "12",
                x2: "12",
                y1: "8",
                y2: "8"
            }],
            ["circle", {
                cx: "12",
                cy: "12",
                r: "10"
            }]
        ]],
        N4 = ["svg", h, [
            ["rect", {
                width: "18",
                height: "18",
                x: "3",
                y: "3",
                rx: "2",
                ry: "2"
            }],
            ["line", {
                x1: "8",
                x2: "16",
                y1: "12",
                y2: "12"
            }],
            ["line", {
                x1: "12",
                x2: "12",
                y1: "16",
                y2: "16"
            }],
            ["line", {
                x1: "12",
                x2: "12",
                y1: "8",
                y2: "8"
            }]
        ]],
        K4 = ["svg", h, [
            ["circle", {
                cx: "12",
                cy: "6",
                r: "1"
            }],
            ["line", {
                x1: "5",
                x2: "19",
                y1: "12",
                y2: "12"
            }],
            ["circle", {
                cx: "12",
                cy: "18",
                r: "1"
            }]
        ]],
        J4 = ["svg", h, [
            ["path", {
                d: "M15 2c-1.35 1.5-2.092 3-2.5 4.5M9 22c1.35-1.5 2.092-3 2.5-4.5"
            }],
            ["path", {
                d: "M2 15c3.333-3 6.667-3 10-3m10-3c-1.5 1.35-3 2.092-4.5 2.5"
            }],
            ["path", {
                d: "m17 6-2.5-2.5"
            }],
            ["path", {
                d: "m14 8-1.5-1.5"
            }],
            ["path", {
                d: "m7 18 2.5 2.5"
            }],
            ["path", {
                d: "m3.5 14.5.5.5"
            }],
            ["path", {
                d: "m20 9 .5.5"
            }],
            ["path", {
                d: "m6.5 12.5 1 1"
            }],
            ["path", {
                d: "m16.5 10.5 1 1"
            }],
            ["path", {
                d: "m10 16 1.5 1.5"
            }],
            ["line", {
                x1: "2",
                x2: "22",
                y1: "2",
                y2: "22"
            }]
        ]],
        j4 = ["svg", h, [
            ["path", {
                d: "M2 15c6.667-6 13.333 0 20-6"
            }],
            ["path", {
                d: "M9 22c1.798-1.998 2.518-3.995 2.807-5.993"
            }],
            ["path", {
                d: "M15 2c-1.798 1.998-2.518 3.995-2.807 5.993"
            }],
            ["path", {
                d: "m17 6-2.5-2.5"
            }],
            ["path", {
                d: "m14 8-1-1"
            }],
            ["path", {
                d: "m7 18 2.5 2.5"
            }],
            ["path", {
                d: "m3.5 14.5.5.5"
            }],
            ["path", {
                d: "m20 9 .5.5"
            }],
            ["path", {
                d: "m6.5 12.5 1 1"
            }],
            ["path", {
                d: "m16.5 10.5 1 1"
            }],
            ["path", {
                d: "m10 16 1.5 1.5"
            }]
        ]],
        Q4 = ["svg", h, [
            ["path", {
                d: "M10 5.172C10 3.782 8.423 2.679 6.5 3c-2.823.47-4.113 6.006-4 7 .08.703 1.725 1.722 3.656 1 1.261-.472 1.96-1.45 2.344-2.5"
            }],
            ["path", {
                d: "M14.267 5.172c0-1.39 1.577-2.493 3.5-2.172 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-1.855-1.45-2.239-2.5"
            }],
            ["path", {
                d: "M8 14v.5"
            }],
            ["path", {
                d: "M16 14v.5"
            }],
            ["path", {
                d: "M11.25 16.25h1.5L12 17l-.75-.75Z"
            }],
            ["path", {
                d: "M4.42 11.247A13.152 13.152 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444c0-1.061-.162-2.2-.493-3.309m-9.243-6.082A8.801 8.801 0 0 1 12 5c.78 0 1.5.108 2.161.306"
            }]
        ]],
        Y4 = ["svg", h, [
            ["line", {
                x1: "12",
                x2: "12",
                y1: "2",
                y2: "22"
            }],
            ["path", {
                d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"
            }]
        ]],
        _4 = ["svg", h, [
            ["path", {
                d: "M20.5 10a2.5 2.5 0 0 1-2.4-3H18a2.95 2.95 0 0 1-2.6-4.4 10 10 0 1 0 6.3 7.1c-.3.2-.8.3-1.2.3"
            }],
            ["circle", {
                cx: "12",
                cy: "12",
                r: "3"
            }]
        ]],
        a5 = ["svg", h, [
            ["path", {
                d: "M18 20V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14"
            }],
            ["path", {
                d: "M2 20h20"
            }],
            ["path", {
                d: "M14 12v.01"
            }]
        ]],
        h5 = ["svg", h, [
            ["path", {
                d: "M13 4h3a2 2 0 0 1 2 2v14"
            }],
            ["path", {
                d: "M2 20h3"
            }],
            ["path", {
                d: "M13 20h9"
            }],
            ["path", {
                d: "M10 12v.01"
            }],
            ["path", {
                d: "M13 4.562v16.157a1 1 0 0 1-1.242.97L5 20V5.562a2 2 0 0 1 1.515-1.94l4-1A2 2 0 0 1 13 4.561Z"
            }]
        ]],
        t5 = ["svg", h, [
            ["circle", {
                cx: "12.1",
                cy: "12.1",
                r: "1"
            }]
        ]],
        d5 = ["svg", h, [
            ["path", {
                d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"
            }],
            ["path", {
                d: "M12 12v9"
            }],
            ["path", {
                d: "m8 17 4 4 4-4"
            }]
        ]],
        c5 = ["svg", h, [
            ["path", {
                d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
            }],
            ["polyline", {
                points: "7 10 12 15 17 10"
            }],
            ["line", {
                x1: "12",
                x2: "12",
                y1: "15",
                y2: "3"
            }]
        ]],
        n5 = ["svg", h, [
            ["circle", {
                cx: "12",
                cy: "5",
                r: "2"
            }],
            ["path", {
                d: "m3 21 8.02-14.26"
            }],
            ["path", {
                d: "m12.99 6.74 1.93 3.44"
            }],
            ["path", {
                d: "M19 12c-3.87 4-10.13 4-14 0"
            }],
            ["path", {
                d: "m21 21-2.16-3.84"
            }]
        ]],
        i5 = ["svg", h, [
            ["path", {
                d: "M 10 11h.01"
            }],
            ["path", {
                d: "M 14 6h.01"
            }],
            ["path", {
                d: "M 18 6h.01"
            }],
            ["path", {
                d: "M 6.5 13.1h.01"
            }],
            ["path", {
                d: "M22 5c0 9-4 12-6 12s-6-3-6-12c0-2 2-3 6-3s6 1 6 3"
            }],
            ["path", {
                d: "M17.4 9.9c-.8.8-2 .8-2.8 0"
            }],
            ["path", {
                d: "M10.1 7.1C9 7.2 7.7 7.7 6 8.6c-3.5 2-4.7 3.9-3.7 5.6 4.5 7.8 9.5 8.4 11.2 7.4.9-.5 1.9-2.1 1.9-4.7"
            }],
            ["path", {
                d: "M9.1 16.5c.3-1.1 1.4-1.7 2.4-1.4"
            }]
        ]],
        p5 = ["svg", h, [
            ["circle", {
                cx: "12",
                cy: "12",
                r: "10"
            }],
            ["path", {
                d: "M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94"
            }],
            ["path", {
                d: "M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32"
            }],
            ["path", {
                d: "M8.56 2.75c4.37 6 6 9.42 8 17.72"
            }]
        ]],
        e5 = ["svg", h, [
            ["path", {
                d: "M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"
            }]
        ]],
        M5 = ["svg", h, [
            ["path", {
                d: "M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"
            }],
            ["path", {
                d: "M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"
            }]
        ]],
        l5 = ["svg", h, [
            ["path", {
                d: "M15.45 15.4c-2.13.65-4.3.32-5.7-1.1-2.29-2.27-1.76-6.5 1.17-9.42 2.93-2.93 7.15-3.46 9.43-1.18 1.41 1.41 1.74 3.57 1.1 5.71-1.4-.51-3.26-.02-4.64 1.36-1.38 1.38-1.87 3.23-1.36 4.63z"
            }],
            ["path", {
                d: "m11.25 15.6-2.16 2.16a2.5 2.5 0 1 1-4.56 1.73 2.49 2.49 0 0 1-1.41-4.24 2.5 2.5 0 0 1 3.14-.32l2.16-2.16"
            }]
        ]],
        v5 = ["svg", h, [
            ["path", {
                d: "m6.5 6.5 11 11"
            }],
            ["path", {
                d: "m21 21-1-1"
            }],
            ["path", {
                d: "m3 3 1 1"
            }],
            ["path", {
                d: "m18 22 4-4"
            }],
            ["path", {
                d: "m2 6 4-4"
            }],
            ["path", {
                d: "m3 10 7-7"
            }],
            ["path", {
                d: "m14 21 7-7"
            }]
        ]],
        o5 = ["svg", h, [
            ["path", {
                d: "M6 18.5a3.5 3.5 0 1 0 7 0c0-1.57.92-2.52 2.04-3.46"
            }],
            ["path", {
                d: "M6 8.5c0-.75.13-1.47.36-2.14"
            }],
            ["path", {
                d: "M8.8 3.15A6.5 6.5 0 0 1 19 8.5c0 1.63-.44 2.81-1.09 3.76"
            }],
            ["path", {
                d: "M12.5 6A2.5 2.5 0 0 1 15 8.5M10 13a2 2 0 0 0 1.82-1.18"
            }],
            ["line", {
                x1: "2",
                x2: "22",
                y1: "2",
                y2: "22"
            }]
        ]],
        s5 = ["svg", h, [
            ["path", {
                d: "M6 8.5a6.5 6.5 0 1 1 13 0c0 6-6 6-6 10a3.5 3.5 0 1 1-7 0"
            }],
            ["path", {
                d: "M15 8.5a2.5 2.5 0 0 0-5 0v1a2 2 0 1 1 0 4"
            }]
        ]],
        g5 = ["svg", h, [
            ["circle", {
                cx: "11.5",
                cy: "12.5",
                r: "3.5"
            }],
            ["path", {
                d: "M3 8c0-3.5 2.5-6 6.5-6 5 0 4.83 3 7.5 5s5 2 5 6c0 4.5-2.5 6.5-7 6.5-2.5 0-2.5 2.5-6 2.5s-7-2-7-5.5c0-3 1.5-3 1.5-5C3.5 10 3 9 3 8Z"
            }]
        ]],
        r5 = ["svg", h, [
            ["path", {
                d: "M6.399 6.399C5.362 8.157 4.65 10.189 4.5 12c-.37 4.43 1.27 9.95 7.5 10 3.256-.026 5.259-1.547 6.375-3.625"
            }],
            ["path", {
                d: "M19.532 13.875A14.07 14.07 0 0 0 19.5 12c-.36-4.34-3.95-9.96-7.5-10-1.04.012-2.082.502-3.046 1.297"
            }],
            ["line", {
                x1: "2",
                x2: "22",
                y1: "2",
                y2: "22"
            }]
        ]],
        y5 = ["svg", h, [
            ["path", {
                d: "M12 22c6.23-.05 7.87-5.57 7.5-10-.36-4.34-3.95-9.96-7.5-10-3.55.04-7.14 5.66-7.5 10-.37 4.43 1.27 9.95 7.5 10z"
            }]
        ]],
        $5 = ["svg", h, [
            ["line", {
                x1: "5",
                x2: "19",
                y1: "9",
                y2: "9"
            }],
            ["line", {
                x1: "5",
                x2: "19",
                y1: "15",
                y2: "15"
            }],
            ["line", {
                x1: "19",
                x2: "5",
                y1: "5",
                y2: "19"
            }]
        ]],
        m5 = ["svg", h, [
            ["line", {
                x1: "5",
                x2: "19",
                y1: "9",
                y2: "9"
            }],
            ["line", {
                x1: "5",
                x2: "19",
                y1: "15",
                y2: "15"
            }]
        ]],
        H5 = ["svg", h, [
            ["path", {
                d: "m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21"
            }],
            ["path", {
                d: "M22 21H7"
            }],
            ["path", {
                d: "m5 11 9 9"
            }]
        ]],
        C5 = ["svg", h, [
            ["path", {
                d: "M4 10h12"
            }],
            ["path", {
                d: "M4 14h9"
            }],
            ["path", {
                d: "M19 6a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2"
            }]
        ]],
        u5 = ["svg", h, [
            ["path", {
                d: "m21 21-6-6m6 6v-4.8m0 4.8h-4.8"
            }],
            ["path", {
                d: "M3 16.2V21m0 0h4.8M3 21l6-6"
            }],
            ["path", {
                d: "M21 7.8V3m0 0h-4.8M21 3l-6 6"
            }],
            ["path", {
                d: "M3 7.8V3m0 0h4.8M3 3l6 6"
            }]
        ]],
        V5 = ["svg", h, [
            ["path", {
                d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
            }],
            ["polyline", {
                points: "15 3 21 3 21 9"
            }],
            ["line", {
                x1: "10",
                x2: "21",
                y1: "14",
                y2: "3"
            }]
        ]],
        w5 = ["svg", h, [
            ["path", {
                d: "M9.88 9.88a3 3 0 1 0 4.24 4.24"
            }],
            ["path", {
                d: "M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"
            }],
            ["path", {
                d: "M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"
            }],
            ["line", {
                x1: "2",
                x2: "22",
                y1: "2",
                y2: "22"
            }]
        ]],
        x5 = ["svg", h, [
            ["path", {
                d: "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"
            }],
            ["circle", {
                cx: "12",
                cy: "12",
                r: "3"
            }]
        ]],
        L5 = ["svg", h, [
            ["path", {
                d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
            }]
        ]],
        S5 = ["svg", h, [
            ["path", {
                d: "M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"
            }],
            ["path", {
                d: "M17 18h1"
            }],
            ["path", {
                d: "M12 18h1"
            }],
            ["path", {
                d: "M7 18h1"
            }]
        ]],
        A5 = ["svg", h, [
            ["path", {
                d: "M10.827 16.379a6.082 6.082 0 0 1-8.618-7.002l5.412 1.45a6.082 6.082 0 0 1 7.002-8.618l-1.45 5.412a6.082 6.082 0 0 1 8.618 7.002l-5.412-1.45a6.082 6.082 0 0 1-7.002 8.618l1.45-5.412Z"
            }],
            ["path", {
                d: "M12 12v.01"
            }]
        ]],
        f5 = ["svg", h, [
            ["polygon", {
                points: "13 19 22 12 13 5 13 19"
            }],
            ["polygon", {
                points: "2 19 11 12 2 5 2 19"
            }]
        ]],
        k5 = ["svg", h, [
            ["path", {
                d: "M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"
            }],
            ["line", {
                x1: "16",
                x2: "2",
                y1: "8",
                y2: "22"
            }],
            ["line", {
                x1: "17.5",
                x2: "9",
                y1: "15",
                y2: "15"
            }]
        ]],
        F5 = ["svg", h, [
            ["circle", {
                cx: "12",
                cy: "12",
                r: "2"
            }],
            ["path", {
                d: "M12 2v4"
            }],
            ["path", {
                d: "m6.8 15-3.5 2"
            }],
            ["path", {
                d: "m20.7 7-3.5 2"
            }],
            ["path", {
                d: "M6.8 9 3.3 7"
            }],
            ["path", {
                d: "m20.7 17-3.5-2"
            }],
            ["path", {
                d: "m9 22 3-8 3 8"
            }],
            ["path", {
                d: "M8 22h8"
            }],
            ["path", {
                d: "M18 18.7a9 9 0 1 0-12 0"
            }]
        ]],
        Z5 = ["svg", h, [
            ["path", {
                d: "M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"
            }],
            ["path", {
                d: "M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"
            }],
            ["path", {
                d: "M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"
            }],
            ["path", {
                d: "M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"
            }],
            ["path", {
                d: "M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"
            }]
        ]],
        P5 = ["svg", h, [
            ["path", {
                d: "M4 22V4c0-.5.2-1 .6-1.4C5 2.2 5.5 2 6 2h8.5L20 7.5V20c0 .5-.2 1-.6 1.4-.4.4-.9.6-1.4.6h-2"
            }],
            ["polyline", {
                points: "14 2 14 8 20 8"
            }],
            ["circle", {
                cx: "10",
                cy: "20",
                r: "2"
            }],
            ["path", {
                d: "M10 7V6"
            }],
            ["path", {
                d: "M10 12v-1"
            }],
            ["path", {
                d: "M10 18v-2"
            }]
        ]],
        B5 = ["svg", h, [
            ["path", {
                d: "M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v2"
            }],
            ["polyline", {
                points: "14 2 14 8 20 8"
            }],
            ["path", {
                d: "M2 17v-3a4 4 0 0 1 8 0v3"
            }],
            ["circle", {
                cx: "9",
                cy: "17",
                r: "1"
            }],
            ["circle", {
                cx: "3",
                cy: "17",
                r: "1"
            }]
        ]],
        D5 = ["svg", h, [
            ["path", {
                d: "M17.5 22h.5c.5 0 1-.2 1.4-.6.4-.4.6-.9.6-1.4V7.5L14.5 2H6c-.5 0-1 .2-1.4.6C4.2 3 4 3.5 4 4v3"
            }],
            ["polyline", {
                points: "14 2 14 8 20 8"
            }],
            ["path", {
                d: "M10 20v-1a2 2 0 1 1 4 0v1a2 2 0 1 1-4 0Z"
            }],
            ["path", {
                d: "M6 20v-1a2 2 0 1 0-4 0v1a2 2 0 1 0 4 0Z"
            }],
            ["path", {
                d: "M2 19v-3a6 6 0 0 1 12 0v3"
            }]
        ]],
        T5 = ["svg", h, [
            ["path", {
                d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"
            }],
            ["polyline", {
                points: "14 2 14 8 20 8"
            }],
            ["path", {
                d: "M8 10v8h8"
            }],
            ["path", {
                d: "m8 18 4-4"
            }]
        ]],
        z5 = ["svg", h, [
            ["path", {
                d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"
            }],
            ["path", {
                d: "M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            }],
            ["path", {
                d: "m14 12.5 1 5.5-3-1-3 1 1-5.5"
            }]
        ]],
        R5 = ["svg", h, [
            ["path", {
                d: "M4 7V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-6"
            }],
            ["polyline", {
                points: "14 2 14 8 20 8"
            }],
            ["path", {
                d: "M5 17a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            }],
            ["path", {
                d: "M7 16.5 8 22l-3-1-3 1 1-5.5"
            }]
        ]],
        b5 = ["svg", h, [
            ["path", {
                d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"
            }],
            ["polyline", {
                points: "14 2 14 8 20 8"
            }],
            ["path", {
                d: "M12 18v-6"
            }],
            ["path", {
                d: "M8 18v-1"
            }],
            ["path", {
                d: "M16 18v-3"
            }]
        ]],
        U5 = ["svg", h, [
            ["path", {
                d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"
            }],
            ["polyline", {
                points: "14 2 14 8 20 8"
            }],
            ["path", {
                d: "M12 18v-4"
            }],
            ["path", {
                d: "M8 18v-2"
            }],
            ["path", {
                d: "M16 18v-6"
            }]
        ]],
        O5 = ["svg", h, [
            ["path", {
                d: "M14.5 22H18a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4"
            }],
            ["polyline", {
                points: "14 2 14 8 20 8"
            }],
            ["path", {
                d: "M2.97 13.12c-.6.36-.97 1.02-.97 1.74v3.28c0 .72.37 1.38.97 1.74l3 1.83c.63.39 1.43.39 2.06 0l3-1.83c.6-.36.97-1.02.97-1.74v-3.28c0-.72-.37-1.38-.97-1.74l-3-1.83a1.97 1.97 0 0 0-2.06 0l-3 1.83Z"
            }],
            ["path", {
                d: "m7 17-4.74-2.85"
            }],
            ["path", {
                d: "m7 17 4.74-2.85"
            }],
            ["path", {
                d: "M7 17v5"
            }]
        ]],
        q5 = ["svg", h, [
            ["path", {
                d: "M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4"
            }],
            ["polyline", {
                points: "14 2 14 8 20 8"
            }],
            ["path", {
                d: "m3 15 2 2 4-4"
            }]
        ]],
        G5 = ["svg", h, [
            ["path", {
                d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"
            }],
            ["polyline", {
                points: "14 2 14 8 20 8"
            }],
            ["path", {
                d: "m9 15 2 2 4-4"
            }]
        ]],
        W5 = ["svg", h, [
            ["path", {
                d: "M16 22h2c.5 0 1-.2 1.4-.6.4-.4.6-.9.6-1.4V7.5L14.5 2H6c-.5 0-1 .2-1.4.6C4.2 3 4 3.5 4 4v3"
            }],
            ["polyline", {
                points: "14 2 14 8 20 8"
            }],
            ["circle", {
                cx: "8",
                cy: "16",
                r: "6"
            }],
            ["path", {
                d: "M9.5 17.5 8 16.25V14"
            }]
        ]],
        E5 = ["svg", h, [
            ["path", {
                d: "M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4"
            }],
            ["polyline", {
                points: "14 2 14 8 20 8"
            }],
            ["path", {
                d: "m9 18 3-3-3-3"
            }],
            ["path", {
                d: "m5 12-3 3 3 3"
            }]
        ]],
        I5 = ["svg", h, [
            ["path", {
                d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"
            }],
            ["polyline", {
                points: "14 2 14 8 20 8"
            }],
            ["path", {
                d: "m10 13-2 2 2 2"
            }],
            ["path", {
                d: "m14 17 2-2-2-2"
            }]
        ]],
        X5 = ["svg", h, [
            ["circle", {
                cx: "6",
                cy: "13",
                r: "3"
            }],
            ["path", {
                d: "m9.7 14.4-.9-.3"
            }],
            ["path", {
                d: "m3.2 11.9-.9-.3"
            }],
            ["path", {
                d: "m4.6 16.7.3-.9"
            }],
            ["path", {
                d: "m7.6 16.7-.4-1"
            }],
            ["path", {
                d: "m4.8 10.3-.4-1"
            }],
            ["path", {
                d: "m2.3 14.6 1-.4"
            }],
            ["path", {
                d: "m8.7 11.8 1-.4"
            }],
            ["path", {
                d: "m7.4 9.3-.3.9"
            }],
            ["path", {
                d: "M14 2v6h6"
            }],
            ["path", {
                d: "M4 5.5V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-1.5"
            }]
        ]],
        N5 = ["svg", h, [
            ["path", {
                d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"
            }],
            ["path", {
                d: "M12 13V7"
            }],
            ["path", {
                d: "M9 10h6"
            }],
            ["path", {
                d: "M9 17h6"
            }]
        ]],
        K5 = ["svg", h, [
            ["rect", {
                width: "4",
                height: "6",
                x: "2",
                y: "12",
                rx: "2"
            }],
            ["path", {
                d: "M14 2v6h6"
            }],
            ["path", {
                d: "M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4"
            }],
            ["path", {
                d: "M10 12h2v6"
            }],
            ["path", {
                d: "M10 18h4"
            }]
        ]],
        J5 = ["svg", h, [
            ["path", {
                d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"
            }],
            ["polyline", {
                points: "14 2 14 8 20 8"
            }],
            ["path", {
                d: "M12 18v-6"
            }],
            ["path", {
                d: "m9 15 3 3 3-3"
            }]
        ]],
        j5 = ["svg", h, [
            ["path", {
                d: "M4 13.5V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-5.5"
            }],
            ["polyline", {
                points: "14 2 14 8 20 8"
            }],
            ["path", {
                d: "M10.42 12.61a2.1 2.1 0 1 1 2.97 2.97L7.95 21 4 22l.99-3.95 5.43-5.44Z"
            }]
        ]],
        Q5 = ["svg", h, [
            ["path", {
                d: "M4 6V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2H4"
            }],
            ["polyline", {
                points: "14 2 14 8 20 8"
            }],
            ["path", {
                d: "M10.29 10.7a2.43 2.43 0 0 0-2.66-.52c-.29.12-.56.3-.78.53l-.35.34-.35-.34a2.43 2.43 0 0 0-2.65-.53c-.3.12-.56.3-.79.53-.95.94-1 2.53.2 3.74L6.5 18l3.6-3.55c1.2-1.21 1.14-2.8.19-3.74Z"
            }]
        ]],
        Y5 = ["svg", h, [
            ["path", {
                d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"
            }],
            ["polyline", {
                points: "14 2 14 8 20 8"
            }],
            ["circle", {
                cx: "10",
                cy: "13",
                r: "2"
            }],
            ["path", {
                d: "m20 17-1.09-1.09a2 2 0 0 0-2.82 0L10 22"
            }]
        ]],
        _5 = ["svg", h, [
            ["path", {
                d: "M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4"
            }],
            ["polyline", {
                points: "14 2 14 8 20 8"
            }],
            ["path", {
                d: "M2 15h10"
            }],
            ["path", {
                d: "m9 18 3-3-3-3"
            }]
        ]],
        a3 = ["svg", h, [
            ["path", {
                d: "M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4"
            }],
            ["polyline", {
                points: "14 2 14 8 20 8"
            }],
            ["path", {
                d: "M4 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1"
            }],
            ["path", {
                d: "M8 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1"
            }]
        ]],
        h3 = ["svg", h, [
            ["path", {
                d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"
            }],
            ["polyline", {
                points: "14 2 14 8 20 8"
            }],
            ["path", {
                d: "M10 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1"
            }],
            ["path", {
                d: "M14 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1"
            }]
        ]],
        t3 = ["svg", h, [
            ["path", {
                d: "M4 10V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2H4"
            }],
            ["polyline", {
                points: "14 2 14 8 20 8"
            }],
            ["circle", {
                cx: "4",
                cy: "16",
                r: "2"
            }],
            ["path", {
                d: "m10 10-4.5 4.5"
            }],
            ["path", {
                d: "m9 11 1 1"
            }]
        ]],
        d3 = ["svg", h, [
            ["path", {
                d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"
            }],
            ["circle", {
                cx: "10",
                cy: "16",
                r: "2"
            }],
            ["path", {
                d: "m16 10-4.5 4.5"
            }],
            ["path", {
                d: "m15 11 1 1"
            }]
        ]],
        c3 = ["svg", h, [
            ["path", {
                d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"
            }],
            ["polyline", {
                points: "14 2 14 8 20 8"
            }],
            ["path", {
                d: "m16 13-3.5 3.5-2-2L8 17"
            }]
        ]],
        n3 = ["svg", h, [
            ["path", {
                d: "M4 5V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2H4"
            }],
            ["polyline", {
                points: "14 2 14 8 20 8"
            }],
            ["rect", {
                width: "8",
                height: "5",
                x: "2",
                y: "13",
                rx: "1"
            }],
            ["path", {
                d: "M8 13v-2a2 2 0 1 0-4 0v2"
            }]
        ]],
        i3 = ["svg", h, [
            ["path", {
                d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"
            }],
            ["rect", {
                width: "8",
                height: "6",
                x: "8",
                y: "12",
                rx: "1"
            }],
            ["path", {
                d: "M15 12v-2a3 3 0 1 0-6 0v2"
            }]
        ]],
        p3 = ["svg", h, [
            ["path", {
                d: "M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4"
            }],
            ["polyline", {
                points: "14 2 14 8 20 8"
            }],
            ["path", {
                d: "M3 15h6"
            }]
        ]],
        e3 = ["svg", h, [
            ["path", {
                d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"
            }],
            ["polyline", {
                points: "14 2 14 8 20 8"
            }],
            ["line", {
                x1: "9",
                x2: "15",
                y1: "15",
                y2: "15"
            }]
        ]],
        M3 = ["svg", h, [
            ["path", {
                d: "M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4"
            }],
            ["polyline", {
                points: "14 2 14 8 20 8"
            }],
            ["path", {
                d: "M2 15h10"
            }],
            ["path", {
                d: "m5 12-3 3 3 3"
            }]
        ]],
        l3 = ["svg", h, [
            ["path", {
                d: "M16 22h2a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v3"
            }],
            ["polyline", {
                points: "14 2 14 8 20 8"
            }],
            ["path", {
                d: "M4.04 11.71a5.84 5.84 0 1 0 8.2 8.29"
            }],
            ["path", {
                d: "M13.83 16A5.83 5.83 0 0 0 8 10.17V16h5.83Z"
            }]
        ]],
        v3 = ["svg", h, [
            ["path", {
                d: "M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4"
            }],
            ["polyline", {
                points: "14 2 14 8 20 8"
            }],
            ["path", {
                d: "M3 15h6"
            }],
            ["path", {
                d: "M6 12v6"
            }]
        ]],
        o3 = ["svg", h, [
            ["path", {
                d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"
            }],
            ["polyline", {
                points: "14 2 14 8 20 8"
            }],
            ["line", {
                x1: "12",
                x2: "12",
                y1: "18",
                y2: "12"
            }],
            ["line", {
                x1: "9",
                x2: "15",
                y1: "15",
                y2: "15"
            }]
        ]],
        s3 = ["svg", h, [
            ["path", {
                d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"
            }],
            ["path", {
                d: "M10 10.3c.2-.4.5-.8.9-1a2.1 2.1 0 0 1 2.6.4c.3.4.5.8.5 1.3 0 1.3-2 2-2 2"
            }],
            ["path", {
                d: "M12 17h.01"
            }]
        ]],
        g3 = ["svg", h, [
            ["path", {
                d: "M20 10V7.5L14.5 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h4.5"
            }],
            ["polyline", {
                points: "14 2 14 8 20 8"
            }],
            ["path", {
                d: "M16 22a2 2 0 0 1-2-2"
            }],
            ["path", {
                d: "M20 22a2 2 0 0 0 2-2"
            }],
            ["path", {
                d: "M20 14a2 2 0 0 1 2 2"
            }],
            ["path", {
                d: "M16 14a2 2 0 0 0-2 2"
            }]
        ]],
        r3 = ["svg", h, [
            ["path", {
                d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"
            }],
            ["polyline", {
                points: "14 2 14 8 20 8"
            }],
            ["circle", {
                cx: "11.5",
                cy: "14.5",
                r: "2.5"
            }],
            ["path", {
                d: "M13.25 16.25 15 18"
            }]
        ]],
        y3 = ["svg", h, [
            ["path", {
                d: "M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v3"
            }],
            ["polyline", {
                points: "14 2 14 8 20 8"
            }],
            ["path", {
                d: "M5 17a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
            }],
            ["path", {
                d: "m9 18-1.5-1.5"
            }]
        ]],
        $3 = ["svg", h, [
            ["path", {
                d: "M20 19.5v.5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8.5L18 5.5"
            }],
            ["path", {
                d: "M8 18h1"
            }],
            ["path", {
                d: "M18.42 9.61a2.1 2.1 0 1 1 2.97 2.97L16.95 17 13 18l.99-3.95 4.43-4.44Z"
            }]
        ]],
        m3 = ["svg", h, [
            ["path", {
                d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"
            }],
            ["polyline", {
                points: "14 2 14 8 20 8"
            }],
            ["path", {
                d: "M8 13h2"
            }],
            ["path", {
                d: "M8 17h2"
            }],
            ["path", {
                d: "M14 13h2"
            }],
            ["path", {
                d: "M14 17h2"
            }]
        ]],
        H3 = ["svg", h, [
            ["path", {
                d: "M16 2v5h5"
            }],
            ["path", {
                d: "M21 6v6.5c0 .8-.7 1.5-1.5 1.5h-7c-.8 0-1.5-.7-1.5-1.5v-9c0-.8.7-1.5 1.5-1.5H17l4 4z"
            }],
            ["path", {
                d: "M7 8v8.8c0 .3.2.6.4.8.2.2.5.4.8.4H15"
            }],
            ["path", {
                d: "M3 12v8.8c0 .3.2.6.4.8.2.2.5.4.8.4H11"
            }]
        ]],
        C3 = ["svg", h, [
            ["path", {
                d: "M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v7"
            }],
            ["polyline", {
                points: "14 2 14 8 20 8"
            }],
            ["path", {
                d: "m10 18 3-3-3-3"
            }],
            ["path", {
                d: "M4 18v-1a2 2 0 0 1 2-2h6"
            }]
        ]],
        u3 = ["svg", h, [
            ["path", {
                d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"
            }],
            ["polyline", {
                points: "14 2 14 8 20 8"
            }],
            ["path", {
                d: "m8 16 2-2-2-2"
            }],
            ["path", {
                d: "M12 18h4"
            }]
        ]],
        V3 = ["svg", h, [
            ["path", {
                d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"
            }],
            ["polyline", {
                points: "14 2 14 8 20 8"
            }],
            ["line", {
                x1: "16",
                x2: "8",
                y1: "13",
                y2: "13"
            }],
            ["line", {
                x1: "16",
                x2: "8",
                y1: "17",
                y2: "17"
            }],
            ["line", {
                x1: "10",
                x2: "8",
                y1: "9",
                y2: "9"
            }]
        ]],
        w3 = ["svg", h, [
            ["path", {
                d: "M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4"
            }],
            ["polyline", {
                points: "14 2 14 8 20 8"
            }],
            ["path", {
                d: "M2 13v-1h6v1"
            }],
            ["path", {
                d: "M4 18h2"
            }],
            ["path", {
                d: "M5 12v6"
            }]
        ]],
        x3 = ["svg", h, [
            ["path", {
                d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"
            }],
            ["polyline", {
                points: "14 2 14 8 20 8"
            }],
            ["path", {
                d: "M9 13v-1h6v1"
            }],
            ["path", {
                d: "M11 18h2"
            }],
            ["path", {
                d: "M12 12v6"
            }]
        ]],
        L3 = ["svg", h, [
            ["path", {
                d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"
            }],
            ["polyline", {
                points: "14 2 14 8 20 8"
            }],
            ["path", {
                d: "M12 12v6"
            }],
            ["path", {
                d: "m15 15-3-3-3 3"
            }]
        ]],
        S3 = ["svg", h, [
            ["path", {
                d: "M4 8V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2H4"
            }],
            ["polyline", {
                points: "14 2 14 8 20 8"
            }],
            ["path", {
                d: "m10 15.5 4 2.5v-6l-4 2.5"
            }],
            ["rect", {
                width: "8",
                height: "6",
                x: "2",
                y: "12",
                rx: "1"
            }]
        ]],
        A3 = ["svg", h, [
            ["path", {
                d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"
            }],
            ["polyline", {
                points: "14 2 14 8 20 8"
            }],
            ["path", {
                d: "m10 11 5 3-5 3v-6Z"
            }]
        ]],
        f3 = ["svg", h, [
            ["path", {
                d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"
            }],
            ["polyline", {
                points: "14 2 14 8 20 8"
            }],
            ["path", {
                d: "M11.5 13.5c.32.4.5.94.5 1.5s-.18 1.1-.5 1.5"
            }],
            ["path", {
                d: "M15 12c.64.8 1 1.87 1 3s-.36 2.2-1 3"
            }],
            ["path", {
                d: "M8 15h.01"
            }]
        ]],
        k3 = ["svg", h, [
            ["path", {
                d: "M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v3"
            }],
            ["polyline", {
                points: "14 2 14 8 20 8"
            }],
            ["path", {
                d: "m7 10-3 2H2v4h2l3 2v-8Z"
            }],
            ["path", {
                d: "M11 11c.64.8 1 1.87 1 3s-.36 2.2-1 3"
            }]
        ]],
        F3 = ["svg", h, [
            ["path", {
                d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"
            }],
            ["path", {
                d: "M12 9v4"
            }],
            ["path", {
                d: "M12 17h.01"
            }]
        ]],
        Z3 = ["svg", h, [
            ["path", {
                d: "M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4"
            }],
            ["path", {
                d: "M14 2v6h6"
            }],
            ["path", {
                d: "m3 12.5 5 5"
            }],
            ["path", {
                d: "m8 12.5-5 5"
            }]
        ]],
        P3 = ["svg", h, [
            ["path", {
                d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"
            }],
            ["polyline", {
                points: "14 2 14 8 20 8"
            }],
            ["line", {
                x1: "9.5",
                x2: "14.5",
                y1: "12.5",
                y2: "17.5"
            }],
            ["line", {
                x1: "14.5",
                x2: "9.5",
                y1: "12.5",
                y2: "17.5"
            }]
        ]],
        B3 = ["svg", h, [
            ["path", {
                d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"
            }],
            ["polyline", {
                points: "14 2 14 8 20 8"
            }]
        ]],
        D3 = ["svg", h, [
            ["path", {
                d: "M15.5 2H8.6c-.4 0-.8.2-1.1.5-.3.3-.5.7-.5 1.1v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h9.8c.4 0 .8-.2 1.1-.5.3-.3.5-.7.5-1.1V6.5L15.5 2z"
            }],
            ["path", {
                d: "M3 7.6v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h9.8"
            }],
            ["path", {
                d: "M15 2v5h5"
            }]
        ]],
        T3 = ["svg", h, [
            ["rect", {
                width: "18",
                height: "18",
                x: "3",
                y: "3",
                rx: "2"
            }],
            ["path", {
                d: "M7 3v18"
            }],
            ["path", {
                d: "M3 7.5h4"
            }],
            ["path", {
                d: "M3 12h18"
            }],
            ["path", {
                d: "M3 16.5h4"
            }],
            ["path", {
                d: "M17 3v18"
            }],
            ["path", {
                d: "M17 7.5h4"
            }],
            ["path", {
                d: "M17 16.5h4"
            }]
        ]],
        z3 = ["svg", h, [
            ["path", {
                d: "M13.013 3H2l8 9.46V19l4 2v-8.54l.9-1.055"
            }],
            ["path", {
                d: "m22 3-5 5"
            }],
            ["path", {
                d: "m17 3 5 5"
            }]
        ]],
        R3 = ["svg", h, [
            ["polygon", {
                points: "22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"
            }]
        ]],
        b3 = ["svg", h, [
            ["path", {
                d: "M2 12C2 6.5 6.5 2 12 2a10 10 0 0 1 8 4"
            }],
            ["path", {
                d: "M5 19.5C5.5 18 6 15 6 12c0-.7.12-1.37.34-2"
            }],
            ["path", {
                d: "M17.29 21.02c.12-.6.43-2.3.5-3.02"
            }],
            ["path", {
                d: "M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4"
            }],
            ["path", {
                d: "M8.65 22c.21-.66.45-1.32.57-2"
            }],
            ["path", {
                d: "M14 13.12c0 2.38 0 6.38-1 8.88"
            }],
            ["path", {
                d: "M2 16h.01"
            }],
            ["path", {
                d: "M21.8 16c.2-2 .131-5.354 0-6"
            }],
            ["path", {
                d: "M9 6.8a6 6 0 0 1 9 5.2c0 .47 0 1.17-.02 2"
            }]
        ]],
        U3 = ["svg", h, [
            ["path", {
                d: "M18 12.47v.03m0-.5v.47m-.475 5.056A6.744 6.744 0 0 1 15 18c-3.56 0-7.56-2.53-8.5-6 .348-1.28 1.114-2.433 2.121-3.38m3.444-2.088A8.802 8.802 0 0 1 15 6c3.56 0 6.06 2.54 7 6-.309 1.14-.786 2.177-1.413 3.058"
            }],
            ["path", {
                d: "M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33m7.48-4.372A9.77 9.77 0 0 1 16 6.07m0 11.86a9.77 9.77 0 0 1-1.728-3.618"
            }],
            ["path", {
                d: "m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98M8.53 3h5.27a2 2 0 0 1 1.98 1.67l.23 1.4M2 2l20 20"
            }]
        ]],
        O3 = ["svg", h, [
            ["path", {
                d: "M2 16s9-15 20-4C11 23 2 8 2 8"
            }]
        ]],
        q3 = ["svg", h, [
            ["path", {
                d: "M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.47-3.44 6-7 6s-7.56-2.53-8.5-6Z"
            }],
            ["path", {
                d: "M18 12v.5"
            }],
            ["path", {
                d: "M16 17.93a9.77 9.77 0 0 1 0-11.86"
            }],
            ["path", {
                d: "M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33"
            }],
            ["path", {
                d: "M10.46 7.26C10.2 5.88 9.17 4.24 8 3h5.8a2 2 0 0 1 1.98 1.67l.23 1.4"
            }],
            ["path", {
                d: "m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98"
            }]
        ]],
        G3 = ["svg", h, [
            ["path", {
                d: "M8 2c3 0 5 2 8 2s4-1 4-1v11"
            }],
            ["path", {
                d: "M4 22V4"
            }],
            ["path", {
                d: "M4 15s1-1 4-1 5 2 8 2"
            }],
            ["line", {
                x1: "2",
                x2: "22",
                y1: "2",
                y2: "22"
            }]
        ]],
        W3 = ["svg", h, [
            ["path", {
                d: "M17 22V2L7 7l10 5"
            }]
        ]],
        E3 = ["svg", h, [
            ["path", {
                d: "M7 22V2l10 5-10 5"
            }]
        ]],
        I3 = ["svg", h, [
            ["path", {
                d: "M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"
            }],
            ["line", {
                x1: "4",
                x2: "4",
                y1: "22",
                y2: "15"
            }]
        ]],
        X3 = ["svg", h, [
            ["path", {
                d: "M12 2c1 3 2.5 3.5 3.5 4.5A5 5 0 0 1 17 10a5 5 0 1 1-10 0c0-.3 0-.6.1-.9a2 2 0 1 0 3.3-2C8 4.5 11 2 12 2Z"
            }],
            ["path", {
                d: "m5 22 14-4"
            }],
            ["path", {
                d: "m5 18 14 4"
            }]
        ]],
        N3 = ["svg", h, [
            ["path", {
                d: "M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"
            }]
        ]],
        K3 = ["svg", h, [
            ["path", {
                d: "M16 16v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V10c0-2-2-2-2-4"
            }],
            ["path", {
                d: "M7 2h11v4c0 2-2 2-2 4v1"
            }],
            ["line", {
                x1: "11",
                x2: "18",
                y1: "6",
                y2: "6"
            }],
            ["line", {
                x1: "2",
                x2: "22",
                y1: "2",
                y2: "22"
            }]
        ]],
        J3 = ["svg", h, [
            ["path", {
                d: "M18 6c0 2-2 2-2 4v10a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V10c0-2-2-2-2-4V2h12z"
            }],
            ["line", {
                x1: "6",
                x2: "18",
                y1: "6",
                y2: "6"
            }],
            ["line", {
                x1: "12",
                x2: "12",
                y1: "12",
                y2: "12"
            }]
        ]],
        j3 = ["svg", h, [
            ["path", {
                d: "M10 10 4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-1.272-2.542"
            }],
            ["path", {
                d: "M10 2v2.343"
            }],
            ["path", {
                d: "M14 2v6.343"
            }],
            ["path", {
                d: "M8.5 2h7"
            }],
            ["path", {
                d: "M7 16h9"
            }],
            ["line", {
                x1: "2",
                x2: "22",
                y1: "2",
                y2: "22"
            }]
        ]],
        Q3 = ["svg", h, [
            ["path", {
                d: "M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2"
            }],
            ["path", {
                d: "M8.5 2h7"
            }],
            ["path", {
                d: "M7 16h10"
            }]
        ]],
        Y3 = ["svg", h, [
            ["path", {
                d: "M10 2v7.31"
            }],
            ["path", {
                d: "M14 9.3V1.99"
            }],
            ["path", {
                d: "M8.5 2h7"
            }],
            ["path", {
                d: "M14 9.3a6.5 6.5 0 1 1-4 0"
            }],
            ["path", {
                d: "M5.52 16h12.96"
            }]
        ]],
        _3 = ["svg", h, [
            ["path", {
                d: "m3 7 5 5-5 5V7"
            }],
            ["path", {
                d: "m21 7-5 5 5 5V7"
            }],
            ["path", {
                d: "M12 20v2"
            }],
            ["path", {
                d: "M12 14v2"
            }],
            ["path", {
                d: "M12 8v2"
            }],
            ["path", {
                d: "M12 2v2"
            }]
        ]],
        ad = ["svg", h, [
            ["path", {
                d: "M8 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h3"
            }],
            ["path", {
                d: "M16 3h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-3"
            }],
            ["path", {
                d: "M12 20v2"
            }],
            ["path", {
                d: "M12 14v2"
            }],
            ["path", {
                d: "M12 8v2"
            }],
            ["path", {
                d: "M12 2v2"
            }]
        ]],
        hd = ["svg", h, [
            ["path", {
                d: "m17 3-5 5-5-5h10"
            }],
            ["path", {
                d: "m17 21-5-5-5 5h10"
            }],
            ["path", {
                d: "M4 12H2"
            }],
            ["path", {
                d: "M10 12H8"
            }],
            ["path", {
                d: "M16 12h-2"
            }],
            ["path", {
                d: "M22 12h-2"
            }]
        ]],
        td = ["svg", h, [
            ["path", {
                d: "M21 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3"
            }],
            ["path", {
                d: "M21 16v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3"
            }],
            ["path", {
                d: "M4 12H2"
            }],
            ["path", {
                d: "M10 12H8"
            }],
            ["path", {
                d: "M16 12h-2"
            }],
            ["path", {
                d: "M22 12h-2"
            }]
        ]],
        dd = ["svg", h, [
            ["path", {
                d: "M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1"
            }],
            ["circle", {
                cx: "12",
                cy: "8",
                r: "2"
            }],
            ["path", {
                d: "M12 10v12"
            }],
            ["path", {
                d: "M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z"
            }],
            ["path", {
                d: "M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z"
            }]
        ]],
        cd = ["svg", h, [
            ["path", {
                d: "M12 7.5a4.5 4.5 0 1 1 4.5 4.5M12 7.5A4.5 4.5 0 1 0 7.5 12M12 7.5V9m-4.5 3a4.5 4.5 0 1 0 4.5 4.5M7.5 12H9m7.5 0a4.5 4.5 0 1 1-4.5 4.5m4.5-4.5H15m-3 4.5V15"
            }],
            ["circle", {
                cx: "12",
                cy: "12",
                r: "3"
            }],
            ["path", {
                d: "m8 16 1.5-1.5"
            }],
            ["path", {
                d: "M14.5 9.5 16 8"
            }],
            ["path", {
                d: "m8 8 1.5 1.5"
            }],
            ["path", {
                d: "M14.5 14.5 16 16"
            }]
        ]],
        nd = ["svg", h, [
            ["circle", {
                cx: "12",
                cy: "12",
                r: "3"
            }],
            ["path", {
                d: "M3 7V5a2 2 0 0 1 2-2h2"
            }],
            ["path", {
                d: "M17 3h2a2 2 0 0 1 2 2v2"
            }],
            ["path", {
                d: "M21 17v2a2 2 0 0 1-2 2h-2"
            }],
            ["path", {
                d: "M7 21H5a2 2 0 0 1-2-2v-2"
            }]
        ]],
        id = ["svg", h, [
            ["path", {
                d: "M2 12h6"
            }],
            ["path", {
                d: "M22 12h-6"
            }],
            ["path", {
                d: "M12 2v2"
            }],
            ["path", {
                d: "M12 8v2"
            }],
            ["path", {
                d: "M12 14v2"
            }],
            ["path", {
                d: "M12 20v2"
            }],
            ["path", {
                d: "m19 9-3 3 3 3"
            }],
            ["path", {
                d: "m5 15 3-3-3-3"
            }]
        ]],
        pd = ["svg", h, [
            ["path", {
                d: "M12 22v-6"
            }],
            ["path", {
                d: "M12 8V2"
            }],
            ["path", {
                d: "M4 12H2"
            }],
            ["path", {
                d: "M10 12H8"
            }],
            ["path", {
                d: "M16 12h-2"
            }],
            ["path", {
                d: "M22 12h-2"
            }],
            ["path", {
                d: "m15 19-3-3-3 3"
            }],
            ["path", {
                d: "m15 5-3 3-3-3"
            }]
        ]],
        ed = ["svg", h, [
            ["path", {
                d: "M22 20V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2h6"
            }],
            ["circle", {
                cx: "16",
                cy: "19",
                r: "2"
            }],
            ["path", {
                d: "M16 11v-1"
            }],
            ["path", {
                d: "M16 17v-2"
            }]
        ]],
        Md = ["svg", h, [
            ["path", {
                d: "M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"
            }],
            ["path", {
                d: "m9 13 2 2 4-4"
            }]
        ]],
        ld = ["svg", h, [
            ["path", {
                d: "M7 20H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H20a2 2 0 0 1 2 2"
            }],
            ["circle", {
                cx: "16",
                cy: "16",
                r: "6"
            }],
            ["path", {
                d: "M16 14v2l1 1"
            }]
        ]],
        vd = ["svg", h, [
            ["path", {
                d: "M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"
            }],
            ["path", {
                d: "M2 10h20"
            }]
        ]],
        od = ["svg", h, [
            ["circle", {
                cx: "18",
                cy: "18",
                r: "3"
            }],
            ["path", {
                d: "M10.5 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v3.5"
            }],
            ["path", {
                d: "m21.7 19.4-.9-.3"
            }],
            ["path", {
                d: "m15.2 16.9-.9-.3"
            }],
            ["path", {
                d: "m16.6 21.7.3-.9"
            }],
            ["path", {
                d: "m19.1 15.2.3-.9"
            }],
            ["path", {
                d: "m19.6 21.7-.4-1"
            }],
            ["path", {
                d: "m16.8 15.3-.4-1"
            }],
            ["path", {
                d: "m14.3 19.6 1-.4"
            }],
            ["path", {
                d: "m20.7 16.8 1-.4"
            }]
        ]],
        sd = ["svg", h, [
            ["path", {
                d: "M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"
            }],
            ["circle", {
                cx: "12",
                cy: "13",
                r: "1"
            }]
        ]],
        gd = ["svg", h, [
            ["path", {
                d: "M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"
            }],
            ["path", {
                d: "M12 10v6"
            }],
            ["path", {
                d: "m15 13-3 3-3-3"
            }]
        ]],
        rd = ["svg", h, [
            ["path", {
                d: "M8.42 10.61a2.1 2.1 0 1 1 2.97 2.97L5.95 19 2 20l.99-3.95 5.43-5.44Z"
            }],
            ["path", {
                d: "M2 11.5V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-9.5"
            }]
        ]],
        yd = ["svg", h, [
            ["path", {
                d: "M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5"
            }],
            ["circle", {
                cx: "13",
                cy: "12",
                r: "2"
            }],
            ["path", {
                d: "M18 19c-2.8 0-5-2.2-5-5v8"
            }],
            ["circle", {
                cx: "20",
                cy: "19",
                r: "2"
            }]
        ]],
        $d = ["svg", h, [
            ["path", {
                d: "M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"
            }],
            ["circle", {
                cx: "12",
                cy: "13",
                r: "2"
            }],
            ["path", {
                d: "M14 13h3"
            }],
            ["path", {
                d: "M7 13h3"
            }]
        ]],
        md = ["svg", h, [
            ["path", {
                d: "M11 20H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H20a2 2 0 0 1 2 2v1.5"
            }],
            ["path", {
                d: "M21.29 13.7a2.43 2.43 0 0 0-2.65-.52c-.3.12-.57.3-.8.53l-.34.34-.35-.34a2.43 2.43 0 0 0-2.65-.53c-.3.12-.56.3-.79.53-.95.94-1 2.53.2 3.74L17.5 21l3.6-3.55c1.2-1.21 1.14-2.8.19-3.74Z"
            }]
        ]],
        Hd = ["svg", h, [
            ["path", {
                d: "M2 9V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1"
            }],
            ["path", {
                d: "M2 13h10"
            }],
            ["path", {
                d: "m9 16 3-3-3-3"
            }]
        ]],
        Cd = ["svg", h, [
            ["path", {
                d: "M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"
            }],
            ["path", {
                d: "M8 10v4"
            }],
            ["path", {
                d: "M12 10v2"
            }],
            ["path", {
                d: "M16 10v6"
            }]
        ]],
        ud = ["svg", h, [
            ["path", {
                d: "M10 20H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H20a2 2 0 0 1 2 2v2"
            }],
            ["circle", {
                cx: "16",
                cy: "20",
                r: "2"
            }],
            ["path", {
                d: "m22 14-4.5 4.5"
            }],
            ["path", {
                d: "m21 15 1 1"
            }]
        ]],
        Vd = ["svg", h, [
            ["path", {
                d: "M10 20H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H20a2 2 0 0 1 2 2v2.5"
            }],
            ["rect", {
                width: "8",
                height: "5",
                x: "14",
                y: "17",
                rx: "1"
            }],
            ["path", {
                d: "M20 17v-2a2 2 0 1 0-4 0v2"
            }]
        ]],
        wd = ["svg", h, [
            ["path", {
                d: "M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"
            }],
            ["line", {
                x1: "9",
                x2: "15",
                y1: "13",
                y2: "13"
            }]
        ]],
        xd = ["svg", h, [
            ["path", {
                d: "m6 14 1.45-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.55 6a2 2 0 0 1-1.94 1.5H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H18a2 2 0 0 1 2 2v2"
            }],
            ["circle", {
                cx: "14",
                cy: "15",
                r: "1"
            }]
        ]],
        Ld = ["svg", h, [
            ["path", {
                d: "m6 14 1.45-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.55 6a2 2 0 0 1-1.94 1.5H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H18a2 2 0 0 1 2 2v2"
            }]
        ]],
        Sd = ["svg", h, [
            ["path", {
                d: "M2 7.5V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2"
            }],
            ["path", {
                d: "M2 13h10"
            }],
            ["path", {
                d: "m5 10-3 3 3 3"
            }]
        ]],
        Ad = ["svg", h, [
            ["path", {
                d: "M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"
            }],
            ["line", {
                x1: "12",
                x2: "12",
                y1: "10",
                y2: "16"
            }],
            ["line", {
                x1: "9",
                x2: "15",
                y1: "13",
                y2: "13"
            }]
        ]],
        fd = ["svg", h, [
            ["path", {
                d: "M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"
            }],
            ["circle", {
                cx: "12",
                cy: "13",
                r: "2"
            }],
            ["path", {
                d: "M12 15v5"
            }]
        ]],
        kd = ["svg", h, [
            ["path", {
                d: "M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"
            }],
            ["circle", {
                cx: "11.5",
                cy: "12.5",
                r: "2.5"
            }],
            ["path", {
                d: "M13.27 14.27 15 16"
            }]
        ]],
        Fd = ["svg", h, [
            ["path", {
                d: "M11 20H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H20a2 2 0 0 1 2 2v4"
            }],
            ["circle", {
                cx: "17",
                cy: "17",
                r: "3"
            }],
            ["path", {
                d: "m21 21-1.5-1.5"
            }]
        ]],
        Zd = ["svg", h, [
            ["path", {
                d: "M2 9V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2"
            }],
            ["path", {
                d: "m8 16 3-3-3-3"
            }],
            ["path", {
                d: "M2 16v-1a2 2 0 0 1 2-2h6"
            }]
        ]],
        Pd = ["svg", h, [
            ["path", {
                d: "M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v1"
            }],
            ["path", {
                d: "M12 10v4h4"
            }],
            ["path", {
                d: "m12 14 1.5-1.5c.9-.9 2.2-1.5 3.5-1.5s2.6.6 3.5 1.5c.4.4.8 1 1 1.5"
            }],
            ["path", {
                d: "M22 22v-4h-4"
            }],
            ["path", {
                d: "m22 18-1.5 1.5c-.9.9-2.1 1.5-3.5 1.5s-2.6-.6-3.5-1.5c-.4-.4-.8-1-1-1.5"
            }]
        ]],
        Bd = ["svg", h, [
            ["path", {
                d: "M13 10h7a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2.5a1 1 0 0 1-.8-.4l-.9-1.2A1 1 0 0 0 15 3h-2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z"
            }],
            ["path", {
                d: "M13 21h7a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-2.88a1 1 0 0 1-.9-.55l-.44-.9a1 1 0 0 0-.9-.55H13a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z"
            }],
            ["path", {
                d: "M3 3v2c0 1.1.9 2 2 2h3"
            }],
            ["path", {
                d: "M3 3v13c0 1.1.9 2 2 2h3"
            }]
        ]],
        Dd = ["svg", h, [
            ["path", {
                d: "M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"
            }],
            ["path", {
                d: "M12 10v6"
            }],
            ["path", {
                d: "m9 13 3-3 3 3"
            }]
        ]],
        Td = ["svg", h, [
            ["path", {
                d: "M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"
            }],
            ["path", {
                d: "m9.5 10.5 5 5"
            }],
            ["path", {
                d: "m14.5 10.5-5 5"
            }]
        ]],
        zd = ["svg", h, [
            ["path", {
                d: "M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"
            }]
        ]],
        Rd = ["svg", h, [
            ["path", {
                d: "M8 17h12a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3.93a2 2 0 0 1-1.66-.9l-.82-1.2a2 2 0 0 0-1.66-.9H8a2 2 0 0 0-2 2v9c0 1.1.9 2 2 2Z"
            }],
            ["path", {
                d: "M2 8v11c0 1.1.9 2 2 2h14"
            }]
        ]],
        bd = ["svg", h, [
            ["path", {
                d: "M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z"
            }],
            ["path", {
                d: "M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z"
            }],
            ["path", {
                d: "M16 17h4"
            }],
            ["path", {
                d: "M4 13h4"
            }]
        ]],
        Ud = ["svg", h, [
            ["path", {
                d: "M12 12H5a2 2 0 0 0-2 2v5"
            }],
            ["circle", {
                cx: "13",
                cy: "19",
                r: "2"
            }],
            ["circle", {
                cx: "5",
                cy: "19",
                r: "2"
            }],
            ["path", {
                d: "M8 19h3m5-17v17h6M6 12V7c0-1.1.9-2 2-2h3l5 5"
            }]
        ]],
        Od = ["svg", h, [
            ["rect", {
                width: "20",
                height: "12",
                x: "2",
                y: "6",
                rx: "2"
            }],
            ["path", {
                d: "M12 12h.01"
            }],
            ["path", {
                d: "M17 12h.01"
            }],
            ["path", {
                d: "M7 12h.01"
            }]
        ]],
        qd = ["svg", h, [
            ["polyline", {
                points: "15 17 20 12 15 7"
            }],
            ["path", {
                d: "M4 18v-2a4 4 0 0 1 4-4h12"
            }]
        ]],
        Gd = ["svg", h, [
            ["line", {
                x1: "22",
                x2: "2",
                y1: "6",
                y2: "6"
            }],
            ["line", {
                x1: "22",
                x2: "2",
                y1: "18",
                y2: "18"
            }],
            ["line", {
                x1: "6",
                x2: "6",
                y1: "2",
                y2: "22"
            }],
            ["line", {
                x1: "18",
                x2: "18",
                y1: "2",
                y2: "22"
            }]
        ]],
        Wd = ["svg", h, [
            ["path", {
                d: "M5 16V9h14V2H5l14 14h-7m-7 0 7 7v-7m-7 0h7"
            }]
        ]],
        Ed = ["svg", h, [
            ["circle", {
                cx: "12",
                cy: "12",
                r: "10"
            }],
            ["path", {
                d: "M16 16s-1.5-2-4-2-4 2-4 2"
            }],
            ["line", {
                x1: "9",
                x2: "9.01",
                y1: "9",
                y2: "9"
            }],
            ["line", {
                x1: "15",
                x2: "15.01",
                y1: "9",
                y2: "9"
            }]
        ]],
        Id = ["svg", h, [
            ["line", {
                x1: "3",
                x2: "15",
                y1: "22",
                y2: "22"
            }],
            ["line", {
                x1: "4",
                x2: "14",
                y1: "9",
                y2: "9"
            }],
            ["path", {
                d: "M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18"
            }],
            ["path", {
                d: "M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5"
            }]
        ]],
        Xd = ["svg", h, [
            ["path", {
                d: "M3 7V5a2 2 0 0 1 2-2h2"
            }],
            ["path", {
                d: "M17 3h2a2 2 0 0 1 2 2v2"
            }],
            ["path", {
                d: "M21 17v2a2 2 0 0 1-2 2h-2"
            }],
            ["path", {
                d: "M7 21H5a2 2 0 0 1-2-2v-2"
            }],
            ["rect", {
                width: "10",
                height: "8",
                x: "7",
                y: "8",
                rx: "1"
            }]
        ]],
        Nd = ["svg", h, [
            ["rect", {
                width: "18",
                height: "18",
                x: "3",
                y: "3",
                rx: "2",
                ry: "2"
            }],
            ["path", {
                d: "M9 17c2 0 2.8-1 2.8-2.8V10c0-2 1-3.3 3.2-3"
            }],
            ["path", {
                d: "M9 11.2h5.7"
            }]
        ]],
        Kd = ["svg", h, [
            ["path", {
                d: "M2 7v10"
            }],
            ["path", {
                d: "M6 5v14"
            }],
            ["rect", {
                width: "12",
                height: "18",
                x: "10",
                y: "3",
                rx: "2"
            }]
        ]],
        Jd = ["svg", h, [
            ["path", {
                d: "M2 3v18"
            }],
            ["rect", {
                width: "12",
                height: "18",
                x: "6",
                y: "3",
                rx: "2"
            }],
            ["path", {
                d: "M22 3v18"
            }]
        ]],
        jd = ["svg", h, [
            ["rect", {
                width: "18",
                height: "14",
                x: "3",
                y: "3",
                rx: "2"
            }],
            ["path", {
                d: "M4 21h1"
            }],
            ["path", {
                d: "M9 21h1"
            }],
            ["path", {
                d: "M14 21h1"
            }],
            ["path", {
                d: "M19 21h1"
            }]
        ]],
        Qd = ["svg", h, [
            ["path", {
                d: "M7 2h10"
            }],
            ["path", {
                d: "M5 6h14"
            }],
            ["rect", {
                width: "18",
                height: "12",
                x: "3",
                y: "10",
                rx: "2"
            }]
        ]],
        Yd = ["svg", h, [
            ["path", {
                d: "M3 2h18"
            }],
            ["rect", {
                width: "18",
                height: "12",
                x: "3",
                y: "6",
                rx: "2"
            }],
            ["path", {
                d: "M3 22h18"
            }]
        ]],
        _d = ["svg", h, [
            ["line", {
                x1: "6",
                x2: "10",
                y1: "11",
                y2: "11"
            }],
            ["line", {
                x1: "8",
                x2: "8",
                y1: "9",
                y2: "13"
            }],
            ["line", {
                x1: "15",
                x2: "15.01",
                y1: "12",
                y2: "12"
            }],
            ["line", {
                x1: "18",
                x2: "18.01",
                y1: "10",
                y2: "10"
            }],
            ["path", {
                d: "M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z"
            }]
        ]],
        ac = ["svg", h, [
            ["line", {
                x1: "6",
                x2: "10",
                y1: "12",
                y2: "12"
            }],
            ["line", {
                x1: "8",
                x2: "8",
                y1: "10",
                y2: "14"
            }],
            ["line", {
                x1: "15",
                x2: "15.01",
                y1: "13",
                y2: "13"
            }],
            ["line", {
                x1: "18",
                x2: "18.01",
                y1: "11",
                y2: "11"
            }],
            ["rect", {
                width: "20",
                height: "12",
                x: "2",
                y: "6",
                rx: "2"
            }]
        ]],
        hc = ["svg", h, [
            ["rect", {
                width: "18",
                height: "18",
                x: "3",
                y: "3",
                rx: "2"
            }],
            ["path", {
                d: "M9 8h7"
            }],
            ["path", {
                d: "M8 12h6"
            }],
            ["path", {
                d: "M11 16h5"
            }]
        ]],
        tc = ["svg", h, [
            ["path", {
                d: "M8 6h10"
            }],
            ["path", {
                d: "M6 12h9"
            }],
            ["path", {
                d: "M11 18h7"
            }]
        ]],
        dc = ["svg", h, [
            ["path", {
                d: "M15.6 2.7a10 10 0 1 0 5.7 5.7"
            }],
            ["circle", {
                cx: "12",
                cy: "12",
                r: "2"
            }],
            ["path", {
                d: "M13.4 10.6 19 5"
            }]
        ]],
        cc = ["svg", h, [
            ["path", {
                d: "m12 14 4-4"
            }],
            ["path", {
                d: "M3.34 19a10 10 0 1 1 17.32 0"
            }]
        ]],
        nc = ["svg", h, [
            ["path", {
                d: "m14 13-7.5 7.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 0 1 0-3L11 10"
            }],
            ["path", {
                d: "m16 16 6-6"
            }],
            ["path", {
                d: "m8 8 6-6"
            }],
            ["path", {
                d: "m9 7 8 8"
            }],
            ["path", {
                d: "m21 11-8-8"
            }]
        ]],
        ic = ["svg", h, [
            ["path", {
                d: "M6 3h12l4 6-10 13L2 9Z"
            }],
            ["path", {
                d: "M11 3 8 9l4 13 4-13-3-6"
            }],
            ["path", {
                d: "M2 9h20"
            }]
        ]],
        pc = ["svg", h, [
            ["path", {
                d: "M9 10h.01"
            }],
            ["path", {
                d: "M15 10h.01"
            }],
            ["path", {
                d: "M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8z"
            }]
        ]],
        ec = ["svg", h, [
            ["rect", {
                x: "3",
                y: "8",
                width: "18",
                height: "4",
                rx: "1"
            }],
            ["path", {
                d: "M12 8v13"
            }],
            ["path", {
                d: "M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"
            }],
            ["path", {
                d: "M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"
            }]
        ]],
        Mc = ["svg", h, [
            ["path", {
                d: "M6 3v12"
            }],
            ["path", {
                d: "M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
            }],
            ["path", {
                d: "M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
            }],
            ["path", {
                d: "M15 6a9 9 0 0 0-9 9"
            }],
            ["path", {
                d: "M18 15v6"
            }],
            ["path", {
                d: "M21 18h-6"
            }]
        ]],
        lc = ["svg", h, [
            ["line", {
                x1: "6",
                x2: "6",
                y1: "3",
                y2: "15"
            }],
            ["circle", {
                cx: "18",
                cy: "6",
                r: "3"
            }],
            ["circle", {
                cx: "6",
                cy: "18",
                r: "3"
            }],
            ["path", {
                d: "M18 9a9 9 0 0 1-9 9"
            }]
        ]],
        vc = ["svg", h, [
            ["circle", {
                cx: "12",
                cy: "12",
                r: "3"
            }],
            ["line", {
                x1: "3",
                x2: "9",
                y1: "12",
                y2: "12"
            }],
            ["line", {
                x1: "15",
                x2: "21",
                y1: "12",
                y2: "12"
            }]
        ]],
        oc = ["svg", h, [
            ["circle", {
                cx: "18",
                cy: "18",
                r: "3"
            }],
            ["circle", {
                cx: "6",
                cy: "6",
                r: "3"
            }],
            ["path", {
                d: "M13 6h3a2 2 0 0 1 2 2v7"
            }],
            ["path", {
                d: "M11 18H8a2 2 0 0 1-2-2V9"
            }]
        ]],
        sc = ["svg", h, [
            ["circle", {
                cx: "12",
                cy: "18",
                r: "3"
            }],
            ["circle", {
                cx: "6",
                cy: "6",
                r: "3"
            }],
            ["circle", {
                cx: "18",
                cy: "6",
                r: "3"
            }],
            ["path", {
                d: "M18 9v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V9"
            }],
            ["path", {
                d: "M12 12v3"
            }]
        ]],
        gc = ["svg", h, [
            ["circle", {
                cx: "18",
                cy: "18",
                r: "3"
            }],
            ["circle", {
                cx: "6",
                cy: "6",
                r: "3"
            }],
            ["path", {
                d: "M6 21V9a9 9 0 0 0 9 9"
            }]
        ]],
        rc = ["svg", h, [
            ["circle", {
                cx: "18",
                cy: "18",
                r: "3"
            }],
            ["circle", {
                cx: "6",
                cy: "6",
                r: "3"
            }],
            ["path", {
                d: "M18 11.5V15"
            }],
            ["path", {
                d: "m21 3-6 6"
            }],
            ["path", {
                d: "m21 9-6-6"
            }],
            ["line", {
                x1: "6",
                x2: "6",
                y1: "9",
                y2: "21"
            }]
        ]],
        yc = ["svg", h, [
            ["circle", {
                cx: "18",
                cy: "18",
                r: "3"
            }],
            ["circle", {
                cx: "6",
                cy: "6",
                r: "3"
            }],
            ["path", {
                d: "M18 6V5"
            }],
            ["path", {
                d: "M18 11v-1"
            }],
            ["line", {
                x1: "6",
                x2: "6",
                y1: "9",
                y2: "21"
            }]
        ]],
        $c = ["svg", h, [
            ["circle", {
                cx: "18",
                cy: "18",
                r: "3"
            }],
            ["circle", {
                cx: "6",
                cy: "6",
                r: "3"
            }],
            ["path", {
                d: "M13 6h3a2 2 0 0 1 2 2v7"
            }],
            ["line", {
                x1: "6",
                x2: "6",
                y1: "9",
                y2: "21"
            }]
        ]],
        mc = ["svg", h, [
            ["path", {
                d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
            }],
            ["path", {
                d: "M9 18c-4.51 2-5-2-7-2"
            }]
        ]],
        Hc = ["svg", h, [
            ["path", {
                d: "m22 13.29-3.33-10a.42.42 0 0 0-.14-.18.38.38 0 0 0-.22-.11.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18l-2.26 6.67H8.32L6.1 3.26a.42.42 0 0 0-.1-.18.38.38 0 0 0-.26-.08.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18L2 13.29a.74.74 0 0 0 .27.83L12 21l9.69-6.88a.71.71 0 0 0 .31-.83Z"
            }]
        ]],
        Cc = ["svg", h, [
            ["path", {
                d: "M15.2 22H8.8a2 2 0 0 1-2-1.79L5 3h14l-1.81 17.21A2 2 0 0 1 15.2 22Z"
            }],
            ["path", {
                d: "M6 12a5 5 0 0 1 6 0 5 5 0 0 0 6 0"
            }]
        ]],
        uc = ["svg", h, [
            ["circle", {
                cx: "6",
                cy: "15",
                r: "4"
            }],
            ["circle", {
                cx: "18",
                cy: "15",
                r: "4"
            }],
            ["path", {
                d: "M14 15a2 2 0 0 0-2-2 2 2 0 0 0-2 2"
            }],
            ["path", {
                d: "M2.5 13 5 7c.7-1.3 1.4-2 3-2"
            }],
            ["path", {
                d: "M21.5 13 19 7c-.7-1.3-1.5-2-3-2"
            }]
        ]],
        Vc = ["svg", h, [
            ["path", {
                d: "M21.54 15H17a2 2 0 0 0-2 2v4.54"
            }],
            ["path", {
                d: "M7 3.34V5a3 3 0 0 0 3 3v0a2 2 0 0 1 2 2v0c0 1.1.9 2 2 2v0a2 2 0 0 0 2-2v0c0-1.1.9-2 2-2h3.17"
            }],
            ["path", {
                d: "M11 21.95V18a2 2 0 0 0-2-2v0a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"
            }],
            ["circle", {
                cx: "12",
                cy: "12",
                r: "10"
            }]
        ]],
        wc = ["svg", h, [
            ["circle", {
                cx: "12",
                cy: "12",
                r: "10"
            }],
            ["line", {
                x1: "2",
                x2: "22",
                y1: "12",
                y2: "12"
            }],
            ["path", {
                d: "M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
            }]
        ]],
        xc = ["svg", h, [
            ["path", {
                d: "M12 13V2l8 4-8 4"
            }],
            ["path", {
                d: "M20.55 10.23A9 9 0 1 1 8 4.94"
            }],
            ["path", {
                d: "M8 10a5 5 0 1 0 8.9 2.02"
            }]
        ]],
        Lc = ["svg", h, [
            ["path", {
                d: "M18 11.5V9a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v1.4"
            }],
            ["path", {
                d: "M14 10V8a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2"
            }],
            ["path", {
                d: "M10 9.9V9a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v5"
            }],
            ["path", {
                d: "M6 14v0a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0"
            }],
            ["path", {
                d: "M18 11v0a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-4a8 8 0 0 1-8-8 2 2 0 1 1 4 0"
            }]
        ]],
        Sc = ["svg", h, [
            ["path", {
                d: "M22 10v6M2 10l10-5 10 5-10 5z"
            }],
            ["path", {
                d: "M6 12v5c3 3 9 3 12 0v-5"
            }]
        ]],
        Ac = ["svg", h, [
            ["path", {
                d: "M22 5V2l-5.89 5.89"
            }],
            ["circle", {
                cx: "16.6",
                cy: "15.89",
                r: "3"
            }],
            ["circle", {
                cx: "8.11",
                cy: "7.4",
                r: "3"
            }],
            ["circle", {
                cx: "12.35",
                cy: "11.65",
                r: "3"
            }],
            ["circle", {
                cx: "13.91",
                cy: "5.85",
                r: "3"
            }],
            ["circle", {
                cx: "18.15",
                cy: "10.09",
                r: "3"
            }],
            ["circle", {
                cx: "6.56",
                cy: "13.2",
                r: "3"
            }],
            ["circle", {
                cx: "10.8",
                cy: "17.44",
                r: "3"
            }],
            ["circle", {
                cx: "5",
                cy: "19",
                r: "3"
            }]
        ]],
        fc = ["svg", h, [
            ["rect", {
                width: "18",
                height: "18",
                x: "3",
                y: "3",
                rx: "2"
            }],
            ["path", {
                d: "M3 12h18"
            }],
            ["path", {
                d: "M12 3v18"
            }]
        ]],
        kc = ["svg", h, [
            ["rect", {
                width: "18",
                height: "18",
                x: "3",
                y: "3",
                rx: "2"
            }],
            ["path", {
                d: "M3 9h18"
            }],
            ["path", {
                d: "M3 15h18"
            }],
            ["path", {
                d: "M9 3v18"
            }],
            ["path", {
                d: "M15 3v18"
            }]
        ]],
        Fc = ["svg", h, [
            ["circle", {
                cx: "12",
                cy: "9",
                r: "1"
            }],
            ["circle", {
                cx: "19",
                cy: "9",
                r: "1"
            }],
            ["circle", {
                cx: "5",
                cy: "9",
                r: "1"
            }],
            ["circle", {
                cx: "12",
                cy: "15",
                r: "1"
            }],
            ["circle", {
                cx: "19",
                cy: "15",
                r: "1"
            }],
            ["circle", {
                cx: "5",
                cy: "15",
                r: "1"
            }]
        ]],
        Zc = ["svg", h, [
            ["circle", {
                cx: "9",
                cy: "12",
                r: "1"
            }],
            ["circle", {
                cx: "9",
                cy: "5",
                r: "1"
            }],
            ["circle", {
                cx: "9",
                cy: "19",
                r: "1"
            }],
            ["circle", {
                cx: "15",
                cy: "12",
                r: "1"
            }],
            ["circle", {
                cx: "15",
                cy: "5",
                r: "1"
            }],
            ["circle", {
                cx: "15",
                cy: "19",
                r: "1"
            }]
        ]],
        Pc = ["svg", h, [
            ["circle", {
                cx: "12",
                cy: "5",
                r: "1"
            }],
            ["circle", {
                cx: "19",
                cy: "5",
                r: "1"
            }],
            ["circle", {
                cx: "5",
                cy: "5",
                r: "1"
            }],
            ["circle", {
                cx: "12",
                cy: "12",
                r: "1"
            }],
            ["circle", {
                cx: "19",
                cy: "12",
                r: "1"
            }],
            ["circle", {
                cx: "5",
                cy: "12",
                r: "1"
            }],
            ["circle", {
                cx: "12",
                cy: "19",
                r: "1"
            }],
            ["circle", {
                cx: "19",
                cy: "19",
                r: "1"
            }],
            ["circle", {
                cx: "5",
                cy: "19",
                r: "1"
            }]
        ]],
        Bc = ["svg", h, [
            ["path", {
                d: "M3 7V5c0-1.1.9-2 2-2h2"
            }],
            ["path", {
                d: "M17 3h2c1.1 0 2 .9 2 2v2"
            }],
            ["path", {
                d: "M21 17v2c0 1.1-.9 2-2 2h-2"
            }],
            ["path", {
                d: "M7 21H5c-1.1 0-2-.9-2-2v-2"
            }],
            ["rect", {
                width: "7",
                height: "5",
                x: "7",
                y: "7",
                rx: "1"
            }],
            ["rect", {
                width: "7",
                height: "5",
                x: "10",
                y: "12",
                rx: "1"
            }]
        ]],
        Dc = ["svg", h, [
            ["path", {
                d: "m15 12-8.5 8.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 0 1 0-3L12 9"
            }],
            ["path", {
                d: "M17.64 15 22 10.64"
            }],
            ["path", {
                d: "m20.91 11.7-1.25-1.25c-.6-.6-.93-1.4-.93-2.25v-.86L16.01 4.6a5.56 5.56 0 0 0-3.94-1.64H9l.92.82A6.18 6.18 0 0 1 12 8.4v1.56l2 2h2.47l2.26 1.91"
            }]
        ]],
        Tc = ["svg", h, [
            ["path", {
                d: "M18 12.5V10a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v1.4"
            }],
            ["path", {
                d: "M14 11V9a2 2 0 1 0-4 0v2"
            }],
            ["path", {
                d: "M10 10.5V5a2 2 0 1 0-4 0v9"
            }],
            ["path", {
                d: "m7 15-1.76-1.76a2 2 0 0 0-2.83 2.82l3.6 3.6C7.5 21.14 9.2 22 12 22h2a8 8 0 0 0 8-8V7a2 2 0 1 0-4 0v5"
            }]
        ]],
        zc = ["svg", h, [
            ["path", {
                d: "M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0"
            }],
            ["path", {
                d: "M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2"
            }],
            ["path", {
                d: "M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8"
            }],
            ["path", {
                d: "M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"
            }]
        ]],
        Rc = ["svg", h, [
            ["path", {
                d: "M12 2v8"
            }],
            ["path", {
                d: "m16 6-4 4-4-4"
            }],
            ["rect", {
                width: "20",
                height: "8",
                x: "2",
                y: "14",
                rx: "2"
            }],
            ["path", {
                d: "M6 18h.01"
            }],
            ["path", {
                d: "M10 18h.01"
            }]
        ]],
        bc = ["svg", h, [
            ["path", {
                d: "m16 6-4-4-4 4"
            }],
            ["path", {
                d: "M12 2v8"
            }],
            ["rect", {
                width: "20",
                height: "8",
                x: "2",
                y: "14",
                rx: "2"
            }],
            ["path", {
                d: "M6 18h.01"
            }],
            ["path", {
                d: "M10 18h.01"
            }]
        ]],
        Uc = ["svg", h, [
            ["line", {
                x1: "22",
                x2: "2",
                y1: "12",
                y2: "12"
            }],
            ["path", {
                d: "M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"
            }],
            ["line", {
                x1: "6",
                x2: "6.01",
                y1: "16",
                y2: "16"
            }],
            ["line", {
                x1: "10",
                x2: "10.01",
                y1: "16",
                y2: "16"
            }]
        ]],
        Oc = ["svg", h, [
            ["path", {
                d: "M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v2z"
            }],
            ["path", {
                d: "M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5"
            }],
            ["path", {
                d: "M4 15v-3a6 6 0 0 1 6-6h0"
            }],
            ["path", {
                d: "M14 6h0a6 6 0 0 1 6 6v3"
            }]
        ]],
        qc = ["svg", h, [
            ["line", {
                x1: "4",
                x2: "20",
                y1: "9",
                y2: "9"
            }],
            ["line", {
                x1: "4",
                x2: "20",
                y1: "15",
                y2: "15"
            }],
            ["line", {
                x1: "10",
                x2: "8",
                y1: "3",
                y2: "21"
            }],
            ["line", {
                x1: "16",
                x2: "14",
                y1: "3",
                y2: "21"
            }]
        ]],
        Gc = ["svg", h, [
            ["path", {
                d: "m5.2 6.2 1.4 1.4"
            }],
            ["path", {
                d: "M2 13h2"
            }],
            ["path", {
                d: "M20 13h2"
            }],
            ["path", {
                d: "m17.4 7.6 1.4-1.4"
            }],
            ["path", {
                d: "M22 17H2"
            }],
            ["path", {
                d: "M22 21H2"
            }],
            ["path", {
                d: "M16 13a4 4 0 0 0-8 0"
            }],
            ["path", {
                d: "M12 5V2.5"
            }]
        ]],
        Wc = ["svg", h, [
            ["path", {
                d: "M22 9a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h1l2 2h12l2-2h1a1 1 0 0 0 1-1Z"
            }],
            ["path", {
                d: "M7.5 12h9"
            }]
        ]],
        Ec = ["svg", h, [
            ["path", {
                d: "M4 12h8"
            }],
            ["path", {
                d: "M4 18V6"
            }],
            ["path", {
                d: "M12 18V6"
            }],
            ["path", {
                d: "m17 12 3-2v8"
            }]
        ]],
        Ic = ["svg", h, [
            ["path", {
                d: "M4 12h8"
            }],
            ["path", {
                d: "M4 18V6"
            }],
            ["path", {
                d: "M12 18V6"
            }],
            ["path", {
                d: "M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1"
            }]
        ]],
        Xc = ["svg", h, [
            ["path", {
                d: "M4 12h8"
            }],
            ["path", {
                d: "M4 18V6"
            }],
            ["path", {
                d: "M12 18V6"
            }],
            ["path", {
                d: "M17.5 10.5c1.7-1 3.5 0 3.5 1.5a2 2 0 0 1-2 2"
            }],
            ["path", {
                d: "M17 17.5c2 1.5 4 .3 4-1.5a2 2 0 0 0-2-2"
            }]
        ]],
        Nc = ["svg", h, [
            ["path", {
                d: "M4 12h8"
            }],
            ["path", {
                d: "M4 18V6"
            }],
            ["path", {
                d: "M12 18V6"
            }],
            ["path", {
                d: "M17 10v4h4"
            }],
            ["path", {
                d: "M21 10v8"
            }]
        ]],
        Kc = ["svg", h, [
            ["path", {
                d: "M4 12h8"
            }],
            ["path", {
                d: "M4 18V6"
            }],
            ["path", {
                d: "M12 18V6"
            }],
            ["path", {
                d: "M17 13v-3h4"
            }],
            ["path", {
                d: "M17 17.7c.4.2.8.3 1.3.3 1.5 0 2.7-1.1 2.7-2.5S19.8 13 18.3 13H17"
            }]
        ]],
        Jc = ["svg", h, [
            ["path", {
                d: "M4 12h8"
            }],
            ["path", {
                d: "M4 18V6"
            }],
            ["path", {
                d: "M12 18V6"
            }],
            ["circle", {
                cx: "19",
                cy: "16",
                r: "2"
            }],
            ["path", {
                d: "M20 10c-2 2-3 3.5-3 6"
            }]
        ]],
        jc = ["svg", h, [
            ["path", {
                d: "M6 12h12"
            }],
            ["path", {
                d: "M6 20V4"
            }],
            ["path", {
                d: "M18 20V4"
            }]
        ]],
        Qc = ["svg", h, [
            ["path", {
                d: "M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"
            }]
        ]],
        Yc = ["svg", h, [
            ["path", {
                d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
            }],
            ["path", {
                d: "m12 13-1-1 2-2-3-3 2-2"
            }]
        ]],
        _c = ["svg", h, [
            ["path", {
                d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
            }],
            ["path", {
                d: "M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66"
            }],
            ["path", {
                d: "m18 15-2-2"
            }],
            ["path", {
                d: "m15 18-2-2"
            }]
        ]],
        a6 = ["svg", h, [
            ["line", {
                x1: "2",
                y1: "2",
                x2: "22",
                y2: "22"
            }],
            ["path", {
                d: "M16.5 16.5 12 21l-7-7c-1.5-1.45-3-3.2-3-5.5a5.5 5.5 0 0 1 2.14-4.35"
            }],
            ["path", {
                d: "M8.76 3.1c1.15.22 2.13.78 3.24 1.9 1.5-1.5 2.74-2 4.5-2A5.5 5.5 0 0 1 22 8.5c0 2.12-1.3 3.78-2.67 5.17"
            }]
        ]],
        h6 = ["svg", h, [
            ["path", {
                d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
            }],
            ["path", {
                d: "M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"
            }]
        ]],
        t6 = ["svg", h, [
            ["path", {
                d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
            }]
        ]],
        d6 = ["svg", h, [
            ["circle", {
                cx: "12",
                cy: "12",
                r: "10"
            }],
            ["path", {
                d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"
            }],
            ["path", {
                d: "M12 17h.01"
            }]
        ]],
        c6 = ["svg", h, [
            ["path", {
                d: "m3 15 5.12-5.12A3 3 0 0 1 10.24 9H13a2 2 0 1 1 0 4h-2.5m4-.68 4.17-4.89a1.88 1.88 0 0 1 2.92 2.36l-4.2 5.94A3 3 0 0 1 14.96 17H9.83a2 2 0 0 0-1.42.59L7 19"
            }],
            ["path", {
                d: "m2 14 6 6"
            }]
        ]],
        n6 = ["svg", h, [
            ["path", {
                d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
            }]
        ]],
        i6 = ["svg", h, [
            ["path", {
                d: "m9 11-6 6v3h9l3-3"
            }],
            ["path", {
                d: "m22 12-4.6 4.6a2 2 0 0 1-2.8 0l-5.2-5.2a2 2 0 0 1 0-2.8L14 4"
            }]
        ]],
        p6 = ["svg", h, [
            ["path", {
                d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"
            }],
            ["path", {
                d: "M3 3v5h5"
            }],
            ["path", {
                d: "M12 7v5l4 2"
            }]
        ]],
        e6 = ["svg", h, [
            ["path", {
                d: "m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
            }],
            ["polyline", {
                points: "9 22 9 12 15 12 15 22"
            }]
        ]],
        M6 = ["svg", h, [
            ["path", {
                d: "M17.5 5.5C19 7 20.5 9 21 11c-1.323.265-2.646.39-4.118.226"
            }],
            ["path", {
                d: "M5.5 17.5C7 19 9 20.5 11 21c.5-2.5.5-5-1-8.5"
            }],
            ["path", {
                d: "M17.5 17.5c-2.5 0-4 0-6-1"
            }],
            ["path", {
                d: "M20 11.5c1 1.5 2 3.5 2 4.5"
            }],
            ["path", {
                d: "M11.5 20c1.5 1 3.5 2 4.5 2 .5-1.5 0-3-.5-4.5"
            }],
            ["path", {
                d: "M22 22c-2 0-3.5-.5-5.5-1.5"
            }],
            ["path", {
                d: "M4.783 4.782C1.073 8.492 1 14.5 5 18c1-1 2-4.5 1.5-6.5 1.5 1 4 1 5.5.5M8.227 2.57C11.578 1.335 15.453 2.089 18 5c-.88.88-3.7 1.761-5.726 1.618"
            }],
            ["line", {
                x1: "2",
                x2: "22",
                y1: "2",
                y2: "22"
            }]
        ]],
        l6 = ["svg", h, [
            ["path", {
                d: "M17.5 5.5C19 7 20.5 9 21 11c-2.5.5-5 .5-8.5-1"
            }],
            ["path", {
                d: "M5.5 17.5C7 19 9 20.5 11 21c.5-2.5.5-5-1-8.5"
            }],
            ["path", {
                d: "M16.5 11.5c1 2 1 3.5 1 6-2.5 0-4 0-6-1"
            }],
            ["path", {
                d: "M20 11.5c1 1.5 2 3.5 2 4.5-1.5.5-3 0-4.5-.5"
            }],
            ["path", {
                d: "M11.5 20c1.5 1 3.5 2 4.5 2 .5-1.5 0-3-.5-4.5"
            }],
            ["path", {
                d: "M20.5 16.5c1 2 1.5 3.5 1.5 5.5-2 0-3.5-.5-5.5-1.5"
            }],
            ["path", {
                d: "M4.783 4.782C8.493 1.072 14.5 1 18 5c-1 1-4.5 2-6.5 1.5 1 1.5 1 4 .5 5.5-1.5.5-4 .5-5.5-.5C7 13.5 6 17 5 18c-4-3.5-3.927-9.508-.217-13.218Z"
            }],
            ["path", {
                d: "M4.5 4.5 3 3c-.184-.185-.184-.816 0-1"
            }]
        ]],
        v6 = ["svg", h, [
            ["path", {
                d: "M18 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Z"
            }],
            ["path", {
                d: "m9 16 .348-.24c1.465-1.013 3.84-1.013 5.304 0L15 16"
            }],
            ["path", {
                d: "M8 7h.01"
            }],
            ["path", {
                d: "M16 7h.01"
            }],
            ["path", {
                d: "M12 7h.01"
            }],
            ["path", {
                d: "M12 11h.01"
            }],
            ["path", {
                d: "M16 11h.01"
            }],
            ["path", {
                d: "M8 11h.01"
            }],
            ["path", {
                d: "M10 22v-6.5m4 0V22"
            }]
        ]],
        o6 = ["svg", h, [
            ["path", {
                d: "M5 22h14"
            }],
            ["path", {
                d: "M5 2h14"
            }],
            ["path", {
                d: "M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22"
            }],
            ["path", {
                d: "M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2"
            }]
        ]],
        s6 = ["svg", h, [
            ["path", {
                d: "M12 17c5 0 8-2.69 8-6H4c0 3.31 3 6 8 6Zm-4 4h8m-4-3v3M5.14 11a3.5 3.5 0 1 1 6.71 0"
            }],
            ["path", {
                d: "M12.14 11a3.5 3.5 0 1 1 6.71 0"
            }],
            ["path", {
                d: "M15.5 6.5a3.5 3.5 0 1 0-7 0"
            }]
        ]],
        g6 = ["svg", h, [
            ["path", {
                d: "m7 11 4.08 10.35a1 1 0 0 0 1.84 0L17 11"
            }],
            ["path", {
                d: "M17 7A5 5 0 0 0 7 7"
            }],
            ["path", {
                d: "M17 7a2 2 0 0 1 0 4H7a2 2 0 0 1 0-4"
            }]
        ]],
        r6 = ["svg", h, [
            ["path", {
                d: "M21 9v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7"
            }],
            ["line", {
                x1: "16",
                x2: "22",
                y1: "5",
                y2: "5"
            }],
            ["circle", {
                cx: "9",
                cy: "9",
                r: "2"
            }],
            ["path", {
                d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"
            }]
        ]],
        y6 = ["svg", h, [
            ["line", {
                x1: "2",
                x2: "22",
                y1: "2",
                y2: "22"
            }],
            ["path", {
                d: "M10.41 10.41a2 2 0 1 1-2.83-2.83"
            }],
            ["line", {
                x1: "13.5",
                x2: "6",
                y1: "13.5",
                y2: "21"
            }],
            ["line", {
                x1: "18",
                x2: "21",
                y1: "12",
                y2: "15"
            }],
            ["path", {
                d: "M3.59 3.59A1.99 1.99 0 0 0 3 5v14a2 2 0 0 0 2 2h14c.55 0 1.052-.22 1.41-.59"
            }],
            ["path", {
                d: "M21 15V5a2 2 0 0 0-2-2H9"
            }]
        ]],
        $6 = ["svg", h, [
            ["path", {
                d: "M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7"
            }],
            ["line", {
                x1: "16",
                x2: "22",
                y1: "5",
                y2: "5"
            }],
            ["line", {
                x1: "19",
                x2: "19",
                y1: "2",
                y2: "8"
            }],
            ["circle", {
                cx: "9",
                cy: "9",
                r: "2"
            }],
            ["path", {
                d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"
            }]
        ]],
        m6 = ["svg", h, [
            ["rect", {
                width: "18",
                height: "18",
                x: "3",
                y: "3",
                rx: "2",
                ry: "2"
            }],
            ["circle", {
                cx: "9",
                cy: "9",
                r: "2"
            }],
            ["path", {
                d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"
            }]
        ]],
        H6 = ["svg", h, [
            ["path", {
                d: "M12 3v12"
            }],
            ["path", {
                d: "m8 11 4 4 4-4"
            }],
            ["path", {
                d: "M8 5H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-4"
            }]
        ]],
        C6 = ["svg", h, [
            ["polyline", {
                points: "22 12 16 12 14 15 10 15 8 12 2 12"
            }],
            ["path", {
                d: "M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"
            }]
        ]],
        u6 = ["svg", h, [
            ["polyline", {
                points: "3 8 7 12 3 16"
            }],
            ["line", {
                x1: "21",
                x2: "11",
                y1: "12",
                y2: "12"
            }],
            ["line", {
                x1: "21",
                x2: "11",
                y1: "6",
                y2: "6"
            }],
            ["line", {
                x1: "21",
                x2: "11",
                y1: "18",
                y2: "18"
            }]
        ]],
        V6 = ["svg", h, [
            ["path", {
                d: "M6 3h12"
            }],
            ["path", {
                d: "M6 8h12"
            }],
            ["path", {
                d: "m6 13 8.5 8"
            }],
            ["path", {
                d: "M6 13h3"
            }],
            ["path", {
                d: "M9 13c6.667 0 6.667-10 0-10"
            }]
        ]],
        w6 = ["svg", h, [
            ["path", {
                d: "M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4Zm0 0c2 2.67 4 4 6 4a4 4 0 0 0 0-8c-2 0-4 1.33-6 4Z"
            }]
        ]],
        x6 = ["svg", h, [
            ["circle", {
                cx: "12",
                cy: "12",
                r: "10"
            }],
            ["path", {
                d: "M12 16v-4"
            }],
            ["path", {
                d: "M12 8h.01"
            }]
        ]],
        L6 = ["svg", h, [
            ["rect", {
                width: "20",
                height: "20",
                x: "2",
                y: "2",
                rx: "5",
                ry: "5"
            }],
            ["path", {
                d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
            }],
            ["line", {
                x1: "17.5",
                x2: "17.51",
                y1: "6.5",
                y2: "6.5"
            }]
        ]],
        S6 = ["svg", h, [
            ["line", {
                x1: "19",
                x2: "10",
                y1: "4",
                y2: "4"
            }],
            ["line", {
                x1: "14",
                x2: "5",
                y1: "20",
                y2: "20"
            }],
            ["line", {
                x1: "15",
                x2: "9",
                y1: "4",
                y2: "20"
            }]
        ]],
        A6 = ["svg", h, [
            ["path", {
                d: "M20 10c0-4.4-3.6-8-8-8s-8 3.6-8 8 3.6 8 8 8h8"
            }],
            ["polyline", {
                points: "16 14 20 18 16 22"
            }]
        ]],
        f6 = ["svg", h, [
            ["path", {
                d: "M4 10c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8H4"
            }],
            ["polyline", {
                points: "8 22 4 18 8 14"
            }]
        ]],
        k6 = ["svg", h, [
            ["path", {
                d: "M12 9.5V21m0-11.5L6 3m6 6.5L18 3"
            }],
            ["path", {
                d: "M6 15h12"
            }],
            ["path", {
                d: "M6 11h12"
            }]
        ]],
        F6 = ["svg", h, [
            ["path", {
                d: "M21 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2Z"
            }],
            ["path", {
                d: "M6 15v-2"
            }],
            ["path", {
                d: "M12 15V9"
            }],
            ["circle", {
                cx: "12",
                cy: "6",
                r: "3"
            }]
        ]],
        Z6 = ["svg", h, [
            ["path", {
                d: "M8 7v7"
            }],
            ["path", {
                d: "M12 7v4"
            }],
            ["path", {
                d: "M16 7v9"
            }],
            ["path", {
                d: "M5 3a2 2 0 0 0-2 2"
            }],
            ["path", {
                d: "M9 3h1"
            }],
            ["path", {
                d: "M14 3h1"
            }],
            ["path", {
                d: "M19 3a2 2 0 0 1 2 2"
            }],
            ["path", {
                d: "M21 9v1"
            }],
            ["path", {
                d: "M21 14v1"
            }],
            ["path", {
                d: "M21 19a2 2 0 0 1-2 2"
            }],
            ["path", {
                d: "M14 21h1"
            }],
            ["path", {
                d: "M9 21h1"
            }],
            ["path", {
                d: "M5 21a2 2 0 0 1-2-2"
            }],
            ["path", {
                d: "M3 14v1"
            }],
            ["path", {
                d: "M3 9v1"
            }]
        ]],
        P6 = ["svg", h, [
            ["rect", {
                width: "18",
                height: "18",
                x: "3",
                y: "3",
                rx: "2"
            }],
            ["path", {
                d: "M8 7v7"
            }],
            ["path", {
                d: "M12 7v4"
            }],
            ["path", {
                d: "M16 7v9"
            }]
        ]],
        B6 = ["svg", h, [
            ["path", {
                d: "M6 5v11"
            }],
            ["path", {
                d: "M12 5v6"
            }],
            ["path", {
                d: "M18 5v14"
            }]
        ]],
        D6 = ["svg", h, [
            ["path", {
                d: "M2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4a6.5 6.5 0 1 0-4-4Z"
            }],
            ["circle", {
                cx: "16.5",
                cy: "7.5",
                r: ".5"
            }]
        ]],
        T6 = ["svg", h, [
            ["path", {
                d: "M12.4 2.7c.9-.9 2.5-.9 3.4 0l5.5 5.5c.9.9.9 2.5 0 3.4l-3.7 3.7c-.9.9-2.5.9-3.4 0L8.7 9.8c-.9-.9-.9-2.5 0-3.4Z"
            }],
            ["path", {
                d: "m14 7 3 3"
            }],
            ["path", {
                d: "M9.4 10.6 2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4"
            }]
        ]],
        z6 = ["svg", h, [
            ["circle", {
                cx: "7.5",
                cy: "15.5",
                r: "5.5"
            }],
            ["path", {
                d: "m21 2-9.6 9.6"
            }],
            ["path", {
                d: "m15.5 7.5 3 3L22 7l-3-3"
            }]
        ]],
        R6 = ["svg", h, [
            ["rect", {
                width: "20",
                height: "16",
                x: "2",
                y: "4",
                rx: "2",
                ry: "2"
            }],
            ["path", {
                d: "M6 8h.001"
            }],
            ["path", {
                d: "M10 8h.001"
            }],
            ["path", {
                d: "M14 8h.001"
            }],
            ["path", {
                d: "M18 8h.001"
            }],
            ["path", {
                d: "M8 12h.001"
            }],
            ["path", {
                d: "M12 12h.001"
            }],
            ["path", {
                d: "M16 12h.001"
            }],
            ["path", {
                d: "M7 16h10"
            }]
        ]],
        b6 = ["svg", h, [
            ["path", {
                d: "M12 2v5"
            }],
            ["path", {
                d: "M6 7h12l4 9H2l4-9Z"
            }],
            ["path", {
                d: "M9.17 16a3 3 0 1 0 5.66 0"
            }]
        ]],
        U6 = ["svg", h, [
            ["path", {
                d: "m14 5-3 3 2 7 8-8-7-2Z"
            }],
            ["path", {
                d: "m14 5-3 3-3-3 3-3 3 3Z"
            }],
            ["path", {
                d: "M9.5 6.5 4 12l3 6"
            }],
            ["path", {
                d: "M3 22v-2c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v2H3Z"
            }]
        ]],
        O6 = ["svg", h, [
            ["path", {
                d: "M9 2h6l3 7H6l3-7Z"
            }],
            ["path", {
                d: "M12 9v13"
            }],
            ["path", {
                d: "M9 22h6"
            }]
        ]],
        q6 = ["svg", h, [
            ["path", {
                d: "M11 13h6l3 7H8l3-7Z"
            }],
            ["path", {
                d: "M14 13V8a2 2 0 0 0-2-2H8"
            }],
            ["path", {
                d: "M4 9h2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H4v6Z"
            }]
        ]],
        G6 = ["svg", h, [
            ["path", {
                d: "M11 4h6l3 7H8l3-7Z"
            }],
            ["path", {
                d: "M14 11v5a2 2 0 0 1-2 2H8"
            }],
            ["path", {
                d: "M4 15h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H4v-6Z"
            }]
        ]],
        W6 = ["svg", h, [
            ["path", {
                d: "M8 2h8l4 10H4L8 2Z"
            }],
            ["path", {
                d: "M12 12v6"
            }],
            ["path", {
                d: "M8 22v-2c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v2H8Z"
            }]
        ]],
        E6 = ["svg", h, [
            ["path", {
                d: "m12 8 6-3-6-3v10"
            }],
            ["path", {
                d: "m8 11.99-5.5 3.14a1 1 0 0 0 0 1.74l8.5 4.86a2 2 0 0 0 2 0l8.5-4.86a1 1 0 0 0 0-1.74L16 12"
            }],
            ["path", {
                d: "m6.49 12.85 11.02 6.3"
            }],
            ["path", {
                d: "M17.51 12.85 6.5 19.15"
            }]
        ]],
        I6 = ["svg", h, [
            ["line", {
                x1: "3",
                x2: "21",
                y1: "22",
                y2: "22"
            }],
            ["line", {
                x1: "6",
                x2: "6",
                y1: "18",
                y2: "11"
            }],
            ["line", {
                x1: "10",
                x2: "10",
                y1: "18",
                y2: "11"
            }],
            ["line", {
                x1: "14",
                x2: "14",
                y1: "18",
                y2: "11"
            }],
            ["line", {
                x1: "18",
                x2: "18",
                y1: "18",
                y2: "11"
            }],
            ["polygon", {
                points: "12 2 20 7 4 7"
            }]
        ]],
        X6 = ["svg", h, [
            ["path", {
                d: "m5 8 6 6"
            }],
            ["path", {
                d: "m4 14 6-6 2-3"
            }],
            ["path", {
                d: "M2 5h12"
            }],
            ["path", {
                d: "M7 2h1"
            }],
            ["path", {
                d: "m22 22-5-10-5 10"
            }],
            ["path", {
                d: "M14 18h6"
            }]
        ]],
        N6 = ["svg", h, [
            ["rect", {
                width: "18",
                height: "12",
                x: "3",
                y: "4",
                rx: "2",
                ry: "2"
            }],
            ["line", {
                x1: "2",
                x2: "22",
                y1: "20",
                y2: "20"
            }]
        ]],
        K6 = ["svg", h, [
            ["path", {
                d: "M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16"
            }]
        ]],
        J6 = ["svg", h, [
            ["path", {
                d: "M7 22a5 5 0 0 1-2-4"
            }],
            ["path", {
                d: "M7 16.93c.96.43 1.96.74 2.99.91"
            }],
            ["path", {
                d: "M3.34 14A6.8 6.8 0 0 1 2 10c0-4.42 4.48-8 10-8s10 3.58 10 8a7.19 7.19 0 0 1-.33 2"
            }],
            ["path", {
                d: "M5 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
            }],
            ["path", {
                d: "M14.33 22h-.09a.35.35 0 0 1-.24-.32v-10a.34.34 0 0 1 .33-.34c.08 0 .15.03.21.08l7.34 6a.33.33 0 0 1-.21.59h-4.49l-2.57 3.85a.35.35 0 0 1-.28.14v0z"
            }]
        ]],
        j6 = ["svg", h, [
            ["path", {
                d: "M7 22a5 5 0 0 1-2-4"
            }],
            ["path", {
                d: "M3.3 14A6.8 6.8 0 0 1 2 10c0-4.4 4.5-8 10-8s10 3.6 10 8-4.5 8-10 8a12 12 0 0 1-5-1"
            }],
            ["path", {
                d: "M5 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
            }]
        ]],
        Q6 = ["svg", h, [
            ["circle", {
                cx: "12",
                cy: "12",
                r: "10"
            }],
            ["path", {
                d: "M18 13a6 6 0 0 1-6 5 6 6 0 0 1-6-5h12Z"
            }],
            ["line", {
                x1: "9",
                x2: "9.01",
                y1: "9",
                y2: "9"
            }],
            ["line", {
                x1: "15",
                x2: "15.01",
                y1: "9",
                y2: "9"
            }]
        ]],
        Y6 = ["svg", h, [
            ["path", {
                d: "m16.02 12 5.48 3.13a1 1 0 0 1 0 1.74L13 21.74a2 2 0 0 1-2 0l-8.5-4.87a1 1 0 0 1 0-1.74L7.98 12"
            }],
            ["path", {
                d: "M13 13.74a2 2 0 0 1-2 0L2.5 8.87a1 1 0 0 1 0-1.74L11 2.26a2 2 0 0 1 2 0l8.5 4.87a1 1 0 0 1 0 1.74Z"
            }]
        ]],
        _6 = ["svg", h, [
            ["path", {
                d: "m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"
            }],
            ["path", {
                d: "m6.08 9.5-3.5 1.6a1 1 0 0 0 0 1.81l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9a1 1 0 0 0 0-1.83l-3.5-1.59"
            }],
            ["path", {
                d: "m6.08 14.5-3.5 1.6a1 1 0 0 0 0 1.81l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9a1 1 0 0 0 0-1.83l-3.5-1.59"
            }]
        ]],
        a8 = ["svg", h, [
            ["path", {
                d: "m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"
            }],
            ["path", {
                d: "m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"
            }],
            ["path", {
                d: "m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"
            }]
        ]],
        h8 = ["svg", h, [
            ["rect", {
                width: "7",
                height: "9",
                x: "3",
                y: "3",
                rx: "1"
            }],
            ["rect", {
                width: "7",
                height: "5",
                x: "14",
                y: "3",
                rx: "1"
            }],
            ["rect", {
                width: "7",
                height: "9",
                x: "14",
                y: "12",
                rx: "1"
            }],
            ["rect", {
                width: "7",
                height: "5",
                x: "3",
                y: "16",
                rx: "1"
            }]
        ]],
        t8 = ["svg", h, [
            ["rect", {
                width: "7",
                height: "7",
                x: "3",
                y: "3",
                rx: "1"
            }],
            ["rect", {
                width: "7",
                height: "7",
                x: "14",
                y: "3",
                rx: "1"
            }],
            ["rect", {
                width: "7",
                height: "7",
                x: "14",
                y: "14",
                rx: "1"
            }],
            ["rect", {
                width: "7",
                height: "7",
                x: "3",
                y: "14",
                rx: "1"
            }]
        ]],
        d8 = ["svg", h, [
            ["rect", {
                width: "7",
                height: "7",
                x: "3",
                y: "3",
                rx: "1"
            }],
            ["rect", {
                width: "7",
                height: "7",
                x: "3",
                y: "14",
                rx: "1"
            }],
            ["path", {
                d: "M14 4h7"
            }],
            ["path", {
                d: "M14 9h7"
            }],
            ["path", {
                d: "M14 15h7"
            }],
            ["path", {
                d: "M14 20h7"
            }]
        ]],
        c8 = ["svg", h, [
            ["rect", {
                width: "7",
                height: "18",
                x: "3",
                y: "3",
                rx: "1"
            }],
            ["rect", {
                width: "7",
                height: "7",
                x: "14",
                y: "3",
                rx: "1"
            }],
            ["rect", {
                width: "7",
                height: "7",
                x: "14",
                y: "14",
                rx: "1"
            }]
        ]],
        n8 = ["svg", h, [
            ["rect", {
                width: "18",
                height: "7",
                x: "3",
                y: "3",
                rx: "1"
            }],
            ["rect", {
                width: "7",
                height: "7",
                x: "3",
                y: "14",
                rx: "1"
            }],
            ["rect", {
                width: "7",
                height: "7",
                x: "14",
                y: "14",
                rx: "1"
            }]
        ]],
        i8 = ["svg", h, [
            ["rect", {
                width: "18",
                height: "7",
                x: "3",
                y: "3",
                rx: "1"
            }],
            ["rect", {
                width: "9",
                height: "7",
                x: "3",
                y: "14",
                rx: "1"
            }],
            ["rect", {
                width: "5",
                height: "7",
                x: "16",
                y: "14",
                rx: "1"
            }]
        ]],
        p8 = ["svg", h, [
            ["rect", {
                width: "18",
                height: "18",
                x: "3",
                y: "3",
                rx: "2",
                ry: "2"
            }],
            ["line", {
                x1: "3",
                x2: "21",
                y1: "9",
                y2: "9"
            }],
            ["line", {
                x1: "9",
                x2: "9",
                y1: "21",
                y2: "9"
            }]
        ]],
        e8 = ["svg", h, [
            ["path", {
                d: "M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"
            }],
            ["path", {
                d: "M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"
            }]
        ]],
        M8 = ["svg", h, [
            ["path", {
                d: "M2 22c1.25-.987 2.27-1.975 3.9-2.2a5.56 5.56 0 0 1 3.8 1.5 4 4 0 0 0 6.187-2.353 3.5 3.5 0 0 0 3.69-5.116A3.5 3.5 0 0 0 20.95 8 3.5 3.5 0 1 0 16 3.05a3.5 3.5 0 0 0-5.831 1.373 3.5 3.5 0 0 0-5.116 3.69 4 4 0 0 0-2.348 6.155C3.499 15.42 4.409 16.712 4.2 18.1 3.926 19.743 3.014 20.732 2 22"
            }],
            ["path", {
                d: "M2 22 17 7"
            }]
        ]],
        l8 = ["svg", h, [
            ["path", {
                d: "m16 6 4 14"
            }],
            ["path", {
                d: "M12 6v14"
            }],
            ["path", {
                d: "M8 8v12"
            }],
            ["path", {
                d: "M4 4v16"
            }]
        ]],
        v8 = ["svg", h, [
            ["circle", {
                cx: "12",
                cy: "12",
                r: "10"
            }],
            ["path", {
                d: "m4.93 4.93 4.24 4.24"
            }],
            ["path", {
                d: "m14.83 9.17 4.24-4.24"
            }],
            ["path", {
                d: "m14.83 14.83 4.24 4.24"
            }],
            ["path", {
                d: "m9.17 14.83-4.24 4.24"
            }],
            ["circle", {
                cx: "12",
                cy: "12",
                r: "4"
            }]
        ]],
        o8 = ["svg", h, [
            ["path", {
                d: "M8 20V8c0-2.2 1.8-4 4-4 1.5 0 2.8.8 3.5 2"
            }],
            ["path", {
                d: "M6 12h4"
            }],
            ["path", {
                d: "M14 12h2v8"
            }],
            ["path", {
                d: "M6 20h4"
            }],
            ["path", {
                d: "M14 20h4"
            }]
        ]],
        s8 = ["svg", h, [
            ["path", {
                d: "M16.8 11.2c.8-.9 1.2-2 1.2-3.2a6 6 0 0 0-9.3-5"
            }],
            ["path", {
                d: "m2 2 20 20"
            }],
            ["path", {
                d: "M6.3 6.3a4.67 4.67 0 0 0 1.2 5.2c.7.7 1.3 1.5 1.5 2.5"
            }],
            ["path", {
                d: "M9 18h6"
            }],
            ["path", {
                d: "M10 22h4"
            }]
        ]],
        g8 = ["svg", h, [
            ["path", {
                d: "M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"
            }],
            ["path", {
                d: "M9 18h6"
            }],
            ["path", {
                d: "M10 22h4"
            }]
        ]],
        r8 = ["svg", h, [
            ["path", {
                d: "M3 3v18h18"
            }],
            ["path", {
                d: "m19 9-5 5-4-4-3 3"
            }]
        ]],
        y8 = ["svg", h, [
            ["path", {
                d: "M9 17H7A5 5 0 0 1 7 7"
            }],
            ["path", {
                d: "M15 7h2a5 5 0 0 1 4 8"
            }],
            ["line", {
                x1: "8",
                x2: "12",
                y1: "12",
                y2: "12"
            }],
            ["line", {
                x1: "2",
                x2: "22",
                y1: "2",
                y2: "22"
            }]
        ]],
        $8 = ["svg", h, [
            ["path", {
                d: "M9 17H7A5 5 0 0 1 7 7h2"
            }],
            ["path", {
                d: "M15 7h2a5 5 0 1 1 0 10h-2"
            }],
            ["line", {
                x1: "8",
                x2: "16",
                y1: "12",
                y2: "12"
            }]
        ]],
        m8 = ["svg", h, [
            ["path", {
                d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"
            }],
            ["path", {
                d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"
            }]
        ]],
        H8 = ["svg", h, [
            ["path", {
                d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
            }],
            ["rect", {
                width: "4",
                height: "12",
                x: "2",
                y: "9"
            }],
            ["circle", {
                cx: "4",
                cy: "4",
                r: "2"
            }]
        ]],
        C8 = ["svg", h, [
            ["path", {
                d: "m3 17 2 2 4-4"
            }],
            ["path", {
                d: "m3 7 2 2 4-4"
            }],
            ["path", {
                d: "M13 6h8"
            }],
            ["path", {
                d: "M13 12h8"
            }],
            ["path", {
                d: "M13 18h8"
            }]
        ]],
        u8 = ["svg", h, [
            ["path", {
                d: "M16 12H3"
            }],
            ["path", {
                d: "M16 6H3"
            }],
            ["path", {
                d: "M10 18H3"
            }],
            ["path", {
                d: "M21 6v10a2 2 0 0 1-2 2h-5"
            }],
            ["path", {
                d: "m16 16-2 2 2 2"
            }]
        ]],
        V8 = ["svg", h, [
            ["path", {
                d: "M3 6h18"
            }],
            ["path", {
                d: "M7 12h10"
            }],
            ["path", {
                d: "M10 18h4"
            }]
        ]],
        w8 = ["svg", h, [
            ["path", {
                d: "M11 12H3"
            }],
            ["path", {
                d: "M16 6H3"
            }],
            ["path", {
                d: "M16 18H3"
            }],
            ["path", {
                d: "M21 12h-6"
            }]
        ]],
        x8 = ["svg", h, [
            ["path", {
                d: "M21 15V6"
            }],
            ["path", {
                d: "M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
            }],
            ["path", {
                d: "M12 12H3"
            }],
            ["path", {
                d: "M16 6H3"
            }],
            ["path", {
                d: "M12 18H3"
            }]
        ]],
        L8 = ["svg", h, [
            ["line", {
                x1: "10",
                x2: "21",
                y1: "6",
                y2: "6"
            }],
            ["line", {
                x1: "10",
                x2: "21",
                y1: "12",
                y2: "12"
            }],
            ["line", {
                x1: "10",
                x2: "21",
                y1: "18",
                y2: "18"
            }],
            ["path", {
                d: "M4 6h1v4"
            }],
            ["path", {
                d: "M4 10h2"
            }],
            ["path", {
                d: "M6 18H4c0-1 2-2 2-3s-1-1.5-2-1"
            }]
        ]],
        S8 = ["svg", h, [
            ["path", {
                d: "M11 12H3"
            }],
            ["path", {
                d: "M16 6H3"
            }],
            ["path", {
                d: "M16 18H3"
            }],
            ["path", {
                d: "M18 9v6"
            }],
            ["path", {
                d: "M21 12h-6"
            }]
        ]],
        A8 = ["svg", h, [
            ["path", {
                d: "M21 6H3"
            }],
            ["path", {
                d: "M7 12H3"
            }],
            ["path", {
                d: "M7 18H3"
            }],
            ["path", {
                d: "M12 18a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L11 14"
            }],
            ["path", {
                d: "M11 10v4h4"
            }]
        ]],
        f8 = ["svg", h, [
            ["path", {
                d: "M16 12H3"
            }],
            ["path", {
                d: "M16 18H3"
            }],
            ["path", {
                d: "M10 6H3"
            }],
            ["path", {
                d: "M21 18V8a2 2 0 0 0-2-2h-5"
            }],
            ["path", {
                d: "m16 8-2-2 2-2"
            }]
        ]],
        k8 = ["svg", h, [
            ["rect", {
                x: "3",
                y: "5",
                width: "6",
                height: "6",
                rx: "1"
            }],
            ["path", {
                d: "m3 17 2 2 4-4"
            }],
            ["path", {
                d: "M13 6h8"
            }],
            ["path", {
                d: "M13 12h8"
            }],
            ["path", {
                d: "M13 18h8"
            }]
        ]],
        F8 = ["svg", h, [
            ["path", {
                d: "M21 12h-8"
            }],
            ["path", {
                d: "M21 6H8"
            }],
            ["path", {
                d: "M21 18h-8"
            }],
            ["path", {
                d: "M3 6v4c0 1.1.9 2 2 2h3"
            }],
            ["path", {
                d: "M3 10v6c0 1.1.9 2 2 2h3"
            }]
        ]],
        Z8 = ["svg", h, [
            ["path", {
                d: "M12 12H3"
            }],
            ["path", {
                d: "M16 6H3"
            }],
            ["path", {
                d: "M12 18H3"
            }],
            ["path", {
                d: "m16 12 5 3-5 3v-6Z"
            }]
        ]],
        P8 = ["svg", h, [
            ["path", {
                d: "M11 12H3"
            }],
            ["path", {
                d: "M16 6H3"
            }],
            ["path", {
                d: "M16 18H3"
            }],
            ["path", {
                d: "m19 10-4 4"
            }],
            ["path", {
                d: "m15 10 4 4"
            }]
        ]],
        B8 = ["svg", h, [
            ["line", {
                x1: "8",
                x2: "21",
                y1: "6",
                y2: "6"
            }],
            ["line", {
                x1: "8",
                x2: "21",
                y1: "12",
                y2: "12"
            }],
            ["line", {
                x1: "8",
                x2: "21",
                y1: "18",
                y2: "18"
            }],
            ["line", {
                x1: "3",
                x2: "3.01",
                y1: "6",
                y2: "6"
            }],
            ["line", {
                x1: "3",
                x2: "3.01",
                y1: "12",
                y2: "12"
            }],
            ["line", {
                x1: "3",
                x2: "3.01",
                y1: "18",
                y2: "18"
            }]
        ]],
        D8 = ["svg", h, [
            ["path", {
                d: "M21 12a9 9 0 1 1-6.219-8.56"
            }]
        ]],
        T8 = ["svg", h, [
            ["line", {
                x1: "12",
                x2: "12",
                y1: "2",
                y2: "6"
            }],
            ["line", {
                x1: "12",
                x2: "12",
                y1: "18",
                y2: "22"
            }],
            ["line", {
                x1: "4.93",
                x2: "7.76",
                y1: "4.93",
                y2: "7.76"
            }],
            ["line", {
                x1: "16.24",
                x2: "19.07",
                y1: "16.24",
                y2: "19.07"
            }],
            ["line", {
                x1: "2",
                x2: "6",
                y1: "12",
                y2: "12"
            }],
            ["line", {
                x1: "18",
                x2: "22",
                y1: "12",
                y2: "12"
            }],
            ["line", {
                x1: "4.93",
                x2: "7.76",
                y1: "19.07",
                y2: "16.24"
            }],
            ["line", {
                x1: "16.24",
                x2: "19.07",
                y1: "7.76",
                y2: "4.93"
            }]
        ]],
        z8 = ["svg", h, [
            ["line", {
                x1: "2",
                x2: "5",
                y1: "12",
                y2: "12"
            }],
            ["line", {
                x1: "19",
                x2: "22",
                y1: "12",
                y2: "12"
            }],
            ["line", {
                x1: "12",
                x2: "12",
                y1: "2",
                y2: "5"
            }],
            ["line", {
                x1: "12",
                x2: "12",
                y1: "19",
                y2: "22"
            }],
            ["circle", {
                cx: "12",
                cy: "12",
                r: "7"
            }],
            ["circle", {
                cx: "12",
                cy: "12",
                r: "3"
            }]
        ]],
        R8 = ["svg", h, [
            ["line", {
                x1: "2",
                x2: "5",
                y1: "12",
                y2: "12"
            }],
            ["line", {
                x1: "19",
                x2: "22",
                y1: "12",
                y2: "12"
            }],
            ["line", {
                x1: "12",
                x2: "12",
                y1: "2",
                y2: "5"
            }],
            ["line", {
                x1: "12",
                x2: "12",
                y1: "19",
                y2: "22"
            }],
            ["path", {
                d: "M7.11 7.11C5.83 8.39 5 10.1 5 12c0 3.87 3.13 7 7 7 1.9 0 3.61-.83 4.89-2.11"
            }],
            ["path", {
                d: "M18.71 13.96c.19-.63.29-1.29.29-1.96 0-3.87-3.13-7-7-7-.67 0-1.33.1-1.96.29"
            }],
            ["line", {
                x1: "2",
                x2: "22",
                y1: "2",
                y2: "22"
            }]
        ]],
        b8 = ["svg", h, [
            ["line", {
                x1: "2",
                x2: "5",
                y1: "12",
                y2: "12"
            }],
            ["line", {
                x1: "19",
                x2: "22",
                y1: "12",
                y2: "12"
            }],
            ["line", {
                x1: "12",
                x2: "12",
                y1: "2",
                y2: "5"
            }],
            ["line", {
                x1: "12",
                x2: "12",
                y1: "19",
                y2: "22"
            }],
            ["circle", {
                cx: "12",
                cy: "12",
                r: "7"
            }]
        ]],
        U8 = ["svg", h, [
            ["circle", {
                cx: "12",
                cy: "16",
                r: "1"
            }],
            ["rect", {
                x: "3",
                y: "10",
                width: "18",
                height: "12",
                rx: "2"
            }],
            ["path", {
                d: "M7 10V7a5 5 0 0 1 10 0v3"
            }]
        ]],
        O8 = ["svg", h, [
            ["rect", {
                width: "18",
                height: "11",
                x: "3",
                y: "11",
                rx: "2",
                ry: "2"
            }],
            ["path", {
                d: "M7 11V7a5 5 0 0 1 10 0v4"
            }]
        ]],
        q8 = ["svg", h, [
            ["path", {
                d: "M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"
            }],
            ["polyline", {
                points: "10 17 15 12 10 7"
            }],
            ["line", {
                x1: "15",
                x2: "3",
                y1: "12",
                y2: "12"
            }]
        ]],
        G8 = ["svg", h, [
            ["path", {
                d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"
            }],
            ["polyline", {
                points: "16 17 21 12 16 7"
            }],
            ["line", {
                x1: "21",
                x2: "9",
                y1: "12",
                y2: "12"
            }]
        ]],
        W8 = ["svg", h, [
            ["circle", {
                cx: "11",
                cy: "11",
                r: "8"
            }],
            ["path", {
                d: "m21 21-4.3-4.3"
            }],
            ["path", {
                d: "M11 11a2 2 0 0 0 4 0 4 4 0 0 0-8 0 6 6 0 0 0 12 0"
            }]
        ]],
        E8 = ["svg", h, [
            ["path", {
                d: "M6 20h0a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h0"
            }],
            ["path", {
                d: "M8 18V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v14"
            }],
            ["path", {
                d: "M10 20h4"
            }],
            ["circle", {
                cx: "16",
                cy: "20",
                r: "2"
            }],
            ["circle", {
                cx: "8",
                cy: "20",
                r: "2"
            }]
        ]],
        I8 = ["svg", h, [
            ["rect", {
                width: "18",
                height: "18",
                x: "3",
                y: "3",
                rx: "2"
            }],
            ["path", {
                d: "M8 16V8l4 4 4-4v8"
            }]
        ]],
        X8 = ["svg", h, [
            ["path", {
                d: "m6 15-4-4 6.75-6.77a7.79 7.79 0 0 1 11 11L13 22l-4-4 6.39-6.36a2.14 2.14 0 0 0-3-3L6 15"
            }],
            ["path", {
                d: "m5 8 4 4"
            }],
            ["path", {
                d: "m12 15 4 4"
            }]
        ]],
        N8 = ["svg", h, [
            ["path", {
                d: "M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8"
            }],
            ["path", {
                d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"
            }],
            ["path", {
                d: "m16 19 2 2 4-4"
            }]
        ]],
        K8 = ["svg", h, [
            ["path", {
                d: "M22 15V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8"
            }],
            ["path", {
                d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"
            }],
            ["path", {
                d: "M16 19h6"
            }]
        ]],
        J8 = ["svg", h, [
            ["path", {
                d: "M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z"
            }],
            ["path", {
                d: "m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10"
            }]
        ]],
        j8 = ["svg", h, [
            ["path", {
                d: "M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8"
            }],
            ["path", {
                d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"
            }],
            ["path", {
                d: "M19 16v6"
            }],
            ["path", {
                d: "M16 19h6"
            }]
        ]],
        Q8 = ["svg", h, [
            ["path", {
                d: "M22 10.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12.5"
            }],
            ["path", {
                d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"
            }],
            ["path", {
                d: "M18 15.28c.2-.4.5-.8.9-1a2.1 2.1 0 0 1 2.6.4c.3.4.5.8.5 1.3 0 1.3-2 2-2 2"
            }],
            ["path", {
                d: "M20 22v.01"
            }]
        ]],
        Y8 = ["svg", h, [
            ["path", {
                d: "M22 12.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h7.5"
            }],
            ["path", {
                d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"
            }],
            ["path", {
                d: "M18 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6v0Z"
            }],
            ["circle", {
                cx: "18",
                cy: "18",
                r: "3"
            }],
            ["path", {
                d: "m22 22-1.5-1.5"
            }]
        ]],
        _8 = ["svg", h, [
            ["path", {
                d: "M22 10.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12.5"
            }],
            ["path", {
                d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"
            }],
            ["path", {
                d: "M20 14v4"
            }],
            ["path", {
                d: "M20 22v.01"
            }]
        ]],
        a7 = ["svg", h, [
            ["path", {
                d: "M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h9"
            }],
            ["path", {
                d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"
            }],
            ["path", {
                d: "m17 17 4 4"
            }],
            ["path", {
                d: "m21 17-4 4"
            }]
        ]],
        h7 = ["svg", h, [
            ["rect", {
                width: "20",
                height: "16",
                x: "2",
                y: "4",
                rx: "2"
            }],
            ["path", {
                d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"
            }]
        ]],
        t7 = ["svg", h, [
            ["path", {
                d: "M22 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.5C2 7 4 5 6.5 5H18c2.2 0 4 1.8 4 4v8Z"
            }],
            ["polyline", {
                points: "15,9 18,9 18,11"
            }],
            ["path", {
                d: "M6.5 5C9 5 11 7 11 9.5V17a2 2 0 0 1-2 2v0"
            }],
            ["line", {
                x1: "6",
                x2: "7",
                y1: "10",
                y2: "10"
            }]
        ]],
        d7 = ["svg", h, [
            ["rect", {
                width: "16",
                height: "13",
                x: "6",
                y: "4",
                rx: "2"
            }],
            ["path", {
                d: "m22 7-7.1 3.78c-.57.3-1.23.3-1.8 0L6 7"
            }],
            ["path", {
                d: "M2 8v11c0 1.1.9 2 2 2h14"
            }]
        ]],
        c7 = ["svg", h, [
            ["path", {
                d: "M5.43 5.43A8.06 8.06 0 0 0 4 10c0 6 8 12 8 12a29.94 29.94 0 0 0 5-5"
            }],
            ["path", {
                d: "M19.18 13.52A8.66 8.66 0 0 0 20 10a8 8 0 0 0-8-8 7.88 7.88 0 0 0-3.52.82"
            }],
            ["path", {
                d: "M9.13 9.13A2.78 2.78 0 0 0 9 10a3 3 0 0 0 3 3 2.78 2.78 0 0 0 .87-.13"
            }],
            ["path", {
                d: "M14.9 9.25a3 3 0 0 0-2.15-2.16"
            }],
            ["line", {
                x1: "2",
                x2: "22",
                y1: "2",
                y2: "22"
            }]
        ]],
        n7 = ["svg", h, [
            ["path", {
                d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"
            }],
            ["circle", {
                cx: "12",
                cy: "10",
                r: "3"
            }]
        ]],
        i7 = ["svg", h, [
            ["polygon", {
                points: "3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"
            }],
            ["line", {
                x1: "9",
                x2: "9",
                y1: "3",
                y2: "18"
            }],
            ["line", {
                x1: "15",
                x2: "15",
                y1: "6",
                y2: "21"
            }]
        ]],
        p7 = ["svg", h, [
            ["path", {
                d: "M8 22h8"
            }],
            ["path", {
                d: "M12 11v11"
            }],
            ["path", {
                d: "m19 3-7 8-7-8Z"
            }]
        ]],
        e7 = ["svg", h, [
            ["polyline", {
                points: "15 3 21 3 21 9"
            }],
            ["polyline", {
                points: "9 21 3 21 3 15"
            }],
            ["line", {
                x1: "21",
                x2: "14",
                y1: "3",
                y2: "10"
            }],
            ["line", {
                x1: "3",
                x2: "10",
                y1: "21",
                y2: "14"
            }]
        ]],
        M7 = ["svg", h, [
            ["path", {
                d: "M8 3H5a2 2 0 0 0-2 2v3"
            }],
            ["path", {
                d: "M21 8V5a2 2 0 0 0-2-2h-3"
            }],
            ["path", {
                d: "M3 16v3a2 2 0 0 0 2 2h3"
            }],
            ["path", {
                d: "M16 21h3a2 2 0 0 0 2-2v-3"
            }]
        ]],
        l7 = ["svg", h, [
            ["path", {
                d: "M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15"
            }],
            ["path", {
                d: "M11 12 5.12 2.2"
            }],
            ["path", {
                d: "m13 12 5.88-9.8"
            }],
            ["path", {
                d: "M8 7h8"
            }],
            ["circle", {
                cx: "12",
                cy: "17",
                r: "5"
            }],
            ["path", {
                d: "M12 18v-2h-.5"
            }]
        ]],
        v7 = ["svg", h, [
            ["path", {
                d: "M9.26 9.26 3 11v3l14.14 3.14"
            }],
            ["path", {
                d: "M21 15.34V6l-7.31 2.03"
            }],
            ["path", {
                d: "M11.6 16.8a3 3 0 1 1-5.8-1.6"
            }],
            ["line", {
                x1: "2",
                x2: "22",
                y1: "2",
                y2: "22"
            }]
        ]],
        o7 = ["svg", h, [
            ["path", {
                d: "m3 11 18-5v12L3 14v-3z"
            }],
            ["path", {
                d: "M11.6 16.8a3 3 0 1 1-5.8-1.6"
            }]
        ]],
        s7 = ["svg", h, [
            ["circle", {
                cx: "12",
                cy: "12",
                r: "10"
            }],
            ["line", {
                x1: "8",
                x2: "16",
                y1: "15",
                y2: "15"
            }],
            ["line", {
                x1: "9",
                x2: "9.01",
                y1: "9",
                y2: "9"
            }],
            ["line", {
                x1: "15",
                x2: "15.01",
                y1: "9",
                y2: "9"
            }]
        ]],
        g7 = ["svg", h, [
            ["path", {
                d: "M6 19v-3"
            }],
            ["path", {
                d: "M10 19v-3"
            }],
            ["path", {
                d: "M14 19v-3"
            }],
            ["path", {
                d: "M18 19v-3"
            }],
            ["path", {
                d: "M8 11V9"
            }],
            ["path", {
                d: "M16 11V9"
            }],
            ["path", {
                d: "M12 11V9"
            }],
            ["path", {
                d: "M2 15h20"
            }],
            ["path", {
                d: "M2 7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1.1a2 2 0 0 0 0 3.837V17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-5.1a2 2 0 0 0 0-3.837Z"
            }]
        ]],
        r7 = ["svg", h, [
            ["rect", {
                width: "18",
                height: "18",
                x: "3",
                y: "3",
                rx: "2"
            }],
            ["path", {
                d: "M7 8h10"
            }],
            ["path", {
                d: "M7 12h10"
            }],
            ["path", {
                d: "M7 16h10"
            }]
        ]],
        y7 = ["svg", h, [
            ["line", {
                x1: "4",
                x2: "20",
                y1: "12",
                y2: "12"
            }],
            ["line", {
                x1: "4",
                x2: "20",
                y1: "6",
                y2: "6"
            }],
            ["line", {
                x1: "4",
                x2: "20",
                y1: "18",
                y2: "18"
            }]
        ]],
        $7 = ["svg", h, [
            ["path", {
                d: "m8 6 4-4 4 4"
            }],
            ["path", {
                d: "M12 2v10.3a4 4 0 0 1-1.172 2.872L4 22"
            }],
            ["path", {
                d: "m20 22-5-5"
            }]
        ]],
        m7 = ["svg", h, [
            ["path", {
                d: "m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"
            }]
        ]],
        H7 = ["svg", h, [
            ["path", {
                d: "M3 6V5c0-1.1.9-2 2-2h2"
            }],
            ["path", {
                d: "M11 3h3"
            }],
            ["path", {
                d: "M18 3h1c1.1 0 2 .9 2 2"
            }],
            ["path", {
                d: "M21 9v2"
            }],
            ["path", {
                d: "M21 15c0 1.1-.9 2-2 2h-1"
            }],
            ["path", {
                d: "M14 17h-3"
            }],
            ["path", {
                d: "m7 17-4 4v-5"
            }],
            ["path", {
                d: "M3 12v-2"
            }]
        ]],
        C7 = ["svg", h, [
            ["path", {
                d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
            }],
            ["line", {
                x1: "9",
                x2: "15",
                y1: "10",
                y2: "10"
            }],
            ["line", {
                x1: "12",
                x2: "12",
                y1: "7",
                y2: "13"
            }]
        ]],
        u7 = ["svg", h, [
            ["path", {
                d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
            }]
        ]],
        V7 = ["svg", h, [
            ["path", {
                d: "M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z"
            }],
            ["path", {
                d: "M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"
            }]
        ]],
        w7 = ["svg", h, [
            ["path", {
                d: "m12 8-9.04 9.06a2.82 2.82 0 1 0 3.98 3.98L16 12"
            }],
            ["circle", {
                cx: "17",
                cy: "7",
                r: "5"
            }]
        ]],
        x7 = ["svg", h, [
            ["line", {
                x1: "2",
                x2: "22",
                y1: "2",
                y2: "22"
            }],
            ["path", {
                d: "M18.89 13.23A7.12 7.12 0 0 0 19 12v-2"
            }],
            ["path", {
                d: "M5 10v2a7 7 0 0 0 12 5"
            }],
            ["path", {
                d: "M15 9.34V5a3 3 0 0 0-5.68-1.33"
            }],
            ["path", {
                d: "M9 9v3a3 3 0 0 0 5.12 2.12"
            }],
            ["line", {
                x1: "12",
                x2: "12",
                y1: "19",
                y2: "22"
            }]
        ]],
        L7 = ["svg", h, [
            ["path", {
                d: "M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"
            }],
            ["path", {
                d: "M19 10v2a7 7 0 0 1-14 0v-2"
            }],
            ["line", {
                x1: "12",
                x2: "12",
                y1: "19",
                y2: "22"
            }]
        ]],
        S7 = ["svg", h, [
            ["path", {
                d: "M6 18h8"
            }],
            ["path", {
                d: "M3 22h18"
            }],
            ["path", {
                d: "M14 22a7 7 0 1 0 0-14h-1"
            }],
            ["path", {
                d: "M9 14h2"
            }],
            ["path", {
                d: "M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z"
            }],
            ["path", {
                d: "M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"
            }]
        ]],
        A7 = ["svg", h, [
            ["rect", {
                width: "20",
                height: "15",
                x: "2",
                y: "4",
                rx: "2"
            }],
            ["rect", {
                width: "8",
                height: "7",
                x: "6",
                y: "8",
                rx: "1"
            }],
            ["path", {
                d: "M18 8v7"
            }],
            ["path", {
                d: "M6 19v2"
            }],
            ["path", {
                d: "M18 19v2"
            }]
        ]],
        f7 = ["svg", h, [
            ["path", {
                d: "M18 6H5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h13l4-3.5L18 6Z"
            }],
            ["path", {
                d: "M12 13v8"
            }],
            ["path", {
                d: "M12 3v3"
            }]
        ]],
        k7 = ["svg", h, [
            ["path", {
                d: "M8 2h8"
            }],
            ["path", {
                d: "M9 2v1.343M15 2v2.789a4 4 0 0 0 .672 2.219l.656.984a4 4 0 0 1 .672 2.22v1.131M7.8 7.8l-.128.192A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-3"
            }],
            ["path", {
                d: "M7 15a6.47 6.47 0 0 1 5 0 6.472 6.472 0 0 0 3.435.435"
            }],
            ["line", {
                x1: "2",
                x2: "22",
                y1: "2",
                y2: "22"
            }]
        ]],
        F7 = ["svg", h, [
            ["path", {
                d: "M8 2h8"
            }],
            ["path", {
                d: "M9 2v2.789a4 4 0 0 1-.672 2.219l-.656.984A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-9.789a4 4 0 0 0-.672-2.219l-.656-.984A4 4 0 0 1 15 4.788V2"
            }],
            ["path", {
                d: "M7 15a6.472 6.472 0 0 1 5 0 6.47 6.47 0 0 0 5 0"
            }]
        ]],
        Z7 = ["svg", h, [
            ["polyline", {
                points: "4 14 10 14 10 20"
            }],
            ["polyline", {
                points: "20 10 14 10 14 4"
            }],
            ["line", {
                x1: "14",
                x2: "21",
                y1: "10",
                y2: "3"
            }],
            ["line", {
                x1: "3",
                x2: "10",
                y1: "21",
                y2: "14"
            }]
        ]],
        P7 = ["svg", h, [
            ["path", {
                d: "M8 3v3a2 2 0 0 1-2 2H3"
            }],
            ["path", {
                d: "M21 8h-3a2 2 0 0 1-2-2V3"
            }],
            ["path", {
                d: "M3 16h3a2 2 0 0 1 2 2v3"
            }],
            ["path", {
                d: "M16 21v-3a2 2 0 0 1 2-2h3"
            }]
        ]],
        B7 = ["svg", h, [
            ["circle", {
                cx: "12",
                cy: "12",
                r: "10"
            }],
            ["path", {
                d: "M8 12h8"
            }]
        ]],
        D7 = ["svg", h, [
            ["rect", {
                width: "18",
                height: "18",
                x: "3",
                y: "3",
                rx: "2"
            }],
            ["path", {
                d: "M8 12h8"
            }]
        ]],
        T7 = ["svg", h, [
            ["path", {
                d: "M5 12h14"
            }]
        ]],
        z7 = ["svg", h, [
            ["path", {
                d: "m9 10 2 2 4-4"
            }],
            ["rect", {
                width: "20",
                height: "14",
                x: "2",
                y: "3",
                rx: "2"
            }],
            ["path", {
                d: "M12 17v4"
            }],
            ["path", {
                d: "M8 21h8"
            }]
        ]],
        R7 = ["svg", h, [
            ["circle", {
                cx: "19",
                cy: "6",
                r: "3"
            }],
            ["path", {
                d: "M22 12v3a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h9"
            }],
            ["path", {
                d: "M12 17v4"
            }],
            ["path", {
                d: "M8 21h8"
            }]
        ]],
        b7 = ["svg", h, [
            ["path", {
                d: "M12 13V7"
            }],
            ["path", {
                d: "m15 10-3 3-3-3"
            }],
            ["rect", {
                width: "20",
                height: "14",
                x: "2",
                y: "3",
                rx: "2"
            }],
            ["path", {
                d: "M12 17v4"
            }],
            ["path", {
                d: "M8 21h8"
            }]
        ]],
        U7 = ["svg", h, [
            ["path", {
                d: "M17 17H4a2 2 0 0 1-2-2V5c0-1.5 1-2 1-2"
            }],
            ["path", {
                d: "M22 15V5a2 2 0 0 0-2-2H9"
            }],
            ["path", {
                d: "M8 21h8"
            }],
            ["path", {
                d: "M12 17v4"
            }],
            ["path", {
                d: "m2 2 20 20"
            }]
        ]],
        O7 = ["svg", h, [
            ["path", {
                d: "M10 13V7"
            }],
            ["path", {
                d: "M14 13V7"
            }],
            ["rect", {
                width: "20",
                height: "14",
                x: "2",
                y: "3",
                rx: "2"
            }],
            ["path", {
                d: "M12 17v4"
            }],
            ["path", {
                d: "M8 21h8"
            }]
        ]],
        q7 = ["svg", h, [
            ["path", {
                d: "m10 7 5 3-5 3Z"
            }],
            ["rect", {
                width: "20",
                height: "14",
                x: "2",
                y: "3",
                rx: "2"
            }],
            ["path", {
                d: "M12 17v4"
            }],
            ["path", {
                d: "M8 21h8"
            }]
        ]],
        G7 = ["svg", h, [
            ["path", {
                d: "M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8"
            }],
            ["path", {
                d: "M10 19v-3.96 3.15"
            }],
            ["path", {
                d: "M7 19h5"
            }],
            ["rect", {
                width: "6",
                height: "10",
                x: "16",
                y: "12",
                rx: "2"
            }]
        ]],
        W7 = ["svg", h, [
            ["path", {
                d: "M5.5 20H8"
            }],
            ["path", {
                d: "M17 9h.01"
            }],
            ["rect", {
                width: "10",
                height: "16",
                x: "12",
                y: "4",
                rx: "2"
            }],
            ["path", {
                d: "M8 6H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4"
            }],
            ["circle", {
                cx: "17",
                cy: "15",
                r: "1"
            }]
        ]],
        E7 = ["svg", h, [
            ["rect", {
                x: "9",
                y: "7",
                width: "6",
                height: "6"
            }],
            ["rect", {
                width: "20",
                height: "14",
                x: "2",
                y: "3",
                rx: "2"
            }],
            ["path", {
                d: "M12 17v4"
            }],
            ["path", {
                d: "M8 21h8"
            }]
        ]],
        I7 = ["svg", h, [
            ["path", {
                d: "m9 10 3-3 3 3"
            }],
            ["path", {
                d: "M12 13V7"
            }],
            ["rect", {
                width: "20",
                height: "14",
                x: "2",
                y: "3",
                rx: "2"
            }],
            ["path", {
                d: "M12 17v4"
            }],
            ["path", {
                d: "M8 21h8"
            }]
        ]],
        X7 = ["svg", h, [
            ["path", {
                d: "m14.5 12.5-5-5"
            }],
            ["path", {
                d: "m9.5 12.5 5-5"
            }],
            ["rect", {
                width: "20",
                height: "14",
                x: "2",
                y: "3",
                rx: "2"
            }],
            ["path", {
                d: "M12 17v4"
            }],
            ["path", {
                d: "M8 21h8"
            }]
        ]],
        N7 = ["svg", h, [
            ["rect", {
                width: "20",
                height: "14",
                x: "2",
                y: "3",
                rx: "2"
            }],
            ["line", {
                x1: "8",
                x2: "16",
                y1: "21",
                y2: "21"
            }],
            ["line", {
                x1: "12",
                x2: "12",
                y1: "17",
                y2: "21"
            }]
        ]],
        K7 = ["svg", h, [
            ["path", {
                d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"
            }],
            ["path", {
                d: "M19 3v4"
            }],
            ["path", {
                d: "M21 5h-4"
            }]
        ]],
        J7 = ["svg", h, [
            ["path", {
                d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"
            }]
        ]],
        j7 = ["svg", h, [
            ["circle", {
                cx: "12",
                cy: "12",
                r: "1"
            }],
            ["circle", {
                cx: "19",
                cy: "12",
                r: "1"
            }],
            ["circle", {
                cx: "5",
                cy: "12",
                r: "1"
            }]
        ]],
        Q7 = ["svg", h, [
            ["circle", {
                cx: "12",
                cy: "12",
                r: "1"
            }],
            ["circle", {
                cx: "12",
                cy: "5",
                r: "1"
            }],
            ["circle", {
                cx: "12",
                cy: "19",
                r: "1"
            }]
        ]],
        Y7 = ["svg", h, [
            ["path", {
                d: "m8 3 4 8 5-5 5 15H2L8 3z"
            }],
            ["path", {
                d: "M4.14 15.08c2.62-1.57 5.24-1.43 7.86.42 2.74 1.94 5.49 2 8.23.19"
            }]
        ]],
        _7 = ["svg", h, [
            ["path", {
                d: "m8 3 4 8 5-5 5 15H2L8 3z"
            }]
        ]],
        an = ["svg", h, [
            ["path", {
                d: "m4 4 7.07 17 2.51-7.39L21 11.07z"
            }]
        ]],
        hn = ["svg", h, [
            ["path", {
                d: "m9 9 5 12 1.8-5.2L21 14Z"
            }],
            ["path", {
                d: "M7.2 2.2 8 5.1"
            }],
            ["path", {
                d: "m5.1 8-2.9-.8"
            }],
            ["path", {
                d: "M14 4.1 12 6"
            }],
            ["path", {
                d: "m6 12-1.9 2"
            }]
        ]],
        tn = ["svg", h, [
            ["path", {
                d: "M5 3a2 2 0 0 0-2 2"
            }],
            ["path", {
                d: "M19 3a2 2 0 0 1 2 2"
            }],
            ["path", {
                d: "m12 12 4 10 1.7-4.3L22 16Z"
            }],
            ["path", {
                d: "M5 21a2 2 0 0 1-2-2"
            }],
            ["path", {
                d: "M9 3h1"
            }],
            ["path", {
                d: "M9 21h2"
            }],
            ["path", {
                d: "M14 3h1"
            }],
            ["path", {
                d: "M3 9v1"
            }],
            ["path", {
                d: "M21 9v2"
            }],
            ["path", {
                d: "M3 14v1"
            }]
        ]],
        dn = ["svg", h, [
            ["path", {
                d: "M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6"
            }],
            ["path", {
                d: "m12 12 4 10 1.7-4.3L22 16Z"
            }]
        ]],
        cn = ["svg", h, [
            ["path", {
                d: "m3 3 7.07 16.97 2.51-7.39 7.39-2.51L3 3z"
            }],
            ["path", {
                d: "m13 13 6 6"
            }]
        ]],
        nn = ["svg", h, [
            ["rect", {
                x: "5",
                y: "2",
                width: "14",
                height: "20",
                rx: "7"
            }],
            ["path", {
                d: "M12 6v4"
            }]
        ]],
        pn = ["svg", h, [
            ["path", {
                d: "M5 3v16h16"
            }],
            ["path", {
                d: "m5 19 6-6"
            }],
            ["path", {
                d: "m2 6 3-3 3 3"
            }],
            ["path", {
                d: "m18 16 3 3-3 3"
            }]
        ]],
        en = ["svg", h, [
            ["polyline", {
                points: "5 11 5 5 11 5"
            }],
            ["polyline", {
                points: "19 13 19 19 13 19"
            }],
            ["line", {
                x1: "5",
                x2: "19",
                y1: "5",
                y2: "19"
            }]
        ]],
        Mn = ["svg", h, [
            ["polyline", {
                points: "13 5 19 5 19 11"
            }],
            ["polyline", {
                points: "11 19 5 19 5 13"
            }],
            ["line", {
                x1: "19",
                x2: "5",
                y1: "5",
                y2: "19"
            }]
        ]],
        ln = ["svg", h, [
            ["path", {
                d: "M11 19H5V13"
            }],
            ["path", {
                d: "M19 5L5 19"
            }]
        ]],
        vn = ["svg", h, [
            ["path", {
                d: "M19 13V19H13"
            }],
            ["path", {
                d: "M5 5L19 19"
            }]
        ]],
        on = ["svg", h, [
            ["path", {
                d: "M8 18L12 22L16 18"
            }],
            ["path", {
                d: "M12 2V22"
            }]
        ]],
        sn = ["svg", h, [
            ["polyline", {
                points: "18 8 22 12 18 16"
            }],
            ["polyline", {
                points: "6 8 2 12 6 16"
            }],
            ["line", {
                x1: "2",
                x2: "22",
                y1: "12",
                y2: "12"
            }]
        ]],
        gn = ["svg", h, [
            ["path", {
                d: "M6 8L2 12L6 16"
            }],
            ["path", {
                d: "M2 12H22"
            }]
        ]],
        rn = ["svg", h, [
            ["path", {
                d: "M18 8L22 12L18 16"
            }],
            ["path", {
                d: "M2 12H22"
            }]
        ]],
        yn = ["svg", h, [
            ["path", {
                d: "M5 11V5H11"
            }],
            ["path", {
                d: "M5 5L19 19"
            }]
        ]],
        $n = ["svg", h, [
            ["path", {
                d: "M13 5H19V11"
            }],
            ["path", {
                d: "M19 5L5 19"
            }]
        ]],
        mn = ["svg", h, [
            ["path", {
                d: "M8 6L12 2L16 6"
            }],
            ["path", {
                d: "M12 2V22"
            }]
        ]],
        Hn = ["svg", h, [
            ["polyline", {
                points: "8 18 12 22 16 18"
            }],
            ["polyline", {
                points: "8 6 12 2 16 6"
            }],
            ["line", {
                x1: "12",
                x2: "12",
                y1: "2",
                y2: "22"
            }]
        ]],
        Cn = ["svg", h, [
            ["polyline", {
                points: "5 9 2 12 5 15"
            }],
            ["polyline", {
                points: "9 5 12 2 15 5"
            }],
            ["polyline", {
                points: "15 19 12 22 9 19"
            }],
            ["polyline", {
                points: "19 9 22 12 19 15"
            }],
            ["line", {
                x1: "2",
                x2: "22",
                y1: "12",
                y2: "12"
            }],
            ["line", {
                x1: "12",
                x2: "12",
                y1: "2",
                y2: "22"
            }]
        ]],
        un = ["svg", h, [
            ["circle", {
                cx: "8",
                cy: "18",
                r: "4"
            }],
            ["path", {
                d: "M12 18V2l7 4"
            }]
        ]],
        Vn = ["svg", h, [
            ["circle", {
                cx: "12",
                cy: "18",
                r: "4"
            }],
            ["path", {
                d: "M16 18V2"
            }]
        ]],
        wn = ["svg", h, [
            ["path", {
                d: "M9 18V5l12-2v13"
            }],
            ["path", {
                d: "m9 9 12-2"
            }],
            ["circle", {
                cx: "6",
                cy: "18",
                r: "3"
            }],
            ["circle", {
                cx: "18",
                cy: "16",
                r: "3"
            }]
        ]],
        xn = ["svg", h, [
            ["path", {
                d: "M9 18V5l12-2v13"
            }],
            ["circle", {
                cx: "6",
                cy: "18",
                r: "3"
            }],
            ["circle", {
                cx: "18",
                cy: "16",
                r: "3"
            }]
        ]],
        Ln = ["svg", h, [
            ["path", {
                d: "M9.31 9.31 5 21l7-4 7 4-1.17-3.17"
            }],
            ["path", {
                d: "M14.53 8.88 12 2l-1.17 3.17"
            }],
            ["line", {
                x1: "2",
                x2: "22",
                y1: "2",
                y2: "22"
            }]
        ]],
        Sn = ["svg", h, [
            ["polygon", {
                points: "12 2 19 21 12 17 5 21 12 2"
            }]
        ]],
        An = ["svg", h, [
            ["path", {
                d: "M8.43 8.43 3 11l8 2 2 8 2.57-5.43"
            }],
            ["path", {
                d: "M17.39 11.73 22 2l-9.73 4.61"
            }],
            ["line", {
                x1: "2",
                x2: "22",
                y1: "2",
                y2: "22"
            }]
        ]],
        fn = ["svg", h, [
            ["polygon", {
                points: "3 11 22 2 13 21 11 13 3 11"
            }]
        ]],
        kn = ["svg", h, [
            ["rect", {
                x: "16",
                y: "16",
                width: "6",
                height: "6",
                rx: "1"
            }],
            ["rect", {
                x: "2",
                y: "16",
                width: "6",
                height: "6",
                rx: "1"
            }],
            ["rect", {
                x: "9",
                y: "2",
                width: "6",
                height: "6",
                rx: "1"
            }],
            ["path", {
                d: "M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"
            }],
            ["path", {
                d: "M12 12V8"
            }]
        ]],
        Fn = ["svg", h, [
            ["path", {
                d: "M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"
            }],
            ["path", {
                d: "M18 14h-8"
            }],
            ["path", {
                d: "M15 18h-5"
            }],
            ["path", {
                d: "M10 6h8v4h-8V6Z"
            }]
        ]],
        Zn = ["svg", h, [
            ["path", {
                d: "M6 8.32a7.43 7.43 0 0 1 0 7.36"
            }],
            ["path", {
                d: "M9.46 6.21a11.76 11.76 0 0 1 0 11.58"
            }],
            ["path", {
                d: "M12.91 4.1a15.91 15.91 0 0 1 .01 15.8"
            }],
            ["path", {
                d: "M16.37 2a20.16 20.16 0 0 1 0 20"
            }]
        ]],
        Pn = ["svg", h, [
            ["path", {
                d: "M12 4V2"
            }],
            ["path", {
                d: "M5 10v4a7.004 7.004 0 0 0 5.277 6.787c.412.104.802.292 1.102.592L12 22l.621-.621c.3-.3.69-.488 1.102-.592a7.01 7.01 0 0 0 4.125-2.939"
            }],
            ["path", {
                d: "M19 10v3.343"
            }],
            ["path", {
                d: "M12 12c-1.349-.573-1.905-1.005-2.5-2-.546.902-1.048 1.353-2.5 2-1.018-.644-1.46-1.08-2-2-1.028.71-1.69.918-3 1 1.081-1.048 1.757-2.03 2-3 .194-.776.84-1.551 1.79-2.21m11.654 5.997c.887-.457 1.28-.891 1.556-1.787 1.032.916 1.683 1.157 3 1-1.297-1.036-1.758-2.03-2-3-.5-2-4-4-8-4-.74 0-1.461.068-2.15.192"
            }],
            ["line", {
                x1: "2",
                x2: "22",
                y1: "2",
                y2: "22"
            }]
        ]],
        Bn = ["svg", h, [
            ["path", {
                d: "M12 4V2"
            }],
            ["path", {
                d: "M5 10v4a7.004 7.004 0 0 0 5.277 6.787c.412.104.802.292 1.102.592L12 22l.621-.621c.3-.3.69-.488 1.102-.592A7.003 7.003 0 0 0 19 14v-4"
            }],
            ["path", {
                d: "M12 4C8 4 4.5 6 4 8c-.243.97-.919 1.952-2 3 1.31-.082 1.972-.29 3-1 .54.92.982 1.356 2 2 1.452-.647 1.954-1.098 2.5-2 .595.995 1.151 1.427 2.5 2 1.31-.621 1.862-1.058 2.5-2 .629.977 1.162 1.423 2.5 2 1.209-.548 1.68-.967 2-2 1.032.916 1.683 1.157 3 1-1.297-1.036-1.758-2.03-2-3-.5-2-4-4-8-4Z"
            }]
        ]],
        Dn = ["svg", h, [
            ["polygon", {
                points: "7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"
            }]
        ]],
        Tn = ["svg", h, [
            ["path", {
                d: "M3 3h6l6 18h6"
            }],
            ["path", {
                d: "M14 3h7"
            }]
        ]],
        zn = ["svg", h, [
            ["circle", {
                cx: "12",
                cy: "12",
                r: "3"
            }],
            ["circle", {
                cx: "19",
                cy: "5",
                r: "2"
            }],
            ["circle", {
                cx: "5",
                cy: "19",
                r: "2"
            }],
            ["path", {
                d: "M10.4 21.9a10 10 0 0 0 9.941-15.416"
            }],
            ["path", {
                d: "M13.5 2.1a10 10 0 0 0-9.841 15.416"
            }]
        ]],
        Rn = ["svg", h, [
            ["polyline", {
                points: "7 8 3 12 7 16"
            }],
            ["line", {
                x1: "21",
                x2: "11",
                y1: "12",
                y2: "12"
            }],
            ["line", {
                x1: "21",
                x2: "11",
                y1: "6",
                y2: "6"
            }],
            ["line", {
                x1: "21",
                x2: "11",
                y1: "18",
                y2: "18"
            }]
        ]],
        bn = ["svg", h, [
            ["path", {
                d: "M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"
            }],
            ["path", {
                d: "m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9"
            }],
            ["path", {
                d: "M12 3v6"
            }]
        ]],
        Un = ["svg", h, [
            ["path", {
                d: "m16 16 2 2 4-4"
            }],
            ["path", {
                d: "M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"
            }],
            ["path", {
                d: "m7.5 4.27 9 5.15"
            }],
            ["polyline", {
                points: "3.29 7 12 12 20.71 7"
            }],
            ["line", {
                x1: "12",
                x2: "12",
                y1: "22",
                y2: "12"
            }]
        ]],
        On = ["svg", h, [
            ["path", {
                d: "M16 16h6"
            }],
            ["path", {
                d: "M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"
            }],
            ["path", {
                d: "m7.5 4.27 9 5.15"
            }],
            ["polyline", {
                points: "3.29 7 12 12 20.71 7"
            }],
            ["line", {
                x1: "12",
                x2: "12",
                y1: "22",
                y2: "12"
            }]
        ]],
        qn = ["svg", h, [
            ["path", {
                d: "M20.91 8.84 8.56 2.23a1.93 1.93 0 0 0-1.81 0L3.1 4.13a2.12 2.12 0 0 0-.05 3.69l12.22 6.93a2 2 0 0 0 1.94 0L21 12.51a2.12 2.12 0 0 0-.09-3.67Z"
            }],
            ["path", {
                d: "m3.09 8.84 12.35-6.61a1.93 1.93 0 0 1 1.81 0l3.65 1.9a2.12 2.12 0 0 1 .1 3.69L8.73 14.75a2 2 0 0 1-1.94 0L3 12.51a2.12 2.12 0 0 1 .09-3.67Z"
            }],
            ["line", {
                x1: "12",
                x2: "12",
                y1: "22",
                y2: "13"
            }],
            ["path", {
                d: "M20 13.5v3.37a2.06 2.06 0 0 1-1.11 1.83l-6 3.08a1.93 1.93 0 0 1-1.78 0l-6-3.08A2.06 2.06 0 0 1 4 16.87V13.5"
            }]
        ]],
        Gn = ["svg", h, [
            ["path", {
                d: "M16 16h6"
            }],
            ["path", {
                d: "M19 13v6"
            }],
            ["path", {
                d: "M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"
            }],
            ["path", {
                d: "m7.5 4.27 9 5.15"
            }],
            ["polyline", {
                points: "3.29 7 12 12 20.71 7"
            }],
            ["line", {
                x1: "12",
                x2: "12",
                y1: "22",
                y2: "12"
            }]
        ]],
        Wn = ["svg", h, [
            ["path", {
                d: "M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"
            }],
            ["path", {
                d: "m7.5 4.27 9 5.15"
            }],
            ["polyline", {
                points: "3.29 7 12 12 20.71 7"
            }],
            ["line", {
                x1: "12",
                x2: "12",
                y1: "22",
                y2: "12"
            }],
            ["circle", {
                cx: "18.5",
                cy: "15.5",
                r: "2.5"
            }],
            ["path", {
                d: "M20.27 17.27 22 19"
            }]
        ]],
        En = ["svg", h, [
            ["path", {
                d: "M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"
            }],
            ["path", {
                d: "m7.5 4.27 9 5.15"
            }],
            ["polyline", {
                points: "3.29 7 12 12 20.71 7"
            }],
            ["line", {
                x1: "12",
                x2: "12",
                y1: "22",
                y2: "12"
            }],
            ["path", {
                d: "m17 13 5 5m-5 0 5-5"
            }]
        ]],
        In = ["svg", h, [
            ["path", {
                d: "m7.5 4.27 9 5.15"
            }],
            ["path", {
                d: "M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"
            }],
            ["path", {
                d: "m3.3 7 8.7 5 8.7-5"
            }],
            ["path", {
                d: "M12 22V12"
            }]
        ]],
        Xn = ["svg", h, [
            ["path", {
                d: "m19 11-8-8-8.6 8.6a2 2 0 0 0 0 2.8l5.2 5.2c.8.8 2 .8 2.8 0L19 11Z"
            }],
            ["path", {
                d: "m5 2 5 5"
            }],
            ["path", {
                d: "M2 13h15"
            }],
            ["path", {
                d: "M22 20a2 2 0 1 1-4 0c0-1.6 1.7-2.4 2-4 .3 1.6 2 2.4 2 4Z"
            }]
        ]],
        Nn = ["svg", h, [
            ["path", {
                d: "M14 19.9V16h3a2 2 0 0 0 2-2v-2H5v2c0 1.1.9 2 2 2h3v3.9a2 2 0 1 0 4 0Z"
            }],
            ["path", {
                d: "M6 12V2h12v10"
            }],
            ["path", {
                d: "M14 2v4"
            }],
            ["path", {
                d: "M10 2v2"
            }]
        ]],
        Kn = ["svg", h, [
            ["path", {
                d: "M18.37 2.63 14 7l-1.59-1.59a2 2 0 0 0-2.82 0L8 7l9 9 1.59-1.59a2 2 0 0 0 0-2.82L17 10l4.37-4.37a2.12 2.12 0 1 0-3-3Z"
            }],
            ["path", {
                d: "M9 8c-2 3-4 3.5-7 4l8 10c2-1 6-5 6-7"
            }],
            ["path", {
                d: "M14.5 17.5 4.5 15"
            }]
        ]],
        Jn = ["svg", h, [
            ["circle", {
                cx: "13.5",
                cy: "6.5",
                r: ".5"
            }],
            ["circle", {
                cx: "17.5",
                cy: "10.5",
                r: ".5"
            }],
            ["circle", {
                cx: "8.5",
                cy: "7.5",
                r: ".5"
            }],
            ["circle", {
                cx: "6.5",
                cy: "12.5",
                r: ".5"
            }],
            ["path", {
                d: "M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"
            }]
        ]],
        jn = ["svg", h, [
            ["path", {
                d: "M13 8c0-2.76-2.46-5-5.5-5S2 5.24 2 8h2l1-1 1 1h4"
            }],
            ["path", {
                d: "M13 7.14A5.82 5.82 0 0 1 16.5 6c3.04 0 5.5 2.24 5.5 5h-3l-1-1-1 1h-3"
            }],
            ["path", {
                d: "M5.89 9.71c-2.15 2.15-2.3 5.47-.35 7.43l4.24-4.25.7-.7.71-.71 2.12-2.12c-1.95-1.96-5.27-1.8-7.42.35z"
            }],
            ["path", {
                d: "M11 15.5c.5 2.5-.17 4.5-1 6.5h4c2-5.5-.5-12-1-14"
            }]
        ]],
        Qn = ["svg", h, [
            ["rect", {
                width: "18",
                height: "18",
                x: "3",
                y: "3",
                rx: "2",
                ry: "2"
            }],
            ["line", {
                x1: "3",
                x2: "21",
                y1: "15",
                y2: "15"
            }],
            ["path", {
                d: "m15 8-3 3-3-3"
            }]
        ]],
        Yn = ["svg", h, [
            ["rect", {
                width: "18",
                height: "18",
                x: "3",
                y: "3",
                rx: "2"
            }],
            ["path", {
                d: "M14 15h1"
            }],
            ["path", {
                d: "M19 15h2"
            }],
            ["path", {
                d: "M3 15h2"
            }],
            ["path", {
                d: "M9 15h1"
            }]
        ]],
        _n = ["svg", h, [
            ["rect", {
                width: "18",
                height: "18",
                x: "3",
                y: "3",
                rx: "2",
                ry: "2"
            }],
            ["line", {
                x1: "3",
                x2: "21",
                y1: "15",
                y2: "15"
            }],
            ["path", {
                d: "m9 10 3-3 3 3"
            }]
        ]],
        ai = ["svg", h, [
            ["rect", {
                width: "18",
                height: "18",
                x: "3",
                y: "3",
                rx: "2",
                ry: "2"
            }],
            ["line", {
                x1: "3",
                x2: "21",
                y1: "15",
                y2: "15"
            }]
        ]],
        hi = ["svg", h, [
            ["rect", {
                width: "18",
                height: "18",
                x: "3",
                y: "3",
                rx: "2",
                ry: "2"
            }],
            ["path", {
                d: "M9 3v18"
            }],
            ["path", {
                d: "m16 15-3-3 3-3"
            }]
        ]],
        ti = ["svg", h, [
            ["rect", {
                width: "18",
                height: "18",
                x: "3",
                y: "3",
                rx: "2"
            }],
            ["path", {
                d: "M9 14v1"
            }],
            ["path", {
                d: "M9 19v2"
            }],
            ["path", {
                d: "M9 3v2"
            }],
            ["path", {
                d: "M9 9v1"
            }]
        ]],
        di = ["svg", h, [
            ["rect", {
                width: "18",
                height: "18",
                x: "3",
                y: "3",
                rx: "2",
                ry: "2"
            }],
            ["path", {
                d: "M9 3v18"
            }],
            ["path", {
                d: "m14 9 3 3-3 3"
            }]
        ]],
        ci = ["svg", h, [
            ["rect", {
                width: "18",
                height: "18",
                x: "3",
                y: "3",
                rx: "2",
                ry: "2"
            }],
            ["line", {
                x1: "9",
                x2: "9",
                y1: "3",
                y2: "21"
            }]
        ]],
        ni = ["svg", h, [
            ["rect", {
                width: "18",
                height: "18",
                x: "3",
                y: "3",
                rx: "2",
                ry: "2"
            }],
            ["line", {
                x1: "15",
                x2: "15",
                y1: "3",
                y2: "21"
            }],
            ["path", {
                d: "m8 9 3 3-3 3"
            }]
        ]],
        ii = ["svg", h, [
            ["rect", {
                width: "18",
                height: "18",
                x: "3",
                y: "3",
                rx: "2"
            }],
            ["path", {
                d: "M15 14v1"
            }],
            ["path", {
                d: "M15 19v2"
            }],
            ["path", {
                d: "M15 3v2"
            }],
            ["path", {
                d: "M15 9v1"
            }]
        ]],
        pi = ["svg", h, [
            ["rect", {
                width: "18",
                height: "18",
                x: "3",
                y: "3",
                rx: "2",
                ry: "2"
            }],
            ["line", {
                x1: "15",
                x2: "15",
                y1: "3",
                y2: "21"
            }],
            ["path", {
                d: "m10 15-3-3 3-3"
            }]
        ]],
        ei = ["svg", h, [
            ["rect", {
                width: "18",
                height: "18",
                x: "3",
                y: "3",
                rx: "2",
                ry: "2"
            }],
            ["line", {
                x1: "15",
                x2: "15",
                y1: "3",
                y2: "21"
            }]
        ]],
        Mi = ["svg", h, [
            ["rect", {
                width: "18",
                height: "18",
                x: "3",
                y: "3",
                rx: "2",
                ry: "2"
            }],
            ["line", {
                x1: "3",
                x2: "21",
                y1: "9",
                y2: "9"
            }],
            ["path", {
                d: "m9 16 3-3 3 3"
            }]
        ]],
        li = ["svg", h, [
            ["rect", {
                width: "18",
                height: "18",
                x: "3",
                y: "3",
                rx: "2"
            }],
            ["path", {
                d: "M14 9h1"
            }],
            ["path", {
                d: "M19 9h2"
            }],
            ["path", {
                d: "M3 9h2"
            }],
            ["path", {
                d: "M9 9h1"
            }]
        ]],
        vi = ["svg", h, [
            ["rect", {
                width: "18",
                height: "18",
                x: "3",
                y: "3",
                rx: "2",
                ry: "2"
            }],
            ["line", {
                x1: "3",
                x2: "21",
                y1: "9",
                y2: "9"
            }],
            ["path", {
                d: "m15 14-3 3-3-3"
            }]
        ]],
        oi = ["svg", h, [
            ["rect", {
                width: "18",
                height: "18",
                x: "3",
                y: "3",
                rx: "2",
                ry: "2"
            }],
            ["line", {
                x1: "3",
                x2: "21",
                y1: "9",
                y2: "9"
            }]
        ]],
        si = ["svg", h, [
            ["path", {
                d: "m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"
            }]
        ]],
        gi = ["svg", h, [
            ["path", {
                d: "M8 21s-4-3-4-9 4-9 4-9"
            }],
            ["path", {
                d: "M16 3s4 3 4 9-4 9-4 9"
            }]
        ]],
        ri = ["svg", h, [
            ["circle", {
                cx: "12",
                cy: "12",
                r: "10"
            }],
            ["path", {
                d: "m5 5 14 14"
            }],
            ["path", {
                d: "M13 13a3 3 0 1 0 0-6H9v2"
            }],
            ["path", {
                d: "M9 17v-2.34"
            }]
        ]],
        yi = ["svg", h, [
            ["circle", {
                cx: "12",
                cy: "12",
                r: "10"
            }],
            ["path", {
                d: "M9 17V7h4a3 3 0 0 1 0 6H9"
            }]
        ]],
        $i = ["svg", h, [
            ["path", {
                d: "M9 9a3 3 0 1 1 6 0"
            }],
            ["path", {
                d: "M12 12v3"
            }],
            ["path", {
                d: "M11 15h2"
            }],
            ["path", {
                d: "M19 9a7 7 0 1 0-13.6 2.3C6.4 14.4 8 19 8 19h8s1.6-4.6 2.6-7.7c.3-.8.4-1.5.4-2.3"
            }],
            ["path", {
                d: "M12 19v3"
            }]
        ]],
        mi = ["svg", h, [
            ["path", {
                d: "M3.6 3.6A2 2 0 0 1 5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-.59 1.41"
            }],
            ["path", {
                d: "M3 8.7V19a2 2 0 0 0 2 2h10.3"
            }],
            ["path", {
                d: "m2 2 20 20"
            }],
            ["path", {
                d: "M13 13a3 3 0 1 0 0-6H9v2"
            }],
            ["path", {
                d: "M9 17v-2.3"
            }]
        ]],
        Hi = ["svg", h, [
            ["rect", {
                width: "18",
                height: "18",
                x: "3",
                y: "3",
                rx: "2"
            }],
            ["path", {
                d: "M9 17V7h4a3 3 0 0 1 0 6H9"
            }]
        ]],
        Ci = ["svg", h, [
            ["path", {
                d: "M5.8 11.3 2 22l10.7-3.79"
            }],
            ["path", {
                d: "M4 3h.01"
            }],
            ["path", {
                d: "M22 8h.01"
            }],
            ["path", {
                d: "M15 2h.01"
            }],
            ["path", {
                d: "M22 20h.01"
            }],
            ["path", {
                d: "m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12v0c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10"
            }],
            ["path", {
                d: "m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11v0c-.11.7-.72 1.22-1.43 1.22H17"
            }],
            ["path", {
                d: "m11 2 .33.82c.34.86-.2 1.82-1.11 1.98v0C9.52 4.9 9 5.52 9 6.23V7"
            }],
            ["path", {
                d: "M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z"
            }]
        ]],
        ui = ["svg", h, [
            ["circle", {
                cx: "12",
                cy: "12",
                r: "10"
            }],
            ["line", {
                x1: "10",
                x2: "10",
                y1: "15",
                y2: "9"
            }],
            ["line", {
                x1: "14",
                x2: "14",
                y1: "15",
                y2: "9"
            }]
        ]],
        Vi = ["svg", h, [
            ["path", {
                d: "M10 15V9"
            }],
            ["path", {
                d: "M14 15V9"
            }],
            ["path", {
                d: "M7.714 2h8.572L22 7.714v8.572L16.286 22H7.714L2 16.286V7.714L7.714 2z"
            }]
        ]],
        wi = ["svg", h, [
            ["rect", {
                width: "4",
                height: "16",
                x: "6",
                y: "4"
            }],
            ["rect", {
                width: "4",
                height: "16",
                x: "14",
                y: "4"
            }]
        ]],
        xi = ["svg", h, [
            ["circle", {
                cx: "11",
                cy: "4",
                r: "2"
            }],
            ["circle", {
                cx: "18",
                cy: "8",
                r: "2"
            }],
            ["circle", {
                cx: "20",
                cy: "16",
                r: "2"
            }],
            ["path", {
                d: "M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z"
            }]
        ]],
        Li = ["svg", h, [
            ["rect", {
                width: "14",
                height: "20",
                x: "5",
                y: "2",
                rx: "2"
            }],
            ["path", {
                d: "M15 14h.01"
            }],
            ["path", {
                d: "M9 6h6"
            }],
            ["path", {
                d: "M9 10h6"
            }]
        ]],
        Si = ["svg", h, [
            ["path", {
                d: "M12 20h9"
            }],
            ["path", {
                d: "M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"
            }]
        ]],
        Ai = ["svg", h, [
            ["path", {
                d: "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
            }],
            ["path", {
                d: "M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4Z"
            }]
        ]],
        fi = ["svg", h, [
            ["path", {
                d: "m12 19 7-7 3 3-7 7-3-3z"
            }],
            ["path", {
                d: "m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"
            }],
            ["path", {
                d: "m2 2 7.586 7.586"
            }],
            ["circle", {
                cx: "11",
                cy: "11",
                r: "2"
            }]
        ]],
        ki = ["svg", h, [
            ["path", {
                d: "M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"
            }]
        ]],
        Fi = ["svg", h, [
            ["path", {
                d: "M12 20h9"
            }],
            ["path", {
                d: "M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"
            }],
            ["path", {
                d: "m15 5 3 3"
            }]
        ]],
        Zi = ["svg", h, [
            ["path", {
                d: "m15 5 4 4"
            }],
            ["path", {
                d: "M13 7 8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13"
            }],
            ["path", {
                d: "m8 6 2-2"
            }],
            ["path", {
                d: "m2 22 5.5-1.5L21.17 6.83a2.82 2.82 0 0 0-4-4L3.5 16.5Z"
            }],
            ["path", {
                d: "m18 16 2-2"
            }],
            ["path", {
                d: "m17 11 4.3 4.3c.94.94.94 2.46 0 3.4l-2.6 2.6c-.94.94-2.46.94-3.4 0L11 17"
            }]
        ]],
        Pi = ["svg", h, [
            ["path", {
                d: "M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"
            }],
            ["path", {
                d: "m15 5 4 4"
            }]
        ]],
        Bi = ["svg", h, [
            ["path", {
                d: "M3.5 8.7c-.7.5-1 1.4-.7 2.2l2.8 8.7c.3.8 1 1.4 1.9 1.4h9.1c.9 0 1.6-.6 1.9-1.4l2.8-8.7c.3-.8 0-1.7-.7-2.2l-7.4-5.3a2.1 2.1 0 0 0-2.4 0Z"
            }]
        ]],
        Di = ["svg", h, [
            ["circle", {
                cx: "12",
                cy: "12",
                r: "10"
            }],
            ["path", {
                d: "m15 9-6 6"
            }],
            ["path", {
                d: "M9 9h.01"
            }],
            ["path", {
                d: "M15 15h.01"
            }]
        ]],
        Ti = ["svg", h, [
            ["path", {
                d: "M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0Z"
            }],
            ["path", {
                d: "M9.2 9.2h.01"
            }],
            ["path", {
                d: "m14.5 9.5-5 5"
            }],
            ["path", {
                d: "M14.7 14.8h.01"
            }]
        ]],
        zi = ["svg", h, [
            ["rect", {
                width: "18",
                height: "18",
                x: "3",
                y: "3",
                rx: "2"
            }],
            ["path", {
                d: "m15 9-6 6"
            }],
            ["path", {
                d: "M9 9h.01"
            }],
            ["path", {
                d: "M15 15h.01"
            }]
        ]],
        Ri = ["svg", h, [
            ["line", {
                x1: "19",
                x2: "5",
                y1: "5",
                y2: "19"
            }],
            ["circle", {
                cx: "6.5",
                cy: "6.5",
                r: "2.5"
            }],
            ["circle", {
                cx: "17.5",
                cy: "17.5",
                r: "2.5"
            }]
        ]],
        bi = ["svg", h, [
            ["circle", {
                cx: "12",
                cy: "5",
                r: "1"
            }],
            ["path", {
                d: "m9 20 3-6 3 6"
            }],
            ["path", {
                d: "m6 8 6 2 6-2"
            }],
            ["path", {
                d: "M12 10v4"
            }]
        ]],
        Ui = ["svg", h, [
            ["path", {
                d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
            }],
            ["path", {
                d: "M14.05 2a9 9 0 0 1 8 7.94"
            }],
            ["path", {
                d: "M14.05 6A5 5 0 0 1 18 10"
            }]
        ]],
        Oi = ["svg", h, [
            ["polyline", {
                points: "18 2 22 6 18 10"
            }],
            ["line", {
                x1: "14",
                x2: "22",
                y1: "6",
                y2: "6"
            }],
            ["path", {
                d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
            }]
        ]],
        qi = ["svg", h, [
            ["polyline", {
                points: "16 2 16 8 22 8"
            }],
            ["line", {
                x1: "22",
                x2: "16",
                y1: "2",
                y2: "8"
            }],
            ["path", {
                d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
            }]
        ]],
        Gi = ["svg", h, [
            ["line", {
                x1: "22",
                x2: "16",
                y1: "2",
                y2: "8"
            }],
            ["line", {
                x1: "16",
                x2: "22",
                y1: "2",
                y2: "8"
            }],
            ["path", {
                d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
            }]
        ]],
        Wi = ["svg", h, [
            ["path", {
                d: "M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91"
            }],
            ["line", {
                x1: "22",
                x2: "2",
                y1: "2",
                y2: "22"
            }]
        ]],
        Ei = ["svg", h, [
            ["polyline", {
                points: "22 8 22 2 16 2"
            }],
            ["line", {
                x1: "16",
                x2: "22",
                y1: "8",
                y2: "2"
            }],
            ["path", {
                d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
            }]
        ]],
        Ii = ["svg", h, [
            ["path", {
                d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
            }]
        ]],
        Xi = ["svg", h, [
            ["rect", {
                width: "18",
                height: "18",
                x: "3",
                y: "3",
                rx: "2"
            }],
            ["path", {
                d: "M7 7h10"
            }],
            ["path", {
                d: "M10 7v10"
            }],
            ["path", {
                d: "M16 17a2 2 0 0 1-2-2V7"
            }]
        ]],
        Ni = ["svg", h, [
            ["line", {
                x1: "9",
                x2: "9",
                y1: "4",
                y2: "20"
            }],
            ["path", {
                d: "M4 7c0-1.7 1.3-3 3-3h13"
            }],
            ["path", {
                d: "M18 20c-1.7 0-3-1.3-3-3V4"
            }]
        ]],
        Ki = ["svg", h, [
            ["path", {
                d: "M21 9V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h4"
            }],
            ["rect", {
                width: "10",
                height: "7",
                x: "12",
                y: "13",
                rx: "2"
            }]
        ]],
        Ji = ["svg", h, [
            ["path", {
                d: "M8 4.5v5H3m-1-6 6 6m13 0v-3c0-1.16-.84-2-2-2h-7m-9 9v2c0 1.05.95 2 2 2h3"
            }],
            ["rect", {
                width: "10",
                height: "7",
                x: "12",
                y: "13.5",
                ry: "2"
            }]
        ]],
        ji = ["svg", h, [
            ["path", {
                d: "M21.21 15.89A10 10 0 1 1 8 2.83"
            }],
            ["path", {
                d: "M22 12A10 10 0 0 0 12 2v10z"
            }]
        ]],
        Qi = ["svg", h, [
            ["path", {
                d: "M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2h0V5z"
            }],
            ["path", {
                d: "M2 9v1c0 1.1.9 2 2 2h1"
            }],
            ["path", {
                d: "M16 11h0"
            }]
        ]],
        Yi = ["svg", h, [
            ["rect", {
                width: "18",
                height: "18",
                x: "3",
                y: "3",
                rx: "2"
            }],
            ["path", {
                d: "M12 12H9.5a2.5 2.5 0 0 1 0-5H17"
            }],
            ["path", {
                d: "M12 7v10"
            }],
            ["path", {
                d: "M16 7v10"
            }]
        ]],
        _i = ["svg", h, [
            ["path", {
                d: "M13 4v16"
            }],
            ["path", {
                d: "M17 4v16"
            }],
            ["path", {
                d: "M19 4H9.5a4.5 4.5 0 0 0 0 9H13"
            }]
        ]],
        ap = ["svg", h, [
            ["path", {
                d: "m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"
            }],
            ["path", {
                d: "m8.5 8.5 7 7"
            }]
        ]],
        hp = ["svg", h, [
            ["line", {
                x1: "2",
                x2: "22",
                y1: "2",
                y2: "22"
            }],
            ["line", {
                x1: "12",
                x2: "12",
                y1: "17",
                y2: "22"
            }],
            ["path", {
                d: "M9 9v1.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V17h12"
            }],
            ["path", {
                d: "M15 9.34V6h1a2 2 0 0 0 0-4H7.89"
            }]
        ]],
        tp = ["svg", h, [
            ["line", {
                x1: "12",
                x2: "12",
                y1: "17",
                y2: "22"
            }],
            ["path", {
                d: "M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z"
            }]
        ]],
        dp = ["svg", h, [
            ["path", {
                d: "m2 22 1-1h3l9-9"
            }],
            ["path", {
                d: "M3 21v-3l9-9"
            }],
            ["path", {
                d: "m15 6 3.4-3.4a2.1 2.1 0 1 1 3 3L18 9l.4.4a2.1 2.1 0 1 1-3 3l-3.8-3.8a2.1 2.1 0 1 1 3-3l.4.4Z"
            }]
        ]],
        cp = ["svg", h, [
            ["path", {
                d: "M15 11h.01"
            }],
            ["path", {
                d: "M11 15h.01"
            }],
            ["path", {
                d: "M16 16h.01"
            }],
            ["path", {
                d: "m2 16 20 6-6-20A20 20 0 0 0 2 16"
            }],
            ["path", {
                d: "M5.71 17.11a17.04 17.04 0 0 1 11.4-11.4"
            }]
        ]],
        np = ["svg", h, [
            ["path", {
                d: "M2 22h20"
            }],
            ["path", {
                d: "M3.77 10.77 2 9l2-4.5 1.1.55c.55.28.9.84.9 1.45s.35 1.17.9 1.45L8 8.5l3-6 1.05.53a2 2 0 0 1 1.09 1.52l.72 5.4a2 2 0 0 0 1.09 1.52l4.4 2.2c.42.22.78.55 1.01.96l.6 1.03c.49.88-.06 1.98-1.06 2.1l-1.18.15c-.47.06-.95-.02-1.37-.24L4.29 11.15a2 2 0 0 1-.52-.38Z"
            }]
        ]],
        ip = ["svg", h, [
            ["path", {
                d: "M2 22h20"
            }],
            ["path", {
                d: "M6.36 17.4 4 17l-2-4 1.1-.55a2 2 0 0 1 1.8 0l.17.1a2 2 0 0 0 1.8 0L8 12 5 6l.9-.45a2 2 0 0 1 2.09.2l4.02 3a2 2 0 0 0 2.1.2l4.19-2.06a2.41 2.41 0 0 1 1.73-.17L21 7a1.4 1.4 0 0 1 .87 1.99l-.38.76c-.23.46-.6.84-1.07 1.08L7.58 17.2a2 2 0 0 1-1.22.18Z"
            }]
        ]],
        pp = ["svg", h, [
            ["path", {
                d: "M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"
            }]
        ]],
        ep = ["svg", h, [
            ["circle", {
                cx: "12",
                cy: "12",
                r: "10"
            }],
            ["polygon", {
                points: "10 8 16 12 10 16 10 8"
            }]
        ]],
        Mp = ["svg", h, [
            ["rect", {
                width: "18",
                height: "18",
                x: "3",
                y: "3",
                rx: "2"
            }],
            ["path", {
                d: "m9 8 6 4-6 4Z"
            }]
        ]],
        lp = ["svg", h, [
            ["polygon", {
                points: "5 3 19 12 5 21 5 3"
            }]
        ]],
        vp = ["svg", h, [
            ["path", {
                d: "M9 2v6"
            }],
            ["path", {
                d: "M15 2v6"
            }],
            ["path", {
                d: "M12 17v5"
            }],
            ["path", {
                d: "M5 8h14"
            }],
            ["path", {
                d: "M6 11V8h12v3a6 6 0 1 1-12 0v0Z"
            }]
        ]],
        op = ["svg", h, [
            ["path", {
                d: "m13 2-2 2.5h3L12 7"
            }],
            ["path", {
                d: "M10 14v-3"
            }],
            ["path", {
                d: "M14 14v-3"
            }],
            ["path", {
                d: "M11 19c-1.7 0-3-1.3-3-3v-2h8v2c0 1.7-1.3 3-3 3Z"
            }],
            ["path", {
                d: "M12 22v-3"
            }]
        ]],
        sp = ["svg", h, [
            ["path", {
                d: "M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z"
            }],
            ["path", {
                d: "m2 22 3-3"
            }],
            ["path", {
                d: "M7.5 13.5 10 11"
            }],
            ["path", {
                d: "M10.5 16.5 13 14"
            }],
            ["path", {
                d: "m18 3-4 4h6l-4 4"
            }]
        ]],
        gp = ["svg", h, [
            ["path", {
                d: "M12 22v-5"
            }],
            ["path", {
                d: "M9 8V2"
            }],
            ["path", {
                d: "M15 8V2"
            }],
            ["path", {
                d: "M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z"
            }]
        ]],
        rp = ["svg", h, [
            ["circle", {
                cx: "12",
                cy: "12",
                r: "10"
            }],
            ["path", {
                d: "M8 12h8"
            }],
            ["path", {
                d: "M12 8v8"
            }]
        ]],
        yp = ["svg", h, [
            ["rect", {
                width: "18",
                height: "18",
                x: "3",
                y: "3",
                rx: "2"
            }],
            ["path", {
                d: "M8 12h8"
            }],
            ["path", {
                d: "M12 8v8"
            }]
        ]],
        $p = ["svg", h, [
            ["path", {
                d: "M5 12h14"
            }],
            ["path", {
                d: "M12 5v14"
            }]
        ]],
        mp = ["svg", h, [
            ["path", {
                d: "M3 2v1c0 1 2 1 2 2S3 6 3 7s2 1 2 2-2 1-2 2 2 1 2 2"
            }],
            ["path", {
                d: "M18 6h.01"
            }],
            ["path", {
                d: "M6 18h.01"
            }],
            ["path", {
                d: "M20.83 8.83a4 4 0 0 0-5.66-5.66l-12 12a4 4 0 1 0 5.66 5.66Z"
            }],
            ["path", {
                d: "M18 11.66V22a4 4 0 0 0 4-4V6"
            }]
        ]],
        Hp = ["svg", h, [
            ["path", {
                d: "M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z"
            }],
            ["polyline", {
                points: "8 10 12 14 16 10"
            }]
        ]],
        Cp = ["svg", h, [
            ["circle", {
                cx: "12",
                cy: "11",
                r: "1"
            }],
            ["path", {
                d: "M11 17a1 1 0 0 1 2 0c0 .5-.34 3-.5 4.5a.5.5 0 0 1-1 0c-.16-1.5-.5-4-.5-4.5Z"
            }],
            ["path", {
                d: "M8 14a5 5 0 1 1 8 0"
            }],
            ["path", {
                d: "M17 18.5a9 9 0 1 0-10 0"
            }]
        ]],
        up = ["svg", h, [
            ["path", {
                d: "M22 14a8 8 0 0 1-8 8"
            }],
            ["path", {
                d: "M18 11v-1a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0"
            }],
            ["path", {
                d: "M14 10V9a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v1"
            }],
            ["path", {
                d: "M10 9.5V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v10"
            }],
            ["path", {
                d: "M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"
            }]
        ]],
        Vp = ["svg", h, [
            ["path", {
                d: "M18 8a2 2 0 0 0 0-4 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0 0 4"
            }],
            ["path", {
                d: "M10 22 9 8"
            }],
            ["path", {
                d: "m14 22 1-14"
            }],
            ["path", {
                d: "M20 8c.5 0 .9.4.8 1l-2.6 12c-.1.5-.7 1-1.2 1H7c-.6 0-1.1-.4-1.2-1L3.2 9c-.1-.6.3-1 .8-1Z"
            }]
        ]],
        wp = ["svg", h, [
            ["path", {
                d: "M18.6 14.4c.8-.8.8-2 0-2.8l-8.1-8.1a4.95 4.95 0 1 0-7.1 7.1l8.1 8.1c.9.7 2.1.7 2.9-.1Z"
            }],
            ["path", {
                d: "m22 22-5.5-5.5"
            }]
        ]],
        xp = ["svg", h, [
            ["path", {
                d: "M18 7c0-5.333-8-5.333-8 0"
            }],
            ["path", {
                d: "M10 7v14"
            }],
            ["path", {
                d: "M6 21h12"
            }],
            ["path", {
                d: "M6 13h10"
            }]
        ]],
        Lp = ["svg", h, [
            ["path", {
                d: "M18.36 6.64A9 9 0 0 1 20.77 15"
            }],
            ["path", {
                d: "M6.16 6.16a9 9 0 1 0 12.68 12.68"
            }],
            ["path", {
                d: "M12 2v4"
            }],
            ["path", {
                d: "m2 2 20 20"
            }]
        ]],
        Sp = ["svg", h, [
            ["path", {
                d: "M18.36 6.64a9 9 0 1 1-12.73 0"
            }],
            ["line", {
                x1: "12",
                x2: "12",
                y1: "2",
                y2: "12"
            }]
        ]],
        Ap = ["svg", h, [
            ["path", {
                d: "M2 3h20"
            }],
            ["path", {
                d: "M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3"
            }],
            ["path", {
                d: "m7 21 5-5 5 5"
            }]
        ]],
        fp = ["svg", h, [
            ["polyline", {
                points: "6 9 6 2 18 2 18 9"
            }],
            ["path", {
                d: "M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"
            }],
            ["rect", {
                width: "12",
                height: "8",
                x: "6",
                y: "14"
            }]
        ]],
        kp = ["svg", h, [
            ["path", {
                d: "M5 7 3 5"
            }],
            ["path", {
                d: "M9 6V3"
            }],
            ["path", {
                d: "m13 7 2-2"
            }],
            ["circle", {
                cx: "9",
                cy: "13",
                r: "3"
            }],
            ["path", {
                d: "M11.83 12H20a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h2.17"
            }],
            ["path", {
                d: "M16 16h2"
            }]
        ]],
        Fp = ["svg", h, [
            ["path", {
                d: "M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.61a2.404 2.404 0 0 1-1.705.707 2.402 2.402 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 0 0-.289-.877l-1.568-1.568A2.402 2.402 0 0 1 1.998 12c0-.617.236-1.234.706-1.704L4.23 8.77c.24-.24.581-.353.917-.303.515.077.877.528 1.073 1.01a2.5 2.5 0 1 0 3.259-3.259c-.482-.196-.933-.558-1.01-1.073-.05-.336.062-.676.303-.917l1.525-1.525A2.402 2.402 0 0 1 12 1.998c.617 0 1.234.236 1.704.706l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.504 1.02-.968a2.5 2.5 0 1 1 3.237 3.237c-.464.18-.894.527-.967 1.02Z"
            }]
        ]],
        Zp = ["svg", h, [
            ["path", {
                d: "M2.5 16.88a1 1 0 0 1-.32-1.43l9-13.02a1 1 0 0 1 1.64 0l9 13.01a1 1 0 0 1-.32 1.44l-8.51 4.86a2 2 0 0 1-1.98 0Z"
            }],
            ["path", {
                d: "M12 2v20"
            }]
        ]],
        Pp = ["svg", h, [
            ["rect", {
                width: "5",
                height: "5",
                x: "3",
                y: "3",
                rx: "1"
            }],
            ["rect", {
                width: "5",
                height: "5",
                x: "16",
                y: "3",
                rx: "1"
            }],
            ["rect", {
                width: "5",
                height: "5",
                x: "3",
                y: "16",
                rx: "1"
            }],
            ["path", {
                d: "M21 16h-3a2 2 0 0 0-2 2v3"
            }],
            ["path", {
                d: "M21 21v.01"
            }],
            ["path", {
                d: "M12 7v3a2 2 0 0 1-2 2H7"
            }],
            ["path", {
                d: "M3 12h.01"
            }],
            ["path", {
                d: "M12 3h.01"
            }],
            ["path", {
                d: "M12 16v.01"
            }],
            ["path", {
                d: "M16 12h1"
            }],
            ["path", {
                d: "M21 12v.01"
            }],
            ["path", {
                d: "M12 21v-1"
            }]
        ]],
        Bp = ["svg", h, [
            ["path", {
                d: "M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"
            }],
            ["path", {
                d: "M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"
            }]
        ]],
        Dp = ["svg", h, [
            ["path", {
                d: "M20 8.54V4a2 2 0 1 0-4 0v3"
            }],
            ["path", {
                d: "M18 21h-8a4 4 0 0 1-4-4 7 7 0 0 1 7-7h.2L9.6 6.4a1.93 1.93 0 1 1 2.8-2.8L15.8 7h.2c3.3 0 6 2.7 6 6v1a2 2 0 0 1-2 2h-1c-1.7 0-3 1.3-3 3"
            }],
            ["path", {
                d: "M7.61 12.53a3 3 0 1 0-1.6 4.3"
            }],
            ["path", {
                d: "M13 16a3 3 0 0 1 2.24 5"
            }],
            ["path", {
                d: "M18 12h.01"
            }]
        ]],
        Tp = ["svg", h, [
            ["path", {
                d: "M19.07 4.93A10 10 0 0 0 6.99 3.34"
            }],
            ["path", {
                d: "M4 6h.01"
            }],
            ["path", {
                d: "M2.29 9.62A10 10 0 1 0 21.31 8.35"
            }],
            ["path", {
                d: "M16.24 7.76A6 6 0 1 0 8.23 16.67"
            }],
            ["path", {
                d: "M12 18h.01"
            }],
            ["path", {
                d: "M17.99 11.66A6 6 0 0 1 15.77 16.67"
            }],
            ["circle", {
                cx: "12",
                cy: "12",
                r: "2"
            }],
            ["path", {
                d: "m13.41 10.59 5.66-5.66"
            }]
        ]],
        zp = ["svg", h, [
            ["path", {
                d: "M12 12h0"
            }],
            ["path", {
                d: "M7.5 4.2c-.3-.5-.9-.7-1.3-.4C3.9 5.5 2.3 8.1 2 11c-.1.5.4 1 1 1h5c0-1.5.8-2.8 2-3.4-1.1-1.9-2-3.5-2.5-4.4z"
            }],
            ["path", {
                d: "M21 12c.6 0 1-.4 1-1-.3-2.9-1.8-5.5-4.1-7.1-.4-.3-1.1-.2-1.3.3-.6.9-1.5 2.5-2.6 4.3 1.2.7 2 2 2 3.5h5z"
            }],
            ["path", {
                d: "M7.5 19.8c-.3.5-.1 1.1.4 1.3 2.6 1.2 5.6 1.2 8.2 0 .5-.2.7-.8.4-1.3-.5-.9-1.4-2.5-2.5-4.3-1.2.7-2.8.7-4 0-1.1 1.8-2 3.4-2.5 4.3z"
            }]
        ]],
        Rp = ["svg", h, [
            ["path", {
                d: "M5 16v2"
            }],
            ["path", {
                d: "M19 16v2"
            }],
            ["rect", {
                width: "20",
                height: "8",
                x: "2",
                y: "8",
                rx: "2"
            }],
            ["path", {
                d: "M18 12h0"
            }]
        ]],
        bp = ["svg", h, [
            ["path", {
                d: "M4.9 16.1C1 12.2 1 5.8 4.9 1.9"
            }],
            ["path", {
                d: "M7.8 4.7a6.14 6.14 0 0 0-.8 7.5"
            }],
            ["circle", {
                cx: "12",
                cy: "9",
                r: "2"
            }],
            ["path", {
                d: "M16.2 4.8c2 2 2.26 5.11.8 7.47"
            }],
            ["path", {
                d: "M19.1 1.9a9.96 9.96 0 0 1 0 14.1"
            }],
            ["path", {
                d: "M9.5 18h5"
            }],
            ["path", {
                d: "m8 22 4-11 4 11"
            }]
        ]],
        Up = ["svg", h, [
            ["path", {
                d: "M4.9 19.1C1 15.2 1 8.8 4.9 4.9"
            }],
            ["path", {
                d: "M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5"
            }],
            ["circle", {
                cx: "12",
                cy: "12",
                r: "2"
            }],
            ["path", {
                d: "M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5"
            }],
            ["path", {
                d: "M19.1 4.9C23 8.8 23 15.1 19.1 19"
            }]
        ]],
        Op = ["svg", h, [
            ["path", {
                d: "M20.34 17.52a10 10 0 1 0-2.82 2.82"
            }],
            ["circle", {
                cx: "19",
                cy: "19",
                r: "2"
            }],
            ["path", {
                d: "m13.41 13.41 4.18 4.18"
            }],
            ["circle", {
                cx: "12",
                cy: "12",
                r: "2"
            }]
        ]],
        qp = ["svg", h, [
            ["path", {
                d: "M5 15h14"
            }],
            ["path", {
                d: "M5 9h14"
            }],
            ["path", {
                d: "m14 20-5-5 6-6-5-5"
            }]
        ]],
        Gp = ["svg", h, [
            ["path", {
                d: "M22 17a10 10 0 0 0-20 0"
            }],
            ["path", {
                d: "M6 17a6 6 0 0 1 12 0"
            }],
            ["path", {
                d: "M10 17a2 2 0 0 1 4 0"
            }]
        ]],
        Wp = ["svg", h, [
            ["path", {
                d: "M17 5c0-1.7-1.3-3-3-3s-3 1.3-3 3c0 .8.3 1.5.8 2H11c-3.9 0-7 3.1-7 7v0c0 2.2 1.8 4 4 4"
            }],
            ["path", {
                d: "M16.8 3.9c.3-.3.6-.5 1-.7 1.5-.6 3.3.1 3.9 1.6.6 1.5-.1 3.3-1.6 3.9l1.6 2.8c.2.3.2.7.2 1-.2.8-.9 1.2-1.7 1.1 0 0-1.6-.3-2.7-.6H17c-1.7 0-3 1.3-3 3"
            }],
            ["path", {
                d: "M13.2 18a3 3 0 0 0-2.2-5"
            }],
            ["path", {
                d: "M13 22H4a2 2 0 0 1 0-4h12"
            }],
            ["path", {
                d: "M16 9h.01"
            }]
        ]],
        Ep = ["svg", h, [
            ["rect", {
                width: "12",
                height: "20",
                x: "6",
                y: "2",
                rx: "2"
            }],
            ["rect", {
                width: "20",
                height: "12",
                x: "2",
                y: "6",
                rx: "2"
            }]
        ]],
        Ip = ["svg", h, [
            ["path", {
                d: "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1-2-1Z"
            }],
            ["path", {
                d: "M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"
            }],
            ["path", {
                d: "M12 17V7"
            }]
        ]],
        Xp = ["svg", h, [
            ["rect", {
                width: "20",
                height: "12",
                x: "2",
                y: "6",
                rx: "2"
            }]
        ]],
        Np = ["svg", h, [
            ["rect", {
                width: "12",
                height: "20",
                x: "6",
                y: "2",
                rx: "2"
            }]
        ]],
        Kp = ["svg", h, [
            ["path", {
                d: "M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5"
            }],
            ["path", {
                d: "M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12"
            }],
            ["path", {
                d: "m14 16-3 3 3 3"
            }],
            ["path", {
                d: "M8.293 13.596 7.196 9.5 3.1 10.598"
            }],
            ["path", {
                d: "m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843"
            }],
            ["path", {
                d: "m13.378 9.633 4.096 1.098 1.097-4.096"
            }]
        ]],
        Jp = ["svg", h, [
            ["path", {
                d: "m15 14 5-5-5-5"
            }],
            ["path", {
                d: "M20 9H9.5A5.5 5.5 0 0 0 4 14.5v0A5.5 5.5 0 0 0 9.5 20H13"
            }]
        ]],
        jp = ["svg", h, [
            ["circle", {
                cx: "12",
                cy: "17",
                r: "1"
            }],
            ["path", {
                d: "M21 7v6h-6"
            }],
            ["path", {
                d: "M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7"
            }]
        ]],
        Qp = ["svg", h, [
            ["path", {
                d: "M21 7v6h-6"
            }],
            ["path", {
                d: "M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7"
            }]
        ]],
        Yp = ["svg", h, [
            ["path", {
                d: "M3 2v6h6"
            }],
            ["path", {
                d: "M21 12A9 9 0 0 0 6 5.3L3 8"
            }],
            ["path", {
                d: "M21 22v-6h-6"
            }],
            ["path", {
                d: "M3 12a9 9 0 0 0 15 6.7l3-2.7"
            }],
            ["circle", {
                cx: "12",
                cy: "12",
                r: "1"
            }]
        ]],
        _p = ["svg", h, [
            ["path", {
                d: "M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"
            }],
            ["path", {
                d: "M3 3v5h5"
            }],
            ["path", {
                d: "M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"
            }],
            ["path", {
                d: "M16 16h5v5"
            }]
        ]],
        ae = ["svg", h, [
            ["path", {
                d: "M21 8L18.74 5.74A9.75 9.75 0 0 0 12 3C11 3 10.03 3.16 9.13 3.47"
            }],
            ["path", {
                d: "M8 16H3v5"
            }],
            ["path", {
                d: "M3 12C3 9.51 4 7.26 5.64 5.64"
            }],
            ["path", {
                d: "m3 16 2.26 2.26A9.75 9.75 0 0 0 12 21c2.49 0 4.74-1 6.36-2.64"
            }],
            ["path", {
                d: "M21 12c0 1-.16 1.97-.47 2.87"
            }],
            ["path", {
                d: "M21 3v5h-5"
            }],
            ["path", {
                d: "M22 22 2 2"
            }]
        ]],
        he = ["svg", h, [
            ["path", {
                d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"
            }],
            ["path", {
                d: "M21 3v5h-5"
            }],
            ["path", {
                d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"
            }],
            ["path", {
                d: "M8 16H3v5"
            }]
        ]],
        te = ["svg", h, [
            ["path", {
                d: "M5 6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6Z"
            }],
            ["path", {
                d: "M5 10h14"
            }],
            ["path", {
                d: "M15 7v6"
            }]
        ]],
        de = ["svg", h, [
            ["path", {
                d: "M17 3v10"
            }],
            ["path", {
                d: "m12.67 5.5 8.66 5"
            }],
            ["path", {
                d: "m12.67 10.5 8.66-5"
            }],
            ["path", {
                d: "M9 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2z"
            }]
        ]],
        ce = ["svg", h, [
            ["path", {
                d: "M4 7V4h16v3"
            }],
            ["path", {
                d: "M5 20h6"
            }],
            ["path", {
                d: "M13 4 8 20"
            }],
            ["path", {
                d: "m15 15 5 5"
            }],
            ["path", {
                d: "m20 15-5 5"
            }]
        ]],
        ne = ["svg", h, [
            ["path", {
                d: "m17 2 4 4-4 4"
            }],
            ["path", {
                d: "M3 11v-1a4 4 0 0 1 4-4h14"
            }],
            ["path", {
                d: "m7 22-4-4 4-4"
            }],
            ["path", {
                d: "M21 13v1a4 4 0 0 1-4 4H3"
            }],
            ["path", {
                d: "M11 10h1v4"
            }]
        ]],
        ie = ["svg", h, [
            ["path", {
                d: "m2 9 3-3 3 3"
            }],
            ["path", {
                d: "M13 18H7a2 2 0 0 1-2-2V6"
            }],
            ["path", {
                d: "m22 15-3 3-3-3"
            }],
            ["path", {
                d: "M11 6h6a2 2 0 0 1 2 2v10"
            }]
        ]],
        pe = ["svg", h, [
            ["path", {
                d: "m17 2 4 4-4 4"
            }],
            ["path", {
                d: "M3 11v-1a4 4 0 0 1 4-4h14"
            }],
            ["path", {
                d: "m7 22-4-4 4-4"
            }],
            ["path", {
                d: "M21 13v1a4 4 0 0 1-4 4H3"
            }]
        ]],
        ee = ["svg", h, [
            ["path", {
                d: "M14 4c0-1.1.9-2 2-2"
            }],
            ["path", {
                d: "M20 2c1.1 0 2 .9 2 2"
            }],
            ["path", {
                d: "M22 8c0 1.1-.9 2-2 2"
            }],
            ["path", {
                d: "M16 10c-1.1 0-2-.9-2-2"
            }],
            ["path", {
                d: "m3 7 3 3 3-3"
            }],
            ["path", {
                d: "M6 10V5c0-1.7 1.3-3 3-3h1"
            }],
            ["rect", {
                width: "8",
                height: "8",
                x: "2",
                y: "14",
                rx: "2"
            }],
            ["path", {
                d: "M14 14c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2"
            }],
            ["path", {
                d: "M20 14c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2"
            }]
        ]],
        Me = ["svg", h, [
            ["path", {
                d: "M14 4c0-1.1.9-2 2-2"
            }],
            ["path", {
                d: "M20 2c1.1 0 2 .9 2 2"
            }],
            ["path", {
                d: "M22 8c0 1.1-.9 2-2 2"
            }],
            ["path", {
                d: "M16 10c-1.1 0-2-.9-2-2"
            }],
            ["path", {
                d: "m3 7 3 3 3-3"
            }],
            ["path", {
                d: "M6 10V5c0-1.7 1.3-3 3-3h1"
            }],
            ["rect", {
                width: "8",
                height: "8",
                x: "2",
                y: "14",
                rx: "2"
            }]
        ]],
        le = ["svg", h, [
            ["polyline", {
                points: "7 17 2 12 7 7"
            }],
            ["polyline", {
                points: "12 17 7 12 12 7"
            }],
            ["path", {
                d: "M22 18v-2a4 4 0 0 0-4-4H7"
            }]
        ]],
        ve = ["svg", h, [
            ["polyline", {
                points: "9 17 4 12 9 7"
            }],
            ["path", {
                d: "M20 18v-2a4 4 0 0 0-4-4H4"
            }]
        ]],
        oe = ["svg", h, [
            ["polygon", {
                points: "11 19 2 12 11 5 11 19"
            }],
            ["polygon", {
                points: "22 19 13 12 22 5 22 19"
            }]
        ]],
        se = ["svg", h, [
            ["path", {
                d: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"
            }],
            ["path", {
                d: "m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"
            }],
            ["path", {
                d: "M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"
            }],
            ["path", {
                d: "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"
            }]
        ]],
        ge = ["svg", h, [
            ["polyline", {
                points: "3.5 2 6.5 12.5 18 12.5"
            }],
            ["line", {
                x1: "9.5",
                x2: "5.5",
                y1: "12.5",
                y2: "20"
            }],
            ["line", {
                x1: "15",
                x2: "18.5",
                y1: "12.5",
                y2: "20"
            }],
            ["path", {
                d: "M2.75 18a13 13 0 0 0 18.5 0"
            }]
        ]],
        re = ["svg", h, [
            ["path", {
                d: "M6 19V5"
            }],
            ["path", {
                d: "M10 19V6.8"
            }],
            ["path", {
                d: "M14 19v-7.8"
            }],
            ["path", {
                d: "M18 5v4"
            }],
            ["path", {
                d: "M18 19v-6"
            }],
            ["path", {
                d: "M22 19V9"
            }],
            ["path", {
                d: "M2 19V9a4 4 0 0 1 4-4c2 0 4 1.33 6 4s4 4 6 4a4 4 0 1 0-3-6.65"
            }]
        ]],
        ye = ["svg", h, [
            ["path", {
                d: "M16.466 7.5C15.643 4.237 13.952 2 12 2 9.239 2 7 6.477 7 12s2.239 10 5 10c.342 0 .677-.069 1-.2"
            }],
            ["path", {
                d: "m15.194 13.707 3.814 1.86-1.86 3.814"
            }],
            ["path", {
                d: "M19 15.57c-1.804.885-4.274 1.43-7 1.43-5.523 0-10-2.239-10-5s4.477-5 10-5c4.838 0 8.873 1.718 9.8 4"
            }]
        ]],
        $e = ["svg", h, [
            ["path", {
                d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"
            }],
            ["path", {
                d: "M3 3v5h5"
            }]
        ]],
        me = ["svg", h, [
            ["path", {
                d: "M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"
            }],
            ["path", {
                d: "M21 3v5h-5"
            }]
        ]],
        He = ["svg", h, [
            ["rect", {
                width: "20",
                height: "8",
                x: "2",
                y: "14",
                rx: "2"
            }],
            ["path", {
                d: "M6.01 18H6"
            }],
            ["path", {
                d: "M10.01 18H10"
            }],
            ["path", {
                d: "M15 10v4"
            }],
            ["path", {
                d: "M17.84 7.17a4 4 0 0 0-5.66 0"
            }],
            ["path", {
                d: "M20.66 4.34a8 8 0 0 0-11.31 0"
            }]
        ]],
        Ce = ["svg", h, [
            ["rect", {
                width: "18",
                height: "18",
                x: "3",
                y: "3",
                rx: "2",
                ry: "2"
            }],
            ["line", {
                x1: "3",
                x2: "21",
                y1: "12",
                y2: "12"
            }]
        ]],
        ue = ["svg", h, [
            ["path", {
                d: "M4 11a9 9 0 0 1 9 9"
            }],
            ["path", {
                d: "M4 4a16 16 0 0 1 16 16"
            }],
            ["circle", {
                cx: "5",
                cy: "19",
                r: "1"
            }]
        ]],
        Ve = ["svg", h, [
            ["path", {
                d: "M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"
            }],
            ["path", {
                d: "m14.5 12.5 2-2"
            }],
            ["path", {
                d: "m11.5 9.5 2-2"
            }],
            ["path", {
                d: "m8.5 6.5 2-2"
            }],
            ["path", {
                d: "m17.5 15.5 2-2"
            }]
        ]],
        we = ["svg", h, [
            ["path", {
                d: "M6 11h8a4 4 0 0 0 0-8H9v18"
            }],
            ["path", {
                d: "M6 15h8"
            }]
        ]],
        xe = ["svg", h, [
            ["path", {
                d: "M22 18H2a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4Z"
            }],
            ["path", {
                d: "M21 14 10 2 3 14h18Z"
            }],
            ["path", {
                d: "M10 2v16"
            }]
        ]],
        Le = ["svg", h, [
            ["path", {
                d: "M7 21h10"
            }],
            ["path", {
                d: "M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z"
            }],
            ["path", {
                d: "M11.38 12a2.4 2.4 0 0 1-.4-4.77 2.4 2.4 0 0 1 3.2-2.77 2.4 2.4 0 0 1 3.47-.63 2.4 2.4 0 0 1 3.37 3.37 2.4 2.4 0 0 1-1.1 3.7 2.51 2.51 0 0 1 .03 1.1"
            }],
            ["path", {
                d: "m13 12 4-4"
            }],
            ["path", {
                d: "M10.9 7.25A3.99 3.99 0 0 0 4 10c0 .73.2 1.41.54 2"
            }]
        ]],
        Se = ["svg", h, [
            ["path", {
                d: "M3 11v3a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-3"
            }],
            ["path", {
                d: "M12 19H4a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-3.83"
            }],
            ["path", {
                d: "m3 11 7.77-6.04a2 2 0 0 1 2.46 0L21 11H3Z"
            }],
            ["path", {
                d: "M12.97 19.77 7 15h12.5l-3.75 4.5a2 2 0 0 1-2.78.27Z"
            }]
        ]],
        Ae = ["svg", h, [
            ["path", {
                d: "M4 10a7.31 7.31 0 0 0 10 10Z"
            }],
            ["path", {
                d: "m9 15 3-3"
            }],
            ["path", {
                d: "M17 13a6 6 0 0 0-6-6"
            }],
            ["path", {
                d: "M21 13A10 10 0 0 0 11 3"
            }]
        ]],
        fe = ["svg", h, [
            ["path", {
                d: "M13 7 9 3 5 7l4 4"
            }],
            ["path", {
                d: "m17 11 4 4-4 4-4-4"
            }],
            ["path", {
                d: "m8 12 4 4 6-6-4-4Z"
            }],
            ["path", {
                d: "m16 8 3-3"
            }],
            ["path", {
                d: "M9 21a6 6 0 0 0-6-6"
            }]
        ]],
        ke = ["svg", h, [
            ["path", {
                d: "M6 4a2 2 0 0 1 2-2h10l4 4v10.2a2 2 0 0 1-2 1.8H8a2 2 0 0 1-2-2Z"
            }],
            ["path", {
                d: "M10 2v4h6"
            }],
            ["path", {
                d: "M18 18v-7h-8v7"
            }],
            ["path", {
                d: "M18 22H4a2 2 0 0 1-2-2V6"
            }]
        ]],
        Fe = ["svg", h, [
            ["path", {
                d: "M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"
            }],
            ["polyline", {
                points: "17 21 17 13 7 13 7 21"
            }],
            ["polyline", {
                points: "7 3 7 8 15 8"
            }]
        ]],
        Ze = ["svg", h, [
            ["circle", {
                cx: "19",
                cy: "19",
                r: "2"
            }],
            ["circle", {
                cx: "5",
                cy: "5",
                r: "2"
            }],
            ["path", {
                d: "M5 7v12h12"
            }],
            ["path", {
                d: "m5 19 6-6"
            }]
        ]],
        Pe = ["svg", h, [
            ["path", {
                d: "m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"
            }],
            ["path", {
                d: "m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"
            }],
            ["path", {
                d: "M7 21h10"
            }],
            ["path", {
                d: "M12 3v18"
            }],
            ["path", {
                d: "M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"
            }]
        ]],
        Be = ["svg", h, [
            ["path", {
                d: "M21 3 9 15"
            }],
            ["path", {
                d: "M12 3H3v18h18v-9"
            }],
            ["path", {
                d: "M16 3h5v5"
            }],
            ["path", {
                d: "M14 15H9v-5"
            }]
        ]],
        De = ["svg", h, [
            ["path", {
                d: "M3 7V5a2 2 0 0 1 2-2h2"
            }],
            ["path", {
                d: "M17 3h2a2 2 0 0 1 2 2v2"
            }],
            ["path", {
                d: "M21 17v2a2 2 0 0 1-2 2h-2"
            }],
            ["path", {
                d: "M7 21H5a2 2 0 0 1-2-2v-2"
            }],
            ["path", {
                d: "M8 7v10"
            }],
            ["path", {
                d: "M12 7v10"
            }],
            ["path", {
                d: "M17 7v10"
            }]
        ]],
        Te = ["svg", h, [
            ["path", {
                d: "M3 7V5a2 2 0 0 1 2-2h2"
            }],
            ["path", {
                d: "M17 3h2a2 2 0 0 1 2 2v2"
            }],
            ["path", {
                d: "M21 17v2a2 2 0 0 1-2 2h-2"
            }],
            ["path", {
                d: "M7 21H5a2 2 0 0 1-2-2v-2"
            }],
            ["circle", {
                cx: "12",
                cy: "12",
                r: "1"
            }],
            ["path", {
                d: "M5 12s2.5-5 7-5 7 5 7 5-2.5 5-7 5-7-5-7-5"
            }]
        ]],
        ze = ["svg", h, [
            ["path", {
                d: "M3 7V5a2 2 0 0 1 2-2h2"
            }],
            ["path", {
                d: "M17 3h2a2 2 0 0 1 2 2v2"
            }],
            ["path", {
                d: "M21 17v2a2 2 0 0 1-2 2h-2"
            }],
            ["path", {
                d: "M7 21H5a2 2 0 0 1-2-2v-2"
            }],
            ["path", {
                d: "M8 14s1.5 2 4 2 4-2 4-2"
            }],
            ["path", {
                d: "M9 9h.01"
            }],
            ["path", {
                d: "M15 9h.01"
            }]
        ]],
        Re = ["svg", h, [
            ["path", {
                d: "M3 7V5a2 2 0 0 1 2-2h2"
            }],
            ["path", {
                d: "M17 3h2a2 2 0 0 1 2 2v2"
            }],
            ["path", {
                d: "M21 17v2a2 2 0 0 1-2 2h-2"
            }],
            ["path", {
                d: "M7 21H5a2 2 0 0 1-2-2v-2"
            }],
            ["path", {
                d: "M7 12h10"
            }]
        ]],
        be = ["svg", h, [
            ["path", {
                d: "M3 7V5a2 2 0 0 1 2-2h2"
            }],
            ["path", {
                d: "M17 3h2a2 2 0 0 1 2 2v2"
            }],
            ["path", {
                d: "M21 17v2a2 2 0 0 1-2 2h-2"
            }],
            ["path", {
                d: "M7 21H5a2 2 0 0 1-2-2v-2"
            }],
            ["circle", {
                cx: "12",
                cy: "12",
                r: "3"
            }],
            ["path", {
                d: "m16 16-1.9-1.9"
            }]
        ]],
        Ue = ["svg", h, [
            ["path", {
                d: "M3 7V5a2 2 0 0 1 2-2h2"
            }],
            ["path", {
                d: "M17 3h2a2 2 0 0 1 2 2v2"
            }],
            ["path", {
                d: "M21 17v2a2 2 0 0 1-2 2h-2"
            }],
            ["path", {
                d: "M7 21H5a2 2 0 0 1-2-2v-2"
            }],
            ["path", {
                d: "M7 8h8"
            }],
            ["path", {
                d: "M7 12h10"
            }],
            ["path", {
                d: "M7 16h6"
            }]
        ]],
        Oe = ["svg", h, [
            ["path", {
                d: "M3 7V5a2 2 0 0 1 2-2h2"
            }],
            ["path", {
                d: "M17 3h2a2 2 0 0 1 2 2v2"
            }],
            ["path", {
                d: "M21 17v2a2 2 0 0 1-2 2h-2"
            }],
            ["path", {
                d: "M7 21H5a2 2 0 0 1-2-2v-2"
            }]
        ]],
        qe = ["svg", h, [
            ["circle", {
                cx: "7.5",
                cy: "7.5",
                r: ".5"
            }],
            ["circle", {
                cx: "18.5",
                cy: "5.5",
                r: ".5"
            }],
            ["circle", {
                cx: "11.5",
                cy: "11.5",
                r: ".5"
            }],
            ["circle", {
                cx: "7.5",
                cy: "16.5",
                r: ".5"
            }],
            ["circle", {
                cx: "17.5",
                cy: "14.5",
                r: ".5"
            }],
            ["path", {
                d: "M3 3v18h18"
            }]
        ]],
        Ge = ["svg", h, [
            ["circle", {
                cx: "12",
                cy: "10",
                r: "1"
            }],
            ["path", {
                d: "M22 20V8h-4l-6-4-6 4H2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2Z"
            }],
            ["path", {
                d: "M6 17v.01"
            }],
            ["path", {
                d: "M6 13v.01"
            }],
            ["path", {
                d: "M18 17v.01"
            }],
            ["path", {
                d: "M18 13v.01"
            }],
            ["path", {
                d: "M14 22v-5a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v5"
            }]
        ]],
        We = ["svg", h, [
            ["path", {
                d: "m4 6 8-4 8 4"
            }],
            ["path", {
                d: "m18 10 4 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8l4-2"
            }],
            ["path", {
                d: "M14 22v-4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v4"
            }],
            ["path", {
                d: "M18 5v17"
            }],
            ["path", {
                d: "M6 5v17"
            }],
            ["circle", {
                cx: "12",
                cy: "9",
                r: "2"
            }]
        ]],
        Ee = ["svg", h, [
            ["path", {
                d: "M5.42 9.42 8 12"
            }],
            ["circle", {
                cx: "4",
                cy: "8",
                r: "2"
            }],
            ["path", {
                d: "m14 6-8.58 8.58"
            }],
            ["circle", {
                cx: "4",
                cy: "16",
                r: "2"
            }],
            ["path", {
                d: "M10.8 14.8 14 18"
            }],
            ["path", {
                d: "M16 12h-2"
            }],
            ["path", {
                d: "M22 12h-2"
            }]
        ]],
        Ie = ["svg", h, [
            ["path", {
                d: "M4 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2"
            }],
            ["path", {
                d: "M10 22H8"
            }],
            ["path", {
                d: "M16 22h-2"
            }],
            ["circle", {
                cx: "8",
                cy: "8",
                r: "2"
            }],
            ["path", {
                d: "M9.414 9.414 12 12"
            }],
            ["path", {
                d: "M14.8 14.8 18 18"
            }],
            ["circle", {
                cx: "8",
                cy: "16",
                r: "2"
            }],
            ["path", {
                d: "m18 6-8.586 8.586"
            }]
        ]],
        Xe = ["svg", h, [
            ["rect", {
                width: "20",
                height: "20",
                x: "2",
                y: "2",
                rx: "2"
            }],
            ["circle", {
                cx: "8",
                cy: "8",
                r: "2"
            }],
            ["path", {
                d: "M9.414 9.414 12 12"
            }],
            ["path", {
                d: "M14.8 14.8 18 18"
            }],
            ["circle", {
                cx: "8",
                cy: "16",
                r: "2"
            }],
            ["path", {
                d: "m18 6-8.586 8.586"
            }]
        ]],
        Ne = ["svg", h, [
            ["circle", {
                cx: "6",
                cy: "6",
                r: "3"
            }],
            ["path", {
                d: "M8.12 8.12 12 12"
            }],
            ["path", {
                d: "M20 4 8.12 15.88"
            }],
            ["circle", {
                cx: "6",
                cy: "18",
                r: "3"
            }],
            ["path", {
                d: "M14.8 14.8 20 20"
            }]
        ]],
        Ke = ["svg", h, [
            ["path", {
                d: "M13 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3"
            }],
            ["path", {
                d: "M8 21h8"
            }],
            ["path", {
                d: "M12 17v4"
            }],
            ["path", {
                d: "m22 3-5 5"
            }],
            ["path", {
                d: "m17 3 5 5"
            }]
        ]],
        Je = ["svg", h, [
            ["path", {
                d: "M13 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3"
            }],
            ["path", {
                d: "M8 21h8"
            }],
            ["path", {
                d: "M12 17v4"
            }],
            ["path", {
                d: "m17 8 5-5"
            }],
            ["path", {
                d: "M17 3h5v5"
            }]
        ]],
        je = ["svg", h, [
            ["path", {
                d: "M8 21h12a2 2 0 0 0 2-2v-2H10v2a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v3h4"
            }],
            ["path", {
                d: "M19 17V5a2 2 0 0 0-2-2H4"
            }],
            ["path", {
                d: "M15 8h-5"
            }],
            ["path", {
                d: "M15 12h-5"
            }]
        ]],
        Qe = ["svg", h, [
            ["path", {
                d: "M8 21h12a2 2 0 0 0 2-2v-2H10v2a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v3h4"
            }],
            ["path", {
                d: "M19 17V5a2 2 0 0 0-2-2H4"
            }]
        ]],
        Ye = ["svg", h, [
            ["path", {
                d: "m8 11 2 2 4-4"
            }],
            ["circle", {
                cx: "11",
                cy: "11",
                r: "8"
            }],
            ["path", {
                d: "m21 21-4.3-4.3"
            }]
        ]],
        _e = ["svg", h, [
            ["path", {
                d: "m9 9-2 2 2 2"
            }],
            ["path", {
                d: "m13 13 2-2-2-2"
            }],
            ["circle", {
                cx: "11",
                cy: "11",
                r: "8"
            }],
            ["path", {
                d: "m21 21-4.3-4.3"
            }]
        ]],
        aM = ["svg", h, [
            ["path", {
                d: "m13.5 8.5-5 5"
            }],
            ["circle", {
                cx: "11",
                cy: "11",
                r: "8"
            }],
            ["path", {
                d: "m21 21-4.3-4.3"
            }]
        ]],
        hM = ["svg", h, [
            ["path", {
                d: "m13.5 8.5-5 5"
            }],
            ["path", {
                d: "m8.5 8.5 5 5"
            }],
            ["circle", {
                cx: "11",
                cy: "11",
                r: "8"
            }],
            ["path", {
                d: "m21 21-4.3-4.3"
            }]
        ]],
        tM = ["svg", h, [
            ["circle", {
                cx: "11",
                cy: "11",
                r: "8"
            }],
            ["path", {
                d: "m21 21-4.3-4.3"
            }]
        ]],
        dM = ["svg", h, [
            ["path", {
                d: "m3 3 3 9-3 9 19-9Z"
            }],
            ["path", {
                d: "M6 12h16"
            }]
        ]],
        cM = ["svg", h, [
            ["rect", {
                x: "14",
                y: "14",
                width: "8",
                height: "8",
                rx: "2"
            }],
            ["rect", {
                x: "2",
                y: "2",
                width: "8",
                height: "8",
                rx: "2"
            }],
            ["path", {
                d: "M7 14v1a2 2 0 0 0 2 2h1"
            }],
            ["path", {
                d: "M14 7h1a2 2 0 0 1 2 2v1"
            }]
        ]],
        nM = ["svg", h, [
            ["path", {
                d: "m22 2-7 20-4-9-9-4Z"
            }],
            ["path", {
                d: "M22 2 11 13"
            }]
        ]],
        iM = ["svg", h, [
            ["line", {
                x1: "3",
                x2: "21",
                y1: "12",
                y2: "12"
            }],
            ["polyline", {
                points: "8 8 12 4 16 8"
            }],
            ["polyline", {
                points: "16 16 12 20 8 16"
            }]
        ]],
        pM = ["svg", h, [
            ["line", {
                x1: "12",
                x2: "12",
                y1: "3",
                y2: "21"
            }],
            ["polyline", {
                points: "8 8 4 12 8 16"
            }],
            ["polyline", {
                points: "16 16 20 12 16 8"
            }]
        ]],
        eM = ["svg", h, [
            ["circle", {
                cx: "12",
                cy: "12",
                r: "3"
            }],
            ["path", {
                d: "M4.5 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-.5"
            }],
            ["path", {
                d: "M4.5 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-.5"
            }],
            ["path", {
                d: "M6 6h.01"
            }],
            ["path", {
                d: "M6 18h.01"
            }],
            ["path", {
                d: "m15.7 13.4-.9-.3"
            }],
            ["path", {
                d: "m9.2 10.9-.9-.3"
            }],
            ["path", {
                d: "m10.6 15.7.3-.9"
            }],
            ["path", {
                d: "m13.6 15.7-.4-1"
            }],
            ["path", {
                d: "m10.8 9.3-.4-1"
            }],
            ["path", {
                d: "m8.3 13.6 1-.4"
            }],
            ["path", {
                d: "m14.7 10.8 1-.4"
            }],
            ["path", {
                d: "m13.4 8.3-.3.9"
            }]
        ]],
        MM = ["svg", h, [
            ["path", {
                d: "M6 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2"
            }],
            ["path", {
                d: "M6 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2"
            }],
            ["path", {
                d: "M6 6h.01"
            }],
            ["path", {
                d: "M6 18h.01"
            }],
            ["path", {
                d: "m13 6-4 6h6l-4 6"
            }]
        ]],
        lM = ["svg", h, [
            ["path", {
                d: "M7 2h13a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-5"
            }],
            ["path", {
                d: "M10 10 2.5 2.5C2 2 2 2.5 2 5v3a2 2 0 0 0 2 2h6z"
            }],
            ["path", {
                d: "M22 17v-1a2 2 0 0 0-2-2h-1"
            }],
            ["path", {
                d: "M4 14a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16.5l1-.5.5.5-8-8H4z"
            }],
            ["path", {
                d: "M6 18h.01"
            }],
            ["path", {
                d: "m2 2 20 20"
            }]
        ]],
        vM = ["svg", h, [
            ["rect", {
                width: "20",
                height: "8",
                x: "2",
                y: "2",
                rx: "2",
                ry: "2"
            }],
            ["rect", {
                width: "20",
                height: "8",
                x: "2",
                y: "14",
                rx: "2",
                ry: "2"
            }],
            ["line", {
                x1: "6",
                x2: "6.01",
                y1: "6",
                y2: "6"
            }],
            ["line", {
                x1: "6",
                x2: "6.01",
                y1: "18",
                y2: "18"
            }]
        ]],
        oM = ["svg", h, [
            ["path", {
                d: "M20 7h-9"
            }],
            ["path", {
                d: "M14 17H5"
            }],
            ["circle", {
                cx: "17",
                cy: "17",
                r: "3"
            }],
            ["circle", {
                cx: "7",
                cy: "7",
                r: "3"
            }]
        ]],
        sM = ["svg", h, [
            ["path", {
                d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"
            }],
            ["circle", {
                cx: "12",
                cy: "12",
                r: "3"
            }]
        ]],
        gM = ["svg", h, [
            ["path", {
                d: "M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z"
            }],
            ["rect", {
                x: "3",
                y: "14",
                width: "7",
                height: "7",
                rx: "1"
            }],
            ["circle", {
                cx: "17.5",
                cy: "17.5",
                r: "3.5"
            }]
        ]],
        rM = ["svg", h, [
            ["circle", {
                cx: "18",
                cy: "5",
                r: "3"
            }],
            ["circle", {
                cx: "6",
                cy: "12",
                r: "3"
            }],
            ["circle", {
                cx: "18",
                cy: "19",
                r: "3"
            }],
            ["line", {
                x1: "8.59",
                x2: "15.42",
                y1: "13.51",
                y2: "17.49"
            }],
            ["line", {
                x1: "15.41",
                x2: "8.59",
                y1: "6.51",
                y2: "10.49"
            }]
        ]],
        yM = ["svg", h, [
            ["path", {
                d: "M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"
            }],
            ["polyline", {
                points: "16 6 12 2 8 6"
            }],
            ["line", {
                x1: "12",
                x2: "12",
                y1: "2",
                y2: "15"
            }]
        ]],
        $M = ["svg", h, [
            ["rect", {
                width: "18",
                height: "18",
                x: "3",
                y: "3",
                rx: "2",
                ry: "2"
            }],
            ["line", {
                x1: "3",
                x2: "21",
                y1: "9",
                y2: "9"
            }],
            ["line", {
                x1: "3",
                x2: "21",
                y1: "15",
                y2: "15"
            }],
            ["line", {
                x1: "9",
                x2: "9",
                y1: "9",
                y2: "21"
            }],
            ["line", {
                x1: "15",
                x2: "15",
                y1: "9",
                y2: "21"
            }]
        ]],
        mM = ["svg", h, [
            ["path", {
                d: "M14 11a2 2 0 1 1-4 0 4 4 0 0 1 8 0 6 6 0 0 1-12 0 8 8 0 0 1 16 0 10 10 0 1 1-20 0 11.93 11.93 0 0 1 2.42-7.22 2 2 0 1 1 3.16 2.44"
            }]
        ]],
        HM = ["svg", h, [
            ["path", {
                d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"
            }],
            ["path", {
                d: "M12 8v4"
            }],
            ["path", {
                d: "M12 16h.01"
            }]
        ]],
        CM = ["svg", h, [
            ["path", {
                d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"
            }],
            ["path", {
                d: "m4 5 14 12"
            }]
        ]],
        uM = ["svg", h, [
            ["path", {
                d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"
            }],
            ["path", {
                d: "m9 12 2 2 4-4"
            }]
        ]],
        VM = ["svg", h, [
            ["path", {
                d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"
            }],
            ["path", {
                d: "M8 11h.01"
            }],
            ["path", {
                d: "M12 11h.01"
            }],
            ["path", {
                d: "M16 11h.01"
            }]
        ]],
        wM = ["svg", h, [
            ["path", {
                d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"
            }],
            ["path", {
                d: "M12 22V2"
            }]
        ]],
        xM = ["svg", h, [
            ["path", {
                d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"
            }],
            ["path", {
                d: "M8 11h8"
            }]
        ]],
        LM = ["svg", h, [
            ["path", {
                d: "M19.7 14a6.9 6.9 0 0 0 .3-2V5l-8-3-3.2 1.2"
            }],
            ["path", {
                d: "m2 2 20 20"
            }],
            ["path", {
                d: "M4.7 4.7 4 5v7c0 6 8 10 8 10a20.3 20.3 0 0 0 5.62-4.38"
            }]
        ]],
        SM = ["svg", h, [
            ["path", {
                d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"
            }],
            ["path", {
                d: "M8 11h8"
            }],
            ["path", {
                d: "M12 15V7"
            }]
        ]],
        AM = ["svg", h, [
            ["path", {
                d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"
            }],
            ["path", {
                d: "M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3"
            }],
            ["path", {
                d: "M12 17h.01"
            }]
        ]],
        fM = ["svg", h, [
            ["path", {
                d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"
            }],
            ["path", {
                d: "m14.5 9-5 5"
            }],
            ["path", {
                d: "m9.5 9 5 5"
            }]
        ]],
        kM = ["svg", h, [
            ["path", {
                d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"
            }]
        ]],
        FM = ["svg", h, [
            ["circle", {
                cx: "12",
                cy: "12",
                r: "8"
            }],
            ["path", {
                d: "M12 2v7.5"
            }],
            ["path", {
                d: "m19 5-5.23 5.23"
            }],
            ["path", {
                d: "M22 12h-7.5"
            }],
            ["path", {
                d: "m19 19-5.23-5.23"
            }],
            ["path", {
                d: "M12 14.5V22"
            }],
            ["path", {
                d: "M10.23 13.77 5 19"
            }],
            ["path", {
                d: "M9.5 12H2"
            }],
            ["path", {
                d: "M10.23 10.23 5 5"
            }],
            ["circle", {
                cx: "12",
                cy: "12",
                r: "2.5"
            }]
        ]],
        ZM = ["svg", h, [
            ["path", {
                d: "M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1 .6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"
            }],
            ["path", {
                d: "M19.38 20A11.6 11.6 0 0 0 21 14l-9-4-9 4c0 2.9.94 5.34 2.81 7.76"
            }],
            ["path", {
                d: "M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6"
            }],
            ["path", {
                d: "M12 10v4"
            }],
            ["path", {
                d: "M12 2v3"
            }]
        ]],
        PM = ["svg", h, [
            ["path", {
                d: "M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"
            }]
        ]],
        BM = ["svg", h, [
            ["path", {
                d: "M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"
            }],
            ["path", {
                d: "M3 6h18"
            }],
            ["path", {
                d: "M16 10a4 4 0 0 1-8 0"
            }]
        ]],
        DM = ["svg", h, [
            ["path", {
                d: "m5 11 4-7"
            }],
            ["path", {
                d: "m19 11-4-7"
            }],
            ["path", {
                d: "M2 11h20"
            }],
            ["path", {
                d: "m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8c.9 0 1.8-.7 2-1.6l1.7-7.4"
            }],
            ["path", {
                d: "m9 11 1 9"
            }],
            ["path", {
                d: "M4.5 15.5h15"
            }],
            ["path", {
                d: "m15 11-1 9"
            }]
        ]],
        TM = ["svg", h, [
            ["circle", {
                cx: "8",
                cy: "21",
                r: "1"
            }],
            ["circle", {
                cx: "19",
                cy: "21",
                r: "1"
            }],
            ["path", {
                d: "M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"
            }]
        ]],
        zM = ["svg", h, [
            ["path", {
                d: "M2 22v-5l5-5 5 5-5 5z"
            }],
            ["path", {
                d: "M9.5 14.5 16 8"
            }],
            ["path", {
                d: "m17 2 5 5-.5.5a3.53 3.53 0 0 1-5 0s0 0 0 0a3.53 3.53 0 0 1 0-5L17 2"
            }]
        ]],
        RM = ["svg", h, [
            ["path", {
                d: "m4 4 2.5 2.5"
            }],
            ["path", {
                d: "M13.5 6.5a4.95 4.95 0 0 0-7 7"
            }],
            ["path", {
                d: "M15 5 5 15"
            }],
            ["path", {
                d: "M14 17v.01"
            }],
            ["path", {
                d: "M10 16v.01"
            }],
            ["path", {
                d: "M13 13v.01"
            }],
            ["path", {
                d: "M16 10v.01"
            }],
            ["path", {
                d: "M11 20v.01"
            }],
            ["path", {
                d: "M17 14v.01"
            }],
            ["path", {
                d: "M20 11v.01"
            }]
        ]],
        bM = ["svg", h, [
            ["path", {
                d: "m15 15 6 6m-6-6v4.8m0-4.8h4.8"
            }],
            ["path", {
                d: "M9 19.8V15m0 0H4.2M9 15l-6 6"
            }],
            ["path", {
                d: "M15 4.2V9m0 0h4.8M15 9l6-6"
            }],
            ["path", {
                d: "M9 4.2V9m0 0H4.2M9 9 3 3"
            }]
        ]],
        UM = ["svg", h, [
            ["path", {
                d: "M12 22v-7l-2-2"
            }],
            ["path", {
                d: "M17 8v.8A6 6 0 0 1 13.8 20v0H10v0A6.5 6.5 0 0 1 7 8h0a5 5 0 0 1 10 0Z"
            }],
            ["path", {
                d: "m14 14-2 2"
            }]
        ]],
        OM = ["svg", h, [
            ["path", {
                d: "M2 18h1.4c1.3 0 2.5-.6 3.3-1.7l6.1-8.6c.7-1.1 2-1.7 3.3-1.7H22"
            }],
            ["path", {
                d: "m18 2 4 4-4 4"
            }],
            ["path", {
                d: "M2 6h1.9c1.5 0 2.9.9 3.6 2.2"
            }],
            ["path", {
                d: "M22 18h-5.9c-1.3 0-2.6-.7-3.3-1.8l-.5-.8"
            }],
            ["path", {
                d: "m18 14 4 4-4 4"
            }]
        ]],
        qM = ["svg", h, [
            ["rect", {
                width: "18",
                height: "18",
                x: "3",
                y: "3",
                rx: "2"
            }],
            ["path", {
                d: "M16 8.9V7H8l4 5-4 5h8v-1.9"
            }]
        ]],
        GM = ["svg", h, [
            ["path", {
                d: "M18 7V4H6l6 8-6 8h12v-3"
            }]
        ]],
        WM = ["svg", h, [
            ["path", {
                d: "M2 20h.01"
            }],
            ["path", {
                d: "M7 20v-4"
            }],
            ["path", {
                d: "M12 20v-8"
            }],
            ["path", {
                d: "M17 20V8"
            }]
        ]],
        EM = ["svg", h, [
            ["path", {
                d: "M2 20h.01"
            }],
            ["path", {
                d: "M7 20v-4"
            }]
        ]],
        IM = ["svg", h, [
            ["path", {
                d: "M2 20h.01"
            }],
            ["path", {
                d: "M7 20v-4"
            }],
            ["path", {
                d: "M12 20v-8"
            }]
        ]],
        XM = ["svg", h, [
            ["path", {
                d: "M2 20h.01"
            }]
        ]],
        NM = ["svg", h, [
            ["path", {
                d: "M2 20h.01"
            }],
            ["path", {
                d: "M7 20v-4"
            }],
            ["path", {
                d: "M12 20v-8"
            }],
            ["path", {
                d: "M17 20V8"
            }],
            ["path", {
                d: "M22 4v16"
            }]
        ]],
        KM = ["svg", h, [
            ["path", {
                d: "M7 12a5 5 0 0 1 5-5v0a5 5 0 0 1 5 5v6H7v-6Z"
            }],
            ["path", {
                d: "M5 20a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v2H5v-2Z"
            }],
            ["path", {
                d: "M21 12h1"
            }],
            ["path", {
                d: "M18.5 4.5 18 5"
            }],
            ["path", {
                d: "M2 12h1"
            }],
            ["path", {
                d: "M12 2v1"
            }],
            ["path", {
                d: "m4.929 4.929.707.707"
            }],
            ["path", {
                d: "M12 12v6"
            }]
        ]],
        JM = ["svg", h, [
            ["polygon", {
                points: "19 20 9 12 19 4 19 20"
            }],
            ["line", {
                x1: "5",
                x2: "5",
                y1: "19",
                y2: "5"
            }]
        ]],
        jM = ["svg", h, [
            ["polygon", {
                points: "5 4 15 12 5 20 5 4"
            }],
            ["line", {
                x1: "19",
                x2: "19",
                y1: "5",
                y2: "19"
            }]
        ]],
        QM = ["svg", h, [
            ["circle", {
                cx: "9",
                cy: "12",
                r: "1"
            }],
            ["circle", {
                cx: "15",
                cy: "12",
                r: "1"
            }],
            ["path", {
                d: "M8 20v2h8v-2"
            }],
            ["path", {
                d: "m12.5 17-.5-1-.5 1h1z"
            }],
            ["path", {
                d: "M16 20a2 2 0 0 0 1.56-3.25 8 8 0 1 0-11.12 0A2 2 0 0 0 8 20"
            }]
        ]],
        YM = ["svg", h, [
            ["rect", {
                width: "3",
                height: "8",
                x: "13",
                y: "2",
                rx: "1.5"
            }],
            ["path", {
                d: "M19 8.5V10h1.5A1.5 1.5 0 1 0 19 8.5"
            }],
            ["rect", {
                width: "3",
                height: "8",
                x: "8",
                y: "14",
                rx: "1.5"
            }],
            ["path", {
                d: "M5 15.5V14H3.5A1.5 1.5 0 1 0 5 15.5"
            }],
            ["rect", {
                width: "8",
                height: "3",
                x: "14",
                y: "13",
                rx: "1.5"
            }],
            ["path", {
                d: "M15.5 19H14v1.5a1.5 1.5 0 1 0 1.5-1.5"
            }],
            ["rect", {
                width: "8",
                height: "3",
                x: "2",
                y: "8",
                rx: "1.5"
            }],
            ["path", {
                d: "M8.5 5H10V3.5A1.5 1.5 0 1 0 8.5 5"
            }]
        ]],
        _M = ["svg", h, [
            ["path", {
                d: "M22 2 2 22"
            }]
        ]],
        al = ["svg", h, [
            ["path", {
                d: "m8 14-6 6h9v-3"
            }],
            ["path", {
                d: "M18.37 3.63 8 14l3 3L21.37 6.63a2.12 2.12 0 1 0-3-3Z"
            }]
        ]],
        hl = ["svg", h, [
            ["line", {
                x1: "21",
                x2: "14",
                y1: "4",
                y2: "4"
            }],
            ["line", {
                x1: "10",
                x2: "3",
                y1: "4",
                y2: "4"
            }],
            ["line", {
                x1: "21",
                x2: "12",
                y1: "12",
                y2: "12"
            }],
            ["line", {
                x1: "8",
                x2: "3",
                y1: "12",
                y2: "12"
            }],
            ["line", {
                x1: "21",
                x2: "16",
                y1: "20",
                y2: "20"
            }],
            ["line", {
                x1: "12",
                x2: "3",
                y1: "20",
                y2: "20"
            }],
            ["line", {
                x1: "14",
                x2: "14",
                y1: "2",
                y2: "6"
            }],
            ["line", {
                x1: "8",
                x2: "8",
                y1: "10",
                y2: "14"
            }],
            ["line", {
                x1: "16",
                x2: "16",
                y1: "18",
                y2: "22"
            }]
        ]],
        tl = ["svg", h, [
            ["line", {
                x1: "4",
                x2: "4",
                y1: "21",
                y2: "14"
            }],
            ["line", {
                x1: "4",
                x2: "4",
                y1: "10",
                y2: "3"
            }],
            ["line", {
                x1: "12",
                x2: "12",
                y1: "21",
                y2: "12"
            }],
            ["line", {
                x1: "12",
                x2: "12",
                y1: "8",
                y2: "3"
            }],
            ["line", {
                x1: "20",
                x2: "20",
                y1: "21",
                y2: "16"
            }],
            ["line", {
                x1: "20",
                x2: "20",
                y1: "12",
                y2: "3"
            }],
            ["line", {
                x1: "2",
                x2: "6",
                y1: "14",
                y2: "14"
            }],
            ["line", {
                x1: "10",
                x2: "14",
                y1: "8",
                y2: "8"
            }],
            ["line", {
                x1: "18",
                x2: "22",
                y1: "16",
                y2: "16"
            }]
        ]],
        dl = ["svg", h, [
            ["rect", {
                width: "14",
                height: "20",
                x: "5",
                y: "2",
                rx: "2",
                ry: "2"
            }],
            ["path", {
                d: "M12.667 8 10 12h4l-2.667 4"
            }]
        ]],
        cl = ["svg", h, [
            ["rect", {
                width: "7",
                height: "12",
                x: "2",
                y: "6",
                rx: "1"
            }],
            ["path", {
                d: "M13 8.32a7.43 7.43 0 0 1 0 7.36"
            }],
            ["path", {
                d: "M16.46 6.21a11.76 11.76 0 0 1 0 11.58"
            }],
            ["path", {
                d: "M19.91 4.1a15.91 15.91 0 0 1 .01 15.8"
            }]
        ]],
        nl = ["svg", h, [
            ["rect", {
                width: "14",
                height: "20",
                x: "5",
                y: "2",
                rx: "2",
                ry: "2"
            }],
            ["path", {
                d: "M12 18h.01"
            }]
        ]],
        il = ["svg", h, [
            ["path", {
                d: "M22 11v1a10 10 0 1 1-9-10"
            }],
            ["path", {
                d: "M8 14s1.5 2 4 2 4-2 4-2"
            }],
            ["line", {
                x1: "9",
                x2: "9.01",
                y1: "9",
                y2: "9"
            }],
            ["line", {
                x1: "15",
                x2: "15.01",
                y1: "9",
                y2: "9"
            }],
            ["path", {
                d: "M16 5h6"
            }],
            ["path", {
                d: "M19 2v6"
            }]
        ]],
        pl = ["svg", h, [
            ["circle", {
                cx: "12",
                cy: "12",
                r: "10"
            }],
            ["path", {
                d: "M8 14s1.5 2 4 2 4-2 4-2"
            }],
            ["line", {
                x1: "9",
                x2: "9.01",
                y1: "9",
                y2: "9"
            }],
            ["line", {
                x1: "15",
                x2: "15.01",
                y1: "9",
                y2: "9"
            }]
        ]],
        el = ["svg", h, [
            ["path", {
                d: "M2 13a6 6 0 1 0 12 0 4 4 0 1 0-8 0 2 2 0 0 0 4 0"
            }],
            ["circle", {
                cx: "10",
                cy: "13",
                r: "8"
            }],
            ["path", {
                d: "M2 21h12c4.4 0 8-3.6 8-8V7a2 2 0 1 0-4 0v6"
            }],
            ["path", {
                d: "M18 3 19.1 5.2"
            }],
            ["path", {
                d: "M22 3 20.9 5.2"
            }]
        ]],
        Ml = ["svg", h, [
            ["line", {
                x1: "2",
                x2: "22",
                y1: "12",
                y2: "12"
            }],
            ["line", {
                x1: "12",
                x2: "12",
                y1: "2",
                y2: "22"
            }],
            ["path", {
                d: "m20 16-4-4 4-4"
            }],
            ["path", {
                d: "m4 8 4 4-4 4"
            }],
            ["path", {
                d: "m16 4-4 4-4-4"
            }],
            ["path", {
                d: "m8 20 4-4 4 4"
            }]
        ]],
        ll = ["svg", h, [
            ["path", {
                d: "M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3"
            }],
            ["path", {
                d: "M2 11v5a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v2H6v-2a2 2 0 0 0-4 0Z"
            }],
            ["path", {
                d: "M4 18v2"
            }],
            ["path", {
                d: "M20 18v2"
            }],
            ["path", {
                d: "M12 4v9"
            }]
        ]],
        vl = ["svg", h, [
            ["path", {
                d: "M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z"
            }],
            ["path", {
                d: "M7 21h10"
            }],
            ["path", {
                d: "M19.5 12 22 6"
            }],
            ["path", {
                d: "M16.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.73 1.62"
            }],
            ["path", {
                d: "M11.25 3c.27.1.8.53.74 1.36-.05.83-.93 1.2-.98 2.02-.06.78.33 1.24.72 1.62"
            }],
            ["path", {
                d: "M6.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.74 1.62"
            }]
        ]],
        ol = ["svg", h, [
            ["path", {
                d: "M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1"
            }]
        ]],
        sl = ["svg", h, [
            ["path", {
                d: "M5 9c-1.5 1.5-3 3.2-3 5.5A5.5 5.5 0 0 0 7.5 20c1.8 0 3-.5 4.5-2 1.5 1.5 2.7 2 4.5 2a5.5 5.5 0 0 0 5.5-5.5c0-2.3-1.5-4-3-5.5l-7-7-7 7Z"
            }],
            ["path", {
                d: "M12 18v4"
            }]
        ]],
        gl = ["svg", h, [
            ["path", {
                d: "m12 3-1.9 5.8a2 2 0 0 1-1.287 1.288L3 12l5.8 1.9a2 2 0 0 1 1.288 1.287L12 21l1.9-5.8a2 2 0 0 1 1.287-1.288L21 12l-5.8-1.9a2 2 0 0 1-1.288-1.287Z"
            }]
        ]],
        rl = ["svg", h, [
            ["path", {
                d: "m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"
            }],
            ["path", {
                d: "M5 3v4"
            }],
            ["path", {
                d: "M19 17v4"
            }],
            ["path", {
                d: "M3 5h4"
            }],
            ["path", {
                d: "M17 19h4"
            }]
        ]],
        yl = ["svg", h, [
            ["rect", {
                width: "16",
                height: "20",
                x: "4",
                y: "2",
                rx: "2",
                ry: "2"
            }],
            ["circle", {
                cx: "12",
                cy: "14",
                r: "4"
            }],
            ["line", {
                x1: "12",
                x2: "12.01",
                y1: "6",
                y2: "6"
            }]
        ]],
        $l = ["svg", h, [
            ["path", {
                d: "M8.8 20v-4.1l1.9.2a2.3 2.3 0 0 0 2.164-2.1V8.3A5.37 5.37 0 0 0 2 8.25c0 2.8.656 3.054 1 4.55a5.77 5.77 0 0 1 .029 2.758L2 20"
            }],
            ["path", {
                d: "M19.8 17.8a7.5 7.5 0 0 0 .003-10.603"
            }],
            ["path", {
                d: "M17 15a3.5 3.5 0 0 0-.025-4.975"
            }]
        ]],
        ml = ["svg", h, [
            ["path", {
                d: "m6 16 6-12 6 12"
            }],
            ["path", {
                d: "M8 12h8"
            }],
            ["path", {
                d: "M4 21c1.1 0 1.1-1 2.3-1s1.1 1 2.3 1c1.1 0 1.1-1 2.3-1 1.1 0 1.1 1 2.3 1 1.1 0 1.1-1 2.3-1 1.1 0 1.1 1 2.3 1 1.1 0 1.1-1 2.3-1"
            }]
        ]],
        Hl = ["svg", h, [
            ["path", {
                d: "m6 16 6-12 6 12"
            }],
            ["path", {
                d: "M8 12h8"
            }],
            ["path", {
                d: "m16 20 2 2 4-4"
            }]
        ]],
        Cl = ["svg", h, [
            ["circle", {
                cx: "19",
                cy: "5",
                r: "2"
            }],
            ["circle", {
                cx: "5",
                cy: "19",
                r: "2"
            }],
            ["path", {
                d: "M5 17A12 12 0 0 1 17 5"
            }]
        ]],
        ul = ["svg", h, [
            ["path", {
                d: "M8 19H5c-1 0-2-1-2-2V7c0-1 1-2 2-2h3"
            }],
            ["path", {
                d: "M16 5h3c1 0 2 1 2 2v10c0 1-1 2-2 2h-3"
            }],
            ["line", {
                x1: "12",
                x2: "12",
                y1: "4",
                y2: "20"
            }]
        ]],
        Vl = ["svg", h, [
            ["path", {
                d: "M5 8V5c0-1 1-2 2-2h10c1 0 2 1 2 2v3"
            }],
            ["path", {
                d: "M19 16v3c0 1-1 2-2 2H7c-1 0-2-1-2-2v-3"
            }],
            ["line", {
                x1: "4",
                x2: "20",
                y1: "12",
                y2: "12"
            }]
        ]],
        wl = ["svg", h, [
            ["path", {
                d: "M16 3h5v5"
            }],
            ["path", {
                d: "M8 3H3v5"
            }],
            ["path", {
                d: "M12 22v-8.3a4 4 0 0 0-1.172-2.872L3 3"
            }],
            ["path", {
                d: "m15 9 6-6"
            }]
        ]],
        xl = ["svg", h, [
            ["path", {
                d: "M3 3h.01"
            }],
            ["path", {
                d: "M7 5h.01"
            }],
            ["path", {
                d: "M11 7h.01"
            }],
            ["path", {
                d: "M3 7h.01"
            }],
            ["path", {
                d: "M7 9h.01"
            }],
            ["path", {
                d: "M3 11h.01"
            }],
            ["rect", {
                width: "4",
                height: "4",
                x: "15",
                y: "5"
            }],
            ["path", {
                d: "m19 9 2 2v10c0 .6-.4 1-1 1h-6c-.6 0-1-.4-1-1V11l2-2"
            }],
            ["path", {
                d: "m13 14 8-2"
            }],
            ["path", {
                d: "m13 19 8-2"
            }]
        ]],
        Ll = ["svg", h, [
            ["path", {
                d: "M7 20h10"
            }],
            ["path", {
                d: "M10 20c5.5-2.5.8-6.4 3-10"
            }],
            ["path", {
                d: "M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z"
            }],
            ["path", {
                d: "M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z"
            }]
        ]],
        Sl = ["svg", h, [
            ["rect", {
                width: "18",
                height: "18",
                x: "3",
                y: "3",
                rx: "2"
            }],
            ["path", {
                d: "M12 8v8"
            }],
            ["path", {
                d: "m8.5 14 7-4"
            }],
            ["path", {
                d: "m8.5 10 7 4"
            }]
        ]],
        Al = ["svg", h, [
            ["rect", {
                width: "18",
                height: "18",
                x: "3",
                y: "3",
                rx: "2"
            }],
            ["path", {
                d: "m10 10-2 2 2 2"
            }],
            ["path", {
                d: "m14 14 2-2-2-2"
            }]
        ]],
        fl = ["svg", h, [
            ["path", {
                d: "m10 10-2 2 2 2"
            }],
            ["path", {
                d: "m14 14 2-2-2-2"
            }],
            ["path", {
                d: "M5 21a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2"
            }],
            ["path", {
                d: "M9 21h1"
            }],
            ["path", {
                d: "M14 21h1"
            }]
        ]],
        kl = ["svg", h, [
            ["path", {
                d: "M5 21a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2"
            }],
            ["path", {
                d: "M9 21h1"
            }],
            ["path", {
                d: "M14 21h1"
            }]
        ]],
        Fl = ["svg", h, [
            ["rect", {
                width: "18",
                height: "18",
                x: "3",
                y: "3",
                rx: "2"
            }],
            ["circle", {
                cx: "12",
                cy: "12",
                r: "1"
            }]
        ]],
        Zl = ["svg", h, [
            ["rect", {
                width: "18",
                height: "18",
                x: "3",
                y: "3",
                rx: "2"
            }],
            ["path", {
                d: "M7 10h10"
            }],
            ["path", {
                d: "M7 14h10"
            }]
        ]],
        Pl = ["svg", h, [
            ["rect", {
                width: "18",
                height: "18",
                x: "3",
                y: "3",
                rx: "2"
            }],
            ["line", {
                x1: "9",
                x2: "15",
                y1: "15",
                y2: "9"
            }]
        ]],
        Bl = ["svg", h, [
            ["path", {
                d: "M4 10c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2"
            }],
            ["path", {
                d: "M10 16c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2"
            }],
            ["rect", {
                width: "8",
                height: "8",
                x: "14",
                y: "14",
                rx: "2"
            }]
        ]],
        Dl = ["svg", h, [
            ["rect", {
                width: "18",
                height: "18",
                x: "3",
                y: "3",
                rx: "2"
            }]
        ]],
        Tl = ["svg", h, [
            ["path", {
                d: "M18 6a4 4 0 0 0-4 4 7 7 0 0 0-7 7c0-5 4-5 4-10.5a4.5 4.5 0 1 0-9 0 2.5 2.5 0 0 0 5 0C7 10 3 11 3 17c0 2.8 2.2 5 5 5h10"
            }],
            ["path", {
                d: "M16 20c0-1.7 1.3-3 3-3h1a2 2 0 0 0 2-2v-2a4 4 0 0 0-4-4V4"
            }],
            ["path", {
                d: "M15.2 22a3 3 0 0 0-2.2-5"
            }],
            ["path", {
                d: "M18 13h.01"
            }]
        ]],
        zl = ["svg", h, [
            ["path", {
                d: "M5 22h14"
            }],
            ["path", {
                d: "M19.27 13.73A2.5 2.5 0 0 0 17.5 13h-11A2.5 2.5 0 0 0 4 15.5V17a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-1.5c0-.66-.26-1.3-.73-1.77Z"
            }],
            ["path", {
                d: "M14 13V8.5C14 7 15 7 15 5a3 3 0 0 0-3-3c-1.66 0-3 1-3 3s1 2 1 3.5V13"
            }]
        ]],
        Rl = ["svg", h, [
            ["path", {
                d: "M12 17.8 5.8 21 7 14.1 2 9.3l7-1L12 2"
            }]
        ]],
        bl = ["svg", h, [
            ["path", {
                d: "M8.34 8.34 2 9.27l5 4.87L5.82 21 12 17.77 18.18 21l-.59-3.43"
            }],
            ["path", {
                d: "M18.42 12.76 22 9.27l-6.91-1L12 2l-1.44 2.91"
            }],
            ["line", {
                x1: "2",
                x2: "22",
                y1: "2",
                y2: "22"
            }]
        ]],
        Ul = ["svg", h, [
            ["polygon", {
                points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
            }]
        ]],
        Ol = ["svg", h, [
            ["line", {
                x1: "18",
                x2: "18",
                y1: "20",
                y2: "4"
            }],
            ["polygon", {
                points: "14,20 4,12 14,4"
            }]
        ]],
        ql = ["svg", h, [
            ["line", {
                x1: "6",
                x2: "6",
                y1: "4",
                y2: "20"
            }],
            ["polygon", {
                points: "10,4 20,12 10,20"
            }]
        ]],
        Gl = ["svg", h, [
            ["path", {
                d: "M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3"
            }],
            ["path", {
                d: "M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4"
            }],
            ["circle", {
                cx: "20",
                cy: "10",
                r: "2"
            }]
        ]],
        Wl = ["svg", h, [
            ["path", {
                d: "M15.5 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V8.5L15.5 3Z"
            }],
            ["path", {
                d: "M15 3v6h6"
            }],
            ["path", {
                d: "M10 16s.8 1 2 1c1.3 0 2-1 2-1"
            }],
            ["path", {
                d: "M8 13h0"
            }],
            ["path", {
                d: "M16 13h0"
            }]
        ]],
        El = ["svg", h, [
            ["path", {
                d: "M15.5 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V8.5L15.5 3Z"
            }],
            ["path", {
                d: "M15 3v6h6"
            }]
        ]],
        Il = ["svg", h, [
            ["circle", {
                cx: "12",
                cy: "12",
                r: "10"
            }],
            ["rect", {
                width: "6",
                height: "6",
                x: "9",
                y: "9"
            }]
        ]],
        Xl = ["svg", h, [
            ["path", {
                d: "m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"
            }],
            ["path", {
                d: "M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"
            }],
            ["path", {
                d: "M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"
            }],
            ["path", {
                d: "M2 7h20"
            }],
            ["path", {
                d: "M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7"
            }]
        ]],
        Nl = ["svg", h, [
            ["rect", {
                width: "20",
                height: "6",
                x: "2",
                y: "4",
                rx: "2"
            }],
            ["rect", {
                width: "20",
                height: "6",
                x: "2",
                y: "14",
                rx: "2"
            }]
        ]],
        Kl = ["svg", h, [
            ["rect", {
                width: "6",
                height: "20",
                x: "4",
                y: "2",
                rx: "2"
            }],
            ["rect", {
                width: "6",
                height: "20",
                x: "14",
                y: "2",
                rx: "2"
            }]
        ]],
        Jl = ["svg", h, [
            ["path", {
                d: "M16 4H9a3 3 0 0 0-2.83 4"
            }],
            ["path", {
                d: "M14 12a4 4 0 0 1 0 8H6"
            }],
            ["line", {
                x1: "4",
                x2: "20",
                y1: "12",
                y2: "12"
            }]
        ]],
        jl = ["svg", h, [
            ["path", {
                d: "m4 5 8 8"
            }],
            ["path", {
                d: "m12 5-8 8"
            }],
            ["path", {
                d: "M20 19h-4c0-1.5.44-2 1.5-2.5S20 15.33 20 14c0-.47-.17-.93-.48-1.29a2.11 2.11 0 0 0-2.62-.44c-.42.24-.74.62-.9 1.07"
            }]
        ]],
        Ql = ["svg", h, [
            ["path", {
                d: "M7 13h4"
            }],
            ["path", {
                d: "M15 13h2"
            }],
            ["path", {
                d: "M7 9h2"
            }],
            ["path", {
                d: "M13 9h4"
            }],
            ["path", {
                d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z"
            }]
        ]],
        Yl = ["svg", h, [
            ["circle", {
                cx: "12",
                cy: "12",
                r: "4"
            }],
            ["path", {
                d: "M12 4h.01"
            }],
            ["path", {
                d: "M20 12h.01"
            }],
            ["path", {
                d: "M12 20h.01"
            }],
            ["path", {
                d: "M4 12h.01"
            }],
            ["path", {
                d: "M17.657 6.343h.01"
            }],
            ["path", {
                d: "M17.657 17.657h.01"
            }],
            ["path", {
                d: "M6.343 17.657h.01"
            }],
            ["path", {
                d: "M6.343 6.343h.01"
            }]
        ]],
        _l = ["svg", h, [
            ["circle", {
                cx: "12",
                cy: "12",
                r: "4"
            }],
            ["path", {
                d: "M12 3v1"
            }],
            ["path", {
                d: "M12 20v1"
            }],
            ["path", {
                d: "M3 12h1"
            }],
            ["path", {
                d: "M20 12h1"
            }],
            ["path", {
                d: "m18.364 5.636-.707.707"
            }],
            ["path", {
                d: "m6.343 17.657-.707.707"
            }],
            ["path", {
                d: "m5.636 5.636.707.707"
            }],
            ["path", {
                d: "m17.657 17.657.707.707"
            }]
        ]],
        a9 = ["svg", h, [
            ["path", {
                d: "M12 8a2.83 2.83 0 0 0 4 4 4 4 0 1 1-4-4"
            }],
            ["path", {
                d: "M12 2v2"
            }],
            ["path", {
                d: "M12 20v2"
            }],
            ["path", {
                d: "m4.9 4.9 1.4 1.4"
            }],
            ["path", {
                d: "m17.7 17.7 1.4 1.4"
            }],
            ["path", {
                d: "M2 12h2"
            }],
            ["path", {
                d: "M20 12h2"
            }],
            ["path", {
                d: "m6.3 17.7-1.4 1.4"
            }],
            ["path", {
                d: "m19.1 4.9-1.4 1.4"
            }]
        ]],
        h9 = ["svg", h, [
            ["path", {
                d: "M10 9a3 3 0 1 0 0 6"
            }],
            ["path", {
                d: "M2 12h1"
            }],
            ["path", {
                d: "M14 21V3"
            }],
            ["path", {
                d: "M10 4V3"
            }],
            ["path", {
                d: "M10 21v-1"
            }],
            ["path", {
                d: "m3.64 18.36.7-.7"
            }],
            ["path", {
                d: "m4.34 6.34-.7-.7"
            }],
            ["path", {
                d: "M14 12h8"
            }],
            ["path", {
                d: "m17 4-3 3"
            }],
            ["path", {
                d: "m14 17 3 3"
            }],
            ["path", {
                d: "m21 15-3-3 3-3"
            }]
        ]],
        t9 = ["svg", h, [
            ["circle", {
                cx: "12",
                cy: "12",
                r: "4"
            }],
            ["path", {
                d: "M12 2v2"
            }],
            ["path", {
                d: "M12 20v2"
            }],
            ["path", {
                d: "m4.93 4.93 1.41 1.41"
            }],
            ["path", {
                d: "m17.66 17.66 1.41 1.41"
            }],
            ["path", {
                d: "M2 12h2"
            }],
            ["path", {
                d: "M20 12h2"
            }],
            ["path", {
                d: "m6.34 17.66-1.41 1.41"
            }],
            ["path", {
                d: "m19.07 4.93-1.41 1.41"
            }]
        ]],
        d9 = ["svg", h, [
            ["path", {
                d: "M12 2v8"
            }],
            ["path", {
                d: "m4.93 10.93 1.41 1.41"
            }],
            ["path", {
                d: "M2 18h2"
            }],
            ["path", {
                d: "M20 18h2"
            }],
            ["path", {
                d: "m19.07 10.93-1.41 1.41"
            }],
            ["path", {
                d: "M22 22H2"
            }],
            ["path", {
                d: "m8 6 4-4 4 4"
            }],
            ["path", {
                d: "M16 18a4 4 0 0 0-8 0"
            }]
        ]],
        c9 = ["svg", h, [
            ["path", {
                d: "M12 10V2"
            }],
            ["path", {
                d: "m4.93 10.93 1.41 1.41"
            }],
            ["path", {
                d: "M2 18h2"
            }],
            ["path", {
                d: "M20 18h2"
            }],
            ["path", {
                d: "m19.07 10.93-1.41 1.41"
            }],
            ["path", {
                d: "M22 22H2"
            }],
            ["path", {
                d: "m16 6-4 4-4-4"
            }],
            ["path", {
                d: "M16 18a4 4 0 0 0-8 0"
            }]
        ]],
        n9 = ["svg", h, [
            ["path", {
                d: "m4 19 8-8"
            }],
            ["path", {
                d: "m12 19-8-8"
            }],
            ["path", {
                d: "M20 12h-4c0-1.5.442-2 1.5-2.5S20 8.334 20 7.002c0-.472-.17-.93-.484-1.29a2.105 2.105 0 0 0-2.617-.436c-.42.239-.738.614-.899 1.06"
            }]
        ]],
        i9 = ["svg", h, [
            ["path", {
                d: "M10 21V3h8"
            }],
            ["path", {
                d: "M6 16h9"
            }],
            ["path", {
                d: "M10 9.5h7"
            }]
        ]],
        p9 = ["svg", h, [
            ["path", {
                d: "M11 19H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5"
            }],
            ["path", {
                d: "M13 5h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-5"
            }],
            ["circle", {
                cx: "12",
                cy: "12",
                r: "3"
            }],
            ["path", {
                d: "m18 22-3-3 3-3"
            }],
            ["path", {
                d: "m6 2 3 3-3 3"
            }]
        ]],
        e9 = ["svg", h, [
            ["polyline", {
                points: "14.5 17.5 3 6 3 3 6 3 17.5 14.5"
            }],
            ["line", {
                x1: "13",
                x2: "19",
                y1: "19",
                y2: "13"
            }],
            ["line", {
                x1: "16",
                x2: "20",
                y1: "16",
                y2: "20"
            }],
            ["line", {
                x1: "19",
                x2: "21",
                y1: "21",
                y2: "19"
            }]
        ]],
        M9 = ["svg", h, [
            ["polyline", {
                points: "14.5 17.5 3 6 3 3 6 3 17.5 14.5"
            }],
            ["line", {
                x1: "13",
                x2: "19",
                y1: "19",
                y2: "13"
            }],
            ["line", {
                x1: "16",
                x2: "20",
                y1: "16",
                y2: "20"
            }],
            ["line", {
                x1: "19",
                x2: "21",
                y1: "21",
                y2: "19"
            }],
            ["polyline", {
                points: "14.5 6.5 18 3 21 3 21 6 17.5 9.5"
            }],
            ["line", {
                x1: "5",
                x2: "9",
                y1: "14",
                y2: "18"
            }],
            ["line", {
                x1: "7",
                x2: "4",
                y1: "17",
                y2: "20"
            }],
            ["line", {
                x1: "3",
                x2: "5",
                y1: "19",
                y2: "21"
            }]
        ]],
        l9 = ["svg", h, [
            ["path", {
                d: "m18 2 4 4"
            }],
            ["path", {
                d: "m17 7 3-3"
            }],
            ["path", {
                d: "M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5"
            }],
            ["path", {
                d: "m9 11 4 4"
            }],
            ["path", {
                d: "m5 19-3 3"
            }],
            ["path", {
                d: "m14 4 6 6"
            }]
        ]],
        v9 = ["svg", h, [
            ["path", {
                d: "M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18"
            }]
        ]],
        o9 = ["svg", h, [
            ["path", {
                d: "M15 3v18"
            }],
            ["rect", {
                width: "18",
                height: "18",
                x: "3",
                y: "3",
                rx: "2"
            }],
            ["path", {
                d: "M21 9H3"
            }],
            ["path", {
                d: "M21 15H3"
            }]
        ]],
        s9 = ["svg", h, [
            ["path", {
                d: "M12 3v18"
            }],
            ["rect", {
                width: "18",
                height: "18",
                x: "3",
                y: "3",
                rx: "2"
            }],
            ["path", {
                d: "M3 9h18"
            }],
            ["path", {
                d: "M3 15h18"
            }]
        ]],
        g9 = ["svg", h, [
            ["rect", {
                width: "10",
                height: "14",
                x: "3",
                y: "8",
                rx: "2"
            }],
            ["path", {
                d: "M5 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2.4"
            }],
            ["path", {
                d: "M8 18h.01"
            }]
        ]],
        r9 = ["svg", h, [
            ["rect", {
                width: "16",
                height: "20",
                x: "4",
                y: "2",
                rx: "2",
                ry: "2"
            }],
            ["line", {
                x1: "12",
                x2: "12.01",
                y1: "18",
                y2: "18"
            }]
        ]],
        y9 = ["svg", h, [
            ["circle", {
                cx: "7",
                cy: "7",
                r: "5"
            }],
            ["circle", {
                cx: "17",
                cy: "17",
                r: "5"
            }],
            ["path", {
                d: "M12 17h10"
            }],
            ["path", {
                d: "m3.46 10.54 7.08-7.08"
            }]
        ]],
        $9 = ["svg", h, [
            ["path", {
                d: "M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z"
            }],
            ["path", {
                d: "M7 7h.01"
            }]
        ]],
        m9 = ["svg", h, [
            ["path", {
                d: "M9 5H2v7l6.29 6.29c.94.94 2.48.94 3.42 0l3.58-3.58c.94-.94.94-2.48 0-3.42L9 5Z"
            }],
            ["path", {
                d: "M6 9.01V9"
            }],
            ["path", {
                d: "m15 5 6.3 6.3a2.4 2.4 0 0 1 0 3.4L17 19"
            }]
        ]],
        H9 = ["svg", h, [
            ["path", {
                d: "M4 4v16"
            }]
        ]],
        C9 = ["svg", h, [
            ["path", {
                d: "M4 4v16"
            }],
            ["path", {
                d: "M9 4v16"
            }]
        ]],
        u9 = ["svg", h, [
            ["path", {
                d: "M4 4v16"
            }],
            ["path", {
                d: "M9 4v16"
            }],
            ["path", {
                d: "M14 4v16"
            }]
        ]],
        V9 = ["svg", h, [
            ["path", {
                d: "M4 4v16"
            }],
            ["path", {
                d: "M9 4v16"
            }],
            ["path", {
                d: "M14 4v16"
            }],
            ["path", {
                d: "M19 4v16"
            }]
        ]],
        w9 = ["svg", h, [
            ["path", {
                d: "M4 4v16"
            }],
            ["path", {
                d: "M9 4v16"
            }],
            ["path", {
                d: "M14 4v16"
            }],
            ["path", {
                d: "M19 4v16"
            }],
            ["path", {
                d: "M22 6 2 18"
            }]
        ]],
        x9 = ["svg", h, [
            ["circle", {
                cx: "17",
                cy: "4",
                r: "2"
            }],
            ["path", {
                d: "M15.59 5.41 5.41 15.59"
            }],
            ["circle", {
                cx: "4",
                cy: "17",
                r: "2"
            }],
            ["path", {
                d: "M12 22s-4-9-1.5-11.5S22 12 22 12"
            }]
        ]],
        L9 = ["svg", h, [
            ["circle", {
                cx: "12",
                cy: "12",
                r: "10"
            }],
            ["circle", {
                cx: "12",
                cy: "12",
                r: "6"
            }],
            ["circle", {
                cx: "12",
                cy: "12",
                r: "2"
            }]
        ]],
        S9 = ["svg", h, [
            ["circle", {
                cx: "4",
                cy: "4",
                r: "2"
            }],
            ["path", {
                d: "m14 5 3-3 3 3"
            }],
            ["path", {
                d: "m14 10 3-3 3 3"
            }],
            ["path", {
                d: "M17 14V2"
            }],
            ["path", {
                d: "M17 14H7l-5 8h20Z"
            }],
            ["path", {
                d: "M8 14v8"
            }],
            ["path", {
                d: "m9 14 5 8"
            }]
        ]],
        A9 = ["svg", h, [
            ["path", {
                d: "M3.5 21 14 3"
            }],
            ["path", {
                d: "M20.5 21 10 3"
            }],
            ["path", {
                d: "M15.5 21 12 15l-3.5 6"
            }],
            ["path", {
                d: "M2 21h20"
            }]
        ]],
        f9 = ["svg", h, [
            ["path", {
                d: "m7 11 2-2-2-2"
            }],
            ["path", {
                d: "M11 13h4"
            }],
            ["rect", {
                width: "18",
                height: "18",
                x: "3",
                y: "3",
                rx: "2",
                ry: "2"
            }]
        ]],
        k9 = ["svg", h, [
            ["polyline", {
                points: "4 17 10 11 4 5"
            }],
            ["line", {
                x1: "12",
                x2: "20",
                y1: "19",
                y2: "19"
            }]
        ]],
        F9 = ["svg", h, [
            ["path", {
                d: "M21 7 6.82 21.18a2.83 2.83 0 0 1-3.99-.01v0a2.83 2.83 0 0 1 0-4L17 3"
            }],
            ["path", {
                d: "m16 2 6 6"
            }],
            ["path", {
                d: "M12 16H4"
            }]
        ]],
        Z9 = ["svg", h, [
            ["path", {
                d: "M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5h0c-1.4 0-2.5-1.1-2.5-2.5V2"
            }],
            ["path", {
                d: "M8.5 2h7"
            }],
            ["path", {
                d: "M14.5 16h-5"
            }]
        ]],
        P9 = ["svg", h, [
            ["path", {
                d: "M9 2v17.5A2.5 2.5 0 0 1 6.5 22v0A2.5 2.5 0 0 1 4 19.5V2"
            }],
            ["path", {
                d: "M20 2v17.5a2.5 2.5 0 0 1-2.5 2.5v0a2.5 2.5 0 0 1-2.5-2.5V2"
            }],
            ["path", {
                d: "M3 2h7"
            }],
            ["path", {
                d: "M14 2h7"
            }],
            ["path", {
                d: "M9 16H4"
            }],
            ["path", {
                d: "M20 16h-5"
            }]
        ]],
        B9 = ["svg", h, [
            ["path", {
                d: "M5 4h1a3 3 0 0 1 3 3 3 3 0 0 1 3-3h1"
            }],
            ["path", {
                d: "M13 20h-1a3 3 0 0 1-3-3 3 3 0 0 1-3 3H5"
            }],
            ["path", {
                d: "M5 16H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h1"
            }],
            ["path", {
                d: "M13 8h7a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-7"
            }],
            ["path", {
                d: "M9 7v10"
            }]
        ]],
        D9 = ["svg", h, [
            ["path", {
                d: "M17 22h-1a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h1"
            }],
            ["path", {
                d: "M7 22h1a4 4 0 0 0 4-4v-1"
            }],
            ["path", {
                d: "M7 2h1a4 4 0 0 1 4 4v1"
            }]
        ]],
        T9 = ["svg", h, [
            ["path", {
                d: "M17 6H3"
            }],
            ["path", {
                d: "M21 12H8"
            }],
            ["path", {
                d: "M21 18H8"
            }],
            ["path", {
                d: "M3 12v6"
            }]
        ]],
        z9 = ["svg", h, [
            ["path", {
                d: "M5 3a2 2 0 0 0-2 2"
            }],
            ["path", {
                d: "M19 3a2 2 0 0 1 2 2"
            }],
            ["path", {
                d: "M21 19a2 2 0 0 1-2 2"
            }],
            ["path", {
                d: "M5 21a2 2 0 0 1-2-2"
            }],
            ["path", {
                d: "M9 3h1"
            }],
            ["path", {
                d: "M9 21h1"
            }],
            ["path", {
                d: "M14 3h1"
            }],
            ["path", {
                d: "M14 21h1"
            }],
            ["path", {
                d: "M3 9v1"
            }],
            ["path", {
                d: "M21 9v1"
            }],
            ["path", {
                d: "M3 14v1"
            }],
            ["path", {
                d: "M21 14v1"
            }],
            ["line", {
                x1: "7",
                x2: "15",
                y1: "8",
                y2: "8"
            }],
            ["line", {
                x1: "7",
                x2: "17",
                y1: "12",
                y2: "12"
            }],
            ["line", {
                x1: "7",
                x2: "13",
                y1: "16",
                y2: "16"
            }]
        ]],
        R9 = ["svg", h, [
            ["path", {
                d: "M17 6.1H3"
            }],
            ["path", {
                d: "M21 12.1H3"
            }],
            ["path", {
                d: "M15.1 18H3"
            }]
        ]],
        b9 = ["svg", h, [
            ["path", {
                d: "M2 10s3-3 3-8"
            }],
            ["path", {
                d: "M22 10s-3-3-3-8"
            }],
            ["path", {
                d: "M10 2c0 4.4-3.6 8-8 8"
            }],
            ["path", {
                d: "M14 2c0 4.4 3.6 8 8 8"
            }],
            ["path", {
                d: "M2 10s2 2 2 5"
            }],
            ["path", {
                d: "M22 10s-2 2-2 5"
            }],
            ["path", {
                d: "M8 15h8"
            }],
            ["path", {
                d: "M2 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1"
            }],
            ["path", {
                d: "M14 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1"
            }]
        ]],
        U9 = ["svg", h, [
            ["path", {
                d: "M2 12h10"
            }],
            ["path", {
                d: "M9 4v16"
            }],
            ["path", {
                d: "m3 9 3 3-3 3"
            }],
            ["path", {
                d: "M12 6 9 9 6 6"
            }],
            ["path", {
                d: "m6 18 3-3 1.5 1.5"
            }],
            ["path", {
                d: "M20 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"
            }]
        ]],
        O9 = ["svg", h, [
            ["path", {
                d: "M12 9a4 4 0 0 0-2 7.5"
            }],
            ["path", {
                d: "M12 3v2"
            }],
            ["path", {
                d: "m6.6 18.4-1.4 1.4"
            }],
            ["path", {
                d: "M20 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"
            }],
            ["path", {
                d: "M4 13H2"
            }],
            ["path", {
                d: "M6.34 7.34 4.93 5.93"
            }]
        ]],
        q9 = ["svg", h, [
            ["path", {
                d: "M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"
            }]
        ]],
        G9 = ["svg", h, [
            ["path", {
                d: "M17 14V2"
            }],
            ["path", {
                d: "M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z"
            }]
        ]],
        W9 = ["svg", h, [
            ["path", {
                d: "M7 10v12"
            }],
            ["path", {
                d: "M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"
            }]
        ]],
        E9 = ["svg", h, [
            ["path", {
                d: "M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"
            }],
            ["path", {
                d: "M13 5v2"
            }],
            ["path", {
                d: "M13 17v2"
            }],
            ["path", {
                d: "M13 11v2"
            }]
        ]],
        I9 = ["svg", h, [
            ["path", {
                d: "M10 2h4"
            }],
            ["path", {
                d: "M4.6 11a8 8 0 0 0 1.7 8.7 8 8 0 0 0 8.7 1.7"
            }],
            ["path", {
                d: "M7.4 7.4a8 8 0 0 1 10.3 1 8 8 0 0 1 .9 10.2"
            }],
            ["path", {
                d: "m2 2 20 20"
            }],
            ["path", {
                d: "M12 12v-2"
            }]
        ]],
        X9 = ["svg", h, [
            ["path", {
                d: "M10 2h4"
            }],
            ["path", {
                d: "M12 14v-4"
            }],
            ["path", {
                d: "M4 13a8 8 0 0 1 8-7 8 8 0 1 1-5.3 14L4 17.6"
            }],
            ["path", {
                d: "M9 17H4v5"
            }]
        ]],
        N9 = ["svg", h, [
            ["line", {
                x1: "10",
                x2: "14",
                y1: "2",
                y2: "2"
            }],
            ["line", {
                x1: "12",
                x2: "15",
                y1: "14",
                y2: "11"
            }],
            ["circle", {
                cx: "12",
                cy: "14",
                r: "8"
            }]
        ]],
        K9 = ["svg", h, [
            ["rect", {
                width: "20",
                height: "12",
                x: "2",
                y: "6",
                rx: "6",
                ry: "6"
            }],
            ["circle", {
                cx: "8",
                cy: "12",
                r: "2"
            }]
        ]],
        J9 = ["svg", h, [
            ["rect", {
                width: "20",
                height: "12",
                x: "2",
                y: "6",
                rx: "6",
                ry: "6"
            }],
            ["circle", {
                cx: "16",
                cy: "12",
                r: "2"
            }]
        ]],
        j9 = ["svg", h, [
            ["path", {
                d: "M21 4H3"
            }],
            ["path", {
                d: "M18 8H6"
            }],
            ["path", {
                d: "M19 12H9"
            }],
            ["path", {
                d: "M16 16h-6"
            }],
            ["path", {
                d: "M11 20H9"
            }]
        ]],
        Q9 = ["svg", h, [
            ["ellipse", {
                cx: "12",
                cy: "11",
                rx: "3",
                ry: "2"
            }],
            ["ellipse", {
                cx: "12",
                cy: "12.5",
                rx: "10",
                ry: "8.5"
            }]
        ]],
        Y9 = ["svg", h, [
            ["path", {
                d: "M4 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16"
            }],
            ["path", {
                d: "M2 14h12"
            }],
            ["path", {
                d: "M22 14h-2"
            }],
            ["path", {
                d: "M12 20v-6"
            }],
            ["path", {
                d: "m2 2 20 20"
            }],
            ["path", {
                d: "M22 16V6a2 2 0 0 0-2-2H10"
            }]
        ]],
        _9 = ["svg", h, [
            ["rect", {
                width: "20",
                height: "16",
                x: "2",
                y: "4",
                rx: "2"
            }],
            ["path", {
                d: "M2 14h20"
            }],
            ["path", {
                d: "M12 20v-6"
            }]
        ]],
        av = ["svg", h, [
            ["path", {
                d: "M18.2 12.27 20 6H4l1.8 6.27a1 1 0 0 0 .95.73h10.5a1 1 0 0 0 .96-.73Z"
            }],
            ["path", {
                d: "M8 13v9"
            }],
            ["path", {
                d: "M16 22v-9"
            }],
            ["path", {
                d: "m9 6 1 7"
            }],
            ["path", {
                d: "m15 6-1 7"
            }],
            ["path", {
                d: "M12 6V2"
            }],
            ["path", {
                d: "M13 2h-2"
            }]
        ]],
        hv = ["svg", h, [
            ["rect", {
                width: "18",
                height: "12",
                x: "3",
                y: "8",
                rx: "1"
            }],
            ["path", {
                d: "M10 8V5c0-.6-.4-1-1-1H6a1 1 0 0 0-1 1v3"
            }],
            ["path", {
                d: "M19 8V5c0-.6-.4-1-1-1h-3a1 1 0 0 0-1 1v3"
            }]
        ]],
        tv = ["svg", h, [
            ["path", {
                d: "M3 4h9l1 7"
            }],
            ["path", {
                d: "M4 11V4"
            }],
            ["path", {
                d: "M8 10V4"
            }],
            ["path", {
                d: "M18 5c-.6 0-1 .4-1 1v5.6"
            }],
            ["path", {
                d: "m10 11 11 .9c.6 0 .9.5.8 1.1l-.8 5h-1"
            }],
            ["circle", {
                cx: "7",
                cy: "15",
                r: ".5"
            }],
            ["circle", {
                cx: "7",
                cy: "15",
                r: "5"
            }],
            ["path", {
                d: "M16 18h-5"
            }],
            ["circle", {
                cx: "18",
                cy: "18",
                r: "2"
            }]
        ]],
        dv = ["svg", h, [
            ["path", {
                d: "M9.3 6.2a4.55 4.55 0 0 0 5.4 0"
            }],
            ["path", {
                d: "M7.9 10.7c.9.8 2.4 1.3 4.1 1.3s3.2-.5 4.1-1.3"
            }],
            ["path", {
                d: "M13.9 3.5a1.93 1.93 0 0 0-3.8-.1l-3 10c-.1.2-.1.4-.1.6 0 1.7 2.2 3 5 3s5-1.3 5-3c0-.2 0-.4-.1-.5Z"
            }],
            ["path", {
                d: "m7.5 12.2-4.7 2.7c-.5.3-.8.7-.8 1.1s.3.8.8 1.1l7.6 4.5c.9.5 2.1.5 3 0l7.6-4.5c.7-.3 1-.7 1-1.1s-.3-.8-.8-1.1l-4.7-2.8"
            }]
        ]],
        cv = ["svg", h, [
            ["path", {
                d: "M2 22V12a10 10 0 1 1 20 0v10"
            }],
            ["path", {
                d: "M15 6.8v1.4a3 2.8 0 1 1-6 0V6.8"
            }],
            ["path", {
                d: "M10 15h.01"
            }],
            ["path", {
                d: "M14 15h.01"
            }],
            ["path", {
                d: "M10 19a4 4 0 0 1-4-4v-3a6 6 0 1 1 12 0v3a4 4 0 0 1-4 4Z"
            }],
            ["path", {
                d: "m9 19-2 3"
            }],
            ["path", {
                d: "m15 19 2 3"
            }]
        ]],
        nv = ["svg", h, [
            ["path", {
                d: "M8 3.1V7a4 4 0 0 0 8 0V3.1"
            }],
            ["path", {
                d: "m9 15-1-1"
            }],
            ["path", {
                d: "m15 15 1-1"
            }],
            ["path", {
                d: "M9 19c-2.8 0-5-2.2-5-5v-4a8 8 0 0 1 16 0v4c0 2.8-2.2 5-5 5Z"
            }],
            ["path", {
                d: "m8 19-2 3"
            }],
            ["path", {
                d: "m16 19 2 3"
            }]
        ]],
        iv = ["svg", h, [
            ["path", {
                d: "M2 17 17 2"
            }],
            ["path", {
                d: "m2 14 8 8"
            }],
            ["path", {
                d: "m5 11 8 8"
            }],
            ["path", {
                d: "m8 8 8 8"
            }],
            ["path", {
                d: "m11 5 8 8"
            }],
            ["path", {
                d: "m14 2 8 8"
            }],
            ["path", {
                d: "M7 22 22 7"
            }]
        ]],
        pv = ["svg", h, [
            ["rect", {
                width: "16",
                height: "16",
                x: "4",
                y: "3",
                rx: "2"
            }],
            ["path", {
                d: "M4 11h16"
            }],
            ["path", {
                d: "M12 3v8"
            }],
            ["path", {
                d: "m8 19-2 3"
            }],
            ["path", {
                d: "m18 22-2-3"
            }],
            ["path", {
                d: "M8 15h0"
            }],
            ["path", {
                d: "M16 15h0"
            }]
        ]],
        ev = ["svg", h, [
            ["path", {
                d: "M3 6h18"
            }],
            ["path", {
                d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"
            }],
            ["path", {
                d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"
            }],
            ["line", {
                x1: "10",
                x2: "10",
                y1: "11",
                y2: "17"
            }],
            ["line", {
                x1: "14",
                x2: "14",
                y1: "11",
                y2: "17"
            }]
        ]],
        Mv = ["svg", h, [
            ["path", {
                d: "M3 6h18"
            }],
            ["path", {
                d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"
            }],
            ["path", {
                d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"
            }]
        ]],
        lv = ["svg", h, [
            ["path", {
                d: "M8 19h8a4 4 0 0 0 3.8-2.8 4 4 0 0 0-1.6-4.5c1-1.1 1-2.7.4-4-.7-1.2-2.2-2-3.6-1.7a3 3 0 0 0-3-3 3 3 0 0 0-3 3c-1.4-.2-2.9.5-3.6 1.7-.7 1.3-.5 2.9.4 4a4 4 0 0 0-1.6 4.5A4 4 0 0 0 8 19Z"
            }],
            ["path", {
                d: "M12 19v3"
            }]
        ]],
        vv = ["svg", h, [
            ["path", {
                d: "m17 14 3 3.3a1 1 0 0 1-.7 1.7H4.7a1 1 0 0 1-.7-1.7L7 14h-.3a1 1 0 0 1-.7-1.7L9 9h-.2A1 1 0 0 1 8 7.3L12 3l4 4.3a1 1 0 0 1-.8 1.7H15l3 3.3a1 1 0 0 1-.7 1.7H17Z"
            }],
            ["path", {
                d: "M12 22v-3"
            }]
        ]],
        ov = ["svg", h, [
            ["path", {
                d: "M10 10v.2A3 3 0 0 1 8.9 16v0H5v0h0a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z"
            }],
            ["path", {
                d: "M7 16v6"
            }],
            ["path", {
                d: "M13 19v3"
            }],
            ["path", {
                d: "M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5"
            }]
        ]],
        sv = ["svg", h, [
            ["rect", {
                width: "18",
                height: "18",
                x: "3",
                y: "3",
                rx: "2",
                ry: "2"
            }],
            ["rect", {
                width: "3",
                height: "9",
                x: "7",
                y: "7"
            }],
            ["rect", {
                width: "3",
                height: "5",
                x: "14",
                y: "7"
            }]
        ]],
        gv = ["svg", h, [
            ["polyline", {
                points: "22 17 13.5 8.5 8.5 13.5 2 7"
            }],
            ["polyline", {
                points: "16 17 22 17 22 11"
            }]
        ]],
        rv = ["svg", h, [
            ["polyline", {
                points: "22 7 13.5 15.5 8.5 10.5 2 17"
            }],
            ["polyline", {
                points: "16 7 22 7 22 13"
            }]
        ]],
        yv = ["svg", h, [
            ["path", {
                d: "M22 18a2 2 0 0 1-2 2H3c-1.1 0-1.3-.6-.4-1.3L20.4 4.3c.9-.7 1.6-.4 1.6.7Z"
            }]
        ]],
        $v = ["svg", h, [
            ["path", {
                d: "M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"
            }]
        ]],
        mv = ["svg", h, [
            ["path", {
                d: "M6 9H4.5a2.5 2.5 0 0 1 0-5H6"
            }],
            ["path", {
                d: "M18 9h1.5a2.5 2.5 0 0 0 0-5H18"
            }],
            ["path", {
                d: "M4 22h16"
            }],
            ["path", {
                d: "M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"
            }],
            ["path", {
                d: "M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"
            }],
            ["path", {
                d: "M18 2H6v7a6 6 0 0 0 12 0V2Z"
            }]
        ]],
        Hv = ["svg", h, [
            ["path", {
                d: "M5 18H3c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v11"
            }],
            ["path", {
                d: "M14 9h4l4 4v4c0 .6-.4 1-1 1h-2"
            }],
            ["circle", {
                cx: "7",
                cy: "18",
                r: "2"
            }],
            ["path", {
                d: "M15 18H9"
            }],
            ["circle", {
                cx: "17",
                cy: "18",
                r: "2"
            }]
        ]],
        Cv = ["svg", h, [
            ["path", {
                d: "m12 10 2 4v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3a8 8 0 1 0-16 0v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3l2-4h4Z"
            }],
            ["path", {
                d: "M4.82 7.9 8 10"
            }],
            ["path", {
                d: "M15.18 7.9 12 10"
            }],
            ["path", {
                d: "M16.93 10H20a2 2 0 0 1 0 4H2"
            }]
        ]],
        uv = ["svg", h, [
            ["path", {
                d: "M7 21h10"
            }],
            ["rect", {
                width: "20",
                height: "14",
                x: "2",
                y: "3",
                rx: "2"
            }]
        ]],
        Vv = ["svg", h, [
            ["rect", {
                width: "20",
                height: "15",
                x: "2",
                y: "7",
                rx: "2",
                ry: "2"
            }],
            ["polyline", {
                points: "17 2 12 7 7 2"
            }]
        ]],
        wv = ["svg", h, [
            ["path", {
                d: "M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7"
            }]
        ]],
        xv = ["svg", h, [
            ["path", {
                d: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"
            }]
        ]],
        Lv = ["svg", h, [
            ["polyline", {
                points: "4 7 4 4 20 4 20 7"
            }],
            ["line", {
                x1: "9",
                x2: "15",
                y1: "20",
                y2: "20"
            }],
            ["line", {
                x1: "12",
                x2: "12",
                y1: "4",
                y2: "20"
            }]
        ]],
        Sv = ["svg", h, [
            ["path", {
                d: "M22 12a10.06 10.06 1 0 0-20 0Z"
            }],
            ["path", {
                d: "M12 12v8a2 2 0 0 0 4 0"
            }],
            ["path", {
                d: "M12 2v1"
            }]
        ]],
        Av = ["svg", h, [
            ["path", {
                d: "M6 4v6a6 6 0 0 0 12 0V4"
            }],
            ["line", {
                x1: "4",
                x2: "20",
                y1: "20",
                y2: "20"
            }]
        ]],
        fv = ["svg", h, [
            ["path", {
                d: "M9 14 4 9l5-5"
            }],
            ["path", {
                d: "M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5v0a5.5 5.5 0 0 1-5.5 5.5H11"
            }]
        ]],
        kv = ["svg", h, [
            ["circle", {
                cx: "12",
                cy: "17",
                r: "1"
            }],
            ["path", {
                d: "M3 7v6h6"
            }],
            ["path", {
                d: "M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13"
            }]
        ]],
        Fv = ["svg", h, [
            ["path", {
                d: "M3 7v6h6"
            }],
            ["path", {
                d: "M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13"
            }]
        ]],
        Zv = ["svg", h, [
            ["path", {
                d: "M16 12h6"
            }],
            ["path", {
                d: "M8 12H2"
            }],
            ["path", {
                d: "M12 2v2"
            }],
            ["path", {
                d: "M12 8v2"
            }],
            ["path", {
                d: "M12 14v2"
            }],
            ["path", {
                d: "M12 20v2"
            }],
            ["path", {
                d: "m19 15 3-3-3-3"
            }],
            ["path", {
                d: "m5 9-3 3 3 3"
            }]
        ]],
        Pv = ["svg", h, [
            ["path", {
                d: "M12 22v-6"
            }],
            ["path", {
                d: "M12 8V2"
            }],
            ["path", {
                d: "M4 12H2"
            }],
            ["path", {
                d: "M10 12H8"
            }],
            ["path", {
                d: "M16 12h-2"
            }],
            ["path", {
                d: "M22 12h-2"
            }],
            ["path", {
                d: "m15 19-3 3-3-3"
            }],
            ["path", {
                d: "m15 5-3-3-3 3"
            }]
        ]],
        Bv = ["svg", h, [
            ["rect", {
                width: "8",
                height: "6",
                x: "5",
                y: "4",
                rx: "1"
            }],
            ["rect", {
                width: "8",
                height: "6",
                x: "11",
                y: "14",
                rx: "1"
            }]
        ]],
        Dv = ["svg", h, [
            ["path", {
                d: "M15 7h2a5 5 0 0 1 0 10h-2m-6 0H7A5 5 0 0 1 7 7h2"
            }]
        ]],
        Tv = ["svg", h, [
            ["path", {
                d: "m18.84 12.25 1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.71"
            }],
            ["path", {
                d: "m5.17 11.75-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71"
            }],
            ["line", {
                x1: "8",
                x2: "8",
                y1: "2",
                y2: "5"
            }],
            ["line", {
                x1: "2",
                x2: "5",
                y1: "8",
                y2: "8"
            }],
            ["line", {
                x1: "16",
                x2: "16",
                y1: "19",
                y2: "22"
            }],
            ["line", {
                x1: "19",
                x2: "22",
                y1: "16",
                y2: "16"
            }]
        ]],
        zv = ["svg", h, [
            ["circle", {
                cx: "12",
                cy: "16",
                r: "1"
            }],
            ["rect", {
                x: "3",
                y: "10",
                width: "18",
                height: "12",
                rx: "2"
            }],
            ["path", {
                d: "M7 10V7a5 5 0 0 1 9.33-2.5"
            }]
        ]],
        Rv = ["svg", h, [
            ["rect", {
                width: "18",
                height: "11",
                x: "3",
                y: "11",
                rx: "2",
                ry: "2"
            }],
            ["path", {
                d: "M7 11V7a5 5 0 0 1 9.9-1"
            }]
        ]],
        bv = ["svg", h, [
            ["path", {
                d: "m19 5 3-3"
            }],
            ["path", {
                d: "m2 22 3-3"
            }],
            ["path", {
                d: "M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z"
            }],
            ["path", {
                d: "M7.5 13.5 10 11"
            }],
            ["path", {
                d: "M10.5 16.5 13 14"
            }],
            ["path", {
                d: "m12 6 6 6 2.3-2.3a2.4 2.4 0 0 0 0-3.4l-2.6-2.6a2.4 2.4 0 0 0-3.4 0Z"
            }]
        ]],
        Uv = ["svg", h, [
            ["path", {
                d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"
            }],
            ["path", {
                d: "M12 12v9"
            }],
            ["path", {
                d: "m16 16-4-4-4 4"
            }]
        ]],
        Ov = ["svg", h, [
            ["path", {
                d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
            }],
            ["polyline", {
                points: "17 8 12 3 7 8"
            }],
            ["line", {
                x1: "12",
                x2: "12",
                y1: "3",
                y2: "15"
            }]
        ]],
        qv = ["svg", h, [
            ["circle", {
                cx: "10",
                cy: "7",
                r: "1"
            }],
            ["circle", {
                cx: "4",
                cy: "20",
                r: "1"
            }],
            ["path", {
                d: "M4.7 19.3 19 5"
            }],
            ["path", {
                d: "m21 3-3 1 2 2Z"
            }],
            ["path", {
                d: "M9.26 7.68 5 12l2 5"
            }],
            ["path", {
                d: "m10 14 5 2 3.5-3.5"
            }],
            ["path", {
                d: "m18 12 1-1 1 1-1 1Z"
            }]
        ]],
        Gv = ["svg", h, [
            ["circle", {
                cx: "12",
                cy: "8",
                r: "5"
            }],
            ["path", {
                d: "M20 21a8 8 0 1 0-16 0"
            }]
        ]],
        Wv = ["svg", h, [
            ["path", {
                d: "M14 19a6 6 0 0 0-12 0"
            }],
            ["circle", {
                cx: "8",
                cy: "9",
                r: "4"
            }],
            ["polyline", {
                points: "16 11 18 13 22 9"
            }]
        ]],
        Ev = ["svg", h, [
            ["path", {
                d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
            }],
            ["circle", {
                cx: "9",
                cy: "7",
                r: "4"
            }],
            ["polyline", {
                points: "16 11 18 13 22 9"
            }]
        ]],
        Iv = ["svg", h, [
            ["path", {
                d: "M18 20a6 6 0 0 0-12 0"
            }],
            ["circle", {
                cx: "12",
                cy: "10",
                r: "4"
            }],
            ["circle", {
                cx: "12",
                cy: "12",
                r: "10"
            }]
        ]],
        Xv = ["svg", h, [
            ["circle", {
                cx: "12",
                cy: "12",
                r: "10"
            }],
            ["circle", {
                cx: "12",
                cy: "10",
                r: "3"
            }],
            ["path", {
                d: "M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"
            }]
        ]],
        Nv = ["svg", h, [
            ["circle", {
                cx: "18",
                cy: "15",
                r: "3"
            }],
            ["circle", {
                cx: "8",
                cy: "9",
                r: "4"
            }],
            ["path", {
                d: "M10.5 13.5A6 6 0 0 0 2 19"
            }],
            ["path", {
                d: "m21.7 16.4-.9-.3"
            }],
            ["path", {
                d: "m15.2 13.9-.9-.3"
            }],
            ["path", {
                d: "m16.6 18.7.3-.9"
            }],
            ["path", {
                d: "m19.1 12.2.3-.9"
            }],
            ["path", {
                d: "m19.6 18.7-.4-1"
            }],
            ["path", {
                d: "m16.8 12.3-.4-1"
            }],
            ["path", {
                d: "m14.3 16.6 1-.4"
            }],
            ["path", {
                d: "m20.7 13.8 1-.4"
            }]
        ]],
        Kv = ["svg", h, [
            ["circle", {
                cx: "18",
                cy: "15",
                r: "3"
            }],
            ["circle", {
                cx: "9",
                cy: "7",
                r: "4"
            }],
            ["path", {
                d: "M10 15H6a4 4 0 0 0-4 4v2"
            }],
            ["path", {
                d: "m21.7 16.4-.9-.3"
            }],
            ["path", {
                d: "m15.2 13.9-.9-.3"
            }],
            ["path", {
                d: "m16.6 18.7.3-.9"
            }],
            ["path", {
                d: "m19.1 12.2.3-.9"
            }],
            ["path", {
                d: "m19.6 18.7-.4-1"
            }],
            ["path", {
                d: "m16.8 12.3-.4-1"
            }],
            ["path", {
                d: "m14.3 16.6 1-.4"
            }],
            ["path", {
                d: "m20.7 13.8 1-.4"
            }]
        ]],
        Jv = ["svg", h, [
            ["path", {
                d: "M14 19a6 6 0 0 0-12 0"
            }],
            ["circle", {
                cx: "8",
                cy: "9",
                r: "4"
            }],
            ["line", {
                x1: "22",
                x2: "16",
                y1: "11",
                y2: "11"
            }]
        ]],
        jv = ["svg", h, [
            ["path", {
                d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
            }],
            ["circle", {
                cx: "9",
                cy: "7",
                r: "4"
            }],
            ["line", {
                x1: "22",
                x2: "16",
                y1: "11",
                y2: "11"
            }]
        ]],
        Qv = ["svg", h, [
            ["path", {
                d: "M14 19a6 6 0 0 0-12 0"
            }],
            ["circle", {
                cx: "8",
                cy: "9",
                r: "4"
            }],
            ["line", {
                x1: "19",
                x2: "19",
                y1: "8",
                y2: "14"
            }],
            ["line", {
                x1: "22",
                x2: "16",
                y1: "11",
                y2: "11"
            }]
        ]],
        Yv = ["svg", h, [
            ["path", {
                d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
            }],
            ["circle", {
                cx: "9",
                cy: "7",
                r: "4"
            }],
            ["line", {
                x1: "19",
                x2: "19",
                y1: "8",
                y2: "14"
            }],
            ["line", {
                x1: "22",
                x2: "16",
                y1: "11",
                y2: "11"
            }]
        ]],
        _v = ["svg", h, [
            ["path", {
                d: "M18 21a6 6 0 0 0-12 0"
            }],
            ["circle", {
                cx: "12",
                cy: "11",
                r: "4"
            }],
            ["rect", {
                width: "18",
                height: "18",
                x: "3",
                y: "3",
                rx: "2"
            }]
        ]],
        ao = ["svg", h, [
            ["rect", {
                width: "18",
                height: "18",
                x: "3",
                y: "3",
                rx: "2"
            }],
            ["circle", {
                cx: "12",
                cy: "10",
                r: "3"
            }],
            ["path", {
                d: "M7 21v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2"
            }]
        ]],
        ho = ["svg", h, [
            ["path", {
                d: "M14 19a6 6 0 0 0-12 0"
            }],
            ["circle", {
                cx: "8",
                cy: "9",
                r: "4"
            }],
            ["line", {
                x1: "17",
                x2: "22",
                y1: "8",
                y2: "13"
            }],
            ["line", {
                x1: "22",
                x2: "17",
                y1: "8",
                y2: "13"
            }]
        ]],
        to = ["svg", h, [
            ["path", {
                d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
            }],
            ["circle", {
                cx: "9",
                cy: "7",
                r: "4"
            }],
            ["line", {
                x1: "17",
                x2: "22",
                y1: "8",
                y2: "13"
            }],
            ["line", {
                x1: "22",
                x2: "17",
                y1: "8",
                y2: "13"
            }]
        ]],
        co = ["svg", h, [
            ["path", {
                d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"
            }],
            ["circle", {
                cx: "12",
                cy: "7",
                r: "4"
            }]
        ]],
        no = ["svg", h, [
            ["path", {
                d: "M14 19a6 6 0 0 0-12 0"
            }],
            ["circle", {
                cx: "8",
                cy: "9",
                r: "4"
            }],
            ["path", {
                d: "M22 19a6 6 0 0 0-6-6 4 4 0 1 0 0-8"
            }]
        ]],
        io = ["svg", h, [
            ["path", {
                d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
            }],
            ["circle", {
                cx: "9",
                cy: "7",
                r: "4"
            }],
            ["path", {
                d: "M22 21v-2a4 4 0 0 0-3-3.87"
            }],
            ["path", {
                d: "M16 3.13a4 4 0 0 1 0 7.75"
            }]
        ]],
        po = ["svg", h, [
            ["path", {
                d: "m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8"
            }],
            ["path", {
                d: "M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7"
            }],
            ["path", {
                d: "m2.1 21.8 6.4-6.3"
            }],
            ["path", {
                d: "m19 5-7 7"
            }]
        ]],
        eo = ["svg", h, [
            ["path", {
                d: "M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"
            }],
            ["path", {
                d: "M7 2v20"
            }],
            ["path", {
                d: "M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"
            }]
        ]],
        Mo = ["svg", h, [
            ["path", {
                d: "M12 2v20"
            }],
            ["path", {
                d: "M2 5h20"
            }],
            ["path", {
                d: "M3 3v2"
            }],
            ["path", {
                d: "M7 3v2"
            }],
            ["path", {
                d: "M17 3v2"
            }],
            ["path", {
                d: "M21 3v2"
            }],
            ["path", {
                d: "m19 5-7 7-7-7"
            }]
        ]],
        lo = ["svg", h, [
            ["path", {
                d: "M8 21s-4-3-4-9 4-9 4-9"
            }],
            ["path", {
                d: "M16 3s4 3 4 9-4 9-4 9"
            }],
            ["line", {
                x1: "15",
                x2: "9",
                y1: "9",
                y2: "15"
            }],
            ["line", {
                x1: "9",
                x2: "15",
                y1: "9",
                y2: "15"
            }]
        ]],
        vo = ["svg", h, [
            ["path", {
                d: "M2 2a26.6 26.6 0 0 1 10 20c.9-6.82 1.5-9.5 4-14"
            }],
            ["path", {
                d: "M16 8c4 0 6-2 6-6-4 0-6 2-6 6"
            }],
            ["path", {
                d: "M17.41 3.6a10 10 0 1 0 3 3"
            }]
        ]],
        oo = ["svg", h, [
            ["path", {
                d: "M2 12a5 5 0 0 0 5 5 8 8 0 0 1 5 2 8 8 0 0 1 5-2 5 5 0 0 0 5-5V7h-5a8 8 0 0 0-5 2 8 8 0 0 0-5-2H2Z"
            }],
            ["path", {
                d: "M6 11c1.5 0 3 .5 3 2-2 0-3 0-3-2Z"
            }],
            ["path", {
                d: "M18 11c-1.5 0-3 .5-3 2 2 0 3 0 3-2Z"
            }]
        ]],
        so = ["svg", h, [
            ["path", {
                d: "m2 8 2 2-2 2 2 2-2 2"
            }],
            ["path", {
                d: "m22 8-2 2 2 2-2 2 2 2"
            }],
            ["path", {
                d: "M8 8v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2"
            }],
            ["path", {
                d: "M16 10.34V6c0-.55-.45-1-1-1h-4.34"
            }],
            ["line", {
                x1: "2",
                x2: "22",
                y1: "2",
                y2: "22"
            }]
        ]],
        go = ["svg", h, [
            ["path", {
                d: "m2 8 2 2-2 2 2 2-2 2"
            }],
            ["path", {
                d: "m22 8-2 2 2 2-2 2 2 2"
            }],
            ["rect", {
                width: "8",
                height: "14",
                x: "8",
                y: "5",
                rx: "1"
            }]
        ]],
        ro = ["svg", h, [
            ["path", {
                d: "M10.66 6H14a2 2 0 0 1 2 2v2.34l1 1L22 8v8"
            }],
            ["path", {
                d: "M16 16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2l10 10Z"
            }],
            ["line", {
                x1: "2",
                x2: "22",
                y1: "2",
                y2: "22"
            }]
        ]],
        yo = ["svg", h, [
            ["path", {
                d: "m22 8-6 4 6 4V8Z"
            }],
            ["rect", {
                width: "14",
                height: "12",
                x: "2",
                y: "6",
                rx: "2",
                ry: "2"
            }]
        ]],
        $o = ["svg", h, [
            ["rect", {
                width: "20",
                height: "16",
                x: "2",
                y: "4",
                rx: "2"
            }],
            ["path", {
                d: "M2 8h20"
            }],
            ["circle", {
                cx: "8",
                cy: "14",
                r: "2"
            }],
            ["path", {
                d: "M8 12h8"
            }],
            ["circle", {
                cx: "16",
                cy: "14",
                r: "2"
            }]
        ]],
        mo = ["svg", h, [
            ["path", {
                d: "M5 12s2.545-5 7-5c4.454 0 7 5 7 5s-2.546 5-7 5c-4.455 0-7-5-7-5z"
            }],
            ["path", {
                d: "M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
            }],
            ["path", {
                d: "M21 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2"
            }],
            ["path", {
                d: "M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2"
            }]
        ]],
        Ho = ["svg", h, [
            ["circle", {
                cx: "6",
                cy: "12",
                r: "4"
            }],
            ["circle", {
                cx: "18",
                cy: "12",
                r: "4"
            }],
            ["line", {
                x1: "6",
                x2: "18",
                y1: "16",
                y2: "16"
            }]
        ]],
        Co = ["svg", h, [
            ["polygon", {
                points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5"
            }],
            ["path", {
                d: "M15.54 8.46a5 5 0 0 1 0 7.07"
            }]
        ]],
        uo = ["svg", h, [
            ["polygon", {
                points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5"
            }],
            ["path", {
                d: "M15.54 8.46a5 5 0 0 1 0 7.07"
            }],
            ["path", {
                d: "M19.07 4.93a10 10 0 0 1 0 14.14"
            }]
        ]],
        Vo = ["svg", h, [
            ["polygon", {
                points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5"
            }],
            ["line", {
                x1: "22",
                x2: "16",
                y1: "9",
                y2: "15"
            }],
            ["line", {
                x1: "16",
                x2: "22",
                y1: "9",
                y2: "15"
            }]
        ]],
        wo = ["svg", h, [
            ["polygon", {
                points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5"
            }]
        ]],
        xo = ["svg", h, [
            ["path", {
                d: "m9 12 2 2 4-4"
            }],
            ["path", {
                d: "M5 7c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v12H5V7Z"
            }],
            ["path", {
                d: "M22 19H2"
            }]
        ]],
        Lo = ["svg", h, [
            ["path", {
                d: "M17 14h.01"
            }],
            ["path", {
                d: "M7 7h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14"
            }]
        ]],
        So = ["svg", h, [
            ["rect", {
                width: "18",
                height: "18",
                x: "3",
                y: "3",
                rx: "2"
            }],
            ["path", {
                d: "M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2"
            }],
            ["path", {
                d: "M3 11h3c.8 0 1.6.3 2.1.9l1.1.9c1.6 1.6 4.1 1.6 5.7 0l1.1-.9c.5-.5 1.3-.9 2.1-.9H21"
            }]
        ]],
        Ao = ["svg", h, [
            ["path", {
                d: "M21 12V7H5a2 2 0 0 1 0-4h14v4"
            }],
            ["path", {
                d: "M3 5v14a2 2 0 0 0 2 2h16v-5"
            }],
            ["path", {
                d: "M18 12a2 2 0 0 0 0 4h4v-4Z"
            }]
        ]],
        fo = ["svg", h, [
            ["circle", {
                cx: "8",
                cy: "9",
                r: "2"
            }],
            ["path", {
                d: "m9 17 6.1-6.1a2 2 0 0 1 2.81.01L22 15V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2"
            }],
            ["path", {
                d: "M8 21h8"
            }],
            ["path", {
                d: "M12 17v4"
            }]
        ]],
        ko = ["svg", h, [
            ["path", {
                d: "m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72Z"
            }],
            ["path", {
                d: "m14 7 3 3"
            }],
            ["path", {
                d: "M5 6v4"
            }],
            ["path", {
                d: "M19 14v4"
            }],
            ["path", {
                d: "M10 2v2"
            }],
            ["path", {
                d: "M7 8H3"
            }],
            ["path", {
                d: "M21 16h-4"
            }],
            ["path", {
                d: "M11 3H9"
            }]
        ]],
        Fo = ["svg", h, [
            ["path", {
                d: "M15 4V2"
            }],
            ["path", {
                d: "M15 16v-2"
            }],
            ["path", {
                d: "M8 9h2"
            }],
            ["path", {
                d: "M20 9h2"
            }],
            ["path", {
                d: "M17.8 11.8 19 13"
            }],
            ["path", {
                d: "M15 9h0"
            }],
            ["path", {
                d: "M17.8 6.2 19 5"
            }],
            ["path", {
                d: "m3 21 9-9"
            }],
            ["path", {
                d: "M12.2 6.2 11 5"
            }]
        ]],
        Zo = ["svg", h, [
            ["path", {
                d: "M22 8.35V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.35A2 2 0 0 1 3.26 6.5l8-3.2a2 2 0 0 1 1.48 0l8 3.2A2 2 0 0 1 22 8.35Z"
            }],
            ["path", {
                d: "M6 18h12"
            }],
            ["path", {
                d: "M6 14h12"
            }],
            ["rect", {
                width: "12",
                height: "12",
                x: "6",
                y: "10"
            }]
        ]],
        Po = ["svg", h, [
            ["circle", {
                cx: "12",
                cy: "12",
                r: "6"
            }],
            ["polyline", {
                points: "12 10 12 12 13 13"
            }],
            ["path", {
                d: "m16.13 7.66-.81-4.05a2 2 0 0 0-2-1.61h-2.68a2 2 0 0 0-2 1.61l-.78 4.05"
            }],
            ["path", {
                d: "m7.88 16.36.8 4a2 2 0 0 0 2 1.61h2.72a2 2 0 0 0 2-1.61l.81-4.05"
            }]
        ]],
        Bo = ["svg", h, [
            ["path", {
                d: "M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"
            }],
            ["path", {
                d: "M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"
            }],
            ["path", {
                d: "M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"
            }]
        ]],
        Do = ["svg", h, [
            ["circle", {
                cx: "12",
                cy: "10",
                r: "8"
            }],
            ["circle", {
                cx: "12",
                cy: "10",
                r: "3"
            }],
            ["path", {
                d: "M7 22h10"
            }],
            ["path", {
                d: "M12 22v-4"
            }]
        ]],
        To = ["svg", h, [
            ["path", {
                d: "M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2"
            }],
            ["path", {
                d: "m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06"
            }],
            ["path", {
                d: "m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8"
            }]
        ]],
        zo = ["svg", h, [
            ["circle", {
                cx: "12",
                cy: "5",
                r: "3"
            }],
            ["path", {
                d: "M6.5 8a2 2 0 0 0-1.905 1.46L2.1 18.5A2 2 0 0 0 4 21h16a2 2 0 0 0 1.925-2.54L19.4 9.5A2 2 0 0 0 17.48 8Z"
            }]
        ]],
        Ro = ["svg", h, [
            ["path", {
                d: "m2 22 10-10"
            }],
            ["path", {
                d: "m16 8-1.17 1.17"
            }],
            ["path", {
                d: "M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"
            }],
            ["path", {
                d: "m8 8-.53.53a3.5 3.5 0 0 0 0 4.94L9 15l1.53-1.53c.55-.55.88-1.25.98-1.97"
            }],
            ["path", {
                d: "M10.91 5.26c.15-.26.34-.51.56-.73L13 3l1.53 1.53a3.5 3.5 0 0 1 .28 4.62"
            }],
            ["path", {
                d: "M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z"
            }],
            ["path", {
                d: "M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z"
            }],
            ["path", {
                d: "m16 16-.53.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.49 3.49 0 0 1 1.97-.98"
            }],
            ["path", {
                d: "M18.74 13.09c.26-.15.51-.34.73-.56L21 11l-1.53-1.53a3.5 3.5 0 0 0-4.62-.28"
            }],
            ["line", {
                x1: "2",
                x2: "22",
                y1: "2",
                y2: "22"
            }]
        ]],
        bo = ["svg", h, [
            ["path", {
                d: "M2 22 16 8"
            }],
            ["path", {
                d: "M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"
            }],
            ["path", {
                d: "M7.47 8.53 9 7l1.53 1.53a3.5 3.5 0 0 1 0 4.94L9 15l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"
            }],
            ["path", {
                d: "M11.47 4.53 13 3l1.53 1.53a3.5 3.5 0 0 1 0 4.94L13 11l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"
            }],
            ["path", {
                d: "M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z"
            }],
            ["path", {
                d: "M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z"
            }],
            ["path", {
                d: "M15.47 13.47 17 15l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z"
            }],
            ["path", {
                d: "M19.47 9.47 21 11l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L13 11l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z"
            }]
        ]],
        Uo = ["svg", h, [
            ["circle", {
                cx: "7",
                cy: "12",
                r: "3"
            }],
            ["path", {
                d: "M10 9v6"
            }],
            ["circle", {
                cx: "17",
                cy: "12",
                r: "3"
            }],
            ["path", {
                d: "M14 7v8"
            }],
            ["path", {
                d: "M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1"
            }]
        ]],
        Oo = ["svg", h, [
            ["line", {
                x1: "2",
                x2: "22",
                y1: "2",
                y2: "22"
            }],
            ["path", {
                d: "M8.5 16.5a5 5 0 0 1 7 0"
            }],
            ["path", {
                d: "M2 8.82a15 15 0 0 1 4.17-2.65"
            }],
            ["path", {
                d: "M10.66 5c4.01-.36 8.14.9 11.34 3.76"
            }],
            ["path", {
                d: "M16.85 11.25a10 10 0 0 1 2.22 1.68"
            }],
            ["path", {
                d: "M5 13a10 10 0 0 1 5.24-2.76"
            }],
            ["line", {
                x1: "12",
                x2: "12.01",
                y1: "20",
                y2: "20"
            }]
        ]],
        qo = ["svg", h, [
            ["path", {
                d: "M5 13a10 10 0 0 1 14 0"
            }],
            ["path", {
                d: "M8.5 16.5a5 5 0 0 1 7 0"
            }],
            ["path", {
                d: "M2 8.82a15 15 0 0 1 20 0"
            }],
            ["line", {
                x1: "12",
                x2: "12.01",
                y1: "20",
                y2: "20"
            }]
        ]],
        Go = ["svg", h, [
            ["path", {
                d: "M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2"
            }],
            ["path", {
                d: "M9.6 4.6A2 2 0 1 1 11 8H2"
            }],
            ["path", {
                d: "M12.6 19.4A2 2 0 1 0 14 16H2"
            }]
        ]],
        Wo = ["svg", h, [
            ["path", {
                d: "M8 22h8"
            }],
            ["path", {
                d: "M7 10h3m7 0h-1.343"
            }],
            ["path", {
                d: "M12 15v7"
            }],
            ["path", {
                d: "M7.307 7.307A12.33 12.33 0 0 0 7 10a5 5 0 0 0 7.391 4.391M8.638 2.981C8.75 2.668 8.872 2.34 9 2h6c1.5 4 2 6 2 8 0 .407-.05.809-.145 1.198"
            }],
            ["line", {
                x1: "2",
                x2: "22",
                y1: "2",
                y2: "22"
            }]
        ]],
        Eo = ["svg", h, [
            ["path", {
                d: "M8 22h8"
            }],
            ["path", {
                d: "M7 10h10"
            }],
            ["path", {
                d: "M12 15v7"
            }],
            ["path", {
                d: "M12 15a5 5 0 0 0 5-5c0-2-.5-4-2-8H9c-1.5 4-2 6-2 8a5 5 0 0 0 5 5Z"
            }]
        ]],
        Io = ["svg", h, [
            ["rect", {
                width: "8",
                height: "8",
                x: "3",
                y: "3",
                rx: "2"
            }],
            ["path", {
                d: "M7 11v4a2 2 0 0 0 2 2h4"
            }],
            ["rect", {
                width: "8",
                height: "8",
                x: "13",
                y: "13",
                rx: "2"
            }]
        ]],
        Xo = ["svg", h, [
            ["line", {
                x1: "3",
                x2: "21",
                y1: "6",
                y2: "6"
            }],
            ["path", {
                d: "M3 12h15a3 3 0 1 1 0 6h-4"
            }],
            ["polyline", {
                points: "16 16 14 18 16 20"
            }],
            ["line", {
                x1: "3",
                x2: "10",
                y1: "18",
                y2: "18"
            }]
        ]],
        No = ["svg", h, [
            ["path", {
                d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
            }]
        ]],
        Ko = ["svg", h, [
            ["circle", {
                cx: "12",
                cy: "12",
                r: "10"
            }],
            ["path", {
                d: "m15 9-6 6"
            }],
            ["path", {
                d: "m9 9 6 6"
            }]
        ]],
        Jo = ["svg", h, [
            ["polygon", {
                points: "7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"
            }],
            ["path", {
                d: "m15 9-6 6"
            }],
            ["path", {
                d: "m9 9 6 6"
            }]
        ]],
        jo = ["svg", h, [
            ["rect", {
                width: "18",
                height: "18",
                x: "3",
                y: "3",
                rx: "2",
                ry: "2"
            }],
            ["path", {
                d: "m15 9-6 6"
            }],
            ["path", {
                d: "m9 9 6 6"
            }]
        ]],
        Qo = ["svg", h, [
            ["path", {
                d: "M18 6 6 18"
            }],
            ["path", {
                d: "m6 6 12 12"
            }]
        ]],
        Yo = ["svg", h, [
            ["path", {
                d: "M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"
            }],
            ["path", {
                d: "m10 15 5-3-5-3z"
            }]
        ]],
        _o = ["svg", h, [
            ["polyline", {
                points: "12.41 6.75 13 2 10.57 4.92"
            }],
            ["polyline", {
                points: "18.57 12.91 21 10 15.66 10"
            }],
            ["polyline", {
                points: "8 8 3 14 12 14 11 22 16 16"
            }],
            ["line", {
                x1: "2",
                x2: "22",
                y1: "2",
                y2: "22"
            }]
        ]],
        as = ["svg", h, [
            ["polygon", {
                points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2"
            }]
        ]],
        hs = ["svg", h, [
            ["circle", {
                cx: "11",
                cy: "11",
                r: "8"
            }],
            ["line", {
                x1: "21",
                x2: "16.65",
                y1: "21",
                y2: "16.65"
            }],
            ["line", {
                x1: "11",
                x2: "11",
                y1: "8",
                y2: "14"
            }],
            ["line", {
                x1: "8",
                x2: "14",
                y1: "11",
                y2: "11"
            }]
        ]],
        ts = ["svg", h, [
            ["circle", {
                cx: "11",
                cy: "11",
                r: "8"
            }],
            ["line", {
                x1: "21",
                x2: "16.65",
                y1: "21",
                y2: "16.65"
            }],
            ["line", {
                x1: "8",
                x2: "14",
                y1: "11",
                y2: "11"
            }]
        ]];
    var ds = Object.freeze({
        __proto__: null,
        Accessibility: v,
        Activity: s,
        ActivitySquare: o,
        AirVent: g,
        Airplay: r,
        AlarmCheck: y,
        AlarmClock: m,
        AlarmClockOff: $,
        AlarmMinus: H,
        AlarmPlus: C,
        Album: u,
        AlertCircle: V,
        AlertOctagon: w,
        AlertTriangle: x,
        AlignCenter: A,
        AlignCenterHorizontal: L,
        AlignCenterVertical: S,
        AlignEndHorizontal: f,
        AlignEndVertical: k,
        AlignHorizontalDistributeCenter: F,
        AlignHorizontalDistributeEnd: Z,
        AlignHorizontalDistributeStart: P,
        AlignHorizontalJustifyCenter: B,
        AlignHorizontalJustifyEnd: D,
        AlignHorizontalJustifyStart: T,
        AlignHorizontalSpaceAround: z,
        AlignHorizontalSpaceBetween: R,
        AlignJustify: b,
        AlignLeft: U,
        AlignRight: O,
        AlignStartHorizontal: q,
        AlignStartVertical: G,
        AlignVerticalDistributeCenter: W,
        AlignVerticalDistributeEnd: E,
        AlignVerticalDistributeStart: I,
        AlignVerticalJustifyCenter: X,
        AlignVerticalJustifyEnd: N,
        AlignVerticalJustifyStart: K,
        AlignVerticalSpaceAround: J,
        AlignVerticalSpaceBetween: j,
        Ampersand: Q,
        Ampersands: Y,
        Anchor: _,
        Angry: a1,
        Annoyed: h1,
        Antenna: t1,
        Aperture: d1,
        AppWindow: c1,
        Apple: n1,
        Archive: e1,
        ArchiveRestore: i1,
        ArchiveX: p1,
        AreaChart: M1,
        Armchair: l1,
        ArrowBigDown: o1,
        ArrowBigDownDash: v1,
        ArrowBigLeft: g1,
        ArrowBigLeftDash: s1,
        ArrowBigRight: y1,
        ArrowBigRightDash: r1,
        ArrowBigUp: m1,
        ArrowBigUpDash: $1,
        ArrowDown: R1,
        ArrowDown01: H1,
        ArrowDown10: C1,
        ArrowDownAZ: u1,
        ArrowDownCircle: V1,
        ArrowDownFromLine: w1,
        ArrowDownLeft: S1,
        ArrowDownLeftFromCircle: x1,
        ArrowDownLeftSquare: L1,
        ArrowDownNarrowWide: A1,
        ArrowDownRight: F1,
        ArrowDownRightFromCircle: f1,
        ArrowDownRightSquare: k1,
        ArrowDownSquare: Z1,
        ArrowDownToDot: P1,
        ArrowDownToLine: B1,
        ArrowDownUp: D1,
        ArrowDownWideNarrow: T1,
        ArrowDownZA: z1,
        ArrowLeft: W1,
        ArrowLeftCircle: b1,
        ArrowLeftFromLine: U1,
        ArrowLeftRight: O1,
        ArrowLeftSquare: q1,
        ArrowLeftToLine: G1,
        ArrowRight: J1,
        ArrowRightCircle: E1,
        ArrowRightFromLine: I1,
        ArrowRightLeft: X1,
        ArrowRightSquare: N1,
        ArrowRightToLine: K1,
        ArrowUp: g2,
        ArrowUp01: j1,
        ArrowUp10: Q1,
        ArrowUpAZ: Y1,
        ArrowUpCircle: _1,
        ArrowUpDown: a2,
        ArrowUpFromDot: h2,
        ArrowUpFromLine: t2,
        ArrowUpLeft: n2,
        ArrowUpLeftFromCircle: d2,
        ArrowUpLeftSquare: c2,
        ArrowUpNarrowWide: i2,
        ArrowUpRight: M2,
        ArrowUpRightFromCircle: p2,
        ArrowUpRightSquare: e2,
        ArrowUpSquare: l2,
        ArrowUpToLine: v2,
        ArrowUpWideNarrow: o2,
        ArrowUpZA: s2,
        ArrowsUpFromLine: r2,
        Asterisk: y2,
        AtSign: $2,
        Atom: m2,
        Award: H2,
        Axe: C2,
        Axis3d: u2,
        Baby: V2,
        Backpack: w2,
        Badge: O2,
        BadgeAlert: x2,
        BadgeCent: L2,
        BadgeCheck: S2,
        BadgeDollarSign: A2,
        BadgeEuro: f2,
        BadgeHelp: k2,
        BadgeIndianRupee: F2,
        BadgeInfo: Z2,
        BadgeJapaneseYen: P2,
        BadgeMinus: B2,
        BadgePercent: D2,
        BadgePlus: T2,
        BadgePoundSterling: z2,
        BadgeRussianRuble: R2,
        BadgeSwissFranc: b2,
        BadgeX: U2,
        BaggageClaim: q2,
        Ban: G2,
        Banana: W2,
        Banknote: E2,
        BarChart: Q2,
        BarChart2: I2,
        BarChart3: X2,
        BarChart4: N2,
        BarChartBig: K2,
        BarChartHorizontal: j2,
        BarChartHorizontalBig: J2,
        Barcode: Y2,
        Baseline: _2,
        Bath: a0,
        Battery: i0,
        BatteryCharging: h0,
        BatteryFull: t0,
        BatteryLow: d0,
        BatteryMedium: c0,
        BatteryWarning: n0,
        Beaker: p0,
        Bean: M0,
        BeanOff: e0,
        Bed: o0,
        BedDouble: l0,
        BedSingle: v0,
        Beef: s0,
        Beer: g0,
        Bell: C0,
        BellDot: r0,
        BellMinus: y0,
        BellOff: $0,
        BellPlus: m0,
        BellRing: H0,
        Bike: u0,
        Binary: V0,
        Biohazard: w0,
        Bird: x0,
        Bitcoin: L0,
        Blinds: S0,
        Blocks: A0,
        Bluetooth: Z0,
        BluetoothConnected: f0,
        BluetoothOff: k0,
        BluetoothSearching: F0,
        Bold: P0,
        Bomb: B0,
        Bone: D0,
        Book: K0,
        BookCopy: T0,
        BookDown: z0,
        BookKey: R0,
        BookLock: b0,
        BookMarked: U0,
        BookMinus: O0,
        BookOpen: G0,
        BookOpenCheck: q0,
        BookPlus: W0,
        BookTemplate: E0,
        BookUp: X0,
        BookUp2: I0,
        BookX: N0,
        Bookmark: _0,
        BookmarkCheck: J0,
        BookmarkMinus: j0,
        BookmarkPlus: Q0,
        BookmarkX: Y0,
        BoomBox: aa,
        Bot: ha,
        Box: da,
        BoxSelect: ta,
        Boxes: ca,
        Braces: na,
        Brackets: ia,
        Brain: Ma,
        BrainCircuit: pa,
        BrainCog: ea,
        Briefcase: la,
        BringToFront: va,
        Brush: oa,
        Bug: ra,
        BugOff: sa,
        BugPlay: ga,
        Building: $a,
        Building2: ya,
        Bus: Ha,
        BusFront: ma,
        Cable: ua,
        CableCar: Ca,
        Cake: wa,
        CakeSlice: Va,
        Calculator: xa,
        Calendar: Ra,
        CalendarCheck: Sa,
        CalendarCheck2: La,
        CalendarClock: Aa,
        CalendarDays: fa,
        CalendarHeart: ka,
        CalendarMinus: Fa,
        CalendarOff: Za,
        CalendarPlus: Pa,
        CalendarRange: Ba,
        CalendarSearch: Da,
        CalendarX: za,
        CalendarX2: Ta,
        Camera: Ua,
        CameraOff: ba,
        CandlestickChart: Oa,
        Candy: Wa,
        CandyCane: qa,
        CandyOff: Ga,
        Car: Xa,
        CarFront: Ea,
        CarTaxiFront: Ia,
        Caravan: Na,
        Carrot: Ka,
        CaseLower: Ja,
        CaseSensitive: ja,
        CaseUpper: Qa,
        CassetteTape: Ya,
        Cast: _a,
        Castle: ah,
        Cat: hh,
        Check: ih,
        CheckCheck: th,
        CheckCircle: ch,
        CheckCircle2: dh,
        CheckSquare: nh,
        ChefHat: ph,
        Cherry: eh,
        ChevronDown: vh,
        ChevronDownCircle: Mh,
        ChevronDownSquare: lh,
        ChevronFirst: oh,
        ChevronLast: sh,
        ChevronLeft: yh,
        ChevronLeftCircle: gh,
        ChevronLeftSquare: rh,
        ChevronRight: Hh,
        ChevronRightCircle: $h,
        ChevronRightSquare: mh,
        ChevronUp: Vh,
        ChevronUpCircle: Ch,
        ChevronUpSquare: uh,
        ChevronsDown: xh,
        ChevronsDownUp: wh,
        ChevronsLeft: Sh,
        ChevronsLeftRight: Lh,
        ChevronsRight: fh,
        ChevronsRightLeft: Ah,
        ChevronsUp: Fh,
        ChevronsUpDown: kh,
        Chrome: Zh,
        Church: Ph,
        Cigarette: Dh,
        CigaretteOff: Bh,
        Circle: Eh,
        CircleDashed: Th,
        CircleDollarSign: zh,
        CircleDot: bh,
        CircleDotDashed: Rh,
        CircleEllipsis: Uh,
        CircleEqual: Oh,
        CircleOff: qh,
        CircleSlash: Wh,
        CircleSlash2: Gh,
        CircuitBoard: Ih,
        Citrus: Xh,
        Clapperboard: Nh,
        Clipboard: tt,
        ClipboardCheck: Kh,
        ClipboardCopy: Jh,
        ClipboardEdit: jh,
        ClipboardList: Qh,
        ClipboardPaste: Yh,
        ClipboardSignature: _h,
        ClipboardType: at,
        ClipboardX: ht,
        Clock: rt,
        Clock1: dt,
        Clock10: ct,
        Clock11: nt,
        Clock12: it,
        Clock2: pt,
        Clock3: et,
        Clock4: Mt,
        Clock5: lt,
        Clock6: vt,
        Clock7: ot,
        Clock8: st,
        Clock9: gt,
        Cloud: kt,
        CloudCog: yt,
        CloudDrizzle: $t,
        CloudFog: mt,
        CloudHail: Ht,
        CloudLightning: Ct,
        CloudMoon: Vt,
        CloudMoonRain: ut,
        CloudOff: wt,
        CloudRain: Lt,
        CloudRainWind: xt,
        CloudSnow: St,
        CloudSun: ft,
        CloudSunRain: At,
        Cloudy: Ft,
        Clover: Zt,
        Club: Pt,
        Code: Dt,
        Code2: Bt,
        Codepen: Tt,
        Codesandbox: zt,
        Coffee: Rt,
        Cog: bt,
        Coins: Ut,
        Columns: Ot,
        Combine: qt,
        Command: Gt,
        Compass: Wt,
        Component: Et,
        Computer: It,
        ConciergeBell: Xt,
        Cone: Nt,
        Construction: Kt,
        Contact: jt,
        Contact2: Jt,
        Container: Qt,
        Contrast: Yt,
        Cookie: _t,
        Copy: n4,
        CopyCheck: a4,
        CopyMinus: h4,
        CopyPlus: t4,
        CopySlash: d4,
        CopyX: c4,
        Copyleft: i4,
        Copyright: p4,
        CornerDownLeft: e4,
        CornerDownRight: M4,
        CornerLeftDown: l4,
        CornerLeftUp: v4,
        CornerRightDown: o4,
        CornerRightUp: s4,
        CornerUpLeft: g4,
        CornerUpRight: r4,
        Cpu: y4,
        CreativeCommons: $4,
        CreditCard: m4,
        Croissant: H4,
        Crop: C4,
        Cross: u4,
        Crosshair: V4,
        Crown: w4,
        Cuboid: x4,
        CupSoda: L4,
        Currency: S4,
        Cylinder: A4,
        Database: F4,
        DatabaseBackup: f4,
        DatabaseZap: k4,
        Delete: Z4,
        Dessert: P4,
        Diameter: B4,
        Diamond: D4,
        Dice1: T4,
        Dice2: z4,
        Dice3: R4,
        Dice4: b4,
        Dice5: U4,
        Dice6: O4,
        Dices: q4,
        Diff: G4,
        Disc: I4,
        Disc2: W4,
        Disc3: E4,
        Divide: K4,
        DivideCircle: X4,
        DivideSquare: N4,
        Dna: j4,
        DnaOff: J4,
        Dog: Q4,
        DollarSign: Y4,
        Donut: _4,
        DoorClosed: a5,
        DoorOpen: h5,
        Dot: t5,
        Download: c5,
        DownloadCloud: d5,
        DraftingCompass: n5,
        Drama: i5,
        Dribbble: p5,
        Droplet: e5,
        Droplets: M5,
        Drumstick: l5,
        Dumbbell: v5,
        Ear: s5,
        EarOff: o5,
        Egg: y5,
        EggFried: g5,
        EggOff: r5,
        Equal: m5,
        EqualNot: $5,
        Eraser: H5,
        Euro: C5,
        Expand: u5,
        ExternalLink: V5,
        Eye: x5,
        EyeOff: w5,
        Facebook: L5,
        Factory: S5,
        Fan: A5,
        FastForward: f5,
        Feather: k5,
        FerrisWheel: F5,
        Figma: Z5,
        File: B3,
        FileArchive: P5,
        FileAudio: D5,
        FileAudio2: B5,
        FileAxis3d: T5,
        FileBadge: R5,
        FileBadge2: z5,
        FileBarChart: U5,
        FileBarChart2: b5,
        FileBox: O5,
        FileCheck: G5,
        FileCheck2: q5,
        FileClock: W5,
        FileCode: I5,
        FileCode2: E5,
        FileCog: X5,
        FileDiff: N5,
        FileDigit: K5,
        FileDown: J5,
        FileEdit: j5,
        FileHeart: Q5,
        FileImage: Y5,
        FileInput: _5,
        FileJson: h3,
        FileJson2: a3,
        FileKey: d3,
        FileKey2: t3,
        FileLineChart: c3,
        FileLock: i3,
        FileLock2: n3,
        FileMinus: e3,
        FileMinus2: p3,
        FileOutput: M3,
        FilePieChart: l3,
        FilePlus: o3,
        FilePlus2: v3,
        FileQuestion: s3,
        FileScan: g3,
        FileSearch: y3,
        FileSearch2: r3,
        FileSignature: $3,
        FileSpreadsheet: m3,
        FileStack: H3,
        FileSymlink: C3,
        FileTerminal: u3,
        FileText: V3,
        FileType: x3,
        FileType2: w3,
        FileUp: L3,
        FileVideo: A3,
        FileVideo2: S3,
        FileVolume: k3,
        FileVolume2: f3,
        FileWarning: F3,
        FileX: P3,
        FileX2: Z3,
        Files: D3,
        Film: T3,
        Filter: R3,
        FilterX: z3,
        Fingerprint: b3,
        Fish: q3,
        FishOff: U3,
        FishSymbol: O3,
        Flag: I3,
        FlagOff: G3,
        FlagTriangleLeft: W3,
        FlagTriangleRight: E3,
        Flame: N3,
        FlameKindling: X3,
        Flashlight: J3,
        FlashlightOff: K3,
        FlaskConical: Q3,
        FlaskConicalOff: j3,
        FlaskRound: Y3,
        FlipHorizontal: ad,
        FlipHorizontal2: _3,
        FlipVertical: td,
        FlipVertical2: hd,
        Flower: cd,
        Flower2: dd,
        Focus: nd,
        FoldHorizontal: id,
        FoldVertical: pd,
        Folder: zd,
        FolderArchive: ed,
        FolderCheck: Md,
        FolderClock: ld,
        FolderClosed: vd,
        FolderCog: od,
        FolderDot: sd,
        FolderDown: gd,
        FolderEdit: rd,
        FolderGit: $d,
        FolderGit2: yd,
        FolderHeart: md,
        FolderInput: Hd,
        FolderKanban: Cd,
        FolderKey: ud,
        FolderLock: Vd,
        FolderMinus: wd,
        FolderOpen: Ld,
        FolderOpenDot: xd,
        FolderOutput: Sd,
        FolderPlus: Ad,
        FolderRoot: fd,
        FolderSearch: Fd,
        FolderSearch2: kd,
        FolderSymlink: Zd,
        FolderSync: Pd,
        FolderTree: Bd,
        FolderUp: Dd,
        FolderX: Td,
        Folders: Rd,
        Footprints: bd,
        Forklift: Ud,
        FormInput: Od,
        Forward: qd,
        Frame: Gd,
        Framer: Wd,
        Frown: Ed,
        Fuel: Id,
        Fullscreen: Xd,
        FunctionSquare: Nd,
        GalleryHorizontal: Jd,
        GalleryHorizontalEnd: Kd,
        GalleryThumbnails: jd,
        GalleryVertical: Yd,
        GalleryVerticalEnd: Qd,
        Gamepad: ac,
        Gamepad2: _d,
        GanttChart: tc,
        GanttChartSquare: hc,
        Gauge: cc,
        GaugeCircle: dc,
        Gavel: nc,
        Gem: ic,
        Ghost: pc,
        Gift: ec,
        GitBranch: lc,
        GitBranchPlus: Mc,
        GitCommit: vc,
        GitCompare: oc,
        GitFork: sc,
        GitMerge: gc,
        GitPullRequest: $c,
        GitPullRequestClosed: rc,
        GitPullRequestDraft: yc,
        Github: mc,
        Gitlab: Hc,
        GlassWater: Cc,
        Glasses: uc,
        Globe: wc,
        Globe2: Vc,
        Goal: xc,
        Grab: Lc,
        GraduationCap: Sc,
        Grape: Ac,
        Grid2x2: fc,
        Grid3x3: kc,
        Grip: Pc,
        GripHorizontal: Fc,
        GripVertical: Zc,
        Group: Bc,
        Hammer: Dc,
        Hand: zc,
        HandMetal: Tc,
        HardDrive: Uc,
        HardDriveDownload: Rc,
        HardDriveUpload: bc,
        HardHat: Oc,
        Hash: qc,
        Haze: Gc,
        HdmiPort: Wc,
        Heading: jc,
        Heading1: Ec,
        Heading2: Ic,
        Heading3: Xc,
        Heading4: Nc,
        Heading5: Kc,
        Heading6: Jc,
        Headphones: Qc,
        Heart: t6,
        HeartCrack: Yc,
        HeartHandshake: _c,
        HeartOff: a6,
        HeartPulse: h6,
        HelpCircle: d6,
        HelpingHand: c6,
        Hexagon: n6,
        Highlighter: i6,
        History: p6,
        Home: e6,
        Hop: l6,
        HopOff: M6,
        Hotel: v6,
        Hourglass: o6,
        IceCream: g6,
        IceCream2: s6,
        Image: m6,
        ImageMinus: r6,
        ImageOff: y6,
        ImagePlus: $6,
        Import: H6,
        Inbox: C6,
        Indent: u6,
        IndianRupee: V6,
        Infinity: w6,
        Info: x6,
        Instagram: L6,
        Italic: S6,
        IterationCcw: A6,
        IterationCw: f6,
        JapaneseYen: k6,
        Joystick: F6,
        Kanban: B6,
        KanbanSquare: P6,
        KanbanSquareDashed: Z6,
        Key: z6,
        KeyRound: D6,
        KeySquare: T6,
        Keyboard: R6,
        Lamp: W6,
        LampCeiling: b6,
        LampDesk: U6,
        LampFloor: O6,
        LampWallDown: q6,
        LampWallUp: G6,
        LandPlot: E6,
        Landmark: I6,
        Languages: X6,
        Laptop: K6,
        Laptop2: N6,
        Lasso: j6,
        LassoSelect: J6,
        Laugh: Q6,
        Layers: a8,
        Layers2: Y6,
        Layers3: _6,
        Layout: p8,
        LayoutDashboard: h8,
        LayoutGrid: t8,
        LayoutList: d8,
        LayoutPanelLeft: c8,
        LayoutPanelTop: n8,
        LayoutTemplate: i8,
        Leaf: e8,
        LeafyGreen: M8,
        Library: l8,
        LifeBuoy: v8,
        Ligature: o8,
        Lightbulb: g8,
        LightbulbOff: s8,
        LineChart: r8,
        Link: m8,
        Link2: $8,
        Link2Off: y8,
        Linkedin: H8,
        List: B8,
        ListChecks: C8,
        ListEnd: u8,
        ListFilter: V8,
        ListMinus: w8,
        ListMusic: x8,
        ListOrdered: L8,
        ListPlus: S8,
        ListRestart: A8,
        ListStart: f8,
        ListTodo: k8,
        ListTree: F8,
        ListVideo: Z8,
        ListX: P8,
        Loader: T8,
        Loader2: D8,
        Locate: b8,
        LocateFixed: z8,
        LocateOff: R8,
        Lock: O8,
        LockKeyhole: U8,
        LogIn: q8,
        LogOut: G8,
        Lollipop: W8,
        Luggage: E8,
        MSquare: I8,
        Magnet: X8,
        Mail: h7,
        MailCheck: N8,
        MailMinus: K8,
        MailOpen: J8,
        MailPlus: j8,
        MailQuestion: Q8,
        MailSearch: Y8,
        MailWarning: _8,
        MailX: a7,
        Mailbox: t7,
        Mails: d7,
        Map: i7,
        MapPin: n7,
        MapPinOff: c7,
        Martini: p7,
        Maximize: M7,
        Maximize2: e7,
        Medal: l7,
        Megaphone: o7,
        MegaphoneOff: v7,
        Meh: s7,
        MemoryStick: g7,
        Menu: y7,
        MenuSquare: r7,
        Merge: $7,
        MessageCircle: m7,
        MessageSquare: u7,
        MessageSquareDashed: H7,
        MessageSquarePlus: C7,
        MessagesSquare: V7,
        Mic: L7,
        Mic2: w7,
        MicOff: x7,
        Microscope: S7,
        Microwave: A7,
        Milestone: f7,
        Milk: F7,
        MilkOff: k7,
        Minimize: P7,
        Minimize2: Z7,
        Minus: T7,
        MinusCircle: B7,
        MinusSquare: D7,
        Monitor: N7,
        MonitorCheck: z7,
        MonitorDot: R7,
        MonitorDown: b7,
        MonitorOff: U7,
        MonitorPause: O7,
        MonitorPlay: q7,
        MonitorSmartphone: G7,
        MonitorSpeaker: W7,
        MonitorStop: E7,
        MonitorUp: I7,
        MonitorX: X7,
        Moon: J7,
        MoonStar: K7,
        MoreHorizontal: j7,
        MoreVertical: Q7,
        Mountain: _7,
        MountainSnow: Y7,
        Mouse: nn,
        MousePointer: cn,
        MousePointer2: an,
        MousePointerClick: hn,
        MousePointerSquare: dn,
        MousePointerSquareDashed: tn,
        Move: Cn,
        Move3d: pn,
        MoveDiagonal: Mn,
        MoveDiagonal2: en,
        MoveDown: on,
        MoveDownLeft: ln,
        MoveDownRight: vn,
        MoveHorizontal: sn,
        MoveLeft: gn,
        MoveRight: rn,
        MoveUp: mn,
        MoveUpLeft: yn,
        MoveUpRight: $n,
        MoveVertical: Hn,
        Music: xn,
        Music2: un,
        Music3: Vn,
        Music4: wn,
        Navigation: fn,
        Navigation2: Sn,
        Navigation2Off: Ln,
        NavigationOff: An,
        Network: kn,
        Newspaper: Fn,
        Nfc: Zn,
        Nut: Bn,
        NutOff: Pn,
        Octagon: Dn,
        Option: Tn,
        Orbit: zn,
        Outdent: Rn,
        Package: In,
        Package2: bn,
        PackageCheck: Un,
        PackageMinus: On,
        PackageOpen: qn,
        PackagePlus: Gn,
        PackageSearch: Wn,
        PackageX: En,
        PaintBucket: Xn,
        Paintbrush: Kn,
        Paintbrush2: Nn,
        Palette: Jn,
        Palmtree: jn,
        PanelBottom: ai,
        PanelBottomClose: Qn,
        PanelBottomInactive: Yn,
        PanelBottomOpen: _n,
        PanelLeft: ci,
        PanelLeftClose: hi,
        PanelLeftInactive: ti,
        PanelLeftOpen: di,
        PanelRight: ei,
        PanelRightClose: ni,
        PanelRightInactive: ii,
        PanelRightOpen: pi,
        PanelTop: oi,
        PanelTopClose: Mi,
        PanelTopInactive: li,
        PanelTopOpen: vi,
        Paperclip: si,
        Parentheses: gi,
        ParkingCircle: yi,
        ParkingCircleOff: ri,
        ParkingMeter: $i,
        ParkingSquare: Hi,
        ParkingSquareOff: mi,
        PartyPopper: Ci,
        Pause: wi,
        PauseCircle: ui,
        PauseOctagon: Vi,
        PawPrint: xi,
        PcCase: Li,
        Pen: ki,
        PenLine: Si,
        PenSquare: Ai,
        PenTool: fi,
        Pencil: Pi,
        PencilLine: Fi,
        PencilRuler: Zi,
        Pentagon: Bi,
        Percent: Ri,
        PercentCircle: Di,
        PercentDiamond: Ti,
        PercentSquare: zi,
        PersonStanding: bi,
        Phone: Ii,
        PhoneCall: Ui,
        PhoneForwarded: Oi,
        PhoneIncoming: qi,
        PhoneMissed: Gi,
        PhoneOff: Wi,
        PhoneOutgoing: Ei,
        Pi: Ni,
        PiSquare: Xi,
        PictureInPicture: Ji,
        PictureInPicture2: Ki,
        PieChart: ji,
        PiggyBank: Qi,
        Pilcrow: _i,
        PilcrowSquare: Yi,
        Pill: ap,
        Pin: tp,
        PinOff: hp,
        Pipette: dp,
        Pizza: cp,
        Plane: pp,
        PlaneLanding: np,
        PlaneTakeoff: ip,
        Play: lp,
        PlayCircle: ep,
        PlaySquare: Mp,
        Plug: gp,
        Plug2: vp,
        PlugZap: sp,
        PlugZap2: op,
        Plus: $p,
        PlusCircle: rp,
        PlusSquare: yp,
        Pocket: Hp,
        PocketKnife: mp,
        Podcast: Cp,
        Pointer: up,
        Popcorn: Vp,
        Popsicle: wp,
        PoundSterling: xp,
        Power: Sp,
        PowerOff: Lp,
        Presentation: Ap,
        Printer: fp,
        Projector: kp,
        Puzzle: Fp,
        Pyramid: Zp,
        QrCode: Pp,
        Quote: Bp,
        Rabbit: Dp,
        Radar: Tp,
        Radiation: zp,
        Radio: Up,
        RadioReceiver: Rp,
        RadioTower: bp,
        Radius: Op,
        RailSymbol: qp,
        Rainbow: Gp,
        Rat: Wp,
        Ratio: Ep,
        Receipt: Ip,
        RectangleHorizontal: Xp,
        RectangleVertical: Np,
        Recycle: Kp,
        Redo: Qp,
        Redo2: Jp,
        RedoDot: jp,
        RefreshCcw: _p,
        RefreshCcwDot: Yp,
        RefreshCw: he,
        RefreshCwOff: ae,
        Refrigerator: te,
        Regex: de,
        RemoveFormatting: ce,
        Repeat: pe,
        Repeat1: ne,
        Repeat2: ie,
        Replace: Me,
        ReplaceAll: ee,
        Reply: ve,
        ReplyAll: le,
        Rewind: oe,
        Rocket: se,
        RockingChair: ge,
        RollerCoaster: re,
        Rotate3d: ye,
        RotateCcw: $e,
        RotateCw: me,
        Router: He,
        Rows: Ce,
        Rss: ue,
        Ruler: Ve,
        RussianRuble: we,
        Sailboat: xe,
        Salad: Le,
        Sandwich: Se,
        Satellite: fe,
        SatelliteDish: Ae,
        Save: Fe,
        SaveAll: ke,
        Scale: Pe,
        Scale3d: Ze,
        Scaling: Be,
        Scan: Oe,
        ScanBarcode: De,
        ScanEye: Te,
        ScanFace: ze,
        ScanLine: Re,
        ScanSearch: be,
        ScanText: Ue,
        ScatterChart: qe,
        School: We,
        School2: Ge,
        Scissors: Ne,
        ScissorsLineDashed: Ee,
        ScissorsSquare: Xe,
        ScissorsSquareDashedBottom: Ie,
        ScreenShare: Je,
        ScreenShareOff: Ke,
        Scroll: Qe,
        ScrollText: je,
        Search: tM,
        SearchCheck: Ye,
        SearchCode: _e,
        SearchSlash: aM,
        SearchX: hM,
        Send: nM,
        SendHorizontal: dM,
        SendToBack: cM,
        SeparatorHorizontal: iM,
        SeparatorVertical: pM,
        Server: vM,
        ServerCog: eM,
        ServerCrash: MM,
        ServerOff: lM,
        Settings: sM,
        Settings2: oM,
        Shapes: gM,
        Share: yM,
        Share2: rM,
        Sheet: $M,
        Shell: mM,
        Shield: kM,
        ShieldAlert: HM,
        ShieldBan: CM,
        ShieldCheck: uM,
        ShieldEllipsis: VM,
        ShieldHalf: wM,
        ShieldMinus: xM,
        ShieldOff: LM,
        ShieldPlus: SM,
        ShieldQuestion: AM,
        ShieldX: fM,
        Ship: ZM,
        ShipWheel: FM,
        Shirt: PM,
        ShoppingBag: BM,
        ShoppingBasket: DM,
        ShoppingCart: TM,
        Shovel: zM,
        ShowerHead: RM,
        Shrink: bM,
        Shrub: UM,
        Shuffle: OM,
        Sigma: GM,
        SigmaSquare: qM,
        Signal: NM,
        SignalHigh: WM,
        SignalLow: EM,
        SignalMedium: IM,
        SignalZero: XM,
        Siren: KM,
        SkipBack: JM,
        SkipForward: jM,
        Skull: QM,
        Slack: YM,
        Slash: _M,
        Slice: al,
        Sliders: tl,
        SlidersHorizontal: hl,
        Smartphone: nl,
        SmartphoneCharging: dl,
        SmartphoneNfc: cl,
        Smile: pl,
        SmilePlus: il,
        Snail: el,
        Snowflake: Ml,
        Sofa: ll,
        Soup: vl,
        Space: ol,
        Spade: sl,
        Sparkle: gl,
        Sparkles: rl,
        Speaker: yl,
        Speech: $l,
        SpellCheck: Hl,
        SpellCheck2: ml,
        Spline: Cl,
        Split: wl,
        SplitSquareHorizontal: ul,
        SplitSquareVertical: Vl,
        SprayCan: xl,
        Sprout: Ll,
        Square: Dl,
        SquareAsterisk: Sl,
        SquareCode: Al,
        SquareDashedBottom: kl,
        SquareDashedBottomCode: fl,
        SquareDot: Fl,
        SquareEqual: Zl,
        SquareSlash: Pl,
        SquareStack: Bl,
        Squirrel: Tl,
        Stamp: zl,
        Star: Ul,
        StarHalf: Rl,
        StarOff: bl,
        StepBack: Ol,
        StepForward: ql,
        Stethoscope: Gl,
        Sticker: Wl,
        StickyNote: El,
        StopCircle: Il,
        Store: Xl,
        StretchHorizontal: Nl,
        StretchVertical: Kl,
        Strikethrough: Jl,
        Subscript: jl,
        Subtitles: Ql,
        Sun: t9,
        SunDim: Yl,
        SunMedium: _l,
        SunMoon: a9,
        SunSnow: h9,
        Sunrise: d9,
        Sunset: c9,
        Superscript: n9,
        SwissFranc: i9,
        SwitchCamera: p9,
        Sword: e9,
        Swords: M9,
        Syringe: l9,
        Table: s9,
        Table2: v9,
        TableProperties: o9,
        Tablet: r9,
        TabletSmartphone: g9,
        Tablets: y9,
        Tag: $9,
        Tags: m9,
        Tally1: H9,
        Tally2: C9,
        Tally3: u9,
        Tally4: V9,
        Tally5: w9,
        Tangent: x9,
        Target: L9,
        Tent: A9,
        TentTree: S9,
        Terminal: k9,
        TerminalSquare: f9,
        TestTube: Z9,
        TestTube2: F9,
        TestTubes: P9,
        Text: R9,
        TextCursor: D9,
        TextCursorInput: B9,
        TextQuote: T9,
        TextSelect: z9,
        Theater: b9,
        Thermometer: q9,
        ThermometerSnowflake: U9,
        ThermometerSun: O9,
        ThumbsDown: G9,
        ThumbsUp: W9,
        Ticket: E9,
        Timer: N9,
        TimerOff: I9,
        TimerReset: X9,
        ToggleLeft: K9,
        ToggleRight: J9,
        Tornado: j9,
        Torus: Q9,
        Touchpad: _9,
        TouchpadOff: Y9,
        TowerControl: av,
        ToyBrick: hv,
        Tractor: tv,
        TrafficCone: dv,
        TrainFront: nv,
        TrainFrontTunnel: cv,
        TrainTrack: iv,
        TramFront: pv,
        Trash: Mv,
        Trash2: ev,
        TreeDeciduous: lv,
        TreePine: vv,
        Trees: ov,
        Trello: sv,
        TrendingDown: gv,
        TrendingUp: rv,
        Triangle: $v,
        TriangleRight: yv,
        Trophy: mv,
        Truck: Hv,
        Turtle: Cv,
        Tv: Vv,
        Tv2: uv,
        Twitch: wv,
        Twitter: xv,
        Type: Lv,
        Umbrella: Sv,
        Underline: Av,
        Undo: Fv,
        Undo2: fv,
        UndoDot: kv,
        UnfoldHorizontal: Zv,
        UnfoldVertical: Pv,
        Ungroup: Bv,
        Unlink: Tv,
        Unlink2: Dv,
        Unlock: Rv,
        UnlockKeyhole: zv,
        Unplug: bv,
        Upload: Ov,
        UploadCloud: Uv,
        Usb: qv,
        User: co,
        User2: Gv,
        UserCheck: Ev,
        UserCheck2: Wv,
        UserCircle: Xv,
        UserCircle2: Iv,
        UserCog: Kv,
        UserCog2: Nv,
        UserMinus: jv,
        UserMinus2: Jv,
        UserPlus: Yv,
        UserPlus2: Qv,
        UserSquare: ao,
        UserSquare2: _v,
        UserX: to,
        UserX2: ho,
        Users: io,
        Users2: no,
        Utensils: eo,
        UtensilsCrossed: po,
        UtilityPole: Mo,
        Variable: lo,
        Vegan: vo,
        VenetianMask: oo,
        Vibrate: go,
        VibrateOff: so,
        Video: yo,
        VideoOff: ro,
        Videotape: $o,
        View: mo,
        Voicemail: Ho,
        Volume: wo,
        Volume1: Co,
        Volume2: uo,
        VolumeX: Vo,
        Vote: xo,
        Wallet: Ao,
        Wallet2: Lo,
        WalletCards: So,
        Wallpaper: fo,
        Wand: Fo,
        Wand2: ko,
        Warehouse: Zo,
        Watch: Po,
        Waves: Bo,
        Webcam: Do,
        Webhook: To,
        Weight: zo,
        Wheat: bo,
        WheatOff: Ro,
        WholeWord: Uo,
        Wifi: qo,
        WifiOff: Oo,
        Wind: Go,
        Wine: Eo,
        WineOff: Wo,
        Workflow: Io,
        WrapText: Xo,
        Wrench: No,
        X: Qo,
        XCircle: Ko,
        XOctagon: Jo,
        XSquare: jo,
        Youtube: Yo,
        Zap: as,
        ZapOff: _o,
        ZoomIn: hs,
        ZoomOut: ts
    });
    const os = ({
        icons: t = ds,
        nameAttr: d = "data-lucide",
        attrs: c = {}
    } = {}) => {
        if (!Object.values(t).length) throw new Error(`Please provide an icons object.
If you want to use all the icons you can import it like:
 \`import { createIcons, icons } from 'lucide';
lucide.createIcons({icons});\``);
        if (typeof document > "u") throw new Error("`createIcons()` only works in a browser environment.");
        const i = document.querySelectorAll(`[${d}]`);
        if (Array.from(i).forEach(n => l(n, {
                nameAttr: d,
                icons: t,
                attrs: c
            })), d === "data-lucide") {
            const n = document.querySelectorAll("[icon-name]");
            n.length > 0 && (console.warn("[Lucide] Some icons were found with the now deprecated icon-name attribute. These will still be replaced for backwards compatibility, but will no longer be supported in v1.0 and you should switch to data-lucide"), Array.from(n).forEach(e => l(e, {
                nameAttr: "icon-name",
                icons: t,
                attrs: c
            })))
        }
    };
    a.Accessibility = v, a.Activity = s, a.ActivitySquare = o, a.AirVent = g, a.Airplay = r, a.AlarmCheck = y, a.AlarmClock = m, a.AlarmClockOff = $, a.AlarmMinus = H, a.AlarmPlus = C, a.Album = u, a.AlertCircle = V, a.AlertOctagon = w, a.AlertTriangle = x, a.AlignCenter = A, a.AlignCenterHorizontal = L, a.AlignCenterVertical = S, a.AlignEndHorizontal = f, a.AlignEndVertical = k, a.AlignHorizontalDistributeCenter = F, a.AlignHorizontalDistributeEnd = Z, a.AlignHorizontalDistributeStart = P, a.AlignHorizontalJustifyCenter = B, a.AlignHorizontalJustifyEnd = D, a.AlignHorizontalJustifyStart = T, a.AlignHorizontalSpaceAround = z, a.AlignHorizontalSpaceBetween = R, a.AlignJustify = b, a.AlignLeft = U, a.AlignRight = O, a.AlignStartHorizontal = q, a.AlignStartVertical = G, a.AlignVerticalDistributeCenter = W, a.AlignVerticalDistributeEnd = E, a.AlignVerticalDistributeStart = I, a.AlignVerticalJustifyCenter = X, a.AlignVerticalJustifyEnd = N, a.AlignVerticalJustifyStart = K, a.AlignVerticalSpaceAround = J, a.AlignVerticalSpaceBetween = j, a.Ampersand = Q, a.Ampersands = Y, a.Anchor = _, a.Angry = a1, a.Annoyed = h1, a.Antenna = t1, a.Aperture = d1, a.AppWindow = c1, a.Apple = n1, a.Archive = e1, a.ArchiveRestore = i1, a.ArchiveX = p1, a.AreaChart = M1, a.Armchair = l1, a.ArrowBigDown = o1, a.ArrowBigDownDash = v1, a.ArrowBigLeft = g1, a.ArrowBigLeftDash = s1, a.ArrowBigRight = y1, a.ArrowBigRightDash = r1, a.ArrowBigUp = m1, a.ArrowBigUpDash = $1, a.ArrowDown = R1, a.ArrowDown01 = H1, a.ArrowDown10 = C1, a.ArrowDownAZ = u1, a.ArrowDownCircle = V1, a.ArrowDownFromLine = w1, a.ArrowDownLeft = S1, a.ArrowDownLeftFromCircle = x1, a.ArrowDownLeftSquare = L1, a.ArrowDownNarrowWide = A1, a.ArrowDownRight = F1, a.ArrowDownRightFromCircle = f1, a.ArrowDownRightSquare = k1, a.ArrowDownSquare = Z1, a.ArrowDownToDot = P1, a.ArrowDownToLine = B1, a.ArrowDownUp = D1, a.ArrowDownWideNarrow = T1, a.ArrowDownZA = z1, a.ArrowLeft = W1, a.ArrowLeftCircle = b1, a.ArrowLeftFromLine = U1, a.ArrowLeftRight = O1, a.ArrowLeftSquare = q1, a.ArrowLeftToLine = G1, a.ArrowRight = J1, a.ArrowRightCircle = E1, a.ArrowRightFromLine = I1, a.ArrowRightLeft = X1, a.ArrowRightSquare = N1, a.ArrowRightToLine = K1, a.ArrowUp = g2, a.ArrowUp01 = j1, a.ArrowUp10 = Q1, a.ArrowUpAZ = Y1, a.ArrowUpCircle = _1, a.ArrowUpDown = a2, a.ArrowUpFromDot = h2, a.ArrowUpFromLine = t2, a.ArrowUpLeft = n2, a.ArrowUpLeftFromCircle = d2, a.ArrowUpLeftSquare = c2, a.ArrowUpNarrowWide = i2, a.ArrowUpRight = M2, a.ArrowUpRightFromCircle = p2, a.ArrowUpRightSquare = e2, a.ArrowUpSquare = l2, a.ArrowUpToLine = v2, a.ArrowUpWideNarrow = o2, a.ArrowUpZA = s2, a.ArrowsUpFromLine = r2, a.Asterisk = y2, a.AtSign = $2, a.Atom = m2, a.Award = H2, a.Axe = C2, a.Axis3d = u2, a.Baby = V2, a.Backpack = w2, a.Badge = O2, a.BadgeAlert = x2, a.BadgeCent = L2, a.BadgeCheck = S2, a.BadgeDollarSign = A2, a.BadgeEuro = f2, a.BadgeHelp = k2, a.BadgeIndianRupee = F2, a.BadgeInfo = Z2, a.BadgeJapaneseYen = P2, a.BadgeMinus = B2, a.BadgePercent = D2, a.BadgePlus = T2, a.BadgePoundSterling = z2, a.BadgeRussianRuble = R2, a.BadgeSwissFranc = b2, a.BadgeX = U2, a.BaggageClaim = q2, a.Ban = G2, a.Banana = W2, a.Banknote = E2, a.BarChart = Q2, a.BarChart2 = I2, a.BarChart3 = X2, a.BarChart4 = N2, a.BarChartBig = K2, a.BarChartHorizontal = j2, a.BarChartHorizontalBig = J2, a.Barcode = Y2, a.Baseline = _2, a.Bath = a0, a.Battery = i0, a.BatteryCharging = h0, a.BatteryFull = t0, a.BatteryLow = d0, a.BatteryMedium = c0, a.BatteryWarning = n0, a.Beaker = p0, a.Bean = M0, a.BeanOff = e0, a.Bed = o0, a.BedDouble = l0, a.BedSingle = v0, a.Beef = s0, a.Beer = g0, a.Bell = C0, a.BellDot = r0, a.BellMinus = y0, a.BellOff = $0, a.BellPlus = m0, a.BellRing = H0, a.Bike = u0, a.Binary = V0, a.Biohazard = w0, a.Bird = x0, a.Bitcoin = L0, a.Blinds = S0, a.Blocks = A0, a.Bluetooth = Z0, a.BluetoothConnected = f0, a.BluetoothOff = k0, a.BluetoothSearching = F0, a.Bold = P0, a.Bomb = B0, a.Bone = D0, a.Book = K0, a.BookCopy = T0, a.BookDown = z0, a.BookKey = R0, a.BookLock = b0, a.BookMarked = U0, a.BookMinus = O0, a.BookOpen = G0, a.BookOpenCheck = q0, a.BookPlus = W0, a.BookTemplate = E0, a.BookUp = X0, a.BookUp2 = I0, a.BookX = N0, a.Bookmark = _0, a.BookmarkCheck = J0, a.BookmarkMinus = j0, a.BookmarkPlus = Q0, a.BookmarkX = Y0, a.BoomBox = aa, a.Bot = ha, a.Box = da, a.BoxSelect = ta, a.Boxes = ca, a.Braces = na, a.Brackets = ia, a.Brain = Ma, a.BrainCircuit = pa, a.BrainCog = ea, a.Briefcase = la, a.BringToFront = va, a.Brush = oa, a.Bug = ra, a.BugOff = sa, a.BugPlay = ga, a.Building = $a, a.Building2 = ya, a.Bus = Ha, a.BusFront = ma, a.Cable = ua, a.CableCar = Ca, a.Cake = wa, a.CakeSlice = Va, a.Calculator = xa, a.Calendar = Ra, a.CalendarCheck = Sa, a.CalendarCheck2 = La, a.CalendarClock = Aa, a.CalendarDays = fa, a.CalendarHeart = ka, a.CalendarMinus = Fa, a.CalendarOff = Za, a.CalendarPlus = Pa, a.CalendarRange = Ba, a.CalendarSearch = Da, a.CalendarX = za, a.CalendarX2 = Ta, a.Camera = Ua, a.CameraOff = ba, a.CandlestickChart = Oa, a.Candy = Wa, a.CandyCane = qa, a.CandyOff = Ga, a.Car = Xa, a.CarFront = Ea, a.CarTaxiFront = Ia, a.Caravan = Na, a.Carrot = Ka, a.CaseLower = Ja, a.CaseSensitive = ja, a.CaseUpper = Qa, a.CassetteTape = Ya, a.Cast = _a, a.Castle = ah, a.Cat = hh, a.Check = ih, a.CheckCheck = th, a.CheckCircle = ch, a.CheckCircle2 = dh, a.CheckSquare = nh, a.ChefHat = ph, a.Cherry = eh, a.ChevronDown = vh, a.ChevronDownCircle = Mh, a.ChevronDownSquare = lh, a.ChevronFirst = oh, a.ChevronLast = sh, a.ChevronLeft = yh, a.ChevronLeftCircle = gh, a.ChevronLeftSquare = rh, a.ChevronRight = Hh, a.ChevronRightCircle = $h, a.ChevronRightSquare = mh, a.ChevronUp = Vh, a.ChevronUpCircle = Ch, a.ChevronUpSquare = uh, a.ChevronsDown = xh, a.ChevronsDownUp = wh, a.ChevronsLeft = Sh, a.ChevronsLeftRight = Lh, a.ChevronsRight = fh, a.ChevronsRightLeft = Ah, a.ChevronsUp = Fh, a.ChevronsUpDown = kh, a.Chrome = Zh, a.Church = Ph, a.Cigarette = Dh, a.CigaretteOff = Bh, a.Circle = Eh, a.CircleDashed = Th, a.CircleDollarSign = zh, a.CircleDot = bh, a.CircleDotDashed = Rh, a.CircleEllipsis = Uh, a.CircleEqual = Oh, a.CircleOff = qh, a.CircleSlash = Wh, a.CircleSlash2 = Gh, a.CircuitBoard = Ih, a.Citrus = Xh, a.Clapperboard = Nh, a.Clipboard = tt, a.ClipboardCheck = Kh, a.ClipboardCopy = Jh, a.ClipboardEdit = jh, a.ClipboardList = Qh, a.ClipboardPaste = Yh, a.ClipboardSignature = _h, a.ClipboardType = at, a.ClipboardX = ht, a.Clock = rt, a.Clock1 = dt, a.Clock10 = ct, a.Clock11 = nt, a.Clock12 = it, a.Clock2 = pt, a.Clock3 = et, a.Clock4 = Mt, a.Clock5 = lt, a.Clock6 = vt, a.Clock7 = ot, a.Clock8 = st, a.Clock9 = gt, a.Cloud = kt, a.CloudCog = yt, a.CloudDrizzle = $t, a.CloudFog = mt, a.CloudHail = Ht, a.CloudLightning = Ct, a.CloudMoon = Vt, a.CloudMoonRain = ut, a.CloudOff = wt, a.CloudRain = Lt, a.CloudRainWind = xt, a.CloudSnow = St, a.CloudSun = ft, a.CloudSunRain = At, a.Cloudy = Ft, a.Clover = Zt, a.Club = Pt, a.Code = Dt, a.Code2 = Bt, a.Codepen = Tt, a.Codesandbox = zt, a.Coffee = Rt, a.Cog = bt, a.Coins = Ut, a.Columns = Ot, a.Combine = qt, a.Command = Gt, a.Compass = Wt, a.Component = Et, a.Computer = It, a.ConciergeBell = Xt, a.Cone = Nt, a.Construction = Kt, a.Contact = jt, a.Contact2 = Jt, a.Container = Qt, a.Contrast = Yt, a.Cookie = _t, a.Copy = n4, a.CopyCheck = a4, a.CopyMinus = h4, a.CopyPlus = t4, a.CopySlash = d4, a.CopyX = c4, a.Copyleft = i4, a.Copyright = p4, a.CornerDownLeft = e4, a.CornerDownRight = M4, a.CornerLeftDown = l4, a.CornerLeftUp = v4, a.CornerRightDown = o4, a.CornerRightUp = s4, a.CornerUpLeft = g4, a.CornerUpRight = r4, a.Cpu = y4, a.CreativeCommons = $4, a.CreditCard = m4, a.Croissant = H4, a.Crop = C4, a.Cross = u4, a.Crosshair = V4, a.Crown = w4, a.Cuboid = x4, a.CupSoda = L4, a.Currency = S4, a.Cylinder = A4, a.Database = F4, a.DatabaseBackup = f4, a.DatabaseZap = k4, a.Delete = Z4, a.Dessert = P4, a.Diameter = B4, a.Diamond = D4, a.Dice1 = T4, a.Dice2 = z4, a.Dice3 = R4, a.Dice4 = b4, a.Dice5 = U4, a.Dice6 = O4, a.Dices = q4, a.Diff = G4, a.Disc = I4, a.Disc2 = W4, a.Disc3 = E4, a.Divide = K4, a.DivideCircle = X4, a.DivideSquare = N4, a.Dna = j4, a.DnaOff = J4, a.Dog = Q4, a.DollarSign = Y4, a.Donut = _4, a.DoorClosed = a5, a.DoorOpen = h5, a.Dot = t5, a.Download = c5, a.DownloadCloud = d5, a.DraftingCompass = n5, a.Drama = i5, a.Dribbble = p5, a.Droplet = e5, a.Droplets = M5, a.Drumstick = l5, a.Dumbbell = v5, a.Ear = s5, a.EarOff = o5, a.Egg = y5, a.EggFried = g5, a.EggOff = r5, a.Equal = m5, a.EqualNot = $5, a.Eraser = H5, a.Euro = C5, a.Expand = u5, a.ExternalLink = V5, a.Eye = x5, a.EyeOff = w5, a.Facebook = L5, a.Factory = S5, a.Fan = A5, a.FastForward = f5, a.Feather = k5, a.FerrisWheel = F5, a.Figma = Z5, a.File = B3, a.FileArchive = P5, a.FileAudio = D5, a.FileAudio2 = B5, a.FileAxis3d = T5, a.FileBadge = R5, a.FileBadge2 = z5, a.FileBarChart = U5, a.FileBarChart2 = b5, a.FileBox = O5, a.FileCheck = G5, a.FileCheck2 = q5, a.FileClock = W5, a.FileCode = I5, a.FileCode2 = E5, a.FileCog = X5, a.FileDiff = N5, a.FileDigit = K5, a.FileDown = J5, a.FileEdit = j5, a.FileHeart = Q5, a.FileImage = Y5, a.FileInput = _5, a.FileJson = h3, a.FileJson2 = a3, a.FileKey = d3, a.FileKey2 = t3, a.FileLineChart = c3, a.FileLock = i3, a.FileLock2 = n3, a.FileMinus = e3, a.FileMinus2 = p3, a.FileOutput = M3, a.FilePieChart = l3, a.FilePlus = o3, a.FilePlus2 = v3, a.FileQuestion = s3, a.FileScan = g3, a.FileSearch = y3, a.FileSearch2 = r3, a.FileSignature = $3, a.FileSpreadsheet = m3, a.FileStack = H3, a.FileSymlink = C3, a.FileTerminal = u3, a.FileText = V3, a.FileType = x3, a.FileType2 = w3, a.FileUp = L3, a.FileVideo = A3, a.FileVideo2 = S3, a.FileVolume = k3, a.FileVolume2 = f3, a.FileWarning = F3, a.FileX = P3, a.FileX2 = Z3, a.Files = D3, a.Film = T3, a.Filter = R3, a.FilterX = z3, a.Fingerprint = b3, a.Fish = q3, a.FishOff = U3, a.FishSymbol = O3, a.Flag = I3, a.FlagOff = G3, a.FlagTriangleLeft = W3, a.FlagTriangleRight = E3, a.Flame = N3, a.FlameKindling = X3, a.Flashlight = J3, a.FlashlightOff = K3, a.FlaskConical = Q3, a.FlaskConicalOff = j3, a.FlaskRound = Y3, a.FlipHorizontal = ad, a.FlipHorizontal2 = _3, a.FlipVertical = td, a.FlipVertical2 = hd, a.Flower = cd, a.Flower2 = dd, a.Focus = nd, a.FoldHorizontal = id, a.FoldVertical = pd, a.Folder = zd, a.FolderArchive = ed, a.FolderCheck = Md, a.FolderClock = ld, a.FolderClosed = vd, a.FolderCog = od, a.FolderDot = sd, a.FolderDown = gd, a.FolderEdit = rd, a.FolderGit = $d, a.FolderGit2 = yd, a.FolderHeart = md, a.FolderInput = Hd, a.FolderKanban = Cd, a.FolderKey = ud, a.FolderLock = Vd, a.FolderMinus = wd, a.FolderOpen = Ld, a.FolderOpenDot = xd, a.FolderOutput = Sd, a.FolderPlus = Ad, a.FolderRoot = fd, a.FolderSearch = Fd, a.FolderSearch2 = kd, a.FolderSymlink = Zd, a.FolderSync = Pd, a.FolderTree = Bd, a.FolderUp = Dd, a.FolderX = Td, a.Folders = Rd, a.Footprints = bd, a.Forklift = Ud, a.FormInput = Od, a.Forward = qd, a.Frame = Gd, a.Framer = Wd, a.Frown = Ed, a.Fuel = Id, a.Fullscreen = Xd, a.FunctionSquare = Nd, a.GalleryHorizontal = Jd, a.GalleryHorizontalEnd = Kd, a.GalleryThumbnails = jd, a.GalleryVertical = Yd, a.GalleryVerticalEnd = Qd, a.Gamepad = ac, a.Gamepad2 = _d, a.GanttChart = tc, a.GanttChartSquare = hc, a.Gauge = cc, a.GaugeCircle = dc, a.Gavel = nc, a.Gem = ic, a.Ghost = pc, a.Gift = ec, a.GitBranch = lc, a.GitBranchPlus = Mc, a.GitCommit = vc, a.GitCompare = oc, a.GitFork = sc, a.GitMerge = gc, a.GitPullRequest = $c, a.GitPullRequestClosed = rc, a.GitPullRequestDraft = yc, a.Github = mc, a.Gitlab = Hc, a.GlassWater = Cc, a.Glasses = uc, a.Globe = wc, a.Globe2 = Vc, a.Goal = xc, a.Grab = Lc, a.GraduationCap = Sc, a.Grape = Ac, a.Grid2x2 = fc, a.Grid3x3 = kc, a.Grip = Pc, a.GripHorizontal = Fc, a.GripVertical = Zc, a.Group = Bc, a.Hammer = Dc, a.Hand = zc, a.HandMetal = Tc, a.HardDrive = Uc, a.HardDriveDownload = Rc, a.HardDriveUpload = bc, a.HardHat = Oc, a.Hash = qc, a.Haze = Gc, a.HdmiPort = Wc, a.Heading = jc, a.Heading1 = Ec, a.Heading2 = Ic, a.Heading3 = Xc, a.Heading4 = Nc, a.Heading5 = Kc, a.Heading6 = Jc, a.Headphones = Qc, a.Heart = t6, a.HeartCrack = Yc, a.HeartHandshake = _c, a.HeartOff = a6, a.HeartPulse = h6, a.HelpCircle = d6, a.HelpingHand = c6, a.Hexagon = n6, a.Highlighter = i6, a.History = p6, a.Home = e6, a.Hop = l6, a.HopOff = M6, a.Hotel = v6, a.Hourglass = o6, a.IceCream = g6, a.IceCream2 = s6, a.Image = m6, a.ImageMinus = r6, a.ImageOff = y6, a.ImagePlus = $6, a.Import = H6, a.Inbox = C6, a.Indent = u6, a.IndianRupee = V6, a.Infinity = w6, a.Info = x6, a.Instagram = L6, a.Italic = S6, a.IterationCcw = A6, a.IterationCw = f6, a.JapaneseYen = k6, a.Joystick = F6, a.Kanban = B6, a.KanbanSquare = P6, a.KanbanSquareDashed = Z6, a.Key = z6, a.KeyRound = D6, a.KeySquare = T6, a.Keyboard = R6, a.Lamp = W6, a.LampCeiling = b6, a.LampDesk = U6, a.LampFloor = O6, a.LampWallDown = q6, a.LampWallUp = G6, a.LandPlot = E6, a.Landmark = I6, a.Languages = X6, a.Laptop = K6, a.Laptop2 = N6, a.Lasso = j6, a.LassoSelect = J6, a.Laugh = Q6, a.Layers = a8, a.Layers2 = Y6, a.Layers3 = _6, a.Layout = p8, a.LayoutDashboard = h8, a.LayoutGrid = t8, a.LayoutList = d8, a.LayoutPanelLeft = c8, a.LayoutPanelTop = n8, a.LayoutTemplate = i8, a.Leaf = e8, a.LeafyGreen = M8, a.Library = l8, a.LifeBuoy = v8, a.Ligature = o8, a.Lightbulb = g8, a.LightbulbOff = s8, a.LineChart = r8, a.Link = m8, a.Link2 = $8, a.Link2Off = y8, a.Linkedin = H8, a.List = B8, a.ListChecks = C8, a.ListEnd = u8, a.ListFilter = V8, a.ListMinus = w8, a.ListMusic = x8, a.ListOrdered = L8, a.ListPlus = S8, a.ListRestart = A8, a.ListStart = f8, a.ListTodo = k8, a.ListTree = F8, a.ListVideo = Z8, a.ListX = P8, a.Loader = T8, a.Loader2 = D8, a.Locate = b8, a.LocateFixed = z8, a.LocateOff = R8, a.Lock = O8, a.LockKeyhole = U8, a.LogIn = q8, a.LogOut = G8, a.Lollipop = W8, a.Luggage = E8, a.MSquare = I8, a.Magnet = X8, a.Mail = h7, a.MailCheck = N8, a.MailMinus = K8, a.MailOpen = J8, a.MailPlus = j8, a.MailQuestion = Q8, a.MailSearch = Y8, a.MailWarning = _8, a.MailX = a7, a.Mailbox = t7, a.Mails = d7, a.Map = i7, a.MapPin = n7, a.MapPinOff = c7, a.Martini = p7, a.Maximize = M7, a.Maximize2 = e7, a.Medal = l7, a.Megaphone = o7, a.MegaphoneOff = v7, a.Meh = s7, a.MemoryStick = g7, a.Menu = y7, a.MenuSquare = r7, a.Merge = $7, a.MessageCircle = m7, a.MessageSquare = u7, a.MessageSquareDashed = H7, a.MessageSquarePlus = C7, a.MessagesSquare = V7, a.Mic = L7, a.Mic2 = w7, a.MicOff = x7, a.Microscope = S7, a.Microwave = A7, a.Milestone = f7, a.Milk = F7, a.MilkOff = k7, a.Minimize = P7, a.Minimize2 = Z7, a.Minus = T7, a.MinusCircle = B7, a.MinusSquare = D7, a.Monitor = N7, a.MonitorCheck = z7, a.MonitorDot = R7, a.MonitorDown = b7, a.MonitorOff = U7, a.MonitorPause = O7, a.MonitorPlay = q7, a.MonitorSmartphone = G7, a.MonitorSpeaker = W7, a.MonitorStop = E7, a.MonitorUp = I7, a.MonitorX = X7, a.Moon = J7, a.MoonStar = K7, a.MoreHorizontal = j7, a.MoreVertical = Q7, a.Mountain = _7, a.MountainSnow = Y7, a.Mouse = nn, a.MousePointer = cn, a.MousePointer2 = an, a.MousePointerClick = hn, a.MousePointerSquare = dn, a.MousePointerSquareDashed = tn, a.Move = Cn, a.Move3d = pn, a.MoveDiagonal = Mn, a.MoveDiagonal2 = en, a.MoveDown = on, a.MoveDownLeft = ln, a.MoveDownRight = vn, a.MoveHorizontal = sn, a.MoveLeft = gn, a.MoveRight = rn, a.MoveUp = mn, a.MoveUpLeft = yn, a.MoveUpRight = $n, a.MoveVertical = Hn, a.Music = xn, a.Music2 = un, a.Music3 = Vn, a.Music4 = wn, a.Navigation = fn, a.Navigation2 = Sn, a.Navigation2Off = Ln, a.NavigationOff = An, a.Network = kn, a.Newspaper = Fn, a.Nfc = Zn, a.Nut = Bn, a.NutOff = Pn, a.Octagon = Dn, a.Option = Tn, a.Orbit = zn, a.Outdent = Rn, a.Package = In, a.Package2 = bn, a.PackageCheck = Un, a.PackageMinus = On, a.PackageOpen = qn, a.PackagePlus = Gn, a.PackageSearch = Wn, a.PackageX = En, a.PaintBucket = Xn, a.Paintbrush = Kn, a.Paintbrush2 = Nn, a.Palette = Jn, a.Palmtree = jn, a.PanelBottom = ai, a.PanelBottomClose = Qn, a.PanelBottomInactive = Yn, a.PanelBottomOpen = _n, a.PanelLeft = ci, a.PanelLeftClose = hi, a.PanelLeftInactive = ti, a.PanelLeftOpen = di, a.PanelRight = ei, a.PanelRightClose = ni, a.PanelRightInactive = ii, a.PanelRightOpen = pi, a.PanelTop = oi, a.PanelTopClose = Mi, a.PanelTopInactive = li, a.PanelTopOpen = vi, a.Paperclip = si, a.Parentheses = gi, a.ParkingCircle = yi, a.ParkingCircleOff = ri, a.ParkingMeter = $i, a.ParkingSquare = Hi, a.ParkingSquareOff = mi, a.PartyPopper = Ci, a.Pause = wi, a.PauseCircle = ui, a.PauseOctagon = Vi, a.PawPrint = xi, a.PcCase = Li, a.Pen = ki, a.PenLine = Si, a.PenSquare = Ai, a.PenTool = fi, a.Pencil = Pi, a.PencilLine = Fi, a.PencilRuler = Zi, a.Pentagon = Bi, a.Percent = Ri, a.PercentCircle = Di, a.PercentDiamond = Ti, a.PercentSquare = zi, a.PersonStanding = bi, a.Phone = Ii, a.PhoneCall = Ui, a.PhoneForwarded = Oi, a.PhoneIncoming = qi, a.PhoneMissed = Gi, a.PhoneOff = Wi, a.PhoneOutgoing = Ei, a.Pi = Ni, a.PiSquare = Xi, a.PictureInPicture = Ji, a.PictureInPicture2 = Ki, a.PieChart = ji, a.PiggyBank = Qi, a.Pilcrow = _i, a.PilcrowSquare = Yi, a.Pill = ap, a.Pin = tp, a.PinOff = hp, a.Pipette = dp, a.Pizza = cp, a.Plane = pp, a.PlaneLanding = np, a.PlaneTakeoff = ip, a.Play = lp, a.PlayCircle = ep, a.PlaySquare = Mp, a.Plug = gp, a.Plug2 = vp, a.PlugZap = sp, a.PlugZap2 = op, a.Plus = $p, a.PlusCircle = rp, a.PlusSquare = yp, a.Pocket = Hp, a.PocketKnife = mp, a.Podcast = Cp, a.Pointer = up, a.Popcorn = Vp, a.Popsicle = wp, a.PoundSterling = xp, a.Power = Sp, a.PowerOff = Lp, a.Presentation = Ap, a.Printer = fp, a.Projector = kp, a.Puzzle = Fp, a.Pyramid = Zp, a.QrCode = Pp, a.Quote = Bp, a.Rabbit = Dp, a.Radar = Tp, a.Radiation = zp, a.Radio = Up, a.RadioReceiver = Rp, a.RadioTower = bp, a.Radius = Op, a.RailSymbol = qp, a.Rainbow = Gp, a.Rat = Wp, a.Ratio = Ep, a.Receipt = Ip, a.RectangleHorizontal = Xp, a.RectangleVertical = Np, a.Recycle = Kp, a.Redo = Qp, a.Redo2 = Jp, a.RedoDot = jp, a.RefreshCcw = _p, a.RefreshCcwDot = Yp, a.RefreshCw = he, a.RefreshCwOff = ae, a.Refrigerator = te, a.Regex = de, a.RemoveFormatting = ce, a.Repeat = pe, a.Repeat1 = ne, a.Repeat2 = ie, a.Replace = Me, a.ReplaceAll = ee, a.Reply = ve, a.ReplyAll = le, a.Rewind = oe, a.Rocket = se, a.RockingChair = ge, a.RollerCoaster = re, a.Rotate3d = ye, a.RotateCcw = $e, a.RotateCw = me, a.Router = He, a.Rows = Ce, a.Rss = ue, a.Ruler = Ve, a.RussianRuble = we, a.Sailboat = xe, a.Salad = Le, a.Sandwich = Se, a.Satellite = fe, a.SatelliteDish = Ae, a.Save = Fe, a.SaveAll = ke, a.Scale = Pe, a.Scale3d = Ze, a.Scaling = Be, a.Scan = Oe, a.ScanBarcode = De, a.ScanEye = Te, a.ScanFace = ze, a.ScanLine = Re, a.ScanSearch = be, a.ScanText = Ue, a.ScatterChart = qe, a.School = We, a.School2 = Ge, a.Scissors = Ne, a.ScissorsLineDashed = Ee, a.ScissorsSquare = Xe, a.ScissorsSquareDashedBottom = Ie, a.ScreenShare = Je, a.ScreenShareOff = Ke, a.Scroll = Qe, a.ScrollText = je, a.Search = tM, a.SearchCheck = Ye, a.SearchCode = _e, a.SearchSlash = aM, a.SearchX = hM, a.Send = nM, a.SendHorizontal = dM, a.SendToBack = cM, a.SeparatorHorizontal = iM, a.SeparatorVertical = pM, a.Server = vM, a.ServerCog = eM, a.ServerCrash = MM, a.ServerOff = lM, a.Settings = sM, a.Settings2 = oM, a.Shapes = gM, a.Share = yM, a.Share2 = rM, a.Sheet = $M, a.Shell = mM, a.Shield = kM, a.ShieldAlert = HM, a.ShieldBan = CM, a.ShieldCheck = uM, a.ShieldEllipsis = VM, a.ShieldHalf = wM, a.ShieldMinus = xM, a.ShieldOff = LM, a.ShieldPlus = SM, a.ShieldQuestion = AM, a.ShieldX = fM, a.Ship = ZM, a.ShipWheel = FM, a.Shirt = PM, a.ShoppingBag = BM, a.ShoppingBasket = DM, a.ShoppingCart = TM, a.Shovel = zM, a.ShowerHead = RM, a.Shrink = bM, a.Shrub = UM, a.Shuffle = OM, a.Sigma = GM, a.SigmaSquare = qM, a.Signal = NM, a.SignalHigh = WM, a.SignalLow = EM, a.SignalMedium = IM, a.SignalZero = XM, a.Siren = KM, a.SkipBack = JM, a.SkipForward = jM, a.Skull = QM, a.Slack = YM, a.Slash = _M, a.Slice = al, a.Sliders = tl, a.SlidersHorizontal = hl, a.Smartphone = nl, a.SmartphoneCharging = dl, a.SmartphoneNfc = cl, a.Smile = pl, a.SmilePlus = il, a.Snail = el, a.Snowflake = Ml, a.Sofa = ll, a.Soup = vl, a.Space = ol, a.Spade = sl, a.Sparkle = gl, a.Sparkles = rl, a.Speaker = yl, a.Speech = $l, a.SpellCheck = Hl, a.SpellCheck2 = ml, a.Spline = Cl, a.Split = wl, a.SplitSquareHorizontal = ul, a.SplitSquareVertical = Vl, a.SprayCan = xl, a.Sprout = Ll, a.Square = Dl, a.SquareAsterisk = Sl, a.SquareCode = Al, a.SquareDashedBottom = kl, a.SquareDashedBottomCode = fl, a.SquareDot = Fl, a.SquareEqual = Zl, a.SquareSlash = Pl, a.SquareStack = Bl, a.Squirrel = Tl, a.Stamp = zl, a.Star = Ul, a.StarHalf = Rl, a.StarOff = bl, a.StepBack = Ol, a.StepForward = ql, a.Stethoscope = Gl, a.Sticker = Wl, a.StickyNote = El, a.StopCircle = Il, a.Store = Xl, a.StretchHorizontal = Nl, a.StretchVertical = Kl, a.Strikethrough = Jl, a.Subscript = jl, a.Subtitles = Ql, a.Sun = t9, a.SunDim = Yl, a.SunMedium = _l, a.SunMoon = a9, a.SunSnow = h9, a.Sunrise = d9, a.Sunset = c9, a.Superscript = n9, a.SwissFranc = i9, a.SwitchCamera = p9, a.Sword = e9, a.Swords = M9, a.Syringe = l9, a.Table = s9, a.Table2 = v9, a.TableProperties = o9, a.Tablet = r9, a.TabletSmartphone = g9, a.Tablets = y9, a.Tag = $9, a.Tags = m9, a.Tally1 = H9, a.Tally2 = C9, a.Tally3 = u9, a.Tally4 = V9, a.Tally5 = w9, a.Tangent = x9, a.Target = L9, a.Tent = A9, a.TentTree = S9, a.Terminal = k9, a.TerminalSquare = f9, a.TestTube = Z9, a.TestTube2 = F9, a.TestTubes = P9, a.Text = R9, a.TextCursor = D9, a.TextCursorInput = B9, a.TextQuote = T9, a.TextSelect = z9, a.Theater = b9, a.Thermometer = q9, a.ThermometerSnowflake = U9, a.ThermometerSun = O9, a.ThumbsDown = G9, a.ThumbsUp = W9, a.Ticket = E9, a.Timer = N9, a.TimerOff = I9, a.TimerReset = X9, a.ToggleLeft = K9, a.ToggleRight = J9, a.Tornado = j9, a.Torus = Q9, a.Touchpad = _9, a.TouchpadOff = Y9, a.TowerControl = av, a.ToyBrick = hv, a.Tractor = tv, a.TrafficCone = dv, a.TrainFront = nv, a.TrainFrontTunnel = cv, a.TrainTrack = iv, a.TramFront = pv, a.Trash = Mv, a.Trash2 = ev, a.TreeDeciduous = lv, a.TreePine = vv, a.Trees = ov, a.Trello = sv, a.TrendingDown = gv, a.TrendingUp = rv, a.Triangle = $v, a.TriangleRight = yv, a.Trophy = mv, a.Truck = Hv, a.Turtle = Cv, a.Tv = Vv, a.Tv2 = uv, a.Twitch = wv, a.Twitter = xv, a.Type = Lv, a.Umbrella = Sv, a.Underline = Av, a.Undo = Fv, a.Undo2 = fv, a.UndoDot = kv, a.UnfoldHorizontal = Zv, a.UnfoldVertical = Pv, a.Ungroup = Bv, a.Unlink = Tv, a.Unlink2 = Dv, a.Unlock = Rv, a.UnlockKeyhole = zv, a.Unplug = bv, a.Upload = Ov, a.UploadCloud = Uv, a.Usb = qv, a.User = co, a.User2 = Gv, a.UserCheck = Ev, a.UserCheck2 = Wv, a.UserCircle = Xv, a.UserCircle2 = Iv, a.UserCog = Kv, a.UserCog2 = Nv, a.UserMinus = jv, a.UserMinus2 = Jv, a.UserPlus = Yv, a.UserPlus2 = Qv, a.UserSquare = ao, a.UserSquare2 = _v, a.UserX = to, a.UserX2 = ho, a.Users = io, a.Users2 = no, a.Utensils = eo, a.UtensilsCrossed = po, a.UtilityPole = Mo, a.Variable = lo, a.Vegan = vo, a.VenetianMask = oo, a.Vibrate = go, a.VibrateOff = so, a.Video = yo, a.VideoOff = ro, a.Videotape = $o, a.View = mo, a.Voicemail = Ho, a.Volume = wo, a.Volume1 = Co, a.Volume2 = uo, a.VolumeX = Vo, a.Vote = xo, a.Wallet = Ao, a.Wallet2 = Lo, a.WalletCards = So, a.Wallpaper = fo, a.Wand = Fo, a.Wand2 = ko, a.Warehouse = Zo, a.Watch = Po, a.Waves = Bo, a.Webcam = Do, a.Webhook = To, a.Weight = zo, a.Wheat = bo, a.WheatOff = Ro, a.WholeWord = Uo, a.Wifi = qo, a.WifiOff = Oo, a.Wind = Go, a.Wine = Eo, a.WineOff = Wo, a.Workflow = Io, a.WrapText = Xo, a.Wrench = No, a.X = Qo, a.XCircle = Ko, a.XOctagon = Jo, a.XSquare = jo, a.Youtube = Yo, a.Zap = as, a.ZapOff = _o, a.ZoomIn = hs, a.ZoomOut = ts, a.createElement = M, a.createIcons = os, a.icons = ds
});
//# sourceMappingURL=lucide.min.js.map