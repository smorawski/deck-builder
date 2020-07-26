import image from './scroll-of-judgement.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'scrollOfJudgement',
  initiative: 66,
  image,
  level: LEVELS[5],
  top: {
    tags: [
      TAGS.OTHER.RANGED,
      TAGS.OTHER.XP,
      TAGS.OTHER.LOST,
    ],
  },
  bottom: {
    moves: ['2'],
    tags: [
      TAGS.EFFECTS.STUN,
      TAGS.TARGETS.ADJACENT_ENEMY,
    ],
  },
};
