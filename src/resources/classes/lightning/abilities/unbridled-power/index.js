import image from './unbridled-power.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'unbridledPower',
  initiative: 67,
  image,
  level: LEVELS.X,
  top: {
    attacks: ['2'],
    tags: [
      TAGS.EFFECTS.STUN,
      TAGS.USE_ELEMENTS.FIRE,
    ],
  },
  bottom: {
    tags: [
      TAGS.ACTIONS.HEAL,
      TAGS.OTHER.XP,
      TAGS.DURATION.PERMANENT,
      TAGS.OTHER.LOST,
    ],
  },
};
