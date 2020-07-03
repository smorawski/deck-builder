import image from './battlefield-medicine.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'battlefieldMedicine',
  initiative: 83,
  image,
  level: LEVELS[1],
  top: {
    tags: [
      TAGS.CLASSES.SAW,
      TAGS.OTHER.XP,
      TAGS.OTHER.LOST,
    ],
  },
  bottom: {
    tags: [
      TAGS.DURATION.ONE_ROUND,
    ],
  },
};
