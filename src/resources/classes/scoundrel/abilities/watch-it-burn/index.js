import image from './watch-it-burn.jpg';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'watchItBurn',
  initiative: 98,
  image,
  level: LEVELS[9],
  top: {
    tags: [
      TAGS.EFFECTS.POISON,
      TAGS.EFFECTS.WOUND,
      TAGS.OTHER.XP,
      TAGS.DURATION.PERMANENT,
      TAGS.OTHER.LOST,
    ],
  },
  bottom: {
    moves: ['5'],
    tags: [
      TAGS.EFFECTS.WOUND,
      TAGS.TARGETS.ADJACENT_ENEMY,
      TAGS.TARGETS.MULTIPLE,
    ],
  },
};
