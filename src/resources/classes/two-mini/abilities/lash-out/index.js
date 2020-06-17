import image from './lash-out.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'lashOut',
  initiative: 18,
  image,
  level: LEVELS[8],
  top: {
    attacks: ['4'],
    tags: [
      TAGS.CLASSES.TWO_MINI,
      TAGS.TARGETS.MULTIPLE,
      TAGS.OTHER.XP,
    ],
  },
  bottom: {
    moves: ['3'],
    tags: [
      TAGS.CLASSES.TWO_MINI,
      TAGS.ACTIONS.PUSH,
      TAGS.TARGETS.MULTIPLE,
      TAGS.OTHER.XP,
    ],
  },
};
