import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { RiMailLine } from 'react-icons/ri';
import { BsBag } from 'react-icons/bs';
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
    dispatch(addPessoal(email));
    history.push('/carteira');
  };

  render() {
    const { isBtnDisabled } = this.state;
    return (
      <div className="formulario">
        <h1 className="title is-1 titulo">Login</h1>
        <form onSubmit={ this.salvarForm }>
          <div className="field">
            <p className="control has-icons-left has-icons-right">

              <input
                data-testid="email-input"
                type="email"
                name="email"
                onChange={ this.validaEmaileSenha }
                placeholder="Email"
                className="input input is-large input is-rounded"
              />
              <span className="icon is-small is-left">
                <i>
                  <RiMailLine />
                </i>
              </span>
            </p>
          </div>
          <div className="field">
            <p className="control has-icons-left">
              <input
                data-testid="password-input"
                type="password"
                name="senha"
                className="input input is-large input is-rounded"
                placeholder="Password"
                onChange={ this.validaEmaileSenha }
              />
              <span className="icon is-small is-left">
                <i><BsBag /></i>
              </span>
            </p>
          </div>
          <div className="field">
            <p className="control">
              <button
                type="submit"
                className="button is-success button is-rounded button is-large"
                disabled={ !isBtnDisabled }
              >
                Entrar

              </button>
            </p>
          </div>
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
