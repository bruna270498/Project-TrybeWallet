// Esse reducer será responsável por tratar as informações da pessoa usuária
import { ADD_PESSOAL_INFO } from '../actions';

const ESTADO_INICIAL = {
  email: '',
};

const infoPessoal = (state = ESTADO_INICIAL, action) => {
  switch (action.type) {
  case ADD_PESSOAL_INFO:
    return {
      ...state,
      ...action.payload,
    };
  default:
    return state;
  }
};

export default infoPessoal;
