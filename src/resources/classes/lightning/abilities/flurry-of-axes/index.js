import image from './flurry-of-axes.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'flurryOfAxes',
  initiative: 27,
  image,
  level: LEVELS[4],
  top: {
    attacks: ['X'],
    tags: [
      TAGS.CLASSES.LIGHTNING,
      TAGS.OTHER.XP,
      TAGS.OTHER.RANGED,
      TAGS.TARGETS.MULTIPLE,
      TAGS.OTHER.LOST,
    ],
  },
  bottom: {
    moves: ['5'],
  },
};
