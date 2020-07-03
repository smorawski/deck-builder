import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import classnames from 'classnames';

import MobileMenu from './mobile-menu';
import CardsList from './lists/cards-list';
import DeckList from './lists/deck-list';
import useDeck from '../hooks/use-deck';
import ResourcesProvider from '../../resources/resource-provider';
import ResourceSelectors from '../../resources/resource-selectors';
import { filterSelector } from '../../state/filter/selectors';

import './class-deck.css';

const TABS = {
  DECK: 'deck',
  ALL: 'all',
};

const ClassDeck = ({
  filter,
}) => {
  const { classKey } = useParams();
  const [deck, { addCard, removeCard }] = useDeck();
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
        currentCards={deck.length}
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
            deck.map((abilityName) => abilities.find(({ name }) => abilityName === name))
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
  filter: PropTypes.shape({
    levels: PropTypes.arrayOf(PropTypes.string),
    tags: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default connect(
  (state) => ({
    filter: filterSelector(state),
  }),
)(ClassDeck);
