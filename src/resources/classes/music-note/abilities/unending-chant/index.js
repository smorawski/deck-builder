import image from './unending-chant.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'unendingChant',
  initiative: 51,
  image,
  level: LEVELS.X,
  top: {
    tags: [
      TAGS.EFFECTS.CURSE,
      TAGS.DURATION.USES,
      TAGS.OTHER.LOST,
    ],
  },
  bottom: {
    moves: ['2'],
    tags: [
      TAGS.EFFECTS.SHIELD,
      TAGS.TARGETS.MULTIPLE,
      TAGS.DURATION.ONE_ROUND,
    ],
  },
};
