import image from './tyrannical-force.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'tyrannicalForce',
  initiative: 37,
  image,
  level: LEVELS[7],
  top: {
    attacks: ['3'],
    tags: [
      TAGS.OTHER.RANGED,
      TAGS.EFFECTS.STUN,
      TAGS.INCREASE_ELEMENTS.EARTH,
    ],
  },
  bottom: {
    tags: [
      TAGS.ACTIONS.CONTROL_SUMMON,
    ],
  },
};
