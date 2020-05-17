import image from './brutal-momentum.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'brutalMomentum',
  initiative: 52,
  image,
  level: LEVELS[7],
  top: {
    attacks: ['3'],
    tags: [
      TAGS.ACTIONS.PUSH,
      TAGS.CLASSES.CRAGHEART,
      TAGS.OTHER.XP,
    ],
  },
  bottom: {
    tags: [
      TAGS.USE_ELEMENTS.EARTH,
      TAGS.OTHER.XP,
      TAGS.DURATION.ONE_ROUND,
    ],
  },
};
