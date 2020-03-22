import image from './quick-hands.jpg';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'quickHands',
  initiative: 64,
  image,
  level: LEVELS[1],
  top: {
    attacks: ['2'],
    moves: ['2'],
  },
  bottom: {
    tags: [
      TAGS.ACTIONS.LOOT,
    ],
  },
};
