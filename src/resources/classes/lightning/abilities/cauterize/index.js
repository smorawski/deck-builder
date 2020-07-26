import image from './cauterize.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'cauterize',
  initiative: 40,
  image,
  level: LEVELS[1],
  top: {
    attacks: ['1'],
    tags: [
      TAGS.OTHER.RANGED,
      TAGS.EFFECTS.WOUND,
      TAGS.TARGETS.MULTIPLE,
      TAGS.INCREASE_ELEMENTS.FIRE,
    ],
  },
  bottom: {
    tags: [
      TAGS.EFFECTS.INCREASE_HEAL,
      TAGS.DURATION.USES,
      TAGS.OTHER.XP,
    ],
  },
};
