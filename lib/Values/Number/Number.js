'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var number = function number(card, amex) {
  return amex ? card.replace(/\s/g, '').replace(/(\d{0,4})(\d{0,6})(\d{0,5})/, '$1 $2 $3').trim() : card.replace(/\s/g, '').replace(/(.{4})/g, '$1 ').trim();
};

var Number = function Number(props) {
  return _react2.default.createElement(
    'div',
    { className: 'jp-card-number jp-card-display' },
    number(props.children, props.amex)
  );
};

Number.defaultProps = {
  amex: false
};

Number.propTypes = {
  children: _propTypes2.default.string.isRequired,
  amex: _propTypes2.default.bool
};

exports.default = Number;