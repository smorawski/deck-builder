import image from './primal-blessing.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'primalBlessing',
  initiative: 28,
  image,
  level: LEVELS[6],
  top: {
    tags: [
      TAGS.ACTIONS.HEAL,
      TAGS.OTHER.RANGED,
      TAGS.TARGETS.MULTIPLE,
      TAGS.OTHER.XP,
    ],
  },
  bottom: {
    moves: ['2/2'],
    tags: [
      TAGS.ACTIONS.TELEPORT,
    ],
  },
};
