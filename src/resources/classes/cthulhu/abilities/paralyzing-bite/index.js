import image from './paralyzing-bite.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'paralyzingBite',
  initiative: 31,
  image,
  level: LEVELS[1],
  top: {
    attacks: ['1'],
    tags: [
      TAGS.OTHER.RANGED,
      TAGS.EFFECTS.STUN,
      TAGS.OTHER.XP,
    ],
  },
  bottom: {
    moves: ['6'],
    tags: [
      TAGS.EFFECTS.JUMP,
      TAGS.INCREASE_ELEMENTS.AIR,
      TAGS.OTHER.XP,
      TAGS.OTHER.LOST,
    ],
  },
};
