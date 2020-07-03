import image from './teamwork.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'teamwork',
  initiative: 89,
  image,
  level: LEVELS.X,
  top: {
    tags: [
      TAGS.EFFECTS.RECOVER,
      TAGS.TARGETS.MULTIPLE,
      TAGS.OTHER.XP,
      TAGS.OTHER.LOST,
    ],
  },
  bottom: {
    moves: ['2'],
    tags: [
      TAGS.TARGETS.MULTIPLE,
    ],
  },
};
