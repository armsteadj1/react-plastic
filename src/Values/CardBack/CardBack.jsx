import PropTypes from 'prop-types';
import React from 'react';

const CardBack = props => (
  <div className="jp-card-back" >
    <div className="jp-card-bar" />
    <div className="jp-card-cvc jp-card-display jp-card-valid" >{props.cvc}</div>
    <div className="jp-card-shiny" />
  </div>);

CardBack.propTypes = {
  cvc: PropTypes.string.isRequired,
};

export default CardBack;
