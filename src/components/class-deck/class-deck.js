import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import classnames from 'classnames';

import MobileMenu from './mobile-menu';
import CardsList from './lists/cards-list';
import DeckList from './lists/deck-list';
import ResourcesProvider from '../../resources/resource-provider';
import ResourceSelectors from '../../resources/resource-selectors';
import {
  addCard as addCardAction,
  removeCard as removeCardAction,
  setClassKey as setClassKeyAction,
} from '../../state/deck/actions';
import { cardsInDeckSelector } from '../../state/deck/selectors';
import { filterSelector } from '../../state/filter/selectors';

import './class-deck.css';

const TABS = {
  DECK: 'deck',
  ALL: 'all',
};

const ClassDeck = ({
  cardsInDeck,
  addCard,
  removeCard,
  setClassKey,
  filter,
}) => {
  const { classKey } = useParams();
  setClassKey(classKey);
  const [activeWindow, setActiveTab] = useState(TABS.ALL);
  const inactiveWindow = activeWindow === TABS.DECK ? TABS.ALL : TABS.DECK;
  const abilities = ResourcesProvider.getClassAbilities(classKey);
  const filteredAbilities = ResourceSelectors.filterAbilities(abilities, filter);
  const tags = ResourceSelectors.selectAbilitiesTags(abilities);
  const handSize = ResourcesProvider.getClassHandSize(classKey);
  const filteredAbilitiesTags = ResourceSelectors.selectAbilitiesTags(filteredAbilities, tags);
  return (
    <div className="classDeck">
      <MobileMenu
        onClick={() => setActiveTab(inactiveWindow)}
        maxCards={handSize}
        currentCards={cardsInDeck.length}
        label={inactiveWindow}
      />
      <div className={
        classnames(
          'classDeck__currentDeck',
          activeWindow === TABS.DECK && 'active',
        )
      }
      >
        <DeckList
          abilities={
            cardsInDeck.map((abilityName) => abilities.find(({ name }) => abilityName === name))
          }
          onDrop={addCard}
          maxCards={handSize}
        />
      </div>
      <div className={
        classnames(
          'classDeck__availableCards',
          activeWindow === TABS.ALL && 'active',
        )
      }
      >
        <CardsList
          abilities={filteredAbilities}
          onDrop={removeCard}
          tags={filteredAbilitiesTags}
        />
      </div>
      <div id="popup-card" />
    </div>
  );
};

ClassDeck.propTypes = {
  cardsInDeck: PropTypes.arrayOf(PropTypes.string).isRequired,
  addCard: PropTypes.func.isRequired,
  removeCard: PropTypes.func.isRequired,
  setClassKey: PropTypes.func.isRequired,
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
  { addCard: addCardAction, removeCard: removeCardAction, setClassKey: setClassKeyAction },
)(ClassDeck);
