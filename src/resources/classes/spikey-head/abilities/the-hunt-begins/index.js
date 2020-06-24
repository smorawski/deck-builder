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
      TAGS.ACTIONS.SUMMON,
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
      TAGS.DURATION.PERMANENT,
    ],
  },
};
