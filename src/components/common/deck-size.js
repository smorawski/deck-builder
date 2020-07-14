import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './deck-size.css';

const DeckSize = ({ maxCards, currentCards }) => (
  <span
    className={
      classnames(
        'deckSize',
        currentCards > maxCards && 'deckSize--error',
      )
    }
  >
    { `${currentCards} / ${maxCards}` }
  </span>
);

DeckSize.propTypes = {
  maxCards: PropTypes.number.isRequired,
  currentCards: PropTypes.number.isRequired,
};

export default DeckSize;
