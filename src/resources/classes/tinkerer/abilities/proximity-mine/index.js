import image from './proximity-mine.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'proximityMine',
  initiative: 62,
  image,
  level: LEVELS[1],
  top: {
    tags: [
      TAGS.ACTIONS.CREATE_TRAP,
      TAGS.OTHER.XP,
      TAGS.OTHER.LOST,
    ],
  },
  bottom: {
    moves: ['4'],
  },
};
