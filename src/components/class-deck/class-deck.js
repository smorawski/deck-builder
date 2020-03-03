import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';

import CardsList from './cards-list';
import PreviewModal from './modals/preview-modals';
import ResourcesProvider from '../../resources/resource-provider';
import { abilityPropType } from '../../constants/prop-types';
import { previewSelector } from '../../state/preview/selectors';
import { unsetPreview as unsetPreviewAction } from '../../state/preview/actions';


import './class-deck.css';
import { cardsInDeckSelector } from '../../state/deck/selectors';

const ClassDeck = ({ previewAbility, unsetPreview, cardsInDeck }) => {
  const { classKey } = useParams();
  const abilities = ResourcesProvider.getClassAbilities(classKey);
  const abilitiesInDeck = ResourcesProvider.getAbilities(cardsInDeck);
  return (
    <div className="classDeck">
      <div className="classDeck__allCards">
        <CardsList abilities={abilities} />
      </div>
      <div className="classDeck__choosedCards">
        <CardsList abilities={abilitiesInDeck} />
      </div>
      {
        !!previewAbility
        && (
          <PreviewModal
            ability={previewAbility}
            onClose={unsetPreview}
          />
        )
      }
    </div>
  );
};

ClassDeck.propTypes = {
  previewAbility: abilityPropType,
  unsetPreview: PropTypes.func.isRequired,
  cardsInDeck: PropTypes.arrayOf(PropTypes.string).isRequired,
};

ClassDeck.defaultProps = {
  previewAbility: null,
};

export default connect(
  (state) => ({
    previewAbility: previewSelector(state),
    cardsInDeck: cardsInDeckSelector(state),
  }),
  { unsetPreview: unsetPreviewAction },
)(ClassDeck);
