import image from './king-of-the-hill.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'kingOfTheHill',
  initiative: 39,
  image,
  level: LEVELS[9],
  top: {
    attacks: ['6'],
    tags: [
      TAGS.TARGETS.ADJACENT_ENEMY,
      TAGS.TARGETS.MULTIPLE,
      TAGS.ACTIONS.PUSH,
      TAGS.OTHER.XP,
      TAGS.OTHER.LOST,
    ],
  },
  bottom: {
    tags: [
      TAGS.ACTIONS.HEAL,
    ],
  },
};
