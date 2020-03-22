import PropTypes from 'prop-types';
import ResourceProvider from '../resources/resource-provider';

export const abilityPartPropType = PropTypes.shape({
  attacks: PropTypes.arrayOf(PropTypes.string),
  moves: PropTypes.arrayOf(PropTypes.string),
  tags: PropTypes.arrayOf(PropTypes.oneOf(ResourceProvider.getAllTagsValues())),
});

export const abilityPropType = PropTypes.shape({
  name: PropTypes.string.isRequired,
  initiative: PropTypes.number.isRequired,
  image: PropTypes.node.isRequired,
  level: PropTypes.string.isRequired,
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
