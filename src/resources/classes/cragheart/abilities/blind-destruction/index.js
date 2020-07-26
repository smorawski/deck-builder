import image from './blind-destruction.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'blindDestruction',
  initiative: 74,
  image,
  level: LEVELS[9],
  top: {
    attacks: ['4'],
    tags: [
      TAGS.OTHER.RANGED,
      TAGS.TARGETS.ADJACENT_ENEMY,
    ],
  },
  bottom: {
    moves: ['4'],
    tags: [
      TAGS.INCREASE_ELEMENTS.EARTH,
      TAGS.TARGETS.ADJACENT_ENEMY,
    ],
  },
};
