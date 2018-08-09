'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  display: inline-block;\n  padding-right: 20px;\n  font-weight: 500;\n  color: rgba(0,0,0,0.87);\n  line-height: 20px;\n  cursor: pointer;\n  display: inline-block;\n\n  &:hover .inner {\n    -webkit-transform: scale(0.35);\n    -ms-transform: scale(0.35);\n    transform: scale(0.35);\n    opacity: 0.54;\n  }\n\n  & .input {\n    width: 1px;\n    height: 1px;\n    opacity: 0;\n  }\n\n  & .input:checked + .outer .inner {\n    -webkit-transform: scale(1);\n    -ms-transform: scale(1);\n    transform: scale(1);\n    background-color: ', ';\n    opacity: 1;\n  }\n\n  & .input:checked + .outer {\n    border: 2px solid ', ';\n  }\n\n  & .input:focus + .outer .inner {\n    -webkit-transform: scale(1);\n    -ms-transform: scale(1);\n    transform: scale(1);\n    opacity: 1;\n    background-color: ', ';\n  }\n\n  & .outer {\n    width: ', 'px;\n    height: ', 'px;\n    display: block;\n    float: left;\n    margin: 0px 5px 0px 0px;\n    border: 2px solid ', ';\n    border-radius: 50%;\n    background-color: #fff;\n  }\n\n  & .inner {\n    -webkit-transition: all 0.2s ease-in-out;\n    transition: all 0.2s ease-in-out;\n    width: ', 'px;\n    height: ', 'px;\n    -webkit-transform: scale(0);\n    -ms-transform: scale(0);\n    transform: scale(0);\n    display: block;\n    margin: ', 'px;\n    border-radius: 50%;\n    background-color: ', ';\n    opacity: 0;\n  }\n'], ['\n  display: inline-block;\n  padding-right: 20px;\n  font-weight: 500;\n  color: rgba(0,0,0,0.87);\n  line-height: 20px;\n  cursor: pointer;\n  display: inline-block;\n\n  &:hover .inner {\n    -webkit-transform: scale(0.35);\n    -ms-transform: scale(0.35);\n    transform: scale(0.35);\n    opacity: 0.54;\n  }\n\n  & .input {\n    width: 1px;\n    height: 1px;\n    opacity: 0;\n  }\n\n  & .input:checked + .outer .inner {\n    -webkit-transform: scale(1);\n    -ms-transform: scale(1);\n    transform: scale(1);\n    background-color: ', ';\n    opacity: 1;\n  }\n\n  & .input:checked + .outer {\n    border: 2px solid ', ';\n  }\n\n  & .input:focus + .outer .inner {\n    -webkit-transform: scale(1);\n    -ms-transform: scale(1);\n    transform: scale(1);\n    opacity: 1;\n    background-color: ', ';\n  }\n\n  & .outer {\n    width: ', 'px;\n    height: ', 'px;\n    display: block;\n    float: left;\n    margin: 0px 5px 0px 0px;\n    border: 2px solid ', ';\n    border-radius: 50%;\n    background-color: #fff;\n  }\n\n  & .inner {\n    -webkit-transition: all 0.2s ease-in-out;\n    transition: all 0.2s ease-in-out;\n    width: ', 'px;\n    height: ', 'px;\n    -webkit-transform: scale(0);\n    -ms-transform: scale(0);\n    transform: scale(0);\n    display: block;\n    margin: ', 'px;\n    border-radius: 50%;\n    background-color: ', ';\n    opacity: 0;\n  }\n']);

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

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var size = 16;

var Label = _styledComponents2.default.label(_templateObject, function (props) {
  return props.theme.brandPrimary || '#B39350';
}, function (props) {
  return props.theme.brandPrimary || '#B39350';
}, function (props) {
  return props.theme.brandPrimary || '#B39350';
}, size, size, function (props) {
  return props.theme.brandPrimary || 'rgba(0,0,0,0.54)';
}, size / 4 * 3, size / 4 * 3, size / 8, function (props) {
  return props.theme.brandPrimary || 'rgba(0,0,0,0.54)';
});

var Radio = function Radio(_ref) {
  var id = _ref.id,
      name = _ref.name,
      checked = _ref.checked,
      handleChange = _ref.handleChange,
      children = _ref.children;
  return _react2.default.createElement(
    _reactThemeProvider2.default,
    { setCSS: _testSetCSS2.default },
    _react2.default.createElement(
      Label,
      { htmlFor: id },
      _react2.default.createElement('input', {
        id: id,
        className: 'input',
        type: 'radio',
        name: name,
        checked: checked,
        onChange: handleChange
      }),
      _react2.default.createElement(
        'span',
        { className: 'outer' },
        _react2.default.createElement('span', { className: 'inner' })
      ),
      children
    )
  );
};

Radio.propTypes = {
  id: _propTypes2.default.string.isRequired,
  name: _propTypes2.default.string.isRequired,
  checked: _propTypes2.default.bool.isRequired,
  handleChange: _propTypes2.default.func.isRequired,
  children: _propTypes2.default.element.isRequired
};

exports.default = Radio;