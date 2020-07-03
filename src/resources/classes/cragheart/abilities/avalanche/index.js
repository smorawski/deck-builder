import image from './avalanche.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'avalanche',
  initiative: 75,
  image,
  level: LEVELS[1],
  top: {
    attacks: ['4/5'],
    tags: [
      TAGS.TARGETS.AREA,
      TAGS.USE_ELEMENTS.EARTH,
      TAGS.OTHER.XP,
      TAGS.OTHER.LOST,
    ],
  },
  bottom: {
    tags: [
      TAGS.CLASSES.CRAGHEART,
      TAGS.INCREASE_ELEMENTS.EARTH,
    ],
  },
};
