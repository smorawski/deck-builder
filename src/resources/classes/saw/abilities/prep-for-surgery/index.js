import image from './prep-for-surgery.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'prepForSurgery',
  initiative: 22,
  image,
  level: LEVELS[9],
  top: {
    tags: [
      TAGS.ACTIONS.HEAL,
      TAGS.OTHER.XP,
      TAGS.DURATION.PERMANENT,
      TAGS.OTHER.LOST,
    ],
  },
  bottom: {
    moves: ['3'],
    tags: [
      TAGS.EFFECTS.STUN,
    ],
  },
};
