import PropTypes from 'prop-types';
import React from 'react';
import Card from './Card/Card';

const Plastic = props => (
  <div className="card-wrapper" >
    <div className="jp-card-container" >
      <Card
        type={props.type}
        name={props.name}
        expiry={props.expiry}
        number={props.number}
        cvc={props.cvc}
        back={props.back}
      />
    </div>
  </div>
);

Plastic.defaultProps = {
  type: undefined,
  cvc: undefined,
  number: undefined,
  name: undefined,
  expiry: undefined,
  back: false,
};

Plastic.propTypes = {
  type: PropTypes.string,
  cvc: PropTypes.string,
  number: PropTypes.string,
  name: PropTypes.string,
  expiry: PropTypes.string,
  back: PropTypes.bool,
};

export default Plastic;
