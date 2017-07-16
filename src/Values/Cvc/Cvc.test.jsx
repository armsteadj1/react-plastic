import { shallow } from 'enzyme';
import React from 'react';
import Cvc from './Cvc';
import { shrug } from '../../helpers/shrug';

let component;
let cvc;

beforeEach(() => {
  cvc = shrug.string();
  component = shallow(<Cvc>{cvc}</Cvc>);
});

it('will correctly format the cvc if no spaces', () => {
  expect(component)
    .toContainReact(<div className="jp-card-cvc jp-card-display" >{cvc}</div>);
});
