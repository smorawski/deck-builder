import image from './cold-front.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'coldFront',
  initiative: 61,
  image,
  level: LEVELS[8],
  top: {
    attacks: ['5'],
    tags: [
      TAGS.OTHER.RANGED,
      TAGS.TARGETS.AREA,
      TAGS.INCREASE_ELEMENTS.FROST,
      TAGS.OTHER.XP,
      TAGS.OTHER.LOST,
    ],
  },
  bottom: {
    tags: [
      TAGS.EFFECTS.RETALIATE,
      TAGS.OTHER.RANGED,
      TAGS.DURATION.USES,
      TAGS.OTHER.XP,
      TAGS.OTHER.LOST,
    ],
  },
};
