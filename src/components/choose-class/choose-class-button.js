import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

import './choose-class-button.css';

const ChooseClassButton = ({ classKey, image }) => (
  <Link to={`/${classKey}`}>
    <Button className="chooseClass-button">
      <img src={image} alt={classKey} />
    </Button>
  </Link>
);

ChooseClassButton.propTypes = {
  classKey: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default ChooseClassButton;
