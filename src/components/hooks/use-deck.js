import _without from 'lodash/without';
import _includes from 'lodash/includes';
import { useLocation, useHistory } from 'react-router-dom';

import { decodeDeck, encodeDeck } from '../../utils/deck-encoder';

const applyDeck = (history, deckHash) => {
  history.push({
    pathname: history.location.pathname,
    search: deckHash && `?deck=${deckHash}`,
  });
};

const addCardProvider = (history, deck) => (card) => {
  try {
    const deckHash = encodeDeck([...deck, card]);
    applyDeck(history, deckHash);
  } catch (error) {
    console.error(error);
  }
};

const removeCardProvider = (history, deck) => (card) => {
  try {
    const newDeck = _without(deck, card);
    const deckHash = newDeck.length > 0 ? encodeDeck(_without(deck, card)) : '';
    applyDeck(history, deckHash);
  } catch (error) {
    console.error(error);
  }
};

const isCardInDeckProvider = (deck) => (card) => _includes(deck, card);

const deckUtilsProvider = (history, deck) => ({
  addCard: addCardProvider(history, deck),
  removeCard: removeCardProvider(history, deck),
  isCardInDeck: isCardInDeckProvider(deck),
});

export default () => {
  const location = useLocation();
  const history = useHistory();
  const query = new URLSearchParams(location.search);
  const deckHash = query.get('deck');
  let deck = [];
  if (deckHash) {
    try {
      deck = decodeDeck(deckHash);
    } catch (error) {
      console.error(error);
    }
  }

  const deckUtils = deckUtilsProvider(history, deck);

  return [deck, deckUtils];
};
