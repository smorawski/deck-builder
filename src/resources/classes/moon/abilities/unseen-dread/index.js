import image from './unseen-dread.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'unseenDread',
  initiative: 5,
  image,
  level: LEVELS[6],
  top: {
    attacks: ['3'],
    tags: [
      TAGS.INCREASE_ELEMENTS.DARKNESS,
    ],
  },
  bottom: {
    moves: ['6'],
    tags: [
      TAGS.EFFECTS.JUMP,
    ],
  },
};
