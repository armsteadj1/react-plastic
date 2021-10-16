'use strict';

const rewire = require("rewire")
const _enzyme = require("enzyme")

const _react = require("react")

var _react2 = _interopRequireDefault(_react)

const _Name = require("./Name")

var _Name2 = _interopRequireDefault(_Name)

const _shrug = require("../../helpers/shrug")

const Name = rewire("./Name")
const _interopRequireDefault = Name.__get__("_interopRequireDefault")
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var component = void 0
var name = void 0

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

// @ponicode
describe("_interopRequireDefault", () => {
    test("0", () => {
        let callFunction = () => {
            _interopRequireDefault({ __esModule: "Pierre Edouard" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            _interopRequireDefault({ __esModule: "Michael" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            _interopRequireDefault({ __esModule: "George" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            _interopRequireDefault({ __esModule: "Anas" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            _interopRequireDefault({ __esModule: "Jean-Philippe" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            _interopRequireDefault(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("Name.default", () => {
    test("0", () => {
        let callFunction = () => {
            Name.default({ children: [false, true, true] })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            Name.default({ children: [true, false, true] })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            Name.default({ children: [true, true, true] })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            Name.default({ children: [false, true, false] })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            Name.default({ children: [true, true, false] })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            Name.default(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
