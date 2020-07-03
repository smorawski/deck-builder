import image from './flight-of-flame.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'flightOfFlame',
  initiative: 53,
  image,
  level: LEVELS[4],
  top: {
    tags: [
      TAGS.ACTIONS.CREATE_TRAP,
      TAGS.EFFECTS.WOUND,
    ],
  },
  bottom: {
    moves: ['5'],
    tags: [
      TAGS.EFFECTS.JUMP,
    ],
  },
};
