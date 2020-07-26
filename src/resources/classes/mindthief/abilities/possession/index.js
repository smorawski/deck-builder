import image from './possession.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'bloodPact',
  initiative: 51,
  image,
  level: LEVELS.X,
  top: {
    attacks: ['6'],
    tags: [
      TAGS.TARGETS.ADJACENT_ALLY,
      TAGS.OTHER.XP,
      TAGS.OTHER.LOST,
    ],
  },
  bottom: {
    moves: ['4'],
    tags: [
      TAGS.OTHER.RANGED,
    ],
  },
};
