import image from './continual-supply.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'continualSupply',
  initiative: 86,
  image,
  level: LEVELS[3],
  top: {
    tags: [
      TAGS.EFFECTS.REFRESH,
      TAGS.OTHER.XP,
      TAGS.DURATION.PERMANENT,
      TAGS.OTHER.LOST,
    ],
  },
  bottom: {
    tags: [
      TAGS.EFFECTS.RECOVER,
      TAGS.OTHER.LOST,
    ],
  },
};
