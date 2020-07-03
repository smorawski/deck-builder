import image from './mobilizing-axiom.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'mobilizingAxiom',
  initiative: 23,
  image,
  level: LEVELS[3],
  top: {
    attacks: ['4'],
    tags: [
      TAGS.INCREASE_ELEMENTS.LIGHT,
    ],
  },
  bottom: {
    moves: ['4'],
    tags: [
      TAGS.OTHER.RANGED,
      TAGS.TARGETS.MULTIPLE,
      TAGS.OTHER.XP,
      TAGS.OTHER.LOST,
    ],
  },
};
