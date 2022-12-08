import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addPessoal } from '../redux/actions';

class Login extends React.Component {
  state = {
    email: '',
    senha: '',
    isBtnDisabled: false,
  };

  validaEmaileSenha = ({ target }) => {
    const { value, name } = target;
    this.setState({
      [name]: value,
    }, () => this.habilitarBtn());
  };

  habilitarBtn = () => {
    const { email, senha } = this.state;
    const valorMinimo = 6;
    const validaEmail = email.includes('@') && email.includes('.com');
    this.setState({
      isBtnDisabled: senha.length >= valorMinimo && validaEmail,
    });
  };

  salvarForm = (event) => {
    event.preventDefault();
    const { email } = this.state;
    const { dispatch, history } = this.props;
    console.log(dispatch)
    dispatch(addPessoal(email));
    history.push('/carteira');
  };

  render() {
    const { isBtnDisabled } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={ this.salvarForm }>
          <input
            data-testid="email-input"
            type="email"
            name="email"
            onChange={ this.validaEmaileSenha }
            placeholder="Digite seu email"
          />
          <input
            data-testid="password-input"
            type="password"
            name="senha"
            placeholder="Digite sua senha"
            onChange={ this.validaEmaileSenha }
          />
          <button
            type="submit"
            disabled={ !isBtnDisabled }
          >
            Entrar

          </button>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect()(Login);
