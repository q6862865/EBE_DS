'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n  background: white;\n  border-color: ', ';\n  color: ', ';\n  &:hover {\n    color: white;\n    background-color: ', ';\n    border-color: "white";\n  }\n'], ['\n  background: white;\n  border-color: ', ';\n  color: ', ';\n  &:hover {\n    color: white;\n    background-color: ', ';\n    border-color: "white";\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  background-color: #ccc;\n  color: #6a6a6a;\n  cursor: not-allowed;\n'], ['\n  background-color: #ccc;\n  color: #6a6a6a;\n  cursor: not-allowed;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  display: inline-block;\n  outline: 0;\n  background: none;\n  cursor: pointer;\n  border: 1px solid #ffffff22;\n  box-shadow: 0px 0px 4px #00000022;\n  border-radius: 2px;\n  padding: 24px;\n  color: black;\n  background-color: ', ';\n  font-size: 16px;\n  font-style: normal;\n  font-stretch: normal;\n  text-align: center;\n  vertical-align: middle;\n  touch-action: manipulation;\n  width: ', ';\n\n  &:hover {\n    text-decoration: none;\n    border: 1px solid #00000022;\n    background-color: white;\n  }\n\n  &:active {\n    border: 1px solid #00000088;\n  }\n\n  &:focus {\n    border: 1px solid #00000022;\n    box-shadow: 0 0 4px #B39350;\n  }  \n  &:disabled {\n    ', '\n  }\n\n  ', '\n  ', '\n  ', '\n'], ['\n  display: inline-block;\n  outline: 0;\n  background: none;\n  cursor: pointer;\n  border: 1px solid #ffffff22;\n  box-shadow: 0px 0px 4px #00000022;\n  border-radius: 2px;\n  padding: 24px;\n  color: black;\n  background-color: ', ';\n  font-size: 16px;\n  font-style: normal;\n  font-stretch: normal;\n  text-align: center;\n  vertical-align: middle;\n  touch-action: manipulation;\n  width: ', ';\n\n  &:hover {\n    text-decoration: none;\n    border: 1px solid #00000022;\n    background-color: white;\n  }\n\n  &:active {\n    border: 1px solid #00000088;\n  }\n\n  &:focus {\n    border: 1px solid #00000022;\n    box-shadow: 0 0 4px #B39350;\n  }  \n  &:disabled {\n    ', '\n  }\n\n  ', '\n  ', '\n  ', '\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  text-align: center;\n  line-height: 40px;\n  text-decoration: none;\n'], ['\n  text-align: center;\n  line-height: 40px;\n  text-decoration: none;\n']);

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

// const mycolor = "pink";
// <button mycolor="pink"

var inverted = (0, _styledComponents.css)(_templateObject, function (props) {
  return props.theme.brandPrimary || '#2CA4AB';
}, function (props) {
  return props.theme.brandPrimary || '#2CA4AB';
}, function (props) {
  return props.theme.brandPrimary || '#2CA4AB';
});

var disabled = (0, _styledComponents.css)(_templateObject2);

var StyledBase = _styledComponents2.default.button(_templateObject3, function (props) {
  return props.theme.brandPrimary || '#fff';
}, function (props) {
  return props.fullWidth ? props.fullWidth : 'initial';
}, disabled, function (props) {
  return props.color === 'inverted' ? inverted : '';
}, function (props) {
  return props.disabled ? disabled : '';
}, function (props) {
  switch (props.size) {
    case 'small':
      return 'padding: 12px;';
    case 'medium':
      return 'padding: 24px;';
    case 'large':
      return 'padding: 48px;';
    default:
      return '';
  }
});

var StyledLink = StyledBase.withComponent('a').extend(_templateObject4);

function CardSelection(_ref) {
  var className = _ref.className,
      color = _ref.color,
      children = _ref.children,
      href = _ref.href,
      props = _objectWithoutProperties(_ref, ['className', 'color', 'children', 'href']);

  return _react2.default.createElement(
    _reactThemeProvider2.default,
    { setCSS: _testSetCSS2.default },
    _react2.default.createElement(
      StyledBase,
      _extends({ className: className, color: color }, props),
      children
    )
  );
}

CardSelection.propTypes = {
  fullWidth: _propTypes2.default.bool,
  className: _propTypes2.default.string,
  color: _propTypes2.default.string,
  href: _propTypes2.default.string,
  square: _propTypes2.default.bool,
  disabled: _propTypes2.default.bool,
  children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.element), _propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.node, _propTypes2.default.string]).isRequired
};

CardSelection.defaultProps = {
  fullWidth: false,
  className: '',
  color: '',
  disabled: false,
  href: null,
  square: false
};

exports.default = CardSelection;