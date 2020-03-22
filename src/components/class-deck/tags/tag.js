import React from 'react';
import PropTypes from 'prop-types';

import './tag.css';

const Tag = ({ name, image }) => (
  <span className="tag">
    <img className="tag__image" src={image} alt={name} />
  </span>
);

Tag.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.node.isRequired,
};

export default Tag;
