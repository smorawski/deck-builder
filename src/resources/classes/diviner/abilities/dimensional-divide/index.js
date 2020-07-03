import image from './dimensional-divide.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'dimensionalDivide',
  initiative: 23,
  image,
  level: LEVELS[5],
  top: {
    tags: [
      TAGS.CLASSES.DIVINER,
      TAGS.EFFECTS.WOUND,
      TAGS.EFFECTS.IMMOBILIZE,
      TAGS.DURATION.ONE_ROUND,
    ],
  },
  bottom: {
    tags: [
      TAGS.ACTIONS.TELEPORT,
      TAGS.EFFECTS.SHIELD,
      TAGS.OTHER.RANGED,
      TAGS.DURATION.ONE_ROUND,
    ],
  },
};
