import image from './spread-the-plague.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'spreadThePlague',
  initiative: 27,
  image,
  level: LEVELS[1],
  top: {
    tags: [
      TAGS.EFFECTS.POISON,
      TAGS.OTHER.XP,
      TAGS.DURATION.PERMANENT,
      TAGS.OTHER.LOST,
      TAGS.CLASSES.CTHULHU,
    ],
  },
  bottom: {
    attacks: ['3'],
    tags: [
      TAGS.OTHER.RANGED,
    ],
  },
};
