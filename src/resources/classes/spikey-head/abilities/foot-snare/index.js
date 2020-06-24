import image from './foot-snare.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'footSnare',
  initiative: 61,
  image,
  level: LEVELS[1],
  top: {
    tags: [
      TAGS.ACTIONS.CREATE_TRAP,
      TAGS.EFFECTS.IMMOBILIZE,
    ],
  },
  bottom: {
    moves: ['3'],
    tags: [
      TAGS.EFFECTS.IMMOBILIZE,
    ],
  },
};
