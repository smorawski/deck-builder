import image from './reforge.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'reforge',
  initiative: 95,
  image,
  level: LEVELS[2],
  top: {
    tags: [
      TAGS.EFFECTS.REFRESH,
      TAGS.OTHER.XP,
    ],
  },
  bottom: {
    tags: [
      TAGS.EFFECTS.RECOVER,
    ],
  },
};
