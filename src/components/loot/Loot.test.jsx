import React from 'react';
import {
  mount,
  shallow,
} from 'enzyme';
import { Loot } from './Loot';

describe('Loot', () => {
  const mockFetchBitcoin = jest.fn();
  const balance = 10;
  let bitcoin = {};
  const fetchBitcoin = mockFetchBitcoin;

  let loot = shallow(
    <Loot
      balance={balance}
      bitcoin={bitcoin}
    />,
  );

  it('should render correctly', () => {
    expect(loot).toMatchSnapshot();
  });

  describe('when mounted', () => {
    beforeEach(() => {
      loot = mount(<Loot
        balance={balance}
        bitcoin={bitcoin}
        fetchBitcoin={fetchBitcoin}
      />);
    });

    it('should dispatch the `fetchBitcoin()` method it receives from props',
      () => {
        expect(mockFetchBitcoin).toHaveBeenCalled();
      });

    describe('when there are valid bitcoin props', () => {
      beforeEach(() => {
        bitcoin = { bpi: { USD: { rate: '1000' } } };
        loot = shallow(
          <Loot
            balance={balance}
            bitcoin={bitcoin}
          />,
        );
      });

      it('should display the correct bitcoin value', () => {
        expect(loot.find('h2').text())
          .toEqual('Bitcoin Balance: 0.01');
      });
    });
  });
});
