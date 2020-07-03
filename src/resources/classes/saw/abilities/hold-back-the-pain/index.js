import image from './hold-back-the-pain.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'holdBackThePain',
  initiative: 57,
  image,
  level: LEVELS[1],
  top: {
    tags: [
      TAGS.ACTIONS.HEAL,
      TAGS.OTHER.RANGED,
      TAGS.OTHER.XP,
    ],
  },
  bottom: {
    tags: [
      TAGS.TARGETS.MULTIPLE,
      TAGS.DURATION.ONE_ROUND,
    ],
  },
};
