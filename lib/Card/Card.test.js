'use strict';

var _enzyme = require('enzyme');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _shrug = require('../helpers/shrug');

var _Cvc = require('../Values/Cvc/Cvc');

var _Cvc2 = _interopRequireDefault(_Cvc);

var _Expiry = require('../Values/Expiry/Expiry');

var _Expiry2 = _interopRequireDefault(_Expiry);

var _Name = require('../Values/Name/Name');

var _Name2 = _interopRequireDefault(_Name);

var _Number = require('../Values/Number/Number');

var _Number2 = _interopRequireDefault(_Number);

var _Card = require('./Card');

var _Card2 = _interopRequireDefault(_Card);

var _CardFront = require('../Values/CardFront/CardFront');

var _CardFront2 = _interopRequireDefault(_CardFront);

var _CardWrapper = require('../Values/CardWrapper/CardWrapper');

var _CardWrapper2 = _interopRequireDefault(_CardWrapper);

var _CardBack = require('../Values/CardBack/CardBack');

var _CardBack2 = _interopRequireDefault(_CardBack);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var component = void 0;
var opts = void 0;

beforeEach(function () {
  opts = {
    number: _shrug.shrug.cc(),
    name: _shrug.shrug.name(),
    expiry: _shrug.shrug.exp(),
    type: _shrug.shrug.pick(['visa', 'mastercard', 'maestro', 'discover', 'dinersclub', 'dankort']),
    cvc: _shrug.shrug.string({ length: 4 }),
    back: _shrug.shrug.bool()
  };
  component = (0, _enzyme.shallow)(_react2.default.createElement(_Card2.default, opts));
});

it('will pass the correct values for non amex', function () {
  expect(component).toContainReact(_react2.default.createElement(
    _CardWrapper2.default,
    { type: opts.type, back: opts.back },
    _react2.default.createElement(
      _CardFront2.default,
      { type: opts.type },
      _react2.default.createElement(
        _Cvc2.default,
        null,
        opts.cvc
      ),
      _react2.default.createElement(
        _Number2.default,
        null,
        opts.number
      ),
      _react2.default.createElement(
        _Name2.default,
        null,
        opts.name
      ),
      _react2.default.createElement(
        _Expiry2.default,
        null,
        opts.expiry
      )
    ),
    _react2.default.createElement(_CardBack2.default, { cvc: opts.cvc })
  ));
});

it('will pass the correct values for amex', function () {
  opts.type = 'amex';
  expect((0, _enzyme.shallow)(_react2.default.createElement(_Card2.default, opts))).toContainReact(_react2.default.createElement(
    _CardWrapper2.default,
    { type: opts.type, back: opts.back },
    _react2.default.createElement(
      _CardFront2.default,
      { type: opts.type },
      _react2.default.createElement(
        _Cvc2.default,
        null,
        opts.cvc
      ),
      _react2.default.createElement(
        _Number2.default,
        { amex: true },
        opts.number
      ),
      _react2.default.createElement(
        _Name2.default,
        null,
        opts.name
      ),
      _react2.default.createElement(
        _Expiry2.default,
        null,
        opts.expiry
      )
    ),
    _react2.default.createElement(_CardBack2.default, { cvc: opts.cvc })
  ));
});

it('will pass generic if not supported type', function () {
  opts.type = _shrug.shrug.string();
  expect((0, _enzyme.shallow)(_react2.default.createElement(_Card2.default, opts))).toContainReact(_react2.default.createElement(
    _CardWrapper2.default,
    { type: 'unknown', back: opts.back },
    _react2.default.createElement(
      _CardFront2.default,
      { type: 'unknown' },
      _react2.default.createElement(
        _Cvc2.default,
        null,
        opts.cvc
      ),
      _react2.default.createElement(
        _Number2.default,
        null,
        opts.number
      ),
      _react2.default.createElement(
        _Name2.default,
        null,
        opts.name
      ),
      _react2.default.createElement(
        _Expiry2.default,
        null,
        opts.expiry
      )
    ),
    _react2.default.createElement(_CardBack2.default, { cvc: opts.cvc })
  ));
});

it('will pass defaults if undefined', function () {
  opts = {
    number: undefined,
    name: undefined,
    expiry: undefined,
    type: undefined,
    cvc: undefined
  };
  var expiry = '**/**';
  expect((0, _enzyme.shallow)(_react2.default.createElement(_Card2.default, opts))).toContainReact(_react2.default.createElement(
    _CardWrapper2.default,
    { type: 'unknown', back: false },
    _react2.default.createElement(
      _CardFront2.default,
      { type: 'unknown' },
      _react2.default.createElement(
        _Cvc2.default,
        null,
        '123'
      ),
      _react2.default.createElement(
        _Number2.default,
        null,
        '1234567890123456'
      ),
      _react2.default.createElement(
        _Name2.default,
        null,
        'John Doe'
      ),
      _react2.default.createElement(
        _Expiry2.default,
        null,
        expiry
      )
    ),
    _react2.default.createElement(_CardBack2.default, { cvc: '123' })
  ));
});