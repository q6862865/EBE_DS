'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  margin: 0;\n  padding: 0;\n  float: ', ';\n\n  & > li {\n    display: inline-block;\n    margin: 15px 10px;\n\n    & > button {\n      margin-top: -10px;\n    }\n  }\n'], ['\n  margin: 0;\n  padding: 0;\n  float: ', ';\n\n  & > li {\n    display: inline-block;\n    margin: 15px 10px;\n\n    & > button {\n      margin-top: -10px;\n    }\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var List = _styledComponents2.default.ul(_templateObject, function (props) {
  return props.right ? 'right' : 'left';
});

var NavItem = function NavItem(_ref) {
  var children = _ref.children,
      className = _ref.className,
      right = _ref.right;
  return _react2.default.createElement(
    List,
    { right: right, className: className },
    children
  );
};

NavItem.propTypes = {
  children: _propTypes2.default.arrayOf(_propTypes2.default.element),
  className: _propTypes2.default.string,
  right: _propTypes2.default.boolean
};

NavItem.defaultProps = {
  children: [],
  className: '',
  right: false
};

exports.default = NavItem;