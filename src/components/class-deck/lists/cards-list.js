import React from 'react';
import PropTypes from 'prop-types';

import Card from '../cards/card';
import TagsFilter from '../filter/tags-filter';
import LevelsFilter from '../filter/levels-filter';
import { abilityPropType } from '../../../constants/prop-types';

import './cards-list.css';

const CardsList = ({ abilities, selectedAbilities, tags }) => (
  <div className="cardsList">
    <div className="cardsList__filters">
      <TagsFilter tags={tags} />
      <LevelsFilter />
    </div>
    <div className="cardsList__content">
      {
        abilities.map(
          (ability) => (
            <Card
              ability={ability}
              key={ability.name}
              selected={selectedAbilities.indexOf(ability.name) >= 0}
            />
          ),
        )
      }
    </div>
  </div>
);

CardsList.propTypes = {
  abilities: PropTypes.arrayOf(abilityPropType).isRequired,
  selectedAbilities: PropTypes.arrayOf(PropTypes.string),
  tags: PropTypes.objectOf(PropTypes.number).isRequired,
};

CardsList.defaultProps = {
  selectedAbilities: [],
};

export default CardsList;
