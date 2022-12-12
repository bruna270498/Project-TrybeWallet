import React from 'react';
import { connect } from 'react-redux';
import WalletForm from '../components/WalletForm';
import Header from '../components/Header';
import Table from '../components/Table';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <WalletForm />
        <Table />
      </div>
    );
  }
}

const mapStateToProps = (estadoGlobal) => ({
  ...estadoGlobal.user,
  ...estadoGlobal.wallet });

export default connect(mapStateToProps)(Wallet);
