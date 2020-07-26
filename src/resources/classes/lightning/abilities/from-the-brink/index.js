import image from './from-the-brink.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'fromTheBrink',
  initiative: 24,
  image,
  level: LEVELS[1],
  top: {
    tags: [
      TAGS.CLASSES.LIGHTNING,
      TAGS.ACTIONS.HEAL,
      TAGS.OTHER.RANGED,
      TAGS.OTHER.XP,
      TAGS.OTHER.LOST,
    ],
  },
  bottom: {
    moves: ['3'],
    tags: [
      TAGS.ACTIONS.PUSH,
      TAGS.TARGETS.ADJACENT_ENEMY,
    ],
  },
};
