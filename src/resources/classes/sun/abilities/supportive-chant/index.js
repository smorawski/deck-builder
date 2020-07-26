import image from './supportive-chant.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'supportiveChant',
  initiative: 11,
  image,
  level: LEVELS[6],
  top: {
    tags: [
      TAGS.EFFECTS.INCREASE_ATTACK,
      TAGS.OTHER.XP,
      TAGS.DURATION.ONE_ROUND,
    ],
  },
  bottom: {
    tags: [
      TAGS.EFFECTS.INCREASE_MOVE,
      TAGS.DURATION.ONE_ROUND,
    ],
  },
};
