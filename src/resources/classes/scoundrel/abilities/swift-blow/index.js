import image from './swift-blow.jpg';
import TAGS from '../../../../other/tags';

export default {
  name: 'swiftBlow',
  initiative: 36,
  image,
  level: 'x',
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
