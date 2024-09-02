"use strict";

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
/**
 * @license
 * Copyright 2024 Aluk Library Authors
 * SPDX-License-Identifier: MIT
 */

(function (global, factory) {
  (typeof exports === "undefined" ? "undefined" : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? factory(exports) : typeof define === 'function' && define.amd ? define(['exports'], factory) : (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.aluk = factory());
})(void 0, function (exports) {
  var aluk;
  var fremwork = function fremwork(e, t) {
    var _this = this;
    var fn = this;
    var ce;
    if (e == '' || e == undefined) {
      ce = '';
    }
    if (e == 'body' || e == 'head') {
      ce = [];
      ce.push(document[e]);
    }
    if (typeof e == 'string' && checkHtml(e) === false) {
      try {
        ce = document.querySelectorAll(e.toString());
      } catch (_unused) {
        ce = '';
      }
    } else {
      if (typeof e == 'number') {
        ce = '';
      } else {
        if (_typeof(e) == 'object') {
          ce = new Array(e);
        } else {
          if (checkHtml(e) === true) {
            ce = new Array(htmlToElement(e));
          }
        }
      }
    }
    if (ce.length > 1) {
      var c = 0;
      ce.forEach(function (element) {
        _this[c] = element;
        c++;
      });
    } else {
      if (ce.length > 0) {
        this[0] = ce[0];
      }
    }
    Object.defineProperty(this, '$$frem$$', {
      enumerable: false,
      configurable: false,
      value: fn
    });
  };
  fremwork.prototype = {
    remove: function remove() {
      try {
        var count = 0;
        for (var _i = 0, _Object$entries = Object.entries(this.$$frem$$); _i < _Object$entries.length; _i++) {
          var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 1),
            key = _Object$entries$_i[0];
          this[key].remove();
          count++;
        }
        return count;
      } catch (e) {
        try {
          this[0].remove();
          return 1;
        } catch (e) {
          return 0;
        }
      }
    },
    Prep: function Prep(e, t) {
      t = t || false;
      (t ? window : document).addEventListener(t ? 'load' : 'DOMContentLoaded', e);
    }
  };
  var elements = {};
  elements.applier = fremwork;

  /*
    **/

  function Interpreter(options) {
    var _this2 = this;
    options = options || {};
    this.$$options_normal$$ = options;
    this.mode = undefined;
    this["enum"] = {};
    this.set = function (e, v) {
      _this2['enum'][e] = v;
      _this2.triggerOnChange(e);
    };
    this.get = function (e) {
      return _this2['enum'][e];
    };
    if ('mode' in options) {
      this.mode = options['mode'];
    } else {
      mode = 'normal';
    }
    if ('enum' in options) {
      this["enum"] = options['enum'];
    } else {
      this["enum"] = {};
    }
    this.onChangeListeners = {};
    this.onChange = function (property, callback) {
      if (!_this2.onChangeListeners[property]) {
        _this2.onChangeListeners[property] = [];
      }
      _this2.onChangeListeners[property].push(callback);
    };
    this.triggerOnChange = function (property) {
      if (_this2.onChangeListeners[property]) {
        _this2.onChangeListeners[property].forEach(function (callback) {
          callback(_this2["enum"][property]);
        });
      }
    };
    this["enum"] = new Proxy(this["enum"], {
      set: function set(target, property, value) {
        var previousValue = target[property];
        if (previousValue !== value) {
          target[property] = value;
          _this2.triggerOnChange(property);
        }
        return true;
      }
    });
  }
  function updateHTML(property, value) {
    var elements = document.querySelectorAll("*[id=\"".concat(property, "\"], *[data-bind*=\"").concat(property, "\"]"));
    elements.forEach(function (element) {
      if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
        element.value = value;
      } else {
        element.textContent = value;
      }
    });
  }

  /*
    **/
  var specialTags = [];
  var controls = {
    "import": function _import(url) {
      var xhr = new XMLHttpRequest();
      xhr.addEventListener("load", function () {
        new Function(xhr.responseText)();
      });
      xhr.open("GET", url);
      xhr.send();
    },
    "export": function _export(obj) {
      if (typeof obj == 'function') {
        specialTags.push(new obj(window, aluk.controls["export"]).tag);
        aluk.controls.list.push(new (Object.freeze(obj))(window, aluk.controls["export"]));
      } else {
        console.warn('Cannot load expansion\n', obj);
      }
    },
    register: function register(e, t) {
      switch (_typeof(e)) {
        case "object":
          return vailate(e, t);
        case "function":
          return vailate(new e(window, aluk.controls["export"]), t);
        default:
          console.warn('Cannot load expansion\n', e);
          break;
      }
      function vailate(f) {
        if (aluk(f) == aluk('')) {
          if (t == false || t == undefined) {
            console.warn('Cannot load expansion\n', f.constructor);
            return false;
          } else {
            return controls["export"](f.constructor);
          }
        } else {
          return controls["export"](f.constructor);
        }
      }
      return false;
    },
    list: []
  };
  var isHtmlElement = function isHtmlElement(variable) {
    return variable instanceof Element || variable instanceof HTMLElement;
  };
  var checkHtml = function checkHtml(htmlStr) {
    var reg = /<[a-z][\s\S]*>/i;
    return reg.test(htmlStr);
  };
  var htmlToElement = function htmlToElement(html) {
    var parser = new DOMParser();
    var doc = parser.parseFromString(html, 'text/html');
    return doc.body.firstChild;
  };
  var objectToCss = function objectToCss(obj) {
    return Object.entries(obj).map(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
        key = _ref2[0],
        value = _ref2[1];
      return "".concat(key, ": ").concat(value, ";");
    });
    //.join('\n');
  };
  aluk = function aluk(e, t) {
    return new elements.applier(e, t);
  };
  aluk.objectToCss = objectToCss;
  aluk.checkHtml = checkHtml;
  aluk.isHtmlElement = isHtmlElement;
  aluk.controls = controls;
  aluk.originalCreateElement = document.createElement;
  aluk.Interpreter = Interpreter;
  var createElementX = function createElementX(tagName) {
    if (specialTags.includes(tagName)) {
      var element = aluk.originalCreateElement.call(document, tagName);
      element.$$aluk_framed$$ = false;
      var foundItem = aluk.controls.list.find(function (item) {
        return item.tag == tagName;
      });
      if (typeof foundItem == 'undefined') return;
      try {
        var _shadow = element.attachShadow({
          mode: 'closed'
        });
        element.$$aluk_framed$$ = true;
        _shadow.innerHTML = foundItem.inner || '';
        _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                (foundItem.renderer || function (e) {
                  e;
                })(element, _shadow);
              case 1:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }))();
        requestAnimationFrame( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
          return _regeneratorRuntime().wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                (e.onframe || function (e) {
                  e;
                })(t, _shadow);
              case 1:
              case "end":
                return _context2.stop();
            }
          }, _callee2);
        })));
      } catch (_unused2) {}
      return element;
    } else {
      var _element = aluk.originalCreateElement.call(document, tagName);
      Object.defineProperty(_element, '$$aluk_framed$$', {
        value: true,
        writable: false,
        enumerable: false
      });
      return _element;
    }
  };
  try {
    Object.defineProperty(document, 'createElement', {
      value: createElementX,
      writable: false
    });
  } catch (_unused3) {
    console.warn('CreateElementX cannot replace the old version.');
  }
  function frameInvoker() {
    aluk.controls.list.forEach(function (e) {
      try {
        var els = document.querySelectorAll(e.tag.toString());
        els.forEach(function (t) {
          if (t.$$aluk_framed$$ != false) {
            try {
              var _shadow2 = t.attachShadow({
                mode: 'closed'
              });
              Object.defineProperty(t, '$$aluk_framed$$', {
                value: true,
                writable: false,
                enumerable: false
              });
              if ('style' in e) {
                if (typeof e.style == 'string') {
                  _shadow2.innerHTML = '<style class="original-style">' + e.style + '</style>';
                } else {
                  _shadow2.appendChild(e);
                }
              }
              _shadow2.innerHTML += e.inner || '';
              _shadow2.createElement = document.createElement;
              _shadow2.write = function (e) {
                try {
                  _shadow2.innerHTML = e;
                } catch (_unused4) {}
              };
              (function () {
                var _a = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
                  return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                    while (1) switch (_context3.prev = _context3.next) {
                      case 0:
                        (e.renderer || function (e) {
                          e;
                        })(t, _shadow2);
                      case 1:
                      case "end":
                        return _context3.stop();
                    }
                  }, _callee3);
                }));
                function a() {
                  return _a.apply(this, arguments);
                }
                return a;
              })()();
            } catch (_unused5) {}
          } else {
            (function () {
              var _a2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
                return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                  while (1) switch (_context4.prev = _context4.next) {
                    case 0:
                      (e.onframe || function (e) {
                        e;
                      })(t, shadow);
                    case 1:
                    case "end":
                      return _context4.stop();
                  }
                }, _callee4);
              }));
              function a() {
                return _a2.apply(this, arguments);
              }
              return a;
            })()();
          }
        });
      } catch (_unused6) {}
    });
    requestAnimationFrame(frameInvoker);
  }
  frameInvoker();

  /*
    **/

  /*
        *at last*
    **/

  exports = aluk;
  return exports;
});