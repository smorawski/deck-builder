import image from './spirit-of-doom.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'spiritOfDoom',
  initiative: 81,
  image,
  level: LEVELS[4],
  top: {
    tags: [
      TAGS.EFFECTS.CURSE,
      TAGS.OTHER.RANGED,
      TAGS.USE_ELEMENTS.DARKNESS,
      TAGS.ACTIONS.KILL_ENEMY,
      TAGS.OTHER.XP,
      TAGS.OTHER.LOST,
    ],
  },
  bottom: {
    tags: [
      TAGS.ACTIONS.HEAL,
      TAGS.USE_ELEMENTS.LIGHT,
      TAGS.OTHER.XP,
      TAGS.OTHER.LOST,
    ],
  },
};
