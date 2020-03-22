import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Actions from './actions';
import {
  AddCard,
  RemoveCard,
} from './variants';
import {
  addCard as addCardAction,
  removeCard as removeCardAction,
} from '../../../state/deck/actions';
import {
  cardsInDeckSelector,
} from '../../../state/deck/selectors';

const CardActions = ({
  cardName,
  cardsInDeck,
  addCard,
  removeCard,
}) => (
  <Actions>
    {
      cardsInDeck.indexOf(cardName) >= 0
        ? <RemoveCard onClick={() => removeCard(cardName)} />
        : <AddCard onClick={() => addCard(cardName)} />
    }
  </Actions>
);

CardActions.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardsInDeck: PropTypes.arrayOf(PropTypes.string).isRequired,
  addCard: PropTypes.func.isRequired,
  removeCard: PropTypes.func.isRequired,
};

export default connect(
  (state) => ({
    cardsInDeck: cardsInDeckSelector(state),
  }),
  {
    addCard: addCardAction,
    removeCard: removeCardAction,
  },
)(CardActions);
