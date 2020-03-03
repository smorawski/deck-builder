import { combineReducers } from 'redux';
import preview from './preview/reducer';
import deck from './deck/reducer';

export default combineReducers({
  preview,
  deck,
});
