import PropTypes from 'prop-types';
import React from 'react';

const Cvc = props => (
  <div className="jp-card-cvc jp-card-display" >{props.children}</div>
);

Cvc.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Cvc;
