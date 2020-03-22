import image from './glass-hammer.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'glassHammer',
  initiative: 11,
  image,
  level: LEVELS.X,
  top: {
    attacks: ['X'],
    tags: [
      TAGS.CLASSES.LIGHTNING,
      TAGS.OTHER.XP,
      TAGS.OTHER.LOST,
    ],
  },
  bottom: {
    moves: ['3'],
  },
};
