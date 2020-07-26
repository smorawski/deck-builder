import image from './heaving-swing.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'heavingSwing',
  initiative: 57,
  image,
  level: LEVELS.X,
  top: {
    attacks: ['3'],
    tags: [
      TAGS.ACTIONS.PUSH,
      TAGS.OTHER.XP,
      TAGS.CLASSES.CRAGHEART,
    ],
  },
  bottom: {
    tags: [
      TAGS.EFFECTS.INCREASE_ATTACK,
      TAGS.OTHER.RANGED,
      TAGS.DURATION.ONE_ROUND,
    ],
  },
};
