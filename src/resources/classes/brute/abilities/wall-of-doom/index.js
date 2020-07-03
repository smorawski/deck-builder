import image from './wall-of-doom.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'wallOfDoom',
  initiative: 20,
  image,
  level: LEVELS.X,
  top: {
    tags: [
      TAGS.EFFECTS.RETALIATE,
      TAGS.EFFECTS.SHIELD,
      TAGS.OTHER.XP,
      TAGS.DURATION.ONE_ROUND,
      TAGS.OTHER.LOST,
    ],
  },
  bottom: {
    tags: [
      TAGS.DURATION.ONE_ROUND,
    ],
  },
};
