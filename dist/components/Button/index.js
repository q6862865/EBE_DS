'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n  background: white;\n  border-color: ', ';\n  color: ', ';\n  &:hover {\n    color: white;\n    background-color: ', ';\n    border-color: white;\n  }\n'], ['\n  background: white;\n  border-color: ', ';\n  color: ', ';\n  &:hover {\n    color: white;\n    background-color: ', ';\n    border-color: white;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  background-color: #ccc;\n  color: #6a6a6a;\n  cursor: not-allowed;\n'], ['\n  background-color: #ccc;\n  color: #6a6a6a;\n  cursor: not-allowed;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  padding: 8px 16px;\n  font-size:12px;\n  height: initial;\n'], ['\n  padding: 8px 16px;\n  font-size:12px;\n  height: initial;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  padding: 12px 24px;\n  font-size: 14px;\n  height: initial;\n'], ['\n  padding: 12px 24px;\n  font-size: 14px;\n  height: initial;\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  padding: 16px 32px;\n  font-size: 16px;\n  height: initial;\n'], ['\n  padding: 16px 32px;\n  font-size: 16px;\n  height: initial;\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n  display: inline-block;\n  outline: 0;\n  border: 0;\n  padding: 12px 24px;\n  background: none;\n  cursor: pointer;\n  width: ', ';\n  height: initial;\n  border-radius: ', ';\n  border: 0px solid black;\n  color: #fff;\n  background-color: ', ';\n  font-size: 14px;\n  font-style: normal;\n  font-stretch: normal;\n  font-family: Gotham-Medium, Roboto, sans-serif;\n  line-height:16px;\n  text-align: center;\n  vertical-align: middle;\n  touch-action: manipulation;\n\n  &:hover {\n    text-decoration: none;\n    color: ', ';\n    border-color: ', ';\n    background-color: #000000aa;\n  }\n\n  &:disabled {\n    ', '\n  }\n\n  ', '\n  ', '\n\n  ', '\n'], ['\n  display: inline-block;\n  outline: 0;\n  border: 0;\n  padding: 12px 24px;\n  background: none;\n  cursor: pointer;\n  width: ', ';\n  height: initial;\n  border-radius: ', ';\n  border: 0px solid black;\n  color: #fff;\n  background-color: ', ';\n  font-size: 14px;\n  font-style: normal;\n  font-stretch: normal;\n  font-family: Gotham-Medium, Roboto, sans-serif;\n  line-height:16px;\n  text-align: center;\n  vertical-align: middle;\n  touch-action: manipulation;\n\n  &:hover {\n    text-decoration: none;\n    color: ', ';\n    border-color: ', ';\n    background-color: #000000aa;\n  }\n\n  &:disabled {\n    ', '\n  }\n\n  ', '\n  ', '\n\n  ', '\n']),
    _templateObject7 = _taggedTemplateLiteral(['\n  text-align: center;\n  line-height: 40px;\n  text-decoration: none;\n'], ['\n  text-align: center;\n  line-height: 40px;\n  text-decoration: none;\n']);

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
// <button mycolor = "pink"

var inverted = (0, _styledComponents.css)(_templateObject, function (props) {
  return props.theme.brandPrimary || '#C2A974';
}, function (props) {
  return props.theme.brandPrimary || '#C2A974';
}, function (props) {
  return props.theme.brandPrimary || '#C2A974';
});

var disabled = (0, _styledComponents.css)(_templateObject2);

var small = (0, _styledComponents.css)(_templateObject3);

var medium = (0, _styledComponents.css)(_templateObject4);

var large = (0, _styledComponents.css)(_templateObject5);

var StyledBase = _styledComponents2.default.button(_templateObject6, function (props) {
  return props.fullWidth ? '100%' : 'initial';
}, function (props) {
  return props.round ? '50px' : 0;
}, function (props) {
  return props.theme.brandPrimary || '#000';
}, function (props) {
  return props.theme.brandPrimary || '#FFF';
}, function (props) {
  return props.theme.brandPrimary || '#C2A974';
}, disabled, function (props) {
  return props.color === 'inverted' ? inverted : '';
}, function (props) {
  return props.disabled ? disabled : '';
}, function (props) {
  switch (props.size) {
    case 'small':
      return small;
    case 'medium':
      return medium;
    case 'large':
      return large;
    default:
      return '';
  }
});

var StyledLink = StyledBase.withComponent('a').extend(_templateObject7);

function Button(_ref) {
  var className = _ref.className,
      color = _ref.color,
      children = _ref.children,
      fullWidth = _ref.fullWidth,
      size = _ref.size,
      disabled = _ref.disabled,
      href = _ref.href,
      props = _objectWithoutProperties(_ref, ['className', 'color', 'children', 'fullWidth', 'size', 'disabled', 'href']);

  if (href) {
    var attributes = props.disabled && {
      onClick: function onClick(event) {
        event.preventDefault();
      }
    };

    return _react2.default.createElement(
      _reactThemeProvider2.default,
      { setCSS: _testSetCSS2.default },
      _react2.default.createElement(
        StyledLink,
        _extends({
          href: href,
          className: className,
          color: color,
          size: size,
          fullWidth: fullWidth,
          disabled: disabled
        }, props, attributes),
        children
      )
    );
  }

  return _react2.default.createElement(
    _reactThemeProvider2.default,
    { setCSS: _testSetCSS2.default },
    _react2.default.createElement(
      StyledBase,
      _extends({ className: className, color: color, size: size, disabled: disabled, fullWidth: fullWidth }, props),
      children
    )
  );
}

Button.propTypes = {
  size: _propTypes2.default.string,
  fullWidth: _propTypes2.default.bool,
  className: _propTypes2.default.string,
  color: _propTypes2.default.string,
  href: _propTypes2.default.string,
  square: _propTypes2.default.bool,
  disabled: _propTypes2.default.bool,
  children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.element), _propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.node, _propTypes2.default.string]).isRequired
};

Button.defaultProps = {
  className: '',
  color: '',
  disabled: false,
  href: null,
  square: false
};

exports.default = Button;