'use strict';

var _enzyme = require('enzyme');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _shrug = require('../../helpers/shrug');

var _CardBack = require('./CardBack');

var _CardBack2 = _interopRequireDefault(_CardBack);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var component = void 0;
var cvc = void 0;

beforeEach(function () {
  cvc = _shrug.shrug.string();
  component = (0, _enzyme.shallow)(_react2.default.createElement(_CardBack2.default, { cvc: cvc }));
});

it('will correctly show the back', function () {
  expect(component).toContainReact(_react2.default.createElement(
    'div',
    { className: 'jp-card-back' },
    _react2.default.createElement('div', { className: 'jp-card-bar' }),
    _react2.default.createElement(
      'div',
      { className: 'jp-card-cvc jp-card-display jp-card-valid' },
      cvc
    ),
    _react2.default.createElement('div', { className: 'jp-card-shiny' })
  ));
});