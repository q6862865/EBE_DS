'use strict';

var _enzyme = require('enzyme');

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Button', function () {
  it('Should handle clicks', function () {
    var clickSpy = jest.fn();
    var component = (0, _enzyme.shallow)(React.createElement(
      _index2.default,
      { onClick: clickSpy },
      ' button '
    ));

    component.simulate('click');

    expect(clickSpy).toBeCalled();
  });
});