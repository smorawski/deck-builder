import image from './cleansing-force.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'cleansingForce',
  initiative: 25,
  image,
  level: LEVELS[8],
  top: {
    attacks: ['6'],
    tags: [
      TAGS.EFFECTS.STUN,
      TAGS.EFFECTS.WOUND,
      TAGS.OTHER.XP,
      TAGS.OTHER.LOST,
    ],
  },
  bottom: {
    moves: ['4'],
    tags: [
      TAGS.INCREASE_ELEMENTS.LIGHT,
    ],
  },
};
