import balanceReducer from './balance';
import * as actionTypes from '../actions/actionTypes';

describe('balanceReducer', () => {
  const balance = 10;

  describe('when the action type is not defined', () => {
    it('should not set a balance', () => {
      const action = {
        type: undefined,
        balance,
      };

      expect(balanceReducer(undefined, action))
        .toEqual(0);
    });
  });

  describe('when the action type is defined', () => {
    describe('and when initializing', () => {
      it('should set a balance', () => {
        const action = {
          type: actionTypes.SET_BALANCE,
          balance,
        };

        expect(balanceReducer(undefined, action))
          .toEqual(balance);
      });

      describe('and then re-initializing', () => {
        it('should read the balance from localStorage', () => {
          expect(balanceReducer(undefined, {})).toEqual(balance);
        });
      });
    });

    it('should deposit into the balance', () => {
      const deposit = 10;
      const initialState = 5;
      const action = {
        type: actionTypes.MAKE_DEPOSIT,
        deposit,
      };

      expect(balanceReducer(initialState, action))
        .toEqual(initialState + deposit);
    });

    it('should withdrawal from the balance', () => {
      const withdrawal = 5;
      const initialState = 15;
      const action = {
        type: actionTypes.MAKE_WITHDRAWAL,
        withdrawal,
      };

      expect(balanceReducer(initialState, action))
        .toEqual(initialState - withdrawal);
    });
  });
});
