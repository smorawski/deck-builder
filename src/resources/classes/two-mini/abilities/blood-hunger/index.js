import image from './blood-hunger.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'bloodHunger',
  initiative: 42,
  image,
  level: LEVELS[6],
  top: {
    tags: [
      TAGS.ACTIONS.HEAL,
      TAGS.DURATION.USES,
      TAGS.OTHER.XP,
      TAGS.OTHER.LOST,
    ],
  },
  bottom: {
    attacks: ['3'],
    tags: [
      TAGS.CLASSES.TWO_MINI,
      TAGS.ACTIONS.HEAL,
      TAGS.OTHER.XP,
    ],
  },
};
