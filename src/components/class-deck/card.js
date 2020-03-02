import React from 'react';
import _uniq from 'lodash/uniq';
import BootstrapCard from 'react-bootstrap/Card';

import { abilityPropType } from '../../constants/prop-types';


const selectAbilityTags = (ability) => _uniq([
  ...(ability.top.tags || []),
  ...(ability.bottom.tags || []),
]);

const Card = ({ ability }) => (
  <BootstrapCard style={{ width: '18rem' }}>
    <BootstrapCard.Img variant="top" src={ability.image} />
    <BootstrapCard.Body>
      <BootstrapCard.Text>
        { selectAbilityTags(ability).join(', ') }
      </BootstrapCard.Text>
    </BootstrapCard.Body>
  </BootstrapCard>
);

Card.propTypes = {
  ability: abilityPropType.isRequired,
};

export default Card;
