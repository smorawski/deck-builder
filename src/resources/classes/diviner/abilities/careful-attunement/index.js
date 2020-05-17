import image from './careful-attunement.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'carefulAttunement',
  initiative: 17,
  image,
  level: LEVELS[6],
  top: {
    tags: [
      TAGS.CLASSES.DIVINER,
      TAGS.USE_ELEMENTS.LIGHT,
      TAGS.USE_ELEMENTS.DARKNESS,
      TAGS.OTHER.XP,
      TAGS.OTHER.LOST,
    ],
  },
  bottom: {
    moves: ['3'],
    tags: [
      TAGS.CLASSES.DIVINER,
      TAGS.DURATION.ONE_ROUND,
    ],
  },
};
