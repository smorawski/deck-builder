import image from './provoking-roar.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'provokingRoar',
  initiative: 10,
  image,
  level: LEVELS[1],
  top: {
    attacks: ['2'],
    tags: [
      TAGS.EFFECTS.DISARM,
    ],
  },
  bottom: {
    tags: [
      TAGS.CLASSES.BRUTE,
    ],
  },
};
