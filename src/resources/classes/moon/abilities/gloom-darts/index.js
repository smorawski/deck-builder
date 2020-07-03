import image from './gloom-darts.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'gloomDarts',
  initiative: 78,
  image,
  level: LEVELS[8],
  top: {
    attacks: ['3'],
    tags: [
      TAGS.OTHER.RANGED,
      TAGS.EFFECTS.POISON,
      TAGS.EFFECTS.CURSE,
      TAGS.USE_ELEMENTS.DARKNESS,
      TAGS.TARGETS.MULTIPLE,
      TAGS.OTHER.XP,
    ],
  },
  bottom: {
    moves: ['3'],
    tags: [
      TAGS.INCREASE_ELEMENTS.DARKNESS,
    ],
  },
};
