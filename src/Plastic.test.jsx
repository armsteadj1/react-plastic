import { shallow } from 'enzyme';
import React from 'react';
import Plastic from './Plastic';
import Card from './Card/Card';
import { shrug } from './helpers/shrug';

let component;
let opts;

beforeEach(() => {
  opts = {
    number: shrug.cc(),
    name: shrug.name(),
    expiry: shrug.exp(),
    type: shrug.pick(['amex', 'visa', 'mastercard', 'maestro', 'discover', 'dinersclub', 'dankort']),
    cvc: shrug.string({ length: 4 }),
    back: shrug.bool(),
  };
  component = shallow(<Plastic {...opts} />);
});

it('will have all of the right wrappers for the card', () => {
  expect(component).toContainReact(
    <div className="card-wrapper" >
      <div className="jp-card-container" >
        <Card
          type={opts.type}
          name={opts.name}
          expiry={opts.expiry}
          number={opts.number}
          cvc={opts.cvc}
          back={opts.back}
        />
      </div>
    </div>);
});
