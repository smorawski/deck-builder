import image from './crater.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'crater',
  initiative: 61,
  image,
  level: LEVELS[1],
  top: {
    attacks: ['3'],
    tags: [
      TAGS.OTHER.RANGED,
      TAGS.USE_ELEMENTS.EARTH,
      TAGS.ACTIONS.PUSH,
      TAGS.OTHER.XP,
    ],
  },
  bottom: {
    moves: ['4'],
    tags: [
      TAGS.EFFECTS.JUMP,
      TAGS.OTHER.LOST,
      TAGS.OTHER.XP,
    ],
  },
};
