import image from './oversized-pack.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'oversizedPack',
  initiative: 81,
  image,
  level: LEVELS[1],
  top: {
    tags: [
      TAGS.ACTIONS.LOOT,
    ],
  },
  bottom: {
    tags: [
      TAGS.EFFECTS.RECOVER,
      TAGS.OTHER.XP,
      TAGS.OTHER.LOST,
    ],
  },
};
