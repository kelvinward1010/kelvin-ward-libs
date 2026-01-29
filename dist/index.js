import ee from "react";
var v = { exports: {} }, _ = {};
var $;
function re() {
  if ($) return _;
  $ = 1;
  var o = /* @__PURE__ */ Symbol.for("react.transitional.element"), l = /* @__PURE__ */ Symbol.for("react.fragment");
  function c(f, s, u) {
    var d = null;
    if (u !== void 0 && (d = "" + u), s.key !== void 0 && (d = "" + s.key), "key" in s) {
      u = {};
      for (var m in s)
        m !== "key" && (u[m] = s[m]);
    } else u = s;
    return s = u.ref, {
      $$typeof: o,
      type: f,
      key: d,
      ref: s !== void 0 ? s : null,
      props: u
    };
  }
  return _.Fragment = l, _.jsx = c, _.jsxs = c, _;
}
var E = {};
var I;
function te() {
  return I || (I = 1, process.env.NODE_ENV !== "production" && (function() {
    function o(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === Z ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case p:
          return "Fragment";
        case q:
          return "Profiler";
        case U:
          return "StrictMode";
        case G:
          return "Suspense";
        case X:
          return "SuspenseList";
        case H:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case W:
            return "Portal";
          case V:
            return e.displayName || "Context";
          case J:
            return (e._context.displayName || "Context") + ".Consumer";
          case z:
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case B:
            return r = e.displayName || null, r !== null ? r : o(e.type) || "Memo";
          case T:
            r = e._payload, e = e._init;
            try {
              return o(e(r));
            } catch {
            }
        }
      return null;
    }
    function l(e) {
      return "" + e;
    }
    function c(e) {
      try {
        l(e);
        var r = !1;
      } catch {
        r = !0;
      }
      if (r) {
        r = console;
        var t = r.error, n = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t.call(
          r,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          n
        ), l(e);
      }
    }
    function f(e) {
      if (e === p) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === T)
        return "<...>";
      try {
        var r = o(e);
        return r ? "<" + r + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function s() {
      var e = k.A;
      return e === null ? null : e.getOwner();
    }
    function u() {
      return Error("react-stack-top-frame");
    }
    function d(e) {
      if (y.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function m(e, r) {
      function t() {
        g || (g = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          r
        ));
      }
      t.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: t,
        configurable: !0
      });
    }
    function L() {
      var e = o(this.type);
      return h[e] || (h[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function M(e, r, t, n, b, A) {
      var a = t.ref;
      return e = {
        $$typeof: j,
        type: e,
        key: r,
        props: t,
        _owner: n
      }, (a !== void 0 ? a : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: L
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(e, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: b
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: A
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function w(e, r, t, n, b, A) {
      var a = r.children;
      if (a !== void 0)
        if (n)
          if (Q(a)) {
            for (n = 0; n < a.length; n++)
              P(a[n]);
            Object.freeze && Object.freeze(a);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else P(a);
      if (y.call(r, "key")) {
        a = o(e);
        var i = Object.keys(r).filter(function(K) {
          return K !== "key";
        });
        n = 0 < i.length ? "{key: someKey, " + i.join(": ..., ") + ": ...}" : "{key: someKey}", Y[a + n] || (i = 0 < i.length ? "{" + i.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          n,
          a,
          i,
          a
        ), Y[a + n] = !0);
      }
      if (a = null, t !== void 0 && (c(t), a = "" + t), d(r) && (c(r.key), a = "" + r.key), "key" in r) {
        t = {};
        for (var S in r)
          S !== "key" && (t[S] = r[S]);
      } else t = r;
      return a && m(
        t,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), M(
        e,
        a,
        t,
        s(),
        b,
        A
      );
    }
    function P(e) {
      x(e) ? e._store && (e._store.validated = 1) : typeof e == "object" && e !== null && e.$$typeof === T && (e._payload.status === "fulfilled" ? x(e._payload.value) && e._payload.value._store && (e._payload.value._store.validated = 1) : e._store && (e._store.validated = 1));
    }
    function x(e) {
      return typeof e == "object" && e !== null && e.$$typeof === j;
    }
    var R = ee, j = /* @__PURE__ */ Symbol.for("react.transitional.element"), W = /* @__PURE__ */ Symbol.for("react.portal"), p = /* @__PURE__ */ Symbol.for("react.fragment"), U = /* @__PURE__ */ Symbol.for("react.strict_mode"), q = /* @__PURE__ */ Symbol.for("react.profiler"), J = /* @__PURE__ */ Symbol.for("react.consumer"), V = /* @__PURE__ */ Symbol.for("react.context"), z = /* @__PURE__ */ Symbol.for("react.forward_ref"), G = /* @__PURE__ */ Symbol.for("react.suspense"), X = /* @__PURE__ */ Symbol.for("react.suspense_list"), B = /* @__PURE__ */ Symbol.for("react.memo"), T = /* @__PURE__ */ Symbol.for("react.lazy"), H = /* @__PURE__ */ Symbol.for("react.activity"), Z = /* @__PURE__ */ Symbol.for("react.client.reference"), k = R.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, y = Object.prototype.hasOwnProperty, Q = Array.isArray, O = console.createTask ? console.createTask : function() {
      return null;
    };
    R = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var g, h = {}, N = R.react_stack_bottom_frame.bind(
      R,
      u
    )(), C = O(f(u)), Y = {};
    E.Fragment = p, E.jsx = function(e, r, t) {
      var n = 1e4 > k.recentlyCreatedOwnerStacks++;
      return w(
        e,
        r,
        t,
        !1,
        n ? Error("react-stack-top-frame") : N,
        n ? O(f(e)) : C
      );
    }, E.jsxs = function(e, r, t) {
      var n = 1e4 > k.recentlyCreatedOwnerStacks++;
      return w(
        e,
        r,
        t,
        !0,
        n ? Error("react-stack-top-frame") : N,
        n ? O(f(e)) : C
      );
    };
  })()), E;
}
var F;
function ne() {
  return F || (F = 1, process.env.NODE_ENV === "production" ? v.exports = re() : v.exports = te()), v.exports;
}
var D = ne();
function oe({ className: o = "", children: l, ...c }) {
  return /* @__PURE__ */ D.jsx("button", { ...c, className: `kelvinward-btn ${o}`, children: l });
}
function se({ className: o = "", ...l }) {
  return /* @__PURE__ */ D.jsx(
    "input",
    {
      ...l,
      className: `kelvinward-input ${o}`
    }
  );
}
export {
  oe as Button,
  se as Input
};
