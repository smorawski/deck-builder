import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import TagsFilter from './tags-filter';
import LevelsFilter from './levels-filter';

import './filters.css';

const Filters = ({ tags }) => {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="filters">
      <div className="filters__trigger">
        <button type="button" onClick={() => setShowFilters(!showFilters)}>Filters</button>
      </div>
      <div className={classnames('filters__content', showFilters && 'active')}>
        <TagsFilter tags={tags} />
        <LevelsFilter />
      </div>
    </div>
  );
};

Filters.propTypes = {
  tags: PropTypes.objectOf(PropTypes.number).isRequired,
};

export default Filters;
