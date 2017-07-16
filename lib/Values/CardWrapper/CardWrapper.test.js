'use strict';

var _enzyme = require('enzyme');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _shrug = require('../../helpers/shrug');

var _Expiry = require('../Expiry/Expiry');

var _Expiry2 = _interopRequireDefault(_Expiry);

var _CardWrapper = require('./CardWrapper');

var _CardWrapper2 = _interopRequireDefault(_CardWrapper);

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
    _CardWrapper2.default,
    { type: cardType },
    children
  ));
});

it('will have the correct classes for the card type', function () {
  var classes = 'jp-card jp-card-identified jp-card-' + cardType;
  expect(component).toContainReact(_react2.default.createElement(
    'div',
    { className: classes },
    children
  ));
});

it('will have option for flipped card', function () {
  var classes = 'jp-card jp-card-identified jp-card-flipped';
  expect((0, _enzyme.shallow)(_react2.default.createElement(
    _CardWrapper2.default,
    { back: true, type: cardType },
    children
  ))).toContainReact(_react2.default.createElement(
    'div',
    { className: classes },
    children
  ));
});