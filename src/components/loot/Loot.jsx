import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchBitcoin } from '../../actions/bitcoin';

export const Loot = ({ fetchBitcoin: fetchBitcoinFromProps, bitcoin, balance }) => {
  useEffect(() => {
    fetchBitcoinFromProps();
  });

  const computeBitcoin = () => {
    if (Object.keys(bitcoin).length === 0) return '';

    return balance / Number(bitcoin.bpi.USD.rate.replace(/,/g, ''));
  };

  return (
    <div>
      <h2>
        {['Bitcoin Balance: ', computeBitcoin()]}
      </h2>
    </div>
  );
};

Loot.defaultProps = {
  fetchBitcoin: null,
};

Loot.propTypes = {
  fetchBitcoin: PropTypes.func,
  bitcoin: PropTypes.exact({
    bpi: PropTypes.object,
    chartName: PropTypes.string,
    disclaimer: PropTypes.string,
    time: PropTypes.object,
  }).isRequired,
};

const mapStateToProps = (state) => state;
const mapDispatchToProps = { fetchBitcoin };

export default connect(mapStateToProps, mapDispatchToProps)(Loot);
