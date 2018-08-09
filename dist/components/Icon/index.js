'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  // SS Standard documentation: https://romancandletours.com/assets/css/ss-standard/documentation.html\n  @font-face {\n    font-family: "SSStandard";\n    src: url(\'https://assets-1f14.kxcdn.com/fonts/ss-standard.eot\');\n    src: url(\'https://assets-1f14.kxcdn.com/fonts/ss-standard.eot?#iefix\') format(\'embedded-opentype\'),\n    url(\'https://assets-1f14.kxcdn.com/fonts/ss-standard.woff\') format(\'woff\'),\n    url(\'https://assets-1f14.kxcdn.com/fonts/ss-standard.ttf\') format(\'truetype\'),\n    url(\'https://assets-1f14.kxcdn.com/fonts/ss-standard.svg#SSStandard\') format(\'svg\');\n    font-weight: normal;\n    font-style: normal;\n  }\n\n  &,\n  &:before, &:before,\n  &.ss-standard:before, &.ss-standard:before,\n  &.right:after, &.right:after,\n  &.ss-standard.right:after, &.ss-standard.right:after {\n    font-family: "SSStandard";\n    font-style: normal;\n    font-weight: normal;\n    text-decoration: none;\n    text-rendering: optimizeLegibility;\n    white-space: nowrap;\n    vertical-align: middle;\n    /*-webkit-font-feature-settings: "liga"; Currently broken in Chrome >= v22. Falls back to text-rendering. Safari is unaffected. */\n    -moz-font-feature-settings: "liga=1";\n    -moz-font-feature-settings: "liga";\n    -ms-font-feature-settings: "liga" 1;\n    -o-font-feature-settings: "liga";\n    font-feature-settings: "liga";\n    -webkit-font-smoothing: antialiased;\n  }\n\n  &.right:before,\n  &.right:before {\n    display: none;\n    content: \'\';\n  }\n\n  &:before, &.right:after {\n    content: \'', '\';\n  }\n\n'], ['\n  // SS Standard documentation: https://romancandletours.com/assets/css/ss-standard/documentation.html\n  @font-face {\n    font-family: "SSStandard";\n    src: url(\'https://assets-1f14.kxcdn.com/fonts/ss-standard.eot\');\n    src: url(\'https://assets-1f14.kxcdn.com/fonts/ss-standard.eot?#iefix\') format(\'embedded-opentype\'),\n    url(\'https://assets-1f14.kxcdn.com/fonts/ss-standard.woff\') format(\'woff\'),\n    url(\'https://assets-1f14.kxcdn.com/fonts/ss-standard.ttf\') format(\'truetype\'),\n    url(\'https://assets-1f14.kxcdn.com/fonts/ss-standard.svg#SSStandard\') format(\'svg\');\n    font-weight: normal;\n    font-style: normal;\n  }\n\n  &,\n  &:before, &:before,\n  &.ss-standard:before, &.ss-standard:before,\n  &.right:after, &.right:after,\n  &.ss-standard.right:after, &.ss-standard.right:after {\n    font-family: "SSStandard";\n    font-style: normal;\n    font-weight: normal;\n    text-decoration: none;\n    text-rendering: optimizeLegibility;\n    white-space: nowrap;\n    vertical-align: middle;\n    /*-webkit-font-feature-settings: "liga"; Currently broken in Chrome >= v22. Falls back to text-rendering. Safari is unaffected. */\n    -moz-font-feature-settings: "liga=1";\n    -moz-font-feature-settings: "liga";\n    -ms-font-feature-settings: "liga" 1;\n    -o-font-feature-settings: "liga";\n    font-feature-settings: "liga";\n    -webkit-font-smoothing: antialiased;\n  }\n\n  &.right:before,\n  &.right:before {\n    display: none;\n    content: \'\';\n  }\n\n  &:before, &.right:after {\n    content: \'', '\';\n  }\n\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _types = require('./types');

var _types2 = _interopRequireDefault(_types);

var _reactThemeProvider = require('react-theme-provider');

var _reactThemeProvider2 = _interopRequireDefault(_reactThemeProvider);

var _testSetCSS = require('../../.themes/testSetCSS');

var _testSetCSS2 = _interopRequireDefault(_testSetCSS);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var I = _styledComponents2.default.i(_templateObject, function (props) {
  return props.type ? _types2.default[props.type] : '';
});

var Icon = function Icon(_ref) {
  var type = _ref.type,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ['type', 'children']);

  return _react2.default.createElement(
    _reactThemeProvider2.default,
    { setCSS: _testSetCSS2.default },
    _react2.default.createElement(
      'span',
      props,
      _react2.default.createElement(I, { type: type }),
      children
    )
  );
};

Icon.propTypes = {
  type: _propTypes2.default.string.isRequired,
  children: _propTypes2.default.element
};

Icon.defaultProps = {
  children: null
};

exports.default = Icon;