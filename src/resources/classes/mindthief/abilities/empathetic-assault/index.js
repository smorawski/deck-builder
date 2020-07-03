import image from './empathetic-assault.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'empatheticAssault',
  initiative: 11,
  image,
  level: LEVELS[1],
  top: {
    attacks: ['4'],
    tags: [
      TAGS.OTHER.RANGED,
      TAGS.EFFECTS.DISARM,
      TAGS.INCREASE_ELEMENTS.FROST,
      TAGS.OTHER.XP,
      TAGS.OTHER.LOST,
    ],
  },
  bottom: {
    attacks: ['2'],
    tags: [
      TAGS.ACTIONS.HEAL,
    ],
  },
};
