import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import calculateLevel from '../../utils/calculate-level/calculate-level';

import './deck-minimal-level.css';

const DeckMinimalLevel = ({ levels }) => {
  const minimalLevel = calculateLevel(levels);

  return (
    <span className={classnames('deckMinimalLevel', minimalLevel > 9 && 'deckMinimalLevel--incorrect')}>
      Min. level:
      { minimalLevel }
    </span>
  );
};

DeckMinimalLevel.propTypes = {
  levels: PropTypes.arrayOf(PropTypes.string),
};

DeckMinimalLevel.defaultProps = {
  levels: [],
};

export default DeckMinimalLevel;
