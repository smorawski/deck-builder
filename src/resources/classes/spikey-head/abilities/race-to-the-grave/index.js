import image from './race-to-the-grave.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'raceToTheGrave',
  initiative: 9,
  image,
  level: LEVELS[1],
  top: {
    attacks: ['5'],
    tags: [
      TAGS.OTHER.RANGED,
      TAGS.OTHER.XP,
      TAGS.OTHER.LOST,
    ],
  },
  bottom: {
    tags: [
      TAGS.CLASSES.SPIKEY_HEAD,
      TAGS.DURATION.PERMANENT,
    ],
  },
};
