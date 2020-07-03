import image from './enhancement-field.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'enhancementField',
  initiative: 61,
  image,
  level: LEVELS[1],
  top: {
    attacks: ['3'],
    tags: [
      TAGS.OTHER.RANGED,
    ],
  },
  bottom: {
    tags: [
      TAGS.DURATION.ONE_ROUND,
    ],
  },
};
