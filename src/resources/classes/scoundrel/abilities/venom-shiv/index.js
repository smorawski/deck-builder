import image from './venom-shiv.jpg';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'venomShiv',
  initiative: 60,
  image,
  level: LEVELS[1],
  top: {
    attacks: ['3'],
    tags: [
      TAGS.OTHER.XP,
      TAGS.EFFECTS.POISON,
    ],
  },
  bottom: {
    moves: ['5'],
  },
};
