import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Wallet extends React.Component {
  render() {
    const { email } = this.props;
    const total = 0;
    return (
      <header>
        <h3 data-testid="email-field">{email}</h3>
        <span data-testid="total-field">{`Despesa Total R$${total}`}</span>
        <span data-testid="header-currency-field">BRL</span>
      </header>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};

const mapStateToProps = (estadoGlobal) => ({
  ...estadoGlobal.user,
});

export default connect(mapStateToProps)(Wallet);
