import image from './anguish-and-salvation.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'anguishAndSalvation',
  initiative: 29,
  image,
  level: LEVELS[8],
  top: {
    tags: [
      TAGS.EFFECTS.RETALIATE,
      TAGS.OTHER.RANGED,
      TAGS.TARGETS.MULTIPLE,
      TAGS.DURATION.ONE_ROUND,
    ],
  },
  bottom: {
    tags: [
      TAGS.ACTIONS.HEAL,
      TAGS.USE_ELEMENTS.ANY,
      TAGS.INCREASE_ELEMENTS.LIGHT,
      TAGS.INCREASE_ELEMENTS.DARKNESS,
      TAGS.OTHER.XP,
    ],
  },
};
