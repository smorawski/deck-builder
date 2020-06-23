import image from './winters-edge.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'wintersEdge',
  initiative: 43,
  image,
  level: LEVELS[5],
  top: {
    attacks: ['5'],
    tags: [
      TAGS.OTHER.RANGED,
      TAGS.USE_ELEMENTS.FROST,
      TAGS.USE_ELEMENTS.AIR,
      TAGS.EFFECTS.PIERCE,
      TAGS.OTHER.XP,
    ],
  },
  bottom: {
    tags: [
      TAGS.ACTIONS.HEAL,
      TAGS.OTHER.RANGED,
      TAGS.INCREASE_ELEMENTS.FIRE,
      TAGS.INCREASE_ELEMENTS.LIGHT,
    ],
  },
};
