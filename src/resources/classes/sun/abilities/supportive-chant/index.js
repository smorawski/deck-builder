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
      TAGS.OTHER.XP,
      TAGS.DURATION.ONE_ROUND,
    ],
  },
  bottom: {
    tags: [
      TAGS.DURATION.ONE_ROUND,
    ],
  },
};
