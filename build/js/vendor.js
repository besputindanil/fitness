/* eslint-disable */

/*!
 * @copyright Copyright (c) 2017 IcoMoon.io
 * @license   Licensed under MIT license
 *            See https://github.com/Keyamoon/svgxuse
 * @version   1.2.6
 */
(function () {
  if ("undefined" !== typeof window && window.addEventListener) {
    var e = Object.create(null),
      l,
      d = function () {
        clearTimeout(l);
        l = setTimeout(n, 100);
      },
      m = function () {},
      t = function () {
        window.addEventListener("resize", d, !1);
        window.addEventListener("orientationchange", d, !1);
        if (window.MutationObserver) {
          var k = new MutationObserver(d);
          k.observe(document.documentElement, {
            childList: !0,
            subtree: !0,
            attributes: !0,
          });
          m = function () {
            try {
              k.disconnect(),
                window.removeEventListener("resize", d, !1),
                window.removeEventListener("orientationchange", d, !1);
            } catch (v) {}
          };
        } else
          document.documentElement.addEventListener(
            "DOMSubtreeModified",
            d,
            !1
          ),
            (m = function () {
              document.documentElement.removeEventListener(
                "DOMSubtreeModified",
                d,
                !1
              );
              window.removeEventListener("resize", d, !1);
              window.removeEventListener("orientationchange", d, !1);
            });
      },
      u = function (k) {
        function e(a) {
          if (void 0 !== a.protocol) var c = a;
          else (c = document.createElement("a")), (c.href = a);
          return c.protocol.replace(/:/g, "") + c.host;
        }
        if (window.XMLHttpRequest) {
          var d = new XMLHttpRequest();
          var m = e(location);
          k = e(k);
          d =
            void 0 === d.withCredentials && "" !== k && k !== m
              ? XDomainRequest || void 0
              : XMLHttpRequest;
        }
        return d;
      };
    var n = function () {
      function d() {
        --q;
        0 === q && (m(), t());
      }
      function l(a) {
        return function () {
          !0 !== e[a.base] &&
            (a.useEl.setAttributeNS(
              "http://www.w3.org/1999/xlink",
              "xlink:href",
              "#" + a.hash
            ),
            a.useEl.hasAttribute("href") &&
              a.useEl.setAttribute("href", "#" + a.hash));
        };
      }
      function p(a) {
        return function () {
          var c = document.body,
            b = document.createElement("x");
          a.onload = null;
          b.innerHTML = a.responseText;
          if ((b = b.getElementsByTagName("svg")[0]))
            b.setAttribute("aria-hidden", "true"),
              (b.style.position = "absolute"),
              (b.style.width = 0),
              (b.style.height = 0),
              (b.style.overflow = "hidden"),
              c.insertBefore(b, c.firstChild);
          d();
        };
      }
      function n(a) {
        return function () {
          a.onerror = null;
          a.ontimeout = null;
          d();
        };
      }
      var a,
        c,
        q = 0;
      m();
      var f = document.getElementsByTagName("use");
      for (c = 0; c < f.length; c += 1) {
        try {
          var g = f[c].getBoundingClientRect();
        } catch (w) {
          g = !1;
        }
        var h =
          (a =
            f[c].getAttribute("href") ||
            f[c].getAttributeNS("http://www.w3.org/1999/xlink", "href") ||
            f[c].getAttribute("xlink:href")) && a.split
            ? a.split("#")
            : ["", ""];
        var b = h[0];
        h = h[1];
        var r =
          g && 0 === g.left && 0 === g.right && 0 === g.top && 0 === g.bottom;
        g && 0 === g.width && 0 === g.height && !r
          ? (f[c].hasAttribute("href") &&
              f[c].setAttributeNS(
                "http://www.w3.org/1999/xlink",
                "xlink:href",
                a
              ),
            b.length &&
              ((a = e[b]),
              !0 !== a && setTimeout(l({ useEl: f[c], base: b, hash: h }), 0),
              void 0 === a &&
                ((h = u(b)),
                void 0 !== h &&
                  ((a = new h()),
                  (e[b] = a),
                  (a.onload = p(a)),
                  (a.onerror = n(a)),
                  (a.ontimeout = n(a)),
                  a.open("GET", b),
                  a.send(),
                  (q += 1)))))
          : r
          ? b.length &&
            e[b] &&
            setTimeout(l({ useEl: f[c], base: b, hash: h }), 0)
          : void 0 === e[b]
          ? (e[b] = !0)
          : e[b].onload && (e[b].abort(), delete e[b].onload, (e[b] = !0));
      }
      f = "";
      q += 1;
      d();
    };
    var p = function () {
      window.removeEventListener("load", p, !1);
      l = setTimeout(n, 0);
    };
    "complete" !== document.readyState
      ? window.addEventListener("load", p, !1)
      : p();
  }
})();

/*! jQuery v3.5.1 | (c) JS Foundation and other contributors | jquery.org/license */
!(function (e, t) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = e.document
        ? t(e, !0)
        : function (e) {
            if (!e.document)
              throw new Error("jQuery requires a window with a document");
            return t(e);
          })
    : t(e);
})("undefined" != typeof window ? window : this, function (C, e) {
  "use strict";
  var t = [],
    r = Object.getPrototypeOf,
    s = t.slice,
    g = t.flat
      ? function (e) {
          return t.flat.call(e);
        }
      : function (e) {
          return t.concat.apply([], e);
        },
    u = t.push,
    i = t.indexOf,
    n = {},
    o = n.toString,
    v = n.hasOwnProperty,
    a = v.toString,
    l = a.call(Object),
    y = {},
    m = function (e) {
      return "function" == typeof e && "number" != typeof e.nodeType;
    },
    x = function (e) {
      return null != e && e === e.window;
    },
    E = C.document,
    c = { type: !0, src: !0, nonce: !0, noModule: !0 };
  function b(e, t, n) {
    var r,
      i,
      o = (n = n || E).createElement("script");
    if (((o.text = e), t))
      for (r in c)
        (i = t[r] || (t.getAttribute && t.getAttribute(r))) &&
          o.setAttribute(r, i);
    n.head.appendChild(o).parentNode.removeChild(o);
  }
  function w(e) {
    return null == e
      ? e + ""
      : "object" == typeof e || "function" == typeof e
      ? n[o.call(e)] || "object"
      : typeof e;
  }
  var f = "3.5.1",
    S = function (e, t) {
      return new S.fn.init(e, t);
    };
  function p(e) {
    var t = !!e && "length" in e && e.length,
      n = w(e);
    return (
      !m(e) &&
      !x(e) &&
      ("array" === n ||
        0 === t ||
        ("number" == typeof t && 0 < t && t - 1 in e))
    );
  }
  (S.fn = S.prototype = {
    jquery: f,
    constructor: S,
    length: 0,
    toArray: function () {
      return s.call(this);
    },
    get: function (e) {
      return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e];
    },
    pushStack: function (e) {
      var t = S.merge(this.constructor(), e);
      return (t.prevObject = this), t;
    },
    each: function (e) {
      return S.each(this, e);
    },
    map: function (n) {
      return this.pushStack(
        S.map(this, function (e, t) {
          return n.call(e, t, e);
        })
      );
    },
    slice: function () {
      return this.pushStack(s.apply(this, arguments));
    },
    first: function () {
      return this.eq(0);
    },
    last: function () {
      return this.eq(-1);
    },
    even: function () {
      return this.pushStack(
        S.grep(this, function (e, t) {
          return (t + 1) % 2;
        })
      );
    },
    odd: function () {
      return this.pushStack(
        S.grep(this, function (e, t) {
          return t % 2;
        })
      );
    },
    eq: function (e) {
      var t = this.length,
        n = +e + (e < 0 ? t : 0);
      return this.pushStack(0 <= n && n < t ? [this[n]] : []);
    },
    end: function () {
      return this.prevObject || this.constructor();
    },
    push: u,
    sort: t.sort,
    splice: t.splice,
  }),
    (S.extend = S.fn.extend = function () {
      var e,
        t,
        n,
        r,
        i,
        o,
        a = arguments[0] || {},
        s = 1,
        u = arguments.length,
        l = !1;
      for (
        "boolean" == typeof a && ((l = a), (a = arguments[s] || {}), s++),
          "object" == typeof a || m(a) || (a = {}),
          s === u && ((a = this), s--);
        s < u;
        s++
      )
        if (null != (e = arguments[s]))
          for (t in e)
            (r = e[t]),
              "__proto__" !== t &&
                a !== r &&
                (l && r && (S.isPlainObject(r) || (i = Array.isArray(r)))
                  ? ((n = a[t]),
                    (o =
                      i && !Array.isArray(n)
                        ? []
                        : i || S.isPlainObject(n)
                        ? n
                        : {}),
                    (i = !1),
                    (a[t] = S.extend(l, o, r)))
                  : void 0 !== r && (a[t] = r));
      return a;
    }),
    S.extend({
      expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (e) {
        throw new Error(e);
      },
      noop: function () {},
      isPlainObject: function (e) {
        var t, n;
        return (
          !(!e || "[object Object]" !== o.call(e)) &&
          (!(t = r(e)) ||
            ("function" ==
              typeof (n = v.call(t, "constructor") && t.constructor) &&
              a.call(n) === l))
        );
      },
      isEmptyObject: function (e) {
        var t;
        for (t in e) return !1;
        return !0;
      },
      globalEval: function (e, t, n) {
        b(e, { nonce: t && t.nonce }, n);
      },
      each: function (e, t) {
        var n,
          r = 0;
        if (p(e)) {
          for (n = e.length; r < n; r++)
            if (!1 === t.call(e[r], r, e[r])) break;
        } else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
        return e;
      },
      makeArray: function (e, t) {
        var n = t || [];
        return (
          null != e &&
            (p(Object(e))
              ? S.merge(n, "string" == typeof e ? [e] : e)
              : u.call(n, e)),
          n
        );
      },
      inArray: function (e, t, n) {
        return null == t ? -1 : i.call(t, e, n);
      },
      merge: function (e, t) {
        for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
        return (e.length = i), e;
      },
      grep: function (e, t, n) {
        for (var r = [], i = 0, o = e.length, a = !n; i < o; i++)
          !t(e[i], i) !== a && r.push(e[i]);
        return r;
      },
      map: function (e, t, n) {
        var r,
          i,
          o = 0,
          a = [];
        if (p(e))
          for (r = e.length; o < r; o++)
            null != (i = t(e[o], o, n)) && a.push(i);
        else for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
        return g(a);
      },
      guid: 1,
      support: y,
    }),
    "function" == typeof Symbol && (S.fn[Symbol.iterator] = t[Symbol.iterator]),
    S.each(
      "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
        " "
      ),
      function (e, t) {
        n["[object " + t + "]"] = t.toLowerCase();
      }
    );
  var d = (function (n) {
    var e,
      d,
      b,
      o,
      i,
      h,
      f,
      g,
      w,
      u,
      l,
      T,
      C,
      a,
      E,
      v,
      s,
      c,
      y,
      S = "sizzle" + 1 * new Date(),
      p = n.document,
      k = 0,
      r = 0,
      m = ue(),
      x = ue(),
      A = ue(),
      N = ue(),
      D = function (e, t) {
        return e === t && (l = !0), 0;
      },
      j = {}.hasOwnProperty,
      t = [],
      q = t.pop,
      L = t.push,
      H = t.push,
      O = t.slice,
      P = function (e, t) {
        for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
        return -1;
      },
      R =
        "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      M = "[\\x20\\t\\r\\n\\f]",
      I =
        "(?:\\\\[\\da-fA-F]{1,6}" +
        M +
        "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
      W =
        "\\[" +
        M +
        "*(" +
        I +
        ")(?:" +
        M +
        "*([*^$|!~]?=)" +
        M +
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
        I +
        "))|)" +
        M +
        "*\\]",
      F =
        ":(" +
        I +
        ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
        W +
        ")*)|.*)\\)|)",
      B = new RegExp(M + "+", "g"),
      $ = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
      _ = new RegExp("^" + M + "*," + M + "*"),
      z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
      U = new RegExp(M + "|>"),
      X = new RegExp(F),
      V = new RegExp("^" + I + "$"),
      G = {
        ID: new RegExp("^#(" + I + ")"),
        CLASS: new RegExp("^\\.(" + I + ")"),
        TAG: new RegExp("^(" + I + "|[*])"),
        ATTR: new RegExp("^" + W),
        PSEUDO: new RegExp("^" + F),
        CHILD: new RegExp(
          "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
            M +
            "*(even|odd|(([+-]|)(\\d*)n|)" +
            M +
            "*(?:([+-]|)" +
            M +
            "*(\\d+)|))" +
            M +
            "*\\)|)",
          "i"
        ),
        bool: new RegExp("^(?:" + R + ")$", "i"),
        needsContext: new RegExp(
          "^" +
            M +
            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
            M +
            "*((?:-\\d)?\\d*)" +
            M +
            "*\\)|)(?=[^-]|$)",
          "i"
        ),
      },
      Y = /HTML$/i,
      Q = /^(?:input|select|textarea|button)$/i,
      J = /^h\d$/i,
      K = /^[^{]+\{\s*\[native \w/,
      Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      ee = /[+~]/,
      te = new RegExp("\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\([^\\r\\n\\f])", "g"),
      ne = function (e, t) {
        var n = "0x" + e.slice(1) - 65536;
        return (
          t ||
          (n < 0
            ? String.fromCharCode(n + 65536)
            : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320))
        );
      },
      re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
      ie = function (e, t) {
        return t
          ? "\0" === e
            ? "\ufffd"
            : e.slice(0, -1) +
              "\\" +
              e.charCodeAt(e.length - 1).toString(16) +
              " "
          : "\\" + e;
      },
      oe = function () {
        T();
      },
      ae = be(
        function (e) {
          return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
        },
        { dir: "parentNode", next: "legend" }
      );
    try {
      H.apply((t = O.call(p.childNodes)), p.childNodes),
        t[p.childNodes.length].nodeType;
    } catch (e) {
      H = {
        apply: t.length
          ? function (e, t) {
              L.apply(e, O.call(t));
            }
          : function (e, t) {
              var n = e.length,
                r = 0;
              while ((e[n++] = t[r++]));
              e.length = n - 1;
            },
      };
    }
    function se(t, e, n, r) {
      var i,
        o,
        a,
        s,
        u,
        l,
        c,
        f = e && e.ownerDocument,
        p = e ? e.nodeType : 9;
      if (
        ((n = n || []),
        "string" != typeof t || !t || (1 !== p && 9 !== p && 11 !== p))
      )
        return n;
      if (!r && (T(e), (e = e || C), E)) {
        if (11 !== p && (u = Z.exec(t)))
          if ((i = u[1])) {
            if (9 === p) {
              if (!(a = e.getElementById(i))) return n;
              if (a.id === i) return n.push(a), n;
            } else if (f && (a = f.getElementById(i)) && y(e, a) && a.id === i)
              return n.push(a), n;
          } else {
            if (u[2]) return H.apply(n, e.getElementsByTagName(t)), n;
            if (
              (i = u[3]) &&
              d.getElementsByClassName &&
              e.getElementsByClassName
            )
              return H.apply(n, e.getElementsByClassName(i)), n;
          }
        if (
          d.qsa &&
          !N[t + " "] &&
          (!v || !v.test(t)) &&
          (1 !== p || "object" !== e.nodeName.toLowerCase())
        ) {
          if (((c = t), (f = e), 1 === p && (U.test(t) || z.test(t)))) {
            ((f = (ee.test(t) && ye(e.parentNode)) || e) === e && d.scope) ||
              ((s = e.getAttribute("id"))
                ? (s = s.replace(re, ie))
                : e.setAttribute("id", (s = S))),
              (o = (l = h(t)).length);
            while (o--) l[o] = (s ? "#" + s : ":scope") + " " + xe(l[o]);
            c = l.join(",");
          }
          try {
            return H.apply(n, f.querySelectorAll(c)), n;
          } catch (e) {
            N(t, !0);
          } finally {
            s === S && e.removeAttribute("id");
          }
        }
      }
      return g(t.replace($, "$1"), e, n, r);
    }
    function ue() {
      var r = [];
      return function e(t, n) {
        return (
          r.push(t + " ") > b.cacheLength && delete e[r.shift()],
          (e[t + " "] = n)
        );
      };
    }
    function le(e) {
      return (e[S] = !0), e;
    }
    function ce(e) {
      var t = C.createElement("fieldset");
      try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), (t = null);
      }
    }
    function fe(e, t) {
      var n = e.split("|"),
        r = n.length;
      while (r--) b.attrHandle[n[r]] = t;
    }
    function pe(e, t) {
      var n = t && e,
        r =
          n &&
          1 === e.nodeType &&
          1 === t.nodeType &&
          e.sourceIndex - t.sourceIndex;
      if (r) return r;
      if (n) while ((n = n.nextSibling)) if (n === t) return -1;
      return e ? 1 : -1;
    }
    function de(t) {
      return function (e) {
        return "input" === e.nodeName.toLowerCase() && e.type === t;
      };
    }
    function he(n) {
      return function (e) {
        var t = e.nodeName.toLowerCase();
        return ("input" === t || "button" === t) && e.type === n;
      };
    }
    function ge(t) {
      return function (e) {
        return "form" in e
          ? e.parentNode && !1 === e.disabled
            ? "label" in e
              ? "label" in e.parentNode
                ? e.parentNode.disabled === t
                : e.disabled === t
              : e.isDisabled === t || (e.isDisabled !== !t && ae(e) === t)
            : e.disabled === t
          : "label" in e && e.disabled === t;
      };
    }
    function ve(a) {
      return le(function (o) {
        return (
          (o = +o),
          le(function (e, t) {
            var n,
              r = a([], e.length, o),
              i = r.length;
            while (i--) e[(n = r[i])] && (e[n] = !(t[n] = e[n]));
          })
        );
      });
    }
    function ye(e) {
      return e && "undefined" != typeof e.getElementsByTagName && e;
    }
    for (e in ((d = se.support = {}),
    (i = se.isXML = function (e) {
      var t = e.namespaceURI,
        n = (e.ownerDocument || e).documentElement;
      return !Y.test(t || (n && n.nodeName) || "HTML");
    }),
    (T = se.setDocument = function (e) {
      var t,
        n,
        r = e ? e.ownerDocument || e : p;
      return (
        r != C &&
          9 === r.nodeType &&
          r.documentElement &&
          ((a = (C = r).documentElement),
          (E = !i(C)),
          p != C &&
            (n = C.defaultView) &&
            n.top !== n &&
            (n.addEventListener
              ? n.addEventListener("unload", oe, !1)
              : n.attachEvent && n.attachEvent("onunload", oe)),
          (d.scope = ce(function (e) {
            return (
              a.appendChild(e).appendChild(C.createElement("div")),
              "undefined" != typeof e.querySelectorAll &&
                !e.querySelectorAll(":scope fieldset div").length
            );
          })),
          (d.attributes = ce(function (e) {
            return (e.className = "i"), !e.getAttribute("className");
          })),
          (d.getElementsByTagName = ce(function (e) {
            return (
              e.appendChild(C.createComment("")),
              !e.getElementsByTagName("*").length
            );
          })),
          (d.getElementsByClassName = K.test(C.getElementsByClassName)),
          (d.getById = ce(function (e) {
            return (
              (a.appendChild(e).id = S),
              !C.getElementsByName || !C.getElementsByName(S).length
            );
          })),
          d.getById
            ? ((b.filter.ID = function (e) {
                var t = e.replace(te, ne);
                return function (e) {
                  return e.getAttribute("id") === t;
                };
              }),
              (b.find.ID = function (e, t) {
                if ("undefined" != typeof t.getElementById && E) {
                  var n = t.getElementById(e);
                  return n ? [n] : [];
                }
              }))
            : ((b.filter.ID = function (e) {
                var n = e.replace(te, ne);
                return function (e) {
                  var t =
                    "undefined" != typeof e.getAttributeNode &&
                    e.getAttributeNode("id");
                  return t && t.value === n;
                };
              }),
              (b.find.ID = function (e, t) {
                if ("undefined" != typeof t.getElementById && E) {
                  var n,
                    r,
                    i,
                    o = t.getElementById(e);
                  if (o) {
                    if ((n = o.getAttributeNode("id")) && n.value === e)
                      return [o];
                    (i = t.getElementsByName(e)), (r = 0);
                    while ((o = i[r++]))
                      if ((n = o.getAttributeNode("id")) && n.value === e)
                        return [o];
                  }
                  return [];
                }
              })),
          (b.find.TAG = d.getElementsByTagName
            ? function (e, t) {
                return "undefined" != typeof t.getElementsByTagName
                  ? t.getElementsByTagName(e)
                  : d.qsa
                  ? t.querySelectorAll(e)
                  : void 0;
              }
            : function (e, t) {
                var n,
                  r = [],
                  i = 0,
                  o = t.getElementsByTagName(e);
                if ("*" === e) {
                  while ((n = o[i++])) 1 === n.nodeType && r.push(n);
                  return r;
                }
                return o;
              }),
          (b.find.CLASS =
            d.getElementsByClassName &&
            function (e, t) {
              if ("undefined" != typeof t.getElementsByClassName && E)
                return t.getElementsByClassName(e);
            }),
          (s = []),
          (v = []),
          (d.qsa = K.test(C.querySelectorAll)) &&
            (ce(function (e) {
              var t;
              (a.appendChild(e).innerHTML =
                "<a id='" +
                S +
                "'></a><select id='" +
                S +
                "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                e.querySelectorAll("[msallowcapture^='']").length &&
                  v.push("[*^$]=" + M + "*(?:''|\"\")"),
                e.querySelectorAll("[selected]").length ||
                  v.push("\\[" + M + "*(?:value|" + R + ")"),
                e.querySelectorAll("[id~=" + S + "-]").length || v.push("~="),
                (t = C.createElement("input")).setAttribute("name", ""),
                e.appendChild(t),
                e.querySelectorAll("[name='']").length ||
                  v.push("\\[" + M + "*name" + M + "*=" + M + "*(?:''|\"\")"),
                e.querySelectorAll(":checked").length || v.push(":checked"),
                e.querySelectorAll("a#" + S + "+*").length ||
                  v.push(".#.+[+~]"),
                e.querySelectorAll("\\\f"),
                v.push("[\\r\\n\\f]");
            }),
            ce(function (e) {
              e.innerHTML =
                "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
              var t = C.createElement("input");
              t.setAttribute("type", "hidden"),
                e.appendChild(t).setAttribute("name", "D"),
                e.querySelectorAll("[name=d]").length &&
                  v.push("name" + M + "*[*^$|!~]?="),
                2 !== e.querySelectorAll(":enabled").length &&
                  v.push(":enabled", ":disabled"),
                (a.appendChild(e).disabled = !0),
                2 !== e.querySelectorAll(":disabled").length &&
                  v.push(":enabled", ":disabled"),
                e.querySelectorAll("*,:x"),
                v.push(",.*:");
            })),
          (d.matchesSelector = K.test(
            (c =
              a.matches ||
              a.webkitMatchesSelector ||
              a.mozMatchesSelector ||
              a.oMatchesSelector ||
              a.msMatchesSelector)
          )) &&
            ce(function (e) {
              (d.disconnectedMatch = c.call(e, "*")),
                c.call(e, "[s!='']:x"),
                s.push("!=", F);
            }),
          (v = v.length && new RegExp(v.join("|"))),
          (s = s.length && new RegExp(s.join("|"))),
          (t = K.test(a.compareDocumentPosition)),
          (y =
            t || K.test(a.contains)
              ? function (e, t) {
                  var n = 9 === e.nodeType ? e.documentElement : e,
                    r = t && t.parentNode;
                  return (
                    e === r ||
                    !(
                      !r ||
                      1 !== r.nodeType ||
                      !(n.contains
                        ? n.contains(r)
                        : e.compareDocumentPosition &&
                          16 & e.compareDocumentPosition(r))
                    )
                  );
                }
              : function (e, t) {
                  if (t) while ((t = t.parentNode)) if (t === e) return !0;
                  return !1;
                }),
          (D = t
            ? function (e, t) {
                if (e === t) return (l = !0), 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return (
                  n ||
                  (1 &
                    (n =
                      (e.ownerDocument || e) == (t.ownerDocument || t)
                        ? e.compareDocumentPosition(t)
                        : 1) ||
                  (!d.sortDetached && t.compareDocumentPosition(e) === n)
                    ? e == C || (e.ownerDocument == p && y(p, e))
                      ? -1
                      : t == C || (t.ownerDocument == p && y(p, t))
                      ? 1
                      : u
                      ? P(u, e) - P(u, t)
                      : 0
                    : 4 & n
                    ? -1
                    : 1)
                );
              }
            : function (e, t) {
                if (e === t) return (l = !0), 0;
                var n,
                  r = 0,
                  i = e.parentNode,
                  o = t.parentNode,
                  a = [e],
                  s = [t];
                if (!i || !o)
                  return e == C
                    ? -1
                    : t == C
                    ? 1
                    : i
                    ? -1
                    : o
                    ? 1
                    : u
                    ? P(u, e) - P(u, t)
                    : 0;
                if (i === o) return pe(e, t);
                n = e;
                while ((n = n.parentNode)) a.unshift(n);
                n = t;
                while ((n = n.parentNode)) s.unshift(n);
                while (a[r] === s[r]) r++;
                return r ? pe(a[r], s[r]) : a[r] == p ? -1 : s[r] == p ? 1 : 0;
              })),
        C
      );
    }),
    (se.matches = function (e, t) {
      return se(e, null, null, t);
    }),
    (se.matchesSelector = function (e, t) {
      if (
        (T(e),
        d.matchesSelector &&
          E &&
          !N[t + " "] &&
          (!s || !s.test(t)) &&
          (!v || !v.test(t)))
      )
        try {
          var n = c.call(e, t);
          if (
            n ||
            d.disconnectedMatch ||
            (e.document && 11 !== e.document.nodeType)
          )
            return n;
        } catch (e) {
          N(t, !0);
        }
      return 0 < se(t, C, null, [e]).length;
    }),
    (se.contains = function (e, t) {
      return (e.ownerDocument || e) != C && T(e), y(e, t);
    }),
    (se.attr = function (e, t) {
      (e.ownerDocument || e) != C && T(e);
      var n = b.attrHandle[t.toLowerCase()],
        r = n && j.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
      return void 0 !== r
        ? r
        : d.attributes || !E
        ? e.getAttribute(t)
        : (r = e.getAttributeNode(t)) && r.specified
        ? r.value
        : null;
    }),
    (se.escape = function (e) {
      return (e + "").replace(re, ie);
    }),
    (se.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }),
    (se.uniqueSort = function (e) {
      var t,
        n = [],
        r = 0,
        i = 0;
      if (
        ((l = !d.detectDuplicates),
        (u = !d.sortStable && e.slice(0)),
        e.sort(D),
        l)
      ) {
        while ((t = e[i++])) t === e[i] && (r = n.push(i));
        while (r--) e.splice(n[r], 1);
      }
      return (u = null), e;
    }),
    (o = se.getText = function (e) {
      var t,
        n = "",
        r = 0,
        i = e.nodeType;
      if (i) {
        if (1 === i || 9 === i || 11 === i) {
          if ("string" == typeof e.textContent) return e.textContent;
          for (e = e.firstChild; e; e = e.nextSibling) n += o(e);
        } else if (3 === i || 4 === i) return e.nodeValue;
      } else while ((t = e[r++])) n += o(t);
      return n;
    }),
    ((b = se.selectors = {
      cacheLength: 50,
      createPseudo: le,
      match: G,
      attrHandle: {},
      find: {},
      relative: {
        ">": { dir: "parentNode", first: !0 },
        " ": { dir: "parentNode" },
        "+": { dir: "previousSibling", first: !0 },
        "~": { dir: "previousSibling" },
      },
      preFilter: {
        ATTR: function (e) {
          return (
            (e[1] = e[1].replace(te, ne)),
            (e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne)),
            "~=" === e[2] && (e[3] = " " + e[3] + " "),
            e.slice(0, 4)
          );
        },
        CHILD: function (e) {
          return (
            (e[1] = e[1].toLowerCase()),
            "nth" === e[1].slice(0, 3)
              ? (e[3] || se.error(e[0]),
                (e[4] = +(e[4]
                  ? e[5] + (e[6] || 1)
                  : 2 * ("even" === e[3] || "odd" === e[3]))),
                (e[5] = +(e[7] + e[8] || "odd" === e[3])))
              : e[3] && se.error(e[0]),
            e
          );
        },
        PSEUDO: function (e) {
          var t,
            n = !e[6] && e[2];
          return G.CHILD.test(e[0])
            ? null
            : (e[3]
                ? (e[2] = e[4] || e[5] || "")
                : n &&
                  X.test(n) &&
                  (t = h(n, !0)) &&
                  (t = n.indexOf(")", n.length - t) - n.length) &&
                  ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
              e.slice(0, 3));
        },
      },
      filter: {
        TAG: function (e) {
          var t = e.replace(te, ne).toLowerCase();
          return "*" === e
            ? function () {
                return !0;
              }
            : function (e) {
                return e.nodeName && e.nodeName.toLowerCase() === t;
              };
        },
        CLASS: function (e) {
          var t = m[e + " "];
          return (
            t ||
            ((t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) &&
              m(e, function (e) {
                return t.test(
                  ("string" == typeof e.className && e.className) ||
                    ("undefined" != typeof e.getAttribute &&
                      e.getAttribute("class")) ||
                    ""
                );
              }))
          );
        },
        ATTR: function (n, r, i) {
          return function (e) {
            var t = se.attr(e, n);
            return null == t
              ? "!=" === r
              : !r ||
                  ((t += ""),
                  "=" === r
                    ? t === i
                    : "!=" === r
                    ? t !== i
                    : "^=" === r
                    ? i && 0 === t.indexOf(i)
                    : "*=" === r
                    ? i && -1 < t.indexOf(i)
                    : "$=" === r
                    ? i && t.slice(-i.length) === i
                    : "~=" === r
                    ? -1 < (" " + t.replace(B, " ") + " ").indexOf(i)
                    : "|=" === r &&
                      (t === i || t.slice(0, i.length + 1) === i + "-"));
          };
        },
        CHILD: function (h, e, t, g, v) {
          var y = "nth" !== h.slice(0, 3),
            m = "last" !== h.slice(-4),
            x = "of-type" === e;
          return 1 === g && 0 === v
            ? function (e) {
                return !!e.parentNode;
              }
            : function (e, t, n) {
                var r,
                  i,
                  o,
                  a,
                  s,
                  u,
                  l = y !== m ? "nextSibling" : "previousSibling",
                  c = e.parentNode,
                  f = x && e.nodeName.toLowerCase(),
                  p = !n && !x,
                  d = !1;
                if (c) {
                  if (y) {
                    while (l) {
                      a = e;
                      while ((a = a[l]))
                        if (
                          x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType
                        )
                          return !1;
                      u = l = "only" === h && !u && "nextSibling";
                    }
                    return !0;
                  }
                  if (((u = [m ? c.firstChild : c.lastChild]), m && p)) {
                    (d =
                      (s =
                        (r =
                          (i =
                            (o = (a = c)[S] || (a[S] = {}))[a.uniqueID] ||
                            (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]) &&
                      r[2]),
                      (a = s && c.childNodes[s]);
                    while ((a = (++s && a && a[l]) || (d = s = 0) || u.pop()))
                      if (1 === a.nodeType && ++d && a === e) {
                        i[h] = [k, s, d];
                        break;
                      }
                  } else if (
                    (p &&
                      (d = s =
                        (r =
                          (i =
                            (o = (a = e)[S] || (a[S] = {}))[a.uniqueID] ||
                            (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]),
                    !1 === d)
                  )
                    while ((a = (++s && a && a[l]) || (d = s = 0) || u.pop()))
                      if (
                        (x
                          ? a.nodeName.toLowerCase() === f
                          : 1 === a.nodeType) &&
                        ++d &&
                        (p &&
                          ((i =
                            (o = a[S] || (a[S] = {}))[a.uniqueID] ||
                            (o[a.uniqueID] = {}))[h] = [k, d]),
                        a === e)
                      )
                        break;
                  return (d -= v) === g || (d % g == 0 && 0 <= d / g);
                }
              };
        },
        PSEUDO: function (e, o) {
          var t,
            a =
              b.pseudos[e] ||
              b.setFilters[e.toLowerCase()] ||
              se.error("unsupported pseudo: " + e);
          return a[S]
            ? a(o)
            : 1 < a.length
            ? ((t = [e, e, "", o]),
              b.setFilters.hasOwnProperty(e.toLowerCase())
                ? le(function (e, t) {
                    var n,
                      r = a(e, o),
                      i = r.length;
                    while (i--) e[(n = P(e, r[i]))] = !(t[n] = r[i]);
                  })
                : function (e) {
                    return a(e, 0, t);
                  })
            : a;
        },
      },
      pseudos: {
        not: le(function (e) {
          var r = [],
            i = [],
            s = f(e.replace($, "$1"));
          return s[S]
            ? le(function (e, t, n, r) {
                var i,
                  o = s(e, null, r, []),
                  a = e.length;
                while (a--) (i = o[a]) && (e[a] = !(t[a] = i));
              })
            : function (e, t, n) {
                return (r[0] = e), s(r, null, n, i), (r[0] = null), !i.pop();
              };
        }),
        has: le(function (t) {
          return function (e) {
            return 0 < se(t, e).length;
          };
        }),
        contains: le(function (t) {
          return (
            (t = t.replace(te, ne)),
            function (e) {
              return -1 < (e.textContent || o(e)).indexOf(t);
            }
          );
        }),
        lang: le(function (n) {
          return (
            V.test(n || "") || se.error("unsupported lang: " + n),
            (n = n.replace(te, ne).toLowerCase()),
            function (e) {
              var t;
              do {
                if (
                  (t = E
                    ? e.lang
                    : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                )
                  return (
                    (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                  );
              } while ((e = e.parentNode) && 1 === e.nodeType);
              return !1;
            }
          );
        }),
        target: function (e) {
          var t = n.location && n.location.hash;
          return t && t.slice(1) === e.id;
        },
        root: function (e) {
          return e === a;
        },
        focus: function (e) {
          return (
            e === C.activeElement &&
            (!C.hasFocus || C.hasFocus()) &&
            !!(e.type || e.href || ~e.tabIndex)
          );
        },
        enabled: ge(!1),
        disabled: ge(!0),
        checked: function (e) {
          var t = e.nodeName.toLowerCase();
          return (
            ("input" === t && !!e.checked) || ("option" === t && !!e.selected)
          );
        },
        selected: function (e) {
          return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
        },
        empty: function (e) {
          for (e = e.firstChild; e; e = e.nextSibling)
            if (e.nodeType < 6) return !1;
          return !0;
        },
        parent: function (e) {
          return !b.pseudos.empty(e);
        },
        header: function (e) {
          return J.test(e.nodeName);
        },
        input: function (e) {
          return Q.test(e.nodeName);
        },
        button: function (e) {
          var t = e.nodeName.toLowerCase();
          return ("input" === t && "button" === e.type) || "button" === t;
        },
        text: function (e) {
          var t;
          return (
            "input" === e.nodeName.toLowerCase() &&
            "text" === e.type &&
            (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
          );
        },
        first: ve(function () {
          return [0];
        }),
        last: ve(function (e, t) {
          return [t - 1];
        }),
        eq: ve(function (e, t, n) {
          return [n < 0 ? n + t : n];
        }),
        even: ve(function (e, t) {
          for (var n = 0; n < t; n += 2) e.push(n);
          return e;
        }),
        odd: ve(function (e, t) {
          for (var n = 1; n < t; n += 2) e.push(n);
          return e;
        }),
        lt: ve(function (e, t, n) {
          for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r; ) e.push(r);
          return e;
        }),
        gt: ve(function (e, t, n) {
          for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
          return e;
        }),
      },
    }).pseudos.nth = b.pseudos.eq),
    { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
      b.pseudos[e] = de(e);
    for (e in { submit: !0, reset: !0 }) b.pseudos[e] = he(e);
    function me() {}
    function xe(e) {
      for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
      return r;
    }
    function be(s, e, t) {
      var u = e.dir,
        l = e.next,
        c = l || u,
        f = t && "parentNode" === c,
        p = r++;
      return e.first
        ? function (e, t, n) {
            while ((e = e[u])) if (1 === e.nodeType || f) return s(e, t, n);
            return !1;
          }
        : function (e, t, n) {
            var r,
              i,
              o,
              a = [k, p];
            if (n) {
              while ((e = e[u]))
                if ((1 === e.nodeType || f) && s(e, t, n)) return !0;
            } else
              while ((e = e[u]))
                if (1 === e.nodeType || f)
                  if (
                    ((i =
                      (o = e[S] || (e[S] = {}))[e.uniqueID] ||
                      (o[e.uniqueID] = {})),
                    l && l === e.nodeName.toLowerCase())
                  )
                    e = e[u] || e;
                  else {
                    if ((r = i[c]) && r[0] === k && r[1] === p)
                      return (a[2] = r[2]);
                    if (((i[c] = a)[2] = s(e, t, n))) return !0;
                  }
            return !1;
          };
    }
    function we(i) {
      return 1 < i.length
        ? function (e, t, n) {
            var r = i.length;
            while (r--) if (!i[r](e, t, n)) return !1;
            return !0;
          }
        : i[0];
    }
    function Te(e, t, n, r, i) {
      for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)
        (o = e[s]) && ((n && !n(o, r, i)) || (a.push(o), l && t.push(s)));
      return a;
    }
    function Ce(d, h, g, v, y, e) {
      return (
        v && !v[S] && (v = Ce(v)),
        y && !y[S] && (y = Ce(y, e)),
        le(function (e, t, n, r) {
          var i,
            o,
            a,
            s = [],
            u = [],
            l = t.length,
            c =
              e ||
              (function (e, t, n) {
                for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n);
                return n;
              })(h || "*", n.nodeType ? [n] : n, []),
            f = !d || (!e && h) ? c : Te(c, s, d, n, r),
            p = g ? (y || (e ? d : l || v) ? [] : t) : f;
          if ((g && g(f, p, n, r), v)) {
            (i = Te(p, u)), v(i, [], n, r), (o = i.length);
            while (o--) (a = i[o]) && (p[u[o]] = !(f[u[o]] = a));
          }
          if (e) {
            if (y || d) {
              if (y) {
                (i = []), (o = p.length);
                while (o--) (a = p[o]) && i.push((f[o] = a));
                y(null, (p = []), i, r);
              }
              o = p.length;
              while (o--)
                (a = p[o]) &&
                  -1 < (i = y ? P(e, a) : s[o]) &&
                  (e[i] = !(t[i] = a));
            }
          } else (p = Te(p === t ? p.splice(l, p.length) : p)), y ? y(null, t, p, r) : H.apply(t, p);
        })
      );
    }
    function Ee(e) {
      for (
        var i,
          t,
          n,
          r = e.length,
          o = b.relative[e[0].type],
          a = o || b.relative[" "],
          s = o ? 1 : 0,
          u = be(
            function (e) {
              return e === i;
            },
            a,
            !0
          ),
          l = be(
            function (e) {
              return -1 < P(i, e);
            },
            a,
            !0
          ),
          c = [
            function (e, t, n) {
              var r =
                (!o && (n || t !== w)) ||
                ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
              return (i = null), r;
            },
          ];
        s < r;
        s++
      )
        if ((t = b.relative[e[s].type])) c = [be(we(c), t)];
        else {
          if ((t = b.filter[e[s].type].apply(null, e[s].matches))[S]) {
            for (n = ++s; n < r; n++) if (b.relative[e[n].type]) break;
            return Ce(
              1 < s && we(c),
              1 < s &&
                xe(
                  e
                    .slice(0, s - 1)
                    .concat({ value: " " === e[s - 2].type ? "*" : "" })
                ).replace($, "$1"),
              t,
              s < n && Ee(e.slice(s, n)),
              n < r && Ee((e = e.slice(n))),
              n < r && xe(e)
            );
          }
          c.push(t);
        }
      return we(c);
    }
    return (
      (me.prototype = b.filters = b.pseudos),
      (b.setFilters = new me()),
      (h = se.tokenize = function (e, t) {
        var n,
          r,
          i,
          o,
          a,
          s,
          u,
          l = x[e + " "];
        if (l) return t ? 0 : l.slice(0);
        (a = e), (s = []), (u = b.preFilter);
        while (a) {
          for (o in ((n && !(r = _.exec(a))) ||
            (r && (a = a.slice(r[0].length) || a), s.push((i = []))),
          (n = !1),
          (r = z.exec(a)) &&
            ((n = r.shift()),
            i.push({ value: n, type: r[0].replace($, " ") }),
            (a = a.slice(n.length))),
          b.filter))
            !(r = G[o].exec(a)) ||
              (u[o] && !(r = u[o](r))) ||
              ((n = r.shift()),
              i.push({ value: n, type: o, matches: r }),
              (a = a.slice(n.length)));
          if (!n) break;
        }
        return t ? a.length : a ? se.error(e) : x(e, s).slice(0);
      }),
      (f = se.compile = function (e, t) {
        var n,
          v,
          y,
          m,
          x,
          r,
          i = [],
          o = [],
          a = A[e + " "];
        if (!a) {
          t || (t = h(e)), (n = t.length);
          while (n--) (a = Ee(t[n]))[S] ? i.push(a) : o.push(a);
          (a = A(
            e,
            ((v = o),
            (m = 0 < (y = i).length),
            (x = 0 < v.length),
            (r = function (e, t, n, r, i) {
              var o,
                a,
                s,
                u = 0,
                l = "0",
                c = e && [],
                f = [],
                p = w,
                d = e || (x && b.find.TAG("*", i)),
                h = (k += null == p ? 1 : Math.random() || 0.1),
                g = d.length;
              for (
                i && (w = t == C || t || i);
                l !== g && null != (o = d[l]);
                l++
              ) {
                if (x && o) {
                  (a = 0), t || o.ownerDocument == C || (T(o), (n = !E));
                  while ((s = v[a++]))
                    if (s(o, t || C, n)) {
                      r.push(o);
                      break;
                    }
                  i && (k = h);
                }
                m && ((o = !s && o) && u--, e && c.push(o));
              }
              if (((u += l), m && l !== u)) {
                a = 0;
                while ((s = y[a++])) s(c, f, t, n);
                if (e) {
                  if (0 < u) while (l--) c[l] || f[l] || (f[l] = q.call(r));
                  f = Te(f);
                }
                H.apply(r, f),
                  i &&
                    !e &&
                    0 < f.length &&
                    1 < u + y.length &&
                    se.uniqueSort(r);
              }
              return i && ((k = h), (w = p)), c;
            }),
            m ? le(r) : r)
          )).selector = e;
        }
        return a;
      }),
      (g = se.select = function (e, t, n, r) {
        var i,
          o,
          a,
          s,
          u,
          l = "function" == typeof e && e,
          c = !r && h((e = l.selector || e));
        if (((n = n || []), 1 === c.length)) {
          if (
            2 < (o = c[0] = c[0].slice(0)).length &&
            "ID" === (a = o[0]).type &&
            9 === t.nodeType &&
            E &&
            b.relative[o[1].type]
          ) {
            if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0]))
              return n;
            l && (t = t.parentNode), (e = e.slice(o.shift().value.length));
          }
          i = G.needsContext.test(e) ? 0 : o.length;
          while (i--) {
            if (((a = o[i]), b.relative[(s = a.type)])) break;
            if (
              (u = b.find[s]) &&
              (r = u(
                a.matches[0].replace(te, ne),
                (ee.test(o[0].type) && ye(t.parentNode)) || t
              ))
            ) {
              if ((o.splice(i, 1), !(e = r.length && xe(o))))
                return H.apply(n, r), n;
              break;
            }
          }
        }
        return (
          (l || f(e, c))(
            r,
            t,
            !E,
            n,
            !t || (ee.test(e) && ye(t.parentNode)) || t
          ),
          n
        );
      }),
      (d.sortStable = S.split("").sort(D).join("") === S),
      (d.detectDuplicates = !!l),
      T(),
      (d.sortDetached = ce(function (e) {
        return 1 & e.compareDocumentPosition(C.createElement("fieldset"));
      })),
      ce(function (e) {
        return (
          (e.innerHTML = "<a href='#'></a>"),
          "#" === e.firstChild.getAttribute("href")
        );
      }) ||
        fe("type|href|height|width", function (e, t, n) {
          if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
        }),
      (d.attributes &&
        ce(function (e) {
          return (
            (e.innerHTML = "<input/>"),
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
          );
        })) ||
        fe("value", function (e, t, n) {
          if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
        }),
      ce(function (e) {
        return null == e.getAttribute("disabled");
      }) ||
        fe(R, function (e, t, n) {
          var r;
          if (!n)
            return !0 === e[t]
              ? t.toLowerCase()
              : (r = e.getAttributeNode(t)) && r.specified
              ? r.value
              : null;
        }),
      se
    );
  })(C);
  (S.find = d),
    (S.expr = d.selectors),
    (S.expr[":"] = S.expr.pseudos),
    (S.uniqueSort = S.unique = d.uniqueSort),
    (S.text = d.getText),
    (S.isXMLDoc = d.isXML),
    (S.contains = d.contains),
    (S.escapeSelector = d.escape);
  var h = function (e, t, n) {
      var r = [],
        i = void 0 !== n;
      while ((e = e[t]) && 9 !== e.nodeType)
        if (1 === e.nodeType) {
          if (i && S(e).is(n)) break;
          r.push(e);
        }
      return r;
    },
    T = function (e, t) {
      for (var n = []; e; e = e.nextSibling)
        1 === e.nodeType && e !== t && n.push(e);
      return n;
    },
    k = S.expr.match.needsContext;
  function A(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }
  var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  function D(e, n, r) {
    return m(n)
      ? S.grep(e, function (e, t) {
          return !!n.call(e, t, e) !== r;
        })
      : n.nodeType
      ? S.grep(e, function (e) {
          return (e === n) !== r;
        })
      : "string" != typeof n
      ? S.grep(e, function (e) {
          return -1 < i.call(n, e) !== r;
        })
      : S.filter(n, e, r);
  }
  (S.filter = function (e, t, n) {
    var r = t[0];
    return (
      n && (e = ":not(" + e + ")"),
      1 === t.length && 1 === r.nodeType
        ? S.find.matchesSelector(r, e)
          ? [r]
          : []
        : S.find.matches(
            e,
            S.grep(t, function (e) {
              return 1 === e.nodeType;
            })
          )
    );
  }),
    S.fn.extend({
      find: function (e) {
        var t,
          n,
          r = this.length,
          i = this;
        if ("string" != typeof e)
          return this.pushStack(
            S(e).filter(function () {
              for (t = 0; t < r; t++) if (S.contains(i[t], this)) return !0;
            })
          );
        for (n = this.pushStack([]), t = 0; t < r; t++) S.find(e, i[t], n);
        return 1 < r ? S.uniqueSort(n) : n;
      },
      filter: function (e) {
        return this.pushStack(D(this, e || [], !1));
      },
      not: function (e) {
        return this.pushStack(D(this, e || [], !0));
      },
      is: function (e) {
        return !!D(this, "string" == typeof e && k.test(e) ? S(e) : e || [], !1)
          .length;
      },
    });
  var j,
    q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  ((S.fn.init = function (e, t, n) {
    var r, i;
    if (!e) return this;
    if (((n = n || j), "string" == typeof e)) {
      if (
        !(r =
          "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length
            ? [null, e, null]
            : q.exec(e)) ||
        (!r[1] && t)
      )
        return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
      if (r[1]) {
        if (
          ((t = t instanceof S ? t[0] : t),
          S.merge(
            this,
            S.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)
          ),
          N.test(r[1]) && S.isPlainObject(t))
        )
          for (r in t) m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
        return this;
      }
      return (
        (i = E.getElementById(r[2])) && ((this[0] = i), (this.length = 1)), this
      );
    }
    return e.nodeType
      ? ((this[0] = e), (this.length = 1), this)
      : m(e)
      ? void 0 !== n.ready
        ? n.ready(e)
        : e(S)
      : S.makeArray(e, this);
  }).prototype = S.fn),
    (j = S(E));
  var L = /^(?:parents|prev(?:Until|All))/,
    H = { children: !0, contents: !0, next: !0, prev: !0 };
  function O(e, t) {
    while ((e = e[t]) && 1 !== e.nodeType);
    return e;
  }
  S.fn.extend({
    has: function (e) {
      var t = S(e, this),
        n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++) if (S.contains(this, t[e])) return !0;
      });
    },
    closest: function (e, t) {
      var n,
        r = 0,
        i = this.length,
        o = [],
        a = "string" != typeof e && S(e);
      if (!k.test(e))
        for (; r < i; r++)
          for (n = this[r]; n && n !== t; n = n.parentNode)
            if (
              n.nodeType < 11 &&
              (a
                ? -1 < a.index(n)
                : 1 === n.nodeType && S.find.matchesSelector(n, e))
            ) {
              o.push(n);
              break;
            }
      return this.pushStack(1 < o.length ? S.uniqueSort(o) : o);
    },
    index: function (e) {
      return e
        ? "string" == typeof e
          ? i.call(S(e), this[0])
          : i.call(this, e.jquery ? e[0] : e)
        : this[0] && this[0].parentNode
        ? this.first().prevAll().length
        : -1;
    },
    add: function (e, t) {
      return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t))));
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    },
  }),
    S.each(
      {
        parent: function (e) {
          var t = e.parentNode;
          return t && 11 !== t.nodeType ? t : null;
        },
        parents: function (e) {
          return h(e, "parentNode");
        },
        parentsUntil: function (e, t, n) {
          return h(e, "parentNode", n);
        },
        next: function (e) {
          return O(e, "nextSibling");
        },
        prev: function (e) {
          return O(e, "previousSibling");
        },
        nextAll: function (e) {
          return h(e, "nextSibling");
        },
        prevAll: function (e) {
          return h(e, "previousSibling");
        },
        nextUntil: function (e, t, n) {
          return h(e, "nextSibling", n);
        },
        prevUntil: function (e, t, n) {
          return h(e, "previousSibling", n);
        },
        siblings: function (e) {
          return T((e.parentNode || {}).firstChild, e);
        },
        children: function (e) {
          return T(e.firstChild);
        },
        contents: function (e) {
          return null != e.contentDocument && r(e.contentDocument)
            ? e.contentDocument
            : (A(e, "template") && (e = e.content || e),
              S.merge([], e.childNodes));
        },
      },
      function (r, i) {
        S.fn[r] = function (e, t) {
          var n = S.map(this, i, e);
          return (
            "Until" !== r.slice(-5) && (t = e),
            t && "string" == typeof t && (n = S.filter(t, n)),
            1 < this.length &&
              (H[r] || S.uniqueSort(n), L.test(r) && n.reverse()),
            this.pushStack(n)
          );
        };
      }
    );
  var P = /[^\x20\t\r\n\f]+/g;
  function R(e) {
    return e;
  }
  function M(e) {
    throw e;
  }
  function I(e, t, n, r) {
    var i;
    try {
      e && m((i = e.promise))
        ? i.call(e).done(t).fail(n)
        : e && m((i = e.then))
        ? i.call(e, t, n)
        : t.apply(void 0, [e].slice(r));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }
  (S.Callbacks = function (r) {
    var e, n;
    r =
      "string" == typeof r
        ? ((e = r),
          (n = {}),
          S.each(e.match(P) || [], function (e, t) {
            n[t] = !0;
          }),
          n)
        : S.extend({}, r);
    var i,
      t,
      o,
      a,
      s = [],
      u = [],
      l = -1,
      c = function () {
        for (a = a || r.once, o = i = !0; u.length; l = -1) {
          t = u.shift();
          while (++l < s.length)
            !1 === s[l].apply(t[0], t[1]) &&
              r.stopOnFalse &&
              ((l = s.length), (t = !1));
        }
        r.memory || (t = !1), (i = !1), a && (s = t ? [] : "");
      },
      f = {
        add: function () {
          return (
            s &&
              (t && !i && ((l = s.length - 1), u.push(t)),
              (function n(e) {
                S.each(e, function (e, t) {
                  m(t)
                    ? (r.unique && f.has(t)) || s.push(t)
                    : t && t.length && "string" !== w(t) && n(t);
                });
              })(arguments),
              t && !i && c()),
            this
          );
        },
        remove: function () {
          return (
            S.each(arguments, function (e, t) {
              var n;
              while (-1 < (n = S.inArray(t, s, n)))
                s.splice(n, 1), n <= l && l--;
            }),
            this
          );
        },
        has: function (e) {
          return e ? -1 < S.inArray(e, s) : 0 < s.length;
        },
        empty: function () {
          return s && (s = []), this;
        },
        disable: function () {
          return (a = u = []), (s = t = ""), this;
        },
        disabled: function () {
          return !s;
        },
        lock: function () {
          return (a = u = []), t || i || (s = t = ""), this;
        },
        locked: function () {
          return !!a;
        },
        fireWith: function (e, t) {
          return (
            a ||
              ((t = [e, (t = t || []).slice ? t.slice() : t]),
              u.push(t),
              i || c()),
            this
          );
        },
        fire: function () {
          return f.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!o;
        },
      };
    return f;
  }),
    S.extend({
      Deferred: function (e) {
        var o = [
            [
              "notify",
              "progress",
              S.Callbacks("memory"),
              S.Callbacks("memory"),
              2,
            ],
            [
              "resolve",
              "done",
              S.Callbacks("once memory"),
              S.Callbacks("once memory"),
              0,
              "resolved",
            ],
            [
              "reject",
              "fail",
              S.Callbacks("once memory"),
              S.Callbacks("once memory"),
              1,
              "rejected",
            ],
          ],
          i = "pending",
          a = {
            state: function () {
              return i;
            },
            always: function () {
              return s.done(arguments).fail(arguments), this;
            },
            catch: function (e) {
              return a.then(null, e);
            },
            pipe: function () {
              var i = arguments;
              return S.Deferred(function (r) {
                S.each(o, function (e, t) {
                  var n = m(i[t[4]]) && i[t[4]];
                  s[t[1]](function () {
                    var e = n && n.apply(this, arguments);
                    e && m(e.promise)
                      ? e
                          .promise()
                          .progress(r.notify)
                          .done(r.resolve)
                          .fail(r.reject)
                      : r[t[0] + "With"](this, n ? [e] : arguments);
                  });
                }),
                  (i = null);
              }).promise();
            },
            then: function (t, n, r) {
              var u = 0;
              function l(i, o, a, s) {
                return function () {
                  var n = this,
                    r = arguments,
                    e = function () {
                      var e, t;
                      if (!(i < u)) {
                        if ((e = a.apply(n, r)) === o.promise())
                          throw new TypeError("Thenable self-resolution");
                        (t =
                          e &&
                          ("object" == typeof e || "function" == typeof e) &&
                          e.then),
                          m(t)
                            ? s
                              ? t.call(e, l(u, o, R, s), l(u, o, M, s))
                              : (u++,
                                t.call(
                                  e,
                                  l(u, o, R, s),
                                  l(u, o, M, s),
                                  l(u, o, R, o.notifyWith)
                                ))
                            : (a !== R && ((n = void 0), (r = [e])),
                              (s || o.resolveWith)(n, r));
                      }
                    },
                    t = s
                      ? e
                      : function () {
                          try {
                            e();
                          } catch (e) {
                            S.Deferred.exceptionHook &&
                              S.Deferred.exceptionHook(e, t.stackTrace),
                              u <= i + 1 &&
                                (a !== M && ((n = void 0), (r = [e])),
                                o.rejectWith(n, r));
                          }
                        };
                  i
                    ? t()
                    : (S.Deferred.getStackHook &&
                        (t.stackTrace = S.Deferred.getStackHook()),
                      C.setTimeout(t));
                };
              }
              return S.Deferred(function (e) {
                o[0][3].add(l(0, e, m(r) ? r : R, e.notifyWith)),
                  o[1][3].add(l(0, e, m(t) ? t : R)),
                  o[2][3].add(l(0, e, m(n) ? n : M));
              }).promise();
            },
            promise: function (e) {
              return null != e ? S.extend(e, a) : a;
            },
          },
          s = {};
        return (
          S.each(o, function (e, t) {
            var n = t[2],
              r = t[5];
            (a[t[1]] = n.add),
              r &&
                n.add(
                  function () {
                    i = r;
                  },
                  o[3 - e][2].disable,
                  o[3 - e][3].disable,
                  o[0][2].lock,
                  o[0][3].lock
                ),
              n.add(t[3].fire),
              (s[t[0]] = function () {
                return (
                  s[t[0] + "With"](this === s ? void 0 : this, arguments), this
                );
              }),
              (s[t[0] + "With"] = n.fireWith);
          }),
          a.promise(s),
          e && e.call(s, s),
          s
        );
      },
      when: function (e) {
        var n = arguments.length,
          t = n,
          r = Array(t),
          i = s.call(arguments),
          o = S.Deferred(),
          a = function (t) {
            return function (e) {
              (r[t] = this),
                (i[t] = 1 < arguments.length ? s.call(arguments) : e),
                --n || o.resolveWith(r, i);
            };
          };
        if (
          n <= 1 &&
          (I(e, o.done(a(t)).resolve, o.reject, !n),
          "pending" === o.state() || m(i[t] && i[t].then))
        )
          return o.then();
        while (t--) I(i[t], a(t), o.reject);
        return o.promise();
      },
    });
  var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  (S.Deferred.exceptionHook = function (e, t) {
    C.console &&
      C.console.warn &&
      e &&
      W.test(e.name) &&
      C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
  }),
    (S.readyException = function (e) {
      C.setTimeout(function () {
        throw e;
      });
    });
  var F = S.Deferred();
  function B() {
    E.removeEventListener("DOMContentLoaded", B),
      C.removeEventListener("load", B),
      S.ready();
  }
  (S.fn.ready = function (e) {
    return (
      F.then(e)["catch"](function (e) {
        S.readyException(e);
      }),
      this
    );
  }),
    S.extend({
      isReady: !1,
      readyWait: 1,
      ready: function (e) {
        (!0 === e ? --S.readyWait : S.isReady) ||
          ((S.isReady = !0) !== e && 0 < --S.readyWait) ||
          F.resolveWith(E, [S]);
      },
    }),
    (S.ready.then = F.then),
    "complete" === E.readyState ||
    ("loading" !== E.readyState && !E.documentElement.doScroll)
      ? C.setTimeout(S.ready)
      : (E.addEventListener("DOMContentLoaded", B),
        C.addEventListener("load", B));
  var $ = function (e, t, n, r, i, o, a) {
      var s = 0,
        u = e.length,
        l = null == n;
      if ("object" === w(n))
        for (s in ((i = !0), n)) $(e, t, s, n[s], !0, o, a);
      else if (
        void 0 !== r &&
        ((i = !0),
        m(r) || (a = !0),
        l &&
          (a
            ? (t.call(e, r), (t = null))
            : ((l = t),
              (t = function (e, t, n) {
                return l.call(S(e), n);
              }))),
        t)
      )
        for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
      return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
    },
    _ = /^-ms-/,
    z = /-([a-z])/g;
  function U(e, t) {
    return t.toUpperCase();
  }
  function X(e) {
    return e.replace(_, "ms-").replace(z, U);
  }
  var V = function (e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  };
  function G() {
    this.expando = S.expando + G.uid++;
  }
  (G.uid = 1),
    (G.prototype = {
      cache: function (e) {
        var t = e[this.expando];
        return (
          t ||
            ((t = {}),
            V(e) &&
              (e.nodeType
                ? (e[this.expando] = t)
                : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0,
                  }))),
          t
        );
      },
      set: function (e, t, n) {
        var r,
          i = this.cache(e);
        if ("string" == typeof t) i[X(t)] = n;
        else for (r in t) i[X(r)] = t[r];
        return i;
      },
      get: function (e, t) {
        return void 0 === t
          ? this.cache(e)
          : e[this.expando] && e[this.expando][X(t)];
      },
      access: function (e, t, n) {
        return void 0 === t || (t && "string" == typeof t && void 0 === n)
          ? this.get(e, t)
          : (this.set(e, t, n), void 0 !== n ? n : t);
      },
      remove: function (e, t) {
        var n,
          r = e[this.expando];
        if (void 0 !== r) {
          if (void 0 !== t) {
            n = (t = Array.isArray(t)
              ? t.map(X)
              : (t = X(t)) in r
              ? [t]
              : t.match(P) || []).length;
            while (n--) delete r[t[n]];
          }
          (void 0 === t || S.isEmptyObject(r)) &&
            (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
        }
      },
      hasData: function (e) {
        var t = e[this.expando];
        return void 0 !== t && !S.isEmptyObject(t);
      },
    });
  var Y = new G(),
    Q = new G(),
    J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    K = /[A-Z]/g;
  function Z(e, t, n) {
    var r, i;
    if (void 0 === n && 1 === e.nodeType)
      if (
        ((r = "data-" + t.replace(K, "-$&").toLowerCase()),
        "string" == typeof (n = e.getAttribute(r)))
      ) {
        try {
          n =
            "true" === (i = n) ||
            ("false" !== i &&
              ("null" === i
                ? null
                : i === +i + ""
                ? +i
                : J.test(i)
                ? JSON.parse(i)
                : i));
        } catch (e) {}
        Q.set(e, t, n);
      } else n = void 0;
    return n;
  }
  S.extend({
    hasData: function (e) {
      return Q.hasData(e) || Y.hasData(e);
    },
    data: function (e, t, n) {
      return Q.access(e, t, n);
    },
    removeData: function (e, t) {
      Q.remove(e, t);
    },
    _data: function (e, t, n) {
      return Y.access(e, t, n);
    },
    _removeData: function (e, t) {
      Y.remove(e, t);
    },
  }),
    S.fn.extend({
      data: function (n, e) {
        var t,
          r,
          i,
          o = this[0],
          a = o && o.attributes;
        if (void 0 === n) {
          if (
            this.length &&
            ((i = Q.get(o)), 1 === o.nodeType && !Y.get(o, "hasDataAttrs"))
          ) {
            t = a.length;
            while (t--)
              a[t] &&
                0 === (r = a[t].name).indexOf("data-") &&
                ((r = X(r.slice(5))), Z(o, r, i[r]));
            Y.set(o, "hasDataAttrs", !0);
          }
          return i;
        }
        return "object" == typeof n
          ? this.each(function () {
              Q.set(this, n);
            })
          : $(
              this,
              function (e) {
                var t;
                if (o && void 0 === e)
                  return void 0 !== (t = Q.get(o, n))
                    ? t
                    : void 0 !== (t = Z(o, n))
                    ? t
                    : void 0;
                this.each(function () {
                  Q.set(this, n, e);
                });
              },
              null,
              e,
              1 < arguments.length,
              null,
              !0
            );
      },
      removeData: function (e) {
        return this.each(function () {
          Q.remove(this, e);
        });
      },
    }),
    S.extend({
      queue: function (e, t, n) {
        var r;
        if (e)
          return (
            (t = (t || "fx") + "queue"),
            (r = Y.get(e, t)),
            n &&
              (!r || Array.isArray(n)
                ? (r = Y.access(e, t, S.makeArray(n)))
                : r.push(n)),
            r || []
          );
      },
      dequeue: function (e, t) {
        t = t || "fx";
        var n = S.queue(e, t),
          r = n.length,
          i = n.shift(),
          o = S._queueHooks(e, t);
        "inprogress" === i && ((i = n.shift()), r--),
          i &&
            ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            i.call(
              e,
              function () {
                S.dequeue(e, t);
              },
              o
            )),
          !r && o && o.empty.fire();
      },
      _queueHooks: function (e, t) {
        var n = t + "queueHooks";
        return (
          Y.get(e, n) ||
          Y.access(e, n, {
            empty: S.Callbacks("once memory").add(function () {
              Y.remove(e, [t + "queue", n]);
            }),
          })
        );
      },
    }),
    S.fn.extend({
      queue: function (t, n) {
        var e = 2;
        return (
          "string" != typeof t && ((n = t), (t = "fx"), e--),
          arguments.length < e
            ? S.queue(this[0], t)
            : void 0 === n
            ? this
            : this.each(function () {
                var e = S.queue(this, t, n);
                S._queueHooks(this, t),
                  "fx" === t && "inprogress" !== e[0] && S.dequeue(this, t);
              })
        );
      },
      dequeue: function (e) {
        return this.each(function () {
          S.dequeue(this, e);
        });
      },
      clearQueue: function (e) {
        return this.queue(e || "fx", []);
      },
      promise: function (e, t) {
        var n,
          r = 1,
          i = S.Deferred(),
          o = this,
          a = this.length,
          s = function () {
            --r || i.resolveWith(o, [o]);
          };
        "string" != typeof e && ((t = e), (e = void 0)), (e = e || "fx");
        while (a--)
          (n = Y.get(o[a], e + "queueHooks")) &&
            n.empty &&
            (r++, n.empty.add(s));
        return s(), i.promise(t);
      },
    });
  var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
    ne = ["Top", "Right", "Bottom", "Left"],
    re = E.documentElement,
    ie = function (e) {
      return S.contains(e.ownerDocument, e);
    },
    oe = { composed: !0 };
  re.getRootNode &&
    (ie = function (e) {
      return (
        S.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument
      );
    });
  var ae = function (e, t) {
    return (
      "none" === (e = t || e).style.display ||
      ("" === e.style.display && ie(e) && "none" === S.css(e, "display"))
    );
  };
  function se(e, t, n, r) {
    var i,
      o,
      a = 20,
      s = r
        ? function () {
            return r.cur();
          }
        : function () {
            return S.css(e, t, "");
          },
      u = s(),
      l = (n && n[3]) || (S.cssNumber[t] ? "" : "px"),
      c =
        e.nodeType &&
        (S.cssNumber[t] || ("px" !== l && +u)) &&
        te.exec(S.css(e, t));
    if (c && c[3] !== l) {
      (u /= 2), (l = l || c[3]), (c = +u || 1);
      while (a--)
        S.style(e, t, c + l),
          (1 - o) * (1 - (o = s() / u || 0.5)) <= 0 && (a = 0),
          (c /= o);
      (c *= 2), S.style(e, t, c + l), (n = n || []);
    }
    return (
      n &&
        ((c = +c || +u || 0),
        (i = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
        r && ((r.unit = l), (r.start = c), (r.end = i))),
      i
    );
  }
  var ue = {};
  function le(e, t) {
    for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)
      (r = e[c]).style &&
        ((n = r.style.display),
        t
          ? ("none" === n &&
              ((l[c] = Y.get(r, "display") || null),
              l[c] || (r.style.display = "")),
            "" === r.style.display &&
              ae(r) &&
              (l[c] =
                ((u = a = o = void 0),
                (a = (i = r).ownerDocument),
                (s = i.nodeName),
                (u = ue[s]) ||
                  ((o = a.body.appendChild(a.createElement(s))),
                  (u = S.css(o, "display")),
                  o.parentNode.removeChild(o),
                  "none" === u && (u = "block"),
                  (ue[s] = u)))))
          : "none" !== n && ((l[c] = "none"), Y.set(r, "display", n)));
    for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]);
    return e;
  }
  S.fn.extend({
    show: function () {
      return le(this, !0);
    },
    hide: function () {
      return le(this);
    },
    toggle: function (e) {
      return "boolean" == typeof e
        ? e
          ? this.show()
          : this.hide()
        : this.each(function () {
            ae(this) ? S(this).show() : S(this).hide();
          });
    },
  });
  var ce,
    fe,
    pe = /^(?:checkbox|radio)$/i,
    de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
    he = /^$|^module$|\/(?:java|ecma)script/i;
  (ce = E.createDocumentFragment().appendChild(E.createElement("div"))),
    (fe = E.createElement("input")).setAttribute("type", "radio"),
    fe.setAttribute("checked", "checked"),
    fe.setAttribute("name", "t"),
    ce.appendChild(fe),
    (y.checkClone = ce.cloneNode(!0).cloneNode(!0).lastChild.checked),
    (ce.innerHTML = "<textarea>x</textarea>"),
    (y.noCloneChecked = !!ce.cloneNode(!0).lastChild.defaultValue),
    (ce.innerHTML = "<option></option>"),
    (y.option = !!ce.lastChild);
  var ge = {
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""],
  };
  function ve(e, t) {
    var n;
    return (
      (n =
        "undefined" != typeof e.getElementsByTagName
          ? e.getElementsByTagName(t || "*")
          : "undefined" != typeof e.querySelectorAll
          ? e.querySelectorAll(t || "*")
          : []),
      void 0 === t || (t && A(e, t)) ? S.merge([e], n) : n
    );
  }
  function ye(e, t) {
    for (var n = 0, r = e.length; n < r; n++)
      Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"));
  }
  (ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead),
    (ge.th = ge.td),
    y.option ||
      (ge.optgroup = ge.option = [
        1,
        "<select multiple='multiple'>",
        "</select>",
      ]);
  var me = /<|&#?\w+;/;
  function xe(e, t, n, r, i) {
    for (
      var o,
        a,
        s,
        u,
        l,
        c,
        f = t.createDocumentFragment(),
        p = [],
        d = 0,
        h = e.length;
      d < h;
      d++
    )
      if ((o = e[d]) || 0 === o)
        if ("object" === w(o)) S.merge(p, o.nodeType ? [o] : o);
        else if (me.test(o)) {
          (a = a || f.appendChild(t.createElement("div"))),
            (s = (de.exec(o) || ["", ""])[1].toLowerCase()),
            (u = ge[s] || ge._default),
            (a.innerHTML = u[1] + S.htmlPrefilter(o) + u[2]),
            (c = u[0]);
          while (c--) a = a.lastChild;
          S.merge(p, a.childNodes), ((a = f.firstChild).textContent = "");
        } else p.push(t.createTextNode(o));
    (f.textContent = ""), (d = 0);
    while ((o = p[d++]))
      if (r && -1 < S.inArray(o, r)) i && i.push(o);
      else if (
        ((l = ie(o)), (a = ve(f.appendChild(o), "script")), l && ye(a), n)
      ) {
        c = 0;
        while ((o = a[c++])) he.test(o.type || "") && n.push(o);
      }
    return f;
  }
  var be = /^key/,
    we = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    Te = /^([^.]*)(?:\.(.+)|)/;
  function Ce() {
    return !0;
  }
  function Ee() {
    return !1;
  }
  function Se(e, t) {
    return (
      (e ===
        (function () {
          try {
            return E.activeElement;
          } catch (e) {}
        })()) ==
      ("focus" === t)
    );
  }
  function ke(e, t, n, r, i, o) {
    var a, s;
    if ("object" == typeof t) {
      for (s in ("string" != typeof n && ((r = r || n), (n = void 0)), t))
        ke(e, s, n, r, t[s], o);
      return e;
    }
    if (
      (null == r && null == i
        ? ((i = n), (r = n = void 0))
        : null == i &&
          ("string" == typeof n
            ? ((i = r), (r = void 0))
            : ((i = r), (r = n), (n = void 0))),
      !1 === i)
    )
      i = Ee;
    else if (!i) return e;
    return (
      1 === o &&
        ((a = i),
        ((i = function (e) {
          return S().off(e), a.apply(this, arguments);
        }).guid = a.guid || (a.guid = S.guid++))),
      e.each(function () {
        S.event.add(this, t, i, r, n);
      })
    );
  }
  function Ae(e, i, o) {
    o
      ? (Y.set(e, i, !1),
        S.event.add(e, i, {
          namespace: !1,
          handler: function (e) {
            var t,
              n,
              r = Y.get(this, i);
            if (1 & e.isTrigger && this[i]) {
              if (r.length)
                (S.event.special[i] || {}).delegateType && e.stopPropagation();
              else if (
                ((r = s.call(arguments)),
                Y.set(this, i, r),
                (t = o(this, i)),
                this[i](),
                r !== (n = Y.get(this, i)) || t ? Y.set(this, i, !1) : (n = {}),
                r !== n)
              )
                return (
                  e.stopImmediatePropagation(), e.preventDefault(), n.value
                );
            } else
              r.length &&
                (Y.set(this, i, {
                  value: S.event.trigger(
                    S.extend(r[0], S.Event.prototype),
                    r.slice(1),
                    this
                  ),
                }),
                e.stopImmediatePropagation());
          },
        }))
      : void 0 === Y.get(e, i) && S.event.add(e, i, Ce);
  }
  (S.event = {
    global: {},
    add: function (t, e, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        v = Y.get(t);
      if (V(t)) {
        n.handler && ((n = (o = n).handler), (i = o.selector)),
          i && S.find.matchesSelector(re, i),
          n.guid || (n.guid = S.guid++),
          (u = v.events) || (u = v.events = Object.create(null)),
          (a = v.handle) ||
            (a = v.handle = function (e) {
              return "undefined" != typeof S && S.event.triggered !== e.type
                ? S.event.dispatch.apply(t, arguments)
                : void 0;
            }),
          (l = (e = (e || "").match(P) || [""]).length);
        while (l--)
          (d = g = (s = Te.exec(e[l]) || [])[1]),
            (h = (s[2] || "").split(".").sort()),
            d &&
              ((f = S.event.special[d] || {}),
              (d = (i ? f.delegateType : f.bindType) || d),
              (f = S.event.special[d] || {}),
              (c = S.extend(
                {
                  type: d,
                  origType: g,
                  data: r,
                  handler: n,
                  guid: n.guid,
                  selector: i,
                  needsContext: i && S.expr.match.needsContext.test(i),
                  namespace: h.join("."),
                },
                o
              )),
              (p = u[d]) ||
                (((p = u[d] = []).delegateCount = 0),
                (f.setup && !1 !== f.setup.call(t, r, h, a)) ||
                  (t.addEventListener && t.addEventListener(d, a))),
              f.add &&
                (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)),
              i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
              (S.event.global[d] = !0));
      }
    },
    remove: function (e, t, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        v = Y.hasData(e) && Y.get(e);
      if (v && (u = v.events)) {
        l = (t = (t || "").match(P) || [""]).length;
        while (l--)
          if (
            ((d = g = (s = Te.exec(t[l]) || [])[1]),
            (h = (s[2] || "").split(".").sort()),
            d)
          ) {
            (f = S.event.special[d] || {}),
              (p = u[(d = (r ? f.delegateType : f.bindType) || d)] || []),
              (s =
                s[2] &&
                new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)")),
              (a = o = p.length);
            while (o--)
              (c = p[o]),
                (!i && g !== c.origType) ||
                  (n && n.guid !== c.guid) ||
                  (s && !s.test(c.namespace)) ||
                  (r && r !== c.selector && ("**" !== r || !c.selector)) ||
                  (p.splice(o, 1),
                  c.selector && p.delegateCount--,
                  f.remove && f.remove.call(e, c));
            a &&
              !p.length &&
              ((f.teardown && !1 !== f.teardown.call(e, h, v.handle)) ||
                S.removeEvent(e, d, v.handle),
              delete u[d]);
          } else for (d in u) S.event.remove(e, d + t[l], n, r, !0);
        S.isEmptyObject(u) && Y.remove(e, "handle events");
      }
    },
    dispatch: function (e) {
      var t,
        n,
        r,
        i,
        o,
        a,
        s = new Array(arguments.length),
        u = S.event.fix(e),
        l = (Y.get(this, "events") || Object.create(null))[u.type] || [],
        c = S.event.special[u.type] || {};
      for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t];
      if (
        ((u.delegateTarget = this),
        !c.preDispatch || !1 !== c.preDispatch.call(this, u))
      ) {
        (a = S.event.handlers.call(this, u, l)), (t = 0);
        while ((i = a[t++]) && !u.isPropagationStopped()) {
          (u.currentTarget = i.elem), (n = 0);
          while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped())
            (u.rnamespace &&
              !1 !== o.namespace &&
              !u.rnamespace.test(o.namespace)) ||
              ((u.handleObj = o),
              (u.data = o.data),
              void 0 !==
                (r = (
                  (S.event.special[o.origType] || {}).handle || o.handler
                ).apply(i.elem, s)) &&
                !1 === (u.result = r) &&
                (u.preventDefault(), u.stopPropagation()));
        }
        return c.postDispatch && c.postDispatch.call(this, u), u.result;
      }
    },
    handlers: function (e, t) {
      var n,
        r,
        i,
        o,
        a,
        s = [],
        u = t.delegateCount,
        l = e.target;
      if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
        for (; l !== this; l = l.parentNode || this)
          if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
            for (o = [], a = {}, n = 0; n < u; n++)
              void 0 === a[(i = (r = t[n]).selector + " ")] &&
                (a[i] = r.needsContext
                  ? -1 < S(i, this).index(l)
                  : S.find(i, this, null, [l]).length),
                a[i] && o.push(r);
            o.length && s.push({ elem: l, handlers: o });
          }
      return (
        (l = this), u < t.length && s.push({ elem: l, handlers: t.slice(u) }), s
      );
    },
    addProp: function (t, e) {
      Object.defineProperty(S.Event.prototype, t, {
        enumerable: !0,
        configurable: !0,
        get: m(e)
          ? function () {
              if (this.originalEvent) return e(this.originalEvent);
            }
          : function () {
              if (this.originalEvent) return this.originalEvent[t];
            },
        set: function (e) {
          Object.defineProperty(this, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e,
          });
        },
      });
    },
    fix: function (e) {
      return e[S.expando] ? e : new S.Event(e);
    },
    special: {
      load: { noBubble: !0 },
      click: {
        setup: function (e) {
          var t = this || e;
          return (
            pe.test(t.type) && t.click && A(t, "input") && Ae(t, "click", Ce),
            !1
          );
        },
        trigger: function (e) {
          var t = this || e;
          return (
            pe.test(t.type) && t.click && A(t, "input") && Ae(t, "click"), !0
          );
        },
        _default: function (e) {
          var t = e.target;
          return (
            (pe.test(t.type) &&
              t.click &&
              A(t, "input") &&
              Y.get(t, "click")) ||
            A(t, "a")
          );
        },
      },
      beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result &&
            e.originalEvent &&
            (e.originalEvent.returnValue = e.result);
        },
      },
    },
  }),
    (S.removeEvent = function (e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n);
    }),
    (S.Event = function (e, t) {
      if (!(this instanceof S.Event)) return new S.Event(e, t);
      e && e.type
        ? ((this.originalEvent = e),
          (this.type = e.type),
          (this.isDefaultPrevented =
            e.defaultPrevented ||
            (void 0 === e.defaultPrevented && !1 === e.returnValue)
              ? Ce
              : Ee),
          (this.target =
            e.target && 3 === e.target.nodeType
              ? e.target.parentNode
              : e.target),
          (this.currentTarget = e.currentTarget),
          (this.relatedTarget = e.relatedTarget))
        : (this.type = e),
        t && S.extend(this, t),
        (this.timeStamp = (e && e.timeStamp) || Date.now()),
        (this[S.expando] = !0);
    }),
    (S.Event.prototype = {
      constructor: S.Event,
      isDefaultPrevented: Ee,
      isPropagationStopped: Ee,
      isImmediatePropagationStopped: Ee,
      isSimulated: !1,
      preventDefault: function () {
        var e = this.originalEvent;
        (this.isDefaultPrevented = Ce),
          e && !this.isSimulated && e.preventDefault();
      },
      stopPropagation: function () {
        var e = this.originalEvent;
        (this.isPropagationStopped = Ce),
          e && !this.isSimulated && e.stopPropagation();
      },
      stopImmediatePropagation: function () {
        var e = this.originalEvent;
        (this.isImmediatePropagationStopped = Ce),
          e && !this.isSimulated && e.stopImmediatePropagation(),
          this.stopPropagation();
      },
    }),
    S.each(
      {
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function (e) {
          var t = e.button;
          return null == e.which && be.test(e.type)
            ? null != e.charCode
              ? e.charCode
              : e.keyCode
            : !e.which && void 0 !== t && we.test(e.type)
            ? 1 & t
              ? 1
              : 2 & t
              ? 3
              : 4 & t
              ? 2
              : 0
            : e.which;
        },
      },
      S.event.addProp
    ),
    S.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
      S.event.special[e] = {
        setup: function () {
          return Ae(this, e, Se), !1;
        },
        trigger: function () {
          return Ae(this, e), !0;
        },
        delegateType: t,
      };
    }),
    S.each(
      {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout",
      },
      function (e, i) {
        S.event.special[e] = {
          delegateType: i,
          bindType: i,
          handle: function (e) {
            var t,
              n = e.relatedTarget,
              r = e.handleObj;
            return (
              (n && (n === this || S.contains(this, n))) ||
                ((e.type = r.origType),
                (t = r.handler.apply(this, arguments)),
                (e.type = i)),
              t
            );
          },
        };
      }
    ),
    S.fn.extend({
      on: function (e, t, n, r) {
        return ke(this, e, t, n, r);
      },
      one: function (e, t, n, r) {
        return ke(this, e, t, n, r, 1);
      },
      off: function (e, t, n) {
        var r, i;
        if (e && e.preventDefault && e.handleObj)
          return (
            (r = e.handleObj),
            S(e.delegateTarget).off(
              r.namespace ? r.origType + "." + r.namespace : r.origType,
              r.selector,
              r.handler
            ),
            this
          );
        if ("object" == typeof e) {
          for (i in e) this.off(i, t, e[i]);
          return this;
        }
        return (
          (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
          !1 === n && (n = Ee),
          this.each(function () {
            S.event.remove(this, e, n, t);
          })
        );
      },
    });
  var Ne = /<script|<style|<link/i,
    De = /checked\s*(?:[^=]|=\s*.checked.)/i,
    je = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  function qe(e, t) {
    return (
      (A(e, "table") &&
        A(11 !== t.nodeType ? t : t.firstChild, "tr") &&
        S(e).children("tbody")[0]) ||
      e
    );
  }
  function Le(e) {
    return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
  }
  function He(e) {
    return (
      "true/" === (e.type || "").slice(0, 5)
        ? (e.type = e.type.slice(5))
        : e.removeAttribute("type"),
      e
    );
  }
  function Oe(e, t) {
    var n, r, i, o, a, s;
    if (1 === t.nodeType) {
      if (Y.hasData(e) && (s = Y.get(e).events))
        for (i in (Y.remove(t, "handle events"), s))
          for (n = 0, r = s[i].length; n < r; n++) S.event.add(t, i, s[i][n]);
      Q.hasData(e) && ((o = Q.access(e)), (a = S.extend({}, o)), Q.set(t, a));
    }
  }
  function Pe(n, r, i, o) {
    r = g(r);
    var e,
      t,
      a,
      s,
      u,
      l,
      c = 0,
      f = n.length,
      p = f - 1,
      d = r[0],
      h = m(d);
    if (h || (1 < f && "string" == typeof d && !y.checkClone && De.test(d)))
      return n.each(function (e) {
        var t = n.eq(e);
        h && (r[0] = d.call(this, e, t.html())), Pe(t, r, i, o);
      });
    if (
      f &&
      ((t = (e = xe(r, n[0].ownerDocument, !1, n, o)).firstChild),
      1 === e.childNodes.length && (e = t),
      t || o)
    ) {
      for (s = (a = S.map(ve(e, "script"), Le)).length; c < f; c++)
        (u = e),
          c !== p &&
            ((u = S.clone(u, !0, !0)), s && S.merge(a, ve(u, "script"))),
          i.call(n[c], u, c);
      if (s)
        for (l = a[a.length - 1].ownerDocument, S.map(a, He), c = 0; c < s; c++)
          (u = a[c]),
            he.test(u.type || "") &&
              !Y.access(u, "globalEval") &&
              S.contains(l, u) &&
              (u.src && "module" !== (u.type || "").toLowerCase()
                ? S._evalUrl &&
                  !u.noModule &&
                  S._evalUrl(
                    u.src,
                    { nonce: u.nonce || u.getAttribute("nonce") },
                    l
                  )
                : b(u.textContent.replace(je, ""), u, l));
    }
    return n;
  }
  function Re(e, t, n) {
    for (var r, i = t ? S.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
      n || 1 !== r.nodeType || S.cleanData(ve(r)),
        r.parentNode &&
          (n && ie(r) && ye(ve(r, "script")), r.parentNode.removeChild(r));
    return e;
  }
  S.extend({
    htmlPrefilter: function (e) {
      return e;
    },
    clone: function (e, t, n) {
      var r,
        i,
        o,
        a,
        s,
        u,
        l,
        c = e.cloneNode(!0),
        f = ie(e);
      if (
        !(
          y.noCloneChecked ||
          (1 !== e.nodeType && 11 !== e.nodeType) ||
          S.isXMLDoc(e)
        )
      )
        for (a = ve(c), r = 0, i = (o = ve(e)).length; r < i; r++)
          (s = o[r]),
            (u = a[r]),
            void 0,
            "input" === (l = u.nodeName.toLowerCase()) && pe.test(s.type)
              ? (u.checked = s.checked)
              : ("input" !== l && "textarea" !== l) ||
                (u.defaultValue = s.defaultValue);
      if (t)
        if (n)
          for (o = o || ve(e), a = a || ve(c), r = 0, i = o.length; r < i; r++)
            Oe(o[r], a[r]);
        else Oe(e, c);
      return (
        0 < (a = ve(c, "script")).length && ye(a, !f && ve(e, "script")), c
      );
    },
    cleanData: function (e) {
      for (var t, n, r, i = S.event.special, o = 0; void 0 !== (n = e[o]); o++)
        if (V(n)) {
          if ((t = n[Y.expando])) {
            if (t.events)
              for (r in t.events)
                i[r] ? S.event.remove(n, r) : S.removeEvent(n, r, t.handle);
            n[Y.expando] = void 0;
          }
          n[Q.expando] && (n[Q.expando] = void 0);
        }
    },
  }),
    S.fn.extend({
      detach: function (e) {
        return Re(this, e, !0);
      },
      remove: function (e) {
        return Re(this, e);
      },
      text: function (e) {
        return $(
          this,
          function (e) {
            return void 0 === e
              ? S.text(this)
              : this.empty().each(function () {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    (this.textContent = e);
                });
          },
          null,
          e,
          arguments.length
        );
      },
      append: function () {
        return Pe(this, arguments, function (e) {
          (1 !== this.nodeType &&
            11 !== this.nodeType &&
            9 !== this.nodeType) ||
            qe(this, e).appendChild(e);
        });
      },
      prepend: function () {
        return Pe(this, arguments, function (e) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var t = qe(this, e);
            t.insertBefore(e, t.firstChild);
          }
        });
      },
      before: function () {
        return Pe(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      },
      after: function () {
        return Pe(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      },
      empty: function () {
        for (var e, t = 0; null != (e = this[t]); t++)
          1 === e.nodeType && (S.cleanData(ve(e, !1)), (e.textContent = ""));
        return this;
      },
      clone: function (e, t) {
        return (
          (e = null != e && e),
          (t = null == t ? e : t),
          this.map(function () {
            return S.clone(this, e, t);
          })
        );
      },
      html: function (e) {
        return $(
          this,
          function (e) {
            var t = this[0] || {},
              n = 0,
              r = this.length;
            if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
            if (
              "string" == typeof e &&
              !Ne.test(e) &&
              !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]
            ) {
              e = S.htmlPrefilter(e);
              try {
                for (; n < r; n++)
                  1 === (t = this[n] || {}).nodeType &&
                    (S.cleanData(ve(t, !1)), (t.innerHTML = e));
                t = 0;
              } catch (e) {}
            }
            t && this.empty().append(e);
          },
          null,
          e,
          arguments.length
        );
      },
      replaceWith: function () {
        var n = [];
        return Pe(
          this,
          arguments,
          function (e) {
            var t = this.parentNode;
            S.inArray(this, n) < 0 &&
              (S.cleanData(ve(this)), t && t.replaceChild(e, this));
          },
          n
        );
      },
    }),
    S.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (e, a) {
        S.fn[e] = function (e) {
          for (var t, n = [], r = S(e), i = r.length - 1, o = 0; o <= i; o++)
            (t = o === i ? this : this.clone(!0)),
              S(r[o])[a](t),
              u.apply(n, t.get());
          return this.pushStack(n);
        };
      }
    );
  var Me = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
    Ie = function (e) {
      var t = e.ownerDocument.defaultView;
      return (t && t.opener) || (t = C), t.getComputedStyle(e);
    },
    We = function (e, t, n) {
      var r,
        i,
        o = {};
      for (i in t) (o[i] = e.style[i]), (e.style[i] = t[i]);
      for (i in ((r = n.call(e)), t)) e.style[i] = o[i];
      return r;
    },
    Fe = new RegExp(ne.join("|"), "i");
  function Be(e, t, n) {
    var r,
      i,
      o,
      a,
      s = e.style;
    return (
      (n = n || Ie(e)) &&
        ("" !== (a = n.getPropertyValue(t) || n[t]) ||
          ie(e) ||
          (a = S.style(e, t)),
        !y.pixelBoxStyles() &&
          Me.test(a) &&
          Fe.test(t) &&
          ((r = s.width),
          (i = s.minWidth),
          (o = s.maxWidth),
          (s.minWidth = s.maxWidth = s.width = a),
          (a = n.width),
          (s.width = r),
          (s.minWidth = i),
          (s.maxWidth = o))),
      void 0 !== a ? a + "" : a
    );
  }
  function $e(e, t) {
    return {
      get: function () {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get;
      },
    };
  }
  !(function () {
    function e() {
      if (l) {
        (u.style.cssText =
          "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
          (l.style.cssText =
            "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
          re.appendChild(u).appendChild(l);
        var e = C.getComputedStyle(l);
        (n = "1%" !== e.top),
          (s = 12 === t(e.marginLeft)),
          (l.style.right = "60%"),
          (o = 36 === t(e.right)),
          (r = 36 === t(e.width)),
          (l.style.position = "absolute"),
          (i = 12 === t(l.offsetWidth / 3)),
          re.removeChild(u),
          (l = null);
      }
    }
    function t(e) {
      return Math.round(parseFloat(e));
    }
    var n,
      r,
      i,
      o,
      a,
      s,
      u = E.createElement("div"),
      l = E.createElement("div");
    l.style &&
      ((l.style.backgroundClip = "content-box"),
      (l.cloneNode(!0).style.backgroundClip = ""),
      (y.clearCloneStyle = "content-box" === l.style.backgroundClip),
      S.extend(y, {
        boxSizingReliable: function () {
          return e(), r;
        },
        pixelBoxStyles: function () {
          return e(), o;
        },
        pixelPosition: function () {
          return e(), n;
        },
        reliableMarginLeft: function () {
          return e(), s;
        },
        scrollboxSize: function () {
          return e(), i;
        },
        reliableTrDimensions: function () {
          var e, t, n, r;
          return (
            null == a &&
              ((e = E.createElement("table")),
              (t = E.createElement("tr")),
              (n = E.createElement("div")),
              (e.style.cssText = "position:absolute;left:-11111px"),
              (t.style.height = "1px"),
              (n.style.height = "9px"),
              re.appendChild(e).appendChild(t).appendChild(n),
              (r = C.getComputedStyle(t)),
              (a = 3 < parseInt(r.height)),
              re.removeChild(e)),
            a
          );
        },
      }));
  })();
  var _e = ["Webkit", "Moz", "ms"],
    ze = E.createElement("div").style,
    Ue = {};
  function Xe(e) {
    var t = S.cssProps[e] || Ue[e];
    return (
      t ||
      (e in ze
        ? e
        : (Ue[e] =
            (function (e) {
              var t = e[0].toUpperCase() + e.slice(1),
                n = _e.length;
              while (n--) if ((e = _e[n] + t) in ze) return e;
            })(e) || e))
    );
  }
  var Ve = /^(none|table(?!-c[ea]).+)/,
    Ge = /^--/,
    Ye = { position: "absolute", visibility: "hidden", display: "block" },
    Qe = { letterSpacing: "0", fontWeight: "400" };
  function Je(e, t, n) {
    var r = te.exec(t);
    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
  }
  function Ke(e, t, n, r, i, o) {
    var a = "width" === t ? 1 : 0,
      s = 0,
      u = 0;
    if (n === (r ? "border" : "content")) return 0;
    for (; a < 4; a += 2)
      "margin" === n && (u += S.css(e, n + ne[a], !0, i)),
        r
          ? ("content" === n && (u -= S.css(e, "padding" + ne[a], !0, i)),
            "margin" !== n &&
              (u -= S.css(e, "border" + ne[a] + "Width", !0, i)))
          : ((u += S.css(e, "padding" + ne[a], !0, i)),
            "padding" !== n
              ? (u += S.css(e, "border" + ne[a] + "Width", !0, i))
              : (s += S.css(e, "border" + ne[a] + "Width", !0, i)));
    return (
      !r &&
        0 <= o &&
        (u +=
          Math.max(
            0,
            Math.ceil(
              e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - 0.5
            )
          ) || 0),
      u
    );
  }
  function Ze(e, t, n) {
    var r = Ie(e),
      i =
        (!y.boxSizingReliable() || n) &&
        "border-box" === S.css(e, "boxSizing", !1, r),
      o = i,
      a = Be(e, t, r),
      s = "offset" + t[0].toUpperCase() + t.slice(1);
    if (Me.test(a)) {
      if (!n) return a;
      a = "auto";
    }
    return (
      ((!y.boxSizingReliable() && i) ||
        (!y.reliableTrDimensions() && A(e, "tr")) ||
        "auto" === a ||
        (!parseFloat(a) && "inline" === S.css(e, "display", !1, r))) &&
        e.getClientRects().length &&
        ((i = "border-box" === S.css(e, "boxSizing", !1, r)),
        (o = s in e) && (a = e[s])),
      (a = parseFloat(a) || 0) +
        Ke(e, t, n || (i ? "border" : "content"), o, r, a) +
        "px"
    );
  }
  function et(e, t, n, r, i) {
    return new et.prototype.init(e, t, n, r, i);
  }
  S.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = Be(e, "opacity");
            return "" === n ? "1" : n;
          }
        },
      },
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      gridArea: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnStart: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowStart: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
    },
    cssProps: {},
    style: function (e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i,
          o,
          a,
          s = X(t),
          u = Ge.test(t),
          l = e.style;
        if (
          (u || (t = Xe(s)), (a = S.cssHooks[t] || S.cssHooks[s]), void 0 === n)
        )
          return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
        "string" === (o = typeof n) &&
          (i = te.exec(n)) &&
          i[1] &&
          ((n = se(e, t, i)), (o = "number")),
          null != n &&
            n == n &&
            ("number" !== o ||
              u ||
              (n += (i && i[3]) || (S.cssNumber[s] ? "" : "px")),
            y.clearCloneStyle ||
              "" !== n ||
              0 !== t.indexOf("background") ||
              (l[t] = "inherit"),
            (a && "set" in a && void 0 === (n = a.set(e, n, r))) ||
              (u ? l.setProperty(t, n) : (l[t] = n)));
      }
    },
    css: function (e, t, n, r) {
      var i,
        o,
        a,
        s = X(t);
      return (
        Ge.test(t) || (t = Xe(s)),
        (a = S.cssHooks[t] || S.cssHooks[s]) &&
          "get" in a &&
          (i = a.get(e, !0, n)),
        void 0 === i && (i = Be(e, t, r)),
        "normal" === i && t in Qe && (i = Qe[t]),
        "" === n || n
          ? ((o = parseFloat(i)), !0 === n || isFinite(o) ? o || 0 : i)
          : i
      );
    },
  }),
    S.each(["height", "width"], function (e, u) {
      S.cssHooks[u] = {
        get: function (e, t, n) {
          if (t)
            return !Ve.test(S.css(e, "display")) ||
              (e.getClientRects().length && e.getBoundingClientRect().width)
              ? Ze(e, u, n)
              : We(e, Ye, function () {
                  return Ze(e, u, n);
                });
        },
        set: function (e, t, n) {
          var r,
            i = Ie(e),
            o = !y.scrollboxSize() && "absolute" === i.position,
            a = (o || n) && "border-box" === S.css(e, "boxSizing", !1, i),
            s = n ? Ke(e, u, n, a, i) : 0;
          return (
            a &&
              o &&
              (s -= Math.ceil(
                e["offset" + u[0].toUpperCase() + u.slice(1)] -
                  parseFloat(i[u]) -
                  Ke(e, u, "border", !1, i) -
                  0.5
              )),
            s &&
              (r = te.exec(t)) &&
              "px" !== (r[3] || "px") &&
              ((e.style[u] = t), (t = S.css(e, u))),
            Je(0, t, s)
          );
        },
      };
    }),
    (S.cssHooks.marginLeft = $e(y.reliableMarginLeft, function (e, t) {
      if (t)
        return (
          (parseFloat(Be(e, "marginLeft")) ||
            e.getBoundingClientRect().left -
              We(e, { marginLeft: 0 }, function () {
                return e.getBoundingClientRect().left;
              })) + "px"
        );
    })),
    S.each({ margin: "", padding: "", border: "Width" }, function (i, o) {
      (S.cssHooks[i + o] = {
        expand: function (e) {
          for (
            var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e];
            t < 4;
            t++
          )
            n[i + ne[t] + o] = r[t] || r[t - 2] || r[0];
          return n;
        },
      }),
        "margin" !== i && (S.cssHooks[i + o].set = Je);
    }),
    S.fn.extend({
      css: function (e, t) {
        return $(
          this,
          function (e, t, n) {
            var r,
              i,
              o = {},
              a = 0;
            if (Array.isArray(t)) {
              for (r = Ie(e), i = t.length; a < i; a++)
                o[t[a]] = S.css(e, t[a], !1, r);
              return o;
            }
            return void 0 !== n ? S.style(e, t, n) : S.css(e, t);
          },
          e,
          t,
          1 < arguments.length
        );
      },
    }),
    (((S.Tween = et).prototype = {
      constructor: et,
      init: function (e, t, n, r, i, o) {
        (this.elem = e),
          (this.prop = n),
          (this.easing = i || S.easing._default),
          (this.options = t),
          (this.start = this.now = this.cur()),
          (this.end = r),
          (this.unit = o || (S.cssNumber[n] ? "" : "px"));
      },
      cur: function () {
        var e = et.propHooks[this.prop];
        return e && e.get ? e.get(this) : et.propHooks._default.get(this);
      },
      run: function (e) {
        var t,
          n = et.propHooks[this.prop];
        return (
          this.options.duration
            ? (this.pos = t = S.easing[this.easing](
                e,
                this.options.duration * e,
                0,
                1,
                this.options.duration
              ))
            : (this.pos = t = e),
          (this.now = (this.end - this.start) * t + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          n && n.set ? n.set(this) : et.propHooks._default.set(this),
          this
        );
      },
    }).init.prototype = et.prototype),
    ((et.propHooks = {
      _default: {
        get: function (e) {
          var t;
          return 1 !== e.elem.nodeType ||
            (null != e.elem[e.prop] && null == e.elem.style[e.prop])
            ? e.elem[e.prop]
            : (t = S.css(e.elem, e.prop, "")) && "auto" !== t
            ? t
            : 0;
        },
        set: function (e) {
          S.fx.step[e.prop]
            ? S.fx.step[e.prop](e)
            : 1 !== e.elem.nodeType ||
              (!S.cssHooks[e.prop] && null == e.elem.style[Xe(e.prop)])
            ? (e.elem[e.prop] = e.now)
            : S.style(e.elem, e.prop, e.now + e.unit);
        },
      },
    }).scrollTop = et.propHooks.scrollLeft = {
      set: function (e) {
        e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
      },
    }),
    (S.easing = {
      linear: function (e) {
        return e;
      },
      swing: function (e) {
        return 0.5 - Math.cos(e * Math.PI) / 2;
      },
      _default: "swing",
    }),
    (S.fx = et.prototype.init),
    (S.fx.step = {});
  var tt,
    nt,
    rt,
    it,
    ot = /^(?:toggle|show|hide)$/,
    at = /queueHooks$/;
  function st() {
    nt &&
      (!1 === E.hidden && C.requestAnimationFrame
        ? C.requestAnimationFrame(st)
        : C.setTimeout(st, S.fx.interval),
      S.fx.tick());
  }
  function ut() {
    return (
      C.setTimeout(function () {
        tt = void 0;
      }),
      (tt = Date.now())
    );
  }
  function lt(e, t) {
    var n,
      r = 0,
      i = { height: e };
    for (t = t ? 1 : 0; r < 4; r += 2 - t)
      i["margin" + (n = ne[r])] = i["padding" + n] = e;
    return t && (i.opacity = i.width = e), i;
  }
  function ct(e, t, n) {
    for (
      var r,
        i = (ft.tweeners[t] || []).concat(ft.tweeners["*"]),
        o = 0,
        a = i.length;
      o < a;
      o++
    )
      if ((r = i[o].call(n, t, e))) return r;
  }
  function ft(o, e, t) {
    var n,
      a,
      r = 0,
      i = ft.prefilters.length,
      s = S.Deferred().always(function () {
        delete u.elem;
      }),
      u = function () {
        if (a) return !1;
        for (
          var e = tt || ut(),
            t = Math.max(0, l.startTime + l.duration - e),
            n = 1 - (t / l.duration || 0),
            r = 0,
            i = l.tweens.length;
          r < i;
          r++
        )
          l.tweens[r].run(n);
        return (
          s.notifyWith(o, [l, n, t]),
          n < 1 && i
            ? t
            : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1)
        );
      },
      l = s.promise({
        elem: o,
        props: S.extend({}, e),
        opts: S.extend(!0, { specialEasing: {}, easing: S.easing._default }, t),
        originalProperties: e,
        originalOptions: t,
        startTime: tt || ut(),
        duration: t.duration,
        tweens: [],
        createTween: function (e, t) {
          var n = S.Tween(
            o,
            l.opts,
            e,
            t,
            l.opts.specialEasing[e] || l.opts.easing
          );
          return l.tweens.push(n), n;
        },
        stop: function (e) {
          var t = 0,
            n = e ? l.tweens.length : 0;
          if (a) return this;
          for (a = !0; t < n; t++) l.tweens[t].run(1);
          return (
            e
              ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e]))
              : s.rejectWith(o, [l, e]),
            this
          );
        },
      }),
      c = l.props;
    for (
      !(function (e, t) {
        var n, r, i, o, a;
        for (n in e)
          if (
            ((i = t[(r = X(n))]),
            (o = e[n]),
            Array.isArray(o) && ((i = o[1]), (o = e[n] = o[0])),
            n !== r && ((e[r] = o), delete e[n]),
            (a = S.cssHooks[r]) && ("expand" in a))
          )
            for (n in ((o = a.expand(o)), delete e[r], o))
              (n in e) || ((e[n] = o[n]), (t[n] = i));
          else t[r] = i;
      })(c, l.opts.specialEasing);
      r < i;
      r++
    )
      if ((n = ft.prefilters[r].call(l, o, c, l.opts)))
        return (
          m(n.stop) &&
            (S._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)),
          n
        );
    return (
      S.map(c, ct, l),
      m(l.opts.start) && l.opts.start.call(o, l),
      l
        .progress(l.opts.progress)
        .done(l.opts.done, l.opts.complete)
        .fail(l.opts.fail)
        .always(l.opts.always),
      S.fx.timer(S.extend(u, { elem: o, anim: l, queue: l.opts.queue })),
      l
    );
  }
  (S.Animation = S.extend(ft, {
    tweeners: {
      "*": [
        function (e, t) {
          var n = this.createTween(e, t);
          return se(n.elem, e, te.exec(t), n), n;
        },
      ],
    },
    tweener: function (e, t) {
      m(e) ? ((t = e), (e = ["*"])) : (e = e.match(P));
      for (var n, r = 0, i = e.length; r < i; r++)
        (n = e[r]),
          (ft.tweeners[n] = ft.tweeners[n] || []),
          ft.tweeners[n].unshift(t);
    },
    prefilters: [
      function (e, t, n) {
        var r,
          i,
          o,
          a,
          s,
          u,
          l,
          c,
          f = "width" in t || "height" in t,
          p = this,
          d = {},
          h = e.style,
          g = e.nodeType && ae(e),
          v = Y.get(e, "fxshow");
        for (r in (n.queue ||
          (null == (a = S._queueHooks(e, "fx")).unqueued &&
            ((a.unqueued = 0),
            (s = a.empty.fire),
            (a.empty.fire = function () {
              a.unqueued || s();
            })),
          a.unqueued++,
          p.always(function () {
            p.always(function () {
              a.unqueued--, S.queue(e, "fx").length || a.empty.fire();
            });
          })),
        t))
          if (((i = t[r]), ot.test(i))) {
            if (
              (delete t[r],
              (o = o || "toggle" === i),
              i === (g ? "hide" : "show"))
            ) {
              if ("show" !== i || !v || void 0 === v[r]) continue;
              g = !0;
            }
            d[r] = (v && v[r]) || S.style(e, r);
          }
        if ((u = !S.isEmptyObject(t)) || !S.isEmptyObject(d))
          for (r in (f &&
            1 === e.nodeType &&
            ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
            null == (l = v && v.display) && (l = Y.get(e, "display")),
            "none" === (c = S.css(e, "display")) &&
              (l
                ? (c = l)
                : (le([e], !0),
                  (l = e.style.display || l),
                  (c = S.css(e, "display")),
                  le([e]))),
            ("inline" === c || ("inline-block" === c && null != l)) &&
              "none" === S.css(e, "float") &&
              (u ||
                (p.done(function () {
                  h.display = l;
                }),
                null == l && ((c = h.display), (l = "none" === c ? "" : c))),
              (h.display = "inline-block"))),
          n.overflow &&
            ((h.overflow = "hidden"),
            p.always(function () {
              (h.overflow = n.overflow[0]),
                (h.overflowX = n.overflow[1]),
                (h.overflowY = n.overflow[2]);
            })),
          (u = !1),
          d))
            u ||
              (v
                ? "hidden" in v && (g = v.hidden)
                : (v = Y.access(e, "fxshow", { display: l })),
              o && (v.hidden = !g),
              g && le([e], !0),
              p.done(function () {
                for (r in (g || le([e]), Y.remove(e, "fxshow"), d))
                  S.style(e, r, d[r]);
              })),
              (u = ct(g ? v[r] : 0, r, p)),
              r in v ||
                ((v[r] = u.start), g && ((u.end = u.start), (u.start = 0)));
      },
    ],
    prefilter: function (e, t) {
      t ? ft.prefilters.unshift(e) : ft.prefilters.push(e);
    },
  })),
    (S.speed = function (e, t, n) {
      var r =
        e && "object" == typeof e
          ? S.extend({}, e)
          : {
              complete: n || (!n && t) || (m(e) && e),
              duration: e,
              easing: (n && t) || (t && !m(t) && t),
            };
      return (
        S.fx.off
          ? (r.duration = 0)
          : "number" != typeof r.duration &&
            (r.duration in S.fx.speeds
              ? (r.duration = S.fx.speeds[r.duration])
              : (r.duration = S.fx.speeds._default)),
        (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
        (r.old = r.complete),
        (r.complete = function () {
          m(r.old) && r.old.call(this), r.queue && S.dequeue(this, r.queue);
        }),
        r
      );
    }),
    S.fn.extend({
      fadeTo: function (e, t, n, r) {
        return this.filter(ae)
          .css("opacity", 0)
          .show()
          .end()
          .animate({ opacity: t }, e, n, r);
      },
      animate: function (t, e, n, r) {
        var i = S.isEmptyObject(t),
          o = S.speed(e, n, r),
          a = function () {
            var e = ft(this, S.extend({}, t), o);
            (i || Y.get(this, "finish")) && e.stop(!0);
          };
        return (
          (a.finish = a),
          i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        );
      },
      stop: function (i, e, o) {
        var a = function (e) {
          var t = e.stop;
          delete e.stop, t(o);
        };
        return (
          "string" != typeof i && ((o = e), (e = i), (i = void 0)),
          e && this.queue(i || "fx", []),
          this.each(function () {
            var e = !0,
              t = null != i && i + "queueHooks",
              n = S.timers,
              r = Y.get(this);
            if (t) r[t] && r[t].stop && a(r[t]);
            else for (t in r) r[t] && r[t].stop && at.test(t) && a(r[t]);
            for (t = n.length; t--; )
              n[t].elem !== this ||
                (null != i && n[t].queue !== i) ||
                (n[t].anim.stop(o), (e = !1), n.splice(t, 1));
            (!e && o) || S.dequeue(this, i);
          })
        );
      },
      finish: function (a) {
        return (
          !1 !== a && (a = a || "fx"),
          this.each(function () {
            var e,
              t = Y.get(this),
              n = t[a + "queue"],
              r = t[a + "queueHooks"],
              i = S.timers,
              o = n ? n.length : 0;
            for (
              t.finish = !0,
                S.queue(this, a, []),
                r && r.stop && r.stop.call(this, !0),
                e = i.length;
              e--;

            )
              i[e].elem === this &&
                i[e].queue === a &&
                (i[e].anim.stop(!0), i.splice(e, 1));
            for (e = 0; e < o; e++)
              n[e] && n[e].finish && n[e].finish.call(this);
            delete t.finish;
          })
        );
      },
    }),
    S.each(["toggle", "show", "hide"], function (e, r) {
      var i = S.fn[r];
      S.fn[r] = function (e, t, n) {
        return null == e || "boolean" == typeof e
          ? i.apply(this, arguments)
          : this.animate(lt(r, !0), e, t, n);
      };
    }),
    S.each(
      {
        slideDown: lt("show"),
        slideUp: lt("hide"),
        slideToggle: lt("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" },
      },
      function (e, r) {
        S.fn[e] = function (e, t, n) {
          return this.animate(r, e, t, n);
        };
      }
    ),
    (S.timers = []),
    (S.fx.tick = function () {
      var e,
        t = 0,
        n = S.timers;
      for (tt = Date.now(); t < n.length; t++)
        (e = n[t])() || n[t] !== e || n.splice(t--, 1);
      n.length || S.fx.stop(), (tt = void 0);
    }),
    (S.fx.timer = function (e) {
      S.timers.push(e), S.fx.start();
    }),
    (S.fx.interval = 13),
    (S.fx.start = function () {
      nt || ((nt = !0), st());
    }),
    (S.fx.stop = function () {
      nt = null;
    }),
    (S.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (S.fn.delay = function (r, e) {
      return (
        (r = (S.fx && S.fx.speeds[r]) || r),
        (e = e || "fx"),
        this.queue(e, function (e, t) {
          var n = C.setTimeout(e, r);
          t.stop = function () {
            C.clearTimeout(n);
          };
        })
      );
    }),
    (rt = E.createElement("input")),
    (it = E.createElement("select").appendChild(E.createElement("option"))),
    (rt.type = "checkbox"),
    (y.checkOn = "" !== rt.value),
    (y.optSelected = it.selected),
    ((rt = E.createElement("input")).value = "t"),
    (rt.type = "radio"),
    (y.radioValue = "t" === rt.value);
  var pt,
    dt = S.expr.attrHandle;
  S.fn.extend({
    attr: function (e, t) {
      return $(this, S.attr, e, t, 1 < arguments.length);
    },
    removeAttr: function (e) {
      return this.each(function () {
        S.removeAttr(this, e);
      });
    },
  }),
    S.extend({
      attr: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return "undefined" == typeof e.getAttribute
            ? S.prop(e, t, n)
            : ((1 === o && S.isXMLDoc(e)) ||
                (i =
                  S.attrHooks[t.toLowerCase()] ||
                  (S.expr.match.bool.test(t) ? pt : void 0)),
              void 0 !== n
                ? null === n
                  ? void S.removeAttr(e, t)
                  : i && "set" in i && void 0 !== (r = i.set(e, n, t))
                  ? r
                  : (e.setAttribute(t, n + ""), n)
                : i && "get" in i && null !== (r = i.get(e, t))
                ? r
                : null == (r = S.find.attr(e, t))
                ? void 0
                : r);
      },
      attrHooks: {
        type: {
          set: function (e, t) {
            if (!y.radioValue && "radio" === t && A(e, "input")) {
              var n = e.value;
              return e.setAttribute("type", t), n && (e.value = n), t;
            }
          },
        },
      },
      removeAttr: function (e, t) {
        var n,
          r = 0,
          i = t && t.match(P);
        if (i && 1 === e.nodeType) while ((n = i[r++])) e.removeAttribute(n);
      },
    }),
    (pt = {
      set: function (e, t, n) {
        return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n), n;
      },
    }),
    S.each(S.expr.match.bool.source.match(/\w+/g), function (e, t) {
      var a = dt[t] || S.find.attr;
      dt[t] = function (e, t, n) {
        var r,
          i,
          o = t.toLowerCase();
        return (
          n ||
            ((i = dt[o]),
            (dt[o] = r),
            (r = null != a(e, t, n) ? o : null),
            (dt[o] = i)),
          r
        );
      };
    });
  var ht = /^(?:input|select|textarea|button)$/i,
    gt = /^(?:a|area)$/i;
  function vt(e) {
    return (e.match(P) || []).join(" ");
  }
  function yt(e) {
    return (e.getAttribute && e.getAttribute("class")) || "";
  }
  function mt(e) {
    return Array.isArray(e) ? e : ("string" == typeof e && e.match(P)) || [];
  }
  S.fn.extend({
    prop: function (e, t) {
      return $(this, S.prop, e, t, 1 < arguments.length);
    },
    removeProp: function (e) {
      return this.each(function () {
        delete this[S.propFix[e] || e];
      });
    },
  }),
    S.extend({
      prop: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return (
            (1 === o && S.isXMLDoc(e)) ||
              ((t = S.propFix[t] || t), (i = S.propHooks[t])),
            void 0 !== n
              ? i && "set" in i && void 0 !== (r = i.set(e, n, t))
                ? r
                : (e[t] = n)
              : i && "get" in i && null !== (r = i.get(e, t))
              ? r
              : e[t]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (e) {
            var t = S.find.attr(e, "tabindex");
            return t
              ? parseInt(t, 10)
              : ht.test(e.nodeName) || (gt.test(e.nodeName) && e.href)
              ? 0
              : -1;
          },
        },
      },
      propFix: { for: "htmlFor", class: "className" },
    }),
    y.optSelected ||
      (S.propHooks.selected = {
        get: function (e) {
          var t = e.parentNode;
          return t && t.parentNode && t.parentNode.selectedIndex, null;
        },
        set: function (e) {
          var t = e.parentNode;
          t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
        },
      }),
    S.each(
      [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable",
      ],
      function () {
        S.propFix[this.toLowerCase()] = this;
      }
    ),
    S.fn.extend({
      addClass: function (t) {
        var e,
          n,
          r,
          i,
          o,
          a,
          s,
          u = 0;
        if (m(t))
          return this.each(function (e) {
            S(this).addClass(t.call(this, e, yt(this)));
          });
        if ((e = mt(t)).length)
          while ((n = this[u++]))
            if (((i = yt(n)), (r = 1 === n.nodeType && " " + vt(i) + " "))) {
              a = 0;
              while ((o = e[a++]))
                r.indexOf(" " + o + " ") < 0 && (r += o + " ");
              i !== (s = vt(r)) && n.setAttribute("class", s);
            }
        return this;
      },
      removeClass: function (t) {
        var e,
          n,
          r,
          i,
          o,
          a,
          s,
          u = 0;
        if (m(t))
          return this.each(function (e) {
            S(this).removeClass(t.call(this, e, yt(this)));
          });
        if (!arguments.length) return this.attr("class", "");
        if ((e = mt(t)).length)
          while ((n = this[u++]))
            if (((i = yt(n)), (r = 1 === n.nodeType && " " + vt(i) + " "))) {
              a = 0;
              while ((o = e[a++]))
                while (-1 < r.indexOf(" " + o + " "))
                  r = r.replace(" " + o + " ", " ");
              i !== (s = vt(r)) && n.setAttribute("class", s);
            }
        return this;
      },
      toggleClass: function (i, t) {
        var o = typeof i,
          a = "string" === o || Array.isArray(i);
        return "boolean" == typeof t && a
          ? t
            ? this.addClass(i)
            : this.removeClass(i)
          : m(i)
          ? this.each(function (e) {
              S(this).toggleClass(i.call(this, e, yt(this), t), t);
            })
          : this.each(function () {
              var e, t, n, r;
              if (a) {
                (t = 0), (n = S(this)), (r = mt(i));
                while ((e = r[t++]))
                  n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
              } else (void 0 !== i && "boolean" !== o) || ((e = yt(this)) && Y.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : Y.get(this, "__className__") || ""));
            });
      },
      hasClass: function (e) {
        var t,
          n,
          r = 0;
        t = " " + e + " ";
        while ((n = this[r++]))
          if (1 === n.nodeType && -1 < (" " + vt(yt(n)) + " ").indexOf(t))
            return !0;
        return !1;
      },
    });
  var xt = /\r/g;
  S.fn.extend({
    val: function (n) {
      var r,
        e,
        i,
        t = this[0];
      return arguments.length
        ? ((i = m(n)),
          this.each(function (e) {
            var t;
            1 === this.nodeType &&
              (null == (t = i ? n.call(this, e, S(this).val()) : n)
                ? (t = "")
                : "number" == typeof t
                ? (t += "")
                : Array.isArray(t) &&
                  (t = S.map(t, function (e) {
                    return null == e ? "" : e + "";
                  })),
              ((r =
                S.valHooks[this.type] ||
                S.valHooks[this.nodeName.toLowerCase()]) &&
                "set" in r &&
                void 0 !== r.set(this, t, "value")) ||
                (this.value = t));
          }))
        : t
        ? (r = S.valHooks[t.type] || S.valHooks[t.nodeName.toLowerCase()]) &&
          "get" in r &&
          void 0 !== (e = r.get(t, "value"))
          ? e
          : "string" == typeof (e = t.value)
          ? e.replace(xt, "")
          : null == e
          ? ""
          : e
        : void 0;
    },
  }),
    S.extend({
      valHooks: {
        option: {
          get: function (e) {
            var t = S.find.attr(e, "value");
            return null != t ? t : vt(S.text(e));
          },
        },
        select: {
          get: function (e) {
            var t,
              n,
              r,
              i = e.options,
              o = e.selectedIndex,
              a = "select-one" === e.type,
              s = a ? null : [],
              u = a ? o + 1 : i.length;
            for (r = o < 0 ? u : a ? o : 0; r < u; r++)
              if (
                ((n = i[r]).selected || r === o) &&
                !n.disabled &&
                (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))
              ) {
                if (((t = S(n).val()), a)) return t;
                s.push(t);
              }
            return s;
          },
          set: function (e, t) {
            var n,
              r,
              i = e.options,
              o = S.makeArray(t),
              a = i.length;
            while (a--)
              ((r = i[a]).selected =
                -1 < S.inArray(S.valHooks.option.get(r), o)) && (n = !0);
            return n || (e.selectedIndex = -1), o;
          },
        },
      },
    }),
    S.each(["radio", "checkbox"], function () {
      (S.valHooks[this] = {
        set: function (e, t) {
          if (Array.isArray(t))
            return (e.checked = -1 < S.inArray(S(e).val(), t));
        },
      }),
        y.checkOn ||
          (S.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value;
          });
    }),
    (y.focusin = "onfocusin" in C);
  var bt = /^(?:focusinfocus|focusoutblur)$/,
    wt = function (e) {
      e.stopPropagation();
    };
  S.extend(S.event, {
    trigger: function (e, t, n, r) {
      var i,
        o,
        a,
        s,
        u,
        l,
        c,
        f,
        p = [n || E],
        d = v.call(e, "type") ? e.type : e,
        h = v.call(e, "namespace") ? e.namespace.split(".") : [];
      if (
        ((o = f = a = n = n || E),
        3 !== n.nodeType &&
          8 !== n.nodeType &&
          !bt.test(d + S.event.triggered) &&
          (-1 < d.indexOf(".") && ((d = (h = d.split(".")).shift()), h.sort()),
          (u = d.indexOf(":") < 0 && "on" + d),
          ((e = e[S.expando]
            ? e
            : new S.Event(d, "object" == typeof e && e)).isTrigger = r ? 2 : 3),
          (e.namespace = h.join(".")),
          (e.rnamespace = e.namespace
            ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (e.result = void 0),
          e.target || (e.target = n),
          (t = null == t ? [e] : S.makeArray(t, [e])),
          (c = S.event.special[d] || {}),
          r || !c.trigger || !1 !== c.trigger.apply(n, t)))
      ) {
        if (!r && !c.noBubble && !x(n)) {
          for (
            s = c.delegateType || d, bt.test(s + d) || (o = o.parentNode);
            o;
            o = o.parentNode
          )
            p.push(o), (a = o);
          a === (n.ownerDocument || E) &&
            p.push(a.defaultView || a.parentWindow || C);
        }
        i = 0;
        while ((o = p[i++]) && !e.isPropagationStopped())
          (f = o),
            (e.type = 1 < i ? s : c.bindType || d),
            (l =
              (Y.get(o, "events") || Object.create(null))[e.type] &&
              Y.get(o, "handle")) && l.apply(o, t),
            (l = u && o[u]) &&
              l.apply &&
              V(o) &&
              ((e.result = l.apply(o, t)),
              !1 === e.result && e.preventDefault());
        return (
          (e.type = d),
          r ||
            e.isDefaultPrevented() ||
            (c._default && !1 !== c._default.apply(p.pop(), t)) ||
            !V(n) ||
            (u &&
              m(n[d]) &&
              !x(n) &&
              ((a = n[u]) && (n[u] = null),
              (S.event.triggered = d),
              e.isPropagationStopped() && f.addEventListener(d, wt),
              n[d](),
              e.isPropagationStopped() && f.removeEventListener(d, wt),
              (S.event.triggered = void 0),
              a && (n[u] = a))),
          e.result
        );
      }
    },
    simulate: function (e, t, n) {
      var r = S.extend(new S.Event(), n, { type: e, isSimulated: !0 });
      S.event.trigger(r, null, t);
    },
  }),
    S.fn.extend({
      trigger: function (e, t) {
        return this.each(function () {
          S.event.trigger(e, t, this);
        });
      },
      triggerHandler: function (e, t) {
        var n = this[0];
        if (n) return S.event.trigger(e, t, n, !0);
      },
    }),
    y.focusin ||
      S.each({ focus: "focusin", blur: "focusout" }, function (n, r) {
        var i = function (e) {
          S.event.simulate(r, e.target, S.event.fix(e));
        };
        S.event.special[r] = {
          setup: function () {
            var e = this.ownerDocument || this.document || this,
              t = Y.access(e, r);
            t || e.addEventListener(n, i, !0), Y.access(e, r, (t || 0) + 1);
          },
          teardown: function () {
            var e = this.ownerDocument || this.document || this,
              t = Y.access(e, r) - 1;
            t
              ? Y.access(e, r, t)
              : (e.removeEventListener(n, i, !0), Y.remove(e, r));
          },
        };
      });
  var Tt = C.location,
    Ct = { guid: Date.now() },
    Et = /\?/;
  S.parseXML = function (e) {
    var t;
    if (!e || "string" != typeof e) return null;
    try {
      t = new C.DOMParser().parseFromString(e, "text/xml");
    } catch (e) {
      t = void 0;
    }
    return (
      (t && !t.getElementsByTagName("parsererror").length) ||
        S.error("Invalid XML: " + e),
      t
    );
  };
  var St = /\[\]$/,
    kt = /\r?\n/g,
    At = /^(?:submit|button|image|reset|file)$/i,
    Nt = /^(?:input|select|textarea|keygen)/i;
  function Dt(n, e, r, i) {
    var t;
    if (Array.isArray(e))
      S.each(e, function (e, t) {
        r || St.test(n)
          ? i(n, t)
          : Dt(
              n + "[" + ("object" == typeof t && null != t ? e : "") + "]",
              t,
              r,
              i
            );
      });
    else if (r || "object" !== w(e)) i(n, e);
    else for (t in e) Dt(n + "[" + t + "]", e[t], r, i);
  }
  (S.param = function (e, t) {
    var n,
      r = [],
      i = function (e, t) {
        var n = m(t) ? t() : t;
        r[r.length] =
          encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
      };
    if (null == e) return "";
    if (Array.isArray(e) || (e.jquery && !S.isPlainObject(e)))
      S.each(e, function () {
        i(this.name, this.value);
      });
    else for (n in e) Dt(n, e[n], t, i);
    return r.join("&");
  }),
    S.fn.extend({
      serialize: function () {
        return S.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var e = S.prop(this, "elements");
          return e ? S.makeArray(e) : this;
        })
          .filter(function () {
            var e = this.type;
            return (
              this.name &&
              !S(this).is(":disabled") &&
              Nt.test(this.nodeName) &&
              !At.test(e) &&
              (this.checked || !pe.test(e))
            );
          })
          .map(function (e, t) {
            var n = S(this).val();
            return null == n
              ? null
              : Array.isArray(n)
              ? S.map(n, function (e) {
                  return { name: t.name, value: e.replace(kt, "\r\n") };
                })
              : { name: t.name, value: n.replace(kt, "\r\n") };
          })
          .get();
      },
    });
  var jt = /%20/g,
    qt = /#.*$/,
    Lt = /([?&])_=[^&]*/,
    Ht = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    Ot = /^(?:GET|HEAD)$/,
    Pt = /^\/\//,
    Rt = {},
    Mt = {},
    It = "*/".concat("*"),
    Wt = E.createElement("a");
  function Ft(o) {
    return function (e, t) {
      "string" != typeof e && ((t = e), (e = "*"));
      var n,
        r = 0,
        i = e.toLowerCase().match(P) || [];
      if (m(t))
        while ((n = i[r++]))
          "+" === n[0]
            ? ((n = n.slice(1) || "*"), (o[n] = o[n] || []).unshift(t))
            : (o[n] = o[n] || []).push(t);
    };
  }
  function Bt(t, i, o, a) {
    var s = {},
      u = t === Mt;
    function l(e) {
      var r;
      return (
        (s[e] = !0),
        S.each(t[e] || [], function (e, t) {
          var n = t(i, o, a);
          return "string" != typeof n || u || s[n]
            ? u
              ? !(r = n)
              : void 0
            : (i.dataTypes.unshift(n), l(n), !1);
        }),
        r
      );
    }
    return l(i.dataTypes[0]) || (!s["*"] && l("*"));
  }
  function $t(e, t) {
    var n,
      r,
      i = S.ajaxSettings.flatOptions || {};
    for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
    return r && S.extend(!0, e, r), e;
  }
  (Wt.href = Tt.href),
    S.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: Tt.href,
        type: "GET",
        isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
          Tt.protocol
        ),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": It,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript",
        },
        contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON",
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": JSON.parse,
          "text xml": S.parseXML,
        },
        flatOptions: { url: !0, context: !0 },
      },
      ajaxSetup: function (e, t) {
        return t ? $t($t(e, S.ajaxSettings), t) : $t(S.ajaxSettings, e);
      },
      ajaxPrefilter: Ft(Rt),
      ajaxTransport: Ft(Mt),
      ajax: function (e, t) {
        "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
        var c,
          f,
          p,
          n,
          d,
          r,
          h,
          g,
          i,
          o,
          v = S.ajaxSetup({}, t),
          y = v.context || v,
          m = v.context && (y.nodeType || y.jquery) ? S(y) : S.event,
          x = S.Deferred(),
          b = S.Callbacks("once memory"),
          w = v.statusCode || {},
          a = {},
          s = {},
          u = "canceled",
          T = {
            readyState: 0,
            getResponseHeader: function (e) {
              var t;
              if (h) {
                if (!n) {
                  n = {};
                  while ((t = Ht.exec(p)))
                    n[t[1].toLowerCase() + " "] = (
                      n[t[1].toLowerCase() + " "] || []
                    ).concat(t[2]);
                }
                t = n[e.toLowerCase() + " "];
              }
              return null == t ? null : t.join(", ");
            },
            getAllResponseHeaders: function () {
              return h ? p : null;
            },
            setRequestHeader: function (e, t) {
              return (
                null == h &&
                  ((e = s[e.toLowerCase()] = s[e.toLowerCase()] || e),
                  (a[e] = t)),
                this
              );
            },
            overrideMimeType: function (e) {
              return null == h && (v.mimeType = e), this;
            },
            statusCode: function (e) {
              var t;
              if (e)
                if (h) T.always(e[T.status]);
                else for (t in e) w[t] = [w[t], e[t]];
              return this;
            },
            abort: function (e) {
              var t = e || u;
              return c && c.abort(t), l(0, t), this;
            },
          };
        if (
          (x.promise(T),
          (v.url = ((e || v.url || Tt.href) + "").replace(
            Pt,
            Tt.protocol + "//"
          )),
          (v.type = t.method || t.type || v.method || v.type),
          (v.dataTypes = (v.dataType || "*").toLowerCase().match(P) || [""]),
          null == v.crossDomain)
        ) {
          r = E.createElement("a");
          try {
            (r.href = v.url),
              (r.href = r.href),
              (v.crossDomain =
                Wt.protocol + "//" + Wt.host != r.protocol + "//" + r.host);
          } catch (e) {
            v.crossDomain = !0;
          }
        }
        if (
          (v.data &&
            v.processData &&
            "string" != typeof v.data &&
            (v.data = S.param(v.data, v.traditional)),
          Bt(Rt, v, t, T),
          h)
        )
          return T;
        for (i in ((g = S.event && v.global) &&
          0 == S.active++ &&
          S.event.trigger("ajaxStart"),
        (v.type = v.type.toUpperCase()),
        (v.hasContent = !Ot.test(v.type)),
        (f = v.url.replace(qt, "")),
        v.hasContent
          ? v.data &&
            v.processData &&
            0 ===
              (v.contentType || "").indexOf(
                "application/x-www-form-urlencoded"
              ) &&
            (v.data = v.data.replace(jt, "+"))
          : ((o = v.url.slice(f.length)),
            v.data &&
              (v.processData || "string" == typeof v.data) &&
              ((f += (Et.test(f) ? "&" : "?") + v.data), delete v.data),
            !1 === v.cache &&
              ((f = f.replace(Lt, "$1")),
              (o = (Et.test(f) ? "&" : "?") + "_=" + Ct.guid++ + o)),
            (v.url = f + o)),
        v.ifModified &&
          (S.lastModified[f] &&
            T.setRequestHeader("If-Modified-Since", S.lastModified[f]),
          S.etag[f] && T.setRequestHeader("If-None-Match", S.etag[f])),
        ((v.data && v.hasContent && !1 !== v.contentType) || t.contentType) &&
          T.setRequestHeader("Content-Type", v.contentType),
        T.setRequestHeader(
          "Accept",
          v.dataTypes[0] && v.accepts[v.dataTypes[0]]
            ? v.accepts[v.dataTypes[0]] +
                ("*" !== v.dataTypes[0] ? ", " + It + "; q=0.01" : "")
            : v.accepts["*"]
        ),
        v.headers))
          T.setRequestHeader(i, v.headers[i]);
        if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h))
          return T.abort();
        if (
          ((u = "abort"),
          b.add(v.complete),
          T.done(v.success),
          T.fail(v.error),
          (c = Bt(Mt, v, t, T)))
        ) {
          if (((T.readyState = 1), g && m.trigger("ajaxSend", [T, v]), h))
            return T;
          v.async &&
            0 < v.timeout &&
            (d = C.setTimeout(function () {
              T.abort("timeout");
            }, v.timeout));
          try {
            (h = !1), c.send(a, l);
          } catch (e) {
            if (h) throw e;
            l(-1, e);
          }
        } else l(-1, "No Transport");
        function l(e, t, n, r) {
          var i,
            o,
            a,
            s,
            u,
            l = t;
          h ||
            ((h = !0),
            d && C.clearTimeout(d),
            (c = void 0),
            (p = r || ""),
            (T.readyState = 0 < e ? 4 : 0),
            (i = (200 <= e && e < 300) || 304 === e),
            n &&
              (s = (function (e, t, n) {
                var r,
                  i,
                  o,
                  a,
                  s = e.contents,
                  u = e.dataTypes;
                while ("*" === u[0])
                  u.shift(),
                    void 0 === r &&
                      (r = e.mimeType || t.getResponseHeader("Content-Type"));
                if (r)
                  for (i in s)
                    if (s[i] && s[i].test(r)) {
                      u.unshift(i);
                      break;
                    }
                if (u[0] in n) o = u[0];
                else {
                  for (i in n) {
                    if (!u[0] || e.converters[i + " " + u[0]]) {
                      o = i;
                      break;
                    }
                    a || (a = i);
                  }
                  o = o || a;
                }
                if (o) return o !== u[0] && u.unshift(o), n[o];
              })(v, T, n)),
            !i &&
              -1 < S.inArray("script", v.dataTypes) &&
              (v.converters["text script"] = function () {}),
            (s = (function (e, t, n, r) {
              var i,
                o,
                a,
                s,
                u,
                l = {},
                c = e.dataTypes.slice();
              if (c[1])
                for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
              o = c.shift();
              while (o)
                if (
                  (e.responseFields[o] && (n[e.responseFields[o]] = t),
                  !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                  (u = o),
                  (o = c.shift()))
                )
                  if ("*" === o) o = u;
                  else if ("*" !== u && u !== o) {
                    if (!(a = l[u + " " + o] || l["* " + o]))
                      for (i in l)
                        if (
                          (s = i.split(" "))[1] === o &&
                          (a = l[u + " " + s[0]] || l["* " + s[0]])
                        ) {
                          !0 === a
                            ? (a = l[i])
                            : !0 !== l[i] && ((o = s[0]), c.unshift(s[1]));
                          break;
                        }
                    if (!0 !== a)
                      if (a && e["throws"]) t = a(t);
                      else
                        try {
                          t = a(t);
                        } catch (e) {
                          return {
                            state: "parsererror",
                            error: a
                              ? e
                              : "No conversion from " + u + " to " + o,
                          };
                        }
                  }
              return { state: "success", data: t };
            })(v, s, T, i)),
            i
              ? (v.ifModified &&
                  ((u = T.getResponseHeader("Last-Modified")) &&
                    (S.lastModified[f] = u),
                  (u = T.getResponseHeader("etag")) && (S.etag[f] = u)),
                204 === e || "HEAD" === v.type
                  ? (l = "nocontent")
                  : 304 === e
                  ? (l = "notmodified")
                  : ((l = s.state), (o = s.data), (i = !(a = s.error))))
              : ((a = l), (!e && l) || ((l = "error"), e < 0 && (e = 0))),
            (T.status = e),
            (T.statusText = (t || l) + ""),
            i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]),
            T.statusCode(w),
            (w = void 0),
            g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]),
            b.fireWith(y, [T, l]),
            g &&
              (m.trigger("ajaxComplete", [T, v]),
              --S.active || S.event.trigger("ajaxStop")));
        }
        return T;
      },
      getJSON: function (e, t, n) {
        return S.get(e, t, n, "json");
      },
      getScript: function (e, t) {
        return S.get(e, void 0, t, "script");
      },
    }),
    S.each(["get", "post"], function (e, i) {
      S[i] = function (e, t, n, r) {
        return (
          m(t) && ((r = r || n), (n = t), (t = void 0)),
          S.ajax(
            S.extend(
              { url: e, type: i, dataType: r, data: t, success: n },
              S.isPlainObject(e) && e
            )
          )
        );
      };
    }),
    S.ajaxPrefilter(function (e) {
      var t;
      for (t in e.headers)
        "content-type" === t.toLowerCase() &&
          (e.contentType = e.headers[t] || "");
    }),
    (S._evalUrl = function (e, t, n) {
      return S.ajax({
        url: e,
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        converters: { "text script": function () {} },
        dataFilter: function (e) {
          S.globalEval(e, t, n);
        },
      });
    }),
    S.fn.extend({
      wrapAll: function (e) {
        var t;
        return (
          this[0] &&
            (m(e) && (e = e.call(this[0])),
            (t = S(e, this[0].ownerDocument).eq(0).clone(!0)),
            this[0].parentNode && t.insertBefore(this[0]),
            t
              .map(function () {
                var e = this;
                while (e.firstElementChild) e = e.firstElementChild;
                return e;
              })
              .append(this)),
          this
        );
      },
      wrapInner: function (n) {
        return m(n)
          ? this.each(function (e) {
              S(this).wrapInner(n.call(this, e));
            })
          : this.each(function () {
              var e = S(this),
                t = e.contents();
              t.length ? t.wrapAll(n) : e.append(n);
            });
      },
      wrap: function (t) {
        var n = m(t);
        return this.each(function (e) {
          S(this).wrapAll(n ? t.call(this, e) : t);
        });
      },
      unwrap: function (e) {
        return (
          this.parent(e)
            .not("body")
            .each(function () {
              S(this).replaceWith(this.childNodes);
            }),
          this
        );
      },
    }),
    (S.expr.pseudos.hidden = function (e) {
      return !S.expr.pseudos.visible(e);
    }),
    (S.expr.pseudos.visible = function (e) {
      return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }),
    (S.ajaxSettings.xhr = function () {
      try {
        return new C.XMLHttpRequest();
      } catch (e) {}
    });
  var _t = { 0: 200, 1223: 204 },
    zt = S.ajaxSettings.xhr();
  (y.cors = !!zt && "withCredentials" in zt),
    (y.ajax = zt = !!zt),
    S.ajaxTransport(function (i) {
      var o, a;
      if (y.cors || (zt && !i.crossDomain))
        return {
          send: function (e, t) {
            var n,
              r = i.xhr();
            if (
              (r.open(i.type, i.url, i.async, i.username, i.password),
              i.xhrFields)
            )
              for (n in i.xhrFields) r[n] = i.xhrFields[n];
            for (n in (i.mimeType &&
              r.overrideMimeType &&
              r.overrideMimeType(i.mimeType),
            i.crossDomain ||
              e["X-Requested-With"] ||
              (e["X-Requested-With"] = "XMLHttpRequest"),
            e))
              r.setRequestHeader(n, e[n]);
            (o = function (e) {
              return function () {
                o &&
                  ((o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null),
                  "abort" === e
                    ? r.abort()
                    : "error" === e
                    ? "number" != typeof r.status
                      ? t(0, "error")
                      : t(r.status, r.statusText)
                    : t(
                        _t[r.status] || r.status,
                        r.statusText,
                        "text" !== (r.responseType || "text") ||
                          "string" != typeof r.responseText
                          ? { binary: r.response }
                          : { text: r.responseText },
                        r.getAllResponseHeaders()
                      ));
              };
            }),
              (r.onload = o()),
              (a = r.onerror = r.ontimeout = o("error")),
              void 0 !== r.onabort
                ? (r.onabort = a)
                : (r.onreadystatechange = function () {
                    4 === r.readyState &&
                      C.setTimeout(function () {
                        o && a();
                      });
                  }),
              (o = o("abort"));
            try {
              r.send((i.hasContent && i.data) || null);
            } catch (e) {
              if (o) throw e;
            }
          },
          abort: function () {
            o && o();
          },
        };
    }),
    S.ajaxPrefilter(function (e) {
      e.crossDomain && (e.contents.script = !1);
    }),
    S.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
      },
      contents: { script: /\b(?:java|ecma)script\b/ },
      converters: {
        "text script": function (e) {
          return S.globalEval(e), e;
        },
      },
    }),
    S.ajaxPrefilter("script", function (e) {
      void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
    }),
    S.ajaxTransport("script", function (n) {
      var r, i;
      if (n.crossDomain || n.scriptAttrs)
        return {
          send: function (e, t) {
            (r = S("<script>")
              .attr(n.scriptAttrs || {})
              .prop({ charset: n.scriptCharset, src: n.url })
              .on(
                "load error",
                (i = function (e) {
                  r.remove(),
                    (i = null),
                    e && t("error" === e.type ? 404 : 200, e.type);
                })
              )),
              E.head.appendChild(r[0]);
          },
          abort: function () {
            i && i();
          },
        };
    });
  var Ut,
    Xt = [],
    Vt = /(=)\?(?=&|$)|\?\?/;
  S.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var e = Xt.pop() || S.expando + "_" + Ct.guid++;
      return (this[e] = !0), e;
    },
  }),
    S.ajaxPrefilter("json jsonp", function (e, t, n) {
      var r,
        i,
        o,
        a =
          !1 !== e.jsonp &&
          (Vt.test(e.url)
            ? "url"
            : "string" == typeof e.data &&
              0 ===
                (e.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) &&
              Vt.test(e.data) &&
              "data");
      if (a || "jsonp" === e.dataTypes[0])
        return (
          (r = e.jsonpCallback = m(e.jsonpCallback)
            ? e.jsonpCallback()
            : e.jsonpCallback),
          a
            ? (e[a] = e[a].replace(Vt, "$1" + r))
            : !1 !== e.jsonp &&
              (e.url += (Et.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
          (e.converters["script json"] = function () {
            return o || S.error(r + " was not called"), o[0];
          }),
          (e.dataTypes[0] = "json"),
          (i = C[r]),
          (C[r] = function () {
            o = arguments;
          }),
          n.always(function () {
            void 0 === i ? S(C).removeProp(r) : (C[r] = i),
              e[r] && ((e.jsonpCallback = t.jsonpCallback), Xt.push(r)),
              o && m(i) && i(o[0]),
              (o = i = void 0);
          }),
          "script"
        );
    }),
    (y.createHTMLDocument =
      (((Ut = E.implementation.createHTMLDocument("").body).innerHTML =
        "<form></form><form></form>"),
      2 === Ut.childNodes.length)),
    (S.parseHTML = function (e, t, n) {
      return "string" != typeof e
        ? []
        : ("boolean" == typeof t && ((n = t), (t = !1)),
          t ||
            (y.createHTMLDocument
              ? (((r = (t = E.implementation.createHTMLDocument(
                  ""
                )).createElement("base")).href = E.location.href),
                t.head.appendChild(r))
              : (t = E)),
          (o = !n && []),
          (i = N.exec(e))
            ? [t.createElement(i[1])]
            : ((i = xe([e], t, o)),
              o && o.length && S(o).remove(),
              S.merge([], i.childNodes)));
      var r, i, o;
    }),
    (S.fn.load = function (e, t, n) {
      var r,
        i,
        o,
        a = this,
        s = e.indexOf(" ");
      return (
        -1 < s && ((r = vt(e.slice(s))), (e = e.slice(0, s))),
        m(t)
          ? ((n = t), (t = void 0))
          : t && "object" == typeof t && (i = "POST"),
        0 < a.length &&
          S.ajax({ url: e, type: i || "GET", dataType: "html", data: t })
            .done(function (e) {
              (o = arguments),
                a.html(r ? S("<div>").append(S.parseHTML(e)).find(r) : e);
            })
            .always(
              n &&
                function (e, t) {
                  a.each(function () {
                    n.apply(this, o || [e.responseText, t, e]);
                  });
                }
            ),
        this
      );
    }),
    (S.expr.pseudos.animated = function (t) {
      return S.grep(S.timers, function (e) {
        return t === e.elem;
      }).length;
    }),
    (S.offset = {
      setOffset: function (e, t, n) {
        var r,
          i,
          o,
          a,
          s,
          u,
          l = S.css(e, "position"),
          c = S(e),
          f = {};
        "static" === l && (e.style.position = "relative"),
          (s = c.offset()),
          (o = S.css(e, "top")),
          (u = S.css(e, "left")),
          ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto")
            ? ((a = (r = c.position()).top), (i = r.left))
            : ((a = parseFloat(o) || 0), (i = parseFloat(u) || 0)),
          m(t) && (t = t.call(e, n, S.extend({}, s))),
          null != t.top && (f.top = t.top - s.top + a),
          null != t.left && (f.left = t.left - s.left + i),
          "using" in t
            ? t.using.call(e, f)
            : ("number" == typeof f.top && (f.top += "px"),
              "number" == typeof f.left && (f.left += "px"),
              c.css(f));
      },
    }),
    S.fn.extend({
      offset: function (t) {
        if (arguments.length)
          return void 0 === t
            ? this
            : this.each(function (e) {
                S.offset.setOffset(this, t, e);
              });
        var e,
          n,
          r = this[0];
        return r
          ? r.getClientRects().length
            ? ((e = r.getBoundingClientRect()),
              (n = r.ownerDocument.defaultView),
              { top: e.top + n.pageYOffset, left: e.left + n.pageXOffset })
            : { top: 0, left: 0 }
          : void 0;
      },
      position: function () {
        if (this[0]) {
          var e,
            t,
            n,
            r = this[0],
            i = { top: 0, left: 0 };
          if ("fixed" === S.css(r, "position")) t = r.getBoundingClientRect();
          else {
            (t = this.offset()),
              (n = r.ownerDocument),
              (e = r.offsetParent || n.documentElement);
            while (
              e &&
              (e === n.body || e === n.documentElement) &&
              "static" === S.css(e, "position")
            )
              e = e.parentNode;
            e &&
              e !== r &&
              1 === e.nodeType &&
              (((i = S(e).offset()).top += S.css(e, "borderTopWidth", !0)),
              (i.left += S.css(e, "borderLeftWidth", !0)));
          }
          return {
            top: t.top - i.top - S.css(r, "marginTop", !0),
            left: t.left - i.left - S.css(r, "marginLeft", !0),
          };
        }
      },
      offsetParent: function () {
        return this.map(function () {
          var e = this.offsetParent;
          while (e && "static" === S.css(e, "position")) e = e.offsetParent;
          return e || re;
        });
      },
    }),
    S.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (
      t,
      i
    ) {
      var o = "pageYOffset" === i;
      S.fn[t] = function (e) {
        return $(
          this,
          function (e, t, n) {
            var r;
            if (
              (x(e) ? (r = e) : 9 === e.nodeType && (r = e.defaultView),
              void 0 === n)
            )
              return r ? r[i] : e[t];
            r
              ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset)
              : (e[t] = n);
          },
          t,
          e,
          arguments.length
        );
      };
    }),
    S.each(["top", "left"], function (e, n) {
      S.cssHooks[n] = $e(y.pixelPosition, function (e, t) {
        if (t)
          return (t = Be(e, n)), Me.test(t) ? S(e).position()[n] + "px" : t;
      });
    }),
    S.each({ Height: "height", Width: "width" }, function (a, s) {
      S.each({ padding: "inner" + a, content: s, "": "outer" + a }, function (
        r,
        o
      ) {
        S.fn[o] = function (e, t) {
          var n = arguments.length && (r || "boolean" != typeof e),
            i = r || (!0 === e || !0 === t ? "margin" : "border");
          return $(
            this,
            function (e, t, n) {
              var r;
              return x(e)
                ? 0 === o.indexOf("outer")
                  ? e["inner" + a]
                  : e.document.documentElement["client" + a]
                : 9 === e.nodeType
                ? ((r = e.documentElement),
                  Math.max(
                    e.body["scroll" + a],
                    r["scroll" + a],
                    e.body["offset" + a],
                    r["offset" + a],
                    r["client" + a]
                  ))
                : void 0 === n
                ? S.css(e, t, i)
                : S.style(e, t, n, i);
            },
            s,
            n ? e : void 0,
            n
          );
        };
      });
    }),
    S.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend",
      ],
      function (e, t) {
        S.fn[t] = function (e) {
          return this.on(t, e);
        };
      }
    ),
    S.fn.extend({
      bind: function (e, t, n) {
        return this.on(e, null, t, n);
      },
      unbind: function (e, t) {
        return this.off(e, null, t);
      },
      delegate: function (e, t, n, r) {
        return this.on(t, e, n, r);
      },
      undelegate: function (e, t, n) {
        return 1 === arguments.length
          ? this.off(e, "**")
          : this.off(t, e || "**", n);
      },
      hover: function (e, t) {
        return this.mouseenter(e).mouseleave(t || e);
      },
    }),
    S.each(
      "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
        " "
      ),
      function (e, n) {
        S.fn[n] = function (e, t) {
          return 0 < arguments.length
            ? this.on(n, null, e, t)
            : this.trigger(n);
        };
      }
    );
  var Gt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
  (S.proxy = function (e, t) {
    var n, r, i;
    if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), m(e)))
      return (
        (r = s.call(arguments, 2)),
        ((i = function () {
          return e.apply(t || this, r.concat(s.call(arguments)));
        }).guid = e.guid = e.guid || S.guid++),
        i
      );
  }),
    (S.holdReady = function (e) {
      e ? S.readyWait++ : S.ready(!0);
    }),
    (S.isArray = Array.isArray),
    (S.parseJSON = JSON.parse),
    (S.nodeName = A),
    (S.isFunction = m),
    (S.isWindow = x),
    (S.camelCase = X),
    (S.type = w),
    (S.now = Date.now),
    (S.isNumeric = function (e) {
      var t = S.type(e);
      return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
    }),
    (S.trim = function (e) {
      return null == e ? "" : (e + "").replace(Gt, "");
    }),
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function () {
        return S;
      });
  var Yt = C.jQuery,
    Qt = C.$;
  return (
    (S.noConflict = function (e) {
      return C.$ === S && (C.$ = Qt), e && C.jQuery === S && (C.jQuery = Yt), S;
    }),
    "undefined" == typeof e && (C.jQuery = C.$ = S),
    S
  );
});

!(function (i) {
  "use strict";
  "function" == typeof define && define.amd
    ? define(["jquery"], i)
    : "undefined" != typeof exports
    ? (module.exports = i(require("jquery")))
    : i(jQuery);
})(function (i) {
  "use strict";
  var e = window.Slick || {};
  ((e = (function () {
    var e = 0;
    return function (t, o) {
      var s,
        n = this;
      (n.defaults = {
        accessibility: !0,
        adaptiveHeight: !1,
        appendArrows: i(t),
        appendDots: i(t),
        arrows: !0,
        asNavFor: null,
        prevArrow:
          '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
        nextArrow:
          '<button class="slick-next" aria-label="Next" type="button">Next</button>',
        autoplay: !1,
        autoplaySpeed: 3e3,
        centerMode: !1,
        centerPadding: "50px",
        cssEase: "ease",
        customPaging: function (e, t) {
          return i('<button type="button" />').text(t + 1);
        },
        dots: !1,
        dotsClass: "slick-dots",
        draggable: !0,
        easing: "linear",
        edgeFriction: 0.35,
        fade: !1,
        focusOnSelect: !1,
        focusOnChange: !1,
        infinite: !0,
        initialSlide: 0,
        lazyLoad: "ondemand",
        mobileFirst: !1,
        pauseOnHover: !0,
        pauseOnFocus: !0,
        pauseOnDotsHover: !1,
        respondTo: "window",
        responsive: null,
        rows: 1,
        rtl: !1,
        slide: "",
        slidesPerRow: 1,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        swipe: !0,
        swipeToSlide: !1,
        touchMove: !0,
        touchThreshold: 5,
        useCSS: !0,
        useTransform: !0,
        variableWidth: !1,
        vertical: !1,
        verticalSwiping: !1,
        waitForAnimate: !0,
        zIndex: 1e3,
      }),
        (n.initials = {
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
          scrolling: !1,
          slideCount: null,
          slideWidth: null,
          $slideTrack: null,
          $slides: null,
          sliding: !1,
          slideOffset: 0,
          swipeLeft: null,
          swiping: !1,
          $list: null,
          touchObject: {},
          transformsEnabled: !1,
          unslicked: !1,
        }),
        i.extend(n, n.initials),
        (n.activeBreakpoint = null),
        (n.animType = null),
        (n.animProp = null),
        (n.breakpoints = []),
        (n.breakpointSettings = []),
        (n.cssTransitions = !1),
        (n.focussed = !1),
        (n.interrupted = !1),
        (n.hidden = "hidden"),
        (n.paused = !0),
        (n.positionProp = null),
        (n.respondTo = null),
        (n.rowCount = 1),
        (n.shouldClick = !0),
        (n.$slider = i(t)),
        (n.$slidesCache = null),
        (n.transformType = null),
        (n.transitionType = null),
        (n.visibilityChange = "visibilitychange"),
        (n.windowWidth = 0),
        (n.windowTimer = null),
        (s = i(t).data("slick") || {}),
        (n.options = i.extend({}, n.defaults, o, s)),
        (n.currentSlide = n.options.initialSlide),
        (n.originalSettings = n.options),
        void 0 !== document.mozHidden
          ? ((n.hidden = "mozHidden"),
            (n.visibilityChange = "mozvisibilitychange"))
          : void 0 !== document.webkitHidden &&
            ((n.hidden = "webkitHidden"),
            (n.visibilityChange = "webkitvisibilitychange")),
        (n.autoPlay = i.proxy(n.autoPlay, n)),
        (n.autoPlayClear = i.proxy(n.autoPlayClear, n)),
        (n.autoPlayIterator = i.proxy(n.autoPlayIterator, n)),
        (n.changeSlide = i.proxy(n.changeSlide, n)),
        (n.clickHandler = i.proxy(n.clickHandler, n)),
        (n.selectHandler = i.proxy(n.selectHandler, n)),
        (n.setPosition = i.proxy(n.setPosition, n)),
        (n.swipeHandler = i.proxy(n.swipeHandler, n)),
        (n.dragHandler = i.proxy(n.dragHandler, n)),
        (n.keyHandler = i.proxy(n.keyHandler, n)),
        (n.instanceUid = e++),
        (n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/),
        n.registerBreakpoints(),
        n.init(!0);
    };
  })()).prototype.activateADA = function () {
    this.$slideTrack
      .find(".slick-active")
      .attr({ "aria-hidden": "false" })
      .find("a, input, button, select")
      .attr({ tabindex: "0" });
  }),
    (e.prototype.addSlide = e.prototype.slickAdd = function (e, t, o) {
      var s = this;
      if ("boolean" == typeof t) (o = t), (t = null);
      else if (t < 0 || t >= s.slideCount) return !1;
      s.unload(),
        "number" == typeof t
          ? 0 === t && 0 === s.$slides.length
            ? i(e).appendTo(s.$slideTrack)
            : o
            ? i(e).insertBefore(s.$slides.eq(t))
            : i(e).insertAfter(s.$slides.eq(t))
          : !0 === o
          ? i(e).prependTo(s.$slideTrack)
          : i(e).appendTo(s.$slideTrack),
        (s.$slides = s.$slideTrack.children(this.options.slide)),
        s.$slideTrack.children(this.options.slide).detach(),
        s.$slideTrack.append(s.$slides),
        s.$slides.each(function (e, t) {
          i(t).attr("data-slick-index", e);
        }),
        (s.$slidesCache = s.$slides),
        s.reinit();
    }),
    (e.prototype.animateHeight = function () {
      var i = this;
      if (
        1 === i.options.slidesToShow &&
        !0 === i.options.adaptiveHeight &&
        !1 === i.options.vertical
      ) {
        var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
        i.$list.animate({ height: e }, i.options.speed);
      }
    }),
    (e.prototype.animateSlide = function (e, t) {
      var o = {},
        s = this;
      s.animateHeight(),
        !0 === s.options.rtl && !1 === s.options.vertical && (e = -e),
        !1 === s.transformsEnabled
          ? !1 === s.options.vertical
            ? s.$slideTrack.animate(
                { left: e },
                s.options.speed,
                s.options.easing,
                t
              )
            : s.$slideTrack.animate(
                { top: e },
                s.options.speed,
                s.options.easing,
                t
              )
          : !1 === s.cssTransitions
          ? (!0 === s.options.rtl && (s.currentLeft = -s.currentLeft),
            i({ animStart: s.currentLeft }).animate(
              { animStart: e },
              {
                duration: s.options.speed,
                easing: s.options.easing,
                step: function (i) {
                  (i = Math.ceil(i)),
                    !1 === s.options.vertical
                      ? ((o[s.animType] = "translate(" + i + "px, 0px)"),
                        s.$slideTrack.css(o))
                      : ((o[s.animType] = "translate(0px," + i + "px)"),
                        s.$slideTrack.css(o));
                },
                complete: function () {
                  t && t.call();
                },
              }
            ))
          : (s.applyTransition(),
            (e = Math.ceil(e)),
            !1 === s.options.vertical
              ? (o[s.animType] = "translate3d(" + e + "px, 0px, 0px)")
              : (o[s.animType] = "translate3d(0px," + e + "px, 0px)"),
            s.$slideTrack.css(o),
            t &&
              setTimeout(function () {
                s.disableTransition(), t.call();
              }, s.options.speed));
    }),
    (e.prototype.getNavTarget = function () {
      var e = this,
        t = e.options.asNavFor;
      return t && null !== t && (t = i(t).not(e.$slider)), t;
    }),
    (e.prototype.asNavFor = function (e) {
      var t = this.getNavTarget();
      null !== t &&
        "object" == typeof t &&
        t.each(function () {
          var t = i(this).slick("getSlick");
          t.unslicked || t.slideHandler(e, !0);
        });
    }),
    (e.prototype.applyTransition = function (i) {
      var e = this,
        t = {};
      !1 === e.options.fade
        ? (t[e.transitionType] =
            e.transformType + " " + e.options.speed + "ms " + e.options.cssEase)
        : (t[e.transitionType] =
            "opacity " + e.options.speed + "ms " + e.options.cssEase),
        !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t);
    }),
    (e.prototype.autoPlay = function () {
      var i = this;
      i.autoPlayClear(),
        i.slideCount > i.options.slidesToShow &&
          (i.autoPlayTimer = setInterval(
            i.autoPlayIterator,
            i.options.autoplaySpeed
          ));
    }),
    (e.prototype.autoPlayClear = function () {
      var i = this;
      i.autoPlayTimer && clearInterval(i.autoPlayTimer);
    }),
    (e.prototype.autoPlayIterator = function () {
      var i = this,
        e = i.currentSlide + i.options.slidesToScroll;
      i.paused ||
        i.interrupted ||
        i.focussed ||
        (!1 === i.options.infinite &&
          (1 === i.direction && i.currentSlide + 1 === i.slideCount - 1
            ? (i.direction = 0)
            : 0 === i.direction &&
              ((e = i.currentSlide - i.options.slidesToScroll),
              i.currentSlide - 1 == 0 && (i.direction = 1))),
        i.slideHandler(e));
    }),
    (e.prototype.buildArrows = function () {
      var e = this;
      !0 === e.options.arrows &&
        ((e.$prevArrow = i(e.options.prevArrow).addClass("slick-arrow")),
        (e.$nextArrow = i(e.options.nextArrow).addClass("slick-arrow")),
        e.slideCount > e.options.slidesToShow
          ? (e.$prevArrow
              .removeClass("slick-hidden")
              .removeAttr("aria-hidden tabindex"),
            e.$nextArrow
              .removeClass("slick-hidden")
              .removeAttr("aria-hidden tabindex"),
            e.htmlExpr.test(e.options.prevArrow) &&
              e.$prevArrow.prependTo(e.options.appendArrows),
            e.htmlExpr.test(e.options.nextArrow) &&
              e.$nextArrow.appendTo(e.options.appendArrows),
            !0 !== e.options.infinite &&
              e.$prevArrow
                .addClass("slick-disabled")
                .attr("aria-disabled", "true"))
          : e.$prevArrow
              .add(e.$nextArrow)
              .addClass("slick-hidden")
              .attr({ "aria-disabled": "true", tabindex: "-1" }));
    }),
    (e.prototype.buildDots = function () {
      var e,
        t,
        o = this;
      if (!0 === o.options.dots) {
        for (
          o.$slider.addClass("slick-dotted"),
            t = i("<ul />").addClass(o.options.dotsClass),
            e = 0;
          e <= o.getDotCount();
          e += 1
        )
          t.append(i("<li />").append(o.options.customPaging.call(this, o, e)));
        (o.$dots = t.appendTo(o.options.appendDots)),
          o.$dots.find("li").first().addClass("slick-active");
      }
    }),
    (e.prototype.buildOut = function () {
      var e = this;
      (e.$slides = e.$slider
        .children(e.options.slide + ":not(.slick-cloned)")
        .addClass("slick-slide")),
        (e.slideCount = e.$slides.length),
        e.$slides.each(function (e, t) {
          i(t)
            .attr("data-slick-index", e)
            .data("originalStyling", i(t).attr("style") || "");
        }),
        e.$slider.addClass("slick-slider"),
        (e.$slideTrack =
          0 === e.slideCount
            ? i('<div class="slick-track"/>').appendTo(e.$slider)
            : e.$slides.wrapAll('<div class="slick-track"/>').parent()),
        (e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent()),
        e.$slideTrack.css("opacity", 0),
        (!0 !== e.options.centerMode && !0 !== e.options.swipeToSlide) ||
          (e.options.slidesToScroll = 1),
        i("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"),
        e.setupInfinite(),
        e.buildArrows(),
        e.buildDots(),
        e.updateDots(),
        e.setSlideClasses(
          "number" == typeof e.currentSlide ? e.currentSlide : 0
        ),
        !0 === e.options.draggable && e.$list.addClass("draggable");
    }),
    (e.prototype.buildRows = function () {
      var i,
        e,
        t,
        o,
        s,
        n,
        r,
        l = this;
      if (
        ((o = document.createDocumentFragment()),
        (n = l.$slider.children()),
        l.options.rows > 1)
      ) {
        for (
          r = l.options.slidesPerRow * l.options.rows,
            s = Math.ceil(n.length / r),
            i = 0;
          i < s;
          i++
        ) {
          var d = document.createElement("div");
          for (e = 0; e < l.options.rows; e++) {
            var a = document.createElement("div");
            for (t = 0; t < l.options.slidesPerRow; t++) {
              var c = i * r + (e * l.options.slidesPerRow + t);
              n.get(c) && a.appendChild(n.get(c));
            }
            d.appendChild(a);
          }
          o.appendChild(d);
        }
        l.$slider.empty().append(o),
          l.$slider
            .children()
            .children()
            .children()
            .css({
              width: 100 / l.options.slidesPerRow + "%",
              display: "inline-block",
            });
      }
    }),
    (e.prototype.checkResponsive = function (e, t) {
      var o,
        s,
        n,
        r = this,
        l = !1,
        d = r.$slider.width(),
        a = window.innerWidth || i(window).width();
      if (
        ("window" === r.respondTo
          ? (n = a)
          : "slider" === r.respondTo
          ? (n = d)
          : "min" === r.respondTo && (n = Math.min(a, d)),
        r.options.responsive &&
          r.options.responsive.length &&
          null !== r.options.responsive)
      ) {
        s = null;
        for (o in r.breakpoints)
          r.breakpoints.hasOwnProperty(o) &&
            (!1 === r.originalSettings.mobileFirst
              ? n < r.breakpoints[o] && (s = r.breakpoints[o])
              : n > r.breakpoints[o] && (s = r.breakpoints[o]));
        null !== s
          ? null !== r.activeBreakpoint
            ? (s !== r.activeBreakpoint || t) &&
              ((r.activeBreakpoint = s),
              "unslick" === r.breakpointSettings[s]
                ? r.unslick(s)
                : ((r.options = i.extend(
                    {},
                    r.originalSettings,
                    r.breakpointSettings[s]
                  )),
                  !0 === e && (r.currentSlide = r.options.initialSlide),
                  r.refresh(e)),
              (l = s))
            : ((r.activeBreakpoint = s),
              "unslick" === r.breakpointSettings[s]
                ? r.unslick(s)
                : ((r.options = i.extend(
                    {},
                    r.originalSettings,
                    r.breakpointSettings[s]
                  )),
                  !0 === e && (r.currentSlide = r.options.initialSlide),
                  r.refresh(e)),
              (l = s))
          : null !== r.activeBreakpoint &&
            ((r.activeBreakpoint = null),
            (r.options = r.originalSettings),
            !0 === e && (r.currentSlide = r.options.initialSlide),
            r.refresh(e),
            (l = s)),
          e || !1 === l || r.$slider.trigger("breakpoint", [r, l]);
      }
    }),
    (e.prototype.changeSlide = function (e, t) {
      var o,
        s,
        n,
        r = this,
        l = i(e.currentTarget);
      switch (
        (l.is("a") && e.preventDefault(),
        l.is("li") || (l = l.closest("li")),
        (n = r.slideCount % r.options.slidesToScroll != 0),
        (o = n
          ? 0
          : (r.slideCount - r.currentSlide) % r.options.slidesToScroll),
        e.data.message)
      ) {
        case "previous":
          (s = 0 === o ? r.options.slidesToScroll : r.options.slidesToShow - o),
            r.slideCount > r.options.slidesToShow &&
              r.slideHandler(r.currentSlide - s, !1, t);
          break;
        case "next":
          (s = 0 === o ? r.options.slidesToScroll : o),
            r.slideCount > r.options.slidesToShow &&
              r.slideHandler(r.currentSlide + s, !1, t);
          break;
        case "index":
          var d =
            0 === e.data.index
              ? 0
              : e.data.index || l.index() * r.options.slidesToScroll;
          r.slideHandler(r.checkNavigable(d), !1, t),
            l.children().trigger("focus");
          break;
        default:
          return;
      }
    }),
    (e.prototype.checkNavigable = function (i) {
      var e, t;
      if (((e = this.getNavigableIndexes()), (t = 0), i > e[e.length - 1]))
        i = e[e.length - 1];
      else
        for (var o in e) {
          if (i < e[o]) {
            i = t;
            break;
          }
          t = e[o];
        }
      return i;
    }),
    (e.prototype.cleanUpEvents = function () {
      var e = this;
      e.options.dots &&
        null !== e.$dots &&
        (i("li", e.$dots)
          .off("click.slick", e.changeSlide)
          .off("mouseenter.slick", i.proxy(e.interrupt, e, !0))
          .off("mouseleave.slick", i.proxy(e.interrupt, e, !1)),
        !0 === e.options.accessibility &&
          e.$dots.off("keydown.slick", e.keyHandler)),
        e.$slider.off("focus.slick blur.slick"),
        !0 === e.options.arrows &&
          e.slideCount > e.options.slidesToShow &&
          (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide),
          e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide),
          !0 === e.options.accessibility &&
            (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler),
            e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))),
        e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler),
        e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler),
        e.$list.off("touchend.slick mouseup.slick", e.swipeHandler),
        e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler),
        e.$list.off("click.slick", e.clickHandler),
        i(document).off(e.visibilityChange, e.visibility),
        e.cleanUpSlideEvents(),
        !0 === e.options.accessibility &&
          e.$list.off("keydown.slick", e.keyHandler),
        !0 === e.options.focusOnSelect &&
          i(e.$slideTrack).children().off("click.slick", e.selectHandler),
        i(window).off(
          "orientationchange.slick.slick-" + e.instanceUid,
          e.orientationChange
        ),
        i(window).off("resize.slick.slick-" + e.instanceUid, e.resize),
        i("[draggable!=true]", e.$slideTrack).off(
          "dragstart",
          e.preventDefault
        ),
        i(window).off("load.slick.slick-" + e.instanceUid, e.setPosition);
    }),
    (e.prototype.cleanUpSlideEvents = function () {
      var e = this;
      e.$list.off("mouseenter.slick", i.proxy(e.interrupt, e, !0)),
        e.$list.off("mouseleave.slick", i.proxy(e.interrupt, e, !1));
    }),
    (e.prototype.cleanUpRows = function () {
      var i,
        e = this;
      e.options.rows > 1 &&
        ((i = e.$slides.children().children()).removeAttr("style"),
        e.$slider.empty().append(i));
    }),
    (e.prototype.clickHandler = function (i) {
      !1 === this.shouldClick &&
        (i.stopImmediatePropagation(), i.stopPropagation(), i.preventDefault());
    }),
    (e.prototype.destroy = function (e) {
      var t = this;
      t.autoPlayClear(),
        (t.touchObject = {}),
        t.cleanUpEvents(),
        i(".slick-cloned", t.$slider).detach(),
        t.$dots && t.$dots.remove(),
        t.$prevArrow &&
          t.$prevArrow.length &&
          (t.$prevArrow
            .removeClass("slick-disabled slick-arrow slick-hidden")
            .removeAttr("aria-hidden aria-disabled tabindex")
            .css("display", ""),
          t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove()),
        t.$nextArrow &&
          t.$nextArrow.length &&
          (t.$nextArrow
            .removeClass("slick-disabled slick-arrow slick-hidden")
            .removeAttr("aria-hidden aria-disabled tabindex")
            .css("display", ""),
          t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove()),
        t.$slides &&
          (t.$slides
            .removeClass(
              "slick-slide slick-active slick-center slick-visible slick-current"
            )
            .removeAttr("aria-hidden")
            .removeAttr("data-slick-index")
            .each(function () {
              i(this).attr("style", i(this).data("originalStyling"));
            }),
          t.$slideTrack.children(this.options.slide).detach(),
          t.$slideTrack.detach(),
          t.$list.detach(),
          t.$slider.append(t.$slides)),
        t.cleanUpRows(),
        t.$slider.removeClass("slick-slider"),
        t.$slider.removeClass("slick-initialized"),
        t.$slider.removeClass("slick-dotted"),
        (t.unslicked = !0),
        e || t.$slider.trigger("destroy", [t]);
    }),
    (e.prototype.disableTransition = function (i) {
      var e = this,
        t = {};
      (t[e.transitionType] = ""),
        !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t);
    }),
    (e.prototype.fadeSlide = function (i, e) {
      var t = this;
      !1 === t.cssTransitions
        ? (t.$slides.eq(i).css({ zIndex: t.options.zIndex }),
          t.$slides
            .eq(i)
            .animate({ opacity: 1 }, t.options.speed, t.options.easing, e))
        : (t.applyTransition(i),
          t.$slides.eq(i).css({ opacity: 1, zIndex: t.options.zIndex }),
          e &&
            setTimeout(function () {
              t.disableTransition(i), e.call();
            }, t.options.speed));
    }),
    (e.prototype.fadeSlideOut = function (i) {
      var e = this;
      !1 === e.cssTransitions
        ? e.$slides
            .eq(i)
            .animate(
              { opacity: 0, zIndex: e.options.zIndex - 2 },
              e.options.speed,
              e.options.easing
            )
        : (e.applyTransition(i),
          e.$slides.eq(i).css({ opacity: 0, zIndex: e.options.zIndex - 2 }));
    }),
    (e.prototype.filterSlides = e.prototype.slickFilter = function (i) {
      var e = this;
      null !== i &&
        ((e.$slidesCache = e.$slides),
        e.unload(),
        e.$slideTrack.children(this.options.slide).detach(),
        e.$slidesCache.filter(i).appendTo(e.$slideTrack),
        e.reinit());
    }),
    (e.prototype.focusHandler = function () {
      var e = this;
      e.$slider
        .off("focus.slick blur.slick")
        .on("focus.slick blur.slick", "*", function (t) {
          t.stopImmediatePropagation();
          var o = i(this);
          setTimeout(function () {
            e.options.pauseOnFocus &&
              ((e.focussed = o.is(":focus")), e.autoPlay());
          }, 0);
        });
    }),
    (e.prototype.getCurrent = e.prototype.slickCurrentSlide = function () {
      return this.currentSlide;
    }),
    (e.prototype.getDotCount = function () {
      var i = this,
        e = 0,
        t = 0,
        o = 0;
      if (!0 === i.options.infinite)
        if (i.slideCount <= i.options.slidesToShow) ++o;
        else
          for (; e < i.slideCount; )
            ++o,
              (e = t + i.options.slidesToScroll),
              (t +=
                i.options.slidesToScroll <= i.options.slidesToShow
                  ? i.options.slidesToScroll
                  : i.options.slidesToShow);
      else if (!0 === i.options.centerMode) o = i.slideCount;
      else if (i.options.asNavFor)
        for (; e < i.slideCount; )
          ++o,
            (e = t + i.options.slidesToScroll),
            (t +=
              i.options.slidesToScroll <= i.options.slidesToShow
                ? i.options.slidesToScroll
                : i.options.slidesToShow);
      else
        o =
          1 +
          Math.ceil(
            (i.slideCount - i.options.slidesToShow) / i.options.slidesToScroll
          );
      return o - 1;
    }),
    (e.prototype.getLeft = function (i) {
      var e,
        t,
        o,
        s,
        n = this,
        r = 0;
      return (
        (n.slideOffset = 0),
        (t = n.$slides.first().outerHeight(!0)),
        !0 === n.options.infinite
          ? (n.slideCount > n.options.slidesToShow &&
              ((n.slideOffset = n.slideWidth * n.options.slidesToShow * -1),
              (s = -1),
              !0 === n.options.vertical &&
                !0 === n.options.centerMode &&
                (2 === n.options.slidesToShow
                  ? (s = -1.5)
                  : 1 === n.options.slidesToShow && (s = -2)),
              (r = t * n.options.slidesToShow * s)),
            n.slideCount % n.options.slidesToScroll != 0 &&
              i + n.options.slidesToScroll > n.slideCount &&
              n.slideCount > n.options.slidesToShow &&
              (i > n.slideCount
                ? ((n.slideOffset =
                    (n.options.slidesToShow - (i - n.slideCount)) *
                    n.slideWidth *
                    -1),
                  (r = (n.options.slidesToShow - (i - n.slideCount)) * t * -1))
                : ((n.slideOffset =
                    (n.slideCount % n.options.slidesToScroll) *
                    n.slideWidth *
                    -1),
                  (r = (n.slideCount % n.options.slidesToScroll) * t * -1))))
          : i + n.options.slidesToShow > n.slideCount &&
            ((n.slideOffset =
              (i + n.options.slidesToShow - n.slideCount) * n.slideWidth),
            (r = (i + n.options.slidesToShow - n.slideCount) * t)),
        n.slideCount <= n.options.slidesToShow &&
          ((n.slideOffset = 0), (r = 0)),
        !0 === n.options.centerMode && n.slideCount <= n.options.slidesToShow
          ? (n.slideOffset =
              (n.slideWidth * Math.floor(n.options.slidesToShow)) / 2 -
              (n.slideWidth * n.slideCount) / 2)
          : !0 === n.options.centerMode && !0 === n.options.infinite
          ? (n.slideOffset +=
              n.slideWidth * Math.floor(n.options.slidesToShow / 2) -
              n.slideWidth)
          : !0 === n.options.centerMode &&
            ((n.slideOffset = 0),
            (n.slideOffset +=
              n.slideWidth * Math.floor(n.options.slidesToShow / 2))),
        (e =
          !1 === n.options.vertical
            ? i * n.slideWidth * -1 + n.slideOffset
            : i * t * -1 + r),
        !0 === n.options.variableWidth &&
          ((o =
            n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite
              ? n.$slideTrack.children(".slick-slide").eq(i)
              : n.$slideTrack
                  .children(".slick-slide")
                  .eq(i + n.options.slidesToShow)),
          (e =
            !0 === n.options.rtl
              ? o[0]
                ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width())
                : 0
              : o[0]
              ? -1 * o[0].offsetLeft
              : 0),
          !0 === n.options.centerMode &&
            ((o =
              n.slideCount <= n.options.slidesToShow ||
              !1 === n.options.infinite
                ? n.$slideTrack.children(".slick-slide").eq(i)
                : n.$slideTrack
                    .children(".slick-slide")
                    .eq(i + n.options.slidesToShow + 1)),
            (e =
              !0 === n.options.rtl
                ? o[0]
                  ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width())
                  : 0
                : o[0]
                ? -1 * o[0].offsetLeft
                : 0),
            (e += (n.$list.width() - o.outerWidth()) / 2))),
        e
      );
    }),
    (e.prototype.getOption = e.prototype.slickGetOption = function (i) {
      return this.options[i];
    }),
    (e.prototype.getNavigableIndexes = function () {
      var i,
        e = this,
        t = 0,
        o = 0,
        s = [];
      for (
        !1 === e.options.infinite
          ? (i = e.slideCount)
          : ((t = -1 * e.options.slidesToScroll),
            (o = -1 * e.options.slidesToScroll),
            (i = 2 * e.slideCount));
        t < i;

      )
        s.push(t),
          (t = o + e.options.slidesToScroll),
          (o +=
            e.options.slidesToScroll <= e.options.slidesToShow
              ? e.options.slidesToScroll
              : e.options.slidesToShow);
      return s;
    }),
    (e.prototype.getSlick = function () {
      return this;
    }),
    (e.prototype.getSlideCount = function () {
      var e,
        t,
        o = this;
      return (
        (t =
          !0 === o.options.centerMode
            ? o.slideWidth * Math.floor(o.options.slidesToShow / 2)
            : 0),
        !0 === o.options.swipeToSlide
          ? (o.$slideTrack.find(".slick-slide").each(function (s, n) {
              if (n.offsetLeft - t + i(n).outerWidth() / 2 > -1 * o.swipeLeft)
                return (e = n), !1;
            }),
            Math.abs(i(e).attr("data-slick-index") - o.currentSlide) || 1)
          : o.options.slidesToScroll
      );
    }),
    (e.prototype.goTo = e.prototype.slickGoTo = function (i, e) {
      this.changeSlide({ data: { message: "index", index: parseInt(i) } }, e);
    }),
    (e.prototype.init = function (e) {
      var t = this;
      i(t.$slider).hasClass("slick-initialized") ||
        (i(t.$slider).addClass("slick-initialized"),
        t.buildRows(),
        t.buildOut(),
        t.setProps(),
        t.startLoad(),
        t.loadSlider(),
        t.initializeEvents(),
        t.updateArrows(),
        t.updateDots(),
        t.checkResponsive(!0),
        t.focusHandler()),
        e && t.$slider.trigger("init", [t]),
        !0 === t.options.accessibility && t.initADA(),
        t.options.autoplay && ((t.paused = !1), t.autoPlay());
    }),
    (e.prototype.initADA = function () {
      var e = this,
        t = Math.ceil(e.slideCount / e.options.slidesToShow),
        o = e.getNavigableIndexes().filter(function (i) {
          return i >= 0 && i < e.slideCount;
        });
      e.$slides
        .add(e.$slideTrack.find(".slick-cloned"))
        .attr({ "aria-hidden": "true", tabindex: "-1" })
        .find("a, input, button, select")
        .attr({ tabindex: "-1" }),
        null !== e.$dots &&
          (e.$slides
            .not(e.$slideTrack.find(".slick-cloned"))
            .each(function (t) {
              var s = o.indexOf(t);
              i(this).attr({
                role: "tabpanel",
                id: "slick-slide" + e.instanceUid + t,
                tabindex: -1,
              }),
                -1 !== s &&
                  i(this).attr({
                    "aria-describedby":
                      "slick-slide-control" + e.instanceUid + s,
                  });
            }),
          e.$dots
            .attr("role", "tablist")
            .find("li")
            .each(function (s) {
              var n = o[s];
              i(this).attr({ role: "presentation" }),
                i(this)
                  .find("button")
                  .first()
                  .attr({
                    role: "tab",
                    id: "slick-slide-control" + e.instanceUid + s,
                    "aria-controls": "slick-slide" + e.instanceUid + n,
                    "aria-label": s + 1 + " of " + t,
                    "aria-selected": null,
                    tabindex: "-1",
                  });
            })
            .eq(e.currentSlide)
            .find("button")
            .attr({ "aria-selected": "true", tabindex: "0" })
            .end());
      for (var s = e.currentSlide, n = s + e.options.slidesToShow; s < n; s++)
        e.$slides.eq(s).attr("tabindex", 0);
      e.activateADA();
    }),
    (e.prototype.initArrowEvents = function () {
      var i = this;
      !0 === i.options.arrows &&
        i.slideCount > i.options.slidesToShow &&
        (i.$prevArrow
          .off("click.slick")
          .on("click.slick", { message: "previous" }, i.changeSlide),
        i.$nextArrow
          .off("click.slick")
          .on("click.slick", { message: "next" }, i.changeSlide),
        !0 === i.options.accessibility &&
          (i.$prevArrow.on("keydown.slick", i.keyHandler),
          i.$nextArrow.on("keydown.slick", i.keyHandler)));
    }),
    (e.prototype.initDotEvents = function () {
      var e = this;
      !0 === e.options.dots &&
        (i("li", e.$dots).on(
          "click.slick",
          { message: "index" },
          e.changeSlide
        ),
        !0 === e.options.accessibility &&
          e.$dots.on("keydown.slick", e.keyHandler)),
        !0 === e.options.dots &&
          !0 === e.options.pauseOnDotsHover &&
          i("li", e.$dots)
            .on("mouseenter.slick", i.proxy(e.interrupt, e, !0))
            .on("mouseleave.slick", i.proxy(e.interrupt, e, !1));
    }),
    (e.prototype.initSlideEvents = function () {
      var e = this;
      e.options.pauseOnHover &&
        (e.$list.on("mouseenter.slick", i.proxy(e.interrupt, e, !0)),
        e.$list.on("mouseleave.slick", i.proxy(e.interrupt, e, !1)));
    }),
    (e.prototype.initializeEvents = function () {
      var e = this;
      e.initArrowEvents(),
        e.initDotEvents(),
        e.initSlideEvents(),
        e.$list.on(
          "touchstart.slick mousedown.slick",
          { action: "start" },
          e.swipeHandler
        ),
        e.$list.on(
          "touchmove.slick mousemove.slick",
          { action: "move" },
          e.swipeHandler
        ),
        e.$list.on(
          "touchend.slick mouseup.slick",
          { action: "end" },
          e.swipeHandler
        ),
        e.$list.on(
          "touchcancel.slick mouseleave.slick",
          { action: "end" },
          e.swipeHandler
        ),
        e.$list.on("click.slick", e.clickHandler),
        i(document).on(e.visibilityChange, i.proxy(e.visibility, e)),
        !0 === e.options.accessibility &&
          e.$list.on("keydown.slick", e.keyHandler),
        !0 === e.options.focusOnSelect &&
          i(e.$slideTrack).children().on("click.slick", e.selectHandler),
        i(window).on(
          "orientationchange.slick.slick-" + e.instanceUid,
          i.proxy(e.orientationChange, e)
        ),
        i(window).on(
          "resize.slick.slick-" + e.instanceUid,
          i.proxy(e.resize, e)
        ),
        i("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault),
        i(window).on("load.slick.slick-" + e.instanceUid, e.setPosition),
        i(e.setPosition);
    }),
    (e.prototype.initUI = function () {
      var i = this;
      !0 === i.options.arrows &&
        i.slideCount > i.options.slidesToShow &&
        (i.$prevArrow.show(), i.$nextArrow.show()),
        !0 === i.options.dots &&
          i.slideCount > i.options.slidesToShow &&
          i.$dots.show();
    }),
    (e.prototype.keyHandler = function (i) {
      var e = this;
      i.target.tagName.match("TEXTAREA|INPUT|SELECT") ||
        (37 === i.keyCode && !0 === e.options.accessibility
          ? e.changeSlide({
              data: { message: !0 === e.options.rtl ? "next" : "previous" },
            })
          : 39 === i.keyCode &&
            !0 === e.options.accessibility &&
            e.changeSlide({
              data: { message: !0 === e.options.rtl ? "previous" : "next" },
            }));
    }),
    (e.prototype.lazyLoad = function () {
      function e(e) {
        i("img[data-lazy]", e).each(function () {
          var e = i(this),
            t = i(this).attr("data-lazy"),
            o = i(this).attr("data-srcset"),
            s = i(this).attr("data-sizes") || n.$slider.attr("data-sizes"),
            r = document.createElement("img");
          (r.onload = function () {
            e.animate({ opacity: 0 }, 100, function () {
              o && (e.attr("srcset", o), s && e.attr("sizes", s)),
                e.attr("src", t).animate({ opacity: 1 }, 200, function () {
                  e.removeAttr("data-lazy data-srcset data-sizes").removeClass(
                    "slick-loading"
                  );
                }),
                n.$slider.trigger("lazyLoaded", [n, e, t]);
            });
          }),
            (r.onerror = function () {
              e
                .removeAttr("data-lazy")
                .removeClass("slick-loading")
                .addClass("slick-lazyload-error"),
                n.$slider.trigger("lazyLoadError", [n, e, t]);
            }),
            (r.src = t);
        });
      }
      var t,
        o,
        s,
        n = this;
      if (
        (!0 === n.options.centerMode
          ? !0 === n.options.infinite
            ? (s =
                (o = n.currentSlide + (n.options.slidesToShow / 2 + 1)) +
                n.options.slidesToShow +
                2)
            : ((o = Math.max(
                0,
                n.currentSlide - (n.options.slidesToShow / 2 + 1)
              )),
              (s = n.options.slidesToShow / 2 + 1 + 2 + n.currentSlide))
          : ((o = n.options.infinite
              ? n.options.slidesToShow + n.currentSlide
              : n.currentSlide),
            (s = Math.ceil(o + n.options.slidesToShow)),
            !0 === n.options.fade && (o > 0 && o--, s <= n.slideCount && s++)),
        (t = n.$slider.find(".slick-slide").slice(o, s)),
        "anticipated" === n.options.lazyLoad)
      )
        for (
          var r = o - 1, l = s, d = n.$slider.find(".slick-slide"), a = 0;
          a < n.options.slidesToScroll;
          a++
        )
          r < 0 && (r = n.slideCount - 1),
            (t = (t = t.add(d.eq(r))).add(d.eq(l))),
            r--,
            l++;
      e(t),
        n.slideCount <= n.options.slidesToShow
          ? e(n.$slider.find(".slick-slide"))
          : n.currentSlide >= n.slideCount - n.options.slidesToShow
          ? e(n.$slider.find(".slick-cloned").slice(0, n.options.slidesToShow))
          : 0 === n.currentSlide &&
            e(
              n.$slider.find(".slick-cloned").slice(-1 * n.options.slidesToShow)
            );
    }),
    (e.prototype.loadSlider = function () {
      var i = this;
      i.setPosition(),
        i.$slideTrack.css({ opacity: 1 }),
        i.$slider.removeClass("slick-loading"),
        i.initUI(),
        "progressive" === i.options.lazyLoad && i.progressiveLazyLoad();
    }),
    (e.prototype.next = e.prototype.slickNext = function () {
      this.changeSlide({ data: { message: "next" } });
    }),
    (e.prototype.orientationChange = function () {
      var i = this;
      i.checkResponsive(), i.setPosition();
    }),
    (e.prototype.pause = e.prototype.slickPause = function () {
      var i = this;
      i.autoPlayClear(), (i.paused = !0);
    }),
    (e.prototype.play = e.prototype.slickPlay = function () {
      var i = this;
      i.autoPlay(),
        (i.options.autoplay = !0),
        (i.paused = !1),
        (i.focussed = !1),
        (i.interrupted = !1);
    }),
    (e.prototype.postSlide = function (e) {
      var t = this;
      t.unslicked ||
        (t.$slider.trigger("afterChange", [t, e]),
        (t.animating = !1),
        t.slideCount > t.options.slidesToShow && t.setPosition(),
        (t.swipeLeft = null),
        t.options.autoplay && t.autoPlay(),
        !0 === t.options.accessibility &&
          (t.initADA(),
          t.options.focusOnChange &&
            i(t.$slides.get(t.currentSlide)).attr("tabindex", 0).focus()));
    }),
    (e.prototype.prev = e.prototype.slickPrev = function () {
      this.changeSlide({ data: { message: "previous" } });
    }),
    (e.prototype.preventDefault = function (i) {
      i.preventDefault();
    }),
    (e.prototype.progressiveLazyLoad = function (e) {
      e = e || 1;
      var t,
        o,
        s,
        n,
        r,
        l = this,
        d = i("img[data-lazy]", l.$slider);
      d.length
        ? ((t = d.first()),
          (o = t.attr("data-lazy")),
          (s = t.attr("data-srcset")),
          (n = t.attr("data-sizes") || l.$slider.attr("data-sizes")),
          ((r = document.createElement("img")).onload = function () {
            s && (t.attr("srcset", s), n && t.attr("sizes", n)),
              t
                .attr("src", o)
                .removeAttr("data-lazy data-srcset data-sizes")
                .removeClass("slick-loading"),
              !0 === l.options.adaptiveHeight && l.setPosition(),
              l.$slider.trigger("lazyLoaded", [l, t, o]),
              l.progressiveLazyLoad();
          }),
          (r.onerror = function () {
            e < 3
              ? setTimeout(function () {
                  l.progressiveLazyLoad(e + 1);
                }, 500)
              : (t
                  .removeAttr("data-lazy")
                  .removeClass("slick-loading")
                  .addClass("slick-lazyload-error"),
                l.$slider.trigger("lazyLoadError", [l, t, o]),
                l.progressiveLazyLoad());
          }),
          (r.src = o))
        : l.$slider.trigger("allImagesLoaded", [l]);
    }),
    (e.prototype.refresh = function (e) {
      var t,
        o,
        s = this;
      (o = s.slideCount - s.options.slidesToShow),
        !s.options.infinite && s.currentSlide > o && (s.currentSlide = o),
        s.slideCount <= s.options.slidesToShow && (s.currentSlide = 0),
        (t = s.currentSlide),
        s.destroy(!0),
        i.extend(s, s.initials, { currentSlide: t }),
        s.init(),
        e || s.changeSlide({ data: { message: "index", index: t } }, !1);
    }),
    (e.prototype.registerBreakpoints = function () {
      var e,
        t,
        o,
        s = this,
        n = s.options.responsive || null;
      if ("array" === i.type(n) && n.length) {
        s.respondTo = s.options.respondTo || "window";
        for (e in n)
          if (((o = s.breakpoints.length - 1), n.hasOwnProperty(e))) {
            for (t = n[e].breakpoint; o >= 0; )
              s.breakpoints[o] &&
                s.breakpoints[o] === t &&
                s.breakpoints.splice(o, 1),
                o--;
            s.breakpoints.push(t), (s.breakpointSettings[t] = n[e].settings);
          }
        s.breakpoints.sort(function (i, e) {
          return s.options.mobileFirst ? i - e : e - i;
        });
      }
    }),
    (e.prototype.reinit = function () {
      var e = this;
      (e.$slides = e.$slideTrack
        .children(e.options.slide)
        .addClass("slick-slide")),
        (e.slideCount = e.$slides.length),
        e.currentSlide >= e.slideCount &&
          0 !== e.currentSlide &&
          (e.currentSlide = e.currentSlide - e.options.slidesToScroll),
        e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0),
        e.registerBreakpoints(),
        e.setProps(),
        e.setupInfinite(),
        e.buildArrows(),
        e.updateArrows(),
        e.initArrowEvents(),
        e.buildDots(),
        e.updateDots(),
        e.initDotEvents(),
        e.cleanUpSlideEvents(),
        e.initSlideEvents(),
        e.checkResponsive(!1, !0),
        !0 === e.options.focusOnSelect &&
          i(e.$slideTrack).children().on("click.slick", e.selectHandler),
        e.setSlideClasses(
          "number" == typeof e.currentSlide ? e.currentSlide : 0
        ),
        e.setPosition(),
        e.focusHandler(),
        (e.paused = !e.options.autoplay),
        e.autoPlay(),
        e.$slider.trigger("reInit", [e]);
    }),
    (e.prototype.resize = function () {
      var e = this;
      i(window).width() !== e.windowWidth &&
        (clearTimeout(e.windowDelay),
        (e.windowDelay = window.setTimeout(function () {
          (e.windowWidth = i(window).width()),
            e.checkResponsive(),
            e.unslicked || e.setPosition();
        }, 50)));
    }),
    (e.prototype.removeSlide = e.prototype.slickRemove = function (i, e, t) {
      var o = this;
      if (
        ((i =
          "boolean" == typeof i
            ? !0 === (e = i)
              ? 0
              : o.slideCount - 1
            : !0 === e
            ? --i
            : i),
        o.slideCount < 1 || i < 0 || i > o.slideCount - 1)
      )
        return !1;
      o.unload(),
        !0 === t
          ? o.$slideTrack.children().remove()
          : o.$slideTrack.children(this.options.slide).eq(i).remove(),
        (o.$slides = o.$slideTrack.children(this.options.slide)),
        o.$slideTrack.children(this.options.slide).detach(),
        o.$slideTrack.append(o.$slides),
        (o.$slidesCache = o.$slides),
        o.reinit();
    }),
    (e.prototype.setCSS = function (i) {
      var e,
        t,
        o = this,
        s = {};
      !0 === o.options.rtl && (i = -i),
        (e = "left" == o.positionProp ? Math.ceil(i) + "px" : "0px"),
        (t = "top" == o.positionProp ? Math.ceil(i) + "px" : "0px"),
        (s[o.positionProp] = i),
        !1 === o.transformsEnabled
          ? o.$slideTrack.css(s)
          : ((s = {}),
            !1 === o.cssTransitions
              ? ((s[o.animType] = "translate(" + e + ", " + t + ")"),
                o.$slideTrack.css(s))
              : ((s[o.animType] = "translate3d(" + e + ", " + t + ", 0px)"),
                o.$slideTrack.css(s)));
    }),
    (e.prototype.setDimensions = function () {
      var i = this;
      !1 === i.options.vertical
        ? !0 === i.options.centerMode &&
          i.$list.css({ padding: "0px " + i.options.centerPadding })
        : (i.$list.height(
            i.$slides.first().outerHeight(!0) * i.options.slidesToShow
          ),
          !0 === i.options.centerMode &&
            i.$list.css({ padding: i.options.centerPadding + " 0px" })),
        (i.listWidth = i.$list.width()),
        (i.listHeight = i.$list.height()),
        !1 === i.options.vertical && !1 === i.options.variableWidth
          ? ((i.slideWidth = Math.ceil(i.listWidth / i.options.slidesToShow)),
            i.$slideTrack.width(
              Math.ceil(
                i.slideWidth * i.$slideTrack.children(".slick-slide").length
              )
            ))
          : !0 === i.options.variableWidth
          ? i.$slideTrack.width(5e3 * i.slideCount)
          : ((i.slideWidth = Math.ceil(i.listWidth)),
            i.$slideTrack.height(
              Math.ceil(
                i.$slides.first().outerHeight(!0) *
                  i.$slideTrack.children(".slick-slide").length
              )
            ));
      var e = i.$slides.first().outerWidth(!0) - i.$slides.first().width();
      !1 === i.options.variableWidth &&
        i.$slideTrack.children(".slick-slide").width(i.slideWidth - e);
    }),
    (e.prototype.setFade = function () {
      var e,
        t = this;
      t.$slides.each(function (o, s) {
        (e = t.slideWidth * o * -1),
          !0 === t.options.rtl
            ? i(s).css({
                position: "relative",
                right: e,
                top: 0,
                zIndex: t.options.zIndex - 2,
                opacity: 0,
              })
            : i(s).css({
                position: "relative",
                left: e,
                top: 0,
                zIndex: t.options.zIndex - 2,
                opacity: 0,
              });
      }),
        t.$slides
          .eq(t.currentSlide)
          .css({ zIndex: t.options.zIndex - 1, opacity: 1 });
    }),
    (e.prototype.setHeight = function () {
      var i = this;
      if (
        1 === i.options.slidesToShow &&
        !0 === i.options.adaptiveHeight &&
        !1 === i.options.vertical
      ) {
        var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
        i.$list.css("height", e);
      }
    }),
    (e.prototype.setOption = e.prototype.slickSetOption = function () {
      var e,
        t,
        o,
        s,
        n,
        r = this,
        l = !1;
      if (
        ("object" === i.type(arguments[0])
          ? ((o = arguments[0]), (l = arguments[1]), (n = "multiple"))
          : "string" === i.type(arguments[0]) &&
            ((o = arguments[0]),
            (s = arguments[1]),
            (l = arguments[2]),
            "responsive" === arguments[0] && "array" === i.type(arguments[1])
              ? (n = "responsive")
              : void 0 !== arguments[1] && (n = "single")),
        "single" === n)
      )
        r.options[o] = s;
      else if ("multiple" === n)
        i.each(o, function (i, e) {
          r.options[i] = e;
        });
      else if ("responsive" === n)
        for (t in s)
          if ("array" !== i.type(r.options.responsive))
            r.options.responsive = [s[t]];
          else {
            for (e = r.options.responsive.length - 1; e >= 0; )
              r.options.responsive[e].breakpoint === s[t].breakpoint &&
                r.options.responsive.splice(e, 1),
                e--;
            r.options.responsive.push(s[t]);
          }
      l && (r.unload(), r.reinit());
    }),
    (e.prototype.setPosition = function () {
      var i = this;
      i.setDimensions(),
        i.setHeight(),
        !1 === i.options.fade
          ? i.setCSS(i.getLeft(i.currentSlide))
          : i.setFade(),
        i.$slider.trigger("setPosition", [i]);
    }),
    (e.prototype.setProps = function () {
      var i = this,
        e = document.body.style;
      (i.positionProp = !0 === i.options.vertical ? "top" : "left"),
        "top" === i.positionProp
          ? i.$slider.addClass("slick-vertical")
          : i.$slider.removeClass("slick-vertical"),
        (void 0 === e.WebkitTransition &&
          void 0 === e.MozTransition &&
          void 0 === e.msTransition) ||
          (!0 === i.options.useCSS && (i.cssTransitions = !0)),
        i.options.fade &&
          ("number" == typeof i.options.zIndex
            ? i.options.zIndex < 3 && (i.options.zIndex = 3)
            : (i.options.zIndex = i.defaults.zIndex)),
        void 0 !== e.OTransform &&
          ((i.animType = "OTransform"),
          (i.transformType = "-o-transform"),
          (i.transitionType = "OTransition"),
          void 0 === e.perspectiveProperty &&
            void 0 === e.webkitPerspective &&
            (i.animType = !1)),
        void 0 !== e.MozTransform &&
          ((i.animType = "MozTransform"),
          (i.transformType = "-moz-transform"),
          (i.transitionType = "MozTransition"),
          void 0 === e.perspectiveProperty &&
            void 0 === e.MozPerspective &&
            (i.animType = !1)),
        void 0 !== e.webkitTransform &&
          ((i.animType = "webkitTransform"),
          (i.transformType = "-webkit-transform"),
          (i.transitionType = "webkitTransition"),
          void 0 === e.perspectiveProperty &&
            void 0 === e.webkitPerspective &&
            (i.animType = !1)),
        void 0 !== e.msTransform &&
          ((i.animType = "msTransform"),
          (i.transformType = "-ms-transform"),
          (i.transitionType = "msTransition"),
          void 0 === e.msTransform && (i.animType = !1)),
        void 0 !== e.transform &&
          !1 !== i.animType &&
          ((i.animType = "transform"),
          (i.transformType = "transform"),
          (i.transitionType = "transition")),
        (i.transformsEnabled =
          i.options.useTransform && null !== i.animType && !1 !== i.animType);
    }),
    (e.prototype.setSlideClasses = function (i) {
      var e,
        t,
        o,
        s,
        n = this;
      if (
        ((t = n.$slider
          .find(".slick-slide")
          .removeClass("slick-active slick-center slick-current")
          .attr("aria-hidden", "true")),
        n.$slides.eq(i).addClass("slick-current"),
        !0 === n.options.centerMode)
      ) {
        var r = n.options.slidesToShow % 2 == 0 ? 1 : 0;
        (e = Math.floor(n.options.slidesToShow / 2)),
          !0 === n.options.infinite &&
            (i >= e && i <= n.slideCount - 1 - e
              ? n.$slides
                  .slice(i - e + r, i + e + 1)
                  .addClass("slick-active")
                  .attr("aria-hidden", "false")
              : ((o = n.options.slidesToShow + i),
                t
                  .slice(o - e + 1 + r, o + e + 2)
                  .addClass("slick-active")
                  .attr("aria-hidden", "false")),
            0 === i
              ? t
                  .eq(t.length - 1 - n.options.slidesToShow)
                  .addClass("slick-center")
              : i === n.slideCount - 1 &&
                t.eq(n.options.slidesToShow).addClass("slick-center")),
          n.$slides.eq(i).addClass("slick-center");
      } else
        i >= 0 && i <= n.slideCount - n.options.slidesToShow
          ? n.$slides
              .slice(i, i + n.options.slidesToShow)
              .addClass("slick-active")
              .attr("aria-hidden", "false")
          : t.length <= n.options.slidesToShow
          ? t.addClass("slick-active").attr("aria-hidden", "false")
          : ((s = n.slideCount % n.options.slidesToShow),
            (o = !0 === n.options.infinite ? n.options.slidesToShow + i : i),
            n.options.slidesToShow == n.options.slidesToScroll &&
            n.slideCount - i < n.options.slidesToShow
              ? t
                  .slice(o - (n.options.slidesToShow - s), o + s)
                  .addClass("slick-active")
                  .attr("aria-hidden", "false")
              : t
                  .slice(o, o + n.options.slidesToShow)
                  .addClass("slick-active")
                  .attr("aria-hidden", "false"));
      ("ondemand" !== n.options.lazyLoad &&
        "anticipated" !== n.options.lazyLoad) ||
        n.lazyLoad();
    }),
    (e.prototype.setupInfinite = function () {
      var e,
        t,
        o,
        s = this;
      if (
        (!0 === s.options.fade && (s.options.centerMode = !1),
        !0 === s.options.infinite &&
          !1 === s.options.fade &&
          ((t = null), s.slideCount > s.options.slidesToShow))
      ) {
        for (
          o =
            !0 === s.options.centerMode
              ? s.options.slidesToShow + 1
              : s.options.slidesToShow,
            e = s.slideCount;
          e > s.slideCount - o;
          e -= 1
        )
          (t = e - 1),
            i(s.$slides[t])
              .clone(!0)
              .attr("id", "")
              .attr("data-slick-index", t - s.slideCount)
              .prependTo(s.$slideTrack)
              .addClass("slick-cloned");
        for (e = 0; e < o + s.slideCount; e += 1)
          (t = e),
            i(s.$slides[t])
              .clone(!0)
              .attr("id", "")
              .attr("data-slick-index", t + s.slideCount)
              .appendTo(s.$slideTrack)
              .addClass("slick-cloned");
        s.$slideTrack
          .find(".slick-cloned")
          .find("[id]")
          .each(function () {
            i(this).attr("id", "");
          });
      }
    }),
    (e.prototype.interrupt = function (i) {
      var e = this;
      i || e.autoPlay(), (e.interrupted = i);
    }),
    (e.prototype.selectHandler = function (e) {
      var t = this,
        o = i(e.target).is(".slick-slide")
          ? i(e.target)
          : i(e.target).parents(".slick-slide"),
        s = parseInt(o.attr("data-slick-index"));
      s || (s = 0),
        t.slideCount <= t.options.slidesToShow
          ? t.slideHandler(s, !1, !0)
          : t.slideHandler(s);
    }),
    (e.prototype.slideHandler = function (i, e, t) {
      var o,
        s,
        n,
        r,
        l,
        d = null,
        a = this;
      if (
        ((e = e || !1),
        !(
          (!0 === a.animating && !0 === a.options.waitForAnimate) ||
          (!0 === a.options.fade && a.currentSlide === i)
        ))
      )
        if (
          (!1 === e && a.asNavFor(i),
          (o = i),
          (d = a.getLeft(o)),
          (r = a.getLeft(a.currentSlide)),
          (a.currentLeft = null === a.swipeLeft ? r : a.swipeLeft),
          !1 === a.options.infinite &&
            !1 === a.options.centerMode &&
            (i < 0 || i > a.getDotCount() * a.options.slidesToScroll))
        )
          !1 === a.options.fade &&
            ((o = a.currentSlide),
            !0 !== t
              ? a.animateSlide(r, function () {
                  a.postSlide(o);
                })
              : a.postSlide(o));
        else if (
          !1 === a.options.infinite &&
          !0 === a.options.centerMode &&
          (i < 0 || i > a.slideCount - a.options.slidesToScroll)
        )
          !1 === a.options.fade &&
            ((o = a.currentSlide),
            !0 !== t
              ? a.animateSlide(r, function () {
                  a.postSlide(o);
                })
              : a.postSlide(o));
        else {
          if (
            (a.options.autoplay && clearInterval(a.autoPlayTimer),
            (s =
              o < 0
                ? a.slideCount % a.options.slidesToScroll != 0
                  ? a.slideCount - (a.slideCount % a.options.slidesToScroll)
                  : a.slideCount + o
                : o >= a.slideCount
                ? a.slideCount % a.options.slidesToScroll != 0
                  ? 0
                  : o - a.slideCount
                : o),
            (a.animating = !0),
            a.$slider.trigger("beforeChange", [a, a.currentSlide, s]),
            (n = a.currentSlide),
            (a.currentSlide = s),
            a.setSlideClasses(a.currentSlide),
            a.options.asNavFor &&
              (l = (l = a.getNavTarget()).slick("getSlick")).slideCount <=
                l.options.slidesToShow &&
              l.setSlideClasses(a.currentSlide),
            a.updateDots(),
            a.updateArrows(),
            !0 === a.options.fade)
          )
            return (
              !0 !== t
                ? (a.fadeSlideOut(n),
                  a.fadeSlide(s, function () {
                    a.postSlide(s);
                  }))
                : a.postSlide(s),
              void a.animateHeight()
            );
          !0 !== t
            ? a.animateSlide(d, function () {
                a.postSlide(s);
              })
            : a.postSlide(s);
        }
    }),
    (e.prototype.startLoad = function () {
      var i = this;
      !0 === i.options.arrows &&
        i.slideCount > i.options.slidesToShow &&
        (i.$prevArrow.hide(), i.$nextArrow.hide()),
        !0 === i.options.dots &&
          i.slideCount > i.options.slidesToShow &&
          i.$dots.hide(),
        i.$slider.addClass("slick-loading");
    }),
    (e.prototype.swipeDirection = function () {
      var i,
        e,
        t,
        o,
        s = this;
      return (
        (i = s.touchObject.startX - s.touchObject.curX),
        (e = s.touchObject.startY - s.touchObject.curY),
        (t = Math.atan2(e, i)),
        (o = Math.round((180 * t) / Math.PI)) < 0 && (o = 360 - Math.abs(o)),
        o <= 45 && o >= 0
          ? !1 === s.options.rtl
            ? "left"
            : "right"
          : o <= 360 && o >= 315
          ? !1 === s.options.rtl
            ? "left"
            : "right"
          : o >= 135 && o <= 225
          ? !1 === s.options.rtl
            ? "right"
            : "left"
          : !0 === s.options.verticalSwiping
          ? o >= 35 && o <= 135
            ? "down"
            : "up"
          : "vertical"
      );
    }),
    (e.prototype.swipeEnd = function (i) {
      var e,
        t,
        o = this;
      if (((o.dragging = !1), (o.swiping = !1), o.scrolling))
        return (o.scrolling = !1), !1;
      if (
        ((o.interrupted = !1),
        (o.shouldClick = !(o.touchObject.swipeLength > 10)),
        void 0 === o.touchObject.curX)
      )
        return !1;
      if (
        (!0 === o.touchObject.edgeHit &&
          o.$slider.trigger("edge", [o, o.swipeDirection()]),
        o.touchObject.swipeLength >= o.touchObject.minSwipe)
      ) {
        switch ((t = o.swipeDirection())) {
          case "left":
          case "down":
            (e = o.options.swipeToSlide
              ? o.checkNavigable(o.currentSlide + o.getSlideCount())
              : o.currentSlide + o.getSlideCount()),
              (o.currentDirection = 0);
            break;
          case "right":
          case "up":
            (e = o.options.swipeToSlide
              ? o.checkNavigable(o.currentSlide - o.getSlideCount())
              : o.currentSlide - o.getSlideCount()),
              (o.currentDirection = 1);
        }
        "vertical" != t &&
          (o.slideHandler(e),
          (o.touchObject = {}),
          o.$slider.trigger("swipe", [o, t]));
      } else
        o.touchObject.startX !== o.touchObject.curX &&
          (o.slideHandler(o.currentSlide), (o.touchObject = {}));
    }),
    (e.prototype.swipeHandler = function (i) {
      var e = this;
      if (
        !(
          !1 === e.options.swipe ||
          ("ontouchend" in document && !1 === e.options.swipe) ||
          (!1 === e.options.draggable && -1 !== i.type.indexOf("mouse"))
        )
      )
        switch (
          ((e.touchObject.fingerCount =
            i.originalEvent && void 0 !== i.originalEvent.touches
              ? i.originalEvent.touches.length
              : 1),
          (e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold),
          !0 === e.options.verticalSwiping &&
            (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold),
          i.data.action)
        ) {
          case "start":
            e.swipeStart(i);
            break;
          case "move":
            e.swipeMove(i);
            break;
          case "end":
            e.swipeEnd(i);
        }
    }),
    (e.prototype.swipeMove = function (i) {
      var e,
        t,
        o,
        s,
        n,
        r,
        l = this;
      return (
        (n = void 0 !== i.originalEvent ? i.originalEvent.touches : null),
        !(!l.dragging || l.scrolling || (n && 1 !== n.length)) &&
          ((e = l.getLeft(l.currentSlide)),
          (l.touchObject.curX = void 0 !== n ? n[0].pageX : i.clientX),
          (l.touchObject.curY = void 0 !== n ? n[0].pageY : i.clientY),
          (l.touchObject.swipeLength = Math.round(
            Math.sqrt(Math.pow(l.touchObject.curX - l.touchObject.startX, 2))
          )),
          (r = Math.round(
            Math.sqrt(Math.pow(l.touchObject.curY - l.touchObject.startY, 2))
          )),
          !l.options.verticalSwiping && !l.swiping && r > 4
            ? ((l.scrolling = !0), !1)
            : (!0 === l.options.verticalSwiping &&
                (l.touchObject.swipeLength = r),
              (t = l.swipeDirection()),
              void 0 !== i.originalEvent &&
                l.touchObject.swipeLength > 4 &&
                ((l.swiping = !0), i.preventDefault()),
              (s =
                (!1 === l.options.rtl ? 1 : -1) *
                (l.touchObject.curX > l.touchObject.startX ? 1 : -1)),
              !0 === l.options.verticalSwiping &&
                (s = l.touchObject.curY > l.touchObject.startY ? 1 : -1),
              (o = l.touchObject.swipeLength),
              (l.touchObject.edgeHit = !1),
              !1 === l.options.infinite &&
                ((0 === l.currentSlide && "right" === t) ||
                  (l.currentSlide >= l.getDotCount() && "left" === t)) &&
                ((o = l.touchObject.swipeLength * l.options.edgeFriction),
                (l.touchObject.edgeHit = !0)),
              !1 === l.options.vertical
                ? (l.swipeLeft = e + o * s)
                : (l.swipeLeft = e + o * (l.$list.height() / l.listWidth) * s),
              !0 === l.options.verticalSwiping && (l.swipeLeft = e + o * s),
              !0 !== l.options.fade &&
                !1 !== l.options.touchMove &&
                (!0 === l.animating
                  ? ((l.swipeLeft = null), !1)
                  : void l.setCSS(l.swipeLeft))))
      );
    }),
    (e.prototype.swipeStart = function (i) {
      var e,
        t = this;
      if (
        ((t.interrupted = !0),
        1 !== t.touchObject.fingerCount ||
          t.slideCount <= t.options.slidesToShow)
      )
        return (t.touchObject = {}), !1;
      void 0 !== i.originalEvent &&
        void 0 !== i.originalEvent.touches &&
        (e = i.originalEvent.touches[0]),
        (t.touchObject.startX = t.touchObject.curX =
          void 0 !== e ? e.pageX : i.clientX),
        (t.touchObject.startY = t.touchObject.curY =
          void 0 !== e ? e.pageY : i.clientY),
        (t.dragging = !0);
    }),
    (e.prototype.unfilterSlides = e.prototype.slickUnfilter = function () {
      var i = this;
      null !== i.$slidesCache &&
        (i.unload(),
        i.$slideTrack.children(this.options.slide).detach(),
        i.$slidesCache.appendTo(i.$slideTrack),
        i.reinit());
    }),
    (e.prototype.unload = function () {
      var e = this;
      i(".slick-cloned", e.$slider).remove(),
        e.$dots && e.$dots.remove(),
        e.$prevArrow &&
          e.htmlExpr.test(e.options.prevArrow) &&
          e.$prevArrow.remove(),
        e.$nextArrow &&
          e.htmlExpr.test(e.options.nextArrow) &&
          e.$nextArrow.remove(),
        e.$slides
          .removeClass("slick-slide slick-active slick-visible slick-current")
          .attr("aria-hidden", "true")
          .css("width", "");
    }),
    (e.prototype.unslick = function (i) {
      var e = this;
      e.$slider.trigger("unslick", [e, i]), e.destroy();
    }),
    (e.prototype.updateArrows = function () {
      var i = this;
      Math.floor(i.options.slidesToShow / 2),
        !0 === i.options.arrows &&
          i.slideCount > i.options.slidesToShow &&
          !i.options.infinite &&
          (i.$prevArrow
            .removeClass("slick-disabled")
            .attr("aria-disabled", "false"),
          i.$nextArrow
            .removeClass("slick-disabled")
            .attr("aria-disabled", "false"),
          0 === i.currentSlide
            ? (i.$prevArrow
                .addClass("slick-disabled")
                .attr("aria-disabled", "true"),
              i.$nextArrow
                .removeClass("slick-disabled")
                .attr("aria-disabled", "false"))
            : i.currentSlide >= i.slideCount - i.options.slidesToShow &&
              !1 === i.options.centerMode
            ? (i.$nextArrow
                .addClass("slick-disabled")
                .attr("aria-disabled", "true"),
              i.$prevArrow
                .removeClass("slick-disabled")
                .attr("aria-disabled", "false"))
            : i.currentSlide >= i.slideCount - 1 &&
              !0 === i.options.centerMode &&
              (i.$nextArrow
                .addClass("slick-disabled")
                .attr("aria-disabled", "true"),
              i.$prevArrow
                .removeClass("slick-disabled")
                .attr("aria-disabled", "false")));
    }),
    (e.prototype.updateDots = function () {
      var i = this;
      null !== i.$dots &&
        (i.$dots.find("li").removeClass("slick-active").end(),
        i.$dots
          .find("li")
          .eq(Math.floor(i.currentSlide / i.options.slidesToScroll))
          .addClass("slick-active"));
    }),
    (e.prototype.visibility = function () {
      var i = this;
      i.options.autoplay &&
        (document[i.hidden] ? (i.interrupted = !0) : (i.interrupted = !1));
    }),
    (i.fn.slick = function () {
      var i,
        t,
        o = this,
        s = arguments[0],
        n = Array.prototype.slice.call(arguments, 1),
        r = o.length;
      for (i = 0; i < r; i++)
        if (
          ("object" == typeof s || void 0 === s
            ? (o[i].slick = new e(o[i], s))
            : (t = o[i].slick[s].apply(o[i].slick, n)),
          void 0 !== t)
        )
          return t;
      return o;
    });
});

/*!
 * dist/jquery.inputmask.min
 * https://github.com/RobinHerbots/Inputmask
 * Copyright (c) 2010 - 2020 Robin Herbots
 * Licensed under the MIT license
 * Version: 5.0.4-beta.36
 */
!(function webpackUniversalModuleDefinition(root, factory) {
  if ("object" == typeof exports && "object" == typeof module)
    module.exports = factory(require("jquery"));
  else if ("function" == typeof define && define.amd)
    define(["jquery"], factory);
  else {
    var a =
      "object" == typeof exports
        ? factory(require("jquery"))
        : factory(root.jQuery);
    for (var i in a) ("object" == typeof exports ? exports : root)[i] = a[i];
  }
})(window, function (__WEBPACK_EXTERNAL_MODULE__3__) {
  return (
    (modules = [
      function (module) {
        module.exports = JSON.parse(
          '{"BACKSPACE":8,"BACKSPACE_SAFARI":127,"DELETE":46,"DOWN":40,"END":35,"ENTER":13,"ESCAPE":27,"HOME":36,"INSERT":45,"LEFT":37,"PAGE_DOWN":34,"PAGE_UP":33,"RIGHT":39,"SPACE":32,"TAB":9,"UP":38,"X":88,"CONTROL":17,"KEY_229":229}'
        );
      },
      function (module, exports, __webpack_require__) {
        "use strict";
        function _typeof(obj) {
          return (
            (_typeof =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function _typeof(obj) {
                    return typeof obj;
                  }
                : function _typeof(obj) {
                    return obj &&
                      "function" == typeof Symbol &&
                      obj.constructor === Symbol &&
                      obj !== Symbol.prototype
                      ? "symbol"
                      : typeof obj;
                  }),
            _typeof(obj)
          );
        }
        var $ = __webpack_require__(2),
          window = __webpack_require__(4),
          document = window.document,
          generateMaskSet = __webpack_require__(5).generateMaskSet,
          analyseMask = __webpack_require__(5).analyseMask,
          maskScope = __webpack_require__(9);
        function Inputmask(alias, options, internal) {
          if (!(this instanceof Inputmask))
            return new Inputmask(alias, options, internal);
          (this.el = void 0),
            (this.events = {}),
            (this.maskset = void 0),
            !0 !== internal &&
              ($.isPlainObject(alias)
                ? (options = alias)
                : ((options = options || {}), alias && (options.alias = alias)),
              (this.opts = $.extend(!0, {}, this.defaults, options)),
              (this.noMasksCache = options && void 0 !== options.definitions),
              (this.userOptions = options || {}),
              resolveAlias(this.opts.alias, options, this.opts),
              (this.isRTL = this.opts.numericInput)),
            (this.refreshValue = !1),
            (this.undoValue = void 0),
            (this.$el = void 0),
            (this.skipKeyPressEvent = !1),
            (this.skipInputEvent = !1),
            (this.validationEvent = !1),
            (this.ignorable = !1),
            this.maxLength,
            (this.mouseEnter = !1),
            (this.originalPlaceholder = void 0),
            (this.isComposing = !1);
        }
        function resolveAlias(aliasStr, options, opts) {
          var aliasDefinition = Inputmask.prototype.aliases[aliasStr];
          if (aliasDefinition)
            return (
              aliasDefinition.alias &&
                resolveAlias(aliasDefinition.alias, void 0, opts),
              $.extend(!0, opts, aliasDefinition),
              $.extend(!0, opts, options),
              1
            );
          null === opts.mask && (opts.mask = aliasStr);
        }
        function importAttributeOptions(npt, opts, userOptions, dataAttribute) {
          function importOption(option, optionData) {
            var attrOption =
              "" === dataAttribute ? option : dataAttribute + "-" + option;
            (optionData =
              void 0 !== optionData
                ? optionData
                : npt.getAttribute(attrOption)),
              null !== optionData &&
                ("string" == typeof optionData &&
                  (0 === option.indexOf("on")
                    ? (optionData = window[optionData])
                    : "false" === optionData
                    ? (optionData = !1)
                    : "true" === optionData && (optionData = !0)),
                (userOptions[option] = optionData));
          }
          if (!0 === opts.importDataAttributes) {
            var attrOptions = npt.getAttribute(dataAttribute),
              option,
              dataoptions,
              optionData,
              p;
            if (
              (attrOptions &&
                "" !== attrOptions &&
                ((attrOptions = attrOptions.replace(/'/g, '"')),
                (dataoptions = JSON.parse("{" + attrOptions + "}"))),
              dataoptions)
            )
              for (p in ((optionData = void 0), dataoptions))
                if ("alias" === p.toLowerCase()) {
                  optionData = dataoptions[p];
                  break;
                }
            for (option in (importOption("alias", optionData),
            userOptions.alias &&
              resolveAlias(userOptions.alias, userOptions, opts),
            opts)) {
              if (dataoptions)
                for (p in ((optionData = void 0), dataoptions))
                  if (p.toLowerCase() === option.toLowerCase()) {
                    optionData = dataoptions[p];
                    break;
                  }
              importOption(option, optionData);
            }
          }
          return (
            $.extend(!0, opts, userOptions),
            ("rtl" !== npt.dir && !opts.rightAlign) ||
              (npt.style.textAlign = "right"),
            ("rtl" !== npt.dir && !opts.numericInput) ||
              ((npt.dir = "ltr"),
              npt.removeAttribute("dir"),
              (opts.isRTL = !0)),
            Object.keys(userOptions).length
          );
        }
        (Inputmask.prototype = {
          dataAttribute: "data-inputmask",
          defaults: {
            _maxTestPos: 500,
            placeholder: "_",
            optionalmarker: ["[", "]"],
            quantifiermarker: ["{", "}"],
            groupmarker: ["(", ")"],
            alternatormarker: "|",
            escapeChar: "\\",
            mask: null,
            regex: null,
            oncomplete: $.noop,
            onincomplete: $.noop,
            oncleared: $.noop,
            repeat: 0,
            greedy: !1,
            autoUnmask: !1,
            removeMaskOnSubmit: !1,
            clearMaskOnLostFocus: !0,
            insertMode: !0,
            insertModeVisual: !0,
            clearIncomplete: !1,
            alias: null,
            onKeyDown: $.noop,
            onBeforeMask: null,
            onBeforePaste: function onBeforePaste(pastedValue, opts) {
              return $.isFunction(opts.onBeforeMask)
                ? opts.onBeforeMask.call(this, pastedValue, opts)
                : pastedValue;
            },
            onBeforeWrite: null,
            onUnMask: null,
            showMaskOnFocus: !0,
            showMaskOnHover: !0,
            onKeyValidation: $.noop,
            skipOptionalPartCharacter: " ",
            numericInput: !1,
            rightAlign: !1,
            undoOnEscape: !0,
            radixPoint: "",
            _radixDance: !1,
            groupSeparator: "",
            keepStatic: null,
            positionCaretOnTab: !0,
            tabThrough: !1,
            supportsInputType: ["text", "tel", "url", "password", "search"],
            ignorables: [
              8,
              9,
              19,
              27,
              33,
              34,
              35,
              36,
              37,
              38,
              39,
              40,
              45,
              46,
              93,
              112,
              113,
              114,
              115,
              116,
              117,
              118,
              119,
              120,
              121,
              122,
              123,
              0,
              229,
            ],
            isComplete: null,
            preValidation: null,
            postValidation: null,
            staticDefinitionSymbol: void 0,
            jitMasking: !1,
            nullable: !0,
            inputEventOnly: !1,
            noValuePatching: !1,
            positionCaretOnClick: "lvp",
            casing: null,
            inputmode: "text",
            importDataAttributes: !0,
            shiftPositions: !0,
          },
          definitions: {
            9: { validator: "[0-9\uff10-\uff19]", definitionSymbol: "*" },
            a: {
              validator: "[A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",
              definitionSymbol: "*",
            },
            "*": {
              validator:
                "[0-9\uff10-\uff19A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",
            },
          },
          aliases: {},
          masksCache: {},
          mask: function mask(elems) {
            var that = this;
            return (
              "string" == typeof elems &&
                (elems =
                  document.getElementById(elems) ||
                  document.querySelectorAll(elems)),
              (elems = elems.nodeName ? [elems] : elems),
              $.each(elems, function (ndx, el) {
                var scopedOpts = $.extend(!0, {}, that.opts);
                if (
                  importAttributeOptions(
                    el,
                    scopedOpts,
                    $.extend(!0, {}, that.userOptions),
                    that.dataAttribute
                  )
                ) {
                  var maskset = generateMaskSet(scopedOpts, that.noMasksCache);
                  void 0 !== maskset &&
                    (void 0 !== el.inputmask &&
                      ((el.inputmask.opts.autoUnmask = !0),
                      el.inputmask.remove()),
                    (el.inputmask = new Inputmask(void 0, void 0, !0)),
                    (el.inputmask.opts = scopedOpts),
                    (el.inputmask.noMasksCache = that.noMasksCache),
                    (el.inputmask.userOptions = $.extend(
                      !0,
                      {},
                      that.userOptions
                    )),
                    (el.inputmask.isRTL =
                      scopedOpts.isRTL || scopedOpts.numericInput),
                    (el.inputmask.el = el),
                    (el.inputmask.$el = $(el)),
                    (el.inputmask.maskset = maskset),
                    $.data(el, "_inputmask_opts", that.userOptions),
                    maskScope.call(el.inputmask, { action: "mask" }));
                }
              }),
              (elems && elems[0] && elems[0].inputmask) || this
            );
          },
          option: function option(options, noremask) {
            return "string" == typeof options
              ? this.opts[options]
              : "object" === _typeof(options)
              ? ($.extend(this.userOptions, options),
                this.el && !0 !== noremask && this.mask(this.el),
                this)
              : void 0;
          },
          unmaskedvalue: function unmaskedvalue(value) {
            return (
              (this.maskset =
                this.maskset || generateMaskSet(this.opts, this.noMasksCache)),
              maskScope.call(this, { action: "unmaskedvalue", value: value })
            );
          },
          remove: function remove() {
            return maskScope.call(this, { action: "remove" });
          },
          getemptymask: function getemptymask() {
            return (
              (this.maskset =
                this.maskset || generateMaskSet(this.opts, this.noMasksCache)),
              maskScope.call(this, { action: "getemptymask" })
            );
          },
          hasMaskedValue: function hasMaskedValue() {
            return !this.opts.autoUnmask;
          },
          isComplete: function isComplete() {
            return (
              (this.maskset =
                this.maskset || generateMaskSet(this.opts, this.noMasksCache)),
              maskScope.call(this, { action: "isComplete" })
            );
          },
          getmetadata: function getmetadata() {
            return (
              (this.maskset =
                this.maskset || generateMaskSet(this.opts, this.noMasksCache)),
              maskScope.call(this, { action: "getmetadata" })
            );
          },
          isValid: function isValid(value) {
            return (
              (this.maskset =
                this.maskset || generateMaskSet(this.opts, this.noMasksCache)),
              maskScope.call(this, { action: "isValid", value: value })
            );
          },
          format: function format(value, metadata) {
            return (
              (this.maskset =
                this.maskset || generateMaskSet(this.opts, this.noMasksCache)),
              maskScope.call(this, {
                action: "format",
                value: value,
                metadata: metadata,
              })
            );
          },
          setValue: function setValue(value) {
            this.el && $(this.el).trigger("setvalue", [value]);
          },
          analyseMask: analyseMask,
        }),
          (Inputmask.extendDefaults = function (options) {
            $.extend(!0, Inputmask.prototype.defaults, options);
          }),
          (Inputmask.extendDefinitions = function (definition) {
            $.extend(!0, Inputmask.prototype.definitions, definition);
          }),
          (Inputmask.extendAliases = function (alias) {
            $.extend(!0, Inputmask.prototype.aliases, alias);
          }),
          (Inputmask.format = function (value, options, metadata) {
            return Inputmask(options).format(value, metadata);
          }),
          (Inputmask.unmask = function (value, options) {
            return Inputmask(options).unmaskedvalue(value);
          }),
          (Inputmask.isValid = function (value, options) {
            return Inputmask(options).isValid(value);
          }),
          (Inputmask.remove = function (elems) {
            "string" == typeof elems &&
              (elems =
                document.getElementById(elems) ||
                document.querySelectorAll(elems)),
              (elems = elems.nodeName ? [elems] : elems),
              $.each(elems, function (ndx, el) {
                el.inputmask && el.inputmask.remove();
              });
          }),
          (Inputmask.setValue = function (elems, value) {
            "string" == typeof elems &&
              (elems =
                document.getElementById(elems) ||
                document.querySelectorAll(elems)),
              (elems = elems.nodeName ? [elems] : elems),
              $.each(elems, function (ndx, el) {
                el.inputmask
                  ? el.inputmask.setValue(value)
                  : $(el).trigger("setvalue", [value]);
              });
          }),
          (Inputmask.dependencyLib = $),
          (window.Inputmask = Inputmask),
          (module.exports = Inputmask);
      },
      function (module, exports, __webpack_require__) {
        "use strict";
        var jquery = __webpack_require__(3);
        if (void 0 === jquery) throw "jQuery not loaded!";
        module.exports = jquery;
      },
      function (module, exports) {
        module.exports = __WEBPACK_EXTERNAL_MODULE__3__;
      },
      function (module, exports, __webpack_require__) {
        "use strict";
        var __WEBPACK_AMD_DEFINE_RESULT__;
        function _typeof(obj) {
          return (
            (_typeof =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function _typeof(obj) {
                    return typeof obj;
                  }
                : function _typeof(obj) {
                    return obj &&
                      "function" == typeof Symbol &&
                      obj.constructor === Symbol &&
                      obj !== Symbol.prototype
                      ? "symbol"
                      : typeof obj;
                  }),
            _typeof(obj)
          );
        }
        (__WEBPACK_AMD_DEFINE_RESULT__ = function () {
          return "undefined" != typeof window
            ? window
            : new (eval("require('jsdom').JSDOM"))("").window;
        }.call(exports, __webpack_require__, exports, module)),
          void 0 === __WEBPACK_AMD_DEFINE_RESULT__ ||
            (module.exports = __WEBPACK_AMD_DEFINE_RESULT__);
      },
      function (module, exports, __webpack_require__) {
        "use strict";
        var $ = __webpack_require__(2);
        function generateMaskSet(opts, nocache) {
          var ms;
          function generateMask(mask, metadata, opts) {
            var regexMask = !1,
              masksetDefinition,
              maskdefKey;
            if (
              ((null !== mask && "" !== mask) ||
                ((regexMask = null !== opts.regex),
                (mask = regexMask
                  ? ((mask = opts.regex), mask.replace(/^(\^)(.*)(\$)$/, "$2"))
                  : ((regexMask = !0), ".*"))),
              1 === mask.length &&
                !1 === opts.greedy &&
                0 !== opts.repeat &&
                (opts.placeholder = ""),
              0 < opts.repeat || "*" === opts.repeat || "+" === opts.repeat)
            ) {
              var repeatStart =
                "*" === opts.repeat ? 0 : "+" === opts.repeat ? 1 : opts.repeat;
              mask =
                opts.groupmarker[0] +
                mask +
                opts.groupmarker[1] +
                opts.quantifiermarker[0] +
                repeatStart +
                "," +
                opts.repeat +
                opts.quantifiermarker[1];
            }
            return (
              (maskdefKey = regexMask
                ? "regex_" + opts.regex
                : opts.numericInput
                ? mask.split("").reverse().join("")
                : mask),
              !1 !== opts.keepStatic && (maskdefKey = "ks_" + maskdefKey),
              void 0 === Inputmask.prototype.masksCache[maskdefKey] ||
              !0 === nocache
                ? ((masksetDefinition = {
                    mask: mask,
                    maskToken: Inputmask.prototype.analyseMask(
                      mask,
                      regexMask,
                      opts
                    ),
                    validPositions: {},
                    _buffer: void 0,
                    buffer: void 0,
                    tests: {},
                    excludes: {},
                    metadata: metadata,
                    maskLength: void 0,
                    jitOffset: {},
                  }),
                  !0 !== nocache &&
                    ((Inputmask.prototype.masksCache[
                      maskdefKey
                    ] = masksetDefinition),
                    (masksetDefinition = $.extend(
                      !0,
                      {},
                      Inputmask.prototype.masksCache[maskdefKey]
                    ))))
                : (masksetDefinition = $.extend(
                    !0,
                    {},
                    Inputmask.prototype.masksCache[maskdefKey]
                  )),
              masksetDefinition
            );
          }
          if (
            ($.isFunction(opts.mask) && (opts.mask = opts.mask(opts)),
            $.isArray(opts.mask))
          ) {
            if (1 < opts.mask.length) {
              null === opts.keepStatic && (opts.keepStatic = !0);
              var altMask = opts.groupmarker[0];
              return (
                $.each(opts.isRTL ? opts.mask.reverse() : opts.mask, function (
                  ndx,
                  msk
                ) {
                  1 < altMask.length &&
                    (altMask +=
                      opts.groupmarker[1] +
                      opts.alternatormarker +
                      opts.groupmarker[0]),
                    void 0 === msk.mask || $.isFunction(msk.mask)
                      ? (altMask += msk)
                      : (altMask += msk.mask);
                }),
                (altMask += opts.groupmarker[1]),
                generateMask(altMask, opts.mask, opts)
              );
            }
            opts.mask = opts.mask.pop();
          }
          return (
            null === opts.keepStatic && (opts.keepStatic = !1),
            (ms =
              opts.mask &&
              void 0 !== opts.mask.mask &&
              !$.isFunction(opts.mask.mask)
                ? generateMask(opts.mask.mask, opts.mask, opts)
                : generateMask(opts.mask, opts.mask, opts)),
            ms
          );
        }
        function analyseMask(mask, regexMask, opts) {
          var tokenizer = /(?:[?*+]|\{[0-9+*]+(?:,[0-9+*]*)?(?:\|[0-9+*]*)?\})|[^.?*+^${[]()|\\]+|./g,
            regexTokenizer = /\[\^?]?(?:[^\\\]]+|\\[\S\s]?)*]?|\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)|\((?:\?[:=!]?)?|(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[()|\\]+|./g,
            escaped = !1,
            currentToken = new MaskToken(),
            match,
            m,
            openenings = [],
            maskTokens = [],
            openingToken,
            currentOpeningToken,
            alternator,
            lastMatch,
            closeRegexGroup = !1;
          function MaskToken(isGroup, isOptional, isQuantifier, isAlternator) {
            (this.matches = []),
              (this.openGroup = isGroup || !1),
              (this.alternatorGroup = !1),
              (this.isGroup = isGroup || !1),
              (this.isOptional = isOptional || !1),
              (this.isQuantifier = isQuantifier || !1),
              (this.isAlternator = isAlternator || !1),
              (this.quantifier = { min: 1, max: 1 });
          }
          function insertTestDefinition(mtoken, element, position) {
            position = void 0 !== position ? position : mtoken.matches.length;
            var prevMatch = mtoken.matches[position - 1];
            if (regexMask)
              0 === element.indexOf("[") ||
              (escaped && /\\d|\\s|\\w]/i.test(element)) ||
              "." === element
                ? mtoken.matches.splice(position++, 0, {
                    fn: new RegExp(element, opts.casing ? "i" : ""),
                    static: !1,
                    optionality: !1,
                    newBlockMarker:
                      void 0 === prevMatch
                        ? "master"
                        : prevMatch.def !== element,
                    casing: null,
                    def: element,
                    placeholder: void 0,
                    nativeDef: element,
                  })
                : (escaped && (element = element[element.length - 1]),
                  $.each(element.split(""), function (ndx, lmnt) {
                    (prevMatch = mtoken.matches[position - 1]),
                      mtoken.matches.splice(position++, 0, {
                        fn: /[a-z]/i.test(opts.staticDefinitionSymbol || lmnt)
                          ? new RegExp(
                              "[" + (opts.staticDefinitionSymbol || lmnt) + "]",
                              opts.casing ? "i" : ""
                            )
                          : null,
                        static: !0,
                        optionality: !1,
                        newBlockMarker:
                          void 0 === prevMatch
                            ? "master"
                            : prevMatch.def !== lmnt && !0 !== prevMatch.static,
                        casing: null,
                        def: opts.staticDefinitionSymbol || lmnt,
                        placeholder:
                          void 0 !== opts.staticDefinitionSymbol
                            ? lmnt
                            : void 0,
                        nativeDef: (escaped ? "'" : "") + lmnt,
                      });
                  })),
                (escaped = !1);
            else {
              var maskdef =
                (opts.definitions ? opts.definitions[element] : void 0) ||
                Inputmask.prototype.definitions[element];
              maskdef && !escaped
                ? mtoken.matches.splice(position++, 0, {
                    fn: maskdef.validator
                      ? "string" == typeof maskdef.validator
                        ? new RegExp(maskdef.validator, opts.casing ? "i" : "")
                        : new (function () {
                            this.test = maskdef.validator;
                          })()
                      : new RegExp("."),
                    static: maskdef.static || !1,
                    optionality: !1,
                    newBlockMarker:
                      void 0 === prevMatch
                        ? "master"
                        : prevMatch.def !==
                          (maskdef.definitionSymbol || element),
                    casing: maskdef.casing,
                    def: maskdef.definitionSymbol || element,
                    placeholder: maskdef.placeholder,
                    nativeDef: element,
                    generated: maskdef.generated,
                  })
                : (mtoken.matches.splice(position++, 0, {
                    fn: /[a-z]/i.test(opts.staticDefinitionSymbol || element)
                      ? new RegExp(
                          "[" + (opts.staticDefinitionSymbol || element) + "]",
                          opts.casing ? "i" : ""
                        )
                      : null,
                    static: !0,
                    optionality: !1,
                    newBlockMarker:
                      void 0 === prevMatch
                        ? "master"
                        : prevMatch.def !== element && !0 !== prevMatch.static,
                    casing: null,
                    def: opts.staticDefinitionSymbol || element,
                    placeholder:
                      void 0 !== opts.staticDefinitionSymbol ? element : void 0,
                    nativeDef: (escaped ? "'" : "") + element,
                  }),
                  (escaped = !1));
            }
          }
          function verifyGroupMarker(maskToken) {
            maskToken &&
              maskToken.matches &&
              $.each(maskToken.matches, function (ndx, token) {
                var nextToken = maskToken.matches[ndx + 1];
                (void 0 === nextToken ||
                  void 0 === nextToken.matches ||
                  !1 === nextToken.isQuantifier) &&
                  token &&
                  token.isGroup &&
                  ((token.isGroup = !1),
                  regexMask ||
                    (insertTestDefinition(token, opts.groupmarker[0], 0),
                    !0 !== token.openGroup &&
                      insertTestDefinition(token, opts.groupmarker[1]))),
                  verifyGroupMarker(token);
              });
          }
          function defaultCase() {
            if (0 < openenings.length) {
              if (
                ((currentOpeningToken = openenings[openenings.length - 1]),
                insertTestDefinition(currentOpeningToken, m),
                currentOpeningToken.isAlternator)
              ) {
                alternator = openenings.pop();
                for (var mndx = 0; mndx < alternator.matches.length; mndx++)
                  alternator.matches[mndx].isGroup &&
                    (alternator.matches[mndx].isGroup = !1);
                0 < openenings.length
                  ? ((currentOpeningToken = openenings[openenings.length - 1]),
                    currentOpeningToken.matches.push(alternator))
                  : currentToken.matches.push(alternator);
              }
            } else insertTestDefinition(currentToken, m);
          }
          function reverseTokens(maskToken) {
            function reverseStatic(st) {
              return (
                st === opts.optionalmarker[0]
                  ? (st = opts.optionalmarker[1])
                  : st === opts.optionalmarker[1]
                  ? (st = opts.optionalmarker[0])
                  : st === opts.groupmarker[0]
                  ? (st = opts.groupmarker[1])
                  : st === opts.groupmarker[1] && (st = opts.groupmarker[0]),
                st
              );
            }
            for (var match in ((maskToken.matches = maskToken.matches.reverse()),
            maskToken.matches))
              if (
                Object.prototype.hasOwnProperty.call(maskToken.matches, match)
              ) {
                var intMatch = parseInt(match);
                if (
                  maskToken.matches[match].isQuantifier &&
                  maskToken.matches[intMatch + 1] &&
                  maskToken.matches[intMatch + 1].isGroup
                ) {
                  var qt = maskToken.matches[match];
                  maskToken.matches.splice(match, 1),
                    maskToken.matches.splice(intMatch + 1, 0, qt);
                }
                void 0 !== maskToken.matches[match].matches
                  ? (maskToken.matches[match] = reverseTokens(
                      maskToken.matches[match]
                    ))
                  : (maskToken.matches[match] = reverseStatic(
                      maskToken.matches[match]
                    ));
              }
            return maskToken;
          }
          function groupify(matches) {
            var groupToken = new MaskToken(!0);
            return (
              (groupToken.openGroup = !1),
              (groupToken.matches = matches),
              groupToken
            );
          }
          function closeGroup() {
            if (
              ((openingToken = openenings.pop()),
              (openingToken.openGroup = !1),
              void 0 !== openingToken)
            )
              if (0 < openenings.length) {
                if (
                  ((currentOpeningToken = openenings[openenings.length - 1]),
                  currentOpeningToken.matches.push(openingToken),
                  currentOpeningToken.isAlternator)
                ) {
                  alternator = openenings.pop();
                  for (var mndx = 0; mndx < alternator.matches.length; mndx++)
                    (alternator.matches[mndx].isGroup = !1),
                      (alternator.matches[mndx].alternatorGroup = !1);
                  0 < openenings.length
                    ? ((currentOpeningToken =
                        openenings[openenings.length - 1]),
                      currentOpeningToken.matches.push(alternator))
                    : currentToken.matches.push(alternator);
                }
              } else currentToken.matches.push(openingToken);
            else defaultCase();
          }
          function groupQuantifier(matches) {
            var lastMatch = matches.pop();
            return (
              lastMatch.isQuantifier &&
                (lastMatch = groupify([matches.pop(), lastMatch])),
              lastMatch
            );
          }
          for (
            regexMask &&
            ((opts.optionalmarker[0] = void 0),
            (opts.optionalmarker[1] = void 0));
            (match = regexMask
              ? regexTokenizer.exec(mask)
              : tokenizer.exec(mask));

          ) {
            if (((m = match[0]), regexMask))
              switch (m.charAt(0)) {
                case "?":
                  m = "{0,1}";
                  break;
                case "+":
                case "*":
                  m = "{" + m + "}";
                  break;
                case "|":
                  if (0 === openenings.length) {
                    var altRegexGroup = groupify(currentToken.matches);
                    (altRegexGroup.openGroup = !0),
                      openenings.push(altRegexGroup),
                      (currentToken.matches = []),
                      (closeRegexGroup = !0);
                  }
                  break;
              }
            if (escaped) defaultCase();
            else
              switch (m.charAt(0)) {
                case "(?=":
                  break;
                case "(?!":
                  break;
                case "(?<=":
                  break;
                case "(?<!":
                  break;
                case opts.escapeChar:
                  (escaped = !0), regexMask && defaultCase();
                  break;
                case opts.optionalmarker[1]:
                case opts.groupmarker[1]:
                  closeGroup();
                  break;
                case opts.optionalmarker[0]:
                  openenings.push(new MaskToken(!1, !0));
                  break;
                case opts.groupmarker[0]:
                  openenings.push(new MaskToken(!0));
                  break;
                case opts.quantifiermarker[0]:
                  var quantifier = new MaskToken(!1, !1, !0);
                  m = m.replace(/[{}]/g, "");
                  var mqj = m.split("|"),
                    mq = mqj[0].split(","),
                    mq0 = isNaN(mq[0]) ? mq[0] : parseInt(mq[0]),
                    mq1 =
                      1 === mq.length
                        ? mq0
                        : isNaN(mq[1])
                        ? mq[1]
                        : parseInt(mq[1]);
                  ("*" !== mq0 && "+" !== mq0) || (mq0 = "*" === mq1 ? 0 : 1),
                    (quantifier.quantifier = {
                      min: mq0,
                      max: mq1,
                      jit: mqj[1],
                    });
                  var matches =
                    0 < openenings.length
                      ? openenings[openenings.length - 1].matches
                      : currentToken.matches;
                  if (((match = matches.pop()), match.isAlternator)) {
                    matches.push(match), (matches = match.matches);
                    var groupToken = new MaskToken(!0),
                      tmpMatch = matches.pop();
                    matches.push(groupToken),
                      (matches = groupToken.matches),
                      (match = tmpMatch);
                  }
                  match.isGroup || (match = groupify([match])),
                    matches.push(match),
                    matches.push(quantifier);
                  break;
                case opts.alternatormarker:
                  if (0 < openenings.length) {
                    currentOpeningToken = openenings[openenings.length - 1];
                    var subToken =
                      currentOpeningToken.matches[
                        currentOpeningToken.matches.length - 1
                      ];
                    lastMatch =
                      currentOpeningToken.openGroup &&
                      (void 0 === subToken.matches ||
                        (!1 === subToken.isGroup &&
                          !1 === subToken.isAlternator))
                        ? openenings.pop()
                        : groupQuantifier(currentOpeningToken.matches);
                  } else lastMatch = groupQuantifier(currentToken.matches);
                  if (lastMatch.isAlternator) openenings.push(lastMatch);
                  else if (
                    (lastMatch.alternatorGroup
                      ? ((alternator = openenings.pop()),
                        (lastMatch.alternatorGroup = !1))
                      : (alternator = new MaskToken(!1, !1, !1, !0)),
                    alternator.matches.push(lastMatch),
                    openenings.push(alternator),
                    lastMatch.openGroup)
                  ) {
                    lastMatch.openGroup = !1;
                    var alternatorGroup = new MaskToken(!0);
                    (alternatorGroup.alternatorGroup = !0),
                      openenings.push(alternatorGroup);
                  }
                  break;
                default:
                  defaultCase();
              }
          }
          for (closeRegexGroup && closeGroup(); 0 < openenings.length; )
            (openingToken = openenings.pop()),
              currentToken.matches.push(openingToken);
          return (
            0 < currentToken.matches.length &&
              (verifyGroupMarker(currentToken), maskTokens.push(currentToken)),
            (opts.numericInput || opts.isRTL) && reverseTokens(maskTokens[0]),
            maskTokens
          );
        }
        module.exports = {
          generateMaskSet: generateMaskSet,
          analyseMask: analyseMask,
        };
      },
      function (module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = _default);
        var escapeRegexRegex = new RegExp(
          "(\\" +
            [
              "/",
              ".",
              "*",
              "+",
              "?",
              "|",
              "(",
              ")",
              "[",
              "]",
              "{",
              "}",
              "\\",
              "$",
              "^",
            ].join("|\\") +
            ")",
          "gim"
        );
        function _default(str) {
          return str.replace(escapeRegexRegex, "\\$1");
        }
      },
      function (module, exports, __webpack_require__) {
        "use strict";
        __webpack_require__(8),
          __webpack_require__(11),
          __webpack_require__(12),
          __webpack_require__(13),
          (module.exports = __webpack_require__(1));
      },
      function (module, exports, __webpack_require__) {
        "use strict";
        var Inputmask = __webpack_require__(1);
        Inputmask.extendDefinitions({
          A: {
            validator: "[A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",
            casing: "upper",
          },
          "&": {
            validator: "[0-9A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",
            casing: "upper",
          },
          "#": { validator: "[0-9A-Fa-f]", casing: "upper" },
        });
        var ipValidatorRegex = new RegExp("25[0-5]|2[0-4][0-9]|[01][0-9][0-9]");
        function ipValidator(chrs, maskset, pos, strict, opts) {
          return (
            (chrs =
              -1 < pos - 1 && "." !== maskset.buffer[pos - 1]
                ? ((chrs = maskset.buffer[pos - 1] + chrs),
                  -1 < pos - 2 && "." !== maskset.buffer[pos - 2]
                    ? maskset.buffer[pos - 2] + chrs
                    : "0" + chrs)
                : "00" + chrs),
            ipValidatorRegex.test(chrs)
          );
        }
        Inputmask.extendAliases({
          cssunit: {
            regex: "[+-]?[0-9]+\\.?([0-9]+)?(px|em|rem|ex|%|in|cm|mm|pt|pc)",
          },
          url: { regex: "(https?|ftp)://.*", autoUnmask: !1 },
          ip: {
            mask: "i[i[i]].j[j[j]].k[k[k]].l[l[l]]",
            definitions: {
              i: { validator: ipValidator },
              j: { validator: ipValidator },
              k: { validator: ipValidator },
              l: { validator: ipValidator },
            },
            onUnMask: function onUnMask(maskedValue, unmaskedValue, opts) {
              return maskedValue;
            },
            inputmode: "numeric",
          },
          email: {
            mask:
              "*{1,64}[.*{1,64}][.*{1,64}][.*{1,63}]@-{1,63}.-{1,63}[.-{1,63}][.-{1,63}]",
            greedy: !1,
            casing: "lower",
            onBeforePaste: function onBeforePaste(pastedValue, opts) {
              return (
                (pastedValue = pastedValue.toLowerCase()),
                pastedValue.replace("mailto:", "")
              );
            },
            definitions: {
              "*": {
                validator:
                  "[0-9\uff11-\uff19A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5!#$%&'*+/=?^_`{|}~-]",
              },
              "-": { validator: "[0-9A-Za-z-]" },
            },
            onUnMask: function onUnMask(maskedValue, unmaskedValue, opts) {
              return maskedValue;
            },
            inputmode: "email",
          },
          mac: { mask: "##:##:##:##:##:##" },
          vin: {
            mask: "V{13}9{4}",
            definitions: {
              V: { validator: "[A-HJ-NPR-Za-hj-npr-z\\d]", casing: "upper" },
            },
            clearIncomplete: !0,
            autoUnmask: !0,
          },
          ssn: {
            mask: "999-99-9999",
            postValidation: function postValidation(
              buffer,
              pos,
              c,
              currentResult,
              opts,
              maskset,
              strict
            ) {
              return /^(?!219-09-9999|078-05-1120)(?!666|000|9.{2}).{3}-(?!00).{2}-(?!0{4}).{4}$/.test(
                buffer.join("")
              );
            },
          },
        }),
          (module.exports = Inputmask);
      },
      function (module, exports, __webpack_require__) {
        "use strict";
        __webpack_require__(10);
        var $ = __webpack_require__(2),
          window = __webpack_require__(4),
          document = window.document,
          ua = (window.navigator && window.navigator.userAgent) || "",
          ie = 0 < ua.indexOf("MSIE ") || 0 < ua.indexOf("Trident/"),
          mobile = "ontouchstart" in window,
          iemobile = /iemobile/i.test(ua),
          iphone = /iphone/i.test(ua) && !iemobile,
          keyCode = __webpack_require__(0);
        module.exports = function maskScope(actionObj) {
          var inputmask = this,
            maskset = inputmask.maskset,
            opts = inputmask.opts,
            el = inputmask.el,
            isRTL = inputmask.isRTL || (inputmask.isRTL = opts.numericInput);
          function getMaskTemplate(
            baseOnInput,
            minimalPos,
            includeMode,
            noJit,
            clearOptionalTail
          ) {
            var greedy = opts.greedy;
            clearOptionalTail && (opts.greedy = !1),
              (minimalPos = minimalPos || 0);
            var maskTemplate = [],
              ndxIntlzr,
              pos = 0,
              test,
              testPos,
              jitRenderStatic;
            do {
              if (!0 === baseOnInput && maskset.validPositions[pos])
                (testPos =
                  clearOptionalTail &&
                  !0 === maskset.validPositions[pos].match.optionality &&
                  void 0 === maskset.validPositions[pos + 1] &&
                  (!0 === maskset.validPositions[pos].generatedInput ||
                    (maskset.validPositions[pos].input ==
                      opts.skipOptionalPartCharacter &&
                      0 < pos))
                    ? determineTestTemplate(
                        pos,
                        getTests(pos, ndxIntlzr, pos - 1)
                      )
                    : maskset.validPositions[pos]),
                  (test = testPos.match),
                  (ndxIntlzr = testPos.locator.slice()),
                  maskTemplate.push(
                    !0 === includeMode
                      ? testPos.input
                      : !1 === includeMode
                      ? test.nativeDef
                      : getPlaceholder(pos, test)
                  );
              else {
                (testPos = getTestTemplate(pos, ndxIntlzr, pos - 1)),
                  (test = testPos.match),
                  (ndxIntlzr = testPos.locator.slice());
                var jitMasking =
                  !0 !== noJit &&
                  (!1 !== opts.jitMasking ? opts.jitMasking : test.jit);
                (jitRenderStatic =
                  (jitRenderStatic &&
                    test.static &&
                    test.def !== opts.groupSeparator &&
                    null === test.fn) ||
                  (maskset.validPositions[pos - 1] &&
                    test.static &&
                    test.def !== opts.groupSeparator &&
                    null === test.fn)),
                  jitRenderStatic ||
                  !1 === jitMasking ||
                  void 0 === jitMasking ||
                  ("number" == typeof jitMasking &&
                    isFinite(jitMasking) &&
                    pos < jitMasking)
                    ? maskTemplate.push(
                        !1 === includeMode
                          ? test.nativeDef
                          : getPlaceholder(pos, test)
                      )
                    : (jitRenderStatic = !1);
              }
              pos++;
            } while (
              ((void 0 === inputmask.maxLength || pos < inputmask.maxLength) &&
                (!0 !== test.static || "" !== test.def)) ||
              pos < minimalPos
            );
            return (
              "" === maskTemplate[maskTemplate.length - 1] &&
                maskTemplate.pop(),
              (!1 === includeMode && void 0 !== maskset.maskLength) ||
                (maskset.maskLength = pos - 1),
              (opts.greedy = greedy),
              maskTemplate
            );
          }
          function resetMaskSet(soft) {
            (maskset.buffer = void 0),
              !0 !== soft && ((maskset.validPositions = {}), (maskset.p = 0));
          }
          function getLastValidPosition(closestTo, strict, validPositions) {
            var before = -1,
              after = -1,
              valids = validPositions || maskset.validPositions;
            for (var posNdx in (void 0 === closestTo && (closestTo = -1),
            valids)) {
              var psNdx = parseInt(posNdx);
              valids[psNdx] &&
                (strict || !0 !== valids[psNdx].generatedInput) &&
                (psNdx <= closestTo && (before = psNdx),
                closestTo <= psNdx && (after = psNdx));
            }
            return -1 !== before &&
              before != closestTo &&
              (-1 == after || closestTo - before < after - closestTo)
              ? before
              : after;
          }
          function getDecisionTaker(tst) {
            var decisionTaker = tst.locator[tst.alternation];
            return (
              "string" == typeof decisionTaker &&
                0 < decisionTaker.length &&
                (decisionTaker = decisionTaker.split(",")[0]),
              void 0 !== decisionTaker ? decisionTaker.toString() : ""
            );
          }
          function getLocator(tst, align) {
            var locator = (null != tst.alternation
              ? tst.mloc[getDecisionTaker(tst)]
              : tst.locator
            ).join("");
            if ("" !== locator) for (; locator.length < align; ) locator += "0";
            return locator;
          }
          function determineTestTemplate(pos, tests) {
            pos = 0 < pos ? pos - 1 : 0;
            for (
              var altTest = getTest(pos),
                targetLocator = getLocator(altTest),
                tstLocator,
                closest,
                bestMatch,
                ndx = 0;
              ndx < tests.length;
              ndx++
            ) {
              var tst = tests[ndx];
              tstLocator = getLocator(tst, targetLocator.length);
              var distance = Math.abs(tstLocator - targetLocator);
              (void 0 === closest ||
                ("" !== tstLocator && distance < closest) ||
                (bestMatch &&
                  !opts.greedy &&
                  bestMatch.match.optionality &&
                  "master" === bestMatch.match.newBlockMarker &&
                  (!tst.match.optionality || !tst.match.newBlockMarker)) ||
                (bestMatch &&
                  bestMatch.match.optionalQuantifier &&
                  !tst.match.optionalQuantifier)) &&
                ((closest = distance), (bestMatch = tst));
            }
            return bestMatch;
          }
          function getTestTemplate(pos, ndxIntlzr, tstPs) {
            return (
              maskset.validPositions[pos] ||
              determineTestTemplate(
                pos,
                getTests(pos, ndxIntlzr ? ndxIntlzr.slice() : ndxIntlzr, tstPs)
              )
            );
          }
          function getTest(pos, tests) {
            return maskset.validPositions[pos]
              ? maskset.validPositions[pos]
              : (tests || getTests(pos))[0];
          }
          function positionCanMatchDefinition(pos, testDefinition, opts) {
            for (
              var valid = !1, tests = getTests(pos), tndx = 0;
              tndx < tests.length;
              tndx++
            ) {
              if (
                tests[tndx].match &&
                (!(
                  tests[tndx].match.nativeDef !==
                    testDefinition.match[
                      opts.shiftPositions ? "def" : "nativeDef"
                    ] ||
                  (opts.shiftPositions && testDefinition.match.static)
                ) ||
                  tests[tndx].match.nativeDef ===
                    testDefinition.match.nativeDef)
              ) {
                valid = !0;
                break;
              }
              if (
                tests[tndx].match &&
                tests[tndx].match.def === testDefinition.match.nativeDef
              ) {
                valid = void 0;
                break;
              }
            }
            return (
              !1 === valid &&
                void 0 !== maskset.jitOffset[pos] &&
                (valid = positionCanMatchDefinition(
                  pos + maskset.jitOffset[pos],
                  testDefinition,
                  opts
                )),
              valid
            );
          }
          function getTests(pos, ndxIntlzr, tstPs) {
            var maskTokens = maskset.maskToken,
              testPos = ndxIntlzr ? tstPs : 0,
              ndxInitializer = ndxIntlzr ? ndxIntlzr.slice() : [0],
              matches = [],
              insertStop = !1,
              latestMatch,
              cacheDependency = ndxIntlzr ? ndxIntlzr.join("") : "";
            function resolveTestFromToken(
              maskToken,
              ndxInitializer,
              loopNdx,
              quantifierRecurse
            ) {
              function handleMatch(match, loopNdx, quantifierRecurse) {
                function isFirstMatch(latestMatch, tokenGroup) {
                  var firstMatch =
                    0 === $.inArray(latestMatch, tokenGroup.matches);
                  return (
                    firstMatch ||
                      $.each(tokenGroup.matches, function (ndx, match) {
                        if (
                          (!0 === match.isQuantifier
                            ? (firstMatch = isFirstMatch(
                                latestMatch,
                                tokenGroup.matches[ndx - 1]
                              ))
                            : Object.prototype.hasOwnProperty.call(
                                match,
                                "matches"
                              ) &&
                              (firstMatch = isFirstMatch(latestMatch, match)),
                          firstMatch)
                        )
                          return !1;
                      }),
                    firstMatch
                  );
                }
                function resolveNdxInitializer(
                  pos,
                  alternateNdx,
                  targetAlternation
                ) {
                  var bestMatch, indexPos;
                  if (
                    ((maskset.tests[pos] || maskset.validPositions[pos]) &&
                      $.each(
                        maskset.tests[pos] || [maskset.validPositions[pos]],
                        function (ndx, lmnt) {
                          if (lmnt.mloc[alternateNdx])
                            return (bestMatch = lmnt), !1;
                          var alternation =
                              void 0 !== targetAlternation
                                ? targetAlternation
                                : lmnt.alternation,
                            ndxPos =
                              void 0 !== lmnt.locator[alternation]
                                ? lmnt.locator[alternation]
                                    .toString()
                                    .indexOf(alternateNdx)
                                : -1;
                          (void 0 === indexPos || ndxPos < indexPos) &&
                            -1 !== ndxPos &&
                            ((bestMatch = lmnt), (indexPos = ndxPos));
                        }
                      ),
                    bestMatch)
                  ) {
                    var bestMatchAltIndex =
                        bestMatch.locator[bestMatch.alternation],
                      locator =
                        bestMatch.mloc[alternateNdx] ||
                        bestMatch.mloc[bestMatchAltIndex] ||
                        bestMatch.locator;
                    return locator.slice(
                      (void 0 !== targetAlternation
                        ? targetAlternation
                        : bestMatch.alternation) + 1
                    );
                  }
                  return void 0 !== targetAlternation
                    ? resolveNdxInitializer(pos, alternateNdx)
                    : void 0;
                }
                function isSubsetOf(source, target) {
                  function expand(pattern) {
                    for (
                      var expanded = [],
                        start = -1,
                        end,
                        i = 0,
                        l = pattern.length;
                      i < l;
                      i++
                    )
                      if ("-" === pattern.charAt(i))
                        for (end = pattern.charCodeAt(i + 1); ++start < end; )
                          expanded.push(String.fromCharCode(start));
                      else
                        (start = pattern.charCodeAt(i)),
                          expanded.push(pattern.charAt(i));
                    return expanded.join("");
                  }
                  return (
                    source.match.def === target.match.nativeDef ||
                    ((opts.regex ||
                      (source.match.fn instanceof RegExp &&
                        target.match.fn instanceof RegExp)) &&
                      !0 !== source.match.static &&
                      !0 !== target.match.static &&
                      -1 !==
                        expand(
                          target.match.fn.toString().replace(/[[\]/]/g, "")
                        ).indexOf(
                          expand(
                            source.match.fn.toString().replace(/[[\]/]/g, "")
                          )
                        ))
                  );
                }
                function staticCanMatchDefinition(source, target) {
                  return (
                    !0 === source.match.static &&
                    !0 !== target.match.static &&
                    target.match.fn.test(
                      source.match.def,
                      maskset,
                      pos,
                      !1,
                      opts,
                      !1
                    )
                  );
                }
                function setMergeLocators(targetMatch, altMatch) {
                  var alternationNdx = targetMatch.alternation,
                    shouldMerge =
                      void 0 === altMatch ||
                      (alternationNdx === altMatch.alternation &&
                        -1 ===
                          targetMatch.locator[alternationNdx]
                            .toString()
                            .indexOf(altMatch.locator[alternationNdx]));
                  if (!shouldMerge && alternationNdx > altMatch.alternation)
                    for (var i = altMatch.alternation; i < alternationNdx; i++)
                      if (targetMatch.locator[i] !== altMatch.locator[i]) {
                        (alternationNdx = i), (shouldMerge = !0);
                        break;
                      }
                  if (shouldMerge) {
                    targetMatch.mloc = targetMatch.mloc || {};
                    var locNdx = targetMatch.locator[alternationNdx];
                    if (void 0 !== locNdx) {
                      if (
                        ("string" == typeof locNdx &&
                          (locNdx = locNdx.split(",")[0]),
                        void 0 === targetMatch.mloc[locNdx] &&
                          (targetMatch.mloc[
                            locNdx
                          ] = targetMatch.locator.slice()),
                        void 0 !== altMatch)
                      ) {
                        for (var ndx in altMatch.mloc)
                          "string" == typeof ndx && (ndx = ndx.split(",")[0]),
                            void 0 === targetMatch.mloc[ndx] &&
                              (targetMatch.mloc[ndx] = altMatch.mloc[ndx]);
                        targetMatch.locator[alternationNdx] = Object.keys(
                          targetMatch.mloc
                        ).join(",");
                      }
                      return 1;
                    }
                    targetMatch.alternation = void 0;
                  }
                }
                function isSameLevel(targetMatch, altMatch) {
                  if (targetMatch.locator.length === altMatch.locator.length) {
                    for (
                      var locNdx = targetMatch.alternation + 1;
                      locNdx < targetMatch.locator.length;
                      locNdx++
                    )
                      if (
                        targetMatch.locator[locNdx] !== altMatch.locator[locNdx]
                      )
                        return;
                    return 1;
                  }
                }
                if (testPos > pos + opts._maxTestPos)
                  throw (
                    "Inputmask: There is probably an error in your mask definition or in the code. Create an issue on github with an example of the mask you are using. " +
                    maskset.mask
                  );
                if (testPos === pos && void 0 === match.matches)
                  return (
                    matches.push({
                      match: match,
                      locator: loopNdx.reverse(),
                      cd: cacheDependency,
                      mloc: {},
                    }),
                    !0
                  );
                if (void 0 !== match.matches) {
                  if (match.isGroup && quantifierRecurse !== match) {
                    if (
                      ((match = handleMatch(
                        maskToken.matches[
                          $.inArray(match, maskToken.matches) + 1
                        ],
                        loopNdx,
                        quantifierRecurse
                      )),
                      match)
                    )
                      return !0;
                  } else if (match.isOptional) {
                    var optionalToken = match,
                      mtchsNdx = matches.length;
                    if (
                      ((match = resolveTestFromToken(
                        match,
                        ndxInitializer,
                        loopNdx,
                        quantifierRecurse
                      )),
                      match)
                    ) {
                      if (
                        ($.each(matches, function (ndx, mtch) {
                          mtchsNdx <= ndx && (mtch.match.optionality = !0);
                        }),
                        (latestMatch = matches[matches.length - 1].match),
                        void 0 !== quantifierRecurse ||
                          !isFirstMatch(latestMatch, optionalToken))
                      )
                        return !0;
                      (insertStop = !0), (testPos = pos);
                    }
                  } else if (match.isAlternator) {
                    var alternateToken = match,
                      malternateMatches = [],
                      maltMatches,
                      currentMatches = matches.slice(),
                      loopNdxCnt = loopNdx.length,
                      altIndex =
                        0 < ndxInitializer.length ? ndxInitializer.shift() : -1;
                    if (-1 === altIndex || "string" == typeof altIndex) {
                      var currentPos = testPos,
                        ndxInitializerClone = ndxInitializer.slice(),
                        altIndexArr = [],
                        amndx;
                      if ("string" == typeof altIndex)
                        altIndexArr = altIndex.split(",");
                      else
                        for (
                          amndx = 0;
                          amndx < alternateToken.matches.length;
                          amndx++
                        )
                          altIndexArr.push(amndx.toString());
                      if (void 0 !== maskset.excludes[pos]) {
                        for (
                          var altIndexArrClone = altIndexArr.slice(),
                            i = 0,
                            exl = maskset.excludes[pos].length;
                          i < exl;
                          i++
                        ) {
                          var excludeSet = maskset.excludes[pos][i]
                            .toString()
                            .split(":");
                          loopNdx.length == excludeSet[1] &&
                            altIndexArr.splice(
                              altIndexArr.indexOf(excludeSet[0]),
                              1
                            );
                        }
                        0 === altIndexArr.length &&
                          (delete maskset.excludes[pos],
                          (altIndexArr = altIndexArrClone));
                      }
                      (!0 === opts.keepStatic ||
                        (isFinite(parseInt(opts.keepStatic)) &&
                          currentPos >= opts.keepStatic)) &&
                        (altIndexArr = altIndexArr.slice(0, 1));
                      for (
                        var unMatchedAlternation = !1, ndx = 0;
                        ndx < altIndexArr.length;
                        ndx++
                      ) {
                        (amndx = parseInt(altIndexArr[ndx])),
                          (matches = []),
                          (ndxInitializer =
                            ("string" == typeof altIndex &&
                              resolveNdxInitializer(
                                testPos,
                                amndx,
                                loopNdxCnt
                              )) ||
                            ndxInitializerClone.slice()),
                          alternateToken.matches[amndx] &&
                          handleMatch(
                            alternateToken.matches[amndx],
                            [amndx].concat(loopNdx),
                            quantifierRecurse
                          )
                            ? (match = !0)
                            : 0 === ndx && (unMatchedAlternation = !0),
                          (maltMatches = matches.slice()),
                          (testPos = currentPos),
                          (matches = []);
                        for (var ndx1 = 0; ndx1 < maltMatches.length; ndx1++) {
                          var altMatch = maltMatches[ndx1],
                            dropMatch = !1;
                          (altMatch.match.jit =
                            altMatch.match.jit || unMatchedAlternation),
                            (altMatch.alternation =
                              altMatch.alternation || loopNdxCnt),
                            setMergeLocators(altMatch);
                          for (
                            var ndx2 = 0;
                            ndx2 < malternateMatches.length;
                            ndx2++
                          ) {
                            var altMatch2 = malternateMatches[ndx2];
                            if (
                              "string" != typeof altIndex ||
                              (void 0 !== altMatch.alternation &&
                                -1 !==
                                  $.inArray(
                                    altMatch.locator[
                                      altMatch.alternation
                                    ].toString(),
                                    altIndexArr
                                  ))
                            ) {
                              if (
                                altMatch.match.nativeDef ===
                                altMatch2.match.nativeDef
                              ) {
                                (dropMatch = !0),
                                  setMergeLocators(altMatch2, altMatch);
                                break;
                              }
                              if (isSubsetOf(altMatch, altMatch2)) {
                                setMergeLocators(altMatch, altMatch2) &&
                                  ((dropMatch = !0),
                                  malternateMatches.splice(
                                    malternateMatches.indexOf(altMatch2),
                                    0,
                                    altMatch
                                  ));
                                break;
                              }
                              if (isSubsetOf(altMatch2, altMatch)) {
                                setMergeLocators(altMatch2, altMatch);
                                break;
                              }
                              if (
                                staticCanMatchDefinition(altMatch, altMatch2)
                              ) {
                                isSameLevel(altMatch, altMatch2) ||
                                void 0 !== el.inputmask.userOptions.keepStatic
                                  ? setMergeLocators(altMatch, altMatch2) &&
                                    ((dropMatch = !0),
                                    malternateMatches.splice(
                                      malternateMatches.indexOf(altMatch2),
                                      0,
                                      altMatch
                                    ))
                                  : (opts.keepStatic = !0);
                                break;
                              }
                            }
                          }
                          dropMatch || malternateMatches.push(altMatch);
                        }
                      }
                      (matches = currentMatches.concat(malternateMatches)),
                        (testPos = pos),
                        (insertStop = 0 < matches.length),
                        (match = 0 < malternateMatches.length),
                        (ndxInitializer = ndxInitializerClone.slice());
                    } else
                      match = handleMatch(
                        alternateToken.matches[altIndex] ||
                          maskToken.matches[altIndex],
                        [altIndex].concat(loopNdx),
                        quantifierRecurse
                      );
                    if (match) return !0;
                  } else if (
                    match.isQuantifier &&
                    quantifierRecurse !==
                      maskToken.matches[$.inArray(match, maskToken.matches) - 1]
                  )
                    for (
                      var qt = match,
                        qndx =
                          0 < ndxInitializer.length
                            ? ndxInitializer.shift()
                            : 0;
                      qndx <
                        (isNaN(qt.quantifier.max)
                          ? qndx + 1
                          : qt.quantifier.max) && testPos <= pos;
                      qndx++
                    ) {
                      var tokenGroup =
                        maskToken.matches[$.inArray(qt, maskToken.matches) - 1];
                      if (
                        ((match = handleMatch(
                          tokenGroup,
                          [qndx].concat(loopNdx),
                          tokenGroup
                        )),
                        match)
                      ) {
                        if (
                          ((latestMatch = matches[matches.length - 1].match),
                          (latestMatch.optionalQuantifier =
                            qndx >= qt.quantifier.min),
                          (latestMatch.jit =
                            (qndx || 1) *
                              tokenGroup.matches.indexOf(latestMatch) >=
                            qt.quantifier.jit),
                          latestMatch.optionalQuantifier &&
                            isFirstMatch(latestMatch, tokenGroup))
                        ) {
                          (insertStop = !0), (testPos = pos);
                          break;
                        }
                        return (
                          latestMatch.jit &&
                            (maskset.jitOffset[pos] =
                              tokenGroup.matches.length -
                              tokenGroup.matches.indexOf(latestMatch)),
                          !0
                        );
                      }
                    }
                  else if (
                    ((match = resolveTestFromToken(
                      match,
                      ndxInitializer,
                      loopNdx,
                      quantifierRecurse
                    )),
                    match)
                  )
                    return !0;
                } else testPos++;
              }
              for (
                var tndx =
                  0 < ndxInitializer.length ? ndxInitializer.shift() : 0;
                tndx < maskToken.matches.length;
                tndx++
              )
                if (!0 !== maskToken.matches[tndx].isQuantifier) {
                  var match = handleMatch(
                    maskToken.matches[tndx],
                    [tndx].concat(loopNdx),
                    quantifierRecurse
                  );
                  if (match && testPos === pos) return match;
                  if (pos < testPos) break;
                }
            }
            function mergeLocators(pos, tests) {
              var locator = [];
              return (
                $.isArray(tests) || (tests = [tests]),
                0 < tests.length &&
                  (void 0 === tests[0].alternation || !0 === opts.keepStatic
                    ? ((locator = determineTestTemplate(
                        pos,
                        tests.slice()
                      ).locator.slice()),
                      0 === locator.length &&
                        (locator = tests[0].locator.slice()))
                    : $.each(tests, function (ndx, tst) {
                        if ("" !== tst.def)
                          if (0 === locator.length)
                            locator = tst.locator.slice();
                          else
                            for (var i = 0; i < locator.length; i++)
                              tst.locator[i] &&
                                -1 ===
                                  locator[i]
                                    .toString()
                                    .indexOf(tst.locator[i]) &&
                                (locator[i] += "," + tst.locator[i]);
                      })),
                locator
              );
            }
            if (
              -1 < pos &&
              (void 0 === inputmask.maxLength || pos < inputmask.maxLength)
            ) {
              if (void 0 === ndxIntlzr) {
                for (
                  var previousPos = pos - 1, test;
                  void 0 ===
                    (test =
                      maskset.validPositions[previousPos] ||
                      maskset.tests[previousPos]) && -1 < previousPos;

                )
                  previousPos--;
                void 0 !== test &&
                  -1 < previousPos &&
                  ((ndxInitializer = mergeLocators(previousPos, test)),
                  (cacheDependency = ndxInitializer.join("")),
                  (testPos = previousPos));
              }
              if (
                maskset.tests[pos] &&
                maskset.tests[pos][0].cd === cacheDependency
              )
                return maskset.tests[pos];
              for (
                var mtndx = ndxInitializer.shift();
                mtndx < maskTokens.length;
                mtndx++
              ) {
                var match = resolveTestFromToken(
                  maskTokens[mtndx],
                  ndxInitializer,
                  [mtndx]
                );
                if ((match && testPos === pos) || pos < testPos) break;
              }
            }
            return (
              (0 !== matches.length && !insertStop) ||
                matches.push({
                  match: {
                    fn: null,
                    static: !0,
                    optionality: !1,
                    casing: null,
                    def: "",
                    placeholder: "",
                  },
                  locator: [],
                  mloc: {},
                  cd: cacheDependency,
                }),
              void 0 !== ndxIntlzr && maskset.tests[pos]
                ? $.extend(!0, [], matches)
                : ((maskset.tests[pos] = $.extend(!0, [], matches)),
                  maskset.tests[pos])
            );
          }
          function getBufferTemplate() {
            return (
              void 0 === maskset._buffer &&
                ((maskset._buffer = getMaskTemplate(!1, 1)),
                void 0 === maskset.buffer &&
                  (maskset.buffer = maskset._buffer.slice())),
              maskset._buffer
            );
          }
          function getBuffer(noCache) {
            return (
              (void 0 !== maskset.buffer && !0 !== noCache) ||
                ((maskset.buffer = getMaskTemplate(
                  !0,
                  getLastValidPosition(),
                  !0
                )),
                void 0 === maskset._buffer &&
                  (maskset._buffer = maskset.buffer.slice())),
              maskset.buffer
            );
          }
          function refreshFromBuffer(start, end, buffer) {
            var i,
              p,
              skipOptionalPartCharacter = opts.skipOptionalPartCharacter,
              bffr = isRTL ? buffer.slice().reverse() : buffer;
            if (((opts.skipOptionalPartCharacter = ""), !0 === start))
              resetMaskSet(),
                (maskset.tests = {}),
                (start = 0),
                (end = buffer.length),
                (p = determineNewCaretPosition({ begin: 0, end: 0 }, !1).begin);
            else {
              for (i = start; i < end; i++) delete maskset.validPositions[i];
              p = start;
            }
            var keypress = new $.Event("keypress");
            for (i = start; i < end; i++) {
              (keypress.which = bffr[i].toString().charCodeAt(0)),
                (inputmask.ignorable = !1);
              var valResult = EventHandlers.keypressEvent.call(
                el,
                keypress,
                !0,
                !1,
                !1,
                p
              );
              !1 !== valResult && (p = valResult.forwardPosition);
            }
            opts.skipOptionalPartCharacter = skipOptionalPartCharacter;
          }
          function casing(elem, test, pos) {
            switch (opts.casing || test.casing) {
              case "upper":
                elem = elem.toUpperCase();
                break;
              case "lower":
                elem = elem.toLowerCase();
                break;
              case "title":
                var posBefore = maskset.validPositions[pos - 1];
                elem =
                  0 === pos ||
                  (posBefore &&
                    posBefore.input === String.fromCharCode(keyCode.SPACE))
                    ? elem.toUpperCase()
                    : elem.toLowerCase();
                break;
              default:
                if ($.isFunction(opts.casing)) {
                  var args = Array.prototype.slice.call(arguments);
                  args.push(maskset.validPositions),
                    (elem = opts.casing.apply(this, args));
                }
            }
            return elem;
          }
          function checkAlternationMatch(altArr1, altArr2, na) {
            for (
              var altArrC = opts.greedy ? altArr2 : altArr2.slice(0, 1),
                isMatch = !1,
                naArr = void 0 !== na ? na.split(",") : [],
                naNdx,
                i = 0;
              i < naArr.length;
              i++
            )
              -1 !== (naNdx = altArr1.indexOf(naArr[i])) &&
                altArr1.splice(naNdx, 1);
            for (var alndx = 0; alndx < altArr1.length; alndx++)
              if (-1 !== $.inArray(altArr1[alndx], altArrC)) {
                isMatch = !0;
                break;
              }
            return isMatch;
          }
          function alternate(
            maskPos,
            c,
            strict,
            fromIsValid,
            rAltPos,
            selection
          ) {
            var validPsClone = $.extend(!0, {}, maskset.validPositions),
              tstClone = $.extend(!0, {}, maskset.tests),
              lastAlt,
              alternation,
              isValidRslt = !1,
              returnRslt = !1,
              altPos,
              prevAltPos,
              i,
              validPos,
              decisionPos,
              lAltPos = void 0 !== rAltPos ? rAltPos : getLastValidPosition(),
              nextPos,
              input,
              begin,
              end;
            if (
              (selection &&
                ((begin = selection.begin),
                (end = selection.end),
                selection.begin > selection.end &&
                  ((begin = selection.end), (end = selection.begin))),
              -1 === lAltPos && void 0 === rAltPos)
            )
              (lastAlt = 0),
                (prevAltPos = getTest(lastAlt)),
                (alternation = prevAltPos.alternation);
            else
              for (; 0 <= lAltPos; lAltPos--)
                if (
                  ((altPos = maskset.validPositions[lAltPos]),
                  altPos && void 0 !== altPos.alternation)
                ) {
                  if (
                    prevAltPos &&
                    prevAltPos.locator[altPos.alternation] !==
                      altPos.locator[altPos.alternation]
                  )
                    break;
                  (lastAlt = lAltPos),
                    (alternation = maskset.validPositions[lastAlt].alternation),
                    (prevAltPos = altPos);
                }
            if (void 0 !== alternation) {
              (decisionPos = parseInt(lastAlt)),
                (maskset.excludes[decisionPos] =
                  maskset.excludes[decisionPos] || []),
                !0 !== maskPos &&
                  maskset.excludes[decisionPos].push(
                    getDecisionTaker(prevAltPos) + ":" + prevAltPos.alternation
                  );
              var validInputs = [],
                resultPos = -1;
              for (
                i = decisionPos;
                i < getLastValidPosition(void 0, !0) + 1;
                i++
              )
                -1 === resultPos &&
                  maskPos <= i &&
                  void 0 !== c &&
                  (validInputs.push(c), (resultPos = validInputs.length - 1)),
                  (validPos = maskset.validPositions[i]),
                  validPos &&
                    !0 !== validPos.generatedInput &&
                    (void 0 === selection || i < begin || end <= i) &&
                    validInputs.push(validPos.input),
                  delete maskset.validPositions[i];
              for (
                -1 === resultPos &&
                void 0 !== c &&
                (validInputs.push(c), (resultPos = validInputs.length - 1));
                void 0 !== maskset.excludes[decisionPos] &&
                maskset.excludes[decisionPos].length < 10;

              ) {
                for (
                  maskset.tests = {}, resetMaskSet(!0), isValidRslt = !0, i = 0;
                  i < validInputs.length &&
                  ((nextPos =
                    isValidRslt.caret || getLastValidPosition(void 0, !0) + 1),
                  (input = validInputs[i]),
                  (isValidRslt = isValid(nextPos, input, !1, fromIsValid, !0)));
                  i++
                )
                  i === resultPos && (returnRslt = isValidRslt),
                    1 == maskPos &&
                      isValidRslt &&
                      (returnRslt = { caretPos: i });
                if (isValidRslt) break;
                if (
                  (resetMaskSet(),
                  (prevAltPos = getTest(decisionPos)),
                  (maskset.validPositions = $.extend(!0, {}, validPsClone)),
                  (maskset.tests = $.extend(!0, {}, tstClone)),
                  !maskset.excludes[decisionPos])
                ) {
                  returnRslt = alternate(
                    maskPos,
                    c,
                    strict,
                    fromIsValid,
                    decisionPos - 1,
                    selection
                  );
                  break;
                }
                var decisionTaker = getDecisionTaker(prevAltPos);
                if (
                  -1 !==
                  maskset.excludes[decisionPos].indexOf(
                    decisionTaker + ":" + prevAltPos.alternation
                  )
                ) {
                  returnRslt = alternate(
                    maskPos,
                    c,
                    strict,
                    fromIsValid,
                    decisionPos - 1,
                    selection
                  );
                  break;
                }
                for (
                  maskset.excludes[decisionPos].push(
                    decisionTaker + ":" + prevAltPos.alternation
                  ),
                    i = decisionPos;
                  i < getLastValidPosition(void 0, !0) + 1;
                  i++
                )
                  delete maskset.validPositions[i];
              }
            }
            return (
              (returnRslt && !1 === opts.keepStatic) ||
                delete maskset.excludes[decisionPos],
              returnRslt
            );
          }
          function isValid(
            pos,
            c,
            strict,
            fromIsValid,
            fromAlternate,
            validateOnly,
            fromCheckval
          ) {
            function isSelection(posObj) {
              return isRTL
                ? 1 < posObj.begin - posObj.end ||
                    posObj.begin - posObj.end == 1
                : 1 < posObj.end - posObj.begin ||
                    posObj.end - posObj.begin == 1;
            }
            strict = !0 === strict;
            var maskPos = pos;
            function processCommandObject(commandObj) {
              if (void 0 !== commandObj) {
                if (
                  (void 0 !== commandObj.remove &&
                    ($.isArray(commandObj.remove) ||
                      (commandObj.remove = [commandObj.remove]),
                    $.each(
                      commandObj.remove.sort(function (a, b) {
                        return b.pos - a.pos;
                      }),
                      function (ndx, lmnt) {
                        revalidateMask({ begin: lmnt, end: lmnt + 1 });
                      }
                    ),
                    (commandObj.remove = void 0)),
                  void 0 !== commandObj.insert &&
                    ($.isArray(commandObj.insert) ||
                      (commandObj.insert = [commandObj.insert]),
                    $.each(
                      commandObj.insert.sort(function (a, b) {
                        return a.pos - b.pos;
                      }),
                      function (ndx, lmnt) {
                        "" !== lmnt.c &&
                          isValid(
                            lmnt.pos,
                            lmnt.c,
                            void 0 === lmnt.strict || lmnt.strict,
                            void 0 !== lmnt.fromIsValid
                              ? lmnt.fromIsValid
                              : fromIsValid
                          );
                      }
                    ),
                    (commandObj.insert = void 0)),
                  commandObj.refreshFromBuffer && commandObj.buffer)
                ) {
                  var refresh = commandObj.refreshFromBuffer;
                  refreshFromBuffer(
                    !0 === refresh ? refresh : refresh.start,
                    refresh.end,
                    commandObj.buffer
                  ),
                    (commandObj.refreshFromBuffer = void 0);
                }
                void 0 !== commandObj.rewritePosition &&
                  ((maskPos = commandObj.rewritePosition), (commandObj = !0));
              }
              return commandObj;
            }
            function _isValid(position, c, strict) {
              var rslt = !1;
              return (
                $.each(getTests(position), function (ndx, tst) {
                  var test = tst.match;
                  if (
                    (getBuffer(!0),
                    (rslt =
                      null != test.fn
                        ? test.fn.test(
                            c,
                            maskset,
                            position,
                            strict,
                            opts,
                            isSelection(pos)
                          )
                        : (c === test.def ||
                            c === opts.skipOptionalPartCharacter) &&
                          "" !== test.def && {
                            c: getPlaceholder(position, test, !0) || test.def,
                            pos: position,
                          }),
                    !1 !== rslt)
                  ) {
                    var elem = void 0 !== rslt.c ? rslt.c : c,
                      validatedPos = position;
                    return ((elem =
                      elem === opts.skipOptionalPartCharacter &&
                      !0 === test.static
                        ? getPlaceholder(position, test, !0) || test.def
                        : elem),
                    (rslt = processCommandObject(rslt)),
                    !0 !== rslt &&
                      void 0 !== rslt.pos &&
                      rslt.pos !== position &&
                      (validatedPos = rslt.pos),
                    !0 !== rslt && void 0 === rslt.pos && void 0 === rslt.c)
                      ? !1
                      : (!1 ===
                          revalidateMask(
                            pos,
                            $.extend({}, tst, {
                              input: casing(elem, test, validatedPos),
                            }),
                            fromIsValid,
                            validatedPos
                          ) && (rslt = !1),
                        !1);
                  }
                }),
                rslt
              );
            }
            void 0 !== pos.begin && (maskPos = isRTL ? pos.end : pos.begin);
            var result = !0,
              positionsClone = $.extend(!0, {}, maskset.validPositions);
            if (
              !1 === opts.keepStatic &&
              void 0 !== maskset.excludes[maskPos] &&
              !0 !== fromAlternate &&
              !0 !== fromIsValid
            )
              for (var i = maskPos; i < (isRTL ? pos.begin : pos.end); i++)
                void 0 !== maskset.excludes[i] &&
                  ((maskset.excludes[i] = void 0), delete maskset.tests[i]);
            if (
              ($.isFunction(opts.preValidation) &&
                !0 !== fromIsValid &&
                !0 !== validateOnly &&
                ((result = opts.preValidation.call(
                  el,
                  getBuffer(),
                  maskPos,
                  c,
                  isSelection(pos),
                  opts,
                  maskset,
                  pos,
                  strict || fromAlternate
                )),
                (result = processCommandObject(result))),
              !0 === result)
            ) {
              if (
                void 0 === inputmask.maxLength ||
                maskPos < inputmask.maxLength
              ) {
                if (
                  ((result = _isValid(maskPos, c, strict)),
                  (!strict || !0 === fromIsValid) &&
                    !1 === result &&
                    !0 !== validateOnly)
                ) {
                  var currentPosValid = maskset.validPositions[maskPos];
                  if (
                    !currentPosValid ||
                    !0 !== currentPosValid.match.static ||
                    (currentPosValid.match.def !== c &&
                      c !== opts.skipOptionalPartCharacter)
                  ) {
                    if (
                      opts.insertMode ||
                      void 0 === maskset.validPositions[seekNext(maskPos)] ||
                      pos.end > maskPos
                    ) {
                      var skip = !1;
                      if (
                        (maskset.jitOffset[maskPos] &&
                          void 0 ===
                            maskset.validPositions[seekNext(maskPos)] &&
                          ((result = isValid(
                            maskPos + maskset.jitOffset[maskPos],
                            c,
                            !0
                          )),
                          !1 !== result &&
                            (!0 !== fromAlternate && (result.caret = maskPos),
                            (skip = !0))),
                        pos.end > maskPos &&
                          (maskset.validPositions[maskPos] = void 0),
                        !skip && !isMask(maskPos, opts.keepStatic))
                      )
                        for (
                          var nPos = maskPos + 1, snPos = seekNext(maskPos);
                          nPos <= snPos;
                          nPos++
                        )
                          if (
                            ((result = _isValid(nPos, c, strict)),
                            !1 !== result)
                          ) {
                            (result =
                              trackbackPositions(
                                maskPos,
                                void 0 !== result.pos ? result.pos : nPos
                              ) || result),
                              (maskPos = nPos);
                            break;
                          }
                    }
                  } else result = { caret: seekNext(maskPos) };
                }
              } else result = !1;
              !1 !== result ||
              !opts.keepStatic ||
              (!isComplete(getBuffer()) && 0 !== maskPos) ||
              strict ||
              !0 === fromAlternate
                ? isSelection(pos) &&
                  maskset.tests[maskPos] &&
                  1 < maskset.tests[maskPos].length &&
                  opts.keepStatic &&
                  !strict &&
                  !0 !== fromAlternate &&
                  (result = alternate(!0))
                : (result = alternate(
                    maskPos,
                    c,
                    strict,
                    fromIsValid,
                    void 0,
                    pos
                  )),
                !0 === result && (result = { pos: maskPos });
            }
            if (
              $.isFunction(opts.postValidation) &&
              !0 !== fromIsValid &&
              !0 !== validateOnly
            ) {
              var postResult = opts.postValidation.call(
                el,
                getBuffer(!0),
                void 0 !== pos.begin ? (isRTL ? pos.end : pos.begin) : pos,
                c,
                result,
                opts,
                maskset,
                strict,
                fromCheckval
              );
              void 0 !== postResult &&
                (result = !0 === postResult ? result : postResult);
            }
            result && void 0 === result.pos && (result.pos = maskPos),
              !1 === result || !0 === validateOnly
                ? (resetMaskSet(!0),
                  (maskset.validPositions = $.extend(!0, {}, positionsClone)))
                : trackbackPositions(void 0, maskPos, !0);
            var endResult = processCommandObject(result);
            return endResult;
          }
          function trackbackPositions(originalPos, newPos, fillOnly) {
            if (void 0 === originalPos)
              for (
                originalPos = newPos - 1;
                0 < originalPos && !maskset.validPositions[originalPos];
                originalPos--
              );
            for (var ps = originalPos; ps < newPos; ps++)
              if (void 0 === maskset.validPositions[ps] && !isMask(ps, !0)) {
                var vp = 0 == ps ? getTest(ps) : maskset.validPositions[ps - 1];
                if (vp) {
                  var tests = getTests(ps).slice();
                  "" === tests[tests.length - 1].match.def && tests.pop();
                  var bestMatch = determineTestTemplate(ps, tests),
                    np;
                  if (
                    bestMatch &&
                    (!0 !== bestMatch.match.jit ||
                      ("master" === bestMatch.match.newBlockMarker &&
                        (np = maskset.validPositions[ps + 1]) &&
                        !0 === np.match.optionalQuantifier)) &&
                    ((bestMatch = $.extend({}, bestMatch, {
                      input:
                        getPlaceholder(ps, bestMatch.match, !0) ||
                        bestMatch.match.def,
                    })),
                    (bestMatch.generatedInput = !0),
                    revalidateMask(ps, bestMatch, !0),
                    !0 !== fillOnly)
                  ) {
                    var cvpInput = maskset.validPositions[newPos].input;
                    return (
                      (maskset.validPositions[newPos] = void 0),
                      isValid(newPos, cvpInput, !0, !0)
                    );
                  }
                }
              }
          }
          function revalidateMask(pos, validTest, fromIsValid, validatedPos) {
            function IsEnclosedStatic(pos, valids, selection) {
              var posMatch = valids[pos];
              if (
                void 0 !== posMatch &&
                !0 === posMatch.match.static &&
                !0 !== posMatch.match.optionality &&
                (void 0 === valids[0] || void 0 === valids[0].alternation)
              ) {
                var prevMatch =
                    (!(selection.begin <= pos - 1) ||
                      (valids[pos - 1] &&
                        !0 === valids[pos - 1].match.static)) &&
                    valids[pos - 1],
                  nextMatch =
                    (!(selection.end > pos + 1) ||
                      (valids[pos + 1] &&
                        !0 === valids[pos + 1].match.static)) &&
                    valids[pos + 1];
                return prevMatch && nextMatch;
              }
            }
            var offset = 0,
              begin = void 0 !== pos.begin ? pos.begin : pos,
              end = void 0 !== pos.end ? pos.end : pos;
            if (
              (pos.begin > pos.end && ((begin = pos.end), (end = pos.begin)),
              (validatedPos = void 0 !== validatedPos ? validatedPos : begin),
              begin !== end ||
                (opts.insertMode &&
                  void 0 !== maskset.validPositions[validatedPos] &&
                  void 0 === fromIsValid) ||
                void 0 === validTest)
            ) {
              var positionsClone = $.extend(!0, {}, maskset.validPositions),
                lvp = getLastValidPosition(void 0, !0),
                i;
              for (maskset.p = begin, i = lvp; begin <= i; i--)
                delete maskset.validPositions[i],
                  void 0 === validTest && delete maskset.tests[i + 1];
              var valid = !0,
                j = validatedPos,
                posMatch = j,
                t,
                canMatch;
              for (
                validTest &&
                  ((maskset.validPositions[validatedPos] = $.extend(
                    !0,
                    {},
                    validTest
                  )),
                  posMatch++,
                  j++),
                  i = validTest ? end : end - 1;
                i <= lvp;
                i++
              ) {
                if (
                  void 0 !== (t = positionsClone[i]) &&
                  !0 !== t.generatedInput &&
                  (end <= i ||
                    (begin <= i &&
                      IsEnclosedStatic(i, positionsClone, {
                        begin: begin,
                        end: end,
                      })))
                ) {
                  for (; "" !== getTest(posMatch).match.def; ) {
                    if (
                      !1 !==
                        (canMatch = positionCanMatchDefinition(
                          posMatch,
                          t,
                          opts
                        )) ||
                      "+" === t.match.def
                    ) {
                      "+" === t.match.def && getBuffer(!0);
                      var result = isValid(
                        posMatch,
                        t.input,
                        "+" !== t.match.def,
                        "+" !== t.match.def
                      );
                      if (
                        ((valid = !1 !== result),
                        (j = (result.pos || posMatch) + 1),
                        !valid && canMatch)
                      )
                        break;
                    } else valid = !1;
                    if (valid) {
                      void 0 === validTest &&
                        t.match.static &&
                        i === pos.begin &&
                        offset++;
                      break;
                    }
                    if (!valid && posMatch > maskset.maskLength) break;
                    posMatch++;
                  }
                  "" == getTest(posMatch).match.def && (valid = !1),
                    (posMatch = j);
                }
                if (!valid) break;
              }
              if (!valid)
                return (
                  (maskset.validPositions = $.extend(!0, {}, positionsClone)),
                  resetMaskSet(!0),
                  !1
                );
            } else
              validTest &&
                getTest(validatedPos).match.cd === validTest.match.cd &&
                (maskset.validPositions[validatedPos] = $.extend(
                  !0,
                  {},
                  validTest
                ));
            return resetMaskSet(!0), offset;
          }
          function isMask(pos, strict, fuzzy) {
            var test = getTestTemplate(pos).match;
            if (
              ("" === test.def && (test = getTest(pos).match),
              !0 !== test.static)
            )
              return test.fn;
            if (
              !0 === fuzzy &&
              void 0 !== maskset.validPositions[pos] &&
              !0 !== maskset.validPositions[pos].generatedInput
            )
              return 1;
            if (!0 !== strict && -1 < pos) {
              if (fuzzy) {
                var tests = getTests(pos);
                return (
                  tests.length >
                  1 + ("" === tests[tests.length - 1].match.def ? 1 : 0)
                );
              }
              var testTemplate = determineTestTemplate(pos, getTests(pos)),
                testPlaceHolder = getPlaceholder(pos, testTemplate.match);
              return testTemplate.match.def !== testPlaceHolder;
            }
          }
          function seekNext(pos, newBlock, fuzzy) {
            void 0 === fuzzy && (fuzzy = !0);
            for (
              var position = pos + 1;
              "" !== getTest(position).match.def &&
              ((!0 === newBlock &&
                (!0 !== getTest(position).match.newBlockMarker ||
                  !isMask(position, void 0, !0))) ||
                (!0 !== newBlock && !isMask(position, void 0, fuzzy)));

            )
              position++;
            return position;
          }
          function seekPrevious(pos, newBlock) {
            var position = pos,
              tests;
            if (position <= 0) return 0;
            for (
              ;
              0 < --position &&
              ((!0 === newBlock &&
                !0 !== getTest(position).match.newBlockMarker) ||
                (!0 !== newBlock &&
                  !isMask(position, void 0, !0) &&
                  ((tests = getTests(position)),
                  tests.length < 2 ||
                    (2 === tests.length && "" === tests[1].match.def))));

            );
            return position;
          }
          function writeBuffer(input, buffer, caretPos, event, triggerEvents) {
            if (event && $.isFunction(opts.onBeforeWrite)) {
              var result = opts.onBeforeWrite.call(
                inputmask,
                event,
                buffer,
                caretPos,
                opts
              );
              if (result) {
                if (result.refreshFromBuffer) {
                  var refresh = result.refreshFromBuffer;
                  refreshFromBuffer(
                    !0 === refresh ? refresh : refresh.start,
                    refresh.end,
                    result.buffer || buffer
                  ),
                    (buffer = getBuffer(!0));
                }
                void 0 !== caretPos &&
                  (caretPos =
                    void 0 !== result.caret ? result.caret : caretPos);
              }
            }
            if (
              void 0 !== input &&
              (input.inputmask._valueSet(buffer.join("")),
              void 0 === caretPos ||
                (void 0 !== event && "blur" === event.type) ||
                caret(
                  input,
                  caretPos,
                  void 0,
                  void 0,
                  void 0 !== event &&
                    "keydown" === event.type &&
                    (event.keyCode === keyCode.DELETE ||
                      event.keyCode === keyCode.BACKSPACE)
                ),
              !0 === triggerEvents)
            ) {
              var $input = $(input),
                nptVal = input.inputmask._valueGet();
              (input.inputmask.skipInputEvent = !0),
                $input.trigger("input"),
                setTimeout(function () {
                  nptVal === getBufferTemplate().join("")
                    ? $input.trigger("cleared")
                    : !0 === isComplete(buffer) && $input.trigger("complete");
                }, 0);
            }
          }
          function getPlaceholder(pos, test, returnPL) {
            if (
              ((test = test || getTest(pos).match),
              void 0 !== test.placeholder || !0 === returnPL)
            )
              return $.isFunction(test.placeholder)
                ? test.placeholder(opts)
                : test.placeholder;
            if (!0 !== test.static)
              return opts.placeholder.charAt(pos % opts.placeholder.length);
            if (-1 < pos && void 0 === maskset.validPositions[pos]) {
              var tests = getTests(pos),
                staticAlternations = [],
                prevTest;
              if (
                tests.length >
                1 + ("" === tests[tests.length - 1].match.def ? 1 : 0)
              )
                for (var i = 0; i < tests.length; i++)
                  if (
                    "" !== tests[i].match.def &&
                    !0 !== tests[i].match.optionality &&
                    !0 !== tests[i].match.optionalQuantifier &&
                    (!0 === tests[i].match.static ||
                      void 0 === prevTest ||
                      !1 !==
                        tests[i].match.fn.test(
                          prevTest.match.def,
                          maskset,
                          pos,
                          !0,
                          opts
                        )) &&
                    (staticAlternations.push(tests[i]),
                    !0 === tests[i].match.static && (prevTest = tests[i]),
                    1 < staticAlternations.length &&
                      /[0-9a-bA-Z]/.test(staticAlternations[0].match.def))
                  )
                    return opts.placeholder.charAt(
                      pos % opts.placeholder.length
                    );
            }
            return test.def;
          }
          function HandleNativePlaceholder(npt, value) {
            if (ie) {
              if (
                npt.inputmask._valueGet() !== value &&
                (npt.placeholder !== value || "" === npt.placeholder)
              ) {
                var buffer = getBuffer().slice(),
                  nptValue = npt.inputmask._valueGet();
                if (nptValue !== value) {
                  var lvp = getLastValidPosition();
                  -1 === lvp && nptValue === getBufferTemplate().join("")
                    ? (buffer = [])
                    : -1 !== lvp && clearOptionalTail(buffer),
                    writeBuffer(npt, buffer);
                }
              }
            } else
              npt.placeholder !== value &&
                ((npt.placeholder = value),
                "" === npt.placeholder && npt.removeAttribute("placeholder"));
          }
          function determineNewCaretPosition(selectedCaret, tabbed) {
            function doRadixFocus(clickPos) {
              if ("" !== opts.radixPoint && 0 !== opts.digits) {
                var vps = maskset.validPositions;
                if (
                  void 0 === vps[clickPos] ||
                  vps[clickPos].input === getPlaceholder(clickPos)
                ) {
                  if (clickPos < seekNext(-1)) return 1;
                  var radixPos = $.inArray(opts.radixPoint, getBuffer());
                  if (-1 !== radixPos) {
                    for (var vp in vps)
                      if (
                        vps[vp] &&
                        radixPos < vp &&
                        vps[vp].input !== getPlaceholder(vp)
                      )
                        return;
                    return 1;
                  }
                }
              }
            }
            if (
              (tabbed &&
                (isRTL
                  ? (selectedCaret.end = selectedCaret.begin)
                  : (selectedCaret.begin = selectedCaret.end)),
              selectedCaret.begin === selectedCaret.end)
            ) {
              switch (opts.positionCaretOnClick) {
                case "none":
                  break;
                case "select":
                  selectedCaret = { begin: 0, end: getBuffer().length };
                  break;
                case "ignore":
                  selectedCaret.end = selectedCaret.begin = seekNext(
                    getLastValidPosition()
                  );
                  break;
                case "radixFocus":
                  if (doRadixFocus(selectedCaret.begin)) {
                    var radixPos = getBuffer()
                      .join("")
                      .indexOf(opts.radixPoint);
                    selectedCaret.end = selectedCaret.begin = opts.numericInput
                      ? seekNext(radixPos)
                      : radixPos;
                    break;
                  }
                default:
                  var clickPosition = selectedCaret.begin,
                    lvclickPosition = getLastValidPosition(clickPosition, !0),
                    lastPosition = seekNext(
                      -1 !== lvclickPosition || isMask(0) ? lvclickPosition : 0
                    );
                  if (clickPosition < lastPosition)
                    selectedCaret.end = selectedCaret.begin =
                      isMask(clickPosition, !0) || isMask(clickPosition - 1, !0)
                        ? clickPosition
                        : seekNext(clickPosition);
                  else {
                    var lvp = maskset.validPositions[lvclickPosition],
                      tt = getTestTemplate(
                        lastPosition,
                        lvp ? lvp.match.locator : void 0,
                        lvp
                      ),
                      placeholder = getPlaceholder(lastPosition, tt.match);
                    if (
                      ("" !== placeholder &&
                        getBuffer()[lastPosition] !== placeholder &&
                        !0 !== tt.match.optionalQuantifier &&
                        !0 !== tt.match.newBlockMarker) ||
                      (!isMask(lastPosition, opts.keepStatic) &&
                        tt.match.def === placeholder)
                    ) {
                      var newPos = seekNext(lastPosition);
                      (newPos <= clickPosition ||
                        clickPosition === lastPosition) &&
                        (lastPosition = newPos);
                    }
                    selectedCaret.end = selectedCaret.begin = lastPosition;
                  }
              }
              return selectedCaret;
            }
          }
          var EventRuler = {
              on: function on(input, eventName, eventHandler) {
                var ev = function ev(e) {
                  e.originalEvent &&
                    ((e = e.originalEvent || e), (arguments[0] = e));
                  var that = this,
                    args,
                    inputmask = that.inputmask;
                  if (void 0 === inputmask && "FORM" !== this.nodeName) {
                    var imOpts = $.data(that, "_inputmask_opts");
                    $(that).off(), imOpts && new Inputmask(imOpts).mask(that);
                  } else {
                    if (
                      "setvalue" === e.type ||
                      "FORM" === this.nodeName ||
                      !(
                        that.disabled ||
                        (that.readOnly &&
                          !(
                            ("keydown" === e.type &&
                              e.ctrlKey &&
                              67 === e.keyCode) ||
                            (!1 === opts.tabThrough &&
                              e.keyCode === keyCode.TAB)
                          ))
                      )
                    ) {
                      switch (e.type) {
                        case "input":
                          if (
                            !0 === inputmask.skipInputEvent ||
                            (e.inputType &&
                              "insertCompositionText" === e.inputType)
                          )
                            return (
                              (inputmask.skipInputEvent = !1),
                              e.preventDefault()
                            );
                          break;
                        case "keydown":
                          (inputmask.skipKeyPressEvent = !1),
                            (inputmask.skipInputEvent = inputmask.isComposing =
                              e.keyCode === keyCode.KEY_229);
                          break;
                        case "keyup":
                        case "compositionend":
                          inputmask.isComposing &&
                            (inputmask.skipInputEvent = !1);
                          break;
                        case "keypress":
                          if (!0 === inputmask.skipKeyPressEvent)
                            return e.preventDefault();
                          inputmask.skipKeyPressEvent = !0;
                          break;
                        case "click":
                        case "focus":
                          return inputmask.validationEvent
                            ? ((inputmask.validationEvent = !1),
                              input.blur(),
                              HandleNativePlaceholder(
                                input,
                                (isRTL
                                  ? getBufferTemplate().slice().reverse()
                                  : getBufferTemplate()
                                ).join("")
                              ),
                              setTimeout(function () {
                                input.focus();
                              }, 3e3),
                              !1)
                            : ((args = arguments),
                              setTimeout(function () {
                                input.inputmask &&
                                  eventHandler.apply(that, args);
                              }, 0),
                              !1);
                      }
                      var returnVal = eventHandler.apply(that, arguments);
                      return (
                        !1 === returnVal &&
                          (e.preventDefault(), e.stopPropagation()),
                        returnVal
                      );
                    }
                    e.preventDefault();
                  }
                };
                (input.inputmask.events[eventName] =
                  input.inputmask.events[eventName] || []),
                  input.inputmask.events[eventName].push(ev),
                  -1 !== $.inArray(eventName, ["submit", "reset"])
                    ? null !== input.form && $(input.form).on(eventName, ev)
                    : $(input).on(eventName, ev);
              },
              off: function off(input, event) {
                var events;
                input.inputmask &&
                  input.inputmask.events &&
                  (event
                    ? ((events = []),
                      (events[event] = input.inputmask.events[event]))
                    : (events = input.inputmask.events),
                  $.each(events, function (eventName, evArr) {
                    for (; 0 < evArr.length; ) {
                      var ev = evArr.pop();
                      -1 !== $.inArray(eventName, ["submit", "reset"])
                        ? null !== input.form &&
                          $(input.form).off(eventName, ev)
                        : $(input).off(eventName, ev);
                    }
                    delete input.inputmask.events[eventName];
                  }));
              },
            },
            EventHandlers = {
              keydownEvent: function keydownEvent(e) {
                var input = this,
                  $input = $(input),
                  k = e.keyCode,
                  pos = caret(input),
                  kdResult = opts.onKeyDown.call(
                    this,
                    e,
                    getBuffer(),
                    pos,
                    opts
                  );
                if (void 0 !== kdResult) return kdResult;
                if (
                  k === keyCode.BACKSPACE ||
                  k === keyCode.DELETE ||
                  (iphone && k === keyCode.BACKSPACE_SAFARI) ||
                  (e.ctrlKey && k === keyCode.X && !("oncut" in input))
                )
                  e.preventDefault(),
                    handleRemove(input, k, pos),
                    writeBuffer(
                      input,
                      getBuffer(!0),
                      maskset.p,
                      e,
                      input.inputmask._valueGet() !== getBuffer().join("")
                    );
                else if (k === keyCode.END || k === keyCode.PAGE_DOWN) {
                  e.preventDefault();
                  var caretPos = seekNext(getLastValidPosition());
                  caret(input, e.shiftKey ? pos.begin : caretPos, caretPos, !0);
                } else
                  (k === keyCode.HOME && !e.shiftKey) || k === keyCode.PAGE_UP
                    ? (e.preventDefault(),
                      caret(input, 0, e.shiftKey ? pos.begin : 0, !0))
                    : ((opts.undoOnEscape && k === keyCode.ESCAPE) ||
                        (90 === k && e.ctrlKey)) &&
                      !0 !== e.altKey
                    ? (checkVal(input, !0, !1, inputmask.undoValue.split("")),
                      $input.trigger("click"))
                    : !0 === opts.tabThrough && k === keyCode.TAB
                    ? (!0 === e.shiftKey
                        ? (!0 === getTest(pos.begin).match.static &&
                            (pos.begin = seekNext(pos.begin)),
                          (pos.end = seekPrevious(pos.begin, !0)),
                          (pos.begin = seekPrevious(pos.end, !0)))
                        : ((pos.begin = seekNext(pos.begin, !0)),
                          (pos.end = seekNext(pos.begin, !0)),
                          pos.end < maskset.maskLength && pos.end--),
                      pos.begin < maskset.maskLength &&
                        (e.preventDefault(), caret(input, pos.begin, pos.end)))
                    : e.shiftKey ||
                      (opts.insertModeVisual &&
                        !1 === opts.insertMode &&
                        (k === keyCode.RIGHT
                          ? setTimeout(function () {
                              var caretPos = caret(input);
                              caret(input, caretPos.begin);
                            }, 0)
                          : k === keyCode.LEFT &&
                            setTimeout(function () {
                              var caretPos_begin = translatePosition(
                                  input.inputmask.caretPos.begin
                                ),
                                caretPos_end = translatePosition(
                                  input.inputmask.caretPos.end
                                );
                              caret(
                                input,
                                isRTL
                                  ? caretPos_begin +
                                      (caretPos_begin === maskset.maskLength
                                        ? 0
                                        : 1)
                                  : caretPos_begin -
                                      (0 === caretPos_begin ? 0 : 1)
                              );
                            }, 0)));
                inputmask.ignorable = -1 !== $.inArray(k, opts.ignorables);
              },
              keypressEvent: function keypressEvent(
                e,
                checkval,
                writeOut,
                strict,
                ndx
              ) {
                var input = this,
                  $input = $(input),
                  k = e.which || e.charCode || e.keyCode;
                if (
                  !(!0 === checkval || (e.ctrlKey && e.altKey)) &&
                  (e.ctrlKey || e.metaKey || inputmask.ignorable)
                )
                  return (
                    k === keyCode.ENTER &&
                      inputmask.undoValue !== getBuffer().join("") &&
                      ((inputmask.undoValue = getBuffer().join("")),
                      setTimeout(function () {
                        $input.trigger("change");
                      }, 0)),
                    (inputmask.skipInputEvent = !0),
                    !0
                  );
                if (k) {
                  (44 !== k && 46 !== k) ||
                    3 !== e.location ||
                    "" === opts.radixPoint ||
                    (k = opts.radixPoint.charCodeAt(0));
                  var pos = checkval ? { begin: ndx, end: ndx } : caret(input),
                    forwardPosition,
                    c = String.fromCharCode(k);
                  maskset.writeOutBuffer = !0;
                  var valResult = isValid(
                    pos,
                    c,
                    strict,
                    void 0,
                    void 0,
                    void 0,
                    checkval
                  );
                  if (
                    (!1 !== valResult &&
                      (resetMaskSet(!0),
                      (forwardPosition =
                        void 0 !== valResult.caret
                          ? valResult.caret
                          : seekNext(
                              valResult.pos.begin
                                ? valResult.pos.begin
                                : valResult.pos
                            )),
                      (maskset.p = forwardPosition)),
                    (forwardPosition =
                      opts.numericInput && void 0 === valResult.caret
                        ? seekPrevious(forwardPosition)
                        : forwardPosition),
                    !1 !== writeOut &&
                      (setTimeout(function () {
                        opts.onKeyValidation.call(input, k, valResult);
                      }, 0),
                      maskset.writeOutBuffer && !1 !== valResult))
                  ) {
                    var buffer = getBuffer();
                    writeBuffer(
                      input,
                      buffer,
                      forwardPosition,
                      e,
                      !0 !== checkval
                    );
                  }
                  if ((e.preventDefault(), checkval))
                    return (
                      !1 !== valResult &&
                        (valResult.forwardPosition = forwardPosition),
                      valResult
                    );
                }
              },
              keyupEvent: function keyupEvent(e) {
                !inputmask.isComposing ||
                  (e.keyCode !== keyCode.KEY_229 &&
                    e.keyCode !== keyCode.ENTER) ||
                  inputmask.$el.trigger("input");
              },
              pasteEvent: function pasteEvent(e) {
                var input = this,
                  inputValue = this.inputmask._valueGet(!0),
                  caretPos = caret(this),
                  tempValue;
                isRTL &&
                  ((tempValue = caretPos.end),
                  (caretPos.end = caretPos.begin),
                  (caretPos.begin = tempValue));
                var valueBeforeCaret = inputValue.substr(0, caretPos.begin),
                  valueAfterCaret = inputValue.substr(
                    caretPos.end,
                    inputValue.length
                  );
                if (
                  (valueBeforeCaret ==
                    (isRTL
                      ? getBufferTemplate().slice().reverse()
                      : getBufferTemplate()
                    )
                      .slice(0, caretPos.begin)
                      .join("") && (valueBeforeCaret = ""),
                  valueAfterCaret ==
                    (isRTL
                      ? getBufferTemplate().slice().reverse()
                      : getBufferTemplate()
                    )
                      .slice(caretPos.end)
                      .join("") && (valueAfterCaret = ""),
                  window.clipboardData && window.clipboardData.getData)
                )
                  inputValue =
                    valueBeforeCaret +
                    window.clipboardData.getData("Text") +
                    valueAfterCaret;
                else {
                  if (!e.clipboardData || !e.clipboardData.getData) return !0;
                  inputValue =
                    valueBeforeCaret +
                    e.clipboardData.getData("text/plain") +
                    valueAfterCaret;
                }
                var pasteValue = inputValue;
                if ($.isFunction(opts.onBeforePaste)) {
                  if (
                    ((pasteValue = opts.onBeforePaste.call(
                      inputmask,
                      inputValue,
                      opts
                    )),
                    !1 === pasteValue)
                  )
                    return e.preventDefault();
                  pasteValue = pasteValue || inputValue;
                }
                return (
                  checkVal(this, !0, !1, pasteValue.toString().split(""), e),
                  e.preventDefault()
                );
              },
              inputFallBackEvent: function inputFallBackEvent(e) {
                function ieMobileHandler(input, inputValue, caretPos) {
                  if (iemobile) {
                    var inputChar = inputValue.replace(
                      getBuffer().join(""),
                      ""
                    );
                    if (1 === inputChar.length) {
                      var iv = inputValue.split("");
                      iv.splice(caretPos.begin, 0, inputChar),
                        (inputValue = iv.join(""));
                    }
                  }
                  return inputValue;
                }
                function analyseChanges(inputValue, buffer, caretPos) {
                  for (
                    var frontPart = inputValue
                        .substr(0, caretPos.begin)
                        .split(""),
                      backPart = inputValue.substr(caretPos.begin).split(""),
                      frontBufferPart = buffer
                        .substr(0, caretPos.begin)
                        .split(""),
                      backBufferPart = buffer.substr(caretPos.begin).split(""),
                      fpl =
                        frontPart.length >= frontBufferPart.length
                          ? frontPart.length
                          : frontBufferPart.length,
                      bpl =
                        backPart.length >= backBufferPart.length
                          ? backPart.length
                          : backBufferPart.length,
                      bl,
                      i,
                      action = "",
                      data = [],
                      marker = "~",
                      placeholder;
                    frontPart.length < fpl;

                  )
                    frontPart.push("~");
                  for (; frontBufferPart.length < fpl; )
                    frontBufferPart.push("~");
                  for (; backPart.length < bpl; ) backPart.unshift("~");
                  for (; backBufferPart.length < bpl; )
                    backBufferPart.unshift("~");
                  var newBuffer = frontPart.concat(backPart),
                    oldBuffer = frontBufferPart.concat(backBufferPart);
                  for (i = 0, bl = newBuffer.length; i < bl; i++)
                    switch (
                      ((placeholder = getPlaceholder(translatePosition(i))),
                      action)
                    ) {
                      case "insertText":
                        oldBuffer[i - 1] === newBuffer[i] &&
                          caretPos.begin == newBuffer.length - 1 &&
                          data.push(newBuffer[i]),
                          (i = bl);
                        break;
                      case "insertReplacementText":
                        "~" === newBuffer[i] ? caretPos.end++ : (i = bl);
                        break;
                      case "deleteContentBackward":
                        "~" === newBuffer[i] ? caretPos.end++ : (i = bl);
                        break;
                      default:
                        newBuffer[i] !== oldBuffer[i] &&
                          ((("~" === newBuffer[i + 1] ||
                            newBuffer[i + 1] === placeholder ||
                            void 0 === newBuffer[i + 1]) &&
                            ((oldBuffer[i] === placeholder &&
                              "~" === oldBuffer[i + 1]) ||
                              "~" === oldBuffer[i])) ||
                          ("~" === oldBuffer[i + 1] &&
                            oldBuffer[i] === newBuffer[i + 1])
                            ? ((action = "insertText"),
                              data.push(newBuffer[i]),
                              caretPos.begin--,
                              caretPos.end--)
                            : newBuffer[i] !== placeholder &&
                              "~" !== newBuffer[i] &&
                              ("~" === newBuffer[i + 1] ||
                                (oldBuffer[i] !== newBuffer[i] &&
                                  oldBuffer[i + 1] === newBuffer[i + 1]))
                            ? ((action = "insertReplacementText"),
                              data.push(newBuffer[i]),
                              caretPos.begin--)
                            : "~" === newBuffer[i]
                            ? ((action = "deleteContentBackward"),
                              (!isMask(translatePosition(i), !0) &&
                                oldBuffer[i] !== opts.radixPoint) ||
                                caretPos.end++)
                            : (i = bl));
                        break;
                    }
                  return { action: action, data: data, caret: caretPos };
                }
                var input = this,
                  inputValue = input.inputmask._valueGet(!0),
                  buffer = (isRTL
                    ? getBuffer().slice().reverse()
                    : getBuffer()
                  ).join(""),
                  caretPos = caret(input, void 0, void 0, !0);
                if (buffer !== inputValue) {
                  inputValue = ieMobileHandler(input, inputValue, caretPos);
                  var changes = analyseChanges(inputValue, buffer, caretPos);
                  switch (
                    ((input.inputmask.shadowRoot || document).activeElement !==
                      input && input.focus(),
                    writeBuffer(input, getBuffer()),
                    caret(input, caretPos.begin, caretPos.end, !0),
                    changes.action)
                  ) {
                    case "insertText":
                    case "insertReplacementText":
                      $.each(changes.data, function (ndx, entry) {
                        var keypress = new $.Event("keypress");
                        (keypress.which = entry.charCodeAt(0)),
                          (inputmask.ignorable = !1),
                          EventHandlers.keypressEvent.call(input, keypress);
                      }),
                        setTimeout(function () {
                          inputmask.$el.trigger("keyup");
                        }, 0);
                      break;
                    case "deleteContentBackward":
                      var keydown = new $.Event("keydown");
                      (keydown.keyCode = keyCode.BACKSPACE),
                        EventHandlers.keydownEvent.call(input, keydown);
                      break;
                    default:
                      applyInputValue(input, inputValue);
                      break;
                  }
                  e.preventDefault();
                }
              },
              compositionendEvent: function compositionendEvent(e) {
                (inputmask.isComposing = !1), inputmask.$el.trigger("input");
              },
              setValueEvent: function setValueEvent(e, argument_1, argument_2) {
                var input = this,
                  value = e && e.detail ? e.detail[0] : argument_1;
                void 0 === value && (value = this.inputmask._valueGet(!0)),
                  applyInputValue(this, value),
                  ((e.detail && void 0 !== e.detail[1]) ||
                    void 0 !== argument_2) &&
                    caret(this, e.detail ? e.detail[1] : argument_2);
              },
              focusEvent: function focusEvent(e) {
                var input = this,
                  nptValue = this.inputmask._valueGet();
                opts.showMaskOnFocus &&
                  nptValue !== getBuffer().join("") &&
                  writeBuffer(
                    this,
                    getBuffer(),
                    seekNext(getLastValidPosition())
                  ),
                  !0 !== opts.positionCaretOnTab ||
                    !1 !== inputmask.mouseEnter ||
                    (isComplete(getBuffer()) &&
                      -1 !== getLastValidPosition()) ||
                    EventHandlers.clickEvent.apply(this, [e, !0]),
                  (inputmask.undoValue = getBuffer().join(""));
              },
              invalidEvent: function invalidEvent(e) {
                inputmask.validationEvent = !0;
              },
              mouseleaveEvent: function mouseleaveEvent() {
                var input = this;
                (inputmask.mouseEnter = !1),
                  opts.clearMaskOnLostFocus &&
                    (this.inputmask.shadowRoot || document).activeElement !==
                      this &&
                    HandleNativePlaceholder(
                      this,
                      inputmask.originalPlaceholder
                    );
              },
              clickEvent: function clickEvent(e, tabbed) {
                var input = this;
                if (
                  (this.inputmask.shadowRoot || document).activeElement === this
                ) {
                  var newCaretPosition = determineNewCaretPosition(
                    caret(this),
                    tabbed
                  );
                  void 0 !== newCaretPosition && caret(this, newCaretPosition);
                }
              },
              cutEvent: function cutEvent(e) {
                var input = this,
                  pos = caret(this),
                  clipboardData = window.clipboardData || e.clipboardData,
                  clipData = isRTL
                    ? getBuffer().slice(pos.end, pos.begin)
                    : getBuffer().slice(pos.begin, pos.end);
                clipboardData.setData(
                  "text",
                  isRTL ? clipData.reverse().join("") : clipData.join("")
                ),
                  document.execCommand && document.execCommand("copy"),
                  handleRemove(this, keyCode.DELETE, pos),
                  writeBuffer(
                    this,
                    getBuffer(),
                    maskset.p,
                    e,
                    inputmask.undoValue !== getBuffer().join("")
                  );
              },
              blurEvent: function blurEvent(e) {
                var $input = $(this),
                  input = this;
                if (this.inputmask) {
                  HandleNativePlaceholder(this, inputmask.originalPlaceholder);
                  var nptValue = this.inputmask._valueGet(),
                    buffer = getBuffer().slice();
                  "" !== nptValue &&
                    (opts.clearMaskOnLostFocus &&
                      (-1 === getLastValidPosition() &&
                      nptValue === getBufferTemplate().join("")
                        ? (buffer = [])
                        : clearOptionalTail(buffer)),
                    !1 === isComplete(buffer) &&
                      (setTimeout(function () {
                        $input.trigger("incomplete");
                      }, 0),
                      opts.clearIncomplete &&
                        (resetMaskSet(),
                        (buffer = opts.clearMaskOnLostFocus
                          ? []
                          : getBufferTemplate().slice()))),
                    writeBuffer(this, buffer, void 0, e)),
                    inputmask.undoValue !== getBuffer().join("") &&
                      ((inputmask.undoValue = getBuffer().join("")),
                      $input.trigger("change"));
                }
              },
              mouseenterEvent: function mouseenterEvent() {
                var input = this;
                (inputmask.mouseEnter = !0),
                  (this.inputmask.shadowRoot || document).activeElement !==
                    this &&
                    (null == inputmask.originalPlaceholder &&
                      this.placeholder !== inputmask.originalPlaceholder &&
                      (inputmask.originalPlaceholder = this.placeholder),
                    opts.showMaskOnHover &&
                      HandleNativePlaceholder(
                        this,
                        (isRTL
                          ? getBufferTemplate().slice().reverse()
                          : getBufferTemplate()
                        ).join("")
                      ));
              },
              submitEvent: function submitEvent() {
                inputmask.undoValue !== getBuffer().join("") &&
                  inputmask.$el.trigger("change"),
                  opts.clearMaskOnLostFocus &&
                    -1 === getLastValidPosition() &&
                    el.inputmask._valueGet &&
                    el.inputmask._valueGet() === getBufferTemplate().join("") &&
                    el.inputmask._valueSet(""),
                  opts.clearIncomplete &&
                    !1 === isComplete(getBuffer()) &&
                    el.inputmask._valueSet(""),
                  opts.removeMaskOnSubmit &&
                    (el.inputmask._valueSet(el.inputmask.unmaskedvalue(), !0),
                    setTimeout(function () {
                      writeBuffer(el, getBuffer());
                    }, 0));
              },
              resetEvent: function resetEvent() {
                (el.inputmask.refreshValue = !0),
                  setTimeout(function () {
                    applyInputValue(el, el.inputmask._valueGet(!0));
                  }, 0);
              },
            },
            valueBuffer;
          function checkVal(input, writeOut, strict, nptvl, initiatingEvent) {
            var inputmask = this || input.inputmask,
              inputValue = nptvl.slice(),
              charCodes = "",
              initialNdx = -1,
              result = void 0;
            function isTemplateMatch(ndx, charCodes) {
              for (
                var targetTemplate = getMaskTemplate(!0, 0)
                    .slice(ndx, seekNext(ndx))
                    .join("")
                    .replace(/'/g, ""),
                  charCodeNdx = targetTemplate.indexOf(charCodes);
                0 < charCodeNdx && " " === targetTemplate[charCodeNdx - 1];

              )
                charCodeNdx--;
              var match =
                0 === charCodeNdx &&
                !isMask(ndx) &&
                (getTest(ndx).match.nativeDef === charCodes.charAt(0) ||
                  (!0 === getTest(ndx).match.static &&
                    getTest(ndx).match.nativeDef ===
                      "'" + charCodes.charAt(0)) ||
                  (" " === getTest(ndx).match.nativeDef &&
                    (getTest(ndx + 1).match.nativeDef === charCodes.charAt(0) ||
                      (!0 === getTest(ndx + 1).match.static &&
                        getTest(ndx + 1).match.nativeDef ===
                          "'" + charCodes.charAt(0)))));
              if (!match && 0 < charCodeNdx && !isMask(ndx, !1, !0)) {
                var nextPos = seekNext(ndx);
                inputmask.caretPos.begin < nextPos &&
                  (inputmask.caretPos = { begin: nextPos });
              }
              return match;
            }
            resetMaskSet(),
              (maskset.tests = {}),
              (initialNdx = opts.radixPoint
                ? determineNewCaretPosition({ begin: 0, end: 0 }).begin
                : 0),
              (maskset.p = initialNdx),
              (inputmask.caretPos = { begin: initialNdx });
            var staticMatches = [],
              prevCaretPos = inputmask.caretPos;
            if (
              ($.each(inputValue, function (ndx, charCode) {
                if (void 0 !== charCode)
                  if (
                    void 0 === maskset.validPositions[ndx] &&
                    inputValue[ndx] === getPlaceholder(ndx) &&
                    isMask(ndx, !0) &&
                    !1 === isValid(ndx, inputValue[ndx], !0, void 0, void 0, !0)
                  )
                    maskset.p++;
                  else {
                    var keypress = new $.Event("_checkval");
                    (keypress.which = charCode.toString().charCodeAt(0)),
                      (charCodes += charCode);
                    var lvp = getLastValidPosition(void 0, !0);
                    isTemplateMatch(initialNdx, charCodes)
                      ? (result = EventHandlers.keypressEvent.call(
                          input,
                          keypress,
                          !0,
                          !1,
                          strict,
                          lvp + 1
                        ))
                      : ((result = EventHandlers.keypressEvent.call(
                          input,
                          keypress,
                          !0,
                          !1,
                          strict,
                          inputmask.caretPos.begin
                        )),
                        result &&
                          ((initialNdx = inputmask.caretPos.begin + 1),
                          (charCodes = ""))),
                      result
                        ? (void 0 !== result.pos &&
                            maskset.validPositions[result.pos] &&
                            !0 ===
                              maskset.validPositions[result.pos].match.static &&
                            void 0 ===
                              maskset.validPositions[result.pos].alternation &&
                            (staticMatches.push(result.pos),
                            isRTL || (result.forwardPosition = result.pos + 1)),
                          writeBuffer(
                            void 0,
                            getBuffer(),
                            result.forwardPosition,
                            keypress,
                            !1
                          ),
                          (inputmask.caretPos = {
                            begin: result.forwardPosition,
                            end: result.forwardPosition,
                          }),
                          (prevCaretPos = inputmask.caretPos))
                        : (inputmask.caretPos = prevCaretPos);
                  }
              }),
              0 < staticMatches.length)
            ) {
              var sndx,
                validPos,
                nextValid = seekNext(-1, void 0, !1);
              if (
                (!isComplete(getBuffer()) &&
                  staticMatches.length <= nextValid) ||
                (isComplete(getBuffer()) &&
                  0 < staticMatches.length &&
                  staticMatches.length !== nextValid &&
                  0 === staticMatches[0])
              )
                for (
                  var nextSndx = nextValid;
                  void 0 !== (sndx = staticMatches.shift());

                ) {
                  var keypress = new $.Event("_checkval");
                  if (
                    ((validPos = maskset.validPositions[sndx]),
                    (validPos.generatedInput = !0),
                    (keypress.which = validPos.input.charCodeAt(0)),
                    (result = EventHandlers.keypressEvent.call(
                      input,
                      keypress,
                      !0,
                      !1,
                      strict,
                      nextSndx
                    )),
                    result &&
                      void 0 !== result.pos &&
                      result.pos !== sndx &&
                      maskset.validPositions[result.pos] &&
                      !0 === maskset.validPositions[result.pos].match.static)
                  )
                    staticMatches.push(result.pos);
                  else if (!result) break;
                  nextSndx++;
                }
            }
            writeOut &&
              writeBuffer(
                input,
                getBuffer(),
                result ? result.forwardPosition : inputmask.caretPos.begin,
                initiatingEvent || new $.Event("checkval"),
                initiatingEvent &&
                  "input" === initiatingEvent.type &&
                  inputmask.undoValue !== getBuffer().join("")
              );
          }
          function unmaskedvalue(input) {
            if (input) {
              if (void 0 === input.inputmask) return input.value;
              input.inputmask &&
                input.inputmask.refreshValue &&
                applyInputValue(input, input.inputmask._valueGet(!0));
            }
            var umValue = [],
              vps = maskset.validPositions;
            for (var pndx in vps)
              vps[pndx] &&
                vps[pndx].match &&
                (1 != vps[pndx].match.static ||
                  !0 !== vps[pndx].generatedInput) &&
                umValue.push(vps[pndx].input);
            var unmaskedValue =
              0 === umValue.length
                ? ""
                : (isRTL ? umValue.reverse() : umValue).join("");
            if ($.isFunction(opts.onUnMask)) {
              var bufferValue = (isRTL
                ? getBuffer().slice().reverse()
                : getBuffer()
              ).join("");
              unmaskedValue = opts.onUnMask.call(
                inputmask,
                bufferValue,
                unmaskedValue,
                opts
              );
            }
            return unmaskedValue;
          }
          function translatePosition(pos) {
            return (
              !isRTL ||
                "number" != typeof pos ||
                (opts.greedy && "" === opts.placeholder) ||
                !el ||
                (pos = el.inputmask._valueGet().length - pos),
              pos
            );
          }
          function caret(input, begin, end, notranslate, isDelete) {
            var range;
            if (void 0 === begin)
              return (
                "selectionStart" in input && "selectionEnd" in input
                  ? ((begin = input.selectionStart), (end = input.selectionEnd))
                  : window.getSelection
                  ? ((range = window.getSelection().getRangeAt(0)),
                    (range.commonAncestorContainer.parentNode !== input &&
                      range.commonAncestorContainer !== input) ||
                      ((begin = range.startOffset), (end = range.endOffset)))
                  : document.selection &&
                    document.selection.createRange &&
                    ((range = document.selection.createRange()),
                    (begin =
                      0 -
                      range
                        .duplicate()
                        .moveStart(
                          "character",
                          -input.inputmask._valueGet().length
                        )),
                    (end = begin + range.text.length)),
                {
                  begin: notranslate ? begin : translatePosition(begin),
                  end: notranslate ? end : translatePosition(end),
                }
              );
            if (
              ($.isArray(begin) &&
                ((end = isRTL ? begin[0] : begin[1]),
                (begin = isRTL ? begin[1] : begin[0])),
              void 0 !== begin.begin &&
                ((end = isRTL ? begin.begin : begin.end),
                (begin = isRTL ? begin.end : begin.begin)),
              "number" == typeof begin)
            ) {
              (begin = notranslate ? begin : translatePosition(begin)),
                (end = notranslate ? end : translatePosition(end)),
                (end = "number" == typeof end ? end : begin);
              var scrollCalc =
                parseInt(
                  ((input.ownerDocument.defaultView || window).getComputedStyle
                    ? (
                        input.ownerDocument.defaultView || window
                      ).getComputedStyle(input, null)
                    : input.currentStyle
                  ).fontSize
                ) * end;
              if (
                ((input.scrollLeft =
                  scrollCalc > input.scrollWidth ? scrollCalc : 0),
                (input.inputmask.caretPos = { begin: begin, end: end }),
                opts.insertModeVisual &&
                  !1 === opts.insertMode &&
                  begin === end &&
                  (isDelete || end++),
                input ===
                  (input.inputmask.shadowRoot || document).activeElement)
              )
                if ("setSelectionRange" in input)
                  input.setSelectionRange(begin, end);
                else if (window.getSelection) {
                  if (
                    ((range = document.createRange()),
                    void 0 === input.firstChild || null === input.firstChild)
                  ) {
                    var textNode = document.createTextNode("");
                    input.appendChild(textNode);
                  }
                  range.setStart(
                    input.firstChild,
                    begin < input.inputmask._valueGet().length
                      ? begin
                      : input.inputmask._valueGet().length
                  ),
                    range.setEnd(
                      input.firstChild,
                      end < input.inputmask._valueGet().length
                        ? end
                        : input.inputmask._valueGet().length
                    ),
                    range.collapse(!0);
                  var sel = window.getSelection();
                  sel.removeAllRanges(), sel.addRange(range);
                } else
                  input.createTextRange &&
                    ((range = input.createTextRange()),
                    range.collapse(!0),
                    range.moveEnd("character", end),
                    range.moveStart("character", begin),
                    range.select());
            }
          }
          function determineLastRequiredPosition(returnDefinition) {
            var buffer = getMaskTemplate(!0, getLastValidPosition(), !0, !0),
              bl = buffer.length,
              pos,
              lvp = getLastValidPosition(),
              positions = {},
              lvTest = maskset.validPositions[lvp],
              ndxIntlzr = void 0 !== lvTest ? lvTest.locator.slice() : void 0,
              testPos;
            for (pos = lvp + 1; pos < buffer.length; pos++)
              (testPos = getTestTemplate(pos, ndxIntlzr, pos - 1)),
                (ndxIntlzr = testPos.locator.slice()),
                (positions[pos] = $.extend(!0, {}, testPos));
            var lvTestAlt =
              lvTest && void 0 !== lvTest.alternation
                ? lvTest.locator[lvTest.alternation]
                : void 0;
            for (
              pos = bl - 1;
              lvp < pos &&
              ((testPos = positions[pos]),
              (testPos.match.optionality ||
                (testPos.match.optionalQuantifier &&
                  testPos.match.newBlockMarker) ||
                (lvTestAlt &&
                  ((lvTestAlt !== positions[pos].locator[lvTest.alternation] &&
                    1 != testPos.match.static) ||
                    (!0 === testPos.match.static &&
                      testPos.locator[lvTest.alternation] &&
                      checkAlternationMatch(
                        testPos.locator[lvTest.alternation]
                          .toString()
                          .split(","),
                        lvTestAlt.toString().split(",")
                      ) &&
                      "" !== getTests(pos)[0].def)))) &&
                buffer[pos] === getPlaceholder(pos, testPos.match));
              pos--
            )
              bl--;
            return returnDefinition
              ? { l: bl, def: positions[bl] ? positions[bl].match : void 0 }
              : bl;
          }
          function clearOptionalTail(buffer) {
            buffer.length = 0;
            for (
              var template = getMaskTemplate(!0, 0, !0, void 0, !0), lmnt;
              void 0 !== (lmnt = template.shift());

            )
              buffer.push(lmnt);
            return buffer;
          }
          function isComplete(buffer) {
            if ($.isFunction(opts.isComplete))
              return opts.isComplete(buffer, opts);
            if ("*" !== opts.repeat) {
              var complete = !1,
                lrp = determineLastRequiredPosition(!0),
                aml = seekPrevious(lrp.l);
              if (
                void 0 === lrp.def ||
                lrp.def.newBlockMarker ||
                lrp.def.optionality ||
                lrp.def.optionalQuantifier
              ) {
                complete = !0;
                for (var i = 0; i <= aml; i++) {
                  var test = getTestTemplate(i).match;
                  if (
                    (!0 !== test.static &&
                      void 0 === maskset.validPositions[i] &&
                      !0 !== test.optionality &&
                      !0 !== test.optionalQuantifier) ||
                    (!0 === test.static &&
                      buffer[i] !== getPlaceholder(i, test))
                  ) {
                    complete = !1;
                    break;
                  }
                }
              }
              return complete;
            }
          }
          function handleRemove(input, k, pos, strict, fromIsValid) {
            if (
              (opts.numericInput || isRTL) &&
              (k === keyCode.BACKSPACE
                ? (k = keyCode.DELETE)
                : k === keyCode.DELETE && (k = keyCode.BACKSPACE),
              isRTL)
            ) {
              var pend = pos.end;
              (pos.end = pos.begin), (pos.begin = pend);
            }
            var lvp = getLastValidPosition(void 0, !0),
              offset;
            if (
              (pos.end >= getBuffer().length &&
                lvp >= pos.end &&
                (pos.end = lvp + 1),
              k === keyCode.BACKSPACE
                ? pos.end - pos.begin < 1 &&
                  (pos.begin = seekPrevious(pos.begin))
                : k === keyCode.DELETE &&
                  pos.begin === pos.end &&
                  (pos.end = isMask(pos.end, !0, !0)
                    ? pos.end + 1
                    : seekNext(pos.end) + 1),
              !1 !== (offset = revalidateMask(pos)))
            ) {
              if (
                (!0 !== strict && !1 !== opts.keepStatic) ||
                (null !== opts.regex &&
                  -1 !== getTest(pos.begin).match.def.indexOf("|"))
              ) {
                var result = alternate(!0);
                if (result) {
                  var newPos =
                    void 0 !== result.caret
                      ? result.caret
                      : result.pos
                      ? seekNext(
                          result.pos.begin ? result.pos.begin : result.pos
                        )
                      : getLastValidPosition(-1, !0);
                  (k !== keyCode.DELETE || pos.begin > newPos) && pos.begin;
                }
              }
              !0 !== strict &&
                (maskset.p =
                  k === keyCode.DELETE ? pos.begin + offset : pos.begin);
            }
          }
          function applyInputValue(input, value) {
            (input.inputmask.refreshValue = !1),
              $.isFunction(opts.onBeforeMask) &&
                (value =
                  opts.onBeforeMask.call(inputmask, value, opts) || value),
              (value = value.toString().split("")),
              checkVal(input, !0, !1, value),
              (inputmask.undoValue = getBuffer().join("")),
              (opts.clearMaskOnLostFocus || opts.clearIncomplete) &&
                input.inputmask._valueGet() === getBufferTemplate().join("") &&
                -1 === getLastValidPosition() &&
                input.inputmask._valueSet("");
          }
          function mask() {
            function isElementTypeSupported(input, opts) {
              function patchValueProperty(npt) {
                var valueGet, valueSet;
                function patchValhook(type) {
                  if (
                    $.valHooks &&
                    (void 0 === $.valHooks[type] ||
                      !0 !== $.valHooks[type].inputmaskpatch)
                  ) {
                    var valhookGet =
                        $.valHooks[type] && $.valHooks[type].get
                          ? $.valHooks[type].get
                          : function (elem) {
                              return elem.value;
                            },
                      valhookSet =
                        $.valHooks[type] && $.valHooks[type].set
                          ? $.valHooks[type].set
                          : function (elem, value) {
                              return (elem.value = value), elem;
                            };
                    $.valHooks[type] = {
                      get: function get(elem) {
                        if (elem.inputmask) {
                          if (elem.inputmask.opts.autoUnmask)
                            return elem.inputmask.unmaskedvalue();
                          var result = valhookGet(elem);
                          return -1 !==
                            getLastValidPosition(
                              void 0,
                              void 0,
                              elem.inputmask.maskset.validPositions
                            ) || !0 !== opts.nullable
                            ? result
                            : "";
                        }
                        return valhookGet(elem);
                      },
                      set: function set(elem, value) {
                        var result = valhookSet(elem, value);
                        return (
                          elem.inputmask && applyInputValue(elem, value), result
                        );
                      },
                      inputmaskpatch: !0,
                    };
                  }
                }
                function getter() {
                  return this.inputmask
                    ? this.inputmask.opts.autoUnmask
                      ? this.inputmask.unmaskedvalue()
                      : -1 !== getLastValidPosition() || !0 !== opts.nullable
                      ? (this.inputmask.shadowRoot ||
                          document.activeElement) === this &&
                        opts.clearMaskOnLostFocus
                        ? (isRTL
                            ? clearOptionalTail(getBuffer().slice()).reverse()
                            : clearOptionalTail(getBuffer().slice())
                          ).join("")
                        : valueGet.call(this)
                      : ""
                    : valueGet.call(this);
                }
                function setter(value) {
                  valueSet.call(this, value),
                    this.inputmask && applyInputValue(this, value);
                }
                function installNativeValueSetFallback(npt) {
                  EventRuler.on(npt, "mouseenter", function () {
                    var input = this,
                      value = this.inputmask._valueGet(!0);
                    value !==
                      (isRTL ? getBuffer().reverse() : getBuffer()).join("") &&
                      applyInputValue(this, value);
                  });
                }
                if (!npt.inputmask.__valueGet) {
                  if (!0 !== opts.noValuePatching) {
                    if (Object.getOwnPropertyDescriptor) {
                      var valueProperty = Object.getPrototypeOf
                        ? Object.getOwnPropertyDescriptor(
                            Object.getPrototypeOf(npt),
                            "value"
                          )
                        : void 0;
                      valueProperty && valueProperty.get && valueProperty.set
                        ? ((valueGet = valueProperty.get),
                          (valueSet = valueProperty.set),
                          Object.defineProperty(npt, "value", {
                            get: getter,
                            set: setter,
                            configurable: !0,
                          }))
                        : "input" !== npt.tagName.toLowerCase() &&
                          ((valueGet = function valueGet() {
                            return this.textContent;
                          }),
                          (valueSet = function valueSet(value) {
                            this.textContent = value;
                          }),
                          Object.defineProperty(npt, "value", {
                            get: getter,
                            set: setter,
                            configurable: !0,
                          }));
                    } else
                      document.__lookupGetter__ &&
                        npt.__lookupGetter__("value") &&
                        ((valueGet = npt.__lookupGetter__("value")),
                        (valueSet = npt.__lookupSetter__("value")),
                        npt.__defineGetter__("value", getter),
                        npt.__defineSetter__("value", setter));
                    (npt.inputmask.__valueGet = valueGet),
                      (npt.inputmask.__valueSet = valueSet);
                  }
                  (npt.inputmask._valueGet = function (overruleRTL) {
                    return isRTL && !0 !== overruleRTL
                      ? valueGet.call(this.el).split("").reverse().join("")
                      : valueGet.call(this.el);
                  }),
                    (npt.inputmask._valueSet = function (value, overruleRTL) {
                      valueSet.call(
                        this.el,
                        null == value
                          ? ""
                          : !0 !== overruleRTL && isRTL
                          ? value.split("").reverse().join("")
                          : value
                      );
                    }),
                    void 0 === valueGet &&
                      ((valueGet = function valueGet() {
                        return this.value;
                      }),
                      (valueSet = function valueSet(value) {
                        this.value = value;
                      }),
                      patchValhook(npt.type),
                      installNativeValueSetFallback(npt));
                }
              }
              "textarea" !== input.tagName.toLowerCase() &&
                opts.ignorables.push(keyCode.ENTER);
              var elementType = input.getAttribute("type"),
                isSupported =
                  ("input" === input.tagName.toLowerCase() &&
                    -1 !== $.inArray(elementType, opts.supportsInputType)) ||
                  input.isContentEditable ||
                  "textarea" === input.tagName.toLowerCase();
              if (!isSupported)
                if ("input" === input.tagName.toLowerCase()) {
                  var el = document.createElement("input");
                  el.setAttribute("type", elementType),
                    (isSupported = "text" === el.type),
                    (el = null);
                } else isSupported = "partial";
              return (
                !1 !== isSupported
                  ? patchValueProperty(input)
                  : (input.inputmask = void 0),
                isSupported
              );
            }
            EventRuler.off(el);
            var isSupported = isElementTypeSupported(el, opts);
            if (!1 !== isSupported) {
              (inputmask.originalPlaceholder = el.placeholder),
                (inputmask.maxLength = void 0 !== el ? el.maxLength : void 0),
                -1 === inputmask.maxLength && (inputmask.maxLength = void 0),
                "inputMode" in el &&
                  null === el.getAttribute("inputmode") &&
                  ((el.inputMode = opts.inputmode),
                  el.setAttribute("inputmode", opts.inputmode)),
                !0 === isSupported &&
                  ((opts.showMaskOnFocus =
                    opts.showMaskOnFocus &&
                    -1 === ["cc-number", "cc-exp"].indexOf(el.autocomplete)),
                  iphone && (opts.insertModeVisual = !1),
                  EventRuler.on(el, "submit", EventHandlers.submitEvent),
                  EventRuler.on(el, "reset", EventHandlers.resetEvent),
                  EventRuler.on(el, "blur", EventHandlers.blurEvent),
                  EventRuler.on(el, "focus", EventHandlers.focusEvent),
                  EventRuler.on(el, "invalid", EventHandlers.invalidEvent),
                  EventRuler.on(el, "click", EventHandlers.clickEvent),
                  EventRuler.on(
                    el,
                    "mouseleave",
                    EventHandlers.mouseleaveEvent
                  ),
                  EventRuler.on(
                    el,
                    "mouseenter",
                    EventHandlers.mouseenterEvent
                  ),
                  EventRuler.on(el, "paste", EventHandlers.pasteEvent),
                  EventRuler.on(el, "cut", EventHandlers.cutEvent),
                  EventRuler.on(el, "complete", opts.oncomplete),
                  EventRuler.on(el, "incomplete", opts.onincomplete),
                  EventRuler.on(el, "cleared", opts.oncleared),
                  !0 !== opts.inputEventOnly &&
                    (EventRuler.on(el, "keydown", EventHandlers.keydownEvent),
                    EventRuler.on(el, "keypress", EventHandlers.keypressEvent),
                    EventRuler.on(el, "keyup", EventHandlers.keyupEvent)),
                  (mobile || opts.inputEventOnly) &&
                    el.removeAttribute("maxLength"),
                  EventRuler.on(el, "input", EventHandlers.inputFallBackEvent),
                  EventRuler.on(
                    el,
                    "compositionend",
                    EventHandlers.compositionendEvent
                  )),
                EventRuler.on(el, "setvalue", EventHandlers.setValueEvent),
                (inputmask.undoValue = getBufferTemplate().join(""));
              var activeElement = (el.inputmask.shadowRoot || document)
                .activeElement;
              if (
                "" !== el.inputmask._valueGet(!0) ||
                !1 === opts.clearMaskOnLostFocus ||
                activeElement === el
              ) {
                applyInputValue(el, el.inputmask._valueGet(!0), opts);
                var buffer = getBuffer().slice();
                !1 === isComplete(buffer) &&
                  opts.clearIncomplete &&
                  resetMaskSet(),
                  opts.clearMaskOnLostFocus &&
                    activeElement !== el &&
                    (-1 === getLastValidPosition()
                      ? (buffer = [])
                      : clearOptionalTail(buffer)),
                  (!1 === opts.clearMaskOnLostFocus ||
                    (opts.showMaskOnFocus && activeElement === el) ||
                    "" !== el.inputmask._valueGet(!0)) &&
                    writeBuffer(el, buffer),
                  activeElement === el &&
                    caret(el, seekNext(getLastValidPosition()));
              }
            }
          }
          if (void 0 !== actionObj)
            switch (actionObj.action) {
              case "isComplete":
                return (el = actionObj.el), isComplete(getBuffer());
              case "unmaskedvalue":
                return (
                  (void 0 !== el && void 0 === actionObj.value) ||
                    ((valueBuffer = actionObj.value),
                    (valueBuffer = (
                      ($.isFunction(opts.onBeforeMask) &&
                        opts.onBeforeMask.call(inputmask, valueBuffer, opts)) ||
                      valueBuffer
                    ).split("")),
                    checkVal.call(this, void 0, !1, !1, valueBuffer),
                    $.isFunction(opts.onBeforeWrite) &&
                      opts.onBeforeWrite.call(
                        inputmask,
                        void 0,
                        getBuffer(),
                        0,
                        opts
                      )),
                  unmaskedvalue(el)
                );
              case "mask":
                mask();
                break;
              case "format":
                return (
                  (valueBuffer = (
                    ($.isFunction(opts.onBeforeMask) &&
                      opts.onBeforeMask.call(
                        inputmask,
                        actionObj.value,
                        opts
                      )) ||
                    actionObj.value
                  ).split("")),
                  checkVal.call(this, void 0, !0, !1, valueBuffer),
                  actionObj.metadata
                    ? {
                        value: isRTL
                          ? getBuffer().slice().reverse().join("")
                          : getBuffer().join(""),
                        metadata: maskScope.call(
                          this,
                          { action: "getmetadata" },
                          maskset,
                          opts
                        ),
                      }
                    : isRTL
                    ? getBuffer().slice().reverse().join("")
                    : getBuffer().join("")
                );
              case "isValid":
                actionObj.value
                  ? ((valueBuffer = (
                      ($.isFunction(opts.onBeforeMask) &&
                        opts.onBeforeMask.call(
                          inputmask,
                          actionObj.value,
                          opts
                        )) ||
                      actionObj.value
                    ).split("")),
                    checkVal.call(this, void 0, !0, !1, valueBuffer))
                  : (actionObj.value = isRTL
                      ? getBuffer().slice().reverse().join("")
                      : getBuffer().join(""));
                for (
                  var buffer = getBuffer(),
                    rl = determineLastRequiredPosition(),
                    lmib = buffer.length - 1;
                  rl < lmib && !isMask(lmib);
                  lmib--
                );
                return (
                  buffer.splice(rl, lmib + 1 - rl),
                  isComplete(buffer) &&
                    actionObj.value ===
                      (isRTL
                        ? getBuffer().slice().reverse().join("")
                        : getBuffer().join(""))
                );
              case "getemptymask":
                return getBufferTemplate().join("");
              case "remove":
                if (el && el.inputmask) {
                  $.data(el, "_inputmask_opts", null);
                  var cv = opts.autoUnmask
                      ? unmaskedvalue(el)
                      : el.inputmask._valueGet(opts.autoUnmask),
                    valueProperty;
                  cv !== getBufferTemplate().join("")
                    ? el.inputmask._valueSet(cv, opts.autoUnmask)
                    : el.inputmask._valueSet(""),
                    EventRuler.off(el),
                    Object.getOwnPropertyDescriptor && Object.getPrototypeOf
                      ? ((valueProperty = Object.getOwnPropertyDescriptor(
                          Object.getPrototypeOf(el),
                          "value"
                        )),
                        valueProperty &&
                          el.inputmask.__valueGet &&
                          Object.defineProperty(el, "value", {
                            get: el.inputmask.__valueGet,
                            set: el.inputmask.__valueSet,
                            configurable: !0,
                          }))
                      : document.__lookupGetter__ &&
                        el.__lookupGetter__("value") &&
                        el.inputmask.__valueGet &&
                        (el.__defineGetter__("value", el.inputmask.__valueGet),
                        el.__defineSetter__("value", el.inputmask.__valueSet)),
                    (el.inputmask = void 0);
                }
                return el;
              case "getmetadata":
                if ($.isArray(maskset.metadata)) {
                  var maskTarget = getMaskTemplate(!0, 0, !1).join("");
                  return (
                    $.each(maskset.metadata, function (ndx, mtdt) {
                      if (mtdt.mask === maskTarget)
                        return (maskTarget = mtdt), !1;
                    }),
                    maskTarget
                  );
                }
                return maskset.metadata;
            }
        };
      },
      function (module, exports, __webpack_require__) {
        "use strict";
        function _typeof(obj) {
          return (
            (_typeof =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function _typeof(obj) {
                    return typeof obj;
                  }
                : function _typeof(obj) {
                    return obj &&
                      "function" == typeof Symbol &&
                      obj.constructor === Symbol &&
                      obj !== Symbol.prototype
                      ? "symbol"
                      : typeof obj;
                  }),
            _typeof(obj)
          );
        }
        "function" != typeof Object.getPrototypeOf &&
          (Object.getPrototypeOf =
            "object" === _typeof("test".__proto__)
              ? function (object) {
                  return object.__proto__;
                }
              : function (object) {
                  return object.constructor.prototype;
                });
      },
      function (module, exports, __webpack_require__) {
        "use strict";
        function _typeof(obj) {
          return (
            (_typeof =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function _typeof(obj) {
                    return typeof obj;
                  }
                : function _typeof(obj) {
                    return obj &&
                      "function" == typeof Symbol &&
                      obj.constructor === Symbol &&
                      obj !== Symbol.prototype
                      ? "symbol"
                      : typeof obj;
                  }),
            _typeof(obj)
          );
        }
        var Inputmask = __webpack_require__(1),
          $ = Inputmask.dependencyLib,
          keyCode = __webpack_require__(0),
          currentYear = new Date().getFullYear(),
          escapeRegex = __webpack_require__(6).default,
          formatCode = {
            d: [
              "[1-9]|[12][0-9]|3[01]",
              Date.prototype.setDate,
              "day",
              Date.prototype.getDate,
            ],
            dd: [
              "0[1-9]|[12][0-9]|3[01]",
              Date.prototype.setDate,
              "day",
              function () {
                return pad(Date.prototype.getDate.call(this), 2);
              },
            ],
            ddd: [""],
            dddd: [""],
            m: [
              "[1-9]|1[012]",
              Date.prototype.setMonth,
              "month",
              function () {
                return Date.prototype.getMonth.call(this) + 1;
              },
            ],
            mm: [
              "0[1-9]|1[012]",
              Date.prototype.setMonth,
              "month",
              function () {
                return pad(Date.prototype.getMonth.call(this) + 1, 2);
              },
            ],
            mmm: [""],
            mmmm: [""],
            yy: [
              "[0-9]{2}",
              Date.prototype.setFullYear,
              "year",
              function () {
                return pad(Date.prototype.getFullYear.call(this), 2);
              },
            ],
            yyyy: [
              "[0-9]{4}",
              Date.prototype.setFullYear,
              "year",
              function () {
                return pad(Date.prototype.getFullYear.call(this), 4);
              },
            ],
            h: [
              "[1-9]|1[0-2]",
              Date.prototype.setHours,
              "hours",
              Date.prototype.getHours,
            ],
            hh: [
              "0[1-9]|1[0-2]",
              Date.prototype.setHours,
              "hours",
              function () {
                return pad(Date.prototype.getHours.call(this), 2);
              },
            ],
            hx: [
              function (x) {
                return "[0-9]{".concat(x, "}");
              },
              Date.prototype.setHours,
              "hours",
              function (x) {
                return Date.prototype.getHours;
              },
            ],
            H: [
              "1?[0-9]|2[0-3]",
              Date.prototype.setHours,
              "hours",
              Date.prototype.getHours,
            ],
            HH: [
              "0[0-9]|1[0-9]|2[0-3]",
              Date.prototype.setHours,
              "hours",
              function () {
                return pad(Date.prototype.getHours.call(this), 2);
              },
            ],
            Hx: [
              function (x) {
                return "[0-9]{".concat(x, "}");
              },
              Date.prototype.setHours,
              "hours",
              function (x) {
                return function () {
                  return pad(Date.prototype.getHours.call(this), x);
                };
              },
            ],
            M: [
              "[1-5]?[0-9]",
              Date.prototype.setMinutes,
              "minutes",
              Date.prototype.getMinutes,
            ],
            MM: [
              "0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]",
              Date.prototype.setMinutes,
              "minutes",
              function () {
                return pad(Date.prototype.getMinutes.call(this), 2);
              },
            ],
            s: [
              "[1-5]?[0-9]",
              Date.prototype.setSeconds,
              "seconds",
              Date.prototype.getSeconds,
            ],
            ss: [
              "0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]",
              Date.prototype.setSeconds,
              "seconds",
              function () {
                return pad(Date.prototype.getSeconds.call(this), 2);
              },
            ],
            l: [
              "[0-9]{3}",
              Date.prototype.setMilliseconds,
              "milliseconds",
              function () {
                return pad(Date.prototype.getMilliseconds.call(this), 3);
              },
            ],
            L: [
              "[0-9]{2}",
              Date.prototype.setMilliseconds,
              "milliseconds",
              function () {
                return pad(Date.prototype.getMilliseconds.call(this), 2);
              },
            ],
            t: ["[ap]"],
            tt: ["[ap]m"],
            T: ["[AP]"],
            TT: ["[AP]M"],
            Z: [""],
            o: [""],
            S: [""],
          },
          formatAlias = {
            isoDate: "yyyy-mm-dd",
            isoTime: "HH:MM:ss",
            isoDateTime: "yyyy-mm-dd'T'HH:MM:ss",
            isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'",
          };
        function formatcode(match) {
          var dynMatches = new RegExp("\\d+$").exec(match[0]);
          if (dynMatches && void 0 !== dynMatches[0]) {
            var fcode = formatCode[match[0][0] + "x"].slice("");
            return (
              (fcode[0] = fcode[0](dynMatches[0])),
              (fcode[3] = fcode[3](dynMatches[0])),
              fcode
            );
          }
          if (formatCode[match[0]]) return formatCode[match[0]];
        }
        function getTokenizer(opts) {
          if (!opts.tokenizer) {
            var tokens = [],
              dyntokens = [];
            for (var ndx in formatCode)
              if (/\.*x$/.test(ndx)) {
                var dynToken = ndx[0] + "\\d+";
                -1 === dyntokens.indexOf(dynToken) && dyntokens.push(dynToken);
              } else -1 === tokens.indexOf(ndx[0]) && tokens.push(ndx[0]);
            (opts.tokenizer =
              "(" +
              (0 < dyntokens.length ? dyntokens.join("|") + "|" : "") +
              tokens.join("+|") +
              ")+?|."),
              (opts.tokenizer = new RegExp(opts.tokenizer, "g"));
          }
          return opts.tokenizer;
        }
        function prefillYear(dateParts, currentResult, opts) {
          if (dateParts.year !== dateParts.rawyear) {
            var crrntyear = currentYear.toString(),
              enteredPart = dateParts.rawyear.replace(/[^0-9]/g, ""),
              currentYearPart = crrntyear.slice(0, enteredPart.length),
              currentYearNextPart = crrntyear.slice(enteredPart.length);
            if (2 === enteredPart.length && enteredPart === currentYearPart) {
              var entryCurrentYear = new Date(
                currentYear,
                dateParts.month - 1,
                dateParts.day
              );
              dateParts.day == entryCurrentYear.getDate() &&
                (!opts.max ||
                  opts.max.date.getTime() >= entryCurrentYear.getTime()) &&
                (dateParts.date.setFullYear(currentYear),
                (dateParts.year = crrntyear),
                (currentResult.insert = [
                  { pos: currentResult.pos + 1, c: currentYearNextPart[0] },
                  { pos: currentResult.pos + 2, c: currentYearNextPart[1] },
                ]));
            }
          }
          return currentResult;
        }
        function isValidDate(dateParts, currentResult, opts) {
          if (
            !isFinite(dateParts.rawday) ||
            ("29" == dateParts.day && !isFinite(dateParts.rawyear)) ||
            new Date(
              dateParts.date.getFullYear(),
              isFinite(dateParts.rawmonth)
                ? dateParts.month
                : dateParts.date.getMonth() + 1,
              0
            ).getDate() >= dateParts.day
          )
            return currentResult;
          if ("29" == dateParts.day) {
            var tokenMatch = getTokenMatch(currentResult.pos, opts);
            if (
              "yyyy" === tokenMatch.targetMatch[0] &&
              currentResult.pos - tokenMatch.targetMatchIndex == 2
            )
              return (
                (currentResult.remove = currentResult.pos + 1), currentResult
              );
          }
          return !1;
        }
        function isDateInRange(dateParts, result, opts, maskset, fromCheckval) {
          if (!result) return result;
          if (opts.min) {
            if (dateParts.rawyear) {
              var rawYear = dateParts.rawyear.replace(/[^0-9]/g, ""),
                minYear = opts.min.year.substr(0, rawYear.length),
                maxYear;
              if (rawYear < minYear) {
                var tokenMatch = getTokenMatch(result.pos, opts);
                if (
                  ((rawYear = dateParts.rawyear.substr(
                    0,
                    result.pos - tokenMatch.targetMatchIndex + 1
                  )),
                  (minYear = opts.min.year.substr(0, rawYear.length)),
                  minYear <= rawYear)
                )
                  return (
                    (result.remove =
                      tokenMatch.targetMatchIndex + rawYear.length),
                    result
                  );
                if (
                  ((rawYear =
                    "yyyy" === tokenMatch.targetMatch[0]
                      ? dateParts.rawyear.substr(1, 1)
                      : dateParts.rawyear.substr(0, 1)),
                  (minYear = opts.min.year.substr(2, 1)),
                  (maxYear = opts.max ? opts.max.year.substr(2, 1) : rawYear),
                  1 === rawYear.length &&
                    minYear <= rawYear <= maxYear &&
                    !0 !== fromCheckval)
                )
                  return (
                    "yyyy" === tokenMatch.targetMatch[0]
                      ? ((result.insert = [
                          { pos: result.pos + 1, c: rawYear, strict: !0 },
                        ]),
                        (result.caret = result.pos + 2),
                        (maskset.validPositions[result.pos].input =
                          opts.min.year[1]))
                      : ((result.insert = [
                          {
                            pos: result.pos + 1,
                            c: opts.min.year[1],
                            strict: !0,
                          },
                          { pos: result.pos + 2, c: rawYear, strict: !0 },
                        ]),
                        (result.caret = result.pos + 3),
                        (maskset.validPositions[result.pos].input =
                          opts.min.year[0])),
                    result
                  );
                result = !1;
              }
            }
            result &&
              dateParts.year &&
              dateParts.year === dateParts.rawyear &&
              opts.min.date.getTime() == opts.min.date.getTime() &&
              (result = opts.min.date.getTime() <= dateParts.date.getTime());
          }
          return (
            result &&
              opts.max &&
              opts.max.date.getTime() == opts.max.date.getTime() &&
              (result = opts.max.date.getTime() >= dateParts.date.getTime()),
            result
          );
        }
        function parse(format, dateObjValue, opts, raw) {
          var mask = "",
            match,
            fcode;
          for (
            getTokenizer(opts).lastIndex = 0;
            (match = getTokenizer(opts).exec(format));

          )
            if (void 0 === dateObjValue)
              if ((fcode = formatcode(match))) mask += "(" + fcode[0] + ")";
              else
                switch (match[0]) {
                  case "[":
                    mask += "(";
                    break;
                  case "]":
                    mask += ")?";
                    break;
                  default:
                    mask += escapeRegex(match[0]);
                }
            else if ((fcode = formatcode(match)))
              if (!0 !== raw && fcode[3]) {
                var getFn = fcode[3];
                mask += getFn.call(dateObjValue.date);
              } else
                fcode[2]
                  ? (mask += dateObjValue["raw" + fcode[2]])
                  : (mask += match[0]);
            else mask += match[0];
          return mask;
        }
        function pad(val, len) {
          for (val = String(val), len = len || 2; val.length < len; )
            val = "0" + val;
          return val;
        }
        function analyseMask(maskString, format, opts) {
          var dateObj = { date: new Date(1, 0, 1) },
            targetProp,
            mask = maskString,
            match,
            dateOperation;
          function setValue(dateObj, value, opts) {
            (dateObj[targetProp] = value.replace(/[^0-9]/g, "0")),
              (dateObj["raw" + targetProp] = value),
              void 0 !== dateOperation &&
                dateOperation.call(
                  dateObj.date,
                  "month" == targetProp
                    ? parseInt(dateObj[targetProp]) - 1
                    : dateObj[targetProp]
                );
          }
          if ("string" == typeof mask) {
            for (
              getTokenizer(opts).lastIndex = 0;
              (match = getTokenizer(opts).exec(format));

            ) {
              var dynMatches = new RegExp("\\d+$").exec(match[0]),
                fcode = dynMatches ? match[0][0] + "x" : match[0],
                value = void 0;
              if (dynMatches) {
                var lastIndex = getTokenizer(opts).lastIndex,
                  tokanMatch = getTokenMatch(match.index, opts);
                (getTokenizer(opts).lastIndex = lastIndex),
                  (value = mask.slice(
                    0,
                    mask.indexOf(tokanMatch.nextMatch[0])
                  ));
              } else value = mask.slice(0, fcode.length);
              Object.prototype.hasOwnProperty.call(formatCode, fcode) &&
                ((targetProp = formatCode[fcode][2]),
                (dateOperation = formatCode[fcode][1]),
                setValue(dateObj, value, opts)),
                (mask = mask.slice(value.length));
            }
            return dateObj;
          }
          if (
            mask &&
            "object" === _typeof(mask) &&
            Object.prototype.hasOwnProperty.call(mask, "date")
          )
            return mask;
        }
        function importDate(dateObj, opts) {
          return parse(opts.inputFormat, { date: dateObj }, opts);
        }
        function getTokenMatch(pos, opts) {
          var calcPos = 0,
            targetMatch,
            match,
            matchLength = 0;
          for (
            getTokenizer(opts).lastIndex = 0;
            (match = getTokenizer(opts).exec(opts.inputFormat));

          ) {
            var dynMatches = new RegExp("\\d+$").exec(match[0]);
            if (
              ((matchLength = dynMatches
                ? parseInt(dynMatches[0])
                : match[0].length),
              (calcPos += matchLength),
              pos <= calcPos)
            ) {
              (targetMatch = match),
                (match = getTokenizer(opts).exec(opts.inputFormat));
              break;
            }
          }
          return {
            targetMatchIndex: calcPos - matchLength,
            nextMatch: match,
            targetMatch: targetMatch,
          };
        }
        Inputmask.extendAliases({
          datetime: {
            mask: function mask(opts) {
              return (
                (opts.numericInput = !1),
                (formatCode.S = opts.i18n.ordinalSuffix.join("|")),
                (opts.inputFormat =
                  formatAlias[opts.inputFormat] || opts.inputFormat),
                (opts.displayFormat =
                  formatAlias[opts.displayFormat] ||
                  opts.displayFormat ||
                  opts.inputFormat),
                (opts.outputFormat =
                  formatAlias[opts.outputFormat] ||
                  opts.outputFormat ||
                  opts.inputFormat),
                (opts.placeholder =
                  "" !== opts.placeholder
                    ? opts.placeholder
                    : opts.inputFormat.replace(/[[\]]/, "")),
                (opts.regex = parse(opts.inputFormat, void 0, opts)),
                (opts.min = analyseMask(opts.min, opts.inputFormat, opts)),
                (opts.max = analyseMask(opts.max, opts.inputFormat, opts)),
                null
              );
            },
            placeholder: "",
            inputFormat: "isoDateTime",
            displayFormat: void 0,
            outputFormat: void 0,
            min: null,
            max: null,
            skipOptionalPartCharacter: "",
            i18n: {
              dayNames: [
                "Mon",
                "Tue",
                "Wed",
                "Thu",
                "Fri",
                "Sat",
                "Sun",
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
              ],
              monthNames: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December",
              ],
              ordinalSuffix: ["st", "nd", "rd", "th"],
            },
            preValidation: function preValidation(
              buffer,
              pos,
              c,
              isSelection,
              opts,
              maskset,
              caretPos,
              strict
            ) {
              if (strict) return !0;
              if (isNaN(c) && buffer[pos] !== c) {
                var tokenMatch = getTokenMatch(pos, opts);
                if (
                  tokenMatch.nextMatch &&
                  tokenMatch.nextMatch[0] === c &&
                  1 < tokenMatch.targetMatch[0].length
                ) {
                  var validator = formatCode[tokenMatch.targetMatch[0]][0];
                  if (new RegExp(validator).test("0" + buffer[pos - 1]))
                    return (
                      (buffer[pos] = buffer[pos - 1]),
                      (buffer[pos - 1] = "0"),
                      {
                        fuzzy: !0,
                        buffer: buffer,
                        refreshFromBuffer: { start: pos - 1, end: pos + 1 },
                        pos: pos + 1,
                      }
                    );
                }
              }
              return !0;
            },
            postValidation: function postValidation(
              buffer,
              pos,
              c,
              currentResult,
              opts,
              maskset,
              strict,
              fromCheckval
            ) {
              if (strict) return !0;
              var tokenMatch, validator;
              if (!1 === currentResult)
                return (
                  (tokenMatch = getTokenMatch(pos + 1, opts)),
                  tokenMatch.targetMatch &&
                  tokenMatch.targetMatchIndex === pos &&
                  1 < tokenMatch.targetMatch[0].length &&
                  void 0 !== formatCode[tokenMatch.targetMatch[0]] &&
                  ((validator = formatCode[tokenMatch.targetMatch[0]][0]),
                  new RegExp(validator).test("0" + c))
                    ? {
                        insert: [
                          { pos: pos, c: "0" },
                          { pos: pos + 1, c: c },
                        ],
                        pos: pos + 1,
                      }
                    : currentResult
                );
              if (
                (currentResult.fuzzy &&
                  ((buffer = currentResult.buffer), (pos = currentResult.pos)),
                (tokenMatch = getTokenMatch(pos, opts)),
                tokenMatch.targetMatch &&
                  tokenMatch.targetMatch[0] &&
                  void 0 !== formatCode[tokenMatch.targetMatch[0]])
              ) {
                validator = formatCode[tokenMatch.targetMatch[0]][0];
                var part = buffer.slice(
                  tokenMatch.targetMatchIndex,
                  tokenMatch.targetMatchIndex + tokenMatch.targetMatch[0].length
                );
                !1 === new RegExp(validator).test(part.join("")) &&
                  2 === tokenMatch.targetMatch[0].length &&
                  maskset.validPositions[tokenMatch.targetMatchIndex] &&
                  maskset.validPositions[tokenMatch.targetMatchIndex + 1] &&
                  (maskset.validPositions[
                    tokenMatch.targetMatchIndex + 1
                  ].input = "0");
              }
              var result = currentResult,
                dateParts = analyseMask(
                  buffer.join(""),
                  opts.inputFormat,
                  opts
                );
              return (
                result &&
                  dateParts.date.getTime() == dateParts.date.getTime() &&
                  ((result = prefillYear(dateParts, result, opts)),
                  (result = isValidDate(dateParts, result, opts)),
                  (result = isDateInRange(
                    dateParts,
                    result,
                    opts,
                    maskset,
                    fromCheckval
                  ))),
                pos && result && currentResult.pos !== pos
                  ? {
                      buffer: parse(opts.inputFormat, dateParts, opts).split(
                        ""
                      ),
                      refreshFromBuffer: { start: pos, end: currentResult.pos },
                    }
                  : result
              );
            },
            onKeyDown: function onKeyDown(e, buffer, caretPos, opts) {
              var input = this;
              e.ctrlKey &&
                e.keyCode === keyCode.RIGHT &&
                (this.inputmask._valueSet(importDate(new Date(), opts)),
                $(this).trigger("setvalue"));
            },
            onUnMask: function onUnMask(maskedValue, unmaskedValue, opts) {
              return unmaskedValue
                ? parse(
                    opts.outputFormat,
                    analyseMask(maskedValue, opts.inputFormat, opts),
                    opts,
                    !0
                  )
                : unmaskedValue;
            },
            casing: function casing(elem, test, pos, validPositions) {
              return 0 == test.nativeDef.indexOf("[ap]")
                ? elem.toLowerCase()
                : 0 == test.nativeDef.indexOf("[AP]")
                ? elem.toUpperCase()
                : elem;
            },
            onBeforeMask: function onBeforeMask(initialValue, opts) {
              return (
                "[object Date]" ===
                  Object.prototype.toString.call(initialValue) &&
                  (initialValue = importDate(initialValue, opts)),
                initialValue
              );
            },
            insertMode: !1,
            shiftPositions: !1,
            keepStatic: !1,
            inputmode: "numeric",
          },
        }),
          (module.exports = Inputmask);
      },
      function (module, exports, __webpack_require__) {
        "use strict";
        var Inputmask = __webpack_require__(1),
          $ = Inputmask.dependencyLib,
          keyCode = __webpack_require__(0),
          escapeRegex = __webpack_require__(6).default;
        function autoEscape(txt, opts) {
          for (var escapedTxt = "", i = 0; i < txt.length; i++)
            Inputmask.prototype.definitions[txt.charAt(i)] ||
            opts.definitions[txt.charAt(i)] ||
            opts.optionalmarker[0] === txt.charAt(i) ||
            opts.optionalmarker[1] === txt.charAt(i) ||
            opts.quantifiermarker[0] === txt.charAt(i) ||
            opts.quantifiermarker[1] === txt.charAt(i) ||
            opts.groupmarker[0] === txt.charAt(i) ||
            opts.groupmarker[1] === txt.charAt(i) ||
            opts.alternatormarker === txt.charAt(i)
              ? (escapedTxt += "\\" + txt.charAt(i))
              : (escapedTxt += txt.charAt(i));
          return escapedTxt;
        }
        function alignDigits(buffer, digits, opts, force) {
          if (
            0 < buffer.length &&
            0 < digits &&
            (!opts.digitsOptional || force)
          ) {
            var radixPosition = $.inArray(opts.radixPoint, buffer);
            -1 === radixPosition &&
              (buffer.push(opts.radixPoint),
              (radixPosition = buffer.length - 1));
            for (var i = 1; i <= digits; i++)
              isFinite(buffer[radixPosition + i]) ||
                (buffer[radixPosition + i] = "0");
          }
          return buffer;
        }
        function findValidator(symbol, maskset) {
          var posNdx = 0;
          if ("+" === symbol) {
            for (posNdx in maskset.validPositions);
            posNdx = parseInt(posNdx);
          }
          for (var tstNdx in maskset.tests)
            if (((tstNdx = parseInt(tstNdx)), posNdx <= tstNdx))
              for (
                var ndx = 0, ndxl = maskset.tests[tstNdx].length;
                ndx < ndxl;
                ndx++
              )
                if (
                  (void 0 === maskset.validPositions[tstNdx] ||
                    "-" === symbol) &&
                  maskset.tests[tstNdx][ndx].match.def === symbol
                )
                  return (
                    tstNdx +
                    (void 0 !== maskset.validPositions[tstNdx] && "-" !== symbol
                      ? 1
                      : 0)
                  );
          return posNdx;
        }
        function findValid(symbol, maskset) {
          var ret = -1;
          return (
            $.each(maskset.validPositions, function (ndx, tst) {
              if (tst && tst.match.def === symbol)
                return (ret = parseInt(ndx)), !1;
            }),
            ret
          );
        }
        function parseMinMaxOptions(opts) {
          void 0 === opts.parseMinMaxOptions &&
            (null !== opts.min &&
              ((opts.min = opts.min
                .toString()
                .replace(
                  new RegExp(escapeRegex(opts.groupSeparator), "g"),
                  ""
                )),
              "," === opts.radixPoint &&
                (opts.min = opts.min.replace(opts.radixPoint, ".")),
              (opts.min = isFinite(opts.min) ? parseFloat(opts.min) : NaN),
              isNaN(opts.min) && (opts.min = Number.MIN_VALUE)),
            null !== opts.max &&
              ((opts.max = opts.max
                .toString()
                .replace(
                  new RegExp(escapeRegex(opts.groupSeparator), "g"),
                  ""
                )),
              "," === opts.radixPoint &&
                (opts.max = opts.max.replace(opts.radixPoint, ".")),
              (opts.max = isFinite(opts.max) ? parseFloat(opts.max) : NaN),
              isNaN(opts.max) && (opts.max = Number.MAX_VALUE)),
            (opts.parseMinMaxOptions = "done"));
        }
        function genMask(opts) {
          (opts.repeat = 0),
            opts.groupSeparator === opts.radixPoint &&
              opts.digits &&
              "0" !== opts.digits &&
              ("." === opts.radixPoint
                ? (opts.groupSeparator = ",")
                : "," === opts.radixPoint
                ? (opts.groupSeparator = ".")
                : (opts.groupSeparator = "")),
            " " === opts.groupSeparator &&
              (opts.skipOptionalPartCharacter = void 0),
            1 < opts.placeholder.length &&
              (opts.placeholder = opts.placeholder.charAt(0)),
            "radixFocus" === opts.positionCaretOnClick &&
              "" === opts.placeholder &&
              (opts.positionCaretOnClick = "lvp");
          var decimalDef = "0",
            radixPointDef = opts.radixPoint;
          !0 === opts.numericInput && void 0 === opts.__financeInput
            ? ((decimalDef = "1"),
              (opts.positionCaretOnClick =
                "radixFocus" === opts.positionCaretOnClick
                  ? "lvp"
                  : opts.positionCaretOnClick),
              (opts.digitsOptional = !1),
              isNaN(opts.digits) && (opts.digits = 2),
              (opts._radixDance = !1),
              (radixPointDef = "," === opts.radixPoint ? "?" : "!"),
              "" !== opts.radixPoint &&
                void 0 === opts.definitions[radixPointDef] &&
                ((opts.definitions[radixPointDef] = {}),
                (opts.definitions[radixPointDef].validator =
                  "[" + opts.radixPoint + "]"),
                (opts.definitions[radixPointDef].placeholder = opts.radixPoint),
                (opts.definitions[radixPointDef].static = !0),
                (opts.definitions[radixPointDef].generated = !0)))
            : ((opts.__financeInput = !1), (opts.numericInput = !0));
          var mask = "[+]",
            altMask;
          if (
            ((mask += autoEscape(opts.prefix, opts)),
            "" !== opts.groupSeparator
              ? (void 0 === opts.definitions[opts.groupSeparator] &&
                  ((opts.definitions[opts.groupSeparator] = {}),
                  (opts.definitions[opts.groupSeparator].validator =
                    "[" + opts.groupSeparator + "]"),
                  (opts.definitions[opts.groupSeparator].placeholder =
                    opts.groupSeparator),
                  (opts.definitions[opts.groupSeparator].static = !0),
                  (opts.definitions[opts.groupSeparator].generated = !0)),
                (mask += opts._mask(opts)))
              : (mask += "9{+}"),
            void 0 !== opts.digits && 0 !== opts.digits)
          ) {
            var dq = opts.digits.toString().split(",");
            isFinite(dq[0]) && dq[1] && isFinite(dq[1])
              ? (mask += radixPointDef + decimalDef + "{" + opts.digits + "}")
              : (isNaN(opts.digits) || 0 < parseInt(opts.digits)) &&
                (opts.digitsOptional
                  ? ((altMask =
                      mask +
                      radixPointDef +
                      decimalDef +
                      "{0," +
                      opts.digits +
                      "}"),
                    (opts.keepStatic = !0))
                  : (mask +=
                      radixPointDef + decimalDef + "{" + opts.digits + "}"));
          }
          return (
            (mask += autoEscape(opts.suffix, opts)),
            (mask += "[-]"),
            altMask &&
              (mask = [altMask + autoEscape(opts.suffix, opts) + "[-]", mask]),
            (opts.greedy = !1),
            parseMinMaxOptions(opts),
            mask
          );
        }
        function hanndleRadixDance(pos, c, radixPos, maskset, opts) {
          return (
            opts._radixDance &&
              opts.numericInput &&
              c !== opts.negationSymbol.back &&
              pos <= radixPos &&
              (0 < radixPos || c == opts.radixPoint) &&
              (void 0 === maskset.validPositions[pos - 1] ||
                maskset.validPositions[pos - 1].input !==
                  opts.negationSymbol.back) &&
              --pos,
            pos
          );
        }
        function decimalValidator(chrs, maskset, pos, strict, opts) {
          var radixPos = maskset.buffer
              ? maskset.buffer.indexOf(opts.radixPoint)
              : -1,
            result =
              -1 !== radixPos && new RegExp("[0-9\uff11-\uff19]").test(chrs);
          return opts._radixDance &&
            result &&
            null == maskset.validPositions[radixPos]
            ? {
                insert: {
                  pos: radixPos === pos ? radixPos + 1 : radixPos,
                  c: opts.radixPoint,
                },
                pos: pos,
              }
            : result;
        }
        function checkForLeadingZeroes(buffer, opts) {
          var numberMatches = new RegExp(
              "(^" +
                ("" !== opts.negationSymbol.front
                  ? escapeRegex(opts.negationSymbol.front) + "?"
                  : "") +
                escapeRegex(opts.prefix) +
                ")(.*)(" +
                escapeRegex(opts.suffix) +
                ("" != opts.negationSymbol.back
                  ? escapeRegex(opts.negationSymbol.back) + "?"
                  : "") +
                "$)"
            ).exec(buffer.slice().reverse().join("")),
            number = numberMatches ? numberMatches[2] : "",
            leadingzeroes = !1;
          return (
            number &&
              ((number = number.split(opts.radixPoint.charAt(0))[0]),
              (leadingzeroes = new RegExp(
                "^[0" + opts.groupSeparator + "]*"
              ).exec(number))),
            !(
              !leadingzeroes ||
              !(
                1 < leadingzeroes[0].length ||
                (0 < leadingzeroes[0].length &&
                  leadingzeroes[0].length < number.length)
              )
            ) && leadingzeroes
          );
        }
        Inputmask.extendAliases({
          numeric: {
            mask: genMask,
            _mask: function _mask(opts) {
              return "(" + opts.groupSeparator + "999){+|1}";
            },
            digits: "*",
            digitsOptional: !0,
            enforceDigitsOnBlur: !1,
            radixPoint: ".",
            positionCaretOnClick: "radixFocus",
            _radixDance: !0,
            groupSeparator: "",
            allowMinus: !0,
            negationSymbol: { front: "-", back: "" },
            prefix: "",
            suffix: "",
            min: null,
            max: null,
            SetMaxOnOverflow: !1,
            step: 1,
            inputType: "text",
            unmaskAsNumber: !1,
            roundingFN: Math.round,
            inputmode: "numeric",
            shortcuts: { k: "000", m: "000000" },
            placeholder: "0",
            greedy: !1,
            rightAlign: !0,
            insertMode: !0,
            autoUnmask: !1,
            skipOptionalPartCharacter: "",
            definitions: {
              0: { validator: decimalValidator },
              1: { validator: decimalValidator, definitionSymbol: "9" },
              "+": {
                validator: function validator(
                  chrs,
                  maskset,
                  pos,
                  strict,
                  opts
                ) {
                  return (
                    opts.allowMinus &&
                    ("-" === chrs || chrs === opts.negationSymbol.front)
                  );
                },
              },
              "-": {
                validator: function validator(
                  chrs,
                  maskset,
                  pos,
                  strict,
                  opts
                ) {
                  return opts.allowMinus && chrs === opts.negationSymbol.back;
                },
              },
            },
            preValidation: function preValidation(
              buffer,
              pos,
              c,
              isSelection,
              opts,
              maskset,
              caretPos,
              strict
            ) {
              if (!1 !== opts.__financeInput && c === opts.radixPoint)
                return !1;
              var pattern;
              if ((pattern = opts.shortcuts && opts.shortcuts[c])) {
                if (1 < pattern.length)
                  for (var inserts = [], i = 0; i < pattern.length; i++)
                    inserts.push({ pos: pos + i, c: pattern[i], strict: !1 });
                return { insert: inserts };
              }
              var radixPos = $.inArray(opts.radixPoint, buffer),
                initPos = pos;
              if (
                ((pos = hanndleRadixDance(pos, c, radixPos, maskset, opts)),
                "-" === c || c === opts.negationSymbol.front)
              ) {
                if (!0 !== opts.allowMinus) return !1;
                var isNegative = !1,
                  front = findValid("+", maskset),
                  back = findValid("-", maskset);
                return (
                  -1 !== front && (isNegative = [front, back]),
                  !1 !== isNegative
                    ? { remove: isNegative, caret: initPos }
                    : {
                        insert: [
                          {
                            pos: findValidator("+", maskset),
                            c: opts.negationSymbol.front,
                            fromIsValid: !0,
                          },
                          {
                            pos: findValidator("-", maskset),
                            c: opts.negationSymbol.back,
                            fromIsValid: void 0,
                          },
                        ],
                        caret: initPos + opts.negationSymbol.back.length,
                      }
                );
              }
              if (strict) return !0;
              if (
                -1 !== radixPos &&
                !0 === opts._radixDance &&
                !1 === isSelection &&
                c === opts.radixPoint &&
                void 0 !== opts.digits &&
                (isNaN(opts.digits) || 0 < parseInt(opts.digits)) &&
                radixPos !== pos
              )
                return {
                  caret:
                    opts._radixDance && pos === radixPos - 1
                      ? radixPos + 1
                      : radixPos,
                };
              if (!1 === opts.__financeInput)
                if (isSelection) {
                  if (opts.digitsOptional)
                    return { rewritePosition: caretPos.end };
                  if (!opts.digitsOptional) {
                    if (caretPos.begin > radixPos && caretPos.end <= radixPos)
                      return c === opts.radixPoint
                        ? {
                            insert: {
                              pos: radixPos + 1,
                              c: "0",
                              fromIsValid: !0,
                            },
                            rewritePosition: radixPos,
                          }
                        : { rewritePosition: radixPos + 1 };
                    if (caretPos.begin < radixPos)
                      return { rewritePosition: caretPos.begin - 1 };
                  }
                } else if (
                  !opts.showMaskOnHover &&
                  !opts.showMaskOnFocus &&
                  !opts.digitsOptional &&
                  0 < opts.digits &&
                  "" === this.inputmask.__valueGet.call(this)
                )
                  return { rewritePosition: radixPos };
              return { rewritePosition: pos };
            },
            postValidation: function postValidation(
              buffer,
              pos,
              c,
              currentResult,
              opts,
              maskset,
              strict
            ) {
              if (!1 === currentResult) return currentResult;
              if (strict) return !0;
              if (null !== opts.min || null !== opts.max) {
                var unmasked = opts.onUnMask(
                  buffer.slice().reverse().join(""),
                  void 0,
                  $.extend({}, opts, { unmaskAsNumber: !0 })
                );
                if (
                  null !== opts.min &&
                  unmasked < opts.min &&
                  (unmasked.toString().length > opts.min.toString().length ||
                    unmasked < 0)
                )
                  return !1;
                if (null !== opts.max && unmasked > opts.max)
                  return (
                    !!opts.SetMaxOnOverflow && {
                      refreshFromBuffer: !0,
                      buffer: alignDigits(
                        opts.max
                          .toString()
                          .replace(".", opts.radixPoint)
                          .split(""),
                        opts.digits,
                        opts
                      ).reverse(),
                    }
                  );
              }
              return currentResult;
            },
            onUnMask: function onUnMask(maskedValue, unmaskedValue, opts) {
              if ("" === unmaskedValue && !0 === opts.nullable)
                return unmaskedValue;
              var processValue = maskedValue.replace(opts.prefix, "");
              return (
                (processValue = processValue.replace(opts.suffix, "")),
                (processValue = processValue.replace(
                  new RegExp(escapeRegex(opts.groupSeparator), "g"),
                  ""
                )),
                "" !== opts.placeholder.charAt(0) &&
                  (processValue = processValue.replace(
                    new RegExp(opts.placeholder.charAt(0), "g"),
                    "0"
                  )),
                opts.unmaskAsNumber
                  ? ("" !== opts.radixPoint &&
                      -1 !== processValue.indexOf(opts.radixPoint) &&
                      (processValue = processValue.replace(
                        escapeRegex.call(this, opts.radixPoint),
                        "."
                      )),
                    (processValue = processValue.replace(
                      new RegExp("^" + escapeRegex(opts.negationSymbol.front)),
                      "-"
                    )),
                    (processValue = processValue.replace(
                      new RegExp(escapeRegex(opts.negationSymbol.back) + "$"),
                      ""
                    )),
                    Number(processValue))
                  : processValue
              );
            },
            isComplete: function isComplete(buffer, opts) {
              var maskedValue = (opts.numericInput
                ? buffer.slice().reverse()
                : buffer
              ).join("");
              return (
                (maskedValue = maskedValue.replace(
                  new RegExp("^" + escapeRegex(opts.negationSymbol.front)),
                  "-"
                )),
                (maskedValue = maskedValue.replace(
                  new RegExp(escapeRegex(opts.negationSymbol.back) + "$"),
                  ""
                )),
                (maskedValue = maskedValue.replace(opts.prefix, "")),
                (maskedValue = maskedValue.replace(opts.suffix, "")),
                (maskedValue = maskedValue.replace(
                  new RegExp(
                    escapeRegex(opts.groupSeparator) + "([0-9]{3})",
                    "g"
                  ),
                  "$1"
                )),
                "," === opts.radixPoint &&
                  (maskedValue = maskedValue.replace(
                    escapeRegex(opts.radixPoint),
                    "."
                  )),
                isFinite(maskedValue)
              );
            },
            onBeforeMask: function onBeforeMask(initialValue, opts) {
              var radixPoint = opts.radixPoint || ",";
              isFinite(opts.digits) && (opts.digits = parseInt(opts.digits)),
                ("number" != typeof initialValue &&
                  "number" !== opts.inputType) ||
                  "" === radixPoint ||
                  (initialValue = initialValue
                    .toString()
                    .replace(".", radixPoint));
              var valueParts = initialValue.split(radixPoint),
                integerPart = valueParts[0].replace(/[^\-0-9]/g, ""),
                decimalPart =
                  1 < valueParts.length
                    ? valueParts[1].replace(/[^0-9]/g, "")
                    : "",
                forceDigits = 1 < valueParts.length;
              initialValue =
                integerPart +
                ("" !== decimalPart ? radixPoint + decimalPart : decimalPart);
              var digits = 0;
              if (
                "" !== radixPoint &&
                ((digits =
                  !opts.digitsOptional || opts.digits < decimalPart.length
                    ? opts.digits
                    : decimalPart.length),
                "" !== decimalPart || !opts.digitsOptional)
              ) {
                var digitsFactor = Math.pow(10, digits || 1);
                (initialValue = initialValue.replace(
                  escapeRegex(radixPoint),
                  "."
                )),
                  isNaN(parseFloat(initialValue)) ||
                    (initialValue = (
                      opts.roundingFN(parseFloat(initialValue) * digitsFactor) /
                      digitsFactor
                    ).toFixed(digits)),
                  (initialValue = initialValue
                    .toString()
                    .replace(".", radixPoint));
              }
              if (
                (0 === opts.digits &&
                  -1 !== initialValue.indexOf(radixPoint) &&
                  (initialValue = initialValue.substring(
                    0,
                    initialValue.indexOf(radixPoint)
                  )),
                null !== opts.min || null !== opts.max)
              ) {
                var numberValue = initialValue
                  .toString()
                  .replace(radixPoint, ".");
                null !== opts.min && numberValue < opts.min
                  ? (initialValue = opts.min
                      .toString()
                      .replace(".", radixPoint))
                  : null !== opts.max &&
                    numberValue > opts.max &&
                    (initialValue = opts.max
                      .toString()
                      .replace(".", radixPoint));
              }
              return alignDigits(
                initialValue.toString().split(""),
                digits,
                opts,
                forceDigits
              ).join("");
            },
            onBeforeWrite: function onBeforeWrite(e, buffer, caretPos, opts) {
              function stripBuffer(buffer, stripRadix) {
                if (!1 !== opts.__financeInput || stripRadix) {
                  var position = $.inArray(opts.radixPoint, buffer);
                  -1 !== position && buffer.splice(position, 1);
                }
                if ("" !== opts.groupSeparator)
                  for (
                    ;
                    -1 !== (position = buffer.indexOf(opts.groupSeparator));

                  )
                    buffer.splice(position, 1);
                return buffer;
              }
              var result,
                leadingzeroes = checkForLeadingZeroes(buffer, opts);
              if (leadingzeroes)
                for (
                  var caretNdx =
                      buffer
                        .join("")
                        .lastIndexOf(
                          leadingzeroes[0].split("").reverse().join("")
                        ) - (leadingzeroes[0] == leadingzeroes.input ? 0 : 1),
                    offset = leadingzeroes[0] == leadingzeroes.input ? 1 : 0,
                    i = leadingzeroes[0].length - offset;
                  0 < i;
                  i--
                )
                  delete this.maskset.validPositions[caretNdx + i],
                    delete buffer[caretNdx + i];
              if (e)
                switch (e.type) {
                  case "blur":
                  case "checkval":
                    if (null !== opts.min) {
                      var unmasked = opts.onUnMask(
                        buffer.slice().reverse().join(""),
                        void 0,
                        $.extend({}, opts, { unmaskAsNumber: !0 })
                      );
                      if (null !== opts.min && unmasked < opts.min)
                        return {
                          refreshFromBuffer: !0,
                          buffer: alignDigits(
                            opts.min
                              .toString()
                              .replace(".", opts.radixPoint)
                              .split(""),
                            opts.digits,
                            opts
                          ).reverse(),
                        };
                    }
                    if (
                      buffer[buffer.length - 1] === opts.negationSymbol.front
                    ) {
                      var nmbrMtchs = new RegExp(
                          "(^" +
                            ("" != opts.negationSymbol.front
                              ? escapeRegex(opts.negationSymbol.front) + "?"
                              : "") +
                            escapeRegex(opts.prefix) +
                            ")(.*)(" +
                            escapeRegex(opts.suffix) +
                            ("" != opts.negationSymbol.back
                              ? escapeRegex(opts.negationSymbol.back) + "?"
                              : "") +
                            "$)"
                        ).exec(
                          stripBuffer(buffer.slice(), !0).reverse().join("")
                        ),
                        number = nmbrMtchs ? nmbrMtchs[2] : "";
                      0 == number &&
                        (result = { refreshFromBuffer: !0, buffer: [0] });
                    } else
                      "" !== opts.radixPoint &&
                        buffer[0] === opts.radixPoint &&
                        (result && result.buffer
                          ? result.buffer.shift()
                          : (buffer.shift(),
                            (result = {
                              refreshFromBuffer: !0,
                              buffer: stripBuffer(buffer),
                            })));
                    if (opts.enforceDigitsOnBlur) {
                      result = result || {};
                      var bffr =
                        (result && result.buffer) || buffer.slice().reverse();
                      (result.refreshFromBuffer = !0),
                        (result.buffer = alignDigits(
                          bffr,
                          opts.digits,
                          opts,
                          !0
                        ).reverse());
                    }
                }
              return result;
            },
            onKeyDown: function onKeyDown(e, buffer, caretPos, opts) {
              var $input = $(this),
                bffr;
              if (e.ctrlKey)
                switch (e.keyCode) {
                  case keyCode.UP:
                    return (
                      this.inputmask.__valueSet.call(
                        this,
                        parseFloat(this.inputmask.unmaskedvalue()) +
                          parseInt(opts.step)
                      ),
                      $input.trigger("setvalue"),
                      !1
                    );
                  case keyCode.DOWN:
                    return (
                      this.inputmask.__valueSet.call(
                        this,
                        parseFloat(this.inputmask.unmaskedvalue()) -
                          parseInt(opts.step)
                      ),
                      $input.trigger("setvalue"),
                      !1
                    );
                }
              if (
                !e.shiftKey &&
                (e.keyCode === keyCode.DELETE ||
                  e.keyCode === keyCode.BACKSPACE ||
                  e.keyCode === keyCode.BACKSPACE_SAFARI) &&
                caretPos.begin !== buffer.length
              ) {
                if (
                  buffer[
                    e.keyCode === keyCode.DELETE
                      ? caretPos.begin - 1
                      : caretPos.end
                  ] === opts.negationSymbol.front
                )
                  return (
                    (bffr = buffer.slice().reverse()),
                    "" !== opts.negationSymbol.front && bffr.shift(),
                    "" !== opts.negationSymbol.back && bffr.pop(),
                    $input.trigger("setvalue", [bffr.join(""), caretPos.begin]),
                    !1
                  );
                if (!0 === opts._radixDance) {
                  var radixPos = $.inArray(opts.radixPoint, buffer);
                  if (opts.digitsOptional) {
                    if (0 === radixPos)
                      return (
                        (bffr = buffer.slice().reverse()),
                        bffr.pop(),
                        $input.trigger("setvalue", [
                          bffr.join(""),
                          caretPos.begin >= bffr.length
                            ? bffr.length
                            : caretPos.begin,
                        ]),
                        !1
                      );
                  } else if (
                    -1 !== radixPos &&
                    (caretPos.begin < radixPos ||
                      caretPos.end < radixPos ||
                      (e.keyCode === keyCode.DELETE &&
                        caretPos.begin === radixPos))
                  )
                    return (
                      caretPos.begin !== caretPos.end ||
                        (e.keyCode !== keyCode.BACKSPACE &&
                          e.keyCode !== keyCode.BACKSPACE_SAFARI) ||
                        caretPos.begin++,
                      (bffr = buffer.slice().reverse()),
                      bffr.splice(
                        bffr.length - caretPos.begin,
                        caretPos.begin - caretPos.end + 1
                      ),
                      (bffr = alignDigits(bffr, opts.digits, opts).join("")),
                      $input.trigger("setvalue", [
                        bffr,
                        caretPos.begin >= bffr.length
                          ? radixPos + 1
                          : caretPos.begin,
                      ]),
                      !1
                    );
                }
              }
            },
          },
          currency: {
            prefix: "",
            groupSeparator: ",",
            alias: "numeric",
            digits: 2,
            digitsOptional: !1,
          },
          decimal: { alias: "numeric" },
          integer: { alias: "numeric", digits: 0 },
          percentage: {
            alias: "numeric",
            min: 0,
            max: 100,
            suffix: " %",
            digits: 0,
            allowMinus: !1,
          },
          indianns: {
            alias: "numeric",
            _mask: function _mask(opts) {
              return (
                "(" +
                opts.groupSeparator +
                "99){*|1}(" +
                opts.groupSeparator +
                "999){1|1}"
              );
            },
            groupSeparator: ",",
            radixPoint: ".",
            placeholder: "0",
            digits: 2,
            digitsOptional: !1,
          },
        }),
          (module.exports = Inputmask);
      },
      function (module, exports, __webpack_require__) {
        "use strict";
        var _window = _interopRequireDefault(__webpack_require__(4)),
          _inputmask = _interopRequireDefault(__webpack_require__(1));
        function _typeof(obj) {
          return (
            (_typeof =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function _typeof(obj) {
                    return typeof obj;
                  }
                : function _typeof(obj) {
                    return obj &&
                      "function" == typeof Symbol &&
                      obj.constructor === Symbol &&
                      obj !== Symbol.prototype
                      ? "symbol"
                      : typeof obj;
                  }),
            _typeof(obj)
          );
        }
        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor))
            throw new TypeError("Cannot call a class as a function");
        }
        function _createSuper(Derived) {
          return function () {
            var Super = _getPrototypeOf(Derived),
              result;
            if (_isNativeReflectConstruct()) {
              var NewTarget = _getPrototypeOf(this).constructor;
              result = Reflect.construct(Super, arguments, NewTarget);
            } else result = Super.apply(this, arguments);
            return _possibleConstructorReturn(this, result);
          };
        }
        function _possibleConstructorReturn(self, call) {
          return !call ||
            ("object" !== _typeof(call) && "function" != typeof call)
            ? _assertThisInitialized(self)
            : call;
        }
        function _assertThisInitialized(self) {
          if (void 0 === self)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return self;
        }
        function _inherits(subClass, superClass) {
          if ("function" != typeof superClass && null !== superClass)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (subClass.prototype = Object.create(
            superClass && superClass.prototype,
            { constructor: { value: subClass, writable: !0, configurable: !0 } }
          )),
            superClass && _setPrototypeOf(subClass, superClass);
        }
        function _wrapNativeSuper(Class) {
          var _cache = "function" == typeof Map ? new Map() : void 0;
          return (
            (_wrapNativeSuper = function _wrapNativeSuper(Class) {
              if (null === Class || !_isNativeFunction(Class)) return Class;
              if ("function" != typeof Class)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              if ("undefined" != typeof _cache) {
                if (_cache.has(Class)) return _cache.get(Class);
                _cache.set(Class, Wrapper);
              }
              function Wrapper() {
                return _construct(
                  Class,
                  arguments,
                  _getPrototypeOf(this).constructor
                );
              }
              return (
                (Wrapper.prototype = Object.create(Class.prototype, {
                  constructor: {
                    value: Wrapper,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                _setPrototypeOf(Wrapper, Class)
              );
            }),
            _wrapNativeSuper(Class)
          );
        }
        function _construct(Parent, args, Class) {
          return (
            (_construct = _isNativeReflectConstruct()
              ? Reflect.construct
              : function _construct(Parent, args, Class) {
                  var a = [null];
                  a.push.apply(a, args);
                  var Constructor = Function.bind.apply(Parent, a),
                    instance = new Constructor();
                  return (
                    Class && _setPrototypeOf(instance, Class.prototype),
                    instance
                  );
                }),
            _construct.apply(null, arguments)
          );
        }
        function _isNativeReflectConstruct() {
          if (
            "undefined" != typeof Reflect &&
            Reflect.construct &&
            !Reflect.construct.sham
          ) {
            if ("function" == typeof Proxy) return 1;
            try {
              return (
                Date.prototype.toString.call(
                  Reflect.construct(Date, [], function () {})
                ),
                1
              );
            } catch (e) {
              return;
            }
          }
        }
        function _isNativeFunction(fn) {
          return -1 !== Function.toString.call(fn).indexOf("[native code]");
        }
        function _setPrototypeOf(o, p) {
          return (
            (_setPrototypeOf =
              Object.setPrototypeOf ||
              function _setPrototypeOf(o, p) {
                return (o.__proto__ = p), o;
              }),
            _setPrototypeOf(o, p)
          );
        }
        function _getPrototypeOf(o) {
          return (
            (_getPrototypeOf = Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function _getPrototypeOf(o) {
                  return o.__proto__ || Object.getPrototypeOf(o);
                }),
            _getPrototypeOf(o)
          );
        }
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }
        var document = _window.default.document;
        if (
          document &&
          document.head &&
          document.head.attachShadow &&
          _window.default.customElements &&
          void 0 === _window.default.customElements.get("input-mask")
        ) {
          var InputmaskElement = (function (_HTMLElement) {
            _inherits(InputmaskElement, _HTMLElement);
            var _super = _createSuper(InputmaskElement);
            function InputmaskElement() {
              var _this;
              _classCallCheck(this, InputmaskElement),
                (_this = _super.call(this));
              var attributeNames = _this.getAttributeNames(),
                shadow = _this.attachShadow({ mode: "closed" }),
                input = document.createElement("input");
              for (var attr in ((input.type = "text"),
              shadow.appendChild(input),
              attributeNames))
                Object.prototype.hasOwnProperty.call(attributeNames, attr) &&
                  input.setAttribute(
                    attributeNames[attr],
                    _this.getAttribute(attributeNames[attr])
                  );
              var im = new _inputmask.default();
              return (
                (im.dataAttribute = ""),
                im.mask(input),
                (input.inputmask.shadowRoot = shadow),
                _this
              );
            }
            return InputmaskElement;
          })(_wrapNativeSuper(HTMLElement));
          _window.default.customElements.define("input-mask", InputmaskElement);
        }
      },
      function (module, exports, __webpack_require__) {
        "use strict";
        function _typeof(obj) {
          return (
            (_typeof =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function _typeof(obj) {
                    return typeof obj;
                  }
                : function _typeof(obj) {
                    return obj &&
                      "function" == typeof Symbol &&
                      obj.constructor === Symbol &&
                      obj !== Symbol.prototype
                      ? "symbol"
                      : typeof obj;
                  }),
            _typeof(obj)
          );
        }
        var $ = __webpack_require__(3),
          Inputmask = __webpack_require__(1);
        void 0 === $.fn.inputmask &&
          ($.fn.inputmask = function (fn, options) {
            var nptmask,
              input = this[0];
            if ((void 0 === options && (options = {}), "string" == typeof fn))
              switch (fn) {
                case "unmaskedvalue":
                  return input && input.inputmask
                    ? input.inputmask.unmaskedvalue()
                    : $(input).val();
                case "remove":
                  return this.each(function () {
                    this.inputmask && this.inputmask.remove();
                  });
                case "getemptymask":
                  return input && input.inputmask
                    ? input.inputmask.getemptymask()
                    : "";
                case "hasMaskedValue":
                  return (
                    !(!input || !input.inputmask) &&
                    input.inputmask.hasMaskedValue()
                  );
                case "isComplete":
                  return (
                    !input || !input.inputmask || input.inputmask.isComplete()
                  );
                case "getmetadata":
                  return input && input.inputmask
                    ? input.inputmask.getmetadata()
                    : void 0;
                case "setvalue":
                  Inputmask.setValue(input, options);
                  break;
                case "option":
                  if ("string" != typeof options)
                    return this.each(function () {
                      if (void 0 !== this.inputmask)
                        return this.inputmask.option(options);
                    });
                  if (input && void 0 !== input.inputmask)
                    return input.inputmask.option(options);
                  break;
                default:
                  return (
                    (options.alias = fn),
                    (nptmask = new Inputmask(options)),
                    this.each(function () {
                      nptmask.mask(this);
                    })
                  );
              }
            else {
              if (Array.isArray(fn))
                return (
                  (options.alias = fn),
                  (nptmask = new Inputmask(options)),
                  this.each(function () {
                    nptmask.mask(this);
                  })
                );
              if ("object" == _typeof(fn))
                return (
                  (nptmask = new Inputmask(fn)),
                  void 0 === fn.mask && void 0 === fn.alias
                    ? this.each(function () {
                        if (void 0 !== this.inputmask)
                          return this.inputmask.option(fn);
                        nptmask.mask(this);
                      })
                    : this.each(function () {
                        nptmask.mask(this);
                      })
                );
              if (void 0 === fn)
                return this.each(function () {
                  (nptmask = new Inputmask(options)), nptmask.mask(this);
                });
            }
          });
      },
      function (module, exports, __webpack_require__) {
        "use strict";
        var im = __webpack_require__(7),
          jQuery = __webpack_require__(3);
        im.dependencyLib === jQuery && __webpack_require__(14),
          (module.exports = im);
      },
    ]),
    (installedModules = {}),
    (__webpack_require__.m = modules),
    (__webpack_require__.c = installedModules),
    (__webpack_require__.d = function (exports, name, getter) {
      __webpack_require__.o(exports, name) ||
        Object.defineProperty(exports, name, { enumerable: !0, get: getter });
    }),
    (__webpack_require__.r = function (exports) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(exports, "__esModule", { value: !0 });
    }),
    (__webpack_require__.t = function (value, mode) {
      if ((1 & mode && (value = __webpack_require__(value)), 8 & mode))
        return value;
      if (4 & mode && "object" == typeof value && value && value.__esModule)
        return value;
      var ns = Object.create(null);
      if (
        (__webpack_require__.r(ns),
        Object.defineProperty(ns, "default", { enumerable: !0, value: value }),
        2 & mode && "string" != typeof value)
      )
        for (var key in value)
          __webpack_require__.d(
            ns,
            key,
            function (key) {
              return value[key];
            }.bind(null, key)
          );
      return ns;
    }),
    (__webpack_require__.n = function (module) {
      var getter =
        module && module.__esModule
          ? function getDefault() {
              return module.default;
            }
          : function getModuleExports() {
              return module;
            };
      return __webpack_require__.d(getter, "a", getter), getter;
    }),
    (__webpack_require__.o = function (object, property) {
      return Object.prototype.hasOwnProperty.call(object, property);
    }),
    (__webpack_require__.p = ""),
    __webpack_require__((__webpack_require__.s = 15))
  );
  function __webpack_require__(moduleId) {
    if (installedModules[moduleId]) return installedModules[moduleId].exports;
    var module = (installedModules[moduleId] = {
      i: moduleId,
      l: !1,
      exports: {},
    });
    return (
      modules[moduleId].call(
        module.exports,
        module,
        module.exports,
        __webpack_require__
      ),
      (module.l = !0),
      module.exports
    );
  }
  var modules, installedModules;
});
