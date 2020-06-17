import image from './interplanar-mastery.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'interplanarMastery',
  initiative: 22,
  image,
  level: LEVELS[9],
  top: {
    tags: [
      TAGS.EFFECTS.RECOVER,
      TAGS.OTHER.LOST,
    ],
  },
  bottom: {
    moves: ['6'],
    tags: [
      TAGS.EFFECTS.JUMP,
    ],
  },
};
