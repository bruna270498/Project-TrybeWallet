import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { requestApi, listaDeDespesas, ApiCompleta } from '../redux/actions';

class WalletForm extends Component {
  state = {
    id: 0,
    valor: 0,
    descricao: '',
    moeda: 'USD',
    pagamento: 'Dinheiro',
    categoria: 'Alimentação',
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
    const { id, valor, descricao, moeda, pagamento, categoria } = this.state;
    const { dispatch } = this.props;
    const resultApi = await ApiCompleta();
    const novoObj = {
      id,
      valor,
      descricao,
      moeda,
      pagamento,
      categoria,
      resultApi,
    };
    dispatch(listaDeDespesas(novoObj));
    this.setState({
      id: id + 1,
      valor: '',
      descricao: '',
      moeda: 'USD',
      pagamento: 'Dinheiro',
      categoria: 'Alimentação',
    });
  };

  render() {
    const { valor, descricao, moeda, pagamento, categoria } = this.state;
    return (
      <div>
        <form onSubmit={ this.salvarForm }>
          <label htmlFor="valor">
            Valor:
            <input
              data-testid="value-input"
              type="number"
              name="valor"
              placeholder="0"
              id="valor"
              value={ valor }
              onChange={ this.valorDeInput }
            />
          </label>
          <label htmlFor="descricao">
            Descrição:
            <input
              data-testid="description-input"
              type="text"
              name="descricao"
              value={ descricao }
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
              name="moeda"
              value={ moeda }
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
              name="pagamento"
              value={ pagamento }
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
              name="categoria"
              data-testid="tag-input"
              id="categoria"
              value={ categoria }
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
