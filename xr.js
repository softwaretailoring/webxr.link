!(function(e) {
  var t = {};
  function r(i) {
    if (t[i]) return t[i].exports;
    var n = (t[i] = { i: i, l: !1, exports: {} });
    return e[i].call(n.exports, n, n.exports, r), (n.l = !0), n.exports;
  }
  (r.m = e),
    (r.c = t),
    (r.d = function(e, t, i) {
      r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: i });
    }),
    (r.r = function(e) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (r.t = function(e, t) {
      if ((1 & t && (e = r(e)), 8 & t)) return e;
      if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
      var i = Object.create(null);
      if (
        (r.r(i),
        Object.defineProperty(i, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var n in e)
          r.d(
            i,
            n,
            function(t) {
              return e[t];
            }.bind(null, n)
          );
      return i;
    }),
    (r.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return r.d(t, 'a', t), t;
    }),
    (r.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (r.p = ''),
    r((r.s = 2));
})([
  function(e, t, r) {
    'use strict';
    (function(e) {
      /**
       * @license
       * webxr-polyfill
       * Copyright (c) 2017 Google
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       * http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      /**
       * @license
       * cardboard-vr-display
       * Copyright (c) 2015-2017 Google
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       * http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      /**
       * @license
       * webvr-polyfill-dpdb
       * Copyright (c) 2017 Google
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       * http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      /**
       * @license
       * wglu-preserve-state
       * Copyright (c) 2016, Brandon Jones.
       *
       * Permission is hereby granted, free of charge, to any person obtaining a copy
       * of this software and associated documentation files (the "Software"), to deal
       * in the Software without restriction, including without limitation the rights
       * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
       * copies of the Software, and to permit persons to whom the Software is
       * furnished to do so, subject to the following conditions:
       *
       * The above copyright notice and this permission notice shall be included in
       * all copies or substantial portions of the Software.
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       * THE SOFTWARE.
       */
      /**
       * @license
       * nosleep.js
       * Copyright (c) 2017, Rich Tibbett
       *
       * Permission is hereby granted, free of charge, to any person obtaining a copy
       * of this software and associated documentation files (the "Software"), to deal
       * in the Software without restriction, including without limitation the rights
       * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
       * copies of the Software, and to permit persons to whom the Software is
       * furnished to do so, subject to the following conditions:
       *
       * The above copyright notice and this permission notice shall be included in
       * all copies or substantial portions of the Software.
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       * THE SOFTWARE.
       */
      const r =
          void 0 !== e
            ? e
            : 'undefined' != typeof self
            ? self
            : 'undefined' != typeof window
            ? window
            : {},
        i = Symbol('@@webxr-polyfill/EventTarget');
      class n {
        constructor() {
          this[i] = { listeners: new Map() };
        }
        addEventListener(e, t) {
          if ('string' != typeof e) throw new Error('`type` must be a string');
          if ('function' != typeof t)
            throw new Error('`listener` must be a function');
          const r = this[i].listeners.get(e) || [];
          r.push(t), this[i].listeners.set(e, r);
        }
        removeEventListener(e, t) {
          if ('string' != typeof e) throw new Error('`type` must be a string');
          if ('function' != typeof t)
            throw new Error('`listener` must be a function');
          const r = this[i].listeners.get(e) || [];
          for (let e = r.length; e >= 0; e--) r[e] === t && r.pop();
        }
        dispatchEvent(e, t) {
          const r = this[i].listeners.get(e) || [],
            n = [];
          for (let e = 0; e < r.length; e++) n[e] = r[e];
          for (let e of n) e(t);
          'function' == typeof this[`on${e}`] && this[`on${e}`](t);
        }
      }
      let s = 'undefined' != typeof Float32Array ? Float32Array : Array;
      Math.PI;
      function a() {
        let e = new s(16);
        return (
          s != Float32Array &&
            ((e[1] = 0),
            (e[2] = 0),
            (e[3] = 0),
            (e[4] = 0),
            (e[6] = 0),
            (e[7] = 0),
            (e[8] = 0),
            (e[9] = 0),
            (e[11] = 0),
            (e[12] = 0),
            (e[13] = 0),
            (e[14] = 0)),
          (e[0] = 1),
          (e[5] = 1),
          (e[10] = 1),
          (e[15] = 1),
          e
        );
      }
      function o(e) {
        return (
          (e[0] = 1),
          (e[1] = 0),
          (e[2] = 0),
          (e[3] = 0),
          (e[4] = 0),
          (e[5] = 1),
          (e[6] = 0),
          (e[7] = 0),
          (e[8] = 0),
          (e[9] = 0),
          (e[10] = 1),
          (e[11] = 0),
          (e[12] = 0),
          (e[13] = 0),
          (e[14] = 0),
          (e[15] = 1),
          e
        );
      }
      function l(e, t) {
        let r = t[0],
          i = t[1],
          n = t[2],
          s = t[3],
          a = t[4],
          o = t[5],
          l = t[6],
          h = t[7],
          u = t[8],
          c = t[9],
          d = t[10],
          A = t[11],
          f = t[12],
          p = t[13],
          m = t[14],
          g = t[15],
          _ = r * o - i * a,
          v = r * l - n * a,
          w = r * h - s * a,
          b = i * l - n * o,
          y = i * h - s * o,
          E = n * h - s * l,
          M = u * p - c * f,
          x = u * m - d * f,
          S = u * g - A * f,
          R = c * m - d * p,
          T = c * g - A * p,
          F = d * g - A * m,
          C = _ * F - v * T + w * R + b * S - y * x + E * M;
        return C
          ? ((C = 1 / C),
            (e[0] = (o * F - l * T + h * R) * C),
            (e[1] = (n * T - i * F - s * R) * C),
            (e[2] = (p * E - m * y + g * b) * C),
            (e[3] = (d * y - c * E - A * b) * C),
            (e[4] = (l * S - a * F - h * x) * C),
            (e[5] = (r * F - n * S + s * x) * C),
            (e[6] = (m * w - f * E - g * v) * C),
            (e[7] = (u * E - d * w + A * v) * C),
            (e[8] = (a * T - o * S + h * M) * C),
            (e[9] = (i * S - r * T - s * M) * C),
            (e[10] = (f * y - p * w + g * _) * C),
            (e[11] = (c * w - u * y - A * _) * C),
            (e[12] = (o * x - a * R - l * M) * C),
            (e[13] = (r * R - i * x + n * M) * C),
            (e[14] = (p * v - f * b - m * _) * C),
            (e[15] = (u * b - c * v + d * _) * C),
            e)
          : null;
      }
      function h(e, t, r) {
        let i = t[0],
          n = t[1],
          s = t[2],
          a = t[3],
          o = t[4],
          l = t[5],
          h = t[6],
          u = t[7],
          c = t[8],
          d = t[9],
          A = t[10],
          f = t[11],
          p = t[12],
          m = t[13],
          g = t[14],
          _ = t[15],
          v = r[0],
          w = r[1],
          b = r[2],
          y = r[3];
        return (
          (e[0] = v * i + w * o + b * c + y * p),
          (e[1] = v * n + w * l + b * d + y * m),
          (e[2] = v * s + w * h + b * A + y * g),
          (e[3] = v * a + w * u + b * f + y * _),
          (v = r[4]),
          (w = r[5]),
          (b = r[6]),
          (y = r[7]),
          (e[4] = v * i + w * o + b * c + y * p),
          (e[5] = v * n + w * l + b * d + y * m),
          (e[6] = v * s + w * h + b * A + y * g),
          (e[7] = v * a + w * u + b * f + y * _),
          (v = r[8]),
          (w = r[9]),
          (b = r[10]),
          (y = r[11]),
          (e[8] = v * i + w * o + b * c + y * p),
          (e[9] = v * n + w * l + b * d + y * m),
          (e[10] = v * s + w * h + b * A + y * g),
          (e[11] = v * a + w * u + b * f + y * _),
          (v = r[12]),
          (w = r[13]),
          (b = r[14]),
          (y = r[15]),
          (e[12] = v * i + w * o + b * c + y * p),
          (e[13] = v * n + w * l + b * d + y * m),
          (e[14] = v * s + w * h + b * A + y * g),
          (e[15] = v * a + w * u + b * f + y * _),
          e
        );
      }
      function u(e, t, r) {
        let i = t[0],
          n = t[1],
          s = t[2],
          a = t[3],
          o = i + i,
          l = n + n,
          h = s + s,
          u = i * o,
          c = i * l,
          d = i * h,
          A = n * l,
          f = n * h,
          p = s * h,
          m = a * o,
          g = a * l,
          _ = a * h;
        return (
          (e[0] = 1 - (A + p)),
          (e[1] = c + _),
          (e[2] = d - g),
          (e[3] = 0),
          (e[4] = c - _),
          (e[5] = 1 - (u + p)),
          (e[6] = f + m),
          (e[7] = 0),
          (e[8] = d + g),
          (e[9] = f - m),
          (e[10] = 1 - (u + A)),
          (e[11] = 0),
          (e[12] = r[0]),
          (e[13] = r[1]),
          (e[14] = r[2]),
          (e[15] = 1),
          e
        );
      }
      function c(e, t) {
        return (e[0] = t[12]), (e[1] = t[13]), (e[2] = t[14]), e;
      }
      function d(e, t) {
        let r = t[0] + t[5] + t[10],
          i = 0;
        return (
          r > 0
            ? ((i = 2 * Math.sqrt(r + 1)),
              (e[3] = 0.25 * i),
              (e[0] = (t[6] - t[9]) / i),
              (e[1] = (t[8] - t[2]) / i),
              (e[2] = (t[1] - t[4]) / i))
            : t[0] > t[5] && t[0] > t[10]
            ? ((i = 2 * Math.sqrt(1 + t[0] - t[5] - t[10])),
              (e[3] = (t[6] - t[9]) / i),
              (e[0] = 0.25 * i),
              (e[1] = (t[1] + t[4]) / i),
              (e[2] = (t[8] + t[2]) / i))
            : t[5] > t[10]
            ? ((i = 2 * Math.sqrt(1 + t[5] - t[0] - t[10])),
              (e[3] = (t[8] - t[2]) / i),
              (e[0] = (t[1] + t[4]) / i),
              (e[1] = 0.25 * i),
              (e[2] = (t[6] + t[9]) / i))
            : ((i = 2 * Math.sqrt(1 + t[10] - t[0] - t[5])),
              (e[3] = (t[1] - t[4]) / i),
              (e[0] = (t[8] + t[2]) / i),
              (e[1] = (t[6] + t[9]) / i),
              (e[2] = 0.25 * i)),
          e
        );
      }
      function A(e, t, r, i, n) {
        let s,
          a = 1 / Math.tan(t / 2);
        return (
          (e[0] = a / r),
          (e[1] = 0),
          (e[2] = 0),
          (e[3] = 0),
          (e[4] = 0),
          (e[5] = a),
          (e[6] = 0),
          (e[7] = 0),
          (e[8] = 0),
          (e[9] = 0),
          (e[11] = -1),
          (e[12] = 0),
          (e[13] = 0),
          (e[15] = 0),
          null != n && n !== 1 / 0
            ? ((s = 1 / (i - n)),
              (e[10] = (n + i) * s),
              (e[14] = 2 * n * i * s))
            : ((e[10] = -1), (e[14] = -2 * i)),
          e
        );
      }
      function f() {
        let e = new s(3);
        return s != Float32Array && ((e[0] = 0), (e[1] = 0), (e[2] = 0)), e;
      }
      function p(e) {
        var t = new s(3);
        return (t[0] = e[0]), (t[1] = e[1]), (t[2] = e[2]), t;
      }
      function m(e, t, r) {
        let i = new s(3);
        return (i[0] = e), (i[1] = t), (i[2] = r), i;
      }
      function g(e, t) {
        return (e[0] = t[0]), (e[1] = t[1]), (e[2] = t[2]), e;
      }
      function _(e, t, r) {
        return (
          (e[0] = t[0] + r[0]), (e[1] = t[1] + r[1]), (e[2] = t[2] + r[2]), e
        );
      }
      function v(e, t, r) {
        return (e[0] = t[0] * r), (e[1] = t[1] * r), (e[2] = t[2] * r), e;
      }
      function w(e, t) {
        let r = t[0],
          i = t[1],
          n = t[2],
          s = r * r + i * i + n * n;
        return (
          s > 0 &&
            ((s = 1 / Math.sqrt(s)),
            (e[0] = t[0] * s),
            (e[1] = t[1] * s),
            (e[2] = t[2] * s)),
          e
        );
      }
      function b(e, t) {
        return e[0] * t[0] + e[1] * t[1] + e[2] * t[2];
      }
      function y(e, t, r) {
        let i = t[0],
          n = t[1],
          s = t[2],
          a = r[0],
          o = r[1],
          l = r[2];
        return (
          (e[0] = n * l - s * o),
          (e[1] = s * a - i * l),
          (e[2] = i * o - n * a),
          e
        );
      }
      function E(e, t, r) {
        let i = r[0],
          n = r[1],
          s = r[2],
          a = r[3],
          o = t[0],
          l = t[1],
          h = t[2],
          u = n * h - s * l,
          c = s * o - i * h,
          d = i * l - n * o,
          A = n * d - s * c,
          f = s * u - i * d,
          p = i * c - n * u,
          m = 2 * a;
        return (
          (u *= m),
          (c *= m),
          (d *= m),
          (A *= 2),
          (f *= 2),
          (p *= 2),
          (e[0] = o + u + A),
          (e[1] = l + c + f),
          (e[2] = h + d + p),
          e
        );
      }
      const M = function(e) {
        let t = e[0],
          r = e[1],
          i = e[2];
        return Math.sqrt(t * t + r * r + i * i);
      };
      !(function() {
        let e = f();
      })();
      !(function() {
        let e = (function() {
          let e = new s(4);
          return (
            s != Float32Array &&
              ((e[0] = 0), (e[1] = 0), (e[2] = 0), (e[3] = 0)),
            e
          );
        })();
      })();
      function x() {
        let e = new s(4);
        return (
          s != Float32Array && ((e[0] = 0), (e[1] = 0), (e[2] = 0)),
          (e[3] = 1),
          e
        );
      }
      function S(e, t, r) {
        let i = t[0],
          n = t[1],
          s = t[2],
          a = t[3],
          o = r[0],
          l = r[1],
          h = r[2],
          u = r[3];
        return (
          (e[0] = i * u + a * o + n * h - s * l),
          (e[1] = n * u + a * l + s * o - i * h),
          (e[2] = s * u + a * h + i * l - n * o),
          (e[3] = a * u - i * o - n * l - s * h),
          e
        );
      }
      function R(e, t, r, i) {
        let n,
          s,
          a,
          o,
          l,
          h = t[0],
          u = t[1],
          c = t[2],
          d = t[3],
          A = r[0],
          f = r[1],
          p = r[2],
          m = r[3];
        return (
          (s = h * A + u * f + c * p + d * m),
          s < 0 && ((s = -s), (A = -A), (f = -f), (p = -p), (m = -m)),
          1 - s > 1e-6
            ? ((n = Math.acos(s)),
              (a = Math.sin(n)),
              (o = Math.sin((1 - i) * n) / a),
              (l = Math.sin(i * n) / a))
            : ((o = 1 - i), (l = i)),
          (e[0] = o * h + l * A),
          (e[1] = o * u + l * f),
          (e[2] = o * c + l * p),
          (e[3] = o * d + l * m),
          e
        );
      }
      function T(e, t) {
        let r = t[0],
          i = t[1],
          n = t[2],
          s = t[3],
          a = r * r + i * i + n * n + s * s,
          o = a ? 1 / a : 0;
        return (
          (e[0] = -r * o), (e[1] = -i * o), (e[2] = -n * o), (e[3] = s * o), e
        );
      }
      const F = function(e) {
          let t = new s(4);
          return (t[0] = e[0]), (t[1] = e[1]), (t[2] = e[2]), (t[3] = e[3]), t;
        },
        C = function(e, t, r, i) {
          let n = new s(4);
          return (n[0] = e), (n[1] = t), (n[2] = r), (n[3] = i), n;
        },
        P = function(e, t) {
          return (e[0] = t[0]), (e[1] = t[1]), (e[2] = t[2]), (e[3] = t[3]), e;
        },
        I = function(e, t) {
          let r = t[0],
            i = t[1],
            n = t[2],
            s = t[3],
            a = r * r + i * i + n * n + s * s;
          return (
            a > 0 &&
              ((a = 1 / Math.sqrt(a)),
              (e[0] = r * a),
              (e[1] = i * a),
              (e[2] = n * a),
              (e[3] = s * a)),
            e
          );
        },
        B =
          ((function() {
            let e = f(),
              t = m(1, 0, 0),
              r = m(0, 1, 0);
          })(),
          (function() {
            let e = x(),
              t = x();
          })(),
          (function() {
            let e = (function() {
              let e = new s(9);
              return (
                s != Float32Array &&
                  ((e[1] = 0),
                  (e[2] = 0),
                  (e[3] = 0),
                  (e[5] = 0),
                  (e[6] = 0),
                  (e[7] = 0)),
                (e[0] = 1),
                (e[4] = 1),
                (e[8] = 1),
                e
              );
            })();
          })(),
          Symbol('@@webxr-polyfill/XRRigidTransform'));
      class D {
        constructor() {
          if (
            ((this[B] = {
              matrix: null,
              position: null,
              orientation: null,
              inverse: null,
            }),
            0 === arguments.length)
          )
            this[B].matrix = o(new Float32Array(16));
          else if (1 === arguments.length)
            arguments[0] instanceof Float32Array
              ? (this[B].matrix = arguments[0])
              : ((this[B].position = this._getPoint(arguments[0])),
                (this[B].orientation = DOMPointReadOnly.fromPoint({
                  x: 0,
                  y: 0,
                  z: 0,
                  w: 1,
                })));
          else {
            if (2 !== arguments.length) throw new Error('Too many arguments!');
            (this[B].position = this._getPoint(arguments[0])),
              (this[B].orientation = this._getPoint(arguments[1]));
          }
          if (this[B].matrix) {
            let e = f();
            c(e, this[B].matrix),
              (this[B].position = DOMPointReadOnly.fromPoint({
                x: e[0],
                y: e[1],
                z: e[2],
              }));
            let t = x();
            d(t, this[B].matrix),
              (this[B].orientation = DOMPointReadOnly.fromPoint({
                x: t[0],
                y: t[1],
                z: t[2],
                w: t[3],
              }));
          } else
            (this[B].matrix = o(new Float32Array(16))),
              u(
                this[B].matrix,
                C(
                  this[B].orientation.x,
                  this[B].orientation.y,
                  this[B].orientation.z,
                  this[B].orientation.w
                ),
                m(this[B].position.x, this[B].position.y, this[B].position.z)
              );
        }
        _getPoint(e) {
          return e instanceof DOMPointReadOnly
            ? e
            : DOMPointReadOnly.fromPoint(e);
        }
        get matrix() {
          return this[B].matrix;
        }
        get position() {
          return this[B].position;
        }
        get orientation() {
          return this[B].orientation;
        }
        get inverse() {
          if (null === this[B].inverse) {
            let e = o(new Float32Array(16));
            l(e, this[B].matrix),
              (this[B].inverse = new D(e)),
              (this[B].inverse[B].inverse = this);
          }
          return this[B].inverse;
        }
      }
      const L = Symbol('@@webxr-polyfill/XRSpace');
      class O {
        constructor(e = null, t = null) {
          this[L] = {
            specialType: e,
            inputSource: t,
            baseMatrix: null,
            inverseBaseMatrix: null,
            lastFrameId: -1,
          };
        }
        get _specialType() {
          return this[L].specialType;
        }
        get _inputSource() {
          return this[L].inputSource;
        }
        _ensurePoseUpdated(e, t) {
          t != this[L].lastFrameId &&
            ((this[L].lastFrameId = t), this._onPoseUpdate(e));
        }
        _onPoseUpdate(e) {
          'viewer' == this[L].specialType &&
            (this._baseMatrix = e.getBasePoseMatrix());
        }
        set _baseMatrix(e) {
          (this[L].baseMatrix = e), (this[L].inverseBaseMatrix = null);
        }
        get _baseMatrix() {
          return (
            this[L].baseMatrix ||
              (this[L].inverseBaseMatrix &&
                ((this[L].baseMatrix = new Float32Array(16)),
                l(this[L].baseMatrix, this[L].inverseBaseMatrix))),
            this[L].baseMatrix
          );
        }
        set _inverseBaseMatrix(e) {
          (this[L].inverseBaseMatrix = e), (this[L].baseMatrix = null);
        }
        get _inverseBaseMatrix() {
          return (
            this[L].inverseBaseMatrix ||
              (this[L].baseMatrix &&
                ((this[L].inverseBaseMatrix = new Float32Array(16)),
                l(this[L].inverseBaseMatrix, this[L].baseMatrix))),
            this[L].inverseBaseMatrix
          );
        }
        _getSpaceRelativeTransform(e) {
          if (!this._inverseBaseMatrix || !e._baseMatrix) return null;
          let t = new Float32Array(16);
          return h(t, this._inverseBaseMatrix, e._baseMatrix), new D(t);
        }
      }
      const N = Symbol('@@webxr-polyfill/XRReferenceSpace'),
        U = ['viewer', 'local', 'local-floor', 'bounded-floor', 'unbounded'];
      class k extends O {
        constructor(e, t = null) {
          if (!U.includes(e))
            throw new Error(`XRReferenceSpaceType must be one of ${U}`);
          if ((super(e), 'bounded-floor' === e && !t))
            throw new Error(
              "XRReferenceSpace cannot use 'bounded-floor' type if the platform does not provide the floor level"
            );
          (function(e) {
            return 'bounded-floor' === e || 'local-floor' === e;
          })(e) &&
            !t &&
            ((t = o(new Float32Array(16)))[13] = 1.6),
            (this._inverseBaseMatrix = t || o(new Float32Array(16))),
            (this[N] = {
              type: e,
              transform: t,
              originOffset: o(new Float32Array(16)),
            });
        }
        _transformBasePoseMatrix(e, t) {
          h(e, this._inverseBaseMatrix, t);
        }
        _originOffsetMatrix() {
          return this[N].originOffset;
        }
        _adjustForOriginOffset(e) {
          let t = new Float32Array(16);
          l(t, this[N].originOffset), h(e, t, e);
        }
        _getSpaceRelativeTransform(e) {
          let t = super._getSpaceRelativeTransform(e);
          return (
            this._adjustForOriginOffset(t.matrix),
            new XRRigidTransform(t.matrix)
          );
        }
        getOffsetReferenceSpace(e) {
          let t = new k(this[N].type, this[N].transform, this[N].bounds);
          return h(t[N].originOffset, this[N].originOffset, e.matrix), t;
        }
      }
      const G = Symbol('@@webxr-polyfill/XR'),
        V = ['inline', 'immersive-vr', 'immersive-ar'],
        Q = {
          inline: { requiredFeatures: ['viewer'], optionalFeatures: [] },
          'immersive-vr': {
            requiredFeatures: ['viewer', 'local'],
            optionalFeatures: [],
          },
          'immersive-ar': {
            requiredFeatures: ['viewer', 'local'],
            optionalFeatures: [],
          },
        };
      let z;
      if ('performance' in r == !1) {
        let e = Date.now();
        z = () => Date.now() - e;
      } else z = () => performance.now();
      var X = z;
      const H = Symbol('@@webxr-polyfill/XRPose');
      class W {
        constructor(e, t) {
          this[H] = { transform: e, emulatedPosition: t };
        }
        get transform() {
          return this[H].transform;
        }
        get emulatedPosition() {
          return this[H].emulatedPosition;
        }
      }
      const j = Symbol('@@webxr-polyfill/XRViewerPose');
      class q extends W {
        constructor(e, t, r = !1) {
          super(e, r), (this[j] = { views: t });
        }
        get views() {
          return this[j].views;
        }
      }
      const Y = Symbol('@@webxr-polyfill/XRViewport');
      class Z {
        constructor(e) {
          this[Y] = { target: e };
        }
        get x() {
          return this[Y].target.x;
        }
        get y() {
          return this[Y].target.y;
        }
        get width() {
          return this[Y].target.width;
        }
        get height() {
          return this[Y].target.height;
        }
      }
      const K = ['left', 'right', 'none'],
        J = Symbol('@@webxr-polyfill/XRView');
      class $ {
        constructor(e, t, r, i) {
          if (!K.includes(r)) throw new Error(`XREye must be one of: ${K}`);
          const n = Object.create(null),
            s = new Z(n);
          this[J] = {
            device: e,
            eye: r,
            viewport: s,
            temp: n,
            sessionId: i,
            transform: t,
          };
        }
        get eye() {
          return this[J].eye;
        }
        get projectionMatrix() {
          return this[J].device.getProjectionMatrix(this.eye);
        }
        get transform() {
          return this[J].transform;
        }
        _getViewport(e) {
          if (
            this[J].device.getViewport(
              this[J].sessionId,
              this.eye,
              e,
              this[J].temp
            )
          )
            return this[J].viewport;
        }
      }
      const ee = Symbol('@@webxr-polyfill/XRFrame'),
        te = 'XRFrame access outside the callback that produced it is invalid.';
      let re = 0;
      class ie {
        constructor(e, t, r) {
          this[ee] = {
            id: ++re,
            active: !1,
            animationFrame: !1,
            device: e,
            session: t,
            sessionId: r,
          };
        }
        get session() {
          return this[ee].session;
        }
        getViewerPose(e) {
          if (!this[ee].animationFrame)
            throw new DOMException(
              'getViewerPose can only be called on XRFrame objects passed to XRSession.requestAnimationFrame callbacks.',
              'InvalidStateError'
            );
          if (!this[ee].active) throw new DOMException(te, 'InvalidStateError');
          const t = this[ee].device,
            r = this[ee].session;
          r[ge].viewerSpace._ensurePoseUpdated(t, this[ee].id),
            e._ensurePoseUpdated(t, this[ee].id);
          let i = e._getSpaceRelativeTransform(r[ge].viewerSpace);
          const n = [];
          for (let i of r[ge].viewSpaces) {
            i._ensurePoseUpdated(t, this[ee].id);
            let r = e._getSpaceRelativeTransform(i),
              s = new $(t, r, i.eye, this[ee].sessionId);
            n.push(s);
          }
          return new q(i, n, !1);
        }
        getPose(e, t) {
          if (!this[ee].active) throw new DOMException(te, 'InvalidStateError');
          const r = this[ee].device;
          if ('target-ray' === e._specialType || 'grip' === e._specialType)
            return r.getInputPose(e._inputSource, t, e._specialType);
          {
            e._ensurePoseUpdated(r, this[ee].id),
              t._ensurePoseUpdated(r, this[ee].id);
            let i = t._getSpaceRelativeTransform(e);
            return i ? new XRPose(i, !1) : null;
          }
        }
      }
      const ne = Symbol('@@webxr-polyfill/XRRenderState'),
        se = Object.freeze({
          depthNear: 0.1,
          depthFar: 1e3,
          inlineVerticalFieldOfView: null,
          baseLayer: null,
        });
      class ae {
        constructor(e = {}) {
          const t = Object.assign({}, se, e);
          this[ne] = { config: t };
        }
        get depthNear() {
          return this[ne].config.depthNear;
        }
        get depthFar() {
          return this[ne].config.depthFar;
        }
        get inlineVerticalFieldOfView() {
          return this[ne].config.inlineVerticalFieldOfView;
        }
        get baseLayer() {
          return this[ne].config.baseLayer;
        }
      }
      const oe = Symbol('@@webxr-polyfill/polyfilled-xr-compatible'),
        le = Symbol('@@webxr-polyfill/xr-compatible'),
        he = Symbol('@@webxr-polyfill/XRWebGLLayer'),
        ue = Object.freeze({
          antialias: !0,
          depth: !1,
          stencil: !1,
          alpha: !0,
          multiview: !1,
          ignoreDepthValues: !1,
          framebufferScaleFactor: 1,
        });
      const ce = Symbol('@@webxr-polyfill/XRInputSourceEvent');
      class de extends Event {
        constructor(e, t) {
          super(e, t),
            (this[ce] = { frame: t.frame, inputSource: t.inputSource });
        }
        get frame() {
          return this[ce].frame;
        }
        get inputSource() {
          return this[ce].inputSource;
        }
      }
      const Ae = Symbol('@@webxr-polyfill/XRSessionEvent');
      class fe extends Event {
        constructor(e, t) {
          super(e, t), (this[Ae] = { session: t.session });
        }
        get session() {
          return this[Ae].session;
        }
      }
      const pe = Symbol('@@webxr-polyfill/XRInputSourcesChangeEvent');
      class me extends Event {
        constructor(e, t) {
          super(e, t),
            (this[pe] = {
              session: t.session,
              added: t.added,
              removed: t.removed,
            });
        }
        get session() {
          return this[pe].session;
        }
        get added() {
          return this[pe].added;
        }
        get removed() {
          return this[pe].removed;
        }
      }
      const ge = Symbol('@@webxr-polyfill/XRSession');
      class _e extends O {
        constructor(e) {
          super(e);
        }
        get eye() {
          return this._specialType;
        }
        _onPoseUpdate(e) {
          this._inverseBaseMatrix = e.getBaseViewMatrix(this._specialType);
        }
      }
      class ve extends n {
        constructor(e, t, r) {
          super();
          let i = 'inline' != t,
            n = new ae({ inlineVerticalFieldOfView: i ? null : 0.5 * Math.PI });
          (this[ge] = {
            device: e,
            mode: t,
            immersive: i,
            ended: !1,
            suspended: !1,
            frameCallbacks: [],
            currentFrameCallbacks: null,
            frameHandle: 0,
            deviceFrameHandle: null,
            id: r,
            activeRenderState: n,
            pendingRenderState: null,
            viewerSpace: new k('viewer'),
            viewSpaces: [],
            currentInputSources: [],
          }),
            i
              ? this[ge].viewSpaces.push(new _e('left'), new _e('right'))
              : this[ge].viewSpaces.push(new _e('none')),
            (this[ge].onDeviceFrame = () => {
              if (this[ge].ended || this[ge].suspended) return;
              if (
                ((this[ge].deviceFrameHandle = null),
                this[ge].startDeviceFrameLoop(),
                null !== this[ge].pendingRenderState &&
                  ((this[ge].activeRenderState = new ae(
                    this[ge].pendingRenderState
                  )),
                  (this[ge].pendingRenderState = null),
                  this[ge].activeRenderState.baseLayer &&
                    this[ge].device.onBaseLayerSet(
                      this[ge].id,
                      this[ge].activeRenderState.baseLayer
                    )),
                null === this[ge].activeRenderState.baseLayer)
              )
                return;
              const t = new ie(e, this, this[ge].id),
                r = (this[ge].currentFrameCallbacks = this[ge].frameCallbacks);
              (this[ge].frameCallbacks = []),
                (t[ee].active = !0),
                (t[ee].animationFrame = !0),
                this[ge].device.onFrameStart(
                  this[ge].id,
                  this[ge].activeRenderState
                ),
                this._checkInputSourcesChange();
              const i = X();
              for (let e = 0; e < r.length; e++)
                try {
                  r[e].cancelled ||
                    'function' != typeof r[e].callback ||
                    r[e].callback(i, t);
                } catch (e) {
                  console.error(e);
                }
              (this[ge].currentFrameCallbacks = null),
                (t[ee].active = !1),
                this[ge].device.onFrameEnd(this[ge].id);
            }),
            (this[ge].startDeviceFrameLoop = () => {
              null === this[ge].deviceFrameHandle &&
                (this[ge].deviceFrameHandle = this[
                  ge
                ].device.requestAnimationFrame(this[ge].onDeviceFrame));
            }),
            (this[ge].stopDeviceFrameLoop = () => {
              const e = this[ge].deviceFrameHandle;
              null !== e &&
                (this[ge].device.cancelAnimationFrame(e),
                (this[ge].deviceFrameHandle = null));
            }),
            (this[ge].onPresentationEnd = t => {
              if (t !== this[ge].id)
                return (
                  (this[ge].suspended = !1),
                  this[ge].startDeviceFrameLoop(),
                  void this.dispatchEvent('focus', { session: this })
                );
              (this[ge].ended = !0),
                this[ge].stopDeviceFrameLoop(),
                e.removeEventListener(
                  '@webvr-polyfill/vr-present-end',
                  this[ge].onPresentationEnd
                ),
                e.removeEventListener(
                  '@webvr-polyfill/vr-present-start',
                  this[ge].onPresentationStart
                ),
                e.removeEventListener(
                  '@@webvr-polyfill/input-select-start',
                  this[ge].onSelectStart
                ),
                e.removeEventListener(
                  '@@webvr-polyfill/input-select-end',
                  this[ge].onSelectEnd
                ),
                this.dispatchEvent('end', new fe('end', { session: this }));
            }),
            e.addEventListener(
              '@@webxr-polyfill/vr-present-end',
              this[ge].onPresentationEnd
            ),
            (this[ge].onPresentationStart = e => {
              e !== this[ge].id &&
                ((this[ge].suspended = !0),
                this[ge].stopDeviceFrameLoop(),
                this.dispatchEvent('blur', { session: this }));
            }),
            e.addEventListener(
              '@@webxr-polyfill/vr-present-start',
              this[ge].onPresentationStart
            ),
            (this[ge].onSelectStart = e => {
              e.sessionId === this[ge].id &&
                this[ge].dispatchInputSourceEvent('selectstart', e.inputSource);
            }),
            e.addEventListener(
              '@@webxr-polyfill/input-select-start',
              this[ge].onSelectStart
            ),
            (this[ge].onSelectEnd = e => {
              e.sessionId === this[ge].id &&
                (this[ge].dispatchInputSourceEvent('selectend', e.inputSource),
                this[ge].dispatchInputSourceEvent('select', e.inputSource));
            }),
            e.addEventListener(
              '@@webxr-polyfill/input-select-end',
              this[ge].onSelectEnd
            ),
            (this[ge].onSqueezeStart = e => {
              e.sessionId === this[ge].id &&
                this[ge].dispatchInputSourceEvent(
                  'squeezestart',
                  e.inputSource
                );
            }),
            e.addEventListener(
              '@@webxr-polyfill/input-squeeze-start',
              this[ge].onSqueezeStart
            ),
            (this[ge].onSqueezeEnd = e => {
              e.sessionId === this[ge].id &&
                (this[ge].dispatchInputSourceEvent('squeezeend', e.inputSource),
                this[ge].dispatchInputSourceEvent('squeeze', e.inputSource));
            }),
            e.addEventListener(
              '@@webxr-polyfill/input-squeeze-end',
              this[ge].onSqueezeEnd
            ),
            (this[ge].dispatchInputSourceEvent = (t, r) => {
              const i = new ie(e, this, this[ge].id),
                n = new de(t, { frame: i, inputSource: r });
              (i[ee].active = !0),
                this.dispatchEvent(t, n),
                (i[ee].active = !1);
            }),
            this[ge].startDeviceFrameLoop(),
            (this.onblur = void 0),
            (this.onfocus = void 0),
            (this.onresetpose = void 0),
            (this.onend = void 0),
            (this.onselect = void 0),
            (this.onselectstart = void 0),
            (this.onselectend = void 0);
        }
        get renderState() {
          return this[ge].activeRenderState;
        }
        get environmentBlendMode() {
          return this[ge].device.environmentBlendMode || 'opaque';
        }
        async requestReferenceSpace(e) {
          if (this[ge].ended) return;
          if (!U.includes(e))
            throw new TypeError(`XRReferenceSpaceType must be one of ${U}`);
          if (!this[ge].device.doesSessionSupportReferenceSpace(this[ge].id, e))
            throw new DOMException(
              `The ${e} reference space is not supported by this session.`,
              'NotSupportedError'
            );
          if ('viewer' === e) return this[ge].viewerSpace;
          let t = await this[ge].device.requestFrameOfReferenceTransform(e);
          if ('bounded-floor' === e) {
            if (!t)
              throw new DOMException(
                `${e} XRReferenceSpace not supported by this device.`,
                'NotSupportedError'
              );
            if (!this[ge].device.requestStageBounds())
              throw new DOMException(
                `${e} XRReferenceSpace not supported by this device.`,
                'NotSupportedError'
              );
            throw new DOMException(
              `The WebXR polyfill does not support the ${e} reference space yet.`,
              'NotSupportedError'
            );
          }
          return new k(e, t);
        }
        requestAnimationFrame(e) {
          if (this[ge].ended) return;
          const t = ++this[ge].frameHandle;
          return (
            this[ge].frameCallbacks.push({
              handle: t,
              callback: e,
              cancelled: !1,
            }),
            t
          );
        }
        cancelAnimationFrame(e) {
          let t = this[ge].frameCallbacks,
            r = t.findIndex(t => t && t.handle === e);
          r > -1 && ((t[r].cancelled = !0), t.splice(r, 1)),
            (t = this[ge].currentFrameCallbacks),
            t &&
              ((r = t.findIndex(t => t && t.handle === e)),
              r > -1 && (t[r].cancelled = !0));
        }
        get inputSources() {
          return this[ge].device.getInputSources();
        }
        async end() {
          if (!this[ge].ended)
            return (
              this.immersive &&
                ((this[ge].ended = !0),
                this[ge].device.removeEventListener(
                  '@@webvr-polyfill/vr-present-start',
                  this[ge].onPresentationStart
                ),
                this[ge].device.removeEventListener(
                  '@@webvr-polyfill/vr-present-end',
                  this[ge].onPresentationEnd
                ),
                this[ge].device.removeEventListener(
                  '@@webvr-polyfill/input-select-start',
                  this[ge].onSelectStart
                ),
                this[ge].device.removeEventListener(
                  '@@webvr-polyfill/input-select-end',
                  this[ge].onSelectEnd
                ),
                this.dispatchEvent('end', new fe('end', { session: this }))),
              this[ge].stopDeviceFrameLoop(),
              this[ge].device.endSession(this[ge].id)
            );
        }
        updateRenderState(e) {
          if (this[ge].ended) {
            throw new Error(
              "Can't call updateRenderState on an XRSession that has already ended."
            );
          }
          if (e.baseLayer && e.baseLayer._session !== this) {
            throw new Error(
              'Called updateRenderState with a base layer that was created by a different session.'
            );
          }
          if (
            null !== e.inlineVerticalFieldOfView &&
            void 0 !== e.inlineVerticalFieldOfView
          ) {
            if (this[ge].immersive) {
              throw new Error(
                'inlineVerticalFieldOfView must not be set for an XRRenderState passed to updateRenderState for an immersive session.'
              );
            }
            e.inlineVerticalFieldOfView = Math.min(
              3.13,
              Math.max(0.01, e.inlineVerticalFieldOfView)
            );
          }
          if (null === this[ge].pendingRenderState) {
            const e = this[ge].activeRenderState;
            this[ge].pendingRenderState = {
              depthNear: e.depthNear,
              depthFar: e.depthFar,
              inlineVerticalFieldOfView: e.inlineVerticalFieldOfView,
              baseLayer: e.baseLayer,
            };
          }
          Object.assign(this[ge].pendingRenderState, e);
        }
        _checkInputSourcesChange() {
          const e = [],
            t = [],
            r = this.inputSources,
            i = this[ge].currentInputSources;
          for (const t of r) i.includes(t) || e.push(t);
          for (const e of i) r.includes(e) || t.push(e);
          (e.length > 0 || t.length > 0) &&
            this.dispatchEvent(
              'inputsourceschange',
              new me('inputsourceschange', {
                session: this,
                added: e,
                removed: t,
              })
            ),
            (this[ge].currentInputSources.length = 0);
          for (const e of r) this[ge].currentInputSources.push(e);
        }
      }
      const we = Symbol('@@webxr-polyfill/XRInputSource');
      class be {
        constructor(e) {
          this[we] = {
            impl: e,
            gripSpace: new O('grip', this),
            targetRaySpace: new O('target-ray', this),
          };
        }
        get handedness() {
          return this[we].impl.handedness;
        }
        get targetRayMode() {
          return this[we].impl.targetRayMode;
        }
        get gripSpace() {
          let e = this[we].impl.targetRayMode;
          return 'gaze' === e || 'screen' === e ? null : this[we].gripSpace;
        }
        get targetRaySpace() {
          return this[we].targetRaySpace;
        }
        get profiles() {
          return this[we].impl.profiles;
        }
        get gamepad() {
          return this[we].impl.gamepad;
        }
      }
      const ye = Symbol('@@webxr-polyfill/XRReferenceSpaceEvent');
      class Ee extends Event {
        constructor(e, t) {
          super(e, t),
            (this[ye] = {
              referenceSpace: t.referenceSpace,
              transform: t.transform || null,
            });
        }
        get referenceSpace() {
          return this[ye].referenceSpace;
        }
        get transform() {
          return this[ye].transform;
        }
      }
      var Me = {
        XR: class extends n {
          constructor(e) {
            super(),
              (this[G] = {
                device: null,
                devicePromise: e,
                immersiveSession: null,
                inlineSessions: new Set(),
              }),
              e.then(e => {
                this[G].device = e;
              });
          }
          async isSessionSupported(e) {
            return (
              this[G].device || (await this[G].devicePromise),
              'inline' != e
                ? Promise.resolve(this[G].device.isSessionSupported(e))
                : Promise.resolve(!0)
            );
          }
          async requestSession(e, t) {
            if (!this[G].device) {
              if ('inline' != e)
                throw new Error(
                  "Polyfill Error: Must call navigator.xr.isSessionSupported() with any XRSessionMode\nor navigator.xr.requestSession('inline') prior to requesting an immersive\nsession. This is a limitation specific to the WebXR Polyfill and does not apply\nto native implementations of the API."
                );
              await this[G].devicePromise;
            }
            if (!V.includes(e))
              throw new TypeError(
                `The provided value '${e}' is not a valid enum value of type XRSessionMode`
              );
            const r = Q[e],
              i = r.requiredFeatures.concat(
                t && t.requiredFeatures ? t.requiredFeatures : []
              ),
              n = r.optionalFeatures.concat(
                t && t.optionalFeatures ? t.optionalFeatures : []
              ),
              s = new Set();
            let a = !1;
            for (let e of i)
              this[G].device.isFeatureSupported(e)
                ? s.add(e)
                : (console.error(
                    `The required feature '${e}' is not supported`
                  ),
                  (a = !0));
            if (a)
              throw new DOMException(
                'Session does not support some required features',
                'NotSupportedError'
              );
            for (let e of n)
              this[G].device.isFeatureSupported(e)
                ? s.add(e)
                : console.log(`The optional feature '${e}' is not supported`);
            const o = await this[G].device.requestSession(e, s),
              l = new XRSession(this[G].device, e, o);
            'inline' == e
              ? this[G].inlineSessions.add(l)
              : (this[G].immersiveSession = l);
            const h = () => {
              'inline' == e
                ? this[G].inlineSessions.delete(l)
                : (this[G].immersiveSession = null),
                l.removeEventListener('end', h);
            };
            return l.addEventListener('end', h), l;
          }
        },
        XRSession: ve,
        XRSessionEvent: fe,
        XRFrame: ie,
        XRView: $,
        XRViewport: Z,
        XRViewerPose: q,
        XRWebGLLayer: class {
          constructor(e, t, r = {}) {
            const i = Object.assign({}, ue, r);
            if (!(e instanceof ve))
              throw new Error('session must be a XRSession');
            if (e.ended) throw new Error('InvalidStateError');
            if (t[oe] && !0 !== t[le]) throw new Error('InvalidStateError');
            const n = t.getParameter(t.FRAMEBUFFER_BINDING);
            this[he] = { context: t, config: i, framebuffer: n, session: e };
          }
          get context() {
            return this[he].context;
          }
          get antialias() {
            return this[he].config.antialias;
          }
          get ignoreDepthValues() {
            return !0;
          }
          get framebuffer() {
            return this[he].framebuffer;
          }
          get framebufferWidth() {
            return this[he].context.drawingBufferWidth;
          }
          get framebufferHeight() {
            return this[he].context.drawingBufferHeight;
          }
          get _session() {
            return this[he].session;
          }
          getViewport(e) {
            return e._getViewport(this);
          }
          static getNativeFramebufferScaleFactor(e) {
            if (!e)
              throw new TypeError(
                'getNativeFramebufferScaleFactor must be passed a session.'
              );
            return e[ge].ended ? 0 : 1;
          }
        },
        XRSpace: O,
        XRReferenceSpace: k,
        XRReferenceSpaceEvent: Ee,
        XRInputSource: be,
        XRInputSourceEvent: de,
        XRInputSourcesChangeEvent: me,
        XRRenderState: ae,
        XRRigidTransform: D,
        XRPose: W,
      };
      const xe = e =>
          'function' != typeof e.prototype.makeXRCompatible &&
          ((e.prototype.makeXRCompatible = function() {
            return (this[le] = !0), Promise.resolve();
          }),
          !0),
        Se = e => {
          const t = e.prototype.getContext;
          e.prototype.getContext = function(e, r) {
            const i = t.call(this, e, r);
            return (
              i &&
                ((i[oe] = !0),
                r && 'xrCompatible' in r && (i[le] = r.xrCompatible)),
              i
            );
          };
        };
      var Re =
        'undefined' != typeof window
          ? window
          : void 0 !== e
          ? e
          : 'undefined' != typeof self
          ? self
          : {};
      var Te,
        Fe = (function(e, t) {
          return e((t = { exports: {} }), t.exports), t.exports;
        })(function(e, t) {
          e.exports = (function() {
            var e,
              t,
              r,
              i = (function() {
                function e(e, t) {
                  for (var r = 0; r < t.length; r++) {
                    var i = t[r];
                    (i.enumerable = i.enumerable || !1),
                      (i.configurable = !0),
                      'value' in i && (i.writable = !0),
                      Object.defineProperty(e, i.key, i);
                  }
                }
                return function(t, r, i) {
                  return r && e(t.prototype, r), i && e(t, i), t;
                };
              })(),
              n = function(e, t) {
                if (Array.isArray(e)) return e;
                if (Symbol.iterator in Object(e))
                  return (function(e, t) {
                    var r = [],
                      i = !0,
                      n = !1,
                      s = void 0;
                    try {
                      for (
                        var a, o = e[Symbol.iterator]();
                        !(i = (a = o.next()).done) &&
                        (r.push(a.value), !t || r.length !== t);
                        i = !0
                      );
                    } catch (e) {
                      (n = !0), (s = e);
                    } finally {
                      try {
                        !i && o.return && o.return();
                      } finally {
                        if (n) throw s;
                      }
                    }
                    return r;
                  })(e, t);
                throw new TypeError(
                  'Invalid attempt to destructure non-iterable instance'
                );
              },
              s = function(e, t, r) {
                return e + (t - e) * r;
              },
              a = (function() {
                var e = /iPad|iPhone|iPod/.test(navigator.platform);
                return function() {
                  return e;
                };
              })(),
              o = (function() {
                var e =
                  -1 !== navigator.userAgent.indexOf('Version') &&
                  -1 !== navigator.userAgent.indexOf('Android') &&
                  -1 !== navigator.userAgent.indexOf('Chrome');
                return function() {
                  return e;
                };
              })(),
              l =
                (/^((?!chrome|android).)*safari/i.test(navigator.userAgent),
                (function() {
                  var e =
                    -1 !== navigator.userAgent.indexOf('Firefox') &&
                    -1 !== navigator.userAgent.indexOf('Android');
                  return function() {
                    return e;
                  };
                })()),
              h =
                ((t = navigator.userAgent.match(/.*Chrome\/([0-9]+)/)),
                (r = t ? parseInt(t[1], 10) : null),
                function() {
                  return r;
                }),
              u = (function() {
                var e = !1;
                if (65 === h()) {
                  var t = navigator.userAgent.match(/.*Chrome\/([0-9\.]*)/);
                  if (t) {
                    var r = t[1].split('.'),
                      i = n(r, 4),
                      s = (i[0], i[1], i[2]),
                      a = i[3];
                    e = 3325 === parseInt(s, 10) && parseInt(a, 10) < 148;
                  }
                }
                return function() {
                  return e;
                };
              })(),
              c = (function() {
                var e = -1 !== navigator.userAgent.indexOf('R7 Build');
                return function() {
                  return e;
                };
              })(),
              d = function() {
                var e = 90 == window.orientation || -90 == window.orientation;
                return c() ? !e : e;
              },
              A = function() {
                return (
                  Math.max(window.screen.width, window.screen.height) *
                  window.devicePixelRatio
                );
              },
              f = function() {
                return (
                  Math.min(window.screen.width, window.screen.height) *
                  window.devicePixelRatio
                );
              },
              p = function() {
                if (document.exitFullscreen) document.exitFullscreen();
                else if (document.webkitExitFullscreen)
                  document.webkitExitFullscreen();
                else if (document.mozCancelFullScreen)
                  document.mozCancelFullScreen();
                else {
                  if (!document.msExitFullscreen) return !1;
                  document.msExitFullscreen();
                }
                return !0;
              },
              m = function(e, t, r, i) {
                var n = e.createShader(e.VERTEX_SHADER);
                e.shaderSource(n, t), e.compileShader(n);
                var s = e.createShader(e.FRAGMENT_SHADER);
                e.shaderSource(s, r), e.compileShader(s);
                var a = e.createProgram();
                for (var o in (e.attachShader(a, n), e.attachShader(a, s), i))
                  e.bindAttribLocation(a, i[o], o);
                return (
                  e.linkProgram(a), e.deleteShader(n), e.deleteShader(s), a
                );
              },
              g = function(e, t) {
                for (
                  var r = {},
                    i = e.getProgramParameter(t, e.ACTIVE_UNIFORMS),
                    n = '',
                    s = 0;
                  s < i;
                  s++
                )
                  r[
                    (n = e.getActiveUniform(t, s).name.replace('[0]', ''))
                  ] = e.getUniformLocation(t, n);
                return r;
              },
              _ = function() {
                var e,
                  t = !1;
                return (
                  (e = navigator.userAgent || navigator.vendor || window.opera),
                  (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
                    e
                  ) ||
                    /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
                      e.substr(0, 4)
                    )) &&
                    (t = !0),
                  t
                );
              },
              v = function(e, t) {
                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
                return e;
              },
              w = function(e) {
                if (a()) {
                  var t = e.style.width,
                    r = e.style.height;
                  (e.style.width = parseInt(t) + 1 + 'px'),
                    (e.style.height = parseInt(r) + 'px'),
                    setTimeout(function() {
                      (e.style.width = t), (e.style.height = r);
                    }, 100);
                }
                window.canvas = e;
              },
              b = (function() {
                var e = Math.PI / 180,
                  t = 0.25 * Math.PI,
                  r = new Float32Array([0, 0, 0, 1]),
                  i = new Float32Array([0, 0, 0]);
                function n(n, s, a, o, l, h) {
                  !(function(r, i, n, s) {
                    var a = Math.tan(i ? i.upDegrees * e : t),
                      o = Math.tan(i ? i.downDegrees * e : t),
                      l = Math.tan(i ? i.leftDegrees * e : t),
                      h = Math.tan(i ? i.rightDegrees * e : t),
                      u = 2 / (l + h),
                      c = 2 / (a + o);
                    (r[0] = u),
                      (r[1] = 0),
                      (r[2] = 0),
                      (r[3] = 0),
                      (r[4] = 0),
                      (r[5] = c),
                      (r[6] = 0),
                      (r[7] = 0),
                      (r[8] = -(l - h) * u * 0.5),
                      (r[9] = (a - o) * c * 0.5),
                      (r[10] = s / (n - s)),
                      (r[11] = -1),
                      (r[12] = 0),
                      (r[13] = 0),
                      (r[14] = (s * n) / (n - s)),
                      (r[15] = 0);
                  })(n, o || null, h.depthNear, h.depthFar);
                  var u,
                    c,
                    d,
                    A,
                    f,
                    p,
                    m,
                    g,
                    _,
                    v,
                    w,
                    b,
                    y,
                    E,
                    M,
                    x,
                    S,
                    R,
                    T,
                    F = a.orientation || r,
                    C = a.position || i;
                  (u = s),
                    (d = C),
                    (A = (c = F)[0]),
                    (f = c[1]),
                    (p = c[2]),
                    (m = c[3]),
                    (w = A * (g = A + A)),
                    (b = A * (_ = f + f)),
                    (y = A * (v = p + p)),
                    (E = f * _),
                    (M = f * v),
                    (x = p * v),
                    (S = m * g),
                    (R = m * _),
                    (T = m * v),
                    (u[0] = 1 - (E + x)),
                    (u[1] = b + T),
                    (u[2] = y - R),
                    (u[3] = 0),
                    (u[4] = b - T),
                    (u[5] = 1 - (w + x)),
                    (u[6] = M + S),
                    (u[7] = 0),
                    (u[8] = y + R),
                    (u[9] = M - S),
                    (u[10] = 1 - (w + E)),
                    (u[11] = 0),
                    (u[12] = d[0]),
                    (u[13] = d[1]),
                    (u[14] = d[2]),
                    (u[15] = 1),
                    l &&
                      (function(e, t, r) {
                        var i,
                          n,
                          s,
                          a,
                          o,
                          l,
                          h,
                          u,
                          c,
                          d,
                          A,
                          f,
                          p = r[0],
                          m = r[1],
                          g = r[2];
                        t === e
                          ? ((e[12] = t[0] * p + t[4] * m + t[8] * g + t[12]),
                            (e[13] = t[1] * p + t[5] * m + t[9] * g + t[13]),
                            (e[14] = t[2] * p + t[6] * m + t[10] * g + t[14]),
                            (e[15] = t[3] * p + t[7] * m + t[11] * g + t[15]))
                          : ((i = t[0]),
                            (n = t[1]),
                            (s = t[2]),
                            (a = t[3]),
                            (o = t[4]),
                            (l = t[5]),
                            (h = t[6]),
                            (u = t[7]),
                            (c = t[8]),
                            (d = t[9]),
                            (A = t[10]),
                            (f = t[11]),
                            (e[0] = i),
                            (e[1] = n),
                            (e[2] = s),
                            (e[3] = a),
                            (e[4] = o),
                            (e[5] = l),
                            (e[6] = h),
                            (e[7] = u),
                            (e[8] = c),
                            (e[9] = d),
                            (e[10] = A),
                            (e[11] = f),
                            (e[12] = i * p + o * m + c * g + t[12]),
                            (e[13] = n * p + l * m + d * g + t[13]),
                            (e[14] = s * p + h * m + A * g + t[14]),
                            (e[15] = a * p + u * m + f * g + t[15]));
                      })(s, s, l),
                    (function(e, t) {
                      var r = t[0],
                        i = t[1],
                        n = t[2],
                        s = t[3],
                        a = t[4],
                        o = t[5],
                        l = t[6],
                        h = t[7],
                        u = t[8],
                        c = t[9],
                        d = t[10],
                        A = t[11],
                        f = t[12],
                        p = t[13],
                        m = t[14],
                        g = t[15],
                        _ = r * o - i * a,
                        v = r * l - n * a,
                        w = r * h - s * a,
                        b = i * l - n * o,
                        y = i * h - s * o,
                        E = n * h - s * l,
                        M = u * p - c * f,
                        x = u * m - d * f,
                        S = u * g - A * f,
                        R = c * m - d * p,
                        T = c * g - A * p,
                        F = d * g - A * m,
                        C = _ * F - v * T + w * R + b * S - y * x + E * M;
                      C &&
                        ((C = 1 / C),
                        (e[0] = (o * F - l * T + h * R) * C),
                        (e[1] = (n * T - i * F - s * R) * C),
                        (e[2] = (p * E - m * y + g * b) * C),
                        (e[3] = (d * y - c * E - A * b) * C),
                        (e[4] = (l * S - a * F - h * x) * C),
                        (e[5] = (r * F - n * S + s * x) * C),
                        (e[6] = (m * w - f * E - g * v) * C),
                        (e[7] = (u * E - d * w + A * v) * C),
                        (e[8] = (a * T - o * S + h * M) * C),
                        (e[9] = (i * S - r * T - s * M) * C),
                        (e[10] = (f * y - p * w + g * _) * C),
                        (e[11] = (c * w - u * y - A * _) * C),
                        (e[12] = (o * x - a * R - l * M) * C),
                        (e[13] = (r * R - i * x + n * M) * C),
                        (e[14] = (p * v - f * b - m * _) * C),
                        (e[15] = (u * b - c * v + d * _) * C));
                    })(s, s);
                }
                return function(e, t, r) {
                  return !(
                    !e ||
                    !t ||
                    ((e.pose = t),
                    (e.timestamp = t.timestamp),
                    n(
                      e.leftProjectionMatrix,
                      e.leftViewMatrix,
                      t,
                      r._getFieldOfView('left'),
                      r._getEyeOffset('left'),
                      r
                    ),
                    n(
                      e.rightProjectionMatrix,
                      e.rightViewMatrix,
                      t,
                      r._getFieldOfView('right'),
                      r._getEyeOffset('right'),
                      r
                    ),
                    0)
                  );
                };
              })(),
              y = function(e) {
                var t,
                  r = e.indexOf('://');
                t = -1 !== r ? r + 3 : 0;
                var i = e.indexOf('/', t);
                return -1 === i && (i = e.length), e.substring(0, i);
              },
              E =
                ((e = {}),
                function(t, r) {
                  void 0 === e[t] &&
                    (console.warn('webvr-polyfill: ' + r), (e[t] = !0));
                }),
              M = function(e, t) {
                E(
                  e,
                  e +
                    ' has been deprecated. This may not work on native WebVR displays. ' +
                    (t ? 'Please use ' + t + ' instead.' : '')
                );
              },
              x = function(e, t, r) {
                if (t) {
                  for (var i = [], n = null, s = 0; s < t.length; ++s)
                    switch ((a = t[s])) {
                      case e.TEXTURE_BINDING_2D:
                      case e.TEXTURE_BINDING_CUBE_MAP:
                        if ((l = t[++s]) < e.TEXTURE0 || l > e.TEXTURE31) {
                          console.error(
                            'TEXTURE_BINDING_2D or TEXTURE_BINDING_CUBE_MAP must be followed by a valid texture unit'
                          ),
                            i.push(null, null);
                          break;
                        }
                        n || (n = e.getParameter(e.ACTIVE_TEXTURE)),
                          e.activeTexture(l),
                          i.push(e.getParameter(a), null);
                        break;
                      case e.ACTIVE_TEXTURE:
                        (n = e.getParameter(e.ACTIVE_TEXTURE)), i.push(null);
                        break;
                      default:
                        i.push(e.getParameter(a));
                    }
                  for (r(e), s = 0; s < t.length; ++s) {
                    var a = t[s],
                      o = i[s];
                    switch (a) {
                      case e.ACTIVE_TEXTURE:
                        break;
                      case e.ARRAY_BUFFER_BINDING:
                        e.bindBuffer(e.ARRAY_BUFFER, o);
                        break;
                      case e.COLOR_CLEAR_VALUE:
                        e.clearColor(o[0], o[1], o[2], o[3]);
                        break;
                      case e.COLOR_WRITEMASK:
                        e.colorMask(o[0], o[1], o[2], o[3]);
                        break;
                      case e.CURRENT_PROGRAM:
                        e.useProgram(o);
                        break;
                      case e.ELEMENT_ARRAY_BUFFER_BINDING:
                        e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, o);
                        break;
                      case e.FRAMEBUFFER_BINDING:
                        e.bindFramebuffer(e.FRAMEBUFFER, o);
                        break;
                      case e.RENDERBUFFER_BINDING:
                        e.bindRenderbuffer(e.RENDERBUFFER, o);
                        break;
                      case e.TEXTURE_BINDING_2D:
                        if ((l = t[++s]) < e.TEXTURE0 || l > e.TEXTURE31) break;
                        e.activeTexture(l), e.bindTexture(e.TEXTURE_2D, o);
                        break;
                      case e.TEXTURE_BINDING_CUBE_MAP:
                        var l;
                        if ((l = t[++s]) < e.TEXTURE0 || l > e.TEXTURE31) break;
                        e.activeTexture(l),
                          e.bindTexture(e.TEXTURE_CUBE_MAP, o);
                        break;
                      case e.VIEWPORT:
                        e.viewport(o[0], o[1], o[2], o[3]);
                        break;
                      case e.BLEND:
                      case e.CULL_FACE:
                      case e.DEPTH_TEST:
                      case e.SCISSOR_TEST:
                      case e.STENCIL_TEST:
                        o ? e.enable(a) : e.disable(a);
                        break;
                      default:
                        console.log(
                          'No GL restore behavior for 0x' + a.toString(16)
                        );
                    }
                    n && e.activeTexture(n);
                  }
                } else r(e);
              },
              S = [
                'attribute vec2 position;',
                'attribute vec3 texCoord;',
                'varying vec2 vTexCoord;',
                'uniform vec4 viewportOffsetScale[2];',
                'void main() {',
                '  vec4 viewport = viewportOffsetScale[int(texCoord.z)];',
                '  vTexCoord = (texCoord.xy * viewport.zw) + viewport.xy;',
                '  gl_Position = vec4( position, 1.0, 1.0 );',
                '}',
              ].join('\n'),
              R = [
                'precision mediump float;',
                'uniform sampler2D diffuse;',
                'varying vec2 vTexCoord;',
                'void main() {',
                '  gl_FragColor = texture2D(diffuse, vTexCoord);',
                '}',
              ].join('\n');
            function T(e, t, r, i) {
              (this.gl = e),
                (this.cardboardUI = t),
                (this.bufferScale = r),
                (this.dirtySubmitFrameBindings = i),
                (this.ctxAttribs = e.getContextAttributes()),
                (this.meshWidth = 20),
                (this.meshHeight = 20),
                (this.bufferWidth = e.drawingBufferWidth),
                (this.bufferHeight = e.drawingBufferHeight),
                (this.realBindFramebuffer = e.bindFramebuffer),
                (this.realEnable = e.enable),
                (this.realDisable = e.disable),
                (this.realColorMask = e.colorMask),
                (this.realClearColor = e.clearColor),
                (this.realViewport = e.viewport),
                a() ||
                  ((this.realCanvasWidth = Object.getOwnPropertyDescriptor(
                    e.canvas.__proto__,
                    'width'
                  )),
                  (this.realCanvasHeight = Object.getOwnPropertyDescriptor(
                    e.canvas.__proto__,
                    'height'
                  ))),
                (this.isPatched = !1),
                (this.lastBoundFramebuffer = null),
                (this.cullFace = !1),
                (this.depthTest = !1),
                (this.blend = !1),
                (this.scissorTest = !1),
                (this.stencilTest = !1),
                (this.viewport = [0, 0, 0, 0]),
                (this.colorMask = [!0, !0, !0, !0]),
                (this.clearColor = [0, 0, 0, 0]),
                (this.attribs = { position: 0, texCoord: 1 }),
                (this.program = m(e, S, R, this.attribs)),
                (this.uniforms = g(e, this.program)),
                (this.viewportOffsetScale = new Float32Array(8)),
                this.setTextureBounds(),
                (this.vertexBuffer = e.createBuffer()),
                (this.indexBuffer = e.createBuffer()),
                (this.indexCount = 0),
                (this.renderTarget = e.createTexture()),
                (this.framebuffer = e.createFramebuffer()),
                (this.depthStencilBuffer = null),
                (this.depthBuffer = null),
                (this.stencilBuffer = null),
                this.ctxAttribs.depth && this.ctxAttribs.stencil
                  ? (this.depthStencilBuffer = e.createRenderbuffer())
                  : this.ctxAttribs.depth
                  ? (this.depthBuffer = e.createRenderbuffer())
                  : this.ctxAttribs.stencil &&
                    (this.stencilBuffer = e.createRenderbuffer()),
                this.patch(),
                this.onResize();
            }
            (T.prototype.destroy = function() {
              var e = this.gl;
              this.unpatch(),
                e.deleteProgram(this.program),
                e.deleteBuffer(this.vertexBuffer),
                e.deleteBuffer(this.indexBuffer),
                e.deleteTexture(this.renderTarget),
                e.deleteFramebuffer(this.framebuffer),
                this.depthStencilBuffer &&
                  e.deleteRenderbuffer(this.depthStencilBuffer),
                this.depthBuffer && e.deleteRenderbuffer(this.depthBuffer),
                this.stencilBuffer && e.deleteRenderbuffer(this.stencilBuffer),
                this.cardboardUI && this.cardboardUI.destroy();
            }),
              (T.prototype.onResize = function() {
                var e = this.gl,
                  t = this,
                  r = [
                    e.RENDERBUFFER_BINDING,
                    e.TEXTURE_BINDING_2D,
                    e.TEXTURE0,
                  ];
                x(e, r, function(e) {
                  t.realBindFramebuffer.call(e, e.FRAMEBUFFER, null),
                    t.scissorTest && t.realDisable.call(e, e.SCISSOR_TEST),
                    t.realColorMask.call(e, !0, !0, !0, !0),
                    t.realViewport.call(
                      e,
                      0,
                      0,
                      e.drawingBufferWidth,
                      e.drawingBufferHeight
                    ),
                    t.realClearColor.call(e, 0, 0, 0, 1),
                    e.clear(e.COLOR_BUFFER_BIT),
                    t.realBindFramebuffer.call(e, e.FRAMEBUFFER, t.framebuffer),
                    e.bindTexture(e.TEXTURE_2D, t.renderTarget),
                    e.texImage2D(
                      e.TEXTURE_2D,
                      0,
                      t.ctxAttribs.alpha ? e.RGBA : e.RGB,
                      t.bufferWidth,
                      t.bufferHeight,
                      0,
                      t.ctxAttribs.alpha ? e.RGBA : e.RGB,
                      e.UNSIGNED_BYTE,
                      null
                    ),
                    e.texParameteri(
                      e.TEXTURE_2D,
                      e.TEXTURE_MAG_FILTER,
                      e.LINEAR
                    ),
                    e.texParameteri(
                      e.TEXTURE_2D,
                      e.TEXTURE_MIN_FILTER,
                      e.LINEAR
                    ),
                    e.texParameteri(
                      e.TEXTURE_2D,
                      e.TEXTURE_WRAP_S,
                      e.CLAMP_TO_EDGE
                    ),
                    e.texParameteri(
                      e.TEXTURE_2D,
                      e.TEXTURE_WRAP_T,
                      e.CLAMP_TO_EDGE
                    ),
                    e.framebufferTexture2D(
                      e.FRAMEBUFFER,
                      e.COLOR_ATTACHMENT0,
                      e.TEXTURE_2D,
                      t.renderTarget,
                      0
                    ),
                    t.ctxAttribs.depth && t.ctxAttribs.stencil
                      ? (e.bindRenderbuffer(
                          e.RENDERBUFFER,
                          t.depthStencilBuffer
                        ),
                        e.renderbufferStorage(
                          e.RENDERBUFFER,
                          e.DEPTH_STENCIL,
                          t.bufferWidth,
                          t.bufferHeight
                        ),
                        e.framebufferRenderbuffer(
                          e.FRAMEBUFFER,
                          e.DEPTH_STENCIL_ATTACHMENT,
                          e.RENDERBUFFER,
                          t.depthStencilBuffer
                        ))
                      : t.ctxAttribs.depth
                      ? (e.bindRenderbuffer(e.RENDERBUFFER, t.depthBuffer),
                        e.renderbufferStorage(
                          e.RENDERBUFFER,
                          e.DEPTH_COMPONENT16,
                          t.bufferWidth,
                          t.bufferHeight
                        ),
                        e.framebufferRenderbuffer(
                          e.FRAMEBUFFER,
                          e.DEPTH_ATTACHMENT,
                          e.RENDERBUFFER,
                          t.depthBuffer
                        ))
                      : t.ctxAttribs.stencil &&
                        (e.bindRenderbuffer(e.RENDERBUFFER, t.stencilBuffer),
                        e.renderbufferStorage(
                          e.RENDERBUFFER,
                          e.STENCIL_INDEX8,
                          t.bufferWidth,
                          t.bufferHeight
                        ),
                        e.framebufferRenderbuffer(
                          e.FRAMEBUFFER,
                          e.STENCIL_ATTACHMENT,
                          e.RENDERBUFFER,
                          t.stencilBuffer
                        )),
                    !e.checkFramebufferStatus(e.FRAMEBUFFER) ===
                      e.FRAMEBUFFER_COMPLETE &&
                      console.error('Framebuffer incomplete!'),
                    t.realBindFramebuffer.call(
                      e,
                      e.FRAMEBUFFER,
                      t.lastBoundFramebuffer
                    ),
                    t.scissorTest && t.realEnable.call(e, e.SCISSOR_TEST),
                    t.realColorMask.apply(e, t.colorMask),
                    t.realViewport.apply(e, t.viewport),
                    t.realClearColor.apply(e, t.clearColor);
                }),
                  this.cardboardUI && this.cardboardUI.onResize();
              }),
              (T.prototype.patch = function() {
                if (!this.isPatched) {
                  var e = this,
                    t = this.gl.canvas,
                    r = this.gl;
                  a() ||
                    ((t.width = A() * this.bufferScale),
                    (t.height = f() * this.bufferScale),
                    Object.defineProperty(t, 'width', {
                      configurable: !0,
                      enumerable: !0,
                      get: function() {
                        return e.bufferWidth;
                      },
                      set: function(r) {
                        (e.bufferWidth = r),
                          e.realCanvasWidth.set.call(t, r),
                          e.onResize();
                      },
                    }),
                    Object.defineProperty(t, 'height', {
                      configurable: !0,
                      enumerable: !0,
                      get: function() {
                        return e.bufferHeight;
                      },
                      set: function(r) {
                        (e.bufferHeight = r),
                          e.realCanvasHeight.set.call(t, r),
                          e.onResize();
                      },
                    })),
                    (this.lastBoundFramebuffer = r.getParameter(
                      r.FRAMEBUFFER_BINDING
                    )),
                    null == this.lastBoundFramebuffer &&
                      ((this.lastBoundFramebuffer = this.framebuffer),
                      this.gl.bindFramebuffer(r.FRAMEBUFFER, this.framebuffer)),
                    (this.gl.bindFramebuffer = function(t, i) {
                      (e.lastBoundFramebuffer = i || e.framebuffer),
                        e.realBindFramebuffer.call(
                          r,
                          t,
                          e.lastBoundFramebuffer
                        );
                    }),
                    (this.cullFace = r.getParameter(r.CULL_FACE)),
                    (this.depthTest = r.getParameter(r.DEPTH_TEST)),
                    (this.blend = r.getParameter(r.BLEND)),
                    (this.scissorTest = r.getParameter(r.SCISSOR_TEST)),
                    (this.stencilTest = r.getParameter(r.STENCIL_TEST)),
                    (r.enable = function(t) {
                      switch (t) {
                        case r.CULL_FACE:
                          e.cullFace = !0;
                          break;
                        case r.DEPTH_TEST:
                          e.depthTest = !0;
                          break;
                        case r.BLEND:
                          e.blend = !0;
                          break;
                        case r.SCISSOR_TEST:
                          e.scissorTest = !0;
                          break;
                        case r.STENCIL_TEST:
                          e.stencilTest = !0;
                      }
                      e.realEnable.call(r, t);
                    }),
                    (r.disable = function(t) {
                      switch (t) {
                        case r.CULL_FACE:
                          e.cullFace = !1;
                          break;
                        case r.DEPTH_TEST:
                          e.depthTest = !1;
                          break;
                        case r.BLEND:
                          e.blend = !1;
                          break;
                        case r.SCISSOR_TEST:
                          e.scissorTest = !1;
                          break;
                        case r.STENCIL_TEST:
                          e.stencilTest = !1;
                      }
                      e.realDisable.call(r, t);
                    }),
                    (this.colorMask = r.getParameter(r.COLOR_WRITEMASK)),
                    (r.colorMask = function(t, i, n, s) {
                      (e.colorMask[0] = t),
                        (e.colorMask[1] = i),
                        (e.colorMask[2] = n),
                        (e.colorMask[3] = s),
                        e.realColorMask.call(r, t, i, n, s);
                    }),
                    (this.clearColor = r.getParameter(r.COLOR_CLEAR_VALUE)),
                    (r.clearColor = function(t, i, n, s) {
                      (e.clearColor[0] = t),
                        (e.clearColor[1] = i),
                        (e.clearColor[2] = n),
                        (e.clearColor[3] = s),
                        e.realClearColor.call(r, t, i, n, s);
                    }),
                    (this.viewport = r.getParameter(r.VIEWPORT)),
                    (r.viewport = function(t, i, n, s) {
                      (e.viewport[0] = t),
                        (e.viewport[1] = i),
                        (e.viewport[2] = n),
                        (e.viewport[3] = s),
                        e.realViewport.call(r, t, i, n, s);
                    }),
                    (this.isPatched = !0),
                    w(t);
                }
              }),
              (T.prototype.unpatch = function() {
                if (this.isPatched) {
                  var e = this.gl,
                    t = this.gl.canvas;
                  a() ||
                    (Object.defineProperty(t, 'width', this.realCanvasWidth),
                    Object.defineProperty(t, 'height', this.realCanvasHeight)),
                    (t.width = this.bufferWidth),
                    (t.height = this.bufferHeight),
                    (e.bindFramebuffer = this.realBindFramebuffer),
                    (e.enable = this.realEnable),
                    (e.disable = this.realDisable),
                    (e.colorMask = this.realColorMask),
                    (e.clearColor = this.realClearColor),
                    (e.viewport = this.realViewport),
                    this.lastBoundFramebuffer == this.framebuffer &&
                      e.bindFramebuffer(e.FRAMEBUFFER, null),
                    (this.isPatched = !1),
                    setTimeout(function() {
                      w(t);
                    }, 1);
                }
              }),
              (T.prototype.setTextureBounds = function(e, t) {
                e || (e = [0, 0, 0.5, 1]),
                  t || (t = [0.5, 0, 0.5, 1]),
                  (this.viewportOffsetScale[0] = e[0]),
                  (this.viewportOffsetScale[1] = e[1]),
                  (this.viewportOffsetScale[2] = e[2]),
                  (this.viewportOffsetScale[3] = e[3]),
                  (this.viewportOffsetScale[4] = t[0]),
                  (this.viewportOffsetScale[5] = t[1]),
                  (this.viewportOffsetScale[6] = t[2]),
                  (this.viewportOffsetScale[7] = t[3]);
              }),
              (T.prototype.submitFrame = function() {
                var e = this.gl,
                  t = this,
                  r = [];
                if (
                  (this.dirtySubmitFrameBindings ||
                    r.push(
                      e.CURRENT_PROGRAM,
                      e.ARRAY_BUFFER_BINDING,
                      e.ELEMENT_ARRAY_BUFFER_BINDING,
                      e.TEXTURE_BINDING_2D,
                      e.TEXTURE0
                    ),
                  x(e, r, function(e) {
                    t.realBindFramebuffer.call(e, e.FRAMEBUFFER, null),
                      t.cullFace && t.realDisable.call(e, e.CULL_FACE),
                      t.depthTest && t.realDisable.call(e, e.DEPTH_TEST),
                      t.blend && t.realDisable.call(e, e.BLEND),
                      t.scissorTest && t.realDisable.call(e, e.SCISSOR_TEST),
                      t.stencilTest && t.realDisable.call(e, e.STENCIL_TEST),
                      t.realColorMask.call(e, !0, !0, !0, !0),
                      t.realViewport.call(
                        e,
                        0,
                        0,
                        e.drawingBufferWidth,
                        e.drawingBufferHeight
                      ),
                      (t.ctxAttribs.alpha || a()) &&
                        (t.realClearColor.call(e, 0, 0, 0, 1),
                        e.clear(e.COLOR_BUFFER_BIT)),
                      e.useProgram(t.program),
                      e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, t.indexBuffer),
                      e.bindBuffer(e.ARRAY_BUFFER, t.vertexBuffer),
                      e.enableVertexAttribArray(t.attribs.position),
                      e.enableVertexAttribArray(t.attribs.texCoord),
                      e.vertexAttribPointer(
                        t.attribs.position,
                        2,
                        e.FLOAT,
                        !1,
                        20,
                        0
                      ),
                      e.vertexAttribPointer(
                        t.attribs.texCoord,
                        3,
                        e.FLOAT,
                        !1,
                        20,
                        8
                      ),
                      e.activeTexture(e.TEXTURE0),
                      e.uniform1i(t.uniforms.diffuse, 0),
                      e.bindTexture(e.TEXTURE_2D, t.renderTarget),
                      e.uniform4fv(
                        t.uniforms.viewportOffsetScale,
                        t.viewportOffsetScale
                      ),
                      e.drawElements(
                        e.TRIANGLES,
                        t.indexCount,
                        e.UNSIGNED_SHORT,
                        0
                      ),
                      t.cardboardUI && t.cardboardUI.renderNoState(),
                      t.realBindFramebuffer.call(
                        t.gl,
                        e.FRAMEBUFFER,
                        t.framebuffer
                      ),
                      t.ctxAttribs.preserveDrawingBuffer ||
                        (t.realClearColor.call(e, 0, 0, 0, 0),
                        e.clear(e.COLOR_BUFFER_BIT)),
                      t.dirtySubmitFrameBindings ||
                        t.realBindFramebuffer.call(
                          e,
                          e.FRAMEBUFFER,
                          t.lastBoundFramebuffer
                        ),
                      t.cullFace && t.realEnable.call(e, e.CULL_FACE),
                      t.depthTest && t.realEnable.call(e, e.DEPTH_TEST),
                      t.blend && t.realEnable.call(e, e.BLEND),
                      t.scissorTest && t.realEnable.call(e, e.SCISSOR_TEST),
                      t.stencilTest && t.realEnable.call(e, e.STENCIL_TEST),
                      t.realColorMask.apply(e, t.colorMask),
                      t.realViewport.apply(e, t.viewport),
                      (!t.ctxAttribs.alpha &&
                        t.ctxAttribs.preserveDrawingBuffer) ||
                        t.realClearColor.apply(e, t.clearColor);
                  }),
                  a())
                ) {
                  var i = e.canvas;
                  (i.width == t.bufferWidth && i.height == t.bufferHeight) ||
                    ((t.bufferWidth = i.width),
                    (t.bufferHeight = i.height),
                    t.onResize());
                }
              }),
              (T.prototype.updateDeviceInfo = function(e) {
                var t = this.gl,
                  r = this,
                  i = [t.ARRAY_BUFFER_BINDING, t.ELEMENT_ARRAY_BUFFER_BINDING];
                x(t, i, function(t) {
                  var i = r.computeMeshVertices_(r.meshWidth, r.meshHeight, e);
                  if (
                    (t.bindBuffer(t.ARRAY_BUFFER, r.vertexBuffer),
                    t.bufferData(t.ARRAY_BUFFER, i, t.STATIC_DRAW),
                    !r.indexCount)
                  ) {
                    var n = r.computeMeshIndices_(r.meshWidth, r.meshHeight);
                    t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, r.indexBuffer),
                      t.bufferData(t.ELEMENT_ARRAY_BUFFER, n, t.STATIC_DRAW),
                      (r.indexCount = n.length);
                  }
                });
              }),
              (T.prototype.computeMeshVertices_ = function(e, t, r) {
                for (
                  var i = new Float32Array(2 * e * t * 5),
                    n = r.getLeftEyeVisibleTanAngles(),
                    a = r.getLeftEyeNoLensTanAngles(),
                    o = r.getLeftEyeVisibleScreenRect(a),
                    l = 0,
                    h = 0;
                  h < 2;
                  h++
                ) {
                  for (var u = 0; u < t; u++)
                    for (var c = 0; c < e; c++, l++) {
                      var d = c / (e - 1),
                        A = u / (t - 1),
                        f = d,
                        p = A,
                        m = s(n[0], n[2], d),
                        g = s(n[3], n[1], A),
                        _ = Math.sqrt(m * m + g * g),
                        v = r.distortion.distortInverse(_),
                        w = (g * v) / _;
                      (d = ((m * v) / _ - a[0]) / (a[2] - a[0])),
                        (A = (w - a[3]) / (a[1] - a[3])),
                        (d = 2 * (o.x + d * o.width - 0.5)),
                        (A = 2 * (o.y + A * o.height - 0.5)),
                        (i[5 * l + 0] = d),
                        (i[5 * l + 1] = A),
                        (i[5 * l + 2] = f),
                        (i[5 * l + 3] = p),
                        (i[5 * l + 4] = h);
                    }
                  var b = n[2] - n[0];
                  (n[0] = -(b + n[0])),
                    (n[2] = b - n[2]),
                    (b = a[2] - a[0]),
                    (a[0] = -(b + a[0])),
                    (a[2] = b - a[2]),
                    (o.x = 1 - (o.x + o.width));
                }
                return i;
              }),
              (T.prototype.computeMeshIndices_ = function(e, t) {
                for (
                  var r = new Uint16Array(2 * (e - 1) * (t - 1) * 6),
                    i = e / 2,
                    n = t / 2,
                    s = 0,
                    a = 0,
                    o = 0;
                  o < 2;
                  o++
                )
                  for (var l = 0; l < t; l++)
                    for (var h = 0; h < e; h++, s++)
                      0 != h &&
                        0 != l &&
                        (h <= i == l <= n
                          ? ((r[a++] = s),
                            (r[a++] = s - e - 1),
                            (r[a++] = s - e),
                            (r[a++] = s - e - 1),
                            (r[a++] = s),
                            (r[a++] = s - 1))
                          : ((r[a++] = s - 1),
                            (r[a++] = s - e),
                            (r[a++] = s),
                            (r[a++] = s - e),
                            (r[a++] = s - 1),
                            (r[a++] = s - e - 1)));
                return r;
              }),
              (T.prototype.getOwnPropertyDescriptor_ = function(e, t) {
                var r = Object.getOwnPropertyDescriptor(e, t);
                return (
                  (void 0 !== r.get && void 0 !== r.set) ||
                    ((r.configurable = !0),
                    (r.enumerable = !0),
                    (r.get = function() {
                      return this.getAttribute(t);
                    }),
                    (r.set = function(e) {
                      this.setAttribute(t, e);
                    })),
                  r
                );
              });
            var F = [
                'attribute vec2 position;',
                'uniform mat4 projectionMat;',
                'void main() {',
                '  gl_Position = projectionMat * vec4( position, -1.0, 1.0 );',
                '}',
              ].join('\n'),
              C = [
                'precision mediump float;',
                'uniform vec4 color;',
                'void main() {',
                '  gl_FragColor = color;',
                '}',
              ].join('\n'),
              P = Math.PI / 180;
            function I(e) {
              (this.gl = e),
                (this.attribs = { position: 0 }),
                (this.program = m(e, F, C, this.attribs)),
                (this.uniforms = g(e, this.program)),
                (this.vertexBuffer = e.createBuffer()),
                (this.gearOffset = 0),
                (this.gearVertexCount = 0),
                (this.arrowOffset = 0),
                (this.arrowVertexCount = 0),
                (this.projMat = new Float32Array(16)),
                (this.listener = null),
                this.onResize();
            }
            function B(e) {
              this.coefficients = e;
            }
            (I.prototype.destroy = function() {
              var e = this.gl;
              this.listener &&
                e.canvas.removeEventListener('click', this.listener, !1),
                e.deleteProgram(this.program),
                e.deleteBuffer(this.vertexBuffer);
            }),
              (I.prototype.listen = function(e, t) {
                var r = this.gl.canvas;
                (this.listener = function(i) {
                  var n = r.clientWidth / 2;
                  i.clientX > n - 42 &&
                  i.clientX < n + 42 &&
                  i.clientY > r.clientHeight - 42
                    ? e(i)
                    : i.clientX < 42 && i.clientY < 42 && t(i);
                }),
                  r.addEventListener('click', this.listener, !1);
              }),
              (I.prototype.onResize = function() {
                var e = this.gl,
                  t = this,
                  r = [e.ARRAY_BUFFER_BINDING];
                x(e, r, function(e) {
                  var r = [],
                    i = e.drawingBufferWidth / 2,
                    n =
                      Math.max(screen.width, screen.height) *
                      window.devicePixelRatio,
                    s = (e.drawingBufferWidth / n) * window.devicePixelRatio,
                    a = (4 * s) / 2,
                    o = 42 * s,
                    l = (28 * s) / 2,
                    h = 14 * s;
                  function u(e, t) {
                    var n = (90 - e) * P,
                      s = Math.cos(n),
                      a = Math.sin(n);
                    r.push(0.3125 * s * l + i, 0.3125 * a * l + l),
                      r.push(t * s * l + i, t * a * l + l);
                  }
                  r.push(i - a, o),
                    r.push(i - a, e.drawingBufferHeight),
                    r.push(i + a, o),
                    r.push(i + a, e.drawingBufferHeight),
                    (t.gearOffset = r.length / 2);
                  for (var c = 0; c <= 6; c++) {
                    var d = 60 * c;
                    u(d, 1),
                      u(d + 12, 1),
                      u(d + 20, 0.75),
                      u(d + 40, 0.75),
                      u(d + 48, 1);
                  }
                  function A(t, i) {
                    r.push(h + t, e.drawingBufferHeight - h - i);
                  }
                  (t.gearVertexCount = r.length / 2 - t.gearOffset),
                    (t.arrowOffset = r.length / 2);
                  var f = a / Math.sin(45 * P);
                  A(0, l),
                    A(l, 0),
                    A(l + f, f),
                    A(f, l + f),
                    A(f, l - f),
                    A(0, l),
                    A(l, 2 * l),
                    A(l + f, 2 * l - f),
                    A(f, l - f),
                    A(0, l),
                    A(f, l - a),
                    A(28 * s, l - a),
                    A(f, l + a),
                    A(28 * s, l + a),
                    (t.arrowVertexCount = r.length / 2 - t.arrowOffset),
                    e.bindBuffer(e.ARRAY_BUFFER, t.vertexBuffer),
                    e.bufferData(
                      e.ARRAY_BUFFER,
                      new Float32Array(r),
                      e.STATIC_DRAW
                    );
                });
              }),
              (I.prototype.render = function() {
                var e = this.gl,
                  t = this,
                  r = [
                    e.CULL_FACE,
                    e.DEPTH_TEST,
                    e.BLEND,
                    e.SCISSOR_TEST,
                    e.STENCIL_TEST,
                    e.COLOR_WRITEMASK,
                    e.VIEWPORT,
                    e.CURRENT_PROGRAM,
                    e.ARRAY_BUFFER_BINDING,
                  ];
                x(e, r, function(e) {
                  e.disable(e.CULL_FACE),
                    e.disable(e.DEPTH_TEST),
                    e.disable(e.BLEND),
                    e.disable(e.SCISSOR_TEST),
                    e.disable(e.STENCIL_TEST),
                    e.colorMask(!0, !0, !0, !0),
                    e.viewport(
                      0,
                      0,
                      e.drawingBufferWidth,
                      e.drawingBufferHeight
                    ),
                    t.renderNoState();
                });
              }),
              (I.prototype.renderNoState = function() {
                var e,
                  t,
                  r,
                  i,
                  n,
                  s,
                  a,
                  o,
                  l,
                  h,
                  u = this.gl;
                u.useProgram(this.program),
                  u.bindBuffer(u.ARRAY_BUFFER, this.vertexBuffer),
                  u.enableVertexAttribArray(this.attribs.position),
                  u.vertexAttribPointer(
                    this.attribs.position,
                    2,
                    u.FLOAT,
                    !1,
                    8,
                    0
                  ),
                  u.uniform4f(this.uniforms.color, 1, 1, 1, 1),
                  (e = this.projMat),
                  (t = 0),
                  (r = u.drawingBufferWidth),
                  (i = 0),
                  (n = u.drawingBufferHeight),
                  (o = 1 / (t - r)),
                  (l = 1 / (i - n)),
                  (h = 1 / ((s = 0.1) - (a = 1024))),
                  (e[0] = -2 * o),
                  (e[1] = 0),
                  (e[2] = 0),
                  (e[3] = 0),
                  (e[4] = 0),
                  (e[5] = -2 * l),
                  (e[6] = 0),
                  (e[7] = 0),
                  (e[8] = 0),
                  (e[9] = 0),
                  (e[10] = 2 * h),
                  (e[11] = 0),
                  (e[12] = (t + r) * o),
                  (e[13] = (n + i) * l),
                  (e[14] = (a + s) * h),
                  (e[15] = 1),
                  u.uniformMatrix4fv(
                    this.uniforms.projectionMat,
                    !1,
                    this.projMat
                  ),
                  u.drawArrays(u.TRIANGLE_STRIP, 0, 4),
                  u.drawArrays(
                    u.TRIANGLE_STRIP,
                    this.gearOffset,
                    this.gearVertexCount
                  ),
                  u.drawArrays(
                    u.TRIANGLE_STRIP,
                    this.arrowOffset,
                    this.arrowVertexCount
                  );
              }),
              (B.prototype.distortInverse = function(e) {
                for (
                  var t = 0, r = 1, i = e - this.distort(t);
                  Math.abs(r - t) > 1e-4;

                ) {
                  var n = e - this.distort(r),
                    s = r - n * ((r - t) / (n - i));
                  (t = r), (r = s), (i = n);
                }
                return r;
              }),
              (B.prototype.distort = function(e) {
                for (
                  var t = e * e, r = 0, i = 0;
                  i < this.coefficients.length;
                  i++
                )
                  r = t * (r + this.coefficients[i]);
                return (r + 1) * e;
              });
            var D = Math.PI / 180,
              L = 180 / Math.PI,
              O = function(e, t, r) {
                (this.x = e || 0), (this.y = t || 0), (this.z = r || 0);
              };
            O.prototype = {
              constructor: O,
              set: function(e, t, r) {
                return (this.x = e), (this.y = t), (this.z = r), this;
              },
              copy: function(e) {
                return (this.x = e.x), (this.y = e.y), (this.z = e.z), this;
              },
              length: function() {
                return Math.sqrt(
                  this.x * this.x + this.y * this.y + this.z * this.z
                );
              },
              normalize: function() {
                var e = this.length();
                if (0 !== e) {
                  var t = 1 / e;
                  this.multiplyScalar(t);
                } else (this.x = 0), (this.y = 0), (this.z = 0);
                return this;
              },
              multiplyScalar: function(e) {
                (this.x *= e), (this.y *= e), (this.z *= e);
              },
              applyQuaternion: function(e) {
                var t = this.x,
                  r = this.y,
                  i = this.z,
                  n = e.x,
                  s = e.y,
                  a = e.z,
                  o = e.w,
                  l = o * t + s * i - a * r,
                  h = o * r + a * t - n * i,
                  u = o * i + n * r - s * t,
                  c = -n * t - s * r - a * i;
                return (
                  (this.x = l * o + c * -n + h * -a - u * -s),
                  (this.y = h * o + c * -s + u * -n - l * -a),
                  (this.z = u * o + c * -a + l * -s - h * -n),
                  this
                );
              },
              dot: function(e) {
                return this.x * e.x + this.y * e.y + this.z * e.z;
              },
              crossVectors: function(e, t) {
                var r = e.x,
                  i = e.y,
                  n = e.z,
                  s = t.x,
                  a = t.y,
                  o = t.z;
                return (
                  (this.x = i * o - n * a),
                  (this.y = n * s - r * o),
                  (this.z = r * a - i * s),
                  this
                );
              },
            };
            var N,
              U,
              k = function(e, t, r, i) {
                (this.x = e || 0),
                  (this.y = t || 0),
                  (this.z = r || 0),
                  (this.w = void 0 !== i ? i : 1);
              };
            function G(e) {
              (this.width = e.width || A()),
                (this.height = e.height || f()),
                (this.widthMeters = e.widthMeters),
                (this.heightMeters = e.heightMeters),
                (this.bevelMeters = e.bevelMeters);
            }
            k.prototype = {
              constructor: k,
              set: function(e, t, r, i) {
                return (
                  (this.x = e), (this.y = t), (this.z = r), (this.w = i), this
                );
              },
              copy: function(e) {
                return (
                  (this.x = e.x),
                  (this.y = e.y),
                  (this.z = e.z),
                  (this.w = e.w),
                  this
                );
              },
              setFromEulerXYZ: function(e, t, r) {
                var i = Math.cos(e / 2),
                  n = Math.cos(t / 2),
                  s = Math.cos(r / 2),
                  a = Math.sin(e / 2),
                  o = Math.sin(t / 2),
                  l = Math.sin(r / 2);
                return (
                  (this.x = a * n * s + i * o * l),
                  (this.y = i * o * s - a * n * l),
                  (this.z = i * n * l + a * o * s),
                  (this.w = i * n * s - a * o * l),
                  this
                );
              },
              setFromEulerYXZ: function(e, t, r) {
                var i = Math.cos(e / 2),
                  n = Math.cos(t / 2),
                  s = Math.cos(r / 2),
                  a = Math.sin(e / 2),
                  o = Math.sin(t / 2),
                  l = Math.sin(r / 2);
                return (
                  (this.x = a * n * s + i * o * l),
                  (this.y = i * o * s - a * n * l),
                  (this.z = i * n * l - a * o * s),
                  (this.w = i * n * s + a * o * l),
                  this
                );
              },
              setFromAxisAngle: function(e, t) {
                var r = t / 2,
                  i = Math.sin(r);
                return (
                  (this.x = e.x * i),
                  (this.y = e.y * i),
                  (this.z = e.z * i),
                  (this.w = Math.cos(r)),
                  this
                );
              },
              multiply: function(e) {
                return this.multiplyQuaternions(this, e);
              },
              multiplyQuaternions: function(e, t) {
                var r = e.x,
                  i = e.y,
                  n = e.z,
                  s = e.w,
                  a = t.x,
                  o = t.y,
                  l = t.z,
                  h = t.w;
                return (
                  (this.x = r * h + s * a + i * l - n * o),
                  (this.y = i * h + s * o + n * a - r * l),
                  (this.z = n * h + s * l + r * o - i * a),
                  (this.w = s * h - r * a - i * o - n * l),
                  this
                );
              },
              inverse: function() {
                return (
                  (this.x *= -1),
                  (this.y *= -1),
                  (this.z *= -1),
                  this.normalize(),
                  this
                );
              },
              normalize: function() {
                var e = Math.sqrt(
                  this.x * this.x +
                    this.y * this.y +
                    this.z * this.z +
                    this.w * this.w
                );
                return (
                  0 === e
                    ? ((this.x = 0), (this.y = 0), (this.z = 0), (this.w = 1))
                    : ((e = 1 / e),
                      (this.x = this.x * e),
                      (this.y = this.y * e),
                      (this.z = this.z * e),
                      (this.w = this.w * e)),
                  this
                );
              },
              slerp: function(e, t) {
                if (0 === t) return this;
                if (1 === t) return this.copy(e);
                var r = this.x,
                  i = this.y,
                  n = this.z,
                  s = this.w,
                  a = s * e.w + r * e.x + i * e.y + n * e.z;
                if (
                  (a < 0
                    ? ((this.w = -e.w),
                      (this.x = -e.x),
                      (this.y = -e.y),
                      (this.z = -e.z),
                      (a = -a))
                    : this.copy(e),
                  a >= 1)
                )
                  return (
                    (this.w = s), (this.x = r), (this.y = i), (this.z = n), this
                  );
                var o = Math.acos(a),
                  l = Math.sqrt(1 - a * a);
                if (Math.abs(l) < 0.001)
                  return (
                    (this.w = 0.5 * (s + this.w)),
                    (this.x = 0.5 * (r + this.x)),
                    (this.y = 0.5 * (i + this.y)),
                    (this.z = 0.5 * (n + this.z)),
                    this
                  );
                var h = Math.sin((1 - t) * o) / l,
                  u = Math.sin(t * o) / l;
                return (
                  (this.w = s * h + this.w * u),
                  (this.x = r * h + this.x * u),
                  (this.y = i * h + this.y * u),
                  (this.z = n * h + this.z * u),
                  this
                );
              },
              setFromUnitVectors: function(e, t) {
                return (
                  void 0 === N && (N = new O()),
                  (U = e.dot(t) + 1) < 1e-6
                    ? ((U = 0),
                      Math.abs(e.x) > Math.abs(e.z)
                        ? N.set(-e.y, e.x, 0)
                        : N.set(0, -e.z, e.y))
                    : N.crossVectors(e, t),
                  (this.x = N.x),
                  (this.y = N.y),
                  (this.z = N.z),
                  (this.w = U),
                  this.normalize(),
                  this
                );
              },
            };
            var V = new G({
                widthMeters: 0.11,
                heightMeters: 0.062,
                bevelMeters: 0.004,
              }),
              Q = new G({
                widthMeters: 0.1038,
                heightMeters: 0.0584,
                bevelMeters: 0.004,
              }),
              z = {
                CardboardV1: new H({
                  id: 'CardboardV1',
                  label: 'Cardboard I/O 2014',
                  fov: 40,
                  interLensDistance: 0.06,
                  baselineLensDistance: 0.035,
                  screenLensDistance: 0.042,
                  distortionCoefficients: [0.441, 0.156],
                  inverseCoefficients: [
                    -0.4410035,
                    0.42756155,
                    -0.4804439,
                    0.5460139,
                    -0.58821183,
                    0.5733938,
                    -0.48303202,
                    0.33299083,
                    -0.17573841,
                    0.0651772,
                    -0.01488963,
                    0.001559834,
                  ],
                }),
                CardboardV2: new H({
                  id: 'CardboardV2',
                  label: 'Cardboard I/O 2015',
                  fov: 60,
                  interLensDistance: 0.064,
                  baselineLensDistance: 0.035,
                  screenLensDistance: 0.039,
                  distortionCoefficients: [0.34, 0.55],
                  inverseCoefficients: [
                    -0.33836704,
                    -0.18162185,
                    0.862655,
                    -1.2462051,
                    1.0560602,
                    -0.58208317,
                    0.21609078,
                    -0.05444823,
                    0.009177956,
                    -0.0009904169,
                    6183535e-11,
                    -16981803e-13,
                  ],
                }),
              };
            function X(e, t) {
              (this.viewer = z.CardboardV2),
                this.updateDeviceParams(e),
                (this.distortion = new B(this.viewer.distortionCoefficients));
              for (var r = 0; r < t.length; r++) {
                var i = t[r];
                z[i.id] = new H(i);
              }
            }
            function H(e) {
              (this.id = e.id),
                (this.label = e.label),
                (this.fov = e.fov),
                (this.interLensDistance = e.interLensDistance),
                (this.baselineLensDistance = e.baselineLensDistance),
                (this.screenLensDistance = e.screenLensDistance),
                (this.distortionCoefficients = e.distortionCoefficients),
                (this.inverseCoefficients = e.inverseCoefficients);
            }
            (X.prototype.updateDeviceParams = function(e) {
              this.device = this.determineDevice_(e) || this.device;
            }),
              (X.prototype.getDevice = function() {
                return this.device;
              }),
              (X.prototype.setViewer = function(e) {
                (this.viewer = e),
                  (this.distortion = new B(this.viewer.distortionCoefficients));
              }),
              (X.prototype.determineDevice_ = function(e) {
                if (!e)
                  return a()
                    ? (console.warn('Using fallback iOS device measurements.'),
                      Q)
                    : (console.warn(
                        'Using fallback Android device measurements.'
                      ),
                      V);
                var t = 0.0254 / e.xdpi,
                  r = 0.0254 / e.ydpi;
                return new G({
                  widthMeters: t * A(),
                  heightMeters: r * f(),
                  bevelMeters: 0.001 * e.bevelMm,
                });
              }),
              (X.prototype.getDistortedFieldOfViewLeftEye = function() {
                var e = this.viewer,
                  t = this.device,
                  r = this.distortion,
                  i = e.screenLensDistance,
                  n = (t.widthMeters - e.interLensDistance) / 2,
                  s = e.interLensDistance / 2,
                  a = e.baselineLensDistance - t.bevelMeters,
                  o = t.heightMeters - a,
                  l = L * Math.atan(r.distort(n / i)),
                  h = L * Math.atan(r.distort(s / i)),
                  u = L * Math.atan(r.distort(a / i)),
                  c = L * Math.atan(r.distort(o / i));
                return {
                  leftDegrees: Math.min(l, e.fov),
                  rightDegrees: Math.min(h, e.fov),
                  downDegrees: Math.min(u, e.fov),
                  upDegrees: Math.min(c, e.fov),
                };
              }),
              (X.prototype.getLeftEyeVisibleTanAngles = function() {
                var e = this.viewer,
                  t = this.device,
                  r = this.distortion,
                  i = Math.tan(-D * e.fov),
                  n = Math.tan(D * e.fov),
                  s = Math.tan(D * e.fov),
                  a = Math.tan(-D * e.fov),
                  o = t.widthMeters / 4,
                  l = t.heightMeters / 2,
                  h = e.baselineLensDistance - t.bevelMeters - l,
                  u = e.interLensDistance / 2 - o,
                  c = -h,
                  d = e.screenLensDistance,
                  A = r.distort((u - o) / d),
                  f = r.distort((c + l) / d),
                  p = r.distort((u + o) / d),
                  m = r.distort((c - l) / d),
                  g = new Float32Array(4);
                return (
                  (g[0] = Math.max(i, A)),
                  (g[1] = Math.min(n, f)),
                  (g[2] = Math.min(s, p)),
                  (g[3] = Math.max(a, m)),
                  g
                );
              }),
              (X.prototype.getLeftEyeNoLensTanAngles = function() {
                var e = this.viewer,
                  t = this.device,
                  r = this.distortion,
                  i = new Float32Array(4),
                  n = r.distortInverse(Math.tan(-D * e.fov)),
                  s = r.distortInverse(Math.tan(D * e.fov)),
                  a = r.distortInverse(Math.tan(D * e.fov)),
                  o = r.distortInverse(Math.tan(-D * e.fov)),
                  l = t.widthMeters / 4,
                  h = t.heightMeters / 2,
                  u = e.baselineLensDistance - t.bevelMeters - h,
                  c = e.interLensDistance / 2 - l,
                  d = -u,
                  A = e.screenLensDistance,
                  f = (c - l) / A,
                  p = (d + h) / A,
                  m = (c + l) / A,
                  g = (d - h) / A;
                return (
                  (i[0] = Math.max(n, f)),
                  (i[1] = Math.min(s, p)),
                  (i[2] = Math.min(a, m)),
                  (i[3] = Math.max(o, g)),
                  i
                );
              }),
              (X.prototype.getLeftEyeVisibleScreenRect = function(e) {
                var t = this.viewer,
                  r = this.device,
                  i = t.screenLensDistance,
                  n = (r.widthMeters - t.interLensDistance) / 2,
                  s = t.baselineLensDistance - r.bevelMeters,
                  a = (e[0] * i + n) / r.widthMeters,
                  o = (e[1] * i + s) / r.heightMeters,
                  l = (e[2] * i + n) / r.widthMeters,
                  h = (e[3] * i + s) / r.heightMeters;
                return { x: a, y: h, width: l - a, height: o - h };
              }),
              (X.prototype.getFieldOfViewLeftEye = function(e) {
                return e
                  ? this.getUndistortedFieldOfViewLeftEye()
                  : this.getDistortedFieldOfViewLeftEye();
              }),
              (X.prototype.getFieldOfViewRightEye = function(e) {
                var t = this.getFieldOfViewLeftEye(e);
                return {
                  leftDegrees: t.rightDegrees,
                  rightDegrees: t.leftDegrees,
                  upDegrees: t.upDegrees,
                  downDegrees: t.downDegrees,
                };
              }),
              (X.prototype.getUndistortedFieldOfViewLeftEye = function() {
                var e = this.getUndistortedParams_();
                return {
                  leftDegrees: L * Math.atan(e.outerDist),
                  rightDegrees: L * Math.atan(e.innerDist),
                  downDegrees: L * Math.atan(e.bottomDist),
                  upDegrees: L * Math.atan(e.topDist),
                };
              }),
              (X.prototype.getUndistortedViewportLeftEye = function() {
                var e = this.getUndistortedParams_(),
                  t = this.viewer,
                  r = this.device,
                  i = t.screenLensDistance,
                  n = r.widthMeters / i,
                  s = r.heightMeters / i,
                  a = r.width / n,
                  o = r.height / s,
                  l = Math.round((e.eyePosX - e.outerDist) * a),
                  h = Math.round((e.eyePosY - e.bottomDist) * o);
                return {
                  x: l,
                  y: h,
                  width: Math.round((e.eyePosX + e.innerDist) * a) - l,
                  height: Math.round((e.eyePosY + e.topDist) * o) - h,
                };
              }),
              (X.prototype.getUndistortedParams_ = function() {
                var e = this.viewer,
                  t = this.device,
                  r = this.distortion,
                  i = e.screenLensDistance,
                  n = e.interLensDistance / 2 / i,
                  s = t.widthMeters / i,
                  a = t.heightMeters / i,
                  o = s / 2 - n,
                  l = (e.baselineLensDistance - t.bevelMeters) / i,
                  h = e.fov,
                  u = r.distortInverse(Math.tan(D * h)),
                  c = Math.min(o, u),
                  d = Math.min(n, u),
                  A = Math.min(l, u);
                return {
                  outerDist: c,
                  innerDist: d,
                  topDist: Math.min(a - l, u),
                  bottomDist: A,
                  eyePosX: o,
                  eyePosY: l,
                };
              }),
              (X.Viewers = z);
            var W = {
              format: 1,
              last_updated: '2018-12-10T17:01:42Z',
              devices: [
                {
                  type: 'android',
                  rules: [{ mdmh: 'asus/*/Nexus 7/*' }, { ua: 'Nexus 7' }],
                  dpi: [320.8, 323],
                  bw: 3,
                  ac: 500,
                },
                {
                  type: 'android',
                  rules: [
                    { mdmh: 'asus/*/ASUS_Z00AD/*' },
                    { ua: 'ASUS_Z00AD' },
                  ],
                  dpi: [403, 404.6],
                  bw: 3,
                  ac: 1e3,
                },
                {
                  type: 'android',
                  rules: [
                    { mdmh: 'Google/*/Pixel 2 XL/*' },
                    { ua: 'Pixel 2 XL' },
                  ],
                  dpi: 537.9,
                  bw: 3,
                  ac: 1e3,
                },
                {
                  type: 'android',
                  rules: [
                    { mdmh: 'Google/*/Pixel 3 XL/*' },
                    { ua: 'Pixel 3 XL' },
                  ],
                  dpi: [558.5, 553.8],
                  bw: 3,
                  ac: 1e3,
                },
                {
                  type: 'android',
                  rules: [{ mdmh: 'Google/*/Pixel XL/*' }, { ua: 'Pixel XL' }],
                  dpi: [537.9, 533],
                  bw: 3,
                  ac: 1e3,
                },
                {
                  type: 'android',
                  rules: [{ mdmh: 'Google/*/Pixel 3/*' }, { ua: 'Pixel 3' }],
                  dpi: 442.4,
                  bw: 3,
                  ac: 1e3,
                },
                {
                  type: 'android',
                  rules: [{ mdmh: 'Google/*/Pixel 2/*' }, { ua: 'Pixel 2' }],
                  dpi: 441,
                  bw: 3,
                  ac: 500,
                },
                {
                  type: 'android',
                  rules: [{ mdmh: 'Google/*/Pixel/*' }, { ua: 'Pixel' }],
                  dpi: [432.6, 436.7],
                  bw: 3,
                  ac: 1e3,
                },
                {
                  type: 'android',
                  rules: [{ mdmh: 'HTC/*/HTC6435LVW/*' }, { ua: 'HTC6435LVW' }],
                  dpi: [449.7, 443.3],
                  bw: 3,
                  ac: 1e3,
                },
                {
                  type: 'android',
                  rules: [{ mdmh: 'HTC/*/HTC One XL/*' }, { ua: 'HTC One XL' }],
                  dpi: [315.3, 314.6],
                  bw: 3,
                  ac: 1e3,
                },
                {
                  type: 'android',
                  rules: [{ mdmh: 'htc/*/Nexus 9/*' }, { ua: 'Nexus 9' }],
                  dpi: 289,
                  bw: 3,
                  ac: 500,
                },
                {
                  type: 'android',
                  rules: [{ mdmh: 'HTC/*/HTC One M9/*' }, { ua: 'HTC One M9' }],
                  dpi: [442.5, 443.3],
                  bw: 3,
                  ac: 500,
                },
                {
                  type: 'android',
                  rules: [{ mdmh: 'HTC/*/HTC One_M8/*' }, { ua: 'HTC One_M8' }],
                  dpi: [449.7, 447.4],
                  bw: 3,
                  ac: 500,
                },
                {
                  type: 'android',
                  rules: [{ mdmh: 'HTC/*/HTC One/*' }, { ua: 'HTC One' }],
                  dpi: 472.8,
                  bw: 3,
                  ac: 1e3,
                },
                {
                  type: 'android',
                  rules: [{ mdmh: 'Huawei/*/Nexus 6P/*' }, { ua: 'Nexus 6P' }],
                  dpi: [515.1, 518],
                  bw: 3,
                  ac: 1e3,
                },
                {
                  type: 'android',
                  rules: [
                    { mdmh: 'Huawei/*/BLN-L24/*' },
                    { ua: 'HONORBLN-L24' },
                  ],
                  dpi: 480,
                  bw: 4,
                  ac: 500,
                },
                {
                  type: 'android',
                  rules: [{ mdmh: 'Huawei/*/BKL-L09/*' }, { ua: 'BKL-L09' }],
                  dpi: 403,
                  bw: 3.47,
                  ac: 500,
                },
                {
                  type: 'android',
                  rules: [
                    { mdmh: 'LENOVO/*/Lenovo PB2-690Y/*' },
                    { ua: 'Lenovo PB2-690Y' },
                  ],
                  dpi: [457.2, 454.713],
                  bw: 3,
                  ac: 500,
                },
                {
                  type: 'android',
                  rules: [{ mdmh: 'LGE/*/Nexus 5X/*' }, { ua: 'Nexus 5X' }],
                  dpi: [422, 419.9],
                  bw: 3,
                  ac: 1e3,
                },
                {
                  type: 'android',
                  rules: [{ mdmh: 'LGE/*/LGMS345/*' }, { ua: 'LGMS345' }],
                  dpi: [221.7, 219.1],
                  bw: 3,
                  ac: 500,
                },
                {
                  type: 'android',
                  rules: [{ mdmh: 'LGE/*/LG-D800/*' }, { ua: 'LG-D800' }],
                  dpi: [422, 424.1],
                  bw: 3,
                  ac: 500,
                },
                {
                  type: 'android',
                  rules: [{ mdmh: 'LGE/*/LG-D850/*' }, { ua: 'LG-D850' }],
                  dpi: [537.9, 541.9],
                  bw: 3,
                  ac: 500,
                },
                {
                  type: 'android',
                  rules: [{ mdmh: 'LGE/*/VS985 4G/*' }, { ua: 'VS985 4G' }],
                  dpi: [537.9, 535.6],
                  bw: 3,
                  ac: 1e3,
                },
                {
                  type: 'android',
                  rules: [{ mdmh: 'LGE/*/Nexus 5/*' }, { ua: 'Nexus 5 B' }],
                  dpi: [442.4, 444.8],
                  bw: 3,
                  ac: 1e3,
                },
                {
                  type: 'android',
                  rules: [{ mdmh: 'LGE/*/Nexus 4/*' }, { ua: 'Nexus 4' }],
                  dpi: [319.8, 318.4],
                  bw: 3,
                  ac: 1e3,
                },
                {
                  type: 'android',
                  rules: [{ mdmh: 'LGE/*/LG-P769/*' }, { ua: 'LG-P769' }],
                  dpi: [240.6, 247.5],
                  bw: 3,
                  ac: 1e3,
                },
                {
                  type: 'android',
                  rules: [{ mdmh: 'LGE/*/LGMS323/*' }, { ua: 'LGMS323' }],
                  dpi: [206.6, 204.6],
                  bw: 3,
                  ac: 1e3,
                },
                {
                  type: 'android',
                  rules: [{ mdmh: 'LGE/*/LGLS996/*' }, { ua: 'LGLS996' }],
                  dpi: [403.4, 401.5],
                  bw: 3,
                  ac: 1e3,
                },
                {
                  type: 'android',
                  rules: [{ mdmh: 'Micromax/*/4560MMX/*' }, { ua: '4560MMX' }],
                  dpi: [240, 219.4],
                  bw: 3,
                  ac: 1e3,
                },
                {
                  type: 'android',
                  rules: [
                    { mdmh: 'Micromax/*/A250/*' },
                    { ua: 'Micromax A250' },
                  ],
                  dpi: [480, 446.4],
                  bw: 3,
                  ac: 1e3,
                },
                {
                  type: 'android',
                  rules: [
                    { mdmh: 'Micromax/*/Micromax AQ4501/*' },
                    { ua: 'Micromax AQ4501' },
                  ],
                  dpi: 240,
                  bw: 3,
                  ac: 500,
                },
                {
                  type: 'android',
                  rules: [
                    { mdmh: 'motorola/*/G5/*' },
                    { ua: 'Moto G (5) Plus' },
                  ],
                  dpi: [403.4, 403],
                  bw: 3,
                  ac: 1e3,
                },
                {
                  type: 'android',
                  rules: [
                    { mdmh: 'motorola/*/DROID RAZR/*' },
                    { ua: 'DROID RAZR' },
                  ],
                  dpi: [368.1, 256.7],
                  bw: 3,
                  ac: 1e3,
                },
                {
                  type: 'android',
                  rules: [{ mdmh: 'motorola/*/XT830C/*' }, { ua: 'XT830C' }],
                  dpi: [254, 255.9],
                  bw: 3,
                  ac: 1e3,
                },
                {
                  type: 'android',
                  rules: [{ mdmh: 'motorola/*/XT1021/*' }, { ua: 'XT1021' }],
                  dpi: [254, 256.7],
                  bw: 3,
                  ac: 500,
                },
                {
                  type: 'android',
                  rules: [{ mdmh: 'motorola/*/XT1023/*' }, { ua: 'XT1023' }],
                  dpi: [254, 256.7],
                  bw: 3,
                  ac: 500,
                },
                {
                  type: 'android',
                  rules: [{ mdmh: 'motorola/*/XT1028/*' }, { ua: 'XT1028' }],
                  dpi: [326.6, 327.6],
                  bw: 3,
                  ac: 1e3,
                },
                {
                  type: 'android',
                  rules: [{ mdmh: 'motorola/*/XT1034/*' }, { ua: 'XT1034' }],
                  dpi: [326.6, 328.4],
                  bw: 3,
                  ac: 500,
                },
                {
                  type: 'android',
                  rules: [{ mdmh: 'motorola/*/XT1053/*' }, { ua: 'XT1053' }],
                  dpi: [315.3, 316.1],
                  bw: 3,
                  ac: 1e3,
                },
                {
                  type: 'android',
                  rules: [{ mdmh: 'motorola/*/XT1562/*' }, { ua: 'XT1562' }],
                  dpi: [403.4, 402.7],
                  bw: 3,
                  ac: 1e3,
                },
                {
                  type: 'android',
                  rules: [
                    { mdmh: 'motorola/*/Nexus 6/*' },
                    { ua: 'Nexus 6 B' },
                  ],
                  dpi: [494.3, 489.7],
                  bw: 3,
                  ac: 1e3,
                },
                {
                  type: 'android',
                  rules: [{ mdmh: 'motorola/*/XT1063/*' }, { ua: 'XT1063' }],
                  dpi: [295, 296.6],
                  bw: 3,
                  ac: 1e3,
                },
                {
                  type: 'android',
                  rules: [{ mdmh: 'motorola/*/XT1064/*' }, { ua: 'XT1064' }],
                  dpi: [295, 295.6],
                  bw: 3,
                  ac: 500,
                },
                {
                  type: 'android',
                  rules: [{ mdmh: 'motorola/*/XT1092/*' }, { ua: 'XT1092' }],
                  dpi: [422, 424.1],
                  bw: 3,
                  ac: 500,
                },
                {
                  type: 'android',
                  rules: [{ mdmh: 'motorola/*/XT1095/*' }, { ua: 'XT1095' }],
                  dpi: [422, 423.4],
                  bw: 3,
                  ac: 1e3,
                },
                {
                  type: 'android',
                  rules: [{ mdmh: 'motorola/*/G4/*' }, { ua: 'Moto G (4)' }],
                  dpi: 401,
                  bw: 4,
                  ac: 1e3,
                },
                {
                  type: 'android',
                  rules: [{ mdmh: 'OnePlus/*/A0001/*' }, { ua: 'A0001' }],
                  dpi: [403.4, 401],
                  bw: 3,
                  ac: 1e3,
                },
                {
                  type: 'android',
                  rules: [
                    { mdmh: 'OnePlus/*/ONE E1005/*' },
                    { ua: 'ONE E1005' },
                  ],
                  dpi: [442.4, 441.4],
                  bw: 3,
                  ac: 1e3,
                },
                {
                  type: 'android',
                  rules: [
                    { mdmh: 'OnePlus/*/ONE A2005/*' },
                    { ua: 'ONE A2005' },
                  ],
                  dpi: [391.9, 405.4],
                  bw: 3,
                  ac: 1e3,
                },
                {
                  type: 'android',
                  rules: [
                    { mdmh: 'OnePlus/*/ONEPLUS A5000/*' },
                    { ua: 'ONEPLUS A5000 ' },
                  ],
                  dpi: [403.411, 399.737],
                  bw: 3,
                  ac: 1e3,
                },
                {
                  type: 'android',
                  rules: [
                    { mdmh: 'OnePlus/*/ONE A5010/*' },
                    { ua: 'ONEPLUS A5010' },
                  ],
                  dpi: [403, 400],
                  bw: 2,
                  ac: 1e3,
                },
                {
                  type: 'android',
                  rules: [{ mdmh: 'OPPO/*/X909/*' }, { ua: 'X909' }],
                  dpi: [442.4, 444.1],
                  bw: 3,
                  ac: 1e3,
                },
                {
                  type: 'android',
                  rules: [{ mdmh: 'samsung/*/GT-I9082/*' }, { ua: 'GT-I9082' }],
                  dpi: [184.7, 185.4],
                  bw: 3,
                  ac: 1e3,
                },
                {
                  type: 'android',
                  rules: [{ mdmh: 'samsung/*/SM-G360P/*' }, { ua: 'SM-G360P' }],
                  dpi: [196.7, 205.4],
                  bw: 3,
                  ac: 1e3,
                },
                {
                  type: 'android',
                  rules: [{ mdmh: 'samsung/*/Nexus S/*' }, { ua: 'Nexus S' }],
                  dpi: [234.5, 229.8],
                  bw: 3,
                  ac: 1e3,
                },
                {
                  type: 'android',
                  rules: [{ mdmh: 'samsung/*/GT-I9300/*' }, { ua: 'GT-I9300' }],
                  dpi: [304.8, 303.9],
                  bw: 5,
                  ac: 500,
                },
                {
                  type: 'android',
                  rules: [
                    { mdmh: 'samsung/*/SM-T230NU/*' },
                    { ua: 'SM-T230NU' },
                  ],
                  dpi: 216,
                  bw: 3,
                  ac: 500,
                },
                {
                  type: 'android',
                  rules: [{ mdmh: 'samsung/*/SGH-T399/*' }, { ua: 'SGH-T399' }],
                  dpi: [217.7, 231.4],
                  bw: 3,
                  ac: 1e3,
                },
                {
                  type: 'android',
                  rules: [{ mdmh: 'samsung/*/SGH-M919/*' }, { ua: 'SGH-M919' }],
                  dpi: [440.8, 437.7],
                  bw: 3,
                  ac: 1e3,
                },
                {
                  type: 'android',
                  rules: [{ mdmh: 'samsung/*/SM-N9005/*' }, { ua: 'SM-N9005' }],
                  dpi: [386.4, 387],
                  bw: 3,
                  ac: 500,
                },
                {
                  type: 'android',
                  rules: [
                    { mdmh: 'samsung/*/SAMSUNG-SM-N900A/*' },
                    { ua: 'SAMSUNG-SM-N900A' },
                  ],
                  dpi: [386.4, 387.7],
                  bw: 3,
                  ac: 1e3,
                },
                {
                  type: 'android',
                  rules: [{ mdmh: 'samsung/*/GT-I9500/*' }, { ua: 'GT-I9500' }],
                  dpi: [442.5, 443.3],
                  bw: 3,
                  ac: 500,
                },
                {
                  type: 'android',
                  rules: [{ mdmh: 'samsung/*/GT-I9505/*' }, { ua: 'GT-I9505' }],
                  dpi: 439.4,
                  bw: 4,
                  ac: 1e3,
                },
                {
                  type: 'android',
                  rules: [{ mdmh: 'samsung/*/SM-G900F/*' }, { ua: 'SM-G900F' }],
                  dpi: [415.6, 431.6],
                  bw: 5,
                  ac: 1e3,
                },
                {
                  type: 'android',
                  rules: [{ mdmh: 'samsung/*/SM-G900M/*' }, { ua: 'SM-G900M' }],
                  dpi: [415.6, 431.6],
                  bw: 5,
                  ac: 1e3,
                },
                {
                  type: 'android',
                  rules: [{ mdmh: 'samsung/*/SM-G800F/*' }, { ua: 'SM-G800F' }],
                  dpi: 326.8,
                  bw: 3,
                  ac: 1e3,
                },
                {
                  type: 'android',
                  rules: [{ mdmh: 'samsung/*/SM-G906S/*' }, { ua: 'SM-G906S' }],
                  dpi: [562.7, 572.4],
                  bw: 3,
                  ac: 1e3,
                },
                {
                  type: 'android',
                  rules: [{ mdmh: 'samsung/*/GT-I9300/*' }, { ua: 'GT-I9300' }],
                  dpi: [306.7, 304.8],
                  bw: 5,
                  ac: 1e3,
                },
                {
                  type: 'android',
                  rules: [{ mdmh: 'samsung/*/SM-T535/*' }, { ua: 'SM-T535' }],
                  dpi: [142.6, 136.4],
                  bw: 3,
                  ac: 500,
                },
                {
                  type: 'android',
                  rules: [{ mdmh: 'samsung/*/SM-N920C/*' }, { ua: 'SM-N920C' }],
                  dpi: [515.1, 518.4],
                  bw: 3,
                  ac: 1e3,
                },
                {
                  type: 'android',
                  rules: [{ mdmh: 'samsung/*/SM-N920P/*' }, { ua: 'SM-N920P' }],
                  dpi: [386.3655, 390.144],
                  bw: 3,
                  ac: 1e3,
                },
                {
                  type: 'android',
                  rules: [
                    { mdmh: 'samsung/*/SM-N920W8/*' },
                    { ua: 'SM-N920W8' },
                  ],
                  dpi: [515.1, 518.4],
                  bw: 3,
                  ac: 1e3,
                },
                {
                  type: 'android',
                  rules: [
                    { mdmh: 'samsung/*/GT-I9300I/*' },
                    { ua: 'GT-I9300I' },
                  ],
                  dpi: [304.8, 305.8],
                  bw: 3,
                  ac: 1e3,
                },
                {
                  type: 'android',
                  rules: [{ mdmh: 'samsung/*/GT-I9195/*' }, { ua: 'GT-I9195' }],
                  dpi: [249.4, 256.7],
                  bw: 3,
                  ac: 500,
                },
                {
                  type: 'android',
                  rules: [{ mdmh: 'samsung/*/SPH-L520/*' }, { ua: 'SPH-L520' }],
                  dpi: [249.4, 255.9],
                  bw: 3,
                  ac: 1e3,
                },
                {
                  type: 'android',
                  rules: [
                    { mdmh: 'samsung/*/SAMSUNG-SGH-I717/*' },
                    { ua: 'SAMSUNG-SGH-I717' },
                  ],
                  dpi: 285.8,
                  bw: 3,
                  ac: 1e3,
                },
                {
                  type: 'android',
                  rules: [{ mdmh: 'samsung/*/SPH-D710/*' }, { ua: 'SPH-D710' }],
                  dpi: [217.7, 204.2],
                  bw: 3,
                  ac: 1e3,
                },
                {
                  type: 'android',
                  rules: [{ mdmh: 'samsung/*/GT-N7100/*' }, { ua: 'GT-N7100' }],
                  dpi: 265.1,
                  bw: 3,
                  ac: 1e3,
                },
                {
                  type: 'android',
                  rules: [{ mdmh: 'samsung/*/SCH-I605/*' }, { ua: 'SCH-I605' }],
                  dpi: 265.1,
                  bw: 3,
                  ac: 1e3,
                },
                {
                  type: 'android',
                  rules: [
                    { mdmh: 'samsung/*/Galaxy Nexus/*' },
                    { ua: 'Galaxy Nexus' },
                  ],
                  dpi: [315.3, 314.2],
                  bw: 3,
                  ac: 1e3,
                },
                {
                  type: 'android',
                  rules: [{ mdmh: 'samsung/*/SM-N910H/*' }, { ua: 'SM-N910H' }],
                  dpi: [515.1, 518],
                  bw: 3,
                  ac: 1e3,
                },
                {
                  type: 'android',
                  rules: [{ mdmh: 'samsung/*/SM-N910C/*' }, { ua: 'SM-N910C' }],
                  dpi: [515.2, 520.2],
                  bw: 3,
                  ac: 500,
                },
                {
                  type: 'android',
                  rules: [{ mdmh: 'samsung/*/SM-G130M/*' }, { ua: 'SM-G130M' }],
                  dpi: [165.9, 164.8],
                  bw: 3,
                  ac: 500,
                },
                {
                  type: 'android',
                  rules: [{ mdmh: 'samsung/*/SM-G928I/*' }, { ua: 'SM-G928I' }],
                  dpi: [515.1, 518.4],
                  bw: 3,
                  ac: 1e3,
                },
                {
                  type: 'android',
                  rules: [{ mdmh: 'samsung/*/SM-G920F/*' }, { ua: 'SM-G920F' }],
                  dpi: 580.6,
                  bw: 3,
                  ac: 500,
                },
                {
                  type: 'android',
                  rules: [{ mdmh: 'samsung/*/SM-G920P/*' }, { ua: 'SM-G920P' }],
                  dpi: [522.5, 577],
                  bw: 3,
                  ac: 1e3,
                },
                {
                  type: 'android',
                  rules: [{ mdmh: 'samsung/*/SM-G925F/*' }, { ua: 'SM-G925F' }],
                  dpi: 580.6,
                  bw: 3,
                  ac: 500,
                },
                {
                  type: 'android',
                  rules: [{ mdmh: 'samsung/*/SM-G925V/*' }, { ua: 'SM-G925V' }],
                  dpi: [522.5, 576.6],
                  bw: 3,
                  ac: 1e3,
                },
                {
                  type: 'android',
                  rules: [{ mdmh: 'samsung/*/SM-G930F/*' }, { ua: 'SM-G930F' }],
                  dpi: 576.6,
                  bw: 3,
                  ac: 1e3,
                },
                {
                  type: 'android',
                  rules: [{ mdmh: 'samsung/*/SM-G935F/*' }, { ua: 'SM-G935F' }],
                  dpi: 533,
                  bw: 3,
                  ac: 500,
                },
                {
                  type: 'android',
                  rules: [{ mdmh: 'samsung/*/SM-G950F/*' }, { ua: 'SM-G950F' }],
                  dpi: [562.707, 565.293],
                  bw: 3,
                  ac: 500,
                },
                {
                  type: 'android',
                  rules: [{ mdmh: 'samsung/*/SM-G955U/*' }, { ua: 'SM-G955U' }],
                  dpi: [522.514, 525.762],
                  bw: 3,
                  ac: 500,
                },
                {
                  type: 'android',
                  rules: [{ mdmh: 'samsung/*/SM-G955F/*' }, { ua: 'SM-G955F' }],
                  dpi: [522.514, 525.762],
                  bw: 3,
                  ac: 500,
                },
                {
                  type: 'android',
                  rules: [{ mdmh: 'Sony/*/C6903/*' }, { ua: 'C6903' }],
                  dpi: [442.5, 443.3],
                  bw: 3,
                  ac: 500,
                },
                {
                  type: 'android',
                  rules: [{ mdmh: 'Sony/*/D6653/*' }, { ua: 'D6653' }],
                  dpi: [428.6, 427.6],
                  bw: 3,
                  ac: 1e3,
                },
                {
                  type: 'android',
                  rules: [{ mdmh: 'Sony/*/E6653/*' }, { ua: 'E6653' }],
                  dpi: [428.6, 425.7],
                  bw: 3,
                  ac: 1e3,
                },
                {
                  type: 'android',
                  rules: [{ mdmh: 'Sony/*/E6853/*' }, { ua: 'E6853' }],
                  dpi: [403.4, 401.9],
                  bw: 3,
                  ac: 1e3,
                },
                {
                  type: 'android',
                  rules: [{ mdmh: 'Sony/*/SGP321/*' }, { ua: 'SGP321' }],
                  dpi: [224.7, 224.1],
                  bw: 3,
                  ac: 500,
                },
                {
                  type: 'android',
                  rules: [
                    { mdmh: 'TCT/*/ALCATEL ONE TOUCH Fierce/*' },
                    { ua: 'ALCATEL ONE TOUCH Fierce' },
                  ],
                  dpi: [240, 247.5],
                  bw: 3,
                  ac: 1e3,
                },
                {
                  type: 'android',
                  rules: [{ mdmh: 'THL/*/thl 5000/*' }, { ua: 'thl 5000' }],
                  dpi: [480, 443.3],
                  bw: 3,
                  ac: 1e3,
                },
                {
                  type: 'android',
                  rules: [{ mdmh: 'Fly/*/IQ4412/*' }, { ua: 'IQ4412' }],
                  dpi: 307.9,
                  bw: 3,
                  ac: 1e3,
                },
                {
                  type: 'android',
                  rules: [
                    { mdmh: 'ZTE/*/ZTE Blade L2/*' },
                    { ua: 'ZTE Blade L2' },
                  ],
                  dpi: 240,
                  bw: 3,
                  ac: 500,
                },
                {
                  type: 'android',
                  rules: [{ mdmh: 'BENEVE/*/VR518/*' }, { ua: 'VR518' }],
                  dpi: 480,
                  bw: 3,
                  ac: 500,
                },
                {
                  type: 'ios',
                  rules: [{ res: [640, 960] }],
                  dpi: [325.1, 328.4],
                  bw: 4,
                  ac: 1e3,
                },
                {
                  type: 'ios',
                  rules: [{ res: [640, 1136] }],
                  dpi: [317.1, 320.2],
                  bw: 3,
                  ac: 1e3,
                },
                {
                  type: 'ios',
                  rules: [{ res: [750, 1334] }],
                  dpi: 326.4,
                  bw: 4,
                  ac: 1e3,
                },
                {
                  type: 'ios',
                  rules: [{ res: [1242, 2208] }],
                  dpi: [453.6, 458.4],
                  bw: 4,
                  ac: 1e3,
                },
                {
                  type: 'ios',
                  rules: [{ res: [1125, 2001] }],
                  dpi: [410.9, 415.4],
                  bw: 4,
                  ac: 1e3,
                },
                {
                  type: 'ios',
                  rules: [{ res: [1125, 2436] }],
                  dpi: 458,
                  bw: 4,
                  ac: 1e3,
                },
              ],
            };
            function j(e, t) {
              if (((this.dpdb = W), this.recalculateDeviceParams_(), e)) {
                this.onDeviceParamsUpdated = t;
                var r = new XMLHttpRequest(),
                  i = this;
                r.open('GET', e, !0),
                  r.addEventListener('load', function() {
                    (i.loading = !1),
                      r.status >= 200 && r.status <= 299
                        ? ((i.dpdb = JSON.parse(r.response)),
                          i.recalculateDeviceParams_())
                        : console.error('Error loading online DPDB!');
                  }),
                  r.send();
              }
            }
            function q(e) {
              (this.xdpi = e.xdpi),
                (this.ydpi = e.ydpi),
                (this.bevelMm = e.bevelMm);
            }
            function Y(e, t) {
              this.set(e, t);
            }
            function Z(e, t) {
              (this.kFilter = e),
                (this.isDebug = t),
                (this.currentAccelMeasurement = new Y()),
                (this.currentGyroMeasurement = new Y()),
                (this.previousGyroMeasurement = new Y()),
                a()
                  ? (this.filterQ = new k(-1, 0, 0, 1))
                  : (this.filterQ = new k(1, 0, 0, 1)),
                (this.previousFilterQ = new k()),
                this.previousFilterQ.copy(this.filterQ),
                (this.accelQ = new k()),
                (this.isOrientationInitialized = !1),
                (this.estimatedGravity = new O()),
                (this.measuredGravity = new O()),
                (this.gyroIntegralQ = new k());
            }
            function K(e, t) {
              (this.predictionTimeS = e),
                (this.isDebug = t),
                (this.previousQ = new k()),
                (this.previousTimestampS = null),
                (this.deltaQ = new k()),
                (this.outQ = new k());
            }
            function J(e, t, r, i) {
              (this.yawOnly = r),
                (this.accelerometer = new O()),
                (this.gyroscope = new O()),
                (this.filter = new Z(e, i)),
                (this.posePredictor = new K(t, i)),
                (this.isFirefoxAndroid = l()),
                (this.isIOS = a());
              var n = h();
              (this.isDeviceMotionInRadians = !this.isIOS && n && n < 66),
                (this.isWithoutDeviceMotion = u()),
                (this.filterToWorldQ = new k()),
                a()
                  ? this.filterToWorldQ.setFromAxisAngle(
                      new O(1, 0, 0),
                      Math.PI / 2
                    )
                  : this.filterToWorldQ.setFromAxisAngle(
                      new O(1, 0, 0),
                      -Math.PI / 2
                    ),
                (this.inverseWorldToScreenQ = new k()),
                (this.worldToScreenQ = new k()),
                (this.originalPoseAdjustQ = new k()),
                this.originalPoseAdjustQ.setFromAxisAngle(
                  new O(0, 0, 1),
                  (-window.orientation * Math.PI) / 180
                ),
                this.setScreenTransform_(),
                d() && this.filterToWorldQ.multiply(this.inverseWorldToScreenQ),
                (this.resetQ = new k()),
                (this.orientationOut_ = new Float32Array(4)),
                this.start();
            }
            (j.prototype.getDeviceParams = function() {
              return this.deviceParams;
            }),
              (j.prototype.recalculateDeviceParams_ = function() {
                var e = this.calcDeviceParams_();
                e
                  ? ((this.deviceParams = e),
                    this.onDeviceParamsUpdated &&
                      this.onDeviceParamsUpdated(this.deviceParams))
                  : console.error('Failed to recalculate device parameters.');
              }),
              (j.prototype.calcDeviceParams_ = function() {
                var e = this.dpdb;
                if (!e) return console.error('DPDB not available.'), null;
                if (1 != e.format)
                  return (
                    console.error('DPDB has unexpected format version.'), null
                  );
                if (!e.devices || !e.devices.length)
                  return (
                    console.error('DPDB does not have a devices section.'), null
                  );
                var t = navigator.userAgent || navigator.vendor || window.opera,
                  r = A(),
                  i = f();
                if (!e.devices)
                  return console.error('DPDB has no devices section.'), null;
                for (var n = 0; n < e.devices.length; n++) {
                  var s = e.devices[n];
                  if (s.rules)
                    if ('ios' == s.type || 'android' == s.type) {
                      if (a() == ('ios' == s.type)) {
                        for (var o = !1, l = 0; l < s.rules.length; l++) {
                          var h = s.rules[l];
                          if (this.ruleMatches_(h, t, r, i)) {
                            o = !0;
                            break;
                          }
                        }
                        if (o)
                          return new q({
                            xdpi: s.dpi[0] || s.dpi,
                            ydpi: s.dpi[1] || s.dpi,
                            bevelMm: s.bw,
                          });
                      }
                    } else console.warn('Device[' + n + '] has invalid type.');
                  else console.warn('Device[' + n + '] has no rules section.');
                }
                return console.warn('No DPDB device match.'), null;
              }),
              (j.prototype.ruleMatches_ = function(e, t, r, i) {
                if (!e.ua && !e.res) return !1;
                if (
                  (e.ua &&
                    'SM' === e.ua.substring(0, 2) &&
                    (e.ua = e.ua.substring(0, 7)),
                  e.ua && t.indexOf(e.ua) < 0)
                )
                  return !1;
                if (e.res) {
                  if (!e.res[0] || !e.res[1]) return !1;
                  var n = e.res[0],
                    s = e.res[1];
                  if (
                    Math.min(r, i) != Math.min(n, s) ||
                    Math.max(r, i) != Math.max(n, s)
                  )
                    return !1;
                }
                return !0;
              }),
              (Y.prototype.set = function(e, t) {
                (this.sample = e), (this.timestampS = t);
              }),
              (Y.prototype.copy = function(e) {
                this.set(e.sample, e.timestampS);
              }),
              (Z.prototype.addAccelMeasurement = function(e, t) {
                this.currentAccelMeasurement.set(e, t);
              }),
              (Z.prototype.addGyroMeasurement = function(e, t) {
                this.currentGyroMeasurement.set(e, t);
                var r,
                  i = t - this.previousGyroMeasurement.timestampS;
                (r = i),
                  isNaN(r) || r <= 0.001 || r > 1 || this.run_(),
                  this.previousGyroMeasurement.copy(
                    this.currentGyroMeasurement
                  );
              }),
              (Z.prototype.run_ = function() {
                if (!this.isOrientationInitialized)
                  return (
                    (this.accelQ = this.accelToQuaternion_(
                      this.currentAccelMeasurement.sample
                    )),
                    this.previousFilterQ.copy(this.accelQ),
                    void (this.isOrientationInitialized = !0)
                  );
                var e =
                    this.currentGyroMeasurement.timestampS -
                    this.previousGyroMeasurement.timestampS,
                  t = this.gyroToQuaternionDelta_(
                    this.currentGyroMeasurement.sample,
                    e
                  );
                this.gyroIntegralQ.multiply(t),
                  this.filterQ.copy(this.previousFilterQ),
                  this.filterQ.multiply(t);
                var r = new k();
                r.copy(this.filterQ),
                  r.inverse(),
                  this.estimatedGravity.set(0, 0, -1),
                  this.estimatedGravity.applyQuaternion(r),
                  this.estimatedGravity.normalize(),
                  this.measuredGravity.copy(
                    this.currentAccelMeasurement.sample
                  ),
                  this.measuredGravity.normalize();
                var i,
                  n = new k();
                n.setFromUnitVectors(
                  this.estimatedGravity,
                  this.measuredGravity
                ),
                  n.inverse(),
                  this.isDebug &&
                    console.log(
                      'Delta: %d deg, G_est: (%s, %s, %s), G_meas: (%s, %s, %s)',
                      L *
                        ((i = n).w > 1
                          ? (console.warn('getQuaternionAngle: w > 1'), 0)
                          : 2 * Math.acos(i.w)),
                      this.estimatedGravity.x.toFixed(1),
                      this.estimatedGravity.y.toFixed(1),
                      this.estimatedGravity.z.toFixed(1),
                      this.measuredGravity.x.toFixed(1),
                      this.measuredGravity.y.toFixed(1),
                      this.measuredGravity.z.toFixed(1)
                    );
                var s = new k();
                s.copy(this.filterQ),
                  s.multiply(n),
                  this.filterQ.slerp(s, 1 - this.kFilter),
                  this.previousFilterQ.copy(this.filterQ);
              }),
              (Z.prototype.getOrientation = function() {
                return this.filterQ;
              }),
              (Z.prototype.accelToQuaternion_ = function(e) {
                var t = new O();
                t.copy(e), t.normalize();
                var r = new k();
                return r.setFromUnitVectors(new O(0, 0, -1), t), r.inverse(), r;
              }),
              (Z.prototype.gyroToQuaternionDelta_ = function(e, t) {
                var r = new k(),
                  i = new O();
                return (
                  i.copy(e),
                  i.normalize(),
                  r.setFromAxisAngle(i, e.length() * t),
                  r
                );
              }),
              (K.prototype.getPrediction = function(e, t, r) {
                if (!this.previousTimestampS)
                  return (
                    this.previousQ.copy(e), (this.previousTimestampS = r), e
                  );
                var i = new O();
                i.copy(t), i.normalize();
                var n = t.length();
                if (n < 20 * D)
                  return (
                    this.isDebug &&
                      console.log(
                        'Moving slowly, at %s deg/s: no prediction',
                        (L * n).toFixed(1)
                      ),
                    this.outQ.copy(e),
                    this.previousQ.copy(e),
                    this.outQ
                  );
                var s = n * this.predictionTimeS;
                return (
                  this.deltaQ.setFromAxisAngle(i, s),
                  this.outQ.copy(this.previousQ),
                  this.outQ.multiply(this.deltaQ),
                  this.previousQ.copy(e),
                  (this.previousTimestampS = r),
                  this.outQ
                );
              }),
              (J.prototype.getPosition = function() {
                return null;
              }),
              (J.prototype.getOrientation = function() {
                var e = void 0;
                if (this.isWithoutDeviceMotion && this._deviceOrientationQ)
                  return (
                    (this.deviceOrientationFixQ =
                      this.deviceOrientationFixQ ||
                      ((r = new k().setFromAxisAngle(new O(0, 0, -1), 0)),
                      (i = new k()),
                      -90 === window.orientation
                        ? i.setFromAxisAngle(new O(0, 1, 0), Math.PI / -2)
                        : i.setFromAxisAngle(new O(0, 1, 0), Math.PI / 2),
                      r.multiply(i))),
                    (this.deviceOrientationFilterToWorldQ =
                      this.deviceOrientationFilterToWorldQ ||
                      ((t = new k()).setFromAxisAngle(
                        new O(1, 0, 0),
                        -Math.PI / 2
                      ),
                      t)),
                    (e = this._deviceOrientationQ),
                    (n = new k()).copy(e),
                    n.multiply(this.deviceOrientationFilterToWorldQ),
                    n.multiply(this.resetQ),
                    n.multiply(this.worldToScreenQ),
                    n.multiplyQuaternions(this.deviceOrientationFixQ, n),
                    this.yawOnly && ((n.x = 0), (n.z = 0), n.normalize()),
                    (this.orientationOut_[0] = n.x),
                    (this.orientationOut_[1] = n.y),
                    (this.orientationOut_[2] = n.z),
                    (this.orientationOut_[3] = n.w),
                    this.orientationOut_
                  );
                var t,
                  r,
                  i,
                  n,
                  s = this.filter.getOrientation();
                return (
                  (e = this.posePredictor.getPrediction(
                    s,
                    this.gyroscope,
                    this.previousTimestampS
                  )),
                  (n = new k()).copy(this.filterToWorldQ),
                  n.multiply(this.resetQ),
                  n.multiply(e),
                  n.multiply(this.worldToScreenQ),
                  this.yawOnly && ((n.x = 0), (n.z = 0), n.normalize()),
                  (this.orientationOut_[0] = n.x),
                  (this.orientationOut_[1] = n.y),
                  (this.orientationOut_[2] = n.z),
                  (this.orientationOut_[3] = n.w),
                  this.orientationOut_
                );
              }),
              (J.prototype.resetPose = function() {
                this.resetQ.copy(this.filter.getOrientation()),
                  (this.resetQ.x = 0),
                  (this.resetQ.y = 0),
                  (this.resetQ.z *= -1),
                  this.resetQ.normalize(),
                  d() && this.resetQ.multiply(this.inverseWorldToScreenQ),
                  this.resetQ.multiply(this.originalPoseAdjustQ);
              }),
              (J.prototype.onDeviceOrientation_ = function(e) {
                this._deviceOrientationQ = this._deviceOrientationQ || new k();
                var t = e.alpha,
                  r = e.beta,
                  i = e.gamma;
                (t = ((t || 0) * Math.PI) / 180),
                  (r = ((r || 0) * Math.PI) / 180),
                  (i = ((i || 0) * Math.PI) / 180),
                  this._deviceOrientationQ.setFromEulerYXZ(r, t, -i);
              }),
              (J.prototype.onDeviceMotion_ = function(e) {
                this.updateDeviceMotion_(e);
              }),
              (J.prototype.updateDeviceMotion_ = function(e) {
                var t = e.accelerationIncludingGravity,
                  r = e.rotationRate,
                  i = e.timeStamp / 1e3,
                  n = i - this.previousTimestampS;
                return n < 0
                  ? (E(
                      'fusion-pose-sensor:invalid:non-monotonic',
                      'Invalid timestamps detected: non-monotonic timestamp from devicemotion'
                    ),
                    void (this.previousTimestampS = i))
                  : n <= 0.001 || n > 1
                  ? (E(
                      'fusion-pose-sensor:invalid:outside-threshold',
                      'Invalid timestamps detected: Timestamp from devicemotion outside expected range.'
                    ),
                    void (this.previousTimestampS = i))
                  : (this.accelerometer.set(-t.x, -t.y, -t.z),
                    c()
                      ? this.gyroscope.set(-r.beta, r.alpha, r.gamma)
                      : this.gyroscope.set(r.alpha, r.beta, r.gamma),
                    this.isDeviceMotionInRadians ||
                      this.gyroscope.multiplyScalar(Math.PI / 180),
                    this.filter.addAccelMeasurement(this.accelerometer, i),
                    this.filter.addGyroMeasurement(this.gyroscope, i),
                    void (this.previousTimestampS = i));
              }),
              (J.prototype.onOrientationChange_ = function(e) {
                this.setScreenTransform_();
              }),
              (J.prototype.onMessage_ = function(e) {
                var t = e.data;
                t &&
                  t.type &&
                  'devicemotion' === t.type.toLowerCase() &&
                  this.updateDeviceMotion_(t.deviceMotionEvent);
              }),
              (J.prototype.setScreenTransform_ = function() {
                switch (
                  (this.worldToScreenQ.set(0, 0, 0, 1), window.orientation)
                ) {
                  case 0:
                    break;
                  case 90:
                    this.worldToScreenQ.setFromAxisAngle(
                      new O(0, 0, 1),
                      -Math.PI / 2
                    );
                    break;
                  case -90:
                    this.worldToScreenQ.setFromAxisAngle(
                      new O(0, 0, 1),
                      Math.PI / 2
                    );
                }
                this.inverseWorldToScreenQ.copy(this.worldToScreenQ),
                  this.inverseWorldToScreenQ.inverse();
              }),
              (J.prototype.start = function() {
                var e, t, r;
                (this.onDeviceMotionCallback_ = this.onDeviceMotion_.bind(
                  this
                )),
                  (this.onOrientationChangeCallback_ = this.onOrientationChange_.bind(
                    this
                  )),
                  (this.onMessageCallback_ = this.onMessage_.bind(this)),
                  (this.onDeviceOrientationCallback_ = this.onDeviceOrientation_.bind(
                    this
                  )),
                  a() &&
                    ((e = window.self !== window.top),
                    (t = y(document.referrer)),
                    (r = y(window.location.href)),
                    e && t !== r) &&
                    window.addEventListener('message', this.onMessageCallback_),
                  window.addEventListener(
                    'orientationchange',
                    this.onOrientationChangeCallback_
                  ),
                  this.isWithoutDeviceMotion
                    ? window.addEventListener(
                        'deviceorientation',
                        this.onDeviceOrientationCallback_
                      )
                    : window.addEventListener(
                        'devicemotion',
                        this.onDeviceMotionCallback_
                      );
              }),
              (J.prototype.stop = function() {
                window.removeEventListener(
                  'devicemotion',
                  this.onDeviceMotionCallback_
                ),
                  window.removeEventListener(
                    'deviceorientation',
                    this.onDeviceOrientationCallback_
                  ),
                  window.removeEventListener(
                    'orientationchange',
                    this.onOrientationChangeCallback_
                  ),
                  window.removeEventListener(
                    'message',
                    this.onMessageCallback_
                  );
              });
            var $ = new O(1, 0, 0),
              ee = new O(0, 0, 1),
              te = new k();
            te.setFromAxisAngle($, -Math.PI / 2),
              te.multiply(new k().setFromAxisAngle(ee, Math.PI / 2));
            var re = (function() {
              function e(t) {
                !(function(e, t) {
                  if (!(e instanceof t))
                    throw new TypeError('Cannot call a class as a function');
                })(this, e),
                  (this.config = t),
                  (this.sensor = null),
                  (this.fusionSensor = null),
                  (this._out = new Float32Array(4)),
                  (this.api = null),
                  (this.errors = []),
                  (this._sensorQ = new k()),
                  (this._outQ = new k()),
                  (this._onSensorRead = this._onSensorRead.bind(this)),
                  (this._onSensorError = this._onSensorError.bind(this)),
                  this.init();
              }
              return (
                i(e, [
                  {
                    key: 'init',
                    value: function() {
                      var e = null;
                      try {
                        (e = new RelativeOrientationSensor({
                          frequency: 60,
                          referenceFrame: 'screen',
                        })).addEventListener('error', this._onSensorError);
                      } catch (e) {
                        this.errors.push(e),
                          'SecurityError' === e.name
                            ? (console.error(
                                'Cannot construct sensors due to the Feature Policy'
                              ),
                              console.warn(
                                'Attempting to fall back using "devicemotion"; however this will fail in the future without correct permissions.'
                              ),
                              this.useDeviceMotion())
                            : 'ReferenceError' === e.name
                            ? this.useDeviceMotion()
                            : console.error(e);
                      }
                      e &&
                        ((this.api = 'sensor'),
                        (this.sensor = e),
                        this.sensor.addEventListener(
                          'reading',
                          this._onSensorRead
                        ),
                        this.sensor.start());
                    },
                  },
                  {
                    key: 'useDeviceMotion',
                    value: function() {
                      (this.api = 'devicemotion'),
                        (this.fusionSensor = new J(
                          this.config.K_FILTER,
                          this.config.PREDICTION_TIME_S,
                          this.config.YAW_ONLY,
                          this.config.DEBUG
                        )),
                        this.sensor &&
                          (this.sensor.removeEventListener(
                            'reading',
                            this._onSensorRead
                          ),
                          this.sensor.removeEventListener(
                            'error',
                            this._onSensorError
                          ),
                          (this.sensor = null));
                    },
                  },
                  {
                    key: 'getOrientation',
                    value: function() {
                      if (this.fusionSensor)
                        return this.fusionSensor.getOrientation();
                      if (!this.sensor || !this.sensor.quaternion)
                        return (
                          (this._out[0] = this._out[1] = this._out[2] = 0),
                          (this._out[3] = 1),
                          this._out
                        );
                      var e = this.sensor.quaternion;
                      this._sensorQ.set(e[0], e[1], e[2], e[3]);
                      var t = this._outQ;
                      return (
                        t.copy(te),
                        t.multiply(this._sensorQ),
                        this.config.YAW_ONLY &&
                          ((t.x = t.z = 0), t.normalize()),
                        (this._out[0] = t.x),
                        (this._out[1] = t.y),
                        (this._out[2] = t.z),
                        (this._out[3] = t.w),
                        this._out
                      );
                    },
                  },
                  {
                    key: '_onSensorError',
                    value: function(e) {
                      this.errors.push(e.error),
                        'NotAllowedError' === e.error.name
                          ? console.error(
                              'Permission to access sensor was denied'
                            )
                          : 'NotReadableError' === e.error.name
                          ? console.error('Sensor could not be read')
                          : console.error(e.error),
                        this.useDeviceMotion();
                    },
                  },
                  { key: '_onSensorRead', value: function() {} },
                ]),
                e
              );
            })();
            function ie() {
              this.loadIcon_();
              var e = document.createElement('div');
              ((s = e.style).position = 'fixed'),
                (s.top = 0),
                (s.right = 0),
                (s.bottom = 0),
                (s.left = 0),
                (s.backgroundColor = 'gray'),
                (s.fontFamily = 'sans-serif'),
                (s.zIndex = 1e6);
              var t = document.createElement('img');
              (t.src = this.icon),
                ((s = t.style).marginLeft = '25%'),
                (s.marginTop = '25%'),
                (s.width = '50%'),
                e.appendChild(t);
              var r = document.createElement('div');
              ((s = r.style).textAlign = 'center'),
                (s.fontSize = '16px'),
                (s.lineHeight = '24px'),
                (s.margin = '24px 25%'),
                (s.width = '50%'),
                (r.innerHTML = 'Place your phone into your Cardboard viewer.'),
                e.appendChild(r);
              var i = document.createElement('div');
              ((s = i.style).backgroundColor = '#CFD8DC'),
                (s.position = 'fixed'),
                (s.bottom = 0),
                (s.width = '100%'),
                (s.height = '48px'),
                (s.padding = '14px 24px'),
                (s.boxSizing = 'border-box'),
                (s.color = '#656A6B'),
                e.appendChild(i);
              var n = document.createElement('div');
              (n.style.float = 'left'), (n.innerHTML = 'No Cardboard viewer?');
              var s,
                a = document.createElement('a');
              (a.href = 'https://www.google.com/get/cardboard/get-cardboard/'),
                (a.innerHTML = 'get one'),
                (a.target = '_blank'),
                ((s = a.style).float = 'right'),
                (s.fontWeight = 600),
                (s.textTransform = 'uppercase'),
                (s.borderLeft = '1px solid gray'),
                (s.paddingLeft = '24px'),
                (s.textDecoration = 'none'),
                (s.color = '#656A6B'),
                i.appendChild(n),
                i.appendChild(a),
                (this.overlay = e),
                (this.text = r),
                this.hide();
            }
            function ne(e) {
              try {
                this.selectedKey = localStorage.getItem(
                  'WEBVR_CARDBOARD_VIEWER'
                );
              } catch (e) {
                console.error('Failed to load viewer profile: %s', e);
              }
              this.selectedKey || (this.selectedKey = e || 'CardboardV1'),
                (this.dialog = this.createDialog_(X.Viewers)),
                (this.root = null),
                (this.onChangeCallbacks_ = []);
            }
            (ie.prototype.show = function(e) {
              e || this.overlay.parentElement
                ? e &&
                  (this.overlay.parentElement &&
                    this.overlay.parentElement != e &&
                    this.overlay.parentElement.removeChild(this.overlay),
                  e.appendChild(this.overlay))
                : document.body.appendChild(this.overlay),
                (this.overlay.style.display = 'block');
              var t = this.overlay.querySelector('img').style;
              d()
                ? ((t.width = '20%'),
                  (t.marginLeft = '40%'),
                  (t.marginTop = '3%'))
                : ((t.width = '50%'),
                  (t.marginLeft = '25%'),
                  (t.marginTop = '25%'));
            }),
              (ie.prototype.hide = function() {
                this.overlay.style.display = 'none';
              }),
              (ie.prototype.showTemporarily = function(e, t) {
                this.show(t),
                  (this.timer = setTimeout(this.hide.bind(this), e));
              }),
              (ie.prototype.disableShowTemporarily = function() {
                clearTimeout(this.timer);
              }),
              (ie.prototype.update = function() {
                this.disableShowTemporarily(),
                  !d() && _() ? this.show() : this.hide();
              }),
              (ie.prototype.loadIcon_ = function() {
                this.icon =
                  'data:image/svg+xml,' +
                  encodeURIComponent(
                    "<svg width='198' height='240' viewBox='0 0 198 240' xmlns='http://www.w3.org/2000/svg'><g fill='none' fill-rule='evenodd'><path d='M149.625 109.527l6.737 3.891v.886c0 .177.013.36.038.549.01.081.02.162.027.242.14 1.415.974 2.998 2.105 3.999l5.72 5.062.081-.09s4.382-2.53 5.235-3.024l25.97 14.993v54.001c0 .771-.386 1.217-.948 1.217-.233 0-.495-.076-.772-.236l-23.967-13.838-.014.024-27.322 15.775-.85-1.323c-4.731-1.529-9.748-2.74-14.951-3.61a.27.27 0 0 0-.007.024l-5.067 16.961-7.891 4.556-.037-.063v27.59c0 .772-.386 1.217-.948 1.217-.232 0-.495-.076-.772-.236l-42.473-24.522c-.95-.549-1.72-1.877-1.72-2.967v-1.035l-.021.047a5.111 5.111 0 0 0-1.816-.399 5.682 5.682 0 0 0-.546.001 13.724 13.724 0 0 1-1.918-.041c-1.655-.153-3.2-.6-4.404-1.296l-46.576-26.89.005.012-10.278-18.75c-1.001-1.827-.241-4.216 1.698-5.336l56.011-32.345a4.194 4.194 0 0 1 2.099-.572c1.326 0 2.572.659 3.227 1.853l.005-.003.227.413-.006.004a9.63 9.63 0 0 0 1.477 2.018l.277.27c1.914 1.85 4.468 2.801 7.113 2.801 1.949 0 3.948-.517 5.775-1.572.013 0 7.319-4.219 7.319-4.219a4.194 4.194 0 0 1 2.099-.572c1.326 0 2.572.658 3.226 1.853l3.25 5.928.022-.018 6.785 3.917-.105-.182 46.881-26.965m0-1.635c-.282 0-.563.073-.815.218l-46.169 26.556-5.41-3.124-3.005-5.481c-.913-1.667-2.699-2.702-4.66-2.703-1.011 0-2.02.274-2.917.792a3825 3825 0 0 1-7.275 4.195l-.044.024a9.937 9.937 0 0 1-4.957 1.353c-2.292 0-4.414-.832-5.976-2.342l-.252-.245a7.992 7.992 0 0 1-1.139-1.534 1.379 1.379 0 0 0-.06-.122l-.227-.414a1.718 1.718 0 0 0-.095-.154c-.938-1.574-2.673-2.545-4.571-2.545-1.011 0-2.02.274-2.917.792L3.125 155.502c-2.699 1.559-3.738 4.94-2.314 7.538l10.278 18.75c.177.323.448.563.761.704l46.426 26.804c1.403.81 3.157 1.332 5.072 1.508a15.661 15.661 0 0 0 2.146.046 4.766 4.766 0 0 1 .396 0c.096.004.19.011.283.022.109 1.593 1.159 3.323 2.529 4.114l42.472 24.522c.524.302 1.058.455 1.59.455 1.497 0 2.583-1.2 2.583-2.852v-26.562l7.111-4.105a1.64 1.64 0 0 0 .749-.948l4.658-15.593c4.414.797 8.692 1.848 12.742 3.128l.533.829a1.634 1.634 0 0 0 2.193.531l26.532-15.317L193 192.433c.523.302 1.058.455 1.59.455 1.497 0 2.583-1.199 2.583-2.852v-54.001c0-.584-.312-1.124-.818-1.416l-25.97-14.993a1.633 1.633 0 0 0-1.636.001c-.606.351-2.993 1.73-4.325 2.498l-4.809-4.255c-.819-.725-1.461-1.933-1.561-2.936a7.776 7.776 0 0 0-.033-.294 2.487 2.487 0 0 1-.023-.336v-.886c0-.584-.312-1.123-.817-1.416l-6.739-3.891a1.633 1.633 0 0 0-.817-.219' fill='#455A64'/><path d='M96.027 132.636l46.576 26.891c1.204.695 1.979 1.587 2.242 2.541l-.01.007-81.374 46.982h-.001c-1.654-.152-3.199-.6-4.403-1.295l-46.576-26.891 83.546-48.235' fill='#FAFAFA'/><path d='M63.461 209.174c-.008 0-.015 0-.022-.002-1.693-.156-3.228-.609-4.441-1.309l-46.576-26.89a.118.118 0 0 1 0-.203l83.546-48.235a.117.117 0 0 1 .117 0l46.576 26.891c1.227.708 2.021 1.612 2.296 2.611a.116.116 0 0 1-.042.124l-.021.016-81.375 46.981a.11.11 0 0 1-.058.016zm-50.747-28.303l46.401 26.79c1.178.68 2.671 1.121 4.32 1.276l81.272-46.922c-.279-.907-1.025-1.73-2.163-2.387l-46.517-26.857-83.313 48.1z' fill='#607D8B'/><path d='M148.327 165.471a5.85 5.85 0 0 1-.546.001c-1.894-.083-3.302-1.038-3.145-2.132a2.693 2.693 0 0 0-.072-1.105l-81.103 46.822c.628.058 1.272.073 1.918.042.182-.009.364-.009.546-.001 1.894.083 3.302 1.038 3.145 2.132l79.257-45.759' fill='#FFF'/><path d='M69.07 211.347a.118.118 0 0 1-.115-.134c.045-.317-.057-.637-.297-.925-.505-.61-1.555-1.022-2.738-1.074a5.966 5.966 0 0 0-.535.001 14.03 14.03 0 0 1-1.935-.041.117.117 0 0 1-.103-.092.116.116 0 0 1 .055-.126l81.104-46.822a.117.117 0 0 1 .171.07c.104.381.129.768.074 1.153-.045.316.057.637.296.925.506.61 1.555 1.021 2.739 1.073.178.008.357.008.535-.001a.117.117 0 0 1 .064.218l-79.256 45.759a.114.114 0 0 1-.059.016zm-3.405-2.372c.089 0 .177.002.265.006 1.266.056 2.353.488 2.908 1.158.227.274.35.575.36.882l78.685-45.429c-.036 0-.072-.001-.107-.003-1.267-.056-2.354-.489-2.909-1.158-.282-.34-.402-.724-.347-1.107a2.604 2.604 0 0 0-.032-.91L63.846 208.97a13.91 13.91 0 0 0 1.528.012c.097-.005.194-.007.291-.007z' fill='#607D8B'/><path d='M2.208 162.134c-1.001-1.827-.241-4.217 1.698-5.337l56.011-32.344c1.939-1.12 4.324-.546 5.326 1.281l.232.41a9.344 9.344 0 0 0 1.47 2.021l.278.27c3.325 3.214 8.583 3.716 12.888 1.23l7.319-4.22c1.94-1.119 4.324-.546 5.325 1.282l3.25 5.928-83.519 48.229-10.278-18.75z' fill='#FAFAFA'/><path d='M12.486 181.001a.112.112 0 0 1-.031-.005.114.114 0 0 1-.071-.056L2.106 162.19c-1.031-1.88-.249-4.345 1.742-5.494l56.01-32.344a4.328 4.328 0 0 1 2.158-.588c1.415 0 2.65.702 3.311 1.882.01.008.018.017.024.028l.227.414a.122.122 0 0 1 .013.038 9.508 9.508 0 0 0 1.439 1.959l.275.266c1.846 1.786 4.344 2.769 7.031 2.769 1.977 0 3.954-.538 5.717-1.557a.148.148 0 0 1 .035-.013l7.284-4.206a4.321 4.321 0 0 1 2.157-.588c1.427 0 2.672.716 3.329 1.914l3.249 5.929a.116.116 0 0 1-.044.157l-83.518 48.229a.116.116 0 0 1-.059.016zm49.53-57.004c-.704 0-1.41.193-2.041.557l-56.01 32.345c-1.882 1.086-2.624 3.409-1.655 5.179l10.221 18.645 83.317-48.112-3.195-5.829c-.615-1.122-1.783-1.792-3.124-1.792a4.08 4.08 0 0 0-2.04.557l-7.317 4.225a.148.148 0 0 1-.035.013 11.7 11.7 0 0 1-5.801 1.569c-2.748 0-5.303-1.007-7.194-2.835l-.278-.27a9.716 9.716 0 0 1-1.497-2.046.096.096 0 0 1-.013-.037l-.191-.347a.11.11 0 0 1-.023-.029c-.615-1.123-1.783-1.793-3.124-1.793z' fill='#607D8B'/><path d='M42.434 155.808c-2.51-.001-4.697-1.258-5.852-3.365-1.811-3.304-.438-7.634 3.059-9.654l12.291-7.098a7.599 7.599 0 0 1 3.789-1.033c2.51 0 4.697 1.258 5.852 3.365 1.811 3.304.439 7.634-3.059 9.654l-12.291 7.098a7.606 7.606 0 0 1-3.789 1.033zm13.287-20.683a7.128 7.128 0 0 0-3.555.971l-12.291 7.098c-3.279 1.893-4.573 5.942-2.883 9.024 1.071 1.955 3.106 3.122 5.442 3.122a7.13 7.13 0 0 0 3.556-.97l12.291-7.098c3.279-1.893 4.572-5.942 2.883-9.024-1.072-1.955-3.106-3.123-5.443-3.123z' fill='#607D8B'/><path d='M149.588 109.407l6.737 3.89v.887c0 .176.013.36.037.549.011.081.02.161.028.242.14 1.415.973 2.998 2.105 3.999l7.396 6.545c.177.156.358.295.541.415 1.579 1.04 2.95.466 3.062-1.282.049-.784.057-1.595.023-2.429l-.003-.16v-1.151l25.987 15.003v54c0 1.09-.77 1.53-1.72.982l-42.473-24.523c-.95-.548-1.72-1.877-1.72-2.966v-34.033' fill='#FAFAFA'/><path d='M194.553 191.25c-.257 0-.54-.085-.831-.253l-42.472-24.521c-.981-.567-1.779-1.943-1.779-3.068v-34.033h.234v34.033c0 1.051.745 2.336 1.661 2.866l42.473 24.521c.424.245.816.288 1.103.122.285-.164.442-.52.442-1.002v-53.933l-25.753-14.868.003 1.106c.034.832.026 1.654-.024 2.439-.054.844-.396 1.464-.963 1.746-.619.309-1.45.173-2.28-.373a5.023 5.023 0 0 1-.553-.426l-7.397-6.544c-1.158-1.026-1.999-2.625-2.143-4.076a9.624 9.624 0 0 0-.027-.238 4.241 4.241 0 0 1-.038-.564v-.82l-6.68-3.856.117-.202 6.738 3.89.058.034v.954c0 .171.012.351.036.533.011.083.021.165.029.246.138 1.395.948 2.935 2.065 3.923l7.397 6.545c.173.153.35.289.527.406.758.499 1.504.63 2.047.359.49-.243.786-.795.834-1.551.05-.778.057-1.591.024-2.417l-.004-.163v-1.355l.175.1 25.987 15.004.059.033v54.068c0 .569-.198.996-.559 1.204a1.002 1.002 0 0 1-.506.131' fill='#607D8B'/><path d='M145.685 163.161l24.115 13.922-25.978 14.998-1.462-.307c-6.534-2.17-13.628-3.728-21.019-4.616-4.365-.524-8.663 1.096-9.598 3.62a2.746 2.746 0 0 0-.011 1.928c1.538 4.267 4.236 8.363 7.995 12.135l.532.845-25.977 14.997-24.115-13.922 75.518-43.6' fill='#FFF'/><path d='M94.282 220.818l-.059-.033-24.29-14.024.175-.101 75.577-43.634.058.033 24.29 14.024-26.191 15.122-.045-.01-1.461-.307c-6.549-2.174-13.613-3.725-21.009-4.614a13.744 13.744 0 0 0-1.638-.097c-3.758 0-7.054 1.531-7.837 3.642a2.62 2.62 0 0 0-.01 1.848c1.535 4.258 4.216 8.326 7.968 12.091l.016.021.526.835.006.01.064.102-.105.061-25.977 14.998-.058.033zm-23.881-14.057l23.881 13.788 24.802-14.32c.546-.315.846-.489 1.017-.575l-.466-.74c-3.771-3.787-6.467-7.881-8.013-12.168a2.851 2.851 0 0 1 .011-2.008c.815-2.199 4.203-3.795 8.056-3.795.557 0 1.117.033 1.666.099 7.412.891 14.491 2.445 21.041 4.621.836.175 1.215.254 1.39.304l25.78-14.884-23.881-13.788-75.284 43.466z' fill='#607D8B'/><path d='M167.23 125.979v50.871l-27.321 15.773-6.461-14.167c-.91-1.996-3.428-1.738-5.624.574a10.238 10.238 0 0 0-2.33 4.018l-6.46 21.628-27.322 15.774v-50.871l75.518-43.6' fill='#FFF'/><path d='M91.712 220.567a.127.127 0 0 1-.059-.016.118.118 0 0 1-.058-.101v-50.871c0-.042.023-.08.058-.101l75.519-43.6a.117.117 0 0 1 .175.101v50.871c0 .041-.023.08-.059.1l-27.321 15.775a.118.118 0 0 1-.094.01.12.12 0 0 1-.071-.063l-6.46-14.168c-.375-.822-1.062-1.275-1.934-1.275-1.089 0-2.364.686-3.5 1.881a10.206 10.206 0 0 0-2.302 3.972l-6.46 21.627a.118.118 0 0 1-.054.068L91.77 220.551a.12.12 0 0 1-.058.016zm.117-50.92v50.601l27.106-15.65 6.447-21.583a10.286 10.286 0 0 1 2.357-4.065c1.18-1.242 2.517-1.954 3.669-1.954.969 0 1.731.501 2.146 1.411l6.407 14.051 27.152-15.676v-50.601l-75.284 43.466z' fill='#607D8B'/><path d='M168.543 126.213v50.87l-27.322 15.774-6.46-14.168c-.91-1.995-3.428-1.738-5.624.574a10.248 10.248 0 0 0-2.33 4.019l-6.461 21.627-27.321 15.774v-50.87l75.518-43.6' fill='#FFF'/><path d='M93.025 220.8a.123.123 0 0 1-.059-.015.12.12 0 0 1-.058-.101v-50.871c0-.042.023-.08.058-.101l75.518-43.6a.112.112 0 0 1 .117 0c.036.02.059.059.059.1v50.871a.116.116 0 0 1-.059.101l-27.321 15.774a.111.111 0 0 1-.094.01.115.115 0 0 1-.071-.062l-6.46-14.168c-.375-.823-1.062-1.275-1.935-1.275-1.088 0-2.363.685-3.499 1.881a10.19 10.19 0 0 0-2.302 3.971l-6.461 21.628a.108.108 0 0 1-.053.067l-27.322 15.775a.12.12 0 0 1-.058.015zm.117-50.919v50.6l27.106-15.649 6.447-21.584a10.293 10.293 0 0 1 2.357-4.065c1.179-1.241 2.516-1.954 3.668-1.954.969 0 1.732.502 2.147 1.412l6.407 14.051 27.152-15.676v-50.601l-75.284 43.466z' fill='#607D8B'/><path d='M169.8 177.083l-27.322 15.774-6.46-14.168c-.91-1.995-3.428-1.738-5.625.574a10.246 10.246 0 0 0-2.329 4.019l-6.461 21.627-27.321 15.774v-50.87l75.518-43.6v50.87z' fill='#FAFAFA'/><path d='M94.282 220.917a.234.234 0 0 1-.234-.233v-50.871c0-.083.045-.161.117-.202l75.518-43.601a.234.234 0 1 1 .35.202v50.871a.233.233 0 0 1-.116.202l-27.322 15.775a.232.232 0 0 1-.329-.106l-6.461-14.168c-.36-.789-.992-1.206-1.828-1.206-1.056 0-2.301.672-3.415 1.844a10.099 10.099 0 0 0-2.275 3.924l-6.46 21.628a.235.235 0 0 1-.107.136l-27.322 15.774a.23.23 0 0 1-.116.031zm.233-50.969v50.331l26.891-15.525 6.434-21.539a10.41 10.41 0 0 1 2.384-4.112c1.201-1.265 2.569-1.991 3.753-1.991 1.018 0 1.818.526 2.253 1.48l6.354 13.934 26.982-15.578v-50.331l-75.051 43.331z' fill='#607D8B'/><path d='M109.894 199.943c-1.774 0-3.241-.725-4.244-2.12a.224.224 0 0 1 .023-.294.233.233 0 0 1 .301-.023c.78.547 1.705.827 2.75.827 1.323 0 2.754-.439 4.256-1.306 5.311-3.067 9.631-10.518 9.631-16.611 0-1.927-.442-3.56-1.278-4.724a.232.232 0 0 1 .323-.327c1.671 1.172 2.591 3.381 2.591 6.219 0 6.242-4.426 13.863-9.865 17.003-1.574.908-3.084 1.356-4.488 1.356zm-2.969-1.542c.813.651 1.82.877 2.968.877h.001c1.321 0 2.753-.327 4.254-1.194 5.311-3.067 9.632-10.463 9.632-16.556 0-1.979-.463-3.599-1.326-4.761.411 1.035.625 2.275.625 3.635 0 6.243-4.426 13.883-9.865 17.023-1.574.909-3.084 1.317-4.49 1.317-.641 0-1.243-.149-1.799-.341z' fill='#607D8B'/><path d='M113.097 197.23c5.384-3.108 9.748-10.636 9.748-16.814 0-2.051-.483-3.692-1.323-4.86-1.784-1.252-4.374-1.194-7.257.47-5.384 3.108-9.748 10.636-9.748 16.814 0 2.051.483 3.692 1.323 4.86 1.784 1.252 4.374 1.194 7.257-.47' fill='#FAFAFA'/><path d='M108.724 198.614c-1.142 0-2.158-.213-3.019-.817-.021-.014-.04.014-.055-.007-.894-1.244-1.367-2.948-1.367-4.973 0-6.242 4.426-13.864 9.865-17.005 1.574-.908 3.084-1.363 4.49-1.363 1.142 0 2.158.309 3.018.913a.23.23 0 0 1 .056.056c.894 1.244 1.367 2.972 1.367 4.997 0 6.243-4.426 13.783-9.865 16.923-1.574.909-3.084 1.276-4.49 1.276zm-2.718-1.109c.774.532 1.688.776 2.718.776 1.323 0 2.754-.413 4.256-1.28 5.311-3.066 9.631-10.505 9.631-16.598 0-1.909-.434-3.523-1.255-4.685-.774-.533-1.688-.799-2.718-.799-1.323 0-2.755.441-4.256 1.308-5.311 3.066-9.631 10.506-9.631 16.599 0 1.909.434 3.517 1.255 4.679z' fill='#607D8B'/><path d='M149.318 114.262l-9.984 8.878 15.893 11.031 5.589-6.112-11.498-13.797' fill='#FAFAFA'/><path d='M169.676 120.84l-9.748 5.627c-3.642 2.103-9.528 2.113-13.147.024-3.62-2.089-3.601-5.488.041-7.591l9.495-5.608-6.729-3.885-81.836 47.071 45.923 26.514 3.081-1.779c.631-.365.869-.898.618-1.39-2.357-4.632-2.593-9.546-.683-14.262 5.638-13.92 24.509-24.815 48.618-28.07 8.169-1.103 16.68-.967 24.704.394.852.145 1.776.008 2.407-.357l3.081-1.778-25.825-14.91' fill='#FAFAFA'/><path d='M113.675 183.459a.47.47 0 0 1-.233-.062l-45.924-26.515a.468.468 0 0 1 .001-.809l81.836-47.071a.467.467 0 0 1 .466 0l6.729 3.885a.467.467 0 0 1-.467.809l-6.496-3.75-80.9 46.533 44.988 25.973 2.848-1.644c.192-.111.62-.409.435-.773-2.416-4.748-2.658-9.814-.7-14.65 2.806-6.927 8.885-13.242 17.582-18.263 8.657-4.998 19.518-8.489 31.407-10.094 8.198-1.107 16.79-.97 24.844.397.739.125 1.561.007 2.095-.301l2.381-1.374-25.125-14.506a.467.467 0 0 1 .467-.809l25.825 14.91a.467.467 0 0 1 0 .809l-3.081 1.779c-.721.417-1.763.575-2.718.413-7.963-1.351-16.457-1.486-24.563-.392-11.77 1.589-22.512 5.039-31.065 9.977-8.514 4.916-14.456 11.073-17.183 17.805-1.854 4.578-1.623 9.376.666 13.875.37.725.055 1.513-.8 2.006l-3.081 1.78a.476.476 0 0 1-.234.062' fill='#455A64'/><path d='M153.316 128.279c-2.413 0-4.821-.528-6.652-1.586-1.818-1.049-2.82-2.461-2.82-3.975 0-1.527 1.016-2.955 2.861-4.02l9.493-5.607a.233.233 0 1 1 .238.402l-9.496 5.609c-1.696.979-2.628 2.263-2.628 3.616 0 1.34.918 2.608 2.585 3.571 3.549 2.049 9.343 2.038 12.914-.024l9.748-5.628a.234.234 0 0 1 .234.405l-9.748 5.628c-1.858 1.072-4.296 1.609-6.729 1.609' fill='#607D8B'/><path d='M113.675 182.992l-45.913-26.508M113.675 183.342a.346.346 0 0 1-.175-.047l-45.913-26.508a.35.35 0 1 1 .35-.607l45.913 26.508a.35.35 0 0 1-.175.654' fill='#455A64'/><path d='M67.762 156.484v54.001c0 1.09.77 2.418 1.72 2.967l42.473 24.521c.95.549 1.72.11 1.72-.98v-54.001' fill='#FAFAFA'/><path d='M112.727 238.561c-.297 0-.62-.095-.947-.285l-42.473-24.521c-1.063-.613-1.895-2.05-1.895-3.27v-54.001a.35.35 0 1 1 .701 0v54.001c0 .96.707 2.18 1.544 2.663l42.473 24.522c.344.198.661.243.87.122.206-.119.325-.411.325-.799v-54.001a.35.35 0 1 1 .7 0v54.001c0 .655-.239 1.154-.675 1.406a1.235 1.235 0 0 1-.623.162' fill='#455A64'/><path d='M112.86 147.512h-.001c-2.318 0-4.499-.522-6.142-1.471-1.705-.984-2.643-2.315-2.643-3.749 0-1.445.952-2.791 2.68-3.788l12.041-6.953c1.668-.962 3.874-1.493 6.212-1.493 2.318 0 4.499.523 6.143 1.472 1.704.984 2.643 2.315 2.643 3.748 0 1.446-.952 2.791-2.68 3.789l-12.042 6.952c-1.668.963-3.874 1.493-6.211 1.493zm12.147-16.753c-2.217 0-4.298.497-5.861 1.399l-12.042 6.952c-1.502.868-2.33 1.998-2.33 3.182 0 1.173.815 2.289 2.293 3.142 1.538.889 3.596 1.378 5.792 1.378h.001c2.216 0 4.298-.497 5.861-1.399l12.041-6.953c1.502-.867 2.33-1.997 2.33-3.182 0-1.172-.814-2.288-2.292-3.142-1.539-.888-3.596-1.377-5.793-1.377z' fill='#607D8B'/><path d='M165.63 123.219l-5.734 3.311c-3.167 1.828-8.286 1.837-11.433.02-3.147-1.817-3.131-4.772.036-6.601l5.734-3.31 11.397 6.58' fill='#FAFAFA'/><path d='M154.233 117.448l9.995 5.771-4.682 2.704c-1.434.827-3.352 1.283-5.399 1.283-2.029 0-3.923-.449-5.333-1.263-1.29-.744-2-1.694-2-2.674 0-.991.723-1.955 2.036-2.713l5.383-3.108m0-.809l-5.734 3.31c-3.167 1.829-3.183 4.784-.036 6.601 1.568.905 3.623 1.357 5.684 1.357 2.077 0 4.159-.46 5.749-1.377l5.734-3.311-11.397-6.58M145.445 179.667c-1.773 0-3.241-.85-4.243-2.245-.067-.092-.057-.275.023-.356.08-.081.207-.12.3-.055.781.548 1.706.812 2.751.811 1.322 0 2.754-.446 4.256-1.313 5.31-3.066 9.631-10.522 9.631-16.615 0-1.927-.442-3.562-1.279-4.726a.235.235 0 0 1 .024-.301.232.232 0 0 1 .3-.027c1.67 1.172 2.59 3.38 2.59 6.219 0 6.242-4.425 13.987-9.865 17.127-1.573.908-3.083 1.481-4.488 1.481zM142.476 178c.814.651 1.82 1.002 2.969 1.002 1.322 0 2.753-.452 4.255-1.32 5.31-3.065 9.631-10.523 9.631-16.617 0-1.98-.463-3.63-1.325-4.793.411 1.035.624 2.26.624 3.62 0 6.242-4.425 13.875-9.865 17.015-1.573.909-3.084 1.376-4.489 1.376a5.49 5.49 0 0 1-1.8-.283z' fill='#607D8B'/><path d='M148.648 176.704c5.384-3.108 9.748-10.636 9.748-16.813 0-2.052-.483-3.693-1.322-4.861-1.785-1.252-4.375-1.194-7.258.471-5.383 3.108-9.748 10.636-9.748 16.813 0 2.051.484 3.692 1.323 4.86 1.785 1.253 4.374 1.195 7.257-.47' fill='#FAFAFA'/><path d='M144.276 178.276c-1.143 0-2.158-.307-3.019-.911a.217.217 0 0 1-.055-.054c-.895-1.244-1.367-2.972-1.367-4.997 0-6.241 4.425-13.875 9.865-17.016 1.573-.908 3.084-1.369 4.489-1.369 1.143 0 2.158.307 3.019.91a.24.24 0 0 1 .055.055c.894 1.244 1.367 2.971 1.367 4.997 0 6.241-4.425 13.875-9.865 17.016-1.573.908-3.084 1.369-4.489 1.369zm-2.718-1.172c.773.533 1.687.901 2.718.901 1.322 0 2.754-.538 4.256-1.405 5.31-3.066 9.631-10.567 9.631-16.661 0-1.908-.434-3.554-1.256-4.716-.774-.532-1.688-.814-2.718-.814-1.322 0-2.754.433-4.256 1.3-5.31 3.066-9.631 10.564-9.631 16.657 0 1.91.434 3.576 1.256 4.738z' fill='#607D8B'/><path d='M150.72 172.361l-.363-.295a24.105 24.105 0 0 0 2.148-3.128 24.05 24.05 0 0 0 1.977-4.375l.443.149a24.54 24.54 0 0 1-2.015 4.46 24.61 24.61 0 0 1-2.19 3.189M115.917 191.514l-.363-.294a24.174 24.174 0 0 0 2.148-3.128 24.038 24.038 0 0 0 1.976-4.375l.443.148a24.48 24.48 0 0 1-2.015 4.461 24.662 24.662 0 0 1-2.189 3.188M114 237.476V182.584 237.476' fill='#607D8B'/><g><path d='M81.822 37.474c.017-.135-.075-.28-.267-.392-.327-.188-.826-.21-1.109-.045l-6.012 3.471c-.131.076-.194.178-.191.285.002.132.002.461.002.578v.043l-.007.128-6.591 3.779c-.001 0-2.077 1.046-2.787 5.192 0 0-.912 6.961-.898 19.745.015 12.57.606 17.07 1.167 21.351.22 1.684 3.001 2.125 3.001 2.125.331.04.698-.027 1.08-.248l75.273-43.551c1.808-1.069 2.667-3.719 3.056-6.284 1.213-7.99 1.675-32.978-.275-39.878-.196-.693-.51-1.083-.868-1.282l-2.086-.79c-.727.028-1.416.467-1.534.535L82.032 37.072l-.21.402' fill='#FFF'/><path d='M144.311 1.701l2.085.79c.358.199.672.589.868 1.282 1.949 6.9 1.487 31.887.275 39.878-.39 2.565-1.249 5.215-3.056 6.284L69.21 93.486a1.78 1.78 0 0 1-.896.258l-.183-.011c0 .001-2.782-.44-3.003-2.124-.56-4.282-1.151-8.781-1.165-21.351-.015-12.784.897-19.745.897-19.745.71-4.146 2.787-5.192 2.787-5.192l6.591-3.779.007-.128v-.043c0-.117 0-.446-.002-.578-.003-.107.059-.21.191-.285l6.012-3.472a.98.98 0 0 1 .481-.11c.218 0 .449.053.627.156.193.112.285.258.268.392l.211-.402 60.744-34.836c.117-.068.806-.507 1.534-.535m0-.997l-.039.001c-.618.023-1.283.244-1.974.656l-.021.012-60.519 34.706a2.358 2.358 0 0 0-.831-.15c-.365 0-.704.084-.98.244l-6.012 3.471c-.442.255-.699.69-.689 1.166l.001.15-6.08 3.487c-.373.199-2.542 1.531-3.29 5.898l-.006.039c-.009.07-.92 7.173-.906 19.875.014 12.62.603 17.116 1.172 21.465l.002.015c.308 2.355 3.475 2.923 3.836 2.98l.034.004c.101.013.204.019.305.019a2.77 2.77 0 0 0 1.396-.392l75.273-43.552c1.811-1.071 2.999-3.423 3.542-6.997 1.186-7.814 1.734-33.096-.301-40.299-.253-.893-.704-1.527-1.343-1.882l-.132-.062-2.085-.789a.973.973 0 0 0-.353-.065' fill='#455A64'/><path d='M128.267 11.565l1.495.434-56.339 32.326' fill='#FFF'/><path d='M74.202 90.545a.5.5 0 0 1-.25-.931l18.437-10.645a.499.499 0 1 1 .499.864L74.451 90.478l-.249.067M75.764 42.654l-.108-.062.046-.171 5.135-2.964.17.045-.045.171-5.135 2.964-.063.017M70.52 90.375V46.421l.063-.036L137.84 7.554v43.954l-.062.036L70.52 90.375zm.25-43.811v43.38l66.821-38.579V7.985L70.77 46.564z' fill='#607D8B'/><path d='M86.986 83.182c-.23.149-.612.384-.849.523l-11.505 6.701c-.237.139-.206.252.068.252h.565c.275 0 .693-.113.93-.252L87.7 83.705c.237-.139.428-.253.425-.256a11.29 11.29 0 0 1-.006-.503c0-.274-.188-.377-.418-.227l-.715.463' fill='#607D8B'/><path d='M75.266 90.782H74.7c-.2 0-.316-.056-.346-.166-.03-.11.043-.217.215-.317l11.505-6.702c.236-.138.615-.371.844-.519l.715-.464a.488.488 0 0 1 .266-.089c.172 0 .345.13.345.421 0 .214.001.363.003.437l.006.004-.004.069c-.003.075-.003.075-.486.356l-11.505 6.702a2.282 2.282 0 0 1-.992.268zm-.6-.25l.034.001h.566c.252 0 .649-.108.866-.234l11.505-6.702c.168-.098.294-.173.361-.214-.004-.084-.004-.218-.004-.437l-.095-.171-.131.049-.714.463c-.232.15-.616.386-.854.525l-11.505 6.702-.029.018z' fill='#607D8B'/><path d='M75.266 89.871H74.7c-.2 0-.316-.056-.346-.166-.03-.11.043-.217.215-.317l11.505-6.702c.258-.151.694-.268.993-.268h.565c.2 0 .316.056.346.166.03.11-.043.217-.215.317l-11.505 6.702a2.282 2.282 0 0 1-.992.268zm-.6-.25l.034.001h.566c.252 0 .649-.107.866-.234l11.505-6.702.03-.018-.035-.001h-.565c-.252 0-.649.108-.867.234l-11.505 6.702-.029.018zM74.37 90.801v-1.247 1.247' fill='#607D8B'/><path d='M68.13 93.901c-.751-.093-1.314-.737-1.439-1.376-.831-4.238-1.151-8.782-1.165-21.352-.015-12.784.897-19.745.897-19.745.711-4.146 2.787-5.192 2.787-5.192l74.859-43.219c.223-.129 2.487-1.584 3.195.923 1.95 6.9 1.488 31.887.275 39.878-.389 2.565-1.248 5.215-3.056 6.283L69.21 93.653c-.382.221-.749.288-1.08.248 0 0-2.781-.441-3.001-2.125-.561-4.281-1.152-8.781-1.167-21.351-.014-12.784.898-19.745.898-19.745.71-4.146 2.787-5.191 2.787-5.191l6.598-3.81.871-.119 6.599-3.83.046-.461L68.13 93.901' fill='#FAFAFA'/><path d='M68.317 94.161l-.215-.013h-.001l-.244-.047c-.719-.156-2.772-.736-2.976-2.292-.568-4.34-1.154-8.813-1.168-21.384-.014-12.654.891-19.707.9-19.777.725-4.231 2.832-5.338 2.922-5.382l6.628-3.827.87-.119 6.446-3.742.034-.334a.248.248 0 0 1 .273-.223.248.248 0 0 1 .223.272l-.059.589-6.752 3.919-.87.118-6.556 3.785c-.031.016-1.99 1.068-2.666 5.018-.007.06-.908 7.086-.894 19.702.014 12.539.597 16.996 1.161 21.305.091.691.689 1.154 1.309 1.452a1.95 1.95 0 0 1-.236-.609c-.781-3.984-1.155-8.202-1.17-21.399-.014-12.653.891-19.707.9-19.777.725-4.231 2.832-5.337 2.922-5.382-.004.001 74.444-42.98 74.846-43.212l.028-.017c.904-.538 1.72-.688 2.36-.433.555.221.949.733 1.172 1.52 2.014 7.128 1.46 32.219.281 39.983-.507 3.341-1.575 5.515-3.175 6.462L69.335 93.869a2.023 2.023 0 0 1-1.018.292zm-.147-.507c.293.036.604-.037.915-.217l75.273-43.551c1.823-1.078 2.602-3.915 2.934-6.106 1.174-7.731 1.731-32.695-.268-39.772-.178-.631-.473-1.032-.876-1.192-.484-.193-1.166-.052-1.921.397l-.034.021-74.858 43.218c-.031.017-1.989 1.069-2.666 5.019-.007.059-.908 7.085-.894 19.702.015 13.155.386 17.351 1.161 21.303.09.461.476.983 1.037 1.139.114.025.185.037.196.039h.001z' fill='#455A64'/><path d='M69.317 68.982c.489-.281.885-.056.885.505 0 .56-.396 1.243-.885 1.525-.488.282-.884.057-.884-.504 0-.56.396-1.243.884-1.526' fill='#FFF'/><path d='M68.92 71.133c-.289 0-.487-.228-.487-.625 0-.56.396-1.243.884-1.526a.812.812 0 0 1 .397-.121c.289 0 .488.229.488.626 0 .56-.396 1.243-.885 1.525a.812.812 0 0 1-.397.121m.794-2.459a.976.976 0 0 0-.49.147c-.548.317-.978 1.058-.978 1.687 0 .486.271.812.674.812a.985.985 0 0 0 .491-.146c.548-.317.978-1.057.978-1.687 0-.486-.272-.813-.675-.813' fill='#8097A2'/><path d='M68.92 70.947c-.271 0-.299-.307-.299-.439 0-.491.361-1.116.79-1.363a.632.632 0 0 1 .303-.096c.272 0 .301.306.301.438 0 .491-.363 1.116-.791 1.364a.629.629 0 0 1-.304.096m.794-2.086a.812.812 0 0 0-.397.121c-.488.283-.884.966-.884 1.526 0 .397.198.625.487.625a.812.812 0 0 0 .397-.121c.489-.282.885-.965.885-1.525 0-.397-.199-.626-.488-.626' fill='#8097A2'/><path d='M69.444 85.35c.264-.152.477-.031.477.272 0 .303-.213.67-.477.822-.263.153-.477.031-.477-.271 0-.302.214-.671.477-.823' fill='#FFF'/><path d='M69.23 86.51c-.156 0-.263-.123-.263-.337 0-.302.214-.671.477-.823a.431.431 0 0 1 .214-.066c.156 0 .263.124.263.338 0 .303-.213.67-.477.822a.431.431 0 0 1-.214.066m.428-1.412c-.1 0-.203.029-.307.09-.32.185-.57.618-.57.985 0 .309.185.524.449.524a.63.63 0 0 0 .308-.09c.32-.185.57-.618.57-.985 0-.309-.185-.524-.45-.524' fill='#8097A2'/><path d='M69.23 86.322l-.076-.149c0-.235.179-.544.384-.661l.12-.041.076.151c0 .234-.179.542-.383.66l-.121.04m.428-1.038a.431.431 0 0 0-.214.066c-.263.152-.477.521-.477.823 0 .214.107.337.263.337a.431.431 0 0 0 .214-.066c.264-.152.477-.519.477-.822 0-.214-.107-.338-.263-.338' fill='#8097A2'/><path d='M139.278 7.769v43.667L72.208 90.16V46.493l67.07-38.724' fill='#455A64'/><path d='M72.083 90.375V46.421l.063-.036 67.257-38.831v43.954l-.062.036-67.258 38.831zm.25-43.811v43.38l66.821-38.579V7.985L72.333 46.564z' fill='#607D8B'/></g><path d='M125.737 88.647l-7.639 3.334V84l-11.459 4.713v8.269L99 100.315l13.369 3.646 13.368-15.314' fill='#455A64'/></g></svg>"
                  );
              }),
              (ne.prototype.show = function(e) {
                (this.root = e),
                  e.appendChild(this.dialog),
                  (this.dialog.querySelector(
                    '#' + this.selectedKey
                  ).checked = !0),
                  (this.dialog.style.display = 'block');
              }),
              (ne.prototype.hide = function() {
                this.root &&
                  this.root.contains(this.dialog) &&
                  this.root.removeChild(this.dialog),
                  (this.dialog.style.display = 'none');
              }),
              (ne.prototype.getCurrentViewer = function() {
                return X.Viewers[this.selectedKey];
              }),
              (ne.prototype.getSelectedKey_ = function() {
                var e = this.dialog.querySelector('input[name=field]:checked');
                return e ? e.id : null;
              }),
              (ne.prototype.onChange = function(e) {
                this.onChangeCallbacks_.push(e);
              }),
              (ne.prototype.fireOnChange_ = function(e) {
                for (var t = 0; t < this.onChangeCallbacks_.length; t++)
                  this.onChangeCallbacks_[t](e);
              }),
              (ne.prototype.onSave_ = function() {
                if (
                  ((this.selectedKey = this.getSelectedKey_()),
                  this.selectedKey && X.Viewers[this.selectedKey])
                ) {
                  this.fireOnChange_(X.Viewers[this.selectedKey]);
                  try {
                    localStorage.setItem(
                      'WEBVR_CARDBOARD_VIEWER',
                      this.selectedKey
                    );
                  } catch (e) {
                    console.error('Failed to save viewer profile: %s', e);
                  }
                  this.hide();
                } else
                  console.error(
                    'ViewerSelector.onSave_: this should never happen!'
                  );
              }),
              (ne.prototype.createDialog_ = function(e) {
                var t = document.createElement('div');
                t.classList.add('webvr-polyfill-viewer-selector'),
                  (t.style.display = 'none');
                var r = document.createElement('div');
                ((n = r.style).position = 'fixed'),
                  (n.left = 0),
                  (n.top = 0),
                  (n.width = '100%'),
                  (n.height = '100%'),
                  (n.background = 'rgba(0, 0, 0, 0.3)'),
                  r.addEventListener('click', this.hide.bind(this));
                var i = document.createElement('div'),
                  n = i.style;
                for (var s in ((n.boxSizing = 'border-box'),
                (n.position = 'fixed'),
                (n.top = '24px'),
                (n.left = '50%'),
                (n.marginLeft = '-140px'),
                (n.width = '280px'),
                (n.padding = '24px'),
                (n.overflow = 'hidden'),
                (n.background = '#fafafa'),
                (n.fontFamily = "'Roboto', sans-serif"),
                (n.boxShadow = '0px 5px 20px #666'),
                i.appendChild(this.createH1_('Select your viewer')),
                e))
                  i.appendChild(this.createChoice_(s, e[s].label));
                return (
                  i.appendChild(
                    this.createButton_('Save', this.onSave_.bind(this))
                  ),
                  t.appendChild(r),
                  t.appendChild(i),
                  t
                );
              }),
              (ne.prototype.createH1_ = function(e) {
                var t = document.createElement('h1'),
                  r = t.style;
                return (
                  (r.color = 'black'),
                  (r.fontSize = '20px'),
                  (r.fontWeight = 'bold'),
                  (r.marginTop = 0),
                  (r.marginBottom = '24px'),
                  (t.innerHTML = e),
                  t
                );
              }),
              (ne.prototype.createChoice_ = function(e, t) {
                var r = document.createElement('div');
                (r.style.marginTop = '8px'), (r.style.color = 'black');
                var i = document.createElement('input');
                (i.style.fontSize = '30px'),
                  i.setAttribute('id', e),
                  i.setAttribute('type', 'radio'),
                  i.setAttribute('value', e),
                  i.setAttribute('name', 'field');
                var n = document.createElement('label');
                return (
                  (n.style.marginLeft = '4px'),
                  n.setAttribute('for', e),
                  (n.innerHTML = t),
                  r.appendChild(i),
                  r.appendChild(n),
                  r
                );
              }),
              (ne.prototype.createButton_ = function(e, t) {
                var r = document.createElement('button');
                r.innerHTML = e;
                var i = r.style;
                return (
                  (i.float = 'right'),
                  (i.textTransform = 'uppercase'),
                  (i.color = '#1094f7'),
                  (i.fontSize = '14px'),
                  (i.letterSpacing = 0),
                  (i.border = 0),
                  (i.background = 'none'),
                  (i.marginTop = '16px'),
                  r.addEventListener('click', t),
                  r
                );
              }),
              'undefined' != typeof window
                ? window
                : void 0 !== Re || ('undefined' != typeof self && self);
            var se,
              ae =
                (se = (function(e, t) {
                  return e((t = { exports: {} }), t.exports), t.exports;
                })(function(e, t) {
                  !(function(t, r) {
                    e.exports = r();
                  })(0, function() {
                    return (function(e) {
                      var t = {};
                      function r(i) {
                        if (t[i]) return t[i].exports;
                        var n = (t[i] = { i: i, l: !1, exports: {} });
                        return (
                          e[i].call(n.exports, n, n.exports, r),
                          (n.l = !0),
                          n.exports
                        );
                      }
                      return (
                        (r.m = e),
                        (r.c = t),
                        (r.d = function(e, t, i) {
                          r.o(e, t) ||
                            Object.defineProperty(e, t, {
                              configurable: !1,
                              enumerable: !0,
                              get: i,
                            });
                        }),
                        (r.n = function(e) {
                          var t =
                            e && e.__esModule
                              ? function() {
                                  return e.default;
                                }
                              : function() {
                                  return e;
                                };
                          return r.d(t, 'a', t), t;
                        }),
                        (r.o = function(e, t) {
                          return Object.prototype.hasOwnProperty.call(e, t);
                        }),
                        (r.p = ''),
                        r((r.s = 0))
                      );
                    })([
                      function(e, t, r) {
                        var i = (function() {
                            function e(e, t) {
                              for (var r = 0; r < t.length; r++) {
                                var i = t[r];
                                (i.enumerable = i.enumerable || !1),
                                  (i.configurable = !0),
                                  'value' in i && (i.writable = !0),
                                  Object.defineProperty(e, i.key, i);
                              }
                            }
                            return function(t, r, i) {
                              return r && e(t.prototype, r), i && e(t, i), t;
                            };
                          })(),
                          n = r(1),
                          s =
                            'undefined' != typeof navigator &&
                            parseFloat(
                              (
                                '' +
                                (/CPU.*OS ([0-9_]{3,4})[0-9_]{0,1}|(CPU like).*AppleWebKit.*Mobile/i.exec(
                                  navigator.userAgent
                                ) || [0, ''])[1]
                              )
                                .replace('undefined', '3_2')
                                .replace('_', '.')
                                .replace('_', '')
                            ) < 10 &&
                            !window.MSStream,
                          a = (function() {
                            function e() {
                              !(function(e, t) {
                                if (!(e instanceof t))
                                  throw new TypeError(
                                    'Cannot call a class as a function'
                                  );
                              })(this, e),
                                s
                                  ? (this.noSleepTimer = null)
                                  : ((this.noSleepVideo = document.createElement(
                                      'video'
                                    )),
                                    this.noSleepVideo.setAttribute(
                                      'playsinline',
                                      ''
                                    ),
                                    this.noSleepVideo.setAttribute('src', n),
                                    this.noSleepVideo.addEventListener(
                                      'timeupdate',
                                      function(e) {
                                        this.noSleepVideo.currentTime > 0.5 &&
                                          (this.noSleepVideo.currentTime = Math.random());
                                      }.bind(this)
                                    ));
                            }
                            return (
                              i(e, [
                                {
                                  key: 'enable',
                                  value: function() {
                                    s
                                      ? (this.disable(),
                                        (this.noSleepTimer = window.setInterval(
                                          function() {
                                            (window.location.href = '/'),
                                              window.setTimeout(window.stop, 0);
                                          },
                                          15e3
                                        )))
                                      : this.noSleepVideo.play();
                                  },
                                },
                                {
                                  key: 'disable',
                                  value: function() {
                                    s
                                      ? this.noSleepTimer &&
                                        (window.clearInterval(
                                          this.noSleepTimer
                                        ),
                                        (this.noSleepTimer = null))
                                      : this.noSleepVideo.pause();
                                  },
                                },
                              ]),
                              e
                            );
                          })();
                        e.exports = a;
                      },
                      function(e, t, r) {
                        e.exports =
                          'data:video/mp4;base64,AAAAIGZ0eXBtcDQyAAACAGlzb21pc28yYXZjMW1wNDEAAAAIZnJlZQAACKBtZGF0AAAC8wYF///v3EXpvebZSLeWLNgg2SPu73gyNjQgLSBjb3JlIDE0MiByMjQ3OSBkZDc5YTYxIC0gSC4yNjQvTVBFRy00IEFWQyBjb2RlYyAtIENvcHlsZWZ0IDIwMDMtMjAxNCAtIGh0dHA6Ly93d3cudmlkZW9sYW4ub3JnL3gyNjQuaHRtbCAtIG9wdGlvbnM6IGNhYmFjPTEgcmVmPTEgZGVibG9jaz0xOjA6MCBhbmFseXNlPTB4MToweDExMSBtZT1oZXggc3VibWU9MiBwc3k9MSBwc3lfcmQ9MS4wMDowLjAwIG1peGVkX3JlZj0wIG1lX3JhbmdlPTE2IGNocm9tYV9tZT0xIHRyZWxsaXM9MCA4eDhkY3Q9MCBjcW09MCBkZWFkem9uZT0yMSwxMSBmYXN0X3Bza2lwPTEgY2hyb21hX3FwX29mZnNldD0wIHRocmVhZHM9NiBsb29rYWhlYWRfdGhyZWFkcz0xIHNsaWNlZF90aHJlYWRzPTAgbnI9MCBkZWNpbWF0ZT0xIGludGVybGFjZWQ9MCBibHVyYXlfY29tcGF0PTAgY29uc3RyYWluZWRfaW50cmE9MCBiZnJhbWVzPTMgYl9weXJhbWlkPTIgYl9hZGFwdD0xIGJfYmlhcz0wIGRpcmVjdD0xIHdlaWdodGI9MSBvcGVuX2dvcD0wIHdlaWdodHA9MSBrZXlpbnQ9MzAwIGtleWludF9taW49MzAgc2NlbmVjdXQ9NDAgaW50cmFfcmVmcmVzaD0wIHJjX2xvb2thaGVhZD0xMCByYz1jcmYgbWJ0cmVlPTEgY3JmPTIwLjAgcWNvbXA9MC42MCBxcG1pbj0wIHFwbWF4PTY5IHFwc3RlcD00IHZidl9tYXhyYXRlPTIwMDAwIHZidl9idWZzaXplPTI1MDAwIGNyZl9tYXg9MC4wIG5hbF9ocmQ9bm9uZSBmaWxsZXI9MCBpcF9yYXRpbz0xLjQwIGFxPTE6MS4wMACAAAAAOWWIhAA3//p+C7v8tDDSTjf97w55i3SbRPO4ZY+hkjD5hbkAkL3zpJ6h/LR1CAABzgB1kqqzUorlhQAAAAxBmiQYhn/+qZYADLgAAAAJQZ5CQhX/AAj5IQADQGgcIQADQGgcAAAACQGeYUQn/wALKCEAA0BoHAAAAAkBnmNEJ/8ACykhAANAaBwhAANAaBwAAAANQZpoNExDP/6plgAMuSEAA0BoHAAAAAtBnoZFESwr/wAI+SEAA0BoHCEAA0BoHAAAAAkBnqVEJ/8ACykhAANAaBwAAAAJAZ6nRCf/AAsoIQADQGgcIQADQGgcAAAADUGarDRMQz/+qZYADLghAANAaBwAAAALQZ7KRRUsK/8ACPkhAANAaBwAAAAJAZ7pRCf/AAsoIQADQGgcIQADQGgcAAAACQGe60Qn/wALKCEAA0BoHAAAAA1BmvA0TEM//qmWAAy5IQADQGgcIQADQGgcAAAAC0GfDkUVLCv/AAj5IQADQGgcAAAACQGfLUQn/wALKSEAA0BoHCEAA0BoHAAAAAkBny9EJ/8ACyghAANAaBwAAAANQZs0NExDP/6plgAMuCEAA0BoHAAAAAtBn1JFFSwr/wAI+SEAA0BoHCEAA0BoHAAAAAkBn3FEJ/8ACyghAANAaBwAAAAJAZ9zRCf/AAsoIQADQGgcIQADQGgcAAAADUGbeDRMQz/+qZYADLkhAANAaBwAAAALQZ+WRRUsK/8ACPghAANAaBwhAANAaBwAAAAJAZ+1RCf/AAspIQADQGgcAAAACQGft0Qn/wALKSEAA0BoHCEAA0BoHAAAAA1Bm7w0TEM//qmWAAy4IQADQGgcAAAAC0Gf2kUVLCv/AAj5IQADQGgcAAAACQGf+UQn/wALKCEAA0BoHCEAA0BoHAAAAAkBn/tEJ/8ACykhAANAaBwAAAANQZvgNExDP/6plgAMuSEAA0BoHCEAA0BoHAAAAAtBnh5FFSwr/wAI+CEAA0BoHAAAAAkBnj1EJ/8ACyghAANAaBwhAANAaBwAAAAJAZ4/RCf/AAspIQADQGgcAAAADUGaJDRMQz/+qZYADLghAANAaBwAAAALQZ5CRRUsK/8ACPkhAANAaBwhAANAaBwAAAAJAZ5hRCf/AAsoIQADQGgcAAAACQGeY0Qn/wALKSEAA0BoHCEAA0BoHAAAAA1Bmmg0TEM//qmWAAy5IQADQGgcAAAAC0GehkUVLCv/AAj5IQADQGgcIQADQGgcAAAACQGepUQn/wALKSEAA0BoHAAAAAkBnqdEJ/8ACyghAANAaBwAAAANQZqsNExDP/6plgAMuCEAA0BoHCEAA0BoHAAAAAtBnspFFSwr/wAI+SEAA0BoHAAAAAkBnulEJ/8ACyghAANAaBwhAANAaBwAAAAJAZ7rRCf/AAsoIQADQGgcAAAADUGa8DRMQz/+qZYADLkhAANAaBwhAANAaBwAAAALQZ8ORRUsK/8ACPkhAANAaBwAAAAJAZ8tRCf/AAspIQADQGgcIQADQGgcAAAACQGfL0Qn/wALKCEAA0BoHAAAAA1BmzQ0TEM//qmWAAy4IQADQGgcAAAAC0GfUkUVLCv/AAj5IQADQGgcIQADQGgcAAAACQGfcUQn/wALKCEAA0BoHAAAAAkBn3NEJ/8ACyghAANAaBwhAANAaBwAAAANQZt4NExC//6plgAMuSEAA0BoHAAAAAtBn5ZFFSwr/wAI+CEAA0BoHCEAA0BoHAAAAAkBn7VEJ/8ACykhAANAaBwAAAAJAZ+3RCf/AAspIQADQGgcAAAADUGbuzRMQn/+nhAAYsAhAANAaBwhAANAaBwAAAAJQZ/aQhP/AAspIQADQGgcAAAACQGf+UQn/wALKCEAA0BoHCEAA0BoHCEAA0BoHCEAA0BoHCEAA0BoHCEAA0BoHAAACiFtb292AAAAbG12aGQAAAAA1YCCX9WAgl8AAAPoAAAH/AABAAABAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAAGGlvZHMAAAAAEICAgAcAT////v7/AAAF+XRyYWsAAABcdGtoZAAAAAPVgIJf1YCCXwAAAAEAAAAAAAAH0AAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAygAAAMoAAAAAACRlZHRzAAAAHGVsc3QAAAAAAAAAAQAAB9AAABdwAAEAAAAABXFtZGlhAAAAIG1kaGQAAAAA1YCCX9WAgl8AAV+QAAK/IFXEAAAAAAAtaGRscgAAAAAAAAAAdmlkZQAAAAAAAAAAAAAAAFZpZGVvSGFuZGxlcgAAAAUcbWluZgAAABR2bWhkAAAAAQAAAAAAAAAAAAAAJGRpbmYAAAAcZHJlZgAAAAAAAAABAAAADHVybCAAAAABAAAE3HN0YmwAAACYc3RzZAAAAAAAAAABAAAAiGF2YzEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAygDKAEgAAABIAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAY//8AAAAyYXZjQwFNQCj/4QAbZ01AKOyho3ySTUBAQFAAAAMAEAAr8gDxgxlgAQAEaO+G8gAAABhzdHRzAAAAAAAAAAEAAAA8AAALuAAAABRzdHNzAAAAAAAAAAEAAAABAAAB8GN0dHMAAAAAAAAAPAAAAAEAABdwAAAAAQAAOpgAAAABAAAXcAAAAAEAAAAAAAAAAQAAC7gAAAABAAA6mAAAAAEAABdwAAAAAQAAAAAAAAABAAALuAAAAAEAADqYAAAAAQAAF3AAAAABAAAAAAAAAAEAAAu4AAAAAQAAOpgAAAABAAAXcAAAAAEAAAAAAAAAAQAAC7gAAAABAAA6mAAAAAEAABdwAAAAAQAAAAAAAAABAAALuAAAAAEAADqYAAAAAQAAF3AAAAABAAAAAAAAAAEAAAu4AAAAAQAAOpgAAAABAAAXcAAAAAEAAAAAAAAAAQAAC7gAAAABAAA6mAAAAAEAABdwAAAAAQAAAAAAAAABAAALuAAAAAEAADqYAAAAAQAAF3AAAAABAAAAAAAAAAEAAAu4AAAAAQAAOpgAAAABAAAXcAAAAAEAAAAAAAAAAQAAC7gAAAABAAA6mAAAAAEAABdwAAAAAQAAAAAAAAABAAALuAAAAAEAADqYAAAAAQAAF3AAAAABAAAAAAAAAAEAAAu4AAAAAQAAOpgAAAABAAAXcAAAAAEAAAAAAAAAAQAAC7gAAAABAAA6mAAAAAEAABdwAAAAAQAAAAAAAAABAAALuAAAAAEAAC7gAAAAAQAAF3AAAAABAAAAAAAAABxzdHNjAAAAAAAAAAEAAAABAAAAAQAAAAEAAAEEc3RzegAAAAAAAAAAAAAAPAAAAzQAAAAQAAAADQAAAA0AAAANAAAAEQAAAA8AAAANAAAADQAAABEAAAAPAAAADQAAAA0AAAARAAAADwAAAA0AAAANAAAAEQAAAA8AAAANAAAADQAAABEAAAAPAAAADQAAAA0AAAARAAAADwAAAA0AAAANAAAAEQAAAA8AAAANAAAADQAAABEAAAAPAAAADQAAAA0AAAARAAAADwAAAA0AAAANAAAAEQAAAA8AAAANAAAADQAAABEAAAAPAAAADQAAAA0AAAARAAAADwAAAA0AAAANAAAAEQAAAA8AAAANAAAADQAAABEAAAANAAAADQAAAQBzdGNvAAAAAAAAADwAAAAwAAADZAAAA3QAAAONAAADoAAAA7kAAAPQAAAD6wAAA/4AAAQXAAAELgAABEMAAARcAAAEbwAABIwAAAShAAAEugAABM0AAATkAAAE/wAABRIAAAUrAAAFQgAABV0AAAVwAAAFiQAABaAAAAW1AAAFzgAABeEAAAX+AAAGEwAABiwAAAY/AAAGVgAABnEAAAaEAAAGnQAABrQAAAbPAAAG4gAABvUAAAcSAAAHJwAAB0AAAAdTAAAHcAAAB4UAAAeeAAAHsQAAB8gAAAfjAAAH9gAACA8AAAgmAAAIQQAACFQAAAhnAAAIhAAACJcAAAMsdHJhawAAAFx0a2hkAAAAA9WAgl/VgIJfAAAAAgAAAAAAAAf8AAAAAAAAAAAAAAABAQAAAAABAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAACsm1kaWEAAAAgbWRoZAAAAADVgIJf1YCCXwAArEQAAWAAVcQAAAAAACdoZGxyAAAAAAAAAABzb3VuAAAAAAAAAAAAAAAAU3RlcmVvAAAAAmNtaW5mAAAAEHNtaGQAAAAAAAAAAAAAACRkaW5mAAAAHGRyZWYAAAAAAAAAAQAAAAx1cmwgAAAAAQAAAidzdGJsAAAAZ3N0c2QAAAAAAAAAAQAAAFdtcDRhAAAAAAAAAAEAAAAAAAAAAAACABAAAAAArEQAAAAAADNlc2RzAAAAAAOAgIAiAAIABICAgBRAFQAAAAADDUAAAAAABYCAgAISEAaAgIABAgAAABhzdHRzAAAAAAAAAAEAAABYAAAEAAAAABxzdHNjAAAAAAAAAAEAAAABAAAAAQAAAAEAAAAUc3RzegAAAAAAAAAGAAAAWAAAAXBzdGNvAAAAAAAAAFgAAAOBAAADhwAAA5oAAAOtAAADswAAA8oAAAPfAAAD5QAAA/gAAAQLAAAEEQAABCgAAAQ9AAAEUAAABFYAAARpAAAEgAAABIYAAASbAAAErgAABLQAAATHAAAE3gAABPMAAAT5AAAFDAAABR8AAAUlAAAFPAAABVEAAAVXAAAFagAABX0AAAWDAAAFmgAABa8AAAXCAAAFyAAABdsAAAXyAAAF+AAABg0AAAYgAAAGJgAABjkAAAZQAAAGZQAABmsAAAZ+AAAGkQAABpcAAAauAAAGwwAABskAAAbcAAAG7wAABwYAAAcMAAAHIQAABzQAAAc6AAAHTQAAB2QAAAdqAAAHfwAAB5IAAAeYAAAHqwAAB8IAAAfXAAAH3QAAB/AAAAgDAAAICQAACCAAAAg1AAAIOwAACE4AAAhhAAAIeAAACH4AAAiRAAAIpAAACKoAAAiwAAAItgAACLwAAAjCAAAAFnVkdGEAAAAObmFtZVN0ZXJlbwAAAHB1ZHRhAAAAaG1ldGEAAAAAAAAAIWhkbHIAAAAAAAAAAG1kaXJhcHBsAAAAAAAAAAAAAAAAO2lsc3QAAAAzqXRvbwAAACtkYXRhAAAAAQAAAABIYW5kQnJha2UgMC4xMC4yIDIwMTUwNjExMDA=';
                      },
                    ]);
                  });
                })) &&
                se.__esModule &&
                Object.prototype.hasOwnProperty.call(se, 'default')
                  ? se.default
                  : se,
              oe = 1e3,
              le = [0, 0, 0.5, 1],
              he = [0.5, 0, 0.5, 1],
              ue = window.requestAnimationFrame,
              ce = window.cancelAnimationFrame;
            function de(e) {
              Object.defineProperties(this, {
                hasPosition: {
                  writable: !1,
                  enumerable: !0,
                  value: e.hasPosition,
                },
                hasExternalDisplay: {
                  writable: !1,
                  enumerable: !0,
                  value: e.hasExternalDisplay,
                },
                canPresent: {
                  writable: !1,
                  enumerable: !0,
                  value: e.canPresent,
                },
                maxLayers: { writable: !1, enumerable: !0, value: e.maxLayers },
                hasOrientation: {
                  enumerable: !0,
                  get: function() {
                    return (
                      M(
                        'VRDisplayCapabilities.prototype.hasOrientation',
                        'VRDisplay.prototype.getFrameData'
                      ),
                      e.hasOrientation
                    );
                  },
                },
              });
            }
            function Ae(e) {
              var t = !('wakelock' in (e = e || {})) || e.wakelock;
              (this.isPolyfilled = !0),
                (this.displayId = oe++),
                (this.displayName = ''),
                (this.depthNear = 0.01),
                (this.depthFar = 1e4),
                (this.isPresenting = !1),
                Object.defineProperty(this, 'isConnected', {
                  get: function() {
                    return (
                      M(
                        'VRDisplay.prototype.isConnected',
                        'VRDisplayCapabilities.prototype.hasExternalDisplay'
                      ),
                      !1
                    );
                  },
                }),
                (this.capabilities = new de({
                  hasPosition: !1,
                  hasOrientation: !1,
                  hasExternalDisplay: !1,
                  canPresent: !1,
                  maxLayers: 1,
                })),
                (this.stageParameters = null),
                (this.waitingForPresent_ = !1),
                (this.layer_ = null),
                (this.originalParent_ = null),
                (this.fullscreenElement_ = null),
                (this.fullscreenWrapper_ = null),
                (this.fullscreenElementCachedStyle_ = null),
                (this.fullscreenEventTarget_ = null),
                (this.fullscreenChangeHandler_ = null),
                (this.fullscreenErrorHandler_ = null),
                t && _() && (this.wakelock_ = new ae());
            }
            (Ae.prototype.getFrameData = function(e) {
              return b(e, this._getPose(), this);
            }),
              (Ae.prototype.getPose = function() {
                return (
                  M(
                    'VRDisplay.prototype.getPose',
                    'VRDisplay.prototype.getFrameData'
                  ),
                  this._getPose()
                );
              }),
              (Ae.prototype.resetPose = function() {
                return M('VRDisplay.prototype.resetPose'), this._resetPose();
              }),
              (Ae.prototype.getImmediatePose = function() {
                return (
                  M(
                    'VRDisplay.prototype.getImmediatePose',
                    'VRDisplay.prototype.getFrameData'
                  ),
                  this._getPose()
                );
              }),
              (Ae.prototype.requestAnimationFrame = function(e) {
                return ue(e);
              }),
              (Ae.prototype.cancelAnimationFrame = function(e) {
                return ce(e);
              }),
              (Ae.prototype.wrapForFullscreen = function(e) {
                if (a()) return e;
                if (!this.fullscreenWrapper_) {
                  this.fullscreenWrapper_ = document.createElement('div');
                  var t = [
                    'height: ' +
                      Math.min(screen.height, screen.width) +
                      'px !important',
                    'top: 0 !important',
                    'left: 0 !important',
                    'right: 0 !important',
                    'border: 0',
                    'margin: 0',
                    'padding: 0',
                    'z-index: 999999 !important',
                    'position: fixed',
                  ];
                  this.fullscreenWrapper_.setAttribute(
                    'style',
                    t.join('; ') + ';'
                  ),
                    this.fullscreenWrapper_.classList.add(
                      'webvr-polyfill-fullscreen-wrapper'
                    );
                }
                if (this.fullscreenElement_ == e)
                  return this.fullscreenWrapper_;
                if (
                  (this.fullscreenElement_ &&
                    (this.originalParent_
                      ? this.originalParent_.appendChild(
                          this.fullscreenElement_
                        )
                      : this.fullscreenElement_.parentElement.removeChild(
                          this.fullscreenElement_
                        )),
                  (this.fullscreenElement_ = e),
                  (this.originalParent_ = e.parentElement),
                  this.originalParent_ || document.body.appendChild(e),
                  !this.fullscreenWrapper_.parentElement)
                ) {
                  var r = this.fullscreenElement_.parentElement;
                  r.insertBefore(
                    this.fullscreenWrapper_,
                    this.fullscreenElement_
                  ),
                    r.removeChild(this.fullscreenElement_);
                }
                this.fullscreenWrapper_.insertBefore(
                  this.fullscreenElement_,
                  this.fullscreenWrapper_.firstChild
                ),
                  (this.fullscreenElementCachedStyle_ = this.fullscreenElement_.getAttribute(
                    'style'
                  ));
                var i = this;
                return (
                  (function() {
                    if (i.fullscreenElement_) {
                      var e = [
                        'position: absolute',
                        'top: 0',
                        'left: 0',
                        'width: ' +
                          Math.max(screen.width, screen.height) +
                          'px',
                        'height: ' +
                          Math.min(screen.height, screen.width) +
                          'px',
                        'border: 0',
                        'margin: 0',
                        'padding: 0',
                      ];
                      i.fullscreenElement_.setAttribute(
                        'style',
                        e.join('; ') + ';'
                      );
                    }
                  })(),
                  this.fullscreenWrapper_
                );
              }),
              (Ae.prototype.removeFullscreenWrapper = function() {
                if (this.fullscreenElement_) {
                  var e = this.fullscreenElement_;
                  this.fullscreenElementCachedStyle_
                    ? e.setAttribute(
                        'style',
                        this.fullscreenElementCachedStyle_
                      )
                    : e.removeAttribute('style'),
                    (this.fullscreenElement_ = null),
                    (this.fullscreenElementCachedStyle_ = null);
                  var t = this.fullscreenWrapper_.parentElement;
                  return (
                    this.fullscreenWrapper_.removeChild(e),
                    this.originalParent_ === t
                      ? t.insertBefore(e, this.fullscreenWrapper_)
                      : this.originalParent_ &&
                        this.originalParent_.appendChild(e),
                    t.removeChild(this.fullscreenWrapper_),
                    e
                  );
                }
              }),
              (Ae.prototype.requestPresent = function(e) {
                var t = this.isPresenting,
                  r = this;
                return (
                  e instanceof Array ||
                    (M(
                      'VRDisplay.prototype.requestPresent with non-array argument',
                      'an array of VRLayers as the first argument'
                    ),
                    (e = [e])),
                  new Promise(function(i, n) {
                    if (r.capabilities.canPresent)
                      if (0 == e.length || e.length > r.capabilities.maxLayers)
                        n(new Error('Invalid number of layers.'));
                      else {
                        var s = e[0];
                        if (s.source) {
                          var l = s.leftBounds || le,
                            h = s.rightBounds || he;
                          if (t) {
                            var u = r.layer_;
                            u.source !== s.source && (u.source = s.source);
                            for (var c = 0; c < 4; c++)
                              (u.leftBounds[c] = l[c]),
                                (u.rightBounds[c] = h[c]);
                            return (
                              r.wrapForFullscreen(r.layer_.source),
                              r.updatePresent_(),
                              void i()
                            );
                          }
                          if (
                            ((r.layer_ = {
                              predistorted: s.predistorted,
                              source: s.source,
                              leftBounds: l.slice(0),
                              rightBounds: h.slice(0),
                            }),
                            (r.waitingForPresent_ = !1),
                            r.layer_ && r.layer_.source)
                          ) {
                            var d = r.wrapForFullscreen(r.layer_.source);
                            r.addFullscreenListeners_(
                              d,
                              function() {
                                var e =
                                  document.fullscreenElement ||
                                  document.webkitFullscreenElement ||
                                  document.mozFullScreenElement ||
                                  document.msFullscreenElement;
                                (r.isPresenting = d === e),
                                  r.isPresenting
                                    ? (screen.orientation &&
                                        screen.orientation.lock &&
                                        screen.orientation
                                          .lock('landscape-primary')
                                          .catch(function(e) {
                                            console.error(
                                              'screen.orientation.lock() failed due to',
                                              e.message
                                            );
                                          }),
                                      (r.waitingForPresent_ = !1),
                                      r.beginPresent_(),
                                      i())
                                    : (screen.orientation &&
                                        screen.orientation.unlock &&
                                        screen.orientation.unlock(),
                                      r.removeFullscreenWrapper(),
                                      r.disableWakeLock(),
                                      r.endPresent_(),
                                      r.removeFullscreenListeners_()),
                                  r.fireVRDisplayPresentChange_();
                              },
                              function() {
                                r.waitingForPresent_ &&
                                  (r.removeFullscreenWrapper(),
                                  r.removeFullscreenListeners_(),
                                  r.disableWakeLock(),
                                  (r.waitingForPresent_ = !1),
                                  (r.isPresenting = !1),
                                  n(new Error('Unable to present.')));
                              }
                            ),
                              (function(e) {
                                if (o()) return !1;
                                if (e.requestFullscreen) e.requestFullscreen();
                                else if (e.webkitRequestFullscreen)
                                  e.webkitRequestFullscreen();
                                else if (e.mozRequestFullScreen)
                                  e.mozRequestFullScreen();
                                else {
                                  if (!e.msRequestFullscreen) return !1;
                                  e.msRequestFullscreen();
                                }
                                return !0;
                              })(d)
                                ? (r.enableWakeLock(),
                                  (r.waitingForPresent_ = !0))
                                : (a() || o()) &&
                                  (r.enableWakeLock(),
                                  (r.isPresenting = !0),
                                  r.beginPresent_(),
                                  r.fireVRDisplayPresentChange_(),
                                  i());
                          }
                          r.waitingForPresent_ ||
                            a() ||
                            (p(), n(new Error('Unable to present.')));
                        } else i();
                      }
                    else
                      n(new Error('VRDisplay is not capable of presenting.'));
                  })
                );
              }),
              (Ae.prototype.exitPresent = function() {
                var e = this.isPresenting,
                  t = this;
                return (
                  (this.isPresenting = !1),
                  (this.layer_ = null),
                  this.disableWakeLock(),
                  new Promise(function(r, i) {
                    e
                      ? (!p() &&
                          a() &&
                          (t.endPresent_(), t.fireVRDisplayPresentChange_()),
                        o() &&
                          (t.removeFullscreenWrapper(),
                          t.removeFullscreenListeners_(),
                          t.endPresent_(),
                          t.fireVRDisplayPresentChange_()),
                        r())
                      : i(new Error('Was not presenting to VRDisplay.'));
                  })
                );
              }),
              (Ae.prototype.getLayers = function() {
                return this.layer_ ? [this.layer_] : [];
              }),
              (Ae.prototype.fireVRDisplayPresentChange_ = function() {
                var e = new CustomEvent('vrdisplaypresentchange', {
                  detail: { display: this },
                });
                window.dispatchEvent(e);
              }),
              (Ae.prototype.fireVRDisplayConnect_ = function() {
                var e = new CustomEvent('vrdisplayconnect', {
                  detail: { display: this },
                });
                window.dispatchEvent(e);
              }),
              (Ae.prototype.addFullscreenListeners_ = function(e, t, r) {
                this.removeFullscreenListeners_(),
                  (this.fullscreenEventTarget_ = e),
                  (this.fullscreenChangeHandler_ = t),
                  (this.fullscreenErrorHandler_ = r),
                  t &&
                    (document.fullscreenEnabled
                      ? e.addEventListener('fullscreenchange', t, !1)
                      : document.webkitFullscreenEnabled
                      ? e.addEventListener('webkitfullscreenchange', t, !1)
                      : document.mozFullScreenEnabled
                      ? document.addEventListener('mozfullscreenchange', t, !1)
                      : document.msFullscreenEnabled &&
                        e.addEventListener('msfullscreenchange', t, !1)),
                  r &&
                    (document.fullscreenEnabled
                      ? e.addEventListener('fullscreenerror', r, !1)
                      : document.webkitFullscreenEnabled
                      ? e.addEventListener('webkitfullscreenerror', r, !1)
                      : document.mozFullScreenEnabled
                      ? document.addEventListener('mozfullscreenerror', r, !1)
                      : document.msFullscreenEnabled &&
                        e.addEventListener('msfullscreenerror', r, !1));
              }),
              (Ae.prototype.removeFullscreenListeners_ = function() {
                if (this.fullscreenEventTarget_) {
                  var e = this.fullscreenEventTarget_;
                  if (this.fullscreenChangeHandler_) {
                    var t = this.fullscreenChangeHandler_;
                    e.removeEventListener('fullscreenchange', t, !1),
                      e.removeEventListener('webkitfullscreenchange', t, !1),
                      document.removeEventListener(
                        'mozfullscreenchange',
                        t,
                        !1
                      ),
                      e.removeEventListener('msfullscreenchange', t, !1);
                  }
                  if (this.fullscreenErrorHandler_) {
                    var r = this.fullscreenErrorHandler_;
                    e.removeEventListener('fullscreenerror', r, !1),
                      e.removeEventListener('webkitfullscreenerror', r, !1),
                      document.removeEventListener('mozfullscreenerror', r, !1),
                      e.removeEventListener('msfullscreenerror', r, !1);
                  }
                  (this.fullscreenEventTarget_ = null),
                    (this.fullscreenChangeHandler_ = null),
                    (this.fullscreenErrorHandler_ = null);
                }
              }),
              (Ae.prototype.enableWakeLock = function() {
                this.wakelock_ && this.wakelock_.enable();
              }),
              (Ae.prototype.disableWakeLock = function() {
                this.wakelock_ && this.wakelock_.disable();
              }),
              (Ae.prototype.beginPresent_ = function() {}),
              (Ae.prototype.endPresent_ = function() {}),
              (Ae.prototype.submitFrame = function(e) {}),
              (Ae.prototype.getEyeParameters = function(e) {
                return null;
              });
            var fe = {
                ADDITIONAL_VIEWERS: [],
                DEFAULT_VIEWER: '',
                MOBILE_WAKE_LOCK: !0,
                DEBUG: !1,
                DPDB_URL: 'https://dpdb.webvr.rocks/dpdb.json',
                K_FILTER: 0.98,
                PREDICTION_TIME_S: 0.04,
                CARDBOARD_UI_DISABLED: !1,
                ROTATE_INSTRUCTIONS_DISABLED: !1,
                YAW_ONLY: !1,
                BUFFER_SCALE: 0.5,
                DIRTY_SUBMIT_FRAME_BINDINGS: !1,
              },
              pe = 'left',
              me = 'right';
            function ge(e) {
              var t = v({}, fe);
              (e = v(t, e || {})),
                Ae.call(this, { wakelock: e.MOBILE_WAKE_LOCK }),
                (this.config = e),
                (this.displayName = 'Cardboard VRDisplay'),
                (this.capabilities = new de({
                  hasPosition: !1,
                  hasOrientation: !0,
                  hasExternalDisplay: !1,
                  canPresent: !0,
                  maxLayers: 1,
                })),
                (this.stageParameters = null),
                (this.bufferScale_ = this.config.BUFFER_SCALE),
                (this.poseSensor_ = new re(this.config)),
                (this.distorter_ = null),
                (this.cardboardUI_ = null),
                (this.dpdb_ = new j(
                  this.config.DPDB_URL,
                  this.onDeviceParamsUpdated_.bind(this)
                )),
                (this.deviceInfo_ = new X(
                  this.dpdb_.getDeviceParams(),
                  e.ADDITIONAL_VIEWERS
                )),
                (this.viewerSelector_ = new ne(e.DEFAULT_VIEWER)),
                this.viewerSelector_.onChange(this.onViewerChanged_.bind(this)),
                this.deviceInfo_.setViewer(
                  this.viewerSelector_.getCurrentViewer()
                ),
                this.config.ROTATE_INSTRUCTIONS_DISABLED ||
                  (this.rotateInstructions_ = new ie()),
                a() &&
                  window.addEventListener('resize', this.onResize_.bind(this));
            }
            return (
              (ge.prototype = Object.create(Ae.prototype)),
              (ge.prototype._getPose = function() {
                return {
                  position: null,
                  orientation: this.poseSensor_.getOrientation(),
                  linearVelocity: null,
                  linearAcceleration: null,
                  angularVelocity: null,
                  angularAcceleration: null,
                };
              }),
              (ge.prototype._resetPose = function() {
                this.poseSensor_.resetPose && this.poseSensor_.resetPose();
              }),
              (ge.prototype._getFieldOfView = function(e) {
                var t;
                if (e == pe) t = this.deviceInfo_.getFieldOfViewLeftEye();
                else {
                  if (e != me)
                    return console.error('Invalid eye provided: %s', e), null;
                  t = this.deviceInfo_.getFieldOfViewRightEye();
                }
                return t;
              }),
              (ge.prototype._getEyeOffset = function(e) {
                var t;
                if (e == pe)
                  t = [0.5 * -this.deviceInfo_.viewer.interLensDistance, 0, 0];
                else {
                  if (e != me)
                    return console.error('Invalid eye provided: %s', e), null;
                  t = [0.5 * this.deviceInfo_.viewer.interLensDistance, 0, 0];
                }
                return t;
              }),
              (ge.prototype.getEyeParameters = function(e) {
                var t = this._getEyeOffset(e),
                  r = this._getFieldOfView(e),
                  i = {
                    offset: t,
                    renderWidth:
                      0.5 * this.deviceInfo_.device.width * this.bufferScale_,
                    renderHeight:
                      this.deviceInfo_.device.height * this.bufferScale_,
                  };
                return (
                  Object.defineProperty(i, 'fieldOfView', {
                    enumerable: !0,
                    get: function() {
                      return (
                        M('VRFieldOfView', "VRFrameData's projection matrices"),
                        r
                      );
                    },
                  }),
                  i
                );
              }),
              (ge.prototype.onDeviceParamsUpdated_ = function(e) {
                this.config.DEBUG &&
                  console.log('DPDB reported that device params were updated.'),
                  this.deviceInfo_.updateDeviceParams(e),
                  this.distorter_ &&
                    this.distorter_.updateDeviceInfo(this.deviceInfo_);
              }),
              (ge.prototype.updateBounds_ = function() {
                this.layer_ &&
                  this.distorter_ &&
                  (this.layer_.leftBounds || this.layer_.rightBounds) &&
                  this.distorter_.setTextureBounds(
                    this.layer_.leftBounds,
                    this.layer_.rightBounds
                  );
              }),
              (ge.prototype.beginPresent_ = function() {
                var e = this.layer_.source.getContext('webgl');
                e || (e = this.layer_.source.getContext('experimental-webgl')),
                  e || (e = this.layer_.source.getContext('webgl2')),
                  e &&
                    (this.layer_.predistorted
                      ? this.config.CARDBOARD_UI_DISABLED ||
                        ((e.canvas.width = A() * this.bufferScale_),
                        (e.canvas.height = f() * this.bufferScale_),
                        (this.cardboardUI_ = new I(e)))
                      : (this.config.CARDBOARD_UI_DISABLED ||
                          (this.cardboardUI_ = new I(e)),
                        (this.distorter_ = new T(
                          e,
                          this.cardboardUI_,
                          this.config.BUFFER_SCALE,
                          this.config.DIRTY_SUBMIT_FRAME_BINDINGS
                        )),
                        this.distorter_.updateDeviceInfo(this.deviceInfo_)),
                    this.cardboardUI_ &&
                      this.cardboardUI_.listen(
                        function(e) {
                          this.viewerSelector_.show(
                            this.layer_.source.parentElement
                          ),
                            e.stopPropagation(),
                            e.preventDefault();
                        }.bind(this),
                        function(e) {
                          this.exitPresent(),
                            e.stopPropagation(),
                            e.preventDefault();
                        }.bind(this)
                      ),
                    this.rotateInstructions_ &&
                      (d() && _()
                        ? this.rotateInstructions_.showTemporarily(
                            3e3,
                            this.layer_.source.parentElement
                          )
                        : this.rotateInstructions_.update()),
                    (this.orientationHandler = this.onOrientationChange_.bind(
                      this
                    )),
                    window.addEventListener(
                      'orientationchange',
                      this.orientationHandler
                    ),
                    (this.vrdisplaypresentchangeHandler = this.updateBounds_.bind(
                      this
                    )),
                    window.addEventListener(
                      'vrdisplaypresentchange',
                      this.vrdisplaypresentchangeHandler
                    ),
                    this.fireVRDisplayDeviceParamsChange_());
              }),
              (ge.prototype.endPresent_ = function() {
                this.distorter_ &&
                  (this.distorter_.destroy(), (this.distorter_ = null)),
                  this.cardboardUI_ &&
                    (this.cardboardUI_.destroy(), (this.cardboardUI_ = null)),
                  this.rotateInstructions_ && this.rotateInstructions_.hide(),
                  this.viewerSelector_.hide(),
                  window.removeEventListener(
                    'orientationchange',
                    this.orientationHandler
                  ),
                  window.removeEventListener(
                    'vrdisplaypresentchange',
                    this.vrdisplaypresentchangeHandler
                  );
              }),
              (ge.prototype.updatePresent_ = function() {
                this.endPresent_(), this.beginPresent_();
              }),
              (ge.prototype.submitFrame = function(e) {
                if (this.distorter_)
                  this.updateBounds_(), this.distorter_.submitFrame();
                else if (this.cardboardUI_ && this.layer_) {
                  var t = this.layer_.source.getContext('webgl').canvas;
                  (t.width == this.lastWidth && t.height == this.lastHeight) ||
                    this.cardboardUI_.onResize(),
                    (this.lastWidth = t.width),
                    (this.lastHeight = t.height),
                    this.cardboardUI_.render();
                }
              }),
              (ge.prototype.onOrientationChange_ = function(e) {
                this.viewerSelector_.hide(),
                  this.rotateInstructions_ && this.rotateInstructions_.update(),
                  this.onResize_();
              }),
              (ge.prototype.onResize_ = function(e) {
                if (this.layer_) {
                  var t = this.layer_.source.getContext('webgl');
                  t.canvas.setAttribute(
                    'style',
                    [
                      'position: absolute',
                      'top: 0',
                      'left: 0',
                      'width: 100vw',
                      'height: 100vh',
                      'border: 0',
                      'margin: 0',
                      'padding: 0px',
                      'box-sizing: content-box',
                    ].join('; ') + ';'
                  ),
                    w(t.canvas);
                }
              }),
              (ge.prototype.onViewerChanged_ = function(e) {
                this.deviceInfo_.setViewer(e),
                  this.distorter_ &&
                    this.distorter_.updateDeviceInfo(this.deviceInfo_),
                  this.fireVRDisplayDeviceParamsChange_();
              }),
              (ge.prototype.fireVRDisplayDeviceParamsChange_ = function() {
                var e = new CustomEvent('vrdisplaydeviceparamschange', {
                  detail: { vrdisplay: this, deviceInfo: this.deviceInfo_ },
                });
                window.dispatchEvent(e);
              }),
              (ge.VRFrameData = function() {
                (this.leftProjectionMatrix = new Float32Array(16)),
                  (this.leftViewMatrix = new Float32Array(16)),
                  (this.rightProjectionMatrix = new Float32Array(16)),
                  (this.rightViewMatrix = new Float32Array(16)),
                  (this.pose = null);
              }),
              (ge.VRDisplay = Ae),
              ge
            );
          })();
        }),
        Ce =
          (Te = Fe) &&
          Te.__esModule &&
          Object.prototype.hasOwnProperty.call(Te, 'default')
            ? Te.default
            : Te;
      class Pe extends n {
        constructor(e) {
          super(),
            (this.global = e),
            (this.onWindowResize = this.onWindowResize.bind(this)),
            this.global.window.addEventListener('resize', this.onWindowResize),
            (this.environmentBlendMode = 'opaque');
        }
        onBaseLayerSet(e, t) {
          throw new Error('Not implemented');
        }
        isSessionSupported(e) {
          throw new Error('Not implemented');
        }
        isFeatureSupported(e) {
          throw new Error('Not implemented');
        }
        async requestSession(e, t) {
          throw new Error('Not implemented');
        }
        requestAnimationFrame(e) {
          throw new Error('Not implemented');
        }
        onFrameStart(e) {
          throw new Error('Not implemented');
        }
        onFrameEnd(e) {
          throw new Error('Not implemented');
        }
        doesSessionSupportReferenceSpace(e, t) {
          throw new Error('Not implemented');
        }
        requestStageBounds() {
          throw new Error('Not implemented');
        }
        async requestFrameOfReferenceTransform(e, t) {}
        cancelAnimationFrame(e) {
          throw new Error('Not implemented');
        }
        endSession(e) {
          throw new Error('Not implemented');
        }
        getViewport(e, t, r, i) {
          throw new Error('Not implemented');
        }
        getProjectionMatrix(e) {
          throw new Error('Not implemented');
        }
        getBasePoseMatrix() {
          throw new Error('Not implemented');
        }
        getBaseViewMatrix(e) {
          throw new Error('Not implemented');
        }
        getInputSources() {
          throw new Error('Not implemented');
        }
        getInputPose(e, t, r) {
          throw new Error('Not implemented');
        }
        onWindowResize() {
          this.onWindowResize();
        }
      }
      let Ie = {
          mapping: 'xr-standard',
          profiles: ['oculus-go', 'generic-trigger-touchpad'],
          buttons: { length: 3, 0: 1, 1: null, 2: 0 },
          gripTransform: { orientation: [0.11 * Math.PI, 0, 0, 1] },
        },
        Be = {
          mapping: 'xr-standard',
          displayProfiles: {
            'Oculus Quest': [
              'oculus-touch-v2',
              'oculus-touch',
              'generic-trigger-squeeze-thumbstick',
            ],
          },
          profiles: ['oculus-touch', 'generic-trigger-squeeze-thumbstick'],
          axes: { length: 4, 0: null, 1: null, 2: 0, 3: 1 },
          buttons: {
            length: 7,
            0: 1,
            1: 2,
            2: null,
            3: 0,
            4: 3,
            5: 4,
            6: null,
          },
          gripTransform: {
            position: [0, -0.02, 0.04, 1],
            orientation: [0.11 * Math.PI, 0, 0, 1],
          },
        },
        De = {
          mapping: 'xr-standard',
          profiles: ['htc-vive', 'generic-trigger-squeeze-touchpad'],
          displayProfiles: {
            'HTC Vive': ['htc-vive', 'generic-trigger-squeeze-touchpad'],
            'HTC Vive DVT': ['htc-vive', 'generic-trigger-squeeze-touchpad'],
            'Valve Index': [
              'valve-index',
              'generic-trigger-squeeze-touchpad-thumbstick',
            ],
          },
          buttons: { length: 3, 0: 1, 1: 2, 2: 0 },
          gripTransform: { position: [0, 0, 0.05, 1] },
          targetRayTransform: { orientation: [-0.08 * Math.PI, 0, 0, 1] },
          userAgentOverrides: { Firefox: { axes: { invert: [1, 3] } } },
        },
        Le = {
          mapping: 'xr-standard',
          profiles: ['samsung-gearvr', 'generic-trigger-touchpad'],
          buttons: { length: 3, 0: 1, 1: null, 2: 0 },
          gripTransform: { orientation: [0.11 * Math.PI, 0, 0, 1] },
        },
        Oe = {
          mapping: 'xr-standard',
          profiles: [
            'samsung-odyssey',
            'microsoft-mixed-reality',
            'generic-trigger-squeeze-touchpad-thumbstick',
          ],
          buttons: { length: 4, 0: 1, 1: 0, 2: 2, 3: 4 },
          gripTransform: {
            position: [0, -0.02, 0.04, 1],
            orientation: [0.11 * Math.PI, 0, 0, 1],
          },
        },
        Ne = {
          mapping: 'xr-standard',
          profiles: [
            'microsoft-mixed-reality',
            'generic-trigger-squeeze-touchpad-thumbstick',
          ],
          buttons: { length: 4, 0: 1, 1: 0, 2: 2, 3: 4 },
          gripTransform: {
            position: [0, -0.02, 0.04, 1],
            orientation: [0.11 * Math.PI, 0, 0, 1],
          },
        },
        Ue = {
          'Daydream Controller': {
            mapping: '',
            profiles: ['google-daydream', 'generic-trigger-touchpad'],
            buttons: { length: 3, 0: null, 1: null, 2: 0 },
          },
          'Gear VR Controller': Le,
          'HTC Vive Focus Controller': {
            mapping: 'xr-standard',
            profiles: ['htc-vive-focus', 'generic-trigger-touchpad'],
            buttons: { length: 3, 0: 1, 1: null, 2: 0 },
          },
          'Oculus Go Controller': Ie,
          'Oculus Touch (Right)': Be,
          'Oculus Touch (Left)': Be,
          'OpenVR Gamepad': De,
          'Spatial Controller (Spatial Interaction Source) 045E-065A': Ne,
          'Spatial Controller (Spatial Interaction Source) 045E-065D': Oe,
          'Windows Mixed Reality (Right)': Ne,
          'Windows Mixed Reality (Left)': Ne,
        };
      const ke = m(0.155, -0.465, -0.15),
        Ge = m(-0.155, -0.465, -0.15),
        Ve = m(0, 0, -0.25),
        Qe = m(0, 0, 0.05),
        ze = m(-0.08, 0.14, 0.08),
        Xe = 180 / Math.PI;
      class He {
        constructor() {
          (this.hand = 'right'),
            (this.headElbowOffset = ke),
            (this.controllerQ = x()),
            (this.lastControllerQ = x()),
            (this.headQ = x()),
            (this.headPos = f()),
            (this.elbowPos = f()),
            (this.wristPos = f()),
            (this.time = null),
            (this.lastTime = null),
            (this.rootQ = x()),
            (this.position = f());
        }
        setHandedness(e) {
          this.hand != e &&
            ((this.hand = e),
            'left' == this.hand
              ? (this.headElbowOffset = Ge)
              : (this.headElbowOffset = ke));
        }
        update(e, t) {
          (this.time = X()),
            e &&
              (P(this.lastControllerQ, this.controllerQ),
              P(this.controllerQ, e)),
            t && (c(this.headPos, t), d(this.headQ, t));
          let r = this.getHeadYawOrientation_(),
            i = this.quatAngle_(this.lastControllerQ, this.controllerQ);
          i / ((this.time - this.lastTime) / 1e3) > 0.61
            ? R(this.rootQ, this.rootQ, r, Math.min(i / 0.175, 1))
            : P(this.rootQ, r);
          let n = m(0, 0, -1);
          E(n, n, this.controllerQ);
          let s = b(n, [0, 1, 0]),
            a = this.clamp_((s - 0.12) / 0.87, 0, 1),
            o = F(this.rootQ);
          T(o, o), S(o, o, this.controllerQ);
          let l = this.elbowPos;
          g(l, this.headPos), _(l, l, this.headElbowOffset);
          let h = p(ze);
          v(h, h, a), _(l, l, h);
          let u = this.quatAngle_(o, x()) * Xe,
            A = (1 - Math.pow(u / 180, 4)) * (0.4 + 0.6 * a * 0.4),
            f = x();
          R(f, f, o, A);
          let w = T(x(), f),
            y = F(o);
          S(y, y, w);
          let M = this.wristPos;
          g(M, Qe), E(M, M, f), _(M, M, Ve), E(M, M, y), _(M, M, l);
          let C = p(ze);
          v(C, C, a),
            _(this.position, this.wristPos, C),
            E(this.position, this.position, this.rootQ),
            (this.lastTime = this.time);
        }
        getPosition() {
          return this.position;
        }
        getHeadYawOrientation_() {
          let e = f();
          return (
            (function(e, t, r) {
              function i(e, t, r) {
                return e < t ? t : e > r ? r : e;
              }
              var n = t[0] * t[0],
                s = t[1] * t[1],
                a = t[2] * t[2],
                o = t[3] * t[3];
              if ('XYZ' === r)
                (e[0] = Math.atan2(
                  2 * (t[0] * t[3] - t[1] * t[2]),
                  o - n - s + a
                )),
                  (e[1] = Math.asin(i(2 * (t[0] * t[2] + t[1] * t[3]), -1, 1))),
                  (e[2] = Math.atan2(
                    2 * (t[2] * t[3] - t[0] * t[1]),
                    o + n - s - a
                  ));
              else if ('YXZ' === r)
                (e[0] = Math.asin(i(2 * (t[0] * t[3] - t[1] * t[2]), -1, 1))),
                  (e[1] = Math.atan2(
                    2 * (t[0] * t[2] + t[1] * t[3]),
                    o - n - s + a
                  )),
                  (e[2] = Math.atan2(
                    2 * (t[0] * t[1] + t[2] * t[3]),
                    o - n + s - a
                  ));
              else if ('ZXY' === r)
                (e[0] = Math.asin(i(2 * (t[0] * t[3] + t[1] * t[2]), -1, 1))),
                  (e[1] = Math.atan2(
                    2 * (t[1] * t[3] - t[2] * t[0]),
                    o - n - s + a
                  )),
                  (e[2] = Math.atan2(
                    2 * (t[2] * t[3] - t[0] * t[1]),
                    o - n + s - a
                  ));
              else if ('ZYX' === r)
                (e[0] = Math.atan2(
                  2 * (t[0] * t[3] + t[2] * t[1]),
                  o - n - s + a
                )),
                  (e[1] = Math.asin(i(2 * (t[1] * t[3] - t[0] * t[2]), -1, 1))),
                  (e[2] = Math.atan2(
                    2 * (t[0] * t[1] + t[2] * t[3]),
                    o + n - s - a
                  ));
              else if ('YZX' === r)
                (e[0] = Math.atan2(
                  2 * (t[0] * t[3] - t[2] * t[1]),
                  o - n + s - a
                )),
                  (e[1] = Math.atan2(
                    2 * (t[1] * t[3] - t[0] * t[2]),
                    o + n - s - a
                  )),
                  (e[2] = Math.asin(i(2 * (t[0] * t[1] + t[2] * t[3]), -1, 1)));
              else {
                if ('XZY' !== r)
                  return void console.log(
                    'No order given for quaternion to euler conversion.'
                  );
                (e[0] = Math.atan2(
                  2 * (t[0] * t[3] + t[1] * t[2]),
                  o - n + s - a
                )),
                  (e[1] = Math.atan2(
                    2 * (t[0] * t[2] + t[1] * t[3]),
                    o + n - s - a
                  )),
                  (e[2] = Math.asin(i(2 * (t[2] * t[3] - t[0] * t[1]), -1, 1)));
              }
            })(e, this.headQ, 'YXZ'),
            (function(e, t, r, i) {
              let n = (0.5 * Math.PI) / 180;
              (t *= n), (r *= n), (i *= n);
              let s = Math.sin(t),
                a = Math.cos(t),
                o = Math.sin(r),
                l = Math.cos(r),
                h = Math.sin(i),
                u = Math.cos(i);
              return (
                (e[0] = s * l * u - a * o * h),
                (e[1] = a * o * u + s * l * h),
                (e[2] = a * l * h - s * o * u),
                (e[3] = a * l * u + s * o * h),
                e
              );
            })(x(), 0, e[1] * Xe, 0)
          );
        }
        clamp_(e, t, r) {
          return Math.min(Math.max(e, t), r);
        }
        quatAngle_(e, t) {
          let r = [0, 0, -1],
            i = [0, 0, -1];
          return (
            E(r, r, e),
            E(i, i, t),
            (function(e, t) {
              let r = m(e[0], e[1], e[2]),
                i = m(t[0], t[1], t[2]);
              w(r, r), w(i, i);
              let n = b(r, i);
              return n > 1 ? 0 : n < -1 ? Math.PI : Math.acos(n);
            })(r, i)
          );
        }
      }
      const We = Symbol('@@webxr-polyfill/XRRemappedGamepad'),
        je = { pressed: !1, touched: !1, value: 0 };
      Object.freeze(je);
      class qe {
        constructor(e, t, r) {
          if ((r || (r = {}), r.userAgentOverrides))
            for (let e in r.userAgentOverrides)
              if (navigator.userAgent.includes(e)) {
                let t = r.userAgentOverrides[e];
                for (let e in t)
                  e in r ? Object.assign(r[e], t[e]) : (r[e] = t[e]);
                break;
              }
          let i = new Array(
              r.axes && r.axes.length ? r.axes.length : e.axes.length
            ),
            n = new Array(
              r.buttons && r.buttons.length
                ? r.buttons.length
                : e.buttons.length
            ),
            s = null;
          if (r.gripTransform) {
            let e = r.gripTransform.orientation || [0, 0, 0, 1];
            (s = a()), u(s, I(e, e), r.gripTransform.position || [0, 0, 0]);
          }
          let o = null;
          if (r.targetRayTransform) {
            let e = r.targetRayTransform.orientation || [0, 0, 0, 1];
            (o = a()),
              u(o, I(e, e), r.targetRayTransform.position || [0, 0, 0]);
          }
          let l = r.profiles;
          r.displayProfiles &&
            t.displayName in r.displayProfiles &&
            (l = r.displayProfiles[t.displayName]),
            (this[We] = {
              gamepad: e,
              map: r,
              profiles: l || [e.id],
              mapping: r.mapping || e.mapping,
              axes: i,
              buttons: n,
              gripTransform: s,
              targetRayTransform: o,
            }),
            this._update();
        }
        _update() {
          let e = this[We].gamepad,
            t = this[We].map,
            r = this[We].axes;
          for (let i = 0; i < r.length; ++i)
            t.axes && i in t.axes
              ? null === t.axes[i]
                ? (r[i] = 0)
                : (r[i] = e.axes[t.axes[i]])
              : (r[i] = e.axes[i]);
          if (t.axes && t.axes.invert)
            for (let e of t.axes.invert) e < r.length && (r[e] *= -1);
          let i = this[We].buttons;
          for (let r = 0; r < i.length; ++r)
            t.buttons && r in t.buttons
              ? null === t.buttons[r]
                ? (i[r] = je)
                : (i[r] = e.buttons[t.buttons[r]])
              : (i[r] = e.buttons[r]);
        }
        get id() {
          return '';
        }
        get _profiles() {
          return this[We].profiles;
        }
        get index() {
          return -1;
        }
        get connected() {
          return this[We].gamepad.connected;
        }
        get timestamp() {
          return this[We].gamepad.timestamp;
        }
        get mapping() {
          return this[We].mapping;
        }
        get axes() {
          return this[We].axes;
        }
        get buttons() {
          return this[We].buttons;
        }
        get hapticActuators() {
          return this[We].gamepad.hapticActuators;
        }
      }
      class Ye {
        constructor(e, t, r = 0, i = -1) {
          (this.polyfill = e),
            (this.display = t),
            (this.nativeGamepad = null),
            (this.gamepad = null),
            (this.inputSource = new be(this)),
            (this.lastPosition = f()),
            (this.emulatedPosition = !1),
            (this.basePoseMatrix = a()),
            (this.outputMatrix = a()),
            (this.primaryButtonIndex = r),
            (this.primaryActionPressed = !1),
            (this.primarySqueezeButtonIndex = i),
            (this.primarySqueezeActionPressed = !1),
            (this.handedness = ''),
            (this.targetRayMode = 'gaze'),
            (this.armModel = null);
        }
        get profiles() {
          return this.gamepad ? this.gamepad._profiles : [];
        }
        updateFromGamepad(e) {
          this.nativeGamepad !== e &&
            ((this.nativeGamepad = e),
            (this.gamepad = e ? new qe(e, this.display, Ue[e.id]) : null)),
            (this.handedness = '' === e.hand ? 'none' : e.hand),
            this.gamepad && this.gamepad._update(),
            e.pose
              ? ((this.targetRayMode = 'tracked-pointer'),
                (this.emulatedPosition = !e.pose.hasPosition))
              : '' === e.hand &&
                ((this.targetRayMode = 'gaze'), (this.emulatedPosition = !1));
        }
        updateBasePoseMatrix() {
          if (this.nativeGamepad && this.nativeGamepad.pose) {
            let e = this.nativeGamepad.pose,
              t = e.position,
              r = e.orientation;
            if (!t && !r) return;
            t
              ? ((this.lastPosition[0] = t[0]),
                (this.lastPosition[1] = t[1]),
                (this.lastPosition[2] = t[2]))
              : e.hasPosition
              ? (t = this.lastPosition)
              : (this.armModel || (this.armModel = new He()),
                this.armModel.setHandedness(this.nativeGamepad.hand),
                this.armModel.update(r, this.polyfill.getBasePoseMatrix()),
                (t = this.armModel.getPosition())),
              u(this.basePoseMatrix, r, t);
          } else
            (e = this.basePoseMatrix),
              (t = this.polyfill.getBasePoseMatrix()),
              (e[0] = t[0]),
              (e[1] = t[1]),
              (e[2] = t[2]),
              (e[3] = t[3]),
              (e[4] = t[4]),
              (e[5] = t[5]),
              (e[6] = t[6]),
              (e[7] = t[7]),
              (e[8] = t[8]),
              (e[9] = t[9]),
              (e[10] = t[10]),
              (e[11] = t[11]),
              (e[12] = t[12]),
              (e[13] = t[13]),
              (e[14] = t[14]),
              (e[15] = t[15]);
          var e, t;
          return this.basePoseMatrix;
        }
        getXRPose(e, t) {
          switch ((this.updateBasePoseMatrix(), t)) {
            case 'target-ray':
              e._transformBasePoseMatrix(
                this.outputMatrix,
                this.basePoseMatrix
              ),
                this.gamepad &&
                  this.gamepad[We].targetRayTransform &&
                  h(
                    this.outputMatrix,
                    this.outputMatrix,
                    this.gamepad[We].targetRayTransform
                  );
              break;
            case 'grip':
              if (!this.nativeGamepad || !this.nativeGamepad.pose) return null;
              e._transformBasePoseMatrix(
                this.outputMatrix,
                this.basePoseMatrix
              ),
                this.gamepad &&
                  this.gamepad[We].gripTransform &&
                  h(
                    this.outputMatrix,
                    this.outputMatrix,
                    this.gamepad[We].gripTransform
                  );
              break;
            default:
              return null;
          }
          return (
            e._adjustForOriginOffset(this.outputMatrix),
            new XRPose(
              new XRRigidTransform(this.outputMatrix),
              this.emulatedPosition
            )
          );
        }
      }
      const Ze = { highRefreshRate: !0 },
        Ke = {
          oculus: 1,
          openvr: 1,
          'spatial controller (spatial interaction source)': 1,
        };
      let Je = 0;
      class $e {
        constructor(e, t, r = {}) {
          if (
            ((this.mode = e),
            (this.enabledFeatures = t),
            (this.outputContext = null),
            (this.immersive = 'immersive-vr' == e || 'immersive-ar' == e),
            (this.ended = null),
            (this.baseLayer = null),
            (this.id = ++Je),
            (this.modifiedCanvasLayer = !1),
            this.outputContext)
          ) {
            const e = r.renderContextType || '2d';
            this.renderContext = this.outputContext.canvas.getContext(e);
          }
        }
      }
      class et extends Pe {
        constructor(e, t) {
          const { canPresent: r } = t.capabilities;
          super(e),
            (this.display = t),
            (this.frame = new e.VRFrameData()),
            (this.sessions = new Map()),
            (this.immersiveSession = null),
            (this.canPresent = r),
            (this.baseModelMatrix = a()),
            (this.gamepadInputSources = {}),
            (this.tempVec3 = new Float32Array(3)),
            (this.onVRDisplayPresentChange = this.onVRDisplayPresentChange.bind(
              this
            )),
            e.window.addEventListener(
              'vrdisplaypresentchange',
              this.onVRDisplayPresentChange
            ),
            (this.CAN_USE_GAMEPAD =
              e.navigator && 'getGamepads' in e.navigator),
            (this.HAS_BITMAP_SUPPORT = (e =>
              !(!e.ImageBitmapRenderingContext || !e.createImageBitmap))(e));
        }
        get depthNear() {
          return this.display.depthNear;
        }
        set depthNear(e) {
          this.display.depthNear = e;
        }
        get depthFar() {
          return this.display.depthFar;
        }
        set depthFar(e) {
          this.display.depthFar = e;
        }
        onBaseLayerSet(e, t) {
          const r = this.sessions.get(e),
            i = t.context.canvas;
          if (r.immersive) {
            const e = this.display.getEyeParameters('left'),
              n = this.display.getEyeParameters('right');
            (i.width = 2 * Math.max(e.renderWidth, n.renderWidth)),
              (i.height = Math.max(e.renderHeight, n.renderHeight)),
              this.display
                .requestPresent([{ source: i, attributes: Ze }])
                .then(() => {
                  this.global.document.body.contains(i) ||
                    ((r.modifiedCanvasLayer = !0),
                    this.global.document.body.appendChild(i),
                    (e => {
                      (e.style.display = 'block'),
                        (e.style.position = 'absolute'),
                        (e.style.width = e.style.height = '1px'),
                        (e.style.top = e.style.left = '0px');
                    })(i)),
                    (r.baseLayer = t);
                });
          } else r.baseLayer = t;
        }
        isSessionSupported(e) {
          return (
            'immersive-ar' != e &&
            ('immersive-vr' != e || !1 !== this.canPresent)
          );
        }
        isFeatureSupported(e) {
          switch (e) {
            case 'viewer':
            case 'local':
            case 'local-floor':
              return !0;
            case 'bounded':
            case 'unbounded':
            default:
              return !1;
          }
        }
        async requestSession(e, t) {
          if (!this.isSessionSupported(e)) return Promise.reject();
          let r = 'immersive-vr' == e;
          if (r) {
            const e = this.global.document.createElement('canvas');
            e.getContext('webgl');
            await this.display.requestPresent([{ source: e, attributes: Ze }]);
          }
          const i = new $e(e, t, {
            renderContextType: this.HAS_BITMAP_SUPPORT
              ? 'bitmaprenderer'
              : '2d',
          });
          return (
            this.sessions.set(i.id, i),
            r &&
              ((this.immersiveSession = i),
              this.dispatchEvent('@@webxr-polyfill/vr-present-start', i.id)),
            Promise.resolve(i.id)
          );
        }
        requestAnimationFrame(e) {
          return this.display.requestAnimationFrame(e);
        }
        getPrimaryButtonIndex(e) {
          let t = 0,
            r = e.id.toLowerCase();
          for (let e in Ke)
            if (r.includes(e)) {
              t = Ke[e];
              break;
            }
          return Math.min(t, e.buttons.length - 1);
        }
        onFrameStart(e, t) {
          (this.display.depthNear = t.depthNear),
            (this.display.depthFar = t.depthFar),
            this.display.getFrameData(this.frame);
          const r = this.sessions.get(e);
          if (r.immersive && this.CAN_USE_GAMEPAD) {
            let e = this.gamepadInputSources;
            this.gamepadInputSources = {};
            let t = this.global.navigator.getGamepads();
            for (let i = 0; i < t.length; ++i) {
              let n = t[i];
              if (n && n.displayId > 0) {
                let t = e[i];
                if (
                  (t ||
                    (t = new Ye(
                      this,
                      this.display,
                      this.getPrimaryButtonIndex(n)
                    )),
                  t.updateFromGamepad(n),
                  (this.gamepadInputSources[i] = t),
                  -1 != t.primaryButtonIndex)
                ) {
                  let e = n.buttons[t.primaryButtonIndex].pressed;
                  e && !t.primaryActionPressed
                    ? this.dispatchEvent(
                        '@@webxr-polyfill/input-select-start',
                        { sessionId: r.id, inputSource: t.inputSource }
                      )
                    : !e &&
                      t.primaryActionPressed &&
                      this.dispatchEvent('@@webxr-polyfill/input-select-end', {
                        sessionId: r.id,
                        inputSource: t.inputSource,
                      }),
                    (t.primaryActionPressed = e);
                }
                if (-1 != t.primarySqueezeButtonIndex) {
                  let e = n.buttons[t.primarySqueezeButtonIndex].pressed;
                  e && !t.primarySqueezeActionPressed
                    ? this.dispatchEvent(
                        '@@webxr-polyfill/input-squeeze-start',
                        { sessionId: r.id, inputSource: t.inputSource }
                      )
                    : !e &&
                      t.primarySqueezeActionPressed &&
                      this.dispatchEvent('@@webxr-polyfill/input-squeeze-end', {
                        sessionId: r.id,
                        inputSource: t.inputSource,
                      }),
                    (t.primarySqueezeActionPressed = e);
                }
              }
            }
          }
          if (!r.immersive && r.baseLayer) {
            const e = r.baseLayer.context.canvas;
            A(
              this.frame.leftProjectionMatrix,
              t.inlineVerticalFieldOfView,
              e.width / e.height,
              t.depthNear,
              t.depthFar
            );
          }
        }
        onFrameEnd(e) {
          const t = this.sessions.get(e);
          if (!t.ended && t.baseLayer) {
            if (
              t.outputContext &&
              (!t.immersive || this.display.capabilities.hasExternalDisplay)
            ) {
              const e =
                  t.immersive && this.display.capabilities.hasExternalDisplay,
                r = t.baseLayer.context.canvas,
                i = e ? r.width / 2 : r.width,
                n = r.height;
              {
                const e = t.outputContext.canvas,
                  s = e.width,
                  a = e.height,
                  o = t.renderContext;
                this.HAS_BITMAP_SUPPORT
                  ? r.transferToImageBitmap
                    ? o.transferFromImageBitmap(r.transferToImageBitmap())
                    : this.global
                        .createImageBitmap(r, 0, 0, i, n, {
                          resizeWidth: s,
                          resizeHeight: a,
                        })
                        .then(e => o.transferFromImageBitmap(e))
                  : o.drawImage(r, 0, 0, i, n, 0, 0, s, a);
              }
            }
            t.immersive && t.baseLayer && this.display.submitFrame();
          }
        }
        cancelAnimationFrame(e) {
          this.display.cancelAnimationFrame(e);
        }
        async endSession(e) {
          const t = this.sessions.get(e);
          if (!t.ended)
            return t.immersive
              ? this.display.exitPresent()
              : void (t.ended = !0);
        }
        doesSessionSupportReferenceSpace(e, t) {
          const r = this.sessions.get(e);
          return !r.ended && r.enabledFeatures.has(t);
        }
        requestStageBounds() {
          if (this.display.stageParameters) {
            const e = this.display.stageParameters.sizeX,
              t = this.display.stageParameters.sizeZ,
              r = [];
            return (
              r.push(-e / 2),
              r.push(-t / 2),
              r.push(e / 2),
              r.push(-t / 2),
              r.push(e / 2),
              r.push(t / 2),
              r.push(-e / 2),
              r.push(t / 2),
              r
            );
          }
          return null;
        }
        async requestFrameOfReferenceTransform(e, t) {
          return ('local-floor' === e || 'bounded-floor' === e) &&
            this.display.stageParameters &&
            this.display.stageParameters.sittingToStandingTransform
            ? this.display.stageParameters.sittingToStandingTransform
            : null;
        }
        getProjectionMatrix(e) {
          if ('left' === e) return this.frame.leftProjectionMatrix;
          if ('right' === e) return this.frame.rightProjectionMatrix;
          if ('none' === e) return this.frame.leftProjectionMatrix;
          throw new Error("eye must be of type 'left' or 'right'");
        }
        getViewport(e, t, r, i) {
          const n = this.sessions.get(e),
            { width: s, height: a } = r.context.canvas;
          if (!n.immersive)
            return (i.x = i.y = 0), (i.width = s), (i.height = a), !0;
          if ('left' === t || 'none' === t) i.x = 0;
          else {
            if ('right' !== t) return !1;
            i.x = s / 2;
          }
          return (i.y = 0), (i.width = s / 2), (i.height = a), !0;
        }
        getBasePoseMatrix() {
          let { position: e, orientation: t } = this.frame.pose;
          return e || t
            ? (e || ((e = this.tempVec3), (e[0] = e[1] = e[2] = 0)),
              u(this.baseModelMatrix, t, e),
              this.baseModelMatrix)
            : this.baseModelMatrix;
        }
        getBaseViewMatrix(e) {
          if ('left' === e || 'none' === e) return this.frame.leftViewMatrix;
          if ('right' === e) return this.frame.rightViewMatrix;
          throw new Error("eye must be of type 'left' or 'right'");
        }
        getInputSources() {
          let e = [];
          for (let t in this.gamepadInputSources)
            e.push(this.gamepadInputSources[t].inputSource);
          return e;
        }
        getInputPose(e, t, r) {
          if (!t) return null;
          for (let i in this.gamepadInputSources) {
            let n = this.gamepadInputSources[i];
            if (n.inputSource === e) return n.getXRPose(t, r);
          }
          return null;
        }
        onWindowResize() {}
        onVRDisplayPresentChange(e) {
          this.display.isPresenting ||
            this.sessions.forEach(e => {
              if (e.immersive && !e.ended) {
                if (e.modifiedCanvasLayer) {
                  const t = e.baseLayer.context.canvas;
                  document.body.removeChild(t), t.setAttribute('style', '');
                }
                this.immersiveSession === e && (this.immersiveSession = null),
                  this.dispatchEvent('@@webxr-polyfill/vr-present-end', e.id);
              }
            });
        }
      }
      class tt extends et {
        constructor(e, t) {
          const r = new Ce(t || {});
          super(e, r),
            (this.display = r),
            (this.frame = {
              rightViewMatrix: new Float32Array(16),
              leftViewMatrix: new Float32Array(16),
              rightProjectionMatrix: new Float32Array(16),
              leftProjectionMatrix: new Float32Array(16),
              pose: null,
              timestamp: null,
            });
        }
      }
      let rt = 0;
      class it {
        constructor(e, t) {
          (this.mode = e),
            (this.enabledFeatures = t),
            (this.ended = null),
            (this.baseLayer = null),
            (this.id = ++rt);
        }
      }
      class nt extends Pe {
        constructor(e) {
          super(e),
            (this.sessions = new Map()),
            (this.projectionMatrix = a()),
            (this.identityMatrix = a());
        }
        onBaseLayerSet(e, t) {
          this.sessions.get(e).baseLayer = t;
        }
        isSessionSupported(e) {
          return 'inline' == e;
        }
        isFeatureSupported(e) {
          switch (e) {
            case 'viewer':
              return !0;
            default:
              return !1;
          }
        }
        async requestSession(e, t) {
          if (!this.isSessionSupported(e)) return Promise.reject();
          const r = new it(e, t);
          return this.sessions.set(r.id, r), Promise.resolve(r.id);
        }
        requestAnimationFrame(e) {
          return window.requestAnimationFrame(e);
        }
        cancelAnimationFrame(e) {
          window.cancelAnimationFrame(e);
        }
        onFrameStart(e, t) {
          const r = this.sessions.get(e);
          if (r.baseLayer) {
            const e = r.baseLayer.context.canvas;
            A(
              this.projectionMatrix,
              t.inlineVerticalFieldOfView,
              e.width / e.height,
              t.depthNear,
              t.depthFar
            );
          }
        }
        onFrameEnd(e) {}
        async endSession(e) {
          this.sessions.get(e).ended = !0;
        }
        doesSessionSupportReferenceSpace(e, t) {
          const r = this.sessions.get(e);
          return !r.ended && r.enabledFeatures.has(t);
        }
        requestStageBounds() {
          return null;
        }
        async requestFrameOfReferenceTransform(e, t) {
          return null;
        }
        getProjectionMatrix(e) {
          return this.projectionMatrix;
        }
        getViewport(e, t, r, i) {
          this.sessions.get(e);
          const { width: n, height: s } = r.context.canvas;
          return (i.x = i.y = 0), (i.width = n), (i.height = s), !0;
        }
        getBasePoseMatrix() {
          return this.identityMatrix;
        }
        getBaseViewMatrix(e) {
          return this.identityMatrix;
        }
        getInputSources() {
          return [];
        }
        getInputPose(e, t, r) {
          return null;
        }
        onWindowResize() {}
      }
      const st = async function(e, t) {
          if (t.webvr) {
            let t = await (async function(e) {
              let t = null;
              if ('getVRDisplays' in e.navigator)
                try {
                  const r = await e.navigator.getVRDisplays();
                  r && r.length && (t = new et(e, r[0]));
                } catch (e) {}
              return t;
            })(e);
            if (t) return t;
          }
          let r = (e => {
            var t,
              r = !1;
            return (
              (t = e.navigator.userAgent || e.navigator.vendor || e.opera),
              (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
                t
              ) ||
                /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
                  t.substr(0, 4)
                )) &&
                (r = !0),
              r
            );
          })(e);
          return (r && t.cardboard) || (!r && t.allowCardboardOnDesktop)
            ? (e.VRFrameData ||
                (e.VRFrameData = function() {
                  (this.rightViewMatrix = new Float32Array(16)),
                    (this.leftViewMatrix = new Float32Array(16)),
                    (this.rightProjectionMatrix = new Float32Array(16)),
                    (this.leftProjectionMatrix = new Float32Array(16)),
                    (this.pose = null);
                }),
              new tt(e, t.cardboardConfig))
            : new nt(e);
        },
        at = {
          global: r,
          webvr: !0,
          cardboard: !0,
          cardboardConfig: null,
          allowCardboardOnDesktop: !1,
        },
        ot = ['navigator', 'HTMLCanvasElement', 'WebGLRenderingContext'];
      t.a = class {
        constructor(e = {}) {
          (this.config = Object.freeze(Object.assign({}, at, e))),
            (this.global = this.config.global),
            (this.nativeWebXR = 'xr' in this.global.navigator),
            (this.injected = !1),
            this.nativeWebXR
              ? this._injectCompatibilityShims(this.global)
              : this._injectPolyfill(this.global);
        }
        _injectPolyfill(e) {
          if (!ot.every(t => !!e[t]))
            throw new Error(
              `Global must have the following attributes : ${ot}`
            );
          for (const t of Object.keys(Me))
            void 0 !== e[t]
              ? console.warn(`${t} already defined on global.`)
              : (e[t] = Me[t]);
          xe(e.WebGLRenderingContext) &&
            (Se(e.HTMLCanvasElement),
            e.OffscreenCanvas && Se(e.OffscreenCanvas),
            e.WebGL2RenderingContext && xe(e.WebGL2RenderingContext));
          (this.injected = !0), this._patchNavigatorXR();
        }
        _patchNavigatorXR() {
          let e = st(this.global, this.config);
          (this.xr = new Me.XR(e)),
            Object.defineProperty(this.global.navigator, 'xr', {
              value: this.xr,
              configurable: !0,
            });
        }
        _injectCompatibilityShims(e) {
          if (!ot.every(t => !!e[t]))
            throw new Error(
              `Global must have the following attributes : ${ot}`
            );
          if (
            e.navigator.xr &&
            'supportsSession' in e.navigator.xr &&
            !('isSessionSupported' in e.navigator.xr)
          ) {
            let t = e.navigator.xr.supportsSession;
            (e.navigator.xr.isSessionSupported = function(e) {
              return t
                .call(this, e)
                .then(() => !0)
                .catch(() => !1);
            }),
              (e.navigator.xr.supportsSession = function(e) {
                return (
                  console.warn(
                    'navigator.xr.supportsSession() is deprecated. Please call navigator.xr.isSessionSupported() instead and check the boolean value returned when the promise resolves.'
                  ),
                  t.call(this, e)
                );
              });
          }
        }
      };
    }.call(this, r(1)));
  },
  function(e, t) {
    var r;
    r = (function() {
      return this;
    })();
    try {
      r = r || new Function('return this')();
    } catch (e) {
      'object' == typeof window && (r = window);
    }
    e.exports = r;
  },
  function(e, t, r) {
    'use strict';
    r.r(t);
    var i = {};
    r.r(i),
      r.d(i, 'create', function() {
        return V;
      }),
      r.d(i, 'fromMat4', function() {
        return Q;
      }),
      r.d(i, 'clone', function() {
        return z;
      }),
      r.d(i, 'copy', function() {
        return X;
      }),
      r.d(i, 'fromValues', function() {
        return H;
      }),
      r.d(i, 'set', function() {
        return W;
      }),
      r.d(i, 'identity', function() {
        return j;
      }),
      r.d(i, 'transpose', function() {
        return q;
      }),
      r.d(i, 'invert', function() {
        return Y;
      }),
      r.d(i, 'adjoint', function() {
        return Z;
      }),
      r.d(i, 'determinant', function() {
        return K;
      }),
      r.d(i, 'multiply', function() {
        return J;
      }),
      r.d(i, 'translate', function() {
        return $;
      }),
      r.d(i, 'rotate', function() {
        return ee;
      }),
      r.d(i, 'scale', function() {
        return te;
      }),
      r.d(i, 'fromTranslation', function() {
        return re;
      }),
      r.d(i, 'fromRotation', function() {
        return ie;
      }),
      r.d(i, 'fromScaling', function() {
        return ne;
      }),
      r.d(i, 'fromMat2d', function() {
        return se;
      }),
      r.d(i, 'fromQuat', function() {
        return ae;
      }),
      r.d(i, 'normalFromMat4', function() {
        return oe;
      }),
      r.d(i, 'projection', function() {
        return le;
      }),
      r.d(i, 'str', function() {
        return he;
      }),
      r.d(i, 'frob', function() {
        return ue;
      }),
      r.d(i, 'add', function() {
        return ce;
      }),
      r.d(i, 'subtract', function() {
        return de;
      }),
      r.d(i, 'multiplyScalar', function() {
        return Ae;
      }),
      r.d(i, 'multiplyScalarAndAdd', function() {
        return fe;
      }),
      r.d(i, 'exactEquals', function() {
        return pe;
      }),
      r.d(i, 'equals', function() {
        return me;
      }),
      r.d(i, 'mul', function() {
        return ge;
      }),
      r.d(i, 'sub', function() {
        return _e;
      });
    var n = {};
    r.r(n),
      r.d(n, 'create', function() {
        return ve;
      }),
      r.d(n, 'clone', function() {
        return we;
      }),
      r.d(n, 'copy', function() {
        return be;
      }),
      r.d(n, 'fromValues', function() {
        return ye;
      }),
      r.d(n, 'set', function() {
        return Ee;
      }),
      r.d(n, 'identity', function() {
        return Me;
      }),
      r.d(n, 'transpose', function() {
        return xe;
      }),
      r.d(n, 'invert', function() {
        return Se;
      }),
      r.d(n, 'adjoint', function() {
        return Re;
      }),
      r.d(n, 'determinant', function() {
        return Te;
      }),
      r.d(n, 'multiply', function() {
        return Fe;
      }),
      r.d(n, 'translate', function() {
        return Ce;
      }),
      r.d(n, 'scale', function() {
        return Pe;
      }),
      r.d(n, 'rotate', function() {
        return Ie;
      }),
      r.d(n, 'rotateX', function() {
        return Be;
      }),
      r.d(n, 'rotateY', function() {
        return De;
      }),
      r.d(n, 'rotateZ', function() {
        return Le;
      }),
      r.d(n, 'fromTranslation', function() {
        return Oe;
      }),
      r.d(n, 'fromScaling', function() {
        return Ne;
      }),
      r.d(n, 'fromRotation', function() {
        return Ue;
      }),
      r.d(n, 'fromXRotation', function() {
        return ke;
      }),
      r.d(n, 'fromYRotation', function() {
        return Ge;
      }),
      r.d(n, 'fromZRotation', function() {
        return Ve;
      }),
      r.d(n, 'fromRotationTranslation', function() {
        return Qe;
      }),
      r.d(n, 'fromQuat2', function() {
        return ze;
      }),
      r.d(n, 'getTranslation', function() {
        return Xe;
      }),
      r.d(n, 'getScaling', function() {
        return He;
      }),
      r.d(n, 'getRotation', function() {
        return We;
      }),
      r.d(n, 'fromRotationTranslationScale', function() {
        return je;
      }),
      r.d(n, 'fromRotationTranslationScaleOrigin', function() {
        return qe;
      }),
      r.d(n, 'fromQuat', function() {
        return Ye;
      }),
      r.d(n, 'frustum', function() {
        return Ze;
      }),
      r.d(n, 'perspective', function() {
        return Ke;
      }),
      r.d(n, 'perspectiveFromFieldOfView', function() {
        return Je;
      }),
      r.d(n, 'ortho', function() {
        return $e;
      }),
      r.d(n, 'lookAt', function() {
        return et;
      }),
      r.d(n, 'targetTo', function() {
        return tt;
      }),
      r.d(n, 'str', function() {
        return rt;
      }),
      r.d(n, 'frob', function() {
        return it;
      }),
      r.d(n, 'add', function() {
        return nt;
      }),
      r.d(n, 'subtract', function() {
        return st;
      }),
      r.d(n, 'multiplyScalar', function() {
        return at;
      }),
      r.d(n, 'multiplyScalarAndAdd', function() {
        return ot;
      }),
      r.d(n, 'exactEquals', function() {
        return lt;
      }),
      r.d(n, 'equals', function() {
        return ht;
      }),
      r.d(n, 'mul', function() {
        return ut;
      }),
      r.d(n, 'sub', function() {
        return ct;
      });
    var s = {};
    r.r(s),
      r.d(s, 'create', function() {
        return dt;
      }),
      r.d(s, 'clone', function() {
        return At;
      }),
      r.d(s, 'length', function() {
        return ft;
      }),
      r.d(s, 'fromValues', function() {
        return pt;
      }),
      r.d(s, 'copy', function() {
        return mt;
      }),
      r.d(s, 'set', function() {
        return gt;
      }),
      r.d(s, 'add', function() {
        return _t;
      }),
      r.d(s, 'subtract', function() {
        return vt;
      }),
      r.d(s, 'multiply', function() {
        return wt;
      }),
      r.d(s, 'divide', function() {
        return bt;
      }),
      r.d(s, 'ceil', function() {
        return yt;
      }),
      r.d(s, 'floor', function() {
        return Et;
      }),
      r.d(s, 'min', function() {
        return Mt;
      }),
      r.d(s, 'max', function() {
        return xt;
      }),
      r.d(s, 'round', function() {
        return St;
      }),
      r.d(s, 'scale', function() {
        return Rt;
      }),
      r.d(s, 'scaleAndAdd', function() {
        return Tt;
      }),
      r.d(s, 'distance', function() {
        return Ft;
      }),
      r.d(s, 'squaredDistance', function() {
        return Ct;
      }),
      r.d(s, 'squaredLength', function() {
        return Pt;
      }),
      r.d(s, 'negate', function() {
        return It;
      }),
      r.d(s, 'inverse', function() {
        return Bt;
      }),
      r.d(s, 'normalize', function() {
        return Dt;
      }),
      r.d(s, 'dot', function() {
        return Lt;
      }),
      r.d(s, 'cross', function() {
        return Ot;
      }),
      r.d(s, 'lerp', function() {
        return Nt;
      }),
      r.d(s, 'hermite', function() {
        return Ut;
      }),
      r.d(s, 'bezier', function() {
        return kt;
      }),
      r.d(s, 'random', function() {
        return Gt;
      }),
      r.d(s, 'transformMat4', function() {
        return Vt;
      }),
      r.d(s, 'transformMat3', function() {
        return Qt;
      }),
      r.d(s, 'transformQuat', function() {
        return zt;
      }),
      r.d(s, 'rotateX', function() {
        return Xt;
      }),
      r.d(s, 'rotateY', function() {
        return Ht;
      }),
      r.d(s, 'rotateZ', function() {
        return Wt;
      }),
      r.d(s, 'angle', function() {
        return jt;
      }),
      r.d(s, 'str', function() {
        return qt;
      }),
      r.d(s, 'exactEquals', function() {
        return Yt;
      }),
      r.d(s, 'equals', function() {
        return Zt;
      }),
      r.d(s, 'sub', function() {
        return Kt;
      }),
      r.d(s, 'mul', function() {
        return Jt;
      }),
      r.d(s, 'div', function() {
        return $t;
      }),
      r.d(s, 'dist', function() {
        return er;
      }),
      r.d(s, 'sqrDist', function() {
        return tr;
      }),
      r.d(s, 'len', function() {
        return rr;
      }),
      r.d(s, 'sqrLen', function() {
        return ir;
      }),
      r.d(s, 'forEach', function() {
        return nr;
      });
    var a = {};
    r.r(a),
      r.d(a, 'create', function() {
        return or;
      }),
      r.d(a, 'identity', function() {
        return lr;
      }),
      r.d(a, 'setAxisAngle', function() {
        return hr;
      }),
      r.d(a, 'getAxisAngle', function() {
        return ur;
      }),
      r.d(a, 'multiply', function() {
        return cr;
      }),
      r.d(a, 'rotateX', function() {
        return dr;
      }),
      r.d(a, 'rotateY', function() {
        return Ar;
      }),
      r.d(a, 'rotateZ', function() {
        return fr;
      }),
      r.d(a, 'calculateW', function() {
        return pr;
      }),
      r.d(a, 'slerp', function() {
        return mr;
      }),
      r.d(a, 'random', function() {
        return gr;
      }),
      r.d(a, 'invert', function() {
        return _r;
      }),
      r.d(a, 'conjugate', function() {
        return vr;
      }),
      r.d(a, 'fromMat3', function() {
        return wr;
      }),
      r.d(a, 'fromEuler', function() {
        return br;
      }),
      r.d(a, 'str', function() {
        return yr;
      }),
      r.d(a, 'clone', function() {
        return Er;
      }),
      r.d(a, 'fromValues', function() {
        return Mr;
      }),
      r.d(a, 'copy', function() {
        return xr;
      }),
      r.d(a, 'set', function() {
        return Sr;
      }),
      r.d(a, 'add', function() {
        return Rr;
      }),
      r.d(a, 'mul', function() {
        return Tr;
      }),
      r.d(a, 'scale', function() {
        return Fr;
      }),
      r.d(a, 'dot', function() {
        return Cr;
      }),
      r.d(a, 'lerp', function() {
        return Pr;
      }),
      r.d(a, 'length', function() {
        return Ir;
      }),
      r.d(a, 'len', function() {
        return Br;
      }),
      r.d(a, 'squaredLength', function() {
        return Dr;
      }),
      r.d(a, 'sqrLen', function() {
        return Lr;
      }),
      r.d(a, 'normalize', function() {
        return Or;
      }),
      r.d(a, 'exactEquals', function() {
        return Nr;
      }),
      r.d(a, 'equals', function() {
        return Ur;
      }),
      r.d(a, 'rotationTo', function() {
        return kr;
      }),
      r.d(a, 'sqlerp', function() {
        return Gr;
      }),
      r.d(a, 'setAxes', function() {
        return Vr;
      });
    let o = {};
    const l = e => {
        const t = e.height / 3;
        e.injectCSS && (o[e.cssprefix] || (o[e.cssprefix] = !0));
        const r = document.createElement('div');
        return (
          (r.innerHTML = ((e, t) => {
            const r = 0.8 * t;
            return `<button class="${e}-button">\n          <div class="${e}-title"></div>\n          <div class="${e}-logo" >${h(
              e,
              r
            ) + u(e, r)}</div>\n        </button>`;
          })(e.cssprefix, t)),
          r.firstChild
        );
      },
      h = (e, t) =>
        `<svg class="${e}-svg" version="1.1" x="0px" y="0px"\n        width="${(28 /
          18) *
          t}px" height="${t}px" viewBox="0 0 28 18" xml:space="preserve">\n        <path d="M26.8,1.1C26.1,0.4,25.1,0,24.2,0H3.4c-1,0-1.7,0.4-2.4,1.1C0.3,1.7,0,2.7,0,3.6v10.7\n        c0,1,0.3,1.9,0.9,2.6C1.6,17.6,2.4,18,3.4,18h5c0.7,0,1.3-0.2,1.8-0.5c0.6-0.3,1-0.8,1.3-1.4l\n        1.5-2.6C13.2,13.1,13,13,14,13v0h-0.2 h0c0.3,0,0.7,0.1,0.8,0.5l1.4,2.6c0.3,0.6,0.8,1.1,1.3,\n        1.4c0.6,0.3,1.2,0.5,1.8,0.5h5c1,0,2-0.4,2.7-1.1c0.7-0.7,1.2-1.6,1.2-2.6 V3.6C28,2.7,27.5,\n        1.7,26.8,1.1z M7.4,11.8c-1.6,0-2.8-1.3-2.8-2.8c0-1.6,1.3-2.8,2.8-2.8c1.6,0,2.8,1.3,2.8,2.8\n        C10.2,10.5,8.9,11.8,7.4,11.8z M20.1,11.8c-1.6,0-2.8-1.3-2.8-2.8c0-1.6,1.3-2.8,2.8-2.8C21.7\n        ,6.2,23,7.4,23,9 C23,10.5,21.7,11.8,20.1,11.8z"/>\n    </svg>`,
      u = (e, t) =>
        `<svg class="${e}-svg-error" x="0px" y="0px"\n        width="${(28 /
          18) *
          t}px" height="${(28 / 18) *
          t}px" viewBox="0 0 28 28" xml:space="preserve">\n        <path d="M17.6,13.4c0-0.2-0.1-0.4-0.1-0.6c0-1.6,1.3-2.8,2.8-2.8s2.8,1.3,2.8,2.8s-1.3,2.8-2.8,2.8\n        c-0.2,0-0.4,0-0.6-0.1l5.9,5.9c0.5-0.2,0.9-0.4,1.3-0.8\n        c0.7-0.7,1.1-1.6,1.1-2.5V7.4c0-1-0.4-1.9-1.1-2.5c-0.7-0.7-1.6-1-2.5-1\n        H8.1 L17.6,13.4z"/>\n        <path d="M10.1,14.2c-0.5,0.9-1.4,1.4-2.4,1.4c-1.6,0-2.8-1.3-2.8-2.8c0-1.1,0.6-2,1.4-2.5\n        L0.9,5.1 C0.3,5.7,0,6.6,0,7.5v10.7c0,1,0.4,1.8,1.1,2.5c0.7,0.7,1.6,1,2.5,1\n        h5c0.7,0,1.3-0.1,1.8-0.5c0.6-0.3,1-0.8,1.3-1.4l1.3-2.6 L10.1,14.2z"/>\n        <path d="M25.5,27.5l-25-25C-0.1,2-0.1,1,0.5,0.4l0,0C1-0.1,2-0.1,2.6,0.4l25,25c0.6,0.6,0.6,1.5\n        ,0,2.1l0,0 C27,28.1,26,28.1,25.5,27.5z"/>\n    </svg>`;
    class c {
      constructor(e) {
        ((e = e || {}).color = e.color || 'rgb(80,168,252)'),
          (e.background = e.background || !1),
          (e.disabledOpacity = e.disabledOpacity || 0.5),
          (e.height = e.height || 55),
          (e.corners = e.corners || 'square'),
          (e.cssprefix = e.cssprefix || 'webvr-ui'),
          (e.textEnterXRTitle = e.textEnterXRTitle || 'GO IMMERSIVE'),
          (e.textXRNotFoundTitle =
            e.textXRNotFoundTitle || 'IMMERSION NOT SUPPORTED'),
          (e.textExitXRTitle = e.textExitXRTitle || 'RETURN TO THE REAL WORLD'),
          (e.onRequestSession = e.onRequestSession || function() {}),
          (e.onEndSession = e.onEndSession || function() {}),
          (e.injectCSS = !1 !== e.injectCSS),
          (this.options = e),
          (this._enabled = !1),
          (this.session = null),
          (this.domElement = e.domElement || l(e)),
          (this.__defaultDisplayStyle =
            this.domElement.style.display || 'initial'),
          this.domElement.addEventListener('click', () =>
            this.__onXRButtonClick()
          ),
          (this.__forceDisabled = !1),
          this.__setDisabledAttribute(!0),
          this.setTitle(this.options.textXRNotFoundTitle);
      }
      set enabled(e) {
        return (this._enabled = e), this.__updateButtonState(), this;
      }
      get enabled() {
        return this._enabled;
      }
      setSession(e) {
        return (this.session = e), this.__updateButtonState(), this;
      }
      setTitle(e) {
        return (
          (this.domElement.title = e),
          d(this.domElement, this.options.cssprefix, 'title', t => {
            e
              ? ((t.innerText = e), (t.style.display = 'initial'))
              : (t.style.display = 'none');
          }),
          this
        );
      }
      setTooltip(e) {
        return (this.domElement.title = e), this;
      }
      show() {
        return (
          (this.domElement.style.display = this.__defaultDisplayStyle), this
        );
      }
      hide() {
        return (this.domElement.style.display = 'none'), this;
      }
      enable() {
        return (
          this.__setDisabledAttribute(!1), (this.__forceDisabled = !1), this
        );
      }
      disable() {
        return (
          this.__setDisabledAttribute(!0), (this.__forceDisabled = !0), this
        );
      }
      remove() {
        this.domElement.parentElement &&
          this.domElement.parentElement.removeChild(this.domElement);
      }
      __setDisabledAttribute(e) {
        e || this.__forceDisabled
          ? this.domElement.setAttribute('disabled', 'true')
          : this.domElement.removeAttribute('disabled');
      }
      __onXRButtonClick() {
        if (this.session) this.options.onEndSession(this.session);
        else if (this._enabled) {
          let e = this.options.onRequestSession();
          e &&
            e.catch(e => {
              let t = `XRSession creation failed: ${e.message}`;
              this.setTooltip(t),
                console.error(t),
                this.__setDisabledAttribute(!0),
                this.domElement.setAttribute('error', 'true'),
                setTimeout(() => {
                  this.__setDisabledAttribute(!1),
                    this.domElement.setAttribute('error', 'false');
                }, 1e3);
            });
        }
      }
      __updateButtonState() {
        this.session
          ? (this.setTitle(this.options.textExitXRTitle),
            this.setTooltip('Exit XR presentation'),
            this.__setDisabledAttribute(!1))
          : this._enabled
          ? (this.setTitle(this.options.textEnterXRTitle),
            this.setTooltip('Enter XR'),
            this.__setDisabledAttribute(!1))
          : (this.setTitle(this.options.textXRNotFoundTitle),
            this.setTooltip('No XR headset found.'),
            this.__setDisabledAttribute(!0));
      }
    }
    const d = (e, t, r, i) => {
        const n = e.querySelector('.' + t + '-' + r);
        n && i(n);
      },
      A = WebGLRenderingContext,
      f = 1,
      p = 2,
      m = 4,
      g = 8,
      _ = 16,
      v = 32,
      w = 64,
      b = 255,
      y = 8,
      E = 3840,
      M = 12,
      x = 61440,
      S = 65280,
      R = 16,
      T = 983040,
      F = 0,
      C = 1,
      P = 2,
      I = 3,
      B = 4;
    function D(e, t, r) {
      let i = (e & t) >> r;
      switch (i) {
        case 0:
        case 1:
          return i;
        default:
          return i - 2 + A.SRC_COLOR;
      }
    }
    class L {
      constructor() {
        (this._state = f | m | _ | v),
          (this.blendFuncSrc = A.SRC_ALPHA),
          (this.blendFuncDst = A.ONE_MINUS_SRC_ALPHA),
          (this.depthFunc = A.LESS);
      }
      get cullFace() {
        return !!(this._state & f);
      }
      set cullFace(e) {
        e ? (this._state |= f) : (this._state &= ~f);
      }
      get blend() {
        return !!(this._state & p);
      }
      set blend(e) {
        e ? (this._state |= p) : (this._state &= ~p);
      }
      get depthTest() {
        return !!(this._state & m);
      }
      set depthTest(e) {
        e ? (this._state |= m) : (this._state &= ~m);
      }
      get stencilTest() {
        return !!(this._state & g);
      }
      set stencilTest(e) {
        e ? (this._state |= g) : (this._state &= ~g);
      }
      get colorMask() {
        return !!(this._state & _);
      }
      set colorMask(e) {
        e ? (this._state |= _) : (this._state &= ~_);
      }
      get depthMask() {
        return !!(this._state & v);
      }
      set depthMask(e) {
        e ? (this._state |= v) : (this._state &= ~v);
      }
      get depthFunc() {
        return ((this._state & T) >> R) + A.NEVER;
      }
      set depthFunc(e) {
        (e -= A.NEVER), (this._state &= ~T), (this._state |= e << R);
      }
      get stencilMask() {
        return !!(this._state & w);
      }
      set stencilMask(e) {
        e ? (this._state |= w) : (this._state &= ~w);
      }
      get blendFuncSrc() {
        return D(this._state, E, y);
      }
      set blendFuncSrc(e) {
        switch (e) {
          case 0:
          case 1:
            break;
          default:
            e = e - A.SRC_COLOR + 2;
        }
        (this._state &= ~E), (this._state |= e << y);
      }
      get blendFuncDst() {
        return D(this._state, x, M);
      }
      set blendFuncDst(e) {
        switch (e) {
          case 0:
          case 1:
            break;
          default:
            e = e - A.SRC_COLOR + 2;
        }
        (this._state &= ~x), (this._state |= e << M);
      }
    }
    class O {
      constructor(e) {
        (this._uniformName = e), (this._texture = null);
      }
      get texture() {
        return this._texture;
      }
      set texture(e) {
        this._texture = e;
      }
    }
    class N {
      constructor(e, t, r) {
        (this._uniformName = e),
          (this._value = t),
          (this._length = r),
          this._length || (this._length = t instanceof Array ? t.length : 1);
      }
      get value() {
        return this._value;
      }
      set value(e) {
        this._value = e;
      }
    }
    class U {
      constructor() {
        (this.state = new L()),
          (this.renderOrder = B),
          (this._samplers = []),
          (this._uniforms = []);
      }
      defineSampler(e) {
        let t = new O(e);
        return this._samplers.push(t), t;
      }
      defineUniform(e, t = null, r = 0) {
        let i = new N(e, t, r);
        return this._uniforms.push(i), i;
      }
      get materialName() {
        return null;
      }
      get vertexSource() {
        return null;
      }
      get fragmentSource() {
        return null;
      }
      getProgramDefines(e) {
        return {};
      }
    }
    let k = 'undefined' != typeof Float32Array ? Float32Array : Array;
    const G = Math.random;
    Math.PI;
    function V() {
      let e = new k(9);
      return (
        k != Float32Array &&
          ((e[1] = 0),
          (e[2] = 0),
          (e[3] = 0),
          (e[5] = 0),
          (e[6] = 0),
          (e[7] = 0)),
        (e[0] = 1),
        (e[4] = 1),
        (e[8] = 1),
        e
      );
    }
    function Q(e, t) {
      return (
        (e[0] = t[0]),
        (e[1] = t[1]),
        (e[2] = t[2]),
        (e[3] = t[4]),
        (e[4] = t[5]),
        (e[5] = t[6]),
        (e[6] = t[8]),
        (e[7] = t[9]),
        (e[8] = t[10]),
        e
      );
    }
    function z(e) {
      let t = new k(9);
      return (
        (t[0] = e[0]),
        (t[1] = e[1]),
        (t[2] = e[2]),
        (t[3] = e[3]),
        (t[4] = e[4]),
        (t[5] = e[5]),
        (t[6] = e[6]),
        (t[7] = e[7]),
        (t[8] = e[8]),
        t
      );
    }
    function X(e, t) {
      return (
        (e[0] = t[0]),
        (e[1] = t[1]),
        (e[2] = t[2]),
        (e[3] = t[3]),
        (e[4] = t[4]),
        (e[5] = t[5]),
        (e[6] = t[6]),
        (e[7] = t[7]),
        (e[8] = t[8]),
        e
      );
    }
    function H(e, t, r, i, n, s, a, o, l) {
      let h = new k(9);
      return (
        (h[0] = e),
        (h[1] = t),
        (h[2] = r),
        (h[3] = i),
        (h[4] = n),
        (h[5] = s),
        (h[6] = a),
        (h[7] = o),
        (h[8] = l),
        h
      );
    }
    function W(e, t, r, i, n, s, a, o, l, h) {
      return (
        (e[0] = t),
        (e[1] = r),
        (e[2] = i),
        (e[3] = n),
        (e[4] = s),
        (e[5] = a),
        (e[6] = o),
        (e[7] = l),
        (e[8] = h),
        e
      );
    }
    function j(e) {
      return (
        (e[0] = 1),
        (e[1] = 0),
        (e[2] = 0),
        (e[3] = 0),
        (e[4] = 1),
        (e[5] = 0),
        (e[6] = 0),
        (e[7] = 0),
        (e[8] = 1),
        e
      );
    }
    function q(e, t) {
      if (e === t) {
        let r = t[1],
          i = t[2],
          n = t[5];
        (e[1] = t[3]),
          (e[2] = t[6]),
          (e[3] = r),
          (e[5] = t[7]),
          (e[6] = i),
          (e[7] = n);
      } else
        (e[0] = t[0]),
          (e[1] = t[3]),
          (e[2] = t[6]),
          (e[3] = t[1]),
          (e[4] = t[4]),
          (e[5] = t[7]),
          (e[6] = t[2]),
          (e[7] = t[5]),
          (e[8] = t[8]);
      return e;
    }
    function Y(e, t) {
      let r = t[0],
        i = t[1],
        n = t[2],
        s = t[3],
        a = t[4],
        o = t[5],
        l = t[6],
        h = t[7],
        u = t[8],
        c = u * a - o * h,
        d = -u * s + o * l,
        A = h * s - a * l,
        f = r * c + i * d + n * A;
      return f
        ? ((f = 1 / f),
          (e[0] = c * f),
          (e[1] = (-u * i + n * h) * f),
          (e[2] = (o * i - n * a) * f),
          (e[3] = d * f),
          (e[4] = (u * r - n * l) * f),
          (e[5] = (-o * r + n * s) * f),
          (e[6] = A * f),
          (e[7] = (-h * r + i * l) * f),
          (e[8] = (a * r - i * s) * f),
          e)
        : null;
    }
    function Z(e, t) {
      let r = t[0],
        i = t[1],
        n = t[2],
        s = t[3],
        a = t[4],
        o = t[5],
        l = t[6],
        h = t[7],
        u = t[8];
      return (
        (e[0] = a * u - o * h),
        (e[1] = n * h - i * u),
        (e[2] = i * o - n * a),
        (e[3] = o * l - s * u),
        (e[4] = r * u - n * l),
        (e[5] = n * s - r * o),
        (e[6] = s * h - a * l),
        (e[7] = i * l - r * h),
        (e[8] = r * a - i * s),
        e
      );
    }
    function K(e) {
      let t = e[0],
        r = e[1],
        i = e[2],
        n = e[3],
        s = e[4],
        a = e[5],
        o = e[6],
        l = e[7],
        h = e[8];
      return t * (h * s - a * l) + r * (-h * n + a * o) + i * (l * n - s * o);
    }
    function J(e, t, r) {
      let i = t[0],
        n = t[1],
        s = t[2],
        a = t[3],
        o = t[4],
        l = t[5],
        h = t[6],
        u = t[7],
        c = t[8],
        d = r[0],
        A = r[1],
        f = r[2],
        p = r[3],
        m = r[4],
        g = r[5],
        _ = r[6],
        v = r[7],
        w = r[8];
      return (
        (e[0] = d * i + A * a + f * h),
        (e[1] = d * n + A * o + f * u),
        (e[2] = d * s + A * l + f * c),
        (e[3] = p * i + m * a + g * h),
        (e[4] = p * n + m * o + g * u),
        (e[5] = p * s + m * l + g * c),
        (e[6] = _ * i + v * a + w * h),
        (e[7] = _ * n + v * o + w * u),
        (e[8] = _ * s + v * l + w * c),
        e
      );
    }
    function $(e, t, r) {
      let i = t[0],
        n = t[1],
        s = t[2],
        a = t[3],
        o = t[4],
        l = t[5],
        h = t[6],
        u = t[7],
        c = t[8],
        d = r[0],
        A = r[1];
      return (
        (e[0] = i),
        (e[1] = n),
        (e[2] = s),
        (e[3] = a),
        (e[4] = o),
        (e[5] = l),
        (e[6] = d * i + A * a + h),
        (e[7] = d * n + A * o + u),
        (e[8] = d * s + A * l + c),
        e
      );
    }
    function ee(e, t, r) {
      let i = t[0],
        n = t[1],
        s = t[2],
        a = t[3],
        o = t[4],
        l = t[5],
        h = t[6],
        u = t[7],
        c = t[8],
        d = Math.sin(r),
        A = Math.cos(r);
      return (
        (e[0] = A * i + d * a),
        (e[1] = A * n + d * o),
        (e[2] = A * s + d * l),
        (e[3] = A * a - d * i),
        (e[4] = A * o - d * n),
        (e[5] = A * l - d * s),
        (e[6] = h),
        (e[7] = u),
        (e[8] = c),
        e
      );
    }
    function te(e, t, r) {
      let i = r[0],
        n = r[1];
      return (
        (e[0] = i * t[0]),
        (e[1] = i * t[1]),
        (e[2] = i * t[2]),
        (e[3] = n * t[3]),
        (e[4] = n * t[4]),
        (e[5] = n * t[5]),
        (e[6] = t[6]),
        (e[7] = t[7]),
        (e[8] = t[8]),
        e
      );
    }
    function re(e, t) {
      return (
        (e[0] = 1),
        (e[1] = 0),
        (e[2] = 0),
        (e[3] = 0),
        (e[4] = 1),
        (e[5] = 0),
        (e[6] = t[0]),
        (e[7] = t[1]),
        (e[8] = 1),
        e
      );
    }
    function ie(e, t) {
      let r = Math.sin(t),
        i = Math.cos(t);
      return (
        (e[0] = i),
        (e[1] = r),
        (e[2] = 0),
        (e[3] = -r),
        (e[4] = i),
        (e[5] = 0),
        (e[6] = 0),
        (e[7] = 0),
        (e[8] = 1),
        e
      );
    }
    function ne(e, t) {
      return (
        (e[0] = t[0]),
        (e[1] = 0),
        (e[2] = 0),
        (e[3] = 0),
        (e[4] = t[1]),
        (e[5] = 0),
        (e[6] = 0),
        (e[7] = 0),
        (e[8] = 1),
        e
      );
    }
    function se(e, t) {
      return (
        (e[0] = t[0]),
        (e[1] = t[1]),
        (e[2] = 0),
        (e[3] = t[2]),
        (e[4] = t[3]),
        (e[5] = 0),
        (e[6] = t[4]),
        (e[7] = t[5]),
        (e[8] = 1),
        e
      );
    }
    function ae(e, t) {
      let r = t[0],
        i = t[1],
        n = t[2],
        s = t[3],
        a = r + r,
        o = i + i,
        l = n + n,
        h = r * a,
        u = i * a,
        c = i * o,
        d = n * a,
        A = n * o,
        f = n * l,
        p = s * a,
        m = s * o,
        g = s * l;
      return (
        (e[0] = 1 - c - f),
        (e[3] = u - g),
        (e[6] = d + m),
        (e[1] = u + g),
        (e[4] = 1 - h - f),
        (e[7] = A - p),
        (e[2] = d - m),
        (e[5] = A + p),
        (e[8] = 1 - h - c),
        e
      );
    }
    function oe(e, t) {
      let r = t[0],
        i = t[1],
        n = t[2],
        s = t[3],
        a = t[4],
        o = t[5],
        l = t[6],
        h = t[7],
        u = t[8],
        c = t[9],
        d = t[10],
        A = t[11],
        f = t[12],
        p = t[13],
        m = t[14],
        g = t[15],
        _ = r * o - i * a,
        v = r * l - n * a,
        w = r * h - s * a,
        b = i * l - n * o,
        y = i * h - s * o,
        E = n * h - s * l,
        M = u * p - c * f,
        x = u * m - d * f,
        S = u * g - A * f,
        R = c * m - d * p,
        T = c * g - A * p,
        F = d * g - A * m,
        C = _ * F - v * T + w * R + b * S - y * x + E * M;
      return C
        ? ((C = 1 / C),
          (e[0] = (o * F - l * T + h * R) * C),
          (e[1] = (l * S - a * F - h * x) * C),
          (e[2] = (a * T - o * S + h * M) * C),
          (e[3] = (n * T - i * F - s * R) * C),
          (e[4] = (r * F - n * S + s * x) * C),
          (e[5] = (i * S - r * T - s * M) * C),
          (e[6] = (p * E - m * y + g * b) * C),
          (e[7] = (m * w - f * E - g * v) * C),
          (e[8] = (f * y - p * w + g * _) * C),
          e)
        : null;
    }
    function le(e, t, r) {
      return (
        (e[0] = 2 / t),
        (e[1] = 0),
        (e[2] = 0),
        (e[3] = 0),
        (e[4] = -2 / r),
        (e[5] = 0),
        (e[6] = -1),
        (e[7] = 1),
        (e[8] = 1),
        e
      );
    }
    function he(e) {
      return (
        'mat3(' +
        e[0] +
        ', ' +
        e[1] +
        ', ' +
        e[2] +
        ', ' +
        e[3] +
        ', ' +
        e[4] +
        ', ' +
        e[5] +
        ', ' +
        e[6] +
        ', ' +
        e[7] +
        ', ' +
        e[8] +
        ')'
      );
    }
    function ue(e) {
      return Math.sqrt(
        Math.pow(e[0], 2) +
          Math.pow(e[1], 2) +
          Math.pow(e[2], 2) +
          Math.pow(e[3], 2) +
          Math.pow(e[4], 2) +
          Math.pow(e[5], 2) +
          Math.pow(e[6], 2) +
          Math.pow(e[7], 2) +
          Math.pow(e[8], 2)
      );
    }
    function ce(e, t, r) {
      return (
        (e[0] = t[0] + r[0]),
        (e[1] = t[1] + r[1]),
        (e[2] = t[2] + r[2]),
        (e[3] = t[3] + r[3]),
        (e[4] = t[4] + r[4]),
        (e[5] = t[5] + r[5]),
        (e[6] = t[6] + r[6]),
        (e[7] = t[7] + r[7]),
        (e[8] = t[8] + r[8]),
        e
      );
    }
    function de(e, t, r) {
      return (
        (e[0] = t[0] - r[0]),
        (e[1] = t[1] - r[1]),
        (e[2] = t[2] - r[2]),
        (e[3] = t[3] - r[3]),
        (e[4] = t[4] - r[4]),
        (e[5] = t[5] - r[5]),
        (e[6] = t[6] - r[6]),
        (e[7] = t[7] - r[7]),
        (e[8] = t[8] - r[8]),
        e
      );
    }
    function Ae(e, t, r) {
      return (
        (e[0] = t[0] * r),
        (e[1] = t[1] * r),
        (e[2] = t[2] * r),
        (e[3] = t[3] * r),
        (e[4] = t[4] * r),
        (e[5] = t[5] * r),
        (e[6] = t[6] * r),
        (e[7] = t[7] * r),
        (e[8] = t[8] * r),
        e
      );
    }
    function fe(e, t, r, i) {
      return (
        (e[0] = t[0] + r[0] * i),
        (e[1] = t[1] + r[1] * i),
        (e[2] = t[2] + r[2] * i),
        (e[3] = t[3] + r[3] * i),
        (e[4] = t[4] + r[4] * i),
        (e[5] = t[5] + r[5] * i),
        (e[6] = t[6] + r[6] * i),
        (e[7] = t[7] + r[7] * i),
        (e[8] = t[8] + r[8] * i),
        e
      );
    }
    function pe(e, t) {
      return (
        e[0] === t[0] &&
        e[1] === t[1] &&
        e[2] === t[2] &&
        e[3] === t[3] &&
        e[4] === t[4] &&
        e[5] === t[5] &&
        e[6] === t[6] &&
        e[7] === t[7] &&
        e[8] === t[8]
      );
    }
    function me(e, t) {
      let r = e[0],
        i = e[1],
        n = e[2],
        s = e[3],
        a = e[4],
        o = e[5],
        l = e[6],
        h = e[7],
        u = e[8],
        c = t[0],
        d = t[1],
        A = t[2],
        f = t[3],
        p = t[4],
        m = t[5],
        g = t[6],
        _ = t[7],
        v = t[8];
      return (
        Math.abs(r - c) <= 1e-6 * Math.max(1, Math.abs(r), Math.abs(c)) &&
        Math.abs(i - d) <= 1e-6 * Math.max(1, Math.abs(i), Math.abs(d)) &&
        Math.abs(n - A) <= 1e-6 * Math.max(1, Math.abs(n), Math.abs(A)) &&
        Math.abs(s - f) <= 1e-6 * Math.max(1, Math.abs(s), Math.abs(f)) &&
        Math.abs(a - p) <= 1e-6 * Math.max(1, Math.abs(a), Math.abs(p)) &&
        Math.abs(o - m) <= 1e-6 * Math.max(1, Math.abs(o), Math.abs(m)) &&
        Math.abs(l - g) <= 1e-6 * Math.max(1, Math.abs(l), Math.abs(g)) &&
        Math.abs(h - _) <= 1e-6 * Math.max(1, Math.abs(h), Math.abs(_)) &&
        Math.abs(u - v) <= 1e-6 * Math.max(1, Math.abs(u), Math.abs(v))
      );
    }
    const ge = J,
      _e = de;
    function ve() {
      let e = new k(16);
      return (
        k != Float32Array &&
          ((e[1] = 0),
          (e[2] = 0),
          (e[3] = 0),
          (e[4] = 0),
          (e[6] = 0),
          (e[7] = 0),
          (e[8] = 0),
          (e[9] = 0),
          (e[11] = 0),
          (e[12] = 0),
          (e[13] = 0),
          (e[14] = 0)),
        (e[0] = 1),
        (e[5] = 1),
        (e[10] = 1),
        (e[15] = 1),
        e
      );
    }
    function we(e) {
      let t = new k(16);
      return (
        (t[0] = e[0]),
        (t[1] = e[1]),
        (t[2] = e[2]),
        (t[3] = e[3]),
        (t[4] = e[4]),
        (t[5] = e[5]),
        (t[6] = e[6]),
        (t[7] = e[7]),
        (t[8] = e[8]),
        (t[9] = e[9]),
        (t[10] = e[10]),
        (t[11] = e[11]),
        (t[12] = e[12]),
        (t[13] = e[13]),
        (t[14] = e[14]),
        (t[15] = e[15]),
        t
      );
    }
    function be(e, t) {
      return (
        (e[0] = t[0]),
        (e[1] = t[1]),
        (e[2] = t[2]),
        (e[3] = t[3]),
        (e[4] = t[4]),
        (e[5] = t[5]),
        (e[6] = t[6]),
        (e[7] = t[7]),
        (e[8] = t[8]),
        (e[9] = t[9]),
        (e[10] = t[10]),
        (e[11] = t[11]),
        (e[12] = t[12]),
        (e[13] = t[13]),
        (e[14] = t[14]),
        (e[15] = t[15]),
        e
      );
    }
    function ye(e, t, r, i, n, s, a, o, l, h, u, c, d, A, f, p) {
      let m = new k(16);
      return (
        (m[0] = e),
        (m[1] = t),
        (m[2] = r),
        (m[3] = i),
        (m[4] = n),
        (m[5] = s),
        (m[6] = a),
        (m[7] = o),
        (m[8] = l),
        (m[9] = h),
        (m[10] = u),
        (m[11] = c),
        (m[12] = d),
        (m[13] = A),
        (m[14] = f),
        (m[15] = p),
        m
      );
    }
    function Ee(e, t, r, i, n, s, a, o, l, h, u, c, d, A, f, p, m) {
      return (
        (e[0] = t),
        (e[1] = r),
        (e[2] = i),
        (e[3] = n),
        (e[4] = s),
        (e[5] = a),
        (e[6] = o),
        (e[7] = l),
        (e[8] = h),
        (e[9] = u),
        (e[10] = c),
        (e[11] = d),
        (e[12] = A),
        (e[13] = f),
        (e[14] = p),
        (e[15] = m),
        e
      );
    }
    function Me(e) {
      return (
        (e[0] = 1),
        (e[1] = 0),
        (e[2] = 0),
        (e[3] = 0),
        (e[4] = 0),
        (e[5] = 1),
        (e[6] = 0),
        (e[7] = 0),
        (e[8] = 0),
        (e[9] = 0),
        (e[10] = 1),
        (e[11] = 0),
        (e[12] = 0),
        (e[13] = 0),
        (e[14] = 0),
        (e[15] = 1),
        e
      );
    }
    function xe(e, t) {
      if (e === t) {
        let r = t[1],
          i = t[2],
          n = t[3],
          s = t[6],
          a = t[7],
          o = t[11];
        (e[1] = t[4]),
          (e[2] = t[8]),
          (e[3] = t[12]),
          (e[4] = r),
          (e[6] = t[9]),
          (e[7] = t[13]),
          (e[8] = i),
          (e[9] = s),
          (e[11] = t[14]),
          (e[12] = n),
          (e[13] = a),
          (e[14] = o);
      } else
        (e[0] = t[0]),
          (e[1] = t[4]),
          (e[2] = t[8]),
          (e[3] = t[12]),
          (e[4] = t[1]),
          (e[5] = t[5]),
          (e[6] = t[9]),
          (e[7] = t[13]),
          (e[8] = t[2]),
          (e[9] = t[6]),
          (e[10] = t[10]),
          (e[11] = t[14]),
          (e[12] = t[3]),
          (e[13] = t[7]),
          (e[14] = t[11]),
          (e[15] = t[15]);
      return e;
    }
    function Se(e, t) {
      let r = t[0],
        i = t[1],
        n = t[2],
        s = t[3],
        a = t[4],
        o = t[5],
        l = t[6],
        h = t[7],
        u = t[8],
        c = t[9],
        d = t[10],
        A = t[11],
        f = t[12],
        p = t[13],
        m = t[14],
        g = t[15],
        _ = r * o - i * a,
        v = r * l - n * a,
        w = r * h - s * a,
        b = i * l - n * o,
        y = i * h - s * o,
        E = n * h - s * l,
        M = u * p - c * f,
        x = u * m - d * f,
        S = u * g - A * f,
        R = c * m - d * p,
        T = c * g - A * p,
        F = d * g - A * m,
        C = _ * F - v * T + w * R + b * S - y * x + E * M;
      return C
        ? ((C = 1 / C),
          (e[0] = (o * F - l * T + h * R) * C),
          (e[1] = (n * T - i * F - s * R) * C),
          (e[2] = (p * E - m * y + g * b) * C),
          (e[3] = (d * y - c * E - A * b) * C),
          (e[4] = (l * S - a * F - h * x) * C),
          (e[5] = (r * F - n * S + s * x) * C),
          (e[6] = (m * w - f * E - g * v) * C),
          (e[7] = (u * E - d * w + A * v) * C),
          (e[8] = (a * T - o * S + h * M) * C),
          (e[9] = (i * S - r * T - s * M) * C),
          (e[10] = (f * y - p * w + g * _) * C),
          (e[11] = (c * w - u * y - A * _) * C),
          (e[12] = (o * x - a * R - l * M) * C),
          (e[13] = (r * R - i * x + n * M) * C),
          (e[14] = (p * v - f * b - m * _) * C),
          (e[15] = (u * b - c * v + d * _) * C),
          e)
        : null;
    }
    function Re(e, t) {
      let r = t[0],
        i = t[1],
        n = t[2],
        s = t[3],
        a = t[4],
        o = t[5],
        l = t[6],
        h = t[7],
        u = t[8],
        c = t[9],
        d = t[10],
        A = t[11],
        f = t[12],
        p = t[13],
        m = t[14],
        g = t[15];
      return (
        (e[0] =
          o * (d * g - A * m) - c * (l * g - h * m) + p * (l * A - h * d)),
        (e[1] = -(
          i * (d * g - A * m) -
          c * (n * g - s * m) +
          p * (n * A - s * d)
        )),
        (e[2] =
          i * (l * g - h * m) - o * (n * g - s * m) + p * (n * h - s * l)),
        (e[3] = -(
          i * (l * A - h * d) -
          o * (n * A - s * d) +
          c * (n * h - s * l)
        )),
        (e[4] = -(
          a * (d * g - A * m) -
          u * (l * g - h * m) +
          f * (l * A - h * d)
        )),
        (e[5] =
          r * (d * g - A * m) - u * (n * g - s * m) + f * (n * A - s * d)),
        (e[6] = -(
          r * (l * g - h * m) -
          a * (n * g - s * m) +
          f * (n * h - s * l)
        )),
        (e[7] =
          r * (l * A - h * d) - a * (n * A - s * d) + u * (n * h - s * l)),
        (e[8] =
          a * (c * g - A * p) - u * (o * g - h * p) + f * (o * A - h * c)),
        (e[9] = -(
          r * (c * g - A * p) -
          u * (i * g - s * p) +
          f * (i * A - s * c)
        )),
        (e[10] =
          r * (o * g - h * p) - a * (i * g - s * p) + f * (i * h - s * o)),
        (e[11] = -(
          r * (o * A - h * c) -
          a * (i * A - s * c) +
          u * (i * h - s * o)
        )),
        (e[12] = -(
          a * (c * m - d * p) -
          u * (o * m - l * p) +
          f * (o * d - l * c)
        )),
        (e[13] =
          r * (c * m - d * p) - u * (i * m - n * p) + f * (i * d - n * c)),
        (e[14] = -(
          r * (o * m - l * p) -
          a * (i * m - n * p) +
          f * (i * l - n * o)
        )),
        (e[15] =
          r * (o * d - l * c) - a * (i * d - n * c) + u * (i * l - n * o)),
        e
      );
    }
    function Te(e) {
      let t = e[0],
        r = e[1],
        i = e[2],
        n = e[3],
        s = e[4],
        a = e[5],
        o = e[6],
        l = e[7],
        h = e[8],
        u = e[9],
        c = e[10],
        d = e[11],
        A = e[12],
        f = e[13],
        p = e[14],
        m = e[15];
      return (
        (t * a - r * s) * (c * m - d * p) -
        (t * o - i * s) * (u * m - d * f) +
        (t * l - n * s) * (u * p - c * f) +
        (r * o - i * a) * (h * m - d * A) -
        (r * l - n * a) * (h * p - c * A) +
        (i * l - n * o) * (h * f - u * A)
      );
    }
    function Fe(e, t, r) {
      let i = t[0],
        n = t[1],
        s = t[2],
        a = t[3],
        o = t[4],
        l = t[5],
        h = t[6],
        u = t[7],
        c = t[8],
        d = t[9],
        A = t[10],
        f = t[11],
        p = t[12],
        m = t[13],
        g = t[14],
        _ = t[15],
        v = r[0],
        w = r[1],
        b = r[2],
        y = r[3];
      return (
        (e[0] = v * i + w * o + b * c + y * p),
        (e[1] = v * n + w * l + b * d + y * m),
        (e[2] = v * s + w * h + b * A + y * g),
        (e[3] = v * a + w * u + b * f + y * _),
        (v = r[4]),
        (w = r[5]),
        (b = r[6]),
        (y = r[7]),
        (e[4] = v * i + w * o + b * c + y * p),
        (e[5] = v * n + w * l + b * d + y * m),
        (e[6] = v * s + w * h + b * A + y * g),
        (e[7] = v * a + w * u + b * f + y * _),
        (v = r[8]),
        (w = r[9]),
        (b = r[10]),
        (y = r[11]),
        (e[8] = v * i + w * o + b * c + y * p),
        (e[9] = v * n + w * l + b * d + y * m),
        (e[10] = v * s + w * h + b * A + y * g),
        (e[11] = v * a + w * u + b * f + y * _),
        (v = r[12]),
        (w = r[13]),
        (b = r[14]),
        (y = r[15]),
        (e[12] = v * i + w * o + b * c + y * p),
        (e[13] = v * n + w * l + b * d + y * m),
        (e[14] = v * s + w * h + b * A + y * g),
        (e[15] = v * a + w * u + b * f + y * _),
        e
      );
    }
    function Ce(e, t, r) {
      let i,
        n,
        s,
        a,
        o,
        l,
        h,
        u,
        c,
        d,
        A,
        f,
        p = r[0],
        m = r[1],
        g = r[2];
      return (
        t === e
          ? ((e[12] = t[0] * p + t[4] * m + t[8] * g + t[12]),
            (e[13] = t[1] * p + t[5] * m + t[9] * g + t[13]),
            (e[14] = t[2] * p + t[6] * m + t[10] * g + t[14]),
            (e[15] = t[3] * p + t[7] * m + t[11] * g + t[15]))
          : ((i = t[0]),
            (n = t[1]),
            (s = t[2]),
            (a = t[3]),
            (o = t[4]),
            (l = t[5]),
            (h = t[6]),
            (u = t[7]),
            (c = t[8]),
            (d = t[9]),
            (A = t[10]),
            (f = t[11]),
            (e[0] = i),
            (e[1] = n),
            (e[2] = s),
            (e[3] = a),
            (e[4] = o),
            (e[5] = l),
            (e[6] = h),
            (e[7] = u),
            (e[8] = c),
            (e[9] = d),
            (e[10] = A),
            (e[11] = f),
            (e[12] = i * p + o * m + c * g + t[12]),
            (e[13] = n * p + l * m + d * g + t[13]),
            (e[14] = s * p + h * m + A * g + t[14]),
            (e[15] = a * p + u * m + f * g + t[15])),
        e
      );
    }
    function Pe(e, t, r) {
      let i = r[0],
        n = r[1],
        s = r[2];
      return (
        (e[0] = t[0] * i),
        (e[1] = t[1] * i),
        (e[2] = t[2] * i),
        (e[3] = t[3] * i),
        (e[4] = t[4] * n),
        (e[5] = t[5] * n),
        (e[6] = t[6] * n),
        (e[7] = t[7] * n),
        (e[8] = t[8] * s),
        (e[9] = t[9] * s),
        (e[10] = t[10] * s),
        (e[11] = t[11] * s),
        (e[12] = t[12]),
        (e[13] = t[13]),
        (e[14] = t[14]),
        (e[15] = t[15]),
        e
      );
    }
    function Ie(e, t, r, i) {
      let n,
        s,
        a,
        o,
        l,
        h,
        u,
        c,
        d,
        A,
        f,
        p,
        m,
        g,
        _,
        v,
        w,
        b,
        y,
        E,
        M,
        x,
        S,
        R,
        T = i[0],
        F = i[1],
        C = i[2],
        P = Math.sqrt(T * T + F * F + C * C);
      return P < 1e-6
        ? null
        : ((P = 1 / P),
          (T *= P),
          (F *= P),
          (C *= P),
          (n = Math.sin(r)),
          (s = Math.cos(r)),
          (a = 1 - s),
          (o = t[0]),
          (l = t[1]),
          (h = t[2]),
          (u = t[3]),
          (c = t[4]),
          (d = t[5]),
          (A = t[6]),
          (f = t[7]),
          (p = t[8]),
          (m = t[9]),
          (g = t[10]),
          (_ = t[11]),
          (v = T * T * a + s),
          (w = F * T * a + C * n),
          (b = C * T * a - F * n),
          (y = T * F * a - C * n),
          (E = F * F * a + s),
          (M = C * F * a + T * n),
          (x = T * C * a + F * n),
          (S = F * C * a - T * n),
          (R = C * C * a + s),
          (e[0] = o * v + c * w + p * b),
          (e[1] = l * v + d * w + m * b),
          (e[2] = h * v + A * w + g * b),
          (e[3] = u * v + f * w + _ * b),
          (e[4] = o * y + c * E + p * M),
          (e[5] = l * y + d * E + m * M),
          (e[6] = h * y + A * E + g * M),
          (e[7] = u * y + f * E + _ * M),
          (e[8] = o * x + c * S + p * R),
          (e[9] = l * x + d * S + m * R),
          (e[10] = h * x + A * S + g * R),
          (e[11] = u * x + f * S + _ * R),
          t !== e &&
            ((e[12] = t[12]),
            (e[13] = t[13]),
            (e[14] = t[14]),
            (e[15] = t[15])),
          e);
    }
    function Be(e, t, r) {
      let i = Math.sin(r),
        n = Math.cos(r),
        s = t[4],
        a = t[5],
        o = t[6],
        l = t[7],
        h = t[8],
        u = t[9],
        c = t[10],
        d = t[11];
      return (
        t !== e &&
          ((e[0] = t[0]),
          (e[1] = t[1]),
          (e[2] = t[2]),
          (e[3] = t[3]),
          (e[12] = t[12]),
          (e[13] = t[13]),
          (e[14] = t[14]),
          (e[15] = t[15])),
        (e[4] = s * n + h * i),
        (e[5] = a * n + u * i),
        (e[6] = o * n + c * i),
        (e[7] = l * n + d * i),
        (e[8] = h * n - s * i),
        (e[9] = u * n - a * i),
        (e[10] = c * n - o * i),
        (e[11] = d * n - l * i),
        e
      );
    }
    function De(e, t, r) {
      let i = Math.sin(r),
        n = Math.cos(r),
        s = t[0],
        a = t[1],
        o = t[2],
        l = t[3],
        h = t[8],
        u = t[9],
        c = t[10],
        d = t[11];
      return (
        t !== e &&
          ((e[4] = t[4]),
          (e[5] = t[5]),
          (e[6] = t[6]),
          (e[7] = t[7]),
          (e[12] = t[12]),
          (e[13] = t[13]),
          (e[14] = t[14]),
          (e[15] = t[15])),
        (e[0] = s * n - h * i),
        (e[1] = a * n - u * i),
        (e[2] = o * n - c * i),
        (e[3] = l * n - d * i),
        (e[8] = s * i + h * n),
        (e[9] = a * i + u * n),
        (e[10] = o * i + c * n),
        (e[11] = l * i + d * n),
        e
      );
    }
    function Le(e, t, r) {
      let i = Math.sin(r),
        n = Math.cos(r),
        s = t[0],
        a = t[1],
        o = t[2],
        l = t[3],
        h = t[4],
        u = t[5],
        c = t[6],
        d = t[7];
      return (
        t !== e &&
          ((e[8] = t[8]),
          (e[9] = t[9]),
          (e[10] = t[10]),
          (e[11] = t[11]),
          (e[12] = t[12]),
          (e[13] = t[13]),
          (e[14] = t[14]),
          (e[15] = t[15])),
        (e[0] = s * n + h * i),
        (e[1] = a * n + u * i),
        (e[2] = o * n + c * i),
        (e[3] = l * n + d * i),
        (e[4] = h * n - s * i),
        (e[5] = u * n - a * i),
        (e[6] = c * n - o * i),
        (e[7] = d * n - l * i),
        e
      );
    }
    function Oe(e, t) {
      return (
        (e[0] = 1),
        (e[1] = 0),
        (e[2] = 0),
        (e[3] = 0),
        (e[4] = 0),
        (e[5] = 1),
        (e[6] = 0),
        (e[7] = 0),
        (e[8] = 0),
        (e[9] = 0),
        (e[10] = 1),
        (e[11] = 0),
        (e[12] = t[0]),
        (e[13] = t[1]),
        (e[14] = t[2]),
        (e[15] = 1),
        e
      );
    }
    function Ne(e, t) {
      return (
        (e[0] = t[0]),
        (e[1] = 0),
        (e[2] = 0),
        (e[3] = 0),
        (e[4] = 0),
        (e[5] = t[1]),
        (e[6] = 0),
        (e[7] = 0),
        (e[8] = 0),
        (e[9] = 0),
        (e[10] = t[2]),
        (e[11] = 0),
        (e[12] = 0),
        (e[13] = 0),
        (e[14] = 0),
        (e[15] = 1),
        e
      );
    }
    function Ue(e, t, r) {
      let i,
        n,
        s,
        a = r[0],
        o = r[1],
        l = r[2],
        h = Math.sqrt(a * a + o * o + l * l);
      return h < 1e-6
        ? null
        : ((h = 1 / h),
          (a *= h),
          (o *= h),
          (l *= h),
          (i = Math.sin(t)),
          (n = Math.cos(t)),
          (s = 1 - n),
          (e[0] = a * a * s + n),
          (e[1] = o * a * s + l * i),
          (e[2] = l * a * s - o * i),
          (e[3] = 0),
          (e[4] = a * o * s - l * i),
          (e[5] = o * o * s + n),
          (e[6] = l * o * s + a * i),
          (e[7] = 0),
          (e[8] = a * l * s + o * i),
          (e[9] = o * l * s - a * i),
          (e[10] = l * l * s + n),
          (e[11] = 0),
          (e[12] = 0),
          (e[13] = 0),
          (e[14] = 0),
          (e[15] = 1),
          e);
    }
    function ke(e, t) {
      let r = Math.sin(t),
        i = Math.cos(t);
      return (
        (e[0] = 1),
        (e[1] = 0),
        (e[2] = 0),
        (e[3] = 0),
        (e[4] = 0),
        (e[5] = i),
        (e[6] = r),
        (e[7] = 0),
        (e[8] = 0),
        (e[9] = -r),
        (e[10] = i),
        (e[11] = 0),
        (e[12] = 0),
        (e[13] = 0),
        (e[14] = 0),
        (e[15] = 1),
        e
      );
    }
    function Ge(e, t) {
      let r = Math.sin(t),
        i = Math.cos(t);
      return (
        (e[0] = i),
        (e[1] = 0),
        (e[2] = -r),
        (e[3] = 0),
        (e[4] = 0),
        (e[5] = 1),
        (e[6] = 0),
        (e[7] = 0),
        (e[8] = r),
        (e[9] = 0),
        (e[10] = i),
        (e[11] = 0),
        (e[12] = 0),
        (e[13] = 0),
        (e[14] = 0),
        (e[15] = 1),
        e
      );
    }
    function Ve(e, t) {
      let r = Math.sin(t),
        i = Math.cos(t);
      return (
        (e[0] = i),
        (e[1] = r),
        (e[2] = 0),
        (e[3] = 0),
        (e[4] = -r),
        (e[5] = i),
        (e[6] = 0),
        (e[7] = 0),
        (e[8] = 0),
        (e[9] = 0),
        (e[10] = 1),
        (e[11] = 0),
        (e[12] = 0),
        (e[13] = 0),
        (e[14] = 0),
        (e[15] = 1),
        e
      );
    }
    function Qe(e, t, r) {
      let i = t[0],
        n = t[1],
        s = t[2],
        a = t[3],
        o = i + i,
        l = n + n,
        h = s + s,
        u = i * o,
        c = i * l,
        d = i * h,
        A = n * l,
        f = n * h,
        p = s * h,
        m = a * o,
        g = a * l,
        _ = a * h;
      return (
        (e[0] = 1 - (A + p)),
        (e[1] = c + _),
        (e[2] = d - g),
        (e[3] = 0),
        (e[4] = c - _),
        (e[5] = 1 - (u + p)),
        (e[6] = f + m),
        (e[7] = 0),
        (e[8] = d + g),
        (e[9] = f - m),
        (e[10] = 1 - (u + A)),
        (e[11] = 0),
        (e[12] = r[0]),
        (e[13] = r[1]),
        (e[14] = r[2]),
        (e[15] = 1),
        e
      );
    }
    function ze(e, t) {
      let r = new k(3),
        i = -t[0],
        n = -t[1],
        s = -t[2],
        a = t[3],
        o = t[4],
        l = t[5],
        h = t[6],
        u = t[7],
        c = i * i + n * n + s * s + a * a;
      return (
        c > 0
          ? ((r[0] = (2 * (o * a + u * i + l * s - h * n)) / c),
            (r[1] = (2 * (l * a + u * n + h * i - o * s)) / c),
            (r[2] = (2 * (h * a + u * s + o * n - l * i)) / c))
          : ((r[0] = 2 * (o * a + u * i + l * s - h * n)),
            (r[1] = 2 * (l * a + u * n + h * i - o * s)),
            (r[2] = 2 * (h * a + u * s + o * n - l * i))),
        Qe(e, t, r),
        e
      );
    }
    function Xe(e, t) {
      return (e[0] = t[12]), (e[1] = t[13]), (e[2] = t[14]), e;
    }
    function He(e, t) {
      let r = t[0],
        i = t[1],
        n = t[2],
        s = t[4],
        a = t[5],
        o = t[6],
        l = t[8],
        h = t[9],
        u = t[10];
      return (
        (e[0] = Math.sqrt(r * r + i * i + n * n)),
        (e[1] = Math.sqrt(s * s + a * a + o * o)),
        (e[2] = Math.sqrt(l * l + h * h + u * u)),
        e
      );
    }
    function We(e, t) {
      let r = t[0] + t[5] + t[10],
        i = 0;
      return (
        r > 0
          ? ((i = 2 * Math.sqrt(r + 1)),
            (e[3] = 0.25 * i),
            (e[0] = (t[6] - t[9]) / i),
            (e[1] = (t[8] - t[2]) / i),
            (e[2] = (t[1] - t[4]) / i))
          : t[0] > t[5] && t[0] > t[10]
          ? ((i = 2 * Math.sqrt(1 + t[0] - t[5] - t[10])),
            (e[3] = (t[6] - t[9]) / i),
            (e[0] = 0.25 * i),
            (e[1] = (t[1] + t[4]) / i),
            (e[2] = (t[8] + t[2]) / i))
          : t[5] > t[10]
          ? ((i = 2 * Math.sqrt(1 + t[5] - t[0] - t[10])),
            (e[3] = (t[8] - t[2]) / i),
            (e[0] = (t[1] + t[4]) / i),
            (e[1] = 0.25 * i),
            (e[2] = (t[6] + t[9]) / i))
          : ((i = 2 * Math.sqrt(1 + t[10] - t[0] - t[5])),
            (e[3] = (t[1] - t[4]) / i),
            (e[0] = (t[8] + t[2]) / i),
            (e[1] = (t[6] + t[9]) / i),
            (e[2] = 0.25 * i)),
        e
      );
    }
    function je(e, t, r, i) {
      let n = t[0],
        s = t[1],
        a = t[2],
        o = t[3],
        l = n + n,
        h = s + s,
        u = a + a,
        c = n * l,
        d = n * h,
        A = n * u,
        f = s * h,
        p = s * u,
        m = a * u,
        g = o * l,
        _ = o * h,
        v = o * u,
        w = i[0],
        b = i[1],
        y = i[2];
      return (
        (e[0] = (1 - (f + m)) * w),
        (e[1] = (d + v) * w),
        (e[2] = (A - _) * w),
        (e[3] = 0),
        (e[4] = (d - v) * b),
        (e[5] = (1 - (c + m)) * b),
        (e[6] = (p + g) * b),
        (e[7] = 0),
        (e[8] = (A + _) * y),
        (e[9] = (p - g) * y),
        (e[10] = (1 - (c + f)) * y),
        (e[11] = 0),
        (e[12] = r[0]),
        (e[13] = r[1]),
        (e[14] = r[2]),
        (e[15] = 1),
        e
      );
    }
    function qe(e, t, r, i, n) {
      let s = t[0],
        a = t[1],
        o = t[2],
        l = t[3],
        h = s + s,
        u = a + a,
        c = o + o,
        d = s * h,
        A = s * u,
        f = s * c,
        p = a * u,
        m = a * c,
        g = o * c,
        _ = l * h,
        v = l * u,
        w = l * c,
        b = i[0],
        y = i[1],
        E = i[2],
        M = n[0],
        x = n[1],
        S = n[2],
        R = (1 - (p + g)) * b,
        T = (A + w) * b,
        F = (f - v) * b,
        C = (A - w) * y,
        P = (1 - (d + g)) * y,
        I = (m + _) * y,
        B = (f + v) * E,
        D = (m - _) * E,
        L = (1 - (d + p)) * E;
      return (
        (e[0] = R),
        (e[1] = T),
        (e[2] = F),
        (e[3] = 0),
        (e[4] = C),
        (e[5] = P),
        (e[6] = I),
        (e[7] = 0),
        (e[8] = B),
        (e[9] = D),
        (e[10] = L),
        (e[11] = 0),
        (e[12] = r[0] + M - (R * M + C * x + B * S)),
        (e[13] = r[1] + x - (T * M + P * x + D * S)),
        (e[14] = r[2] + S - (F * M + I * x + L * S)),
        (e[15] = 1),
        e
      );
    }
    function Ye(e, t) {
      let r = t[0],
        i = t[1],
        n = t[2],
        s = t[3],
        a = r + r,
        o = i + i,
        l = n + n,
        h = r * a,
        u = i * a,
        c = i * o,
        d = n * a,
        A = n * o,
        f = n * l,
        p = s * a,
        m = s * o,
        g = s * l;
      return (
        (e[0] = 1 - c - f),
        (e[1] = u + g),
        (e[2] = d - m),
        (e[3] = 0),
        (e[4] = u - g),
        (e[5] = 1 - h - f),
        (e[6] = A + p),
        (e[7] = 0),
        (e[8] = d + m),
        (e[9] = A - p),
        (e[10] = 1 - h - c),
        (e[11] = 0),
        (e[12] = 0),
        (e[13] = 0),
        (e[14] = 0),
        (e[15] = 1),
        e
      );
    }
    function Ze(e, t, r, i, n, s, a) {
      let o = 1 / (r - t),
        l = 1 / (n - i),
        h = 1 / (s - a);
      return (
        (e[0] = 2 * s * o),
        (e[1] = 0),
        (e[2] = 0),
        (e[3] = 0),
        (e[4] = 0),
        (e[5] = 2 * s * l),
        (e[6] = 0),
        (e[7] = 0),
        (e[8] = (r + t) * o),
        (e[9] = (n + i) * l),
        (e[10] = (a + s) * h),
        (e[11] = -1),
        (e[12] = 0),
        (e[13] = 0),
        (e[14] = a * s * 2 * h),
        (e[15] = 0),
        e
      );
    }
    function Ke(e, t, r, i, n) {
      let s,
        a = 1 / Math.tan(t / 2);
      return (
        (e[0] = a / r),
        (e[1] = 0),
        (e[2] = 0),
        (e[3] = 0),
        (e[4] = 0),
        (e[5] = a),
        (e[6] = 0),
        (e[7] = 0),
        (e[8] = 0),
        (e[9] = 0),
        (e[11] = -1),
        (e[12] = 0),
        (e[13] = 0),
        (e[15] = 0),
        null != n && n !== 1 / 0
          ? ((s = 1 / (i - n)), (e[10] = (n + i) * s), (e[14] = 2 * n * i * s))
          : ((e[10] = -1), (e[14] = -2 * i)),
        e
      );
    }
    function Je(e, t, r, i) {
      let n = Math.tan((t.upDegrees * Math.PI) / 180),
        s = Math.tan((t.downDegrees * Math.PI) / 180),
        a = Math.tan((t.leftDegrees * Math.PI) / 180),
        o = Math.tan((t.rightDegrees * Math.PI) / 180),
        l = 2 / (a + o),
        h = 2 / (n + s);
      return (
        (e[0] = l),
        (e[1] = 0),
        (e[2] = 0),
        (e[3] = 0),
        (e[4] = 0),
        (e[5] = h),
        (e[6] = 0),
        (e[7] = 0),
        (e[8] = -(a - o) * l * 0.5),
        (e[9] = (n - s) * h * 0.5),
        (e[10] = i / (r - i)),
        (e[11] = -1),
        (e[12] = 0),
        (e[13] = 0),
        (e[14] = (i * r) / (r - i)),
        (e[15] = 0),
        e
      );
    }
    function $e(e, t, r, i, n, s, a) {
      let o = 1 / (t - r),
        l = 1 / (i - n),
        h = 1 / (s - a);
      return (
        (e[0] = -2 * o),
        (e[1] = 0),
        (e[2] = 0),
        (e[3] = 0),
        (e[4] = 0),
        (e[5] = -2 * l),
        (e[6] = 0),
        (e[7] = 0),
        (e[8] = 0),
        (e[9] = 0),
        (e[10] = 2 * h),
        (e[11] = 0),
        (e[12] = (t + r) * o),
        (e[13] = (n + i) * l),
        (e[14] = (a + s) * h),
        (e[15] = 1),
        e
      );
    }
    function et(e, t, r, i) {
      let n,
        s,
        a,
        o,
        l,
        h,
        u,
        c,
        d,
        A,
        f = t[0],
        p = t[1],
        m = t[2],
        g = i[0],
        _ = i[1],
        v = i[2],
        w = r[0],
        b = r[1],
        y = r[2];
      return Math.abs(f - w) < 1e-6 &&
        Math.abs(p - b) < 1e-6 &&
        Math.abs(m - y) < 1e-6
        ? Me(e)
        : ((u = f - w),
          (c = p - b),
          (d = m - y),
          (A = 1 / Math.sqrt(u * u + c * c + d * d)),
          (u *= A),
          (c *= A),
          (d *= A),
          (n = _ * d - v * c),
          (s = v * u - g * d),
          (a = g * c - _ * u),
          (A = Math.sqrt(n * n + s * s + a * a)),
          A
            ? ((A = 1 / A), (n *= A), (s *= A), (a *= A))
            : ((n = 0), (s = 0), (a = 0)),
          (o = c * a - d * s),
          (l = d * n - u * a),
          (h = u * s - c * n),
          (A = Math.sqrt(o * o + l * l + h * h)),
          A
            ? ((A = 1 / A), (o *= A), (l *= A), (h *= A))
            : ((o = 0), (l = 0), (h = 0)),
          (e[0] = n),
          (e[1] = o),
          (e[2] = u),
          (e[3] = 0),
          (e[4] = s),
          (e[5] = l),
          (e[6] = c),
          (e[7] = 0),
          (e[8] = a),
          (e[9] = h),
          (e[10] = d),
          (e[11] = 0),
          (e[12] = -(n * f + s * p + a * m)),
          (e[13] = -(o * f + l * p + h * m)),
          (e[14] = -(u * f + c * p + d * m)),
          (e[15] = 1),
          e);
    }
    function tt(e, t, r, i) {
      let n = t[0],
        s = t[1],
        a = t[2],
        o = i[0],
        l = i[1],
        h = i[2],
        u = n - r[0],
        c = s - r[1],
        d = a - r[2],
        A = u * u + c * c + d * d;
      A > 0 && ((A = 1 / Math.sqrt(A)), (u *= A), (c *= A), (d *= A));
      let f = l * d - h * c,
        p = h * u - o * d,
        m = o * c - l * u;
      return (
        (A = f * f + p * p + m * m),
        A > 0 && ((A = 1 / Math.sqrt(A)), (f *= A), (p *= A), (m *= A)),
        (e[0] = f),
        (e[1] = p),
        (e[2] = m),
        (e[3] = 0),
        (e[4] = c * m - d * p),
        (e[5] = d * f - u * m),
        (e[6] = u * p - c * f),
        (e[7] = 0),
        (e[8] = u),
        (e[9] = c),
        (e[10] = d),
        (e[11] = 0),
        (e[12] = n),
        (e[13] = s),
        (e[14] = a),
        (e[15] = 1),
        e
      );
    }
    function rt(e) {
      return (
        'mat4(' +
        e[0] +
        ', ' +
        e[1] +
        ', ' +
        e[2] +
        ', ' +
        e[3] +
        ', ' +
        e[4] +
        ', ' +
        e[5] +
        ', ' +
        e[6] +
        ', ' +
        e[7] +
        ', ' +
        e[8] +
        ', ' +
        e[9] +
        ', ' +
        e[10] +
        ', ' +
        e[11] +
        ', ' +
        e[12] +
        ', ' +
        e[13] +
        ', ' +
        e[14] +
        ', ' +
        e[15] +
        ')'
      );
    }
    function it(e) {
      return Math.sqrt(
        Math.pow(e[0], 2) +
          Math.pow(e[1], 2) +
          Math.pow(e[2], 2) +
          Math.pow(e[3], 2) +
          Math.pow(e[4], 2) +
          Math.pow(e[5], 2) +
          Math.pow(e[6], 2) +
          Math.pow(e[7], 2) +
          Math.pow(e[8], 2) +
          Math.pow(e[9], 2) +
          Math.pow(e[10], 2) +
          Math.pow(e[11], 2) +
          Math.pow(e[12], 2) +
          Math.pow(e[13], 2) +
          Math.pow(e[14], 2) +
          Math.pow(e[15], 2)
      );
    }
    function nt(e, t, r) {
      return (
        (e[0] = t[0] + r[0]),
        (e[1] = t[1] + r[1]),
        (e[2] = t[2] + r[2]),
        (e[3] = t[3] + r[3]),
        (e[4] = t[4] + r[4]),
        (e[5] = t[5] + r[5]),
        (e[6] = t[6] + r[6]),
        (e[7] = t[7] + r[7]),
        (e[8] = t[8] + r[8]),
        (e[9] = t[9] + r[9]),
        (e[10] = t[10] + r[10]),
        (e[11] = t[11] + r[11]),
        (e[12] = t[12] + r[12]),
        (e[13] = t[13] + r[13]),
        (e[14] = t[14] + r[14]),
        (e[15] = t[15] + r[15]),
        e
      );
    }
    function st(e, t, r) {
      return (
        (e[0] = t[0] - r[0]),
        (e[1] = t[1] - r[1]),
        (e[2] = t[2] - r[2]),
        (e[3] = t[3] - r[3]),
        (e[4] = t[4] - r[4]),
        (e[5] = t[5] - r[5]),
        (e[6] = t[6] - r[6]),
        (e[7] = t[7] - r[7]),
        (e[8] = t[8] - r[8]),
        (e[9] = t[9] - r[9]),
        (e[10] = t[10] - r[10]),
        (e[11] = t[11] - r[11]),
        (e[12] = t[12] - r[12]),
        (e[13] = t[13] - r[13]),
        (e[14] = t[14] - r[14]),
        (e[15] = t[15] - r[15]),
        e
      );
    }
    function at(e, t, r) {
      return (
        (e[0] = t[0] * r),
        (e[1] = t[1] * r),
        (e[2] = t[2] * r),
        (e[3] = t[3] * r),
        (e[4] = t[4] * r),
        (e[5] = t[5] * r),
        (e[6] = t[6] * r),
        (e[7] = t[7] * r),
        (e[8] = t[8] * r),
        (e[9] = t[9] * r),
        (e[10] = t[10] * r),
        (e[11] = t[11] * r),
        (e[12] = t[12] * r),
        (e[13] = t[13] * r),
        (e[14] = t[14] * r),
        (e[15] = t[15] * r),
        e
      );
    }
    function ot(e, t, r, i) {
      return (
        (e[0] = t[0] + r[0] * i),
        (e[1] = t[1] + r[1] * i),
        (e[2] = t[2] + r[2] * i),
        (e[3] = t[3] + r[3] * i),
        (e[4] = t[4] + r[4] * i),
        (e[5] = t[5] + r[5] * i),
        (e[6] = t[6] + r[6] * i),
        (e[7] = t[7] + r[7] * i),
        (e[8] = t[8] + r[8] * i),
        (e[9] = t[9] + r[9] * i),
        (e[10] = t[10] + r[10] * i),
        (e[11] = t[11] + r[11] * i),
        (e[12] = t[12] + r[12] * i),
        (e[13] = t[13] + r[13] * i),
        (e[14] = t[14] + r[14] * i),
        (e[15] = t[15] + r[15] * i),
        e
      );
    }
    function lt(e, t) {
      return (
        e[0] === t[0] &&
        e[1] === t[1] &&
        e[2] === t[2] &&
        e[3] === t[3] &&
        e[4] === t[4] &&
        e[5] === t[5] &&
        e[6] === t[6] &&
        e[7] === t[7] &&
        e[8] === t[8] &&
        e[9] === t[9] &&
        e[10] === t[10] &&
        e[11] === t[11] &&
        e[12] === t[12] &&
        e[13] === t[13] &&
        e[14] === t[14] &&
        e[15] === t[15]
      );
    }
    function ht(e, t) {
      let r = e[0],
        i = e[1],
        n = e[2],
        s = e[3],
        a = e[4],
        o = e[5],
        l = e[6],
        h = e[7],
        u = e[8],
        c = e[9],
        d = e[10],
        A = e[11],
        f = e[12],
        p = e[13],
        m = e[14],
        g = e[15],
        _ = t[0],
        v = t[1],
        w = t[2],
        b = t[3],
        y = t[4],
        E = t[5],
        M = t[6],
        x = t[7],
        S = t[8],
        R = t[9],
        T = t[10],
        F = t[11],
        C = t[12],
        P = t[13],
        I = t[14],
        B = t[15];
      return (
        Math.abs(r - _) <= 1e-6 * Math.max(1, Math.abs(r), Math.abs(_)) &&
        Math.abs(i - v) <= 1e-6 * Math.max(1, Math.abs(i), Math.abs(v)) &&
        Math.abs(n - w) <= 1e-6 * Math.max(1, Math.abs(n), Math.abs(w)) &&
        Math.abs(s - b) <= 1e-6 * Math.max(1, Math.abs(s), Math.abs(b)) &&
        Math.abs(a - y) <= 1e-6 * Math.max(1, Math.abs(a), Math.abs(y)) &&
        Math.abs(o - E) <= 1e-6 * Math.max(1, Math.abs(o), Math.abs(E)) &&
        Math.abs(l - M) <= 1e-6 * Math.max(1, Math.abs(l), Math.abs(M)) &&
        Math.abs(h - x) <= 1e-6 * Math.max(1, Math.abs(h), Math.abs(x)) &&
        Math.abs(u - S) <= 1e-6 * Math.max(1, Math.abs(u), Math.abs(S)) &&
        Math.abs(c - R) <= 1e-6 * Math.max(1, Math.abs(c), Math.abs(R)) &&
        Math.abs(d - T) <= 1e-6 * Math.max(1, Math.abs(d), Math.abs(T)) &&
        Math.abs(A - F) <= 1e-6 * Math.max(1, Math.abs(A), Math.abs(F)) &&
        Math.abs(f - C) <= 1e-6 * Math.max(1, Math.abs(f), Math.abs(C)) &&
        Math.abs(p - P) <= 1e-6 * Math.max(1, Math.abs(p), Math.abs(P)) &&
        Math.abs(m - I) <= 1e-6 * Math.max(1, Math.abs(m), Math.abs(I)) &&
        Math.abs(g - B) <= 1e-6 * Math.max(1, Math.abs(g), Math.abs(B))
      );
    }
    const ut = Fe,
      ct = st;
    function dt() {
      let e = new k(3);
      return k != Float32Array && ((e[0] = 0), (e[1] = 0), (e[2] = 0)), e;
    }
    function At(e) {
      var t = new k(3);
      return (t[0] = e[0]), (t[1] = e[1]), (t[2] = e[2]), t;
    }
    function ft(e) {
      let t = e[0],
        r = e[1],
        i = e[2];
      return Math.sqrt(t * t + r * r + i * i);
    }
    function pt(e, t, r) {
      let i = new k(3);
      return (i[0] = e), (i[1] = t), (i[2] = r), i;
    }
    function mt(e, t) {
      return (e[0] = t[0]), (e[1] = t[1]), (e[2] = t[2]), e;
    }
    function gt(e, t, r, i) {
      return (e[0] = t), (e[1] = r), (e[2] = i), e;
    }
    function _t(e, t, r) {
      return (
        (e[0] = t[0] + r[0]), (e[1] = t[1] + r[1]), (e[2] = t[2] + r[2]), e
      );
    }
    function vt(e, t, r) {
      return (
        (e[0] = t[0] - r[0]), (e[1] = t[1] - r[1]), (e[2] = t[2] - r[2]), e
      );
    }
    function wt(e, t, r) {
      return (
        (e[0] = t[0] * r[0]), (e[1] = t[1] * r[1]), (e[2] = t[2] * r[2]), e
      );
    }
    function bt(e, t, r) {
      return (
        (e[0] = t[0] / r[0]), (e[1] = t[1] / r[1]), (e[2] = t[2] / r[2]), e
      );
    }
    function yt(e, t) {
      return (
        (e[0] = Math.ceil(t[0])),
        (e[1] = Math.ceil(t[1])),
        (e[2] = Math.ceil(t[2])),
        e
      );
    }
    function Et(e, t) {
      return (
        (e[0] = Math.floor(t[0])),
        (e[1] = Math.floor(t[1])),
        (e[2] = Math.floor(t[2])),
        e
      );
    }
    function Mt(e, t, r) {
      return (
        (e[0] = Math.min(t[0], r[0])),
        (e[1] = Math.min(t[1], r[1])),
        (e[2] = Math.min(t[2], r[2])),
        e
      );
    }
    function xt(e, t, r) {
      return (
        (e[0] = Math.max(t[0], r[0])),
        (e[1] = Math.max(t[1], r[1])),
        (e[2] = Math.max(t[2], r[2])),
        e
      );
    }
    function St(e, t) {
      return (
        (e[0] = Math.round(t[0])),
        (e[1] = Math.round(t[1])),
        (e[2] = Math.round(t[2])),
        e
      );
    }
    function Rt(e, t, r) {
      return (e[0] = t[0] * r), (e[1] = t[1] * r), (e[2] = t[2] * r), e;
    }
    function Tt(e, t, r, i) {
      return (
        (e[0] = t[0] + r[0] * i),
        (e[1] = t[1] + r[1] * i),
        (e[2] = t[2] + r[2] * i),
        e
      );
    }
    function Ft(e, t) {
      let r = t[0] - e[0],
        i = t[1] - e[1],
        n = t[2] - e[2];
      return Math.sqrt(r * r + i * i + n * n);
    }
    function Ct(e, t) {
      let r = t[0] - e[0],
        i = t[1] - e[1],
        n = t[2] - e[2];
      return r * r + i * i + n * n;
    }
    function Pt(e) {
      let t = e[0],
        r = e[1],
        i = e[2];
      return t * t + r * r + i * i;
    }
    function It(e, t) {
      return (e[0] = -t[0]), (e[1] = -t[1]), (e[2] = -t[2]), e;
    }
    function Bt(e, t) {
      return (e[0] = 1 / t[0]), (e[1] = 1 / t[1]), (e[2] = 1 / t[2]), e;
    }
    function Dt(e, t) {
      let r = t[0],
        i = t[1],
        n = t[2],
        s = r * r + i * i + n * n;
      return (
        s > 0 &&
          ((s = 1 / Math.sqrt(s)),
          (e[0] = t[0] * s),
          (e[1] = t[1] * s),
          (e[2] = t[2] * s)),
        e
      );
    }
    function Lt(e, t) {
      return e[0] * t[0] + e[1] * t[1] + e[2] * t[2];
    }
    function Ot(e, t, r) {
      let i = t[0],
        n = t[1],
        s = t[2],
        a = r[0],
        o = r[1],
        l = r[2];
      return (
        (e[0] = n * l - s * o),
        (e[1] = s * a - i * l),
        (e[2] = i * o - n * a),
        e
      );
    }
    function Nt(e, t, r, i) {
      let n = t[0],
        s = t[1],
        a = t[2];
      return (
        (e[0] = n + i * (r[0] - n)),
        (e[1] = s + i * (r[1] - s)),
        (e[2] = a + i * (r[2] - a)),
        e
      );
    }
    function Ut(e, t, r, i, n, s) {
      let a = s * s,
        o = a * (2 * s - 3) + 1,
        l = a * (s - 2) + s,
        h = a * (s - 1),
        u = a * (3 - 2 * s);
      return (
        (e[0] = t[0] * o + r[0] * l + i[0] * h + n[0] * u),
        (e[1] = t[1] * o + r[1] * l + i[1] * h + n[1] * u),
        (e[2] = t[2] * o + r[2] * l + i[2] * h + n[2] * u),
        e
      );
    }
    function kt(e, t, r, i, n, s) {
      let a = 1 - s,
        o = a * a,
        l = s * s,
        h = o * a,
        u = 3 * s * o,
        c = 3 * l * a,
        d = l * s;
      return (
        (e[0] = t[0] * h + r[0] * u + i[0] * c + n[0] * d),
        (e[1] = t[1] * h + r[1] * u + i[1] * c + n[1] * d),
        (e[2] = t[2] * h + r[2] * u + i[2] * c + n[2] * d),
        e
      );
    }
    function Gt(e, t) {
      t = t || 1;
      let r = 2 * G() * Math.PI,
        i = 2 * G() - 1,
        n = Math.sqrt(1 - i * i) * t;
      return (
        (e[0] = Math.cos(r) * n), (e[1] = Math.sin(r) * n), (e[2] = i * t), e
      );
    }
    function Vt(e, t, r) {
      let i = t[0],
        n = t[1],
        s = t[2],
        a = r[3] * i + r[7] * n + r[11] * s + r[15];
      return (
        (a = a || 1),
        (e[0] = (r[0] * i + r[4] * n + r[8] * s + r[12]) / a),
        (e[1] = (r[1] * i + r[5] * n + r[9] * s + r[13]) / a),
        (e[2] = (r[2] * i + r[6] * n + r[10] * s + r[14]) / a),
        e
      );
    }
    function Qt(e, t, r) {
      let i = t[0],
        n = t[1],
        s = t[2];
      return (
        (e[0] = i * r[0] + n * r[3] + s * r[6]),
        (e[1] = i * r[1] + n * r[4] + s * r[7]),
        (e[2] = i * r[2] + n * r[5] + s * r[8]),
        e
      );
    }
    function zt(e, t, r) {
      let i = r[0],
        n = r[1],
        s = r[2],
        a = r[3],
        o = t[0],
        l = t[1],
        h = t[2],
        u = n * h - s * l,
        c = s * o - i * h,
        d = i * l - n * o,
        A = n * d - s * c,
        f = s * u - i * d,
        p = i * c - n * u,
        m = 2 * a;
      return (
        (u *= m),
        (c *= m),
        (d *= m),
        (A *= 2),
        (f *= 2),
        (p *= 2),
        (e[0] = o + u + A),
        (e[1] = l + c + f),
        (e[2] = h + d + p),
        e
      );
    }
    function Xt(e, t, r, i) {
      let n = [],
        s = [];
      return (
        (n[0] = t[0] - r[0]),
        (n[1] = t[1] - r[1]),
        (n[2] = t[2] - r[2]),
        (s[0] = n[0]),
        (s[1] = n[1] * Math.cos(i) - n[2] * Math.sin(i)),
        (s[2] = n[1] * Math.sin(i) + n[2] * Math.cos(i)),
        (e[0] = s[0] + r[0]),
        (e[1] = s[1] + r[1]),
        (e[2] = s[2] + r[2]),
        e
      );
    }
    function Ht(e, t, r, i) {
      let n = [],
        s = [];
      return (
        (n[0] = t[0] - r[0]),
        (n[1] = t[1] - r[1]),
        (n[2] = t[2] - r[2]),
        (s[0] = n[2] * Math.sin(i) + n[0] * Math.cos(i)),
        (s[1] = n[1]),
        (s[2] = n[2] * Math.cos(i) - n[0] * Math.sin(i)),
        (e[0] = s[0] + r[0]),
        (e[1] = s[1] + r[1]),
        (e[2] = s[2] + r[2]),
        e
      );
    }
    function Wt(e, t, r, i) {
      let n = [],
        s = [];
      return (
        (n[0] = t[0] - r[0]),
        (n[1] = t[1] - r[1]),
        (n[2] = t[2] - r[2]),
        (s[0] = n[0] * Math.cos(i) - n[1] * Math.sin(i)),
        (s[1] = n[0] * Math.sin(i) + n[1] * Math.cos(i)),
        (s[2] = n[2]),
        (e[0] = s[0] + r[0]),
        (e[1] = s[1] + r[1]),
        (e[2] = s[2] + r[2]),
        e
      );
    }
    function jt(e, t) {
      let r = pt(e[0], e[1], e[2]),
        i = pt(t[0], t[1], t[2]);
      Dt(r, r), Dt(i, i);
      let n = Lt(r, i);
      return n > 1 ? 0 : n < -1 ? Math.PI : Math.acos(n);
    }
    function qt(e) {
      return 'vec3(' + e[0] + ', ' + e[1] + ', ' + e[2] + ')';
    }
    function Yt(e, t) {
      return e[0] === t[0] && e[1] === t[1] && e[2] === t[2];
    }
    function Zt(e, t) {
      let r = e[0],
        i = e[1],
        n = e[2],
        s = t[0],
        a = t[1],
        o = t[2];
      return (
        Math.abs(r - s) <= 1e-6 * Math.max(1, Math.abs(r), Math.abs(s)) &&
        Math.abs(i - a) <= 1e-6 * Math.max(1, Math.abs(i), Math.abs(a)) &&
        Math.abs(n - o) <= 1e-6 * Math.max(1, Math.abs(n), Math.abs(o))
      );
    }
    const Kt = vt,
      Jt = wt,
      $t = bt,
      er = Ft,
      tr = Ct,
      rr = ft,
      ir = Pt,
      nr = (function() {
        let e = dt();
        return function(t, r, i, n, s, a) {
          let o, l;
          for (
            r || (r = 3),
              i || (i = 0),
              l = n ? Math.min(n * r + i, t.length) : t.length,
              o = i;
            o < l;
            o += r
          )
            (e[0] = t[o]),
              (e[1] = t[o + 1]),
              (e[2] = t[o + 2]),
              s(e, e, a),
              (t[o] = e[0]),
              (t[o + 1] = e[1]),
              (t[o + 2] = e[2]);
          return t;
        };
      })();
    function sr(e) {
      let t = e[0],
        r = e[1],
        i = e[2],
        n = e[3];
      return Math.sqrt(t * t + r * r + i * i + n * n);
    }
    function ar(e) {
      let t = e[0],
        r = e[1],
        i = e[2],
        n = e[3];
      return t * t + r * r + i * i + n * n;
    }
    !(function() {
      let e = (function() {
        let e = new k(4);
        return (
          k != Float32Array && ((e[0] = 0), (e[1] = 0), (e[2] = 0), (e[3] = 0)),
          e
        );
      })();
    })();
    function or() {
      let e = new k(4);
      return (
        k != Float32Array && ((e[0] = 0), (e[1] = 0), (e[2] = 0)), (e[3] = 1), e
      );
    }
    function lr(e) {
      return (e[0] = 0), (e[1] = 0), (e[2] = 0), (e[3] = 1), e;
    }
    function hr(e, t, r) {
      r *= 0.5;
      let i = Math.sin(r);
      return (
        (e[0] = i * t[0]),
        (e[1] = i * t[1]),
        (e[2] = i * t[2]),
        (e[3] = Math.cos(r)),
        e
      );
    }
    function ur(e, t) {
      let r = 2 * Math.acos(t[3]),
        i = Math.sin(r / 2);
      return (
        i > 1e-6
          ? ((e[0] = t[0] / i), (e[1] = t[1] / i), (e[2] = t[2] / i))
          : ((e[0] = 1), (e[1] = 0), (e[2] = 0)),
        r
      );
    }
    function cr(e, t, r) {
      let i = t[0],
        n = t[1],
        s = t[2],
        a = t[3],
        o = r[0],
        l = r[1],
        h = r[2],
        u = r[3];
      return (
        (e[0] = i * u + a * o + n * h - s * l),
        (e[1] = n * u + a * l + s * o - i * h),
        (e[2] = s * u + a * h + i * l - n * o),
        (e[3] = a * u - i * o - n * l - s * h),
        e
      );
    }
    function dr(e, t, r) {
      r *= 0.5;
      let i = t[0],
        n = t[1],
        s = t[2],
        a = t[3],
        o = Math.sin(r),
        l = Math.cos(r);
      return (
        (e[0] = i * l + a * o),
        (e[1] = n * l + s * o),
        (e[2] = s * l - n * o),
        (e[3] = a * l - i * o),
        e
      );
    }
    function Ar(e, t, r) {
      r *= 0.5;
      let i = t[0],
        n = t[1],
        s = t[2],
        a = t[3],
        o = Math.sin(r),
        l = Math.cos(r);
      return (
        (e[0] = i * l - s * o),
        (e[1] = n * l + a * o),
        (e[2] = s * l + i * o),
        (e[3] = a * l - n * o),
        e
      );
    }
    function fr(e, t, r) {
      r *= 0.5;
      let i = t[0],
        n = t[1],
        s = t[2],
        a = t[3],
        o = Math.sin(r),
        l = Math.cos(r);
      return (
        (e[0] = i * l + n * o),
        (e[1] = n * l - i * o),
        (e[2] = s * l + a * o),
        (e[3] = a * l - s * o),
        e
      );
    }
    function pr(e, t) {
      let r = t[0],
        i = t[1],
        n = t[2];
      return (
        (e[0] = r),
        (e[1] = i),
        (e[2] = n),
        (e[3] = Math.sqrt(Math.abs(1 - r * r - i * i - n * n))),
        e
      );
    }
    function mr(e, t, r, i) {
      let n,
        s,
        a,
        o,
        l,
        h = t[0],
        u = t[1],
        c = t[2],
        d = t[3],
        A = r[0],
        f = r[1],
        p = r[2],
        m = r[3];
      return (
        (s = h * A + u * f + c * p + d * m),
        s < 0 && ((s = -s), (A = -A), (f = -f), (p = -p), (m = -m)),
        1 - s > 1e-6
          ? ((n = Math.acos(s)),
            (a = Math.sin(n)),
            (o = Math.sin((1 - i) * n) / a),
            (l = Math.sin(i * n) / a))
          : ((o = 1 - i), (l = i)),
        (e[0] = o * h + l * A),
        (e[1] = o * u + l * f),
        (e[2] = o * c + l * p),
        (e[3] = o * d + l * m),
        e
      );
    }
    function gr(e) {
      let t = G(),
        r = G(),
        i = G(),
        n = Math.sqrt(1 - t),
        s = Math.sqrt(t);
      return (
        (e[0] = n * Math.sin(2 * Math.PI * r)),
        (e[1] = n * Math.cos(2 * Math.PI * r)),
        (e[2] = s * Math.sin(2 * Math.PI * i)),
        (e[3] = s * Math.cos(2 * Math.PI * i)),
        e
      );
    }
    function _r(e, t) {
      let r = t[0],
        i = t[1],
        n = t[2],
        s = t[3],
        a = r * r + i * i + n * n + s * s,
        o = a ? 1 / a : 0;
      return (
        (e[0] = -r * o), (e[1] = -i * o), (e[2] = -n * o), (e[3] = s * o), e
      );
    }
    function vr(e, t) {
      return (e[0] = -t[0]), (e[1] = -t[1]), (e[2] = -t[2]), (e[3] = t[3]), e;
    }
    function wr(e, t) {
      let r,
        i = t[0] + t[4] + t[8];
      if (i > 0)
        (r = Math.sqrt(i + 1)),
          (e[3] = 0.5 * r),
          (r = 0.5 / r),
          (e[0] = (t[5] - t[7]) * r),
          (e[1] = (t[6] - t[2]) * r),
          (e[2] = (t[1] - t[3]) * r);
      else {
        let i = 0;
        t[4] > t[0] && (i = 1), t[8] > t[3 * i + i] && (i = 2);
        let n = (i + 1) % 3,
          s = (i + 2) % 3;
        (r = Math.sqrt(t[3 * i + i] - t[3 * n + n] - t[3 * s + s] + 1)),
          (e[i] = 0.5 * r),
          (r = 0.5 / r),
          (e[3] = (t[3 * n + s] - t[3 * s + n]) * r),
          (e[n] = (t[3 * n + i] + t[3 * i + n]) * r),
          (e[s] = (t[3 * s + i] + t[3 * i + s]) * r);
      }
      return e;
    }
    function br(e, t, r, i) {
      let n = (0.5 * Math.PI) / 180;
      (t *= n), (r *= n), (i *= n);
      let s = Math.sin(t),
        a = Math.cos(t),
        o = Math.sin(r),
        l = Math.cos(r),
        h = Math.sin(i),
        u = Math.cos(i);
      return (
        (e[0] = s * l * u - a * o * h),
        (e[1] = a * o * u + s * l * h),
        (e[2] = a * l * h - s * o * u),
        (e[3] = a * l * u + s * o * h),
        e
      );
    }
    function yr(e) {
      return 'quat(' + e[0] + ', ' + e[1] + ', ' + e[2] + ', ' + e[3] + ')';
    }
    const Er = function(e) {
        let t = new k(4);
        return (t[0] = e[0]), (t[1] = e[1]), (t[2] = e[2]), (t[3] = e[3]), t;
      },
      Mr = function(e, t, r, i) {
        let n = new k(4);
        return (n[0] = e), (n[1] = t), (n[2] = r), (n[3] = i), n;
      },
      xr = function(e, t) {
        return (e[0] = t[0]), (e[1] = t[1]), (e[2] = t[2]), (e[3] = t[3]), e;
      },
      Sr = function(e, t, r, i, n) {
        return (e[0] = t), (e[1] = r), (e[2] = i), (e[3] = n), e;
      },
      Rr = function(e, t, r) {
        return (
          (e[0] = t[0] + r[0]),
          (e[1] = t[1] + r[1]),
          (e[2] = t[2] + r[2]),
          (e[3] = t[3] + r[3]),
          e
        );
      },
      Tr = cr,
      Fr = function(e, t, r) {
        return (
          (e[0] = t[0] * r),
          (e[1] = t[1] * r),
          (e[2] = t[2] * r),
          (e[3] = t[3] * r),
          e
        );
      },
      Cr = function(e, t) {
        return e[0] * t[0] + e[1] * t[1] + e[2] * t[2] + e[3] * t[3];
      },
      Pr = function(e, t, r, i) {
        let n = t[0],
          s = t[1],
          a = t[2],
          o = t[3];
        return (
          (e[0] = n + i * (r[0] - n)),
          (e[1] = s + i * (r[1] - s)),
          (e[2] = a + i * (r[2] - a)),
          (e[3] = o + i * (r[3] - o)),
          e
        );
      },
      Ir = sr,
      Br = Ir,
      Dr = ar,
      Lr = Dr,
      Or = function(e, t) {
        let r = t[0],
          i = t[1],
          n = t[2],
          s = t[3],
          a = r * r + i * i + n * n + s * s;
        return (
          a > 0 &&
            ((a = 1 / Math.sqrt(a)),
            (e[0] = r * a),
            (e[1] = i * a),
            (e[2] = n * a),
            (e[3] = s * a)),
          e
        );
      },
      Nr = function(e, t) {
        return e[0] === t[0] && e[1] === t[1] && e[2] === t[2] && e[3] === t[3];
      },
      Ur = function(e, t) {
        let r = e[0],
          i = e[1],
          n = e[2],
          s = e[3],
          a = t[0],
          o = t[1],
          l = t[2],
          h = t[3];
        return (
          Math.abs(r - a) <= 1e-6 * Math.max(1, Math.abs(r), Math.abs(a)) &&
          Math.abs(i - o) <= 1e-6 * Math.max(1, Math.abs(i), Math.abs(o)) &&
          Math.abs(n - l) <= 1e-6 * Math.max(1, Math.abs(n), Math.abs(l)) &&
          Math.abs(s - h) <= 1e-6 * Math.max(1, Math.abs(s), Math.abs(h))
        );
      },
      kr = (function() {
        let e = dt(),
          t = pt(1, 0, 0),
          r = pt(0, 1, 0);
        return function(i, n, s) {
          let a = Lt(n, s);
          return a < -0.999999
            ? (Ot(e, t, n),
              rr(e) < 1e-6 && Ot(e, r, n),
              Dt(e, e),
              hr(i, e, Math.PI),
              i)
            : a > 0.999999
            ? ((i[0] = 0), (i[1] = 0), (i[2] = 0), (i[3] = 1), i)
            : (Ot(e, n, s),
              (i[0] = e[0]),
              (i[1] = e[1]),
              (i[2] = e[2]),
              (i[3] = 1 + a),
              Or(i, i));
        };
      })(),
      Gr = (function() {
        let e = or(),
          t = or();
        return function(r, i, n, s, a, o) {
          return (
            mr(e, i, a, o), mr(t, n, s, o), mr(r, e, t, 2 * o * (1 - o)), r
          );
        };
      })(),
      Vr = (function() {
        let e = V();
        return function(t, r, i, n) {
          return (
            (e[0] = i[0]),
            (e[3] = i[1]),
            (e[6] = i[2]),
            (e[1] = n[0]),
            (e[4] = n[1]),
            (e[7] = n[2]),
            (e[2] = -r[0]),
            (e[5] = -r[1]),
            (e[8] = -r[2]),
            Or(t, wr(t, e))
          );
        };
      })();
    !(function() {
      let e = (function() {
        let e = new k(2);
        return k != Float32Array && ((e[0] = 0), (e[1] = 0)), e;
      })();
    })();
    let Qr = i.create();
    class zr {
      constructor(e = null) {
        (this.origin = s.create()),
          (this._dir = s.create()),
          (this._dir[2] = -1),
          e &&
            (s.transformMat4(this.origin, this.origin, e),
            i.fromMat4(Qr, e),
            s.transformMat3(this._dir, this._dir, Qr)),
          (this.direction = this._dir);
      }
      get direction() {
        return this._dir;
      }
      set direction(e) {
        (this._dir = s.copy(this._dir, e)),
          s.normalize(this._dir, this._dir),
          (this.inv_dir = s.fromValues(
            1 / this._dir[0],
            1 / this._dir[1],
            1 / this._dir[2]
          )),
          (this.sign = [
            this.inv_dir[0] < 0 ? 1 : 0,
            this.inv_dir[1] < 0 ? 1 : 0,
            this.inv_dir[2] < 0 ? 1 : 0,
          ]);
      }
      intersectsAABB(e, t) {
        let r = this,
          i = [e, t],
          n = (i[r.sign[0]][0] - r.origin[0]) * r.inv_dir[0],
          a = (i[1 - r.sign[0]][0] - r.origin[0]) * r.inv_dir[0],
          o = (i[r.sign[1]][1] - r.origin[1]) * r.inv_dir[1],
          l = (i[1 - r.sign[1]][1] - r.origin[1]) * r.inv_dir[1];
        if (n > l || o > a) return null;
        o > n && (n = o), l < a && (a = l);
        let h = (i[r.sign[2]][2] - r.origin[2]) * r.inv_dir[2],
          u = (i[1 - r.sign[2]][2] - r.origin[2]) * r.inv_dir[2];
        if (n > u || h > a) return null;
        h > n && (n = h), u < a && (a = u);
        let c = -1;
        if (n > 0 && a > 0) c = Math.min(n, a);
        else if (n > 0) c = n;
        else {
          if (!(a > 0)) return null;
          c = a;
        }
        c -= 0.02;
        let d = s.clone(this._dir);
        return s.scale(d, d, c), s.add(d, d, this.origin), d;
      }
    }
    const Xr = new Float32Array([0, 0, 0]),
      Hr = new Float32Array([0, 0, 0, 1]),
      Wr = new Float32Array([1, 1, 1]);
    let jr = n.create();
    class qr {
      constructor() {
        (this.name = null),
          (this.children = []),
          (this.parent = null),
          (this.visible = !0),
          (this.selectable = !1),
          (this._matrix = null),
          (this._dirtyTRS = !1),
          (this._translation = null),
          (this._rotation = null),
          (this._scale = null),
          (this._dirtyWorldMatrix = !1),
          (this._worldMatrix = null),
          (this._activeFrameId = -1),
          (this._hoverFrameId = -1),
          (this._renderPrimitives = null),
          (this._renderer = null),
          (this._selectHandler = null);
      }
      _setRenderer(e) {
        if (
          this._renderer != e &&
          (this._renderer && this.clearRenderPrimitives(),
          (this._renderer = e),
          e)
        ) {
          this.onRendererChanged(e);
          for (let t of this.children) t._setRenderer(e);
        }
      }
      onRendererChanged(e) {}
      clone() {
        let e = new qr();
        return (
          (e.name = this.name),
          (e.visible = this.visible),
          (e._renderer = this._renderer),
          (e._dirtyTRS = this._dirtyTRS),
          this._translation &&
            ((e._translation = s.create()),
            s.copy(e._translation, this._translation)),
          this._rotation &&
            ((e._rotation = a.create()), a.copy(e._rotation, this._rotation)),
          this._scale &&
            ((e._scale = s.create()), s.copy(e._scale, this._scale)),
          !e._dirtyTRS &&
            this._matrix &&
            ((e._matrix = n.create()), n.copy(e._matrix, this._matrix)),
          (e._dirtyWorldMatrix = this._dirtyWorldMatrix),
          !e._dirtyWorldMatrix &&
            this._worldMatrix &&
            ((e._worldMatrix = n.create()),
            n.copy(e._worldMatrix, this._worldMatrix)),
          this.waitForComplete().then(() => {
            if (this._renderPrimitives)
              for (let t of this._renderPrimitives) e.addRenderPrimitive(t);
            for (let t of this.children) e.addNode(t.clone());
          }),
          e
        );
      }
      markActive(e) {
        if (this.visible && this._renderPrimitives) {
          this._activeFrameId = e;
          for (let t of this._renderPrimitives) t.markActive(e);
        }
        for (let t of this.children) t.visible && t.markActive(e);
      }
      addNode(e) {
        e &&
          e.parent != this &&
          (e.parent && e.parent.removeNode(e),
          (e.parent = this),
          this.children.push(e),
          this._renderer && e._setRenderer(this._renderer));
      }
      removeNode(e) {
        let t = this.children.indexOf(e);
        t > -1 && (this.children.splice(t, 1), (e.parent = null));
      }
      clearNodes() {
        for (let e of this.children) e.parent = null;
        this.children = [];
      }
      setMatrixDirty() {
        if (!this._dirtyWorldMatrix) {
          this._dirtyWorldMatrix = !0;
          for (let e of this.children) e.setMatrixDirty();
        }
      }
      _updateLocalMatrix() {
        return (
          this._matrix || (this._matrix = n.create()),
          this._dirtyTRS &&
            ((this._dirtyTRS = !1),
            n.fromRotationTranslationScale(
              this._matrix,
              this._rotation || Hr,
              this._translation || Xr,
              this._scale || Wr
            )),
          this._matrix
        );
      }
      set matrix(e) {
        e
          ? (this._matrix || (this._matrix = n.create()),
            n.copy(this._matrix, e))
          : (this._matrix = null),
          this.setMatrixDirty(),
          (this._dirtyTRS = !1),
          (this._translation = null),
          (this._rotation = null),
          (this._scale = null);
      }
      get matrix() {
        return this.setMatrixDirty(), this._updateLocalMatrix();
      }
      get worldMatrix() {
        return (
          this._worldMatrix ||
            ((this._dirtyWorldMatrix = !0), (this._worldMatrix = n.create())),
          (this._dirtyWorldMatrix || this._dirtyTRS) &&
            (this.parent
              ? n.mul(
                  this._worldMatrix,
                  this.parent.worldMatrix,
                  this._updateLocalMatrix()
                )
              : n.copy(this._worldMatrix, this._updateLocalMatrix()),
            (this._dirtyWorldMatrix = !1)),
          this._worldMatrix
        );
      }
      set translation(e) {
        null != e && ((this._dirtyTRS = !0), this.setMatrixDirty()),
          (this._translation = e);
      }
      get translation() {
        return (
          (this._dirtyTRS = !0),
          this.setMatrixDirty(),
          this._translation || (this._translation = s.clone(Xr)),
          this._translation
        );
      }
      set rotation(e) {
        null != e && ((this._dirtyTRS = !0), this.setMatrixDirty()),
          (this._rotation = e);
      }
      get rotation() {
        return (
          (this._dirtyTRS = !0),
          this.setMatrixDirty(),
          this._rotation || (this._rotation = a.clone(Hr)),
          this._rotation
        );
      }
      set scale(e) {
        null != e && ((this._dirtyTRS = !0), this.setMatrixDirty()),
          (this._scale = e);
      }
      get scale() {
        return (
          (this._dirtyTRS = !0),
          this.setMatrixDirty(),
          this._scale || (this._scale = s.clone(Wr)),
          this._scale
        );
      }
      waitForComplete() {
        let e = [];
        for (let t of this.children) e.push(t.waitForComplete());
        if (this._renderPrimitives)
          for (let t of this._renderPrimitives) e.push(t.waitForComplete());
        return Promise.all(e).then(() => this);
      }
      get renderPrimitives() {
        return this._renderPrimitives;
      }
      addRenderPrimitive(e) {
        this._renderPrimitives
          ? this._renderPrimitives.push(e)
          : (this._renderPrimitives = [e]),
          e._instances.push(this);
      }
      removeRenderPrimitive(e) {
        if (!this._renderPrimitives) return;
        let t = this._renderPrimitives._instances.indexOf(e);
        t > -1 &&
          (this._renderPrimitives._instances.splice(t, 1),
          (t = e._instances.indexOf(this)),
          t > -1 && e._instances.splice(t, 1),
          this._renderPrimitives.length || (this._renderPrimitives = null));
      }
      clearRenderPrimitives() {
        if (this._renderPrimitives) {
          for (let e of this._renderPrimitives) {
            let t = e._instances.indexOf(this);
            t > -1 && e._instances.splice(t, 1);
          }
          this._renderPrimitives = null;
        }
      }
      _hitTestSelectableNode(e) {
        if (this._renderPrimitives) {
          let t = null;
          for (let r of this._renderPrimitives)
            if (r._min) {
              t ||
                (n.invert(jr, this.worldMatrix),
                n.multiply(jr, jr, e.matrix),
                (t = new zr(jr)));
              let i = t.intersectsAABB(r._min, r._max);
              if (i) return s.transformMat4(i, i, this.worldMatrix), i;
            }
        }
        for (let t of this.children) {
          let r = t._hitTestSelectableNode(e);
          if (r) return r;
        }
        return null;
      }
      hitTest(e) {
        if (this.selectable && this.visible) {
          let t = this._hitTestSelectableNode(e);
          if (t) {
            let r = new zr(e.matrix),
              i = s.fromValues(r.origin.x, r.origin.y, r.origin.z);
            return { node: this, intersection: t, distance: s.distance(i, t) };
          }
          return null;
        }
        let t = null;
        for (let r of this.children) {
          let i = r.hitTest(e);
          i && (!t || t.distance > i.distance) && (t = i);
        }
        return t;
      }
      onSelect(e) {
        this._selectHandler = e;
      }
      get selectHandler() {
        return this._selectHandler;
      }
      handleSelect() {
        this._selectHandler && this._selectHandler();
      }
      onHoverStart() {}
      onHoverEnd() {}
      _update(e, t) {
        this.onUpdate(e, t);
        for (let r of this.children) r._update(e, t);
      }
      onUpdate(e, t) {}
    }
    class Yr {
      constructor(e, t, r, i, n) {
        (this._gl = e),
          (this.program = e.createProgram()),
          (this.attrib = null),
          (this.uniform = null),
          (this.defines = {}),
          (this._firstUse = !0),
          (this._nextUseCallbacks = []);
        let s = '';
        if (n)
          for (let e in n)
            (this.defines[e] = n[e]), (s += `#define ${e} ${n[e]}\n`);
        if (
          ((this._vertShader = e.createShader(e.VERTEX_SHADER)),
          e.attachShader(this.program, this._vertShader),
          e.shaderSource(this._vertShader, s + t),
          e.compileShader(this._vertShader),
          (this._fragShader = e.createShader(e.FRAGMENT_SHADER)),
          e.attachShader(this.program, this._fragShader),
          e.shaderSource(this._fragShader, s + r),
          e.compileShader(this._fragShader),
          i)
        ) {
          this.attrib = {};
          for (let t in i)
            e.bindAttribLocation(this.program, i[t], t),
              (this.attrib[t] = i[t]);
        }
        e.linkProgram(this.program);
      }
      onNextUse(e) {
        this._nextUseCallbacks.push(e);
      }
      use() {
        let e = this._gl;
        if (this._firstUse) {
          if (
            ((this._firstUse = !1),
            e.getProgramParameter(this.program, e.LINK_STATUS))
          ) {
            if (!this.attrib) {
              this.attrib = {};
              let t = e.getProgramParameter(this.program, e.ACTIVE_ATTRIBUTES);
              for (let r = 0; r < t; r++) {
                let t = e.getActiveAttrib(this.program, r);
                this.attrib[t.name] = e.getAttribLocation(this.program, t.name);
              }
            }
            this.uniform = {};
            let t = e.getProgramParameter(this.program, e.ACTIVE_UNIFORMS),
              r = '';
            for (let i = 0; i < t; i++) {
              (r = e.getActiveUniform(this.program, i).name.replace('[0]', '')),
                (this.uniform[r] = e.getUniformLocation(this.program, r));
            }
          } else
            e.getShaderParameter(this._vertShader, e.COMPILE_STATUS)
              ? e.getShaderParameter(this._fragShader, e.COMPILE_STATUS)
                ? console.error(
                    'Program link error: ' + e.getProgramInfoLog(this.program)
                  )
                : console.error(
                    'Fragment shader compile error: ' +
                      e.getShaderInfoLog(this._fragShader)
                  )
              : console.error(
                  'Vertex shader compile error: ' +
                    e.getShaderInfoLog(this._vertShader)
                ),
              e.deleteProgram(this.program),
              (this.program = null);
          e.deleteShader(this._vertShader), e.deleteShader(this._fragShader);
        }
        if ((e.useProgram(this.program), this._nextUseCallbacks.length)) {
          for (let e of this._nextUseCallbacks) e(this);
          this._nextUseCallbacks = [];
        }
      }
    }
    const Zr = WebGLRenderingContext;
    let Kr = 0;
    class Jr {
      constructor() {
        (this.minFilter = null),
          (this.magFilter = null),
          (this.wrapS = null),
          (this.wrapT = null);
      }
    }
    class $r {
      constructor() {
        (this.sampler = new Jr()), (this.mipmap = !0);
      }
      get format() {
        return Zr.RGBA;
      }
      get width() {
        return 0;
      }
      get height() {
        return 0;
      }
      get textureKey() {
        return null;
      }
    }
    class ei extends $r {
      constructor(e) {
        super(),
          (this._img = e),
          (this._imgBitmap = null),
          (this._manualKey = null),
          e.src && e.complete
            ? e.naturalWidth
              ? (this._promise = this._finishImage())
              : (this._promise = Promise.reject(
                  'Image provided had failed to load.'
                ))
            : (this._promise = new Promise((t, r) => {
                e.addEventListener('load', () => t(this._finishImage())),
                  e.addEventListener('error', r);
              }));
      }
      _finishImage() {
        return window.createImageBitmap
          ? window
              .createImageBitmap(this._img)
              .then(e => ((this._imgBitmap = e), Promise.resolve(this)))
          : Promise.resolve(this);
      }
      get format() {
        return Zr.RGBA;
      }
      get width() {
        return this._img.width;
      }
      get height() {
        return this._img.height;
      }
      waitForComplete() {
        return this._promise;
      }
      get textureKey() {
        return this._manualKey || this._img.src;
      }
      get source() {
        return this._imgBitmap || this._img;
      }
      genDataKey() {
        (this._manualKey = `DATA_${Kr}`), Kr++;
      }
    }
    class ti extends ei {
      constructor(e) {
        let t = new Image();
        super(t), (t.src = e);
      }
    }
    class ri extends $r {
      constructor(e) {
        super(),
          (this._video = e),
          e.readyState >= 2
            ? (this._promise = Promise.resolve(this))
            : e.error
            ? (this._promise = Promise.reject(e.error))
            : (this._promise = new Promise((t, r) => {
                e.addEventListener('loadeddata', () => t(this)),
                  e.addEventListener('error', r);
              }));
      }
      get format() {
        return Zr.RGBA;
      }
      get width() {
        return this._video.videoWidth;
      }
      get height() {
        return this._video.videoHeight;
      }
      waitForComplete() {
        return this._promise;
      }
      get textureKey() {
        return this._video.src;
      }
      get source() {
        return this._video;
      }
    }
    class ii extends $r {
      constructor(e, t, r, i = Zr.RGBA, n = Zr.UNSIGNED_BYTE) {
        super(),
          (this._data = e),
          (this._width = t),
          (this._height = r),
          (this._format = i),
          (this._type = n),
          (this._key = `DATA_${Kr}`),
          Kr++;
      }
      get format() {
        return this._format;
      }
      get width() {
        return this._width;
      }
      get height() {
        return this._height;
      }
      get textureKey() {
        return this._key;
      }
    }
    class ni extends ii {
      constructor(e, t, r, i) {
        let n = new Uint8Array([255 * e, 255 * t, 255 * r, 255 * i]);
        super(n, 1, 1),
          (this.mipmap = !1),
          (this._key = `COLOR_${n[0]}_${n[1]}_${n[2]}_${n[3]}`);
      }
    }
    const si = {
        POSITION: 1,
        NORMAL: 2,
        TANGENT: 3,
        TEXCOORD_0: 4,
        TEXCOORD_1: 5,
        COLOR_0: 6,
      },
      ai = {
        POSITION: 1,
        NORMAL: 2,
        TANGENT: 4,
        TEXCOORD_0: 8,
        TEXCOORD_1: 16,
        COLOR_0: 32,
      },
      oi = WebGLRenderingContext,
      li = new Float32Array([-0.1, -1, -0.2]),
      hi = new Float32Array([3, 3, 3]),
      ui = new RegExp('precision (lowp|mediump|highp) float;');
    function ci(e) {
      return 0 == (e & (e - 1));
    }
    function di(e) {
      e = e || { alpha: !1 };
      let t = document.createElement('canvas'),
        r = e.webgl2 ? ['webgl2'] : ['webgl', 'experimental-webgl'],
        i = null;
      for (let n of r) if (((i = t.getContext(n, e)), i)) break;
      if (!i) {
        let t = e.webgl2 ? 'WebGL 2' : 'WebGL';
        return console.error('This browser does not support ' + t + '.'), null;
      }
      return i;
    }
    class Ai {
      constructor(e, t, r = null, i = 'left') {
        (this.projectionMatrix = e),
          (this.viewport = r),
          (this._eye = i),
          (this._eyeIndex = 'left' == i ? 0 : 1),
          t instanceof Float32Array
            ? ((this._viewMatrix = n.clone(t)),
              (this.viewTransform = new XRRigidTransform()))
            : ((this.viewTransform = t), (this._viewMatrix = t.inverse.matrix));
      }
      get viewMatrix() {
        return this._viewMatrix;
      }
      get eye() {
        return this._eye;
      }
      set eye(e) {
        (this._eye = e), (this._eyeIndex = 'left' == e ? 0 : 1);
      }
      get eyeIndex() {
        return this._eyeIndex;
      }
    }
    class fi {
      constructor(e, t, r, i = 0) {
        (this._target = e),
          (this._usage = t),
          (this._length = i),
          r instanceof Promise
            ? ((this._buffer = null),
              (this._promise = r.then(e => ((this._buffer = e), this))))
            : ((this._buffer = r), (this._promise = Promise.resolve(this)));
      }
      waitForComplete() {
        return this._promise;
      }
    }
    class pi {
      constructor(e) {
        (this._attrib_index = si[e.name]),
          (this._componentCount = e.componentCount),
          (this._componentType = e.componentType),
          (this._stride = e.stride),
          (this._byteOffset = e.byteOffset),
          (this._normalized = e.normalized);
      }
    }
    class mi {
      constructor(e) {
        (this._buffer = e), (this._attributes = []);
      }
    }
    class gi {
      constructor(e) {
        (this._activeFrameId = 0),
          (this._instances = []),
          (this._material = null),
          this.setPrimitive(e);
      }
      setPrimitive(e) {
        (this._mode = e.mode),
          (this._elementCount = e.elementCount),
          (this._promise = null),
          (this._vao = null),
          (this._complete = !1),
          (this._attributeBuffers = []),
          (this._attributeMask = 0);
        for (let t of e.attributes) {
          this._attributeMask |= ai[t.name];
          let e = new pi(t),
            r = !1;
          for (let i of this._attributeBuffers)
            if (i._buffer == t.buffer) {
              i._attributes.push(e), (r = !0);
              break;
            }
          if (!r) {
            let r = new mi(t.buffer);
            r._attributes.push(e), this._attributeBuffers.push(r);
          }
        }
        (this._indexBuffer = null),
          (this._indexByteOffset = 0),
          (this._indexType = 0),
          e.indexBuffer &&
            ((this._indexByteOffset = e.indexByteOffset),
            (this._indexType = e.indexType),
            (this._indexBuffer = e.indexBuffer)),
          e._min
            ? ((this._min = s.clone(e._min)), (this._max = s.clone(e._max)))
            : ((this._min = null), (this._max = null)),
          null != this._material && this.waitForComplete();
      }
      setRenderMaterial(e) {
        (this._material = e),
          (this._promise = null),
          (this._complete = !1),
          null != this._material && this.waitForComplete();
      }
      markActive(e) {
        if (this._complete && this._activeFrameId != e) {
          if (this._material && !this._material.markActive(e)) return;
          this._activeFrameId = e;
        }
      }
      get samplers() {
        return this._material._samplerDictionary;
      }
      get uniforms() {
        return this._material._uniform_dictionary;
      }
      waitForComplete() {
        if (!this._promise) {
          if (!this._material)
            return Promise.reject('RenderPrimitive does not have a material');
          let e = [];
          for (let t of this._attributeBuffers)
            t._buffer._buffer || e.push(t._buffer._promise);
          this._indexBuffer &&
            !this._indexBuffer._buffer &&
            e.push(this._indexBuffer._promise),
            (this._promise = Promise.all(e).then(
              () => ((this._complete = !0), this)
            ));
        }
        return this._promise;
      }
    }
    class _i {
      constructor(e) {
        (this._texture = e),
          (this._complete = !1),
          (this._activeFrameId = 0),
          (this._activeCallback = null);
      }
      markActive(e) {
        this._activeCallback &&
          this._activeFrameId != e &&
          ((this._activeFrameId = e), this._activeCallback(this));
      }
    }
    n.create();
    function vi(e, t, r, i, n) {
      let s = (n & r) - (i & r);
      s && (s > 0 ? e.enable(t) : e.disable(t));
    }
    class wi {
      constructor(e, t, r) {
        (this._renderer = e),
          (this._uniformName = t._uniformName),
          (this._renderTexture = e._getRenderTexture(t._texture)),
          (this._index = r);
      }
      set texture(e) {
        this._renderTexture = this._renderer._getRenderTexture(e);
      }
    }
    class bi {
      constructor(e) {
        (this._uniformName = e._uniformName),
          (this._uniform = null),
          (this._length = e._length),
          e._value instanceof Array
            ? (this._value = new Float32Array(e._value))
            : (this._value = new Float32Array([e._value]));
      }
      set value(e) {
        if (1 == this._value.length) this._value[0] = e;
        else for (let t = 0; t < this._value.length; ++t) this._value[t] = e[t];
      }
    }
    class yi {
      constructor(e, t, r) {
        (this._program = r),
          (this._state = t.state._state),
          (this._activeFrameId = 0),
          (this._completeForActiveFrame = !1),
          (this._samplerDictionary = {}),
          (this._samplers = []);
        for (let r = 0; r < t._samplers.length; ++r) {
          let i = new wi(e, t._samplers[r], r);
          this._samplers.push(i), (this._samplerDictionary[i._uniformName] = i);
        }
        (this._uniform_dictionary = {}), (this._uniforms = []);
        for (let e of t._uniforms) {
          let t = new bi(e);
          this._uniforms.push(t),
            (this._uniform_dictionary[t._uniformName] = t);
        }
        (this._firstBind = !0),
          (this._renderOrder = t.renderOrder),
          this._renderOrder == B &&
            (this._state & p
              ? (this._renderOrder = P)
              : (this._renderOrder = F));
      }
      bind(e) {
        if (this._firstBind) {
          for (let e = 0; e < this._samplers.length; ) {
            let t = this._samplers[e];
            this._program.uniform[t._uniformName]
              ? ++e
              : this._samplers.splice(e, 1);
          }
          for (let e = 0; e < this._uniforms.length; ) {
            let t = this._uniforms[e];
            (t._uniform = this._program.uniform[t._uniformName]),
              t._uniform ? ++e : this._uniforms.splice(e, 1);
          }
          this._firstBind = !1;
        }
        for (let t of this._samplers)
          e.activeTexture(e.TEXTURE0 + t._index),
            t._renderTexture && t._renderTexture._complete
              ? e.bindTexture(e.TEXTURE_2D, t._renderTexture._texture)
              : e.bindTexture(e.TEXTURE_2D, null);
        for (let t of this._uniforms)
          switch (t._length) {
            case 1:
              e.uniform1fv(t._uniform, t._value);
              break;
            case 2:
              e.uniform2fv(t._uniform, t._value);
              break;
            case 3:
              e.uniform3fv(t._uniform, t._value);
              break;
            case 4:
              e.uniform4fv(t._uniform, t._value);
          }
      }
      markActive(e) {
        if (this._activeFrameId != e) {
          (this._activeFrameId = e), (this._completeForActiveFrame = !0);
          for (let t = 0; t < this._samplers.length; ++t) {
            let r = this._samplers[t];
            if (r._renderTexture) {
              if (!r._renderTexture._complete) {
                this._completeForActiveFrame = !1;
                break;
              }
              r._renderTexture.markActive(e);
            }
          }
        }
        return this._completeForActiveFrame;
      }
      get cullFace() {
        return !!(this._state & f);
      }
      get blend() {
        return !!(this._state & p);
      }
      get depthTest() {
        return !!(this._state & m);
      }
      get stencilTest() {
        return !!(this._state & g);
      }
      get colorMask() {
        return !!(this._state & _);
      }
      get depthMask() {
        return !!(this._state & v);
      }
      get stencilMask() {
        return !!(this._state & w);
      }
      get depthFunc() {
        return ((this._state & T) >> R) + oi.NEVER;
      }
      get blendFuncSrc() {
        return D(this._state, E, y);
      }
      get blendFuncDst() {
        return D(this._state, x, M);
      }
      _capsDiff(e) {
        return (e & b) ^ (this._state & b);
      }
      _blendDiff(e) {
        return this._state & p ? (e & S) ^ (this._state & S) : 0;
      }
      _depthFuncDiff(e) {
        return this._state & m ? (e & T) ^ (this._state & T) : 0;
      }
    }
    class Ei {
      constructor(e) {
        (this._gl = e || di()),
          (this._frameId = 0),
          (this._programCache = {}),
          (this._textureCache = {}),
          (this._renderPrimitives = Array(B)),
          (this._cameraPositions = []),
          (this._vaoExt = e.getExtension('OES_vertex_array_object'));
        let t = e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_FLOAT);
        (this._defaultFragPrecision = t.precision > 0 ? 'highp' : 'mediump'),
          (this._depthMaskNeedsReset = !1),
          (this._colorMaskNeedsReset = !1),
          (this._globalLightColor = s.clone(hi)),
          (this._globalLightDir = s.clone(li));
      }
      get gl() {
        return this._gl;
      }
      set globalLightColor(e) {
        s.copy(this._globalLightColor, e);
      }
      get globalLightColor() {
        return s.clone(this._globalLightColor);
      }
      set globalLightDir(e) {
        s.copy(this._globalLightDir, e);
      }
      get globalLightDir() {
        return s.clone(this._globalLightDir);
      }
      createRenderBuffer(e, t, r = oi.STATIC_DRAW) {
        let i = this._gl,
          n = i.createBuffer();
        if (t instanceof Promise) {
          let s = new fi(
            e,
            r,
            t.then(
              t => (
                i.bindBuffer(e, n),
                i.bufferData(e, t, r),
                (s._length = t.byteLength),
                n
              )
            )
          );
          return s;
        }
        return (
          i.bindBuffer(e, n),
          i.bufferData(e, t, r),
          new fi(e, r, n, t.byteLength)
        );
      }
      updateRenderBuffer(e, t, r = 0) {
        if (e._buffer) {
          let i = this._gl;
          i.bindBuffer(e._target, e._buffer),
            0 == r && e._length == t.byteLength
              ? i.bufferData(e._target, t, e._usage)
              : i.bufferSubData(e._target, r, t);
        } else
          e.waitForComplete().then(e => {
            this.updateRenderBuffer(e, t, r);
          });
      }
      createRenderPrimitive(e, t) {
        let r = new gi(e),
          i = this._getMaterialProgram(t, r),
          n = new yi(this, t, i);
        return (
          r.setRenderMaterial(n),
          this._renderPrimitives[n._renderOrder] ||
            (this._renderPrimitives[n._renderOrder] = []),
          this._renderPrimitives[n._renderOrder].push(r),
          r
        );
      }
      createMesh(e, t) {
        let r = new qr();
        return r.addRenderPrimitive(this.createRenderPrimitive(e, t)), r;
      }
      drawViews(e, t) {
        if (!t) return;
        let r = this._gl;
        if (
          (this._frameId++,
          t.markActive(this._frameId),
          1 == e.length && e[0].viewport)
        ) {
          let t = e[0].viewport;
          this._gl.viewport(t.x, t.y, t.width, t.height);
        }
        for (let t = 0; t < e.length; ++t) {
          this._cameraPositions.length <= t &&
            this._cameraPositions.push(s.create());
          let r = e[t].viewTransform.position;
          (this._cameraPositions[t][0] = r.x),
            (this._cameraPositions[t][1] = r.y),
            (this._cameraPositions[t][2] = r.z);
        }
        for (let t of this._renderPrimitives)
          t && t.length && this._drawRenderPrimitiveSet(e, t);
        this._vaoExt && this._vaoExt.bindVertexArrayOES(null),
          this._depthMaskNeedsReset && r.depthMask(!0),
          this._colorMaskNeedsReset && r.colorMask(!0, !0, !0, !0);
      }
      _drawRenderPrimitiveSet(e, t) {
        let r = this._gl,
          i = null,
          n = null,
          s = 0;
        for (let a of t)
          if (a._activeFrameId == this._frameId) {
            i != a._material._program &&
              ((i = a._material._program),
              i.use(),
              i.uniform.LIGHT_DIRECTION &&
                r.uniform3fv(i.uniform.LIGHT_DIRECTION, this._globalLightDir),
              i.uniform.LIGHT_COLOR &&
                r.uniform3fv(i.uniform.LIGHT_COLOR, this._globalLightColor),
              1 == e.length &&
                (r.uniformMatrix4fv(
                  i.uniform.PROJECTION_MATRIX,
                  !1,
                  e[0].projectionMatrix
                ),
                r.uniformMatrix4fv(i.uniform.VIEW_MATRIX, !1, e[0].viewMatrix),
                r.uniform3fv(
                  i.uniform.CAMERA_POSITION,
                  this._cameraPositions[0]
                ),
                r.uniform1i(i.uniform.EYE_INDEX, e[0].eyeIndex))),
              n != a._material &&
                (this._bindMaterialState(a._material, n),
                a._material.bind(r, i, n),
                (n = a._material)),
              this._vaoExt
                ? a._vao
                  ? this._vaoExt.bindVertexArrayOES(a._vao)
                  : ((a._vao = this._vaoExt.createVertexArrayOES()),
                    this._vaoExt.bindVertexArrayOES(a._vao),
                    this._bindPrimitive(a))
                : (this._bindPrimitive(a, s), (s = a._attributeMask));
            for (let t = 0; t < e.length; ++t) {
              let n = e[t];
              if (e.length > 1) {
                if (n.viewport) {
                  let e = n.viewport;
                  r.viewport(e.x, e.y, e.width, e.height);
                }
                r.uniformMatrix4fv(
                  i.uniform.PROJECTION_MATRIX,
                  !1,
                  n.projectionMatrix
                ),
                  r.uniformMatrix4fv(i.uniform.VIEW_MATRIX, !1, n.viewMatrix),
                  r.uniform3fv(
                    i.uniform.CAMERA_POSITION,
                    this._cameraPositions[t]
                  ),
                  r.uniform1i(i.uniform.EYE_INDEX, n.eyeIndex);
              }
              for (let e of a._instances)
                e._activeFrameId == this._frameId &&
                  (r.uniformMatrix4fv(
                    i.uniform.MODEL_MATRIX,
                    !1,
                    e.worldMatrix
                  ),
                  a._indexBuffer
                    ? r.drawElements(
                        a._mode,
                        a._elementCount,
                        a._indexType,
                        a._indexByteOffset
                      )
                    : r.drawArrays(a._mode, 0, a._elementCount));
            }
          }
      }
      _getRenderTexture(e) {
        if (!e) return null;
        let t = e.textureKey;
        if (!t) throw new Error('Texure does not have a valid key');
        if (t in this._textureCache) return this._textureCache[t];
        {
          let r = this._gl,
            i = r.createTexture(),
            n = new _i(i);
          return (
            (this._textureCache[t] = n),
            e instanceof ii
              ? (r.bindTexture(r.TEXTURE_2D, i),
                r.texImage2D(
                  r.TEXTURE_2D,
                  0,
                  e.format,
                  e.width,
                  e.height,
                  0,
                  e.format,
                  e._type,
                  e._data
                ),
                this._setSamplerParameters(e),
                (n._complete = !0))
              : e.waitForComplete().then(() => {
                  r.bindTexture(r.TEXTURE_2D, i),
                    r.texImage2D(
                      r.TEXTURE_2D,
                      0,
                      e.format,
                      e.format,
                      r.UNSIGNED_BYTE,
                      e.source
                    ),
                    this._setSamplerParameters(e),
                    (n._complete = !0),
                    e instanceof ri &&
                      e._video.addEventListener('playing', () => {
                        n._activeCallback = () => {
                          e._video.paused ||
                            e._video.waiting ||
                            (r.bindTexture(r.TEXTURE_2D, i),
                            r.texImage2D(
                              r.TEXTURE_2D,
                              0,
                              e.format,
                              e.format,
                              r.UNSIGNED_BYTE,
                              e.source
                            ));
                        };
                      });
                }),
            n
          );
        }
      }
      _setSamplerParameters(e) {
        let t = this._gl,
          r = e.sampler,
          i = ci(e.width) && ci(e.height),
          n = i && e.mipmap;
        n && t.generateMipmap(t.TEXTURE_2D);
        let s = r.minFilter || (n ? t.LINEAR_MIPMAP_LINEAR : t.LINEAR),
          a = r.wrapS || (i ? t.REPEAT : t.CLAMP_TO_EDGE),
          o = r.wrapT || (i ? t.REPEAT : t.CLAMP_TO_EDGE);
        t.texParameteri(
          t.TEXTURE_2D,
          t.TEXTURE_MAG_FILTER,
          r.magFilter || t.LINEAR
        ),
          t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, s),
          t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, a),
          t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, o);
      }
      _getProgramKey(e, t) {
        let r = `${e}:`;
        for (let e in t) r += `${e}=${t[e]},`;
        return r;
      }
      _getMaterialProgram(e, t) {
        let r = e.materialName,
          i = e.vertexSource,
          n = e.fragmentSource;
        if (null == r) throw new Error('Material does not have a name');
        if (null == i)
          throw new Error(`Material "${r}" does not have a vertex source`);
        if (null == n)
          throw new Error(`Material "${r}" does not have a fragment source`);
        let s = e.getProgramDefines(t),
          a = this._getProgramKey(r, s);
        if (a in this._programCache) return this._programCache[a];
        {
          let t = i;
          t += !1
            ? '\n#ERROR Multiview rendering is not implemented\nvoid main() {\n  gl_Position = vec4(0.0, 0.0, 0.0, 1.0);\n}\n'
            : '\nuniform mat4 PROJECTION_MATRIX, VIEW_MATRIX, MODEL_MATRIX;\n\nvoid main() {\n  gl_Position = vertex_main(PROJECTION_MATRIX, VIEW_MATRIX, MODEL_MATRIX);\n}\n';
          let r =
            (n.match(ui)
              ? ''
              : `precision ${this._defaultFragPrecision} float;\n`) + n;
          r += '\nvoid main() {\n  gl_FragColor = fragment_main();\n}\n';
          let o = new Yr(this._gl, t, r, si, s);
          return (
            (this._programCache[a] = o),
            o.onNextUse(t => {
              for (let r = 0; r < e._samplers.length; ++r) {
                let i = e._samplers[r],
                  n = t.uniform[i._uniformName];
                n && this._gl.uniform1i(n, r);
              }
            }),
            o
          );
        }
      }
      _bindPrimitive(e, t) {
        let r = this._gl;
        if (t != e._attributeMask)
          for (let t in si)
            e._attributeMask & ai[t]
              ? r.enableVertexAttribArray(si[t])
              : r.disableVertexAttribArray(si[t]);
        for (let t of e._attributeBuffers) {
          r.bindBuffer(r.ARRAY_BUFFER, t._buffer._buffer);
          for (let e of t._attributes)
            r.vertexAttribPointer(
              e._attrib_index,
              e._componentCount,
              e._componentType,
              e._normalized,
              e._stride,
              e._byteOffset
            );
        }
        e._indexBuffer
          ? r.bindBuffer(r.ELEMENT_ARRAY_BUFFER, e._indexBuffer._buffer)
          : r.bindBuffer(r.ELEMENT_ARRAY_BUFFER, null);
      }
      _bindMaterialState(e, t = null) {
        let r = this._gl,
          i = e._state,
          n = t ? t._state : ~i;
        if (i != n) {
          if (e._capsDiff(n)) {
            vi(r, r.CULL_FACE, f, n, i),
              vi(r, r.BLEND, p, n, i),
              vi(r, r.DEPTH_TEST, m, n, i),
              vi(r, r.STENCIL_TEST, g, n, i);
            let e = (i & _) - (n & _);
            if (e) {
              let t = e > 1;
              (this._colorMaskNeedsReset = !t), r.colorMask(t, t, t, t);
            }
            let t = (i & v) - (n & v);
            t && ((this._depthMaskNeedsReset = !(t > 1)), r.depthMask(t > 1));
            let s = (i & w) - (n & w);
            s && r.stencilMask(s > 1);
          }
          e._blendDiff(n) && r.blendFunc(e.blendFuncSrc, e.blendFuncDst),
            e._depthFuncDiff(n) && r.depthFunc(e.depthFunc);
        }
      }
    }
    class Mi {
      constructor(e, t, r, i, n, s) {
        (this.name = e),
          (this.buffer = t),
          (this.componentCount = r || 3),
          (this.componentType = i || 5126),
          (this.stride = n || 0),
          (this.byteOffset = s || 0),
          (this.normalized = !1);
      }
    }
    class xi {
      constructor(e, t, r) {
        (this.attributes = e || []),
          (this.elementCount = t || 0),
          (this.mode = r || 4),
          (this.indexBuffer = null),
          (this.indexByteOffset = 0),
          (this.indexType = 0),
          (this._min = null),
          (this._max = null);
      }
      setIndexBuffer(e, t, r) {
        (this.indexBuffer = e),
          (this.indexByteOffset = t || 0),
          (this.indexType = r || 5123);
      }
      setBounds(e, t) {
        (this._min = s.clone(e)), (this._max = s.clone(t));
      }
    }
    class Si extends U {
      constructor() {
        super(),
          (this.baseColor = this.defineSampler('baseColorTex')),
          (this.metallicRoughness = this.defineSampler('metallicRoughnessTex')),
          (this.normal = this.defineSampler('normalTex')),
          (this.occlusion = this.defineSampler('occlusionTex')),
          (this.emissive = this.defineSampler('emissiveTex')),
          (this.baseColorFactor = this.defineUniform('baseColorFactor', [
            1,
            1,
            1,
            1,
          ])),
          (this.metallicRoughnessFactor = this.defineUniform(
            'metallicRoughnessFactor',
            [1, 1]
          )),
          (this.occlusionStrength = this.defineUniform('occlusionStrength', 1)),
          (this.emissiveFactor = this.defineUniform('emissiveFactor', [
            0,
            0,
            0,
          ]));
      }
      get materialName() {
        return 'PBR';
      }
      get vertexSource() {
        return '\nattribute vec3 POSITION, NORMAL;\nattribute vec2 TEXCOORD_0, TEXCOORD_1;\n\nuniform vec3 CAMERA_POSITION;\nuniform vec3 LIGHT_DIRECTION;\n\nvarying vec3 vLight; // Vector from vertex to light.\nvarying vec3 vView; // Vector from vertex to camera.\nvarying vec2 vTex;\n\n#ifdef USE_NORMAL_MAP\nattribute vec4 TANGENT;\nvarying mat3 vTBN;\n#else\nvarying vec3 vNorm;\n#endif\n\n#ifdef USE_VERTEX_COLOR\nattribute vec4 COLOR_0;\nvarying vec4 vCol;\n#endif\n\nvec4 vertex_main(mat4 proj, mat4 view, mat4 model) {\n  vec3 n = normalize(vec3(model * vec4(NORMAL, 0.0)));\n#ifdef USE_NORMAL_MAP\n  vec3 t = normalize(vec3(model * vec4(TANGENT.xyz, 0.0)));\n  vec3 b = cross(n, t) * TANGENT.w;\n  vTBN = mat3(t, b, n);\n#else\n  vNorm = n;\n#endif\n\n#ifdef USE_VERTEX_COLOR\n  vCol = COLOR_0;\n#endif\n\n  vTex = TEXCOORD_0;\n  vec4 mPos = model * vec4(POSITION, 1.0);\n  vLight = -LIGHT_DIRECTION;\n  vView = CAMERA_POSITION - mPos.xyz;\n  return proj * view * mPos;\n}';
      }
      get fragmentSource() {
        return '\n#define M_PI 3.14159265\n\nuniform vec4 baseColorFactor;\n#ifdef USE_BASE_COLOR_MAP\nuniform sampler2D baseColorTex;\n#endif\n\nvarying vec3 vLight;\nvarying vec3 vView;\nvarying vec2 vTex;\n\n#ifdef USE_VERTEX_COLOR\nvarying vec4 vCol;\n#endif\n\n#ifdef USE_NORMAL_MAP\nuniform sampler2D normalTex;\nvarying mat3 vTBN;\n#else\nvarying vec3 vNorm;\n#endif\n\n#ifdef USE_METAL_ROUGH_MAP\nuniform sampler2D metallicRoughnessTex;\n#endif\nuniform vec2 metallicRoughnessFactor;\n\n#ifdef USE_OCCLUSION\nuniform sampler2D occlusionTex;\nuniform float occlusionStrength;\n#endif\n\n#ifdef USE_EMISSIVE_TEXTURE\nuniform sampler2D emissiveTex;\n#endif\nuniform vec3 emissiveFactor;\n\nuniform vec3 LIGHT_COLOR;\n\nconst vec3 dielectricSpec = vec3(0.04);\nconst vec3 black = vec3(0.0);\n\n\nvec3 lambertDiffuse(vec3 cDiff) {\n  return cDiff / M_PI;\n}\n\nfloat specD(float a, float nDotH) {\n  float aSqr = a * a;\n  float f = ((nDotH * nDotH) * (aSqr - 1.0) + 1.0);\n  return aSqr / (M_PI * f * f);\n}\n\nfloat specG(float roughness, float nDotL, float nDotV) {\n  float k = (roughness + 1.0) * (roughness + 1.0) / 8.0;\n  float gl = nDotL / (nDotL * (1.0 - k) + k);\n  float gv = nDotV / (nDotV * (1.0 - k) + k);\n  return gl * gv;\n}\n\nvec3 specF(float vDotH, vec3 F0) {\n  float exponent = (-5.55473 * vDotH - 6.98316) * vDotH;\n  float base = 2.0;\n  return F0 + (1.0 - F0) * pow(base, exponent);\n}\n\nvec4 fragment_main() {\n#ifdef USE_BASE_COLOR_MAP\n  vec4 baseColor = texture2D(baseColorTex, vTex) * baseColorFactor;\n#else\n  vec4 baseColor = baseColorFactor;\n#endif\n\n#ifdef USE_VERTEX_COLOR\n  baseColor *= vCol;\n#endif\n\n#ifdef USE_NORMAL_MAP\n  vec3 n = texture2D(normalTex, vTex).rgb;\n  n = normalize(vTBN * (2.0 * n - 1.0));\n#else\n  vec3 n = normalize(vNorm);\n#endif\n\n#ifdef FULLY_ROUGH\n  float metallic = 0.0;\n#else\n  float metallic = metallicRoughnessFactor.x;\n#endif\n\n  float roughness = metallicRoughnessFactor.y;\n\n#ifdef USE_METAL_ROUGH_MAP\n  vec4 metallicRoughness = texture2D(metallicRoughnessTex, vTex);\n  metallic *= metallicRoughness.b;\n  roughness *= metallicRoughness.g;\n#endif\n  \n  vec3 l = normalize(vLight);\n  vec3 v = normalize(vView);\n  vec3 h = normalize(l+v);\n\n  float nDotL = clamp(dot(n, l), 0.001, 1.0);\n  float nDotV = abs(dot(n, v)) + 0.001;\n  float nDotH = max(dot(n, h), 0.0);\n  float vDotH = max(dot(v, h), 0.0);\n\n  // From GLTF Spec\n  vec3 cDiff = mix(baseColor.rgb * (1.0 - dielectricSpec.r), black, metallic); // Diffuse color\n  vec3 F0 = mix(dielectricSpec, baseColor.rgb, metallic); // Specular color\n  float a = roughness * roughness;\n\n#ifdef FULLY_ROUGH\n  vec3 specular = F0 * 0.45;\n#else\n  vec3 F = specF(vDotH, F0);\n  float D = specD(a, nDotH);\n  float G = specG(roughness, nDotL, nDotV);\n  vec3 specular = (D * F * G) / (4.0 * nDotL * nDotV);\n#endif\n  float halfLambert = dot(n, l) * 0.5 + 0.5;\n  halfLambert *= halfLambert;\n\n  vec3 color = (halfLambert * LIGHT_COLOR * lambertDiffuse(cDiff)) + specular;\n\n#ifdef USE_OCCLUSION\n  float occlusion = texture2D(occlusionTex, vTex).r;\n  color = mix(color, color * occlusion, occlusionStrength);\n#endif\n  \n  vec3 emissive = emissiveFactor;\n#ifdef USE_EMISSIVE_TEXTURE\n  emissive *= texture2D(emissiveTex, vTex).rgb;\n#endif\n  color += emissive;\n\n  // gamma correction\n  //color = pow(color, vec3(1.0/2.2));\n\n  return vec4(color, baseColor.a);\n}';
      }
      getProgramDefines(e) {
        let t = {};
        return (
          e._attributeMask & ai.COLOR_0 && (t.USE_VERTEX_COLOR = 1),
          e._attributeMask & ai.TEXCOORD_0 &&
            (this.baseColor.texture && (t.USE_BASE_COLOR_MAP = 1),
            this.normal.texture &&
              e._attributeMask & ai.TANGENT &&
              (t.USE_NORMAL_MAP = 1),
            this.metallicRoughness.texture && (t.USE_METAL_ROUGH_MAP = 1),
            this.occlusion.texture && (t.USE_OCCLUSION = 1),
            this.emissive.texture && (t.USE_EMISSIVE_TEXTURE = 1)),
          (this.metallicRoughness.texture &&
            e._attributeMask & ai.TEXCOORD_0) ||
            1 != this.metallicRoughnessFactor.value[1] ||
            (t.FULLY_ROUGH = 1),
          t
        );
      }
    }
    const Ri = WebGLRenderingContext,
      Ti = 1313821514,
      Fi = 5130562;
    function Ci(e) {
      return !!e.match(/^data:/);
    }
    function Pi(e, t) {
      return (function(e) {
        let t = new RegExp('^' + window.location.protocol, 'i');
        return !!e.match(t);
      })(e) || Ci(e)
        ? e
        : t + e;
    }
    function Ii(e) {
      switch (e) {
        case 'SCALAR':
          return 1;
        case 'VEC2':
          return 2;
        case 'VEC3':
          return 3;
        case 'VEC4':
          return 4;
        default:
          return 0;
      }
    }
    class Bi {
      constructor(e) {
        (this.renderer = e), (this._gl = e._gl);
      }
      loadFromUrl(e) {
        return fetch(e).then(t => {
          let r = e.lastIndexOf('/'),
            i = 0 !== r ? e.substring(0, r + 1) : '';
          if (e.endsWith('.gltf'))
            return t.json().then(e => this.loadFromJson(e, i));
          if (e.endsWith('.glb'))
            return t.arrayBuffer().then(e => this.loadFromBinary(e, i));
          throw new Error('Unrecognized file extension');
        });
      }
      loadFromBinary(e, t) {
        let r = new DataView(e, 0, 12),
          i = r.getUint32(0, !0),
          n = r.getUint32(4, !0),
          s = r.getUint32(8, !0);
        if (1179937895 != i)
          throw new Error('Invalid magic string in binary header.');
        if (2 != n) throw new Error('Incompatible version in binary header.');
        let a = {},
          o = 12;
        for (; o < s; ) {
          let t = new DataView(e, o, 8),
            r = t.getUint32(0, !0);
          (a[t.getUint32(4, !0)] = e.slice(o + 8, o + 8 + r)), (o += r + 8);
        }
        if (!a[Ti]) throw new Error('File contained no json chunk.');
        let l = new TextDecoder('utf-8').decode(a[Ti]),
          h = JSON.parse(l);
        return this.loadFromJson(h, t, a[Fi]);
      }
      loadFromJson(e, t, r) {
        if (!e.asset) throw new Error('Missing asset description.');
        if ('2.0' != e.asset.minVersion && '2.0' != e.asset.version)
          throw new Error('Incompatible asset version.');
        let i = [];
        if (r) i[0] = new Oi({}, t, r);
        else for (let r of e.buffers) i.push(new Oi(r, t));
        let n = [];
        for (let t of e.bufferViews) n.push(new Li(t, i));
        let s = [];
        if (e.images) for (let r of e.images) s.push(new Oi(r, t));
        let a = [];
        if (e.textures)
          for (let t of e.textures) {
            let e = s[t.source].texture(n);
            if (t.sampler) {
              let r = r[t.sampler];
              (e.sampler.minFilter = r.minFilter),
                (e.sampler.magFilter = r.magFilter),
                (e.sampler.wrapS = r.wrapS),
                (e.sampler.wrapT = r.wrapT);
            }
            a.push(e);
          }
        function o(e) {
          return e ? a[e.index] : null;
        }
        let l = [];
        if (e.materials)
          for (let t of e.materials) {
            let e = new Si(),
              r = t.pbrMetallicRoughness || {};
            switch (
              ((e.baseColorFactor.value = r.baseColorFactor || [1, 1, 1, 1]),
              (e.baseColor.texture = o(r.baseColorTexture)),
              (e.metallicRoughnessFactor.value = [
                r.metallicFactor || 1,
                r.roughnessFactor || 1,
              ]),
              (e.metallicRoughness.texture = o(r.metallicRoughnessTexture)),
              (e.normal.texture = o(t.normalTexture)),
              (e.occlusion.texture = o(t.occlusionTexture)),
              (e.occlusionStrength.value =
                t.occlusionTexture && t.occlusionTexture.strength
                  ? t.occlusionTexture.strength
                  : 1),
              (e.emissiveFactor.value = t.emissiveFactor || [0, 0, 0]),
              (e.emissive.texture = o(t.emissiveTexture)),
              !e.emissive.texture &&
                t.emissiveFactor &&
                (e.emissive.texture = new ni(1, 1, 1, 1)),
              t.alphaMode)
            ) {
              case 'BLEND':
              case 'MASK':
                e.state.blend = !0;
                break;
              default:
                e.state.blend = !1;
            }
            (e.state.cullFace = !t.doubleSided), l.push(e);
          }
        let h = e.accessors,
          u = [];
        for (let t of e.meshes) {
          let e = new Di();
          u.push(e);
          for (let r of t.primitives) {
            let t = null;
            t = 'material' in r ? l[r.material] : new Si();
            let i = [],
              s = 0,
              a = null,
              o = null;
            for (let e in r.attributes) {
              let t = h[r.attributes[e]],
                l = n[t.bufferView];
              s = t.count;
              let u = new Mi(
                e,
                l.renderBuffer(this.renderer, Ri.ARRAY_BUFFER),
                Ii(t.type),
                t.componentType,
                l.byteStride || 0,
                t.byteOffset || 0
              );
              (u.normalized = t.normalized || !1),
                'POSITION' == e && ((a = t.min), (o = t.max)),
                i.push(u);
            }
            let u = new xi(i, s, r.mode);
            if ('indices' in r) {
              let e = h[r.indices],
                t = n[e.bufferView];
              u.setIndexBuffer(
                t.renderBuffer(this.renderer, Ri.ELEMENT_ARRAY_BUFFER),
                e.byteOffset || 0,
                e.componentType
              ),
                (u.indexType = e.componentType),
                (u.indexByteOffset = e.byteOffset || 0),
                (u.elementCount = e.count);
            }
            a && o && u.setBounds(a, o),
              e.primitives.push(this.renderer.createRenderPrimitive(u, t));
          }
        }
        let c = new qr(),
          d = e.scenes[e.scene];
        for (let t of d.nodes) {
          let r = e.nodes[t];
          c.addNode(this.processNodes(r, e.nodes, u));
        }
        return c;
      }
      processNodes(e, t, r) {
        let i = new qr();
        if (((i.name = e.name), 'mesh' in e)) {
          let t = r[e.mesh];
          for (let e of t.primitives) i.addRenderPrimitive(e);
        }
        if (
          (e.matrix
            ? (i.matrix = new Float32Array(e.matrix))
            : (e.translation || e.rotation || e.scale) &&
              (e.translation &&
                (i.translation = new Float32Array(e.translation)),
              e.rotation && (i.rotation = new Float32Array(e.rotation)),
              e.scale && (i.scale = new Float32Array(e.scale))),
          e.children)
        )
          for (let n of e.children) {
            let e = t[n];
            i.addNode(this.processNodes(e, t, r));
          }
        return i;
      }
    }
    class Di {
      constructor() {
        this.primitives = [];
      }
    }
    class Li {
      constructor(e, t) {
        (this.buffer = t[e.buffer]),
          (this.byteOffset = e.byteOffset || 0),
          (this.byteLength = e.byteLength || null),
          (this.byteStride = e.byteStride),
          (this._viewPromise = null),
          (this._renderBuffer = null);
      }
      dataView() {
        return (
          this._viewPromise ||
            (this._viewPromise = this.buffer
              .arrayBuffer()
              .then(e => new DataView(e, this.byteOffset, this.byteLength))),
          this._viewPromise
        );
      }
      renderBuffer(e, t) {
        return (
          this._renderBuffer ||
            (this._renderBuffer = e.createRenderBuffer(t, this.dataView())),
          this._renderBuffer
        );
      }
    }
    class Oi {
      constructor(e, t, r) {
        (this.json = e),
          (this.baseUrl = t),
          (this._dataPromise = null),
          (this._texture = null),
          r && (this._dataPromise = Promise.resolve(r));
      }
      arrayBuffer() {
        if (!this._dataPromise) {
          if (Ci(this.json.uri)) {
            let e = this.json.uri.replace(
                'data:application/octet-stream;base64,',
                ''
              ),
              t = Uint8Array.from(atob(e), e => e.charCodeAt(0));
            return (
              (this._dataPromise = Promise.resolve(t.buffer)), this._dataPromise
            );
          }
          this._dataPromise = fetch(Pi(this.json.uri, this.baseUrl)).then(e =>
            e.arrayBuffer()
          );
        }
        return this._dataPromise;
      }
      texture(e) {
        if (!this._texture) {
          let t = new Image();
          if (((this._texture = new ei(t)), this.json.uri))
            Ci(this.json.uri)
              ? (t.src = this.json.uri)
              : (t.src = `${this.baseUrl}${this.json.uri}`);
          else {
            this._texture.genDataKey(),
              e[this.json.bufferView].dataView().then(e => {
                let r = new Blob([e], { type: this.json.mimeType });
                t.src = window.URL.createObjectURL(r);
              });
          }
        }
        return this._texture;
      }
    }
    let Ni = new WeakMap();
    class Ui extends qr {
      constructor(e) {
        super(),
          (this._url = e.url),
          (this._promise = null),
          (this._resolver = null),
          (this._rejecter = null);
      }
      onRendererChanged(e) {
        let t = Ni.get(e);
        t || ((t = new Bi(e)), Ni.set(e, t)),
          !this._resolver && this._promise && (this._promise = null),
          this._ensurePromise(),
          t
            .loadFromUrl(this._url)
            .then(e => {
              this.addNode(e),
                this._resolver(e.waitForComplete()),
                (this._resolver = null),
                (this._rejecter = null);
            })
            .catch(e => {
              this._rejecter(e),
                (this._resolver = null),
                (this._rejecter = null);
            });
      }
      _ensurePromise() {
        return (
          this._promise ||
            (this._promise = new Promise((e, t) => {
              (this._resolver = e), (this._rejecter = t);
            })),
          this._promise
        );
      }
      waitForComplete() {
        return this._ensurePromise();
      }
    }
    const ki = {
      Handedness: Object.freeze({ NONE: 'none', LEFT: 'left', RIGHT: 'right' }),
      ComponentState: Object.freeze({
        DEFAULT: 'default',
        TOUCHED: 'touched',
        PRESSED: 'pressed',
      }),
      ComponentProperty: Object.freeze({
        BUTTON: 'button',
        X_AXIS: 'xAxis',
        Y_AXIS: 'yAxis',
        STATE: 'state',
      }),
      ComponentType: Object.freeze({
        TRIGGER: 'trigger',
        SQUEEZE: 'squeeze',
        TOUCHPAD: 'touchpad',
        THUMBSTICK: 'thumbstick',
        BUTTON: 'button',
      }),
      ButtonTouchThreshold: 0.05,
      AxisTouchThreshold: 0.1,
      VisualResponseProperty: Object.freeze({
        TRANSFORM: 'transform',
        VISIBILITY: 'visibility',
      }),
    };
    async function Gi(e) {
      const t = await fetch(e);
      if (t.ok) return t.json();
      throw new Error(t.statusText);
    }
    async function Vi(e, t, r = null, i = !0) {
      if (!e) throw new Error('No xrInputSource supplied');
      if (!t) throw new Error('No basePath supplied');
      const n = await (async function(e) {
        if (!e) throw new Error('No basePath supplied');
        return await Gi(`${e}/profilesList.json`);
      })(t);
      let s;
      if (
        (e.profiles.some(e => {
          const r = n[e];
          return (
            r &&
              (s = {
                profileId: e,
                profilePath: `${t}/${r.path}`,
                deprecated: !!r.deprecated,
              }),
            !!s
          );
        }),
        !s)
      ) {
        if (!r) throw new Error('No matching profile name found');
        const e = n[r];
        if (!e)
          throw new Error(
            `No matching profile name found and default profile "${r}" missing.`
          );
        s = {
          profileId: r,
          profilePath: `${t}/${e.path}`,
          deprecated: !!e.deprecated,
        };
      }
      const a = await Gi(s.profilePath);
      let o;
      if (i) {
        let t;
        if (
          ((t =
            'any' === e.handedness
              ? a.layouts[Object.keys(a.layouts)[0]]
              : a.layouts[e.handedness]),
          !t)
        )
          throw new Error(
            `No matching handedness, ${e.handedness}, in profile ${s.profileId}`
          );
        t.assetPath && (o = s.profilePath.replace('profile.json', t.assetPath));
      }
      return { profile: a, assetPath: o };
    }
    ki.ComponentState.DEFAULT;
    const Qi = WebGLRenderingContext,
      zi = new Uint8Array([
        255,
        255,
        255,
        1,
        255,
        255,
        255,
        2,
        191,
        191,
        191,
        4,
        204,
        204,
        204,
        5,
        219,
        219,
        219,
        7,
        204,
        204,
        204,
        10,
        216,
        216,
        216,
        13,
        210,
        210,
        210,
        17,
        206,
        206,
        206,
        21,
        206,
        206,
        206,
        26,
        206,
        206,
        206,
        31,
        205,
        205,
        205,
        36,
        200,
        200,
        200,
        42,
        201,
        201,
        201,
        47,
        201,
        201,
        201,
        52,
        201,
        201,
        201,
        57,
        201,
        201,
        201,
        61,
        200,
        200,
        200,
        65,
        203,
        203,
        203,
        68,
        238,
        238,
        238,
        135,
        250,
        250,
        250,
        200,
        249,
        249,
        249,
        201,
        249,
        249,
        249,
        201,
        250,
        250,
        250,
        201,
        250,
        250,
        250,
        201,
        249,
        249,
        249,
        201,
        249,
        249,
        249,
        201,
        250,
        250,
        250,
        200,
        238,
        238,
        238,
        135,
        203,
        203,
        203,
        68,
        200,
        200,
        200,
        65,
        201,
        201,
        201,
        61,
        201,
        201,
        201,
        57,
        201,
        201,
        201,
        52,
        201,
        201,
        201,
        47,
        200,
        200,
        200,
        42,
        205,
        205,
        205,
        36,
        206,
        206,
        206,
        31,
        206,
        206,
        206,
        26,
        206,
        206,
        206,
        21,
        210,
        210,
        210,
        17,
        216,
        216,
        216,
        13,
        204,
        204,
        204,
        10,
        219,
        219,
        219,
        7,
        204,
        204,
        204,
        5,
        191,
        191,
        191,
        4,
        255,
        255,
        255,
        2,
        255,
        255,
        255,
        1,
      ]),
      Xi = [1, 1, 1, 0.25],
      Hi = [1, 1, 1, 1],
      Wi = [0.5, 0.5, 0.5, 0.25],
      ji = { controllers: !0, lasers: !0, cursors: !0 };
    class qi extends U {
      constructor() {
        super(),
          (this.renderOrder = I),
          (this.state.cullFace = !1),
          (this.state.blend = !0),
          (this.state.blendFuncSrc = Qi.ONE),
          (this.state.blendFuncDst = Qi.ONE),
          (this.state.depthMask = !1),
          (this.laser = this.defineSampler('diffuse')),
          (this.laser.texture = new ii(zi, 48, 1)),
          (this.laserColor = this.defineUniform('laserColor', Xi));
      }
      get materialName() {
        return 'INPUT_LASER';
      }
      get vertexSource() {
        return '\n    attribute vec3 POSITION;\n    attribute vec2 TEXCOORD_0;\n\n    varying vec2 vTexCoord;\n\n    vec4 vertex_main(mat4 proj, mat4 view, mat4 model) {\n      vTexCoord = TEXCOORD_0;\n      return proj * view * model * vec4(POSITION, 1.0);\n    }';
      }
      get fragmentSource() {
        return '\n    precision mediump float;\n\n    uniform vec4 laserColor;\n    uniform sampler2D diffuse;\n    varying vec2 vTexCoord;\n\n    const float fadePoint = 0.5335;\n    const float fadeEnd = 0.535;\n\n    vec4 fragment_main() {\n      vec2 uv = vTexCoord;\n      float front_fade_factor = 1.0 - clamp(1.0 - (uv.y - fadePoint) / (1.0 - fadePoint), 0.0, 1.0);\n      float back_fade_factor = clamp((uv.y - fadePoint) / (fadeEnd - fadePoint), 0.0, 1.0);\n      vec4 color = laserColor * texture2D(diffuse, vTexCoord);\n      float opacity = color.a * front_fade_factor * back_fade_factor;\n      return vec4(color.rgb * opacity, opacity);\n    }';
      }
    }
    const Yi =
        '\nattribute vec4 POSITION;\n\nvarying float vLuminance;\nvarying float vOpacity;\n\nvec4 vertex_main(mat4 proj, mat4 view, mat4 model) {\n  vLuminance = POSITION.z;\n  vOpacity = POSITION.w;\n\n  // Billboarded, constant size vertex transform.\n  vec4 screenPos = proj * view * model * vec4(0.0, 0.0, 0.0, 1.0);\n  screenPos /= screenPos.w;\n  screenPos.xy += POSITION.xy;\n  return screenPos;\n}',
      Zi =
        '\nprecision mediump float;\n\nuniform vec4 cursorColor;\nvarying float vLuminance;\nvarying float vOpacity;\n\nvec4 fragment_main() {\n  vec3 color = cursorColor.rgb * vLuminance;\n  float opacity = cursorColor.a * vOpacity;\n  return vec4(color * opacity, opacity);\n}';
    class Ki extends U {
      constructor() {
        super(),
          (this.renderOrder = I),
          (this.state.cullFace = !1),
          (this.state.blend = !0),
          (this.state.blendFuncSrc = Qi.ONE),
          (this.state.depthMask = !1),
          (this.cursorColor = this.defineUniform('cursorColor', Hi));
      }
      get materialName() {
        return 'INPUT_CURSOR';
      }
      get vertexSource() {
        return Yi;
      }
      get fragmentSource() {
        return Zi;
      }
    }
    class Ji extends U {
      constructor() {
        super(),
          (this.renderOrder = I),
          (this.state.cullFace = !1),
          (this.state.blend = !0),
          (this.state.blendFuncSrc = Qi.ONE),
          (this.state.depthFunc = Qi.GEQUAL),
          (this.state.depthMask = !1),
          (this.cursorColor = this.defineUniform('cursorColor', Wi));
      }
      get materialName() {
        return 'INPUT_CURSOR_2';
      }
      get vertexSource() {
        return Yi;
      }
      get fragmentSource() {
        return Zi;
      }
    }
    class $i extends qr {
      constructor() {
        super(),
          (this._maxInputElements = 32),
          (this._controllers = null),
          (this._lasers = null),
          (this._cursors = null),
          (this._activeControllers = 0),
          (this._activeLasers = 0),
          (this._activeCursors = 0);
      }
      onRendererChanged(e) {
        (this._controllers = null),
          (this._lasers = null),
          (this._cursors = null),
          (this._activeControllers = 0),
          (this._activeLasers = 0),
          (this._activeCursors = 0);
      }
      useProfileControllerMeshes(e) {
        e.addEventListener('inputsourceschange', e => {
          for (let t of e.added)
            'tracked-pointer' == t.targetRayMode &&
              Vi(
                t,
                'https://cdn.jsdelivr.net/npm/@webxr-input-profiles/assets@1.0/dist/profiles'
              ).then(({ profile: e, assetPath: r }) => {
                this.setControllerMesh(new Ui({ url: r }), t.handedness);
              });
        });
      }
      setControllerMesh(e, t = 'right') {
        this._controllers || (this._controllers = {}),
          (this._controllers[t] = { nodes: [e], activeCount: 0 }),
          (e.visible = !1),
          this.addNode(e);
      }
      addController(e, t = 'right') {
        if (!this._controllers) return;
        let r = this._controllers[t];
        if (!r) return;
        let i = null;
        r.activeCount < r.nodes.length
          ? (i = r.nodes[r.activeCount])
          : ((i = r.nodes[0].clone()), this.addNode(i), r.nodes.push(i)),
          (r.activeCount = (r.activeCount + 1) % this._maxInputElements),
          (i.matrix = e),
          (i.visible = !0);
      }
      addLaserPointer(e) {
        !this._lasers &&
          this._renderer &&
          ((this._lasers = [this._createLaserMesh()]),
          this.addNode(this._lasers[0]));
        let t = null;
        this._activeLasers < this._lasers.length
          ? (t = this._lasers[this._activeLasers])
          : ((t = this._lasers[0].clone()),
            this.addNode(t),
            this._lasers.push(t)),
          (this._activeLasers =
            (this._activeLasers + 1) % this._maxInputElements),
          (t.matrix = e.matrix),
          (t.visible = !0);
      }
      addCursor(e) {
        !this._cursors &&
          this._renderer &&
          ((this._cursors = [this._createCursorMesh()]),
          this.addNode(this._cursors[0]));
        let t = null;
        this._activeCursors < this._cursors.length
          ? (t = this._cursors[this._activeCursors])
          : ((t = this._cursors[0].clone()),
            this.addNode(t),
            this._cursors.push(t)),
          (this._activeCursors =
            (this._activeCursors + 1) % this._maxInputElements),
          (t.translation = e),
          (t.visible = !0);
      }
      reset(e) {
        if ((e || (e = ji), this._controllers && e.controllers))
          for (let e in this._controllers) {
            let t = this._controllers[e];
            t.activeCount = 0;
            for (let e of t.nodes) e.visible = !1;
          }
        if (this._lasers && e.lasers) {
          for (let e of this._lasers) e.visible = !1;
          this._activeLasers = 0;
        }
        if (this._cursors && e.cursors) {
          for (let e of this._cursors) e.visible = !1;
          this._activeCursors = 0;
        }
      }
      _createLaserMesh() {
        let e = this._renderer._gl,
          t = 0.005,
          r = [
            0,
            t,
            0,
            0,
            1,
            0,
            t,
            -1,
            0,
            0,
            0,
            -t,
            0,
            1,
            1,
            0,
            -t,
            -1,
            1,
            0,
            t,
            0,
            0,
            0,
            1,
            t,
            0,
            -1,
            0,
            0,
            -t,
            0,
            0,
            1,
            1,
            -t,
            0,
            -1,
            1,
            0,
            0,
            -t,
            0,
            0,
            1,
            0,
            -t,
            -1,
            0,
            0,
            0,
            t,
            0,
            1,
            1,
            0,
            t,
            -1,
            1,
            0,
            -t,
            0,
            0,
            0,
            1,
            -t,
            0,
            -1,
            0,
            0,
            t,
            0,
            0,
            1,
            1,
            t,
            0,
            -1,
            1,
            0,
          ],
          i = [
            0,
            1,
            2,
            1,
            3,
            2,
            4,
            5,
            6,
            5,
            7,
            6,
            8,
            9,
            10,
            9,
            11,
            10,
            12,
            13,
            14,
            13,
            15,
            14,
          ],
          n = this._renderer.createRenderBuffer(
            e.ARRAY_BUFFER,
            new Float32Array(r)
          ),
          s = this._renderer.createRenderBuffer(
            e.ELEMENT_ARRAY_BUFFER,
            new Uint16Array(i)
          ),
          a = i.length,
          o = [
            new Mi('POSITION', n, 3, e.FLOAT, 20, 0),
            new Mi('TEXCOORD_0', n, 2, e.FLOAT, 20, 12),
          ],
          l = new xi(o, a);
        l.setIndexBuffer(s);
        let h = new qi(),
          u = this._renderer.createRenderPrimitive(l, h),
          c = new qr();
        return c.addRenderPrimitive(u), c;
      }
      _createCursorMesh() {
        let e = this._renderer._gl,
          t = [],
          r = [],
          i = (2 * Math.PI) / 16;
        for (let e = 0; e < 16; ++e) {
          let n = e * i,
            s = Math.cos(n),
            a = Math.sin(n);
          t.push(0.004 * s, 0.004 * a, 1, 0.9), e > 1 && r.push(0, e - 1, e);
        }
        for (let e = 0; e < 16; ++e) {
          let n = e * i,
            s = Math.cos(n),
            a = Math.sin(n);
          if (
            (t.push(0.004 * s, 0.004 * a, 0.5, 0.75),
            t.push(0.007 * s, 0.007 * a, 0, 0),
            e > 0)
          ) {
            let t = 16 + 2 * e;
            r.push(t - 2, t - 1, t), r.push(t - 1, t + 1, t);
          }
        }
        r.push(46, 47, 16), r.push(47, 17, 16);
        let n = this._renderer.createRenderBuffer(
            e.ARRAY_BUFFER,
            new Float32Array(t)
          ),
          s = this._renderer.createRenderBuffer(
            e.ELEMENT_ARRAY_BUFFER,
            new Uint16Array(r)
          ),
          a = r.length,
          o = [new Mi('POSITION', n, 4, e.FLOAT, 16, 0)],
          l = new xi(o, a);
        l.setIndexBuffer(s);
        let h = new Ki(),
          u = new Ji(),
          c = this._renderer.createRenderPrimitive(l, h),
          d = this._renderer.createRenderPrimitive(l, u),
          A = new qr();
        return A.addRenderPrimitive(c), A.addRenderPrimitive(d), A;
      }
    }
    class en extends U {
      get materialName() {
        return 'SEVEN_SEGMENT_TEXT';
      }
      get vertexSource() {
        return '\n    attribute vec2 POSITION;\n\n    vec4 vertex_main(mat4 proj, mat4 view, mat4 model) {\n      return proj * view * model * vec4(POSITION, 0.0, 1.0);\n    }';
      }
      get fragmentSource() {
        return '\n    precision mediump float;\n    const vec4 color = vec4(0.0, 1.0, 0.0, 1.0);\n\n    vec4 fragment_main() {\n      return color;\n    }';
      }
    }
    class tn extends qr {
      constructor() {
        super(), (this._text = ''), (this._charNodes = []);
      }
      onRendererChanged(e) {
        this.clearNodes(), (this._charNodes = []);
        let t = [],
          r = {},
          i = [];
        function n(e, i, n, s, a) {
          let o = t.length / 2;
          t.push(i, n, s, n, s, a, i, a),
            (r[e] = [o, o + 2, o + 1, o, o + 3, o + 2]);
        }
        let s = {};
        function a(e, t) {
          let n = { character: e, offset: 2 * i.length, count: 0 };
          for (let e = 0; e < t.length; ++e) {
            let s = t[e],
              a = r[s];
            (n.count += a.length), i.push(...a);
          }
          s[e] = n;
        }
        n(0, -1, 1, 0.5, 0.75),
          n(1, -1, 0.125, 0.5, -0.125),
          n(2, -1, -0.75, 0.5, -1),
          n(3, -1, 1, -0.75, -0.125),
          n(4, 0.25, 1, 0.5, -0.125),
          n(5, -1, 0.125, -0.75, -1),
          n(6, 0.25, 0.125, 0.5, -1),
          a('0', [0, 2, 3, 4, 5, 6]),
          a('1', [4, 6]),
          a('2', [0, 1, 2, 4, 5]),
          a('3', [0, 1, 2, 4, 6]),
          a('4', [1, 3, 4, 6]),
          a('5', [0, 1, 2, 3, 6]),
          a('6', [0, 1, 2, 3, 5, 6]),
          a('7', [0, 4, 6]),
          a('8', [0, 1, 2, 3, 4, 5, 6]),
          a('9', [0, 1, 2, 3, 4, 6]),
          a('A', [0, 1, 3, 4, 5, 6]),
          a('B', [1, 2, 3, 5, 6]),
          a('C', [0, 2, 3, 5]),
          a('D', [1, 2, 4, 5, 6]),
          a('E', [0, 1, 2, 4, 6]),
          a('F', [0, 1, 3, 5]),
          a('P', [0, 1, 3, 4, 5]),
          a('-', [1]),
          a(' ', []),
          a('_', [2]);
        let o = e.gl,
          l = e.createRenderBuffer(o.ARRAY_BUFFER, new Float32Array(t)),
          h = e.createRenderBuffer(o.ELEMENT_ARRAY_BUFFER, new Uint16Array(i)),
          u = [new Mi('POSITION', l, 2, o.FLOAT, 8, 0)],
          c = new xi(u, i.length);
        c.setIndexBuffer(h);
        let d = new en();
        this._charPrimitives = {};
        for (let t in s) {
          let r = s[t];
          (c.elementCount = r.count),
            (c.indexByteOffset = r.offset),
            (this._charPrimitives[t] = e.createRenderPrimitive(c, d));
        }
        this.text = this._text;
      }
      get text() {
        return this._text;
      }
      set text(e) {
        this._text = e;
        let t = 0,
          r = null;
        for (; t < e.length; ++t)
          if (
            ((r =
              e[t] in this._charPrimitives
                ? this._charPrimitives[e[t]]
                : this._charPrimitives._),
            this._charNodes.length <= t)
          ) {
            let e = new qr();
            e.addRenderPrimitive(r);
            let i = 2 * t;
            (e.translation = [i, 0, 0]),
              this._charNodes.push(e),
              this.addNode(e);
          } else
            this._charNodes[t].clearRenderPrimitives(),
              this._charNodes[t].addRenderPrimitive(r),
              (this._charNodes[t].visible = !0);
        for (; t < this._charNodes.length; ++t) this._charNodes[t].visible = !1;
      }
    }
    class rn extends U {
      get materialName() {
        return 'STATS_VIEWER';
      }
      get vertexSource() {
        return '\n    attribute vec3 POSITION;\n    attribute vec3 COLOR_0;\n    varying vec4 vColor;\n\n    vec4 vertex_main(mat4 proj, mat4 view, mat4 model) {\n      vColor = vec4(COLOR_0, 1.0);\n      return proj * view * model * vec4(POSITION, 1.0);\n    }';
      }
      get fragmentSource() {
        return '\n    precision mediump float;\n    varying vec4 vColor;\n\n    vec4 fragment_main() {\n      return vColor;\n    }';
      }
    }
    function nn(e) {
      return (0.9 / 30) * e - 0.45;
    }
    function sn(e) {
      return Math.min(e, 90) * (0.7 / 90) - 0.45;
    }
    let an =
      window.performance && performance.now
        ? performance.now.bind(performance)
        : Date.now;
    class on extends qr {
      constructor() {
        super(),
          (this._performanceMonitoring = !1),
          (this._startTime = an()),
          (this._prevFrameTime = this._startTime),
          (this._prevGraphUpdateTime = this._startTime),
          (this._frames = 0),
          (this._fpsAverage = 0),
          (this._fpsMin = 0),
          (this._fpsStep = this._performanceMonitoring ? 1e3 : 250),
          (this._lastSegment = 0),
          (this._fpsVertexBuffer = null),
          (this._fpsRenderPrimitive = null),
          (this._fpsNode = null),
          (this._sevenSegmentNode = new tn()),
          (this._sevenSegmentNode.matrix = new Float32Array([
            0.075,
            0,
            0,
            0,
            0,
            0.075,
            0,
            0,
            0,
            0,
            1,
            0,
            -0.3625,
            0.3625,
            0.02,
            1,
          ]));
      }
      onRendererChanged(e) {
        this.clearNodes();
        let t = e.gl,
          r = [],
          i = [];
        for (let e = 0; e < 30; ++e) {
          r.push(nn(e), sn(0), 0.02, 0, 1, 1),
            r.push(nn(e + 1), sn(0), 0.02, 0, 1, 1),
            r.push(nn(e), sn(0), 0.02, 0, 1, 1),
            r.push(nn(e + 1), sn(0), 0.02, 0, 1, 1);
          let t = 4 * e;
          i.push(t, t + 3, t + 1, t + 3, t, t + 2);
        }
        function n(e, t, n, s, a, o, l, h) {
          let u = r.length / 6;
          r.push(e, t, a, o, l, h),
            r.push(n, s, a, o, l, h),
            r.push(e, s, a, o, l, h),
            r.push(n, t, a, o, l, h),
            i.push(u, u + 1, u + 2, u, u + 3, u + 1);
        }
        n(-0.5, -0.5, 0.5, 0.5, 0, 0, 0, 0.125),
          n(-0.45, -0.45, 0.45, 0.25, 0.01, 0, 0, 0.4),
          n(-0.45, sn(30), 0.45, sn(32), 0.015, 0.5, 0, 0.5),
          n(-0.45, sn(60), 0.45, sn(62), 0.015, 0.2, 0, 0.75),
          (this._fpsVertexBuffer = e.createRenderBuffer(
            t.ARRAY_BUFFER,
            new Float32Array(r),
            t.DYNAMIC_DRAW
          ));
        let s = e.createRenderBuffer(
            t.ELEMENT_ARRAY_BUFFER,
            new Uint16Array(i)
          ),
          a = [
            new Mi('POSITION', this._fpsVertexBuffer, 3, t.FLOAT, 24, 0),
            new Mi('COLOR_0', this._fpsVertexBuffer, 3, t.FLOAT, 24, 12),
          ],
          o = new xi(a, i.length);
        o.setIndexBuffer(s),
          o.setBounds([-0.5, -0.5, 0], [0.5, 0.5, 0.015]),
          (this._fpsRenderPrimitive = e.createRenderPrimitive(o, new rn())),
          (this._fpsNode = new qr()),
          this._fpsNode.addRenderPrimitive(this._fpsRenderPrimitive),
          this.addNode(this._fpsNode),
          this.addNode(this._sevenSegmentNode);
      }
      get performanceMonitoring() {
        return this._performanceMonitoring;
      }
      set performanceMonitoring(e) {
        (this._performanceMonitoring = e), (this._fpsStep = e ? 1e3 : 250);
      }
      begin() {
        this._startTime = an();
      }
      end() {
        let e = an(),
          t = 1e3 / (e - this._prevFrameTime);
        if (
          ((this._prevFrameTime = e),
          (this._fpsMin = this._frames ? Math.min(this._fpsMin, t) : t),
          this._frames++,
          e > this._prevGraphUpdateTime + this._fpsStep)
        ) {
          let t = e - this._prevGraphUpdateTime;
          (this._fpsAverage = Math.round(1e3 / (t / this._frames))),
            this._updateGraph(this._fpsMin, this._fpsAverage),
            this._performanceMonitoring &&
              console.log(
                `Average FPS: ${this._fpsAverage} Min FPS: ${this._fpsMin}`
              ),
            (this._prevGraphUpdateTime = e),
            (this._frames = 0),
            (this._fpsMin = 0);
        }
      }
      _updateGraph(e, t) {
        let r =
          ((i = e),
          {
            r: Math.max(0, Math.min(1, 1 - i / 60)),
            g: Math.max(0, Math.min(1, (i - 15) / 75)),
            b: Math.max(0, Math.min(1, (i - 15) / 75)),
          });
        var i;
        let n = sn(e - 1),
          s = sn(t + 1),
          a = [
            nn(this._lastSegment),
            s,
            0.02,
            r.r,
            r.g,
            r.b,
            nn(this._lastSegment + 1),
            s,
            0.02,
            r.r,
            r.g,
            r.b,
            nn(this._lastSegment),
            n,
            0.02,
            r.r,
            r.g,
            r.b,
            nn(this._lastSegment + 1),
            n,
            0.02,
            r.r,
            r.g,
            r.b,
          ];
        (r.r = 0.2),
          (r.g = 1),
          (r.b = 0.2),
          29 == this._lastSegment
            ? (this._renderer.updateRenderBuffer(
                this._fpsVertexBuffer,
                new Float32Array(a),
                24 * this._lastSegment * 4
              ),
              (a = [
                nn(0),
                sn(90),
                0.02,
                r.r,
                r.g,
                r.b,
                nn(0.25),
                sn(90),
                0.02,
                r.r,
                r.g,
                r.b,
                nn(0),
                sn(0),
                0.02,
                r.r,
                r.g,
                r.b,
                nn(0.25),
                sn(0),
                0.02,
                r.r,
                r.g,
                r.b,
              ]),
              this._renderer.updateRenderBuffer(
                this._fpsVertexBuffer,
                new Float32Array(a),
                0
              ))
            : (a.push(
                nn(this._lastSegment + 1),
                sn(90),
                0.02,
                r.r,
                r.g,
                r.b,
                nn(this._lastSegment + 1.25),
                sn(90),
                0.02,
                r.r,
                r.g,
                r.b,
                nn(this._lastSegment + 1),
                sn(0),
                0.02,
                r.r,
                r.g,
                r.b,
                nn(this._lastSegment + 1.25),
                sn(0),
                0.02,
                r.r,
                r.g,
                r.b
              ),
              this._renderer.updateRenderBuffer(
                this._fpsVertexBuffer,
                new Float32Array(a),
                24 * this._lastSegment * 4
              )),
          (this._lastSegment = (this._lastSegment + 1) % 30),
          (this._sevenSegmentNode.text = `${this._fpsAverage} FP5`);
      }
    }
    class ln extends Ai {
      constructor(e, t) {
        super(
          e ? e.projectionMatrix : null,
          e ? e.transform : null,
          t && e ? t.getViewport(e) : null,
          e ? e.eye : 'left'
        );
      }
    }
    const hn = WebGLRenderingContext;
    class un extends U {
      constructor() {
        super(),
          (this.renderOrder = C),
          (this.state.depthFunc = hn.LEQUAL),
          (this.state.depthMask = !1),
          (this.image = this.defineSampler('diffuse')),
          (this.texCoordScaleOffset = this.defineUniform(
            'texCoordScaleOffset',
            [1, 1, 0, 0, 1, 1, 0, 0],
            4
          ));
      }
      get materialName() {
        return 'SKYBOX';
      }
      get vertexSource() {
        return '\n    uniform int EYE_INDEX;\n    uniform vec4 texCoordScaleOffset[2];\n    attribute vec3 POSITION;\n    attribute vec2 TEXCOORD_0;\n    varying vec2 vTexCoord;\n\n    vec4 vertex_main(mat4 proj, mat4 view, mat4 model) {\n      vec4 scaleOffset = texCoordScaleOffset[EYE_INDEX];\n      vTexCoord = (TEXCOORD_0 * scaleOffset.xy) + scaleOffset.zw;\n      // Drop the translation portion of the view matrix\n      view[3].xyz = vec3(0.0, 0.0, 0.0);\n      vec4 out_vec = proj * view * model * vec4(POSITION, 1.0);\n\n      // Returning the W component for both Z and W forces the geometry depth to\n      // the far plane. When combined with a depth func of LEQUAL this makes the\n      // sky write to any depth fragment that has not been written to yet.\n      return out_vec.xyww;\n    }';
      }
      get fragmentSource() {
        return '\n    uniform sampler2D diffuse;\n    varying vec2 vTexCoord;\n\n    vec4 fragment_main() {\n      return texture2D(diffuse, vTexCoord);\n    }';
      }
    }
    let cn = null;
    function dn() {
      if (!cn) {
        cn = {};
        let e = (
          window.location.search.substring(1) ||
          window.location.hash.substring(1)
        ).split('&');
        for (let t = 0; t < e.length; t++) {
          let r = e[t].split('=');
          cn[r[0].toLowerCase()] = decodeURIComponent(r[1]);
        }
      }
    }
    window.onhashchange = function() {
      cn = null;
    };
    var An = r(0);
    if (
      class {
        static getString(e, t) {
          dn();
          let r = e.toLowerCase();
          return r in cn ? cn[r] : t;
        }
        static getInt(e, t) {
          dn();
          let r = e.toLowerCase();
          return r in cn ? parseInt(cn[r], 10) : t;
        }
        static getFloat(e, t) {
          dn();
          let r = e.toLowerCase();
          return r in cn ? parseFloat(cn[r]) : t;
        }
        static getBool(e, t) {
          dn();
          let r = e.toLowerCase();
          return r in cn ? 0 != parseInt(cn[r], 10) : t;
        }
      }.getBool('usePolyfill', !0)
    ) {
      new An.a();
    }
    let fn = null,
      pn = null,
      mn = null,
      gn = null,
      _n = new (class extends qr {
        constructor() {
          super(),
            (this._timestamp = -1),
            (this._frameDelta = 0),
            (this._statsStanding = !1),
            (this._stats = null),
            (this._statsEnabled = !1),
            this.enableStats(!0),
            (this._inputRenderer = null),
            (this._resetInputEndFrame = !0),
            (this._lastTimestamp = 0),
            (this._hoverFrame = 0),
            (this._hoveredNodes = []),
            (this.clear = !0);
        }
        setRenderer(e) {
          this._setRenderer(e);
        }
        loseRenderer() {
          this._renderer &&
            ((this._stats = null),
            (this._renderer = null),
            (this._inputRenderer = null));
        }
        get inputRenderer() {
          return (
            this._inputRenderer ||
              ((this._inputRenderer = new $i()),
              this.addNode(this._inputRenderer)),
            this._inputRenderer
          );
        }
        updateInputSources(e, t) {
          let r = [],
            i = this._hoverFrame;
          this._hoverFrame++;
          for (let n of e.session.inputSources) {
            let a = e.getPose(n.targetRaySpace, t);
            if (!a) continue;
            'tracked-pointer' == n.targetRayMode &&
              this.inputRenderer.addLaserPointer(a.transform);
            let o = this.hitTest(a.transform);
            if (o)
              this.inputRenderer.addCursor(o.intersection),
                o.node._hoverFrameId != i && o.node.onHoverStart(),
                (o.node._hoverFrameId = this._hoverFrame),
                r.push(o.node);
            else {
              let e = new zr(a.transform.matrix),
                t = 1,
                r = s.fromValues(e.origin[0], e.origin[1], e.origin[2]);
              s.add(r, r, [
                e.direction[0] * t,
                e.direction[1] * t,
                e.direction[2] * t,
              ]),
                this.inputRenderer.addCursor(r);
            }
            if (n.gripSpace) {
              let r = e.getPose(n.gripSpace, t);
              r &&
                this.inputRenderer.addController(
                  r.transform.matrix,
                  n.handedness
                );
            }
          }
          for (let e of this._hoveredNodes)
            e._hoverFrameId != this._hoverFrame && e.onHoverEnd();
          this._hoveredNodes = r;
        }
        handleSelect(e, t, r) {
          let i = t.getPose(e.targetRaySpace, r);
          i && this.handleSelectPointer(i.transform);
        }
        handleSelectPointer(e) {
          if (e) {
            let t = this.hitTest(e);
            t && t.node.handleSelect();
          }
        }
        enableStats(e) {
          e != this._statsEnabled &&
            ((this._statsEnabled = e),
            e
              ? ((this._stats = new on()),
                (this._stats.selectable = !0),
                this.addNode(this._stats),
                this._statsStanding
                  ? (this._stats.translation = [0, 1.4, -0.75])
                  : (this._stats.translation = [0, -0.3, -0.5]),
                (this._stats.scale = [0.3, 0.3, 0.3]),
                a.fromEuler(this._stats.rotation, -45, 0, 0))
              : e ||
                (this._stats &&
                  (this.removeNode(this._stats), (this._stats = null))));
        }
        standingStats(e) {
          (this._statsStanding = e),
            this._stats &&
              (this._statsStanding
                ? (this._stats.translation = [0, 1.4, -0.75])
                : (this._stats.translation = [0, -0.3, -0.5]),
              (this._stats.scale = [0.3, 0.3, 0.3]),
              a.fromEuler(this._stats.rotation, -45, 0, 0));
        }
        draw(e, t, r) {
          let i = new Ai(e, t);
          r && (i.eye = r), this.drawViewArray([i]);
        }
        drawXRFrame(e, t) {
          if (!this._renderer || !t) return;
          let r = this._renderer.gl,
            i = e.session.renderState.baseLayer;
          if (!r) return;
          r.bindFramebuffer(r.FRAMEBUFFER, i.framebuffer),
            this.clear && r.clear(r.COLOR_BUFFER_BIT | r.DEPTH_BUFFER_BIT);
          let n = [];
          for (let e of t.views) n.push(new ln(e, i));
          this.drawViewArray(n);
        }
        drawViewArray(e) {
          this._renderer && this._renderer.drawViews(e, this);
        }
        startFrame() {
          let e = this._timestamp;
          return (
            (this._timestamp = performance.now()),
            this._stats && this._stats.begin(),
            (this._frameDelta = e >= 0 ? this._timestamp - e : 0),
            this._update(this._timestamp, this._frameDelta),
            this._frameDelta
          );
        }
        endFrame() {
          this._inputRenderer &&
            this._resetInputEndFrame &&
            this._inputRenderer.reset(),
            this._stats && this._stats.end();
        }
        onLoadScene(e) {
          return Promise.resolve();
        }
      })();
    function vn() {
      return navigator.xr.requestSession('immersive-vr').then(wn);
    }
    function wn(e) {
      fn.setSession(e),
        e.addEventListener('end', yn),
        (mn = di({ xrCompatible: !0 })),
        (gn = new Ei(mn)),
        _n.setRenderer(gn),
        e.updateRenderState({ baseLayer: new XRWebGLLayer(e, mn) }),
        e.requestReferenceSpace('local').then(t => {
          (pn = t), e.requestAnimationFrame(En);
        });
    }
    function bn(e) {
      e.end();
    }
    function yn(e) {
      fn.setSession(null), (gn = null);
    }
    function En(e, t) {
      let r = t.session;
      _n.startFrame(), r.requestAnimationFrame(En);
      let i = t.getViewerPose(pn);
      if (i) {
        let e = r.renderState.baseLayer;
        mn.bindFramebuffer(mn.FRAMEBUFFER, e.framebuffer),
          mn.clear(mn.COLOR_BUFFER_BIT | mn.DEPTH_BUFFER_BIT);
        for (let t of i.views) {
          let r = e.getViewport(t);
          mn.viewport(r.x, r.y, r.width, r.height),
            _n.draw(t.projectionMatrix, t.transform);
        }
      }
      _n.endFrame();
    }
    _n.addNode(new Ui({ url: xr_path + 'media/gltf/space/space.gltf' })),
      _n.addNode(
        new (class extends qr {
          constructor(e) {
            super(),
              (this._url = e.url),
              (this._displayMode = e.displayMode || 'mono'),
              (this._rotationY = e.rotationY || 0);
          }
          onRendererChanged(e) {
            let t = [],
              r = [];
            for (let e = 0; e <= 40; ++e) {
              let i = (e * Math.PI) / 40,
                n = Math.sin(i),
                s = Math.cos(i),
                a = 41 * e,
                o = 41 * (e + 1);
              for (let i = 0; i <= 40; ++i) {
                let l = (2 * i * Math.PI) / 40 + this._rotationY,
                  h = Math.sin(l) * n,
                  u = s,
                  c = -Math.cos(l) * n,
                  d = i / 40,
                  A = e / 40;
                if ((t.push(h, u, c, d, A), e < 40 && i < 40)) {
                  let e = a + i,
                    t = o + i;
                  r.push(e, t, e + 1, t, t + 1, e + 1);
                }
              }
            }
            let i = e.createRenderBuffer(hn.ARRAY_BUFFER, new Float32Array(t)),
              n = e.createRenderBuffer(
                hn.ELEMENT_ARRAY_BUFFER,
                new Uint16Array(r)
              ),
              s = [
                new Mi('POSITION', i, 3, hn.FLOAT, 20, 0),
                new Mi('TEXCOORD_0', i, 2, hn.FLOAT, 20, 12),
              ],
              a = new xi(s, r.length);
            a.setIndexBuffer(n);
            let o = new un();
            switch (
              ((o.image.texture = new ti(this._url)), this._displayMode)
            ) {
              case 'mono':
                o.texCoordScaleOffset.value = [1, 1, 0, 0, 1, 1, 0, 0];
                break;
              case 'stereoTopBottom':
                o.texCoordScaleOffset.value = [1, 0.5, 0, 0, 1, 0.5, 0, 0.5];
                break;
              case 'stereoLeftRight':
                o.texCoordScaleOffset.value = [0.5, 1, 0, 0, 0.5, 1, 0.5, 0];
            }
            let l = e.createRenderPrimitive(a, o);
            this.addRenderPrimitive(l);
          }
        })({ url: xr_path + 'media/textures/milky-way-4k.png' })
      ),
      (fn = new c({ onRequestSession: vn, onEndSession: bn })),
      document.querySelector('footer').appendChild(fn.domElement),
      navigator.xr &&
        navigator.xr.isSessionSupported('immersive-vr').then(e => {
          fn.enabled = e;
        });
  },
]);
//# sourceMappingURL=xr.js.map
