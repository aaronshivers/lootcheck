import bitcoinReducer from './bitcoin';
import { FETCH_BITCOIN } from '../actions/actionTypes';

describe('bitcoinReducer', () => {
  const bitcoinData = { bpi: 'bitcoin price index' };

  it('should fetch and set the bitcoin data', () => {
    const state = {};
    const action = { type: FETCH_BITCOIN, bitcoin: bitcoinData };

    expect(bitcoinReducer(state, action))
      .toEqual(bitcoinData);
  });
});
