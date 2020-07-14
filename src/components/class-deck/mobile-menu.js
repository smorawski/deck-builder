import React from 'react';
import PropTypes from 'prop-types';
import DeckMinimalLevel from '../common/deck-minimal-level';
import { abilityPropType } from '../../constants/prop-types';

import DeckSize from '../common/deck-size';

import './mobile-menu.css';

const MobileMenu = ({
  label,
  onClick,
  maxCards,
  abilities,
}) => (
  <div className="mobileMenu">
    <DeckMinimalLevel levels={abilities.map(({ level }) => level)} />
    <DeckSize maxCards={maxCards} currentCards={abilities.length} />
    <button type="button" onClick={onClick}>{label}</button>
  </div>
);

MobileMenu.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  maxCards: PropTypes.number.isRequired,
  abilities: PropTypes.arrayOf(abilityPropType).isRequired,
};

export default MobileMenu;
