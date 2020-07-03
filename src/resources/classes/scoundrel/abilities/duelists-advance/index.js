import image from './duelists-advance.jpg';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'duelistAdvance',
  initiative: 16,
  image,
  level: LEVELS[3],
  top: {
    moves: ['3'],
    attacks: ['3'],
  },
  bottom: {
    moves: [
      TAGS.DURATION.ONE_ROUND,
      TAGS.CLASSES.SCOUNDREL,
    ],
  },
};
