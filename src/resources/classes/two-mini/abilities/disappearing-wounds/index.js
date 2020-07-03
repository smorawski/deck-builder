import image from './disappearing-wounds.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'disappearingWounds',
  initiative: 23,
  image,
  level: LEVELS[1],
  top: {
    tags: [
      TAGS.ACTIONS.HEAL,
    ],
  },
  bottom: {
    attacks: ['2'],
    tags: [
      TAGS.CLASSES.TWO_MINI,
      TAGS.OTHER.XP,
    ],
  },
};
