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
      TAGS.EFFECTS.INCREASE_ATTACK,
      TAGS.TARGETS.ADJACENT_ALLY,
      TAGS.TARGETS.MULTIPLE,
      TAGS.DURATION.ONE_ROUND,
    ],
  },
};
