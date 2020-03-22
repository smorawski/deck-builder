import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { DndProvider } from 'react-dnd';
import Backend from 'react-dnd-html5-backend';

import CardsList from './lists/cards-list';
import DeckList from './lists/deck-list';
import ResourcesProvider from '../../resources/resource-provider';
import ResourceSelectors from '../../resources/resource-selectors';
import {
  addCard as addCardAction,
  removeCard as removeCardAction,
} from '../../state/deck/actions';

import './class-deck.css';
import { cardsInDeckSelector } from '../../state/deck/selectors';
import { filterSelector } from '../../state/filter/selectors';

const ClassDeck = ({
  cardsInDeck,
  addCard,
  removeCard,
  filter,
}) => {
  const { classKey } = useParams();
  const abilities = ResourcesProvider.getClassAbilities(classKey);
  const filteredAbilities = ResourceSelectors.filterAbilities(abilities, filter);
  const tags = ResourceSelectors.selectAbilitiesTags(abilities);
  const handSize = ResourcesProvider.getClassHandSize(classKey);
  const filteredAbilitiesTags = ResourceSelectors.selectAbilitiesTags(filteredAbilities, tags);
  return (
    <div className="classDeck">
      <DndProvider backend={Backend}>
        <div className="classDeck__currentDeck">
          <DeckList
            abilities={
              cardsInDeck.map((abilityName) => abilities.find(({ name }) => abilityName === name))
            }
            onDrop={addCard}
            maxCards={handSize}
          />
        </div>
        <div className="classDeck__availableCards">
          <CardsList
            abilities={filteredAbilities}
            selectedAbilities={cardsInDeck}
            onDrop={removeCard}
            tags={filteredAbilitiesTags}
          />
        </div>
        <div id="popup-card" />
      </DndProvider>
    </div>
  );
};

ClassDeck.propTypes = {
  cardsInDeck: PropTypes.arrayOf(PropTypes.string).isRequired,
  addCard: PropTypes.func.isRequired,
  removeCard: PropTypes.func.isRequired,
  filter: PropTypes.shape({
    levels: PropTypes.arrayOf(PropTypes.string),
    tags: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default connect(
  (state) => ({
    cardsInDeck: cardsInDeckSelector(state),
    filter: filterSelector(state),
  }),
  { addCard: addCardAction, removeCard: removeCardAction },
)(ClassDeck);
