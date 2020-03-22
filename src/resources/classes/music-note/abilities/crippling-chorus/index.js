import image from './crippling-chorus.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'cripplingChorus',
  initiative: 62,
  image,
  level: LEVELS[3],
  top: {
    tags: [
      TAGS.EFFECTS.STUN,
      TAGS.OTHER.RANGED,
      TAGS.TARGETS.MULTIPLE,
      TAGS.OTHER.XP,
      TAGS.OTHER.LOST,
    ],
  },
  bottom: {
    moves: ['3'],
    tags: [
      TAGS.EFFECTS.DISARM,
    ],
  },
};
