import PropTypes from 'prop-types';
import React from 'react';

const expiry = (date) => {
  const sides = date.split('/');
  const year = sides[1].substr(sides[1].length - 2, 2);
  return `${sides[0]}/${year}`;
};

const Expiry = props => (
  <div className="jp-card-expiry jp-card-display" data-before="month/year" data-after="validthru" >
    {expiry(props.children)}
  </div>
);

Expiry.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Expiry;
