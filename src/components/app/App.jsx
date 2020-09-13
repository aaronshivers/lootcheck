import React from 'react';
import WalletComponent from '../wallet/Wallet';
import LootComponent from '../loot/Loot';

const App = () => (
  <div>
    <h1>Loot Check</h1>
    <hr />
    <WalletComponent />
    <hr />
    <LootComponent />
    <a
      href="https://www.coindesk.com/price/bitcoin"
      target="_blank"
      rel="noreferrer"
    >
      Powered by CoinDesk
    </a>
  </div>
);

App.propTypes = {};

export default App;
