import image from './otherworldly-rage.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'otherworldlyRage',
  initiative: 35,
  image,
  level: LEVELS[8],
  top: {
    tags: [
      TAGS.ACTIONS.CONTROL_ENEMY,
      TAGS.EFFECTS.POISON,
      TAGS.EFFECTS.WOUND,
      TAGS.OTHER.XP,
    ],
  },
  bottom: {
    moves: ['3'],
    tags: [
      TAGS.ACTIONS.TELEPORT,
    ],
  },
};
