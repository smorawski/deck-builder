import React, { useState } from 'react';
import BootstrapCard from 'react-bootstrap/Card';
import { useDrag } from 'react-dnd';

import { MiniCardActions } from '../actions';
import { abilityPropType } from '../../../constants/prop-types';

const MiniCard = ({ ability }) => {
  const [showActions, setShowActions] = useState(false);
  const [, drag] = useDrag({
    item: { type: 'card', id: ability.name },
  });
  return (
    <BootstrapCard
      ref={drag}
      style={{ width: '10rem' }}
      onMouseEnter={() => setShowActions(true)}
      onMouseLeave={() => setShowActions(false)}
    >
      <BootstrapCard.Img variant="top" src={ability.image} />
      {
        showActions && <MiniCardActions cardName={ability.name} />
      }
    </BootstrapCard>
  );
};

MiniCard.propTypes = {
  ability: abilityPropType.isRequired,
};

export default MiniCard;
