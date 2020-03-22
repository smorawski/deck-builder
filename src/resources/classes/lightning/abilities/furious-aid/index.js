import image from './furious-aid.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'furiousAid',
  initiative: 43,
  image,
  level: LEVELS[1],
  top: {
    tags: [
      TAGS.ACTIONS.LOOT,
      TAGS.OTHER.XP,
      TAGS.OTHER.LOST,
    ],
  },
  bottom: {
    tags: [
      TAGS.ACTIONS.HEAL,
      TAGS.OTHER.RANGED,
    ],
  },
};
