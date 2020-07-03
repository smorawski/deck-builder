import image from './earthen-clod.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'earthenClod',
  initiative: 38,
  image,
  level: LEVELS[1],
  top: {
    attacks: ['2'],
    tags: [
      TAGS.OTHER.RANGED,
      TAGS.USE_ELEMENTS.EARTH,
      TAGS.EFFECTS.IMMOBILIZE,
      TAGS.OTHER.XP,
    ],
  },
  bottom: {
    tags: [
      TAGS.ACTIONS.HEAL,
      TAGS.OTHER.RANGED,
    ],
  },
};
