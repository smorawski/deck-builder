import image from './syringe.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'syringe',
  initiative: 15,
  image,
  level: LEVELS[1],
  top: {
    tags: [
      TAGS.EFFECTS.SHIELD,
      TAGS.TARGETS.ADJACENT_ALLY,
      TAGS.DURATION.ONE_ROUND,
    ],
  },
  bottom: {
    attacks: ['1'],
    tags: [
      TAGS.EFFECTS.POISON,
      TAGS.EFFECTS.STUN,
    ],
  },
};
