import React from 'react';
import { connect } from 'react-redux';
import WalletForm from '../components/WalletForm';
import Header from '../components/Header';
import Table from '../components/Table';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <div className="conteinerHedear">
          <Header />
          <WalletForm />
        </div>
        <div className="tabelaConteiner">
          <Table />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (estadoGlobal) => ({
  ...estadoGlobal.user,
  ...estadoGlobal.wallet });

export default connect(mapStateToProps)(Wallet);
