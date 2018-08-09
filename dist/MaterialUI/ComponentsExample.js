'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _muiThemeable = require('material-ui/styles/muiThemeable');

var _muiThemeable2 = _interopRequireDefault(_muiThemeable);

var _withWidth = require('material-ui/utils/withWidth');

var _withWidth2 = _interopRequireDefault(_withWidth);

var _typography = require('material-ui/styles/typography');

var _typography2 = _interopRequireDefault(_typography);

var _ClearFix = require('material-ui/internal/ClearFix');

var _ClearFix2 = _interopRequireDefault(_ClearFix);

var _materialUi = require('material-ui');

var _LogoUsulPro = require('./LogoUsulPro.png');

var _LogoUsulPro2 = _interopRequireDefault(_LogoUsulPro);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function getStyles() {
  var styles = {
    group: {
      float: 'left',
      width: '33%',
      marginTop: '16px',
      padding: '0 50px',
      boxSizing: 'border-box'
    },
    groupSlider: {
      marginTop: '0px',
      width: '100%'
    },
    container: {
      marginBottom: '16px',
      minHeight: '24px',
      textAlign: 'left'
    },
    containerCentered: {
      textAlign: 'center'
    },
    paper: {
      height: '100px',
      width: '100px',
      margin: '0 auto',
      marginBottom: '64px'
    },
    textfield: {
      width: '100%'
    },
    slider: {
      marginTop: '0px',
      marginBottom: '0px'
    },
    title: {
      fontSize: '20px',
      lineHeight: '28px',
      paddingTop: '19px',
      marginBottom: '13px',
      letterSpacing: '0',
      fontWeight: _typography2.default.fontWeightMedium,
      color: _typography2.default.textDarkBlack
    },
    liveExamplePaper: {
      marginBottom: 32,
      overflow: 'hidden'
    },
    bottomBorderWrapper: {
      paddingBottom: '10px'
    }
  };

  styles.containerCentered = Object.assign({}, styles.container, styles.containerCentered);
  styles.groupSlider = Object.assign({}, styles.group, styles.groupSlider);

  return styles;
}

var ThemesPage = function (_React$Component) {
  _inherits(ThemesPage, _React$Component);

  function ThemesPage() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ThemesPage);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ThemesPage.__proto__ || Object.getPrototypeOf(ThemesPage)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      dialogOpen: false,
      snackbarOpen: false,
      drawerOpen: false
    }, _this.handleTouchTapDrawer = function () {
      _this.setState({
        drawerOpen: true
      });
    }, _this.handleRequestChangeDrawer = function (open) {
      _this.setState({
        drawerOpen: open
      });
    }, _this.handleTouchTapDialog = function () {
      _this.setState({
        dialogOpen: true
      });
    }, _this.handleRequestCloseDialog = function () {
      _this.setState({
        dialogOpen: false
      });
    }, _this.handleTouchTapSnackbar = function () {
      _this.setState({
        snackbarOpen: true
      });
    }, _this.handleRequestCloseSnackbar = function () {
      _this.setState({
        snackbarOpen: false
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ThemesPage, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.setState({
        valueTabs: 'light'
      });
    }
  }, {
    key: 'getComponentGroup',
    value: function getComponentGroup() {
      var styles = getStyles();

      return _react2.default.createElement(
        _ClearFix2.default,
        null,
        _react2.default.createElement(
          'div',
          { style: styles.group },
          _react2.default.createElement(
            'div',
            { style: styles.containerCentered },
            _react2.default.createElement(_materialUi.Avatar, { size: 72, src: _LogoUsulPro2.default })
          ),
          _react2.default.createElement(
            'div',
            { style: styles.containerCentered },
            _react2.default.createElement(_materialUi.RaisedButton, { label: 'Secondary', secondary: true })
          ),
          _react2.default.createElement(
            'div',
            { style: styles.containerCentered },
            _react2.default.createElement(_materialUi.RaisedButton, { label: 'Primary', primary: true })
          ),
          _react2.default.createElement(
            'div',
            { style: styles.containerCentered },
            _react2.default.createElement(_materialUi.RaisedButton, { label: 'Default' })
          )
        ),
        _react2.default.createElement(
          'div',
          { style: styles.group },
          _react2.default.createElement(
            'div',
            { style: styles.container },
            _react2.default.createElement(_materialUi.Checkbox, {
              name: 'checkboxName1',
              value: 'checkboxValue1',
              label: 'checkbox'
            }),
            _react2.default.createElement(_materialUi.Checkbox, {
              name: 'checkboxName2',
              value: 'checkboxValue2',
              label: 'disabled checkbox',
              disabled: true
            })
          ),
          _react2.default.createElement(
            'div',
            { style: styles.container },
            _react2.default.createElement(
              _materialUi.RadioButtonGroup,
              {
                name: 'shipSpeed',
                defaultSelected: 'usd'
              },
              _react2.default.createElement(_materialUi.RadioButton, {
                value: 'usd',
                label: 'USD'
              }),
              _react2.default.createElement(_materialUi.RadioButton, {
                value: 'euro',
                label: 'Euro'
              }),
              _react2.default.createElement(_materialUi.RadioButton, {
                value: 'mxn',
                label: 'MXN',
                disabled: true
              })
            )
          ),
          _react2.default.createElement(
            'div',
            { style: styles.container },
            _react2.default.createElement(_materialUi.Toggle, {
              name: 'toggleName1',
              label: 'toggle'
            }),
            _react2.default.createElement(_materialUi.Toggle, {
              name: 'toggleName2',
              label: 'disabled toggle',
              defaultToggled: true,
              disabled: true
            })
          )
        ),
        _react2.default.createElement(
          'div',
          { style: Object.assign({}, styles.group, { marginTop: 0 }) },
          _react2.default.createElement(
            'div',
            { style: styles.container },
            _react2.default.createElement(_materialUi.TextField, {
              style: styles.textfield,
              hintText: 'TextField'
            })
          ),
          _react2.default.createElement(
            'div',
            { style: styles.container },
            _react2.default.createElement(_materialUi.DatePicker, {
              hintText: 'Landscape Dialog',
              mode: 'landscape',
              style: { width: '100%' }
            })
          ),
          _react2.default.createElement(
            'div',
            { style: styles.container },
            _react2.default.createElement(
              _materialUi.DropDownMenu,
              { value: 3, style: { width: '100%' } },
              _react2.default.createElement(_materialUi.MenuItem, { value: 1, primaryText: 'Never' }),
              _react2.default.createElement(_materialUi.MenuItem, { value: 2, primaryText: 'Every Night' }),
              _react2.default.createElement(_materialUi.MenuItem, { value: 3, primaryText: 'Weeknights' }),
              _react2.default.createElement(_materialUi.MenuItem, { value: 4, primaryText: 'Weekends' }),
              _react2.default.createElement(_materialUi.MenuItem, { value: 5, primaryText: 'Weekly' })
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { style: styles.groupSlider },
          _react2.default.createElement(_materialUi.Slider, { style: styles.slider, name: 'slider2', defaultValue: 0.5 })
        ),
        _react2.default.createElement(
          'div',
          { style: styles.group },
          _react2.default.createElement(
            'div',
            { style: styles.containerCentered },
            _react2.default.createElement(_materialUi.FlatButton, { label: 'View Dialog', onTouchTap: this.handleTouchTapDialog }),
            _react2.default.createElement(
              _materialUi.Dialog,
              {
                open: this.state.dialogOpen,
                title: 'Dialog With Standard Actions',
                actions: [_react2.default.createElement(_materialUi.FlatButton, {
                  label: 'Cancel',
                  keyboardFocused: true,
                  onTouchTap: this.handleRequestCloseDialog,
                  primary: true
                }), _react2.default.createElement(_materialUi.FlatButton, {
                  label: 'Submit',
                  onTouchTap: this.handleRequestCloseDialog,
                  primary: true
                })],
                onRequestClose: this.handleRequestCloseDialog
              },
              'The actions in this window are created from tan array of element\'s that\'s passed in.'
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { style: styles.group },
          _react2.default.createElement(
            'div',
            { style: styles.containerCentered },
            _react2.default.createElement(_materialUi.FlatButton, {
              onTouchTap: this.handleTouchTapDrawer,
              label: 'View Drawer'
            }),
            _react2.default.createElement(
              _materialUi.Drawer,
              {
                open: this.state.drawerOpen, docked: false,
                onRequestChange: this.handleRequestChangeDrawer
              },
              _react2.default.createElement(
                _materialUi.MenuItem,
                null,
                'Menu Item'
              ),
              _react2.default.createElement(
                _materialUi.MenuItem,
                null,
                'Menu Item 2'
              )
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { style: styles.group },
          _react2.default.createElement(
            'div',
            { style: styles.containerCentered },
            _react2.default.createElement(_materialUi.FlatButton, {
              onTouchTap: this.handleTouchTapSnackbar,
              label: 'View Snackbar'
            })
          ),
          _react2.default.createElement(_materialUi.Snackbar, {
            open: this.state.snackbarOpen,
            onRequestClose: this.handleRequestCloseSnackbar,
            message: 'This is a snackbar',
            action: 'Got It!',
            onActionTouchTap: this.handleRequestCloseSnackbar
          })
        )
      );
    }
  }, {
    key: 'getThemeExamples',
    value: function getThemeExamples() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _materialUi.Tabs,
          {
            value: this.state.valueTabs,
            onChange: function onChange() {}
          },
          _react2.default.createElement(_materialUi.Tab, {
            label: 'The Left Tab',
            value: 'light'
          }),
          _react2.default.createElement(_materialUi.Tab, {
            label: 'The Right Tab',
            value: 'dark'
          })
        ),
        this.getComponentGroup()
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var styles = getStyles();

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _materialUi.Paper,
          { style: styles.liveExamplePaper },
          _react2.default.createElement(
            _ClearFix2.default,
            { style: styles.liveExampleBlock },
            this.getThemeExamples()
          )
        )
      );
    }
  }]);

  return ThemesPage;
}(_react2.default.Component);

exports.default = (0, _muiThemeable2.default)()((0, _withWidth2.default)()(ThemesPage));