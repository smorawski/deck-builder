import image from './armor-of-the-night.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'armorOfTheNight',
  initiative: 23,
  image,
  level: LEVELS[3],
  top: {
    attacks: ['4'],
    tags: [
      TAGS.USE_ELEMENTS.DARKNESS,
      TAGS.ACTIONS.HEAL,
      TAGS.OTHER.XP,
    ],
  },
  bottom: {
    tags: [
      TAGS.EFFECTS.SHIELD,
      TAGS.INCREASE_ELEMENTS.DARKNESS,
      TAGS.DURATION.ONE_ROUND,
    ],
  },
};
