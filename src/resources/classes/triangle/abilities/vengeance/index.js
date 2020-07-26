import image from './vengeance.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'vengeance',
  initiative: 33,
  image,
  level: LEVELS[7],
  top: {
    attacks: ['2'],
    tags: [
      TAGS.OTHER.RANGED,
      TAGS.TARGETS.AREA,
      TAGS.USE_ELEMENTS.DARKNESS,
      TAGS.USE_ELEMENTS.ANY,
      TAGS.ACTIONS.KILL_ENEMY,
      TAGS.OTHER.XP,
    ],
  },
  bottom: {
    moves: ['3'],
    tags: [
      TAGS.EFFECTS.RETALIATE,
      TAGS.TARGETS.ADJACENT_ALLY,
      TAGS.USE_ELEMENTS.LIGHT,
      TAGS.USE_ELEMENTS.ANY,
      TAGS.OTHER.XP,
      TAGS.DURATION.ONE_ROUND,
    ],
  },
};
