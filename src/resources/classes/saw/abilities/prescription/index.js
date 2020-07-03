import image from './prescription.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'prescription',
  initiative: 6,
  image,
  level: LEVELS[6],
  top: {
    tags: [
      TAGS.CLASSES.SAW,
      TAGS.OTHER.XP,
    ],
  },
  bottom: {
    tags: [
      TAGS.CLASSES.SAW,
      TAGS.OTHER.XP,
      TAGS.OTHER.LOST,
    ],
  },
};
