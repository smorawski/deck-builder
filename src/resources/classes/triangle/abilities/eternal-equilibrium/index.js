import image from './eternal-equilibrium.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'eternalEquilibrium',
  initiative: 27,
  image,
  level: LEVELS[9],
  top: {
    attacks: ['2'],
    tags: [
      TAGS.OTHER.RANGED,
      TAGS.USE_ELEMENTS.DARKNESS,
      TAGS.EFFECTS.CURSE,
      TAGS.USE_ELEMENTS.LIGHT,
      TAGS.OTHER.XP,
    ],
  },
  bottom: {
    tags: [
      TAGS.ACTIONS.HEAL,
      TAGS.OTHER.XP,
      TAGS.USE_ELEMENTS.FIRE,
      TAGS.EFFECTS.RETALIATE,
      TAGS.USE_ELEMENTS.FROST,
      TAGS.EFFECTS.SHIELD,
      TAGS.OTHER.XP,
      TAGS.DURATION.ONE_ROUND,
    ],
  },
};
