import image from './rocky-end.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'rockyEnd',
  initiative: 37,
  image,
  level: LEVELS[8],
  top: {
    attacks: ['X'],
    tags: [
      TAGS.USE_ELEMENTS.EARTH,
      TAGS.OTHER.RANGED,
      TAGS.OTHER.XP,
      TAGS.OTHER.LOST,
      TAGS.CLASSES.CRAGHEART,
    ],
  },
  bottom: {
    moves: ['6'],
  },
};
