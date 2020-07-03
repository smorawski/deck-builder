import image from './engulfing-radiance.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'engulfingRadiance',
  initiative: 20,
  image,
  level: LEVELS[4],
  top: {
    tags: [
      TAGS.ACTIONS.HEAL,
      TAGS.TARGETS.MULTIPLE,
      TAGS.INCREASE_ELEMENTS.LIGHT,
      TAGS.OTHER.XP,
      TAGS.OTHER.LOST,
    ],
  },
  bottom: {
    tags: [
      TAGS.OTHER.RANGED,
      TAGS.INCREASE_ELEMENTS.LIGHT,
      TAGS.DURATION.ONE_ROUND,
    ],
  },
};
