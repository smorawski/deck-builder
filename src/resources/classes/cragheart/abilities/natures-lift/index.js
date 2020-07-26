import image from './natures-lift.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'naturesLift',
  initiative: 64,
  image,
  level: LEVELS.X,
  top: {
    tags: [
      TAGS.ACTIONS.HEAL,
      TAGS.TARGETS.MULTIPLE,
      TAGS.OTHER.RANGED,
    ],
  },
  bottom: {
    tags: [
      TAGS.USE_ELEMENTS.AIR,
      TAGS.EFFECTS.INCREASE_ATTACK,
      TAGS.OTHER.XP,
      TAGS.DURATION.USES,
      TAGS.OTHER.LOST,
    ],
  },
};
