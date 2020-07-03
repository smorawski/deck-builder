import image from './precaution.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'precaution',
  initiative: 9,
  image,
  level: LEVELS[2],
  top: {
    tags: [
      TAGS.EFFECTS.SHIELD,
      TAGS.DURATION.ONE_ROUND,
    ],
  },
  bottom: {
    tags: [
      TAGS.CLASSES.SAW,
      TAGS.OTHER.XP,
    ],
  },
};
