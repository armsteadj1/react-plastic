import { shallow } from 'enzyme';
import React from 'react';
import Number from './Number';


describe('not amex', () => {
  it('will correctly format the card if no spaces', () => {
    expect(shallow(<Number>1111000011110000</Number>))
      .toContainReact(<div className="jp-card-number jp-card-display" >1111 0000 1111 0000</div>);
  });

  it('will correctly format the card if random spaces', () => {
    expect(shallow(<Number>21 1 10 0001 111 0 00 0</Number>))
      .toContainReact(<div className="jp-card-number jp-card-display" >2111 0000 1111 0000</div>);
  });

  it('wont blow up if not full card', () => {
    expect(shallow(<Number>21 1 </Number>))
      .toContainReact(<div className="jp-card-number jp-card-display" >211</div>);
  });
});

describe('amex', () => {
  it('will correctly format the card if no spaces', () => {
    expect(shallow(<Number amex>111100011110000</Number>))
      .toContainReact(<div className="jp-card-number jp-card-display" >1111 000111 10000</div>);
  });

  it('will correctly format the card if random spaces', () => {
    expect(shallow(<Number amex>21 1 10 001 111 0 00 0</Number>))
      .toContainReact(<div className="jp-card-number jp-card-display" >2111 000111 10000</div>);
  });

  it('wont blow up if not full card', () => {
    expect(shallow(<Number amex>21 11 1 </Number>))
      .toContainReact(<div className="jp-card-number jp-card-display" >2111 1</div>);
  });
});
