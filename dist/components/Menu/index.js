'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MenuItem = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n  padding-left: 0px;\n\n  ', ';\n'], ['\n  padding-left: 0px;\n\n  ', ';\n']);

var _MenuItem = require('./MenuItem.js');

Object.defineProperty(exports, 'MenuItem', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_MenuItem).default;
  }
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactThemeProvider = require('react-theme-provider');

var _reactThemeProvider2 = _interopRequireDefault(_reactThemeProvider);

var _testSetCSS = require('../../.themes/testSetCSS');

var _testSetCSS2 = _interopRequireDefault(_testSetCSS);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var List = _styledComponents2.default.ul(_templateObject, function (props) {
  return props.bordered ? 'border: 1px solid #777;' : '';
});

var Menu = function Menu(_ref) {
  var children = _ref.children,
      bordered = _ref.bordered,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ['children', 'bordered', 'className']);

  return _react2.default.createElement(
    _reactThemeProvider2.default,
    { setCSS: _testSetCSS2.default },
    _react2.default.createElement(
      List,
      _extends({ bordered: bordered, className: className }, props),
      children
    )
  );
};

Menu.propTypes = {
  children: _propTypes2.default.arrayOf(_propTypes2.default.element),
  bordered: _propTypes2.default.bool,
  className: _propTypes2.default.string
};

Menu.defaultProps = {
  children: [],
  bordered: false,
  className: ''
};

exports.default = Menu;