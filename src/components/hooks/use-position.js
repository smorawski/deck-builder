import { useRef } from 'react';

const getPosition = (domNode) => {
  const bounds = domNode.getBoundingClientRect();
  return {
    x: bounds.x + bounds.width,
    y: bounds.y,
  };
};

export default (defaultPosition = { x: 0, y: 0 }) => {
  const ref = useRef(null);

  const position = ref.current ? getPosition(ref.current) : defaultPosition;
  return [
    ref,
    position,
  ];
};
