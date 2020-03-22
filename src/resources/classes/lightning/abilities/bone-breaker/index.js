import image from './bone-breaker.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'boneBreaker',
  initiative: 41,
  image,
  level: LEVELS[8],
  top: {
    attacks: ['5'],
    tags: [
      TAGS.EFFECTS.WOUND,
      TAGS.EFFECTS.IMMOBILIZE,
      TAGS.INCREASE_ELEMENTS.FIRE,
    ],
  },
  bottom: {
    moves: ['3'],
    tags: [
      TAGS.OTHER.RANGED,
    ],
  },
};
