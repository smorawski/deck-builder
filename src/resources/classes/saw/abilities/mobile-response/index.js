import image from './mobile-response.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'mobileResponse',
  initiative: 12,
  image,
  level: LEVELS[1],
  top: {
    tags: [
      TAGS.OTHER.XP,
      TAGS.DURATION.PERMANENT,
      TAGS.OTHER.LOST,
    ],
  },
  bottom: {
    moves: ['5'],
    tags: [
      TAGS.EFFECTS.WOUND,
      TAGS.TARGETS.MULTIPLE,
      TAGS.OTHER.XP,
      TAGS.OTHER.LOST,
    ],
  },
};
