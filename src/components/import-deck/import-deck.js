import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';

import ImportField from './import-field';
import { importDeck as importDeckAction } from '../../state/deck/actions';
import { decodeDeck } from '../../utils/deck-encoder';

const ImportDeck = ({ importDeck }) => {
  const [importField, setImportField] = useState(null);
  const { importString } = useParams();
  const importedDeck = decodeDeck(importField || importString);
  if (importedDeck) {
    importDeck(importedDeck.classKey, importedDeck.deck);
    return <Redirect to={`/${importedDeck.classKey}`} />;
  }
  const hasInvalidString = (importField || importString) && !importedDeck;

  return (
    <div className="importDeck">
      <ImportField value={importString || ''} onAccept={(value) => setImportField(value)} />
      { hasInvalidString && <span>Invalid import string!</span> }
    </div>
  );
};

ImportDeck.propTypes = {
  importDeck: PropTypes.func.isRequired,
};

export default connect(null, { importDeck: importDeckAction })(ImportDeck);
