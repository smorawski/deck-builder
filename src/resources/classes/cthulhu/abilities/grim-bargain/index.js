import image from './grim-bargain.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'grimBargain',
  initiative: 46,
  image,
  level: LEVELS[8],
  top: {
    tags: [
      TAGS.EFFECTS.CURSE,
      TAGS.TARGETS.MULTIPLE,
      TAGS.DURATION.USES,
      TAGS.OTHER.XP,
      TAGS.OTHER.RANGED,
      TAGS.OTHER.LOST,
    ],
  },
  bottom: {
    tags: [
      TAGS.EFFECTS.MUDDLE,
      TAGS.INCREASE_ELEMENTS.DARKNESS,
      TAGS.OTHER.XP,
      TAGS.DURATION.ONE_ROUND,
      TAGS.OTHER.LOST,
    ],
  },
};
