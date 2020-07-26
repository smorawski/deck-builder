import image from './brilliant-prayer.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'brilliantPrayer',
  initiative: 27,
  image,
  level: LEVELS[1],
  top: {
    tags: [
      TAGS.EFFECTS.RECOVER,
      TAGS.TARGETS.ADJACENT_ALLY,
      TAGS.OTHER.XP,
      TAGS.OTHER.LOST,
    ],
  },
  bottom: {
    tags: [
      TAGS.ACTIONS.HEAL,
      TAGS.OTHER.RANGED,
      TAGS.INCREASE_ELEMENTS.LIGHT,
      TAGS.OTHER.XP,
      TAGS.OTHER.LOST,
    ],
  },
};
