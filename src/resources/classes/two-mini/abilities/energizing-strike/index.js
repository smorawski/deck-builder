import image from './energizing-strike.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'energizingStrike',
  initiative: 29,
  image,
  level: LEVELS[2],
  top: {
    attacks: ['4'],
    tags: [
      TAGS.CLASSES.TWO_MINI,
      TAGS.EFFECTS.STRENGTHEN,
      TAGS.OTHER.XP,
    ],
  },
  bottom: {
    tags: [
      TAGS.ACTIONS.HEAL,
      TAGS.TARGETS.MULTIPLE,
    ],
  },
};
