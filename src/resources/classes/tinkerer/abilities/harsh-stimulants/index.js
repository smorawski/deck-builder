import image from './harsh-stimulants.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'harshStimulants',
  initiative: 27,
  image,
  level: LEVELS[8],
  top: {
    attacks: ['9'],
    tags: [
      TAGS.OTHER.XP,
      TAGS.OTHER.LOST,
    ],
  },
  bottom: {
    tags: [
      TAGS.DURATION.ONE_ROUND,
    ],
  },
};
