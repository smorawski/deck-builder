import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';

import PopupCard from '../../cards/popup-card';
import usePosition from '../../../hooks/use-position';

import './preview-card.css';

const PreviewCard = ({ image }) => {
  const [show, setShow] = useState(false);
  const [ref, position] = usePosition();

  const fixedPosition = {
    x: position.x,
    // if won't, fix the height
    y: position.y + 330 > window.innerHeight ? window.innerHeight - 330 : position.y,
  };
  return (
    <div
      className="previewCard"
      ref={ref}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <Button variant="secondary">
        ?
      </Button>
      {
        show && (
        <PopupCard position={fixedPosition}>
          <img className="previewCard__image" src={image} alt="ability" />
        </PopupCard>
        )
      }
    </div>
  );
};

PreviewCard.propTypes = {
  image: PropTypes.node.isRequired,
};

export default PreviewCard;
