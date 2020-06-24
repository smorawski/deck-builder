import image from './terror-blade.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'terrorBlade',
  initiative: 17,
  image,
  level: LEVELS[3],
  top: {
    attacks: ['3'],
    tags: [
      TAGS.ACTIONS.PUSH,
    ],
  },
  bottom: {
    moves: ['4'],
    tags: [
      TAGS.DURATION.ONE_ROUND,
    ],
  },
};
