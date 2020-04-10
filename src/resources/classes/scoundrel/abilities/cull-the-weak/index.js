import image from './cull-the-weak.jpg';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'cullTheWeak',
  initiative: 16,
  image,
  level: LEVELS[5],
  top: {
    attacks: [4],
    tags: [
      TAGS.CLASSES.SCOUNDREL,
      TAGS.OTHER.XP,
    ],
  },
  bottom: {
    tags: [
      TAGS.EFFECTS.DISARM,
      TAGS.EFFECTS.IMMOBILIZE,
      TAGS.EFFECTS.STUN,
      TAGS.DURATION.USES,
      TAGS.OTHER.LOST,
    ],
  },
};
