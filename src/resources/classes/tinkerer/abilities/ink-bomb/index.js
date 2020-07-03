import image from './ink-bomb.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'inkBomb',
  initiative: 74,
  image,
  level: LEVELS[1],
  top: {
    attacks: ['4'],
    tags: [
      TAGS.TARGETS.AREA,
      TAGS.OTHER.RANGED,
      TAGS.INCREASE_ELEMENTS.DARKNESS,
      TAGS.OTHER.XP,
      TAGS.OTHER.LOST,
    ],
  },
  bottom: {
    moves: ['4'],
  },
};
