import image from './baneful-hex.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'banefulHex',
  initiative: 33,
  image,
  level: LEVELS[7],
  top: {
    tags: [
      TAGS.CLASSES.CTHULHU,
      TAGS.EFFECTS.CURSE,
      TAGS.OTHER.XP,
      TAGS.DURATION.PERMANENT,
      TAGS.OTHER.LOST,
    ],
  },
  bottom: {
    moves: ['3'],
    tags: [
      TAGS.EFFECTS.CURSE,
      TAGS.TARGETS.MULTIPLE,
    ],
  },
};
