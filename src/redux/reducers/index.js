import { combineReducers } from 'redux';
import infoPessoal from './user';

const rootReducer = combineReducers({
  user: infoPessoal,
});

export default rootReducer;
