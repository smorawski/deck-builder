import image from './black-tides.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'blackTides',
  initiative: 37,
  image,
  level: LEVELS[6],
  top: {
    attacks: ['4'],
    tags: [
      TAGS.OTHER.RANGED,
      TAGS.INCREASE_ELEMENTS.AIR,
    ],
  },
  bottom: {
    moves: ['4'],
    tags: [
      TAGS.INCREASE_ELEMENTS.DARKNESS,
    ],
  },
};
