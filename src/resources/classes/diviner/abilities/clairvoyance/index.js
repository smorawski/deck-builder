import image from './clairvoyance.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'clairvoyance',
  initiative: 8,
  image,
  level: LEVELS[1],
  top: {
    tags: [
      TAGS.CLASSES.DIVINER,
      TAGS.INCREASE_ELEMENTS.DARKNESS,
      TAGS.OTHER.XP,
      TAGS.DURATION.ONE_ROUND,
    ],
  },
  bottom: {
    tags: [
      TAGS.CLASSES.DIVINER,
      TAGS.USE_ELEMENTS.DARKNESS,
      TAGS.OTHER.XP,
      TAGS.OTHER.LOST,
    ],
  },
};
