import image from './quietus.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'quietus',
  initiative: 57,
  image,
  level: LEVELS[6],
  top: {
    tags: [
      TAGS.ACTIONS.KILL_ENEMY,
      TAGS.EFFECTS.STUN,
      TAGS.TARGETS.ADJACENT_ENEMY,
      TAGS.OTHER.XP,
    ],
  },
  bottom: {
    moves: ['3'],
    tags: [
      TAGS.EFFECTS.INCREASE_ATTACK,
      TAGS.DURATION.ONE_ROUND,
    ],
  },
};
