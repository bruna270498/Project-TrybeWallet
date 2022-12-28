import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { BiTrash } from 'react-icons/bi';
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
        <tr className="tab" key={ id }>
          <td className="des">{description}</td>
          <td className="tag">{tag}</td>
          <td className="pag">{method}</td>
          <td className="val">{`R$${valor.toFixed(2)}`}</td>
          <td className="moeConv">{exchangeRates[currency].name}</td>
          <td className="md">{`R$${moeda}`}</td>
          <td className="md">{`R$${multValor.toFixed(2)}`}</td>
          <td className="moeConv">Real</td>
          <td>
            {/* <button
              type="submit"
              data-testid="edit-btn"
              onClick={ () => { this.btnEditar(id); } }
            >
              Editar

            </button> */}
            <button
              type="button"
              className="btnExcluir"
              data-testid="delete-btn"
              onClick={ () => { this.botaoExcluir(id); } }
            >
              <BiTrash />

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

  btnEditar = (id) => {
    const { dispatch, expenses } = this.props;

    const l = expenses.find((e) => {
      if (e.id === id) {
        return e;
      }
    });
    console.log(l);
  };

  render() {
    return (
      <table className="table bg-primary">
        <th className="cabecalhoTabela des">Descrição</th>
        <th className="cabecalhoTabela tag">Tag</th>
        <th className="cabecalhoTabela pag">Método de pagamento</th>
        <th className="cabecalhoTabela val">Valor</th>
        <th className="cabecalhoTabela md">Moeda</th>
        <th className="cabecalhoTabela cam">Câmbio utilizado</th>
        <th className="cabecalhoTabela valCon">Valor convertido</th>
        <th className="cabecalhoTabela moeConv">Moeda de conversão</th>
        <th className="cabecalhoTabela ed">Excluir</th>
        <tbody className="tabela">
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
