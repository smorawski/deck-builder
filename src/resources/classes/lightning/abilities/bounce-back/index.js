import image from './bounce-back.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'bounceBack',
  initiative: 14,
  image,
  level: LEVELS[1],
  top: {
    tags: [
      TAGS.EFFECTS.RETALIATE,
      TAGS.DURATION.ONE_ROUND,
    ],
  },
  bottom: {
    moves: ['3'],
    tags: [
      TAGS.ACTIONS.HEAL,
    ],
  },
};
