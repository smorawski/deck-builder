import image from './concentrated-rage.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'concentratedRage',
  initiative: 51,
  image,
  level: LEVELS[1],
  top: {
    attacks: ['1'],
    tags: [
      TAGS.OTHER.RANGED,
      TAGS.EFFECTS.DISARM,
    ],
  },
  bottom: {
    tags: [
      TAGS.CLASSES.TWO_MINI,
      TAGS.EFFECTS.INCREASE_ATTACK,
      TAGS.DURATION.PERMANENT,
      TAGS.OTHER.LOST,
    ],
  },
};
