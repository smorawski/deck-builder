import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { DndProvider } from 'react-dnd';
import Backend from 'react-dnd-html5-backend';

import CardsList from './lists/cards-list';
import PreviewModal from './modals/preview-modals';
import ResourcesProvider from '../../resources/resource-provider';
import { abilityPropType } from '../../constants/prop-types';
import { previewSelector } from '../../state/preview/selectors';
import { unsetPreview as unsetPreviewAction } from '../../state/preview/actions';
import {
  addCard as addCardAction,
  removeCard as removeCardAction,
} from '../../state/deck/actions';


import './class-deck.css';
import { cardsInDeckSelector } from '../../state/deck/selectors';

const ClassDeck = ({
  previewAbility,
  unsetPreview,
  cardsInDeck,
  addCard,
  removeCard,
}) => {
  const { classKey } = useParams();
  const abilities = ResourcesProvider.getClassAbilities(classKey);
  return (
    <div className="classDeck">
      <DndProvider backend={Backend}>
        <div className="classDeck__availableCards">
          <CardsList
            abilities={abilities.filter(({ name }) => cardsInDeck.indexOf(name) < 0)}
            onDrop={removeCard}
          />
        </div>
        <div className="classDeck__choosedCards">
          <CardsList
            abilities={abilities.filter(({ name }) => cardsInDeck.indexOf(name) >= 0)}
            onDrop={addCard}
          />
        </div>
      </DndProvider>
      {
        !!previewAbility
        && (
          <PreviewModal
            ability={previewAbility}
            onClose={unsetPreview}
          />
        )
      }
    </div>
  );
};

ClassDeck.propTypes = {
  previewAbility: abilityPropType,
  unsetPreview: PropTypes.func.isRequired,
  cardsInDeck: PropTypes.arrayOf(PropTypes.string).isRequired,
  addCard: PropTypes.func.isRequired,
  removeCard: PropTypes.func.isRequired,
};

ClassDeck.defaultProps = {
  previewAbility: null,
};

export default connect(
  (state) => ({
    previewAbility: previewSelector(state),
    cardsInDeck: cardsInDeckSelector(state),
  }),
  { unsetPreview: unsetPreviewAction, addCard: addCardAction, removeCard: removeCardAction },
)(ClassDeck);
