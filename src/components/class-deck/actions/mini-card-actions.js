import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import CardActions from './card-actions';
import {
  AddCard,
  PreviewCard,
  RemoveCard,
} from './variants';
import {
  addCard as addCardAction,
  removeCard as removeCardAction,
} from '../../../state/deck/actions';
import {
  cardsInDeckSelector,
} from '../../../state/deck/selectors';
import {
  setPreview as setPreviewAction,
} from '../../../state/preview/actions';

const MiniCardActions = ({
  cardName,
  cardsInDeck,
  addCard,
  removeCard,
  previewCard,
}) => (
  <CardActions>
    <PreviewCard onClick={() => previewCard(cardName)} />
    {
      cardsInDeck.indexOf(cardName) >= 0
        ? <RemoveCard onClick={() => removeCard(cardName)} />
        : <AddCard onClick={() => addCard(cardName)} />
    }
  </CardActions>
);

MiniCardActions.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardsInDeck: PropTypes.arrayOf(PropTypes.string).isRequired,
  addCard: PropTypes.func.isRequired,
  removeCard: PropTypes.func.isRequired,
  previewCard: PropTypes.func.isRequired,
};

export default connect(
  (state) => ({
    cardsInDeck: cardsInDeckSelector(state),
  }),
  {
    addCard: addCardAction,
    removeCard: removeCardAction,
    previewCard: setPreviewAction,
  },
)(MiniCardActions);
