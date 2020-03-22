import React from 'react';
import PropTypes from 'prop-types';

import FilterButton from './filter-button';

const FilterTag = ({
  name,
  toggleFilter,
  active,
}) => (
  <span className="filterLevel">
    <FilterButton
      active={active}
      onClick={() => toggleFilter(name, !active)}
    >
      { name }
    </FilterButton>
  </span>
);

FilterTag.propTypes = {
  name: PropTypes.string.isRequired,
  toggleFilter: PropTypes.func.isRequired,
  active: PropTypes.bool,
};

FilterTag.defaultProps = {
  active: false,
};

export default FilterTag;
