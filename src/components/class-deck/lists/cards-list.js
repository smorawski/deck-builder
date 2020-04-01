import React from 'react';
import PropTypes from 'prop-types';

import Card from '../cards/card';
import Filters from '../filter/filters';
import { abilityPropType } from '../../../constants/prop-types';

import './cards-list.css';

const CardsList = ({ abilities, tags }) => (
  <div className="cardsList">
    <Filters tags={tags} />
    <div className="cardsList__content">
      {
        abilities.map(
          (ability) => (
            <Card
              ability={ability}
              key={ability.name}
            />
          ),
        )
      }
    </div>
  </div>
);

CardsList.propTypes = {
  abilities: PropTypes.arrayOf(abilityPropType).isRequired,
  tags: PropTypes.objectOf(PropTypes.number).isRequired,
};

export default CardsList;
