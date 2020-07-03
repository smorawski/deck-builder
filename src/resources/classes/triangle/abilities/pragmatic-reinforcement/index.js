import image from './pragmatic-reinforcement.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'pragmaticReinforcement',
  initiative: 56,
  image,
  level: LEVELS[7],
  top: {
    tags: [
      TAGS.ACTIONS.HEAL,
      TAGS.OTHER.RANGED,
      TAGS.USE_ELEMENTS.FROST,
      TAGS.EFFECTS.SHIELD,
      TAGS.DURATION.ONE_ROUND,
      TAGS.USE_ELEMENTS.EARTH,
      TAGS.USE_ELEMENTS.LIGHT,
      TAGS.EFFECTS.RECOVER,
    ],
  },
  bottom: {
    attacks: ['3'],
    tags: [
      TAGS.OTHER.RANGED,
      TAGS.OTHER.XP,
      TAGS.USE_ELEMENTS.FIRE,
      TAGS.EFFECTS.POISON,
      TAGS.EFFECTS.WOUND,
      TAGS.USE_ELEMENTS.AIR,
      TAGS.USE_ELEMENTS.DARKNESS,
    ],
  },
};
