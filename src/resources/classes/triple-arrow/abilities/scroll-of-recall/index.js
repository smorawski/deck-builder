import image from './scroll-of-recall.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'scrollOfRecall',
  initiative: 98,
  image,
  level: LEVELS.X,
  top: {
    tags: [
      TAGS.EFFECTS.REFRESH,
    ],
  },
  bottom: {
    tags: [
      TAGS.ACTIONS.PULL,
      TAGS.OTHER.RANGED,
      TAGS.TARGETS.MULTIPLE,
    ],
  },
};
