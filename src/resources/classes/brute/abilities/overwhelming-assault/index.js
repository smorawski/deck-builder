import image from './overwhelming-assault.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'overwhelmingAssault',
  initiative: 61,
  image,
  level: LEVELS[1],
  top: {
    attacks: ['6'],
    tags: [
      TAGS.OTHER.XP,
      TAGS.OTHER.LOST,
    ],
  },
  bottom: {
    moves: ['3'],
    tags: [
      TAGS.ACTIONS.PUSH,
    ],
  },
};
