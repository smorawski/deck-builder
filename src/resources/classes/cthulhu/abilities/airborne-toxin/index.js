import image from './airborne-toxin.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'airborneToxin',
  initiative: 57,
  image,
  level: LEVELS[7],
  top: {
    tags: [
      TAGS.EFFECTS.CURSE,
      TAGS.EFFECTS.MUDDLE,
      TAGS.OTHER.RANGED,
      TAGS.USE_ELEMENTS.AIR,
      TAGS.OTHER.XP,
    ],
  },
  bottom: {
    tags: [
      TAGS.EFFECTS.POISON,
      TAGS.TARGETS.MULTIPLE,
      TAGS.INCREASE_ELEMENTS.AIR,
      TAGS.OTHER.XP,
      TAGS.OTHER.LOST,
    ],
  },
};
