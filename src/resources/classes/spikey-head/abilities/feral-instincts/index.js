import image from './feral-instincts.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'feralInstinct',
  initiative: 35,
  image,
  level: LEVELS[8],
  top: {
    moves: ['2'],
    attacks: ['3'],
    tags: [
      TAGS.ACTIONS.LOOT,
    ],
  },
  bottom: {
    moves: ['3'],
    tags: [
      TAGS.ACTIONS.HEAL,
    ],
  },
};
