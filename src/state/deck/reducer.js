import { createReducer } from '@reduxjs/toolkit';
import _uniq from 'lodash/uniq';
import _without from 'lodash/without';

import {
  ADD_CARD_TO_DECK,
  REMOVE_CARD_FROM_DECK,
  CLEAR_DECK,
  IMPORT_DECK,
  SET_CLASS_KEY,
} from './actions';

const initialState = {
  items: [],
  classKey: null,
};

export default createReducer(initialState, {
  [SET_CLASS_KEY]: (state, { payload }) => ({
    ...state,
    classKey: payload,
    items: state.classKey !== payload ? [] : state.items,
  }),
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
  [IMPORT_DECK]: (state, { payload: { deck, classKey } }) => ({
    ...state,
    classKey,
    items: deck,
  }),
});
