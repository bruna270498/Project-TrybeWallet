// Coloque aqui suas actions
export const ADD_PESSOAL_INFO = 'ADD_PESSOAL_INFO';

export const addPessoal = (infoPessoal) => ({
  type: ADD_PESSOAL_INFO,
  payload: infoPessoal,
});
