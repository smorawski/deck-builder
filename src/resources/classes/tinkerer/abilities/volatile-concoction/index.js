import image from './volatile-concoction.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'volatileConcoction',
  initiative: 76,
  image,
  level: LEVELS.X,
  top: {
    tags: [
      TAGS.ACTIONS.CREATE_TRAP,
      TAGS.EFFECTS.POISON,
    ],
  },
  bottom: {
    tags: [
      TAGS.EFFECTS.RECOVER,
      TAGS.USE_ELEMENTS.FROST,
      TAGS.OTHER.RANGE,
    ],
  },
};
