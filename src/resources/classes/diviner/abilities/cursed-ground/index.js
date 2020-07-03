import image from './cursed-ground.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'cursedGround',
  initiative: 25,
  image,
  level: LEVELS[1],
  top: {
    tags: [
      TAGS.CLASSES.DIVINER,
      TAGS.EFFECTS.CURSE,
      TAGS.DURATION.ONE_ROUND,
    ],
  },
  bottom: {
    tags: [
      TAGS.ACTIONS.LOOT,
      TAGS.EFFECTS.MUDDLE,
      TAGS.OTHER.RANGED,
      TAGS.TARGETS.MULTIPLE,
    ],
  },
};
