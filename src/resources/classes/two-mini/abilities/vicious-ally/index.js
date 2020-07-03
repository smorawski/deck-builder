import image from './vicious-ally.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'viciousAlly',
  initiative: 86,
  image,
  level: LEVELS[3],
  top: {
    tags: [
      TAGS.ACTIONS.SUMMON,
      TAGS.EFFECTS.IMMOBILIZE,
      TAGS.OTHER.XP,
      TAGS.OTHER.LOST,
    ],
  },
  bottom: {
    attacks: ['2'],
    tags: [
      TAGS.CLASSES.TWO_MINI,
      TAGS.TARGETS.MULTIPLE,
      TAGS.OTHER.XP,
    ],
  },
};
