import PropTypes from 'prop-types';
import React from 'react';

const classes = type => `jp-card-logo jp-card-${type}`;

const CardFront = props => (
  <div className="jp-card-front" >
    <div className={classes(props.type)} />
    <div className="jp-card-lower" >
      <div className="jp-card-shiny" />
      {props.children}
    </div>
  </div>);

CardFront.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string.isRequired,
};

export default CardFront;
