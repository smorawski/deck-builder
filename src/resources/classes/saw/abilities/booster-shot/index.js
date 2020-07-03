import image from './booster-shot.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'boosterShot',
  initiative: 42,
  image,
  level: LEVELS[1],
  top: {
    tags: [
      TAGS.ACTIONS.HEAL,
      TAGS.OTHER.RANGED,
    ],
  },
  bottom: {
    tags: [
      TAGS.OTHER.XP,
      TAGS.EFFECTS.SHIELD,
      TAGS.DURATION.PERMANENT,
      TAGS.OTHER.LOST,
    ],
  },
};
