'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Tab = function Tab(_ref) {
  var title = _ref.title,
      id = _ref.id,
      children = _ref.children;
  return _react2.default.createElement(
    'div',
    { id: 'tab-' + (id || String(title).replace(/\s/g, '-')) },
    children
  );
};

Tab.propTypes = {
  title: _propTypes2.default.string.isRequired,
  id: _propTypes2.default.string,
  children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.element), _propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.node, _propTypes2.default.string]).isRequired
};

Tab.defaultProps = {
  id: null
};

exports.default = Tab;