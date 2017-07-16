'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var backClass = function backClass(type, back) {
  return back ? ' jp-card-flipped' : ' jp-card-' + type;
};
var classes = function classes(type, back) {
  return 'jp-card jp-card-identified' + backClass(type, back);
};

var CardWrapper = function CardWrapper(props) {
  return _react2.default.createElement(
    'div',
    { className: classes(props.type, props.back) },
    props.children
  );
};

CardWrapper.defaultProps = {
  back: false
};

CardWrapper.propTypes = {
  children: _propTypes2.default.node.isRequired,
  type: _propTypes2.default.string.isRequired,
  back: _propTypes2.default.bool
};

exports.default = CardWrapper;