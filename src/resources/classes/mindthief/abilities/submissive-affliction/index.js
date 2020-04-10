import image from './submissive-affliction.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'submissiveAffliction',
  initiative: 48,
  image,
  level: LEVELS[1],
  top: {
    attacks: ['2'],
    tags: [
      TAGS.CLASSES.MINDTHIEF,
      TAGS.OTHER.XP,
    ],
  },
  bottom: {
    tags: [
      TAGS.ACTIONS.CONTROL_ENEMY,
      TAGS.OTHER.RANGED,
    ],
  },
};
