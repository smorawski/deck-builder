import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { RemoveCard, PreviewCard } from './variants';
import { removeCard as removeCardAction } from '../../../state/deck/actions';

const InlineCardActionsRaw = ({ cardName, removeCard, image }) => (
  <div className="inlineCard__actions">
    <RemoveCard onClick={() => removeCard(cardName)} />
    <PreviewCard image={image} />
  </div>
);

InlineCardActionsRaw.propTypes = {
  image: PropTypes.node,
  cardName: PropTypes.string.isRequired,
  removeCard: PropTypes.func.isRequired,
};

InlineCardActionsRaw.defaultProps = {
  image: null,
};

export default connect(null, { removeCard: removeCardAction })(InlineCardActionsRaw);
