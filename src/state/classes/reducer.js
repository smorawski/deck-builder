import { createReducer } from '@reduxjs/toolkit';
import { CHOOSE_CLASS } from './actions';

const initialState = {
  selectedClass: null,
};

export default createReducer(initialState, {
  [CHOOSE_CLASS]: (state, { payload }) => ({
    ...state,
    selectedClass: payload,
  }),
});
