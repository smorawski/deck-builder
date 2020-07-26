import image from './scroll-of-annihilation.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'scrollOfAnnihilation',
  initiative: 56,
  image,
  level: LEVELS[9],
  top: {
    tags: [
      TAGS.ACTIONS.KILL_ENEMY,
      TAGS.TARGETS.ADJACENT_ENEMY,
      TAGS.OTHER.XP,
      TAGS.OTHER.LOST,
    ],
  },
  bottom: {
    moves: ['3'],
    tags: [
      TAGS.EFFECTS.DISARM,
      TAGS.TARGETS.ADJACENT_ENEMY,
      TAGS.TARGETS.MULTIPLE,
    ],
  },
};
