import image from './hamstring.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'hamstring',
  initiative: 62,
  image,
  level: LEVELS[2],
  top: {
    attacks: ['4'],
    tags: [
      TAGS.EFFECTS.IMMOBILIZE,
      TAGS.OTHER.XP,
    ],
  },
  bottom: {
    moves: ['6'],
    tags: [
      TAGS.EFFECTS.IMMOBILIZE,
    ],
  },
};
