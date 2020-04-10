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
    moves: ['2'],
    tags: [
      TAGS.DURATION.ONE_ROUND,
    ],
  },
};
