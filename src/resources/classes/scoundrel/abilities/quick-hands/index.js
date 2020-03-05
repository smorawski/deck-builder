import image from './quick-hands.jpg';
import TAGS from '../../../../other/tags';

export default {
  name: 'quickHands',
  initiative: 64,
  image,
  level: '1',
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
