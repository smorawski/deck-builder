import image from './amputate.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'amputate',
  initiative: 86,
  image,
  level: LEVELS[5],
  top: {
    attacks: ['4'],
    tags: [
      TAGS.EFFECTS.WOUND,
      TAGS.EFFECTS.IMMOBILIZE,
      TAGS.OTHER.XP,
    ],
  },
  bottom: {
    tags: [
      TAGS.ACTIONS.HEAL,
      TAGS.OTHER.RANGED,
      TAGS.EFFECTS.STUN,
    ],
  },
};
