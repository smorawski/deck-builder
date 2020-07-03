import image from './grim-sustenance.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'grimSustenance',
  initiative: 29,
  image,
  level: LEVELS[4],
  top: {
    attacks: ['2'],
    tags: [
      TAGS.CLASSES.MOON,
      TAGS.EFFECTS.INVISIBLE,
      TAGS.OTHER.XP,
    ],
  },
  bottom: {
    tags: [
      TAGS.ACTIONS.LOOT,
      TAGS.INCREASE_ELEMENTS.DARKNESS,
    ],
  },
};
