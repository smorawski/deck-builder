import image from './immortality.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'immortality',
  initiative: 33,
  image,
  level: LEVELS[9],
  top: {
    tags: [
      TAGS.DURATION.USES,
      TAGS.OTHER.XP,
    ],
  },
  bottom: {
    moves: ['2'],
    tags: [
      TAGS.EFFECTS.SHIELD,
      TAGS.USE_ELEMENTS.FIRE,
      TAGS.EFFECTS.RETALIATE,
      TAGS.DURATION.ONE_ROUND,
    ],
  },
};
