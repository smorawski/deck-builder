import image from './first-aid.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'firstAid',
  initiative: 8,
  image,
  level: LEVELS[8],
  top: {
    tags: [
      TAGS.CLASSES.SAW,
      TAGS.OTHER.XP,
    ],
  },
  bottom: {
    moves: ['4'],
  },
};
