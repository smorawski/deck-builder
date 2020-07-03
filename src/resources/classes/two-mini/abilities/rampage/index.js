import image from './rampage.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'rampage',
  initiative: 34,
  image,
  level: LEVELS[5],
  top: {
    attacks: ['2/2/2'],
    moves: ['2/2'],
    tags: [
      TAGS.CLASSES.TWO_MINI,
      TAGS.OTHER.XP,
      TAGS.OTHER.LOST,
    ],
  },
  bottom: {
    tags: [
      TAGS.ACTIONS.CONTROL_SUMMON,
    ],
  },
};
