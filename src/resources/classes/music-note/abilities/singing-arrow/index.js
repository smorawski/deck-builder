import image from './singing-arrow.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'siingingArrow',
  initiative: 89,
  image,
  level: LEVELS[1],
  top: {
    tags: [
      TAGS.EFFECTS.CURSE,
      TAGS.TARGETS.AREA,
      TAGS.OTHER.RANGED,
    ],
  },
  bottom: {
    attacks: ['1'],
    tags: [
      TAGS.EFFECTS.WOUND,
      TAGS.OTHER.RANGED,
    ],
  },
};
