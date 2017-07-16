'use strict';

var _enzyme = require('enzyme');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Plastic = require('./Plastic');

var _Plastic2 = _interopRequireDefault(_Plastic);

var _Card = require('./Card/Card');

var _Card2 = _interopRequireDefault(_Card);

var _shrug = require('./helpers/shrug');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var component = void 0;
var opts = void 0;

beforeEach(function () {
  opts = {
    number: _shrug.shrug.cc(),
    name: _shrug.shrug.name(),
    expiry: _shrug.shrug.exp(),
    type: _shrug.shrug.pick(['amex', 'visa', 'mastercard', 'maestro', 'discover', 'dinersclub', 'dankort']),
    cvc: _shrug.shrug.string({ length: 4 }),
    back: _shrug.shrug.bool()
  };
  component = (0, _enzyme.shallow)(_react2.default.createElement(_Plastic2.default, opts));
});

it('will have all of the right wrappers for the card', function () {
  expect(component).toContainReact(_react2.default.createElement(
    'div',
    { className: 'card-wrapper' },
    _react2.default.createElement(
      'div',
      { className: 'jp-card-container' },
      _react2.default.createElement(_Card2.default, {
        type: opts.type,
        name: opts.name,
        expiry: opts.expiry,
        number: opts.number,
        cvc: opts.cvc,
        back: opts.back
      })
    )
  ));
});