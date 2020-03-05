import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/Modal';

import Card from '../cards/card';
import { PreviewCardActions } from '../actions';
import { abilityPropType } from '../../../constants/prop-types';

const PreviewModal = ({ ability, onClose }) => (
  <Modal show size="sm" onHide={onClose}>
    <Modal.Header closeButton>
      <PreviewCardActions cardName={ability.name} onClick={onClose} />
    </Modal.Header>
    <Card ability={ability} />
  </Modal>
);

PreviewModal.propTypes = {
  ability: abilityPropType.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default PreviewModal;
