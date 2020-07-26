import image from './scroll-of-lightning.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'scrollOfLightning',
  initiative: 77,
  image,
  level: LEVELS[3],
  top: {
    attacks: ['5'],
    tags: [
      TAGS.OTHER.RANGED,
      TAGS.INCREASE_ELEMENTS.LIGHT,
    ],
  },
  bottom: {
    moves: ['3'],
    tags: [
      TAGS.ACTIONS.PUSH,
      TAGS.TARGETS.ADJACENT_ENEMY,
      TAGS.TARGETS.MULTIPLE,
      TAGS.INCREASE_ELEMENTS.AIR,
    ],
  },
};
