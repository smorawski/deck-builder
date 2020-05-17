import image from './flashing-burst.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'flashingBurst',
  initiative: 26,
  image,
  level: LEVELS[2],
  top: {
    attacks: ['3'],
    tags: [
      TAGS.OTHER.RANGED,
      TAGS.INCREASE_ELEMENTS.LIGHT,
    ],
  },
  bottom: {
    moves: ['4'],
  },
};
