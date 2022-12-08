import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { requestApi } from '../redux/actions';

class WalletForm extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(requestApi());
  }

  render() {
    const { currencies } = this.props;
    console.log(currencies);
    return (
      <div>
        <form>
          <input
            data-testid="value-input"
            type="number"
            placeholder="Valor"
          />
          <input
            data-testid="description-input"
            type="text"
            placeholder="Descrição das despesas"
          />
          <select data-testid="currency-input">
            {}
          </select>
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

const mapStateToProps = (estadoGlobal) => ({
  ...estadoGlobal.wallet,
});

export default connect(mapStateToProps)(WalletForm);
