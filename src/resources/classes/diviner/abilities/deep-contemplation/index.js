import image from './deep-contemplation.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'deepContemplation',
  initiative: 91,
  image,
  level: LEVELS[8],
  top: {
    tags: [
      TAGS.ACTIONS.HEAL,
      TAGS.EFFECTS.INVISIBLE,
      TAGS.EFFECTS.BLESS,
      TAGS.EFFECTS.STRENGTHEN,
      TAGS.USE_ELEMENTS.ANY,
      TAGS.INCREASE_ELEMENTS.LIGHT,
      TAGS.INCREASE_ELEMENTS.DARKNESS,
    ],
  },
  bottom: {
    tags: [
      TAGS.CLASSES.DIVINER,
      TAGS.USE_ELEMENTS.LIGHT,
      TAGS.USE_ELEMENTS.DARKNESS,
      TAGS.OTHER.XP,
    ],
  },
};
