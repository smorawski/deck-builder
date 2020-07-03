import image from './stoking-hail.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'stokingHail',
  initiative: 28,
  image,
  level: LEVELS[1],
  top: {
    attacks: ['2'],
    tags: [
      TAGS.OTHER.RANGED,
      TAGS.USE_ELEMENTS.FROST,
      TAGS.EFFECTS.STUN,
      TAGS.OTHER.XP,
    ],
  },
  bottom: {
    moves: ['2'],
    tags: [
      TAGS.INCREASE_ELEMENTS.FIRE,
    ],
  },
};
