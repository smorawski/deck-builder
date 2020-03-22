import React from 'react';
import BootstrapCard from 'react-bootstrap/Card';

import Tags from '../tags';
import { InlineCardActions } from '../actions';
import { abilityPropType } from '../../../constants/prop-types';

import './inline-card.css';

const InlineCard = ({ ability }) => (
  <BootstrapCard
    style={{ width: '100%' }}
    className="inlineCard"
  >
    <BootstrapCard.Header className="inlineCard__header">
      <span>{ ability.name }</span>
      <span>{ ability.initiative}</span>
    </BootstrapCard.Header>
    <div className="inlineCard__content">
      <span>
        <Tags tags={Object.values(ability.top.tags || [])} />
        <Tags tags={Object.values(ability.bottom.tags || [])} />
      </span>
      <InlineCardActions cardName={ability.name} image={ability.image} />
    </div>
  </BootstrapCard>
);

InlineCard.propTypes = {
  ability: abilityPropType.isRequired,
};

export default InlineCard;
