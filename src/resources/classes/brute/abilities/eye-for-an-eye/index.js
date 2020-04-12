import image from './eye-for-an-eye.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'eyeForAnEye',
  initiative: 18,
  image,
  level: LEVELS[1],
  top: {
    tags: [
      TAGS.EFFECTS.RETALIATE,
      TAGS.OTHER.XP,
      TAGS.DURATION.ONE_ROUND,
    ],
  },
  bottom: {
    tags: [
      TAGS.ACTIONS.HEAL,
      TAGS.INCREASE_ELEMENTS.EARTH,
    ],
  },
};
