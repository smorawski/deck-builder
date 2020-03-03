export const SET_PREVIEW = 'SET_PREVIEW';

export const setPreview = (cardName) => ({
  type: SET_PREVIEW,
  payload: cardName,
});

export const unsetPreview = () => ({
  type: SET_PREVIEW,
  payload: null,
});
