'use strict';

var _enzyme = require('enzyme');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Cvc = require('./Cvc');

var _Cvc2 = _interopRequireDefault(_Cvc);

var _shrug = require('../../helpers/shrug');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var component = void 0;
var cvc = void 0;

beforeEach(function () {
  cvc = _shrug.shrug.string();
  component = (0, _enzyme.shallow)(_react2.default.createElement(
    _Cvc2.default,
    null,
    cvc
  ));
});

it('will correctly format the cvc if no spaces', function () {
  expect(component).toContainReact(_react2.default.createElement(
    'div',
    { className: 'jp-card-cvc jp-card-display' },
    cvc
  ));
});