'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CardBack = function CardBack(props) {
  return _react2.default.createElement(
    'div',
    { className: 'jp-card-back' },
    _react2.default.createElement('div', { className: 'jp-card-bar' }),
    _react2.default.createElement(
      'div',
      { className: 'jp-card-cvc jp-card-display jp-card-valid' },
      props.cvc
    ),
    _react2.default.createElement('div', { className: 'jp-card-shiny' })
  );
};

CardBack.propTypes = {
  cvc: _propTypes2.default.string.isRequired
};

exports.default = CardBack;