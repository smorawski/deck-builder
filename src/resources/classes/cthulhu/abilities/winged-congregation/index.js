import image from './winged-congregation.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'wingedCongregation',
  initiative: 16,
  image,
  level: LEVELS[1],
  top: {
    tags: [
      TAGS.EFFECTS.JUMP,
      TAGS.INCREASE_ELEMENTS.AIR,
      TAGS.OTHER.XP,
      TAGS.DURATION.PERMANENT,
      TAGS.OTHER.LOST,
    ],
  },
  bottom: {
    moves: ['2'],
    tags: [
      TAGS.ACTIONS.HEAL,
      TAGS.TARGETS.MULTIPLE,
    ],
  },
};
