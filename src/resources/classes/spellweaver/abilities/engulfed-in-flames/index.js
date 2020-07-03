import image from './engulfed-in-flames.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'engulfedInFlames',
  initiative: 44,
  image,
  level: LEVELS[5],
  top: {
    attacks: ['4'],
    tags: [
      TAGS.OTHER.RANGED,
      TAGS.INCREASE_ELEMENTS.FIRE,
    ],
  },
  bottom: {
    tags: [
      TAGS.EFFECTS.RETALIATE,
      TAGS.DURATION.USES,
      TAGS.OTHER.XP,
      TAGS.OTHER.LOST,
    ],
  },
};
