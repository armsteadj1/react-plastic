import { shallow } from 'enzyme';
import React from 'react';
import { shrug } from '../../helpers/shrug';
import Expiry from '../Expiry/Expiry';
import CardWrapper from './CardWrapper';

let component;
let children;
let cardType;

beforeEach(() => {
  children = <Expiry>string</Expiry>;
  cardType = shrug.pick(['amex', 'visa', 'mastercard']);
  component = shallow(<CardWrapper type={cardType} >{children}</CardWrapper>);
});

it('will have the correct classes for the card type', () => {
  const classes = `jp-card jp-card-identified jp-card-${cardType}`;
  expect(component)
    .toContainReact(
      <div className={classes} >
        {children}
      </div>);
});

it('will have option for flipped card', () => {
  const classes = 'jp-card jp-card-identified jp-card-flipped';
  expect(shallow(<CardWrapper back type={cardType} >{children}</CardWrapper>))
    .toContainReact(
      <div className={classes} >
        {children}
      </div>);
});
