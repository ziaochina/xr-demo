webpackJsonp([5],{

/***/ 1549:
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

var _index = __webpack_require__(611);

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

/***/ 1550:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(2);

var _extends3 = _interopRequireDefault(_extends2);

var _getIterator2 = __webpack_require__(271);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

exports.default = creator;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _xrComponent = __webpack_require__(274);

var _xrMetaEngine = __webpack_require__(270);

var _config = __webpack_require__(603);

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

    this.getMenuChildren = function () {
        var menu = _this.metaAction.gf('data.menu').toJS();
        var loop = function loop(children) {
            var ret = [];
            children.forEach(function (child) {

                if (!child.children) {
                    ret.push(_react2.default.createElement(
                        _xrComponent.Menu.Item,
                        { key: child.key },
                        child.name
                    ));
                } else {
                    ret.push(_react2.default.createElement(
                        _xrComponent.Menu.SubMenu,
                        { key: child.key, title: child.name },
                        loop(child.children)
                    ));
                }
            });
            return ret;
        };
        return loop(menu);
    };

    this.handleMenuClick = function (e) {

        var menu = _this.metaAction.gf('data.menu').toJS();
        var find = function find(children) {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = (0, _getIterator3.default)(children), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var child = _step.value;

                    if (child.key == e.key) {
                        return child;
                    }

                    if (child.children) {
                        var o = find(child.children);
                        if (o) return o;
                    }
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
        };

        var hit = find(menu);
        if (hit) {
            _this.injections.reduce('setContent', hit.app, {});
        }
    };

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

/***/ 1551:
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

var _config = __webpack_require__(603);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reducer = function reducer(option) {
    var _this = this;

    (0, _classCallCheck3.default)(this, reducer);

    this.init = function (state, option) {
        var data = { data: {
                menu: [{
                    key: '1',
                    name: 'about',
                    app: 'xr-template-portal-about'
                }, {
                    key: '2',
                    name: 'apps',
                    children: [{
                        key: '201',
                        name: 'app1',
                        app: 'xr-template-portal-app1'
                    }, {
                        key: '202',
                        name: 'app2',
                        app: 'xr-template-portal-app2'
                    }]
                }],
                menuDefaultSelectedKeys: ['1'],
                menuDefaultOpenKeys: ['2'],
                content: {
                    appName: 'xr-template-portal-about',
                    appParams: {}
                }
            } };
        return _this.metaReducer.init(state, data);
    };

    this.setContent = function (state, appName, appProps) {
        state = _this.metaReducer.sf(state, 'data.content.appName', appName);
        state = _this.metaReducer.sf(state, 'data.content.appParams', appProps);
        return state;
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
//# sourceMappingURL=xr-template-portal.e41bc9f0.chunk.js.map