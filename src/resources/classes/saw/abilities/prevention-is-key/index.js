import image from './prevention-is-key.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'preventionIsKey',
  initiative: 13,
  image,
  level: LEVELS.X,
  top: {
    tags: [
      TAGS.EFFECTS.DISARM,
      TAGS.TARGETS.MULTIPLE,
    ],
  },
  bottom: {
    tags: [
      TAGS.EFFECTS.SHIELD,
      TAGS.TARGETS.MULTIPLE,
      TAGS.OTHER.XP,
      TAGS.DURATION.ONE_ROUND,
    ],
  },
};
