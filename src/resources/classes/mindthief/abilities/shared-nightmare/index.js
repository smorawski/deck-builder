import image from './shared-nightmare.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'sharedNightmare',
  initiative: 7,
  image,
  level: LEVELS[8],
  top: {
    attacks: ['3'],
    tags: [
      TAGS.OTHER.RANGED,
      TAGS.TARGETS.MULTIPLE,
      TAGS.USE_ELEMENTS.DARKNESS,
      TAGS.EFFECTS.POISON,
      TAGS.EFFECTS.CURSE,
      TAGS.INCREASE_ELEMENTS.FROST,
      TAGS.OTHER.XP,
    ],
  },
  bottom: {
    moves: ['5'],
    tags: [
      TAGS.USE_ELEMENTS.FROST,
      TAGS.EFFECTS.SHIELD,
      TAGS.DURATION.ONE_ROUND,
    ],
  },
};
