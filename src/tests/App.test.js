import { screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import App from '../App';

describe('Testando a aplicação', () => {
  it('Verificando a pagina de login', () => {
    renderWithRouterAndRedux(<App />);

    const loginTitulo = screen.getByRole('heading', { name: /login/i });
    expect(loginTitulo).toBeInTheDocument();
    expect(loginTitulo.innerHTML).toBe('Login');

    const inputEmail = screen.getByRole('textbox');
    expect(inputEmail.type).toBe('email');
    expect(inputEmail).toBeInTheDocument();

    const inputSenha = screen.getByPlaceholderText(/digite sua senha/i);
    expect(inputSenha.type).toBe('password');
    expect(inputSenha).toBeInTheDocument();

    const botao = screen.getByRole('button', { name: /entrar/i });
    expect(botao).toBeInTheDocument();
    expect(botao.innerHTML).toBe('Entrar');
  });
  it('Testando que botão é habilitado quando email for digitado correto e senhar tiver acima de 6 e se ao cicar no botão muda para rota /carteira', () => {
    const { history } = renderWithRouterAndRedux(<App />);

    const inputEmail = screen.getByRole('textbox');
    const inputSenha = screen.getByPlaceholderText(/digite sua senha/i);
    const botao = screen.getByRole('button', { name: /entrar/i });

    expect(botao.disabled).toBe(true);

    fireEvent.change(inputEmail, { target: { value: 'alguem@alguem.com' } });
    fireEvent.change(inputSenha, { target: { value: '123456' } });

    userEvent.click(botao);
    expect(botao.disabled).toBe(false);

    expect(history.location.pathname).toBe('/carteira');
  });
  it('Verificando se tem o email e o total no header', () => {
    renderWithRouterAndRedux(<App />);
    const inputEmail = screen.getByRole('textbox');
    const inputSenha = screen.getByPlaceholderText(/digite sua senha/i);
    const botao = screen.getByRole('button', { name: /entrar/i });

    fireEvent.change(inputEmail, { target: { value: 'alguem@alguem.com' } });
    fireEvent.change(inputSenha, { target: { value: '123456' } });
    userEvent.click(botao);

    const email = screen.getByText(/alguem@alguem.com/i);
    expect(email).toBeInTheDocument();

    const total = screen.getByTestId('total-field');
    expect(total).toBeInTheDocument();

    const sigla = screen.getByText(/brl/i);
    expect(sigla).toBeInTheDocument();
  });
  it('Verificando se é renderizado todos os intens da tabela', () => {
    renderWithRouterAndRedux(<App />, initialEntries = ['/carteira'])
  });
});
