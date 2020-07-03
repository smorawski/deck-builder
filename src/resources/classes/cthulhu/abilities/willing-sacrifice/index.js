import image from './willing-sacrifice.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'willingSacrifice',
  initiative: 84,
  image,
  level: LEVELS[5],
  top: {
    tags: [
      TAGS.CLASSES.CTHULHU,
      TAGS.EFFECTS.POISON,
      TAGS.DURATION.PERMANENT,
      TAGS.OTHER.XP,
      TAGS.OTHER.LOST,
    ],
  },
  bottom: {
    moves: [],
    tags: [
      TAGS.CLASSES.CTHULHU,
      TAGS.EFFECTS.RECOVER,
      TAGS.USE_ELEMENTS.AIR,
      TAGS.OTHER.XP,
    ],
  },
};
