import image from './unstoppable-charge.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'unstoppableCharge',
  initiative: 86,
  image,
  level: LEVELS[4],
  top: {
    attacks: ['5'],
    tags: [
      TAGS.OTHER.XP,
    ],
  },
  bottom: {
    moves: ['4'],
    tags: [
      TAGS.EFFECTS.STUN,
      TAGS.TARGETS.ADJACENT_ENEMY,
      TAGS.TARGETS.MULTIPLE,
      TAGS.OTHER.LOST,
    ],
  },
};
