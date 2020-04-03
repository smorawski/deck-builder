import React from 'react';
import PropTypes from 'prop-types';

import ExportDeck from './export-deck';
import InlineCard from '../cards/inline-card';
import DeckSize from '../../common/deck-size';
import { abilityPropType } from '../../../constants/prop-types';

import './deck-list.css';

const DeckList = ({ abilities, maxCards }) => (
  <div className="deckList">
    <div className="deckList__stats">
      <DeckSize maxCards={maxCards} currentCards={abilities.length} />
      <ExportDeck />
    </div>
    <div className="deckList__content">
      {
        abilities.map(
          (ability) => <InlineCard ability={ability} key={ability.name} />,
        )
      }
    </div>
  </div>
);

DeckList.propTypes = {
  abilities: PropTypes.arrayOf(abilityPropType).isRequired,
  maxCards: PropTypes.number.isRequired,
};

export default DeckList;
