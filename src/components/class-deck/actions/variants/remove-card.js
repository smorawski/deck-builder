import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';

const RemoveCard = ({ onClick }) => (
  <Button
    className="removeCard"
    onClick={onClick}
    variant="danger"
  >
    x
  </Button>
);

RemoveCard.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default RemoveCard;
