import { shallow } from 'enzyme';
import React from 'react';
import { shrug } from '../../helpers/shrug';
import CardFront from './CardBack';

let component;
let cvc;

beforeEach(() => {
  cvc = shrug.string();
  component = shallow(<CardFront cvc={cvc} />);
});

it('will correctly show the back', () => {
  expect(component)
    .toContainReact(
      <div className="jp-card-back" >
        <div className="jp-card-bar" />
        <div className="jp-card-cvc jp-card-display jp-card-valid" >{cvc}</div>
        <div className="jp-card-shiny" />
      </div>);
});
