import image from './resolute-stand.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'resoluteStand',
  initiative: 9,
  image,
  level: LEVELS[1],
  top: {
    attacks: ['X'],
    tags: [
      TAGS.CLASSES.LIGHTNING,
      TAGS.OTHER.XP,
      TAGS.OTHER.LOST,
    ],
  },
  bottom: {
    moves: ['2'],
    tags: [
      TAGS.EFFECTS.RETALIATE,
      TAGS.DURATION.ONE_ROUND,
    ],
  },
};
