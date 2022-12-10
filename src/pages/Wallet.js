import React from 'react';
import { connect } from 'react-redux';
import WalletForm from '../components/WalletForm';
import Header from '../components/Header';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <WalletForm />
      </div>
    );
  }
}

const mapStateToProps = (estadoGlobal) => ({
  ...estadoGlobal.user,
  ...estadoGlobal.wallet });

export default connect(mapStateToProps)(Wallet);
