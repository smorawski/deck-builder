import image from './maul.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'maul',
  initiative: 14,
  image,
  level: LEVELS[1],
  top: {
    attacks: ['4'],
    tags: [
      TAGS.CLASSES.TWO_MINI,
    ],
  },
  bottom: {
    moves: ['3'],
    tags: [
      TAGS.EFFECTS.SHIELD,
      TAGS.TARGETS.ADJACENT_ALLY,
      TAGS.DURATION.ONE_ROUND,
    ],
  },
};
