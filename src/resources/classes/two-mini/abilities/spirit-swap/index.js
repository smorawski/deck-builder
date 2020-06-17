import image from './spirit-swap.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'spiritSwap',
  initiative: 22,
  image,
  level: LEVELS[1],
  top: {
    moves: ['2'],
    tags: [
      TAGS.CLASSES.TWO_MINI,
      TAGS.OTHER.XP,
    ],
  },
  bottom: {
    tags: [
      TAGS.ACTIONS.TELEPORT,
    ],
  },
};
