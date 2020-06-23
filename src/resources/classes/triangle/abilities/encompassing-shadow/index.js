import image from './encompassing-shadow.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'encompassingShadow',
  initiative: 23,
  image,
  level: LEVELS.X,
  top: {
    tags: [
      TAGS.EFFECTS.INVISIBLE,
      TAGS.OTHER.RANGED,
      TAGS.INCREASE_ELEMENTS.DARKNESS,
    ],
  },
  bottom: {
    moves: ['2'],
    tags: [
      TAGS.DURATION.ONE_ROUND,
    ],
  },
};
