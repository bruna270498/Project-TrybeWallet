import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { email, total } = this.props;
    const totalInteiro = total.toFixed(2);
    return (
      <header>
        <h3 data-testid="email-field">{email}</h3>
        <span data-testid="total-field">{totalInteiro}</span>
        <span data-testid="header-currency-field">BRL</span>
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
