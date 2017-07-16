'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _CardWrapper = require('../Values/CardWrapper/CardWrapper');

var _CardWrapper2 = _interopRequireDefault(_CardWrapper);

var _CardFront = require('../Values/CardFront/CardFront');

var _CardFront2 = _interopRequireDefault(_CardFront);

var _Cvc = require('../Values/Cvc/Cvc');

var _Cvc2 = _interopRequireDefault(_Cvc);

var _Number = require('../Values/Number/Number');

var _Number2 = _interopRequireDefault(_Number);

var _Name = require('../Values/Name/Name');

var _Name2 = _interopRequireDefault(_Name);

var _Expiry = require('../Values/Expiry/Expiry');

var _Expiry2 = _interopRequireDefault(_Expiry);

var _CardBack = require('../Values/CardBack/CardBack');

var _CardBack2 = _interopRequireDefault(_CardBack);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var realTypes = ['amex', 'visa', 'mastercard', 'maestro', 'discover', 'dinersclub', 'dankort'];
var type = function type(cardType) {
  return realTypes.includes(cardType) ? cardType : 'unknown';
};

var Card = function Card(props) {
  return _react2.default.createElement(
    _CardWrapper2.default,
    { type: type(props.type), back: props.back },
    _react2.default.createElement(
      _CardFront2.default,
      { type: type(props.type) },
      _react2.default.createElement(
        _Cvc2.default,
        null,
        props.cvc
      ),
      _react2.default.createElement(
        _Number2.default,
        { amex: props.type === 'amex' },
        props.number
      ),
      _react2.default.createElement(
        _Name2.default,
        null,
        props.name
      ),
      _react2.default.createElement(
        _Expiry2.default,
        null,
        props.expiry
      )
    ),
    _react2.default.createElement(_CardBack2.default, { cvc: props.cvc })
  );
};

Card.defaultProps = {
  type: 'unknown',
  cvc: '123',
  number: '1234567890123456',
  name: 'John Doe',
  expiry: '**/**',
  back: false
};

Card.propTypes = {
  type: _propTypes2.default.string,
  cvc: _propTypes2.default.string,
  number: _propTypes2.default.string,
  name: _propTypes2.default.string,
  expiry: _propTypes2.default.string,
  back: _propTypes2.default.bool
};

exports.default = Card;