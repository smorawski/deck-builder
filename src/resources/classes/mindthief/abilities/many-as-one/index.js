import image from './many-as-one.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'manyAsOne',
  initiative: 91,
  image,
  level: LEVELS[9],
  top: {
    tags: [
      TAGS.ACTIONS.SUMMON,
      TAGS.DURATION.PERMANENT,
      TAGS.OTHER.XP,
      TAGS.OTHER.LOST,
    ],
  },
  bottom: {
    tags: [
      TAGS.OTHER.RANGED,
      TAGS.OTHER.XP,
      TAGS.DURATION.ONE_ROUND,
      TAGS.OTHER.LOST,
    ],
  },
};
