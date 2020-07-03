import image from './stick-to-the-shadows.jpg';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'stickToTheShadows',
  initiative: 26,
  image,
  level: LEVELS[7],
  top: {
    attacks: ['4'],
    tags: [
      TAGS.USE_ELEMENTS.DARKNESS,
      TAGS.OTHER.XP,
      TAGS.CLASSES.SCOUNDREL,
    ],
  },
  bottom: {
    moves: ['2'],
    tags: [
      TAGS.EFFECTS.INVISIBLE,
    ],
  },
};
