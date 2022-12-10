import { combineReducers } from 'redux';
import infoPessoal from './user';
import InfoApi from './wallet';

const rootReducer = combineReducers({
  user: infoPessoal,
  wallet: InfoApi,

});

export default rootReducer;
