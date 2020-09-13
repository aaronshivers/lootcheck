import * as actionTypes from '../actions/actionTypes';

const balanceReducer = (state = 0, action) => {
  let balance;

  switch (action.type) {
    case actionTypes.SET_BALANCE:
      balance = action.balance;
      break;
    case actionTypes.MAKE_DEPOSIT:
      balance = state + action.deposit;
      break;
    case actionTypes.MAKE_WITHDRAWAL:
      balance = state - action.withdrawal;
      break;
    default:
      balance = Number(localStorage.getItem('balance')) || state;
  }

  localStorage.setItem('balance', JSON.stringify(balance));

  return balance;
};

export default balanceReducer;
