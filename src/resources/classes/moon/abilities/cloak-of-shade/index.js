import image from './cloak-of-shade.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'cloakOfShade',
  initiative: 13,
  image,
  level: LEVELS[1],
  top: {
    attacks: ['1'],
    tags: [
      TAGS.INCREASE_ELEMENTS.DARKNESS,
    ],
  },
  bottom: {
    moves: ['3'],
    tags: [
      TAGS.USE_ELEMENTS.DARKNESS,
      TAGS.EFFECTS.INVISIBLE,
      TAGS.OTHER.XP,
    ],
  },
};
