import image from './living-torch.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'livingTorch',
  initiative: 96,
  image,
  level: LEVELS[6],
  top: {
    attacks: ['4'],
    tags: [
      TAGS.OTHER.RANGED,
      TAGS.EFFECTS.IMMOBILIZE,
      TAGS.USE_ELEMENTS.LIGHT,
      TAGS.OTHER.XP,
    ],
  },
  bottom: {
    tags: [
      TAGS.ACTIONS.SUMMON,
      TAGS.OTHER.XP,
      TAGS.OTHER.LOST,
      TAGS.INCREASE_ELEMENTS.FIRE,
    ],
  },
};
