import * as actionTypes from './actionTypes';

export const setBalance = (balance) => ({
  type: actionTypes.SET_BALANCE,
  balance,
});

export const makeDeposit = (deposit) => ({
  type: actionTypes.MAKE_DEPOSIT,
  deposit,
});

export const makeWithdrawal = (withdrawal) => ({
  type: actionTypes.MAKE_WITHDRAWAL,
  withdrawal,
});
