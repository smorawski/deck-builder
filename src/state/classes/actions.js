export const CHOOSE_CLASS = 'CHOOSE_CLASS';

export const chooseClass = (classKey) => ({
  type: CHOOSE_CLASS,
  payload: classKey,
});
