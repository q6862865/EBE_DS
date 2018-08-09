'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n  position: fixed;\n  margin: 60px auto;\n  font-size: 10px;\n  position: relative;\n  text-indent: -9999em;\n  border-top: 1.1em solid rgba(0, 90, 113, 0.2);\n  border-right: 1.1em solid rgba(0, 90, 113, 0.2);\n  border-bottom: 1.1em solid rgba(0, 90, 113, 0.2);\n  border-left: 1.1em solid ', ';\n  -webkit-transform: translateZ(0);\n  -ms-transform: translateZ(0);\n  transform: translateZ(0);\n  -webkit-animation: load8 1.1s infinite linear;\n  animation: load8 1.1s infinite linear;\n  z-index: 100;\n  position: absolute;\n  left: 45%;\n  top: 30%;\n  &,\n  &:after {\n    border-radius: 50%;\n    width: 6em;\n    height: 6em;\n    position: fixed;\n  }\n\n  @-webkit-keyframes load8 {\n    0% {\n      -webkit-transform: rotate(0deg);\n      transform: roatate(0deg);\n    }\n    100% {\n      -webkit-transform: rotate(360deg);\n      transform: rotate(360deg);\n    }\n  }\n  @keyframes load8 {\n    0% {\n      -webkit-transform: rotate(0deg);\n      transform: rotate(0deg);\n    }\n    100% {\n      -webkit-transform: rotate(360deg);\n      transform: rotate(360deg);\n    }\n  }\n\n  ', ';\n'], ['\n  position: fixed;\n  margin: 60px auto;\n  font-size: 10px;\n  position: relative;\n  text-indent: -9999em;\n  border-top: 1.1em solid rgba(0, 90, 113, 0.2);\n  border-right: 1.1em solid rgba(0, 90, 113, 0.2);\n  border-bottom: 1.1em solid rgba(0, 90, 113, 0.2);\n  border-left: 1.1em solid ', ';\n  -webkit-transform: translateZ(0);\n  -ms-transform: translateZ(0);\n  transform: translateZ(0);\n  -webkit-animation: load8 1.1s infinite linear;\n  animation: load8 1.1s infinite linear;\n  z-index: 100;\n  position: absolute;\n  left: 45%;\n  top: 30%;\n  &,\n  &:after {\n    border-radius: 50%;\n    width: 6em;\n    height: 6em;\n    position: fixed;\n  }\n\n  @-webkit-keyframes load8 {\n    0% {\n      -webkit-transform: rotate(0deg);\n      transform: roatate(0deg);\n    }\n    100% {\n      -webkit-transform: rotate(360deg);\n      transform: rotate(360deg);\n    }\n  }\n  @keyframes load8 {\n    0% {\n      -webkit-transform: rotate(0deg);\n      transform: rotate(0deg);\n    }\n    100% {\n      -webkit-transform: rotate(360deg);\n      transform: rotate(360deg);\n    }\n  }\n\n  ', ';\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  opacity: 0.8;\n  background-color: #ffffff;\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0px;\n  z-index: 99;\n'], ['\n  opacity: 0.8;\n  background-color: #ffffff;\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0px;\n  z-index: 99;\n']);

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

var LoaderIcon = _styledComponents2.default.div(_templateObject, function (props) {
  return props.theme.brandPrimary || '#2CA4AB';
}, function (props) {
  return props.relative ? '\n    position: relative;\n    top: initial;\n    left: initial;\n  ' : '';
});

var Active = _styledComponents2.default.div(_templateObject2);

var Loader = function Loader(_ref) {
  var children = _ref.children,
      isActive = _ref.isActive,
      className = _ref.className,
      relative = _ref.relative,
      props = _objectWithoutProperties(_ref, ['children', 'isActive', 'className', 'relative']);

  return _react2.default.createElement(
    _reactThemeProvider2.default,
    { setCSS: _testSetCSS2.default },
    _react2.default.createElement(
      'div',
      null,
      isActive && !relative && _react2.default.createElement(Active, null),
      isActive && _react2.default.createElement(
        LoaderIcon,
        _extends({ relative: relative, className: className }, props),
        'Loading...'
      ),
      children
    )
  );
};

Loader.propTypes = {
  children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.element), _propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.node, _propTypes2.default.string]).isRequired,
  isActive: _propTypes2.default.bool.isRequired,
  relative: _propTypes2.default.bool.isRequired,
  className: _propTypes2.default.string
};

Loader.defaultProps = {
  isActive: false,
  relative: false,
  className: '',
  children: []
};

exports.default = Loader;