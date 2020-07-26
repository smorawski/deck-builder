import image from './enhancement-field.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'enhancementField',
  initiative: 61,
  image,
  level: LEVELS[1],
  top: {
    attacks: ['3'],
    tags: [
      TAGS.OTHER.RANGED,
    ],
  },
  bottom: {
    tags: [
      TAGS.EFFECTS.INCREASE_ATTACK,
      TAGS.TARGETS.ADJACENT_ALLY,
      TAGS.TARGETS.MULTIPLE,
      TAGS.DURATION.ONE_ROUND,
    ],
  },
};
