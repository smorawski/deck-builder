import React from 'react';
import PropTypes from 'prop-types';
import { useDrop } from 'react-dnd';

import MiniCard from '../cards/mini-card';
import { abilityPropType } from '../../../constants/prop-types';
import ResourceSelectors from '../../../resources/resource-selectors';

import './cards-list.css';


const CardsList = ({ abilities, onDrop }) => {
  const [, drop] = useDrop({
    accept: 'card',
    drop: ({ id }) => onDrop(id),
  });

  console.log(ResourceSelectors.selectAbilitiesTags(abilities));

  return (
    <div className="cardsList" ref={drop}>
      {
        abilities.map(
          (ability) => <MiniCard ability={ability} key={ability.name} />,
        )
      }
    </div>
  );
};

CardsList.propTypes = {
  abilities: PropTypes.arrayOf(abilityPropType).isRequired,
  onDrop: PropTypes.func.isRequired,
};

export default CardsList;
