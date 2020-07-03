import image from './hand-of-the-surgeon.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'handOfTheSurgeon',
  initiative: 62,
  image,
  level: LEVELS[1],
  top: {
    attacks: ['4'],
    tags: [
      TAGS.OTHER.XP,
    ],
  },
  bottom: {
    tags: [
      TAGS.ACTIONS.HEAL,
      TAGS.DURATION.ONE_ROUND,
      TAGS.TARGETS.MULTIPLE,
    ],
  },
};
