import image from './natural-remedy.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'naturalRemedy',
  initiative: 25,
  image,
  level: LEVELS[8],
  top: {
    tags: [
      TAGS.ACTIONS.HEAL,
      TAGS.OTHER.RANGED,
      TAGS.USE_ELEMENTS.AIR,
      TAGS.OTHER.XP,
    ],
  },
  bottom: {
    moves: ['4'],
    tags: [
      TAGS.EFFECTS.STRENGTHEN,
      TAGS.TARGETS.ADJACENT_ALLY,
    ],
  },
};
