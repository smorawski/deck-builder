import image from './preordain-the-path.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'preordainThePath',
  initiative: 87,
  image,
  level: LEVELS[4],
  top: {
    moves: ['2'],
    tags: [
      TAGS.OTHER.RANGED,
      TAGS.OTHER.XP,
    ],
  },
  bottom: {
    tags: [
      TAGS.CLASSES.DIVINER,
      TAGS.USE_ELEMENTS.LIGHT,
      TAGS.USE_ELEMENTS.DARKNESS,
      TAGS.OTHER.XP,
    ],
  },
};
