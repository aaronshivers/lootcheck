import rootReducer from './index';

describe('rootReducer', () => {
  it('should initialize the default state', () => {
    const state = {};
    const action = {};
    const expected = { balance: 0, bitcoin: {} };

    expect(rootReducer(state, action)).toEqual(expected);
  });
});
