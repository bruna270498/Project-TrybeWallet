// Coloque aqui suas actions
export const ADD_PESSOAL_INFO = 'ADD_PESSOAL_INFO';
export const INFO_API = 'INFO_API';
export const DESPESAS = 'DESPESAS';

export const addPessoal = (infoPessoal) => ({
  type: ADD_PESSOAL_INFO,
  payload: infoPessoal,
});

export const request = (infoApi) => ({
  type: INFO_API,
  payload: infoApi,

});

export const listaDeDespesas = (despesa) => ({
  type: DESPESAS,
  payload: despesa,
});

export const requestApi = () => async (dispatch) => {
  const resultado = await fetch('https://economia.awesomeapi.com.br/json/all');
  const json = await resultado.json();
  const currencies = Object.keys(json).filter((currency) => currency !== 'USDT');
  dispatch(request(currencies));
};

export const ApiCompleta = async () => {
  const resultado = await fetch('https://economia.awesomeapi.com.br/json/all');
  const json = await resultado.json();
  return json;
};
