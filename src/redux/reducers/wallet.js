// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { INFO_API, DESPESAS, VALOR_MOEDA, EXCLUIR_DESPESA } from '../actions';

const ESTADO_INICIAL = {
  currencies: [],
  expenses: [],
  total: 0,
  valorMoeda: 0,
};

const InfoRequisicao = (state = ESTADO_INICIAL, action) => {
  switch (action.type) {
  case INFO_API:
    return {
      ...state,
      currencies: action.payload,
    };
  case VALOR_MOEDA:
    return {
      ...state,
      valorMoeda: action.payload.ask,

    };
  case DESPESAS:
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
      total: state.total + (action
        .payload.value * state.valorMoeda),
    };
  case EXCLUIR_DESPESA:
    return {
      ...state,
      expenses: action.payload,
    };

  default:
    return state;
  }
};

export default InfoRequisicao;
