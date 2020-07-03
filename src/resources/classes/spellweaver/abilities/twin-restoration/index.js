import image from './twin-restoration.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'twinRestoration',
  initiative: 75,
  image,
  level: LEVELS[7],
  top: {
    tags: [
      TAGS.EFFECTS.RECOVER,
      TAGS.OTHER.LOST,
    ],
  },
  bottom: {
    tags: [
      TAGS.ACTIONS.HEAL,
      TAGS.OTHER.RANGED,
      TAGS.TARGETS.MULTIPLE,
    ],
  },
};
