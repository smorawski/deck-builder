import image from './venomous-ally.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'venomousAlly',
  initiative: 79,
  image,
  level: LEVELS[1],
  top: {
    tags: [
      TAGS.ACTIONS.SUMMON,
      TAGS.EFFECTS.POISON,
      TAGS.OTHER.XP,
      TAGS.OTHER.LOST,
    ],
  },
  bottom: {
    attacks: ['2'],
    tags: [
      TAGS.OTHER.RANGED,
      TAGS.EFFECTS.POISON,
    ],
  },
};
