import image from './murderous-contraption.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'murderousContraption',
  initiative: 94,
  image,
  level: LEVELS[7],
  top: {
    tags: [
      TAGS.ACTIONS.SUMMON,
      TAGS.OTHER.XP,
      TAGS.OTHER.LOST,
    ],
  },
  bottom: {
    attacks: ['4'],
    tags: [
      TAGS.OTHER.RANGED,
    ],
  },
};
