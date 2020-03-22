import image from './tuning-the-outcome.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'tuningTheOutcome',
  initiative: 78,
  image,
  level: LEVELS[1],
  top: {
    tags: [
      TAGS.EFFECTS.BLESS,
      TAGS.TARGETS.MULTIPLE,
    ],
  },
  bottom: {
    moves: ['3'],
    tags: [
      TAGS.EFFECTS.CURSE,
      TAGS.OTHER.RANGED,
    ],
  },
};
