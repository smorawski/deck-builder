import image from './dancing-shadows.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'dancingShadows',
  initiative: 9,
  image,
  level: LEVELS[1],
  top: {
    moves: ['3'],
    attacks: ['1'],
  },
  bottom: {
    tags: [
      TAGS.INCREASE_ELEMENTS.DARKNESS,
      TAGS.DURATION.ONE_ROUND,
    ],
  },
};
