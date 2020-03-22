import image from './fatal-fury.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'fatalFury',
  initiative: 34,
  image,
  level: LEVELS[3],
  top: {
    tags: [
      TAGS.INCREASE_ELEMENTS.FIRE,
      TAGS.OTHER.XP,
    ],
  },
  bottom: {
    attacks: ['2', '2'],
    moves: ['1'],
  },
};
