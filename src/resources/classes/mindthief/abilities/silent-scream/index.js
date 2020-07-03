import image from './silent-scream.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'silentScream',
  initiative: 73,
  image,
  level: LEVELS[3],
  top: {
    attacks: ['2'],
    tags: [
      TAGS.ACTIONS.HEAL,
      TAGS.CLASSES.MINDTHIEF,
      TAGS.OTHER.XP,
      TAGS.DURATION.PERMANENT,
    ],
  },
  bottom: {
    moves: ['3'],
    tags: [
      TAGS.ACTIONS.PUSH,
      TAGS.USE_ELEMENTS.FROST,
    ],
  },
};
