import image from './inspiration-from-beyond.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'inspirationFromBeyond',
  initiative: 28,
  image,
  level: LEVELS.X,
  top: {
    tags: [
      TAGS.CLASSES.DIVINER,
      TAGS.EFFECTS.BLESS,
      TAGS.DURATION.ONE_ROUND,
    ],
  },
  bottom: {
    moves: ['3'],
    tags: [
      TAGS.ACTIONS.HEAL,
      TAGS.EFFECTS.REGENERATE,
    ],
  },
};
