import image from './energizing-tonic.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'energizingTonic',
  initiative: 16,
  image,
  level: LEVELS[1],
  top: {
    tags: [
      TAGS.ACTIONS.HEAL,
      TAGS.OTHER.RANGED,
      TAGS.OTHER.XP,
      TAGS.OTHER.LOST,
    ],
  },
  bottom: {
    moves: ['6'],
    tags: [
      TAGS.OTHER.XP,
      TAGS.OTHER.LOST,
    ],
  },
};
