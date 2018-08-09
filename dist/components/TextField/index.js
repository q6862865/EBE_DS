'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _TextField = require('material-ui/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

var _reactThemeProvider = require('react-theme-provider');

var _reactThemeProvider2 = _interopRequireDefault(_reactThemeProvider);

var _testSetCSS = require('../../.themes/testSetCSS');

var _testSetCSS2 = _interopRequireDefault(_testSetCSS);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var styles = {
  floatingLabelStyle: {
    color: '#000000',
    opacity: .7
  },
  floatingLabelFocusStyle: {
    opacity: 1
  },
  underlineStyle: {
    borderColor: '#aaa'
  },
  underlineFocusStyle: {
    borderColor: '#C2A974'
  }
};

var Input = function Input(_ref) {
  var type = _ref.type,
      label = _ref.label,
      onChange = _ref.onChange,
      placeholder = _ref.placeholder,
      props = _objectWithoutProperties(_ref, ['type', 'label', 'onChange', 'placeholder']);

  return _react2.default.createElement(
    _reactThemeProvider2.default,
    { setCSS: _testSetCSS2.default },
    _react2.default.createElement(
      'div',
      { style: { borderWidth: "1px", borderColor: "#00000011" } },
      _react2.default.createElement(_TextField2.default, {
        hintText: placeholder,
        type: type,
        floatingLabelText: label,
        floatingLabelStyle: styles.floatingLabelStyle,
        floatingLabelFocusStyle: styles.floatingLabelFocusStyle,
        underlineStyle: styles.underlineStyle,
        underlineFocusStyle: styles.underlineFocusStyle

      })
    )
  );
};

Input.defaultProps = {
  placeholder: 'type here ...'
};

Input.propsTypes = {
  placeholder: _propTypes2.default.string.isRequired
};

exports.default = Input;