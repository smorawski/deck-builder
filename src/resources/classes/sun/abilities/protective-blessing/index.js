import image from './protective-blessing.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'protectiveBlessing',
  initiative: 61,
  image,
  level: LEVELS[1],
  top: {
    tags: [
      TAGS.EFFECTS.BLESS,
      TAGS.EFFECTS.STRENGTHEN,
      TAGS.OTHER.RANGED,
    ],
  },
  bottom: {
    tags: [
      TAGS.TARGETS.ADJACENT_ALLY,
      TAGS.TARGETS.MULTIPLE,
      TAGS.INCREASE_ELEMENTS.LIGHT,
      TAGS.OTHER.XP,
      TAGS.DURATION.ONE_ROUND,
      TAGS.OTHER.LOST,
    ],
  },
};
