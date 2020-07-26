import image from './spiked-armor.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'spikedArmor',
  initiative: 16,
  image,
  level: LEVELS[3],
  top: {
    tags: [
      TAGS.EFFECTS.RETALIATE,
      TAGS.OTHER.XP,
      TAGS.DURATION.ONE_ROUND,
    ],
  },
  bottom: {
    moves: ['2'],
    attacks: ['2'],
    tags: [
      TAGS.TARGETS.ADJACENT_ENEMY,
      TAGS.TARGETS.MULTIPLE,
    ],
  },
};
