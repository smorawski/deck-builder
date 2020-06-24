import image from './quiet-frenzy.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'quietFrenzy',
  initiative: 19,
  image,
  level: LEVELS[7],
  top: {
    attacks: ['3'],
    tags: [
      TAGS.CLASSES.MOON,
      TAGS.USE_ELEMENTS.DARKNESS,
      TAGS.OTHER.XP,
    ],
  },
  bottom: {
    attacks: ['3'],
    moves: ['3'],
  },
};
