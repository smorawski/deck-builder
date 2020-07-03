import image from './boiling-arc.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'boilingArc',
  initiative: 47,
  image,
  level: LEVELS[2],
  top: {
    attacks: [2],
    tags: [
      TAGS.TARGETS.AREA,
      TAGS.INCREASE_ELEMENTS.FIRE,
    ],
  },
  bottom: {
    moves: ['4'],
    tags: [
      TAGS.USE_ELEMENTS.FIRE,
      TAGS.EFFECTS.RETALIATE,
      TAGS.OTHER.RANGED,

    ],
  },
};
