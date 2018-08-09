'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactThemeProvider = require('react-theme-provider');

var _reactThemeProvider2 = _interopRequireDefault(_reactThemeProvider);

var _testSetCSS = require('../../.themes/testSetCSS');

var _testSetCSS2 = _interopRequireDefault(_testSetCSS);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var SurahTitle = function SurahTitle(_ref) {
  var chapterNumber = _ref.chapterNumber,
      color = _ref.color,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ['chapterNumber', 'color', 'className']);

  var SurahSvg = require('./Surahs/' + chapterNumber + '.js').default; // eslint-disable-line
  return _react2.default.createElement(
    _reactThemeProvider2.default,
    { setCSS: _testSetCSS2.default },
    _react2.default.createElement(SurahSvg, _extends({ color: color, className: className }, props))
  );
};

SurahTitle.defaultProps = {
  color: '#000000',
  className: '',
  chapterNumber: 1
};

SurahTitle.propTypes = {
  chapterNumber: _propTypes2.default.number.isRequired,
  color: _propTypes2.default.string,
  className: _propTypes2.default.string
};

exports.default = SurahTitle;