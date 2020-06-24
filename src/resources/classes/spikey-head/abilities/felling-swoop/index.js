import image from './felling-swoop.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'fellingSwoop',
  initiative: 75,
  image,
  level: LEVELS[1],
  top: {
    tags: [
      TAGS.ACTIONS.SUMMON,
      TAGS.OTHER.XP,
      TAGS.DURATION.PERMANENT,
      TAGS.OTHER.LOST,
    ],
  },
  bottom: {
    moves: [],
    tags: [
      TAGS.CLASSES.SPIKEY_HEAD,
      TAGS.ACTIONS.TELEPORT,
      TAGS.DURATION.PERMANENT,
    ],
  },
};
