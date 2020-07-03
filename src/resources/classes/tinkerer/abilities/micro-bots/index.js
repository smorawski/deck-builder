import image from './micro-bots.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'microBots',
  initiative: 22,
  image,
  level: LEVELS[4],
  top: {
    tags: [
      TAGS.ACTIONS.HEAL,
      TAGS.OTHER.RANGED,
      TAGS.OTHER.XP,
      TAGS.OTHER.LOST,
    ],
  },
  bottom: {
    moves: ['3'],
    tags: [
      TAGS.ACTIONS.LOOT,
      TAGS.OTHER.LOST,
    ],
  },
};
