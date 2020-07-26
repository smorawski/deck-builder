import image from './sharpening-kit.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'sharpeningKit',
  initiative: 23,
  image,
  level: LEVELS[1],
  top: {
    tags: [
      TAGS.ACTIONS.HEAL,
      TAGS.OTHER.RANGED,
      TAGS.OTHER.XP,
    ],
  },
  bottom: {
    tags: [
      TAGS.EFFECTS.INCREASE_ATTACK,
      TAGS.OTHER.RANGED,
      TAGS.DURATION.ONE_ROUND,
    ],
  },
};
