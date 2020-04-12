import image from './disorienting-flash.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'disorientingFlash',
  initiative: 73,
  image,
  level: LEVELS[2],
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
    moves: ['2'],
    tags: [
      TAGS.EFFECTS.MUDDLE,
    ],
  },
};
