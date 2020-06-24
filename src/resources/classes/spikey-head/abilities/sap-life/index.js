import image from './sap-life.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'sapLife',
  initiative: 14,
  image,
  level: LEVELS.X,
  top: {
    tags: [
      TAGS.EFFECTS.RETALIATE,
      TAGS.OTHER.RANGED,
      TAGS.OTHER.XP,
      TAGS.DURATION.ONE_ROUND,
      TAGS.OTHER.LOST,
    ],
  },
  bottom: {
    tags: [
      TAGS.CLASSES.SPIKEY_HEAD,
      TAGS.ACTIONS.HEAL,
      TAGS.DURATION.PERMANENT,
    ],
  },
};
