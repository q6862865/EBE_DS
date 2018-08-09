'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  color: #777;\n  list-style-type: none;\n\n  ', ';\n'], ['\n  color: #777;\n  list-style-type: none;\n\n  ', ';\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  height: ', ';\n  transition: 0.5s height;\n  overflow: hidden;\n'], ['\n  height: ', ';\n  transition: 0.5s height;\n  overflow: hidden;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  position: absolute;\n  right: 15px;\n'], ['\n  position: absolute;\n  right: 15px;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  padding: 10px 15px;\n  text-decoration: none;\n  color: #777;\n  display: block;\n  cursor: pointer;\n  position: relative;\n\n  &:hover {\n    background: #f5f5f5;\n    color: #333;\n  }\n'], ['\n  padding: 10px 15px;\n  text-decoration: none;\n  color: #777;\n  display: block;\n  cursor: pointer;\n  position: relative;\n\n  &:hover {\n    background: #f5f5f5;\n    color: #333;\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Item = _styledComponents2.default.li(_templateObject, function (props) {
  return props.divider ? 'border-top: 1px solid #c4c4c4;' : '';
});

var Menu = _styledComponents2.default.div(_templateObject2, function (props) {
  return props.open ? 'auto' : 0;
});

var StyledIcon = (0, _styledComponents2.default)(_Icon2.default)(_templateObject3);

var StyledLink = _styledComponents2.default.div(_templateObject4);

var MenuItem = function (_Component) {
  _inherits(MenuItem, _Component);

  function MenuItem() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, MenuItem);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MenuItem.__proto__ || Object.getPrototypeOf(MenuItem)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      menuOpen: false
    }, _this.handleClick = function (event) {
      var _this$props = _this.props,
          onClick = _this$props.onClick,
          menu = _this$props.menu;


      if (menu) {
        _this.setState({ menuOpen: !_this.state.menuOpen });
      }

      return onClick && onClick(event);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(MenuItem, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          icon = _props.icon,
          href = _props.href,
          className = _props.className,
          divider = _props.divider,
          menu = _props.menu,
          component = _props.component,
          onClick = _props.onClick,
          props = _objectWithoutProperties(_props, ['children', 'icon', 'href', 'className', 'divider', 'menu', 'component', 'onClick']);

      var Type = component ? StyledLink.withComponent(component) : StyledLink;

      return _react2.default.createElement(
        Item,
        { className: className, divider: divider },
        children && _react2.default.createElement(
          Type,
          _extends({ href: href, onClick: this.handleClick }, props),
          icon && _react2.default.createElement(
            'span',
            { style: { marginRight: 16 } },
            icon
          ),
          children,
          menu && _react2.default.createElement(StyledIcon, { type: this.state.menuOpen ? 'directup' : 'dropdown' })
        ),
        menu && _react2.default.createElement(
          Menu,
          { open: this.state.menuOpen },
          menu
        )
      );
    }
  }]);

  return MenuItem;
}(_react.Component);

MenuItem.propTypes = {
  children: _propTypes2.default.oneOfType([_propTypes2.default.element, _propTypes2.default.string]).isRequired,
  icon: _propTypes2.default.element,
  href: _propTypes2.default.string,
  className: _propTypes2.default.string,
  divider: _propTypes2.default.bool,
  menu: _propTypes2.default.element,
  onClick: _propTypes2.default.func
};

MenuItem.defaultProps = {
  icon: null,
  href: null,
  className: '',
  divider: false,
  menu: null,
  onClick: null
};

exports.default = MenuItem;