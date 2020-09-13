import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock-jest';
import { FETCH_BITCOIN } from './actionTypes';
import { fetchBitcoin } from './bitcoin';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initialState = { bitcoin: {} };
const store = mockStore(initialState);

const mockResponse = { body: { bpi: 'bitcoin price index' } };

const url = 'https://api.coindesk.com/v1/bpi/currentprice.json';

fetchMock.get(url, mockResponse);

it('should create an async action to fetch the bitcoin value', async () => {
  const expectedActions = [{ bitcoin: mockResponse.body, type: FETCH_BITCOIN }];

  await store.dispatch(fetchBitcoin());
  expect(store.getActions()).toEqual(expectedActions);
});
