import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  const app = shallow(<App />);

  it('should render correctly', () => {
    expect(app).toMatchSnapshot();
  });

  it('should contain a connected Wallet component', () => {
    expect(app.exists('Connect(Wallet)')).toBeTruthy();
  });

  it('should contain a connected Loot component', () => {
    expect(app.exists('Connect(Loot)')).toBeTruthy();
  });

  it('should contain a link to the coindesk price page', () => {
    const message = 'Powered by CoinDesk';
    const url = 'https://www.coindesk.com/price/bitcoin';
    expect(app.find('a').text()).toBe(message);
    expect(app.find('a').props().href).toBe(url);
  });
});
