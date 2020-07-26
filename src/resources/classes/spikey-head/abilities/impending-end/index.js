import image from './impending-end.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'impendingEnd',
  initiative: 47,
  image,
  level: LEVELS[7],
  top: {
    attacks: ['4'],
    tags: [
      TAGS.OTHER.RANGED,
      TAGS.ACTIONS.KILL_ENEMY,
      TAGS.OTHER.XP,
    ],
  },
  bottom: {
    tags: [
      TAGS.CLASSES.SPIKEY_HEAD,
      TAGS.EFFECTS.INCREASE_ATTACK,
      TAGS.DURATION.ONE_ROUND,
    ],
  },
};
