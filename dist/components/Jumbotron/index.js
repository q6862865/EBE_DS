'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n  text-align: center;\n  background-color: ', ';\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  padding: 1rem 0rem;\n  color: #fff;\n'], ['\n  text-align: center;\n  background-color: ', ';\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  padding: 1rem 0rem;\n  color: #fff;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _background = require('../images/background.jpg');

var _background2 = _interopRequireDefault(_background);

var _reactThemeProvider = require('react-theme-provider');

var _reactThemeProvider2 = _interopRequireDefault(_reactThemeProvider);

var _testSetCSS = require('../../.themes/testSetCSS');

var _testSetCSS2 = _interopRequireDefault(_testSetCSS);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents2.default.div(_templateObject, function (props) {
  return props.theme.brandPrimary || '#2CA4AB';
});

var Jumbotron = function Jumbotron(_ref) {
  var children = _ref.children,
      className = _ref.className,
      style = _ref.style,
      props = _objectWithoutProperties(_ref, ['children', 'className', 'style']);

  return _react2.default.createElement(
    _reactThemeProvider2.default,
    { setCSS: _testSetCSS2.default },
    _react2.default.createElement(
      Container,
      _extends({
        className: className,
        style: _extends({ backgroundImage: 'url(' + _background2.default + ')' }, style)
      }, props),
      children
    )
  );
};

Jumbotron.defaultProps = {
  className: '',
  style: {}
};

Jumbotron.propTypes = {
  children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.element), _propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.node, _propTypes2.default.string]).isRequired,
  className: _propTypes2.default.string,
  style: _propTypes2.default.object // eslint-disable-line
};

exports.default = Jumbotron;