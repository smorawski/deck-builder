import image from './malleable-evocation.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'malleableEvocation',
  initiative: 50,
  image,
  level: LEVELS.X,
  top: {
    attacks: ['0'],
    tags: [
      TAGS.OTHER.RANGED,
      TAGS.OTHER.XP,
      TAGS.USE_ELEMENTS.FIRE,
      TAGS.EFFECTS.WOUND,
      TAGS.USE_ELEMENTS.AIR,
      TAGS.TARGETS.MULTIPLE,
      TAGS.USE_ELEMENTS.FROST,
      TAGS.EFFECTS.IMMOBILIZE,
      TAGS.USE_ELEMENTS.EARTH,
      TAGS.EFFECTS.POISON,
    ],
  },
  bottom: {
    moves: ['2'],
    tags: [
      TAGS.USE_ELEMENTS.FIRE,
      TAGS.USE_ELEMENTS.AIR,
      TAGS.EFFECTS.JUMP,
      TAGS.USE_ELEMENTS.FROST,
      TAGS.ACTIONS.HEAL,
      TAGS.USE_ELEMENTS.EARTH,
      TAGS.EFFECTS.SHIELD,
      TAGS.DURATION.ONE_ROUND,
    ],
  },
};
