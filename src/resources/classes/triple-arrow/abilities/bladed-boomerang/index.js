import image from './bladed-boomerang.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'bladedBoomerang',
  initiative: 40,
  image,
  level: LEVELS[2],
  top: {
    attacks: ['2'],
    tags: [
      TAGS.OTHER.RANGED,
      TAGS.EFFECTS.WOUND,
      TAGS.OTHER.XP,
    ],
  },
  bottom: {
    moves: ['2', '2'],
    attacks: ['1'],
  },
};
