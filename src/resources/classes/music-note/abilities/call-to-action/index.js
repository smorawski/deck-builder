import image from './call-to-action.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'callToAction',
  initiative: 85,
  image,
  level: LEVELS[1],
  top: {
    tags: [
      TAGS.EFFECTS.STRENGTHEN,
      TAGS.TARGETS.MULTIPLE,
    ],
  },
  bottom: {
    attacks: ['4'],
    tags: [
      TAGS.OTHER.RANGED,
    ],
  },
};
