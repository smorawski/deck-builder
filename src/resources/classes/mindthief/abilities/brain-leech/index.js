import image from './brain-leech.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'brainLeech',
  initiative: 16,
  image,
  level: LEVELS[3],
  top: {
    attacks: ['4'],
    tags: [
      TAGS.OTHER.RANGED,
      TAGS.ACTIONS.HEAL,
      TAGS.INCREASE_ELEMENTS.DARKNESS,
      TAGS.OTHER.XP,
      TAGS.OTHER.LOST,
    ],
  },
  bottom: {
    attacks: ['1'],
    tags: [
      TAGS.EFFECTS.STRENGTHEN,
    ],
  },
};
