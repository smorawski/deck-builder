export const cardsInDeckSelector = (state) => state.deck.items;

export const isCardInDeck = (state, cardName) => state.deck.items.indexOf(cardName) >= 0;
