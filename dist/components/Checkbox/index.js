'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n  cursor: pointer;\n  display: block;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  text-transform: capitalize;\n  cursor: ', ';\n'], ['\n  cursor: pointer;\n  display: block;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  text-transform: capitalize;\n  cursor: ', ';\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  -ms-appearance: none;\n  appearance: none;\n  -webkit-appearance: none;\n  -webkit-transition: all 0.05s ease-in-out;\n  transition: all 0.05s ease-in-out;\n  background-color: #fafafa;\n  border: 2px solid rgba(0,0,0,0.54);\n  padding: 8px;\n  border-radius: 2px;\n  display: inline-block;\n  height: 10px;\n  width: 10px;\n  outline: none;\n  margin: 0px;\n  position: relative;\n  margin-right: 12px;\n  vertical-align: bottom;\n  color: #fff;\n  &:hover {\n    cursor: pointer;\n    border: 2px solid rgba(0,0,0,0.87);\n    background-color: ', ';\n    box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.05), inset 0px 1px 3px rgba(0, 0, 0, 0.1);\n  }\n  &:disabled {\n    border: 2px solid #ccc;\n    background-image: linear-gradient(to bottom, #d8d8d8, #d8d8d8);\n    box-shadow: none;\n    cursor: not-allowed;\n  }\n  &:focus {\n    outline: none;\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 1px rgba(194, 169, 116, 1);\n  }\n  &:checked {\n    -webkit-transition: all 0.1s ease-in-out;\n    transition: all 0.1s ease-in-out;\n    \n    background-color: ', ';\n    border: 2px solid #B39350;\n    box-shadow: 0 1px 2px rgba(194, 169, 116, 1), inset 0px -15px 10px -12px rgba(194, 169, 116, 1),\n    inset 15px 10px -12px rgba(255, 255, 255, 0.1);\n    color: #fff;\n    &:active {\n      box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05), inset 0px 1px 2px rgba(0, 0, 0, 0.1);\n    }\n    &:focus {\n      outline: none;\n      box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 0 1px rgba(0, 126, 255, 0.1);\n    }\n    &:after {\n      content: \'\u2714\';\n      font-size: 13px;\n      margin: 0.1em 0 0.1em 0;\n      line-height: 1.2em;\n      font-weight: 300;\n      position: absolute;\n      top: 0px;\n      right: 2px;\n    }\n  }\n'], ['\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  -ms-appearance: none;\n  appearance: none;\n  -webkit-appearance: none;\n  -webkit-transition: all 0.05s ease-in-out;\n  transition: all 0.05s ease-in-out;\n  background-color: #fafafa;\n  border: 2px solid rgba(0,0,0,0.54);\n  padding: 8px;\n  border-radius: 2px;\n  display: inline-block;\n  height: 10px;\n  width: 10px;\n  outline: none;\n  margin: 0px;\n  position: relative;\n  margin-right: 12px;\n  vertical-align: bottom;\n  color: #fff;\n  &:hover {\n    cursor: pointer;\n    border: 2px solid rgba(0,0,0,0.87);\n    background-color: ', ';\n    box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.05), inset 0px 1px 3px rgba(0, 0, 0, 0.1);\n  }\n  &:disabled {\n    border: 2px solid #ccc;\n    background-image: linear-gradient(to bottom, #d8d8d8, #d8d8d8);\n    box-shadow: none;\n    cursor: not-allowed;\n  }\n  &:focus {\n    outline: none;\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 1px rgba(194, 169, 116, 1);\n  }\n  &:checked {\n    -webkit-transition: all 0.1s ease-in-out;\n    transition: all 0.1s ease-in-out;\n    \n    background-color: ', ';\n    border: 2px solid #B39350;\n    box-shadow: 0 1px 2px rgba(194, 169, 116, 1), inset 0px -15px 10px -12px rgba(194, 169, 116, 1),\n    inset 15px 10px -12px rgba(255, 255, 255, 0.1);\n    color: #fff;\n    &:active {\n      box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05), inset 0px 1px 2px rgba(0, 0, 0, 0.1);\n    }\n    &:focus {\n      outline: none;\n      box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 0 1px rgba(0, 126, 255, 0.1);\n    }\n    &:after {\n      content: \'\u2714\';\n      font-size: 13px;\n      margin: 0.1em 0 0.1em 0;\n      line-height: 1.2em;\n      font-weight: 300;\n      position: absolute;\n      top: 0px;\n      right: 2px;\n    }\n  }\n']);

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

var Label = _styledComponents2.default.label(_templateObject, function (props) {
  return props.disabled ? 'not-allowed' : 'pointer';
});

var Input = _styledComponents2.default.input(_templateObject2, function (props) {
  return props.theme.brandPrimary || '#fff';
}, function (props) {
  return props.theme.brandPrimary || '#B39350';
});

var Checkbox = function Checkbox(_ref) {
  var id = _ref.id,
      name = _ref.name,
      checked = _ref.checked,
      className = _ref.className,
      handleChange = _ref.handleChange,
      children = _ref.children,
      disabled = _ref.disabled,
      props = _objectWithoutProperties(_ref, ['id', 'name', 'checked', 'className', 'handleChange', 'children', 'disabled']);

  return _react2.default.createElement(
    _reactThemeProvider2.default,
    { setCSS: _testSetCSS2.default },
    _react2.default.createElement(
      Label,
      { htmlFor: id, disabled: disabled },
      _react2.default.createElement(Input, _extends({
        id: id,
        className: className,
        type: 'checkbox',
        name: name,
        checked: checked,
        onChange: handleChange,
        disabled: disabled
      }, props)),
      children
    )
  );
};

Checkbox.propTypes = {
  id: _propTypes2.default.string.isRequired,
  className: _propTypes2.default.string,
  name: _propTypes2.default.string.isRequired,
  checked: _propTypes2.default.bool.isRequired,
  handleChange: _propTypes2.default.func.isRequired,
  children: _propTypes2.default.element.isRequired,
  disabled: _propTypes2.default.bool
};

Checkbox.defaultProps = {
  className: '',
  disabled: false
};

exports.default = Checkbox;