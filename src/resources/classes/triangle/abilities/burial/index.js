import image from './burial.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'burial',
  initiative: 65,
  image,
  level: LEVELS[3],
  top: {
    attacks: ['4'],
    tags: [
      TAGS.OTHER.RANGED,
      TAGS.TARGETS.AREA,
      TAGS.USE_ELEMENTS.EARTH,
      TAGS.EFFECTS.IMMOBILIZE,
      TAGS.USE_ELEMENTS.DARKNESS,
      TAGS.EFFECTS.CURSE,
      TAGS.OTHER.XP,
      TAGS.OTHER.LOST,
    ],
  },
  bottom: {
    attacks: ['3'],
    tags: [
      TAGS.OTHER.RANGED,
      TAGS.INCREASE_ELEMENTS.DARKNESS,
    ],
  },
};
