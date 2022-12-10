import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { requestApi } from '../redux/actions';

class WalletForm extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(requestApi());
  }

  moedas = () => {
    const { currencies } = this.props;
    const optionsMoeda = currencies.map((moeda, index) => (
      <option key={ index } value={ moeda }>
        {moeda}
      </option>));
    return optionsMoeda;
  };

  render() {
    return (
      <div>
        <form>
          <label htmlFor="valor">
            Valor:
            <input
              data-testid="value-input"
              type="number"
              placeholder="0"
              id="valor"
            />
          </label>
          <label htmlFor="descricao">
            Descrição:
            <input
              data-testid="description-input"
              type="text"
              placeholder="Descrição das despesas"
              id="descricao"
            />
          </label>
          <label htmlFor="moedas">
            Moeda:
            <select data-testid="currency-input" id="moedas">
              {this.moedas()}
            </select>
          </label>
          <label htmlFor="pagamento">
            Método de Pagamento:
            <select data-testid="method-input" id="pagamento">
              <option>Dinheiro</option>
              <option>Cartão de crédito</option>
              <option>Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="categoria">
            Categoria:
            <select data-testid="tag-input" id="categoria">
              <option>Alimentação</option>
              <option>Lazer</option>
              <option>Trabalho</option>
              <option>Transporte</option>
              <option>Saúde</option>
            </select>
          </label>
        </form>

      </div>
    );
  }
}

WalletForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
  currencies: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.string,
  ]).isRequired,
};

const mapStateToProps = (estadoGlobal) => ({ ...estadoGlobal.wallet });

export default connect(mapStateToProps)(WalletForm);
