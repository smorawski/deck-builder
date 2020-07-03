import image from './infernal-vortex.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'infernalVortex',
  initiative: 17,
  image,
  level: LEVELS[1],
  top: {
    attacks: ['4'],
    tags: [
      TAGS.TARGETS.MULTIPLE,
      TAGS.OTHER.RANGED,
      TAGS.INCREASE_ELEMENTS.FIRE,
      TAGS.INCREASE_ELEMENTS.AIR,
      TAGS.OTHER.XP,
      TAGS.OTHER.LOST,
    ],
  },
  bottom: {
    moves: ['2'],
    tags: [
      TAGS.INCREASE_ELEMENTS.FROST,
    ],
  },
};
