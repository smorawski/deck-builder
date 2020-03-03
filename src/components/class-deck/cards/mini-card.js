import React, { useState } from 'react';
import BootstrapCard from 'react-bootstrap/Card';

import CardActions, {
  AddCard,
  PreviewCard,
  RemoveCard,
} from '../actions';
import { abilityPropType } from '../../../constants/prop-types';

const MiniCard = ({ ability }) => {
  const [showActions, setShowActions] = useState(false);
  return (
    <BootstrapCard
      style={{ width: '10rem' }}
      onMouseEnter={() => setShowActions(true)}
      onMouseLeave={() => setShowActions(false)}
    >
      <BootstrapCard.Img variant="top" src={ability.image} />
      {
        showActions
          && (
            <CardActions>
              <PreviewCard cardName={ability.name} />
              <AddCard cardName={ability.name} />
              <RemoveCard cardName={ability.name} />
            </CardActions>
          )
      }
    </BootstrapCard>
  );
};

MiniCard.propTypes = {
  ability: abilityPropType.isRequired,
};

export default MiniCard;
