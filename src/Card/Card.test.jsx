import { shallow } from 'enzyme';
import React from 'react';
import { shrug } from '../helpers/shrug';
import Cvc from '../Values/Cvc/Cvc';
import Expiry from '../Values/Expiry/Expiry';
import Name from '../Values/Name/Name';
import Number from '../Values/Number/Number';
import Card from './Card';
import CardFront from '../Values/CardFront/CardFront';
import CardWrapper from '../Values/CardWrapper/CardWrapper';
import CardBack from '../Values/CardBack/CardBack';

let component;
let opts;

beforeEach(() => {
  opts = {
    number: shrug.cc(),
    name: shrug.name(),
    expiry: shrug.exp(),
    type: shrug.pick(['visa', 'mastercard', 'maestro', 'discover', 'dinersclub', 'dankort']),
    cvc: shrug.string({ length: 4 }),
    back: shrug.bool(),
  };
  component = shallow(<Card {...opts} />);
});

it('will pass the correct values for non amex', () => {
  expect(component).toContainReact(
    <CardWrapper type={opts.type} back={opts.back}>
      <CardFront type={opts.type}>
        <Cvc>{opts.cvc}</Cvc>
        <Number >{opts.number}</Number>
        <Name >{opts.name}</Name>
        <Expiry>{opts.expiry}</Expiry>
      </CardFront>
      <CardBack cvc={opts.cvc} />
    </CardWrapper>);
});

it('will pass the correct values for amex', () => {
  opts.type = 'amex';
  expect(shallow(<Card {...opts} />)).toContainReact(
    <CardWrapper type={opts.type} back={opts.back}>
      <CardFront type={opts.type}>
        <Cvc>{opts.cvc}</Cvc>
        <Number amex>{opts.number}</Number>
        <Name >{opts.name}</Name>
        <Expiry>{opts.expiry}</Expiry>
      </CardFront>
      <CardBack cvc={opts.cvc} />
    </CardWrapper>);
});

it('will pass generic if not supported type', () => {
  opts.type = shrug.string();
  expect(shallow(<Card {...opts} />)).toContainReact(
    <CardWrapper type="unknown" back={opts.back}>
      <CardFront type="unknown">
        <Cvc>{opts.cvc}</Cvc>
        <Number >{opts.number}</Number>
        <Name >{opts.name}</Name>
        <Expiry>{opts.expiry}</Expiry>
      </CardFront>
      <CardBack cvc={opts.cvc} />
    </CardWrapper>);
});

it('will pass defaults if undefined', () => {
  opts = {
    number: undefined,
    name: undefined,
    expiry: undefined,
    type: undefined,
    cvc: undefined,
  };
  const expiry = '**/**';
  expect(shallow(<Card {...opts} />)).toContainReact(
    <CardWrapper type="unknown" back={false}>
      <CardFront type="unknown">
        <Cvc>123</Cvc>
        <Number>1234567890123456</Number>
        <Name>John Doe</Name>
        <Expiry>{expiry}</Expiry>
      </CardFront>
      <CardBack cvc="123" />
    </CardWrapper>);
});
