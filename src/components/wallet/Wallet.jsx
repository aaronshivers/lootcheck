import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { makeDeposit, makeWithdrawal } from '../../actions/balance';

export class Wallet extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      balance: undefined,
    };
  }

  updateBalance = (event) => {
    this.setState({ balance: Number(event.target.value) });
  };

  handleDeposit = () => {
    const { makeDeposit: makeDepositFromProps } = this.props;
    const { balance } = this.state;
    return makeDepositFromProps(balance);
  }

  handleWithdrawal = () => {
    const { makeWithdrawal: makeWithdrawalFromProps } = this.props;
    const { balance } = this.state;
    return makeWithdrawalFromProps(balance);
  }

  render() {
    const { balance } = this.props;

    return (
      <div>
        <h2 className="balance">
          {['Wallet Balance: ', balance]}
        </h2>
        <br />
        <input type="text" className="input-wallet" onChange={this.updateBalance} />
        <button type="button" className="btn-deposit" onClick={this.handleDeposit}>
          Deposit
        </button>
        <button type="button" className="btn-withdrawal" onClick={this.handleWithdrawal}>
          Withdrawal
        </button>
      </div>
    );
  }
}

Wallet.propTypes = {
  balance: PropTypes.number.isRequired,
  makeDeposit: PropTypes.func.isRequired,
  makeWithdrawal: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({ balance: state.balance });
const mapDispatchToProps = { makeDeposit, makeWithdrawal };

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
