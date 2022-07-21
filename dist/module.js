define(["@grafana/data","@grafana/runtime","@grafana/ui","emotion","react"], (__WEBPACK_EXTERNAL_MODULE__grafana_data__, __WEBPACK_EXTERNAL_MODULE__grafana_runtime__, __WEBPACK_EXTERNAL_MODULE__grafana_ui__, __WEBPACK_EXTERNAL_MODULE_emotion__, __WEBPACK_EXTERNAL_MODULE_react__) => { return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./EsnetMatrix.tsx":
/*!*************************!*\
  !*** ./EsnetMatrix.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EsnetMatrix": () => (/* binding */ EsnetMatrix)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _matrix_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./matrix.js */ "./matrix.js");

// import * as d3 from 'd3';

var EsnetMatrix = function EsnetMatrix(_ref) {
  var options = _ref.options,
      data = _ref.data,
      width = _ref.width,
      height = _ref.height,
      id = _ref.id;
  var ref = _matrix_js__WEBPACK_IMPORTED_MODULE_1__.matrix(data, id, height, options);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    ref: ref,
    width: width,
    height: height
  });
};

/***/ }),

/***/ "./d3.min.js":
/*!*******************!*\
  !*** ./d3.min.js ***!
  \*******************/
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e40) { throw _e40; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e41) { didErr = true; err = _e41; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

// https://d3js.org v7.0.0 Copyright 2010-2021 Mike Bostock
!function (t, n) {
  "object" == ( false ? 0 : _typeof(exports)) && "undefined" != "object" ? n(exports) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (n),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;
}(this, function (t) {
  "use strict";

  function n(t, n) {
    return null == t || null == n ? NaN : t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
  }

  function e(t) {
    var e = t,
        r = t;

    function i(t, n, e, i) {
      for (null == e && (e = 0), null == i && (i = t.length); e < i;) {
        var _o2 = e + i >>> 1;

        r(t[_o2], n) < 0 ? e = _o2 + 1 : i = _o2;
      }

      return e;
    }

    return 1 === t.length && (e = function e(n, _e2) {
      return t(n) - _e2;
    }, r = function (t) {
      return function (e, r) {
        return n(t(e), r);
      };
    }(t)), {
      left: i,
      center: function center(t, n, r, o) {
        null == r && (r = 0), null == o && (o = t.length);
        var a = i(t, n, r, o - 1);
        return a > r && e(t[a - 1], n) > -e(t[a], n) ? a - 1 : a;
      },
      right: function right(t, n, e, i) {
        for (null == e && (e = 0), null == i && (i = t.length); e < i;) {
          var _o3 = e + i >>> 1;

          r(t[_o3], n) > 0 ? i = _o3 : e = _o3 + 1;
        }

        return e;
      }
    };
  }

  function r(t) {
    return null === t ? NaN : +t;
  }

  var i = e(n),
      o = i.right,
      a = i.left,
      u = e(r).center;

  function c(t, n) {
    var e = 0;

    if (void 0 === n) {
      var _iterator = _createForOfIteratorHelper(t),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _n2 = _step.value;
          null != _n2 && (_n2 = +_n2) >= _n2 && ++e;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    } else {
      var _r2 = -1;

      var _iterator2 = _createForOfIteratorHelper(t),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var _i2 = _step2.value;
          null != (_i2 = n(_i2, ++_r2, t)) && (_i2 = +_i2) >= _i2 && ++e;
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }

    return e;
  }

  function f(t) {
    return 0 | t.length;
  }

  function s(t) {
    return !(t > 0);
  }

  function l(t) {
    return "object" != _typeof(t) || "length" in t ? t : Array.from(t);
  }

  function h(t, n) {
    var e,
        r = 0,
        i = 0,
        o = 0;

    if (void 0 === n) {
      var _iterator3 = _createForOfIteratorHelper(t),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var _n3 = _step3.value;
          null != _n3 && (_n3 = +_n3) >= _n3 && (e = _n3 - i, i += e / ++r, o += e * (_n3 - i));
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    } else {
      var _a2 = -1;

      var _iterator4 = _createForOfIteratorHelper(t),
          _step4;

      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var _u2 = _step4.value;
          null != (_u2 = n(_u2, ++_a2, t)) && (_u2 = +_u2) >= _u2 && (e = _u2 - i, i += e / ++r, o += e * (_u2 - i));
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
    }

    if (r > 1) return o / (r - 1);
  }

  function d(t, n) {
    var e = h(t, n);
    return e ? Math.sqrt(e) : e;
  }

  function p(t, n) {
    var e, r;

    if (void 0 === n) {
      var _iterator5 = _createForOfIteratorHelper(t),
          _step5;

      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var _n4 = _step5.value;
          null != _n4 && (void 0 === e ? _n4 >= _n4 && (e = r = _n4) : (e > _n4 && (e = _n4), r < _n4 && (r = _n4)));
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }
    } else {
      var _i3 = -1;

      var _iterator6 = _createForOfIteratorHelper(t),
          _step6;

      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          var _o4 = _step6.value;
          null != (_o4 = n(_o4, ++_i3, t)) && (void 0 === e ? _o4 >= _o4 && (e = r = _o4) : (e > _o4 && (e = _o4), r < _o4 && (r = _o4)));
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }
    }

    return [e, r];
  }

  var g = /*#__PURE__*/function () {
    function g() {
      _classCallCheck(this, g);

      this._partials = new Float64Array(32), this._n = 0;
    }

    _createClass(g, [{
      key: "add",
      value: function add(t) {
        var n = this._partials;
        var e = 0;

        for (var _r3 = 0; _r3 < this._n && _r3 < 32; _r3++) {
          var _i4 = n[_r3],
              _o5 = t + _i4,
              _a3 = Math.abs(t) < Math.abs(_i4) ? t - (_o5 - _i4) : _i4 - (_o5 - t);

          _a3 && (n[e++] = _a3), t = _o5;
        }

        return n[e] = t, this._n = e + 1, this;
      }
    }, {
      key: "valueOf",
      value: function valueOf() {
        var t = this._partials;
        var n,
            e,
            r,
            i = this._n,
            o = 0;

        if (i > 0) {
          for (o = t[--i]; i > 0 && (n = o, e = t[--i], o = n + e, r = e - (o - n), !r);) {
            ;
          }

          i > 0 && (r < 0 && t[i - 1] < 0 || r > 0 && t[i - 1] > 0) && (e = 2 * r, n = o + e, e == n - o && (o = n));
        }

        return o;
      }
    }]);

    return g;
  }();

  var y = /*#__PURE__*/function (_Map) {
    _inherits(y, _Map);

    var _super = _createSuper(y);

    function y(t) {
      var _this;

      var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : x;

      _classCallCheck(this, y);

      if (_this = _super.call(this), Object.defineProperties(_assertThisInitialized(_this), {
        _intern: {
          value: new Map()
        },
        _key: {
          value: n
        }
      }), null != t) {
        var _iterator7 = _createForOfIteratorHelper(t),
            _step7;

        try {
          for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
            var _step7$value = _slicedToArray(_step7.value, 2),
                _n5 = _step7$value[0],
                _e3 = _step7$value[1];

            _this.set(_n5, _e3);
          }
        } catch (err) {
          _iterator7.e(err);
        } finally {
          _iterator7.f();
        }
      }

      return _possibleConstructorReturn(_this);
    }

    _createClass(y, [{
      key: "get",
      value: function get(t) {
        return _get(_getPrototypeOf(y.prototype), "get", this).call(this, _(this, t));
      }
    }, {
      key: "has",
      value: function has(t) {
        return _get(_getPrototypeOf(y.prototype), "has", this).call(this, _(this, t));
      }
    }, {
      key: "set",
      value: function set(t, n) {
        return _get(_getPrototypeOf(y.prototype), "set", this).call(this, b(this, t), n);
      }
    }, {
      key: "delete",
      value: function _delete(t) {
        return _get(_getPrototypeOf(y.prototype), "delete", this).call(this, m(this, t));
      }
    }]);

    return y;
  }( /*#__PURE__*/_wrapNativeSuper(Map));

  var v = /*#__PURE__*/function (_Set) {
    _inherits(v, _Set);

    var _super2 = _createSuper(v);

    function v(t) {
      var _this2;

      var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : x;

      _classCallCheck(this, v);

      if (_this2 = _super2.call(this), Object.defineProperties(_assertThisInitialized(_this2), {
        _intern: {
          value: new Map()
        },
        _key: {
          value: n
        }
      }), null != t) {
        var _iterator8 = _createForOfIteratorHelper(t),
            _step8;

        try {
          for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
            var _n6 = _step8.value;

            _this2.add(_n6);
          }
        } catch (err) {
          _iterator8.e(err);
        } finally {
          _iterator8.f();
        }
      }

      return _possibleConstructorReturn(_this2);
    }

    _createClass(v, [{
      key: "has",
      value: function has(t) {
        return _get(_getPrototypeOf(v.prototype), "has", this).call(this, _(this, t));
      }
    }, {
      key: "add",
      value: function add(t) {
        return _get(_getPrototypeOf(v.prototype), "add", this).call(this, b(this, t));
      }
    }, {
      key: "delete",
      value: function _delete(t) {
        return _get(_getPrototypeOf(v.prototype), "delete", this).call(this, m(this, t));
      }
    }]);

    return v;
  }( /*#__PURE__*/_wrapNativeSuper(Set));

  function _(_ref, e) {
    var t = _ref._intern,
        n = _ref._key;
    var r = n(e);
    return t.has(r) ? t.get(r) : e;
  }

  function b(_ref2, e) {
    var t = _ref2._intern,
        n = _ref2._key;
    var r = n(e);
    return t.has(r) ? t.get(r) : (t.set(r, e), e);
  }

  function m(_ref3, e) {
    var t = _ref3._intern,
        n = _ref3._key;
    var r = n(e);
    return t.has(r) && (e = t.get(e), t["delete"](r)), e;
  }

  function x(t) {
    return null !== t && "object" == _typeof(t) ? t.valueOf() : t;
  }

  function w(t) {
    return t;
  }

  function M(t) {
    for (var _len = arguments.length, n = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      n[_key - 1] = arguments[_key];
    }

    return N(t, w, w, n);
  }

  function A(t) {
    for (var _len2 = arguments.length, n = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      n[_key2 - 1] = arguments[_key2];
    }

    return N(t, Array.from, w, n);
  }

  function T(t, n) {
    for (var _e4 = 1, _r4 = n.length; _e4 < _r4; ++_e4) {
      t = t.flatMap(function (t) {
        return t.pop().map(function (_ref4) {
          var _ref5 = _slicedToArray(_ref4, 2),
              n = _ref5[0],
              e = _ref5[1];

          return [].concat(_toConsumableArray(t), [n, e]);
        });
      });
    }

    return t;
  }

  function S(t, n) {
    for (var _len3 = arguments.length, e = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
      e[_key3 - 2] = arguments[_key3];
    }

    return N(t, w, n, e);
  }

  function E(t, n) {
    for (var _len4 = arguments.length, e = new Array(_len4 > 2 ? _len4 - 2 : 0), _key4 = 2; _key4 < _len4; _key4++) {
      e[_key4 - 2] = arguments[_key4];
    }

    return N(t, Array.from, n, e);
  }

  function k(t) {
    if (1 !== t.length) throw new Error("duplicate key");
    return t[0];
  }

  function N(t, n, e, r) {
    return function t(i, o) {
      if (o >= r.length) return e(i);
      var a = new y(),
          u = r[o++];
      var c = -1;

      var _iterator9 = _createForOfIteratorHelper(i),
          _step9;

      try {
        for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
          var _t2 = _step9.value;

          var _n7 = u(_t2, ++c, i),
              _e5 = a.get(_n7);

          _e5 ? _e5.push(_t2) : a.set(_n7, [_t2]);
        }
      } catch (err) {
        _iterator9.e(err);
      } finally {
        _iterator9.f();
      }

      var _iterator10 = _createForOfIteratorHelper(a),
          _step10;

      try {
        for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
          var _step10$value = _slicedToArray(_step10.value, 2),
              _n8 = _step10$value[0],
              _e6 = _step10$value[1];

          a.set(_n8, t(_e6, o));
        }
      } catch (err) {
        _iterator10.e(err);
      } finally {
        _iterator10.f();
      }

      return n(a);
    }(t, 0);
  }

  function C(t, n) {
    return Array.from(n, function (n) {
      return t[n];
    });
  }

  function P(t) {
    for (var _len5 = arguments.length, e = new Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
      e[_key5 - 1] = arguments[_key5];
    }

    if ("function" != typeof t[Symbol.iterator]) throw new TypeError("values is not iterable");
    t = Array.from(t);

    var _e7 = e,
        _e8 = _slicedToArray(_e7, 1),
        _e8$ = _e8[0],
        r = _e8$ === void 0 ? n : _e8$;

    if (1 === r.length || e.length > 1) {
      var _i5 = Uint32Array.from(t, function (t, n) {
        return n;
      });

      return e.length > 1 ? (e = e.map(function (n) {
        return t.map(n);
      }), _i5.sort(function (t, r) {
        var _iterator11 = _createForOfIteratorHelper(e),
            _step11;

        try {
          for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
            var _i6 = _step11.value;

            var _e9 = n(_i6[t], _i6[r]);

            if (_e9) return _e9;
          }
        } catch (err) {
          _iterator11.e(err);
        } finally {
          _iterator11.f();
        }
      })) : (r = t.map(r), _i5.sort(function (t, e) {
        return n(r[t], r[e]);
      })), C(t, _i5);
    }

    return t.sort(r);
  }

  var z = Array.prototype.slice;

  function D(t) {
    return function () {
      return t;
    };
  }

  var q = Math.sqrt(50),
      R = Math.sqrt(10),
      F = Math.sqrt(2);

  function O(t, n, e) {
    var r,
        i,
        o,
        a,
        u = -1;
    if (e = +e, (t = +t) === (n = +n) && e > 0) return [t];
    if ((r = n < t) && (i = t, t = n, n = i), 0 === (a = I(t, n, e)) || !isFinite(a)) return [];

    if (a > 0) {
      var _e10 = Math.round(t / a),
          _r5 = Math.round(n / a);

      for (_e10 * a < t && ++_e10, _r5 * a > n && --_r5, o = new Array(i = _r5 - _e10 + 1); ++u < i;) {
        o[u] = (_e10 + u) * a;
      }
    } else {
      a = -a;

      var _e11 = Math.round(t * a),
          _r6 = Math.round(n * a);

      for (_e11 / a < t && ++_e11, _r6 / a > n && --_r6, o = new Array(i = _r6 - _e11 + 1); ++u < i;) {
        o[u] = (_e11 + u) / a;
      }
    }

    return r && o.reverse(), o;
  }

  function I(t, n, e) {
    var r = (n - t) / Math.max(0, e),
        i = Math.floor(Math.log(r) / Math.LN10),
        o = r / Math.pow(10, i);
    return i >= 0 ? (o >= q ? 10 : o >= R ? 5 : o >= F ? 2 : 1) * Math.pow(10, i) : -Math.pow(10, -i) / (o >= q ? 10 : o >= R ? 5 : o >= F ? 2 : 1);
  }

  function U(t, n, e) {
    var r = Math.abs(n - t) / Math.max(0, e),
        i = Math.pow(10, Math.floor(Math.log(r) / Math.LN10)),
        o = r / i;
    return o >= q ? i *= 10 : o >= R ? i *= 5 : o >= F && (i *= 2), n < t ? -i : i;
  }

  function B(t, n, e) {
    var r;

    for (;;) {
      var _i7 = I(t, n, e);

      if (_i7 === r || 0 === _i7 || !isFinite(_i7)) return [t, n];
      _i7 > 0 ? (t = Math.floor(t / _i7) * _i7, n = Math.ceil(n / _i7) * _i7) : _i7 < 0 && (t = Math.ceil(t * _i7) / _i7, n = Math.floor(n * _i7) / _i7), r = _i7;
    }
  }

  function Y(t) {
    return Math.ceil(Math.log(c(t)) / Math.LN2) + 1;
  }

  function L() {
    var t = w,
        n = p,
        e = Y;

    function r(r) {
      Array.isArray(r) || (r = Array.from(r));
      var i,
          a,
          u = r.length,
          c = new Array(u);

      for (i = 0; i < u; ++i) {
        c[i] = t(r[i], i, r);
      }

      var f = n(c),
          s = f[0],
          l = f[1],
          h = e(c, s, l);

      if (!Array.isArray(h)) {
        var _B, _B2;

        var _t3 = l,
            _e12 = +h;

        if (n === p && (_B = B(s, l, _e12), _B2 = _slicedToArray(_B, 2), s = _B2[0], l = _B2[1], _B), (h = O(s, l, _e12))[h.length - 1] >= l) if (_t3 >= l && n === p) {
          var _t4 = I(s, l, _e12);

          isFinite(_t4) && (_t4 > 0 ? l = (Math.floor(l / _t4) + 1) * _t4 : _t4 < 0 && (l = (Math.ceil(l * -_t4) + 1) / -_t4));
        } else h.pop();
      }

      for (var d = h.length; h[0] <= s;) {
        h.shift(), --d;
      }

      for (; h[d - 1] > l;) {
        h.pop(), --d;
      }

      var g,
          y = new Array(d + 1);

      for (i = 0; i <= d; ++i) {
        (g = y[i] = []).x0 = i > 0 ? h[i - 1] : s, g.x1 = i < d ? h[i] : l;
      }

      for (i = 0; i < u; ++i) {
        null != (a = c[i]) && s <= a && a <= l && y[o(h, a, 0, d)].push(r[i]);
      }

      return y;
    }

    return r.value = function (n) {
      return arguments.length ? (t = "function" == typeof n ? n : D(n), r) : t;
    }, r.domain = function (t) {
      return arguments.length ? (n = "function" == typeof t ? t : D([t[0], t[1]]), r) : n;
    }, r.thresholds = function (t) {
      return arguments.length ? (e = "function" == typeof t ? t : Array.isArray(t) ? D(z.call(t)) : D(t), r) : e;
    }, r;
  }

  function j(t, n) {
    var e;

    if (void 0 === n) {
      var _iterator12 = _createForOfIteratorHelper(t),
          _step12;

      try {
        for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
          var _n9 = _step12.value;
          null != _n9 && (e < _n9 || void 0 === e && _n9 >= _n9) && (e = _n9);
        }
      } catch (err) {
        _iterator12.e(err);
      } finally {
        _iterator12.f();
      }
    } else {
      var _r7 = -1;

      var _iterator13 = _createForOfIteratorHelper(t),
          _step13;

      try {
        for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
          var _i8 = _step13.value;
          null != (_i8 = n(_i8, ++_r7, t)) && (e < _i8 || void 0 === e && _i8 >= _i8) && (e = _i8);
        }
      } catch (err) {
        _iterator13.e(err);
      } finally {
        _iterator13.f();
      }
    }

    return e;
  }

  function H(t, n) {
    var e;

    if (void 0 === n) {
      var _iterator14 = _createForOfIteratorHelper(t),
          _step14;

      try {
        for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
          var _n10 = _step14.value;
          null != _n10 && (e > _n10 || void 0 === e && _n10 >= _n10) && (e = _n10);
        }
      } catch (err) {
        _iterator14.e(err);
      } finally {
        _iterator14.f();
      }
    } else {
      var _r8 = -1;

      var _iterator15 = _createForOfIteratorHelper(t),
          _step15;

      try {
        for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
          var _i9 = _step15.value;
          null != (_i9 = n(_i9, ++_r8, t)) && (e > _i9 || void 0 === e && _i9 >= _i9) && (e = _i9);
        }
      } catch (err) {
        _iterator15.e(err);
      } finally {
        _iterator15.f();
      }
    }

    return e;
  }

  function X(t, e) {
    var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : t.length - 1;
    var o = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : n;

    for (; i > r;) {
      if (i - r > 600) {
        var _n12 = i - r + 1,
            _a5 = e - r + 1,
            _u4 = Math.log(_n12),
            _c2 = .5 * Math.exp(2 * _u4 / 3),
            _f2 = .5 * Math.sqrt(_u4 * _c2 * (_n12 - _c2) / _n12) * (_a5 - _n12 / 2 < 0 ? -1 : 1);

        X(t, e, Math.max(r, Math.floor(e - _a5 * _c2 / _n12 + _f2)), Math.min(i, Math.floor(e + (_n12 - _a5) * _c2 / _n12 + _f2)), o);
      }

      var _n11 = t[e];
      var _a4 = r,
          _u3 = i;

      for (G(t, r, e), o(t[i], _n11) > 0 && G(t, r, i); _a4 < _u3;) {
        for (G(t, _a4, _u3), ++_a4, --_u3; o(t[_a4], _n11) < 0;) {
          ++_a4;
        }

        for (; o(t[_u3], _n11) > 0;) {
          --_u3;
        }
      }

      0 === o(t[r], _n11) ? G(t, r, _u3) : (++_u3, G(t, _u3, i)), _u3 <= e && (r = _u3 + 1), e <= _u3 && (i = _u3 - 1);
    }

    return t;
  }

  function G(t, n, e) {
    var r = t[n];
    t[n] = t[e], t[e] = r;
  }

  function V(t, n, e) {
    if (r = (t = Float64Array.from( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(t, n) {
      var _iterator16, _step16, _n13, _e13, _iterator17, _step17, _r9;

      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(void 0 === n)) {
                _context.next = 22;
                break;
              }

              _iterator16 = _createForOfIteratorHelper(t);
              _context.prev = 2;

              _iterator16.s();

            case 4:
              if ((_step16 = _iterator16.n()).done) {
                _context.next = 12;
                break;
              }

              _n13 = _step16.value;
              _context.t0 = null != _n13 && (_n13 = +_n13) >= _n13;

              if (!_context.t0) {
                _context.next = 10;
                break;
              }

              _context.next = 10;
              return _n13;

            case 10:
              _context.next = 4;
              break;

            case 12:
              _context.next = 17;
              break;

            case 14:
              _context.prev = 14;
              _context.t1 = _context["catch"](2);

              _iterator16.e(_context.t1);

            case 17:
              _context.prev = 17;

              _iterator16.f();

              return _context.finish(17);

            case 20:
              _context.next = 42;
              break;

            case 22:
              _e13 = -1;
              _iterator17 = _createForOfIteratorHelper(t);
              _context.prev = 24;

              _iterator17.s();

            case 26:
              if ((_step17 = _iterator17.n()).done) {
                _context.next = 34;
                break;
              }

              _r9 = _step17.value;
              _context.t2 = null != (_r9 = n(_r9, ++_e13, t)) && (_r9 = +_r9) >= _r9;

              if (!_context.t2) {
                _context.next = 32;
                break;
              }

              _context.next = 32;
              return _r9;

            case 32:
              _context.next = 26;
              break;

            case 34:
              _context.next = 39;
              break;

            case 36:
              _context.prev = 36;
              _context.t3 = _context["catch"](24);

              _iterator17.e(_context.t3);

            case 39:
              _context.prev = 39;

              _iterator17.f();

              return _context.finish(39);

            case 42:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[2, 14, 17, 20], [24, 36, 39, 42]]);
    })(t, e))).length) {
      if ((n = +n) <= 0 || r < 2) return H(t);
      if (n >= 1) return j(t);
      var r,
          i = (r - 1) * n,
          o = Math.floor(i),
          a = j(X(t, o).subarray(0, o + 1));
      return a + (H(t.subarray(o + 1)) - a) * (i - o);
    }
  }

  function $(t, n) {
    var e = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : r;

    if (i = t.length) {
      if ((n = +n) <= 0 || i < 2) return +e(t[0], 0, t);
      if (n >= 1) return +e(t[i - 1], i - 1, t);
      var i,
          o = (i - 1) * n,
          a = Math.floor(o),
          u = +e(t[a], a, t);
      return u + (+e(t[a + 1], a + 1, t) - u) * (o - a);
    }
  }

  function W(t, n) {
    var e,
        r = -1,
        i = -1;

    if (void 0 === n) {
      var _iterator18 = _createForOfIteratorHelper(t),
          _step18;

      try {
        for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
          var _n14 = _step18.value;
          ++i, null != _n14 && (e < _n14 || void 0 === e && _n14 >= _n14) && (e = _n14, r = i);
        }
      } catch (err) {
        _iterator18.e(err);
      } finally {
        _iterator18.f();
      }
    } else {
      var _iterator19 = _createForOfIteratorHelper(t),
          _step19;

      try {
        for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {
          var _o6 = _step19.value;
          null != (_o6 = n(_o6, ++i, t)) && (e < _o6 || void 0 === e && _o6 >= _o6) && (e = _o6, r = i);
        }
      } catch (err) {
        _iterator19.e(err);
      } finally {
        _iterator19.f();
      }
    }

    return r;
  }

  function Z(t) {
    return Array.from( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(t) {
      var _iterator20, _step20, _n15;

      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _iterator20 = _createForOfIteratorHelper(t);
              _context2.prev = 1;

              _iterator20.s();

            case 3:
              if ((_step20 = _iterator20.n()).done) {
                _context2.next = 8;
                break;
              }

              _n15 = _step20.value;
              return _context2.delegateYield(_n15, "t0", 6);

            case 6:
              _context2.next = 3;
              break;

            case 8:
              _context2.next = 13;
              break;

            case 10:
              _context2.prev = 10;
              _context2.t1 = _context2["catch"](1);

              _iterator20.e(_context2.t1);

            case 13:
              _context2.prev = 13;

              _iterator20.f();

              return _context2.finish(13);

            case 16:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[1, 10, 13, 16]]);
    })(t));
  }

  function K(t, n) {
    var e,
        r = -1,
        i = -1;

    if (void 0 === n) {
      var _iterator21 = _createForOfIteratorHelper(t),
          _step21;

      try {
        for (_iterator21.s(); !(_step21 = _iterator21.n()).done;) {
          var _n16 = _step21.value;
          ++i, null != _n16 && (e > _n16 || void 0 === e && _n16 >= _n16) && (e = _n16, r = i);
        }
      } catch (err) {
        _iterator21.e(err);
      } finally {
        _iterator21.f();
      }
    } else {
      var _iterator22 = _createForOfIteratorHelper(t),
          _step22;

      try {
        for (_iterator22.s(); !(_step22 = _iterator22.n()).done;) {
          var _o7 = _step22.value;
          null != (_o7 = n(_o7, ++i, t)) && (e > _o7 || void 0 === e && _o7 >= _o7) && (e = _o7, r = i);
        }
      } catch (err) {
        _iterator22.e(err);
      } finally {
        _iterator22.f();
      }
    }

    return r;
  }

  function Q(t, n) {
    return [t, n];
  }

  function J(t, n, e) {
    t = +t, n = +n, e = (i = arguments.length) < 2 ? (n = t, t = 0, 1) : i < 3 ? 1 : +e;

    for (var r = -1, i = 0 | Math.max(0, Math.ceil((n - t) / e)), o = new Array(i); ++r < i;) {
      o[r] = t + r * e;
    }

    return o;
  }

  function tt(t) {
    var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : n;
    if (1 === e.length) return K(t, e);
    var r,
        i = -1,
        o = -1;

    var _iterator23 = _createForOfIteratorHelper(t),
        _step23;

    try {
      for (_iterator23.s(); !(_step23 = _iterator23.n()).done;) {
        var _n17 = _step23.value;
        ++o, (i < 0 ? 0 === e(_n17, _n17) : e(_n17, r) < 0) && (r = _n17, i = o);
      }
    } catch (err) {
      _iterator23.e(err);
    } finally {
      _iterator23.f();
    }

    return i;
  }

  var nt = et(Math.random);

  function et(t) {
    return function (n) {
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : n.length;
      var i = r - (e = +e);

      for (; i;) {
        var _r10 = t() * i-- | 0,
            _o8 = n[i + e];

        n[i + e] = n[_r10 + e], n[_r10 + e] = _o8;
      }

      return n;
    };
  }

  function rt(t) {
    if (!(i = t.length)) return [];

    for (var n = -1, e = H(t, it), r = new Array(e); ++n < e;) {
      for (var i, o = -1, a = r[n] = new Array(i); ++o < i;) {
        a[o] = t[o][n];
      }
    }

    return r;
  }

  function it(t) {
    return t.length;
  }

  function ot(t) {
    return t instanceof Set ? t : new Set(t);
  }

  function at(t, n) {
    var e = t[Symbol.iterator](),
        r = new Set();

    var _iterator24 = _createForOfIteratorHelper(n),
        _step24;

    try {
      for (_iterator24.s(); !(_step24 = _iterator24.n()).done;) {
        var _t5 = _step24.value;
        if (r.has(_t5)) continue;

        var _n18 = void 0,
            _i10 = void 0;

        for (; _e$next = e.next(), _n18 = _e$next.value, _i10 = _e$next.done, _e$next;) {
          var _e$next;

          if (_i10) return !1;
          if (r.add(_n18), Object.is(_t5, _n18)) break;
        }
      }
    } catch (err) {
      _iterator24.e(err);
    } finally {
      _iterator24.f();
    }

    return !0;
  }

  function ut(t) {
    return t;
  }

  var ct = 1e-6;

  function ft(t) {
    return "translate(" + t + ",0)";
  }

  function st(t) {
    return "translate(0," + t + ")";
  }

  function lt(t) {
    return function (n) {
      return +t(n);
    };
  }

  function ht(t, n) {
    return n = Math.max(0, t.bandwidth() - 2 * n) / 2, t.round() && (n = Math.round(n)), function (e) {
      return +t(e) + n;
    };
  }

  function dt() {
    return !this.__axis;
  }

  function pt(t, n) {
    var e = [],
        r = null,
        i = null,
        o = 6,
        a = 6,
        u = 3,
        c = "undefined" != typeof window && window.devicePixelRatio > 1 ? 0 : .5,
        f = 1 === t || 4 === t ? -1 : 1,
        s = 4 === t || 2 === t ? "x" : "y",
        l = 1 === t || 3 === t ? ft : st;

    function h(h) {
      var d = null == r ? n.ticks ? n.ticks.apply(n, e) : n.domain() : r,
          p = null == i ? n.tickFormat ? n.tickFormat.apply(n, e) : ut : i,
          g = Math.max(o, 0) + u,
          y = n.range(),
          v = +y[0] + c,
          _ = +y[y.length - 1] + c,
          b = (n.bandwidth ? ht : lt)(n.copy(), c),
          m = h.selection ? h.selection() : h,
          x = m.selectAll(".domain").data([null]),
          w = m.selectAll(".tick").data(d, n).order(),
          M = w.exit(),
          A = w.enter().append("g").attr("class", "tick"),
          T = w.select("line"),
          S = w.select("text");

      x = x.merge(x.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "currentColor")), w = w.merge(A), T = T.merge(A.append("line").attr("stroke", "currentColor").attr(s + "2", f * o)), S = S.merge(A.append("text").attr("fill", "currentColor").attr(s, f * g).attr("dy", 1 === t ? "0em" : 3 === t ? "0.71em" : "0.32em")), h !== m && (x = x.transition(h), w = w.transition(h), T = T.transition(h), S = S.transition(h), M = M.transition(h).attr("opacity", ct).attr("transform", function (t) {
        return isFinite(t = b(t)) ? l(t + c) : this.getAttribute("transform");
      }), A.attr("opacity", ct).attr("transform", function (t) {
        var n = this.parentNode.__axis;
        return l((n && isFinite(n = n(t)) ? n : b(t)) + c);
      })), M.remove(), x.attr("d", 4 === t || 2 === t ? a ? "M" + f * a + "," + v + "H" + c + "V" + _ + "H" + f * a : "M" + c + "," + v + "V" + _ : a ? "M" + v + "," + f * a + "V" + c + "H" + _ + "V" + f * a : "M" + v + "," + c + "H" + _), w.attr("opacity", 1).attr("transform", function (t) {
        return l(b(t) + c);
      }), T.attr(s + "2", f * o), S.attr(s, f * g).text(p), m.filter(dt).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", 2 === t ? "start" : 4 === t ? "end" : "middle"), m.each(function () {
        this.__axis = b;
      });
    }

    return h.scale = function (t) {
      return arguments.length ? (n = t, h) : n;
    }, h.ticks = function () {
      return e = Array.from(arguments), h;
    }, h.tickArguments = function (t) {
      return arguments.length ? (e = null == t ? [] : Array.from(t), h) : e.slice();
    }, h.tickValues = function (t) {
      return arguments.length ? (r = null == t ? null : Array.from(t), h) : r && r.slice();
    }, h.tickFormat = function (t) {
      return arguments.length ? (i = t, h) : i;
    }, h.tickSize = function (t) {
      return arguments.length ? (o = a = +t, h) : o;
    }, h.tickSizeInner = function (t) {
      return arguments.length ? (o = +t, h) : o;
    }, h.tickSizeOuter = function (t) {
      return arguments.length ? (a = +t, h) : a;
    }, h.tickPadding = function (t) {
      return arguments.length ? (u = +t, h) : u;
    }, h.offset = function (t) {
      return arguments.length ? (c = +t, h) : c;
    }, h;
  }

  var gt = {
    value: function value() {}
  };

  function yt() {
    for (var t, n = 0, e = arguments.length, r = {}; n < e; ++n) {
      if (!(t = arguments[n] + "") || t in r || /[\s.]/.test(t)) throw new Error("illegal type: " + t);
      r[t] = [];
    }

    return new vt(r);
  }

  function vt(t) {
    this._ = t;
  }

  function _t(t, n) {
    return t.trim().split(/^|\s+/).map(function (t) {
      var e = "",
          r = t.indexOf(".");
      if (r >= 0 && (e = t.slice(r + 1), t = t.slice(0, r)), t && !n.hasOwnProperty(t)) throw new Error("unknown type: " + t);
      return {
        type: t,
        name: e
      };
    });
  }

  function bt(t, n) {
    for (var e, r = 0, i = t.length; r < i; ++r) {
      if ((e = t[r]).name === n) return e.value;
    }
  }

  function mt(t, n, e) {
    for (var r = 0, i = t.length; r < i; ++r) {
      if (t[r].name === n) {
        t[r] = gt, t = t.slice(0, r).concat(t.slice(r + 1));
        break;
      }
    }

    return null != e && t.push({
      name: n,
      value: e
    }), t;
  }

  vt.prototype = yt.prototype = {
    constructor: vt,
    on: function on(t, n) {
      var e,
          r = this._,
          i = _t(t + "", r),
          o = -1,
          a = i.length;

      if (!(arguments.length < 2)) {
        if (null != n && "function" != typeof n) throw new Error("invalid callback: " + n);

        for (; ++o < a;) {
          if (e = (t = i[o]).type) r[e] = mt(r[e], t.name, n);else if (null == n) for (e in r) {
            r[e] = mt(r[e], t.name, null);
          }
        }

        return this;
      }

      for (; ++o < a;) {
        if ((e = (t = i[o]).type) && (e = bt(r[e], t.name))) return e;
      }
    },
    copy: function copy() {
      var t = {},
          n = this._;

      for (var e in n) {
        t[e] = n[e].slice();
      }

      return new vt(t);
    },
    call: function call(t, n) {
      if ((e = arguments.length - 2) > 0) for (var e, r, i = new Array(e), o = 0; o < e; ++o) {
        i[o] = arguments[o + 2];
      }
      if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);

      for (o = 0, e = (r = this._[t]).length; o < e; ++o) {
        r[o].value.apply(n, i);
      }
    },
    apply: function apply(t, n, e) {
      if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);

      for (var r = this._[t], i = 0, o = r.length; i < o; ++i) {
        r[i].value.apply(n, e);
      }
    }
  };
  var xt = "http://www.w3.org/1999/xhtml",
      wt = {
    svg: "http://www.w3.org/2000/svg",
    xhtml: xt,
    xlink: "http://www.w3.org/1999/xlink",
    xml: "http://www.w3.org/XML/1998/namespace",
    xmlns: "http://www.w3.org/2000/xmlns/"
  };

  function Mt(t) {
    var n = t += "",
        e = n.indexOf(":");
    return e >= 0 && "xmlns" !== (n = t.slice(0, e)) && (t = t.slice(e + 1)), wt.hasOwnProperty(n) ? {
      space: wt[n],
      local: t
    } : t;
  }

  function At(t) {
    return function () {
      var n = this.ownerDocument,
          e = this.namespaceURI;
      return e === xt && n.documentElement.namespaceURI === xt ? n.createElement(t) : n.createElementNS(e, t);
    };
  }

  function Tt(t) {
    return function () {
      return this.ownerDocument.createElementNS(t.space, t.local);
    };
  }

  function St(t) {
    var n = Mt(t);
    return (n.local ? Tt : At)(n);
  }

  function Et() {}

  function kt(t) {
    return null == t ? Et : function () {
      return this.querySelector(t);
    };
  }

  function Nt(t) {
    return null == t ? [] : Array.isArray(t) ? t : Array.from(t);
  }

  function Ct() {
    return [];
  }

  function Pt(t) {
    return null == t ? Ct : function () {
      return this.querySelectorAll(t);
    };
  }

  function zt(t) {
    return function () {
      return this.matches(t);
    };
  }

  function Dt(t) {
    return function (n) {
      return n.matches(t);
    };
  }

  var qt = Array.prototype.find;

  function Rt() {
    return this.firstElementChild;
  }

  var Ft = Array.prototype.filter;

  function Ot() {
    return Array.from(this.children);
  }

  function It(t) {
    return new Array(t.length);
  }

  function Ut(t, n) {
    this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = n;
  }

  function Bt(t) {
    return function () {
      return t;
    };
  }

  function Yt(t, n, e, r, i, o) {
    for (var a, u = 0, c = n.length, f = o.length; u < f; ++u) {
      (a = n[u]) ? (a.__data__ = o[u], r[u] = a) : e[u] = new Ut(t, o[u]);
    }

    for (; u < c; ++u) {
      (a = n[u]) && (i[u] = a);
    }
  }

  function Lt(t, n, e, r, i, o, a) {
    var u,
        c,
        f,
        s = new Map(),
        l = n.length,
        h = o.length,
        d = new Array(l);

    for (u = 0; u < l; ++u) {
      (c = n[u]) && (d[u] = f = a.call(c, c.__data__, u, n) + "", s.has(f) ? i[u] = c : s.set(f, c));
    }

    for (u = 0; u < h; ++u) {
      f = a.call(t, o[u], u, o) + "", (c = s.get(f)) ? (r[u] = c, c.__data__ = o[u], s["delete"](f)) : e[u] = new Ut(t, o[u]);
    }

    for (u = 0; u < l; ++u) {
      (c = n[u]) && s.get(d[u]) === c && (i[u] = c);
    }
  }

  function jt(t) {
    return t.__data__;
  }

  function Ht(t) {
    return "object" == _typeof(t) && "length" in t ? t : Array.from(t);
  }

  function Xt(t, n) {
    return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
  }

  function Gt(t) {
    return function () {
      this.removeAttribute(t);
    };
  }

  function Vt(t) {
    return function () {
      this.removeAttributeNS(t.space, t.local);
    };
  }

  function $t(t, n) {
    return function () {
      this.setAttribute(t, n);
    };
  }

  function Wt(t, n) {
    return function () {
      this.setAttributeNS(t.space, t.local, n);
    };
  }

  function Zt(t, n) {
    return function () {
      var e = n.apply(this, arguments);
      null == e ? this.removeAttribute(t) : this.setAttribute(t, e);
    };
  }

  function Kt(t, n) {
    return function () {
      var e = n.apply(this, arguments);
      null == e ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, e);
    };
  }

  function Qt(t) {
    return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
  }

  function Jt(t) {
    return function () {
      this.style.removeProperty(t);
    };
  }

  function tn(t, n, e) {
    return function () {
      this.style.setProperty(t, n, e);
    };
  }

  function nn(t, n, e) {
    return function () {
      var r = n.apply(this, arguments);
      null == r ? this.style.removeProperty(t) : this.style.setProperty(t, r, e);
    };
  }

  function en(t, n) {
    return t.style.getPropertyValue(n) || Qt(t).getComputedStyle(t, null).getPropertyValue(n);
  }

  function rn(t) {
    return function () {
      delete this[t];
    };
  }

  function on(t, n) {
    return function () {
      this[t] = n;
    };
  }

  function an(t, n) {
    return function () {
      var e = n.apply(this, arguments);
      null == e ? delete this[t] : this[t] = e;
    };
  }

  function un(t) {
    return t.trim().split(/^|\s+/);
  }

  function cn(t) {
    return t.classList || new fn(t);
  }

  function fn(t) {
    this._node = t, this._names = un(t.getAttribute("class") || "");
  }

  function sn(t, n) {
    for (var e = cn(t), r = -1, i = n.length; ++r < i;) {
      e.add(n[r]);
    }
  }

  function ln(t, n) {
    for (var e = cn(t), r = -1, i = n.length; ++r < i;) {
      e.remove(n[r]);
    }
  }

  function hn(t) {
    return function () {
      sn(this, t);
    };
  }

  function dn(t) {
    return function () {
      ln(this, t);
    };
  }

  function pn(t, n) {
    return function () {
      (n.apply(this, arguments) ? sn : ln)(this, t);
    };
  }

  function gn() {
    this.textContent = "";
  }

  function yn(t) {
    return function () {
      this.textContent = t;
    };
  }

  function vn(t) {
    return function () {
      var n = t.apply(this, arguments);
      this.textContent = null == n ? "" : n;
    };
  }

  function _n() {
    this.innerHTML = "";
  }

  function bn(t) {
    return function () {
      this.innerHTML = t;
    };
  }

  function mn(t) {
    return function () {
      var n = t.apply(this, arguments);
      this.innerHTML = null == n ? "" : n;
    };
  }

  function xn() {
    this.nextSibling && this.parentNode.appendChild(this);
  }

  function wn() {
    this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
  }

  function Mn() {
    return null;
  }

  function An() {
    var t = this.parentNode;
    t && t.removeChild(this);
  }

  function Tn() {
    var t = this.cloneNode(!1),
        n = this.parentNode;
    return n ? n.insertBefore(t, this.nextSibling) : t;
  }

  function Sn() {
    var t = this.cloneNode(!0),
        n = this.parentNode;
    return n ? n.insertBefore(t, this.nextSibling) : t;
  }

  function En(t) {
    return t.trim().split(/^|\s+/).map(function (t) {
      var n = "",
          e = t.indexOf(".");
      return e >= 0 && (n = t.slice(e + 1), t = t.slice(0, e)), {
        type: t,
        name: n
      };
    });
  }

  function kn(t) {
    return function () {
      var n = this.__on;

      if (n) {
        for (var e, r = 0, i = -1, o = n.length; r < o; ++r) {
          e = n[r], t.type && e.type !== t.type || e.name !== t.name ? n[++i] = e : this.removeEventListener(e.type, e.listener, e.options);
        }

        ++i ? n.length = i : delete this.__on;
      }
    };
  }

  function Nn(t, n, e) {
    return function () {
      var r,
          i = this.__on,
          o = function (t) {
        return function (n) {
          t.call(this, n, this.__data__);
        };
      }(n);

      if (i) for (var a = 0, u = i.length; a < u; ++a) {
        if ((r = i[a]).type === t.type && r.name === t.name) return this.removeEventListener(r.type, r.listener, r.options), this.addEventListener(r.type, r.listener = o, r.options = e), void (r.value = n);
      }
      this.addEventListener(t.type, o, e), r = {
        type: t.type,
        name: t.name,
        value: n,
        listener: o,
        options: e
      }, i ? i.push(r) : this.__on = [r];
    };
  }

  function Cn(t, n, e) {
    var r = Qt(t),
        i = r.CustomEvent;
    "function" == typeof i ? i = new i(n, e) : (i = r.document.createEvent("Event"), e ? (i.initEvent(n, e.bubbles, e.cancelable), i.detail = e.detail) : i.initEvent(n, !1, !1)), t.dispatchEvent(i);
  }

  function Pn(t, n) {
    return function () {
      return Cn(this, t, n);
    };
  }

  function zn(t, n) {
    return function () {
      return Cn(this, t, n.apply(this, arguments));
    };
  }

  Ut.prototype = {
    constructor: Ut,
    appendChild: function appendChild(t) {
      return this._parent.insertBefore(t, this._next);
    },
    insertBefore: function insertBefore(t, n) {
      return this._parent.insertBefore(t, n);
    },
    querySelector: function querySelector(t) {
      return this._parent.querySelector(t);
    },
    querySelectorAll: function querySelectorAll(t) {
      return this._parent.querySelectorAll(t);
    }
  }, fn.prototype = {
    add: function add(t) {
      this._names.indexOf(t) < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")));
    },
    remove: function remove(t) {
      var n = this._names.indexOf(t);

      n >= 0 && (this._names.splice(n, 1), this._node.setAttribute("class", this._names.join(" ")));
    },
    contains: function contains(t) {
      return this._names.indexOf(t) >= 0;
    }
  };
  var Dn = [null];

  function qn(t, n) {
    this._groups = t, this._parents = n;
  }

  function Rn() {
    return new qn([[document.documentElement]], Dn);
  }

  function Fn(t) {
    return "string" == typeof t ? new qn([[document.querySelector(t)]], [document.documentElement]) : new qn([[t]], Dn);
  }

  qn.prototype = Rn.prototype = _defineProperty({
    constructor: qn,
    select: function select(t) {
      "function" != typeof t && (t = kt(t));

      for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i) {
        for (var o, a, u = n[i], c = u.length, f = r[i] = new Array(c), s = 0; s < c; ++s) {
          (o = u[s]) && (a = t.call(o, o.__data__, s, u)) && ("__data__" in o && (a.__data__ = o.__data__), f[s] = a);
        }
      }

      return new qn(r, this._parents);
    },
    selectAll: function selectAll(t) {
      t = "function" == typeof t ? function (t) {
        return function () {
          return Nt(t.apply(this, arguments));
        };
      }(t) : Pt(t);

      for (var n = this._groups, e = n.length, r = [], i = [], o = 0; o < e; ++o) {
        for (var a, u = n[o], c = u.length, f = 0; f < c; ++f) {
          (a = u[f]) && (r.push(t.call(a, a.__data__, f, u)), i.push(a));
        }
      }

      return new qn(r, i);
    },
    selectChild: function selectChild(t) {
      return this.select(null == t ? Rt : function (t) {
        return function () {
          return qt.call(this.children, t);
        };
      }("function" == typeof t ? t : Dt(t)));
    },
    selectChildren: function selectChildren(t) {
      return this.selectAll(null == t ? Ot : function (t) {
        return function () {
          return Ft.call(this.children, t);
        };
      }("function" == typeof t ? t : Dt(t)));
    },
    filter: function filter(t) {
      "function" != typeof t && (t = zt(t));

      for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i) {
        for (var o, a = n[i], u = a.length, c = r[i] = [], f = 0; f < u; ++f) {
          (o = a[f]) && t.call(o, o.__data__, f, a) && c.push(o);
        }
      }

      return new qn(r, this._parents);
    },
    data: function data(t, n) {
      if (!arguments.length) return Array.from(this, jt);
      var e = n ? Lt : Yt,
          r = this._parents,
          i = this._groups;
      "function" != typeof t && (t = Bt(t));

      for (var o = i.length, a = new Array(o), u = new Array(o), c = new Array(o), f = 0; f < o; ++f) {
        var s = r[f],
            l = i[f],
            h = l.length,
            d = Ht(t.call(s, s && s.__data__, f, r)),
            p = d.length,
            g = u[f] = new Array(p),
            y = a[f] = new Array(p),
            v = c[f] = new Array(h);
        e(s, l, g, y, v, d, n);

        for (var _, b, m = 0, x = 0; m < p; ++m) {
          if (_ = g[m]) {
            for (m >= x && (x = m + 1); !(b = y[x]) && ++x < p;) {
              ;
            }

            _._next = b || null;
          }
        }
      }

      return (a = new qn(a, r))._enter = u, a._exit = c, a;
    },
    enter: function enter() {
      return new qn(this._enter || this._groups.map(It), this._parents);
    },
    exit: function exit() {
      return new qn(this._exit || this._groups.map(It), this._parents);
    },
    join: function join(t, n, e) {
      var r = this.enter(),
          i = this,
          o = this.exit();
      return "function" == typeof t ? (r = t(r)) && (r = r.selection()) : r = r.append(t + ""), null != n && (i = n(i)) && (i = i.selection()), null == e ? o.remove() : e(o), r && i ? r.merge(i).order() : i;
    },
    merge: function merge(t) {
      for (var n = t.selection ? t.selection() : t, e = this._groups, r = n._groups, i = e.length, o = r.length, a = Math.min(i, o), u = new Array(i), c = 0; c < a; ++c) {
        for (var f, s = e[c], l = r[c], h = s.length, d = u[c] = new Array(h), p = 0; p < h; ++p) {
          (f = s[p] || l[p]) && (d[p] = f);
        }
      }

      for (; c < i; ++c) {
        u[c] = e[c];
      }

      return new qn(u, this._parents);
    },
    selection: function selection() {
      return this;
    },
    order: function order() {
      for (var t = this._groups, n = -1, e = t.length; ++n < e;) {
        for (var r, i = t[n], o = i.length - 1, a = i[o]; --o >= 0;) {
          (r = i[o]) && (a && 4 ^ r.compareDocumentPosition(a) && a.parentNode.insertBefore(r, a), a = r);
        }
      }

      return this;
    },
    sort: function sort(t) {
      function n(n, e) {
        return n && e ? t(n.__data__, e.__data__) : !n - !e;
      }

      t || (t = Xt);

      for (var e = this._groups, r = e.length, i = new Array(r), o = 0; o < r; ++o) {
        for (var a, u = e[o], c = u.length, f = i[o] = new Array(c), s = 0; s < c; ++s) {
          (a = u[s]) && (f[s] = a);
        }

        f.sort(n);
      }

      return new qn(i, this._parents).order();
    },
    call: function call() {
      var t = arguments[0];
      return arguments[0] = this, t.apply(null, arguments), this;
    },
    nodes: function nodes() {
      return Array.from(this);
    },
    node: function node() {
      for (var t = this._groups, n = 0, e = t.length; n < e; ++n) {
        for (var r = t[n], i = 0, o = r.length; i < o; ++i) {
          var a = r[i];
          if (a) return a;
        }
      }

      return null;
    },
    size: function size() {
      var t = 0;

      var _iterator25 = _createForOfIteratorHelper(this),
          _step25;

      try {
        for (_iterator25.s(); !(_step25 = _iterator25.n()).done;) {
          var _n19 = _step25.value;
          ++t;
        }
      } catch (err) {
        _iterator25.e(err);
      } finally {
        _iterator25.f();
      }

      return t;
    },
    empty: function empty() {
      return !this.node();
    },
    each: function each(t) {
      for (var n = this._groups, e = 0, r = n.length; e < r; ++e) {
        for (var i, o = n[e], a = 0, u = o.length; a < u; ++a) {
          (i = o[a]) && t.call(i, i.__data__, a, o);
        }
      }

      return this;
    },
    attr: function attr(t, n) {
      var e = Mt(t);

      if (arguments.length < 2) {
        var r = this.node();
        return e.local ? r.getAttributeNS(e.space, e.local) : r.getAttribute(e);
      }

      return this.each((null == n ? e.local ? Vt : Gt : "function" == typeof n ? e.local ? Kt : Zt : e.local ? Wt : $t)(e, n));
    },
    style: function style(t, n, e) {
      return arguments.length > 1 ? this.each((null == n ? Jt : "function" == typeof n ? nn : tn)(t, n, null == e ? "" : e)) : en(this.node(), t);
    },
    property: function property(t, n) {
      return arguments.length > 1 ? this.each((null == n ? rn : "function" == typeof n ? an : on)(t, n)) : this.node()[t];
    },
    classed: function classed(t, n) {
      var e = un(t + "");

      if (arguments.length < 2) {
        for (var r = cn(this.node()), i = -1, o = e.length; ++i < o;) {
          if (!r.contains(e[i])) return !1;
        }

        return !0;
      }

      return this.each(("function" == typeof n ? pn : n ? hn : dn)(e, n));
    },
    text: function text(t) {
      return arguments.length ? this.each(null == t ? gn : ("function" == typeof t ? vn : yn)(t)) : this.node().textContent;
    },
    html: function html(t) {
      return arguments.length ? this.each(null == t ? _n : ("function" == typeof t ? mn : bn)(t)) : this.node().innerHTML;
    },
    raise: function raise() {
      return this.each(xn);
    },
    lower: function lower() {
      return this.each(wn);
    },
    append: function append(t) {
      var n = "function" == typeof t ? t : St(t);
      return this.select(function () {
        return this.appendChild(n.apply(this, arguments));
      });
    },
    insert: function insert(t, n) {
      var e = "function" == typeof t ? t : St(t),
          r = null == n ? Mn : "function" == typeof n ? n : kt(n);
      return this.select(function () {
        return this.insertBefore(e.apply(this, arguments), r.apply(this, arguments) || null);
      });
    },
    remove: function remove() {
      return this.each(An);
    },
    clone: function clone(t) {
      return this.select(t ? Sn : Tn);
    },
    datum: function datum(t) {
      return arguments.length ? this.property("__data__", t) : this.node().__data__;
    },
    on: function on(t, n, e) {
      var r,
          i,
          o = En(t + ""),
          a = o.length;

      if (!(arguments.length < 2)) {
        for (u = n ? Nn : kn, r = 0; r < a; ++r) {
          this.each(u(o[r], n, e));
        }

        return this;
      }

      var u = this.node().__on;

      if (u) for (var c, f = 0, s = u.length; f < s; ++f) {
        for (r = 0, c = u[f]; r < a; ++r) {
          if ((i = o[r]).type === c.type && i.name === c.name) return c.value;
        }
      }
    },
    dispatch: function dispatch(t, n) {
      return this.each(("function" == typeof n ? zn : Pn)(t, n));
    }
  }, Symbol.iterator, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
    var t, n, e, r, i, o, a;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            t = this._groups, n = 0, e = t.length;

          case 1:
            if (!(n < e)) {
              _context3.next = 14;
              break;
            }

            i = t[n], o = 0, a = i.length;

          case 3:
            if (!(o < a)) {
              _context3.next = 11;
              break;
            }

            _context3.t0 = r = i[o];

            if (!_context3.t0) {
              _context3.next = 8;
              break;
            }

            _context3.next = 8;
            return r;

          case 8:
            ++o;
            _context3.next = 3;
            break;

          case 11:
            ++n;
            _context3.next = 1;
            break;

          case 14:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));
  var On = 0;

  function In() {
    return new Un();
  }

  function Un() {
    this._ = "@" + (++On).toString(36);
  }

  function Bn(t) {
    var n;

    for (; n = t.sourceEvent;) {
      t = n;
    }

    return t;
  }

  function Yn(t, n) {
    if (t = Bn(t), void 0 === n && (n = t.currentTarget), n) {
      var e = n.ownerSVGElement || n;

      if (e.createSVGPoint) {
        var r = e.createSVGPoint();
        return r.x = t.clientX, r.y = t.clientY, [(r = r.matrixTransform(n.getScreenCTM().inverse())).x, r.y];
      }

      if (n.getBoundingClientRect) {
        var i = n.getBoundingClientRect();
        return [t.clientX - i.left - n.clientLeft, t.clientY - i.top - n.clientTop];
      }
    }

    return [t.pageX, t.pageY];
  }

  Un.prototype = In.prototype = {
    constructor: Un,
    get: function get(t) {
      for (var n = this._; !(n in t);) {
        if (!(t = t.parentNode)) return;
      }

      return t[n];
    },
    set: function set(t, n) {
      return t[this._] = n;
    },
    remove: function remove(t) {
      return this._ in t && delete t[this._];
    },
    toString: function toString() {
      return this._;
    }
  };
  var Ln = {
    passive: !1
  },
      jn = {
    capture: !0,
    passive: !1
  };

  function Hn(t) {
    t.stopImmediatePropagation();
  }

  function Xn(t) {
    t.preventDefault(), t.stopImmediatePropagation();
  }

  function Gn(t) {
    var n = t.document.documentElement,
        e = Fn(t).on("dragstart.drag", Xn, jn);
    "onselectstart" in n ? e.on("selectstart.drag", Xn, jn) : (n.__noselect = n.style.MozUserSelect, n.style.MozUserSelect = "none");
  }

  function Vn(t, n) {
    var e = t.document.documentElement,
        r = Fn(t).on("dragstart.drag", null);
    n && (r.on("click.drag", Xn, jn), setTimeout(function () {
      r.on("click.drag", null);
    }, 0)), "onselectstart" in e ? r.on("selectstart.drag", null) : (e.style.MozUserSelect = e.__noselect, delete e.__noselect);
  }

  var $n = function $n(t) {
    return function () {
      return t;
    };
  };

  function Wn(t, _ref6) {
    var n = _ref6.sourceEvent,
        e = _ref6.subject,
        r = _ref6.target,
        i = _ref6.identifier,
        o = _ref6.active,
        a = _ref6.x,
        u = _ref6.y,
        c = _ref6.dx,
        f = _ref6.dy,
        s = _ref6.dispatch;
    Object.defineProperties(this, {
      type: {
        value: t,
        enumerable: !0,
        configurable: !0
      },
      sourceEvent: {
        value: n,
        enumerable: !0,
        configurable: !0
      },
      subject: {
        value: e,
        enumerable: !0,
        configurable: !0
      },
      target: {
        value: r,
        enumerable: !0,
        configurable: !0
      },
      identifier: {
        value: i,
        enumerable: !0,
        configurable: !0
      },
      active: {
        value: o,
        enumerable: !0,
        configurable: !0
      },
      x: {
        value: a,
        enumerable: !0,
        configurable: !0
      },
      y: {
        value: u,
        enumerable: !0,
        configurable: !0
      },
      dx: {
        value: c,
        enumerable: !0,
        configurable: !0
      },
      dy: {
        value: f,
        enumerable: !0,
        configurable: !0
      },
      _: {
        value: s
      }
    });
  }

  function Zn(t) {
    return !t.ctrlKey && !t.button;
  }

  function Kn() {
    return this.parentNode;
  }

  function Qn(t, n) {
    return null == n ? {
      x: t.x,
      y: t.y
    } : n;
  }

  function Jn() {
    return navigator.maxTouchPoints || "ontouchstart" in this;
  }

  function te(t, n, e) {
    t.prototype = n.prototype = e, e.constructor = t;
  }

  function ne(t, n) {
    var e = Object.create(t.prototype);

    for (var r in n) {
      e[r] = n[r];
    }

    return e;
  }

  function ee() {}

  Wn.prototype.on = function () {
    var t = this._.on.apply(this._, arguments);

    return t === this._ ? this : t;
  };

  var re = .7,
      ie = 1 / re,
      oe = "\\s*([+-]?\\d+)\\s*",
      ae = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
      ue = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
      ce = /^#([0-9a-f]{3,8})$/,
      fe = new RegExp("^rgb\\(" + [oe, oe, oe] + "\\)$"),
      se = new RegExp("^rgb\\(" + [ue, ue, ue] + "\\)$"),
      le = new RegExp("^rgba\\(" + [oe, oe, oe, ae] + "\\)$"),
      he = new RegExp("^rgba\\(" + [ue, ue, ue, ae] + "\\)$"),
      de = new RegExp("^hsl\\(" + [ae, ue, ue] + "\\)$"),
      pe = new RegExp("^hsla\\(" + [ae, ue, ue, ae] + "\\)$"),
      ge = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074
  };

  function ye() {
    return this.rgb().formatHex();
  }

  function ve() {
    return this.rgb().formatRgb();
  }

  function _e(t) {
    var n, e;
    return t = (t + "").trim().toLowerCase(), (n = ce.exec(t)) ? (e = n[1].length, n = parseInt(n[1], 16), 6 === e ? be(n) : 3 === e ? new Me(n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | 240 & n, (15 & n) << 4 | 15 & n, 1) : 8 === e ? me(n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, (255 & n) / 255) : 4 === e ? me(n >> 12 & 15 | n >> 8 & 240, n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | 240 & n, ((15 & n) << 4 | 15 & n) / 255) : null) : (n = fe.exec(t)) ? new Me(n[1], n[2], n[3], 1) : (n = se.exec(t)) ? new Me(255 * n[1] / 100, 255 * n[2] / 100, 255 * n[3] / 100, 1) : (n = le.exec(t)) ? me(n[1], n[2], n[3], n[4]) : (n = he.exec(t)) ? me(255 * n[1] / 100, 255 * n[2] / 100, 255 * n[3] / 100, n[4]) : (n = de.exec(t)) ? Ee(n[1], n[2] / 100, n[3] / 100, 1) : (n = pe.exec(t)) ? Ee(n[1], n[2] / 100, n[3] / 100, n[4]) : ge.hasOwnProperty(t) ? be(ge[t]) : "transparent" === t ? new Me(NaN, NaN, NaN, 0) : null;
  }

  function be(t) {
    return new Me(t >> 16 & 255, t >> 8 & 255, 255 & t, 1);
  }

  function me(t, n, e, r) {
    return r <= 0 && (t = n = e = NaN), new Me(t, n, e, r);
  }

  function xe(t) {
    return t instanceof ee || (t = _e(t)), t ? new Me((t = t.rgb()).r, t.g, t.b, t.opacity) : new Me();
  }

  function we(t, n, e, r) {
    return 1 === arguments.length ? xe(t) : new Me(t, n, e, null == r ? 1 : r);
  }

  function Me(t, n, e, r) {
    this.r = +t, this.g = +n, this.b = +e, this.opacity = +r;
  }

  function Ae() {
    return "#" + Se(this.r) + Se(this.g) + Se(this.b);
  }

  function Te() {
    var t = this.opacity;
    return (1 === (t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t))) ? "rgb(" : "rgba(") + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (1 === t ? ")" : ", " + t + ")");
  }

  function Se(t) {
    return ((t = Math.max(0, Math.min(255, Math.round(t) || 0))) < 16 ? "0" : "") + t.toString(16);
  }

  function Ee(t, n, e, r) {
    return r <= 0 ? t = n = e = NaN : e <= 0 || e >= 1 ? t = n = NaN : n <= 0 && (t = NaN), new Ce(t, n, e, r);
  }

  function ke(t) {
    if (t instanceof Ce) return new Ce(t.h, t.s, t.l, t.opacity);
    if (t instanceof ee || (t = _e(t)), !t) return new Ce();
    if (t instanceof Ce) return t;
    var n = (t = t.rgb()).r / 255,
        e = t.g / 255,
        r = t.b / 255,
        i = Math.min(n, e, r),
        o = Math.max(n, e, r),
        a = NaN,
        u = o - i,
        c = (o + i) / 2;
    return u ? (a = n === o ? (e - r) / u + 6 * (e < r) : e === o ? (r - n) / u + 2 : (n - e) / u + 4, u /= c < .5 ? o + i : 2 - o - i, a *= 60) : u = c > 0 && c < 1 ? 0 : a, new Ce(a, u, c, t.opacity);
  }

  function Ne(t, n, e, r) {
    return 1 === arguments.length ? ke(t) : new Ce(t, n, e, null == r ? 1 : r);
  }

  function Ce(t, n, e, r) {
    this.h = +t, this.s = +n, this.l = +e, this.opacity = +r;
  }

  function Pe(t, n, e) {
    return 255 * (t < 60 ? n + (e - n) * t / 60 : t < 180 ? e : t < 240 ? n + (e - n) * (240 - t) / 60 : n);
  }

  te(ee, _e, {
    copy: function copy(t) {
      return Object.assign(new this.constructor(), this, t);
    },
    displayable: function displayable() {
      return this.rgb().displayable();
    },
    hex: ye,
    formatHex: ye,
    formatHsl: function formatHsl() {
      return ke(this).formatHsl();
    },
    formatRgb: ve,
    toString: ve
  }), te(Me, we, ne(ee, {
    brighter: function brighter(t) {
      return t = null == t ? ie : Math.pow(ie, t), new Me(this.r * t, this.g * t, this.b * t, this.opacity);
    },
    darker: function darker(t) {
      return t = null == t ? re : Math.pow(re, t), new Me(this.r * t, this.g * t, this.b * t, this.opacity);
    },
    rgb: function rgb() {
      return this;
    },
    displayable: function displayable() {
      return -.5 <= this.r && this.r < 255.5 && -.5 <= this.g && this.g < 255.5 && -.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
    },
    hex: Ae,
    formatHex: Ae,
    formatRgb: Te,
    toString: Te
  })), te(Ce, Ne, ne(ee, {
    brighter: function brighter(t) {
      return t = null == t ? ie : Math.pow(ie, t), new Ce(this.h, this.s, this.l * t, this.opacity);
    },
    darker: function darker(t) {
      return t = null == t ? re : Math.pow(re, t), new Ce(this.h, this.s, this.l * t, this.opacity);
    },
    rgb: function rgb() {
      var t = this.h % 360 + 360 * (this.h < 0),
          n = isNaN(t) || isNaN(this.s) ? 0 : this.s,
          e = this.l,
          r = e + (e < .5 ? e : 1 - e) * n,
          i = 2 * e - r;
      return new Me(Pe(t >= 240 ? t - 240 : t + 120, i, r), Pe(t, i, r), Pe(t < 120 ? t + 240 : t - 120, i, r), this.opacity);
    },
    displayable: function displayable() {
      return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
    },
    formatHsl: function formatHsl() {
      var t = this.opacity;
      return (1 === (t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t))) ? "hsl(" : "hsla(") + (this.h || 0) + ", " + 100 * (this.s || 0) + "%, " + 100 * (this.l || 0) + "%" + (1 === t ? ")" : ", " + t + ")");
    }
  }));
  var ze = Math.PI / 180,
      De = 180 / Math.PI,
      qe = .96422,
      Re = .82521,
      Fe = 4 / 29,
      Oe = 6 / 29,
      Ie = 3 * Oe * Oe;

  function Ue(t) {
    if (t instanceof Ye) return new Ye(t.l, t.a, t.b, t.opacity);
    if (t instanceof $e) return We(t);
    t instanceof Me || (t = xe(t));
    var n,
        e,
        r = Xe(t.r),
        i = Xe(t.g),
        o = Xe(t.b),
        a = Le((.2225045 * r + .7168786 * i + .0606169 * o) / 1);
    return r === i && i === o ? n = e = a : (n = Le((.4360747 * r + .3850649 * i + .1430804 * o) / qe), e = Le((.0139322 * r + .0971045 * i + .7141733 * o) / Re)), new Ye(116 * a - 16, 500 * (n - a), 200 * (a - e), t.opacity);
  }

  function Be(t, n, e, r) {
    return 1 === arguments.length ? Ue(t) : new Ye(t, n, e, null == r ? 1 : r);
  }

  function Ye(t, n, e, r) {
    this.l = +t, this.a = +n, this.b = +e, this.opacity = +r;
  }

  function Le(t) {
    return t > .008856451679035631 ? Math.pow(t, 1 / 3) : t / Ie + Fe;
  }

  function je(t) {
    return t > Oe ? t * t * t : Ie * (t - Fe);
  }

  function He(t) {
    return 255 * (t <= .0031308 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - .055);
  }

  function Xe(t) {
    return (t /= 255) <= .04045 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4);
  }

  function Ge(t) {
    if (t instanceof $e) return new $e(t.h, t.c, t.l, t.opacity);
    if (t instanceof Ye || (t = Ue(t)), 0 === t.a && 0 === t.b) return new $e(NaN, 0 < t.l && t.l < 100 ? 0 : NaN, t.l, t.opacity);
    var n = Math.atan2(t.b, t.a) * De;
    return new $e(n < 0 ? n + 360 : n, Math.sqrt(t.a * t.a + t.b * t.b), t.l, t.opacity);
  }

  function Ve(t, n, e, r) {
    return 1 === arguments.length ? Ge(t) : new $e(t, n, e, null == r ? 1 : r);
  }

  function $e(t, n, e, r) {
    this.h = +t, this.c = +n, this.l = +e, this.opacity = +r;
  }

  function We(t) {
    if (isNaN(t.h)) return new Ye(t.l, 0, 0, t.opacity);
    var n = t.h * ze;
    return new Ye(t.l, Math.cos(n) * t.c, Math.sin(n) * t.c, t.opacity);
  }

  te(Ye, Be, ne(ee, {
    brighter: function brighter(t) {
      return new Ye(this.l + 18 * (null == t ? 1 : t), this.a, this.b, this.opacity);
    },
    darker: function darker(t) {
      return new Ye(this.l - 18 * (null == t ? 1 : t), this.a, this.b, this.opacity);
    },
    rgb: function rgb() {
      var t = (this.l + 16) / 116,
          n = isNaN(this.a) ? t : t + this.a / 500,
          e = isNaN(this.b) ? t : t - this.b / 200;
      return new Me(He(3.1338561 * (n = qe * je(n)) - 1.6168667 * (t = 1 * je(t)) - .4906146 * (e = Re * je(e))), He(-.9787684 * n + 1.9161415 * t + .033454 * e), He(.0719453 * n - .2289914 * t + 1.4052427 * e), this.opacity);
    }
  })), te($e, Ve, ne(ee, {
    brighter: function brighter(t) {
      return new $e(this.h, this.c, this.l + 18 * (null == t ? 1 : t), this.opacity);
    },
    darker: function darker(t) {
      return new $e(this.h, this.c, this.l - 18 * (null == t ? 1 : t), this.opacity);
    },
    rgb: function rgb() {
      return We(this).rgb();
    }
  }));
  var Ze = -.14861,
      Ke = 1.78277,
      Qe = -.29227,
      Je = -.90649,
      tr = 1.97294,
      nr = tr * Je,
      er = tr * Ke,
      rr = Ke * Qe - Je * Ze;

  function ir(t) {
    if (t instanceof ar) return new ar(t.h, t.s, t.l, t.opacity);
    t instanceof Me || (t = xe(t));
    var n = t.r / 255,
        e = t.g / 255,
        r = t.b / 255,
        i = (rr * r + nr * n - er * e) / (rr + nr - er),
        o = r - i,
        a = (tr * (e - i) - Qe * o) / Je,
        u = Math.sqrt(a * a + o * o) / (tr * i * (1 - i)),
        c = u ? Math.atan2(a, o) * De - 120 : NaN;
    return new ar(c < 0 ? c + 360 : c, u, i, t.opacity);
  }

  function or(t, n, e, r) {
    return 1 === arguments.length ? ir(t) : new ar(t, n, e, null == r ? 1 : r);
  }

  function ar(t, n, e, r) {
    this.h = +t, this.s = +n, this.l = +e, this.opacity = +r;
  }

  function ur(t, n, e, r, i) {
    var o = t * t,
        a = o * t;
    return ((1 - 3 * t + 3 * o - a) * n + (4 - 6 * o + 3 * a) * e + (1 + 3 * t + 3 * o - 3 * a) * r + a * i) / 6;
  }

  function cr(t) {
    var n = t.length - 1;
    return function (e) {
      var r = e <= 0 ? e = 0 : e >= 1 ? (e = 1, n - 1) : Math.floor(e * n),
          i = t[r],
          o = t[r + 1],
          a = r > 0 ? t[r - 1] : 2 * i - o,
          u = r < n - 1 ? t[r + 2] : 2 * o - i;
      return ur((e - r / n) * n, a, i, o, u);
    };
  }

  function fr(t) {
    var n = t.length;
    return function (e) {
      var r = Math.floor(((e %= 1) < 0 ? ++e : e) * n),
          i = t[(r + n - 1) % n],
          o = t[r % n],
          a = t[(r + 1) % n],
          u = t[(r + 2) % n];
      return ur((e - r / n) * n, i, o, a, u);
    };
  }

  te(ar, or, ne(ee, {
    brighter: function brighter(t) {
      return t = null == t ? ie : Math.pow(ie, t), new ar(this.h, this.s, this.l * t, this.opacity);
    },
    darker: function darker(t) {
      return t = null == t ? re : Math.pow(re, t), new ar(this.h, this.s, this.l * t, this.opacity);
    },
    rgb: function rgb() {
      var t = isNaN(this.h) ? 0 : (this.h + 120) * ze,
          n = +this.l,
          e = isNaN(this.s) ? 0 : this.s * n * (1 - n),
          r = Math.cos(t),
          i = Math.sin(t);
      return new Me(255 * (n + e * (Ze * r + Ke * i)), 255 * (n + e * (Qe * r + Je * i)), 255 * (n + e * (tr * r)), this.opacity);
    }
  }));

  var sr = function sr(t) {
    return function () {
      return t;
    };
  };

  function lr(t, n) {
    return function (e) {
      return t + e * n;
    };
  }

  function hr(t, n) {
    var e = n - t;
    return e ? lr(t, e > 180 || e < -180 ? e - 360 * Math.round(e / 360) : e) : sr(isNaN(t) ? n : t);
  }

  function dr(t) {
    return 1 == (t = +t) ? pr : function (n, e) {
      return e - n ? function (t, n, e) {
        return t = Math.pow(t, e), n = Math.pow(n, e) - t, e = 1 / e, function (r) {
          return Math.pow(t + r * n, e);
        };
      }(n, e, t) : sr(isNaN(n) ? e : n);
    };
  }

  function pr(t, n) {
    var e = n - t;
    return e ? lr(t, e) : sr(isNaN(t) ? n : t);
  }

  var gr = function t(n) {
    var e = dr(n);

    function r(t, n) {
      var r = e((t = we(t)).r, (n = we(n)).r),
          i = e(t.g, n.g),
          o = e(t.b, n.b),
          a = pr(t.opacity, n.opacity);
      return function (n) {
        return t.r = r(n), t.g = i(n), t.b = o(n), t.opacity = a(n), t + "";
      };
    }

    return r.gamma = t, r;
  }(1);

  function yr(t) {
    return function (n) {
      var e,
          r,
          i = n.length,
          o = new Array(i),
          a = new Array(i),
          u = new Array(i);

      for (e = 0; e < i; ++e) {
        r = we(n[e]), o[e] = r.r || 0, a[e] = r.g || 0, u[e] = r.b || 0;
      }

      return o = t(o), a = t(a), u = t(u), r.opacity = 1, function (t) {
        return r.r = o(t), r.g = a(t), r.b = u(t), r + "";
      };
    };
  }

  var vr = yr(cr),
      _r = yr(fr);

  function br(t, n) {
    n || (n = []);
    var e,
        r = t ? Math.min(n.length, t.length) : 0,
        i = n.slice();
    return function (o) {
      for (e = 0; e < r; ++e) {
        i[e] = t[e] * (1 - o) + n[e] * o;
      }

      return i;
    };
  }

  function mr(t) {
    return ArrayBuffer.isView(t) && !(t instanceof DataView);
  }

  function xr(t, n) {
    var e,
        r = n ? n.length : 0,
        i = t ? Math.min(r, t.length) : 0,
        o = new Array(i),
        a = new Array(r);

    for (e = 0; e < i; ++e) {
      o[e] = kr(t[e], n[e]);
    }

    for (; e < r; ++e) {
      a[e] = n[e];
    }

    return function (t) {
      for (e = 0; e < i; ++e) {
        a[e] = o[e](t);
      }

      return a;
    };
  }

  function wr(t, n) {
    var e = new Date();
    return t = +t, n = +n, function (r) {
      return e.setTime(t * (1 - r) + n * r), e;
    };
  }

  function Mr(t, n) {
    return t = +t, n = +n, function (e) {
      return t * (1 - e) + n * e;
    };
  }

  function Ar(t, n) {
    var e,
        r = {},
        i = {};

    for (e in null !== t && "object" == _typeof(t) || (t = {}), null !== n && "object" == _typeof(n) || (n = {}), n) {
      e in t ? r[e] = kr(t[e], n[e]) : i[e] = n[e];
    }

    return function (t) {
      for (e in r) {
        i[e] = r[e](t);
      }

      return i;
    };
  }

  var Tr = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
      Sr = new RegExp(Tr.source, "g");

  function Er(t, n) {
    var e,
        r,
        i,
        o = Tr.lastIndex = Sr.lastIndex = 0,
        a = -1,
        u = [],
        c = [];

    for (t += "", n += ""; (e = Tr.exec(t)) && (r = Sr.exec(n));) {
      (i = r.index) > o && (i = n.slice(o, i), u[a] ? u[a] += i : u[++a] = i), (e = e[0]) === (r = r[0]) ? u[a] ? u[a] += r : u[++a] = r : (u[++a] = null, c.push({
        i: a,
        x: Mr(e, r)
      })), o = Sr.lastIndex;
    }

    return o < n.length && (i = n.slice(o), u[a] ? u[a] += i : u[++a] = i), u.length < 2 ? c[0] ? function (t) {
      return function (n) {
        return t(n) + "";
      };
    }(c[0].x) : function (t) {
      return function () {
        return t;
      };
    }(n) : (n = c.length, function (t) {
      for (var e, r = 0; r < n; ++r) {
        u[(e = c[r]).i] = e.x(t);
      }

      return u.join("");
    });
  }

  function kr(t, n) {
    var e,
        r = _typeof(n);

    return null == n || "boolean" === r ? sr(n) : ("number" === r ? Mr : "string" === r ? (e = _e(n)) ? (n = e, gr) : Er : n instanceof _e ? gr : n instanceof Date ? wr : mr(n) ? br : Array.isArray(n) ? xr : "function" != typeof n.valueOf && "function" != typeof n.toString || isNaN(n) ? Ar : Mr)(t, n);
  }

  function Nr(t, n) {
    return t = +t, n = +n, function (e) {
      return Math.round(t * (1 - e) + n * e);
    };
  }

  var Cr,
      Pr = 180 / Math.PI,
      zr = {
    translateX: 0,
    translateY: 0,
    rotate: 0,
    skewX: 0,
    scaleX: 1,
    scaleY: 1
  };

  function Dr(t, n, e, r, i, o) {
    var a, u, c;
    return (a = Math.sqrt(t * t + n * n)) && (t /= a, n /= a), (c = t * e + n * r) && (e -= t * c, r -= n * c), (u = Math.sqrt(e * e + r * r)) && (e /= u, r /= u, c /= u), t * r < n * e && (t = -t, n = -n, c = -c, a = -a), {
      translateX: i,
      translateY: o,
      rotate: Math.atan2(n, t) * Pr,
      skewX: Math.atan(c) * Pr,
      scaleX: a,
      scaleY: u
    };
  }

  function qr(t, n, e, r) {
    function i(t) {
      return t.length ? t.pop() + " " : "";
    }

    return function (o, a) {
      var u = [],
          c = [];
      return o = t(o), a = t(a), function (t, r, i, o, a, u) {
        if (t !== i || r !== o) {
          var c = a.push("translate(", null, n, null, e);
          u.push({
            i: c - 4,
            x: Mr(t, i)
          }, {
            i: c - 2,
            x: Mr(r, o)
          });
        } else (i || o) && a.push("translate(" + i + n + o + e);
      }(o.translateX, o.translateY, a.translateX, a.translateY, u, c), function (t, n, e, o) {
        t !== n ? (t - n > 180 ? n += 360 : n - t > 180 && (t += 360), o.push({
          i: e.push(i(e) + "rotate(", null, r) - 2,
          x: Mr(t, n)
        })) : n && e.push(i(e) + "rotate(" + n + r);
      }(o.rotate, a.rotate, u, c), function (t, n, e, o) {
        t !== n ? o.push({
          i: e.push(i(e) + "skewX(", null, r) - 2,
          x: Mr(t, n)
        }) : n && e.push(i(e) + "skewX(" + n + r);
      }(o.skewX, a.skewX, u, c), function (t, n, e, r, o, a) {
        if (t !== e || n !== r) {
          var u = o.push(i(o) + "scale(", null, ",", null, ")");
          a.push({
            i: u - 4,
            x: Mr(t, e)
          }, {
            i: u - 2,
            x: Mr(n, r)
          });
        } else 1 === e && 1 === r || o.push(i(o) + "scale(" + e + "," + r + ")");
      }(o.scaleX, o.scaleY, a.scaleX, a.scaleY, u, c), o = a = null, function (t) {
        for (var n, e = -1, r = c.length; ++e < r;) {
          u[(n = c[e]).i] = n.x(t);
        }

        return u.join("");
      };
    };
  }

  var Rr = qr(function (t) {
    var n = new ("function" == typeof DOMMatrix ? DOMMatrix : WebKitCSSMatrix)(t + "");
    return n.isIdentity ? zr : Dr(n.a, n.b, n.c, n.d, n.e, n.f);
  }, "px, ", "px)", "deg)"),
      Fr = qr(function (t) {
    return null == t ? zr : (Cr || (Cr = document.createElementNS("http://www.w3.org/2000/svg", "g")), Cr.setAttribute("transform", t), (t = Cr.transform.baseVal.consolidate()) ? Dr((t = t.matrix).a, t.b, t.c, t.d, t.e, t.f) : zr);
  }, ", ", ")", ")");

  function Or(t) {
    return ((t = Math.exp(t)) + 1 / t) / 2;
  }

  var Ir = function t(n, e, r) {
    function i(t, i) {
      var o,
          a,
          u = t[0],
          c = t[1],
          f = t[2],
          s = i[0],
          l = i[1],
          h = i[2],
          d = s - u,
          p = l - c,
          g = d * d + p * p;
      if (g < 1e-12) a = Math.log(h / f) / n, o = function o(t) {
        return [u + t * d, c + t * p, f * Math.exp(n * t * a)];
      };else {
        var y = Math.sqrt(g),
            v = (h * h - f * f + r * g) / (2 * f * e * y),
            _ = (h * h - f * f - r * g) / (2 * h * e * y),
            b = Math.log(Math.sqrt(v * v + 1) - v),
            m = Math.log(Math.sqrt(_ * _ + 1) - _);

        a = (m - b) / n, o = function o(t) {
          var r = t * a,
              i = Or(b),
              o = f / (e * y) * (i * function (t) {
            return ((t = Math.exp(2 * t)) - 1) / (t + 1);
          }(n * r + b) - function (t) {
            return ((t = Math.exp(t)) - 1 / t) / 2;
          }(b));

          return [u + o * d, c + o * p, f * i / Or(n * r + b)];
        };
      }
      return o.duration = 1e3 * a * n / Math.SQRT2, o;
    }

    return i.rho = function (n) {
      var e = Math.max(.001, +n),
          r = e * e;
      return t(e, r, r * r);
    }, i;
  }(Math.SQRT2, 2, 4);

  function Ur(t) {
    return function (n, e) {
      var r = t((n = Ne(n)).h, (e = Ne(e)).h),
          i = pr(n.s, e.s),
          o = pr(n.l, e.l),
          a = pr(n.opacity, e.opacity);
      return function (t) {
        return n.h = r(t), n.s = i(t), n.l = o(t), n.opacity = a(t), n + "";
      };
    };
  }

  var Br = Ur(hr),
      Yr = Ur(pr);

  function Lr(t) {
    return function (n, e) {
      var r = t((n = Ve(n)).h, (e = Ve(e)).h),
          i = pr(n.c, e.c),
          o = pr(n.l, e.l),
          a = pr(n.opacity, e.opacity);
      return function (t) {
        return n.h = r(t), n.c = i(t), n.l = o(t), n.opacity = a(t), n + "";
      };
    };
  }

  var jr = Lr(hr),
      Hr = Lr(pr);

  function Xr(t) {
    return function n(e) {
      function r(n, r) {
        var i = t((n = or(n)).h, (r = or(r)).h),
            o = pr(n.s, r.s),
            a = pr(n.l, r.l),
            u = pr(n.opacity, r.opacity);
        return function (t) {
          return n.h = i(t), n.s = o(t), n.l = a(Math.pow(t, e)), n.opacity = u(t), n + "";
        };
      }

      return e = +e, r.gamma = n, r;
    }(1);
  }

  var Gr = Xr(hr),
      Vr = Xr(pr);

  function $r(t, n) {
    void 0 === n && (n = t, t = kr);

    for (var e = 0, r = n.length - 1, i = n[0], o = new Array(r < 0 ? 0 : r); e < r;) {
      o[e] = t(i, i = n[++e]);
    }

    return function (t) {
      var n = Math.max(0, Math.min(r - 1, Math.floor(t *= r)));
      return o[n](t - n);
    };
  }

  var Wr,
      Zr,
      Kr = 0,
      Qr = 0,
      Jr = 0,
      ti = 0,
      ni = 0,
      ei = 0,
      ri = "object" == (typeof performance === "undefined" ? "undefined" : _typeof(performance)) && performance.now ? performance : Date,
      ii = "object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function (t) {
    setTimeout(t, 17);
  };

  function oi() {
    return ni || (ii(ai), ni = ri.now() + ei);
  }

  function ai() {
    ni = 0;
  }

  function ui() {
    this._call = this._time = this._next = null;
  }

  function ci(t, n, e) {
    var r = new ui();
    return r.restart(t, n, e), r;
  }

  function fi() {
    oi(), ++Kr;

    for (var t, n = Wr; n;) {
      (t = ni - n._time) >= 0 && n._call.call(void 0, t), n = n._next;
    }

    --Kr;
  }

  function si() {
    ni = (ti = ri.now()) + ei, Kr = Qr = 0;

    try {
      fi();
    } finally {
      Kr = 0, function () {
        var t,
            n,
            e = Wr,
            r = 1 / 0;

        for (; e;) {
          e._call ? (r > e._time && (r = e._time), t = e, e = e._next) : (n = e._next, e._next = null, e = t ? t._next = n : Wr = n);
        }

        Zr = t, hi(r);
      }(), ni = 0;
    }
  }

  function li() {
    var t = ri.now(),
        n = t - ti;
    n > 1e3 && (ei -= n, ti = t);
  }

  function hi(t) {
    Kr || (Qr && (Qr = clearTimeout(Qr)), t - ni > 24 ? (t < 1 / 0 && (Qr = setTimeout(si, t - ri.now() - ei)), Jr && (Jr = clearInterval(Jr))) : (Jr || (ti = ri.now(), Jr = setInterval(li, 1e3)), Kr = 1, ii(si)));
  }

  function di(t, n, e) {
    var r = new ui();
    return n = null == n ? 0 : +n, r.restart(function (e) {
      r.stop(), t(e + n);
    }, n, e), r;
  }

  ui.prototype = ci.prototype = {
    constructor: ui,
    restart: function restart(t, n, e) {
      if ("function" != typeof t) throw new TypeError("callback is not a function");
      e = (null == e ? oi() : +e) + (null == n ? 0 : +n), this._next || Zr === this || (Zr ? Zr._next = this : Wr = this, Zr = this), this._call = t, this._time = e, hi();
    },
    stop: function stop() {
      this._call && (this._call = null, this._time = 1 / 0, hi());
    }
  };
  var pi = yt("start", "end", "cancel", "interrupt"),
      gi = [];

  function yi(t, n, e, r, i, o) {
    var a = t.__transition;

    if (a) {
      if (e in a) return;
    } else t.__transition = {};

    !function (t, n, e) {
      var r,
          i = t.__transition;

      function o(t) {
        e.state = 1, e.timer.restart(a, e.delay, e.time), e.delay <= t && a(t - e.delay);
      }

      function a(o) {
        var f, s, l, h;
        if (1 !== e.state) return c();

        for (f in i) {
          if ((h = i[f]).name === e.name) {
            if (3 === h.state) return di(a);
            4 === h.state ? (h.state = 6, h.timer.stop(), h.on.call("interrupt", t, t.__data__, h.index, h.group), delete i[f]) : +f < n && (h.state = 6, h.timer.stop(), h.on.call("cancel", t, t.__data__, h.index, h.group), delete i[f]);
          }
        }

        if (di(function () {
          3 === e.state && (e.state = 4, e.timer.restart(u, e.delay, e.time), u(o));
        }), e.state = 2, e.on.call("start", t, t.__data__, e.index, e.group), 2 === e.state) {
          for (e.state = 3, r = new Array(l = e.tween.length), f = 0, s = -1; f < l; ++f) {
            (h = e.tween[f].value.call(t, t.__data__, e.index, e.group)) && (r[++s] = h);
          }

          r.length = s + 1;
        }
      }

      function u(n) {
        for (var i = n < e.duration ? e.ease.call(null, n / e.duration) : (e.timer.restart(c), e.state = 5, 1), o = -1, a = r.length; ++o < a;) {
          r[o].call(t, i);
        }

        5 === e.state && (e.on.call("end", t, t.__data__, e.index, e.group), c());
      }

      function c() {
        for (var r in e.state = 6, e.timer.stop(), delete i[n], i) {
          return;
        }

        delete t.__transition;
      }

      i[n] = e, e.timer = ci(o, 0, e.time);
    }(t, e, {
      name: n,
      index: r,
      group: i,
      on: pi,
      tween: gi,
      time: o.time,
      delay: o.delay,
      duration: o.duration,
      ease: o.ease,
      timer: null,
      state: 0
    });
  }

  function vi(t, n) {
    var e = bi(t, n);
    if (e.state > 0) throw new Error("too late; already scheduled");
    return e;
  }

  function _i(t, n) {
    var e = bi(t, n);
    if (e.state > 3) throw new Error("too late; already running");
    return e;
  }

  function bi(t, n) {
    var e = t.__transition;
    if (!e || !(e = e[n])) throw new Error("transition not found");
    return e;
  }

  function mi(t, n) {
    var e,
        r,
        i,
        o = t.__transition,
        a = !0;

    if (o) {
      for (i in n = null == n ? null : n + "", o) {
        (e = o[i]).name === n ? (r = e.state > 2 && e.state < 5, e.state = 6, e.timer.stop(), e.on.call(r ? "interrupt" : "cancel", t, t.__data__, e.index, e.group), delete o[i]) : a = !1;
      }

      a && delete t.__transition;
    }
  }

  function xi(t, n) {
    var e, r;
    return function () {
      var i = _i(this, t),
          o = i.tween;

      if (o !== e) for (var a = 0, u = (r = e = o).length; a < u; ++a) {
        if (r[a].name === n) {
          (r = r.slice()).splice(a, 1);
          break;
        }
      }
      i.tween = r;
    };
  }

  function wi(t, n, e) {
    var r, i;
    if ("function" != typeof e) throw new Error();
    return function () {
      var o = _i(this, t),
          a = o.tween;

      if (a !== r) {
        i = (r = a).slice();

        for (var u = {
          name: n,
          value: e
        }, c = 0, f = i.length; c < f; ++c) {
          if (i[c].name === n) {
            i[c] = u;
            break;
          }
        }

        c === f && i.push(u);
      }

      o.tween = i;
    };
  }

  function Mi(t, n, e) {
    var r = t._id;
    return t.each(function () {
      var t = _i(this, r);

      (t.value || (t.value = {}))[n] = e.apply(this, arguments);
    }), function (t) {
      return bi(t, r).value[n];
    };
  }

  function Ai(t, n) {
    var e;
    return ("number" == typeof n ? Mr : n instanceof _e ? gr : (e = _e(n)) ? (n = e, gr) : Er)(t, n);
  }

  function Ti(t) {
    return function () {
      this.removeAttribute(t);
    };
  }

  function Si(t) {
    return function () {
      this.removeAttributeNS(t.space, t.local);
    };
  }

  function Ei(t, n, e) {
    var r,
        i,
        o = e + "";
    return function () {
      var a = this.getAttribute(t);
      return a === o ? null : a === r ? i : i = n(r = a, e);
    };
  }

  function ki(t, n, e) {
    var r,
        i,
        o = e + "";
    return function () {
      var a = this.getAttributeNS(t.space, t.local);
      return a === o ? null : a === r ? i : i = n(r = a, e);
    };
  }

  function Ni(t, n, e) {
    var r, i, o;
    return function () {
      var a,
          u,
          c = e(this);
      if (null != c) return (a = this.getAttribute(t)) === (u = c + "") ? null : a === r && u === i ? o : (i = u, o = n(r = a, c));
      this.removeAttribute(t);
    };
  }

  function Ci(t, n, e) {
    var r, i, o;
    return function () {
      var a,
          u,
          c = e(this);
      if (null != c) return (a = this.getAttributeNS(t.space, t.local)) === (u = c + "") ? null : a === r && u === i ? o : (i = u, o = n(r = a, c));
      this.removeAttributeNS(t.space, t.local);
    };
  }

  function Pi(t, n) {
    return function (e) {
      this.setAttribute(t, n.call(this, e));
    };
  }

  function zi(t, n) {
    return function (e) {
      this.setAttributeNS(t.space, t.local, n.call(this, e));
    };
  }

  function Di(t, n) {
    var e, r;

    function i() {
      var i = n.apply(this, arguments);
      return i !== r && (e = (r = i) && zi(t, i)), e;
    }

    return i._value = n, i;
  }

  function qi(t, n) {
    var e, r;

    function i() {
      var i = n.apply(this, arguments);
      return i !== r && (e = (r = i) && Pi(t, i)), e;
    }

    return i._value = n, i;
  }

  function Ri(t, n) {
    return function () {
      vi(this, t).delay = +n.apply(this, arguments);
    };
  }

  function Fi(t, n) {
    return n = +n, function () {
      vi(this, t).delay = n;
    };
  }

  function Oi(t, n) {
    return function () {
      _i(this, t).duration = +n.apply(this, arguments);
    };
  }

  function Ii(t, n) {
    return n = +n, function () {
      _i(this, t).duration = n;
    };
  }

  function Ui(t, n) {
    if ("function" != typeof n) throw new Error();
    return function () {
      _i(this, t).ease = n;
    };
  }

  function Bi(t, n, e) {
    var r,
        i,
        o = function (t) {
      return (t + "").trim().split(/^|\s+/).every(function (t) {
        var n = t.indexOf(".");
        return n >= 0 && (t = t.slice(0, n)), !t || "start" === t;
      });
    }(n) ? vi : _i;
    return function () {
      var a = o(this, t),
          u = a.on;
      u !== r && (i = (r = u).copy()).on(n, e), a.on = i;
    };
  }

  var Yi = Rn.prototype.constructor;

  function Li(t) {
    return function () {
      this.style.removeProperty(t);
    };
  }

  function ji(t, n, e) {
    return function (r) {
      this.style.setProperty(t, n.call(this, r), e);
    };
  }

  function Hi(t, n, e) {
    var r, i;

    function o() {
      var o = n.apply(this, arguments);
      return o !== i && (r = (i = o) && ji(t, o, e)), r;
    }

    return o._value = n, o;
  }

  function Xi(t) {
    return function (n) {
      this.textContent = t.call(this, n);
    };
  }

  function Gi(t) {
    var n, e;

    function r() {
      var r = t.apply(this, arguments);
      return r !== e && (n = (e = r) && Xi(r)), n;
    }

    return r._value = t, r;
  }

  var Vi = 0;

  function $i(t, n, e, r) {
    this._groups = t, this._parents = n, this._name = e, this._id = r;
  }

  function Wi(t) {
    return Rn().transition(t);
  }

  function Zi() {
    return ++Vi;
  }

  var Ki = Rn.prototype;
  $i.prototype = Wi.prototype = _defineProperty({
    constructor: $i,
    select: function select(t) {
      var n = this._name,
          e = this._id;
      "function" != typeof t && (t = kt(t));

      for (var r = this._groups, i = r.length, o = new Array(i), a = 0; a < i; ++a) {
        for (var u, c, f = r[a], s = f.length, l = o[a] = new Array(s), h = 0; h < s; ++h) {
          (u = f[h]) && (c = t.call(u, u.__data__, h, f)) && ("__data__" in u && (c.__data__ = u.__data__), l[h] = c, yi(l[h], n, e, h, l, bi(u, e)));
        }
      }

      return new $i(o, this._parents, n, e);
    },
    selectAll: function selectAll(t) {
      var n = this._name,
          e = this._id;
      "function" != typeof t && (t = Pt(t));

      for (var r = this._groups, i = r.length, o = [], a = [], u = 0; u < i; ++u) {
        for (var c, f = r[u], s = f.length, l = 0; l < s; ++l) {
          if (c = f[l]) {
            for (var h, d = t.call(c, c.__data__, l, f), p = bi(c, e), g = 0, y = d.length; g < y; ++g) {
              (h = d[g]) && yi(h, n, e, g, d, p);
            }

            o.push(d), a.push(c);
          }
        }
      }

      return new $i(o, a, n, e);
    },
    selectChild: Ki.selectChild,
    selectChildren: Ki.selectChildren,
    filter: function filter(t) {
      "function" != typeof t && (t = zt(t));

      for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i) {
        for (var o, a = n[i], u = a.length, c = r[i] = [], f = 0; f < u; ++f) {
          (o = a[f]) && t.call(o, o.__data__, f, a) && c.push(o);
        }
      }

      return new $i(r, this._parents, this._name, this._id);
    },
    merge: function merge(t) {
      if (t._id !== this._id) throw new Error();

      for (var n = this._groups, e = t._groups, r = n.length, i = e.length, o = Math.min(r, i), a = new Array(r), u = 0; u < o; ++u) {
        for (var c, f = n[u], s = e[u], l = f.length, h = a[u] = new Array(l), d = 0; d < l; ++d) {
          (c = f[d] || s[d]) && (h[d] = c);
        }
      }

      for (; u < r; ++u) {
        a[u] = n[u];
      }

      return new $i(a, this._parents, this._name, this._id);
    },
    selection: function selection() {
      return new Yi(this._groups, this._parents);
    },
    transition: function transition() {
      for (var t = this._name, n = this._id, e = Zi(), r = this._groups, i = r.length, o = 0; o < i; ++o) {
        for (var a, u = r[o], c = u.length, f = 0; f < c; ++f) {
          if (a = u[f]) {
            var s = bi(a, n);
            yi(a, t, e, f, u, {
              time: s.time + s.delay + s.duration,
              delay: 0,
              duration: s.duration,
              ease: s.ease
            });
          }
        }
      }

      return new $i(r, this._parents, t, e);
    },
    call: Ki.call,
    nodes: Ki.nodes,
    node: Ki.node,
    size: Ki.size,
    empty: Ki.empty,
    each: Ki.each,
    on: function on(t, n) {
      var e = this._id;
      return arguments.length < 2 ? bi(this.node(), e).on.on(t) : this.each(Bi(e, t, n));
    },
    attr: function attr(t, n) {
      var e = Mt(t),
          r = "transform" === e ? Fr : Ai;
      return this.attrTween(t, "function" == typeof n ? (e.local ? Ci : Ni)(e, r, Mi(this, "attr." + t, n)) : null == n ? (e.local ? Si : Ti)(e) : (e.local ? ki : Ei)(e, r, n));
    },
    attrTween: function attrTween(t, n) {
      var e = "attr." + t;
      if (arguments.length < 2) return (e = this.tween(e)) && e._value;
      if (null == n) return this.tween(e, null);
      if ("function" != typeof n) throw new Error();
      var r = Mt(t);
      return this.tween(e, (r.local ? Di : qi)(r, n));
    },
    style: function style(t, n, e) {
      var r = "transform" == (t += "") ? Rr : Ai;
      return null == n ? this.styleTween(t, function (t, n) {
        var e, r, i;
        return function () {
          var o = en(this, t),
              a = (this.style.removeProperty(t), en(this, t));
          return o === a ? null : o === e && a === r ? i : i = n(e = o, r = a);
        };
      }(t, r)).on("end.style." + t, Li(t)) : "function" == typeof n ? this.styleTween(t, function (t, n, e) {
        var r, i, o;
        return function () {
          var a = en(this, t),
              u = e(this),
              c = u + "";
          return null == u && (this.style.removeProperty(t), c = u = en(this, t)), a === c ? null : a === r && c === i ? o : (i = c, o = n(r = a, u));
        };
      }(t, r, Mi(this, "style." + t, n))).each(function (t, n) {
        var e,
            r,
            i,
            o,
            a = "style." + n,
            u = "end." + a;
        return function () {
          var c = _i(this, t),
              f = c.on,
              s = null == c.value[a] ? o || (o = Li(n)) : void 0;

          f === e && i === s || (r = (e = f).copy()).on(u, i = s), c.on = r;
        };
      }(this._id, t)) : this.styleTween(t, function (t, n, e) {
        var r,
            i,
            o = e + "";
        return function () {
          var a = en(this, t);
          return a === o ? null : a === r ? i : i = n(r = a, e);
        };
      }(t, r, n), e).on("end.style." + t, null);
    },
    styleTween: function styleTween(t, n, e) {
      var r = "style." + (t += "");
      if (arguments.length < 2) return (r = this.tween(r)) && r._value;
      if (null == n) return this.tween(r, null);
      if ("function" != typeof n) throw new Error();
      return this.tween(r, Hi(t, n, null == e ? "" : e));
    },
    text: function text(t) {
      return this.tween("text", "function" == typeof t ? function (t) {
        return function () {
          var n = t(this);
          this.textContent = null == n ? "" : n;
        };
      }(Mi(this, "text", t)) : function (t) {
        return function () {
          this.textContent = t;
        };
      }(null == t ? "" : t + ""));
    },
    textTween: function textTween(t) {
      var n = "text";
      if (arguments.length < 1) return (n = this.tween(n)) && n._value;
      if (null == t) return this.tween(n, null);
      if ("function" != typeof t) throw new Error();
      return this.tween(n, Gi(t));
    },
    remove: function remove() {
      return this.on("end.remove", function (t) {
        return function () {
          var n = this.parentNode;

          for (var e in this.__transition) {
            if (+e !== t) return;
          }

          n && n.removeChild(this);
        };
      }(this._id));
    },
    tween: function tween(t, n) {
      var e = this._id;

      if (t += "", arguments.length < 2) {
        for (var r, i = bi(this.node(), e).tween, o = 0, a = i.length; o < a; ++o) {
          if ((r = i[o]).name === t) return r.value;
        }

        return null;
      }

      return this.each((null == n ? xi : wi)(e, t, n));
    },
    delay: function delay(t) {
      var n = this._id;
      return arguments.length ? this.each(("function" == typeof t ? Ri : Fi)(n, t)) : bi(this.node(), n).delay;
    },
    duration: function duration(t) {
      var n = this._id;
      return arguments.length ? this.each(("function" == typeof t ? Oi : Ii)(n, t)) : bi(this.node(), n).duration;
    },
    ease: function ease(t) {
      var n = this._id;
      return arguments.length ? this.each(Ui(n, t)) : bi(this.node(), n).ease;
    },
    easeVarying: function easeVarying(t) {
      if ("function" != typeof t) throw new Error();
      return this.each(function (t, n) {
        return function () {
          var e = n.apply(this, arguments);
          if ("function" != typeof e) throw new Error();
          _i(this, t).ease = e;
        };
      }(this._id, t));
    },
    end: function end() {
      var t,
          n,
          e = this,
          r = e._id,
          i = e.size();
      return new Promise(function (o, a) {
        var u = {
          value: a
        },
            c = {
          value: function value() {
            0 == --i && o();
          }
        };
        e.each(function () {
          var e = _i(this, r),
              i = e.on;

          i !== t && ((n = (t = i).copy())._.cancel.push(u), n._.interrupt.push(u), n._.end.push(c)), e.on = n;
        }), 0 === i && o();
      });
    }
  }, Symbol.iterator, Ki[Symbol.iterator]);

  function Qi(t) {
    return ((t *= 2) <= 1 ? t * t : --t * (2 - t) + 1) / 2;
  }

  function Ji(t) {
    return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
  }

  var to = function t(n) {
    function e(t) {
      return Math.pow(t, n);
    }

    return n = +n, e.exponent = t, e;
  }(3),
      no = function t(n) {
    function e(t) {
      return 1 - Math.pow(1 - t, n);
    }

    return n = +n, e.exponent = t, e;
  }(3),
      eo = function t(n) {
    function e(t) {
      return ((t *= 2) <= 1 ? Math.pow(t, n) : 2 - Math.pow(2 - t, n)) / 2;
    }

    return n = +n, e.exponent = t, e;
  }(3),
      ro = Math.PI,
      io = ro / 2;

  function oo(t) {
    return (1 - Math.cos(ro * t)) / 2;
  }

  function ao(t) {
    return 1.0009775171065494 * (Math.pow(2, -10 * t) - .0009765625);
  }

  function uo(t) {
    return ((t *= 2) <= 1 ? ao(1 - t) : 2 - ao(t - 1)) / 2;
  }

  function co(t) {
    return ((t *= 2) <= 1 ? 1 - Math.sqrt(1 - t * t) : Math.sqrt(1 - (t -= 2) * t) + 1) / 2;
  }

  var fo = 4 / 11,
      so = 7.5625;

  function lo(t) {
    return (t = +t) < fo ? so * t * t : t < .7272727272727273 ? so * (t -= .5454545454545454) * t + .75 : t < .9090909090909091 ? so * (t -= .8181818181818182) * t + .9375 : so * (t -= .9545454545454546) * t + .984375;
  }

  var ho = 1.70158,
      po = function t(n) {
    function e(t) {
      return (t = +t) * t * (n * (t - 1) + t);
    }

    return n = +n, e.overshoot = t, e;
  }(ho),
      go = function t(n) {
    function e(t) {
      return --t * t * ((t + 1) * n + t) + 1;
    }

    return n = +n, e.overshoot = t, e;
  }(ho),
      yo = function t(n) {
    function e(t) {
      return ((t *= 2) < 1 ? t * t * ((n + 1) * t - n) : (t -= 2) * t * ((n + 1) * t + n) + 2) / 2;
    }

    return n = +n, e.overshoot = t, e;
  }(ho),
      vo = 2 * Math.PI,
      _o = function t(n, e) {
    var r = Math.asin(1 / (n = Math.max(1, n))) * (e /= vo);

    function i(t) {
      return n * ao(- --t) * Math.sin((r - t) / e);
    }

    return i.amplitude = function (n) {
      return t(n, e * vo);
    }, i.period = function (e) {
      return t(n, e);
    }, i;
  }(1, .3),
      bo = function t(n, e) {
    var r = Math.asin(1 / (n = Math.max(1, n))) * (e /= vo);

    function i(t) {
      return 1 - n * ao(t = +t) * Math.sin((t + r) / e);
    }

    return i.amplitude = function (n) {
      return t(n, e * vo);
    }, i.period = function (e) {
      return t(n, e);
    }, i;
  }(1, .3),
      mo = function t(n, e) {
    var r = Math.asin(1 / (n = Math.max(1, n))) * (e /= vo);

    function i(t) {
      return ((t = 2 * t - 1) < 0 ? n * ao(-t) * Math.sin((r - t) / e) : 2 - n * ao(t) * Math.sin((r + t) / e)) / 2;
    }

    return i.amplitude = function (n) {
      return t(n, e * vo);
    }, i.period = function (e) {
      return t(n, e);
    }, i;
  }(1, .3),
      xo = {
    time: null,
    delay: 0,
    duration: 250,
    ease: Ji
  };

  function wo(t, n) {
    for (var e; !(e = t.__transition) || !(e = e[n]);) {
      if (!(t = t.parentNode)) throw new Error("transition ".concat(n, " not found"));
    }

    return e;
  }

  Rn.prototype.interrupt = function (t) {
    return this.each(function () {
      mi(this, t);
    });
  }, Rn.prototype.transition = function (t) {
    var n, e;
    t instanceof $i ? (n = t._id, t = t._name) : (n = Zi(), (e = xo).time = oi(), t = null == t ? null : t + "");

    for (var r = this._groups, i = r.length, o = 0; o < i; ++o) {
      for (var a, u = r[o], c = u.length, f = 0; f < c; ++f) {
        (a = u[f]) && yi(a, t, n, f, u, e || wo(a, n));
      }
    }

    return new $i(r, this._parents, t, n);
  };
  var Mo = [null];

  var Ao = function Ao(t) {
    return function () {
      return t;
    };
  };

  function To(t, _ref7) {
    var n = _ref7.sourceEvent,
        e = _ref7.target,
        r = _ref7.selection,
        i = _ref7.mode,
        o = _ref7.dispatch;
    Object.defineProperties(this, {
      type: {
        value: t,
        enumerable: !0,
        configurable: !0
      },
      sourceEvent: {
        value: n,
        enumerable: !0,
        configurable: !0
      },
      target: {
        value: e,
        enumerable: !0,
        configurable: !0
      },
      selection: {
        value: r,
        enumerable: !0,
        configurable: !0
      },
      mode: {
        value: i,
        enumerable: !0,
        configurable: !0
      },
      _: {
        value: o
      }
    });
  }

  function So(t) {
    t.stopImmediatePropagation();
  }

  function Eo(t) {
    t.preventDefault(), t.stopImmediatePropagation();
  }

  var ko = {
    name: "drag"
  },
      No = {
    name: "space"
  },
      Co = {
    name: "handle"
  },
      Po = {
    name: "center"
  };
  var zo = Math.abs,
      Do = Math.max,
      qo = Math.min;

  function Ro(t) {
    return [+t[0], +t[1]];
  }

  function Fo(t) {
    return [Ro(t[0]), Ro(t[1])];
  }

  var Oo = {
    name: "x",
    handles: ["w", "e"].map(Xo),
    input: function input(t, n) {
      return null == t ? null : [[+t[0], n[0][1]], [+t[1], n[1][1]]];
    },
    output: function output(t) {
      return t && [t[0][0], t[1][0]];
    }
  },
      Io = {
    name: "y",
    handles: ["n", "s"].map(Xo),
    input: function input(t, n) {
      return null == t ? null : [[n[0][0], +t[0]], [n[1][0], +t[1]]];
    },
    output: function output(t) {
      return t && [t[0][1], t[1][1]];
    }
  },
      Uo = {
    name: "xy",
    handles: ["n", "w", "e", "s", "nw", "ne", "sw", "se"].map(Xo),
    input: function input(t) {
      return null == t ? null : Fo(t);
    },
    output: function output(t) {
      return t;
    }
  },
      Bo = {
    overlay: "crosshair",
    selection: "move",
    n: "ns-resize",
    e: "ew-resize",
    s: "ns-resize",
    w: "ew-resize",
    nw: "nwse-resize",
    ne: "nesw-resize",
    se: "nwse-resize",
    sw: "nesw-resize"
  },
      Yo = {
    e: "w",
    w: "e",
    nw: "ne",
    ne: "nw",
    se: "sw",
    sw: "se"
  },
      Lo = {
    n: "s",
    s: "n",
    nw: "sw",
    ne: "se",
    se: "ne",
    sw: "nw"
  },
      jo = {
    overlay: 1,
    selection: 1,
    n: null,
    e: 1,
    s: null,
    w: -1,
    nw: -1,
    ne: 1,
    se: 1,
    sw: -1
  },
      Ho = {
    overlay: 1,
    selection: 1,
    n: -1,
    e: null,
    s: 1,
    w: null,
    nw: -1,
    ne: -1,
    se: 1,
    sw: 1
  };

  function Xo(t) {
    return {
      type: t
    };
  }

  function Go(t) {
    return !t.ctrlKey && !t.button;
  }

  function Vo() {
    var t = this.ownerSVGElement || this;
    return t.hasAttribute("viewBox") ? [[(t = t.viewBox.baseVal).x, t.y], [t.x + t.width, t.y + t.height]] : [[0, 0], [t.width.baseVal.value, t.height.baseVal.value]];
  }

  function $o() {
    return navigator.maxTouchPoints || "ontouchstart" in this;
  }

  function Wo(t) {
    for (; !t.__brush;) {
      if (!(t = t.parentNode)) return;
    }

    return t.__brush;
  }

  function Zo(t) {
    return t[0][0] === t[1][0] || t[0][1] === t[1][1];
  }

  function Ko(t) {
    var n,
        e = Vo,
        r = Go,
        i = $o,
        o = !0,
        a = yt("start", "brush", "end"),
        u = 6;

    function c(n) {
      var e = n.property("__brush", g).selectAll(".overlay").data([Xo("overlay")]);
      e.enter().append("rect").attr("class", "overlay").attr("pointer-events", "all").attr("cursor", Bo.overlay).merge(e).each(function () {
        var t = Wo(this).extent;
        Fn(this).attr("x", t[0][0]).attr("y", t[0][1]).attr("width", t[1][0] - t[0][0]).attr("height", t[1][1] - t[0][1]);
      }), n.selectAll(".selection").data([Xo("selection")]).enter().append("rect").attr("class", "selection").attr("cursor", Bo.selection).attr("fill", "#777").attr("fill-opacity", .3).attr("stroke", "#fff").attr("shape-rendering", "crispEdges");
      var r = n.selectAll(".handle").data(t.handles, function (t) {
        return t.type;
      });
      r.exit().remove(), r.enter().append("rect").attr("class", function (t) {
        return "handle handle--" + t.type;
      }).attr("cursor", function (t) {
        return Bo[t.type];
      }), n.each(f).attr("fill", "none").attr("pointer-events", "all").on("mousedown.brush", h).filter(i).on("touchstart.brush", h).on("touchmove.brush", d).on("touchend.brush touchcancel.brush", p).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
    }

    function f() {
      var t = Fn(this),
          n = Wo(this).selection;
      n ? (t.selectAll(".selection").style("display", null).attr("x", n[0][0]).attr("y", n[0][1]).attr("width", n[1][0] - n[0][0]).attr("height", n[1][1] - n[0][1]), t.selectAll(".handle").style("display", null).attr("x", function (t) {
        return "e" === t.type[t.type.length - 1] ? n[1][0] - u / 2 : n[0][0] - u / 2;
      }).attr("y", function (t) {
        return "s" === t.type[0] ? n[1][1] - u / 2 : n[0][1] - u / 2;
      }).attr("width", function (t) {
        return "n" === t.type || "s" === t.type ? n[1][0] - n[0][0] + u : u;
      }).attr("height", function (t) {
        return "e" === t.type || "w" === t.type ? n[1][1] - n[0][1] + u : u;
      })) : t.selectAll(".selection,.handle").style("display", "none").attr("x", null).attr("y", null).attr("width", null).attr("height", null);
    }

    function s(t, n, e) {
      var r = t.__brush.emitter;
      return !r || e && r.clean ? new l(t, n, e) : r;
    }

    function l(t, n, e) {
      this.that = t, this.args = n, this.state = t.__brush, this.active = 0, this.clean = e;
    }

    function h(e) {
      if ((!n || e.touches) && r.apply(this, arguments)) {
        var i,
            a,
            u,
            c,
            l,
            h,
            d,
            p,
            g,
            y,
            v,
            _ = this,
            b = e.target.__data__.type,
            m = "selection" === (o && e.metaKey ? b = "overlay" : b) ? ko : o && e.altKey ? Po : Co,
            x = t === Io ? null : jo[b],
            w = t === Oo ? null : Ho[b],
            M = Wo(_),
            A = M.extent,
            T = M.selection,
            S = A[0][0],
            E = A[0][1],
            k = A[1][0],
            N = A[1][1],
            C = 0,
            P = 0,
            z = x && w && o && e.shiftKey,
            D = Array.from(e.touches || [e], function (t) {
          var n = t.identifier;
          return (t = Yn(t, _)).point0 = t.slice(), t.identifier = n, t;
        });

        mi(_);
        var q = s(_, arguments, !0).beforestart();

        if ("overlay" === b) {
          T && (g = !0);
          var _n20 = [D[0], D[1] || D[0]];
          M.selection = T = [[i = t === Io ? S : qo(_n20[0][0], _n20[1][0]), u = t === Oo ? E : qo(_n20[0][1], _n20[1][1])], [l = t === Io ? k : Do(_n20[0][0], _n20[1][0]), d = t === Oo ? N : Do(_n20[0][1], _n20[1][1])]], D.length > 1 && U(e);
        } else i = T[0][0], u = T[0][1], l = T[1][0], d = T[1][1];

        a = i, c = u, h = l, p = d;
        var R = Fn(_).attr("pointer-events", "none"),
            F = R.selectAll(".overlay").attr("cursor", Bo[b]);
        if (e.touches) q.moved = I, q.ended = B;else {
          var O = Fn(e.view).on("mousemove.brush", I, !0).on("mouseup.brush", B, !0);
          o && O.on("keydown.brush", Y, !0).on("keyup.brush", L, !0), Gn(e.view);
        }
        f.call(_), q.start(e, m.name);
      }

      function I(t) {
        var _iterator26 = _createForOfIteratorHelper(t.changedTouches || [t]),
            _step26;

        try {
          for (_iterator26.s(); !(_step26 = _iterator26.n()).done;) {
            var _n21 = _step26.value;

            var _iterator28 = _createForOfIteratorHelper(D),
                _step28;

            try {
              for (_iterator28.s(); !(_step28 = _iterator28.n()).done;) {
                var _t7 = _step28.value;
                _t7.identifier === _n21.identifier && (_t7.cur = Yn(_n21, _));
              }
            } catch (err) {
              _iterator28.e(err);
            } finally {
              _iterator28.f();
            }
          }
        } catch (err) {
          _iterator26.e(err);
        } finally {
          _iterator26.f();
        }

        if (z && !y && !v && 1 === D.length) {
          var _t6 = D[0];
          zo(_t6.cur[0] - _t6[0]) > zo(_t6.cur[1] - _t6[1]) ? v = !0 : y = !0;
        }

        var _iterator27 = _createForOfIteratorHelper(D),
            _step27;

        try {
          for (_iterator27.s(); !(_step27 = _iterator27.n()).done;) {
            var _t8 = _step27.value;
            _t8.cur && (_t8[0] = _t8.cur[0], _t8[1] = _t8.cur[1]);
          }
        } catch (err) {
          _iterator27.e(err);
        } finally {
          _iterator27.f();
        }

        g = !0, Eo(t), U(t);
      }

      function U(t) {
        var n = D[0],
            e = n.point0;
        var r;

        switch (C = n[0] - e[0], P = n[1] - e[1], m) {
          case No:
          case ko:
            x && (C = Do(S - i, qo(k - l, C)), a = i + C, h = l + C), w && (P = Do(E - u, qo(N - d, P)), c = u + P, p = d + P);
            break;

          case Co:
            D[1] ? (x && (a = Do(S, qo(k, D[0][0])), h = Do(S, qo(k, D[1][0])), x = 1), w && (c = Do(E, qo(N, D[0][1])), p = Do(E, qo(N, D[1][1])), w = 1)) : (x < 0 ? (C = Do(S - i, qo(k - i, C)), a = i + C, h = l) : x > 0 && (C = Do(S - l, qo(k - l, C)), a = i, h = l + C), w < 0 ? (P = Do(E - u, qo(N - u, P)), c = u + P, p = d) : w > 0 && (P = Do(E - d, qo(N - d, P)), c = u, p = d + P));
            break;

          case Po:
            x && (a = Do(S, qo(k, i - C * x)), h = Do(S, qo(k, l + C * x))), w && (c = Do(E, qo(N, u - P * w)), p = Do(E, qo(N, d + P * w)));
        }

        h < a && (x *= -1, r = i, i = l, l = r, r = a, a = h, h = r, b in Yo && F.attr("cursor", Bo[b = Yo[b]])), p < c && (w *= -1, r = u, u = d, d = r, r = c, c = p, p = r, b in Lo && F.attr("cursor", Bo[b = Lo[b]])), M.selection && (T = M.selection), y && (a = T[0][0], h = T[1][0]), v && (c = T[0][1], p = T[1][1]), T[0][0] === a && T[0][1] === c && T[1][0] === h && T[1][1] === p || (M.selection = [[a, c], [h, p]], f.call(_), q.brush(t, m.name));
      }

      function B(t) {
        if (So(t), t.touches) {
          if (t.touches.length) return;
          n && clearTimeout(n), n = setTimeout(function () {
            n = null;
          }, 500);
        } else Vn(t.view, g), O.on("keydown.brush keyup.brush mousemove.brush mouseup.brush", null);

        R.attr("pointer-events", "all"), F.attr("cursor", Bo.overlay), M.selection && (T = M.selection), Zo(T) && (M.selection = null, f.call(_)), q.end(t, m.name);
      }

      function Y(t) {
        switch (t.keyCode) {
          case 16:
            z = x && w;
            break;

          case 18:
            m === Co && (x && (l = h - C * x, i = a + C * x), w && (d = p - P * w, u = c + P * w), m = Po, U(t));
            break;

          case 32:
            m !== Co && m !== Po || (x < 0 ? l = h - C : x > 0 && (i = a - C), w < 0 ? d = p - P : w > 0 && (u = c - P), m = No, F.attr("cursor", Bo.selection), U(t));
            break;

          default:
            return;
        }

        Eo(t);
      }

      function L(t) {
        switch (t.keyCode) {
          case 16:
            z && (y = v = z = !1, U(t));
            break;

          case 18:
            m === Po && (x < 0 ? l = h : x > 0 && (i = a), w < 0 ? d = p : w > 0 && (u = c), m = Co, U(t));
            break;

          case 32:
            m === No && (t.altKey ? (x && (l = h - C * x, i = a + C * x), w && (d = p - P * w, u = c + P * w), m = Po) : (x < 0 ? l = h : x > 0 && (i = a), w < 0 ? d = p : w > 0 && (u = c), m = Co), F.attr("cursor", Bo[b]), U(t));
            break;

          default:
            return;
        }

        Eo(t);
      }
    }

    function d(t) {
      s(this, arguments).moved(t);
    }

    function p(t) {
      s(this, arguments).ended(t);
    }

    function g() {
      var n = this.__brush || {
        selection: null
      };
      return n.extent = Fo(e.apply(this, arguments)), n.dim = t, n;
    }

    return c.move = function (n, e, r) {
      n.tween ? n.on("start.brush", function (t) {
        s(this, arguments).beforestart().start(t);
      }).on("interrupt.brush end.brush", function (t) {
        s(this, arguments).end(t);
      }).tween("brush", function () {
        var n = this,
            r = n.__brush,
            i = s(n, arguments),
            o = r.selection,
            a = t.input("function" == typeof e ? e.apply(this, arguments) : e, r.extent),
            u = kr(o, a);

        function c(t) {
          r.selection = 1 === t && null === a ? null : u(t), f.call(n), i.brush();
        }

        return null !== o && null !== a ? c : c(1);
      }) : n.each(function () {
        var n = this,
            i = arguments,
            o = n.__brush,
            a = t.input("function" == typeof e ? e.apply(n, i) : e, o.extent),
            u = s(n, i).beforestart();
        mi(n), o.selection = null === a ? null : a, f.call(n), u.start(r).brush(r).end(r);
      });
    }, c.clear = function (t, n) {
      c.move(t, null, n);
    }, l.prototype = {
      beforestart: function beforestart() {
        return 1 == ++this.active && (this.state.emitter = this, this.starting = !0), this;
      },
      start: function start(t, n) {
        return this.starting ? (this.starting = !1, this.emit("start", t, n)) : this.emit("brush", t), this;
      },
      brush: function brush(t, n) {
        return this.emit("brush", t, n), this;
      },
      end: function end(t, n) {
        return 0 == --this.active && (delete this.state.emitter, this.emit("end", t, n)), this;
      },
      emit: function emit(n, e, r) {
        var i = Fn(this.that).datum();
        a.call(n, this.that, new To(n, {
          sourceEvent: e,
          target: c,
          selection: t.output(this.state.selection),
          mode: r,
          dispatch: a
        }), i);
      }
    }, c.extent = function (t) {
      return arguments.length ? (e = "function" == typeof t ? t : Ao(Fo(t)), c) : e;
    }, c.filter = function (t) {
      return arguments.length ? (r = "function" == typeof t ? t : Ao(!!t), c) : r;
    }, c.touchable = function (t) {
      return arguments.length ? (i = "function" == typeof t ? t : Ao(!!t), c) : i;
    }, c.handleSize = function (t) {
      return arguments.length ? (u = +t, c) : u;
    }, c.keyModifiers = function (t) {
      return arguments.length ? (o = !!t, c) : o;
    }, c.on = function () {
      var t = a.on.apply(a, arguments);
      return t === a ? c : t;
    }, c;
  }

  var Qo = Math.abs,
      Jo = Math.cos,
      ta = Math.sin,
      na = Math.PI,
      ea = na / 2,
      ra = 2 * na,
      ia = Math.max,
      oa = 1e-12;

  function aa(t, n) {
    return Array.from({
      length: n - t
    }, function (n, e) {
      return t + e;
    });
  }

  function ua(t) {
    return function (n, e) {
      return t(n.source.value + n.target.value, e.source.value + e.target.value);
    };
  }

  function ca(t, n) {
    var e = 0,
        r = null,
        i = null,
        o = null;

    function a(a) {
      var u,
          c = a.length,
          f = new Array(c),
          s = aa(0, c),
          l = new Array(c * c),
          h = new Array(c),
          d = 0;
      a = Float64Array.from({
        length: c * c
      }, n ? function (t, n) {
        return a[n % c][n / c | 0];
      } : function (t, n) {
        return a[n / c | 0][n % c];
      });

      for (var _n22 = 0; _n22 < c; ++_n22) {
        var _e14 = 0;

        for (var _r11 = 0; _r11 < c; ++_r11) {
          _e14 += a[_n22 * c + _r11] + t * a[_r11 * c + _n22];
        }

        d += f[_n22] = _e14;
      }

      u = (d = ia(0, ra - e * c) / d) ? e : ra / c;
      {
        var _n23 = 0;
        r && s.sort(function (t, n) {
          return r(f[t], f[n]);
        });

        var _iterator29 = _createForOfIteratorHelper(s),
            _step29;

        try {
          var _loop = function _loop() {
            var e = _step29.value;
            var r = _n23;

            if (t) {
              var _t9 = aa(1 + ~c, c).filter(function (t) {
                return t < 0 ? a[~t * c + e] : a[e * c + t];
              });

              i && _t9.sort(function (t, n) {
                return i(t < 0 ? -a[~t * c + e] : a[e * c + t], n < 0 ? -a[~n * c + e] : a[e * c + n]);
              });

              var _iterator30 = _createForOfIteratorHelper(_t9),
                  _step30;

              try {
                for (_iterator30.s(); !(_step30 = _iterator30.n()).done;) {
                  var _r12 = _step30.value;

                  if (_r12 < 0) {
                    (l[~_r12 * c + e] || (l[~_r12 * c + e] = {
                      source: null,
                      target: null
                    })).target = {
                      index: e,
                      startAngle: _n23,
                      endAngle: _n23 += a[~_r12 * c + e] * d,
                      value: a[~_r12 * c + e]
                    };
                  } else {
                    (l[e * c + _r12] || (l[e * c + _r12] = {
                      source: null,
                      target: null
                    })).source = {
                      index: e,
                      startAngle: _n23,
                      endAngle: _n23 += a[e * c + _r12] * d,
                      value: a[e * c + _r12]
                    };
                  }
                }
              } catch (err) {
                _iterator30.e(err);
              } finally {
                _iterator30.f();
              }

              h[e] = {
                index: e,
                startAngle: r,
                endAngle: _n23,
                value: f[e]
              };
            } else {
              var _t10 = aa(0, c).filter(function (t) {
                return a[e * c + t] || a[t * c + e];
              });

              i && _t10.sort(function (t, n) {
                return i(a[e * c + t], a[e * c + n]);
              });

              var _iterator31 = _createForOfIteratorHelper(_t10),
                  _step31;

              try {
                for (_iterator31.s(); !(_step31 = _iterator31.n()).done;) {
                  var _r13 = _step31.value;

                  var _t11 = void 0;

                  if (e < _r13 ? (_t11 = l[e * c + _r13] || (l[e * c + _r13] = {
                    source: null,
                    target: null
                  }), _t11.source = {
                    index: e,
                    startAngle: _n23,
                    endAngle: _n23 += a[e * c + _r13] * d,
                    value: a[e * c + _r13]
                  }) : (_t11 = l[_r13 * c + e] || (l[_r13 * c + e] = {
                    source: null,
                    target: null
                  }), _t11.target = {
                    index: e,
                    startAngle: _n23,
                    endAngle: _n23 += a[e * c + _r13] * d,
                    value: a[e * c + _r13]
                  }, e === _r13 && (_t11.source = _t11.target)), _t11.source && _t11.target && _t11.source.value < _t11.target.value) {
                    var _n24 = _t11.source;
                    _t11.source = _t11.target, _t11.target = _n24;
                  }
                }
              } catch (err) {
                _iterator31.e(err);
              } finally {
                _iterator31.f();
              }

              h[e] = {
                index: e,
                startAngle: r,
                endAngle: _n23,
                value: f[e]
              };
            }

            _n23 += u;
          };

          for (_iterator29.s(); !(_step29 = _iterator29.n()).done;) {
            _loop();
          }
        } catch (err) {
          _iterator29.e(err);
        } finally {
          _iterator29.f();
        }
      }
      return (l = Object.values(l)).groups = h, o ? l.sort(o) : l;
    }

    return a.padAngle = function (t) {
      return arguments.length ? (e = ia(0, t), a) : e;
    }, a.sortGroups = function (t) {
      return arguments.length ? (r = t, a) : r;
    }, a.sortSubgroups = function (t) {
      return arguments.length ? (i = t, a) : i;
    }, a.sortChords = function (t) {
      return arguments.length ? (null == t ? o = null : (o = ua(t))._ = t, a) : o && o._;
    }, a;
  }

  var fa = Math.PI,
      sa = 2 * fa,
      la = 1e-6,
      ha = sa - la;

  function da() {
    this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = "";
  }

  function pa() {
    return new da();
  }

  da.prototype = pa.prototype = {
    constructor: da,
    moveTo: function moveTo(t, n) {
      this._ += "M" + (this._x0 = this._x1 = +t) + "," + (this._y0 = this._y1 = +n);
    },
    closePath: function closePath() {
      null !== this._x1 && (this._x1 = this._x0, this._y1 = this._y0, this._ += "Z");
    },
    lineTo: function lineTo(t, n) {
      this._ += "L" + (this._x1 = +t) + "," + (this._y1 = +n);
    },
    quadraticCurveTo: function quadraticCurveTo(t, n, e, r) {
      this._ += "Q" + +t + "," + +n + "," + (this._x1 = +e) + "," + (this._y1 = +r);
    },
    bezierCurveTo: function bezierCurveTo(t, n, e, r, i, o) {
      this._ += "C" + +t + "," + +n + "," + +e + "," + +r + "," + (this._x1 = +i) + "," + (this._y1 = +o);
    },
    arcTo: function arcTo(t, n, e, r, i) {
      t = +t, n = +n, e = +e, r = +r, i = +i;
      var o = this._x1,
          a = this._y1,
          u = e - t,
          c = r - n,
          f = o - t,
          s = a - n,
          l = f * f + s * s;
      if (i < 0) throw new Error("negative radius: " + i);
      if (null === this._x1) this._ += "M" + (this._x1 = t) + "," + (this._y1 = n);else if (l > la) {
        if (Math.abs(s * u - c * f) > la && i) {
          var h = e - o,
              d = r - a,
              p = u * u + c * c,
              g = h * h + d * d,
              y = Math.sqrt(p),
              v = Math.sqrt(l),
              _ = i * Math.tan((fa - Math.acos((p + l - g) / (2 * y * v))) / 2),
              b = _ / v,
              m = _ / y;

          Math.abs(b - 1) > la && (this._ += "L" + (t + b * f) + "," + (n + b * s)), this._ += "A" + i + "," + i + ",0,0," + +(s * h > f * d) + "," + (this._x1 = t + m * u) + "," + (this._y1 = n + m * c);
        } else this._ += "L" + (this._x1 = t) + "," + (this._y1 = n);
      } else ;
    },
    arc: function arc(t, n, e, r, i, o) {
      t = +t, n = +n, o = !!o;
      var a = (e = +e) * Math.cos(r),
          u = e * Math.sin(r),
          c = t + a,
          f = n + u,
          s = 1 ^ o,
          l = o ? r - i : i - r;
      if (e < 0) throw new Error("negative radius: " + e);
      null === this._x1 ? this._ += "M" + c + "," + f : (Math.abs(this._x1 - c) > la || Math.abs(this._y1 - f) > la) && (this._ += "L" + c + "," + f), e && (l < 0 && (l = l % sa + sa), l > ha ? this._ += "A" + e + "," + e + ",0,1," + s + "," + (t - a) + "," + (n - u) + "A" + e + "," + e + ",0,1," + s + "," + (this._x1 = c) + "," + (this._y1 = f) : l > la && (this._ += "A" + e + "," + e + ",0," + +(l >= fa) + "," + s + "," + (this._x1 = t + e * Math.cos(i)) + "," + (this._y1 = n + e * Math.sin(i))));
    },
    rect: function rect(t, n, e, r) {
      this._ += "M" + (this._x0 = this._x1 = +t) + "," + (this._y0 = this._y1 = +n) + "h" + +e + "v" + +r + "h" + -e + "Z";
    },
    toString: function toString() {
      return this._;
    }
  };
  var ga = Array.prototype.slice;

  function ya(t) {
    return function () {
      return t;
    };
  }

  function va(t) {
    return t.source;
  }

  function _a(t) {
    return t.target;
  }

  function ba(t) {
    return t.radius;
  }

  function ma(t) {
    return t.startAngle;
  }

  function xa(t) {
    return t.endAngle;
  }

  function wa() {
    return 0;
  }

  function Ma() {
    return 10;
  }

  function Aa(t) {
    var n = va,
        e = _a,
        r = ba,
        i = ba,
        o = ma,
        a = xa,
        u = wa,
        c = null;

    function f() {
      var f,
          s = n.apply(this, arguments),
          l = e.apply(this, arguments),
          h = u.apply(this, arguments) / 2,
          d = ga.call(arguments),
          p = +r.apply(this, (d[0] = s, d)),
          g = o.apply(this, d) - ea,
          y = a.apply(this, d) - ea,
          v = +i.apply(this, (d[0] = l, d)),
          _ = o.apply(this, d) - ea,
          b = a.apply(this, d) - ea;

      if (c || (c = f = pa()), h > oa && (Qo(y - g) > 2 * h + oa ? y > g ? (g += h, y -= h) : (g -= h, y += h) : g = y = (g + y) / 2, Qo(b - _) > 2 * h + oa ? b > _ ? (_ += h, b -= h) : (_ -= h, b += h) : _ = b = (_ + b) / 2), c.moveTo(p * Jo(g), p * ta(g)), c.arc(0, 0, p, g, y), g !== _ || y !== b) if (t) {
        var m = +t.apply(this, arguments),
            x = v - m,
            w = (_ + b) / 2;
        c.quadraticCurveTo(0, 0, x * Jo(_), x * ta(_)), c.lineTo(v * Jo(w), v * ta(w)), c.lineTo(x * Jo(b), x * ta(b));
      } else c.quadraticCurveTo(0, 0, v * Jo(_), v * ta(_)), c.arc(0, 0, v, _, b);
      if (c.quadraticCurveTo(0, 0, p * Jo(g), p * ta(g)), c.closePath(), f) return c = null, f + "" || null;
    }

    return t && (f.headRadius = function (n) {
      return arguments.length ? (t = "function" == typeof n ? n : ya(+n), f) : t;
    }), f.radius = function (t) {
      return arguments.length ? (r = i = "function" == typeof t ? t : ya(+t), f) : r;
    }, f.sourceRadius = function (t) {
      return arguments.length ? (r = "function" == typeof t ? t : ya(+t), f) : r;
    }, f.targetRadius = function (t) {
      return arguments.length ? (i = "function" == typeof t ? t : ya(+t), f) : i;
    }, f.startAngle = function (t) {
      return arguments.length ? (o = "function" == typeof t ? t : ya(+t), f) : o;
    }, f.endAngle = function (t) {
      return arguments.length ? (a = "function" == typeof t ? t : ya(+t), f) : a;
    }, f.padAngle = function (t) {
      return arguments.length ? (u = "function" == typeof t ? t : ya(+t), f) : u;
    }, f.source = function (t) {
      return arguments.length ? (n = t, f) : n;
    }, f.target = function (t) {
      return arguments.length ? (e = t, f) : e;
    }, f.context = function (t) {
      return arguments.length ? (c = null == t ? null : t, f) : c;
    }, f;
  }

  var Ta = Array.prototype.slice;

  function Sa(t, n) {
    return t - n;
  }

  var Ea = function Ea(t) {
    return function () {
      return t;
    };
  };

  function ka(t, n) {
    for (var e, r = -1, i = n.length; ++r < i;) {
      if (e = Na(t, n[r])) return e;
    }

    return 0;
  }

  function Na(t, n) {
    for (var e = n[0], r = n[1], i = -1, o = 0, a = t.length, u = a - 1; o < a; u = o++) {
      var c = t[o],
          f = c[0],
          s = c[1],
          l = t[u],
          h = l[0],
          d = l[1];
      if (Ca(c, l, n)) return 0;
      s > r != d > r && e < (h - f) * (r - s) / (d - s) + f && (i = -i);
    }

    return i;
  }

  function Ca(t, n, e) {
    var r, i, o, a;
    return function (t, n, e) {
      return (n[0] - t[0]) * (e[1] - t[1]) == (e[0] - t[0]) * (n[1] - t[1]);
    }(t, n, e) && (i = t[r = +(t[0] === n[0])], o = e[r], a = n[r], i <= o && o <= a || a <= o && o <= i);
  }

  function Pa() {}

  var za = [[], [[[1, 1.5], [.5, 1]]], [[[1.5, 1], [1, 1.5]]], [[[1.5, 1], [.5, 1]]], [[[1, .5], [1.5, 1]]], [[[1, 1.5], [.5, 1]], [[1, .5], [1.5, 1]]], [[[1, .5], [1, 1.5]]], [[[1, .5], [.5, 1]]], [[[.5, 1], [1, .5]]], [[[1, 1.5], [1, .5]]], [[[.5, 1], [1, .5]], [[1.5, 1], [1, 1.5]]], [[[1.5, 1], [1, .5]]], [[[.5, 1], [1.5, 1]]], [[[1, 1.5], [1.5, 1]]], [[[.5, 1], [1, 1.5]]], []];

  function Da() {
    var t = 1,
        n = 1,
        e = Y,
        r = u;

    function i(t) {
      var n = e(t);
      if (Array.isArray(n)) n = n.slice().sort(Sa);else {
        var _e15 = p(t),
            _r14 = U(_e15[0], _e15[1], n);

        n = O(Math.floor(_e15[0] / _r14) * _r14, Math.floor(_e15[1] / _r14 - 1) * _r14, n);
      }
      return n.map(function (n) {
        return o(t, n);
      });
    }

    function o(e, i) {
      var o = [],
          u = [];
      return function (e, r, i) {
        var o,
            u,
            c,
            f,
            s,
            l,
            h = new Array(),
            d = new Array();
        o = u = -1, f = e[0] >= r, za[f << 1].forEach(p);

        for (; ++o < t - 1;) {
          c = f, f = e[o + 1] >= r, za[c | f << 1].forEach(p);
        }

        za[f << 0].forEach(p);

        for (; ++u < n - 1;) {
          for (o = -1, f = e[u * t + t] >= r, s = e[u * t] >= r, za[f << 1 | s << 2].forEach(p); ++o < t - 1;) {
            c = f, f = e[u * t + t + o + 1] >= r, l = s, s = e[u * t + o + 1] >= r, za[c | f << 1 | s << 2 | l << 3].forEach(p);
          }

          za[f | s << 3].forEach(p);
        }

        o = -1, s = e[u * t] >= r, za[s << 2].forEach(p);

        for (; ++o < t - 1;) {
          l = s, s = e[u * t + o + 1] >= r, za[s << 2 | l << 3].forEach(p);
        }

        function p(t) {
          var n,
              e,
              r = [t[0][0] + o, t[0][1] + u],
              c = [t[1][0] + o, t[1][1] + u],
              f = a(r),
              s = a(c);
          (n = d[f]) ? (e = h[s]) ? (delete d[n.end], delete h[e.start], n === e ? (n.ring.push(c), i(n.ring)) : h[n.start] = d[e.end] = {
            start: n.start,
            end: e.end,
            ring: n.ring.concat(e.ring)
          }) : (delete d[n.end], n.ring.push(c), d[n.end = s] = n) : (n = h[s]) ? (e = d[f]) ? (delete h[n.start], delete d[e.end], n === e ? (n.ring.push(c), i(n.ring)) : h[e.start] = d[n.end] = {
            start: e.start,
            end: n.end,
            ring: e.ring.concat(n.ring)
          }) : (delete h[n.start], n.ring.unshift(r), h[n.start = f] = n) : h[f] = d[s] = {
            start: f,
            end: s,
            ring: [r, c]
          };
        }

        za[s << 3].forEach(p);
      }(e, i, function (t) {
        r(t, e, i), function (t) {
          for (var n = 0, e = t.length, r = t[e - 1][1] * t[0][0] - t[e - 1][0] * t[0][1]; ++n < e;) {
            r += t[n - 1][1] * t[n][0] - t[n - 1][0] * t[n][1];
          }

          return r;
        }(t) > 0 ? o.push([t]) : u.push(t);
      }), u.forEach(function (t) {
        for (var n, e = 0, r = o.length; e < r; ++e) {
          if (-1 !== ka((n = o[e])[0], t)) return void n.push(t);
        }
      }), {
        type: "MultiPolygon",
        value: i,
        coordinates: o
      };
    }

    function a(n) {
      return 2 * n[0] + n[1] * (t + 1) * 4;
    }

    function u(e, r, i) {
      e.forEach(function (e) {
        var o,
            a = e[0],
            u = e[1],
            c = 0 | a,
            f = 0 | u,
            s = r[f * t + c];
        a > 0 && a < t && c === a && (o = r[f * t + c - 1], e[0] = a + (i - o) / (s - o) - .5), u > 0 && u < n && f === u && (o = r[(f - 1) * t + c], e[1] = u + (i - o) / (s - o) - .5);
      });
    }

    return i.contour = o, i.size = function (e) {
      if (!arguments.length) return [t, n];
      var r = Math.floor(e[0]),
          o = Math.floor(e[1]);
      if (!(r >= 0 && o >= 0)) throw new Error("invalid size");
      return t = r, n = o, i;
    }, i.thresholds = function (t) {
      return arguments.length ? (e = "function" == typeof t ? t : Array.isArray(t) ? Ea(Ta.call(t)) : Ea(t), i) : e;
    }, i.smooth = function (t) {
      return arguments.length ? (r = t ? u : Pa, i) : r === u;
    }, i;
  }

  function qa(t, n, e) {
    for (var r = t.width, i = t.height, o = 1 + (e << 1), a = 0; a < i; ++a) {
      for (var u = 0, c = 0; u < r + e; ++u) {
        u < r && (c += t.data[u + a * r]), u >= e && (u >= o && (c -= t.data[u - o + a * r]), n.data[u - e + a * r] = c / Math.min(u + 1, r - 1 + o - u, o));
      }
    }
  }

  function Ra(t, n, e) {
    for (var r = t.width, i = t.height, o = 1 + (e << 1), a = 0; a < r; ++a) {
      for (var u = 0, c = 0; u < i + e; ++u) {
        u < i && (c += t.data[a + u * r]), u >= e && (u >= o && (c -= t.data[a + (u - o) * r]), n.data[a + (u - e) * r] = c / Math.min(u + 1, i - 1 + o - u, o));
      }
    }
  }

  function Fa(t) {
    return t[0];
  }

  function Oa(t) {
    return t[1];
  }

  function Ia() {
    return 1;
  }

  var Ua = 134217729;

  function Ba(t, n, e, r, i) {
    var o,
        a,
        u,
        c,
        f = n[0],
        s = r[0],
        l = 0,
        h = 0;
    s > f == s > -f ? (o = f, f = n[++l]) : (o = s, s = r[++h]);
    var d = 0;
    if (l < t && h < e) for (s > f == s > -f ? (a = f + o, u = o - (a - f), f = n[++l]) : (a = s + o, u = o - (a - s), s = r[++h]), o = a, 0 !== u && (i[d++] = u); l < t && h < e;) {
      s > f == s > -f ? (a = o + f, c = a - o, u = o - (a - c) + (f - c), f = n[++l]) : (a = o + s, c = a - o, u = o - (a - c) + (s - c), s = r[++h]), o = a, 0 !== u && (i[d++] = u);
    }

    for (; l < t;) {
      a = o + f, c = a - o, u = o - (a - c) + (f - c), f = n[++l], o = a, 0 !== u && (i[d++] = u);
    }

    for (; h < e;) {
      a = o + s, c = a - o, u = o - (a - c) + (s - c), s = r[++h], o = a, 0 !== u && (i[d++] = u);
    }

    return 0 === o && 0 !== d || (i[d++] = o), d;
  }

  function Ya(t) {
    return new Float64Array(t);
  }

  var La = Ya(4),
      ja = Ya(8),
      Ha = Ya(12),
      Xa = Ya(16),
      Ga = Ya(4);

  function Va(t, n, e, r, i, o) {
    var a = (n - o) * (e - i),
        u = (t - i) * (r - o),
        c = a - u;
    if (0 === a || 0 === u || a > 0 != u > 0) return c;
    var f = Math.abs(a + u);
    return Math.abs(c) >= 33306690738754716e-32 * f ? c : -function (t, n, e, r, i, o, a) {
      var u, c, f, s, l, h, d, p, g, y, v, _, b, m, x, w, M, A;

      var T = t - i,
          S = e - i,
          E = n - o,
          k = r - o;
      m = T * k, h = Ua * T, d = h - (h - T), p = T - d, h = Ua * k, g = h - (h - k), y = k - g, x = p * y - (m - d * g - p * g - d * y), w = E * S, h = Ua * E, d = h - (h - E), p = E - d, h = Ua * S, g = h - (h - S), y = S - g, M = p * y - (w - d * g - p * g - d * y), v = x - M, l = x - v, La[0] = x - (v + l) + (l - M), _ = m + v, l = _ - m, b = m - (_ - l) + (v - l), v = b - w, l = b - v, La[1] = b - (v + l) + (l - w), A = _ + v, l = A - _, La[2] = _ - (A - l) + (v - l), La[3] = A;

      var N = function (t, n) {
        var e = n[0];

        for (var _r15 = 1; _r15 < t; _r15++) {
          e += n[_r15];
        }

        return e;
      }(4, La),
          C = 22204460492503146e-32 * a;

      if (N >= C || -N >= C) return N;
      if (l = t - T, u = t - (T + l) + (l - i), l = e - S, f = e - (S + l) + (l - i), l = n - E, c = n - (E + l) + (l - o), l = r - k, s = r - (k + l) + (l - o), 0 === u && 0 === c && 0 === f && 0 === s) return N;
      if (C = 11093356479670487e-47 * a + 33306690738754706e-32 * Math.abs(N), N += T * s + k * u - (E * f + S * c), N >= C || -N >= C) return N;
      m = u * k, h = Ua * u, d = h - (h - u), p = u - d, h = Ua * k, g = h - (h - k), y = k - g, x = p * y - (m - d * g - p * g - d * y), w = c * S, h = Ua * c, d = h - (h - c), p = c - d, h = Ua * S, g = h - (h - S), y = S - g, M = p * y - (w - d * g - p * g - d * y), v = x - M, l = x - v, Ga[0] = x - (v + l) + (l - M), _ = m + v, l = _ - m, b = m - (_ - l) + (v - l), v = b - w, l = b - v, Ga[1] = b - (v + l) + (l - w), A = _ + v, l = A - _, Ga[2] = _ - (A - l) + (v - l), Ga[3] = A;
      var P = Ba(4, La, 4, Ga, ja);
      m = T * s, h = Ua * T, d = h - (h - T), p = T - d, h = Ua * s, g = h - (h - s), y = s - g, x = p * y - (m - d * g - p * g - d * y), w = E * f, h = Ua * E, d = h - (h - E), p = E - d, h = Ua * f, g = h - (h - f), y = f - g, M = p * y - (w - d * g - p * g - d * y), v = x - M, l = x - v, Ga[0] = x - (v + l) + (l - M), _ = m + v, l = _ - m, b = m - (_ - l) + (v - l), v = b - w, l = b - v, Ga[1] = b - (v + l) + (l - w), A = _ + v, l = A - _, Ga[2] = _ - (A - l) + (v - l), Ga[3] = A;
      var z = Ba(P, ja, 4, Ga, Ha);
      m = u * s, h = Ua * u, d = h - (h - u), p = u - d, h = Ua * s, g = h - (h - s), y = s - g, x = p * y - (m - d * g - p * g - d * y), w = c * f, h = Ua * c, d = h - (h - c), p = c - d, h = Ua * f, g = h - (h - f), y = f - g, M = p * y - (w - d * g - p * g - d * y), v = x - M, l = x - v, Ga[0] = x - (v + l) + (l - M), _ = m + v, l = _ - m, b = m - (_ - l) + (v - l), v = b - w, l = b - v, Ga[1] = b - (v + l) + (l - w), A = _ + v, l = A - _, Ga[2] = _ - (A - l) + (v - l), Ga[3] = A;
      var D = Ba(z, Ha, 4, Ga, Xa);
      return Xa[D - 1];
    }(t, n, e, r, i, o, f);
  }

  var $a = Math.pow(2, -52),
      Wa = new Uint32Array(512);

  var Za = /*#__PURE__*/function () {
    function Za(t) {
      _classCallCheck(this, Za);

      var n = t.length >> 1;
      if (n > 0 && "number" != typeof t[0]) throw new Error("Expected coords to contain numbers.");
      this.coords = t;
      var e = Math.max(2 * n - 5, 0);
      this._triangles = new Uint32Array(3 * e), this._halfedges = new Int32Array(3 * e), this._hashSize = Math.ceil(Math.sqrt(n)), this._hullPrev = new Uint32Array(n), this._hullNext = new Uint32Array(n), this._hullTri = new Uint32Array(n), this._hullHash = new Int32Array(this._hashSize).fill(-1), this._ids = new Uint32Array(n), this._dists = new Float64Array(n), this.update();
    }

    _createClass(Za, [{
      key: "update",
      value: function update() {
        var t = this.coords,
            n = this._hullPrev,
            e = this._hullNext,
            r = this._hullTri,
            i = this._hullHash,
            o = t.length >> 1;
        var a = 1 / 0,
            u = 1 / 0,
            c = -1 / 0,
            f = -1 / 0;

        for (var _n25 = 0; _n25 < o; _n25++) {
          var _e16 = t[2 * _n25],
              _r16 = t[2 * _n25 + 1];
          _e16 < a && (a = _e16), _r16 < u && (u = _r16), _e16 > c && (c = _e16), _r16 > f && (f = _r16), this._ids[_n25] = _n25;
        }

        var s = (a + c) / 2,
            l = (u + f) / 2;
        var h,
            d,
            p,
            g = 1 / 0;

        for (var _n26 = 0; _n26 < o; _n26++) {
          var _e17 = Ka(s, l, t[2 * _n26], t[2 * _n26 + 1]);

          _e17 < g && (h = _n26, g = _e17);
        }

        var y = t[2 * h],
            v = t[2 * h + 1];
        g = 1 / 0;

        for (var _n27 = 0; _n27 < o; _n27++) {
          if (_n27 === h) continue;

          var _e18 = Ka(y, v, t[2 * _n27], t[2 * _n27 + 1]);

          _e18 < g && _e18 > 0 && (d = _n27, g = _e18);
        }

        var _ = t[2 * d],
            b = t[2 * d + 1],
            m = 1 / 0;

        for (var _n28 = 0; _n28 < o; _n28++) {
          if (_n28 === h || _n28 === d) continue;

          var _e19 = Ja(y, v, _, b, t[2 * _n28], t[2 * _n28 + 1]);

          _e19 < m && (p = _n28, m = _e19);
        }

        var x = t[2 * p],
            w = t[2 * p + 1];

        if (m === 1 / 0) {
          for (var _n30 = 0; _n30 < o; _n30++) {
            this._dists[_n30] = t[2 * _n30] - t[0] || t[2 * _n30 + 1] - t[1];
          }

          tu(this._ids, this._dists, 0, o - 1);

          var _n29 = new Uint32Array(o);

          var _e20 = 0;

          for (var _t12 = 0, _r17 = -1 / 0; _t12 < o; _t12++) {
            var _i11 = this._ids[_t12];
            this._dists[_i11] > _r17 && (_n29[_e20++] = _i11, _r17 = this._dists[_i11]);
          }

          return this.hull = _n29.subarray(0, _e20), this.triangles = new Uint32Array(0), void (this.halfedges = new Uint32Array(0));
        }

        if (Va(y, v, _, b, x, w) < 0) {
          var _t13 = d,
              _n31 = _,
              _e21 = b;
          d = p, _ = x, b = w, p = _t13, x = _n31, w = _e21;
        }

        var M = function (t, n, e, r, i, o) {
          var a = e - t,
              u = r - n,
              c = i - t,
              f = o - n,
              s = a * a + u * u,
              l = c * c + f * f,
              h = .5 / (a * f - u * c);
          return {
            x: t + (f * s - u * l) * h,
            y: n + (a * l - c * s) * h
          };
        }(y, v, _, b, x, w);

        this._cx = M.x, this._cy = M.y;

        for (var _n32 = 0; _n32 < o; _n32++) {
          this._dists[_n32] = Ka(t[2 * _n32], t[2 * _n32 + 1], M.x, M.y);
        }

        tu(this._ids, this._dists, 0, o - 1), this._hullStart = h;
        var A = 3;
        e[h] = n[p] = d, e[d] = n[h] = p, e[p] = n[d] = h, r[h] = 0, r[d] = 1, r[p] = 2, i.fill(-1), i[this._hashKey(y, v)] = h, i[this._hashKey(_, b)] = d, i[this._hashKey(x, w)] = p, this.trianglesLen = 0, this._addTriangle(h, d, p, -1, -1, -1);

        for (var _o9, _a6, _u5 = 0; _u5 < this._ids.length; _u5++) {
          var _c3 = this._ids[_u5],
              _f3 = t[2 * _c3],
              _s2 = t[2 * _c3 + 1];
          if (_u5 > 0 && Math.abs(_f3 - _o9) <= $a && Math.abs(_s2 - _a6) <= $a) continue;
          if (_o9 = _f3, _a6 = _s2, _c3 === h || _c3 === d || _c3 === p) continue;
          var _l2 = 0;

          for (var _t14 = 0, _n33 = this._hashKey(_f3, _s2); _t14 < this._hashSize && (_l2 = i[(_n33 + _t14) % this._hashSize], -1 === _l2 || _l2 === e[_l2]); _t14++) {
            ;
          }

          _l2 = n[_l2];

          var _g2 = void 0,
              _y2 = _l2;

          for (; _g2 = e[_y2], Va(_f3, _s2, t[2 * _y2], t[2 * _y2 + 1], t[2 * _g2], t[2 * _g2 + 1]) >= 0;) {
            if (_y2 = _g2, _y2 === _l2) {
              _y2 = -1;
              break;
            }
          }

          if (-1 === _y2) continue;

          var _v2 = this._addTriangle(_y2, _c3, e[_y2], -1, -1, r[_y2]);

          r[_c3] = this._legalize(_v2 + 2), r[_y2] = _v2, A++;
          var _2 = e[_y2];

          for (; _g2 = e[_2], Va(_f3, _s2, t[2 * _2], t[2 * _2 + 1], t[2 * _g2], t[2 * _g2 + 1]) < 0;) {
            _v2 = this._addTriangle(_2, _c3, _g2, r[_c3], -1, r[_2]), r[_c3] = this._legalize(_v2 + 2), e[_2] = _2, A--, _2 = _g2;
          }

          if (_y2 === _l2) for (; _g2 = n[_y2], Va(_f3, _s2, t[2 * _g2], t[2 * _g2 + 1], t[2 * _y2], t[2 * _y2 + 1]) < 0;) {
            _v2 = this._addTriangle(_g2, _c3, _y2, -1, r[_y2], r[_g2]), this._legalize(_v2 + 2), r[_g2] = _v2, e[_y2] = _y2, A--, _y2 = _g2;
          }
          this._hullStart = n[_c3] = _y2, e[_y2] = n[_2] = _c3, e[_c3] = _2, i[this._hashKey(_f3, _s2)] = _c3, i[this._hashKey(t[2 * _y2], t[2 * _y2 + 1])] = _y2;
        }

        this.hull = new Uint32Array(A);

        for (var _t15 = 0, _n34 = this._hullStart; _t15 < A; _t15++) {
          this.hull[_t15] = _n34, _n34 = e[_n34];
        }

        this.triangles = this._triangles.subarray(0, this.trianglesLen), this.halfedges = this._halfedges.subarray(0, this.trianglesLen);
      }
    }, {
      key: "_hashKey",
      value: function _hashKey(t, n) {
        return Math.floor(function (t, n) {
          var e = t / (Math.abs(t) + Math.abs(n));
          return (n > 0 ? 3 - e : 1 + e) / 4;
        }(t - this._cx, n - this._cy) * this._hashSize) % this._hashSize;
      }
    }, {
      key: "_legalize",
      value: function _legalize(t) {
        var n = this._triangles,
            e = this._halfedges,
            r = this.coords;
        var i = 0,
            o = 0;

        for (;;) {
          var _a7 = e[t],
              _u6 = t - t % 3;

          if (o = _u6 + (t + 2) % 3, -1 === _a7) {
            if (0 === i) break;
            t = Wa[--i];
            continue;
          }

          var _c4 = _a7 - _a7 % 3,
              _f4 = _u6 + (t + 1) % 3,
              _s3 = _c4 + (_a7 + 2) % 3,
              _l3 = n[o],
              _h2 = n[t],
              _d2 = n[_f4],
              _p2 = n[_s3];

          if (Qa(r[2 * _l3], r[2 * _l3 + 1], r[2 * _h2], r[2 * _h2 + 1], r[2 * _d2], r[2 * _d2 + 1], r[2 * _p2], r[2 * _p2 + 1])) {
            n[t] = _p2, n[_a7] = _l3;
            var _r18 = e[_s3];

            if (-1 === _r18) {
              var _n35 = this._hullStart;

              do {
                if (this._hullTri[_n35] === _s3) {
                  this._hullTri[_n35] = t;
                  break;
                }

                _n35 = this._hullPrev[_n35];
              } while (_n35 !== this._hullStart);
            }

            this._link(t, _r18), this._link(_a7, e[o]), this._link(o, _s3);

            var _u7 = _c4 + (_a7 + 1) % 3;

            i < Wa.length && (Wa[i++] = _u7);
          } else {
            if (0 === i) break;
            t = Wa[--i];
          }
        }

        return o;
      }
    }, {
      key: "_link",
      value: function _link(t, n) {
        this._halfedges[t] = n, -1 !== n && (this._halfedges[n] = t);
      }
    }, {
      key: "_addTriangle",
      value: function _addTriangle(t, n, e, r, i, o) {
        var a = this.trianglesLen;
        return this._triangles[a] = t, this._triangles[a + 1] = n, this._triangles[a + 2] = e, this._link(a, r), this._link(a + 1, i), this._link(a + 2, o), this.trianglesLen += 3, a;
      }
    }], [{
      key: "from",
      value: function from(t) {
        var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : eu;
        var e = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ru;
        var r = t.length,
            i = new Float64Array(2 * r);

        for (var _o10 = 0; _o10 < r; _o10++) {
          var _r19 = t[_o10];
          i[2 * _o10] = n(_r19), i[2 * _o10 + 1] = e(_r19);
        }

        return new Za(i);
      }
    }]);

    return Za;
  }();

  function Ka(t, n, e, r) {
    var i = t - e,
        o = n - r;
    return i * i + o * o;
  }

  function Qa(t, n, e, r, i, o, a, u) {
    var c = t - a,
        f = n - u,
        s = e - a,
        l = r - u,
        h = i - a,
        d = o - u,
        p = s * s + l * l,
        g = h * h + d * d;
    return c * (l * g - p * d) - f * (s * g - p * h) + (c * c + f * f) * (s * d - l * h) < 0;
  }

  function Ja(t, n, e, r, i, o) {
    var a = e - t,
        u = r - n,
        c = i - t,
        f = o - n,
        s = a * a + u * u,
        l = c * c + f * f,
        h = .5 / (a * f - u * c),
        d = (f * s - u * l) * h,
        p = (a * l - c * s) * h;
    return d * d + p * p;
  }

  function tu(t, n, e, r) {
    if (r - e <= 20) for (var _i12 = e + 1; _i12 <= r; _i12++) {
      var _r20 = t[_i12],
          _o11 = n[_r20];

      var _a8 = _i12 - 1;

      for (; _a8 >= e && n[t[_a8]] > _o11;) {
        t[_a8 + 1] = t[_a8--];
      }

      t[_a8 + 1] = _r20;
    } else {
      var _i13 = e + 1,
          _o12 = r;

      nu(t, e + r >> 1, _i13), n[t[e]] > n[t[r]] && nu(t, e, r), n[t[_i13]] > n[t[r]] && nu(t, _i13, r), n[t[e]] > n[t[_i13]] && nu(t, e, _i13);
      var _a9 = t[_i13],
          _u8 = n[_a9];

      for (;;) {
        do {
          _i13++;
        } while (n[t[_i13]] < _u8);

        do {
          _o12--;
        } while (n[t[_o12]] > _u8);

        if (_o12 < _i13) break;
        nu(t, _i13, _o12);
      }

      t[e + 1] = t[_o12], t[_o12] = _a9, r - _i13 + 1 >= _o12 - e ? (tu(t, n, _i13, r), tu(t, n, e, _o12 - 1)) : (tu(t, n, e, _o12 - 1), tu(t, n, _i13, r));
    }
  }

  function nu(t, n, e) {
    var r = t[n];
    t[n] = t[e], t[e] = r;
  }

  function eu(t) {
    return t[0];
  }

  function ru(t) {
    return t[1];
  }

  var iu = 1e-6;

  var ou = /*#__PURE__*/function () {
    function ou() {
      _classCallCheck(this, ou);

      this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = "";
    }

    _createClass(ou, [{
      key: "moveTo",
      value: function moveTo(t, n) {
        this._ += "M".concat(this._x0 = this._x1 = +t, ",").concat(this._y0 = this._y1 = +n);
      }
    }, {
      key: "closePath",
      value: function closePath() {
        null !== this._x1 && (this._x1 = this._x0, this._y1 = this._y0, this._ += "Z");
      }
    }, {
      key: "lineTo",
      value: function lineTo(t, n) {
        this._ += "L".concat(this._x1 = +t, ",").concat(this._y1 = +n);
      }
    }, {
      key: "arc",
      value: function arc(t, n, e) {
        var r = (t = +t) + (e = +e),
            i = n = +n;
        if (e < 0) throw new Error("negative radius");
        null === this._x1 ? this._ += "M".concat(r, ",").concat(i) : (Math.abs(this._x1 - r) > iu || Math.abs(this._y1 - i) > iu) && (this._ += "L" + r + "," + i), e && (this._ += "A".concat(e, ",").concat(e, ",0,1,1,").concat(t - e, ",").concat(n, "A").concat(e, ",").concat(e, ",0,1,1,").concat(this._x1 = r, ",").concat(this._y1 = i));
      }
    }, {
      key: "rect",
      value: function rect(t, n, e, r) {
        this._ += "M".concat(this._x0 = this._x1 = +t, ",").concat(this._y0 = this._y1 = +n, "h").concat(+e, "v").concat(+r, "h").concat(-e, "Z");
      }
    }, {
      key: "value",
      value: function value() {
        return this._ || null;
      }
    }]);

    return ou;
  }();

  var au = /*#__PURE__*/function () {
    function au() {
      _classCallCheck(this, au);

      this._ = [];
    }

    _createClass(au, [{
      key: "moveTo",
      value: function moveTo(t, n) {
        this._.push([t, n]);
      }
    }, {
      key: "closePath",
      value: function closePath() {
        this._.push(this._[0].slice());
      }
    }, {
      key: "lineTo",
      value: function lineTo(t, n) {
        this._.push([t, n]);
      }
    }, {
      key: "value",
      value: function value() {
        return this._.length ? this._ : null;
      }
    }]);

    return au;
  }();

  var uu = /*#__PURE__*/function () {
    function uu(t) {
      var _ref8 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [0, 0, 960, 500],
          _ref9 = _slicedToArray(_ref8, 4),
          n = _ref9[0],
          e = _ref9[1],
          r = _ref9[2],
          i = _ref9[3];

      _classCallCheck(this, uu);

      if (!((r = +r) >= (n = +n) && (i = +i) >= (e = +e))) throw new Error("invalid bounds");
      this.delaunay = t, this._circumcenters = new Float64Array(2 * t.points.length), this.vectors = new Float64Array(2 * t.points.length), this.xmax = r, this.xmin = n, this.ymax = i, this.ymin = e, this._init();
    }

    _createClass(uu, [{
      key: "update",
      value: function update() {
        return this.delaunay.update(), this._init(), this;
      }
    }, {
      key: "_init",
      value: function _init() {
        var _this$delaunay = this.delaunay,
            t = _this$delaunay.points,
            n = _this$delaunay.hull,
            e = _this$delaunay.triangles,
            r = this.vectors,
            i = this.circumcenters = this._circumcenters.subarray(0, e.length / 3 * 2);

        for (var _n36, _r21, _o13 = 0, _a10 = 0, _u9 = e.length; _o13 < _u9; _o13 += 3, _a10 += 2) {
          var _u10 = 2 * e[_o13],
              _c5 = 2 * e[_o13 + 1],
              _f5 = 2 * e[_o13 + 2],
              _s4 = t[_u10],
              _l4 = t[_u10 + 1],
              _h3 = t[_c5],
              _d3 = t[_c5 + 1],
              _p3 = t[_f5],
              _g3 = t[_f5 + 1],
              _y3 = _h3 - _s4,
              _v3 = _d3 - _l4,
              _3 = _p3 - _s4,
              _b2 = _g3 - _l4,
              _m2 = 2 * (_y3 * _b2 - _v3 * _3);

          if (Math.abs(_m2) < 1e-9) {
            var _i14 = 1e9;

            var _o14 = 2 * e[0];

            _i14 *= Math.sign((t[_o14] - _s4) * _b2 - (t[_o14 + 1] - _l4) * _3), _n36 = (_s4 + _p3) / 2 - _i14 * _b2, _r21 = (_l4 + _g3) / 2 + _i14 * _3;
          } else {
            var _t16 = 1 / _m2,
                _e22 = _y3 * _y3 + _v3 * _v3,
                _i15 = _3 * _3 + _b2 * _b2;

            _n36 = _s4 + (_b2 * _e22 - _v3 * _i15) * _t16, _r21 = _l4 + (_y3 * _i15 - _3 * _e22) * _t16;
          }

          i[_a10] = _n36, i[_a10 + 1] = _r21;
        }

        var o,
            a,
            u,
            c = n[n.length - 1],
            f = 4 * c,
            s = t[2 * c],
            l = t[2 * c + 1];
        r.fill(0);

        for (var _e23 = 0; _e23 < n.length; ++_e23) {
          c = n[_e23], o = f, a = s, u = l, f = 4 * c, s = t[2 * c], l = t[2 * c + 1], r[o + 2] = r[f] = u - l, r[o + 3] = r[f + 1] = s - a;
        }
      }
    }, {
      key: "render",
      value: function render(t) {
        var n = null == t ? t = new ou() : void 0,
            _this$delaunay2 = this.delaunay,
            e = _this$delaunay2.halfedges,
            r = _this$delaunay2.inedges,
            i = _this$delaunay2.hull,
            o = this.circumcenters,
            a = this.vectors;
        if (i.length <= 1) return null;

        for (var _n37 = 0, _r22 = e.length; _n37 < _r22; ++_n37) {
          var _r23 = e[_n37];
          if (_r23 < _n37) continue;

          var _i16 = 2 * Math.floor(_n37 / 3),
              _a11 = 2 * Math.floor(_r23 / 3),
              _u11 = o[_i16],
              _c6 = o[_i16 + 1],
              _f6 = o[_a11],
              _s5 = o[_a11 + 1];

          this._renderSegment(_u11, _c6, _f6, _s5, t);
        }

        var u,
            c = i[i.length - 1];

        for (var _n38 = 0; _n38 < i.length; ++_n38) {
          u = c, c = i[_n38];

          var _e24 = 2 * Math.floor(r[c] / 3),
              _f7 = o[_e24],
              _s6 = o[_e24 + 1],
              _l5 = 4 * u,
              _h4 = this._project(_f7, _s6, a[_l5 + 2], a[_l5 + 3]);

          _h4 && this._renderSegment(_f7, _s6, _h4[0], _h4[1], t);
        }

        return n && n.value();
      }
    }, {
      key: "renderBounds",
      value: function renderBounds(t) {
        var n = null == t ? t = new ou() : void 0;
        return t.rect(this.xmin, this.ymin, this.xmax - this.xmin, this.ymax - this.ymin), n && n.value();
      }
    }, {
      key: "renderCell",
      value: function renderCell(t, n) {
        var e = null == n ? n = new ou() : void 0,
            r = this._clip(t);

        if (null === r || !r.length) return;
        n.moveTo(r[0], r[1]);
        var i = r.length;

        for (; r[0] === r[i - 2] && r[1] === r[i - 1] && i > 1;) {
          i -= 2;
        }

        for (var _t17 = 2; _t17 < i; _t17 += 2) {
          r[_t17] === r[_t17 - 2] && r[_t17 + 1] === r[_t17 - 1] || n.lineTo(r[_t17], r[_t17 + 1]);
        }

        return n.closePath(), e && e.value();
      }
    }, {
      key: "cellPolygons",
      value: /*#__PURE__*/_regeneratorRuntime().mark(function cellPolygons() {
        var t, _n39, _e25, _t18;

        return _regeneratorRuntime().wrap(function cellPolygons$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                t = this.delaunay.points;
                _n39 = 0, _e25 = t.length / 2;

              case 2:
                if (!(_n39 < _e25)) {
                  _context4.next = 12;
                  break;
                }

                _t18 = this.cellPolygon(_n39);
                _context4.t0 = _t18;

                if (!_context4.t0) {
                  _context4.next = 9;
                  break;
                }

                _t18.index = _n39;
                _context4.next = 9;
                return _t18;

              case 9:
                ++_n39;
                _context4.next = 2;
                break;

              case 12:
              case "end":
                return _context4.stop();
            }
          }
        }, cellPolygons, this);
      })
    }, {
      key: "cellPolygon",
      value: function cellPolygon(t) {
        var n = new au();
        return this.renderCell(t, n), n.value();
      }
    }, {
      key: "_renderSegment",
      value: function _renderSegment(t, n, e, r, i) {
        var o;

        var a = this._regioncode(t, n),
            u = this._regioncode(e, r);

        0 === a && 0 === u ? (i.moveTo(t, n), i.lineTo(e, r)) : (o = this._clipSegment(t, n, e, r, a, u)) && (i.moveTo(o[0], o[1]), i.lineTo(o[2], o[3]));
      }
    }, {
      key: "contains",
      value: function contains(t, n, e) {
        return (n = +n) == n && (e = +e) == e && this.delaunay._step(t, n, e) === t;
      }
    }, {
      key: "neighbors",
      value: /*#__PURE__*/_regeneratorRuntime().mark(function neighbors(t) {
        var n, _iterator32, _step32, _e26, _t19, _r24, _i17, _o15, _a12;

        return _regeneratorRuntime().wrap(function neighbors$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                n = this._clip(t);

                if (!n) {
                  _context5.next = 33;
                  break;
                }

                _iterator32 = _createForOfIteratorHelper(this.delaunay.neighbors(t));
                _context5.prev = 3;

                _iterator32.s();

              case 5:
                if ((_step32 = _iterator32.n()).done) {
                  _context5.next = 25;
                  break;
                }

                _e26 = _step32.value;
                _t19 = this._clip(_e26);

                if (!_t19) {
                  _context5.next = 23;
                  break;
                }

                _r24 = 0, _i17 = n.length;

              case 10:
                if (!(_r24 < _i17)) {
                  _context5.next = 23;
                  break;
                }

                _o15 = 0, _a12 = _t19.length;

              case 12:
                if (!(_o15 < _a12)) {
                  _context5.next = 20;
                  break;
                }

                if (!(n[_r24] == _t19[_o15] && n[_r24 + 1] == _t19[_o15 + 1] && n[(_r24 + 2) % _i17] == _t19[(_o15 + _a12 - 2) % _a12] && n[(_r24 + 3) % _i17] == _t19[(_o15 + _a12 - 1) % _a12])) {
                  _context5.next = 17;
                  break;
                }

                _context5.next = 16;
                return _e26;

              case 16:
                return _context5.abrupt("break", 23);

              case 17:
                _o15 += 2;
                _context5.next = 12;
                break;

              case 20:
                _r24 += 2;
                _context5.next = 10;
                break;

              case 23:
                _context5.next = 5;
                break;

              case 25:
                _context5.next = 30;
                break;

              case 27:
                _context5.prev = 27;
                _context5.t0 = _context5["catch"](3);

                _iterator32.e(_context5.t0);

              case 30:
                _context5.prev = 30;

                _iterator32.f();

                return _context5.finish(30);

              case 33:
              case "end":
                return _context5.stop();
            }
          }
        }, neighbors, this, [[3, 27, 30, 33]]);
      })
    }, {
      key: "_cell",
      value: function _cell(t) {
        var n = this.circumcenters,
            _this$delaunay3 = this.delaunay,
            e = _this$delaunay3.inedges,
            r = _this$delaunay3.halfedges,
            i = _this$delaunay3.triangles,
            o = e[t];
        if (-1 === o) return null;
        var a = [];
        var u = o;

        do {
          var _e27 = Math.floor(u / 3);

          if (a.push(n[2 * _e27], n[2 * _e27 + 1]), u = u % 3 == 2 ? u - 2 : u + 1, i[u] !== t) break;
          u = r[u];
        } while (u !== o && -1 !== u);

        return a;
      }
    }, {
      key: "_clip",
      value: function _clip(t) {
        if (0 === t && 1 === this.delaunay.hull.length) return [this.xmax, this.ymin, this.xmax, this.ymax, this.xmin, this.ymax, this.xmin, this.ymin];

        var n = this._cell(t);

        if (null === n) return null;
        var e = this.vectors,
            r = 4 * t;
        return e[r] || e[r + 1] ? this._clipInfinite(t, n, e[r], e[r + 1], e[r + 2], e[r + 3]) : this._clipFinite(t, n);
      }
    }, {
      key: "_clipFinite",
      value: function _clipFinite(t, n) {
        var e = n.length;

        var r,
            i,
            o,
            a,
            u = null,
            c = n[e - 2],
            f = n[e - 1],
            s = this._regioncode(c, f),
            l = 0;

        for (var _h5 = 0; _h5 < e; _h5 += 2) {
          if (r = c, i = f, c = n[_h5], f = n[_h5 + 1], o = s, s = this._regioncode(c, f), 0 === o && 0 === s) a = l, l = 0, u ? u.push(c, f) : u = [c, f];else {
            var _n40 = void 0,
                _e28 = void 0,
                _h6 = void 0,
                _d4 = void 0,
                _p4 = void 0;

            if (0 === o) {
              if (null === (_n40 = this._clipSegment(r, i, c, f, o, s))) continue;
              var _n41 = _n40;

              var _n42 = _slicedToArray(_n41, 4);

              _e28 = _n42[0];
              _h6 = _n42[1];
              _d4 = _n42[2];
              _p4 = _n42[3];
            } else {
              var _n43, _n44;

              if (null === (_n40 = this._clipSegment(c, f, r, i, s, o))) continue;
              (_n43 = _n40, _n44 = _slicedToArray(_n43, 4), _d4 = _n44[0], _p4 = _n44[1], _e28 = _n44[2], _h6 = _n44[3]), a = l, l = this._edgecode(_e28, _h6), a && l && this._edge(t, a, l, u, u.length), u ? u.push(_e28, _h6) : u = [_e28, _h6];
            }

            a = l, l = this._edgecode(_d4, _p4), a && l && this._edge(t, a, l, u, u.length), u ? u.push(_d4, _p4) : u = [_d4, _p4];
          }
        }

        if (u) a = l, l = this._edgecode(u[0], u[1]), a && l && this._edge(t, a, l, u, u.length);else if (this.contains(t, (this.xmin + this.xmax) / 2, (this.ymin + this.ymax) / 2)) return [this.xmax, this.ymin, this.xmax, this.ymax, this.xmin, this.ymax, this.xmin, this.ymin];
        return u;
      }
    }, {
      key: "_clipSegment",
      value: function _clipSegment(t, n, e, r, i, o) {
        for (;;) {
          if (0 === i && 0 === o) return [t, n, e, r];
          if (i & o) return null;

          var _a13 = void 0,
              _u12 = void 0,
              _c7 = i || o;

          8 & _c7 ? (_a13 = t + (e - t) * (this.ymax - n) / (r - n), _u12 = this.ymax) : 4 & _c7 ? (_a13 = t + (e - t) * (this.ymin - n) / (r - n), _u12 = this.ymin) : 2 & _c7 ? (_u12 = n + (r - n) * (this.xmax - t) / (e - t), _a13 = this.xmax) : (_u12 = n + (r - n) * (this.xmin - t) / (e - t), _a13 = this.xmin), i ? (t = _a13, n = _u12, i = this._regioncode(t, n)) : (e = _a13, r = _u12, o = this._regioncode(e, r));
        }
      }
    }, {
      key: "_clipInfinite",
      value: function _clipInfinite(t, n, e, r, i, o) {
        var a,
            u = Array.from(n);
        if ((a = this._project(u[0], u[1], e, r)) && u.unshift(a[0], a[1]), (a = this._project(u[u.length - 2], u[u.length - 1], i, o)) && u.push(a[0], a[1]), u = this._clipFinite(t, u)) for (var _n45, _e29 = 0, _r25 = u.length, _i18 = this._edgecode(u[_r25 - 2], u[_r25 - 1]); _e29 < _r25; _e29 += 2) {
          _n45 = _i18, _i18 = this._edgecode(u[_e29], u[_e29 + 1]), _n45 && _i18 && (_e29 = this._edge(t, _n45, _i18, u, _e29), _r25 = u.length);
        } else this.contains(t, (this.xmin + this.xmax) / 2, (this.ymin + this.ymax) / 2) && (u = [this.xmin, this.ymin, this.xmax, this.ymin, this.xmax, this.ymax, this.xmin, this.ymax]);
        return u;
      }
    }, {
      key: "_edge",
      value: function _edge(t, n, e, r, i) {
        for (; n !== e;) {
          var _e30 = void 0,
              _o16 = void 0;

          switch (n) {
            case 5:
              n = 4;
              continue;

            case 4:
              n = 6, _e30 = this.xmax, _o16 = this.ymin;
              break;

            case 6:
              n = 2;
              continue;

            case 2:
              n = 10, _e30 = this.xmax, _o16 = this.ymax;
              break;

            case 10:
              n = 8;
              continue;

            case 8:
              n = 9, _e30 = this.xmin, _o16 = this.ymax;
              break;

            case 9:
              n = 1;
              continue;

            case 1:
              n = 5, _e30 = this.xmin, _o16 = this.ymin;
          }

          r[i] === _e30 && r[i + 1] === _o16 || !this.contains(t, _e30, _o16) || (r.splice(i, 0, _e30, _o16), i += 2);
        }

        if (r.length > 4) for (var _t20 = 0; _t20 < r.length; _t20 += 2) {
          var _n46 = (_t20 + 2) % r.length,
              _e31 = (_t20 + 4) % r.length;

          (r[_t20] === r[_n46] && r[_n46] === r[_e31] || r[_t20 + 1] === r[_n46 + 1] && r[_n46 + 1] === r[_e31 + 1]) && (r.splice(_n46, 2), _t20 -= 2);
        }
        return i;
      }
    }, {
      key: "_project",
      value: function _project(t, n, e, r) {
        var i,
            o,
            a,
            u = 1 / 0;

        if (r < 0) {
          if (n <= this.ymin) return null;
          (i = (this.ymin - n) / r) < u && (a = this.ymin, o = t + (u = i) * e);
        } else if (r > 0) {
          if (n >= this.ymax) return null;
          (i = (this.ymax - n) / r) < u && (a = this.ymax, o = t + (u = i) * e);
        }

        if (e > 0) {
          if (t >= this.xmax) return null;
          (i = (this.xmax - t) / e) < u && (o = this.xmax, a = n + (u = i) * r);
        } else if (e < 0) {
          if (t <= this.xmin) return null;
          (i = (this.xmin - t) / e) < u && (o = this.xmin, a = n + (u = i) * r);
        }

        return [o, a];
      }
    }, {
      key: "_edgecode",
      value: function _edgecode(t, n) {
        return (t === this.xmin ? 1 : t === this.xmax ? 2 : 0) | (n === this.ymin ? 4 : n === this.ymax ? 8 : 0);
      }
    }, {
      key: "_regioncode",
      value: function _regioncode(t, n) {
        return (t < this.xmin ? 1 : t > this.xmax ? 2 : 0) | (n < this.ymin ? 4 : n > this.ymax ? 8 : 0);
      }
    }]);

    return uu;
  }();

  var cu = 2 * Math.PI,
      fu = Math.pow;

  function su(t) {
    return t[0];
  }

  function lu(t) {
    return t[1];
  }

  function hu(t, n, e) {
    return [t + Math.sin(t + n) * e, n + Math.cos(t - n) * e];
  }

  var du = /*#__PURE__*/function () {
    function du(t) {
      _classCallCheck(this, du);

      this._delaunator = new Za(t), this.inedges = new Int32Array(t.length / 2), this._hullIndex = new Int32Array(t.length / 2), this.points = this._delaunator.coords, this._init();
    }

    _createClass(du, [{
      key: "update",
      value: function update() {
        return this._delaunator.update(), this._init(), this;
      }
    }, {
      key: "_init",
      value: function _init() {
        var t = this._delaunator,
            n = this.points;

        if (t.hull && t.hull.length > 2 && function (t) {
          var n = t.triangles,
              e = t.coords;

          for (var _t21 = 0; _t21 < n.length; _t21 += 3) {
            var _r26 = 2 * n[_t21],
                _i19 = 2 * n[_t21 + 1],
                _o17 = 2 * n[_t21 + 2];

            if ((e[_o17] - e[_r26]) * (e[_i19 + 1] - e[_r26 + 1]) - (e[_i19] - e[_r26]) * (e[_o17 + 1] - e[_r26 + 1]) > 1e-10) return !1;
          }

          return !0;
        }(t)) {
          this.collinear = Int32Array.from({
            length: n.length / 2
          }, function (t, n) {
            return n;
          }).sort(function (t, e) {
            return n[2 * t] - n[2 * e] || n[2 * t + 1] - n[2 * e + 1];
          });

          var _t22 = this.collinear[0],
              _e32 = this.collinear[this.collinear.length - 1],
              _r27 = [n[2 * _t22], n[2 * _t22 + 1], n[2 * _e32], n[2 * _e32 + 1]],
              _i20 = 1e-8 * Math.hypot(_r27[3] - _r27[1], _r27[2] - _r27[0]);

          for (var _t23 = 0, _e33 = n.length / 2; _t23 < _e33; ++_t23) {
            var _e34 = hu(n[2 * _t23], n[2 * _t23 + 1], _i20);

            n[2 * _t23] = _e34[0], n[2 * _t23 + 1] = _e34[1];
          }

          this._delaunator = new Za(n);
        } else delete this.collinear;

        var e = this.halfedges = this._delaunator.halfedges,
            r = this.hull = this._delaunator.hull,
            i = this.triangles = this._delaunator.triangles,
            o = this.inedges.fill(-1),
            a = this._hullIndex.fill(-1);

        for (var _t24 = 0, _n47 = e.length; _t24 < _n47; ++_t24) {
          var _n48 = i[_t24 % 3 == 2 ? _t24 - 2 : _t24 + 1];
          -1 !== e[_t24] && -1 !== o[_n48] || (o[_n48] = _t24);
        }

        for (var _t25 = 0, _n49 = r.length; _t25 < _n49; ++_t25) {
          a[r[_t25]] = _t25;
        }

        r.length <= 2 && r.length > 0 && (this.triangles = new Int32Array(3).fill(-1), this.halfedges = new Int32Array(3).fill(-1), this.triangles[0] = r[0], o[r[0]] = 1, 2 === r.length && (o[r[1]] = 0, this.triangles[1] = r[1], this.triangles[2] = r[1]));
      }
    }, {
      key: "voronoi",
      value: function voronoi(t) {
        return new uu(this, t);
      }
    }, {
      key: "neighbors",
      value: /*#__PURE__*/_regeneratorRuntime().mark(function neighbors(t) {
        var n, e, r, i, o, a, _n50, u, c, f, _n51;

        return _regeneratorRuntime().wrap(function neighbors$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                n = this.inedges, e = this.hull, r = this._hullIndex, i = this.halfedges, o = this.triangles, a = this.collinear;

                if (!a) {
                  _context6.next = 13;
                  break;
                }

                _n50 = a.indexOf(t);
                _context6.t0 = _n50 > 0;

                if (!_context6.t0) {
                  _context6.next = 7;
                  break;
                }

                _context6.next = 7;
                return a[_n50 - 1];

              case 7:
                _context6.t1 = _n50 < a.length - 1;

                if (!_context6.t1) {
                  _context6.next = 12;
                  break;
                }

                _context6.next = 11;
                return a[_n50 + 1];

              case 11:
                _context6.t1 = _context6.sent;

              case 12:
                return _context6.abrupt("return", void _context6.t1);

              case 13:
                u = n[t];

                if (!(-1 === u)) {
                  _context6.next = 16;
                  break;
                }

                return _context6.abrupt("return");

              case 16:
                c = u, f = -1;

              case 17:
                _context6.next = 19;
                return f = o[c];

              case 19:
                c = c % 3 == 2 ? c - 2 : c + 1;

                if (!(o[c] !== t)) {
                  _context6.next = 22;
                  break;
                }

                return _context6.abrupt("return");

              case 22:
                if (!(c = i[c], -1 === c)) {
                  _context6.next = 30;
                  break;
                }

                _n51 = e[(r[t] + 1) % e.length];
                _context6.t2 = _n51 !== f;

                if (!_context6.t2) {
                  _context6.next = 29;
                  break;
                }

                _context6.next = 28;
                return _n51;

              case 28:
                _context6.t2 = _context6.sent;

              case 29:
                return _context6.abrupt("return", void _context6.t2);

              case 30:
                if (c !== u) {
                  _context6.next = 17;
                  break;
                }

              case 31:
              case "end":
                return _context6.stop();
            }
          }
        }, neighbors, this);
      })
    }, {
      key: "find",
      value: function find(t, n) {
        var e = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
        if ((t = +t) != t || (n = +n) != n) return -1;
        var r = e;
        var i;

        for (; (i = this._step(e, t, n)) >= 0 && i !== e && i !== r;) {
          e = i;
        }

        return i;
      }
    }, {
      key: "_step",
      value: function _step(t, n, e) {
        var r = this.inedges,
            i = this.hull,
            o = this._hullIndex,
            a = this.halfedges,
            u = this.triangles,
            c = this.points;
        if (-1 === r[t] || !c.length) return (t + 1) % (c.length >> 1);
        var f = t,
            s = fu(n - c[2 * t], 2) + fu(e - c[2 * t + 1], 2);
        var l = r[t];
        var h = l;

        do {
          var _r28 = u[h];

          var _l6 = fu(n - c[2 * _r28], 2) + fu(e - c[2 * _r28 + 1], 2);

          if (_l6 < s && (s = _l6, f = _r28), h = h % 3 == 2 ? h - 2 : h + 1, u[h] !== t) break;

          if (h = a[h], -1 === h) {
            if (h = i[(o[t] + 1) % i.length], h !== _r28 && fu(n - c[2 * h], 2) + fu(e - c[2 * h + 1], 2) < s) return h;
            break;
          }
        } while (h !== l);

        return f;
      }
    }, {
      key: "render",
      value: function render(t) {
        var n = null == t ? t = new ou() : void 0,
            e = this.points,
            r = this.halfedges,
            i = this.triangles;

        for (var _n52 = 0, _o18 = r.length; _n52 < _o18; ++_n52) {
          var _o19 = r[_n52];
          if (_o19 < _n52) continue;

          var _a14 = 2 * i[_n52],
              _u13 = 2 * i[_o19];

          t.moveTo(e[_a14], e[_a14 + 1]), t.lineTo(e[_u13], e[_u13 + 1]);
        }

        return this.renderHull(t), n && n.value();
      }
    }, {
      key: "renderPoints",
      value: function renderPoints(t, n) {
        void 0 !== n || t && "function" == typeof t.moveTo || (n = t, t = null), n = null == n ? 2 : +n;
        var e = null == t ? t = new ou() : void 0,
            r = this.points;

        for (var _e35 = 0, _i21 = r.length; _e35 < _i21; _e35 += 2) {
          var _i22 = r[_e35],
              _o20 = r[_e35 + 1];
          t.moveTo(_i22 + n, _o20), t.arc(_i22, _o20, n, 0, cu);
        }

        return e && e.value();
      }
    }, {
      key: "renderHull",
      value: function renderHull(t) {
        var n = null == t ? t = new ou() : void 0,
            e = this.hull,
            r = this.points,
            i = 2 * e[0],
            o = e.length;
        t.moveTo(r[i], r[i + 1]);

        for (var _n53 = 1; _n53 < o; ++_n53) {
          var _i23 = 2 * e[_n53];

          t.lineTo(r[_i23], r[_i23 + 1]);
        }

        return t.closePath(), n && n.value();
      }
    }, {
      key: "hullPolygon",
      value: function hullPolygon() {
        var t = new au();
        return this.renderHull(t), t.value();
      }
    }, {
      key: "renderTriangle",
      value: function renderTriangle(t, n) {
        var e = null == n ? n = new ou() : void 0,
            r = this.points,
            i = this.triangles,
            o = 2 * i[t *= 3],
            a = 2 * i[t + 1],
            u = 2 * i[t + 2];
        return n.moveTo(r[o], r[o + 1]), n.lineTo(r[a], r[a + 1]), n.lineTo(r[u], r[u + 1]), n.closePath(), e && e.value();
      }
    }, {
      key: "trianglePolygons",
      value: /*#__PURE__*/_regeneratorRuntime().mark(function trianglePolygons() {
        var t, _n54, _e36;

        return _regeneratorRuntime().wrap(function trianglePolygons$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                t = this.triangles;
                _n54 = 0, _e36 = t.length / 3;

              case 2:
                if (!(_n54 < _e36)) {
                  _context7.next = 8;
                  break;
                }

                _context7.next = 5;
                return this.trianglePolygon(_n54);

              case 5:
                ++_n54;
                _context7.next = 2;
                break;

              case 8:
              case "end":
                return _context7.stop();
            }
          }
        }, trianglePolygons, this);
      })
    }, {
      key: "trianglePolygon",
      value: function trianglePolygon(t) {
        var n = new au();
        return this.renderTriangle(t, n), n.value();
      }
    }], [{
      key: "from",
      value: function from(t) {
        var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : su;
        var e = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : lu;
        var r = arguments.length > 3 ? arguments[3] : undefined;
        return new du("length" in t ? function (t, n, e, r) {
          var i = t.length,
              o = new Float64Array(2 * i);

          for (var _a15 = 0; _a15 < i; ++_a15) {
            var _i24 = t[_a15];
            o[2 * _a15] = n.call(r, _i24, _a15, t), o[2 * _a15 + 1] = e.call(r, _i24, _a15, t);
          }

          return o;
        }(t, n, e, r) : Float64Array.from( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(t, n, e, r) {
          var i, _iterator33, _step33, _o21;

          return _regeneratorRuntime().wrap(function _callee4$(_context8) {
            while (1) {
              switch (_context8.prev = _context8.next) {
                case 0:
                  i = 0;
                  _iterator33 = _createForOfIteratorHelper(t);
                  _context8.prev = 2;

                  _iterator33.s();

                case 4:
                  if ((_step33 = _iterator33.n()).done) {
                    _context8.next = 13;
                    break;
                  }

                  _o21 = _step33.value;
                  _context8.next = 8;
                  return n.call(r, _o21, i, t);

                case 8:
                  _context8.next = 10;
                  return e.call(r, _o21, i, t);

                case 10:
                  ++i;

                case 11:
                  _context8.next = 4;
                  break;

                case 13:
                  _context8.next = 18;
                  break;

                case 15:
                  _context8.prev = 15;
                  _context8.t0 = _context8["catch"](2);

                  _iterator33.e(_context8.t0);

                case 18:
                  _context8.prev = 18;

                  _iterator33.f();

                  return _context8.finish(18);

                case 21:
                case "end":
                  return _context8.stop();
              }
            }
          }, _callee4, null, [[2, 15, 18, 21]]);
        })(t, n, e, r)));
      }
    }]);

    return du;
  }();

  var pu = {},
      gu = {};

  function yu(t) {
    return new Function("d", "return {" + t.map(function (t, n) {
      return JSON.stringify(t) + ": d[" + n + '] || ""';
    }).join(",") + "}");
  }

  function vu(t) {
    var n = Object.create(null),
        e = [];
    return t.forEach(function (t) {
      for (var r in t) {
        r in n || e.push(n[r] = r);
      }
    }), e;
  }

  function _u(t, n) {
    var e = t + "",
        r = e.length;
    return r < n ? new Array(n - r + 1).join(0) + e : e;
  }

  function bu(t) {
    var n = t.getUTCHours(),
        e = t.getUTCMinutes(),
        r = t.getUTCSeconds(),
        i = t.getUTCMilliseconds();
    return isNaN(t) ? "Invalid Date" : function (t) {
      return t < 0 ? "-" + _u(-t, 6) : t > 9999 ? "+" + _u(t, 6) : _u(t, 4);
    }(t.getUTCFullYear()) + "-" + _u(t.getUTCMonth() + 1, 2) + "-" + _u(t.getUTCDate(), 2) + (i ? "T" + _u(n, 2) + ":" + _u(e, 2) + ":" + _u(r, 2) + "." + _u(i, 3) + "Z" : r ? "T" + _u(n, 2) + ":" + _u(e, 2) + ":" + _u(r, 2) + "Z" : e || n ? "T" + _u(n, 2) + ":" + _u(e, 2) + "Z" : "");
  }

  function mu(t) {
    var n = new RegExp('["' + t + "\n\r]"),
        e = t.charCodeAt(0);

    function r(t, n) {
      var r,
          i = [],
          o = t.length,
          a = 0,
          u = 0,
          c = o <= 0,
          f = !1;

      function s() {
        if (c) return gu;
        if (f) return f = !1, pu;
        var n,
            r,
            i = a;

        if (34 === t.charCodeAt(i)) {
          for (; a++ < o && 34 !== t.charCodeAt(a) || 34 === t.charCodeAt(++a);) {
            ;
          }

          return (n = a) >= o ? c = !0 : 10 === (r = t.charCodeAt(a++)) ? f = !0 : 13 === r && (f = !0, 10 === t.charCodeAt(a) && ++a), t.slice(i + 1, n - 1).replace(/""/g, '"');
        }

        for (; a < o;) {
          if (10 === (r = t.charCodeAt(n = a++))) f = !0;else if (13 === r) f = !0, 10 === t.charCodeAt(a) && ++a;else if (r !== e) continue;
          return t.slice(i, n);
        }

        return c = !0, t.slice(i, o);
      }

      for (10 === t.charCodeAt(o - 1) && --o, 13 === t.charCodeAt(o - 1) && --o; (r = s()) !== gu;) {
        for (var l = []; r !== pu && r !== gu;) {
          l.push(r), r = s();
        }

        n && null == (l = n(l, u++)) || i.push(l);
      }

      return i;
    }

    function i(n, e) {
      return n.map(function (n) {
        return e.map(function (t) {
          return a(n[t]);
        }).join(t);
      });
    }

    function o(n) {
      return n.map(a).join(t);
    }

    function a(t) {
      return null == t ? "" : t instanceof Date ? bu(t) : n.test(t += "") ? '"' + t.replace(/"/g, '""') + '"' : t;
    }

    return {
      parse: function parse(t, n) {
        var e,
            i,
            o = r(t, function (t, r) {
          if (e) return e(t, r - 1);
          i = t, e = n ? function (t, n) {
            var e = yu(t);
            return function (r, i) {
              return n(e(r), i, t);
            };
          }(t, n) : yu(t);
        });
        return o.columns = i || [], o;
      },
      parseRows: r,
      format: function format(n, e) {
        return null == e && (e = vu(n)), [e.map(a).join(t)].concat(i(n, e)).join("\n");
      },
      formatBody: function formatBody(t, n) {
        return null == n && (n = vu(t)), i(t, n).join("\n");
      },
      formatRows: function formatRows(t) {
        return t.map(o).join("\n");
      },
      formatRow: o,
      formatValue: a
    };
  }

  var xu = mu(","),
      wu = xu.parse,
      Mu = xu.parseRows,
      Au = xu.format,
      Tu = xu.formatBody,
      Su = xu.formatRows,
      Eu = xu.formatRow,
      ku = xu.formatValue,
      Nu = mu("\t"),
      Cu = Nu.parse,
      Pu = Nu.parseRows,
      zu = Nu.format,
      Du = Nu.formatBody,
      qu = Nu.formatRows,
      Ru = Nu.formatRow,
      Fu = Nu.formatValue;
  var Ou = new Date("2019-01-01T00:00").getHours() || new Date("2019-07-01T00:00").getHours();

  function Iu(t) {
    if (!t.ok) throw new Error(t.status + " " + t.statusText);
    return t.blob();
  }

  function Uu(t) {
    if (!t.ok) throw new Error(t.status + " " + t.statusText);
    return t.arrayBuffer();
  }

  function Bu(t) {
    if (!t.ok) throw new Error(t.status + " " + t.statusText);
    return t.text();
  }

  function Yu(t, n) {
    return fetch(t, n).then(Bu);
  }

  function Lu(t) {
    return function (n, e, r) {
      return 2 === arguments.length && "function" == typeof e && (r = e, e = void 0), Yu(n, e).then(function (n) {
        return t(n, r);
      });
    };
  }

  var ju = Lu(wu),
      Hu = Lu(Cu);

  function Xu(t) {
    if (!t.ok) throw new Error(t.status + " " + t.statusText);
    if (204 !== t.status && 205 !== t.status) return t.json();
  }

  function Gu(t) {
    return function (n, e) {
      return Yu(n, e).then(function (n) {
        return new DOMParser().parseFromString(n, t);
      });
    };
  }

  var Vu = Gu("application/xml"),
      $u = Gu("text/html"),
      Wu = Gu("image/svg+xml");

  function Zu(t, n, e, r) {
    if (isNaN(n) || isNaN(e)) return t;
    var i,
        o,
        a,
        u,
        c,
        f,
        s,
        l,
        h,
        d = t._root,
        p = {
      data: r
    },
        g = t._x0,
        y = t._y0,
        v = t._x1,
        _ = t._y1;
    if (!d) return t._root = p, t;

    for (; d.length;) {
      if ((f = n >= (o = (g + v) / 2)) ? g = o : v = o, (s = e >= (a = (y + _) / 2)) ? y = a : _ = a, i = d, !(d = d[l = s << 1 | f])) return i[l] = p, t;
    }

    if (u = +t._x.call(null, d.data), c = +t._y.call(null, d.data), n === u && e === c) return p.next = d, i ? i[l] = p : t._root = p, t;

    do {
      i = i ? i[l] = new Array(4) : t._root = new Array(4), (f = n >= (o = (g + v) / 2)) ? g = o : v = o, (s = e >= (a = (y + _) / 2)) ? y = a : _ = a;
    } while ((l = s << 1 | f) == (h = (c >= a) << 1 | u >= o));

    return i[h] = d, i[l] = p, t;
  }

  function Ku(t, n, e, r, i) {
    this.node = t, this.x0 = n, this.y0 = e, this.x1 = r, this.y1 = i;
  }

  function Qu(t) {
    return t[0];
  }

  function Ju(t) {
    return t[1];
  }

  function tc(t, n, e) {
    var r = new nc(null == n ? Qu : n, null == e ? Ju : e, NaN, NaN, NaN, NaN);
    return null == t ? r : r.addAll(t);
  }

  function nc(t, n, e, r, i, o) {
    this._x = t, this._y = n, this._x0 = e, this._y0 = r, this._x1 = i, this._y1 = o, this._root = void 0;
  }

  function ec(t) {
    for (var n = {
      data: t.data
    }, e = n; t = t.next;) {
      e = e.next = {
        data: t.data
      };
    }

    return n;
  }

  var rc = tc.prototype = nc.prototype;

  function ic(t) {
    return function () {
      return t;
    };
  }

  function oc(t) {
    return 1e-6 * (t() - .5);
  }

  function ac(t) {
    return t.x + t.vx;
  }

  function uc(t) {
    return t.y + t.vy;
  }

  function cc(t) {
    return t.index;
  }

  function fc(t, n) {
    var e = t.get(n);
    if (!e) throw new Error("node not found: " + n);
    return e;
  }

  rc.copy = function () {
    var t,
        n,
        e = new nc(this._x, this._y, this._x0, this._y0, this._x1, this._y1),
        r = this._root;
    if (!r) return e;
    if (!r.length) return e._root = ec(r), e;

    for (t = [{
      source: r,
      target: e._root = new Array(4)
    }]; r = t.pop();) {
      for (var i = 0; i < 4; ++i) {
        (n = r.source[i]) && (n.length ? t.push({
          source: n,
          target: r.target[i] = new Array(4)
        }) : r.target[i] = ec(n));
      }
    }

    return e;
  }, rc.add = function (t) {
    var n = +this._x.call(null, t),
        e = +this._y.call(null, t);
    return Zu(this.cover(n, e), n, e, t);
  }, rc.addAll = function (t) {
    var n,
        e,
        r,
        i,
        o = t.length,
        a = new Array(o),
        u = new Array(o),
        c = 1 / 0,
        f = 1 / 0,
        s = -1 / 0,
        l = -1 / 0;

    for (e = 0; e < o; ++e) {
      isNaN(r = +this._x.call(null, n = t[e])) || isNaN(i = +this._y.call(null, n)) || (a[e] = r, u[e] = i, r < c && (c = r), r > s && (s = r), i < f && (f = i), i > l && (l = i));
    }

    if (c > s || f > l) return this;

    for (this.cover(c, f).cover(s, l), e = 0; e < o; ++e) {
      Zu(this, a[e], u[e], t[e]);
    }

    return this;
  }, rc.cover = function (t, n) {
    if (isNaN(t = +t) || isNaN(n = +n)) return this;
    var e = this._x0,
        r = this._y0,
        i = this._x1,
        o = this._y1;
    if (isNaN(e)) i = (e = Math.floor(t)) + 1, o = (r = Math.floor(n)) + 1;else {
      for (var a, u, c = i - e || 1, f = this._root; e > t || t >= i || r > n || n >= o;) {
        switch (u = (n < r) << 1 | t < e, (a = new Array(4))[u] = f, f = a, c *= 2, u) {
          case 0:
            i = e + c, o = r + c;
            break;

          case 1:
            e = i - c, o = r + c;
            break;

          case 2:
            i = e + c, r = o - c;
            break;

          case 3:
            e = i - c, r = o - c;
        }
      }

      this._root && this._root.length && (this._root = f);
    }
    return this._x0 = e, this._y0 = r, this._x1 = i, this._y1 = o, this;
  }, rc.data = function () {
    var t = [];
    return this.visit(function (n) {
      if (!n.length) do {
        t.push(n.data);
      } while (n = n.next);
    }), t;
  }, rc.extent = function (t) {
    return arguments.length ? this.cover(+t[0][0], +t[0][1]).cover(+t[1][0], +t[1][1]) : isNaN(this._x0) ? void 0 : [[this._x0, this._y0], [this._x1, this._y1]];
  }, rc.find = function (t, n, e) {
    var r,
        i,
        o,
        a,
        u,
        c,
        f,
        s = this._x0,
        l = this._y0,
        h = this._x1,
        d = this._y1,
        p = [],
        g = this._root;

    for (g && p.push(new Ku(g, s, l, h, d)), null == e ? e = 1 / 0 : (s = t - e, l = n - e, h = t + e, d = n + e, e *= e); c = p.pop();) {
      if (!(!(g = c.node) || (i = c.x0) > h || (o = c.y0) > d || (a = c.x1) < s || (u = c.y1) < l)) if (g.length) {
        var y = (i + a) / 2,
            v = (o + u) / 2;
        p.push(new Ku(g[3], y, v, a, u), new Ku(g[2], i, v, y, u), new Ku(g[1], y, o, a, v), new Ku(g[0], i, o, y, v)), (f = (n >= v) << 1 | t >= y) && (c = p[p.length - 1], p[p.length - 1] = p[p.length - 1 - f], p[p.length - 1 - f] = c);
      } else {
        var _ = t - +this._x.call(null, g.data),
            b = n - +this._y.call(null, g.data),
            m = _ * _ + b * b;

        if (m < e) {
          var x = Math.sqrt(e = m);
          s = t - x, l = n - x, h = t + x, d = n + x, r = g.data;
        }
      }
    }

    return r;
  }, rc.remove = function (t) {
    if (isNaN(o = +this._x.call(null, t)) || isNaN(a = +this._y.call(null, t))) return this;
    var n,
        e,
        r,
        i,
        o,
        a,
        u,
        c,
        f,
        s,
        l,
        h,
        d = this._root,
        p = this._x0,
        g = this._y0,
        y = this._x1,
        v = this._y1;
    if (!d) return this;
    if (d.length) for (;;) {
      if ((f = o >= (u = (p + y) / 2)) ? p = u : y = u, (s = a >= (c = (g + v) / 2)) ? g = c : v = c, n = d, !(d = d[l = s << 1 | f])) return this;
      if (!d.length) break;
      (n[l + 1 & 3] || n[l + 2 & 3] || n[l + 3 & 3]) && (e = n, h = l);
    }

    for (; d.data !== t;) {
      if (r = d, !(d = d.next)) return this;
    }

    return (i = d.next) && delete d.next, r ? (i ? r.next = i : delete r.next, this) : n ? (i ? n[l] = i : delete n[l], (d = n[0] || n[1] || n[2] || n[3]) && d === (n[3] || n[2] || n[1] || n[0]) && !d.length && (e ? e[h] = d : this._root = d), this) : (this._root = i, this);
  }, rc.removeAll = function (t) {
    for (var n = 0, e = t.length; n < e; ++n) {
      this.remove(t[n]);
    }

    return this;
  }, rc.root = function () {
    return this._root;
  }, rc.size = function () {
    var t = 0;
    return this.visit(function (n) {
      if (!n.length) do {
        ++t;
      } while (n = n.next);
    }), t;
  }, rc.visit = function (t) {
    var n,
        e,
        r,
        i,
        o,
        a,
        u = [],
        c = this._root;

    for (c && u.push(new Ku(c, this._x0, this._y0, this._x1, this._y1)); n = u.pop();) {
      if (!t(c = n.node, r = n.x0, i = n.y0, o = n.x1, a = n.y1) && c.length) {
        var f = (r + o) / 2,
            s = (i + a) / 2;
        (e = c[3]) && u.push(new Ku(e, f, s, o, a)), (e = c[2]) && u.push(new Ku(e, r, s, f, a)), (e = c[1]) && u.push(new Ku(e, f, i, o, s)), (e = c[0]) && u.push(new Ku(e, r, i, f, s));
      }
    }

    return this;
  }, rc.visitAfter = function (t) {
    var n,
        e = [],
        r = [];

    for (this._root && e.push(new Ku(this._root, this._x0, this._y0, this._x1, this._y1)); n = e.pop();) {
      var i = n.node;

      if (i.length) {
        var o,
            a = n.x0,
            u = n.y0,
            c = n.x1,
            f = n.y1,
            s = (a + c) / 2,
            l = (u + f) / 2;
        (o = i[0]) && e.push(new Ku(o, a, u, s, l)), (o = i[1]) && e.push(new Ku(o, s, u, c, l)), (o = i[2]) && e.push(new Ku(o, a, l, s, f)), (o = i[3]) && e.push(new Ku(o, s, l, c, f));
      }

      r.push(n);
    }

    for (; n = r.pop();) {
      t(n.node, n.x0, n.y0, n.x1, n.y1);
    }

    return this;
  }, rc.x = function (t) {
    return arguments.length ? (this._x = t, this) : this._x;
  }, rc.y = function (t) {
    return arguments.length ? (this._y = t, this) : this._y;
  };
  var sc = 4294967296;

  function lc(t) {
    return t.x;
  }

  function hc(t) {
    return t.y;
  }

  var dc = Math.PI * (3 - Math.sqrt(5));

  function pc(t, n) {
    if ((e = (t = n ? t.toExponential(n - 1) : t.toExponential()).indexOf("e")) < 0) return null;
    var e,
        r = t.slice(0, e);
    return [r.length > 1 ? r[0] + r.slice(2) : r, +t.slice(e + 1)];
  }

  function gc(t) {
    return (t = pc(Math.abs(t))) ? t[1] : NaN;
  }

  var yc,
      vc = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;

  function _c(t) {
    if (!(n = vc.exec(t))) throw new Error("invalid format: " + t);
    var n;
    return new bc({
      fill: n[1],
      align: n[2],
      sign: n[3],
      symbol: n[4],
      zero: n[5],
      width: n[6],
      comma: n[7],
      precision: n[8] && n[8].slice(1),
      trim: n[9],
      type: n[10]
    });
  }

  function bc(t) {
    this.fill = void 0 === t.fill ? " " : t.fill + "", this.align = void 0 === t.align ? ">" : t.align + "", this.sign = void 0 === t.sign ? "-" : t.sign + "", this.symbol = void 0 === t.symbol ? "" : t.symbol + "", this.zero = !!t.zero, this.width = void 0 === t.width ? void 0 : +t.width, this.comma = !!t.comma, this.precision = void 0 === t.precision ? void 0 : +t.precision, this.trim = !!t.trim, this.type = void 0 === t.type ? "" : t.type + "";
  }

  function mc(t, n) {
    var e = pc(t, n);
    if (!e) return t + "";
    var r = e[0],
        i = e[1];
    return i < 0 ? "0." + new Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + new Array(i - r.length + 2).join("0");
  }

  _c.prototype = bc.prototype, bc.prototype.toString = function () {
    return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (void 0 === this.width ? "" : Math.max(1, 0 | this.width)) + (this.comma ? "," : "") + (void 0 === this.precision ? "" : "." + Math.max(0, 0 | this.precision)) + (this.trim ? "~" : "") + this.type;
  };
  var xc = {
    "%": function _(t, n) {
      return (100 * t).toFixed(n);
    },
    b: function b(t) {
      return Math.round(t).toString(2);
    },
    c: function c(t) {
      return t + "";
    },
    d: function d(t) {
      return Math.abs(t = Math.round(t)) >= 1e21 ? t.toLocaleString("en").replace(/,/g, "") : t.toString(10);
    },
    e: function e(t, n) {
      return t.toExponential(n);
    },
    f: function f(t, n) {
      return t.toFixed(n);
    },
    g: function g(t, n) {
      return t.toPrecision(n);
    },
    o: function o(t) {
      return Math.round(t).toString(8);
    },
    p: function p(t, n) {
      return mc(100 * t, n);
    },
    r: mc,
    s: function s(t, n) {
      var e = pc(t, n);
      if (!e) return t + "";
      var r = e[0],
          i = e[1],
          o = i - (yc = 3 * Math.max(-8, Math.min(8, Math.floor(i / 3)))) + 1,
          a = r.length;
      return o === a ? r : o > a ? r + new Array(o - a + 1).join("0") : o > 0 ? r.slice(0, o) + "." + r.slice(o) : "0." + new Array(1 - o).join("0") + pc(t, Math.max(0, n + o - 1))[0];
    },
    X: function X(t) {
      return Math.round(t).toString(16).toUpperCase();
    },
    x: function x(t) {
      return Math.round(t).toString(16);
    }
  };

  function wc(t) {
    return t;
  }

  var Mc,
      Ac = Array.prototype.map,
      Tc = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];

  function Sc(t) {
    var n,
        e,
        r = void 0 === t.grouping || void 0 === t.thousands ? wc : (n = Ac.call(t.grouping, Number), e = t.thousands + "", function (t, r) {
      for (var i = t.length, o = [], a = 0, u = n[0], c = 0; i > 0 && u > 0 && (c + u + 1 > r && (u = Math.max(1, r - c)), o.push(t.substring(i -= u, i + u)), !((c += u + 1) > r));) {
        u = n[a = (a + 1) % n.length];
      }

      return o.reverse().join(e);
    }),
        i = void 0 === t.currency ? "" : t.currency[0] + "",
        o = void 0 === t.currency ? "" : t.currency[1] + "",
        a = void 0 === t.decimal ? "." : t.decimal + "",
        u = void 0 === t.numerals ? wc : function (t) {
      return function (n) {
        return n.replace(/[0-9]/g, function (n) {
          return t[+n];
        });
      };
    }(Ac.call(t.numerals, String)),
        c = void 0 === t.percent ? "%" : t.percent + "",
        f = void 0 === t.minus ? "−" : t.minus + "",
        s = void 0 === t.nan ? "NaN" : t.nan + "";

    function l(t) {
      var n = (t = _c(t)).fill,
          e = t.align,
          l = t.sign,
          h = t.symbol,
          d = t.zero,
          p = t.width,
          g = t.comma,
          y = t.precision,
          v = t.trim,
          _ = t.type;

      "n" === _ ? (g = !0, _ = "g") : xc[_] || (void 0 === y && (y = 12), v = !0, _ = "g"), (d || "0" === n && "=" === e) && (d = !0, n = "0", e = "=");
      var b = "$" === h ? i : "#" === h && /[boxX]/.test(_) ? "0" + _.toLowerCase() : "",
          m = "$" === h ? o : /[%p]/.test(_) ? c : "",
          x = xc[_],
          w = /[defgprs%]/.test(_);

      function M(t) {
        var i,
            o,
            c,
            h = b,
            M = m;
        if ("c" === _) M = x(t) + M, t = "";else {
          var A = (t = +t) < 0 || 1 / t < 0;
          if (t = isNaN(t) ? s : x(Math.abs(t), y), v && (t = function (t) {
            t: for (var n, e = t.length, r = 1, i = -1; r < e; ++r) {
              switch (t[r]) {
                case ".":
                  i = n = r;
                  break;

                case "0":
                  0 === i && (i = r), n = r;
                  break;

                default:
                  if (!+t[r]) break t;
                  i > 0 && (i = 0);
              }
            }

            return i > 0 ? t.slice(0, i) + t.slice(n + 1) : t;
          }(t)), A && 0 == +t && "+" !== l && (A = !1), h = (A ? "(" === l ? l : f : "-" === l || "(" === l ? "" : l) + h, M = ("s" === _ ? Tc[8 + yc / 3] : "") + M + (A && "(" === l ? ")" : ""), w) for (i = -1, o = t.length; ++i < o;) {
            if (48 > (c = t.charCodeAt(i)) || c > 57) {
              M = (46 === c ? a + t.slice(i + 1) : t.slice(i)) + M, t = t.slice(0, i);
              break;
            }
          }
        }
        g && !d && (t = r(t, 1 / 0));
        var T = h.length + t.length + M.length,
            S = T < p ? new Array(p - T + 1).join(n) : "";

        switch (g && d && (t = r(S + t, S.length ? p - M.length : 1 / 0), S = ""), e) {
          case "<":
            t = h + t + M + S;
            break;

          case "=":
            t = h + S + t + M;
            break;

          case "^":
            t = S.slice(0, T = S.length >> 1) + h + t + M + S.slice(T);
            break;

          default:
            t = S + h + t + M;
        }

        return u(t);
      }

      return y = void 0 === y ? 6 : /[gprs]/.test(_) ? Math.max(1, Math.min(21, y)) : Math.max(0, Math.min(20, y)), M.toString = function () {
        return t + "";
      }, M;
    }

    return {
      format: l,
      formatPrefix: function formatPrefix(t, n) {
        var e = l(((t = _c(t)).type = "f", t)),
            r = 3 * Math.max(-8, Math.min(8, Math.floor(gc(n) / 3))),
            i = Math.pow(10, -r),
            o = Tc[8 + r / 3];
        return function (t) {
          return e(i * t) + o;
        };
      }
    };
  }

  function Ec(n) {
    return Mc = Sc(n), t.format = Mc.format, t.formatPrefix = Mc.formatPrefix, Mc;
  }

  function kc(t) {
    return Math.max(0, -gc(Math.abs(t)));
  }

  function Nc(t, n) {
    return Math.max(0, 3 * Math.max(-8, Math.min(8, Math.floor(gc(n) / 3))) - gc(Math.abs(t)));
  }

  function Cc(t, n) {
    return t = Math.abs(t), n = Math.abs(n) - t, Math.max(0, gc(n) - gc(t)) + 1;
  }

  t.format = void 0, t.formatPrefix = void 0, Ec({
    thousands: ",",
    grouping: [3],
    currency: ["$", ""]
  });

  var Pc = 1e-6,
      zc = 1e-12,
      Dc = Math.PI,
      qc = Dc / 2,
      Rc = Dc / 4,
      Fc = 2 * Dc,
      Oc = 180 / Dc,
      Ic = Dc / 180,
      Uc = Math.abs,
      Bc = Math.atan,
      Yc = Math.atan2,
      Lc = Math.cos,
      jc = Math.ceil,
      Hc = Math.exp,
      Xc = Math.hypot,
      Gc = Math.log,
      Vc = Math.pow,
      $c = Math.sin,
      Wc = Math.sign || function (t) {
    return t > 0 ? 1 : t < 0 ? -1 : 0;
  },
      Zc = Math.sqrt,
      Kc = Math.tan;

  function Qc(t) {
    return t > 1 ? 0 : t < -1 ? Dc : Math.acos(t);
  }

  function Jc(t) {
    return t > 1 ? qc : t < -1 ? -qc : Math.asin(t);
  }

  function tf(t) {
    return (t = $c(t / 2)) * t;
  }

  function nf() {}

  function ef(t, n) {
    t && of.hasOwnProperty(t.type) && of[t.type](t, n);
  }

  var rf = {
    Feature: function Feature(t, n) {
      ef(t.geometry, n);
    },
    FeatureCollection: function FeatureCollection(t, n) {
      for (var e = t.features, r = -1, i = e.length; ++r < i;) {
        ef(e[r].geometry, n);
      }
    }
  },
      of = {
    Sphere: function Sphere(t, n) {
      n.sphere();
    },
    Point: function Point(t, n) {
      t = t.coordinates, n.point(t[0], t[1], t[2]);
    },
    MultiPoint: function MultiPoint(t, n) {
      for (var e = t.coordinates, r = -1, i = e.length; ++r < i;) {
        t = e[r], n.point(t[0], t[1], t[2]);
      }
    },
    LineString: function LineString(t, n) {
      af(t.coordinates, n, 0);
    },
    MultiLineString: function MultiLineString(t, n) {
      for (var e = t.coordinates, r = -1, i = e.length; ++r < i;) {
        af(e[r], n, 0);
      }
    },
    Polygon: function Polygon(t, n) {
      uf(t.coordinates, n);
    },
    MultiPolygon: function MultiPolygon(t, n) {
      for (var e = t.coordinates, r = -1, i = e.length; ++r < i;) {
        uf(e[r], n);
      }
    },
    GeometryCollection: function GeometryCollection(t, n) {
      for (var e = t.geometries, r = -1, i = e.length; ++r < i;) {
        ef(e[r], n);
      }
    }
  };

  function af(t, n, e) {
    var r,
        i = -1,
        o = t.length - e;

    for (n.lineStart(); ++i < o;) {
      r = t[i], n.point(r[0], r[1], r[2]);
    }

    n.lineEnd();
  }

  function uf(t, n) {
    var e = -1,
        r = t.length;

    for (n.polygonStart(); ++e < r;) {
      af(t[e], n, 1);
    }

    n.polygonEnd();
  }

  function cf(t, n) {
    t && rf.hasOwnProperty(t.type) ? rf[t.type](t, n) : ef(t, n);
  }

  var ff,
      sf,
      lf,
      hf,
      df,
      pf,
      gf,
      yf,
      vf,
      _f,
      bf,
      mf,
      xf,
      wf,
      Mf,
      Af,
      Tf = new g(),
      Sf = new g(),
      Ef = {
    point: nf,
    lineStart: nf,
    lineEnd: nf,
    polygonStart: function polygonStart() {
      Tf = new g(), Ef.lineStart = kf, Ef.lineEnd = Nf;
    },
    polygonEnd: function polygonEnd() {
      var t = +Tf;
      Sf.add(t < 0 ? Fc + t : t), this.lineStart = this.lineEnd = this.point = nf;
    },
    sphere: function sphere() {
      Sf.add(Fc);
    }
  };

  function kf() {
    Ef.point = Cf;
  }

  function Nf() {
    Pf(ff, sf);
  }

  function Cf(t, n) {
    Ef.point = Pf, ff = t, sf = n, lf = t *= Ic, hf = Lc(n = (n *= Ic) / 2 + Rc), df = $c(n);
  }

  function Pf(t, n) {
    var e = (t *= Ic) - lf,
        r = e >= 0 ? 1 : -1,
        i = r * e,
        o = Lc(n = (n *= Ic) / 2 + Rc),
        a = $c(n),
        u = df * a,
        c = hf * o + u * Lc(i),
        f = u * r * $c(i);
    Tf.add(Yc(f, c)), lf = t, hf = o, df = a;
  }

  function zf(t) {
    return [Yc(t[1], t[0]), Jc(t[2])];
  }

  function Df(t) {
    var n = t[0],
        e = t[1],
        r = Lc(e);
    return [r * Lc(n), r * $c(n), $c(e)];
  }

  function qf(t, n) {
    return t[0] * n[0] + t[1] * n[1] + t[2] * n[2];
  }

  function Rf(t, n) {
    return [t[1] * n[2] - t[2] * n[1], t[2] * n[0] - t[0] * n[2], t[0] * n[1] - t[1] * n[0]];
  }

  function Ff(t, n) {
    t[0] += n[0], t[1] += n[1], t[2] += n[2];
  }

  function Of(t, n) {
    return [t[0] * n, t[1] * n, t[2] * n];
  }

  function If(t) {
    var n = Zc(t[0] * t[0] + t[1] * t[1] + t[2] * t[2]);
    t[0] /= n, t[1] /= n, t[2] /= n;
  }

  var Uf,
      Bf,
      Yf,
      Lf,
      jf,
      Hf,
      Xf,
      Gf,
      Vf,
      $f,
      Wf,
      Zf,
      Kf,
      Qf,
      Jf,
      ts,
      ns = {
    point: es,
    lineStart: is,
    lineEnd: os,
    polygonStart: function polygonStart() {
      ns.point = as, ns.lineStart = us, ns.lineEnd = cs, wf = new g(), Ef.polygonStart();
    },
    polygonEnd: function polygonEnd() {
      Ef.polygonEnd(), ns.point = es, ns.lineStart = is, ns.lineEnd = os, Tf < 0 ? (pf = -(yf = 180), gf = -(vf = 90)) : wf > Pc ? vf = 90 : wf < -1e-6 && (gf = -90), Af[0] = pf, Af[1] = yf;
    },
    sphere: function sphere() {
      pf = -(yf = 180), gf = -(vf = 90);
    }
  };

  function es(t, n) {
    Mf.push(Af = [pf = t, yf = t]), n < gf && (gf = n), n > vf && (vf = n);
  }

  function rs(t, n) {
    var e = Df([t * Ic, n * Ic]);

    if (xf) {
      var r = Rf(xf, e),
          i = Rf([r[1], -r[0], 0], r);
      If(i), i = zf(i);
      var o,
          a = t - _f,
          u = a > 0 ? 1 : -1,
          c = i[0] * Oc * u,
          f = Uc(a) > 180;
      f ^ (u * _f < c && c < u * t) ? (o = i[1] * Oc) > vf && (vf = o) : f ^ (u * _f < (c = (c + 360) % 360 - 180) && c < u * t) ? (o = -i[1] * Oc) < gf && (gf = o) : (n < gf && (gf = n), n > vf && (vf = n)), f ? t < _f ? fs(pf, t) > fs(pf, yf) && (yf = t) : fs(t, yf) > fs(pf, yf) && (pf = t) : yf >= pf ? (t < pf && (pf = t), t > yf && (yf = t)) : t > _f ? fs(pf, t) > fs(pf, yf) && (yf = t) : fs(t, yf) > fs(pf, yf) && (pf = t);
    } else Mf.push(Af = [pf = t, yf = t]);

    n < gf && (gf = n), n > vf && (vf = n), xf = e, _f = t;
  }

  function is() {
    ns.point = rs;
  }

  function os() {
    Af[0] = pf, Af[1] = yf, ns.point = es, xf = null;
  }

  function as(t, n) {
    if (xf) {
      var e = t - _f;
      wf.add(Uc(e) > 180 ? e + (e > 0 ? 360 : -360) : e);
    } else bf = t, mf = n;

    Ef.point(t, n), rs(t, n);
  }

  function us() {
    Ef.lineStart();
  }

  function cs() {
    as(bf, mf), Ef.lineEnd(), Uc(wf) > Pc && (pf = -(yf = 180)), Af[0] = pf, Af[1] = yf, xf = null;
  }

  function fs(t, n) {
    return (n -= t) < 0 ? n + 360 : n;
  }

  function ss(t, n) {
    return t[0] - n[0];
  }

  function ls(t, n) {
    return t[0] <= t[1] ? t[0] <= n && n <= t[1] : n < t[0] || t[1] < n;
  }

  var hs = {
    sphere: nf,
    point: ds,
    lineStart: gs,
    lineEnd: _s,
    polygonStart: function polygonStart() {
      hs.lineStart = bs, hs.lineEnd = ms;
    },
    polygonEnd: function polygonEnd() {
      hs.lineStart = gs, hs.lineEnd = _s;
    }
  };

  function ds(t, n) {
    t *= Ic;
    var e = Lc(n *= Ic);
    ps(e * Lc(t), e * $c(t), $c(n));
  }

  function ps(t, n, e) {
    ++Uf, Yf += (t - Yf) / Uf, Lf += (n - Lf) / Uf, jf += (e - jf) / Uf;
  }

  function gs() {
    hs.point = ys;
  }

  function ys(t, n) {
    t *= Ic;
    var e = Lc(n *= Ic);
    Qf = e * Lc(t), Jf = e * $c(t), ts = $c(n), hs.point = vs, ps(Qf, Jf, ts);
  }

  function vs(t, n) {
    t *= Ic;
    var e = Lc(n *= Ic),
        r = e * Lc(t),
        i = e * $c(t),
        o = $c(n),
        a = Yc(Zc((a = Jf * o - ts * i) * a + (a = ts * r - Qf * o) * a + (a = Qf * i - Jf * r) * a), Qf * r + Jf * i + ts * o);
    Bf += a, Hf += a * (Qf + (Qf = r)), Xf += a * (Jf + (Jf = i)), Gf += a * (ts + (ts = o)), ps(Qf, Jf, ts);
  }

  function _s() {
    hs.point = ds;
  }

  function bs() {
    hs.point = xs;
  }

  function ms() {
    ws(Zf, Kf), hs.point = ds;
  }

  function xs(t, n) {
    Zf = t, Kf = n, t *= Ic, n *= Ic, hs.point = ws;
    var e = Lc(n);
    Qf = e * Lc(t), Jf = e * $c(t), ts = $c(n), ps(Qf, Jf, ts);
  }

  function ws(t, n) {
    t *= Ic;
    var e = Lc(n *= Ic),
        r = e * Lc(t),
        i = e * $c(t),
        o = $c(n),
        a = Jf * o - ts * i,
        u = ts * r - Qf * o,
        c = Qf * i - Jf * r,
        f = Xc(a, u, c),
        s = Jc(f),
        l = f && -s / f;
    Vf.add(l * a), $f.add(l * u), Wf.add(l * c), Bf += s, Hf += s * (Qf + (Qf = r)), Xf += s * (Jf + (Jf = i)), Gf += s * (ts + (ts = o)), ps(Qf, Jf, ts);
  }

  function Ms(t) {
    return function () {
      return t;
    };
  }

  function As(t, n) {
    function e(e, r) {
      return e = t(e, r), n(e[0], e[1]);
    }

    return t.invert && n.invert && (e.invert = function (e, r) {
      return (e = n.invert(e, r)) && t.invert(e[0], e[1]);
    }), e;
  }

  function Ts(t, n) {
    return [Uc(t) > Dc ? t + Math.round(-t / Fc) * Fc : t, n];
  }

  function Ss(t, n, e) {
    return (t %= Fc) ? n || e ? As(ks(t), Ns(n, e)) : ks(t) : n || e ? Ns(n, e) : Ts;
  }

  function Es(t) {
    return function (n, e) {
      return [(n += t) > Dc ? n - Fc : n < -Dc ? n + Fc : n, e];
    };
  }

  function ks(t) {
    var n = Es(t);
    return n.invert = Es(-t), n;
  }

  function Ns(t, n) {
    var e = Lc(t),
        r = $c(t),
        i = Lc(n),
        o = $c(n);

    function a(t, n) {
      var a = Lc(n),
          u = Lc(t) * a,
          c = $c(t) * a,
          f = $c(n),
          s = f * e + u * r;
      return [Yc(c * i - s * o, u * e - f * r), Jc(s * i + c * o)];
    }

    return a.invert = function (t, n) {
      var a = Lc(n),
          u = Lc(t) * a,
          c = $c(t) * a,
          f = $c(n),
          s = f * i - c * o;
      return [Yc(c * i + f * o, u * e + s * r), Jc(s * e - u * r)];
    }, a;
  }

  function Cs(t) {
    function n(n) {
      return (n = t(n[0] * Ic, n[1] * Ic))[0] *= Oc, n[1] *= Oc, n;
    }

    return t = Ss(t[0] * Ic, t[1] * Ic, t.length > 2 ? t[2] * Ic : 0), n.invert = function (n) {
      return (n = t.invert(n[0] * Ic, n[1] * Ic))[0] *= Oc, n[1] *= Oc, n;
    }, n;
  }

  function Ps(t, n, e, r, i, o) {
    if (e) {
      var a = Lc(n),
          u = $c(n),
          c = r * e;
      null == i ? (i = n + r * Fc, o = n - c / 2) : (i = zs(a, i), o = zs(a, o), (r > 0 ? i < o : i > o) && (i += r * Fc));

      for (var f, s = i; r > 0 ? s > o : s < o; s -= c) {
        f = zf([a, -u * Lc(s), -u * $c(s)]), t.point(f[0], f[1]);
      }
    }
  }

  function zs(t, n) {
    (n = Df(n))[0] -= t, If(n);
    var e = Qc(-n[1]);
    return ((-n[2] < 0 ? -e : e) + Fc - Pc) % Fc;
  }

  function Ds() {
    var t,
        n = [];
    return {
      point: function point(n, e, r) {
        t.push([n, e, r]);
      },
      lineStart: function lineStart() {
        n.push(t = []);
      },
      lineEnd: nf,
      rejoin: function rejoin() {
        n.length > 1 && n.push(n.pop().concat(n.shift()));
      },
      result: function result() {
        var e = n;
        return n = [], t = null, e;
      }
    };
  }

  function qs(t, n) {
    return Uc(t[0] - n[0]) < Pc && Uc(t[1] - n[1]) < Pc;
  }

  function Rs(t, n, e, r) {
    this.x = t, this.z = n, this.o = e, this.e = r, this.v = !1, this.n = this.p = null;
  }

  function Fs(t, n, e, r, i) {
    var o,
        a,
        u = [],
        c = [];

    if (t.forEach(function (t) {
      if (!((n = t.length - 1) <= 0)) {
        var n,
            e,
            r = t[0],
            a = t[n];

        if (qs(r, a)) {
          if (!r[2] && !a[2]) {
            for (i.lineStart(), o = 0; o < n; ++o) {
              i.point((r = t[o])[0], r[1]);
            }

            return void i.lineEnd();
          }

          a[0] += 2e-6;
        }

        u.push(e = new Rs(r, t, null, !0)), c.push(e.o = new Rs(r, null, e, !1)), u.push(e = new Rs(a, t, null, !1)), c.push(e.o = new Rs(a, null, e, !0));
      }
    }), u.length) {
      for (c.sort(n), Os(u), Os(c), o = 0, a = c.length; o < a; ++o) {
        c[o].e = e = !e;
      }

      for (var f, s, l = u[0];;) {
        for (var h = l, d = !0; h.v;) {
          if ((h = h.n) === l) return;
        }

        f = h.z, i.lineStart();

        do {
          if (h.v = h.o.v = !0, h.e) {
            if (d) for (o = 0, a = f.length; o < a; ++o) {
              i.point((s = f[o])[0], s[1]);
            } else r(h.x, h.n.x, 1, i);
            h = h.n;
          } else {
            if (d) for (f = h.p.z, o = f.length - 1; o >= 0; --o) {
              i.point((s = f[o])[0], s[1]);
            } else r(h.x, h.p.x, -1, i);
            h = h.p;
          }

          f = (h = h.o).z, d = !d;
        } while (!h.v);

        i.lineEnd();
      }
    }
  }

  function Os(t) {
    if (n = t.length) {
      for (var n, e, r = 0, i = t[0]; ++r < n;) {
        i.n = e = t[r], e.p = i, i = e;
      }

      i.n = e = t[0], e.p = i;
    }
  }

  function Is(t) {
    return Uc(t[0]) <= Dc ? t[0] : Wc(t[0]) * ((Uc(t[0]) + Dc) % Fc - Dc);
  }

  function Us(t, n) {
    var e = Is(n),
        r = n[1],
        i = $c(r),
        o = [$c(e), -Lc(e), 0],
        a = 0,
        u = 0,
        c = new g();
    1 === i ? r = qc + Pc : -1 === i && (r = -qc - Pc);

    for (var f = 0, s = t.length; f < s; ++f) {
      if (h = (l = t[f]).length) for (var l, h, d = l[h - 1], p = Is(d), y = d[1] / 2 + Rc, v = $c(y), _ = Lc(y), b = 0; b < h; ++b, p = x, v = M, _ = A, d = m) {
        var m = l[b],
            x = Is(m),
            w = m[1] / 2 + Rc,
            M = $c(w),
            A = Lc(w),
            T = x - p,
            S = T >= 0 ? 1 : -1,
            E = S * T,
            k = E > Dc,
            N = v * M;

        if (c.add(Yc(N * S * $c(E), _ * A + N * Lc(E))), a += k ? T + S * Fc : T, k ^ p >= e ^ x >= e) {
          var C = Rf(Df(d), Df(m));
          If(C);
          var P = Rf(o, C);
          If(P);
          var z = (k ^ T >= 0 ? -1 : 1) * Jc(P[2]);
          (r > z || r === z && (C[0] || C[1])) && (u += k ^ T >= 0 ? 1 : -1);
        }
      }
    }

    return (a < -1e-6 || a < Pc && c < -1e-12) ^ 1 & u;
  }

  function Bs(t, n, e, r) {
    return function (i) {
      var o,
          a,
          u,
          c = n(i),
          f = Ds(),
          s = n(f),
          l = !1,
          h = {
        point: d,
        lineStart: g,
        lineEnd: y,
        polygonStart: function polygonStart() {
          h.point = v, h.lineStart = _, h.lineEnd = b, a = [], o = [];
        },
        polygonEnd: function polygonEnd() {
          h.point = d, h.lineStart = g, h.lineEnd = y, a = Z(a);
          var t = Us(o, r);
          a.length ? (l || (i.polygonStart(), l = !0), Fs(a, Ls, t, e, i)) : t && (l || (i.polygonStart(), l = !0), i.lineStart(), e(null, null, 1, i), i.lineEnd()), l && (i.polygonEnd(), l = !1), a = o = null;
        },
        sphere: function sphere() {
          i.polygonStart(), i.lineStart(), e(null, null, 1, i), i.lineEnd(), i.polygonEnd();
        }
      };

      function d(n, e) {
        t(n, e) && i.point(n, e);
      }

      function p(t, n) {
        c.point(t, n);
      }

      function g() {
        h.point = p, c.lineStart();
      }

      function y() {
        h.point = d, c.lineEnd();
      }

      function v(t, n) {
        u.push([t, n]), s.point(t, n);
      }

      function _() {
        s.lineStart(), u = [];
      }

      function b() {
        v(u[0][0], u[0][1]), s.lineEnd();
        var t,
            n,
            e,
            r,
            c = s.clean(),
            h = f.result(),
            d = h.length;
        if (u.pop(), o.push(u), u = null, d) if (1 & c) {
          if ((n = (e = h[0]).length - 1) > 0) {
            for (l || (i.polygonStart(), l = !0), i.lineStart(), t = 0; t < n; ++t) {
              i.point((r = e[t])[0], r[1]);
            }

            i.lineEnd();
          }
        } else d > 1 && 2 & c && h.push(h.pop().concat(h.shift())), a.push(h.filter(Ys));
      }

      return h;
    };
  }

  function Ys(t) {
    return t.length > 1;
  }

  function Ls(t, n) {
    return ((t = t.x)[0] < 0 ? t[1] - qc - Pc : qc - t[1]) - ((n = n.x)[0] < 0 ? n[1] - qc - Pc : qc - n[1]);
  }

  Ts.invert = Ts;
  var js = Bs(function () {
    return !0;
  }, function (t) {
    var n,
        e = NaN,
        r = NaN,
        i = NaN;
    return {
      lineStart: function lineStart() {
        t.lineStart(), n = 1;
      },
      point: function point(o, a) {
        var u = o > 0 ? Dc : -Dc,
            c = Uc(o - e);
        Uc(c - Dc) < Pc ? (t.point(e, r = (r + a) / 2 > 0 ? qc : -qc), t.point(i, r), t.lineEnd(), t.lineStart(), t.point(u, r), t.point(o, r), n = 0) : i !== u && c >= Dc && (Uc(e - i) < Pc && (e -= i * Pc), Uc(o - u) < Pc && (o -= u * Pc), r = function (t, n, e, r) {
          var i,
              o,
              a = $c(t - e);
          return Uc(a) > Pc ? Bc(($c(n) * (o = Lc(r)) * $c(e) - $c(r) * (i = Lc(n)) * $c(t)) / (i * o * a)) : (n + r) / 2;
        }(e, r, o, a), t.point(i, r), t.lineEnd(), t.lineStart(), t.point(u, r), n = 0), t.point(e = o, r = a), i = u;
      },
      lineEnd: function lineEnd() {
        t.lineEnd(), e = r = NaN;
      },
      clean: function clean() {
        return 2 - n;
      }
    };
  }, function (t, n, e, r) {
    var i;
    if (null == t) i = e * qc, r.point(-Dc, i), r.point(0, i), r.point(Dc, i), r.point(Dc, 0), r.point(Dc, -i), r.point(0, -i), r.point(-Dc, -i), r.point(-Dc, 0), r.point(-Dc, i);else if (Uc(t[0] - n[0]) > Pc) {
      var o = t[0] < n[0] ? Dc : -Dc;
      i = e * o / 2, r.point(-o, i), r.point(0, i), r.point(o, i);
    } else r.point(n[0], n[1]);
  }, [-Dc, -qc]);

  function Hs(t) {
    var n = Lc(t),
        e = 6 * Ic,
        r = n > 0,
        i = Uc(n) > Pc;

    function o(t, e) {
      return Lc(t) * Lc(e) > n;
    }

    function a(t, e, r) {
      var i = [1, 0, 0],
          o = Rf(Df(t), Df(e)),
          a = qf(o, o),
          u = o[0],
          c = a - u * u;
      if (!c) return !r && t;
      var f = n * a / c,
          s = -n * u / c,
          l = Rf(i, o),
          h = Of(i, f);
      Ff(h, Of(o, s));
      var d = l,
          p = qf(h, d),
          g = qf(d, d),
          y = p * p - g * (qf(h, h) - 1);

      if (!(y < 0)) {
        var v = Zc(y),
            _ = Of(d, (-p - v) / g);

        if (Ff(_, h), _ = zf(_), !r) return _;
        var b,
            m = t[0],
            x = e[0],
            w = t[1],
            M = e[1];
        x < m && (b = m, m = x, x = b);
        var A = x - m,
            T = Uc(A - Dc) < Pc;

        if (!T && M < w && (b = w, w = M, M = b), T || A < Pc ? T ? w + M > 0 ^ _[1] < (Uc(_[0] - m) < Pc ? w : M) : w <= _[1] && _[1] <= M : A > Dc ^ (m <= _[0] && _[0] <= x)) {
          var S = Of(d, (-p + v) / g);
          return Ff(S, h), [_, zf(S)];
        }
      }
    }

    function u(n, e) {
      var i = r ? t : Dc - t,
          o = 0;
      return n < -i ? o |= 1 : n > i && (o |= 2), e < -i ? o |= 4 : e > i && (o |= 8), o;
    }

    return Bs(o, function (t) {
      var n, e, c, f, s;
      return {
        lineStart: function lineStart() {
          f = c = !1, s = 1;
        },
        point: function point(l, h) {
          var d,
              p = [l, h],
              g = o(l, h),
              y = r ? g ? 0 : u(l, h) : g ? u(l + (l < 0 ? Dc : -Dc), h) : 0;
          if (!n && (f = c = g) && t.lineStart(), g !== c && (!(d = a(n, p)) || qs(n, d) || qs(p, d)) && (p[2] = 1), g !== c) s = 0, g ? (t.lineStart(), d = a(p, n), t.point(d[0], d[1])) : (d = a(n, p), t.point(d[0], d[1], 2), t.lineEnd()), n = d;else if (i && n && r ^ g) {
            var v;
            y & e || !(v = a(p, n, !0)) || (s = 0, r ? (t.lineStart(), t.point(v[0][0], v[0][1]), t.point(v[1][0], v[1][1]), t.lineEnd()) : (t.point(v[1][0], v[1][1]), t.lineEnd(), t.lineStart(), t.point(v[0][0], v[0][1], 3)));
          }
          !g || n && qs(n, p) || t.point(p[0], p[1]), n = p, c = g, e = y;
        },
        lineEnd: function lineEnd() {
          c && t.lineEnd(), n = null;
        },
        clean: function clean() {
          return s | (f && c) << 1;
        }
      };
    }, function (n, r, i, o) {
      Ps(o, t, e, i, n, r);
    }, r ? [0, -t] : [-Dc, t - Dc]);
  }

  var Xs,
      Gs,
      Vs,
      $s,
      Ws = 1e9,
      Zs = -Ws;

  function Ks(t, n, e, r) {
    function i(i, o) {
      return t <= i && i <= e && n <= o && o <= r;
    }

    function o(i, o, u, f) {
      var s = 0,
          l = 0;
      if (null == i || (s = a(i, u)) !== (l = a(o, u)) || c(i, o) < 0 ^ u > 0) do {
        f.point(0 === s || 3 === s ? t : e, s > 1 ? r : n);
      } while ((s = (s + u + 4) % 4) !== l);else f.point(o[0], o[1]);
    }

    function a(r, i) {
      return Uc(r[0] - t) < Pc ? i > 0 ? 0 : 3 : Uc(r[0] - e) < Pc ? i > 0 ? 2 : 1 : Uc(r[1] - n) < Pc ? i > 0 ? 1 : 0 : i > 0 ? 3 : 2;
    }

    function u(t, n) {
      return c(t.x, n.x);
    }

    function c(t, n) {
      var e = a(t, 1),
          r = a(n, 1);
      return e !== r ? e - r : 0 === e ? n[1] - t[1] : 1 === e ? t[0] - n[0] : 2 === e ? t[1] - n[1] : n[0] - t[0];
    }

    return function (a) {
      var c,
          f,
          s,
          l,
          h,
          d,
          p,
          g,
          y,
          v,
          _,
          b = a,
          m = Ds(),
          x = {
        point: w,
        lineStart: function lineStart() {
          x.point = M, f && f.push(s = []);
          v = !0, y = !1, p = g = NaN;
        },
        lineEnd: function lineEnd() {
          c && (M(l, h), d && y && m.rejoin(), c.push(m.result()));
          x.point = w, y && b.lineEnd();
        },
        polygonStart: function polygonStart() {
          b = m, c = [], f = [], _ = !0;
        },
        polygonEnd: function polygonEnd() {
          var n = function () {
            for (var n = 0, e = 0, i = f.length; e < i; ++e) {
              for (var o, a, u = f[e], c = 1, s = u.length, l = u[0], h = l[0], d = l[1]; c < s; ++c) {
                o = h, a = d, h = (l = u[c])[0], d = l[1], a <= r ? d > r && (h - o) * (r - a) > (d - a) * (t - o) && ++n : d <= r && (h - o) * (r - a) < (d - a) * (t - o) && --n;
              }
            }

            return n;
          }(),
              e = _ && n,
              i = (c = Z(c)).length;

          (e || i) && (a.polygonStart(), e && (a.lineStart(), o(null, null, 1, a), a.lineEnd()), i && Fs(c, u, n, o, a), a.polygonEnd());
          b = a, c = f = s = null;
        }
      };

      function w(t, n) {
        i(t, n) && b.point(t, n);
      }

      function M(o, a) {
        var u = i(o, a);
        if (f && s.push([o, a]), v) l = o, h = a, d = u, v = !1, u && (b.lineStart(), b.point(o, a));else if (u && y) b.point(o, a);else {
          var c = [p = Math.max(Zs, Math.min(Ws, p)), g = Math.max(Zs, Math.min(Ws, g))],
              m = [o = Math.max(Zs, Math.min(Ws, o)), a = Math.max(Zs, Math.min(Ws, a))];
          !function (t, n, e, r, i, o) {
            var a,
                u = t[0],
                c = t[1],
                f = 0,
                s = 1,
                l = n[0] - u,
                h = n[1] - c;

            if (a = e - u, l || !(a > 0)) {
              if (a /= l, l < 0) {
                if (a < f) return;
                a < s && (s = a);
              } else if (l > 0) {
                if (a > s) return;
                a > f && (f = a);
              }

              if (a = i - u, l || !(a < 0)) {
                if (a /= l, l < 0) {
                  if (a > s) return;
                  a > f && (f = a);
                } else if (l > 0) {
                  if (a < f) return;
                  a < s && (s = a);
                }

                if (a = r - c, h || !(a > 0)) {
                  if (a /= h, h < 0) {
                    if (a < f) return;
                    a < s && (s = a);
                  } else if (h > 0) {
                    if (a > s) return;
                    a > f && (f = a);
                  }

                  if (a = o - c, h || !(a < 0)) {
                    if (a /= h, h < 0) {
                      if (a > s) return;
                      a > f && (f = a);
                    } else if (h > 0) {
                      if (a < f) return;
                      a < s && (s = a);
                    }

                    return f > 0 && (t[0] = u + f * l, t[1] = c + f * h), s < 1 && (n[0] = u + s * l, n[1] = c + s * h), !0;
                  }
                }
              }
            }
          }(c, m, t, n, e, r) ? u && (b.lineStart(), b.point(o, a), _ = !1) : (y || (b.lineStart(), b.point(c[0], c[1])), b.point(m[0], m[1]), u || b.lineEnd(), _ = !1);
        }
        p = o, g = a, y = u;
      }

      return x;
    };
  }

  var Qs = {
    sphere: nf,
    point: nf,
    lineStart: function lineStart() {
      Qs.point = tl, Qs.lineEnd = Js;
    },
    lineEnd: nf,
    polygonStart: nf,
    polygonEnd: nf
  };

  function Js() {
    Qs.point = Qs.lineEnd = nf;
  }

  function tl(t, n) {
    Gs = t *= Ic, Vs = $c(n *= Ic), $s = Lc(n), Qs.point = nl;
  }

  function nl(t, n) {
    t *= Ic;
    var e = $c(n *= Ic),
        r = Lc(n),
        i = Uc(t - Gs),
        o = Lc(i),
        a = r * $c(i),
        u = $s * e - Vs * r * o,
        c = Vs * e + $s * r * o;
    Xs.add(Yc(Zc(a * a + u * u), c)), Gs = t, Vs = e, $s = r;
  }

  function el(t) {
    return Xs = new g(), cf(t, Qs), +Xs;
  }

  var rl = [null, null],
      il = {
    type: "LineString",
    coordinates: rl
  };

  function ol(t, n) {
    return rl[0] = t, rl[1] = n, el(il);
  }

  var al = {
    Feature: function Feature(t, n) {
      return cl(t.geometry, n);
    },
    FeatureCollection: function FeatureCollection(t, n) {
      for (var e = t.features, r = -1, i = e.length; ++r < i;) {
        if (cl(e[r].geometry, n)) return !0;
      }

      return !1;
    }
  },
      ul = {
    Sphere: function Sphere() {
      return !0;
    },
    Point: function Point(t, n) {
      return fl(t.coordinates, n);
    },
    MultiPoint: function MultiPoint(t, n) {
      for (var e = t.coordinates, r = -1, i = e.length; ++r < i;) {
        if (fl(e[r], n)) return !0;
      }

      return !1;
    },
    LineString: function LineString(t, n) {
      return sl(t.coordinates, n);
    },
    MultiLineString: function MultiLineString(t, n) {
      for (var e = t.coordinates, r = -1, i = e.length; ++r < i;) {
        if (sl(e[r], n)) return !0;
      }

      return !1;
    },
    Polygon: function Polygon(t, n) {
      return ll(t.coordinates, n);
    },
    MultiPolygon: function MultiPolygon(t, n) {
      for (var e = t.coordinates, r = -1, i = e.length; ++r < i;) {
        if (ll(e[r], n)) return !0;
      }

      return !1;
    },
    GeometryCollection: function GeometryCollection(t, n) {
      for (var e = t.geometries, r = -1, i = e.length; ++r < i;) {
        if (cl(e[r], n)) return !0;
      }

      return !1;
    }
  };

  function cl(t, n) {
    return !(!t || !ul.hasOwnProperty(t.type)) && ul[t.type](t, n);
  }

  function fl(t, n) {
    return 0 === ol(t, n);
  }

  function sl(t, n) {
    for (var e, r, i, o = 0, a = t.length; o < a; o++) {
      if (0 === (r = ol(t[o], n))) return !0;
      if (o > 0 && (i = ol(t[o], t[o - 1])) > 0 && e <= i && r <= i && (e + r - i) * (1 - Math.pow((e - r) / i, 2)) < zc * i) return !0;
      e = r;
    }

    return !1;
  }

  function ll(t, n) {
    return !!Us(t.map(hl), dl(n));
  }

  function hl(t) {
    return (t = t.map(dl)).pop(), t;
  }

  function dl(t) {
    return [t[0] * Ic, t[1] * Ic];
  }

  function pl(t, n, e) {
    var r = J(t, n - Pc, e).concat(n);
    return function (t) {
      return r.map(function (n) {
        return [t, n];
      });
    };
  }

  function gl(t, n, e) {
    var r = J(t, n - Pc, e).concat(n);
    return function (t) {
      return r.map(function (n) {
        return [n, t];
      });
    };
  }

  function yl() {
    var t,
        n,
        e,
        r,
        i,
        o,
        a,
        u,
        c,
        f,
        s,
        l,
        h = 10,
        d = h,
        p = 90,
        g = 360,
        y = 2.5;

    function v() {
      return {
        type: "MultiLineString",
        coordinates: _()
      };
    }

    function _() {
      return J(jc(r / p) * p, e, p).map(s).concat(J(jc(u / g) * g, a, g).map(l)).concat(J(jc(n / h) * h, t, h).filter(function (t) {
        return Uc(t % p) > Pc;
      }).map(c)).concat(J(jc(o / d) * d, i, d).filter(function (t) {
        return Uc(t % g) > Pc;
      }).map(f));
    }

    return v.lines = function () {
      return _().map(function (t) {
        return {
          type: "LineString",
          coordinates: t
        };
      });
    }, v.outline = function () {
      return {
        type: "Polygon",
        coordinates: [s(r).concat(l(a).slice(1), s(e).reverse().slice(1), l(u).reverse().slice(1))]
      };
    }, v.extent = function (t) {
      return arguments.length ? v.extentMajor(t).extentMinor(t) : v.extentMinor();
    }, v.extentMajor = function (t) {
      return arguments.length ? (r = +t[0][0], e = +t[1][0], u = +t[0][1], a = +t[1][1], r > e && (t = r, r = e, e = t), u > a && (t = u, u = a, a = t), v.precision(y)) : [[r, u], [e, a]];
    }, v.extentMinor = function (e) {
      return arguments.length ? (n = +e[0][0], t = +e[1][0], o = +e[0][1], i = +e[1][1], n > t && (e = n, n = t, t = e), o > i && (e = o, o = i, i = e), v.precision(y)) : [[n, o], [t, i]];
    }, v.step = function (t) {
      return arguments.length ? v.stepMajor(t).stepMinor(t) : v.stepMinor();
    }, v.stepMajor = function (t) {
      return arguments.length ? (p = +t[0], g = +t[1], v) : [p, g];
    }, v.stepMinor = function (t) {
      return arguments.length ? (h = +t[0], d = +t[1], v) : [h, d];
    }, v.precision = function (h) {
      return arguments.length ? (y = +h, c = pl(o, i, 90), f = gl(n, t, y), s = pl(u, a, 90), l = gl(r, e, y), v) : y;
    }, v.extentMajor([[-180, -89.999999], [180, 89.999999]]).extentMinor([[-180, -80.000001], [180, 80.000001]]);
  }

  var vl,
      _l,
      bl,
      ml,
      xl = function xl(t) {
    return t;
  },
      wl = new g(),
      Ml = new g(),
      Al = {
    point: nf,
    lineStart: nf,
    lineEnd: nf,
    polygonStart: function polygonStart() {
      Al.lineStart = Tl, Al.lineEnd = kl;
    },
    polygonEnd: function polygonEnd() {
      Al.lineStart = Al.lineEnd = Al.point = nf, wl.add(Uc(Ml)), Ml = new g();
    },
    result: function result() {
      var t = wl / 2;
      return wl = new g(), t;
    }
  };

  function Tl() {
    Al.point = Sl;
  }

  function Sl(t, n) {
    Al.point = El, vl = bl = t, _l = ml = n;
  }

  function El(t, n) {
    Ml.add(ml * t - bl * n), bl = t, ml = n;
  }

  function kl() {
    El(vl, _l);
  }

  var Nl = 1 / 0,
      Cl = Nl,
      Pl = -Nl,
      zl = Pl,
      Dl = {
    point: function point(t, n) {
      t < Nl && (Nl = t);
      t > Pl && (Pl = t);
      n < Cl && (Cl = n);
      n > zl && (zl = n);
    },
    lineStart: nf,
    lineEnd: nf,
    polygonStart: nf,
    polygonEnd: nf,
    result: function result() {
      var t = [[Nl, Cl], [Pl, zl]];
      return Pl = zl = -(Cl = Nl = 1 / 0), t;
    }
  };
  var ql,
      Rl,
      Fl,
      Ol,
      Il = 0,
      Ul = 0,
      Bl = 0,
      Yl = 0,
      Ll = 0,
      jl = 0,
      Hl = 0,
      Xl = 0,
      Gl = 0,
      Vl = {
    point: $l,
    lineStart: Wl,
    lineEnd: Ql,
    polygonStart: function polygonStart() {
      Vl.lineStart = Jl, Vl.lineEnd = th;
    },
    polygonEnd: function polygonEnd() {
      Vl.point = $l, Vl.lineStart = Wl, Vl.lineEnd = Ql;
    },
    result: function result() {
      var t = Gl ? [Hl / Gl, Xl / Gl] : jl ? [Yl / jl, Ll / jl] : Bl ? [Il / Bl, Ul / Bl] : [NaN, NaN];
      return Il = Ul = Bl = Yl = Ll = jl = Hl = Xl = Gl = 0, t;
    }
  };

  function $l(t, n) {
    Il += t, Ul += n, ++Bl;
  }

  function Wl() {
    Vl.point = Zl;
  }

  function Zl(t, n) {
    Vl.point = Kl, $l(Fl = t, Ol = n);
  }

  function Kl(t, n) {
    var e = t - Fl,
        r = n - Ol,
        i = Zc(e * e + r * r);
    Yl += i * (Fl + t) / 2, Ll += i * (Ol + n) / 2, jl += i, $l(Fl = t, Ol = n);
  }

  function Ql() {
    Vl.point = $l;
  }

  function Jl() {
    Vl.point = nh;
  }

  function th() {
    eh(ql, Rl);
  }

  function nh(t, n) {
    Vl.point = eh, $l(ql = Fl = t, Rl = Ol = n);
  }

  function eh(t, n) {
    var e = t - Fl,
        r = n - Ol,
        i = Zc(e * e + r * r);
    Yl += i * (Fl + t) / 2, Ll += i * (Ol + n) / 2, jl += i, Hl += (i = Ol * t - Fl * n) * (Fl + t), Xl += i * (Ol + n), Gl += 3 * i, $l(Fl = t, Ol = n);
  }

  function rh(t) {
    this._context = t;
  }

  rh.prototype = {
    _radius: 4.5,
    pointRadius: function pointRadius(t) {
      return this._radius = t, this;
    },
    polygonStart: function polygonStart() {
      this._line = 0;
    },
    polygonEnd: function polygonEnd() {
      this._line = NaN;
    },
    lineStart: function lineStart() {
      this._point = 0;
    },
    lineEnd: function lineEnd() {
      0 === this._line && this._context.closePath(), this._point = NaN;
    },
    point: function point(t, n) {
      switch (this._point) {
        case 0:
          this._context.moveTo(t, n), this._point = 1;
          break;

        case 1:
          this._context.lineTo(t, n);

          break;

        default:
          this._context.moveTo(t + this._radius, n), this._context.arc(t, n, this._radius, 0, Fc);
      }
    },
    result: nf
  };
  var ih,
      oh,
      ah,
      uh,
      ch,
      fh = new g(),
      sh = {
    point: nf,
    lineStart: function lineStart() {
      sh.point = lh;
    },
    lineEnd: function lineEnd() {
      ih && hh(oh, ah), sh.point = nf;
    },
    polygonStart: function polygonStart() {
      ih = !0;
    },
    polygonEnd: function polygonEnd() {
      ih = null;
    },
    result: function result() {
      var t = +fh;
      return fh = new g(), t;
    }
  };

  function lh(t, n) {
    sh.point = hh, oh = uh = t, ah = ch = n;
  }

  function hh(t, n) {
    uh -= t, ch -= n, fh.add(Zc(uh * uh + ch * ch)), uh = t, ch = n;
  }

  function dh() {
    this._string = [];
  }

  function ph(t) {
    return "m0," + t + "a" + t + "," + t + " 0 1,1 0," + -2 * t + "a" + t + "," + t + " 0 1,1 0," + 2 * t + "z";
  }

  function gh(t) {
    return function (n) {
      var e = new yh();

      for (var r in t) {
        e[r] = t[r];
      }

      return e.stream = n, e;
    };
  }

  function yh() {}

  function vh(t, n, e) {
    var r = t.clipExtent && t.clipExtent();
    return t.scale(150).translate([0, 0]), null != r && t.clipExtent(null), cf(e, t.stream(Dl)), n(Dl.result()), null != r && t.clipExtent(r), t;
  }

  function _h(t, n, e) {
    return vh(t, function (e) {
      var r = n[1][0] - n[0][0],
          i = n[1][1] - n[0][1],
          o = Math.min(r / (e[1][0] - e[0][0]), i / (e[1][1] - e[0][1])),
          a = +n[0][0] + (r - o * (e[1][0] + e[0][0])) / 2,
          u = +n[0][1] + (i - o * (e[1][1] + e[0][1])) / 2;
      t.scale(150 * o).translate([a, u]);
    }, e);
  }

  function bh(t, n, e) {
    return _h(t, [[0, 0], n], e);
  }

  function mh(t, n, e) {
    return vh(t, function (e) {
      var r = +n,
          i = r / (e[1][0] - e[0][0]),
          o = (r - i * (e[1][0] + e[0][0])) / 2,
          a = -i * e[0][1];
      t.scale(150 * i).translate([o, a]);
    }, e);
  }

  function xh(t, n, e) {
    return vh(t, function (e) {
      var r = +n,
          i = r / (e[1][1] - e[0][1]),
          o = -i * e[0][0],
          a = (r - i * (e[1][1] + e[0][1])) / 2;
      t.scale(150 * i).translate([o, a]);
    }, e);
  }

  dh.prototype = {
    _radius: 4.5,
    _circle: ph(4.5),
    pointRadius: function pointRadius(t) {
      return (t = +t) !== this._radius && (this._radius = t, this._circle = null), this;
    },
    polygonStart: function polygonStart() {
      this._line = 0;
    },
    polygonEnd: function polygonEnd() {
      this._line = NaN;
    },
    lineStart: function lineStart() {
      this._point = 0;
    },
    lineEnd: function lineEnd() {
      0 === this._line && this._string.push("Z"), this._point = NaN;
    },
    point: function point(t, n) {
      switch (this._point) {
        case 0:
          this._string.push("M", t, ",", n), this._point = 1;
          break;

        case 1:
          this._string.push("L", t, ",", n);

          break;

        default:
          null == this._circle && (this._circle = ph(this._radius)), this._string.push("M", t, ",", n, this._circle);
      }
    },
    result: function result() {
      if (this._string.length) {
        var t = this._string.join("");

        return this._string = [], t;
      }

      return null;
    }
  }, yh.prototype = {
    constructor: yh,
    point: function point(t, n) {
      this.stream.point(t, n);
    },
    sphere: function sphere() {
      this.stream.sphere();
    },
    lineStart: function lineStart() {
      this.stream.lineStart();
    },
    lineEnd: function lineEnd() {
      this.stream.lineEnd();
    },
    polygonStart: function polygonStart() {
      this.stream.polygonStart();
    },
    polygonEnd: function polygonEnd() {
      this.stream.polygonEnd();
    }
  };
  var wh = Lc(30 * Ic);

  function Mh(t, n) {
    return +n ? function (t, n) {
      function e(r, i, o, a, u, c, f, s, l, h, d, p, g, y) {
        var v = f - r,
            _ = s - i,
            b = v * v + _ * _;

        if (b > 4 * n && g--) {
          var m = a + h,
              x = u + d,
              w = c + p,
              M = Zc(m * m + x * x + w * w),
              A = Jc(w /= M),
              T = Uc(Uc(w) - 1) < Pc || Uc(o - l) < Pc ? (o + l) / 2 : Yc(x, m),
              S = t(T, A),
              E = S[0],
              k = S[1],
              N = E - r,
              C = k - i,
              P = _ * N - v * C;
          (P * P / b > n || Uc((v * N + _ * C) / b - .5) > .3 || a * h + u * d + c * p < wh) && (e(r, i, o, a, u, c, E, k, T, m /= M, x /= M, w, g, y), y.point(E, k), e(E, k, T, m, x, w, f, s, l, h, d, p, g, y));
        }
      }

      return function (n) {
        var r,
            i,
            o,
            a,
            u,
            c,
            f,
            s,
            l,
            h,
            d,
            p,
            g = {
          point: y,
          lineStart: v,
          lineEnd: b,
          polygonStart: function polygonStart() {
            n.polygonStart(), g.lineStart = m;
          },
          polygonEnd: function polygonEnd() {
            n.polygonEnd(), g.lineStart = v;
          }
        };

        function y(e, r) {
          e = t(e, r), n.point(e[0], e[1]);
        }

        function v() {
          s = NaN, g.point = _, n.lineStart();
        }

        function _(r, i) {
          var o = Df([r, i]),
              a = t(r, i);
          e(s, l, f, h, d, p, s = a[0], l = a[1], f = r, h = o[0], d = o[1], p = o[2], 16, n), n.point(s, l);
        }

        function b() {
          g.point = y, n.lineEnd();
        }

        function m() {
          v(), g.point = x, g.lineEnd = w;
        }

        function x(t, n) {
          _(r = t, n), i = s, o = l, a = h, u = d, c = p, g.point = _;
        }

        function w() {
          e(s, l, f, h, d, p, i, o, r, a, u, c, 16, n), g.lineEnd = b, b();
        }

        return g;
      };
    }(t, n) : function (t) {
      return gh({
        point: function point(n, e) {
          n = t(n, e), this.stream.point(n[0], n[1]);
        }
      });
    }(t);
  }

  var Ah = gh({
    point: function point(t, n) {
      this.stream.point(t * Ic, n * Ic);
    }
  });

  function Th(t, n, e, r, i, o) {
    if (!o) return function (t, n, e, r, i) {
      function o(o, a) {
        return [n + t * (o *= r), e - t * (a *= i)];
      }

      return o.invert = function (o, a) {
        return [(o - n) / t * r, (e - a) / t * i];
      }, o;
    }(t, n, e, r, i);
    var a = Lc(o),
        u = $c(o),
        c = a * t,
        f = u * t,
        s = a / t,
        l = u / t,
        h = (u * e - a * n) / t,
        d = (u * n + a * e) / t;

    function p(t, o) {
      return [c * (t *= r) - f * (o *= i) + n, e - f * t - c * o];
    }

    return p.invert = function (t, n) {
      return [r * (s * t - l * n + h), i * (d - l * t - s * n)];
    }, p;
  }

  function Sh(t) {
    return Eh(function () {
      return t;
    })();
  }

  function Eh(t) {
    var n,
        e,
        r,
        i,
        o,
        a,
        u,
        c,
        f,
        s,
        l = 150,
        h = 480,
        d = 250,
        p = 0,
        g = 0,
        y = 0,
        v = 0,
        _ = 0,
        b = 0,
        m = 1,
        x = 1,
        w = null,
        M = js,
        A = null,
        T = xl,
        S = .5;

    function E(t) {
      return c(t[0] * Ic, t[1] * Ic);
    }

    function k(t) {
      return (t = c.invert(t[0], t[1])) && [t[0] * Oc, t[1] * Oc];
    }

    function N() {
      var t = Th(l, 0, 0, m, x, b).apply(null, n(p, g)),
          r = Th(l, h - t[0], d - t[1], m, x, b);
      return e = Ss(y, v, _), u = As(n, r), c = As(e, u), a = Mh(u, S), C();
    }

    function C() {
      return f = s = null, E;
    }

    return E.stream = function (t) {
      return f && s === t ? f : f = Ah(function (t) {
        return gh({
          point: function point(n, e) {
            var r = t(n, e);
            return this.stream.point(r[0], r[1]);
          }
        });
      }(e)(M(a(T(s = t)))));
    }, E.preclip = function (t) {
      return arguments.length ? (M = t, w = void 0, C()) : M;
    }, E.postclip = function (t) {
      return arguments.length ? (T = t, A = r = i = o = null, C()) : T;
    }, E.clipAngle = function (t) {
      return arguments.length ? (M = +t ? Hs(w = t * Ic) : (w = null, js), C()) : w * Oc;
    }, E.clipExtent = function (t) {
      return arguments.length ? (T = null == t ? (A = r = i = o = null, xl) : Ks(A = +t[0][0], r = +t[0][1], i = +t[1][0], o = +t[1][1]), C()) : null == A ? null : [[A, r], [i, o]];
    }, E.scale = function (t) {
      return arguments.length ? (l = +t, N()) : l;
    }, E.translate = function (t) {
      return arguments.length ? (h = +t[0], d = +t[1], N()) : [h, d];
    }, E.center = function (t) {
      return arguments.length ? (p = t[0] % 360 * Ic, g = t[1] % 360 * Ic, N()) : [p * Oc, g * Oc];
    }, E.rotate = function (t) {
      return arguments.length ? (y = t[0] % 360 * Ic, v = t[1] % 360 * Ic, _ = t.length > 2 ? t[2] % 360 * Ic : 0, N()) : [y * Oc, v * Oc, _ * Oc];
    }, E.angle = function (t) {
      return arguments.length ? (b = t % 360 * Ic, N()) : b * Oc;
    }, E.reflectX = function (t) {
      return arguments.length ? (m = t ? -1 : 1, N()) : m < 0;
    }, E.reflectY = function (t) {
      return arguments.length ? (x = t ? -1 : 1, N()) : x < 0;
    }, E.precision = function (t) {
      return arguments.length ? (a = Mh(u, S = t * t), C()) : Zc(S);
    }, E.fitExtent = function (t, n) {
      return _h(E, t, n);
    }, E.fitSize = function (t, n) {
      return bh(E, t, n);
    }, E.fitWidth = function (t, n) {
      return mh(E, t, n);
    }, E.fitHeight = function (t, n) {
      return xh(E, t, n);
    }, function () {
      return n = t.apply(this, arguments), E.invert = n.invert && k, N();
    };
  }

  function kh(t) {
    var n = 0,
        e = Dc / 3,
        r = Eh(t),
        i = r(n, e);
    return i.parallels = function (t) {
      return arguments.length ? r(n = t[0] * Ic, e = t[1] * Ic) : [n * Oc, e * Oc];
    }, i;
  }

  function Nh(t, n) {
    var e = $c(t),
        r = (e + $c(n)) / 2;
    if (Uc(r) < Pc) return function (t) {
      var n = Lc(t);

      function e(t, e) {
        return [t * n, $c(e) / n];
      }

      return e.invert = function (t, e) {
        return [t / n, Jc(e * n)];
      }, e;
    }(t);
    var i = 1 + e * (2 * r - e),
        o = Zc(i) / r;

    function a(t, n) {
      var e = Zc(i - 2 * r * $c(n)) / r;
      return [e * $c(t *= r), o - e * Lc(t)];
    }

    return a.invert = function (t, n) {
      var e = o - n,
          a = Yc(t, Uc(e)) * Wc(e);
      return e * r < 0 && (a -= Dc * Wc(t) * Wc(e)), [a / r, Jc((i - (t * t + e * e) * r * r) / (2 * r))];
    }, a;
  }

  function Ch() {
    return kh(Nh).scale(155.424).center([0, 33.6442]);
  }

  function Ph() {
    return Ch().parallels([29.5, 45.5]).scale(1070).translate([480, 250]).rotate([96, 0]).center([-.6, 38.7]);
  }

  function zh(t) {
    return function (n, e) {
      var r = Lc(n),
          i = Lc(e),
          o = t(r * i);
      return o === 1 / 0 ? [2, 0] : [o * i * $c(n), o * $c(e)];
    };
  }

  function Dh(t) {
    return function (n, e) {
      var r = Zc(n * n + e * e),
          i = t(r),
          o = $c(i),
          a = Lc(i);
      return [Yc(n * o, r * a), Jc(r && e * o / r)];
    };
  }

  var qh = zh(function (t) {
    return Zc(2 / (1 + t));
  });
  qh.invert = Dh(function (t) {
    return 2 * Jc(t / 2);
  });
  var Rh = zh(function (t) {
    return (t = Qc(t)) && t / $c(t);
  });

  function Fh(t, n) {
    return [t, Gc(Kc((qc + n) / 2))];
  }

  function Oh(t) {
    var n,
        e,
        r,
        i = Sh(t),
        o = i.center,
        a = i.scale,
        u = i.translate,
        c = i.clipExtent,
        f = null;

    function s() {
      var o = Dc * a(),
          u = i(Cs(i.rotate()).invert([0, 0]));
      return c(null == f ? [[u[0] - o, u[1] - o], [u[0] + o, u[1] + o]] : t === Fh ? [[Math.max(u[0] - o, f), n], [Math.min(u[0] + o, e), r]] : [[f, Math.max(u[1] - o, n)], [e, Math.min(u[1] + o, r)]]);
    }

    return i.scale = function (t) {
      return arguments.length ? (a(t), s()) : a();
    }, i.translate = function (t) {
      return arguments.length ? (u(t), s()) : u();
    }, i.center = function (t) {
      return arguments.length ? (o(t), s()) : o();
    }, i.clipExtent = function (t) {
      return arguments.length ? (null == t ? f = n = e = r = null : (f = +t[0][0], n = +t[0][1], e = +t[1][0], r = +t[1][1]), s()) : null == f ? null : [[f, n], [e, r]];
    }, s();
  }

  function Ih(t) {
    return Kc((qc + t) / 2);
  }

  function Uh(t, n) {
    var e = Lc(t),
        r = t === n ? $c(t) : Gc(e / Lc(n)) / Gc(Ih(n) / Ih(t)),
        i = e * Vc(Ih(t), r) / r;
    if (!r) return Fh;

    function o(t, n) {
      i > 0 ? n < -qc + Pc && (n = -qc + Pc) : n > qc - Pc && (n = qc - Pc);
      var e = i / Vc(Ih(n), r);
      return [e * $c(r * t), i - e * Lc(r * t)];
    }

    return o.invert = function (t, n) {
      var e = i - n,
          o = Wc(r) * Zc(t * t + e * e),
          a = Yc(t, Uc(e)) * Wc(e);
      return e * r < 0 && (a -= Dc * Wc(t) * Wc(e)), [a / r, 2 * Bc(Vc(i / o, 1 / r)) - qc];
    }, o;
  }

  function Bh(t, n) {
    return [t, n];
  }

  function Yh(t, n) {
    var e = Lc(t),
        r = t === n ? $c(t) : (e - Lc(n)) / (n - t),
        i = e / r + t;
    if (Uc(r) < Pc) return Bh;

    function o(t, n) {
      var e = i - n,
          o = r * t;
      return [e * $c(o), i - e * Lc(o)];
    }

    return o.invert = function (t, n) {
      var e = i - n,
          o = Yc(t, Uc(e)) * Wc(e);
      return e * r < 0 && (o -= Dc * Wc(t) * Wc(e)), [o / r, i - Wc(r) * Zc(t * t + e * e)];
    }, o;
  }

  Rh.invert = Dh(function (t) {
    return t;
  }), Fh.invert = function (t, n) {
    return [t, 2 * Bc(Hc(n)) - qc];
  }, Bh.invert = Bh;
  var Lh = 1.340264,
      jh = -.081106,
      Hh = 893e-6,
      Xh = .003796,
      Gh = Zc(3) / 2;

  function Vh(t, n) {
    var e = Jc(Gh * $c(n)),
        r = e * e,
        i = r * r * r;
    return [t * Lc(e) / (Gh * (Lh + 3 * jh * r + i * (7 * Hh + 9 * Xh * r))), e * (Lh + jh * r + i * (Hh + Xh * r))];
  }

  function $h(t, n) {
    var e = Lc(n),
        r = Lc(t) * e;
    return [e * $c(t) / r, $c(n) / r];
  }

  function Wh(t, n) {
    var e = n * n,
        r = e * e;
    return [t * (.8707 - .131979 * e + r * (r * (.003971 * e - .001529 * r) - .013791)), n * (1.007226 + e * (.015085 + r * (.028874 * e - .044475 - .005916 * r)))];
  }

  function Zh(t, n) {
    return [Lc(n) * $c(t), $c(n)];
  }

  function Kh(t, n) {
    var e = Lc(n),
        r = 1 + Lc(t) * e;
    return [e * $c(t) / r, $c(n) / r];
  }

  function Qh(t, n) {
    return [Gc(Kc((qc + n) / 2)), -t];
  }

  function Jh(t, n) {
    return t.parent === n.parent ? 1 : 2;
  }

  function td(t, n) {
    return t + n.x;
  }

  function nd(t, n) {
    return Math.max(t, n.y);
  }

  function ed(t) {
    var n = 0,
        e = t.children,
        r = e && e.length;
    if (r) for (; --r >= 0;) {
      n += e[r].value;
    } else n = 1;
    t.value = n;
  }

  function rd(t, n) {
    t instanceof Map ? (t = [void 0, t], void 0 === n && (n = od)) : void 0 === n && (n = id);

    for (var e, r, i, o, a, u = new cd(t), c = [u]; e = c.pop();) {
      if ((i = n(e.data)) && (a = (i = Array.from(i)).length)) for (e.children = i, o = a - 1; o >= 0; --o) {
        c.push(r = i[o] = new cd(i[o])), r.parent = e, r.depth = e.depth + 1;
      }
    }

    return u.eachBefore(ud);
  }

  function id(t) {
    return t.children;
  }

  function od(t) {
    return Array.isArray(t) ? t[1] : null;
  }

  function ad(t) {
    void 0 !== t.data.value && (t.value = t.data.value), t.data = t.data.data;
  }

  function ud(t) {
    var n = 0;

    do {
      t.height = n;
    } while ((t = t.parent) && t.height < ++n);
  }

  function cd(t) {
    this.data = t, this.depth = this.height = 0, this.parent = null;
  }

  function fd(t) {
    for (var n, e, r = 0, i = (t = function (t) {
      for (var n, e, r = t.length; r;) {
        e = Math.random() * r-- | 0, n = t[r], t[r] = t[e], t[e] = n;
      }

      return t;
    }(Array.from(t))).length, o = []; r < i;) {
      n = t[r], e && hd(e, n) ? ++r : (e = pd(o = sd(o, n)), r = 0);
    }

    return e;
  }

  function sd(t, n) {
    var e, r;
    if (dd(n, t)) return [n];

    for (e = 0; e < t.length; ++e) {
      if (ld(n, t[e]) && dd(gd(t[e], n), t)) return [t[e], n];
    }

    for (e = 0; e < t.length - 1; ++e) {
      for (r = e + 1; r < t.length; ++r) {
        if (ld(gd(t[e], t[r]), n) && ld(gd(t[e], n), t[r]) && ld(gd(t[r], n), t[e]) && dd(yd(t[e], t[r], n), t)) return [t[e], t[r], n];
      }
    }

    throw new Error();
  }

  function ld(t, n) {
    var e = t.r - n.r,
        r = n.x - t.x,
        i = n.y - t.y;
    return e < 0 || e * e < r * r + i * i;
  }

  function hd(t, n) {
    var e = t.r - n.r + 1e-9 * Math.max(t.r, n.r, 1),
        r = n.x - t.x,
        i = n.y - t.y;
    return e > 0 && e * e > r * r + i * i;
  }

  function dd(t, n) {
    for (var e = 0; e < n.length; ++e) {
      if (!hd(t, n[e])) return !1;
    }

    return !0;
  }

  function pd(t) {
    switch (t.length) {
      case 1:
        return function (t) {
          return {
            x: t.x,
            y: t.y,
            r: t.r
          };
        }(t[0]);

      case 2:
        return gd(t[0], t[1]);

      case 3:
        return yd(t[0], t[1], t[2]);
    }
  }

  function gd(t, n) {
    var e = t.x,
        r = t.y,
        i = t.r,
        o = n.x,
        a = n.y,
        u = n.r,
        c = o - e,
        f = a - r,
        s = u - i,
        l = Math.sqrt(c * c + f * f);
    return {
      x: (e + o + c / l * s) / 2,
      y: (r + a + f / l * s) / 2,
      r: (l + i + u) / 2
    };
  }

  function yd(t, n, e) {
    var r = t.x,
        i = t.y,
        o = t.r,
        a = n.x,
        u = n.y,
        c = n.r,
        f = e.x,
        s = e.y,
        l = e.r,
        h = r - a,
        d = r - f,
        p = i - u,
        g = i - s,
        y = c - o,
        v = l - o,
        _ = r * r + i * i - o * o,
        b = _ - a * a - u * u + c * c,
        m = _ - f * f - s * s + l * l,
        x = d * p - h * g,
        w = (p * m - g * b) / (2 * x) - r,
        M = (g * y - p * v) / x,
        A = (d * b - h * m) / (2 * x) - i,
        T = (h * v - d * y) / x,
        S = M * M + T * T - 1,
        E = 2 * (o + w * M + A * T),
        k = w * w + A * A - o * o,
        N = -(S ? (E + Math.sqrt(E * E - 4 * S * k)) / (2 * S) : k / E);

    return {
      x: r + w + M * N,
      y: i + A + T * N,
      r: N
    };
  }

  function vd(t, n, e) {
    var r,
        i,
        o,
        a,
        u = t.x - n.x,
        c = t.y - n.y,
        f = u * u + c * c;
    f ? (i = n.r + e.r, i *= i, a = t.r + e.r, i > (a *= a) ? (r = (f + a - i) / (2 * f), o = Math.sqrt(Math.max(0, a / f - r * r)), e.x = t.x - r * u - o * c, e.y = t.y - r * c + o * u) : (r = (f + i - a) / (2 * f), o = Math.sqrt(Math.max(0, i / f - r * r)), e.x = n.x + r * u - o * c, e.y = n.y + r * c + o * u)) : (e.x = n.x + e.r, e.y = n.y);
  }

  function _d(t, n) {
    var e = t.r + n.r - 1e-6,
        r = n.x - t.x,
        i = n.y - t.y;
    return e > 0 && e * e > r * r + i * i;
  }

  function bd(t) {
    var n = t._,
        e = t.next._,
        r = n.r + e.r,
        i = (n.x * e.r + e.x * n.r) / r,
        o = (n.y * e.r + e.y * n.r) / r;
    return i * i + o * o;
  }

  function md(t) {
    this._ = t, this.next = null, this.previous = null;
  }

  function xd(t) {
    if (!(i = (t = function (t) {
      return "object" == _typeof(t) && "length" in t ? t : Array.from(t);
    }(t)).length)) return 0;
    var n, e, r, i, o, a, u, c, f, s, l;
    if ((n = t[0]).x = 0, n.y = 0, !(i > 1)) return n.r;
    if (e = t[1], n.x = -e.r, e.x = n.r, e.y = 0, !(i > 2)) return n.r + e.r;
    vd(e, n, r = t[2]), n = new md(n), e = new md(e), r = new md(r), n.next = r.previous = e, e.next = n.previous = r, r.next = e.previous = n;

    t: for (u = 3; u < i; ++u) {
      vd(n._, e._, r = t[u]), r = new md(r), c = e.next, f = n.previous, s = e._.r, l = n._.r;

      do {
        if (s <= l) {
          if (_d(c._, r._)) {
            e = c, n.next = e, e.previous = n, --u;
            continue t;
          }

          s += c._.r, c = c.next;
        } else {
          if (_d(f._, r._)) {
            (n = f).next = e, e.previous = n, --u;
            continue t;
          }

          l += f._.r, f = f.previous;
        }
      } while (c !== f.next);

      for (r.previous = n, r.next = e, n.next = e.previous = e = r, o = bd(n); (r = r.next) !== e;) {
        (a = bd(r)) < o && (n = r, o = a);
      }

      e = n.next;
    }

    for (n = [e._], r = e; (r = r.next) !== e;) {
      n.push(r._);
    }

    for (r = fd(n), u = 0; u < i; ++u) {
      (n = t[u]).x -= r.x, n.y -= r.y;
    }

    return r.r;
  }

  function wd(t) {
    return null == t ? null : Md(t);
  }

  function Md(t) {
    if ("function" != typeof t) throw new Error();
    return t;
  }

  function Ad() {
    return 0;
  }

  function Td(t) {
    return function () {
      return t;
    };
  }

  function Sd(t) {
    return Math.sqrt(t.value);
  }

  function Ed(t) {
    return function (n) {
      n.children || (n.r = Math.max(0, +t(n) || 0));
    };
  }

  function kd(t, n) {
    return function (e) {
      if (r = e.children) {
        var r,
            i,
            o,
            a = r.length,
            u = t(e) * n || 0;
        if (u) for (i = 0; i < a; ++i) {
          r[i].r += u;
        }
        if (o = xd(r), u) for (i = 0; i < a; ++i) {
          r[i].r -= u;
        }
        e.r = o + u;
      }
    };
  }

  function Nd(t) {
    return function (n) {
      var e = n.parent;
      n.r *= t, e && (n.x = e.x + t * n.x, n.y = e.y + t * n.y);
    };
  }

  function Cd(t) {
    t.x0 = Math.round(t.x0), t.y0 = Math.round(t.y0), t.x1 = Math.round(t.x1), t.y1 = Math.round(t.y1);
  }

  function Pd(t, n, e, r, i) {
    for (var o, a = t.children, u = -1, c = a.length, f = t.value && (r - n) / t.value; ++u < c;) {
      (o = a[u]).y0 = e, o.y1 = i, o.x0 = n, o.x1 = n += o.value * f;
    }
  }

  Vh.invert = function (t, n) {
    for (var e, r = n, i = r * r, o = i * i * i, a = 0; a < 12 && (o = (i = (r -= e = (r * (Lh + jh * i + o * (Hh + Xh * i)) - n) / (Lh + 3 * jh * i + o * (7 * Hh + 9 * Xh * i))) * r) * i * i, !(Uc(e) < zc)); ++a) {
      ;
    }

    return [Gh * t * (Lh + 3 * jh * i + o * (7 * Hh + 9 * Xh * i)) / Lc(r), Jc($c(r) / Gh)];
  }, $h.invert = Dh(Bc), Wh.invert = function (t, n) {
    var e,
        r = n,
        i = 25;

    do {
      var o = r * r,
          a = o * o;
      r -= e = (r * (1.007226 + o * (.015085 + a * (.028874 * o - .044475 - .005916 * a))) - n) / (1.007226 + o * (.045255 + a * (.259866 * o - .311325 - .005916 * 11 * a)));
    } while (Uc(e) > Pc && --i > 0);

    return [t / (.8707 + (o = r * r) * (o * (o * o * o * (.003971 - .001529 * o) - .013791) - .131979)), r];
  }, Zh.invert = Dh(Jc), Kh.invert = Dh(function (t) {
    return 2 * Bc(t);
  }), Qh.invert = function (t, n) {
    return [-n, 2 * Bc(Hc(t)) - qc];
  }, cd.prototype = rd.prototype = _defineProperty({
    constructor: cd,
    count: function count() {
      return this.eachAfter(ed);
    },
    each: function each(t, n) {
      var e = -1;

      var _iterator34 = _createForOfIteratorHelper(this),
          _step34;

      try {
        for (_iterator34.s(); !(_step34 = _iterator34.n()).done;) {
          var _r29 = _step34.value;
          t.call(n, _r29, ++e, this);
        }
      } catch (err) {
        _iterator34.e(err);
      } finally {
        _iterator34.f();
      }

      return this;
    },
    eachAfter: function eachAfter(t, n) {
      for (var e, r, i, o = this, a = [o], u = [], c = -1; o = a.pop();) {
        if (u.push(o), e = o.children) for (r = 0, i = e.length; r < i; ++r) {
          a.push(e[r]);
        }
      }

      for (; o = u.pop();) {
        t.call(n, o, ++c, this);
      }

      return this;
    },
    eachBefore: function eachBefore(t, n) {
      for (var e, r, i = this, o = [i], a = -1; i = o.pop();) {
        if (t.call(n, i, ++a, this), e = i.children) for (r = e.length - 1; r >= 0; --r) {
          o.push(e[r]);
        }
      }

      return this;
    },
    find: function find(t, n) {
      var e = -1;

      var _iterator35 = _createForOfIteratorHelper(this),
          _step35;

      try {
        for (_iterator35.s(); !(_step35 = _iterator35.n()).done;) {
          var _r30 = _step35.value;
          if (t.call(n, _r30, ++e, this)) return _r30;
        }
      } catch (err) {
        _iterator35.e(err);
      } finally {
        _iterator35.f();
      }
    },
    sum: function sum(t) {
      return this.eachAfter(function (n) {
        for (var e = +t(n.data) || 0, r = n.children, i = r && r.length; --i >= 0;) {
          e += r[i].value;
        }

        n.value = e;
      });
    },
    sort: function sort(t) {
      return this.eachBefore(function (n) {
        n.children && n.children.sort(t);
      });
    },
    path: function path(t) {
      for (var n = this, e = function (t, n) {
        if (t === n) return t;
        var e = t.ancestors(),
            r = n.ancestors(),
            i = null;
        t = e.pop(), n = r.pop();

        for (; t === n;) {
          i = t, t = e.pop(), n = r.pop();
        }

        return i;
      }(n, t), r = [n]; n !== e;) {
        n = n.parent, r.push(n);
      }

      for (var i = r.length; t !== e;) {
        r.splice(i, 0, t), t = t.parent;
      }

      return r;
    },
    ancestors: function ancestors() {
      for (var t = this, n = [t]; t = t.parent;) {
        n.push(t);
      }

      return n;
    },
    descendants: function descendants() {
      return Array.from(this);
    },
    leaves: function leaves() {
      var t = [];
      return this.eachBefore(function (n) {
        n.children || t.push(n);
      }), t;
    },
    links: function links() {
      var t = this,
          n = [];
      return t.each(function (e) {
        e !== t && n.push({
          source: e.parent,
          target: e
        });
      }), n;
    },
    copy: function copy() {
      return rd(this).eachBefore(ad);
    }
  }, Symbol.iterator, /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
    var t, n, e, r, i, o;
    return _regeneratorRuntime().wrap(function _callee5$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            i = this, o = [i];

          case 1:
            t = o.reverse(), o = [];

          case 2:
            if (!(i = t.pop())) {
              _context9.next = 9;
              break;
            }

            _context9.next = 5;
            return i;

          case 5:
            if (!(n = i.children)) {
              _context9.next = 7;
              break;
            }

            for (e = 0, r = n.length; e < r; ++e) {
              o.push(n[e]);
            }

          case 7:
            _context9.next = 2;
            break;

          case 9:
            if (o.length) {
              _context9.next = 1;
              break;
            }

          case 10:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee5, this);
  }));
  var zd = {
    depth: -1
  },
      Dd = {};

  function qd(t) {
    return t.id;
  }

  function Rd(t) {
    return t.parentId;
  }

  function Fd(t, n) {
    return t.parent === n.parent ? 1 : 2;
  }

  function Od(t) {
    var n = t.children;
    return n ? n[0] : t.t;
  }

  function Id(t) {
    var n = t.children;
    return n ? n[n.length - 1] : t.t;
  }

  function Ud(t, n, e) {
    var r = e / (n.i - t.i);
    n.c -= r, n.s += e, t.c += r, n.z += e, n.m += e;
  }

  function Bd(t, n, e) {
    return t.a.parent === n.parent ? t.a : e;
  }

  function Yd(t, n) {
    this._ = t, this.parent = null, this.children = null, this.A = null, this.a = this, this.z = 0, this.m = 0, this.c = 0, this.s = 0, this.t = null, this.i = n;
  }

  function Ld(t, n, e, r, i) {
    for (var o, a = t.children, u = -1, c = a.length, f = t.value && (i - e) / t.value; ++u < c;) {
      (o = a[u]).x0 = n, o.x1 = r, o.y0 = e, o.y1 = e += o.value * f;
    }
  }

  Yd.prototype = Object.create(cd.prototype);
  var jd = (1 + Math.sqrt(5)) / 2;

  function Hd(t, n, e, r, i, o) {
    for (var a, u, c, f, s, l, h, d, p, g, y, v = [], _ = n.children, b = 0, m = 0, x = _.length, w = n.value; b < x;) {
      c = i - e, f = o - r;

      do {
        s = _[m++].value;
      } while (!s && m < x);

      for (l = h = s, y = s * s * (g = Math.max(f / c, c / f) / (w * t)), p = Math.max(h / y, y / l); m < x; ++m) {
        if (s += u = _[m].value, u < l && (l = u), u > h && (h = u), y = s * s * g, (d = Math.max(h / y, y / l)) > p) {
          s -= u;
          break;
        }

        p = d;
      }

      v.push(a = {
        value: s,
        dice: c < f,
        children: _.slice(b, m)
      }), a.dice ? Pd(a, e, r, i, w ? r += f * s / w : o) : Ld(a, e, r, w ? e += c * s / w : i, o), w -= s, b = m;
    }

    return v;
  }

  var Xd = function t(n) {
    function e(t, e, r, i, o) {
      Hd(n, t, e, r, i, o);
    }

    return e.ratio = function (n) {
      return t((n = +n) > 1 ? n : 1);
    }, e;
  }(jd);

  var Gd = function t(n) {
    function e(t, e, r, i, o) {
      if ((a = t._squarify) && a.ratio === n) for (var a, u, c, f, s, l = -1, h = a.length, d = t.value; ++l < h;) {
        for (c = (u = a[l]).children, f = u.value = 0, s = c.length; f < s; ++f) {
          u.value += c[f].value;
        }

        u.dice ? Pd(u, e, r, i, d ? r += (o - r) * u.value / d : o) : Ld(u, e, r, d ? e += (i - e) * u.value / d : i, o), d -= u.value;
      } else t._squarify = a = Hd(n, t, e, r, i, o), a.ratio = n;
    }

    return e.ratio = function (n) {
      return t((n = +n) > 1 ? n : 1);
    }, e;
  }(jd);

  function Vd(t, n, e) {
    return (n[0] - t[0]) * (e[1] - t[1]) - (n[1] - t[1]) * (e[0] - t[0]);
  }

  function $d(t, n) {
    return t[0] - n[0] || t[1] - n[1];
  }

  function Wd(t) {
    var n = t.length,
        e = [0, 1];
    var r,
        i = 2;

    for (r = 2; r < n; ++r) {
      for (; i > 1 && Vd(t[e[i - 2]], t[e[i - 1]], t[r]) <= 0;) {
        --i;
      }

      e[i++] = r;
    }

    return e.slice(0, i);
  }

  var Zd = Math.random,
      Kd = function t(n) {
    function e(t, e) {
      return t = null == t ? 0 : +t, e = null == e ? 1 : +e, 1 === arguments.length ? (e = t, t = 0) : e -= t, function () {
        return n() * e + t;
      };
    }

    return e.source = t, e;
  }(Zd),
      Qd = function t(n) {
    function e(t, e) {
      return arguments.length < 2 && (e = t, t = 0), t = Math.floor(t), e = Math.floor(e) - t, function () {
        return Math.floor(n() * e + t);
      };
    }

    return e.source = t, e;
  }(Zd),
      Jd = function t(n) {
    function e(t, e) {
      var r, i;
      return t = null == t ? 0 : +t, e = null == e ? 1 : +e, function () {
        var o;
        if (null != r) o = r, r = null;else do {
          r = 2 * n() - 1, o = 2 * n() - 1, i = r * r + o * o;
        } while (!i || i > 1);
        return t + e * o * Math.sqrt(-2 * Math.log(i) / i);
      };
    }

    return e.source = t, e;
  }(Zd),
      tp = function t(n) {
    var e = Jd.source(n);

    function r() {
      var t = e.apply(this, arguments);
      return function () {
        return Math.exp(t());
      };
    }

    return r.source = t, r;
  }(Zd),
      np = function t(n) {
    function e(t) {
      return (t = +t) <= 0 ? function () {
        return 0;
      } : function () {
        for (var e = 0, r = t; r > 1; --r) {
          e += n();
        }

        return e + r * n();
      };
    }

    return e.source = t, e;
  }(Zd),
      ep = function t(n) {
    var e = np.source(n);

    function r(t) {
      if (0 == (t = +t)) return n;
      var r = e(t);
      return function () {
        return r() / t;
      };
    }

    return r.source = t, r;
  }(Zd),
      rp = function t(n) {
    function e(t) {
      return function () {
        return -Math.log1p(-n()) / t;
      };
    }

    return e.source = t, e;
  }(Zd),
      ip = function t(n) {
    function e(t) {
      if ((t = +t) < 0) throw new RangeError("invalid alpha");
      return t = 1 / -t, function () {
        return Math.pow(1 - n(), t);
      };
    }

    return e.source = t, e;
  }(Zd),
      op = function t(n) {
    function e(t) {
      if ((t = +t) < 0 || t > 1) throw new RangeError("invalid p");
      return function () {
        return Math.floor(n() + t);
      };
    }

    return e.source = t, e;
  }(Zd),
      ap = function t(n) {
    function e(t) {
      if ((t = +t) < 0 || t > 1) throw new RangeError("invalid p");
      return 0 === t ? function () {
        return 1 / 0;
      } : 1 === t ? function () {
        return 1;
      } : (t = Math.log1p(-t), function () {
        return 1 + Math.floor(Math.log1p(-n()) / t);
      });
    }

    return e.source = t, e;
  }(Zd),
      up = function t(n) {
    var e = Jd.source(n)();

    function r(t, r) {
      if ((t = +t) < 0) throw new RangeError("invalid k");
      if (0 === t) return function () {
        return 0;
      };
      if (r = null == r ? 1 : +r, 1 === t) return function () {
        return -Math.log1p(-n()) * r;
      };
      var i = (t < 1 ? t + 1 : t) - 1 / 3,
          o = 1 / (3 * Math.sqrt(i)),
          a = t < 1 ? function () {
        return Math.pow(n(), 1 / t);
      } : function () {
        return 1;
      };
      return function () {
        do {
          do {
            var t = e(),
                u = 1 + o * t;
          } while (u <= 0);

          u *= u * u;
          var c = 1 - n();
        } while (c >= 1 - .0331 * t * t * t * t && Math.log(c) >= .5 * t * t + i * (1 - u + Math.log(u)));

        return i * u * a() * r;
      };
    }

    return r.source = t, r;
  }(Zd),
      cp = function t(n) {
    var e = up.source(n);

    function r(t, n) {
      var r = e(t),
          i = e(n);
      return function () {
        var t = r();
        return 0 === t ? 0 : t / (t + i());
      };
    }

    return r.source = t, r;
  }(Zd),
      fp = function t(n) {
    var e = ap.source(n),
        r = cp.source(n);

    function i(t, n) {
      return t = +t, (n = +n) >= 1 ? function () {
        return t;
      } : n <= 0 ? function () {
        return 0;
      } : function () {
        for (var i = 0, o = t, a = n; o * a > 16 && o * (1 - a) > 16;) {
          var u = Math.floor((o + 1) * a),
              c = r(u, o - u + 1)();
          c <= a ? (i += u, o -= u, a = (a - c) / (1 - c)) : (o = u - 1, a /= c);
        }

        for (var f = a < .5, s = e(f ? a : 1 - a), l = s(), h = 0; l <= o; ++h) {
          l += s();
        }

        return i + (f ? h : o - h);
      };
    }

    return i.source = t, i;
  }(Zd),
      sp = function t(n) {
    function e(t, e, r) {
      var i;
      return 0 == (t = +t) ? i = function i(t) {
        return -Math.log(t);
      } : (t = 1 / t, i = function i(n) {
        return Math.pow(n, t);
      }), e = null == e ? 0 : +e, r = null == r ? 1 : +r, function () {
        return e + r * i(-Math.log1p(-n()));
      };
    }

    return e.source = t, e;
  }(Zd),
      lp = function t(n) {
    function e(t, e) {
      return t = null == t ? 0 : +t, e = null == e ? 1 : +e, function () {
        return t + e * Math.tan(Math.PI * n());
      };
    }

    return e.source = t, e;
  }(Zd),
      hp = function t(n) {
    function e(t, e) {
      return t = null == t ? 0 : +t, e = null == e ? 1 : +e, function () {
        var r = n();
        return t + e * Math.log(r / (1 - r));
      };
    }

    return e.source = t, e;
  }(Zd),
      dp = function t(n) {
    var e = up.source(n),
        r = fp.source(n);

    function i(t) {
      return function () {
        for (var i = 0, o = t; o > 16;) {
          var a = Math.floor(.875 * o),
              u = e(a)();
          if (u > o) return i + r(a - 1, o / u)();
          i += a, o -= u;
        }

        for (var c = -Math.log1p(-n()), f = 0; c <= o; ++f) {
          c -= Math.log1p(-n());
        }

        return i + f;
      };
    }

    return i.source = t, i;
  }(Zd);

  var pp = 1 / 4294967296;

  function gp(t, n) {
    switch (arguments.length) {
      case 0:
        break;

      case 1:
        this.range(t);
        break;

      default:
        this.range(n).domain(t);
    }

    return this;
  }

  function yp(t, n) {
    switch (arguments.length) {
      case 0:
        break;

      case 1:
        "function" == typeof t ? this.interpolator(t) : this.range(t);
        break;

      default:
        this.domain(t), "function" == typeof n ? this.interpolator(n) : this.range(n);
    }

    return this;
  }

  var vp = Symbol("implicit");

  function _p() {
    var t = new y(),
        n = [],
        e = [],
        r = vp;

    function i(i) {
      var o = t.get(i);

      if (void 0 === o) {
        if (r !== vp) return r;
        t.set(i, o = n.push(i) - 1);
      }

      return e[o % e.length];
    }

    return i.domain = function (e) {
      if (!arguments.length) return n.slice();
      n = [], t = new y();

      var _iterator36 = _createForOfIteratorHelper(e),
          _step36;

      try {
        for (_iterator36.s(); !(_step36 = _iterator36.n()).done;) {
          var _r31 = _step36.value;
          t.has(_r31) || t.set(_r31, n.push(_r31) - 1);
        }
      } catch (err) {
        _iterator36.e(err);
      } finally {
        _iterator36.f();
      }

      return i;
    }, i.range = function (t) {
      return arguments.length ? (e = Array.from(t), i) : e.slice();
    }, i.unknown = function (t) {
      return arguments.length ? (r = t, i) : r;
    }, i.copy = function () {
      return _p(n, e).unknown(r);
    }, gp.apply(i, arguments), i;
  }

  function bp() {
    var t,
        n,
        e = _p().unknown(void 0),
        r = e.domain,
        i = e.range,
        o = 0,
        a = 1,
        u = !1,
        c = 0,
        f = 0,
        s = .5;

    function l() {
      var e = r().length,
          l = a < o,
          h = l ? a : o,
          d = l ? o : a;
      t = (d - h) / Math.max(1, e - c + 2 * f), u && (t = Math.floor(t)), h += (d - h - t * (e - c)) * s, n = t * (1 - c), u && (h = Math.round(h), n = Math.round(n));
      var p = J(e).map(function (n) {
        return h + t * n;
      });
      return i(l ? p.reverse() : p);
    }

    return delete e.unknown, e.domain = function (t) {
      return arguments.length ? (r(t), l()) : r();
    }, e.range = function (t) {
      var _t26;

      return arguments.length ? ((_t26 = _slicedToArray(t, 2), o = _t26[0], a = _t26[1]), o = +o, a = +a, l()) : [o, a];
    }, e.rangeRound = function (t) {
      var _t27;

      return (_t27 = _slicedToArray(t, 2), o = _t27[0], a = _t27[1]), o = +o, a = +a, u = !0, l();
    }, e.bandwidth = function () {
      return n;
    }, e.step = function () {
      return t;
    }, e.round = function (t) {
      return arguments.length ? (u = !!t, l()) : u;
    }, e.padding = function (t) {
      return arguments.length ? (c = Math.min(1, f = +t), l()) : c;
    }, e.paddingInner = function (t) {
      return arguments.length ? (c = Math.min(1, t), l()) : c;
    }, e.paddingOuter = function (t) {
      return arguments.length ? (f = +t, l()) : f;
    }, e.align = function (t) {
      return arguments.length ? (s = Math.max(0, Math.min(1, t)), l()) : s;
    }, e.copy = function () {
      return bp(r(), [o, a]).round(u).paddingInner(c).paddingOuter(f).align(s);
    }, gp.apply(l(), arguments);
  }

  function mp(t) {
    var n = t.copy;
    return t.padding = t.paddingOuter, delete t.paddingInner, delete t.paddingOuter, t.copy = function () {
      return mp(n());
    }, t;
  }

  function xp(t) {
    return +t;
  }

  var wp = [0, 1];

  function Mp(t) {
    return t;
  }

  function Ap(t, n) {
    return (n -= t = +t) ? function (e) {
      return (e - t) / n;
    } : function (t) {
      return function () {
        return t;
      };
    }(isNaN(n) ? NaN : .5);
  }

  function Tp(t, n, e) {
    var r = t[0],
        i = t[1],
        o = n[0],
        a = n[1];
    return i < r ? (r = Ap(i, r), o = e(a, o)) : (r = Ap(r, i), o = e(o, a)), function (t) {
      return o(r(t));
    };
  }

  function Sp(t, n, e) {
    var r = Math.min(t.length, n.length) - 1,
        i = new Array(r),
        a = new Array(r),
        u = -1;

    for (t[r] < t[0] && (t = t.slice().reverse(), n = n.slice().reverse()); ++u < r;) {
      i[u] = Ap(t[u], t[u + 1]), a[u] = e(n[u], n[u + 1]);
    }

    return function (n) {
      var e = o(t, n, 1, r) - 1;
      return a[e](i[e](n));
    };
  }

  function Ep(t, n) {
    return n.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown());
  }

  function kp() {
    var t,
        n,
        e,
        r,
        i,
        o,
        a = wp,
        u = wp,
        c = kr,
        f = Mp;

    function s() {
      var t = Math.min(a.length, u.length);
      return f !== Mp && (f = function (t, n) {
        var e;
        return t > n && (e = t, t = n, n = e), function (e) {
          return Math.max(t, Math.min(n, e));
        };
      }(a[0], a[t - 1])), r = t > 2 ? Sp : Tp, i = o = null, l;
    }

    function l(n) {
      return null == n || isNaN(n = +n) ? e : (i || (i = r(a.map(t), u, c)))(t(f(n)));
    }

    return l.invert = function (e) {
      return f(n((o || (o = r(u, a.map(t), Mr)))(e)));
    }, l.domain = function (t) {
      return arguments.length ? (a = Array.from(t, xp), s()) : a.slice();
    }, l.range = function (t) {
      return arguments.length ? (u = Array.from(t), s()) : u.slice();
    }, l.rangeRound = function (t) {
      return u = Array.from(t), c = Nr, s();
    }, l.clamp = function (t) {
      return arguments.length ? (f = !!t || Mp, s()) : f !== Mp;
    }, l.interpolate = function (t) {
      return arguments.length ? (c = t, s()) : c;
    }, l.unknown = function (t) {
      return arguments.length ? (e = t, l) : e;
    }, function (e, r) {
      return t = e, n = r, s();
    };
  }

  function Np() {
    return kp()(Mp, Mp);
  }

  function Cp(n, e, r, i) {
    var o,
        a = U(n, e, r);

    switch ((i = _c(null == i ? ",f" : i)).type) {
      case "s":
        var u = Math.max(Math.abs(n), Math.abs(e));
        return null != i.precision || isNaN(o = Nc(a, u)) || (i.precision = o), t.formatPrefix(i, u);

      case "":
      case "e":
      case "g":
      case "p":
      case "r":
        null != i.precision || isNaN(o = Cc(a, Math.max(Math.abs(n), Math.abs(e)))) || (i.precision = o - ("e" === i.type));
        break;

      case "f":
      case "%":
        null != i.precision || isNaN(o = kc(a)) || (i.precision = o - 2 * ("%" === i.type));
    }

    return t.format(i);
  }

  function Pp(t) {
    var n = t.domain;
    return t.ticks = function (t) {
      var e = n();
      return O(e[0], e[e.length - 1], null == t ? 10 : t);
    }, t.tickFormat = function (t, e) {
      var r = n();
      return Cp(r[0], r[r.length - 1], null == t ? 10 : t, e);
    }, t.nice = function (e) {
      null == e && (e = 10);
      var r,
          i,
          o = n(),
          a = 0,
          u = o.length - 1,
          c = o[a],
          f = o[u],
          s = 10;

      for (f < c && (i = c, c = f, f = i, i = a, a = u, u = i); s-- > 0;) {
        if ((i = I(c, f, e)) === r) return o[a] = c, o[u] = f, n(o);
        if (i > 0) c = Math.floor(c / i) * i, f = Math.ceil(f / i) * i;else {
          if (!(i < 0)) break;
          c = Math.ceil(c * i) / i, f = Math.floor(f * i) / i;
        }
        r = i;
      }

      return t;
    }, t;
  }

  function zp(t, n) {
    var e,
        r = 0,
        i = (t = t.slice()).length - 1,
        o = t[r],
        a = t[i];
    return a < o && (e = r, r = i, i = e, e = o, o = a, a = e), t[r] = n.floor(o), t[i] = n.ceil(a), t;
  }

  function Dp(t) {
    return Math.log(t);
  }

  function qp(t) {
    return Math.exp(t);
  }

  function Rp(t) {
    return -Math.log(-t);
  }

  function Fp(t) {
    return -Math.exp(-t);
  }

  function Op(t) {
    return isFinite(t) ? +("1e" + t) : t < 0 ? 0 : t;
  }

  function Ip(t) {
    return function (n) {
      return -t(-n);
    };
  }

  function Up(n) {
    var e,
        r,
        i = n(Dp, qp),
        o = i.domain,
        a = 10;

    function u() {
      return e = function (t) {
        return t === Math.E ? Math.log : 10 === t && Math.log10 || 2 === t && Math.log2 || (t = Math.log(t), function (n) {
          return Math.log(n) / t;
        });
      }(a), r = function (t) {
        return 10 === t ? Op : t === Math.E ? Math.exp : function (n) {
          return Math.pow(t, n);
        };
      }(a), o()[0] < 0 ? (e = Ip(e), r = Ip(r), n(Rp, Fp)) : n(Dp, qp), i;
    }

    return i.base = function (t) {
      return arguments.length ? (a = +t, u()) : a;
    }, i.domain = function (t) {
      return arguments.length ? (o(t), u()) : o();
    }, i.ticks = function (t) {
      var n,
          i = o(),
          u = i[0],
          c = i[i.length - 1];
      (n = c < u) && (h = u, u = c, c = h);
      var f,
          s,
          l,
          h = e(u),
          d = e(c),
          p = null == t ? 10 : +t,
          g = [];

      if (!(a % 1) && d - h < p) {
        if (h = Math.floor(h), d = Math.ceil(d), u > 0) {
          for (; h <= d; ++h) {
            for (s = 1, f = r(h); s < a; ++s) {
              if (!((l = f * s) < u)) {
                if (l > c) break;
                g.push(l);
              }
            }
          }
        } else for (; h <= d; ++h) {
          for (s = a - 1, f = r(h); s >= 1; --s) {
            if (!((l = f * s) < u)) {
              if (l > c) break;
              g.push(l);
            }
          }
        }

        2 * g.length < p && (g = O(u, c, p));
      } else g = O(h, d, Math.min(d - h, p)).map(r);

      return n ? g.reverse() : g;
    }, i.tickFormat = function (n, o) {
      if (null == o && (o = 10 === a ? ".0e" : ","), "function" != typeof o && (o = t.format(o)), n === 1 / 0) return o;
      null == n && (n = 10);
      var u = Math.max(1, a * n / i.ticks().length);
      return function (t) {
        var n = t / r(Math.round(e(t)));
        return n * a < a - .5 && (n *= a), n <= u ? o(t) : "";
      };
    }, i.nice = function () {
      return o(zp(o(), {
        floor: function floor(t) {
          return r(Math.floor(e(t)));
        },
        ceil: function ceil(t) {
          return r(Math.ceil(e(t)));
        }
      }));
    }, i;
  }

  function Bp(t) {
    return function (n) {
      return Math.sign(n) * Math.log1p(Math.abs(n / t));
    };
  }

  function Yp(t) {
    return function (n) {
      return Math.sign(n) * Math.expm1(Math.abs(n)) * t;
    };
  }

  function Lp(t) {
    var n = 1,
        e = t(Bp(n), Yp(n));
    return e.constant = function (e) {
      return arguments.length ? t(Bp(n = +e), Yp(n)) : n;
    }, Pp(e);
  }

  function jp(t) {
    return function (n) {
      return n < 0 ? -Math.pow(-n, t) : Math.pow(n, t);
    };
  }

  function Hp(t) {
    return t < 0 ? -Math.sqrt(-t) : Math.sqrt(t);
  }

  function Xp(t) {
    return t < 0 ? -t * t : t * t;
  }

  function Gp(t) {
    var n = t(Mp, Mp),
        e = 1;

    function r() {
      return 1 === e ? t(Mp, Mp) : .5 === e ? t(Hp, Xp) : t(jp(e), jp(1 / e));
    }

    return n.exponent = function (t) {
      return arguments.length ? (e = +t, r()) : e;
    }, Pp(n);
  }

  function Vp() {
    var t = Gp(kp());
    return t.copy = function () {
      return Ep(t, Vp()).exponent(t.exponent());
    }, gp.apply(t, arguments), t;
  }

  function $p(t) {
    return Math.sign(t) * t * t;
  }

  function Wp(t) {
    return Math.sign(t) * Math.sqrt(Math.abs(t));
  }

  var Zp = new Date(),
      Kp = new Date();

  function Qp(t, n, e, r) {
    function i(n) {
      return t(n = 0 === arguments.length ? new Date() : new Date(+n)), n;
    }

    return i.floor = function (n) {
      return t(n = new Date(+n)), n;
    }, i.ceil = function (e) {
      return t(e = new Date(e - 1)), n(e, 1), t(e), e;
    }, i.round = function (t) {
      var n = i(t),
          e = i.ceil(t);
      return t - n < e - t ? n : e;
    }, i.offset = function (t, e) {
      return n(t = new Date(+t), null == e ? 1 : Math.floor(e)), t;
    }, i.range = function (e, r, o) {
      var a,
          u = [];
      if (e = i.ceil(e), o = null == o ? 1 : Math.floor(o), !(e < r && o > 0)) return u;

      do {
        u.push(a = new Date(+e)), n(e, o), t(e);
      } while (a < e && e < r);

      return u;
    }, i.filter = function (e) {
      return Qp(function (n) {
        if (n >= n) for (; t(n), !e(n);) {
          n.setTime(n - 1);
        }
      }, function (t, r) {
        if (t >= t) if (r < 0) for (; ++r <= 0;) {
          for (; n(t, -1), !e(t);) {
            ;
          }
        } else for (; --r >= 0;) {
          for (; n(t, 1), !e(t);) {
            ;
          }
        }
      });
    }, e && (i.count = function (n, r) {
      return Zp.setTime(+n), Kp.setTime(+r), t(Zp), t(Kp), Math.floor(e(Zp, Kp));
    }, i.every = function (t) {
      return t = Math.floor(t), isFinite(t) && t > 0 ? t > 1 ? i.filter(r ? function (n) {
        return r(n) % t == 0;
      } : function (n) {
        return i.count(0, n) % t == 0;
      }) : i : null;
    }), i;
  }

  var Jp = Qp(function () {}, function (t, n) {
    t.setTime(+t + n);
  }, function (t, n) {
    return n - t;
  });

  Jp.every = function (t) {
    return t = Math.floor(t), isFinite(t) && t > 0 ? t > 1 ? Qp(function (n) {
      n.setTime(Math.floor(n / t) * t);
    }, function (n, e) {
      n.setTime(+n + e * t);
    }, function (n, e) {
      return (e - n) / t;
    }) : Jp : null;
  };

  var tg = Jp.range;
  var ng = 1e3,
      eg = 6e4,
      rg = 36e5,
      ig = 864e5,
      og = 6048e5,
      ag = 2592e6,
      ug = 31536e6;
  var cg = Qp(function (t) {
    t.setTime(t - t.getMilliseconds());
  }, function (t, n) {
    t.setTime(+t + n * ng);
  }, function (t, n) {
    return (n - t) / ng;
  }, function (t) {
    return t.getUTCSeconds();
  }),
      fg = cg.range,
      sg = Qp(function (t) {
    t.setTime(t - t.getMilliseconds() - t.getSeconds() * ng);
  }, function (t, n) {
    t.setTime(+t + n * eg);
  }, function (t, n) {
    return (n - t) / eg;
  }, function (t) {
    return t.getMinutes();
  }),
      lg = sg.range,
      hg = Qp(function (t) {
    t.setTime(t - t.getMilliseconds() - t.getSeconds() * ng - t.getMinutes() * eg);
  }, function (t, n) {
    t.setTime(+t + n * rg);
  }, function (t, n) {
    return (n - t) / rg;
  }, function (t) {
    return t.getHours();
  }),
      dg = hg.range,
      pg = Qp(function (t) {
    return t.setHours(0, 0, 0, 0);
  }, function (t, n) {
    return t.setDate(t.getDate() + n);
  }, function (t, n) {
    return (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * eg) / ig;
  }, function (t) {
    return t.getDate() - 1;
  }),
      gg = pg.range;

  function yg(t) {
    return Qp(function (n) {
      n.setDate(n.getDate() - (n.getDay() + 7 - t) % 7), n.setHours(0, 0, 0, 0);
    }, function (t, n) {
      t.setDate(t.getDate() + 7 * n);
    }, function (t, n) {
      return (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * eg) / og;
    });
  }

  var vg = yg(0),
      _g = yg(1),
      bg = yg(2),
      mg = yg(3),
      xg = yg(4),
      wg = yg(5),
      Mg = yg(6),
      Ag = vg.range,
      Tg = _g.range,
      Sg = bg.range,
      Eg = mg.range,
      kg = xg.range,
      Ng = wg.range,
      Cg = Mg.range,
      Pg = Qp(function (t) {
    t.setDate(1), t.setHours(0, 0, 0, 0);
  }, function (t, n) {
    t.setMonth(t.getMonth() + n);
  }, function (t, n) {
    return n.getMonth() - t.getMonth() + 12 * (n.getFullYear() - t.getFullYear());
  }, function (t) {
    return t.getMonth();
  }),
      zg = Pg.range,
      Dg = Qp(function (t) {
    t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
  }, function (t, n) {
    t.setFullYear(t.getFullYear() + n);
  }, function (t, n) {
    return n.getFullYear() - t.getFullYear();
  }, function (t) {
    return t.getFullYear();
  });

  Dg.every = function (t) {
    return isFinite(t = Math.floor(t)) && t > 0 ? Qp(function (n) {
      n.setFullYear(Math.floor(n.getFullYear() / t) * t), n.setMonth(0, 1), n.setHours(0, 0, 0, 0);
    }, function (n, e) {
      n.setFullYear(n.getFullYear() + e * t);
    }) : null;
  };

  var qg = Dg.range,
      Rg = Qp(function (t) {
    t.setUTCSeconds(0, 0);
  }, function (t, n) {
    t.setTime(+t + n * eg);
  }, function (t, n) {
    return (n - t) / eg;
  }, function (t) {
    return t.getUTCMinutes();
  }),
      Fg = Rg.range,
      Og = Qp(function (t) {
    t.setUTCMinutes(0, 0, 0);
  }, function (t, n) {
    t.setTime(+t + n * rg);
  }, function (t, n) {
    return (n - t) / rg;
  }, function (t) {
    return t.getUTCHours();
  }),
      Ig = Og.range,
      Ug = Qp(function (t) {
    t.setUTCHours(0, 0, 0, 0);
  }, function (t, n) {
    t.setUTCDate(t.getUTCDate() + n);
  }, function (t, n) {
    return (n - t) / ig;
  }, function (t) {
    return t.getUTCDate() - 1;
  }),
      Bg = Ug.range;

  function Yg(t) {
    return Qp(function (n) {
      n.setUTCDate(n.getUTCDate() - (n.getUTCDay() + 7 - t) % 7), n.setUTCHours(0, 0, 0, 0);
    }, function (t, n) {
      t.setUTCDate(t.getUTCDate() + 7 * n);
    }, function (t, n) {
      return (n - t) / og;
    });
  }

  var Lg = Yg(0),
      jg = Yg(1),
      Hg = Yg(2),
      Xg = Yg(3),
      Gg = Yg(4),
      Vg = Yg(5),
      $g = Yg(6),
      Wg = Lg.range,
      Zg = jg.range,
      Kg = Hg.range,
      Qg = Xg.range,
      Jg = Gg.range,
      ty = Vg.range,
      ny = $g.range,
      ey = Qp(function (t) {
    t.setUTCDate(1), t.setUTCHours(0, 0, 0, 0);
  }, function (t, n) {
    t.setUTCMonth(t.getUTCMonth() + n);
  }, function (t, n) {
    return n.getUTCMonth() - t.getUTCMonth() + 12 * (n.getUTCFullYear() - t.getUTCFullYear());
  }, function (t) {
    return t.getUTCMonth();
  }),
      ry = ey.range,
      iy = Qp(function (t) {
    t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
  }, function (t, n) {
    t.setUTCFullYear(t.getUTCFullYear() + n);
  }, function (t, n) {
    return n.getUTCFullYear() - t.getUTCFullYear();
  }, function (t) {
    return t.getUTCFullYear();
  });

  iy.every = function (t) {
    return isFinite(t = Math.floor(t)) && t > 0 ? Qp(function (n) {
      n.setUTCFullYear(Math.floor(n.getUTCFullYear() / t) * t), n.setUTCMonth(0, 1), n.setUTCHours(0, 0, 0, 0);
    }, function (n, e) {
      n.setUTCFullYear(n.getUTCFullYear() + e * t);
    }) : null;
  };

  var oy = iy.range;

  function ay(t, n, r, i, o, a) {
    var u = [[cg, 1, ng], [cg, 5, 5e3], [cg, 15, 15e3], [cg, 30, 3e4], [a, 1, eg], [a, 5, 3e5], [a, 15, 9e5], [a, 30, 18e5], [o, 1, rg], [o, 3, 108e5], [o, 6, 216e5], [o, 12, 432e5], [i, 1, ig], [i, 2, 1728e5], [r, 1, og], [n, 1, ag], [n, 3, 7776e6], [t, 1, ug]];

    function c(n, r, i) {
      var o = Math.abs(r - n) / i,
          a = e(function (_ref10) {
        var _ref11 = _slicedToArray(_ref10, 3),
            t = _ref11[2];

        return t;
      }).right(u, o);
      if (a === u.length) return t.every(U(n / ug, r / ug, i));
      if (0 === a) return Jp.every(Math.max(U(n, r, i), 1));

      var _u14 = _slicedToArray(u[o / u[a - 1][2] < u[a][2] / o ? a - 1 : a], 2),
          c = _u14[0],
          f = _u14[1];

      return c.every(f);
    }

    return [function (t, n, e) {
      var _ref12;

      var r = n < t;
      r && (_ref12 = [n, t], t = _ref12[0], n = _ref12[1], _ref12);
      var i = e && "function" == typeof e.range ? e : c(t, n, e),
          o = i ? i.range(t, +n + 1) : [];
      return r ? o.reverse() : o;
    }, c];
  }

  var _ay = ay(iy, ey, Lg, Ug, Og, Rg),
      _ay2 = _slicedToArray(_ay, 2),
      uy = _ay2[0],
      cy = _ay2[1],
      _ay3 = ay(Dg, Pg, vg, pg, hg, sg),
      _ay4 = _slicedToArray(_ay3, 2),
      fy = _ay4[0],
      sy = _ay4[1];

  function ly(t) {
    if (0 <= t.y && t.y < 100) {
      var n = new Date(-1, t.m, t.d, t.H, t.M, t.S, t.L);
      return n.setFullYear(t.y), n;
    }

    return new Date(t.y, t.m, t.d, t.H, t.M, t.S, t.L);
  }

  function hy(t) {
    if (0 <= t.y && t.y < 100) {
      var n = new Date(Date.UTC(-1, t.m, t.d, t.H, t.M, t.S, t.L));
      return n.setUTCFullYear(t.y), n;
    }

    return new Date(Date.UTC(t.y, t.m, t.d, t.H, t.M, t.S, t.L));
  }

  function dy(t, n, e) {
    return {
      y: t,
      m: n,
      d: e,
      H: 0,
      M: 0,
      S: 0,
      L: 0
    };
  }

  function py(t) {
    var n = t.dateTime,
        e = t.date,
        r = t.time,
        i = t.periods,
        o = t.days,
        _a16 = t.shortDays,
        u = t.months,
        c = t.shortMonths,
        f = wy(i),
        s = My(i),
        l = wy(o),
        h = My(o),
        d = wy(_a16),
        p = My(_a16),
        g = wy(u),
        y = My(u),
        v = wy(c),
        _ = My(c),
        b = {
      a: function a(t) {
        return _a16[t.getDay()];
      },
      A: function A(t) {
        return o[t.getDay()];
      },
      b: function b(t) {
        return c[t.getMonth()];
      },
      B: function B(t) {
        return u[t.getMonth()];
      },
      c: null,
      d: Hy,
      e: Hy,
      f: Wy,
      g: av,
      G: cv,
      H: Xy,
      I: Gy,
      j: Vy,
      L: $y,
      m: Zy,
      M: Ky,
      p: function p(t) {
        return i[+(t.getHours() >= 12)];
      },
      q: function q(t) {
        return 1 + ~~(t.getMonth() / 3);
      },
      Q: Pv,
      s: zv,
      S: Qy,
      u: Jy,
      U: tv,
      V: ev,
      w: rv,
      W: iv,
      x: null,
      X: null,
      y: ov,
      Y: uv,
      Z: fv,
      "%": Cv
    },
        m = {
      a: function a(t) {
        return _a16[t.getUTCDay()];
      },
      A: function A(t) {
        return o[t.getUTCDay()];
      },
      b: function b(t) {
        return c[t.getUTCMonth()];
      },
      B: function B(t) {
        return u[t.getUTCMonth()];
      },
      c: null,
      d: sv,
      e: sv,
      f: gv,
      g: Sv,
      G: kv,
      H: lv,
      I: hv,
      j: dv,
      L: pv,
      m: yv,
      M: vv,
      p: function p(t) {
        return i[+(t.getUTCHours() >= 12)];
      },
      q: function q(t) {
        return 1 + ~~(t.getUTCMonth() / 3);
      },
      Q: Pv,
      s: zv,
      S: _v,
      u: bv,
      U: mv,
      V: wv,
      w: Mv,
      W: Av,
      x: null,
      X: null,
      y: Tv,
      Y: Ev,
      Z: Nv,
      "%": Cv
    },
        x = {
      a: function a(t, n, e) {
        var r = d.exec(n.slice(e));
        return r ? (t.w = p.get(r[0].toLowerCase()), e + r[0].length) : -1;
      },
      A: function A(t, n, e) {
        var r = l.exec(n.slice(e));
        return r ? (t.w = h.get(r[0].toLowerCase()), e + r[0].length) : -1;
      },
      b: function b(t, n, e) {
        var r = v.exec(n.slice(e));
        return r ? (t.m = _.get(r[0].toLowerCase()), e + r[0].length) : -1;
      },
      B: function B(t, n, e) {
        var r = g.exec(n.slice(e));
        return r ? (t.m = y.get(r[0].toLowerCase()), e + r[0].length) : -1;
      },
      c: function c(t, e, r) {
        return A(t, n, e, r);
      },
      d: qy,
      e: qy,
      f: By,
      g: Cy,
      G: Ny,
      H: Fy,
      I: Fy,
      j: Ry,
      L: Uy,
      m: Dy,
      M: Oy,
      p: function p(t, n, e) {
        var r = f.exec(n.slice(e));
        return r ? (t.p = s.get(r[0].toLowerCase()), e + r[0].length) : -1;
      },
      q: zy,
      Q: Ly,
      s: jy,
      S: Iy,
      u: Ty,
      U: Sy,
      V: Ey,
      w: Ay,
      W: ky,
      x: function x(t, n, r) {
        return A(t, e, n, r);
      },
      X: function X(t, n, e) {
        return A(t, r, n, e);
      },
      y: Cy,
      Y: Ny,
      Z: Py,
      "%": Yy
    };

    function w(t, n) {
      return function (e) {
        var r,
            i,
            o,
            a = [],
            u = -1,
            c = 0,
            f = t.length;

        for (e instanceof Date || (e = new Date(+e)); ++u < f;) {
          37 === t.charCodeAt(u) && (a.push(t.slice(c, u)), null != (i = yy[r = t.charAt(++u)]) ? r = t.charAt(++u) : i = "e" === r ? " " : "0", (o = n[r]) && (r = o(e, i)), a.push(r), c = u + 1);
        }

        return a.push(t.slice(c, u)), a.join("");
      };
    }

    function M(t, n) {
      return function (e) {
        var r,
            i,
            o = dy(1900, void 0, 1);
        if (A(o, t, e += "", 0) != e.length) return null;
        if ("Q" in o) return new Date(o.Q);
        if ("s" in o) return new Date(1e3 * o.s + ("L" in o ? o.L : 0));

        if (n && !("Z" in o) && (o.Z = 0), "p" in o && (o.H = o.H % 12 + 12 * o.p), void 0 === o.m && (o.m = "q" in o ? o.q : 0), "V" in o) {
          if (o.V < 1 || o.V > 53) return null;
          "w" in o || (o.w = 1), "Z" in o ? (i = (r = hy(dy(o.y, 0, 1))).getUTCDay(), r = i > 4 || 0 === i ? jg.ceil(r) : jg(r), r = Ug.offset(r, 7 * (o.V - 1)), o.y = r.getUTCFullYear(), o.m = r.getUTCMonth(), o.d = r.getUTCDate() + (o.w + 6) % 7) : (i = (r = ly(dy(o.y, 0, 1))).getDay(), r = i > 4 || 0 === i ? _g.ceil(r) : _g(r), r = pg.offset(r, 7 * (o.V - 1)), o.y = r.getFullYear(), o.m = r.getMonth(), o.d = r.getDate() + (o.w + 6) % 7);
        } else ("W" in o || "U" in o) && ("w" in o || (o.w = "u" in o ? o.u % 7 : "W" in o ? 1 : 0), i = "Z" in o ? hy(dy(o.y, 0, 1)).getUTCDay() : ly(dy(o.y, 0, 1)).getDay(), o.m = 0, o.d = "W" in o ? (o.w + 6) % 7 + 7 * o.W - (i + 5) % 7 : o.w + 7 * o.U - (i + 6) % 7);

        return "Z" in o ? (o.H += o.Z / 100 | 0, o.M += o.Z % 100, hy(o)) : ly(o);
      };
    }

    function A(t, n, e, r) {
      for (var i, o, a = 0, u = n.length, c = e.length; a < u;) {
        if (r >= c) return -1;

        if (37 === (i = n.charCodeAt(a++))) {
          if (i = n.charAt(a++), !(o = x[i in yy ? n.charAt(a++) : i]) || (r = o(t, e, r)) < 0) return -1;
        } else if (i != e.charCodeAt(r++)) return -1;
      }

      return r;
    }

    return b.x = w(e, b), b.X = w(r, b), b.c = w(n, b), m.x = w(e, m), m.X = w(r, m), m.c = w(n, m), {
      format: function format(t) {
        var n = w(t += "", b);
        return n.toString = function () {
          return t;
        }, n;
      },
      parse: function parse(t) {
        var n = M(t += "", !1);
        return n.toString = function () {
          return t;
        }, n;
      },
      utcFormat: function utcFormat(t) {
        var n = w(t += "", m);
        return n.toString = function () {
          return t;
        }, n;
      },
      utcParse: function utcParse(t) {
        var n = M(t += "", !0);
        return n.toString = function () {
          return t;
        }, n;
      }
    };
  }

  var gy,
      yy = {
    "-": "",
    _: " ",
    0: "0"
  },
      vy = /^\s*\d+/,
      _y = /^%/,
      by = /[\\^$*+?|[\]().{}]/g;

  function my(t, n, e) {
    var r = t < 0 ? "-" : "",
        i = (r ? -t : t) + "",
        o = i.length;
    return r + (o < e ? new Array(e - o + 1).join(n) + i : i);
  }

  function xy(t) {
    return t.replace(by, "\\$&");
  }

  function wy(t) {
    return new RegExp("^(?:" + t.map(xy).join("|") + ")", "i");
  }

  function My(t) {
    return new Map(t.map(function (t, n) {
      return [t.toLowerCase(), n];
    }));
  }

  function Ay(t, n, e) {
    var r = vy.exec(n.slice(e, e + 1));
    return r ? (t.w = +r[0], e + r[0].length) : -1;
  }

  function Ty(t, n, e) {
    var r = vy.exec(n.slice(e, e + 1));
    return r ? (t.u = +r[0], e + r[0].length) : -1;
  }

  function Sy(t, n, e) {
    var r = vy.exec(n.slice(e, e + 2));
    return r ? (t.U = +r[0], e + r[0].length) : -1;
  }

  function Ey(t, n, e) {
    var r = vy.exec(n.slice(e, e + 2));
    return r ? (t.V = +r[0], e + r[0].length) : -1;
  }

  function ky(t, n, e) {
    var r = vy.exec(n.slice(e, e + 2));
    return r ? (t.W = +r[0], e + r[0].length) : -1;
  }

  function Ny(t, n, e) {
    var r = vy.exec(n.slice(e, e + 4));
    return r ? (t.y = +r[0], e + r[0].length) : -1;
  }

  function Cy(t, n, e) {
    var r = vy.exec(n.slice(e, e + 2));
    return r ? (t.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3), e + r[0].length) : -1;
  }

  function Py(t, n, e) {
    var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(n.slice(e, e + 6));
    return r ? (t.Z = r[1] ? 0 : -(r[2] + (r[3] || "00")), e + r[0].length) : -1;
  }

  function zy(t, n, e) {
    var r = vy.exec(n.slice(e, e + 1));
    return r ? (t.q = 3 * r[0] - 3, e + r[0].length) : -1;
  }

  function Dy(t, n, e) {
    var r = vy.exec(n.slice(e, e + 2));
    return r ? (t.m = r[0] - 1, e + r[0].length) : -1;
  }

  function qy(t, n, e) {
    var r = vy.exec(n.slice(e, e + 2));
    return r ? (t.d = +r[0], e + r[0].length) : -1;
  }

  function Ry(t, n, e) {
    var r = vy.exec(n.slice(e, e + 3));
    return r ? (t.m = 0, t.d = +r[0], e + r[0].length) : -1;
  }

  function Fy(t, n, e) {
    var r = vy.exec(n.slice(e, e + 2));
    return r ? (t.H = +r[0], e + r[0].length) : -1;
  }

  function Oy(t, n, e) {
    var r = vy.exec(n.slice(e, e + 2));
    return r ? (t.M = +r[0], e + r[0].length) : -1;
  }

  function Iy(t, n, e) {
    var r = vy.exec(n.slice(e, e + 2));
    return r ? (t.S = +r[0], e + r[0].length) : -1;
  }

  function Uy(t, n, e) {
    var r = vy.exec(n.slice(e, e + 3));
    return r ? (t.L = +r[0], e + r[0].length) : -1;
  }

  function By(t, n, e) {
    var r = vy.exec(n.slice(e, e + 6));
    return r ? (t.L = Math.floor(r[0] / 1e3), e + r[0].length) : -1;
  }

  function Yy(t, n, e) {
    var r = _y.exec(n.slice(e, e + 1));

    return r ? e + r[0].length : -1;
  }

  function Ly(t, n, e) {
    var r = vy.exec(n.slice(e));
    return r ? (t.Q = +r[0], e + r[0].length) : -1;
  }

  function jy(t, n, e) {
    var r = vy.exec(n.slice(e));
    return r ? (t.s = +r[0], e + r[0].length) : -1;
  }

  function Hy(t, n) {
    return my(t.getDate(), n, 2);
  }

  function Xy(t, n) {
    return my(t.getHours(), n, 2);
  }

  function Gy(t, n) {
    return my(t.getHours() % 12 || 12, n, 2);
  }

  function Vy(t, n) {
    return my(1 + pg.count(Dg(t), t), n, 3);
  }

  function $y(t, n) {
    return my(t.getMilliseconds(), n, 3);
  }

  function Wy(t, n) {
    return $y(t, n) + "000";
  }

  function Zy(t, n) {
    return my(t.getMonth() + 1, n, 2);
  }

  function Ky(t, n) {
    return my(t.getMinutes(), n, 2);
  }

  function Qy(t, n) {
    return my(t.getSeconds(), n, 2);
  }

  function Jy(t) {
    var n = t.getDay();
    return 0 === n ? 7 : n;
  }

  function tv(t, n) {
    return my(vg.count(Dg(t) - 1, t), n, 2);
  }

  function nv(t) {
    var n = t.getDay();
    return n >= 4 || 0 === n ? xg(t) : xg.ceil(t);
  }

  function ev(t, n) {
    return t = nv(t), my(xg.count(Dg(t), t) + (4 === Dg(t).getDay()), n, 2);
  }

  function rv(t) {
    return t.getDay();
  }

  function iv(t, n) {
    return my(_g.count(Dg(t) - 1, t), n, 2);
  }

  function ov(t, n) {
    return my(t.getFullYear() % 100, n, 2);
  }

  function av(t, n) {
    return my((t = nv(t)).getFullYear() % 100, n, 2);
  }

  function uv(t, n) {
    return my(t.getFullYear() % 1e4, n, 4);
  }

  function cv(t, n) {
    var e = t.getDay();
    return my((t = e >= 4 || 0 === e ? xg(t) : xg.ceil(t)).getFullYear() % 1e4, n, 4);
  }

  function fv(t) {
    var n = t.getTimezoneOffset();
    return (n > 0 ? "-" : (n *= -1, "+")) + my(n / 60 | 0, "0", 2) + my(n % 60, "0", 2);
  }

  function sv(t, n) {
    return my(t.getUTCDate(), n, 2);
  }

  function lv(t, n) {
    return my(t.getUTCHours(), n, 2);
  }

  function hv(t, n) {
    return my(t.getUTCHours() % 12 || 12, n, 2);
  }

  function dv(t, n) {
    return my(1 + Ug.count(iy(t), t), n, 3);
  }

  function pv(t, n) {
    return my(t.getUTCMilliseconds(), n, 3);
  }

  function gv(t, n) {
    return pv(t, n) + "000";
  }

  function yv(t, n) {
    return my(t.getUTCMonth() + 1, n, 2);
  }

  function vv(t, n) {
    return my(t.getUTCMinutes(), n, 2);
  }

  function _v(t, n) {
    return my(t.getUTCSeconds(), n, 2);
  }

  function bv(t) {
    var n = t.getUTCDay();
    return 0 === n ? 7 : n;
  }

  function mv(t, n) {
    return my(Lg.count(iy(t) - 1, t), n, 2);
  }

  function xv(t) {
    var n = t.getUTCDay();
    return n >= 4 || 0 === n ? Gg(t) : Gg.ceil(t);
  }

  function wv(t, n) {
    return t = xv(t), my(Gg.count(iy(t), t) + (4 === iy(t).getUTCDay()), n, 2);
  }

  function Mv(t) {
    return t.getUTCDay();
  }

  function Av(t, n) {
    return my(jg.count(iy(t) - 1, t), n, 2);
  }

  function Tv(t, n) {
    return my(t.getUTCFullYear() % 100, n, 2);
  }

  function Sv(t, n) {
    return my((t = xv(t)).getUTCFullYear() % 100, n, 2);
  }

  function Ev(t, n) {
    return my(t.getUTCFullYear() % 1e4, n, 4);
  }

  function kv(t, n) {
    var e = t.getUTCDay();
    return my((t = e >= 4 || 0 === e ? Gg(t) : Gg.ceil(t)).getUTCFullYear() % 1e4, n, 4);
  }

  function Nv() {
    return "+0000";
  }

  function Cv() {
    return "%";
  }

  function Pv(t) {
    return +t;
  }

  function zv(t) {
    return Math.floor(+t / 1e3);
  }

  function Dv(n) {
    return gy = py(n), t.timeFormat = gy.format, t.timeParse = gy.parse, t.utcFormat = gy.utcFormat, t.utcParse = gy.utcParse, gy;
  }

  t.timeFormat = void 0, t.timeParse = void 0, t.utcFormat = void 0, t.utcParse = void 0, Dv({
    dateTime: "%x, %X",
    date: "%-m/%-d/%Y",
    time: "%-I:%M:%S %p",
    periods: ["AM", "PM"],
    days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  });
  var qv = "%Y-%m-%dT%H:%M:%S.%LZ";
  var Rv = Date.prototype.toISOString ? function (t) {
    return t.toISOString();
  } : t.utcFormat(qv);
  var Fv = +new Date("2000-01-01T00:00:00.000Z") ? function (t) {
    var n = new Date(t);
    return isNaN(n) ? null : n;
  } : t.utcParse(qv);

  function Ov(t) {
    return new Date(t);
  }

  function Iv(t) {
    return t instanceof Date ? +t : +new Date(+t);
  }

  function Uv(t, n, e, r, i, o, a, u, c, f) {
    var s = Np(),
        l = s.invert,
        h = s.domain,
        d = f(".%L"),
        p = f(":%S"),
        g = f("%I:%M"),
        y = f("%I %p"),
        v = f("%a %d"),
        _ = f("%b %d"),
        b = f("%B"),
        m = f("%Y");

    function x(t) {
      return (c(t) < t ? d : u(t) < t ? p : a(t) < t ? g : o(t) < t ? y : r(t) < t ? i(t) < t ? v : _ : e(t) < t ? b : m)(t);
    }

    return s.invert = function (t) {
      return new Date(l(t));
    }, s.domain = function (t) {
      return arguments.length ? h(Array.from(t, Iv)) : h().map(Ov);
    }, s.ticks = function (n) {
      var e = h();
      return t(e[0], e[e.length - 1], null == n ? 10 : n);
    }, s.tickFormat = function (t, n) {
      return null == n ? x : f(n);
    }, s.nice = function (t) {
      var e = h();
      return t && "function" == typeof t.range || (t = n(e[0], e[e.length - 1], null == t ? 10 : t)), t ? h(zp(e, t)) : s;
    }, s.copy = function () {
      return Ep(s, Uv(t, n, e, r, i, o, a, u, c, f));
    }, s;
  }

  function Bv() {
    var t,
        n,
        e,
        r,
        i,
        o = 0,
        a = 1,
        u = Mp,
        c = !1;

    function f(n) {
      return null == n || isNaN(n = +n) ? i : u(0 === e ? .5 : (n = (r(n) - t) * e, c ? Math.max(0, Math.min(1, n)) : n));
    }

    function s(t) {
      return function (n) {
        var _n55;

        var e, r;
        return arguments.length ? ((_n55 = _slicedToArray(n, 2), e = _n55[0], r = _n55[1]), u = t(e, r), f) : [u(0), u(1)];
      };
    }

    return f.domain = function (i) {
      var _i25;

      return arguments.length ? ((_i25 = _slicedToArray(i, 2), o = _i25[0], a = _i25[1]), t = r(o = +o), n = r(a = +a), e = t === n ? 0 : 1 / (n - t), f) : [o, a];
    }, f.clamp = function (t) {
      return arguments.length ? (c = !!t, f) : c;
    }, f.interpolator = function (t) {
      return arguments.length ? (u = t, f) : u;
    }, f.range = s(kr), f.rangeRound = s(Nr), f.unknown = function (t) {
      return arguments.length ? (i = t, f) : i;
    }, function (i) {
      return r = i, t = i(o), n = i(a), e = t === n ? 0 : 1 / (n - t), f;
    };
  }

  function Yv(t, n) {
    return n.domain(t.domain()).interpolator(t.interpolator()).clamp(t.clamp()).unknown(t.unknown());
  }

  function Lv() {
    var t = Gp(Bv());
    return t.copy = function () {
      return Yv(t, Lv()).exponent(t.exponent());
    }, yp.apply(t, arguments);
  }

  function jv() {
    var t,
        n,
        e,
        r,
        i,
        o,
        a,
        u = 0,
        c = .5,
        f = 1,
        s = 1,
        l = Mp,
        h = !1;

    function d(t) {
      return isNaN(t = +t) ? a : (t = .5 + ((t = +o(t)) - n) * (s * t < s * n ? r : i), l(h ? Math.max(0, Math.min(1, t)) : t));
    }

    function p(t) {
      return function (n) {
        var _n56;

        var e, r, i;
        return arguments.length ? ((_n56 = _slicedToArray(n, 3), e = _n56[0], r = _n56[1], i = _n56[2]), l = $r(t, [e, r, i]), d) : [l(0), l(.5), l(1)];
      };
    }

    return d.domain = function (a) {
      var _a17;

      return arguments.length ? ((_a17 = _slicedToArray(a, 3), u = _a17[0], c = _a17[1], f = _a17[2]), t = o(u = +u), n = o(c = +c), e = o(f = +f), r = t === n ? 0 : .5 / (n - t), i = n === e ? 0 : .5 / (e - n), s = n < t ? -1 : 1, d) : [u, c, f];
    }, d.clamp = function (t) {
      return arguments.length ? (h = !!t, d) : h;
    }, d.interpolator = function (t) {
      return arguments.length ? (l = t, d) : l;
    }, d.range = p(kr), d.rangeRound = p(Nr), d.unknown = function (t) {
      return arguments.length ? (a = t, d) : a;
    }, function (a) {
      return o = a, t = a(u), n = a(c), e = a(f), r = t === n ? 0 : .5 / (n - t), i = n === e ? 0 : .5 / (e - n), s = n < t ? -1 : 1, d;
    };
  }

  function Hv() {
    var t = Gp(jv());
    return t.copy = function () {
      return Yv(t, Hv()).exponent(t.exponent());
    }, yp.apply(t, arguments);
  }

  function Xv(t) {
    for (var n = t.length / 6 | 0, e = new Array(n), r = 0; r < n;) {
      e[r] = "#" + t.slice(6 * r, 6 * ++r);
    }

    return e;
  }

  var Gv = Xv("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"),
      Vv = Xv("7fc97fbeaed4fdc086ffff99386cb0f0027fbf5b17666666"),
      $v = Xv("1b9e77d95f027570b3e7298a66a61ee6ab02a6761d666666"),
      Wv = Xv("a6cee31f78b4b2df8a33a02cfb9a99e31a1cfdbf6fff7f00cab2d66a3d9affff99b15928"),
      Zv = Xv("fbb4aeb3cde3ccebc5decbe4fed9a6ffffcce5d8bdfddaecf2f2f2"),
      Kv = Xv("b3e2cdfdcdaccbd5e8f4cae4e6f5c9fff2aef1e2cccccccc"),
      Qv = Xv("e41a1c377eb84daf4a984ea3ff7f00ffff33a65628f781bf999999"),
      Jv = Xv("66c2a5fc8d628da0cbe78ac3a6d854ffd92fe5c494b3b3b3"),
      t_ = Xv("8dd3c7ffffb3bebadafb807280b1d3fdb462b3de69fccde5d9d9d9bc80bdccebc5ffed6f"),
      n_ = Xv("4e79a7f28e2ce1575976b7b259a14fedc949af7aa1ff9da79c755fbab0ab"),
      e_ = function e_(t) {
    return vr(t[t.length - 1]);
  },
      r_ = new Array(3).concat("d8b365f5f5f55ab4ac", "a6611adfc27d80cdc1018571", "a6611adfc27df5f5f580cdc1018571", "8c510ad8b365f6e8c3c7eae55ab4ac01665e", "8c510ad8b365f6e8c3f5f5f5c7eae55ab4ac01665e", "8c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e", "8c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e", "5430058c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e003c30", "5430058c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e003c30").map(Xv),
      i_ = e_(r_),
      o_ = new Array(3).concat("af8dc3f7f7f77fbf7b", "7b3294c2a5cfa6dba0008837", "7b3294c2a5cff7f7f7a6dba0008837", "762a83af8dc3e7d4e8d9f0d37fbf7b1b7837", "762a83af8dc3e7d4e8f7f7f7d9f0d37fbf7b1b7837", "762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b7837", "762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b7837", "40004b762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b783700441b", "40004b762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b783700441b").map(Xv),
      a_ = e_(o_),
      u_ = new Array(3).concat("e9a3c9f7f7f7a1d76a", "d01c8bf1b6dab8e1864dac26", "d01c8bf1b6daf7f7f7b8e1864dac26", "c51b7de9a3c9fde0efe6f5d0a1d76a4d9221", "c51b7de9a3c9fde0eff7f7f7e6f5d0a1d76a4d9221", "c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221", "c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221", "8e0152c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221276419", "8e0152c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221276419").map(Xv),
      c_ = e_(u_),
      f_ = new Array(3).concat("998ec3f7f7f7f1a340", "5e3c99b2abd2fdb863e66101", "5e3c99b2abd2f7f7f7fdb863e66101", "542788998ec3d8daebfee0b6f1a340b35806", "542788998ec3d8daebf7f7f7fee0b6f1a340b35806", "5427888073acb2abd2d8daebfee0b6fdb863e08214b35806", "5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b35806", "2d004b5427888073acb2abd2d8daebfee0b6fdb863e08214b358067f3b08", "2d004b5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b358067f3b08").map(Xv),
      s_ = e_(f_),
      l_ = new Array(3).concat("ef8a62f7f7f767a9cf", "ca0020f4a58292c5de0571b0", "ca0020f4a582f7f7f792c5de0571b0", "b2182bef8a62fddbc7d1e5f067a9cf2166ac", "b2182bef8a62fddbc7f7f7f7d1e5f067a9cf2166ac", "b2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac", "b2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac", "67001fb2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac053061", "67001fb2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac053061").map(Xv),
      h_ = e_(l_),
      d_ = new Array(3).concat("ef8a62ffffff999999", "ca0020f4a582bababa404040", "ca0020f4a582ffffffbababa404040", "b2182bef8a62fddbc7e0e0e09999994d4d4d", "b2182bef8a62fddbc7ffffffe0e0e09999994d4d4d", "b2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d", "b2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d", "67001fb2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d1a1a1a", "67001fb2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d1a1a1a").map(Xv),
      p_ = e_(d_),
      g_ = new Array(3).concat("fc8d59ffffbf91bfdb", "d7191cfdae61abd9e92c7bb6", "d7191cfdae61ffffbfabd9e92c7bb6", "d73027fc8d59fee090e0f3f891bfdb4575b4", "d73027fc8d59fee090ffffbfe0f3f891bfdb4575b4", "d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4", "d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4", "a50026d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4313695", "a50026d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4313695").map(Xv),
      y_ = e_(g_),
      v_ = new Array(3).concat("fc8d59ffffbf91cf60", "d7191cfdae61a6d96a1a9641", "d7191cfdae61ffffbfa6d96a1a9641", "d73027fc8d59fee08bd9ef8b91cf601a9850", "d73027fc8d59fee08bffffbfd9ef8b91cf601a9850", "d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850", "d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850", "a50026d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850006837", "a50026d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850006837").map(Xv),
      __ = e_(v_),
      b_ = new Array(3).concat("fc8d59ffffbf99d594", "d7191cfdae61abdda42b83ba", "d7191cfdae61ffffbfabdda42b83ba", "d53e4ffc8d59fee08be6f59899d5943288bd", "d53e4ffc8d59fee08bffffbfe6f59899d5943288bd", "d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd", "d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd", "9e0142d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd5e4fa2", "9e0142d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd5e4fa2").map(Xv),
      m_ = e_(b_),
      x_ = new Array(3).concat("e5f5f999d8c92ca25f", "edf8fbb2e2e266c2a4238b45", "edf8fbb2e2e266c2a42ca25f006d2c", "edf8fbccece699d8c966c2a42ca25f006d2c", "edf8fbccece699d8c966c2a441ae76238b45005824", "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45005824", "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45006d2c00441b").map(Xv),
      w_ = e_(x_),
      M_ = new Array(3).concat("e0ecf49ebcda8856a7", "edf8fbb3cde38c96c688419d", "edf8fbb3cde38c96c68856a7810f7c", "edf8fbbfd3e69ebcda8c96c68856a7810f7c", "edf8fbbfd3e69ebcda8c96c68c6bb188419d6e016b", "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d6e016b", "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d810f7c4d004b").map(Xv),
      A_ = e_(M_),
      T_ = new Array(3).concat("e0f3dba8ddb543a2ca", "f0f9e8bae4bc7bccc42b8cbe", "f0f9e8bae4bc7bccc443a2ca0868ac", "f0f9e8ccebc5a8ddb57bccc443a2ca0868ac", "f0f9e8ccebc5a8ddb57bccc44eb3d32b8cbe08589e", "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe08589e", "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe0868ac084081").map(Xv),
      S_ = e_(T_),
      E_ = new Array(3).concat("fee8c8fdbb84e34a33", "fef0d9fdcc8afc8d59d7301f", "fef0d9fdcc8afc8d59e34a33b30000", "fef0d9fdd49efdbb84fc8d59e34a33b30000", "fef0d9fdd49efdbb84fc8d59ef6548d7301f990000", "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301f990000", "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301fb300007f0000").map(Xv),
      k_ = e_(E_),
      N_ = new Array(3).concat("ece2f0a6bddb1c9099", "f6eff7bdc9e167a9cf02818a", "f6eff7bdc9e167a9cf1c9099016c59", "f6eff7d0d1e6a6bddb67a9cf1c9099016c59", "f6eff7d0d1e6a6bddb67a9cf3690c002818a016450", "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016450", "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016c59014636").map(Xv),
      C_ = e_(N_),
      P_ = new Array(3).concat("ece7f2a6bddb2b8cbe", "f1eef6bdc9e174a9cf0570b0", "f1eef6bdc9e174a9cf2b8cbe045a8d", "f1eef6d0d1e6a6bddb74a9cf2b8cbe045a8d", "f1eef6d0d1e6a6bddb74a9cf3690c00570b0034e7b", "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0034e7b", "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0045a8d023858").map(Xv),
      z_ = e_(P_),
      D_ = new Array(3).concat("e7e1efc994c7dd1c77", "f1eef6d7b5d8df65b0ce1256", "f1eef6d7b5d8df65b0dd1c77980043", "f1eef6d4b9dac994c7df65b0dd1c77980043", "f1eef6d4b9dac994c7df65b0e7298ace125691003f", "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125691003f", "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125698004367001f").map(Xv),
      q_ = e_(D_),
      R_ = new Array(3).concat("fde0ddfa9fb5c51b8a", "feebe2fbb4b9f768a1ae017e", "feebe2fbb4b9f768a1c51b8a7a0177", "feebe2fcc5c0fa9fb5f768a1c51b8a7a0177", "feebe2fcc5c0fa9fb5f768a1dd3497ae017e7a0177", "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a0177", "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a017749006a").map(Xv),
      F_ = e_(R_),
      O_ = new Array(3).concat("edf8b17fcdbb2c7fb8", "ffffcca1dab441b6c4225ea8", "ffffcca1dab441b6c42c7fb8253494", "ffffccc7e9b47fcdbb41b6c42c7fb8253494", "ffffccc7e9b47fcdbb41b6c41d91c0225ea80c2c84", "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea80c2c84", "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea8253494081d58").map(Xv),
      I_ = e_(O_),
      U_ = new Array(3).concat("f7fcb9addd8e31a354", "ffffccc2e69978c679238443", "ffffccc2e69978c67931a354006837", "ffffccd9f0a3addd8e78c67931a354006837", "ffffccd9f0a3addd8e78c67941ab5d238443005a32", "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443005a32", "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443006837004529").map(Xv),
      B_ = e_(U_),
      Y_ = new Array(3).concat("fff7bcfec44fd95f0e", "ffffd4fed98efe9929cc4c02", "ffffd4fed98efe9929d95f0e993404", "ffffd4fee391fec44ffe9929d95f0e993404", "ffffd4fee391fec44ffe9929ec7014cc4c028c2d04", "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c028c2d04", "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c02993404662506").map(Xv),
      L_ = e_(Y_),
      j_ = new Array(3).concat("ffeda0feb24cf03b20", "ffffb2fecc5cfd8d3ce31a1c", "ffffb2fecc5cfd8d3cf03b20bd0026", "ffffb2fed976feb24cfd8d3cf03b20bd0026", "ffffb2fed976feb24cfd8d3cfc4e2ae31a1cb10026", "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cb10026", "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cbd0026800026").map(Xv),
      H_ = e_(j_),
      X_ = new Array(3).concat("deebf79ecae13182bd", "eff3ffbdd7e76baed62171b5", "eff3ffbdd7e76baed63182bd08519c", "eff3ffc6dbef9ecae16baed63182bd08519c", "eff3ffc6dbef9ecae16baed64292c62171b5084594", "f7fbffdeebf7c6dbef9ecae16baed64292c62171b5084594", "f7fbffdeebf7c6dbef9ecae16baed64292c62171b508519c08306b").map(Xv),
      G_ = e_(X_),
      V_ = new Array(3).concat("e5f5e0a1d99b31a354", "edf8e9bae4b374c476238b45", "edf8e9bae4b374c47631a354006d2c", "edf8e9c7e9c0a1d99b74c47631a354006d2c", "edf8e9c7e9c0a1d99b74c47641ab5d238b45005a32", "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45005a32", "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45006d2c00441b").map(Xv),
      $_ = e_(V_),
      W_ = new Array(3).concat("f0f0f0bdbdbd636363", "f7f7f7cccccc969696525252", "f7f7f7cccccc969696636363252525", "f7f7f7d9d9d9bdbdbd969696636363252525", "f7f7f7d9d9d9bdbdbd969696737373525252252525", "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525", "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525000000").map(Xv),
      Z_ = e_(W_),
      K_ = new Array(3).concat("efedf5bcbddc756bb1", "f2f0f7cbc9e29e9ac86a51a3", "f2f0f7cbc9e29e9ac8756bb154278f", "f2f0f7dadaebbcbddc9e9ac8756bb154278f", "f2f0f7dadaebbcbddc9e9ac8807dba6a51a34a1486", "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a34a1486", "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a354278f3f007d").map(Xv),
      Q_ = e_(K_),
      J_ = new Array(3).concat("fee0d2fc9272de2d26", "fee5d9fcae91fb6a4acb181d", "fee5d9fcae91fb6a4ade2d26a50f15", "fee5d9fcbba1fc9272fb6a4ade2d26a50f15", "fee5d9fcbba1fc9272fb6a4aef3b2ccb181d99000d", "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181d99000d", "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181da50f1567000d").map(Xv),
      tb = e_(J_),
      nb = new Array(3).concat("fee6cefdae6be6550d", "feeddefdbe85fd8d3cd94701", "feeddefdbe85fd8d3ce6550da63603", "feeddefdd0a2fdae6bfd8d3ce6550da63603", "feeddefdd0a2fdae6bfd8d3cf16913d948018c2d04", "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d948018c2d04", "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d94801a636037f2704").map(Xv),
      eb = e_(nb);

  var rb = Vr(or(300, .5, 0), or(-240, .5, 1)),
      ib = Vr(or(-100, .75, .35), or(80, 1.5, .8)),
      ob = Vr(or(260, .75, .35), or(80, 1.5, .8)),
      ab = or();
  var ub = we(),
      cb = Math.PI / 3,
      fb = 2 * Math.PI / 3;

  function sb(t) {
    var n = t.length;
    return function (e) {
      return t[Math.max(0, Math.min(n - 1, Math.floor(e * n)))];
    };
  }

  var lb = sb(Xv("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725")),
      hb = sb(Xv("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf")),
      db = sb(Xv("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4")),
      pb = sb(Xv("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"));

  function gb(t) {
    return function () {
      return t;
    };
  }

  var yb = Math.abs,
      vb = Math.atan2,
      _b = Math.cos,
      bb = Math.max,
      mb = Math.min,
      xb = Math.sin,
      wb = Math.sqrt,
      Mb = 1e-12,
      Ab = Math.PI,
      Tb = Ab / 2,
      Sb = 2 * Ab;

  function Eb(t) {
    return t > 1 ? 0 : t < -1 ? Ab : Math.acos(t);
  }

  function kb(t) {
    return t >= 1 ? Tb : t <= -1 ? -Tb : Math.asin(t);
  }

  function Nb(t) {
    return t.innerRadius;
  }

  function Cb(t) {
    return t.outerRadius;
  }

  function Pb(t) {
    return t.startAngle;
  }

  function zb(t) {
    return t.endAngle;
  }

  function Db(t) {
    return t && t.padAngle;
  }

  function qb(t, n, e, r, i, o, a, u) {
    var c = e - t,
        f = r - n,
        s = a - i,
        l = u - o,
        h = l * c - s * f;
    if (!(h * h < Mb)) return [t + (h = (s * (n - o) - l * (t - i)) / h) * c, n + h * f];
  }

  function Rb(t, n, e, r, i, o, a) {
    var u = t - e,
        c = n - r,
        f = (a ? o : -o) / wb(u * u + c * c),
        s = f * c,
        l = -f * u,
        h = t + s,
        d = n + l,
        p = e + s,
        g = r + l,
        y = (h + p) / 2,
        v = (d + g) / 2,
        _ = p - h,
        b = g - d,
        m = _ * _ + b * b,
        x = i - o,
        w = h * g - p * d,
        M = (b < 0 ? -1 : 1) * wb(bb(0, x * x * m - w * w)),
        A = (w * b - _ * M) / m,
        T = (-w * _ - b * M) / m,
        S = (w * b + _ * M) / m,
        E = (-w * _ + b * M) / m,
        k = A - y,
        N = T - v,
        C = S - y,
        P = E - v;

    return k * k + N * N > C * C + P * P && (A = S, T = E), {
      cx: A,
      cy: T,
      x01: -s,
      y01: -l,
      x11: A * (i / x - 1),
      y11: T * (i / x - 1)
    };
  }

  var Fb = Array.prototype.slice;

  function Ob(t) {
    return "object" == _typeof(t) && "length" in t ? t : Array.from(t);
  }

  function Ib(t) {
    this._context = t;
  }

  function Ub(t) {
    return new Ib(t);
  }

  function Bb(t) {
    return t[0];
  }

  function Yb(t) {
    return t[1];
  }

  function Lb(t, n) {
    var e = gb(!0),
        r = null,
        i = Ub,
        o = null;

    function a(a) {
      var u,
          c,
          f,
          s = (a = Ob(a)).length,
          l = !1;

      for (null == r && (o = i(f = pa())), u = 0; u <= s; ++u) {
        !(u < s && e(c = a[u], u, a)) === l && ((l = !l) ? o.lineStart() : o.lineEnd()), l && o.point(+t(c, u, a), +n(c, u, a));
      }

      if (f) return o = null, f + "" || null;
    }

    return t = "function" == typeof t ? t : void 0 === t ? Bb : gb(t), n = "function" == typeof n ? n : void 0 === n ? Yb : gb(n), a.x = function (n) {
      return arguments.length ? (t = "function" == typeof n ? n : gb(+n), a) : t;
    }, a.y = function (t) {
      return arguments.length ? (n = "function" == typeof t ? t : gb(+t), a) : n;
    }, a.defined = function (t) {
      return arguments.length ? (e = "function" == typeof t ? t : gb(!!t), a) : e;
    }, a.curve = function (t) {
      return arguments.length ? (i = t, null != r && (o = i(r)), a) : i;
    }, a.context = function (t) {
      return arguments.length ? (null == t ? r = o = null : o = i(r = t), a) : r;
    }, a;
  }

  function jb(t, n, e) {
    var r = null,
        i = gb(!0),
        o = null,
        a = Ub,
        u = null;

    function c(c) {
      var f,
          s,
          l,
          h,
          d,
          p = (c = Ob(c)).length,
          g = !1,
          y = new Array(p),
          v = new Array(p);

      for (null == o && (u = a(d = pa())), f = 0; f <= p; ++f) {
        if (!(f < p && i(h = c[f], f, c)) === g) if (g = !g) s = f, u.areaStart(), u.lineStart();else {
          for (u.lineEnd(), u.lineStart(), l = f - 1; l >= s; --l) {
            u.point(y[l], v[l]);
          }

          u.lineEnd(), u.areaEnd();
        }
        g && (y[f] = +t(h, f, c), v[f] = +n(h, f, c), u.point(r ? +r(h, f, c) : y[f], e ? +e(h, f, c) : v[f]));
      }

      if (d) return u = null, d + "" || null;
    }

    function f() {
      return Lb().defined(i).curve(a).context(o);
    }

    return t = "function" == typeof t ? t : void 0 === t ? Bb : gb(+t), n = "function" == typeof n ? n : gb(void 0 === n ? 0 : +n), e = "function" == typeof e ? e : void 0 === e ? Yb : gb(+e), c.x = function (n) {
      return arguments.length ? (t = "function" == typeof n ? n : gb(+n), r = null, c) : t;
    }, c.x0 = function (n) {
      return arguments.length ? (t = "function" == typeof n ? n : gb(+n), c) : t;
    }, c.x1 = function (t) {
      return arguments.length ? (r = null == t ? null : "function" == typeof t ? t : gb(+t), c) : r;
    }, c.y = function (t) {
      return arguments.length ? (n = "function" == typeof t ? t : gb(+t), e = null, c) : n;
    }, c.y0 = function (t) {
      return arguments.length ? (n = "function" == typeof t ? t : gb(+t), c) : n;
    }, c.y1 = function (t) {
      return arguments.length ? (e = null == t ? null : "function" == typeof t ? t : gb(+t), c) : e;
    }, c.lineX0 = c.lineY0 = function () {
      return f().x(t).y(n);
    }, c.lineY1 = function () {
      return f().x(t).y(e);
    }, c.lineX1 = function () {
      return f().x(r).y(n);
    }, c.defined = function (t) {
      return arguments.length ? (i = "function" == typeof t ? t : gb(!!t), c) : i;
    }, c.curve = function (t) {
      return arguments.length ? (a = t, null != o && (u = a(o)), c) : a;
    }, c.context = function (t) {
      return arguments.length ? (null == t ? o = u = null : u = a(o = t), c) : o;
    }, c;
  }

  function Hb(t, n) {
    return n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN;
  }

  function Xb(t) {
    return t;
  }

  Ib.prototype = {
    areaStart: function areaStart() {
      this._line = 0;
    },
    areaEnd: function areaEnd() {
      this._line = NaN;
    },
    lineStart: function lineStart() {
      this._point = 0;
    },
    lineEnd: function lineEnd() {
      (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line;
    },
    point: function point(t, n) {
      switch (t = +t, n = +n, this._point) {
        case 0:
          this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
          break;

        case 1:
          this._point = 2;

        default:
          this._context.lineTo(t, n);

      }
    }
  };
  var Gb = $b(Ub);

  function Vb(t) {
    this._curve = t;
  }

  function $b(t) {
    function n(n) {
      return new Vb(t(n));
    }

    return n._curve = t, n;
  }

  function Wb(t) {
    var n = t.curve;
    return t.angle = t.x, delete t.x, t.radius = t.y, delete t.y, t.curve = function (t) {
      return arguments.length ? n($b(t)) : n()._curve;
    }, t;
  }

  function Zb() {
    return Wb(Lb().curve(Gb));
  }

  function Kb() {
    var t = jb().curve(Gb),
        n = t.curve,
        e = t.lineX0,
        r = t.lineX1,
        i = t.lineY0,
        o = t.lineY1;
    return t.angle = t.x, delete t.x, t.startAngle = t.x0, delete t.x0, t.endAngle = t.x1, delete t.x1, t.radius = t.y, delete t.y, t.innerRadius = t.y0, delete t.y0, t.outerRadius = t.y1, delete t.y1, t.lineStartAngle = function () {
      return Wb(e());
    }, delete t.lineX0, t.lineEndAngle = function () {
      return Wb(r());
    }, delete t.lineX1, t.lineInnerRadius = function () {
      return Wb(i());
    }, delete t.lineY0, t.lineOuterRadius = function () {
      return Wb(o());
    }, delete t.lineY1, t.curve = function (t) {
      return arguments.length ? n($b(t)) : n()._curve;
    }, t;
  }

  function Qb(t, n) {
    return [(n = +n) * Math.cos(t -= Math.PI / 2), n * Math.sin(t)];
  }

  function Jb(t) {
    return t.source;
  }

  function tm(t) {
    return t.target;
  }

  function nm(t) {
    var n = Jb,
        e = tm,
        r = Bb,
        i = Yb,
        o = null;

    function a() {
      var a,
          u = Fb.call(arguments),
          c = n.apply(this, u),
          f = e.apply(this, u);
      if (o || (o = a = pa()), t(o, +r.apply(this, (u[0] = c, u)), +i.apply(this, u), +r.apply(this, (u[0] = f, u)), +i.apply(this, u)), a) return o = null, a + "" || null;
    }

    return a.source = function (t) {
      return arguments.length ? (n = t, a) : n;
    }, a.target = function (t) {
      return arguments.length ? (e = t, a) : e;
    }, a.x = function (t) {
      return arguments.length ? (r = "function" == typeof t ? t : gb(+t), a) : r;
    }, a.y = function (t) {
      return arguments.length ? (i = "function" == typeof t ? t : gb(+t), a) : i;
    }, a.context = function (t) {
      return arguments.length ? (o = null == t ? null : t, a) : o;
    }, a;
  }

  function em(t, n, e, r, i) {
    t.moveTo(n, e), t.bezierCurveTo(n = (n + r) / 2, e, n, i, r, i);
  }

  function rm(t, n, e, r, i) {
    t.moveTo(n, e), t.bezierCurveTo(n, e = (e + i) / 2, r, e, r, i);
  }

  function im(t, n, e, r, i) {
    var o = Qb(n, e),
        a = Qb(n, e = (e + i) / 2),
        u = Qb(r, e),
        c = Qb(r, i);
    t.moveTo(o[0], o[1]), t.bezierCurveTo(a[0], a[1], u[0], u[1], c[0], c[1]);
  }

  Vb.prototype = {
    areaStart: function areaStart() {
      this._curve.areaStart();
    },
    areaEnd: function areaEnd() {
      this._curve.areaEnd();
    },
    lineStart: function lineStart() {
      this._curve.lineStart();
    },
    lineEnd: function lineEnd() {
      this._curve.lineEnd();
    },
    point: function point(t, n) {
      this._curve.point(n * Math.sin(t), n * -Math.cos(t));
    }
  };

  var om = {
    draw: function draw(t, n) {
      var e = Math.sqrt(n / Ab);
      t.moveTo(e, 0), t.arc(0, 0, e, 0, Sb);
    }
  },
      am = {
    draw: function draw(t, n) {
      var e = Math.sqrt(n / 5) / 2;
      t.moveTo(-3 * e, -e), t.lineTo(-e, -e), t.lineTo(-e, -3 * e), t.lineTo(e, -3 * e), t.lineTo(e, -e), t.lineTo(3 * e, -e), t.lineTo(3 * e, e), t.lineTo(e, e), t.lineTo(e, 3 * e), t.lineTo(-e, 3 * e), t.lineTo(-e, e), t.lineTo(-3 * e, e), t.closePath();
    }
  },
      um = Math.sqrt(1 / 3),
      cm = 2 * um,
      fm = {
    draw: function draw(t, n) {
      var e = Math.sqrt(n / cm),
          r = e * um;
      t.moveTo(0, -e), t.lineTo(r, 0), t.lineTo(0, e), t.lineTo(-r, 0), t.closePath();
    }
  },
      sm = Math.sin(Ab / 10) / Math.sin(7 * Ab / 10),
      lm = Math.sin(Sb / 10) * sm,
      hm = -Math.cos(Sb / 10) * sm,
      dm = {
    draw: function draw(t, n) {
      var e = Math.sqrt(.8908130915292852 * n),
          r = lm * e,
          i = hm * e;
      t.moveTo(0, -e), t.lineTo(r, i);

      for (var o = 1; o < 5; ++o) {
        var a = Sb * o / 5,
            u = Math.cos(a),
            c = Math.sin(a);
        t.lineTo(c * e, -u * e), t.lineTo(u * r - c * i, c * r + u * i);
      }

      t.closePath();
    }
  },
      pm = {
    draw: function draw(t, n) {
      var e = Math.sqrt(n),
          r = -e / 2;
      t.rect(r, r, e, e);
    }
  },
      gm = Math.sqrt(3),
      ym = {
    draw: function draw(t, n) {
      var e = -Math.sqrt(n / (3 * gm));
      t.moveTo(0, 2 * e), t.lineTo(-gm * e, -e), t.lineTo(gm * e, -e), t.closePath();
    }
  },
      vm = -.5,
      _m = Math.sqrt(3) / 2,
      bm = 1 / Math.sqrt(12),
      mm = 3 * (bm / 2 + 1),
      xm = {
    draw: function draw(t, n) {
      var e = Math.sqrt(n / mm),
          r = e / 2,
          i = e * bm,
          o = r,
          a = e * bm + e,
          u = -o,
          c = a;
      t.moveTo(r, i), t.lineTo(o, a), t.lineTo(u, c), t.lineTo(vm * r - _m * i, _m * r + vm * i), t.lineTo(vm * o - _m * a, _m * o + vm * a), t.lineTo(vm * u - _m * c, _m * u + vm * c), t.lineTo(vm * r + _m * i, vm * i - _m * r), t.lineTo(vm * o + _m * a, vm * a - _m * o), t.lineTo(vm * u + _m * c, vm * c - _m * u), t.closePath();
    }
  },
      wm = [om, am, fm, pm, dm, ym, xm];

  function Mm() {}

  function Am(t, n, e) {
    t._context.bezierCurveTo((2 * t._x0 + t._x1) / 3, (2 * t._y0 + t._y1) / 3, (t._x0 + 2 * t._x1) / 3, (t._y0 + 2 * t._y1) / 3, (t._x0 + 4 * t._x1 + n) / 6, (t._y0 + 4 * t._y1 + e) / 6);
  }

  function Tm(t) {
    this._context = t;
  }

  function Sm(t) {
    this._context = t;
  }

  function Em(t) {
    this._context = t;
  }

  Tm.prototype = {
    areaStart: function areaStart() {
      this._line = 0;
    },
    areaEnd: function areaEnd() {
      this._line = NaN;
    },
    lineStart: function lineStart() {
      this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
    },
    lineEnd: function lineEnd() {
      switch (this._point) {
        case 3:
          Am(this, this._x1, this._y1);

        case 2:
          this._context.lineTo(this._x1, this._y1);

      }

      (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line;
    },
    point: function point(t, n) {
      switch (t = +t, n = +n, this._point) {
        case 0:
          this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
          break;

        case 1:
          this._point = 2;
          break;

        case 2:
          this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);

        default:
          Am(this, t, n);
      }

      this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = n;
    }
  }, Sm.prototype = {
    areaStart: Mm,
    areaEnd: Mm,
    lineStart: function lineStart() {
      this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN, this._point = 0;
    },
    lineEnd: function lineEnd() {
      switch (this._point) {
        case 1:
          this._context.moveTo(this._x2, this._y2), this._context.closePath();
          break;

        case 2:
          this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3), this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3), this._context.closePath();
          break;

        case 3:
          this.point(this._x2, this._y2), this.point(this._x3, this._y3), this.point(this._x4, this._y4);
      }
    },
    point: function point(t, n) {
      switch (t = +t, n = +n, this._point) {
        case 0:
          this._point = 1, this._x2 = t, this._y2 = n;
          break;

        case 1:
          this._point = 2, this._x3 = t, this._y3 = n;
          break;

        case 2:
          this._point = 3, this._x4 = t, this._y4 = n, this._context.moveTo((this._x0 + 4 * this._x1 + t) / 6, (this._y0 + 4 * this._y1 + n) / 6);
          break;

        default:
          Am(this, t, n);
      }

      this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = n;
    }
  }, Em.prototype = {
    areaStart: function areaStart() {
      this._line = 0;
    },
    areaEnd: function areaEnd() {
      this._line = NaN;
    },
    lineStart: function lineStart() {
      this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
    },
    lineEnd: function lineEnd() {
      (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(), this._line = 1 - this._line;
    },
    point: function point(t, n) {
      switch (t = +t, n = +n, this._point) {
        case 0:
          this._point = 1;
          break;

        case 1:
          this._point = 2;
          break;

        case 2:
          this._point = 3;
          var e = (this._x0 + 4 * this._x1 + t) / 6,
              r = (this._y0 + 4 * this._y1 + n) / 6;
          this._line ? this._context.lineTo(e, r) : this._context.moveTo(e, r);
          break;

        case 3:
          this._point = 4;

        default:
          Am(this, t, n);
      }

      this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = n;
    }
  };

  var km = /*#__PURE__*/function () {
    function km(t, n) {
      _classCallCheck(this, km);

      this._context = t, this._x = n;
    }

    _createClass(km, [{
      key: "areaStart",
      value: function areaStart() {
        this._line = 0;
      }
    }, {
      key: "areaEnd",
      value: function areaEnd() {
        this._line = NaN;
      }
    }, {
      key: "lineStart",
      value: function lineStart() {
        this._point = 0;
      }
    }, {
      key: "lineEnd",
      value: function lineEnd() {
        (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line;
      }
    }, {
      key: "point",
      value: function point(t, n) {
        switch (t = +t, n = +n, this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
            break;

          case 1:
            this._point = 2;

          default:
            this._x ? this._context.bezierCurveTo(this._x0 = (this._x0 + t) / 2, this._y0, this._x0, n, t, n) : this._context.bezierCurveTo(this._x0, this._y0 = (this._y0 + n) / 2, t, this._y0, t, n);
        }

        this._x0 = t, this._y0 = n;
      }
    }]);

    return km;
  }();

  function Nm(t, n) {
    this._basis = new Tm(t), this._beta = n;
  }

  Nm.prototype = {
    lineStart: function lineStart() {
      this._x = [], this._y = [], this._basis.lineStart();
    },
    lineEnd: function lineEnd() {
      var t = this._x,
          n = this._y,
          e = t.length - 1;
      if (e > 0) for (var r, i = t[0], o = n[0], a = t[e] - i, u = n[e] - o, c = -1; ++c <= e;) {
        r = c / e, this._basis.point(this._beta * t[c] + (1 - this._beta) * (i + r * a), this._beta * n[c] + (1 - this._beta) * (o + r * u));
      }
      this._x = this._y = null, this._basis.lineEnd();
    },
    point: function point(t, n) {
      this._x.push(+t), this._y.push(+n);
    }
  };

  var Cm = function t(n) {
    function e(t) {
      return 1 === n ? new Tm(t) : new Nm(t, n);
    }

    return e.beta = function (n) {
      return t(+n);
    }, e;
  }(.85);

  function Pm(t, n, e) {
    t._context.bezierCurveTo(t._x1 + t._k * (t._x2 - t._x0), t._y1 + t._k * (t._y2 - t._y0), t._x2 + t._k * (t._x1 - n), t._y2 + t._k * (t._y1 - e), t._x2, t._y2);
  }

  function zm(t, n) {
    this._context = t, this._k = (1 - n) / 6;
  }

  zm.prototype = {
    areaStart: function areaStart() {
      this._line = 0;
    },
    areaEnd: function areaEnd() {
      this._line = NaN;
    },
    lineStart: function lineStart() {
      this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0;
    },
    lineEnd: function lineEnd() {
      switch (this._point) {
        case 2:
          this._context.lineTo(this._x2, this._y2);

          break;

        case 3:
          Pm(this, this._x1, this._y1);
      }

      (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line;
    },
    point: function point(t, n) {
      switch (t = +t, n = +n, this._point) {
        case 0:
          this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
          break;

        case 1:
          this._point = 2, this._x1 = t, this._y1 = n;
          break;

        case 2:
          this._point = 3;

        default:
          Pm(this, t, n);
      }

      this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n;
    }
  };

  var Dm = function t(n) {
    function e(t) {
      return new zm(t, n);
    }

    return e.tension = function (n) {
      return t(+n);
    }, e;
  }(0);

  function qm(t, n) {
    this._context = t, this._k = (1 - n) / 6;
  }

  qm.prototype = {
    areaStart: Mm,
    areaEnd: Mm,
    lineStart: function lineStart() {
      this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._point = 0;
    },
    lineEnd: function lineEnd() {
      switch (this._point) {
        case 1:
          this._context.moveTo(this._x3, this._y3), this._context.closePath();
          break;

        case 2:
          this._context.lineTo(this._x3, this._y3), this._context.closePath();
          break;

        case 3:
          this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5);
      }
    },
    point: function point(t, n) {
      switch (t = +t, n = +n, this._point) {
        case 0:
          this._point = 1, this._x3 = t, this._y3 = n;
          break;

        case 1:
          this._point = 2, this._context.moveTo(this._x4 = t, this._y4 = n);
          break;

        case 2:
          this._point = 3, this._x5 = t, this._y5 = n;
          break;

        default:
          Pm(this, t, n);
      }

      this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n;
    }
  };

  var Rm = function t(n) {
    function e(t) {
      return new qm(t, n);
    }

    return e.tension = function (n) {
      return t(+n);
    }, e;
  }(0);

  function Fm(t, n) {
    this._context = t, this._k = (1 - n) / 6;
  }

  Fm.prototype = {
    areaStart: function areaStart() {
      this._line = 0;
    },
    areaEnd: function areaEnd() {
      this._line = NaN;
    },
    lineStart: function lineStart() {
      this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0;
    },
    lineEnd: function lineEnd() {
      (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(), this._line = 1 - this._line;
    },
    point: function point(t, n) {
      switch (t = +t, n = +n, this._point) {
        case 0:
          this._point = 1;
          break;

        case 1:
          this._point = 2;
          break;

        case 2:
          this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
          break;

        case 3:
          this._point = 4;

        default:
          Pm(this, t, n);
      }

      this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n;
    }
  };

  var Om = function t(n) {
    function e(t) {
      return new Fm(t, n);
    }

    return e.tension = function (n) {
      return t(+n);
    }, e;
  }(0);

  function Im(t, n, e) {
    var r = t._x1,
        i = t._y1,
        o = t._x2,
        a = t._y2;

    if (t._l01_a > Mb) {
      var u = 2 * t._l01_2a + 3 * t._l01_a * t._l12_a + t._l12_2a,
          c = 3 * t._l01_a * (t._l01_a + t._l12_a);
      r = (r * u - t._x0 * t._l12_2a + t._x2 * t._l01_2a) / c, i = (i * u - t._y0 * t._l12_2a + t._y2 * t._l01_2a) / c;
    }

    if (t._l23_a > Mb) {
      var f = 2 * t._l23_2a + 3 * t._l23_a * t._l12_a + t._l12_2a,
          s = 3 * t._l23_a * (t._l23_a + t._l12_a);
      o = (o * f + t._x1 * t._l23_2a - n * t._l12_2a) / s, a = (a * f + t._y1 * t._l23_2a - e * t._l12_2a) / s;
    }

    t._context.bezierCurveTo(r, i, o, a, t._x2, t._y2);
  }

  function Um(t, n) {
    this._context = t, this._alpha = n;
  }

  Um.prototype = {
    areaStart: function areaStart() {
      this._line = 0;
    },
    areaEnd: function areaEnd() {
      this._line = NaN;
    },
    lineStart: function lineStart() {
      this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
    },
    lineEnd: function lineEnd() {
      switch (this._point) {
        case 2:
          this._context.lineTo(this._x2, this._y2);

          break;

        case 3:
          this.point(this._x2, this._y2);
      }

      (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line;
    },
    point: function point(t, n) {
      if (t = +t, n = +n, this._point) {
        var e = this._x2 - t,
            r = this._y2 - n;
        this._l23_a = Math.sqrt(this._l23_2a = Math.pow(e * e + r * r, this._alpha));
      }

      switch (this._point) {
        case 0:
          this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
          break;

        case 1:
          this._point = 2;
          break;

        case 2:
          this._point = 3;

        default:
          Im(this, t, n);
      }

      this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n;
    }
  };

  var Bm = function t(n) {
    function e(t) {
      return n ? new Um(t, n) : new zm(t, 0);
    }

    return e.alpha = function (n) {
      return t(+n);
    }, e;
  }(.5);

  function Ym(t, n) {
    this._context = t, this._alpha = n;
  }

  Ym.prototype = {
    areaStart: Mm,
    areaEnd: Mm,
    lineStart: function lineStart() {
      this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
    },
    lineEnd: function lineEnd() {
      switch (this._point) {
        case 1:
          this._context.moveTo(this._x3, this._y3), this._context.closePath();
          break;

        case 2:
          this._context.lineTo(this._x3, this._y3), this._context.closePath();
          break;

        case 3:
          this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5);
      }
    },
    point: function point(t, n) {
      if (t = +t, n = +n, this._point) {
        var e = this._x2 - t,
            r = this._y2 - n;
        this._l23_a = Math.sqrt(this._l23_2a = Math.pow(e * e + r * r, this._alpha));
      }

      switch (this._point) {
        case 0:
          this._point = 1, this._x3 = t, this._y3 = n;
          break;

        case 1:
          this._point = 2, this._context.moveTo(this._x4 = t, this._y4 = n);
          break;

        case 2:
          this._point = 3, this._x5 = t, this._y5 = n;
          break;

        default:
          Im(this, t, n);
      }

      this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n;
    }
  };

  var Lm = function t(n) {
    function e(t) {
      return n ? new Ym(t, n) : new qm(t, 0);
    }

    return e.alpha = function (n) {
      return t(+n);
    }, e;
  }(.5);

  function jm(t, n) {
    this._context = t, this._alpha = n;
  }

  jm.prototype = {
    areaStart: function areaStart() {
      this._line = 0;
    },
    areaEnd: function areaEnd() {
      this._line = NaN;
    },
    lineStart: function lineStart() {
      this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
    },
    lineEnd: function lineEnd() {
      (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(), this._line = 1 - this._line;
    },
    point: function point(t, n) {
      if (t = +t, n = +n, this._point) {
        var e = this._x2 - t,
            r = this._y2 - n;
        this._l23_a = Math.sqrt(this._l23_2a = Math.pow(e * e + r * r, this._alpha));
      }

      switch (this._point) {
        case 0:
          this._point = 1;
          break;

        case 1:
          this._point = 2;
          break;

        case 2:
          this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
          break;

        case 3:
          this._point = 4;

        default:
          Im(this, t, n);
      }

      this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n;
    }
  };

  var Hm = function t(n) {
    function e(t) {
      return n ? new jm(t, n) : new Fm(t, 0);
    }

    return e.alpha = function (n) {
      return t(+n);
    }, e;
  }(.5);

  function Xm(t) {
    this._context = t;
  }

  function Gm(t) {
    return t < 0 ? -1 : 1;
  }

  function Vm(t, n, e) {
    var r = t._x1 - t._x0,
        i = n - t._x1,
        o = (t._y1 - t._y0) / (r || i < 0 && -0),
        a = (e - t._y1) / (i || r < 0 && -0),
        u = (o * i + a * r) / (r + i);
    return (Gm(o) + Gm(a)) * Math.min(Math.abs(o), Math.abs(a), .5 * Math.abs(u)) || 0;
  }

  function $m(t, n) {
    var e = t._x1 - t._x0;
    return e ? (3 * (t._y1 - t._y0) / e - n) / 2 : n;
  }

  function Wm(t, n, e) {
    var r = t._x0,
        i = t._y0,
        o = t._x1,
        a = t._y1,
        u = (o - r) / 3;

    t._context.bezierCurveTo(r + u, i + u * n, o - u, a - u * e, o, a);
  }

  function Zm(t) {
    this._context = t;
  }

  function Km(t) {
    this._context = new Qm(t);
  }

  function Qm(t) {
    this._context = t;
  }

  function Jm(t) {
    this._context = t;
  }

  function tx(t) {
    var n,
        e,
        r = t.length - 1,
        i = new Array(r),
        o = new Array(r),
        a = new Array(r);

    for (i[0] = 0, o[0] = 2, a[0] = t[0] + 2 * t[1], n = 1; n < r - 1; ++n) {
      i[n] = 1, o[n] = 4, a[n] = 4 * t[n] + 2 * t[n + 1];
    }

    for (i[r - 1] = 2, o[r - 1] = 7, a[r - 1] = 8 * t[r - 1] + t[r], n = 1; n < r; ++n) {
      e = i[n] / o[n - 1], o[n] -= e, a[n] -= e * a[n - 1];
    }

    for (i[r - 1] = a[r - 1] / o[r - 1], n = r - 2; n >= 0; --n) {
      i[n] = (a[n] - i[n + 1]) / o[n];
    }

    for (o[r - 1] = (t[r] + i[r - 1]) / 2, n = 0; n < r - 1; ++n) {
      o[n] = 2 * t[n + 1] - i[n + 1];
    }

    return [i, o];
  }

  function nx(t, n) {
    this._context = t, this._t = n;
  }

  function ex(t, n) {
    if ((i = t.length) > 1) for (var e, r, i, o = 1, a = t[n[0]], u = a.length; o < i; ++o) {
      for (r = a, a = t[n[o]], e = 0; e < u; ++e) {
        a[e][1] += a[e][0] = isNaN(r[e][1]) ? r[e][0] : r[e][1];
      }
    }
  }

  function rx(t) {
    for (var n = t.length, e = new Array(n); --n >= 0;) {
      e[n] = n;
    }

    return e;
  }

  function ix(t, n) {
    return t[n];
  }

  function ox(t) {
    var n = [];
    return n.key = t, n;
  }

  function ax(t) {
    var n = t.map(ux);
    return rx(t).sort(function (t, e) {
      return n[t] - n[e];
    });
  }

  function ux(t) {
    for (var n, e = -1, r = 0, i = t.length, o = -1 / 0; ++e < i;) {
      (n = +t[e][1]) > o && (o = n, r = e);
    }

    return r;
  }

  function cx(t) {
    var n = t.map(fx);
    return rx(t).sort(function (t, e) {
      return n[t] - n[e];
    });
  }

  function fx(t) {
    for (var n, e = 0, r = -1, i = t.length; ++r < i;) {
      (n = +t[r][1]) && (e += n);
    }

    return e;
  }

  Xm.prototype = {
    areaStart: Mm,
    areaEnd: Mm,
    lineStart: function lineStart() {
      this._point = 0;
    },
    lineEnd: function lineEnd() {
      this._point && this._context.closePath();
    },
    point: function point(t, n) {
      t = +t, n = +n, this._point ? this._context.lineTo(t, n) : (this._point = 1, this._context.moveTo(t, n));
    }
  }, Zm.prototype = {
    areaStart: function areaStart() {
      this._line = 0;
    },
    areaEnd: function areaEnd() {
      this._line = NaN;
    },
    lineStart: function lineStart() {
      this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN, this._point = 0;
    },
    lineEnd: function lineEnd() {
      switch (this._point) {
        case 2:
          this._context.lineTo(this._x1, this._y1);

          break;

        case 3:
          Wm(this, this._t0, $m(this, this._t0));
      }

      (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line;
    },
    point: function point(t, n) {
      var e = NaN;

      if (n = +n, (t = +t) !== this._x1 || n !== this._y1) {
        switch (this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
            break;

          case 1:
            this._point = 2;
            break;

          case 2:
            this._point = 3, Wm(this, $m(this, e = Vm(this, t, n)), e);
            break;

          default:
            Wm(this, this._t0, e = Vm(this, t, n));
        }

        this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = n, this._t0 = e;
      }
    }
  }, (Km.prototype = Object.create(Zm.prototype)).point = function (t, n) {
    Zm.prototype.point.call(this, n, t);
  }, Qm.prototype = {
    moveTo: function moveTo(t, n) {
      this._context.moveTo(n, t);
    },
    closePath: function closePath() {
      this._context.closePath();
    },
    lineTo: function lineTo(t, n) {
      this._context.lineTo(n, t);
    },
    bezierCurveTo: function bezierCurveTo(t, n, e, r, i, o) {
      this._context.bezierCurveTo(n, t, r, e, o, i);
    }
  }, Jm.prototype = {
    areaStart: function areaStart() {
      this._line = 0;
    },
    areaEnd: function areaEnd() {
      this._line = NaN;
    },
    lineStart: function lineStart() {
      this._x = [], this._y = [];
    },
    lineEnd: function lineEnd() {
      var t = this._x,
          n = this._y,
          e = t.length;
      if (e) if (this._line ? this._context.lineTo(t[0], n[0]) : this._context.moveTo(t[0], n[0]), 2 === e) this._context.lineTo(t[1], n[1]);else for (var r = tx(t), i = tx(n), o = 0, a = 1; a < e; ++o, ++a) {
        this._context.bezierCurveTo(r[0][o], i[0][o], r[1][o], i[1][o], t[a], n[a]);
      }
      (this._line || 0 !== this._line && 1 === e) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null;
    },
    point: function point(t, n) {
      this._x.push(+t), this._y.push(+n);
    }
  }, nx.prototype = {
    areaStart: function areaStart() {
      this._line = 0;
    },
    areaEnd: function areaEnd() {
      this._line = NaN;
    },
    lineStart: function lineStart() {
      this._x = this._y = NaN, this._point = 0;
    },
    lineEnd: function lineEnd() {
      0 < this._t && this._t < 1 && 2 === this._point && this._context.lineTo(this._x, this._y), (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line >= 0 && (this._t = 1 - this._t, this._line = 1 - this._line);
    },
    point: function point(t, n) {
      switch (t = +t, n = +n, this._point) {
        case 0:
          this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
          break;

        case 1:
          this._point = 2;

        default:
          if (this._t <= 0) this._context.lineTo(this._x, n), this._context.lineTo(t, n);else {
            var e = this._x * (1 - this._t) + t * this._t;
            this._context.lineTo(e, this._y), this._context.lineTo(e, n);
          }
      }

      this._x = t, this._y = n;
    }
  };

  var sx = function sx(t) {
    return function () {
      return t;
    };
  };

  function lx(t, _ref13) {
    var n = _ref13.sourceEvent,
        e = _ref13.target,
        r = _ref13.transform,
        i = _ref13.dispatch;
    Object.defineProperties(this, {
      type: {
        value: t,
        enumerable: !0,
        configurable: !0
      },
      sourceEvent: {
        value: n,
        enumerable: !0,
        configurable: !0
      },
      target: {
        value: e,
        enumerable: !0,
        configurable: !0
      },
      transform: {
        value: r,
        enumerable: !0,
        configurable: !0
      },
      _: {
        value: i
      }
    });
  }

  function hx(t, n, e) {
    this.k = t, this.x = n, this.y = e;
  }

  hx.prototype = {
    constructor: hx,
    scale: function scale(t) {
      return 1 === t ? this : new hx(this.k * t, this.x, this.y);
    },
    translate: function translate(t, n) {
      return 0 === t & 0 === n ? this : new hx(this.k, this.x + this.k * t, this.y + this.k * n);
    },
    apply: function apply(t) {
      return [t[0] * this.k + this.x, t[1] * this.k + this.y];
    },
    applyX: function applyX(t) {
      return t * this.k + this.x;
    },
    applyY: function applyY(t) {
      return t * this.k + this.y;
    },
    invert: function invert(t) {
      return [(t[0] - this.x) / this.k, (t[1] - this.y) / this.k];
    },
    invertX: function invertX(t) {
      return (t - this.x) / this.k;
    },
    invertY: function invertY(t) {
      return (t - this.y) / this.k;
    },
    rescaleX: function rescaleX(t) {
      return t.copy().domain(t.range().map(this.invertX, this).map(t.invert, t));
    },
    rescaleY: function rescaleY(t) {
      return t.copy().domain(t.range().map(this.invertY, this).map(t.invert, t));
    },
    toString: function toString() {
      return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
    }
  };
  var dx = new hx(1, 0, 0);

  function px(t) {
    for (; !t.__zoom;) {
      if (!(t = t.parentNode)) return dx;
    }

    return t.__zoom;
  }

  function gx(t) {
    t.stopImmediatePropagation();
  }

  function yx(t) {
    t.preventDefault(), t.stopImmediatePropagation();
  }

  function vx(t) {
    return !(t.ctrlKey && "wheel" !== t.type || t.button);
  }

  function _x() {
    var t = this;
    return t instanceof SVGElement ? (t = t.ownerSVGElement || t).hasAttribute("viewBox") ? [[(t = t.viewBox.baseVal).x, t.y], [t.x + t.width, t.y + t.height]] : [[0, 0], [t.width.baseVal.value, t.height.baseVal.value]] : [[0, 0], [t.clientWidth, t.clientHeight]];
  }

  function bx() {
    return this.__zoom || dx;
  }

  function mx(t) {
    return -t.deltaY * (1 === t.deltaMode ? .05 : t.deltaMode ? 1 : .002) * (t.ctrlKey ? 10 : 1);
  }

  function xx() {
    return navigator.maxTouchPoints || "ontouchstart" in this;
  }

  function wx(t, n, e) {
    var r = t.invertX(n[0][0]) - e[0][0],
        i = t.invertX(n[1][0]) - e[1][0],
        o = t.invertY(n[0][1]) - e[0][1],
        a = t.invertY(n[1][1]) - e[1][1];
    return t.translate(i > r ? (r + i) / 2 : Math.min(0, r) || Math.max(0, i), a > o ? (o + a) / 2 : Math.min(0, o) || Math.max(0, a));
  }

  px.prototype = hx.prototype, t.Adder = g, t.Delaunay = du, t.FormatSpecifier = bc, t.InternMap = y, t.InternSet = v, t.Node = cd, t.Voronoi = uu, t.ZoomTransform = hx, t.active = function (t, n) {
    var e,
        r,
        i = t.__transition;
    if (i) for (r in n = null == n ? null : n + "", i) {
      if ((e = i[r]).state > 1 && e.name === n) return new $i([[t]], Mo, n, +r);
    }
    return null;
  }, t.arc = function () {
    var t = Nb,
        n = Cb,
        e = gb(0),
        r = null,
        i = Pb,
        o = zb,
        a = Db,
        u = null;

    function c() {
      var c,
          f,
          s = +t.apply(this, arguments),
          l = +n.apply(this, arguments),
          h = i.apply(this, arguments) - Tb,
          d = o.apply(this, arguments) - Tb,
          p = yb(d - h),
          g = d > h;
      if (u || (u = c = pa()), l < s && (f = l, l = s, s = f), l > Mb) {
        if (p > Sb - Mb) u.moveTo(l * _b(h), l * xb(h)), u.arc(0, 0, l, h, d, !g), s > Mb && (u.moveTo(s * _b(d), s * xb(d)), u.arc(0, 0, s, d, h, g));else {
          var y,
              v,
              _ = h,
              b = d,
              m = h,
              x = d,
              w = p,
              M = p,
              A = a.apply(this, arguments) / 2,
              T = A > Mb && (r ? +r.apply(this, arguments) : wb(s * s + l * l)),
              S = mb(yb(l - s) / 2, +e.apply(this, arguments)),
              E = S,
              k = S;

          if (T > Mb) {
            var N = kb(T / s * xb(A)),
                C = kb(T / l * xb(A));
            (w -= 2 * N) > Mb ? (m += N *= g ? 1 : -1, x -= N) : (w = 0, m = x = (h + d) / 2), (M -= 2 * C) > Mb ? (_ += C *= g ? 1 : -1, b -= C) : (M = 0, _ = b = (h + d) / 2);
          }

          var P = l * _b(_),
              z = l * xb(_),
              D = s * _b(x),
              q = s * xb(x);

          if (S > Mb) {
            var R,
                F = l * _b(b),
                O = l * xb(b),
                I = s * _b(m),
                U = s * xb(m);

            if (p < Ab && (R = qb(P, z, I, U, F, O, D, q))) {
              var B = P - R[0],
                  Y = z - R[1],
                  L = F - R[0],
                  j = O - R[1],
                  H = 1 / xb(Eb((B * L + Y * j) / (wb(B * B + Y * Y) * wb(L * L + j * j))) / 2),
                  X = wb(R[0] * R[0] + R[1] * R[1]);
              E = mb(S, (s - X) / (H - 1)), k = mb(S, (l - X) / (H + 1));
            }
          }

          M > Mb ? k > Mb ? (y = Rb(I, U, P, z, l, k, g), v = Rb(F, O, D, q, l, k, g), u.moveTo(y.cx + y.x01, y.cy + y.y01), k < S ? u.arc(y.cx, y.cy, k, vb(y.y01, y.x01), vb(v.y01, v.x01), !g) : (u.arc(y.cx, y.cy, k, vb(y.y01, y.x01), vb(y.y11, y.x11), !g), u.arc(0, 0, l, vb(y.cy + y.y11, y.cx + y.x11), vb(v.cy + v.y11, v.cx + v.x11), !g), u.arc(v.cx, v.cy, k, vb(v.y11, v.x11), vb(v.y01, v.x01), !g))) : (u.moveTo(P, z), u.arc(0, 0, l, _, b, !g)) : u.moveTo(P, z), s > Mb && w > Mb ? E > Mb ? (y = Rb(D, q, F, O, s, -E, g), v = Rb(P, z, I, U, s, -E, g), u.lineTo(y.cx + y.x01, y.cy + y.y01), E < S ? u.arc(y.cx, y.cy, E, vb(y.y01, y.x01), vb(v.y01, v.x01), !g) : (u.arc(y.cx, y.cy, E, vb(y.y01, y.x01), vb(y.y11, y.x11), !g), u.arc(0, 0, s, vb(y.cy + y.y11, y.cx + y.x11), vb(v.cy + v.y11, v.cx + v.x11), g), u.arc(v.cx, v.cy, E, vb(v.y11, v.x11), vb(v.y01, v.x01), !g))) : u.arc(0, 0, s, x, m, g) : u.lineTo(D, q);
        }
      } else u.moveTo(0, 0);
      if (u.closePath(), c) return u = null, c + "" || null;
    }

    return c.centroid = function () {
      var e = (+t.apply(this, arguments) + +n.apply(this, arguments)) / 2,
          r = (+i.apply(this, arguments) + +o.apply(this, arguments)) / 2 - Ab / 2;
      return [_b(r) * e, xb(r) * e];
    }, c.innerRadius = function (n) {
      return arguments.length ? (t = "function" == typeof n ? n : gb(+n), c) : t;
    }, c.outerRadius = function (t) {
      return arguments.length ? (n = "function" == typeof t ? t : gb(+t), c) : n;
    }, c.cornerRadius = function (t) {
      return arguments.length ? (e = "function" == typeof t ? t : gb(+t), c) : e;
    }, c.padRadius = function (t) {
      return arguments.length ? (r = null == t ? null : "function" == typeof t ? t : gb(+t), c) : r;
    }, c.startAngle = function (t) {
      return arguments.length ? (i = "function" == typeof t ? t : gb(+t), c) : i;
    }, c.endAngle = function (t) {
      return arguments.length ? (o = "function" == typeof t ? t : gb(+t), c) : o;
    }, c.padAngle = function (t) {
      return arguments.length ? (a = "function" == typeof t ? t : gb(+t), c) : a;
    }, c.context = function (t) {
      return arguments.length ? (u = null == t ? null : t, c) : u;
    }, c;
  }, t.area = jb, t.areaRadial = Kb, t.ascending = n, t.autoType = function (t) {
    for (var n in t) {
      var e,
          r,
          i = t[n].trim();
      if (i) {
        if ("true" === i) i = !0;else if ("false" === i) i = !1;else if ("NaN" === i) i = NaN;else if (isNaN(e = +i)) {
          if (!(r = i.match(/^([-+]\d{2})?\d{4}(-\d{2}(-\d{2})?)?(T\d{2}:\d{2}(:\d{2}(\.\d{3})?)?(Z|[-+]\d{2}:\d{2})?)?$/))) continue;
          Ou && r[4] && !r[7] && (i = i.replace(/-/g, "/").replace(/T/, " ")), i = new Date(i);
        } else i = e;
      } else i = null;
      t[n] = i;
    }

    return t;
  }, t.axisBottom = function (t) {
    return pt(3, t);
  }, t.axisLeft = function (t) {
    return pt(4, t);
  }, t.axisRight = function (t) {
    return pt(2, t);
  }, t.axisTop = function (t) {
    return pt(1, t);
  }, t.bin = L, t.bisect = o, t.bisectCenter = u, t.bisectLeft = a, t.bisectRight = o, t.bisector = e, t.blob = function (t, n) {
    return fetch(t, n).then(Iu);
  }, t.brush = function () {
    return Ko(Uo);
  }, t.brushSelection = function (t) {
    var n = t.__brush;
    return n ? n.dim.output(n.selection) : null;
  }, t.brushX = function () {
    return Ko(Oo);
  }, t.brushY = function () {
    return Ko(Io);
  }, t.buffer = function (t, n) {
    return fetch(t, n).then(Uu);
  }, t.chord = function () {
    return ca(!1, !1);
  }, t.chordDirected = function () {
    return ca(!0, !1);
  }, t.chordTranspose = function () {
    return ca(!1, !0);
  }, t.cluster = function () {
    var t = Jh,
        n = 1,
        e = 1,
        r = !1;

    function i(i) {
      var o,
          a = 0;
      i.eachAfter(function (n) {
        var e = n.children;
        e ? (n.x = function (t) {
          return t.reduce(td, 0) / t.length;
        }(e), n.y = function (t) {
          return 1 + t.reduce(nd, 0);
        }(e)) : (n.x = o ? a += t(n, o) : 0, n.y = 0, o = n);
      });

      var u = function (t) {
        for (var n; n = t.children;) {
          t = n[0];
        }

        return t;
      }(i),
          c = function (t) {
        for (var n; n = t.children;) {
          t = n[n.length - 1];
        }

        return t;
      }(i),
          f = u.x - t(u, c) / 2,
          s = c.x + t(c, u) / 2;

      return i.eachAfter(r ? function (t) {
        t.x = (t.x - i.x) * n, t.y = (i.y - t.y) * e;
      } : function (t) {
        t.x = (t.x - f) / (s - f) * n, t.y = (1 - (i.y ? t.y / i.y : 1)) * e;
      });
    }

    return i.separation = function (n) {
      return arguments.length ? (t = n, i) : t;
    }, i.size = function (t) {
      return arguments.length ? (r = !1, n = +t[0], e = +t[1], i) : r ? null : [n, e];
    }, i.nodeSize = function (t) {
      return arguments.length ? (r = !0, n = +t[0], e = +t[1], i) : r ? [n, e] : null;
    }, i;
  }, t.color = _e, t.contourDensity = function () {
    var t = Fa,
        n = Oa,
        e = Ia,
        r = 960,
        i = 500,
        o = 20,
        a = 2,
        u = 3 * o,
        c = r + 2 * u >> a,
        f = i + 2 * u >> a,
        s = Ea(20);

    function l(r) {
      var i = new Float32Array(c * f),
          l = new Float32Array(c * f),
          d = Math.pow(2, -a);
      r.forEach(function (r, o, a) {
        var s = (t(r, o, a) + u) * d,
            l = (n(r, o, a) + u) * d,
            h = +e(r, o, a);

        if (s >= 0 && s < c && l >= 0 && l < f) {
          var p = Math.floor(s),
              g = Math.floor(l),
              y = s - p - .5,
              v = l - g - .5;
          i[p + g * c] += (1 - y) * (1 - v) * h, i[p + 1 + g * c] += y * (1 - v) * h, i[p + 1 + (g + 1) * c] += y * v * h, i[p + (g + 1) * c] += (1 - y) * v * h;
        }
      }), qa({
        width: c,
        height: f,
        data: i
      }, {
        width: c,
        height: f,
        data: l
      }, o >> a), Ra({
        width: c,
        height: f,
        data: l
      }, {
        width: c,
        height: f,
        data: i
      }, o >> a), qa({
        width: c,
        height: f,
        data: i
      }, {
        width: c,
        height: f,
        data: l
      }, o >> a), Ra({
        width: c,
        height: f,
        data: l
      }, {
        width: c,
        height: f,
        data: i
      }, o >> a), qa({
        width: c,
        height: f,
        data: i
      }, {
        width: c,
        height: f,
        data: l
      }, o >> a), Ra({
        width: c,
        height: f,
        data: l
      }, {
        width: c,
        height: f,
        data: i
      }, o >> a);
      var p = s(i);

      if (!Array.isArray(p)) {
        var g = j(i);
        p = U(0, g, p), (p = J(0, Math.floor(g / p) * p, p)).shift();
      }

      return Da().thresholds(p).size([c, f])(i).map(h);
    }

    function h(t) {
      return t.value *= Math.pow(2, -2 * a), t.coordinates.forEach(d), t;
    }

    function d(t) {
      t.forEach(p);
    }

    function p(t) {
      t.forEach(g);
    }

    function g(t) {
      t[0] = t[0] * Math.pow(2, a) - u, t[1] = t[1] * Math.pow(2, a) - u;
    }

    function y() {
      return c = r + 2 * (u = 3 * o) >> a, f = i + 2 * u >> a, l;
    }

    return l.x = function (n) {
      return arguments.length ? (t = "function" == typeof n ? n : Ea(+n), l) : t;
    }, l.y = function (t) {
      return arguments.length ? (n = "function" == typeof t ? t : Ea(+t), l) : n;
    }, l.weight = function (t) {
      return arguments.length ? (e = "function" == typeof t ? t : Ea(+t), l) : e;
    }, l.size = function (t) {
      if (!arguments.length) return [r, i];
      var n = +t[0],
          e = +t[1];
      if (!(n >= 0 && e >= 0)) throw new Error("invalid size");
      return r = n, i = e, y();
    }, l.cellSize = function (t) {
      if (!arguments.length) return 1 << a;
      if (!((t = +t) >= 1)) throw new Error("invalid cell size");
      return a = Math.floor(Math.log(t) / Math.LN2), y();
    }, l.thresholds = function (t) {
      return arguments.length ? (s = "function" == typeof t ? t : Array.isArray(t) ? Ea(Ta.call(t)) : Ea(t), l) : s;
    }, l.bandwidth = function (t) {
      if (!arguments.length) return Math.sqrt(o * (o + 1));
      if (!((t = +t) >= 0)) throw new Error("invalid bandwidth");
      return o = Math.round((Math.sqrt(4 * t * t + 1) - 1) / 2), y();
    }, l;
  }, t.contours = Da, t.count = c, t.create = function (t) {
    return Fn(St(t).call(document.documentElement));
  }, t.creator = St, t.cross = function () {
    for (var _len6 = arguments.length, t = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
      t[_key6] = arguments[_key6];
    }

    var n = "function" == typeof t[t.length - 1] && function (t) {
      return function (n) {
        return t.apply(void 0, _toConsumableArray(n));
      };
    }(t.pop()),
        e = (t = t.map(l)).map(f),
        r = t.length - 1,
        i = new Array(r + 1).fill(0),
        o = [];

    if (r < 0 || e.some(s)) return o;

    for (;;) {
      o.push(i.map(function (n, e) {
        return t[e][n];
      }));
      var _a18 = r;

      for (; ++i[_a18] === e[_a18];) {
        if (0 === _a18) return n ? o.map(n) : o;
        i[_a18--] = 0;
      }
    }
  }, t.csv = ju, t.csvFormat = Au, t.csvFormatBody = Tu, t.csvFormatRow = Eu, t.csvFormatRows = Su, t.csvFormatValue = ku, t.csvParse = wu, t.csvParseRows = Mu, t.cubehelix = or, t.cumsum = function (t, n) {
    var e = 0,
        r = 0;
    return Float64Array.from(t, void 0 === n ? function (t) {
      return e += +t || 0;
    } : function (i) {
      return e += +n(i, r++, t) || 0;
    });
  }, t.curveBasis = function (t) {
    return new Tm(t);
  }, t.curveBasisClosed = function (t) {
    return new Sm(t);
  }, t.curveBasisOpen = function (t) {
    return new Em(t);
  }, t.curveBumpX = function (t) {
    return new km(t, !0);
  }, t.curveBumpY = function (t) {
    return new km(t, !1);
  }, t.curveBundle = Cm, t.curveCardinal = Dm, t.curveCardinalClosed = Rm, t.curveCardinalOpen = Om, t.curveCatmullRom = Bm, t.curveCatmullRomClosed = Lm, t.curveCatmullRomOpen = Hm, t.curveLinear = Ub, t.curveLinearClosed = function (t) {
    return new Xm(t);
  }, t.curveMonotoneX = function (t) {
    return new Zm(t);
  }, t.curveMonotoneY = function (t) {
    return new Km(t);
  }, t.curveNatural = function (t) {
    return new Jm(t);
  }, t.curveStep = function (t) {
    return new nx(t, .5);
  }, t.curveStepAfter = function (t) {
    return new nx(t, 1);
  }, t.curveStepBefore = function (t) {
    return new nx(t, 0);
  }, t.descending = function (t, n) {
    return null == t || null == n ? NaN : n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN;
  }, t.deviation = d, t.difference = function (t) {
    t = new Set(t);

    for (var _len7 = arguments.length, n = new Array(_len7 > 1 ? _len7 - 1 : 0), _key7 = 1; _key7 < _len7; _key7++) {
      n[_key7 - 1] = arguments[_key7];
    }

    for (var _i26 = 0, _n57 = n; _i26 < _n57.length; _i26++) {
      var _e37 = _n57[_i26];

      var _iterator37 = _createForOfIteratorHelper(_e37),
          _step37;

      try {
        for (_iterator37.s(); !(_step37 = _iterator37.n()).done;) {
          var _n58 = _step37.value;
          t["delete"](_n58);
        }
      } catch (err) {
        _iterator37.e(err);
      } finally {
        _iterator37.f();
      }
    }

    return t;
  }, t.disjoint = function (t, n) {
    var e = n[Symbol.iterator](),
        r = new Set();

    var _iterator38 = _createForOfIteratorHelper(t),
        _step38;

    try {
      for (_iterator38.s(); !(_step38 = _iterator38.n()).done;) {
        var _n59 = _step38.value;
        if (r.has(_n59)) return !1;

        var _t28 = void 0,
            _i27 = void 0;

        for (; (_e$next2 = e.next(), _t28 = _e$next2.value, _i27 = _e$next2.done, _e$next2) && !_i27;) {
          var _e$next2;

          if (Object.is(_n59, _t28)) return !1;
          r.add(_t28);
        }
      }
    } catch (err) {
      _iterator38.e(err);
    } finally {
      _iterator38.f();
    }

    return !0;
  }, t.dispatch = yt, t.drag = function () {
    var t,
        n,
        e,
        r,
        i = Zn,
        o = Kn,
        a = Qn,
        u = Jn,
        c = {},
        f = yt("start", "drag", "end"),
        s = 0,
        l = 0;

    function h(t) {
      t.on("mousedown.drag", d).filter(u).on("touchstart.drag", y).on("touchmove.drag", v, Ln).on("touchend.drag touchcancel.drag", _).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
    }

    function d(a, u) {
      if (!r && i.call(this, a, u)) {
        var c = b(this, o.call(this, a, u), a, u, "mouse");
        c && (Fn(a.view).on("mousemove.drag", p, jn).on("mouseup.drag", g, jn), Gn(a.view), Hn(a), e = !1, t = a.clientX, n = a.clientY, c("start", a));
      }
    }

    function p(r) {
      if (Xn(r), !e) {
        var i = r.clientX - t,
            o = r.clientY - n;
        e = i * i + o * o > l;
      }

      c.mouse("drag", r);
    }

    function g(t) {
      Fn(t.view).on("mousemove.drag mouseup.drag", null), Vn(t.view, e), Xn(t), c.mouse("end", t);
    }

    function y(t, n) {
      if (i.call(this, t, n)) {
        var e,
            r,
            a = t.changedTouches,
            u = o.call(this, t, n),
            c = a.length;

        for (e = 0; e < c; ++e) {
          (r = b(this, u, t, n, a[e].identifier, a[e])) && (Hn(t), r("start", t, a[e]));
        }
      }
    }

    function v(t) {
      var n,
          e,
          r = t.changedTouches,
          i = r.length;

      for (n = 0; n < i; ++n) {
        (e = c[r[n].identifier]) && (Xn(t), e("drag", t, r[n]));
      }
    }

    function _(t) {
      var n,
          e,
          i = t.changedTouches,
          o = i.length;

      for (r && clearTimeout(r), r = setTimeout(function () {
        r = null;
      }, 500), n = 0; n < o; ++n) {
        (e = c[i[n].identifier]) && (Hn(t), e("end", t, i[n]));
      }
    }

    function b(t, n, e, r, i, o) {
      var u,
          l,
          d,
          p = f.copy(),
          g = Yn(o || e, n);
      if (null != (d = a.call(t, new Wn("beforestart", {
        sourceEvent: e,
        target: h,
        identifier: i,
        active: s,
        x: g[0],
        y: g[1],
        dx: 0,
        dy: 0,
        dispatch: p
      }), r))) return u = d.x - g[0] || 0, l = d.y - g[1] || 0, function e(o, a, f) {
        var y,
            v = g;

        switch (o) {
          case "start":
            c[i] = e, y = s++;
            break;

          case "end":
            delete c[i], --s;

          case "drag":
            g = Yn(f || a, n), y = s;
        }

        p.call(o, t, new Wn(o, {
          sourceEvent: a,
          subject: d,
          target: h,
          identifier: i,
          active: y,
          x: g[0] + u,
          y: g[1] + l,
          dx: g[0] - v[0],
          dy: g[1] - v[1],
          dispatch: p
        }), r);
      };
    }

    return h.filter = function (t) {
      return arguments.length ? (i = "function" == typeof t ? t : $n(!!t), h) : i;
    }, h.container = function (t) {
      return arguments.length ? (o = "function" == typeof t ? t : $n(t), h) : o;
    }, h.subject = function (t) {
      return arguments.length ? (a = "function" == typeof t ? t : $n(t), h) : a;
    }, h.touchable = function (t) {
      return arguments.length ? (u = "function" == typeof t ? t : $n(!!t), h) : u;
    }, h.on = function () {
      var t = f.on.apply(f, arguments);
      return t === f ? h : t;
    }, h.clickDistance = function (t) {
      return arguments.length ? (l = (t = +t) * t, h) : Math.sqrt(l);
    }, h;
  }, t.dragDisable = Gn, t.dragEnable = Vn, t.dsv = function (t, n, e, r) {
    3 === arguments.length && "function" == typeof e && (r = e, e = void 0);
    var i = mu(t);
    return Yu(n, e).then(function (t) {
      return i.parse(t, r);
    });
  }, t.dsvFormat = mu, t.easeBack = yo, t.easeBackIn = po, t.easeBackInOut = yo, t.easeBackOut = go, t.easeBounce = lo, t.easeBounceIn = function (t) {
    return 1 - lo(1 - t);
  }, t.easeBounceInOut = function (t) {
    return ((t *= 2) <= 1 ? 1 - lo(1 - t) : lo(t - 1) + 1) / 2;
  }, t.easeBounceOut = lo, t.easeCircle = co, t.easeCircleIn = function (t) {
    return 1 - Math.sqrt(1 - t * t);
  }, t.easeCircleInOut = co, t.easeCircleOut = function (t) {
    return Math.sqrt(1 - --t * t);
  }, t.easeCubic = Ji, t.easeCubicIn = function (t) {
    return t * t * t;
  }, t.easeCubicInOut = Ji, t.easeCubicOut = function (t) {
    return --t * t * t + 1;
  }, t.easeElastic = bo, t.easeElasticIn = _o, t.easeElasticInOut = mo, t.easeElasticOut = bo, t.easeExp = uo, t.easeExpIn = function (t) {
    return ao(1 - +t);
  }, t.easeExpInOut = uo, t.easeExpOut = function (t) {
    return 1 - ao(t);
  }, t.easeLinear = function (t) {
    return +t;
  }, t.easePoly = eo, t.easePolyIn = to, t.easePolyInOut = eo, t.easePolyOut = no, t.easeQuad = Qi, t.easeQuadIn = function (t) {
    return t * t;
  }, t.easeQuadInOut = Qi, t.easeQuadOut = function (t) {
    return t * (2 - t);
  }, t.easeSin = oo, t.easeSinIn = function (t) {
    return 1 == +t ? 1 : 1 - Math.cos(t * io);
  }, t.easeSinInOut = oo, t.easeSinOut = function (t) {
    return Math.sin(t * io);
  }, t.every = function (t, n) {
    if ("function" != typeof n) throw new TypeError("test is not a function");
    var e = -1;

    var _iterator39 = _createForOfIteratorHelper(t),
        _step39;

    try {
      for (_iterator39.s(); !(_step39 = _iterator39.n()).done;) {
        var _r32 = _step39.value;
        if (!n(_r32, ++e, t)) return !1;
      }
    } catch (err) {
      _iterator39.e(err);
    } finally {
      _iterator39.f();
    }

    return !0;
  }, t.extent = p, t.fcumsum = function (t, n) {
    var e = new g();
    var r = -1;
    return Float64Array.from(t, void 0 === n ? function (t) {
      return e.add(+t || 0);
    } : function (i) {
      return e.add(+n(i, ++r, t) || 0);
    });
  }, t.filter = function (t, n) {
    if ("function" != typeof n) throw new TypeError("test is not a function");
    var e = [];
    var r = -1;

    var _iterator40 = _createForOfIteratorHelper(t),
        _step40;

    try {
      for (_iterator40.s(); !(_step40 = _iterator40.n()).done;) {
        var _i28 = _step40.value;
        n(_i28, ++r, t) && e.push(_i28);
      }
    } catch (err) {
      _iterator40.e(err);
    } finally {
      _iterator40.f();
    }

    return e;
  }, t.flatGroup = function (t) {
    for (var _len8 = arguments.length, n = new Array(_len8 > 1 ? _len8 - 1 : 0), _key8 = 1; _key8 < _len8; _key8++) {
      n[_key8 - 1] = arguments[_key8];
    }

    return T(A.apply(void 0, [t].concat(n)), n);
  }, t.flatRollup = function (t, n) {
    for (var _len9 = arguments.length, e = new Array(_len9 > 2 ? _len9 - 2 : 0), _key9 = 2; _key9 < _len9; _key9++) {
      e[_key9 - 2] = arguments[_key9];
    }

    return T(E.apply(void 0, [t, n].concat(e)), e);
  }, t.forceCenter = function (t, n) {
    var e,
        r = 1;

    function i() {
      var i,
          o,
          a = e.length,
          u = 0,
          c = 0;

      for (i = 0; i < a; ++i) {
        u += (o = e[i]).x, c += o.y;
      }

      for (u = (u / a - t) * r, c = (c / a - n) * r, i = 0; i < a; ++i) {
        (o = e[i]).x -= u, o.y -= c;
      }
    }

    return null == t && (t = 0), null == n && (n = 0), i.initialize = function (t) {
      e = t;
    }, i.x = function (n) {
      return arguments.length ? (t = +n, i) : t;
    }, i.y = function (t) {
      return arguments.length ? (n = +t, i) : n;
    }, i.strength = function (t) {
      return arguments.length ? (r = +t, i) : r;
    }, i;
  }, t.forceCollide = function (t) {
    var n,
        e,
        r,
        i = 1,
        o = 1;

    function a() {
      for (var t, a, c, f, s, l, h, d = n.length, p = 0; p < o; ++p) {
        for (a = tc(n, ac, uc).visitAfter(u), t = 0; t < d; ++t) {
          c = n[t], l = e[c.index], h = l * l, f = c.x + c.vx, s = c.y + c.vy, a.visit(g);
        }
      }

      function g(t, n, e, o, a) {
        var u = t.data,
            d = t.r,
            p = l + d;
        if (!u) return n > f + p || o < f - p || e > s + p || a < s - p;

        if (u.index > c.index) {
          var g = f - u.x - u.vx,
              y = s - u.y - u.vy,
              v = g * g + y * y;
          v < p * p && (0 === g && (v += (g = oc(r)) * g), 0 === y && (v += (y = oc(r)) * y), v = (p - (v = Math.sqrt(v))) / v * i, c.vx += (g *= v) * (p = (d *= d) / (h + d)), c.vy += (y *= v) * p, u.vx -= g * (p = 1 - p), u.vy -= y * p);
        }
      }
    }

    function u(t) {
      if (t.data) return t.r = e[t.data.index];

      for (var n = t.r = 0; n < 4; ++n) {
        t[n] && t[n].r > t.r && (t.r = t[n].r);
      }
    }

    function c() {
      if (n) {
        var r,
            i,
            o = n.length;

        for (e = new Array(o), r = 0; r < o; ++r) {
          i = n[r], e[i.index] = +t(i, r, n);
        }
      }
    }

    return "function" != typeof t && (t = ic(null == t ? 1 : +t)), a.initialize = function (t, e) {
      n = t, r = e, c();
    }, a.iterations = function (t) {
      return arguments.length ? (o = +t, a) : o;
    }, a.strength = function (t) {
      return arguments.length ? (i = +t, a) : i;
    }, a.radius = function (n) {
      return arguments.length ? (t = "function" == typeof n ? n : ic(+n), c(), a) : t;
    }, a;
  }, t.forceLink = function (t) {
    var n,
        e,
        r,
        i,
        o,
        a,
        u = cc,
        c = function c(t) {
      return 1 / Math.min(i[t.source.index], i[t.target.index]);
    },
        f = ic(30),
        s = 1;

    function l(r) {
      for (var i = 0, u = t.length; i < s; ++i) {
        for (var c, f, l, h, d, p, g, y = 0; y < u; ++y) {
          f = (c = t[y]).source, h = (l = c.target).x + l.vx - f.x - f.vx || oc(a), d = l.y + l.vy - f.y - f.vy || oc(a), h *= p = ((p = Math.sqrt(h * h + d * d)) - e[y]) / p * r * n[y], d *= p, l.vx -= h * (g = o[y]), l.vy -= d * g, f.vx += h * (g = 1 - g), f.vy += d * g;
        }
      }
    }

    function h() {
      if (r) {
        var a,
            c,
            f = r.length,
            s = t.length,
            l = new Map(r.map(function (t, n) {
          return [u(t, n, r), t];
        }));

        for (a = 0, i = new Array(f); a < s; ++a) {
          (c = t[a]).index = a, "object" != _typeof(c.source) && (c.source = fc(l, c.source)), "object" != _typeof(c.target) && (c.target = fc(l, c.target)), i[c.source.index] = (i[c.source.index] || 0) + 1, i[c.target.index] = (i[c.target.index] || 0) + 1;
        }

        for (a = 0, o = new Array(s); a < s; ++a) {
          c = t[a], o[a] = i[c.source.index] / (i[c.source.index] + i[c.target.index]);
        }

        n = new Array(s), d(), e = new Array(s), p();
      }
    }

    function d() {
      if (r) for (var e = 0, i = t.length; e < i; ++e) {
        n[e] = +c(t[e], e, t);
      }
    }

    function p() {
      if (r) for (var n = 0, i = t.length; n < i; ++n) {
        e[n] = +f(t[n], n, t);
      }
    }

    return null == t && (t = []), l.initialize = function (t, n) {
      r = t, a = n, h();
    }, l.links = function (n) {
      return arguments.length ? (t = n, h(), l) : t;
    }, l.id = function (t) {
      return arguments.length ? (u = t, l) : u;
    }, l.iterations = function (t) {
      return arguments.length ? (s = +t, l) : s;
    }, l.strength = function (t) {
      return arguments.length ? (c = "function" == typeof t ? t : ic(+t), d(), l) : c;
    }, l.distance = function (t) {
      return arguments.length ? (f = "function" == typeof t ? t : ic(+t), p(), l) : f;
    }, l;
  }, t.forceManyBody = function () {
    var t,
        n,
        e,
        r,
        i,
        o = ic(-30),
        a = 1,
        u = 1 / 0,
        c = .81;

    function f(e) {
      var i,
          o = t.length,
          a = tc(t, lc, hc).visitAfter(l);

      for (r = e, i = 0; i < o; ++i) {
        n = t[i], a.visit(h);
      }
    }

    function s() {
      if (t) {
        var n,
            e,
            r = t.length;

        for (i = new Array(r), n = 0; n < r; ++n) {
          e = t[n], i[e.index] = +o(e, n, t);
        }
      }
    }

    function l(t) {
      var n,
          e,
          r,
          o,
          a,
          u = 0,
          c = 0;

      if (t.length) {
        for (r = o = a = 0; a < 4; ++a) {
          (n = t[a]) && (e = Math.abs(n.value)) && (u += n.value, c += e, r += e * n.x, o += e * n.y);
        }

        t.x = r / c, t.y = o / c;
      } else {
        (n = t).x = n.data.x, n.y = n.data.y;

        do {
          u += i[n.data.index];
        } while (n = n.next);
      }

      t.value = u;
    }

    function h(t, o, f, s) {
      if (!t.value) return !0;
      var l = t.x - n.x,
          h = t.y - n.y,
          d = s - o,
          p = l * l + h * h;
      if (d * d / c < p) return p < u && (0 === l && (p += (l = oc(e)) * l), 0 === h && (p += (h = oc(e)) * h), p < a && (p = Math.sqrt(a * p)), n.vx += l * t.value * r / p, n.vy += h * t.value * r / p), !0;

      if (!(t.length || p >= u)) {
        (t.data !== n || t.next) && (0 === l && (p += (l = oc(e)) * l), 0 === h && (p += (h = oc(e)) * h), p < a && (p = Math.sqrt(a * p)));

        do {
          t.data !== n && (d = i[t.data.index] * r / p, n.vx += l * d, n.vy += h * d);
        } while (t = t.next);
      }
    }

    return f.initialize = function (n, r) {
      t = n, e = r, s();
    }, f.strength = function (t) {
      return arguments.length ? (o = "function" == typeof t ? t : ic(+t), s(), f) : o;
    }, f.distanceMin = function (t) {
      return arguments.length ? (a = t * t, f) : Math.sqrt(a);
    }, f.distanceMax = function (t) {
      return arguments.length ? (u = t * t, f) : Math.sqrt(u);
    }, f.theta = function (t) {
      return arguments.length ? (c = t * t, f) : Math.sqrt(c);
    }, f;
  }, t.forceRadial = function (t, n, e) {
    var r,
        i,
        o,
        a = ic(.1);

    function u(t) {
      for (var a = 0, u = r.length; a < u; ++a) {
        var c = r[a],
            f = c.x - n || 1e-6,
            s = c.y - e || 1e-6,
            l = Math.sqrt(f * f + s * s),
            h = (o[a] - l) * i[a] * t / l;
        c.vx += f * h, c.vy += s * h;
      }
    }

    function c() {
      if (r) {
        var n,
            e = r.length;

        for (i = new Array(e), o = new Array(e), n = 0; n < e; ++n) {
          o[n] = +t(r[n], n, r), i[n] = isNaN(o[n]) ? 0 : +a(r[n], n, r);
        }
      }
    }

    return "function" != typeof t && (t = ic(+t)), null == n && (n = 0), null == e && (e = 0), u.initialize = function (t) {
      r = t, c();
    }, u.strength = function (t) {
      return arguments.length ? (a = "function" == typeof t ? t : ic(+t), c(), u) : a;
    }, u.radius = function (n) {
      return arguments.length ? (t = "function" == typeof n ? n : ic(+n), c(), u) : t;
    }, u.x = function (t) {
      return arguments.length ? (n = +t, u) : n;
    }, u.y = function (t) {
      return arguments.length ? (e = +t, u) : e;
    }, u;
  }, t.forceSimulation = function (t) {
    var n,
        e = 1,
        r = .001,
        i = 1 - Math.pow(r, 1 / 300),
        o = 0,
        a = .6,
        u = new Map(),
        c = ci(l),
        f = yt("tick", "end"),
        s = function () {
      var t = 1;
      return function () {
        return (t = (1664525 * t + 1013904223) % sc) / sc;
      };
    }();

    function l() {
      h(), f.call("tick", n), e < r && (c.stop(), f.call("end", n));
    }

    function h(r) {
      var c,
          f,
          s = t.length;
      void 0 === r && (r = 1);

      for (var l = 0; l < r; ++l) {
        for (e += (o - e) * i, u.forEach(function (t) {
          t(e);
        }), c = 0; c < s; ++c) {
          null == (f = t[c]).fx ? f.x += f.vx *= a : (f.x = f.fx, f.vx = 0), null == f.fy ? f.y += f.vy *= a : (f.y = f.fy, f.vy = 0);
        }
      }

      return n;
    }

    function d() {
      for (var n, e = 0, r = t.length; e < r; ++e) {
        if ((n = t[e]).index = e, null != n.fx && (n.x = n.fx), null != n.fy && (n.y = n.fy), isNaN(n.x) || isNaN(n.y)) {
          var i = 10 * Math.sqrt(.5 + e),
              o = e * dc;
          n.x = i * Math.cos(o), n.y = i * Math.sin(o);
        }

        (isNaN(n.vx) || isNaN(n.vy)) && (n.vx = n.vy = 0);
      }
    }

    function p(n) {
      return n.initialize && n.initialize(t, s), n;
    }

    return null == t && (t = []), d(), n = {
      tick: h,
      restart: function restart() {
        return c.restart(l), n;
      },
      stop: function stop() {
        return c.stop(), n;
      },
      nodes: function nodes(e) {
        return arguments.length ? (t = e, d(), u.forEach(p), n) : t;
      },
      alpha: function alpha(t) {
        return arguments.length ? (e = +t, n) : e;
      },
      alphaMin: function alphaMin(t) {
        return arguments.length ? (r = +t, n) : r;
      },
      alphaDecay: function alphaDecay(t) {
        return arguments.length ? (i = +t, n) : +i;
      },
      alphaTarget: function alphaTarget(t) {
        return arguments.length ? (o = +t, n) : o;
      },
      velocityDecay: function velocityDecay(t) {
        return arguments.length ? (a = 1 - t, n) : 1 - a;
      },
      randomSource: function randomSource(t) {
        return arguments.length ? (s = t, u.forEach(p), n) : s;
      },
      force: function force(t, e) {
        return arguments.length > 1 ? (null == e ? u["delete"](t) : u.set(t, p(e)), n) : u.get(t);
      },
      find: function find(n, e, r) {
        var i,
            o,
            a,
            u,
            c,
            f = 0,
            s = t.length;

        for (null == r ? r = 1 / 0 : r *= r, f = 0; f < s; ++f) {
          (a = (i = n - (u = t[f]).x) * i + (o = e - u.y) * o) < r && (c = u, r = a);
        }

        return c;
      },
      on: function on(t, e) {
        return arguments.length > 1 ? (f.on(t, e), n) : f.on(t);
      }
    };
  }, t.forceX = function (t) {
    var n,
        e,
        r,
        i = ic(.1);

    function o(t) {
      for (var i, o = 0, a = n.length; o < a; ++o) {
        (i = n[o]).vx += (r[o] - i.x) * e[o] * t;
      }
    }

    function a() {
      if (n) {
        var o,
            a = n.length;

        for (e = new Array(a), r = new Array(a), o = 0; o < a; ++o) {
          e[o] = isNaN(r[o] = +t(n[o], o, n)) ? 0 : +i(n[o], o, n);
        }
      }
    }

    return "function" != typeof t && (t = ic(null == t ? 0 : +t)), o.initialize = function (t) {
      n = t, a();
    }, o.strength = function (t) {
      return arguments.length ? (i = "function" == typeof t ? t : ic(+t), a(), o) : i;
    }, o.x = function (n) {
      return arguments.length ? (t = "function" == typeof n ? n : ic(+n), a(), o) : t;
    }, o;
  }, t.forceY = function (t) {
    var n,
        e,
        r,
        i = ic(.1);

    function o(t) {
      for (var i, o = 0, a = n.length; o < a; ++o) {
        (i = n[o]).vy += (r[o] - i.y) * e[o] * t;
      }
    }

    function a() {
      if (n) {
        var o,
            a = n.length;

        for (e = new Array(a), r = new Array(a), o = 0; o < a; ++o) {
          e[o] = isNaN(r[o] = +t(n[o], o, n)) ? 0 : +i(n[o], o, n);
        }
      }
    }

    return "function" != typeof t && (t = ic(null == t ? 0 : +t)), o.initialize = function (t) {
      n = t, a();
    }, o.strength = function (t) {
      return arguments.length ? (i = "function" == typeof t ? t : ic(+t), a(), o) : i;
    }, o.y = function (n) {
      return arguments.length ? (t = "function" == typeof n ? n : ic(+n), a(), o) : t;
    }, o;
  }, t.formatDefaultLocale = Ec, t.formatLocale = Sc, t.formatSpecifier = _c, t.fsum = function (t, n) {
    var e = new g();

    if (void 0 === n) {
      var _iterator41 = _createForOfIteratorHelper(t),
          _step41;

      try {
        for (_iterator41.s(); !(_step41 = _iterator41.n()).done;) {
          var _n60 = _step41.value;
          (_n60 = +_n60) && e.add(_n60);
        }
      } catch (err) {
        _iterator41.e(err);
      } finally {
        _iterator41.f();
      }
    } else {
      var _r33 = -1;

      var _iterator42 = _createForOfIteratorHelper(t),
          _step42;

      try {
        for (_iterator42.s(); !(_step42 = _iterator42.n()).done;) {
          var _i29 = _step42.value;
          (_i29 = +n(_i29, ++_r33, t)) && e.add(_i29);
        }
      } catch (err) {
        _iterator42.e(err);
      } finally {
        _iterator42.f();
      }
    }

    return +e;
  }, t.geoAlbers = Ph, t.geoAlbersUsa = function () {
    var t,
        n,
        e,
        r,
        i,
        o,
        a = Ph(),
        u = Ch().rotate([154, 0]).center([-2, 58.5]).parallels([55, 65]),
        c = Ch().rotate([157, 0]).center([-3, 19.9]).parallels([8, 18]),
        f = {
      point: function point(t, n) {
        o = [t, n];
      }
    };

    function s(t) {
      var n = t[0],
          a = t[1];
      return o = null, e.point(n, a), o || (r.point(n, a), o) || (i.point(n, a), o);
    }

    function l() {
      return t = n = null, s;
    }

    return s.invert = function (t) {
      var n = a.scale(),
          e = a.translate(),
          r = (t[0] - e[0]) / n,
          i = (t[1] - e[1]) / n;
      return (i >= .12 && i < .234 && r >= -.425 && r < -.214 ? u : i >= .166 && i < .234 && r >= -.214 && r < -.115 ? c : a).invert(t);
    }, s.stream = function (e) {
      return t && n === e ? t : (r = [a.stream(n = e), u.stream(e), c.stream(e)], i = r.length, t = {
        point: function point(t, n) {
          for (var e = -1; ++e < i;) {
            r[e].point(t, n);
          }
        },
        sphere: function sphere() {
          for (var t = -1; ++t < i;) {
            r[t].sphere();
          }
        },
        lineStart: function lineStart() {
          for (var t = -1; ++t < i;) {
            r[t].lineStart();
          }
        },
        lineEnd: function lineEnd() {
          for (var t = -1; ++t < i;) {
            r[t].lineEnd();
          }
        },
        polygonStart: function polygonStart() {
          for (var t = -1; ++t < i;) {
            r[t].polygonStart();
          }
        },
        polygonEnd: function polygonEnd() {
          for (var t = -1; ++t < i;) {
            r[t].polygonEnd();
          }
        }
      });
      var r, i;
    }, s.precision = function (t) {
      return arguments.length ? (a.precision(t), u.precision(t), c.precision(t), l()) : a.precision();
    }, s.scale = function (t) {
      return arguments.length ? (a.scale(t), u.scale(.35 * t), c.scale(t), s.translate(a.translate())) : a.scale();
    }, s.translate = function (t) {
      if (!arguments.length) return a.translate();
      var n = a.scale(),
          o = +t[0],
          s = +t[1];
      return e = a.translate(t).clipExtent([[o - .455 * n, s - .238 * n], [o + .455 * n, s + .238 * n]]).stream(f), r = u.translate([o - .307 * n, s + .201 * n]).clipExtent([[o - .425 * n + Pc, s + .12 * n + Pc], [o - .214 * n - Pc, s + .234 * n - Pc]]).stream(f), i = c.translate([o - .205 * n, s + .212 * n]).clipExtent([[o - .214 * n + Pc, s + .166 * n + Pc], [o - .115 * n - Pc, s + .234 * n - Pc]]).stream(f), l();
    }, s.fitExtent = function (t, n) {
      return _h(s, t, n);
    }, s.fitSize = function (t, n) {
      return bh(s, t, n);
    }, s.fitWidth = function (t, n) {
      return mh(s, t, n);
    }, s.fitHeight = function (t, n) {
      return xh(s, t, n);
    }, s.scale(1070);
  }, t.geoArea = function (t) {
    return Sf = new g(), cf(t, Ef), 2 * Sf;
  }, t.geoAzimuthalEqualArea = function () {
    return Sh(qh).scale(124.75).clipAngle(179.999);
  }, t.geoAzimuthalEqualAreaRaw = qh, t.geoAzimuthalEquidistant = function () {
    return Sh(Rh).scale(79.4188).clipAngle(179.999);
  }, t.geoAzimuthalEquidistantRaw = Rh, t.geoBounds = function (t) {
    var n, e, r, i, o, a, u;

    if (vf = yf = -(pf = gf = 1 / 0), Mf = [], cf(t, ns), e = Mf.length) {
      for (Mf.sort(ss), n = 1, o = [r = Mf[0]]; n < e; ++n) {
        ls(r, (i = Mf[n])[0]) || ls(r, i[1]) ? (fs(r[0], i[1]) > fs(r[0], r[1]) && (r[1] = i[1]), fs(i[0], r[1]) > fs(r[0], r[1]) && (r[0] = i[0])) : o.push(r = i);
      }

      for (a = -1 / 0, n = 0, r = o[e = o.length - 1]; n <= e; r = i, ++n) {
        i = o[n], (u = fs(r[1], i[0])) > a && (a = u, pf = i[0], yf = r[1]);
      }
    }

    return Mf = Af = null, pf === 1 / 0 || gf === 1 / 0 ? [[NaN, NaN], [NaN, NaN]] : [[pf, gf], [yf, vf]];
  }, t.geoCentroid = function (t) {
    Uf = Bf = Yf = Lf = jf = Hf = Xf = Gf = 0, Vf = new g(), $f = new g(), Wf = new g(), cf(t, hs);
    var n = +Vf,
        e = +$f,
        r = +Wf,
        i = Xc(n, e, r);
    return i < zc && (n = Hf, e = Xf, r = Gf, Bf < Pc && (n = Yf, e = Lf, r = jf), (i = Xc(n, e, r)) < zc) ? [NaN, NaN] : [Yc(e, n) * Oc, Jc(r / i) * Oc];
  }, t.geoCircle = function () {
    var t,
        n,
        e = Ms([0, 0]),
        r = Ms(90),
        i = Ms(6),
        o = {
      point: function point(e, r) {
        t.push(e = n(e, r)), e[0] *= Oc, e[1] *= Oc;
      }
    };

    function a() {
      var a = e.apply(this, arguments),
          u = r.apply(this, arguments) * Ic,
          c = i.apply(this, arguments) * Ic;
      return t = [], n = Ss(-a[0] * Ic, -a[1] * Ic, 0).invert, Ps(o, u, c, 1), a = {
        type: "Polygon",
        coordinates: [t]
      }, t = n = null, a;
    }

    return a.center = function (t) {
      return arguments.length ? (e = "function" == typeof t ? t : Ms([+t[0], +t[1]]), a) : e;
    }, a.radius = function (t) {
      return arguments.length ? (r = "function" == typeof t ? t : Ms(+t), a) : r;
    }, a.precision = function (t) {
      return arguments.length ? (i = "function" == typeof t ? t : Ms(+t), a) : i;
    }, a;
  }, t.geoClipAntimeridian = js, t.geoClipCircle = Hs, t.geoClipExtent = function () {
    var t,
        n,
        e,
        r = 0,
        i = 0,
        o = 960,
        a = 500;
    return e = {
      stream: function stream(e) {
        return t && n === e ? t : t = Ks(r, i, o, a)(n = e);
      },
      extent: function extent(u) {
        return arguments.length ? (r = +u[0][0], i = +u[0][1], o = +u[1][0], a = +u[1][1], t = n = null, e) : [[r, i], [o, a]];
      }
    };
  }, t.geoClipRectangle = Ks, t.geoConicConformal = function () {
    return kh(Uh).scale(109.5).parallels([30, 30]);
  }, t.geoConicConformalRaw = Uh, t.geoConicEqualArea = Ch, t.geoConicEqualAreaRaw = Nh, t.geoConicEquidistant = function () {
    return kh(Yh).scale(131.154).center([0, 13.9389]);
  }, t.geoConicEquidistantRaw = Yh, t.geoContains = function (t, n) {
    return (t && al.hasOwnProperty(t.type) ? al[t.type] : cl)(t, n);
  }, t.geoDistance = ol, t.geoEqualEarth = function () {
    return Sh(Vh).scale(177.158);
  }, t.geoEqualEarthRaw = Vh, t.geoEquirectangular = function () {
    return Sh(Bh).scale(152.63);
  }, t.geoEquirectangularRaw = Bh, t.geoGnomonic = function () {
    return Sh($h).scale(144.049).clipAngle(60);
  }, t.geoGnomonicRaw = $h, t.geoGraticule = yl, t.geoGraticule10 = function () {
    return yl()();
  }, t.geoIdentity = function () {
    var t,
        n,
        e,
        r,
        i,
        o,
        a,
        u = 1,
        c = 0,
        f = 0,
        s = 1,
        l = 1,
        h = 0,
        d = null,
        p = 1,
        g = 1,
        y = gh({
      point: function point(t, n) {
        var e = b([t, n]);
        this.stream.point(e[0], e[1]);
      }
    }),
        v = xl;

    function _() {
      return p = u * s, g = u * l, o = a = null, b;
    }

    function b(e) {
      var r = e[0] * p,
          i = e[1] * g;

      if (h) {
        var o = i * t - r * n;
        r = r * t + i * n, i = o;
      }

      return [r + c, i + f];
    }

    return b.invert = function (e) {
      var r = e[0] - c,
          i = e[1] - f;

      if (h) {
        var o = i * t + r * n;
        r = r * t - i * n, i = o;
      }

      return [r / p, i / g];
    }, b.stream = function (t) {
      return o && a === t ? o : o = y(v(a = t));
    }, b.postclip = function (t) {
      return arguments.length ? (v = t, d = e = r = i = null, _()) : v;
    }, b.clipExtent = function (t) {
      return arguments.length ? (v = null == t ? (d = e = r = i = null, xl) : Ks(d = +t[0][0], e = +t[0][1], r = +t[1][0], i = +t[1][1]), _()) : null == d ? null : [[d, e], [r, i]];
    }, b.scale = function (t) {
      return arguments.length ? (u = +t, _()) : u;
    }, b.translate = function (t) {
      return arguments.length ? (c = +t[0], f = +t[1], _()) : [c, f];
    }, b.angle = function (e) {
      return arguments.length ? (n = $c(h = e % 360 * Ic), t = Lc(h), _()) : h * Oc;
    }, b.reflectX = function (t) {
      return arguments.length ? (s = t ? -1 : 1, _()) : s < 0;
    }, b.reflectY = function (t) {
      return arguments.length ? (l = t ? -1 : 1, _()) : l < 0;
    }, b.fitExtent = function (t, n) {
      return _h(b, t, n);
    }, b.fitSize = function (t, n) {
      return bh(b, t, n);
    }, b.fitWidth = function (t, n) {
      return mh(b, t, n);
    }, b.fitHeight = function (t, n) {
      return xh(b, t, n);
    }, b;
  }, t.geoInterpolate = function (t, n) {
    var e = t[0] * Ic,
        r = t[1] * Ic,
        i = n[0] * Ic,
        o = n[1] * Ic,
        a = Lc(r),
        u = $c(r),
        c = Lc(o),
        f = $c(o),
        s = a * Lc(e),
        l = a * $c(e),
        h = c * Lc(i),
        d = c * $c(i),
        p = 2 * Jc(Zc(tf(o - r) + a * c * tf(i - e))),
        g = $c(p),
        y = p ? function (t) {
      var n = $c(t *= p) / g,
          e = $c(p - t) / g,
          r = e * s + n * h,
          i = e * l + n * d,
          o = e * u + n * f;
      return [Yc(i, r) * Oc, Yc(o, Zc(r * r + i * i)) * Oc];
    } : function () {
      return [e * Oc, r * Oc];
    };
    return y.distance = p, y;
  }, t.geoLength = el, t.geoMercator = function () {
    return Oh(Fh).scale(961 / Fc);
  }, t.geoMercatorRaw = Fh, t.geoNaturalEarth1 = function () {
    return Sh(Wh).scale(175.295);
  }, t.geoNaturalEarth1Raw = Wh, t.geoOrthographic = function () {
    return Sh(Zh).scale(249.5).clipAngle(90.000001);
  }, t.geoOrthographicRaw = Zh, t.geoPath = function (t, n) {
    var e,
        r,
        i = 4.5;

    function o(t) {
      return t && ("function" == typeof i && r.pointRadius(+i.apply(this, arguments)), cf(t, e(r))), r.result();
    }

    return o.area = function (t) {
      return cf(t, e(Al)), Al.result();
    }, o.measure = function (t) {
      return cf(t, e(sh)), sh.result();
    }, o.bounds = function (t) {
      return cf(t, e(Dl)), Dl.result();
    }, o.centroid = function (t) {
      return cf(t, e(Vl)), Vl.result();
    }, o.projection = function (n) {
      return arguments.length ? (e = null == n ? (t = null, xl) : (t = n).stream, o) : t;
    }, o.context = function (t) {
      return arguments.length ? (r = null == t ? (n = null, new dh()) : new rh(n = t), "function" != typeof i && r.pointRadius(i), o) : n;
    }, o.pointRadius = function (t) {
      return arguments.length ? (i = "function" == typeof t ? t : (r.pointRadius(+t), +t), o) : i;
    }, o.projection(t).context(n);
  }, t.geoProjection = Sh, t.geoProjectionMutator = Eh, t.geoRotation = Cs, t.geoStereographic = function () {
    return Sh(Kh).scale(250).clipAngle(142);
  }, t.geoStereographicRaw = Kh, t.geoStream = cf, t.geoTransform = function (t) {
    return {
      stream: gh(t)
    };
  }, t.geoTransverseMercator = function () {
    var t = Oh(Qh),
        n = t.center,
        e = t.rotate;
    return t.center = function (t) {
      return arguments.length ? n([-t[1], t[0]]) : [(t = n())[1], -t[0]];
    }, t.rotate = function (t) {
      return arguments.length ? e([t[0], t[1], t.length > 2 ? t[2] + 90 : 90]) : [(t = e())[0], t[1], t[2] - 90];
    }, e([0, 0, 90]).scale(159.155);
  }, t.geoTransverseMercatorRaw = Qh, t.gray = function (t, n) {
    return new Ye(t, 0, 0, null == n ? 1 : n);
  }, t.greatest = function (t) {
    var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : n;
    var r,
        i = !1;

    if (1 === e.length) {
      var _o22;

      var _iterator43 = _createForOfIteratorHelper(t),
          _step43;

      try {
        for (_iterator43.s(); !(_step43 = _iterator43.n()).done;) {
          var _a19 = _step43.value;

          var _t29 = e(_a19);

          (i ? n(_t29, _o22) > 0 : 0 === n(_t29, _t29)) && (r = _a19, _o22 = _t29, i = !0);
        }
      } catch (err) {
        _iterator43.e(err);
      } finally {
        _iterator43.f();
      }
    } else {
      var _iterator44 = _createForOfIteratorHelper(t),
          _step44;

      try {
        for (_iterator44.s(); !(_step44 = _iterator44.n()).done;) {
          var _n61 = _step44.value;
          (i ? e(_n61, r) > 0 : 0 === e(_n61, _n61)) && (r = _n61, i = !0);
        }
      } catch (err) {
        _iterator44.e(err);
      } finally {
        _iterator44.f();
      }
    }

    return r;
  }, t.greatestIndex = function (t) {
    var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : n;
    if (1 === e.length) return W(t, e);
    var r,
        i = -1,
        o = -1;

    var _iterator45 = _createForOfIteratorHelper(t),
        _step45;

    try {
      for (_iterator45.s(); !(_step45 = _iterator45.n()).done;) {
        var _n62 = _step45.value;
        ++o, (i < 0 ? 0 === e(_n62, _n62) : e(_n62, r) > 0) && (r = _n62, i = o);
      }
    } catch (err) {
      _iterator45.e(err);
    } finally {
      _iterator45.f();
    }

    return i;
  }, t.group = M, t.groupSort = function (t, e, r) {
    return (1 === e.length ? P(S(t, e, r), function (_ref14, _ref15) {
      var _ref16 = _slicedToArray(_ref14, 2),
          t = _ref16[0],
          e = _ref16[1];

      var _ref17 = _slicedToArray(_ref15, 2),
          r = _ref17[0],
          i = _ref17[1];

      return n(e, i) || n(t, r);
    }) : P(M(t, r), function (_ref18, _ref19) {
      var _ref20 = _slicedToArray(_ref18, 2),
          t = _ref20[0],
          r = _ref20[1];

      var _ref21 = _slicedToArray(_ref19, 2),
          i = _ref21[0],
          o = _ref21[1];

      return e(r, o) || n(t, i);
    })).map(function (_ref22) {
      var _ref23 = _slicedToArray(_ref22, 1),
          t = _ref23[0];

      return t;
    });
  }, t.groups = A, t.hcl = Ve, t.hierarchy = rd, t.histogram = L, t.hsl = Ne, t.html = $u, t.image = function (t, n) {
    return new Promise(function (e, r) {
      var i = new Image();

      for (var o in n) {
        i[o] = n[o];
      }

      i.onerror = r, i.onload = function () {
        e(i);
      }, i.src = t;
    });
  }, t.index = function (t) {
    for (var _len10 = arguments.length, n = new Array(_len10 > 1 ? _len10 - 1 : 0), _key10 = 1; _key10 < _len10; _key10++) {
      n[_key10 - 1] = arguments[_key10];
    }

    return N(t, w, k, n);
  }, t.indexes = function (t) {
    for (var _len11 = arguments.length, n = new Array(_len11 > 1 ? _len11 - 1 : 0), _key11 = 1; _key11 < _len11; _key11++) {
      n[_key11 - 1] = arguments[_key11];
    }

    return N(t, Array.from, k, n);
  }, t.interpolate = kr, t.interpolateArray = function (t, n) {
    return (mr(n) ? br : xr)(t, n);
  }, t.interpolateBasis = cr, t.interpolateBasisClosed = fr, t.interpolateBlues = G_, t.interpolateBrBG = i_, t.interpolateBuGn = w_, t.interpolateBuPu = A_, t.interpolateCividis = function (t) {
    return t = Math.max(0, Math.min(1, t)), "rgb(" + Math.max(0, Math.min(255, Math.round(-4.54 - t * (35.34 - t * (2381.73 - t * (6402.7 - t * (7024.72 - 2710.57 * t))))))) + ", " + Math.max(0, Math.min(255, Math.round(32.49 + t * (170.73 + t * (52.82 - t * (131.46 - t * (176.58 - 67.37 * t))))))) + ", " + Math.max(0, Math.min(255, Math.round(81.24 + t * (442.36 - t * (2482.43 - t * (6167.24 - t * (6614.94 - 2475.67 * t))))))) + ")";
  }, t.interpolateCool = ob, t.interpolateCubehelix = Gr, t.interpolateCubehelixDefault = rb, t.interpolateCubehelixLong = Vr, t.interpolateDate = wr, t.interpolateDiscrete = function (t) {
    var n = t.length;
    return function (e) {
      return t[Math.max(0, Math.min(n - 1, Math.floor(e * n)))];
    };
  }, t.interpolateGnBu = S_, t.interpolateGreens = $_, t.interpolateGreys = Z_, t.interpolateHcl = jr, t.interpolateHclLong = Hr, t.interpolateHsl = Br, t.interpolateHslLong = Yr, t.interpolateHue = function (t, n) {
    var e = hr(+t, +n);
    return function (t) {
      var n = e(t);
      return n - 360 * Math.floor(n / 360);
    };
  }, t.interpolateInferno = db, t.interpolateLab = function (t, n) {
    var e = pr((t = Be(t)).l, (n = Be(n)).l),
        r = pr(t.a, n.a),
        i = pr(t.b, n.b),
        o = pr(t.opacity, n.opacity);
    return function (n) {
      return t.l = e(n), t.a = r(n), t.b = i(n), t.opacity = o(n), t + "";
    };
  }, t.interpolateMagma = hb, t.interpolateNumber = Mr, t.interpolateNumberArray = br, t.interpolateObject = Ar, t.interpolateOrRd = k_, t.interpolateOranges = eb, t.interpolatePRGn = a_, t.interpolatePiYG = c_, t.interpolatePlasma = pb, t.interpolatePuBu = z_, t.interpolatePuBuGn = C_, t.interpolatePuOr = s_, t.interpolatePuRd = q_, t.interpolatePurples = Q_, t.interpolateRainbow = function (t) {
    (t < 0 || t > 1) && (t -= Math.floor(t));
    var n = Math.abs(t - .5);
    return ab.h = 360 * t - 100, ab.s = 1.5 - 1.5 * n, ab.l = .8 - .9 * n, ab + "";
  }, t.interpolateRdBu = h_, t.interpolateRdGy = p_, t.interpolateRdPu = F_, t.interpolateRdYlBu = y_, t.interpolateRdYlGn = __, t.interpolateReds = tb, t.interpolateRgb = gr, t.interpolateRgbBasis = vr, t.interpolateRgbBasisClosed = _r, t.interpolateRound = Nr, t.interpolateSinebow = function (t) {
    var n;
    return t = (.5 - t) * Math.PI, ub.r = 255 * (n = Math.sin(t)) * n, ub.g = 255 * (n = Math.sin(t + cb)) * n, ub.b = 255 * (n = Math.sin(t + fb)) * n, ub + "";
  }, t.interpolateSpectral = m_, t.interpolateString = Er, t.interpolateTransformCss = Rr, t.interpolateTransformSvg = Fr, t.interpolateTurbo = function (t) {
    return t = Math.max(0, Math.min(1, t)), "rgb(" + Math.max(0, Math.min(255, Math.round(34.61 + t * (1172.33 - t * (10793.56 - t * (33300.12 - t * (38394.49 - 14825.05 * t))))))) + ", " + Math.max(0, Math.min(255, Math.round(23.31 + t * (557.33 + t * (1225.33 - t * (3574.96 - t * (1073.77 + 707.56 * t))))))) + ", " + Math.max(0, Math.min(255, Math.round(27.2 + t * (3211.1 - t * (15327.97 - t * (27814 - t * (22569.18 - 6838.66 * t))))))) + ")";
  }, t.interpolateViridis = lb, t.interpolateWarm = ib, t.interpolateYlGn = B_, t.interpolateYlGnBu = I_, t.interpolateYlOrBr = L_, t.interpolateYlOrRd = H_, t.interpolateZoom = Ir, t.interrupt = mi, t.intersection = function (t) {
    for (var _len12 = arguments.length, n = new Array(_len12 > 1 ? _len12 - 1 : 0), _key12 = 1; _key12 < _len12; _key12++) {
      n[_key12 - 1] = arguments[_key12];
    }

    t = new Set(t), n = n.map(ot);

    var _iterator46 = _createForOfIteratorHelper(t),
        _step46;

    try {
      t: for (_iterator46.s(); !(_step46 = _iterator46.n()).done;) {
        var _e38 = _step46.value;

        var _iterator47 = _createForOfIteratorHelper(n),
            _step47;

        try {
          for (_iterator47.s(); !(_step47 = _iterator47.n()).done;) {
            var _r34 = _step47.value;

            if (!_r34.has(_e38)) {
              t["delete"](_e38);
              continue t;
            }
          }
        } catch (err) {
          _iterator47.e(err);
        } finally {
          _iterator47.f();
        }
      }
    } catch (err) {
      _iterator46.e(err);
    } finally {
      _iterator46.f();
    }

    return t;
  }, t.interval = function (t, n, e) {
    var r = new ui(),
        i = n;
    return null == n ? (r.restart(t, n, e), r) : (r._restart = r.restart, r.restart = function (t, n, e) {
      n = +n, e = null == e ? oi() : +e, r._restart(function o(a) {
        a += i, r._restart(o, i += n, e), t(a);
      }, n, e);
    }, r.restart(t, n, e), r);
  }, t.isoFormat = Rv, t.isoParse = Fv, t.json = function (t, n) {
    return fetch(t, n).then(Xu);
  }, t.lab = Be, t.lch = function (t, n, e, r) {
    return 1 === arguments.length ? Ge(t) : new $e(e, n, t, null == r ? 1 : r);
  }, t.least = function (t) {
    var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : n;
    var r,
        i = !1;

    if (1 === e.length) {
      var _o23;

      var _iterator48 = _createForOfIteratorHelper(t),
          _step48;

      try {
        for (_iterator48.s(); !(_step48 = _iterator48.n()).done;) {
          var _a20 = _step48.value;

          var _t30 = e(_a20);

          (i ? n(_t30, _o23) < 0 : 0 === n(_t30, _t30)) && (r = _a20, _o23 = _t30, i = !0);
        }
      } catch (err) {
        _iterator48.e(err);
      } finally {
        _iterator48.f();
      }
    } else {
      var _iterator49 = _createForOfIteratorHelper(t),
          _step49;

      try {
        for (_iterator49.s(); !(_step49 = _iterator49.n()).done;) {
          var _n63 = _step49.value;
          (i ? e(_n63, r) < 0 : 0 === e(_n63, _n63)) && (r = _n63, i = !0);
        }
      } catch (err) {
        _iterator49.e(err);
      } finally {
        _iterator49.f();
      }
    }

    return r;
  }, t.leastIndex = tt, t.line = Lb, t.lineRadial = Zb, t.linkHorizontal = function () {
    return nm(em);
  }, t.linkRadial = function () {
    var t = nm(im);
    return t.angle = t.x, delete t.x, t.radius = t.y, delete t.y, t;
  }, t.linkVertical = function () {
    return nm(rm);
  }, t.local = In, t.map = function (t, n) {
    if ("function" != typeof t[Symbol.iterator]) throw new TypeError("values is not iterable");
    if ("function" != typeof n) throw new TypeError("mapper is not a function");
    return Array.from(t, function (e, r) {
      return n(e, r, t);
    });
  }, t.matcher = zt, t.max = j, t.maxIndex = W, t.mean = function (t, n) {
    var e = 0,
        r = 0;

    if (void 0 === n) {
      var _iterator50 = _createForOfIteratorHelper(t),
          _step50;

      try {
        for (_iterator50.s(); !(_step50 = _iterator50.n()).done;) {
          var _n64 = _step50.value;
          null != _n64 && (_n64 = +_n64) >= _n64 && (++e, r += _n64);
        }
      } catch (err) {
        _iterator50.e(err);
      } finally {
        _iterator50.f();
      }
    } else {
      var _i30 = -1;

      var _iterator51 = _createForOfIteratorHelper(t),
          _step51;

      try {
        for (_iterator51.s(); !(_step51 = _iterator51.n()).done;) {
          var _o24 = _step51.value;
          null != (_o24 = n(_o24, ++_i30, t)) && (_o24 = +_o24) >= _o24 && (++e, r += _o24);
        }
      } catch (err) {
        _iterator51.e(err);
      } finally {
        _iterator51.f();
      }
    }

    if (e) return r / e;
  }, t.median = function (t, n) {
    return V(t, .5, n);
  }, t.merge = Z, t.min = H, t.minIndex = K, t.mode = function (t, n) {
    var e = new y();

    if (void 0 === n) {
      var _iterator52 = _createForOfIteratorHelper(t),
          _step52;

      try {
        for (_iterator52.s(); !(_step52 = _iterator52.n()).done;) {
          var _n65 = _step52.value;
          null != _n65 && _n65 >= _n65 && e.set(_n65, (e.get(_n65) || 0) + 1);
        }
      } catch (err) {
        _iterator52.e(err);
      } finally {
        _iterator52.f();
      }
    } else {
      var _r35 = -1;

      var _iterator53 = _createForOfIteratorHelper(t),
          _step53;

      try {
        for (_iterator53.s(); !(_step53 = _iterator53.n()).done;) {
          var _i31 = _step53.value;
          null != (_i31 = n(_i31, ++_r35, t)) && _i31 >= _i31 && e.set(_i31, (e.get(_i31) || 0) + 1);
        }
      } catch (err) {
        _iterator53.e(err);
      } finally {
        _iterator53.f();
      }
    }

    var r,
        i = 0;

    var _iterator54 = _createForOfIteratorHelper(e),
        _step54;

    try {
      for (_iterator54.s(); !(_step54 = _iterator54.n()).done;) {
        var _step54$value = _slicedToArray(_step54.value, 2),
            _t31 = _step54$value[0],
            _n66 = _step54$value[1];

        _n66 > i && (i = _n66, r = _t31);
      }
    } catch (err) {
      _iterator54.e(err);
    } finally {
      _iterator54.f();
    }

    return r;
  }, t.namespace = Mt, t.namespaces = wt, t.nice = B, t.now = oi, t.pack = function () {
    var t = null,
        n = 1,
        e = 1,
        r = Ad;

    function i(i) {
      return i.x = n / 2, i.y = e / 2, t ? i.eachBefore(Ed(t)).eachAfter(kd(r, .5)).eachBefore(Nd(1)) : i.eachBefore(Ed(Sd)).eachAfter(kd(Ad, 1)).eachAfter(kd(r, i.r / Math.min(n, e))).eachBefore(Nd(Math.min(n, e) / (2 * i.r))), i;
    }

    return i.radius = function (n) {
      return arguments.length ? (t = wd(n), i) : t;
    }, i.size = function (t) {
      return arguments.length ? (n = +t[0], e = +t[1], i) : [n, e];
    }, i.padding = function (t) {
      return arguments.length ? (r = "function" == typeof t ? t : Td(+t), i) : r;
    }, i;
  }, t.packEnclose = fd, t.packSiblings = function (t) {
    return xd(t), t;
  }, t.pairs = function (t) {
    var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Q;
    var e = [];
    var r,
        i = !1;

    var _iterator55 = _createForOfIteratorHelper(t),
        _step55;

    try {
      for (_iterator55.s(); !(_step55 = _iterator55.n()).done;) {
        var _o25 = _step55.value;
        i && e.push(n(r, _o25)), r = _o25, i = !0;
      }
    } catch (err) {
      _iterator55.e(err);
    } finally {
      _iterator55.f();
    }

    return e;
  }, t.partition = function () {
    var t = 1,
        n = 1,
        e = 0,
        r = !1;

    function i(i) {
      var o = i.height + 1;
      return i.x0 = i.y0 = e, i.x1 = t, i.y1 = n / o, i.eachBefore(function (t, n) {
        return function (r) {
          r.children && Pd(r, r.x0, t * (r.depth + 1) / n, r.x1, t * (r.depth + 2) / n);
          var i = r.x0,
              o = r.y0,
              a = r.x1 - e,
              u = r.y1 - e;
          a < i && (i = a = (i + a) / 2), u < o && (o = u = (o + u) / 2), r.x0 = i, r.y0 = o, r.x1 = a, r.y1 = u;
        };
      }(n, o)), r && i.eachBefore(Cd), i;
    }

    return i.round = function (t) {
      return arguments.length ? (r = !!t, i) : r;
    }, i.size = function (e) {
      return arguments.length ? (t = +e[0], n = +e[1], i) : [t, n];
    }, i.padding = function (t) {
      return arguments.length ? (e = +t, i) : e;
    }, i;
  }, t.path = pa, t.permute = C, t.pie = function () {
    var t = Xb,
        n = Hb,
        e = null,
        r = gb(0),
        i = gb(Sb),
        o = gb(0);

    function a(a) {
      var u,
          c,
          f,
          s,
          l,
          h = (a = Ob(a)).length,
          d = 0,
          p = new Array(h),
          g = new Array(h),
          y = +r.apply(this, arguments),
          v = Math.min(Sb, Math.max(-Sb, i.apply(this, arguments) - y)),
          _ = Math.min(Math.abs(v) / h, o.apply(this, arguments)),
          b = _ * (v < 0 ? -1 : 1);

      for (u = 0; u < h; ++u) {
        (l = g[p[u] = u] = +t(a[u], u, a)) > 0 && (d += l);
      }

      for (null != n ? p.sort(function (t, e) {
        return n(g[t], g[e]);
      }) : null != e && p.sort(function (t, n) {
        return e(a[t], a[n]);
      }), u = 0, f = d ? (v - h * b) / d : 0; u < h; ++u, y = s) {
        c = p[u], s = y + ((l = g[c]) > 0 ? l * f : 0) + b, g[c] = {
          data: a[c],
          index: u,
          value: l,
          startAngle: y,
          endAngle: s,
          padAngle: _
        };
      }

      return g;
    }

    return a.value = function (n) {
      return arguments.length ? (t = "function" == typeof n ? n : gb(+n), a) : t;
    }, a.sortValues = function (t) {
      return arguments.length ? (n = t, e = null, a) : n;
    }, a.sort = function (t) {
      return arguments.length ? (e = t, n = null, a) : e;
    }, a.startAngle = function (t) {
      return arguments.length ? (r = "function" == typeof t ? t : gb(+t), a) : r;
    }, a.endAngle = function (t) {
      return arguments.length ? (i = "function" == typeof t ? t : gb(+t), a) : i;
    }, a.padAngle = function (t) {
      return arguments.length ? (o = "function" == typeof t ? t : gb(+t), a) : o;
    }, a;
  }, t.piecewise = $r, t.pointRadial = Qb, t.pointer = Yn, t.pointers = function (t, n) {
    return t.target && (t = Bn(t), void 0 === n && (n = t.currentTarget), t = t.touches || [t]), Array.from(t, function (t) {
      return Yn(t, n);
    });
  }, t.polygonArea = function (t) {
    for (var n, e = -1, r = t.length, i = t[r - 1], o = 0; ++e < r;) {
      n = i, i = t[e], o += n[1] * i[0] - n[0] * i[1];
    }

    return o / 2;
  }, t.polygonCentroid = function (t) {
    for (var n, e, r = -1, i = t.length, o = 0, a = 0, u = t[i - 1], c = 0; ++r < i;) {
      n = u, u = t[r], c += e = n[0] * u[1] - u[0] * n[1], o += (n[0] + u[0]) * e, a += (n[1] + u[1]) * e;
    }

    return [o / (c *= 3), a / c];
  }, t.polygonContains = function (t, n) {
    for (var e, r, i = t.length, o = t[i - 1], a = n[0], u = n[1], c = o[0], f = o[1], s = !1, l = 0; l < i; ++l) {
      e = (o = t[l])[0], (r = o[1]) > u != f > u && a < (c - e) * (u - r) / (f - r) + e && (s = !s), c = e, f = r;
    }

    return s;
  }, t.polygonHull = function (t) {
    if ((e = t.length) < 3) return null;
    var n,
        e,
        r = new Array(e),
        i = new Array(e);

    for (n = 0; n < e; ++n) {
      r[n] = [+t[n][0], +t[n][1], n];
    }

    for (r.sort($d), n = 0; n < e; ++n) {
      i[n] = [r[n][0], -r[n][1]];
    }

    var o = Wd(r),
        a = Wd(i),
        u = a[0] === o[0],
        c = a[a.length - 1] === o[o.length - 1],
        f = [];

    for (n = o.length - 1; n >= 0; --n) {
      f.push(t[r[o[n]][2]]);
    }

    for (n = +u; n < a.length - c; ++n) {
      f.push(t[r[a[n]][2]]);
    }

    return f;
  }, t.polygonLength = function (t) {
    for (var n, e, r = -1, i = t.length, o = t[i - 1], a = o[0], u = o[1], c = 0; ++r < i;) {
      n = a, e = u, n -= a = (o = t[r])[0], e -= u = o[1], c += Math.hypot(n, e);
    }

    return c;
  }, t.precisionFixed = kc, t.precisionPrefix = Nc, t.precisionRound = Cc, t.quadtree = tc, t.quantile = V, t.quantileSorted = $, t.quantize = function (t, n) {
    for (var e = new Array(n), r = 0; r < n; ++r) {
      e[r] = t(r / (n - 1));
    }

    return e;
  }, t.quickselect = X, t.radialArea = Kb, t.radialLine = Zb, t.randomBates = ep, t.randomBernoulli = op, t.randomBeta = cp, t.randomBinomial = fp, t.randomCauchy = lp, t.randomExponential = rp, t.randomGamma = up, t.randomGeometric = ap, t.randomInt = Qd, t.randomIrwinHall = np, t.randomLcg = function () {
    var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Math.random();
    var n = 0 | (0 <= t && t < 1 ? t / pp : Math.abs(t));
    return function () {
      return n = 1664525 * n + 1013904223 | 0, pp * (n >>> 0);
    };
  }, t.randomLogNormal = tp, t.randomLogistic = hp, t.randomNormal = Jd, t.randomPareto = ip, t.randomPoisson = dp, t.randomUniform = Kd, t.randomWeibull = sp, t.range = J, t.reduce = function (t, n, e) {
    if ("function" != typeof n) throw new TypeError("reducer is not a function");
    var r = t[Symbol.iterator]();
    var i,
        o,
        a = -1;

    if (arguments.length < 3) {
      var _r$next;

      if ((_r$next = r.next(), i = _r$next.done, e = _r$next.value), i) return;
      ++a;
    }

    for (; (_r$next2 = r.next(), i = _r$next2.done, o = _r$next2.value), !i;) {
      var _r$next2;

      e = n(e, o, ++a, t);
    }

    return e;
  }, t.reverse = function (t) {
    if ("function" != typeof t[Symbol.iterator]) throw new TypeError("values is not iterable");
    return Array.from(t).reverse();
  }, t.rgb = we, t.ribbon = function () {
    return Aa();
  }, t.ribbonArrow = function () {
    return Aa(Ma);
  }, t.rollup = S, t.rollups = E, t.scaleBand = bp, t.scaleDiverging = function t() {
    var n = Pp(jv()(Mp));
    return n.copy = function () {
      return Yv(n, t());
    }, yp.apply(n, arguments);
  }, t.scaleDivergingLog = function t() {
    var n = Up(jv()).domain([.1, 1, 10]);
    return n.copy = function () {
      return Yv(n, t()).base(n.base());
    }, yp.apply(n, arguments);
  }, t.scaleDivergingPow = Hv, t.scaleDivergingSqrt = function () {
    return Hv.apply(null, arguments).exponent(.5);
  }, t.scaleDivergingSymlog = function t() {
    var n = Lp(jv());
    return n.copy = function () {
      return Yv(n, t()).constant(n.constant());
    }, yp.apply(n, arguments);
  }, t.scaleIdentity = function t(n) {
    var e;

    function r(t) {
      return null == t || isNaN(t = +t) ? e : t;
    }

    return r.invert = r, r.domain = r.range = function (t) {
      return arguments.length ? (n = Array.from(t, xp), r) : n.slice();
    }, r.unknown = function (t) {
      return arguments.length ? (e = t, r) : e;
    }, r.copy = function () {
      return t(n).unknown(e);
    }, n = arguments.length ? Array.from(n, xp) : [0, 1], Pp(r);
  }, t.scaleImplicit = vp, t.scaleLinear = function t() {
    var n = Np();
    return n.copy = function () {
      return Ep(n, t());
    }, gp.apply(n, arguments), Pp(n);
  }, t.scaleLog = function t() {
    var n = Up(kp()).domain([1, 10]);
    return n.copy = function () {
      return Ep(n, t()).base(n.base());
    }, gp.apply(n, arguments), n;
  }, t.scaleOrdinal = _p, t.scalePoint = function () {
    return mp(bp.apply(null, arguments).paddingInner(1));
  }, t.scalePow = Vp, t.scaleQuantile = function t() {
    var e,
        r = [],
        i = [],
        a = [];

    function u() {
      var t = 0,
          n = Math.max(1, i.length);

      for (a = new Array(n - 1); ++t < n;) {
        a[t - 1] = $(r, t / n);
      }

      return c;
    }

    function c(t) {
      return null == t || isNaN(t = +t) ? e : i[o(a, t)];
    }

    return c.invertExtent = function (t) {
      var n = i.indexOf(t);
      return n < 0 ? [NaN, NaN] : [n > 0 ? a[n - 1] : r[0], n < a.length ? a[n] : r[r.length - 1]];
    }, c.domain = function (t) {
      if (!arguments.length) return r.slice();
      r = [];

      var _iterator56 = _createForOfIteratorHelper(t),
          _step56;

      try {
        for (_iterator56.s(); !(_step56 = _iterator56.n()).done;) {
          var _n67 = _step56.value;
          null == _n67 || isNaN(_n67 = +_n67) || r.push(_n67);
        }
      } catch (err) {
        _iterator56.e(err);
      } finally {
        _iterator56.f();
      }

      return r.sort(n), u();
    }, c.range = function (t) {
      return arguments.length ? (i = Array.from(t), u()) : i.slice();
    }, c.unknown = function (t) {
      return arguments.length ? (e = t, c) : e;
    }, c.quantiles = function () {
      return a.slice();
    }, c.copy = function () {
      return t().domain(r).range(i).unknown(e);
    }, gp.apply(c, arguments);
  }, t.scaleQuantize = function t() {
    var n,
        e = 0,
        r = 1,
        i = 1,
        a = [.5],
        u = [0, 1];

    function c(t) {
      return null != t && t <= t ? u[o(a, t, 0, i)] : n;
    }

    function f() {
      var t = -1;

      for (a = new Array(i); ++t < i;) {
        a[t] = ((t + 1) * r - (t - i) * e) / (i + 1);
      }

      return c;
    }

    return c.domain = function (t) {
      var _t32;

      return arguments.length ? ((_t32 = _slicedToArray(t, 2), e = _t32[0], r = _t32[1]), e = +e, r = +r, f()) : [e, r];
    }, c.range = function (t) {
      return arguments.length ? (i = (u = Array.from(t)).length - 1, f()) : u.slice();
    }, c.invertExtent = function (t) {
      var n = u.indexOf(t);
      return n < 0 ? [NaN, NaN] : n < 1 ? [e, a[0]] : n >= i ? [a[i - 1], r] : [a[n - 1], a[n]];
    }, c.unknown = function (t) {
      return arguments.length ? (n = t, c) : c;
    }, c.thresholds = function () {
      return a.slice();
    }, c.copy = function () {
      return t().domain([e, r]).range(u).unknown(n);
    }, gp.apply(Pp(c), arguments);
  }, t.scaleRadial = function t() {
    var n,
        e = Np(),
        r = [0, 1],
        i = !1;

    function o(t) {
      var r = Wp(e(t));
      return isNaN(r) ? n : i ? Math.round(r) : r;
    }

    return o.invert = function (t) {
      return e.invert($p(t));
    }, o.domain = function (t) {
      return arguments.length ? (e.domain(t), o) : e.domain();
    }, o.range = function (t) {
      return arguments.length ? (e.range((r = Array.from(t, xp)).map($p)), o) : r.slice();
    }, o.rangeRound = function (t) {
      return o.range(t).round(!0);
    }, o.round = function (t) {
      return arguments.length ? (i = !!t, o) : i;
    }, o.clamp = function (t) {
      return arguments.length ? (e.clamp(t), o) : e.clamp();
    }, o.unknown = function (t) {
      return arguments.length ? (n = t, o) : n;
    }, o.copy = function () {
      return t(e.domain(), r).round(i).clamp(e.clamp()).unknown(n);
    }, gp.apply(o, arguments), Pp(o);
  }, t.scaleSequential = function t() {
    var n = Pp(Bv()(Mp));
    return n.copy = function () {
      return Yv(n, t());
    }, yp.apply(n, arguments);
  }, t.scaleSequentialLog = function t() {
    var n = Up(Bv()).domain([1, 10]);
    return n.copy = function () {
      return Yv(n, t()).base(n.base());
    }, yp.apply(n, arguments);
  }, t.scaleSequentialPow = Lv, t.scaleSequentialQuantile = function t() {
    var e = [],
        r = Mp;

    function i(t) {
      if (null != t && !isNaN(t = +t)) return r((o(e, t, 1) - 1) / (e.length - 1));
    }

    return i.domain = function (t) {
      if (!arguments.length) return e.slice();
      e = [];

      var _iterator57 = _createForOfIteratorHelper(t),
          _step57;

      try {
        for (_iterator57.s(); !(_step57 = _iterator57.n()).done;) {
          var _n68 = _step57.value;
          null == _n68 || isNaN(_n68 = +_n68) || e.push(_n68);
        }
      } catch (err) {
        _iterator57.e(err);
      } finally {
        _iterator57.f();
      }

      return e.sort(n), i;
    }, i.interpolator = function (t) {
      return arguments.length ? (r = t, i) : r;
    }, i.range = function () {
      return e.map(function (t, n) {
        return r(n / (e.length - 1));
      });
    }, i.quantiles = function (t) {
      return Array.from({
        length: t + 1
      }, function (n, r) {
        return V(e, r / t);
      });
    }, i.copy = function () {
      return t(r).domain(e);
    }, yp.apply(i, arguments);
  }, t.scaleSequentialSqrt = function () {
    return Lv.apply(null, arguments).exponent(.5);
  }, t.scaleSequentialSymlog = function t() {
    var n = Lp(Bv());
    return n.copy = function () {
      return Yv(n, t()).constant(n.constant());
    }, yp.apply(n, arguments);
  }, t.scaleSqrt = function () {
    return Vp.apply(null, arguments).exponent(.5);
  }, t.scaleSymlog = function t() {
    var n = Lp(kp());
    return n.copy = function () {
      return Ep(n, t()).constant(n.constant());
    }, gp.apply(n, arguments);
  }, t.scaleThreshold = function t() {
    var n,
        e = [.5],
        r = [0, 1],
        i = 1;

    function a(t) {
      return null != t && t <= t ? r[o(e, t, 0, i)] : n;
    }

    return a.domain = function (t) {
      return arguments.length ? (e = Array.from(t), i = Math.min(e.length, r.length - 1), a) : e.slice();
    }, a.range = function (t) {
      return arguments.length ? (r = Array.from(t), i = Math.min(e.length, r.length - 1), a) : r.slice();
    }, a.invertExtent = function (t) {
      var n = r.indexOf(t);
      return [e[n - 1], e[n]];
    }, a.unknown = function (t) {
      return arguments.length ? (n = t, a) : n;
    }, a.copy = function () {
      return t().domain(e).range(r).unknown(n);
    }, gp.apply(a, arguments);
  }, t.scaleTime = function () {
    return gp.apply(Uv(fy, sy, Dg, Pg, vg, pg, hg, sg, cg, t.timeFormat).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
  }, t.scaleUtc = function () {
    return gp.apply(Uv(uy, cy, iy, ey, Lg, Ug, Og, Rg, cg, t.utcFormat).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments);
  }, t.scan = function (t, n) {
    var e = tt(t, n);
    return e < 0 ? void 0 : e;
  }, t.schemeAccent = Vv, t.schemeBlues = X_, t.schemeBrBG = r_, t.schemeBuGn = x_, t.schemeBuPu = M_, t.schemeCategory10 = Gv, t.schemeDark2 = $v, t.schemeGnBu = T_, t.schemeGreens = V_, t.schemeGreys = W_, t.schemeOrRd = E_, t.schemeOranges = nb, t.schemePRGn = o_, t.schemePaired = Wv, t.schemePastel1 = Zv, t.schemePastel2 = Kv, t.schemePiYG = u_, t.schemePuBu = P_, t.schemePuBuGn = N_, t.schemePuOr = f_, t.schemePuRd = D_, t.schemePurples = K_, t.schemeRdBu = l_, t.schemeRdGy = d_, t.schemeRdPu = R_, t.schemeRdYlBu = g_, t.schemeRdYlGn = v_, t.schemeReds = J_, t.schemeSet1 = Qv, t.schemeSet2 = Jv, t.schemeSet3 = t_, t.schemeSpectral = b_, t.schemeTableau10 = n_, t.schemeYlGn = U_, t.schemeYlGnBu = O_, t.schemeYlOrBr = Y_, t.schemeYlOrRd = j_, t.select = Fn, t.selectAll = function (t) {
    return "string" == typeof t ? new qn([document.querySelectorAll(t)], [document.documentElement]) : new qn([Nt(t)], Dn);
  }, t.selection = Rn, t.selector = kt, t.selectorAll = Pt, t.shuffle = nt, t.shuffler = et, t.some = function (t, n) {
    if ("function" != typeof n) throw new TypeError("test is not a function");
    var e = -1;

    var _iterator58 = _createForOfIteratorHelper(t),
        _step58;

    try {
      for (_iterator58.s(); !(_step58 = _iterator58.n()).done;) {
        var _r36 = _step58.value;
        if (n(_r36, ++e, t)) return !0;
      }
    } catch (err) {
      _iterator58.e(err);
    } finally {
      _iterator58.f();
    }

    return !1;
  }, t.sort = P, t.stack = function () {
    var t = gb([]),
        n = rx,
        e = ex,
        r = ix;

    function i(i) {
      var o,
          a,
          u = Array.from(t.apply(this, arguments), ox),
          c = u.length,
          f = -1;

      var _iterator59 = _createForOfIteratorHelper(i),
          _step59;

      try {
        for (_iterator59.s(); !(_step59 = _iterator59.n()).done;) {
          var _t33 = _step59.value;

          for (o = 0, ++f; o < c; ++o) {
            (u[o][f] = [0, +r(_t33, u[o].key, f, i)]).data = _t33;
          }
        }
      } catch (err) {
        _iterator59.e(err);
      } finally {
        _iterator59.f();
      }

      for (o = 0, a = Ob(n(u)); o < c; ++o) {
        u[a[o]].index = o;
      }

      return e(u, a), u;
    }

    return i.keys = function (n) {
      return arguments.length ? (t = "function" == typeof n ? n : gb(Array.from(n)), i) : t;
    }, i.value = function (t) {
      return arguments.length ? (r = "function" == typeof t ? t : gb(+t), i) : r;
    }, i.order = function (t) {
      return arguments.length ? (n = null == t ? rx : "function" == typeof t ? t : gb(Array.from(t)), i) : n;
    }, i.offset = function (t) {
      return arguments.length ? (e = null == t ? ex : t, i) : e;
    }, i;
  }, t.stackOffsetDiverging = function (t, n) {
    if ((u = t.length) > 0) for (var e, r, i, o, a, u, c = 0, f = t[n[0]].length; c < f; ++c) {
      for (o = a = 0, e = 0; e < u; ++e) {
        (i = (r = t[n[e]][c])[1] - r[0]) > 0 ? (r[0] = o, r[1] = o += i) : i < 0 ? (r[1] = a, r[0] = a += i) : (r[0] = 0, r[1] = i);
      }
    }
  }, t.stackOffsetExpand = function (t, n) {
    if ((r = t.length) > 0) {
      for (var e, r, i, o = 0, a = t[0].length; o < a; ++o) {
        for (i = e = 0; e < r; ++e) {
          i += t[e][o][1] || 0;
        }

        if (i) for (e = 0; e < r; ++e) {
          t[e][o][1] /= i;
        }
      }

      ex(t, n);
    }
  }, t.stackOffsetNone = ex, t.stackOffsetSilhouette = function (t, n) {
    if ((e = t.length) > 0) {
      for (var e, r = 0, i = t[n[0]], o = i.length; r < o; ++r) {
        for (var a = 0, u = 0; a < e; ++a) {
          u += t[a][r][1] || 0;
        }

        i[r][1] += i[r][0] = -u / 2;
      }

      ex(t, n);
    }
  }, t.stackOffsetWiggle = function (t, n) {
    if ((i = t.length) > 0 && (r = (e = t[n[0]]).length) > 0) {
      for (var e, r, i, o = 0, a = 1; a < r; ++a) {
        for (var u = 0, c = 0, f = 0; u < i; ++u) {
          for (var s = t[n[u]], l = s[a][1] || 0, h = (l - (s[a - 1][1] || 0)) / 2, d = 0; d < u; ++d) {
            var p = t[n[d]];
            h += (p[a][1] || 0) - (p[a - 1][1] || 0);
          }

          c += l, f += h * l;
        }

        e[a - 1][1] += e[a - 1][0] = o, c && (o -= f / c);
      }

      e[a - 1][1] += e[a - 1][0] = o, ex(t, n);
    }
  }, t.stackOrderAppearance = ax, t.stackOrderAscending = cx, t.stackOrderDescending = function (t) {
    return cx(t).reverse();
  }, t.stackOrderInsideOut = function (t) {
    var n,
        e,
        r = t.length,
        i = t.map(fx),
        o = ax(t),
        a = 0,
        u = 0,
        c = [],
        f = [];

    for (n = 0; n < r; ++n) {
      e = o[n], a < u ? (a += i[e], c.push(e)) : (u += i[e], f.push(e));
    }

    return f.reverse().concat(c);
  }, t.stackOrderNone = rx, t.stackOrderReverse = function (t) {
    return rx(t).reverse();
  }, t.stratify = function () {
    var t = qd,
        n = Rd;

    function e(e) {
      var r,
          i,
          o,
          a,
          u,
          c,
          f,
          s = Array.from(e),
          l = s.length,
          h = new Map();

      for (i = 0; i < l; ++i) {
        r = s[i], u = s[i] = new cd(r), null != (c = t(r, i, e)) && (c += "") && (f = u.id = c, h.set(f, h.has(f) ? Dd : u)), null != (c = n(r, i, e)) && (c += "") && (u.parent = c);
      }

      for (i = 0; i < l; ++i) {
        if (c = (u = s[i]).parent) {
          if (!(a = h.get(c))) throw new Error("missing: " + c);
          if (a === Dd) throw new Error("ambiguous: " + c);
          a.children ? a.children.push(u) : a.children = [u], u.parent = a;
        } else {
          if (o) throw new Error("multiple roots");
          o = u;
        }
      }

      if (!o) throw new Error("no root");
      if (o.parent = zd, o.eachBefore(function (t) {
        t.depth = t.parent.depth + 1, --l;
      }).eachBefore(ud), o.parent = null, l > 0) throw new Error("cycle");
      return o;
    }

    return e.id = function (n) {
      return arguments.length ? (t = Md(n), e) : t;
    }, e.parentId = function (t) {
      return arguments.length ? (n = Md(t), e) : n;
    }, e;
  }, t.style = en, t.subset = function (t, n) {
    return at(n, t);
  }, t.sum = function (t, n) {
    var e = 0;

    if (void 0 === n) {
      var _iterator60 = _createForOfIteratorHelper(t),
          _step60;

      try {
        for (_iterator60.s(); !(_step60 = _iterator60.n()).done;) {
          var _n69 = _step60.value;
          (_n69 = +_n69) && (e += _n69);
        }
      } catch (err) {
        _iterator60.e(err);
      } finally {
        _iterator60.f();
      }
    } else {
      var _r37 = -1;

      var _iterator61 = _createForOfIteratorHelper(t),
          _step61;

      try {
        for (_iterator61.s(); !(_step61 = _iterator61.n()).done;) {
          var _i32 = _step61.value;
          (_i32 = +n(_i32, ++_r37, t)) && (e += _i32);
        }
      } catch (err) {
        _iterator61.e(err);
      } finally {
        _iterator61.f();
      }
    }

    return e;
  }, t.superset = at, t.svg = Wu, t.symbol = function (t, n) {
    var e = null;

    function r() {
      var r;
      if (e || (e = r = pa()), t.apply(this, arguments).draw(e, +n.apply(this, arguments)), r) return e = null, r + "" || null;
    }

    return t = "function" == typeof t ? t : gb(t || om), n = "function" == typeof n ? n : gb(void 0 === n ? 64 : +n), r.type = function (n) {
      return arguments.length ? (t = "function" == typeof n ? n : gb(n), r) : t;
    }, r.size = function (t) {
      return arguments.length ? (n = "function" == typeof t ? t : gb(+t), r) : n;
    }, r.context = function (t) {
      return arguments.length ? (e = null == t ? null : t, r) : e;
    }, r;
  }, t.symbolCircle = om, t.symbolCross = am, t.symbolDiamond = fm, t.symbolSquare = pm, t.symbolStar = dm, t.symbolTriangle = ym, t.symbolWye = xm, t.symbols = wm, t.text = Yu, t.thresholdFreedmanDiaconis = function (t, n, e) {
    return Math.ceil((e - n) / (2 * (V(t, .75) - V(t, .25)) * Math.pow(c(t), -1 / 3)));
  }, t.thresholdScott = function (t, n, e) {
    return Math.ceil((e - n) / (3.5 * d(t) * Math.pow(c(t), -1 / 3)));
  }, t.thresholdSturges = Y, t.tickFormat = Cp, t.tickIncrement = I, t.tickStep = U, t.ticks = O, t.timeDay = pg, t.timeDays = gg, t.timeFormatDefaultLocale = Dv, t.timeFormatLocale = py, t.timeFriday = wg, t.timeFridays = Ng, t.timeHour = hg, t.timeHours = dg, t.timeInterval = Qp, t.timeMillisecond = Jp, t.timeMilliseconds = tg, t.timeMinute = sg, t.timeMinutes = lg, t.timeMonday = _g, t.timeMondays = Tg, t.timeMonth = Pg, t.timeMonths = zg, t.timeSaturday = Mg, t.timeSaturdays = Cg, t.timeSecond = cg, t.timeSeconds = fg, t.timeSunday = vg, t.timeSundays = Ag, t.timeThursday = xg, t.timeThursdays = kg, t.timeTickInterval = sy, t.timeTicks = fy, t.timeTuesday = bg, t.timeTuesdays = Sg, t.timeWednesday = mg, t.timeWednesdays = Eg, t.timeWeek = vg, t.timeWeeks = Ag, t.timeYear = Dg, t.timeYears = qg, t.timeout = di, t.timer = ci, t.timerFlush = fi, t.transition = Wi, t.transpose = rt, t.tree = function () {
    var t = Fd,
        n = 1,
        e = 1,
        r = null;

    function i(i) {
      var c = function (t) {
        for (var n, e, r, i, o, a = new Yd(t, 0), u = [a]; n = u.pop();) {
          if (r = n._.children) for (n.children = new Array(o = r.length), i = o - 1; i >= 0; --i) {
            u.push(e = n.children[i] = new Yd(r[i], i)), e.parent = n;
          }
        }

        return (a.parent = new Yd(null, 0)).children = [a], a;
      }(i);

      if (c.eachAfter(o), c.parent.m = -c.z, c.eachBefore(a), r) i.eachBefore(u);else {
        var f = i,
            s = i,
            l = i;
        i.eachBefore(function (t) {
          t.x < f.x && (f = t), t.x > s.x && (s = t), t.depth > l.depth && (l = t);
        });
        var h = f === s ? 1 : t(f, s) / 2,
            d = h - f.x,
            p = n / (s.x + h + d),
            g = e / (l.depth || 1);
        i.eachBefore(function (t) {
          t.x = (t.x + d) * p, t.y = t.depth * g;
        });
      }
      return i;
    }

    function o(n) {
      var e = n.children,
          r = n.parent.children,
          i = n.i ? r[n.i - 1] : null;

      if (e) {
        !function (t) {
          for (var n, e = 0, r = 0, i = t.children, o = i.length; --o >= 0;) {
            (n = i[o]).z += e, n.m += e, e += n.s + (r += n.c);
          }
        }(n);
        var o = (e[0].z + e[e.length - 1].z) / 2;
        i ? (n.z = i.z + t(n._, i._), n.m = n.z - o) : n.z = o;
      } else i && (n.z = i.z + t(n._, i._));

      n.parent.A = function (n, e, r) {
        if (e) {
          for (var i, o = n, a = n, u = e, c = o.parent.children[0], f = o.m, s = a.m, l = u.m, h = c.m; u = Id(u), o = Od(o), u && o;) {
            c = Od(c), (a = Id(a)).a = n, (i = u.z + l - o.z - f + t(u._, o._)) > 0 && (Ud(Bd(u, n, r), n, i), f += i, s += i), l += u.m, f += o.m, h += c.m, s += a.m;
          }

          u && !Id(a) && (a.t = u, a.m += l - s), o && !Od(c) && (c.t = o, c.m += f - h, r = n);
        }

        return r;
      }(n, i, n.parent.A || r[0]);
    }

    function a(t) {
      t._.x = t.z + t.parent.m, t.m += t.parent.m;
    }

    function u(t) {
      t.x *= n, t.y = t.depth * e;
    }

    return i.separation = function (n) {
      return arguments.length ? (t = n, i) : t;
    }, i.size = function (t) {
      return arguments.length ? (r = !1, n = +t[0], e = +t[1], i) : r ? null : [n, e];
    }, i.nodeSize = function (t) {
      return arguments.length ? (r = !0, n = +t[0], e = +t[1], i) : r ? [n, e] : null;
    }, i;
  }, t.treemap = function () {
    var t = Xd,
        n = !1,
        e = 1,
        r = 1,
        i = [0],
        o = Ad,
        a = Ad,
        u = Ad,
        c = Ad,
        f = Ad;

    function s(t) {
      return t.x0 = t.y0 = 0, t.x1 = e, t.y1 = r, t.eachBefore(l), i = [0], n && t.eachBefore(Cd), t;
    }

    function l(n) {
      var e = i[n.depth],
          r = n.x0 + e,
          s = n.y0 + e,
          l = n.x1 - e,
          h = n.y1 - e;
      l < r && (r = l = (r + l) / 2), h < s && (s = h = (s + h) / 2), n.x0 = r, n.y0 = s, n.x1 = l, n.y1 = h, n.children && (e = i[n.depth + 1] = o(n) / 2, r += f(n) - e, s += a(n) - e, (l -= u(n) - e) < r && (r = l = (r + l) / 2), (h -= c(n) - e) < s && (s = h = (s + h) / 2), t(n, r, s, l, h));
    }

    return s.round = function (t) {
      return arguments.length ? (n = !!t, s) : n;
    }, s.size = function (t) {
      return arguments.length ? (e = +t[0], r = +t[1], s) : [e, r];
    }, s.tile = function (n) {
      return arguments.length ? (t = Md(n), s) : t;
    }, s.padding = function (t) {
      return arguments.length ? s.paddingInner(t).paddingOuter(t) : s.paddingInner();
    }, s.paddingInner = function (t) {
      return arguments.length ? (o = "function" == typeof t ? t : Td(+t), s) : o;
    }, s.paddingOuter = function (t) {
      return arguments.length ? s.paddingTop(t).paddingRight(t).paddingBottom(t).paddingLeft(t) : s.paddingTop();
    }, s.paddingTop = function (t) {
      return arguments.length ? (a = "function" == typeof t ? t : Td(+t), s) : a;
    }, s.paddingRight = function (t) {
      return arguments.length ? (u = "function" == typeof t ? t : Td(+t), s) : u;
    }, s.paddingBottom = function (t) {
      return arguments.length ? (c = "function" == typeof t ? t : Td(+t), s) : c;
    }, s.paddingLeft = function (t) {
      return arguments.length ? (f = "function" == typeof t ? t : Td(+t), s) : f;
    }, s;
  }, t.treemapBinary = function (t, n, e, r, i) {
    var o,
        a,
        u = t.children,
        c = u.length,
        f = new Array(c + 1);

    for (f[0] = a = o = 0; o < c; ++o) {
      f[o + 1] = a += u[o].value;
    }

    !function t(n, e, r, i, o, a, c) {
      if (n >= e - 1) {
        var s = u[n];
        return s.x0 = i, s.y0 = o, s.x1 = a, void (s.y1 = c);
      }

      var l = f[n],
          h = r / 2 + l,
          d = n + 1,
          p = e - 1;

      for (; d < p;) {
        var g = d + p >>> 1;
        f[g] < h ? d = g + 1 : p = g;
      }

      h - f[d - 1] < f[d] - h && n + 1 < d && --d;
      var y = f[d] - l,
          v = r - y;

      if (a - i > c - o) {
        var _ = r ? (i * v + a * y) / r : a;

        t(n, d, y, i, o, _, c), t(d, e, v, _, o, a, c);
      } else {
        var b = r ? (o * v + c * y) / r : c;
        t(n, d, y, i, o, a, b), t(d, e, v, i, b, a, c);
      }
    }(0, c, t.value, n, e, r, i);
  }, t.treemapDice = Pd, t.treemapResquarify = Gd, t.treemapSlice = Ld, t.treemapSliceDice = function (t, n, e, r, i) {
    (1 & t.depth ? Ld : Pd)(t, n, e, r, i);
  }, t.treemapSquarify = Xd, t.tsv = Hu, t.tsvFormat = zu, t.tsvFormatBody = Du, t.tsvFormatRow = Ru, t.tsvFormatRows = qu, t.tsvFormatValue = Fu, t.tsvParse = Cu, t.tsvParseRows = Pu, t.union = function () {
    var n = new Set();

    for (var _len13 = arguments.length, t = new Array(_len13), _key13 = 0; _key13 < _len13; _key13++) {
      t[_key13] = arguments[_key13];
    }

    for (var _i33 = 0, _t34 = t; _i33 < _t34.length; _i33++) {
      var _e39 = _t34[_i33];

      var _iterator62 = _createForOfIteratorHelper(_e39),
          _step62;

      try {
        for (_iterator62.s(); !(_step62 = _iterator62.n()).done;) {
          var _t35 = _step62.value;
          n.add(_t35);
        }
      } catch (err) {
        _iterator62.e(err);
      } finally {
        _iterator62.f();
      }
    }

    return n;
  }, t.utcDay = Ug, t.utcDays = Bg, t.utcFriday = Vg, t.utcFridays = ty, t.utcHour = Og, t.utcHours = Ig, t.utcMillisecond = Jp, t.utcMilliseconds = tg, t.utcMinute = Rg, t.utcMinutes = Fg, t.utcMonday = jg, t.utcMondays = Zg, t.utcMonth = ey, t.utcMonths = ry, t.utcSaturday = $g, t.utcSaturdays = ny, t.utcSecond = cg, t.utcSeconds = fg, t.utcSunday = Lg, t.utcSundays = Wg, t.utcThursday = Gg, t.utcThursdays = Jg, t.utcTickInterval = cy, t.utcTicks = uy, t.utcTuesday = Hg, t.utcTuesdays = Kg, t.utcWednesday = Xg, t.utcWednesdays = Qg, t.utcWeek = Lg, t.utcWeeks = Wg, t.utcYear = iy, t.utcYears = oy, t.variance = h, t.version = "7.0.0", t.window = Qt, t.xml = Vu, t.zip = function () {
    return rt(arguments);
  }, t.zoom = function () {
    var t,
        n,
        e,
        r = vx,
        i = _x,
        o = wx,
        a = mx,
        u = xx,
        c = [0, 1 / 0],
        f = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]],
        s = 250,
        l = Ir,
        h = yt("start", "zoom", "end"),
        d = 500,
        p = 0,
        g = 10;

    function y(t) {
      t.property("__zoom", bx).on("wheel.zoom", M, {
        passive: !1
      }).on("mousedown.zoom", A).on("dblclick.zoom", T).filter(u).on("touchstart.zoom", S).on("touchmove.zoom", E).on("touchend.zoom touchcancel.zoom", k).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
    }

    function v(t, n) {
      return (n = Math.max(c[0], Math.min(c[1], n))) === t.k ? t : new hx(n, t.x, t.y);
    }

    function _(t, n, e) {
      var r = n[0] - e[0] * t.k,
          i = n[1] - e[1] * t.k;
      return r === t.x && i === t.y ? t : new hx(t.k, r, i);
    }

    function b(t) {
      return [(+t[0][0] + +t[1][0]) / 2, (+t[0][1] + +t[1][1]) / 2];
    }

    function m(t, n, e, r) {
      t.on("start.zoom", function () {
        x(this, arguments).event(r).start();
      }).on("interrupt.zoom end.zoom", function () {
        x(this, arguments).event(r).end();
      }).tween("zoom", function () {
        var t = this,
            o = arguments,
            a = x(t, o).event(r),
            u = i.apply(t, o),
            c = null == e ? b(u) : "function" == typeof e ? e.apply(t, o) : e,
            f = Math.max(u[1][0] - u[0][0], u[1][1] - u[0][1]),
            s = t.__zoom,
            h = "function" == typeof n ? n.apply(t, o) : n,
            d = l(s.invert(c).concat(f / s.k), h.invert(c).concat(f / h.k));
        return function (t) {
          if (1 === t) t = h;else {
            var n = d(t),
                e = f / n[2];
            t = new hx(e, c[0] - n[0] * e, c[1] - n[1] * e);
          }
          a.zoom(null, t);
        };
      });
    }

    function x(t, n, e) {
      return !e && t.__zooming || new w(t, n);
    }

    function w(t, n) {
      this.that = t, this.args = n, this.active = 0, this.sourceEvent = null, this.extent = i.apply(t, n), this.taps = 0;
    }

    function M(t) {
      for (var _len14 = arguments.length, n = new Array(_len14 > 1 ? _len14 - 1 : 0), _key14 = 1; _key14 < _len14; _key14++) {
        n[_key14 - 1] = arguments[_key14];
      }

      if (r.apply(this, arguments)) {
        var e = x(this, n).event(t),
            i = this.__zoom,
            u = Math.max(c[0], Math.min(c[1], i.k * Math.pow(2, a.apply(this, arguments)))),
            s = Yn(t);
        if (e.wheel) e.mouse[0][0] === s[0] && e.mouse[0][1] === s[1] || (e.mouse[1] = i.invert(e.mouse[0] = s)), clearTimeout(e.wheel);else {
          if (i.k === u) return;
          e.mouse = [s, i.invert(s)], mi(this), e.start();
        }
        yx(t), e.wheel = setTimeout(l, 150), e.zoom("mouse", o(_(v(i, u), e.mouse[0], e.mouse[1]), e.extent, f));
      }

      function l() {
        e.wheel = null, e.end();
      }
    }

    function A(t) {
      for (var _len15 = arguments.length, n = new Array(_len15 > 1 ? _len15 - 1 : 0), _key15 = 1; _key15 < _len15; _key15++) {
        n[_key15 - 1] = arguments[_key15];
      }

      if (!e && r.apply(this, arguments)) {
        var i = t.currentTarget,
            a = x(this, n, !0).event(t),
            u = Fn(t.view).on("mousemove.zoom", h, !0).on("mouseup.zoom", d, !0),
            c = Yn(t, i),
            s = t.clientX,
            l = t.clientY;
        Gn(t.view), gx(t), a.mouse = [c, this.__zoom.invert(c)], mi(this), a.start();
      }

      function h(t) {
        if (yx(t), !a.moved) {
          var n = t.clientX - s,
              e = t.clientY - l;
          a.moved = n * n + e * e > p;
        }

        a.event(t).zoom("mouse", o(_(a.that.__zoom, a.mouse[0] = Yn(t, i), a.mouse[1]), a.extent, f));
      }

      function d(t) {
        u.on("mousemove.zoom mouseup.zoom", null), Vn(t.view, a.moved), yx(t), a.event(t).end();
      }
    }

    function T(t) {
      for (var _len16 = arguments.length, n = new Array(_len16 > 1 ? _len16 - 1 : 0), _key16 = 1; _key16 < _len16; _key16++) {
        n[_key16 - 1] = arguments[_key16];
      }

      if (r.apply(this, arguments)) {
        var e = this.__zoom,
            a = Yn(t.changedTouches ? t.changedTouches[0] : t, this),
            u = e.invert(a),
            c = e.k * (t.shiftKey ? .5 : 2),
            l = o(_(v(e, c), a, u), i.apply(this, n), f);
        yx(t), s > 0 ? Fn(this).transition().duration(s).call(m, l, a, t) : Fn(this).call(y.transform, l, a, t);
      }
    }

    function S(e) {
      for (var _len17 = arguments.length, i = new Array(_len17 > 1 ? _len17 - 1 : 0), _key17 = 1; _key17 < _len17; _key17++) {
        i[_key17 - 1] = arguments[_key17];
      }

      if (r.apply(this, arguments)) {
        var o,
            a,
            u,
            c,
            f = e.touches,
            s = f.length,
            l = x(this, i, e.changedTouches.length === s).event(e);

        for (gx(e), a = 0; a < s; ++a) {
          c = [c = Yn(u = f[a], this), this.__zoom.invert(c), u.identifier], l.touch0 ? l.touch1 || l.touch0[2] === c[2] || (l.touch1 = c, l.taps = 0) : (l.touch0 = c, o = !0, l.taps = 1 + !!t);
        }

        t && (t = clearTimeout(t)), o && (l.taps < 2 && (n = c[0], t = setTimeout(function () {
          t = null;
        }, d)), mi(this), l.start());
      }
    }

    function E(t) {
      if (this.__zooming) {
        for (var _len18 = arguments.length, n = new Array(_len18 > 1 ? _len18 - 1 : 0), _key18 = 1; _key18 < _len18; _key18++) {
          n[_key18 - 1] = arguments[_key18];
        }

        var e,
            r,
            i,
            a,
            u = x(this, n).event(t),
            c = t.changedTouches,
            s = c.length;

        for (yx(t), e = 0; e < s; ++e) {
          i = Yn(r = c[e], this), u.touch0 && u.touch0[2] === r.identifier ? u.touch0[0] = i : u.touch1 && u.touch1[2] === r.identifier && (u.touch1[0] = i);
        }

        if (r = u.that.__zoom, u.touch1) {
          var l = u.touch0[0],
              h = u.touch0[1],
              d = u.touch1[0],
              p = u.touch1[1],
              g = (g = d[0] - l[0]) * g + (g = d[1] - l[1]) * g,
              y = (y = p[0] - h[0]) * y + (y = p[1] - h[1]) * y;
          r = v(r, Math.sqrt(g / y)), i = [(l[0] + d[0]) / 2, (l[1] + d[1]) / 2], a = [(h[0] + p[0]) / 2, (h[1] + p[1]) / 2];
        } else {
          if (!u.touch0) return;
          i = u.touch0[0], a = u.touch0[1];
        }

        u.zoom("touch", o(_(r, i, a), u.extent, f));
      }
    }

    function k(t) {
      for (var _len19 = arguments.length, r = new Array(_len19 > 1 ? _len19 - 1 : 0), _key19 = 1; _key19 < _len19; _key19++) {
        r[_key19 - 1] = arguments[_key19];
      }

      if (this.__zooming) {
        var i,
            o,
            a = x(this, r).event(t),
            u = t.changedTouches,
            c = u.length;

        for (gx(t), e && clearTimeout(e), e = setTimeout(function () {
          e = null;
        }, d), i = 0; i < c; ++i) {
          o = u[i], a.touch0 && a.touch0[2] === o.identifier ? delete a.touch0 : a.touch1 && a.touch1[2] === o.identifier && delete a.touch1;
        }

        if (a.touch1 && !a.touch0 && (a.touch0 = a.touch1, delete a.touch1), a.touch0) a.touch0[1] = this.__zoom.invert(a.touch0[0]);else if (a.end(), 2 === a.taps && (o = Yn(o, this), Math.hypot(n[0] - o[0], n[1] - o[1]) < g)) {
          var f = Fn(this).on("dblclick.zoom");
          f && f.apply(this, arguments);
        }
      }
    }

    return y.transform = function (t, n, e, r) {
      var i = t.selection ? t.selection() : t;
      i.property("__zoom", bx), t !== i ? m(t, n, e, r) : i.interrupt().each(function () {
        x(this, arguments).event(r).start().zoom(null, "function" == typeof n ? n.apply(this, arguments) : n).end();
      });
    }, y.scaleBy = function (t, n, e, r) {
      y.scaleTo(t, function () {
        var t = this.__zoom.k,
            e = "function" == typeof n ? n.apply(this, arguments) : n;
        return t * e;
      }, e, r);
    }, y.scaleTo = function (t, n, e, r) {
      y.transform(t, function () {
        var t = i.apply(this, arguments),
            r = this.__zoom,
            a = null == e ? b(t) : "function" == typeof e ? e.apply(this, arguments) : e,
            u = r.invert(a),
            c = "function" == typeof n ? n.apply(this, arguments) : n;
        return o(_(v(r, c), a, u), t, f);
      }, e, r);
    }, y.translateBy = function (t, n, e, r) {
      y.transform(t, function () {
        return o(this.__zoom.translate("function" == typeof n ? n.apply(this, arguments) : n, "function" == typeof e ? e.apply(this, arguments) : e), i.apply(this, arguments), f);
      }, null, r);
    }, y.translateTo = function (t, n, e, r, a) {
      y.transform(t, function () {
        var t = i.apply(this, arguments),
            a = this.__zoom,
            u = null == r ? b(t) : "function" == typeof r ? r.apply(this, arguments) : r;
        return o(dx.translate(u[0], u[1]).scale(a.k).translate("function" == typeof n ? -n.apply(this, arguments) : -n, "function" == typeof e ? -e.apply(this, arguments) : -e), t, f);
      }, r, a);
    }, w.prototype = {
      event: function event(t) {
        return t && (this.sourceEvent = t), this;
      },
      start: function start() {
        return 1 == ++this.active && (this.that.__zooming = this, this.emit("start")), this;
      },
      zoom: function zoom(t, n) {
        return this.mouse && "mouse" !== t && (this.mouse[1] = n.invert(this.mouse[0])), this.touch0 && "touch" !== t && (this.touch0[1] = n.invert(this.touch0[0])), this.touch1 && "touch" !== t && (this.touch1[1] = n.invert(this.touch1[0])), this.that.__zoom = n, this.emit("zoom"), this;
      },
      end: function end() {
        return 0 == --this.active && (delete this.that.__zooming, this.emit("end")), this;
      },
      emit: function emit(t) {
        var n = Fn(this.that).datum();
        h.call(t, this.that, new lx(t, {
          sourceEvent: this.sourceEvent,
          target: y,
          type: t,
          transform: this.that.__zoom,
          dispatch: h
        }), n);
      }
    }, y.wheelDelta = function (t) {
      return arguments.length ? (a = "function" == typeof t ? t : sx(+t), y) : a;
    }, y.filter = function (t) {
      return arguments.length ? (r = "function" == typeof t ? t : sx(!!t), y) : r;
    }, y.touchable = function (t) {
      return arguments.length ? (u = "function" == typeof t ? t : sx(!!t), y) : u;
    }, y.extent = function (t) {
      return arguments.length ? (i = "function" == typeof t ? t : sx([[+t[0][0], +t[0][1]], [+t[1][0], +t[1][1]]]), y) : i;
    }, y.scaleExtent = function (t) {
      return arguments.length ? (c[0] = +t[0], c[1] = +t[1], y) : [c[0], c[1]];
    }, y.translateExtent = function (t) {
      return arguments.length ? (f[0][0] = +t[0][0], f[1][0] = +t[1][0], f[0][1] = +t[0][1], f[1][1] = +t[1][1], y) : [[f[0][0], f[0][1]], [f[1][0], f[1][1]]];
    }, y.constrain = function (t) {
      return arguments.length ? (o = t, y) : o;
    }, y.duration = function (t) {
      return arguments.length ? (s = +t, y) : s;
    }, y.interpolate = function (t) {
      return arguments.length ? (l = t, y) : l;
    }, y.on = function () {
      var t = h.on.apply(h, arguments);
      return t === h ? y : t;
    }, y.clickDistance = function (t) {
      return arguments.length ? (p = (t = +t) * t, y) : Math.sqrt(p);
    }, y.tapDistance = function (t) {
      return arguments.length ? (g = +t, y) : g;
    }, y;
  }, t.zoomIdentity = dx, t.zoomTransform = px, Object.defineProperty(t, "__esModule", {
    value: !0
  });
});

/***/ }),

/***/ "./matrix.js":
/*!*******************!*\
  !*** ./matrix.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "matrix": () => (/* binding */ matrix)
/* harmony export */ });
/* harmony import */ var _useD3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useD3.js */ "./useD3.js");
/* harmony import */ var _d3_min_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./d3.min.js */ "./d3.min.js");
/* harmony import */ var _d3_min_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_d3_min_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grafana/data */ "@grafana/data");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_grafana_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





/** Create the matrix diagram using d3.
 * @param {*} elem The parent svg element that will house this diagram
 * @param {*} id The panel id
 * @param {number} height The current height of the panel
 * @param {*} data The data that will populate the diagram
 * @param {string} src The data series that will act as the source
 * @param {string} target The data series that will act as * the target
 * @param {string} val The data series that will act as the value
 * @param {GrafanaTheme} theme
 */

function createViz(elem, id, height, data, theme, options) {
  var src = options.sourceField,
      target = options.targetField,
      val = options.valueField,
      srcText = options.sourceText,
      targetText = options.targetText,
      valText = options.valueText,
      cellSize = options.cellSize,
      cellPadding = options.cellPadding / 100,
      // convert the cellPadding integer to a float that can be used by d3
  txtLength = options.txtLength,
      txtSize = options.txtSize / 100,
      //convert this val to EM scaling 90 = .9em 100 = 1em ... etc
  nullColor = theme.visualization.getColorByName(options.nullColor),
      defaultColor = theme.visualization.getColorByName(options.defaultColor),
      linkURL = options.url,
      urlVar1 = options.urlVar1,
      urlVar2 = options.urlVar2; // urlOther = options.urlOther,
  // urlOtherText = options.urlOtherText;
  // do a bit of work to setup the visual layout of the wiget --------

  if (elem === null) {
    console.log('bailing after failing to find parent element');
    return;
  }

  while (elem !== undefined && elem.firstChild) {
    // clear out old contents
    elem.removeChild(elem.lastChild);
  } // get color mapping from grafana


  var valueField = val ? data.series.map(function (series) {
    return series.fields.find(function (field) {
      return field.name === val;
    });
  }) : data.series.map(function (series) {
    return series.fields.find(function (field) {
      return field.type === 'number';
    });
  }); // function that maps value to color specified by Standard Options panel.
  // if value is null or was not returned by query, use different value

  var colorMap = function colorMap(v) {
    if (v == null) {
      return nullColor;
    } else if (v == -1) {
      return defaultColor;
    } else {
      return valueField[0].display(v).color;
    }
  };

  var frame = data.series[0];

  if (frame === null || frame === undefined) {
    // no data, bail
    console.log('no data , no dice');
    return;
  }

  var view = new _grafana_data__WEBPACK_IMPORTED_MODULE_2__.DataFrameView(frame);

  var _prepData = prepData(view, src, target, val),
      _prepData2 = _slicedToArray(_prepData, 3),
      rowNames = _prepData2[0],
      colNames = _prepData2[1],
      matrix = _prepData2[2]; // this is making a questionable assumption that the quant data we care about
  // is in the 3rd column


  var fieldDisplay = view.getFieldDisplayProcessor(2); // TODO: convert this to use val field passed in.

  if (matrix === null) return; //make an array of the names of the nodes
  // const names = Array.from(nameRevIdx.values());
  //find the length of the longest name. this will inform the margin and name truncation

  var allNames = rowNames.concat(colNames);
  var longest = allNames.reduce(function (a, b) {
    return a.length > b.length ? a : b;
  }); //txtLength is passed in. but names may be much smaller than this value.
  //since this informs the margin we want to set it to whichever is longer
  //this prevents a huge white space if txtlength is considerably bigger
  //than the longest name

  var maxTxtLength = longest.length < txtLength ? longest.length : txtLength; //the user settable value cellsize controls the size of the svg.
  // var size = names.length * cellSize;
  //calculate the margins needed

  var txtOffset = maxTxtLength * 5 + 25; // set the dimensions and margins of the graph
  // the top has a drop shadow and needs an extra 10 pixels to display properly

  var margin = {
    top: txtOffset + 10,
    right: 0,
    bottom: 0,
    left: txtOffset
  },
      width = colNames.length * cellSize,
      height = rowNames.length * cellSize; //we'll use this div as our tooltip.
  //the div will be invisible except when in use
  //the div will start at page coordinates 0,0
  //and be moved into place on hover
  //on mouse out the div will move back to 0,0 so
  //as not to be covering other boxes we want to hover

  var div = _d3_min_js__WEBPACK_IMPORTED_MODULE_1__.select('body').append('div').attr('class', 'tooltip').style('background-color', theme.colors.background.primary).style('font-family', theme.typography.fontFamily.sansSerif).style('font-color', theme.colors.text.primary).style('box-shadow', '3px 3px 6px lightgray').style('padding', '5px').style('opacity', 0); // append the svg object to the body of the page

  var svgClass = "svg-".concat(id);
  var svg = _d3_min_js__WEBPACK_IMPORTED_MODULE_1__.select(elem).append('svg').attr('id', svgClass).attr('width', width + margin.left + margin.right).attr('height', height + margin.top + margin.bottom).append('g').attr('transform', 'translate(' + margin.left + ',' + margin.top + ')'); // Build X scales and axis:

  var x = _d3_min_js__WEBPACK_IMPORTED_MODULE_1__.scaleBand().range([0, width]).domain(colNames).padding(cellPadding);
  svg.append('g').call(_d3_min_js__WEBPACK_IMPORTED_MODULE_1__.axisTop(x)).select('.domain').remove(); //rotate the labels on the X axis
  // svg.selectAll('text').attr('style', 'text-anchor:end').attr('transform', 'translate(-11.5,-12)rotate(90)');

  svg.selectAll('text').attr('style', 'text-anchor:start').attr('transform', 'translate(12,-12)rotate(-90)'); // Build Y scales and axis:

  var y = _d3_min_js__WEBPACK_IMPORTED_MODULE_1__.scaleBand().range([height, 0]).domain(rowNames.slice().reverse()).padding(cellPadding);
  svg.append('g').call(_d3_min_js__WEBPACK_IMPORTED_MODULE_1__.axisLeft(y)).select('.domain').remove(); //the scale bands have created the labels on the axis now we need to make sure the styles are set and add the hover events

  svg.selectAll('text').attr('font-size', txtSize + 'em').style('font-family', theme.typography.fontFamily.sansSerif).attr('fill', theme.colors.text.primary).call(truncateLabel, maxTxtLength).on('mouseover', function (event, d) {
    div.html(d); //to center the tooltip appropriately we need to find the rendered width of both the
    //the box they hovered and of the tooltip with the text in it.

    var rect = event.target.getBoundingClientRect();
    var divSize = div.node().getBoundingClientRect(); //place the tooltip along the X axis so that it's middle lines up with the
    //middle of the box they hovered

    div.style('left', rect.left + rect.width - divSize.width / 2 + 'px') //place the tooltip 5 pixels above the box they hovered
    .style('top', rect.top - divSize.height - 5 + 'px').style('opacity', 1);
  }).on('mouseout', function (d, i) {
    _d3_min_js__WEBPACK_IMPORTED_MODULE_1__.select(this).attr('opacity', '1');
    div.style('opacity', 0).style('left', '0px').style('top', '0px');
  }); //build the matrix
  //use d3's local stuff to record where we are in the outer loop

  var outer = _d3_min_js__WEBPACK_IMPORTED_MODULE_1__.local();
  var svg_g = _d3_min_js__WEBPACK_IMPORTED_MODULE_1__.select('#' + svgClass).selectAll('svg > g'); //create the area where we will put all the boxes

  var rectClass = "rectArea-".concat(id);
  var rectArea = svg_g.append('g').attr('class', rectClass); //this selection breaks the data down to the row level. This is
  //needed because the underlying datastructure is a 2d array

  var rows = rectArea.selectAll('g').data(matrix).enter().append('g').attr('class', 'row');
  var rects = rows.selectAll('rect').data(function (d, i) {
    outer.set(this, i);
    return d;
  }).enter().append('a').attr('xlink:href', function (d) {
    if (linkURL) {
      var thisURL = linkURL;

      if (urlVar1) {
        thisURL = thisURL.concat("&var-".concat(urlVar1, "=").concat(d.row));
      }

      if (urlVar2) {
        thisURL = thisURL.concat("&var-".concat(urlVar2, "=").concat(d.col));
      } // if (urlOther) {
      //   thisURL = thisURL.concat(urlOtherText);
      //   console.log(thisURL);
      // }


      return thisURL;
    }
  }).append('rect').attr('id', "rect-".concat(id)).attr('x', function (d, i, j) {
    return x(colNames[i]);
  }).attr('y', function (d, i, j) {
    var outer_counter = outer.get(this);
    return y(rowNames[outer_counter]);
  }).attr('width', x.bandwidth()).attr('height', y.bandwidth()) //this places a 'data' attribute into the HTML to make debugging easier. Allows you to see the inner/outer loop counts and the datum used
  .attr('data', function (d, i) {
    var outer_counter = outer.get(this);
    var str = '' + outer_counter + ':' + i + ' ' + rowNames[outer_counter] + ':' + colNames[i] + ' ' + d;
    return str;
  }).attr('fill', function (d) {
    if (d == -1) {
      return colorMap(d);
    } else {
      return colorMap(d.val);
    }
  }) //hide the spot where a node intersects with itself
  .style('visibility', function (d, i) {
    if (colNames[i] == rowNames[outer.get(this)]) {
      return 'hidden';
    }

    return 'visible';
  }).on('mouseover', function (event, d) {
    if (d != -1) {
      //turn down the opacity slightly to show the hover
      _d3_min_js__WEBPACK_IMPORTED_MODULE_1__.select(this).attr('opacity', '.85'); //like the mouseover above go ahead and render the text so we can calculate its size
      //and position correctly.

      div.html(function () {
        var thisDisplay = valueField[0].display(d.val);
        var text = "<p><b>".concat(srcText, ":</b> ").concat(d.row, "\n            <br>\n            <b>").concat(targetText, ":</b> ").concat(d.col, "\n            <br>\n            <b>").concat(valText, ":</b> ").concat(thisDisplay.text, " ").concat(thisDisplay.suffix ? thisDisplay.suffix : '', "\n            </p>");
        return text;
      });
      var rect = event.target.getBoundingClientRect();
      var divSize = div.node().getBoundingClientRect();
      div.style('left', rect.left + rect.width - divSize.width / 2 + 'px').style('top', rect.top - divSize.height - 5 + 'px').style('opacity', 1);
    }
  }).on('mouseout', function (d, i) {
    //reset the opacity and move the div out of the way. If we dont move it it will prevent hovering over other boxes.
    _d3_min_js__WEBPACK_IMPORTED_MODULE_1__.select(this).attr('opacity', '1');
    div.style('opacity', 0).style('left', '0px').style('top', '0px');
  });
}

function truncateLabel(text, width) {
  text.each(function () {
    var label = _d3_min_js__WEBPACK_IMPORTED_MODULE_1__.select(this).text();

    if (label.length > width) {
      label = label.slice(0, width) + '...';
    }

    _d3_min_js__WEBPACK_IMPORTED_MODULE_1__.select(this).text(label);
  });
}
/**
 * this function creates an adjacency matrix to be consumed by the chord
 * function returns the matrix + forward and reverse lookup Maps to go from
 * source and target id to description assumes that data coming to us has at
 * least 3 columns if no preferences provided, assumes the first 3 columns are
 * source and target dimensions then value to display
 * @param {*} data Data for the chord diagram
 * @param {string} src The data series that will act as the source
 * @param {string} target The data series that will act as * the target
 * @param {string} val The data series that will act as the value
 * @return {[rowNames, colNames, dataMatrix]}
 */


function prepData(data, src, target, val) {
  var sourceKey = src;
  var targetKey = target;
  var valKey = val;

  if (!sourceKey) {
    sourceKey = 0;
  }

  if (!targetKey) {
    targetKey = 1;
  }

  if (!valKey) {
    valKey = 2;
  } // find all axis labels


  var rows = [];
  var columns = [];
  data.forEach(function (row) {
    rows.push(row[sourceKey]);
    columns.push(row[targetKey]);
  }); // Make new arrays from unique set of row and column axis labels

  var rowNames = Array.from(new Set(rows)).sort();
  var colNames = Array.from(new Set(columns)).sort(); // create data matrix

  var dataMatrix = [];

  for (var i = 0; i < rowNames.length; i++) {
    dataMatrix.push(new Array(colNames.length).fill(-1));
  }

  data.forEach(function (row) {
    var r = rowNames.indexOf(row[sourceKey]);
    var c = colNames.indexOf(row[targetKey]);
    dataMatrix[r][c] = {
      row: row[sourceKey],
      col: row[targetKey],
      val: row[valKey]
    }; // dataMatrix[r][c] = row[valKey];
  });
  return [rowNames, colNames, dataMatrix];
}
/**
 *
 * @param {*} data Data for the chord diagram
 * @param {*} id The panel id
 * @param {string} src The data series that will act as the source
 * @param {string} target The data series that will act as * the target
 * @param {string} val The data series that will act as the value
 * @param {number} height Height of panel
 * @return {*} A d3 callback
 */


function matrix(data, id, height, options) {
  var theme = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useTheme2)(); // some react related voodoo

  var ref = (0,_useD3_js__WEBPACK_IMPORTED_MODULE_0__.useD3)(function (svg) {
    createViz(svg, id, height, data, theme, options);
  });
  return ref;
}



/***/ }),

/***/ "./useD3.js":
/*!******************!*\
  !*** ./useD3.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useD3": () => (/* binding */ useD3)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var useD3 = function useD3(renderFn, dependencies) {
  var ref = react__WEBPACK_IMPORTED_MODULE_0___default().useRef();
  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(function () {
    renderFn(ref.current);
    return function () {};
  });
  return ref;
};

/***/ }),

/***/ "../node_modules/grafana-plugin-support/dist/components/FieldSelectEditor.js":
/*!***********************************************************************************!*\
  !*** ../node_modules/grafana-plugin-support/dist/components/FieldSelectEditor.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FieldSelectEditor": () => (/* binding */ FieldSelectEditor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__);


/**
 * FieldSelectEditor populates a Select with the names of the fields returned by
 * the query.
 *
 * Requires Grafana >=7.0.3. For more information, refer to the following
 * pull request:
 *
 * https://github.com/grafana/grafana/pull/24829
 */
var FieldSelectEditor = function (_a) {
    var _b;
    var item = _a.item, value = _a.value, onChange = _a.onChange, context = _a.context;
    if (context.data && context.data.length > 0) {
        var options = context.data
            .flatMap(function (frame) { return frame.fields; })
            .filter(function (field) {
            var _a, _b;
            return ((_a = item.settings) === null || _a === void 0 ? void 0 : _a.filterByType) ? (_b = item.settings) === null || _b === void 0 ? void 0 : _b.filterByType.some(function (_) { return field.type === _; }) : true;
        })
            .map(function (field) { return ({
            label: field.name,
            value: field.name,
        }); });
        if ((_b = item.settings) === null || _b === void 0 ? void 0 : _b.multi) {
            return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.MultiSelect, { isClearable: true, isLoading: false, value: value, onChange: function (e) { return onChange(e.map(function (_) { return _.value; })); }, options: options }));
        }
        else {
            return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Select, { isClearable: true, isLoading: false, value: value, onChange: function (e) {
                    onChange(e === null || e === void 0 ? void 0 : e.value);
                }, options: options }));
        }
    }
    return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Select, { onChange: function () { }, disabled: true });
};
//# sourceMappingURL=FieldSelectEditor.js.map

/***/ }),

/***/ "../node_modules/grafana-plugin-support/dist/components/PanelWizard.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/grafana-plugin-support/dist/components/PanelWizard.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PanelWizard": () => (/* binding */ PanelWizard),
/* harmony export */   "validateFields": () => (/* binding */ validateFields)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! emotion */ "emotion");
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(emotion__WEBPACK_IMPORTED_MODULE_2__);




var PanelWizard = function (_a) {
    var schema = _a.schema, fields = _a.fields, url = _a.url;
    var theme = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.useTheme)();
    var report = validateFields(fields !== null && fields !== void 0 ? fields : [], schema);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { style: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
        } },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InfoBox, { title: "Configure your query", url: url, severity: "info", style: { maxWidth: "500px" } },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Define a data source query that return at least the following field" + (report.length > 1 ? "s" : "") + ":"),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, report.map(function (_a, key) {
                var type = _a.type, description = _a.description, ok = _a.ok;
                return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { key: key, className: (0,emotion__WEBPACK_IMPORTED_MODULE_2__.css)(templateObject_1 || (templateObject_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__makeTemplateObject)(["\n                display: flex;\n                align-items: center;\n                padding-bottom: ", ";\n                & > * {\n                  margin-right: ", ";\n                }\n                & > *:last-child {\n                  margin-right: 0;\n                }\n              "], ["\n                display: flex;\n                align-items: center;\n                padding-bottom: ", ";\n                & > * {\n                  margin-right: ", ";\n                }\n                & > *:last-child {\n                  margin-right: 0;\n                }\n              "])), theme.spacing.sm, theme.spacing.sm) },
                    ok ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Icon, { name: "check-circle", size: "lg", style: {
                            color: theme.palette.brandSuccess,
                        } })) : (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Icon, { name: "circle", size: "lg", style: {
                            color: theme.colors.linkDisabled,
                        } })),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Badge, { className: (0,emotion__WEBPACK_IMPORTED_MODULE_2__.css)(templateObject_2 || (templateObject_2 = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__makeTemplateObject)(["\n                  margin-top: 0;\n                "], ["\n                  margin-top: 0;\n                "]))), text: type.slice(0, 1).toUpperCase() + type.slice(1), color: "blue" }),
                    description && react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "" + description)));
            })))));
};
var validateFields = function (fields, schema) {
    var seen = [];
    return schema.map(function (_a) {
        var type = _a.type, description = _a.description;
        var field = fields
            .filter(function (field) { return !seen.includes(field); })
            .find(function (field) { return field.type === type; });
        if (field) {
            seen.push(field);
        }
        return { type: type, description: description, ok: !!field };
    });
};
var templateObject_1, templateObject_2;
//# sourceMappingURL=PanelWizard.js.map

/***/ }),

/***/ "../node_modules/grafana-plugin-support/dist/components/index.js":
/*!***********************************************************************!*\
  !*** ../node_modules/grafana-plugin-support/dist/components/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FieldSelectEditor": () => (/* reexport safe */ _FieldSelectEditor__WEBPACK_IMPORTED_MODULE_0__.FieldSelectEditor),
/* harmony export */   "PanelWizard": () => (/* reexport safe */ _PanelWizard__WEBPACK_IMPORTED_MODULE_1__.PanelWizard)
/* harmony export */ });
/* harmony import */ var _FieldSelectEditor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FieldSelectEditor */ "../node_modules/grafana-plugin-support/dist/components/FieldSelectEditor.js");
/* harmony import */ var _PanelWizard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PanelWizard */ "../node_modules/grafana-plugin-support/dist/components/PanelWizard.js");


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../node_modules/grafana-plugin-support/dist/index.js":
/*!************************************************************!*\
  !*** ../node_modules/grafana-plugin-support/dist/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FieldSelectEditor": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.FieldSelectEditor),
/* harmony export */   "PanelWizard": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.PanelWizard),
/* harmony export */   "fieldConfigWithMinMaxCompat": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_1__.fieldConfigWithMinMaxCompat),
/* harmony export */   "getFormattedDisplayValue": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_1__.getFormattedDisplayValue),
/* harmony export */   "getPanelPluginOrFallback": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_1__.getPanelPluginOrFallback),
/* harmony export */   "hasCapability": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_1__.hasCapability),
/* harmony export */   "measureText": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_1__.measureText),
/* harmony export */   "standardOptionsCompat": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_1__.standardOptionsCompat),
/* harmony export */   "toTimeField": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_1__.toTimeField)
/* harmony export */ });
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ "../node_modules/grafana-plugin-support/dist/components/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "../node_modules/grafana-plugin-support/dist/utils/index.js");


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../node_modules/grafana-plugin-support/dist/utils/capability.js":
/*!***********************************************************************!*\
  !*** ../node_modules/grafana-plugin-support/dist/utils/capability.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fieldConfigWithMinMaxCompat": () => (/* binding */ fieldConfigWithMinMaxCompat),
/* harmony export */   "hasCapability": () => (/* binding */ hasCapability),
/* harmony export */   "standardOptionsCompat": () => (/* binding */ standardOptionsCompat)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @grafana/data */ "@grafana/data");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_grafana_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @grafana/runtime */ "@grafana/runtime");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semver */ "../node_modules/semver/index.js");
/* harmony import */ var semver__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semver__WEBPACK_IMPORTED_MODULE_2__);



/**
 * hasCapability returns true if the currently running version of Grafana
 * supports a given feature. Enables graceful degredation for earlier versions
 * that don't support a given capability.
 */
var hasCapability = function (capability) {
    var version = _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.config.buildInfo.version;
    switch (capability) {
        case "color-scheme":
            return (0,semver__WEBPACK_IMPORTED_MODULE_2__.gte)(version, "7.3.0");
        case "standard-options-object":
            return (0,semver__WEBPACK_IMPORTED_MODULE_2__.gte)(version, "7.4.0");
        case "custom-editor-context":
            return (0,semver__WEBPACK_IMPORTED_MODULE_2__.gte)(version, "7.0.3");
        case "field-config-with-min-max":
            return (0,semver__WEBPACK_IMPORTED_MODULE_2__.gte)(version, "7.4.0");
        default:
            return false;
    }
};
/**
 * standardOptionsCompat translates the standard options API prior to 7.4 to the
 * new API.
 */
var standardOptionsCompat = function (options) {
    if (hasCapability("standard-options-object")) {
        return options.reduce(function (acc, curr) {
            acc[curr] = {};
            return acc;
        }, {});
    }
    return options;
};
/**
 * fieldConfigWithMinMaxCompat uses the getFieldConfigWithMinMax if
 * available, otherwise falls back.
 */
var fieldConfigWithMinMaxCompat = function (field) {
    if (hasCapability("field-config-with-min-max")) {
        return (0,_grafana_data__WEBPACK_IMPORTED_MODULE_0__.getFieldConfigWithMinMax)(field, true);
    }
    return field.config;
};
//# sourceMappingURL=capability.js.map

/***/ }),

/***/ "../node_modules/grafana-plugin-support/dist/utils/dependency.js":
/*!***********************************************************************!*\
  !*** ../node_modules/grafana-plugin-support/dist/utils/dependency.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getPanelPluginOrFallback": () => (/* binding */ getPanelPluginOrFallback)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @grafana/data */ "@grafana/data");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_grafana_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grafana/runtime */ "@grafana/runtime");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var semver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semver */ "../node_modules/semver/index.js");
/* harmony import */ var semver__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(semver__WEBPACK_IMPORTED_MODULE_3__);






/**
 * getPluginOrFallback checks if the currently running Grafana version satisfies
 * the plugin requirements. If not, an error is displayed instead.
 *
 * TODO: Is there anyway to detect the plugin id automatically?
 */
var getPanelPluginOrFallback = function (pluginId, plugin) { return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(void 0, void 0, void 0, function () {
    var res, meta;
    return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__generator)(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.getBackendSrv)().datasourceRequest({
                    url: "/public/plugins/" + pluginId + "/plugin.json",
                })];
            case 1:
                res = _a.sent();
                meta = res.data;
                if ((0,semver__WEBPACK_IMPORTED_MODULE_3__.satisfies)(_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.config.buildInfo.version, meta.dependencies.grafanaDependency, {
                    includePrerelease: true,
                })) {
                    return [2 /*return*/, plugin];
                }
                return [2 /*return*/, new _grafana_data__WEBPACK_IMPORTED_MODULE_1__.PanelPlugin(function (_a) {
                        var width = _a.width, height = _a.height;
                        var style = {
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            height: "100%",
                        };
                        return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { style: {
                                width: width,
                                height: height,
                            } },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { style: style },
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null,
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "Error loading: " + meta.id)), "This plugin requires a more recent version of Grafana (" + meta.dependencies.grafanaDependency + ")."))));
                    })];
        }
    });
}); };
//# sourceMappingURL=dependency.js.map

/***/ }),

/***/ "../node_modules/grafana-plugin-support/dist/utils/fields.js":
/*!*******************************************************************!*\
  !*** ../node_modules/grafana-plugin-support/dist/utils/fields.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toTimeField": () => (/* binding */ toTimeField)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @grafana/data */ "@grafana/data");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_grafana_data__WEBPACK_IMPORTED_MODULE_0__);


var toTimeField = function (field, timeZone, theme) {
    if ((field === null || field === void 0 ? void 0 : field.type) === _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.number) {
        var tmp = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, field), { type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.time });
        tmp.display = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_0__.getDisplayProcessor)({ field: tmp, timeZone: timeZone, theme: theme });
        return tmp;
    }
    else if ((field === null || field === void 0 ? void 0 : field.type) === _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.string) {
        var tmp = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, field), { type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.time, values: new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.ArrayVector(field.values.toArray().map(function (_) {
                return (0,_grafana_data__WEBPACK_IMPORTED_MODULE_0__.dateTimeParse)(_, {
                    timeZone: timeZone,
                    format: "YYYY-MM-DDTHH:mm:ss.SSSSSSSZ",
                }).valueOf();
            })) });
        tmp.display = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_0__.getDisplayProcessor)({ field: tmp, timeZone: timeZone, theme: theme });
        return tmp;
    }
    return field;
};
//# sourceMappingURL=fields.js.map

/***/ }),

/***/ "../node_modules/grafana-plugin-support/dist/utils/format.js":
/*!*******************************************************************!*\
  !*** ../node_modules/grafana-plugin-support/dist/utils/format.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getFormattedDisplayValue": () => (/* binding */ getFormattedDisplayValue),
/* harmony export */   "measureText": () => (/* binding */ measureText)
/* harmony export */ });
var measureText = function (text, size) {
    var canvas = document.createElement("canvas");
    var ctx = canvas.getContext("2d");
    if (ctx) {
        ctx.font = size + " sans-serif";
        return ctx.measureText(text);
    }
    return undefined;
};
var getFormattedDisplayValue = function (displayValue) {
    var _a, _b;
    return displayValue
        ? "" + ((_a = displayValue.prefix) !== null && _a !== void 0 ? _a : "") + displayValue.text + ((_b = displayValue.suffix) !== null && _b !== void 0 ? _b : "")
        : "";
};
//# sourceMappingURL=format.js.map

/***/ }),

/***/ "../node_modules/grafana-plugin-support/dist/utils/index.js":
/*!******************************************************************!*\
  !*** ../node_modules/grafana-plugin-support/dist/utils/index.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fieldConfigWithMinMaxCompat": () => (/* reexport safe */ _capability__WEBPACK_IMPORTED_MODULE_0__.fieldConfigWithMinMaxCompat),
/* harmony export */   "getFormattedDisplayValue": () => (/* reexport safe */ _format__WEBPACK_IMPORTED_MODULE_2__.getFormattedDisplayValue),
/* harmony export */   "getPanelPluginOrFallback": () => (/* reexport safe */ _dependency__WEBPACK_IMPORTED_MODULE_3__.getPanelPluginOrFallback),
/* harmony export */   "hasCapability": () => (/* reexport safe */ _capability__WEBPACK_IMPORTED_MODULE_0__.hasCapability),
/* harmony export */   "measureText": () => (/* reexport safe */ _format__WEBPACK_IMPORTED_MODULE_2__.measureText),
/* harmony export */   "standardOptionsCompat": () => (/* reexport safe */ _capability__WEBPACK_IMPORTED_MODULE_0__.standardOptionsCompat),
/* harmony export */   "toTimeField": () => (/* reexport safe */ _fields__WEBPACK_IMPORTED_MODULE_1__.toTimeField)
/* harmony export */ });
/* harmony import */ var _capability__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./capability */ "../node_modules/grafana-plugin-support/dist/utils/capability.js");
/* harmony import */ var _fields__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fields */ "../node_modules/grafana-plugin-support/dist/utils/fields.js");
/* harmony import */ var _format__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./format */ "../node_modules/grafana-plugin-support/dist/utils/format.js");
/* harmony import */ var _dependency__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dependency */ "../node_modules/grafana-plugin-support/dist/utils/dependency.js");




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../node_modules/lru-cache/index.js":
/*!******************************************!*\
  !*** ../node_modules/lru-cache/index.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


// A linked list to keep track of recently-used-ness
const Yallist = __webpack_require__(/*! yallist */ "../node_modules/yallist/yallist.js")

const MAX = Symbol('max')
const LENGTH = Symbol('length')
const LENGTH_CALCULATOR = Symbol('lengthCalculator')
const ALLOW_STALE = Symbol('allowStale')
const MAX_AGE = Symbol('maxAge')
const DISPOSE = Symbol('dispose')
const NO_DISPOSE_ON_SET = Symbol('noDisposeOnSet')
const LRU_LIST = Symbol('lruList')
const CACHE = Symbol('cache')
const UPDATE_AGE_ON_GET = Symbol('updateAgeOnGet')

const naiveLength = () => 1

// lruList is a yallist where the head is the youngest
// item, and the tail is the oldest.  the list contains the Hit
// objects as the entries.
// Each Hit object has a reference to its Yallist.Node.  This
// never changes.
//
// cache is a Map (or PseudoMap) that matches the keys to
// the Yallist.Node object.
class LRUCache {
  constructor (options) {
    if (typeof options === 'number')
      options = { max: options }

    if (!options)
      options = {}

    if (options.max && (typeof options.max !== 'number' || options.max < 0))
      throw new TypeError('max must be a non-negative number')
    // Kind of weird to have a default max of Infinity, but oh well.
    const max = this[MAX] = options.max || Infinity

    const lc = options.length || naiveLength
    this[LENGTH_CALCULATOR] = (typeof lc !== 'function') ? naiveLength : lc
    this[ALLOW_STALE] = options.stale || false
    if (options.maxAge && typeof options.maxAge !== 'number')
      throw new TypeError('maxAge must be a number')
    this[MAX_AGE] = options.maxAge || 0
    this[DISPOSE] = options.dispose
    this[NO_DISPOSE_ON_SET] = options.noDisposeOnSet || false
    this[UPDATE_AGE_ON_GET] = options.updateAgeOnGet || false
    this.reset()
  }

  // resize the cache when the max changes.
  set max (mL) {
    if (typeof mL !== 'number' || mL < 0)
      throw new TypeError('max must be a non-negative number')

    this[MAX] = mL || Infinity
    trim(this)
  }
  get max () {
    return this[MAX]
  }

  set allowStale (allowStale) {
    this[ALLOW_STALE] = !!allowStale
  }
  get allowStale () {
    return this[ALLOW_STALE]
  }

  set maxAge (mA) {
    if (typeof mA !== 'number')
      throw new TypeError('maxAge must be a non-negative number')

    this[MAX_AGE] = mA
    trim(this)
  }
  get maxAge () {
    return this[MAX_AGE]
  }

  // resize the cache when the lengthCalculator changes.
  set lengthCalculator (lC) {
    if (typeof lC !== 'function')
      lC = naiveLength

    if (lC !== this[LENGTH_CALCULATOR]) {
      this[LENGTH_CALCULATOR] = lC
      this[LENGTH] = 0
      this[LRU_LIST].forEach(hit => {
        hit.length = this[LENGTH_CALCULATOR](hit.value, hit.key)
        this[LENGTH] += hit.length
      })
    }
    trim(this)
  }
  get lengthCalculator () { return this[LENGTH_CALCULATOR] }

  get length () { return this[LENGTH] }
  get itemCount () { return this[LRU_LIST].length }

  rforEach (fn, thisp) {
    thisp = thisp || this
    for (let walker = this[LRU_LIST].tail; walker !== null;) {
      const prev = walker.prev
      forEachStep(this, fn, walker, thisp)
      walker = prev
    }
  }

  forEach (fn, thisp) {
    thisp = thisp || this
    for (let walker = this[LRU_LIST].head; walker !== null;) {
      const next = walker.next
      forEachStep(this, fn, walker, thisp)
      walker = next
    }
  }

  keys () {
    return this[LRU_LIST].toArray().map(k => k.key)
  }

  values () {
    return this[LRU_LIST].toArray().map(k => k.value)
  }

  reset () {
    if (this[DISPOSE] &&
        this[LRU_LIST] &&
        this[LRU_LIST].length) {
      this[LRU_LIST].forEach(hit => this[DISPOSE](hit.key, hit.value))
    }

    this[CACHE] = new Map() // hash of items by key
    this[LRU_LIST] = new Yallist() // list of items in order of use recency
    this[LENGTH] = 0 // length of items in the list
  }

  dump () {
    return this[LRU_LIST].map(hit =>
      isStale(this, hit) ? false : {
        k: hit.key,
        v: hit.value,
        e: hit.now + (hit.maxAge || 0)
      }).toArray().filter(h => h)
  }

  dumpLru () {
    return this[LRU_LIST]
  }

  set (key, value, maxAge) {
    maxAge = maxAge || this[MAX_AGE]

    if (maxAge && typeof maxAge !== 'number')
      throw new TypeError('maxAge must be a number')

    const now = maxAge ? Date.now() : 0
    const len = this[LENGTH_CALCULATOR](value, key)

    if (this[CACHE].has(key)) {
      if (len > this[MAX]) {
        del(this, this[CACHE].get(key))
        return false
      }

      const node = this[CACHE].get(key)
      const item = node.value

      // dispose of the old one before overwriting
      // split out into 2 ifs for better coverage tracking
      if (this[DISPOSE]) {
        if (!this[NO_DISPOSE_ON_SET])
          this[DISPOSE](key, item.value)
      }

      item.now = now
      item.maxAge = maxAge
      item.value = value
      this[LENGTH] += len - item.length
      item.length = len
      this.get(key)
      trim(this)
      return true
    }

    const hit = new Entry(key, value, len, now, maxAge)

    // oversized objects fall out of cache automatically.
    if (hit.length > this[MAX]) {
      if (this[DISPOSE])
        this[DISPOSE](key, value)

      return false
    }

    this[LENGTH] += hit.length
    this[LRU_LIST].unshift(hit)
    this[CACHE].set(key, this[LRU_LIST].head)
    trim(this)
    return true
  }

  has (key) {
    if (!this[CACHE].has(key)) return false
    const hit = this[CACHE].get(key).value
    return !isStale(this, hit)
  }

  get (key) {
    return get(this, key, true)
  }

  peek (key) {
    return get(this, key, false)
  }

  pop () {
    const node = this[LRU_LIST].tail
    if (!node)
      return null

    del(this, node)
    return node.value
  }

  del (key) {
    del(this, this[CACHE].get(key))
  }

  load (arr) {
    // reset the cache
    this.reset()

    const now = Date.now()
    // A previous serialized cache has the most recent items first
    for (let l = arr.length - 1; l >= 0; l--) {
      const hit = arr[l]
      const expiresAt = hit.e || 0
      if (expiresAt === 0)
        // the item was created without expiration in a non aged cache
        this.set(hit.k, hit.v)
      else {
        const maxAge = expiresAt - now
        // dont add already expired items
        if (maxAge > 0) {
          this.set(hit.k, hit.v, maxAge)
        }
      }
    }
  }

  prune () {
    this[CACHE].forEach((value, key) => get(this, key, false))
  }
}

const get = (self, key, doUse) => {
  const node = self[CACHE].get(key)
  if (node) {
    const hit = node.value
    if (isStale(self, hit)) {
      del(self, node)
      if (!self[ALLOW_STALE])
        return undefined
    } else {
      if (doUse) {
        if (self[UPDATE_AGE_ON_GET])
          node.value.now = Date.now()
        self[LRU_LIST].unshiftNode(node)
      }
    }
    return hit.value
  }
}

const isStale = (self, hit) => {
  if (!hit || (!hit.maxAge && !self[MAX_AGE]))
    return false

  const diff = Date.now() - hit.now
  return hit.maxAge ? diff > hit.maxAge
    : self[MAX_AGE] && (diff > self[MAX_AGE])
}

const trim = self => {
  if (self[LENGTH] > self[MAX]) {
    for (let walker = self[LRU_LIST].tail;
      self[LENGTH] > self[MAX] && walker !== null;) {
      // We know that we're about to delete this one, and also
      // what the next least recently used key will be, so just
      // go ahead and set it now.
      const prev = walker.prev
      del(self, walker)
      walker = prev
    }
  }
}

const del = (self, node) => {
  if (node) {
    const hit = node.value
    if (self[DISPOSE])
      self[DISPOSE](hit.key, hit.value)

    self[LENGTH] -= hit.length
    self[CACHE].delete(hit.key)
    self[LRU_LIST].removeNode(node)
  }
}

class Entry {
  constructor (key, value, length, now, maxAge) {
    this.key = key
    this.value = value
    this.length = length
    this.now = now
    this.maxAge = maxAge || 0
  }
}

const forEachStep = (self, fn, node, thisp) => {
  let hit = node.value
  if (isStale(self, hit)) {
    del(self, node)
    if (!self[ALLOW_STALE])
      hit = undefined
  }
  if (hit)
    fn.call(thisp, hit.value, hit.key, self)
}

module.exports = LRUCache


/***/ }),

/***/ "../node_modules/semver/classes/comparator.js":
/*!****************************************************!*\
  !*** ../node_modules/semver/classes/comparator.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const ANY = Symbol('SemVer ANY')
// hoisted class for cyclic dependency
class Comparator {
  static get ANY () {
    return ANY
  }

  constructor (comp, options) {
    options = parseOptions(options)

    if (comp instanceof Comparator) {
      if (comp.loose === !!options.loose) {
        return comp
      } else {
        comp = comp.value
      }
    }

    debug('comparator', comp, options)
    this.options = options
    this.loose = !!options.loose
    this.parse(comp)

    if (this.semver === ANY) {
      this.value = ''
    } else {
      this.value = this.operator + this.semver.version
    }

    debug('comp', this)
  }

  parse (comp) {
    const r = this.options.loose ? re[t.COMPARATORLOOSE] : re[t.COMPARATOR]
    const m = comp.match(r)

    if (!m) {
      throw new TypeError(`Invalid comparator: ${comp}`)
    }

    this.operator = m[1] !== undefined ? m[1] : ''
    if (this.operator === '=') {
      this.operator = ''
    }

    // if it literally is just '>' or '' then allow anything.
    if (!m[2]) {
      this.semver = ANY
    } else {
      this.semver = new SemVer(m[2], this.options.loose)
    }
  }

  toString () {
    return this.value
  }

  test (version) {
    debug('Comparator.test', version, this.options.loose)

    if (this.semver === ANY || version === ANY) {
      return true
    }

    if (typeof version === 'string') {
      try {
        version = new SemVer(version, this.options)
      } catch (er) {
        return false
      }
    }

    return cmp(version, this.operator, this.semver, this.options)
  }

  intersects (comp, options) {
    if (!(comp instanceof Comparator)) {
      throw new TypeError('a Comparator is required')
    }

    if (!options || typeof options !== 'object') {
      options = {
        loose: !!options,
        includePrerelease: false,
      }
    }

    if (this.operator === '') {
      if (this.value === '') {
        return true
      }
      return new Range(comp.value, options).test(this.value)
    } else if (comp.operator === '') {
      if (comp.value === '') {
        return true
      }
      return new Range(this.value, options).test(comp.semver)
    }

    const sameDirectionIncreasing =
      (this.operator === '>=' || this.operator === '>') &&
      (comp.operator === '>=' || comp.operator === '>')
    const sameDirectionDecreasing =
      (this.operator === '<=' || this.operator === '<') &&
      (comp.operator === '<=' || comp.operator === '<')
    const sameSemVer = this.semver.version === comp.semver.version
    const differentDirectionsInclusive =
      (this.operator === '>=' || this.operator === '<=') &&
      (comp.operator === '>=' || comp.operator === '<=')
    const oppositeDirectionsLessThan =
      cmp(this.semver, '<', comp.semver, options) &&
      (this.operator === '>=' || this.operator === '>') &&
        (comp.operator === '<=' || comp.operator === '<')
    const oppositeDirectionsGreaterThan =
      cmp(this.semver, '>', comp.semver, options) &&
      (this.operator === '<=' || this.operator === '<') &&
        (comp.operator === '>=' || comp.operator === '>')

    return (
      sameDirectionIncreasing ||
      sameDirectionDecreasing ||
      (sameSemVer && differentDirectionsInclusive) ||
      oppositeDirectionsLessThan ||
      oppositeDirectionsGreaterThan
    )
  }
}

module.exports = Comparator

const parseOptions = __webpack_require__(/*! ../internal/parse-options */ "../node_modules/semver/internal/parse-options.js")
const { re, t } = __webpack_require__(/*! ../internal/re */ "../node_modules/semver/internal/re.js")
const cmp = __webpack_require__(/*! ../functions/cmp */ "../node_modules/semver/functions/cmp.js")
const debug = __webpack_require__(/*! ../internal/debug */ "../node_modules/semver/internal/debug.js")
const SemVer = __webpack_require__(/*! ./semver */ "../node_modules/semver/classes/semver.js")
const Range = __webpack_require__(/*! ./range */ "../node_modules/semver/classes/range.js")


/***/ }),

/***/ "../node_modules/semver/classes/range.js":
/*!***********************************************!*\
  !*** ../node_modules/semver/classes/range.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// hoisted class for cyclic dependency
class Range {
  constructor (range, options) {
    options = parseOptions(options)

    if (range instanceof Range) {
      if (
        range.loose === !!options.loose &&
        range.includePrerelease === !!options.includePrerelease
      ) {
        return range
      } else {
        return new Range(range.raw, options)
      }
    }

    if (range instanceof Comparator) {
      // just put it in the set and return
      this.raw = range.value
      this.set = [[range]]
      this.format()
      return this
    }

    this.options = options
    this.loose = !!options.loose
    this.includePrerelease = !!options.includePrerelease

    // First, split based on boolean or ||
    this.raw = range
    this.set = range
      .split('||')
      // map the range to a 2d array of comparators
      .map(r => this.parseRange(r.trim()))
      // throw out any comparator lists that are empty
      // this generally means that it was not a valid range, which is allowed
      // in loose mode, but will still throw if the WHOLE range is invalid.
      .filter(c => c.length)

    if (!this.set.length) {
      throw new TypeError(`Invalid SemVer Range: ${range}`)
    }

    // if we have any that are not the null set, throw out null sets.
    if (this.set.length > 1) {
      // keep the first one, in case they're all null sets
      const first = this.set[0]
      this.set = this.set.filter(c => !isNullSet(c[0]))
      if (this.set.length === 0) {
        this.set = [first]
      } else if (this.set.length > 1) {
        // if we have any that are *, then the range is just *
        for (const c of this.set) {
          if (c.length === 1 && isAny(c[0])) {
            this.set = [c]
            break
          }
        }
      }
    }

    this.format()
  }

  format () {
    this.range = this.set
      .map((comps) => {
        return comps.join(' ').trim()
      })
      .join('||')
      .trim()
    return this.range
  }

  toString () {
    return this.range
  }

  parseRange (range) {
    range = range.trim()

    // memoize range parsing for performance.
    // this is a very hot path, and fully deterministic.
    const memoOpts = Object.keys(this.options).join(',')
    const memoKey = `parseRange:${memoOpts}:${range}`
    const cached = cache.get(memoKey)
    if (cached) {
      return cached
    }

    const loose = this.options.loose
    // `1.2.3 - 1.2.4` => `>=1.2.3 <=1.2.4`
    const hr = loose ? re[t.HYPHENRANGELOOSE] : re[t.HYPHENRANGE]
    range = range.replace(hr, hyphenReplace(this.options.includePrerelease))
    debug('hyphen replace', range)
    // `> 1.2.3 < 1.2.5` => `>1.2.3 <1.2.5`
    range = range.replace(re[t.COMPARATORTRIM], comparatorTrimReplace)
    debug('comparator trim', range)

    // `~ 1.2.3` => `~1.2.3`
    range = range.replace(re[t.TILDETRIM], tildeTrimReplace)

    // `^ 1.2.3` => `^1.2.3`
    range = range.replace(re[t.CARETTRIM], caretTrimReplace)

    // normalize spaces
    range = range.split(/\s+/).join(' ')

    // At this point, the range is completely trimmed and
    // ready to be split into comparators.

    let rangeList = range
      .split(' ')
      .map(comp => parseComparator(comp, this.options))
      .join(' ')
      .split(/\s+/)
      // >=0.0.0 is equivalent to *
      .map(comp => replaceGTE0(comp, this.options))

    if (loose) {
      // in loose mode, throw out any that are not valid comparators
      rangeList = rangeList.filter(comp => {
        debug('loose invalid filter', comp, this.options)
        return !!comp.match(re[t.COMPARATORLOOSE])
      })
    }
    debug('range list', rangeList)

    // if any comparators are the null set, then replace with JUST null set
    // if more than one comparator, remove any * comparators
    // also, don't include the same comparator more than once
    const rangeMap = new Map()
    const comparators = rangeList.map(comp => new Comparator(comp, this.options))
    for (const comp of comparators) {
      if (isNullSet(comp)) {
        return [comp]
      }
      rangeMap.set(comp.value, comp)
    }
    if (rangeMap.size > 1 && rangeMap.has('')) {
      rangeMap.delete('')
    }

    const result = [...rangeMap.values()]
    cache.set(memoKey, result)
    return result
  }

  intersects (range, options) {
    if (!(range instanceof Range)) {
      throw new TypeError('a Range is required')
    }

    return this.set.some((thisComparators) => {
      return (
        isSatisfiable(thisComparators, options) &&
        range.set.some((rangeComparators) => {
          return (
            isSatisfiable(rangeComparators, options) &&
            thisComparators.every((thisComparator) => {
              return rangeComparators.every((rangeComparator) => {
                return thisComparator.intersects(rangeComparator, options)
              })
            })
          )
        })
      )
    })
  }

  // if ANY of the sets match ALL of its comparators, then pass
  test (version) {
    if (!version) {
      return false
    }

    if (typeof version === 'string') {
      try {
        version = new SemVer(version, this.options)
      } catch (er) {
        return false
      }
    }

    for (let i = 0; i < this.set.length; i++) {
      if (testSet(this.set[i], version, this.options)) {
        return true
      }
    }
    return false
  }
}
module.exports = Range

const LRU = __webpack_require__(/*! lru-cache */ "../node_modules/lru-cache/index.js")
const cache = new LRU({ max: 1000 })

const parseOptions = __webpack_require__(/*! ../internal/parse-options */ "../node_modules/semver/internal/parse-options.js")
const Comparator = __webpack_require__(/*! ./comparator */ "../node_modules/semver/classes/comparator.js")
const debug = __webpack_require__(/*! ../internal/debug */ "../node_modules/semver/internal/debug.js")
const SemVer = __webpack_require__(/*! ./semver */ "../node_modules/semver/classes/semver.js")
const {
  re,
  t,
  comparatorTrimReplace,
  tildeTrimReplace,
  caretTrimReplace,
} = __webpack_require__(/*! ../internal/re */ "../node_modules/semver/internal/re.js")

const isNullSet = c => c.value === '<0.0.0-0'
const isAny = c => c.value === ''

// take a set of comparators and determine whether there
// exists a version which can satisfy it
const isSatisfiable = (comparators, options) => {
  let result = true
  const remainingComparators = comparators.slice()
  let testComparator = remainingComparators.pop()

  while (result && remainingComparators.length) {
    result = remainingComparators.every((otherComparator) => {
      return testComparator.intersects(otherComparator, options)
    })

    testComparator = remainingComparators.pop()
  }

  return result
}

// comprised of xranges, tildes, stars, and gtlt's at this point.
// already replaced the hyphen ranges
// turn into a set of JUST comparators.
const parseComparator = (comp, options) => {
  debug('comp', comp, options)
  comp = replaceCarets(comp, options)
  debug('caret', comp)
  comp = replaceTildes(comp, options)
  debug('tildes', comp)
  comp = replaceXRanges(comp, options)
  debug('xrange', comp)
  comp = replaceStars(comp, options)
  debug('stars', comp)
  return comp
}

const isX = id => !id || id.toLowerCase() === 'x' || id === '*'

// ~, ~> --> * (any, kinda silly)
// ~2, ~2.x, ~2.x.x, ~>2, ~>2.x ~>2.x.x --> >=2.0.0 <3.0.0-0
// ~2.0, ~2.0.x, ~>2.0, ~>2.0.x --> >=2.0.0 <2.1.0-0
// ~1.2, ~1.2.x, ~>1.2, ~>1.2.x --> >=1.2.0 <1.3.0-0
// ~1.2.3, ~>1.2.3 --> >=1.2.3 <1.3.0-0
// ~1.2.0, ~>1.2.0 --> >=1.2.0 <1.3.0-0
const replaceTildes = (comp, options) =>
  comp.trim().split(/\s+/).map((c) => {
    return replaceTilde(c, options)
  }).join(' ')

const replaceTilde = (comp, options) => {
  const r = options.loose ? re[t.TILDELOOSE] : re[t.TILDE]
  return comp.replace(r, (_, M, m, p, pr) => {
    debug('tilde', comp, _, M, m, p, pr)
    let ret

    if (isX(M)) {
      ret = ''
    } else if (isX(m)) {
      ret = `>=${M}.0.0 <${+M + 1}.0.0-0`
    } else if (isX(p)) {
      // ~1.2 == >=1.2.0 <1.3.0-0
      ret = `>=${M}.${m}.0 <${M}.${+m + 1}.0-0`
    } else if (pr) {
      debug('replaceTilde pr', pr)
      ret = `>=${M}.${m}.${p}-${pr
      } <${M}.${+m + 1}.0-0`
    } else {
      // ~1.2.3 == >=1.2.3 <1.3.0-0
      ret = `>=${M}.${m}.${p
      } <${M}.${+m + 1}.0-0`
    }

    debug('tilde return', ret)
    return ret
  })
}

// ^ --> * (any, kinda silly)
// ^2, ^2.x, ^2.x.x --> >=2.0.0 <3.0.0-0
// ^2.0, ^2.0.x --> >=2.0.0 <3.0.0-0
// ^1.2, ^1.2.x --> >=1.2.0 <2.0.0-0
// ^1.2.3 --> >=1.2.3 <2.0.0-0
// ^1.2.0 --> >=1.2.0 <2.0.0-0
const replaceCarets = (comp, options) =>
  comp.trim().split(/\s+/).map((c) => {
    return replaceCaret(c, options)
  }).join(' ')

const replaceCaret = (comp, options) => {
  debug('caret', comp, options)
  const r = options.loose ? re[t.CARETLOOSE] : re[t.CARET]
  const z = options.includePrerelease ? '-0' : ''
  return comp.replace(r, (_, M, m, p, pr) => {
    debug('caret', comp, _, M, m, p, pr)
    let ret

    if (isX(M)) {
      ret = ''
    } else if (isX(m)) {
      ret = `>=${M}.0.0${z} <${+M + 1}.0.0-0`
    } else if (isX(p)) {
      if (M === '0') {
        ret = `>=${M}.${m}.0${z} <${M}.${+m + 1}.0-0`
      } else {
        ret = `>=${M}.${m}.0${z} <${+M + 1}.0.0-0`
      }
    } else if (pr) {
      debug('replaceCaret pr', pr)
      if (M === '0') {
        if (m === '0') {
          ret = `>=${M}.${m}.${p}-${pr
          } <${M}.${m}.${+p + 1}-0`
        } else {
          ret = `>=${M}.${m}.${p}-${pr
          } <${M}.${+m + 1}.0-0`
        }
      } else {
        ret = `>=${M}.${m}.${p}-${pr
        } <${+M + 1}.0.0-0`
      }
    } else {
      debug('no pr')
      if (M === '0') {
        if (m === '0') {
          ret = `>=${M}.${m}.${p
          }${z} <${M}.${m}.${+p + 1}-0`
        } else {
          ret = `>=${M}.${m}.${p
          }${z} <${M}.${+m + 1}.0-0`
        }
      } else {
        ret = `>=${M}.${m}.${p
        } <${+M + 1}.0.0-0`
      }
    }

    debug('caret return', ret)
    return ret
  })
}

const replaceXRanges = (comp, options) => {
  debug('replaceXRanges', comp, options)
  return comp.split(/\s+/).map((c) => {
    return replaceXRange(c, options)
  }).join(' ')
}

const replaceXRange = (comp, options) => {
  comp = comp.trim()
  const r = options.loose ? re[t.XRANGELOOSE] : re[t.XRANGE]
  return comp.replace(r, (ret, gtlt, M, m, p, pr) => {
    debug('xRange', comp, ret, gtlt, M, m, p, pr)
    const xM = isX(M)
    const xm = xM || isX(m)
    const xp = xm || isX(p)
    const anyX = xp

    if (gtlt === '=' && anyX) {
      gtlt = ''
    }

    // if we're including prereleases in the match, then we need
    // to fix this to -0, the lowest possible prerelease value
    pr = options.includePrerelease ? '-0' : ''

    if (xM) {
      if (gtlt === '>' || gtlt === '<') {
        // nothing is allowed
        ret = '<0.0.0-0'
      } else {
        // nothing is forbidden
        ret = '*'
      }
    } else if (gtlt && anyX) {
      // we know patch is an x, because we have any x at all.
      // replace X with 0
      if (xm) {
        m = 0
      }
      p = 0

      if (gtlt === '>') {
        // >1 => >=2.0.0
        // >1.2 => >=1.3.0
        gtlt = '>='
        if (xm) {
          M = +M + 1
          m = 0
          p = 0
        } else {
          m = +m + 1
          p = 0
        }
      } else if (gtlt === '<=') {
        // <=0.7.x is actually <0.8.0, since any 0.7.x should
        // pass.  Similarly, <=7.x is actually <8.0.0, etc.
        gtlt = '<'
        if (xm) {
          M = +M + 1
        } else {
          m = +m + 1
        }
      }

      if (gtlt === '<') {
        pr = '-0'
      }

      ret = `${gtlt + M}.${m}.${p}${pr}`
    } else if (xm) {
      ret = `>=${M}.0.0${pr} <${+M + 1}.0.0-0`
    } else if (xp) {
      ret = `>=${M}.${m}.0${pr
      } <${M}.${+m + 1}.0-0`
    }

    debug('xRange return', ret)

    return ret
  })
}

// Because * is AND-ed with everything else in the comparator,
// and '' means "any version", just remove the *s entirely.
const replaceStars = (comp, options) => {
  debug('replaceStars', comp, options)
  // Looseness is ignored here.  star is always as loose as it gets!
  return comp.trim().replace(re[t.STAR], '')
}

const replaceGTE0 = (comp, options) => {
  debug('replaceGTE0', comp, options)
  return comp.trim()
    .replace(re[options.includePrerelease ? t.GTE0PRE : t.GTE0], '')
}

// This function is passed to string.replace(re[t.HYPHENRANGE])
// M, m, patch, prerelease, build
// 1.2 - 3.4.5 => >=1.2.0 <=3.4.5
// 1.2.3 - 3.4 => >=1.2.0 <3.5.0-0 Any 3.4.x will do
// 1.2 - 3.4 => >=1.2.0 <3.5.0-0
const hyphenReplace = incPr => ($0,
  from, fM, fm, fp, fpr, fb,
  to, tM, tm, tp, tpr, tb) => {
  if (isX(fM)) {
    from = ''
  } else if (isX(fm)) {
    from = `>=${fM}.0.0${incPr ? '-0' : ''}`
  } else if (isX(fp)) {
    from = `>=${fM}.${fm}.0${incPr ? '-0' : ''}`
  } else if (fpr) {
    from = `>=${from}`
  } else {
    from = `>=${from}${incPr ? '-0' : ''}`
  }

  if (isX(tM)) {
    to = ''
  } else if (isX(tm)) {
    to = `<${+tM + 1}.0.0-0`
  } else if (isX(tp)) {
    to = `<${tM}.${+tm + 1}.0-0`
  } else if (tpr) {
    to = `<=${tM}.${tm}.${tp}-${tpr}`
  } else if (incPr) {
    to = `<${tM}.${tm}.${+tp + 1}-0`
  } else {
    to = `<=${to}`
  }

  return (`${from} ${to}`).trim()
}

const testSet = (set, version, options) => {
  for (let i = 0; i < set.length; i++) {
    if (!set[i].test(version)) {
      return false
    }
  }

  if (version.prerelease.length && !options.includePrerelease) {
    // Find the set of versions that are allowed to have prereleases
    // For example, ^1.2.3-pr.1 desugars to >=1.2.3-pr.1 <2.0.0
    // That should allow `1.2.3-pr.2` to pass.
    // However, `1.2.4-alpha.notready` should NOT be allowed,
    // even though it's within the range set by the comparators.
    for (let i = 0; i < set.length; i++) {
      debug(set[i].semver)
      if (set[i].semver === Comparator.ANY) {
        continue
      }

      if (set[i].semver.prerelease.length > 0) {
        const allowed = set[i].semver
        if (allowed.major === version.major &&
            allowed.minor === version.minor &&
            allowed.patch === version.patch) {
          return true
        }
      }
    }

    // Version has a -pre, but it's not one of the ones we like.
    return false
  }

  return true
}


/***/ }),

/***/ "../node_modules/semver/classes/semver.js":
/*!************************************************!*\
  !*** ../node_modules/semver/classes/semver.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const debug = __webpack_require__(/*! ../internal/debug */ "../node_modules/semver/internal/debug.js")
const { MAX_LENGTH, MAX_SAFE_INTEGER } = __webpack_require__(/*! ../internal/constants */ "../node_modules/semver/internal/constants.js")
const { re, t } = __webpack_require__(/*! ../internal/re */ "../node_modules/semver/internal/re.js")

const parseOptions = __webpack_require__(/*! ../internal/parse-options */ "../node_modules/semver/internal/parse-options.js")
const { compareIdentifiers } = __webpack_require__(/*! ../internal/identifiers */ "../node_modules/semver/internal/identifiers.js")
class SemVer {
  constructor (version, options) {
    options = parseOptions(options)

    if (version instanceof SemVer) {
      if (version.loose === !!options.loose &&
          version.includePrerelease === !!options.includePrerelease) {
        return version
      } else {
        version = version.version
      }
    } else if (typeof version !== 'string') {
      throw new TypeError(`Invalid Version: ${version}`)
    }

    if (version.length > MAX_LENGTH) {
      throw new TypeError(
        `version is longer than ${MAX_LENGTH} characters`
      )
    }

    debug('SemVer', version, options)
    this.options = options
    this.loose = !!options.loose
    // this isn't actually relevant for versions, but keep it so that we
    // don't run into trouble passing this.options around.
    this.includePrerelease = !!options.includePrerelease

    const m = version.trim().match(options.loose ? re[t.LOOSE] : re[t.FULL])

    if (!m) {
      throw new TypeError(`Invalid Version: ${version}`)
    }

    this.raw = version

    // these are actually numbers
    this.major = +m[1]
    this.minor = +m[2]
    this.patch = +m[3]

    if (this.major > MAX_SAFE_INTEGER || this.major < 0) {
      throw new TypeError('Invalid major version')
    }

    if (this.minor > MAX_SAFE_INTEGER || this.minor < 0) {
      throw new TypeError('Invalid minor version')
    }

    if (this.patch > MAX_SAFE_INTEGER || this.patch < 0) {
      throw new TypeError('Invalid patch version')
    }

    // numberify any prerelease numeric ids
    if (!m[4]) {
      this.prerelease = []
    } else {
      this.prerelease = m[4].split('.').map((id) => {
        if (/^[0-9]+$/.test(id)) {
          const num = +id
          if (num >= 0 && num < MAX_SAFE_INTEGER) {
            return num
          }
        }
        return id
      })
    }

    this.build = m[5] ? m[5].split('.') : []
    this.format()
  }

  format () {
    this.version = `${this.major}.${this.minor}.${this.patch}`
    if (this.prerelease.length) {
      this.version += `-${this.prerelease.join('.')}`
    }
    return this.version
  }

  toString () {
    return this.version
  }

  compare (other) {
    debug('SemVer.compare', this.version, this.options, other)
    if (!(other instanceof SemVer)) {
      if (typeof other === 'string' && other === this.version) {
        return 0
      }
      other = new SemVer(other, this.options)
    }

    if (other.version === this.version) {
      return 0
    }

    return this.compareMain(other) || this.comparePre(other)
  }

  compareMain (other) {
    if (!(other instanceof SemVer)) {
      other = new SemVer(other, this.options)
    }

    return (
      compareIdentifiers(this.major, other.major) ||
      compareIdentifiers(this.minor, other.minor) ||
      compareIdentifiers(this.patch, other.patch)
    )
  }

  comparePre (other) {
    if (!(other instanceof SemVer)) {
      other = new SemVer(other, this.options)
    }

    // NOT having a prerelease is > having one
    if (this.prerelease.length && !other.prerelease.length) {
      return -1
    } else if (!this.prerelease.length && other.prerelease.length) {
      return 1
    } else if (!this.prerelease.length && !other.prerelease.length) {
      return 0
    }

    let i = 0
    do {
      const a = this.prerelease[i]
      const b = other.prerelease[i]
      debug('prerelease compare', i, a, b)
      if (a === undefined && b === undefined) {
        return 0
      } else if (b === undefined) {
        return 1
      } else if (a === undefined) {
        return -1
      } else if (a === b) {
        continue
      } else {
        return compareIdentifiers(a, b)
      }
    } while (++i)
  }

  compareBuild (other) {
    if (!(other instanceof SemVer)) {
      other = new SemVer(other, this.options)
    }

    let i = 0
    do {
      const a = this.build[i]
      const b = other.build[i]
      debug('prerelease compare', i, a, b)
      if (a === undefined && b === undefined) {
        return 0
      } else if (b === undefined) {
        return 1
      } else if (a === undefined) {
        return -1
      } else if (a === b) {
        continue
      } else {
        return compareIdentifiers(a, b)
      }
    } while (++i)
  }

  // preminor will bump the version up to the next minor release, and immediately
  // down to pre-release. premajor and prepatch work the same way.
  inc (release, identifier) {
    switch (release) {
      case 'premajor':
        this.prerelease.length = 0
        this.patch = 0
        this.minor = 0
        this.major++
        this.inc('pre', identifier)
        break
      case 'preminor':
        this.prerelease.length = 0
        this.patch = 0
        this.minor++
        this.inc('pre', identifier)
        break
      case 'prepatch':
        // If this is already a prerelease, it will bump to the next version
        // drop any prereleases that might already exist, since they are not
        // relevant at this point.
        this.prerelease.length = 0
        this.inc('patch', identifier)
        this.inc('pre', identifier)
        break
      // If the input is a non-prerelease version, this acts the same as
      // prepatch.
      case 'prerelease':
        if (this.prerelease.length === 0) {
          this.inc('patch', identifier)
        }
        this.inc('pre', identifier)
        break

      case 'major':
        // If this is a pre-major version, bump up to the same major version.
        // Otherwise increment major.
        // 1.0.0-5 bumps to 1.0.0
        // 1.1.0 bumps to 2.0.0
        if (
          this.minor !== 0 ||
          this.patch !== 0 ||
          this.prerelease.length === 0
        ) {
          this.major++
        }
        this.minor = 0
        this.patch = 0
        this.prerelease = []
        break
      case 'minor':
        // If this is a pre-minor version, bump up to the same minor version.
        // Otherwise increment minor.
        // 1.2.0-5 bumps to 1.2.0
        // 1.2.1 bumps to 1.3.0
        if (this.patch !== 0 || this.prerelease.length === 0) {
          this.minor++
        }
        this.patch = 0
        this.prerelease = []
        break
      case 'patch':
        // If this is not a pre-release version, it will increment the patch.
        // If it is a pre-release it will bump up to the same patch version.
        // 1.2.0-5 patches to 1.2.0
        // 1.2.0 patches to 1.2.1
        if (this.prerelease.length === 0) {
          this.patch++
        }
        this.prerelease = []
        break
      // This probably shouldn't be used publicly.
      // 1.0.0 'pre' would become 1.0.0-0 which is the wrong direction.
      case 'pre':
        if (this.prerelease.length === 0) {
          this.prerelease = [0]
        } else {
          let i = this.prerelease.length
          while (--i >= 0) {
            if (typeof this.prerelease[i] === 'number') {
              this.prerelease[i]++
              i = -2
            }
          }
          if (i === -1) {
            // didn't increment anything
            this.prerelease.push(0)
          }
        }
        if (identifier) {
          // 1.2.0-beta.1 bumps to 1.2.0-beta.2,
          // 1.2.0-beta.fooblz or 1.2.0-beta bumps to 1.2.0-beta.0
          if (compareIdentifiers(this.prerelease[0], identifier) === 0) {
            if (isNaN(this.prerelease[1])) {
              this.prerelease = [identifier, 0]
            }
          } else {
            this.prerelease = [identifier, 0]
          }
        }
        break

      default:
        throw new Error(`invalid increment argument: ${release}`)
    }
    this.format()
    this.raw = this.version
    return this
  }
}

module.exports = SemVer


/***/ }),

/***/ "../node_modules/semver/functions/clean.js":
/*!*************************************************!*\
  !*** ../node_modules/semver/functions/clean.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const parse = __webpack_require__(/*! ./parse */ "../node_modules/semver/functions/parse.js")
const clean = (version, options) => {
  const s = parse(version.trim().replace(/^[=v]+/, ''), options)
  return s ? s.version : null
}
module.exports = clean


/***/ }),

/***/ "../node_modules/semver/functions/cmp.js":
/*!***********************************************!*\
  !*** ../node_modules/semver/functions/cmp.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const eq = __webpack_require__(/*! ./eq */ "../node_modules/semver/functions/eq.js")
const neq = __webpack_require__(/*! ./neq */ "../node_modules/semver/functions/neq.js")
const gt = __webpack_require__(/*! ./gt */ "../node_modules/semver/functions/gt.js")
const gte = __webpack_require__(/*! ./gte */ "../node_modules/semver/functions/gte.js")
const lt = __webpack_require__(/*! ./lt */ "../node_modules/semver/functions/lt.js")
const lte = __webpack_require__(/*! ./lte */ "../node_modules/semver/functions/lte.js")

const cmp = (a, op, b, loose) => {
  switch (op) {
    case '===':
      if (typeof a === 'object') {
        a = a.version
      }
      if (typeof b === 'object') {
        b = b.version
      }
      return a === b

    case '!==':
      if (typeof a === 'object') {
        a = a.version
      }
      if (typeof b === 'object') {
        b = b.version
      }
      return a !== b

    case '':
    case '=':
    case '==':
      return eq(a, b, loose)

    case '!=':
      return neq(a, b, loose)

    case '>':
      return gt(a, b, loose)

    case '>=':
      return gte(a, b, loose)

    case '<':
      return lt(a, b, loose)

    case '<=':
      return lte(a, b, loose)

    default:
      throw new TypeError(`Invalid operator: ${op}`)
  }
}
module.exports = cmp


/***/ }),

/***/ "../node_modules/semver/functions/coerce.js":
/*!**************************************************!*\
  !*** ../node_modules/semver/functions/coerce.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const SemVer = __webpack_require__(/*! ../classes/semver */ "../node_modules/semver/classes/semver.js")
const parse = __webpack_require__(/*! ./parse */ "../node_modules/semver/functions/parse.js")
const { re, t } = __webpack_require__(/*! ../internal/re */ "../node_modules/semver/internal/re.js")

const coerce = (version, options) => {
  if (version instanceof SemVer) {
    return version
  }

  if (typeof version === 'number') {
    version = String(version)
  }

  if (typeof version !== 'string') {
    return null
  }

  options = options || {}

  let match = null
  if (!options.rtl) {
    match = version.match(re[t.COERCE])
  } else {
    // Find the right-most coercible string that does not share
    // a terminus with a more left-ward coercible string.
    // Eg, '1.2.3.4' wants to coerce '2.3.4', not '3.4' or '4'
    //
    // Walk through the string checking with a /g regexp
    // Manually set the index so as to pick up overlapping matches.
    // Stop when we get a match that ends at the string end, since no
    // coercible string can be more right-ward without the same terminus.
    let next
    while ((next = re[t.COERCERTL].exec(version)) &&
        (!match || match.index + match[0].length !== version.length)
    ) {
      if (!match ||
            next.index + next[0].length !== match.index + match[0].length) {
        match = next
      }
      re[t.COERCERTL].lastIndex = next.index + next[1].length + next[2].length
    }
    // leave it in a clean state
    re[t.COERCERTL].lastIndex = -1
  }

  if (match === null) {
    return null
  }

  return parse(`${match[2]}.${match[3] || '0'}.${match[4] || '0'}`, options)
}
module.exports = coerce


/***/ }),

/***/ "../node_modules/semver/functions/compare-build.js":
/*!*********************************************************!*\
  !*** ../node_modules/semver/functions/compare-build.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const SemVer = __webpack_require__(/*! ../classes/semver */ "../node_modules/semver/classes/semver.js")
const compareBuild = (a, b, loose) => {
  const versionA = new SemVer(a, loose)
  const versionB = new SemVer(b, loose)
  return versionA.compare(versionB) || versionA.compareBuild(versionB)
}
module.exports = compareBuild


/***/ }),

/***/ "../node_modules/semver/functions/compare-loose.js":
/*!*********************************************************!*\
  !*** ../node_modules/semver/functions/compare-loose.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const compare = __webpack_require__(/*! ./compare */ "../node_modules/semver/functions/compare.js")
const compareLoose = (a, b) => compare(a, b, true)
module.exports = compareLoose


/***/ }),

/***/ "../node_modules/semver/functions/compare.js":
/*!***************************************************!*\
  !*** ../node_modules/semver/functions/compare.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const SemVer = __webpack_require__(/*! ../classes/semver */ "../node_modules/semver/classes/semver.js")
const compare = (a, b, loose) =>
  new SemVer(a, loose).compare(new SemVer(b, loose))

module.exports = compare


/***/ }),

/***/ "../node_modules/semver/functions/diff.js":
/*!************************************************!*\
  !*** ../node_modules/semver/functions/diff.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const parse = __webpack_require__(/*! ./parse */ "../node_modules/semver/functions/parse.js")
const eq = __webpack_require__(/*! ./eq */ "../node_modules/semver/functions/eq.js")

const diff = (version1, version2) => {
  if (eq(version1, version2)) {
    return null
  } else {
    const v1 = parse(version1)
    const v2 = parse(version2)
    const hasPre = v1.prerelease.length || v2.prerelease.length
    const prefix = hasPre ? 'pre' : ''
    const defaultResult = hasPre ? 'prerelease' : ''
    for (const key in v1) {
      if (key === 'major' || key === 'minor' || key === 'patch') {
        if (v1[key] !== v2[key]) {
          return prefix + key
        }
      }
    }
    return defaultResult // may be undefined
  }
}
module.exports = diff


/***/ }),

/***/ "../node_modules/semver/functions/eq.js":
/*!**********************************************!*\
  !*** ../node_modules/semver/functions/eq.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const compare = __webpack_require__(/*! ./compare */ "../node_modules/semver/functions/compare.js")
const eq = (a, b, loose) => compare(a, b, loose) === 0
module.exports = eq


/***/ }),

/***/ "../node_modules/semver/functions/gt.js":
/*!**********************************************!*\
  !*** ../node_modules/semver/functions/gt.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const compare = __webpack_require__(/*! ./compare */ "../node_modules/semver/functions/compare.js")
const gt = (a, b, loose) => compare(a, b, loose) > 0
module.exports = gt


/***/ }),

/***/ "../node_modules/semver/functions/gte.js":
/*!***********************************************!*\
  !*** ../node_modules/semver/functions/gte.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const compare = __webpack_require__(/*! ./compare */ "../node_modules/semver/functions/compare.js")
const gte = (a, b, loose) => compare(a, b, loose) >= 0
module.exports = gte


/***/ }),

/***/ "../node_modules/semver/functions/inc.js":
/*!***********************************************!*\
  !*** ../node_modules/semver/functions/inc.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const SemVer = __webpack_require__(/*! ../classes/semver */ "../node_modules/semver/classes/semver.js")

const inc = (version, release, options, identifier) => {
  if (typeof (options) === 'string') {
    identifier = options
    options = undefined
  }

  try {
    return new SemVer(
      version instanceof SemVer ? version.version : version,
      options
    ).inc(release, identifier).version
  } catch (er) {
    return null
  }
}
module.exports = inc


/***/ }),

/***/ "../node_modules/semver/functions/lt.js":
/*!**********************************************!*\
  !*** ../node_modules/semver/functions/lt.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const compare = __webpack_require__(/*! ./compare */ "../node_modules/semver/functions/compare.js")
const lt = (a, b, loose) => compare(a, b, loose) < 0
module.exports = lt


/***/ }),

/***/ "../node_modules/semver/functions/lte.js":
/*!***********************************************!*\
  !*** ../node_modules/semver/functions/lte.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const compare = __webpack_require__(/*! ./compare */ "../node_modules/semver/functions/compare.js")
const lte = (a, b, loose) => compare(a, b, loose) <= 0
module.exports = lte


/***/ }),

/***/ "../node_modules/semver/functions/major.js":
/*!*************************************************!*\
  !*** ../node_modules/semver/functions/major.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const SemVer = __webpack_require__(/*! ../classes/semver */ "../node_modules/semver/classes/semver.js")
const major = (a, loose) => new SemVer(a, loose).major
module.exports = major


/***/ }),

/***/ "../node_modules/semver/functions/minor.js":
/*!*************************************************!*\
  !*** ../node_modules/semver/functions/minor.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const SemVer = __webpack_require__(/*! ../classes/semver */ "../node_modules/semver/classes/semver.js")
const minor = (a, loose) => new SemVer(a, loose).minor
module.exports = minor


/***/ }),

/***/ "../node_modules/semver/functions/neq.js":
/*!***********************************************!*\
  !*** ../node_modules/semver/functions/neq.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const compare = __webpack_require__(/*! ./compare */ "../node_modules/semver/functions/compare.js")
const neq = (a, b, loose) => compare(a, b, loose) !== 0
module.exports = neq


/***/ }),

/***/ "../node_modules/semver/functions/parse.js":
/*!*************************************************!*\
  !*** ../node_modules/semver/functions/parse.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const { MAX_LENGTH } = __webpack_require__(/*! ../internal/constants */ "../node_modules/semver/internal/constants.js")
const { re, t } = __webpack_require__(/*! ../internal/re */ "../node_modules/semver/internal/re.js")
const SemVer = __webpack_require__(/*! ../classes/semver */ "../node_modules/semver/classes/semver.js")

const parseOptions = __webpack_require__(/*! ../internal/parse-options */ "../node_modules/semver/internal/parse-options.js")
const parse = (version, options) => {
  options = parseOptions(options)

  if (version instanceof SemVer) {
    return version
  }

  if (typeof version !== 'string') {
    return null
  }

  if (version.length > MAX_LENGTH) {
    return null
  }

  const r = options.loose ? re[t.LOOSE] : re[t.FULL]
  if (!r.test(version)) {
    return null
  }

  try {
    return new SemVer(version, options)
  } catch (er) {
    return null
  }
}

module.exports = parse


/***/ }),

/***/ "../node_modules/semver/functions/patch.js":
/*!*************************************************!*\
  !*** ../node_modules/semver/functions/patch.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const SemVer = __webpack_require__(/*! ../classes/semver */ "../node_modules/semver/classes/semver.js")
const patch = (a, loose) => new SemVer(a, loose).patch
module.exports = patch


/***/ }),

/***/ "../node_modules/semver/functions/prerelease.js":
/*!******************************************************!*\
  !*** ../node_modules/semver/functions/prerelease.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const parse = __webpack_require__(/*! ./parse */ "../node_modules/semver/functions/parse.js")
const prerelease = (version, options) => {
  const parsed = parse(version, options)
  return (parsed && parsed.prerelease.length) ? parsed.prerelease : null
}
module.exports = prerelease


/***/ }),

/***/ "../node_modules/semver/functions/rcompare.js":
/*!****************************************************!*\
  !*** ../node_modules/semver/functions/rcompare.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const compare = __webpack_require__(/*! ./compare */ "../node_modules/semver/functions/compare.js")
const rcompare = (a, b, loose) => compare(b, a, loose)
module.exports = rcompare


/***/ }),

/***/ "../node_modules/semver/functions/rsort.js":
/*!*************************************************!*\
  !*** ../node_modules/semver/functions/rsort.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const compareBuild = __webpack_require__(/*! ./compare-build */ "../node_modules/semver/functions/compare-build.js")
const rsort = (list, loose) => list.sort((a, b) => compareBuild(b, a, loose))
module.exports = rsort


/***/ }),

/***/ "../node_modules/semver/functions/satisfies.js":
/*!*****************************************************!*\
  !*** ../node_modules/semver/functions/satisfies.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const Range = __webpack_require__(/*! ../classes/range */ "../node_modules/semver/classes/range.js")
const satisfies = (version, range, options) => {
  try {
    range = new Range(range, options)
  } catch (er) {
    return false
  }
  return range.test(version)
}
module.exports = satisfies


/***/ }),

/***/ "../node_modules/semver/functions/sort.js":
/*!************************************************!*\
  !*** ../node_modules/semver/functions/sort.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const compareBuild = __webpack_require__(/*! ./compare-build */ "../node_modules/semver/functions/compare-build.js")
const sort = (list, loose) => list.sort((a, b) => compareBuild(a, b, loose))
module.exports = sort


/***/ }),

/***/ "../node_modules/semver/functions/valid.js":
/*!*************************************************!*\
  !*** ../node_modules/semver/functions/valid.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const parse = __webpack_require__(/*! ./parse */ "../node_modules/semver/functions/parse.js")
const valid = (version, options) => {
  const v = parse(version, options)
  return v ? v.version : null
}
module.exports = valid


/***/ }),

/***/ "../node_modules/semver/index.js":
/*!***************************************!*\
  !*** ../node_modules/semver/index.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// just pre-load all the stuff that index.js lazily exports
const internalRe = __webpack_require__(/*! ./internal/re */ "../node_modules/semver/internal/re.js")
module.exports = {
  re: internalRe.re,
  src: internalRe.src,
  tokens: internalRe.t,
  SEMVER_SPEC_VERSION: (__webpack_require__(/*! ./internal/constants */ "../node_modules/semver/internal/constants.js").SEMVER_SPEC_VERSION),
  SemVer: __webpack_require__(/*! ./classes/semver */ "../node_modules/semver/classes/semver.js"),
  compareIdentifiers: (__webpack_require__(/*! ./internal/identifiers */ "../node_modules/semver/internal/identifiers.js").compareIdentifiers),
  rcompareIdentifiers: (__webpack_require__(/*! ./internal/identifiers */ "../node_modules/semver/internal/identifiers.js").rcompareIdentifiers),
  parse: __webpack_require__(/*! ./functions/parse */ "../node_modules/semver/functions/parse.js"),
  valid: __webpack_require__(/*! ./functions/valid */ "../node_modules/semver/functions/valid.js"),
  clean: __webpack_require__(/*! ./functions/clean */ "../node_modules/semver/functions/clean.js"),
  inc: __webpack_require__(/*! ./functions/inc */ "../node_modules/semver/functions/inc.js"),
  diff: __webpack_require__(/*! ./functions/diff */ "../node_modules/semver/functions/diff.js"),
  major: __webpack_require__(/*! ./functions/major */ "../node_modules/semver/functions/major.js"),
  minor: __webpack_require__(/*! ./functions/minor */ "../node_modules/semver/functions/minor.js"),
  patch: __webpack_require__(/*! ./functions/patch */ "../node_modules/semver/functions/patch.js"),
  prerelease: __webpack_require__(/*! ./functions/prerelease */ "../node_modules/semver/functions/prerelease.js"),
  compare: __webpack_require__(/*! ./functions/compare */ "../node_modules/semver/functions/compare.js"),
  rcompare: __webpack_require__(/*! ./functions/rcompare */ "../node_modules/semver/functions/rcompare.js"),
  compareLoose: __webpack_require__(/*! ./functions/compare-loose */ "../node_modules/semver/functions/compare-loose.js"),
  compareBuild: __webpack_require__(/*! ./functions/compare-build */ "../node_modules/semver/functions/compare-build.js"),
  sort: __webpack_require__(/*! ./functions/sort */ "../node_modules/semver/functions/sort.js"),
  rsort: __webpack_require__(/*! ./functions/rsort */ "../node_modules/semver/functions/rsort.js"),
  gt: __webpack_require__(/*! ./functions/gt */ "../node_modules/semver/functions/gt.js"),
  lt: __webpack_require__(/*! ./functions/lt */ "../node_modules/semver/functions/lt.js"),
  eq: __webpack_require__(/*! ./functions/eq */ "../node_modules/semver/functions/eq.js"),
  neq: __webpack_require__(/*! ./functions/neq */ "../node_modules/semver/functions/neq.js"),
  gte: __webpack_require__(/*! ./functions/gte */ "../node_modules/semver/functions/gte.js"),
  lte: __webpack_require__(/*! ./functions/lte */ "../node_modules/semver/functions/lte.js"),
  cmp: __webpack_require__(/*! ./functions/cmp */ "../node_modules/semver/functions/cmp.js"),
  coerce: __webpack_require__(/*! ./functions/coerce */ "../node_modules/semver/functions/coerce.js"),
  Comparator: __webpack_require__(/*! ./classes/comparator */ "../node_modules/semver/classes/comparator.js"),
  Range: __webpack_require__(/*! ./classes/range */ "../node_modules/semver/classes/range.js"),
  satisfies: __webpack_require__(/*! ./functions/satisfies */ "../node_modules/semver/functions/satisfies.js"),
  toComparators: __webpack_require__(/*! ./ranges/to-comparators */ "../node_modules/semver/ranges/to-comparators.js"),
  maxSatisfying: __webpack_require__(/*! ./ranges/max-satisfying */ "../node_modules/semver/ranges/max-satisfying.js"),
  minSatisfying: __webpack_require__(/*! ./ranges/min-satisfying */ "../node_modules/semver/ranges/min-satisfying.js"),
  minVersion: __webpack_require__(/*! ./ranges/min-version */ "../node_modules/semver/ranges/min-version.js"),
  validRange: __webpack_require__(/*! ./ranges/valid */ "../node_modules/semver/ranges/valid.js"),
  outside: __webpack_require__(/*! ./ranges/outside */ "../node_modules/semver/ranges/outside.js"),
  gtr: __webpack_require__(/*! ./ranges/gtr */ "../node_modules/semver/ranges/gtr.js"),
  ltr: __webpack_require__(/*! ./ranges/ltr */ "../node_modules/semver/ranges/ltr.js"),
  intersects: __webpack_require__(/*! ./ranges/intersects */ "../node_modules/semver/ranges/intersects.js"),
  simplifyRange: __webpack_require__(/*! ./ranges/simplify */ "../node_modules/semver/ranges/simplify.js"),
  subset: __webpack_require__(/*! ./ranges/subset */ "../node_modules/semver/ranges/subset.js"),
}


/***/ }),

/***/ "../node_modules/semver/internal/constants.js":
/*!****************************************************!*\
  !*** ../node_modules/semver/internal/constants.js ***!
  \****************************************************/
/***/ ((module) => {

// Note: this is the semver.org version of the spec that it implements
// Not necessarily the package version of this code.
const SEMVER_SPEC_VERSION = '2.0.0'

const MAX_LENGTH = 256
const MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER ||
/* istanbul ignore next */ 9007199254740991

// Max safe segment length for coercion.
const MAX_SAFE_COMPONENT_LENGTH = 16

module.exports = {
  SEMVER_SPEC_VERSION,
  MAX_LENGTH,
  MAX_SAFE_INTEGER,
  MAX_SAFE_COMPONENT_LENGTH,
}


/***/ }),

/***/ "../node_modules/semver/internal/debug.js":
/*!************************************************!*\
  !*** ../node_modules/semver/internal/debug.js ***!
  \************************************************/
/***/ ((module) => {

const debug = (
  typeof process === 'object' &&
  process.env &&
  process.env.NODE_DEBUG &&
  /\bsemver\b/i.test(process.env.NODE_DEBUG)
) ? (...args) => console.error('SEMVER', ...args)
  : () => {}

module.exports = debug


/***/ }),

/***/ "../node_modules/semver/internal/identifiers.js":
/*!******************************************************!*\
  !*** ../node_modules/semver/internal/identifiers.js ***!
  \******************************************************/
/***/ ((module) => {

const numeric = /^[0-9]+$/
const compareIdentifiers = (a, b) => {
  const anum = numeric.test(a)
  const bnum = numeric.test(b)

  if (anum && bnum) {
    a = +a
    b = +b
  }

  return a === b ? 0
    : (anum && !bnum) ? -1
    : (bnum && !anum) ? 1
    : a < b ? -1
    : 1
}

const rcompareIdentifiers = (a, b) => compareIdentifiers(b, a)

module.exports = {
  compareIdentifiers,
  rcompareIdentifiers,
}


/***/ }),

/***/ "../node_modules/semver/internal/parse-options.js":
/*!********************************************************!*\
  !*** ../node_modules/semver/internal/parse-options.js ***!
  \********************************************************/
/***/ ((module) => {

// parse out just the options we care about so we always get a consistent
// obj with keys in a consistent order.
const opts = ['includePrerelease', 'loose', 'rtl']
const parseOptions = options =>
  !options ? {}
  : typeof options !== 'object' ? { loose: true }
  : opts.filter(k => options[k]).reduce((o, k) => {
    o[k] = true
    return o
  }, {})
module.exports = parseOptions


/***/ }),

/***/ "../node_modules/semver/internal/re.js":
/*!*********************************************!*\
  !*** ../node_modules/semver/internal/re.js ***!
  \*********************************************/
/***/ ((module, exports, __webpack_require__) => {

const { MAX_SAFE_COMPONENT_LENGTH } = __webpack_require__(/*! ./constants */ "../node_modules/semver/internal/constants.js")
const debug = __webpack_require__(/*! ./debug */ "../node_modules/semver/internal/debug.js")
exports = module.exports = {}

// The actual regexps go on exports.re
const re = exports.re = []
const src = exports.src = []
const t = exports.t = {}
let R = 0

const createToken = (name, value, isGlobal) => {
  const index = R++
  debug(name, index, value)
  t[name] = index
  src[index] = value
  re[index] = new RegExp(value, isGlobal ? 'g' : undefined)
}

// The following Regular Expressions can be used for tokenizing,
// validating, and parsing SemVer version strings.

// ## Numeric Identifier
// A single `0`, or a non-zero digit followed by zero or more digits.

createToken('NUMERICIDENTIFIER', '0|[1-9]\\d*')
createToken('NUMERICIDENTIFIERLOOSE', '[0-9]+')

// ## Non-numeric Identifier
// Zero or more digits, followed by a letter or hyphen, and then zero or
// more letters, digits, or hyphens.

createToken('NONNUMERICIDENTIFIER', '\\d*[a-zA-Z-][a-zA-Z0-9-]*')

// ## Main Version
// Three dot-separated numeric identifiers.

createToken('MAINVERSION', `(${src[t.NUMERICIDENTIFIER]})\\.` +
                   `(${src[t.NUMERICIDENTIFIER]})\\.` +
                   `(${src[t.NUMERICIDENTIFIER]})`)

createToken('MAINVERSIONLOOSE', `(${src[t.NUMERICIDENTIFIERLOOSE]})\\.` +
                        `(${src[t.NUMERICIDENTIFIERLOOSE]})\\.` +
                        `(${src[t.NUMERICIDENTIFIERLOOSE]})`)

// ## Pre-release Version Identifier
// A numeric identifier, or a non-numeric identifier.

createToken('PRERELEASEIDENTIFIER', `(?:${src[t.NUMERICIDENTIFIER]
}|${src[t.NONNUMERICIDENTIFIER]})`)

createToken('PRERELEASEIDENTIFIERLOOSE', `(?:${src[t.NUMERICIDENTIFIERLOOSE]
}|${src[t.NONNUMERICIDENTIFIER]})`)

// ## Pre-release Version
// Hyphen, followed by one or more dot-separated pre-release version
// identifiers.

createToken('PRERELEASE', `(?:-(${src[t.PRERELEASEIDENTIFIER]
}(?:\\.${src[t.PRERELEASEIDENTIFIER]})*))`)

createToken('PRERELEASELOOSE', `(?:-?(${src[t.PRERELEASEIDENTIFIERLOOSE]
}(?:\\.${src[t.PRERELEASEIDENTIFIERLOOSE]})*))`)

// ## Build Metadata Identifier
// Any combination of digits, letters, or hyphens.

createToken('BUILDIDENTIFIER', '[0-9A-Za-z-]+')

// ## Build Metadata
// Plus sign, followed by one or more period-separated build metadata
// identifiers.

createToken('BUILD', `(?:\\+(${src[t.BUILDIDENTIFIER]
}(?:\\.${src[t.BUILDIDENTIFIER]})*))`)

// ## Full Version String
// A main version, followed optionally by a pre-release version and
// build metadata.

// Note that the only major, minor, patch, and pre-release sections of
// the version string are capturing groups.  The build metadata is not a
// capturing group, because it should not ever be used in version
// comparison.

createToken('FULLPLAIN', `v?${src[t.MAINVERSION]
}${src[t.PRERELEASE]}?${
  src[t.BUILD]}?`)

createToken('FULL', `^${src[t.FULLPLAIN]}$`)

// like full, but allows v1.2.3 and =1.2.3, which people do sometimes.
// also, 1.0.0alpha1 (prerelease without the hyphen) which is pretty
// common in the npm registry.
createToken('LOOSEPLAIN', `[v=\\s]*${src[t.MAINVERSIONLOOSE]
}${src[t.PRERELEASELOOSE]}?${
  src[t.BUILD]}?`)

createToken('LOOSE', `^${src[t.LOOSEPLAIN]}$`)

createToken('GTLT', '((?:<|>)?=?)')

// Something like "2.*" or "1.2.x".
// Note that "x.x" is a valid xRange identifer, meaning "any version"
// Only the first item is strictly required.
createToken('XRANGEIDENTIFIERLOOSE', `${src[t.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`)
createToken('XRANGEIDENTIFIER', `${src[t.NUMERICIDENTIFIER]}|x|X|\\*`)

createToken('XRANGEPLAIN', `[v=\\s]*(${src[t.XRANGEIDENTIFIER]})` +
                   `(?:\\.(${src[t.XRANGEIDENTIFIER]})` +
                   `(?:\\.(${src[t.XRANGEIDENTIFIER]})` +
                   `(?:${src[t.PRERELEASE]})?${
                     src[t.BUILD]}?` +
                   `)?)?`)

createToken('XRANGEPLAINLOOSE', `[v=\\s]*(${src[t.XRANGEIDENTIFIERLOOSE]})` +
                        `(?:\\.(${src[t.XRANGEIDENTIFIERLOOSE]})` +
                        `(?:\\.(${src[t.XRANGEIDENTIFIERLOOSE]})` +
                        `(?:${src[t.PRERELEASELOOSE]})?${
                          src[t.BUILD]}?` +
                        `)?)?`)

createToken('XRANGE', `^${src[t.GTLT]}\\s*${src[t.XRANGEPLAIN]}$`)
createToken('XRANGELOOSE', `^${src[t.GTLT]}\\s*${src[t.XRANGEPLAINLOOSE]}$`)

// Coercion.
// Extract anything that could conceivably be a part of a valid semver
createToken('COERCE', `${'(^|[^\\d])' +
              '(\\d{1,'}${MAX_SAFE_COMPONENT_LENGTH}})` +
              `(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}}))?` +
              `(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}}))?` +
              `(?:$|[^\\d])`)
createToken('COERCERTL', src[t.COERCE], true)

// Tilde ranges.
// Meaning is "reasonably at or greater than"
createToken('LONETILDE', '(?:~>?)')

createToken('TILDETRIM', `(\\s*)${src[t.LONETILDE]}\\s+`, true)
exports.tildeTrimReplace = '$1~'

createToken('TILDE', `^${src[t.LONETILDE]}${src[t.XRANGEPLAIN]}$`)
createToken('TILDELOOSE', `^${src[t.LONETILDE]}${src[t.XRANGEPLAINLOOSE]}$`)

// Caret ranges.
// Meaning is "at least and backwards compatible with"
createToken('LONECARET', '(?:\\^)')

createToken('CARETTRIM', `(\\s*)${src[t.LONECARET]}\\s+`, true)
exports.caretTrimReplace = '$1^'

createToken('CARET', `^${src[t.LONECARET]}${src[t.XRANGEPLAIN]}$`)
createToken('CARETLOOSE', `^${src[t.LONECARET]}${src[t.XRANGEPLAINLOOSE]}$`)

// A simple gt/lt/eq thing, or just "" to indicate "any version"
createToken('COMPARATORLOOSE', `^${src[t.GTLT]}\\s*(${src[t.LOOSEPLAIN]})$|^$`)
createToken('COMPARATOR', `^${src[t.GTLT]}\\s*(${src[t.FULLPLAIN]})$|^$`)

// An expression to strip any whitespace between the gtlt and the thing
// it modifies, so that `> 1.2.3` ==> `>1.2.3`
createToken('COMPARATORTRIM', `(\\s*)${src[t.GTLT]
}\\s*(${src[t.LOOSEPLAIN]}|${src[t.XRANGEPLAIN]})`, true)
exports.comparatorTrimReplace = '$1$2$3'

// Something like `1.2.3 - 1.2.4`
// Note that these all use the loose form, because they'll be
// checked against either the strict or loose comparator form
// later.
createToken('HYPHENRANGE', `^\\s*(${src[t.XRANGEPLAIN]})` +
                   `\\s+-\\s+` +
                   `(${src[t.XRANGEPLAIN]})` +
                   `\\s*$`)

createToken('HYPHENRANGELOOSE', `^\\s*(${src[t.XRANGEPLAINLOOSE]})` +
                        `\\s+-\\s+` +
                        `(${src[t.XRANGEPLAINLOOSE]})` +
                        `\\s*$`)

// Star ranges basically just allow anything at all.
createToken('STAR', '(<|>)?=?\\s*\\*')
// >=0.0.0 is like a star
createToken('GTE0', '^\\s*>=\\s*0\\.0\\.0\\s*$')
createToken('GTE0PRE', '^\\s*>=\\s*0\\.0\\.0-0\\s*$')


/***/ }),

/***/ "../node_modules/semver/ranges/gtr.js":
/*!********************************************!*\
  !*** ../node_modules/semver/ranges/gtr.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Determine if version is greater than all the versions possible in the range.
const outside = __webpack_require__(/*! ./outside */ "../node_modules/semver/ranges/outside.js")
const gtr = (version, range, options) => outside(version, range, '>', options)
module.exports = gtr


/***/ }),

/***/ "../node_modules/semver/ranges/intersects.js":
/*!***************************************************!*\
  !*** ../node_modules/semver/ranges/intersects.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const Range = __webpack_require__(/*! ../classes/range */ "../node_modules/semver/classes/range.js")
const intersects = (r1, r2, options) => {
  r1 = new Range(r1, options)
  r2 = new Range(r2, options)
  return r1.intersects(r2)
}
module.exports = intersects


/***/ }),

/***/ "../node_modules/semver/ranges/ltr.js":
/*!********************************************!*\
  !*** ../node_modules/semver/ranges/ltr.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const outside = __webpack_require__(/*! ./outside */ "../node_modules/semver/ranges/outside.js")
// Determine if version is less than all the versions possible in the range
const ltr = (version, range, options) => outside(version, range, '<', options)
module.exports = ltr


/***/ }),

/***/ "../node_modules/semver/ranges/max-satisfying.js":
/*!*******************************************************!*\
  !*** ../node_modules/semver/ranges/max-satisfying.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const SemVer = __webpack_require__(/*! ../classes/semver */ "../node_modules/semver/classes/semver.js")
const Range = __webpack_require__(/*! ../classes/range */ "../node_modules/semver/classes/range.js")

const maxSatisfying = (versions, range, options) => {
  let max = null
  let maxSV = null
  let rangeObj = null
  try {
    rangeObj = new Range(range, options)
  } catch (er) {
    return null
  }
  versions.forEach((v) => {
    if (rangeObj.test(v)) {
      // satisfies(v, range, options)
      if (!max || maxSV.compare(v) === -1) {
        // compare(max, v, true)
        max = v
        maxSV = new SemVer(max, options)
      }
    }
  })
  return max
}
module.exports = maxSatisfying


/***/ }),

/***/ "../node_modules/semver/ranges/min-satisfying.js":
/*!*******************************************************!*\
  !*** ../node_modules/semver/ranges/min-satisfying.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const SemVer = __webpack_require__(/*! ../classes/semver */ "../node_modules/semver/classes/semver.js")
const Range = __webpack_require__(/*! ../classes/range */ "../node_modules/semver/classes/range.js")
const minSatisfying = (versions, range, options) => {
  let min = null
  let minSV = null
  let rangeObj = null
  try {
    rangeObj = new Range(range, options)
  } catch (er) {
    return null
  }
  versions.forEach((v) => {
    if (rangeObj.test(v)) {
      // satisfies(v, range, options)
      if (!min || minSV.compare(v) === 1) {
        // compare(min, v, true)
        min = v
        minSV = new SemVer(min, options)
      }
    }
  })
  return min
}
module.exports = minSatisfying


/***/ }),

/***/ "../node_modules/semver/ranges/min-version.js":
/*!****************************************************!*\
  !*** ../node_modules/semver/ranges/min-version.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const SemVer = __webpack_require__(/*! ../classes/semver */ "../node_modules/semver/classes/semver.js")
const Range = __webpack_require__(/*! ../classes/range */ "../node_modules/semver/classes/range.js")
const gt = __webpack_require__(/*! ../functions/gt */ "../node_modules/semver/functions/gt.js")

const minVersion = (range, loose) => {
  range = new Range(range, loose)

  let minver = new SemVer('0.0.0')
  if (range.test(minver)) {
    return minver
  }

  minver = new SemVer('0.0.0-0')
  if (range.test(minver)) {
    return minver
  }

  minver = null
  for (let i = 0; i < range.set.length; ++i) {
    const comparators = range.set[i]

    let setMin = null
    comparators.forEach((comparator) => {
      // Clone to avoid manipulating the comparator's semver object.
      const compver = new SemVer(comparator.semver.version)
      switch (comparator.operator) {
        case '>':
          if (compver.prerelease.length === 0) {
            compver.patch++
          } else {
            compver.prerelease.push(0)
          }
          compver.raw = compver.format()
          /* fallthrough */
        case '':
        case '>=':
          if (!setMin || gt(compver, setMin)) {
            setMin = compver
          }
          break
        case '<':
        case '<=':
          /* Ignore maximum versions */
          break
        /* istanbul ignore next */
        default:
          throw new Error(`Unexpected operation: ${comparator.operator}`)
      }
    })
    if (setMin && (!minver || gt(minver, setMin))) {
      minver = setMin
    }
  }

  if (minver && range.test(minver)) {
    return minver
  }

  return null
}
module.exports = minVersion


/***/ }),

/***/ "../node_modules/semver/ranges/outside.js":
/*!************************************************!*\
  !*** ../node_modules/semver/ranges/outside.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const SemVer = __webpack_require__(/*! ../classes/semver */ "../node_modules/semver/classes/semver.js")
const Comparator = __webpack_require__(/*! ../classes/comparator */ "../node_modules/semver/classes/comparator.js")
const { ANY } = Comparator
const Range = __webpack_require__(/*! ../classes/range */ "../node_modules/semver/classes/range.js")
const satisfies = __webpack_require__(/*! ../functions/satisfies */ "../node_modules/semver/functions/satisfies.js")
const gt = __webpack_require__(/*! ../functions/gt */ "../node_modules/semver/functions/gt.js")
const lt = __webpack_require__(/*! ../functions/lt */ "../node_modules/semver/functions/lt.js")
const lte = __webpack_require__(/*! ../functions/lte */ "../node_modules/semver/functions/lte.js")
const gte = __webpack_require__(/*! ../functions/gte */ "../node_modules/semver/functions/gte.js")

const outside = (version, range, hilo, options) => {
  version = new SemVer(version, options)
  range = new Range(range, options)

  let gtfn, ltefn, ltfn, comp, ecomp
  switch (hilo) {
    case '>':
      gtfn = gt
      ltefn = lte
      ltfn = lt
      comp = '>'
      ecomp = '>='
      break
    case '<':
      gtfn = lt
      ltefn = gte
      ltfn = gt
      comp = '<'
      ecomp = '<='
      break
    default:
      throw new TypeError('Must provide a hilo val of "<" or ">"')
  }

  // If it satisfies the range it is not outside
  if (satisfies(version, range, options)) {
    return false
  }

  // From now on, variable terms are as if we're in "gtr" mode.
  // but note that everything is flipped for the "ltr" function.

  for (let i = 0; i < range.set.length; ++i) {
    const comparators = range.set[i]

    let high = null
    let low = null

    comparators.forEach((comparator) => {
      if (comparator.semver === ANY) {
        comparator = new Comparator('>=0.0.0')
      }
      high = high || comparator
      low = low || comparator
      if (gtfn(comparator.semver, high.semver, options)) {
        high = comparator
      } else if (ltfn(comparator.semver, low.semver, options)) {
        low = comparator
      }
    })

    // If the edge version comparator has a operator then our version
    // isn't outside it
    if (high.operator === comp || high.operator === ecomp) {
      return false
    }

    // If the lowest version comparator has an operator and our version
    // is less than it then it isn't higher than the range
    if ((!low.operator || low.operator === comp) &&
        ltefn(version, low.semver)) {
      return false
    } else if (low.operator === ecomp && ltfn(version, low.semver)) {
      return false
    }
  }
  return true
}

module.exports = outside


/***/ }),

/***/ "../node_modules/semver/ranges/simplify.js":
/*!*************************************************!*\
  !*** ../node_modules/semver/ranges/simplify.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// given a set of versions and a range, create a "simplified" range
// that includes the same versions that the original range does
// If the original range is shorter than the simplified one, return that.
const satisfies = __webpack_require__(/*! ../functions/satisfies.js */ "../node_modules/semver/functions/satisfies.js")
const compare = __webpack_require__(/*! ../functions/compare.js */ "../node_modules/semver/functions/compare.js")
module.exports = (versions, range, options) => {
  const set = []
  let first = null
  let prev = null
  const v = versions.sort((a, b) => compare(a, b, options))
  for (const version of v) {
    const included = satisfies(version, range, options)
    if (included) {
      prev = version
      if (!first) {
        first = version
      }
    } else {
      if (prev) {
        set.push([first, prev])
      }
      prev = null
      first = null
    }
  }
  if (first) {
    set.push([first, null])
  }

  const ranges = []
  for (const [min, max] of set) {
    if (min === max) {
      ranges.push(min)
    } else if (!max && min === v[0]) {
      ranges.push('*')
    } else if (!max) {
      ranges.push(`>=${min}`)
    } else if (min === v[0]) {
      ranges.push(`<=${max}`)
    } else {
      ranges.push(`${min} - ${max}`)
    }
  }
  const simplified = ranges.join(' || ')
  const original = typeof range.raw === 'string' ? range.raw : String(range)
  return simplified.length < original.length ? simplified : range
}


/***/ }),

/***/ "../node_modules/semver/ranges/subset.js":
/*!***********************************************!*\
  !*** ../node_modules/semver/ranges/subset.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const Range = __webpack_require__(/*! ../classes/range.js */ "../node_modules/semver/classes/range.js")
const Comparator = __webpack_require__(/*! ../classes/comparator.js */ "../node_modules/semver/classes/comparator.js")
const { ANY } = Comparator
const satisfies = __webpack_require__(/*! ../functions/satisfies.js */ "../node_modules/semver/functions/satisfies.js")
const compare = __webpack_require__(/*! ../functions/compare.js */ "../node_modules/semver/functions/compare.js")

// Complex range `r1 || r2 || ...` is a subset of `R1 || R2 || ...` iff:
// - Every simple range `r1, r2, ...` is a null set, OR
// - Every simple range `r1, r2, ...` which is not a null set is a subset of
//   some `R1, R2, ...`
//
// Simple range `c1 c2 ...` is a subset of simple range `C1 C2 ...` iff:
// - If c is only the ANY comparator
//   - If C is only the ANY comparator, return true
//   - Else if in prerelease mode, return false
//   - else replace c with `[>=0.0.0]`
// - If C is only the ANY comparator
//   - if in prerelease mode, return true
//   - else replace C with `[>=0.0.0]`
// - Let EQ be the set of = comparators in c
// - If EQ is more than one, return true (null set)
// - Let GT be the highest > or >= comparator in c
// - Let LT be the lowest < or <= comparator in c
// - If GT and LT, and GT.semver > LT.semver, return true (null set)
// - If any C is a = range, and GT or LT are set, return false
// - If EQ
//   - If GT, and EQ does not satisfy GT, return true (null set)
//   - If LT, and EQ does not satisfy LT, return true (null set)
//   - If EQ satisfies every C, return true
//   - Else return false
// - If GT
//   - If GT.semver is lower than any > or >= comp in C, return false
//   - If GT is >=, and GT.semver does not satisfy every C, return false
//   - If GT.semver has a prerelease, and not in prerelease mode
//     - If no C has a prerelease and the GT.semver tuple, return false
// - If LT
//   - If LT.semver is greater than any < or <= comp in C, return false
//   - If LT is <=, and LT.semver does not satisfy every C, return false
//   - If GT.semver has a prerelease, and not in prerelease mode
//     - If no C has a prerelease and the LT.semver tuple, return false
// - Else return true

const subset = (sub, dom, options = {}) => {
  if (sub === dom) {
    return true
  }

  sub = new Range(sub, options)
  dom = new Range(dom, options)
  let sawNonNull = false

  OUTER: for (const simpleSub of sub.set) {
    for (const simpleDom of dom.set) {
      const isSub = simpleSubset(simpleSub, simpleDom, options)
      sawNonNull = sawNonNull || isSub !== null
      if (isSub) {
        continue OUTER
      }
    }
    // the null set is a subset of everything, but null simple ranges in
    // a complex range should be ignored.  so if we saw a non-null range,
    // then we know this isn't a subset, but if EVERY simple range was null,
    // then it is a subset.
    if (sawNonNull) {
      return false
    }
  }
  return true
}

const simpleSubset = (sub, dom, options) => {
  if (sub === dom) {
    return true
  }

  if (sub.length === 1 && sub[0].semver === ANY) {
    if (dom.length === 1 && dom[0].semver === ANY) {
      return true
    } else if (options.includePrerelease) {
      sub = [new Comparator('>=0.0.0-0')]
    } else {
      sub = [new Comparator('>=0.0.0')]
    }
  }

  if (dom.length === 1 && dom[0].semver === ANY) {
    if (options.includePrerelease) {
      return true
    } else {
      dom = [new Comparator('>=0.0.0')]
    }
  }

  const eqSet = new Set()
  let gt, lt
  for (const c of sub) {
    if (c.operator === '>' || c.operator === '>=') {
      gt = higherGT(gt, c, options)
    } else if (c.operator === '<' || c.operator === '<=') {
      lt = lowerLT(lt, c, options)
    } else {
      eqSet.add(c.semver)
    }
  }

  if (eqSet.size > 1) {
    return null
  }

  let gtltComp
  if (gt && lt) {
    gtltComp = compare(gt.semver, lt.semver, options)
    if (gtltComp > 0) {
      return null
    } else if (gtltComp === 0 && (gt.operator !== '>=' || lt.operator !== '<=')) {
      return null
    }
  }

  // will iterate one or zero times
  for (const eq of eqSet) {
    if (gt && !satisfies(eq, String(gt), options)) {
      return null
    }

    if (lt && !satisfies(eq, String(lt), options)) {
      return null
    }

    for (const c of dom) {
      if (!satisfies(eq, String(c), options)) {
        return false
      }
    }

    return true
  }

  let higher, lower
  let hasDomLT, hasDomGT
  // if the subset has a prerelease, we need a comparator in the superset
  // with the same tuple and a prerelease, or it's not a subset
  let needDomLTPre = lt &&
    !options.includePrerelease &&
    lt.semver.prerelease.length ? lt.semver : false
  let needDomGTPre = gt &&
    !options.includePrerelease &&
    gt.semver.prerelease.length ? gt.semver : false
  // exception: <1.2.3-0 is the same as <1.2.3
  if (needDomLTPre && needDomLTPre.prerelease.length === 1 &&
      lt.operator === '<' && needDomLTPre.prerelease[0] === 0) {
    needDomLTPre = false
  }

  for (const c of dom) {
    hasDomGT = hasDomGT || c.operator === '>' || c.operator === '>='
    hasDomLT = hasDomLT || c.operator === '<' || c.operator === '<='
    if (gt) {
      if (needDomGTPre) {
        if (c.semver.prerelease && c.semver.prerelease.length &&
            c.semver.major === needDomGTPre.major &&
            c.semver.minor === needDomGTPre.minor &&
            c.semver.patch === needDomGTPre.patch) {
          needDomGTPre = false
        }
      }
      if (c.operator === '>' || c.operator === '>=') {
        higher = higherGT(gt, c, options)
        if (higher === c && higher !== gt) {
          return false
        }
      } else if (gt.operator === '>=' && !satisfies(gt.semver, String(c), options)) {
        return false
      }
    }
    if (lt) {
      if (needDomLTPre) {
        if (c.semver.prerelease && c.semver.prerelease.length &&
            c.semver.major === needDomLTPre.major &&
            c.semver.minor === needDomLTPre.minor &&
            c.semver.patch === needDomLTPre.patch) {
          needDomLTPre = false
        }
      }
      if (c.operator === '<' || c.operator === '<=') {
        lower = lowerLT(lt, c, options)
        if (lower === c && lower !== lt) {
          return false
        }
      } else if (lt.operator === '<=' && !satisfies(lt.semver, String(c), options)) {
        return false
      }
    }
    if (!c.operator && (lt || gt) && gtltComp !== 0) {
      return false
    }
  }

  // if there was a < or >, and nothing in the dom, then must be false
  // UNLESS it was limited by another range in the other direction.
  // Eg, >1.0.0 <1.0.1 is still a subset of <2.0.0
  if (gt && hasDomLT && !lt && gtltComp !== 0) {
    return false
  }

  if (lt && hasDomGT && !gt && gtltComp !== 0) {
    return false
  }

  // we needed a prerelease range in a specific tuple, but didn't get one
  // then this isn't a subset.  eg >=1.2.3-pre is not a subset of >=1.0.0,
  // because it includes prereleases in the 1.2.3 tuple
  if (needDomGTPre || needDomLTPre) {
    return false
  }

  return true
}

// >=1.2.3 is lower than >1.2.3
const higherGT = (a, b, options) => {
  if (!a) {
    return b
  }
  const comp = compare(a.semver, b.semver, options)
  return comp > 0 ? a
    : comp < 0 ? b
    : b.operator === '>' && a.operator === '>=' ? b
    : a
}

// <=1.2.3 is higher than <1.2.3
const lowerLT = (a, b, options) => {
  if (!a) {
    return b
  }
  const comp = compare(a.semver, b.semver, options)
  return comp < 0 ? a
    : comp > 0 ? b
    : b.operator === '<' && a.operator === '<=' ? b
    : a
}

module.exports = subset


/***/ }),

/***/ "../node_modules/semver/ranges/to-comparators.js":
/*!*******************************************************!*\
  !*** ../node_modules/semver/ranges/to-comparators.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const Range = __webpack_require__(/*! ../classes/range */ "../node_modules/semver/classes/range.js")

// Mostly just for testing and legacy API reasons
const toComparators = (range, options) =>
  new Range(range, options).set
    .map(comp => comp.map(c => c.value).join(' ').trim().split(' '))

module.exports = toComparators


/***/ }),

/***/ "../node_modules/semver/ranges/valid.js":
/*!**********************************************!*\
  !*** ../node_modules/semver/ranges/valid.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const Range = __webpack_require__(/*! ../classes/range */ "../node_modules/semver/classes/range.js")
const validRange = (range, options) => {
  try {
    // Return '*' instead of '' so that truthiness works.
    // This will throw if it's invalid anyway
    return new Range(range, options).range || '*'
  } catch (er) {
    return null
  }
}
module.exports = validRange


/***/ }),

/***/ "../node_modules/tslib/tslib.es6.js":
/*!******************************************!*\
  !*** ../node_modules/tslib/tslib.es6.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__assign": () => (/* binding */ __assign),
/* harmony export */   "__asyncDelegator": () => (/* binding */ __asyncDelegator),
/* harmony export */   "__asyncGenerator": () => (/* binding */ __asyncGenerator),
/* harmony export */   "__asyncValues": () => (/* binding */ __asyncValues),
/* harmony export */   "__await": () => (/* binding */ __await),
/* harmony export */   "__awaiter": () => (/* binding */ __awaiter),
/* harmony export */   "__classPrivateFieldGet": () => (/* binding */ __classPrivateFieldGet),
/* harmony export */   "__classPrivateFieldIn": () => (/* binding */ __classPrivateFieldIn),
/* harmony export */   "__classPrivateFieldSet": () => (/* binding */ __classPrivateFieldSet),
/* harmony export */   "__createBinding": () => (/* binding */ __createBinding),
/* harmony export */   "__decorate": () => (/* binding */ __decorate),
/* harmony export */   "__exportStar": () => (/* binding */ __exportStar),
/* harmony export */   "__extends": () => (/* binding */ __extends),
/* harmony export */   "__generator": () => (/* binding */ __generator),
/* harmony export */   "__importDefault": () => (/* binding */ __importDefault),
/* harmony export */   "__importStar": () => (/* binding */ __importStar),
/* harmony export */   "__makeTemplateObject": () => (/* binding */ __makeTemplateObject),
/* harmony export */   "__metadata": () => (/* binding */ __metadata),
/* harmony export */   "__param": () => (/* binding */ __param),
/* harmony export */   "__read": () => (/* binding */ __read),
/* harmony export */   "__rest": () => (/* binding */ __rest),
/* harmony export */   "__spread": () => (/* binding */ __spread),
/* harmony export */   "__spreadArray": () => (/* binding */ __spreadArray),
/* harmony export */   "__spreadArrays": () => (/* binding */ __spreadArrays),
/* harmony export */   "__values": () => (/* binding */ __values)
/* harmony export */ });
/******************************************************************************
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
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

/** @deprecated */
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}

function __classPrivateFieldIn(state, receiver) {
    if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function")) throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof state === "function" ? receiver === state : state.has(receiver);
}


/***/ }),

/***/ "../node_modules/yallist/iterator.js":
/*!*******************************************!*\
  !*** ../node_modules/yallist/iterator.js ***!
  \*******************************************/
/***/ ((module) => {

"use strict";

module.exports = function (Yallist) {
  Yallist.prototype[Symbol.iterator] = function* () {
    for (let walker = this.head; walker; walker = walker.next) {
      yield walker.value
    }
  }
}


/***/ }),

/***/ "../node_modules/yallist/yallist.js":
/*!******************************************!*\
  !*** ../node_modules/yallist/yallist.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

module.exports = Yallist

Yallist.Node = Node
Yallist.create = Yallist

function Yallist (list) {
  var self = this
  if (!(self instanceof Yallist)) {
    self = new Yallist()
  }

  self.tail = null
  self.head = null
  self.length = 0

  if (list && typeof list.forEach === 'function') {
    list.forEach(function (item) {
      self.push(item)
    })
  } else if (arguments.length > 0) {
    for (var i = 0, l = arguments.length; i < l; i++) {
      self.push(arguments[i])
    }
  }

  return self
}

Yallist.prototype.removeNode = function (node) {
  if (node.list !== this) {
    throw new Error('removing node which does not belong to this list')
  }

  var next = node.next
  var prev = node.prev

  if (next) {
    next.prev = prev
  }

  if (prev) {
    prev.next = next
  }

  if (node === this.head) {
    this.head = next
  }
  if (node === this.tail) {
    this.tail = prev
  }

  node.list.length--
  node.next = null
  node.prev = null
  node.list = null

  return next
}

Yallist.prototype.unshiftNode = function (node) {
  if (node === this.head) {
    return
  }

  if (node.list) {
    node.list.removeNode(node)
  }

  var head = this.head
  node.list = this
  node.next = head
  if (head) {
    head.prev = node
  }

  this.head = node
  if (!this.tail) {
    this.tail = node
  }
  this.length++
}

Yallist.prototype.pushNode = function (node) {
  if (node === this.tail) {
    return
  }

  if (node.list) {
    node.list.removeNode(node)
  }

  var tail = this.tail
  node.list = this
  node.prev = tail
  if (tail) {
    tail.next = node
  }

  this.tail = node
  if (!this.head) {
    this.head = node
  }
  this.length++
}

Yallist.prototype.push = function () {
  for (var i = 0, l = arguments.length; i < l; i++) {
    push(this, arguments[i])
  }
  return this.length
}

Yallist.prototype.unshift = function () {
  for (var i = 0, l = arguments.length; i < l; i++) {
    unshift(this, arguments[i])
  }
  return this.length
}

Yallist.prototype.pop = function () {
  if (!this.tail) {
    return undefined
  }

  var res = this.tail.value
  this.tail = this.tail.prev
  if (this.tail) {
    this.tail.next = null
  } else {
    this.head = null
  }
  this.length--
  return res
}

Yallist.prototype.shift = function () {
  if (!this.head) {
    return undefined
  }

  var res = this.head.value
  this.head = this.head.next
  if (this.head) {
    this.head.prev = null
  } else {
    this.tail = null
  }
  this.length--
  return res
}

Yallist.prototype.forEach = function (fn, thisp) {
  thisp = thisp || this
  for (var walker = this.head, i = 0; walker !== null; i++) {
    fn.call(thisp, walker.value, i, this)
    walker = walker.next
  }
}

Yallist.prototype.forEachReverse = function (fn, thisp) {
  thisp = thisp || this
  for (var walker = this.tail, i = this.length - 1; walker !== null; i--) {
    fn.call(thisp, walker.value, i, this)
    walker = walker.prev
  }
}

Yallist.prototype.get = function (n) {
  for (var i = 0, walker = this.head; walker !== null && i < n; i++) {
    // abort out of the list early if we hit a cycle
    walker = walker.next
  }
  if (i === n && walker !== null) {
    return walker.value
  }
}

Yallist.prototype.getReverse = function (n) {
  for (var i = 0, walker = this.tail; walker !== null && i < n; i++) {
    // abort out of the list early if we hit a cycle
    walker = walker.prev
  }
  if (i === n && walker !== null) {
    return walker.value
  }
}

Yallist.prototype.map = function (fn, thisp) {
  thisp = thisp || this
  var res = new Yallist()
  for (var walker = this.head; walker !== null;) {
    res.push(fn.call(thisp, walker.value, this))
    walker = walker.next
  }
  return res
}

Yallist.prototype.mapReverse = function (fn, thisp) {
  thisp = thisp || this
  var res = new Yallist()
  for (var walker = this.tail; walker !== null;) {
    res.push(fn.call(thisp, walker.value, this))
    walker = walker.prev
  }
  return res
}

Yallist.prototype.reduce = function (fn, initial) {
  var acc
  var walker = this.head
  if (arguments.length > 1) {
    acc = initial
  } else if (this.head) {
    walker = this.head.next
    acc = this.head.value
  } else {
    throw new TypeError('Reduce of empty list with no initial value')
  }

  for (var i = 0; walker !== null; i++) {
    acc = fn(acc, walker.value, i)
    walker = walker.next
  }

  return acc
}

Yallist.prototype.reduceReverse = function (fn, initial) {
  var acc
  var walker = this.tail
  if (arguments.length > 1) {
    acc = initial
  } else if (this.tail) {
    walker = this.tail.prev
    acc = this.tail.value
  } else {
    throw new TypeError('Reduce of empty list with no initial value')
  }

  for (var i = this.length - 1; walker !== null; i--) {
    acc = fn(acc, walker.value, i)
    walker = walker.prev
  }

  return acc
}

Yallist.prototype.toArray = function () {
  var arr = new Array(this.length)
  for (var i = 0, walker = this.head; walker !== null; i++) {
    arr[i] = walker.value
    walker = walker.next
  }
  return arr
}

Yallist.prototype.toArrayReverse = function () {
  var arr = new Array(this.length)
  for (var i = 0, walker = this.tail; walker !== null; i++) {
    arr[i] = walker.value
    walker = walker.prev
  }
  return arr
}

Yallist.prototype.slice = function (from, to) {
  to = to || this.length
  if (to < 0) {
    to += this.length
  }
  from = from || 0
  if (from < 0) {
    from += this.length
  }
  var ret = new Yallist()
  if (to < from || to < 0) {
    return ret
  }
  if (from < 0) {
    from = 0
  }
  if (to > this.length) {
    to = this.length
  }
  for (var i = 0, walker = this.head; walker !== null && i < from; i++) {
    walker = walker.next
  }
  for (; walker !== null && i < to; i++, walker = walker.next) {
    ret.push(walker.value)
  }
  return ret
}

Yallist.prototype.sliceReverse = function (from, to) {
  to = to || this.length
  if (to < 0) {
    to += this.length
  }
  from = from || 0
  if (from < 0) {
    from += this.length
  }
  var ret = new Yallist()
  if (to < from || to < 0) {
    return ret
  }
  if (from < 0) {
    from = 0
  }
  if (to > this.length) {
    to = this.length
  }
  for (var i = this.length, walker = this.tail; walker !== null && i > to; i--) {
    walker = walker.prev
  }
  for (; walker !== null && i > from; i--, walker = walker.prev) {
    ret.push(walker.value)
  }
  return ret
}

Yallist.prototype.splice = function (start, deleteCount, ...nodes) {
  if (start > this.length) {
    start = this.length - 1
  }
  if (start < 0) {
    start = this.length + start;
  }

  for (var i = 0, walker = this.head; walker !== null && i < start; i++) {
    walker = walker.next
  }

  var ret = []
  for (var i = 0; walker && i < deleteCount; i++) {
    ret.push(walker.value)
    walker = this.removeNode(walker)
  }
  if (walker === null) {
    walker = this.tail
  }

  if (walker !== this.head && walker !== this.tail) {
    walker = walker.prev
  }

  for (var i = 0; i < nodes.length; i++) {
    walker = insert(this, walker, nodes[i])
  }
  return ret;
}

Yallist.prototype.reverse = function () {
  var head = this.head
  var tail = this.tail
  for (var walker = head; walker !== null; walker = walker.prev) {
    var p = walker.prev
    walker.prev = walker.next
    walker.next = p
  }
  this.head = tail
  this.tail = head
  return this
}

function insert (self, node, value) {
  var inserted = node === self.head ?
    new Node(value, null, node, self) :
    new Node(value, node, node.next, self)

  if (inserted.next === null) {
    self.tail = inserted
  }
  if (inserted.prev === null) {
    self.head = inserted
  }

  self.length++

  return inserted
}

function push (self, item) {
  self.tail = new Node(item, self.tail, null, self)
  if (!self.head) {
    self.head = self.tail
  }
  self.length++
}

function unshift (self, item) {
  self.head = new Node(item, null, self.head, self)
  if (!self.tail) {
    self.tail = self.head
  }
  self.length++
}

function Node (value, prev, next, list) {
  if (!(this instanceof Node)) {
    return new Node(value, prev, next, list)
  }

  this.list = list
  this.value = value

  if (prev) {
    prev.next = this
    this.prev = prev
  } else {
    this.prev = null
  }

  if (next) {
    next.prev = this
    this.next = next
  } else {
    this.next = null
  }
}

try {
  // add if support for Symbol.iterator is present
  __webpack_require__(/*! ./iterator.js */ "../node_modules/yallist/iterator.js")(Yallist)
} catch (er) {}


/***/ }),

/***/ "@grafana/data":
/*!********************************!*\
  !*** external "@grafana/data" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__grafana_data__;

/***/ }),

/***/ "@grafana/runtime":
/*!***********************************!*\
  !*** external "@grafana/runtime" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__grafana_runtime__;

/***/ }),

/***/ "@grafana/ui":
/*!******************************!*\
  !*** external "@grafana/ui" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__grafana_ui__;

/***/ }),

/***/ "emotion":
/*!**************************!*\
  !*** external "emotion" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_emotion__;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*******************!*\
  !*** ./module.ts ***!
  \*******************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "plugin": () => (/* binding */ plugin)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @grafana/data */ "@grafana/data");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_grafana_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var grafana_plugin_support__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! grafana-plugin-support */ "../node_modules/grafana-plugin-support/dist/index.js");
/* harmony import */ var _EsnetMatrix__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EsnetMatrix */ "./EsnetMatrix.tsx");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




/**
 * Grafana panel plugin main module
 *
 * @param {*} { panel:
 *  React.ComponentType<PanelProps<NetSageSankeyOptions>> | null
 * }
 * @return {*} { builder: PanelOptionsEditorBuilder<NetSageSankeyOptions> }
 */

var OptionsCategory = ['Display'];
var URLCategory = ['Link Options'];

var urlBool = function urlBool(addUrl) {
  return function (config) {
    return config.addUrl === addUrl;
  };
}; // const urlOtherBool = (urlOther: boolean) => (config: MatrixOptions) => config.urlOther === urlOther;


var buildStandardOptions = function buildStandardOptions() {
  var options = [_grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldConfigProperty.Unit, _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldConfigProperty.Color];
  return (0,grafana_plugin_support__WEBPACK_IMPORTED_MODULE_1__.standardOptionsCompat)(options);
};

var plugin = new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.PanelPlugin(_EsnetMatrix__WEBPACK_IMPORTED_MODULE_2__.EsnetMatrix);
plugin.useFieldConfig({
  standardOptions: buildStandardOptions()
});
plugin.setPanelOptions(function (builder) {
  builder.addSelect({
    path: 'sourceField',
    name: 'Source Field',
    description: 'Select the fields that should be used as the source',
    category: OptionsCategory,
    settings: {
      allowCustomValue: false,
      options: [],
      getOptions: function () {
        var _getOptions = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(context) {
          var options, _iterator, _step, frame, _iterator2, _step2, field, name, value;

          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  options = [];

                  if (context && context.data) {
                    _iterator = _createForOfIteratorHelper(context.data);

                    try {
                      for (_iterator.s(); !(_step = _iterator.n()).done;) {
                        frame = _step.value;
                        _iterator2 = _createForOfIteratorHelper(frame.fields);

                        try {
                          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                            field = _step2.value;
                            name = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_0__.getFieldDisplayName)(field, frame, context.data);
                            value = name;
                            options.push({
                              value: value,
                              label: name
                            });
                          }
                        } catch (err) {
                          _iterator2.e(err);
                        } finally {
                          _iterator2.f();
                        }
                      }
                    } catch (err) {
                      _iterator.e(err);
                    } finally {
                      _iterator.f();
                    }
                  }

                  return _context.abrupt("return", Promise.resolve(options));

                case 3:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        function getOptions(_x) {
          return _getOptions.apply(this, arguments);
        }

        return getOptions;
      }()
    } // defaultValue: options[0],

  });
  builder.addTextInput({
    path: 'sourceText',
    name: 'Source Text',
    description: 'The text to be displayed in the tooltip.',
    category: OptionsCategory,
    defaultValue: 'From'
  });
  builder.addSelect({
    path: 'targetField',
    name: 'Target Field',
    description: 'Select the field to use as the target ',
    category: OptionsCategory,
    settings: {
      allowCustomValue: false,
      options: [],
      getOptions: function () {
        var _getOptions2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(context) {
          var options, _iterator3, _step3, frame, _iterator4, _step4, field, name, value;

          return _regeneratorRuntime().wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  options = [];

                  if (context && context.data) {
                    _iterator3 = _createForOfIteratorHelper(context.data);

                    try {
                      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                        frame = _step3.value;
                        _iterator4 = _createForOfIteratorHelper(frame.fields);

                        try {
                          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                            field = _step4.value;
                            name = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_0__.getFieldDisplayName)(field, frame, context.data);
                            value = name;
                            options.push({
                              value: value,
                              label: name
                            });
                          }
                        } catch (err) {
                          _iterator4.e(err);
                        } finally {
                          _iterator4.f();
                        }
                      }
                    } catch (err) {
                      _iterator3.e(err);
                    } finally {
                      _iterator3.f();
                    }
                  }

                  return _context2.abrupt("return", Promise.resolve(options));

                case 3:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));

        function getOptions(_x2) {
          return _getOptions2.apply(this, arguments);
        }

        return getOptions;
      }()
    }
  });
  builder.addTextInput({
    path: 'targetText',
    name: 'Target Text',
    description: 'The text to be displayed in the tooltip.',
    category: OptionsCategory,
    defaultValue: 'To'
  });
  builder.addSelect({
    path: 'valueField',
    name: 'Value Field',
    description: 'Select the numeric field used to color the matrix cells.',
    category: OptionsCategory,
    settings: {
      allowCustomValue: false,
      options: [],
      getOptions: function () {
        var _getOptions3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(context) {
          var options, _iterator5, _step5, frame, _iterator6, _step6, field, name, value;

          return _regeneratorRuntime().wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  options = [];

                  if (context && context.data) {
                    _iterator5 = _createForOfIteratorHelper(context.data);

                    try {
                      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                        frame = _step5.value;
                        _iterator6 = _createForOfIteratorHelper(frame.fields);

                        try {
                          for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                            field = _step6.value;
                            name = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_0__.getFieldDisplayName)(field, frame, context.data);
                            value = name;
                            options.push({
                              value: value,
                              label: name
                            });
                          }
                        } catch (err) {
                          _iterator6.e(err);
                        } finally {
                          _iterator6.f();
                        }
                      }
                    } catch (err) {
                      _iterator5.e(err);
                    } finally {
                      _iterator5.f();
                    }
                  }

                  return _context3.abrupt("return", Promise.resolve(options));

                case 3:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3);
        }));

        function getOptions(_x3) {
          return _getOptions3.apply(this, arguments);
        }

        return getOptions;
      }()
    } // defaultValue: options[2],

  });
  builder.addTextInput({
    path: 'valueText',
    name: 'value Text',
    description: 'The text to be displayed in the tooltip.',
    category: OptionsCategory,
    defaultValue: 'Value'
  });
  builder.addNumberInput({
    path: 'cellSize',
    name: 'Cell Size',
    description: 'Adjust the size in pixels that each matrix cell should use.',
    category: OptionsCategory,
    settings: {
      placeholder: 'Auto',
      integer: true,
      min: 10,
      max: 50
    },
    defaultValue: 15
  });
  builder.addNumberInput({
    path: 'cellPadding',
    name: 'Cell Padding',
    description: 'Adjust the padding between the matrix cells. Note that this is a relative size and does not directly translate to pixels.',
    category: OptionsCategory,
    settings: {
      placeholder: 'Auto',
      integer: true,
      min: 0,
      max: 100
    },
    defaultValue: 5
  });
  builder.addNumberInput({
    path: 'txtLength',
    name: 'Text Length',
    description: 'adjust amount of space used for labels',
    category: OptionsCategory,
    settings: {
      placeholder: 'Auto',
      integer: true,
      min: 1,
      max: 300
    },
    defaultValue: 100
  });
  builder.addNumberInput({
    path: 'txtSize',
    name: 'Text Size',
    description: 'adjust the size of the text labels',
    category: OptionsCategory,
    settings: {
      placeholder: 'Auto',
      integer: true,
      min: 1,
      max: 200
    },
    defaultValue: 100
  });
  builder.addColorPicker({
    path: 'nullColor',
    name: 'Null Color',
    description: 'The color to use when the query returns a null value',
    category: OptionsCategory,
    defaultValue: '#E6E6E6'
  });
  builder.addColorPicker({
    path: 'defaultColor',
    name: 'No Data Color',
    description: 'The color to use when there is no data returned by the query',
    category: OptionsCategory,
    defaultValue: '#E6E6E6'
  }); /////////----------- Link URL options ---------------////////////////

  builder.addBooleanSwitch({
    path: 'addUrl',
    name: 'Add Data Link',
    category: URLCategory,
    defaultValue: false
  });
  builder.addTextInput({
    path: 'url',
    name: 'Link URL',
    description: 'URL to go to when square is clicked.',
    category: URLCategory,
    showIf: urlBool(true)
  });
  builder.addTextInput({
    path: 'urlVar1',
    name: 'Variable 1',
    description: 'The name of the template variable to pass the source label to',
    category: URLCategory,
    showIf: urlBool(true)
  });
  builder.addTextInput({
    path: 'urlVar2',
    name: 'Variable 2',
    description: 'The name of the template variable to pass the target label to',
    category: URLCategory,
    showIf: urlBool(true)
  }); // builder.addBooleanSwitch({
  //   path: 'urlOther',
  //   name: 'Append more text',
  //   description: 'Ex: date',
  //   category: URLCategory,
  //   defaultValue: true,
  //   showIf: urlBool(true),
  // });
  // builder.addTextInput({
  //   path: 'urlOtherText',
  //   name: 'Text',
  //   description: 'Other text to append to URL',
  //   category: URLCategory,
  //   showIf: urlOtherBool(true),
  // });
}); // .useFieldConfig({});
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});;
//# sourceMappingURL=module.js.map