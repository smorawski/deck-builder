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
      TAGS.OTHER.LOST,
      TAGS.TARGETS.MULTIPLE,
    ],
  },
  bottom: {
    moves: ['4'],
    tags: [
      TAGS.CLASSES.SAW,
      TAGS.OTHER.XP,
    ],
  },
};
