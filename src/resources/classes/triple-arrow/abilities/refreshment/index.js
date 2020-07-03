import image from './refreshment.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'refreshment',
  initiative: 89,
  image,
  level: LEVELS[7],
  top: {
    tags: [
      TAGS.EFFECTS.REFRESH,
      TAGS.OTHER.XP,
      TAGS.DURATION.PERMANENT,
      TAGS.OTHER.LOST,
    ],
  },
  bottom: {
    moves: [],
    tags: [
      TAGS.EFFECTS.RECOVER,
      TAGS.OTHER.XP,
      TAGS.OTHER.LOST,
    ],
  },
};
