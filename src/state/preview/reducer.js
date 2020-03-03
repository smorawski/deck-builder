import { createReducer } from '@reduxjs/toolkit';
import ResourceProvider from '../../resources/resource-provider';

import { SET_PREVIEW } from './actions';

const initialState = {
  item: null,
};

export default createReducer(initialState, {
  [SET_PREVIEW]: (state, { payload }) => ({
    ...state,
    item: payload ? ResourceProvider.getAbility(payload) : null,
  }),
});
