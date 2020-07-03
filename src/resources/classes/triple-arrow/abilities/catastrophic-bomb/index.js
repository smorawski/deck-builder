import image from './catastrophic-bomb.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'catastrophicBomb',
  initiative: 46,
  image,
  level: LEVELS[6],
  top: {
    attacks: ['1'],
    tags: [
      TAGS.OTHER.RANGED,
      TAGS.OTHER.XP,
      TAGS.TARGETS.AREA,
    ],
  },
  bottom: {
    tags: [
      TAGS.TARGETS.AREA,
      TAGS.OTHER.XP,
    ],
  },
};
