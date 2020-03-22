import image from './marching-beat.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'marchingBeat',
  initiative: 32,
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
