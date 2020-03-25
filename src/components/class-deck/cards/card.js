import React, { useState } from 'react';
import PropTypes from 'prop-types';
import BootstrapCard from 'react-bootstrap/Card';

import { CardActions } from '../actions';
import { abilityPropType } from '../../../constants/prop-types';

import './card.css';

const Card = ({ ability, selected }) => {
  const [showActions, setShowActions] = useState(false);
  return (
    <BootstrapCard
      className="abilityCard"
      style={{ width: '20rem' }}
      onMouseEnter={() => setShowActions(true)}
      onMouseLeave={() => setShowActions(false)}
    >
      <BootstrapCard.Img variant="top" src={ability.image} />
      { selected && <div className="abilityCard__mask" /> }
      {
        showActions && <CardActions cardName={ability.name} />
      }
    </BootstrapCard>
  );
};

Card.propTypes = {
  ability: abilityPropType.isRequired,
  selected: PropTypes.bool,
};

Card.defaultProps = {
  selected: false,
};

export default Card;
