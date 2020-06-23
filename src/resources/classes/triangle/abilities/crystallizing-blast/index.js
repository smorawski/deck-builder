import image from './crystallizing-blast.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'crystallizing-blast',
  initiative: 67,
  image,
  level: LEVELS[2],
  top: {
    attacks: ['1'],
    tags: [
      TAGS.OTHER.RANGED,
      TAGS.TARGETS.AREA,
      TAGS.INCREASE_ELEMENTS.FROST,
    ],
  },
  bottom: {
    moves: ['4'],
    tags: [
      TAGS.USE_ELEMENTS.FROST,
      TAGS.EFFECTS.SHIELD,
      TAGS.DURATION.ONE_ROUND,
    ],
  },
};
