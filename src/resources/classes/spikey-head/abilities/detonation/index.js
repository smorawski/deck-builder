import image from './detonation.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'detonation',
  initiative: 54,
  image,
  level: LEVELS[1],
  top: {
    tags: [
      TAGS.ACTIONS.CREATE_TRAP,
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
