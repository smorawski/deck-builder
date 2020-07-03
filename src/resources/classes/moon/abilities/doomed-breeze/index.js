import image from './doomed-breeze.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'doomedBreeze',
  initiative: 15,
  image,
  level: LEVELS[1],
  top: {
    attacks: ['1'],
    tags: [
      TAGS.OTHER.RANGED,
      TAGS.EFFECTS.MUDDLE,
      TAGS.INCREASE_ELEMENTS.DARKNESS,
      TAGS.OTHER.XP,
    ],
  },
  bottom: {
    moves: ['3'],
    tags: [
      TAGS.EFFECTS.CURSE,
    ],
  },
};
