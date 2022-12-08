// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { INFO_API } from '../actions';

const ESTADO_INICIAL = [];

const InfoApi = (state = ESTADO_INICIAL, action) => {
  switch (action.type) {
  case INFO_API:
    return {
      ...state,
      ...action.payload,
    };
  default:
    return state;
  }
};

export default InfoApi;
