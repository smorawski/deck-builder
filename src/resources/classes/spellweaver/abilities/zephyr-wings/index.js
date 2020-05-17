import image from './zephyr-wings.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'zephyrWings',
  initiative: 85,
  image,
  level: LEVELS[8],
  top: {
    tags: [
      TAGS.ACTIONS.LOOT,
      TAGS.USE_ELEMENTS.AIR,
      TAGS.OTHER.XP,
    ],
  },
  bottom: {
    moves: ['8'],
    tags: [
      TAGS.EFFECTS.JUMP,
      TAGS.USE_ELEMENTS.AIR,
      TAGS.OTHER.XP,
      TAGS.OTHER.LOST,
    ],
  },
};
