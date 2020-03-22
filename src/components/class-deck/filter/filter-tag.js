import React from 'react';
import PropTypes from 'prop-types';
import _isNil from 'lodash/isNil';

import FilterButton from './filter-button';
import Tag from '../tags/tag';

const FilterTag = ({
  name,
  image,
  number,
  toggleFilter,
  active,
}) => (
  <span className="filterTag">
    { !_isNil(number) && <span className="filterTag__number">{`${number}x`}</span> }
    <FilterButton
      onClick={() => toggleFilter(name, !active)}
      active={active}
    >
      <Tag name={name} image={image} />
    </FilterButton>
  </span>
);

FilterTag.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.node.isRequired,
  number: PropTypes.number,
  toggleFilter: PropTypes.func.isRequired,
  active: PropTypes.bool,
};

FilterTag.defaultProps = {
  number: null,
  active: false,
};

export default FilterTag;
