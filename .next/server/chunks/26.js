exports.id = 26;
exports.ids = [26];
exports.modules = {

/***/ 9548:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(4836);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.BroadcastChannel = BroadcastChannel;
exports.apiBaseUrl = apiBaseUrl;
exports.fetchData = fetchData;
exports.now = now;

var _regenerator = _interopRequireDefault(__webpack_require__(4687));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(8416));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(7156));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function fetchData(_x, _x2, _x3) {
  return _fetchData.apply(this, arguments);
}

function _fetchData() {
  _fetchData = (0, _asyncToGenerator2.default)(_regenerator.default.mark(function _callee(path, __NEXTAUTH, logger) {
    var _ref,
        ctx,
        _ref$req,
        req,
        url,
        _req$headers,
        options,
        res,
        data,
        _args = arguments;

    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _ref = _args.length > 3 && _args[3] !== undefined ? _args[3] : {}, ctx = _ref.ctx, _ref$req = _ref.req, req = _ref$req === void 0 ? ctx === null || ctx === void 0 ? void 0 : ctx.req : _ref$req;
            url = "".concat(apiBaseUrl(__NEXTAUTH), "/").concat(path);
            _context.prev = 2;
            options = {
              headers: _objectSpread({
                "Content-Type": "application/json"
              }, req !== null && req !== void 0 && (_req$headers = req.headers) !== null && _req$headers !== void 0 && _req$headers.cookie ? {
                cookie: req.headers.cookie
              } : {})
            };

            if (req !== null && req !== void 0 && req.body) {
              options.body = JSON.stringify(req.body);
              options.method = "POST";
            }

            _context.next = 7;
            return fetch(url, options);

          case 7:
            res = _context.sent;
            _context.next = 10;
            return res.json();

          case 10:
            data = _context.sent;

            if (res.ok) {
              _context.next = 13;
              break;
            }

            throw data;

          case 13:
            return _context.abrupt("return", Object.keys(data).length > 0 ? data : null);

          case 16:
            _context.prev = 16;
            _context.t0 = _context["catch"](2);
            logger.error("CLIENT_FETCH_ERROR", {
              error: _context.t0,
              url: url
            });
            return _context.abrupt("return", null);

          case 20:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 16]]);
  }));
  return _fetchData.apply(this, arguments);
}

function apiBaseUrl(__NEXTAUTH) {
  if (typeof window === "undefined") {
    return "".concat(__NEXTAUTH.baseUrlServer).concat(__NEXTAUTH.basePathServer);
  }

  return __NEXTAUTH.basePath;
}

function now() {
  return Math.floor(Date.now() / 1000);
}

function BroadcastChannel() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "nextauth.message";
  return {
    receive: function receive(onReceive) {
      var handler = function handler(event) {
        var _event$newValue;

        if (event.key !== name) return;
        var message = JSON.parse((_event$newValue = event.newValue) !== null && _event$newValue !== void 0 ? _event$newValue : "{}");
        if ((message === null || message === void 0 ? void 0 : message.event) !== "session" || !(message !== null && message !== void 0 && message.data)) return;
        onReceive(message);
      };

      window.addEventListener("storage", handler);
      return function () {
        return window.removeEventListener("storage", handler);
      };
    },
    post: function post(message) {
      if (typeof window === "undefined") return;

      try {
        localStorage.setItem(name, JSON.stringify(_objectSpread(_objectSpread({}, message), {}, {
          timestamp: now()
        })));
      } catch (_unused) {}
    }
  };
}

/***/ }),

/***/ 6925:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(4836);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.UnsupportedStrategy = exports.UnknownError = exports.OAuthCallbackError = exports.MissingSecret = exports.MissingAuthorize = exports.MissingAdapterMethods = exports.MissingAdapter = exports.MissingAPIRoute = exports.InvalidCallbackUrl = exports.AccountNotLinkedError = void 0;
exports.adapterErrorHandler = adapterErrorHandler;
exports.capitalize = capitalize;
exports.eventsErrorHandler = eventsErrorHandler;
exports.upperSnake = upperSnake;

var _regenerator = _interopRequireDefault(__webpack_require__(4687));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(7156));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(6115));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(8416));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(6690));

var _createClass2 = _interopRequireDefault(__webpack_require__(9728));

var _inherits2 = _interopRequireDefault(__webpack_require__(1655));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(4993));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(3808));

var _wrapNativeSuper2 = _interopRequireDefault(__webpack_require__(3496));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var UnknownError = function (_Error) {
  (0, _inherits2.default)(UnknownError, _Error);

  var _super = _createSuper(UnknownError);

  function UnknownError(error) {
    var _message;

    var _this;

    (0, _classCallCheck2.default)(this, UnknownError);
    _this = _super.call(this, (_message = error === null || error === void 0 ? void 0 : error.message) !== null && _message !== void 0 ? _message : error);
    _this.name = "UnknownError";
    _this.code = error.code;

    if (error instanceof Error) {
      _this.stack = error.stack;
    }

    return _this;
  }

  (0, _createClass2.default)(UnknownError, [{
    key: "toJSON",
    value: function toJSON() {
      return {
        name: this.name,
        message: this.message,
        stack: this.stack
      };
    }
  }]);
  return UnknownError;
}((0, _wrapNativeSuper2.default)(Error));

exports.UnknownError = UnknownError;

var OAuthCallbackError = function (_UnknownError) {
  (0, _inherits2.default)(OAuthCallbackError, _UnknownError);

  var _super2 = _createSuper(OAuthCallbackError);

  function OAuthCallbackError() {
    var _this2;

    (0, _classCallCheck2.default)(this, OAuthCallbackError);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this2 = _super2.call.apply(_super2, [this].concat(args));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this2), "name", "OAuthCallbackError");
    return _this2;
  }

  return (0, _createClass2.default)(OAuthCallbackError);
}(UnknownError);

exports.OAuthCallbackError = OAuthCallbackError;

var AccountNotLinkedError = function (_UnknownError2) {
  (0, _inherits2.default)(AccountNotLinkedError, _UnknownError2);

  var _super3 = _createSuper(AccountNotLinkedError);

  function AccountNotLinkedError() {
    var _this3;

    (0, _classCallCheck2.default)(this, AccountNotLinkedError);

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    _this3 = _super3.call.apply(_super3, [this].concat(args));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this3), "name", "AccountNotLinkedError");
    return _this3;
  }

  return (0, _createClass2.default)(AccountNotLinkedError);
}(UnknownError);

exports.AccountNotLinkedError = AccountNotLinkedError;

var MissingAPIRoute = function (_UnknownError3) {
  (0, _inherits2.default)(MissingAPIRoute, _UnknownError3);

  var _super4 = _createSuper(MissingAPIRoute);

  function MissingAPIRoute() {
    var _this4;

    (0, _classCallCheck2.default)(this, MissingAPIRoute);

    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    _this4 = _super4.call.apply(_super4, [this].concat(args));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this4), "name", "MissingAPIRouteError");
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this4), "code", "MISSING_NEXTAUTH_API_ROUTE_ERROR");
    return _this4;
  }

  return (0, _createClass2.default)(MissingAPIRoute);
}(UnknownError);

exports.MissingAPIRoute = MissingAPIRoute;

var MissingSecret = function (_UnknownError4) {
  (0, _inherits2.default)(MissingSecret, _UnknownError4);

  var _super5 = _createSuper(MissingSecret);

  function MissingSecret() {
    var _this5;

    (0, _classCallCheck2.default)(this, MissingSecret);

    for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      args[_key4] = arguments[_key4];
    }

    _this5 = _super5.call.apply(_super5, [this].concat(args));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this5), "name", "MissingSecretError");
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this5), "code", "NO_SECRET");
    return _this5;
  }

  return (0, _createClass2.default)(MissingSecret);
}(UnknownError);

exports.MissingSecret = MissingSecret;

var MissingAuthorize = function (_UnknownError5) {
  (0, _inherits2.default)(MissingAuthorize, _UnknownError5);

  var _super6 = _createSuper(MissingAuthorize);

  function MissingAuthorize() {
    var _this6;

    (0, _classCallCheck2.default)(this, MissingAuthorize);

    for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
      args[_key5] = arguments[_key5];
    }

    _this6 = _super6.call.apply(_super6, [this].concat(args));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this6), "name", "MissingAuthorizeError");
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this6), "code", "CALLBACK_CREDENTIALS_HANDLER_ERROR");
    return _this6;
  }

  return (0, _createClass2.default)(MissingAuthorize);
}(UnknownError);

exports.MissingAuthorize = MissingAuthorize;

var MissingAdapter = function (_UnknownError6) {
  (0, _inherits2.default)(MissingAdapter, _UnknownError6);

  var _super7 = _createSuper(MissingAdapter);

  function MissingAdapter() {
    var _this7;

    (0, _classCallCheck2.default)(this, MissingAdapter);

    for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
      args[_key6] = arguments[_key6];
    }

    _this7 = _super7.call.apply(_super7, [this].concat(args));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this7), "name", "MissingAdapterError");
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this7), "code", "EMAIL_REQUIRES_ADAPTER_ERROR");
    return _this7;
  }

  return (0, _createClass2.default)(MissingAdapter);
}(UnknownError);

exports.MissingAdapter = MissingAdapter;

var MissingAdapterMethods = function (_UnknownError7) {
  (0, _inherits2.default)(MissingAdapterMethods, _UnknownError7);

  var _super8 = _createSuper(MissingAdapterMethods);

  function MissingAdapterMethods() {
    var _this8;

    (0, _classCallCheck2.default)(this, MissingAdapterMethods);

    for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
      args[_key7] = arguments[_key7];
    }

    _this8 = _super8.call.apply(_super8, [this].concat(args));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this8), "name", "MissingAdapterMethodsError");
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this8), "code", "MISSING_ADAPTER_METHODS_ERROR");
    return _this8;
  }

  return (0, _createClass2.default)(MissingAdapterMethods);
}(UnknownError);

exports.MissingAdapterMethods = MissingAdapterMethods;

var UnsupportedStrategy = function (_UnknownError8) {
  (0, _inherits2.default)(UnsupportedStrategy, _UnknownError8);

  var _super9 = _createSuper(UnsupportedStrategy);

  function UnsupportedStrategy() {
    var _this9;

    (0, _classCallCheck2.default)(this, UnsupportedStrategy);

    for (var _len8 = arguments.length, args = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
      args[_key8] = arguments[_key8];
    }

    _this9 = _super9.call.apply(_super9, [this].concat(args));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this9), "name", "UnsupportedStrategyError");
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this9), "code", "CALLBACK_CREDENTIALS_JWT_ERROR");
    return _this9;
  }

  return (0, _createClass2.default)(UnsupportedStrategy);
}(UnknownError);

exports.UnsupportedStrategy = UnsupportedStrategy;

var InvalidCallbackUrl = function (_UnknownError9) {
  (0, _inherits2.default)(InvalidCallbackUrl, _UnknownError9);

  var _super10 = _createSuper(InvalidCallbackUrl);

  function InvalidCallbackUrl() {
    var _this10;

    (0, _classCallCheck2.default)(this, InvalidCallbackUrl);

    for (var _len9 = arguments.length, args = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
      args[_key9] = arguments[_key9];
    }

    _this10 = _super10.call.apply(_super10, [this].concat(args));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this10), "name", "InvalidCallbackUrl");
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this10), "code", "INVALID_CALLBACK_URL_ERROR");
    return _this10;
  }

  return (0, _createClass2.default)(InvalidCallbackUrl);
}(UnknownError);

exports.InvalidCallbackUrl = InvalidCallbackUrl;

function upperSnake(s) {
  return s.replace(/([A-Z])/g, "_$1").toUpperCase();
}

function capitalize(s) {
  return "".concat(s[0].toUpperCase()).concat(s.slice(1));
}

function eventsErrorHandler(methods, logger) {
  return Object.keys(methods).reduce(function (acc, name) {
    acc[name] = (0, _asyncToGenerator2.default)(_regenerator.default.mark(function _callee() {
      var method,
          _args = arguments;
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              method = methods[name];
              _context.next = 4;
              return method.apply(void 0, _args);

            case 4:
              return _context.abrupt("return", _context.sent);

            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              logger.error("".concat(upperSnake(name), "_EVENT_ERROR"), _context.t0);

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 7]]);
    }));
    return acc;
  }, {});
}

function adapterErrorHandler(adapter, logger) {
  if (!adapter) return;
  return Object.keys(adapter).reduce(function (acc, name) {
    acc[name] = (0, _asyncToGenerator2.default)(_regenerator.default.mark(function _callee2() {
      var _len10,
          args,
          _key10,
          method,
          e,
          _args2 = arguments;

      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;

              for (_len10 = _args2.length, args = new Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
                args[_key10] = _args2[_key10];
              }

              logger.debug("adapter_".concat(name), {
                args: args
              });
              method = adapter[name];
              _context2.next = 6;
              return method.apply(void 0, args);

            case 6:
              return _context2.abrupt("return", _context2.sent);

            case 9:
              _context2.prev = 9;
              _context2.t0 = _context2["catch"](0);
              logger.error("adapter_error_".concat(name), _context2.t0);
              e = new UnknownError(_context2.t0);
              e.name = "".concat(capitalize(name), "Error");
              throw e;

            case 15:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 9]]);
    }));
    return acc;
  }, {});
}

/***/ }),

/***/ 3299:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(4836);

var _typeof = __webpack_require__(8698);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _exportNames = {
  SessionContext: true,
  useSession: true,
  getSession: true,
  getCsrfToken: true,
  getProviders: true,
  signIn: true,
  signOut: true,
  SessionProvider: true
};
exports.SessionContext = void 0;
exports.SessionProvider = SessionProvider;
exports.getCsrfToken = getCsrfToken;
exports.getProviders = getProviders;
exports.getSession = getSession;
exports.signIn = signIn;
exports.signOut = signOut;
exports.useSession = useSession;

var _regenerator = _interopRequireDefault(__webpack_require__(4687));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(8416));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(7156));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(7424));

var React = _interopRequireWildcard(__webpack_require__(6689));

var _logger2 = _interopRequireWildcard(__webpack_require__(6553));

var _parseUrl = _interopRequireDefault(__webpack_require__(762));

var _utils = __webpack_require__(9548);

var _jsxRuntime = __webpack_require__(5893);

var _types = __webpack_require__(527);

Object.keys(_types).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _types[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _types[key];
    }
  });
});

var _process$env$NEXTAUTH, _ref, _process$env$NEXTAUTH2, _process$env$NEXTAUTH3, _React$createContext;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var __NEXTAUTH = {
  baseUrl: (0, _parseUrl.default)((_process$env$NEXTAUTH = process.env.NEXTAUTH_URL) !== null && _process$env$NEXTAUTH !== void 0 ? _process$env$NEXTAUTH : process.env.VERCEL_URL).origin,
  basePath: (0, _parseUrl.default)(process.env.NEXTAUTH_URL).path,
  baseUrlServer: (0, _parseUrl.default)((_ref = (_process$env$NEXTAUTH2 = process.env.NEXTAUTH_URL_INTERNAL) !== null && _process$env$NEXTAUTH2 !== void 0 ? _process$env$NEXTAUTH2 : process.env.NEXTAUTH_URL) !== null && _ref !== void 0 ? _ref : process.env.VERCEL_URL).origin,
  basePathServer: (0, _parseUrl.default)((_process$env$NEXTAUTH3 = process.env.NEXTAUTH_URL_INTERNAL) !== null && _process$env$NEXTAUTH3 !== void 0 ? _process$env$NEXTAUTH3 : process.env.NEXTAUTH_URL).path,
  _lastSync: 0,
  _session: undefined,
  _getSession: function _getSession() {}
};
var broadcast = (0, _utils.BroadcastChannel)();
var logger = (0, _logger2.proxyLogger)(_logger2.default, __NEXTAUTH.basePath);

function useOnline() {
  var _React$useState = React.useState(typeof navigator !== "undefined" ? navigator.onLine : false),
      _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
      isOnline = _React$useState2[0],
      setIsOnline = _React$useState2[1];

  var setOnline = function setOnline() {
    return setIsOnline(true);
  };

  var setOffline = function setOffline() {
    return setIsOnline(false);
  };

  React.useEffect(function () {
    window.addEventListener("online", setOnline);
    window.addEventListener("offline", setOffline);
    return function () {
      window.removeEventListener("online", setOnline);
      window.removeEventListener("offline", setOffline);
    };
  }, []);
  return isOnline;
}

var SessionContext = (_React$createContext = React.createContext) === null || _React$createContext === void 0 ? void 0 : _React$createContext.call(React, undefined);
exports.SessionContext = SessionContext;

function useSession(options) {
  if (!SessionContext) {
    throw new Error("React Context is unavailable in Server Components");
  }

  var value = React.useContext(SessionContext);

  if (!value && "production" !== "production") {}

  var _ref2 = options !== null && options !== void 0 ? options : {},
      required = _ref2.required,
      onUnauthenticated = _ref2.onUnauthenticated;

  var requiredAndNotLoading = required && value.status === "unauthenticated";
  React.useEffect(function () {
    if (requiredAndNotLoading) {
      var url = "/api/auth/signin?".concat(new URLSearchParams({
        error: "SessionRequired",
        callbackUrl: window.location.href
      }));
      if (onUnauthenticated) onUnauthenticated();else window.location.href = url;
    }
  }, [requiredAndNotLoading, onUnauthenticated]);

  if (requiredAndNotLoading) {
    return {
      data: value.data,
      update: value.update,
      status: "loading"
    };
  }

  return value;
}

function getSession(_x) {
  return _getSession2.apply(this, arguments);
}

function _getSession2() {
  _getSession2 = (0, _asyncToGenerator2.default)(_regenerator.default.mark(function _callee3(params) {
    var _params$broadcast;

    var session;
    return _regenerator.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return (0, _utils.fetchData)("session", __NEXTAUTH, logger, params);

          case 2:
            session = _context3.sent;

            if ((_params$broadcast = params === null || params === void 0 ? void 0 : params.broadcast) !== null && _params$broadcast !== void 0 ? _params$broadcast : true) {
              broadcast.post({
                event: "session",
                data: {
                  trigger: "getSession"
                }
              });
            }

            return _context3.abrupt("return", session);

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _getSession2.apply(this, arguments);
}

function getCsrfToken(_x2) {
  return _getCsrfToken.apply(this, arguments);
}

function _getCsrfToken() {
  _getCsrfToken = (0, _asyncToGenerator2.default)(_regenerator.default.mark(function _callee4(params) {
    var response;
    return _regenerator.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return (0, _utils.fetchData)("csrf", __NEXTAUTH, logger, params);

          case 2:
            response = _context4.sent;
            return _context4.abrupt("return", response === null || response === void 0 ? void 0 : response.csrfToken);

          case 4:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _getCsrfToken.apply(this, arguments);
}

function getProviders() {
  return _getProviders.apply(this, arguments);
}

function _getProviders() {
  _getProviders = (0, _asyncToGenerator2.default)(_regenerator.default.mark(function _callee5() {
    return _regenerator.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return (0, _utils.fetchData)("providers", __NEXTAUTH, logger);

          case 2:
            return _context5.abrupt("return", _context5.sent);

          case 3:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _getProviders.apply(this, arguments);
}

function signIn(_x3, _x4, _x5) {
  return _signIn.apply(this, arguments);
}

function _signIn() {
  _signIn = (0, _asyncToGenerator2.default)(_regenerator.default.mark(function _callee6(provider, options, authorizationParams) {
    var _ref5, _ref5$callbackUrl, callbackUrl, _ref5$redirect, redirect, baseUrl, providers, isCredentials, isEmail, isSupportingReturn, signInUrl, _signInUrl, res, data, _data$url, url, error;

    return _regenerator.default.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _ref5 = options !== null && options !== void 0 ? options : {}, _ref5$callbackUrl = _ref5.callbackUrl, callbackUrl = _ref5$callbackUrl === void 0 ? window.location.href : _ref5$callbackUrl, _ref5$redirect = _ref5.redirect, redirect = _ref5$redirect === void 0 ? true : _ref5$redirect;
            baseUrl = (0, _utils.apiBaseUrl)(__NEXTAUTH);
            _context6.next = 4;
            return getProviders();

          case 4:
            providers = _context6.sent;

            if (providers) {
              _context6.next = 8;
              break;
            }

            window.location.href = "".concat(baseUrl, "/error");
            return _context6.abrupt("return");

          case 8:
            if (!(!provider || !(provider in providers))) {
              _context6.next = 11;
              break;
            }

            window.location.href = "".concat(baseUrl, "/signin?").concat(new URLSearchParams({
              callbackUrl: callbackUrl
            }));
            return _context6.abrupt("return");

          case 11:
            isCredentials = providers[provider].type === "credentials";
            isEmail = providers[provider].type === "email";
            isSupportingReturn = isCredentials || isEmail;
            signInUrl = "".concat(baseUrl, "/").concat(isCredentials ? "callback" : "signin", "/").concat(provider);
            _signInUrl = "".concat(signInUrl, "?").concat(new URLSearchParams(authorizationParams));
            _context6.t0 = fetch;
            _context6.t1 = _signInUrl;
            _context6.t2 = {
              "Content-Type": "application/x-www-form-urlencoded"
            };
            _context6.t3 = URLSearchParams;
            _context6.t4 = _objectSpread;
            _context6.t5 = _objectSpread({}, options);
            _context6.t6 = {};
            _context6.next = 25;
            return getCsrfToken();

          case 25:
            _context6.t7 = _context6.sent;
            _context6.t8 = callbackUrl;
            _context6.t9 = {
              csrfToken: _context6.t7,
              callbackUrl: _context6.t8,
              json: true
            };
            _context6.t10 = (0, _context6.t4)(_context6.t5, _context6.t6, _context6.t9);
            _context6.t11 = new _context6.t3(_context6.t10);
            _context6.t12 = {
              method: "post",
              headers: _context6.t2,
              body: _context6.t11
            };
            _context6.next = 33;
            return (0, _context6.t0)(_context6.t1, _context6.t12);

          case 33:
            res = _context6.sent;
            _context6.next = 36;
            return res.json();

          case 36:
            data = _context6.sent;

            if (!(redirect || !isSupportingReturn)) {
              _context6.next = 42;
              break;
            }

            url = (_data$url = data.url) !== null && _data$url !== void 0 ? _data$url : callbackUrl;
            window.location.href = url;
            if (url.includes("#")) window.location.reload();
            return _context6.abrupt("return");

          case 42:
            error = new URL(data.url).searchParams.get("error");

            if (!res.ok) {
              _context6.next = 46;
              break;
            }

            _context6.next = 46;
            return __NEXTAUTH._getSession({
              event: "storage"
            });

          case 46:
            return _context6.abrupt("return", {
              error: error,
              status: res.status,
              ok: res.ok,
              url: error ? null : data.url
            });

          case 47:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));
  return _signIn.apply(this, arguments);
}

function signOut(_x6) {
  return _signOut.apply(this, arguments);
}

function _signOut() {
  _signOut = (0, _asyncToGenerator2.default)(_regenerator.default.mark(function _callee7(options) {
    var _options$redirect;

    var _ref6, _ref6$callbackUrl, callbackUrl, baseUrl, fetchOptions, res, data, _data$url2, url;

    return _regenerator.default.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _ref6 = options !== null && options !== void 0 ? options : {}, _ref6$callbackUrl = _ref6.callbackUrl, callbackUrl = _ref6$callbackUrl === void 0 ? window.location.href : _ref6$callbackUrl;
            baseUrl = (0, _utils.apiBaseUrl)(__NEXTAUTH);
            _context7.t0 = {
              "Content-Type": "application/x-www-form-urlencoded"
            };
            _context7.t1 = URLSearchParams;
            _context7.next = 6;
            return getCsrfToken();

          case 6:
            _context7.t2 = _context7.sent;
            _context7.t3 = callbackUrl;
            _context7.t4 = {
              csrfToken: _context7.t2,
              callbackUrl: _context7.t3,
              json: true
            };
            _context7.t5 = new _context7.t1(_context7.t4);
            fetchOptions = {
              method: "post",
              headers: _context7.t0,
              body: _context7.t5
            };
            _context7.next = 13;
            return fetch("".concat(baseUrl, "/signout"), fetchOptions);

          case 13:
            res = _context7.sent;
            _context7.next = 16;
            return res.json();

          case 16:
            data = _context7.sent;
            broadcast.post({
              event: "session",
              data: {
                trigger: "signout"
              }
            });

            if (!((_options$redirect = options === null || options === void 0 ? void 0 : options.redirect) !== null && _options$redirect !== void 0 ? _options$redirect : true)) {
              _context7.next = 23;
              break;
            }

            url = (_data$url2 = data.url) !== null && _data$url2 !== void 0 ? _data$url2 : callbackUrl;
            window.location.href = url;
            if (url.includes("#")) window.location.reload();
            return _context7.abrupt("return");

          case 23:
            _context7.next = 25;
            return __NEXTAUTH._getSession({
              event: "storage"
            });

          case 25:
            return _context7.abrupt("return", data);

          case 26:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));
  return _signOut.apply(this, arguments);
}

function SessionProvider(props) {
  if (!SessionContext) {
    throw new Error("React Context is unavailable in Server Components");
  }

  var children = props.children,
      basePath = props.basePath,
      refetchInterval = props.refetchInterval,
      refetchWhenOffline = props.refetchWhenOffline;
  if (basePath) __NEXTAUTH.basePath = basePath;
  var hasInitialSession = props.session !== undefined;
  __NEXTAUTH._lastSync = hasInitialSession ? (0, _utils.now)() : 0;

  var _React$useState3 = React.useState(function () {
    if (hasInitialSession) __NEXTAUTH._session = props.session;
    return props.session;
  }),
      _React$useState4 = (0, _slicedToArray2.default)(_React$useState3, 2),
      session = _React$useState4[0],
      setSession = _React$useState4[1];

  var _React$useState5 = React.useState(!hasInitialSession),
      _React$useState6 = (0, _slicedToArray2.default)(_React$useState5, 2),
      loading = _React$useState6[0],
      setLoading = _React$useState6[1];

  React.useEffect(function () {
    __NEXTAUTH._getSession = (0, _asyncToGenerator2.default)(_regenerator.default.mark(function _callee() {
      var _ref4,
          event,
          storageEvent,
          _args = arguments;

      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _ref4 = _args.length > 0 && _args[0] !== undefined ? _args[0] : {}, event = _ref4.event;
              _context.prev = 1;
              storageEvent = event === "storage";

              if (!(storageEvent || __NEXTAUTH._session === undefined)) {
                _context.next = 10;
                break;
              }

              __NEXTAUTH._lastSync = (0, _utils.now)();
              _context.next = 7;
              return getSession({
                broadcast: !storageEvent
              });

            case 7:
              __NEXTAUTH._session = _context.sent;
              setSession(__NEXTAUTH._session);
              return _context.abrupt("return");

            case 10:
              if (!(!event || __NEXTAUTH._session === null || (0, _utils.now)() < __NEXTAUTH._lastSync)) {
                _context.next = 12;
                break;
              }

              return _context.abrupt("return");

            case 12:
              __NEXTAUTH._lastSync = (0, _utils.now)();
              _context.next = 15;
              return getSession();

            case 15:
              __NEXTAUTH._session = _context.sent;
              setSession(__NEXTAUTH._session);
              _context.next = 22;
              break;

            case 19:
              _context.prev = 19;
              _context.t0 = _context["catch"](1);
              logger.error("CLIENT_SESSION_ERROR", _context.t0);

            case 22:
              _context.prev = 22;
              setLoading(false);
              return _context.finish(22);

            case 25:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 19, 22, 25]]);
    }));

    __NEXTAUTH._getSession();

    return function () {
      __NEXTAUTH._lastSync = 0;
      __NEXTAUTH._session = undefined;

      __NEXTAUTH._getSession = function () {};
    };
  }, []);
  React.useEffect(function () {
    var unsubscribe = broadcast.receive(function () {
      return __NEXTAUTH._getSession({
        event: "storage"
      });
    });
    return function () {
      return unsubscribe();
    };
  }, []);
  React.useEffect(function () {
    var _props$refetchOnWindo = props.refetchOnWindowFocus,
        refetchOnWindowFocus = _props$refetchOnWindo === void 0 ? true : _props$refetchOnWindo;

    var visibilityHandler = function visibilityHandler() {
      if (refetchOnWindowFocus && document.visibilityState === "visible") __NEXTAUTH._getSession({
        event: "visibilitychange"
      });
    };

    document.addEventListener("visibilitychange", visibilityHandler, false);
    return function () {
      return document.removeEventListener("visibilitychange", visibilityHandler, false);
    };
  }, [props.refetchOnWindowFocus]);
  var isOnline = useOnline();
  var shouldRefetch = refetchWhenOffline !== false || isOnline;
  React.useEffect(function () {
    if (refetchInterval && shouldRefetch) {
      var refetchIntervalTimer = setInterval(function () {
        if (__NEXTAUTH._session) {
          __NEXTAUTH._getSession({
            event: "poll"
          });
        }
      }, refetchInterval * 1000);
      return function () {
        return clearInterval(refetchIntervalTimer);
      };
    }
  }, [refetchInterval, shouldRefetch]);
  var value = React.useMemo(function () {
    return {
      data: session,
      status: loading ? "loading" : session ? "authenticated" : "unauthenticated",
      update: function update(data) {
        return (0, _asyncToGenerator2.default)(_regenerator.default.mark(function _callee2() {
          var newSession;
          return _regenerator.default.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  if (!(loading || !session)) {
                    _context2.next = 2;
                    break;
                  }

                  return _context2.abrupt("return");

                case 2:
                  setLoading(true);
                  _context2.t0 = _utils.fetchData;
                  _context2.t1 = __NEXTAUTH;
                  _context2.t2 = logger;
                  _context2.next = 8;
                  return getCsrfToken();

                case 8:
                  _context2.t3 = _context2.sent;
                  _context2.t4 = data;
                  _context2.t5 = {
                    csrfToken: _context2.t3,
                    data: _context2.t4
                  };
                  _context2.t6 = {
                    body: _context2.t5
                  };
                  _context2.t7 = {
                    req: _context2.t6
                  };
                  _context2.next = 15;
                  return (0, _context2.t0)("session", _context2.t1, _context2.t2, _context2.t7);

                case 15:
                  newSession = _context2.sent;
                  setLoading(false);

                  if (newSession) {
                    setSession(newSession);
                    broadcast.post({
                      event: "session",
                      data: {
                        trigger: "getSession"
                      }
                    });
                  }

                  return _context2.abrupt("return", newSession);

                case 19:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }))();
      }
    };
  }, [session, loading]);
  return (0, _jsxRuntime.jsx)(SessionContext.Provider, {
    value: value,
    children: children
  });
}

/***/ }),

/***/ 527:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

/***/ }),

/***/ 6553:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(4836);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
exports.proxyLogger = proxyLogger;
exports.setLogger = setLogger;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(8416));

var _errors = __webpack_require__(6925);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function formatError(o) {
  if (o instanceof Error && !(o instanceof _errors.UnknownError)) {
    return {
      message: o.message,
      stack: o.stack,
      name: o.name
    };
  }

  if (hasErrorProperty(o)) {
    var _o$message;

    o.error = formatError(o.error);
    o.message = (_o$message = o.message) !== null && _o$message !== void 0 ? _o$message : o.error.message;
  }

  return o;
}

function hasErrorProperty(x) {
  return !!(x !== null && x !== void 0 && x.error);
}

var _logger = {
  error: function error(code, metadata) {
    metadata = formatError(metadata);
    console.error("[next-auth][error][".concat(code, "]"), "\nhttps://next-auth.js.org/errors#".concat(code.toLowerCase()), metadata.message, metadata);
  },
  warn: function warn(code) {
    console.warn("[next-auth][warn][".concat(code, "]"), "\nhttps://next-auth.js.org/warnings#".concat(code.toLowerCase()));
  },
  debug: function debug(code, metadata) {
    console.log("[next-auth][debug][".concat(code, "]"), metadata);
  }
};

function setLogger() {
  var newLogger = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var debug = arguments.length > 1 ? arguments[1] : undefined;
  if (!debug) _logger.debug = function () {};
  if (newLogger.error) _logger.error = newLogger.error;
  if (newLogger.warn) _logger.warn = newLogger.warn;
  if (newLogger.debug) _logger.debug = newLogger.debug;
}

var _default = _logger;
exports["default"] = _default;

function proxyLogger() {
  var logger = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _logger;
  var basePath = arguments.length > 1 ? arguments[1] : undefined;

  try {
    if (typeof window === "undefined") {
      return logger;
    }

    var clientLogger = {};

    var _loop = function _loop(level) {
      clientLogger[level] = function (code, metadata) {
        _logger[level](code, metadata);

        if (level === "error") {
          metadata = formatError(metadata);
        }

        ;
        metadata.client = true;
        var url = "".concat(basePath, "/_log");
        var body = new URLSearchParams(_objectSpread({
          level: level,
          code: code
        }, metadata));

        if (navigator.sendBeacon) {
          return navigator.sendBeacon(url, body);
        }

        return fetch(url, {
          method: "POST",
          body: body,
          keepalive: true
        });
      };
    };

    for (var level in logger) {
      _loop(level);
    }

    return clientLogger;
  } catch (_unused) {
    return _logger;
  }
}

/***/ }),

/***/ 762:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = parseUrl;

function parseUrl(url) {
  var _url2;

  const defaultUrl = new URL("http://localhost:3000/api/auth");

  if (url && !url.startsWith("http")) {
    url = `https://${url}`;
  }

  const _url = new URL((_url2 = url) !== null && _url2 !== void 0 ? _url2 : defaultUrl);

  const path = (_url.pathname === "/" ? defaultUrl.pathname : _url.pathname).replace(/\/$/, "");
  const base = `${_url.origin}${path}`;
  return {
    origin: _url.origin,
    host: _url.host,
    path,
    base,
    toString: () => base
  };
}

/***/ }),

/***/ 7182:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
var __webpack_unused_export__;
/**
 * Hoists a name from a module or promised module.
 *
 * @param module the module to hoist the name from
 * @param name the name to hoist
 * @returns the value on the module (or promised module)
 */ 
__webpack_unused_export__ = ({
    value: true
});
Object.defineProperty(exports, "l", ({
    enumerable: true,
    get: function() {
        return hoist;
    }
}));
function hoist(module, name) {
    // If the name is available in the module, return it.
    if (name in module) {
        return module[name];
    }
    // If a property called `then` exists, assume it's a promise and
    // return a promise that resolves to the name.
    if ("then" in module && typeof module.then === "function") {
        return module.then((mod)=>hoist(mod, name));
    }
    // If we're trying to hoise the default export, and the module is a function,
    // return the module itself.
    if (typeof module === "function" && name === "default") {
        return module;
    }
    // Otherwise, return undefined.
    return undefined;
}

//# sourceMappingURL=helpers.js.map

/***/ }),

/***/ 2940:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    Head: function() {
        return Head;
    },
    NextScript: function() {
        return NextScript;
    },
    Html: function() {
        return Html;
    },
    Main: function() {
        return Main;
    },
    /**
 * `Document` component handles the initial `document` markup and renders only on the server side.
 * Commonly used for implementing server side rendering for `css-in-js` libraries.
 */ default: function() {
        return Document;
    }
});
const _react = /*#__PURE__*/ _interop_require_default(__webpack_require__(6689));
const _constants = __webpack_require__(6724);
const _getpagefiles = __webpack_require__(4140);
const _htmlescape = __webpack_require__(9716);
const _iserror = /*#__PURE__*/ _interop_require_default(__webpack_require__(676));
const _htmlcontext = __webpack_require__(8743);
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
/** Set of pages that have triggered a large data warning on production mode. */ const largePageDataWarnings = new Set();
function getDocumentFiles(buildManifest, pathname, inAmpMode) {
    const sharedFiles = (0, _getpagefiles.getPageFiles)(buildManifest, "/_app");
    const pageFiles =  true && inAmpMode ? [] : (0, _getpagefiles.getPageFiles)(buildManifest, pathname);
    return {
        sharedFiles,
        pageFiles,
        allFiles: [
            ...new Set([
                ...sharedFiles,
                ...pageFiles
            ])
        ]
    };
}
function getPolyfillScripts(context, props) {
    // polyfills.js has to be rendered as nomodule without async
    // It also has to be the first script to load
    const { assetPrefix, buildManifest, assetQueryString, disableOptimizedLoading, crossOrigin } = context;
    return buildManifest.polyfillFiles.filter((polyfill)=>polyfill.endsWith(".js") && !polyfill.endsWith(".module.js")).map((polyfill)=>/*#__PURE__*/ _react.default.createElement("script", {
            key: polyfill,
            defer: !disableOptimizedLoading,
            nonce: props.nonce,
            crossOrigin: props.crossOrigin || crossOrigin,
            noModule: true,
            src: `${assetPrefix}/_next/${polyfill}${assetQueryString}`
        }));
}
function hasComponentProps(child) {
    return !!child && !!child.props;
}
function AmpStyles({ styles }) {
    if (!styles) return null;
    // try to parse styles from fragment for backwards compat
    const curStyles = Array.isArray(styles) ? styles : [];
    if (styles.props && // @ts-ignore Property 'props' does not exist on type ReactElement
    Array.isArray(styles.props.children)) {
        const hasStyles = (el)=>{
            var _el_props, _el_props_dangerouslySetInnerHTML;
            return el == null ? void 0 : (_el_props = el.props) == null ? void 0 : (_el_props_dangerouslySetInnerHTML = _el_props.dangerouslySetInnerHTML) == null ? void 0 : _el_props_dangerouslySetInnerHTML.__html;
        };
        // @ts-ignore Property 'props' does not exist on type ReactElement
        styles.props.children.forEach((child)=>{
            if (Array.isArray(child)) {
                child.forEach((el)=>hasStyles(el) && curStyles.push(el));
            } else if (hasStyles(child)) {
                curStyles.push(child);
            }
        });
    }
    /* Add custom styles before AMP styles to prevent accidental overrides */ return /*#__PURE__*/ _react.default.createElement("style", {
        "amp-custom": "",
        dangerouslySetInnerHTML: {
            __html: curStyles.map((style)=>style.props.dangerouslySetInnerHTML.__html).join("").replace(/\/\*# sourceMappingURL=.*\*\//g, "").replace(/\/\*@ sourceURL=.*?\*\//g, "")
        }
    });
}
function getDynamicChunks(context, props, files) {
    const { dynamicImports, assetPrefix, isDevelopment, assetQueryString, disableOptimizedLoading, crossOrigin } = context;
    return dynamicImports.map((file)=>{
        if (!file.endsWith(".js") || files.allFiles.includes(file)) return null;
        return /*#__PURE__*/ _react.default.createElement("script", {
            async: !isDevelopment && disableOptimizedLoading,
            defer: !disableOptimizedLoading,
            key: file,
            src: `${assetPrefix}/_next/${encodeURI(file)}${assetQueryString}`,
            nonce: props.nonce,
            crossOrigin: props.crossOrigin || crossOrigin
        });
    });
}
function getScripts(context, props, files) {
    var _buildManifest_lowPriorityFiles;
    const { assetPrefix, buildManifest, isDevelopment, assetQueryString, disableOptimizedLoading, crossOrigin } = context;
    const normalScripts = files.allFiles.filter((file)=>file.endsWith(".js"));
    const lowPriorityScripts = (_buildManifest_lowPriorityFiles = buildManifest.lowPriorityFiles) == null ? void 0 : _buildManifest_lowPriorityFiles.filter((file)=>file.endsWith(".js"));
    return [
        ...normalScripts,
        ...lowPriorityScripts
    ].map((file)=>{
        return /*#__PURE__*/ _react.default.createElement("script", {
            key: file,
            src: `${assetPrefix}/_next/${encodeURI(file)}${assetQueryString}`,
            nonce: props.nonce,
            async: !isDevelopment && disableOptimizedLoading,
            defer: !disableOptimizedLoading,
            crossOrigin: props.crossOrigin || crossOrigin
        });
    });
}
function getPreNextWorkerScripts(context, props) {
    const { assetPrefix, scriptLoader, crossOrigin, nextScriptWorkers } = context;
    // disable `nextScriptWorkers` in edge runtime
    if (!nextScriptWorkers || "nodejs" === "edge") return null;
    try {
        let { partytownSnippet } = require("@builder.io/partytown/integration");
        const children = Array.isArray(props.children) ? props.children : [
            props.children
        ];
        // Check to see if the user has defined their own Partytown configuration
        const userDefinedConfig = children.find((child)=>{
            var _child_props, _child_props_dangerouslySetInnerHTML;
            return hasComponentProps(child) && (child == null ? void 0 : (_child_props = child.props) == null ? void 0 : (_child_props_dangerouslySetInnerHTML = _child_props.dangerouslySetInnerHTML) == null ? void 0 : _child_props_dangerouslySetInnerHTML.__html.length) && "data-partytown-config" in child.props;
        });
        return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, !userDefinedConfig && /*#__PURE__*/ _react.default.createElement("script", {
            "data-partytown-config": "",
            dangerouslySetInnerHTML: {
                __html: `
            partytown = {
              lib: "${assetPrefix}/_next/static/~partytown/"
            };
          `
            }
        }), /*#__PURE__*/ _react.default.createElement("script", {
            "data-partytown": "",
            dangerouslySetInnerHTML: {
                __html: partytownSnippet()
            }
        }), (scriptLoader.worker || []).map((file, index)=>{
            const { strategy, src, children: scriptChildren, dangerouslySetInnerHTML, ...scriptProps } = file;
            let srcProps = {};
            if (src) {
                // Use external src if provided
                srcProps.src = src;
            } else if (dangerouslySetInnerHTML && dangerouslySetInnerHTML.__html) {
                // Embed inline script if provided with dangerouslySetInnerHTML
                srcProps.dangerouslySetInnerHTML = {
                    __html: dangerouslySetInnerHTML.__html
                };
            } else if (scriptChildren) {
                // Embed inline script if provided with children
                srcProps.dangerouslySetInnerHTML = {
                    __html: typeof scriptChildren === "string" ? scriptChildren : Array.isArray(scriptChildren) ? scriptChildren.join("") : ""
                };
            } else {
                throw new Error("Invalid usage of next/script. Did you forget to include a src attribute or an inline script? https://nextjs.org/docs/messages/invalid-script");
            }
            return /*#__PURE__*/ _react.default.createElement("script", {
                ...srcProps,
                ...scriptProps,
                type: "text/partytown",
                key: src || index,
                nonce: props.nonce,
                "data-nscript": "worker",
                crossOrigin: props.crossOrigin || crossOrigin
            });
        }));
    } catch (err) {
        if ((0, _iserror.default)(err) && err.code !== "MODULE_NOT_FOUND") {
            console.warn(`Warning: ${err.message}`);
        }
        return null;
    }
}
function getPreNextScripts(context, props) {
    const { scriptLoader, disableOptimizedLoading, crossOrigin } = context;
    const webWorkerScripts = getPreNextWorkerScripts(context, props);
    const beforeInteractiveScripts = (scriptLoader.beforeInteractive || []).filter((script)=>script.src).map((file, index)=>{
        const { strategy, ...scriptProps } = file;
        return /*#__PURE__*/ _react.default.createElement("script", {
            ...scriptProps,
            key: scriptProps.src || index,
            defer: scriptProps.defer ?? !disableOptimizedLoading,
            nonce: props.nonce,
            "data-nscript": "beforeInteractive",
            crossOrigin: props.crossOrigin || crossOrigin
        });
    });
    return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, webWorkerScripts, beforeInteractiveScripts);
}
function getHeadHTMLProps(props) {
    const { crossOrigin, nonce, ...restProps } = props;
    // This assignment is necessary for additional type checking to avoid unsupported attributes in <head>
    const headProps = restProps;
    return headProps;
}
function getAmpPath(ampPath, asPath) {
    return ampPath || `${asPath}${asPath.includes("?") ? "&" : "?"}amp=1`;
}
function getNextFontLinkTags(nextFontManifest, dangerousAsPath, assetPrefix = "") {
    if (!nextFontManifest) {
        return {
            preconnect: null,
            preload: null
        };
    }
    const appFontsEntry = nextFontManifest.pages["/_app"];
    const pageFontsEntry = nextFontManifest.pages[dangerousAsPath];
    const preloadedFontFiles = [
        ...appFontsEntry ?? [],
        ...pageFontsEntry ?? []
    ];
    // If no font files should preload but there's an entry for the path, add a preconnect tag.
    const preconnectToSelf = !!(preloadedFontFiles.length === 0 && (appFontsEntry || pageFontsEntry));
    return {
        preconnect: preconnectToSelf ? /*#__PURE__*/ _react.default.createElement("link", {
            "data-next-font": nextFontManifest.pagesUsingSizeAdjust ? "size-adjust" : "",
            rel: "preconnect",
            href: "/",
            crossOrigin: "anonymous"
        }) : null,
        preload: preloadedFontFiles ? preloadedFontFiles.map((fontFile)=>{
            const ext = /\.(woff|woff2|eot|ttf|otf)$/.exec(fontFile)[1];
            return /*#__PURE__*/ _react.default.createElement("link", {
                key: fontFile,
                rel: "preload",
                href: `${assetPrefix}/_next/${encodeURI(fontFile)}`,
                as: "font",
                type: `font/${ext}`,
                crossOrigin: "anonymous",
                "data-next-font": fontFile.includes("-s") ? "size-adjust" : ""
            });
        }) : null
    };
}
class Head extends _react.default.Component {
    static #_ = (()=>{
        this.contextType = _htmlcontext.HtmlContext;
    })();
    getCssLinks(files) {
        const { assetPrefix, assetQueryString, dynamicImports, crossOrigin, optimizeCss, optimizeFonts } = this.context;
        const cssFiles = files.allFiles.filter((f)=>f.endsWith(".css"));
        const sharedFiles = new Set(files.sharedFiles);
        // Unmanaged files are CSS files that will be handled directly by the
        // webpack runtime (`mini-css-extract-plugin`).
        let unmangedFiles = new Set([]);
        let dynamicCssFiles = Array.from(new Set(dynamicImports.filter((file)=>file.endsWith(".css"))));
        if (dynamicCssFiles.length) {
            const existing = new Set(cssFiles);
            dynamicCssFiles = dynamicCssFiles.filter((f)=>!(existing.has(f) || sharedFiles.has(f)));
            unmangedFiles = new Set(dynamicCssFiles);
            cssFiles.push(...dynamicCssFiles);
        }
        let cssLinkElements = [];
        cssFiles.forEach((file)=>{
            const isSharedFile = sharedFiles.has(file);
            if (!optimizeCss) {
                cssLinkElements.push(/*#__PURE__*/ _react.default.createElement("link", {
                    key: `${file}-preload`,
                    nonce: this.props.nonce,
                    rel: "preload",
                    href: `${assetPrefix}/_next/${encodeURI(file)}${assetQueryString}`,
                    as: "style",
                    crossOrigin: this.props.crossOrigin || crossOrigin
                }));
            }
            const isUnmanagedFile = unmangedFiles.has(file);
            cssLinkElements.push(/*#__PURE__*/ _react.default.createElement("link", {
                key: file,
                nonce: this.props.nonce,
                rel: "stylesheet",
                href: `${assetPrefix}/_next/${encodeURI(file)}${assetQueryString}`,
                crossOrigin: this.props.crossOrigin || crossOrigin,
                "data-n-g": isUnmanagedFile ? undefined : isSharedFile ? "" : undefined,
                "data-n-p": isUnmanagedFile ? undefined : isSharedFile ? undefined : ""
            }));
        });
        if ( true && optimizeFonts) {
            cssLinkElements = this.makeStylesheetInert(cssLinkElements);
        }
        return cssLinkElements.length === 0 ? null : cssLinkElements;
    }
    getPreloadDynamicChunks() {
        const { dynamicImports, assetPrefix, assetQueryString, crossOrigin } = this.context;
        return dynamicImports.map((file)=>{
            if (!file.endsWith(".js")) {
                return null;
            }
            return /*#__PURE__*/ _react.default.createElement("link", {
                rel: "preload",
                key: file,
                href: `${assetPrefix}/_next/${encodeURI(file)}${assetQueryString}`,
                as: "script",
                nonce: this.props.nonce,
                crossOrigin: this.props.crossOrigin || crossOrigin
            });
        }) // Filter out nulled scripts
        .filter(Boolean);
    }
    getPreloadMainLinks(files) {
        const { assetPrefix, assetQueryString, scriptLoader, crossOrigin } = this.context;
        const preloadFiles = files.allFiles.filter((file)=>{
            return file.endsWith(".js");
        });
        return [
            ...(scriptLoader.beforeInteractive || []).map((file)=>/*#__PURE__*/ _react.default.createElement("link", {
                    key: file.src,
                    nonce: this.props.nonce,
                    rel: "preload",
                    href: file.src,
                    as: "script",
                    crossOrigin: this.props.crossOrigin || crossOrigin
                })),
            ...preloadFiles.map((file)=>/*#__PURE__*/ _react.default.createElement("link", {
                    key: file,
                    nonce: this.props.nonce,
                    rel: "preload",
                    href: `${assetPrefix}/_next/${encodeURI(file)}${assetQueryString}`,
                    as: "script",
                    crossOrigin: this.props.crossOrigin || crossOrigin
                }))
        ];
    }
    getBeforeInteractiveInlineScripts() {
        const { scriptLoader } = this.context;
        const { nonce, crossOrigin } = this.props;
        return (scriptLoader.beforeInteractive || []).filter((script)=>!script.src && (script.dangerouslySetInnerHTML || script.children)).map((file, index)=>{
            const { strategy, children, dangerouslySetInnerHTML, src, ...scriptProps } = file;
            let html = "";
            if (dangerouslySetInnerHTML && dangerouslySetInnerHTML.__html) {
                html = dangerouslySetInnerHTML.__html;
            } else if (children) {
                html = typeof children === "string" ? children : Array.isArray(children) ? children.join("") : "";
            }
            return /*#__PURE__*/ _react.default.createElement("script", {
                ...scriptProps,
                dangerouslySetInnerHTML: {
                    __html: html
                },
                key: scriptProps.id || index,
                nonce: nonce,
                "data-nscript": "beforeInteractive",
                crossOrigin: crossOrigin || undefined
            });
        });
    }
    getDynamicChunks(files) {
        return getDynamicChunks(this.context, this.props, files);
    }
    getPreNextScripts() {
        return getPreNextScripts(this.context, this.props);
    }
    getScripts(files) {
        return getScripts(this.context, this.props, files);
    }
    getPolyfillScripts() {
        return getPolyfillScripts(this.context, this.props);
    }
    makeStylesheetInert(node) {
        return _react.default.Children.map(node, (c)=>{
            var _c_props, _c_props1;
            if ((c == null ? void 0 : c.type) === "link" && (c == null ? void 0 : (_c_props = c.props) == null ? void 0 : _c_props.href) && _constants.OPTIMIZED_FONT_PROVIDERS.some(({ url })=>{
                var _c_props, _c_props_href;
                return c == null ? void 0 : (_c_props = c.props) == null ? void 0 : (_c_props_href = _c_props.href) == null ? void 0 : _c_props_href.startsWith(url);
            })) {
                const newProps = {
                    ...c.props || {},
                    "data-href": c.props.href,
                    href: undefined
                };
                return /*#__PURE__*/ _react.default.cloneElement(c, newProps);
            } else if (c == null ? void 0 : (_c_props1 = c.props) == null ? void 0 : _c_props1.children) {
                const newProps = {
                    ...c.props || {},
                    children: this.makeStylesheetInert(c.props.children)
                };
                return /*#__PURE__*/ _react.default.cloneElement(c, newProps);
            }
            return c;
        // @types/react bug. Returned value from .map will not be `null` if you pass in `[null]`
        }).filter(Boolean);
    }
    render() {
        const { styles, ampPath, inAmpMode, hybridAmp, canonicalBase, __NEXT_DATA__, dangerousAsPath, headTags, unstable_runtimeJS, unstable_JsPreload, disableOptimizedLoading, optimizeCss, optimizeFonts, assetPrefix, nextFontManifest } = this.context;
        const disableRuntimeJS = unstable_runtimeJS === false;
        const disableJsPreload = unstable_JsPreload === false || !disableOptimizedLoading;
        this.context.docComponentsRendered.Head = true;
        let { head } = this.context;
        let cssPreloads = [];
        let otherHeadElements = [];
        if (head) {
            head.forEach((c)=>{
                let metaTag;
                if (this.context.strictNextHead) {
                    metaTag = /*#__PURE__*/ _react.default.createElement("meta", {
                        name: "next-head",
                        content: "1"
                    });
                }
                if (c && c.type === "link" && c.props["rel"] === "preload" && c.props["as"] === "style") {
                    metaTag && cssPreloads.push(metaTag);
                    cssPreloads.push(c);
                } else {
                    if (c) {
                        if (metaTag && (c.type !== "meta" || !c.props["charSet"])) {
                            otherHeadElements.push(metaTag);
                        }
                        otherHeadElements.push(c);
                    }
                }
            });
            head = cssPreloads.concat(otherHeadElements);
        }
        let children = _react.default.Children.toArray(this.props.children).filter(Boolean);
        // show a warning if Head contains <title> (only in development)
        if (false) {}
        if ( true && optimizeFonts && !( true && inAmpMode)) {
            children = this.makeStylesheetInert(children);
        }
        let hasAmphtmlRel = false;
        let hasCanonicalRel = false;
        // show warning and remove conflicting amp head tags
        head = _react.default.Children.map(head || [], (child)=>{
            if (!child) return child;
            const { type, props } = child;
            if ( true && inAmpMode) {
                let badProp = "";
                if (type === "meta" && props.name === "viewport") {
                    badProp = 'name="viewport"';
                } else if (type === "link" && props.rel === "canonical") {
                    hasCanonicalRel = true;
                } else if (type === "script") {
                    // only block if
                    // 1. it has a src and isn't pointing to ampproject's CDN
                    // 2. it is using dangerouslySetInnerHTML without a type or
                    // a type of text/javascript
                    if (props.src && props.src.indexOf("ampproject") < -1 || props.dangerouslySetInnerHTML && (!props.type || props.type === "text/javascript")) {
                        badProp = "<script";
                        Object.keys(props).forEach((prop)=>{
                            badProp += ` ${prop}="${props[prop]}"`;
                        });
                        badProp += "/>";
                    }
                }
                if (badProp) {
                    console.warn(`Found conflicting amp tag "${child.type}" with conflicting prop ${badProp} in ${__NEXT_DATA__.page}. https://nextjs.org/docs/messages/conflicting-amp-tag`);
                    return null;
                }
            } else {
                // non-amp mode
                if (type === "link" && props.rel === "amphtml") {
                    hasAmphtmlRel = true;
                }
            }
            return child;
        // @types/react bug. Returned value from .map will not be `null` if you pass in `[null]`
        });
        const files = getDocumentFiles(this.context.buildManifest, this.context.__NEXT_DATA__.page,  true && inAmpMode);
        const nextFontLinkTags = getNextFontLinkTags(nextFontManifest, dangerousAsPath, assetPrefix);
        return /*#__PURE__*/ _react.default.createElement("head", getHeadHTMLProps(this.props), this.context.isDevelopment && /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/ _react.default.createElement("style", {
            "data-next-hide-fouc": true,
            "data-ampdevmode":  true && inAmpMode ? "true" : undefined,
            dangerouslySetInnerHTML: {
                __html: `body{display:none}`
            }
        }), /*#__PURE__*/ _react.default.createElement("noscript", {
            "data-next-hide-fouc": true,
            "data-ampdevmode":  true && inAmpMode ? "true" : undefined
        }, /*#__PURE__*/ _react.default.createElement("style", {
            dangerouslySetInnerHTML: {
                __html: `body{display:block}`
            }
        }))), head, this.context.strictNextHead ? null : /*#__PURE__*/ _react.default.createElement("meta", {
            name: "next-head-count",
            content: _react.default.Children.count(head || []).toString()
        }), children, optimizeFonts && /*#__PURE__*/ _react.default.createElement("meta", {
            name: "next-font-preconnect"
        }), nextFontLinkTags.preconnect, nextFontLinkTags.preload,  true && inAmpMode && /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/ _react.default.createElement("meta", {
            name: "viewport",
            content: "width=device-width,minimum-scale=1,initial-scale=1"
        }), !hasCanonicalRel && /*#__PURE__*/ _react.default.createElement("link", {
            rel: "canonical",
            href: canonicalBase + (__webpack_require__(6368).cleanAmpPath)(dangerousAsPath)
        }), /*#__PURE__*/ _react.default.createElement("link", {
            rel: "preload",
            as: "script",
            href: "https://cdn.ampproject.org/v0.js"
        }), /*#__PURE__*/ _react.default.createElement(AmpStyles, {
            styles: styles
        }), /*#__PURE__*/ _react.default.createElement("style", {
            "amp-boilerplate": "",
            dangerouslySetInnerHTML: {
                __html: `body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}`
            }
        }), /*#__PURE__*/ _react.default.createElement("noscript", null, /*#__PURE__*/ _react.default.createElement("style", {
            "amp-boilerplate": "",
            dangerouslySetInnerHTML: {
                __html: `body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}`
            }
        })), /*#__PURE__*/ _react.default.createElement("script", {
            async: true,
            src: "https://cdn.ampproject.org/v0.js"
        })), !( true && inAmpMode) && /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, !hasAmphtmlRel && hybridAmp && /*#__PURE__*/ _react.default.createElement("link", {
            rel: "amphtml",
            href: canonicalBase + getAmpPath(ampPath, dangerousAsPath)
        }), this.getBeforeInteractiveInlineScripts(), !optimizeCss && this.getCssLinks(files), !optimizeCss && /*#__PURE__*/ _react.default.createElement("noscript", {
            "data-n-css": this.props.nonce ?? ""
        }), !disableRuntimeJS && !disableJsPreload && this.getPreloadDynamicChunks(), !disableRuntimeJS && !disableJsPreload && this.getPreloadMainLinks(files), !disableOptimizedLoading && !disableRuntimeJS && this.getPolyfillScripts(), !disableOptimizedLoading && !disableRuntimeJS && this.getPreNextScripts(), !disableOptimizedLoading && !disableRuntimeJS && this.getDynamicChunks(files), !disableOptimizedLoading && !disableRuntimeJS && this.getScripts(files), optimizeCss && this.getCssLinks(files), optimizeCss && /*#__PURE__*/ _react.default.createElement("noscript", {
            "data-n-css": this.props.nonce ?? ""
        }), this.context.isDevelopment && // this element is used to mount development styles so the
        // ordering matches production
        // (by default, style-loader injects at the bottom of <head />)
        /*#__PURE__*/ _react.default.createElement("noscript", {
            id: "__next_css__DO_NOT_USE__"
        }), styles || null), /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, {}, ...headTags || []));
    }
}
function handleDocumentScriptLoaderItems(scriptLoader, __NEXT_DATA__, props) {
    var _children_find, _children_find_props, _children_find1, _children_find_props1;
    if (!props.children) return;
    const scriptLoaderItems = [];
    const children = Array.isArray(props.children) ? props.children : [
        props.children
    ];
    const headChildren = (_children_find = children.find((child)=>child.type === Head)) == null ? void 0 : (_children_find_props = _children_find.props) == null ? void 0 : _children_find_props.children;
    const bodyChildren = (_children_find1 = children.find((child)=>child.type === "body")) == null ? void 0 : (_children_find_props1 = _children_find1.props) == null ? void 0 : _children_find_props1.children;
    // Scripts with beforeInteractive can be placed inside Head or <body> so children of both needs to be traversed
    const combinedChildren = [
        ...Array.isArray(headChildren) ? headChildren : [
            headChildren
        ],
        ...Array.isArray(bodyChildren) ? bodyChildren : [
            bodyChildren
        ]
    ];
    _react.default.Children.forEach(combinedChildren, (child)=>{
        var _child_type;
        if (!child) return;
        // When using the `next/script` component, register it in script loader.
        if ((_child_type = child.type) == null ? void 0 : _child_type.__nextScript) {
            if (child.props.strategy === "beforeInteractive") {
                scriptLoader.beforeInteractive = (scriptLoader.beforeInteractive || []).concat([
                    {
                        ...child.props
                    }
                ]);
                return;
            } else if ([
                "lazyOnload",
                "afterInteractive",
                "worker"
            ].includes(child.props.strategy)) {
                scriptLoaderItems.push(child.props);
                return;
            }
        }
    });
    __NEXT_DATA__.scriptLoader = scriptLoaderItems;
}
class NextScript extends _react.default.Component {
    static #_ = (()=>{
        this.contextType = _htmlcontext.HtmlContext;
    })();
    getDynamicChunks(files) {
        return getDynamicChunks(this.context, this.props, files);
    }
    getPreNextScripts() {
        return getPreNextScripts(this.context, this.props);
    }
    getScripts(files) {
        return getScripts(this.context, this.props, files);
    }
    getPolyfillScripts() {
        return getPolyfillScripts(this.context, this.props);
    }
    static getInlineScriptSource(context) {
        const { __NEXT_DATA__, largePageDataBytes } = context;
        try {
            const data = JSON.stringify(__NEXT_DATA__);
            if (largePageDataWarnings.has(__NEXT_DATA__.page)) {
                return (0, _htmlescape.htmlEscapeJsonString)(data);
            }
            const bytes =  false ? 0 : Buffer.from(data).byteLength;
            const prettyBytes = (__webpack_require__(5955)/* ["default"] */ .Z);
            if (largePageDataBytes && bytes > largePageDataBytes) {
                if (true) {
                    largePageDataWarnings.add(__NEXT_DATA__.page);
                }
                console.warn(`Warning: data for page "${__NEXT_DATA__.page}"${__NEXT_DATA__.page === context.dangerousAsPath ? "" : ` (path "${context.dangerousAsPath}")`} is ${prettyBytes(bytes)} which exceeds the threshold of ${prettyBytes(largePageDataBytes)}, this amount of data can reduce performance.\nSee more info here: https://nextjs.org/docs/messages/large-page-data`);
            }
            return (0, _htmlescape.htmlEscapeJsonString)(data);
        } catch (err) {
            if ((0, _iserror.default)(err) && err.message.indexOf("circular structure") !== -1) {
                throw new Error(`Circular structure in "getInitialProps" result of page "${__NEXT_DATA__.page}". https://nextjs.org/docs/messages/circular-structure`);
            }
            throw err;
        }
    }
    render() {
        const { assetPrefix, inAmpMode, buildManifest, unstable_runtimeJS, docComponentsRendered, assetQueryString, disableOptimizedLoading, crossOrigin } = this.context;
        const disableRuntimeJS = unstable_runtimeJS === false;
        docComponentsRendered.NextScript = true;
        if ( true && inAmpMode) {
            if (true) {
                return null;
            }
            const ampDevFiles = [
                ...buildManifest.devFiles,
                ...buildManifest.polyfillFiles,
                ...buildManifest.ampDevFiles
            ];
            return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, disableRuntimeJS ? null : /*#__PURE__*/ _react.default.createElement("script", {
                id: "__NEXT_DATA__",
                type: "application/json",
                nonce: this.props.nonce,
                crossOrigin: this.props.crossOrigin || crossOrigin,
                dangerouslySetInnerHTML: {
                    __html: NextScript.getInlineScriptSource(this.context)
                },
                "data-ampdevmode": true
            }), ampDevFiles.map((file)=>/*#__PURE__*/ _react.default.createElement("script", {
                    key: file,
                    src: `${assetPrefix}/_next/${file}${assetQueryString}`,
                    nonce: this.props.nonce,
                    crossOrigin: this.props.crossOrigin || crossOrigin,
                    "data-ampdevmode": true
                })));
        }
        if (false) {}
        const files = getDocumentFiles(this.context.buildManifest, this.context.__NEXT_DATA__.page,  true && inAmpMode);
        return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, !disableRuntimeJS && buildManifest.devFiles ? buildManifest.devFiles.map((file)=>/*#__PURE__*/ _react.default.createElement("script", {
                key: file,
                src: `${assetPrefix}/_next/${encodeURI(file)}${assetQueryString}`,
                nonce: this.props.nonce,
                crossOrigin: this.props.crossOrigin || crossOrigin
            })) : null, disableRuntimeJS ? null : /*#__PURE__*/ _react.default.createElement("script", {
            id: "__NEXT_DATA__",
            type: "application/json",
            nonce: this.props.nonce,
            crossOrigin: this.props.crossOrigin || crossOrigin,
            dangerouslySetInnerHTML: {
                __html: NextScript.getInlineScriptSource(this.context)
            }
        }), disableOptimizedLoading && !disableRuntimeJS && this.getPolyfillScripts(), disableOptimizedLoading && !disableRuntimeJS && this.getPreNextScripts(), disableOptimizedLoading && !disableRuntimeJS && this.getDynamicChunks(files), disableOptimizedLoading && !disableRuntimeJS && this.getScripts(files));
    }
}
function Html(props) {
    const { inAmpMode, docComponentsRendered, locale, scriptLoader, __NEXT_DATA__ } = (0, _htmlcontext.useHtmlContext)();
    docComponentsRendered.Html = true;
    handleDocumentScriptLoaderItems(scriptLoader, __NEXT_DATA__, props);
    return /*#__PURE__*/ _react.default.createElement("html", {
        ...props,
        lang: props.lang || locale || undefined,
        amp:  true && inAmpMode ? "" : undefined,
        "data-ampdevmode":  true && inAmpMode && "production" !== "production" ? 0 : undefined
    });
}
function Main() {
    const { docComponentsRendered } = (0, _htmlcontext.useHtmlContext)();
    docComponentsRendered.Main = true;
    // @ts-ignore
    return /*#__PURE__*/ _react.default.createElement("next-js-internal-body-render-target", null);
}
class Document extends _react.default.Component {
    /**
   * `getInitialProps` hook returns the context object with the addition of `renderPage`.
   * `renderPage` callback executes `React` rendering logic synchronously to support server-rendering wrappers
   */ static getInitialProps(ctx) {
        return ctx.defaultGetInitialProps(ctx);
    }
    render() {
        return /*#__PURE__*/ _react.default.createElement(Html, null, /*#__PURE__*/ _react.default.createElement(Head, null), /*#__PURE__*/ _react.default.createElement("body", null, /*#__PURE__*/ _react.default.createElement(Main, null), /*#__PURE__*/ _react.default.createElement(NextScript, null)));
    }
}
// Add a special property to the built-in `Document` component so later we can
// identify if a user customized `Document` is used or not.
const InternalFunctionDocument = function InternalFunctionDocument() {
    return /*#__PURE__*/ _react.default.createElement(Html, null, /*#__PURE__*/ _react.default.createElement(Head, null), /*#__PURE__*/ _react.default.createElement("body", null, /*#__PURE__*/ _react.default.createElement(Main, null), /*#__PURE__*/ _react.default.createElement(NextScript, null)));
};
Document[_constants.NEXT_BUILTIN_DOCUMENT] = InternalFunctionDocument; //# sourceMappingURL=_document.js.map


/***/ }),

/***/ 676:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    default: function() {
        return isError;
    },
    getProperError: function() {
        return getProperError;
    }
});
const _isplainobject = __webpack_require__(8524);
function isError(err) {
    return typeof err === "object" && err !== null && "name" in err && "message" in err;
}
function getProperError(err) {
    if (isError(err)) {
        return err;
    }
    if (false) {}
    return new Error((0, _isplainobject.isPlainObject)(err) ? JSON.stringify(err) : err + "");
}

//# sourceMappingURL=is-error.js.map

/***/ }),

/***/ 5955:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
var __webpack_unused_export__;
/*
MIT License

Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (sindresorhus.com)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/ 
__webpack_unused_export__ = ({
    value: true
});
Object.defineProperty(exports, "Z", ({
    enumerable: true,
    get: function() {
        return prettyBytes;
    }
}));
const UNITS = [
    "B",
    "kB",
    "MB",
    "GB",
    "TB",
    "PB",
    "EB",
    "ZB",
    "YB"
];
/*
Formats the given number using `Number#toLocaleString`.
- If locale is a string, the value is expected to be a locale-key (for example: `de`).
- If locale is true, the system default locale is used for translation.
- If no value for locale is specified, the number is returned unmodified.
*/ const toLocaleString = (number, locale)=>{
    let result = number;
    if (typeof locale === "string") {
        result = number.toLocaleString(locale);
    } else if (locale === true) {
        result = number.toLocaleString();
    }
    return result;
};
function prettyBytes(number, options) {
    if (!Number.isFinite(number)) {
        throw new TypeError(`Expected a finite number, got ${typeof number}: ${number}`);
    }
    options = Object.assign({}, options);
    if (options.signed && number === 0) {
        return " 0 B";
    }
    const isNegative = number < 0;
    const prefix = isNegative ? "-" : options.signed ? "+" : "";
    if (isNegative) {
        number = -number;
    }
    if (number < 1) {
        const numberString = toLocaleString(number, options.locale);
        return prefix + numberString + " B";
    }
    const exponent = Math.min(Math.floor(Math.log10(number) / 3), UNITS.length - 1);
    number = Number((number / Math.pow(1000, exponent)).toPrecision(3));
    const numberString = toLocaleString(number, options.locale);
    const unit = UNITS[exponent];
    return prefix + numberString + " " + unit;
}

//# sourceMappingURL=pretty-bytes.js.map

/***/ }),

/***/ 5244:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
var __webpack_unused_export__;

__webpack_unused_export__ = ({
    value: true
});
Object.defineProperty(exports, "x", ({
    enumerable: true,
    get: function() {
        return RouteKind;
    }
}));
var RouteKind;
(function(RouteKind) {
    RouteKind[/**
   * `PAGES` represents all the React pages that are under `pages/`.
   */ "PAGES"] = "PAGES";
    RouteKind[/**
   * `PAGES_API` represents all the API routes under `pages/api/`.
   */ "PAGES_API"] = "PAGES_API";
    RouteKind[/**
   * `APP_PAGE` represents all the React pages that are under `app/` with the
   * filename of `page.{j,t}s{,x}`.
   */ "APP_PAGE"] = "APP_PAGE";
    RouteKind[/**
   * `APP_ROUTE` represents all the API routes and metadata routes that are under `app/` with the
   * filename of `route.{j,t}s{,x}`.
   */ "APP_ROUTE"] = "APP_ROUTE";
})(RouteKind || (RouteKind = {}));

//# sourceMappingURL=route-kind.js.map

/***/ }),

/***/ 3185:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    PagesRouteModule: function() {
        return PagesRouteModule;
    },
    default: function() {
        return _default;
    }
});
const _routemodule = __webpack_require__(3076);
const _render = __webpack_require__(3100);
class PagesRouteModule extends _routemodule.RouteModule {
    constructor(options){
        super(options);
        this.components = options.components;
    }
    render(req, res, context) {
        return (0, _render.renderToHTMLImpl)(req, res, context.page, context.query, context.renderOpts, {
            App: this.components.App,
            Document: this.components.Document
        });
    }
}
const _default = PagesRouteModule;

//# sourceMappingURL=module.js.map

/***/ }),

/***/ 6859:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(2940)


/***/ }),

/***/ 5251:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f=__webpack_require__(6689),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};
function q(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=""+g);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l;exports.jsx=q;exports.jsxs=q;


/***/ }),

/***/ 5893:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (true) {
  module.exports = __webpack_require__(5251);
} else {}


/***/ }),

/***/ 3897:
/***/ ((module) => {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
module.exports = _arrayLikeToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 5372:
/***/ ((module) => {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
module.exports = _arrayWithHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 6115:
/***/ ((module) => {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
module.exports = _assertThisInitialized, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 7156:
/***/ ((module) => {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}
module.exports = _asyncToGenerator, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 6690:
/***/ ((module) => {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
module.exports = _classCallCheck, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 3515:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var setPrototypeOf = __webpack_require__(6015);
var isNativeReflectConstruct = __webpack_require__(9617);
function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = Reflect.construct.bind(), module.exports.__esModule = true, module.exports["default"] = module.exports;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
  return _construct.apply(null, arguments);
}
module.exports = _construct, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 9728:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toPropertyKey = __webpack_require__(4062);
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
module.exports = _createClass, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 8416:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toPropertyKey = __webpack_require__(4062);
function _defineProperty(obj, key, value) {
  key = toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 3808:
/***/ ((module) => {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _getPrototypeOf(o);
}
module.exports = _getPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 1655:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var setPrototypeOf = __webpack_require__(6015);
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}
module.exports = _inherits, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 4836:
/***/ ((module) => {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 6035:
/***/ ((module) => {

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
module.exports = _isNativeFunction, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 9617:
/***/ ((module) => {

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}
module.exports = _isNativeReflectConstruct, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 8872:
/***/ ((module) => {

function _iterableToArrayLimit(arr, i) {
  var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
  if (null != _i) {
    var _s,
      _e,
      _x,
      _r,
      _arr = [],
      _n = !0,
      _d = !1;
    try {
      if (_x = (_i = _i.call(arr)).next, 0 === i) {
        if (Object(_i) !== _i) return;
        _n = !1;
      } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return;
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
}
module.exports = _iterableToArrayLimit, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 2218:
/***/ ((module) => {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
module.exports = _nonIterableRest, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 4993:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _typeof = (__webpack_require__(8698)["default"]);
var assertThisInitialized = __webpack_require__(6115);
function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return assertThisInitialized(self);
}
module.exports = _possibleConstructorReturn, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 7061:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _typeof = (__webpack_require__(8698)["default"]);
function _regeneratorRuntime() {
  "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
  module.exports = _regeneratorRuntime = function _regeneratorRuntime() {
    return exports;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  var exports = {},
    Op = Object.prototype,
    hasOwn = Op.hasOwnProperty,
    defineProperty = Object.defineProperty || function (obj, key, desc) {
      obj[key] = desc.value;
    },
    $Symbol = "function" == typeof Symbol ? Symbol : {},
    iteratorSymbol = $Symbol.iterator || "@@iterator",
    asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
    toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
  function define(obj, key, value) {
    return Object.defineProperty(obj, key, {
      value: value,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), obj[key];
  }
  try {
    define({}, "");
  } catch (err) {
    define = function define(obj, key, value) {
      return obj[key] = value;
    };
  }
  function wrap(innerFn, outerFn, self, tryLocsList) {
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
      generator = Object.create(protoGenerator.prototype),
      context = new Context(tryLocsList || []);
    return defineProperty(generator, "_invoke", {
      value: makeInvokeMethod(innerFn, self, context)
    }), generator;
  }
  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }
  exports.wrap = wrap;
  var ContinueSentinel = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });
  var getProto = Object.getPrototypeOf,
    NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }
  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if ("throw" !== record.type) {
        var result = record.arg,
          value = result.value;
        return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
          invoke("next", value, resolve, reject);
        }, function (err) {
          invoke("throw", err, resolve, reject);
        }) : PromiseImpl.resolve(value).then(function (unwrapped) {
          result.value = unwrapped, resolve(result);
        }, function (error) {
          return invoke("throw", error, resolve, reject);
        });
      }
      reject(record.arg);
    }
    var previousPromise;
    defineProperty(this, "_invoke", {
      value: function value(method, arg) {
        function callInvokeWithMethodAndArg() {
          return new PromiseImpl(function (resolve, reject) {
            invoke(method, arg, resolve, reject);
          });
        }
        return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(innerFn, self, context) {
    var state = "suspendedStart";
    return function (method, arg) {
      if ("executing" === state) throw new Error("Generator is already running");
      if ("completed" === state) {
        if ("throw" === method) throw arg;
        return {
          value: void 0,
          done: !0
        };
      }
      for (context.method = method, context.arg = arg;;) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }
        if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
          if ("suspendedStart" === state) throw state = "completed", context.arg;
          context.dispatchException(context.arg);
        } else "return" === context.method && context.abrupt("return", context.arg);
        state = "executing";
        var record = tryCatch(innerFn, self, context);
        if ("normal" === record.type) {
          if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
          return {
            value: record.arg,
            done: context.done
          };
        }
        "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
      }
    };
  }
  function maybeInvokeDelegate(delegate, context) {
    var methodName = context.method,
      method = delegate.iterator[methodName];
    if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel;
    var record = tryCatch(method, delegate.iterator, context.arg);
    if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
    var info = record.arg;
    return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
  }
  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };
    1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
  }
  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal", delete record.arg, entry.completion = record;
  }
  function Context(tryLocsList) {
    this.tryEntries = [{
      tryLoc: "root"
    }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(iterable) {
    if (iterable || "" === iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) return iteratorMethod.call(iterable);
      if ("function" == typeof iterable.next) return iterable;
      if (!isNaN(iterable.length)) {
        var i = -1,
          next = function next() {
            for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;
            return next.value = undefined, next.done = !0, next;
          };
        return next.next = next;
      }
    }
    throw new TypeError(_typeof(iterable) + " is not iterable");
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), defineProperty(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
    var ctor = "function" == typeof genFun && genFun.constructor;
    return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
  }, exports.mark = function (genFun) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
  }, exports.awrap = function (arg) {
    return {
      __await: arg
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    void 0 === PromiseImpl && (PromiseImpl = Promise);
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
    return this;
  }), define(Gp, "toString", function () {
    return "[object Generator]";
  }), exports.keys = function (val) {
    var object = Object(val),
      keys = [];
    for (var key in object) keys.push(key);
    return keys.reverse(), function next() {
      for (; keys.length;) {
        var key = keys.pop();
        if (key in object) return next.value = key, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, exports.values = values, Context.prototype = {
    constructor: Context,
    reset: function reset(skipTempReset) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
    },
    stop: function stop() {
      this.done = !0;
      var rootRecord = this.tryEntries[0].completion;
      if ("throw" === rootRecord.type) throw rootRecord.arg;
      return this.rval;
    },
    dispatchException: function dispatchException(exception) {
      if (this.done) throw exception;
      var context = this;
      function handle(loc, caught) {
        return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
      }
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i],
          record = entry.completion;
        if ("root" === entry.tryLoc) return handle("end");
        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc"),
            hasFinally = hasOwn.call(entry, "finallyLoc");
          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
          } else {
            if (!hasFinally) throw new Error("try statement without catch or finally");
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          }
        }
      }
    },
    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }
      finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
      var record = finallyEntry ? finallyEntry.completion : {};
      return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
    },
    complete: function complete(record, afterLoc) {
      if ("throw" === record.type) throw record.arg;
      return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
    },
    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
      }
    },
    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if ("throw" === record.type) {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }
      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      return this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
    }
  }, exports;
}
module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 6015:
/***/ ((module) => {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _setPrototypeOf(o, p);
}
module.exports = _setPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 7424:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayWithHoles = __webpack_require__(5372);
var iterableToArrayLimit = __webpack_require__(8872);
var unsupportedIterableToArray = __webpack_require__(6116);
var nonIterableRest = __webpack_require__(2218);
function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}
module.exports = _slicedToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 5036:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _typeof = (__webpack_require__(8698)["default"]);
function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
module.exports = _toPrimitive, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 4062:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _typeof = (__webpack_require__(8698)["default"]);
var toPrimitive = __webpack_require__(5036);
function _toPropertyKey(arg) {
  var key = toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}
module.exports = _toPropertyKey, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 8698:
/***/ ((module) => {

function _typeof(obj) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(obj);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 6116:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayLikeToArray = __webpack_require__(3897);
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}
module.exports = _unsupportedIterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 3496:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getPrototypeOf = __webpack_require__(3808);
var setPrototypeOf = __webpack_require__(6015);
var isNativeFunction = __webpack_require__(6035);
var construct = __webpack_require__(3515);
function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;
  module.exports = _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !isNativeFunction(Class)) return Class;
    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }
    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);
      _cache.set(Class, Wrapper);
    }
    function Wrapper() {
      return construct(Class, arguments, getPrototypeOf(this).constructor);
    }
    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return setPrototypeOf(Wrapper, Class);
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _wrapNativeSuper(Class);
}
module.exports = _wrapNativeSuper, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 4687:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// TODO(Babel 8): Remove this file.

var runtime = __webpack_require__(7061)();
module.exports = runtime;

// Copied from https://github.com/facebook/regenerator/blob/main/packages/runtime/runtime.js#L736=
try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ })

};
;