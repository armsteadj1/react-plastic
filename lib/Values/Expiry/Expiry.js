'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var expiry = function expiry(date) {
  var sides = date.split('/');
  var year = sides[1].substr(sides[1].length - 2, 2);
  return sides[0] + '/' + year;
};

var Expiry = function Expiry(props) {
  return _react2.default.createElement(
    'div',
    { className: 'jp-card-expiry jp-card-display', 'data-before': 'month/year', 'data-after': 'validthru' },
    expiry(props.children)
  );
};

Expiry.propTypes = {
  children: _propTypes2.default.string.isRequired
};

exports.default = Expiry;