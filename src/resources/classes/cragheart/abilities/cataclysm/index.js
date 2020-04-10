import image from './cataclysm.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'cataclysm',
  initiative: 26,
  image,
  level: LEVELS[6],
  top: {
    attacks: ['4'],
    tags: [
      TAGS.USE_ELEMENTS.EARTH,
      TAGS.OTHER.XP,
      TAGS.TARGETS.AREA,
      TAGS.EFFECTS.IMMOBILIZE,
      TAGS.OTHER.LOST,
    ],
  },
  bottom: {
    moves: ['3'],
    tags: [
      TAGS.USE_ELEMENTS.EARTH,
    ],
  },
};
