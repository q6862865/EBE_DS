'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tab = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  padding: 0;\n  text-align: center;\n\n  & > li {\n    display: inline;\n\n    & > a {\n      display: inline-block;\n      padding: 10px 15px;\n      outline: none;\n      cursor: pointer;\n      box-sizing: border-box;\n      color: ', ';\n      font-size: 1.15rem;\n\n      &:hover {\n        background: #f1f1f1;\n      }\n    }\n  }\n'], ['\n  padding: 0;\n  text-align: center;\n\n  & > li {\n    display: inline;\n\n    & > a {\n      display: inline-block;\n      padding: 10px 15px;\n      outline: none;\n      cursor: pointer;\n      box-sizing: border-box;\n      color: ', ';\n      font-size: 1.15rem;\n\n      &:hover {\n        background: #f1f1f1;\n      }\n    }\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  border-color: ', ';\n  transition: 0.3s ease-in-out;\n  margin-left: 0px;\n  margin-top: 0px;\n'], ['\n  border-color: ', ';\n  transition: 0.3s ease-in-out;\n  margin-left: 0px;\n  margin-top: 0px;\n']);

var _Tab = require('./Tab');

Object.defineProperty(exports, 'Tab', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Tab).default;
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

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var List = _styledComponents2.default.ul(_templateObject, function (props) {
  return props.theme.brandPrimary || '#2CA4AB';
});

var Underline = _styledComponents2.default.hr(_templateObject2, function (props) {
  return props.theme.brandPrimary || '#2CA4AB';
});

var Tabs = function (_Component) {
  _inherits(Tabs, _Component);

  function Tabs() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Tabs);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Tabs.__proto__ || Object.getPrototypeOf(Tabs)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      selected: _this.props.selected
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Tabs, [{
    key: 'handleTabClick',
    value: function handleTabClick(selected) {
      if (this.props.onClick) {
        this.props.onClick(selected);
      }
      this.setState({ selected: selected });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          children = _props.children,
          className = _props.className;

      var widthPercent = 1 / children.length * 100; // eslint-disable-line
      var width = widthPercent + '%';
      var marginLeft = this.state.selected * widthPercent + '%';

      return _react2.default.createElement(
        _reactThemeProvider2.default,
        { setCSS: _testSetCSS2.default },
        _react2.default.createElement(
          'div',
          { className: className },
          _react2.default.createElement(
            List,
            null,
            this.props.children.map(function (child, index) {
              return _react2.default.createElement(
                'li',
                { key: 'index-' + (index + 1) },
                _react2.default.createElement(
                  'a',
                  { tabIndex: index + 1, onClick: function onClick() {
                      return _this2.handleTabClick(index);
                    }, style: { width: width } },
                  child.props.title
                )
              );
            }),
            _react2.default.createElement(Underline, { style: { width: width, marginLeft: marginLeft } })
          ),
          _react2.default.createElement(
            'div',
            null,
            children[this.state.selected]
          )
        )
      );
    }
  }]);

  return Tabs;
}(_react.Component);

Tabs.propTypes = {
  selected: _propTypes2.default.number,
  className: _propTypes2.default.string,
  onClick: _propTypes2.default.func, // eslint-disable-line
  children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.element), _propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.node, _propTypes2.default.string]).isRequired
};
Tabs.defaultProps = {
  className: '',
  selected: 0
};
exports.default = Tabs;