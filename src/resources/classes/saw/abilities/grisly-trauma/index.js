import image from './grisly-trauma.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'grislyTrauma',
  initiative: 81,
  image,
  level: LEVELS[9],
  top: {
    tags: [
      TAGS.ACTIONS.KILL_ENEMY,
      TAGS.OTHER.RANGED,
      TAGS.TARGETS.AREA,
      TAGS.OTHER.XP,
    ],
  },
  bottom: {
    moves: ['2'],
    tags: [
      TAGS.EFFECTS.POISON,
      TAGS.EFFECTS.WOUND,
      TAGS.EFFECTS.MUDDLE,
      TAGS.TARGETS.MULTIPLE,
    ],
  },
};
