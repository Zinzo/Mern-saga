import { combineReducers } from 'redux';

import user from './user';
import board from './board';
import modal from './modal'

export default combineReducers({
  user,
  board,
  modal,
});