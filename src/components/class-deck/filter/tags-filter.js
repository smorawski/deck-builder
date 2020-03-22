import React from 'react';
import PropTypes from 'prop-types';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { connect } from 'react-redux';

import FilterTag from './filter-tag';
import {
  setTagFilter as setTagFilterAction,
  unsetTagFilter as unsetTagFilterAction,
} from '../../../state/filter/actions';
import { filterTagsSelector } from '../../../state/filter/selectors';
import ResourceProvider from '../../../resources/resource-provider';

import './tags-filter.css';

const TagsFilter = ({
  tags,
  setTagFilter,
  unsetTagFilter,
  filterTags,
}) => {
  const tagsWithImages = ResourceProvider.getImagesForTags(Object.keys(tags));
  return (
    <ButtonGroup className="mr-2 filter tagsFilter">
      {
        Object.keys(tags).map(
          (abilityName) => (
            <FilterTag
              key={abilityName}
              name={abilityName}
              active={filterTags.indexOf(abilityName) >= 0}
              number={tags[abilityName]}
              image={tagsWithImages[abilityName]}
              toggleFilter={(name, value) => (value ? setTagFilter : unsetTagFilter)(name)}
            />
          ),
        )
      }
    </ButtonGroup>
  );
};

TagsFilter.propTypes = {
  tags: PropTypes.objectOf(PropTypes.number).isRequired,
  setTagFilter: PropTypes.func.isRequired,
  unsetTagFilter: PropTypes.func.isRequired,
  filterTags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default connect(
  (state) => ({
    filterTags: filterTagsSelector(state),
  }),
  { setTagFilter: setTagFilterAction, unsetTagFilter: unsetTagFilterAction },
)(TagsFilter);
