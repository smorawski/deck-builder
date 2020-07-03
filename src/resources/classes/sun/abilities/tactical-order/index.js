import image from './tactical-order.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'tacticalOrder',
  initiative: 29,
  image,
  level: LEVELS[1],
  top: {
    moves: ['4'],
    tags: [
      TAGS.OTHER.RANGED,
    ],
  },
  bottom: {
    moves: ['4'],
  },
};
