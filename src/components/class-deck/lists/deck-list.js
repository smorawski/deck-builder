import React from 'react';
import PropTypes from 'prop-types';
import { useDrop } from 'react-dnd';
import classnames from 'classnames';

import InlineCard from '../cards/inline-card';
import { abilityPropType } from '../../../constants/prop-types';

import './deck-list.css';

const DeckList = ({ abilities, onDrop, maxCards }) => {
  const [, drop] = useDrop({
    accept: 'card',
    drop: ({ id }) => onDrop(id),
  });

  return (
    <div className="deckList">
      <div className="deckList__stats">
        <span
          className={
            classnames(
              'deckList__stats__handSize',
              abilities.length > maxCards && 'error',
            )
          }
        >
          { `${abilities.length} / ${maxCards}` }
        </span>
      </div>
      <div className="deckList__content" ref={drop}>
        {
          abilities.map(
            (ability) => <InlineCard ability={ability} key={ability.name} />,
          )
        }
      </div>
    </div>
  );
};

DeckList.propTypes = {
  abilities: PropTypes.arrayOf(abilityPropType).isRequired,
  onDrop: PropTypes.func.isRequired,
  maxCards: PropTypes.number.isRequired,
};

export default DeckList;
