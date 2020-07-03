import image from './inescapable-fate.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'inescapableFate',
  initiative: 97,
  image,
  level: LEVELS[5],
  top: {
    tags: [
      TAGS.CLASSES.SPIKEY_HEAD,
      TAGS.OTHER.XP,
      TAGS.DURATION.PERMANENT,
      TAGS.OTHER.LOST,
    ],
  },
  bottom: {
    tags: [
      TAGS.CLASSES.SPIKEY_HEAD,
      TAGS.DURATION.USES,
      TAGS.ACTIONS.KILL_ENEMY,
    ],
  },
};
