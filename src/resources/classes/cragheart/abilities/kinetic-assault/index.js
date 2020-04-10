import image from './kinetic-assault.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'kineticAssault',
  initiative: 19,
  image,
  level: LEVELS[4],
  top: {
    moves: ['1'],
    attacks: ['4'],
  },
  bottom: {
    tags: [
      TAGS.EFFECTS.RETALIATE,
      TAGS.OTHER.RANGED,
      TAGS.DURATION.ONE_ROUND,
      TAGS.OTHER.XP,
      TAGS.OTHER.LOST,
    ],
  },
};
