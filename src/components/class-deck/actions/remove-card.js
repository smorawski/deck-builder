import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';

import { removeCard as removeCardAction } from '../../../state/deck/actions';

const RemoveCard = ({ cardName, removeCard }) => (
  <Button
    className="removeCard"
    onClick={() => removeCard(cardName)}
    variant="danger"
  >
    x
  </Button>
);

RemoveCard.propTypes = {
  cardName: PropTypes.string.isRequired,
  removeCard: PropTypes.func.isRequired,
};

export default connect(
  null,
  { removeCard: removeCardAction },
)(RemoveCard);
