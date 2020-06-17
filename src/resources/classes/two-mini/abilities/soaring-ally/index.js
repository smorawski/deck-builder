import image from './soaring-ally.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'soaringAlly',
  initiative: 77,
  image,
  level: LEVELS.X,
  top: {
    tags: [
      TAGS.ACTIONS.SUMMON,
      TAGS.INCREASE_ELEMENTS.AIR,
      TAGS.OTHER.XP,
      TAGS.OTHER.LOST,
    ],
  },
  bottom: {
    tags: [
      TAGS.CLASSES.TWO_MINI,
      TAGS.ACTIONS.LOOT,
    ],
  },
};
