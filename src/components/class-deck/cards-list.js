import React from 'react';
import PropTypes from 'prop-types';

import MiniCard from './cards/mini-card';
import { abilityPropType } from '../../constants/prop-types';

import './cards-list.css';

const CardsList = ({ abilities }) => (
  <div className="cardsList">
    {
      abilities.map(
        (ability) => <MiniCard ability={ability} key={ability.name} />,
      )
    }
  </div>
);

CardsList.propTypes = {
  abilities: PropTypes.arrayOf(abilityPropType).isRequired,
};

export default CardsList;
