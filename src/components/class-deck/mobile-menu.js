import React from 'react';
import PropTypes from 'prop-types';

import DeckSize from '../common/deck-size';

import './mobile-menu.css';

const MobileMenu = ({ label, onClick, maxCards, currentCards }) => (
  <div className="mobileMenu">
    <DeckSize maxCards={maxCards} currentCards={currentCards} />
    <button onClick={onClick}>{label}</button>
  </div>
);

MobileMenu.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  maxCards: PropTypes.number.isRequired,
  currentCards: PropTypes.number.isRequired,
};

export default MobileMenu;
