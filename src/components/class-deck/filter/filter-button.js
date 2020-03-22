import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import classnames from 'classnames';

import './filter-button.css';

const FilterButton = ({ active, onClick, children }) => (
  <Button
    className={classnames('filterButton', active && 'filterButton--active')}
    size="sm"
    variant="light"
    onClick={onClick}
  >
    {children}
  </Button>
);

FilterButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  active: PropTypes.bool,
};

FilterButton.defaultProps = {
  active: false,
};

export default FilterButton;
