import image from './balanced-measure.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'balancedMeasure',
  initiative: 77,
  image,
  level: LEVELS.X,
  top: {
    attacks: ['X'],
    tags: [
      TAGS.OTHER.XP,
    ],
  },
  bottom: {
    moves: ['X'],
  },
};
