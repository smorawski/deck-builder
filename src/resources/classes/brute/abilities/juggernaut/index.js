import image from './juggernaut.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'juggernaut',
  initiative: 34,
  image,
  level: LEVELS[2],
  top: {
    moves: ['2'],
    attacks: ['2'],
  },
  bottom: {
    tags: [
      TAGS.CLASSES.BRUTE,
      TAGS.OTHER.XP,
      TAGS.OTHER.LOST,
    ],
  },
};
