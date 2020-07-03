import image from './fortified-position.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'fortifiedPosition',
  initiative: 10,
  image,
  level: LEVELS[8],
  top: {
    tags: [
      TAGS.ACTIONS.HEAL,
      TAGS.TARGETS.MULTIPLE,
      TAGS.DURATION.USES,
      TAGS.OTHER.XP,
      TAGS.OTHER.LOST,
    ],
  },
  bottom: {
    moves: ['3'],
    tags: [
      TAGS.EFFECTS.SHIELD,
      TAGS.DURATION.ONE_ROUND,
    ],
  },
};
