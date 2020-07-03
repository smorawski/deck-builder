import image from './crippling-bow.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'cripplingBow',
  initiative: 44,
  image,
  level: LEVELS[1],
  top: {
    attacks: ['3'],
    tags: [
      TAGS.OTHER.RANGED,
      TAGS.OTHER.XP,
    ],
  },
  bottom: {
    attack: ['1'],
    tags: [
      TAGS.OTHER.RANGED,
      TAGS.EFFECTS.IMMOBILIZE,
    ],
  },
};
