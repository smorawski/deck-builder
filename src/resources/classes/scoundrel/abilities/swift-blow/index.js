import image from './swift-blow.jpg';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'swiftBlow',
  initiative: 36,
  image,
  level: LEVELS.X,
  top: {
    attacks: ['3'],
    tags: [
      TAGS.OTHER.RANGED,
    ],
  },
  bottom: {
    moves: ['2'],
    tags: [
      TAGS.ACTIONS.LOOT,
    ],
  },
};
