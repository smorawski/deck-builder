import React from 'react';
import _uniq from 'lodash/uniq';
import BootstrapCard from 'react-bootstrap/Card';

import { abilityPropType } from '../../../constants/prop-types';

// TODO: get rid of it!!!! move it to ResourcesProvider
const selectAbilityTags = (ability) => _uniq([
  ...(ability.top.tags || []),
  ...(ability.bottom.tags || []),
]);

const Card = ({ ability }) => (
  <BootstrapCard style={{ width: '100%' }}>
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
