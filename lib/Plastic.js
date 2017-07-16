'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Card = require('./Card/Card');

var _Card2 = _interopRequireDefault(_Card);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Plastic = function Plastic(props) {
  return _react2.default.createElement(
    'div',
    { className: 'card-wrapper' },
    _react2.default.createElement(
      'div',
      { className: 'jp-card-container' },
      _react2.default.createElement(_Card2.default, {
        type: props.type,
        name: props.name,
        expiry: props.expiry,
        number: props.number,
        cvc: props.cvc,
        back: props.back
      })
    )
  );
};

Plastic.defaultProps = {
  type: undefined,
  cvc: undefined,
  number: undefined,
  name: undefined,
  expiry: undefined,
  back: false
};

Plastic.propTypes = {
  type: _propTypes2.default.string,
  cvc: _propTypes2.default.string,
  number: _propTypes2.default.string,
  name: _propTypes2.default.string,
  expiry: _propTypes2.default.string,
  back: _propTypes2.default.bool
};

exports.default = Plastic;