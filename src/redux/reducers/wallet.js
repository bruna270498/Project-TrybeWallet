// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { INFO_API } from '../actions';

const ESTADO_INICIAL = {
  currencies: [],
};

const InfoApi = (state = ESTADO_INICIAL, action) => {
  switch (action.type) {
  case INFO_API:
    return {
      ...state,
      currencies: action.payload,
    };
  default:
    return state;
  }
};

export default InfoApi;
