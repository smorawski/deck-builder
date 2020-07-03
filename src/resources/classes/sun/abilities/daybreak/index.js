import image from './daybreak.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'daybreak',
  initiative: 85,
  image,
  level: LEVELS.X,
  top: {
    attacks: ['3'],
    tags: [
      TAGS.EFFECTS.MUDDLE,
      TAGS.USE_ELEMENTS.DARKNESS,
      TAGS.INCREASE_ELEMENTS.LIGHT,
      TAGS.OTHER.XP,
    ],
  },
  bottom: {
    moves: ['2'],
    tags: [
      TAGS.EFFECTS.BLESS,
    ],
  },
};
