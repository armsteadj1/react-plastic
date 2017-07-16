import { shallow } from 'enzyme';
import React from 'react';
import Name from './Name';
import { shrug } from '../../helpers/shrug';

let component;
let name;

beforeEach(() => {
  name = shrug.name();
  component = shallow(<Name>{name}</Name>);
});

it('will correctly format the name', () => {
  expect(component)
    .toContainReact(<div className="jp-card-name jp-card-display" >{name}</div>);
});
