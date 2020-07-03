import image from './explosive-punch.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'explosivePunch',
  initiative: 28,
  image,
  level: LEVELS[2],
  top: {
    attacks: ['4'],
    tags: [
      TAGS.CLASSES.CRAGHEART,
      TAGS.INCREASE_ELEMENTS.EARTH,
      TAGS.OTHER.XP,
      TAGS.OTHER.LOST,
    ],
  },
  bottom: {
    moves: ['4'],
  },
};
