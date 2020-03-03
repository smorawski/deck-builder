import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './card-actions.css';

const AddCard = ({ children, big }) => (
  <div
    className={
      classnames(
        'cardActions',
        big && 'big',
      )
    }
  >
    { children }
  </div>
);

AddCard.propTypes = {
  children: PropTypes.node,
  big: PropTypes.bool,
};

AddCard.defaultProps = {
  children: null,
  big: false,
};

export default AddCard;
