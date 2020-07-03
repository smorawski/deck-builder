import image from './void-snare.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'voidSnare',
  initiative: 30,
  image,
  level: LEVELS[1],
  top: {
    tags: [
      TAGS.CLASSES.DIVINER,
      TAGS.EFFECTS.DISARM,
      TAGS.DURATION.ONE_ROUND,
    ],
  },
  bottom: {
    attacks: ['1'],
    tags: [
      TAGS.OTHER.RANGED,
      TAGS.TARGETS.MULTIPLE,
      TAGS.EFFECTS.IMMOBILIZE,
      TAGS.OTHER.XP,
    ],
  },
};
