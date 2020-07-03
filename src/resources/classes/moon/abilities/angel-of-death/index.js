import image from './angel-of-death.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'angelOfDeath',
  initiative: 38,
  image,
  level: LEVELS[9],
  top: {
    attacks: ['4'],
    tags: [
      TAGS.TARGETS.MULTIPLE,
      TAGS.USE_ELEMENTS.DARKNESS,
      TAGS.ACTIONS.KILL_ENEMY,
      TAGS.OTHER.XP,
      TAGS.OTHER.LOST,
    ],
  },
  bottom: {
    moves: ['5'],
    tags: [
      TAGS.EFFECTS.JUMP,
      TAGS.USE_ELEMENTS.DARKNESS,
      TAGS.ACTIONS.KILL_ENEMY,
      TAGS.OTHER.XP,
    ],
  },
};
