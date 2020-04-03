import React from 'react';
import Button from 'react-bootstrap/Button';

import ChooseClassButton from './choose-class-button';
import ResourcesProvider from '../../resources/resource-provider';

const ChooseClass = () => (
  <div className="chooseClass">
    <div className="chooseClass__importDeck">
      <Button onClick={() => { window.location = '/import'; }}>Import</Button>
    </div>
    <div className="chooseClass__header">Choose class:</div>
    <div className="chooseClass__content">
      {
        ResourcesProvider.getAllClasses().map(({ name, image }) => (
          <ChooseClassButton
            classKey={name}
            key={name}
            image={image}
          />
        ))
      }
    </div>
  </div>
);

export default ChooseClass;
