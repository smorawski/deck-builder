import image from './dirt-tornado.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'dirtTornado',
  initiative: 82,
  image,
  level: LEVELS[1],
  top: {
    attacks: ['1'],
    tags: [
      TAGS.TARGETS.AREA,
      TAGS.OTHER.RANGED,
      TAGS.USE_ELEMENTS.EARTH,
      TAGS.EFFECTS.MUDDLE,
      TAGS.OTHER.XP,
    ],
  },
  bottom: {
    moves: ['3'],
  },
};
