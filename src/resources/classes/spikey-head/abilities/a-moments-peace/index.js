import image from './a-moments-peace.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'aMomentsPeace',
  initiative: 88,
  image,
  level: LEVELS[1],
  top: {
    tags: [
      TAGS.ACTIONS.LOOT,
    ],
  },
  bottom: {
    moves: ['2'],
    tags: [
      TAGS.ACTIONS.HEAL,
    ],
  },
};
