import image from './unstoppable-destruction.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'unstoppable-destruction',
  initiative: 57,
  image,
  level: LEVELS[6],
  top: {
    attacks: ['4'],
    tags: [
      TAGS.CLASSES.LIGHTNING,
      TAGS.OTHER.XP,
    ],
  },
  bottom: {
    tags: [
      TAGS.DURATION.ONE_ROUND,
    ],
  },
};
