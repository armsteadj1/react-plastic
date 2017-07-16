'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var classes = function classes(type) {
  return 'jp-card-logo jp-card-' + type;
};

var CardFront = function CardFront(props) {
  return _react2.default.createElement(
    'div',
    { className: 'jp-card-front' },
    _react2.default.createElement('div', { className: classes(props.type) }),
    _react2.default.createElement(
      'div',
      { className: 'jp-card-lower' },
      _react2.default.createElement('div', { className: 'jp-card-shiny' }),
      props.children
    )
  );
};

CardFront.propTypes = {
  children: _propTypes2.default.node.isRequired,
  type: _propTypes2.default.string.isRequired
};

exports.default = CardFront;