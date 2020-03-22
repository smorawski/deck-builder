import React from 'react';
import PropTypes from 'prop-types';

import './actions.css';

const Actions = ({
  children,
}) => (
  <div className="actions">
    { children }
  </div>
);

Actions.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Actions;
