import React from 'react';
import PropTypes from 'prop-types';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { connect } from 'react-redux';

import FilterLevel from './filter-level';
import ResourcesProvider from '../../../resources/resource-provider';
import {
  setLevelFilter as setLevelFilterAction,
  unsetLevelFilter as unsetLevelFilterAction,
  clearLevelFilter as clearLevelFilterAction,
} from '../../../state/filter/actions';
import { filterLevelsSelector } from '../../../state/filter/selectors';

import './tags-filter.css';

const TagsFilter = ({
  setLevelFilter,
  unsetLevelFilter,
  filterLevels,
  clearLevelFilter,
}) => (
  <ButtonGroup className="mr-2 filter levelsFilter">
    {
      ResourcesProvider.getAbilityLevels().map(
        (levelName) => (
          <FilterLevel
            key={levelName}
            name={levelName}
            active={filterLevels.indexOf(levelName) >= 0}
            toggleFilter={(name, value) => (value ? setLevelFilter : unsetLevelFilter)(name)}
          />
        ),
      )
    }
    <FilterLevel
      name="All"
      toggleFilter={clearLevelFilter}
    />
  </ButtonGroup>
);

TagsFilter.propTypes = {
  setLevelFilter: PropTypes.func.isRequired,
  unsetLevelFilter: PropTypes.func.isRequired,
  clearLevelFilter: PropTypes.func.isRequired,
  filterLevels: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default connect(
  (state) => ({
    filterLevels: filterLevelsSelector(state),
  }),
  {
    setLevelFilter: setLevelFilterAction,
    unsetLevelFilter: unsetLevelFilterAction,
    clearLevelFilter: clearLevelFilterAction,
  },
)(TagsFilter);
