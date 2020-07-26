import image from './the-hunt-begins.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'theHuntBegins',
  initiative: 71,
  image,
  level: LEVELS.X,
  top: {
    tags: [
      TAGS.ACTIONS.CONTROL_SUMMON,
      TAGS.EFFECTS.RETALIATE,
      TAGS.EFFECTS.WOUND,
      TAGS.OTHER.XP,
      TAGS.DURATION.PERMANENT,
      TAGS.OTHER.LOST,
    ],
  },
  bottom: {
    tags: [
      TAGS.CLASSES.SPIKEY_HEAD,
      TAGS.EFFECTS.INCREASE_ATTACK,
      TAGS.DURATION.PERMANENT,
    ],
  },
};
