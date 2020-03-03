import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/Modal';

import Card from '../cards/card';
import CardActions, { AddCard } from '../actions';
import { abilityPropType } from '../../../constants/prop-types';

const PreviewModal = ({ ability, onClose }) => (
  <Modal show size="sm" onHide={onClose}>
    <Modal.Header closeButton>
      <CardActions big>
        <AddCard ability={ability} />
      </CardActions>
    </Modal.Header>
    <Card ability={ability} />
  </Modal>
);

PreviewModal.propTypes = {
  ability: abilityPropType.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default PreviewModal;
