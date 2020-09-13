import { shallow } from 'enzyme';
import React from 'react';
import { Wallet } from './Wallet';

describe('Wallet', () => {
  const mockDeposit = jest.fn();
  const mockWithdrawal = jest.fn();
  const balance = 20;

  const wallet = shallow(
    <Wallet
      balance={balance}
      makeDeposit={mockDeposit}
      makeWithdrawal={mockWithdrawal}
    />,
  );

  it('should render correctly', () => {
    expect(wallet).toMatchSnapshot();
  });

  it('should display the balance from props', () => {
    expect(wallet.find('.balance').text())
      .toEqual('Wallet Balance: 20');
  });

  it('should create an input to deposit into, or withdrawal from the balance',
    () => expect(wallet.exists('.input-wallet')).toBeTruthy());

  describe('when the user types into the wallet input', () => {
    const userBalance = '25';

    beforeEach(() => {
      wallet
        .find('.input-wallet')
        .simulate('change',
          {
            target: {
              value: userBalance,
            },
          });
    });

    it(
      'should update the local wallet balance in `state` and converts it into a number',
      () => {
        expect(wallet.state().balance).toEqual(Number(userBalance));
      },
    );

    describe('and the user wants to make a deposit', () => {
      beforeEach(() => {
        wallet.find('.btn-deposit').simulate('click');
      });

      it(
        'should dispatch the `deposit()` it receives from props with the local balance',
        () => {
          expect(mockDeposit).toHaveBeenCalledWith(Number(userBalance));
        },
      );
    });

    describe('and the user wants to make a withdrawal', () => {
      beforeEach(() => {
        wallet.find('.btn-withdrawal').simulate('click');
      });

      it(
        'should dispatch the `withdrawal()` it receives from props with the local balance',
        () => {
          expect(mockWithdrawal).toHaveBeenCalledWith(Number(userBalance));
        },
      );
    });
  });
});
