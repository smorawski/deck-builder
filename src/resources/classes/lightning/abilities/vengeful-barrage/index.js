import image from './vengeful-barrage.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'vengefulBarrage',
  initiative: 38,
  image,
  level: LEVELS[8],
  top: {
    tags: [
      TAGS.DURATION.USES,
      TAGS.OTHER.XP,
    ],
  },
  bottom: {
    moves: ['4'],
    tags: [
      TAGS.USE_ELEMENTS.FIRE,
      TAGS.OTHER.XP,
      TAGS.DURATION.ONE_ROUND,
    ],
  },
};
