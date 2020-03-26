import React from 'react';
import PropTypes from 'prop-types';
import BootstrapCard from 'react-bootstrap/Card';
import { connect } from 'react-redux';

import { abilityPropType } from '../../../constants/prop-types';
import {
  addCard as addCardAction,
  removeCard as removeCardAction,
} from '../../../state/deck/actions';
import { isCardInDeck } from '../../../state/deck/selectors';

import './card.css';

const Card = ({
  ability,
  selected,
  addCard,
  removeCard,
}) => (
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

Card.propTypes = {
  ability: abilityPropType.isRequired,
  selected: PropTypes.bool,
  addCard: PropTypes.func.isRequired,
  removeCard: PropTypes.func.isRequired,
};

Card.defaultProps = {
  selected: false,
};


export default connect(
  (state, { ability: { name } }) => ({
    selected: isCardInDeck(state, name),
  }),
  {
    addCard: addCardAction,
    removeCard: removeCardAction,
  },
)(Card);
