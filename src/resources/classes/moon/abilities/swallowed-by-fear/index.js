import image from './swallowed-by-fear.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'swallowedByFear',
  initiative: 90,
  image,
  level: LEVELS[6],
  top: {
    attacks: ['2'],
    tags: [
      TAGS.USE_ELEMENTS.DARKNESS,
      TAGS.USE_ELEMENTS.ANY,
      TAGS.ACTIONS.KILL_ENEMY,
      TAGS.OTHER.XP,
    ],
  },
  bottom: {
    moves: ['3'],
    tags: [
      TAGS.ACTIONS.PUSH,
      TAGS.TARGETS.ADJACENT_ENEMY,
      TAGS.TARGETS.MULTIPLE,
    ],
  },
};
