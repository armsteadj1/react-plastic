import { shallow } from 'enzyme';
import React from 'react';
import Expiry from './Expiry';

it('will format MM/YYYY correctly', () => {
  expect(shallow(<Expiry>10/2020</Expiry>))
    .toContainReact(
      <div
        className="jp-card-expiry jp-card-display"
        data-before="month/year"
        data-after="validthru"
      >
        10/20
      </div>);
});

it('will format MM/YY correctly', () => {
  expect(shallow(<Expiry>10/20</Expiry>))
    .toContainReact(
      <div
        className="jp-card-expiry jp-card-display"
        data-before="month/year"
        data-after="validthru"
      >
        10/20
      </div>);
});
