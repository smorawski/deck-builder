import image from './earthen-steed.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'earthenSteed',
  initiative: 13,
  image,
  level: LEVELS[2],
  top: {
    tags: [
      TAGS.USE_ELEMENTS.EARTH,
      TAGS.EFFECTS.INCREASE_MOVE,
      TAGS.OTHER.XP,
      TAGS.DURATION.PERMANENT,
      TAGS.OTHER.LOST,
    ],
  },
  bottom: {
    moves: ['5'],
    tags: [
      TAGS.EFFECTS.JUMP,
    ],
  },
};
