'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

exports.default = componentWrapper;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function componentWrapper(option) {
	return function (WrappedComponent) {
		return function (_Component) {
			(0, _inherits3.default)(wrapper, _Component);

			function wrapper() {
				(0, _classCallCheck3.default)(this, wrapper);
				return (0, _possibleConstructorReturn3.default)(this, (wrapper.__proto__ || (0, _getPrototypeOf2.default)(wrapper)).apply(this, arguments));
			}

			(0, _createClass3.default)(wrapper, [{
				key: 'shouldComponentUpdate',
				value: function shouldComponentUpdate(nextProps) {
					for (var o in this.props) {
						if (this.props[o] != nextProps[o]) {
							return true;
						}
					}
					return false;
				}
			}, {
				key: 'render',
				value: function render() {
					if (!WrappedComponent) return null;

					if (!this.props.payload || !this.props.payload.get('forView')) return null;

					return _react2.default.createElement(WrappedComponent, this.props);
				}
			}]);
			return wrapper;
		}(_react.Component);
	};
}
module.exports = exports['default'];