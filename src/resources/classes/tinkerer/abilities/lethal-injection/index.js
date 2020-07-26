import image from './lethal-injection.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'lethalInjection',
  initiative: 85,
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
    moves: ['4'],
    tags: [
      TAGS.EFFECTS.POISON,
      TAGS.TARGETS.ADJACENT_ENEMY,
      TAGS.TARGETS.MULTIPLE,
    ],
  },
};
