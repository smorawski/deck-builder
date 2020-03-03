import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';

import { addCard as addCardAction } from '../../../state/deck/actions';

const AddCard = ({ cardName, addCard }) => (
  <Button
    className="addCard"
    onClick={() => addCard(cardName)}
  >
    +
  </Button>
);

AddCard.propTypes = {
  cardName: PropTypes.string.isRequired,
  addCard: PropTypes.func.isRequired,
};

export default connect(
  null,
  { addCard: addCardAction },
)(AddCard);
