import image from './euthanize.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'euthanize',
  initiative: 27,
  image,
  level: LEVELS[6],
  top: {
    tags: [
      TAGS.ACTIONS.KILL_ENEMY,
      TAGS.TARGETS.ADJACENT_ENEMY,
      TAGS.OTHER.XP,
    ],
  },
  bottom: {
    attacks: ['1'],
    tags: [
      TAGS.EFFECTS.POISON,
      TAGS.EFFECTS.WOUND,
      TAGS.EFFECTS.STUN,
    ],
  },
};
