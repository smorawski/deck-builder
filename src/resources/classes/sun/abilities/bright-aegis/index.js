import image from './bright-aegis.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'brightAegis',
  initiative: 14,
  image,
  level: LEVELS[7],
  top: {
    tags: [
      TAGS.EFFECTS.SHIELD,
      TAGS.EFFECTS.RETALIATE,
      TAGS.INCREASE_ELEMENTS.LIGHT,
      TAGS.DURATION.ONE_ROUND,
    ],
  },
  bottom: {
    tags: [
      TAGS.EFFECTS.RECOVER,
      TAGS.OTHER.XP,
      TAGS.USE_ELEMENTS.LIGHT,
      TAGS.OTHER.LOST,
    ],
  },
};
