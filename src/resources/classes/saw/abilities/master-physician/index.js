import image from './master-physician.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'masterPhysician',
  initiative: 49,
  image,
  level: LEVELS[7],
  top: {
    tags: [
      TAGS.ACTIONS.HEAL,
      TAGS.DURATION.USES,
      TAGS.OTHER.XP,
      TAGS.OTHER.LOST,
    ],
  },
  bottom: {
    tags: [
      TAGS.ACTIONS.HEAL,
      TAGS.DURATION.ONE_ROUND,
    ],
  },
};
