import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import './popup-card.css';

const PopupCard = ({ children, position }) => ReactDOM.createPortal(
  <div className="popupCard" style={{ top: position.y, left: position.x }}>
    { children }
  </div>,
  document.getElementById('popup-card'),
);

PopupCard.propTypes = {
  children: PropTypes.node.isRequired,
  position: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
  }),
};

PopupCard.defaultProps = {
  position: { x: 0, y: 0 },
};

export default PopupCard;
