import image from './purifying-aura.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'purifyingAura',
  initiative: 21,
  image,
  level: LEVELS[1],
  top: {
    tags: [
      TAGS.EFFECTS.RETALIATE,
      TAGS.DURATION.USES,
      TAGS.OTHER.XP,
      TAGS.OTHER.LOST,
    ],
  },
  bottom: {
    tags: [
      TAGS.EFFECTS.STRENGTHEN,
      TAGS.TARGETS.ADJACENT_ALLY,
      TAGS.TARGETS.MULTIPLE,
      TAGS.USE_ELEMENTS.LIGHT,
      TAGS.OTHER.RANGED,
    ],
  },
};
