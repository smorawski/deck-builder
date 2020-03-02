import image from './single-out.jpg';
import { TAGS } from '../../../../constants/card';

export default {
  name: 'single-out',
  initiative: 86,
  image,
  level: 1,
  top: {
    attacks: ['3/5'],
    tags: [
      TAGS.OTHER.XP,
    ],
  },
  bottom: {
    tags: [
      TAGS.OTHER.XP,
      TAGS.DURATION.USES,
    ],
  },
};
