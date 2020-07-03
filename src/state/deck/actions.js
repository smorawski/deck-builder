export const ADD_CARD_TO_DECK = 'ADD_CARD_TO_DECK';

export const addCard = (cardName) => ({
  type: ADD_CARD_TO_DECK,
  payload: cardName,
});

export const REMOVE_CARD_FROM_DECK = 'REMOVE_CARD_FROM_DECK';

export const removeCard = (cardName) => ({
  type: REMOVE_CARD_FROM_DECK,
  payload: cardName,
});

export const CLEAR_DECK = 'CLEAR_DECK';

export const clearDeck = (cardName) => ({
  type: CLEAR_DECK,
  payload: cardName,
});

export const IMPORT_DECK = 'IMPORT_DECK';

export const importDeck = (classKey, deck) => ({
  type: IMPORT_DECK,
  payload: {
    deck,
    classKey,
  },
});

export const SET_CLASS_KEY = 'SET_CLASS_KEY';

export const setClassKey = (classKey) => ({
  type: SET_CLASS_KEY,
  payload: classKey,
});
