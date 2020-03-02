import PropTypes from 'prop-types';
import { TAGS } from './card';

export const abilityPartPropType = PropTypes.shape({
  attacks: PropTypes.arrayOf(PropTypes.string),
  moves: PropTypes.arrayOf(PropTypes.string),
  tags: PropTypes.arrayOf(PropTypes.oneOf(TAGS)),
});

export const abilityPropType = PropTypes.shape({
  name: PropTypes.string.isRequired,
  initiative: PropTypes.number.isRequired,
  image: PropTypes.node.isRequired,
  level: PropTypes.number.isRequired,
  top: abilityPartPropType.isRequired,
  bottom: abilityPartPropType.isRequired,
});

export const classPropType = PropTypes.shape({
  name: PropTypes.string.isRequired,
  image: PropTypes.node,
  icon: PropTypes.node,
  abilities: PropTypes.objectOf(abilityPropType),
  handSize: 9,
});