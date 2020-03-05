import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';

const AddCard = ({ onClick }) => (
  <Button
    className="addCard"
    onClick={onClick}
  >
    +
  </Button>
);

AddCard.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddCard;
