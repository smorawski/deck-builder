import image from './volatile-consumption.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'volatileConsumption',
  initiative: 64,
  image,
  level: LEVELS[8],
  top: {
    tags: [
      TAGS.ACTIONS.HEAL,
      TAGS.USE_ELEMENTS.ANY,
      TAGS.OTHER.RANGED,
      TAGS.OTHER.XP,
      TAGS.DURATION.PERMANENT,
      TAGS.OTHER.LOST,
    ],
  },
  bottom: {
    moves: ['3'],
    tags: [
      TAGS.EFFECTS.JUMP,
      TAGS.USE_ELEMENTS.FIRE,
      TAGS.EFFECTS.WOUND,
      TAGS.USE_ELEMENTS.FROST,
      TAGS.EFFECTS.IMMOBILIZE,
      TAGS.USE_ELEMENTS.ANY,
      TAGS.OTHER.XP,
    ],
  },
};
