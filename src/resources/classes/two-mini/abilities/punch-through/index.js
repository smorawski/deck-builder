import image from './punch-through.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'punchThrough',
  initiative: 44,
  image,
  level: LEVELS[4],
  top: {
    attacks: ['3'],
    tags: [
      TAGS.CLASSES.TWO_MINI,
      TAGS.EFFECTS.PIERCE,
      TAGS.OTHER.XP,
    ],
  },
  bottom: {
    moves: ['3'],
    tags: [
      TAGS.CLASSES.TWO_MINI,
      TAGS.DURATION.ONE_ROUND,
    ],
  },
};
