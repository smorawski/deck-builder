import image from './biting-wind.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'bitingWind',
  initiative: 25,
  image,
  level: LEVELS[1],
  top: {
    attacks: ['2'],
    tags: [
      TAGS.OTHER.RANGED,
      TAGS.USE_ELEMENTS.AIR,
      TAGS.ACTIONS.PUSH,
      TAGS.OTHER.LOST,
    ],
  },
  bottom: {
    tags: [
      TAGS.ACTIONS.HEAL,
      TAGS.OTHER.RANGED,
    ],
  },
};
