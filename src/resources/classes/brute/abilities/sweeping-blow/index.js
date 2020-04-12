import image from './sweeping-blow.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'sweepingBlow',
  initiative: 64,
  image,
  level: LEVELS[1],
  top: {
    attacks: ['2'],
    tags: [
      TAGS.TARGETS.AREA,
    ],
  },
  bottom: {
    moves: ['3'],
    tags: [
      TAGS.ACTIONS.PUSH,
      TAGS.TARGETS.MULTIPLE,
    ],
  },
};
