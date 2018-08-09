'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  box-sizing: border-box;\n  height: 100%;\n  text-align: left;\n  height: 40px;\n  width: 90%;\n  padding-right: 48px;\n  background: #f1f1f1;\n  padding: 10px 15px;\n  padding-right: 60px;\n  outline: none;\n  border: none;\n  font-size: 14px;\n  color: ', ';\n  &:focus {\n    border-color: ', ';\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 0 1px rgba(44, 164, 171, 0.52);\n  }\n  &[type=search] {\n    padding: 10px 15px;\n    height: 40px;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n  }\n'], ['\n  box-sizing: border-box;\n  height: 100%;\n  text-align: left;\n  height: 40px;\n  width: 90%;\n  padding-right: 48px;\n  background: #f1f1f1;\n  padding: 10px 15px;\n  padding-right: 60px;\n  outline: none;\n  border: none;\n  font-size: 14px;\n  color: ', ';\n  &:focus {\n    border-color: ', ';\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 0 1px rgba(44, 164, 171, 0.52);\n  }\n  &[type=search] {\n    padding: 10px 15px;\n    height: 40px;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n  }\n']);

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

var StyledInput = _styledComponents2.default.input(_templateObject, function (props) {
  return props.theme.brandPrimary || '#2CA4AB';
}, function (props) {
  return props.theme.brandPrimary || '#2CA4AB';
});

var Input = function Input(_ref) {
  var props = _objectWithoutProperties(_ref, []);

  return _react2.default.createElement(
    _reactThemeProvider2.default,
    { setCSS: _testSetCSS2.default },
    _react2.default.createElement(StyledInput, props)
  );
};

Input.defaultProps = {
  placeholder: 'type here ...'
};

Input.propsTypes = {
  placeholder: _propTypes2.default.string.isRequired
};

exports.default = Input;