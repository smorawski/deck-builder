import image from './forceful-swipe.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'forcefulSwipe',
  initiative: 35,
  image,
  level: LEVELS[1],
  top: {
    attacks: ['2'],
    tags: [
      TAGS.CLASSES.TWO_MINI,
      TAGS.TARGETS.AREA,
      TAGS.OTHER.XP,
    ],
  },
  bottom: {
    moves: ['3'],
    tags: [
      TAGS.CLASSES.TWO_MINI,
      TAGS.ACTIONS.PUSH,
      TAGS.OTHER.XP,
    ],
  },
};
