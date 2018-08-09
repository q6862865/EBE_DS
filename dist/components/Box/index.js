'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n  background: white;\n  border-color: ', ';\n  color: ', ';\n  &:hover {\n    color: white;\n    background-color: ', ';\n    border-color: "white";\n  }\n'], ['\n  background: white;\n  border-color: ', ';\n  color: ', ';\n  &:hover {\n    color: white;\n    background-color: ', ';\n    border-color: "white";\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  background-color: #ccc;\n  color: #6a6a6a;\n  cursor: not-allowed;\n'], ['\n  background-color: #ccc;\n  color: #6a6a6a;\n  cursor: not-allowed;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  border: 1px solid Black;\n  width: ', ';\n\n  ', '\n'], ['\n  border: 1px solid Black;\n  width: ', ';\n\n  ', '\n']);

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

var StyledBase = _styledComponents2.default.div(_templateObject3, function (props) {
    return props.fullWidth ? 'initial' : 'fit-content';
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

function Box(_ref) {
    var className = _ref.className,
        color = _ref.color,
        children = _ref.children,
        size = _ref.size,
        fullWidth = _ref.fullWidth,
        href = _ref.href,
        props = _objectWithoutProperties(_ref, ['className', 'color', 'children', 'size', 'fullWidth', 'href']);

    return _react2.default.createElement(
        _reactThemeProvider2.default,
        { setCSS: _testSetCSS2.default },
        _react2.default.createElement(
            StyledBase,
            _extends({ className: className, color: color, size: size, fullWidth: fullWidth }, props),
            children
        )
    );
}

Box.propTypes = {
    size: _propTypes2.default.string,
    fullWidth: _propTypes2.default.bool,
    className: _propTypes2.default.string,
    color: _propTypes2.default.string,
    href: _propTypes2.default.string,
    square: _propTypes2.default.bool,
    disabled: _propTypes2.default.bool,
    children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.element), _propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.node, _propTypes2.default.string]).isRequired
};

Box.defaultProps = {
    fullWidth: true,
    className: '',
    color: '',
    size: 'medium',
    disabled: false,
    href: null,
    square: false
};

exports.default = Box;