import image from './revitalizing-fount.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'revitalizingFount',
  initiative: 21,
  image,
  level: LEVELS[2],
  top: {
    tags: [
      TAGS.ACTIONS.HEAL,
      TAGS.EFFECTS.SHIELD,
      TAGS.OTHER.RANGED,
      TAGS.OTHER.XP,
      TAGS.DURATION.ONE_ROUND,
      TAGS.OTHER.LOST,
    ],
  },
  bottom: {
    tags: [
      TAGS.CLASSES.DIVINER,
      TAGS.ACTIONS.PULL,
    ],
  },
};
