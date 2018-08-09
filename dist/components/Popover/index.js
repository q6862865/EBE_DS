'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  opacity: 1;\n  margin-top: ', 'px;\n  visibility: visible;\n'], ['\n  opacity: 1;\n  margin-top: ', 'px;\n  visibility: visible;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  background: #fff;\n  border: 1px solid #ccc;\n  border-color: rgba(0, 0, 0, 0.2);\n  color: #000;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);\n  // display: none;\n  outline: none;\n  border-radius: 2px;\n  -webkit-user-select: text;\n  padding: 10px 15px;\n  max-width: 100%;\n  min-width: 250px;\n  position: relative;\n  margin-top: ', 'px;\n  opacity: 0;\n  visibility: hidden;\n  transition: margin-top ', ', opacity ', ', visibility ', ';\n\n  &:after {\n    content: \'\';\n    position: absolute;\n    top: ', 'px;\n    left: 50%;\n    border-style: solid;\n    border-width: 0 ', 'px ', 'px;\n    border-color: #ffffff transparent;\n    display: block;\n    width: 0;\n    z-index: 1;\n    transform: translateX(-50%);\n  }\n\n  &:before {\n    content: \'\';\n    position: absolute;\n    top: ', 'px;\n    left: 50%;\n    border-style: solid;\n    border-width: 0 ', 'px ', 'px;\n    border-color: rgba(0, 0, 0, 0.2) transparent;\n    display: block;\n    width: 0;\n    z-index: 0;\n    transform: translateX(-50%);\n  }\n\n  ', ';\n'], ['\n  background: #fff;\n  border: 1px solid #ccc;\n  border-color: rgba(0, 0, 0, 0.2);\n  color: #000;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);\n  // display: none;\n  outline: none;\n  border-radius: 2px;\n  -webkit-user-select: text;\n  padding: 10px 15px;\n  max-width: 100%;\n  min-width: 250px;\n  position: relative;\n  margin-top: ', 'px;\n  opacity: 0;\n  visibility: hidden;\n  transition: margin-top ', ', opacity ', ', visibility ', ';\n\n  &:after {\n    content: \'\';\n    position: absolute;\n    top: ', 'px;\n    left: 50%;\n    border-style: solid;\n    border-width: 0 ', 'px ', 'px;\n    border-color: #ffffff transparent;\n    display: block;\n    width: 0;\n    z-index: 1;\n    transform: translateX(-50%);\n  }\n\n  &:before {\n    content: \'\';\n    position: absolute;\n    top: ', 'px;\n    left: 50%;\n    border-style: solid;\n    border-width: 0 ', 'px ', 'px;\n    border-color: rgba(0, 0, 0, 0.2) transparent;\n    display: block;\n    width: 0;\n    z-index: 0;\n    transform: translateX(-50%);\n  }\n\n  ', ';\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactTether = require('react-tether');

var _reactTether2 = _interopRequireDefault(_reactTether);

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

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); } /* global document */


var arrowSize = 5;
var arrowSizePadding = 2;
var transition = '0.3s';

var open = (0, _styledComponents.css)(_templateObject, arrowSize);

var Content = _styledComponents2.default.div(_templateObject2, arrowSize + 5, transition, transition, transition, arrowSize * -1, arrowSize, arrowSize, arrowSize - 10 - arrowSizePadding, arrowSize + arrowSizePadding, arrowSize + arrowSizePadding, function (props) {
  return props.open ? open : '';
});

var Popover = function (_Component) {
  _inherits(Popover, _Component);

  function Popover() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Popover);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Popover.__proto__ || Object.getPrototypeOf(Popover)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      open: false
    }, _this.handleBodyClick = function (event) {
      if (!_this.popover || !_this.popover._targetNode || // eslint-disable-line
      !_this.popover._elementParentNode // eslint-disable-line
      ) {
          return false;
        }

      var isSame = event.target === _this.popover._targetNode; // eslint-disable-line
      var isWithinTrigger = _this.popover._targetNode.contains(event.target); // eslint-disable-line
      // eslint-disable-next-line
      var isWithinPopover = _this.popover._elementParentNode.contains(event.target);

      if (isSame || isWithinTrigger) {
        return _this.setState({ open: !_this.state.open });
      }

      if (isWithinPopover && _this.props.persist === 'self') {
        return false;
      }

      if (_this.state.open) {
        return _this.setState({ open: false });
      }

      return false;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Popover, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      document.body.addEventListener('click', this.handleBodyClick.bind(this), true);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      document.body.removeEventListener('click', this.handleBodyClick.bind(this), true);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          trigger = _props.trigger,
          children = _props.children,
          attachment = _props.attachment,
          className = _props.className;


      return _react2.default.createElement(
        _reactThemeProvider2.default,
        { setCSS: _testSetCSS2.default },
        _react2.default.createElement(
          _reactTether2.default,
          {
            attachment: attachment,
            constraints: [{
              to: 'scrollParent'
            }],
            ref: function ref(popover) {
              _this2.popover = popover;
            }
          },
          trigger,
          _react2.default.createElement(
            Content,
            { className: className, open: this.state.open },
            children
          )
        )
      );
    }
  }]);

  return Popover;
}(_react.Component);

Popover.propTypes = {
  trigger: _propTypes2.default.element.isRequired,
  attachment: _propTypes2.default.string,
  className: _propTypes2.default.string,
  children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.element), _propTypes2.default.element]).isRequired,
  persist: _propTypes2.default.oneOf([null, 'self'])
};

Popover.defaultProps = {
  trigger: _react2.default.createElement(
    'a',
    null,
    'Click'
  ),
  persist: null,
  className: '',
  attachment: 'top center'
};

exports.default = Popover;