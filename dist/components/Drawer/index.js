'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  right: ', 'px;\n  left: initial;\n  transition: right 0.35s cubic-bezier(0.24, 1, 0.32, 1), visibility 0.2s;\n\n  ', ';\n'], ['\n  right: ', 'px;\n  left: initial;\n  transition: right 0.35s cubic-bezier(0.24, 1, 0.32, 1), visibility 0.2s;\n\n  ', ';\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  position: fixed;\n  left: ', 'px;\n  top: 0px;\n  bottom: 0px;\n  background: #fff;\n  z-index: 1031;\n  box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12),\n    0 8px 10px -5px rgba(0, 0, 0, 0.2);\n  visibility: hidden;\n\n  background: #fff;\n  width: ', 'px;\n  transition: left 0.35s cubic-bezier(0.24, 1, 0.32, 1), visibility 0.2s;\n  overflow: auto;\n  height: 100%;\n\n  .navbar-text {\n    margin-left: 0px;\n    .backToHome {\n      margin-right: 23px;\n      font-size: 17px;\n    }\n  }\n\n  ', ' ', ' @media(max-width: 768px) {\n    width: ', 'px;\n    left: ', 'px;\n\n    .navbar-text {\n      padding-left: 15px;\n    }\n  }\n'], ['\n  position: fixed;\n  left: ', 'px;\n  top: 0px;\n  bottom: 0px;\n  background: #fff;\n  z-index: 1031;\n  box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12),\n    0 8px 10px -5px rgba(0, 0, 0, 0.2);\n  visibility: hidden;\n\n  background: #fff;\n  width: ', 'px;\n  transition: left 0.35s cubic-bezier(0.24, 1, 0.32, 1), visibility 0.2s;\n  overflow: auto;\n  height: 100%;\n\n  .navbar-text {\n    margin-left: 0px;\n    .backToHome {\n      margin-right: 23px;\n      font-size: 17px;\n    }\n  }\n\n  ', ' ', ' @media(max-width: 768px) {\n    width: ', 'px;\n    left: ', 'px;\n\n    .navbar-text {\n      padding-left: 15px;\n    }\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral(['height: 50px;'], ['height: 50px;']),
    _templateObject4 = _taggedTemplateLiteral(['\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n  padding-left: 10px;\n'], ['\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n  padding-left: 10px;\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  position: absolute;\n  top: 10px;\n  right: 15px;\n  padding: 5px;\n\n  &:hover {\n    cursor: pointer;\n  }\n'], ['\n  position: absolute;\n  top: 10px;\n  right: 15px;\n  padding: 5px;\n\n  &:hover {\n    cursor: pointer;\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _reactThemeProvider = require('react-theme-provider');

var _reactThemeProvider2 = _interopRequireDefault(_reactThemeProvider);

var _testSetCSS = require('../../.themes/testSetCSS');

var _testSetCSS2 = _interopRequireDefault(_testSetCSS);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); } /* global document */


var width = 350;

var rightSide = (0, _styledComponents.css)(_templateObject, width * -1, function (props) {
  return props.open ? 'left: initial; right: 0px;' : '';
});
// eslint-disable-next-line no-confusing-arrow
var Container = _styledComponents2.default.div(_templateObject2, width * -1, width, function (props) {
  return props.open ? 'left: 0px; visibility: visible;' : '';
}, function (props) {
  return props.right ? rightSide : '';
}, width, width * -1);

var Header = _styledComponents2.default.div(_templateObject3);

var HeaderText = _styledComponents2.default.div(_templateObject4);

var CloseButton = (0, _styledComponents2.default)(_Icon2.default)(_templateObject5);

var Drawer = function (_Component) {
  _inherits(Drawer, _Component);

  function Drawer() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Drawer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Drawer.__proto__ || Object.getPrototypeOf(Drawer)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      open: _this.props.open || false
    }, _this.onBodyClick = function (event) {
      if (!_this.props.drawerClickClose) {
        if (_this.content && _this.content.contains(event.target)) {
          return false;
        }
      }

      if (_this.getOpen()) {
        return _this.setOpen(false);
      }

      return false;
    }, _this.onToggleClick = function () {
      _this.setOpen(!_this.getOpen());
    }, _this.onCloseClick = function () {
      _this.setOpen(false);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Drawer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      document.body.addEventListener('click', this.onBodyClick.bind(this), true);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      document.body.removeEventListener('click', this.onBodyClick.bind(this), true);
    }
  }, {
    key: 'getOpen',
    value: function getOpen() {
      return this.props.handleOpen ? this.props.open : this.state.open;
    }

    // eslint-disable-next-line

  }, {
    key: 'setOpen',
    value: function setOpen(open) {
      return this.props.handleOpen ? this.props.handleOpen(open) : this.setState({ open: open });
    }
  }, {
    key: 'renderToggle',
    value: function renderToggle() {
      var toggle = this.props.toggle;


      if (toggle) {
        return _react2.default.cloneElement(toggle, { onClick: this.onToggleClick });
      }

      return _react2.default.createElement(
        'button',
        { onClick: this.onToggleClick },
        'Drawer toggle'
      );
    }
  }, {
    key: 'renderHeader',
    value: function renderHeader() {
      var header = this.props.header;


      return _react2.default.createElement(
        Header,
        null,
        _react2.default.createElement(
          HeaderText,
          null,
          header,
          _react2.default.createElement(CloseButton, { type: 'delete', onClick: this.onCloseClick })
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          children = _props.children,
          right = _props.right;


      return _react2.default.createElement(
        _reactThemeProvider2.default,
        { setCSS: _testSetCSS2.default },
        _react2.default.createElement(
          'div',
          {
            ref: function ref(_ref2) {
              _this2.content = _ref2;
            }
          },
          this.renderToggle(),
          _react2.default.createElement(
            Container,
            { open: this.getOpen(), right: right, className: 'sidebar' },
            this.renderHeader(),
            children
          )
        )
      );
    }
  }]);

  return Drawer;
}(_react.Component);

Drawer.propTypes = {
  open: _propTypes2.default.bool.isRequired,
  handleOpen: _propTypes2.default.func,
  children: _propTypes2.default.node.isRequired,
  right: _propTypes2.default.bool,
  toggle: _propTypes2.default.element,
  drawerClickClose: _propTypes2.default.bool,
  header: _propTypes2.default.element
};

Drawer.defaultProps = {
  handleOpen: null,
  right: false,
  drawerClickClose: true,
  toggle: null,
  header: null
};

exports.default = Drawer;