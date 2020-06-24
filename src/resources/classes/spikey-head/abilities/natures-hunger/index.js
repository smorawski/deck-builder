import image from './natures-hunger.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'naturesHunger',
  initiative: 82,
  image,
  level: LEVELS[6],
  top: {
    tags: [
      TAGS.ACTIONS.SUMMON,
      TAGS.EFFECTS.STUN,
      TAGS.OTHER.XP,
      TAGS.DURATION.PERMANENT,
      TAGS.OTHER.LOST,
    ],
  },
  bottom: {
    tags: [
      TAGS.CLASSES.SPIKEY_HEAD,
      TAGS.ACTIONS.HEAL,
      TAGS.DURATION.PERMANENT,
    ],
  },
};
