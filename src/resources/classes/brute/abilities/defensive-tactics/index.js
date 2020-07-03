import image from './defensive-tactics.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'defensiveTactics',
  initiative: 26,
  image,
  level: LEVELS[7],
  top: {
    attacks: ['2'],
    tags: [
      TAGS.OTHER.RANGED,
      TAGS.TARGETS.MULTIPLE,
      TAGS.EFFECTS.IMMOBILIZE,
      TAGS.OTHER.XP,
    ],
  },
  bottom: {
    tags: [
      TAGS.EFFECTS.RETALIATE,
      TAGS.EFFECTS.SHIELD,
      TAGS.OTHER.XP,
      TAGS.DURATION.ONE_ROUND,
      TAGS.OTHER.LOST,
    ],
  },
};
