import React from 'react';
import BootstrapCard from 'react-bootstrap/Card';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

import { abilityPropType } from '../../constants/prop-types';

import Card from './card';

const MiniCard = ({ ability }) => (
  <OverlayTrigger
    delay={500}
    placement="right-start"
    overlay={<div className="card-preview"><Card ability={ability} /></div>}
  >
    <BootstrapCard style={{ width: '9rem' }}>
      <BootstrapCard.Img variant="top" src={ability.image} />
    </BootstrapCard>
  </OverlayTrigger>
);

MiniCard.propTypes = {
  ability: abilityPropType.isRequired,
};

export default MiniCard;
