import image from './crushing-hammer.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'crushingHammer',
  initiative: 17,
  image,
  level: LEVELS.X,
  top: {
    attacks: ['3'],
    tags: [
      TAGS.EFFECTS.STUN,
      TAGS.OTHER.XP,
      TAGS.OTHER.LOST,
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
