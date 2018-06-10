import { shallow } from 'enzyme';
import React from 'react';
import { shrug } from '../../helpers/shrug';
import Expiry from '../Expiry/Expiry';
import CardFront from './CardFront';

let component;
let children;
let cardType;

beforeEach(() => {
  children = <Expiry>string</Expiry>;
  cardType = shrug.pick(['amex', 'visa', 'mastercard']);
  component = shallow(<CardFront type={cardType}>{children}</CardFront>);
});

it('show the front correctly', () => {
  const classes = `jp-card-logo jp-card-${cardType}`;
  expect(component).toContainReact(
    <div className="jp-card-front">
      <div className={classes}>{cardType}</div>
      <div className="jp-card-lower">
        <div className="jp-card-shiny" />
        {children}
      </div>
    </div>,
  );
});
