import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { requestApi,
  listaDeDespesas,
  ApiCompleta,
  moedaSelecionada }
  from '../redux/actions';

class WalletForm extends Component {
  state = {
    id: 0,
    value: '',
    description: '',
    currency: 'USD',
    method: 'Dinheiro',
    tag: 'Alimentação',
  };

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

  valorDeInput = ({ target }) => {
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
  };

  salvarForm = async (event) => {
    event.preventDefault();
    const { id, value, description, currency, method, tag } = this.state;
    const { dispatch } = this.props;
    const exchangeRates = await ApiCompleta();
    const novoObj = {
      id,
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates,
    };
    dispatch(moedaSelecionada(exchangeRates[currency]));

    dispatch(listaDeDespesas(novoObj));
    this.setState({
      id: id + 1,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    });
  };

  render() {
    const { value, description, currency, method, tag } = this.state;
    return (
      <div>
        <form onSubmit={ this.salvarForm }>
          <label htmlFor="valor">
            Valor:
            <input
              data-testid="value-input"
              type="number"
              name="value"
              placeholder="0"
              id="valor"
              value={ value }
              onChange={ this.valorDeInput }
            />
          </label>
          <label htmlFor="descricao">
            Descrição:
            <input
              data-testid="description-input"
              type="text"
              name="description"
              value={ description }
              placeholder="Descrição das despesas"
              id="descricao"
              onChange={ this.valorDeInput }
            />
          </label>
          <label htmlFor="moedas">
            Moeda:
            <select
              data-testid="currency-input"
              id="moedas"
              name="currency"
              value={ currency }
              onChange={ this.valorDeInput }
            >
              {this.moedas()}
            </select>
          </label>
          <label htmlFor="pagamento">
            Método de Pagamento:
            <select
              data-testid="method-input"
              id="pagamento"
              name="method"
              value={ method }
              onChange={ this.valorDeInput }
            >
              <option>Dinheiro</option>
              <option>Cartão de crédito</option>
              <option>Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="categoria">
            Categoria:
            <select
              onChange={ this.valorDeInput }
              name="tag"
              data-testid="tag-input"
              id="categoria"
              value={ tag }
            >
              <option>Alimentação</option>
              <option>Lazer</option>
              <option>Trabalho</option>
              <option>Transporte</option>
              <option>Saúde</option>
            </select>
          </label>
          <button
            type="submit"
            onClick={ this.valorTotal }

          >
            Adicionar despesa
          </button>
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

const mapStateToProps = (estadoGlobal) => {
  console.log(estadoGlobal);
  return { ...estadoGlobal.wallet };
};

export default connect(mapStateToProps)(WalletForm);
