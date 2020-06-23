import image from './primal-duality.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'primalDuality',
  initiative: 15,
  image,
  level: LEVELS[4],
  top: {
    attacks: ['5'],
    tags: [
      TAGS.OTHER.RANGED,
      TAGS.TARGETS.MULTIPLE,
      TAGS.INCREASE_ELEMENTS.FROST,
      TAGS.INCREASE_ELEMENTS.FIRE,
      TAGS.OTHER.XP,
      TAGS.OTHER.LOST,
    ],
  },
  bottom: {
    moves: ['2'],
    tags: [
      TAGS.INCREASE_ELEMENTS.LIGHT,
      TAGS.INCREASE_ELEMENTS.DARKNESS,
    ],
  },
};
