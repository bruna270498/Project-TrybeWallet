import { combineReducers } from 'redux';
import infoPessoal from './user';
import InfoRequisicao from './wallet';

const rootReducer = combineReducers({
  user: infoPessoal,
  wallet: InfoRequisicao,

});

export default rootReducer;
