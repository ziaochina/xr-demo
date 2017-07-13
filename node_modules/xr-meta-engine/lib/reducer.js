'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

exports.default = creator;

var _immutable = require('immutable');

var _immutable2 = _interopRequireDefault(_immutable);

var _util = require('./util');

var util = _interopRequireWildcard(_util);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reducer = function () {
	function reducer(option) {
		(0, _classCallCheck3.default)(this, reducer);

		this.appInfo = option.appInfo;
		this.onEvent = this.onEvent.bind(this);
	}

	(0, _createClass3.default)(reducer, [{
		key: 'init',
		value: function init(state, option) {
			var _option$data = option.data,
			    data = _option$data === undefined ? {} : _option$data;


			return this.initByImmutable(state, {
				data: _immutable2.default.fromJS(data)
			});
		}
	}, {
		key: 'initByImmutable',
		value: function initByImmutable(state, option) {
			var data = option.data;

			//清除state中非@@开头的属性，那属性是xr-app-loader增加的

			var keys = [];
			state.mapKeys(function (key) {
				if (key.indexOf('@@') === -1) keys.push(key);
			});

			keys.forEach(function (key) {
				state = state.remove(key);
			}

			//设置状态
			);return state.set('data', data);
		}
	}, {
		key: 'onEvent',
		value: function onEvent(state, eventName, option) {
			var path = option.path;


			var fieldPath = util.getMeta(this.appInfo, path, 'bindField');

			switch (eventName) {
				case 'onFieldFocus':
					return focus(state, path);
				case 'onFieldChange':
					return util.setField(state, fieldPath, option.value);
				default:
					return state;
			}
		}
	}, {
		key: 'focus',
		value: function focus(state, path) {
			return util.setter(state, 'meta', 'focusField', path);
		}
	}, {
		key: 'getPublishMethods',
		value: function getPublishMethods() {
			return {
				init: this.init,
				initByImmutable: this.initByImmutable,
				onEvent: this.onEvent,
				getMeta: util.getMeta,
				getField: util.getField,
				setField: util.setField,
				getPublishMethods: this.getPublishMethods,
				gm: util.getMeta,
				gf: util.getField,
				sf: util.setField
			};
		}
	}]);
	return reducer;
}();

function creator(option) {
	return new reducer(option).getPublishMethods();
}
module.exports = exports['default'];