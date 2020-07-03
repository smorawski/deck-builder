import image from './illuminate-the-target.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'illuminatingTheTarget',
  initiative: 91,
  image,
  level: LEVELS[6],
  top: {
    attacks: ['5'],
    tags: [
      TAGS.EFFECTS.STRENGTHEN,
      TAGS.TARGETS.MULTIPLE,
      TAGS.OTHER.XP,
    ],
  },
  bottom: {
    attacks: ['6'],
  },
};
