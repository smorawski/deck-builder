import image from './conjured-aid.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'conjuredAid',
  initiative: 81,
  image,
  level: LEVELS[5],
  top: {
    tags: [
      TAGS.ACTIONS.HEAL,
      TAGS.ACTIONS.SUMMON,
      TAGS.OTHER.XP,
      TAGS.OTHER.LOST,
    ],
  },
  bottom: {
    moves: ['5'],
  },
};
