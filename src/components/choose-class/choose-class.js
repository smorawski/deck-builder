import React from 'react';

import ChooseClassButton from './choose-class-button';
import ResourcesProvider from '../../resources/resource-provider';

const ChooseClass = () => (
  <div className="chooseClass">
    <div className="chooseClass--header">Choose class:</div>
    <div className="chooseClass--content">
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
