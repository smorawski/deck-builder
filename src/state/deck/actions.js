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
