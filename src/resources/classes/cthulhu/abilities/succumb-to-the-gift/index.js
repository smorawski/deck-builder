import image from './succumb-to-the-gift.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'succumbToTheGift',
  initiative: 70,
  image,
  level: LEVELS[3],
  top: {
    tags: [
      TAGS.ACTIONS.KILL_ENEMY,
      TAGS.EFFECTS.POISON,
      TAGS.OTHER.RANGED,
      TAGS.OTHER.XP,
      TAGS.OTHER.LOST,
      TAGS.CLASSES.CTHULHU,
    ],
  },
  bottom: {
    tags: [
      TAGS.EFFECTS.BLESS,
      TAGS.EFFECTS.POISON,
      TAGS.TARGETS.MULTIPLE,
      TAGS.CLASSES.CTHULHU,
    ],
  },
};
