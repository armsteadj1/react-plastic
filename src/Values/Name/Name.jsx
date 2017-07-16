import PropTypes from 'prop-types';
import React from 'react';

const Name = props => (
  <div className="jp-card-name jp-card-display" >{props.children}</div>
);

Name.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Name;
