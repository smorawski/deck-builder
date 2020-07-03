import image from './frenzied-onslaught.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'frenziedOnslaught',
  initiative: 41,
  image,
  level: LEVELS[8],
  top: {
    attacks: ['2', '2'],
    moves: ['2', '2'],
  },
  bottom: {
    tags: [
      TAGS.EFFECTS.DISARM,
      TAGS.EFFECTS.IMMOBILIZE,
      TAGS.EFFECTS.STUN,
      TAGS.OTHER.XP,
      TAGS.DURATION.ONE_ROUND,
    ],
  },
};
