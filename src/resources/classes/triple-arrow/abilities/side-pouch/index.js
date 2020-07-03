import image from './side-pouch.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'sidePouch',
  initiative: 84,
  image,
  level: LEVELS[4],
  top: {
    tags: [
      TAGS.EFFECTS.REFRESH,
      TAGS.OTHER.XP,
      TAGS.OTHER.LOST,
    ],
  },
  bottom: {
    moves: ['3'],
    tags: [
      TAGS.ACTIONS.LOOT,
    ],
  },
};
