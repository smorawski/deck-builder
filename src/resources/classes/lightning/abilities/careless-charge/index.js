import image from './careless-charge.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'carelessCharge',
  initiative: 20,
  image,
  level: LEVELS[7],
  top: {
    moves: ['3'],
    attacks: ['4'],
    tags: [
      TAGS.EFFECTS.WOUND,
      TAGS.TARGETS.ADJACENT_ALLY,
      TAGS.ACTIONS.PUSH,
      TAGS.EFFECTS.IMMOBILIZE,
    ],
  },
  bottom: {
    tags: [
      TAGS.OTHER.XP,
      TAGS.DURATION.PERMANENT,
      TAGS.OTHER.LOST,
    ],
  },
};
