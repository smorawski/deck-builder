import image from './growing-rage.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'growingRage',
  initiative: 85,
  image,
  level: LEVELS[1],
  top: {
    attacks: ['X'],
    tags: [
      TAGS.OTHER.XP,
    ],
  },
  bottom: {
    moves: ['3'],
    attacks: ['2'],
    tags: [
      TAGS.CLASSES.LIGHTNING,
      TAGS.OTHER.XP,
    ],
  },
};
