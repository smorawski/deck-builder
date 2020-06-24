import image from './swift-trickery.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'swiftTrickery',
  initiative: 11,
  image,
  level: LEVELS[1],
  top: {
    attacks: ['2'],
    tags: [
      TAGS.OTHER.RANGED,
      TAGS.CLASSES.SPIKEY_HEAD,
      TAGS.OTHER.XP,
    ],
  },
  bottom: {
    moves: ['5'],
    tags: [
    ],
  },
};
