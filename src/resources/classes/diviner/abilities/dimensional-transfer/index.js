import image from './dimensional-transfer.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'dimensionalTransfer',
  initiative: 57,
  image,
  level: LEVELS[1],
  top: {
    tags: [
      TAGS.EFFECTS.INVISIBLE,
      TAGS.EFFECTS.STUN,
      TAGS.OTHER.RANGED,
      TAGS.INCREASE_ELEMENTS.DARKNESS,
      TAGS.OTHER.XP,
    ],
  },
  bottom: {
    tags: [
      TAGS.ACTIONS.TELEPORT,
    ],
  },
};
