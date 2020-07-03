import image from './rising-momentum.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'risingMomentum',
  initiative: 12,
  image,
  level: LEVELS[8],
  top: {
    attacks: ['6'],
    tags: [
      TAGS.OTHER.RANGED,
      TAGS.ACTIONS.PUSH,
      TAGS.OTHER.XP,
      TAGS.OTHER.LOST,
    ],
  },
  bottom: {
    tags: [
      TAGS.CLASSES.SPIKEY_HEAD,
      TAGS.DURATION.PERMANENT,
    ],
  },
};
