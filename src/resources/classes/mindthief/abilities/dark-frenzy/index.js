import image from './dark-frenzy.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'darkFrenzy',
  initiative: 10,
  image,
  level: LEVELS[6],
  top: {
    attacks: ['2'],
    tags: [
      TAGS.USE_ELEMENTS.FROST,
      TAGS.USE_ELEMENTS.DARKNESS,
      TAGS.OTHER.XP,
    ],
  },
  bottom: {
    moves: ['3'],
    attacks: ['3'],
    tags: [
      TAGS.OTHER.RANGED,
      TAGS.INCREASE_ELEMENTS.FROST,
      TAGS.OTHER.XP,
    ],
  },
};
