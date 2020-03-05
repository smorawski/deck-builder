import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import CardActions from './card-actions';
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

const PreviewCardActions = ({
  cardName,
  cardsInDeck,
  addCard,
  removeCard,
  onClick,
}) => {
  const callback = () => {
    if (onClick) {
      onClick(cardName);
    }
  };

  return (
    <CardActions big>
      {
        cardsInDeck.indexOf(cardName) >= 0
          ? (
            <RemoveCard
              onClick={() => {
                removeCard(cardName);
                callback();
              }}
            />
          )
          : (
            <AddCard
              onClick={() => {
                addCard(cardName);
                callback();
              }}
            />
          )
      }
    </CardActions>
  );
};

PreviewCardActions.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardsInDeck: PropTypes.arrayOf(PropTypes.string).isRequired,
  addCard: PropTypes.func.isRequired,
  removeCard: PropTypes.func.isRequired,
  onClick: PropTypes.func,
};

PreviewCardActions.defaultProps = {
  onClick: null,
};

export default connect(
  (state) => ({
    cardsInDeck: cardsInDeckSelector(state),
  }),
  {
    addCard: addCardAction,
    removeCard: removeCardAction,
  },
)(PreviewCardActions);
