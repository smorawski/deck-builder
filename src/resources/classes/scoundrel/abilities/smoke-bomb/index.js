import image from './smoke-bomb.jpg';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'smokeBomb',
  initiative: 12,
  image,
  level: LEVELS[1],
  top: {
    tags: [
      TAGS.EFFECTS.INVISIBLE,
      TAGS.OTHER.XP,
      TAGS.DURATION.USES,
      TAGS.INCREASE_ELEMENTS.DARKNESS,
    ],
  },
  bottom: {
    tags: [
      TAGS.ACTIONS.PULL,
      TAGS.OTHER.RANGED,
    ],
  },
};
