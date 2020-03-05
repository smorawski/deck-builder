import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';

const PreviewCard = ({ onClick }) => (
  <Button
    className="previewCard"
    onClick={onClick}
    variant="info"
  >
    ?
  </Button>
);

PreviewCard.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default PreviewCard;
