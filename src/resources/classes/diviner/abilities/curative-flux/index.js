import image from './curative-flux.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'curativeFlux',
  initiative: 40,
  image,
  level: LEVELS[7],
  top: {
    tags: [
      TAGS.ACTIONS.HEAL,
      TAGS.TARGETS.MULTIPLE,
      TAGS.EFFECTS.REGENERATE,
      TAGS.INCREASE_ELEMENTS.LIGHT,
    ],
  },
  bottom: {
    tags: [
      TAGS.EFFECTS.STUN,
      TAGS.TARGETS.MULTIPLE,
      TAGS.OTHER.RANGED,
      TAGS.OTHER.XP,
      TAGS.OTHER.LOST,
    ],
  },
};
