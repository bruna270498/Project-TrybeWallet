import React, { Component } from 'react';
import { connect } from 'react-redux';

class Table extends Component {
  render() {
    return (
      <header>
        <th>Descrição</th>
        <th>Tag</th>
        <th>Método de pagamento</th>
        <th>Valentia</th>
        <th>Moeda</th>
        <th>Câmbio utilizado</th>
        <th>Valor convertido</th>
        <th>Moeda de conversão</th>
        <th>Editar/Excluir</th>
      </header>
    );
  }
}

const mapStateToProps = (estadoGlobal) => ({ ...estadoGlobal.wallet.expenses });

export default connect(mapStateToProps)(Table);
