import image from './final-fight.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'finalFight',
  initiative: 89,
  image,
  level: LEVELS[5],
  top: {
    tags: [
      TAGS.OTHER.XP,
    ],
  },
  bottom: {
    moves: ['X'],
    attacks: ['4'],
    tags: [
      TAGS.USE_ELEMENTS.FIRE,
    ],
  },
};
