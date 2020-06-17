import image from './intervening-apparition.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'interveningApparition',
  initiative: 68,
  image,
  level: LEVELS[8],
  top: {
    tags: [
      TAGS.DURATION.USES,
      TAGS.OTHER.LOST,
      TAGS.OTHER.XP,
    ],
  },
  bottom: {
    tags: [
      TAGS.EFFECTS.CURSE,
      TAGS.INCREASE_ELEMENTS.LIGHT,
    ],
  },
};
