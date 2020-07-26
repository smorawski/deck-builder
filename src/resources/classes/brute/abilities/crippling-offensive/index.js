import image from './crippling-offensive.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'cripplingOffensive',
  initiative: 33,
  image,
  level: LEVELS[7],
  top: {
    attacks: ['6'],
    tags: [
      TAGS.EFFECTS.WOUND,
      TAGS.EFFECTS.STUN,
      TAGS.OTHER.XP,
      TAGS.OTHER.LOST,
    ],
  },
  bottom: {
    moves: ['3'],
    tags: [
      TAGS.EFFECTS.IMMOBILIZE,
      TAGS.ACTIONS.PUSH,
      TAGS.TARGETS.ADJACENT_ENEMY,
    ],
  },
};
