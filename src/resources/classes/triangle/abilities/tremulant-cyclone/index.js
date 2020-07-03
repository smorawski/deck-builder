import image from './tremulant-cyclone.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'tremulantCyclon',
  initiative: 26,
  image,
  level: LEVELS[1],
  top: {
    attacks: ['1'],
    tags: [
      TAGS.OTHER.RANGED,
      TAGS.TARGETS.AREA,
      TAGS.USE_ELEMENTS.AIR,
      TAGS.ACTIONS.PUSH,
      TAGS.OTHER.XP,
    ],
  },
  bottom: {
    moves: ['2'],
    tags: [
      TAGS.INCREASE_ELEMENTS.EARTH,
    ],
  },
};
