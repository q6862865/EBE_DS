'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AllIcons = undefined;

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

var _selection = require('./selection.js');

var _selection2 = _interopRequireDefault(_selection);

var _iconConst = require('./iconConst');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } // the file exported from IcoMoon


function getPath(iconName) {
    var icon = _selection2.default.icons.find(function (icon) {
        return icon.properties.name === iconName;
    });

    if (icon) {
        return icon.icon.paths.join(' ');
    }
    console.warn('icon ' + iconName + ' does not exist.');
    return '';
}

function getPath2(iconName) {
    var icon = _selection2.default.icons.find(function (icon) {
        return icon.properties.name === iconName;
    });
    return _defineProperty({}, icon.properties.name, icon.icon.paths[0]);
}

var styles = {
    display: 'inline-block',
    verticalAlign: 'middle'
};

var Icon = function Icon(_ref2) {
    var size = _ref2.size,
        color = _ref2.color,
        bgColor = _ref2.bgColor,
        children = _ref2.children,
        props = _objectWithoutProperties(_ref2, ['size', 'color', 'bgColor', 'children']);

    return _react2.default.createElement(
        _reactThemeProvider2.default,
        { setCSS: _testSetCSS2.default },
        _react2.default.createElement(
            'span',
            props,
            _react2.default.createElement(
                'svg',
                { style: { backgroundColor: bgColor, verticalAlign: 'middle' },
                    width: size + 'px',
                    height: size + 'px',
                    backgroundColor: bgColor,
                    viewBox: '0 0 1024 1024' },
                _react2.default.createElement('path', { fill: color, d: getPath(props.icon) })
            ),
            children
        )
    );
};

// for test, can delete
var AllIcons1 = function AllIcons1(_ref3) {
    var size = _ref3.size,
        children = _ref3.children,
        props = _objectWithoutProperties(_ref3, ['size', 'children']);

    var keys = Object.keys(_iconConst.ICONS);
    var x,
        txt = "";
    var elements = [];

    for (x in _iconConst.ICONS) {
        elements.push(_react2.default.createElement(
            'svg',
            { width: size + 'px', height: size + 'px', viewBox: '0 0 1024 1024' },
            _react2.default.createElement('path', { d: ' + ICONS[x] + ' }),
            ' '
        ));
        // txt = txt + '<svg width={`${size}px`} height={`${size}px`} viewBox="0 0 1024 1024"><path d={' + ICONS[x] + '} /> </svg>'
    };
    // console.log("lalalala", typeof(txt) + ' ' + typeof(keys));
    console.log(elements);
    return _react2.default.createElement(
        _reactThemeProvider2.default,
        { setCSS: _testSetCSS2.default },
        _react2.default.createElement(
            'span',
            props,
            elements[0],
            children
        )
    );
};

var AllIcons = function AllIcons(_ref4) {
    var size = _ref4.size,
        children = _ref4.children,
        props = _objectWithoutProperties(_ref4, ['size', 'children']);

    return _react2.default.createElement(
        _reactThemeProvider2.default,
        { setCSS: _testSetCSS2.default },
        _react2.default.createElement(
            'span',
            props,
            Object.values(_iconConst.ICONS).map(function (k) {
                return _react2.default.createElement(
                    'svg',
                    { width: size + 'px', height: size + 'px', viewBox: '0 0 1024 1024' },
                    _react2.default.createElement('path', { d: k })
                );
            }),
            children
        )
    );
};

//the full version of AllIcons
var AllIcons2 = function AllIcons2(_ref5) {
    var size = _ref5.size,
        children = _ref5.children,
        props = _objectWithoutProperties(_ref5, ['size', 'children']);

    var keys = Object.keys(_iconConst.ICONS);
    var renderedIcons = keys.map(function (k) {
        var path = _iconConst.ICONS[k];
        // console.log('kaka', (JSON.parse(JSON.stringify(ICONS)) == ICONS));
        //        console.log('icon path', path);
        return _react2.default.createElement(
            'svg',
            { width: size + 'px', height: size + 'px', viewBox: '0 0 1024 1024' },
            _react2.default.createElement('path', { d: _iconConst.ICONS[k] })
        );
    });
    return _react2.default.createElement(
        _reactThemeProvider2.default,
        { setCSS: _testSetCSS2.default },
        _react2.default.createElement(
            'span',
            props,
            renderedIcons,
            children
        )
    );
};

Icon.propTypes = {
    //  type: PropTypes.string.isRequired,
    children: _propTypes2.default.element,
    size: _propTypes2.default.number,
    icon: _propTypes2.default.string.isRequired,
    color: _propTypes2.default.string,
    bgColor: _propTypes2.default.string
};

Icon.defaultProps = {
    size: 24,
    children: null
};

exports.default = Icon;
exports.AllIcons = AllIcons;