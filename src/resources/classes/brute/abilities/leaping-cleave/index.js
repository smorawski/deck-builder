import image from './leaping-cleave.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'leapingCleave',
  initiative: 54,
  image,
  level: LEVELS[1],
  top: {
    attacks: ['3'],
    tags: [
      TAGS.TARGETS.AREA,
      TAGS.OTHER.XP,
    ],
  },
  bottom: {
    moves: ['3'],
    tags: [
      TAGS.EFFECTS.JUMP,
      TAGS.INCREASE_ELEMENTS.AIR,
    ],
  },
};
