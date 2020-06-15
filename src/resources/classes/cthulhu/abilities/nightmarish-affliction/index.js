import image from './nightmarish-affliction.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'nightmarishAffliction',
  initiative: 43,
  image,
  level: LEVELS[4],
  top: {
    attacks: ['1'],
    tags: [
      TAGS.OTHER.RANGED,
      TAGS.TARGETS.MULTIPLE,
      TAGS.EFFECTS.POISON,
      TAGS.EFFECTS.CURSE,
      TAGS.INCREASE_ELEMENTS.DARKNESS,
    ],
  },
  bottom: {
    tags: [
      TAGS.EFFECTS.IMMOBILIZE,
      TAGS.OTHER.RANGED,
      TAGS.TARGETS.MULTIPLE,
    ],
  },
};
