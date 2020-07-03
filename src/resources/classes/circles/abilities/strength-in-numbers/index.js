import image from './strength-in-numbers.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'strengthInNumbers',
  initiative: 45,
  image,
  level: LEVELS[5],
  top: {
    tags: [
      TAGS.ACTIONS.CONTROL_SUMMON,
      TAGS.OTHER.XP,
    ],
  },
  bottom: {
    moves: ['x'],
    tags: [
      TAGS.OTHER.RANGED,
    ],
  },
};
