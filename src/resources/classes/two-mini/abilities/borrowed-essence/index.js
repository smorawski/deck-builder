import image from './borrowed-essence.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'borrowedEssence',
  initiative: 56,
  image,
  level: LEVELS.X,
  top: {
    attacks: ['2'],
    tags: [
      TAGS.OTHER.RANGED,
      TAGS.USE_ELEMENTS.AIR,
      TAGS.OTHER.XP,
      TAGS.ACTIONS.HEAL,
      TAGS.USE_ELEMENTS.EARTH,
      TAGS.OTHER.XP,
    ],
  },
  bottom: {
    tags: [
      TAGS.CLASSES.TWO_MINI,
    ],
  },
};
