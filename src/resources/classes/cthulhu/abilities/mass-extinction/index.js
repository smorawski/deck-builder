import image from './mass-extinction.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'massExtinction',
  initiative: 94,
  image,
  level: LEVELS[9],
  top: {
    tags: [
      TAGS.EFFECTS.CURSE,
      TAGS.EFFECTS.WOUND,
      TAGS.TARGETS.MULTIPLE,
      TAGS.INCREASE_ELEMENTS.AIR,
      TAGS.INCREASE_ELEMENTS.DARKNESS,
    ],
  },
  bottom: {
    tags: [
      TAGS.CLASSES.CTHULHU,
      TAGS.EFFECTS.POISON,
      TAGS.USE_ELEMENTS.AIR,
      TAGS.USE_ELEMENTS.DARKNESS,
      TAGS.OTHER.XP,
    ],
  },
};
