import image from './envision-the-course.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'envisionTheCourse',
  initiative: 80,
  image,
  level: LEVELS[3],
  top: {
    tags: [
      TAGS.USE_ELEMENTS.LIGHT,
      TAGS.USE_ELEMENTS.DARKNESS,
      TAGS.OTHER.XP,
    ],
  },
  bottom: {
    tags: [
      TAGS.ACTIONS.SUMMON,
      TAGS.OTHER.XP,
      TAGS.DURATION.PERMANENT,
      TAGS.OTHER.LOST,
    ],
  },
};
