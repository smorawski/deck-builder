import image from './petrify.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'petrify',
  initiative: 47,
  image,
  level: LEVELS[5],
  top: {
    tags: [
      TAGS.OTHER.RANGED,
      TAGS.CLASSES.CRAGHEART,
      TAGS.INCREASE_ELEMENTS.EARTH,
      TAGS.OTHER.XP,
      TAGS.OTHER.LOST,
    ],
  },
  bottom: {
    moves: ['3'],
    tags: [
      TAGS.EFFECTS.IMMOBILIZE,
    ],
  },
};
