import image from './chimeric-formula.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'chimericFormula',
  initiative: 43,
  image,
  level: LEVELS[9],
  top: {
    tags: [
      TAGS.EFFECTS.RECOVER,
    ],
  },
  bottom: {
    tags: [
      TAGS.EFFECTS.RECOVER,
      TAGS.OTHER.RANGED,
      TAGS.OTHER.XP,
      TAGS.OTHER.LOST,
    ],
  },
};
