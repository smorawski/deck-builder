import { createReducer } from '@reduxjs/toolkit';
import _uniq from 'lodash/uniq';
import _without from 'lodash/without';

import {
  ADD_CARD_TO_DECK,
  REMOVE_CARD_FROM_DECK,
  CLEAR_DECK,
} from './actions';

const initialState = {
  items: [],
};

export default createReducer(initialState, {
  [ADD_CARD_TO_DECK]: (state, { payload }) => ({
    ...state,
    items: _uniq([...state.items, payload]),
  }),
  [REMOVE_CARD_FROM_DECK]: (state, { payload }) => ({
    ...state,
    items: _without(state.items, payload),
  }),
  [CLEAR_DECK]: (state) => ({
    ...state,
    items: [],
  }),
});
