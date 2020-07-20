import React from 'react';
import BootstrapCard from 'react-bootstrap/Card';
import ResourceSelectors from '../../../resources/resource-selectors';

import Tags from '../tags';
import CardActions from '../actions';
import { abilityPropType } from '../../../constants/prop-types';

import './inline-card.css';

const InlineCard = ({ ability }) => (
  <BootstrapCard
    style={{ width: '100%' }}
    className="inlineCard"
  >
    <BootstrapCard.Header className="inlineCard__header">
      <span>{ `${ability.name} ( ${ability.level} )`}</span>
      <span>{ ability.initiative}</span>
    </BootstrapCard.Header>
    <div className="inlineCard__content">
      <span>
        <Tags tags={ResourceSelectors.selectPartialAbilityTags(ability.top)} />
        <Tags tags={ResourceSelectors.selectPartialAbilityTags(ability.bottom)} />
      </span>
      <CardActions cardName={ability.name} image={ability.image} />
    </div>
  </BootstrapCard>
);

InlineCard.propTypes = {
  ability: abilityPropType.isRequired,
};

export default InlineCard;
