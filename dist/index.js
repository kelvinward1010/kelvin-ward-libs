import ee from "react";
var p = { exports: {} }, E = {};
var I;
function re() {
  if (I) return E;
  I = 1;
  var s = /* @__PURE__ */ Symbol.for("react.transitional.element"), l = /* @__PURE__ */ Symbol.for("react.fragment");
  function c(i, o, u) {
    var m = null;
    if (u !== void 0 && (m = "" + u), o.key !== void 0 && (m = "" + o.key), "key" in o) {
      u = {};
      for (var _ in o)
        _ !== "key" && (u[_] = o[_]);
    } else u = o;
    return o = u.ref, {
      $$typeof: s,
      type: i,
      key: m,
      ref: o !== void 0 ? o : null,
      props: u
    };
  }
  return E.Fragment = l, E.jsx = c, E.jsxs = c, E;
}
var b = {};
var F;
function te() {
  return F || (F = 1, process.env.NODE_ENV !== "production" && (function() {
    function s(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === Z ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case k:
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
            return r = e.displayName || null, r !== null ? r : s(e.type) || "Memo";
          case T:
            r = e._payload, e = e._init;
            try {
              return s(e(r));
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
    function i(e) {
      if (e === k) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === T)
        return "<...>";
      try {
        var r = s(e);
        return r ? "<" + r + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function o() {
      var e = x.A;
      return e === null ? null : e.getOwner();
    }
    function u() {
      return Error("react-stack-top-frame");
    }
    function m(e) {
      if (y.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function _(e, r) {
      function t() {
        N || (N = !0, console.error(
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
      var e = s(this.type);
      return g[e] || (g[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function M(e, r, t, n, R, w) {
      var a = t.ref;
      return e = {
        $$typeof: P,
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
        value: R
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: w
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function j(e, r, t, n, R, w) {
      var a = r.children;
      if (a !== void 0)
        if (n)
          if (Q(a)) {
            for (n = 0; n < a.length; n++)
              A(a[n]);
            Object.freeze && Object.freeze(a);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else A(a);
      if (y.call(r, "key")) {
        a = s(e);
        var f = Object.keys(r).filter(function(K) {
          return K !== "key";
        });
        n = 0 < f.length ? "{key: someKey, " + f.join(": ..., ") + ": ...}" : "{key: someKey}", $[a + n] || (f = 0 < f.length ? "{" + f.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          n,
          a,
          f,
          a
        ), $[a + n] = !0);
      }
      if (a = null, t !== void 0 && (c(t), a = "" + t), m(r) && (c(r.key), a = "" + r.key), "key" in r) {
        t = {};
        for (var O in r)
          O !== "key" && (t[O] = r[O]);
      } else t = r;
      return a && _(
        t,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), M(
        e,
        a,
        t,
        o(),
        R,
        w
      );
    }
    function A(e) {
      S(e) ? e._store && (e._store.validated = 1) : typeof e == "object" && e !== null && e.$$typeof === T && (e._payload.status === "fulfilled" ? S(e._payload.value) && e._payload.value._store && (e._payload.value._store.validated = 1) : e._store && (e._store.validated = 1));
    }
    function S(e) {
      return typeof e == "object" && e !== null && e.$$typeof === P;
    }
    var v = ee, P = /* @__PURE__ */ Symbol.for("react.transitional.element"), W = /* @__PURE__ */ Symbol.for("react.portal"), k = /* @__PURE__ */ Symbol.for("react.fragment"), U = /* @__PURE__ */ Symbol.for("react.strict_mode"), q = /* @__PURE__ */ Symbol.for("react.profiler"), J = /* @__PURE__ */ Symbol.for("react.consumer"), V = /* @__PURE__ */ Symbol.for("react.context"), z = /* @__PURE__ */ Symbol.for("react.forward_ref"), G = /* @__PURE__ */ Symbol.for("react.suspense"), X = /* @__PURE__ */ Symbol.for("react.suspense_list"), B = /* @__PURE__ */ Symbol.for("react.memo"), T = /* @__PURE__ */ Symbol.for("react.lazy"), H = /* @__PURE__ */ Symbol.for("react.activity"), Z = /* @__PURE__ */ Symbol.for("react.client.reference"), x = v.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, y = Object.prototype.hasOwnProperty, Q = Array.isArray, h = console.createTask ? console.createTask : function() {
      return null;
    };
    v = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var N, g = {}, C = v.react_stack_bottom_frame.bind(
      v,
      u
    )(), Y = h(i(u)), $ = {};
    b.Fragment = k, b.jsx = function(e, r, t) {
      var n = 1e4 > x.recentlyCreatedOwnerStacks++;
      return j(
        e,
        r,
        t,
        !1,
        n ? Error("react-stack-top-frame") : C,
        n ? h(i(e)) : Y
      );
    }, b.jsxs = function(e, r, t) {
      var n = 1e4 > x.recentlyCreatedOwnerStacks++;
      return j(
        e,
        r,
        t,
        !0,
        n ? Error("react-stack-top-frame") : C,
        n ? h(i(e)) : Y
      );
    };
  })()), b;
}
var D;
function ne() {
  return D || (D = 1, process.env.NODE_ENV === "production" ? p.exports = re() : p.exports = te()), p.exports;
}
var d = ne();
function oe({ className: s = "", children: l, ...c }) {
  return /* @__PURE__ */ d.jsx("button", { ...c, className: `kelvinward-btn ${s}`, children: l });
}
function se({ className: s = "", ...l }) {
  return /* @__PURE__ */ d.jsx(
    "input",
    {
      ...l,
      className: `kelvinward-input ${s}`
    }
  );
}
function le({ className: s = "", label: l, id: c, ...i }) {
  const o = c ?? i.name;
  return /* @__PURE__ */ d.jsxs("label", { className: `kelvinward-checkbox ${s}`, htmlFor: o, children: [
    /* @__PURE__ */ d.jsx("input", { ...i, id: o, type: "checkbox", className: "kelvinward-checkbox__input" }),
    /* @__PURE__ */ d.jsx("span", { className: "kelvinward-checkbox__box", "aria-hidden": "true" }),
    l ? /* @__PURE__ */ d.jsx("span", { className: "kelvinward-checkbox__label", children: l }) : null
  ] });
}
export {
  oe as Button,
  le as Checkbox,
  se as Input
};
