// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { INFO_API, DESPESAS } from '../actions';

const ESTADO_INICIAL = {
  currencies: [],
  expenses: [],
  total: 0,
};

const InfoRequisicao = (state = ESTADO_INICIAL, action) => {
  switch (action.type) {
  case INFO_API:
    return {
      ...state,
      currencies: action.payload,
    };
  case DESPESAS:
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
      total: state.total + (action
        .payload.valor * action.payload.resultApi[action.payload.moeda].ask),
    };

  default:
    return state;
  }
};

export default InfoRequisicao;
