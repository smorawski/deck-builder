import image from './surgeons-satchel.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'surgeonsSatchel',
  initiative: 10,
  image,
  level: LEVELS[7],
  top: {
    tags: [
      TAGS.ACTIONS.LOOT,
      TAGS.ACTIONS.HEAL,
      TAGS.TARGETS.ADJACENT_ALLY,
      TAGS.TARGETS.MULTIPLE,
      TAGS.OTHER.LOST,
    ],
  },
  bottom: {
    moves: ['4'],
    tags: [
      TAGS.CLASSES.SAW,
      TAGS.TARGETS.ADJACENT_ALLY,
      TAGS.OTHER.XP,
    ],
  },
};
