import React from 'react';
import PropTypes from 'prop-types';
import CardWrapper from '../Values/CardWrapper/CardWrapper';
import CardFront from '../Values/CardFront/CardFront';
import Cvc from '../Values/Cvc/Cvc';
import Number from '../Values/Number/Number';
import Name from '../Values/Name/Name';
import Expiry from '../Values/Expiry/Expiry';
import CardBack from '../Values/CardBack/CardBack';

const realTypes = ['amex', 'visa', 'mastercard', 'maestro', 'discover', 'dinersclub', 'dankort'];
const type = cardType => ((realTypes.includes(cardType)) ? cardType : 'unknown');

const Card = props => (
  <CardWrapper type={type(props.type)} back={props.back}>
    <CardFront type={type(props.type)}>
      <Cvc>{props.cvc}</Cvc>
      <Number amex={props.type === 'amex'}>{props.number}</Number>
      <Name >{props.name}</Name>
      <Expiry>{props.expiry}</Expiry>
    </CardFront>
    <CardBack cvc={props.cvc} />
  </CardWrapper>
);

Card.defaultProps = {
  type: 'unknown',
  cvc: '123',
  number: '1234567890123456',
  name: 'John Doe',
  expiry: '**/**',
  back: false,
};

Card.propTypes = {
  type: PropTypes.string,
  cvc: PropTypes.string,
  number: PropTypes.string,
  name: PropTypes.string,
  expiry: PropTypes.string,
  back: PropTypes.bool,
};

export default Card;
