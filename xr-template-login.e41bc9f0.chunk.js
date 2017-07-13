webpackJsonp([6],{

/***/ 1537:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _extends2 = __webpack_require__(2);

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = __webpack_require__(56);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(10);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(7);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(8);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _xrMetaEngine = __webpack_require__(270);

var _index = __webpack_require__(607);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var C = (_dec = (0, _xrMetaEngine.wrapper)(_index2.default), _dec(_class = function (_Component) {
	(0, _inherits3.default)(C, _Component);

	function C() {
		(0, _classCallCheck3.default)(this, C);
		return (0, _possibleConstructorReturn3.default)(this, (C.__proto__ || (0, _getPrototypeOf2.default)(C)).apply(this, arguments));
	}

	(0, _createClass3.default)(C, [{
		key: 'render',
		value: function render() {
			return this.props.monkeyKing((0, _extends3.default)({}, this.props, { path: 'root' }));
		}
	}]);
	return C;
}(_react.Component)) || _class);
exports.default = C;
module.exports = exports['default'];

/***/ }),

/***/ 1538:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(2);

var _extends3 = _interopRequireDefault(_extends2);

var _regenerator = __webpack_require__(272);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(273);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

exports.default = creator;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _xrMetaEngine = __webpack_require__(270);

var _config = __webpack_require__(599);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var action = function action(option) {
    var _this = this;

    (0, _classCallCheck3.default)(this, action);

    this.onInit = function (_ref) {
        var component = _ref.component,
            injections = _ref.injections;

        _this.component = component;
        _this.injections = injections;
        injections.reduce('init');
    };

    this.login = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var cfg, user, password, ret;
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        cfg = _config2.default.getCurrent();
                        user = _this.metaAction.gf('data.form.user');
                        password = _this.metaAction.gf('data.form.password');
                        _context.next = 5;
                        return _config2.default.getCurrent().loginApi(user, password);

                    case 5:
                        ret = _context.sent;

                        if (ret.result && ret.value) {
                            if (_this.component.props.onRedirect && cfg.rediectInfo) _this.component.props.onRedirect(cfg.rediectInfo);
                        } else {
                            _this.metaAction.toast('error', 'error');
                        }

                    case 7:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, _this);
    }));

    this.metaAction = option.metaAction;
};

function creator(option) {
    var metaAction = new _xrMetaEngine.action(option),
        o = new action((0, _extends3.default)({}, option, { metaAction: metaAction })),
        ret = (0, _extends3.default)({}, metaAction, o);

    metaAction.config({ metaHandlers: ret });

    return ret;
}
module.exports = exports['default'];

/***/ }),

/***/ 1539:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(2);

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

exports.default = creator;

var _immutable = __webpack_require__(78);

var _xrMetaEngine = __webpack_require__(270);

var _config = __webpack_require__(599);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reducer = function reducer(option) {
    var _this = this;

    (0, _classCallCheck3.default)(this, reducer);

    this.init = function (state, option) {
        var data = {
            data: {
                form: { user: '', password: '' }
            }
        };
        return _this.metaReducer.init(state, data);
    };

    this.metaReducer = option.metaReducer;
};

function creator(option) {
    var metaReducer = new _xrMetaEngine.reducer(option),
        o = new reducer((0, _extends3.default)({}, option, { metaReducer: metaReducer }));

    return (0, _extends3.default)({}, metaReducer, o);
}
module.exports = exports['default'];

/***/ })

});
//# sourceMappingURL=xr-template-login.e41bc9f0.chunk.js.map