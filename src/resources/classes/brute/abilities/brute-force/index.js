import image from './brute-force.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'bruteForce',
  initiative: 51,
  image,
  level: LEVELS[3],
  top: {
    attacks: ['2'],
    tags: [
      TAGS.EFFECTS.MUDDLE,
      TAGS.TARGETS.AREA,
      TAGS.OTHER.XP,
    ],
  },
  bottom: {
    moves: ['2'],
    tags: [
      TAGS.EFFECTS.SHIELD,
      TAGS.DURATION.ONE_ROUND,
    ],
  },
};
