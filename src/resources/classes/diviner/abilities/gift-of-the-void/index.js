import image from './gift-of-the-void.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'giftOfTheVoid',
  initiative: 72,
  image,
  level: LEVELS[2],
  top: {
    tags: [
      TAGS.EFFECTS.BLESS,
      TAGS.EFFECTS.STRENGTHEN,
      TAGS.OTHER.RANGED,
      TAGS.OTHER.XP,
    ],
  },
  bottom: {
    moves: ['3'],
    tags: [
      TAGS.OTHER.RANGED,
    ],
  },
};
