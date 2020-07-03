import image from './black-arrow.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'blackArrow',
  initiative: 11,
  image,
  level: LEVELS[5],
  top: {
    attacks: ['4'],
    tags: [
      TAGS.OTHER.RANGED,
      TAGS.EFFECTS.MUDDLE,
      TAGS.EFFECTS.CURSE,
      TAGS.OTHER.XP,
    ],
  },
  bottom: {
    attacks: ['3'],
    tags: [
      TAGS.EFFECTS.INVISIBLE,
      TAGS.USE_ELEMENTS.DARKNESS,
      TAGS.OTHER.RANGED,
      TAGS.OTHER.XP,
    ],
  },
};
