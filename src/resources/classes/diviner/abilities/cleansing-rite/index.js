import image from './cleansing-rite.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'cleansingRite',
  initiative: 62,
  image,
  level: LEVELS[4],
  top: {
    tags: [
      TAGS.ACTIONS.HEAL,
      TAGS.EFFECTS.CURSE,
      TAGS.OTHER.XP,
    ],
  },
  bottom: {
    tags: [
      TAGS.EFFECTS.RECOVER,
      TAGS.INCREASE_ELEMENTS.LIGHT,
      TAGS.OTHER.XP,
      TAGS.OTHER.LOST,
    ],
  },
};
