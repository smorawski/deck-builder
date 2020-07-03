import image from './accelerated-end.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'acceleratedEnd',
  initiative: 62,
  image,
  level: LEVELS[5],
  top: {
    attacks: [],
    tags: [
      TAGS.EFFECTS.POISON,
      TAGS.CLASSES.CTHULHU,
      TAGS.USE_ELEMENTS.DARKNESS,
      TAGS.OTHER.XP,
    ],
  },
  bottom: {
    tags: [
      TAGS.EFFECTS.POISON,
      TAGS.OTHER.RANGED,
      TAGS.TARGETS.MULTIPLE,
    ],
  },
};
