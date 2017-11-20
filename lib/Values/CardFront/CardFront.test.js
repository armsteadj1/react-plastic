'use strict';

var _enzyme = require('enzyme');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _shrug = require('../../helpers/shrug');

var _Expiry = require('../Expiry/Expiry');

var _Expiry2 = _interopRequireDefault(_Expiry);

var _CardFront = require('./CardFront');

var _CardFront2 = _interopRequireDefault(_CardFront);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var component = void 0;
var children = void 0;
var cardType = void 0;

beforeEach(function () {
  children = _react2.default.createElement(
    _Expiry2.default,
    null,
    'string'
  );
  cardType = _shrug.shrug.pick(['amex', 'visa', 'mastercard']);
  component = (0, _enzyme.shallow)(_react2.default.createElement(
    _CardFront2.default,
    { type: cardType },
    children
  ));
});

it('show the front correctly', function () {
  var classes = 'jp-card-logo jp-card-' + cardType;
  expect(component).toContainReact(_react2.default.createElement(
    'div',
    { className: 'jp-card-front' },
    _react2.default.createElement(
      'div',
      { className: classes },
      cardType
    ),
    _react2.default.createElement(
      'div',
      { className: 'jp-card-lower' },
      _react2.default.createElement('div', { className: 'jp-card-shiny' }),
      children
    )
  ));
});