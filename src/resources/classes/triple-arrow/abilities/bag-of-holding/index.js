import image from './bag-of-holding.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'bagOfHolding',
  initiative: 91,
  image,
  level: LEVELS[9],
  top: {
    tags: [
      TAGS.ACTIONS.LOOT,
    ],
  },
  bottom: {
    tags: [
      TAGS.EFFECTS.REFRESH,
      TAGS.TARGETS.MULTIPLE,
      TAGS.OTHER.XP,
      TAGS.OTHER.LOST,
    ],
  },
};
