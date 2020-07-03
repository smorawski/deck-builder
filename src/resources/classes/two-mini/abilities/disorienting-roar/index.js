import image from './disorienting-roar.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'disorientingRoar',
  initiative: 17,
  image,
  level: LEVELS[1],
  top: {
    tags: [
      TAGS.CLASSES.TWO_MINI,
      TAGS.EFFECTS.MUDDLE,
      TAGS.EFFECTS.IMMOBILIZE,
      TAGS.OTHER.RANGED,
      TAGS.TARGETS.MULTIPLE,
      TAGS.OTHER.XP,
    ],
  },
  bottom: {
    tags: [
      TAGS.ACTIONS.TELEPORT,
      TAGS.OTHER.LOST,
    ],
  },
};
