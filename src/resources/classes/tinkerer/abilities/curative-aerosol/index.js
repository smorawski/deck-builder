import image from './curative-aerosol.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'curativeAerosol',
  initiative: 21,
  image,
  level: LEVELS[7],
  top: {
    moves: ['2', '2'],
    tags: [
      TAGS.ACTIONS.HEAL,
    ],
  },
  bottom: {
    tags: [
      TAGS.ACTIONS.HEAL,
      TAGS.OTHER.RANGED,
      TAGS.TARGETS.MULTIPLE,
      TAGS.OTHER.XP,
      TAGS.OTHER.LOST,
    ],
  },
};
