import image from './proficiency.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'proficiency',
  initiative: 62,
  image,
  level: LEVELS[1],
  top: {
    tags: [
      TAGS.EFFECTS.INCREASE_ATTACK,
      TAGS.OTHER.XP,
      TAGS.DURATION.PERMANENT,
      TAGS.OTHER.LOST,
    ],
  },
  bottom: {
    moves: ['3'],
  },
};
