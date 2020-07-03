import image from './relentless-ally.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'relentlessAlly',
  initiative: 81,
  image,
  level: LEVELS[1],
  top: {
    tags: [
      TAGS.ACTIONS.SUMMON,
      TAGS.OTHER.XP,
      TAGS.OTHER.LOST,
    ],
  },
  bottom: {
    moves: ['5'],
  },
};
