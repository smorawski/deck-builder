import image from './cleaving-axe.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'cleavingAxe',
  initiative: 52,
  image,
  level: LEVELS[1],
  top: {
    attacks: ['2'],
    tags: [
      TAGS.OTHER.XP,
      TAGS.TARGETS.AREA,
    ],
  },
  bottom: {
    moves: ['4'],
  },
};
