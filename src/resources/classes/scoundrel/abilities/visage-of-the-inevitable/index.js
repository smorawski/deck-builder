import image from './visage-of-the-inevitable.jpg';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'visageOfTheInevitable',
  initiative: 88,
  image,
  level: LEVELS[5],
  top: {
    tags: [
      TAGS.OTHER.XP,
      TAGS.CLASSES.SCOUNDREL,
    ],
  },
  bottom: {
    moves: ['2'],
    tags: [
      TAGS.EFFECTS.POISON,
    ],
  },
};
