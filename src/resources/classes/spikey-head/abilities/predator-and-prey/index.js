import image from './predator-and-prey.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'predatorAndPrey',
  initiative: 86,
  image,
  level: LEVELS[9],
  top: {
    tags: [
      TAGS.ACTIONS.SUMMON,
      TAGS.EFFECTS.POISON,
      TAGS.OTHER.RANGED,
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
