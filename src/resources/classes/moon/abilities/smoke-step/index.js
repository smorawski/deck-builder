import image from './smoke-step.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'smokeStep',
  initiative: 28,
  image,
  level: LEVELS[1],
  top: {
    moves: ['1'],
    attacks: ['2'],
    tags: [
      TAGS.USE_ELEMENTS.DARKNESS,
      TAGS.OTHER.XP,
    ],
  },
  bottom: {
    moves: ['1'],
    tags: [
      TAGS.INCREASE_ELEMENTS.DARKNESS,
    ],
  },
};
