import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import { encodeDeck } from '../../../utils/deck-encoder';
import copyToClipboard from '../../../utils/copy-to-clipboard';
import { classKeySelector, cardsInDeckSelector } from '../../../state/deck/selectors';

import './export-deck.css';

const createUrl = (hashedDeck) => `${window.location.origin}/import/${hashedDeck}`;

const ExportDeck = ({ cardsInDeck, classKey }) => {
  const [opened, setOpenModal] = useState(false);
  const encodedDeck = encodeDeck(classKey, cardsInDeck);
  const closePopup = () => setOpenModal(false);

  return (
    <div className="exportDeck">
      <Button onClick={() => setOpenModal(true)}>
        Save
      </Button>
      <Modal
        className="exportDeck__modal"
        show={opened}
        onHide={closePopup}
      >
        <Modal.Header closeButton>
          Save deck
        </Modal.Header>
        <Modal.Body>
          <div className="exportDeck__modal__content">
            <textarea readOnly value={encodedDeck} />
            <Button
              onClick={
                () => {
                  copyToClipboard(encodedDeck);
                  closePopup();
                }
              }
            >
              Copy hash
            </Button>
            <textarea readOnly value={createUrl(encodedDeck)} />
            <Button
              onClick={
                () => {
                  copyToClipboard(createUrl(encodedDeck));
                  closePopup();
                }
              }
            >
              Copy url
            </Button>

          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

ExportDeck.propTypes = {
  cardsInDeck: PropTypes.arrayOf(PropTypes.string).isRequired,
  classKey: PropTypes.string.isRequired,
};

export default connect((state) => ({
  classKey: classKeySelector(state),
  cardsInDeck: cardsInDeckSelector(state),
}))(ExportDeck);
