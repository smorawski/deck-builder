import image from './clear-the-way.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'clearTheWay',
  initiative: 43,
  image,
  level: LEVELS[3],
  top: {
    attacks: ['2'],
    tags: [
      TAGS.TARGETS.ADJACENT_ENEMY,
      TAGS.OTHER.RANGED,
      TAGS.CLASSES.CRAGHEART,
      TAGS.USE_ELEMENTS.EARTH,
      TAGS.OTHER.XP,
    ],
  },
  bottom: {
    moves: ['5'],
    tags: [
      TAGS.EFFECTS.JUMP,
      TAGS.CLASSES.CRAGHEART,
      TAGS.ACTIONS.DISARM_TRAP,
      TAGS.OTHER.XP,
      TAGS.OTHER.LOST,
    ],
  },
};
