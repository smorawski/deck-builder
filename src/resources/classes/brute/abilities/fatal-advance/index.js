import image from './fatal-advance.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'fatalAdvance',
  initiative: 40,
  image,
  level: LEVELS[2],
  top: {
    tags: [
      TAGS.ACTIONS.KILL_ENEMY,
      TAGS.TARGETS.ADJACENT_ENEMY,
      TAGS.OTHER.XP,
      TAGS.OTHER.LOST,
    ],
  },
  bottom: {
    moves: ['4'],
  },
};
