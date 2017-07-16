'use strict';

var _enzyme = require('enzyme');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Number = require('./Number');

var _Number2 = _interopRequireDefault(_Number);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('not amex', function () {
  it('will correctly format the card if no spaces', function () {
    expect((0, _enzyme.shallow)(_react2.default.createElement(
      _Number2.default,
      null,
      '1111000011110000'
    ))).toContainReact(_react2.default.createElement(
      'div',
      { className: 'jp-card-number jp-card-display' },
      '1111 0000 1111 0000'
    ));
  });

  it('will correctly format the card if random spaces', function () {
    expect((0, _enzyme.shallow)(_react2.default.createElement(
      _Number2.default,
      null,
      '21 1 10 0001 111 0 00 0'
    ))).toContainReact(_react2.default.createElement(
      'div',
      { className: 'jp-card-number jp-card-display' },
      '2111 0000 1111 0000'
    ));
  });

  it('wont blow up if not full card', function () {
    expect((0, _enzyme.shallow)(_react2.default.createElement(
      _Number2.default,
      null,
      '21 1 '
    ))).toContainReact(_react2.default.createElement(
      'div',
      { className: 'jp-card-number jp-card-display' },
      '211'
    ));
  });
});

describe('amex', function () {
  it('will correctly format the card if no spaces', function () {
    expect((0, _enzyme.shallow)(_react2.default.createElement(
      _Number2.default,
      { amex: true },
      '111100011110000'
    ))).toContainReact(_react2.default.createElement(
      'div',
      { className: 'jp-card-number jp-card-display' },
      '1111 000111 10000'
    ));
  });

  it('will correctly format the card if random spaces', function () {
    expect((0, _enzyme.shallow)(_react2.default.createElement(
      _Number2.default,
      { amex: true },
      '21 1 10 001 111 0 00 0'
    ))).toContainReact(_react2.default.createElement(
      'div',
      { className: 'jp-card-number jp-card-display' },
      '2111 000111 10000'
    ));
  });

  it('wont blow up if not full card', function () {
    expect((0, _enzyme.shallow)(_react2.default.createElement(
      _Number2.default,
      { amex: true },
      '21 11 1 '
    ))).toContainReact(_react2.default.createElement(
      'div',
      { className: 'jp-card-number jp-card-display' },
      '2111 1'
    ));
  });
});