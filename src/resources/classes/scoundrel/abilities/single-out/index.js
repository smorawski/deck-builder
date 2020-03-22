import image from './single-out.jpg';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'singleOut',
  initiative: 86,
  image,
  level: LEVELS[1],
  top: {
    attacks: ['3/5'],
    tags: [
      TAGS.OTHER.XP,
      TAGS.CLASSES.SCOUNDREL,
    ],
  },
  bottom: {
    tags: [
      TAGS.OTHER.XP,
      TAGS.DURATION.USES,
    ],
  },
};
