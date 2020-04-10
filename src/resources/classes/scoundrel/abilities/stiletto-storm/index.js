import image from './stiletto-storm.jpg';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'stilettoStorm',
  initiative: 80,
  image,
  level: LEVELS[8],
  top: {
    attacks: ['2'],
    tags: [
      TAGS.OTHER.RANGED,
      TAGS.TARGETS.MULTIPLE,
      TAGS.OTHER.XP,
    ],
  },
  bottom: {
    moves: ['4'],
    tags: [
      TAGS.EFFECTS.RETALIATE,
      TAGS.DURATION.ONE_ROUND,
    ],
  },
};
