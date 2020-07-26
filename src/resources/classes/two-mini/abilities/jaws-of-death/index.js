import image from './jaws-of-death.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'jawsOfDeath',
  initiative: 48,
  image,
  level: LEVELS[9],
  top: {
    tags: [
      TAGS.CLASSES.TWO_MINI,
      TAGS.ACTIONS.KILL_ENEMY,
      TAGS.TARGETS.ADJACENT_ENEMY,
      TAGS.OTHER.XP,
    ],
  },
  bottom: {
    attacks: ['2', '2'],
    moves: ['3'],
    tags: [
      TAGS.CLASSES.TWO_MINI,
      TAGS.ACTIONS.PUSH,
      TAGS.OTHER.XP,
    ],
  },
};
