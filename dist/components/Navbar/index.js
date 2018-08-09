'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NavItem = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  position: Fixed;\n  left: 0px;\n  right: 0px;\n'], ['\n  position: Fixed;\n  left: 0px;\n  right: 0px;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12),\n    0 2px 4px -1px rgba(0, 0, 0, 0.2);\n'], ['\n  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12),\n    0 2px 4px -1px rgba(0, 0, 0, 0.2);\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n  height: 50px;\n\n  ', ' ', ';\n'], ['\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n  height: 50px;\n\n  ', ' ', ';\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  padding: 0 15px;\n'], ['\n  padding: 0 15px;\n']);

var _NavItem = require('./NavItem');

Object.defineProperty(exports, 'NavItem', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_NavItem).default;
  }
});

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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); } /* global window */
/* global document */


var Fixed = (0, _styledComponents.css)(_templateObject);

var Scrolled = (0, _styledComponents.css)(_templateObject2);

var Nav = _styledComponents2.default.nav(_templateObject3, function (props) {
  return props.fixed ? Fixed : '';
}, function (props) {
  return props.scrolled ? Scrolled : '';
});

var Container = _styledComponents2.default.div(_templateObject4);

var Navbar = function (_React$Component) {
  _inherits(Navbar, _React$Component);

  function Navbar() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Navbar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Navbar.__proto__ || Object.getPrototypeOf(Navbar)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      scrolled: false
    }, _this.handleNavbar = function () {
      var fixed = _this.props.fixed;
      var scrolled = _this.state.scrolled;


      if (window.pageYOffset > 50) {
        if (!scrolled && fixed) {
          _this.setState({ scrolled: true });
        }
      } else if (scrolled) {
        _this.setState({ scrolled: false });
      }

      return false;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Navbar, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      window.addEventListener('scroll', this.handleNavbar, true);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('scroll', this.handleNavbar, true);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          fixed = _props.fixed,
          className = _props.className;


      return _react2.default.createElement(
        _reactThemeProvider2.default,
        { setCSS: _testSetCSS2.default },
        _react2.default.createElement(
          Nav,
          { fixed: fixed, scrolled: this.state.scrolled, className: className },
          _react2.default.createElement(
            Container,
            null,
            children
          )
        )
      );
    }
  }]);

  return Navbar;
}(_react2.default.Component);

Navbar.propTypes = {
  children: _propTypes2.default.arrayOf(_propTypes2.default.element),
  fixed: _propTypes2.default.bool,
  className: _propTypes2.default.string
};
Navbar.defaultProps = {
  fixed: false,
  children: [],
  className: ''
};
exports.default = Navbar;