import image from './patch-fur.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'patchFur',
  initiative: 20,
  image,
  level: LEVELS[1],
  top: {
    tags: [
      TAGS.EFFECTS.SHIELD,
      TAGS.TARGETS.MULTIPLE,
      TAGS.DURATION.ONE_ROUND,
    ],
  },
  bottom: {
    tags: [
      TAGS.CLASSES.TWO_MINI,
      TAGS.ACTIONS.HEAL,
      TAGS.OTHER.XP,
    ],
  },
};
