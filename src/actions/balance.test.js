import * as actionTypes from './actionTypes';
import * as actions from './balance';

it('should create an action to set the balance', () => {
  const balance = 0;

  const expectedAction = { type: actionTypes.SET_BALANCE, balance };

  expect(actions.setBalance(balance)).toEqual(expectedAction);
});

it('should create an action to deposit into the balance', () => {
  const deposit = 10;

  const expectedAction = { type: actionTypes.MAKE_DEPOSIT, deposit };

  expect(actions.makeDeposit(deposit)).toEqual(expectedAction);
});

it('should create an action to withdrawal from the balance', () => {
  const withdrawal = 5;

  const expectedAction = { type: actionTypes.MAKE_WITHDRAWAL, withdrawal };

  expect(actions.makeWithdrawal(withdrawal)).toEqual(expectedAction);
});
