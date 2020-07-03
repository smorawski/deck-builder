import image from './howling-bolts.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'howlingBolts',
  initiative: 47,
  image,
  level: LEVELS[1],
  top: {
    attacks: ['1'],
    tags: [
      TAGS.OTHER.RANGED,
      TAGS.TARGETS.MULTIPLE,
    ],
  },
  bottom: {
    moves: ['5'],
    tags: [
      TAGS.CLASSES.TWO_MINI,
      TAGS.OTHER.XP,
    ],
  },
};
