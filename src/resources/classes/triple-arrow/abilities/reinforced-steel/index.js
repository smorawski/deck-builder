import image from './reinforced-steel.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'reinforcedSteel',
  initiative: 12,
  image,
  level: LEVELS[5],
  top: {
    tags: [
      TAGS.EFFECTS.REFRESH,
      TAGS.DURATION.PERMANENT,
      TAGS.OTHER.XP,
      TAGS.OTHER.LOST,
    ],
  },
  bottom: {
    tags: [
      TAGS.EFFECTS.SHIELD,
      TAGS.TARGETS.ADJACENT_ALLY,
      TAGS.TARGETS.MULTIPLE,
      TAGS.DURATION.ONE_ROUND,
    ],
  },
};
