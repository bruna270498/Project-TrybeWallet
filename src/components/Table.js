import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Table extends Component {
  tabela = () => {
    const { expenses } = this.props;
    const listaTabela = expenses.map((index) => {
      const { value, description, currency, method, tag, exchangeRates } = index;
      const cambio = +exchangeRates[currency].ask;
      const moeda = cambio.toFixed(2);
      const multValor = value * cambio;
      const valor = +value;
      return (
        <tr key={ index }>
          <td>{description}</td>
          <td>{tag}</td>
          <td>{method}</td>
          <td>{valor.toFixed(2)}</td>
          <td>{exchangeRates[currency].name}</td>
          <td>{moeda}</td>
          <td>{multValor.toFixed(2)}</td>
          <td>Real</td>
          <button type="submit">Editar</button>
          <button type="submit">Excluir</button>
        </tr>);
    });
    return listaTabela;
  };

  render() {
    return (
      <table>
        <th>Descrição</th>
        <th>Tag</th>
        <th>Método de pagamento</th>
        <th>Valentia</th>
        <th>Moeda</th>
        <th>Câmbio utilizado</th>
        <th>Valor convertido</th>
        <th>Moeda de conversão</th>
        <th>Editar/Excluir</th>
        <tbody>
          {this.tabela()}
        </tbody>
      </table>
    );
  }
}

Table.propTypes = {
  expenses: PropTypes.objectOf.isRequired,
};

const mapStateToProps = (estadoGlobal) => ({ ...estadoGlobal.wallet });

export default connect(mapStateToProps)(Table);
