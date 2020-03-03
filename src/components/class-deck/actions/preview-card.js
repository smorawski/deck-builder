import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';

import { setPreview } from '../../../state/preview/actions';

const PreviewCard = (props) => (
  <Button
    className="previewCard"
    onClick={() => props.setPreview(props.cardName)}
    variant="info"
  >
    ?
  </Button>
);

PreviewCard.propTypes = {
  cardName: PropTypes.string.isRequired,
  setPreview: PropTypes.func.isRequired,
};

export default connect(null, { setPreview })(PreviewCard);
