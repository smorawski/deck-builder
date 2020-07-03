import { createReducer } from '@reduxjs/toolkit';
import _uniq from 'lodash/uniq';
import _without from 'lodash/without';

import {
  SET_TAG_FILTER,
  UNSET_TAG_FILTER,
  CLEAR_TAG_FILTER,
  SET_LEVEL_FILTER,
  UNSET_LEVEL_FILTER,
  CLEAR_LEVEL_FILTER,
  SET_SEARCH_FILTER,
} from './actions';

const initialState = {
  tags: [],
  levels: ['1', 'X'],
  search: '',
};

export default createReducer(initialState, {
  [SET_TAG_FILTER]: (state, { payload: name }) => ({
    ...state,
    tags: _uniq([...state.tags, name]),
  }),
  [UNSET_TAG_FILTER]: (state, { payload: name }) => ({
    ...state,
    tags: _without(state.tags, name),
  }),
  [CLEAR_TAG_FILTER]: (state) => ({
    ...state,
    tags: [],
  }),
  [SET_LEVEL_FILTER]: (state, { payload: level }) => ({
    ...state,
    levels: _uniq([...state.levels, level]),
  }),
  [UNSET_LEVEL_FILTER]: (state, { payload: level }) => ({
    ...state,
    levels: _without(state.levels, level),
  }),
  [CLEAR_LEVEL_FILTER]: (state) => ({
    ...state,
    levels: [],
  }),
  [SET_SEARCH_FILTER]: (state, { payload: search }) => ({
    ...state,
    search,
  }),
});
