import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './card-actions.css';

const CardActions = ({
  big,
  children,
}) => (
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

CardActions.propTypes = {
  big: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

CardActions.defaultProps = {
  big: false,
};

export default CardActions;
