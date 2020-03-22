import image from './change-tempo.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'changeTempo',
  initiative: 91,
  image,
  level: LEVELS[2],
  top: {
    tags: [
      TAGS.EFFECTS.IMMOBILIZE,
      TAGS.OTHER.RANGED,
      TAGS.TARGETS.MULTIPLE,
    ],
  },
  bottom: {
    moves: ['5'],
  },
};
