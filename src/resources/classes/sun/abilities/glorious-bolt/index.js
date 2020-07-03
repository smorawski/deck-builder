import image from './glorious-bolt.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'gloriousBolt',
  initiative: 39,
  image,
  level: LEVELS.X,
  top: {
    tags: [
      TAGS.ACTIONS.HEAL,
      TAGS.OTHER.RANGED,
      TAGS.USE_ELEMENTS.LIGHT,
      TAGS.TARGETS.MULTIPLE,
      TAGS.OTHER.XP,
      TAGS.OTHER.LOST,
    ],
  },
  bottom: {
    attacks: ['2'],
    tags: [
      TAGS.OTHER.RANGED,
      TAGS.EFFECTS.MUDDLE,
    ],
  },
};
