import { combineReducers } from 'redux';
import deck from './deck/reducer';
import filter from './filter/reducer';

export default combineReducers({
  deck,
  filter,
});
