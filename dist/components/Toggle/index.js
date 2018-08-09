'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n  display: inline-block;\n  vertical-align: middle;\n'], ['\n  display: inline-block;\n  vertical-align: middle;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  & + .label {\n    padding: 0px;\n    width: ', 'px;\n    height: ', 'px;\n    background-color: rgba(0, 0, 0, 0.08);\n    border-radius: ', 'px;\n    transition: background 0.4s;\n  }\n\n  & + .label:before,\n  & + .label:after {\n    display: block;\n    position: absolute;\n    top: 1px;\n    left: 1px;\n    bottom: 1px;\n    content: "";\n  }\n\n  & + .label:before {\n    right: 1px;\n    background-color: rgba(0, 0, 0, 0.08);\n    border-radius: ', 'px;\n    transition: background 0.4s;\n  }\n\n  & + .label:after {\n    width: ', 'px;\n    height: ', 'px;\n    background-color: #fff;\n    border-radius: ', 'px;\n    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.3);\n    transition: margin 0.4s;\n    position: relative;\n    top: 1px;\n  }\n\n  &:checked + .label:before {\n    background-color: ', ';\n  }\n\n  &:checked + .label:after {\n    margin-left: ', 'px;\n  }\n'], ['\n  & + .label {\n    padding: 0px;\n    width: ', 'px;\n    height: ', 'px;\n    background-color: rgba(0, 0, 0, 0.08);\n    border-radius: ', 'px;\n    transition: background 0.4s;\n  }\n\n  & + .label:before,\n  & + .label:after {\n    display: block;\n    position: absolute;\n    top: 1px;\n    left: 1px;\n    bottom: 1px;\n    content: "";\n  }\n\n  & + .label:before {\n    right: 1px;\n    background-color: rgba(0, 0, 0, 0.08);\n    border-radius: ', 'px;\n    transition: background 0.4s;\n  }\n\n  & + .label:after {\n    width: ', 'px;\n    height: ', 'px;\n    background-color: #fff;\n    border-radius: ', 'px;\n    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.3);\n    transition: margin 0.4s;\n    position: relative;\n    top: 1px;\n  }\n\n  &:checked + .label:before {\n    background-color: ', ';\n  }\n\n  &:checked + .label:after {\n    margin-left: ', 'px;\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  & + .label {\n    padding: 1px;\n    width: ', 'px;\n    height: ', 'px;\n    background-color: rgba(0, 0, 0, 0.2);\n    border-radius: ', 'px;\n    transition: background 0.4s;\n  }\n  & + .label:before,\n  & + .label:after {\n    display: block;\n    position: absolute;\n    content: "";\n  }\n  & + .label:before {\n    top: 1px;\n    left: 1px;\n    bottom: 1px;\n    right: 1px;\n    background-color: #fff;\n    border-radius: ', 'px;\n    transition: background 0.4s;\n  }\n  & + .label:after {\n    top: 3px;\n    left: 3px;\n    bottom: 3px;\n    width: ', 'px;\n    height: ', 'px;\n    background-color: rgba(0, 0, 0, 0.2);\n    border-radius: ', 'px;\n    transition: margin 0.4s, background 0.4s;\n  }\n  &:checked + .label {\n    background-color: ', ';\n  }\n  &:checked + .label:after {\n    margin-left: ', 'px;\n    background-color: ', ';\n  }\n'], ['\n  & + .label {\n    padding: 1px;\n    width: ', 'px;\n    height: ', 'px;\n    background-color: rgba(0, 0, 0, 0.2);\n    border-radius: ', 'px;\n    transition: background 0.4s;\n  }\n  & + .label:before,\n  & + .label:after {\n    display: block;\n    position: absolute;\n    content: "";\n  }\n  & + .label:before {\n    top: 1px;\n    left: 1px;\n    bottom: 1px;\n    right: 1px;\n    background-color: #fff;\n    border-radius: ', 'px;\n    transition: background 0.4s;\n  }\n  & + .label:after {\n    top: 3px;\n    left: 3px;\n    bottom: 3px;\n    width: ', 'px;\n    height: ', 'px;\n    background-color: rgba(0, 0, 0, 0.2);\n    border-radius: ', 'px;\n    transition: margin 0.4s, background 0.4s;\n  }\n  &:checked + .label {\n    background-color: ', ';\n  }\n  &:checked + .label:after {\n    margin-left: ', 'px;\n    background-color: ', ';\n  }\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  position: absolute;\n  margin-left: -9999px;\n  visibility: hidden;\n\n  & + .label {\n    display: block;\n    position: relative;\n    cursor: pointer;\n    outline: none;\n    user-select: none;\n    margin-bottom: 0px;\n  }\n\n  ', '\n'], ['\n  position: absolute;\n  margin-left: -9999px;\n  visibility: hidden;\n\n  & + .label {\n    display: block;\n    position: relative;\n    cursor: pointer;\n    outline: none;\n    user-select: none;\n    margin-bottom: 0px;\n  }\n\n  ', '\n']);

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

var height = 24;
var width = 42;

var Switch = _styledComponents2.default.div(_templateObject);

var roundStyle = (0, _styledComponents.css)(_templateObject2, width, height, height, height, height - 2, height - 2, height - 2, function (props) {
  return props.theme.brandPrimary || '#36BF6B';
}, width / 2);

var flatStyle = (0, _styledComponents.css)(_templateObject3, width, height, height, height, height - 4, height - 4, height - 4, function (props) {
  return props.theme.brandPrimary || '#36BF6B';
}, width - height, function (props) {
  return props.theme.brandPrimary || '#36BF6B';
});

var Toggle = _styledComponents2.default.input(_templateObject4, function (props) {
  return props.toggleStyle === 'flat' ? flatStyle : roundStyle;
});

var SwitchToggle = function SwitchToggle(_ref) {
  var id = _ref.id,
      flat = _ref.flat,
      onToggle = _ref.onToggle,
      otherProps = _objectWithoutProperties(_ref, ['id', 'flat', 'onToggle']);

  return _react2.default.createElement(
    _reactThemeProvider2.default,
    { setCSS: _testSetCSS2.default },
    _react2.default.createElement(
      Switch,
      { className: 'switch' },
      _react2.default.createElement(Toggle, _extends({
        id: id,
        toggleStyle: flat ? 'flat' : 'round',
        type: 'checkbox',
        onChange: onToggle
      }, otherProps)),
      _react2.default.createElement('label', { htmlFor: id, className: 'label' })
    )
  );
};

SwitchToggle.propTypes = {
  id: _propTypes2.default.string,
  flat: _propTypes2.default.bool,
  onToggle: _propTypes2.default.func.isRequired
};

SwitchToggle.defaultProps = {
  flat: false,
  id: ''
};

exports.default = SwitchToggle;