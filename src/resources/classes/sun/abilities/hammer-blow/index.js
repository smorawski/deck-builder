import image from './hammer-blow.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'hammerBlow',
  initiative: 55,
  image,
  level: LEVELS[1],
  top: {
    attacks: ['4'],
    tags: [
      TAGS.USE_ELEMENTS.LIGHT,
      TAGS.OTHER.XP,
    ],
  },
  bottom: {
    moves: ['4'],
  },
};
