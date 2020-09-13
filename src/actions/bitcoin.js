import { FETCH_BITCOIN } from './actionTypes';

const url = 'https://api.coindesk.com/v1/bpi/currentprice.json';

export const fetchBitcoin = () => async (dispatch) => {
  const response = await fetch(url);
  const json = await response.json();
  dispatch({ type: FETCH_BITCOIN, bitcoin: json });
};
