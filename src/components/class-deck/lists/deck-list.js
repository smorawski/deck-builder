import React from 'react';
import PropTypes from 'prop-types';

import InlineCard from '../cards/inline-card';
import DeckSize from '../../common/deck-size';
import DeckMinimalLevel from '../../common/deck-minimal-level';
import { abilityPropType } from '../../../constants/prop-types';

import './deck-list.css';

const DeckList = ({ abilities, maxCards }) => (
  <div className="deckList">
    <div className="deckList__stats">
      <DeckSize maxCards={maxCards} currentCards={abilities.length} />
      <DeckMinimalLevel levels={abilities.map(({ level }) => level)} />
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
