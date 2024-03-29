import image from './tricksters-reversal.jpg';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'trickstersReversal',
  initiative: 9,
  image,
  level: LEVELS.X,
  top: {
    attacks: ['2'],
    tags: [
      TAGS.OTHER.LOST,
      TAGS.OTHER.XP,
    ],
  },
  bottom: {
    tags: [
      TAGS.DURATION.ONE_ROUND,
    ],
  },
};
