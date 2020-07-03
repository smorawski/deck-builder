import image from './cautious-advance.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'cautiousAdvance',
  initiative: 23,
  image,
  level: LEVELS[1],
  top: {
    tags: [
      TAGS.EFFECTS.SHIELD,
      TAGS.OTHER.XP,
      TAGS.DURATION.ONE_ROUND,
    ],
  },
  bottom: {
    moves: ['3'],
  },
};
