import image from './protective-aura.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'protectiveAura',
  initiative: 13,
  image,
  level: LEVELS[1],
  top: {
    tags: [
      TAGS.EFFECTS.SHIELD,
      TAGS.TARGETS.MULTIPLE,
      TAGS.OTHER.RANGED,
      TAGS.INCREASE_ELEMENTS.LIGHT,
      TAGS.OTHER.XP,
      TAGS.DURATION.ONE_ROUND,
    ],
  },
  bottom: {
    tags: [
      TAGS.CLASSES.DIVINER,
      TAGS.USE_ELEMENTS.LIGHT,
      TAGS.OTHER.XP,
      TAGS.OTHER.LOST,
    ],
  },
};
