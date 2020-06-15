import React from 'react';
import BootstrapCard from 'react-bootstrap/Card';

import useDeck from '../../hooks/use-deck';
import { abilityPropType } from '../../../constants/prop-types';

import './card.css';

const Card = ({
  ability,
}) => {
  const [, { addCard, removeCard, isCardInDeck }] = useDeck();
  const selected = isCardInDeck(ability.name);
  return (
    <BootstrapCard
      className="abilityCard"
      style={{ width: '20rem' }}
      onClick={
        () => {
          if (selected) {
            return removeCard(ability.name);
          }
          return addCard(ability.name);
        }
    }
    >
      <BootstrapCard.Img variant="top" src={ability.image} />
      { selected && <div className="abilityCard__mask" /> }
    </BootstrapCard>
  );
};

Card.propTypes = {
  ability: abilityPropType.isRequired,
};


export default Card;
