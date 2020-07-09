import React from 'react';
import PropTypes from 'prop-types';

import { RemoveCard, PreviewCard } from './variants';
import useDeck from '../../hooks/use-deck';

const InlineCardActions = ({ cardName, image }) => {
  const [, { removeCard }] = useDeck();
  return (
    <div className="inlineCard__actions">
      <PreviewCard image={image} />
      <RemoveCard onClick={() => removeCard(cardName)} />
    </div>
  );
};

InlineCardActions.propTypes = {
  image: PropTypes.node,
  cardName: PropTypes.string.isRequired,
};

InlineCardActions.defaultProps = {
  image: null,
};

export default InlineCardActions;
