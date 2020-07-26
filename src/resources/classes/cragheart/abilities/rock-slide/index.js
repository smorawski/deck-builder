import image from './rock-slide.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'rockSlide',
  initiative: 81,
  image,
  level: LEVELS[4],
  top: {
    tags: [
      TAGS.OTHER.RANGED,
      TAGS.CLASSES.CRAGHEART,
      TAGS.TARGETS.ADJACENT_ALLY,
      TAGS.TARGETS.ADJACENT_ENEMY,
      TAGS.INCREASE_ELEMENTS.EARTH,
      TAGS.OTHER.XP,
    ],
  },
  bottom: {
    moves: ['6'],
  },
};
