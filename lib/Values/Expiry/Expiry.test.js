'use strict';

var _enzyme = require('enzyme');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Expiry = require('./Expiry');

var _Expiry2 = _interopRequireDefault(_Expiry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

it('will format MM/YYYY correctly', function () {
  expect((0, _enzyme.shallow)(_react2.default.createElement(
    _Expiry2.default,
    null,
    '10/2020'
  ))).toContainReact(_react2.default.createElement(
    'div',
    {
      className: 'jp-card-expiry jp-card-display',
      'data-before': 'month/year',
      'data-after': 'validthru'
    },
    '10/20'
  ));
});

it('will format MM/YY correctly', function () {
  expect((0, _enzyme.shallow)(_react2.default.createElement(
    _Expiry2.default,
    null,
    '10/20'
  ))).toContainReact(_react2.default.createElement(
    'div',
    {
      className: 'jp-card-expiry jp-card-display',
      'data-before': 'month/year',
      'data-after': 'validthru'
    },
    '10/20'
  ));
});