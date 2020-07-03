import image from './devastating-hack.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'devastatingHack',
  initiative: 27,
  image,
  level: LEVELS[4],
  top: {
    attacks: ['8'],
    tags: [
      TAGS.OTHER.XP,
      TAGS.OTHER.LOST,
    ],
  },
  bottom: {
    tags: [
      TAGS.ACTIONS.LOOT,
    ],
  },
};
