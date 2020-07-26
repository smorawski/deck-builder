import image from './domination.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'domination',
  initiative: 13,
  image,
  level: LEVELS[8],
  top: {
    attacks: ['4'],
    tags: [
      TAGS.CLASSES.MINDTHIEF,
      TAGS.TARGETS.ADJACENT_ALLY,
      TAGS.OTHER.XP,
    ],
  },
  bottom: {
    tags: [
      TAGS.ACTIONS.CONTROL_ENEMY,
      TAGS.OTHER.DURATION,
      TAGS.OTHER.XP,
      TAGS.DURATION.ONE_ROUND,
      TAGS.OTHER.LOST,
    ],
  },
};
