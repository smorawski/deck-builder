import image from './elemental-aid.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'elementalAid',
  initiative: 84,
  image,
  level: LEVELS[3],
  top: {
    tags: [
      TAGS.ACTIONS.HEAL,
      TAGS.OTHER.RANGED,
      TAGS.USE_ELEMENTS.EARTH,
      TAGS.OTHER.XP,
    ],
  },
  bottom: {
    tags: [
      TAGS.EFFECTS.SHIELD,
      TAGS.USE_ELEMENTS.AIR,
      TAGS.DURATION.ONE_ROUND,
    ],
  },
};
