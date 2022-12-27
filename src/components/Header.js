import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { BiCoinStack, BiUser } from 'react-icons/bi';
import imgLogo from './dinheiro.jpeg';

class Header extends Component {
  render() {
    const { email, total } = this.props;
    const totalInteiro = total.toFixed(2);
    return (
      <header className="cabeçalho">
        <img className="dinheiroImg" src={ imgLogo } alt="dinheiro" />
        <span className="tituloTabela">Trybe</span>
        <span className="subtitleTabela">Wallet</span>
        <div>
          <i className="moedaincon"><BiCoinStack /></i>
          <span
            className="moeda"
            data-testid="total-field"
          >
            {`Total de despesas: ${totalInteiro}BRL`}

          </span>
          {/* <span className="moeda" data-testid="header-currency-field">BRL</span> */}
        </div>
        <div>
          <i className="emailincon"><BiUser /></i>
          <span className="emaill" data-testid="email-field">{email}</span>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
};

const mapStateToProps = (estadoGlobal) => ({
  ...estadoGlobal.user,
  ...estadoGlobal.wallet });

export default connect(mapStateToProps)(Header);
