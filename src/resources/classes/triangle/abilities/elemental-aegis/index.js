import image from './elemental-aegis.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'elementalAegis',
  initiative: 14,
  image,
  level: LEVELS[8],
  top: {
    tags: [
      TAGS.USE_ELEMENTS.ANY,
      TAGS.EFFECTS.SHIELD,
      TAGS.DURATION.ONE_ROUND,
    ],
  },
  bottom: {
    tags: [
      TAGS.ACTIONS.HEAL,
      TAGS.INCREASE_ELEMENTS.LIGHT,
    ],
  },
};
