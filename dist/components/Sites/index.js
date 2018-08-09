'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  width: 50%;\n  display: inline-block;\n  text-align: center;\n  border: 1px solid transparent;\n  border-radius: 2px;\n  box-sizing: border-box;\n\n  &:hover {\n    border: 1px solid rgba(#777, 0.25);\n  }\n'], ['\n  width: 50%;\n  display: inline-block;\n  text-align: center;\n  border: 1px solid transparent;\n  border-radius: 2px;\n  box-sizing: border-box;\n\n  &:hover {\n    border: 1px solid rgba(#777, 0.25);\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  text-decoration: none;\n  display: block;\n  padding: 10px;\n  color: #777;\n'], ['\n  text-decoration: none;\n  display: block;\n  padding: 10px;\n  color: #777;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  height: 35px;\n  width: 100%;\n  display: block;\n  margin-bottom: 5px;\n'], ['\n  height: 35px;\n  width: 100%;\n  display: block;\n  margin-bottom: 5px;\n']);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _Popover = require('../Popover');

var _Popover2 = _interopRequireDefault(_Popover);

var _reactThemeProvider = require('react-theme-provider');

var _reactThemeProvider2 = _interopRequireDefault(_reactThemeProvider);

var _testSetCSS = require('../../.themes/testSetCSS');

var _testSetCSS2 = _interopRequireDefault(_testSetCSS);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var sites = [{
  name: 'Quran',
  logo: '//assets-1f14.kxcdn.com/images/logo-lg.png',
  href: 'https://quran.com'
}, {
  name: 'Audio',
  logo: 'https://raw.githubusercontent.com/quran/audio.quran.com/master/static/favicon.ico',
  href: 'https://quranicaudio.com'
}, {
  name: 'Salah',
  logo: 'http://salah.com/images/favicon.png',
  href: 'http://salah.com'
}, {
  name: 'Sunnah',
  logo: 'https://sunnah.com/favicon.ico',
  href: 'https://sunnah.com'
}];

var Site = _styledComponents2.default.div(_templateObject);

var Link = _styledComponents2.default.a(_templateObject2);

var Span = _styledComponents2.default.span(_templateObject3);

var Sites = function Sites(_ref) {
  var className = _ref.className,
      popoverClassName = _ref.popoverClassName;
  return _react2.default.createElement(
    _reactThemeProvider2.default,
    { setCSS: _testSetCSS2.default },
    _react2.default.createElement(
      _Popover2.default,
      {
        className: popoverClassName,
        attachment: 'top center',
        trigger: _react2.default.createElement(
          'span',
          { style: { cursor: 'pointer' } },
          _react2.default.createElement(_Icon2.default, { type: 'grid' })
        )
      },
      _react2.default.createElement(
        'div',
        null,
        sites.map(function (site) {
          return _react2.default.createElement(
            Site,
            { key: site.name },
            _react2.default.createElement(
              Link,
              { href: site.href, className: className, target: '_blank', rel: 'noopener noreferrer' },
              _react2.default.createElement(Span, {
                style: {
                  background: 'url(' + site.logo + ') center center no-repeat',
                  backgroundSize: 'contain'
                }
              }),
              site.name
            )
          );
        })
      )
    )
  );
};

Sites.propTypes = {
  className: _propTypes2.default.string,
  popoverClassName: _propTypes2.default.string
};

Sites.defaultProps = {
  className: '',
  popoverClassName: ''
};

exports.default = Sites;