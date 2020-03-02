import React from 'react';
import { useParams } from 'react-router-dom';
import ResourcesProvider from '../../resources/resource-provider';

import CardsList from './cards-list';

import './class-deck.css';

export default function ClassDeck() {
  const { classKey } = useParams();
  const abilities = ResourcesProvider.getClassAbilities(classKey);
  return (
    <div className="classDeck">
      <div className="classDeck-allCards">
        <CardsList abilities={abilities} />
      </div>
      <div className="classDeck-choosedCards">
        <CardsList abilities={[]} />
      </div>
    </div>
  );
}
