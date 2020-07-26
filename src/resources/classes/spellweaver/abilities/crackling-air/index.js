import image from './crackling-air.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'cracklingAir',
  initiative: 25,
  image,
  level: LEVELS.X,
  top: {
    tags: [
      TAGS.DURATION.USES,
      TAGS.USE_ELEMENTS.AIR,
      TAGS.EFFECTS.INCREASE_ATTACK,
      TAGS.OTHER.XP,
      TAGS.OTHER.LOST,
    ],
  },
  bottom: {
    moves: ['3'],
    tags: [
      TAGS.USE_ELEMENTS.FIRE,
      TAGS.EFFECTS.RETALIATE,
      TAGS.DURATION.ONE_ROUND,
    ],
  },
};
