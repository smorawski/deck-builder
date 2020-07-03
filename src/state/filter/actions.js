export const SET_TAG_FILTER = 'SET_TAG_FILTER';

export const setTagFilter = (name) => ({
  type: SET_TAG_FILTER,
  payload: name,
});

export const UNSET_TAG_FILTER = 'UNSET_TAG_FILTER';

export const unsetTagFilter = (name) => ({
  type: UNSET_TAG_FILTER,
  payload: name,
});

export const CLEAR_TAG_FILTER = 'CLEAR_TAG_FILTER';

export const clearTagFilter = () => ({
  type: CLEAR_TAG_FILTER,
});

export const SET_LEVEL_FILTER = 'SET_LEVEL_FILTER';

export const setLevelFilter = (level) => ({
  type: SET_LEVEL_FILTER,
  payload: level,
});

export const UNSET_LEVEL_FILTER = 'UNSET_LEVEL_FILTER';

export const unsetLevelFilter = (level) => ({
  type: UNSET_LEVEL_FILTER,
  payload: level,
});

export const CLEAR_LEVEL_FILTER = 'CLEAR_LEVEL_FILTER';

export const clearLevelFilter = () => ({
  type: CLEAR_LEVEL_FILTER,
});

export const SET_SEARCH_FILTER = 'SET_SEARCH_FILTER';

export const setSearchFilter = (term) => ({
  type: SET_SEARCH_FILTER,
  payload: term,
});

export const CLEAR_SEARCH_FILTER = 'CLEAR_SEARCH_FILTER';

export const clearSearchFilter = () => ({
  type: SET_SEARCH_FILTER,
  payload: '',
});
