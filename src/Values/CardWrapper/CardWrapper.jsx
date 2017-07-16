import PropTypes from 'prop-types';
import React from 'react';

const backClass = (type, back) => (back ? ' jp-card-flipped' : ` jp-card-${type}`);
const classes = (type, back) => `jp-card jp-card-identified${backClass(type, back)}`;

const CardWrapper = props => (
  <div className={classes(props.type, props.back)} >
    {props.children}
  </div>);

CardWrapper.defaultProps = {
  back: false,
};

CardWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string.isRequired,
  back: PropTypes.bool,
};

export default CardWrapper;
