import image from './grab-and-go.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'grabAndGo',
  initiative: 87,
  image,
  level: LEVELS[1],
  top: {
    tags: [
      TAGS.ACTIONS.LOOT,
    ],
  },
  bottom: {
    moves: ['4'],
  },
};
