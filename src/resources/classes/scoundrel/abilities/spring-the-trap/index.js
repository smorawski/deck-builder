import image from './spring-the-trap.jpg';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'springTheTrap',
  initiative: 13,
  image,
  level: LEVELS[7],
  top: {
    tags: [
      TAGS.ACTIONS.DISARM_TRAP,
      TAGS.OTHER.RANGED,
      TAGS.OTHER.XP,
    ],
  },
  bottom: {
    tags: [
      TAGS.DURATION.USES,
      TAGS.OTHER.XP,
      TAGS.CLASSES.SCOUNDREL,
    ],
  },
};
