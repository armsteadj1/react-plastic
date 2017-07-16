'use strict';

var _enzyme = require('enzyme');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Name = require('./Name');

var _Name2 = _interopRequireDefault(_Name);

var _shrug = require('../../helpers/shrug');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var component = void 0;
var name = void 0;

beforeEach(function () {
  name = _shrug.shrug.name();
  component = (0, _enzyme.shallow)(_react2.default.createElement(
    _Name2.default,
    null,
    name
  ));
});

it('will correctly format the name', function () {
  expect(component).toContainReact(_react2.default.createElement(
    'div',
    { className: 'jp-card-name jp-card-display' },
    name
  ));
});