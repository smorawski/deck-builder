import image from './lay-on-hands.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'layOnHands',
  initiative: 90,
  image,
  level: LEVELS[1],
  top: {
    tags: [
      TAGS.ACTIONS.HEAL,
      TAGS.INCREASE_ELEMENTS.LIGHT,
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
