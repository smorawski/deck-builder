import image from './inferno.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'inferno',
  initiative: 19,
  image,
  level: LEVELS[9],
  top: {
    attacks: ['3/4'],
    tags: [
      TAGS.TARGETS.MULTIPLE,
      TAGS.OTHER.XP,
    ],
  },
  bottom: {
    tags: [
      TAGS.EFFECTS.RETALIATE,
      TAGS.OTHER.RANGED,
      TAGS.DURATION.ONE_ROUND,
    ],
  },
};
