import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { atualizarTotal, exluirDespesadeTabela } from '../redux/actions';

class Table extends Component {
  tabela = () => {
    const { expenses } = this.props;
    const listaTabela = expenses.map((index) => {
      const { id, value, description, currency, method, tag, exchangeRates } = index;
      const cambio = +exchangeRates[currency].ask;
      const moeda = cambio.toFixed(2);
      const multValor = value * cambio;
      const valor = +value;
      return (
        <tr key={ id }>
          <td>{description}</td>
          <td>{tag}</td>
          <td>{method}</td>
          <td>{valor.toFixed(2)}</td>
          <td>{exchangeRates[currency].name}</td>
          <td>{moeda}</td>
          <td>{multValor.toFixed(2)}</td>
          <td>Real</td>
          <td>
            <button type="submit">Editar</button>
            <button
              type="button"
              data-testid="delete-btn"
              onClick={ () => { this.botaoExcluir(id); } }
            >
              Excluir

            </button>
          </td>
        </tr>);
    });
    return listaTabela;
  };

  botaoExcluir = (id) => {
    const { expenses, dispatch } = this.props;

    dispatch(exluirDespesadeTabela(id, expenses));
    dispatch(atualizarTotal());
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
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (estadoGlobal) => ({ ...estadoGlobal.wallet });

export default connect(mapStateToProps)(Table);
