import image from './vile-pestilence.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'vilePestilence',
  initiative: 61,
  image,
  level: LEVELS[1],
  top: {
    attacks: ['1'],
    tags: [
      TAGS.OTHER.RANGED,
      TAGS.TARGETS.AREA,
      TAGS.EFFECTS.POISON,
    ],
  },
  bottom: {
    moves: ['3'],
  },
};
