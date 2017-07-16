import PropTypes from 'prop-types';
import React from 'react';

const number = (card, amex) =>
  ((amex)
    ? card.replace(/\s/g, '').replace(/(\d{0,4})(\d{0,6})(\d{0,5})/, '$1 $2 $3').trim()
    : card.replace(/\s/g, '').replace(/(.{4})/g, '$1 ').trim());

const Number = props => (
  <div className="jp-card-number jp-card-display" >{number(props.children, props.amex)}</div>
);

Number.defaultProps = {
  amex: false,
};

Number.propTypes = {
  children: PropTypes.string.isRequired,
  amex: PropTypes.bool,
};

export default Number;
