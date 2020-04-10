import image from './pulverize.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'pulverize',
  initiative: 31,
  image,
  level: LEVELS[9],
  top: {
    attacks: ['3'],
    tags: [
      TAGS.ACTIONS.PUSH,
      TAGS.CLASSES.CRAGHEART,
      TAGS.OTHER.XP,
      TAGS.OTHER.LOST,
    ],
  },
  bottom: {
    attacks: ['2', '2'],
    moves: ['5'],
    tags: [
      TAGS.OTHER.XP,
      TAGS.OTHER.LOST,
    ],
  },
};
