import React from 'react';
import PropTypes from 'prop-types';

import Tag from './tag';
import ResourceProvider from '../../../resources/resource-provider';

import './tags.css';

const Tags = ({ tags }) => {
  if (tags.length <= 0) {
    return null;
  }
  const tagsWithImages = ResourceProvider.getImagesForTags(tags);

  return (
    <span className="tags">
      {
        Object.keys(tagsWithImages)
          .map((tagName) => <Tag key={tagName} name={tagName} image={tagsWithImages[tagName]} />)
      }
    </span>
  );
};

Tags.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Tags;
