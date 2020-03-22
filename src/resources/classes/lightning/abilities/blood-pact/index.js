import image from './blood-pact.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'bloodPact',
  initiative: 76,
  image,
  level: LEVELS[1],
  top: {
    attacks: ['6'],
    tags: [
      TAGS.CLASSES.LIGHTNING,
      TAGS.OTHER.XP,
    ],
  },
  bottom: {
    tags: [
      TAGS.CLASSES.LIGHTNING,
      TAGS.OTHER.XP,
      TAGS.DURATION.PERMANENT,
      TAGS.OTHER.LOST,
    ],
  },
};
