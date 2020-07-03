import image from './dangerous-contraption.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'dangerousContraption',
  initiative: 84,
  image,
  level: LEVELS[4],
  top: {
    tags: [
      TAGS.ACTIONS.SUMMON,
      TAGS.OTHER.XP,
      TAGS.DURATION.PERMANENT,
      TAGS.OTHER.LOST,
    ],
  },
  bottom: {
    moves: ['4'],
  },
};
