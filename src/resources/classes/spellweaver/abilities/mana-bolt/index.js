import image from './mana-bolt.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'manaBolt',
  initiative: 7,
  image,
  level: LEVELS[1],
  top: {
    attacks: [2],
    tags: [
      TAGS.OTHER.RANGED,
      TAGS.USE_ELEMENTS.ANY,
      TAGS.OTHER.XP,
    ],
  },
  bottom: {
    tags: [
      TAGS.ACTIONS.HEAL,
    ],
  },
};
