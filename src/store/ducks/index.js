import { combineReducers } from 'redux';

import nav from './../../navigation/reducer';
import app from './app';

export default combineReducers({
  nav,
  app,
});
