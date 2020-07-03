import image from './reviving-ether.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'revivingEther',
  initiative: 80,
  image,
  level: LEVELS[1],
  top: {
    tags: [
      TAGS.EFFECTS.RECOVER,
      TAGS.INCREASE_ELEMENTS.DARKNESS,
      TAGS.OTHER.LOST,
    ],
  },
  bottom: {
    moves: ['4'],
    tags: [
      TAGS.EFFECTS.JUMP,
    ],
  },
};
