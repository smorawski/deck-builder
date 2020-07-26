import image from './angelic-ascension.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'angelicAscension',
  initiative: 87,
  image,
  level: LEVELS[9],
  top: {
    tags: [
      TAGS.EFFECTS.INCREASE_ATTACK,
      TAGS.EFFECTS.WOUND,
      TAGS.OTHER.XP,
      TAGS.DURATION.USES,
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
