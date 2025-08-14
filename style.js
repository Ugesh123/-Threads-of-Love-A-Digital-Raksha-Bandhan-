(function() {
    const A = document.createElement("link").relList;
    if (A && A.supports && A.supports("modulepreload"))
        return;
    for (const n of document.querySelectorAll('link[rel="modulepreload"]'))
        r(n);
    new MutationObserver(n => {
        for (const i of n)
            if (i.type === "childList")
                for (const s of i.addedNodes)
                    s.tagName === "LINK" && s.rel === "modulepreload" && r(s)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function t(n) {
        const i = {};
        return n.integrity && (i.integrity = n.integrity),
        n.referrerPolicy && (i.referrerPolicy = n.referrerPolicy),
        n.crossOrigin === "use-credentials" ? i.credentials = "include" : n.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin",
        i
    }
    function r(n) {
        if (n.ep)
            return;
        n.ep = !0;
        const i = t(n);
        fetch(n.href, i)
    }
}
)();
function hQ(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var U0 = {
    exports: {}
}
  , pl = {}
  , x0 = {
    exports: {}
}
  , X = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ys = Symbol.for("react.element")
  , gQ = Symbol.for("react.portal")
  , BQ = Symbol.for("react.fragment")
  , pQ = Symbol.for("react.strict_mode")
  , mQ = Symbol.for("react.profiler")
  , wQ = Symbol.for("react.provider")
  , yQ = Symbol.for("react.context")
  , CQ = Symbol.for("react.forward_ref")
  , vQ = Symbol.for("react.suspense")
  , QQ = Symbol.for("react.memo")
  , FQ = Symbol.for("react.lazy")
  , Xh = Symbol.iterator;
function UQ(e) {
    return e === null || typeof e != "object" ? null : (e = Xh && e[Xh] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var E0 = {
    isMounted: function() {
        return !1
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
}
  , I0 = Object.assign
  , H0 = {};
function wi(e, A, t) {
    this.props = e,
    this.context = A,
    this.refs = H0,
    this.updater = t || E0
}
wi.prototype.isReactComponent = {};
wi.prototype.setState = function(e, A) {
    if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, A, "setState")
}
;
wi.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
}
;
function _0() {}
_0.prototype = wi.prototype;
function sd(e, A, t) {
    this.props = e,
    this.context = A,
    this.refs = H0,
    this.updater = t || E0
}
var od = sd.prototype = new _0;
od.constructor = sd;
I0(od, wi.prototype);
od.isPureReactComponent = !0;
var Wh = Array.isArray
  , S0 = Object.prototype.hasOwnProperty
  , ad = {
    current: null
}
  , T0 = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function L0(e, A, t) {
    var r, n = {}, i = null, s = null;
    if (A != null)
        for (r in A.ref !== void 0 && (s = A.ref),
        A.key !== void 0 && (i = "" + A.key),
        A)
            S0.call(A, r) && !T0.hasOwnProperty(r) && (n[r] = A[r]);
    var o = arguments.length - 2;
    if (o === 1)
        n.children = t;
    else if (1 < o) {
        for (var a = Array(o), l = 0; l < o; l++)
            a[l] = arguments[l + 2];
        n.children = a
    }
    if (e && e.defaultProps)
        for (r in o = e.defaultProps,
        o)
            n[r] === void 0 && (n[r] = o[r]);
    return {
        $$typeof: Ys,
        type: e,
        key: i,
        ref: s,
        props: n,
        _owner: ad.current
    }
}
function xQ(e, A) {
    return {
        $$typeof: Ys,
        type: e.type,
        key: A,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}
function ld(e) {
    return typeof e == "object" && e !== null && e.$$typeof === Ys
}
function EQ(e) {
    var A = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(t) {
        return A[t]
    })
}
var Yh = /\/+/g;
function eu(e, A) {
    return typeof e == "object" && e !== null && e.key != null ? EQ("" + e.key) : A.toString(36)
}
function Aa(e, A, t, r, n) {
    var i = typeof e;
    (i === "undefined" || i === "boolean") && (e = null);
    var s = !1;
    if (e === null)
        s = !0;
    else
        switch (i) {
        case "string":
        case "number":
            s = !0;
            break;
        case "object":
            switch (e.$$typeof) {
            case Ys:
            case gQ:
                s = !0
            }
        }
    if (s)
        return s = e,
        n = n(s),
        e = r === "" ? "." + eu(s, 0) : r,
        Wh(n) ? (t = "",
        e != null && (t = e.replace(Yh, "$&/") + "/"),
        Aa(n, A, t, "", function(l) {
            return l
        })) : n != null && (ld(n) && (n = xQ(n, t + (!n.key || s && s.key === n.key ? "" : ("" + n.key).replace(Yh, "$&/") + "/") + e)),
        A.push(n)),
        1;
    if (s = 0,
    r = r === "" ? "." : r + ":",
    Wh(e))
        for (var o = 0; o < e.length; o++) {
            i = e[o];
            var a = r + eu(i, o);
            s += Aa(i, A, t, a, n)
        }
    else if (a = UQ(e),
    typeof a == "function")
        for (e = a.call(e),
        o = 0; !(i = e.next()).done; )
            i = i.value,
            a = r + eu(i, o++),
            s += Aa(i, A, t, a, n);
    else if (i === "object")
        throw A = String(e),
        Error("Objects are not valid as a React child (found: " + (A === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : A) + "). If you meant to render a collection of children, use an array instead.");
    return s
}
function ao(e, A, t) {
    if (e == null)
        return e;
    var r = []
      , n = 0;
    return Aa(e, r, "", "", function(i) {
        return A.call(t, i, n++)
    }),
    r
}
function IQ(e) {
    if (e._status === -1) {
        var A = e._result;
        A = A(),
        A.then(function(t) {
            (e._status === 0 || e._status === -1) && (e._status = 1,
            e._result = t)
        }, function(t) {
            (e._status === 0 || e._status === -1) && (e._status = 2,
            e._result = t)
        }),
        e._status === -1 && (e._status = 0,
        e._result = A)
    }
    if (e._status === 1)
        return e._result.default;
    throw e._result
}
var ie = {
    current: null
}
  , ea = {
    transition: null
}
  , HQ = {
    ReactCurrentDispatcher: ie,
    ReactCurrentBatchConfig: ea,
    ReactCurrentOwner: ad
};
function b0() {
    throw Error("act(...) is not supported in production builds of React.")
}
X.Children = {
    map: ao,
    forEach: function(e, A, t) {
        ao(e, function() {
            A.apply(this, arguments)
        }, t)
    },
    count: function(e) {
        var A = 0;
        return ao(e, function() {
            A++
        }),
        A
    },
    toArray: function(e) {
        return ao(e, function(A) {
            return A
        }) || []
    },
    only: function(e) {
        if (!ld(e))
            throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
X.Component = wi;
X.Fragment = BQ;
X.Profiler = mQ;
X.PureComponent = sd;
X.StrictMode = pQ;
X.Suspense = vQ;
X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = HQ;
X.act = b0;
X.cloneElement = function(e, A, t) {
    if (e == null)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = I0({}, e.props)
      , n = e.key
      , i = e.ref
      , s = e._owner;
    if (A != null) {
        if (A.ref !== void 0 && (i = A.ref,
        s = ad.current),
        A.key !== void 0 && (n = "" + A.key),
        e.type && e.type.defaultProps)
            var o = e.type.defaultProps;
        for (a in A)
            S0.call(A, a) && !T0.hasOwnProperty(a) && (r[a] = A[a] === void 0 && o !== void 0 ? o[a] : A[a])
    }
    var a = arguments.length - 2;
    if (a === 1)
        r.children = t;
    else if (1 < a) {
        o = Array(a);
        for (var l = 0; l < a; l++)
            o[l] = arguments[l + 2];
        r.children = o
    }
    return {
        $$typeof: Ys,
        type: e.type,
        key: n,
        ref: i,
        props: r,
        _owner: s
    }
}
;
X.createContext = function(e) {
    return e = {
        $$typeof: yQ,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    },
    e.Provider = {
        $$typeof: wQ,
        _context: e
    },
    e.Consumer = e
}
;
X.createElement = L0;
X.createFactory = function(e) {
    var A = L0.bind(null, e);
    return A.type = e,
    A
}
;
X.createRef = function() {
    return {
        current: null
    }
}
;
X.forwardRef = function(e) {
    return {
        $$typeof: CQ,
        render: e
    }
}
;
X.isValidElement = ld;
X.lazy = function(e) {
    return {
        $$typeof: FQ,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: IQ
    }
}
;
X.memo = function(e, A) {
    return {
        $$typeof: QQ,
        type: e,
        compare: A === void 0 ? null : A
    }
}
;
X.startTransition = function(e) {
    var A = ea.transition;
    ea.transition = {};
    try {
        e()
    } finally {
        ea.transition = A
    }
}
;
X.unstable_act = b0;
X.useCallback = function(e, A) {
    return ie.current.useCallback(e, A)
}
;
X.useContext = function(e) {
    return ie.current.useContext(e)
}
;
X.useDebugValue = function() {}
;
X.useDeferredValue = function(e) {
    return ie.current.useDeferredValue(e)
}
;
X.useEffect = function(e, A) {
    return ie.current.useEffect(e, A)
}
;
X.useId = function() {
    return ie.current.useId()
}
;
X.useImperativeHandle = function(e, A, t) {
    return ie.current.useImperativeHandle(e, A, t)
}
;
X.useInsertionEffect = function(e, A) {
    return ie.current.useInsertionEffect(e, A)
}
;
X.useLayoutEffect = function(e, A) {
    return ie.current.useLayoutEffect(e, A)
}
;
X.useMemo = function(e, A) {
    return ie.current.useMemo(e, A)
}
;
X.useReducer = function(e, A, t) {
    return ie.current.useReducer(e, A, t)
}
;
X.useRef = function(e) {
    return ie.current.useRef(e)
}
;
X.useState = function(e) {
    return ie.current.useState(e)
}
;
X.useSyncExternalStore = function(e, A, t) {
    return ie.current.useSyncExternalStore(e, A, t)
}
;
X.useTransition = function() {
    return ie.current.useTransition()
}
;
X.version = "18.3.1";
x0.exports = X;
var I = x0.exports;
const D0 = hQ(I);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _Q = I
  , SQ = Symbol.for("react.element")
  , TQ = Symbol.for("react.fragment")
  , LQ = Object.prototype.hasOwnProperty
  , bQ = _Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
  , DQ = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function k0(e, A, t) {
    var r, n = {}, i = null, s = null;
    t !== void 0 && (i = "" + t),
    A.key !== void 0 && (i = "" + A.key),
    A.ref !== void 0 && (s = A.ref);
    for (r in A)
        LQ.call(A, r) && !DQ.hasOwnProperty(r) && (n[r] = A[r]);
    if (e && e.defaultProps)
        for (r in A = e.defaultProps,
        A)
            n[r] === void 0 && (n[r] = A[r]);
    return {
        $$typeof: SQ,
        type: e,
        key: i,
        ref: s,
        props: n,
        _owner: bQ.current
    }
}
pl.Fragment = TQ;
pl.jsx = k0;
pl.jsxs = k0;
U0.exports = pl;
var w = U0.exports
  , M0 = {
    exports: {}
}
  , Le = {}
  , K0 = {
    exports: {}
}
  , P0 = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function A(_, K) {
        var R = _.length;
        _.push(K);
        A: for (; 0 < R; ) {
            var N = R - 1 >>> 1
              , z = _[N];
            if (0 < n(z, K))
                _[N] = K,
                _[R] = z,
                R = N;
            else
                break A
        }
    }
    function t(_) {
        return _.length === 0 ? null : _[0]
    }
    function r(_) {
        if (_.length === 0)
            return null;
        var K = _[0]
          , R = _.pop();
        if (R !== K) {
            _[0] = R;
            A: for (var N = 0, z = _.length, UA = z >>> 1; N < UA; ) {
                var q = 2 * (N + 1) - 1
                  , aA = _[q]
                  , xA = q + 1
                  , we = _[xA];
                if (0 > n(aA, R))
                    xA < z && 0 > n(we, aA) ? (_[N] = we,
                    _[xA] = R,
                    N = xA) : (_[N] = aA,
                    _[q] = R,
                    N = q);
                else if (xA < z && 0 > n(we, R))
                    _[N] = we,
                    _[xA] = R,
                    N = xA;
                else
                    break A
            }
        }
        return K
    }
    function n(_, K) {
        var R = _.sortIndex - K.sortIndex;
        return R !== 0 ? R : _.id - K.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var i = performance;
        e.unstable_now = function() {
            return i.now()
        }
    } else {
        var s = Date
          , o = s.now();
        e.unstable_now = function() {
            return s.now() - o
        }
    }
    var a = []
      , l = []
      , u = 1
      , c = null
      , f = 3
      , d = !1
      , B = !1
      , h = !1
      , y = typeof setTimeout == "function" ? setTimeout : null
      , p = typeof clearTimeout == "function" ? clearTimeout : null
      , g = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function m(_) {
        for (var K = t(l); K !== null; ) {
            if (K.callback === null)
                r(l);
            else if (K.startTime <= _)
                r(l),
                K.sortIndex = K.expirationTime,
                A(a, K);
            else
                break;
            K = t(l)
        }
    }
    function C(_) {
        if (h = !1,
        m(_),
        !B)
            if (t(a) !== null)
                B = !0,
                T(v);
            else {
                var K = t(l);
                K !== null && V(C, K.startTime - _)
            }
    }
    function v(_, K) {
        B = !1,
        h && (h = !1,
        p(F),
        F = -1),
        d = !0;
        var R = f;
        try {
            for (m(K),
            c = t(a); c !== null && (!(c.expirationTime > K) || _ && !E()); ) {
                var N = c.callback;
                if (typeof N == "function") {
                    c.callback = null,
                    f = c.priorityLevel;
                    var z = N(c.expirationTime <= K);
                    K = e.unstable_now(),
                    typeof z == "function" ? c.callback = z : c === t(a) && r(a),
                    m(K)
                } else
                    r(a);
                c = t(a)
            }
            if (c !== null)
                var UA = !0;
            else {
                var q = t(l);
                q !== null && V(C, q.startTime - K),
                UA = !1
            }
            return UA
        } finally {
            c = null,
            f = R,
            d = !1
        }
    }
    var Q = !1
      , U = null
      , F = -1
      , x = 5
      , H = -1;
    function E() {
        return !(e.unstable_now() - H < x)
    }
    function L() {
        if (U !== null) {
            var _ = e.unstable_now();
            H = _;
            var K = !0;
            try {
                K = U(!0, _)
            } finally {
                K ? b() : (Q = !1,
                U = null)
            }
        } else
            Q = !1
    }
    var b;
    if (typeof g == "function")
        b = function() {
            g(L)
        }
        ;
    else if (typeof MessageChannel < "u") {
        var D = new MessageChannel
          , j = D.port2;
        D.port1.onmessage = L,
        b = function() {
            j.postMessage(null)
        }
    } else
        b = function() {
            y(L, 0)
        }
        ;
    function T(_) {
        U = _,
        Q || (Q = !0,
        b())
    }
    function V(_, K) {
        F = y(function() {
            _(e.unstable_now())
        }, K)
    }
    e.unstable_IdlePriority = 5,
    e.unstable_ImmediatePriority = 1,
    e.unstable_LowPriority = 4,
    e.unstable_NormalPriority = 3,
    e.unstable_Profiling = null,
    e.unstable_UserBlockingPriority = 2,
    e.unstable_cancelCallback = function(_) {
        _.callback = null
    }
    ,
    e.unstable_continueExecution = function() {
        B || d || (B = !0,
        T(v))
    }
    ,
    e.unstable_forceFrameRate = function(_) {
        0 > _ || 125 < _ ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : x = 0 < _ ? Math.floor(1e3 / _) : 5
    }
    ,
    e.unstable_getCurrentPriorityLevel = function() {
        return f
    }
    ,
    e.unstable_getFirstCallbackNode = function() {
        return t(a)
    }
    ,
    e.unstable_next = function(_) {
        switch (f) {
        case 1:
        case 2:
        case 3:
            var K = 3;
            break;
        default:
            K = f
        }
        var R = f;
        f = K;
        try {
            return _()
        } finally {
            f = R
        }
    }
    ,
    e.unstable_pauseExecution = function() {}
    ,
    e.unstable_requestPaint = function() {}
    ,
    e.unstable_runWithPriority = function(_, K) {
        switch (_) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            break;
        default:
            _ = 3
        }
        var R = f;
        f = _;
        try {
            return K()
        } finally {
            f = R
        }
    }
    ,
    e.unstable_scheduleCallback = function(_, K, R) {
        var N = e.unstable_now();
        switch (typeof R == "object" && R !== null ? (R = R.delay,
        R = typeof R == "number" && 0 < R ? N + R : N) : R = N,
        _) {
        case 1:
            var z = -1;
            break;
        case 2:
            z = 250;
            break;
        case 5:
            z = 1073741823;
            break;
        case 4:
            z = 1e4;
            break;
        default:
            z = 5e3
        }
        return z = R + z,
        _ = {
            id: u++,
            callback: K,
            priorityLevel: _,
            startTime: R,
            expirationTime: z,
            sortIndex: -1
        },
        R > N ? (_.sortIndex = R,
        A(l, _),
        t(a) === null && _ === t(l) && (h ? (p(F),
        F = -1) : h = !0,
        V(C, R - N))) : (_.sortIndex = z,
        A(a, _),
        B || d || (B = !0,
        T(v))),
        _
    }
    ,
    e.unstable_shouldYield = E,
    e.unstable_wrapCallback = function(_) {
        var K = f;
        return function() {
            var R = f;
            f = K;
            try {
                return _.apply(this, arguments)
            } finally {
                f = R
            }
        }
    }
}
)(P0);
K0.exports = P0;
var kQ = K0.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var MQ = I
  , He = kQ;
function S(e) {
    for (var A = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, t = 1; t < arguments.length; t++)
        A += "&args[]=" + encodeURIComponent(arguments[t]);
    return "Minified React error #" + e + "; visit " + A + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var O0 = new Set
  , ws = {};
function fn(e, A) {
    ri(e, A),
    ri(e + "Capture", A)
}
function ri(e, A) {
    for (ws[e] = A,
    e = 0; e < A.length; e++)
        O0.add(A[e])
}
var bt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
  , Bc = Object.prototype.hasOwnProperty
  , KQ = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
  , Jh = {}
  , $h = {};
function PQ(e) {
    return Bc.call($h, e) ? !0 : Bc.call(Jh, e) ? !1 : KQ.test(e) ? $h[e] = !0 : (Jh[e] = !0,
    !1)
}
function OQ(e, A, t, r) {
    if (t !== null && t.type === 0)
        return !1;
    switch (typeof A) {
    case "function":
    case "symbol":
        return !0;
    case "boolean":
        return r ? !1 : t !== null ? !t.acceptsBooleans : (e = e.toLowerCase().slice(0, 5),
        e !== "data-" && e !== "aria-");
    default:
        return !1
    }
}
function NQ(e, A, t, r) {
    if (A === null || typeof A > "u" || OQ(e, A, t, r))
        return !0;
    if (r)
        return !1;
    if (t !== null)
        switch (t.type) {
        case 3:
            return !A;
        case 4:
            return A === !1;
        case 5:
            return isNaN(A);
        case 6:
            return isNaN(A) || 1 > A
        }
    return !1
}
function se(e, A, t, r, n, i, s) {
    this.acceptsBooleans = A === 2 || A === 3 || A === 4,
    this.attributeName = r,
    this.attributeNamespace = n,
    this.mustUseProperty = t,
    this.propertyName = e,
    this.type = A,
    this.sanitizeURL = i,
    this.removeEmptyString = s
}
var GA = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    GA[e] = new se(e,0,!1,e,null,!1,!1)
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var A = e[0];
    GA[A] = new se(A,1,!1,e[1],null,!1,!1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    GA[e] = new se(e,2,!1,e.toLowerCase(),null,!1,!1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    GA[e] = new se(e,2,!1,e,null,!1,!1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    GA[e] = new se(e,3,!1,e.toLowerCase(),null,!1,!1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    GA[e] = new se(e,3,!0,e,null,!1,!1)
});
["capture", "download"].forEach(function(e) {
    GA[e] = new se(e,4,!1,e,null,!1,!1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    GA[e] = new se(e,6,!1,e,null,!1,!1)
});
["rowSpan", "start"].forEach(function(e) {
    GA[e] = new se(e,5,!1,e.toLowerCase(),null,!1,!1)
});
var ud = /[\-:]([a-z])/g;
function cd(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var A = e.replace(ud, cd);
    GA[A] = new se(A,1,!1,e,null,!1,!1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var A = e.replace(ud, cd);
    GA[A] = new se(A,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var A = e.replace(ud, cd);
    GA[A] = new se(A,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    GA[e] = new se(e,1,!1,e.toLowerCase(),null,!1,!1)
});
GA.xlinkHref = new se("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);
["src", "href", "action", "formAction"].forEach(function(e) {
    GA[e] = new se(e,1,!1,e.toLowerCase(),null,!0,!0)
});
function fd(e, A, t, r) {
    var n = GA.hasOwnProperty(A) ? GA[A] : null;
    (n !== null ? n.type !== 0 : r || !(2 < A.length) || A[0] !== "o" && A[0] !== "O" || A[1] !== "n" && A[1] !== "N") && (NQ(A, t, n, r) && (t = null),
    r || n === null ? PQ(A) && (t === null ? e.removeAttribute(A) : e.setAttribute(A, "" + t)) : n.mustUseProperty ? e[n.propertyName] = t === null ? n.type === 3 ? !1 : "" : t : (A = n.attributeName,
    r = n.attributeNamespace,
    t === null ? e.removeAttribute(A) : (n = n.type,
    t = n === 3 || n === 4 && t === !0 ? "" : "" + t,
    r ? e.setAttributeNS(r, A, t) : e.setAttribute(A, t))))
}
var Rt = MQ.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
  , lo = Symbol.for("react.element")
  , En = Symbol.for("react.portal")
  , In = Symbol.for("react.fragment")
  , dd = Symbol.for("react.strict_mode")
  , pc = Symbol.for("react.profiler")
  , N0 = Symbol.for("react.provider")
  , R0 = Symbol.for("react.context")
  , hd = Symbol.for("react.forward_ref")
  , mc = Symbol.for("react.suspense")
  , wc = Symbol.for("react.suspense_list")
  , gd = Symbol.for("react.memo")
  , Xt = Symbol.for("react.lazy")
  , V0 = Symbol.for("react.offscreen")
  , Zh = Symbol.iterator;
function Qi(e) {
    return e === null || typeof e != "object" ? null : (e = Zh && e[Zh] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var pA = Object.assign, tu;
function Ki(e) {
    if (tu === void 0)
        try {
            throw Error()
        } catch (t) {
            var A = t.stack.trim().match(/\n( *(at )?)/);
            tu = A && A[1] || ""
        }
    return `
` + tu + e
}
var ru = !1;
function nu(e, A) {
    if (!e || ru)
        return "";
    ru = !0;
    var t = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (A)
            if (A = function() {
                throw Error()
            }
            ,
            Object.defineProperty(A.prototype, "props", {
                set: function() {
                    throw Error()
                }
            }),
            typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(A, [])
                } catch (l) {
                    var r = l
                }
                Reflect.construct(e, [], A)
            } else {
                try {
                    A.call()
                } catch (l) {
                    r = l
                }
                e.call(A.prototype)
            }
        else {
            try {
                throw Error()
            } catch (l) {
                r = l
            }
            e()
        }
    } catch (l) {
        if (l && r && typeof l.stack == "string") {
            for (var n = l.stack.split(`
`), i = r.stack.split(`
`), s = n.length - 1, o = i.length - 1; 1 <= s && 0 <= o && n[s] !== i[o]; )
                o--;
            for (; 1 <= s && 0 <= o; s--,
            o--)
                if (n[s] !== i[o]) {
                    if (s !== 1 || o !== 1)
                        do
                            if (s--,
                            o--,
                            0 > o || n[s] !== i[o]) {
                                var a = `
` + n[s].replace(" at new ", " at ");
                                return e.displayName && a.includes("<anonymous>") && (a = a.replace("<anonymous>", e.displayName)),
                                a
                            }
                        while (1 <= s && 0 <= o);
                    break
                }
        }
    } finally {
        ru = !1,
        Error.prepareStackTrace = t
    }
    return (e = e ? e.displayName || e.name : "") ? Ki(e) : ""
}
function RQ(e) {
    switch (e.tag) {
    case 5:
        return Ki(e.type);
    case 16:
        return Ki("Lazy");
    case 13:
        return Ki("Suspense");
    case 19:
        return Ki("SuspenseList");
    case 0:
    case 2:
    case 15:
        return e = nu(e.type, !1),
        e;
    case 11:
        return e = nu(e.type.render, !1),
        e;
    case 1:
        return e = nu(e.type, !0),
        e;
    default:
        return ""
    }
}
function yc(e) {
    if (e == null)
        return null;
    if (typeof e == "function")
        return e.displayName || e.name || null;
    if (typeof e == "string")
        return e;
    switch (e) {
    case In:
        return "Fragment";
    case En:
        return "Portal";
    case pc:
        return "Profiler";
    case dd:
        return "StrictMode";
    case mc:
        return "Suspense";
    case wc:
        return "SuspenseList"
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
        case R0:
            return (e.displayName || "Context") + ".Consumer";
        case N0:
            return (e._context.displayName || "Context") + ".Provider";
        case hd:
            var A = e.render;
            return e = e.displayName,
            e || (e = A.displayName || A.name || "",
            e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
            e;
        case gd:
            return A = e.displayName || null,
            A !== null ? A : yc(e.type) || "Memo";
        case Xt:
            A = e._payload,
            e = e._init;
            try {
                return yc(e(A))
            } catch {}
        }
    return null
}
function VQ(e) {
    var A = e.type;
    switch (e.tag) {
    case 24:
        return "Cache";
    case 9:
        return (A.displayName || "Context") + ".Consumer";
    case 10:
        return (A._context.displayName || "Context") + ".Provider";
    case 18:
        return "DehydratedFragment";
    case 11:
        return e = A.render,
        e = e.displayName || e.name || "",
        A.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
        return "Fragment";
    case 5:
        return A;
    case 4:
        return "Portal";
    case 3:
        return "Root";
    case 6:
        return "Text";
    case 16:
        return yc(A);
    case 8:
        return A === dd ? "StrictMode" : "Mode";
    case 22:
        return "Offscreen";
    case 12:
        return "Profiler";
    case 21:
        return "Scope";
    case 13:
        return "Suspense";
    case 19:
        return "SuspenseList";
    case 25:
        return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
        if (typeof A == "function")
            return A.displayName || A.name || null;
        if (typeof A == "string")
            return A
    }
    return null
}
function yr(e) {
    switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
        return e;
    case "object":
        return e;
    default:
        return ""
    }
}
function G0(e) {
    var A = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (A === "checkbox" || A === "radio")
}
function GQ(e) {
    var A = G0(e) ? "checked" : "value"
      , t = Object.getOwnPropertyDescriptor(e.constructor.prototype, A)
      , r = "" + e[A];
    if (!e.hasOwnProperty(A) && typeof t < "u" && typeof t.get == "function" && typeof t.set == "function") {
        var n = t.get
          , i = t.set;
        return Object.defineProperty(e, A, {
            configurable: !0,
            get: function() {
                return n.call(this)
            },
            set: function(s) {
                r = "" + s,
                i.call(this, s)
            }
        }),
        Object.defineProperty(e, A, {
            enumerable: t.enumerable
        }),
        {
            getValue: function() {
                return r
            },
            setValue: function(s) {
                r = "" + s
            },
            stopTracking: function() {
                e._valueTracker = null,
                delete e[A]
            }
        }
    }
}
function uo(e) {
    e._valueTracker || (e._valueTracker = GQ(e))
}
function j0(e) {
    if (!e)
        return !1;
    var A = e._valueTracker;
    if (!A)
        return !0;
    var t = A.getValue()
      , r = "";
    return e && (r = G0(e) ? e.checked ? "true" : "false" : e.value),
    e = r,
    e !== t ? (A.setValue(e),
    !0) : !1
}
function Ca(e) {
    if (e = e || (typeof document < "u" ? document : void 0),
    typeof e > "u")
        return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}
function Cc(e, A) {
    var t = A.checked;
    return pA({}, A, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: t ?? e._wrapperState.initialChecked
    })
}
function qh(e, A) {
    var t = A.defaultValue == null ? "" : A.defaultValue
      , r = A.checked != null ? A.checked : A.defaultChecked;
    t = yr(A.value != null ? A.value : t),
    e._wrapperState = {
        initialChecked: r,
        initialValue: t,
        controlled: A.type === "checkbox" || A.type === "radio" ? A.checked != null : A.value != null
    }
}
function z0(e, A) {
    A = A.checked,
    A != null && fd(e, "checked", A, !1)
}
function vc(e, A) {
    z0(e, A);
    var t = yr(A.value)
      , r = A.type;
    if (t != null)
        r === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + t) : e.value !== "" + t && (e.value = "" + t);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    A.hasOwnProperty("value") ? Qc(e, A.type, t) : A.hasOwnProperty("defaultValue") && Qc(e, A.type, yr(A.defaultValue)),
    A.checked == null && A.defaultChecked != null && (e.defaultChecked = !!A.defaultChecked)
}
function Ag(e, A, t) {
    if (A.hasOwnProperty("value") || A.hasOwnProperty("defaultValue")) {
        var r = A.type;
        if (!(r !== "submit" && r !== "reset" || A.value !== void 0 && A.value !== null))
            return;
        A = "" + e._wrapperState.initialValue,
        t || A === e.value || (e.value = A),
        e.defaultValue = A
    }
    t = e.name,
    t !== "" && (e.name = ""),
    e.defaultChecked = !!e._wrapperState.initialChecked,
    t !== "" && (e.name = t)
}
function Qc(e, A, t) {
    (A !== "number" || Ca(e.ownerDocument) !== e) && (t == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + t && (e.defaultValue = "" + t))
}
var Pi = Array.isArray;
function zn(e, A, t, r) {
    if (e = e.options,
    A) {
        A = {};
        for (var n = 0; n < t.length; n++)
            A["$" + t[n]] = !0;
        for (t = 0; t < e.length; t++)
            n = A.hasOwnProperty("$" + e[t].value),
            e[t].selected !== n && (e[t].selected = n),
            n && r && (e[t].defaultSelected = !0)
    } else {
        for (t = "" + yr(t),
        A = null,
        n = 0; n < e.length; n++) {
            if (e[n].value === t) {
                e[n].selected = !0,
                r && (e[n].defaultSelected = !0);
                return
            }
            A !== null || e[n].disabled || (A = e[n])
        }
        A !== null && (A.selected = !0)
    }
}
function Fc(e, A) {
    if (A.dangerouslySetInnerHTML != null)
        throw Error(S(91));
    return pA({}, A, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}
function eg(e, A) {
    var t = A.value;
    if (t == null) {
        if (t = A.children,
        A = A.defaultValue,
        t != null) {
            if (A != null)
                throw Error(S(92));
            if (Pi(t)) {
                if (1 < t.length)
                    throw Error(S(93));
                t = t[0]
            }
            A = t
        }
        A == null && (A = ""),
        t = A
    }
    e._wrapperState = {
        initialValue: yr(t)
    }
}
function X0(e, A) {
    var t = yr(A.value)
      , r = yr(A.defaultValue);
    t != null && (t = "" + t,
    t !== e.value && (e.value = t),
    A.defaultValue == null && e.defaultValue !== t && (e.defaultValue = t)),
    r != null && (e.defaultValue = "" + r)
}
function tg(e) {
    var A = e.textContent;
    A === e._wrapperState.initialValue && A !== "" && A !== null && (e.value = A)
}
function W0(e) {
    switch (e) {
    case "svg":
        return "http://www.w3.org/2000/svg";
    case "math":
        return "http://www.w3.org/1998/Math/MathML";
    default:
        return "http://www.w3.org/1999/xhtml"
    }
}
function Uc(e, A) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? W0(A) : e === "http://www.w3.org/2000/svg" && A === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var co, Y0 = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(A, t, r, n) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(A, t, r, n)
        })
    }
    : e
}(function(e, A) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML"in e)
        e.innerHTML = A;
    else {
        for (co = co || document.createElement("div"),
        co.innerHTML = "<svg>" + A.valueOf().toString() + "</svg>",
        A = co.firstChild; e.firstChild; )
            e.removeChild(e.firstChild);
        for (; A.firstChild; )
            e.appendChild(A.firstChild)
    }
});
function ys(e, A) {
    if (A) {
        var t = e.firstChild;
        if (t && t === e.lastChild && t.nodeType === 3) {
            t.nodeValue = A;
            return
        }
    }
    e.textContent = A
}
var Zi = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
}
  , jQ = ["Webkit", "ms", "Moz", "O"];
Object.keys(Zi).forEach(function(e) {
    jQ.forEach(function(A) {
        A = A + e.charAt(0).toUpperCase() + e.substring(1),
        Zi[A] = Zi[e]
    })
});
function J0(e, A, t) {
    return A == null || typeof A == "boolean" || A === "" ? "" : t || typeof A != "number" || A === 0 || Zi.hasOwnProperty(e) && Zi[e] ? ("" + A).trim() : A + "px"
}
function $0(e, A) {
    e = e.style;
    for (var t in A)
        if (A.hasOwnProperty(t)) {
            var r = t.indexOf("--") === 0
              , n = J0(t, A[t], r);
            t === "float" && (t = "cssFloat"),
            r ? e.setProperty(t, n) : e[t] = n
        }
}
var zQ = pA({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
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
});
function xc(e, A) {
    if (A) {
        if (zQ[e] && (A.children != null || A.dangerouslySetInnerHTML != null))
            throw Error(S(137, e));
        if (A.dangerouslySetInnerHTML != null) {
            if (A.children != null)
                throw Error(S(60));
            if (typeof A.dangerouslySetInnerHTML != "object" || !("__html"in A.dangerouslySetInnerHTML))
                throw Error(S(61))
        }
        if (A.style != null && typeof A.style != "object")
            throw Error(S(62))
    }
}
function Ec(e, A) {
    if (e.indexOf("-") === -1)
        return typeof A.is == "string";
    switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
        return !1;
    default:
        return !0
    }
}
var Ic = null;
function Bd(e) {
    return e = e.target || e.srcElement || window,
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
}
var Hc = null
  , Xn = null
  , Wn = null;
function rg(e) {
    if (e = Zs(e)) {
        if (typeof Hc != "function")
            throw Error(S(280));
        var A = e.stateNode;
        A && (A = vl(A),
        Hc(e.stateNode, e.type, A))
    }
}
function Z0(e) {
    Xn ? Wn ? Wn.push(e) : Wn = [e] : Xn = e
}
function q0() {
    if (Xn) {
        var e = Xn
          , A = Wn;
        if (Wn = Xn = null,
        rg(e),
        A)
            for (e = 0; e < A.length; e++)
                rg(A[e])
    }
}
function Am(e, A) {
    return e(A)
}
function em() {}
var iu = !1;
function tm(e, A, t) {
    if (iu)
        return e(A, t);
    iu = !0;
    try {
        return Am(e, A, t)
    } finally {
        iu = !1,
        (Xn !== null || Wn !== null) && (em(),
        q0())
    }
}
function Cs(e, A) {
    var t = e.stateNode;
    if (t === null)
        return null;
    var r = vl(t);
    if (r === null)
        return null;
    t = r[A];
    A: switch (A) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
        (r = !r.disabled) || (e = e.type,
        r = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
        e = !r;
        break A;
    default:
        e = !1
    }
    if (e)
        return null;
    if (t && typeof t != "function")
        throw Error(S(231, A, typeof t));
    return t
}
var _c = !1;
if (bt)
    try {
        var Fi = {};
        Object.defineProperty(Fi, "passive", {
            get: function() {
                _c = !0
            }
        }),
        window.addEventListener("test", Fi, Fi),
        window.removeEventListener("test", Fi, Fi)
    } catch {
        _c = !1
    }
function XQ(e, A, t, r, n, i, s, o, a) {
    var l = Array.prototype.slice.call(arguments, 3);
    try {
        A.apply(t, l)
    } catch (u) {
        this.onError(u)
    }
}
var qi = !1
  , va = null
  , Qa = !1
  , Sc = null
  , WQ = {
    onError: function(e) {
        qi = !0,
        va = e
    }
};
function YQ(e, A, t, r, n, i, s, o, a) {
    qi = !1,
    va = null,
    XQ.apply(WQ, arguments)
}
function JQ(e, A, t, r, n, i, s, o, a) {
    if (YQ.apply(this, arguments),
    qi) {
        if (qi) {
            var l = va;
            qi = !1,
            va = null
        } else
            throw Error(S(198));
        Qa || (Qa = !0,
        Sc = l)
    }
}
function dn(e) {
    var A = e
      , t = e;
    if (e.alternate)
        for (; A.return; )
            A = A.return;
    else {
        e = A;
        do
            A = e,
            A.flags & 4098 && (t = A.return),
            e = A.return;
        while (e)
    }
    return A.tag === 3 ? t : null
}
function rm(e) {
    if (e.tag === 13) {
        var A = e.memoizedState;
        if (A === null && (e = e.alternate,
        e !== null && (A = e.memoizedState)),
        A !== null)
            return A.dehydrated
    }
    return null
}
function ng(e) {
    if (dn(e) !== e)
        throw Error(S(188))
}
function $Q(e) {
    var A = e.alternate;
    if (!A) {
        if (A = dn(e),
        A === null)
            throw Error(S(188));
        return A !== e ? null : e
    }
    for (var t = e, r = A; ; ) {
        var n = t.return;
        if (n === null)
            break;
        var i = n.alternate;
        if (i === null) {
            if (r = n.return,
            r !== null) {
                t = r;
                continue
            }
            break
        }
        if (n.child === i.child) {
            for (i = n.child; i; ) {
                if (i === t)
                    return ng(n),
                    e;
                if (i === r)
                    return ng(n),
                    A;
                i = i.sibling
            }
            throw Error(S(188))
        }
        if (t.return !== r.return)
            t = n,
            r = i;
        else {
            for (var s = !1, o = n.child; o; ) {
                if (o === t) {
                    s = !0,
                    t = n,
                    r = i;
                    break
                }
                if (o === r) {
                    s = !0,
                    r = n,
                    t = i;
                    break
                }
                o = o.sibling
            }
            if (!s) {
                for (o = i.child; o; ) {
                    if (o === t) {
                        s = !0,
                        t = i,
                        r = n;
                        break
                    }
                    if (o === r) {
                        s = !0,
                        r = i,
                        t = n;
                        break
                    }
                    o = o.sibling
                }
                if (!s)
                    throw Error(S(189))
            }
        }
        if (t.alternate !== r)
            throw Error(S(190))
    }
    if (t.tag !== 3)
        throw Error(S(188));
    return t.stateNode.current === t ? e : A
}
function nm(e) {
    return e = $Q(e),
    e !== null ? im(e) : null
}
function im(e) {
    if (e.tag === 5 || e.tag === 6)
        return e;
    for (e = e.child; e !== null; ) {
        var A = im(e);
        if (A !== null)
            return A;
        e = e.sibling
    }
    return null
}
var sm = He.unstable_scheduleCallback
  , ig = He.unstable_cancelCallback
  , ZQ = He.unstable_shouldYield
  , qQ = He.unstable_requestPaint
  , QA = He.unstable_now
  , AF = He.unstable_getCurrentPriorityLevel
  , pd = He.unstable_ImmediatePriority
  , om = He.unstable_UserBlockingPriority
  , Fa = He.unstable_NormalPriority
  , eF = He.unstable_LowPriority
  , am = He.unstable_IdlePriority
  , ml = null
  , ht = null;
function tF(e) {
    if (ht && typeof ht.onCommitFiberRoot == "function")
        try {
            ht.onCommitFiberRoot(ml, e, void 0, (e.current.flags & 128) === 128)
        } catch {}
}
var tt = Math.clz32 ? Math.clz32 : iF
  , rF = Math.log
  , nF = Math.LN2;
function iF(e) {
    return e >>>= 0,
    e === 0 ? 32 : 31 - (rF(e) / nF | 0) | 0
}
var fo = 64
  , ho = 4194304;
function Oi(e) {
    switch (e & -e) {
    case 1:
        return 1;
    case 2:
        return 2;
    case 4:
        return 4;
    case 8:
        return 8;
    case 16:
        return 16;
    case 32:
        return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return e & 130023424;
    case 134217728:
        return 134217728;
    case 268435456:
        return 268435456;
    case 536870912:
        return 536870912;
    case 1073741824:
        return 1073741824;
    default:
        return e
    }
}
function Ua(e, A) {
    var t = e.pendingLanes;
    if (t === 0)
        return 0;
    var r = 0
      , n = e.suspendedLanes
      , i = e.pingedLanes
      , s = t & 268435455;
    if (s !== 0) {
        var o = s & ~n;
        o !== 0 ? r = Oi(o) : (i &= s,
        i !== 0 && (r = Oi(i)))
    } else
        s = t & ~n,
        s !== 0 ? r = Oi(s) : i !== 0 && (r = Oi(i));
    if (r === 0)
        return 0;
    if (A !== 0 && A !== r && !(A & n) && (n = r & -r,
    i = A & -A,
    n >= i || n === 16 && (i & 4194240) !== 0))
        return A;
    if (r & 4 && (r |= t & 16),
    A = e.entangledLanes,
    A !== 0)
        for (e = e.entanglements,
        A &= r; 0 < A; )
            t = 31 - tt(A),
            n = 1 << t,
            r |= e[t],
            A &= ~n;
    return r
}
function sF(e, A) {
    switch (e) {
    case 1:
    case 2:
    case 4:
        return A + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return A + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
        return -1;
    default:
        return -1
    }
}
function oF(e, A) {
    for (var t = e.suspendedLanes, r = e.pingedLanes, n = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
        var s = 31 - tt(i)
          , o = 1 << s
          , a = n[s];
        a === -1 ? (!(o & t) || o & r) && (n[s] = sF(o, A)) : a <= A && (e.expiredLanes |= o),
        i &= ~o
    }
}
function Tc(e) {
    return e = e.pendingLanes & -1073741825,
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}
function lm() {
    var e = fo;
    return fo <<= 1,
    !(fo & 4194240) && (fo = 64),
    e
}
function su(e) {
    for (var A = [], t = 0; 31 > t; t++)
        A.push(e);
    return A
}
function Js(e, A, t) {
    e.pendingLanes |= A,
    A !== 536870912 && (e.suspendedLanes = 0,
    e.pingedLanes = 0),
    e = e.eventTimes,
    A = 31 - tt(A),
    e[A] = t
}
function aF(e, A) {
    var t = e.pendingLanes & ~A;
    e.pendingLanes = A,
    e.suspendedLanes = 0,
    e.pingedLanes = 0,
    e.expiredLanes &= A,
    e.mutableReadLanes &= A,
    e.entangledLanes &= A,
    A = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < t; ) {
        var n = 31 - tt(t)
          , i = 1 << n;
        A[n] = 0,
        r[n] = -1,
        e[n] = -1,
        t &= ~i
    }
}
function md(e, A) {
    var t = e.entangledLanes |= A;
    for (e = e.entanglements; t; ) {
        var r = 31 - tt(t)
          , n = 1 << r;
        n & A | e[r] & A && (e[r] |= A),
        t &= ~n
    }
}
var Z = 0;
function um(e) {
    return e &= -e,
    1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var cm, wd, fm, dm, hm, Lc = !1, go = [], or = null, ar = null, lr = null, vs = new Map, Qs = new Map, $t = [], lF = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function sg(e, A) {
    switch (e) {
    case "focusin":
    case "focusout":
        or = null;
        break;
    case "dragenter":
    case "dragleave":
        ar = null;
        break;
    case "mouseover":
    case "mouseout":
        lr = null;
        break;
    case "pointerover":
    case "pointerout":
        vs.delete(A.pointerId);
        break;
    case "gotpointercapture":
    case "lostpointercapture":
        Qs.delete(A.pointerId)
    }
}
function Ui(e, A, t, r, n, i) {
    return e === null || e.nativeEvent !== i ? (e = {
        blockedOn: A,
        domEventName: t,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [n]
    },
    A !== null && (A = Zs(A),
    A !== null && wd(A)),
    e) : (e.eventSystemFlags |= r,
    A = e.targetContainers,
    n !== null && A.indexOf(n) === -1 && A.push(n),
    e)
}
function uF(e, A, t, r, n) {
    switch (A) {
    case "focusin":
        return or = Ui(or, e, A, t, r, n),
        !0;
    case "dragenter":
        return ar = Ui(ar, e, A, t, r, n),
        !0;
    case "mouseover":
        return lr = Ui(lr, e, A, t, r, n),
        !0;
    case "pointerover":
        var i = n.pointerId;
        return vs.set(i, Ui(vs.get(i) || null, e, A, t, r, n)),
        !0;
    case "gotpointercapture":
        return i = n.pointerId,
        Qs.set(i, Ui(Qs.get(i) || null, e, A, t, r, n)),
        !0
    }
    return !1
}
function gm(e) {
    var A = Gr(e.target);
    if (A !== null) {
        var t = dn(A);
        if (t !== null) {
            if (A = t.tag,
            A === 13) {
                if (A = rm(t),
                A !== null) {
                    e.blockedOn = A,
                    hm(e.priority, function() {
                        fm(t)
                    });
                    return
                }
            } else if (A === 3 && t.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = t.tag === 3 ? t.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}
function ta(e) {
    if (e.blockedOn !== null)
        return !1;
    for (var A = e.targetContainers; 0 < A.length; ) {
        var t = bc(e.domEventName, e.eventSystemFlags, A[0], e.nativeEvent);
        if (t === null) {
            t = e.nativeEvent;
            var r = new t.constructor(t.type,t);
            Ic = r,
            t.target.dispatchEvent(r),
            Ic = null
        } else
            return A = Zs(t),
            A !== null && wd(A),
            e.blockedOn = t,
            !1;
        A.shift()
    }
    return !0
}
function og(e, A, t) {
    ta(e) && t.delete(A)
}
function cF() {
    Lc = !1,
    or !== null && ta(or) && (or = null),
    ar !== null && ta(ar) && (ar = null),
    lr !== null && ta(lr) && (lr = null),
    vs.forEach(og),
    Qs.forEach(og)
}
function xi(e, A) {
    e.blockedOn === A && (e.blockedOn = null,
    Lc || (Lc = !0,
    He.unstable_scheduleCallback(He.unstable_NormalPriority, cF)))
}
function Fs(e) {
    function A(n) {
        return xi(n, e)
    }
    if (0 < go.length) {
        xi(go[0], e);
        for (var t = 1; t < go.length; t++) {
            var r = go[t];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (or !== null && xi(or, e),
    ar !== null && xi(ar, e),
    lr !== null && xi(lr, e),
    vs.forEach(A),
    Qs.forEach(A),
    t = 0; t < $t.length; t++)
        r = $t[t],
        r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < $t.length && (t = $t[0],
    t.blockedOn === null); )
        gm(t),
        t.blockedOn === null && $t.shift()
}
var Yn = Rt.ReactCurrentBatchConfig
  , xa = !0;
function fF(e, A, t, r) {
    var n = Z
      , i = Yn.transition;
    Yn.transition = null;
    try {
        Z = 1,
        yd(e, A, t, r)
    } finally {
        Z = n,
        Yn.transition = i
    }
}
function dF(e, A, t, r) {
    var n = Z
      , i = Yn.transition;
    Yn.transition = null;
    try {
        Z = 4,
        yd(e, A, t, r)
    } finally {
        Z = n,
        Yn.transition = i
    }
}
function yd(e, A, t, r) {
    if (xa) {
        var n = bc(e, A, t, r);
        if (n === null)
            Bu(e, A, r, Ea, t),
            sg(e, r);
        else if (uF(n, e, A, t, r))
            r.stopPropagation();
        else if (sg(e, r),
        A & 4 && -1 < lF.indexOf(e)) {
            for (; n !== null; ) {
                var i = Zs(n);
                if (i !== null && cm(i),
                i = bc(e, A, t, r),
                i === null && Bu(e, A, r, Ea, t),
                i === n)
                    break;
                n = i
            }
            n !== null && r.stopPropagation()
        } else
            Bu(e, A, r, null, t)
    }
}
var Ea = null;
function bc(e, A, t, r) {
    if (Ea = null,
    e = Bd(r),
    e = Gr(e),
    e !== null)
        if (A = dn(e),
        A === null)
            e = null;
        else if (t = A.tag,
        t === 13) {
            if (e = rm(A),
            e !== null)
                return e;
            e = null
        } else if (t === 3) {
            if (A.stateNode.current.memoizedState.isDehydrated)
                return A.tag === 3 ? A.stateNode.containerInfo : null;
            e = null
        } else
            A !== e && (e = null);
    return Ea = e,
    null
}
function Bm(e) {
    switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
        return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
        return 4;
    case "message":
        switch (AF()) {
        case pd:
            return 1;
        case om:
            return 4;
        case Fa:
        case eF:
            return 16;
        case am:
            return 536870912;
        default:
            return 16
        }
    default:
        return 16
    }
}
var qt = null
  , Cd = null
  , ra = null;
function pm() {
    if (ra)
        return ra;
    var e, A = Cd, t = A.length, r, n = "value"in qt ? qt.value : qt.textContent, i = n.length;
    for (e = 0; e < t && A[e] === n[e]; e++)
        ;
    var s = t - e;
    for (r = 1; r <= s && A[t - r] === n[i - r]; r++)
        ;
    return ra = n.slice(e, 1 < r ? 1 - r : void 0)
}
function na(e) {
    var A = e.keyCode;
    return "charCode"in e ? (e = e.charCode,
    e === 0 && A === 13 && (e = 13)) : e = A,
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
}
function Bo() {
    return !0
}
function ag() {
    return !1
}
function be(e) {
    function A(t, r, n, i, s) {
        this._reactName = t,
        this._targetInst = n,
        this.type = r,
        this.nativeEvent = i,
        this.target = s,
        this.currentTarget = null;
        for (var o in e)
            e.hasOwnProperty(o) && (t = e[o],
            this[o] = t ? t(i) : i[o]);
        return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Bo : ag,
        this.isPropagationStopped = ag,
        this
    }
    return pA(A.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var t = this.nativeEvent;
            t && (t.preventDefault ? t.preventDefault() : typeof t.returnValue != "unknown" && (t.returnValue = !1),
            this.isDefaultPrevented = Bo)
        },
        stopPropagation: function() {
            var t = this.nativeEvent;
            t && (t.stopPropagation ? t.stopPropagation() : typeof t.cancelBubble != "unknown" && (t.cancelBubble = !0),
            this.isPropagationStopped = Bo)
        },
        persist: function() {},
        isPersistent: Bo
    }),
    A
}
var yi = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
        return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
}, vd = be(yi), $s = pA({}, yi, {
    view: 0,
    detail: 0
}), hF = be($s), ou, au, Ei, wl = pA({}, $s, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Qd,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
    },
    movementX: function(e) {
        return "movementX"in e ? e.movementX : (e !== Ei && (Ei && e.type === "mousemove" ? (ou = e.screenX - Ei.screenX,
        au = e.screenY - Ei.screenY) : au = ou = 0,
        Ei = e),
        ou)
    },
    movementY: function(e) {
        return "movementY"in e ? e.movementY : au
    }
}), lg = be(wl), gF = pA({}, wl, {
    dataTransfer: 0
}), BF = be(gF), pF = pA({}, $s, {
    relatedTarget: 0
}), lu = be(pF), mF = pA({}, yi, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
}), wF = be(mF), yF = pA({}, yi, {
    clipboardData: function(e) {
        return "clipboardData"in e ? e.clipboardData : window.clipboardData
    }
}), CF = be(yF), vF = pA({}, yi, {
    data: 0
}), ug = be(vF), QF = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
}, FF = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
}, UF = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
};
function xF(e) {
    var A = this.nativeEvent;
    return A.getModifierState ? A.getModifierState(e) : (e = UF[e]) ? !!A[e] : !1
}
function Qd() {
    return xF
}
var EF = pA({}, $s, {
    key: function(e) {
        if (e.key) {
            var A = QF[e.key] || e.key;
            if (A !== "Unidentified")
                return A
        }
        return e.type === "keypress" ? (e = na(e),
        e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? FF[e.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Qd,
    charCode: function(e) {
        return e.type === "keypress" ? na(e) : 0
    },
    keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    },
    which: function(e) {
        return e.type === "keypress" ? na(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    }
})
  , IF = be(EF)
  , HF = pA({}, wl, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
})
  , cg = be(HF)
  , _F = pA({}, $s, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Qd
})
  , SF = be(_F)
  , TF = pA({}, yi, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
})
  , LF = be(TF)
  , bF = pA({}, wl, {
    deltaX: function(e) {
        return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
    },
    deltaY: function(e) {
        return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
    },
    deltaZ: 0,
    deltaMode: 0
})
  , DF = be(bF)
  , kF = [9, 13, 27, 32]
  , Fd = bt && "CompositionEvent"in window
  , As = null;
bt && "documentMode"in document && (As = document.documentMode);
var MF = bt && "TextEvent"in window && !As
  , mm = bt && (!Fd || As && 8 < As && 11 >= As)
  , fg = " "
  , dg = !1;
function wm(e, A) {
    switch (e) {
    case "keyup":
        return kF.indexOf(A.keyCode) !== -1;
    case "keydown":
        return A.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
        return !0;
    default:
        return !1
    }
}
function ym(e) {
    return e = e.detail,
    typeof e == "object" && "data"in e ? e.data : null
}
var Hn = !1;
function KF(e, A) {
    switch (e) {
    case "compositionend":
        return ym(A);
    case "keypress":
        return A.which !== 32 ? null : (dg = !0,
        fg);
    case "textInput":
        return e = A.data,
        e === fg && dg ? null : e;
    default:
        return null
    }
}
function PF(e, A) {
    if (Hn)
        return e === "compositionend" || !Fd && wm(e, A) ? (e = pm(),
        ra = Cd = qt = null,
        Hn = !1,
        e) : null;
    switch (e) {
    case "paste":
        return null;
    case "keypress":
        if (!(A.ctrlKey || A.altKey || A.metaKey) || A.ctrlKey && A.altKey) {
            if (A.char && 1 < A.char.length)
                return A.char;
            if (A.which)
                return String.fromCharCode(A.which)
        }
        return null;
    case "compositionend":
        return mm && A.locale !== "ko" ? null : A.data;
    default:
        return null
    }
}
var OF = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};
function hg(e) {
    var A = e && e.nodeName && e.nodeName.toLowerCase();
    return A === "input" ? !!OF[e.type] : A === "textarea"
}
function Cm(e, A, t, r) {
    Z0(r),
    A = Ia(A, "onChange"),
    0 < A.length && (t = new vd("onChange","change",null,t,r),
    e.push({
        event: t,
        listeners: A
    }))
}
var es = null
  , Us = null;
function NF(e) {
    Tm(e, 0)
}
function yl(e) {
    var A = Tn(e);
    if (j0(A))
        return e
}
function RF(e, A) {
    if (e === "change")
        return A
}
var vm = !1;
if (bt) {
    var uu;
    if (bt) {
        var cu = "oninput"in document;
        if (!cu) {
            var gg = document.createElement("div");
            gg.setAttribute("oninput", "return;"),
            cu = typeof gg.oninput == "function"
        }
        uu = cu
    } else
        uu = !1;
    vm = uu && (!document.documentMode || 9 < document.documentMode)
}
function Bg() {
    es && (es.detachEvent("onpropertychange", Qm),
    Us = es = null)
}
function Qm(e) {
    if (e.propertyName === "value" && yl(Us)) {
        var A = [];
        Cm(A, Us, e, Bd(e)),
        tm(NF, A)
    }
}
function VF(e, A, t) {
    e === "focusin" ? (Bg(),
    es = A,
    Us = t,
    es.attachEvent("onpropertychange", Qm)) : e === "focusout" && Bg()
}
function GF(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return yl(Us)
}
function jF(e, A) {
    if (e === "click")
        return yl(A)
}
function zF(e, A) {
    if (e === "input" || e === "change")
        return yl(A)
}
function XF(e, A) {
    return e === A && (e !== 0 || 1 / e === 1 / A) || e !== e && A !== A
}
var nt = typeof Object.is == "function" ? Object.is : XF;
function xs(e, A) {
    if (nt(e, A))
        return !0;
    if (typeof e != "object" || e === null || typeof A != "object" || A === null)
        return !1;
    var t = Object.keys(e)
      , r = Object.keys(A);
    if (t.length !== r.length)
        return !1;
    for (r = 0; r < t.length; r++) {
        var n = t[r];
        if (!Bc.call(A, n) || !nt(e[n], A[n]))
            return !1
    }
    return !0
}
function pg(e) {
    for (; e && e.firstChild; )
        e = e.firstChild;
    return e
}
function mg(e, A) {
    var t = pg(e);
    e = 0;
    for (var r; t; ) {
        if (t.nodeType === 3) {
            if (r = e + t.textContent.length,
            e <= A && r >= A)
                return {
                    node: t,
                    offset: A - e
                };
            e = r
        }
        A: {
            for (; t; ) {
                if (t.nextSibling) {
                    t = t.nextSibling;
                    break A
                }
                t = t.parentNode
            }
            t = void 0
        }
        t = pg(t)
    }
}
function Fm(e, A) {
    return e && A ? e === A ? !0 : e && e.nodeType === 3 ? !1 : A && A.nodeType === 3 ? Fm(e, A.parentNode) : "contains"in e ? e.contains(A) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(A) & 16) : !1 : !1
}
function Um() {
    for (var e = window, A = Ca(); A instanceof e.HTMLIFrameElement; ) {
        try {
            var t = typeof A.contentWindow.location.href == "string"
        } catch {
            t = !1
        }
        if (t)
            e = A.contentWindow;
        else
            break;
        A = Ca(e.document)
    }
    return A
}
function Ud(e) {
    var A = e && e.nodeName && e.nodeName.toLowerCase();
    return A && (A === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || A === "textarea" || e.contentEditable === "true")
}
function WF(e) {
    var A = Um()
      , t = e.focusedElem
      , r = e.selectionRange;
    if (A !== t && t && t.ownerDocument && Fm(t.ownerDocument.documentElement, t)) {
        if (r !== null && Ud(t)) {
            if (A = r.start,
            e = r.end,
            e === void 0 && (e = A),
            "selectionStart"in t)
                t.selectionStart = A,
                t.selectionEnd = Math.min(e, t.value.length);
            else if (e = (A = t.ownerDocument || document) && A.defaultView || window,
            e.getSelection) {
                e = e.getSelection();
                var n = t.textContent.length
                  , i = Math.min(r.start, n);
                r = r.end === void 0 ? i : Math.min(r.end, n),
                !e.extend && i > r && (n = r,
                r = i,
                i = n),
                n = mg(t, i);
                var s = mg(t, r);
                n && s && (e.rangeCount !== 1 || e.anchorNode !== n.node || e.anchorOffset !== n.offset || e.focusNode !== s.node || e.focusOffset !== s.offset) && (A = A.createRange(),
                A.setStart(n.node, n.offset),
                e.removeAllRanges(),
                i > r ? (e.addRange(A),
                e.extend(s.node, s.offset)) : (A.setEnd(s.node, s.offset),
                e.addRange(A)))
            }
        }
        for (A = [],
        e = t; e = e.parentNode; )
            e.nodeType === 1 && A.push({
                element: e,
                left: e.scrollLeft,
                top: e.scrollTop
            });
        for (typeof t.focus == "function" && t.focus(),
        t = 0; t < A.length; t++)
            e = A[t],
            e.element.scrollLeft = e.left,
            e.element.scrollTop = e.top
    }
}
var YF = bt && "documentMode"in document && 11 >= document.documentMode
  , _n = null
  , Dc = null
  , ts = null
  , kc = !1;
function wg(e, A, t) {
    var r = t.window === t ? t.document : t.nodeType === 9 ? t : t.ownerDocument;
    kc || _n == null || _n !== Ca(r) || (r = _n,
    "selectionStart"in r && Ud(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(),
    r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }),
    ts && xs(ts, r) || (ts = r,
    r = Ia(Dc, "onSelect"),
    0 < r.length && (A = new vd("onSelect","select",null,A,t),
    e.push({
        event: A,
        listeners: r
    }),
    A.target = _n)))
}
function po(e, A) {
    var t = {};
    return t[e.toLowerCase()] = A.toLowerCase(),
    t["Webkit" + e] = "webkit" + A,
    t["Moz" + e] = "moz" + A,
    t
}
var Sn = {
    animationend: po("Animation", "AnimationEnd"),
    animationiteration: po("Animation", "AnimationIteration"),
    animationstart: po("Animation", "AnimationStart"),
    transitionend: po("Transition", "TransitionEnd")
}
  , fu = {}
  , xm = {};
bt && (xm = document.createElement("div").style,
"AnimationEvent"in window || (delete Sn.animationend.animation,
delete Sn.animationiteration.animation,
delete Sn.animationstart.animation),
"TransitionEvent"in window || delete Sn.transitionend.transition);
function Cl(e) {
    if (fu[e])
        return fu[e];
    if (!Sn[e])
        return e;
    var A = Sn[e], t;
    for (t in A)
        if (A.hasOwnProperty(t) && t in xm)
            return fu[e] = A[t];
    return e
}
var Em = Cl("animationend")
  , Im = Cl("animationiteration")
  , Hm = Cl("animationstart")
  , _m = Cl("transitionend")
  , Sm = new Map
  , yg = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Er(e, A) {
    Sm.set(e, A),
    fn(A, [e])
}
for (var du = 0; du < yg.length; du++) {
    var hu = yg[du]
      , JF = hu.toLowerCase()
      , $F = hu[0].toUpperCase() + hu.slice(1);
    Er(JF, "on" + $F)
}
Er(Em, "onAnimationEnd");
Er(Im, "onAnimationIteration");
Er(Hm, "onAnimationStart");
Er("dblclick", "onDoubleClick");
Er("focusin", "onFocus");
Er("focusout", "onBlur");
Er(_m, "onTransitionEnd");
ri("onMouseEnter", ["mouseout", "mouseover"]);
ri("onMouseLeave", ["mouseout", "mouseover"]);
ri("onPointerEnter", ["pointerout", "pointerover"]);
ri("onPointerLeave", ["pointerout", "pointerover"]);
fn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
fn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
fn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
fn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
fn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
fn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Ni = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
  , ZF = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ni));
function Cg(e, A, t) {
    var r = e.type || "unknown-event";
    e.currentTarget = t,
    JQ(r, A, void 0, e),
    e.currentTarget = null
}
function Tm(e, A) {
    A = (A & 4) !== 0;
    for (var t = 0; t < e.length; t++) {
        var r = e[t]
          , n = r.event;
        r = r.listeners;
        A: {
            var i = void 0;
            if (A)
                for (var s = r.length - 1; 0 <= s; s--) {
                    var o = r[s]
                      , a = o.instance
                      , l = o.currentTarget;
                    if (o = o.listener,
                    a !== i && n.isPropagationStopped())
                        break A;
                    Cg(n, o, l),
                    i = a
                }
            else
                for (s = 0; s < r.length; s++) {
                    if (o = r[s],
                    a = o.instance,
                    l = o.currentTarget,
                    o = o.listener,
                    a !== i && n.isPropagationStopped())
                        break A;
                    Cg(n, o, l),
                    i = a
                }
        }
    }
    if (Qa)
        throw e = Sc,
        Qa = !1,
        Sc = null,
        e
}
function sA(e, A) {
    var t = A[Nc];
    t === void 0 && (t = A[Nc] = new Set);
    var r = e + "__bubble";
    t.has(r) || (Lm(A, e, 2, !1),
    t.add(r))
}
function gu(e, A, t) {
    var r = 0;
    A && (r |= 4),
    Lm(t, e, r, A)
}
var mo = "_reactListening" + Math.random().toString(36).slice(2);
function Es(e) {
    if (!e[mo]) {
        e[mo] = !0,
        O0.forEach(function(t) {
            t !== "selectionchange" && (ZF.has(t) || gu(t, !1, e),
            gu(t, !0, e))
        });
        var A = e.nodeType === 9 ? e : e.ownerDocument;
        A === null || A[mo] || (A[mo] = !0,
        gu("selectionchange", !1, A))
    }
}
function Lm(e, A, t, r) {
    switch (Bm(A)) {
    case 1:
        var n = fF;
        break;
    case 4:
        n = dF;
        break;
    default:
        n = yd
    }
    t = n.bind(null, A, t, e),
    n = void 0,
    !_c || A !== "touchstart" && A !== "touchmove" && A !== "wheel" || (n = !0),
    r ? n !== void 0 ? e.addEventListener(A, t, {
        capture: !0,
        passive: n
    }) : e.addEventListener(A, t, !0) : n !== void 0 ? e.addEventListener(A, t, {
        passive: n
    }) : e.addEventListener(A, t, !1)
}
function Bu(e, A, t, r, n) {
    var i = r;
    if (!(A & 1) && !(A & 2) && r !== null)
        A: for (; ; ) {
            if (r === null)
                return;
            var s = r.tag;
            if (s === 3 || s === 4) {
                var o = r.stateNode.containerInfo;
                if (o === n || o.nodeType === 8 && o.parentNode === n)
                    break;
                if (s === 4)
                    for (s = r.return; s !== null; ) {
                        var a = s.tag;
                        if ((a === 3 || a === 4) && (a = s.stateNode.containerInfo,
                        a === n || a.nodeType === 8 && a.parentNode === n))
                            return;
                        s = s.return
                    }
                for (; o !== null; ) {
                    if (s = Gr(o),
                    s === null)
                        return;
                    if (a = s.tag,
                    a === 5 || a === 6) {
                        r = i = s;
                        continue A
                    }
                    o = o.parentNode
                }
            }
            r = r.return
        }
    tm(function() {
        var l = i
          , u = Bd(t)
          , c = [];
        A: {
            var f = Sm.get(e);
            if (f !== void 0) {
                var d = vd
                  , B = e;
                switch (e) {
                case "keypress":
                    if (na(t) === 0)
                        break A;
                case "keydown":
                case "keyup":
                    d = IF;
                    break;
                case "focusin":
                    B = "focus",
                    d = lu;
                    break;
                case "focusout":
                    B = "blur",
                    d = lu;
                    break;
                case "beforeblur":
                case "afterblur":
                    d = lu;
                    break;
                case "click":
                    if (t.button === 2)
                        break A;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                    d = lg;
                    break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                    d = BF;
                    break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                    d = SF;
                    break;
                case Em:
                case Im:
                case Hm:
                    d = wF;
                    break;
                case _m:
                    d = LF;
                    break;
                case "scroll":
                    d = hF;
                    break;
                case "wheel":
                    d = DF;
                    break;
                case "copy":
                case "cut":
                case "paste":
                    d = CF;
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                    d = cg
                }
                var h = (A & 4) !== 0
                  , y = !h && e === "scroll"
                  , p = h ? f !== null ? f + "Capture" : null : f;
                h = [];
                for (var g = l, m; g !== null; ) {
                    m = g;
                    var C = m.stateNode;
                    if (m.tag === 5 && C !== null && (m = C,
                    p !== null && (C = Cs(g, p),
                    C != null && h.push(Is(g, C, m)))),
                    y)
                        break;
                    g = g.return
                }
                0 < h.length && (f = new d(f,B,null,t,u),
                c.push({
                    event: f,
                    listeners: h
                }))
            }
        }
        if (!(A & 7)) {
            A: {
                if (f = e === "mouseover" || e === "pointerover",
                d = e === "mouseout" || e === "pointerout",
                f && t !== Ic && (B = t.relatedTarget || t.fromElement) && (Gr(B) || B[Dt]))
                    break A;
                if ((d || f) && (f = u.window === u ? u : (f = u.ownerDocument) ? f.defaultView || f.parentWindow : window,
                d ? (B = t.relatedTarget || t.toElement,
                d = l,
                B = B ? Gr(B) : null,
                B !== null && (y = dn(B),
                B !== y || B.tag !== 5 && B.tag !== 6) && (B = null)) : (d = null,
                B = l),
                d !== B)) {
                    if (h = lg,
                    C = "onMouseLeave",
                    p = "onMouseEnter",
                    g = "mouse",
                    (e === "pointerout" || e === "pointerover") && (h = cg,
                    C = "onPointerLeave",
                    p = "onPointerEnter",
                    g = "pointer"),
                    y = d == null ? f : Tn(d),
                    m = B == null ? f : Tn(B),
                    f = new h(C,g + "leave",d,t,u),
                    f.target = y,
                    f.relatedTarget = m,
                    C = null,
                    Gr(u) === l && (h = new h(p,g + "enter",B,t,u),
                    h.target = m,
                    h.relatedTarget = y,
                    C = h),
                    y = C,
                    d && B)
                        e: {
                            for (h = d,
                            p = B,
                            g = 0,
                            m = h; m; m = pn(m))
                                g++;
                            for (m = 0,
                            C = p; C; C = pn(C))
                                m++;
                            for (; 0 < g - m; )
                                h = pn(h),
                                g--;
                            for (; 0 < m - g; )
                                p = pn(p),
                                m--;
                            for (; g--; ) {
                                if (h === p || p !== null && h === p.alternate)
                                    break e;
                                h = pn(h),
                                p = pn(p)
                            }
                            h = null
                        }
                    else
                        h = null;
                    d !== null && vg(c, f, d, h, !1),
                    B !== null && y !== null && vg(c, y, B, h, !0)
                }
            }
            A: {
                if (f = l ? Tn(l) : window,
                d = f.nodeName && f.nodeName.toLowerCase(),
                d === "select" || d === "input" && f.type === "file")
                    var v = RF;
                else if (hg(f))
                    if (vm)
                        v = zF;
                    else {
                        v = GF;
                        var Q = VF
                    }
                else
                    (d = f.nodeName) && d.toLowerCase() === "input" && (f.type === "checkbox" || f.type === "radio") && (v = jF);
                if (v && (v = v(e, l))) {
                    Cm(c, v, t, u);
                    break A
                }
                Q && Q(e, f, l),
                e === "focusout" && (Q = f._wrapperState) && Q.controlled && f.type === "number" && Qc(f, "number", f.value)
            }
            switch (Q = l ? Tn(l) : window,
            e) {
            case "focusin":
                (hg(Q) || Q.contentEditable === "true") && (_n = Q,
                Dc = l,
                ts = null);
                break;
            case "focusout":
                ts = Dc = _n = null;
                break;
            case "mousedown":
                kc = !0;
                break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
                kc = !1,
                wg(c, t, u);
                break;
            case "selectionchange":
                if (YF)
                    break;
            case "keydown":
            case "keyup":
                wg(c, t, u)
            }
            var U;
            if (Fd)
                A: {
                    switch (e) {
                    case "compositionstart":
                        var F = "onCompositionStart";
                        break A;
                    case "compositionend":
                        F = "onCompositionEnd";
                        break A;
                    case "compositionupdate":
                        F = "onCompositionUpdate";
                        break A
                    }
                    F = void 0
                }
            else
                Hn ? wm(e, t) && (F = "onCompositionEnd") : e === "keydown" && t.keyCode === 229 && (F = "onCompositionStart");
            F && (mm && t.locale !== "ko" && (Hn || F !== "onCompositionStart" ? F === "onCompositionEnd" && Hn && (U = pm()) : (qt = u,
            Cd = "value"in qt ? qt.value : qt.textContent,
            Hn = !0)),
            Q = Ia(l, F),
            0 < Q.length && (F = new ug(F,e,null,t,u),
            c.push({
                event: F,
                listeners: Q
            }),
            U ? F.data = U : (U = ym(t),
            U !== null && (F.data = U)))),
            (U = MF ? KF(e, t) : PF(e, t)) && (l = Ia(l, "onBeforeInput"),
            0 < l.length && (u = new ug("onBeforeInput","beforeinput",null,t,u),
            c.push({
                event: u,
                listeners: l
            }),
            u.data = U))
        }
        Tm(c, A)
    })
}
function Is(e, A, t) {
    return {
        instance: e,
        listener: A,
        currentTarget: t
    }
}
function Ia(e, A) {
    for (var t = A + "Capture", r = []; e !== null; ) {
        var n = e
          , i = n.stateNode;
        n.tag === 5 && i !== null && (n = i,
        i = Cs(e, t),
        i != null && r.unshift(Is(e, i, n)),
        i = Cs(e, A),
        i != null && r.push(Is(e, i, n))),
        e = e.return
    }
    return r
}
function pn(e) {
    if (e === null)
        return null;
    do
        e = e.return;
    while (e && e.tag !== 5);
    return e || null
}
function vg(e, A, t, r, n) {
    for (var i = A._reactName, s = []; t !== null && t !== r; ) {
        var o = t
          , a = o.alternate
          , l = o.stateNode;
        if (a !== null && a === r)
            break;
        o.tag === 5 && l !== null && (o = l,
        n ? (a = Cs(t, i),
        a != null && s.unshift(Is(t, a, o))) : n || (a = Cs(t, i),
        a != null && s.push(Is(t, a, o)))),
        t = t.return
    }
    s.length !== 0 && e.push({
        event: A,
        listeners: s
    })
}
var qF = /\r\n?/g
  , A1 = /\u0000|\uFFFD/g;
function Qg(e) {
    return (typeof e == "string" ? e : "" + e).replace(qF, `
`).replace(A1, "")
}
function wo(e, A, t) {
    if (A = Qg(A),
    Qg(e) !== A && t)
        throw Error(S(425))
}
function Ha() {}
var Mc = null
  , Kc = null;
function Pc(e, A) {
    return e === "textarea" || e === "noscript" || typeof A.children == "string" || typeof A.children == "number" || typeof A.dangerouslySetInnerHTML == "object" && A.dangerouslySetInnerHTML !== null && A.dangerouslySetInnerHTML.__html != null
}
var Oc = typeof setTimeout == "function" ? setTimeout : void 0
  , e1 = typeof clearTimeout == "function" ? clearTimeout : void 0
  , Fg = typeof Promise == "function" ? Promise : void 0
  , t1 = typeof queueMicrotask == "function" ? queueMicrotask : typeof Fg < "u" ? function(e) {
    return Fg.resolve(null).then(e).catch(r1)
}
: Oc;
function r1(e) {
    setTimeout(function() {
        throw e
    })
}
function pu(e, A) {
    var t = A
      , r = 0;
    do {
        var n = t.nextSibling;
        if (e.removeChild(t),
        n && n.nodeType === 8)
            if (t = n.data,
            t === "/$") {
                if (r === 0) {
                    e.removeChild(n),
                    Fs(A);
                    return
                }
                r--
            } else
                t !== "$" && t !== "$?" && t !== "$!" || r++;
        t = n
    } while (t);
    Fs(A)
}
function ur(e) {
    for (; e != null; e = e.nextSibling) {
        var A = e.nodeType;
        if (A === 1 || A === 3)
            break;
        if (A === 8) {
            if (A = e.data,
            A === "$" || A === "$!" || A === "$?")
                break;
            if (A === "/$")
                return null
        }
    }
    return e
}
function Ug(e) {
    e = e.previousSibling;
    for (var A = 0; e; ) {
        if (e.nodeType === 8) {
            var t = e.data;
            if (t === "$" || t === "$!" || t === "$?") {
                if (A === 0)
                    return e;
                A--
            } else
                t === "/$" && A++
        }
        e = e.previousSibling
    }
    return null
}
var Ci = Math.random().toString(36).slice(2)
  , ct = "__reactFiber$" + Ci
  , Hs = "__reactProps$" + Ci
  , Dt = "__reactContainer$" + Ci
  , Nc = "__reactEvents$" + Ci
  , n1 = "__reactListeners$" + Ci
  , i1 = "__reactHandles$" + Ci;
function Gr(e) {
    var A = e[ct];
    if (A)
        return A;
    for (var t = e.parentNode; t; ) {
        if (A = t[Dt] || t[ct]) {
            if (t = A.alternate,
            A.child !== null || t !== null && t.child !== null)
                for (e = Ug(e); e !== null; ) {
                    if (t = e[ct])
                        return t;
                    e = Ug(e)
                }
            return A
        }
        e = t,
        t = e.parentNode
    }
    return null
}
function Zs(e) {
    return e = e[ct] || e[Dt],
    !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}
function Tn(e) {
    if (e.tag === 5 || e.tag === 6)
        return e.stateNode;
    throw Error(S(33))
}
function vl(e) {
    return e[Hs] || null
}
var Rc = []
  , Ln = -1;
function Ir(e) {
    return {
        current: e
    }
}
function oA(e) {
    0 > Ln || (e.current = Rc[Ln],
    Rc[Ln] = null,
    Ln--)
}
function nA(e, A) {
    Ln++,
    Rc[Ln] = e.current,
    e.current = A
}
var Cr = {}
  , qA = Ir(Cr)
  , ue = Ir(!1)
  , sn = Cr;
function ni(e, A) {
    var t = e.type.contextTypes;
    if (!t)
        return Cr;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === A)
        return r.__reactInternalMemoizedMaskedChildContext;
    var n = {}, i;
    for (i in t)
        n[i] = A[i];
    return r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = A,
    e.__reactInternalMemoizedMaskedChildContext = n),
    n
}
function ce(e) {
    return e = e.childContextTypes,
    e != null
}
function _a() {
    oA(ue),
    oA(qA)
}
function xg(e, A, t) {
    if (qA.current !== Cr)
        throw Error(S(168));
    nA(qA, A),
    nA(ue, t)
}
function bm(e, A, t) {
    var r = e.stateNode;
    if (A = A.childContextTypes,
    typeof r.getChildContext != "function")
        return t;
    r = r.getChildContext();
    for (var n in r)
        if (!(n in A))
            throw Error(S(108, VQ(e) || "Unknown", n));
    return pA({}, t, r)
}
function Sa(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Cr,
    sn = qA.current,
    nA(qA, e),
    nA(ue, ue.current),
    !0
}
function Eg(e, A, t) {
    var r = e.stateNode;
    if (!r)
        throw Error(S(169));
    t ? (e = bm(e, A, sn),
    r.__reactInternalMemoizedMergedChildContext = e,
    oA(ue),
    oA(qA),
    nA(qA, e)) : oA(ue),
    nA(ue, t)
}
var Ft = null
  , Ql = !1
  , mu = !1;
function Dm(e) {
    Ft === null ? Ft = [e] : Ft.push(e)
}
function s1(e) {
    Ql = !0,
    Dm(e)
}
function Hr() {
    if (!mu && Ft !== null) {
        mu = !0;
        var e = 0
          , A = Z;
        try {
            var t = Ft;
            for (Z = 1; e < t.length; e++) {
                var r = t[e];
                do
                    r = r(!0);
                while (r !== null)
            }
            Ft = null,
            Ql = !1
        } catch (n) {
            throw Ft !== null && (Ft = Ft.slice(e + 1)),
            sm(pd, Hr),
            n
        } finally {
            Z = A,
            mu = !1
        }
    }
    return null
}
var bn = []
  , Dn = 0
  , Ta = null
  , La = 0
  , Pe = []
  , Oe = 0
  , on = null
  , xt = 1
  , Et = "";
function Mr(e, A) {
    bn[Dn++] = La,
    bn[Dn++] = Ta,
    Ta = e,
    La = A
}
function km(e, A, t) {
    Pe[Oe++] = xt,
    Pe[Oe++] = Et,
    Pe[Oe++] = on,
    on = e;
    var r = xt;
    e = Et;
    var n = 32 - tt(r) - 1;
    r &= ~(1 << n),
    t += 1;
    var i = 32 - tt(A) + n;
    if (30 < i) {
        var s = n - n % 5;
        i = (r & (1 << s) - 1).toString(32),
        r >>= s,
        n -= s,
        xt = 1 << 32 - tt(A) + n | t << n | r,
        Et = i + e
    } else
        xt = 1 << i | t << n | r,
        Et = e
}
function xd(e) {
    e.return !== null && (Mr(e, 1),
    km(e, 1, 0))
}
function Ed(e) {
    for (; e === Ta; )
        Ta = bn[--Dn],
        bn[Dn] = null,
        La = bn[--Dn],
        bn[Dn] = null;
    for (; e === on; )
        on = Pe[--Oe],
        Pe[Oe] = null,
        Et = Pe[--Oe],
        Pe[Oe] = null,
        xt = Pe[--Oe],
        Pe[Oe] = null
}
var Ee = null
  , Fe = null
  , uA = !1
  , et = null;
function Mm(e, A) {
    var t = Re(5, null, null, 0);
    t.elementType = "DELETED",
    t.stateNode = A,
    t.return = e,
    A = e.deletions,
    A === null ? (e.deletions = [t],
    e.flags |= 16) : A.push(t)
}
function Ig(e, A) {
    switch (e.tag) {
    case 5:
        var t = e.type;
        return A = A.nodeType !== 1 || t.toLowerCase() !== A.nodeName.toLowerCase() ? null : A,
        A !== null ? (e.stateNode = A,
        Ee = e,
        Fe = ur(A.firstChild),
        !0) : !1;
    case 6:
        return A = e.pendingProps === "" || A.nodeType !== 3 ? null : A,
        A !== null ? (e.stateNode = A,
        Ee = e,
        Fe = null,
        !0) : !1;
    case 13:
        return A = A.nodeType !== 8 ? null : A,
        A !== null ? (t = on !== null ? {
            id: xt,
            overflow: Et
        } : null,
        e.memoizedState = {
            dehydrated: A,
            treeContext: t,
            retryLane: 1073741824
        },
        t = Re(18, null, null, 0),
        t.stateNode = A,
        t.return = e,
        e.child = t,
        Ee = e,
        Fe = null,
        !0) : !1;
    default:
        return !1
    }
}
function Vc(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function Gc(e) {
    if (uA) {
        var A = Fe;
        if (A) {
            var t = A;
            if (!Ig(e, A)) {
                if (Vc(e))
                    throw Error(S(418));
                A = ur(t.nextSibling);
                var r = Ee;
                A && Ig(e, A) ? Mm(r, t) : (e.flags = e.flags & -4097 | 2,
                uA = !1,
                Ee = e)
            }
        } else {
            if (Vc(e))
                throw Error(S(418));
            e.flags = e.flags & -4097 | 2,
            uA = !1,
            Ee = e
        }
    }
}
function Hg(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
        e = e.return;
    Ee = e
}
function yo(e) {
    if (e !== Ee)
        return !1;
    if (!uA)
        return Hg(e),
        uA = !0,
        !1;
    var A;
    if ((A = e.tag !== 3) && !(A = e.tag !== 5) && (A = e.type,
    A = A !== "head" && A !== "body" && !Pc(e.type, e.memoizedProps)),
    A && (A = Fe)) {
        if (Vc(e))
            throw Km(),
            Error(S(418));
        for (; A; )
            Mm(e, A),
            A = ur(A.nextSibling)
    }
    if (Hg(e),
    e.tag === 13) {
        if (e = e.memoizedState,
        e = e !== null ? e.dehydrated : null,
        !e)
            throw Error(S(317));
        A: {
            for (e = e.nextSibling,
            A = 0; e; ) {
                if (e.nodeType === 8) {
                    var t = e.data;
                    if (t === "/$") {
                        if (A === 0) {
                            Fe = ur(e.nextSibling);
                            break A
                        }
                        A--
                    } else
                        t !== "$" && t !== "$!" && t !== "$?" || A++
                }
                e = e.nextSibling
            }
            Fe = null
        }
    } else
        Fe = Ee ? ur(e.stateNode.nextSibling) : null;
    return !0
}
function Km() {
    for (var e = Fe; e; )
        e = ur(e.nextSibling)
}
function ii() {
    Fe = Ee = null,
    uA = !1
}
function Id(e) {
    et === null ? et = [e] : et.push(e)
}
var o1 = Rt.ReactCurrentBatchConfig;
function Ii(e, A, t) {
    if (e = t.ref,
    e !== null && typeof e != "function" && typeof e != "object") {
        if (t._owner) {
            if (t = t._owner,
            t) {
                if (t.tag !== 1)
                    throw Error(S(309));
                var r = t.stateNode
            }
            if (!r)
                throw Error(S(147, e));
            var n = r
              , i = "" + e;
            return A !== null && A.ref !== null && typeof A.ref == "function" && A.ref._stringRef === i ? A.ref : (A = function(s) {
                var o = n.refs;
                s === null ? delete o[i] : o[i] = s
            }
            ,
            A._stringRef = i,
            A)
        }
        if (typeof e != "string")
            throw Error(S(284));
        if (!t._owner)
            throw Error(S(290, e))
    }
    return e
}
function Co(e, A) {
    throw e = Object.prototype.toString.call(A),
    Error(S(31, e === "[object Object]" ? "object with keys {" + Object.keys(A).join(", ") + "}" : e))
}
function _g(e) {
    var A = e._init;
    return A(e._payload)
}
function Pm(e) {
    function A(p, g) {
        if (e) {
            var m = p.deletions;
            m === null ? (p.deletions = [g],
            p.flags |= 16) : m.push(g)
        }
    }
    function t(p, g) {
        if (!e)
            return null;
        for (; g !== null; )
            A(p, g),
            g = g.sibling;
        return null
    }
    function r(p, g) {
        for (p = new Map; g !== null; )
            g.key !== null ? p.set(g.key, g) : p.set(g.index, g),
            g = g.sibling;
        return p
    }
    function n(p, g) {
        return p = hr(p, g),
        p.index = 0,
        p.sibling = null,
        p
    }
    function i(p, g, m) {
        return p.index = m,
        e ? (m = p.alternate,
        m !== null ? (m = m.index,
        m < g ? (p.flags |= 2,
        g) : m) : (p.flags |= 2,
        g)) : (p.flags |= 1048576,
        g)
    }
    function s(p) {
        return e && p.alternate === null && (p.flags |= 2),
        p
    }
    function o(p, g, m, C) {
        return g === null || g.tag !== 6 ? (g = Uu(m, p.mode, C),
        g.return = p,
        g) : (g = n(g, m),
        g.return = p,
        g)
    }
    function a(p, g, m, C) {
        var v = m.type;
        return v === In ? u(p, g, m.props.children, C, m.key) : g !== null && (g.elementType === v || typeof v == "object" && v !== null && v.$$typeof === Xt && _g(v) === g.type) ? (C = n(g, m.props),
        C.ref = Ii(p, g, m),
        C.return = p,
        C) : (C = ca(m.type, m.key, m.props, null, p.mode, C),
        C.ref = Ii(p, g, m),
        C.return = p,
        C)
    }
    function l(p, g, m, C) {
        return g === null || g.tag !== 4 || g.stateNode.containerInfo !== m.containerInfo || g.stateNode.implementation !== m.implementation ? (g = xu(m, p.mode, C),
        g.return = p,
        g) : (g = n(g, m.children || []),
        g.return = p,
        g)
    }
    function u(p, g, m, C, v) {
        return g === null || g.tag !== 7 ? (g = $r(m, p.mode, C, v),
        g.return = p,
        g) : (g = n(g, m),
        g.return = p,
        g)
    }
    function c(p, g, m) {
        if (typeof g == "string" && g !== "" || typeof g == "number")
            return g = Uu("" + g, p.mode, m),
            g.return = p,
            g;
        if (typeof g == "object" && g !== null) {
            switch (g.$$typeof) {
            case lo:
                return m = ca(g.type, g.key, g.props, null, p.mode, m),
                m.ref = Ii(p, null, g),
                m.return = p,
                m;
            case En:
                return g = xu(g, p.mode, m),
                g.return = p,
                g;
            case Xt:
                var C = g._init;
                return c(p, C(g._payload), m)
            }
            if (Pi(g) || Qi(g))
                return g = $r(g, p.mode, m, null),
                g.return = p,
                g;
            Co(p, g)
        }
        return null
    }
    function f(p, g, m, C) {
        var v = g !== null ? g.key : null;
        if (typeof m == "string" && m !== "" || typeof m == "number")
            return v !== null ? null : o(p, g, "" + m, C);
        if (typeof m == "object" && m !== null) {
            switch (m.$$typeof) {
            case lo:
                return m.key === v ? a(p, g, m, C) : null;
            case En:
                return m.key === v ? l(p, g, m, C) : null;
            case Xt:
                return v = m._init,
                f(p, g, v(m._payload), C)
            }
            if (Pi(m) || Qi(m))
                return v !== null ? null : u(p, g, m, C, null);
            Co(p, m)
        }
        return null
    }
    function d(p, g, m, C, v) {
        if (typeof C == "string" && C !== "" || typeof C == "number")
            return p = p.get(m) || null,
            o(g, p, "" + C, v);
        if (typeof C == "object" && C !== null) {
            switch (C.$$typeof) {
            case lo:
                return p = p.get(C.key === null ? m : C.key) || null,
                a(g, p, C, v);
            case En:
                return p = p.get(C.key === null ? m : C.key) || null,
                l(g, p, C, v);
            case Xt:
                var Q = C._init;
                return d(p, g, m, Q(C._payload), v)
            }
            if (Pi(C) || Qi(C))
                return p = p.get(m) || null,
                u(g, p, C, v, null);
            Co(g, C)
        }
        return null
    }
    function B(p, g, m, C) {
        for (var v = null, Q = null, U = g, F = g = 0, x = null; U !== null && F < m.length; F++) {
            U.index > F ? (x = U,
            U = null) : x = U.sibling;
            var H = f(p, U, m[F], C);
            if (H === null) {
                U === null && (U = x);
                break
            }
            e && U && H.alternate === null && A(p, U),
            g = i(H, g, F),
            Q === null ? v = H : Q.sibling = H,
            Q = H,
            U = x
        }
        if (F === m.length)
            return t(p, U),
            uA && Mr(p, F),
            v;
        if (U === null) {
            for (; F < m.length; F++)
                U = c(p, m[F], C),
                U !== null && (g = i(U, g, F),
                Q === null ? v = U : Q.sibling = U,
                Q = U);
            return uA && Mr(p, F),
            v
        }
        for (U = r(p, U); F < m.length; F++)
            x = d(U, p, F, m[F], C),
            x !== null && (e && x.alternate !== null && U.delete(x.key === null ? F : x.key),
            g = i(x, g, F),
            Q === null ? v = x : Q.sibling = x,
            Q = x);
        return e && U.forEach(function(E) {
            return A(p, E)
        }),
        uA && Mr(p, F),
        v
    }
    function h(p, g, m, C) {
        var v = Qi(m);
        if (typeof v != "function")
            throw Error(S(150));
        if (m = v.call(m),
        m == null)
            throw Error(S(151));
        for (var Q = v = null, U = g, F = g = 0, x = null, H = m.next(); U !== null && !H.done; F++,
        H = m.next()) {
            U.index > F ? (x = U,
            U = null) : x = U.sibling;
            var E = f(p, U, H.value, C);
            if (E === null) {
                U === null && (U = x);
                break
            }
            e && U && E.alternate === null && A(p, U),
            g = i(E, g, F),
            Q === null ? v = E : Q.sibling = E,
            Q = E,
            U = x
        }
        if (H.done)
            return t(p, U),
            uA && Mr(p, F),
            v;
        if (U === null) {
            for (; !H.done; F++,
            H = m.next())
                H = c(p, H.value, C),
                H !== null && (g = i(H, g, F),
                Q === null ? v = H : Q.sibling = H,
                Q = H);
            return uA && Mr(p, F),
            v
        }
        for (U = r(p, U); !H.done; F++,
        H = m.next())
            H = d(U, p, F, H.value, C),
            H !== null && (e && H.alternate !== null && U.delete(H.key === null ? F : H.key),
            g = i(H, g, F),
            Q === null ? v = H : Q.sibling = H,
            Q = H);
        return e && U.forEach(function(L) {
            return A(p, L)
        }),
        uA && Mr(p, F),
        v
    }
    function y(p, g, m, C) {
        if (typeof m == "object" && m !== null && m.type === In && m.key === null && (m = m.props.children),
        typeof m == "object" && m !== null) {
            switch (m.$$typeof) {
            case lo:
                A: {
                    for (var v = m.key, Q = g; Q !== null; ) {
                        if (Q.key === v) {
                            if (v = m.type,
                            v === In) {
                                if (Q.tag === 7) {
                                    t(p, Q.sibling),
                                    g = n(Q, m.props.children),
                                    g.return = p,
                                    p = g;
                                    break A
                                }
                            } else if (Q.elementType === v || typeof v == "object" && v !== null && v.$$typeof === Xt && _g(v) === Q.type) {
                                t(p, Q.sibling),
                                g = n(Q, m.props),
                                g.ref = Ii(p, Q, m),
                                g.return = p,
                                p = g;
                                break A
                            }
                            t(p, Q);
                            break
                        } else
                            A(p, Q);
                        Q = Q.sibling
                    }
                    m.type === In ? (g = $r(m.props.children, p.mode, C, m.key),
                    g.return = p,
                    p = g) : (C = ca(m.type, m.key, m.props, null, p.mode, C),
                    C.ref = Ii(p, g, m),
                    C.return = p,
                    p = C)
                }
                return s(p);
            case En:
                A: {
                    for (Q = m.key; g !== null; ) {
                        if (g.key === Q)
                            if (g.tag === 4 && g.stateNode.containerInfo === m.containerInfo && g.stateNode.implementation === m.implementation) {
                                t(p, g.sibling),
                                g = n(g, m.children || []),
                                g.return = p,
                                p = g;
                                break A
                            } else {
                                t(p, g);
                                break
                            }
                        else
                            A(p, g);
                        g = g.sibling
                    }
                    g = xu(m, p.mode, C),
                    g.return = p,
                    p = g
                }
                return s(p);
            case Xt:
                return Q = m._init,
                y(p, g, Q(m._payload), C)
            }
            if (Pi(m))
                return B(p, g, m, C);
            if (Qi(m))
                return h(p, g, m, C);
            Co(p, m)
        }
        return typeof m == "string" && m !== "" || typeof m == "number" ? (m = "" + m,
        g !== null && g.tag === 6 ? (t(p, g.sibling),
        g = n(g, m),
        g.return = p,
        p = g) : (t(p, g),
        g = Uu(m, p.mode, C),
        g.return = p,
        p = g),
        s(p)) : t(p, g)
    }
    return y
}
var si = Pm(!0)
  , Om = Pm(!1)
  , ba = Ir(null)
  , Da = null
  , kn = null
  , Hd = null;
function _d() {
    Hd = kn = Da = null
}
function Sd(e) {
    var A = ba.current;
    oA(ba),
    e._currentValue = A
}
function jc(e, A, t) {
    for (; e !== null; ) {
        var r = e.alternate;
        if ((e.childLanes & A) !== A ? (e.childLanes |= A,
        r !== null && (r.childLanes |= A)) : r !== null && (r.childLanes & A) !== A && (r.childLanes |= A),
        e === t)
            break;
        e = e.return
    }
}
function Jn(e, A) {
    Da = e,
    Hd = kn = null,
    e = e.dependencies,
    e !== null && e.firstContext !== null && (e.lanes & A && (le = !0),
    e.firstContext = null)
}
function Ye(e) {
    var A = e._currentValue;
    if (Hd !== e)
        if (e = {
            context: e,
            memoizedValue: A,
            next: null
        },
        kn === null) {
            if (Da === null)
                throw Error(S(308));
            kn = e,
            Da.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else
            kn = kn.next = e;
    return A
}
var jr = null;
function Td(e) {
    jr === null ? jr = [e] : jr.push(e)
}
function Nm(e, A, t, r) {
    var n = A.interleaved;
    return n === null ? (t.next = t,
    Td(A)) : (t.next = n.next,
    n.next = t),
    A.interleaved = t,
    kt(e, r)
}
function kt(e, A) {
    e.lanes |= A;
    var t = e.alternate;
    for (t !== null && (t.lanes |= A),
    t = e,
    e = e.return; e !== null; )
        e.childLanes |= A,
        t = e.alternate,
        t !== null && (t.childLanes |= A),
        t = e,
        e = e.return;
    return t.tag === 3 ? t.stateNode : null
}
var Wt = !1;
function Ld(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}
function Rm(e, A) {
    e = e.updateQueue,
    A.updateQueue === e && (A.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}
function Ht(e, A) {
    return {
        eventTime: e,
        lane: A,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}
function cr(e, A, t) {
    var r = e.updateQueue;
    if (r === null)
        return null;
    if (r = r.shared,
    J & 2) {
        var n = r.pending;
        return n === null ? A.next = A : (A.next = n.next,
        n.next = A),
        r.pending = A,
        kt(e, t)
    }
    return n = r.interleaved,
    n === null ? (A.next = A,
    Td(r)) : (A.next = n.next,
    n.next = A),
    r.interleaved = A,
    kt(e, t)
}
function ia(e, A, t) {
    if (A = A.updateQueue,
    A !== null && (A = A.shared,
    (t & 4194240) !== 0)) {
        var r = A.lanes;
        r &= e.pendingLanes,
        t |= r,
        A.lanes = t,
        md(e, t)
    }
}
function Sg(e, A) {
    var t = e.updateQueue
      , r = e.alternate;
    if (r !== null && (r = r.updateQueue,
    t === r)) {
        var n = null
          , i = null;
        if (t = t.firstBaseUpdate,
        t !== null) {
            do {
                var s = {
                    eventTime: t.eventTime,
                    lane: t.lane,
                    tag: t.tag,
                    payload: t.payload,
                    callback: t.callback,
                    next: null
                };
                i === null ? n = i = s : i = i.next = s,
                t = t.next
            } while (t !== null);
            i === null ? n = i = A : i = i.next = A
        } else
            n = i = A;
        t = {
            baseState: r.baseState,
            firstBaseUpdate: n,
            lastBaseUpdate: i,
            shared: r.shared,
            effects: r.effects
        },
        e.updateQueue = t;
        return
    }
    e = t.lastBaseUpdate,
    e === null ? t.firstBaseUpdate = A : e.next = A,
    t.lastBaseUpdate = A
}
function ka(e, A, t, r) {
    var n = e.updateQueue;
    Wt = !1;
    var i = n.firstBaseUpdate
      , s = n.lastBaseUpdate
      , o = n.shared.pending;
    if (o !== null) {
        n.shared.pending = null;
        var a = o
          , l = a.next;
        a.next = null,
        s === null ? i = l : s.next = l,
        s = a;
        var u = e.alternate;
        u !== null && (u = u.updateQueue,
        o = u.lastBaseUpdate,
        o !== s && (o === null ? u.firstBaseUpdate = l : o.next = l,
        u.lastBaseUpdate = a))
    }
    if (i !== null) {
        var c = n.baseState;
        s = 0,
        u = l = a = null,
        o = i;
        do {
            var f = o.lane
              , d = o.eventTime;
            if ((r & f) === f) {
                u !== null && (u = u.next = {
                    eventTime: d,
                    lane: 0,
                    tag: o.tag,
                    payload: o.payload,
                    callback: o.callback,
                    next: null
                });
                A: {
                    var B = e
                      , h = o;
                    switch (f = A,
                    d = t,
                    h.tag) {
                    case 1:
                        if (B = h.payload,
                        typeof B == "function") {
                            c = B.call(d, c, f);
                            break A
                        }
                        c = B;
                        break A;
                    case 3:
                        B.flags = B.flags & -65537 | 128;
                    case 0:
                        if (B = h.payload,
                        f = typeof B == "function" ? B.call(d, c, f) : B,
                        f == null)
                            break A;
                        c = pA({}, c, f);
                        break A;
                    case 2:
                        Wt = !0
                    }
                }
                o.callback !== null && o.lane !== 0 && (e.flags |= 64,
                f = n.effects,
                f === null ? n.effects = [o] : f.push(o))
            } else
                d = {
                    eventTime: d,
                    lane: f,
                    tag: o.tag,
                    payload: o.payload,
                    callback: o.callback,
                    next: null
                },
                u === null ? (l = u = d,
                a = c) : u = u.next = d,
                s |= f;
            if (o = o.next,
            o === null) {
                if (o = n.shared.pending,
                o === null)
                    break;
                f = o,
                o = f.next,
                f.next = null,
                n.lastBaseUpdate = f,
                n.shared.pending = null
            }
        } while (!0);
        if (u === null && (a = c),
        n.baseState = a,
        n.firstBaseUpdate = l,
        n.lastBaseUpdate = u,
        A = n.shared.interleaved,
        A !== null) {
            n = A;
            do
                s |= n.lane,
                n = n.next;
            while (n !== A)
        } else
            i === null && (n.shared.lanes = 0);
        ln |= s,
        e.lanes = s,
        e.memoizedState = c
    }
}
function Tg(e, A, t) {
    if (e = A.effects,
    A.effects = null,
    e !== null)
        for (A = 0; A < e.length; A++) {
            var r = e[A]
              , n = r.callback;
            if (n !== null) {
                if (r.callback = null,
                r = t,
                typeof n != "function")
                    throw Error(S(191, n));
                n.call(r)
            }
        }
}
var qs = {}
  , gt = Ir(qs)
  , _s = Ir(qs)
  , Ss = Ir(qs);
function zr(e) {
    if (e === qs)
        throw Error(S(174));
    return e
}
function bd(e, A) {
    switch (nA(Ss, A),
    nA(_s, e),
    nA(gt, qs),
    e = A.nodeType,
    e) {
    case 9:
    case 11:
        A = (A = A.documentElement) ? A.namespaceURI : Uc(null, "");
        break;
    default:
        e = e === 8 ? A.parentNode : A,
        A = e.namespaceURI || null,
        e = e.tagName,
        A = Uc(A, e)
    }
    oA(gt),
    nA(gt, A)
}
function oi() {
    oA(gt),
    oA(_s),
    oA(Ss)
}
function Vm(e) {
    zr(Ss.current);
    var A = zr(gt.current)
      , t = Uc(A, e.type);
    A !== t && (nA(_s, e),
    nA(gt, t))
}
function Dd(e) {
    _s.current === e && (oA(gt),
    oA(_s))
}
var fA = Ir(0);
function Ma(e) {
    for (var A = e; A !== null; ) {
        if (A.tag === 13) {
            var t = A.memoizedState;
            if (t !== null && (t = t.dehydrated,
            t === null || t.data === "$?" || t.data === "$!"))
                return A
        } else if (A.tag === 19 && A.memoizedProps.revealOrder !== void 0) {
            if (A.flags & 128)
                return A
        } else if (A.child !== null) {
            A.child.return = A,
            A = A.child;
            continue
        }
        if (A === e)
            break;
        for (; A.sibling === null; ) {
            if (A.return === null || A.return === e)
                return null;
            A = A.return
        }
        A.sibling.return = A.return,
        A = A.sibling
    }
    return null
}
var wu = [];
function kd() {
    for (var e = 0; e < wu.length; e++)
        wu[e]._workInProgressVersionPrimary = null;
    wu.length = 0
}
var sa = Rt.ReactCurrentDispatcher
  , yu = Rt.ReactCurrentBatchConfig
  , an = 0
  , BA = null
  , TA = null
  , kA = null
  , Ka = !1
  , rs = !1
  , Ts = 0
  , a1 = 0;
function jA() {
    throw Error(S(321))
}
function Md(e, A) {
    if (A === null)
        return !1;
    for (var t = 0; t < A.length && t < e.length; t++)
        if (!nt(e[t], A[t]))
            return !1;
    return !0
}
function Kd(e, A, t, r, n, i) {
    if (an = i,
    BA = A,
    A.memoizedState = null,
    A.updateQueue = null,
    A.lanes = 0,
    sa.current = e === null || e.memoizedState === null ? f1 : d1,
    e = t(r, n),
    rs) {
        i = 0;
        do {
            if (rs = !1,
            Ts = 0,
            25 <= i)
                throw Error(S(301));
            i += 1,
            kA = TA = null,
            A.updateQueue = null,
            sa.current = h1,
            e = t(r, n)
        } while (rs)
    }
    if (sa.current = Pa,
    A = TA !== null && TA.next !== null,
    an = 0,
    kA = TA = BA = null,
    Ka = !1,
    A)
        throw Error(S(300));
    return e
}
function Pd() {
    var e = Ts !== 0;
    return Ts = 0,
    e
}
function lt() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return kA === null ? BA.memoizedState = kA = e : kA = kA.next = e,
    kA
}
function Je() {
    if (TA === null) {
        var e = BA.alternate;
        e = e !== null ? e.memoizedState : null
    } else
        e = TA.next;
    var A = kA === null ? BA.memoizedState : kA.next;
    if (A !== null)
        kA = A,
        TA = e;
    else {
        if (e === null)
            throw Error(S(310));
        TA = e,
        e = {
            memoizedState: TA.memoizedState,
            baseState: TA.baseState,
            baseQueue: TA.baseQueue,
            queue: TA.queue,
            next: null
        },
        kA === null ? BA.memoizedState = kA = e : kA = kA.next = e
    }
    return kA
}
function Ls(e, A) {
    return typeof A == "function" ? A(e) : A
}
function Cu(e) {
    var A = Je()
      , t = A.queue;
    if (t === null)
        throw Error(S(311));
    t.lastRenderedReducer = e;
    var r = TA
      , n = r.baseQueue
      , i = t.pending;
    if (i !== null) {
        if (n !== null) {
            var s = n.next;
            n.next = i.next,
            i.next = s
        }
        r.baseQueue = n = i,
        t.pending = null
    }
    if (n !== null) {
        i = n.next,
        r = r.baseState;
        var o = s = null
          , a = null
          , l = i;
        do {
            var u = l.lane;
            if ((an & u) === u)
                a !== null && (a = a.next = {
                    lane: 0,
                    action: l.action,
                    hasEagerState: l.hasEagerState,
                    eagerState: l.eagerState,
                    next: null
                }),
                r = l.hasEagerState ? l.eagerState : e(r, l.action);
            else {
                var c = {
                    lane: u,
                    action: l.action,
                    hasEagerState: l.hasEagerState,
                    eagerState: l.eagerState,
                    next: null
                };
                a === null ? (o = a = c,
                s = r) : a = a.next = c,
                BA.lanes |= u,
                ln |= u
            }
            l = l.next
        } while (l !== null && l !== i);
        a === null ? s = r : a.next = o,
        nt(r, A.memoizedState) || (le = !0),
        A.memoizedState = r,
        A.baseState = s,
        A.baseQueue = a,
        t.lastRenderedState = r
    }
    if (e = t.interleaved,
    e !== null) {
        n = e;
        do
            i = n.lane,
            BA.lanes |= i,
            ln |= i,
            n = n.next;
        while (n !== e)
    } else
        n === null && (t.lanes = 0);
    return [A.memoizedState, t.dispatch]
}
function vu(e) {
    var A = Je()
      , t = A.queue;
    if (t === null)
        throw Error(S(311));
    t.lastRenderedReducer = e;
    var r = t.dispatch
      , n = t.pending
      , i = A.memoizedState;
    if (n !== null) {
        t.pending = null;
        var s = n = n.next;
        do
            i = e(i, s.action),
            s = s.next;
        while (s !== n);
        nt(i, A.memoizedState) || (le = !0),
        A.memoizedState = i,
        A.baseQueue === null && (A.baseState = i),
        t.lastRenderedState = i
    }
    return [i, r]
}
function Gm() {}
function jm(e, A) {
    var t = BA
      , r = Je()
      , n = A()
      , i = !nt(r.memoizedState, n);
    if (i && (r.memoizedState = n,
    le = !0),
    r = r.queue,
    Od(Wm.bind(null, t, r, e), [e]),
    r.getSnapshot !== A || i || kA !== null && kA.memoizedState.tag & 1) {
        if (t.flags |= 2048,
        bs(9, Xm.bind(null, t, r, n, A), void 0, null),
        MA === null)
            throw Error(S(349));
        an & 30 || zm(t, A, n)
    }
    return n
}
function zm(e, A, t) {
    e.flags |= 16384,
    e = {
        getSnapshot: A,
        value: t
    },
    A = BA.updateQueue,
    A === null ? (A = {
        lastEffect: null,
        stores: null
    },
    BA.updateQueue = A,
    A.stores = [e]) : (t = A.stores,
    t === null ? A.stores = [e] : t.push(e))
}
function Xm(e, A, t, r) {
    A.value = t,
    A.getSnapshot = r,
    Ym(A) && Jm(e)
}
function Wm(e, A, t) {
    return t(function() {
        Ym(A) && Jm(e)
    })
}
function Ym(e) {
    var A = e.getSnapshot;
    e = e.value;
    try {
        var t = A();
        return !nt(e, t)
    } catch {
        return !0
    }
}
function Jm(e) {
    var A = kt(e, 1);
    A !== null && rt(A, e, 1, -1)
}
function Lg(e) {
    var A = lt();
    return typeof e == "function" && (e = e()),
    A.memoizedState = A.baseState = e,
    e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ls,
        lastRenderedState: e
    },
    A.queue = e,
    e = e.dispatch = c1.bind(null, BA, e),
    [A.memoizedState, e]
}
function bs(e, A, t, r) {
    return e = {
        tag: e,
        create: A,
        destroy: t,
        deps: r,
        next: null
    },
    A = BA.updateQueue,
    A === null ? (A = {
        lastEffect: null,
        stores: null
    },
    BA.updateQueue = A,
    A.lastEffect = e.next = e) : (t = A.lastEffect,
    t === null ? A.lastEffect = e.next = e : (r = t.next,
    t.next = e,
    e.next = r,
    A.lastEffect = e)),
    e
}
function $m() {
    return Je().memoizedState
}
function oa(e, A, t, r) {
    var n = lt();
    BA.flags |= e,
    n.memoizedState = bs(1 | A, t, void 0, r === void 0 ? null : r)
}
function Fl(e, A, t, r) {
    var n = Je();
    r = r === void 0 ? null : r;
    var i = void 0;
    if (TA !== null) {
        var s = TA.memoizedState;
        if (i = s.destroy,
        r !== null && Md(r, s.deps)) {
            n.memoizedState = bs(A, t, i, r);
            return
        }
    }
    BA.flags |= e,
    n.memoizedState = bs(1 | A, t, i, r)
}
function bg(e, A) {
    return oa(8390656, 8, e, A)
}
function Od(e, A) {
    return Fl(2048, 8, e, A)
}
function Zm(e, A) {
    return Fl(4, 2, e, A)
}
function qm(e, A) {
    return Fl(4, 4, e, A)
}
function Aw(e, A) {
    if (typeof A == "function")
        return e = e(),
        A(e),
        function() {
            A(null)
        }
        ;
    if (A != null)
        return e = e(),
        A.current = e,
        function() {
            A.current = null
        }
}
function ew(e, A, t) {
    return t = t != null ? t.concat([e]) : null,
    Fl(4, 4, Aw.bind(null, A, e), t)
}
function Nd() {}
function tw(e, A) {
    var t = Je();
    A = A === void 0 ? null : A;
    var r = t.memoizedState;
    return r !== null && A !== null && Md(A, r[1]) ? r[0] : (t.memoizedState = [e, A],
    e)
}
function rw(e, A) {
    var t = Je();
    A = A === void 0 ? null : A;
    var r = t.memoizedState;
    return r !== null && A !== null && Md(A, r[1]) ? r[0] : (e = e(),
    t.memoizedState = [e, A],
    e)
}
function nw(e, A, t) {
    return an & 21 ? (nt(t, A) || (t = lm(),
    BA.lanes |= t,
    ln |= t,
    e.baseState = !0),
    A) : (e.baseState && (e.baseState = !1,
    le = !0),
    e.memoizedState = t)
}
function l1(e, A) {
    var t = Z;
    Z = t !== 0 && 4 > t ? t : 4,
    e(!0);
    var r = yu.transition;
    yu.transition = {};
    try {
        e(!1),
        A()
    } finally {
        Z = t,
        yu.transition = r
    }
}
function iw() {
    return Je().memoizedState
}
function u1(e, A, t) {
    var r = dr(e);
    if (t = {
        lane: r,
        action: t,
        hasEagerState: !1,
        eagerState: null,
        next: null
    },
    sw(e))
        ow(A, t);
    else if (t = Nm(e, A, t, r),
    t !== null) {
        var n = ne();
        rt(t, e, r, n),
        aw(t, A, r)
    }
}
function c1(e, A, t) {
    var r = dr(e)
      , n = {
        lane: r,
        action: t,
        hasEagerState: !1,
        eagerState: null,
        next: null
    };
    if (sw(e))
        ow(A, n);
    else {
        var i = e.alternate;
        if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = A.lastRenderedReducer,
        i !== null))
            try {
                var s = A.lastRenderedState
                  , o = i(s, t);
                if (n.hasEagerState = !0,
                n.eagerState = o,
                nt(o, s)) {
                    var a = A.interleaved;
                    a === null ? (n.next = n,
                    Td(A)) : (n.next = a.next,
                    a.next = n),
                    A.interleaved = n;
                    return
                }
            } catch {} finally {}
        t = Nm(e, A, n, r),
        t !== null && (n = ne(),
        rt(t, e, r, n),
        aw(t, A, r))
    }
}
function sw(e) {
    var A = e.alternate;
    return e === BA || A !== null && A === BA
}
function ow(e, A) {
    rs = Ka = !0;
    var t = e.pending;
    t === null ? A.next = A : (A.next = t.next,
    t.next = A),
    e.pending = A
}
function aw(e, A, t) {
    if (t & 4194240) {
        var r = A.lanes;
        r &= e.pendingLanes,
        t |= r,
        A.lanes = t,
        md(e, t)
    }
}
var Pa = {
    readContext: Ye,
    useCallback: jA,
    useContext: jA,
    useEffect: jA,
    useImperativeHandle: jA,
    useInsertionEffect: jA,
    useLayoutEffect: jA,
    useMemo: jA,
    useReducer: jA,
    useRef: jA,
    useState: jA,
    useDebugValue: jA,
    useDeferredValue: jA,
    useTransition: jA,
    useMutableSource: jA,
    useSyncExternalStore: jA,
    useId: jA,
    unstable_isNewReconciler: !1
}
  , f1 = {
    readContext: Ye,
    useCallback: function(e, A) {
        return lt().memoizedState = [e, A === void 0 ? null : A],
        e
    },
    useContext: Ye,
    useEffect: bg,
    useImperativeHandle: function(e, A, t) {
        return t = t != null ? t.concat([e]) : null,
        oa(4194308, 4, Aw.bind(null, A, e), t)
    },
    useLayoutEffect: function(e, A) {
        return oa(4194308, 4, e, A)
    },
    useInsertionEffect: function(e, A) {
        return oa(4, 2, e, A)
    },
    useMemo: function(e, A) {
        var t = lt();
        return A = A === void 0 ? null : A,
        e = e(),
        t.memoizedState = [e, A],
        e
    },
    useReducer: function(e, A, t) {
        var r = lt();
        return A = t !== void 0 ? t(A) : A,
        r.memoizedState = r.baseState = A,
        e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: A
        },
        r.queue = e,
        e = e.dispatch = u1.bind(null, BA, e),
        [r.memoizedState, e]
    },
    useRef: function(e) {
        var A = lt();
        return e = {
            current: e
        },
        A.memoizedState = e
    },
    useState: Lg,
    useDebugValue: Nd,
    useDeferredValue: function(e) {
        return lt().memoizedState = e
    },
    useTransition: function() {
        var e = Lg(!1)
          , A = e[0];
        return e = l1.bind(null, e[1]),
        lt().memoizedState = e,
        [A, e]
    },
    useMutableSource: function() {},
    useSyncExternalStore: function(e, A, t) {
        var r = BA
          , n = lt();
        if (uA) {
            if (t === void 0)
                throw Error(S(407));
            t = t()
        } else {
            if (t = A(),
            MA === null)
                throw Error(S(349));
            an & 30 || zm(r, A, t)
        }
        n.memoizedState = t;
        var i = {
            value: t,
            getSnapshot: A
        };
        return n.queue = i,
        bg(Wm.bind(null, r, i, e), [e]),
        r.flags |= 2048,
        bs(9, Xm.bind(null, r, i, t, A), void 0, null),
        t
    },
    useId: function() {
        var e = lt()
          , A = MA.identifierPrefix;
        if (uA) {
            var t = Et
              , r = xt;
            t = (r & ~(1 << 32 - tt(r) - 1)).toString(32) + t,
            A = ":" + A + "R" + t,
            t = Ts++,
            0 < t && (A += "H" + t.toString(32)),
            A += ":"
        } else
            t = a1++,
            A = ":" + A + "r" + t.toString(32) + ":";
        return e.memoizedState = A
    },
    unstable_isNewReconciler: !1
}
  , d1 = {
    readContext: Ye,
    useCallback: tw,
    useContext: Ye,
    useEffect: Od,
    useImperativeHandle: ew,
    useInsertionEffect: Zm,
    useLayoutEffect: qm,
    useMemo: rw,
    useReducer: Cu,
    useRef: $m,
    useState: function() {
        return Cu(Ls)
    },
    useDebugValue: Nd,
    useDeferredValue: function(e) {
        var A = Je();
        return nw(A, TA.memoizedState, e)
    },
    useTransition: function() {
        var e = Cu(Ls)[0]
          , A = Je().memoizedState;
        return [e, A]
    },
    useMutableSource: Gm,
    useSyncExternalStore: jm,
    useId: iw,
    unstable_isNewReconciler: !1
}
  , h1 = {
    readContext: Ye,
    useCallback: tw,
    useContext: Ye,
    useEffect: Od,
    useImperativeHandle: ew,
    useInsertionEffect: Zm,
    useLayoutEffect: qm,
    useMemo: rw,
    useReducer: vu,
    useRef: $m,
    useState: function() {
        return vu(Ls)
    },
    useDebugValue: Nd,
    useDeferredValue: function(e) {
        var A = Je();
        return TA === null ? A.memoizedState = e : nw(A, TA.memoizedState, e)
    },
    useTransition: function() {
        var e = vu(Ls)[0]
          , A = Je().memoizedState;
        return [e, A]
    },
    useMutableSource: Gm,
    useSyncExternalStore: jm,
    useId: iw,
    unstable_isNewReconciler: !1
};
function qe(e, A) {
    if (e && e.defaultProps) {
        A = pA({}, A),
        e = e.defaultProps;
        for (var t in e)
            A[t] === void 0 && (A[t] = e[t]);
        return A
    }
    return A
}
function zc(e, A, t, r) {
    A = e.memoizedState,
    t = t(r, A),
    t = t == null ? A : pA({}, A, t),
    e.memoizedState = t,
    e.lanes === 0 && (e.updateQueue.baseState = t)
}
var Ul = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? dn(e) === e : !1
    },
    enqueueSetState: function(e, A, t) {
        e = e._reactInternals;
        var r = ne()
          , n = dr(e)
          , i = Ht(r, n);
        i.payload = A,
        t != null && (i.callback = t),
        A = cr(e, i, n),
        A !== null && (rt(A, e, n, r),
        ia(A, e, n))
    },
    enqueueReplaceState: function(e, A, t) {
        e = e._reactInternals;
        var r = ne()
          , n = dr(e)
          , i = Ht(r, n);
        i.tag = 1,
        i.payload = A,
        t != null && (i.callback = t),
        A = cr(e, i, n),
        A !== null && (rt(A, e, n, r),
        ia(A, e, n))
    },
    enqueueForceUpdate: function(e, A) {
        e = e._reactInternals;
        var t = ne()
          , r = dr(e)
          , n = Ht(t, r);
        n.tag = 2,
        A != null && (n.callback = A),
        A = cr(e, n, r),
        A !== null && (rt(A, e, r, t),
        ia(A, e, r))
    }
};
function Dg(e, A, t, r, n, i, s) {
    return e = e.stateNode,
    typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, s) : A.prototype && A.prototype.isPureReactComponent ? !xs(t, r) || !xs(n, i) : !0
}
function lw(e, A, t) {
    var r = !1
      , n = Cr
      , i = A.contextType;
    return typeof i == "object" && i !== null ? i = Ye(i) : (n = ce(A) ? sn : qA.current,
    r = A.contextTypes,
    i = (r = r != null) ? ni(e, n) : Cr),
    A = new A(t,i),
    e.memoizedState = A.state !== null && A.state !== void 0 ? A.state : null,
    A.updater = Ul,
    e.stateNode = A,
    A._reactInternals = e,
    r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = n,
    e.__reactInternalMemoizedMaskedChildContext = i),
    A
}
function kg(e, A, t, r) {
    e = A.state,
    typeof A.componentWillReceiveProps == "function" && A.componentWillReceiveProps(t, r),
    typeof A.UNSAFE_componentWillReceiveProps == "function" && A.UNSAFE_componentWillReceiveProps(t, r),
    A.state !== e && Ul.enqueueReplaceState(A, A.state, null)
}
function Xc(e, A, t, r) {
    var n = e.stateNode;
    n.props = t,
    n.state = e.memoizedState,
    n.refs = {},
    Ld(e);
    var i = A.contextType;
    typeof i == "object" && i !== null ? n.context = Ye(i) : (i = ce(A) ? sn : qA.current,
    n.context = ni(e, i)),
    n.state = e.memoizedState,
    i = A.getDerivedStateFromProps,
    typeof i == "function" && (zc(e, A, i, t),
    n.state = e.memoizedState),
    typeof A.getDerivedStateFromProps == "function" || typeof n.getSnapshotBeforeUpdate == "function" || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (A = n.state,
    typeof n.componentWillMount == "function" && n.componentWillMount(),
    typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount(),
    A !== n.state && Ul.enqueueReplaceState(n, n.state, null),
    ka(e, t, n, r),
    n.state = e.memoizedState),
    typeof n.componentDidMount == "function" && (e.flags |= 4194308)
}
function ai(e, A) {
    try {
        var t = ""
          , r = A;
        do
            t += RQ(r),
            r = r.return;
        while (r);
        var n = t
    } catch (i) {
        n = `
Error generating stack: ` + i.message + `
` + i.stack
    }
    return {
        value: e,
        source: A,
        stack: n,
        digest: null
    }
}
function Qu(e, A, t) {
    return {
        value: e,
        source: null,
        stack: t ?? null,
        digest: A ?? null
    }
}
function Wc(e, A) {
    try {
        console.error(A.value)
    } catch (t) {
        setTimeout(function() {
            throw t
        })
    }
}
var g1 = typeof WeakMap == "function" ? WeakMap : Map;
function uw(e, A, t) {
    t = Ht(-1, t),
    t.tag = 3,
    t.payload = {
        element: null
    };
    var r = A.value;
    return t.callback = function() {
        Na || (Na = !0,
        nf = r),
        Wc(e, A)
    }
    ,
    t
}
function cw(e, A, t) {
    t = Ht(-1, t),
    t.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var n = A.value;
        t.payload = function() {
            return r(n)
        }
        ,
        t.callback = function() {
            Wc(e, A)
        }
    }
    var i = e.stateNode;
    return i !== null && typeof i.componentDidCatch == "function" && (t.callback = function() {
        Wc(e, A),
        typeof r != "function" && (fr === null ? fr = new Set([this]) : fr.add(this));
        var s = A.stack;
        this.componentDidCatch(A.value, {
            componentStack: s !== null ? s : ""
        })
    }
    ),
    t
}
function Mg(e, A, t) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new g1;
        var n = new Set;
        r.set(A, n)
    } else
        n = r.get(A),
        n === void 0 && (n = new Set,
        r.set(A, n));
    n.has(t) || (n.add(t),
    e = H1.bind(null, e, A, t),
    A.then(e, e))
}
function Kg(e) {
    do {
        var A;
        if ((A = e.tag === 13) && (A = e.memoizedState,
        A = A !== null ? A.dehydrated !== null : !0),
        A)
            return e;
        e = e.return
    } while (e !== null);
    return null
}
function Pg(e, A, t, r, n) {
    return e.mode & 1 ? (e.flags |= 65536,
    e.lanes = n,
    e) : (e === A ? e.flags |= 65536 : (e.flags |= 128,
    t.flags |= 131072,
    t.flags &= -52805,
    t.tag === 1 && (t.alternate === null ? t.tag = 17 : (A = Ht(-1, 1),
    A.tag = 2,
    cr(t, A, 1))),
    t.lanes |= 1),
    e)
}
var B1 = Rt.ReactCurrentOwner
  , le = !1;
function te(e, A, t, r) {
    A.child = e === null ? Om(A, null, t, r) : si(A, e.child, t, r)
}
function Og(e, A, t, r, n) {
    t = t.render;
    var i = A.ref;
    return Jn(A, n),
    r = Kd(e, A, t, r, i, n),
    t = Pd(),
    e !== null && !le ? (A.updateQueue = e.updateQueue,
    A.flags &= -2053,
    e.lanes &= ~n,
    Mt(e, A, n)) : (uA && t && xd(A),
    A.flags |= 1,
    te(e, A, r, n),
    A.child)
}
function Ng(e, A, t, r, n) {
    if (e === null) {
        var i = t.type;
        return typeof i == "function" && !Yd(i) && i.defaultProps === void 0 && t.compare === null && t.defaultProps === void 0 ? (A.tag = 15,
        A.type = i,
        fw(e, A, i, r, n)) : (e = ca(t.type, null, r, A, A.mode, n),
        e.ref = A.ref,
        e.return = A,
        A.child = e)
    }
    if (i = e.child,
    !(e.lanes & n)) {
        var s = i.memoizedProps;
        if (t = t.compare,
        t = t !== null ? t : xs,
        t(s, r) && e.ref === A.ref)
            return Mt(e, A, n)
    }
    return A.flags |= 1,
    e = hr(i, r),
    e.ref = A.ref,
    e.return = A,
    A.child = e
}
function fw(e, A, t, r, n) {
    if (e !== null) {
        var i = e.memoizedProps;
        if (xs(i, r) && e.ref === A.ref)
            if (le = !1,
            A.pendingProps = r = i,
            (e.lanes & n) !== 0)
                e.flags & 131072 && (le = !0);
            else
                return A.lanes = e.lanes,
                Mt(e, A, n)
    }
    return Yc(e, A, t, r, n)
}
function dw(e, A, t) {
    var r = A.pendingProps
      , n = r.children
      , i = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(A.mode & 1))
            A.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            nA(Kn, Ce),
            Ce |= t;
        else {
            if (!(t & 1073741824))
                return e = i !== null ? i.baseLanes | t : t,
                A.lanes = A.childLanes = 1073741824,
                A.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null
                },
                A.updateQueue = null,
                nA(Kn, Ce),
                Ce |= e,
                null;
            A.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            r = i !== null ? i.baseLanes : t,
            nA(Kn, Ce),
            Ce |= r
        }
    else
        i !== null ? (r = i.baseLanes | t,
        A.memoizedState = null) : r = t,
        nA(Kn, Ce),
        Ce |= r;
    return te(e, A, n, t),
    A.child
}
function hw(e, A) {
    var t = A.ref;
    (e === null && t !== null || e !== null && e.ref !== t) && (A.flags |= 512,
    A.flags |= 2097152)
}
function Yc(e, A, t, r, n) {
    var i = ce(t) ? sn : qA.current;
    return i = ni(A, i),
    Jn(A, n),
    t = Kd(e, A, t, r, i, n),
    r = Pd(),
    e !== null && !le ? (A.updateQueue = e.updateQueue,
    A.flags &= -2053,
    e.lanes &= ~n,
    Mt(e, A, n)) : (uA && r && xd(A),
    A.flags |= 1,
    te(e, A, t, n),
    A.child)
}
function Rg(e, A, t, r, n) {
    if (ce(t)) {
        var i = !0;
        Sa(A)
    } else
        i = !1;
    if (Jn(A, n),
    A.stateNode === null)
        aa(e, A),
        lw(A, t, r),
        Xc(A, t, r, n),
        r = !0;
    else if (e === null) {
        var s = A.stateNode
          , o = A.memoizedProps;
        s.props = o;
        var a = s.context
          , l = t.contextType;
        typeof l == "object" && l !== null ? l = Ye(l) : (l = ce(t) ? sn : qA.current,
        l = ni(A, l));
        var u = t.getDerivedStateFromProps
          , c = typeof u == "function" || typeof s.getSnapshotBeforeUpdate == "function";
        c || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (o !== r || a !== l) && kg(A, s, r, l),
        Wt = !1;
        var f = A.memoizedState;
        s.state = f,
        ka(A, r, s, n),
        a = A.memoizedState,
        o !== r || f !== a || ue.current || Wt ? (typeof u == "function" && (zc(A, t, u, r),
        a = A.memoizedState),
        (o = Wt || Dg(A, t, o, r, f, a, l)) ? (c || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(),
        typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()),
        typeof s.componentDidMount == "function" && (A.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (A.flags |= 4194308),
        A.memoizedProps = r,
        A.memoizedState = a),
        s.props = r,
        s.state = a,
        s.context = l,
        r = o) : (typeof s.componentDidMount == "function" && (A.flags |= 4194308),
        r = !1)
    } else {
        s = A.stateNode,
        Rm(e, A),
        o = A.memoizedProps,
        l = A.type === A.elementType ? o : qe(A.type, o),
        s.props = l,
        c = A.pendingProps,
        f = s.context,
        a = t.contextType,
        typeof a == "object" && a !== null ? a = Ye(a) : (a = ce(t) ? sn : qA.current,
        a = ni(A, a));
        var d = t.getDerivedStateFromProps;
        (u = typeof d == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (o !== c || f !== a) && kg(A, s, r, a),
        Wt = !1,
        f = A.memoizedState,
        s.state = f,
        ka(A, r, s, n);
        var B = A.memoizedState;
        o !== c || f !== B || ue.current || Wt ? (typeof d == "function" && (zc(A, t, d, r),
        B = A.memoizedState),
        (l = Wt || Dg(A, t, l, r, f, B, a) || !1) ? (u || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, B, a),
        typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, B, a)),
        typeof s.componentDidUpdate == "function" && (A.flags |= 4),
        typeof s.getSnapshotBeforeUpdate == "function" && (A.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || o === e.memoizedProps && f === e.memoizedState || (A.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" || o === e.memoizedProps && f === e.memoizedState || (A.flags |= 1024),
        A.memoizedProps = r,
        A.memoizedState = B),
        s.props = r,
        s.state = B,
        s.context = a,
        r = l) : (typeof s.componentDidUpdate != "function" || o === e.memoizedProps && f === e.memoizedState || (A.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" || o === e.memoizedProps && f === e.memoizedState || (A.flags |= 1024),
        r = !1)
    }
    return Jc(e, A, t, r, i, n)
}
function Jc(e, A, t, r, n, i) {
    hw(e, A);
    var s = (A.flags & 128) !== 0;
    if (!r && !s)
        return n && Eg(A, t, !1),
        Mt(e, A, i);
    r = A.stateNode,
    B1.current = A;
    var o = s && typeof t.getDerivedStateFromError != "function" ? null : r.render();
    return A.flags |= 1,
    e !== null && s ? (A.child = si(A, e.child, null, i),
    A.child = si(A, null, o, i)) : te(e, A, o, i),
    A.memoizedState = r.state,
    n && Eg(A, t, !0),
    A.child
}
function gw(e) {
    var A = e.stateNode;
    A.pendingContext ? xg(e, A.pendingContext, A.pendingContext !== A.context) : A.context && xg(e, A.context, !1),
    bd(e, A.containerInfo)
}
function Vg(e, A, t, r, n) {
    return ii(),
    Id(n),
    A.flags |= 256,
    te(e, A, t, r),
    A.child
}
var $c = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};
function Zc(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}
function Bw(e, A, t) {
    var r = A.pendingProps, n = fA.current, i = !1, s = (A.flags & 128) !== 0, o;
    if ((o = s) || (o = e !== null && e.memoizedState === null ? !1 : (n & 2) !== 0),
    o ? (i = !0,
    A.flags &= -129) : (e === null || e.memoizedState !== null) && (n |= 1),
    nA(fA, n & 1),
    e === null)
        return Gc(A),
        e = A.memoizedState,
        e !== null && (e = e.dehydrated,
        e !== null) ? (A.mode & 1 ? e.data === "$!" ? A.lanes = 8 : A.lanes = 1073741824 : A.lanes = 1,
        null) : (s = r.children,
        e = r.fallback,
        i ? (r = A.mode,
        i = A.child,
        s = {
            mode: "hidden",
            children: s
        },
        !(r & 1) && i !== null ? (i.childLanes = 0,
        i.pendingProps = s) : i = Il(s, r, 0, null),
        e = $r(e, r, t, null),
        i.return = A,
        e.return = A,
        i.sibling = e,
        A.child = i,
        A.child.memoizedState = Zc(t),
        A.memoizedState = $c,
        e) : Rd(A, s));
    if (n = e.memoizedState,
    n !== null && (o = n.dehydrated,
    o !== null))
        return p1(e, A, s, r, o, n, t);
    if (i) {
        i = r.fallback,
        s = A.mode,
        n = e.child,
        o = n.sibling;
        var a = {
            mode: "hidden",
            children: r.children
        };
        return !(s & 1) && A.child !== n ? (r = A.child,
        r.childLanes = 0,
        r.pendingProps = a,
        A.deletions = null) : (r = hr(n, a),
        r.subtreeFlags = n.subtreeFlags & 14680064),
        o !== null ? i = hr(o, i) : (i = $r(i, s, t, null),
        i.flags |= 2),
        i.return = A,
        r.return = A,
        r.sibling = i,
        A.child = r,
        r = i,
        i = A.child,
        s = e.child.memoizedState,
        s = s === null ? Zc(t) : {
            baseLanes: s.baseLanes | t,
            cachePool: null,
            transitions: s.transitions
        },
        i.memoizedState = s,
        i.childLanes = e.childLanes & ~t,
        A.memoizedState = $c,
        r
    }
    return i = e.child,
    e = i.sibling,
    r = hr(i, {
        mode: "visible",
        children: r.children
    }),
    !(A.mode & 1) && (r.lanes = t),
    r.return = A,
    r.sibling = null,
    e !== null && (t = A.deletions,
    t === null ? (A.deletions = [e],
    A.flags |= 16) : t.push(e)),
    A.child = r,
    A.memoizedState = null,
    r
}
function Rd(e, A) {
    return A = Il({
        mode: "visible",
        children: A
    }, e.mode, 0, null),
    A.return = e,
    e.child = A
}
function vo(e, A, t, r) {
    return r !== null && Id(r),
    si(A, e.child, null, t),
    e = Rd(A, A.pendingProps.children),
    e.flags |= 2,
    A.memoizedState = null,
    e
}
function p1(e, A, t, r, n, i, s) {
    if (t)
        return A.flags & 256 ? (A.flags &= -257,
        r = Qu(Error(S(422))),
        vo(e, A, s, r)) : A.memoizedState !== null ? (A.child = e.child,
        A.flags |= 128,
        null) : (i = r.fallback,
        n = A.mode,
        r = Il({
            mode: "visible",
            children: r.children
        }, n, 0, null),
        i = $r(i, n, s, null),
        i.flags |= 2,
        r.return = A,
        i.return = A,
        r.sibling = i,
        A.child = r,
        A.mode & 1 && si(A, e.child, null, s),
        A.child.memoizedState = Zc(s),
        A.memoizedState = $c,
        i);
    if (!(A.mode & 1))
        return vo(e, A, s, null);
    if (n.data === "$!") {
        if (r = n.nextSibling && n.nextSibling.dataset,
        r)
            var o = r.dgst;
        return r = o,
        i = Error(S(419)),
        r = Qu(i, r, void 0),
        vo(e, A, s, r)
    }
    if (o = (s & e.childLanes) !== 0,
    le || o) {
        if (r = MA,
        r !== null) {
            switch (s & -s) {
            case 4:
                n = 2;
                break;
            case 16:
                n = 8;
                break;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                n = 32;
                break;
            case 536870912:
                n = 268435456;
                break;
            default:
                n = 0
            }
            n = n & (r.suspendedLanes | s) ? 0 : n,
            n !== 0 && n !== i.retryLane && (i.retryLane = n,
            kt(e, n),
            rt(r, e, n, -1))
        }
        return Wd(),
        r = Qu(Error(S(421))),
        vo(e, A, s, r)
    }
    return n.data === "$?" ? (A.flags |= 128,
    A.child = e.child,
    A = _1.bind(null, e),
    n._reactRetry = A,
    null) : (e = i.treeContext,
    Fe = ur(n.nextSibling),
    Ee = A,
    uA = !0,
    et = null,
    e !== null && (Pe[Oe++] = xt,
    Pe[Oe++] = Et,
    Pe[Oe++] = on,
    xt = e.id,
    Et = e.overflow,
    on = A),
    A = Rd(A, r.children),
    A.flags |= 4096,
    A)
}
function Gg(e, A, t) {
    e.lanes |= A;
    var r = e.alternate;
    r !== null && (r.lanes |= A),
    jc(e.return, A, t)
}
function Fu(e, A, t, r, n) {
    var i = e.memoizedState;
    i === null ? e.memoizedState = {
        isBackwards: A,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: t,
        tailMode: n
    } : (i.isBackwards = A,
    i.rendering = null,
    i.renderingStartTime = 0,
    i.last = r,
    i.tail = t,
    i.tailMode = n)
}
function pw(e, A, t) {
    var r = A.pendingProps
      , n = r.revealOrder
      , i = r.tail;
    if (te(e, A, r.children, t),
    r = fA.current,
    r & 2)
        r = r & 1 | 2,
        A.flags |= 128;
    else {
        if (e !== null && e.flags & 128)
            A: for (e = A.child; e !== null; ) {
                if (e.tag === 13)
                    e.memoizedState !== null && Gg(e, t, A);
                else if (e.tag === 19)
                    Gg(e, t, A);
                else if (e.child !== null) {
                    e.child.return = e,
                    e = e.child;
                    continue
                }
                if (e === A)
                    break A;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === A)
                        break A;
                    e = e.return
                }
                e.sibling.return = e.return,
                e = e.sibling
            }
        r &= 1
    }
    if (nA(fA, r),
    !(A.mode & 1))
        A.memoizedState = null;
    else
        switch (n) {
        case "forwards":
            for (t = A.child,
            n = null; t !== null; )
                e = t.alternate,
                e !== null && Ma(e) === null && (n = t),
                t = t.sibling;
            t = n,
            t === null ? (n = A.child,
            A.child = null) : (n = t.sibling,
            t.sibling = null),
            Fu(A, !1, n, t, i);
            break;
        case "backwards":
            for (t = null,
            n = A.child,
            A.child = null; n !== null; ) {
                if (e = n.alternate,
                e !== null && Ma(e) === null) {
                    A.child = n;
                    break
                }
                e = n.sibling,
                n.sibling = t,
                t = n,
                n = e
            }
            Fu(A, !0, t, null, i);
            break;
        case "together":
            Fu(A, !1, null, null, void 0);
            break;
        default:
            A.memoizedState = null
        }
    return A.child
}
function aa(e, A) {
    !(A.mode & 1) && e !== null && (e.alternate = null,
    A.alternate = null,
    A.flags |= 2)
}
function Mt(e, A, t) {
    if (e !== null && (A.dependencies = e.dependencies),
    ln |= A.lanes,
    !(t & A.childLanes))
        return null;
    if (e !== null && A.child !== e.child)
        throw Error(S(153));
    if (A.child !== null) {
        for (e = A.child,
        t = hr(e, e.pendingProps),
        A.child = t,
        t.return = A; e.sibling !== null; )
            e = e.sibling,
            t = t.sibling = hr(e, e.pendingProps),
            t.return = A;
        t.sibling = null
    }
    return A.child
}
function m1(e, A, t) {
    switch (A.tag) {
    case 3:
        gw(A),
        ii();
        break;
    case 5:
        Vm(A);
        break;
    case 1:
        ce(A.type) && Sa(A);
        break;
    case 4:
        bd(A, A.stateNode.containerInfo);
        break;
    case 10:
        var r = A.type._context
          , n = A.memoizedProps.value;
        nA(ba, r._currentValue),
        r._currentValue = n;
        break;
    case 13:
        if (r = A.memoizedState,
        r !== null)
            return r.dehydrated !== null ? (nA(fA, fA.current & 1),
            A.flags |= 128,
            null) : t & A.child.childLanes ? Bw(e, A, t) : (nA(fA, fA.current & 1),
            e = Mt(e, A, t),
            e !== null ? e.sibling : null);
        nA(fA, fA.current & 1);
        break;
    case 19:
        if (r = (t & A.childLanes) !== 0,
        e.flags & 128) {
            if (r)
                return pw(e, A, t);
            A.flags |= 128
        }
        if (n = A.memoizedState,
        n !== null && (n.rendering = null,
        n.tail = null,
        n.lastEffect = null),
        nA(fA, fA.current),
        r)
            break;
        return null;
    case 22:
    case 23:
        return A.lanes = 0,
        dw(e, A, t)
    }
    return Mt(e, A, t)
}
var mw, qc, ww, yw;
mw = function(e, A) {
    for (var t = A.child; t !== null; ) {
        if (t.tag === 5 || t.tag === 6)
            e.appendChild(t.stateNode);
        else if (t.tag !== 4 && t.child !== null) {
            t.child.return = t,
            t = t.child;
            continue
        }
        if (t === A)
            break;
        for (; t.sibling === null; ) {
            if (t.return === null || t.return === A)
                return;
            t = t.return
        }
        t.sibling.return = t.return,
        t = t.sibling
    }
}
;
qc = function() {}
;
ww = function(e, A, t, r) {
    var n = e.memoizedProps;
    if (n !== r) {
        e = A.stateNode,
        zr(gt.current);
        var i = null;
        switch (t) {
        case "input":
            n = Cc(e, n),
            r = Cc(e, r),
            i = [];
            break;
        case "select":
            n = pA({}, n, {
                value: void 0
            }),
            r = pA({}, r, {
                value: void 0
            }),
            i = [];
            break;
        case "textarea":
            n = Fc(e, n),
            r = Fc(e, r),
            i = [];
            break;
        default:
            typeof n.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Ha)
        }
        xc(t, r);
        var s;
        t = null;
        for (l in n)
            if (!r.hasOwnProperty(l) && n.hasOwnProperty(l) && n[l] != null)
                if (l === "style") {
                    var o = n[l];
                    for (s in o)
                        o.hasOwnProperty(s) && (t || (t = {}),
                        t[s] = "")
                } else
                    l !== "dangerouslySetInnerHTML" && l !== "children" && l !== "suppressContentEditableWarning" && l !== "suppressHydrationWarning" && l !== "autoFocus" && (ws.hasOwnProperty(l) ? i || (i = []) : (i = i || []).push(l, null));
        for (l in r) {
            var a = r[l];
            if (o = n != null ? n[l] : void 0,
            r.hasOwnProperty(l) && a !== o && (a != null || o != null))
                if (l === "style")
                    if (o) {
                        for (s in o)
                            !o.hasOwnProperty(s) || a && a.hasOwnProperty(s) || (t || (t = {}),
                            t[s] = "");
                        for (s in a)
                            a.hasOwnProperty(s) && o[s] !== a[s] && (t || (t = {}),
                            t[s] = a[s])
                    } else
                        t || (i || (i = []),
                        i.push(l, t)),
                        t = a;
                else
                    l === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0,
                    o = o ? o.__html : void 0,
                    a != null && o !== a && (i = i || []).push(l, a)) : l === "children" ? typeof a != "string" && typeof a != "number" || (i = i || []).push(l, "" + a) : l !== "suppressContentEditableWarning" && l !== "suppressHydrationWarning" && (ws.hasOwnProperty(l) ? (a != null && l === "onScroll" && sA("scroll", e),
                    i || o === a || (i = [])) : (i = i || []).push(l, a))
        }
        t && (i = i || []).push("style", t);
        var l = i;
        (A.updateQueue = l) && (A.flags |= 4)
    }
}
;
yw = function(e, A, t, r) {
    t !== r && (A.flags |= 4)
}
;
function Hi(e, A) {
    if (!uA)
        switch (e.tailMode) {
        case "hidden":
            A = e.tail;
            for (var t = null; A !== null; )
                A.alternate !== null && (t = A),
                A = A.sibling;
            t === null ? e.tail = null : t.sibling = null;
            break;
        case "collapsed":
            t = e.tail;
            for (var r = null; t !== null; )
                t.alternate !== null && (r = t),
                t = t.sibling;
            r === null ? A || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
        }
}
function zA(e) {
    var A = e.alternate !== null && e.alternate.child === e.child
      , t = 0
      , r = 0;
    if (A)
        for (var n = e.child; n !== null; )
            t |= n.lanes | n.childLanes,
            r |= n.subtreeFlags & 14680064,
            r |= n.flags & 14680064,
            n.return = e,
            n = n.sibling;
    else
        for (n = e.child; n !== null; )
            t |= n.lanes | n.childLanes,
            r |= n.subtreeFlags,
            r |= n.flags,
            n.return = e,
            n = n.sibling;
    return e.subtreeFlags |= r,
    e.childLanes = t,
    A
}
function w1(e, A, t) {
    var r = A.pendingProps;
    switch (Ed(A),
    A.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
        return zA(A),
        null;
    case 1:
        return ce(A.type) && _a(),
        zA(A),
        null;
    case 3:
        return r = A.stateNode,
        oi(),
        oA(ue),
        oA(qA),
        kd(),
        r.pendingContext && (r.context = r.pendingContext,
        r.pendingContext = null),
        (e === null || e.child === null) && (yo(A) ? A.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(A.flags & 256) || (A.flags |= 1024,
        et !== null && (af(et),
        et = null))),
        qc(e, A),
        zA(A),
        null;
    case 5:
        Dd(A);
        var n = zr(Ss.current);
        if (t = A.type,
        e !== null && A.stateNode != null)
            ww(e, A, t, r, n),
            e.ref !== A.ref && (A.flags |= 512,
            A.flags |= 2097152);
        else {
            if (!r) {
                if (A.stateNode === null)
                    throw Error(S(166));
                return zA(A),
                null
            }
            if (e = zr(gt.current),
            yo(A)) {
                r = A.stateNode,
                t = A.type;
                var i = A.memoizedProps;
                switch (r[ct] = A,
                r[Hs] = i,
                e = (A.mode & 1) !== 0,
                t) {
                case "dialog":
                    sA("cancel", r),
                    sA("close", r);
                    break;
                case "iframe":
                case "object":
                case "embed":
                    sA("load", r);
                    break;
                case "video":
                case "audio":
                    for (n = 0; n < Ni.length; n++)
                        sA(Ni[n], r);
                    break;
                case "source":
                    sA("error", r);
                    break;
                case "img":
                case "image":
                case "link":
                    sA("error", r),
                    sA("load", r);
                    break;
                case "details":
                    sA("toggle", r);
                    break;
                case "input":
                    qh(r, i),
                    sA("invalid", r);
                    break;
                case "select":
                    r._wrapperState = {
                        wasMultiple: !!i.multiple
                    },
                    sA("invalid", r);
                    break;
                case "textarea":
                    eg(r, i),
                    sA("invalid", r)
                }
                xc(t, i),
                n = null;
                for (var s in i)
                    if (i.hasOwnProperty(s)) {
                        var o = i[s];
                        s === "children" ? typeof o == "string" ? r.textContent !== o && (i.suppressHydrationWarning !== !0 && wo(r.textContent, o, e),
                        n = ["children", o]) : typeof o == "number" && r.textContent !== "" + o && (i.suppressHydrationWarning !== !0 && wo(r.textContent, o, e),
                        n = ["children", "" + o]) : ws.hasOwnProperty(s) && o != null && s === "onScroll" && sA("scroll", r)
                    }
                switch (t) {
                case "input":
                    uo(r),
                    Ag(r, i, !0);
                    break;
                case "textarea":
                    uo(r),
                    tg(r);
                    break;
                case "select":
                case "option":
                    break;
                default:
                    typeof i.onClick == "function" && (r.onclick = Ha)
                }
                r = n,
                A.updateQueue = r,
                r !== null && (A.flags |= 4)
            } else {
                s = n.nodeType === 9 ? n : n.ownerDocument,
                e === "http://www.w3.org/1999/xhtml" && (e = W0(t)),
                e === "http://www.w3.org/1999/xhtml" ? t === "script" ? (e = s.createElement("div"),
                e.innerHTML = "<script><\/script>",
                e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(t, {
                    is: r.is
                }) : (e = s.createElement(t),
                t === "select" && (s = e,
                r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, t),
                e[ct] = A,
                e[Hs] = r,
                mw(e, A, !1, !1),
                A.stateNode = e;
                A: {
                    switch (s = Ec(t, r),
                    t) {
                    case "dialog":
                        sA("cancel", e),
                        sA("close", e),
                        n = r;
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        sA("load", e),
                        n = r;
                        break;
                    case "video":
                    case "audio":
                        for (n = 0; n < Ni.length; n++)
                            sA(Ni[n], e);
                        n = r;
                        break;
                    case "source":
                        sA("error", e),
                        n = r;
                        break;
                    case "img":
                    case "image":
                    case "link":
                        sA("error", e),
                        sA("load", e),
                        n = r;
                        break;
                    case "details":
                        sA("toggle", e),
                        n = r;
                        break;
                    case "input":
                        qh(e, r),
                        n = Cc(e, r),
                        sA("invalid", e);
                        break;
                    case "option":
                        n = r;
                        break;
                    case "select":
                        e._wrapperState = {
                            wasMultiple: !!r.multiple
                        },
                        n = pA({}, r, {
                            value: void 0
                        }),
                        sA("invalid", e);
                        break;
                    case "textarea":
                        eg(e, r),
                        n = Fc(e, r),
                        sA("invalid", e);
                        break;
                    default:
                        n = r
                    }
                    xc(t, n),
                    o = n;
                    for (i in o)
                        if (o.hasOwnProperty(i)) {
                            var a = o[i];
                            i === "style" ? $0(e, a) : i === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0,
                            a != null && Y0(e, a)) : i === "children" ? typeof a == "string" ? (t !== "textarea" || a !== "") && ys(e, a) : typeof a == "number" && ys(e, "" + a) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (ws.hasOwnProperty(i) ? a != null && i === "onScroll" && sA("scroll", e) : a != null && fd(e, i, a, s))
                        }
                    switch (t) {
                    case "input":
                        uo(e),
                        Ag(e, r, !1);
                        break;
                    case "textarea":
                        uo(e),
                        tg(e);
                        break;
                    case "option":
                        r.value != null && e.setAttribute("value", "" + yr(r.value));
                        break;
                    case "select":
                        e.multiple = !!r.multiple,
                        i = r.value,
                        i != null ? zn(e, !!r.multiple, i, !1) : r.defaultValue != null && zn(e, !!r.multiple, r.defaultValue, !0);
                        break;
                    default:
                        typeof n.onClick == "function" && (e.onclick = Ha)
                    }
                    switch (t) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        r = !!r.autoFocus;
                        break A;
                    case "img":
                        r = !0;
                        break A;
                    default:
                        r = !1
                    }
                }
                r && (A.flags |= 4)
            }
            A.ref !== null && (A.flags |= 512,
            A.flags |= 2097152)
        }
        return zA(A),
        null;
    case 6:
        if (e && A.stateNode != null)
            yw(e, A, e.memoizedProps, r);
        else {
            if (typeof r != "string" && A.stateNode === null)
                throw Error(S(166));
            if (t = zr(Ss.current),
            zr(gt.current),
            yo(A)) {
                if (r = A.stateNode,
                t = A.memoizedProps,
                r[ct] = A,
                (i = r.nodeValue !== t) && (e = Ee,
                e !== null))
                    switch (e.tag) {
                    case 3:
                        wo(r.nodeValue, t, (e.mode & 1) !== 0);
                        break;
                    case 5:
                        e.memoizedProps.suppressHydrationWarning !== !0 && wo(r.nodeValue, t, (e.mode & 1) !== 0)
                    }
                i && (A.flags |= 4)
            } else
                r = (t.nodeType === 9 ? t : t.ownerDocument).createTextNode(r),
                r[ct] = A,
                A.stateNode = r
        }
        return zA(A),
        null;
    case 13:
        if (oA(fA),
        r = A.memoizedState,
        e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (uA && Fe !== null && A.mode & 1 && !(A.flags & 128))
                Km(),
                ii(),
                A.flags |= 98560,
                i = !1;
            else if (i = yo(A),
            r !== null && r.dehydrated !== null) {
                if (e === null) {
                    if (!i)
                        throw Error(S(318));
                    if (i = A.memoizedState,
                    i = i !== null ? i.dehydrated : null,
                    !i)
                        throw Error(S(317));
                    i[ct] = A
                } else
                    ii(),
                    !(A.flags & 128) && (A.memoizedState = null),
                    A.flags |= 4;
                zA(A),
                i = !1
            } else
                et !== null && (af(et),
                et = null),
                i = !0;
            if (!i)
                return A.flags & 65536 ? A : null
        }
        return A.flags & 128 ? (A.lanes = t,
        A) : (r = r !== null,
        r !== (e !== null && e.memoizedState !== null) && r && (A.child.flags |= 8192,
        A.mode & 1 && (e === null || fA.current & 1 ? bA === 0 && (bA = 3) : Wd())),
        A.updateQueue !== null && (A.flags |= 4),
        zA(A),
        null);
    case 4:
        return oi(),
        qc(e, A),
        e === null && Es(A.stateNode.containerInfo),
        zA(A),
        null;
    case 10:
        return Sd(A.type._context),
        zA(A),
        null;
    case 17:
        return ce(A.type) && _a(),
        zA(A),
        null;
    case 19:
        if (oA(fA),
        i = A.memoizedState,
        i === null)
            return zA(A),
            null;
        if (r = (A.flags & 128) !== 0,
        s = i.rendering,
        s === null)
            if (r)
                Hi(i, !1);
            else {
                if (bA !== 0 || e !== null && e.flags & 128)
                    for (e = A.child; e !== null; ) {
                        if (s = Ma(e),
                        s !== null) {
                            for (A.flags |= 128,
                            Hi(i, !1),
                            r = s.updateQueue,
                            r !== null && (A.updateQueue = r,
                            A.flags |= 4),
                            A.subtreeFlags = 0,
                            r = t,
                            t = A.child; t !== null; )
                                i = t,
                                e = r,
                                i.flags &= 14680066,
                                s = i.alternate,
                                s === null ? (i.childLanes = 0,
                                i.lanes = e,
                                i.child = null,
                                i.subtreeFlags = 0,
                                i.memoizedProps = null,
                                i.memoizedState = null,
                                i.updateQueue = null,
                                i.dependencies = null,
                                i.stateNode = null) : (i.childLanes = s.childLanes,
                                i.lanes = s.lanes,
                                i.child = s.child,
                                i.subtreeFlags = 0,
                                i.deletions = null,
                                i.memoizedProps = s.memoizedProps,
                                i.memoizedState = s.memoizedState,
                                i.updateQueue = s.updateQueue,
                                i.type = s.type,
                                e = s.dependencies,
                                i.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }),
                                t = t.sibling;
                            return nA(fA, fA.current & 1 | 2),
                            A.child
                        }
                        e = e.sibling
                    }
                i.tail !== null && QA() > li && (A.flags |= 128,
                r = !0,
                Hi(i, !1),
                A.lanes = 4194304)
            }
        else {
            if (!r)
                if (e = Ma(s),
                e !== null) {
                    if (A.flags |= 128,
                    r = !0,
                    t = e.updateQueue,
                    t !== null && (A.updateQueue = t,
                    A.flags |= 4),
                    Hi(i, !0),
                    i.tail === null && i.tailMode === "hidden" && !s.alternate && !uA)
                        return zA(A),
                        null
                } else
                    2 * QA() - i.renderingStartTime > li && t !== 1073741824 && (A.flags |= 128,
                    r = !0,
                    Hi(i, !1),
                    A.lanes = 4194304);
            i.isBackwards ? (s.sibling = A.child,
            A.child = s) : (t = i.last,
            t !== null ? t.sibling = s : A.child = s,
            i.last = s)
        }
        return i.tail !== null ? (A = i.tail,
        i.rendering = A,
        i.tail = A.sibling,
        i.renderingStartTime = QA(),
        A.sibling = null,
        t = fA.current,
        nA(fA, r ? t & 1 | 2 : t & 1),
        A) : (zA(A),
        null);
    case 22:
    case 23:
        return Xd(),
        r = A.memoizedState !== null,
        e !== null && e.memoizedState !== null !== r && (A.flags |= 8192),
        r && A.mode & 1 ? Ce & 1073741824 && (zA(A),
        A.subtreeFlags & 6 && (A.flags |= 8192)) : zA(A),
        null;
    case 24:
        return null;
    case 25:
        return null
    }
    throw Error(S(156, A.tag))
}
function y1(e, A) {
    switch (Ed(A),
    A.tag) {
    case 1:
        return ce(A.type) && _a(),
        e = A.flags,
        e & 65536 ? (A.flags = e & -65537 | 128,
        A) : null;
    case 3:
        return oi(),
        oA(ue),
        oA(qA),
        kd(),
        e = A.flags,
        e & 65536 && !(e & 128) ? (A.flags = e & -65537 | 128,
        A) : null;
    case 5:
        return Dd(A),
        null;
    case 13:
        if (oA(fA),
        e = A.memoizedState,
        e !== null && e.dehydrated !== null) {
            if (A.alternate === null)
                throw Error(S(340));
            ii()
        }
        return e = A.flags,
        e & 65536 ? (A.flags = e & -65537 | 128,
        A) : null;
    case 19:
        return oA(fA),
        null;
    case 4:
        return oi(),
        null;
    case 10:
        return Sd(A.type._context),
        null;
    case 22:
    case 23:
        return Xd(),
        null;
    case 24:
        return null;
    default:
        return null
    }
}
var Qo = !1
  , JA = !1
  , C1 = typeof WeakSet == "function" ? WeakSet : Set
  , O = null;
function Mn(e, A) {
    var t = e.ref;
    if (t !== null)
        if (typeof t == "function")
            try {
                t(null)
            } catch (r) {
                mA(e, A, r)
            }
        else
            t.current = null
}
function Af(e, A, t) {
    try {
        t()
    } catch (r) {
        mA(e, A, r)
    }
}
var jg = !1;
function v1(e, A) {
    if (Mc = xa,
    e = Um(),
    Ud(e)) {
        if ("selectionStart"in e)
            var t = {
                start: e.selectionStart,
                end: e.selectionEnd
            };
        else
            A: {
                t = (t = e.ownerDocument) && t.defaultView || window;
                var r = t.getSelection && t.getSelection();
                if (r && r.rangeCount !== 0) {
                    t = r.anchorNode;
                    var n = r.anchorOffset
                      , i = r.focusNode;
                    r = r.focusOffset;
                    try {
                        t.nodeType,
                        i.nodeType
                    } catch {
                        t = null;
                        break A
                    }
                    var s = 0
                      , o = -1
                      , a = -1
                      , l = 0
                      , u = 0
                      , c = e
                      , f = null;
                    e: for (; ; ) {
                        for (var d; c !== t || n !== 0 && c.nodeType !== 3 || (o = s + n),
                        c !== i || r !== 0 && c.nodeType !== 3 || (a = s + r),
                        c.nodeType === 3 && (s += c.nodeValue.length),
                        (d = c.firstChild) !== null; )
                            f = c,
                            c = d;
                        for (; ; ) {
                            if (c === e)
                                break e;
                            if (f === t && ++l === n && (o = s),
                            f === i && ++u === r && (a = s),
                            (d = c.nextSibling) !== null)
                                break;
                            c = f,
                            f = c.parentNode
                        }
                        c = d
                    }
                    t = o === -1 || a === -1 ? null : {
                        start: o,
                        end: a
                    }
                } else
                    t = null
            }
        t = t || {
            start: 0,
            end: 0
        }
    } else
        t = null;
    for (Kc = {
        focusedElem: e,
        selectionRange: t
    },
    xa = !1,
    O = A; O !== null; )
        if (A = O,
        e = A.child,
        (A.subtreeFlags & 1028) !== 0 && e !== null)
            e.return = A,
            O = e;
        else
            for (; O !== null; ) {
                A = O;
                try {
                    var B = A.alternate;
                    if (A.flags & 1024)
                        switch (A.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (B !== null) {
                                var h = B.memoizedProps
                                  , y = B.memoizedState
                                  , p = A.stateNode
                                  , g = p.getSnapshotBeforeUpdate(A.elementType === A.type ? h : qe(A.type, h), y);
                                p.__reactInternalSnapshotBeforeUpdate = g
                            }
                            break;
                        case 3:
                            var m = A.stateNode.containerInfo;
                            m.nodeType === 1 ? m.textContent = "" : m.nodeType === 9 && m.documentElement && m.removeChild(m.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(S(163))
                        }
                } catch (C) {
                    mA(A, A.return, C)
                }
                if (e = A.sibling,
                e !== null) {
                    e.return = A.return,
                    O = e;
                    break
                }
                O = A.return
            }
    return B = jg,
    jg = !1,
    B
}
function ns(e, A, t) {
    var r = A.updateQueue;
    if (r = r !== null ? r.lastEffect : null,
    r !== null) {
        var n = r = r.next;
        do {
            if ((n.tag & e) === e) {
                var i = n.destroy;
                n.destroy = void 0,
                i !== void 0 && Af(A, t, i)
            }
            n = n.next
        } while (n !== r)
    }
}
function xl(e, A) {
    if (A = A.updateQueue,
    A = A !== null ? A.lastEffect : null,
    A !== null) {
        var t = A = A.next;
        do {
            if ((t.tag & e) === e) {
                var r = t.create;
                t.destroy = r()
            }
            t = t.next
        } while (t !== A)
    }
}
function ef(e) {
    var A = e.ref;
    if (A !== null) {
        var t = e.stateNode;
        switch (e.tag) {
        case 5:
            e = t;
            break;
        default:
            e = t
        }
        typeof A == "function" ? A(e) : A.current = e
    }
}
function Cw(e) {
    var A = e.alternate;
    A !== null && (e.alternate = null,
    Cw(A)),
    e.child = null,
    e.deletions = null,
    e.sibling = null,
    e.tag === 5 && (A = e.stateNode,
    A !== null && (delete A[ct],
    delete A[Hs],
    delete A[Nc],
    delete A[n1],
    delete A[i1])),
    e.stateNode = null,
    e.return = null,
    e.dependencies = null,
    e.memoizedProps = null,
    e.memoizedState = null,
    e.pendingProps = null,
    e.stateNode = null,
    e.updateQueue = null
}
function vw(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function zg(e) {
    A: for (; ; ) {
        for (; e.sibling === null; ) {
            if (e.return === null || vw(e.return))
                return null;
            e = e.return
        }
        for (e.sibling.return = e.return,
        e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
            if (e.flags & 2 || e.child === null || e.tag === 4)
                continue A;
            e.child.return = e,
            e = e.child
        }
        if (!(e.flags & 2))
            return e.stateNode
    }
}
function tf(e, A, t) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        A ? t.nodeType === 8 ? t.parentNode.insertBefore(e, A) : t.insertBefore(e, A) : (t.nodeType === 8 ? (A = t.parentNode,
        A.insertBefore(e, t)) : (A = t,
        A.appendChild(e)),
        t = t._reactRootContainer,
        t != null || A.onclick !== null || (A.onclick = Ha));
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (tf(e, A, t),
        e = e.sibling; e !== null; )
            tf(e, A, t),
            e = e.sibling
}
function rf(e, A, t) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        A ? t.insertBefore(e, A) : t.appendChild(e);
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (rf(e, A, t),
        e = e.sibling; e !== null; )
            rf(e, A, t),
            e = e.sibling
}
var PA = null
  , At = !1;
function Vt(e, A, t) {
    for (t = t.child; t !== null; )
        Qw(e, A, t),
        t = t.sibling
}
function Qw(e, A, t) {
    if (ht && typeof ht.onCommitFiberUnmount == "function")
        try {
            ht.onCommitFiberUnmount(ml, t)
        } catch {}
    switch (t.tag) {
    case 5:
        JA || Mn(t, A);
    case 6:
        var r = PA
          , n = At;
        PA = null,
        Vt(e, A, t),
        PA = r,
        At = n,
        PA !== null && (At ? (e = PA,
        t = t.stateNode,
        e.nodeType === 8 ? e.parentNode.removeChild(t) : e.removeChild(t)) : PA.removeChild(t.stateNode));
        break;
    case 18:
        PA !== null && (At ? (e = PA,
        t = t.stateNode,
        e.nodeType === 8 ? pu(e.parentNode, t) : e.nodeType === 1 && pu(e, t),
        Fs(e)) : pu(PA, t.stateNode));
        break;
    case 4:
        r = PA,
        n = At,
        PA = t.stateNode.containerInfo,
        At = !0,
        Vt(e, A, t),
        PA = r,
        At = n;
        break;
    case 0:
    case 11:
    case 14:
    case 15:
        if (!JA && (r = t.updateQueue,
        r !== null && (r = r.lastEffect,
        r !== null))) {
            n = r = r.next;
            do {
                var i = n
                  , s = i.destroy;
                i = i.tag,
                s !== void 0 && (i & 2 || i & 4) && Af(t, A, s),
                n = n.next
            } while (n !== r)
        }
        Vt(e, A, t);
        break;
    case 1:
        if (!JA && (Mn(t, A),
        r = t.stateNode,
        typeof r.componentWillUnmount == "function"))
            try {
                r.props = t.memoizedProps,
                r.state = t.memoizedState,
                r.componentWillUnmount()
            } catch (o) {
                mA(t, A, o)
            }
        Vt(e, A, t);
        break;
    case 21:
        Vt(e, A, t);
        break;
    case 22:
        t.mode & 1 ? (JA = (r = JA) || t.memoizedState !== null,
        Vt(e, A, t),
        JA = r) : Vt(e, A, t);
        break;
    default:
        Vt(e, A, t)
    }
}
function Xg(e) {
    var A = e.updateQueue;
    if (A !== null) {
        e.updateQueue = null;
        var t = e.stateNode;
        t === null && (t = e.stateNode = new C1),
        A.forEach(function(r) {
            var n = S1.bind(null, e, r);
            t.has(r) || (t.add(r),
            r.then(n, n))
        })
    }
}
function $e(e, A) {
    var t = A.deletions;
    if (t !== null)
        for (var r = 0; r < t.length; r++) {
            var n = t[r];
            try {
                var i = e
                  , s = A
                  , o = s;
                A: for (; o !== null; ) {
                    switch (o.tag) {
                    case 5:
                        PA = o.stateNode,
                        At = !1;
                        break A;
                    case 3:
                        PA = o.stateNode.containerInfo,
                        At = !0;
                        break A;
                    case 4:
                        PA = o.stateNode.containerInfo,
                        At = !0;
                        break A
                    }
                    o = o.return
                }
                if (PA === null)
                    throw Error(S(160));
                Qw(i, s, n),
                PA = null,
                At = !1;
                var a = n.alternate;
                a !== null && (a.return = null),
                n.return = null
            } catch (l) {
                mA(n, A, l)
            }
        }
    if (A.subtreeFlags & 12854)
        for (A = A.child; A !== null; )
            Fw(A, e),
            A = A.sibling
}
function Fw(e, A) {
    var t = e.alternate
      , r = e.flags;
    switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
        if ($e(A, e),
        ot(e),
        r & 4) {
            try {
                ns(3, e, e.return),
                xl(3, e)
            } catch (h) {
                mA(e, e.return, h)
            }
            try {
                ns(5, e, e.return)
            } catch (h) {
                mA(e, e.return, h)
            }
        }
        break;
    case 1:
        $e(A, e),
        ot(e),
        r & 512 && t !== null && Mn(t, t.return);
        break;
    case 5:
        if ($e(A, e),
        ot(e),
        r & 512 && t !== null && Mn(t, t.return),
        e.flags & 32) {
            var n = e.stateNode;
            try {
                ys(n, "")
            } catch (h) {
                mA(e, e.return, h)
            }
        }
        if (r & 4 && (n = e.stateNode,
        n != null)) {
            var i = e.memoizedProps
              , s = t !== null ? t.memoizedProps : i
              , o = e.type
              , a = e.updateQueue;
            if (e.updateQueue = null,
            a !== null)
                try {
                    o === "input" && i.type === "radio" && i.name != null && z0(n, i),
                    Ec(o, s);
                    var l = Ec(o, i);
                    for (s = 0; s < a.length; s += 2) {
                        var u = a[s]
                          , c = a[s + 1];
                        u === "style" ? $0(n, c) : u === "dangerouslySetInnerHTML" ? Y0(n, c) : u === "children" ? ys(n, c) : fd(n, u, c, l)
                    }
                    switch (o) {
                    case "input":
                        vc(n, i);
                        break;
                    case "textarea":
                        X0(n, i);
                        break;
                    case "select":
                        var f = n._wrapperState.wasMultiple;
                        n._wrapperState.wasMultiple = !!i.multiple;
                        var d = i.value;
                        d != null ? zn(n, !!i.multiple, d, !1) : f !== !!i.multiple && (i.defaultValue != null ? zn(n, !!i.multiple, i.defaultValue, !0) : zn(n, !!i.multiple, i.multiple ? [] : "", !1))
                    }
                    n[Hs] = i
                } catch (h) {
                    mA(e, e.return, h)
                }
        }
        break;
    case 6:
        if ($e(A, e),
        ot(e),
        r & 4) {
            if (e.stateNode === null)
                throw Error(S(162));
            n = e.stateNode,
            i = e.memoizedProps;
            try {
                n.nodeValue = i
            } catch (h) {
                mA(e, e.return, h)
            }
        }
        break;
    case 3:
        if ($e(A, e),
        ot(e),
        r & 4 && t !== null && t.memoizedState.isDehydrated)
            try {
                Fs(A.containerInfo)
            } catch (h) {
                mA(e, e.return, h)
            }
        break;
    case 4:
        $e(A, e),
        ot(e);
        break;
    case 13:
        $e(A, e),
        ot(e),
        n = e.child,
        n.flags & 8192 && (i = n.memoizedState !== null,
        n.stateNode.isHidden = i,
        !i || n.alternate !== null && n.alternate.memoizedState !== null || (jd = QA())),
        r & 4 && Xg(e);
        break;
    case 22:
        if (u = t !== null && t.memoizedState !== null,
        e.mode & 1 ? (JA = (l = JA) || u,
        $e(A, e),
        JA = l) : $e(A, e),
        ot(e),
        r & 8192) {
            if (l = e.memoizedState !== null,
            (e.stateNode.isHidden = l) && !u && e.mode & 1)
                for (O = e,
                u = e.child; u !== null; ) {
                    for (c = O = u; O !== null; ) {
                        switch (f = O,
                        d = f.child,
                        f.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            ns(4, f, f.return);
                            break;
                        case 1:
                            Mn(f, f.return);
                            var B = f.stateNode;
                            if (typeof B.componentWillUnmount == "function") {
                                r = f,
                                t = f.return;
                                try {
                                    A = r,
                                    B.props = A.memoizedProps,
                                    B.state = A.memoizedState,
                                    B.componentWillUnmount()
                                } catch (h) {
                                    mA(r, t, h)
                                }
                            }
                            break;
                        case 5:
                            Mn(f, f.return);
                            break;
                        case 22:
                            if (f.memoizedState !== null) {
                                Yg(c);
                                continue
                            }
                        }
                        d !== null ? (d.return = f,
                        O = d) : Yg(c)
                    }
                    u = u.sibling
                }
            A: for (u = null,
            c = e; ; ) {
                if (c.tag === 5) {
                    if (u === null) {
                        u = c;
                        try {
                            n = c.stateNode,
                            l ? (i = n.style,
                            typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (o = c.stateNode,
                            a = c.memoizedProps.style,
                            s = a != null && a.hasOwnProperty("display") ? a.display : null,
                            o.style.display = J0("display", s))
                        } catch (h) {
                            mA(e, e.return, h)
                        }
                    }
                } else if (c.tag === 6) {
                    if (u === null)
                        try {
                            c.stateNode.nodeValue = l ? "" : c.memoizedProps
                        } catch (h) {
                            mA(e, e.return, h)
                        }
                } else if ((c.tag !== 22 && c.tag !== 23 || c.memoizedState === null || c === e) && c.child !== null) {
                    c.child.return = c,
                    c = c.child;
                    continue
                }
                if (c === e)
                    break A;
                for (; c.sibling === null; ) {
                    if (c.return === null || c.return === e)
                        break A;
                    u === c && (u = null),
                    c = c.return
                }
                u === c && (u = null),
                c.sibling.return = c.return,
                c = c.sibling
            }
        }
        break;
    case 19:
        $e(A, e),
        ot(e),
        r & 4 && Xg(e);
        break;
    case 21:
        break;
    default:
        $e(A, e),
        ot(e)
    }
}
function ot(e) {
    var A = e.flags;
    if (A & 2) {
        try {
            A: {
                for (var t = e.return; t !== null; ) {
                    if (vw(t)) {
                        var r = t;
                        break A
                    }
                    t = t.return
                }
                throw Error(S(160))
            }
            switch (r.tag) {
            case 5:
                var n = r.stateNode;
                r.flags & 32 && (ys(n, ""),
                r.flags &= -33);
                var i = zg(e);
                rf(e, i, n);
                break;
            case 3:
            case 4:
                var s = r.stateNode.containerInfo
                  , o = zg(e);
                tf(e, o, s);
                break;
            default:
                throw Error(S(161))
            }
        } catch (a) {
            mA(e, e.return, a)
        }
        e.flags &= -3
    }
    A & 4096 && (e.flags &= -4097)
}
function Q1(e, A, t) {
    O = e,
    Uw(e)
}
function Uw(e, A, t) {
    for (var r = (e.mode & 1) !== 0; O !== null; ) {
        var n = O
          , i = n.child;
        if (n.tag === 22 && r) {
            var s = n.memoizedState !== null || Qo;
            if (!s) {
                var o = n.alternate
                  , a = o !== null && o.memoizedState !== null || JA;
                o = Qo;
                var l = JA;
                if (Qo = s,
                (JA = a) && !l)
                    for (O = n; O !== null; )
                        s = O,
                        a = s.child,
                        s.tag === 22 && s.memoizedState !== null ? Jg(n) : a !== null ? (a.return = s,
                        O = a) : Jg(n);
                for (; i !== null; )
                    O = i,
                    Uw(i),
                    i = i.sibling;
                O = n,
                Qo = o,
                JA = l
            }
            Wg(e)
        } else
            n.subtreeFlags & 8772 && i !== null ? (i.return = n,
            O = i) : Wg(e)
    }
}
function Wg(e) {
    for (; O !== null; ) {
        var A = O;
        if (A.flags & 8772) {
            var t = A.alternate;
            try {
                if (A.flags & 8772)
                    switch (A.tag) {
                    case 0:
                    case 11:
                    case 15:
                        JA || xl(5, A);
                        break;
                    case 1:
                        var r = A.stateNode;
                        if (A.flags & 4 && !JA)
                            if (t === null)
                                r.componentDidMount();
                            else {
                                var n = A.elementType === A.type ? t.memoizedProps : qe(A.type, t.memoizedProps);
                                r.componentDidUpdate(n, t.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            }
                        var i = A.updateQueue;
                        i !== null && Tg(A, i, r);
                        break;
                    case 3:
                        var s = A.updateQueue;
                        if (s !== null) {
                            if (t = null,
                            A.child !== null)
                                switch (A.child.tag) {
                                case 5:
                                    t = A.child.stateNode;
                                    break;
                                case 1:
                                    t = A.child.stateNode
                                }
                            Tg(A, s, t)
                        }
                        break;
                    case 5:
                        var o = A.stateNode;
                        if (t === null && A.flags & 4) {
                            t = o;
                            var a = A.memoizedProps;
                            switch (A.type) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                a.autoFocus && t.focus();
                                break;
                            case "img":
                                a.src && (t.src = a.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (A.memoizedState === null) {
                            var l = A.alternate;
                            if (l !== null) {
                                var u = l.memoizedState;
                                if (u !== null) {
                                    var c = u.dehydrated;
                                    c !== null && Fs(c)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(S(163))
                    }
                JA || A.flags & 512 && ef(A)
            } catch (f) {
                mA(A, A.return, f)
            }
        }
        if (A === e) {
            O = null;
            break
        }
        if (t = A.sibling,
        t !== null) {
            t.return = A.return,
            O = t;
            break
        }
        O = A.return
    }
}
function Yg(e) {
    for (; O !== null; ) {
        var A = O;
        if (A === e) {
            O = null;
            break
        }
        var t = A.sibling;
        if (t !== null) {
            t.return = A.return,
            O = t;
            break
        }
        O = A.return
    }
}
function Jg(e) {
    for (; O !== null; ) {
        var A = O;
        try {
            switch (A.tag) {
            case 0:
            case 11:
            case 15:
                var t = A.return;
                try {
                    xl(4, A)
                } catch (a) {
                    mA(A, t, a)
                }
                break;
            case 1:
                var r = A.stateNode;
                if (typeof r.componentDidMount == "function") {
                    var n = A.return;
                    try {
                        r.componentDidMount()
                    } catch (a) {
                        mA(A, n, a)
                    }
                }
                var i = A.return;
                try {
                    ef(A)
                } catch (a) {
                    mA(A, i, a)
                }
                break;
            case 5:
                var s = A.return;
                try {
                    ef(A)
                } catch (a) {
                    mA(A, s, a)
                }
            }
        } catch (a) {
            mA(A, A.return, a)
        }
        if (A === e) {
            O = null;
            break
        }
        var o = A.sibling;
        if (o !== null) {
            o.return = A.return,
            O = o;
            break
        }
        O = A.return
    }
}
var F1 = Math.ceil
  , Oa = Rt.ReactCurrentDispatcher
  , Vd = Rt.ReactCurrentOwner
  , We = Rt.ReactCurrentBatchConfig
  , J = 0
  , MA = null
  , SA = null
  , RA = 0
  , Ce = 0
  , Kn = Ir(0)
  , bA = 0
  , Ds = null
  , ln = 0
  , El = 0
  , Gd = 0
  , is = null
  , ae = null
  , jd = 0
  , li = 1 / 0
  , vt = null
  , Na = !1
  , nf = null
  , fr = null
  , Fo = !1
  , Ar = null
  , Ra = 0
  , ss = 0
  , sf = null
  , la = -1
  , ua = 0;
function ne() {
    return J & 6 ? QA() : la !== -1 ? la : la = QA()
}
function dr(e) {
    return e.mode & 1 ? J & 2 && RA !== 0 ? RA & -RA : o1.transition !== null ? (ua === 0 && (ua = lm()),
    ua) : (e = Z,
    e !== 0 || (e = window.event,
    e = e === void 0 ? 16 : Bm(e.type)),
    e) : 1
}
function rt(e, A, t, r) {
    if (50 < ss)
        throw ss = 0,
        sf = null,
        Error(S(185));
    Js(e, t, r),
    (!(J & 2) || e !== MA) && (e === MA && (!(J & 2) && (El |= t),
    bA === 4 && Zt(e, RA)),
    fe(e, r),
    t === 1 && J === 0 && !(A.mode & 1) && (li = QA() + 500,
    Ql && Hr()))
}
function fe(e, A) {
    var t = e.callbackNode;
    oF(e, A);
    var r = Ua(e, e === MA ? RA : 0);
    if (r === 0)
        t !== null && ig(t),
        e.callbackNode = null,
        e.callbackPriority = 0;
    else if (A = r & -r,
    e.callbackPriority !== A) {
        if (t != null && ig(t),
        A === 1)
            e.tag === 0 ? s1($g.bind(null, e)) : Dm($g.bind(null, e)),
            t1(function() {
                !(J & 6) && Hr()
            }),
            t = null;
        else {
            switch (um(r)) {
            case 1:
                t = pd;
                break;
            case 4:
                t = om;
                break;
            case 16:
                t = Fa;
                break;
            case 536870912:
                t = am;
                break;
            default:
                t = Fa
            }
            t = Lw(t, xw.bind(null, e))
        }
        e.callbackPriority = A,
        e.callbackNode = t
    }
}
function xw(e, A) {
    if (la = -1,
    ua = 0,
    J & 6)
        throw Error(S(327));
    var t = e.callbackNode;
    if ($n() && e.callbackNode !== t)
        return null;
    var r = Ua(e, e === MA ? RA : 0);
    if (r === 0)
        return null;
    if (r & 30 || r & e.expiredLanes || A)
        A = Va(e, r);
    else {
        A = r;
        var n = J;
        J |= 2;
        var i = Iw();
        (MA !== e || RA !== A) && (vt = null,
        li = QA() + 500,
        Jr(e, A));
        do
            try {
                E1();
                break
            } catch (o) {
                Ew(e, o)
            }
        while (!0);
        _d(),
        Oa.current = i,
        J = n,
        SA !== null ? A = 0 : (MA = null,
        RA = 0,
        A = bA)
    }
    if (A !== 0) {
        if (A === 2 && (n = Tc(e),
        n !== 0 && (r = n,
        A = of(e, n))),
        A === 1)
            throw t = Ds,
            Jr(e, 0),
            Zt(e, r),
            fe(e, QA()),
            t;
        if (A === 6)
            Zt(e, r);
        else {
            if (n = e.current.alternate,
            !(r & 30) && !U1(n) && (A = Va(e, r),
            A === 2 && (i = Tc(e),
            i !== 0 && (r = i,
            A = of(e, i))),
            A === 1))
                throw t = Ds,
                Jr(e, 0),
                Zt(e, r),
                fe(e, QA()),
                t;
            switch (e.finishedWork = n,
            e.finishedLanes = r,
            A) {
            case 0:
            case 1:
                throw Error(S(345));
            case 2:
                Kr(e, ae, vt);
                break;
            case 3:
                if (Zt(e, r),
                (r & 130023424) === r && (A = jd + 500 - QA(),
                10 < A)) {
                    if (Ua(e, 0) !== 0)
                        break;
                    if (n = e.suspendedLanes,
                    (n & r) !== r) {
                        ne(),
                        e.pingedLanes |= e.suspendedLanes & n;
                        break
                    }
                    e.timeoutHandle = Oc(Kr.bind(null, e, ae, vt), A);
                    break
                }
                Kr(e, ae, vt);
                break;
            case 4:
                if (Zt(e, r),
                (r & 4194240) === r)
                    break;
                for (A = e.eventTimes,
                n = -1; 0 < r; ) {
                    var s = 31 - tt(r);
                    i = 1 << s,
                    s = A[s],
                    s > n && (n = s),
                    r &= ~i
                }
                if (r = n,
                r = QA() - r,
                r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * F1(r / 1960)) - r,
                10 < r) {
                    e.timeoutHandle = Oc(Kr.bind(null, e, ae, vt), r);
                    break
                }
                Kr(e, ae, vt);
                break;
            case 5:
                Kr(e, ae, vt);
                break;
            default:
                throw Error(S(329))
            }
        }
    }
    return fe(e, QA()),
    e.callbackNode === t ? xw.bind(null, e) : null
}
function of(e, A) {
    var t = is;
    return e.current.memoizedState.isDehydrated && (Jr(e, A).flags |= 256),
    e = Va(e, A),
    e !== 2 && (A = ae,
    ae = t,
    A !== null && af(A)),
    e
}
function af(e) {
    ae === null ? ae = e : ae.push.apply(ae, e)
}
function U1(e) {
    for (var A = e; ; ) {
        if (A.flags & 16384) {
            var t = A.updateQueue;
            if (t !== null && (t = t.stores,
            t !== null))
                for (var r = 0; r < t.length; r++) {
                    var n = t[r]
                      , i = n.getSnapshot;
                    n = n.value;
                    try {
                        if (!nt(i(), n))
                            return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (t = A.child,
        A.subtreeFlags & 16384 && t !== null)
            t.return = A,
            A = t;
        else {
            if (A === e)
                break;
            for (; A.sibling === null; ) {
                if (A.return === null || A.return === e)
                    return !0;
                A = A.return
            }
            A.sibling.return = A.return,
            A = A.sibling
        }
    }
    return !0
}
function Zt(e, A) {
    for (A &= ~Gd,
    A &= ~El,
    e.suspendedLanes |= A,
    e.pingedLanes &= ~A,
    e = e.expirationTimes; 0 < A; ) {
        var t = 31 - tt(A)
          , r = 1 << t;
        e[t] = -1,
        A &= ~r
    }
}
function $g(e) {
    if (J & 6)
        throw Error(S(327));
    $n();
    var A = Ua(e, 0);
    if (!(A & 1))
        return fe(e, QA()),
        null;
    var t = Va(e, A);
    if (e.tag !== 0 && t === 2) {
        var r = Tc(e);
        r !== 0 && (A = r,
        t = of(e, r))
    }
    if (t === 1)
        throw t = Ds,
        Jr(e, 0),
        Zt(e, A),
        fe(e, QA()),
        t;
    if (t === 6)
        throw Error(S(345));
    return e.finishedWork = e.current.alternate,
    e.finishedLanes = A,
    Kr(e, ae, vt),
    fe(e, QA()),
    null
}
function zd(e, A) {
    var t = J;
    J |= 1;
    try {
        return e(A)
    } finally {
        J = t,
        J === 0 && (li = QA() + 500,
        Ql && Hr())
    }
}
function un(e) {
    Ar !== null && Ar.tag === 0 && !(J & 6) && $n();
    var A = J;
    J |= 1;
    var t = We.transition
      , r = Z;
    try {
        if (We.transition = null,
        Z = 1,
        e)
            return e()
    } finally {
        Z = r,
        We.transition = t,
        J = A,
        !(J & 6) && Hr()
    }
}
function Xd() {
    Ce = Kn.current,
    oA(Kn)
}
function Jr(e, A) {
    e.finishedWork = null,
    e.finishedLanes = 0;
    var t = e.timeoutHandle;
    if (t !== -1 && (e.timeoutHandle = -1,
    e1(t)),
    SA !== null)
        for (t = SA.return; t !== null; ) {
            var r = t;
            switch (Ed(r),
            r.tag) {
            case 1:
                r = r.type.childContextTypes,
                r != null && _a();
                break;
            case 3:
                oi(),
                oA(ue),
                oA(qA),
                kd();
                break;
            case 5:
                Dd(r);
                break;
            case 4:
                oi();
                break;
            case 13:
                oA(fA);
                break;
            case 19:
                oA(fA);
                break;
            case 10:
                Sd(r.type._context);
                break;
            case 22:
            case 23:
                Xd()
            }
            t = t.return
        }
    if (MA = e,
    SA = e = hr(e.current, null),
    RA = Ce = A,
    bA = 0,
    Ds = null,
    Gd = El = ln = 0,
    ae = is = null,
    jr !== null) {
        for (A = 0; A < jr.length; A++)
            if (t = jr[A],
            r = t.interleaved,
            r !== null) {
                t.interleaved = null;
                var n = r.next
                  , i = t.pending;
                if (i !== null) {
                    var s = i.next;
                    i.next = n,
                    r.next = s
                }
                t.pending = r
            }
        jr = null
    }
    return e
}
function Ew(e, A) {
    do {
        var t = SA;
        try {
            if (_d(),
            sa.current = Pa,
            Ka) {
                for (var r = BA.memoizedState; r !== null; ) {
                    var n = r.queue;
                    n !== null && (n.pending = null),
                    r = r.next
                }
                Ka = !1
            }
            if (an = 0,
            kA = TA = BA = null,
            rs = !1,
            Ts = 0,
            Vd.current = null,
            t === null || t.return === null) {
                bA = 1,
                Ds = A,
                SA = null;
                break
            }
            A: {
                var i = e
                  , s = t.return
                  , o = t
                  , a = A;
                if (A = RA,
                o.flags |= 32768,
                a !== null && typeof a == "object" && typeof a.then == "function") {
                    var l = a
                      , u = o
                      , c = u.tag;
                    if (!(u.mode & 1) && (c === 0 || c === 11 || c === 15)) {
                        var f = u.alternate;
                        f ? (u.updateQueue = f.updateQueue,
                        u.memoizedState = f.memoizedState,
                        u.lanes = f.lanes) : (u.updateQueue = null,
                        u.memoizedState = null)
                    }
                    var d = Kg(s);
                    if (d !== null) {
                        d.flags &= -257,
                        Pg(d, s, o, i, A),
                        d.mode & 1 && Mg(i, l, A),
                        A = d,
                        a = l;
                        var B = A.updateQueue;
                        if (B === null) {
                            var h = new Set;
                            h.add(a),
                            A.updateQueue = h
                        } else
                            B.add(a);
                        break A
                    } else {
                        if (!(A & 1)) {
                            Mg(i, l, A),
                            Wd();
                            break A
                        }
                        a = Error(S(426))
                    }
                } else if (uA && o.mode & 1) {
                    var y = Kg(s);
                    if (y !== null) {
                        !(y.flags & 65536) && (y.flags |= 256),
                        Pg(y, s, o, i, A),
                        Id(ai(a, o));
                        break A
                    }
                }
                i = a = ai(a, o),
                bA !== 4 && (bA = 2),
                is === null ? is = [i] : is.push(i),
                i = s;
                do {
                    switch (i.tag) {
                    case 3:
                        i.flags |= 65536,
                        A &= -A,
                        i.lanes |= A;
                        var p = uw(i, a, A);
                        Sg(i, p);
                        break A;
                    case 1:
                        o = a;
                        var g = i.type
                          , m = i.stateNode;
                        if (!(i.flags & 128) && (typeof g.getDerivedStateFromError == "function" || m !== null && typeof m.componentDidCatch == "function" && (fr === null || !fr.has(m)))) {
                            i.flags |= 65536,
                            A &= -A,
                            i.lanes |= A;
                            var C = cw(i, o, A);
                            Sg(i, C);
                            break A
                        }
                    }
                    i = i.return
                } while (i !== null)
            }
            _w(t)
        } catch (v) {
            A = v,
            SA === t && t !== null && (SA = t = t.return);
            continue
        }
        break
    } while (!0)
}
function Iw() {
    var e = Oa.current;
    return Oa.current = Pa,
    e === null ? Pa : e
}
function Wd() {
    (bA === 0 || bA === 3 || bA === 2) && (bA = 4),
    MA === null || !(ln & 268435455) && !(El & 268435455) || Zt(MA, RA)
}
function Va(e, A) {
    var t = J;
    J |= 2;
    var r = Iw();
    (MA !== e || RA !== A) && (vt = null,
    Jr(e, A));
    do
        try {
            x1();
            break
        } catch (n) {
            Ew(e, n)
        }
    while (!0);
    if (_d(),
    J = t,
    Oa.current = r,
    SA !== null)
        throw Error(S(261));
    return MA = null,
    RA = 0,
    bA
}
function x1() {
    for (; SA !== null; )
        Hw(SA)
}
function E1() {
    for (; SA !== null && !ZQ(); )
        Hw(SA)
}
function Hw(e) {
    var A = Tw(e.alternate, e, Ce);
    e.memoizedProps = e.pendingProps,
    A === null ? _w(e) : SA = A,
    Vd.current = null
}
function _w(e) {
    var A = e;
    do {
        var t = A.alternate;
        if (e = A.return,
        A.flags & 32768) {
            if (t = y1(t, A),
            t !== null) {
                t.flags &= 32767,
                SA = t;
                return
            }
            if (e !== null)
                e.flags |= 32768,
                e.subtreeFlags = 0,
                e.deletions = null;
            else {
                bA = 6,
                SA = null;
                return
            }
        } else if (t = w1(t, A, Ce),
        t !== null) {
            SA = t;
            return
        }
        if (A = A.sibling,
        A !== null) {
            SA = A;
            return
        }
        SA = A = e
    } while (A !== null);
    bA === 0 && (bA = 5)
}
function Kr(e, A, t) {
    var r = Z
      , n = We.transition;
    try {
        We.transition = null,
        Z = 1,
        I1(e, A, t, r)
    } finally {
        We.transition = n,
        Z = r
    }
    return null
}
function I1(e, A, t, r) {
    do
        $n();
    while (Ar !== null);
    if (J & 6)
        throw Error(S(327));
    t = e.finishedWork;
    var n = e.finishedLanes;
    if (t === null)
        return null;
    if (e.finishedWork = null,
    e.finishedLanes = 0,
    t === e.current)
        throw Error(S(177));
    e.callbackNode = null,
    e.callbackPriority = 0;
    var i = t.lanes | t.childLanes;
    if (aF(e, i),
    e === MA && (SA = MA = null,
    RA = 0),
    !(t.subtreeFlags & 2064) && !(t.flags & 2064) || Fo || (Fo = !0,
    Lw(Fa, function() {
        return $n(),
        null
    })),
    i = (t.flags & 15990) !== 0,
    t.subtreeFlags & 15990 || i) {
        i = We.transition,
        We.transition = null;
        var s = Z;
        Z = 1;
        var o = J;
        J |= 4,
        Vd.current = null,
        v1(e, t),
        Fw(t, e),
        WF(Kc),
        xa = !!Mc,
        Kc = Mc = null,
        e.current = t,
        Q1(t),
        qQ(),
        J = o,
        Z = s,
        We.transition = i
    } else
        e.current = t;
    if (Fo && (Fo = !1,
    Ar = e,
    Ra = n),
    i = e.pendingLanes,
    i === 0 && (fr = null),
    tF(t.stateNode),
    fe(e, QA()),
    A !== null)
        for (r = e.onRecoverableError,
        t = 0; t < A.length; t++)
            n = A[t],
            r(n.value, {
                componentStack: n.stack,
                digest: n.digest
            });
    if (Na)
        throw Na = !1,
        e = nf,
        nf = null,
        e;
    return Ra & 1 && e.tag !== 0 && $n(),
    i = e.pendingLanes,
    i & 1 ? e === sf ? ss++ : (ss = 0,
    sf = e) : ss = 0,
    Hr(),
    null
}
function $n() {
    if (Ar !== null) {
        var e = um(Ra)
          , A = We.transition
          , t = Z;
        try {
            if (We.transition = null,
            Z = 16 > e ? 16 : e,
            Ar === null)
                var r = !1;
            else {
                if (e = Ar,
                Ar = null,
                Ra = 0,
                J & 6)
                    throw Error(S(331));
                var n = J;
                for (J |= 4,
                O = e.current; O !== null; ) {
                    var i = O
                      , s = i.child;
                    if (O.flags & 16) {
                        var o = i.deletions;
                        if (o !== null) {
                            for (var a = 0; a < o.length; a++) {
                                var l = o[a];
                                for (O = l; O !== null; ) {
                                    var u = O;
                                    switch (u.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        ns(8, u, i)
                                    }
                                    var c = u.child;
                                    if (c !== null)
                                        c.return = u,
                                        O = c;
                                    else
                                        for (; O !== null; ) {
                                            u = O;
                                            var f = u.sibling
                                              , d = u.return;
                                            if (Cw(u),
                                            u === l) {
                                                O = null;
                                                break
                                            }
                                            if (f !== null) {
                                                f.return = d,
                                                O = f;
                                                break
                                            }
                                            O = d
                                        }
                                }
                            }
                            var B = i.alternate;
                            if (B !== null) {
                                var h = B.child;
                                if (h !== null) {
                                    B.child = null;
                                    do {
                                        var y = h.sibling;
                                        h.sibling = null,
                                        h = y
                                    } while (h !== null)
                                }
                            }
                            O = i
                        }
                    }
                    if (i.subtreeFlags & 2064 && s !== null)
                        s.return = i,
                        O = s;
                    else
                        A: for (; O !== null; ) {
                            if (i = O,
                            i.flags & 2048)
                                switch (i.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    ns(9, i, i.return)
                                }
                            var p = i.sibling;
                            if (p !== null) {
                                p.return = i.return,
                                O = p;
                                break A
                            }
                            O = i.return
                        }
                }
                var g = e.current;
                for (O = g; O !== null; ) {
                    s = O;
                    var m = s.child;
                    if (s.subtreeFlags & 2064 && m !== null)
                        m.return = s,
                        O = m;
                    else
                        A: for (s = g; O !== null; ) {
                            if (o = O,
                            o.flags & 2048)
                                try {
                                    switch (o.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        xl(9, o)
                                    }
                                } catch (v) {
                                    mA(o, o.return, v)
                                }
                            if (o === s) {
                                O = null;
                                break A
                            }
                            var C = o.sibling;
                            if (C !== null) {
                                C.return = o.return,
                                O = C;
                                break A
                            }
                            O = o.return
                        }
                }
                if (J = n,
                Hr(),
                ht && typeof ht.onPostCommitFiberRoot == "function")
                    try {
                        ht.onPostCommitFiberRoot(ml, e)
                    } catch {}
                r = !0
            }
            return r
        } finally {
            Z = t,
            We.transition = A
        }
    }
    return !1
}
function Zg(e, A, t) {
    A = ai(t, A),
    A = uw(e, A, 1),
    e = cr(e, A, 1),
    A = ne(),
    e !== null && (Js(e, 1, A),
    fe(e, A))
}
function mA(e, A, t) {
    if (e.tag === 3)
        Zg(e, e, t);
    else
        for (; A !== null; ) {
            if (A.tag === 3) {
                Zg(A, e, t);
                break
            } else if (A.tag === 1) {
                var r = A.stateNode;
                if (typeof A.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (fr === null || !fr.has(r))) {
                    e = ai(t, e),
                    e = cw(A, e, 1),
                    A = cr(A, e, 1),
                    e = ne(),
                    A !== null && (Js(A, 1, e),
                    fe(A, e));
                    break
                }
            }
            A = A.return
        }
}
function H1(e, A, t) {
    var r = e.pingCache;
    r !== null && r.delete(A),
    A = ne(),
    e.pingedLanes |= e.suspendedLanes & t,
    MA === e && (RA & t) === t && (bA === 4 || bA === 3 && (RA & 130023424) === RA && 500 > QA() - jd ? Jr(e, 0) : Gd |= t),
    fe(e, A)
}
function Sw(e, A) {
    A === 0 && (e.mode & 1 ? (A = ho,
    ho <<= 1,
    !(ho & 130023424) && (ho = 4194304)) : A = 1);
    var t = ne();
    e = kt(e, A),
    e !== null && (Js(e, A, t),
    fe(e, t))
}
function _1(e) {
    var A = e.memoizedState
      , t = 0;
    A !== null && (t = A.retryLane),
    Sw(e, t)
}
function S1(e, A) {
    var t = 0;
    switch (e.tag) {
    case 13:
        var r = e.stateNode
          , n = e.memoizedState;
        n !== null && (t = n.retryLane);
        break;
    case 19:
        r = e.stateNode;
        break;
    default:
        throw Error(S(314))
    }
    r !== null && r.delete(A),
    Sw(e, t)
}
var Tw;
Tw = function(e, A, t) {
    if (e !== null)
        if (e.memoizedProps !== A.pendingProps || ue.current)
            le = !0;
        else {
            if (!(e.lanes & t) && !(A.flags & 128))
                return le = !1,
                m1(e, A, t);
            le = !!(e.flags & 131072)
        }
    else
        le = !1,
        uA && A.flags & 1048576 && km(A, La, A.index);
    switch (A.lanes = 0,
    A.tag) {
    case 2:
        var r = A.type;
        aa(e, A),
        e = A.pendingProps;
        var n = ni(A, qA.current);
        Jn(A, t),
        n = Kd(null, A, r, e, n, t);
        var i = Pd();
        return A.flags |= 1,
        typeof n == "object" && n !== null && typeof n.render == "function" && n.$$typeof === void 0 ? (A.tag = 1,
        A.memoizedState = null,
        A.updateQueue = null,
        ce(r) ? (i = !0,
        Sa(A)) : i = !1,
        A.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null,
        Ld(A),
        n.updater = Ul,
        A.stateNode = n,
        n._reactInternals = A,
        Xc(A, r, e, t),
        A = Jc(null, A, r, !0, i, t)) : (A.tag = 0,
        uA && i && xd(A),
        te(null, A, n, t),
        A = A.child),
        A;
    case 16:
        r = A.elementType;
        A: {
            switch (aa(e, A),
            e = A.pendingProps,
            n = r._init,
            r = n(r._payload),
            A.type = r,
            n = A.tag = L1(r),
            e = qe(r, e),
            n) {
            case 0:
                A = Yc(null, A, r, e, t);
                break A;
            case 1:
                A = Rg(null, A, r, e, t);
                break A;
            case 11:
                A = Og(null, A, r, e, t);
                break A;
            case 14:
                A = Ng(null, A, r, qe(r.type, e), t);
                break A
            }
            throw Error(S(306, r, ""))
        }
        return A;
    case 0:
        return r = A.type,
        n = A.pendingProps,
        n = A.elementType === r ? n : qe(r, n),
        Yc(e, A, r, n, t);
    case 1:
        return r = A.type,
        n = A.pendingProps,
        n = A.elementType === r ? n : qe(r, n),
        Rg(e, A, r, n, t);
    case 3:
        A: {
            if (gw(A),
            e === null)
                throw Error(S(387));
            r = A.pendingProps,
            i = A.memoizedState,
            n = i.element,
            Rm(e, A),
            ka(A, r, null, t);
            var s = A.memoizedState;
            if (r = s.element,
            i.isDehydrated)
                if (i = {
                    element: r,
                    isDehydrated: !1,
                    cache: s.cache,
                    pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
                    transitions: s.transitions
                },
                A.updateQueue.baseState = i,
                A.memoizedState = i,
                A.flags & 256) {
                    n = ai(Error(S(423)), A),
                    A = Vg(e, A, r, t, n);
                    break A
                } else if (r !== n) {
                    n = ai(Error(S(424)), A),
                    A = Vg(e, A, r, t, n);
                    break A
                } else
                    for (Fe = ur(A.stateNode.containerInfo.firstChild),
                    Ee = A,
                    uA = !0,
                    et = null,
                    t = Om(A, null, r, t),
                    A.child = t; t; )
                        t.flags = t.flags & -3 | 4096,
                        t = t.sibling;
            else {
                if (ii(),
                r === n) {
                    A = Mt(e, A, t);
                    break A
                }
                te(e, A, r, t)
            }
            A = A.child
        }
        return A;
    case 5:
        return Vm(A),
        e === null && Gc(A),
        r = A.type,
        n = A.pendingProps,
        i = e !== null ? e.memoizedProps : null,
        s = n.children,
        Pc(r, n) ? s = null : i !== null && Pc(r, i) && (A.flags |= 32),
        hw(e, A),
        te(e, A, s, t),
        A.child;
    case 6:
        return e === null && Gc(A),
        null;
    case 13:
        return Bw(e, A, t);
    case 4:
        return bd(A, A.stateNode.containerInfo),
        r = A.pendingProps,
        e === null ? A.child = si(A, null, r, t) : te(e, A, r, t),
        A.child;
    case 11:
        return r = A.type,
        n = A.pendingProps,
        n = A.elementType === r ? n : qe(r, n),
        Og(e, A, r, n, t);
    case 7:
        return te(e, A, A.pendingProps, t),
        A.child;
    case 8:
        return te(e, A, A.pendingProps.children, t),
        A.child;
    case 12:
        return te(e, A, A.pendingProps.children, t),
        A.child;
    case 10:
        A: {
            if (r = A.type._context,
            n = A.pendingProps,
            i = A.memoizedProps,
            s = n.value,
            nA(ba, r._currentValue),
            r._currentValue = s,
            i !== null)
                if (nt(i.value, s)) {
                    if (i.children === n.children && !ue.current) {
                        A = Mt(e, A, t);
                        break A
                    }
                } else
                    for (i = A.child,
                    i !== null && (i.return = A); i !== null; ) {
                        var o = i.dependencies;
                        if (o !== null) {
                            s = i.child;
                            for (var a = o.firstContext; a !== null; ) {
                                if (a.context === r) {
                                    if (i.tag === 1) {
                                        a = Ht(-1, t & -t),
                                        a.tag = 2;
                                        var l = i.updateQueue;
                                        if (l !== null) {
                                            l = l.shared;
                                            var u = l.pending;
                                            u === null ? a.next = a : (a.next = u.next,
                                            u.next = a),
                                            l.pending = a
                                        }
                                    }
                                    i.lanes |= t,
                                    a = i.alternate,
                                    a !== null && (a.lanes |= t),
                                    jc(i.return, t, A),
                                    o.lanes |= t;
                                    break
                                }
                                a = a.next
                            }
                        } else if (i.tag === 10)
                            s = i.type === A.type ? null : i.child;
                        else if (i.tag === 18) {
                            if (s = i.return,
                            s === null)
                                throw Error(S(341));
                            s.lanes |= t,
                            o = s.alternate,
                            o !== null && (o.lanes |= t),
                            jc(s, t, A),
                            s = i.sibling
                        } else
                            s = i.child;
                        if (s !== null)
                            s.return = i;
                        else
                            for (s = i; s !== null; ) {
                                if (s === A) {
                                    s = null;
                                    break
                                }
                                if (i = s.sibling,
                                i !== null) {
                                    i.return = s.return,
                                    s = i;
                                    break
                                }
                                s = s.return
                            }
                        i = s
                    }
            te(e, A, n.children, t),
            A = A.child
        }
        return A;
    case 9:
        return n = A.type,
        r = A.pendingProps.children,
        Jn(A, t),
        n = Ye(n),
        r = r(n),
        A.flags |= 1,
        te(e, A, r, t),
        A.child;
    case 14:
        return r = A.type,
        n = qe(r, A.pendingProps),
        n = qe(r.type, n),
        Ng(e, A, r, n, t);
    case 15:
        return fw(e, A, A.type, A.pendingProps, t);
    case 17:
        return r = A.type,
        n = A.pendingProps,
        n = A.elementType === r ? n : qe(r, n),
        aa(e, A),
        A.tag = 1,
        ce(r) ? (e = !0,
        Sa(A)) : e = !1,
        Jn(A, t),
        lw(A, r, n),
        Xc(A, r, n, t),
        Jc(null, A, r, !0, e, t);
    case 19:
        return pw(e, A, t);
    case 22:
        return dw(e, A, t)
    }
    throw Error(S(156, A.tag))
}
;
function Lw(e, A) {
    return sm(e, A)
}
function T1(e, A, t, r) {
    this.tag = e,
    this.key = t,
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
    this.index = 0,
    this.ref = null,
    this.pendingProps = A,
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
    this.mode = r,
    this.subtreeFlags = this.flags = 0,
    this.deletions = null,
    this.childLanes = this.lanes = 0,
    this.alternate = null
}
function Re(e, A, t, r) {
    return new T1(e,A,t,r)
}
function Yd(e) {
    return e = e.prototype,
    !(!e || !e.isReactComponent)
}
function L1(e) {
    if (typeof e == "function")
        return Yd(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof,
        e === hd)
            return 11;
        if (e === gd)
            return 14
    }
    return 2
}
function hr(e, A) {
    var t = e.alternate;
    return t === null ? (t = Re(e.tag, A, e.key, e.mode),
    t.elementType = e.elementType,
    t.type = e.type,
    t.stateNode = e.stateNode,
    t.alternate = e,
    e.alternate = t) : (t.pendingProps = A,
    t.type = e.type,
    t.flags = 0,
    t.subtreeFlags = 0,
    t.deletions = null),
    t.flags = e.flags & 14680064,
    t.childLanes = e.childLanes,
    t.lanes = e.lanes,
    t.child = e.child,
    t.memoizedProps = e.memoizedProps,
    t.memoizedState = e.memoizedState,
    t.updateQueue = e.updateQueue,
    A = e.dependencies,
    t.dependencies = A === null ? null : {
        lanes: A.lanes,
        firstContext: A.firstContext
    },
    t.sibling = e.sibling,
    t.index = e.index,
    t.ref = e.ref,
    t
}
function ca(e, A, t, r, n, i) {
    var s = 2;
    if (r = e,
    typeof e == "function")
        Yd(e) && (s = 1);
    else if (typeof e == "string")
        s = 5;
    else
        A: switch (e) {
        case In:
            return $r(t.children, n, i, A);
        case dd:
            s = 8,
            n |= 8;
            break;
        case pc:
            return e = Re(12, t, A, n | 2),
            e.elementType = pc,
            e.lanes = i,
            e;
        case mc:
            return e = Re(13, t, A, n),
            e.elementType = mc,
            e.lanes = i,
            e;
        case wc:
            return e = Re(19, t, A, n),
            e.elementType = wc,
            e.lanes = i,
            e;
        case V0:
            return Il(t, n, i, A);
        default:
            if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                case N0:
                    s = 10;
                    break A;
                case R0:
                    s = 9;
                    break A;
                case hd:
                    s = 11;
                    break A;
                case gd:
                    s = 14;
                    break A;
                case Xt:
                    s = 16,
                    r = null;
                    break A
                }
            throw Error(S(130, e == null ? e : typeof e, ""))
        }
    return A = Re(s, t, A, n),
    A.elementType = e,
    A.type = r,
    A.lanes = i,
    A
}
function $r(e, A, t, r) {
    return e = Re(7, e, r, A),
    e.lanes = t,
    e
}
function Il(e, A, t, r) {
    return e = Re(22, e, r, A),
    e.elementType = V0,
    e.lanes = t,
    e.stateNode = {
        isHidden: !1
    },
    e
}
function Uu(e, A, t) {
    return e = Re(6, e, null, A),
    e.lanes = t,
    e
}
function xu(e, A, t) {
    return A = Re(4, e.children !== null ? e.children : [], e.key, A),
    A.lanes = t,
    A.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    },
    A
}
function b1(e, A, t, r, n) {
    this.tag = A,
    this.containerInfo = e,
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
    this.timeoutHandle = -1,
    this.callbackNode = this.pendingContext = this.context = null,
    this.callbackPriority = 0,
    this.eventTimes = su(0),
    this.expirationTimes = su(-1),
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
    this.entanglements = su(0),
    this.identifierPrefix = r,
    this.onRecoverableError = n,
    this.mutableSourceEagerHydrationData = null
}
function Jd(e, A, t, r, n, i, s, o, a) {
    return e = new b1(e,A,t,o,a),
    A === 1 ? (A = 1,
    i === !0 && (A |= 8)) : A = 0,
    i = Re(3, null, null, A),
    e.current = i,
    i.stateNode = e,
    i.memoizedState = {
        element: r,
        isDehydrated: t,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    },
    Ld(i),
    e
}
function D1(e, A, t) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: En,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: A,
        implementation: t
    }
}
function bw(e) {
    if (!e)
        return Cr;
    e = e._reactInternals;
    A: {
        if (dn(e) !== e || e.tag !== 1)
            throw Error(S(170));
        var A = e;
        do {
            switch (A.tag) {
            case 3:
                A = A.stateNode.context;
                break A;
            case 1:
                if (ce(A.type)) {
                    A = A.stateNode.__reactInternalMemoizedMergedChildContext;
                    break A
                }
            }
            A = A.return
        } while (A !== null);
        throw Error(S(171))
    }
    if (e.tag === 1) {
        var t = e.type;
        if (ce(t))
            return bm(e, t, A)
    }
    return A
}
function Dw(e, A, t, r, n, i, s, o, a) {
    return e = Jd(t, r, !0, e, n, i, s, o, a),
    e.context = bw(null),
    t = e.current,
    r = ne(),
    n = dr(t),
    i = Ht(r, n),
    i.callback = A ?? null,
    cr(t, i, n),
    e.current.lanes = n,
    Js(e, n, r),
    fe(e, r),
    e
}
function Hl(e, A, t, r) {
    var n = A.current
      , i = ne()
      , s = dr(n);
    return t = bw(t),
    A.context === null ? A.context = t : A.pendingContext = t,
    A = Ht(i, s),
    A.payload = {
        element: e
    },
    r = r === void 0 ? null : r,
    r !== null && (A.callback = r),
    e = cr(n, A, s),
    e !== null && (rt(e, n, s, i),
    ia(e, n, s)),
    s
}
function Ga(e) {
    if (e = e.current,
    !e.child)
        return null;
    switch (e.child.tag) {
    case 5:
        return e.child.stateNode;
    default:
        return e.child.stateNode
    }
}
function qg(e, A) {
    if (e = e.memoizedState,
    e !== null && e.dehydrated !== null) {
        var t = e.retryLane;
        e.retryLane = t !== 0 && t < A ? t : A
    }
}
function $d(e, A) {
    qg(e, A),
    (e = e.alternate) && qg(e, A)
}
function k1() {
    return null
}
var kw = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
}
;
function Zd(e) {
    this._internalRoot = e
}
_l.prototype.render = Zd.prototype.render = function(e) {
    var A = this._internalRoot;
    if (A === null)
        throw Error(S(409));
    Hl(e, A, null, null)
}
;
_l.prototype.unmount = Zd.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var A = e.containerInfo;
        un(function() {
            Hl(null, e, null, null)
        }),
        A[Dt] = null
    }
}
;
function _l(e) {
    this._internalRoot = e
}
_l.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var A = dm();
        e = {
            blockedOn: null,
            target: e,
            priority: A
        };
        for (var t = 0; t < $t.length && A !== 0 && A < $t[t].priority; t++)
            ;
        $t.splice(t, 0, e),
        t === 0 && gm(e)
    }
}
;
function qd(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}
function Sl(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}
function AB() {}
function M1(e, A, t, r, n) {
    if (n) {
        if (typeof r == "function") {
            var i = r;
            r = function() {
                var l = Ga(s);
                i.call(l)
            }
        }
        var s = Dw(A, r, e, 0, null, !1, !1, "", AB);
        return e._reactRootContainer = s,
        e[Dt] = s.current,
        Es(e.nodeType === 8 ? e.parentNode : e),
        un(),
        s
    }
    for (; n = e.lastChild; )
        e.removeChild(n);
    if (typeof r == "function") {
        var o = r;
        r = function() {
            var l = Ga(a);
            o.call(l)
        }
    }
    var a = Jd(e, 0, !1, null, null, !1, !1, "", AB);
    return e._reactRootContainer = a,
    e[Dt] = a.current,
    Es(e.nodeType === 8 ? e.parentNode : e),
    un(function() {
        Hl(A, a, t, r)
    }),
    a
}
function Tl(e, A, t, r, n) {
    var i = t._reactRootContainer;
    if (i) {
        var s = i;
        if (typeof n == "function") {
            var o = n;
            n = function() {
                var a = Ga(s);
                o.call(a)
            }
        }
        Hl(A, s, e, n)
    } else
        s = M1(t, A, e, n, r);
    return Ga(s)
}
cm = function(e) {
    switch (e.tag) {
    case 3:
        var A = e.stateNode;
        if (A.current.memoizedState.isDehydrated) {
            var t = Oi(A.pendingLanes);
            t !== 0 && (md(A, t | 1),
            fe(A, QA()),
            !(J & 6) && (li = QA() + 500,
            Hr()))
        }
        break;
    case 13:
        un(function() {
            var r = kt(e, 1);
            if (r !== null) {
                var n = ne();
                rt(r, e, 1, n)
            }
        }),
        $d(e, 1)
    }
}
;
wd = function(e) {
    if (e.tag === 13) {
        var A = kt(e, 134217728);
        if (A !== null) {
            var t = ne();
            rt(A, e, 134217728, t)
        }
        $d(e, 134217728)
    }
}
;
fm = function(e) {
    if (e.tag === 13) {
        var A = dr(e)
          , t = kt(e, A);
        if (t !== null) {
            var r = ne();
            rt(t, e, A, r)
        }
        $d(e, A)
    }
}
;
dm = function() {
    return Z
}
;
hm = function(e, A) {
    var t = Z;
    try {
        return Z = e,
        A()
    } finally {
        Z = t
    }
}
;
Hc = function(e, A, t) {
    switch (A) {
    case "input":
        if (vc(e, t),
        A = t.name,
        t.type === "radio" && A != null) {
            for (t = e; t.parentNode; )
                t = t.parentNode;
            for (t = t.querySelectorAll("input[name=" + JSON.stringify("" + A) + '][type="radio"]'),
            A = 0; A < t.length; A++) {
                var r = t[A];
                if (r !== e && r.form === e.form) {
                    var n = vl(r);
                    if (!n)
                        throw Error(S(90));
                    j0(r),
                    vc(r, n)
                }
            }
        }
        break;
    case "textarea":
        X0(e, t);
        break;
    case "select":
        A = t.value,
        A != null && zn(e, !!t.multiple, A, !1)
    }
}
;
Am = zd;
em = un;
var K1 = {
    usingClientEntryPoint: !1,
    Events: [Zs, Tn, vl, Z0, q0, zd]
}
  , _i = {
    findFiberByHostInstance: Gr,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom"
}
  , P1 = {
    bundleType: _i.bundleType,
    version: _i.version,
    rendererPackageName: _i.rendererPackageName,
    rendererConfig: _i.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Rt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function(e) {
        return e = nm(e),
        e === null ? null : e.stateNode
    },
    findFiberByHostInstance: _i.findFiberByHostInstance || k1,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Uo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Uo.isDisabled && Uo.supportsFiber)
        try {
            ml = Uo.inject(P1),
            ht = Uo
        } catch {}
}
Le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = K1;
Le.createPortal = function(e, A) {
    var t = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!qd(A))
        throw Error(S(200));
    return D1(e, A, null, t)
}
;
Le.createRoot = function(e, A) {
    if (!qd(e))
        throw Error(S(299));
    var t = !1
      , r = ""
      , n = kw;
    return A != null && (A.unstable_strictMode === !0 && (t = !0),
    A.identifierPrefix !== void 0 && (r = A.identifierPrefix),
    A.onRecoverableError !== void 0 && (n = A.onRecoverableError)),
    A = Jd(e, 1, !1, null, null, t, !1, r, n),
    e[Dt] = A.current,
    Es(e.nodeType === 8 ? e.parentNode : e),
    new Zd(A)
}
;
Le.findDOMNode = function(e) {
    if (e == null)
        return null;
    if (e.nodeType === 1)
        return e;
    var A = e._reactInternals;
    if (A === void 0)
        throw typeof e.render == "function" ? Error(S(188)) : (e = Object.keys(e).join(","),
        Error(S(268, e)));
    return e = nm(A),
    e = e === null ? null : e.stateNode,
    e
}
;
Le.flushSync = function(e) {
    return un(e)
}
;
Le.hydrate = function(e, A, t) {
    if (!Sl(A))
        throw Error(S(200));
    return Tl(null, e, A, !0, t)
}
;
Le.hydrateRoot = function(e, A, t) {
    if (!qd(e))
        throw Error(S(405));
    var r = t != null && t.hydratedSources || null
      , n = !1
      , i = ""
      , s = kw;
    if (t != null && (t.unstable_strictMode === !0 && (n = !0),
    t.identifierPrefix !== void 0 && (i = t.identifierPrefix),
    t.onRecoverableError !== void 0 && (s = t.onRecoverableError)),
    A = Dw(A, null, e, 1, t ?? null, n, !1, i, s),
    e[Dt] = A.current,
    Es(e),
    r)
        for (e = 0; e < r.length; e++)
            t = r[e],
            n = t._getVersion,
            n = n(t._source),
            A.mutableSourceEagerHydrationData == null ? A.mutableSourceEagerHydrationData = [t, n] : A.mutableSourceEagerHydrationData.push(t, n);
    return new _l(A)
}
;
Le.render = function(e, A, t) {
    if (!Sl(A))
        throw Error(S(200));
    return Tl(null, e, A, !1, t)
}
;
Le.unmountComponentAtNode = function(e) {
    if (!Sl(e))
        throw Error(S(40));
    return e._reactRootContainer ? (un(function() {
        Tl(null, null, e, !1, function() {
            e._reactRootContainer = null,
            e[Dt] = null
        })
    }),
    !0) : !1
}
;
Le.unstable_batchedUpdates = zd;
Le.unstable_renderSubtreeIntoContainer = function(e, A, t, r) {
    if (!Sl(t))
        throw Error(S(200));
    if (e == null || e._reactInternals === void 0)
        throw Error(S(38));
    return Tl(e, A, t, !1, r)
}
;
Le.version = "18.3.1-next-f1338f8080-20240426";
function Mw() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Mw)
        } catch (e) {
            console.error(e)
        }
}
Mw(),
M0.exports = Le;
var O1 = M0.exports, Kw, eB = O1;
Kw = eB.createRoot,
eB.hydrateRoot;
const Pw = I.createContext({
    transformPagePoint: e => e,
    isStatic: !1,
    reducedMotion: "never"
})
  , Ll = I.createContext({})
  , bl = I.createContext(null)
  , Dl = typeof document < "u"
  , Ah = Dl ? I.useLayoutEffect : I.useEffect
  , Ow = I.createContext({
    strict: !1
})
  , eh = e => e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
  , N1 = "framerAppearId"
  , Nw = "data-" + eh(N1);
function R1(e, A, t, r) {
    const {visualElement: n} = I.useContext(Ll)
      , i = I.useContext(Ow)
      , s = I.useContext(bl)
      , o = I.useContext(Pw).reducedMotion
      , a = I.useRef();
    r = r || i.renderer,
    !a.current && r && (a.current = r(e, {
        visualState: A,
        parent: n,
        props: t,
        presenceContext: s,
        blockInitialAnimation: s ? s.initial === !1 : !1,
        reducedMotionConfig: o
    }));
    const l = a.current;
    I.useInsertionEffect( () => {
        l && l.update(t, s)
    }
    );
    const u = I.useRef(!!(t[Nw] && !window.HandoffComplete));
    return Ah( () => {
        l && (l.render(),
        u.current && l.animationState && l.animationState.animateChanges())
    }
    ),
    I.useEffect( () => {
        l && (l.updateFeatures(),
        !u.current && l.animationState && l.animationState.animateChanges(),
        u.current && (u.current = !1,
        window.HandoffComplete = !0))
    }
    ),
    l
}
function Pn(e) {
    return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current")
}
function V1(e, A, t) {
    return I.useCallback(r => {
        r && e.mount && e.mount(r),
        A && (r ? A.mount(r) : A.unmount()),
        t && (typeof t == "function" ? t(r) : Pn(t) && (t.current = r))
    }
    , [A])
}
function ks(e) {
    return typeof e == "string" || Array.isArray(e)
}
function kl(e) {
    return e !== null && typeof e == "object" && typeof e.start == "function"
}
const th = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"]
  , rh = ["initial", ...th];
function Ml(e) {
    return kl(e.animate) || rh.some(A => ks(e[A]))
}
function Rw(e) {
    return !!(Ml(e) || e.variants)
}
function G1(e, A) {
    if (Ml(e)) {
        const {initial: t, animate: r} = e;
        return {
            initial: t === !1 || ks(t) ? t : void 0,
            animate: ks(r) ? r : void 0
        }
    }
    return e.inherit !== !1 ? A : {}
}
function j1(e) {
    const {initial: A, animate: t} = G1(e, I.useContext(Ll));
    return I.useMemo( () => ({
        initial: A,
        animate: t
    }), [tB(A), tB(t)])
}
function tB(e) {
    return Array.isArray(e) ? e.join(" ") : e
}
const rB = {
    animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"]
}
  , Ms = {};
for (const e in rB)
    Ms[e] = {
        isEnabled: A => rB[e].some(t => !!A[t])
    };
function z1(e) {
    for (const A in e)
        Ms[A] = {
            ...Ms[A],
            ...e[A]
        }
}
const nh = I.createContext({})
  , Vw = I.createContext({})
  , X1 = Symbol.for("motionComponentSymbol");
function W1({preloadedFeatures: e, createVisualElement: A, useRender: t, useVisualState: r, Component: n}) {
    e && z1(e);
    function i(o, a) {
        let l;
        const u = {
            ...I.useContext(Pw),
            ...o,
            layoutId: Y1(o)
        }
          , {isStatic: c} = u
          , f = j1(o)
          , d = r(o, c);
        if (!c && Dl) {
            f.visualElement = R1(n, d, u, A);
            const B = I.useContext(Vw)
              , h = I.useContext(Ow).strict;
            f.visualElement && (l = f.visualElement.loadFeatures(u, h, e, B))
        }
        return I.createElement(Ll.Provider, {
            value: f
        }, l && f.visualElement ? I.createElement(l, {
            visualElement: f.visualElement,
            ...u
        }) : null, t(n, o, V1(d, f.visualElement, a), d, c, f.visualElement))
    }
    const s = I.forwardRef(i);
    return s[X1] = n,
    s
}
function Y1({layoutId: e}) {
    const A = I.useContext(nh).id;
    return A && e !== void 0 ? A + "-" + e : e
}
function J1(e) {
    function A(r, n={}) {
        return W1(e(r, n))
    }
    if (typeof Proxy > "u")
        return A;
    const t = new Map;
    return new Proxy(A,{
        get: (r, n) => (t.has(n) || t.set(n, A(n)),
        t.get(n))
    })
}
const $1 = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];
function ih(e) {
    return typeof e != "string" || e.includes("-") ? !1 : !!($1.indexOf(e) > -1 || /[A-Z]/.test(e))
}
const ja = {};
function Z1(e) {
    Object.assign(ja, e)
}
const Ao = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"]
  , hn = new Set(Ao);
function Gw(e, {layout: A, layoutId: t}) {
    return hn.has(e) || e.startsWith("origin") || (A || t !== void 0) && (!!ja[e] || e === "opacity")
}
const pe = e => !!(e && e.getVelocity)
  , q1 = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective"
}
  , AU = Ao.length;
function eU(e, {enableHardwareAcceleration: A=!0, allowTransformNone: t=!0}, r, n) {
    let i = "";
    for (let s = 0; s < AU; s++) {
        const o = Ao[s];
        if (e[o] !== void 0) {
            const a = q1[o] || o;
            i += `${a}(${e[o]}) `
        }
    }
    return A && !e.z && (i += "translateZ(0)"),
    i = i.trim(),
    n ? i = n(e, r ? "" : i) : t && r && (i = "none"),
    i
}
const jw = e => A => typeof A == "string" && A.startsWith(e)
  , zw = jw("--")
  , lf = jw("var(--")
  , tU = /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g
  , rU = (e, A) => A && typeof e == "number" ? A.transform(e) : e
  , vr = (e, A, t) => Math.min(Math.max(t, e), A)
  , gn = {
    test: e => typeof e == "number",
    parse: parseFloat,
    transform: e => e
}
  , os = {
    ...gn,
    transform: e => vr(0, 1, e)
}
  , xo = {
    ...gn,
    default: 1
}
  , as = e => Math.round(e * 1e5) / 1e5
  , Kl = /(-)?([\d]*\.?[\d])+/g
  , Xw = /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi
  , nU = /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function eo(e) {
    return typeof e == "string"
}
const to = e => ({
    test: A => eo(A) && A.endsWith(e) && A.split(" ").length === 1,
    parse: parseFloat,
    transform: A => `${A}${e}`
})
  , Gt = to("deg")
  , Bt = to("%")
  , G = to("px")
  , iU = to("vh")
  , sU = to("vw")
  , nB = {
    ...Bt,
    parse: e => Bt.parse(e) / 100,
    transform: e => Bt.transform(e * 100)
}
  , iB = {
    ...gn,
    transform: Math.round
}
  , Ww = {
    borderWidth: G,
    borderTopWidth: G,
    borderRightWidth: G,
    borderBottomWidth: G,
    borderLeftWidth: G,
    borderRadius: G,
    radius: G,
    borderTopLeftRadius: G,
    borderTopRightRadius: G,
    borderBottomRightRadius: G,
    borderBottomLeftRadius: G,
    width: G,
    maxWidth: G,
    height: G,
    maxHeight: G,
    size: G,
    top: G,
    right: G,
    bottom: G,
    left: G,
    padding: G,
    paddingTop: G,
    paddingRight: G,
    paddingBottom: G,
    paddingLeft: G,
    margin: G,
    marginTop: G,
    marginRight: G,
    marginBottom: G,
    marginLeft: G,
    rotate: Gt,
    rotateX: Gt,
    rotateY: Gt,
    rotateZ: Gt,
    scale: xo,
    scaleX: xo,
    scaleY: xo,
    scaleZ: xo,
    skew: Gt,
    skewX: Gt,
    skewY: Gt,
    distance: G,
    translateX: G,
    translateY: G,
    translateZ: G,
    x: G,
    y: G,
    z: G,
    perspective: G,
    transformPerspective: G,
    opacity: os,
    originX: nB,
    originY: nB,
    originZ: G,
    zIndex: iB,
    fillOpacity: os,
    strokeOpacity: os,
    numOctaves: iB
};
function sh(e, A, t, r) {
    const {style: n, vars: i, transform: s, transformOrigin: o} = e;
    let a = !1
      , l = !1
      , u = !0;
    for (const c in A) {
        const f = A[c];
        if (zw(c)) {
            i[c] = f;
            continue
        }
        const d = Ww[c]
          , B = rU(f, d);
        if (hn.has(c)) {
            if (a = !0,
            s[c] = B,
            !u)
                continue;
            f !== (d.default || 0) && (u = !1)
        } else
            c.startsWith("origin") ? (l = !0,
            o[c] = B) : n[c] = B
    }
    if (A.transform || (a || r ? n.transform = eU(e.transform, t, u, r) : n.transform && (n.transform = "none")),
    l) {
        const {originX: c="50%", originY: f="50%", originZ: d=0} = o;
        n.transformOrigin = `${c} ${f} ${d}`
    }
}
const oh = () => ({
    style: {},
    transform: {},
    transformOrigin: {},
    vars: {}
});
function Yw(e, A, t) {
    for (const r in A)
        !pe(A[r]) && !Gw(r, t) && (e[r] = A[r])
}
function oU({transformTemplate: e}, A, t) {
    return I.useMemo( () => {
        const r = oh();
        return sh(r, A, {
            enableHardwareAcceleration: !t
        }, e),
        Object.assign({}, r.vars, r.style)
    }
    , [A])
}
function aU(e, A, t) {
    const r = e.style || {}
      , n = {};
    return Yw(n, r, e),
    Object.assign(n, oU(e, A, t)),
    e.transformValues ? e.transformValues(n) : n
}
function lU(e, A, t) {
    const r = {}
      , n = aU(e, A, t);
    return e.drag && e.dragListener !== !1 && (r.draggable = !1,
    n.userSelect = n.WebkitUserSelect = n.WebkitTouchCallout = "none",
    n.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`),
    e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (r.tabIndex = 0),
    r.style = n,
    r
}
const uU = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "transformValues", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);
function za(e) {
    return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || uU.has(e)
}
let Jw = e => !za(e);
function cU(e) {
    e && (Jw = A => A.startsWith("on") ? !za(A) : e(A))
}
try {
    cU(require("@emotion/is-prop-valid").default)
} catch {}
function fU(e, A, t) {
    const r = {};
    for (const n in e)
        n === "values" && typeof e.values == "object" || (Jw(n) || t === !0 && za(n) || !A && !za(n) || e.draggable && n.startsWith("onDrag")) && (r[n] = e[n]);
    return r
}
function sB(e, A, t) {
    return typeof e == "string" ? e : G.transform(A + t * e)
}
function dU(e, A, t) {
    const r = sB(A, e.x, e.width)
      , n = sB(t, e.y, e.height);
    return `${r} ${n}`
}
const hU = {
    offset: "stroke-dashoffset",
    array: "stroke-dasharray"
}
  , gU = {
    offset: "strokeDashoffset",
    array: "strokeDasharray"
};
function BU(e, A, t=1, r=0, n=!0) {
    e.pathLength = 1;
    const i = n ? hU : gU;
    e[i.offset] = G.transform(-r);
    const s = G.transform(A)
      , o = G.transform(t);
    e[i.array] = `${s} ${o}`
}
function ah(e, {attrX: A, attrY: t, attrScale: r, originX: n, originY: i, pathLength: s, pathSpacing: o=1, pathOffset: a=0, ...l}, u, c, f) {
    if (sh(e, l, u, f),
    c) {
        e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
        return
    }
    e.attrs = e.style,
    e.style = {};
    const {attrs: d, style: B, dimensions: h} = e;
    d.transform && (h && (B.transform = d.transform),
    delete d.transform),
    h && (n !== void 0 || i !== void 0 || B.transform) && (B.transformOrigin = dU(h, n !== void 0 ? n : .5, i !== void 0 ? i : .5)),
    A !== void 0 && (d.x = A),
    t !== void 0 && (d.y = t),
    r !== void 0 && (d.scale = r),
    s !== void 0 && BU(d, s, o, a, !1)
}
const $w = () => ({
    ...oh(),
    attrs: {}
})
  , lh = e => typeof e == "string" && e.toLowerCase() === "svg";
function pU(e, A, t, r) {
    const n = I.useMemo( () => {
        const i = $w();
        return ah(i, A, {
            enableHardwareAcceleration: !1
        }, lh(r), e.transformTemplate),
        {
            ...i.attrs,
            style: {
                ...i.style
            }
        }
    }
    , [A]);
    if (e.style) {
        const i = {};
        Yw(i, e.style, e),
        n.style = {
            ...i,
            ...n.style
        }
    }
    return n
}
function mU(e=!1) {
    return (t, r, n, {latestValues: i}, s) => {
        const a = (ih(t) ? pU : lU)(r, i, s, t)
          , u = {
            ...fU(r, typeof t == "string", e),
            ...a,
            ref: n
        }
          , {children: c} = r
          , f = I.useMemo( () => pe(c) ? c.get() : c, [c]);
        return I.createElement(t, {
            ...u,
            children: f
        })
    }
}
function Zw(e, {style: A, vars: t}, r, n) {
    Object.assign(e.style, A, n && n.getProjectionStyles(r));
    for (const i in t)
        e.style.setProperty(i, t[i])
}
const qw = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);
function Ay(e, A, t, r) {
    Zw(e, A, void 0, r);
    for (const n in A.attrs)
        e.setAttribute(qw.has(n) ? n : eh(n), A.attrs[n])
}
function uh(e, A) {
    const {style: t} = e
      , r = {};
    for (const n in t)
        (pe(t[n]) || A.style && pe(A.style[n]) || Gw(n, e)) && (r[n] = t[n]);
    return r
}
function ey(e, A) {
    const t = uh(e, A);
    for (const r in e)
        if (pe(e[r]) || pe(A[r])) {
            const n = Ao.indexOf(r) !== -1 ? "attr" + r.charAt(0).toUpperCase() + r.substring(1) : r;
            t[n] = e[r]
        }
    return t
}
function ch(e, A, t, r={}, n={}) {
    return typeof A == "function" && (A = A(t !== void 0 ? t : e.custom, r, n)),
    typeof A == "string" && (A = e.variants && e.variants[A]),
    typeof A == "function" && (A = A(t !== void 0 ? t : e.custom, r, n)),
    A
}
function ty(e) {
    const A = I.useRef(null);
    return A.current === null && (A.current = e()),
    A.current
}
const Xa = e => Array.isArray(e)
  , wU = e => !!(e && typeof e == "object" && e.mix && e.toValue)
  , yU = e => Xa(e) ? e[e.length - 1] || 0 : e;
function fa(e) {
    const A = pe(e) ? e.get() : e;
    return wU(A) ? A.toValue() : A
}
function CU({scrapeMotionValuesFromProps: e, createRenderState: A, onMount: t}, r, n, i) {
    const s = {
        latestValues: vU(r, n, i, e),
        renderState: A()
    };
    return t && (s.mount = o => t(r, o, s)),
    s
}
const ry = e => (A, t) => {
    const r = I.useContext(Ll)
      , n = I.useContext(bl)
      , i = () => CU(e, A, r, n);
    return t ? i() : ty(i)
}
;
function vU(e, A, t, r) {
    const n = {}
      , i = r(e, {});
    for (const f in i)
        n[f] = fa(i[f]);
    let {initial: s, animate: o} = e;
    const a = Ml(e)
      , l = Rw(e);
    A && l && !a && e.inherit !== !1 && (s === void 0 && (s = A.initial),
    o === void 0 && (o = A.animate));
    let u = t ? t.initial === !1 : !1;
    u = u || s === !1;
    const c = u ? o : s;
    return c && typeof c != "boolean" && !kl(c) && (Array.isArray(c) ? c : [c]).forEach(d => {
        const B = ch(e, d);
        if (!B)
            return;
        const {transitionEnd: h, transition: y, ...p} = B;
        for (const g in p) {
            let m = p[g];
            if (Array.isArray(m)) {
                const C = u ? m.length - 1 : 0;
                m = m[C]
            }
            m !== null && (n[g] = m)
        }
        for (const g in h)
            n[g] = h[g]
    }
    ),
    n
}
const FA = e => e;
class oB {
    constructor() {
        this.order = [],
        this.scheduled = new Set
    }
    add(A) {
        if (!this.scheduled.has(A))
            return this.scheduled.add(A),
            this.order.push(A),
            !0
    }
    remove(A) {
        const t = this.order.indexOf(A);
        t !== -1 && (this.order.splice(t, 1),
        this.scheduled.delete(A))
    }
    clear() {
        this.order.length = 0,
        this.scheduled.clear()
    }
}
function QU(e) {
    let A = new oB
      , t = new oB
      , r = 0
      , n = !1
      , i = !1;
    const s = new WeakSet
      , o = {
        schedule: (a, l=!1, u=!1) => {
            const c = u && n
              , f = c ? A : t;
            return l && s.add(a),
            f.add(a) && c && n && (r = A.order.length),
            a
        }
        ,
        cancel: a => {
            t.remove(a),
            s.delete(a)
        }
        ,
        process: a => {
            if (n) {
                i = !0;
                return
            }
            if (n = !0,
            [A,t] = [t, A],
            t.clear(),
            r = A.order.length,
            r)
                for (let l = 0; l < r; l++) {
                    const u = A.order[l];
                    u(a),
                    s.has(u) && (o.schedule(u),
                    e())
                }
            n = !1,
            i && (i = !1,
            o.process(a))
        }
    };
    return o
}
const Eo = ["prepare", "read", "update", "preRender", "render", "postRender"]
  , FU = 40;
function UU(e, A) {
    let t = !1
      , r = !0;
    const n = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    }
      , i = Eo.reduce( (c, f) => (c[f] = QU( () => t = !0),
    c), {})
      , s = c => i[c].process(n)
      , o = () => {
        const c = performance.now();
        t = !1,
        n.delta = r ? 1e3 / 60 : Math.max(Math.min(c - n.timestamp, FU), 1),
        n.timestamp = c,
        n.isProcessing = !0,
        Eo.forEach(s),
        n.isProcessing = !1,
        t && A && (r = !1,
        e(o))
    }
      , a = () => {
        t = !0,
        r = !0,
        n.isProcessing || e(o)
    }
    ;
    return {
        schedule: Eo.reduce( (c, f) => {
            const d = i[f];
            return c[f] = (B, h=!1, y=!1) => (t || a(),
            d.schedule(B, h, y)),
            c
        }
        , {}),
        cancel: c => Eo.forEach(f => i[f].cancel(c)),
        state: n,
        steps: i
    }
}
const {schedule: iA, cancel: Kt, state: WA, steps: Eu} = UU(typeof requestAnimationFrame < "u" ? requestAnimationFrame : FA, !0)
  , xU = {
    useVisualState: ry({
        scrapeMotionValuesFromProps: ey,
        createRenderState: $w,
        onMount: (e, A, {renderState: t, latestValues: r}) => {
            iA.read( () => {
                try {
                    t.dimensions = typeof A.getBBox == "function" ? A.getBBox() : A.getBoundingClientRect()
                } catch {
                    t.dimensions = {
                        x: 0,
                        y: 0,
                        width: 0,
                        height: 0
                    }
                }
            }
            ),
            iA.render( () => {
                ah(t, r, {
                    enableHardwareAcceleration: !1
                }, lh(A.tagName), e.transformTemplate),
                Ay(A, t)
            }
            )
        }
    })
}
  , EU = {
    useVisualState: ry({
        scrapeMotionValuesFromProps: uh,
        createRenderState: oh
    })
};
function IU(e, {forwardMotionProps: A=!1}, t, r) {
    return {
        ...ih(e) ? xU : EU,
        preloadedFeatures: t,
        useRender: mU(A),
        createVisualElement: r,
        Component: e
    }
}
function It(e, A, t, r={
    passive: !0
}) {
    return e.addEventListener(A, t, r),
    () => e.removeEventListener(A, t)
}
const ny = e => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1;
function Pl(e, A="page") {
    return {
        point: {
            x: e[A + "X"],
            y: e[A + "Y"]
        }
    }
}
const HU = e => A => ny(A) && e(A, Pl(A));
function _t(e, A, t, r) {
    return It(e, A, HU(t), r)
}
const _U = (e, A) => t => A(e(t))
  , gr = (...e) => e.reduce(_U);
function iy(e) {
    let A = null;
    return () => {
        const t = () => {
            A = null
        }
        ;
        return A === null ? (A = e,
        t) : !1
    }
}
const aB = iy("dragHorizontal")
  , lB = iy("dragVertical");
function sy(e) {
    let A = !1;
    if (e === "y")
        A = lB();
    else if (e === "x")
        A = aB();
    else {
        const t = aB()
          , r = lB();
        t && r ? A = () => {
            t(),
            r()
        }
        : (t && t(),
        r && r())
    }
    return A
}
function oy() {
    const e = sy(!0);
    return e ? (e(),
    !1) : !0
}
class _r {
    constructor(A) {
        this.isMounted = !1,
        this.node = A
    }
    update() {}
}
function uB(e, A) {
    const t = "pointer" + (A ? "enter" : "leave")
      , r = "onHover" + (A ? "Start" : "End")
      , n = (i, s) => {
        if (i.pointerType === "touch" || oy())
            return;
        const o = e.getProps();
        e.animationState && o.whileHover && e.animationState.setActive("whileHover", A),
        o[r] && iA.update( () => o[r](i, s))
    }
    ;
    return _t(e.current, t, n, {
        passive: !e.getProps()[r]
    })
}
class SU extends _r {
    mount() {
        this.unmount = gr(uB(this.node, !0), uB(this.node, !1))
    }
    unmount() {}
}
class TU extends _r {
    constructor() {
        super(...arguments),
        this.isActive = !1
    }
    onFocus() {
        let A = !1;
        try {
            A = this.node.current.matches(":focus-visible")
        } catch {
            A = !0
        }
        !A || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0),
        this.isActive = !0)
    }
    onBlur() {
        !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1),
        this.isActive = !1)
    }
    mount() {
        this.unmount = gr(It(this.node.current, "focus", () => this.onFocus()), It(this.node.current, "blur", () => this.onBlur()))
    }
    unmount() {}
}
const ay = (e, A) => A ? e === A ? !0 : ay(e, A.parentElement) : !1;
function Iu(e, A) {
    if (!A)
        return;
    const t = new PointerEvent("pointer" + e);
    A(t, Pl(t))
}
class LU extends _r {
    constructor() {
        super(...arguments),
        this.removeStartListeners = FA,
        this.removeEndListeners = FA,
        this.removeAccessibleListeners = FA,
        this.startPointerPress = (A, t) => {
            if (this.isPressing)
                return;
            this.removeEndListeners();
            const r = this.node.getProps()
              , i = _t(window, "pointerup", (o, a) => {
                if (!this.checkPressEnd())
                    return;
                const {onTap: l, onTapCancel: u, globalTapTarget: c} = this.node.getProps();
                iA.update( () => {
                    !c && !ay(this.node.current, o.target) ? u && u(o, a) : l && l(o, a)
                }
                )
            }
            , {
                passive: !(r.onTap || r.onPointerUp)
            })
              , s = _t(window, "pointercancel", (o, a) => this.cancelPress(o, a), {
                passive: !(r.onTapCancel || r.onPointerCancel)
            });
            this.removeEndListeners = gr(i, s),
            this.startPress(A, t)
        }
        ,
        this.startAccessiblePress = () => {
            const A = i => {
                if (i.key !== "Enter" || this.isPressing)
                    return;
                const s = o => {
                    o.key !== "Enter" || !this.checkPressEnd() || Iu("up", (a, l) => {
                        const {onTap: u} = this.node.getProps();
                        u && iA.update( () => u(a, l))
                    }
                    )
                }
                ;
                this.removeEndListeners(),
                this.removeEndListeners = It(this.node.current, "keyup", s),
                Iu("down", (o, a) => {
                    this.startPress(o, a)
                }
                )
            }
              , t = It(this.node.current, "keydown", A)
              , r = () => {
                this.isPressing && Iu("cancel", (i, s) => this.cancelPress(i, s))
            }
              , n = It(this.node.current, "blur", r);
            this.removeAccessibleListeners = gr(t, n)
        }
    }
    startPress(A, t) {
        this.isPressing = !0;
        const {onTapStart: r, whileTap: n} = this.node.getProps();
        n && this.node.animationState && this.node.animationState.setActive("whileTap", !0),
        r && iA.update( () => r(A, t))
    }
    checkPressEnd() {
        return this.removeEndListeners(),
        this.isPressing = !1,
        this.node.getProps().whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1),
        !oy()
    }
    cancelPress(A, t) {
        if (!this.checkPressEnd())
            return;
        const {onTapCancel: r} = this.node.getProps();
        r && iA.update( () => r(A, t))
    }
    mount() {
        const A = this.node.getProps()
          , t = _t(A.globalTapTarget ? window : this.node.current, "pointerdown", this.startPointerPress, {
            passive: !(A.onTapStart || A.onPointerStart)
        })
          , r = It(this.node.current, "focus", this.startAccessiblePress);
        this.removeStartListeners = gr(t, r)
    }
    unmount() {
        this.removeStartListeners(),
        this.removeEndListeners(),
        this.removeAccessibleListeners()
    }
}
const uf = new WeakMap
  , Hu = new WeakMap
  , bU = e => {
    const A = uf.get(e.target);
    A && A(e)
}
  , DU = e => {
    e.forEach(bU)
}
;
function kU({root: e, ...A}) {
    const t = e || document;
    Hu.has(t) || Hu.set(t, {});
    const r = Hu.get(t)
      , n = JSON.stringify(A);
    return r[n] || (r[n] = new IntersectionObserver(DU,{
        root: e,
        ...A
    })),
    r[n]
}
function MU(e, A, t) {
    const r = kU(A);
    return uf.set(e, t),
    r.observe(e),
    () => {
        uf.delete(e),
        r.unobserve(e)
    }
}
const KU = {
    some: 0,
    all: 1
};
class PU extends _r {
    constructor() {
        super(...arguments),
        this.hasEnteredView = !1,
        this.isInView = !1
    }
    startObserver() {
        this.unmount();
        const {viewport: A={}} = this.node.getProps()
          , {root: t, margin: r, amount: n="some", once: i} = A
          , s = {
            root: t ? t.current : void 0,
            rootMargin: r,
            threshold: typeof n == "number" ? n : KU[n]
        }
          , o = a => {
            const {isIntersecting: l} = a;
            if (this.isInView === l || (this.isInView = l,
            i && !l && this.hasEnteredView))
                return;
            l && (this.hasEnteredView = !0),
            this.node.animationState && this.node.animationState.setActive("whileInView", l);
            const {onViewportEnter: u, onViewportLeave: c} = this.node.getProps()
              , f = l ? u : c;
            f && f(a)
        }
        ;
        return MU(this.node.current, s, o)
    }
    mount() {
        this.startObserver()
    }
    update() {
        if (typeof IntersectionObserver > "u")
            return;
        const {props: A, prevProps: t} = this.node;
        ["amount", "margin", "root"].some(OU(A, t)) && this.startObserver()
    }
    unmount() {}
}
function OU({viewport: e={}}, {viewport: A={}}={}) {
    return t => e[t] !== A[t]
}
const NU = {
    inView: {
        Feature: PU
    },
    tap: {
        Feature: LU
    },
    focus: {
        Feature: TU
    },
    hover: {
        Feature: SU
    }
};
function ly(e, A) {
    if (!Array.isArray(A))
        return !1;
    const t = A.length;
    if (t !== e.length)
        return !1;
    for (let r = 0; r < t; r++)
        if (A[r] !== e[r])
            return !1;
    return !0
}
function RU(e) {
    const A = {};
    return e.values.forEach( (t, r) => A[r] = t.get()),
    A
}
function VU(e) {
    const A = {};
    return e.values.forEach( (t, r) => A[r] = t.getVelocity()),
    A
}
function Ol(e, A, t) {
    const r = e.getProps();
    return ch(r, A, t !== void 0 ? t : r.custom, RU(e), VU(e))
}
let Wa = FA;
const Zr = e => e * 1e3
  , St = e => e / 1e3
  , GU = {
    current: !1
}
  , uy = e => Array.isArray(e) && typeof e[0] == "number";
function cy(e) {
    return !!(!e || typeof e == "string" && fy[e] || uy(e) || Array.isArray(e) && e.every(cy))
}
const Ri = ([e,A,t,r]) => `cubic-bezier(${e}, ${A}, ${t}, ${r})`
  , fy = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: Ri([0, .65, .55, 1]),
    circOut: Ri([.55, 0, 1, .45]),
    backIn: Ri([.31, .01, .66, -.59]),
    backOut: Ri([.33, 1.53, .69, .99])
};
function dy(e) {
    if (e)
        return uy(e) ? Ri(e) : Array.isArray(e) ? e.map(dy) : fy[e]
}
function jU(e, A, t, {delay: r=0, duration: n, repeat: i=0, repeatType: s="loop", ease: o, times: a}={}) {
    const l = {
        [A]: t
    };
    a && (l.offset = a);
    const u = dy(o);
    return Array.isArray(u) && (l.easing = u),
    e.animate(l, {
        delay: r,
        duration: n,
        easing: Array.isArray(u) ? "linear" : u,
        fill: "both",
        iterations: i + 1,
        direction: s === "reverse" ? "alternate" : "normal"
    })
}
function zU(e, {repeat: A, repeatType: t="loop"}) {
    const r = A && t !== "loop" && A % 2 === 1 ? 0 : e.length - 1;
    return e[r]
}
const hy = (e, A, t) => (((1 - 3 * t + 3 * A) * e + (3 * t - 6 * A)) * e + 3 * A) * e
  , XU = 1e-7
  , WU = 12;
function YU(e, A, t, r, n) {
    let i, s, o = 0;
    do
        s = A + (t - A) / 2,
        i = hy(s, r, n) - e,
        i > 0 ? t = s : A = s;
    while (Math.abs(i) > XU && ++o < WU);
    return s
}
function ro(e, A, t, r) {
    if (e === A && t === r)
        return FA;
    const n = i => YU(i, 0, 1, e, t);
    return i => i === 0 || i === 1 ? i : hy(n(i), A, r)
}
const JU = ro(.42, 0, 1, 1)
  , $U = ro(0, 0, .58, 1)
  , gy = ro(.42, 0, .58, 1)
  , ZU = e => Array.isArray(e) && typeof e[0] != "number"
  , By = e => A => A <= .5 ? e(2 * A) / 2 : (2 - e(2 * (1 - A))) / 2
  , py = e => A => 1 - e(1 - A)
  , fh = e => 1 - Math.sin(Math.acos(e))
  , my = py(fh)
  , qU = By(fh)
  , wy = ro(.33, 1.53, .69, .99)
  , dh = py(wy)
  , Ax = By(dh)
  , ex = e => (e *= 2) < 1 ? .5 * dh(e) : .5 * (2 - Math.pow(2, -10 * (e - 1)))
  , cB = {
    linear: FA,
    easeIn: JU,
    easeInOut: gy,
    easeOut: $U,
    circIn: fh,
    circInOut: qU,
    circOut: my,
    backIn: dh,
    backInOut: Ax,
    backOut: wy,
    anticipate: ex
}
  , fB = e => {
    if (Array.isArray(e)) {
        Wa(e.length === 4);
        const [A,t,r,n] = e;
        return ro(A, t, r, n)
    } else if (typeof e == "string")
        return Wa(cB[e] !== void 0),
        cB[e];
    return e
}
  , hh = (e, A) => t => !!(eo(t) && nU.test(t) && t.startsWith(e) || A && Object.prototype.hasOwnProperty.call(t, A))
  , yy = (e, A, t) => r => {
    if (!eo(r))
        return r;
    const [n,i,s,o] = r.match(Kl);
    return {
        [e]: parseFloat(n),
        [A]: parseFloat(i),
        [t]: parseFloat(s),
        alpha: o !== void 0 ? parseFloat(o) : 1
    }
}
  , tx = e => vr(0, 255, e)
  , _u = {
    ...gn,
    transform: e => Math.round(tx(e))
}
  , Xr = {
    test: hh("rgb", "red"),
    parse: yy("red", "green", "blue"),
    transform: ({red: e, green: A, blue: t, alpha: r=1}) => "rgba(" + _u.transform(e) + ", " + _u.transform(A) + ", " + _u.transform(t) + ", " + as(os.transform(r)) + ")"
};
function rx(e) {
    let A = ""
      , t = ""
      , r = ""
      , n = "";
    return e.length > 5 ? (A = e.substring(1, 3),
    t = e.substring(3, 5),
    r = e.substring(5, 7),
    n = e.substring(7, 9)) : (A = e.substring(1, 2),
    t = e.substring(2, 3),
    r = e.substring(3, 4),
    n = e.substring(4, 5),
    A += A,
    t += t,
    r += r,
    n += n),
    {
        red: parseInt(A, 16),
        green: parseInt(t, 16),
        blue: parseInt(r, 16),
        alpha: n ? parseInt(n, 16) / 255 : 1
    }
}
const cf = {
    test: hh("#"),
    parse: rx,
    transform: Xr.transform
}
  , On = {
    test: hh("hsl", "hue"),
    parse: yy("hue", "saturation", "lightness"),
    transform: ({hue: e, saturation: A, lightness: t, alpha: r=1}) => "hsla(" + Math.round(e) + ", " + Bt.transform(as(A)) + ", " + Bt.transform(as(t)) + ", " + as(os.transform(r)) + ")"
}
  , ee = {
    test: e => Xr.test(e) || cf.test(e) || On.test(e),
    parse: e => Xr.test(e) ? Xr.parse(e) : On.test(e) ? On.parse(e) : cf.parse(e),
    transform: e => eo(e) ? e : e.hasOwnProperty("red") ? Xr.transform(e) : On.transform(e)
}
  , hA = (e, A, t) => -t * e + t * A + e;
function Su(e, A, t) {
    return t < 0 && (t += 1),
    t > 1 && (t -= 1),
    t < 1 / 6 ? e + (A - e) * 6 * t : t < 1 / 2 ? A : t < 2 / 3 ? e + (A - e) * (2 / 3 - t) * 6 : e
}
function nx({hue: e, saturation: A, lightness: t, alpha: r}) {
    e /= 360,
    A /= 100,
    t /= 100;
    let n = 0
      , i = 0
      , s = 0;
    if (!A)
        n = i = s = t;
    else {
        const o = t < .5 ? t * (1 + A) : t + A - t * A
          , a = 2 * t - o;
        n = Su(a, o, e + 1 / 3),
        i = Su(a, o, e),
        s = Su(a, o, e - 1 / 3)
    }
    return {
        red: Math.round(n * 255),
        green: Math.round(i * 255),
        blue: Math.round(s * 255),
        alpha: r
    }
}
const Tu = (e, A, t) => {
    const r = e * e;
    return Math.sqrt(Math.max(0, t * (A * A - r) + r))
}
  , ix = [cf, Xr, On]
  , sx = e => ix.find(A => A.test(e));
function dB(e) {
    const A = sx(e);
    let t = A.parse(e);
    return A === On && (t = nx(t)),
    t
}
const Cy = (e, A) => {
    const t = dB(e)
      , r = dB(A)
      , n = {
        ...t
    };
    return i => (n.red = Tu(t.red, r.red, i),
    n.green = Tu(t.green, r.green, i),
    n.blue = Tu(t.blue, r.blue, i),
    n.alpha = hA(t.alpha, r.alpha, i),
    Xr.transform(n))
}
;
function ox(e) {
    var A, t;
    return isNaN(e) && eo(e) && (((A = e.match(Kl)) === null || A === void 0 ? void 0 : A.length) || 0) + (((t = e.match(Xw)) === null || t === void 0 ? void 0 : t.length) || 0) > 0
}
const vy = {
    regex: tU,
    countKey: "Vars",
    token: "${v}",
    parse: FA
}
  , Qy = {
    regex: Xw,
    countKey: "Colors",
    token: "${c}",
    parse: ee.parse
}
  , Fy = {
    regex: Kl,
    countKey: "Numbers",
    token: "${n}",
    parse: gn.parse
};
function Lu(e, {regex: A, countKey: t, token: r, parse: n}) {
    const i = e.tokenised.match(A);
    i && (e["num" + t] = i.length,
    e.tokenised = e.tokenised.replace(A, r),
    e.values.push(...i.map(n)))
}
function Ya(e) {
    const A = e.toString()
      , t = {
        value: A,
        tokenised: A,
        values: [],
        numVars: 0,
        numColors: 0,
        numNumbers: 0
    };
    return t.value.includes("var(--") && Lu(t, vy),
    Lu(t, Qy),
    Lu(t, Fy),
    t
}
function Uy(e) {
    return Ya(e).values
}
function xy(e) {
    const {values: A, numColors: t, numVars: r, tokenised: n} = Ya(e)
      , i = A.length;
    return s => {
        let o = n;
        for (let a = 0; a < i; a++)
            a < r ? o = o.replace(vy.token, s[a]) : a < r + t ? o = o.replace(Qy.token, ee.transform(s[a])) : o = o.replace(Fy.token, as(s[a]));
        return o
    }
}
const ax = e => typeof e == "number" ? 0 : e;
function lx(e) {
    const A = Uy(e);
    return xy(e)(A.map(ax))
}
const Qr = {
    test: ox,
    parse: Uy,
    createTransformer: xy,
    getAnimatableNone: lx
}
  , Ey = (e, A) => t => `${t > 0 ? A : e}`;
function Iy(e, A) {
    return typeof e == "number" ? t => hA(e, A, t) : ee.test(e) ? Cy(e, A) : e.startsWith("var(") ? Ey(e, A) : _y(e, A)
}
const Hy = (e, A) => {
    const t = [...e]
      , r = t.length
      , n = e.map( (i, s) => Iy(i, A[s]));
    return i => {
        for (let s = 0; s < r; s++)
            t[s] = n[s](i);
        return t
    }
}
  , ux = (e, A) => {
    const t = {
        ...e,
        ...A
    }
      , r = {};
    for (const n in t)
        e[n] !== void 0 && A[n] !== void 0 && (r[n] = Iy(e[n], A[n]));
    return n => {
        for (const i in r)
            t[i] = r[i](n);
        return t
    }
}
  , _y = (e, A) => {
    const t = Qr.createTransformer(A)
      , r = Ya(e)
      , n = Ya(A);
    return r.numVars === n.numVars && r.numColors === n.numColors && r.numNumbers >= n.numNumbers ? gr(Hy(r.values, n.values), t) : Ey(e, A)
}
  , Ks = (e, A, t) => {
    const r = A - e;
    return r === 0 ? 1 : (t - e) / r
}
  , hB = (e, A) => t => hA(e, A, t);
function cx(e) {
    return typeof e == "number" ? hB : typeof e == "string" ? ee.test(e) ? Cy : _y : Array.isArray(e) ? Hy : typeof e == "object" ? ux : hB
}
function fx(e, A, t) {
    const r = []
      , n = t || cx(e[0])
      , i = e.length - 1;
    for (let s = 0; s < i; s++) {
        let o = n(e[s], e[s + 1]);
        if (A) {
            const a = Array.isArray(A) ? A[s] || FA : A;
            o = gr(a, o)
        }
        r.push(o)
    }
    return r
}
function Sy(e, A, {clamp: t=!0, ease: r, mixer: n}={}) {
    const i = e.length;
    if (Wa(i === A.length),
    i === 1)
        return () => A[0];
    e[0] > e[i - 1] && (e = [...e].reverse(),
    A = [...A].reverse());
    const s = fx(A, r, n)
      , o = s.length
      , a = l => {
        let u = 0;
        if (o > 1)
            for (; u < e.length - 2 && !(l < e[u + 1]); u++)
                ;
        const c = Ks(e[u], e[u + 1], l);
        return s[u](c)
    }
    ;
    return t ? l => a(vr(e[0], e[i - 1], l)) : a
}
function dx(e, A) {
    const t = e[e.length - 1];
    for (let r = 1; r <= A; r++) {
        const n = Ks(0, A, r);
        e.push(hA(t, 1, n))
    }
}
function hx(e) {
    const A = [0];
    return dx(A, e.length - 1),
    A
}
function gx(e, A) {
    return e.map(t => t * A)
}
function Bx(e, A) {
    return e.map( () => A || gy).splice(0, e.length - 1)
}
function Ja({duration: e=300, keyframes: A, times: t, ease: r="easeInOut"}) {
    const n = ZU(r) ? r.map(fB) : fB(r)
      , i = {
        done: !1,
        value: A[0]
    }
      , s = gx(t && t.length === A.length ? t : hx(A), e)
      , o = Sy(s, A, {
        ease: Array.isArray(n) ? n : Bx(A, n)
    });
    return {
        calculatedDuration: e,
        next: a => (i.value = o(a),
        i.done = a >= e,
        i)
    }
}
function Ty(e, A) {
    return A ? e * (1e3 / A) : 0
}
const px = 5;
function Ly(e, A, t) {
    const r = Math.max(A - px, 0);
    return Ty(t - e(r), A - r)
}
const bu = .001
  , mx = .01
  , wx = 10
  , yx = .05
  , Cx = 1;
function vx({duration: e=800, bounce: A=.25, velocity: t=0, mass: r=1}) {
    let n, i, s = 1 - A;
    s = vr(yx, Cx, s),
    e = vr(mx, wx, St(e)),
    s < 1 ? (n = l => {
        const u = l * s
          , c = u * e
          , f = u - t
          , d = ff(l, s)
          , B = Math.exp(-c);
        return bu - f / d * B
    }
    ,
    i = l => {
        const c = l * s * e
          , f = c * t + t
          , d = Math.pow(s, 2) * Math.pow(l, 2) * e
          , B = Math.exp(-c)
          , h = ff(Math.pow(l, 2), s);
        return (-n(l) + bu > 0 ? -1 : 1) * ((f - d) * B) / h
    }
    ) : (n = l => {
        const u = Math.exp(-l * e)
          , c = (l - t) * e + 1;
        return -bu + u * c
    }
    ,
    i = l => {
        const u = Math.exp(-l * e)
          , c = (t - l) * (e * e);
        return u * c
    }
    );
    const o = 5 / e
      , a = Fx(n, i, o);
    if (e = Zr(e),
    isNaN(a))
        return {
            stiffness: 100,
            damping: 10,
            duration: e
        };
    {
        const l = Math.pow(a, 2) * r;
        return {
            stiffness: l,
            damping: s * 2 * Math.sqrt(r * l),
            duration: e
        }
    }
}
const Qx = 12;
function Fx(e, A, t) {
    let r = t;
    for (let n = 1; n < Qx; n++)
        r = r - e(r) / A(r);
    return r
}
function ff(e, A) {
    return e * Math.sqrt(1 - A * A)
}
const Ux = ["duration", "bounce"]
  , xx = ["stiffness", "damping", "mass"];
function gB(e, A) {
    return A.some(t => e[t] !== void 0)
}
function Ex(e) {
    let A = {
        velocity: 0,
        stiffness: 100,
        damping: 10,
        mass: 1,
        isResolvedFromDuration: !1,
        ...e
    };
    if (!gB(e, xx) && gB(e, Ux)) {
        const t = vx(e);
        A = {
            ...A,
            ...t,
            mass: 1
        },
        A.isResolvedFromDuration = !0
    }
    return A
}
function by({keyframes: e, restDelta: A, restSpeed: t, ...r}) {
    const n = e[0]
      , i = e[e.length - 1]
      , s = {
        done: !1,
        value: n
    }
      , {stiffness: o, damping: a, mass: l, duration: u, velocity: c, isResolvedFromDuration: f} = Ex({
        ...r,
        velocity: -St(r.velocity || 0)
    })
      , d = c || 0
      , B = a / (2 * Math.sqrt(o * l))
      , h = i - n
      , y = St(Math.sqrt(o / l))
      , p = Math.abs(h) < 5;
    t || (t = p ? .01 : 2),
    A || (A = p ? .005 : .5);
    let g;
    if (B < 1) {
        const m = ff(y, B);
        g = C => {
            const v = Math.exp(-B * y * C);
            return i - v * ((d + B * y * h) / m * Math.sin(m * C) + h * Math.cos(m * C))
        }
    } else if (B === 1)
        g = m => i - Math.exp(-y * m) * (h + (d + y * h) * m);
    else {
        const m = y * Math.sqrt(B * B - 1);
        g = C => {
            const v = Math.exp(-B * y * C)
              , Q = Math.min(m * C, 300);
            return i - v * ((d + B * y * h) * Math.sinh(Q) + m * h * Math.cosh(Q)) / m
        }
    }
    return {
        calculatedDuration: f && u || null,
        next: m => {
            const C = g(m);
            if (f)
                s.done = m >= u;
            else {
                let v = d;
                m !== 0 && (B < 1 ? v = Ly(g, m, C) : v = 0);
                const Q = Math.abs(v) <= t
                  , U = Math.abs(i - C) <= A;
                s.done = Q && U
            }
            return s.value = s.done ? i : C,
            s
        }
    }
}
function BB({keyframes: e, velocity: A=0, power: t=.8, timeConstant: r=325, bounceDamping: n=10, bounceStiffness: i=500, modifyTarget: s, min: o, max: a, restDelta: l=.5, restSpeed: u}) {
    const c = e[0]
      , f = {
        done: !1,
        value: c
    }
      , d = F => o !== void 0 && F < o || a !== void 0 && F > a
      , B = F => o === void 0 ? a : a === void 0 || Math.abs(o - F) < Math.abs(a - F) ? o : a;
    let h = t * A;
    const y = c + h
      , p = s === void 0 ? y : s(y);
    p !== y && (h = p - c);
    const g = F => -h * Math.exp(-F / r)
      , m = F => p + g(F)
      , C = F => {
        const x = g(F)
          , H = m(F);
        f.done = Math.abs(x) <= l,
        f.value = f.done ? p : H
    }
    ;
    let v, Q;
    const U = F => {
        d(f.value) && (v = F,
        Q = by({
            keyframes: [f.value, B(f.value)],
            velocity: Ly(m, F, f.value),
            damping: n,
            stiffness: i,
            restDelta: l,
            restSpeed: u
        }))
    }
    ;
    return U(0),
    {
        calculatedDuration: null,
        next: F => {
            let x = !1;
            return !Q && v === void 0 && (x = !0,
            C(F),
            U(F)),
            v !== void 0 && F > v ? Q.next(F - v) : (!x && C(F),
            f)
        }
    }
}
const Ix = e => {
    const A = ({timestamp: t}) => e(t);
    return {
        start: () => iA.update(A, !0),
        stop: () => Kt(A),
        now: () => WA.isProcessing ? WA.timestamp : performance.now()
    }
}
  , pB = 2e4;
function mB(e) {
    let A = 0;
    const t = 50;
    let r = e.next(A);
    for (; !r.done && A < pB; )
        A += t,
        r = e.next(A);
    return A >= pB ? 1 / 0 : A
}
const Hx = {
    decay: BB,
    inertia: BB,
    tween: Ja,
    keyframes: Ja,
    spring: by
};
function $a({autoplay: e=!0, delay: A=0, driver: t=Ix, keyframes: r, type: n="keyframes", repeat: i=0, repeatDelay: s=0, repeatType: o="loop", onPlay: a, onStop: l, onComplete: u, onUpdate: c, ...f}) {
    let d = 1, B = !1, h, y;
    const p = () => {
        y = new Promise(N => {
            h = N
        }
        )
    }
    ;
    p();
    let g;
    const m = Hx[n] || Ja;
    let C;
    m !== Ja && typeof r[0] != "number" && (C = Sy([0, 100], r, {
        clamp: !1
    }),
    r = [0, 100]);
    const v = m({
        ...f,
        keyframes: r
    });
    let Q;
    o === "mirror" && (Q = m({
        ...f,
        keyframes: [...r].reverse(),
        velocity: -(f.velocity || 0)
    }));
    let U = "idle"
      , F = null
      , x = null
      , H = null;
    v.calculatedDuration === null && i && (v.calculatedDuration = mB(v));
    const {calculatedDuration: E} = v;
    let L = 1 / 0
      , b = 1 / 0;
    E !== null && (L = E + s,
    b = L * (i + 1) - s);
    let D = 0;
    const j = N => {
        if (x === null)
            return;
        d > 0 && (x = Math.min(x, N)),
        d < 0 && (x = Math.min(N - b / d, x)),
        F !== null ? D = F : D = Math.round(N - x) * d;
        const z = D - A * (d >= 0 ? 1 : -1)
          , UA = d >= 0 ? z < 0 : z > b;
        D = Math.max(z, 0),
        U === "finished" && F === null && (D = b);
        let q = D
          , aA = v;
        if (i) {
            const Au = Math.min(D, b) / L;
            let oo = Math.floor(Au)
              , Tr = Au % 1;
            !Tr && Au >= 1 && (Tr = 1),
            Tr === 1 && oo--,
            oo = Math.min(oo, i + 1),
            !!(oo % 2) && (o === "reverse" ? (Tr = 1 - Tr,
            s && (Tr -= s / L)) : o === "mirror" && (aA = Q)),
            q = vr(0, 1, Tr) * L
        }
        const xA = UA ? {
            done: !1,
            value: r[0]
        } : aA.next(q);
        C && (xA.value = C(xA.value));
        let {done: we} = xA;
        !UA && E !== null && (we = d >= 0 ? D >= b : D <= 0);
        const dQ = F === null && (U === "finished" || U === "running" && we);
        return c && c(xA.value),
        dQ && _(),
        xA
    }
      , T = () => {
        g && g.stop(),
        g = void 0
    }
      , V = () => {
        U = "idle",
        T(),
        h(),
        p(),
        x = H = null
    }
      , _ = () => {
        U = "finished",
        u && u(),
        T(),
        h()
    }
      , K = () => {
        if (B)
            return;
        g || (g = t(j));
        const N = g.now();
        a && a(),
        F !== null ? x = N - F : (!x || U === "finished") && (x = N),
        U === "finished" && p(),
        H = x,
        F = null,
        U = "running",
        g.start()
    }
    ;
    e && K();
    const R = {
        then(N, z) {
            return y.then(N, z)
        },
        get time() {
            return St(D)
        },
        set time(N) {
            N = Zr(N),
            D = N,
            F !== null || !g || d === 0 ? F = N : x = g.now() - N / d
        },
        get duration() {
            const N = v.calculatedDuration === null ? mB(v) : v.calculatedDuration;
            return St(N)
        },
        get speed() {
            return d
        },
        set speed(N) {
            N === d || !g || (d = N,
            R.time = St(D))
        },
        get state() {
            return U
        },
        play: K,
        pause: () => {
            U = "paused",
            F = D
        }
        ,
        stop: () => {
            B = !0,
            U !== "idle" && (U = "idle",
            l && l(),
            V())
        }
        ,
        cancel: () => {
            H !== null && j(H),
            V()
        }
        ,
        complete: () => {
            U = "finished"
        }
        ,
        sample: N => (x = 0,
        j(N))
    };
    return R
}
function _x(e) {
    let A;
    return () => (A === void 0 && (A = e()),
    A)
}
const Sx = _x( () => Object.hasOwnProperty.call(Element.prototype, "animate"))
  , Tx = new Set(["opacity", "clipPath", "filter", "transform", "backgroundColor"])
  , Io = 10
  , Lx = 2e4
  , bx = (e, A) => A.type === "spring" || e === "backgroundColor" || !cy(A.ease);
function Dx(e, A, {onUpdate: t, onComplete: r, ...n}) {
    if (!(Sx() && Tx.has(A) && !n.repeatDelay && n.repeatType !== "mirror" && n.damping !== 0 && n.type !== "inertia"))
        return !1;
    let s = !1, o, a, l = !1;
    const u = () => {
        a = new Promise(m => {
            o = m
        }
        )
    }
    ;
    u();
    let {keyframes: c, duration: f=300, ease: d, times: B} = n;
    if (bx(A, n)) {
        const m = $a({
            ...n,
            repeat: 0,
            delay: 0
        });
        let C = {
            done: !1,
            value: c[0]
        };
        const v = [];
        let Q = 0;
        for (; !C.done && Q < Lx; )
            C = m.sample(Q),
            v.push(C.value),
            Q += Io;
        B = void 0,
        c = v,
        f = Q - Io,
        d = "linear"
    }
    const h = jU(e.owner.current, A, c, {
        ...n,
        duration: f,
        ease: d,
        times: B
    })
      , y = () => {
        l = !1,
        h.cancel()
    }
      , p = () => {
        l = !0,
        iA.update(y),
        o(),
        u()
    }
    ;
    return h.onfinish = () => {
        l || (e.set(zU(c, n)),
        r && r(),
        p())
    }
    ,
    {
        then(m, C) {
            return a.then(m, C)
        },
        attachTimeline(m) {
            return h.timeline = m,
            h.onfinish = null,
            FA
        },
        get time() {
            return St(h.currentTime || 0)
        },
        set time(m) {
            h.currentTime = Zr(m)
        },
        get speed() {
            return h.playbackRate
        },
        set speed(m) {
            h.playbackRate = m
        },
        get duration() {
            return St(f)
        },
        play: () => {
            s || (h.play(),
            Kt(y))
        }
        ,
        pause: () => h.pause(),
        stop: () => {
            if (s = !0,
            h.playState === "idle")
                return;
            const {currentTime: m} = h;
            if (m) {
                const C = $a({
                    ...n,
                    autoplay: !1
                });
                e.setWithVelocity(C.sample(m - Io).value, C.sample(m).value, Io)
            }
            p()
        }
        ,
        complete: () => {
            l || h.finish()
        }
        ,
        cancel: p
    }
}
function kx({keyframes: e, delay: A, onUpdate: t, onComplete: r}) {
    const n = () => (t && t(e[e.length - 1]),
    r && r(),
    {
        time: 0,
        speed: 1,
        duration: 0,
        play: FA,
        pause: FA,
        stop: FA,
        then: i => (i(),
        Promise.resolve()),
        cancel: FA,
        complete: FA
    });
    return A ? $a({
        keyframes: [0, 1],
        duration: 0,
        delay: A,
        onComplete: n
    }) : n()
}
const Mx = {
    type: "spring",
    stiffness: 500,
    damping: 25,
    restSpeed: 10
}
  , Kx = e => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10
})
  , Px = {
    type: "keyframes",
    duration: .8
}
  , Ox = {
    type: "keyframes",
    ease: [.25, .1, .35, 1],
    duration: .3
}
  , Nx = (e, {keyframes: A}) => A.length > 2 ? Px : hn.has(e) ? e.startsWith("scale") ? Kx(A[1]) : Mx : Ox
  , df = (e, A) => e === "zIndex" ? !1 : !!(typeof A == "number" || Array.isArray(A) || typeof A == "string" && (Qr.test(A) || A === "0") && !A.startsWith("url("))
  , Rx = new Set(["brightness", "contrast", "saturate", "opacity"]);
function Vx(e) {
    const [A,t] = e.slice(0, -1).split("(");
    if (A === "drop-shadow")
        return e;
    const [r] = t.match(Kl) || [];
    if (!r)
        return e;
    const n = t.replace(r, "");
    let i = Rx.has(A) ? 1 : 0;
    return r !== t && (i *= 100),
    A + "(" + i + n + ")"
}
const Gx = /([a-z-]*)\(.*?\)/g
  , hf = {
    ...Qr,
    getAnimatableNone: e => {
        const A = e.match(Gx);
        return A ? A.map(Vx).join(" ") : e
    }
}
  , jx = {
    ...Ww,
    color: ee,
    backgroundColor: ee,
    outlineColor: ee,
    fill: ee,
    stroke: ee,
    borderColor: ee,
    borderTopColor: ee,
    borderRightColor: ee,
    borderBottomColor: ee,
    borderLeftColor: ee,
    filter: hf,
    WebkitFilter: hf
}
  , gh = e => jx[e];
function Dy(e, A) {
    let t = gh(e);
    return t !== hf && (t = Qr),
    t.getAnimatableNone ? t.getAnimatableNone(A) : void 0
}
const ky = e => /^0[^.\s]+$/.test(e);
function zx(e) {
    if (typeof e == "number")
        return e === 0;
    if (e !== null)
        return e === "none" || e === "0" || ky(e)
}
function Xx(e, A, t, r) {
    const n = df(A, t);
    let i;
    Array.isArray(t) ? i = [...t] : i = [null, t];
    const s = r.from !== void 0 ? r.from : e.get();
    let o;
    const a = [];
    for (let l = 0; l < i.length; l++)
        i[l] === null && (i[l] = l === 0 ? s : i[l - 1]),
        zx(i[l]) && a.push(l),
        typeof i[l] == "string" && i[l] !== "none" && i[l] !== "0" && (o = i[l]);
    if (n && a.length && o)
        for (let l = 0; l < a.length; l++) {
            const u = a[l];
            i[u] = Dy(A, o)
        }
    return i
}
function Wx({when: e, delay: A, delayChildren: t, staggerChildren: r, staggerDirection: n, repeat: i, repeatType: s, repeatDelay: o, from: a, elapsed: l, ...u}) {
    return !!Object.keys(u).length
}
function Bh(e, A) {
    return e[A] || e.default || e
}
const Yx = {
    skipAnimations: !1
}
  , ph = (e, A, t, r={}) => n => {
    const i = Bh(r, e) || {}
      , s = i.delay || r.delay || 0;
    let {elapsed: o=0} = r;
    o = o - Zr(s);
    const a = Xx(A, e, t, i)
      , l = a[0]
      , u = a[a.length - 1]
      , c = df(e, l)
      , f = df(e, u);
    let d = {
        keyframes: a,
        velocity: A.getVelocity(),
        ease: "easeOut",
        ...i,
        delay: -o,
        onUpdate: B => {
            A.set(B),
            i.onUpdate && i.onUpdate(B)
        }
        ,
        onComplete: () => {
            n(),
            i.onComplete && i.onComplete()
        }
    };
    if (Wx(i) || (d = {
        ...d,
        ...Nx(e, d)
    }),
    d.duration && (d.duration = Zr(d.duration)),
    d.repeatDelay && (d.repeatDelay = Zr(d.repeatDelay)),
    !c || !f || GU.current || i.type === !1 || Yx.skipAnimations)
        return kx(d);
    if (!r.isHandoff && A.owner && A.owner.current instanceof HTMLElement && !A.owner.getProps().onUpdate) {
        const B = Dx(A, e, d);
        if (B)
            return B
    }
    return $a(d)
}
;
function Za(e) {
    return !!(pe(e) && e.add)
}
const My = e => /^\-?\d*\.?\d+$/.test(e);
function mh(e, A) {
    e.indexOf(A) === -1 && e.push(A)
}
function wh(e, A) {
    const t = e.indexOf(A);
    t > -1 && e.splice(t, 1)
}
class yh {
    constructor() {
        this.subscriptions = []
    }
    add(A) {
        return mh(this.subscriptions, A),
        () => wh(this.subscriptions, A)
    }
    notify(A, t, r) {
        const n = this.subscriptions.length;
        if (n)
            if (n === 1)
                this.subscriptions[0](A, t, r);
            else
                for (let i = 0; i < n; i++) {
                    const s = this.subscriptions[i];
                    s && s(A, t, r)
                }
    }
    getSize() {
        return this.subscriptions.length
    }
    clear() {
        this.subscriptions.length = 0
    }
}
const Jx = e => !isNaN(parseFloat(e));
class $x {
    constructor(A, t={}) {
        this.version = "10.18.0",
        this.timeDelta = 0,
        this.lastUpdated = 0,
        this.canTrackVelocity = !1,
        this.events = {},
        this.updateAndNotify = (r, n=!0) => {
            this.prev = this.current,
            this.current = r;
            const {delta: i, timestamp: s} = WA;
            this.lastUpdated !== s && (this.timeDelta = i,
            this.lastUpdated = s,
            iA.postRender(this.scheduleVelocityCheck)),
            this.prev !== this.current && this.events.change && this.events.change.notify(this.current),
            this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()),
            n && this.events.renderRequest && this.events.renderRequest.notify(this.current)
        }
        ,
        this.scheduleVelocityCheck = () => iA.postRender(this.velocityCheck),
        this.velocityCheck = ({timestamp: r}) => {
            r !== this.lastUpdated && (this.prev = this.current,
            this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()))
        }
        ,
        this.hasAnimated = !1,
        this.prev = this.current = A,
        this.canTrackVelocity = Jx(this.current),
        this.owner = t.owner
    }
    onChange(A) {
        return this.on("change", A)
    }
    on(A, t) {
        this.events[A] || (this.events[A] = new yh);
        const r = this.events[A].add(t);
        return A === "change" ? () => {
            r(),
            iA.read( () => {
                this.events.change.getSize() || this.stop()
            }
            )
        }
        : r
    }
    clearListeners() {
        for (const A in this.events)
            this.events[A].clear()
    }
    attach(A, t) {
        this.passiveEffect = A,
        this.stopPassiveEffect = t
    }
    set(A, t=!0) {
        !t || !this.passiveEffect ? this.updateAndNotify(A, t) : this.passiveEffect(A, this.updateAndNotify)
    }
    setWithVelocity(A, t, r) {
        this.set(t),
        this.prev = A,
        this.timeDelta = r
    }
    jump(A) {
        this.updateAndNotify(A),
        this.prev = A,
        this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect()
    }
    get() {
        return this.current
    }
    getPrevious() {
        return this.prev
    }
    getVelocity() {
        return this.canTrackVelocity ? Ty(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta) : 0
    }
    start(A) {
        return this.stop(),
        new Promise(t => {
            this.hasAnimated = !0,
            this.animation = A(t),
            this.events.animationStart && this.events.animationStart.notify()
        }
        ).then( () => {
            this.events.animationComplete && this.events.animationComplete.notify(),
            this.clearAnimation()
        }
        )
    }
    stop() {
        this.animation && (this.animation.stop(),
        this.events.animationCancel && this.events.animationCancel.notify()),
        this.clearAnimation()
    }
    isAnimating() {
        return !!this.animation
    }
    clearAnimation() {
        delete this.animation
    }
    destroy() {
        this.clearListeners(),
        this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect()
    }
}
function ui(e, A) {
    return new $x(e,A)
}
const Ky = e => A => A.test(e)
  , Zx = {
    test: e => e === "auto",
    parse: e => e
}
  , Py = [gn, G, Bt, Gt, sU, iU, Zx]
  , Si = e => Py.find(Ky(e))
  , qx = [...Py, ee, Qr]
  , AE = e => qx.find(Ky(e));
function eE(e, A, t) {
    e.hasValue(A) ? e.getValue(A).set(t) : e.addValue(A, ui(t))
}
function tE(e, A) {
    const t = Ol(e, A);
    let {transitionEnd: r={}, transition: n={}, ...i} = t ? e.makeTargetAnimatable(t, !1) : {};
    i = {
        ...i,
        ...r
    };
    for (const s in i) {
        const o = yU(i[s]);
        eE(e, s, o)
    }
}
function rE(e, A, t) {
    var r, n;
    const i = Object.keys(A).filter(o => !e.hasValue(o))
      , s = i.length;
    if (s)
        for (let o = 0; o < s; o++) {
            const a = i[o]
              , l = A[a];
            let u = null;
            Array.isArray(l) && (u = l[0]),
            u === null && (u = (n = (r = t[a]) !== null && r !== void 0 ? r : e.readValue(a)) !== null && n !== void 0 ? n : A[a]),
            u != null && (typeof u == "string" && (My(u) || ky(u)) ? u = parseFloat(u) : !AE(u) && Qr.test(l) && (u = Dy(a, l)),
            e.addValue(a, ui(u, {
                owner: e
            })),
            t[a] === void 0 && (t[a] = u),
            u !== null && e.setBaseTarget(a, u))
        }
}
function nE(e, A) {
    return A ? (A[e] || A.default || A).from : void 0
}
function iE(e, A, t) {
    const r = {};
    for (const n in e) {
        const i = nE(n, A);
        if (i !== void 0)
            r[n] = i;
        else {
            const s = t.getValue(n);
            s && (r[n] = s.get())
        }
    }
    return r
}
function sE({protectedKeys: e, needsAnimating: A}, t) {
    const r = e.hasOwnProperty(t) && A[t] !== !0;
    return A[t] = !1,
    r
}
function oE(e, A) {
    const t = e.get();
    if (Array.isArray(A)) {
        for (let r = 0; r < A.length; r++)
            if (A[r] !== t)
                return !0
    } else
        return t !== A
}
function Oy(e, A, {delay: t=0, transitionOverride: r, type: n}={}) {
    let {transition: i=e.getDefaultTransition(), transitionEnd: s, ...o} = e.makeTargetAnimatable(A);
    const a = e.getValue("willChange");
    r && (i = r);
    const l = []
      , u = n && e.animationState && e.animationState.getState()[n];
    for (const c in o) {
        const f = e.getValue(c)
          , d = o[c];
        if (!f || d === void 0 || u && sE(u, c))
            continue;
        const B = {
            delay: t,
            elapsed: 0,
            ...Bh(i || {}, c)
        };
        if (window.HandoffAppearAnimations) {
            const p = e.getProps()[Nw];
            if (p) {
                const g = window.HandoffAppearAnimations(p, c, f, iA);
                g !== null && (B.elapsed = g,
                B.isHandoff = !0)
            }
        }
        let h = !B.isHandoff && !oE(f, d);
        if (B.type === "spring" && (f.getVelocity() || B.velocity) && (h = !1),
        f.animation && (h = !1),
        h)
            continue;
        f.start(ph(c, f, d, e.shouldReduceMotion && hn.has(c) ? {
            type: !1
        } : B));
        const y = f.animation;
        Za(a) && (a.add(c),
        y.then( () => a.remove(c))),
        l.push(y)
    }
    return s && Promise.all(l).then( () => {
        s && tE(e, s)
    }
    ),
    l
}
function gf(e, A, t={}) {
    const r = Ol(e, A, t.custom);
    let {transition: n=e.getDefaultTransition() || {}} = r || {};
    t.transitionOverride && (n = t.transitionOverride);
    const i = r ? () => Promise.all(Oy(e, r, t)) : () => Promise.resolve()
      , s = e.variantChildren && e.variantChildren.size ? (a=0) => {
        const {delayChildren: l=0, staggerChildren: u, staggerDirection: c} = n;
        return aE(e, A, l + a, u, c, t)
    }
    : () => Promise.resolve()
      , {when: o} = n;
    if (o) {
        const [a,l] = o === "beforeChildren" ? [i, s] : [s, i];
        return a().then( () => l())
    } else
        return Promise.all([i(), s(t.delay)])
}
function aE(e, A, t=0, r=0, n=1, i) {
    const s = []
      , o = (e.variantChildren.size - 1) * r
      , a = n === 1 ? (l=0) => l * r : (l=0) => o - l * r;
    return Array.from(e.variantChildren).sort(lE).forEach( (l, u) => {
        l.notify("AnimationStart", A),
        s.push(gf(l, A, {
            ...i,
            delay: t + a(u)
        }).then( () => l.notify("AnimationComplete", A)))
    }
    ),
    Promise.all(s)
}
function lE(e, A) {
    return e.sortNodePosition(A)
}
function uE(e, A, t={}) {
    e.notify("AnimationStart", A);
    let r;
    if (Array.isArray(A)) {
        const n = A.map(i => gf(e, i, t));
        r = Promise.all(n)
    } else if (typeof A == "string")
        r = gf(e, A, t);
    else {
        const n = typeof A == "function" ? Ol(e, A, t.custom) : A;
        r = Promise.all(Oy(e, n, t))
    }
    return r.then( () => e.notify("AnimationComplete", A))
}
const cE = [...th].reverse()
  , fE = th.length;
function dE(e) {
    return A => Promise.all(A.map( ({animation: t, options: r}) => uE(e, t, r)))
}
function hE(e) {
    let A = dE(e);
    const t = BE();
    let r = !0;
    const n = (a, l) => {
        const u = Ol(e, l);
        if (u) {
            const {transition: c, transitionEnd: f, ...d} = u;
            a = {
                ...a,
                ...d,
                ...f
            }
        }
        return a
    }
    ;
    function i(a) {
        A = a(e)
    }
    function s(a, l) {
        const u = e.getProps()
          , c = e.getVariantContext(!0) || {}
          , f = []
          , d = new Set;
        let B = {}
          , h = 1 / 0;
        for (let p = 0; p < fE; p++) {
            const g = cE[p]
              , m = t[g]
              , C = u[g] !== void 0 ? u[g] : c[g]
              , v = ks(C)
              , Q = g === l ? m.isActive : null;
            Q === !1 && (h = p);
            let U = C === c[g] && C !== u[g] && v;
            if (U && r && e.manuallyAnimateOnMount && (U = !1),
            m.protectedKeys = {
                ...B
            },
            !m.isActive && Q === null || !C && !m.prevProp || kl(C) || typeof C == "boolean")
                continue;
            let x = gE(m.prevProp, C) || g === l && m.isActive && !U && v || p > h && v
              , H = !1;
            const E = Array.isArray(C) ? C : [C];
            let L = E.reduce(n, {});
            Q === !1 && (L = {});
            const {prevResolvedValues: b={}} = m
              , D = {
                ...b,
                ...L
            }
              , j = T => {
                x = !0,
                d.has(T) && (H = !0,
                d.delete(T)),
                m.needsAnimating[T] = !0
            }
            ;
            for (const T in D) {
                const V = L[T]
                  , _ = b[T];
                if (B.hasOwnProperty(T))
                    continue;
                let K = !1;
                Xa(V) && Xa(_) ? K = !ly(V, _) : K = V !== _,
                K ? V !== void 0 ? j(T) : d.add(T) : V !== void 0 && d.has(T) ? j(T) : m.protectedKeys[T] = !0
            }
            m.prevProp = C,
            m.prevResolvedValues = L,
            m.isActive && (B = {
                ...B,
                ...L
            }),
            r && e.blockInitialAnimation && (x = !1),
            x && (!U || H) && f.push(...E.map(T => ({
                animation: T,
                options: {
                    type: g,
                    ...a
                }
            })))
        }
        if (d.size) {
            const p = {};
            d.forEach(g => {
                const m = e.getBaseTarget(g);
                m !== void 0 && (p[g] = m)
            }
            ),
            f.push({
                animation: p
            })
        }
        let y = !!f.length;
        return r && (u.initial === !1 || u.initial === u.animate) && !e.manuallyAnimateOnMount && (y = !1),
        r = !1,
        y ? A(f) : Promise.resolve()
    }
    function o(a, l, u) {
        var c;
        if (t[a].isActive === l)
            return Promise.resolve();
        (c = e.variantChildren) === null || c === void 0 || c.forEach(d => {
            var B;
            return (B = d.animationState) === null || B === void 0 ? void 0 : B.setActive(a, l)
        }
        ),
        t[a].isActive = l;
        const f = s(u, a);
        for (const d in t)
            t[d].protectedKeys = {};
        return f
    }
    return {
        animateChanges: s,
        setActive: o,
        setAnimateFunction: i,
        getState: () => t
    }
}
function gE(e, A) {
    return typeof A == "string" ? A !== e : Array.isArray(A) ? !ly(A, e) : !1
}
function Lr(e=!1) {
    return {
        isActive: e,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {}
    }
}
function BE() {
    return {
        animate: Lr(!0),
        whileInView: Lr(),
        whileHover: Lr(),
        whileTap: Lr(),
        whileDrag: Lr(),
        whileFocus: Lr(),
        exit: Lr()
    }
}
class pE extends _r {
    constructor(A) {
        super(A),
        A.animationState || (A.animationState = hE(A))
    }
    updateAnimationControlsSubscription() {
        const {animate: A} = this.node.getProps();
        this.unmount(),
        kl(A) && (this.unmount = A.subscribe(this.node))
    }
    mount() {
        this.updateAnimationControlsSubscription()
    }
    update() {
        const {animate: A} = this.node.getProps()
          , {animate: t} = this.node.prevProps || {};
        A !== t && this.updateAnimationControlsSubscription()
    }
    unmount() {}
}
let mE = 0;
class wE extends _r {
    constructor() {
        super(...arguments),
        this.id = mE++
    }
    update() {
        if (!this.node.presenceContext)
            return;
        const {isPresent: A, onExitComplete: t, custom: r} = this.node.presenceContext
          , {isPresent: n} = this.node.prevPresenceContext || {};
        if (!this.node.animationState || A === n)
            return;
        const i = this.node.animationState.setActive("exit", !A, {
            custom: r ?? this.node.getProps().custom
        });
        t && !A && i.then( () => t(this.id))
    }
    mount() {
        const {register: A} = this.node.presenceContext || {};
        A && (this.unmount = A(this.id))
    }
    unmount() {}
}
const yE = {
    animation: {
        Feature: pE
    },
    exit: {
        Feature: wE
    }
}
  , wB = (e, A) => Math.abs(e - A);
function CE(e, A) {
    const t = wB(e.x, A.x)
      , r = wB(e.y, A.y);
    return Math.sqrt(t ** 2 + r ** 2)
}
class Ny {
    constructor(A, t, {transformPagePoint: r, contextWindow: n, dragSnapToOrigin: i=!1}={}) {
        if (this.startEvent = null,
        this.lastMoveEvent = null,
        this.lastMoveEventInfo = null,
        this.handlers = {},
        this.contextWindow = window,
        this.updatePoint = () => {
            if (!(this.lastMoveEvent && this.lastMoveEventInfo))
                return;
            const c = ku(this.lastMoveEventInfo, this.history)
              , f = this.startEvent !== null
              , d = CE(c.offset, {
                x: 0,
                y: 0
            }) >= 3;
            if (!f && !d)
                return;
            const {point: B} = c
              , {timestamp: h} = WA;
            this.history.push({
                ...B,
                timestamp: h
            });
            const {onStart: y, onMove: p} = this.handlers;
            f || (y && y(this.lastMoveEvent, c),
            this.startEvent = this.lastMoveEvent),
            p && p(this.lastMoveEvent, c)
        }
        ,
        this.handlePointerMove = (c, f) => {
            this.lastMoveEvent = c,
            this.lastMoveEventInfo = Du(f, this.transformPagePoint),
            iA.update(this.updatePoint, !0)
        }
        ,
        this.handlePointerUp = (c, f) => {
            this.end();
            const {onEnd: d, onSessionEnd: B, resumeAnimation: h} = this.handlers;
            if (this.dragSnapToOrigin && h && h(),
            !(this.lastMoveEvent && this.lastMoveEventInfo))
                return;
            const y = ku(c.type === "pointercancel" ? this.lastMoveEventInfo : Du(f, this.transformPagePoint), this.history);
            this.startEvent && d && d(c, y),
            B && B(c, y)
        }
        ,
        !ny(A))
            return;
        this.dragSnapToOrigin = i,
        this.handlers = t,
        this.transformPagePoint = r,
        this.contextWindow = n || window;
        const s = Pl(A)
          , o = Du(s, this.transformPagePoint)
          , {point: a} = o
          , {timestamp: l} = WA;
        this.history = [{
            ...a,
            timestamp: l
        }];
        const {onSessionStart: u} = t;
        u && u(A, ku(o, this.history)),
        this.removeListeners = gr(_t(this.contextWindow, "pointermove", this.handlePointerMove), _t(this.contextWindow, "pointerup", this.handlePointerUp), _t(this.contextWindow, "pointercancel", this.handlePointerUp))
    }
    updateHandlers(A) {
        this.handlers = A
    }
    end() {
        this.removeListeners && this.removeListeners(),
        Kt(this.updatePoint)
    }
}
function Du(e, A) {
    return A ? {
        point: A(e.point)
    } : e
}
function yB(e, A) {
    return {
        x: e.x - A.x,
        y: e.y - A.y
    }
}
function ku({point: e}, A) {
    return {
        point: e,
        delta: yB(e, Ry(A)),
        offset: yB(e, vE(A)),
        velocity: QE(A, .1)
    }
}
function vE(e) {
    return e[0]
}
function Ry(e) {
    return e[e.length - 1]
}
function QE(e, A) {
    if (e.length < 2)
        return {
            x: 0,
            y: 0
        };
    let t = e.length - 1
      , r = null;
    const n = Ry(e);
    for (; t >= 0 && (r = e[t],
    !(n.timestamp - r.timestamp > Zr(A))); )
        t--;
    if (!r)
        return {
            x: 0,
            y: 0
        };
    const i = St(n.timestamp - r.timestamp);
    if (i === 0)
        return {
            x: 0,
            y: 0
        };
    const s = {
        x: (n.x - r.x) / i,
        y: (n.y - r.y) / i
    };
    return s.x === 1 / 0 && (s.x = 0),
    s.y === 1 / 0 && (s.y = 0),
    s
}
function _e(e) {
    return e.max - e.min
}
function Bf(e, A=0, t=.01) {
    return Math.abs(e - A) <= t
}
function CB(e, A, t, r=.5) {
    e.origin = r,
    e.originPoint = hA(A.min, A.max, e.origin),
    e.scale = _e(t) / _e(A),
    (Bf(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1),
    e.translate = hA(t.min, t.max, e.origin) - e.originPoint,
    (Bf(e.translate) || isNaN(e.translate)) && (e.translate = 0)
}
function ls(e, A, t, r) {
    CB(e.x, A.x, t.x, r ? r.originX : void 0),
    CB(e.y, A.y, t.y, r ? r.originY : void 0)
}
function vB(e, A, t) {
    e.min = t.min + A.min,
    e.max = e.min + _e(A)
}
function FE(e, A, t) {
    vB(e.x, A.x, t.x),
    vB(e.y, A.y, t.y)
}
function QB(e, A, t) {
    e.min = A.min - t.min,
    e.max = e.min + _e(A)
}
function us(e, A, t) {
    QB(e.x, A.x, t.x),
    QB(e.y, A.y, t.y)
}
function UE(e, {min: A, max: t}, r) {
    return A !== void 0 && e < A ? e = r ? hA(A, e, r.min) : Math.max(e, A) : t !== void 0 && e > t && (e = r ? hA(t, e, r.max) : Math.min(e, t)),
    e
}
function FB(e, A, t) {
    return {
        min: A !== void 0 ? e.min + A : void 0,
        max: t !== void 0 ? e.max + t - (e.max - e.min) : void 0
    }
}
function xE(e, {top: A, left: t, bottom: r, right: n}) {
    return {
        x: FB(e.x, t, n),
        y: FB(e.y, A, r)
    }
}
function UB(e, A) {
    let t = A.min - e.min
      , r = A.max - e.max;
    return A.max - A.min < e.max - e.min && ([t,r] = [r, t]),
    {
        min: t,
        max: r
    }
}
function EE(e, A) {
    return {
        x: UB(e.x, A.x),
        y: UB(e.y, A.y)
    }
}
function IE(e, A) {
    let t = .5;
    const r = _e(e)
      , n = _e(A);
    return n > r ? t = Ks(A.min, A.max - r, e.min) : r > n && (t = Ks(e.min, e.max - n, A.min)),
    vr(0, 1, t)
}
function HE(e, A) {
    const t = {};
    return A.min !== void 0 && (t.min = A.min - e.min),
    A.max !== void 0 && (t.max = A.max - e.min),
    t
}
const pf = .35;
function _E(e=pf) {
    return e === !1 ? e = 0 : e === !0 && (e = pf),
    {
        x: xB(e, "left", "right"),
        y: xB(e, "top", "bottom")
    }
}
function xB(e, A, t) {
    return {
        min: EB(e, A),
        max: EB(e, t)
    }
}
function EB(e, A) {
    return typeof e == "number" ? e : e[A] || 0
}
const IB = () => ({
    translate: 0,
    scale: 1,
    origin: 0,
    originPoint: 0
})
  , Nn = () => ({
    x: IB(),
    y: IB()
})
  , HB = () => ({
    min: 0,
    max: 0
})
  , EA = () => ({
    x: HB(),
    y: HB()
});
function ke(e) {
    return [e("x"), e("y")]
}
function Vy({top: e, left: A, right: t, bottom: r}) {
    return {
        x: {
            min: A,
            max: t
        },
        y: {
            min: e,
            max: r
        }
    }
}
function SE({x: e, y: A}) {
    return {
        top: A.min,
        right: e.max,
        bottom: A.max,
        left: e.min
    }
}
function TE(e, A) {
    if (!A)
        return e;
    const t = A({
        x: e.left,
        y: e.top
    })
      , r = A({
        x: e.right,
        y: e.bottom
    });
    return {
        top: t.y,
        left: t.x,
        bottom: r.y,
        right: r.x
    }
}
function Mu(e) {
    return e === void 0 || e === 1
}
function mf({scale: e, scaleX: A, scaleY: t}) {
    return !Mu(e) || !Mu(A) || !Mu(t)
}
function Pr(e) {
    return mf(e) || Gy(e) || e.z || e.rotate || e.rotateX || e.rotateY
}
function Gy(e) {
    return _B(e.x) || _B(e.y)
}
function _B(e) {
    return e && e !== "0%"
}
function qa(e, A, t) {
    const r = e - t
      , n = A * r;
    return t + n
}
function SB(e, A, t, r, n) {
    return n !== void 0 && (e = qa(e, n, r)),
    qa(e, t, r) + A
}
function wf(e, A=0, t=1, r, n) {
    e.min = SB(e.min, A, t, r, n),
    e.max = SB(e.max, A, t, r, n)
}
function jy(e, {x: A, y: t}) {
    wf(e.x, A.translate, A.scale, A.originPoint),
    wf(e.y, t.translate, t.scale, t.originPoint)
}
function LE(e, A, t, r=!1) {
    const n = t.length;
    if (!n)
        return;
    A.x = A.y = 1;
    let i, s;
    for (let o = 0; o < n; o++) {
        i = t[o],
        s = i.projectionDelta;
        const a = i.instance;
        a && a.style && a.style.display === "contents" || (r && i.options.layoutScroll && i.scroll && i !== i.root && Rn(e, {
            x: -i.scroll.offset.x,
            y: -i.scroll.offset.y
        }),
        s && (A.x *= s.x.scale,
        A.y *= s.y.scale,
        jy(e, s)),
        r && Pr(i.latestValues) && Rn(e, i.latestValues))
    }
    A.x = TB(A.x),
    A.y = TB(A.y)
}
function TB(e) {
    return Number.isInteger(e) || e > 1.0000000000001 || e < .999999999999 ? e : 1
}
function Yt(e, A) {
    e.min = e.min + A,
    e.max = e.max + A
}
function LB(e, A, [t,r,n]) {
    const i = A[n] !== void 0 ? A[n] : .5
      , s = hA(e.min, e.max, i);
    wf(e, A[t], A[r], s, A.scale)
}
const bE = ["x", "scaleX", "originX"]
  , DE = ["y", "scaleY", "originY"];
function Rn(e, A) {
    LB(e.x, A, bE),
    LB(e.y, A, DE)
}
function zy(e, A) {
    return Vy(TE(e.getBoundingClientRect(), A))
}
function kE(e, A, t) {
    const r = zy(e, t)
      , {scroll: n} = A;
    return n && (Yt(r.x, n.offset.x),
    Yt(r.y, n.offset.y)),
    r
}
const Xy = ({current: e}) => e ? e.ownerDocument.defaultView : null
  , ME = new WeakMap;
class KE {
    constructor(A) {
        this.openGlobalLock = null,
        this.isDragging = !1,
        this.currentDirection = null,
        this.originPoint = {
            x: 0,
            y: 0
        },
        this.constraints = !1,
        this.hasMutatedConstraints = !1,
        this.elastic = EA(),
        this.visualElement = A
    }
    start(A, {snapToCursor: t=!1}={}) {
        const {presenceContext: r} = this.visualElement;
        if (r && r.isPresent === !1)
            return;
        const n = u => {
            const {dragSnapToOrigin: c} = this.getProps();
            c ? this.pauseAnimation() : this.stopAnimation(),
            t && this.snapToCursor(Pl(u, "page").point)
        }
          , i = (u, c) => {
            const {drag: f, dragPropagation: d, onDragStart: B} = this.getProps();
            if (f && !d && (this.openGlobalLock && this.openGlobalLock(),
            this.openGlobalLock = sy(f),
            !this.openGlobalLock))
                return;
            this.isDragging = !0,
            this.currentDirection = null,
            this.resolveConstraints(),
            this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0,
            this.visualElement.projection.target = void 0),
            ke(y => {
                let p = this.getAxisMotionValue(y).get() || 0;
                if (Bt.test(p)) {
                    const {projection: g} = this.visualElement;
                    if (g && g.layout) {
                        const m = g.layout.layoutBox[y];
                        m && (p = _e(m) * (parseFloat(p) / 100))
                    }
                }
                this.originPoint[y] = p
            }
            ),
            B && iA.update( () => B(u, c), !1, !0);
            const {animationState: h} = this.visualElement;
            h && h.setActive("whileDrag", !0)
        }
          , s = (u, c) => {
            const {dragPropagation: f, dragDirectionLock: d, onDirectionLock: B, onDrag: h} = this.getProps();
            if (!f && !this.openGlobalLock)
                return;
            const {offset: y} = c;
            if (d && this.currentDirection === null) {
                this.currentDirection = PE(y),
                this.currentDirection !== null && B && B(this.currentDirection);
                return
            }
            this.updateAxis("x", c.point, y),
            this.updateAxis("y", c.point, y),
            this.visualElement.render(),
            h && h(u, c)
        }
          , o = (u, c) => this.stop(u, c)
          , a = () => ke(u => {
            var c;
            return this.getAnimationState(u) === "paused" && ((c = this.getAxisMotionValue(u).animation) === null || c === void 0 ? void 0 : c.play())
        }
        )
          , {dragSnapToOrigin: l} = this.getProps();
        this.panSession = new Ny(A,{
            onSessionStart: n,
            onStart: i,
            onMove: s,
            onSessionEnd: o,
            resumeAnimation: a
        },{
            transformPagePoint: this.visualElement.getTransformPagePoint(),
            dragSnapToOrigin: l,
            contextWindow: Xy(this.visualElement)
        })
    }
    stop(A, t) {
        const r = this.isDragging;
        if (this.cancel(),
        !r)
            return;
        const {velocity: n} = t;
        this.startAnimation(n);
        const {onDragEnd: i} = this.getProps();
        i && iA.update( () => i(A, t))
    }
    cancel() {
        this.isDragging = !1;
        const {projection: A, animationState: t} = this.visualElement;
        A && (A.isAnimationBlocked = !1),
        this.panSession && this.panSession.end(),
        this.panSession = void 0;
        const {dragPropagation: r} = this.getProps();
        !r && this.openGlobalLock && (this.openGlobalLock(),
        this.openGlobalLock = null),
        t && t.setActive("whileDrag", !1)
    }
    updateAxis(A, t, r) {
        const {drag: n} = this.getProps();
        if (!r || !Ho(A, n, this.currentDirection))
            return;
        const i = this.getAxisMotionValue(A);
        let s = this.originPoint[A] + r[A];
        this.constraints && this.constraints[A] && (s = UE(s, this.constraints[A], this.elastic[A])),
        i.set(s)
    }
    resolveConstraints() {
        var A;
        const {dragConstraints: t, dragElastic: r} = this.getProps()
          , n = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (A = this.visualElement.projection) === null || A === void 0 ? void 0 : A.layout
          , i = this.constraints;
        t && Pn(t) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : t && n ? this.constraints = xE(n.layoutBox, t) : this.constraints = !1,
        this.elastic = _E(r),
        i !== this.constraints && n && this.constraints && !this.hasMutatedConstraints && ke(s => {
            this.getAxisMotionValue(s) && (this.constraints[s] = HE(n.layoutBox[s], this.constraints[s]))
        }
        )
    }
    resolveRefConstraints() {
        const {dragConstraints: A, onMeasureDragConstraints: t} = this.getProps();
        if (!A || !Pn(A))
            return !1;
        const r = A.current
          , {projection: n} = this.visualElement;
        if (!n || !n.layout)
            return !1;
        const i = kE(r, n.root, this.visualElement.getTransformPagePoint());
        let s = EE(n.layout.layoutBox, i);
        if (t) {
            const o = t(SE(s));
            this.hasMutatedConstraints = !!o,
            o && (s = Vy(o))
        }
        return s
    }
    startAnimation(A) {
        const {drag: t, dragMomentum: r, dragElastic: n, dragTransition: i, dragSnapToOrigin: s, onDragTransitionEnd: o} = this.getProps()
          , a = this.constraints || {}
          , l = ke(u => {
            if (!Ho(u, t, this.currentDirection))
                return;
            let c = a && a[u] || {};
            s && (c = {
                min: 0,
                max: 0
            });
            const f = n ? 200 : 1e6
              , d = n ? 40 : 1e7
              , B = {
                type: "inertia",
                velocity: r ? A[u] : 0,
                bounceStiffness: f,
                bounceDamping: d,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...i,
                ...c
            };
            return this.startAxisValueAnimation(u, B)
        }
        );
        return Promise.all(l).then(o)
    }
    startAxisValueAnimation(A, t) {
        const r = this.getAxisMotionValue(A);
        return r.start(ph(A, r, 0, t))
    }
    stopAnimation() {
        ke(A => this.getAxisMotionValue(A).stop())
    }
    pauseAnimation() {
        ke(A => {
            var t;
            return (t = this.getAxisMotionValue(A).animation) === null || t === void 0 ? void 0 : t.pause()
        }
        )
    }
    getAnimationState(A) {
        var t;
        return (t = this.getAxisMotionValue(A).animation) === null || t === void 0 ? void 0 : t.state
    }
    getAxisMotionValue(A) {
        const t = "_drag" + A.toUpperCase()
          , r = this.visualElement.getProps()
          , n = r[t];
        return n || this.visualElement.getValue(A, (r.initial ? r.initial[A] : void 0) || 0)
    }
    snapToCursor(A) {
        ke(t => {
            const {drag: r} = this.getProps();
            if (!Ho(t, r, this.currentDirection))
                return;
            const {projection: n} = this.visualElement
              , i = this.getAxisMotionValue(t);
            if (n && n.layout) {
                const {min: s, max: o} = n.layout.layoutBox[t];
                i.set(A[t] - hA(s, o, .5))
            }
        }
        )
    }
    scalePositionWithinConstraints() {
        if (!this.visualElement.current)
            return;
        const {drag: A, dragConstraints: t} = this.getProps()
          , {projection: r} = this.visualElement;
        if (!Pn(t) || !r || !this.constraints)
            return;
        this.stopAnimation();
        const n = {
            x: 0,
            y: 0
        };
        ke(s => {
            const o = this.getAxisMotionValue(s);
            if (o) {
                const a = o.get();
                n[s] = IE({
                    min: a,
                    max: a
                }, this.constraints[s])
            }
        }
        );
        const {transformTemplate: i} = this.visualElement.getProps();
        this.visualElement.current.style.transform = i ? i({}, "") : "none",
        r.root && r.root.updateScroll(),
        r.updateLayout(),
        this.resolveConstraints(),
        ke(s => {
            if (!Ho(s, A, null))
                return;
            const o = this.getAxisMotionValue(s)
              , {min: a, max: l} = this.constraints[s];
            o.set(hA(a, l, n[s]))
        }
        )
    }
    addListeners() {
        if (!this.visualElement.current)
            return;
        ME.set(this.visualElement, this);
        const A = this.visualElement.current
          , t = _t(A, "pointerdown", a => {
            const {drag: l, dragListener: u=!0} = this.getProps();
            l && u && this.start(a)
        }
        )
          , r = () => {
            const {dragConstraints: a} = this.getProps();
            Pn(a) && (this.constraints = this.resolveRefConstraints())
        }
          , {projection: n} = this.visualElement
          , i = n.addEventListener("measure", r);
        n && !n.layout && (n.root && n.root.updateScroll(),
        n.updateLayout()),
        r();
        const s = It(window, "resize", () => this.scalePositionWithinConstraints())
          , o = n.addEventListener("didUpdate", ({delta: a, hasLayoutChanged: l}) => {
            this.isDragging && l && (ke(u => {
                const c = this.getAxisMotionValue(u);
                c && (this.originPoint[u] += a[u].translate,
                c.set(c.get() + a[u].translate))
            }
            ),
            this.visualElement.render())
        }
        );
        return () => {
            s(),
            t(),
            i(),
            o && o()
        }
    }
    getProps() {
        const A = this.visualElement.getProps()
          , {drag: t=!1, dragDirectionLock: r=!1, dragPropagation: n=!1, dragConstraints: i=!1, dragElastic: s=pf, dragMomentum: o=!0} = A;
        return {
            ...A,
            drag: t,
            dragDirectionLock: r,
            dragPropagation: n,
            dragConstraints: i,
            dragElastic: s,
            dragMomentum: o
        }
    }
}
function Ho(e, A, t) {
    return (A === !0 || A === e) && (t === null || t === e)
}
function PE(e, A=10) {
    let t = null;
    return Math.abs(e.y) > A ? t = "y" : Math.abs(e.x) > A && (t = "x"),
    t
}
class OE extends _r {
    constructor(A) {
        super(A),
        this.removeGroupControls = FA,
        this.removeListeners = FA,
        this.controls = new KE(A)
    }
    mount() {
        const {dragControls: A} = this.node.getProps();
        A && (this.removeGroupControls = A.subscribe(this.controls)),
        this.removeListeners = this.controls.addListeners() || FA
    }
    unmount() {
        this.removeGroupControls(),
        this.removeListeners()
    }
}
const bB = e => (A, t) => {
    e && iA.update( () => e(A, t))
}
;
class NE extends _r {
    constructor() {
        super(...arguments),
        this.removePointerDownListener = FA
    }
    onPointerDown(A) {
        this.session = new Ny(A,this.createPanHandlers(),{
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: Xy(this.node)
        })
    }
    createPanHandlers() {
        const {onPanSessionStart: A, onPanStart: t, onPan: r, onPanEnd: n} = this.node.getProps();
        return {
            onSessionStart: bB(A),
            onStart: bB(t),
            onMove: r,
            onEnd: (i, s) => {
                delete this.session,
                n && iA.update( () => n(i, s))
            }
        }
    }
    mount() {
        this.removePointerDownListener = _t(this.node.current, "pointerdown", A => this.onPointerDown(A))
    }
    update() {
        this.session && this.session.updateHandlers(this.createPanHandlers())
    }
    unmount() {
        this.removePointerDownListener(),
        this.session && this.session.end()
    }
}
function RE() {
    const e = I.useContext(bl);
    if (e === null)
        return [!0, null];
    const {isPresent: A, onExitComplete: t, register: r} = e
      , n = I.useId();
    return I.useEffect( () => r(n), []),
    !A && t ? [!1, () => t && t(n)] : [!0]
}
const da = {
    hasAnimatedSinceResize: !0,
    hasEverUpdated: !1
};
function DB(e, A) {
    return A.max === A.min ? 0 : e / (A.max - A.min) * 100
}
const Ti = {
    correct: (e, A) => {
        if (!A.target)
            return e;
        if (typeof e == "string")
            if (G.test(e))
                e = parseFloat(e);
            else
                return e;
        const t = DB(e, A.target.x)
          , r = DB(e, A.target.y);
        return `${t}% ${r}%`
    }
}
  , VE = {
    correct: (e, {treeScale: A, projectionDelta: t}) => {
        const r = e
          , n = Qr.parse(e);
        if (n.length > 5)
            return r;
        const i = Qr.createTransformer(e)
          , s = typeof n[0] != "number" ? 1 : 0
          , o = t.x.scale * A.x
          , a = t.y.scale * A.y;
        n[0 + s] /= o,
        n[1 + s] /= a;
        const l = hA(o, a, .5);
        return typeof n[2 + s] == "number" && (n[2 + s] /= l),
        typeof n[3 + s] == "number" && (n[3 + s] /= l),
        i(n)
    }
};
class GE extends D0.Component {
    componentDidMount() {
        const {visualElement: A, layoutGroup: t, switchLayoutGroup: r, layoutId: n} = this.props
          , {projection: i} = A;
        Z1(jE),
        i && (t.group && t.group.add(i),
        r && r.register && n && r.register(i),
        i.root.didUpdate(),
        i.addEventListener("animationComplete", () => {
            this.safeToRemove()
        }
        ),
        i.setOptions({
            ...i.options,
            onExitComplete: () => this.safeToRemove()
        })),
        da.hasEverUpdated = !0
    }
    getSnapshotBeforeUpdate(A) {
        const {layoutDependency: t, visualElement: r, drag: n, isPresent: i} = this.props
          , s = r.projection;
        return s && (s.isPresent = i,
        n || A.layoutDependency !== t || t === void 0 ? s.willUpdate() : this.safeToRemove(),
        A.isPresent !== i && (i ? s.promote() : s.relegate() || iA.postRender( () => {
            const o = s.getStack();
            (!o || !o.members.length) && this.safeToRemove()
        }
        ))),
        null
    }
    componentDidUpdate() {
        const {projection: A} = this.props.visualElement;
        A && (A.root.didUpdate(),
        queueMicrotask( () => {
            !A.currentAnimation && A.isLead() && this.safeToRemove()
        }
        ))
    }
    componentWillUnmount() {
        const {visualElement: A, layoutGroup: t, switchLayoutGroup: r} = this.props
          , {projection: n} = A;
        n && (n.scheduleCheckAfterUnmount(),
        t && t.group && t.group.remove(n),
        r && r.deregister && r.deregister(n))
    }
    safeToRemove() {
        const {safeToRemove: A} = this.props;
        A && A()
    }
    render() {
        return null
    }
}
function Wy(e) {
    const [A,t] = RE()
      , r = I.useContext(nh);
    return D0.createElement(GE, {
        ...e,
        layoutGroup: r,
        switchLayoutGroup: I.useContext(Vw),
        isPresent: A,
        safeToRemove: t
    })
}
const jE = {
    borderRadius: {
        ...Ti,
        applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
    },
    borderTopLeftRadius: Ti,
    borderTopRightRadius: Ti,
    borderBottomLeftRadius: Ti,
    borderBottomRightRadius: Ti,
    boxShadow: VE
}
  , Yy = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"]
  , zE = Yy.length
  , kB = e => typeof e == "string" ? parseFloat(e) : e
  , MB = e => typeof e == "number" || G.test(e);
function XE(e, A, t, r, n, i) {
    n ? (e.opacity = hA(0, t.opacity !== void 0 ? t.opacity : 1, WE(r)),
    e.opacityExit = hA(A.opacity !== void 0 ? A.opacity : 1, 0, YE(r))) : i && (e.opacity = hA(A.opacity !== void 0 ? A.opacity : 1, t.opacity !== void 0 ? t.opacity : 1, r));
    for (let s = 0; s < zE; s++) {
        const o = `border${Yy[s]}Radius`;
        let a = KB(A, o)
          , l = KB(t, o);
        if (a === void 0 && l === void 0)
            continue;
        a || (a = 0),
        l || (l = 0),
        a === 0 || l === 0 || MB(a) === MB(l) ? (e[o] = Math.max(hA(kB(a), kB(l), r), 0),
        (Bt.test(l) || Bt.test(a)) && (e[o] += "%")) : e[o] = l
    }
    (A.rotate || t.rotate) && (e.rotate = hA(A.rotate || 0, t.rotate || 0, r))
}
function KB(e, A) {
    return e[A] !== void 0 ? e[A] : e.borderRadius
}
const WE = Jy(0, .5, my)
  , YE = Jy(.5, .95, FA);
function Jy(e, A, t) {
    return r => r < e ? 0 : r > A ? 1 : t(Ks(e, A, r))
}
function PB(e, A) {
    e.min = A.min,
    e.max = A.max
}
function De(e, A) {
    PB(e.x, A.x),
    PB(e.y, A.y)
}
function OB(e, A, t, r, n) {
    return e -= A,
    e = qa(e, 1 / t, r),
    n !== void 0 && (e = qa(e, 1 / n, r)),
    e
}
function JE(e, A=0, t=1, r=.5, n, i=e, s=e) {
    if (Bt.test(A) && (A = parseFloat(A),
    A = hA(s.min, s.max, A / 100) - s.min),
    typeof A != "number")
        return;
    let o = hA(i.min, i.max, r);
    e === i && (o -= A),
    e.min = OB(e.min, A, t, o, n),
    e.max = OB(e.max, A, t, o, n)
}
function NB(e, A, [t,r,n], i, s) {
    JE(e, A[t], A[r], A[n], A.scale, i, s)
}
const $E = ["x", "scaleX", "originX"]
  , ZE = ["y", "scaleY", "originY"];
function RB(e, A, t, r) {
    NB(e.x, A, $E, t ? t.x : void 0, r ? r.x : void 0),
    NB(e.y, A, ZE, t ? t.y : void 0, r ? r.y : void 0)
}
function VB(e) {
    return e.translate === 0 && e.scale === 1
}
function $y(e) {
    return VB(e.x) && VB(e.y)
}
function qE(e, A) {
    return e.x.min === A.x.min && e.x.max === A.x.max && e.y.min === A.y.min && e.y.max === A.y.max
}
function Zy(e, A) {
    return Math.round(e.x.min) === Math.round(A.x.min) && Math.round(e.x.max) === Math.round(A.x.max) && Math.round(e.y.min) === Math.round(A.y.min) && Math.round(e.y.max) === Math.round(A.y.max)
}
function GB(e) {
    return _e(e.x) / _e(e.y)
}
class AI {
    constructor() {
        this.members = []
    }
    add(A) {
        mh(this.members, A),
        A.scheduleRender()
    }
    remove(A) {
        if (wh(this.members, A),
        A === this.prevLead && (this.prevLead = void 0),
        A === this.lead) {
            const t = this.members[this.members.length - 1];
            t && this.promote(t)
        }
    }
    relegate(A) {
        const t = this.members.findIndex(n => A === n);
        if (t === 0)
            return !1;
        let r;
        for (let n = t; n >= 0; n--) {
            const i = this.members[n];
            if (i.isPresent !== !1) {
                r = i;
                break
            }
        }
        return r ? (this.promote(r),
        !0) : !1
    }
    promote(A, t) {
        const r = this.lead;
        if (A !== r && (this.prevLead = r,
        this.lead = A,
        A.show(),
        r)) {
            r.instance && r.scheduleRender(),
            A.scheduleRender(),
            A.resumeFrom = r,
            t && (A.resumeFrom.preserveOpacity = !0),
            r.snapshot && (A.snapshot = r.snapshot,
            A.snapshot.latestValues = r.animationValues || r.latestValues),
            A.root && A.root.isUpdating && (A.isLayoutDirty = !0);
            const {crossfade: n} = A.options;
            n === !1 && r.hide()
        }
    }
    exitAnimationComplete() {
        this.members.forEach(A => {
            const {options: t, resumingFrom: r} = A;
            t.onExitComplete && t.onExitComplete(),
            r && r.options.onExitComplete && r.options.onExitComplete()
        }
        )
    }
    scheduleRender() {
        this.members.forEach(A => {
            A.instance && A.scheduleRender(!1)
        }
        )
    }
    removeLeadSnapshot() {
        this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
    }
}
function jB(e, A, t) {
    let r = "";
    const n = e.x.translate / A.x
      , i = e.y.translate / A.y;
    if ((n || i) && (r = `translate3d(${n}px, ${i}px, 0) `),
    (A.x !== 1 || A.y !== 1) && (r += `scale(${1 / A.x}, ${1 / A.y}) `),
    t) {
        const {rotate: a, rotateX: l, rotateY: u} = t;
        a && (r += `rotate(${a}deg) `),
        l && (r += `rotateX(${l}deg) `),
        u && (r += `rotateY(${u}deg) `)
    }
    const s = e.x.scale * A.x
      , o = e.y.scale * A.y;
    return (s !== 1 || o !== 1) && (r += `scale(${s}, ${o})`),
    r || "none"
}
const eI = (e, A) => e.depth - A.depth;
class tI {
    constructor() {
        this.children = [],
        this.isDirty = !1
    }
    add(A) {
        mh(this.children, A),
        this.isDirty = !0
    }
    remove(A) {
        wh(this.children, A),
        this.isDirty = !0
    }
    forEach(A) {
        this.isDirty && this.children.sort(eI),
        this.isDirty = !1,
        this.children.forEach(A)
    }
}
function rI(e, A) {
    const t = performance.now()
      , r = ({timestamp: n}) => {
        const i = n - t;
        i >= A && (Kt(r),
        e(i - A))
    }
    ;
    return iA.read(r, !0),
    () => Kt(r)
}
function nI(e) {
    window.MotionDebug && window.MotionDebug.record(e)
}
function iI(e) {
    return e instanceof SVGElement && e.tagName !== "svg"
}
function sI(e, A, t) {
    const r = pe(e) ? e : ui(e);
    return r.start(ph("", r, A, t)),
    r.animation
}
const zB = ["", "X", "Y", "Z"]
  , oI = {
    visibility: "hidden"
}
  , XB = 1e3;
let aI = 0;
const Or = {
    type: "projectionFrame",
    totalNodes: 0,
    resolvedTargetDeltas: 0,
    recalculatedProjection: 0
};
function qy({attachResizeListener: e, defaultParent: A, measureScroll: t, checkIsScrollRoot: r, resetTransform: n}) {
    return class {
        constructor(s={}, o=A == null ? void 0 : A()) {
            this.id = aI++,
            this.animationId = 0,
            this.children = new Set,
            this.options = {},
            this.isTreeAnimating = !1,
            this.isAnimationBlocked = !1,
            this.isLayoutDirty = !1,
            this.isProjectionDirty = !1,
            this.isSharedProjectionDirty = !1,
            this.isTransformDirty = !1,
            this.updateManuallyBlocked = !1,
            this.updateBlockedByResize = !1,
            this.isUpdating = !1,
            this.isSVG = !1,
            this.needsReset = !1,
            this.shouldResetTransform = !1,
            this.treeScale = {
                x: 1,
                y: 1
            },
            this.eventHandlers = new Map,
            this.hasTreeAnimated = !1,
            this.updateScheduled = !1,
            this.projectionUpdateScheduled = !1,
            this.checkUpdateFailed = () => {
                this.isUpdating && (this.isUpdating = !1,
                this.clearAllSnapshots())
            }
            ,
            this.updateProjection = () => {
                this.projectionUpdateScheduled = !1,
                Or.totalNodes = Or.resolvedTargetDeltas = Or.recalculatedProjection = 0,
                this.nodes.forEach(cI),
                this.nodes.forEach(BI),
                this.nodes.forEach(pI),
                this.nodes.forEach(fI),
                nI(Or)
            }
            ,
            this.hasProjected = !1,
            this.isVisible = !0,
            this.animationProgress = 0,
            this.sharedNodes = new Map,
            this.latestValues = s,
            this.root = o ? o.root || o : this,
            this.path = o ? [...o.path, o] : [],
            this.parent = o,
            this.depth = o ? o.depth + 1 : 0;
            for (let a = 0; a < this.path.length; a++)
                this.path[a].shouldResetTransform = !0;
            this.root === this && (this.nodes = new tI)
        }
        addEventListener(s, o) {
            return this.eventHandlers.has(s) || this.eventHandlers.set(s, new yh),
            this.eventHandlers.get(s).add(o)
        }
        notifyListeners(s, ...o) {
            const a = this.eventHandlers.get(s);
            a && a.notify(...o)
        }
        hasListeners(s) {
            return this.eventHandlers.has(s)
        }
        mount(s, o=this.root.hasTreeAnimated) {
            if (this.instance)
                return;
            this.isSVG = iI(s),
            this.instance = s;
            const {layoutId: a, layout: l, visualElement: u} = this.options;
            if (u && !u.current && u.mount(s),
            this.root.nodes.add(this),
            this.parent && this.parent.children.add(this),
            o && (l || a) && (this.isLayoutDirty = !0),
            e) {
                let c;
                const f = () => this.root.updateBlockedByResize = !1;
                e(s, () => {
                    this.root.updateBlockedByResize = !0,
                    c && c(),
                    c = rI(f, 250),
                    da.hasAnimatedSinceResize && (da.hasAnimatedSinceResize = !1,
                    this.nodes.forEach(YB))
                }
                )
            }
            a && this.root.registerSharedNode(a, this),
            this.options.animate !== !1 && u && (a || l) && this.addEventListener("didUpdate", ({delta: c, hasLayoutChanged: f, hasRelativeTargetChanged: d, layout: B}) => {
                if (this.isTreeAnimationBlocked()) {
                    this.target = void 0,
                    this.relativeTarget = void 0;
                    return
                }
                const h = this.options.transition || u.getDefaultTransition() || vI
                  , {onLayoutAnimationStart: y, onLayoutAnimationComplete: p} = u.getProps()
                  , g = !this.targetLayout || !Zy(this.targetLayout, B) || d
                  , m = !f && d;
                if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || m || f && (g || !this.currentAnimation)) {
                    this.resumeFrom && (this.resumingFrom = this.resumeFrom,
                    this.resumingFrom.resumingFrom = void 0),
                    this.setAnimationOrigin(c, m);
                    const C = {
                        ...Bh(h, "layout"),
                        onPlay: y,
                        onComplete: p
                    };
                    (u.shouldReduceMotion || this.options.layoutRoot) && (C.delay = 0,
                    C.type = !1),
                    this.startAnimation(C)
                } else
                    f || YB(this),
                    this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                this.targetLayout = B
            }
            )
        }
        unmount() {
            this.options.layoutId && this.willUpdate(),
            this.root.nodes.remove(this);
            const s = this.getStack();
            s && s.remove(this),
            this.parent && this.parent.children.delete(this),
            this.instance = void 0,
            Kt(this.updateProjection)
        }
        blockUpdate() {
            this.updateManuallyBlocked = !0
        }
        unblockUpdate() {
            this.updateManuallyBlocked = !1
        }
        isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize
        }
        isTreeAnimationBlocked() {
            return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
        }
        startUpdate() {
            this.isUpdateBlocked() || (this.isUpdating = !0,
            this.nodes && this.nodes.forEach(mI),
            this.animationId++)
        }
        getTransformTemplate() {
            const {visualElement: s} = this.options;
            return s && s.getProps().transformTemplate
        }
        willUpdate(s=!0) {
            if (this.root.hasTreeAnimated = !0,
            this.root.isUpdateBlocked()) {
                this.options.onExitComplete && this.options.onExitComplete();
                return
            }
            if (!this.root.isUpdating && this.root.startUpdate(),
            this.isLayoutDirty)
                return;
            this.isLayoutDirty = !0;
            for (let u = 0; u < this.path.length; u++) {
                const c = this.path[u];
                c.shouldResetTransform = !0,
                c.updateScroll("snapshot"),
                c.options.layoutRoot && c.willUpdate(!1)
            }
            const {layoutId: o, layout: a} = this.options;
            if (o === void 0 && !a)
                return;
            const l = this.getTransformTemplate();
            this.prevTransformTemplateValue = l ? l(this.latestValues, "") : void 0,
            this.updateSnapshot(),
            s && this.notifyListeners("willUpdate")
        }
        update() {
            if (this.updateScheduled = !1,
            this.isUpdateBlocked()) {
                this.unblockUpdate(),
                this.clearAllSnapshots(),
                this.nodes.forEach(WB);
                return
            }
            this.isUpdating || this.nodes.forEach(hI),
            this.isUpdating = !1,
            this.nodes.forEach(gI),
            this.nodes.forEach(lI),
            this.nodes.forEach(uI),
            this.clearAllSnapshots();
            const o = performance.now();
            WA.delta = vr(0, 1e3 / 60, o - WA.timestamp),
            WA.timestamp = o,
            WA.isProcessing = !0,
            Eu.update.process(WA),
            Eu.preRender.process(WA),
            Eu.render.process(WA),
            WA.isProcessing = !1
        }
        didUpdate() {
            this.updateScheduled || (this.updateScheduled = !0,
            queueMicrotask( () => this.update()))
        }
        clearAllSnapshots() {
            this.nodes.forEach(dI),
            this.sharedNodes.forEach(wI)
        }
        scheduleUpdateProjection() {
            this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0,
            iA.preRender(this.updateProjection, !1, !0))
        }
        scheduleCheckAfterUnmount() {
            iA.postRender( () => {
                this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
            }
            )
        }
        updateSnapshot() {
            this.snapshot || !this.instance || (this.snapshot = this.measure())
        }
        updateLayout() {
            if (!this.instance || (this.updateScroll(),
            !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
                return;
            if (this.resumeFrom && !this.resumeFrom.instance)
                for (let a = 0; a < this.path.length; a++)
                    this.path[a].updateScroll();
            const s = this.layout;
            this.layout = this.measure(!1),
            this.layoutCorrected = EA(),
            this.isLayoutDirty = !1,
            this.projectionDelta = void 0,
            this.notifyListeners("measure", this.layout.layoutBox);
            const {visualElement: o} = this.options;
            o && o.notify("LayoutMeasure", this.layout.layoutBox, s ? s.layoutBox : void 0)
        }
        updateScroll(s="measure") {
            let o = !!(this.options.layoutScroll && this.instance);
            this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === s && (o = !1),
            o && (this.scroll = {
                animationId: this.root.animationId,
                phase: s,
                isRoot: r(this.instance),
                offset: t(this.instance)
            })
        }
        resetTransform() {
            if (!n)
                return;
            const s = this.isLayoutDirty || this.shouldResetTransform
              , o = this.projectionDelta && !$y(this.projectionDelta)
              , a = this.getTransformTemplate()
              , l = a ? a(this.latestValues, "") : void 0
              , u = l !== this.prevTransformTemplateValue;
            s && (o || Pr(this.latestValues) || u) && (n(this.instance, l),
            this.shouldResetTransform = !1,
            this.scheduleRender())
        }
        measure(s=!0) {
            const o = this.measurePageBox();
            let a = this.removeElementScroll(o);
            return s && (a = this.removeTransform(a)),
            QI(a),
            {
                animationId: this.root.animationId,
                measuredBox: o,
                layoutBox: a,
                latestValues: {},
                source: this.id
            }
        }
        measurePageBox() {
            const {visualElement: s} = this.options;
            if (!s)
                return EA();
            const o = s.measureViewportBox()
              , {scroll: a} = this.root;
            return a && (Yt(o.x, a.offset.x),
            Yt(o.y, a.offset.y)),
            o
        }
        removeElementScroll(s) {
            const o = EA();
            De(o, s);
            for (let a = 0; a < this.path.length; a++) {
                const l = this.path[a]
                  , {scroll: u, options: c} = l;
                if (l !== this.root && u && c.layoutScroll) {
                    if (u.isRoot) {
                        De(o, s);
                        const {scroll: f} = this.root;
                        f && (Yt(o.x, -f.offset.x),
                        Yt(o.y, -f.offset.y))
                    }
                    Yt(o.x, u.offset.x),
                    Yt(o.y, u.offset.y)
                }
            }
            return o
        }
        applyTransform(s, o=!1) {
            const a = EA();
            De(a, s);
            for (let l = 0; l < this.path.length; l++) {
                const u = this.path[l];
                !o && u.options.layoutScroll && u.scroll && u !== u.root && Rn(a, {
                    x: -u.scroll.offset.x,
                    y: -u.scroll.offset.y
                }),
                Pr(u.latestValues) && Rn(a, u.latestValues)
            }
            return Pr(this.latestValues) && Rn(a, this.latestValues),
            a
        }
        removeTransform(s) {
            const o = EA();
            De(o, s);
            for (let a = 0; a < this.path.length; a++) {
                const l = this.path[a];
                if (!l.instance || !Pr(l.latestValues))
                    continue;
                mf(l.latestValues) && l.updateSnapshot();
                const u = EA()
                  , c = l.measurePageBox();
                De(u, c),
                RB(o, l.latestValues, l.snapshot ? l.snapshot.layoutBox : void 0, u)
            }
            return Pr(this.latestValues) && RB(o, this.latestValues),
            o
        }
        setTargetDelta(s) {
            this.targetDelta = s,
            this.root.scheduleUpdateProjection(),
            this.isProjectionDirty = !0
        }
        setOptions(s) {
            this.options = {
                ...this.options,
                ...s,
                crossfade: s.crossfade !== void 0 ? s.crossfade : !0
            }
        }
        clearMeasurements() {
            this.scroll = void 0,
            this.layout = void 0,
            this.snapshot = void 0,
            this.prevTransformTemplateValue = void 0,
            this.targetDelta = void 0,
            this.target = void 0,
            this.isLayoutDirty = !1
        }
        forceRelativeParentToResolveTarget() {
            this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== WA.timestamp && this.relativeParent.resolveTargetDelta(!0)
        }
        resolveTargetDelta(s=!1) {
            var o;
            const a = this.getLead();
            this.isProjectionDirty || (this.isProjectionDirty = a.isProjectionDirty),
            this.isTransformDirty || (this.isTransformDirty = a.isTransformDirty),
            this.isSharedProjectionDirty || (this.isSharedProjectionDirty = a.isSharedProjectionDirty);
            const l = !!this.resumingFrom || this !== a;
            if (!(s || l && this.isSharedProjectionDirty || this.isProjectionDirty || !((o = this.parent) === null || o === void 0) && o.isProjectionDirty || this.attemptToResolveRelativeTarget))
                return;
            const {layout: c, layoutId: f} = this.options;
            if (!(!this.layout || !(c || f))) {
                if (this.resolvedRelativeTargetAt = WA.timestamp,
                !this.targetDelta && !this.relativeTarget) {
                    const d = this.getClosestProjectingParent();
                    d && d.layout && this.animationProgress !== 1 ? (this.relativeParent = d,
                    this.forceRelativeParentToResolveTarget(),
                    this.relativeTarget = EA(),
                    this.relativeTargetOrigin = EA(),
                    us(this.relativeTargetOrigin, this.layout.layoutBox, d.layout.layoutBox),
                    De(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                }
                if (!(!this.relativeTarget && !this.targetDelta)) {
                    if (this.target || (this.target = EA(),
                    this.targetWithTransforms = EA()),
                    this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(),
                    FE(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : De(this.target, this.layout.layoutBox),
                    jy(this.target, this.targetDelta)) : De(this.target, this.layout.layoutBox),
                    this.attemptToResolveRelativeTarget) {
                        this.attemptToResolveRelativeTarget = !1;
                        const d = this.getClosestProjectingParent();
                        d && !!d.resumingFrom == !!this.resumingFrom && !d.options.layoutScroll && d.target && this.animationProgress !== 1 ? (this.relativeParent = d,
                        this.forceRelativeParentToResolveTarget(),
                        this.relativeTarget = EA(),
                        this.relativeTargetOrigin = EA(),
                        us(this.relativeTargetOrigin, this.target, d.target),
                        De(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                    }
                    Or.resolvedTargetDeltas++
                }
            }
        }
        getClosestProjectingParent() {
            if (!(!this.parent || mf(this.parent.latestValues) || Gy(this.parent.latestValues)))
                return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
        }
        isProjecting() {
            return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
        }
        calcProjection() {
            var s;
            const o = this.getLead()
              , a = !!this.resumingFrom || this !== o;
            let l = !0;
            if ((this.isProjectionDirty || !((s = this.parent) === null || s === void 0) && s.isProjectionDirty) && (l = !1),
            a && (this.isSharedProjectionDirty || this.isTransformDirty) && (l = !1),
            this.resolvedRelativeTargetAt === WA.timestamp && (l = !1),
            l)
                return;
            const {layout: u, layoutId: c} = this.options;
            if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation),
            this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
            !this.layout || !(u || c))
                return;
            De(this.layoutCorrected, this.layout.layoutBox);
            const f = this.treeScale.x
              , d = this.treeScale.y;
            LE(this.layoutCorrected, this.treeScale, this.path, a),
            o.layout && !o.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (o.target = o.layout.layoutBox);
            const {target: B} = o;
            if (!B) {
                this.projectionTransform && (this.projectionDelta = Nn(),
                this.projectionTransform = "none",
                this.scheduleRender());
                return
            }
            this.projectionDelta || (this.projectionDelta = Nn(),
            this.projectionDeltaWithTransform = Nn());
            const h = this.projectionTransform;
            ls(this.projectionDelta, this.layoutCorrected, B, this.latestValues),
            this.projectionTransform = jB(this.projectionDelta, this.treeScale),
            (this.projectionTransform !== h || this.treeScale.x !== f || this.treeScale.y !== d) && (this.hasProjected = !0,
            this.scheduleRender(),
            this.notifyListeners("projectionUpdate", B)),
            Or.recalculatedProjection++
        }
        hide() {
            this.isVisible = !1
        }
        show() {
            this.isVisible = !0
        }
        scheduleRender(s=!0) {
            if (this.options.scheduleRender && this.options.scheduleRender(),
            s) {
                const o = this.getStack();
                o && o.scheduleRender()
            }
            this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
        }
        setAnimationOrigin(s, o=!1) {
            const a = this.snapshot
              , l = a ? a.latestValues : {}
              , u = {
                ...this.latestValues
            }
              , c = Nn();
            (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0),
            this.attemptToResolveRelativeTarget = !o;
            const f = EA()
              , d = a ? a.source : void 0
              , B = this.layout ? this.layout.source : void 0
              , h = d !== B
              , y = this.getStack()
              , p = !y || y.members.length <= 1
              , g = !!(h && !p && this.options.crossfade === !0 && !this.path.some(CI));
            this.animationProgress = 0;
            let m;
            this.mixTargetDelta = C => {
                const v = C / 1e3;
                JB(c.x, s.x, v),
                JB(c.y, s.y, v),
                this.setTargetDelta(c),
                this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (us(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
                yI(this.relativeTarget, this.relativeTargetOrigin, f, v),
                m && qE(this.relativeTarget, m) && (this.isProjectionDirty = !1),
                m || (m = EA()),
                De(m, this.relativeTarget)),
                h && (this.animationValues = u,
                XE(u, l, this.latestValues, v, g, p)),
                this.root.scheduleUpdateProjection(),
                this.scheduleRender(),
                this.animationProgress = v
            }
            ,
            this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
        }
        startAnimation(s) {
            this.notifyListeners("animationStart"),
            this.currentAnimation && this.currentAnimation.stop(),
            this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(),
            this.pendingAnimation && (Kt(this.pendingAnimation),
            this.pendingAnimation = void 0),
            this.pendingAnimation = iA.update( () => {
                da.hasAnimatedSinceResize = !0,
                this.currentAnimation = sI(0, XB, {
                    ...s,
                    onUpdate: o => {
                        this.mixTargetDelta(o),
                        s.onUpdate && s.onUpdate(o)
                    }
                    ,
                    onComplete: () => {
                        s.onComplete && s.onComplete(),
                        this.completeAnimation()
                    }
                }),
                this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation),
                this.pendingAnimation = void 0
            }
            )
        }
        completeAnimation() {
            this.resumingFrom && (this.resumingFrom.currentAnimation = void 0,
            this.resumingFrom.preserveOpacity = void 0);
            const s = this.getStack();
            s && s.exitAnimationComplete(),
            this.resumingFrom = this.currentAnimation = this.animationValues = void 0,
            this.notifyListeners("animationComplete")
        }
        finishAnimation() {
            this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(XB),
            this.currentAnimation.stop()),
            this.completeAnimation()
        }
        applyTransformsToTarget() {
            const s = this.getLead();
            let {targetWithTransforms: o, target: a, layout: l, latestValues: u} = s;
            if (!(!o || !a || !l)) {
                if (this !== s && this.layout && l && AC(this.options.animationType, this.layout.layoutBox, l.layoutBox)) {
                    a = this.target || EA();
                    const c = _e(this.layout.layoutBox.x);
                    a.x.min = s.target.x.min,
                    a.x.max = a.x.min + c;
                    const f = _e(this.layout.layoutBox.y);
                    a.y.min = s.target.y.min,
                    a.y.max = a.y.min + f
                }
                De(o, a),
                Rn(o, u),
                ls(this.projectionDeltaWithTransform, this.layoutCorrected, o, u)
            }
        }
        registerSharedNode(s, o) {
            this.sharedNodes.has(s) || this.sharedNodes.set(s, new AI),
            this.sharedNodes.get(s).add(o);
            const l = o.options.initialPromotionConfig;
            o.promote({
                transition: l ? l.transition : void 0,
                preserveFollowOpacity: l && l.shouldPreserveFollowOpacity ? l.shouldPreserveFollowOpacity(o) : void 0
            })
        }
        isLead() {
            const s = this.getStack();
            return s ? s.lead === this : !0
        }
        getLead() {
            var s;
            const {layoutId: o} = this.options;
            return o ? ((s = this.getStack()) === null || s === void 0 ? void 0 : s.lead) || this : this
        }
        getPrevLead() {
            var s;
            const {layoutId: o} = this.options;
            return o ? (s = this.getStack()) === null || s === void 0 ? void 0 : s.prevLead : void 0
        }
        getStack() {
            const {layoutId: s} = this.options;
            if (s)
                return this.root.sharedNodes.get(s)
        }
        promote({needsReset: s, transition: o, preserveFollowOpacity: a}={}) {
            const l = this.getStack();
            l && l.promote(this, a),
            s && (this.projectionDelta = void 0,
            this.needsReset = !0),
            o && this.setOptions({
                transition: o
            })
        }
        relegate() {
            const s = this.getStack();
            return s ? s.relegate(this) : !1
        }
        resetRotation() {
            const {visualElement: s} = this.options;
            if (!s)
                return;
            let o = !1;
            const {latestValues: a} = s;
            if ((a.rotate || a.rotateX || a.rotateY || a.rotateZ) && (o = !0),
            !o)
                return;
            const l = {};
            for (let u = 0; u < zB.length; u++) {
                const c = "rotate" + zB[u];
                a[c] && (l[c] = a[c],
                s.setStaticValue(c, 0))
            }
            s.render();
            for (const u in l)
                s.setStaticValue(u, l[u]);
            s.scheduleRender()
        }
        getProjectionStyles(s) {
            var o, a;
            if (!this.instance || this.isSVG)
                return;
            if (!this.isVisible)
                return oI;
            const l = {
                visibility: ""
            }
              , u = this.getTransformTemplate();
            if (this.needsReset)
                return this.needsReset = !1,
                l.opacity = "",
                l.pointerEvents = fa(s == null ? void 0 : s.pointerEvents) || "",
                l.transform = u ? u(this.latestValues, "") : "none",
                l;
            const c = this.getLead();
            if (!this.projectionDelta || !this.layout || !c.target) {
                const h = {};
                return this.options.layoutId && (h.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1,
                h.pointerEvents = fa(s == null ? void 0 : s.pointerEvents) || ""),
                this.hasProjected && !Pr(this.latestValues) && (h.transform = u ? u({}, "") : "none",
                this.hasProjected = !1),
                h
            }
            const f = c.animationValues || c.latestValues;
            this.applyTransformsToTarget(),
            l.transform = jB(this.projectionDeltaWithTransform, this.treeScale, f),
            u && (l.transform = u(f, l.transform));
            const {x: d, y: B} = this.projectionDelta;
            l.transformOrigin = `${d.origin * 100}% ${B.origin * 100}% 0`,
            c.animationValues ? l.opacity = c === this ? (a = (o = f.opacity) !== null && o !== void 0 ? o : this.latestValues.opacity) !== null && a !== void 0 ? a : 1 : this.preserveOpacity ? this.latestValues.opacity : f.opacityExit : l.opacity = c === this ? f.opacity !== void 0 ? f.opacity : "" : f.opacityExit !== void 0 ? f.opacityExit : 0;
            for (const h in ja) {
                if (f[h] === void 0)
                    continue;
                const {correct: y, applyTo: p} = ja[h]
                  , g = l.transform === "none" ? f[h] : y(f[h], c);
                if (p) {
                    const m = p.length;
                    for (let C = 0; C < m; C++)
                        l[p[C]] = g
                } else
                    l[h] = g
            }
            return this.options.layoutId && (l.pointerEvents = c === this ? fa(s == null ? void 0 : s.pointerEvents) || "" : "none"),
            l
        }
        clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0
        }
        resetTree() {
            this.root.nodes.forEach(s => {
                var o;
                return (o = s.currentAnimation) === null || o === void 0 ? void 0 : o.stop()
            }
            ),
            this.root.nodes.forEach(WB),
            this.root.sharedNodes.clear()
        }
    }
}
function lI(e) {
    e.updateLayout()
}
function uI(e) {
    var A;
    const t = ((A = e.resumeFrom) === null || A === void 0 ? void 0 : A.snapshot) || e.snapshot;
    if (e.isLead() && e.layout && t && e.hasListeners("didUpdate")) {
        const {layoutBox: r, measuredBox: n} = e.layout
          , {animationType: i} = e.options
          , s = t.source !== e.layout.source;
        i === "size" ? ke(c => {
            const f = s ? t.measuredBox[c] : t.layoutBox[c]
              , d = _e(f);
            f.min = r[c].min,
            f.max = f.min + d
        }
        ) : AC(i, t.layoutBox, r) && ke(c => {
            const f = s ? t.measuredBox[c] : t.layoutBox[c]
              , d = _e(r[c]);
            f.max = f.min + d,
            e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0,
            e.relativeTarget[c].max = e.relativeTarget[c].min + d)
        }
        );
        const o = Nn();
        ls(o, r, t.layoutBox);
        const a = Nn();
        s ? ls(a, e.applyTransform(n, !0), t.measuredBox) : ls(a, r, t.layoutBox);
        const l = !$y(o);
        let u = !1;
        if (!e.resumeFrom) {
            const c = e.getClosestProjectingParent();
            if (c && !c.resumeFrom) {
                const {snapshot: f, layout: d} = c;
                if (f && d) {
                    const B = EA();
                    us(B, t.layoutBox, f.layoutBox);
                    const h = EA();
                    us(h, r, d.layoutBox),
                    Zy(B, h) || (u = !0),
                    c.options.layoutRoot && (e.relativeTarget = h,
                    e.relativeTargetOrigin = B,
                    e.relativeParent = c)
                }
            }
        }
        e.notifyListeners("didUpdate", {
            layout: r,
            snapshot: t,
            delta: a,
            layoutDelta: o,
            hasLayoutChanged: l,
            hasRelativeTargetChanged: u
        })
    } else if (e.isLead()) {
        const {onExitComplete: r} = e.options;
        r && r()
    }
    e.options.transition = void 0
}
function cI(e) {
    Or.totalNodes++,
    e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
    e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)),
    e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty))
}
function fI(e) {
    e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1
}
function dI(e) {
    e.clearSnapshot()
}
function WB(e) {
    e.clearMeasurements()
}
function hI(e) {
    e.isLayoutDirty = !1
}
function gI(e) {
    const {visualElement: A} = e.options;
    A && A.getProps().onBeforeLayoutMeasure && A.notify("BeforeLayoutMeasure"),
    e.resetTransform()
}
function YB(e) {
    e.finishAnimation(),
    e.targetDelta = e.relativeTarget = e.target = void 0,
    e.isProjectionDirty = !0
}
function BI(e) {
    e.resolveTargetDelta()
}
function pI(e) {
    e.calcProjection()
}
function mI(e) {
    e.resetRotation()
}
function wI(e) {
    e.removeLeadSnapshot()
}
function JB(e, A, t) {
    e.translate = hA(A.translate, 0, t),
    e.scale = hA(A.scale, 1, t),
    e.origin = A.origin,
    e.originPoint = A.originPoint
}
function $B(e, A, t, r) {
    e.min = hA(A.min, t.min, r),
    e.max = hA(A.max, t.max, r)
}
function yI(e, A, t, r) {
    $B(e.x, A.x, t.x, r),
    $B(e.y, A.y, t.y, r)
}
function CI(e) {
    return e.animationValues && e.animationValues.opacityExit !== void 0
}
const vI = {
    duration: .45,
    ease: [.4, 0, .1, 1]
}
  , ZB = e => typeof navigator < "u" && navigator.userAgent.toLowerCase().includes(e)
  , qB = ZB("applewebkit/") && !ZB("chrome/") ? Math.round : FA;
function Ap(e) {
    e.min = qB(e.min),
    e.max = qB(e.max)
}
function QI(e) {
    Ap(e.x),
    Ap(e.y)
}
function AC(e, A, t) {
    return e === "position" || e === "preserve-aspect" && !Bf(GB(A), GB(t), .2)
}
const FI = qy({
    attachResizeListener: (e, A) => It(e, "resize", A),
    measureScroll: () => ({
        x: document.documentElement.scrollLeft || document.body.scrollLeft,
        y: document.documentElement.scrollTop || document.body.scrollTop
    }),
    checkIsScrollRoot: () => !0
})
  , Ku = {
    current: void 0
}
  , eC = qy({
    measureScroll: e => ({
        x: e.scrollLeft,
        y: e.scrollTop
    }),
    defaultParent: () => {
        if (!Ku.current) {
            const e = new FI({});
            e.mount(window),
            e.setOptions({
                layoutScroll: !0
            }),
            Ku.current = e
        }
        return Ku.current
    }
    ,
    resetTransform: (e, A) => {
        e.style.transform = A !== void 0 ? A : "none"
    }
    ,
    checkIsScrollRoot: e => window.getComputedStyle(e).position === "fixed"
})
  , UI = {
    pan: {
        Feature: NE
    },
    drag: {
        Feature: OE,
        ProjectionNode: eC,
        MeasureLayout: Wy
    }
}
  , xI = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function EI(e) {
    const A = xI.exec(e);
    if (!A)
        return [, ];
    const [,t,r] = A;
    return [t, r]
}
function yf(e, A, t=1) {
    const [r,n] = EI(e);
    if (!r)
        return;
    const i = window.getComputedStyle(A).getPropertyValue(r);
    if (i) {
        const s = i.trim();
        return My(s) ? parseFloat(s) : s
    } else
        return lf(n) ? yf(n, A, t + 1) : n
}
function II(e, {...A}, t) {
    const r = e.current;
    if (!(r instanceof Element))
        return {
            target: A,
            transitionEnd: t
        };
    t && (t = {
        ...t
    }),
    e.values.forEach(n => {
        const i = n.get();
        if (!lf(i))
            return;
        const s = yf(i, r);
        s && n.set(s)
    }
    );
    for (const n in A) {
        const i = A[n];
        if (!lf(i))
            continue;
        const s = yf(i, r);
        s && (A[n] = s,
        t || (t = {}),
        t[n] === void 0 && (t[n] = i))
    }
    return {
        target: A,
        transitionEnd: t
    }
}
const HI = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y", "translateX", "translateY"])
  , tC = e => HI.has(e)
  , _I = e => Object.keys(e).some(tC)
  , ep = e => e === gn || e === G
  , tp = (e, A) => parseFloat(e.split(", ")[A])
  , rp = (e, A) => (t, {transform: r}) => {
    if (r === "none" || !r)
        return 0;
    const n = r.match(/^matrix3d\((.+)\)$/);
    if (n)
        return tp(n[1], A);
    {
        const i = r.match(/^matrix\((.+)\)$/);
        return i ? tp(i[1], e) : 0
    }
}
  , SI = new Set(["x", "y", "z"])
  , TI = Ao.filter(e => !SI.has(e));
function LI(e) {
    const A = [];
    return TI.forEach(t => {
        const r = e.getValue(t);
        r !== void 0 && (A.push([t, r.get()]),
        r.set(t.startsWith("scale") ? 1 : 0))
    }
    ),
    A.length && e.render(),
    A
}
const ci = {
    width: ({x: e}, {paddingLeft: A="0", paddingRight: t="0"}) => e.max - e.min - parseFloat(A) - parseFloat(t),
    height: ({y: e}, {paddingTop: A="0", paddingBottom: t="0"}) => e.max - e.min - parseFloat(A) - parseFloat(t),
    top: (e, {top: A}) => parseFloat(A),
    left: (e, {left: A}) => parseFloat(A),
    bottom: ({y: e}, {top: A}) => parseFloat(A) + (e.max - e.min),
    right: ({x: e}, {left: A}) => parseFloat(A) + (e.max - e.min),
    x: rp(4, 13),
    y: rp(5, 14)
};
ci.translateX = ci.x;
ci.translateY = ci.y;
const bI = (e, A, t) => {
    const r = A.measureViewportBox()
      , n = A.current
      , i = getComputedStyle(n)
      , {display: s} = i
      , o = {};
    s === "none" && A.setStaticValue("display", e.display || "block"),
    t.forEach(l => {
        o[l] = ci[l](r, i)
    }
    ),
    A.render();
    const a = A.measureViewportBox();
    return t.forEach(l => {
        const u = A.getValue(l);
        u && u.jump(o[l]),
        e[l] = ci[l](a, i)
    }
    ),
    e
}
  , DI = (e, A, t={}, r={}) => {
    A = {
        ...A
    },
    r = {
        ...r
    };
    const n = Object.keys(A).filter(tC);
    let i = []
      , s = !1;
    const o = [];
    if (n.forEach(a => {
        const l = e.getValue(a);
        if (!e.hasValue(a))
            return;
        let u = t[a]
          , c = Si(u);
        const f = A[a];
        let d;
        if (Xa(f)) {
            const B = f.length
              , h = f[0] === null ? 1 : 0;
            u = f[h],
            c = Si(u);
            for (let y = h; y < B && f[y] !== null; y++)
                d ? Wa(Si(f[y]) === d) : d = Si(f[y])
        } else
            d = Si(f);
        if (c !== d)
            if (ep(c) && ep(d)) {
                const B = l.get();
                typeof B == "string" && l.set(parseFloat(B)),
                typeof f == "string" ? A[a] = parseFloat(f) : Array.isArray(f) && d === G && (A[a] = f.map(parseFloat))
            } else
                c != null && c.transform && (d != null && d.transform) && (u === 0 || f === 0) ? u === 0 ? l.set(d.transform(u)) : A[a] = c.transform(f) : (s || (i = LI(e),
                s = !0),
                o.push(a),
                r[a] = r[a] !== void 0 ? r[a] : A[a],
                l.jump(f))
    }
    ),
    o.length) {
        const a = o.indexOf("height") >= 0 ? window.pageYOffset : null
          , l = bI(A, e, o);
        return i.length && i.forEach( ([u,c]) => {
            e.getValue(u).set(c)
        }
        ),
        e.render(),
        Dl && a !== null && window.scrollTo({
            top: a
        }),
        {
            target: l,
            transitionEnd: r
        }
    } else
        return {
            target: A,
            transitionEnd: r
        }
}
;
function kI(e, A, t, r) {
    return _I(A) ? DI(e, A, t, r) : {
        target: A,
        transitionEnd: r
    }
}
const MI = (e, A, t, r) => {
    const n = II(e, A, r);
    return A = n.target,
    r = n.transitionEnd,
    kI(e, A, t, r)
}
  , Cf = {
    current: null
}
  , rC = {
    current: !1
};
function KI() {
    if (rC.current = !0,
    !!Dl)
        if (window.matchMedia) {
            const e = window.matchMedia("(prefers-reduced-motion)")
              , A = () => Cf.current = e.matches;
            e.addListener(A),
            A()
        } else
            Cf.current = !1
}
function PI(e, A, t) {
    const {willChange: r} = A;
    for (const n in A) {
        const i = A[n]
          , s = t[n];
        if (pe(i))
            e.addValue(n, i),
            Za(r) && r.add(n);
        else if (pe(s))
            e.addValue(n, ui(i, {
                owner: e
            })),
            Za(r) && r.remove(n);
        else if (s !== i)
            if (e.hasValue(n)) {
                const o = e.getValue(n);
                !o.hasAnimated && o.set(i)
            } else {
                const o = e.getStaticValue(n);
                e.addValue(n, ui(o !== void 0 ? o : i, {
                    owner: e
                }))
            }
    }
    for (const n in t)
        A[n] === void 0 && e.removeValue(n);
    return A
}
const np = new WeakMap
  , nC = Object.keys(Ms)
  , OI = nC.length
  , ip = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"]
  , NI = rh.length;
class RI {
    constructor({parent: A, props: t, presenceContext: r, reducedMotionConfig: n, visualState: i}, s={}) {
        this.current = null,
        this.children = new Set,
        this.isVariantNode = !1,
        this.isControllingVariants = !1,
        this.shouldReduceMotion = null,
        this.values = new Map,
        this.features = {},
        this.valueSubscriptions = new Map,
        this.prevMotionValues = {},
        this.events = {},
        this.propEventSubscriptions = {},
        this.notifyUpdate = () => this.notify("Update", this.latestValues),
        this.render = () => {
            this.current && (this.triggerBuild(),
            this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
        }
        ,
        this.scheduleRender = () => iA.render(this.render, !1, !0);
        const {latestValues: o, renderState: a} = i;
        this.latestValues = o,
        this.baseTarget = {
            ...o
        },
        this.initialValues = t.initial ? {
            ...o
        } : {},
        this.renderState = a,
        this.parent = A,
        this.props = t,
        this.presenceContext = r,
        this.depth = A ? A.depth + 1 : 0,
        this.reducedMotionConfig = n,
        this.options = s,
        this.isControllingVariants = Ml(t),
        this.isVariantNode = Rw(t),
        this.isVariantNode && (this.variantChildren = new Set),
        this.manuallyAnimateOnMount = !!(A && A.current);
        const {willChange: l, ...u} = this.scrapeMotionValuesFromProps(t, {});
        for (const c in u) {
            const f = u[c];
            o[c] !== void 0 && pe(f) && (f.set(o[c], !1),
            Za(l) && l.add(c))
        }
    }
    scrapeMotionValuesFromProps(A, t) {
        return {}
    }
    mount(A) {
        this.current = A,
        np.set(A, this),
        this.projection && !this.projection.instance && this.projection.mount(A),
        this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)),
        this.values.forEach( (t, r) => this.bindToMotionValue(r, t)),
        rC.current || KI(),
        this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : Cf.current,
        this.parent && this.parent.children.add(this),
        this.update(this.props, this.presenceContext)
    }
    unmount() {
        np.delete(this.current),
        this.projection && this.projection.unmount(),
        Kt(this.notifyUpdate),
        Kt(this.render),
        this.valueSubscriptions.forEach(A => A()),
        this.removeFromVariantTree && this.removeFromVariantTree(),
        this.parent && this.parent.children.delete(this);
        for (const A in this.events)
            this.events[A].clear();
        for (const A in this.features)
            this.features[A].unmount();
        this.current = null
    }
    bindToMotionValue(A, t) {
        const r = hn.has(A)
          , n = t.on("change", s => {
            this.latestValues[A] = s,
            this.props.onUpdate && iA.update(this.notifyUpdate, !1, !0),
            r && this.projection && (this.projection.isTransformDirty = !0)
        }
        )
          , i = t.on("renderRequest", this.scheduleRender);
        this.valueSubscriptions.set(A, () => {
            n(),
            i()
        }
        )
    }
    sortNodePosition(A) {
        return !this.current || !this.sortInstanceNodePosition || this.type !== A.type ? 0 : this.sortInstanceNodePosition(this.current, A.current)
    }
    loadFeatures({children: A, ...t}, r, n, i) {
        let s, o;
        for (let a = 0; a < OI; a++) {
            const l = nC[a]
              , {isEnabled: u, Feature: c, ProjectionNode: f, MeasureLayout: d} = Ms[l];
            f && (s = f),
            u(t) && (!this.features[l] && c && (this.features[l] = new c(this)),
            d && (o = d))
        }
        if ((this.type === "html" || this.type === "svg") && !this.projection && s) {
            this.projection = new s(this.latestValues,this.parent && this.parent.projection);
            const {layoutId: a, layout: l, drag: u, dragConstraints: c, layoutScroll: f, layoutRoot: d} = t;
            this.projection.setOptions({
                layoutId: a,
                layout: l,
                alwaysMeasureLayout: !!u || c && Pn(c),
                visualElement: this,
                scheduleRender: () => this.scheduleRender(),
                animationType: typeof l == "string" ? l : "both",
                initialPromotionConfig: i,
                layoutScroll: f,
                layoutRoot: d
            })
        }
        return o
    }
    updateFeatures() {
        for (const A in this.features) {
            const t = this.features[A];
            t.isMounted ? t.update() : (t.mount(),
            t.isMounted = !0)
        }
    }
    triggerBuild() {
        this.build(this.renderState, this.latestValues, this.options, this.props)
    }
    measureViewportBox() {
        return this.current ? this.measureInstanceViewportBox(this.current, this.props) : EA()
    }
    getStaticValue(A) {
        return this.latestValues[A]
    }
    setStaticValue(A, t) {
        this.latestValues[A] = t
    }
    makeTargetAnimatable(A, t=!0) {
        return this.makeTargetAnimatableFromInstance(A, this.props, t)
    }
    update(A, t) {
        (A.transformTemplate || this.props.transformTemplate) && this.scheduleRender(),
        this.prevProps = this.props,
        this.props = A,
        this.prevPresenceContext = this.presenceContext,
        this.presenceContext = t;
        for (let r = 0; r < ip.length; r++) {
            const n = ip[r];
            this.propEventSubscriptions[n] && (this.propEventSubscriptions[n](),
            delete this.propEventSubscriptions[n]);
            const i = A["on" + n];
            i && (this.propEventSubscriptions[n] = this.on(n, i))
        }
        this.prevMotionValues = PI(this, this.scrapeMotionValuesFromProps(A, this.prevProps), this.prevMotionValues),
        this.handleChildMotionValue && this.handleChildMotionValue()
    }
    getProps() {
        return this.props
    }
    getVariant(A) {
        return this.props.variants ? this.props.variants[A] : void 0
    }
    getDefaultTransition() {
        return this.props.transition
    }
    getTransformPagePoint() {
        return this.props.transformPagePoint
    }
    getClosestVariantNode() {
        return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
    }
    getVariantContext(A=!1) {
        if (A)
            return this.parent ? this.parent.getVariantContext() : void 0;
        if (!this.isControllingVariants) {
            const r = this.parent ? this.parent.getVariantContext() || {} : {};
            return this.props.initial !== void 0 && (r.initial = this.props.initial),
            r
        }
        const t = {};
        for (let r = 0; r < NI; r++) {
            const n = rh[r]
              , i = this.props[n];
            (ks(i) || i === !1) && (t[n] = i)
        }
        return t
    }
    addVariantChild(A) {
        const t = this.getClosestVariantNode();
        if (t)
            return t.variantChildren && t.variantChildren.add(A),
            () => t.variantChildren.delete(A)
    }
    addValue(A, t) {
        t !== this.values.get(A) && (this.removeValue(A),
        this.bindToMotionValue(A, t)),
        this.values.set(A, t),
        this.latestValues[A] = t.get()
    }
    removeValue(A) {
        this.values.delete(A);
        const t = this.valueSubscriptions.get(A);
        t && (t(),
        this.valueSubscriptions.delete(A)),
        delete this.latestValues[A],
        this.removeValueFromRenderState(A, this.renderState)
    }
    hasValue(A) {
        return this.values.has(A)
    }
    getValue(A, t) {
        if (this.props.values && this.props.values[A])
            return this.props.values[A];
        let r = this.values.get(A);
        return r === void 0 && t !== void 0 && (r = ui(t, {
            owner: this
        }),
        this.addValue(A, r)),
        r
    }
    readValue(A) {
        var t;
        return this.latestValues[A] !== void 0 || !this.current ? this.latestValues[A] : (t = this.getBaseTargetFromProps(this.props, A)) !== null && t !== void 0 ? t : this.readValueFromInstance(this.current, A, this.options)
    }
    setBaseTarget(A, t) {
        this.baseTarget[A] = t
    }
    getBaseTarget(A) {
        var t;
        const {initial: r} = this.props
          , n = typeof r == "string" || typeof r == "object" ? (t = ch(this.props, r)) === null || t === void 0 ? void 0 : t[A] : void 0;
        if (r && n !== void 0)
            return n;
        const i = this.getBaseTargetFromProps(this.props, A);
        return i !== void 0 && !pe(i) ? i : this.initialValues[A] !== void 0 && n === void 0 ? void 0 : this.baseTarget[A]
    }
    on(A, t) {
        return this.events[A] || (this.events[A] = new yh),
        this.events[A].add(t)
    }
    notify(A, ...t) {
        this.events[A] && this.events[A].notify(...t)
    }
}
class iC extends RI {
    sortInstanceNodePosition(A, t) {
        return A.compareDocumentPosition(t) & 2 ? 1 : -1
    }
    getBaseTargetFromProps(A, t) {
        return A.style ? A.style[t] : void 0
    }
    removeValueFromRenderState(A, {vars: t, style: r}) {
        delete t[A],
        delete r[A]
    }
    makeTargetAnimatableFromInstance({transition: A, transitionEnd: t, ...r}, {transformValues: n}, i) {
        let s = iE(r, A || {}, this);
        if (n && (t && (t = n(t)),
        r && (r = n(r)),
        s && (s = n(s))),
        i) {
            rE(this, r, s);
            const o = MI(this, r, s, t);
            t = o.transitionEnd,
            r = o.target
        }
        return {
            transition: A,
            transitionEnd: t,
            ...r
        }
    }
}
function VI(e) {
    return window.getComputedStyle(e)
}
class GI extends iC {
    constructor() {
        super(...arguments),
        this.type = "html"
    }
    readValueFromInstance(A, t) {
        if (hn.has(t)) {
            const r = gh(t);
            return r && r.default || 0
        } else {
            const r = VI(A)
              , n = (zw(t) ? r.getPropertyValue(t) : r[t]) || 0;
            return typeof n == "string" ? n.trim() : n
        }
    }
    measureInstanceViewportBox(A, {transformPagePoint: t}) {
        return zy(A, t)
    }
    build(A, t, r, n) {
        sh(A, t, r, n.transformTemplate)
    }
    scrapeMotionValuesFromProps(A, t) {
        return uh(A, t)
    }
    handleChildMotionValue() {
        this.childSubscription && (this.childSubscription(),
        delete this.childSubscription);
        const {children: A} = this.props;
        pe(A) && (this.childSubscription = A.on("change", t => {
            this.current && (this.current.textContent = `${t}`)
        }
        ))
    }
    renderInstance(A, t, r, n) {
        Zw(A, t, r, n)
    }
}
class jI extends iC {
    constructor() {
        super(...arguments),
        this.type = "svg",
        this.isSVGTag = !1
    }
    getBaseTargetFromProps(A, t) {
        return A[t]
    }
    readValueFromInstance(A, t) {
        if (hn.has(t)) {
            const r = gh(t);
            return r && r.default || 0
        }
        return t = qw.has(t) ? t : eh(t),
        A.getAttribute(t)
    }
    measureInstanceViewportBox() {
        return EA()
    }
    scrapeMotionValuesFromProps(A, t) {
        return ey(A, t)
    }
    build(A, t, r, n) {
        ah(A, t, r, this.isSVGTag, n.transformTemplate)
    }
    renderInstance(A, t, r, n) {
        Ay(A, t, r, n)
    }
    mount(A) {
        this.isSVGTag = lh(A.tagName),
        super.mount(A)
    }
}
const zI = (e, A) => ih(e) ? new jI(A,{
    enableHardwareAcceleration: !1
}) : new GI(A,{
    enableHardwareAcceleration: !0
})
  , XI = {
    layout: {
        ProjectionNode: eC,
        MeasureLayout: Wy
    }
}
  , WI = {
    ...yE,
    ...NU,
    ...UI,
    ...XI
}
  , M = J1( (e, A) => IU(e, A, WI, zI));
function sC() {
    const e = I.useRef(!1);
    return Ah( () => (e.current = !0,
    () => {
        e.current = !1
    }
    ), []),
    e
}
function YI() {
    const e = sC()
      , [A,t] = I.useState(0)
      , r = I.useCallback( () => {
        e.current && t(A + 1)
    }
    , [A]);
    return [I.useCallback( () => iA.postRender(r), [r]), A]
}
class JI extends I.Component {
    getSnapshotBeforeUpdate(A) {
        const t = this.props.childRef.current;
        if (t && A.isPresent && !this.props.isPresent) {
            const r = this.props.sizeRef.current;
            r.height = t.offsetHeight || 0,
            r.width = t.offsetWidth || 0,
            r.top = t.offsetTop,
            r.left = t.offsetLeft
        }
        return null
    }
    componentDidUpdate() {}
    render() {
        return this.props.children
    }
}
function $I({children: e, isPresent: A}) {
    const t = I.useId()
      , r = I.useRef(null)
      , n = I.useRef({
        width: 0,
        height: 0,
        top: 0,
        left: 0
    });
    return I.useInsertionEffect( () => {
        const {width: i, height: s, top: o, left: a} = n.current;
        if (A || !r.current || !i || !s)
            return;
        r.current.dataset.motionPopId = t;
        const l = document.createElement("style");
        return document.head.appendChild(l),
        l.sheet && l.sheet.insertRule(`
          [data-motion-pop-id="${t}"] {
            position: absolute !important;
            width: ${i}px !important;
            height: ${s}px !important;
            top: ${o}px !important;
            left: ${a}px !important;
          }
        `),
        () => {
            document.head.removeChild(l)
        }
    }
    , [A]),
    I.createElement(JI, {
        isPresent: A,
        childRef: r,
        sizeRef: n
    }, I.cloneElement(e, {
        ref: r
    }))
}
const Pu = ({children: e, initial: A, isPresent: t, onExitComplete: r, custom: n, presenceAffectsLayout: i, mode: s}) => {
    const o = ty(ZI)
      , a = I.useId()
      , l = I.useMemo( () => ({
        id: a,
        initial: A,
        isPresent: t,
        custom: n,
        onExitComplete: u => {
            o.set(u, !0);
            for (const c of o.values())
                if (!c)
                    return;
            r && r()
        }
        ,
        register: u => (o.set(u, !1),
        () => o.delete(u))
    }), i ? void 0 : [t]);
    return I.useMemo( () => {
        o.forEach( (u, c) => o.set(c, !1))
    }
    , [t]),
    I.useEffect( () => {
        !t && !o.size && r && r()
    }
    , [t]),
    s === "popLayout" && (e = I.createElement($I, {
        isPresent: t
    }, e)),
    I.createElement(bl.Provider, {
        value: l
    }, e)
}
;
function ZI() {
    return new Map
}
function qI(e) {
    return I.useEffect( () => () => e(), [])
}
const Nr = e => e.key || "";
function AH(e, A) {
    e.forEach(t => {
        const r = Nr(t);
        A.set(r, t)
    }
    )
}
function eH(e) {
    const A = [];
    return I.Children.forEach(e, t => {
        I.isValidElement(t) && A.push(t)
    }
    ),
    A
}
const Tt = ({children: e, custom: A, initial: t=!0, onExitComplete: r, exitBeforeEnter: n, presenceAffectsLayout: i=!0, mode: s="sync"}) => {
    const o = I.useContext(nh).forceRender || YI()[0]
      , a = sC()
      , l = eH(e);
    let u = l;
    const c = I.useRef(new Map).current
      , f = I.useRef(u)
      , d = I.useRef(new Map).current
      , B = I.useRef(!0);
    if (Ah( () => {
        B.current = !1,
        AH(l, d),
        f.current = u
    }
    ),
    qI( () => {
        B.current = !0,
        d.clear(),
        c.clear()
    }
    ),
    B.current)
        return I.createElement(I.Fragment, null, u.map(g => I.createElement(Pu, {
            key: Nr(g),
            isPresent: !0,
            initial: t ? void 0 : !1,
            presenceAffectsLayout: i,
            mode: s
        }, g)));
    u = [...u];
    const h = f.current.map(Nr)
      , y = l.map(Nr)
      , p = h.length;
    for (let g = 0; g < p; g++) {
        const m = h[g];
        y.indexOf(m) === -1 && !c.has(m) && c.set(m, void 0)
    }
    return s === "wait" && c.size && (u = []),
    c.forEach( (g, m) => {
        if (y.indexOf(m) !== -1)
            return;
        const C = d.get(m);
        if (!C)
            return;
        const v = h.indexOf(m);
        let Q = g;
        if (!Q) {
            const U = () => {
                c.delete(m);
                const F = Array.from(d.keys()).filter(x => !y.includes(x));
                if (F.forEach(x => d.delete(x)),
                f.current = l.filter(x => {
                    const H = Nr(x);
                    return H === m || F.includes(H)
                }
                ),
                !c.size) {
                    if (a.current === !1)
                        return;
                    o(),
                    r && r()
                }
            }
            ;
            Q = I.createElement(Pu, {
                key: Nr(C),
                isPresent: !1,
                onExitComplete: U,
                custom: A,
                presenceAffectsLayout: i,
                mode: s
            }, C),
            c.set(m, Q)
        }
        u.splice(v, 0, Q)
    }
    ),
    u = u.map(g => {
        const m = g.key;
        return c.has(m) ? g : I.createElement(Pu, {
            key: Nr(g),
            isPresent: !0,
            presenceAffectsLayout: i,
            mode: s
        }, g)
    }
    ),
    I.createElement(I.Fragment, null, c.size ? u : u.map(g => I.cloneElement(g)))
}
;
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var tH = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rH = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim()
  , it = (e, A) => {
    const t = I.forwardRef( ({color: r="currentColor", size: n=24, strokeWidth: i=2, absoluteStrokeWidth: s, className: o="", children: a, ...l}, u) => I.createElement("svg", {
        ref: u,
        ...tH,
        width: n,
        height: n,
        stroke: r,
        strokeWidth: s ? Number(i) * 24 / Number(n) : i,
        className: ["lucide", `lucide-${rH(e)}`, o].join(" "),
        ...l
    }, [...A.map( ([c,f]) => I.createElement(c, f)), ...Array.isArray(a) ? a : [a]]));
    return t.displayName = `${e}`,
    t
}
;
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ch = it("ArrowRight", [["path", {
    d: "M5 12h14",
    key: "1ays0h"
}], ["path", {
    d: "m12 5 7 7-7 7",
    key: "xquz4c"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sp = it("Circle", [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nH = it("Download", [["path", {
    d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",
    key: "ih7n3h"
}], ["polyline", {
    points: "7 10 12 15 17 10",
    key: "2ggqvy"
}], ["line", {
    x1: "12",
    x2: "12",
    y1: "15",
    y2: "3",
    key: "1vk2je"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ue = it("Heart", [["path", {
    d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
    key: "c3ymky"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ou = it("Palette", [["circle", {
    cx: "13.5",
    cy: "6.5",
    r: ".5",
    fill: "currentColor",
    key: "1okk4w"
}], ["circle", {
    cx: "17.5",
    cy: "10.5",
    r: ".5",
    fill: "currentColor",
    key: "f64h9f"
}], ["circle", {
    cx: "8.5",
    cy: "7.5",
    r: ".5",
    fill: "currentColor",
    key: "fotxhn"
}], ["circle", {
    cx: "6.5",
    cy: "12.5",
    r: ".5",
    fill: "currentColor",
    key: "qy21gx"
}], ["path", {
    d: "M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",
    key: "12rzf8"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const iH = it("RotateCcw", [["path", {
    d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",
    key: "1357e3"
}], ["path", {
    d: "M3 3v5h5",
    key: "1xhq8a"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const oC = it("Sparkles", [["path", {
    d: "m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",
    key: "17u4zn"
}], ["path", {
    d: "M5 3v4",
    key: "bklmnn"
}], ["path", {
    d: "M19 17v4",
    key: "iiml17"
}], ["path", {
    d: "M3 5h4",
    key: "nem4j1"
}], ["path", {
    d: "M17 19h4",
    key: "lbex7p"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const op = it("Star", [["polygon", {
    points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",
    key: "8f66p6"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sH = it("Volume2", [["polygon", {
    points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5",
    key: "16drj5"
}], ["path", {
    d: "M15.54 8.46a5 5 0 0 1 0 7.07",
    key: "ltjumu"
}], ["path", {
    d: "M19.07 4.93a10 10 0 0 1 0 14.14",
    key: "1kegas"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const oH = it("VolumeX", [["polygon", {
    points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5",
    key: "16drj5"
}], ["line", {
    x1: "22",
    x2: "16",
    y1: "9",
    y2: "15",
    key: "1ewh16"
}], ["line", {
    x1: "16",
    x2: "22",
    y1: "9",
    y2: "15",
    key: "5ykzw1"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const aH = it("X", [["path", {
    d: "M18 6 6 18",
    key: "1bl5f8"
}], ["path", {
    d: "m6 6 12 12",
    key: "d8bk6v"
}]]);
function Qt(e) {
    if (e === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
}
function aC(e, A) {
    e.prototype = Object.create(A.prototype),
    e.prototype.constructor = e,
    e.__proto__ = A
}
/*!
 * GSAP 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/
var Ie = {
    autoSleep: 120,
    force3D: "auto",
    nullTargetWarn: 1,
    units: {
        lineHeight: ""
    }
}, fi = {
    duration: .5,
    overwrite: !1,
    delay: 0
}, vh, VA, cA, Ve = 1e8, tA = 1 / Ve, vf = Math.PI * 2, lH = vf / 4, uH = 0, lC = Math.sqrt, cH = Math.cos, fH = Math.sin, KA = function(A) {
    return typeof A == "string"
}, wA = function(A) {
    return typeof A == "function"
}, Pt = function(A) {
    return typeof A == "number"
}, Qh = function(A) {
    return typeof A > "u"
}, pt = function(A) {
    return typeof A == "object"
}, de = function(A) {
    return A !== !1
}, Fh = function() {
    return typeof window < "u"
}, _o = function(A) {
    return wA(A) || KA(A)
}, uC = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {}
, ZA = Array.isArray, Qf = /(?:-?\.?\d|\.)+/gi, cC = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, Vn = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, Nu = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, fC = /[+-]=-?[.\d]+/, dC = /[^,'"\[\]\s]+/gi, dH = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, dA, ut, Ff, Uh, Se = {}, Al = {}, hC, gC = function(A) {
    return (Al = di(A, Se)) && me
}, xh = function(A, t) {
    return console.warn("Invalid property", A, "set to", t, "Missing plugin? gsap.registerPlugin()")
}, Ps = function(A, t) {
    return !t && console.warn(A)
}, BC = function(A, t) {
    return A && (Se[A] = t) && Al && (Al[A] = t) || Se
}, Os = function() {
    return 0
}, hH = {
    suppressEvents: !0,
    isStart: !0,
    kill: !1
}, ha = {
    suppressEvents: !0,
    kill: !1
}, gH = {
    suppressEvents: !0
}, Eh = {}, Br = [], Uf = {}, pC, ve = {}, Ru = {}, ap = 30, ga = [], Ih = "", Hh = function(A) {
    var t = A[0], r, n;
    if (pt(t) || wA(t) || (A = [A]),
    !(r = (t._gsap || {}).harness)) {
        for (n = ga.length; n-- && !ga[n].targetTest(t); )
            ;
        r = ga[n]
    }
    for (n = A.length; n--; )
        A[n] && (A[n]._gsap || (A[n]._gsap = new NC(A[n],r))) || A.splice(n, 1);
    return A
}, qr = function(A) {
    return A._gsap || Hh(Ge(A))[0]._gsap
}, mC = function(A, t, r) {
    return (r = A[t]) && wA(r) ? A[t]() : Qh(r) && A.getAttribute && A.getAttribute(t) || r
}, he = function(A, t) {
    return (A = A.split(",")).forEach(t) || A
}, vA = function(A) {
    return Math.round(A * 1e5) / 1e5 || 0
}, HA = function(A) {
    return Math.round(A * 1e7) / 1e7 || 0
}, Zn = function(A, t) {
    var r = t.charAt(0)
      , n = parseFloat(t.substr(2));
    return A = parseFloat(A),
    r === "+" ? A + n : r === "-" ? A - n : r === "*" ? A * n : A / n
}, BH = function(A, t) {
    for (var r = t.length, n = 0; A.indexOf(t[n]) < 0 && ++n < r; )
        ;
    return n < r
}, el = function() {
    var A = Br.length, t = Br.slice(0), r, n;
    for (Uf = {},
    Br.length = 0,
    r = 0; r < A; r++)
        n = t[r],
        n && n._lazy && (n.render(n._lazy[0], n._lazy[1], !0)._lazy = 0)
}, _h = function(A) {
    return !!(A._initted || A._startAt || A.add)
}, wC = function(A, t, r, n) {
    Br.length && !VA && el(),
    A.render(t, r, !!(VA && t < 0 && _h(A))),
    Br.length && !VA && el()
}, yC = function(A) {
    var t = parseFloat(A);
    return (t || t === 0) && (A + "").match(dC).length < 2 ? t : KA(A) ? A.trim() : A
}, CC = function(A) {
    return A
}, Te = function(A, t) {
    for (var r in t)
        r in A || (A[r] = t[r]);
    return A
}, pH = function(A) {
    return function(t, r) {
        for (var n in r)
            n in t || n === "duration" && A || n === "ease" || (t[n] = r[n])
    }
}, di = function(A, t) {
    for (var r in t)
        A[r] = t[r];
    return A
}, lp = function e(A, t) {
    for (var r in t)
        r !== "__proto__" && r !== "constructor" && r !== "prototype" && (A[r] = pt(t[r]) ? e(A[r] || (A[r] = {}), t[r]) : t[r]);
    return A
}, tl = function(A, t) {
    var r = {}, n;
    for (n in A)
        n in t || (r[n] = A[n]);
    return r
}, cs = function(A) {
    var t = A.parent || dA
      , r = A.keyframes ? pH(ZA(A.keyframes)) : Te;
    if (de(A.inherit))
        for (; t; )
            r(A, t.vars.defaults),
            t = t.parent || t._dp;
    return A
}, mH = function(A, t) {
    for (var r = A.length, n = r === t.length; n && r-- && A[r] === t[r]; )
        ;
    return r < 0
}, vC = function(A, t, r, n, i) {
    var s = A[n], o;
    if (i)
        for (o = t[i]; s && s[i] > o; )
            s = s._prev;
    return s ? (t._next = s._next,
    s._next = t) : (t._next = A[r],
    A[r] = t),
    t._next ? t._next._prev = t : A[n] = t,
    t._prev = s,
    t.parent = t._dp = A,
    t
}, Nl = function(A, t, r, n) {
    r === void 0 && (r = "_first"),
    n === void 0 && (n = "_last");
    var i = t._prev
      , s = t._next;
    i ? i._next = s : A[r] === t && (A[r] = s),
    s ? s._prev = i : A[n] === t && (A[n] = i),
    t._next = t._prev = t.parent = null
}, Fr = function(A, t) {
    A.parent && (!t || A.parent.autoRemoveChildren) && A.parent.remove && A.parent.remove(A),
    A._act = 0
}, An = function(A, t) {
    if (A && (!t || t._end > A._dur || t._start < 0))
        for (var r = A; r; )
            r._dirty = 1,
            r = r.parent;
    return A
}, wH = function(A) {
    for (var t = A.parent; t && t.parent; )
        t._dirty = 1,
        t.totalDuration(),
        t = t.parent;
    return A
}, xf = function(A, t, r, n) {
    return A._startAt && (VA ? A._startAt.revert(ha) : A.vars.immediateRender && !A.vars.autoRevert || A._startAt.render(t, !0, n))
}, yH = function e(A) {
    return !A || A._ts && e(A.parent)
}, up = function(A) {
    return A._repeat ? hi(A._tTime, A = A.duration() + A._rDelay) * A : 0
}, hi = function(A, t) {
    var r = Math.floor(A = HA(A / t));
    return A && r === A ? r - 1 : r
}, rl = function(A, t) {
    return (A - t._start) * t._ts + (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur)
}, Rl = function(A) {
    return A._end = HA(A._start + (A._tDur / Math.abs(A._ts || A._rts || tA) || 0))
}, Vl = function(A, t) {
    var r = A._dp;
    return r && r.smoothChildTiming && A._ts && (A._start = HA(r._time - (A._ts > 0 ? t / A._ts : ((A._dirty ? A.totalDuration() : A._tDur) - t) / -A._ts)),
    Rl(A),
    r._dirty || An(r, A)),
    A
}, QC = function(A, t) {
    var r;
    if ((t._time || !t._dur && t._initted || t._start < A._time && (t._dur || !t.add)) && (r = rl(A.rawTime(), t),
    (!t._dur || no(0, t.totalDuration(), r) - t._tTime > tA) && t.render(r, !0)),
    An(A, t)._dp && A._initted && A._time >= A._dur && A._ts) {
        if (A._dur < A.duration())
            for (r = A; r._dp; )
                r.rawTime() >= 0 && r.totalTime(r._tTime),
                r = r._dp;
        A._zTime = -tA
    }
}, ft = function(A, t, r, n) {
    return t.parent && Fr(t),
    t._start = HA((Pt(r) ? r : r || A !== dA ? Me(A, r, t) : A._time) + t._delay),
    t._end = HA(t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0)),
    vC(A, t, "_first", "_last", A._sort ? "_start" : 0),
    Ef(t) || (A._recent = t),
    n || QC(A, t),
    A._ts < 0 && Vl(A, A._tTime),
    A
}, FC = function(A, t) {
    return (Se.ScrollTrigger || xh("scrollTrigger", t)) && Se.ScrollTrigger.create(t, A)
}, UC = function(A, t, r, n, i) {
    if (Th(A, t, i),
    !A._initted)
        return 1;
    if (!r && A._pt && !VA && (A._dur && A.vars.lazy !== !1 || !A._dur && A.vars.lazy) && pC !== Qe.frame)
        return Br.push(A),
        A._lazy = [i, n],
        1
}, CH = function e(A) {
    var t = A.parent;
    return t && t._ts && t._initted && !t._lock && (t.rawTime() < 0 || e(t))
}, Ef = function(A) {
    var t = A.data;
    return t === "isFromStart" || t === "isStart"
}, vH = function(A, t, r, n) {
    var i = A.ratio, s = t < 0 || !t && (!A._start && CH(A) && !(!A._initted && Ef(A)) || (A._ts < 0 || A._dp._ts < 0) && !Ef(A)) ? 0 : 1, o = A._rDelay, a = 0, l, u, c;
    if (o && A._repeat && (a = no(0, A._tDur, t),
    u = hi(a, o),
    A._yoyo && u & 1 && (s = 1 - s),
    u !== hi(A._tTime, o) && (i = 1 - s,
    A.vars.repeatRefresh && A._initted && A.invalidate())),
    s !== i || VA || n || A._zTime === tA || !t && A._zTime) {
        if (!A._initted && UC(A, t, n, r, a))
            return;
        for (c = A._zTime,
        A._zTime = t || (r ? tA : 0),
        r || (r = t && !c),
        A.ratio = s,
        A._from && (s = 1 - s),
        A._time = 0,
        A._tTime = a,
        l = A._pt; l; )
            l.r(s, l.d),
            l = l._next;
        t < 0 && xf(A, t, r, !0),
        A._onUpdate && !r && xe(A, "onUpdate"),
        a && A._repeat && !r && A.parent && xe(A, "onRepeat"),
        (t >= A._tDur || t < 0) && A.ratio === s && (s && Fr(A, 1),
        !r && !VA && (xe(A, s ? "onComplete" : "onReverseComplete", !0),
        A._prom && A._prom()))
    } else
        A._zTime || (A._zTime = t)
}, QH = function(A, t, r) {
    var n;
    if (r > t)
        for (n = A._first; n && n._start <= r; ) {
            if (n.data === "isPause" && n._start > t)
                return n;
            n = n._next
        }
    else
        for (n = A._last; n && n._start >= r; ) {
            if (n.data === "isPause" && n._start < t)
                return n;
            n = n._prev
        }
}, gi = function(A, t, r, n) {
    var i = A._repeat
      , s = HA(t) || 0
      , o = A._tTime / A._tDur;
    return o && !n && (A._time *= s / A._dur),
    A._dur = s,
    A._tDur = i ? i < 0 ? 1e10 : HA(s * (i + 1) + A._rDelay * i) : s,
    o > 0 && !n && Vl(A, A._tTime = A._tDur * o),
    A.parent && Rl(A),
    r || An(A.parent, A),
    A
}, cp = function(A) {
    return A instanceof re ? An(A) : gi(A, A._dur)
}, FH = {
    _start: 0,
    endTime: Os,
    totalDuration: Os
}, Me = function e(A, t, r) {
    var n = A.labels, i = A._recent || FH, s = A.duration() >= Ve ? i.endTime(!1) : A._dur, o, a, l;
    return KA(t) && (isNaN(t) || t in n) ? (a = t.charAt(0),
    l = t.substr(-1) === "%",
    o = t.indexOf("="),
    a === "<" || a === ">" ? (o >= 0 && (t = t.replace(/=/, "")),
    (a === "<" ? i._start : i.endTime(i._repeat >= 0)) + (parseFloat(t.substr(1)) || 0) * (l ? (o < 0 ? i : r).totalDuration() / 100 : 1)) : o < 0 ? (t in n || (n[t] = s),
    n[t]) : (a = parseFloat(t.charAt(o - 1) + t.substr(o + 1)),
    l && r && (a = a / 100 * (ZA(r) ? r[0] : r).totalDuration()),
    o > 1 ? e(A, t.substr(0, o - 1), r) + a : s + a)) : t == null ? s : +t
}, fs = function(A, t, r) {
    var n = Pt(t[1]), i = (n ? 2 : 1) + (A < 2 ? 0 : 1), s = t[i], o, a;
    if (n && (s.duration = t[1]),
    s.parent = r,
    A) {
        for (o = s,
        a = r; a && !("immediateRender"in o); )
            o = a.vars.defaults || {},
            a = de(a.vars.inherit) && a.parent;
        s.immediateRender = de(o.immediateRender),
        A < 2 ? s.runBackwards = 1 : s.startAt = t[i - 1]
    }
    return new IA(t[0],s,t[i + 1])
}, Sr = function(A, t) {
    return A || A === 0 ? t(A) : t
}, no = function(A, t, r) {
    return r < A ? A : r > t ? t : r
}, $A = function(A, t) {
    return !KA(A) || !(t = dH.exec(A)) ? "" : t[1]
}, UH = function(A, t, r) {
    return Sr(r, function(n) {
        return no(A, t, n)
    })
}, If = [].slice, xC = function(A, t) {
    return A && pt(A) && "length"in A && (!t && !A.length || A.length - 1 in A && pt(A[0])) && !A.nodeType && A !== ut
}, xH = function(A, t, r) {
    return r === void 0 && (r = []),
    A.forEach(function(n) {
        var i;
        return KA(n) && !t || xC(n, 1) ? (i = r).push.apply(i, Ge(n)) : r.push(n)
    }) || r
}, Ge = function(A, t, r) {
    return cA && !t && cA.selector ? cA.selector(A) : KA(A) && !r && (Ff || !Bi()) ? If.call((t || Uh).querySelectorAll(A), 0) : ZA(A) ? xH(A, r) : xC(A) ? If.call(A, 0) : A ? [A] : []
}, Hf = function(A) {
    return A = Ge(A)[0] || Ps("Invalid scope") || {},
    function(t) {
        var r = A.current || A.nativeElement || A;
        return Ge(t, r.querySelectorAll ? r : r === A ? Ps("Invalid scope") || Uh.createElement("div") : A)
    }
}, EC = function(A) {
    return A.sort(function() {
        return .5 - Math.random()
    })
}, IC = function(A) {
    if (wA(A))
        return A;
    var t = pt(A) ? A : {
        each: A
    }
      , r = en(t.ease)
      , n = t.from || 0
      , i = parseFloat(t.base) || 0
      , s = {}
      , o = n > 0 && n < 1
      , a = isNaN(n) || o
      , l = t.axis
      , u = n
      , c = n;
    return KA(n) ? u = c = {
        center: .5,
        edges: .5,
        end: 1
    }[n] || 0 : !o && a && (u = n[0],
    c = n[1]),
    function(f, d, B) {
        var h = (B || t).length, y = s[h], p, g, m, C, v, Q, U, F, x;
        if (!y) {
            if (x = t.grid === "auto" ? 0 : (t.grid || [1, Ve])[1],
            !x) {
                for (U = -Ve; U < (U = B[x++].getBoundingClientRect().left) && x < h; )
                    ;
                x < h && x--
            }
            for (y = s[h] = [],
            p = a ? Math.min(x, h) * u - .5 : n % x,
            g = x === Ve ? 0 : a ? h * c / x - .5 : n / x | 0,
            U = 0,
            F = Ve,
            Q = 0; Q < h; Q++)
                m = Q % x - p,
                C = g - (Q / x | 0),
                y[Q] = v = l ? Math.abs(l === "y" ? C : m) : lC(m * m + C * C),
                v > U && (U = v),
                v < F && (F = v);
            n === "random" && EC(y),
            y.max = U - F,
            y.min = F,
            y.v = h = (parseFloat(t.amount) || parseFloat(t.each) * (x > h ? h - 1 : l ? l === "y" ? h / x : x : Math.max(x, h / x)) || 0) * (n === "edges" ? -1 : 1),
            y.b = h < 0 ? i - h : i,
            y.u = $A(t.amount || t.each) || 0,
            r = r && h < 0 ? KC(r) : r
        }
        return h = (y[f] - y.min) / y.max || 0,
        HA(y.b + (r ? r(h) : h) * y.v) + y.u
    }
}, _f = function(A) {
    var t = Math.pow(10, ((A + "").split(".")[1] || "").length);
    return function(r) {
        var n = HA(Math.round(parseFloat(r) / A) * A * t);
        return (n - n % 1) / t + (Pt(r) ? 0 : $A(r))
    }
}, HC = function(A, t) {
    var r = ZA(A), n, i;
    return !r && pt(A) && (n = r = A.radius || Ve,
    A.values ? (A = Ge(A.values),
    (i = !Pt(A[0])) && (n *= n)) : A = _f(A.increment)),
    Sr(t, r ? wA(A) ? function(s) {
        return i = A(s),
        Math.abs(i - s) <= n ? i : s
    }
    : function(s) {
        for (var o = parseFloat(i ? s.x : s), a = parseFloat(i ? s.y : 0), l = Ve, u = 0, c = A.length, f, d; c--; )
            i ? (f = A[c].x - o,
            d = A[c].y - a,
            f = f * f + d * d) : f = Math.abs(A[c] - o),
            f < l && (l = f,
            u = c);
        return u = !n || l <= n ? A[u] : s,
        i || u === s || Pt(s) ? u : u + $A(s)
    }
    : _f(A))
}, _C = function(A, t, r, n) {
    return Sr(ZA(A) ? !t : r === !0 ? !!(r = 0) : !n, function() {
        return ZA(A) ? A[~~(Math.random() * A.length)] : (r = r || 1e-5) && (n = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) && Math.floor(Math.round((A - r / 2 + Math.random() * (t - A + r * .99)) / r) * r * n) / n
    })
}, EH = function() {
    for (var A = arguments.length, t = new Array(A), r = 0; r < A; r++)
        t[r] = arguments[r];
    return function(n) {
        return t.reduce(function(i, s) {
            return s(i)
        }, n)
    }
}, IH = function(A, t) {
    return function(r) {
        return A(parseFloat(r)) + (t || $A(r))
    }
}, HH = function(A, t, r) {
    return TC(A, t, 0, 1, r)
}, SC = function(A, t, r) {
    return Sr(r, function(n) {
        return A[~~t(n)]
    })
}, _H = function e(A, t, r) {
    var n = t - A;
    return ZA(A) ? SC(A, e(0, A.length), t) : Sr(r, function(i) {
        return (n + (i - A) % n) % n + A
    })
}, SH = function e(A, t, r) {
    var n = t - A
      , i = n * 2;
    return ZA(A) ? SC(A, e(0, A.length - 1), t) : Sr(r, function(s) {
        return s = (i + (s - A) % i) % i || 0,
        A + (s > n ? i - s : s)
    })
}, Ns = function(A) {
    for (var t = 0, r = "", n, i, s, o; ~(n = A.indexOf("random(", t)); )
        s = A.indexOf(")", n),
        o = A.charAt(n + 7) === "[",
        i = A.substr(n + 7, s - n - 7).match(o ? dC : Qf),
        r += A.substr(t, n - t) + _C(o ? i : +i[0], o ? 0 : +i[1], +i[2] || 1e-5),
        t = s + 1;
    return r + A.substr(t, A.length - t)
}, TC = function(A, t, r, n, i) {
    var s = t - A
      , o = n - r;
    return Sr(i, function(a) {
        return r + ((a - A) / s * o || 0)
    })
}, TH = function e(A, t, r, n) {
    var i = isNaN(A + t) ? 0 : function(d) {
        return (1 - d) * A + d * t
    }
    ;
    if (!i) {
        var s = KA(A), o = {}, a, l, u, c, f;
        if (r === !0 && (n = 1) && (r = null),
        s)
            A = {
                p: A
            },
            t = {
                p: t
            };
        else if (ZA(A) && !ZA(t)) {
            for (u = [],
            c = A.length,
            f = c - 2,
            l = 1; l < c; l++)
                u.push(e(A[l - 1], A[l]));
            c--,
            i = function(B) {
                B *= c;
                var h = Math.min(f, ~~B);
                return u[h](B - h)
            }
            ,
            r = t
        } else
            n || (A = di(ZA(A) ? [] : {}, A));
        if (!u) {
            for (a in t)
                Sh.call(o, A, a, "get", t[a]);
            i = function(B) {
                return Dh(B, o) || (s ? A.p : A)
            }
        }
    }
    return Sr(r, i)
}, fp = function(A, t, r) {
    var n = A.labels, i = Ve, s, o, a;
    for (s in n)
        o = n[s] - t,
        o < 0 == !!r && o && i > (o = Math.abs(o)) && (a = s,
        i = o);
    return a
}, xe = function(A, t, r) {
    var n = A.vars, i = n[t], s = cA, o = A._ctx, a, l, u;
    if (i)
        return a = n[t + "Params"],
        l = n.callbackScope || A,
        r && Br.length && el(),
        o && (cA = o),
        u = a ? i.apply(l, a) : i.call(l),
        cA = s,
        u
}, Vi = function(A) {
    return Fr(A),
    A.scrollTrigger && A.scrollTrigger.kill(!!VA),
    A.progress() < 1 && xe(A, "onInterrupt"),
    A
}, Gn, LC = [], bC = function(A) {
    if (A)
        if (A = !A.name && A.default || A,
        Fh() || A.headless) {
            var t = A.name
              , r = wA(A)
              , n = t && !r && A.init ? function() {
                this._props = []
            }
            : A
              , i = {
                init: Os,
                render: Dh,
                add: Sh,
                kill: WH,
                modifier: XH,
                rawVars: 0
            }
              , s = {
                targetTest: 0,
                get: 0,
                getSetter: bh,
                aliases: {},
                register: 0
            };
            if (Bi(),
            A !== n) {
                if (ve[t])
                    return;
                Te(n, Te(tl(A, i), s)),
                di(n.prototype, di(i, tl(A, s))),
                ve[n.prop = t] = n,
                A.targetTest && (ga.push(n),
                Eh[t] = 1),
                t = (t === "css" ? "CSS" : t.charAt(0).toUpperCase() + t.substr(1)) + "Plugin"
            }
            BC(t, n),
            A.register && A.register(me, n, ge)
        } else
            LC.push(A)
}, eA = 255, Gi = {
    aqua: [0, eA, eA],
    lime: [0, eA, 0],
    silver: [192, 192, 192],
    black: [0, 0, 0],
    maroon: [128, 0, 0],
    teal: [0, 128, 128],
    blue: [0, 0, eA],
    navy: [0, 0, 128],
    white: [eA, eA, eA],
    olive: [128, 128, 0],
    yellow: [eA, eA, 0],
    orange: [eA, 165, 0],
    gray: [128, 128, 128],
    purple: [128, 0, 128],
    green: [0, 128, 0],
    red: [eA, 0, 0],
    pink: [eA, 192, 203],
    cyan: [0, eA, eA],
    transparent: [eA, eA, eA, 0]
}, Vu = function(A, t, r) {
    return A += A < 0 ? 1 : A > 1 ? -1 : 0,
    (A * 6 < 1 ? t + (r - t) * A * 6 : A < .5 ? r : A * 3 < 2 ? t + (r - t) * (2 / 3 - A) * 6 : t) * eA + .5 | 0
}, DC = function(A, t, r) {
    var n = A ? Pt(A) ? [A >> 16, A >> 8 & eA, A & eA] : 0 : Gi.black, i, s, o, a, l, u, c, f, d, B;
    if (!n) {
        if (A.substr(-1) === "," && (A = A.substr(0, A.length - 1)),
        Gi[A])
            n = Gi[A];
        else if (A.charAt(0) === "#") {
            if (A.length < 6 && (i = A.charAt(1),
            s = A.charAt(2),
            o = A.charAt(3),
            A = "#" + i + i + s + s + o + o + (A.length === 5 ? A.charAt(4) + A.charAt(4) : "")),
            A.length === 9)
                return n = parseInt(A.substr(1, 6), 16),
                [n >> 16, n >> 8 & eA, n & eA, parseInt(A.substr(7), 16) / 255];
            A = parseInt(A.substr(1), 16),
            n = [A >> 16, A >> 8 & eA, A & eA]
        } else if (A.substr(0, 3) === "hsl") {
            if (n = B = A.match(Qf),
            !t)
                a = +n[0] % 360 / 360,
                l = +n[1] / 100,
                u = +n[2] / 100,
                s = u <= .5 ? u * (l + 1) : u + l - u * l,
                i = u * 2 - s,
                n.length > 3 && (n[3] *= 1),
                n[0] = Vu(a + 1 / 3, i, s),
                n[1] = Vu(a, i, s),
                n[2] = Vu(a - 1 / 3, i, s);
            else if (~A.indexOf("="))
                return n = A.match(cC),
                r && n.length < 4 && (n[3] = 1),
                n
        } else
            n = A.match(Qf) || Gi.transparent;
        n = n.map(Number)
    }
    return t && !B && (i = n[0] / eA,
    s = n[1] / eA,
    o = n[2] / eA,
    c = Math.max(i, s, o),
    f = Math.min(i, s, o),
    u = (c + f) / 2,
    c === f ? a = l = 0 : (d = c - f,
    l = u > .5 ? d / (2 - c - f) : d / (c + f),
    a = c === i ? (s - o) / d + (s < o ? 6 : 0) : c === s ? (o - i) / d + 2 : (i - s) / d + 4,
    a *= 60),
    n[0] = ~~(a + .5),
    n[1] = ~~(l * 100 + .5),
    n[2] = ~~(u * 100 + .5)),
    r && n.length < 4 && (n[3] = 1),
    n
}, kC = function(A) {
    var t = []
      , r = []
      , n = -1;
    return A.split(pr).forEach(function(i) {
        var s = i.match(Vn) || [];
        t.push.apply(t, s),
        r.push(n += s.length + 1)
    }),
    t.c = r,
    t
}, dp = function(A, t, r) {
    var n = "", i = (A + n).match(pr), s = t ? "hsla(" : "rgba(", o = 0, a, l, u, c;
    if (!i)
        return A;
    if (i = i.map(function(f) {
        return (f = DC(f, t, 1)) && s + (t ? f[0] + "," + f[1] + "%," + f[2] + "%," + f[3] : f.join(",")) + ")"
    }),
    r && (u = kC(A),
    a = r.c,
    a.join(n) !== u.c.join(n)))
        for (l = A.replace(pr, "1").split(Vn),
        c = l.length - 1; o < c; o++)
            n += l[o] + (~a.indexOf(o) ? i.shift() || s + "0,0,0,0)" : (u.length ? u : i.length ? i : r).shift());
    if (!l)
        for (l = A.split(pr),
        c = l.length - 1; o < c; o++)
            n += l[o] + i[o];
    return n + l[c]
}, pr = function() {
    var e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", A;
    for (A in Gi)
        e += "|" + A + "\\b";
    return new RegExp(e + ")","gi")
}(), LH = /hsl[a]?\(/, MC = function(A) {
    var t = A.join(" "), r;
    if (pr.lastIndex = 0,
    pr.test(t))
        return r = LH.test(t),
        A[1] = dp(A[1], r),
        A[0] = dp(A[0], r, kC(A[1])),
        !0
}, Rs, Qe = function() {
    var e = Date.now, A = 500, t = 33, r = e(), n = r, i = 1e3 / 240, s = i, o = [], a, l, u, c, f, d, B = function h(y) {
        var p = e() - n, g = y === !0, m, C, v, Q;
        if ((p > A || p < 0) && (r += p - t),
        n += p,
        v = n - r,
        m = v - s,
        (m > 0 || g) && (Q = ++c.frame,
        f = v - c.time * 1e3,
        c.time = v = v / 1e3,
        s += m + (m >= i ? 4 : i - m),
        C = 1),
        g || (a = l(h)),
        C)
            for (d = 0; d < o.length; d++)
                o[d](v, f, Q, y)
    };
    return c = {
        time: 0,
        frame: 0,
        tick: function() {
            B(!0)
        },
        deltaRatio: function(y) {
            return f / (1e3 / (y || 60))
        },
        wake: function() {
            hC && (!Ff && Fh() && (ut = Ff = window,
            Uh = ut.document || {},
            Se.gsap = me,
            (ut.gsapVersions || (ut.gsapVersions = [])).push(me.version),
            gC(Al || ut.GreenSockGlobals || !ut.gsap && ut || {}),
            LC.forEach(bC)),
            u = typeof requestAnimationFrame < "u" && requestAnimationFrame,
            a && c.sleep(),
            l = u || function(y) {
                return setTimeout(y, s - c.time * 1e3 + 1 | 0)
            }
            ,
            Rs = 1,
            B(2))
        },
        sleep: function() {
            (u ? cancelAnimationFrame : clearTimeout)(a),
            Rs = 0,
            l = Os
        },
        lagSmoothing: function(y, p) {
            A = y || 1 / 0,
            t = Math.min(p || 33, A)
        },
        fps: function(y) {
            i = 1e3 / (y || 240),
            s = c.time * 1e3 + i
        },
        add: function(y, p, g) {
            var m = p ? function(C, v, Q, U) {
                y(C, v, Q, U),
                c.remove(m)
            }
            : y;
            return c.remove(y),
            o[g ? "unshift" : "push"](m),
            Bi(),
            m
        },
        remove: function(y, p) {
            ~(p = o.indexOf(y)) && o.splice(p, 1) && d >= p && d--
        },
        _listeners: o
    },
    c
}(), Bi = function() {
    return !Rs && Qe.wake()
}, Y = {}, bH = /^[\d.\-M][\d.\-,\s]/, DH = /["']/g, kH = function(A) {
    for (var t = {}, r = A.substr(1, A.length - 3).split(":"), n = r[0], i = 1, s = r.length, o, a, l; i < s; i++)
        a = r[i],
        o = i !== s - 1 ? a.lastIndexOf(",") : a.length,
        l = a.substr(0, o),
        t[n] = isNaN(l) ? l.replace(DH, "").trim() : +l,
        n = a.substr(o + 1).trim();
    return t
}, MH = function(A) {
    var t = A.indexOf("(") + 1
      , r = A.indexOf(")")
      , n = A.indexOf("(", t);
    return A.substring(t, ~n && n < r ? A.indexOf(")", r + 1) : r)
}, KH = function(A) {
    var t = (A + "").split("(")
      , r = Y[t[0]];
    return r && t.length > 1 && r.config ? r.config.apply(null, ~A.indexOf("{") ? [kH(t[1])] : MH(A).split(",").map(yC)) : Y._CE && bH.test(A) ? Y._CE("", A) : r
}, KC = function(A) {
    return function(t) {
        return 1 - A(1 - t)
    }
}, PC = function e(A, t) {
    for (var r = A._first, n; r; )
        r instanceof re ? e(r, t) : r.vars.yoyoEase && (!r._yoyo || !r._repeat) && r._yoyo !== t && (r.timeline ? e(r.timeline, t) : (n = r._ease,
        r._ease = r._yEase,
        r._yEase = n,
        r._yoyo = t)),
        r = r._next
}, en = function(A, t) {
    return A && (wA(A) ? A : Y[A] || KH(A)) || t
}, Bn = function(A, t, r, n) {
    r === void 0 && (r = function(a) {
        return 1 - t(1 - a)
    }
    ),
    n === void 0 && (n = function(a) {
        return a < .5 ? t(a * 2) / 2 : 1 - t((1 - a) * 2) / 2
    }
    );
    var i = {
        easeIn: t,
        easeOut: r,
        easeInOut: n
    }, s;
    return he(A, function(o) {
        Y[o] = Se[o] = i,
        Y[s = o.toLowerCase()] = r;
        for (var a in i)
            Y[s + (a === "easeIn" ? ".in" : a === "easeOut" ? ".out" : ".inOut")] = Y[o + "." + a] = i[a]
    }),
    i
}, OC = function(A) {
    return function(t) {
        return t < .5 ? (1 - A(1 - t * 2)) / 2 : .5 + A((t - .5) * 2) / 2
    }
}, Gu = function e(A, t, r) {
    var n = t >= 1 ? t : 1
      , i = (r || (A ? .3 : .45)) / (t < 1 ? t : 1)
      , s = i / vf * (Math.asin(1 / n) || 0)
      , o = function(u) {
        return u === 1 ? 1 : n * Math.pow(2, -10 * u) * fH((u - s) * i) + 1
    }
      , a = A === "out" ? o : A === "in" ? function(l) {
        return 1 - o(1 - l)
    }
    : OC(o);
    return i = vf / i,
    a.config = function(l, u) {
        return e(A, l, u)
    }
    ,
    a
}, ju = function e(A, t) {
    t === void 0 && (t = 1.70158);
    var r = function(s) {
        return s ? --s * s * ((t + 1) * s + t) + 1 : 0
    }
      , n = A === "out" ? r : A === "in" ? function(i) {
        return 1 - r(1 - i)
    }
    : OC(r);
    return n.config = function(i) {
        return e(A, i)
    }
    ,
    n
};
he("Linear,Quad,Cubic,Quart,Quint,Strong", function(e, A) {
    var t = A < 5 ? A + 1 : A;
    Bn(e + ",Power" + (t - 1), A ? function(r) {
        return Math.pow(r, t)
    }
    : function(r) {
        return r
    }
    , function(r) {
        return 1 - Math.pow(1 - r, t)
    }, function(r) {
        return r < .5 ? Math.pow(r * 2, t) / 2 : 1 - Math.pow((1 - r) * 2, t) / 2
    })
});
Y.Linear.easeNone = Y.none = Y.Linear.easeIn;
Bn("Elastic", Gu("in"), Gu("out"), Gu());
(function(e, A) {
    var t = 1 / A
      , r = 2 * t
      , n = 2.5 * t
      , i = function(o) {
        return o < t ? e * o * o : o < r ? e * Math.pow(o - 1.5 / A, 2) + .75 : o < n ? e * (o -= 2.25 / A) * o + .9375 : e * Math.pow(o - 2.625 / A, 2) + .984375
    };
    Bn("Bounce", function(s) {
        return 1 - i(1 - s)
    }, i)
}
)(7.5625, 2.75);
Bn("Expo", function(e) {
    return Math.pow(2, 10 * (e - 1)) * e + e * e * e * e * e * e * (1 - e)
});
Bn("Circ", function(e) {
    return -(lC(1 - e * e) - 1)
});
Bn("Sine", function(e) {
    return e === 1 ? 1 : -cH(e * lH) + 1
});
Bn("Back", ju("in"), ju("out"), ju());
Y.SteppedEase = Y.steps = Se.SteppedEase = {
    config: function(A, t) {
        A === void 0 && (A = 1);
        var r = 1 / A
          , n = A + (t ? 0 : 1)
          , i = t ? 1 : 0
          , s = 1 - tA;
        return function(o) {
            return ((n * no(0, s, o) | 0) + i) * r
        }
    }
};
fi.ease = Y["quad.out"];
he("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(e) {
    return Ih += e + "," + e + "Params,"
});
var NC = function(A, t) {
    this.id = uH++,
    A._gsap = this,
    this.target = A,
    this.harness = t,
    this.get = t ? t.get : mC,
    this.set = t ? t.getSetter : bh
}
  , Vs = function() {
    function e(t) {
        this.vars = t,
        this._delay = +t.delay || 0,
        (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && (this._rDelay = t.repeatDelay || 0,
        this._yoyo = !!t.yoyo || !!t.yoyoEase),
        this._ts = 1,
        gi(this, +t.duration, 1, 1),
        this.data = t.data,
        cA && (this._ctx = cA,
        cA.data.push(this)),
        Rs || Qe.wake()
    }
    var A = e.prototype;
    return A.delay = function(r) {
        return r || r === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + r - this._delay),
        this._delay = r,
        this) : this._delay
    }
    ,
    A.duration = function(r) {
        return arguments.length ? this.totalDuration(this._repeat > 0 ? r + (r + this._rDelay) * this._repeat : r) : this.totalDuration() && this._dur
    }
    ,
    A.totalDuration = function(r) {
        return arguments.length ? (this._dirty = 0,
        gi(this, this._repeat < 0 ? r : (r - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
    }
    ,
    A.totalTime = function(r, n) {
        if (Bi(),
        !arguments.length)
            return this._tTime;
        var i = this._dp;
        if (i && i.smoothChildTiming && this._ts) {
            for (Vl(this, r),
            !i._dp || i.parent || QC(i, this); i && i.parent; )
                i.parent._time !== i._start + (i._ts >= 0 ? i._tTime / i._ts : (i.totalDuration() - i._tTime) / -i._ts) && i.totalTime(i._tTime, !0),
                i = i.parent;
            !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && r < this._tDur || this._ts < 0 && r > 0 || !this._tDur && !r) && ft(this._dp, this, this._start - this._delay)
        }
        return (this._tTime !== r || !this._dur && !n || this._initted && Math.abs(this._zTime) === tA || !r && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = r),
        wC(this, r, n)),
        this
    }
    ,
    A.time = function(r, n) {
        return arguments.length ? this.totalTime(Math.min(this.totalDuration(), r + up(this)) % (this._dur + this._rDelay) || (r ? this._dur : 0), n) : this._time
    }
    ,
    A.totalProgress = function(r, n) {
        return arguments.length ? this.totalTime(this.totalDuration() * r, n) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() >= 0 && this._initted ? 1 : 0
    }
    ,
    A.progress = function(r, n) {
        return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - r : r) + up(this), n) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0
    }
    ,
    A.iteration = function(r, n) {
        var i = this.duration() + this._rDelay;
        return arguments.length ? this.totalTime(this._time + (r - 1) * i, n) : this._repeat ? hi(this._tTime, i) + 1 : 1
    }
    ,
    A.timeScale = function(r, n) {
        if (!arguments.length)
            return this._rts === -tA ? 0 : this._rts;
        if (this._rts === r)
            return this;
        var i = this.parent && this._ts ? rl(this.parent._time, this) : this._tTime;
        return this._rts = +r || 0,
        this._ts = this._ps || r === -tA ? 0 : this._rts,
        this.totalTime(no(-Math.abs(this._delay), this.totalDuration(), i), n !== !1),
        Rl(this),
        wH(this)
    }
    ,
    A.paused = function(r) {
        return arguments.length ? (this._ps !== r && (this._ps = r,
        r ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()),
        this._ts = this._act = 0) : (Bi(),
        this._ts = this._rts,
        this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== tA && (this._tTime -= tA)))),
        this) : this._ps
    }
    ,
    A.startTime = function(r) {
        if (arguments.length) {
            this._start = r;
            var n = this.parent || this._dp;
            return n && (n._sort || !this.parent) && ft(n, this, r - this._delay),
            this
        }
        return this._start
    }
    ,
    A.endTime = function(r) {
        return this._start + (de(r) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
    }
    ,
    A.rawTime = function(r) {
        var n = this.parent || this._dp;
        return n ? r && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? rl(n.rawTime(r), this) : this._tTime : this._tTime
    }
    ,
    A.revert = function(r) {
        r === void 0 && (r = gH);
        var n = VA;
        return VA = r,
        _h(this) && (this.timeline && this.timeline.revert(r),
        this.totalTime(-.01, r.suppressEvents)),
        this.data !== "nested" && r.kill !== !1 && this.kill(),
        VA = n,
        this
    }
    ,
    A.globalTime = function(r) {
        for (var n = this, i = arguments.length ? r : n.rawTime(); n; )
            i = n._start + i / (Math.abs(n._ts) || 1),
            n = n._dp;
        return !this.parent && this._sat ? this._sat.globalTime(r) : i
    }
    ,
    A.repeat = function(r) {
        return arguments.length ? (this._repeat = r === 1 / 0 ? -2 : r,
        cp(this)) : this._repeat === -2 ? 1 / 0 : this._repeat
    }
    ,
    A.repeatDelay = function(r) {
        if (arguments.length) {
            var n = this._time;
            return this._rDelay = r,
            cp(this),
            n ? this.time(n) : this
        }
        return this._rDelay
    }
    ,
    A.yoyo = function(r) {
        return arguments.length ? (this._yoyo = r,
        this) : this._yoyo
    }
    ,
    A.seek = function(r, n) {
        return this.totalTime(Me(this, r), de(n))
    }
    ,
    A.restart = function(r, n) {
        return this.play().totalTime(r ? -this._delay : 0, de(n)),
        this._dur || (this._zTime = -tA),
        this
    }
    ,
    A.play = function(r, n) {
        return r != null && this.seek(r, n),
        this.reversed(!1).paused(!1)
    }
    ,
    A.reverse = function(r, n) {
        return r != null && this.seek(r || this.totalDuration(), n),
        this.reversed(!0).paused(!1)
    }
    ,
    A.pause = function(r, n) {
        return r != null && this.seek(r, n),
        this.paused(!0)
    }
    ,
    A.resume = function() {
        return this.paused(!1)
    }
    ,
    A.reversed = function(r) {
        return arguments.length ? (!!r !== this.reversed() && this.timeScale(-this._rts || (r ? -tA : 0)),
        this) : this._rts < 0
    }
    ,
    A.invalidate = function() {
        return this._initted = this._act = 0,
        this._zTime = -tA,
        this
    }
    ,
    A.isActive = function() {
        var r = this.parent || this._dp, n = this._start, i;
        return !!(!r || this._ts && this._initted && r.isActive() && (i = r.rawTime(!0)) >= n && i < this.endTime(!0) - tA)
    }
    ,
    A.eventCallback = function(r, n, i) {
        var s = this.vars;
        return arguments.length > 1 ? (n ? (s[r] = n,
        i && (s[r + "Params"] = i),
        r === "onUpdate" && (this._onUpdate = n)) : delete s[r],
        this) : s[r]
    }
    ,
    A.then = function(r) {
        var n = this;
        return new Promise(function(i) {
            var s = wA(r) ? r : CC
              , o = function() {
                var l = n.then;
                n.then = null,
                wA(s) && (s = s(n)) && (s.then || s === n) && (n.then = l),
                i(s),
                n.then = l
            };
            n._initted && n.totalProgress() === 1 && n._ts >= 0 || !n._tTime && n._ts < 0 ? o() : n._prom = o
        }
        )
    }
    ,
    A.kill = function() {
        Vi(this)
    }
    ,
    e
}();
Te(Vs.prototype, {
    _time: 0,
    _start: 0,
    _end: 0,
    _tTime: 0,
    _tDur: 0,
    _dirty: 0,
    _repeat: 0,
    _yoyo: !1,
    parent: null,
    _initted: !1,
    _rDelay: 0,
    _ts: 1,
    _dp: 0,
    ratio: 0,
    _zTime: -tA,
    _prom: 0,
    _ps: !1,
    _rts: 1
});
var re = function(e) {
    aC(A, e);
    function A(r, n) {
        var i;
        return r === void 0 && (r = {}),
        i = e.call(this, r) || this,
        i.labels = {},
        i.smoothChildTiming = !!r.smoothChildTiming,
        i.autoRemoveChildren = !!r.autoRemoveChildren,
        i._sort = de(r.sortChildren),
        dA && ft(r.parent || dA, Qt(i), n),
        r.reversed && i.reverse(),
        r.paused && i.paused(!0),
        r.scrollTrigger && FC(Qt(i), r.scrollTrigger),
        i
    }
    var t = A.prototype;
    return t.to = function(n, i, s) {
        return fs(0, arguments, this),
        this
    }
    ,
    t.from = function(n, i, s) {
        return fs(1, arguments, this),
        this
    }
    ,
    t.fromTo = function(n, i, s, o) {
        return fs(2, arguments, this),
        this
    }
    ,
    t.set = function(n, i, s) {
        return i.duration = 0,
        i.parent = this,
        cs(i).repeatDelay || (i.repeat = 0),
        i.immediateRender = !!i.immediateRender,
        new IA(n,i,Me(this, s),1),
        this
    }
    ,
    t.call = function(n, i, s) {
        return ft(this, IA.delayedCall(0, n, i), s)
    }
    ,
    t.staggerTo = function(n, i, s, o, a, l, u) {
        return s.duration = i,
        s.stagger = s.stagger || o,
        s.onComplete = l,
        s.onCompleteParams = u,
        s.parent = this,
        new IA(n,s,Me(this, a)),
        this
    }
    ,
    t.staggerFrom = function(n, i, s, o, a, l, u) {
        return s.runBackwards = 1,
        cs(s).immediateRender = de(s.immediateRender),
        this.staggerTo(n, i, s, o, a, l, u)
    }
    ,
    t.staggerFromTo = function(n, i, s, o, a, l, u, c) {
        return o.startAt = s,
        cs(o).immediateRender = de(o.immediateRender),
        this.staggerTo(n, i, o, a, l, u, c)
    }
    ,
    t.render = function(n, i, s) {
        var o = this._time, a = this._dirty ? this.totalDuration() : this._tDur, l = this._dur, u = n <= 0 ? 0 : HA(n), c = this._zTime < 0 != n < 0 && (this._initted || !l), f, d, B, h, y, p, g, m, C, v, Q, U;
        if (this !== dA && u > a && n >= 0 && (u = a),
        u !== this._tTime || s || c) {
            if (o !== this._time && l && (u += this._time - o,
            n += this._time - o),
            f = u,
            C = this._start,
            m = this._ts,
            p = !m,
            c && (l || (o = this._zTime),
            (n || !i) && (this._zTime = n)),
            this._repeat) {
                if (Q = this._yoyo,
                y = l + this._rDelay,
                this._repeat < -1 && n < 0)
                    return this.totalTime(y * 100 + n, i, s);
                if (f = HA(u % y),
                u === a ? (h = this._repeat,
                f = l) : (v = HA(u / y),
                h = ~~v,
                h && h === v && (f = l,
                h--),
                f > l && (f = l)),
                v = hi(this._tTime, y),
                !o && this._tTime && v !== h && this._tTime - v * y - this._dur <= 0 && (v = h),
                Q && h & 1 && (f = l - f,
                U = 1),
                h !== v && !this._lock) {
                    var F = Q && v & 1
                      , x = F === (Q && h & 1);
                    if (h < v && (F = !F),
                    o = F ? 0 : u % l ? l : u,
                    this._lock = 1,
                    this.render(o || (U ? 0 : HA(h * y)), i, !l)._lock = 0,
                    this._tTime = u,
                    !i && this.parent && xe(this, "onRepeat"),
                    this.vars.repeatRefresh && !U && (this.invalidate()._lock = 1),
                    o && o !== this._time || p !== !this._ts || this.vars.onRepeat && !this.parent && !this._act)
                        return this;
                    if (l = this._dur,
                    a = this._tDur,
                    x && (this._lock = 2,
                    o = F ? l : -1e-4,
                    this.render(o, !0),
                    this.vars.repeatRefresh && !U && this.invalidate()),
                    this._lock = 0,
                    !this._ts && !p)
                        return this;
                    PC(this, U)
                }
            }
            if (this._hasPause && !this._forcing && this._lock < 2 && (g = QH(this, HA(o), HA(f)),
            g && (u -= f - (f = g._start))),
            this._tTime = u,
            this._time = f,
            this._act = !m,
            this._initted || (this._onUpdate = this.vars.onUpdate,
            this._initted = 1,
            this._zTime = n,
            o = 0),
            !o && u && !i && !v && (xe(this, "onStart"),
            this._tTime !== u))
                return this;
            if (f >= o && n >= 0)
                for (d = this._first; d; ) {
                    if (B = d._next,
                    (d._act || f >= d._start) && d._ts && g !== d) {
                        if (d.parent !== this)
                            return this.render(n, i, s);
                        if (d.render(d._ts > 0 ? (f - d._start) * d._ts : (d._dirty ? d.totalDuration() : d._tDur) + (f - d._start) * d._ts, i, s),
                        f !== this._time || !this._ts && !p) {
                            g = 0,
                            B && (u += this._zTime = -tA);
                            break
                        }
                    }
                    d = B
                }
            else {
                d = this._last;
                for (var H = n < 0 ? n : f; d; ) {
                    if (B = d._prev,
                    (d._act || H <= d._end) && d._ts && g !== d) {
                        if (d.parent !== this)
                            return this.render(n, i, s);
                        if (d.render(d._ts > 0 ? (H - d._start) * d._ts : (d._dirty ? d.totalDuration() : d._tDur) + (H - d._start) * d._ts, i, s || VA && _h(d)),
                        f !== this._time || !this._ts && !p) {
                            g = 0,
                            B && (u += this._zTime = H ? -tA : tA);
                            break
                        }
                    }
                    d = B
                }
            }
            if (g && !i && (this.pause(),
            g.render(f >= o ? 0 : -tA)._zTime = f >= o ? 1 : -1,
            this._ts))
                return this._start = C,
                Rl(this),
                this.render(n, i, s);
            this._onUpdate && !i && xe(this, "onUpdate", !0),
            (u === a && this._tTime >= this.totalDuration() || !u && o) && (C === this._start || Math.abs(m) !== Math.abs(this._ts)) && (this._lock || ((n || !l) && (u === a && this._ts > 0 || !u && this._ts < 0) && Fr(this, 1),
            !i && !(n < 0 && !o) && (u || o || !a) && (xe(this, u === a && n >= 0 ? "onComplete" : "onReverseComplete", !0),
            this._prom && !(u < a && this.timeScale() > 0) && this._prom())))
        }
        return this
    }
    ,
    t.add = function(n, i) {
        var s = this;
        if (Pt(i) || (i = Me(this, i, n)),
        !(n instanceof Vs)) {
            if (ZA(n))
                return n.forEach(function(o) {
                    return s.add(o, i)
                }),
                this;
            if (KA(n))
                return this.addLabel(n, i);
            if (wA(n))
                n = IA.delayedCall(0, n);
            else
                return this
        }
        return this !== n ? ft(this, n, i) : this
    }
    ,
    t.getChildren = function(n, i, s, o) {
        n === void 0 && (n = !0),
        i === void 0 && (i = !0),
        s === void 0 && (s = !0),
        o === void 0 && (o = -Ve);
        for (var a = [], l = this._first; l; )
            l._start >= o && (l instanceof IA ? i && a.push(l) : (s && a.push(l),
            n && a.push.apply(a, l.getChildren(!0, i, s)))),
            l = l._next;
        return a
    }
    ,
    t.getById = function(n) {
        for (var i = this.getChildren(1, 1, 1), s = i.length; s--; )
            if (i[s].vars.id === n)
                return i[s]
    }
    ,
    t.remove = function(n) {
        return KA(n) ? this.removeLabel(n) : wA(n) ? this.killTweensOf(n) : (n.parent === this && Nl(this, n),
        n === this._recent && (this._recent = this._last),
        An(this))
    }
    ,
    t.totalTime = function(n, i) {
        return arguments.length ? (this._forcing = 1,
        !this._dp && this._ts && (this._start = HA(Qe.time - (this._ts > 0 ? n / this._ts : (this.totalDuration() - n) / -this._ts))),
        e.prototype.totalTime.call(this, n, i),
        this._forcing = 0,
        this) : this._tTime
    }
    ,
    t.addLabel = function(n, i) {
        return this.labels[n] = Me(this, i),
        this
    }
    ,
    t.removeLabel = function(n) {
        return delete this.labels[n],
        this
    }
    ,
    t.addPause = function(n, i, s) {
        var o = IA.delayedCall(0, i || Os, s);
        return o.data = "isPause",
        this._hasPause = 1,
        ft(this, o, Me(this, n))
    }
    ,
    t.removePause = function(n) {
        var i = this._first;
        for (n = Me(this, n); i; )
            i._start === n && i.data === "isPause" && Fr(i),
            i = i._next
    }
    ,
    t.killTweensOf = function(n, i, s) {
        for (var o = this.getTweensOf(n, s), a = o.length; a--; )
            er !== o[a] && o[a].kill(n, i);
        return this
    }
    ,
    t.getTweensOf = function(n, i) {
        for (var s = [], o = Ge(n), a = this._first, l = Pt(i), u; a; )
            a instanceof IA ? BH(a._targets, o) && (l ? (!er || a._initted && a._ts) && a.globalTime(0) <= i && a.globalTime(a.totalDuration()) > i : !i || a.isActive()) && s.push(a) : (u = a.getTweensOf(o, i)).length && s.push.apply(s, u),
            a = a._next;
        return s
    }
    ,
    t.tweenTo = function(n, i) {
        i = i || {};
        var s = this, o = Me(s, n), a = i, l = a.startAt, u = a.onStart, c = a.onStartParams, f = a.immediateRender, d, B = IA.to(s, Te({
            ease: i.ease || "none",
            lazy: !1,
            immediateRender: !1,
            time: o,
            overwrite: "auto",
            duration: i.duration || Math.abs((o - (l && "time"in l ? l.time : s._time)) / s.timeScale()) || tA,
            onStart: function() {
                if (s.pause(),
                !d) {
                    var y = i.duration || Math.abs((o - (l && "time"in l ? l.time : s._time)) / s.timeScale());
                    B._dur !== y && gi(B, y, 0, 1).render(B._time, !0, !0),
                    d = 1
                }
                u && u.apply(B, c || [])
            }
        }, i));
        return f ? B.render(0) : B
    }
    ,
    t.tweenFromTo = function(n, i, s) {
        return this.tweenTo(i, Te({
            startAt: {
                time: Me(this, n)
            }
        }, s))
    }
    ,
    t.recent = function() {
        return this._recent
    }
    ,
    t.nextLabel = function(n) {
        return n === void 0 && (n = this._time),
        fp(this, Me(this, n))
    }
    ,
    t.previousLabel = function(n) {
        return n === void 0 && (n = this._time),
        fp(this, Me(this, n), 1)
    }
    ,
    t.currentLabel = function(n) {
        return arguments.length ? this.seek(n, !0) : this.previousLabel(this._time + tA)
    }
    ,
    t.shiftChildren = function(n, i, s) {
        s === void 0 && (s = 0);
        for (var o = this._first, a = this.labels, l; o; )
            o._start >= s && (o._start += n,
            o._end += n),
            o = o._next;
        if (i)
            for (l in a)
                a[l] >= s && (a[l] += n);
        return An(this)
    }
    ,
    t.invalidate = function(n) {
        var i = this._first;
        for (this._lock = 0; i; )
            i.invalidate(n),
            i = i._next;
        return e.prototype.invalidate.call(this, n)
    }
    ,
    t.clear = function(n) {
        n === void 0 && (n = !0);
        for (var i = this._first, s; i; )
            s = i._next,
            this.remove(i),
            i = s;
        return this._dp && (this._time = this._tTime = this._pTime = 0),
        n && (this.labels = {}),
        An(this)
    }
    ,
    t.totalDuration = function(n) {
        var i = 0, s = this, o = s._last, a = Ve, l, u, c;
        if (arguments.length)
            return s.timeScale((s._repeat < 0 ? s.duration() : s.totalDuration()) / (s.reversed() ? -n : n));
        if (s._dirty) {
            for (c = s.parent; o; )
                l = o._prev,
                o._dirty && o.totalDuration(),
                u = o._start,
                u > a && s._sort && o._ts && !s._lock ? (s._lock = 1,
                ft(s, o, u - o._delay, 1)._lock = 0) : a = u,
                u < 0 && o._ts && (i -= u,
                (!c && !s._dp || c && c.smoothChildTiming) && (s._start += u / s._ts,
                s._time -= u,
                s._tTime -= u),
                s.shiftChildren(-u, !1, -1 / 0),
                a = 0),
                o._end > i && o._ts && (i = o._end),
                o = l;
            gi(s, s === dA && s._time > i ? s._time : i, 1, 1),
            s._dirty = 0
        }
        return s._tDur
    }
    ,
    A.updateRoot = function(n) {
        if (dA._ts && (wC(dA, rl(n, dA)),
        pC = Qe.frame),
        Qe.frame >= ap) {
            ap += Ie.autoSleep || 120;
            var i = dA._first;
            if ((!i || !i._ts) && Ie.autoSleep && Qe._listeners.length < 2) {
                for (; i && !i._ts; )
                    i = i._next;
                i || Qe.sleep()
            }
        }
    }
    ,
    A
}(Vs);
Te(re.prototype, {
    _lock: 0,
    _hasPause: 0,
    _forcing: 0
});
var PH = function(A, t, r, n, i, s, o) {
    var a = new ge(this._pt,A,t,0,1,XC,null,i), l = 0, u = 0, c, f, d, B, h, y, p, g;
    for (a.b = r,
    a.e = n,
    r += "",
    n += "",
    (p = ~n.indexOf("random(")) && (n = Ns(n)),
    s && (g = [r, n],
    s(g, A, t),
    r = g[0],
    n = g[1]),
    f = r.match(Nu) || []; c = Nu.exec(n); )
        B = c[0],
        h = n.substring(l, c.index),
        d ? d = (d + 1) % 5 : h.substr(-5) === "rgba(" && (d = 1),
        B !== f[u++] && (y = parseFloat(f[u - 1]) || 0,
        a._pt = {
            _next: a._pt,
            p: h || u === 1 ? h : ",",
            s: y,
            c: B.charAt(1) === "=" ? Zn(y, B) - y : parseFloat(B) - y,
            m: d && d < 4 ? Math.round : 0
        },
        l = Nu.lastIndex);
    return a.c = l < n.length ? n.substring(l, n.length) : "",
    a.fp = o,
    (fC.test(n) || p) && (a.e = 0),
    this._pt = a,
    a
}, Sh = function(A, t, r, n, i, s, o, a, l, u) {
    wA(n) && (n = n(i || 0, A, s));
    var c = A[t], f = r !== "get" ? r : wA(c) ? l ? A[t.indexOf("set") || !wA(A["get" + t.substr(3)]) ? t : "get" + t.substr(3)](l) : A[t]() : c, d = wA(c) ? l ? GH : jC : Lh, B;
    if (KA(n) && (~n.indexOf("random(") && (n = Ns(n)),
    n.charAt(1) === "=" && (B = Zn(f, n) + ($A(f) || 0),
    (B || B === 0) && (n = B))),
    !u || f !== n || Sf)
        return !isNaN(f * n) && n !== "" ? (B = new ge(this._pt,A,t,+f || 0,n - (f || 0),typeof c == "boolean" ? zH : zC,0,d),
        l && (B.fp = l),
        o && B.modifier(o, this, A),
        this._pt = B) : (!c && !(t in A) && xh(t, n),
        PH.call(this, A, t, f, n, d, a || Ie.stringFilter, l))
}, OH = function(A, t, r, n, i) {
    if (wA(A) && (A = ds(A, i, t, r, n)),
    !pt(A) || A.style && A.nodeType || ZA(A) || uC(A))
        return KA(A) ? ds(A, i, t, r, n) : A;
    var s = {}, o;
    for (o in A)
        s[o] = ds(A[o], i, t, r, n);
    return s
}, RC = function(A, t, r, n, i, s) {
    var o, a, l, u;
    if (ve[A] && (o = new ve[A]).init(i, o.rawVars ? t[A] : OH(t[A], n, i, s, r), r, n, s) !== !1 && (r._pt = a = new ge(r._pt,i,A,0,1,o.render,o,0,o.priority),
    r !== Gn))
        for (l = r._ptLookup[r._targets.indexOf(i)],
        u = o._props.length; u--; )
            l[o._props[u]] = a;
    return o
}, er, Sf, Th = function e(A, t, r) {
    var n = A.vars, i = n.ease, s = n.startAt, o = n.immediateRender, a = n.lazy, l = n.onUpdate, u = n.runBackwards, c = n.yoyoEase, f = n.keyframes, d = n.autoRevert, B = A._dur, h = A._startAt, y = A._targets, p = A.parent, g = p && p.data === "nested" ? p.vars.targets : y, m = A._overwrite === "auto" && !vh, C = A.timeline, v, Q, U, F, x, H, E, L, b, D, j, T, V;
    if (C && (!f || !i) && (i = "none"),
    A._ease = en(i, fi.ease),
    A._yEase = c ? KC(en(c === !0 ? i : c, fi.ease)) : 0,
    c && A._yoyo && !A._repeat && (c = A._yEase,
    A._yEase = A._ease,
    A._ease = c),
    A._from = !C && !!n.runBackwards,
    !C || f && !n.stagger) {
        if (L = y[0] ? qr(y[0]).harness : 0,
        T = L && n[L.prop],
        v = tl(n, Eh),
        h && (h._zTime < 0 && h.progress(1),
        t < 0 && u && o && !d ? h.render(-1, !0) : h.revert(u && B ? ha : hH),
        h._lazy = 0),
        s) {
            if (Fr(A._startAt = IA.set(y, Te({
                data: "isStart",
                overwrite: !1,
                parent: p,
                immediateRender: !0,
                lazy: !h && de(a),
                startAt: null,
                delay: 0,
                onUpdate: l && function() {
                    return xe(A, "onUpdate")
                }
                ,
                stagger: 0
            }, s))),
            A._startAt._dp = 0,
            A._startAt._sat = A,
            t < 0 && (VA || !o && !d) && A._startAt.revert(ha),
            o && B && t <= 0 && r <= 0) {
                t && (A._zTime = t);
                return
            }
        } else if (u && B && !h) {
            if (t && (o = !1),
            U = Te({
                overwrite: !1,
                data: "isFromStart",
                lazy: o && !h && de(a),
                immediateRender: o,
                stagger: 0,
                parent: p
            }, v),
            T && (U[L.prop] = T),
            Fr(A._startAt = IA.set(y, U)),
            A._startAt._dp = 0,
            A._startAt._sat = A,
            t < 0 && (VA ? A._startAt.revert(ha) : A._startAt.render(-1, !0)),
            A._zTime = t,
            !o)
                e(A._startAt, tA, tA);
            else if (!t)
                return
        }
        for (A._pt = A._ptCache = 0,
        a = B && de(a) || a && !B,
        Q = 0; Q < y.length; Q++) {
            if (x = y[Q],
            E = x._gsap || Hh(y)[Q]._gsap,
            A._ptLookup[Q] = D = {},
            Uf[E.id] && Br.length && el(),
            j = g === y ? Q : g.indexOf(x),
            L && (b = new L).init(x, T || v, A, j, g) !== !1 && (A._pt = F = new ge(A._pt,x,b.name,0,1,b.render,b,0,b.priority),
            b._props.forEach(function(_) {
                D[_] = F
            }),
            b.priority && (H = 1)),
            !L || T)
                for (U in v)
                    ve[U] && (b = RC(U, v, A, j, x, g)) ? b.priority && (H = 1) : D[U] = F = Sh.call(A, x, U, "get", v[U], j, g, 0, n.stringFilter);
            A._op && A._op[Q] && A.kill(x, A._op[Q]),
            m && A._pt && (er = A,
            dA.killTweensOf(x, D, A.globalTime(t)),
            V = !A.parent,
            er = 0),
            A._pt && a && (Uf[E.id] = 1)
        }
        H && WC(A),
        A._onInit && A._onInit(A)
    }
    A._onUpdate = l,
    A._initted = (!A._op || A._pt) && !V,
    f && t <= 0 && C.render(Ve, !0, !0)
}, NH = function(A, t, r, n, i, s, o, a) {
    var l = (A._pt && A._ptCache || (A._ptCache = {}))[t], u, c, f, d;
    if (!l)
        for (l = A._ptCache[t] = [],
        f = A._ptLookup,
        d = A._targets.length; d--; ) {
            if (u = f[d][t],
            u && u.d && u.d._pt)
                for (u = u.d._pt; u && u.p !== t && u.fp !== t; )
                    u = u._next;
            if (!u)
                return Sf = 1,
                A.vars[t] = "+=0",
                Th(A, o),
                Sf = 0,
                a ? Ps(t + " not eligible for reset") : 1;
            l.push(u)
        }
    for (d = l.length; d--; )
        c = l[d],
        u = c._pt || c,
        u.s = (n || n === 0) && !i ? n : u.s + (n || 0) + s * u.c,
        u.c = r - u.s,
        c.e && (c.e = vA(r) + $A(c.e)),
        c.b && (c.b = u.s + $A(c.b))
}, RH = function(A, t) {
    var r = A[0] ? qr(A[0]).harness : 0, n = r && r.aliases, i, s, o, a;
    if (!n)
        return t;
    i = di({}, t);
    for (s in n)
        if (s in i)
            for (a = n[s].split(","),
            o = a.length; o--; )
                i[a[o]] = i[s];
    return i
}, VH = function(A, t, r, n) {
    var i = t.ease || n || "power1.inOut", s, o;
    if (ZA(t))
        o = r[A] || (r[A] = []),
        t.forEach(function(a, l) {
            return o.push({
                t: l / (t.length - 1) * 100,
                v: a,
                e: i
            })
        });
    else
        for (s in t)
            o = r[s] || (r[s] = []),
            s === "ease" || o.push({
                t: parseFloat(A),
                v: t[s],
                e: i
            })
}, ds = function(A, t, r, n, i) {
    return wA(A) ? A.call(t, r, n, i) : KA(A) && ~A.indexOf("random(") ? Ns(A) : A
}, VC = Ih + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert", GC = {};
he(VC + ",id,stagger,delay,duration,paused,scrollTrigger", function(e) {
    return GC[e] = 1
});
var IA = function(e) {
    aC(A, e);
    function A(r, n, i, s) {
        var o;
        typeof n == "number" && (i.duration = n,
        n = i,
        i = null),
        o = e.call(this, s ? n : cs(n)) || this;
        var a = o.vars, l = a.duration, u = a.delay, c = a.immediateRender, f = a.stagger, d = a.overwrite, B = a.keyframes, h = a.defaults, y = a.scrollTrigger, p = a.yoyoEase, g = n.parent || dA, m = (ZA(r) || uC(r) ? Pt(r[0]) : "length"in n) ? [r] : Ge(r), C, v, Q, U, F, x, H, E;
        if (o._targets = m.length ? Hh(m) : Ps("GSAP target " + r + " not found. https://gsap.com", !Ie.nullTargetWarn) || [],
        o._ptLookup = [],
        o._overwrite = d,
        B || f || _o(l) || _o(u)) {
            if (n = o.vars,
            C = o.timeline = new re({
                data: "nested",
                defaults: h || {},
                targets: g && g.data === "nested" ? g.vars.targets : m
            }),
            C.kill(),
            C.parent = C._dp = Qt(o),
            C._start = 0,
            f || _o(l) || _o(u)) {
                if (U = m.length,
                H = f && IC(f),
                pt(f))
                    for (F in f)
                        ~VC.indexOf(F) && (E || (E = {}),
                        E[F] = f[F]);
                for (v = 0; v < U; v++)
                    Q = tl(n, GC),
                    Q.stagger = 0,
                    p && (Q.yoyoEase = p),
                    E && di(Q, E),
                    x = m[v],
                    Q.duration = +ds(l, Qt(o), v, x, m),
                    Q.delay = (+ds(u, Qt(o), v, x, m) || 0) - o._delay,
                    !f && U === 1 && Q.delay && (o._delay = u = Q.delay,
                    o._start += u,
                    Q.delay = 0),
                    C.to(x, Q, H ? H(v, x, m) : 0),
                    C._ease = Y.none;
                C.duration() ? l = u = 0 : o.timeline = 0
            } else if (B) {
                cs(Te(C.vars.defaults, {
                    ease: "none"
                })),
                C._ease = en(B.ease || n.ease || "none");
                var L = 0, b, D, j;
                if (ZA(B))
                    B.forEach(function(T) {
                        return C.to(m, T, ">")
                    }),
                    C.duration();
                else {
                    Q = {};
                    for (F in B)
                        F === "ease" || F === "easeEach" || VH(F, B[F], Q, B.easeEach);
                    for (F in Q)
                        for (b = Q[F].sort(function(T, V) {
                            return T.t - V.t
                        }),
                        L = 0,
                        v = 0; v < b.length; v++)
                            D = b[v],
                            j = {
                                ease: D.e,
                                duration: (D.t - (v ? b[v - 1].t : 0)) / 100 * l
                            },
                            j[F] = D.v,
                            C.to(m, j, L),
                            L += j.duration;
                    C.duration() < l && C.to({}, {
                        duration: l - C.duration()
                    })
                }
            }
            l || o.duration(l = C.duration())
        } else
            o.timeline = 0;
        return d === !0 && !vh && (er = Qt(o),
        dA.killTweensOf(m),
        er = 0),
        ft(g, Qt(o), i),
        n.reversed && o.reverse(),
        n.paused && o.paused(!0),
        (c || !l && !B && o._start === HA(g._time) && de(c) && yH(Qt(o)) && g.data !== "nested") && (o._tTime = -tA,
        o.render(Math.max(0, -u) || 0)),
        y && FC(Qt(o), y),
        o
    }
    var t = A.prototype;
    return t.render = function(n, i, s) {
        var o = this._time, a = this._tDur, l = this._dur, u = n < 0, c = n > a - tA && !u ? a : n < tA ? 0 : n, f, d, B, h, y, p, g, m, C;
        if (!l)
            vH(this, n, i, s);
        else if (c !== this._tTime || !n || s || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== u || this._lazy) {
            if (f = c,
            m = this.timeline,
            this._repeat) {
                if (h = l + this._rDelay,
                this._repeat < -1 && u)
                    return this.totalTime(h * 100 + n, i, s);
                if (f = HA(c % h),
                c === a ? (B = this._repeat,
                f = l) : (y = HA(c / h),
                B = ~~y,
                B && B === y ? (f = l,
                B--) : f > l && (f = l)),
                p = this._yoyo && B & 1,
                p && (C = this._yEase,
                f = l - f),
                y = hi(this._tTime, h),
                f === o && !s && this._initted && B === y)
                    return this._tTime = c,
                    this;
                B !== y && (m && this._yEase && PC(m, p),
                this.vars.repeatRefresh && !p && !this._lock && f !== h && this._initted && (this._lock = s = 1,
                this.render(HA(h * B), !0).invalidate()._lock = 0))
            }
            if (!this._initted) {
                if (UC(this, u ? n : f, s, i, c))
                    return this._tTime = 0,
                    this;
                if (o !== this._time && !(s && this.vars.repeatRefresh && B !== y))
                    return this;
                if (l !== this._dur)
                    return this.render(n, i, s)
            }
            if (this._tTime = c,
            this._time = f,
            !this._act && this._ts && (this._act = 1,
            this._lazy = 0),
            this.ratio = g = (C || this._ease)(f / l),
            this._from && (this.ratio = g = 1 - g),
            !o && c && !i && !y && (xe(this, "onStart"),
            this._tTime !== c))
                return this;
            for (d = this._pt; d; )
                d.r(g, d.d),
                d = d._next;
            m && m.render(n < 0 ? n : m._dur * m._ease(f / this._dur), i, s) || this._startAt && (this._zTime = n),
            this._onUpdate && !i && (u && xf(this, n, i, s),
            xe(this, "onUpdate")),
            this._repeat && B !== y && this.vars.onRepeat && !i && this.parent && xe(this, "onRepeat"),
            (c === this._tDur || !c) && this._tTime === c && (u && !this._onUpdate && xf(this, n, !0, !0),
            (n || !l) && (c === this._tDur && this._ts > 0 || !c && this._ts < 0) && Fr(this, 1),
            !i && !(u && !o) && (c || o || p) && (xe(this, c === a ? "onComplete" : "onReverseComplete", !0),
            this._prom && !(c < a && this.timeScale() > 0) && this._prom()))
        }
        return this
    }
    ,
    t.targets = function() {
        return this._targets
    }
    ,
    t.invalidate = function(n) {
        return (!n || !this.vars.runBackwards) && (this._startAt = 0),
        this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0,
        this._ptLookup = [],
        this.timeline && this.timeline.invalidate(n),
        e.prototype.invalidate.call(this, n)
    }
    ,
    t.resetTo = function(n, i, s, o, a) {
        Rs || Qe.wake(),
        this._ts || this.play();
        var l = Math.min(this._dur, (this._dp._time - this._start) * this._ts), u;
        return this._initted || Th(this, l),
        u = this._ease(l / this._dur),
        NH(this, n, i, s, o, u, l, a) ? this.resetTo(n, i, s, o, 1) : (Vl(this, 0),
        this.parent || vC(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0),
        this.render(0))
    }
    ,
    t.kill = function(n, i) {
        if (i === void 0 && (i = "all"),
        !n && (!i || i === "all"))
            return this._lazy = this._pt = 0,
            this.parent ? Vi(this) : this.scrollTrigger && this.scrollTrigger.kill(!!VA),
            this;
        if (this.timeline) {
            var s = this.timeline.totalDuration();
            return this.timeline.killTweensOf(n, i, er && er.vars.overwrite !== !0)._first || Vi(this),
            this.parent && s !== this.timeline.totalDuration() && gi(this, this._dur * this.timeline._tDur / s, 0, 1),
            this
        }
        var o = this._targets, a = n ? Ge(n) : o, l = this._ptLookup, u = this._pt, c, f, d, B, h, y, p;
        if ((!i || i === "all") && mH(o, a))
            return i === "all" && (this._pt = 0),
            Vi(this);
        for (c = this._op = this._op || [],
        i !== "all" && (KA(i) && (h = {},
        he(i, function(g) {
            return h[g] = 1
        }),
        i = h),
        i = RH(o, i)),
        p = o.length; p--; )
            if (~a.indexOf(o[p])) {
                f = l[p],
                i === "all" ? (c[p] = i,
                B = f,
                d = {}) : (d = c[p] = c[p] || {},
                B = i);
                for (h in B)
                    y = f && f[h],
                    y && ((!("kill"in y.d) || y.d.kill(h) === !0) && Nl(this, y, "_pt"),
                    delete f[h]),
                    d !== "all" && (d[h] = 1)
            }
        return this._initted && !this._pt && u && Vi(this),
        this
    }
    ,
    A.to = function(n, i) {
        return new A(n,i,arguments[2])
    }
    ,
    A.from = function(n, i) {
        return fs(1, arguments)
    }
    ,
    A.delayedCall = function(n, i, s, o) {
        return new A(i,0,{
            immediateRender: !1,
            lazy: !1,
            overwrite: !1,
            delay: n,
            onComplete: i,
            onReverseComplete: i,
            onCompleteParams: s,
            onReverseCompleteParams: s,
            callbackScope: o
        })
    }
    ,
    A.fromTo = function(n, i, s) {
        return fs(2, arguments)
    }
    ,
    A.set = function(n, i) {
        return i.duration = 0,
        i.repeatDelay || (i.repeat = 0),
        new A(n,i)
    }
    ,
    A.killTweensOf = function(n, i, s) {
        return dA.killTweensOf(n, i, s)
    }
    ,
    A
}(Vs);
Te(IA.prototype, {
    _targets: [],
    _lazy: 0,
    _startAt: 0,
    _op: 0,
    _onInit: 0
});
he("staggerTo,staggerFrom,staggerFromTo", function(e) {
    IA[e] = function() {
        var A = new re
          , t = If.call(arguments, 0);
        return t.splice(e === "staggerFromTo" ? 5 : 4, 0, 0),
        A[e].apply(A, t)
    }
});
var Lh = function(A, t, r) {
    return A[t] = r
}
  , jC = function(A, t, r) {
    return A[t](r)
}
  , GH = function(A, t, r, n) {
    return A[t](n.fp, r)
}
  , jH = function(A, t, r) {
    return A.setAttribute(t, r)
}
  , bh = function(A, t) {
    return wA(A[t]) ? jC : Qh(A[t]) && A.setAttribute ? jH : Lh
}
  , zC = function(A, t) {
    return t.set(t.t, t.p, Math.round((t.s + t.c * A) * 1e6) / 1e6, t)
}
  , zH = function(A, t) {
    return t.set(t.t, t.p, !!(t.s + t.c * A), t)
}
  , XC = function(A, t) {
    var r = t._pt
      , n = "";
    if (!A && t.b)
        n = t.b;
    else if (A === 1 && t.e)
        n = t.e;
    else {
        for (; r; )
            n = r.p + (r.m ? r.m(r.s + r.c * A) : Math.round((r.s + r.c * A) * 1e4) / 1e4) + n,
            r = r._next;
        n += t.c
    }
    t.set(t.t, t.p, n, t)
}
  , Dh = function(A, t) {
    for (var r = t._pt; r; )
        r.r(A, r.d),
        r = r._next
}
  , XH = function(A, t, r, n) {
    for (var i = this._pt, s; i; )
        s = i._next,
        i.p === n && i.modifier(A, t, r),
        i = s
}
  , WH = function(A) {
    for (var t = this._pt, r, n; t; )
        n = t._next,
        t.p === A && !t.op || t.op === A ? Nl(this, t, "_pt") : t.dep || (r = 1),
        t = n;
    return !r
}
  , YH = function(A, t, r, n) {
    n.mSet(A, t, n.m.call(n.tween, r, n.mt), n)
}
  , WC = function(A) {
    for (var t = A._pt, r, n, i, s; t; ) {
        for (r = t._next,
        n = i; n && n.pr > t.pr; )
            n = n._next;
        (t._prev = n ? n._prev : s) ? t._prev._next = t : i = t,
        (t._next = n) ? n._prev = t : s = t,
        t = r
    }
    A._pt = i
}
  , ge = function() {
    function e(t, r, n, i, s, o, a, l, u) {
        this.t = r,
        this.s = i,
        this.c = s,
        this.p = n,
        this.r = o || zC,
        this.d = a || this,
        this.set = l || Lh,
        this.pr = u || 0,
        this._next = t,
        t && (t._prev = this)
    }
    var A = e.prototype;
    return A.modifier = function(r, n, i) {
        this.mSet = this.mSet || this.set,
        this.set = YH,
        this.m = r,
        this.mt = i,
        this.tween = n
    }
    ,
    e
}();
he(Ih + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(e) {
    return Eh[e] = 1
});
Se.TweenMax = Se.TweenLite = IA;
Se.TimelineLite = Se.TimelineMax = re;
dA = new re({
    sortChildren: !1,
    defaults: fi,
    autoRemoveChildren: !0,
    id: "root",
    smoothChildTiming: !0
});
Ie.stringFilter = MC;
var tn = []
  , Ba = {}
  , JH = []
  , hp = 0
  , $H = 0
  , zu = function(A) {
    return (Ba[A] || JH).map(function(t) {
        return t()
    })
}
  , Tf = function() {
    var A = Date.now()
      , t = [];
    A - hp > 2 && (zu("matchMediaInit"),
    tn.forEach(function(r) {
        var n = r.queries, i = r.conditions, s, o, a, l;
        for (o in n)
            s = ut.matchMedia(n[o]).matches,
            s && (a = 1),
            s !== i[o] && (i[o] = s,
            l = 1);
        l && (r.revert(),
        a && t.push(r))
    }),
    zu("matchMediaRevert"),
    t.forEach(function(r) {
        return r.onMatch(r, function(n) {
            return r.add(null, n)
        })
    }),
    hp = A,
    zu("matchMedia"))
}
  , YC = function() {
    function e(t, r) {
        this.selector = r && Hf(r),
        this.data = [],
        this._r = [],
        this.isReverted = !1,
        this.id = $H++,
        t && this.add(t)
    }
    var A = e.prototype;
    return A.add = function(r, n, i) {
        wA(r) && (i = n,
        n = r,
        r = wA);
        var s = this
          , o = function() {
            var l = cA, u = s.selector, c;
            return l && l !== s && l.data.push(s),
            i && (s.selector = Hf(i)),
            cA = s,
            c = n.apply(s, arguments),
            wA(c) && s._r.push(c),
            cA = l,
            s.selector = u,
            s.isReverted = !1,
            c
        };
        return s.last = o,
        r === wA ? o(s, function(a) {
            return s.add(null, a)
        }) : r ? s[r] = o : o
    }
    ,
    A.ignore = function(r) {
        var n = cA;
        cA = null,
        r(this),
        cA = n
    }
    ,
    A.getTweens = function() {
        var r = [];
        return this.data.forEach(function(n) {
            return n instanceof e ? r.push.apply(r, n.getTweens()) : n instanceof IA && !(n.parent && n.parent.data === "nested") && r.push(n)
        }),
        r
    }
    ,
    A.clear = function() {
        this._r.length = this.data.length = 0
    }
    ,
    A.kill = function(r, n) {
        var i = this;
        if (r ? function() {
            for (var o = i.getTweens(), a = i.data.length, l; a--; )
                l = i.data[a],
                l.data === "isFlip" && (l.revert(),
                l.getChildren(!0, !0, !1).forEach(function(u) {
                    return o.splice(o.indexOf(u), 1)
                }));
            for (o.map(function(u) {
                return {
                    g: u._dur || u._delay || u._sat && !u._sat.vars.immediateRender ? u.globalTime(0) : -1 / 0,
                    t: u
                }
            }).sort(function(u, c) {
                return c.g - u.g || -1 / 0
            }).forEach(function(u) {
                return u.t.revert(r)
            }),
            a = i.data.length; a--; )
                l = i.data[a],
                l instanceof re ? l.data !== "nested" && (l.scrollTrigger && l.scrollTrigger.revert(),
                l.kill()) : !(l instanceof IA) && l.revert && l.revert(r);
            i._r.forEach(function(u) {
                return u(r, i)
            }),
            i.isReverted = !0
        }() : this.data.forEach(function(o) {
            return o.kill && o.kill()
        }),
        this.clear(),
        n)
            for (var s = tn.length; s--; )
                tn[s].id === this.id && tn.splice(s, 1)
    }
    ,
    A.revert = function(r) {
        this.kill(r || {})
    }
    ,
    e
}()
  , ZH = function() {
    function e(t) {
        this.contexts = [],
        this.scope = t,
        cA && cA.data.push(this)
    }
    var A = e.prototype;
    return A.add = function(r, n, i) {
        pt(r) || (r = {
            matches: r
        });
        var s = new YC(0,i || this.scope), o = s.conditions = {}, a, l, u;
        cA && !s.selector && (s.selector = cA.selector),
        this.contexts.push(s),
        n = s.add("onMatch", n),
        s.queries = r;
        for (l in r)
            l === "all" ? u = 1 : (a = ut.matchMedia(r[l]),
            a && (tn.indexOf(s) < 0 && tn.push(s),
            (o[l] = a.matches) && (u = 1),
            a.addListener ? a.addListener(Tf) : a.addEventListener("change", Tf)));
        return u && n(s, function(c) {
            return s.add(null, c)
        }),
        this
    }
    ,
    A.revert = function(r) {
        this.kill(r || {})
    }
    ,
    A.kill = function(r) {
        this.contexts.forEach(function(n) {
            return n.kill(r, !0)
        })
    }
    ,
    e
}()
  , nl = {
    registerPlugin: function() {
        for (var A = arguments.length, t = new Array(A), r = 0; r < A; r++)
            t[r] = arguments[r];
        t.forEach(function(n) {
            return bC(n)
        })
    },
    timeline: function(A) {
        return new re(A)
    },
    getTweensOf: function(A, t) {
        return dA.getTweensOf(A, t)
    },
    getProperty: function(A, t, r, n) {
        KA(A) && (A = Ge(A)[0]);
        var i = qr(A || {}).get
          , s = r ? CC : yC;
        return r === "native" && (r = ""),
        A && (t ? s((ve[t] && ve[t].get || i)(A, t, r, n)) : function(o, a, l) {
            return s((ve[o] && ve[o].get || i)(A, o, a, l))
        }
        )
    },
    quickSetter: function(A, t, r) {
        if (A = Ge(A),
        A.length > 1) {
            var n = A.map(function(u) {
                return me.quickSetter(u, t, r)
            })
              , i = n.length;
            return function(u) {
                for (var c = i; c--; )
                    n[c](u)
            }
        }
        A = A[0] || {};
        var s = ve[t]
          , o = qr(A)
          , a = o.harness && (o.harness.aliases || {})[t] || t
          , l = s ? function(u) {
            var c = new s;
            Gn._pt = 0,
            c.init(A, r ? u + r : u, Gn, 0, [A]),
            c.render(1, c),
            Gn._pt && Dh(1, Gn)
        }
        : o.set(A, a);
        return s ? l : function(u) {
            return l(A, a, r ? u + r : u, o, 1)
        }
    },
    quickTo: function(A, t, r) {
        var n, i = me.to(A, Te((n = {},
        n[t] = "+=0.1",
        n.paused = !0,
        n.stagger = 0,
        n), r || {})), s = function(a, l, u) {
            return i.resetTo(t, a, l, u)
        };
        return s.tween = i,
        s
    },
    isTweening: function(A) {
        return dA.getTweensOf(A, !0).length > 0
    },
    defaults: function(A) {
        return A && A.ease && (A.ease = en(A.ease, fi.ease)),
        lp(fi, A || {})
    },
    config: function(A) {
        return lp(Ie, A || {})
    },
    registerEffect: function(A) {
        var t = A.name
          , r = A.effect
          , n = A.plugins
          , i = A.defaults
          , s = A.extendTimeline;
        (n || "").split(",").forEach(function(o) {
            return o && !ve[o] && !Se[o] && Ps(t + " effect requires " + o + " plugin.")
        }),
        Ru[t] = function(o, a, l) {
            return r(Ge(o), Te(a || {}, i), l)
        }
        ,
        s && (re.prototype[t] = function(o, a, l) {
            return this.add(Ru[t](o, pt(a) ? a : (l = a) && {}, this), l)
        }
        )
    },
    registerEase: function(A, t) {
        Y[A] = en(t)
    },
    parseEase: function(A, t) {
        return arguments.length ? en(A, t) : Y
    },
    getById: function(A) {
        return dA.getById(A)
    },
    exportRoot: function(A, t) {
        A === void 0 && (A = {});
        var r = new re(A), n, i;
        for (r.smoothChildTiming = de(A.smoothChildTiming),
        dA.remove(r),
        r._dp = 0,
        r._time = r._tTime = dA._time,
        n = dA._first; n; )
            i = n._next,
            (t || !(!n._dur && n instanceof IA && n.vars.onComplete === n._targets[0])) && ft(r, n, n._start - n._delay),
            n = i;
        return ft(dA, r, 0),
        r
    },
    context: function(A, t) {
        return A ? new YC(A,t) : cA
    },
    matchMedia: function(A) {
        return new ZH(A)
    },
    matchMediaRefresh: function() {
        return tn.forEach(function(A) {
            var t = A.conditions, r, n;
            for (n in t)
                t[n] && (t[n] = !1,
                r = 1);
            r && A.revert()
        }) || Tf()
    },
    addEventListener: function(A, t) {
        var r = Ba[A] || (Ba[A] = []);
        ~r.indexOf(t) || r.push(t)
    },
    removeEventListener: function(A, t) {
        var r = Ba[A]
          , n = r && r.indexOf(t);
        n >= 0 && r.splice(n, 1)
    },
    utils: {
        wrap: _H,
        wrapYoyo: SH,
        distribute: IC,
        random: _C,
        snap: HC,
        normalize: HH,
        getUnit: $A,
        clamp: UH,
        splitColor: DC,
        toArray: Ge,
        selector: Hf,
        mapRange: TC,
        pipe: EH,
        unitize: IH,
        interpolate: TH,
        shuffle: EC
    },
    install: gC,
    effects: Ru,
    ticker: Qe,
    updateRoot: re.updateRoot,
    plugins: ve,
    globalTimeline: dA,
    core: {
        PropTween: ge,
        globals: BC,
        Tween: IA,
        Timeline: re,
        Animation: Vs,
        getCache: qr,
        _removeLinkedListItem: Nl,
        reverting: function() {
            return VA
        },
        context: function(A) {
            return A && cA && (cA.data.push(A),
            A._ctx = cA),
            cA
        },
        suppressOverwrites: function(A) {
            return vh = A
        }
    }
};
he("to,from,fromTo,delayedCall,set,killTweensOf", function(e) {
    return nl[e] = IA[e]
});
Qe.add(re.updateRoot);
Gn = nl.to({}, {
    duration: 0
});
var qH = function(A, t) {
    for (var r = A._pt; r && r.p !== t && r.op !== t && r.fp !== t; )
        r = r._next;
    return r
}
  , A_ = function(A, t) {
    var r = A._targets, n, i, s;
    for (n in t)
        for (i = r.length; i--; )
            s = A._ptLookup[i][n],
            s && (s = s.d) && (s._pt && (s = qH(s, n)),
            s && s.modifier && s.modifier(t[n], A, r[i], n))
}
  , Xu = function(A, t) {
    return {
        name: A,
        headless: 1,
        rawVars: 1,
        init: function(n, i, s) {
            s._onInit = function(o) {
                var a, l;
                if (KA(i) && (a = {},
                he(i, function(u) {
                    return a[u] = 1
                }),
                i = a),
                t) {
                    a = {};
                    for (l in i)
                        a[l] = t(i[l]);
                    i = a
                }
                A_(o, i)
            }
        }
    }
}
  , me = nl.registerPlugin({
    name: "attr",
    init: function(A, t, r, n, i) {
        var s, o, a;
        this.tween = r;
        for (s in t)
            a = A.getAttribute(s) || "",
            o = this.add(A, "setAttribute", (a || 0) + "", t[s], n, i, 0, 0, s),
            o.op = s,
            o.b = a,
            this._props.push(s)
    },
    render: function(A, t) {
        for (var r = t._pt; r; )
            VA ? r.set(r.t, r.p, r.b, r) : r.r(A, r.d),
            r = r._next
    }
}, {
    name: "endArray",
    headless: 1,
    init: function(A, t) {
        for (var r = t.length; r--; )
            this.add(A, r, A[r] || 0, t[r], 0, 0, 0, 0, 0, 1)
    }
}, Xu("roundProps", _f), Xu("modifiers"), Xu("snap", HC)) || nl;
IA.version = re.version = me.version = "3.13.0";
hC = 1;
Fh() && Bi();
Y.Power0;
Y.Power1;
Y.Power2;
Y.Power3;
Y.Power4;
Y.Linear;
Y.Quad;
Y.Cubic;
Y.Quart;
Y.Quint;
Y.Strong;
Y.Elastic;
Y.Back;
Y.SteppedEase;
Y.Bounce;
Y.Sine;
Y.Expo;
Y.Circ;
/*!
 * CSSPlugin 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/
var gp, tr, qn, kh, Wr, Bp, Mh, e_ = function() {
    return typeof window < "u"
}, Ot = {}, Rr = 180 / Math.PI, Ai = Math.PI / 180, mn = Math.atan2, pp = 1e8, Kh = /([A-Z])/g, t_ = /(left|right|width|margin|padding|x)/i, r_ = /[\s,\(]\S/, dt = {
    autoAlpha: "opacity,visibility",
    scale: "scaleX,scaleY",
    alpha: "opacity"
}, Lf = function(A, t) {
    return t.set(t.t, t.p, Math.round((t.s + t.c * A) * 1e4) / 1e4 + t.u, t)
}, n_ = function(A, t) {
    return t.set(t.t, t.p, A === 1 ? t.e : Math.round((t.s + t.c * A) * 1e4) / 1e4 + t.u, t)
}, i_ = function(A, t) {
    return t.set(t.t, t.p, A ? Math.round((t.s + t.c * A) * 1e4) / 1e4 + t.u : t.b, t)
}, s_ = function(A, t) {
    var r = t.s + t.c * A;
    t.set(t.t, t.p, ~~(r + (r < 0 ? -.5 : .5)) + t.u, t)
}, JC = function(A, t) {
    return t.set(t.t, t.p, A ? t.e : t.b, t)
}, $C = function(A, t) {
    return t.set(t.t, t.p, A !== 1 ? t.b : t.e, t)
}, o_ = function(A, t, r) {
    return A.style[t] = r
}, a_ = function(A, t, r) {
    return A.style.setProperty(t, r)
}, l_ = function(A, t, r) {
    return A._gsap[t] = r
}, u_ = function(A, t, r) {
    return A._gsap.scaleX = A._gsap.scaleY = r
}, c_ = function(A, t, r, n, i) {
    var s = A._gsap;
    s.scaleX = s.scaleY = r,
    s.renderTransform(i, s)
}, f_ = function(A, t, r, n, i) {
    var s = A._gsap;
    s[t] = r,
    s.renderTransform(i, s)
}, gA = "transform", Be = gA + "Origin", d_ = function e(A, t) {
    var r = this
      , n = this.target
      , i = n.style
      , s = n._gsap;
    if (A in Ot && i) {
        if (this.tfm = this.tfm || {},
        A !== "transform")
            A = dt[A] || A,
            ~A.indexOf(",") ? A.split(",").forEach(function(o) {
                return r.tfm[o] = Ut(n, o)
            }) : this.tfm[A] = s.x ? s[A] : Ut(n, A),
            A === Be && (this.tfm.zOrigin = s.zOrigin);
        else
            return dt.transform.split(",").forEach(function(o) {
                return e.call(r, o, t)
            });
        if (this.props.indexOf(gA) >= 0)
            return;
        s.svg && (this.svgo = n.getAttribute("data-svg-origin"),
        this.props.push(Be, t, "")),
        A = gA
    }
    (i || t) && this.props.push(A, t, i[A])
}, ZC = function(A) {
    A.translate && (A.removeProperty("translate"),
    A.removeProperty("scale"),
    A.removeProperty("rotate"))
}, h_ = function() {
    var A = this.props, t = this.target, r = t.style, n = t._gsap, i, s;
    for (i = 0; i < A.length; i += 3)
        A[i + 1] ? A[i + 1] === 2 ? t[A[i]](A[i + 2]) : t[A[i]] = A[i + 2] : A[i + 2] ? r[A[i]] = A[i + 2] : r.removeProperty(A[i].substr(0, 2) === "--" ? A[i] : A[i].replace(Kh, "-$1").toLowerCase());
    if (this.tfm) {
        for (s in this.tfm)
            n[s] = this.tfm[s];
        n.svg && (n.renderTransform(),
        t.setAttribute("data-svg-origin", this.svgo || "")),
        i = Mh(),
        (!i || !i.isStart) && !r[gA] && (ZC(r),
        n.zOrigin && r[Be] && (r[Be] += " " + n.zOrigin + "px",
        n.zOrigin = 0,
        n.renderTransform()),
        n.uncache = 1)
    }
}, qC = function(A, t) {
    var r = {
        target: A,
        props: [],
        revert: h_,
        save: d_
    };
    return A._gsap || me.core.getCache(A),
    t && A.style && A.nodeType && t.split(",").forEach(function(n) {
        return r.save(n)
    }),
    r
}, Av, bf = function(A, t) {
    var r = tr.createElementNS ? tr.createElementNS((t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), A) : tr.createElement(A);
    return r && r.style ? r : tr.createElement(A)
}, je = function e(A, t, r) {
    var n = getComputedStyle(A);
    return n[t] || n.getPropertyValue(t.replace(Kh, "-$1").toLowerCase()) || n.getPropertyValue(t) || !r && e(A, pi(t) || t, 1) || ""
}, mp = "O,Moz,ms,Ms,Webkit".split(","), pi = function(A, t, r) {
    var n = t || Wr
      , i = n.style
      , s = 5;
    if (A in i && !r)
        return A;
    for (A = A.charAt(0).toUpperCase() + A.substr(1); s-- && !(mp[s] + A in i); )
        ;
    return s < 0 ? null : (s === 3 ? "ms" : s >= 0 ? mp[s] : "") + A
}, Df = function() {
    e_() && window.document && (gp = window,
    tr = gp.document,
    qn = tr.documentElement,
    Wr = bf("div") || {
        style: {}
    },
    bf("div"),
    gA = pi(gA),
    Be = gA + "Origin",
    Wr.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0",
    Av = !!pi("perspective"),
    Mh = me.core.reverting,
    kh = 1)
}, wp = function(A) {
    var t = A.ownerSVGElement, r = bf("svg", t && t.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), n = A.cloneNode(!0), i;
    n.style.display = "block",
    r.appendChild(n),
    qn.appendChild(r);
    try {
        i = n.getBBox()
    } catch {}
    return r.removeChild(n),
    qn.removeChild(r),
    i
}, yp = function(A, t) {
    for (var r = t.length; r--; )
        if (A.hasAttribute(t[r]))
            return A.getAttribute(t[r])
}, ev = function(A) {
    var t, r;
    try {
        t = A.getBBox()
    } catch {
        t = wp(A),
        r = 1
    }
    return t && (t.width || t.height) || r || (t = wp(A)),
    t && !t.width && !t.x && !t.y ? {
        x: +yp(A, ["x", "cx", "x1"]) || 0,
        y: +yp(A, ["y", "cy", "y1"]) || 0,
        width: 0,
        height: 0
    } : t
}, tv = function(A) {
    return !!(A.getCTM && (!A.parentNode || A.ownerSVGElement) && ev(A))
}, cn = function(A, t) {
    if (t) {
        var r = A.style, n;
        t in Ot && t !== Be && (t = gA),
        r.removeProperty ? (n = t.substr(0, 2),
        (n === "ms" || t.substr(0, 6) === "webkit") && (t = "-" + t),
        r.removeProperty(n === "--" ? t : t.replace(Kh, "-$1").toLowerCase())) : r.removeAttribute(t)
    }
}, rr = function(A, t, r, n, i, s) {
    var o = new ge(A._pt,t,r,0,1,s ? $C : JC);
    return A._pt = o,
    o.b = n,
    o.e = i,
    A._props.push(r),
    o
}, Cp = {
    deg: 1,
    rad: 1,
    turn: 1
}, g_ = {
    grid: 1,
    flex: 1
}, Ur = function e(A, t, r, n) {
    var i = parseFloat(r) || 0, s = (r + "").trim().substr((i + "").length) || "px", o = Wr.style, a = t_.test(t), l = A.tagName.toLowerCase() === "svg", u = (l ? "client" : "offset") + (a ? "Width" : "Height"), c = 100, f = n === "px", d = n === "%", B, h, y, p;
    if (n === s || !i || Cp[n] || Cp[s])
        return i;
    if (s !== "px" && !f && (i = e(A, t, r, "px")),
    p = A.getCTM && tv(A),
    (d || s === "%") && (Ot[t] || ~t.indexOf("adius")))
        return B = p ? A.getBBox()[a ? "width" : "height"] : A[u],
        vA(d ? i / B * c : i / 100 * B);
    if (o[a ? "width" : "height"] = c + (f ? s : n),
    h = n !== "rem" && ~t.indexOf("adius") || n === "em" && A.appendChild && !l ? A : A.parentNode,
    p && (h = (A.ownerSVGElement || {}).parentNode),
    (!h || h === tr || !h.appendChild) && (h = tr.body),
    y = h._gsap,
    y && d && y.width && a && y.time === Qe.time && !y.uncache)
        return vA(i / y.width * c);
    if (d && (t === "height" || t === "width")) {
        var g = A.style[t];
        A.style[t] = c + n,
        B = A[u],
        g ? A.style[t] = g : cn(A, t)
    } else
        (d || s === "%") && !g_[je(h, "display")] && (o.position = je(A, "position")),
        h === A && (o.position = "static"),
        h.appendChild(Wr),
        B = Wr[u],
        h.removeChild(Wr),
        o.position = "absolute";
    return a && d && (y = qr(h),
    y.time = Qe.time,
    y.width = h[u]),
    vA(f ? B * i / c : B && i ? c / B * i : 0)
}, Ut = function(A, t, r, n) {
    var i;
    return kh || Df(),
    t in dt && t !== "transform" && (t = dt[t],
    ~t.indexOf(",") && (t = t.split(",")[0])),
    Ot[t] && t !== "transform" ? (i = js(A, n),
    i = t !== "transformOrigin" ? i[t] : i.svg ? i.origin : sl(je(A, Be)) + " " + i.zOrigin + "px") : (i = A.style[t],
    (!i || i === "auto" || n || ~(i + "").indexOf("calc(")) && (i = il[t] && il[t](A, t, r) || je(A, t) || mC(A, t) || (t === "opacity" ? 1 : 0))),
    r && !~(i + "").trim().indexOf(" ") ? Ur(A, t, i, r) + r : i
}, B_ = function(A, t, r, n) {
    if (!r || r === "none") {
        var i = pi(t, A, 1)
          , s = i && je(A, i, 1);
        s && s !== r ? (t = i,
        r = s) : t === "borderColor" && (r = je(A, "borderTopColor"))
    }
    var o = new ge(this._pt,A.style,t,0,1,XC), a = 0, l = 0, u, c, f, d, B, h, y, p, g, m, C, v;
    if (o.b = r,
    o.e = n,
    r += "",
    n += "",
    n.substring(0, 6) === "var(--" && (n = je(A, n.substring(4, n.indexOf(")")))),
    n === "auto" && (h = A.style[t],
    A.style[t] = n,
    n = je(A, t) || n,
    h ? A.style[t] = h : cn(A, t)),
    u = [r, n],
    MC(u),
    r = u[0],
    n = u[1],
    f = r.match(Vn) || [],
    v = n.match(Vn) || [],
    v.length) {
        for (; c = Vn.exec(n); )
            y = c[0],
            g = n.substring(a, c.index),
            B ? B = (B + 1) % 5 : (g.substr(-5) === "rgba(" || g.substr(-5) === "hsla(") && (B = 1),
            y !== (h = f[l++] || "") && (d = parseFloat(h) || 0,
            C = h.substr((d + "").length),
            y.charAt(1) === "=" && (y = Zn(d, y) + C),
            p = parseFloat(y),
            m = y.substr((p + "").length),
            a = Vn.lastIndex - m.length,
            m || (m = m || Ie.units[t] || C,
            a === n.length && (n += m,
            o.e += m)),
            C !== m && (d = Ur(A, t, h, m) || 0),
            o._pt = {
                _next: o._pt,
                p: g || l === 1 ? g : ",",
                s: d,
                c: p - d,
                m: B && B < 4 || t === "zIndex" ? Math.round : 0
            });
        o.c = a < n.length ? n.substring(a, n.length) : ""
    } else
        o.r = t === "display" && n === "none" ? $C : JC;
    return fC.test(n) && (o.e = 0),
    this._pt = o,
    o
}, vp = {
    top: "0%",
    bottom: "100%",
    left: "0%",
    right: "100%",
    center: "50%"
}, p_ = function(A) {
    var t = A.split(" ")
      , r = t[0]
      , n = t[1] || "50%";
    return (r === "top" || r === "bottom" || n === "left" || n === "right") && (A = r,
    r = n,
    n = A),
    t[0] = vp[r] || r,
    t[1] = vp[n] || n,
    t.join(" ")
}, m_ = function(A, t) {
    if (t.tween && t.tween._time === t.tween._dur) {
        var r = t.t, n = r.style, i = t.u, s = r._gsap, o, a, l;
        if (i === "all" || i === !0)
            n.cssText = "",
            a = 1;
        else
            for (i = i.split(","),
            l = i.length; --l > -1; )
                o = i[l],
                Ot[o] && (a = 1,
                o = o === "transformOrigin" ? Be : gA),
                cn(r, o);
        a && (cn(r, gA),
        s && (s.svg && r.removeAttribute("transform"),
        n.scale = n.rotate = n.translate = "none",
        js(r, 1),
        s.uncache = 1,
        ZC(n)))
    }
}, il = {
    clearProps: function(A, t, r, n, i) {
        if (i.data !== "isFromStart") {
            var s = A._pt = new ge(A._pt,t,r,0,0,m_);
            return s.u = n,
            s.pr = -10,
            s.tween = i,
            A._props.push(r),
            1
        }
    }
}, Gs = [1, 0, 0, 1, 0, 0], rv = {}, nv = function(A) {
    return A === "matrix(1, 0, 0, 1, 0, 0)" || A === "none" || !A
}, Qp = function(A) {
    var t = je(A, gA);
    return nv(t) ? Gs : t.substr(7).match(cC).map(vA)
}, Ph = function(A, t) {
    var r = A._gsap || qr(A), n = A.style, i = Qp(A), s, o, a, l;
    return r.svg && A.getAttribute("transform") ? (a = A.transform.baseVal.consolidate().matrix,
    i = [a.a, a.b, a.c, a.d, a.e, a.f],
    i.join(",") === "1,0,0,1,0,0" ? Gs : i) : (i === Gs && !A.offsetParent && A !== qn && !r.svg && (a = n.display,
    n.display = "block",
    s = A.parentNode,
    (!s || !A.offsetParent && !A.getBoundingClientRect().width) && (l = 1,
    o = A.nextElementSibling,
    qn.appendChild(A)),
    i = Qp(A),
    a ? n.display = a : cn(A, "display"),
    l && (o ? s.insertBefore(A, o) : s ? s.appendChild(A) : qn.removeChild(A))),
    t && i.length > 6 ? [i[0], i[1], i[4], i[5], i[12], i[13]] : i)
}, kf = function(A, t, r, n, i, s) {
    var o = A._gsap, a = i || Ph(A, !0), l = o.xOrigin || 0, u = o.yOrigin || 0, c = o.xOffset || 0, f = o.yOffset || 0, d = a[0], B = a[1], h = a[2], y = a[3], p = a[4], g = a[5], m = t.split(" "), C = parseFloat(m[0]) || 0, v = parseFloat(m[1]) || 0, Q, U, F, x;
    r ? a !== Gs && (U = d * y - B * h) && (F = C * (y / U) + v * (-h / U) + (h * g - y * p) / U,
    x = C * (-B / U) + v * (d / U) - (d * g - B * p) / U,
    C = F,
    v = x) : (Q = ev(A),
    C = Q.x + (~m[0].indexOf("%") ? C / 100 * Q.width : C),
    v = Q.y + (~(m[1] || m[0]).indexOf("%") ? v / 100 * Q.height : v)),
    n || n !== !1 && o.smooth ? (p = C - l,
    g = v - u,
    o.xOffset = c + (p * d + g * h) - p,
    o.yOffset = f + (p * B + g * y) - g) : o.xOffset = o.yOffset = 0,
    o.xOrigin = C,
    o.yOrigin = v,
    o.smooth = !!n,
    o.origin = t,
    o.originIsAbsolute = !!r,
    A.style[Be] = "0px 0px",
    s && (rr(s, o, "xOrigin", l, C),
    rr(s, o, "yOrigin", u, v),
    rr(s, o, "xOffset", c, o.xOffset),
    rr(s, o, "yOffset", f, o.yOffset)),
    A.setAttribute("data-svg-origin", C + " " + v)
}, js = function(A, t) {
    var r = A._gsap || new NC(A);
    if ("x"in r && !t && !r.uncache)
        return r;
    var n = A.style, i = r.scaleX < 0, s = "px", o = "deg", a = getComputedStyle(A), l = je(A, Be) || "0", u, c, f, d, B, h, y, p, g, m, C, v, Q, U, F, x, H, E, L, b, D, j, T, V, _, K, R, N, z, UA, q, aA;
    return u = c = f = h = y = p = g = m = C = 0,
    d = B = 1,
    r.svg = !!(A.getCTM && tv(A)),
    a.translate && ((a.translate !== "none" || a.scale !== "none" || a.rotate !== "none") && (n[gA] = (a.translate !== "none" ? "translate3d(" + (a.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (a.rotate !== "none" ? "rotate(" + a.rotate + ") " : "") + (a.scale !== "none" ? "scale(" + a.scale.split(" ").join(",") + ") " : "") + (a[gA] !== "none" ? a[gA] : "")),
    n.scale = n.rotate = n.translate = "none"),
    U = Ph(A, r.svg),
    r.svg && (r.uncache ? (_ = A.getBBox(),
    l = r.xOrigin - _.x + "px " + (r.yOrigin - _.y) + "px",
    V = "") : V = !t && A.getAttribute("data-svg-origin"),
    kf(A, V || l, !!V || r.originIsAbsolute, r.smooth !== !1, U)),
    v = r.xOrigin || 0,
    Q = r.yOrigin || 0,
    U !== Gs && (E = U[0],
    L = U[1],
    b = U[2],
    D = U[3],
    u = j = U[4],
    c = T = U[5],
    U.length === 6 ? (d = Math.sqrt(E * E + L * L),
    B = Math.sqrt(D * D + b * b),
    h = E || L ? mn(L, E) * Rr : 0,
    g = b || D ? mn(b, D) * Rr + h : 0,
    g && (B *= Math.abs(Math.cos(g * Ai))),
    r.svg && (u -= v - (v * E + Q * b),
    c -= Q - (v * L + Q * D))) : (aA = U[6],
    UA = U[7],
    R = U[8],
    N = U[9],
    z = U[10],
    q = U[11],
    u = U[12],
    c = U[13],
    f = U[14],
    F = mn(aA, z),
    y = F * Rr,
    F && (x = Math.cos(-F),
    H = Math.sin(-F),
    V = j * x + R * H,
    _ = T * x + N * H,
    K = aA * x + z * H,
    R = j * -H + R * x,
    N = T * -H + N * x,
    z = aA * -H + z * x,
    q = UA * -H + q * x,
    j = V,
    T = _,
    aA = K),
    F = mn(-b, z),
    p = F * Rr,
    F && (x = Math.cos(-F),
    H = Math.sin(-F),
    V = E * x - R * H,
    _ = L * x - N * H,
    K = b * x - z * H,
    q = D * H + q * x,
    E = V,
    L = _,
    b = K),
    F = mn(L, E),
    h = F * Rr,
    F && (x = Math.cos(F),
    H = Math.sin(F),
    V = E * x + L * H,
    _ = j * x + T * H,
    L = L * x - E * H,
    T = T * x - j * H,
    E = V,
    j = _),
    y && Math.abs(y) + Math.abs(h) > 359.9 && (y = h = 0,
    p = 180 - p),
    d = vA(Math.sqrt(E * E + L * L + b * b)),
    B = vA(Math.sqrt(T * T + aA * aA)),
    F = mn(j, T),
    g = Math.abs(F) > 2e-4 ? F * Rr : 0,
    C = q ? 1 / (q < 0 ? -q : q) : 0),
    r.svg && (V = A.getAttribute("transform"),
    r.forceCSS = A.setAttribute("transform", "") || !nv(je(A, gA)),
    V && A.setAttribute("transform", V))),
    Math.abs(g) > 90 && Math.abs(g) < 270 && (i ? (d *= -1,
    g += h <= 0 ? 180 : -180,
    h += h <= 0 ? 180 : -180) : (B *= -1,
    g += g <= 0 ? 180 : -180)),
    t = t || r.uncache,
    r.x = u - ((r.xPercent = u && (!t && r.xPercent || (Math.round(A.offsetWidth / 2) === Math.round(-u) ? -50 : 0))) ? A.offsetWidth * r.xPercent / 100 : 0) + s,
    r.y = c - ((r.yPercent = c && (!t && r.yPercent || (Math.round(A.offsetHeight / 2) === Math.round(-c) ? -50 : 0))) ? A.offsetHeight * r.yPercent / 100 : 0) + s,
    r.z = f + s,
    r.scaleX = vA(d),
    r.scaleY = vA(B),
    r.rotation = vA(h) + o,
    r.rotationX = vA(y) + o,
    r.rotationY = vA(p) + o,
    r.skewX = g + o,
    r.skewY = m + o,
    r.transformPerspective = C + s,
    (r.zOrigin = parseFloat(l.split(" ")[2]) || !t && r.zOrigin || 0) && (n[Be] = sl(l)),
    r.xOffset = r.yOffset = 0,
    r.force3D = Ie.force3D,
    r.renderTransform = r.svg ? y_ : Av ? iv : w_,
    r.uncache = 0,
    r
}, sl = function(A) {
    return (A = A.split(" "))[0] + " " + A[1]
}, Wu = function(A, t, r) {
    var n = $A(t);
    return vA(parseFloat(t) + parseFloat(Ur(A, "x", r + "px", n))) + n
}, w_ = function(A, t) {
    t.z = "0px",
    t.rotationY = t.rotationX = "0deg",
    t.force3D = 0,
    iv(A, t)
}, br = "0deg", Li = "0px", Dr = ") ", iv = function(A, t) {
    var r = t || this
      , n = r.xPercent
      , i = r.yPercent
      , s = r.x
      , o = r.y
      , a = r.z
      , l = r.rotation
      , u = r.rotationY
      , c = r.rotationX
      , f = r.skewX
      , d = r.skewY
      , B = r.scaleX
      , h = r.scaleY
      , y = r.transformPerspective
      , p = r.force3D
      , g = r.target
      , m = r.zOrigin
      , C = ""
      , v = p === "auto" && A && A !== 1 || p === !0;
    if (m && (c !== br || u !== br)) {
        var Q = parseFloat(u) * Ai, U = Math.sin(Q), F = Math.cos(Q), x;
        Q = parseFloat(c) * Ai,
        x = Math.cos(Q),
        s = Wu(g, s, U * x * -m),
        o = Wu(g, o, -Math.sin(Q) * -m),
        a = Wu(g, a, F * x * -m + m)
    }
    y !== Li && (C += "perspective(" + y + Dr),
    (n || i) && (C += "translate(" + n + "%, " + i + "%) "),
    (v || s !== Li || o !== Li || a !== Li) && (C += a !== Li || v ? "translate3d(" + s + ", " + o + ", " + a + ") " : "translate(" + s + ", " + o + Dr),
    l !== br && (C += "rotate(" + l + Dr),
    u !== br && (C += "rotateY(" + u + Dr),
    c !== br && (C += "rotateX(" + c + Dr),
    (f !== br || d !== br) && (C += "skew(" + f + ", " + d + Dr),
    (B !== 1 || h !== 1) && (C += "scale(" + B + ", " + h + Dr),
    g.style[gA] = C || "translate(0, 0)"
}, y_ = function(A, t) {
    var r = t || this, n = r.xPercent, i = r.yPercent, s = r.x, o = r.y, a = r.rotation, l = r.skewX, u = r.skewY, c = r.scaleX, f = r.scaleY, d = r.target, B = r.xOrigin, h = r.yOrigin, y = r.xOffset, p = r.yOffset, g = r.forceCSS, m = parseFloat(s), C = parseFloat(o), v, Q, U, F, x;
    a = parseFloat(a),
    l = parseFloat(l),
    u = parseFloat(u),
    u && (u = parseFloat(u),
    l += u,
    a += u),
    a || l ? (a *= Ai,
    l *= Ai,
    v = Math.cos(a) * c,
    Q = Math.sin(a) * c,
    U = Math.sin(a - l) * -f,
    F = Math.cos(a - l) * f,
    l && (u *= Ai,
    x = Math.tan(l - u),
    x = Math.sqrt(1 + x * x),
    U *= x,
    F *= x,
    u && (x = Math.tan(u),
    x = Math.sqrt(1 + x * x),
    v *= x,
    Q *= x)),
    v = vA(v),
    Q = vA(Q),
    U = vA(U),
    F = vA(F)) : (v = c,
    F = f,
    Q = U = 0),
    (m && !~(s + "").indexOf("px") || C && !~(o + "").indexOf("px")) && (m = Ur(d, "x", s, "px"),
    C = Ur(d, "y", o, "px")),
    (B || h || y || p) && (m = vA(m + B - (B * v + h * U) + y),
    C = vA(C + h - (B * Q + h * F) + p)),
    (n || i) && (x = d.getBBox(),
    m = vA(m + n / 100 * x.width),
    C = vA(C + i / 100 * x.height)),
    x = "matrix(" + v + "," + Q + "," + U + "," + F + "," + m + "," + C + ")",
    d.setAttribute("transform", x),
    g && (d.style[gA] = x)
}, C_ = function(A, t, r, n, i) {
    var s = 360, o = KA(i), a = parseFloat(i) * (o && ~i.indexOf("rad") ? Rr : 1), l = a - n, u = n + l + "deg", c, f;
    return o && (c = i.split("_")[1],
    c === "short" && (l %= s,
    l !== l % (s / 2) && (l += l < 0 ? s : -s)),
    c === "cw" && l < 0 ? l = (l + s * pp) % s - ~~(l / s) * s : c === "ccw" && l > 0 && (l = (l - s * pp) % s - ~~(l / s) * s)),
    A._pt = f = new ge(A._pt,t,r,n,l,n_),
    f.e = u,
    f.u = "deg",
    A._props.push(r),
    f
}, Fp = function(A, t) {
    for (var r in t)
        A[r] = t[r];
    return A
}, v_ = function(A, t, r) {
    var n = Fp({}, r._gsap), i = "perspective,force3D,transformOrigin,svgOrigin", s = r.style, o, a, l, u, c, f, d, B;
    n.svg ? (l = r.getAttribute("transform"),
    r.setAttribute("transform", ""),
    s[gA] = t,
    o = js(r, 1),
    cn(r, gA),
    r.setAttribute("transform", l)) : (l = getComputedStyle(r)[gA],
    s[gA] = t,
    o = js(r, 1),
    s[gA] = l);
    for (a in Ot)
        l = n[a],
        u = o[a],
        l !== u && i.indexOf(a) < 0 && (d = $A(l),
        B = $A(u),
        c = d !== B ? Ur(r, a, l, B) : parseFloat(l),
        f = parseFloat(u),
        A._pt = new ge(A._pt,o,a,c,f - c,Lf),
        A._pt.u = B || 0,
        A._props.push(a));
    Fp(o, n)
};
he("padding,margin,Width,Radius", function(e, A) {
    var t = "Top"
      , r = "Right"
      , n = "Bottom"
      , i = "Left"
      , s = (A < 3 ? [t, r, n, i] : [t + i, t + r, n + r, n + i]).map(function(o) {
        return A < 2 ? e + o : "border" + o + e
    });
    il[A > 1 ? "border" + e : e] = function(o, a, l, u, c) {
        var f, d;
        if (arguments.length < 4)
            return f = s.map(function(B) {
                return Ut(o, B, l)
            }),
            d = f.join(" "),
            d.split(f[0]).length === 5 ? f[0] : d;
        f = (u + "").split(" "),
        d = {},
        s.forEach(function(B, h) {
            return d[B] = f[h] = f[h] || f[(h - 1) / 2 | 0]
        }),
        o.init(a, d, c)
    }
});
var sv = {
    name: "css",
    register: Df,
    targetTest: function(A) {
        return A.style && A.nodeType
    },
    init: function(A, t, r, n, i) {
        var s = this._props, o = A.style, a = r.vars.startAt, l, u, c, f, d, B, h, y, p, g, m, C, v, Q, U, F;
        kh || Df(),
        this.styles = this.styles || qC(A),
        F = this.styles.props,
        this.tween = r;
        for (h in t)
            if (h !== "autoRound" && (u = t[h],
            !(ve[h] && RC(h, t, r, n, A, i)))) {
                if (d = typeof u,
                B = il[h],
                d === "function" && (u = u.call(r, n, A, i),
                d = typeof u),
                d === "string" && ~u.indexOf("random(") && (u = Ns(u)),
                B)
                    B(this, A, h, u, r) && (U = 1);
                else if (h.substr(0, 2) === "--")
                    l = (getComputedStyle(A).getPropertyValue(h) + "").trim(),
                    u += "",
                    pr.lastIndex = 0,
                    pr.test(l) || (y = $A(l),
                    p = $A(u)),
                    p ? y !== p && (l = Ur(A, h, l, p) + p) : y && (u += y),
                    this.add(o, "setProperty", l, u, n, i, 0, 0, h),
                    s.push(h),
                    F.push(h, 0, o[h]);
                else if (d !== "undefined") {
                    if (a && h in a ? (l = typeof a[h] == "function" ? a[h].call(r, n, A, i) : a[h],
                    KA(l) && ~l.indexOf("random(") && (l = Ns(l)),
                    $A(l + "") || l === "auto" || (l += Ie.units[h] || $A(Ut(A, h)) || ""),
                    (l + "").charAt(1) === "=" && (l = Ut(A, h))) : l = Ut(A, h),
                    f = parseFloat(l),
                    g = d === "string" && u.charAt(1) === "=" && u.substr(0, 2),
                    g && (u = u.substr(2)),
                    c = parseFloat(u),
                    h in dt && (h === "autoAlpha" && (f === 1 && Ut(A, "visibility") === "hidden" && c && (f = 0),
                    F.push("visibility", 0, o.visibility),
                    rr(this, o, "visibility", f ? "inherit" : "hidden", c ? "inherit" : "hidden", !c)),
                    h !== "scale" && h !== "transform" && (h = dt[h],
                    ~h.indexOf(",") && (h = h.split(",")[0]))),
                    m = h in Ot,
                    m) {
                        if (this.styles.save(h),
                        d === "string" && u.substring(0, 6) === "var(--" && (u = je(A, u.substring(4, u.indexOf(")"))),
                        c = parseFloat(u)),
                        C || (v = A._gsap,
                        v.renderTransform && !t.parseTransform || js(A, t.parseTransform),
                        Q = t.smoothOrigin !== !1 && v.smooth,
                        C = this._pt = new ge(this._pt,o,gA,0,1,v.renderTransform,v,0,-1),
                        C.dep = 1),
                        h === "scale")
                            this._pt = new ge(this._pt,v,"scaleY",v.scaleY,(g ? Zn(v.scaleY, g + c) : c) - v.scaleY || 0,Lf),
                            this._pt.u = 0,
                            s.push("scaleY", h),
                            h += "X";
                        else if (h === "transformOrigin") {
                            F.push(Be, 0, o[Be]),
                            u = p_(u),
                            v.svg ? kf(A, u, 0, Q, 0, this) : (p = parseFloat(u.split(" ")[2]) || 0,
                            p !== v.zOrigin && rr(this, v, "zOrigin", v.zOrigin, p),
                            rr(this, o, h, sl(l), sl(u)));
                            continue
                        } else if (h === "svgOrigin") {
                            kf(A, u, 1, Q, 0, this);
                            continue
                        } else if (h in rv) {
                            C_(this, v, h, f, g ? Zn(f, g + u) : u);
                            continue
                        } else if (h === "smoothOrigin") {
                            rr(this, v, "smooth", v.smooth, u);
                            continue
                        } else if (h === "force3D") {
                            v[h] = u;
                            continue
                        } else if (h === "transform") {
                            v_(this, u, A);
                            continue
                        }
                    } else
                        h in o || (h = pi(h) || h);
                    if (m || (c || c === 0) && (f || f === 0) && !r_.test(u) && h in o)
                        y = (l + "").substr((f + "").length),
                        c || (c = 0),
                        p = $A(u) || (h in Ie.units ? Ie.units[h] : y),
                        y !== p && (f = Ur(A, h, l, p)),
                        this._pt = new ge(this._pt,m ? v : o,h,f,(g ? Zn(f, g + c) : c) - f,!m && (p === "px" || h === "zIndex") && t.autoRound !== !1 ? s_ : Lf),
                        this._pt.u = p || 0,
                        y !== p && p !== "%" && (this._pt.b = l,
                        this._pt.r = i_);
                    else if (h in o)
                        B_.call(this, A, h, l, g ? g + u : u);
                    else if (h in A)
                        this.add(A, h, l || A[h], g ? g + u : u, n, i);
                    else if (h !== "parseTransform") {
                        xh(h, u);
                        continue
                    }
                    m || (h in o ? F.push(h, 0, o[h]) : typeof A[h] == "function" ? F.push(h, 2, A[h]()) : F.push(h, 1, l || A[h])),
                    s.push(h)
                }
            }
        U && WC(this)
    },
    render: function(A, t) {
        if (t.tween._time || !Mh())
            for (var r = t._pt; r; )
                r.r(A, r.d),
                r = r._next;
        else
            t.styles.revert()
    },
    get: Ut,
    aliases: dt,
    getSetter: function(A, t, r) {
        var n = dt[t];
        return n && n.indexOf(",") < 0 && (t = n),
        t in Ot && t !== Be && (A._gsap.x || Ut(A, "x")) ? r && Bp === r ? t === "scale" ? u_ : l_ : (Bp = r || {}) && (t === "scale" ? c_ : f_) : A.style && !Qh(A.style[t]) ? o_ : ~t.indexOf("-") ? a_ : bh(A, t)
    },
    core: {
        _removeProperty: cn,
        _getMatrix: Ph
    }
};
me.utils.checkPrefix = pi;
me.core.getStyleSaver = qC;
(function(e, A, t, r) {
    var n = he(e + "," + A + "," + t, function(i) {
        Ot[i] = 1
    });
    he(A, function(i) {
        Ie.units[i] = "deg",
        rv[i] = 1
    }),
    dt[n[13]] = e + "," + A,
    he(r, function(i) {
        var s = i.split(":");
        dt[s[1]] = n[s[0]]
    })
}
)("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
he("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(e) {
    Ie.units[e] = "px"
});
me.registerPlugin(sv);
var ei = me.registerPlugin(sv) || me;
ei.core.Tween;
const ov = I.createContext(void 0)
  , Q_ = ({children: e}) => {
    const [A,t] = I.useState(!1)
      , [r,n] = I.useState(!1)
      , i = I.useRef(null);
    I.useEffect( () => (i.current = new Audio("/music/bgm.mp3"),
    i.current.loop = !0,
    i.current.volume = .4,
    () => {
        i.current && (i.current.pause(),
        i.current = null)
    }
    ), []);
    const s = () => {
        i.current && !A && (i.current.play().catch(a => {
            console.log("Auto-play prevented:", a)
        }
        ),
        t(!0),
        n(!0))
    }
      , o = () => {
        i.current && (A ? (i.current.pause(),
        t(!1)) : (i.current.play().catch(a => {
            console.log("Play prevented:", a)
        }
        ),
        t(!0),
        r || n(!0)))
    }
    ;
    return w.jsx(ov.Provider, {
        value: {
            isPlaying: A,
            startMusic: s,
            toggleMusic: o,
            hasStarted: r
        },
        children: e
    })
}
  , F_ = () => {
    const {isPlaying: e, toggleMusic: A, hasStarted: t} = av();
    return w.jsx(Tt, {
        children: t && w.jsx(M.button, {
            onClick: A,
            className: "fixed top-6 right-6 z-50 bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg border border-gray-200/50 hover:bg-white/90 transition-all duration-300",
            whileHover: {
                scale: 1.1
            },
            whileTap: {
                scale: .9
            },
            initial: {
                opacity: 0,
                scale: 0
            },
            animate: {
                opacity: 1,
                scale: 1
            },
            exit: {
                opacity: 0,
                scale: 0
            },
            transition: {
                duration: .3
            },
            children: e ? w.jsx(sH, {
                className: "text-purple-600",
                size: 20
            }) : w.jsx(oH, {
                className: "text-gray-500",
                size: 20
            })
        })
    })
}
  , av = () => {
    const e = I.useContext(ov);
    if (e === void 0)
        throw new Error("useMusic must be used within a MusicProvider");
    return e
}
  , U_ = ({className: e, ...A}) => w.jsxs("svg", {
    className: e,
    ...A,
    viewBox: "0 0 100 100",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-label": "Rakhi Icon",
    children: [w.jsx("line", {
        x1: "0",
        y1: "50",
        x2: "35",
        y2: "50",
        stroke: "#e1ad01",
        strokeWidth: "4",
        strokeLinecap: "round"
    }), w.jsx("line", {
        x1: "65",
        y1: "50",
        x2: "100",
        y2: "50",
        stroke: "#e1ad01",
        strokeWidth: "4",
        strokeLinecap: "round"
    }), w.jsx("circle", {
        cx: "50",
        cy: "50",
        r: "18",
        fill: "#c87f85"
    }), w.jsx("circle", {
        cx: "50",
        cy: "50",
        r: "12",
        fill: "none",
        stroke: "#e1ad01",
        strokeWidth: "3"
    }), w.jsx("circle", {
        cx: "50",
        cy: "50",
        r: "6",
        fill: "#fff0f5"
    })]
})
  , Up = ({onNext: e}) => {
    const [A,t] = I.useState(!1)
      , [r,n] = I.useState(!1)
      , [i,s] = I.useState(!1)
      , o = I.useRef(null)
      , {startMusic: a} = av();
    I.useEffect( () => (l(),
    () => {
        o.current && (o.current.innerHTML = "")
    }
    ), []);
    const l = () => {
        o.current && (o.current.innerHTML = "",
        u())
    }
      , u = () => {
        const f = Math.sqrt(window.innerWidth ** 2 + window.innerHeight ** 2);
        [{
            x: window.innerWidth * .2,
            y: window.innerHeight * .3,
            color: "rgba(255, 107, 157, 0.05)",
            maxSize: f * 1,
            duration: 4
        }, {
            x: window.innerWidth * .8,
            y: window.innerHeight * .7,
            color: "rgba(255, 217, 61, 0.05)",
            maxSize: f * 1.1,
            duration: 4.5
        }, {
            x: window.innerWidth * .5,
            y: window.innerHeight * .1,
            color: "rgba(139, 69, 19, 0.04)",
            maxSize: f * 1.05,
            duration: 4.2
        }, {
            x: window.innerWidth * .3,
            y: window.innerHeight * .8,
            color: "rgba(212, 175, 55, 0.04)",
            maxSize: f * 1.15,
            duration: 4.8
        }].forEach( (B, h) => {
            var g;
            const y = document.createElement("div");
            y.className = "absolute pointer-events-none",
            y.style.width = "40px",
            y.style.height = "40px",
            y.style.backgroundColor = B.color,
            y.style.borderRadius = "50%",
            y.style.left = B.x - 20 + "px",
            y.style.top = B.y - 20 + "px",
            y.style.filter = "blur(2px)",
            y.style.willChange = "transform, opacity",
            (g = o.current) == null || g.appendChild(y),
            ei.set(y, {
                opacity: 0,
                scale: 0
            }),
            ei.timeline({
                repeat: -1,
                delay: h * 1
            }).to(y, {
                opacity: 1,
                scale: 1,
                duration: .3,
                ease: "power2.out"
            }).to(y, {
                scale: B.maxSize / 40,
                opacity: 0,
                duration: B.duration,
                ease: "power1.out"
            }).set(y, {
                scale: 0
            })
        }
        )
    }
      , c = () => {
        A || (t(!0),
        a(),
        setTimeout( () => {
            n(!0)
        }
        , 800),
        setTimeout( () => {
            s(!0),
            setTimeout(e, 1200)
        }
        , 2800))
    }
    ;
    return w.jsxs("div", {
        className: "min-h-screen flex items-center justify-center relative overflow-hidden",
        style: {
            background: "#fdf6e3"
        },
        children: [w.jsx("div", {
            ref: o,
            className: "absolute inset-0 pointer-events-none z-0"
        }), w.jsx("div", {
            className: "absolute inset-0 pointer-events-none z-0",
            children: [...Array(12)].map( (f, d) => w.jsx(M.div, {
                className: "absolute w-1 h-1 bg-amber-400/10 rounded-full",
                style: {
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    willChange: "transform"
                },
                animate: {
                    y: [0, -20, 0],
                    opacity: [.1, .6, .1],
                    scale: [.5, 1, .5]
                },
                transition: {
                    duration: 3 + Math.random() * 2,
                    repeat: 1 / 0,
                    delay: Math.random() * 3,
                    ease: "easeInOut"
                }
            }, d))
        }), w.jsxs("div", {
            className: "relative z-10 text-center px-6",
            children: [w.jsxs(M.div, {
                className: "mb-16",
                initial: {
                    opacity: 0,
                    y: -50
                },
                animate: {
                    opacity: A ? 0 : 1,
                    y: A ? -50 : 0
                },
                transition: {
                    duration: .8,
                    ease: "easeOut"
                },
                children: [w.jsx("h1", {
                    className: "text-5xl md:text-7xl font-bold mb-4",
                    style: {
                        fontFamily: "Dancing Script, cursive",
                        color: "#a52a2a",
                        textShadow: "0 0 20px rgba(255, 107, 157, 0.3)"
                    },
                    children: "Happy Raksha Bandhan"
                }), w.jsx(M.p, {
                    className: "text-2xl text-amber-800/80",
                    style: {
                        fontFamily: "Garamond, serif"
                    },
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    transition: {
                        delay: .5
                    },
                    children: "To my Dearest Sweety akka💕"
                })]
            }), w.jsx("div", {
                className: "relative cursor-pointer",
                onClick: c,
                style: {
                    filter: A ? "none" : "drop-shadow(0 10px 30px rgba(139, 69, 19, 0.2))",
                    transform: "scale(1)",
                    transition: "transform 0.3s ease-out"
                },
                onMouseEnter: f => {
                    A || (f.currentTarget.style.transform = "scale(1.02)")
                }
                ,
                onMouseLeave: f => {
                    A || (f.currentTarget.style.transform = "scale(1)")
                }
                ,
                children: w.jsxs(M.div, {
                    className: "relative w-80 h-56 mx-auto",
                    initial: {
                        opacity: 0,
                        scale: .8
                    },
                    animate: {
                        opacity: 1,
                        scale: 1
                    },
                    transition: {
                        delay: 1,
                        duration: .8,
                        ease: "easeOut"
                    },
                    children: [w.jsx("div", {
                        className: "w-full h-full rounded-lg shadow-2xl border-2 border-amber-800/10 relative overflow-hidden flex items-center justify-center",
                        style: {
                            background: "linear-gradient(145deg, #f7f2e9 0%, #ede4d3 100%)",
                            boxShadow: "0 10px 30px rgba(139, 69, 19, 0.1)"
                        },
                        children: w.jsx("div", {
                            className: "absolute inset-0 bg-gradient-to-br from-amber-100/30 to-transparent rounded-lg"
                        })
                    }), w.jsx(M.div, {
                        className: "absolute top-0 left-0 w-full h-32 shadow-lg",
                        style: {
                            background: "linear-gradient(135deg, #e6b4b8 0%, #d89a9e 100%)",
                            clipPath: "polygon(0 0, 100% 0, 50% 100%)",
                            transformOrigin: "bottom center",
                            zIndex: 10,
                            boxShadow: A ? "0 20px 40px rgba(214, 154, 158, 0.4)" : "0 10px 20px rgba(214, 154, 158, 0.2)"
                        },
                        animate: {
                            rotateX: A ? -150 : 0,
                            y: A ? -10 : 0
                        },
                        transition: {
                            duration: 1,
                            ease: [.25, .46, .45, .94]
                        }
                    }), w.jsx("div", {
                        className: "absolute inset-0 flex items-center justify-center pointer-events-none",
                        style: {
                            zIndex: 11,
                            opacity: A ? 0 : 1,
                            transform: A ? "scale(0.8)" : "scale(1)",
                            transition: "opacity 0.5s ease-out, transform 0.5s ease-out"
                        },
                        children: w.jsx(U_, {
                            className: "w-24 h-24"
                        })
                    }), w.jsx(Tt, {
                        children: r && w.jsxs(M.div, {
                            className: "absolute top-8 left-4 w-72 h-44 bg-rose-50 rounded shadow-xl border border-gray-200 p-4",
                            initial: {
                                y: 50,
                                opacity: 0,
                                scale: .9
                            },
                            animate: {
                                y: -30,
                                opacity: 1,
                                scale: 1
                            },
                            exit: {
                                y: -100,
                                opacity: 0
                            },
                            transition: {
                                duration: 1,
                                ease: "easeOut"
                            },
                            style: {
                                zIndex: 5,
                                fontFamily: "Garamond, serif"
                            },
                            children: [w.jsxs("div", {
                                className: "text-center mb-4",
                                children: [w.jsxs("div", {
                                    className: "flex justify-center items-center gap-2 mb-2",
                                    children: [w.jsx("div", {
                                        className: "w-8 h-px bg-rose-800/20"
                                    }), w.jsx(Ue, {
                                        className: "text-rose-400",
                                        size: 12,
                                        fill: "currentColor"
                                    }), w.jsx("div", {
                                        className: "w-8 h-px bg-rose-800/20"
                                    })]
                                }), w.jsx("div", {
                                    className: "text-sm text-rose-900/70 font-medium",
                                    children: "A Letter From Your little bro ugesh "
                                })]
                            }), w.jsxs("div", {
                                className: "space-y-2.5",
                                children: [w.jsx("div", {
                                    className: "w-full h-1.5 bg-gray-300/70 rounded"
                                }), w.jsx("div", {
                                    className: "w-5/6 h-1.5 bg-gray-300/70 rounded"
                                }), w.jsx("div", {
                                    className: "w-4/5 h-1.5 bg-gray-300/70 rounded"
                                }), w.jsx("div", {
                                    className: "w-3/4 h-1.5 bg-gray-300/70 rounded"
                                })]
                            }), w.jsx("div", {
                                className: "text-center mt-4",
                                children: w.jsx(Ue, {
                                    className: "mx-auto text-rose-400 animate-pulse",
                                    size: 16,
                                    fill: "currentColor"
                                })
                            })]
                        })
                    })]
                })
            }), w.jsx(M.div, {
                className: "mt-12",
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: A ? 0 : 1
                },
                transition: {
                    duration: .5,
                    delay: A ? 0 : 1.8
                },
                children: w.jsx("div", {
                    className: "inline-block bg-white/60 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-amber-200/30",
                    style: {
                        boxShadow: "0 8px 25px rgba(139, 69, 19, 0.1)"
                    },
                    children: w.jsx("p", {
                        className: "text-amber-900/80 font-medium",
                        style: {
                            fontFamily: "Poppins, sans-serif"
                        },
                        children: "👆 Click to open your surprise"
                    })
                })
            }), w.jsx(Tt, {
                children: A && w.jsx(w.Fragment, {
                    children: [...Array(15)].map( (f, d) => w.jsx(M.div, {
                        className: "absolute pointer-events-none",
                        initial: {
                            x: 0,
                            y: 0,
                            scale: 0,
                            opacity: 0
                        },
                        animate: {
                            x: (Math.random() - .5) * 600,
                            y: -250 - Math.random() * 200,
                            scale: 1,
                            opacity: [0, 1, .8, 0],
                            rotate: Math.random() * 360
                        },
                        transition: {
                            duration: 3,
                            delay: d * .1 + .3,
                            ease: "easeOut"
                        },
                        style: {
                            left: "50%",
                            top: "50%"
                        },
                        children: w.jsx(Ue, {
                            className: d % 3 === 0 ? "text-rose-400" : d % 3 === 1 ? "text-amber-400" : "text-pink-300",
                            size: 8 + Math.random() * 12,
                            fill: "currentColor"
                        })
                    }, d))
                })
            })]
        }), w.jsx(Tt, {
            children: i && w.jsx(M.div, {
                className: "fixed inset-0 z-50",
                style: {
                    background: "#FDF6E3"
                },
                initial: {
                    clipPath: "circle(0% at 50% 50%)"
                },
                animate: {
                    clipPath: "circle(150% at 50% 50%)"
                },
                transition: {
                    duration: 1.5,
                    ease: "easeInOut"
                }
            })
        })]
    })
}
  , x_ = ({onNext: e}) => {
    const [A,t] = I.useState(0)
      , [r,n] = I.useState("")
      , [i,s] = I.useState(!1)
      , [o,a] = I.useState([])
      , [l,u] = I.useState(!1)
      , [c,f] = I.useState(!1)
      , d = ["My dearest Sweety Akka,You light up my world with your smile and love, and having you in my life is a true blessing.This year feels different — for the first time since childhood, we are apart on Raksha Bandhan. Even though you’re in Canada, miles away, our bond remains closer than ever.I miss the joy of tying Rakhi, the laughter, and the little traditions we’ve shared every year.This Rakhi, I promise — no distance, no challenge will ever break the thread that connects our hearts.Always missing you, Akka. ❤️"]
      , B = h => {
        if (h >= d.length) {
            f(!0),
            setTimeout( () => {
                s(!0)
            }
            , 300);
            return
        }
        u(!0),
        n("");
        const y = d[h];
        let p = 0;
        const g = setInterval( () => {
            if (p <= y.length)
                n(y.substring(0, p)),
                p++;
            else {
                clearInterval(g),
                u(!1),
                a(C => [...C, y]),
                n("");
                const m = h + 1;
                t(m),
                setTimeout( () => {
                    m < d.length ? B(m) : (f(!0),
                    setTimeout( () => {
                        s(!0)
                    }
                    , 300))
                }
                , 500)
            }
        }
        , 50)
    }
    ;
    return I.useEffect( () => {
        const h = setTimeout( () => {
            B(0)
        }
        , 1500);
        return () => clearTimeout(h)
    }
    , []),
    w.jsx("div", {
        className: "min-h-screen flex items-center justify-center p-4 md:p-6",
        style: {
            background: "#FDF6E3",
            minHeight: "100vh"
        },
        children: w.jsxs(M.div, {
            className: "max-w-4xl w-full",
            initial: {
                opacity: 0,
                y: 30
            },
            animate: {
                opacity: 1,
                y: 0
            },
            transition: {
                duration: .8,
                delay: .2,
                ease: "easeOut"
            },
            children: [w.jsxs("div", {
                className: "relative",
                children: [w.jsx(M.div, {
                    className: "absolute inset-0 transform translate-x-1 translate-y-1 md:translate-x-2 md:translate-y-2 rounded-lg",
                    style: {
                        background: "rgba(139, 69, 19, 0.2)"
                    },
                    initial: {
                        opacity: 0,
                        scale: .95
                    },
                    animate: {
                        opacity: 1,
                        scale: 1
                    },
                    transition: {
                        duration: .6,
                        delay: .4
                    }
                }), w.jsxs(M.div, {
                    className: "relative bg-white rounded-lg overflow-hidden",
                    style: {
                        background: `
                linear-gradient(90deg, transparent 0%, transparent 30px, #E5E7EB 30px, #E5E7EB 32px, transparent 32px),
                linear-gradient(0deg, transparent 0%, transparent 24px, #F3F4F6 24px, #F3F4F6 26px, transparent 26px),
                #FFFBF0
              `,
                        backgroundSize: "100% 26px, 100% 26px",
                        boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
                    },
                    initial: {
                        opacity: 0,
                        scale: .9,
                        rotateX: -10
                    },
                    animate: {
                        opacity: 1,
                        scale: 1,
                        rotateX: 0
                    },
                    transition: {
                        duration: .8,
                        delay: .5,
                        ease: "easeOut"
                    },
                    children: [w.jsx("div", {
                        className: "hidden md:flex absolute left-4 lg:left-6 top-0 bottom-0 flex-col justify-start pt-12 lg:pt-16 space-y-6 lg:space-y-8",
                        children: [...Array(15)].map( (h, y) => w.jsx(M.div, {
                            className: "w-2.5 h-2.5 lg:w-3 lg:h-3 rounded-full bg-gray-200 border border-gray-300",
                            initial: {
                                opacity: 0,
                                scale: 0
                            },
                            animate: {
                                opacity: 1,
                                scale: 1
                            },
                            transition: {
                                duration: .3,
                                delay: .7 + y * .05,
                                ease: "backOut"
                            }
                        }, y))
                    }), w.jsxs("div", {
                        className: "pl-6 pr-4 py-8 md:pl-16 lg:pl-20 md:pr-8 lg:pr-12 md:py-12 lg:py-16",
                        children: [w.jsxs(M.div, {
                            className: "text-center mb-8 md:mb-12",
                            initial: {
                                opacity: 0,
                                y: -20
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                delay: .9,
                                duration: .6
                            },
                            children: [w.jsxs("div", {
                                className: "flex justify-center items-center gap-2 md:gap-4 mb-4 md:mb-6",
                                children: [w.jsx(M.div, {
                                    className: "w-8 md:w-16 h-0.5 bg-gray-400",
                                    initial: {
                                        width: 0
                                    },
                                    animate: {
                                        width: "auto"
                                    },
                                    transition: {
                                        delay: 1.1,
                                        duration: .8
                                    }
                                }), w.jsx(M.div, {
                                    initial: {
                                        opacity: 0,
                                        scale: 0
                                    },
                                    animate: {
                                        opacity: 1,
                                        scale: 1
                                    },
                                    transition: {
                                        delay: 1.3,
                                        duration: .4,
                                        type: "spring"
                                    },
                                    children: w.jsx(Ue, {
                                        className: "text-pink-500",
                                        size: 16,
                                        fill: "currentColor"
                                    })
                                }), w.jsx(M.div, {
                                    className: "w-8 md:w-16 h-0.5 bg-gray-400",
                                    initial: {
                                        width: 0
                                    },
                                    animate: {
                                        width: "auto"
                                    },
                                    transition: {
                                        delay: 1.1,
                                        duration: .8
                                    }
                                })]
                            }), w.jsx(M.h2, {
                                className: "text-xl md:text-3xl font-bold text-gray-800 mb-2 md:mb-4",
                                style: {
                                    fontFamily: "serif"
                                },
                                initial: {
                                    opacity: 0,
                                    y: 10
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    delay: 1.4,
                                    duration: .6
                                },
                                children: "A Letter from your Nani"
                            })]
                        }), w.jsxs(M.div, {
                            className: `space-y-4 md:space-y-6 ${c ? "mb-6" : "min-h-60 md:min-h-80"}`,
                            initial: {
                                opacity: 0
                            },
                            animate: {
                                opacity: 1
                            },
                            transition: {
                                delay: 1.5,
                                duration: .6
                            },
                            children: [o.map( (h, y) => w.jsx("div", {
                                className: `text-base md:text-lg leading-relaxed text-gray-800 ${y === 0 ? "text-lg md:text-2xl font-semibold text-center mb-6" : ""}`,
                                style: {
                                    fontFamily: "serif",
                                    textIndent: y === 0 ? "0" : "1em"
                                },
                                children: h
                            }, y)), r && !c && w.jsxs("div", {
                                className: `text-base md:text-lg leading-relaxed text-gray-800 ${A === 0 ? "text-lg md:text-2xl font-semibold text-center mb-6" : ""}`,
                                style: {
                                    fontFamily: "serif",
                                    textIndent: A === 0 ? "0" : "1em"
                                },
                                children: [r, l && w.jsx(M.span, {
                                    className: "inline-block w-0.5 h-4 md:h-6 bg-purple-500 ml-1",
                                    animate: {
                                        opacity: [1, 0]
                                    },
                                    transition: {
                                        duration: .5,
                                        repeat: 1 / 0
                                    }
                                })]
                            })]
                        }), w.jsx(Tt, {
                            children: i && w.jsx(M.div, {
                                className: "text-right",
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    duration: .6
                                },
                                children: w.jsxs("div", {
                                    className: "space-y-2 md:space-y-3",
                                    children: [w.jsx(M.p, {
                                        className: "text-sm md:text-lg text-gray-700",
                                        style: {
                                            fontFamily: "serif"
                                        },
                                        initial: {
                                            opacity: 0,
                                            x: 20
                                        },
                                        animate: {
                                            opacity: 1,
                                            x: 0
                                        },
                                        transition: {
                                            delay: .2,
                                            duration: .6
                                        },
                                        children: "With endless love and warm wishes,"
                                    }), w.jsx("div", {
                                        className: "relative",
                                        children: w.jsx(M.p, {
                                            className: "text-lg md:text-2xl font-bold text-gray-800",
                                            style: {
                                                fontFamily: "serif",
                                                transform: "rotate(-1deg)"
                                            },
                                            initial: {
                                                opacity: 0,
                                                scale: .9
                                            },
                                            animate: {
                                                opacity: 1,
                                                scale: 1
                                            },
                                            transition: {
                                                delay: .4,
                                                duration: .6,
                                                type: "spring"
                                            },
                                            children: "Your Loving  Thammudu ❤️"
                                        })
                                    }), w.jsx(M.div, {
                                        className: "flex justify-end items-center gap-2 md:gap-3 mt-3 md:mt-4",
                                        initial: {
                                            opacity: 0,
                                            scale: 0
                                        },
                                        animate: {
                                            opacity: 1,
                                            scale: 1
                                        },
                                        transition: {
                                            delay: .6,
                                            duration: .5,
                                            type: "spring"
                                        },
                                        children: w.jsx("div", {
                                            className: `w-6 h-6 md:w-8 md:h-8 bg-red-500 rounded-full border-2 border-yellow-400 
                                      flex items-center justify-center shadow-md transform rotate-12`,
                                            children: w.jsx(Ue, {
                                                className: "text-yellow-200",
                                                size: 10,
                                                fill: "currentColor"
                                            })
                                        })
                                    })]
                                })
                            })
                        }), w.jsx(M.div, {
                            className: "absolute top-6 md:top-8 right-6 md:right-8 opacity-30",
                            initial: {
                                opacity: 0,
                                rotate: -45
                            },
                            animate: {
                                opacity: .3,
                                rotate: 0
                            },
                            transition: {
                                delay: 1.9,
                                duration: .6
                            },
                            children: w.jsx(Ue, {
                                className: "text-pink-400",
                                size: 12
                            })
                        }), w.jsx(M.div, {
                            className: "absolute bottom-16 md:bottom-20 left-12 md:left-16 opacity-30 transform rotate-12",
                            initial: {
                                opacity: 0,
                                scale: 0
                            },
                            animate: {
                                opacity: .3,
                                scale: 1
                            },
                            transition: {
                                delay: 2.1,
                                duration: .6
                            },
                            children: w.jsx(Ue, {
                                className: "text-red-400",
                                size: 10
                            })
                        })]
                    }), w.jsx(M.div, {
                        className: "absolute top-3 md:top-4 right-3 md:right-4 w-6 h-6 md:w-8 md:h-8 bg-yellow-100 rounded-full opacity-40",
                        initial: {
                            opacity: 0,
                            scale: 0
                        },
                        animate: {
                            opacity: .4,
                            scale: 1
                        },
                        transition: {
                            delay: 1.7,
                            duration: .6
                        }
                    }), w.jsx(M.div, {
                        className: "absolute bottom-6 md:bottom-8 left-8 md:left-12 w-4 h-4 md:w-6 md:h-6 bg-amber-100 rounded-full opacity-30",
                        initial: {
                            opacity: 0,
                            scale: 0
                        },
                        animate: {
                            opacity: .3,
                            scale: 1
                        },
                        transition: {
                            delay: 1.8,
                            duration: .6
                        }
                    })]
                })]
            }), w.jsx(Tt, {
                children: i && w.jsx(M.div, {
                    className: "text-center mt-8 md:mt-12",
                    initial: {
                        opacity: 0,
                        scale: .8,
                        y: 20
                    },
                    animate: {
                        opacity: 1,
                        scale: 1,
                        y: 0
                    },
                    transition: {
                        delay: .8,
                        duration: .6,
                        type: "spring"
                    },
                    children: w.jsxs(M.button, {
                        onClick: e,
                        className: `group bg-gradient-to-r from-purple-500 to-pink-500 text-white 
                         px-8 py-3 md:px-12 md:py-4 rounded-full font-bold text-base md:text-lg shadow-xl 
                         hover:scale-105 hover:shadow-2xl transition-all duration-300 
                         relative overflow-hidden`,
                        style: {
                            fontFamily: "Poppins"
                        },
                        whileHover: {
                            scale: 1.05
                        },
                        whileTap: {
                            scale: .95
                        },
                        children: [w.jsxs("span", {
                            className: "relative z-10 flex items-center gap-2 md:gap-3",
                            children: ["Design Your Rakhi 🎨", w.jsx(Ch, {
                                size: 18,
                                className: "group-hover:translate-x-1 transition-transform duration-300"
                            })]
                        }), w.jsx("div", {
                            className: `absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
                              transform -skew-x-12 -translate-x-full group-hover:translate-x-full 
                              transition-transform duration-1000`
                        })]
                    })
                })
            })]
        })
    })
}
;
/*!
 * html2canvas 1.4.1 <https://html2canvas.hertzen.com>
 * Copyright (c) 2022 Niklas von Hertzen <https://hertzen.com>
 * Released under MIT License
 */
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var Mf = function(e, A) {
    return Mf = Object.setPrototypeOf || {
        __proto__: []
    }instanceof Array && function(t, r) {
        t.__proto__ = r
    }
    || function(t, r) {
        for (var n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
    }
    ,
    Mf(e, A)
};
function st(e, A) {
    if (typeof A != "function" && A !== null)
        throw new TypeError("Class extends value " + String(A) + " is not a constructor or null");
    Mf(e, A);
    function t() {
        this.constructor = e
    }
    e.prototype = A === null ? Object.create(A) : (t.prototype = A.prototype,
    new t)
}
var Kf = function() {
    return Kf = Object.assign || function(A) {
        for (var t, r = 1, n = arguments.length; r < n; r++) {
            t = arguments[r];
            for (var i in t)
                Object.prototype.hasOwnProperty.call(t, i) && (A[i] = t[i])
        }
        return A
    }
    ,
    Kf.apply(this, arguments)
};
function Ae(e, A, t, r) {
    function n(i) {
        return i instanceof t ? i : new t(function(s) {
            s(i)
        }
        )
    }
    return new (t || (t = Promise))(function(i, s) {
        function o(u) {
            try {
                l(r.next(u))
            } catch (c) {
                s(c)
            }
        }
        function a(u) {
            try {
                l(r.throw(u))
            } catch (c) {
                s(c)
            }
        }
        function l(u) {
            u.done ? i(u.value) : n(u.value).then(o, a)
        }
        l((r = r.apply(e, [])).next())
    }
    )
}
function XA(e, A) {
    var t = {
        label: 0,
        sent: function() {
            if (i[0] & 1)
                throw i[1];
            return i[1]
        },
        trys: [],
        ops: []
    }, r, n, i, s;
    return s = {
        next: o(0),
        throw: o(1),
        return: o(2)
    },
    typeof Symbol == "function" && (s[Symbol.iterator] = function() {
        return this
    }
    ),
    s;
    function o(l) {
        return function(u) {
            return a([l, u])
        }
    }
    function a(l) {
        if (r)
            throw new TypeError("Generator is already executing.");
        for (; t; )
            try {
                if (r = 1,
                n && (i = l[0] & 2 ? n.return : l[0] ? n.throw || ((i = n.return) && i.call(n),
                0) : n.next) && !(i = i.call(n, l[1])).done)
                    return i;
                switch (n = 0,
                i && (l = [l[0] & 2, i.value]),
                l[0]) {
                case 0:
                case 1:
                    i = l;
                    break;
                case 4:
                    return t.label++,
                    {
                        value: l[1],
                        done: !1
                    };
                case 5:
                    t.label++,
                    n = l[1],
                    l = [0];
                    continue;
                case 7:
                    l = t.ops.pop(),
                    t.trys.pop();
                    continue;
                default:
                    if (i = t.trys,
                    !(i = i.length > 0 && i[i.length - 1]) && (l[0] === 6 || l[0] === 2)) {
                        t = 0;
                        continue
                    }
                    if (l[0] === 3 && (!i || l[1] > i[0] && l[1] < i[3])) {
                        t.label = l[1];
                        break
                    }
                    if (l[0] === 6 && t.label < i[1]) {
                        t.label = i[1],
                        i = l;
                        break
                    }
                    if (i && t.label < i[2]) {
                        t.label = i[2],
                        t.ops.push(l);
                        break
                    }
                    i[2] && t.ops.pop(),
                    t.trys.pop();
                    continue
                }
                l = A.call(e, t)
            } catch (u) {
                l = [6, u],
                n = 0
            } finally {
                r = i = 0
            }
        if (l[0] & 5)
            throw l[1];
        return {
            value: l[0] ? l[1] : void 0,
            done: !0
        }
    }
}
function So(e, A, t) {
    if (arguments.length === 2)
        for (var r = 0, n = A.length, i; r < n; r++)
            (i || !(r in A)) && (i || (i = Array.prototype.slice.call(A, 0, r)),
            i[r] = A[r]);
    return e.concat(i || A)
}
var Nt = function() {
    function e(A, t, r, n) {
        this.left = A,
        this.top = t,
        this.width = r,
        this.height = n
    }
    return e.prototype.add = function(A, t, r, n) {
        return new e(this.left + A,this.top + t,this.width + r,this.height + n)
    }
    ,
    e.fromClientRect = function(A, t) {
        return new e(t.left + A.windowBounds.left,t.top + A.windowBounds.top,t.width,t.height)
    }
    ,
    e.fromDOMRectList = function(A, t) {
        var r = Array.from(t).find(function(n) {
            return n.width !== 0
        });
        return r ? new e(r.left + A.windowBounds.left,r.top + A.windowBounds.top,r.width,r.height) : e.EMPTY
    }
    ,
    e.EMPTY = new e(0,0,0,0),
    e
}()
  , Gl = function(e, A) {
    return Nt.fromClientRect(e, A.getBoundingClientRect())
}
  , E_ = function(e) {
    var A = e.body
      , t = e.documentElement;
    if (!A || !t)
        throw new Error("Unable to get document size");
    var r = Math.max(Math.max(A.scrollWidth, t.scrollWidth), Math.max(A.offsetWidth, t.offsetWidth), Math.max(A.clientWidth, t.clientWidth))
      , n = Math.max(Math.max(A.scrollHeight, t.scrollHeight), Math.max(A.offsetHeight, t.offsetHeight), Math.max(A.clientHeight, t.clientHeight));
    return new Nt(0,0,r,n)
}
  , jl = function(e) {
    for (var A = [], t = 0, r = e.length; t < r; ) {
        var n = e.charCodeAt(t++);
        if (n >= 55296 && n <= 56319 && t < r) {
            var i = e.charCodeAt(t++);
            (i & 64512) === 56320 ? A.push(((n & 1023) << 10) + (i & 1023) + 65536) : (A.push(n),
            t--)
        } else
            A.push(n)
    }
    return A
}
  , CA = function() {
    for (var e = [], A = 0; A < arguments.length; A++)
        e[A] = arguments[A];
    if (String.fromCodePoint)
        return String.fromCodePoint.apply(String, e);
    var t = e.length;
    if (!t)
        return "";
    for (var r = [], n = -1, i = ""; ++n < t; ) {
        var s = e[n];
        s <= 65535 ? r.push(s) : (s -= 65536,
        r.push((s >> 10) + 55296, s % 1024 + 56320)),
        (n + 1 === t || r.length > 16384) && (i += String.fromCharCode.apply(String, r),
        r.length = 0)
    }
    return i
}
  , xp = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
  , I_ = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var To = 0; To < xp.length; To++)
    I_[xp.charCodeAt(To)] = To;
var Ep = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
  , ji = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var Lo = 0; Lo < Ep.length; Lo++)
    ji[Ep.charCodeAt(Lo)] = Lo;
var H_ = function(e) {
    var A = e.length * .75, t = e.length, r, n = 0, i, s, o, a;
    e[e.length - 1] === "=" && (A--,
    e[e.length - 2] === "=" && A--);
    var l = typeof ArrayBuffer < "u" && typeof Uint8Array < "u" && typeof Uint8Array.prototype.slice < "u" ? new ArrayBuffer(A) : new Array(A)
      , u = Array.isArray(l) ? l : new Uint8Array(l);
    for (r = 0; r < t; r += 4)
        i = ji[e.charCodeAt(r)],
        s = ji[e.charCodeAt(r + 1)],
        o = ji[e.charCodeAt(r + 2)],
        a = ji[e.charCodeAt(r + 3)],
        u[n++] = i << 2 | s >> 4,
        u[n++] = (s & 15) << 4 | o >> 2,
        u[n++] = (o & 3) << 6 | a & 63;
    return l
}
  , __ = function(e) {
    for (var A = e.length, t = [], r = 0; r < A; r += 2)
        t.push(e[r + 1] << 8 | e[r]);
    return t
}
  , S_ = function(e) {
    for (var A = e.length, t = [], r = 0; r < A; r += 4)
        t.push(e[r + 3] << 24 | e[r + 2] << 16 | e[r + 1] << 8 | e[r]);
    return t
}
  , rn = 5
  , Oh = 11
  , Yu = 2
  , T_ = Oh - rn
  , lv = 65536 >> rn
  , L_ = 1 << rn
  , Ju = L_ - 1
  , b_ = 1024 >> rn
  , D_ = lv + b_
  , k_ = D_
  , M_ = 32
  , K_ = k_ + M_
  , P_ = 65536 >> Oh
  , O_ = 1 << T_
  , N_ = O_ - 1
  , Ip = function(e, A, t) {
    return e.slice ? e.slice(A, t) : new Uint16Array(Array.prototype.slice.call(e, A, t))
}
  , R_ = function(e, A, t) {
    return e.slice ? e.slice(A, t) : new Uint32Array(Array.prototype.slice.call(e, A, t))
}
  , V_ = function(e, A) {
    var t = H_(e)
      , r = Array.isArray(t) ? S_(t) : new Uint32Array(t)
      , n = Array.isArray(t) ? __(t) : new Uint16Array(t)
      , i = 24
      , s = Ip(n, i / 2, r[4] / 2)
      , o = r[5] === 2 ? Ip(n, (i + r[4]) / 2) : R_(r, Math.ceil((i + r[4]) / 4));
    return new G_(r[0],r[1],r[2],r[3],s,o)
}
  , G_ = function() {
    function e(A, t, r, n, i, s) {
        this.initialValue = A,
        this.errorValue = t,
        this.highStart = r,
        this.highValueIndex = n,
        this.index = i,
        this.data = s
    }
    return e.prototype.get = function(A) {
        var t;
        if (A >= 0) {
            if (A < 55296 || A > 56319 && A <= 65535)
                return t = this.index[A >> rn],
                t = (t << Yu) + (A & Ju),
                this.data[t];
            if (A <= 65535)
                return t = this.index[lv + (A - 55296 >> rn)],
                t = (t << Yu) + (A & Ju),
                this.data[t];
            if (A < this.highStart)
                return t = K_ - P_ + (A >> Oh),
                t = this.index[t],
                t += A >> rn & N_,
                t = this.index[t],
                t = (t << Yu) + (A & Ju),
                this.data[t];
            if (A <= 1114111)
                return this.data[this.highValueIndex]
        }
        return this.errorValue
    }
    ,
    e
}()
  , Hp = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
  , j_ = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var bo = 0; bo < Hp.length; bo++)
    j_[Hp.charCodeAt(bo)] = bo;
var z_ = "KwAAAAAAAAAACA4AUD0AADAgAAACAAAAAAAIABAAGABAAEgAUABYAGAAaABgAGgAYgBqAF8AZwBgAGgAcQB5AHUAfQCFAI0AlQCdAKIAqgCyALoAYABoAGAAaABgAGgAwgDKAGAAaADGAM4A0wDbAOEA6QDxAPkAAQEJAQ8BFwF1AH0AHAEkASwBNAE6AUIBQQFJAVEBWQFhAWgBcAF4ATAAgAGGAY4BlQGXAZ8BpwGvAbUBvQHFAc0B0wHbAeMB6wHxAfkBAQIJAvEBEQIZAiECKQIxAjgCQAJGAk4CVgJeAmQCbAJ0AnwCgQKJApECmQKgAqgCsAK4ArwCxAIwAMwC0wLbAjAA4wLrAvMC+AIAAwcDDwMwABcDHQMlAy0DNQN1AD0DQQNJA0kDSQNRA1EDVwNZA1kDdQB1AGEDdQBpA20DdQN1AHsDdQCBA4kDkQN1AHUAmQOhA3UAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AKYDrgN1AHUAtgO+A8YDzgPWAxcD3gPjA+sD8wN1AHUA+wMDBAkEdQANBBUEHQQlBCoEFwMyBDgEYABABBcDSARQBFgEYARoBDAAcAQzAXgEgASIBJAEdQCXBHUAnwSnBK4EtgS6BMIEyAR1AHUAdQB1AHUAdQCVANAEYABgAGAAYABgAGAAYABgANgEYADcBOQEYADsBPQE/AQEBQwFFAUcBSQFLAU0BWQEPAVEBUsFUwVbBWAAYgVgAGoFcgV6BYIFigWRBWAAmQWfBaYFYABgAGAAYABgAKoFYACxBbAFuQW6BcEFwQXHBcEFwQXPBdMF2wXjBeoF8gX6BQIGCgYSBhoGIgYqBjIGOgZgAD4GRgZMBmAAUwZaBmAAYABgAGAAYABgAGAAYABgAGAAYABgAGIGYABpBnAGYABgAGAAYABgAGAAYABgAGAAYAB4Bn8GhQZgAGAAYAB1AHcDFQSLBmAAYABgAJMGdQA9A3UAmwajBqsGqwaVALMGuwbDBjAAywbSBtIG1QbSBtIG0gbSBtIG0gbdBuMG6wbzBvsGAwcLBxMHAwcbByMHJwcsBywHMQcsB9IGOAdAB0gHTgfSBkgHVgfSBtIG0gbSBtIG0gbSBtIG0gbSBiwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdgAGAALAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdbB2MHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB2kH0gZwB64EdQB1AHUAdQB1AHUAdQB1AHUHfQdgAIUHjQd1AHUAlQedB2AAYAClB6sHYACzB7YHvgfGB3UAzgfWBzMB3gfmB1EB7gf1B/0HlQENAQUIDQh1ABUIHQglCBcDLQg1CD0IRQhNCEEDUwh1AHUAdQBbCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIcAh3CHoIMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIgggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAALAcsBywHLAcsBywHLAcsBywHLAcsB4oILAcsB44I0gaWCJ4Ipgh1AHUAqgiyCHUAdQB1AHUAdQB1AHUAdQB1AHUAtwh8AXUAvwh1AMUIyQjRCNkI4AjoCHUAdQB1AO4I9gj+CAYJDgkTCS0HGwkjCYIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiAAIAAAAFAAYABgAGIAXwBgAHEAdQBFAJUAogCyAKAAYABgAEIA4ABGANMA4QDxAMEBDwE1AFwBLAE6AQEBUQF4QkhCmEKoQrhCgAHIQsAB0MLAAcABwAHAAeDC6ABoAHDCwMMAAcABwAHAAdDDGMMAAcAB6MM4wwjDWMNow3jDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEjDqABWw6bDqABpg6gAaABoAHcDvwOPA+gAaABfA/8DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DpcPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB9cPKwkyCToJMAB1AHUAdQBCCUoJTQl1AFUJXAljCWcJawkwADAAMAAwAHMJdQB2CX4JdQCECYoJjgmWCXUAngkwAGAAYABxAHUApgn3A64JtAl1ALkJdQDACTAAMAAwADAAdQB1AHUAdQB1AHUAdQB1AHUAowYNBMUIMAAwADAAMADICcsJ0wnZCRUE4QkwAOkJ8An4CTAAMAB1AAAKvwh1AAgKDwoXCh8KdQAwACcKLgp1ADYKqAmICT4KRgowADAAdQB1AE4KMAB1AFYKdQBeCnUAZQowADAAMAAwADAAMAAwADAAMAAVBHUAbQowADAAdQC5CXUKMAAwAHwBxAijBogEMgF9CoQKiASMCpQKmgqIBKIKqgquCogEDQG2Cr4KxgrLCjAAMADTCtsKCgHjCusK8Qr5CgELMAAwADAAMAB1AIsECQsRC3UANAEZCzAAMAAwADAAMAB1ACELKQswAHUANAExCzkLdQBBC0kLMABRC1kLMAAwADAAMAAwADAAdQBhCzAAMAAwAGAAYABpC3ELdwt/CzAAMACHC4sLkwubC58Lpwt1AK4Ltgt1APsDMAAwADAAMAAwADAAMAAwAL4LwwvLC9IL1wvdCzAAMADlC+kL8Qv5C/8LSQswADAAMAAwADAAMAAwADAAMAAHDDAAMAAwADAAMAAODBYMHgx1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1ACYMMAAwADAAdQB1AHUALgx1AHUAdQB1AHUAdQA2DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AD4MdQBGDHUAdQB1AHUAdQB1AEkMdQB1AHUAdQB1AFAMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQBYDHUAdQB1AF8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUA+wMVBGcMMAAwAHwBbwx1AHcMfwyHDI8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAYABgAJcMMAAwADAAdQB1AJ8MlQClDDAAMACtDCwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB7UMLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AA0EMAC9DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAsBywHLAcsBywHLAcsBywHLQcwAMEMyAwsBywHLAcsBywHLAcsBywHLAcsBywHzAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1ANQM2QzhDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMABgAGAAYABgAGAAYABgAOkMYADxDGAA+AwADQYNYABhCWAAYAAODTAAMAAwADAAFg1gAGAAHg37AzAAMAAwADAAYABgACYNYAAsDTQNPA1gAEMNPg1LDWAAYABgAGAAYABgAGAAYABgAGAAUg1aDYsGVglhDV0NcQBnDW0NdQ15DWAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAlQCBDZUAiA2PDZcNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAnw2nDTAAMAAwADAAMAAwAHUArw23DTAAMAAwADAAMAAwADAAMAAwADAAMAB1AL8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQDHDTAAYABgAM8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA1w11ANwNMAAwAD0B5A0wADAAMAAwADAAMADsDfQN/A0EDgwOFA4wABsOMAAwADAAMAAwADAAMAAwANIG0gbSBtIG0gbSBtIG0gYjDigOwQUuDsEFMw7SBjoO0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGQg5KDlIOVg7SBtIGXg5lDm0OdQ7SBtIGfQ6EDooOjQ6UDtIGmg6hDtIG0gaoDqwO0ga0DrwO0gZgAGAAYADEDmAAYAAkBtIGzA5gANIOYADaDokO0gbSBt8O5w7SBu8O0gb1DvwO0gZgAGAAxA7SBtIG0gbSBtIGYABgAGAAYAAED2AAsAUMD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHJA8sBywHLAcsBywHLAccDywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywPLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAc0D9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHPA/SBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gYUD0QPlQCVAJUAMAAwADAAMACVAJUAlQCVAJUAlQCVAEwPMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA//8EAAQABAAEAAQABAAEAAQABAANAAMAAQABAAIABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQACgATABcAHgAbABoAHgAXABYAEgAeABsAGAAPABgAHABLAEsASwBLAEsASwBLAEsASwBLABgAGAAeAB4AHgATAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAGwASAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWAA0AEQAeAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAFAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJABYAGgAbABsAGwAeAB0AHQAeAE8AFwAeAA0AHgAeABoAGwBPAE8ADgBQAB0AHQAdAE8ATwAXAE8ATwBPABYAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwBWAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsABAAbABsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEAA0ADQBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABABQACsAKwArACsAKwArACsAKwAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUAAaABoAUABQAFAAUABQAEwAHgAbAFAAHgAEACsAKwAEAAQABAArAFAAUABQAFAAUABQACsAKwArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQACsAUABQACsAKwAEACsABAAEAAQABAAEACsAKwArACsABAAEACsAKwAEAAQABAArACsAKwAEACsAKwArACsAKwArACsAUABQAFAAUAArAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAAQABABQAFAAUAAEAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAArACsAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AGwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAKwArACsAKwArAAQABAAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAAQAUAArAFAAUABQAFAAUABQACsAKwArAFAAUABQACsAUABQAFAAUAArACsAKwBQAFAAKwBQACsAUABQACsAKwArAFAAUAArACsAKwBQAFAAUAArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAArACsAKwAEAAQABAArAAQABAAEAAQAKwArAFAAKwArACsAKwArACsABAArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAHgAeAB4AHgAeAB4AGwAeACsAKwArACsAKwAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAUABQAFAAKwArACsAKwArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwAOAFAAUABQAFAAUABQAFAAHgBQAAQABAAEAA4AUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAKwArAAQAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAKwArACsAKwArACsAUAArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAXABcAFwAXABcACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAXAArAFwAXABcAFwAXABcAFwAXABcAFwAKgBcAFwAKgAqACoAKgAqACoAKgAqACoAXAArACsAXABcAFwAXABcACsAXAArACoAKgAqACoAKgAqACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwBcAFwAXABcAFAADgAOAA4ADgAeAA4ADgAJAA4ADgANAAkAEwATABMAEwATAAkAHgATAB4AHgAeAAQABAAeAB4AHgAeAB4AHgBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAADQAEAB4ABAAeAAQAFgARABYAEQAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAAQABAAEAAQADQAEAAQAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAA0ADQAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeACsAHgAeAA4ADgANAA4AHgAeAB4AHgAeAAkACQArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgBcAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4AHgAeAB4AXABcAFwAXABcAFwAKgAqACoAKgBcAFwAXABcACoAKgAqAFwAKgAqACoAXABcACoAKgAqACoAKgAqACoAXABcAFwAKgAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwAKgBLAEsASwBLAEsASwBLAEsASwBLACoAKgAqACoAKgAqAFAAUABQAFAAUABQACsAUAArACsAKwArACsAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAKwBQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsABAAEAAQAHgANAB4AHgAeAB4AHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUAArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWABEAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAANAA0AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUAArAAQABAArACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAA0ADQAVAFwADQAeAA0AGwBcACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwAeAB4AEwATAA0ADQAOAB4AEwATAB4ABAAEAAQACQArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAHgArACsAKwATABMASwBLAEsASwBLAEsASwBLAEsASwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAXABcAFwAXABcACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXAArACsAKwAqACoAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsAHgAeAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKwArAAQASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACoAKgAqACoAKgAqACoAXAAqACoAKgAqACoAKgArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABABQAFAAUABQAFAAUABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgANAA0ADQANAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwAeAB4AHgAeAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArAA0ADQANAA0ADQBLAEsASwBLAEsASwBLAEsASwBLACsAKwArAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUAAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAAQAUABQAFAAUABQAFAABABQAFAABAAEAAQAUAArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQACsAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQACsAKwAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQACsAHgAeAB4AHgAeAB4AHgAOAB4AKwANAA0ADQANAA0ADQANAAkADQANAA0ACAAEAAsABAAEAA0ACQANAA0ADAAdAB0AHgAXABcAFgAXABcAFwAWABcAHQAdAB4AHgAUABQAFAANAAEAAQAEAAQABAAEAAQACQAaABoAGgAaABoAGgAaABoAHgAXABcAHQAVABUAHgAeAB4AHgAeAB4AGAAWABEAFQAVABUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ADQAeAA0ADQANAA0AHgANAA0ADQAHAB4AHgAeAB4AKwAEAAQABAAEAAQABAAEAAQABAAEAFAAUAArACsATwBQAFAAUABQAFAAHgAeAB4AFgARAE8AUABPAE8ATwBPAFAAUABQAFAAUAAeAB4AHgAWABEAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArABsAGwAbABsAGwAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGgAbABsAGwAbABoAGwAbABoAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAFAAGgAeAB0AHgBQAB4AGgAeAB4AHgAeAB4AHgAeAB4AHgBPAB4AUAAbAB4AHgBQAFAAUABQAFAAHgAeAB4AHQAdAB4AUAAeAFAAHgBQAB4AUABPAFAAUAAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgBQAFAAUABQAE8ATwBQAFAAUABQAFAATwBQAFAATwBQAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAUABQAFAATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABPAB4AHgArACsAKwArAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAdAB4AHgAeAB0AHQAeAB4AHQAeAB4AHgAdAB4AHQAbABsAHgAdAB4AHgAeAB4AHQAeAB4AHQAdAB0AHQAeAB4AHQAeAB0AHgAdAB0AHQAdAB0AHQAeAB0AHgAeAB4AHgAeAB0AHQAdAB0AHgAeAB4AHgAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB0AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAdAB0AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHQAdAB0AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHQAdAB4AHgAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AJQAlAB0AHQAlAB4AJQAlACUAIAAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAeAB0AJQAdAB0AHgAdAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAdAB0AHQAdACUAHgAlACUAJQAdACUAJQAdAB0AHQAlACUAHQAdACUAHQAdACUAJQAlAB4AHQAeAB4AHgAeAB0AHQAlAB0AHQAdAB0AHQAdACUAJQAlACUAJQAdACUAJQAgACUAHQAdACUAJQAlACUAJQAlACUAJQAeAB4AHgAlACUAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AFwAXABcAFwAXABcAHgATABMAJQAeAB4AHgAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARABYAEQAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANAA0AHgANAB4ADQANAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwAlACUAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACsAKwArACsAKwArACsAKwArACsAKwArAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBPAE8ATwBPAE8ATwBPAE8AJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeAAQAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUABQAAQAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAUABQAFAAUABQAAQABAAEACsABAAEACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAKwBQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAA0ADQANAA0ADQANAA0ADQAeACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAArACsAKwArAFAAUABQAFAAUAANAA0ADQANAA0ADQAUACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQANAA0ADQANAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAANACsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAB4AHgAeAB4AHgArACsAKwArACsAKwAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANAFAABAAEAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAEAAQABAAEAB4ABAAEAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsABAAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLAA0ADQArAB4ABABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUAAeAFAAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAAEAAQADgANAA0AEwATAB4AHgAeAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAFAAUABQAFAABAAEACsAKwAEAA0ADQAeAFAAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcAFwADQANAA0AKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQAKwAEAAQAKwArAAQABAAEAAQAUAAEAFAABAAEAA0ADQANACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABABQAA4AUAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANAFAADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAaABoAGgAaAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAJAAkACQAJAAkACQAJABYAEQArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AHgAeACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAARwBHABUARwAJACsAKwArACsAKwArACsAKwArACsAKwAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAKwArACsAKwArACsAKwArACsAKwArACsAKwBRAFEAUQBRACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAHgAEAAQADQAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAeAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQAHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAKwArAFAAKwArAFAAUAArACsAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAHgAeAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeACsAKwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4ABAAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAHgAeAA0ADQANAA0AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArAAQABAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwBQAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArABsAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAB4AHgAeAB4ABAAEAAQABAAEAAQABABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArABYAFgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAGgBQAFAAUAAaAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUAArACsAKwArACsAKwBQACsAKwArACsAUAArAFAAKwBQACsAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUAArAFAAKwBQACsAUAArAFAAUAArAFAAKwArAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAKwBQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeACUAJQAlAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAHgAlACUAJQAlACUAIAAgACAAJQAlACAAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACEAIQAhACEAIQAlACUAIAAgACUAJQAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAlACUAJQAlACAAIAAgACUAIAAgACAAJQAlACUAJQAlACUAJQAgACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAlAB4AJQAeACUAJQAlACUAJQAgACUAJQAlACUAHgAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACAAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABcAFwAXABUAFQAVAB4AHgAeAB4AJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAgACUAJQAgACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAIAAgACUAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACAAIAAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACAAIAAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAA=="
  , _p = 50
  , X_ = 1
  , uv = 2
  , cv = 3
  , W_ = 4
  , Y_ = 5
  , Sp = 7
  , fv = 8
  , Tp = 9
  , nr = 10
  , Pf = 11
  , Lp = 12
  , Of = 13
  , J_ = 14
  , zi = 15
  , Nf = 16
  , Do = 17
  , bi = 18
  , $_ = 19
  , bp = 20
  , Rf = 21
  , Di = 22
  , $u = 23
  , wn = 24
  , ye = 25
  , Xi = 26
  , Wi = 27
  , yn = 28
  , Z_ = 29
  , Vr = 30
  , q_ = 31
  , ko = 32
  , Mo = 33
  , Vf = 34
  , Gf = 35
  , jf = 36
  , zs = 37
  , zf = 38
  , pa = 39
  , ma = 40
  , Zu = 41
  , dv = 42
  , AS = 43
  , eS = [9001, 65288]
  , hv = "!"
  , W = "×"
  , Ko = "÷"
  , Xf = V_(z_)
  , yt = [Vr, jf]
  , Wf = [X_, uv, cv, Y_]
  , gv = [nr, fv]
  , Dp = [Wi, Xi]
  , tS = Wf.concat(gv)
  , kp = [zf, pa, ma, Vf, Gf]
  , rS = [zi, Of]
  , nS = function(e, A) {
    A === void 0 && (A = "strict");
    var t = []
      , r = []
      , n = [];
    return e.forEach(function(i, s) {
        var o = Xf.get(i);
        if (o > _p ? (n.push(!0),
        o -= _p) : n.push(!1),
        ["normal", "auto", "loose"].indexOf(A) !== -1 && [8208, 8211, 12316, 12448].indexOf(i) !== -1)
            return r.push(s),
            t.push(Nf);
        if (o === W_ || o === Pf) {
            if (s === 0)
                return r.push(s),
                t.push(Vr);
            var a = t[s - 1];
            return tS.indexOf(a) === -1 ? (r.push(r[s - 1]),
            t.push(a)) : (r.push(s),
            t.push(Vr))
        }
        if (r.push(s),
        o === q_)
            return t.push(A === "strict" ? Rf : zs);
        if (o === dv || o === Z_)
            return t.push(Vr);
        if (o === AS)
            return i >= 131072 && i <= 196605 || i >= 196608 && i <= 262141 ? t.push(zs) : t.push(Vr);
        t.push(o)
    }),
    [r, t, n]
}
  , qu = function(e, A, t, r) {
    var n = r[t];
    if (Array.isArray(e) ? e.indexOf(n) !== -1 : e === n)
        for (var i = t; i <= r.length; ) {
            i++;
            var s = r[i];
            if (s === A)
                return !0;
            if (s !== nr)
                break
        }
    if (n === nr)
        for (var i = t; i > 0; ) {
            i--;
            var o = r[i];
            if (Array.isArray(e) ? e.indexOf(o) !== -1 : e === o)
                for (var a = t; a <= r.length; ) {
                    a++;
                    var s = r[a];
                    if (s === A)
                        return !0;
                    if (s !== nr)
                        break
                }
            if (o !== nr)
                break
        }
    return !1
}
  , Mp = function(e, A) {
    for (var t = e; t >= 0; ) {
        var r = A[t];
        if (r === nr)
            t--;
        else
            return r
    }
    return 0
}
  , iS = function(e, A, t, r, n) {
    if (t[r] === 0)
        return W;
    var i = r - 1;
    if (Array.isArray(n) && n[i] === !0)
        return W;
    var s = i - 1
      , o = i + 1
      , a = A[i]
      , l = s >= 0 ? A[s] : 0
      , u = A[o];
    if (a === uv && u === cv)
        return W;
    if (Wf.indexOf(a) !== -1)
        return hv;
    if (Wf.indexOf(u) !== -1 || gv.indexOf(u) !== -1)
        return W;
    if (Mp(i, A) === fv)
        return Ko;
    if (Xf.get(e[i]) === Pf || (a === ko || a === Mo) && Xf.get(e[o]) === Pf || a === Sp || u === Sp || a === Tp || [nr, Of, zi].indexOf(a) === -1 && u === Tp || [Do, bi, $_, wn, yn].indexOf(u) !== -1 || Mp(i, A) === Di || qu($u, Di, i, A) || qu([Do, bi], Rf, i, A) || qu(Lp, Lp, i, A))
        return W;
    if (a === nr)
        return Ko;
    if (a === $u || u === $u)
        return W;
    if (u === Nf || a === Nf)
        return Ko;
    if ([Of, zi, Rf].indexOf(u) !== -1 || a === J_ || l === jf && rS.indexOf(a) !== -1 || a === yn && u === jf || u === bp || yt.indexOf(u) !== -1 && a === ye || yt.indexOf(a) !== -1 && u === ye || a === Wi && [zs, ko, Mo].indexOf(u) !== -1 || [zs, ko, Mo].indexOf(a) !== -1 && u === Xi || yt.indexOf(a) !== -1 && Dp.indexOf(u) !== -1 || Dp.indexOf(a) !== -1 && yt.indexOf(u) !== -1 || [Wi, Xi].indexOf(a) !== -1 && (u === ye || [Di, zi].indexOf(u) !== -1 && A[o + 1] === ye) || [Di, zi].indexOf(a) !== -1 && u === ye || a === ye && [ye, yn, wn].indexOf(u) !== -1)
        return W;
    if ([ye, yn, wn, Do, bi].indexOf(u) !== -1)
        for (var c = i; c >= 0; ) {
            var f = A[c];
            if (f === ye)
                return W;
            if ([yn, wn].indexOf(f) !== -1)
                c--;
            else
                break
        }
    if ([Wi, Xi].indexOf(u) !== -1)
        for (var c = [Do, bi].indexOf(a) !== -1 ? s : i; c >= 0; ) {
            var f = A[c];
            if (f === ye)
                return W;
            if ([yn, wn].indexOf(f) !== -1)
                c--;
            else
                break
        }
    if (zf === a && [zf, pa, Vf, Gf].indexOf(u) !== -1 || [pa, Vf].indexOf(a) !== -1 && [pa, ma].indexOf(u) !== -1 || [ma, Gf].indexOf(a) !== -1 && u === ma || kp.indexOf(a) !== -1 && [bp, Xi].indexOf(u) !== -1 || kp.indexOf(u) !== -1 && a === Wi || yt.indexOf(a) !== -1 && yt.indexOf(u) !== -1 || a === wn && yt.indexOf(u) !== -1 || yt.concat(ye).indexOf(a) !== -1 && u === Di && eS.indexOf(e[o]) === -1 || yt.concat(ye).indexOf(u) !== -1 && a === bi)
        return W;
    if (a === Zu && u === Zu) {
        for (var d = t[i], B = 1; d > 0 && (d--,
        A[d] === Zu); )
            B++;
        if (B % 2 !== 0)
            return W
    }
    return a === ko && u === Mo ? W : Ko
}
  , sS = function(e, A) {
    A || (A = {
        lineBreak: "normal",
        wordBreak: "normal"
    });
    var t = nS(e, A.lineBreak)
      , r = t[0]
      , n = t[1]
      , i = t[2];
    (A.wordBreak === "break-all" || A.wordBreak === "break-word") && (n = n.map(function(o) {
        return [ye, Vr, dv].indexOf(o) !== -1 ? zs : o
    }));
    var s = A.wordBreak === "keep-all" ? i.map(function(o, a) {
        return o && e[a] >= 19968 && e[a] <= 40959
    }) : void 0;
    return [r, n, s]
}
  , oS = function() {
    function e(A, t, r, n) {
        this.codePoints = A,
        this.required = t === hv,
        this.start = r,
        this.end = n
    }
    return e.prototype.slice = function() {
        return CA.apply(void 0, this.codePoints.slice(this.start, this.end))
    }
    ,
    e
}()
  , aS = function(e, A) {
    var t = jl(e)
      , r = sS(t, A)
      , n = r[0]
      , i = r[1]
      , s = r[2]
      , o = t.length
      , a = 0
      , l = 0;
    return {
        next: function() {
            if (l >= o)
                return {
                    done: !0,
                    value: null
                };
            for (var u = W; l < o && (u = iS(t, i, n, ++l, s)) === W; )
                ;
            if (u !== W || l === o) {
                var c = new oS(t,u,a,l);
                return a = l,
                {
                    value: c,
                    done: !1
                }
            }
            return {
                done: !0,
                value: null
            }
        }
    }
}
  , lS = 1
  , uS = 2
  , io = 4
  , Kp = 8
  , ol = 10
  , Pp = 47
  , hs = 92
  , cS = 9
  , fS = 32
  , Po = 34
  , ki = 61
  , dS = 35
  , hS = 36
  , gS = 37
  , Oo = 39
  , No = 40
  , Mi = 41
  , BS = 95
  , oe = 45
  , pS = 33
  , mS = 60
  , wS = 62
  , yS = 64
  , CS = 91
  , vS = 93
  , QS = 61
  , FS = 123
  , Ro = 63
  , US = 125
  , Op = 124
  , xS = 126
  , ES = 128
  , Np = 65533
  , Ac = 42
  , Yr = 43
  , IS = 44
  , HS = 58
  , _S = 59
  , Xs = 46
  , SS = 0
  , TS = 8
  , LS = 11
  , bS = 14
  , DS = 31
  , kS = 127
  , at = -1
  , Bv = 48
  , pv = 97
  , mv = 101
  , MS = 102
  , KS = 117
  , PS = 122
  , wv = 65
  , yv = 69
  , Cv = 70
  , OS = 85
  , NS = 90
  , YA = function(e) {
    return e >= Bv && e <= 57
}
  , RS = function(e) {
    return e >= 55296 && e <= 57343
}
  , Cn = function(e) {
    return YA(e) || e >= wv && e <= Cv || e >= pv && e <= MS
}
  , VS = function(e) {
    return e >= pv && e <= PS
}
  , GS = function(e) {
    return e >= wv && e <= NS
}
  , jS = function(e) {
    return VS(e) || GS(e)
}
  , zS = function(e) {
    return e >= ES
}
  , Vo = function(e) {
    return e === ol || e === cS || e === fS
}
  , al = function(e) {
    return jS(e) || zS(e) || e === BS
}
  , Rp = function(e) {
    return al(e) || YA(e) || e === oe
}
  , XS = function(e) {
    return e >= SS && e <= TS || e === LS || e >= bS && e <= DS || e === kS
}
  , Jt = function(e, A) {
    return e !== hs ? !1 : A !== ol
}
  , Go = function(e, A, t) {
    return e === oe ? al(A) || Jt(A, t) : al(e) ? !0 : !!(e === hs && Jt(e, A))
}
  , ec = function(e, A, t) {
    return e === Yr || e === oe ? YA(A) ? !0 : A === Xs && YA(t) : YA(e === Xs ? A : e)
}
  , WS = function(e) {
    var A = 0
      , t = 1;
    (e[A] === Yr || e[A] === oe) && (e[A] === oe && (t = -1),
    A++);
    for (var r = []; YA(e[A]); )
        r.push(e[A++]);
    var n = r.length ? parseInt(CA.apply(void 0, r), 10) : 0;
    e[A] === Xs && A++;
    for (var i = []; YA(e[A]); )
        i.push(e[A++]);
    var s = i.length
      , o = s ? parseInt(CA.apply(void 0, i), 10) : 0;
    (e[A] === yv || e[A] === mv) && A++;
    var a = 1;
    (e[A] === Yr || e[A] === oe) && (e[A] === oe && (a = -1),
    A++);
    for (var l = []; YA(e[A]); )
        l.push(e[A++]);
    var u = l.length ? parseInt(CA.apply(void 0, l), 10) : 0;
    return t * (n + o * Math.pow(10, -s)) * Math.pow(10, a * u)
}
  , YS = {
    type: 2
}
  , JS = {
    type: 3
}
  , $S = {
    type: 4
}
  , ZS = {
    type: 13
}
  , qS = {
    type: 8
}
  , A4 = {
    type: 21
}
  , e4 = {
    type: 9
}
  , t4 = {
    type: 10
}
  , r4 = {
    type: 11
}
  , n4 = {
    type: 12
}
  , i4 = {
    type: 14
}
  , jo = {
    type: 23
}
  , s4 = {
    type: 1
}
  , o4 = {
    type: 25
}
  , a4 = {
    type: 24
}
  , l4 = {
    type: 26
}
  , u4 = {
    type: 27
}
  , c4 = {
    type: 28
}
  , f4 = {
    type: 29
}
  , d4 = {
    type: 31
}
  , Yf = {
    type: 32
}
  , vv = function() {
    function e() {
        this._value = []
    }
    return e.prototype.write = function(A) {
        this._value = this._value.concat(jl(A))
    }
    ,
    e.prototype.read = function() {
        for (var A = [], t = this.consumeToken(); t !== Yf; )
            A.push(t),
            t = this.consumeToken();
        return A
    }
    ,
    e.prototype.consumeToken = function() {
        var A = this.consumeCodePoint();
        switch (A) {
        case Po:
            return this.consumeStringToken(Po);
        case dS:
            var t = this.peekCodePoint(0)
              , r = this.peekCodePoint(1)
              , n = this.peekCodePoint(2);
            if (Rp(t) || Jt(r, n)) {
                var i = Go(t, r, n) ? uS : lS
                  , s = this.consumeName();
                return {
                    type: 5,
                    value: s,
                    flags: i
                }
            }
            break;
        case hS:
            if (this.peekCodePoint(0) === ki)
                return this.consumeCodePoint(),
                ZS;
            break;
        case Oo:
            return this.consumeStringToken(Oo);
        case No:
            return YS;
        case Mi:
            return JS;
        case Ac:
            if (this.peekCodePoint(0) === ki)
                return this.consumeCodePoint(),
                i4;
            break;
        case Yr:
            if (ec(A, this.peekCodePoint(0), this.peekCodePoint(1)))
                return this.reconsumeCodePoint(A),
                this.consumeNumericToken();
            break;
        case IS:
            return $S;
        case oe:
            var o = A
              , a = this.peekCodePoint(0)
              , l = this.peekCodePoint(1);
            if (ec(o, a, l))
                return this.reconsumeCodePoint(A),
                this.consumeNumericToken();
            if (Go(o, a, l))
                return this.reconsumeCodePoint(A),
                this.consumeIdentLikeToken();
            if (a === oe && l === wS)
                return this.consumeCodePoint(),
                this.consumeCodePoint(),
                a4;
            break;
        case Xs:
            if (ec(A, this.peekCodePoint(0), this.peekCodePoint(1)))
                return this.reconsumeCodePoint(A),
                this.consumeNumericToken();
            break;
        case Pp:
            if (this.peekCodePoint(0) === Ac)
                for (this.consumeCodePoint(); ; ) {
                    var u = this.consumeCodePoint();
                    if (u === Ac && (u = this.consumeCodePoint(),
                    u === Pp))
                        return this.consumeToken();
                    if (u === at)
                        return this.consumeToken()
                }
            break;
        case HS:
            return l4;
        case _S:
            return u4;
        case mS:
            if (this.peekCodePoint(0) === pS && this.peekCodePoint(1) === oe && this.peekCodePoint(2) === oe)
                return this.consumeCodePoint(),
                this.consumeCodePoint(),
                o4;
            break;
        case yS:
            var c = this.peekCodePoint(0)
              , f = this.peekCodePoint(1)
              , d = this.peekCodePoint(2);
            if (Go(c, f, d)) {
                var s = this.consumeName();
                return {
                    type: 7,
                    value: s
                }
            }
            break;
        case CS:
            return c4;
        case hs:
            if (Jt(A, this.peekCodePoint(0)))
                return this.reconsumeCodePoint(A),
                this.consumeIdentLikeToken();
            break;
        case vS:
            return f4;
        case QS:
            if (this.peekCodePoint(0) === ki)
                return this.consumeCodePoint(),
                qS;
            break;
        case FS:
            return r4;
        case US:
            return n4;
        case KS:
        case OS:
            var B = this.peekCodePoint(0)
              , h = this.peekCodePoint(1);
            return B === Yr && (Cn(h) || h === Ro) && (this.consumeCodePoint(),
            this.consumeUnicodeRangeToken()),
            this.reconsumeCodePoint(A),
            this.consumeIdentLikeToken();
        case Op:
            if (this.peekCodePoint(0) === ki)
                return this.consumeCodePoint(),
                e4;
            if (this.peekCodePoint(0) === Op)
                return this.consumeCodePoint(),
                A4;
            break;
        case xS:
            if (this.peekCodePoint(0) === ki)
                return this.consumeCodePoint(),
                t4;
            break;
        case at:
            return Yf
        }
        return Vo(A) ? (this.consumeWhiteSpace(),
        d4) : YA(A) ? (this.reconsumeCodePoint(A),
        this.consumeNumericToken()) : al(A) ? (this.reconsumeCodePoint(A),
        this.consumeIdentLikeToken()) : {
            type: 6,
            value: CA(A)
        }
    }
    ,
    e.prototype.consumeCodePoint = function() {
        var A = this._value.shift();
        return typeof A > "u" ? -1 : A
    }
    ,
    e.prototype.reconsumeCodePoint = function(A) {
        this._value.unshift(A)
    }
    ,
    e.prototype.peekCodePoint = function(A) {
        return A >= this._value.length ? -1 : this._value[A]
    }
    ,
    e.prototype.consumeUnicodeRangeToken = function() {
        for (var A = [], t = this.consumeCodePoint(); Cn(t) && A.length < 6; )
            A.push(t),
            t = this.consumeCodePoint();
        for (var r = !1; t === Ro && A.length < 6; )
            A.push(t),
            t = this.consumeCodePoint(),
            r = !0;
        if (r) {
            var n = parseInt(CA.apply(void 0, A.map(function(a) {
                return a === Ro ? Bv : a
            })), 16)
              , i = parseInt(CA.apply(void 0, A.map(function(a) {
                return a === Ro ? Cv : a
            })), 16);
            return {
                type: 30,
                start: n,
                end: i
            }
        }
        var s = parseInt(CA.apply(void 0, A), 16);
        if (this.peekCodePoint(0) === oe && Cn(this.peekCodePoint(1))) {
            this.consumeCodePoint(),
            t = this.consumeCodePoint();
            for (var o = []; Cn(t) && o.length < 6; )
                o.push(t),
                t = this.consumeCodePoint();
            var i = parseInt(CA.apply(void 0, o), 16);
            return {
                type: 30,
                start: s,
                end: i
            }
        } else
            return {
                type: 30,
                start: s,
                end: s
            }
    }
    ,
    e.prototype.consumeIdentLikeToken = function() {
        var A = this.consumeName();
        return A.toLowerCase() === "url" && this.peekCodePoint(0) === No ? (this.consumeCodePoint(),
        this.consumeUrlToken()) : this.peekCodePoint(0) === No ? (this.consumeCodePoint(),
        {
            type: 19,
            value: A
        }) : {
            type: 20,
            value: A
        }
    }
    ,
    e.prototype.consumeUrlToken = function() {
        var A = [];
        if (this.consumeWhiteSpace(),
        this.peekCodePoint(0) === at)
            return {
                type: 22,
                value: ""
            };
        var t = this.peekCodePoint(0);
        if (t === Oo || t === Po) {
            var r = this.consumeStringToken(this.consumeCodePoint());
            return r.type === 0 && (this.consumeWhiteSpace(),
            this.peekCodePoint(0) === at || this.peekCodePoint(0) === Mi) ? (this.consumeCodePoint(),
            {
                type: 22,
                value: r.value
            }) : (this.consumeBadUrlRemnants(),
            jo)
        }
        for (; ; ) {
            var n = this.consumeCodePoint();
            if (n === at || n === Mi)
                return {
                    type: 22,
                    value: CA.apply(void 0, A)
                };
            if (Vo(n))
                return this.consumeWhiteSpace(),
                this.peekCodePoint(0) === at || this.peekCodePoint(0) === Mi ? (this.consumeCodePoint(),
                {
                    type: 22,
                    value: CA.apply(void 0, A)
                }) : (this.consumeBadUrlRemnants(),
                jo);
            if (n === Po || n === Oo || n === No || XS(n))
                return this.consumeBadUrlRemnants(),
                jo;
            if (n === hs)
                if (Jt(n, this.peekCodePoint(0)))
                    A.push(this.consumeEscapedCodePoint());
                else
                    return this.consumeBadUrlRemnants(),
                    jo;
            else
                A.push(n)
        }
    }
    ,
    e.prototype.consumeWhiteSpace = function() {
        for (; Vo(this.peekCodePoint(0)); )
            this.consumeCodePoint()
    }
    ,
    e.prototype.consumeBadUrlRemnants = function() {
        for (; ; ) {
            var A = this.consumeCodePoint();
            if (A === Mi || A === at)
                return;
            Jt(A, this.peekCodePoint(0)) && this.consumeEscapedCodePoint()
        }
    }
    ,
    e.prototype.consumeStringSlice = function(A) {
        for (var t = 5e4, r = ""; A > 0; ) {
            var n = Math.min(t, A);
            r += CA.apply(void 0, this._value.splice(0, n)),
            A -= n
        }
        return this._value.shift(),
        r
    }
    ,
    e.prototype.consumeStringToken = function(A) {
        var t = ""
          , r = 0;
        do {
            var n = this._value[r];
            if (n === at || n === void 0 || n === A)
                return t += this.consumeStringSlice(r),
                {
                    type: 0,
                    value: t
                };
            if (n === ol)
                return this._value.splice(0, r),
                s4;
            if (n === hs) {
                var i = this._value[r + 1];
                i !== at && i !== void 0 && (i === ol ? (t += this.consumeStringSlice(r),
                r = -1,
                this._value.shift()) : Jt(n, i) && (t += this.consumeStringSlice(r),
                t += CA(this.consumeEscapedCodePoint()),
                r = -1))
            }
            r++
        } while (!0)
    }
    ,
    e.prototype.consumeNumber = function() {
        var A = []
          , t = io
          , r = this.peekCodePoint(0);
        for ((r === Yr || r === oe) && A.push(this.consumeCodePoint()); YA(this.peekCodePoint(0)); )
            A.push(this.consumeCodePoint());
        r = this.peekCodePoint(0);
        var n = this.peekCodePoint(1);
        if (r === Xs && YA(n))
            for (A.push(this.consumeCodePoint(), this.consumeCodePoint()),
            t = Kp; YA(this.peekCodePoint(0)); )
                A.push(this.consumeCodePoint());
        r = this.peekCodePoint(0),
        n = this.peekCodePoint(1);
        var i = this.peekCodePoint(2);
        if ((r === yv || r === mv) && ((n === Yr || n === oe) && YA(i) || YA(n)))
            for (A.push(this.consumeCodePoint(), this.consumeCodePoint()),
            t = Kp; YA(this.peekCodePoint(0)); )
                A.push(this.consumeCodePoint());
        return [WS(A), t]
    }
    ,
    e.prototype.consumeNumericToken = function() {
        var A = this.consumeNumber()
          , t = A[0]
          , r = A[1]
          , n = this.peekCodePoint(0)
          , i = this.peekCodePoint(1)
          , s = this.peekCodePoint(2);
        if (Go(n, i, s)) {
            var o = this.consumeName();
            return {
                type: 15,
                number: t,
                flags: r,
                unit: o
            }
        }
        return n === gS ? (this.consumeCodePoint(),
        {
            type: 16,
            number: t,
            flags: r
        }) : {
            type: 17,
            number: t,
            flags: r
        }
    }
    ,
    e.prototype.consumeEscapedCodePoint = function() {
        var A = this.consumeCodePoint();
        if (Cn(A)) {
            for (var t = CA(A); Cn(this.peekCodePoint(0)) && t.length < 6; )
                t += CA(this.consumeCodePoint());
            Vo(this.peekCodePoint(0)) && this.consumeCodePoint();
            var r = parseInt(t, 16);
            return r === 0 || RS(r) || r > 1114111 ? Np : r
        }
        return A === at ? Np : A
    }
    ,
    e.prototype.consumeName = function() {
        for (var A = ""; ; ) {
            var t = this.consumeCodePoint();
            if (Rp(t))
                A += CA(t);
            else if (Jt(t, this.peekCodePoint(0)))
                A += CA(this.consumeEscapedCodePoint());
            else
                return this.reconsumeCodePoint(t),
                A
        }
    }
    ,
    e
}()
  , Qv = function() {
    function e(A) {
        this._tokens = A
    }
    return e.create = function(A) {
        var t = new vv;
        return t.write(A),
        new e(t.read())
    }
    ,
    e.parseValue = function(A) {
        return e.create(A).parseComponentValue()
    }
    ,
    e.parseValues = function(A) {
        return e.create(A).parseComponentValues()
    }
    ,
    e.prototype.parseComponentValue = function() {
        for (var A = this.consumeToken(); A.type === 31; )
            A = this.consumeToken();
        if (A.type === 32)
            throw new SyntaxError("Error parsing CSS component value, unexpected EOF");
        this.reconsumeToken(A);
        var t = this.consumeComponentValue();
        do
            A = this.consumeToken();
        while (A.type === 31);
        if (A.type === 32)
            return t;
        throw new SyntaxError("Error parsing CSS component value, multiple values found when expecting only one")
    }
    ,
    e.prototype.parseComponentValues = function() {
        for (var A = []; ; ) {
            var t = this.consumeComponentValue();
            if (t.type === 32)
                return A;
            A.push(t),
            A.push()
        }
    }
    ,
    e.prototype.consumeComponentValue = function() {
        var A = this.consumeToken();
        switch (A.type) {
        case 11:
        case 28:
        case 2:
            return this.consumeSimpleBlock(A.type);
        case 19:
            return this.consumeFunction(A)
        }
        return A
    }
    ,
    e.prototype.consumeSimpleBlock = function(A) {
        for (var t = {
            type: A,
            values: []
        }, r = this.consumeToken(); ; ) {
            if (r.type === 32 || g4(r, A))
                return t;
            this.reconsumeToken(r),
            t.values.push(this.consumeComponentValue()),
            r = this.consumeToken()
        }
    }
    ,
    e.prototype.consumeFunction = function(A) {
        for (var t = {
            name: A.value,
            values: [],
            type: 18
        }; ; ) {
            var r = this.consumeToken();
            if (r.type === 32 || r.type === 3)
                return t;
            this.reconsumeToken(r),
            t.values.push(this.consumeComponentValue())
        }
    }
    ,
    e.prototype.consumeToken = function() {
        var A = this._tokens.shift();
        return typeof A > "u" ? Yf : A
    }
    ,
    e.prototype.reconsumeToken = function(A) {
        this._tokens.unshift(A)
    }
    ,
    e
}()
  , so = function(e) {
    return e.type === 15
}
  , vi = function(e) {
    return e.type === 17
}
  , AA = function(e) {
    return e.type === 20
}
  , h4 = function(e) {
    return e.type === 0
}
  , Jf = function(e, A) {
    return AA(e) && e.value === A
}
  , Fv = function(e) {
    return e.type !== 31
}
  , mi = function(e) {
    return e.type !== 31 && e.type !== 4
}
  , mt = function(e) {
    var A = []
      , t = [];
    return e.forEach(function(r) {
        if (r.type === 4) {
            if (t.length === 0)
                throw new Error("Error parsing function args, zero tokens for arg");
            A.push(t),
            t = [];
            return
        }
        r.type !== 31 && t.push(r)
    }),
    t.length && A.push(t),
    A
}
  , g4 = function(e, A) {
    return A === 11 && e.type === 12 || A === 28 && e.type === 29 ? !0 : A === 2 && e.type === 3
}
  , xr = function(e) {
    return e.type === 17 || e.type === 15
}
  , _A = function(e) {
    return e.type === 16 || xr(e)
}
  , Uv = function(e) {
    return e.length > 1 ? [e[0], e[1]] : [e[0]]
}
  , NA = {
    type: 17,
    number: 0,
    flags: io
}
  , Nh = {
    type: 16,
    number: 50,
    flags: io
}
  , ir = {
    type: 16,
    number: 100,
    flags: io
}
  , Yi = function(e, A, t) {
    var r = e[0]
      , n = e[1];
    return [rA(r, A), rA(typeof n < "u" ? n : r, t)]
}
  , rA = function(e, A) {
    if (e.type === 16)
        return e.number / 100 * A;
    if (so(e))
        switch (e.unit) {
        case "rem":
        case "em":
            return 16 * e.number;
        case "px":
        default:
            return e.number
        }
    return e.number
}
  , xv = "deg"
  , Ev = "grad"
  , Iv = "rad"
  , Hv = "turn"
  , zl = {
    name: "angle",
    parse: function(e, A) {
        if (A.type === 15)
            switch (A.unit) {
            case xv:
                return Math.PI * A.number / 180;
            case Ev:
                return Math.PI / 200 * A.number;
            case Iv:
                return A.number;
            case Hv:
                return Math.PI * 2 * A.number
            }
        throw new Error("Unsupported angle type")
    }
}
  , _v = function(e) {
    return e.type === 15 && (e.unit === xv || e.unit === Ev || e.unit === Iv || e.unit === Hv)
}
  , Sv = function(e) {
    var A = e.filter(AA).map(function(t) {
        return t.value
    }).join(" ");
    switch (A) {
    case "to bottom right":
    case "to right bottom":
    case "left top":
    case "top left":
        return [NA, NA];
    case "to top":
    case "bottom":
        return ze(0);
    case "to bottom left":
    case "to left bottom":
    case "right top":
    case "top right":
        return [NA, ir];
    case "to right":
    case "left":
        return ze(90);
    case "to top left":
    case "to left top":
    case "right bottom":
    case "bottom right":
        return [ir, ir];
    case "to bottom":
    case "top":
        return ze(180);
    case "to top right":
    case "to right top":
    case "left bottom":
    case "bottom left":
        return [ir, NA];
    case "to left":
    case "right":
        return ze(270)
    }
    return 0
}
  , ze = function(e) {
    return Math.PI * e / 180
}
  , mr = {
    name: "color",
    parse: function(e, A) {
        if (A.type === 18) {
            var t = B4[A.name];
            if (typeof t > "u")
                throw new Error('Attempting to parse an unsupported color function "' + A.name + '"');
            return t(e, A.values)
        }
        if (A.type === 5) {
            if (A.value.length === 3) {
                var r = A.value.substring(0, 1)
                  , n = A.value.substring(1, 2)
                  , i = A.value.substring(2, 3);
                return sr(parseInt(r + r, 16), parseInt(n + n, 16), parseInt(i + i, 16), 1)
            }
            if (A.value.length === 4) {
                var r = A.value.substring(0, 1)
                  , n = A.value.substring(1, 2)
                  , i = A.value.substring(2, 3)
                  , s = A.value.substring(3, 4);
                return sr(parseInt(r + r, 16), parseInt(n + n, 16), parseInt(i + i, 16), parseInt(s + s, 16) / 255)
            }
            if (A.value.length === 6) {
                var r = A.value.substring(0, 2)
                  , n = A.value.substring(2, 4)
                  , i = A.value.substring(4, 6);
                return sr(parseInt(r, 16), parseInt(n, 16), parseInt(i, 16), 1)
            }
            if (A.value.length === 8) {
                var r = A.value.substring(0, 2)
                  , n = A.value.substring(2, 4)
                  , i = A.value.substring(4, 6)
                  , s = A.value.substring(6, 8);
                return sr(parseInt(r, 16), parseInt(n, 16), parseInt(i, 16), parseInt(s, 16) / 255)
            }
        }
        if (A.type === 20) {
            var o = Lt[A.value.toUpperCase()];
            if (typeof o < "u")
                return o
        }
        return Lt.TRANSPARENT
    }
}
  , wr = function(e) {
    return (255 & e) === 0
}
  , DA = function(e) {
    var A = 255 & e
      , t = 255 & e >> 8
      , r = 255 & e >> 16
      , n = 255 & e >> 24;
    return A < 255 ? "rgba(" + n + "," + r + "," + t + "," + A / 255 + ")" : "rgb(" + n + "," + r + "," + t + ")"
}
  , sr = function(e, A, t, r) {
    return (e << 24 | A << 16 | t << 8 | Math.round(r * 255) << 0) >>> 0
}
  , Vp = function(e, A) {
    if (e.type === 17)
        return e.number;
    if (e.type === 16) {
        var t = A === 3 ? 1 : 255;
        return A === 3 ? e.number / 100 * t : Math.round(e.number / 100 * t)
    }
    return 0
}
  , Gp = function(e, A) {
    var t = A.filter(mi);
    if (t.length === 3) {
        var r = t.map(Vp)
          , n = r[0]
          , i = r[1]
          , s = r[2];
        return sr(n, i, s, 1)
    }
    if (t.length === 4) {
        var o = t.map(Vp)
          , n = o[0]
          , i = o[1]
          , s = o[2]
          , a = o[3];
        return sr(n, i, s, a)
    }
    return 0
};
function tc(e, A, t) {
    return t < 0 && (t += 1),
    t >= 1 && (t -= 1),
    t < 1 / 6 ? (A - e) * t * 6 + e : t < 1 / 2 ? A : t < 2 / 3 ? (A - e) * 6 * (2 / 3 - t) + e : e
}
var jp = function(e, A) {
    var t = A.filter(mi)
      , r = t[0]
      , n = t[1]
      , i = t[2]
      , s = t[3]
      , o = (r.type === 17 ? ze(r.number) : zl.parse(e, r)) / (Math.PI * 2)
      , a = _A(n) ? n.number / 100 : 0
      , l = _A(i) ? i.number / 100 : 0
      , u = typeof s < "u" && _A(s) ? rA(s, 1) : 1;
    if (a === 0)
        return sr(l * 255, l * 255, l * 255, 1);
    var c = l <= .5 ? l * (a + 1) : l + a - l * a
      , f = l * 2 - c
      , d = tc(f, c, o + 1 / 3)
      , B = tc(f, c, o)
      , h = tc(f, c, o - 1 / 3);
    return sr(d * 255, B * 255, h * 255, u)
}
  , B4 = {
    hsl: jp,
    hsla: jp,
    rgb: Gp,
    rgba: Gp
}
  , gs = function(e, A) {
    return mr.parse(e, Qv.create(A).parseComponentValue())
}
  , Lt = {
    ALICEBLUE: 4042850303,
    ANTIQUEWHITE: 4209760255,
    AQUA: 16777215,
    AQUAMARINE: 2147472639,
    AZURE: 4043309055,
    BEIGE: 4126530815,
    BISQUE: 4293182719,
    BLACK: 255,
    BLANCHEDALMOND: 4293643775,
    BLUE: 65535,
    BLUEVIOLET: 2318131967,
    BROWN: 2771004159,
    BURLYWOOD: 3736635391,
    CADETBLUE: 1604231423,
    CHARTREUSE: 2147418367,
    CHOCOLATE: 3530104575,
    CORAL: 4286533887,
    CORNFLOWERBLUE: 1687547391,
    CORNSILK: 4294499583,
    CRIMSON: 3692313855,
    CYAN: 16777215,
    DARKBLUE: 35839,
    DARKCYAN: 9145343,
    DARKGOLDENROD: 3095837695,
    DARKGRAY: 2846468607,
    DARKGREEN: 6553855,
    DARKGREY: 2846468607,
    DARKKHAKI: 3182914559,
    DARKMAGENTA: 2332068863,
    DARKOLIVEGREEN: 1433087999,
    DARKORANGE: 4287365375,
    DARKORCHID: 2570243327,
    DARKRED: 2332033279,
    DARKSALMON: 3918953215,
    DARKSEAGREEN: 2411499519,
    DARKSLATEBLUE: 1211993087,
    DARKSLATEGRAY: 793726975,
    DARKSLATEGREY: 793726975,
    DARKTURQUOISE: 13554175,
    DARKVIOLET: 2483082239,
    DEEPPINK: 4279538687,
    DEEPSKYBLUE: 12582911,
    DIMGRAY: 1768516095,
    DIMGREY: 1768516095,
    DODGERBLUE: 512819199,
    FIREBRICK: 2988581631,
    FLORALWHITE: 4294635775,
    FORESTGREEN: 579543807,
    FUCHSIA: 4278255615,
    GAINSBORO: 3705462015,
    GHOSTWHITE: 4177068031,
    GOLD: 4292280575,
    GOLDENROD: 3668254975,
    GRAY: 2155905279,
    GREEN: 8388863,
    GREENYELLOW: 2919182335,
    GREY: 2155905279,
    HONEYDEW: 4043305215,
    HOTPINK: 4285117695,
    INDIANRED: 3445382399,
    INDIGO: 1258324735,
    IVORY: 4294963455,
    KHAKI: 4041641215,
    LAVENDER: 3873897215,
    LAVENDERBLUSH: 4293981695,
    LAWNGREEN: 2096890111,
    LEMONCHIFFON: 4294626815,
    LIGHTBLUE: 2916673279,
    LIGHTCORAL: 4034953471,
    LIGHTCYAN: 3774873599,
    LIGHTGOLDENRODYELLOW: 4210742015,
    LIGHTGRAY: 3553874943,
    LIGHTGREEN: 2431553791,
    LIGHTGREY: 3553874943,
    LIGHTPINK: 4290167295,
    LIGHTSALMON: 4288707327,
    LIGHTSEAGREEN: 548580095,
    LIGHTSKYBLUE: 2278488831,
    LIGHTSLATEGRAY: 2005441023,
    LIGHTSLATEGREY: 2005441023,
    LIGHTSTEELBLUE: 2965692159,
    LIGHTYELLOW: 4294959359,
    LIME: 16711935,
    LIMEGREEN: 852308735,
    LINEN: 4210091775,
    MAGENTA: 4278255615,
    MAROON: 2147483903,
    MEDIUMAQUAMARINE: 1724754687,
    MEDIUMBLUE: 52735,
    MEDIUMORCHID: 3126187007,
    MEDIUMPURPLE: 2473647103,
    MEDIUMSEAGREEN: 1018393087,
    MEDIUMSLATEBLUE: 2070474495,
    MEDIUMSPRINGGREEN: 16423679,
    MEDIUMTURQUOISE: 1221709055,
    MEDIUMVIOLETRED: 3340076543,
    MIDNIGHTBLUE: 421097727,
    MINTCREAM: 4127193855,
    MISTYROSE: 4293190143,
    MOCCASIN: 4293178879,
    NAVAJOWHITE: 4292783615,
    NAVY: 33023,
    OLDLACE: 4260751103,
    OLIVE: 2155872511,
    OLIVEDRAB: 1804477439,
    ORANGE: 4289003775,
    ORANGERED: 4282712319,
    ORCHID: 3664828159,
    PALEGOLDENROD: 4008225535,
    PALEGREEN: 2566625535,
    PALETURQUOISE: 2951671551,
    PALEVIOLETRED: 3681588223,
    PAPAYAWHIP: 4293907967,
    PEACHPUFF: 4292524543,
    PERU: 3448061951,
    PINK: 4290825215,
    PLUM: 3718307327,
    POWDERBLUE: 2967529215,
    PURPLE: 2147516671,
    REBECCAPURPLE: 1714657791,
    RED: 4278190335,
    ROSYBROWN: 3163525119,
    ROYALBLUE: 1097458175,
    SADDLEBROWN: 2336560127,
    SALMON: 4202722047,
    SANDYBROWN: 4104413439,
    SEAGREEN: 780883967,
    SEASHELL: 4294307583,
    SIENNA: 2689740287,
    SILVER: 3233857791,
    SKYBLUE: 2278484991,
    SLATEBLUE: 1784335871,
    SLATEGRAY: 1887473919,
    SLATEGREY: 1887473919,
    SNOW: 4294638335,
    SPRINGGREEN: 16744447,
    STEELBLUE: 1182971135,
    TAN: 3535047935,
    TEAL: 8421631,
    THISTLE: 3636451583,
    TOMATO: 4284696575,
    TRANSPARENT: 0,
    TURQUOISE: 1088475391,
    VIOLET: 4001558271,
    WHEAT: 4125012991,
    WHITE: 4294967295,
    WHITESMOKE: 4126537215,
    YELLOW: 4294902015,
    YELLOWGREEN: 2597139199
}
  , p4 = {
    name: "background-clip",
    initialValue: "border-box",
    prefix: !1,
    type: 1,
    parse: function(e, A) {
        return A.map(function(t) {
            if (AA(t))
                switch (t.value) {
                case "padding-box":
                    return 1;
                case "content-box":
                    return 2
                }
            return 0
        })
    }
}
  , m4 = {
    name: "background-color",
    initialValue: "transparent",
    prefix: !1,
    type: 3,
    format: "color"
}
  , Xl = function(e, A) {
    var t = mr.parse(e, A[0])
      , r = A[1];
    return r && _A(r) ? {
        color: t,
        stop: r
    } : {
        color: t,
        stop: null
    }
}
  , zp = function(e, A) {
    var t = e[0]
      , r = e[e.length - 1];
    t.stop === null && (t.stop = NA),
    r.stop === null && (r.stop = ir);
    for (var n = [], i = 0, s = 0; s < e.length; s++) {
        var o = e[s].stop;
        if (o !== null) {
            var a = rA(o, A);
            a > i ? n.push(a) : n.push(i),
            i = a
        } else
            n.push(null)
    }
    for (var l = null, s = 0; s < n.length; s++) {
        var u = n[s];
        if (u === null)
            l === null && (l = s);
        else if (l !== null) {
            for (var c = s - l, f = n[l - 1], d = (u - f) / (c + 1), B = 1; B <= c; B++)
                n[l + B - 1] = d * B;
            l = null
        }
    }
    return e.map(function(h, y) {
        var p = h.color;
        return {
            color: p,
            stop: Math.max(Math.min(1, n[y] / A), 0)
        }
    })
}
  , w4 = function(e, A, t) {
    var r = A / 2
      , n = t / 2
      , i = rA(e[0], A) - r
      , s = n - rA(e[1], t);
    return (Math.atan2(s, i) + Math.PI * 2) % (Math.PI * 2)
}
  , y4 = function(e, A, t) {
    var r = typeof e == "number" ? e : w4(e, A, t)
      , n = Math.abs(A * Math.sin(r)) + Math.abs(t * Math.cos(r))
      , i = A / 2
      , s = t / 2
      , o = n / 2
      , a = Math.sin(r - Math.PI / 2) * o
      , l = Math.cos(r - Math.PI / 2) * o;
    return [n, i - l, i + l, s - a, s + a]
}
  , Ze = function(e, A) {
    return Math.sqrt(e * e + A * A)
}
  , Xp = function(e, A, t, r, n) {
    var i = [[0, 0], [0, A], [e, 0], [e, A]];
    return i.reduce(function(s, o) {
        var a = o[0]
          , l = o[1]
          , u = Ze(t - a, r - l);
        return (n ? u < s.optimumDistance : u > s.optimumDistance) ? {
            optimumCorner: o,
            optimumDistance: u
        } : s
    }, {
        optimumDistance: n ? 1 / 0 : -1 / 0,
        optimumCorner: null
    }).optimumCorner
}
  , C4 = function(e, A, t, r, n) {
    var i = 0
      , s = 0;
    switch (e.size) {
    case 0:
        e.shape === 0 ? i = s = Math.min(Math.abs(A), Math.abs(A - r), Math.abs(t), Math.abs(t - n)) : e.shape === 1 && (i = Math.min(Math.abs(A), Math.abs(A - r)),
        s = Math.min(Math.abs(t), Math.abs(t - n)));
        break;
    case 2:
        if (e.shape === 0)
            i = s = Math.min(Ze(A, t), Ze(A, t - n), Ze(A - r, t), Ze(A - r, t - n));
        else if (e.shape === 1) {
            var o = Math.min(Math.abs(t), Math.abs(t - n)) / Math.min(Math.abs(A), Math.abs(A - r))
              , a = Xp(r, n, A, t, !0)
              , l = a[0]
              , u = a[1];
            i = Ze(l - A, (u - t) / o),
            s = o * i
        }
        break;
    case 1:
        e.shape === 0 ? i = s = Math.max(Math.abs(A), Math.abs(A - r), Math.abs(t), Math.abs(t - n)) : e.shape === 1 && (i = Math.max(Math.abs(A), Math.abs(A - r)),
        s = Math.max(Math.abs(t), Math.abs(t - n)));
        break;
    case 3:
        if (e.shape === 0)
            i = s = Math.max(Ze(A, t), Ze(A, t - n), Ze(A - r, t), Ze(A - r, t - n));
        else if (e.shape === 1) {
            var o = Math.max(Math.abs(t), Math.abs(t - n)) / Math.max(Math.abs(A), Math.abs(A - r))
              , c = Xp(r, n, A, t, !1)
              , l = c[0]
              , u = c[1];
            i = Ze(l - A, (u - t) / o),
            s = o * i
        }
        break
    }
    return Array.isArray(e.size) && (i = rA(e.size[0], r),
    s = e.size.length === 2 ? rA(e.size[1], n) : i),
    [i, s]
}
  , v4 = function(e, A) {
    var t = ze(180)
      , r = [];
    return mt(A).forEach(function(n, i) {
        if (i === 0) {
            var s = n[0];
            if (s.type === 20 && s.value === "to") {
                t = Sv(n);
                return
            } else if (_v(s)) {
                t = zl.parse(e, s);
                return
            }
        }
        var o = Xl(e, n);
        r.push(o)
    }),
    {
        angle: t,
        stops: r,
        type: 1
    }
}
  , zo = function(e, A) {
    var t = ze(180)
      , r = [];
    return mt(A).forEach(function(n, i) {
        if (i === 0) {
            var s = n[0];
            if (s.type === 20 && ["top", "left", "right", "bottom"].indexOf(s.value) !== -1) {
                t = Sv(n);
                return
            } else if (_v(s)) {
                t = (zl.parse(e, s) + ze(270)) % ze(360);
                return
            }
        }
        var o = Xl(e, n);
        r.push(o)
    }),
    {
        angle: t,
        stops: r,
        type: 1
    }
}
  , Q4 = function(e, A) {
    var t = ze(180)
      , r = []
      , n = 1
      , i = 0
      , s = 3
      , o = [];
    return mt(A).forEach(function(a, l) {
        var u = a[0];
        if (l === 0) {
            if (AA(u) && u.value === "linear") {
                n = 1;
                return
            } else if (AA(u) && u.value === "radial") {
                n = 2;
                return
            }
        }
        if (u.type === 18) {
            if (u.name === "from") {
                var c = mr.parse(e, u.values[0]);
                r.push({
                    stop: NA,
                    color: c
                })
            } else if (u.name === "to") {
                var c = mr.parse(e, u.values[0]);
                r.push({
                    stop: ir,
                    color: c
                })
            } else if (u.name === "color-stop") {
                var f = u.values.filter(mi);
                if (f.length === 2) {
                    var c = mr.parse(e, f[1])
                      , d = f[0];
                    vi(d) && r.push({
                        stop: {
                            type: 16,
                            number: d.number * 100,
                            flags: d.flags
                        },
                        color: c
                    })
                }
            }
        }
    }),
    n === 1 ? {
        angle: (t + ze(180)) % ze(360),
        stops: r,
        type: n
    } : {
        size: s,
        shape: i,
        stops: r,
        position: o,
        type: n
    }
}
  , Tv = "closest-side"
  , Lv = "farthest-side"
  , bv = "closest-corner"
  , Dv = "farthest-corner"
  , kv = "circle"
  , Mv = "ellipse"
  , Kv = "cover"
  , Pv = "contain"
  , F4 = function(e, A) {
    var t = 0
      , r = 3
      , n = []
      , i = [];
    return mt(A).forEach(function(s, o) {
        var a = !0;
        if (o === 0) {
            var l = !1;
            a = s.reduce(function(c, f) {
                if (l)
                    if (AA(f))
                        switch (f.value) {
                        case "center":
                            return i.push(Nh),
                            c;
                        case "top":
                        case "left":
                            return i.push(NA),
                            c;
                        case "right":
                        case "bottom":
                            return i.push(ir),
                            c
                        }
                    else
                        (_A(f) || xr(f)) && i.push(f);
                else if (AA(f))
                    switch (f.value) {
                    case kv:
                        return t = 0,
                        !1;
                    case Mv:
                        return t = 1,
                        !1;
                    case "at":
                        return l = !0,
                        !1;
                    case Tv:
                        return r = 0,
                        !1;
                    case Kv:
                    case Lv:
                        return r = 1,
                        !1;
                    case Pv:
                    case bv:
                        return r = 2,
                        !1;
                    case Dv:
                        return r = 3,
                        !1
                    }
                else if (xr(f) || _A(f))
                    return Array.isArray(r) || (r = []),
                    r.push(f),
                    !1;
                return c
            }, a)
        }
        if (a) {
            var u = Xl(e, s);
            n.push(u)
        }
    }),
    {
        size: r,
        shape: t,
        stops: n,
        position: i,
        type: 2
    }
}
  , Xo = function(e, A) {
    var t = 0
      , r = 3
      , n = []
      , i = [];
    return mt(A).forEach(function(s, o) {
        var a = !0;
        if (o === 0 ? a = s.reduce(function(u, c) {
            if (AA(c))
                switch (c.value) {
                case "center":
                    return i.push(Nh),
                    !1;
                case "top":
                case "left":
                    return i.push(NA),
                    !1;
                case "right":
                case "bottom":
                    return i.push(ir),
                    !1
                }
            else if (_A(c) || xr(c))
                return i.push(c),
                !1;
            return u
        }, a) : o === 1 && (a = s.reduce(function(u, c) {
            if (AA(c))
                switch (c.value) {
                case kv:
                    return t = 0,
                    !1;
                case Mv:
                    return t = 1,
                    !1;
                case Pv:
                case Tv:
                    return r = 0,
                    !1;
                case Lv:
                    return r = 1,
                    !1;
                case bv:
                    return r = 2,
                    !1;
                case Kv:
                case Dv:
                    return r = 3,
                    !1
                }
            else if (xr(c) || _A(c))
                return Array.isArray(r) || (r = []),
                r.push(c),
                !1;
            return u
        }, a)),
        a) {
            var l = Xl(e, s);
            n.push(l)
        }
    }),
    {
        size: r,
        shape: t,
        stops: n,
        position: i,
        type: 2
    }
}
  , U4 = function(e) {
    return e.type === 1
}
  , x4 = function(e) {
    return e.type === 2
}
  , Rh = {
    name: "image",
    parse: function(e, A) {
        if (A.type === 22) {
            var t = {
                url: A.value,
                type: 0
            };
            return e.cache.addImage(A.value),
            t
        }
        if (A.type === 18) {
            var r = Ov[A.name];
            if (typeof r > "u")
                throw new Error('Attempting to parse an unsupported image function "' + A.name + '"');
            return r(e, A.values)
        }
        throw new Error("Unsupported image type " + A.type)
    }
};
function E4(e) {
    return !(e.type === 20 && e.value === "none") && (e.type !== 18 || !!Ov[e.name])
}
var Ov = {
    "linear-gradient": v4,
    "-moz-linear-gradient": zo,
    "-ms-linear-gradient": zo,
    "-o-linear-gradient": zo,
    "-webkit-linear-gradient": zo,
    "radial-gradient": F4,
    "-moz-radial-gradient": Xo,
    "-ms-radial-gradient": Xo,
    "-o-radial-gradient": Xo,
    "-webkit-radial-gradient": Xo,
    "-webkit-gradient": Q4
}, I4 = {
    name: "background-image",
    initialValue: "none",
    type: 1,
    prefix: !1,
    parse: function(e, A) {
        if (A.length === 0)
            return [];
        var t = A[0];
        return t.type === 20 && t.value === "none" ? [] : A.filter(function(r) {
            return mi(r) && E4(r)
        }).map(function(r) {
            return Rh.parse(e, r)
        })
    }
}, H4 = {
    name: "background-origin",
    initialValue: "border-box",
    prefix: !1,
    type: 1,
    parse: function(e, A) {
        return A.map(function(t) {
            if (AA(t))
                switch (t.value) {
                case "padding-box":
                    return 1;
                case "content-box":
                    return 2
                }
            return 0
        })
    }
}, _4 = {
    name: "background-position",
    initialValue: "0% 0%",
    type: 1,
    prefix: !1,
    parse: function(e, A) {
        return mt(A).map(function(t) {
            return t.filter(_A)
        }).map(Uv)
    }
}, S4 = {
    name: "background-repeat",
    initialValue: "repeat",
    prefix: !1,
    type: 1,
    parse: function(e, A) {
        return mt(A).map(function(t) {
            return t.filter(AA).map(function(r) {
                return r.value
            }).join(" ")
        }).map(T4)
    }
}, T4 = function(e) {
    switch (e) {
    case "no-repeat":
        return 1;
    case "repeat-x":
    case "repeat no-repeat":
        return 2;
    case "repeat-y":
    case "no-repeat repeat":
        return 3;
    case "repeat":
    default:
        return 0
    }
}, ti;
(function(e) {
    e.AUTO = "auto",
    e.CONTAIN = "contain",
    e.COVER = "cover"
}
)(ti || (ti = {}));
var L4 = {
    name: "background-size",
    initialValue: "0",
    prefix: !1,
    type: 1,
    parse: function(e, A) {
        return mt(A).map(function(t) {
            return t.filter(b4)
        })
    }
}, b4 = function(e) {
    return AA(e) || _A(e)
}, Wl = function(e) {
    return {
        name: "border-" + e + "-color",
        initialValue: "transparent",
        prefix: !1,
        type: 3,
        format: "color"
    }
}, D4 = Wl("top"), k4 = Wl("right"), M4 = Wl("bottom"), K4 = Wl("left"), Yl = function(e) {
    return {
        name: "border-radius-" + e,
        initialValue: "0 0",
        prefix: !1,
        type: 1,
        parse: function(A, t) {
            return Uv(t.filter(_A))
        }
    }
}, P4 = Yl("top-left"), O4 = Yl("top-right"), N4 = Yl("bottom-right"), R4 = Yl("bottom-left"), Jl = function(e) {
    return {
        name: "border-" + e + "-style",
        initialValue: "solid",
        prefix: !1,
        type: 2,
        parse: function(A, t) {
            switch (t) {
            case "none":
                return 0;
            case "dashed":
                return 2;
            case "dotted":
                return 3;
            case "double":
                return 4
            }
            return 1
        }
    }
}, V4 = Jl("top"), G4 = Jl("right"), j4 = Jl("bottom"), z4 = Jl("left"), $l = function(e) {
    return {
        name: "border-" + e + "-width",
        initialValue: "0",
        type: 0,
        prefix: !1,
        parse: function(A, t) {
            return so(t) ? t.number : 0
        }
    }
}, X4 = $l("top"), W4 = $l("right"), Y4 = $l("bottom"), J4 = $l("left"), $4 = {
    name: "color",
    initialValue: "transparent",
    prefix: !1,
    type: 3,
    format: "color"
}, Z4 = {
    name: "direction",
    initialValue: "ltr",
    prefix: !1,
    type: 2,
    parse: function(e, A) {
        switch (A) {
        case "rtl":
            return 1;
        case "ltr":
        default:
            return 0
        }
    }
}, q4 = {
    name: "display",
    initialValue: "inline-block",
    prefix: !1,
    type: 1,
    parse: function(e, A) {
        return A.filter(AA).reduce(function(t, r) {
            return t | A2(r.value)
        }, 0)
    }
}, A2 = function(e) {
    switch (e) {
    case "block":
    case "-webkit-box":
        return 2;
    case "inline":
        return 4;
    case "run-in":
        return 8;
    case "flow":
        return 16;
    case "flow-root":
        return 32;
    case "table":
        return 64;
    case "flex":
    case "-webkit-flex":
        return 128;
    case "grid":
    case "-ms-grid":
        return 256;
    case "ruby":
        return 512;
    case "subgrid":
        return 1024;
    case "list-item":
        return 2048;
    case "table-row-group":
        return 4096;
    case "table-header-group":
        return 8192;
    case "table-footer-group":
        return 16384;
    case "table-row":
        return 32768;
    case "table-cell":
        return 65536;
    case "table-column-group":
        return 131072;
    case "table-column":
        return 262144;
    case "table-caption":
        return 524288;
    case "ruby-base":
        return 1048576;
    case "ruby-text":
        return 2097152;
    case "ruby-base-container":
        return 4194304;
    case "ruby-text-container":
        return 8388608;
    case "contents":
        return 16777216;
    case "inline-block":
        return 33554432;
    case "inline-list-item":
        return 67108864;
    case "inline-table":
        return 134217728;
    case "inline-flex":
        return 268435456;
    case "inline-grid":
        return 536870912
    }
    return 0
}, e2 = {
    name: "float",
    initialValue: "none",
    prefix: !1,
    type: 2,
    parse: function(e, A) {
        switch (A) {
        case "left":
            return 1;
        case "right":
            return 2;
        case "inline-start":
            return 3;
        case "inline-end":
            return 4
        }
        return 0
    }
}, t2 = {
    name: "letter-spacing",
    initialValue: "0",
    prefix: !1,
    type: 0,
    parse: function(e, A) {
        return A.type === 20 && A.value === "normal" ? 0 : A.type === 17 || A.type === 15 ? A.number : 0
    }
}, ll;
(function(e) {
    e.NORMAL = "normal",
    e.STRICT = "strict"
}
)(ll || (ll = {}));
var r2 = {
    name: "line-break",
    initialValue: "normal",
    prefix: !1,
    type: 2,
    parse: function(e, A) {
        switch (A) {
        case "strict":
            return ll.STRICT;
        case "normal":
        default:
            return ll.NORMAL
        }
    }
}, n2 = {
    name: "line-height",
    initialValue: "normal",
    prefix: !1,
    type: 4
}, Wp = function(e, A) {
    return AA(e) && e.value === "normal" ? 1.2 * A : e.type === 17 ? A * e.number : _A(e) ? rA(e, A) : A
}, i2 = {
    name: "list-style-image",
    initialValue: "none",
    type: 0,
    prefix: !1,
    parse: function(e, A) {
        return A.type === 20 && A.value === "none" ? null : Rh.parse(e, A)
    }
}, s2 = {
    name: "list-style-position",
    initialValue: "outside",
    prefix: !1,
    type: 2,
    parse: function(e, A) {
        switch (A) {
        case "inside":
            return 0;
        case "outside":
        default:
            return 1
        }
    }
}, $f = {
    name: "list-style-type",
    initialValue: "none",
    prefix: !1,
    type: 2,
    parse: function(e, A) {
        switch (A) {
        case "disc":
            return 0;
        case "circle":
            return 1;
        case "square":
            return 2;
        case "decimal":
            return 3;
        case "cjk-decimal":
            return 4;
        case "decimal-leading-zero":
            return 5;
        case "lower-roman":
            return 6;
        case "upper-roman":
            return 7;
        case "lower-greek":
            return 8;
        case "lower-alpha":
            return 9;
        case "upper-alpha":
            return 10;
        case "arabic-indic":
            return 11;
        case "armenian":
            return 12;
        case "bengali":
            return 13;
        case "cambodian":
            return 14;
        case "cjk-earthly-branch":
            return 15;
        case "cjk-heavenly-stem":
            return 16;
        case "cjk-ideographic":
            return 17;
        case "devanagari":
            return 18;
        case "ethiopic-numeric":
            return 19;
        case "georgian":
            return 20;
        case "gujarati":
            return 21;
        case "gurmukhi":
            return 22;
        case "hebrew":
            return 22;
        case "hiragana":
            return 23;
        case "hiragana-iroha":
            return 24;
        case "japanese-formal":
            return 25;
        case "japanese-informal":
            return 26;
        case "kannada":
            return 27;
        case "katakana":
            return 28;
        case "katakana-iroha":
            return 29;
        case "khmer":
            return 30;
        case "korean-hangul-formal":
            return 31;
        case "korean-hanja-formal":
            return 32;
        case "korean-hanja-informal":
            return 33;
        case "lao":
            return 34;
        case "lower-armenian":
            return 35;
        case "malayalam":
            return 36;
        case "mongolian":
            return 37;
        case "myanmar":
            return 38;
        case "oriya":
            return 39;
        case "persian":
            return 40;
        case "simp-chinese-formal":
            return 41;
        case "simp-chinese-informal":
            return 42;
        case "tamil":
            return 43;
        case "telugu":
            return 44;
        case "thai":
            return 45;
        case "tibetan":
            return 46;
        case "trad-chinese-formal":
            return 47;
        case "trad-chinese-informal":
            return 48;
        case "upper-armenian":
            return 49;
        case "disclosure-open":
            return 50;
        case "disclosure-closed":
            return 51;
        case "none":
        default:
            return -1
        }
    }
}, Zl = function(e) {
    return {
        name: "margin-" + e,
        initialValue: "0",
        prefix: !1,
        type: 4
    }
}, o2 = Zl("top"), a2 = Zl("right"), l2 = Zl("bottom"), u2 = Zl("left"), c2 = {
    name: "overflow",
    initialValue: "visible",
    prefix: !1,
    type: 1,
    parse: function(e, A) {
        return A.filter(AA).map(function(t) {
            switch (t.value) {
            case "hidden":
                return 1;
            case "scroll":
                return 2;
            case "clip":
                return 3;
            case "auto":
                return 4;
            case "visible":
            default:
                return 0
            }
        })
    }
}, f2 = {
    name: "overflow-wrap",
    initialValue: "normal",
    prefix: !1,
    type: 2,
    parse: function(e, A) {
        switch (A) {
        case "break-word":
            return "break-word";
        case "normal":
        default:
            return "normal"
        }
    }
}, ql = function(e) {
    return {
        name: "padding-" + e,
        initialValue: "0",
        prefix: !1,
        type: 3,
        format: "length-percentage"
    }
}, d2 = ql("top"), h2 = ql("right"), g2 = ql("bottom"), B2 = ql("left"), p2 = {
    name: "text-align",
    initialValue: "left",
    prefix: !1,
    type: 2,
    parse: function(e, A) {
        switch (A) {
        case "right":
            return 2;
        case "center":
        case "justify":
            return 1;
        case "left":
        default:
            return 0
        }
    }
}, m2 = {
    name: "position",
    initialValue: "static",
    prefix: !1,
    type: 2,
    parse: function(e, A) {
        switch (A) {
        case "relative":
            return 1;
        case "absolute":
            return 2;
        case "fixed":
            return 3;
        case "sticky":
            return 4
        }
        return 0
    }
}, w2 = {
    name: "text-shadow",
    initialValue: "none",
    type: 1,
    prefix: !1,
    parse: function(e, A) {
        return A.length === 1 && Jf(A[0], "none") ? [] : mt(A).map(function(t) {
            for (var r = {
                color: Lt.TRANSPARENT,
                offsetX: NA,
                offsetY: NA,
                blur: NA
            }, n = 0, i = 0; i < t.length; i++) {
                var s = t[i];
                xr(s) ? (n === 0 ? r.offsetX = s : n === 1 ? r.offsetY = s : r.blur = s,
                n++) : r.color = mr.parse(e, s)
            }
            return r
        })
    }
}, y2 = {
    name: "text-transform",
    initialValue: "none",
    prefix: !1,
    type: 2,
    parse: function(e, A) {
        switch (A) {
        case "uppercase":
            return 2;
        case "lowercase":
            return 1;
        case "capitalize":
            return 3
        }
        return 0
    }
}, C2 = {
    name: "transform",
    initialValue: "none",
    prefix: !0,
    type: 0,
    parse: function(e, A) {
        if (A.type === 20 && A.value === "none")
            return null;
        if (A.type === 18) {
            var t = F2[A.name];
            if (typeof t > "u")
                throw new Error('Attempting to parse an unsupported transform function "' + A.name + '"');
            return t(A.values)
        }
        return null
    }
}, v2 = function(e) {
    var A = e.filter(function(t) {
        return t.type === 17
    }).map(function(t) {
        return t.number
    });
    return A.length === 6 ? A : null
}, Q2 = function(e) {
    var A = e.filter(function(a) {
        return a.type === 17
    }).map(function(a) {
        return a.number
    })
      , t = A[0]
      , r = A[1];
    A[2],
    A[3];
    var n = A[4]
      , i = A[5];
    A[6],
    A[7],
    A[8],
    A[9],
    A[10],
    A[11];
    var s = A[12]
      , o = A[13];
    return A[14],
    A[15],
    A.length === 16 ? [t, r, n, i, s, o] : null
}, F2 = {
    matrix: v2,
    matrix3d: Q2
}, Yp = {
    type: 16,
    number: 50,
    flags: io
}, U2 = [Yp, Yp], x2 = {
    name: "transform-origin",
    initialValue: "50% 50%",
    prefix: !0,
    type: 1,
    parse: function(e, A) {
        var t = A.filter(_A);
        return t.length !== 2 ? U2 : [t[0], t[1]]
    }
}, E2 = {
    name: "visible",
    initialValue: "none",
    prefix: !1,
    type: 2,
    parse: function(e, A) {
        switch (A) {
        case "hidden":
            return 1;
        case "collapse":
            return 2;
        case "visible":
        default:
            return 0
        }
    }
}, Bs;
(function(e) {
    e.NORMAL = "normal",
    e.BREAK_ALL = "break-all",
    e.KEEP_ALL = "keep-all"
}
)(Bs || (Bs = {}));
var I2 = {
    name: "word-break",
    initialValue: "normal",
    prefix: !1,
    type: 2,
    parse: function(e, A) {
        switch (A) {
        case "break-all":
            return Bs.BREAK_ALL;
        case "keep-all":
            return Bs.KEEP_ALL;
        case "normal":
        default:
            return Bs.NORMAL
        }
    }
}
  , H2 = {
    name: "z-index",
    initialValue: "auto",
    prefix: !1,
    type: 0,
    parse: function(e, A) {
        if (A.type === 20)
            return {
                auto: !0,
                order: 0
            };
        if (vi(A))
            return {
                auto: !1,
                order: A.number
            };
        throw new Error("Invalid z-index number parsed")
    }
}
  , Nv = {
    name: "time",
    parse: function(e, A) {
        if (A.type === 15)
            switch (A.unit.toLowerCase()) {
            case "s":
                return 1e3 * A.number;
            case "ms":
                return A.number
            }
        throw new Error("Unsupported time type")
    }
}
  , _2 = {
    name: "opacity",
    initialValue: "1",
    type: 0,
    prefix: !1,
    parse: function(e, A) {
        return vi(A) ? A.number : 1
    }
}
  , S2 = {
    name: "text-decoration-color",
    initialValue: "transparent",
    prefix: !1,
    type: 3,
    format: "color"
}
  , T2 = {
    name: "text-decoration-line",
    initialValue: "none",
    prefix: !1,
    type: 1,
    parse: function(e, A) {
        return A.filter(AA).map(function(t) {
            switch (t.value) {
            case "underline":
                return 1;
            case "overline":
                return 2;
            case "line-through":
                return 3;
            case "none":
                return 4
            }
            return 0
        }).filter(function(t) {
            return t !== 0
        })
    }
}
  , L2 = {
    name: "font-family",
    initialValue: "",
    prefix: !1,
    type: 1,
    parse: function(e, A) {
        var t = []
          , r = [];
        return A.forEach(function(n) {
            switch (n.type) {
            case 20:
            case 0:
                t.push(n.value);
                break;
            case 17:
                t.push(n.number.toString());
                break;
            case 4:
                r.push(t.join(" ")),
                t.length = 0;
                break
            }
        }),
        t.length && r.push(t.join(" ")),
        r.map(function(n) {
            return n.indexOf(" ") === -1 ? n : "'" + n + "'"
        })
    }
}
  , b2 = {
    name: "font-size",
    initialValue: "0",
    prefix: !1,
    type: 3,
    format: "length"
}
  , D2 = {
    name: "font-weight",
    initialValue: "normal",
    type: 0,
    prefix: !1,
    parse: function(e, A) {
        if (vi(A))
            return A.number;
        if (AA(A))
            switch (A.value) {
            case "bold":
                return 700;
            case "normal":
            default:
                return 400
            }
        return 400
    }
}
  , k2 = {
    name: "font-variant",
    initialValue: "none",
    type: 1,
    prefix: !1,
    parse: function(e, A) {
        return A.filter(AA).map(function(t) {
            return t.value
        })
    }
}
  , M2 = {
    name: "font-style",
    initialValue: "normal",
    prefix: !1,
    type: 2,
    parse: function(e, A) {
        switch (A) {
        case "oblique":
            return "oblique";
        case "italic":
            return "italic";
        case "normal":
        default:
            return "normal"
        }
    }
}
  , LA = function(e, A) {
    return (e & A) !== 0
}
  , K2 = {
    name: "content",
    initialValue: "none",
    type: 1,
    prefix: !1,
    parse: function(e, A) {
        if (A.length === 0)
            return [];
        var t = A[0];
        return t.type === 20 && t.value === "none" ? [] : A
    }
}
  , P2 = {
    name: "counter-increment",
    initialValue: "none",
    prefix: !0,
    type: 1,
    parse: function(e, A) {
        if (A.length === 0)
            return null;
        var t = A[0];
        if (t.type === 20 && t.value === "none")
            return null;
        for (var r = [], n = A.filter(Fv), i = 0; i < n.length; i++) {
            var s = n[i]
              , o = n[i + 1];
            if (s.type === 20) {
                var a = o && vi(o) ? o.number : 1;
                r.push({
                    counter: s.value,
                    increment: a
                })
            }
        }
        return r
    }
}
  , O2 = {
    name: "counter-reset",
    initialValue: "none",
    prefix: !0,
    type: 1,
    parse: function(e, A) {
        if (A.length === 0)
            return [];
        for (var t = [], r = A.filter(Fv), n = 0; n < r.length; n++) {
            var i = r[n]
              , s = r[n + 1];
            if (AA(i) && i.value !== "none") {
                var o = s && vi(s) ? s.number : 0;
                t.push({
                    counter: i.value,
                    reset: o
                })
            }
        }
        return t
    }
}
  , N2 = {
    name: "duration",
    initialValue: "0s",
    prefix: !1,
    type: 1,
    parse: function(e, A) {
        return A.filter(so).map(function(t) {
            return Nv.parse(e, t)
        })
    }
}
  , R2 = {
    name: "quotes",
    initialValue: "none",
    prefix: !0,
    type: 1,
    parse: function(e, A) {
        if (A.length === 0)
            return null;
        var t = A[0];
        if (t.type === 20 && t.value === "none")
            return null;
        var r = []
          , n = A.filter(h4);
        if (n.length % 2 !== 0)
            return null;
        for (var i = 0; i < n.length; i += 2) {
            var s = n[i].value
              , o = n[i + 1].value;
            r.push({
                open: s,
                close: o
            })
        }
        return r
    }
}
  , Jp = function(e, A, t) {
    if (!e)
        return "";
    var r = e[Math.min(A, e.length - 1)];
    return r ? t ? r.open : r.close : ""
}
  , V2 = {
    name: "box-shadow",
    initialValue: "none",
    type: 1,
    prefix: !1,
    parse: function(e, A) {
        return A.length === 1 && Jf(A[0], "none") ? [] : mt(A).map(function(t) {
            for (var r = {
                color: 255,
                offsetX: NA,
                offsetY: NA,
                blur: NA,
                spread: NA,
                inset: !1
            }, n = 0, i = 0; i < t.length; i++) {
                var s = t[i];
                Jf(s, "inset") ? r.inset = !0 : xr(s) ? (n === 0 ? r.offsetX = s : n === 1 ? r.offsetY = s : n === 2 ? r.blur = s : r.spread = s,
                n++) : r.color = mr.parse(e, s)
            }
            return r
        })
    }
}
  , G2 = {
    name: "paint-order",
    initialValue: "normal",
    prefix: !1,
    type: 1,
    parse: function(e, A) {
        var t = [0, 1, 2]
          , r = [];
        return A.filter(AA).forEach(function(n) {
            switch (n.value) {
            case "stroke":
                r.push(1);
                break;
            case "fill":
                r.push(0);
                break;
            case "markers":
                r.push(2);
                break
            }
        }),
        t.forEach(function(n) {
            r.indexOf(n) === -1 && r.push(n)
        }),
        r
    }
}
  , j2 = {
    name: "-webkit-text-stroke-color",
    initialValue: "currentcolor",
    prefix: !1,
    type: 3,
    format: "color"
}
  , z2 = {
    name: "-webkit-text-stroke-width",
    initialValue: "0",
    type: 0,
    prefix: !1,
    parse: function(e, A) {
        return so(A) ? A.number : 0
    }
}
  , X2 = function() {
    function e(A, t) {
        var r, n;
        this.animationDuration = P(A, N2, t.animationDuration),
        this.backgroundClip = P(A, p4, t.backgroundClip),
        this.backgroundColor = P(A, m4, t.backgroundColor),
        this.backgroundImage = P(A, I4, t.backgroundImage),
        this.backgroundOrigin = P(A, H4, t.backgroundOrigin),
        this.backgroundPosition = P(A, _4, t.backgroundPosition),
        this.backgroundRepeat = P(A, S4, t.backgroundRepeat),
        this.backgroundSize = P(A, L4, t.backgroundSize),
        this.borderTopColor = P(A, D4, t.borderTopColor),
        this.borderRightColor = P(A, k4, t.borderRightColor),
        this.borderBottomColor = P(A, M4, t.borderBottomColor),
        this.borderLeftColor = P(A, K4, t.borderLeftColor),
        this.borderTopLeftRadius = P(A, P4, t.borderTopLeftRadius),
        this.borderTopRightRadius = P(A, O4, t.borderTopRightRadius),
        this.borderBottomRightRadius = P(A, N4, t.borderBottomRightRadius),
        this.borderBottomLeftRadius = P(A, R4, t.borderBottomLeftRadius),
        this.borderTopStyle = P(A, V4, t.borderTopStyle),
        this.borderRightStyle = P(A, G4, t.borderRightStyle),
        this.borderBottomStyle = P(A, j4, t.borderBottomStyle),
        this.borderLeftStyle = P(A, z4, t.borderLeftStyle),
        this.borderTopWidth = P(A, X4, t.borderTopWidth),
        this.borderRightWidth = P(A, W4, t.borderRightWidth),
        this.borderBottomWidth = P(A, Y4, t.borderBottomWidth),
        this.borderLeftWidth = P(A, J4, t.borderLeftWidth),
        this.boxShadow = P(A, V2, t.boxShadow),
        this.color = P(A, $4, t.color),
        this.direction = P(A, Z4, t.direction),
        this.display = P(A, q4, t.display),
        this.float = P(A, e2, t.cssFloat),
        this.fontFamily = P(A, L2, t.fontFamily),
        this.fontSize = P(A, b2, t.fontSize),
        this.fontStyle = P(A, M2, t.fontStyle),
        this.fontVariant = P(A, k2, t.fontVariant),
        this.fontWeight = P(A, D2, t.fontWeight),
        this.letterSpacing = P(A, t2, t.letterSpacing),
        this.lineBreak = P(A, r2, t.lineBreak),
        this.lineHeight = P(A, n2, t.lineHeight),
        this.listStyleImage = P(A, i2, t.listStyleImage),
        this.listStylePosition = P(A, s2, t.listStylePosition),
        this.listStyleType = P(A, $f, t.listStyleType),
        this.marginTop = P(A, o2, t.marginTop),
        this.marginRight = P(A, a2, t.marginRight),
        this.marginBottom = P(A, l2, t.marginBottom),
        this.marginLeft = P(A, u2, t.marginLeft),
        this.opacity = P(A, _2, t.opacity);
        var i = P(A, c2, t.overflow);
        this.overflowX = i[0],
        this.overflowY = i[i.length > 1 ? 1 : 0],
        this.overflowWrap = P(A, f2, t.overflowWrap),
        this.paddingTop = P(A, d2, t.paddingTop),
        this.paddingRight = P(A, h2, t.paddingRight),
        this.paddingBottom = P(A, g2, t.paddingBottom),
        this.paddingLeft = P(A, B2, t.paddingLeft),
        this.paintOrder = P(A, G2, t.paintOrder),
        this.position = P(A, m2, t.position),
        this.textAlign = P(A, p2, t.textAlign),
        this.textDecorationColor = P(A, S2, (r = t.textDecorationColor) !== null && r !== void 0 ? r : t.color),
        this.textDecorationLine = P(A, T2, (n = t.textDecorationLine) !== null && n !== void 0 ? n : t.textDecoration),
        this.textShadow = P(A, w2, t.textShadow),
        this.textTransform = P(A, y2, t.textTransform),
        this.transform = P(A, C2, t.transform),
        this.transformOrigin = P(A, x2, t.transformOrigin),
        this.visibility = P(A, E2, t.visibility),
        this.webkitTextStrokeColor = P(A, j2, t.webkitTextStrokeColor),
        this.webkitTextStrokeWidth = P(A, z2, t.webkitTextStrokeWidth),
        this.wordBreak = P(A, I2, t.wordBreak),
        this.zIndex = P(A, H2, t.zIndex)
    }
    return e.prototype.isVisible = function() {
        return this.display > 0 && this.opacity > 0 && this.visibility === 0
    }
    ,
    e.prototype.isTransparent = function() {
        return wr(this.backgroundColor)
    }
    ,
    e.prototype.isTransformed = function() {
        return this.transform !== null
    }
    ,
    e.prototype.isPositioned = function() {
        return this.position !== 0
    }
    ,
    e.prototype.isPositionedWithZIndex = function() {
        return this.isPositioned() && !this.zIndex.auto
    }
    ,
    e.prototype.isFloating = function() {
        return this.float !== 0
    }
    ,
    e.prototype.isInlineLevel = function() {
        return LA(this.display, 4) || LA(this.display, 33554432) || LA(this.display, 268435456) || LA(this.display, 536870912) || LA(this.display, 67108864) || LA(this.display, 134217728)
    }
    ,
    e
}()
  , W2 = function() {
    function e(A, t) {
        this.content = P(A, K2, t.content),
        this.quotes = P(A, R2, t.quotes)
    }
    return e
}()
  , $p = function() {
    function e(A, t) {
        this.counterIncrement = P(A, P2, t.counterIncrement),
        this.counterReset = P(A, O2, t.counterReset)
    }
    return e
}()
  , P = function(e, A, t) {
    var r = new vv
      , n = t !== null && typeof t < "u" ? t.toString() : A.initialValue;
    r.write(n);
    var i = new Qv(r.read());
    switch (A.type) {
    case 2:
        var s = i.parseComponentValue();
        return A.parse(e, AA(s) ? s.value : A.initialValue);
    case 0:
        return A.parse(e, i.parseComponentValue());
    case 1:
        return A.parse(e, i.parseComponentValues());
    case 4:
        return i.parseComponentValue();
    case 3:
        switch (A.format) {
        case "angle":
            return zl.parse(e, i.parseComponentValue());
        case "color":
            return mr.parse(e, i.parseComponentValue());
        case "image":
            return Rh.parse(e, i.parseComponentValue());
        case "length":
            var o = i.parseComponentValue();
            return xr(o) ? o : NA;
        case "length-percentage":
            var a = i.parseComponentValue();
            return _A(a) ? a : NA;
        case "time":
            return Nv.parse(e, i.parseComponentValue())
        }
        break
    }
}
  , Y2 = "data-html2canvas-debug"
  , J2 = function(e) {
    var A = e.getAttribute(Y2);
    switch (A) {
    case "all":
        return 1;
    case "clone":
        return 2;
    case "parse":
        return 3;
    case "render":
        return 4;
    default:
        return 0
    }
}
  , Zf = function(e, A) {
    var t = J2(e);
    return t === 1 || A === t
}
  , wt = function() {
    function e(A, t) {
        if (this.context = A,
        this.textNodes = [],
        this.elements = [],
        this.flags = 0,
        Zf(t, 3))
            debugger ;this.styles = new X2(A,window.getComputedStyle(t, null)),
        ed(t) && (this.styles.animationDuration.some(function(r) {
            return r > 0
        }) && (t.style.animationDuration = "0s"),
        this.styles.transform !== null && (t.style.transform = "none")),
        this.bounds = Gl(this.context, t),
        Zf(t, 4) && (this.flags |= 16)
    }
    return e
}()
  , $2 = "AAAAAAAAAAAAEA4AGBkAAFAaAAACAAAAAAAIABAAGAAwADgACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAAQABIAEQATAAIABAACAAQAAgAEAAIABAAVABcAAgAEAAIABAACAAQAGAAaABwAHgAgACIAI4AlgAIABAAmwCjAKgAsAC2AL4AvQDFAMoA0gBPAVYBWgEIAAgACACMANoAYgFkAWwBdAF8AX0BhQGNAZUBlgGeAaMBlQGWAasBswF8AbsBwwF0AcsBYwHTAQgA2wG/AOMBdAF8AekB8QF0AfkB+wHiAHQBfAEIAAMC5gQIAAsCEgIIAAgAFgIeAggAIgIpAggAMQI5AkACygEIAAgASAJQAlgCYAIIAAgACAAKBQoFCgUTBRMFGQUrBSsFCAAIAAgACAAIAAgACAAIAAgACABdAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABoAmgCrwGvAQgAbgJ2AggAHgEIAAgACADnAXsCCAAIAAgAgwIIAAgACAAIAAgACACKAggAkQKZAggAPADJAAgAoQKkAqwCsgK6AsICCADJAggA0AIIAAgACAAIANYC3gIIAAgACAAIAAgACABAAOYCCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAkASoB+QIEAAgACAA8AEMCCABCBQgACABJBVAFCAAIAAgACAAIAAgACAAIAAgACABTBVoFCAAIAFoFCABfBWUFCAAIAAgACAAIAAgAbQUIAAgACAAIAAgACABzBXsFfQWFBYoFigWKBZEFigWKBYoFmAWfBaYFrgWxBbkFCAAIAAgACAAIAAgACAAIAAgACAAIAMEFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAMgFCADQBQgACAAIAAgACAAIAAgACAAIAAgACAAIAO4CCAAIAAgAiQAIAAgACABAAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAD0AggACAD8AggACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIANYFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAMDvwAIAAgAJAIIAAgACAAIAAgACAAIAAgACwMTAwgACAB9BOsEGwMjAwgAKwMyAwsFYgE3A/MEPwMIAEUDTQNRAwgAWQOsAGEDCAAIAAgACAAIAAgACABpAzQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFIQUoBSwFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABtAwgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABMAEwACAAIAAgACAAIABgACAAIAAgACAC/AAgACAAyAQgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACAAIAAwAAgACAAIAAgACAAIAAgACAAIAAAARABIAAgACAAIABQASAAIAAgAIABwAEAAjgCIABsAqAC2AL0AigDQAtwC+IJIQqVAZUBWQqVAZUBlQGVAZUBlQGrC5UBlQGVAZUBlQGVAZUBlQGVAXsKlQGVAbAK6wsrDGUMpQzlDJUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAfAKAAuZA64AtwCJALoC6ADwAAgAuACgA/oEpgO6AqsD+AAIAAgAswMIAAgACAAIAIkAuwP5AfsBwwPLAwgACAAIAAgACADRA9kDCAAIAOED6QMIAAgACAAIAAgACADuA/YDCAAIAP4DyQAIAAgABgQIAAgAXQAOBAgACAAIAAgACAAIABMECAAIAAgACAAIAAgACAD8AAQBCAAIAAgAGgQiBCoECAExBAgAEAEIAAgACAAIAAgACAAIAAgACAAIAAgACAA4BAgACABABEYECAAIAAgATAQYAQgAVAQIAAgACAAIAAgACAAIAAgACAAIAFoECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAOQEIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAB+BAcACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAEABhgSMBAgACAAIAAgAlAQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAwAEAAQABAADAAMAAwADAAQABAAEAAQABAAEAAQABHATAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAdQMIAAgACAAIAAgACAAIAMkACAAIAAgAfQMIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACFA4kDCAAIAAgACAAIAOcBCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAIcDCAAIAAgACAAIAAgACAAIAAgACAAIAJEDCAAIAAgACADFAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABgBAgAZgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAbAQCBXIECAAIAHkECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABAAJwEQACjBKoEsgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAC6BMIECAAIAAgACAAIAAgACABmBAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAxwQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAGYECAAIAAgAzgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBd0FXwUIAOIF6gXxBYoF3gT5BQAGCAaKBYoFigWKBYoFigWKBYoFigWKBYoFigXWBIoFigWKBYoFigWKBYoFigWKBYsFEAaKBYoFigWKBYoFigWKBRQGCACKBYoFigWKBQgACAAIANEECAAIABgGigUgBggAJgYIAC4GMwaKBYoF0wQ3Bj4GigWKBYoFigWKBYoFigWKBYoFigWKBYoFigUIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWLBf///////wQABAAEAAQABAAEAAQABAAEAAQAAwAEAAQAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAQADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUAAAAFAAUAAAAFAAUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAQAAAAUABQAFAAUABQAFAAAAAAAFAAUAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAFAAUAAQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAAABwAHAAcAAAAHAAcABwAFAAEAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAcABwAFAAUAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAQABAAAAAAAAAAAAAAAFAAUABQAFAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAHAAcAAAAHAAcAAAAAAAUABQAHAAUAAQAHAAEABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwABAAUABQAFAAUAAAAAAAAAAAAAAAEAAQABAAEAAQABAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABQANAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAABQAHAAUABQAFAAAAAAAAAAcABQAFAAUABQAFAAQABAAEAAQABAAEAAQABAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUAAAAFAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAUAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAcABwAFAAcABwAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUABwAHAAUABQAFAAUAAAAAAAcABwAAAAAABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAAAAAAAAAAABQAFAAAAAAAFAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAFAAUABQAFAAUAAAAFAAUABwAAAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABwAFAAUABQAFAAAAAAAHAAcAAAAAAAcABwAFAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAAAAAAAAAHAAcABwAAAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAUABQAFAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAHAAcABQAHAAcAAAAFAAcABwAAAAcABwAFAAUAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAFAAcABwAFAAUABQAAAAUAAAAHAAcABwAHAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAHAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUAAAAFAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAUAAAAFAAUAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABwAFAAUABQAFAAUABQAAAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABQAFAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAFAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAHAAUABQAFAAUABQAFAAUABwAHAAcABwAHAAcABwAHAAUABwAHAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABwAHAAcABwAFAAUABwAHAAcAAAAAAAAAAAAHAAcABQAHAAcABwAHAAcABwAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAUABQAFAAUABQAFAAUAAAAFAAAABQAAAAAABQAFAAUABQAFAAUABQAFAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAUABQAFAAUABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABwAFAAcABwAHAAcABwAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAUABQAFAAUABwAHAAUABQAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABQAFAAcABwAHAAUABwAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAcABQAFAAUABQAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAAAAAABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAAAAAAAAAFAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAUABQAHAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAFAAUABQAFAAcABwAFAAUABwAHAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAcABwAFAAUABwAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABQAAAAAABQAFAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAcABwAAAAAAAAAAAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAcABwAFAAcABwAAAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAFAAUABQAAAAUABQAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABwAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAHAAcABQAHAAUABQAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAAABwAHAAAAAAAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAFAAUABwAFAAcABwAFAAcABQAFAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAAAAAABwAHAAcABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAFAAcABwAFAAUABQAFAAUABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAUABQAFAAcABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABQAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAAAAAAFAAUABwAHAAcABwAFAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAHAAUABQAFAAUABQAFAAUABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAABQAAAAUABQAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAHAAcAAAAFAAUAAAAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABQAFAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAABQAFAAUABQAFAAUABQAAAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAFAAUABQAFAAUADgAOAA4ADgAOAA4ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAMAAwADAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAAAAAAAAAAAAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAAAAAAAAAAAAsADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwACwAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAADgAOAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAAAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4AAAAOAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAAAAAAAAAAAA4AAAAOAAAAAAAAAAAADgAOAA4AAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAA="
  , Zp = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
  , Ji = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var Wo = 0; Wo < Zp.length; Wo++)
    Ji[Zp.charCodeAt(Wo)] = Wo;
var Z2 = function(e) {
    var A = e.length * .75, t = e.length, r, n = 0, i, s, o, a;
    e[e.length - 1] === "=" && (A--,
    e[e.length - 2] === "=" && A--);
    var l = typeof ArrayBuffer < "u" && typeof Uint8Array < "u" && typeof Uint8Array.prototype.slice < "u" ? new ArrayBuffer(A) : new Array(A)
      , u = Array.isArray(l) ? l : new Uint8Array(l);
    for (r = 0; r < t; r += 4)
        i = Ji[e.charCodeAt(r)],
        s = Ji[e.charCodeAt(r + 1)],
        o = Ji[e.charCodeAt(r + 2)],
        a = Ji[e.charCodeAt(r + 3)],
        u[n++] = i << 2 | s >> 4,
        u[n++] = (s & 15) << 4 | o >> 2,
        u[n++] = (o & 3) << 6 | a & 63;
    return l
}
  , q2 = function(e) {
    for (var A = e.length, t = [], r = 0; r < A; r += 2)
        t.push(e[r + 1] << 8 | e[r]);
    return t
}
  , AT = function(e) {
    for (var A = e.length, t = [], r = 0; r < A; r += 4)
        t.push(e[r + 3] << 24 | e[r + 2] << 16 | e[r + 1] << 8 | e[r]);
    return t
}
  , nn = 5
  , Vh = 11
  , rc = 2
  , eT = Vh - nn
  , Rv = 65536 >> nn
  , tT = 1 << nn
  , nc = tT - 1
  , rT = 1024 >> nn
  , nT = Rv + rT
  , iT = nT
  , sT = 32
  , oT = iT + sT
  , aT = 65536 >> Vh
  , lT = 1 << eT
  , uT = lT - 1
  , qp = function(e, A, t) {
    return e.slice ? e.slice(A, t) : new Uint16Array(Array.prototype.slice.call(e, A, t))
}
  , cT = function(e, A, t) {
    return e.slice ? e.slice(A, t) : new Uint32Array(Array.prototype.slice.call(e, A, t))
}
  , fT = function(e, A) {
    var t = Z2(e)
      , r = Array.isArray(t) ? AT(t) : new Uint32Array(t)
      , n = Array.isArray(t) ? q2(t) : new Uint16Array(t)
      , i = 24
      , s = qp(n, i / 2, r[4] / 2)
      , o = r[5] === 2 ? qp(n, (i + r[4]) / 2) : cT(r, Math.ceil((i + r[4]) / 4));
    return new dT(r[0],r[1],r[2],r[3],s,o)
}
  , dT = function() {
    function e(A, t, r, n, i, s) {
        this.initialValue = A,
        this.errorValue = t,
        this.highStart = r,
        this.highValueIndex = n,
        this.index = i,
        this.data = s
    }
    return e.prototype.get = function(A) {
        var t;
        if (A >= 0) {
            if (A < 55296 || A > 56319 && A <= 65535)
                return t = this.index[A >> nn],
                t = (t << rc) + (A & nc),
                this.data[t];
            if (A <= 65535)
                return t = this.index[Rv + (A - 55296 >> nn)],
                t = (t << rc) + (A & nc),
                this.data[t];
            if (A < this.highStart)
                return t = oT - aT + (A >> Vh),
                t = this.index[t],
                t += A >> nn & uT,
                t = this.index[t],
                t = (t << rc) + (A & nc),
                this.data[t];
            if (A <= 1114111)
                return this.data[this.highValueIndex]
        }
        return this.errorValue
    }
    ,
    e
}()
  , A0 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
  , hT = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var Yo = 0; Yo < A0.length; Yo++)
    hT[A0.charCodeAt(Yo)] = Yo;
var gT = 1, ic = 2, sc = 3, e0 = 4, t0 = 5, BT = 7, r0 = 8, oc = 9, ac = 10, n0 = 11, i0 = 12, s0 = 13, o0 = 14, lc = 15, pT = function(e) {
    for (var A = [], t = 0, r = e.length; t < r; ) {
        var n = e.charCodeAt(t++);
        if (n >= 55296 && n <= 56319 && t < r) {
            var i = e.charCodeAt(t++);
            (i & 64512) === 56320 ? A.push(((n & 1023) << 10) + (i & 1023) + 65536) : (A.push(n),
            t--)
        } else
            A.push(n)
    }
    return A
}, mT = function() {
    for (var e = [], A = 0; A < arguments.length; A++)
        e[A] = arguments[A];
    if (String.fromCodePoint)
        return String.fromCodePoint.apply(String, e);
    var t = e.length;
    if (!t)
        return "";
    for (var r = [], n = -1, i = ""; ++n < t; ) {
        var s = e[n];
        s <= 65535 ? r.push(s) : (s -= 65536,
        r.push((s >> 10) + 55296, s % 1024 + 56320)),
        (n + 1 === t || r.length > 16384) && (i += String.fromCharCode.apply(String, r),
        r.length = 0)
    }
    return i
}, wT = fT($2), Ke = "×", uc = "÷", yT = function(e) {
    return wT.get(e)
}, CT = function(e, A, t) {
    var r = t - 2
      , n = A[r]
      , i = A[t - 1]
      , s = A[t];
    if (i === ic && s === sc)
        return Ke;
    if (i === ic || i === sc || i === e0 || s === ic || s === sc || s === e0)
        return uc;
    if (i === r0 && [r0, oc, n0, i0].indexOf(s) !== -1 || (i === n0 || i === oc) && (s === oc || s === ac) || (i === i0 || i === ac) && s === ac || s === s0 || s === t0 || s === BT || i === gT)
        return Ke;
    if (i === s0 && s === o0) {
        for (; n === t0; )
            n = A[--r];
        if (n === o0)
            return Ke
    }
    if (i === lc && s === lc) {
        for (var o = 0; n === lc; )
            o++,
            n = A[--r];
        if (o % 2 === 0)
            return Ke
    }
    return uc
}, vT = function(e) {
    var A = pT(e)
      , t = A.length
      , r = 0
      , n = 0
      , i = A.map(yT);
    return {
        next: function() {
            if (r >= t)
                return {
                    done: !0,
                    value: null
                };
            for (var s = Ke; r < t && (s = CT(A, i, ++r)) === Ke; )
                ;
            if (s !== Ke || r === t) {
                var o = mT.apply(null, A.slice(n, r));
                return n = r,
                {
                    value: o,
                    done: !1
                }
            }
            return {
                done: !0,
                value: null
            }
        }
    }
}, QT = function(e) {
    for (var A = vT(e), t = [], r; !(r = A.next()).done; )
        r.value && t.push(r.value.slice());
    return t
}, FT = function(e) {
    var A = 123;
    if (e.createRange) {
        var t = e.createRange();
        if (t.getBoundingClientRect) {
            var r = e.createElement("boundtest");
            r.style.height = A + "px",
            r.style.display = "block",
            e.body.appendChild(r),
            t.selectNode(r);
            var n = t.getBoundingClientRect()
              , i = Math.round(n.height);
            if (e.body.removeChild(r),
            i === A)
                return !0
        }
    }
    return !1
}, UT = function(e) {
    var A = e.createElement("boundtest");
    A.style.width = "50px",
    A.style.display = "block",
    A.style.fontSize = "12px",
    A.style.letterSpacing = "0px",
    A.style.wordSpacing = "0px",
    e.body.appendChild(A);
    var t = e.createRange();
    A.innerHTML = typeof "".repeat == "function" ? "&#128104;".repeat(10) : "";
    var r = A.firstChild
      , n = jl(r.data).map(function(a) {
        return CA(a)
    })
      , i = 0
      , s = {}
      , o = n.every(function(a, l) {
        t.setStart(r, i),
        t.setEnd(r, i + a.length);
        var u = t.getBoundingClientRect();
        i += a.length;
        var c = u.x > s.x || u.y > s.y;
        return s = u,
        l === 0 ? !0 : c
    });
    return e.body.removeChild(A),
    o
}, xT = function() {
    return typeof new Image().crossOrigin < "u"
}, ET = function() {
    return typeof new XMLHttpRequest().responseType == "string"
}, IT = function(e) {
    var A = new Image
      , t = e.createElement("canvas")
      , r = t.getContext("2d");
    if (!r)
        return !1;
    A.src = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";
    try {
        r.drawImage(A, 0, 0),
        t.toDataURL()
    } catch {
        return !1
    }
    return !0
}, a0 = function(e) {
    return e[0] === 0 && e[1] === 255 && e[2] === 0 && e[3] === 255
}, HT = function(e) {
    var A = e.createElement("canvas")
      , t = 100;
    A.width = t,
    A.height = t;
    var r = A.getContext("2d");
    if (!r)
        return Promise.reject(!1);
    r.fillStyle = "rgb(0, 255, 0)",
    r.fillRect(0, 0, t, t);
    var n = new Image
      , i = A.toDataURL();
    n.src = i;
    var s = qf(t, t, 0, 0, n);
    return r.fillStyle = "red",
    r.fillRect(0, 0, t, t),
    l0(s).then(function(o) {
        r.drawImage(o, 0, 0);
        var a = r.getImageData(0, 0, t, t).data;
        r.fillStyle = "red",
        r.fillRect(0, 0, t, t);
        var l = e.createElement("div");
        return l.style.backgroundImage = "url(" + i + ")",
        l.style.height = t + "px",
        a0(a) ? l0(qf(t, t, 0, 0, l)) : Promise.reject(!1)
    }).then(function(o) {
        return r.drawImage(o, 0, 0),
        a0(r.getImageData(0, 0, t, t).data)
    }).catch(function() {
        return !1
    })
}, qf = function(e, A, t, r, n) {
    var i = "http://www.w3.org/2000/svg"
      , s = document.createElementNS(i, "svg")
      , o = document.createElementNS(i, "foreignObject");
    return s.setAttributeNS(null, "width", e.toString()),
    s.setAttributeNS(null, "height", A.toString()),
    o.setAttributeNS(null, "width", "100%"),
    o.setAttributeNS(null, "height", "100%"),
    o.setAttributeNS(null, "x", t.toString()),
    o.setAttributeNS(null, "y", r.toString()),
    o.setAttributeNS(null, "externalResourcesRequired", "true"),
    s.appendChild(o),
    o.appendChild(n),
    s
}, l0 = function(e) {
    return new Promise(function(A, t) {
        var r = new Image;
        r.onload = function() {
            return A(r)
        }
        ,
        r.onerror = t,
        r.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(e))
    }
    )
}, OA = {
    get SUPPORT_RANGE_BOUNDS() {
        var e = FT(document);
        return Object.defineProperty(OA, "SUPPORT_RANGE_BOUNDS", {
            value: e
        }),
        e
    },
    get SUPPORT_WORD_BREAKING() {
        var e = OA.SUPPORT_RANGE_BOUNDS && UT(document);
        return Object.defineProperty(OA, "SUPPORT_WORD_BREAKING", {
            value: e
        }),
        e
    },
    get SUPPORT_SVG_DRAWING() {
        var e = IT(document);
        return Object.defineProperty(OA, "SUPPORT_SVG_DRAWING", {
            value: e
        }),
        e
    },
    get SUPPORT_FOREIGNOBJECT_DRAWING() {
        var e = typeof Array.from == "function" && typeof window.fetch == "function" ? HT(document) : Promise.resolve(!1);
        return Object.defineProperty(OA, "SUPPORT_FOREIGNOBJECT_DRAWING", {
            value: e
        }),
        e
    },
    get SUPPORT_CORS_IMAGES() {
        var e = xT();
        return Object.defineProperty(OA, "SUPPORT_CORS_IMAGES", {
            value: e
        }),
        e
    },
    get SUPPORT_RESPONSE_TYPE() {
        var e = ET();
        return Object.defineProperty(OA, "SUPPORT_RESPONSE_TYPE", {
            value: e
        }),
        e
    },
    get SUPPORT_CORS_XHR() {
        var e = "withCredentials"in new XMLHttpRequest;
        return Object.defineProperty(OA, "SUPPORT_CORS_XHR", {
            value: e
        }),
        e
    },
    get SUPPORT_NATIVE_TEXT_SEGMENTATION() {
        var e = !!(typeof Intl < "u" && Intl.Segmenter);
        return Object.defineProperty(OA, "SUPPORT_NATIVE_TEXT_SEGMENTATION", {
            value: e
        }),
        e
    }
}, ps = function() {
    function e(A, t) {
        this.text = A,
        this.bounds = t
    }
    return e
}(), _T = function(e, A, t, r) {
    var n = LT(A, t)
      , i = []
      , s = 0;
    return n.forEach(function(o) {
        if (t.textDecorationLine.length || o.trim().length > 0)
            if (OA.SUPPORT_RANGE_BOUNDS) {
                var a = u0(r, s, o.length).getClientRects();
                if (a.length > 1) {
                    var l = Gh(o)
                      , u = 0;
                    l.forEach(function(f) {
                        i.push(new ps(f,Nt.fromDOMRectList(e, u0(r, u + s, f.length).getClientRects()))),
                        u += f.length
                    })
                } else
                    i.push(new ps(o,Nt.fromDOMRectList(e, a)))
            } else {
                var c = r.splitText(o.length);
                i.push(new ps(o,ST(e, r))),
                r = c
            }
        else
            OA.SUPPORT_RANGE_BOUNDS || (r = r.splitText(o.length));
        s += o.length
    }),
    i
}, ST = function(e, A) {
    var t = A.ownerDocument;
    if (t) {
        var r = t.createElement("html2canvaswrapper");
        r.appendChild(A.cloneNode(!0));
        var n = A.parentNode;
        if (n) {
            n.replaceChild(r, A);
            var i = Gl(e, r);
            return r.firstChild && n.replaceChild(r.firstChild, r),
            i
        }
    }
    return Nt.EMPTY
}, u0 = function(e, A, t) {
    var r = e.ownerDocument;
    if (!r)
        throw new Error("Node has no owner document");
    var n = r.createRange();
    return n.setStart(e, A),
    n.setEnd(e, A + t),
    n
}, Gh = function(e) {
    if (OA.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
        var A = new Intl.Segmenter(void 0,{
            granularity: "grapheme"
        });
        return Array.from(A.segment(e)).map(function(t) {
            return t.segment
        })
    }
    return QT(e)
}, TT = function(e, A) {
    if (OA.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
        var t = new Intl.Segmenter(void 0,{
            granularity: "word"
        });
        return Array.from(t.segment(e)).map(function(r) {
            return r.segment
        })
    }
    return DT(e, A)
}, LT = function(e, A) {
    return A.letterSpacing !== 0 ? Gh(e) : TT(e, A)
}, bT = [32, 160, 4961, 65792, 65793, 4153, 4241], DT = function(e, A) {
    for (var t = aS(e, {
        lineBreak: A.lineBreak,
        wordBreak: A.overflowWrap === "break-word" ? "break-word" : A.wordBreak
    }), r = [], n, i = function() {
        if (n.value) {
            var s = n.value.slice()
              , o = jl(s)
              , a = "";
            o.forEach(function(l) {
                bT.indexOf(l) === -1 ? a += CA(l) : (a.length && r.push(a),
                r.push(CA(l)),
                a = "")
            }),
            a.length && r.push(a)
        }
    }; !(n = t.next()).done; )
        i();
    return r
}, kT = function() {
    function e(A, t, r) {
        this.text = MT(t.data, r.textTransform),
        this.textBounds = _T(A, this.text, r, t)
    }
    return e
}(), MT = function(e, A) {
    switch (A) {
    case 1:
        return e.toLowerCase();
    case 3:
        return e.replace(KT, PT);
    case 2:
        return e.toUpperCase();
    default:
        return e
    }
}, KT = /(^|\s|:|-|\(|\))([a-z])/g, PT = function(e, A, t) {
    return e.length > 0 ? A + t.toUpperCase() : e
}, Vv = function(e) {
    st(A, e);
    function A(t, r) {
        var n = e.call(this, t, r) || this;
        return n.src = r.currentSrc || r.src,
        n.intrinsicWidth = r.naturalWidth,
        n.intrinsicHeight = r.naturalHeight,
        n.context.cache.addImage(n.src),
        n
    }
    return A
}(wt), Gv = function(e) {
    st(A, e);
    function A(t, r) {
        var n = e.call(this, t, r) || this;
        return n.canvas = r,
        n.intrinsicWidth = r.width,
        n.intrinsicHeight = r.height,
        n
    }
    return A
}(wt), jv = function(e) {
    st(A, e);
    function A(t, r) {
        var n = e.call(this, t, r) || this
          , i = new XMLSerializer
          , s = Gl(t, r);
        return r.setAttribute("width", s.width + "px"),
        r.setAttribute("height", s.height + "px"),
        n.svg = "data:image/svg+xml," + encodeURIComponent(i.serializeToString(r)),
        n.intrinsicWidth = r.width.baseVal.value,
        n.intrinsicHeight = r.height.baseVal.value,
        n.context.cache.addImage(n.svg),
        n
    }
    return A
}(wt), zv = function(e) {
    st(A, e);
    function A(t, r) {
        var n = e.call(this, t, r) || this;
        return n.value = r.value,
        n
    }
    return A
}(wt), Ad = function(e) {
    st(A, e);
    function A(t, r) {
        var n = e.call(this, t, r) || this;
        return n.start = r.start,
        n.reversed = typeof r.reversed == "boolean" && r.reversed === !0,
        n
    }
    return A
}(wt), OT = [{
    type: 15,
    flags: 0,
    unit: "px",
    number: 3
}], NT = [{
    type: 16,
    flags: 0,
    number: 50
}], RT = function(e) {
    return e.width > e.height ? new Nt(e.left + (e.width - e.height) / 2,e.top,e.height,e.height) : e.width < e.height ? new Nt(e.left,e.top + (e.height - e.width) / 2,e.width,e.width) : e
}, VT = function(e) {
    var A = e.type === GT ? new Array(e.value.length + 1).join("•") : e.value;
    return A.length === 0 ? e.placeholder || "" : A
}, ul = "checkbox", cl = "radio", GT = "password", c0 = 707406591, jh = function(e) {
    st(A, e);
    function A(t, r) {
        var n = e.call(this, t, r) || this;
        switch (n.type = r.type.toLowerCase(),
        n.checked = r.checked,
        n.value = VT(r),
        (n.type === ul || n.type === cl) && (n.styles.backgroundColor = 3739148031,
        n.styles.borderTopColor = n.styles.borderRightColor = n.styles.borderBottomColor = n.styles.borderLeftColor = 2779096575,
        n.styles.borderTopWidth = n.styles.borderRightWidth = n.styles.borderBottomWidth = n.styles.borderLeftWidth = 1,
        n.styles.borderTopStyle = n.styles.borderRightStyle = n.styles.borderBottomStyle = n.styles.borderLeftStyle = 1,
        n.styles.backgroundClip = [0],
        n.styles.backgroundOrigin = [0],
        n.bounds = RT(n.bounds)),
        n.type) {
        case ul:
            n.styles.borderTopRightRadius = n.styles.borderTopLeftRadius = n.styles.borderBottomRightRadius = n.styles.borderBottomLeftRadius = OT;
            break;
        case cl:
            n.styles.borderTopRightRadius = n.styles.borderTopLeftRadius = n.styles.borderBottomRightRadius = n.styles.borderBottomLeftRadius = NT;
            break
        }
        return n
    }
    return A
}(wt), Xv = function(e) {
    st(A, e);
    function A(t, r) {
        var n = e.call(this, t, r) || this
          , i = r.options[r.selectedIndex || 0];
        return n.value = i && i.text || "",
        n
    }
    return A
}(wt), Wv = function(e) {
    st(A, e);
    function A(t, r) {
        var n = e.call(this, t, r) || this;
        return n.value = r.value,
        n
    }
    return A
}(wt), Yv = function(e) {
    st(A, e);
    function A(t, r) {
        var n = e.call(this, t, r) || this;
        n.src = r.src,
        n.width = parseInt(r.width, 10) || 0,
        n.height = parseInt(r.height, 10) || 0,
        n.backgroundColor = n.styles.backgroundColor;
        try {
            if (r.contentWindow && r.contentWindow.document && r.contentWindow.document.documentElement) {
                n.tree = $v(t, r.contentWindow.document.documentElement);
                var i = r.contentWindow.document.documentElement ? gs(t, getComputedStyle(r.contentWindow.document.documentElement).backgroundColor) : Lt.TRANSPARENT
                  , s = r.contentWindow.document.body ? gs(t, getComputedStyle(r.contentWindow.document.body).backgroundColor) : Lt.TRANSPARENT;
                n.backgroundColor = wr(i) ? wr(s) ? n.styles.backgroundColor : s : i
            }
        } catch {}
        return n
    }
    return A
}(wt), jT = ["OL", "UL", "MENU"], wa = function(e, A, t, r) {
    for (var n = A.firstChild, i = void 0; n; n = i)
        if (i = n.nextSibling,
        Zv(n) && n.data.trim().length > 0)
            t.textNodes.push(new kT(e,n,t.styles));
        else if (jn(n))
            if (tQ(n) && n.assignedNodes)
                n.assignedNodes().forEach(function(o) {
                    return wa(e, o, t, r)
                });
            else {
                var s = Jv(e, n);
                s.styles.isVisible() && (zT(n, s, r) ? s.flags |= 4 : XT(s.styles) && (s.flags |= 2),
                jT.indexOf(n.tagName) !== -1 && (s.flags |= 8),
                t.elements.push(s),
                n.slot,
                n.shadowRoot ? wa(e, n.shadowRoot, s, r) : !fl(n) && !qv(n) && !dl(n) && wa(e, n, s, r))
            }
}, Jv = function(e, A) {
    return td(A) ? new Vv(e,A) : AQ(A) ? new Gv(e,A) : qv(A) ? new jv(e,A) : WT(A) ? new zv(e,A) : YT(A) ? new Ad(e,A) : JT(A) ? new jh(e,A) : dl(A) ? new Xv(e,A) : fl(A) ? new Wv(e,A) : eQ(A) ? new Yv(e,A) : new wt(e,A)
}, $v = function(e, A) {
    var t = Jv(e, A);
    return t.flags |= 4,
    wa(e, A, t, t),
    t
}, zT = function(e, A, t) {
    return A.styles.isPositionedWithZIndex() || A.styles.opacity < 1 || A.styles.isTransformed() || zh(e) && t.styles.isTransparent()
}, XT = function(e) {
    return e.isPositioned() || e.isFloating()
}, Zv = function(e) {
    return e.nodeType === Node.TEXT_NODE
}, jn = function(e) {
    return e.nodeType === Node.ELEMENT_NODE
}, ed = function(e) {
    return jn(e) && typeof e.style < "u" && !ya(e)
}, ya = function(e) {
    return typeof e.className == "object"
}, WT = function(e) {
    return e.tagName === "LI"
}, YT = function(e) {
    return e.tagName === "OL"
}, JT = function(e) {
    return e.tagName === "INPUT"
}, $T = function(e) {
    return e.tagName === "HTML"
}, qv = function(e) {
    return e.tagName === "svg"
}, zh = function(e) {
    return e.tagName === "BODY"
}, AQ = function(e) {
    return e.tagName === "CANVAS"
}, f0 = function(e) {
    return e.tagName === "VIDEO"
}, td = function(e) {
    return e.tagName === "IMG"
}, eQ = function(e) {
    return e.tagName === "IFRAME"
}, d0 = function(e) {
    return e.tagName === "STYLE"
}, ZT = function(e) {
    return e.tagName === "SCRIPT"
}, fl = function(e) {
    return e.tagName === "TEXTAREA"
}, dl = function(e) {
    return e.tagName === "SELECT"
}, tQ = function(e) {
    return e.tagName === "SLOT"
}, h0 = function(e) {
    return e.tagName.indexOf("-") > 0
}, qT = function() {
    function e() {
        this.counters = {}
    }
    return e.prototype.getCounterValue = function(A) {
        var t = this.counters[A];
        return t && t.length ? t[t.length - 1] : 1
    }
    ,
    e.prototype.getCounterValues = function(A) {
        var t = this.counters[A];
        return t || []
    }
    ,
    e.prototype.pop = function(A) {
        var t = this;
        A.forEach(function(r) {
            return t.counters[r].pop()
        })
    }
    ,
    e.prototype.parse = function(A) {
        var t = this
          , r = A.counterIncrement
          , n = A.counterReset
          , i = !0;
        r !== null && r.forEach(function(o) {
            var a = t.counters[o.counter];
            a && o.increment !== 0 && (i = !1,
            a.length || a.push(1),
            a[Math.max(0, a.length - 1)] += o.increment)
        });
        var s = [];
        return i && n.forEach(function(o) {
            var a = t.counters[o.counter];
            s.push(o.counter),
            a || (a = t.counters[o.counter] = []),
            a.push(o.reset)
        }),
        s
    }
    ,
    e
}(), g0 = {
    integers: [1e3, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
    values: ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
}, B0 = {
    integers: [9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 900, 800, 700, 600, 500, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
    values: ["Ք", "Փ", "Ւ", "Ց", "Ր", "Տ", "Վ", "Ս", "Ռ", "Ջ", "Պ", "Չ", "Ո", "Շ", "Ն", "Յ", "Մ", "Ճ", "Ղ", "Ձ", "Հ", "Կ", "Ծ", "Խ", "Լ", "Ի", "Ժ", "Թ", "Ը", "Է", "Զ", "Ե", "Դ", "Գ", "Բ", "Ա"]
}, AL = {
    integers: [1e4, 9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 19, 18, 17, 16, 15, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
    values: ["י׳", "ט׳", "ח׳", "ז׳", "ו׳", "ה׳", "ד׳", "ג׳", "ב׳", "א׳", "ת", "ש", "ר", "ק", "צ", "פ", "ע", "ס", "נ", "מ", "ל", "כ", "יט", "יח", "יז", "טז", "טו", "י", "ט", "ח", "ז", "ו", "ה", "ד", "ג", "ב", "א"]
}, eL = {
    integers: [1e4, 9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 900, 800, 700, 600, 500, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
    values: ["ჵ", "ჰ", "ჯ", "ჴ", "ხ", "ჭ", "წ", "ძ", "ც", "ჩ", "შ", "ყ", "ღ", "ქ", "ფ", "ჳ", "ტ", "ს", "რ", "ჟ", "პ", "ო", "ჲ", "ნ", "მ", "ლ", "კ", "ი", "თ", "ჱ", "ზ", "ვ", "ე", "დ", "გ", "ბ", "ა"]
}, vn = function(e, A, t, r, n, i) {
    return e < A || e > t ? Ws(e, n, i.length > 0) : r.integers.reduce(function(s, o, a) {
        for (; e >= o; )
            e -= o,
            s += r.values[a];
        return s
    }, "") + i
}, rQ = function(e, A, t, r) {
    var n = "";
    do
        t || e--,
        n = r(e) + n,
        e /= A;
    while (e * A >= A);
    return n
}, yA = function(e, A, t, r, n) {
    var i = t - A + 1;
    return (e < 0 ? "-" : "") + (rQ(Math.abs(e), i, r, function(s) {
        return CA(Math.floor(s % i) + A)
    }) + n)
}, kr = function(e, A, t) {
    t === void 0 && (t = ". ");
    var r = A.length;
    return rQ(Math.abs(e), r, !1, function(n) {
        return A[Math.floor(n % r)]
    }) + t
}, Un = 1, jt = 2, zt = 4, $i = 8, Ct = function(e, A, t, r, n, i) {
    if (e < -9999 || e > 9999)
        return Ws(e, 4, n.length > 0);
    var s = Math.abs(e)
      , o = n;
    if (s === 0)
        return A[0] + o;
    for (var a = 0; s > 0 && a <= 4; a++) {
        var l = s % 10;
        l === 0 && LA(i, Un) && o !== "" ? o = A[l] + o : l > 1 || l === 1 && a === 0 || l === 1 && a === 1 && LA(i, jt) || l === 1 && a === 1 && LA(i, zt) && e > 100 || l === 1 && a > 1 && LA(i, $i) ? o = A[l] + (a > 0 ? t[a - 1] : "") + o : l === 1 && a > 0 && (o = t[a - 1] + o),
        s = Math.floor(s / 10)
    }
    return (e < 0 ? r : "") + o
}, p0 = "十百千萬", m0 = "拾佰仟萬", w0 = "マイナス", cc = "마이너스", Ws = function(e, A, t) {
    var r = t ? ". " : ""
      , n = t ? "、" : ""
      , i = t ? ", " : ""
      , s = t ? " " : "";
    switch (A) {
    case 0:
        return "•" + s;
    case 1:
        return "◦" + s;
    case 2:
        return "◾" + s;
    case 5:
        var o = yA(e, 48, 57, !0, r);
        return o.length < 4 ? "0" + o : o;
    case 4:
        return kr(e, "〇一二三四五六七八九", n);
    case 6:
        return vn(e, 1, 3999, g0, 3, r).toLowerCase();
    case 7:
        return vn(e, 1, 3999, g0, 3, r);
    case 8:
        return yA(e, 945, 969, !1, r);
    case 9:
        return yA(e, 97, 122, !1, r);
    case 10:
        return yA(e, 65, 90, !1, r);
    case 11:
        return yA(e, 1632, 1641, !0, r);
    case 12:
    case 49:
        return vn(e, 1, 9999, B0, 3, r);
    case 35:
        return vn(e, 1, 9999, B0, 3, r).toLowerCase();
    case 13:
        return yA(e, 2534, 2543, !0, r);
    case 14:
    case 30:
        return yA(e, 6112, 6121, !0, r);
    case 15:
        return kr(e, "子丑寅卯辰巳午未申酉戌亥", n);
    case 16:
        return kr(e, "甲乙丙丁戊己庚辛壬癸", n);
    case 17:
    case 48:
        return Ct(e, "零一二三四五六七八九", p0, "負", n, jt | zt | $i);
    case 47:
        return Ct(e, "零壹貳參肆伍陸柒捌玖", m0, "負", n, Un | jt | zt | $i);
    case 42:
        return Ct(e, "零一二三四五六七八九", p0, "负", n, jt | zt | $i);
    case 41:
        return Ct(e, "零壹贰叁肆伍陆柒捌玖", m0, "负", n, Un | jt | zt | $i);
    case 26:
        return Ct(e, "〇一二三四五六七八九", "十百千万", w0, n, 0);
    case 25:
        return Ct(e, "零壱弐参四伍六七八九", "拾百千万", w0, n, Un | jt | zt);
    case 31:
        return Ct(e, "영일이삼사오육칠팔구", "십백천만", cc, i, Un | jt | zt);
    case 33:
        return Ct(e, "零一二三四五六七八九", "十百千萬", cc, i, 0);
    case 32:
        return Ct(e, "零壹貳參四五六七八九", "拾百千", cc, i, Un | jt | zt);
    case 18:
        return yA(e, 2406, 2415, !0, r);
    case 20:
        return vn(e, 1, 19999, eL, 3, r);
    case 21:
        return yA(e, 2790, 2799, !0, r);
    case 22:
        return yA(e, 2662, 2671, !0, r);
    case 22:
        return vn(e, 1, 10999, AL, 3, r);
    case 23:
        return kr(e, "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをん");
    case 24:
        return kr(e, "いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす");
    case 27:
        return yA(e, 3302, 3311, !0, r);
    case 28:
        return kr(e, "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン", n);
    case 29:
        return kr(e, "イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセス", n);
    case 34:
        return yA(e, 3792, 3801, !0, r);
    case 37:
        return yA(e, 6160, 6169, !0, r);
    case 38:
        return yA(e, 4160, 4169, !0, r);
    case 39:
        return yA(e, 2918, 2927, !0, r);
    case 40:
        return yA(e, 1776, 1785, !0, r);
    case 43:
        return yA(e, 3046, 3055, !0, r);
    case 44:
        return yA(e, 3174, 3183, !0, r);
    case 45:
        return yA(e, 3664, 3673, !0, r);
    case 46:
        return yA(e, 3872, 3881, !0, r);
    case 3:
    default:
        return yA(e, 48, 57, !0, r)
    }
}, nQ = "data-html2canvas-ignore", y0 = function() {
    function e(A, t, r) {
        if (this.context = A,
        this.options = r,
        this.scrolledElements = [],
        this.referenceElement = t,
        this.counters = new qT,
        this.quoteDepth = 0,
        !t.ownerDocument)
            throw new Error("Cloned element does not have an owner document");
        this.documentElement = this.cloneNode(t.ownerDocument.documentElement, !1)
    }
    return e.prototype.toIFrame = function(A, t) {
        var r = this
          , n = tL(A, t);
        if (!n.contentWindow)
            return Promise.reject("Unable to find iframe window");
        var i = A.defaultView.pageXOffset
          , s = A.defaultView.pageYOffset
          , o = n.contentWindow
          , a = o.document
          , l = iL(n).then(function() {
            return Ae(r, void 0, void 0, function() {
                var u, c;
                return XA(this, function(f) {
                    switch (f.label) {
                    case 0:
                        return this.scrolledElements.forEach(lL),
                        o && (o.scrollTo(t.left, t.top),
                        /(iPad|iPhone|iPod)/g.test(navigator.userAgent) && (o.scrollY !== t.top || o.scrollX !== t.left) && (this.context.logger.warn("Unable to restore scroll position for cloned document"),
                        this.context.windowBounds = this.context.windowBounds.add(o.scrollX - t.left, o.scrollY - t.top, 0, 0))),
                        u = this.options.onclone,
                        c = this.clonedReferenceElement,
                        typeof c > "u" ? [2, Promise.reject("Error finding the " + this.referenceElement.nodeName + " in the cloned document")] : a.fonts && a.fonts.ready ? [4, a.fonts.ready] : [3, 2];
                    case 1:
                        f.sent(),
                        f.label = 2;
                    case 2:
                        return /(AppleWebKit)/g.test(navigator.userAgent) ? [4, nL(a)] : [3, 4];
                    case 3:
                        f.sent(),
                        f.label = 4;
                    case 4:
                        return typeof u == "function" ? [2, Promise.resolve().then(function() {
                            return u(a, c)
                        }).then(function() {
                            return n
                        })] : [2, n]
                    }
                })
            })
        });
        return a.open(),
        a.write(oL(document.doctype) + "<html></html>"),
        aL(this.referenceElement.ownerDocument, i, s),
        a.replaceChild(a.adoptNode(this.documentElement), a.documentElement),
        a.close(),
        l
    }
    ,
    e.prototype.createElementClone = function(A) {
        if (Zf(A, 2))
            debugger ;if (AQ(A))
            return this.createCanvasClone(A);
        if (f0(A))
            return this.createVideoClone(A);
        if (d0(A))
            return this.createStyleClone(A);
        var t = A.cloneNode(!1);
        return td(t) && (td(A) && A.currentSrc && A.currentSrc !== A.src && (t.src = A.currentSrc,
        t.srcset = ""),
        t.loading === "lazy" && (t.loading = "eager")),
        h0(t) ? this.createCustomElementClone(t) : t
    }
    ,
    e.prototype.createCustomElementClone = function(A) {
        var t = document.createElement("html2canvascustomelement");
        return fc(A.style, t),
        t
    }
    ,
    e.prototype.createStyleClone = function(A) {
        try {
            var t = A.sheet;
            if (t && t.cssRules) {
                var r = [].slice.call(t.cssRules, 0).reduce(function(i, s) {
                    return s && typeof s.cssText == "string" ? i + s.cssText : i
                }, "")
                  , n = A.cloneNode(!1);
                return n.textContent = r,
                n
            }
        } catch (i) {
            if (this.context.logger.error("Unable to access cssRules property", i),
            i.name !== "SecurityError")
                throw i
        }
        return A.cloneNode(!1)
    }
    ,
    e.prototype.createCanvasClone = function(A) {
        var t;
        if (this.options.inlineImages && A.ownerDocument) {
            var r = A.ownerDocument.createElement("img");
            try {
                return r.src = A.toDataURL(),
                r
            } catch {
                this.context.logger.info("Unable to inline canvas contents, canvas is tainted", A)
            }
        }
        var n = A.cloneNode(!1);
        try {
            n.width = A.width,
            n.height = A.height;
            var i = A.getContext("2d")
              , s = n.getContext("2d");
            if (s)
                if (!this.options.allowTaint && i)
                    s.putImageData(i.getImageData(0, 0, A.width, A.height), 0, 0);
                else {
                    var o = (t = A.getContext("webgl2")) !== null && t !== void 0 ? t : A.getContext("webgl");
                    if (o) {
                        var a = o.getContextAttributes();
                        (a == null ? void 0 : a.preserveDrawingBuffer) === !1 && this.context.logger.warn("Unable to clone WebGL context as it has preserveDrawingBuffer=false", A)
                    }
                    s.drawImage(A, 0, 0)
                }
            return n
        } catch {
            this.context.logger.info("Unable to clone canvas as it is tainted", A)
        }
        return n
    }
    ,
    e.prototype.createVideoClone = function(A) {
        var t = A.ownerDocument.createElement("canvas");
        t.width = A.offsetWidth,
        t.height = A.offsetHeight;
        var r = t.getContext("2d");
        try {
            return r && (r.drawImage(A, 0, 0, t.width, t.height),
            this.options.allowTaint || r.getImageData(0, 0, t.width, t.height)),
            t
        } catch {
            this.context.logger.info("Unable to clone video as it is tainted", A)
        }
        var n = A.ownerDocument.createElement("canvas");
        return n.width = A.offsetWidth,
        n.height = A.offsetHeight,
        n
    }
    ,
    e.prototype.appendChildNode = function(A, t, r) {
        (!jn(t) || !ZT(t) && !t.hasAttribute(nQ) && (typeof this.options.ignoreElements != "function" || !this.options.ignoreElements(t))) && (!this.options.copyStyles || !jn(t) || !d0(t)) && A.appendChild(this.cloneNode(t, r))
    }
    ,
    e.prototype.cloneChildNodes = function(A, t, r) {
        for (var n = this, i = A.shadowRoot ? A.shadowRoot.firstChild : A.firstChild; i; i = i.nextSibling)
            if (jn(i) && tQ(i) && typeof i.assignedNodes == "function") {
                var s = i.assignedNodes();
                s.length && s.forEach(function(o) {
                    return n.appendChildNode(t, o, r)
                })
            } else
                this.appendChildNode(t, i, r)
    }
    ,
    e.prototype.cloneNode = function(A, t) {
        if (Zv(A))
            return document.createTextNode(A.data);
        if (!A.ownerDocument)
            return A.cloneNode(!1);
        var r = A.ownerDocument.defaultView;
        if (r && jn(A) && (ed(A) || ya(A))) {
            var n = this.createElementClone(A);
            n.style.transitionProperty = "none";
            var i = r.getComputedStyle(A)
              , s = r.getComputedStyle(A, ":before")
              , o = r.getComputedStyle(A, ":after");
            this.referenceElement === A && ed(n) && (this.clonedReferenceElement = n),
            zh(n) && fL(n);
            var a = this.counters.parse(new $p(this.context,i))
              , l = this.resolvePseudoContent(A, n, s, ms.BEFORE);
            h0(A) && (t = !0),
            f0(A) || this.cloneChildNodes(A, n, t),
            l && n.insertBefore(l, n.firstChild);
            var u = this.resolvePseudoContent(A, n, o, ms.AFTER);
            return u && n.appendChild(u),
            this.counters.pop(a),
            (i && (this.options.copyStyles || ya(A)) && !eQ(A) || t) && fc(i, n),
            (A.scrollTop !== 0 || A.scrollLeft !== 0) && this.scrolledElements.push([n, A.scrollLeft, A.scrollTop]),
            (fl(A) || dl(A)) && (fl(n) || dl(n)) && (n.value = A.value),
            n
        }
        return A.cloneNode(!1)
    }
    ,
    e.prototype.resolvePseudoContent = function(A, t, r, n) {
        var i = this;
        if (r) {
            var s = r.content
              , o = t.ownerDocument;
            if (!(!o || !s || s === "none" || s === "-moz-alt-content" || r.display === "none")) {
                this.counters.parse(new $p(this.context,r));
                var a = new W2(this.context,r)
                  , l = o.createElement("html2canvaspseudoelement");
                fc(r, l),
                a.content.forEach(function(c) {
                    if (c.type === 0)
                        l.appendChild(o.createTextNode(c.value));
                    else if (c.type === 22) {
                        var f = o.createElement("img");
                        f.src = c.value,
                        f.style.opacity = "1",
                        l.appendChild(f)
                    } else if (c.type === 18) {
                        if (c.name === "attr") {
                            var d = c.values.filter(AA);
                            d.length && l.appendChild(o.createTextNode(A.getAttribute(d[0].value) || ""))
                        } else if (c.name === "counter") {
                            var B = c.values.filter(mi)
                              , h = B[0]
                              , y = B[1];
                            if (h && AA(h)) {
                                var p = i.counters.getCounterValue(h.value)
                                  , g = y && AA(y) ? $f.parse(i.context, y.value) : 3;
                                l.appendChild(o.createTextNode(Ws(p, g, !1)))
                            }
                        } else if (c.name === "counters") {
                            var m = c.values.filter(mi)
                              , h = m[0]
                              , C = m[1]
                              , y = m[2];
                            if (h && AA(h)) {
                                var v = i.counters.getCounterValues(h.value)
                                  , Q = y && AA(y) ? $f.parse(i.context, y.value) : 3
                                  , U = C && C.type === 0 ? C.value : ""
                                  , F = v.map(function(E) {
                                    return Ws(E, Q, !1)
                                }).join(U);
                                l.appendChild(o.createTextNode(F))
                            }
                        }
                    } else if (c.type === 20)
                        switch (c.value) {
                        case "open-quote":
                            l.appendChild(o.createTextNode(Jp(a.quotes, i.quoteDepth++, !0)));
                            break;
                        case "close-quote":
                            l.appendChild(o.createTextNode(Jp(a.quotes, --i.quoteDepth, !1)));
                            break;
                        default:
                            l.appendChild(o.createTextNode(c.value))
                        }
                }),
                l.className = rd + " " + nd;
                var u = n === ms.BEFORE ? " " + rd : " " + nd;
                return ya(t) ? t.className.baseValue += u : t.className += u,
                l
            }
        }
    }
    ,
    e.destroy = function(A) {
        return A.parentNode ? (A.parentNode.removeChild(A),
        !0) : !1
    }
    ,
    e
}(), ms;
(function(e) {
    e[e.BEFORE = 0] = "BEFORE",
    e[e.AFTER = 1] = "AFTER"
}
)(ms || (ms = {}));
var tL = function(e, A) {
    var t = e.createElement("iframe");
    return t.className = "html2canvas-container",
    t.style.visibility = "hidden",
    t.style.position = "fixed",
    t.style.left = "-10000px",
    t.style.top = "0px",
    t.style.border = "0",
    t.width = A.width.toString(),
    t.height = A.height.toString(),
    t.scrolling = "no",
    t.setAttribute(nQ, "true"),
    e.body.appendChild(t),
    t
}, rL = function(e) {
    return new Promise(function(A) {
        if (e.complete) {
            A();
            return
        }
        if (!e.src) {
            A();
            return
        }
        e.onload = A,
        e.onerror = A
    }
    )
}, nL = function(e) {
    return Promise.all([].slice.call(e.images, 0).map(rL))
}, iL = function(e) {
    return new Promise(function(A, t) {
        var r = e.contentWindow;
        if (!r)
            return t("No window assigned for iframe");
        var n = r.document;
        r.onload = e.onload = function() {
            r.onload = e.onload = null;
            var i = setInterval(function() {
                n.body.childNodes.length > 0 && n.readyState === "complete" && (clearInterval(i),
                A(e))
            }, 50)
        }
    }
    )
}, sL = ["all", "d", "content"], fc = function(e, A) {
    for (var t = e.length - 1; t >= 0; t--) {
        var r = e.item(t);
        sL.indexOf(r) === -1 && A.style.setProperty(r, e.getPropertyValue(r))
    }
    return A
}, oL = function(e) {
    var A = "";
    return e && (A += "<!DOCTYPE ",
    e.name && (A += e.name),
    e.internalSubset && (A += e.internalSubset),
    e.publicId && (A += '"' + e.publicId + '"'),
    e.systemId && (A += '"' + e.systemId + '"'),
    A += ">"),
    A
}, aL = function(e, A, t) {
    e && e.defaultView && (A !== e.defaultView.pageXOffset || t !== e.defaultView.pageYOffset) && e.defaultView.scrollTo(A, t)
}, lL = function(e) {
    var A = e[0]
      , t = e[1]
      , r = e[2];
    A.scrollLeft = t,
    A.scrollTop = r
}, uL = ":before", cL = ":after", rd = "___html2canvas___pseudoelement_before", nd = "___html2canvas___pseudoelement_after", C0 = `{
    content: "" !important;
    display: none !important;
}`, fL = function(e) {
    dL(e, "." + rd + uL + C0 + `
         .` + nd + cL + C0)
}, dL = function(e, A) {
    var t = e.ownerDocument;
    if (t) {
        var r = t.createElement("style");
        r.textContent = A,
        e.appendChild(r)
    }
}, iQ = function() {
    function e() {}
    return e.getOrigin = function(A) {
        var t = e._link;
        return t ? (t.href = A,
        t.href = t.href,
        t.protocol + t.hostname + t.port) : "about:blank"
    }
    ,
    e.isSameOrigin = function(A) {
        return e.getOrigin(A) === e._origin
    }
    ,
    e.setContext = function(A) {
        e._link = A.document.createElement("a"),
        e._origin = e.getOrigin(A.location.href)
    }
    ,
    e._origin = "about:blank",
    e
}(), hL = function() {
    function e(A, t) {
        this.context = A,
        this._options = t,
        this._cache = {}
    }
    return e.prototype.addImage = function(A) {
        var t = Promise.resolve();
        return this.has(A) || (hc(A) || mL(A)) && (this._cache[A] = this.loadImage(A)).catch(function() {}),
        t
    }
    ,
    e.prototype.match = function(A) {
        return this._cache[A]
    }
    ,
    e.prototype.loadImage = function(A) {
        return Ae(this, void 0, void 0, function() {
            var t, r, n, i, s = this;
            return XA(this, function(o) {
                switch (o.label) {
                case 0:
                    return t = iQ.isSameOrigin(A),
                    r = !dc(A) && this._options.useCORS === !0 && OA.SUPPORT_CORS_IMAGES && !t,
                    n = !dc(A) && !t && !hc(A) && typeof this._options.proxy == "string" && OA.SUPPORT_CORS_XHR && !r,
                    !t && this._options.allowTaint === !1 && !dc(A) && !hc(A) && !n && !r ? [2] : (i = A,
                    n ? [4, this.proxy(i)] : [3, 2]);
                case 1:
                    i = o.sent(),
                    o.label = 2;
                case 2:
                    return this.context.logger.debug("Added image " + A.substring(0, 256)),
                    [4, new Promise(function(a, l) {
                        var u = new Image;
                        u.onload = function() {
                            return a(u)
                        }
                        ,
                        u.onerror = l,
                        (wL(i) || r) && (u.crossOrigin = "anonymous"),
                        u.src = i,
                        u.complete === !0 && setTimeout(function() {
                            return a(u)
                        }, 500),
                        s._options.imageTimeout > 0 && setTimeout(function() {
                            return l("Timed out (" + s._options.imageTimeout + "ms) loading image")
                        }, s._options.imageTimeout)
                    }
                    )];
                case 3:
                    return [2, o.sent()]
                }
            })
        })
    }
    ,
    e.prototype.has = function(A) {
        return typeof this._cache[A] < "u"
    }
    ,
    e.prototype.keys = function() {
        return Promise.resolve(Object.keys(this._cache))
    }
    ,
    e.prototype.proxy = function(A) {
        var t = this
          , r = this._options.proxy;
        if (!r)
            throw new Error("No proxy defined");
        var n = A.substring(0, 256);
        return new Promise(function(i, s) {
            var o = OA.SUPPORT_RESPONSE_TYPE ? "blob" : "text"
              , a = new XMLHttpRequest;
            a.onload = function() {
                if (a.status === 200)
                    if (o === "text")
                        i(a.response);
                    else {
                        var c = new FileReader;
                        c.addEventListener("load", function() {
                            return i(c.result)
                        }, !1),
                        c.addEventListener("error", function(f) {
                            return s(f)
                        }, !1),
                        c.readAsDataURL(a.response)
                    }
                else
                    s("Failed to proxy resource " + n + " with status code " + a.status)
            }
            ,
            a.onerror = s;
            var l = r.indexOf("?") > -1 ? "&" : "?";
            if (a.open("GET", "" + r + l + "url=" + encodeURIComponent(A) + "&responseType=" + o),
            o !== "text" && a instanceof XMLHttpRequest && (a.responseType = o),
            t._options.imageTimeout) {
                var u = t._options.imageTimeout;
                a.timeout = u,
                a.ontimeout = function() {
                    return s("Timed out (" + u + "ms) proxying " + n)
                }
            }
            a.send()
        }
        )
    }
    ,
    e
}(), gL = /^data:image\/svg\+xml/i, BL = /^data:image\/.*;base64,/i, pL = /^data:image\/.*/i, mL = function(e) {
    return OA.SUPPORT_SVG_DRAWING || !yL(e)
}, dc = function(e) {
    return pL.test(e)
}, wL = function(e) {
    return BL.test(e)
}, hc = function(e) {
    return e.substr(0, 4) === "blob"
}, yL = function(e) {
    return e.substr(-3).toLowerCase() === "svg" || gL.test(e)
}, k = function() {
    function e(A, t) {
        this.type = 0,
        this.x = A,
        this.y = t
    }
    return e.prototype.add = function(A, t) {
        return new e(this.x + A,this.y + t)
    }
    ,
    e
}(), Qn = function(e, A, t) {
    return new k(e.x + (A.x - e.x) * t,e.y + (A.y - e.y) * t)
}, Jo = function() {
    function e(A, t, r, n) {
        this.type = 1,
        this.start = A,
        this.startControl = t,
        this.endControl = r,
        this.end = n
    }
    return e.prototype.subdivide = function(A, t) {
        var r = Qn(this.start, this.startControl, A)
          , n = Qn(this.startControl, this.endControl, A)
          , i = Qn(this.endControl, this.end, A)
          , s = Qn(r, n, A)
          , o = Qn(n, i, A)
          , a = Qn(s, o, A);
        return t ? new e(this.start,r,s,a) : new e(a,o,i,this.end)
    }
    ,
    e.prototype.add = function(A, t) {
        return new e(this.start.add(A, t),this.startControl.add(A, t),this.endControl.add(A, t),this.end.add(A, t))
    }
    ,
    e.prototype.reverse = function() {
        return new e(this.end,this.endControl,this.startControl,this.start)
    }
    ,
    e
}(), Ne = function(e) {
    return e.type === 1
}, CL = function() {
    function e(A) {
        var t = A.styles
          , r = A.bounds
          , n = Yi(t.borderTopLeftRadius, r.width, r.height)
          , i = n[0]
          , s = n[1]
          , o = Yi(t.borderTopRightRadius, r.width, r.height)
          , a = o[0]
          , l = o[1]
          , u = Yi(t.borderBottomRightRadius, r.width, r.height)
          , c = u[0]
          , f = u[1]
          , d = Yi(t.borderBottomLeftRadius, r.width, r.height)
          , B = d[0]
          , h = d[1]
          , y = [];
        y.push((i + a) / r.width),
        y.push((B + c) / r.width),
        y.push((s + h) / r.height),
        y.push((l + f) / r.height);
        var p = Math.max.apply(Math, y);
        p > 1 && (i /= p,
        s /= p,
        a /= p,
        l /= p,
        c /= p,
        f /= p,
        B /= p,
        h /= p);
        var g = r.width - a
          , m = r.height - f
          , C = r.width - c
          , v = r.height - h
          , Q = t.borderTopWidth
          , U = t.borderRightWidth
          , F = t.borderBottomWidth
          , x = t.borderLeftWidth
          , H = rA(t.paddingTop, A.bounds.width)
          , E = rA(t.paddingRight, A.bounds.width)
          , L = rA(t.paddingBottom, A.bounds.width)
          , b = rA(t.paddingLeft, A.bounds.width);
        this.topLeftBorderDoubleOuterBox = i > 0 || s > 0 ? lA(r.left + x / 3, r.top + Q / 3, i - x / 3, s - Q / 3, $.TOP_LEFT) : new k(r.left + x / 3,r.top + Q / 3),
        this.topRightBorderDoubleOuterBox = i > 0 || s > 0 ? lA(r.left + g, r.top + Q / 3, a - U / 3, l - Q / 3, $.TOP_RIGHT) : new k(r.left + r.width - U / 3,r.top + Q / 3),
        this.bottomRightBorderDoubleOuterBox = c > 0 || f > 0 ? lA(r.left + C, r.top + m, c - U / 3, f - F / 3, $.BOTTOM_RIGHT) : new k(r.left + r.width - U / 3,r.top + r.height - F / 3),
        this.bottomLeftBorderDoubleOuterBox = B > 0 || h > 0 ? lA(r.left + x / 3, r.top + v, B - x / 3, h - F / 3, $.BOTTOM_LEFT) : new k(r.left + x / 3,r.top + r.height - F / 3),
        this.topLeftBorderDoubleInnerBox = i > 0 || s > 0 ? lA(r.left + x * 2 / 3, r.top + Q * 2 / 3, i - x * 2 / 3, s - Q * 2 / 3, $.TOP_LEFT) : new k(r.left + x * 2 / 3,r.top + Q * 2 / 3),
        this.topRightBorderDoubleInnerBox = i > 0 || s > 0 ? lA(r.left + g, r.top + Q * 2 / 3, a - U * 2 / 3, l - Q * 2 / 3, $.TOP_RIGHT) : new k(r.left + r.width - U * 2 / 3,r.top + Q * 2 / 3),
        this.bottomRightBorderDoubleInnerBox = c > 0 || f > 0 ? lA(r.left + C, r.top + m, c - U * 2 / 3, f - F * 2 / 3, $.BOTTOM_RIGHT) : new k(r.left + r.width - U * 2 / 3,r.top + r.height - F * 2 / 3),
        this.bottomLeftBorderDoubleInnerBox = B > 0 || h > 0 ? lA(r.left + x * 2 / 3, r.top + v, B - x * 2 / 3, h - F * 2 / 3, $.BOTTOM_LEFT) : new k(r.left + x * 2 / 3,r.top + r.height - F * 2 / 3),
        this.topLeftBorderStroke = i > 0 || s > 0 ? lA(r.left + x / 2, r.top + Q / 2, i - x / 2, s - Q / 2, $.TOP_LEFT) : new k(r.left + x / 2,r.top + Q / 2),
        this.topRightBorderStroke = i > 0 || s > 0 ? lA(r.left + g, r.top + Q / 2, a - U / 2, l - Q / 2, $.TOP_RIGHT) : new k(r.left + r.width - U / 2,r.top + Q / 2),
        this.bottomRightBorderStroke = c > 0 || f > 0 ? lA(r.left + C, r.top + m, c - U / 2, f - F / 2, $.BOTTOM_RIGHT) : new k(r.left + r.width - U / 2,r.top + r.height - F / 2),
        this.bottomLeftBorderStroke = B > 0 || h > 0 ? lA(r.left + x / 2, r.top + v, B - x / 2, h - F / 2, $.BOTTOM_LEFT) : new k(r.left + x / 2,r.top + r.height - F / 2),
        this.topLeftBorderBox = i > 0 || s > 0 ? lA(r.left, r.top, i, s, $.TOP_LEFT) : new k(r.left,r.top),
        this.topRightBorderBox = a > 0 || l > 0 ? lA(r.left + g, r.top, a, l, $.TOP_RIGHT) : new k(r.left + r.width,r.top),
        this.bottomRightBorderBox = c > 0 || f > 0 ? lA(r.left + C, r.top + m, c, f, $.BOTTOM_RIGHT) : new k(r.left + r.width,r.top + r.height),
        this.bottomLeftBorderBox = B > 0 || h > 0 ? lA(r.left, r.top + v, B, h, $.BOTTOM_LEFT) : new k(r.left,r.top + r.height),
        this.topLeftPaddingBox = i > 0 || s > 0 ? lA(r.left + x, r.top + Q, Math.max(0, i - x), Math.max(0, s - Q), $.TOP_LEFT) : new k(r.left + x,r.top + Q),
        this.topRightPaddingBox = a > 0 || l > 0 ? lA(r.left + Math.min(g, r.width - U), r.top + Q, g > r.width + U ? 0 : Math.max(0, a - U), Math.max(0, l - Q), $.TOP_RIGHT) : new k(r.left + r.width - U,r.top + Q),
        this.bottomRightPaddingBox = c > 0 || f > 0 ? lA(r.left + Math.min(C, r.width - x), r.top + Math.min(m, r.height - F), Math.max(0, c - U), Math.max(0, f - F), $.BOTTOM_RIGHT) : new k(r.left + r.width - U,r.top + r.height - F),
        this.bottomLeftPaddingBox = B > 0 || h > 0 ? lA(r.left + x, r.top + Math.min(v, r.height - F), Math.max(0, B - x), Math.max(0, h - F), $.BOTTOM_LEFT) : new k(r.left + x,r.top + r.height - F),
        this.topLeftContentBox = i > 0 || s > 0 ? lA(r.left + x + b, r.top + Q + H, Math.max(0, i - (x + b)), Math.max(0, s - (Q + H)), $.TOP_LEFT) : new k(r.left + x + b,r.top + Q + H),
        this.topRightContentBox = a > 0 || l > 0 ? lA(r.left + Math.min(g, r.width + x + b), r.top + Q + H, g > r.width + x + b ? 0 : a - x + b, l - (Q + H), $.TOP_RIGHT) : new k(r.left + r.width - (U + E),r.top + Q + H),
        this.bottomRightContentBox = c > 0 || f > 0 ? lA(r.left + Math.min(C, r.width - (x + b)), r.top + Math.min(m, r.height + Q + H), Math.max(0, c - (U + E)), f - (F + L), $.BOTTOM_RIGHT) : new k(r.left + r.width - (U + E),r.top + r.height - (F + L)),
        this.bottomLeftContentBox = B > 0 || h > 0 ? lA(r.left + x + b, r.top + v, Math.max(0, B - (x + b)), h - (F + L), $.BOTTOM_LEFT) : new k(r.left + x + b,r.top + r.height - (F + L))
    }
    return e
}(), $;
(function(e) {
    e[e.TOP_LEFT = 0] = "TOP_LEFT",
    e[e.TOP_RIGHT = 1] = "TOP_RIGHT",
    e[e.BOTTOM_RIGHT = 2] = "BOTTOM_RIGHT",
    e[e.BOTTOM_LEFT = 3] = "BOTTOM_LEFT"
}
)($ || ($ = {}));
var lA = function(e, A, t, r, n) {
    var i = 4 * ((Math.sqrt(2) - 1) / 3)
      , s = t * i
      , o = r * i
      , a = e + t
      , l = A + r;
    switch (n) {
    case $.TOP_LEFT:
        return new Jo(new k(e,l),new k(e,l - o),new k(a - s,A),new k(a,A));
    case $.TOP_RIGHT:
        return new Jo(new k(e,A),new k(e + s,A),new k(a,l - o),new k(a,l));
    case $.BOTTOM_RIGHT:
        return new Jo(new k(a,A),new k(a,A + o),new k(e + s,l),new k(e,l));
    case $.BOTTOM_LEFT:
    default:
        return new Jo(new k(a,l),new k(a - s,l),new k(e,A + o),new k(e,A))
    }
}
  , hl = function(e) {
    return [e.topLeftBorderBox, e.topRightBorderBox, e.bottomRightBorderBox, e.bottomLeftBorderBox]
}
  , vL = function(e) {
    return [e.topLeftContentBox, e.topRightContentBox, e.bottomRightContentBox, e.bottomLeftContentBox]
}
  , gl = function(e) {
    return [e.topLeftPaddingBox, e.topRightPaddingBox, e.bottomRightPaddingBox, e.bottomLeftPaddingBox]
}
  , QL = function() {
    function e(A, t, r) {
        this.offsetX = A,
        this.offsetY = t,
        this.matrix = r,
        this.type = 0,
        this.target = 6
    }
    return e
}()
  , $o = function() {
    function e(A, t) {
        this.path = A,
        this.target = t,
        this.type = 1
    }
    return e
}()
  , FL = function() {
    function e(A) {
        this.opacity = A,
        this.type = 2,
        this.target = 6
    }
    return e
}()
  , UL = function(e) {
    return e.type === 0
}
  , sQ = function(e) {
    return e.type === 1
}
  , xL = function(e) {
    return e.type === 2
}
  , v0 = function(e, A) {
    return e.length === A.length ? e.some(function(t, r) {
        return t === A[r]
    }) : !1
}
  , EL = function(e, A, t, r, n) {
    return e.map(function(i, s) {
        switch (s) {
        case 0:
            return i.add(A, t);
        case 1:
            return i.add(A + r, t);
        case 2:
            return i.add(A + r, t + n);
        case 3:
            return i.add(A, t + n)
        }
        return i
    })
}
  , oQ = function() {
    function e(A) {
        this.element = A,
        this.inlineLevel = [],
        this.nonInlineLevel = [],
        this.negativeZIndex = [],
        this.zeroOrAutoZIndexOrTransformedOrOpacity = [],
        this.positiveZIndex = [],
        this.nonPositionedFloats = [],
        this.nonPositionedInlineLevel = []
    }
    return e
}()
  , aQ = function() {
    function e(A, t) {
        if (this.container = A,
        this.parent = t,
        this.effects = [],
        this.curves = new CL(this.container),
        this.container.styles.opacity < 1 && this.effects.push(new FL(this.container.styles.opacity)),
        this.container.styles.transform !== null) {
            var r = this.container.bounds.left + this.container.styles.transformOrigin[0].number
              , n = this.container.bounds.top + this.container.styles.transformOrigin[1].number
              , i = this.container.styles.transform;
            this.effects.push(new QL(r,n,i))
        }
        if (this.container.styles.overflowX !== 0) {
            var s = hl(this.curves)
              , o = gl(this.curves);
            v0(s, o) ? this.effects.push(new $o(s,6)) : (this.effects.push(new $o(s,2)),
            this.effects.push(new $o(o,4)))
        }
    }
    return e.prototype.getEffects = function(A) {
        for (var t = [2, 3].indexOf(this.container.styles.position) === -1, r = this.parent, n = this.effects.slice(0); r; ) {
            var i = r.effects.filter(function(a) {
                return !sQ(a)
            });
            if (t || r.container.styles.position !== 0 || !r.parent) {
                if (n.unshift.apply(n, i),
                t = [2, 3].indexOf(r.container.styles.position) === -1,
                r.container.styles.overflowX !== 0) {
                    var s = hl(r.curves)
                      , o = gl(r.curves);
                    v0(s, o) || n.unshift(new $o(o,6))
                }
            } else
                n.unshift.apply(n, i);
            r = r.parent
        }
        return n.filter(function(a) {
            return LA(a.target, A)
        })
    }
    ,
    e
}()
  , id = function(e, A, t, r) {
    e.container.elements.forEach(function(n) {
        var i = LA(n.flags, 4)
          , s = LA(n.flags, 2)
          , o = new aQ(n,e);
        LA(n.styles.display, 2048) && r.push(o);
        var a = LA(n.flags, 8) ? [] : r;
        if (i || s) {
            var l = i || n.styles.isPositioned() ? t : A
              , u = new oQ(o);
            if (n.styles.isPositioned() || n.styles.opacity < 1 || n.styles.isTransformed()) {
                var c = n.styles.zIndex.order;
                if (c < 0) {
                    var f = 0;
                    l.negativeZIndex.some(function(B, h) {
                        return c > B.element.container.styles.zIndex.order ? (f = h,
                        !1) : f > 0
                    }),
                    l.negativeZIndex.splice(f, 0, u)
                } else if (c > 0) {
                    var d = 0;
                    l.positiveZIndex.some(function(B, h) {
                        return c >= B.element.container.styles.zIndex.order ? (d = h + 1,
                        !1) : d > 0
                    }),
                    l.positiveZIndex.splice(d, 0, u)
                } else
                    l.zeroOrAutoZIndexOrTransformedOrOpacity.push(u)
            } else
                n.styles.isFloating() ? l.nonPositionedFloats.push(u) : l.nonPositionedInlineLevel.push(u);
            id(o, u, i ? u : t, a)
        } else
            n.styles.isInlineLevel() ? A.inlineLevel.push(o) : A.nonInlineLevel.push(o),
            id(o, A, t, a);
        LA(n.flags, 8) && lQ(n, a)
    })
}
  , lQ = function(e, A) {
    for (var t = e instanceof Ad ? e.start : 1, r = e instanceof Ad ? e.reversed : !1, n = 0; n < A.length; n++) {
        var i = A[n];
        i.container instanceof zv && typeof i.container.value == "number" && i.container.value !== 0 && (t = i.container.value),
        i.listValue = Ws(t, i.container.styles.listStyleType, !0),
        t += r ? -1 : 1
    }
}
  , IL = function(e) {
    var A = new aQ(e,null)
      , t = new oQ(A)
      , r = [];
    return id(A, t, t, r),
    lQ(A.container, r),
    t
}
  , Q0 = function(e, A) {
    switch (A) {
    case 0:
        return Xe(e.topLeftBorderBox, e.topLeftPaddingBox, e.topRightBorderBox, e.topRightPaddingBox);
    case 1:
        return Xe(e.topRightBorderBox, e.topRightPaddingBox, e.bottomRightBorderBox, e.bottomRightPaddingBox);
    case 2:
        return Xe(e.bottomRightBorderBox, e.bottomRightPaddingBox, e.bottomLeftBorderBox, e.bottomLeftPaddingBox);
    case 3:
    default:
        return Xe(e.bottomLeftBorderBox, e.bottomLeftPaddingBox, e.topLeftBorderBox, e.topLeftPaddingBox)
    }
}
  , HL = function(e, A) {
    switch (A) {
    case 0:
        return Xe(e.topLeftBorderBox, e.topLeftBorderDoubleOuterBox, e.topRightBorderBox, e.topRightBorderDoubleOuterBox);
    case 1:
        return Xe(e.topRightBorderBox, e.topRightBorderDoubleOuterBox, e.bottomRightBorderBox, e.bottomRightBorderDoubleOuterBox);
    case 2:
        return Xe(e.bottomRightBorderBox, e.bottomRightBorderDoubleOuterBox, e.bottomLeftBorderBox, e.bottomLeftBorderDoubleOuterBox);
    case 3:
    default:
        return Xe(e.bottomLeftBorderBox, e.bottomLeftBorderDoubleOuterBox, e.topLeftBorderBox, e.topLeftBorderDoubleOuterBox)
    }
}
  , _L = function(e, A) {
    switch (A) {
    case 0:
        return Xe(e.topLeftBorderDoubleInnerBox, e.topLeftPaddingBox, e.topRightBorderDoubleInnerBox, e.topRightPaddingBox);
    case 1:
        return Xe(e.topRightBorderDoubleInnerBox, e.topRightPaddingBox, e.bottomRightBorderDoubleInnerBox, e.bottomRightPaddingBox);
    case 2:
        return Xe(e.bottomRightBorderDoubleInnerBox, e.bottomRightPaddingBox, e.bottomLeftBorderDoubleInnerBox, e.bottomLeftPaddingBox);
    case 3:
    default:
        return Xe(e.bottomLeftBorderDoubleInnerBox, e.bottomLeftPaddingBox, e.topLeftBorderDoubleInnerBox, e.topLeftPaddingBox)
    }
}
  , SL = function(e, A) {
    switch (A) {
    case 0:
        return Zo(e.topLeftBorderStroke, e.topRightBorderStroke);
    case 1:
        return Zo(e.topRightBorderStroke, e.bottomRightBorderStroke);
    case 2:
        return Zo(e.bottomRightBorderStroke, e.bottomLeftBorderStroke);
    case 3:
    default:
        return Zo(e.bottomLeftBorderStroke, e.topLeftBorderStroke)
    }
}
  , Zo = function(e, A) {
    var t = [];
    return Ne(e) ? t.push(e.subdivide(.5, !1)) : t.push(e),
    Ne(A) ? t.push(A.subdivide(.5, !0)) : t.push(A),
    t
}
  , Xe = function(e, A, t, r) {
    var n = [];
    return Ne(e) ? n.push(e.subdivide(.5, !1)) : n.push(e),
    Ne(t) ? n.push(t.subdivide(.5, !0)) : n.push(t),
    Ne(r) ? n.push(r.subdivide(.5, !0).reverse()) : n.push(r),
    Ne(A) ? n.push(A.subdivide(.5, !1).reverse()) : n.push(A),
    n
}
  , uQ = function(e) {
    var A = e.bounds
      , t = e.styles;
    return A.add(t.borderLeftWidth, t.borderTopWidth, -(t.borderRightWidth + t.borderLeftWidth), -(t.borderTopWidth + t.borderBottomWidth))
}
  , Bl = function(e) {
    var A = e.styles
      , t = e.bounds
      , r = rA(A.paddingLeft, t.width)
      , n = rA(A.paddingRight, t.width)
      , i = rA(A.paddingTop, t.width)
      , s = rA(A.paddingBottom, t.width);
    return t.add(r + A.borderLeftWidth, i + A.borderTopWidth, -(A.borderRightWidth + A.borderLeftWidth + r + n), -(A.borderTopWidth + A.borderBottomWidth + i + s))
}
  , TL = function(e, A) {
    return e === 0 ? A.bounds : e === 2 ? Bl(A) : uQ(A)
}
  , LL = function(e, A) {
    return e === 0 ? A.bounds : e === 2 ? Bl(A) : uQ(A)
}
  , gc = function(e, A, t) {
    var r = TL(xn(e.styles.backgroundOrigin, A), e)
      , n = LL(xn(e.styles.backgroundClip, A), e)
      , i = bL(xn(e.styles.backgroundSize, A), t, r)
      , s = i[0]
      , o = i[1]
      , a = Yi(xn(e.styles.backgroundPosition, A), r.width - s, r.height - o)
      , l = DL(xn(e.styles.backgroundRepeat, A), a, i, r, n)
      , u = Math.round(r.left + a[0])
      , c = Math.round(r.top + a[1]);
    return [l, u, c, s, o]
}
  , Fn = function(e) {
    return AA(e) && e.value === ti.AUTO
}
  , qo = function(e) {
    return typeof e == "number"
}
  , bL = function(e, A, t) {
    var r = A[0]
      , n = A[1]
      , i = A[2]
      , s = e[0]
      , o = e[1];
    if (!s)
        return [0, 0];
    if (_A(s) && o && _A(o))
        return [rA(s, t.width), rA(o, t.height)];
    var a = qo(i);
    if (AA(s) && (s.value === ti.CONTAIN || s.value === ti.COVER)) {
        if (qo(i)) {
            var l = t.width / t.height;
            return l < i != (s.value === ti.COVER) ? [t.width, t.width / i] : [t.height * i, t.height]
        }
        return [t.width, t.height]
    }
    var u = qo(r)
      , c = qo(n)
      , f = u || c;
    if (Fn(s) && (!o || Fn(o))) {
        if (u && c)
            return [r, n];
        if (!a && !f)
            return [t.width, t.height];
        if (f && a) {
            var d = u ? r : n * i
              , B = c ? n : r / i;
            return [d, B]
        }
        var h = u ? r : t.width
          , y = c ? n : t.height;
        return [h, y]
    }
    if (a) {
        var p = 0
          , g = 0;
        return _A(s) ? p = rA(s, t.width) : _A(o) && (g = rA(o, t.height)),
        Fn(s) ? p = g * i : (!o || Fn(o)) && (g = p / i),
        [p, g]
    }
    var m = null
      , C = null;
    if (_A(s) ? m = rA(s, t.width) : o && _A(o) && (C = rA(o, t.height)),
    m !== null && (!o || Fn(o)) && (C = u && c ? m / r * n : t.height),
    C !== null && Fn(s) && (m = u && c ? C / n * r : t.width),
    m !== null && C !== null)
        return [m, C];
    throw new Error("Unable to calculate background-size for element")
}
  , xn = function(e, A) {
    var t = e[A];
    return typeof t > "u" ? e[0] : t
}
  , DL = function(e, A, t, r, n) {
    var i = A[0]
      , s = A[1]
      , o = t[0]
      , a = t[1];
    switch (e) {
    case 2:
        return [new k(Math.round(r.left),Math.round(r.top + s)), new k(Math.round(r.left + r.width),Math.round(r.top + s)), new k(Math.round(r.left + r.width),Math.round(a + r.top + s)), new k(Math.round(r.left),Math.round(a + r.top + s))];
    case 3:
        return [new k(Math.round(r.left + i),Math.round(r.top)), new k(Math.round(r.left + i + o),Math.round(r.top)), new k(Math.round(r.left + i + o),Math.round(r.height + r.top)), new k(Math.round(r.left + i),Math.round(r.height + r.top))];
    case 1:
        return [new k(Math.round(r.left + i),Math.round(r.top + s)), new k(Math.round(r.left + i + o),Math.round(r.top + s)), new k(Math.round(r.left + i + o),Math.round(r.top + s + a)), new k(Math.round(r.left + i),Math.round(r.top + s + a))];
    default:
        return [new k(Math.round(n.left),Math.round(n.top)), new k(Math.round(n.left + n.width),Math.round(n.top)), new k(Math.round(n.left + n.width),Math.round(n.height + n.top)), new k(Math.round(n.left),Math.round(n.height + n.top))]
    }
}
  , kL = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
  , F0 = "Hidden Text"
  , ML = function() {
    function e(A) {
        this._data = {},
        this._document = A
    }
    return e.prototype.parseMetrics = function(A, t) {
        var r = this._document.createElement("div")
          , n = this._document.createElement("img")
          , i = this._document.createElement("span")
          , s = this._document.body;
        r.style.visibility = "hidden",
        r.style.fontFamily = A,
        r.style.fontSize = t,
        r.style.margin = "0",
        r.style.padding = "0",
        r.style.whiteSpace = "nowrap",
        s.appendChild(r),
        n.src = kL,
        n.width = 1,
        n.height = 1,
        n.style.margin = "0",
        n.style.padding = "0",
        n.style.verticalAlign = "baseline",
        i.style.fontFamily = A,
        i.style.fontSize = t,
        i.style.margin = "0",
        i.style.padding = "0",
        i.appendChild(this._document.createTextNode(F0)),
        r.appendChild(i),
        r.appendChild(n);
        var o = n.offsetTop - i.offsetTop + 2;
        r.removeChild(i),
        r.appendChild(this._document.createTextNode(F0)),
        r.style.lineHeight = "normal",
        n.style.verticalAlign = "super";
        var a = n.offsetTop - r.offsetTop + 2;
        return s.removeChild(r),
        {
            baseline: o,
            middle: a
        }
    }
    ,
    e.prototype.getMetrics = function(A, t) {
        var r = A + " " + t;
        return typeof this._data[r] > "u" && (this._data[r] = this.parseMetrics(A, t)),
        this._data[r]
    }
    ,
    e
}()
  , cQ = function() {
    function e(A, t) {
        this.context = A,
        this.options = t
    }
    return e
}()
  , KL = 1e4
  , PL = function(e) {
    st(A, e);
    function A(t, r) {
        var n = e.call(this, t, r) || this;
        return n._activeEffects = [],
        n.canvas = r.canvas ? r.canvas : document.createElement("canvas"),
        n.ctx = n.canvas.getContext("2d"),
        r.canvas || (n.canvas.width = Math.floor(r.width * r.scale),
        n.canvas.height = Math.floor(r.height * r.scale),
        n.canvas.style.width = r.width + "px",
        n.canvas.style.height = r.height + "px"),
        n.fontMetrics = new ML(document),
        n.ctx.scale(n.options.scale, n.options.scale),
        n.ctx.translate(-r.x, -r.y),
        n.ctx.textBaseline = "bottom",
        n._activeEffects = [],
        n.context.logger.debug("Canvas renderer initialized (" + r.width + "x" + r.height + ") with scale " + r.scale),
        n
    }
    return A.prototype.applyEffects = function(t) {
        for (var r = this; this._activeEffects.length; )
            this.popEffect();
        t.forEach(function(n) {
            return r.applyEffect(n)
        })
    }
    ,
    A.prototype.applyEffect = function(t) {
        this.ctx.save(),
        xL(t) && (this.ctx.globalAlpha = t.opacity),
        UL(t) && (this.ctx.translate(t.offsetX, t.offsetY),
        this.ctx.transform(t.matrix[0], t.matrix[1], t.matrix[2], t.matrix[3], t.matrix[4], t.matrix[5]),
        this.ctx.translate(-t.offsetX, -t.offsetY)),
        sQ(t) && (this.path(t.path),
        this.ctx.clip()),
        this._activeEffects.push(t)
    }
    ,
    A.prototype.popEffect = function() {
        this._activeEffects.pop(),
        this.ctx.restore()
    }
    ,
    A.prototype.renderStack = function(t) {
        return Ae(this, void 0, void 0, function() {
            var r;
            return XA(this, function(n) {
                switch (n.label) {
                case 0:
                    return r = t.element.container.styles,
                    r.isVisible() ? [4, this.renderStackContent(t)] : [3, 2];
                case 1:
                    n.sent(),
                    n.label = 2;
                case 2:
                    return [2]
                }
            })
        })
    }
    ,
    A.prototype.renderNode = function(t) {
        return Ae(this, void 0, void 0, function() {
            return XA(this, function(r) {
                switch (r.label) {
                case 0:
                    if (LA(t.container.flags, 16))
                        debugger ;return t.container.styles.isVisible() ? [4, this.renderNodeBackgroundAndBorders(t)] : [3, 3];
                case 1:
                    return r.sent(),
                    [4, this.renderNodeContent(t)];
                case 2:
                    r.sent(),
                    r.label = 3;
                case 3:
                    return [2]
                }
            })
        })
    }
    ,
    A.prototype.renderTextWithLetterSpacing = function(t, r, n) {
        var i = this;
        if (r === 0)
            this.ctx.fillText(t.text, t.bounds.left, t.bounds.top + n);
        else {
            var s = Gh(t.text);
            s.reduce(function(o, a) {
                return i.ctx.fillText(a, o, t.bounds.top + n),
                o + i.ctx.measureText(a).width
            }, t.bounds.left)
        }
    }
    ,
    A.prototype.createFontStyle = function(t) {
        var r = t.fontVariant.filter(function(s) {
            return s === "normal" || s === "small-caps"
        }).join("")
          , n = GL(t.fontFamily).join(", ")
          , i = so(t.fontSize) ? "" + t.fontSize.number + t.fontSize.unit : t.fontSize.number + "px";
        return [[t.fontStyle, r, t.fontWeight, i, n].join(" "), n, i]
    }
    ,
    A.prototype.renderTextNode = function(t, r) {
        return Ae(this, void 0, void 0, function() {
            var n, i, s, o, a, l, u, c, f = this;
            return XA(this, function(d) {
                return n = this.createFontStyle(r),
                i = n[0],
                s = n[1],
                o = n[2],
                this.ctx.font = i,
                this.ctx.direction = r.direction === 1 ? "rtl" : "ltr",
                this.ctx.textAlign = "left",
                this.ctx.textBaseline = "alphabetic",
                a = this.fontMetrics.getMetrics(s, o),
                l = a.baseline,
                u = a.middle,
                c = r.paintOrder,
                t.textBounds.forEach(function(B) {
                    c.forEach(function(h) {
                        switch (h) {
                        case 0:
                            f.ctx.fillStyle = DA(r.color),
                            f.renderTextWithLetterSpacing(B, r.letterSpacing, l);
                            var y = r.textShadow;
                            y.length && B.text.trim().length && (y.slice(0).reverse().forEach(function(p) {
                                f.ctx.shadowColor = DA(p.color),
                                f.ctx.shadowOffsetX = p.offsetX.number * f.options.scale,
                                f.ctx.shadowOffsetY = p.offsetY.number * f.options.scale,
                                f.ctx.shadowBlur = p.blur.number,
                                f.renderTextWithLetterSpacing(B, r.letterSpacing, l)
                            }),
                            f.ctx.shadowColor = "",
                            f.ctx.shadowOffsetX = 0,
                            f.ctx.shadowOffsetY = 0,
                            f.ctx.shadowBlur = 0),
                            r.textDecorationLine.length && (f.ctx.fillStyle = DA(r.textDecorationColor || r.color),
                            r.textDecorationLine.forEach(function(p) {
                                switch (p) {
                                case 1:
                                    f.ctx.fillRect(B.bounds.left, Math.round(B.bounds.top + l), B.bounds.width, 1);
                                    break;
                                case 2:
                                    f.ctx.fillRect(B.bounds.left, Math.round(B.bounds.top), B.bounds.width, 1);
                                    break;
                                case 3:
                                    f.ctx.fillRect(B.bounds.left, Math.ceil(B.bounds.top + u), B.bounds.width, 1);
                                    break
                                }
                            }));
                            break;
                        case 1:
                            r.webkitTextStrokeWidth && B.text.trim().length && (f.ctx.strokeStyle = DA(r.webkitTextStrokeColor),
                            f.ctx.lineWidth = r.webkitTextStrokeWidth,
                            f.ctx.lineJoin = window.chrome ? "miter" : "round",
                            f.ctx.strokeText(B.text, B.bounds.left, B.bounds.top + l)),
                            f.ctx.strokeStyle = "",
                            f.ctx.lineWidth = 0,
                            f.ctx.lineJoin = "miter";
                            break
                        }
                    })
                }),
                [2]
            })
        })
    }
    ,
    A.prototype.renderReplacedElement = function(t, r, n) {
        if (n && t.intrinsicWidth > 0 && t.intrinsicHeight > 0) {
            var i = Bl(t)
              , s = gl(r);
            this.path(s),
            this.ctx.save(),
            this.ctx.clip(),
            this.ctx.drawImage(n, 0, 0, t.intrinsicWidth, t.intrinsicHeight, i.left, i.top, i.width, i.height),
            this.ctx.restore()
        }
    }
    ,
    A.prototype.renderNodeContent = function(t) {
        return Ae(this, void 0, void 0, function() {
            var r, n, i, s, o, a, g, g, l, u, c, f, C, d, B, v, h, y, p, g, m, C, v;
            return XA(this, function(Q) {
                switch (Q.label) {
                case 0:
                    this.applyEffects(t.getEffects(4)),
                    r = t.container,
                    n = t.curves,
                    i = r.styles,
                    s = 0,
                    o = r.textNodes,
                    Q.label = 1;
                case 1:
                    return s < o.length ? (a = o[s],
                    [4, this.renderTextNode(a, i)]) : [3, 4];
                case 2:
                    Q.sent(),
                    Q.label = 3;
                case 3:
                    return s++,
                    [3, 1];
                case 4:
                    if (!(r instanceof Vv))
                        return [3, 8];
                    Q.label = 5;
                case 5:
                    return Q.trys.push([5, 7, , 8]),
                    [4, this.context.cache.match(r.src)];
                case 6:
                    return g = Q.sent(),
                    this.renderReplacedElement(r, n, g),
                    [3, 8];
                case 7:
                    return Q.sent(),
                    this.context.logger.error("Error loading image " + r.src),
                    [3, 8];
                case 8:
                    if (r instanceof Gv && this.renderReplacedElement(r, n, r.canvas),
                    !(r instanceof jv))
                        return [3, 12];
                    Q.label = 9;
                case 9:
                    return Q.trys.push([9, 11, , 12]),
                    [4, this.context.cache.match(r.svg)];
                case 10:
                    return g = Q.sent(),
                    this.renderReplacedElement(r, n, g),
                    [3, 12];
                case 11:
                    return Q.sent(),
                    this.context.logger.error("Error loading svg " + r.svg.substring(0, 255)),
                    [3, 12];
                case 12:
                    return r instanceof Yv && r.tree ? (l = new A(this.context,{
                        scale: this.options.scale,
                        backgroundColor: r.backgroundColor,
                        x: 0,
                        y: 0,
                        width: r.width,
                        height: r.height
                    }),
                    [4, l.render(r.tree)]) : [3, 14];
                case 13:
                    u = Q.sent(),
                    r.width && r.height && this.ctx.drawImage(u, 0, 0, r.width, r.height, r.bounds.left, r.bounds.top, r.bounds.width, r.bounds.height),
                    Q.label = 14;
                case 14:
                    if (r instanceof jh && (c = Math.min(r.bounds.width, r.bounds.height),
                    r.type === ul ? r.checked && (this.ctx.save(),
                    this.path([new k(r.bounds.left + c * .39363,r.bounds.top + c * .79), new k(r.bounds.left + c * .16,r.bounds.top + c * .5549), new k(r.bounds.left + c * .27347,r.bounds.top + c * .44071), new k(r.bounds.left + c * .39694,r.bounds.top + c * .5649), new k(r.bounds.left + c * .72983,r.bounds.top + c * .23), new k(r.bounds.left + c * .84,r.bounds.top + c * .34085), new k(r.bounds.left + c * .39363,r.bounds.top + c * .79)]),
                    this.ctx.fillStyle = DA(c0),
                    this.ctx.fill(),
                    this.ctx.restore()) : r.type === cl && r.checked && (this.ctx.save(),
                    this.ctx.beginPath(),
                    this.ctx.arc(r.bounds.left + c / 2, r.bounds.top + c / 2, c / 4, 0, Math.PI * 2, !0),
                    this.ctx.fillStyle = DA(c0),
                    this.ctx.fill(),
                    this.ctx.restore())),
                    OL(r) && r.value.length) {
                        switch (f = this.createFontStyle(i),
                        C = f[0],
                        d = f[1],
                        B = this.fontMetrics.getMetrics(C, d).baseline,
                        this.ctx.font = C,
                        this.ctx.fillStyle = DA(i.color),
                        this.ctx.textBaseline = "alphabetic",
                        this.ctx.textAlign = RL(r.styles.textAlign),
                        v = Bl(r),
                        h = 0,
                        r.styles.textAlign) {
                        case 1:
                            h += v.width / 2;
                            break;
                        case 2:
                            h += v.width;
                            break
                        }
                        y = v.add(h, 0, 0, -v.height / 2 + 1),
                        this.ctx.save(),
                        this.path([new k(v.left,v.top), new k(v.left + v.width,v.top), new k(v.left + v.width,v.top + v.height), new k(v.left,v.top + v.height)]),
                        this.ctx.clip(),
                        this.renderTextWithLetterSpacing(new ps(r.value,y), i.letterSpacing, B),
                        this.ctx.restore(),
                        this.ctx.textBaseline = "alphabetic",
                        this.ctx.textAlign = "left"
                    }
                    if (!LA(r.styles.display, 2048))
                        return [3, 20];
                    if (r.styles.listStyleImage === null)
                        return [3, 19];
                    if (p = r.styles.listStyleImage,
                    p.type !== 0)
                        return [3, 18];
                    g = void 0,
                    m = p.url,
                    Q.label = 15;
                case 15:
                    return Q.trys.push([15, 17, , 18]),
                    [4, this.context.cache.match(m)];
                case 16:
                    return g = Q.sent(),
                    this.ctx.drawImage(g, r.bounds.left - (g.width + 10), r.bounds.top),
                    [3, 18];
                case 17:
                    return Q.sent(),
                    this.context.logger.error("Error loading list-style-image " + m),
                    [3, 18];
                case 18:
                    return [3, 20];
                case 19:
                    t.listValue && r.styles.listStyleType !== -1 && (C = this.createFontStyle(i)[0],
                    this.ctx.font = C,
                    this.ctx.fillStyle = DA(i.color),
                    this.ctx.textBaseline = "middle",
                    this.ctx.textAlign = "right",
                    v = new Nt(r.bounds.left,r.bounds.top + rA(r.styles.paddingTop, r.bounds.width),r.bounds.width,Wp(i.lineHeight, i.fontSize.number) / 2 + 1),
                    this.renderTextWithLetterSpacing(new ps(t.listValue,v), i.letterSpacing, Wp(i.lineHeight, i.fontSize.number) / 2 + 2),
                    this.ctx.textBaseline = "bottom",
                    this.ctx.textAlign = "left"),
                    Q.label = 20;
                case 20:
                    return [2]
                }
            })
        })
    }
    ,
    A.prototype.renderStackContent = function(t) {
        return Ae(this, void 0, void 0, function() {
            var r, n, p, i, s, p, o, a, p, l, u, p, c, f, p, d, B, p, h, y, p;
            return XA(this, function(g) {
                switch (g.label) {
                case 0:
                    if (LA(t.element.container.flags, 16))
                        debugger ;return [4, this.renderNodeBackgroundAndBorders(t.element)];
                case 1:
                    g.sent(),
                    r = 0,
                    n = t.negativeZIndex,
                    g.label = 2;
                case 2:
                    return r < n.length ? (p = n[r],
                    [4, this.renderStack(p)]) : [3, 5];
                case 3:
                    g.sent(),
                    g.label = 4;
                case 4:
                    return r++,
                    [3, 2];
                case 5:
                    return [4, this.renderNodeContent(t.element)];
                case 6:
                    g.sent(),
                    i = 0,
                    s = t.nonInlineLevel,
                    g.label = 7;
                case 7:
                    return i < s.length ? (p = s[i],
                    [4, this.renderNode(p)]) : [3, 10];
                case 8:
                    g.sent(),
                    g.label = 9;
                case 9:
                    return i++,
                    [3, 7];
                case 10:
                    o = 0,
                    a = t.nonPositionedFloats,
                    g.label = 11;
                case 11:
                    return o < a.length ? (p = a[o],
                    [4, this.renderStack(p)]) : [3, 14];
                case 12:
                    g.sent(),
                    g.label = 13;
                case 13:
                    return o++,
                    [3, 11];
                case 14:
                    l = 0,
                    u = t.nonPositionedInlineLevel,
                    g.label = 15;
                case 15:
                    return l < u.length ? (p = u[l],
                    [4, this.renderStack(p)]) : [3, 18];
                case 16:
                    g.sent(),
                    g.label = 17;
                case 17:
                    return l++,
                    [3, 15];
                case 18:
                    c = 0,
                    f = t.inlineLevel,
                    g.label = 19;
                case 19:
                    return c < f.length ? (p = f[c],
                    [4, this.renderNode(p)]) : [3, 22];
                case 20:
                    g.sent(),
                    g.label = 21;
                case 21:
                    return c++,
                    [3, 19];
                case 22:
                    d = 0,
                    B = t.zeroOrAutoZIndexOrTransformedOrOpacity,
                    g.label = 23;
                case 23:
                    return d < B.length ? (p = B[d],
                    [4, this.renderStack(p)]) : [3, 26];
                case 24:
                    g.sent(),
                    g.label = 25;
                case 25:
                    return d++,
                    [3, 23];
                case 26:
                    h = 0,
                    y = t.positiveZIndex,
                    g.label = 27;
                case 27:
                    return h < y.length ? (p = y[h],
                    [4, this.renderStack(p)]) : [3, 30];
                case 28:
                    g.sent(),
                    g.label = 29;
                case 29:
                    return h++,
                    [3, 27];
                case 30:
                    return [2]
                }
            })
        })
    }
    ,
    A.prototype.mask = function(t) {
        this.ctx.beginPath(),
        this.ctx.moveTo(0, 0),
        this.ctx.lineTo(this.canvas.width, 0),
        this.ctx.lineTo(this.canvas.width, this.canvas.height),
        this.ctx.lineTo(0, this.canvas.height),
        this.ctx.lineTo(0, 0),
        this.formatPath(t.slice(0).reverse()),
        this.ctx.closePath()
    }
    ,
    A.prototype.path = function(t) {
        this.ctx.beginPath(),
        this.formatPath(t),
        this.ctx.closePath()
    }
    ,
    A.prototype.formatPath = function(t) {
        var r = this;
        t.forEach(function(n, i) {
            var s = Ne(n) ? n.start : n;
            i === 0 ? r.ctx.moveTo(s.x, s.y) : r.ctx.lineTo(s.x, s.y),
            Ne(n) && r.ctx.bezierCurveTo(n.startControl.x, n.startControl.y, n.endControl.x, n.endControl.y, n.end.x, n.end.y)
        })
    }
    ,
    A.prototype.renderRepeat = function(t, r, n, i) {
        this.path(t),
        this.ctx.fillStyle = r,
        this.ctx.translate(n, i),
        this.ctx.fill(),
        this.ctx.translate(-n, -i)
    }
    ,
    A.prototype.resizeImage = function(t, r, n) {
        var i;
        if (t.width === r && t.height === n)
            return t;
        var s = (i = this.canvas.ownerDocument) !== null && i !== void 0 ? i : document
          , o = s.createElement("canvas");
        o.width = Math.max(1, r),
        o.height = Math.max(1, n);
        var a = o.getContext("2d");
        return a.drawImage(t, 0, 0, t.width, t.height, 0, 0, r, n),
        o
    }
    ,
    A.prototype.renderBackgroundImage = function(t) {
        return Ae(this, void 0, void 0, function() {
            var r, n, i, s, o, a;
            return XA(this, function(l) {
                switch (l.label) {
                case 0:
                    r = t.styles.backgroundImage.length - 1,
                    n = function(u) {
                        var c, f, d, H, T, V, b, D, F, B, H, T, V, b, D, h, y, p, g, m, C, v, Q, U, F, x, H, E, L, b, D, j, T, V, _, K, R, N, z, UA, q, aA;
                        return XA(this, function(xA) {
                            switch (xA.label) {
                            case 0:
                                if (u.type !== 0)
                                    return [3, 5];
                                c = void 0,
                                f = u.url,
                                xA.label = 1;
                            case 1:
                                return xA.trys.push([1, 3, , 4]),
                                [4, i.context.cache.match(f)];
                            case 2:
                                return c = xA.sent(),
                                [3, 4];
                            case 3:
                                return xA.sent(),
                                i.context.logger.error("Error loading background-image " + f),
                                [3, 4];
                            case 4:
                                return c && (d = gc(t, r, [c.width, c.height, c.width / c.height]),
                                H = d[0],
                                T = d[1],
                                V = d[2],
                                b = d[3],
                                D = d[4],
                                F = i.ctx.createPattern(i.resizeImage(c, b, D), "repeat"),
                                i.renderRepeat(H, F, T, V)),
                                [3, 6];
                            case 5:
                                U4(u) ? (B = gc(t, r, [null, null, null]),
                                H = B[0],
                                T = B[1],
                                V = B[2],
                                b = B[3],
                                D = B[4],
                                h = y4(u.angle, b, D),
                                y = h[0],
                                p = h[1],
                                g = h[2],
                                m = h[3],
                                C = h[4],
                                v = document.createElement("canvas"),
                                v.width = b,
                                v.height = D,
                                Q = v.getContext("2d"),
                                U = Q.createLinearGradient(p, m, g, C),
                                zp(u.stops, y).forEach(function(we) {
                                    return U.addColorStop(we.stop, DA(we.color))
                                }),
                                Q.fillStyle = U,
                                Q.fillRect(0, 0, b, D),
                                b > 0 && D > 0 && (F = i.ctx.createPattern(v, "repeat"),
                                i.renderRepeat(H, F, T, V))) : x4(u) && (x = gc(t, r, [null, null, null]),
                                H = x[0],
                                E = x[1],
                                L = x[2],
                                b = x[3],
                                D = x[4],
                                j = u.position.length === 0 ? [Nh] : u.position,
                                T = rA(j[0], b),
                                V = rA(j[j.length - 1], D),
                                _ = C4(u, T, V, b, D),
                                K = _[0],
                                R = _[1],
                                K > 0 && R > 0 && (N = i.ctx.createRadialGradient(E + T, L + V, 0, E + T, L + V, K),
                                zp(u.stops, K * 2).forEach(function(we) {
                                    return N.addColorStop(we.stop, DA(we.color))
                                }),
                                i.path(H),
                                i.ctx.fillStyle = N,
                                K !== R ? (z = t.bounds.left + .5 * t.bounds.width,
                                UA = t.bounds.top + .5 * t.bounds.height,
                                q = R / K,
                                aA = 1 / q,
                                i.ctx.save(),
                                i.ctx.translate(z, UA),
                                i.ctx.transform(1, 0, 0, q, 0, 0),
                                i.ctx.translate(-z, -UA),
                                i.ctx.fillRect(E, aA * (L - UA) + UA, b, D * aA),
                                i.ctx.restore()) : i.ctx.fill())),
                                xA.label = 6;
                            case 6:
                                return r--,
                                [2]
                            }
                        })
                    }
                    ,
                    i = this,
                    s = 0,
                    o = t.styles.backgroundImage.slice(0).reverse(),
                    l.label = 1;
                case 1:
                    return s < o.length ? (a = o[s],
                    [5, n(a)]) : [3, 4];
                case 2:
                    l.sent(),
                    l.label = 3;
                case 3:
                    return s++,
                    [3, 1];
                case 4:
                    return [2]
                }
            })
        })
    }
    ,
    A.prototype.renderSolidBorder = function(t, r, n) {
        return Ae(this, void 0, void 0, function() {
            return XA(this, function(i) {
                return this.path(Q0(n, r)),
                this.ctx.fillStyle = DA(t),
                this.ctx.fill(),
                [2]
            })
        })
    }
    ,
    A.prototype.renderDoubleBorder = function(t, r, n, i) {
        return Ae(this, void 0, void 0, function() {
            var s, o;
            return XA(this, function(a) {
                switch (a.label) {
                case 0:
                    return r < 3 ? [4, this.renderSolidBorder(t, n, i)] : [3, 2];
                case 1:
                    return a.sent(),
                    [2];
                case 2:
                    return s = HL(i, n),
                    this.path(s),
                    this.ctx.fillStyle = DA(t),
                    this.ctx.fill(),
                    o = _L(i, n),
                    this.path(o),
                    this.ctx.fill(),
                    [2]
                }
            })
        })
    }
    ,
    A.prototype.renderNodeBackgroundAndBorders = function(t) {
        return Ae(this, void 0, void 0, function() {
            var r, n, i, s, o, a, l, u, c = this;
            return XA(this, function(f) {
                switch (f.label) {
                case 0:
                    return this.applyEffects(t.getEffects(2)),
                    r = t.container.styles,
                    n = !wr(r.backgroundColor) || r.backgroundImage.length,
                    i = [{
                        style: r.borderTopStyle,
                        color: r.borderTopColor,
                        width: r.borderTopWidth
                    }, {
                        style: r.borderRightStyle,
                        color: r.borderRightColor,
                        width: r.borderRightWidth
                    }, {
                        style: r.borderBottomStyle,
                        color: r.borderBottomColor,
                        width: r.borderBottomWidth
                    }, {
                        style: r.borderLeftStyle,
                        color: r.borderLeftColor,
                        width: r.borderLeftWidth
                    }],
                    s = NL(xn(r.backgroundClip, 0), t.curves),
                    n || r.boxShadow.length ? (this.ctx.save(),
                    this.path(s),
                    this.ctx.clip(),
                    wr(r.backgroundColor) || (this.ctx.fillStyle = DA(r.backgroundColor),
                    this.ctx.fill()),
                    [4, this.renderBackgroundImage(t.container)]) : [3, 2];
                case 1:
                    f.sent(),
                    this.ctx.restore(),
                    r.boxShadow.slice(0).reverse().forEach(function(d) {
                        c.ctx.save();
                        var B = hl(t.curves)
                          , h = d.inset ? 0 : KL
                          , y = EL(B, -h + (d.inset ? 1 : -1) * d.spread.number, (d.inset ? 1 : -1) * d.spread.number, d.spread.number * (d.inset ? -2 : 2), d.spread.number * (d.inset ? -2 : 2));
                        d.inset ? (c.path(B),
                        c.ctx.clip(),
                        c.mask(y)) : (c.mask(B),
                        c.ctx.clip(),
                        c.path(y)),
                        c.ctx.shadowOffsetX = d.offsetX.number + h,
                        c.ctx.shadowOffsetY = d.offsetY.number,
                        c.ctx.shadowColor = DA(d.color),
                        c.ctx.shadowBlur = d.blur.number,
                        c.ctx.fillStyle = d.inset ? DA(d.color) : "rgba(0,0,0,1)",
                        c.ctx.fill(),
                        c.ctx.restore()
                    }),
                    f.label = 2;
                case 2:
                    o = 0,
                    a = 0,
                    l = i,
                    f.label = 3;
                case 3:
                    return a < l.length ? (u = l[a],
                    u.style !== 0 && !wr(u.color) && u.width > 0 ? u.style !== 2 ? [3, 5] : [4, this.renderDashedDottedBorder(u.color, u.width, o, t.curves, 2)] : [3, 11]) : [3, 13];
                case 4:
                    return f.sent(),
                    [3, 11];
                case 5:
                    return u.style !== 3 ? [3, 7] : [4, this.renderDashedDottedBorder(u.color, u.width, o, t.curves, 3)];
                case 6:
                    return f.sent(),
                    [3, 11];
                case 7:
                    return u.style !== 4 ? [3, 9] : [4, this.renderDoubleBorder(u.color, u.width, o, t.curves)];
                case 8:
                    return f.sent(),
                    [3, 11];
                case 9:
                    return [4, this.renderSolidBorder(u.color, o, t.curves)];
                case 10:
                    f.sent(),
                    f.label = 11;
                case 11:
                    o++,
                    f.label = 12;
                case 12:
                    return a++,
                    [3, 3];
                case 13:
                    return [2]
                }
            })
        })
    }
    ,
    A.prototype.renderDashedDottedBorder = function(t, r, n, i, s) {
        return Ae(this, void 0, void 0, function() {
            var o, a, l, u, c, f, d, B, h, y, p, g, m, C, v, Q, v, Q;
            return XA(this, function(U) {
                return this.ctx.save(),
                o = SL(i, n),
                a = Q0(i, n),
                s === 2 && (this.path(a),
                this.ctx.clip()),
                Ne(a[0]) ? (l = a[0].start.x,
                u = a[0].start.y) : (l = a[0].x,
                u = a[0].y),
                Ne(a[1]) ? (c = a[1].end.x,
                f = a[1].end.y) : (c = a[1].x,
                f = a[1].y),
                n === 0 || n === 2 ? d = Math.abs(l - c) : d = Math.abs(u - f),
                this.ctx.beginPath(),
                s === 3 ? this.formatPath(o) : this.formatPath(a.slice(0, 2)),
                B = r < 3 ? r * 3 : r * 2,
                h = r < 3 ? r * 2 : r,
                s === 3 && (B = r,
                h = r),
                y = !0,
                d <= B * 2 ? y = !1 : d <= B * 2 + h ? (p = d / (2 * B + h),
                B *= p,
                h *= p) : (g = Math.floor((d + h) / (B + h)),
                m = (d - g * B) / (g - 1),
                C = (d - (g + 1) * B) / g,
                h = C <= 0 || Math.abs(h - m) < Math.abs(h - C) ? m : C),
                y && (s === 3 ? this.ctx.setLineDash([0, B + h]) : this.ctx.setLineDash([B, h])),
                s === 3 ? (this.ctx.lineCap = "round",
                this.ctx.lineWidth = r) : this.ctx.lineWidth = r * 2 + 1.1,
                this.ctx.strokeStyle = DA(t),
                this.ctx.stroke(),
                this.ctx.setLineDash([]),
                s === 2 && (Ne(a[0]) && (v = a[3],
                Q = a[0],
                this.ctx.beginPath(),
                this.formatPath([new k(v.end.x,v.end.y), new k(Q.start.x,Q.start.y)]),
                this.ctx.stroke()),
                Ne(a[1]) && (v = a[1],
                Q = a[2],
                this.ctx.beginPath(),
                this.formatPath([new k(v.end.x,v.end.y), new k(Q.start.x,Q.start.y)]),
                this.ctx.stroke())),
                this.ctx.restore(),
                [2]
            })
        })
    }
    ,
    A.prototype.render = function(t) {
        return Ae(this, void 0, void 0, function() {
            var r;
            return XA(this, function(n) {
                switch (n.label) {
                case 0:
                    return this.options.backgroundColor && (this.ctx.fillStyle = DA(this.options.backgroundColor),
                    this.ctx.fillRect(this.options.x, this.options.y, this.options.width, this.options.height)),
                    r = IL(t),
                    [4, this.renderStack(r)];
                case 1:
                    return n.sent(),
                    this.applyEffects([]),
                    [2, this.canvas]
                }
            })
        })
    }
    ,
    A
}(cQ)
  , OL = function(e) {
    return e instanceof Wv || e instanceof Xv ? !0 : e instanceof jh && e.type !== cl && e.type !== ul
}
  , NL = function(e, A) {
    switch (e) {
    case 0:
        return hl(A);
    case 2:
        return vL(A);
    case 1:
    default:
        return gl(A)
    }
}
  , RL = function(e) {
    switch (e) {
    case 1:
        return "center";
    case 2:
        return "right";
    case 0:
    default:
        return "left"
    }
}
  , VL = ["-apple-system", "system-ui"]
  , GL = function(e) {
    return /iPhone OS 15_(0|1)/.test(window.navigator.userAgent) ? e.filter(function(A) {
        return VL.indexOf(A) === -1
    }) : e
}
  , jL = function(e) {
    st(A, e);
    function A(t, r) {
        var n = e.call(this, t, r) || this;
        return n.canvas = r.canvas ? r.canvas : document.createElement("canvas"),
        n.ctx = n.canvas.getContext("2d"),
        n.options = r,
        n.canvas.width = Math.floor(r.width * r.scale),
        n.canvas.height = Math.floor(r.height * r.scale),
        n.canvas.style.width = r.width + "px",
        n.canvas.style.height = r.height + "px",
        n.ctx.scale(n.options.scale, n.options.scale),
        n.ctx.translate(-r.x, -r.y),
        n.context.logger.debug("EXPERIMENTAL ForeignObject renderer initialized (" + r.width + "x" + r.height + " at " + r.x + "," + r.y + ") with scale " + r.scale),
        n
    }
    return A.prototype.render = function(t) {
        return Ae(this, void 0, void 0, function() {
            var r, n;
            return XA(this, function(i) {
                switch (i.label) {
                case 0:
                    return r = qf(this.options.width * this.options.scale, this.options.height * this.options.scale, this.options.scale, this.options.scale, t),
                    [4, zL(r)];
                case 1:
                    return n = i.sent(),
                    this.options.backgroundColor && (this.ctx.fillStyle = DA(this.options.backgroundColor),
                    this.ctx.fillRect(0, 0, this.options.width * this.options.scale, this.options.height * this.options.scale)),
                    this.ctx.drawImage(n, -this.options.x * this.options.scale, -this.options.y * this.options.scale),
                    [2, this.canvas]
                }
            })
        })
    }
    ,
    A
}(cQ)
  , zL = function(e) {
    return new Promise(function(A, t) {
        var r = new Image;
        r.onload = function() {
            A(r)
        }
        ,
        r.onerror = t,
        r.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(e))
    }
    )
}
  , XL = function() {
    function e(A) {
        var t = A.id
          , r = A.enabled;
        this.id = t,
        this.enabled = r,
        this.start = Date.now()
    }
    return e.prototype.debug = function() {
        for (var A = [], t = 0; t < arguments.length; t++)
            A[t] = arguments[t];
        this.enabled && (typeof window < "u" && window.console && typeof console.debug == "function" ? console.debug.apply(console, So([this.id, this.getTime() + "ms"], A)) : this.info.apply(this, A))
    }
    ,
    e.prototype.getTime = function() {
        return Date.now() - this.start
    }
    ,
    e.prototype.info = function() {
        for (var A = [], t = 0; t < arguments.length; t++)
            A[t] = arguments[t];
        this.enabled && typeof window < "u" && window.console && typeof console.info == "function" && console.info.apply(console, So([this.id, this.getTime() + "ms"], A))
    }
    ,
    e.prototype.warn = function() {
        for (var A = [], t = 0; t < arguments.length; t++)
            A[t] = arguments[t];
        this.enabled && (typeof window < "u" && window.console && typeof console.warn == "function" ? console.warn.apply(console, So([this.id, this.getTime() + "ms"], A)) : this.info.apply(this, A))
    }
    ,
    e.prototype.error = function() {
        for (var A = [], t = 0; t < arguments.length; t++)
            A[t] = arguments[t];
        this.enabled && (typeof window < "u" && window.console && typeof console.error == "function" ? console.error.apply(console, So([this.id, this.getTime() + "ms"], A)) : this.info.apply(this, A))
    }
    ,
    e.instances = {},
    e
}()
  , WL = function() {
    function e(A, t) {
        var r;
        this.windowBounds = t,
        this.instanceName = "#" + e.instanceCount++,
        this.logger = new XL({
            id: this.instanceName,
            enabled: A.logging
        }),
        this.cache = (r = A.cache) !== null && r !== void 0 ? r : new hL(this,A)
    }
    return e.instanceCount = 1,
    e
}()
  , YL = function(e, A) {
    return A === void 0 && (A = {}),
    JL(e, A)
};
typeof window < "u" && iQ.setContext(window);
var JL = function(e, A) {
    return Ae(void 0, void 0, void 0, function() {
        var t, r, n, i, s, o, a, l, u, c, f, d, B, h, y, p, g, m, C, v, U, Q, U, F, x, H, E, L, b, D, j, T, V, _, K, R, N, z, UA, q;
        return XA(this, function(aA) {
            switch (aA.label) {
            case 0:
                if (!e || typeof e != "object")
                    return [2, Promise.reject("Invalid element provided as first argument")];
                if (t = e.ownerDocument,
                !t)
                    throw new Error("Element is not attached to a Document");
                if (r = t.defaultView,
                !r)
                    throw new Error("Document is not attached to a Window");
                return n = {
                    allowTaint: (F = A.allowTaint) !== null && F !== void 0 ? F : !1,
                    imageTimeout: (x = A.imageTimeout) !== null && x !== void 0 ? x : 15e3,
                    proxy: A.proxy,
                    useCORS: (H = A.useCORS) !== null && H !== void 0 ? H : !1
                },
                i = Kf({
                    logging: (E = A.logging) !== null && E !== void 0 ? E : !0,
                    cache: A.cache
                }, n),
                s = {
                    windowWidth: (L = A.windowWidth) !== null && L !== void 0 ? L : r.innerWidth,
                    windowHeight: (b = A.windowHeight) !== null && b !== void 0 ? b : r.innerHeight,
                    scrollX: (D = A.scrollX) !== null && D !== void 0 ? D : r.pageXOffset,
                    scrollY: (j = A.scrollY) !== null && j !== void 0 ? j : r.pageYOffset
                },
                o = new Nt(s.scrollX,s.scrollY,s.windowWidth,s.windowHeight),
                a = new WL(i,o),
                l = (T = A.foreignObjectRendering) !== null && T !== void 0 ? T : !1,
                u = {
                    allowTaint: (V = A.allowTaint) !== null && V !== void 0 ? V : !1,
                    onclone: A.onclone,
                    ignoreElements: A.ignoreElements,
                    inlineImages: l,
                    copyStyles: l
                },
                a.logger.debug("Starting document clone with size " + o.width + "x" + o.height + " scrolled to " + -o.left + "," + -o.top),
                c = new y0(a,e,u),
                f = c.clonedReferenceElement,
                f ? [4, c.toIFrame(t, o)] : [2, Promise.reject("Unable to find element in cloned iframe")];
            case 1:
                return d = aA.sent(),
                B = zh(f) || $T(f) ? E_(f.ownerDocument) : Gl(a, f),
                h = B.width,
                y = B.height,
                p = B.left,
                g = B.top,
                m = $L(a, f, A.backgroundColor),
                C = {
                    canvas: A.canvas,
                    backgroundColor: m,
                    scale: (K = (_ = A.scale) !== null && _ !== void 0 ? _ : r.devicePixelRatio) !== null && K !== void 0 ? K : 1,
                    x: ((R = A.x) !== null && R !== void 0 ? R : 0) + p,
                    y: ((N = A.y) !== null && N !== void 0 ? N : 0) + g,
                    width: (z = A.width) !== null && z !== void 0 ? z : Math.ceil(h),
                    height: (UA = A.height) !== null && UA !== void 0 ? UA : Math.ceil(y)
                },
                l ? (a.logger.debug("Document cloned, using foreign object rendering"),
                U = new jL(a,C),
                [4, U.render(f)]) : [3, 3];
            case 2:
                return v = aA.sent(),
                [3, 5];
            case 3:
                return a.logger.debug("Document cloned, element located at " + p + "," + g + " with size " + h + "x" + y + " using computed rendering"),
                a.logger.debug("Starting DOM parsing"),
                Q = $v(a, f),
                m === Q.styles.backgroundColor && (Q.styles.backgroundColor = Lt.TRANSPARENT),
                a.logger.debug("Starting renderer for element at " + C.x + "," + C.y + " with size " + C.width + "x" + C.height),
                U = new PL(a,C),
                [4, U.render(Q)];
            case 4:
                v = aA.sent(),
                aA.label = 5;
            case 5:
                return (!((q = A.removeContainer) !== null && q !== void 0) || q) && (y0.destroy(d) || a.logger.error("Cannot detach cloned iframe as it is not in the DOM anymore")),
                a.logger.debug("Finished rendering"),
                [2, v]
            }
        })
    })
}
  , $L = function(e, A, t) {
    var r = A.ownerDocument
      , n = r.documentElement ? gs(e, getComputedStyle(r.documentElement).backgroundColor) : Lt.TRANSPARENT
      , i = r.body ? gs(e, getComputedStyle(r.body).backgroundColor) : Lt.TRANSPARENT
      , s = typeof t == "string" ? gs(e, t) : t === null ? Lt.TRANSPARENT : 4294967295;
    return A === r.documentElement ? wr(n) ? wr(i) ? s : i : n : s
};
const ZL = ({onNext: e}) => {
    const [A,t] = I.useState({
        base: "#FF6B9D",
        accent: "#FFD93D",
        center: "#6BCF7F",
        thread: "#D4AF37"
    })
      , [r,n] = I.useState("hearts")
      , [i,s] = I.useState("circle")
      , [o,a] = I.useState("medium")
      , [l,u] = I.useState("modern")
      , [c,f] = I.useState("colors");
    I.useState("colors");
    const d = I.useRef(null)
      , B = [{
        name: "Sunset",
        colors: ["#FF6B9D", "#FFD93D", "#6BCF7F", "#D4AF37"]
    }, {
        name: "Ocean",
        colors: ["#4A90E2", "#7ED321", "#50E3C2", "#B8E986"]
    }, {
        name: "Royal",
        colors: ["#9013FE", "#E91E63", "#FF9800", "#FFC107"]
    }, {
        name: "Earth",
        colors: ["#8D6E63", "#A1887F", "#BCAAA4", "#D7CCC8"]
    }, {
        name: "Fire",
        colors: ["#F44336", "#FF5722", "#FF9800", "#FFC107"]
    }, {
        name: "Garden",
        colors: ["#4CAF50", "#8BC34A", "#CDDC39", "#FFEB3B"]
    }]
      , h = ["#FF6B9D", "#FFD93D", "#6BCF7F", "#D4AF37", "#4A90E2", "#9013FE", "#E91E63", "#FF9800", "#8D6E63", "#4CAF50", "#673AB7", "#03DAC6", "#F44336", "#795548", "#607D8B", "#9E9E9E", "#FF5722", "#3F51B5"]
      , y = [{
        name: "hearts",
        icon: Ue,
        label: "Hearts"
    }, {
        name: "stars",
        icon: op,
        label: "Stars"
    }, {
        name: "sparkles",
        icon: oC,
        label: "Sparkles"
    }, {
        name: "dots",
        icon: sp,
        label: "Dots"
    }]
      , p = [{
        name: "circle",
        label: "Classic Circle"
    }, {
        name: "flower",
        label: "Flower Petals"
    }, {
        name: "hexagon",
        label: "Hexagon"
    }, {
        name: "star",
        label: "Star Shape"
    }]
      , g = [{
        name: "modern",
        label: "Modern Minimal"
    }, {
        name: "traditional",
        label: "Traditional Rich"
    }, {
        name: "elegant",
        label: "Elegant Luxury"
    }, {
        name: "playful",
        label: "Playful Fun"
    }]
      , m = [{
        name: "small",
        label: "Delicate",
        size: 120
    }, {
        name: "medium",
        label: "Classic",
        size: 160
    }, {
        name: "large",
        label: "Bold",
        size: 200
    }]
      , C = [{
        id: "colors",
        label: "Colors",
        icon: Ou
    }, {
        id: "shape",
        label: "Shape",
        icon: sp
    }, {
        id: "pattern",
        label: "Pattern",
        icon: Ue
    }, {
        id: "style",
        label: "Style",
        icon: op
    }]
      , v = async () => {
        if (d.current)
            try {
                const E = await YL(d.current, {
                    backgroundColor: null,
                    scale: 3,
                    useCORS: !0
                })
                  , L = document.createElement("a");
                L.download = `custom-rakhi-${Date.now()}.png`,
                L.href = E.toDataURL(),
                L.click()
            } catch (E) {
                console.error("Error downloading rakhi:", E)
            }
    }
      , Q = () => {
        t({
            base: "#FF6B9D",
            accent: "#FFD93D",
            center: "#6BCF7F",
            thread: "#D4AF37"
        }),
        n("hearts"),
        s("circle"),
        a("medium"),
        u("modern")
    }
      , U = E => {
        t({
            base: E[0],
            accent: E[1],
            center: E[2],
            thread: E[3]
        })
    }
      , F = () => {
        var E;
        return ((E = m.find(L => L.name === o)) == null ? void 0 : E.size) || 160
    }
      , x = () => {
        var _;
        const E = (_ = y.find(K => K.name === r)) == null ? void 0 : _.icon
          , L = F()
          , D = ( () => {
            switch (i) {
            case "flower":
                return L * .5;
            case "hexagon":
                return L * .6;
            case "star":
                return L * .4;
            default:
                return L * .5
            }
        }
        )()
          , j = {
            modern: {
                iconSize: D * .25,
                gridCols: 2,
                spacing: "gap-2",
                dotSize: D * .08
            },
            traditional: {
                iconSize: D * .22,
                gridCols: 3,
                spacing: "gap-1",
                dotSize: D * .06
            },
            elegant: {
                iconSize: D * .28,
                gridCols: 2,
                spacing: "gap-3",
                dotSize: D * .05
            },
            playful: {
                iconSize: D * .24,
                gridCols: 2,
                spacing: "gap-2",
                dotSize: D * .09
            }
        }
          , T = j[l] || j.modern
          , V = {
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative"
        };
        if (r === "dots") {
            const K = l === "traditional" ? 9 : l === "playful" ? 8 : 6
              , R = l === "traditional" ? 3 : 2;
            return w.jsx("div", {
                style: V,
                children: w.jsx("div", {
                    className: `grid grid-cols-${R} ${T.spacing} items-center justify-items-center`,
                    style: {
                        width: "fit-content",
                        height: "fit-content"
                    },
                    children: [...Array(K)].map( (N, z) => w.jsx("div", {
                        className: "rounded-full",
                        style: {
                            width: T.dotSize,
                            height: T.dotSize,
                            backgroundColor: A.accent,
                            flexShrink: 0
                        }
                    }, z))
                })
            })
        }
        if (E) {
            const K = l === "traditional" ? 6 : 4
              , R = l === "traditional" ? 3 : 2;
            return w.jsx("div", {
                style: V,
                children: w.jsx("div", {
                    className: `grid grid-cols-${R} ${T.spacing} items-center justify-items-center`,
                    style: {
                        width: "fit-content",
                        height: "fit-content"
                    },
                    children: [...Array(K)].map( (N, z) => w.jsx("div", {
                        style: {
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: T.iconSize,
                            height: T.iconSize
                        },
                        children: w.jsx(E, {
                            size: T.iconSize * .8,
                            style: {
                                color: A.accent,
                                opacity: l === "elegant" ? .8 : 1,
                                filter: l === "traditional" ? `drop-shadow(0 1px 2px ${A.base}40)` : "none",
                                flexShrink: 0
                            },
                            fill: "currentColor"
                        })
                    }, z))
                })
            })
        }
        return null
    }
      , H = () => {
        const E = F()
          , L = {
            width: E,
            height: E,
            position: "relative",
            margin: "0 auto"
        }
          , D = ( () => {
            switch (l) {
            case "traditional":
                return {
                    borderWidth: "6px",
                    decorativeRings: 3,
                    shadowIntensity: "60",
                    patternScale: 1.2,
                    hasGoldAccents: !0
                };
            case "elegant":
                return {
                    borderWidth: "2px",
                    decorativeRings: 1,
                    shadowIntensity: "30",
                    patternScale: .8,
                    hasGoldAccents: !1
                };
            case "playful":
                return {
                    borderWidth: "4px",
                    decorativeRings: 2,
                    shadowIntensity: "50",
                    patternScale: 1.4,
                    hasGoldAccents: !0
                };
            default:
                return {
                    borderWidth: "4px",
                    decorativeRings: 1,
                    shadowIntensity: "40",
                    patternScale: 1,
                    hasGoldAccents: !1
                }
            }
        }
        )();
        switch (i) {
        case "flower":
            return w.jsxs("div", {
                style: L,
                children: [[...Array(8)].map( (j, T) => w.jsx("div", {
                    className: "absolute rounded-full",
                    style: {
                        width: E * .4,
                        height: E * .4,
                        backgroundColor: A.base,
                        top: "50%",
                        left: "50%",
                        transform: `translate(-50%, -50%) rotate(${T * 45}deg) translateY(-${E * .2}px)`,
                        boxShadow: `0 8px 32px ${A.base}${D.shadowIntensity}`,
                        border: l === "traditional" ? `3px solid ${A.accent}` : "none"
                    }
                }, T)), l === "traditional" && [...Array(2)].map( (j, T) => w.jsx("div", {
                    className: "absolute rounded-full border-2",
                    style: {
                        width: E * (.7 + T * .1),
                        height: E * (.7 + T * .1),
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        borderColor: A.accent,
                        opacity: .6 - T * .2
                    }
                }, `ring-${T}`)), w.jsx("div", {
                    className: "absolute rounded-full flex items-center justify-center",
                    style: {
                        width: E * .5,
                        height: E * .5,
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        backgroundColor: A.center,
                        boxShadow: "inset 0 4px 16px rgba(0,0,0,0.2)",
                        border: l === "elegant" ? `1px solid ${A.accent}30` : "none"
                    },
                    children: x()
                })]
            });
        case "hexagon":
            return w.jsx("div", {
                style: L,
                children: w.jsxs("div", {
                    className: "absolute flex items-center justify-center",
                    style: {
                        width: E,
                        height: E,
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        backgroundColor: A.base,
                        clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
                        boxShadow: `0 12px 40px ${A.base}${D.shadowIntensity}`,
                        border: l === "traditional" ? `4px solid ${A.accent}` : "none"
                    },
                    children: [l === "playful" && w.jsx("div", {
                        className: "absolute inset-2",
                        children: [...Array(6)].map( (j, T) => w.jsx("div", {
                            className: "absolute w-2 h-2 rounded-full",
                            style: {
                                backgroundColor: A.accent,
                                top: "50%",
                                left: "50%",
                                transform: `translate(-50%, -50%) rotate(${T * 60}deg) translateY(-${E * .35}px)`
                            }
                        }, T))
                    }), w.jsx("div", {
                        className: "absolute rounded-full flex items-center justify-center",
                        style: {
                            width: E * .6,
                            height: E * .6,
                            backgroundColor: A.center,
                            boxShadow: "inset 0 4px 16px rgba(0,0,0,0.2)",
                            border: l === "elegant" ? `2px solid ${A.accent}40` : "none"
                        },
                        children: x()
                    })]
                })
            });
        case "star":
            return w.jsx("div", {
                style: L,
                children: w.jsxs("div", {
                    className: "absolute flex items-center justify-center",
                    style: {
                        width: E,
                        height: E,
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        backgroundColor: A.base,
                        clipPath: "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
                        boxShadow: `0 12px 40px ${A.base}${D.shadowIntensity}`,
                        filter: l === "elegant" ? "drop-shadow(0 4px 8px rgba(0,0,0,0.1))" : "none"
                    },
                    children: [l === "traditional" && w.jsx("div", {
                        className: "absolute inset-1",
                        style: {
                            clipPath: "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
                            border: `3px solid ${A.thread}`,
                            backgroundColor: "transparent"
                        }
                    }), w.jsx("div", {
                        className: "absolute rounded-full flex items-center justify-center",
                        style: {
                            width: E * .4,
                            height: E * .4,
                            backgroundColor: A.center,
                            boxShadow: "inset 0 4px 16px rgba(0,0,0,0.2)",
                            border: l === "playful" ? `3px solid ${A.accent}` : "none"
                        },
                        children: x()
                    })]
                })
            });
        default:
            return w.jsx("div", {
                style: L,
                children: w.jsxs("div", {
                    className: "rounded-full relative flex items-center justify-center",
                    style: {
                        width: E,
                        height: E,
                        backgroundColor: A.base,
                        boxShadow: `0 12px 40px ${A.base}${D.shadowIntensity}, inset 0 2px 8px rgba(255,255,255,0.3)`,
                        border: l === "traditional" ? `4px solid ${A.thread}` : "none"
                    },
                    children: [l === "traditional" && [...Array(2)].map( (j, T) => w.jsx("div", {
                        className: "absolute rounded-full border-2",
                        style: {
                            top: `${8 + T * 8}px`,
                            left: `${8 + T * 8}px`,
                            right: `${8 + T * 8}px`,
                            bottom: `${8 + T * 8}px`,
                            borderColor: A.accent,
                            opacity: .8 - T * .3
                        }
                    }, `ring-${T}`)), l === "elegant" && w.jsx("div", {
                        className: "absolute inset-6 rounded-full border-2",
                        style: {
                            borderColor: `${A.accent}60`,
                            borderStyle: "dashed"
                        }
                    }), w.jsx("div", {
                        className: "absolute rounded-full flex items-center justify-center",
                        style: {
                            top: `${parseInt(D.borderWidth)}px`,
                            left: `${parseInt(D.borderWidth)}px`,
                            right: `${parseInt(D.borderWidth)}px`,
                            bottom: `${parseInt(D.borderWidth)}px`,
                            border: `${D.borderWidth} solid ${A.accent}`,
                            boxShadow: `inset 0 2px 8px ${A.accent}30`
                        },
                        children: w.jsx("div", {
                            className: "absolute inset-4 rounded-full flex items-center justify-center",
                            style: {
                                backgroundColor: A.center,
                                boxShadow: "inset 0 2px 12px rgba(0,0,0,0.2)",
                                border: l === "playful" ? `2px solid ${A.accent}80` : "none"
                            },
                            children: x()
                        })
                    }), [...Array(l === "traditional" ? 16 : l === "playful" ? 20 : 12)].map( (j, T) => {
                        const V = l === "traditional" ? 16 : l === "playful" ? 20 : 12;
                        return w.jsx("div", {
                            className: "absolute rounded-full",
                            style: {
                                width: l === "traditional" ? "4px" : l === "playful" ? "6px" : "3px",
                                height: l === "traditional" ? "4px" : l === "playful" ? "6px" : "3px",
                                backgroundColor: l === "traditional" ? A.thread : A.accent,
                                top: "50%",
                                left: "50%",
                                transform: `translate(-50%, -50%) rotate(${T * (360 / V)}deg) translateY(-${E / 2 + (l === "elegant" ? 8 : 12)}px)`,
                                boxShadow: `0 2px 8px ${A.accent}50`,
                                opacity: l === "elegant" ? .7 : 1
                            }
                        }, T)
                    }
                    ), l === "playful" && w.jsx("div", {
                        className: "absolute inset-0",
                        children: [...Array(8)].map( (j, T) => w.jsx("div", {
                            className: "absolute w-1 h-1 rounded-full",
                            style: {
                                backgroundColor: A.thread,
                                top: `${20 + Math.sin(T * .8) * 20}%`,
                                left: `${20 + Math.cos(T * .8) * 20}%`,
                                animation: `twinkle 2s ease-in-out infinite ${T * .25}s`
                            }
                        }, `sparkle-${T}`))
                    })]
                })
            })
        }
    }
    ;
    return w.jsx("div", {
        className: "min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50",
        children: w.jsxs("div", {
            className: "max-w-7xl mx-auto p-4 md:p-6",
            children: [w.jsxs(M.div, {
                className: "text-center mb-8",
                initial: {
                    opacity: 0,
                    y: -30
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: .6
                },
                children: [w.jsx("h1", {
                    className: "text-3xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4",
                    children: "Design your rakhi"
                }), w.jsx("p", {
                    className: "text-base md:text-lg text-gray-600 max-w-2xl mx-auto",
                    children: "Create a unique, personalized rakhi for me and send it to me."
                })]
            }), w.jsxs("div", {
                className: "lg:grid lg:grid-cols-3 lg:gap-8",
                children: [w.jsx(M.div, {
                    className: "lg:col-span-1 mb-6 lg:mb-0",
                    initial: {
                        opacity: 0,
                        x: -50
                    },
                    animate: {
                        opacity: 1,
                        x: 0
                    },
                    transition: {
                        duration: .6,
                        delay: .2
                    },
                    children: w.jsx("div", {
                        className: "lg:sticky lg:top-6",
                        children: w.jsxs("div", {
                            className: "bg-white rounded-3xl p-6 md:p-8 shadow-2xl border border-gray-100",
                            children: [w.jsx("h3", {
                                className: "text-xl md:text-2xl font-bold text-gray-800 mb-4 md:mb-6 text-center",
                                children: "Your Rakhi"
                            }), w.jsxs("div", {
                                ref: d,
                                className: "relative",
                                children: [w.jsx("div", {
                                    className: "flex justify-center mb-6",
                                    children: w.jsx("div", {
                                        className: "w-48 md:w-64 h-3 md:h-4 rounded-full shadow-lg",
                                        style: {
                                            backgroundColor: A.thread,
                                            boxShadow: `0 4px 20px ${A.thread}40`
                                        }
                                    })
                                }), w.jsx(M.div, {
                                    className: "flex justify-center",
                                    initial: {
                                        scale: 0
                                    },
                                    animate: {
                                        scale: 1
                                    },
                                    transition: {
                                        type: "spring",
                                        stiffness: 200
                                    },
                                    children: H()
                                }, `${i}-${o}`), w.jsx("div", {
                                    className: "flex justify-center mt-6",
                                    children: w.jsx("div", {
                                        className: "w-48 md:w-64 h-3 md:h-4 rounded-full shadow-lg",
                                        style: {
                                            backgroundColor: A.thread,
                                            boxShadow: `0 4px 20px ${A.thread}40`
                                        }
                                    })
                                })]
                            }), w.jsxs(M.button, {
                                onClick: v,
                                className: "w-full mt-6 md:mt-8 bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 md:py-4 rounded-2xl font-semibold text-base md:text-lg shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-3",
                                whileHover: {
                                    scale: 1.02
                                },
                                whileTap: {
                                    scale: .98
                                },
                                children: [w.jsx(nH, {
                                    size: 20
                                }), "Download Rakhi"]
                            })]
                        })
                    })
                }), w.jsxs("div", {
                    className: "lg:col-span-2",
                    children: [w.jsx("div", {
                        className: "lg:hidden mb-6",
                        children: w.jsx("div", {
                            className: "grid grid-cols-4 gap-1 bg-gray-100 p-1 rounded-2xl",
                            children: C.map(E => w.jsxs(M.button, {
                                onClick: () => f(E.id),
                                className: `p-3 rounded-xl font-medium text-sm transition-all duration-200 flex flex-col items-center gap-1 ${c === E.id ? "bg-white text-purple-700 shadow-lg" : "text-gray-600"}`,
                                whileTap: {
                                    scale: .95
                                },
                                children: [w.jsx(E.icon, {
                                    size: 18
                                }), E.label]
                            }, E.id))
                        })
                    }), w.jsx("div", {
                        className: "lg:hidden",
                        children: w.jsx(Tt, {
                            mode: "wait",
                            children: w.jsxs(M.div, {
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                exit: {
                                    opacity: 0,
                                    y: -20
                                },
                                transition: {
                                    duration: .3
                                },
                                className: "bg-white rounded-3xl p-6 shadow-xl border border-gray-100",
                                children: [c === "colors" && w.jsxs("div", {
                                    children: [w.jsxs("h3", {
                                        className: "text-xl font-bold text-gray-800 mb-4 flex items-center gap-3",
                                        children: [w.jsx(Ou, {
                                            className: "text-purple-500"
                                        }), "Colors"]
                                    }), w.jsxs("div", {
                                        className: "mb-6",
                                        children: [w.jsx("h4", {
                                            className: "text-sm font-semibold text-gray-700 mb-3",
                                            children: "Quick Palettes"
                                        }), w.jsx("div", {
                                            className: "grid grid-cols-3 gap-3",
                                            children: B.map(E => w.jsxs(M.button, {
                                                onClick: () => U(E.colors),
                                                className: "group p-3 rounded-xl border-2 border-gray-100 hover:border-purple-300 transition-all duration-200",
                                                whileHover: {
                                                    scale: 1.05
                                                },
                                                whileTap: {
                                                    scale: .95
                                                },
                                                children: [w.jsx("div", {
                                                    className: "flex gap-1 mb-1",
                                                    children: E.colors.map( (L, b) => w.jsx("div", {
                                                        className: "w-4 h-4 rounded-full",
                                                        style: {
                                                            backgroundColor: L
                                                        }
                                                    }, b))
                                                }), w.jsx("span", {
                                                    className: "text-xs font-medium text-gray-700",
                                                    children: E.name
                                                })]
                                            }, E.name))
                                        })]
                                    }), w.jsx("div", {
                                        className: "space-y-4",
                                        children: ["base", "accent", "center", "thread"].map(E => w.jsxs("div", {
                                            children: [w.jsxs("label", {
                                                className: "block text-sm font-semibold text-gray-700 mb-2 capitalize",
                                                children: [E, " Color"]
                                            }), w.jsx("div", {
                                                className: "flex flex-wrap gap-2",
                                                children: h.slice(0, 12).map(L => w.jsx(M.button, {
                                                    onClick: () => t(b => ({
                                                        ...b,
                                                        [E]: L
                                                    })),
                                                    className: `w-8 h-8 rounded-full border-2 transition-all duration-200 ${A[E] === L ? "border-gray-800 ring-2 ring-gray-300" : "border-gray-200"}`,
                                                    style: {
                                                        backgroundColor: L
                                                    },
                                                    whileHover: {
                                                        scale: 1.1
                                                    },
                                                    whileTap: {
                                                        scale: .9
                                                    }
                                                }, `${E}-${L}`))
                                            })]
                                        }, E))
                                    })]
                                }), c === "shape" && w.jsxs("div", {
                                    children: [w.jsx("h3", {
                                        className: "text-xl font-bold text-gray-800 mb-4",
                                        children: "Shape & Size"
                                    }), w.jsxs("div", {
                                        className: "space-y-6",
                                        children: [w.jsxs("div", {
                                            children: [w.jsx("h4", {
                                                className: "text-sm font-semibold text-gray-700 mb-3",
                                                children: "Shape"
                                            }), w.jsx("div", {
                                                className: "grid grid-cols-2 gap-3",
                                                children: p.map(E => w.jsx(M.button, {
                                                    onClick: () => s(E.name),
                                                    className: `p-4 rounded-xl font-medium transition-all duration-200 ${i === E.name ? "bg-purple-100 text-purple-700 ring-2 ring-purple-300" : "bg-gray-50 text-gray-700"}`,
                                                    whileHover: {
                                                        scale: 1.02
                                                    },
                                                    whileTap: {
                                                        scale: .98
                                                    },
                                                    children: E.label
                                                }, E.name))
                                            })]
                                        }), w.jsxs("div", {
                                            children: [w.jsx("h4", {
                                                className: "text-sm font-semibold text-gray-700 mb-3",
                                                children: "Size"
                                            }), w.jsx("div", {
                                                className: "grid grid-cols-3 gap-3",
                                                children: m.map(E => w.jsx(M.button, {
                                                    onClick: () => a(E.name),
                                                    className: `p-3 rounded-xl font-medium transition-all duration-200 ${o === E.name ? "bg-purple-100 text-purple-700 ring-2 ring-purple-300" : "bg-gray-50 text-gray-700"}`,
                                                    whileHover: {
                                                        scale: 1.02
                                                    },
                                                    whileTap: {
                                                        scale: .98
                                                    },
                                                    children: E.label
                                                }, E.name))
                                            })]
                                        })]
                                    })]
                                }), c === "pattern" && w.jsxs("div", {
                                    children: [w.jsx("h3", {
                                        className: "text-xl font-bold text-gray-800 mb-4",
                                        children: "Pattern"
                                    }), w.jsx("div", {
                                        className: "grid grid-cols-2 gap-3",
                                        children: y.map(E => w.jsxs(M.button, {
                                            onClick: () => n(E.name),
                                            className: `p-4 rounded-xl font-medium transition-all duration-200 flex items-center gap-3 ${r === E.name ? "bg-purple-100 text-purple-700 ring-2 ring-purple-300" : "bg-gray-50 text-gray-700"}`,
                                            whileHover: {
                                                scale: 1.02
                                            },
                                            whileTap: {
                                                scale: .98
                                            },
                                            children: [w.jsx(E.icon, {
                                                size: 20
                                            }), E.label]
                                        }, E.name))
                                    })]
                                }), c === "style" && w.jsxs("div", {
                                    children: [w.jsx("h3", {
                                        className: "text-xl font-bold text-gray-800 mb-4",
                                        children: "Style"
                                    }), w.jsx("div", {
                                        className: "grid grid-cols-2 gap-3",
                                        children: g.map(E => w.jsx(M.button, {
                                            onClick: () => u(E.name),
                                            className: `p-4 rounded-xl font-medium transition-all duration-200 ${l === E.name ? "bg-purple-100 text-purple-700 ring-2 ring-purple-300" : "bg-gray-50 text-gray-700"}`,
                                            whileHover: {
                                                scale: 1.02
                                            },
                                            whileTap: {
                                                scale: .98
                                            },
                                            children: E.label
                                        }, E.name))
                                    })]
                                })]
                            }, c)
                        })
                    }), w.jsxs("div", {
                        className: "hidden lg:block space-y-6",
                        children: [w.jsxs(M.div, {
                            className: "bg-white rounded-3xl p-6 shadow-xl border border-gray-100",
                            initial: {
                                opacity: 0,
                                y: 30
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                duration: .6,
                                delay: .3
                            },
                            children: [w.jsxs("h3", {
                                className: "text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3",
                                children: [w.jsx(Ou, {
                                    className: "text-purple-500"
                                }), "Color Palettes"]
                            }), w.jsx("div", {
                                className: "grid grid-cols-2 md:grid-cols-4 gap-4 mb-6",
                                children: B.map(E => w.jsxs(M.button, {
                                    onClick: () => U(E.colors),
                                    className: "group p-4 rounded-2xl border-2 border-gray-100 hover:border-purple-300 transition-all duration-200",
                                    whileHover: {
                                        scale: 1.05
                                    },
                                    whileTap: {
                                        scale: .95
                                    },
                                    children: [w.jsx("div", {
                                        className: "flex gap-1 mb-2",
                                        children: E.colors.map( (L, b) => w.jsx("div", {
                                            className: "w-6 h-6 rounded-full",
                                            style: {
                                                backgroundColor: L
                                            }
                                        }, b))
                                    }), w.jsx("span", {
                                        className: "text-sm font-medium text-gray-700 group-hover:text-purple-600",
                                        children: E.name
                                    })]
                                }, E.name))
                            }), w.jsx("div", {
                                className: "space-y-4",
                                children: ["base", "accent", "center", "thread"].map(E => w.jsxs("div", {
                                    children: [w.jsxs("label", {
                                        className: "block text-sm font-semibold text-gray-700 mb-3 capitalize",
                                        children: [E, " Color"]
                                    }), w.jsx("div", {
                                        className: "flex flex-wrap gap-2",
                                        children: h.map(L => w.jsx(M.button, {
                                            onClick: () => t(b => ({
                                                ...b,
                                                [E]: L
                                            })),
                                            className: `w-8 h-8 rounded-full border-2 transition-all duration-200 ${A[E] === L ? "border-gray-800 ring-2 ring-gray-300" : "border-gray-200 hover:border-gray-400"}`,
                                            style: {
                                                backgroundColor: L
                                            },
                                            whileHover: {
                                                scale: 1.1
                                            },
                                            whileTap: {
                                                scale: .9
                                            }
                                        }, `${E}-${L}`))
                                    })]
                                }, E))
                            })]
                        }), w.jsxs("div", {
                            className: "grid md:grid-cols-2 gap-6",
                            children: [w.jsxs(M.div, {
                                className: "bg-white rounded-3xl p-6 shadow-xl border border-gray-100",
                                initial: {
                                    opacity: 0,
                                    y: 30
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    duration: .6,
                                    delay: .4
                                },
                                children: [w.jsx("h3", {
                                    className: "text-xl font-bold text-gray-800 mb-4",
                                    children: "Shape"
                                }), w.jsx("div", {
                                    className: "space-y-3",
                                    children: p.map(E => w.jsx(M.button, {
                                        onClick: () => s(E.name),
                                        className: `w-full p-4 rounded-xl font-medium transition-all duration-200 ${i === E.name ? "bg-purple-100 text-purple-700 ring-2 ring-purple-300" : "bg-gray-50 text-gray-700 hover:bg-gray-100"}`,
                                        whileHover: {
                                            scale: 1.02
                                        },
                                        whileTap: {
                                            scale: .98
                                        },
                                        children: E.label
                                    }, E.name))
                                })]
                            }), w.jsxs(M.div, {
                                className: "bg-white rounded-3xl p-6 shadow-xl border border-gray-100",
                                initial: {
                                    opacity: 0,
                                    y: 30
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    duration: .6,
                                    delay: .5
                                },
                                children: [w.jsx("h3", {
                                    className: "text-xl font-bold text-gray-800 mb-4",
                                    children: "Pattern"
                                }), w.jsx("div", {
                                    className: "space-y-3",
                                    children: y.map(E => w.jsxs(M.button, {
                                        onClick: () => n(E.name),
                                        className: `w-full p-4 rounded-xl font-medium transition-all duration-200 flex items-center gap-3 ${r === E.name ? "bg-purple-100 text-purple-700 ring-2 ring-purple-300" : "bg-gray-50 text-gray-700 hover:bg-gray-100"}`,
                                        whileHover: {
                                            scale: 1.02
                                        },
                                        whileTap: {
                                            scale: .98
                                        },
                                        children: [w.jsx(E.icon, {
                                            size: 20
                                        }), E.label]
                                    }, E.name))
                                })]
                            })]
                        }), w.jsxs("div", {
                            className: "grid md:grid-cols-2 gap-6",
                            children: [w.jsxs(M.div, {
                                className: "bg-white rounded-3xl p-6 shadow-xl border border-gray-100",
                                initial: {
                                    opacity: 0,
                                    y: 30
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    duration: .6,
                                    delay: .6
                                },
                                children: [w.jsx("h3", {
                                    className: "text-xl font-bold text-gray-800 mb-4",
                                    children: "Size"
                                }), w.jsx("div", {
                                    className: "space-y-3",
                                    children: m.map(E => w.jsx(M.button, {
                                        onClick: () => a(E.name),
                                        className: `w-full p-4 rounded-xl font-medium transition-all duration-200 ${o === E.name ? "bg-purple-100 text-purple-700 ring-2 ring-purple-300" : "bg-gray-50 text-gray-700 hover:bg-gray-100"}`,
                                        whileHover: {
                                            scale: 1.02
                                        },
                                        whileTap: {
                                            scale: .98
                                        },
                                        children: E.label
                                    }, E.name))
                                })]
                            }), w.jsxs(M.div, {
                                className: "bg-white rounded-3xl p-6 shadow-xl border border-gray-100",
                                initial: {
                                    opacity: 0,
                                    y: 30
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    duration: .6,
                                    delay: .7
                                },
                                children: [w.jsx("h3", {
                                    className: "text-xl font-bold text-gray-800 mb-4",
                                    children: "Style"
                                }), w.jsx("div", {
                                    className: "space-y-3",
                                    children: g.map(E => w.jsx(M.button, {
                                        onClick: () => u(E.name),
                                        className: `w-full p-4 rounded-xl font-medium transition-all duration-200 ${l === E.name ? "bg-purple-100 text-purple-700 ring-2 ring-purple-300" : "bg-gray-50 text-gray-700 hover:bg-gray-100"}`,
                                        whileHover: {
                                            scale: 1.02
                                        },
                                        whileTap: {
                                            scale: .98
                                        },
                                        children: E.label
                                    }, E.name))
                                })]
                            })]
                        })]
                    }), w.jsxs(M.div, {
                        className: "flex gap-4 mt-6",
                        initial: {
                            opacity: 0,
                            y: 30
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: .6,
                            delay: .8
                        },
                        children: [w.jsxs(M.button, {
                            onClick: Q,
                            className: "bg-gray-100 text-gray-700 px-6 md:px-8 py-3 md:py-4 rounded-2xl font-medium hover:bg-gray-200 transition-all duration-200 shadow-lg flex items-center gap-3",
                            whileHover: {
                                scale: 1.05
                            },
                            whileTap: {
                                scale: .95
                            },
                            children: [w.jsx(iH, {
                                size: 18
                            }), "Reset"]
                        }), w.jsxs(M.button, {
                            onClick: e,
                            className: "flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 md:px-10 py-3 md:py-4 rounded-2xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-3",
                            whileHover: {
                                scale: 1.02
                            },
                            whileTap: {
                                scale: .98
                            },
                            children: ["View Gallery", w.jsx(Ch, {
                                size: 20
                            })]
                        })]
                    })]
                })]
            })]
        })
    })
}
  , fQ = document.createElement("style");
fQ.textContent = `
  @keyframes twinkle {
    0%, 100% { opacity: 0.3; transform: scale(1); }
    50% { opacity: 1; transform: scale(1.2); }
  }
`;
document.head.appendChild(fQ);
const qL = "/assets/img1-BcGzY_-r.jpg"
  , Ab = "/assets/img2-8Rek8KQK.jpg"
  , eb = "/assets/img3-DpOb-oGn.jpg"
  , tb = ({onNext: e}) => {
    const [A,t] = I.useState(null)
      , r = [{
        url: qL,
        caption: "Every moment with you is a treasure that I hold close to my heart",
        handwriting: "Me & My Akka"
    }, {
        url: Ab,
        caption: "Himawari like sister",
        handwriting: "Always laughing together"
    }, {
        url: eb,
        caption: "OK OK",
        handwriting: "Happy Rakhi!"
    }]
      , n = i => {
        const s = [-5, 3, -2];
        return s[i % s.length]
    }
    ;
    return w.jsxs("div", {
        className: "min-h-screen p-4 md:p-6 relative overflow-hidden",
        style: {
            background: "linear-gradient(135deg, #F5F1E8 0%, #E8DDD4 30%, #D4C5B9 70%, #C7B299 100%)"
        },
        children: [w.jsx("div", {
            className: "absolute inset-0 opacity-30",
            style: {
                backgroundImage: `
               radial-gradient(circle at 25px 25px, rgba(139, 69, 19, 0.1) 2px, transparent 2px),
               radial-gradient(circle at 75px 75px, rgba(160, 82, 45, 0.08) 1px, transparent 1px)
             `,
                backgroundSize: "50px 50px, 25px 25px"
            }
        }), w.jsx("div", {
            className: "absolute top-0 left-10 w-8 h-full bg-gradient-to-b from-amber-800/20 to-amber-900/20 opacity-40"
        }), w.jsx("div", {
            className: "absolute top-0 right-10 w-8 h-full bg-gradient-to-b from-amber-800/20 to-amber-900/20 opacity-40"
        }), w.jsxs("div", {
            className: "max-w-7xl mx-auto relative z-10",
            children: [w.jsxs(M.div, {
                className: "text-center mb-16",
                initial: {
                    opacity: 0,
                    y: -30
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: .8
                },
                children: [w.jsx("h1", {
                    className: "text-5xl md:text-7xl font-bold text-amber-900 mb-6 tracking-wide",
                    style: {
                        fontFamily: "serif",
                        textShadow: "2px 2px 4px rgba(139, 69, 19, 0.3)"
                    },
                    children: "Gallery"
                }), w.jsx("p", {
                    className: "text-xl md:text-2xl text-amber-800 font-medium",
                    children: '"Some memories with my best sis"'
                }), w.jsxs("div", {
                    className: "flex items-center justify-center mt-8 gap-4",
                    children: [w.jsx("div", {
                        className: "w-16 h-0.5 bg-amber-600"
                    }), w.jsx(Ue, {
                        className: "text-amber-600",
                        size: 16,
                        fill: "currentColor"
                    }), w.jsx("div", {
                        className: "w-16 h-0.5 bg-amber-600"
                    })]
                })]
            }), w.jsx("div", {
                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16 mb-20",
                children: r.map( (i, s) => w.jsxs(M.div, {
                    className: "relative group cursor-pointer",
                    style: {
                        transform: `rotate(${n(s)}deg)`
                    },
                    initial: {
                        opacity: 0,
                        y: 50,
                        rotate: n(s)
                    },
                    animate: {
                        opacity: 1,
                        y: 0,
                        rotate: n(s)
                    },
                    transition: {
                        delay: s * .3,
                        duration: .6
                    },
                    whileHover: {
                        scale: 1.05,
                        rotate: 0,
                        zIndex: 10,
                        transition: {
                            duration: .3
                        }
                    },
                    onClick: () => t(s),
                    children: [w.jsxs("div", {
                        className: `bg-white p-4 pb-16 rounded-lg shadow-2xl relative overflow-hidden
                            hover:shadow-3xl transition-all duration-300`,
                        children: [w.jsx("div", {
                            className: "absolute top-2 right-2 w-8 h-8 bg-yellow-100 rounded-full opacity-60"
                        }), w.jsx("div", {
                            className: "absolute bottom-20 left-2 w-6 h-6 bg-amber-100 rounded-full opacity-40"
                        }), w.jsx("div", {
                            className: "absolute top-1/2 right-1 w-3 h-12 bg-amber-200 opacity-30 rounded-full"
                        }), w.jsxs("div", {
                            className: "aspect-square overflow-hidden bg-gray-100 relative",
                            children: [w.jsx("img", {
                                src: i.url,
                                alt: `Memory ${s + 1}`,
                                className: `w-full h-full object-cover filter sepia-[0.2] contrast-[1.1] brightness-[0.95]
                             transition-all duration-500 group-hover:sepia-0 group-hover:contrast-100 group-hover:brightness-100`
                            }), w.jsx("div", {
                                className: `absolute inset-0 bg-gradient-to-br from-amber-50/30 via-transparent to-amber-100/20
                                pointer-events-none`
                            }), w.jsx("div", {
                                className: `absolute top-0 right-0 w-6 h-6 bg-white transform rotate-45 translate-x-3 -translate-y-3
                                opacity-80`
                            })]
                        }), w.jsx("div", {
                            className: "mt-4 space-y-2",
                            children: w.jsx("p", {
                                className: "text-amber-900 text-lg leading-relaxed font-medium",
                                style: {
                                    fontFamily: "cursive",
                                    transform: "rotate(-1deg)",
                                    textShadow: "0 1px 2px rgba(139, 69, 19, 0.1)"
                                },
                                children: i.handwriting
                            })
                        }), w.jsx("div", {
                            className: `absolute -top-2 left-1/4 w-16 h-8 bg-yellow-100 opacity-70 rounded-sm
                              transform -rotate-12 shadow-sm`
                        }), w.jsx("div", {
                            className: `absolute -bottom-2 right-1/4 w-12 h-6 bg-yellow-100 opacity-70 rounded-sm
                              transform rotate-6 shadow-sm`
                        }), w.jsx("div", {
                            className: "absolute bottom-4 right-4 opacity-60",
                            children: w.jsx(Ue, {
                                className: "text-red-400",
                                size: 16,
                                fill: "currentColor"
                            })
                        })]
                    }), w.jsx("div", {
                        className: "absolute -bottom-2 left-2 right-2 h-6 bg-amber-900/20 rounded-full blur-sm -z-10"
                    })]
                }, s))
            }), w.jsx(M.div, {
                className: "text-center",
                initial: {
                    opacity: 0,
                    y: 30
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    delay: 1,
                    duration: .6
                },
                children: w.jsxs("button", {
                    onClick: e,
                    className: `inline-flex items-center gap-4 bg-gradient-to-r from-purple-600 to-pink-600 
                     text-white px-12 py-5 rounded-full font-semibold text-lg shadow-2xl 
                     hover:scale-105 hover:shadow-3xl transition-all duration-300 relative overflow-hidden
                     border-2 border-purple-500`,
                    style: {
                        fontFamily: "sans-serif"
                    },
                    children: [w.jsxs("span", {
                        className: "relative z-10 flex items-center gap-4",
                        children: ["Final Surprise", w.jsx(Ch, {
                            size: 24
                        })]
                    }), w.jsx("div", {
                        className: `absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
                          transform -skew-x-12 -translate-x-full hover:translate-x-full 
                          transition-transform duration-1000`
                    })]
                })
            })]
        }), w.jsx(Tt, {
            children: A !== null && w.jsx(M.div, {
                className: "fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4",
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                exit: {
                    opacity: 0
                },
                onClick: () => t(null),
                children: w.jsxs(M.div, {
                    className: "relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl",
                    initial: {
                        scale: .8,
                        opacity: 0
                    },
                    animate: {
                        scale: 1,
                        opacity: 1
                    },
                    exit: {
                        scale: .8,
                        opacity: 0
                    },
                    transition: {
                        type: "spring",
                        stiffness: 300,
                        damping: 30
                    },
                    onClick: i => i.stopPropagation(),
                    children: [w.jsx("button", {
                        onClick: () => t(null),
                        className: `absolute top-6 right-6 z-10 bg-white/90 hover:bg-white text-amber-800 
                         w-12 h-12 rounded-full flex items-center justify-center shadow-lg
                         transition-all duration-200 hover:scale-110 border-2 border-amber-200`,
                        children: w.jsx(aH, {
                            size: 24
                        })
                    }), w.jsxs("div", {
                        className: "p-8 pb-20",
                        children: [w.jsxs("div", {
                            className: "aspect-video overflow-hidden rounded-lg shadow-xl relative",
                            children: [w.jsx("img", {
                                src: r[A].url,
                                alt: `Memory ${A + 1}`,
                                className: "w-full h-full object-cover filter sepia-[0.1] contrast-[1.05]"
                            }), w.jsx("div", {
                                className: "absolute inset-0 bg-gradient-to-br from-amber-50/20 via-transparent to-amber-100/10"
                            })]
                        }), w.jsxs("div", {
                            className: "mt-8 space-y-4",
                            children: [w.jsx("p", {
                                className: "text-amber-900 text-2xl leading-relaxed text-center font-medium",
                                style: {
                                    fontFamily: "cursive"
                                },
                                children: r[A].handwriting
                            }), w.jsxs("div", {
                                className: "flex items-start gap-4 justify-center mt-6",
                                children: [w.jsx(Ue, {
                                    className: "text-amber-600 mt-1 flex-shrink-0",
                                    size: 24,
                                    fill: "currentColor"
                                }), w.jsx("p", {
                                    className: "text-amber-800 text-lg leading-relaxed font-medium text-center max-w-2xl",
                                    style: {
                                        fontFamily: "sans-serif"
                                    },
                                    children: r[A].caption
                                })]
                            })]
                        })]
                    }), w.jsx("div", {
                        className: "absolute top-4 left-4 w-6 h-6 bg-yellow-100 rounded-full opacity-40"
                    }), w.jsx("div", {
                        className: "absolute bottom-24 right-4 w-4 h-4 bg-amber-100 rounded-full opacity-30"
                    })]
                })
            })
        })]
    })
}
  , rb = () => {
    const [e,A] = I.useState(!1)
      , t = I.useRef(null)
      , r = "My dearest Sweety Akka,Across oceans and time zones, our hearts remain tied.This Rakhi feels empty without your smile,yet the thread of our bond stretches beyond miles.First time apart, yet closer than ever.Miss you always. ❤️.";
    I.useEffect( () => {
        n();
        const s = setTimeout( () => {
            A(!0)
        }
        , 1500);
        return () => {
            clearTimeout(s),
            t.current && (t.current.innerHTML = "")
        }
    }
    , []);
    const n = () => {
        t.current && (t.current.innerHTML = "",
        i())
    }
      , i = () => {
        const s = Math.sqrt(window.innerWidth ** 2 + window.innerHeight ** 2);
        [{
            x: window.innerWidth * .15,
            y: window.innerHeight * .25,
            color: "rgba(167, 139, 250, 0.03)",
            maxSize: s * 1.2,
            duration: 8
        }, {
            x: window.innerWidth * .85,
            y: window.innerHeight * .75,
            color: "rgba(236, 72, 153, 0.02)",
            maxSize: s * 1.4,
            duration: 10
        }, {
            x: window.innerWidth * .5,
            y: window.innerHeight * .1,
            color: "rgba(129, 140, 248, 0.025)",
            maxSize: s * 1.3,
            duration: 9
        }, {
            x: window.innerWidth * .3,
            y: window.innerHeight * .8,
            color: "rgba(110, 231, 183, 0.02)",
            maxSize: s * 1.5,
            duration: 11
        }, {
            x: window.innerWidth * .7,
            y: window.innerHeight * .3,
            color: "rgba(251, 191, 36, 0.015)",
            maxSize: s * 1.1,
            duration: 7
        }].forEach( (a, l) => {
            var f;
            const u = document.createElement("div");
            u.className = "absolute pointer-events-none",
            u.style.width = "80px",
            u.style.height = "80px",
            u.style.backgroundColor = a.color,
            u.style.borderRadius = "50%",
            u.style.left = a.x - 40 + "px",
            u.style.top = a.y - 40 + "px",
            u.style.filter = "blur(4px)",
            (f = t.current) == null || f.appendChild(u),
            ei.set(u, {
                opacity: 0,
                scale: 0
            }),
            ei.timeline({
                repeat: -1,
                delay: l * 2
            }).to(u, {
                opacity: 1,
                scale: 1,
                duration: 1,
                ease: "power1.out"
            }).to(u, {
                scale: a.maxSize / 80,
                opacity: 0,
                duration: a.duration,
                ease: "power1.out"
            }).to(u, {
                scale: 0,
                duration: .1
            }),
            ei.to(u, {
                x: `+=${Math.random() * 40 - 20}`,
                y: `+=${Math.random() * 40 - 20}`,
                duration: 6 + l * 1,
                repeat: -1,
                yoyo: !0,
                ease: "sine.inOut",
                delay: l * 2
            })
        }
        )
    }
    ;
    return w.jsxs(M.div, {
        className: "min-h-screen relative overflow-hidden flex items-center justify-center",
        style: {
            background: "linear-gradient(135deg, #fdfbf7 0%, #f9f7f4 25%, #f5f3f0 50%, #f1efec 75%, #ede8e0 100%)"
        },
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        },
        transition: {
            duration: 1.5
        },
        children: [w.jsx("div", {
            ref: t,
            className: "absolute inset-0 pointer-events-none z-0"
        }), w.jsx("div", {
            className: "absolute inset-0 pointer-events-none z-0",
            children: [...Array(8)].map( (s, o) => {
                const a = Math.random() * 10
                  , l = 20 + Math.random() * 15
                  , u = 5 + Math.random() * 90;
                return w.jsx(M.div, {
                    className: "absolute",
                    style: {
                        left: `${u}%`
                    },
                    initial: {
                        y: window.innerHeight + 100,
                        x: 0,
                        rotate: 0
                    },
                    animate: {
                        y: -200,
                        x: [0, Math.sin(o * 1.5) * 80, Math.cos(o * 1.2) * 60, 0],
                        rotate: [0, 10, -10, 5, 0]
                    },
                    transition: {
                        duration: l,
                        repeat: 1 / 0,
                        delay: a,
                        ease: "linear",
                        x: {
                            duration: l,
                            repeat: 1 / 0,
                            ease: "easeInOut"
                        },
                        rotate: {
                            duration: 8,
                            repeat: 1 / 0,
                            ease: "easeInOut"
                        }
                    },
                    children: w.jsxs("div", {
                        className: "relative",
                        children: [w.jsx("div", {
                            className: "w-8 h-10 rounded-full opacity-50",
                            style: {
                                background: `linear-gradient(135deg, ${o % 5 === 0 ? "#fbbf24" : o % 5 === 1 ? "#f472b6" : o % 5 === 2 ? "#a78bfa" : o % 5 === 3 ? "#34d399" : "#60a5fa"} 0%, ${o % 5 === 0 ? "#f59e0b" : o % 5 === 1 ? "#ec4899" : o % 5 === 2 ? "#8b5cf6" : o % 5 === 3 ? "#10b981" : "#3b82f6"} 100%)`,
                                boxShadow: `0 4px 12px ${o % 5 === 0 ? "#fbbf2420" : o % 5 === 1 ? "#f472b620" : o % 5 === 2 ? "#a78bfa20" : o % 5 === 3 ? "#34d39920" : "#60a5fa20"}`,
                                filter: "blur(0.5px)"
                            }
                        }), w.jsx("div", {
                            className: "w-0.5 h-12 bg-gray-400 mx-auto opacity-30",
                            style: {
                                marginTop: "2px"
                            }
                        })]
                    })
                }, `balloon-${o}`)
            }
            )
        }), w.jsx("div", {
            className: "absolute inset-0 pointer-events-none z-0",
            children: [...Array(15)].map( (s, o) => w.jsx(M.div, {
                className: "absolute w-1 h-1 rounded-full opacity-20",
                style: {
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    background: o % 3 === 0 ? "#d4a574" : o % 3 === 1 ? "#c4956c" : "#b8956a"
                },
                animate: {
                    y: [0, -15, 0],
                    opacity: [.1, .3, .1],
                    scale: [.5, 1, .5]
                },
                transition: {
                    duration: 4 + Math.random() * 2,
                    repeat: 1 / 0,
                    delay: Math.random() * 3,
                    ease: "easeInOut"
                }
            }, `particle-${o}`))
        }), w.jsx("div", {
            className: "relative z-10 text-center max-w-4xl mx-auto px-6",
            children: w.jsx("div", {
                className: "space-y-8",
                children: w.jsx(Tt, {
                    children: e && w.jsx(M.div, {
                        initial: {
                            opacity: 0,
                            y: 50,
                            rotateX: -15
                        },
                        animate: {
                            opacity: 1,
                            y: 0,
                            rotateX: 0
                        },
                        transition: {
                            duration: .8,
                            ease: "easeOut"
                        },
                        className: "text-center",
                        children: w.jsxs("div", {
                            className: "max-w-4xl mx-auto p-12 md:p-16 relative",
                            style: {
                                background: `
                      linear-gradient(145deg, #faf8f5 0%, #f5f2ee 100%),
                      radial-gradient(circle at 20% 80%, rgba(139, 69, 19, 0.02) 0%, transparent 50%),
                      radial-gradient(circle at 80% 20%, rgba(160, 82, 45, 0.02) 0%, transparent 50%)
                    `,
                                borderRadius: "24px",
                                border: "2px solid rgba(139, 69, 19, 0.1)",
                                boxShadow: `
                      0 25px 50px rgba(139, 69, 19, 0.1),
                      inset 0 1px 0 rgba(255, 255, 255, 0.8),
                      inset 0 -1px 0 rgba(139, 69, 19, 0.05)
                    `,
                                transform: "perspective(1000px) rotateX(2deg)",
                                position: "relative"
                            },
                            children: [w.jsx("div", {
                                className: "absolute inset-0 rounded-3xl opacity-30 pointer-events-none",
                                style: {
                                    backgroundImage: `
                        radial-gradient(circle at 25% 25%, rgba(139, 69, 19, 0.03) 1px, transparent 1px),
                        radial-gradient(circle at 75% 75%, rgba(160, 82, 45, 0.02) 1px, transparent 1px)
                      `,
                                    backgroundSize: "20px 20px, 25px 25px"
                                }
                            }), w.jsx("div", {
                                className: "absolute top-4 left-4 w-6 h-6 border-l-2 border-t-2 border-amber-800 opacity-20 rounded-tl-lg"
                            }), w.jsx("div", {
                                className: "absolute top-4 right-4 w-6 h-6 border-r-2 border-t-2 border-amber-800 opacity-20 rounded-tr-lg"
                            }), w.jsx("div", {
                                className: "absolute bottom-4 left-4 w-6 h-6 border-l-2 border-b-2 border-amber-800 opacity-20 rounded-bl-lg"
                            }), w.jsx("div", {
                                className: "absolute bottom-4 right-4 w-6 h-6 border-r-2 border-b-2 border-amber-800 opacity-20 rounded-br-lg"
                            }), w.jsxs("div", {
                                className: "mb-8",
                                children: [w.jsxs("div", {
                                    className: "flex items-center justify-center gap-4 mb-6",
                                    children: [w.jsx("div", {
                                        className: "w-16 h-px bg-gradient-to-r from-transparent via-amber-800 to-transparent opacity-30"
                                    }), w.jsx(M.div, {
                                        animate: {
                                            rotate: [0, 360]
                                        },
                                        transition: {
                                            duration: 20,
                                            repeat: 1 / 0,
                                            ease: "linear"
                                        },
                                        children: w.jsx(oC, {
                                            className: "text-amber-700 opacity-60",
                                            size: 16
                                        })
                                    }), w.jsx("div", {
                                        className: "w-16 h-px bg-gradient-to-r from-transparent via-amber-800 to-transparent opacity-30"
                                    })]
                                }), w.jsx(M.h2, {
                                    className: "text-2xl md:text-3xl font-bold text-amber-900 mb-4",
                                    style: {
                                        fontFamily: "Dancing Script, cursive",
                                        textShadow: "0 2px 4px rgba(139, 69, 19, 0.1)"
                                    },
                                    animate: {
                                        textShadow: ["0 2px 4px rgba(139, 69, 19, 0.1)", "0 4px 8px rgba(139, 69, 19, 0.15)", "0 2px 4px rgba(139, 69, 19, 0.1)"]
                                    },
                                    transition: {
                                        duration: 3,
                                        repeat: 1 / 0
                                    },
                                    children: "A Message From Your Brother"
                                })]
                            }), w.jsx("div", {
                                className: "relative mb-8",
                                children: w.jsx(M.p, {
                                    className: "text-xl md:text-2xl leading-relaxed text-amber-900 font-medium",
                                    style: {
                                        fontFamily: "serif",
                                        lineHeight: "1.8",
                                        textShadow: "0 1px 2px rgba(139, 69, 19, 0.05)"
                                    },
                                    initial: {
                                        opacity: 0
                                    },
                                    animate: {
                                        opacity: 1
                                    },
                                    transition: {
                                        duration: 1,
                                        delay: .5
                                    },
                                    children: r
                                })
                            }), w.jsxs(M.div, {
                                className: "text-right",
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    duration: .8,
                                    delay: 1
                                },
                                children: [w.jsxs("div", {
                                    className: "flex items-center justify-end gap-3 mb-4",
                                    children: [w.jsx("div", {
                                        className: "w-12 h-px bg-gradient-to-r from-transparent to-amber-800 opacity-30"
                                    }), w.jsx(Ue, {
                                        className: "text-rose-600 opacity-70",
                                        size: 12,
                                        fill: "currentColor"
                                    }), w.jsx("div", {
                                        className: "w-12 h-px bg-gradient-to-l from-transparent to-amber-800 opacity-30"
                                    })]
                                }), w.jsx("p", {
                                    className: "text-lg md:text-xl font-medium text-amber-800 mb-2",
                                    style: {
                                        fontFamily: "serif",
                                        fontStyle: "italic"
                                    },
                                    children: "With endless love and warm wishes,"
                                }), w.jsx(M.p, {
                                    className: "text-xl md:text-2xl font-bold text-amber-900",
                                    style: {
                                        fontFamily: "Dancing Script, cursive",
                                        transform: "rotate(-1deg)",
                                        textShadow: "0 2px 4px rgba(139, 69, 19, 0.1)"
                                    },
                                    animate: {
                                        rotate: [-1, 1, -1],
                                        textShadow: ["0 2px 4px rgba(139, 69, 19, 0.1)", "0 4px 8px rgba(139, 69, 19, 0.2)", "0 2px 4px rgba(139, 69, 19, 0.1)"]
                                    },
                                    transition: {
                                        duration: 4,
                                        repeat: 1 / 0
                                    },
                                    children: "Your Loving Brother ugesh ❤️"
                                })]
                            }), w.jsx("div", {
                                className: "absolute top-1/2 left-6 transform -translate-y-1/2 opacity-10",
                                children: w.jsx("div", {
                                    className: "w-8 h-8 border-2 border-amber-800 rounded-full"
                                })
                            }), w.jsx("div", {
                                className: "absolute top-1/2 right-6 transform -translate-y-1/2 opacity-10",
                                children: w.jsx("div", {
                                    className: "w-6 h-6 border-2 border-amber-800 rounded-full"
                                })
                            })]
                        })
                    })
                })
            })
        })]
    })
}
;
function nb() {
    const [e,A] = I.useState(0)
      , t = () => {
        A(n => n + 1)
    }
      , r = () => {
        switch (e) {
        case 0:
            return w.jsx(Up, {
                onNext: t
            });
        case 1:
            return w.jsx(x_, {
                onNext: t
            });
        case 2:
            return w.jsx(ZL, {
                onNext: t
            });
        case 3:
            return w.jsx(tb, {
                onNext: t
            });
        case 4:
            return w.jsx(rb, {});
        default:
            return w.jsx(Up, {
                onNext: t
            })
        }
    }
    ;
    return w.jsx(Q_, {
        children: w.jsxs("div", {
            className: "App",
            children: [r(), w.jsx(F_, {})]
        })
    })
}
Kw(document.getElementById("root")).render(w.jsx(I.StrictMode, {
    children: w.jsx(nb, {})
}));
